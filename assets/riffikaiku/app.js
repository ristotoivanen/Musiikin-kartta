function Md(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var so = { exports: {} }, ti = {}, oo = { exports: {} }, we = {};
var nc;
function Rd() {
  if (nc) return we;
  nc = 1;
  var u = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), T = Symbol.iterator;
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
    var de, pe = {}, me = null, F = null;
    if (C != null) for (de in C.ref !== void 0 && (F = C.ref), C.key !== void 0 && (me = "" + C.key), C) Q.call(C, de) && !re.hasOwnProperty(de) && (pe[de] = C[de]);
    var $ = arguments.length - 2;
    if ($ === 1) pe.children = ue;
    else if (1 < $) {
      for (var z = Array($), X = 0; X < $; X++) z[X] = arguments[X + 2];
      pe.children = z;
    }
    if (y && y.defaultProps) for (de in $ = y.defaultProps, $) pe[de] === void 0 && (pe[de] = $[de]);
    return { $$typeof: u, type: y, key: me, ref: F, props: pe, _owner: H.current };
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
    var F = !1;
    if (y === null) F = !0;
    else switch (me) {
      case "string":
      case "number":
        F = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case u:
          case l:
            F = !0;
        }
    }
    if (F) return F = y, pe = pe(F), y = de === "" ? "." + Re(F, 0) : de, b(pe) ? (ue = "", y != null && (ue = y.replace(De, "$&/") + "/"), Be(pe, C, ue, "", function(X) {
      return X;
    })) : pe != null && (xe(pe) && (pe = Me(pe, ue + (!pe.key || F && F.key === pe.key ? "" : ("" + pe.key).replace(De, "$&/") + "/") + y)), C.push(pe)), 1;
    if (F = 0, de = de === "" ? "." : de + ":", b(y)) for (var $ = 0; $ < y.length; $++) {
      me = y[$];
      var z = de + Re(me, $);
      F += Be(me, C, ue, z, pe);
    }
    else if (z = L(y), typeof z == "function") for (y = z.call(y), $ = 0; !(me = y.next()).done; ) me = me.value, z = de + Re(me, $++), F += Be(me, C, ue, z, pe);
    else if (me === "object") throw C = String(y), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
    return F;
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
    var de = O({}, y.props), pe = y.key, me = y.ref, F = y._owner;
    if (C != null) {
      if (C.ref !== void 0 && (me = C.ref, F = H.current), C.key !== void 0 && (pe = "" + C.key), y.type && y.type.defaultProps) var $ = y.type.defaultProps;
      for (z in C) Q.call(C, z) && !re.hasOwnProperty(z) && (de[z] = C[z] === void 0 && $ !== void 0 ? $[z] : C[z]);
    }
    var z = arguments.length - 2;
    if (z === 1) de.children = ue;
    else if (1 < z) {
      $ = Array(z);
      for (var X = 0; X < z; X++) $[X] = arguments[X + 2];
      de.children = $;
    }
    return { $$typeof: u, type: y.type, key: pe, ref: me, props: de, _owner: F };
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
  return rc || (rc = 1, oo.exports = Rd()), oo.exports;
}
var ic;
function Ld() {
  if (ic) return ti;
  ic = 1;
  var u = xo(), l = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, f = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(x, E, _) {
    var j, T = {}, L = null, V = null;
    _ !== void 0 && (L = "" + _), E.key !== void 0 && (L = "" + E.key), E.ref !== void 0 && (V = E.ref);
    for (j in E) c.call(E, j) && !h.hasOwnProperty(j) && (T[j] = E[j]);
    if (x && x.defaultProps) for (j in E = x.defaultProps, E) T[j] === void 0 && (T[j] = E[j]);
    return { $$typeof: l, type: x, key: L, ref: V, props: T, _owner: f.current };
  }
  return ti.Fragment = o, ti.jsx = w, ti.jsxs = w, ti;
}
var lc;
function Pd() {
  return lc || (lc = 1, so.exports = Ld()), so.exports;
}
var p = Pd(), je = xo(), vl = {}, ao = { exports: {} }, xt = {}, uo = { exports: {} }, co = {};
var sc;
function Ad() {
  return sc || (sc = 1, (function(u) {
    function l(B, ee) {
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
          var de = 2 * (y + 1) - 1, pe = B[de], me = de + 1, F = B[me];
          if (0 > f(pe, U)) me < C && 0 > f(F, pe) ? (B[y] = F, B[me] = U, y = me) : (B[y] = pe, B[de] = U, y = de);
          else if (me < C && 0 > f(F, U)) B[y] = F, B[me] = U, y = me;
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
        else if (ee.startTime <= B) c(_), ee.sortIndex = ee.expirationTime, l(E, ee);
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
      return C = U + C, B = { id: j++, callback: ee, priorityLevel: B, startTime: U, expirationTime: C, sortIndex: -1 }, U > y ? (B.sortIndex = U, l(_, B), o(E) === null && B === o(_) && (P ? (Z(he), he = -1) : P = !0, Ee(b, U - y))) : (B.sortIndex = C, l(E, B), O || V || (O = !0, Le(Q))), B;
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
function zd() {
  return oc || (oc = 1, uo.exports = Ad()), uo.exports;
}
var ac;
function Fd() {
  if (ac) return xt;
  ac = 1;
  var u = xo(), l = zd();
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
  function P(e, t, n, r, i, s, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = a;
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
`), s = r.stack.split(`
`), a = i.length - 1, d = s.length - 1; 1 <= a && 0 <= d && i[a] !== s[d]; ) d--;
        for (; 1 <= a && 0 <= d; a--, d--) if (i[a] !== s[d]) {
          if (a !== 1 || d !== 1)
            do
              if (a--, d--, 0 > d || i[a] !== s[d]) {
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
  function F(e) {
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
      var i = n.get, s = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(a) {
        r = "" + a, s.call(this, a);
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
    t.hasOwnProperty("value") ? Ie(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ie(e, t.type, $(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Qe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ie(e, t, n) {
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
  var El = !1;
  function _o(e, t, n) {
    if (El) return e(t, n);
    El = !0;
    try {
      return So(e, t, n);
    } finally {
      El = !1, (ht !== null || Wt !== null) && (Eo(), Qn());
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
  var _l = !1;
  if (x) try {
    var wr = {};
    Object.defineProperty(wr, "passive", { get: function() {
      _l = !0;
    } }), window.addEventListener("test", wr, wr), window.removeEventListener("test", wr, wr);
  } catch {
    _l = !1;
  }
  function zc(e, t, n, r, i, s, a, d, m) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (M) {
      this.onError(M);
    }
  }
  var xr = !1, ui = null, ci = !1, Tl = null, Fc = { onError: function(e) {
    xr = !0, ui = e;
  } };
  function Ic(e, t, n, r, i, s, a, d, m) {
    xr = !1, ui = null, zc.apply(Fc, arguments);
  }
  function Oc(e, t, n, r, i, s, a, d, m) {
    if (Ic.apply(this, arguments), xr) {
      if (xr) {
        var S = ui;
        xr = !1, ui = null;
      } else throw Error(o(198));
      ci || (ci = !0, Tl = S);
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
  function Dc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nn(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === n) return jo(i), e;
          if (s === r) return jo(i), t;
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) n = i, r = s;
      else {
        for (var a = !1, d = i.child; d; ) {
          if (d === n) {
            a = !0, n = i, r = s;
            break;
          }
          if (d === r) {
            a = !0, r = i, n = s;
            break;
          }
          d = d.sibling;
        }
        if (!a) {
          for (d = s.child; d; ) {
            if (d === n) {
              a = !0, n = s, r = i;
              break;
            }
            if (d === r) {
              a = !0, r = s, n = i;
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
    return e = Dc(e), e !== null ? No(e) : null;
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
  var Mo = l.unstable_scheduleCallback, Ro = l.unstable_cancelCallback, Bc = l.unstable_shouldYield, $c = l.unstable_requestPaint, Ze = l.unstable_now, Vc = l.unstable_getCurrentPriorityLevel, jl = l.unstable_ImmediatePriority, Lo = l.unstable_UserBlockingPriority, fi = l.unstable_NormalPriority, Uc = l.unstable_LowPriority, Po = l.unstable_IdlePriority, di = null, Kt = null;
  function Hc(e) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function") try {
      Kt.onCommitFiberRoot(di, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var zt = Math.clz32 ? Math.clz32 : Qc, Wc = Math.log, Kc = Math.LN2;
  function Qc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wc(e) / Kc | 0) | 0;
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
    var r = 0, i = e.suspendedLanes, s = e.pingedLanes, a = n & 268435455;
    if (a !== 0) {
      var d = a & ~i;
      d !== 0 ? r = Sr(d) : (s &= a, s !== 0 && (r = Sr(s)));
    } else a = n & ~i, a !== 0 ? r = Sr(a) : s !== 0 && (r = Sr(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - zt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function Gc(e, t) {
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
  function qc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
      var a = 31 - zt(s), d = 1 << a, m = i[a];
      m === -1 ? ((d & n) === 0 || (d & r) !== 0) && (i[a] = Gc(d, t)) : m <= t && (e.expiredLanes |= d), s &= ~d;
    }
  }
  function Cl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ao() {
    var e = hi;
    return hi <<= 1, (hi & 4194240) === 0 && (hi = 64), e;
  }
  function Nl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Er(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - zt(t), e[t] = n;
  }
  function Yc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - zt(n), s = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
    }
  }
  function Ml(e, t) {
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
  var Fo, Rl, Io, Oo, Do, Ll = !1, vi = [], an = null, un = null, cn = null, _r = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), fn = [], Xc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
  function jr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = $r(t), t !== null && Rl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Jc(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return an = jr(an, e, t, n, r, i), !0;
      case "dragenter":
        return un = jr(un, e, t, n, r, i), !0;
      case "mouseover":
        return cn = jr(cn, e, t, n, r, i), !0;
      case "pointerover":
        var s = i.pointerId;
        return _r.set(s, jr(_r.get(s) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return s = i.pointerId, Tr.set(s, jr(Tr.get(s) || null, e, t, n, r, i)), !0;
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
              Io(n);
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
      var n = Al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ae = r, n.target.dispatchEvent(r), Ae = null;
      } else return t = $r(n), t !== null && Rl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Vo(e, t, n) {
    yi(e) && n.delete(t);
  }
  function Zc() {
    Ll = !1, an !== null && yi(an) && (an = null), un !== null && yi(un) && (un = null), cn !== null && yi(cn) && (cn = null), _r.forEach(Vo), Tr.forEach(Vo);
  }
  function Cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ll || (Ll = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Zc)));
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
  function bc(e, t, n, r) {
    var i = Ne, s = Gn.transition;
    Gn.transition = null;
    try {
      Ne = 1, Pl(e, t, n, r);
    } finally {
      Ne = i, Gn.transition = s;
    }
  }
  function ef(e, t, n, r) {
    var i = Ne, s = Gn.transition;
    Gn.transition = null;
    try {
      Ne = 4, Pl(e, t, n, r);
    } finally {
      Ne = i, Gn.transition = s;
    }
  }
  function Pl(e, t, n, r) {
    if (gi) {
      var i = Al(e, t, n, r);
      if (i === null) Xl(e, t, r, ki, n), Bo(e, r);
      else if (Jc(i, e, t, n, r)) r.stopPropagation();
      else if (Bo(e, r), t & 4 && -1 < Xc.indexOf(e)) {
        for (; i !== null; ) {
          var s = $r(i);
          if (s !== null && Fo(s), s = Al(e, t, n, r), s === null && Xl(e, t, r, ki, n), s === i) break;
          i = s;
        }
        i !== null && r.stopPropagation();
      } else Xl(e, t, r, null, n);
    }
  }
  var ki = null;
  function Al(e, t, n, r) {
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
        switch (Vc()) {
          case jl:
            return 1;
          case Lo:
            return 4;
          case fi:
          case Uc:
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
  var dn = null, zl = null, wi = null;
  function Ho() {
    if (wi) return wi;
    var e, t = zl, n = t.length, r, i = "value" in dn ? dn.value : dn.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === i[s - r]; r++) ;
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
    function t(n, r, i, s, a) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
      for (var d in e) e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(s) : s[d]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Si : Wo, this.isPropagationStopped = Wo, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, Fl = St(qn), Mr = U({}, qn, { view: 0, detail: 0 }), tf = St(Mr), Il, Ol, Rr, Ei = U({}, Mr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Rr && (Rr && e.type === "mousemove" ? (Il = e.screenX - Rr.screenX, Ol = e.screenY - Rr.screenY) : Ol = Il = 0, Rr = e), Il);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ol;
  } }), Ko = St(Ei), nf = U({}, Ei, { dataTransfer: 0 }), rf = St(nf), lf = U({}, Mr, { relatedTarget: 0 }), Dl = St(lf), sf = U({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), of = St(sf), af = U({}, qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), uf = St(af), cf = U({}, qn, { data: 0 }), Qo = St(cf), ff = {
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
  }, df = {
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
  }, hf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function pf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = hf[e]) ? !!t[e] : !1;
  }
  function Bl() {
    return pf;
  }
  var mf = U({}, Mr, { key: function(e) {
    if (e.key) {
      var t = ff[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = xi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? df[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bl, charCode: function(e) {
    return e.type === "keypress" ? xi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), vf = St(mf), yf = U({}, Ei, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Go = St(yf), gf = U({}, Mr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bl }), kf = St(gf), wf = U({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), xf = St(wf), Sf = U({}, Ei, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ef = St(Sf), _f = [9, 13, 27, 32], $l = x && "CompositionEvent" in window, Lr = null;
  x && "documentMode" in document && (Lr = document.documentMode);
  var Tf = x && "TextEvent" in window && !Lr, qo = x && (!$l || Lr && 8 < Lr && 11 >= Lr), Yo = " ", Xo = !1;
  function Jo(e, t) {
    switch (e) {
      case "keyup":
        return _f.indexOf(t.keyCode) !== -1;
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
  function jf(e, t) {
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
  function Cf(e, t) {
    if (Yn) return e === "compositionend" || !$l && Jo(e, t) ? (e = Ho(), wi = zl = dn = null, Yn = !1, e) : null;
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
  var Nf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function bo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Nf[e.type] : t === "textarea";
  }
  function ea(e, t, n, r) {
    Kn(r), t = Ni(t, "onChange"), 0 < t.length && (n = new Fl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Pr = null, Ar = null;
  function Mf(e) {
    ga(e, 0);
  }
  function _i(e) {
    var t = er(e);
    if (te(t)) return e;
  }
  function Rf(e, t) {
    if (e === "change") return t;
  }
  var ta = !1;
  if (x) {
    var Vl;
    if (x) {
      var Ul = "oninput" in document;
      if (!Ul) {
        var na = document.createElement("div");
        na.setAttribute("oninput", "return;"), Ul = typeof na.oninput == "function";
      }
      Vl = Ul;
    } else Vl = !1;
    ta = Vl && (!document.documentMode || 9 < document.documentMode);
  }
  function ra() {
    Pr && (Pr.detachEvent("onpropertychange", ia), Ar = Pr = null);
  }
  function ia(e) {
    if (e.propertyName === "value" && _i(Ar)) {
      var t = [];
      ea(t, Ar, e, et(e)), _o(Mf, t);
    }
  }
  function Lf(e, t, n) {
    e === "focusin" ? (ra(), Pr = t, Ar = n, Pr.attachEvent("onpropertychange", ia)) : e === "focusout" && ra();
  }
  function Pf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return _i(Ar);
  }
  function Af(e, t) {
    if (e === "click") return _i(t);
  }
  function zf(e, t) {
    if (e === "input" || e === "change") return _i(t);
  }
  function Ff(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ft = typeof Object.is == "function" ? Object.is : Ff;
  function zr(e, t) {
    if (Ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!E.call(t, i) || !Ft(e[i], t[i])) return !1;
    }
    return !0;
  }
  function la(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function sa(e, t) {
    var n = la(e);
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
      n = la(n);
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
  function Hl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function If(e) {
    var t = aa(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && oa(n.ownerDocument.documentElement, n)) {
      if (r !== null && Hl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, s = Math.min(r.start, i);
          r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = sa(n, s);
          var a = sa(
            n,
            r
          );
          i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Of = x && "documentMode" in document && 11 >= document.documentMode, Xn = null, Wl = null, Fr = null, Kl = !1;
  function ua(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Kl || Xn == null || Xn !== ie(r) || (r = Xn, "selectionStart" in r && Hl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fr && zr(Fr, r) || (Fr = r, r = Ni(Wl, "onSelect"), 0 < r.length && (t = new Fl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Xn)));
  }
  function Ti(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jn = { animationend: Ti("Animation", "AnimationEnd"), animationiteration: Ti("Animation", "AnimationIteration"), animationstart: Ti("Animation", "AnimationStart"), transitionend: Ti("Transition", "TransitionEnd") }, Ql = {}, ca = {};
  x && (ca = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
  function ji(e) {
    if (Ql[e]) return Ql[e];
    if (!Jn[e]) return e;
    var t = Jn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ca) return Ql[e] = t[n];
    return e;
  }
  var fa = ji("animationend"), da = ji("animationiteration"), ha = ji("animationstart"), pa = ji("transitionend"), ma = /* @__PURE__ */ new Map(), va = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function hn(e, t) {
    ma.set(e, t), h(t, [e]);
  }
  for (var Gl = 0; Gl < va.length; Gl++) {
    var ql = va[Gl], Df = ql.toLowerCase(), Bf = ql[0].toUpperCase() + ql.slice(1);
    hn(Df, "on" + Bf);
  }
  hn(fa, "onAnimationEnd"), hn(da, "onAnimationIteration"), hn(ha, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(pa, "onTransitionEnd"), w("onMouseEnter", ["mouseout", "mouseover"]), w("onMouseLeave", ["mouseout", "mouseover"]), w("onPointerEnter", ["pointerout", "pointerover"]), w("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $f = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));
  function ya(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Oc(r, t, void 0, e), e.currentTarget = null;
  }
  function ga(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t) for (var a = r.length - 1; 0 <= a; a--) {
          var d = r[a], m = d.instance, S = d.currentTarget;
          if (d = d.listener, m !== s && i.isPropagationStopped()) break e;
          ya(i, d, S), s = m;
        }
        else for (a = 0; a < r.length; a++) {
          if (d = r[a], m = d.instance, S = d.currentTarget, d = d.listener, m !== s && i.isPropagationStopped()) break e;
          ya(i, d, S), s = m;
        }
      }
    }
    if (ci) throw e = Tl, ci = !1, Tl = null, e;
  }
  function ze(e, t) {
    var n = t[ns];
    n === void 0 && (n = t[ns] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ka(t, e, 2, !1), n.add(r));
  }
  function Yl(e, t, n) {
    var r = 0;
    t && (r |= 4), ka(n, e, r, t);
  }
  var Ci = "_reactListening" + Math.random().toString(36).slice(2);
  function Or(e) {
    if (!e[Ci]) {
      e[Ci] = !0, c.forEach(function(n) {
        n !== "selectionchange" && ($f.has(n) || Yl(n, !1, e), Yl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ci] || (t[Ci] = !0, Yl("selectionchange", !1, t));
    }
  }
  function ka(e, t, n, r) {
    switch (Uo(t)) {
      case 1:
        var i = bc;
        break;
      case 4:
        i = ef;
        break;
      default:
        i = Pl;
    }
    n = i.bind(null, t, n, e), i = void 0, !_l || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Xl(e, t, n, r, i) {
    var s = r;
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
            r = s = a;
            continue e;
          }
          d = d.parentNode;
        }
      }
      r = r.return;
    }
    _o(function() {
      var S = s, M = et(n), R = [];
      e: {
        var N = ma.get(e);
        if (N !== void 0) {
          var W = Fl, q = e;
          switch (e) {
            case "keypress":
              if (xi(n) === 0) break e;
            case "keydown":
            case "keyup":
              W = vf;
              break;
            case "focusin":
              q = "focus", W = Dl;
              break;
            case "focusout":
              q = "blur", W = Dl;
              break;
            case "beforeblur":
            case "afterblur":
              W = Dl;
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
              W = rf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = kf;
              break;
            case fa:
            case da:
            case ha:
              W = of;
              break;
            case pa:
              W = xf;
              break;
            case "scroll":
              W = tf;
              break;
            case "wheel":
              W = Ef;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = uf;
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
            var I = k.stateNode;
            if (k.tag === 5 && I !== null && (k = I, g !== null && (I = kr(v, g), I != null && Y.push(Dr(v, I, k)))), be) break;
            v = v.return;
          }
          0 < Y.length && (N = new W(N, q, null, n, M), R.push({ event: N, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", W = e === "mouseout" || e === "pointerout", N && n !== Ae && (q = n.relatedTarget || n.fromElement) && (Mn(q) || q[bt])) break e;
          if ((W || N) && (N = M.window === M ? M : (N = M.ownerDocument) ? N.defaultView || N.parentWindow : window, W ? (q = n.relatedTarget || n.toElement, W = S, q = q ? Mn(q) : null, q !== null && (be = Nn(q), q !== be || q.tag !== 5 && q.tag !== 6) && (q = null)) : (W = null, q = S), W !== q)) {
            if (Y = Ko, I = "onMouseLeave", g = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (Y = Go, I = "onPointerLeave", g = "onPointerEnter", v = "pointer"), be = W == null ? N : er(W), k = q == null ? N : er(q), N = new Y(I, v + "leave", W, n, M), N.target = be, N.relatedTarget = k, I = null, Mn(M) === S && (Y = new Y(g, v + "enter", q, n, M), Y.target = k, Y.relatedTarget = be, I = Y), be = I, W && q) t: {
              for (Y = W, g = q, v = 0, k = Y; k; k = Zn(k)) v++;
              for (k = 0, I = g; I; I = Zn(I)) k++;
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
          if (N = S ? er(S) : window, W = N.nodeName && N.nodeName.toLowerCase(), W === "select" || W === "input" && N.type === "file") var J = Rf;
          else if (bo(N)) if (ta) J = zf;
          else {
            J = Pf;
            var le = Lf;
          }
          else (W = N.nodeName) && W.toLowerCase() === "input" && (N.type === "checkbox" || N.type === "radio") && (J = Af);
          if (J && (J = J(e, S))) {
            ea(R, J, n, M);
            break e;
          }
          le && le(e, N, S), e === "focusout" && (le = N._wrapperState) && le.controlled && N.type === "number" && Ie(N, "number", N.value);
        }
        switch (le = S ? er(S) : window, e) {
          case "focusin":
            (bo(le) || le.contentEditable === "true") && (Xn = le, Wl = S, Fr = null);
            break;
          case "focusout":
            Fr = Wl = Xn = null;
            break;
          case "mousedown":
            Kl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Kl = !1, ua(R, n, M);
            break;
          case "selectionchange":
            if (Of) break;
          case "keydown":
          case "keyup":
            ua(R, n, M);
        }
        var se;
        if ($l) e: {
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
        fe && (qo && n.locale !== "ko" && (Yn || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && Yn && (se = Ho()) : (dn = M, zl = "value" in dn ? dn.value : dn.textContent, Yn = !0)), le = Ni(S, fe), 0 < le.length && (fe = new Qo(fe, e, null, n, M), R.push({ event: fe, listeners: le }), se ? fe.data = se : (se = Zo(n), se !== null && (fe.data = se)))), (se = Tf ? jf(e, n) : Cf(e, n)) && (S = Ni(S, "onBeforeInput"), 0 < S.length && (M = new Qo("onBeforeInput", "beforeinput", null, n, M), R.push({ event: M, listeners: S }), M.data = se));
      }
      ga(R, t);
    });
  }
  function Dr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ni(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, s = i.stateNode;
      i.tag === 5 && s !== null && (i = s, s = kr(e, n), s != null && r.unshift(Dr(e, s, i)), s = kr(e, t), s != null && r.push(Dr(e, s, i))), e = e.return;
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
    for (var s = t._reactName, a = []; n !== null && n !== r; ) {
      var d = n, m = d.alternate, S = d.stateNode;
      if (m !== null && m === r) break;
      d.tag === 5 && S !== null && (d = S, i ? (m = kr(n, s), m != null && a.unshift(Dr(n, m, d))) : i || (m = kr(n, s), m != null && a.push(Dr(n, m, d)))), n = n.return;
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var Vf = /\r\n?/g, Uf = /\u0000|\uFFFD/g;
  function xa(e) {
    return (typeof e == "string" ? e : "" + e).replace(Vf, `
`).replace(Uf, "");
  }
  function Mi(e, t, n) {
    if (t = xa(t), xa(e) !== t && n) throw Error(o(425));
  }
  function Ri() {
  }
  var Jl = null, Zl = null;
  function bl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var es = typeof setTimeout == "function" ? setTimeout : void 0, Hf = typeof clearTimeout == "function" ? clearTimeout : void 0, Sa = typeof Promise == "function" ? Promise : void 0, Wf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sa < "u" ? function(e) {
    return Sa.resolve(null).then(e).catch(Kf);
  } : es;
  function Kf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ts(e, t) {
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
  var bn = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + bn, Br = "__reactProps$" + bn, bt = "__reactContainer$" + bn, ns = "__reactEvents$" + bn, Qf = "__reactListeners$" + bn, Gf = "__reactHandles$" + bn;
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
  var rs = [], tr = -1;
  function mn(e) {
    return { current: e };
  }
  function Fe(e) {
    0 > tr || (e.current = rs[tr], rs[tr] = null, tr--);
  }
  function Pe(e, t) {
    tr++, rs[tr] = e.current, e.current = t;
  }
  var vn = {}, ut = mn(vn), vt = mn(!1), Rn = vn;
  function nr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return vn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n) i[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function yt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Pi() {
    Fe(vt), Fe(ut);
  }
  function _a(e, t, n) {
    if (ut.current !== vn) throw Error(o(168));
    Pe(ut, t), Pe(vt, n);
  }
  function Ta(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(o(108, F(e) || "Unknown", i));
    return U({}, n, r);
  }
  function Ai(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vn, Rn = ut.current, Pe(ut, e), Pe(vt, vt.current), !0;
  }
  function ja(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n ? (e = Ta(e, t, Rn), r.__reactInternalMemoizedMergedChildContext = e, Fe(vt), Fe(ut), Pe(ut, e)) : Fe(vt), Pe(vt, n);
  }
  var en = null, zi = !1, is = !1;
  function Ca(e) {
    en === null ? en = [e] : en.push(e);
  }
  function qf(e) {
    zi = !0, Ca(e);
  }
  function yn() {
    if (!is && en !== null) {
      is = !0;
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
        throw en !== null && (en = en.slice(e + 1)), Mo(jl, yn), i;
      } finally {
        Ne = t, is = !1;
      }
    }
    return null;
  }
  var rr = [], ir = 0, Fi = null, Ii = 0, Ct = [], Nt = 0, Ln = null, tn = 1, nn = "";
  function Pn(e, t) {
    rr[ir++] = Ii, rr[ir++] = Fi, Fi = e, Ii = t;
  }
  function Na(e, t, n) {
    Ct[Nt++] = tn, Ct[Nt++] = nn, Ct[Nt++] = Ln, Ln = e;
    var r = tn;
    e = nn;
    var i = 32 - zt(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - zt(t) + i;
    if (30 < s) {
      var a = i - i % 5;
      s = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, tn = 1 << 32 - zt(t) + i | n << i | r, nn = s + e;
    } else tn = 1 << s | n << i | r, nn = e;
  }
  function ls(e) {
    e.return !== null && (Pn(e, 1), Na(e, 1, 0));
  }
  function ss(e) {
    for (; e === Fi; ) Fi = rr[--ir], rr[ir] = null, Ii = rr[--ir], rr[ir] = null;
    for (; e === Ln; ) Ln = Ct[--Nt], Ct[Nt] = null, nn = Ct[--Nt], Ct[Nt] = null, tn = Ct[--Nt], Ct[Nt] = null;
  }
  var Et = null, _t = null, Oe = !1, It = null;
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
  function os(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function as(e) {
    if (Oe) {
      var t = _t;
      if (t) {
        var n = t;
        if (!Ra(e, t)) {
          if (os(e)) throw Error(o(418));
          t = pn(n.nextSibling);
          var r = Et;
          t && Ra(e, t) ? Ma(r, n) : (e.flags = e.flags & -4097 | 2, Oe = !1, Et = e);
        }
      } else {
        if (os(e)) throw Error(o(418));
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
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bl(e.type, e.memoizedProps)), t && (t = _t)) {
      if (os(e)) throw Pa(), Error(o(418));
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
  function lr() {
    _t = Et = null, Oe = !1;
  }
  function us(e) {
    It === null ? It = [e] : It.push(e);
  }
  var Yf = b.ReactCurrentBatchConfig;
  function Vr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var i = r, s = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
          var d = i.refs;
          a === null ? delete d[s] : d[s] = a;
        }, t._stringRef = s, t);
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
    function s(g, v, k) {
      return g.index = k, e ? (k = g.alternate, k !== null ? (k = k.index, k < v ? (g.flags |= 2, v) : k) : (g.flags |= 2, v)) : (g.flags |= 1048576, v);
    }
    function a(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function d(g, v, k, I) {
      return v === null || v.tag !== 6 ? (v = eo(k, g.mode, I), v.return = g, v) : (v = i(v, k), v.return = g, v);
    }
    function m(g, v, k, I) {
      var J = k.type;
      return J === re ? M(g, v, k.props.children, I, k.key) : v !== null && (v.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Le && Aa(J) === v.type) ? (I = i(v, k.props), I.ref = Vr(g, v, k), I.return = g, I) : (I = al(k.type, k.key, k.props, null, g.mode, I), I.ref = Vr(g, v, k), I.return = g, I);
    }
    function S(g, v, k, I) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== k.containerInfo || v.stateNode.implementation !== k.implementation ? (v = to(k, g.mode, I), v.return = g, v) : (v = i(v, k.children || []), v.return = g, v);
    }
    function M(g, v, k, I, J) {
      return v === null || v.tag !== 7 ? (v = $n(k, g.mode, I, J), v.return = g, v) : (v = i(v, k), v.return = g, v);
    }
    function R(g, v, k) {
      if (typeof v == "string" && v !== "" || typeof v == "number") return v = eo("" + v, g.mode, k), v.return = g, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Q:
            return k = al(v.type, v.key, v.props, null, g.mode, k), k.ref = Vr(g, null, v), k.return = g, k;
          case H:
            return v = to(v, g.mode, k), v.return = g, v;
          case Le:
            var I = v._init;
            return R(g, I(v._payload), k);
        }
        if ($e(v) || ee(v)) return v = $n(v, g.mode, k, null), v.return = g, v;
        Di(g, v);
      }
      return null;
    }
    function N(g, v, k, I) {
      var J = v !== null ? v.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number") return J !== null ? null : d(g, v, "" + k, I);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Q:
            return k.key === J ? m(g, v, k, I) : null;
          case H:
            return k.key === J ? S(g, v, k, I) : null;
          case Le:
            return J = k._init, N(
              g,
              v,
              J(k._payload),
              I
            );
        }
        if ($e(k) || ee(k)) return J !== null ? null : M(g, v, k, I, null);
        Di(g, k);
      }
      return null;
    }
    function W(g, v, k, I, J) {
      if (typeof I == "string" && I !== "" || typeof I == "number") return g = g.get(k) || null, d(v, g, "" + I, J);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Q:
            return g = g.get(I.key === null ? k : I.key) || null, m(v, g, I, J);
          case H:
            return g = g.get(I.key === null ? k : I.key) || null, S(v, g, I, J);
          case Le:
            var le = I._init;
            return W(g, v, k, le(I._payload), J);
        }
        if ($e(I) || ee(I)) return g = g.get(k) || null, M(v, g, I, J, null);
        Di(v, I);
      }
      return null;
    }
    function q(g, v, k, I) {
      for (var J = null, le = null, se = v, fe = v = 0, st = null; se !== null && fe < k.length; fe++) {
        se.index > fe ? (st = se, se = null) : st = se.sibling;
        var _e = N(g, se, k[fe], I);
        if (_e === null) {
          se === null && (se = st);
          break;
        }
        e && se && _e.alternate === null && t(g, se), v = s(_e, v, fe), le === null ? J = _e : le.sibling = _e, le = _e, se = st;
      }
      if (fe === k.length) return n(g, se), Oe && Pn(g, fe), J;
      if (se === null) {
        for (; fe < k.length; fe++) se = R(g, k[fe], I), se !== null && (v = s(se, v, fe), le === null ? J = se : le.sibling = se, le = se);
        return Oe && Pn(g, fe), J;
      }
      for (se = r(g, se); fe < k.length; fe++) st = W(se, g, fe, k[fe], I), st !== null && (e && st.alternate !== null && se.delete(st.key === null ? fe : st.key), v = s(st, v, fe), le === null ? J = st : le.sibling = st, le = st);
      return e && se.forEach(function(jn) {
        return t(g, jn);
      }), Oe && Pn(g, fe), J;
    }
    function Y(g, v, k, I) {
      var J = ee(k);
      if (typeof J != "function") throw Error(o(150));
      if (k = J.call(k), k == null) throw Error(o(151));
      for (var le = J = null, se = v, fe = v = 0, st = null, _e = k.next(); se !== null && !_e.done; fe++, _e = k.next()) {
        se.index > fe ? (st = se, se = null) : st = se.sibling;
        var jn = N(g, se, _e.value, I);
        if (jn === null) {
          se === null && (se = st);
          break;
        }
        e && se && jn.alternate === null && t(g, se), v = s(jn, v, fe), le === null ? J = jn : le.sibling = jn, le = jn, se = st;
      }
      if (_e.done) return n(
        g,
        se
      ), Oe && Pn(g, fe), J;
      if (se === null) {
        for (; !_e.done; fe++, _e = k.next()) _e = R(g, _e.value, I), _e !== null && (v = s(_e, v, fe), le === null ? J = _e : le.sibling = _e, le = _e);
        return Oe && Pn(g, fe), J;
      }
      for (se = r(g, se); !_e.done; fe++, _e = k.next()) _e = W(se, g, fe, _e.value, I), _e !== null && (e && _e.alternate !== null && se.delete(_e.key === null ? fe : _e.key), v = s(_e, v, fe), le === null ? J = _e : le.sibling = _e, le = _e);
      return e && se.forEach(function(Nd) {
        return t(g, Nd);
      }), Oe && Pn(g, fe), J;
    }
    function be(g, v, k, I) {
      if (typeof k == "object" && k !== null && k.type === re && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Q:
            e: {
              for (var J = k.key, le = v; le !== null; ) {
                if (le.key === J) {
                  if (J = k.type, J === re) {
                    if (le.tag === 7) {
                      n(g, le.sibling), v = i(le, k.props.children), v.return = g, g = v;
                      break e;
                    }
                  } else if (le.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Le && Aa(J) === le.type) {
                    n(g, le.sibling), v = i(le, k.props), v.ref = Vr(g, le, k), v.return = g, g = v;
                    break e;
                  }
                  n(g, le);
                  break;
                } else t(g, le);
                le = le.sibling;
              }
              k.type === re ? (v = $n(k.props.children, g.mode, I, k.key), v.return = g, g = v) : (I = al(k.type, k.key, k.props, null, g.mode, I), I.ref = Vr(g, v, k), I.return = g, g = I);
            }
            return a(g);
          case H:
            e: {
              for (le = k.key; v !== null; ) {
                if (v.key === le) if (v.tag === 4 && v.stateNode.containerInfo === k.containerInfo && v.stateNode.implementation === k.implementation) {
                  n(g, v.sibling), v = i(v, k.children || []), v.return = g, g = v;
                  break e;
                } else {
                  n(g, v);
                  break;
                }
                else t(g, v);
                v = v.sibling;
              }
              v = to(k, g.mode, I), v.return = g, g = v;
            }
            return a(g);
          case Le:
            return le = k._init, be(g, v, le(k._payload), I);
        }
        if ($e(k)) return q(g, v, k, I);
        if (ee(k)) return Y(g, v, k, I);
        Di(g, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, v !== null && v.tag === 6 ? (n(g, v.sibling), v = i(v, k), v.return = g, g = v) : (n(g, v), v = eo(k, g.mode, I), v.return = g, g = v), a(g)) : n(g, v);
    }
    return be;
  }
  var sr = za(!0), Fa = za(!1), Bi = mn(null), $i = null, or = null, cs = null;
  function fs() {
    cs = or = $i = null;
  }
  function ds(e) {
    var t = Bi.current;
    Fe(Bi), e._currentValue = t;
  }
  function hs(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ar(e, t) {
    $i = e, cs = or = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (gt = !0), e.firstContext = null);
  }
  function Mt(e) {
    var t = e._currentValue;
    if (cs !== e) if (e = { context: e, memoizedValue: t, next: null }, or === null) {
      if ($i === null) throw Error(o(308));
      or = e, $i.dependencies = { lanes: 0, firstContext: e };
    } else or = or.next = e;
    return t;
  }
  var An = null;
  function ps(e) {
    An === null ? An = [e] : An.push(e);
  }
  function Ia(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, ps(t)) : (n.next = i.next, i.next = n), t.interleaved = n, rn(e, r);
  }
  function rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var gn = !1;
  function ms(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Oa(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function ln(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function kn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Se & 2) !== 0) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, rn(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, ps(r)) : (t.next = i.next, i.next = t), r.interleaved = t, rn(e, n);
  }
  function Vi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ml(e, n);
    }
  }
  function Da(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          s === null ? i = s = a : s = s.next = a, n = n.next;
        } while (n !== null);
        s === null ? i = s = t : s = s.next = t;
      } else i = s = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Ui(e, t, n, r) {
    var i = e.updateQueue;
    gn = !1;
    var s = i.firstBaseUpdate, a = i.lastBaseUpdate, d = i.shared.pending;
    if (d !== null) {
      i.shared.pending = null;
      var m = d, S = m.next;
      m.next = null, a === null ? s = S : a.next = S, a = m;
      var M = e.alternate;
      M !== null && (M = M.updateQueue, d = M.lastBaseUpdate, d !== a && (d === null ? M.firstBaseUpdate = S : d.next = S, M.lastBaseUpdate = m));
    }
    if (s !== null) {
      var R = i.baseState;
      a = 0, M = S = m = null, d = s;
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
      } else s === null && (i.shared.lanes = 0);
      In |= a, e.lanes = a, e.memoizedState = R;
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
  function vs(e, t) {
    switch (Pe(Wr, t), Pe(Hr, e), Pe(Gt, Ur), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Cn(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Cn(t, e);
    }
    Fe(Gt), Pe(Gt, t);
  }
  function ur() {
    Fe(Gt), Fe(Hr), Fe(Wr);
  }
  function $a(e) {
    zn(Wr.current);
    var t = zn(Gt.current), n = Cn(t, e.type);
    t !== n && (Pe(Hr, e), Pe(Gt, n));
  }
  function ys(e) {
    Hr.current === e && (Fe(Gt), Fe(Hr));
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
  var gs = [];
  function ks() {
    for (var e = 0; e < gs.length; e++) gs[e]._workInProgressVersionPrimary = null;
    gs.length = 0;
  }
  var Wi = b.ReactCurrentDispatcher, ws = b.ReactCurrentBatchConfig, Fn = 0, He = null, nt = null, it = null, Ki = !1, Kr = !1, Qr = 0, Xf = 0;
  function ct() {
    throw Error(o(321));
  }
  function xs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ft(e[n], t[n])) return !1;
    return !0;
  }
  function Ss(e, t, n, r, i, s) {
    if (Fn = s, He = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wi.current = e === null || e.memoizedState === null ? ed : td, e = n(r, i), Kr) {
      s = 0;
      do {
        if (Kr = !1, Qr = 0, 25 <= s) throw Error(o(301));
        s += 1, it = nt = null, t.updateQueue = null, Wi.current = nd, e = n(r, i);
      } while (Kr);
    }
    if (Wi.current = qi, t = nt !== null && nt.next !== null, Fn = 0, it = nt = He = null, Ki = !1, t) throw Error(o(300));
    return e;
  }
  function Es() {
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
  function _s(e) {
    var t = Rt(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = nt, i = r.baseQueue, s = n.pending;
    if (s !== null) {
      if (i !== null) {
        var a = i.next;
        i.next = s.next, s.next = a;
      }
      r.baseQueue = i = s, n.pending = null;
    }
    if (i !== null) {
      s = i.next, r = r.baseState;
      var d = a = null, m = null, S = s;
      do {
        var M = S.lane;
        if ((Fn & M) === M) m !== null && (m = m.next = { lane: 0, action: S.action, hasEagerState: S.hasEagerState, eagerState: S.eagerState, next: null }), r = S.hasEagerState ? S.eagerState : e(r, S.action);
        else {
          var R = {
            lane: M,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          };
          m === null ? (d = m = R, a = r) : m = m.next = R, He.lanes |= M, In |= M;
        }
        S = S.next;
      } while (S !== null && S !== s);
      m === null ? a = r : m.next = d, Ft(r, t.memoizedState) || (gt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = m, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        s = i.lane, He.lanes |= s, In |= s, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ts(e) {
    var t = Rt(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var a = i = i.next;
      do
        s = e(s, a.action), a = a.next;
      while (a !== i);
      Ft(s, t.memoizedState) || (gt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, r];
  }
  function Va() {
  }
  function Ua(e, t) {
    var n = He, r = Rt(), i = t(), s = !Ft(r.memoizedState, i);
    if (s && (r.memoizedState = i, gt = !0), r = r.queue, js(Ka.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || it !== null && it.memoizedState.tag & 1) {
      if (n.flags |= 2048, qr(9, Wa.bind(null, n, r, i, t), void 0, null), lt === null) throw Error(o(349));
      (Fn & 30) !== 0 || Ha(n, t, i);
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
      return !Ft(e, n);
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
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gr, lastRenderedState: e }, t.queue = e, e = e.dispatch = bf.bind(null, He, e), [t.memoizedState, e];
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
    var s = void 0;
    if (nt !== null) {
      var a = nt.memoizedState;
      if (s = a.destroy, r !== null && xs(r, a.deps)) {
        i.memoizedState = qr(t, n, s, r);
        return;
      }
    }
    He.flags |= e, i.memoizedState = qr(1 | t, n, s, r);
  }
  function Xa(e, t) {
    return Qi(8390656, 8, e, t);
  }
  function js(e, t) {
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
  function Cs() {
  }
  function tu(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function nu(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ru(e, t, n) {
    return (Fn & 21) === 0 ? (e.baseState && (e.baseState = !1, gt = !0), e.memoizedState = n) : (Ft(n, t) || (n = Ao(), He.lanes |= n, In |= n, e.baseState = !0), t);
  }
  function Jf(e, t) {
    var n = Ne;
    Ne = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = ws.transition;
    ws.transition = {};
    try {
      e(!1), t();
    } finally {
      Ne = n, ws.transition = r;
    }
  }
  function iu() {
    return Rt().memoizedState;
  }
  function Zf(e, t, n) {
    var r = En(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, lu(e)) su(t, n);
    else if (n = Ia(e, t, n, r), n !== null) {
      var i = mt();
      $t(n, e, r, i), ou(n, t, r);
    }
  }
  function bf(e, t, n) {
    var r = En(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (lu(e)) su(t, i);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
        var a = t.lastRenderedState, d = s(a, n);
        if (i.hasEagerState = !0, i.eagerState = d, Ft(d, a)) {
          var m = t.interleaved;
          m === null ? (i.next = i, ps(t)) : (i.next = m.next, m.next = i), t.interleaved = i;
          return;
        }
      } catch {
      }
      n = Ia(e, t, i, r), n !== null && (i = mt(), $t(n, e, r, i), ou(n, t, r));
    }
  }
  function lu(e) {
    var t = e.alternate;
    return e === He || t !== null && t === He;
  }
  function su(e, t) {
    Kr = Ki = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ou(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ml(e, n);
    }
  }
  var qi = { readContext: Mt, useCallback: ct, useContext: ct, useEffect: ct, useImperativeHandle: ct, useInsertionEffect: ct, useLayoutEffect: ct, useMemo: ct, useReducer: ct, useRef: ct, useState: ct, useDebugValue: ct, useDeferredValue: ct, useTransition: ct, useMutableSource: ct, useSyncExternalStore: ct, useId: ct, unstable_isNewReconciler: !1 }, ed = { readContext: Mt, useCallback: function(e, t) {
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Zf.bind(null, He, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = qt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: qa, useDebugValue: Cs, useDeferredValue: function(e) {
    return qt().memoizedState = e;
  }, useTransition: function() {
    var e = qa(!1), t = e[0];
    return e = Jf.bind(null, e[1]), qt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = He, i = qt();
    if (Oe) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), lt === null) throw Error(o(349));
      (Fn & 30) !== 0 || Ha(r, t, n);
    }
    i.memoizedState = n;
    var s = { value: n, getSnapshot: t };
    return i.queue = s, Xa(Ka.bind(
      null,
      r,
      s,
      e
    ), [e]), r.flags |= 2048, qr(9, Wa.bind(null, r, s, n, t), void 0, null), n;
  }, useId: function() {
    var e = qt(), t = lt.identifierPrefix;
    if (Oe) {
      var n = nn, r = tn;
      n = (r & ~(1 << 32 - zt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Xf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, td = {
    readContext: Mt,
    useCallback: tu,
    useContext: Mt,
    useEffect: js,
    useImperativeHandle: eu,
    useInsertionEffect: Ja,
    useLayoutEffect: Za,
    useMemo: nu,
    useReducer: _s,
    useRef: Ya,
    useState: function() {
      return _s(Gr);
    },
    useDebugValue: Cs,
    useDeferredValue: function(e) {
      var t = Rt();
      return ru(t, nt.memoizedState, e);
    },
    useTransition: function() {
      var e = _s(Gr)[0], t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Va,
    useSyncExternalStore: Ua,
    useId: iu,
    unstable_isNewReconciler: !1
  }, nd = { readContext: Mt, useCallback: tu, useContext: Mt, useEffect: js, useImperativeHandle: eu, useInsertionEffect: Ja, useLayoutEffect: Za, useMemo: nu, useReducer: Ts, useRef: Ya, useState: function() {
    return Ts(Gr);
  }, useDebugValue: Cs, useDeferredValue: function(e) {
    var t = Rt();
    return nt === null ? t.memoizedState = e : ru(t, nt.memoizedState, e);
  }, useTransition: function() {
    var e = Ts(Gr)[0], t = Rt().memoizedState;
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
  function Ns(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Yi = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = mt(), i = En(e), s = ln(r, i);
    s.payload = t, n != null && (s.callback = n), t = kn(e, s, i), t !== null && ($t(t, e, i, r), Vi(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = mt(), i = En(e), s = ln(r, i);
    s.tag = 1, s.payload = t, n != null && (s.callback = n), t = kn(e, s, i), t !== null && ($t(t, e, i, r), Vi(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = mt(), r = En(e), i = ln(n, r);
    i.tag = 2, t != null && (i.callback = t), t = kn(e, i, r), t !== null && ($t(t, e, r, n), Vi(t, e, r));
  } };
  function au(e, t, n, r, i, s, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(i, s) : !0;
  }
  function uu(e, t, n) {
    var r = !1, i = vn, s = t.contextType;
    return typeof s == "object" && s !== null ? s = Mt(s) : (i = yt(t) ? Rn : ut.current, r = t.contextTypes, s = (r = r != null) ? nr(e, i) : vn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Yi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
  }
  function cu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Yi.enqueueReplaceState(t, t.state, null);
  }
  function Ms(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, ms(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Mt(s) : (s = yt(t) ? Rn : ut.current, i.context = nr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Ns(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Yi.enqueueReplaceState(i, i.state, null), Ui(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function cr(e, t) {
    try {
      var n = "", r = t;
      do
        n += pe(r), r = r.return;
      while (r);
      var i = n;
    } catch (s) {
      i = `
Error generating stack: ` + s.message + `
` + s.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Rs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ls(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var rd = typeof WeakMap == "function" ? WeakMap : Map;
  function fu(e, t, n) {
    n = ln(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      nl || (nl = !0, Qs = r), Ls(e, t);
    }, n;
  }
  function du(e, t, n) {
    n = ln(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        Ls(e, t);
      };
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
      Ls(e, t), typeof r != "function" && (xn === null ? xn = /* @__PURE__ */ new Set([this]) : xn.add(this));
      var a = t.stack;
      this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
    }), n;
  }
  function hu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new rd();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = yd.bind(null, e, t, n), t.then(e, e));
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
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ln(-1, 1), t.tag = 2, kn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e);
  }
  var id = b.ReactCurrentOwner, gt = !1;
  function pt(e, t, n, r) {
    t.child = e === null ? Fa(t, null, n, r) : sr(t, e.child, n, r);
  }
  function vu(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return ar(t, i), r = Ss(e, t, n, r, s, i), n = Es(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, sn(e, t, i)) : (Oe && n && ls(t), t.flags |= 1, pt(e, t, r, i), t.child);
  }
  function yu(e, t, n, r, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !bs(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, gu(e, t, s, r, i)) : (e = al(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, (e.lanes & i) === 0) {
      var a = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : zr, n(a, r) && e.ref === t.ref) return sn(e, t, i);
    }
    return t.flags |= 1, e = Tn(s, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function gu(e, t, n, r, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (zr(s, r) && e.ref === t.ref) if (gt = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) (e.flags & 131072) !== 0 && (gt = !0);
      else return t.lanes = e.lanes, sn(e, t, i);
    }
    return Ps(e, t, n, r, i);
  }
  function ku(e, t, n) {
    var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Pe(dr, Tt), Tt |= n;
    else {
      if ((n & 1073741824) === 0) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Pe(dr, Tt), Tt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, Pe(dr, Tt), Tt |= r;
    }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, Pe(dr, Tt), Tt |= r;
    return pt(e, t, i, n), t.child;
  }
  function wu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ps(e, t, n, r, i) {
    var s = yt(n) ? Rn : ut.current;
    return s = nr(t, s), ar(t, i), n = Ss(e, t, n, r, s, i), r = Es(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, sn(e, t, i)) : (Oe && r && ls(t), t.flags |= 1, pt(e, t, n, i), t.child);
  }
  function xu(e, t, n, r, i) {
    if (yt(n)) {
      var s = !0;
      Ai(t);
    } else s = !1;
    if (ar(t, i), t.stateNode === null) Ji(e, t), uu(t, n, r), Ms(t, n, r, i), r = !0;
    else if (e === null) {
      var a = t.stateNode, d = t.memoizedProps;
      a.props = d;
      var m = a.context, S = n.contextType;
      typeof S == "object" && S !== null ? S = Mt(S) : (S = yt(n) ? Rn : ut.current, S = nr(t, S));
      var M = n.getDerivedStateFromProps, R = typeof M == "function" || typeof a.getSnapshotBeforeUpdate == "function";
      R || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (d !== r || m !== S) && cu(t, a, r, S), gn = !1;
      var N = t.memoizedState;
      a.state = N, Ui(t, r, a, i), m = t.memoizedState, d !== r || N !== m || vt.current || gn ? (typeof M == "function" && (Ns(t, n, M, r), m = t.memoizedState), (d = gn || au(t, n, d, r, N, m, S)) ? (R || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = m), a.props = r, a.state = m, a.context = S, r = d) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      a = t.stateNode, Oa(e, t), d = t.memoizedProps, S = t.type === t.elementType ? d : Ot(t.type, d), a.props = S, R = t.pendingProps, N = a.context, m = n.contextType, typeof m == "object" && m !== null ? m = Mt(m) : (m = yt(n) ? Rn : ut.current, m = nr(t, m));
      var W = n.getDerivedStateFromProps;
      (M = typeof W == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (d !== R || N !== m) && cu(t, a, r, m), gn = !1, N = t.memoizedState, a.state = N, Ui(t, r, a, i);
      var q = t.memoizedState;
      d !== R || N !== q || vt.current || gn ? (typeof W == "function" && (Ns(t, n, W, r), q = t.memoizedState), (S = gn || au(t, n, S, r, N, q, m) || !1) ? (M || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, q, m), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, q, m)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = q), a.props = r, a.state = q, a.context = m, r = S) : (typeof a.componentDidUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return As(e, t, n, r, s, i);
  }
  function As(e, t, n, r, i, s) {
    wu(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return i && ja(t, n, !1), sn(e, t, s);
    r = t.stateNode, id.current = t;
    var d = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = sr(t, e.child, null, s), t.child = sr(t, null, d, s)) : pt(e, t, d, s), t.memoizedState = r.state, i && ja(t, n, !0), t.child;
  }
  function Su(e) {
    var t = e.stateNode;
    t.pendingContext ? _a(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _a(e, t.context, !1), vs(e, t.containerInfo);
  }
  function Eu(e, t, n, r, i) {
    return lr(), us(i), t.flags |= 256, pt(e, t, n, r), t.child;
  }
  var zs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function _u(e, t, n) {
    var r = t.pendingProps, i = Ue.current, s = !1, a = (t.flags & 128) !== 0, d;
    if ((d = a) || (d = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), d ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Pe(Ue, i & 1), e === null)
      return as(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, (r & 1) === 0 && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = ul(a, r, 0, null), e = $n(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Fs(n), t.memoizedState = zs, e) : Is(t, a));
    if (i = e.memoizedState, i !== null && (d = i.dehydrated, d !== null)) return ld(e, t, a, r, d, i, n);
    if (s) {
      s = r.fallback, a = t.mode, i = e.child, d = i.sibling;
      var m = { mode: "hidden", children: r.children };
      return (a & 1) === 0 && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = m, t.deletions = null) : (r = Tn(i, m), r.subtreeFlags = i.subtreeFlags & 14680064), d !== null ? s = Tn(d, s) : (s = $n(s, a, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, a = e.child.memoizedState, a = a === null ? Fs(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = zs, r;
    }
    return s = e.child, e = s.sibling, r = Tn(s, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Is(e, t) {
    return t = ul({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Xi(e, t, n, r) {
    return r !== null && us(r), sr(t, e.child, null, n), e = Is(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function ld(e, t, n, r, i, s, a) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Rs(Error(o(422))), Xi(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = ul({ mode: "visible", children: r.children }, i, 0, null), s = $n(s, i, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, (t.mode & 1) !== 0 && sr(t, e.child, null, a), t.child.memoizedState = Fs(a), t.memoizedState = zs, s);
    if ((t.mode & 1) === 0) return Xi(e, t, a, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var d = r.dgst;
      return r = d, s = Error(o(419)), r = Rs(s, r, void 0), Xi(e, t, a, r);
    }
    if (d = (a & e.childLanes) !== 0, gt || d) {
      if (r = lt, r !== null) {
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
        i = (i & (r.suspendedLanes | a)) !== 0 ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, rn(e, i), $t(r, e, i, -1));
      }
      return Zs(), r = Rs(Error(o(421))), Xi(e, t, a, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gd.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, _t = pn(i.nextSibling), Et = t, Oe = !0, It = null, e !== null && (Ct[Nt++] = tn, Ct[Nt++] = nn, Ct[Nt++] = Ln, tn = e.id, nn = e.overflow, Ln = t), t = Is(t, r.children), t.flags |= 4096, t);
  }
  function Tu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), hs(e.return, t, n);
  }
  function Os(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
  }
  function ju(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, s = r.tail;
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
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Os(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Hi(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Os(t, !0, n, null, s);
        break;
      case "together":
        Os(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ji(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function sn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, (n & t.childLanes) === 0) return null;
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
        Su(t), lr();
        break;
      case 5:
        $a(t);
        break;
      case 1:
        yt(t.type) && Ai(t);
        break;
      case 4:
        vs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Pe(Bi, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Pe(Ue, Ue.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? _u(e, t, n) : (Pe(Ue, Ue.current & 1), e = sn(e, t, n), e !== null ? e.sibling : null);
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
    return sn(e, t, n);
  }
  var Cu, Ds, Nu, Mu;
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
  }, Ds = function() {
  }, Nu = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, zn(Gt.current);
      var s = null;
      switch (n) {
        case "input":
          i = ne(e, i), r = ne(e, r), s = [];
          break;
        case "select":
          i = U({}, i, { value: void 0 }), r = U({}, r, { value: void 0 }), s = [];
          break;
        case "textarea":
          i = jt(e, i), r = jt(e, r), s = [];
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
      } else S !== "dangerouslySetInnerHTML" && S !== "children" && S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (f.hasOwnProperty(S) ? s || (s = []) : (s = s || []).push(S, null));
      for (S in r) {
        var m = r[S];
        if (d = i?.[S], r.hasOwnProperty(S) && m !== d && (m != null || d != null)) if (S === "style") if (d) {
          for (a in d) !d.hasOwnProperty(a) || m && m.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
          for (a in m) m.hasOwnProperty(a) && d[a] !== m[a] && (n || (n = {}), n[a] = m[a]);
        } else n || (s || (s = []), s.push(
          S,
          n
        )), n = m;
        else S === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, d = d ? d.__html : void 0, m != null && d !== m && (s = s || []).push(S, m)) : S === "children" ? typeof m != "string" && typeof m != "number" || (s = s || []).push(S, "" + m) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && (f.hasOwnProperty(S) ? (m != null && S === "onScroll" && ze("scroll", e), s || d === m || (s = [])) : (s = s || []).push(S, m));
      }
      n && (s = s || []).push("style", n);
      var S = s;
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
  function od(e, t, n) {
    var r = t.pendingProps;
    switch (ss(t), t.tag) {
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
        return r = t.stateNode, ur(), Fe(vt), Fe(ut), ks(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Oi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, It !== null && (Ys(It), It = null))), Ds(e, t), ft(t), null;
      case 5:
        ys(t);
        var i = zn(Wr.current);
        if (n = t.type, e !== null && t.stateNode != null) Nu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return ft(t), null;
          }
          if (e = zn(Gt.current), Oi(t)) {
            r = t.stateNode, n = t.type;
            var s = t.memoizedProps;
            switch (r[Qt] = t, r[Br] = s, e = (t.mode & 1) !== 0, n) {
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
                for (i = 0; i < Ir.length; i++) ze(Ir[i], r);
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
                ve(r, s), ze("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!s.multiple }, ze("invalid", r);
                break;
              case "textarea":
                Ve(r, s), ze("invalid", r);
            }
            ye(n, s), i = null;
            for (var a in s) if (s.hasOwnProperty(a)) {
              var d = s[a];
              a === "children" ? typeof d == "string" ? r.textContent !== d && (s.suppressHydrationWarning !== !0 && Mi(r.textContent, d, e), i = ["children", d]) : typeof d == "number" && r.textContent !== "" + d && (s.suppressHydrationWarning !== !0 && Mi(
                r.textContent,
                d,
                e
              ), i = ["children", "" + d]) : f.hasOwnProperty(a) && d != null && a === "onScroll" && ze("scroll", r);
            }
            switch (n) {
              case "input":
                ce(r), Qe(r, s, !0);
                break;
              case "textarea":
                ce(r), Je(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = Ri);
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
                  for (i = 0; i < Ir.length; i++) ze(Ir[i], e);
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
              for (s in d) if (d.hasOwnProperty(s)) {
                var m = d[s];
                s === "style" ? Jt(e, m) : s === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, m != null && Xt(e, m)) : s === "children" ? typeof m == "string" ? (n !== "textarea" || m !== "") && Ut(e, m) : typeof m == "number" && Ut(e, "" + m) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (f.hasOwnProperty(s) ? m != null && s === "onScroll" && ze("scroll", e) : m != null && K(e, s, m, a));
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
                  e.multiple = !!r.multiple, s = r.value, s != null ? Xe(e, !!r.multiple, s, !1) : r.defaultValue != null && Xe(
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
            if (r = t.stateNode, n = t.memoizedProps, r[Qt] = t, (s = r.nodeValue !== n) && (e = Et, e !== null)) switch (e.tag) {
              case 3:
                Mi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Mi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            s && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Qt] = t, t.stateNode = r;
        }
        return ft(t), null;
      case 13:
        if (Fe(Ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Oe && _t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Pa(), lr(), t.flags |= 98560, s = !1;
          else if (s = Oi(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317));
              s[Qt] = t;
            } else lr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ft(t), s = !1;
          } else It !== null && (Ys(It), It = null), s = !0;
          if (!s) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ue.current & 1) !== 0 ? rt === 0 && (rt = 3) : Zs())), t.updateQueue !== null && (t.flags |= 4), ft(t), null);
      case 4:
        return ur(), Ds(e, t), e === null && Or(t.stateNode.containerInfo), ft(t), null;
      case 10:
        return ds(t.type._context), ft(t), null;
      case 17:
        return yt(t.type) && Pi(), ft(t), null;
      case 19:
        if (Fe(Ue), s = t.memoizedState, s === null) return ft(t), null;
        if (r = (t.flags & 128) !== 0, a = s.rendering, a === null) if (r) Yr(s, !1);
        else {
          if (rt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (a = Hi(e), a !== null) {
              for (t.flags |= 128, Yr(s, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, a = s.alternate, a === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, s.type = a.type, e = a.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Pe(Ue, Ue.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          s.tail !== null && Ze() > hr && (t.flags |= 128, r = !0, Yr(s, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Hi(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yr(s, !0), s.tail === null && s.tailMode === "hidden" && !a.alternate && !Oe) return ft(t), null;
          } else 2 * Ze() - s.renderingStartTime > hr && n !== 1073741824 && (t.flags |= 128, r = !0, Yr(s, !1), t.lanes = 4194304);
          s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !== null ? n.sibling = a : t.child = a, s.last = a);
        }
        return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Ze(), t.sibling = null, n = Ue.current, Pe(Ue, r ? n & 1 | 2 : n & 1), t) : (ft(t), null);
      case 22:
      case 23:
        return Js(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Tt & 1073741824) !== 0 && (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ft(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function ad(e, t) {
    switch (ss(t), t.tag) {
      case 1:
        return yt(t.type) && Pi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ur(), Fe(vt), Fe(ut), ks(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ys(t), null;
      case 13:
        if (Fe(Ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          lr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Fe(Ue), null;
      case 4:
        return ur(), null;
      case 10:
        return ds(t.type._context), null;
      case 22:
      case 23:
        return Js(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Zi = !1, dt = !1, ud = typeof WeakSet == "function" ? WeakSet : Set, G = null;
  function fr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ge(e, t, r);
    }
    else n.current = null;
  }
  function Bs(e, t, n) {
    try {
      n();
    } catch (r) {
      Ge(e, t, r);
    }
  }
  var Ru = !1;
  function cd(e, t) {
    if (Jl = gi, e = aa(), Hl(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0, d = -1, m = -1, S = 0, M = 0, R = e, N = null;
          t: for (; ; ) {
            for (var W; R !== n || i !== 0 && R.nodeType !== 3 || (d = a + i), R !== s || r !== 0 && R.nodeType !== 3 || (m = a + r), R.nodeType === 3 && (a += R.nodeValue.length), (W = R.firstChild) !== null; )
              N = R, R = W;
            for (; ; ) {
              if (R === e) break t;
              if (N === n && ++S === i && (d = a), N === s && ++M === r && (m = a), (W = R.nextSibling) !== null) break;
              R = N, N = R.parentNode;
            }
            R = W;
          }
          n = d === -1 || m === -1 ? null : { start: d, end: m };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Zl = { focusedElem: e, selectionRange: n }, gi = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
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
      } catch (I) {
        Ge(t, t.return, I);
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
          var s = i.destroy;
          i.destroy = void 0, s !== void 0 && Bs(t, n, s);
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
  function $s(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Lu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Lu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Qt], delete t[Br], delete t[ns], delete t[Qf], delete t[Gf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function Vs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ri));
    else if (r !== 4 && (e = e.child, e !== null)) for (Vs(e, t, n), e = e.sibling; e !== null; ) Vs(e, t, n), e = e.sibling;
  }
  function Us(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Us(e, t, n), e = e.sibling; e !== null; ) Us(e, t, n), e = e.sibling;
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
        ot !== null && (Dt ? (e = ot, n = n.stateNode, e.nodeType === 8 ? ts(e.parentNode, n) : e.nodeType === 1 && ts(e, n), Nr(e)) : ts(ot, n.stateNode));
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
            var s = i, a = s.destroy;
            s = s.tag, a !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && Bs(n, t, a), i = i.next;
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
  function Fu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new ud()), t.forEach(function(r) {
        var i = kd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function Bt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e, a = t, d = a;
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
        zu(s, a, i), ot = null, Dt = !1;
        var m = i.alternate;
        m !== null && (m.return = null), i.return = null;
      } catch (S) {
        Ge(i, t, S);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Iu(t, e), t = t.sibling;
  }
  function Iu(e, t) {
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
          var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, d = e.type, m = e.updateQueue;
          if (e.updateQueue = null, m !== null) try {
            d === "input" && s.type === "radio" && s.name != null && ge(i, s), ke(d, a);
            var S = ke(d, s);
            for (a = 0; a < m.length; a += 2) {
              var M = m[a], R = m[a + 1];
              M === "style" ? Jt(i, R) : M === "dangerouslySetInnerHTML" ? Xt(i, R) : M === "children" ? Ut(i, R) : K(i, M, R, S);
            }
            switch (d) {
              case "input":
                Te(i, s);
                break;
              case "textarea":
                Ce(i, s);
                break;
              case "select":
                var N = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var W = s.value;
                W != null ? Xe(i, !!s.multiple, W, !1) : N !== !!s.multiple && (s.defaultValue != null ? Xe(
                  i,
                  !!s.multiple,
                  s.defaultValue,
                  !0
                ) : Xe(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Br] = s;
          } catch (Y) {
            Ge(e, e.return, Y);
          }
        }
        break;
      case 6:
        if (Bt(t, e), Yt(e), r & 4) {
          if (e.stateNode === null) throw Error(o(162));
          i = e.stateNode, s = e.memoizedProps;
          try {
            i.nodeValue = s;
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
        Bt(t, e), Yt(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Ks = Ze())), r & 4 && Fu(e);
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
                  i = R.stateNode, S ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (d = R.stateNode, m = R.memoizedProps.style, a = m != null && m.hasOwnProperty("display") ? m.display : null, d.style.display = oe("display", a));
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
        Bt(t, e), Yt(e), r & 4 && Fu(e);
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
            var s = Au(e);
            Us(e, s, i);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo, d = Au(e);
            Vs(e, d, a);
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
  function fd(e, t, n) {
    G = e, Ou(e);
  }
  function Ou(e, t, n) {
    for (var r = (e.mode & 1) !== 0; G !== null; ) {
      var i = G, s = i.child;
      if (i.tag === 22 && r) {
        var a = i.memoizedState !== null || Zi;
        if (!a) {
          var d = i.alternate, m = d !== null && d.memoizedState !== null || dt;
          d = Zi;
          var S = dt;
          if (Zi = a, (dt = m) && !S) for (G = i; G !== null; ) a = G, m = a.child, a.tag === 22 && a.memoizedState !== null ? $u(i) : m !== null ? (m.return = a, G = m) : $u(i);
          for (; s !== null; ) G = s, Ou(s), s = s.sibling;
          G = i, Zi = d, dt = S;
        }
        Du(e);
      } else (i.subtreeFlags & 8772) !== 0 && s !== null ? (s.return = i, G = s) : Du(e);
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
              var s = t.updateQueue;
              s !== null && Ba(t, s, r);
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
          dt || t.flags & 512 && $s(t);
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
            var s = t.return;
            try {
              $s(t);
            } catch (m) {
              Ge(t, s, m);
            }
            break;
          case 5:
            var a = t.return;
            try {
              $s(t);
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
  var dd = Math.ceil, el = b.ReactCurrentDispatcher, Hs = b.ReactCurrentOwner, Lt = b.ReactCurrentBatchConfig, Se = 0, lt = null, tt = null, at = 0, Tt = 0, dr = mn(0), rt = 0, Jr = null, In = 0, tl = 0, Ws = 0, Zr = null, kt = null, Ks = 0, hr = 1 / 0, on = null, nl = !1, Qs = null, xn = null, rl = !1, Sn = null, il = 0, br = 0, Gs = null, ll = -1, sl = 0;
  function mt() {
    return (Se & 6) !== 0 ? Ze() : ll !== -1 ? ll : ll = Ze();
  }
  function En(e) {
    return (e.mode & 1) === 0 ? 1 : (Se & 2) !== 0 && at !== 0 ? at & -at : Yf.transition !== null ? (sl === 0 && (sl = Ao()), sl) : (e = Ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Uo(e.type)), e);
  }
  function $t(e, t, n, r) {
    if (50 < br) throw br = 0, Gs = null, Error(o(185));
    Er(e, n, r), ((Se & 2) === 0 || e !== lt) && (e === lt && ((Se & 2) === 0 && (tl |= n), rt === 4 && _n(e, at)), wt(e, r), n === 1 && Se === 0 && (t.mode & 1) === 0 && (hr = Ze() + 500, zi && yn()));
  }
  function wt(e, t) {
    var n = e.callbackNode;
    qc(e, t);
    var r = mi(e, e === lt ? at : 0);
    if (r === 0) n !== null && Ro(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Ro(n), t === 1) e.tag === 0 ? qf(Uu.bind(null, e)) : Ca(Uu.bind(null, e)), Wf(function() {
        (Se & 6) === 0 && yn();
      }), n = null;
      else {
        switch (zo(r)) {
          case 1:
            n = jl;
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
    if (ll = -1, sl = 0, (Se & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (pr() && e.callbackNode !== n) return null;
    var r = mi(e, e === lt ? at : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ol(e, r);
    else {
      t = r;
      var i = Se;
      Se |= 2;
      var s = Wu();
      (lt !== e || at !== t) && (on = null, hr = Ze() + 500, Dn(e, t));
      do
        try {
          md();
          break;
        } catch (d) {
          Hu(e, d);
        }
      while (!0);
      fs(), el.current = s, Se = i, tt !== null ? t = 0 : (lt = null, at = 0, t = rt);
    }
    if (t !== 0) {
      if (t === 2 && (i = Cl(e), i !== 0 && (r = i, t = qs(e, i))), t === 1) throw n = Jr, Dn(e, 0), _n(e, r), wt(e, Ze()), n;
      if (t === 6) _n(e, r);
      else {
        if (i = e.current.alternate, (r & 30) === 0 && !hd(i) && (t = ol(e, r), t === 2 && (s = Cl(e), s !== 0 && (r = s, t = qs(e, s))), t === 1)) throw n = Jr, Dn(e, 0), _n(e, r), wt(e, Ze()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Bn(e, kt, on);
            break;
          case 3:
            if (_n(e, r), (r & 130023424) === r && (t = Ks + 500 - Ze(), 10 < t)) {
              if (mi(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                mt(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = es(Bn.bind(null, e, kt, on), t);
              break;
            }
            Bn(e, kt, on);
            break;
          case 4:
            if (_n(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var a = 31 - zt(r);
              s = 1 << a, a = t[a], a > i && (i = a), r &= ~s;
            }
            if (r = i, r = Ze() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dd(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = es(Bn.bind(null, e, kt, on), r);
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
  function qs(e, t) {
    var n = Zr;
    return e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256), e = ol(e, t), e !== 2 && (t = kt, kt = n, t !== null && Ys(t)), e;
  }
  function Ys(e) {
    kt === null ? kt = e : kt.push.apply(kt, e);
  }
  function hd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r], s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ft(s(), i)) return !1;
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
    for (t &= ~Ws, t &= ~tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - zt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Uu(e) {
    if ((Se & 6) !== 0) throw Error(o(327));
    pr();
    var t = mi(e, 0);
    if ((t & 1) === 0) return wt(e, Ze()), null;
    var n = ol(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Cl(e);
      r !== 0 && (t = r, n = qs(e, r));
    }
    if (n === 1) throw n = Jr, Dn(e, 0), _n(e, t), wt(e, Ze()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bn(e, kt, on), wt(e, Ze()), null;
  }
  function Xs(e, t) {
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
  function Js() {
    Tt = dr.current, Fe(dr);
  }
  function Dn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Hf(n)), tt !== null) for (n = tt.return; n !== null; ) {
      var r = n;
      switch (ss(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Pi();
          break;
        case 3:
          ur(), Fe(vt), Fe(ut), ks();
          break;
        case 5:
          ys(r);
          break;
        case 4:
          ur();
          break;
        case 13:
          Fe(Ue);
          break;
        case 19:
          Fe(Ue);
          break;
        case 10:
          ds(r.type._context);
          break;
        case 22:
        case 23:
          Js();
      }
      n = n.return;
    }
    if (lt = e, tt = e = Tn(e.current, null), at = Tt = t, rt = 0, Jr = null, Ws = tl = In = 0, kt = Zr = null, An !== null) {
      for (t = 0; t < An.length; t++) if (n = An[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, s = n.pending;
        if (s !== null) {
          var a = s.next;
          s.next = i, r.next = a;
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
        if (fs(), Wi.current = qi, Ki) {
          for (var r = He.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Ki = !1;
        }
        if (Fn = 0, it = nt = He = null, Kr = !1, Qr = 0, Hs.current = null, n === null || n.return === null) {
          rt = 1, Jr = t, tt = null;
          break;
        }
        e: {
          var s = e, a = n.return, d = n, m = t;
          if (t = at, d.flags |= 32768, m !== null && typeof m == "object" && typeof m.then == "function") {
            var S = m, M = d, R = M.tag;
            if ((M.mode & 1) === 0 && (R === 0 || R === 11 || R === 15)) {
              var N = M.alternate;
              N ? (M.updateQueue = N.updateQueue, M.memoizedState = N.memoizedState, M.lanes = N.lanes) : (M.updateQueue = null, M.memoizedState = null);
            }
            var W = pu(a);
            if (W !== null) {
              W.flags &= -257, mu(W, a, d, s, t), W.mode & 1 && hu(s, S, t), t = W, m = S;
              var q = t.updateQueue;
              if (q === null) {
                var Y = /* @__PURE__ */ new Set();
                Y.add(m), t.updateQueue = Y;
              } else q.add(m);
              break e;
            } else {
              if ((t & 1) === 0) {
                hu(s, S, t), Zs();
                break e;
              }
              m = Error(o(426));
            }
          } else if (Oe && d.mode & 1) {
            var be = pu(a);
            if (be !== null) {
              (be.flags & 65536) === 0 && (be.flags |= 256), mu(be, a, d, s, t), us(cr(m, d));
              break e;
            }
          }
          s = m = cr(m, d), rt !== 4 && (rt = 2), Zr === null ? Zr = [s] : Zr.push(s), s = a;
          do {
            switch (s.tag) {
              case 3:
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var g = fu(s, m, t);
                Da(s, g);
                break e;
              case 1:
                d = m;
                var v = s.type, k = s.stateNode;
                if ((s.flags & 128) === 0 && (typeof v.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (xn === null || !xn.has(k)))) {
                  s.flags |= 65536, t &= -t, s.lanes |= t;
                  var I = du(s, d, t);
                  Da(s, I);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
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
    var e = el.current;
    return el.current = qi, e === null ? qi : e;
  }
  function Zs() {
    (rt === 0 || rt === 3 || rt === 2) && (rt = 4), lt === null || (In & 268435455) === 0 && (tl & 268435455) === 0 || _n(lt, at);
  }
  function ol(e, t) {
    var n = Se;
    Se |= 2;
    var r = Wu();
    (lt !== e || at !== t) && (on = null, Dn(e, t));
    do
      try {
        pd();
        break;
      } catch (i) {
        Hu(e, i);
      }
    while (!0);
    if (fs(), Se = n, el.current = r, tt !== null) throw Error(o(261));
    return lt = null, at = 0, rt;
  }
  function pd() {
    for (; tt !== null; ) Ku(tt);
  }
  function md() {
    for (; tt !== null && !Bc(); ) Ku(tt);
  }
  function Ku(e) {
    var t = Yu(e.alternate, e, Tt);
    e.memoizedProps = e.pendingProps, t === null ? Qu(e) : tt = t, Hs.current = null;
  }
  function Qu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = od(n, t, Tt), n !== null) {
          tt = n;
          return;
        }
      } else {
        if (n = ad(n, t), n !== null) {
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
      Lt.transition = null, Ne = 1, vd(e, t, n, r);
    } finally {
      Lt.transition = i, Ne = r;
    }
    return null;
  }
  function vd(e, t, n, r) {
    do
      pr();
    while (Sn !== null);
    if ((Se & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Yc(e, s), e === lt && (tt = lt = null, at = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || rl || (rl = !0, Xu(fi, function() {
      return pr(), null;
    })), s = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || s) {
      s = Lt.transition, Lt.transition = null;
      var a = Ne;
      Ne = 1;
      var d = Se;
      Se |= 4, Hs.current = null, cd(e, n), Iu(n, e), If(Zl), gi = !!Jl, Zl = Jl = null, e.current = n, fd(n), $c(), Se = d, Ne = a, Lt.transition = s;
    } else e.current = n;
    if (rl && (rl = !1, Sn = e, il = i), s = e.pendingLanes, s === 0 && (xn = null), Hc(n.stateNode), wt(e, Ze()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (nl) throw nl = !1, e = Qs, Qs = null, e;
    return (il & 1) !== 0 && e.tag !== 0 && pr(), s = e.pendingLanes, (s & 1) !== 0 ? e === Gs ? br++ : (br = 0, Gs = e) : br = 0, yn(), null;
  }
  function pr() {
    if (Sn !== null) {
      var e = zo(il), t = Lt.transition, n = Ne;
      try {
        if (Lt.transition = null, Ne = 16 > e ? 16 : e, Sn === null) var r = !1;
        else {
          if (e = Sn, Sn = null, il = 0, (Se & 6) !== 0) throw Error(o(331));
          var i = Se;
          for (Se |= 4, G = e.current; G !== null; ) {
            var s = G, a = s.child;
            if ((G.flags & 16) !== 0) {
              var d = s.deletions;
              if (d !== null) {
                for (var m = 0; m < d.length; m++) {
                  var S = d[m];
                  for (G = S; G !== null; ) {
                    var M = G;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xr(8, M, s);
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
                var q = s.alternate;
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
                G = s;
              }
            }
            if ((s.subtreeFlags & 2064) !== 0 && a !== null) a.return = s, G = a;
            else e: for (; G !== null; ) {
              if (s = G, (s.flags & 2048) !== 0) switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Xr(9, s, s.return);
              }
              var g = s.sibling;
              if (g !== null) {
                g.return = s.return, G = g;
                break e;
              }
              G = s.return;
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
              var I = d.sibling;
              if (I !== null) {
                I.return = d.return, G = I;
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
  function yd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = mt(), e.pingedLanes |= e.suspendedLanes & n, lt === e && (at & n) === n && (rt === 4 || rt === 3 && (at & 130023424) === at && 500 > Ze() - Ks ? Dn(e, 0) : Ws |= n), wt(e, t);
  }
  function qu(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = pi, pi <<= 1, (pi & 130023424) === 0 && (pi = 4194304)));
    var n = mt();
    e = rn(e, t), e !== null && (Er(e, t, n), wt(e, n));
  }
  function gd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), qu(e, n);
  }
  function kd(e, t) {
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
    else gt = !1, Oe && (t.flags & 1048576) !== 0 && Na(t, Ii, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Ji(e, t), e = t.pendingProps;
        var i = nr(t, ut.current);
        ar(t, n), i = Ss(null, t, r, e, i, n);
        var s = Es();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(r) ? (s = !0, Ai(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ms(t), i.updater = Yi, t.stateNode = i, i._reactInternals = t, Ms(t, r, e, n), t = As(null, t, r, !0, s, n)) : (t.tag = 0, Oe && s && ls(t), pt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Ji(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = xd(r), e = Ot(r, e), i) {
            case 0:
              t = Ps(null, t, r, e, n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ot(r, i), Ps(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ot(r, i), xu(e, t, r, i, n);
      case 3:
        e: {
          if (Su(t), e === null) throw Error(o(387));
          r = t.pendingProps, s = t.memoizedState, i = s.element, Oa(e, t), Ui(t, r, null, n);
          var a = t.memoizedState;
          if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
            i = cr(Error(o(423)), t), t = Eu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = cr(Error(o(424)), t), t = Eu(e, t, r, n, i);
            break e;
          } else for (_t = pn(t.stateNode.containerInfo.firstChild), Et = t, Oe = !0, It = null, n = Fa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (lr(), r === i) {
              t = sn(e, t, n);
              break e;
            }
            pt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return $a(t), e === null && as(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = i.children, bl(r, i) ? a = null : s !== null && bl(r, s) && (t.flags |= 32), wu(e, t), pt(e, t, a, n), t.child;
      case 6:
        return e === null && as(t), null;
      case 13:
        return _u(e, t, n);
      case 4:
        return vs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sr(t, null, r, n) : pt(e, t, r, n), t.child;
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
          if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, a = i.value, Pe(Bi, r._currentValue), r._currentValue = a, s !== null) if (Ft(s.value, a)) {
            if (s.children === i.children && !vt.current) {
              t = sn(e, t, n);
              break e;
            }
          } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
            var d = s.dependencies;
            if (d !== null) {
              a = s.child;
              for (var m = d.firstContext; m !== null; ) {
                if (m.context === r) {
                  if (s.tag === 1) {
                    m = ln(-1, n & -n), m.tag = 2;
                    var S = s.updateQueue;
                    if (S !== null) {
                      S = S.shared;
                      var M = S.pending;
                      M === null ? m.next = m : (m.next = M.next, M.next = m), S.pending = m;
                    }
                  }
                  s.lanes |= n, m = s.alternate, m !== null && (m.lanes |= n), hs(
                    s.return,
                    n,
                    t
                  ), d.lanes |= n;
                  break;
                }
                m = m.next;
              }
            } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
            else if (s.tag === 18) {
              if (a = s.return, a === null) throw Error(o(341));
              a.lanes |= n, d = a.alternate, d !== null && (d.lanes |= n), hs(a, n, t), a = s.sibling;
            } else a = s.child;
            if (a !== null) a.return = s;
            else for (a = s; a !== null; ) {
              if (a === t) {
                a = null;
                break;
              }
              if (s = a.sibling, s !== null) {
                s.return = a.return, a = s;
                break;
              }
              a = a.return;
            }
            s = a;
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ot(r, i), Ji(e, t), t.tag = 1, yt(r) ? (e = !0, Ai(t)) : e = !1, ar(t, n), uu(t, r, i), Ms(t, r, i, n), As(null, t, r, !0, e, n);
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
  function wd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pt(e, t, n, r) {
    return new wd(e, t, n, r);
  }
  function bs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function xd(e) {
    if (typeof e == "function") return bs(e) ? 1 : 0;
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
  function al(e, t, n, r, i, s) {
    var a = 2;
    if (r = e, typeof e == "function") bs(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
      case re:
        return $n(n.children, i, s, t);
      case he:
        a = 8, i |= 8;
        break;
      case Me:
        return e = Pt(12, n, t, i | 2), e.elementType = Me, e.lanes = s, e;
      case Re:
        return e = Pt(13, n, t, i), e.elementType = Re, e.lanes = s, e;
      case Be:
        return e = Pt(19, n, t, i), e.elementType = Be, e.lanes = s, e;
      case Ee:
        return ul(n, i, s, t);
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
    return t = Pt(a, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
  }
  function $n(e, t, n, r) {
    return e = Pt(7, e, r, t), e.lanes = n, e;
  }
  function ul(e, t, n, r) {
    return e = Pt(22, e, r, t), e.elementType = Ee, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function eo(e, t, n) {
    return e = Pt(6, e, null, t), e.lanes = n, e;
  }
  function to(e, t, n) {
    return t = Pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Sd(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Nl(0), this.expirationTimes = Nl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function no(e, t, n, r, i, s, a, d, m) {
    return e = new Sd(e, t, n, d, m), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Pt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ms(s), e;
  }
  function Ed(e, t, n) {
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
  function Zu(e, t, n, r, i, s, a, d, m) {
    return e = no(n, r, !0, e, i, s, a, d, m), e.context = Ju(null), n = e.current, r = mt(), i = En(n), s = ln(r, i), s.callback = t ?? null, kn(n, s, i), e.current.lanes = i, Er(e, i, r), wt(e, r), e;
  }
  function cl(e, t, n, r) {
    var i = t.current, s = mt(), a = En(i);
    return n = Ju(n), t.context === null ? t.context = n : t.pendingContext = n, t = ln(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = kn(i, t, a), e !== null && ($t(e, i, a, s), Vi(e, i, a)), a;
  }
  function fl(e) {
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
  function _d() {
    return null;
  }
  var ec = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function io(e) {
    this._internalRoot = e;
  }
  dl.prototype.render = io.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    cl(e, t, null, null);
  }, dl.prototype.unmount = io.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      On(function() {
        cl(null, e, null, null);
      }), t[bt] = null;
    }
  };
  function dl(e) {
    this._internalRoot = e;
  }
  dl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++) ;
      fn.splice(n, 0, e), n === 0 && $o(e);
    }
  };
  function lo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function hl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function tc() {
  }
  function Td(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var s = r;
        r = function() {
          var S = fl(a);
          s.call(S);
        };
      }
      var a = Zu(t, r, e, 0, null, !1, !1, "", tc);
      return e._reactRootContainer = a, e[bt] = a.current, Or(e.nodeType === 8 ? e.parentNode : e), On(), a;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var d = r;
      r = function() {
        var S = fl(m);
        d.call(S);
      };
    }
    var m = no(e, 0, !1, null, null, !1, !1, "", tc);
    return e._reactRootContainer = m, e[bt] = m.current, Or(e.nodeType === 8 ? e.parentNode : e), On(function() {
      cl(t, m, n, r);
    }), m;
  }
  function pl(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
      var a = s;
      if (typeof i == "function") {
        var d = i;
        i = function() {
          var m = fl(a);
          d.call(m);
        };
      }
      cl(t, a, e, i);
    } else a = Td(n, t, e, i, r);
    return fl(a);
  }
  Fo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Sr(t.pendingLanes);
          n !== 0 && (Ml(t, n | 1), wt(t, Ze()), (Se & 6) === 0 && (hr = Ze() + 500, yn()));
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
  }, Rl = function(e) {
    if (e.tag === 13) {
      var t = rn(e, 134217728);
      if (t !== null) {
        var n = mt();
        $t(t, e, 134217728, n);
      }
      ro(e, 134217728);
    }
  }, Io = function(e) {
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
  }, So = Xs, Eo = On;
  var jd = { usingClientEntryPoint: !1, Events: [$r, er, Li, Kn, Qn, Xs] }, ei = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cd = { bundleType: ei.bundleType, version: ei.version, rendererPackageName: ei.rendererPackageName, rendererConfig: ei.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: b.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Co(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ei.findFiberByHostInstance || _d, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ml.isDisabled && ml.supportsFiber) try {
      di = ml.inject(Cd), Kt = ml;
    } catch {
    }
  }
  return xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jd, xt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!lo(t)) throw Error(o(200));
    return Ed(e, t, null, n);
  }, xt.createRoot = function(e, t) {
    if (!lo(e)) throw Error(o(299));
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
    if (!hl(t)) throw Error(o(200));
    return pl(null, e, t, !0, n);
  }, xt.hydrateRoot = function(e, t, n) {
    if (!lo(e)) throw Error(o(405));
    var r = n != null && n.hydratedSources || null, i = !1, s = "", a = ec;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Zu(t, null, e, 1, n ?? null, i, !1, s, a), e[bt] = t.current, Or(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new dl(t);
  }, xt.render = function(e, t, n) {
    if (!hl(t)) throw Error(o(200));
    return pl(null, e, t, !1, n);
  }, xt.unmountComponentAtNode = function(e) {
    if (!hl(e)) throw Error(o(40));
    return e._reactRootContainer ? (On(function() {
      pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[bt] = null;
      });
    }), !0) : !1;
  }, xt.unstable_batchedUpdates = Xs, xt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!hl(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return pl(e, t, n, !1, r);
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
      } catch (l) {
        console.error(l);
      }
  }
  return u(), ao.exports = Fd(), ao.exports;
}
var cc;
function Od() {
  if (cc) return vl;
  cc = 1;
  var u = Id();
  return vl.createRoot = u.createRoot, vl.hydrateRoot = u.hydrateRoot, vl;
}
var Dd = Od();
const Bd = (() => {
  const u = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], l = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], f = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, w = 7, x = [
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
  }, V = 26, O = 72, P = 30, D = 54, Z = 34, A = 11, K = (V + O) / 2, b = P + (c.length - 1) * Z + 30, Q = (F) => O + F * D, H = (F) => F === 0 ? K : Q(F) - D / 2, re = (F) => P + F * Z;
  function he(F, $, z) {
    const X = l.indexOf(u[F][0]) + Number(z.slice(-1)) - 1, ce = X % l.length, te = o[ce] + 12 * Math.floor(X / l.length), ie = F + $ - te;
    return l[ce] + (ie < 0 ? "♭" : "♯").repeat(Math.abs(ie));
  }
  function Me(F) {
    return [...F.base, ...F.add].sort(($, z) => $[0] - z[0]);
  }
  function xe(F, $, z) {
    const X = $ + (z ? 1 : 0), ce = x[X % x.length], te = Math.min(...ce.map(([Te]) => Te)), ie = Math.max(...ce.map(([, Te]) => Te));
    let ge = (F - f % 12 + 12) % 12 - (z ? 8 : 5) + 12 * Math.floor(X / x.length);
    return te + ge < 0 && (ge += 12), ie + ge > h.pentatonic && (ge -= 12), {
      strings: ce.map((Te) => Te.map((Qe) => Qe + ge)),
      start: te + ge,
      end: ie + ge
    };
  }
  function We(F, $, z) {
    const X = z[$], ce = (F + X - f % 12 + 12) % 12, te = f + ce - X, ie = c.map((ne, ve) => {
      const ge = $ + (c.length - 1 - ve) * 3;
      return [ge, ge + 1, ge + 2].map((Te) => {
        const Qe = Math.floor(Te / z.length), Ie = z[Te % z.length];
        return te + Ie + 12 * Qe - ne;
      });
    });
    return {
      strings: ie,
      start: Math.min(...ie.map((ne) => ne[0])),
      end: Math.max(...ie.map((ne) => ne.at(-1)))
    };
  }
  function De(F, $) {
    const z = [], X = Math.ceil(-F.end / 12) * 12;
    for (let te = X; F.start + te <= $; te += 12) {
      const ie = F.strings.map((ve) => ve.map((ge) => ge + te).filter((ge) => ge >= 0 && ge <= $)), ne = ie.flat();
      z.push({
        strings: ie,
        start: Math.min(...ne),
        end: Math.max(...ne),
        partial: F.start + te < 0 || F.end + te > $
      });
    }
    const ce = z.filter((te) => !te.partial);
    return ce.length ? ce : z;
  }
  function Re(F) {
    return Me(F).length === w;
  }
  function Be(F, $, z) {
    const X = Re($);
    F.querySelector('[value="3nps"]').disabled = !X, F.value = X ? z ?? "3nps" : "pentatonic";
  }
  function Ke(F, $, z, X, ce) {
    const te = Me($).map(([ie]) => ie);
    return X.map((ie) => {
      const ne = ie - 1, ve = z === "3nps" ? We(F, ne, te) : xe(F, ne, $.base === T), ge = ce === void 0 ? [ve] : De(ve, ce);
      return { number: ie, positions: ge };
    });
  }
  function Le(F, $) {
    const z = F.getBoundingClientRect(), X = F.querySelectorAll($);
    let ce = 1 / 0;
    X.forEach((te) => {
      const ie = te.getBoundingClientRect();
      let ne = 0;
      ie.left < z.left ? ne = ie.left - z.left - 8 : ie.right > z.right && (ne = ie.right - z.right + 8), Math.abs(ne) < Math.abs(ce) && (ce = ne);
    }), Number.isFinite(ce) && (F.scrollLeft += ce);
  }
  function Ee(F, $ = !1) {
    const z = F === "3nps" ? w : x.length;
    return Array.from({ length: z }, (X, ce) => {
      const te = ce + 1;
      return '<label class="box-toggle" data-box="' + te + '"><input type="checkbox" value="' + te + '"' + ($ && ce === 0 ? " checked" : "") + "> Boksi " + te + "</label>";
    }).join("");
  }
  function B(F, $) {
    const z = Me($), X = new Map(z.map(([te, ie]) => [te, he(F, te, ie)])), ce = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return z.flatMap(([te, ie]) => ce.flatMap(({ suffix: ne, base: ve }) => {
      const ge = ve.map(([Te]) => X.get((te + Te) % 12));
      return ge.every(Boolean) ? {
        root: (F + te) % 12,
        degree: Number(String(ie).replace(/\D/g, "")),
        name: ge[0] + ne,
        notes: ge,
        base: ve,
        add: []
      } : [];
    }));
  }
  function ee(F, $) {
    const z = F.base.map(([te]) => (F.root + te) % 12), X = c.map((te) => {
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
              const Ie = Array(c.length).fill(null);
              Ie.splice(te, 3, ...ge), ce.push({ strings: Ie, low: Te, high: Qe });
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
  function C(F, $) {
    const z = U[F + ":" + $];
    if (z) return { frets: z, barre: null };
    let X = null;
    return y.forEach(({ string: ce, openPC: te, shapes: ie }) => {
      const ne = ie[$];
      if (!ne) return;
      let ve = (F - te + 12) % 12;
      if (ve + Math.min(...ne.filter((Qe) => Qe !== null)) < 0 && (ve += 12), X && X.fret <= ve) return;
      const ge = ne.map((Qe) => Qe === null ? null : ve + Qe), Te = ve > 0 && ne.at(-1) === 0 ? { fret: ve, from: ce, to: ne.length - 1 } : null;
      X = { fret: ve, frets: ge, barre: Te };
    }), X && { frets: X.frets, barre: X.barre };
  }
  function ue(F, { frets: $, barre: z }, X) {
    const ge = [...c].reverse(), Te = $.filter((Ce) => Ce > 0), Ie = !Te.length || Math.max(...Te) <= 4 && ($.includes(0) || Math.min(...Te) === 1) ? 1 : Math.min(...Te), $e = (Ce) => 24 + Ce * 14, Xe = (Ce) => 30 + (Ce - Ie) * 18 + 18 / 2, jt = 102;
    let Ve = '<svg class="chord-svg" viewBox="0 0 108 ' + (jt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + X + "-ote paksusta kielestä ohueen: " + $.map((Ce) => Ce ?? "x").join(" ") + '">';
    for (let Ce = 0; Ce <= 4; Ce++)
      Ve += '<line class="' + (Ce === 0 && Ie === 1 ? "nut" : "fret") + '" x1="' + $e(0) + '" y1="' + (30 + Ce * 18) + '" x2="' + $e(5) + '" y2="' + (30 + Ce * 18) + '"/>';
    return $.forEach((Ce, Je) => {
      Ve += '<line class="string" x1="' + $e(Je) + '" y1="30" x2="' + $e(Je) + '" y2="' + jt + '"/>';
    }), Ie > 1 && (Ve += '<text class="fret-label" x="15" y="' + (Xe(Ie) + 4) + '">' + Ie + "</text>"), z && (Ve += '<rect class="barre" x="' + ($e(z.from) - 6.5) + '" y="' + (Xe(z.fret) - 6.5) + '" width="' + ((z.to - z.from) * 14 + 13) + '" height="13" rx="6.5"/>'), $.forEach((Ce, Je) => {
      if (Ce === null) {
        Ve += '<text class="marker" x="' + $e(Je) + '" y="22">×</text>';
        return;
      }
      const Vt = (ge[Je] + Ce) % 12 === F;
      if (Ce === 0) {
        Ve += '<circle class="open' + (Vt ? " root-open" : "") + '" cx="' + $e(Je) + '" cy="18" r="4.5"/>';
        return;
      }
      z && Ce === z.fret && Je >= z.from && Je <= z.to && !Vt || (Ve += '<circle class="' + (Vt ? "root" : "tone") + '" cx="' + $e(Je) + '" cy="' + Xe(Ce) + '" r="6.5"/>');
    }), Ve + "</svg>";
  }
  function de(F, $) {
    const z = new URLSearchParams(location.search), X = u.indexOf(z.get("toonikka")), ce = z.get("asteikko");
    return {
      rootPC: X === -1 ? F : X,
      scaleId: Object.hasOwn(L, ce) ? ce : $
    };
  }
  function pe(F, $, z) {
    return F + "?" + new URLSearchParams({ toonikka: u[$], asteikko: z });
  }
  function me(F, $, z, {
    boxes: X = [],
    onlyBoxNotes: ce = !1,
    automatic: te = !0,
    focusDegree: ie = "",
    grip: ne = null,
    barre: ve = null,
    label: ge = u[F] + " " + $.name,
    notes: Te = null,
    targets: Qe = !1,
    muteFret: Ie = null
  } = {}) {
    const $e = Q(z), Xe = $e + 48, jt = Xe + 28, Ve = P - 14, Ce = re(c.length - 1) + 14, Je = Ce - Ve, Vt = te ? 680 : Math.ceil(jt * 0.64), Cn = X.flatMap((ae) => ae.positions), At = {};
    $.base.forEach(([ae, ye]) => At[(F + ae) % 12] = { deg: ye, added: !1 }), $.add.forEach(([ae, ye]) => At[(F + ae) % 12] = { deg: ye, added: !0 });
    const Xt = c.map((ae, ye) => !!ne && ne[ye] === null), Ut = !!ne && Ie !== null, Ht = _.filter((ae, ye) => Xt[ye]).reverse(), gr = ge + ". " + z + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Ht.length ? " Soittamatta jäävät kielet: " + Ht.join(", ") + "." : "");
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
      et ? oe += '<text class="muted-mark" x="' + K + '" y="' + (Ae + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : Xt[ye] && Ie === 0 || (oe += '<line x1="' + (V + 4) + '" y1="' + Ae + '" x2="' + (O - 4) + '" y2="' + Ae + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), oe += "<g" + (et ? ' opacity=".35"' : "") + ">", oe += '<line x1="' + O + '" y1="' + Ae + '" x2="' + (Xe + 5) + '" y2="' + Ae + '" stroke="#b9b9c4" stroke-width="' + ke.toFixed(2) + '"/>', oe += '<circle cx="' + (Xe + 5) + '" cy="' + Ae + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', oe += "</g>", oe += '<text x="13" y="' + (Ae + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + E[ye] + "</text>";
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
      const ke = H(Ie), Ae = re(ye);
      oe += '<g class="muted-mark grip-mute" data-string="' + (ye + 1) + '" data-fret="' + Ie + '">', oe += '<circle cx="' + ke + '" cy="' + Ae + '" r="9" fill="' + (Ie === 0 ? "#2a2338" : "#231a12") + '"/>', oe += '<text x="' + ke + '" y="' + (Ae + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', oe += "</g>";
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
globalThis.MusicMapFretboard = Bd;
function fo(u) {
  return 440 * Math.pow(2, (u - 69) / 12);
}
function $d(u) {
  return 69 + 12 * Math.log2(u / 440);
}
function Vd(u) {
  const l = $d(u), o = Math.round(l), c = (l - o) * 100;
  return { midi: o, cents: c };
}
const jc = globalThis.MusicMapFretboard, Ud = (u) => (u % 12 + 12) % 12, Hd = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Wd = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Kd = (u, l = !1, o = !1) => (l ? Wd : Hd)[Ud(u)] + (o ? Math.floor(u / 12) - 1 : ""), yo = ["ohut E", "B", "G", "D", "A", "paksu E"], Qd = (u) => u === 0 ? "vapaa kieli" : `${u}. nauha`, Gd = (u, l) => ({ string: u, fret: l, midi: jc.OPEN_PITCHES[u] + l });
function qd(u, l, o) {
  return [...u].sort((c, f) => c - f).flatMap((c) => Array.from({ length: Math.max(0, o - l + 1) }, (f, h) => Gd(c, l + h)));
}
const ni = (u) => `${u.string}:${u.fret}`, Yd = 4e3;
class fc extends Error {
  name = "MicSetupError";
}
async function Xd(u, l) {
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
    if (f = l ? l() : new AudioContext(), f.state !== "running") {
      let _;
      await Promise.race([
        f.resume(),
        new Promise((j, T) => {
          _ = setTimeout(() => T(new fc("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Yd);
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
        c.getTracks().forEach((_) => _.stop()), h.disconnect(), l || w.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((w) => w.stop()), l || await f?.close().catch(() => {
    }), h;
  }
}
async function Jd() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((l) => l.kind === "audioinput" && l.deviceId) : [];
}
var ho, dc;
function Zd() {
  if (dc) return ho;
  dc = 1;
  function u(l) {
    if (this.size = l | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = l << 1;
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
          const D = O, Z = D + L, A = Z + L, K = A + L, b = o[D], Q = o[D + 1], H = o[Z], re = o[Z + 1], he = o[A], Me = o[A + 1], xe = o[K], We = o[K + 1], De = b, Re = Q, Be = T[P], Ke = j * T[P + 1], Le = H * Be - re * Ke, Ee = H * Ke + re * Be, B = T[2 * P], ee = j * T[2 * P + 1], U = he * B - Me * ee, y = he * ee + Me * B, C = T[3 * P], ue = j * T[3 * P + 1], de = xe * C - We * ue, pe = xe * ue + We * C, me = De + U, F = Re + y, $ = De - U, z = Re - y, X = Le + de, ce = Ee + pe, te = j * (Le - de), ie = j * (Ee - pe), ne = me + X, ve = F + ce, ge = me - X, Te = F - ce, Qe = $ + ie, Ie = z - te, $e = $ - ie, Xe = z + te;
          o[D] = ne, o[D + 1] = ve, o[Z] = Qe, o[Z + 1] = Ie, o[A] = ge, o[A + 1] = Te, o[K] = $e, o[K + 1] = Xe;
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
          var Z = x + P, A = Z + V, K = A + V, b = K + V, Q = o[Z], H = o[Z + 1], re = o[A], he = o[A + 1], Me = o[K], xe = o[K + 1], We = o[b], De = o[b + 1], Re = Q, Be = H, Ke = T[D], Le = j * T[D + 1], Ee = re * Ke - he * Le, B = re * Le + he * Ke, ee = T[2 * D], U = j * T[2 * D + 1], y = Me * ee - xe * U, C = Me * U + xe * ee, ue = T[3 * D], de = j * T[3 * D + 1], pe = We * ue - De * de, me = We * de + De * ue, F = Re + y, $ = Be + C, z = Re - y, X = Be - C, ce = Ee + pe, te = B + me, ie = j * (Ee - pe), ne = j * (B - me), ve = F + ce, ge = $ + te, Te = z + ne, Qe = X - ie;
          if (o[Z] = ve, o[Z + 1] = ge, o[A] = Te, o[A + 1] = Qe, P === 0) {
            var Ie = F - ce, $e = $ - te;
            o[K] = Ie, o[K + 1] = $e;
            continue;
          }
          if (P !== O) {
            var Xe = z, jt = -X, Ve = F, Ce = -$, Je = -j * ne, Vt = -j * ie, Cn = -j * te, At = -j * ce, Xt = Xe + Je, Ut = jt + Vt, Ht = Ve + At, gr = Ce - Cn, oe = x + V - P, Jt = x + L - P;
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
var bd = Zd();
const eh = /* @__PURE__ */ Md(bd);
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
  static forFloat32Array(l) {
    return new oi(
      l,
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
  static forFloat64Array(l) {
    return new oi(
      l,
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
  static forNumberArray(l) {
    return new oi(l, (o) => Array(o));
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
  constructor(l, o) {
    if (l < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = l, this._fft = new eh(rh(2 * l)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(l, o = this._bufferSupplier(l.length)) {
    if (l.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${l.length}`
      );
    for (let f = 0; f < l.length; f++)
      this._paddedInputBuffer[f] = l[f];
    for (let f = l.length; f < this._paddedInputBuffer.length; f++)
      this._paddedInputBuffer[f] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const c = this._transformBuffer;
    for (let f = 0; f < c.length; f += 2)
      c[f] = c[f] * c[f] + c[f + 1] * c[f + 1], c[f + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let f = 0; f < l.length; f++)
      o[f] = this._inverseBuffer[2 * f];
    return o;
  }
}
function th(u) {
  const l = [];
  let o = !1, c = -1 / 0, f = -1;
  for (let h = 1; h < u.length - 1; h++)
    u[h - 1] <= 0 && u[h] > 0 ? (o = !0, f = h, c = u[h]) : u[h - 1] > 0 && u[h] <= 0 ? (o = !1, f !== -1 && l.push(f)) : o && u[h] > c && (c = u[h], f = h);
  return l;
}
function nh(u, l) {
  const [o, c, f] = [u - 1, u, u + 1], [h, w, x] = [l[o], l[c], l[f]], E = h / 2 - w + x / 2, _ = -(h / 2) * (c + f) + w * (o + f) - x / 2 * (o + c), j = h * c * f / 2 - w * o * f + x * o * c / 2, T = -_ / (2 * E), L = E * T * T + _ * T + j;
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
  static forFloat32Array(l) {
    return new ai(l, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(l) {
    return new ai(l, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(l) {
    return new ai(l, (o) => Array(o));
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
  constructor(l, o) {
    this._autocorrelator = new oi(l, o), this._nsdfBuffer = o(l);
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
  set clarityThreshold(l) {
    if (!Number.isFinite(l) || l <= 0 || l > 1)
      throw new Error("clarityThreshold must be a number in the range (0, 1]");
    this._clarityThreshold = l;
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
  set minVolumeAbsolute(l) {
    if (!Number.isFinite(l) || l < 0 || l > this._maxInputAmplitude)
      throw new Error(
        `minVolumeAbsolute must be a number in the range [0, ${this._maxInputAmplitude}]`
      );
    this._minVolumeAbsolute = l;
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
  set minVolumeDecibels(l) {
    if (!Number.isFinite(l) || l > 0)
      throw new Error("minVolumeDecibels must be a number <= 0");
    this._minVolumeAbsolute = this._maxInputAmplitude * 10 ** (l / 10);
  }
  /**
   * Sets the maximum amplitude of an input reading. Must be greater than 0.
   *
   * @param amplitude {number} the maximum amplitude (absolute value) of an input reading
   */
  set maxInputAmplitude(l) {
    if (!Number.isFinite(l) || l <= 0)
      throw new Error("maxInputAmplitude must be a number > 0");
    this._maxInputAmplitude = l;
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
  findPitch(l, o) {
    if (this._belowMinimumVolume(l)) return [0, 0];
    this._nsdf(l);
    const c = th(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const f = Math.max(...c.map((E) => this._nsdfBuffer[E])), h = c.find(
      (E) => this._nsdfBuffer[E] >= this._clarityThreshold * f
    ), [w, x] = nh(
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
  _belowMinimumVolume(l) {
    if (this._minVolumeAbsolute === 0) return !1;
    let o = 0;
    for (let c = 0; c < l.length; c++)
      o += l[c] ** 2;
    return Math.sqrt(o / l.length) < this._minVolumeAbsolute;
  }
  /**
   * Computes the NSDF of the input and stores it in the internal buffer. This
   * is equation (9) in the McLeod pitch method paper.
   *
   * @private
   * @param input {ArrayLike<number>}
   */
  _nsdf(l) {
    this._autocorrelator.autocorrelate(l, this._nsdfBuffer);
    let o = 2 * this._nsdfBuffer[0], c;
    for (c = 0; c < this._nsdfBuffer.length && o > 0; c++)
      this._nsdfBuffer[c] = 2 * this._nsdfBuffer[c] / o, o -= l[c] ** 2 + l[l.length - c - 1] ** 2;
    for (; c < this._nsdfBuffer.length; c++)
      this._nsdfBuffer[c] = 0;
  }
}
function rh(u) {
  return u--, u |= u >> 1, u |= u >> 2, u |= u >> 4, u |= u >> 8, u |= u >> 16, u++, u;
}
function ih(u) {
  const l = u * 0.17;
  let o = 2048;
  for (; o < l && o < 32768; ) o *= 2;
  return o;
}
const lh = 0.05, sh = 1.5;
class oh {
  constructor(l, o = {}) {
    this.mic = l, this.opts = o;
    const c = l.context, f = ih(c.sampleRate), h = Math.max(1, Math.min(2, l.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), l.source.connect(this.splitter));
    for (let w = 0; w < (this.splitter ? h : 1); w++) {
      const x = c.createAnalyser();
      x.fftSize = f, x.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(x, w) : l.source.connect(x), this.analysers.push(x), this.buffers.push(new Float32Array(new ArrayBuffer(f * 4)));
    }
    this.shortLength = Math.min(f, Math.max(256, Math.round(c.sampleRate * lh))), this.detector = ai.forFloat32Array(f), this.detector.minVolumeDecibels = -60;
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
  gate = new ah();
  onset = new Cc();
  /** Kynnysten muuttaminen kesken kuuntelun, esimerkiksi mikrofonitestin liukusäätimistä. */
  setOptions(l) {
    Object.assign(this.opts, l);
  }
  start() {
    if (this.running) return;
    this.running = !0, this.gate.reset(), this.onset.reset();
    const l = () => {
      this.running && (this.paused || this.processFrame(performance.now()), this.rafId = requestAnimationFrame(l));
    };
    this.rafId = requestAnimationFrame(l);
  }
  stop() {
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = null, this.gate.reset(), this.onset.reset();
    for (const l of this.analysers) l.disconnect();
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
  processFrame(l) {
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
    const L = this.buffers[this.channel], V = j[this.channel], O = uh(L, L.length - this.shortLength), P = { rms: V, peak: O, channel: this.channel, levels: j }, D = V < c, Z = this.onset.feed(V, l, c);
    if (D && hc(L, 0) < c) {
      this.gate.feed(null, l, f, !0, !1), E?.({ ...P, status: "silent" });
      return;
    }
    const [A, K] = this.detector.findPitch(L, this.mic.context.sampleRate);
    if (!isFinite(A) || K < o) {
      this.gate.feed(null, l, f, D, Z), E?.({ ...P, status: D ? "silent" : "unclear", clarity: isFinite(K) ? K : 0 });
      return;
    }
    if (A < w || A > x) {
      this.gate.feed(null, l, f, D, Z), E?.({ ...P, status: "out-of-range", frequency: A, clarity: K });
      return;
    }
    const { midi: b, cents: Q } = Vd(A);
    if (Math.abs(Q) > h) {
      this.gate.feed(null, l, f, D, Z), E?.({ ...P, status: "off-pitch", frequency: A, clarity: K, midi: b, cents: Q });
      return;
    }
    E?.({ ...P, status: "pitch", frequency: A, clarity: K, midi: b, cents: Q });
    const H = this.gate.feed(b, l, f, D, Z);
    H !== null && _?.({ midi: b, frequency: A, cents: Q, clarity: K, timestamp: l, heldMs: H.heldMs });
  }
}
class ah {
  constructor(l = 120, o = 80) {
    this.releaseMs = l, this.gapMs = o;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(l, o, c, f, h) {
    if (f ? (this.quietSince ??= o, o - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), l === null)
      return this.current && o - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== l) && (this.current = { midi: l, since: o, seen: o }), this.current.seen = o;
    const w = o - this.current.since;
    return w < c ? null : (this.armed = !1, this.current = null, { midi: l, heldMs: w });
  }
}
class Cc {
  constructor(l = 2, o = 300, c = 150) {
    this.ratio = l, this.windowMs = o, this.refractoryMs = c;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(l, o, c) {
    if (o - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: o, rms: l }], !1;
    for (; this.history.length && o - this.history[0].time > this.windowMs; ) this.history.shift();
    const f = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : l;
    return this.history.push({ time: o, rms: l }), l < c * 1.5 || l < f * this.ratio ? !1 : (this.lastOnset = o, this.history = [{ time: o, rms: l }], !0);
  }
}
function hc(u, l = 0) {
  const o = Math.max(0, l);
  let c = 0;
  for (let f = o; f < u.length; f++) c += u[f] * u[f];
  return Math.sqrt(c / Math.max(1, u.length - o));
}
function uh(u, l = 0) {
  let o = 0;
  for (let c = Math.max(0, l); c < u.length; c++) {
    const f = Math.abs(u[c]);
    f > o && (o = f);
  }
  return o;
}
const kl = (u) => u > 0 ? Math.max(-90, 20 * Math.log10(u)) : -90;
let vr;
function Nc() {
  return (!vr || vr.state === "closed") && (vr = new AudioContext()), vr;
}
function ch() {
  const u = vr;
  vr = void 0, u?.close().catch(() => {
  });
}
const Mc = (u) => u instanceof Error ? u.name : "";
function fh(u) {
  const l = Mc(u);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(l) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : l === "NotFoundError" || l === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : l === "NotReadableError" || l === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : l === "MicSetupError" ? u.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class dh {
  constructor(l = (o) => Xd(o, Nc)) {
    this.opener = l;
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
  async start(l, o, c) {
    this.stop();
    const f = this.generation;
    let h, w = !1;
    try {
      h = await this.opener(l || void 0);
    } catch (x) {
      if (!l || f !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Mc(x))) throw x;
      h = await this.opener(void 0), w = !0;
    }
    if (f !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new oh(h, { ...o });
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
  setOptions(l) {
    this.loop?.setOptions(l);
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
function hh(u) {
  const l = [...u].sort((c, f) => c - f), o = l[Math.min(l.length - 1, Math.floor(l.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, o * 3)), noise: o, loud: o > 0.04 };
}
async function po(u) {
  const l = () => u.state === "running";
  if (l()) return;
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
  if (!l()) throw new Error("reference-audio-not-running");
}
function ph(u) {
  const l = u instanceof Error ? u.message : "";
  return l === "reference-audio-resume-timeout" || l === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : u instanceof Error && u.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class pc {
  constructor(l = Nc) {
    this.provide = l;
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
  async play(l, o) {
    this.stop();
    const c = this.token, f = this.provide();
    if (await po(f), c !== this.token) return !1;
    const h = f.createGain();
    h.connect(f.destination), this.master = h;
    const w = Array.from({ length: 12 }, (_, j) => 1 / (j + 1) ** 1.3), x = f.createPeriodicWave?.(new Float32Array([0, ...w.map(() => 0)]), new Float32Array([0, ...w]));
    return l.forEach((_, j) => {
      const T = f.createOscillator(), L = f.createGain(), V = f.currentTime + 0.05 + j * 0.8;
      x ? T.setPeriodicWave(x) : T.type = "triangle", T.frequency.value = fo(_), L.gain.setValueAtTime(0, V), L.gain.linearRampToValueAtTime(0.22, V + 0.012), L.gain.exponentialRampToValueAtTime(1e-3, V + 0.7), T.connect(L), L.connect(h), T.start(V), T.stop(V + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(j);
      }, 50 + j * 800));
    }), !await new Promise((_) => {
      this.settle = _, this.timer = setTimeout(() => _(!0), l.length * 800 + 350);
    }) || c !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], h.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(l, o, c, f) {
    if (this.stop(), !l.length) return !1;
    const h = this.token, w = this.provide();
    if (await po(w), h !== this.token) return !1;
    const x = 60 / Math.max(40, Math.min(140, o)), E = w.createGain();
    E.connect(w.destination), this.master = E;
    const _ = Array.from({ length: 12 }, (O, P) => 1 / (P + 1) ** 1.3), j = w.createPeriodicWave?.(
      new Float32Array([0, ..._.map(() => 0)]),
      new Float32Array([0, ..._])
    ), T = w.currentTime + 0.05;
    let L = 0;
    return l.forEach((O, P) => {
      if (!Number.isFinite(O.beat) || O.beat < 0 || !Number.isFinite(O.duration) || O.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const D = T + O.beat * x, Z = O.duration * x, A = D + Math.max(0.08, Z * 0.94), K = w.createOscillator(), b = w.createGain();
      j ? K.setPeriodicWave(j) : K.type = "triangle", K.frequency.value = fo(O.midi), b.gain.setValueAtTime(0, D), b.gain.linearRampToValueAtTime(0.22, D + 0.012), b.gain.exponentialRampToValueAtTime(1e-3, A - 0.01), K.connect(b), b.connect(E), K.start(D), K.stop(A), c && this.noteTimers.push(setTimeout(() => {
        h === this.token && c(P);
      }, 50 + O.beat * x * 1e3));
      const Q = l[P + 1]?.beat ?? 1 / 0;
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
  setLoopTempo(l) {
    this.adjustLoopTempo?.(l);
  }
  async loop(l, o, c = 75) {
    if (this.stop(), !l.length) return !1;
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
          T += P * _, L = (L + P) % l.length, V.length = 0;
        }
        for (; T < h.currentTime + j; ) {
          const P = l[L], D = L, Z = T, A = h.createOscillator(), K = h.createGain();
          E ? A.setPeriodicWave(E) : A.type = "triangle", A.frequency.value = fo(P), K.gain.setValueAtTime(0, Z), K.gain.linearRampToValueAtTime(0.22, Z + 0.012), K.gain.exponentialRampToValueAtTime(1e-3, Z + _ * 0.975), A.connect(K), K.connect(w), A.start(Z), A.stop(Z + _ * 0.985), V.push({ at: Z, index: D }), T += _, L = (L + 1) % l.length;
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
const mh = /* @__PURE__ */ new Set([12, 19, 24, 28, 31, 36]), vh = 0.25;
class mc {
  constructor(l) {
    this.opts = l;
  }
  opts;
  onset = new Cc();
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
  setMinRms(l) {
    this.opts = { ...this.opts, minRms: l };
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
  feed(l, o) {
    const { minRms: c, stabilityMs: f, releaseMs: h = 120, gapMs: w = 80 } = this.opts, x = l.rms < c, E = this.onset.feed(l.rms, o, c);
    if (x ? (this.quietSince ??= o, o - this.quietSince >= h && this.arm("quiet")) : (this.quietSince = null, E && this.arm("onset")), this.notePeak = Math.max(this.notePeak, l.rms), l.status !== "pitch" || l.midi === void 0)
      return this.current && o - this.current.seen > w && (this.current = null), this.reason = l.status === "pitch" ? "unclear" : l.status, null;
    const _ = l.midi;
    let j = this.armedBy;
    if (!this.armed) {
      const V = this.previous;
      if (!V || _ === V.midi)
        return this.current = null, this.reason = "waiting-new-pluck", null;
      if (mh.has(Math.abs(_ - V.midi)))
        return this.current = null, this.reason = "harmonic", null;
      if (l.rms < V.peak * vh)
        return this.current = null, this.reason = "too-quiet-for-change", null;
      j = "pitch-change";
    }
    (!this.current || this.current.midi !== _) && (this.current = { midi: _, since: o, seen: o, armedBy: j }, j === "pitch-change" && (this.notePeak = l.rms)), this.current.seen = o;
    const T = o - this.current.since;
    if (T < f)
      return this.reason = "stabilizing", null;
    const L = this.current.armedBy;
    return this.armed = !1, this.armedBy = null, this.current = null, this.previous = { midi: _, peak: this.notePeak }, this.last = { midi: _, at: o, armedBy: L }, this.count++, this.reason = null, { midi: _, frequency: l.frequency ?? 0, cents: l.cents ?? 0, clarity: l.clarity ?? 0, timestamp: o, heldMs: T, armedBy: L };
  }
  arm(l) {
    this.armed = !0, this.armedBy = l, this.current = null, this.notePeak = 0;
  }
}
const Hn = { minRms: 0.01, minClarity: 0.94, stabilityMs: 240, centsTolerance: 35 };
function yh(u, l, o) {
  return (c) => {
    const f = l.feed(c, o());
    u.onFrame(c, l.state()), f && u.onStable(f);
  };
}
class gh {
  mic = new dh();
  player = new pc();
  /** Oma soitin painalluksille, jotta nopea uusi painallus ei keskeytä mallia eikä päinvastoin. */
  strings = new pc();
  minRms = Hn.minRms;
  detector = new mc({ minRms: Hn.minRms, stabilityMs: Hn.stabilityMs });
  async openMic(l, o) {
    this.detector = new mc({ minRms: this.minRms, stabilityMs: Hn.stabilityMs });
    const c = yh(l, this.detector, () => performance.now());
    return this.mic.start(o, { ...Hn, minRms: this.minRms, onFrame: c }, l.onEnded);
  }
  async listDevices() {
    return (await Jd()).filter((o) => o.deviceId !== "default" && o.deviceId !== "communications").map((o, c) => ({ id: o.deviceId, label: o.label || `Äänitulo ${c + 1}` }));
  }
  setMinRms(l) {
    this.minRms = l, this.mic.setOptions({ minRms: l }), this.detector.setMinRms(l);
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
  playModel(l, o) {
    return this.player.play(l, o);
  }
  stopModel() {
    this.player.stop(), this.strings.stop();
  }
  // Uusi painallus katkaisee edellisen sävelen: sama sävel kahdesti kuuluu kahtena näppäyksenä.
  pluck(l) {
    this.strings.play([l]).catch(() => {
    });
  }
}
const kh = [64, 59, 55, 50, 45, 40], go = [0, 1, 2, 3, 4, 5], wh = 0, xh = 5, Vn = (u, l, o, c) => ({
  id: u,
  title: l,
  tip: c,
  spots: o.map(([f, h]) => ({ string: f, fret: h })),
  midi: o.map(([f, h]) => kh[f] + h)
}), Un = (u, l) => l.map((o) => [u, o]), ri = 1, yl = 2, ii = 59, li = Vn("opastus", "Opastus: kaksi säveltä", Un(ri, [0, 1]), "Vapaa B-kieli ja sitten 1. nauha."), qe = [
  { number: 1, name: "Kotitreeni 1", title: "B-kieli", strings: [ri], instruction: "Soita riffi B-kieleltä.", riffs: [
    // Sävelet B3, C4 ja D4: vapaa kieli, 1. ja 3. nauha.
    Vn("b-kaari", "Ensimmäinen kaiku", Un(ri, [0, 1, 3, 1]), "Vapaa kieli, 1., 3. ja takaisin 1. nauhaan."),
    Vn("b-vaihto", "Edestakaisin", Un(ri, [1, 0, 1, 3]), "1. nauha, vapaa kieli, 1. ja 3. nauha."),
    Vn("b-takaisin", "Kaari takaisin", Un(ri, [0, 3, 1, 0]), "Vapaa kieli, 3. ja 1. nauha ja taas vapaa kieli.")
  ] },
  { number: 2, name: "Kotitreeni 2", title: "G-kieli", strings: [yl], instruction: "Soita riffi G-kieleltä.", riffs: [
    // Sävelet G3, A3 ja B3: vapaa kieli, 2. ja 4. nauha. Vaihtelevampi: toisto ja hyppy.
    Vn("g-nousu", "G-kielen kaari", Un(yl, [0, 2, 4, 2]), "Vapaa kieli, 2., 4. ja takaisin 2. nauhaan."),
    Vn("g-toisto", "Kaksi samaa", Un(yl, [2, 2, 0, 4]), "Kaksi erillistä näppäystä 2. nauhalla, sitten vapaa kieli ja 4. nauha. Vaimenna kieli hetkeksi samojen sävelten välissä."),
    Vn("g-hyppy", "Hyppy alas", Un(yl, [4, 0, 2, 0]), "4. nauha, vapaa kieli, 2. nauha ja taas vapaa kieli.")
  ] }
];
qe.flatMap((u) => u.riffs);
const Sh = (u) => qe.find((l) => l.riffs.some((o) => o.id === u));
class Eh {
  constructor(l, o, c) {
    if (this.round = o, this.input = c, !l.length || l.some((f) => !Number.isInteger(f))) throw new Error("Säveljonossa pitää olla vähintään yksi kokonaislukuinen MIDI-sävel.");
    this.expected = [...l], this.slots = this.expected.map(() => "pending");
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
    return this.complete && this.slots.every((l) => l === "green");
  }
  useHint() {
    this.hint = !0;
  }
  feed(l) {
    if (l.round !== this.round) return { type: "ignored", reason: "stale-round" };
    if (l.input !== this.input) return { type: "ignored", reason: "wrong-input" };
    if (this.complete) return { type: "ignored", reason: "complete" };
    const o = this.position, c = this.expected[o], f = l.midi;
    if (f === c) {
      const w = this.slots[o] === "red" ? "yellow" : "green";
      return this.slots[o] = w, this.position++, { type: "accepted", index: o, midi: f, complete: this.complete, mark: w };
    }
    const h = ((f - c) % 12 + 12) % 12 === 0;
    return this.wrongs++, h && this.octaves++, this.slots[o] = "red", { type: "wrong", index: o, expected: c, played: f, octave: h };
  }
}
const _h = 3;
class Th {
  constructor(l, o) {
    this.input = o, this.expected = [...l], this.known = this.expected.map(() => !1);
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
    return this.failed >= _h;
  }
  /** Paikkakohtaiset muistivihjeet: MIDI-korkeus näytettäväksi tai null. Tyhjä ennen kolmatta epäonnistumista. */
  get memory() {
    return this.expected.map((l, o) => this.memoryActive && this.known[o] ? l : null);
  }
  get attempt() {
    return this.current;
  }
  /** Uusi yritys: edellisen yrityksen vihreät paikat muistetaan (myös kesken jääneestä). */
  start(l) {
    return this.absorb(), this.current = new Eh(this.expected, l, this.input), this.current;
  }
  /** Loppuun soitettu yritys: palauttaa läpäisyn. Epäonnistunut kasvattaa laskuria kerran. */
  finish() {
    const l = this.current;
    return l?.complete ? (this.absorb(), this.current = null, l.flawless || this.failed++, l.flawless) : !1;
  }
  absorb() {
    this.current?.marks.forEach((l, o) => {
      l === "green" && (this.known[o] = !0);
    });
  }
}
class jh {
  constructor(l = 250, o = 150, c = 1500) {
    this.minMs = l, this.quietMs = o, this.maxMs = c;
  }
  minMs;
  quietMs;
  maxMs;
  startedAt = null;
  quietSince = null;
  start(l) {
    this.startedAt = l, this.quietSince = null;
  }
  get active() {
    return this.startedAt !== null;
  }
  /** Palauttaa 'ready', kun kuuntelun saa aloittaa, ja syyn: hiljaisuus tai aikaraja. */
  feed(l, o) {
    if (this.startedAt === null) return "settling";
    l ? this.quietSince ??= o : this.quietSince = null;
    const c = o - this.startedAt;
    return c >= this.minMs && this.quietSince !== null && o - this.quietSince >= this.quietMs ? (this.startedAt = null, "ready-quiet") : c >= this.maxMs ? (this.startedAt = null, "ready-timeout") : "settling";
  }
  cancel() {
    this.startedAt = null, this.quietSince = null;
  }
}
const Rc = 440, ko = (u) => Rc * 2 ** ((u - 69) / 12), xl = (u, l) => 1200 * Math.log2(u / l), wl = 5, Ch = 100, Sl = [
  { name: "E2", midi: 40, number: 6 },
  { name: "A2", midi: 45, number: 5 },
  { name: "D3", midi: 50, number: 4 },
  { name: "G3", midi: 55, number: 3 },
  { name: "B3", midi: 59, number: 2 },
  { name: "E4", midi: 64, number: 1 }
], Nh = (u) => {
  const l = [...u].sort((c, f) => c - f), o = l.length >> 1;
  return l.length % 2 ? l[o] : (l[o - 1] + l[o]) / 2;
}, Mh = (u) => Sl.reduce((l, o) => Math.abs(xl(u, ko(o.midi))) < Math.abs(xl(u, ko(l.midi))) ? o : l);
class Rh {
  constructor(l = 160, o = 5, c = 25, f = 0.35) {
    this.windowMs = l, this.minSamples = o, this.maxSpreadCents = c, this.smoothing = f;
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
  setTarget(l) {
    this.target = l === null ? null : Sl.find((o) => o.midi === l) ?? null, this.smoothed = null;
  }
  get selected() {
    return this.target;
  }
  reset() {
    this.samples = [], this.smoothed = null;
  }
  feed(l, o) {
    const c = (l.status === "pitch" || l.status === "off-pitch") && l.frequency !== void 0 && l.frequency > 0;
    c && (this.samples.push({ at: o, frequency: l.frequency }), this.lastAt = o), this.samples = this.samples.filter((V) => o - V.at <= this.windowMs), !c && o - this.lastAt > this.windowMs && (this.smoothed = null);
    const f = this.target ?? Sl[0];
    if (!this.samples.length)
      return { status: l.status === "silent" ? "no-signal" : "unreliable", target: f, auto: !this.target };
    const h = Nh(this.samples.map((V) => V.frequency)), w = xl(Math.max(...this.samples.map((V) => V.frequency)), Math.min(...this.samples.map((V) => V.frequency))), x = this.samples[this.samples.length - 1].at - this.samples[0].at, E = this.target ?? Mh(h), _ = Math.round(69 + 12 * Math.log2(h / Rc));
    if (this.samples.length < this.minSamples || x < 100 || w > this.maxSpreadCents)
      return { status: "unreliable", target: E, auto: !this.target, frequency: h, heardMidi: _ };
    const j = xl(h, ko(E.midi));
    if (Math.abs(j) > Ch)
      return this.smoothed = null, { status: "far", target: E, auto: !this.target, frequency: h, cents: j, heardMidi: _ };
    this.smoothed = this.smoothed === null ? j : this.smoothed + this.smoothing * (j - this.smoothed);
    const T = this.smoothed;
    return { status: Math.abs(T) <= wl ? "in-tune" : T < 0 ? "flat" : "sharp", target: E, auto: !this.target, frequency: h, cents: T, heardMidi: _ };
  }
}
const mo = ["mic-check", "tools", "ready", "model-playing", "output-settling", "listening", "success", "retry", "level-complete"], Lh = ["ready", "listening", "success", "retry", "level-complete"], vc = ["ready", "success", "retry"], Ph = 1e3, Ah = 80, Ye = (u) => Kd(u, !1, !0), yc = (u) => u.midi.map(() => "pending");
class zh {
  constructor(l, o, c = () => performance.now()) {
    this.audio = l, this.store = o, this.clock = c;
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
  settler = new jh();
  settleTimer;
  roundStart = null;
  replays = 0;
  pausedFrom = null;
  /** Mikrofonitestin tai työkalujen jälkeen jatkettava riffi (laitteen vaihto kesken riffin). */
  afterCheck = null;
  toolsReturn = "idle";
  calibration = null;
  tunerEngine = new Rh();
  lastView = -1 / 0;
  routed = { count: 0, last: null };
  /** Vastaustavan tallennettu kohta: opastus, tason seuraava riffi tai läpäisty taso. */
  position(l) {
    const o = this.store.level(l);
    if (!this.store.data.tutorialDone) return { riff: li, tutorial: !0, level: qe[0], riffNumber: 1, marks: yc(li) };
    const c = this.store.currentRiff(l) ?? o.riffs[o.riffs.length - 1];
    return { riff: c, tutorial: !1, level: o, riffNumber: o.riffs.indexOf(c) + 1, marks: yc(c) };
  }
  // ---- tilaus (React: useSyncExternalStore) ----
  subscribe = (l) => (this.listeners.add(l), () => {
    this.listeners.delete(l);
  });
  getState = () => this.state;
  /** Aloitusnäkymän yhteenveto vastaustavoittain. */
  progress = (l) => ({ level: this.store.run(l).level, completed: this.store.completedLevels(l) });
  set(l) {
    this.state = { ...this.state, ...l }, this.listeners.forEach((o) => o());
  }
  selectInput(l) {
    this.store.setInput(l), this.set({
      input: l,
      error: "",
      completedLevels: this.store.completedLevels(l),
      unlockedLevels: this.store.unlockedLevels(l),
      ...l === "board" ? { heard: null, lastStable: null } : {}
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
  switchInput(l) {
    l === this.state.input && this.state.phase !== "error" || (l === "board" ? this.startBoard() : this.startMic());
  }
  async openMicThen(l) {
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
      this.micOpen = !0, this.set({ micInfo: h }), this.refreshDevices(), l();
    } catch (h) {
      if (o !== this.op) return;
      this.micOpen = !1, this.set({ phase: "error", error: fh(h), micInfo: null });
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
  setDevice(l) {
    if (this.store.setDevice(l), this.set({ device: l }), this.state.input !== "mic" || !["permission", "error", ...mo, "paused"].includes(this.state.phase)) return;
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
  finishCalibration(l) {
    this.calibration = null;
    const o = hh(l), c = o.loud ? Hn.minRms : o.threshold;
    this.audio.setMinRms(c), this.audio.rearm();
    const f = this.state.phase === "mic-check";
    this.set({ calibrating: !1, minRms: c, noise: o, feedback: o.loud ? { tone: "bad", text: "Taustalla kuului ääntä mittauksen aikana. Käytössä on oletuskynnys. Vaimenna kielet ja mittaa uudelleen." } : f ? { tone: "info", text: `Soita vapaa B-kieli (${Ye(ii)}) ja anna sen soida hetki.` } : null });
  }
  /** Mikrofonitestin jälkeen: opastus tai tason seuraava riffi (tai laitteen vaihdossa kesken jäänyt riffi). */
  continueAfterCheck() {
    if (this.state.phase !== "mic-check" || this.state.check === "waiting") return;
    this.micChecked = !0;
    const l = this.afterCheck ?? void 0;
    this.afterCheck = null, this.beginRound(l);
  }
  // ---- työkalut: viritin ja diagnostiikka ----
  /** Avaa työkalun. Aloitusnäkymästä mikrofoni avataan ensin. Työkalut eivät koskaan anna pelivastauksia. */
  openTools(l) {
    const o = this.state.phase;
    if (o === "tools") {
      this.set({ tool: l });
      return;
    }
    if (o === "mic-check" && this.micOpen) {
      this.toolsReturn = "mic-check", this.enterTools(l);
      return;
    }
    o === "idle" && (this.toolsReturn = "idle", this.selectInput("mic"), this.openMicThen(() => this.enterTools(l, !0)));
  }
  enterTools(l, o = !1) {
    this.audio.resumeAnalysis(), this.tunerEngine.reset(), this.tunerEngine.setTarget(this.state.tunerTarget), o && this.startCalibration(), this.set({ phase: "tools", tool: l, tuner: null });
  }
  setTool(l) {
    this.state.phase === "tools" && this.set({ tool: l });
  }
  setTunerTarget(l) {
    this.tunerEngine.setTarget(l), this.set({ tunerTarget: l });
  }
  /** Takaisin: mikrofonitestiin tai aloitusnäkymään (mikrofoni suljetaan). */
  closeTools() {
    this.state.phase === "tools" && (this.toolsReturn === "mic-check" ? (this.audio.rearm(), this.set({ phase: "mic-check", feedback: this.state.check === "waiting" ? { tone: "info", text: `Soita vapaa B-kieli (${Ye(ii)}) ja anna sen soida hetki.` } : this.state.feedback })) : this.stop());
  }
  /** Virittimestä suoraan harjoitukseen: virittimen lukema osoittaa mikrofonin toimivan. */
  startFromTools() {
    if (this.state.phase !== "tools") return;
    this.micChecked = !0, this.calibration = null, this.set({ calibrating: !1 });
    const l = this.afterCheck ?? void 0;
    this.afterCheck = null, this.beginRound(l);
  }
  /** Diagnostiikkapaneeli pelin aikana (vain luku, ei vaikuta peliin). */
  setDiagnosticsOpen(l) {
    this.set({ diagOpen: l, ...l ? {} : { diag: null } });
  }
  // ---- tasovalikko ----
  openLevels() {
    ["idle", "level-complete", "success", "retry", "ready", "listening", "output-settling", "model-playing", "paused"].includes(this.state.phase) && (++this.op, this.cancelTimers(), this.audio.stopModel(), this.micOpen && this.audio.pauseAnalysis(), this.set({ modelPlaying: !1, playing: null, phase: "levels", unlockedLevels: this.store.unlockedLevels(this.state.input), completedLevels: this.store.completedLevels(this.state.input), feedback: null, hint: !1 }));
  }
  /**
   * Valitse taso: läpäisty, nykyinen tai seuraava avattu. Nykyinen taso jatkuu siitä, mihin jäätiin;
   * muu taso (tai restart) alkaa ensimmäisestä riffistä. Läpäistyt tasot säilyvät aina.
   */
  chooseLevel(l, o = !1) {
    this.state.phase !== "levels" || !this.store.unlockedLevels(this.state.input).includes(l) || ((o || l !== this.store.run(this.state.input).level) && this.store.startLevel(this.state.input, l), this.store.finishTutorial(), this.beginRound());
  }
  // ---- kierros ----
  /**
   * Uusi riffi (tai uusi yritys samalla riffillä: riff annettu).
   * start: 'ready' = pelaaja aloittaa kuuntelun itse (uusi riffi), 'model' = malli soi heti
   * (Soita uudelleen, automaattinen uusinta), 'listen' = suoraan vuoroon ilman mallia.
   */
  beginRound(l, o = "ready") {
    if (this.state.input === "mic" && !this.micOpen) {
      this.openMicThen(() => this.beginRound(l, o));
      return;
    }
    ++this.op, this.cancelTimers(), this.audio.stopModel(), this.set({ modelPlaying: !1, playing: null });
    const c = this.position(this.state.input);
    if (!c.tutorial && !l && this.store.currentRiff(this.state.input) === null) {
      this.showLevelComplete();
      return;
    }
    const f = c.tutorial ? li : l ?? c.riff, h = !!this.practice && this.practiceRiff === f.id && this.practice.input === this.state.input;
    h || (this.practice = new Th(f.midi, this.state.input), this.practiceRiff = f.id), this.replays = 0, this.roundStart = null, this.set({
      ...c,
      riff: f,
      riffNumber: c.tutorial ? 1 : c.level.riffs.indexOf(f) + 1,
      hint: h ? this.state.hint : !1,
      feedback: null,
      lastStable: null,
      unlockedLevels: this.store.unlockedLevels(this.state.input),
      tuner: null,
      diag: this.state.diagOpen ? this.state.diag : null
    }), this.startAttempt(), o === "model" ? this.playModel(!0) : o === "listen" ? (this.micOpen && this.audio.resumeAnalysis(), this.startListening()) : this.enterFreeTry("ready");
  }
  /** Uusi yritys samassa sarjassa: kierrostunniste vaihtuu, pallukat harmaiksi, muistivihjeet näkyviin. */
  startAttempt() {
    const l = this.practice.start(++this.round);
    return this.state.hint && l.useHint(), this.set({ index: 0, marks: l.marks, memory: this.practice.memory, failedAttempts: this.practice.failedAttempts, lastStable: null }), l;
  }
  get checker() {
    return this.practice?.attempt ?? null;
  }
  async playModel(l) {
    const o = ++this.op;
    this.cancelTimers(), this.micOpen && this.audio.pauseAnalysis();
    const c = l ? "model-playing" : this.state.phase;
    this.set({ phase: c, playing: null, modelPlaying: !0 });
    let f;
    try {
      f = await this.audio.playModel(this.state.riff.midi, (h) => {
        o === this.op && this.set({ playing: h });
      });
    } catch (h) {
      if (o !== this.op) return;
      this.set({ feedback: { tone: "bad", text: ph(h) + " Voit silti soittaa riffin sävelvihjeen avulla." } }), f = !0;
    }
    o !== this.op || !f || (this.set({ playing: null, modelPlaying: !1 }), l ? this.afterModel(o) : this.enterFreeTry(this.state.phase));
  }
  afterModel(l) {
    this.state.input === "mic" && this.micOpen ? (this.audio.resumeAnalysis(), this.settler.start(this.clock()), this.set({ phase: "output-settling" }), this.settleTimer = setTimeout(() => {
      l === this.op && this.state.phase === "output-settling" && this.startListening();
    }, this.settler.maxMs + 200)) : this.startListening();
  }
  startListening() {
    this.cancelTimers(), this.micOpen && this.audio.rearm(), this.roundStart ??= this.clock(), this.set({ phase: "listening" });
  }
  cancelTimers() {
    clearTimeout(this.settleTimer), this.settleTimer = void 0, this.settler.cancel();
  }
  /**
   * Vapaa kokeilu: mikrofonin analyysi käy (pelaaja näkee, mitä soittaa), mutta näppäilyt eivät mene
   * tarkistajalle (onStable reitittää vain listening-vaiheessa). Virtuaalikitara soi (FREE_PLAY).
   */
  enterFreeTry(l) {
    this.micOpen && this.audio.resumeAnalysis(), this.set({ phase: l });
  }
  // ---- mikrofonin tapahtumat ----
  onFrame(l, o) {
    const c = this.clock(), f = { status: l.status, midi: l.status === "pitch" || l.status === "off-pitch" ? l.midi : void 0 }, h = this.state.heard;
    (!h || h.status !== f.status || h.midi !== f.midi) && this.set({ heard: f });
    const w = this.state.phase;
    this.calibration && (w === "mic-check" || w === "tools") && (this.calibration.samples.push(l.rms), c - this.calibration.start >= Ph && this.finishCalibration(this.calibration.samples)), w === "output-settling" && this.settler.feed(l.status === "silent", c) !== "settling" && this.startListening();
    const x = w === "tools" ? this.tunerEngine.feed(l, c) : null, E = this.state.diagOpen || w === "tools" || w === "mic-check";
    (x || E) && c - this.lastView >= Ah && (this.lastView = c, this.set({ ...x ? { tuner: x } : {}, ...E ? { diag: { frame: l, pluck: o, minRms: this.state.minRms, routed: this.routed } } : {} }));
  }
  route(l, o) {
    this.routed = { count: this.routed.count + 1, last: { midi: l.midi, at: l.timestamp, route: o, phase: this.state.phase } }, this.state.diag && this.set({ diag: { ...this.state.diag, routed: this.routed } });
  }
  onStable(l) {
    const o = this.state.phase;
    if (o === "mic-check" && !this.state.calibrating) {
      this.route(l, "mic-check");
      const c = l.midi === ii;
      this.set({ lastStable: l.midi, check: c ? "ok" : "other", feedback: c ? { tone: "good", text: `Kuulin ${Ye(l.midi)}. Mikrofoni toimii.` } : { tone: "info", text: `Kuulin ${Ye(l.midi)}. Mikrofoni toimii, mutta testisävel on ${Ye(ii)}: vapaa B-kieli, toiseksi ohuin kieli. Tarkista tarvittaessa viritys.` } });
      return;
    }
    if (o !== "listening" || this.state.input !== "mic") {
      this.route(l, "not-routed");
      return;
    }
    this.route(l, "game"), this.set({ lastStable: l.midi }), this.answer(l.midi, "mic");
  }
  /**
   * Virtuaalikitaran painallus. Jokainen painallus soi ja on täsmälleen yksi syötetapahtuma, joten
   * sama sävel kahdesti (A–A) on kaksi painallusta. Vastaukseksi lasketaan vain vastausvuorossa;
   * riffin jälkeen otelaudalla voi soitella vapaasti. Mallisoiton aikana otelauta on lukittu.
   */
  tap(l) {
    const o = this.state.phase;
    return this.state.input !== "board" || !Lh.includes(o) ? !1 : (this.audio.pluck(l), o === "listening" && this.answer(l, "board"), !0);
  }
  answer(l, o) {
    const c = this.checker;
    if (!c) return;
    const f = c.feed({ midi: l, round: this.round, input: o }), h = c.expected.length;
    f.type === "accepted" ? (this.set({ index: f.index + 1, marks: c.marks, feedback: { tone: "good", text: f.mark === "yellow" ? `${Ye(l)} löytyi (${f.index + 1}/${h}). Kohta korjattiin, joten pallukka on keltainen.` : `${Ye(l)} oikein (${f.index + 1}/${h}).` } }), f.complete && this.finish(c)) : f.type === "wrong" && this.set({ marks: c.marks, feedback: { tone: "bad", text: o === "mic" ? `Väärä sävel (kuulin ${Ye(f.played)}). Kokeile uudelleen.` : "Väärä sävel. Kokeile uudelleen." } });
  }
  /**
   * Riffi soitettu loppuun. Kirjataan kerran.
   * - Virheetön → success: pelaaja valitsee itse Soita uudelleen tai Seuraava riffi.
   * - Keltaisia → retry: vihreät ja keltaiset jäävät näkyviin. Ei automaattista mallia eikä uutta
   *   yritystä; pelaaja voi kuunnella ja kokeilla vapaasti ja valitsee itse Yritä uudelleen.
   * Molemmissa vapaa kokeilu: mikrofoni kuulee, mutta mitään ei arvioida.
   */
  finish(l) {
    const o = this.state.riff, c = this.practice.finish(), f = this.practice.failedAttempts;
    this.store.record({
      riff: o.id,
      input: l.input,
      hint: l.hintUsed,
      passed: c,
      wrong: l.wrongCount,
      octave: l.octaveCount,
      replays: this.replays,
      ms: Math.max(0, Math.round(this.clock() - (this.roundStart ?? this.clock()))),
      at: Date.now()
    }), this.set({ completedLevels: this.store.completedLevels(l.input), unlockedLevels: this.store.unlockedLevels(l.input), failedAttempts: f }), o.id === li.id ? (this.practice = null, this.set({ feedback: { tone: "good", text: c ? `Hienoa! Opastus on tehty. Seuraavaksi ${qe[0].name}: kolme riffiä ${qe[0].title.toLowerCase().replace("kieli", "kielellä")}.` : "Opastus on tehty. Riffi hyväksytään, kun kaikki pallukat ovat vihreitä." } }), this.enterFreeTry("success")) : c ? (this.practice = null, this.set({ feedback: { tone: "good", text: l.hintUsed ? "Virheetön, vihjeen kanssa! Riffi läpäisty." : "Virheetön! Kaikki pallukat vihreinä – riffi läpäisty." } }), this.enterFreeTry("success")) : (this.set({ feedback: { tone: "info", text: "Soitit riffin loppuun! Kokeile vielä ilman virheitä. Voit kuunnella ja kokeilla säveliä vapaasti – niitä ei arvioida ennen kuin valitset Yritä uudelleen." + (this.practice.memoryActive ? " Muistivihjeet ovat käytössä: aiemmin heti oikein soitetut sävelet näkyvät seuraavassa yrityksessä." : "") } }), this.enterFreeTry("retry"));
  }
  showLevelComplete() {
    this.micOpen && this.audio.pauseAnalysis();
    const l = this.store.level(this.state.input);
    this.set({
      phase: "level-complete",
      level: l,
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
   * - success / retry: pelkkä kuuntelu, vaihe ja pallukat eivät muutu.
   */
  listen() {
    if (this.state.modelPlaying) {
      this.stopListening();
      return;
    }
    const l = this.state.phase;
    if (l === "success" || l === "retry") {
      this.playModel(!1);
      return;
    }
    ["ready", "listening", "output-settling"].includes(l) && (l !== "ready" && this.replays++, this.playModel(!0));
  }
  /** Pysäytä kuuntelu: malli katkeaa, eteneminen säilyy; vuoro jatkuu suojavaiheen kautta. */
  stopListening() {
    if (!this.state.modelPlaying) return;
    const l = ++this.op;
    this.audio.stopModel(), this.set({ modelPlaying: !1, playing: null }), this.state.phase === "model-playing" ? this.afterModel(l) : vc.includes(this.state.phase) && this.enterFreeTry(this.state.phase);
  }
  /** Aloita uusi yritys samalla riffillä ilman mallia. Kesken jäänyt yritys ei ole epäonnistunut kokonaisyritys. */
  restart() {
    const l = this.state.phase;
    if (l === "retry") {
      this.beginRound(this.state.riff, "listen");
      return;
    }
    ["ready", "listening", "output-settling", "model-playing"].includes(l) && (this.state.modelPlaying && this.stopListening(), this.startAttempt(), this.set({ feedback: { tone: "info", text: "Uusi yritys: aloita riffi alusta." } }), this.micOpen && this.audio.resumeAnalysis(), this.startListening());
  }
  /**
   * Yritä uudelleen (keltaisten jälkeen): uusi arvioitava yritys ensimmäisestä sävelestä. Värit ja
   * eteneminen nollataan, muistivihjeet säilyvät. Malli ei soi itsestään; sitä voi kuunnella milloin vain.
   */
  retry() {
    this.state.phase === "retry" && this.beginRound(this.state.riff, "listen");
  }
  /** Soita uudelleen (virheettömän jälkeen): sama riffi uutena yrityksenä. Läpäisy säilyy. */
  playAgain() {
    this.state.phase === "success" && !this.state.tutorial && this.beginRound(this.state.riff, "listen");
  }
  toggleHint() {
    const l = !this.state.hint;
    l && this.checker?.useHint(), this.set({ hint: l });
  }
  /** Seuraava riffi; kotitreenin kolmannen jälkeen onnittelunäkymä. */
  next() {
    this.state.phase === "success" && this.beginRound();
  }
  /** Onnittelunäkymästä: seuraava taso. Ei koskaan automaattisesti. */
  continueLevel() {
    if (this.state.phase !== "level-complete") return;
    const l = this.state.level.number + 1;
    qe.some((o) => o.number === l) && (this.store.startLevel(this.state.input, l), this.beginRound());
  }
  /** Onnittelunäkymästä: sama taso alusta (tai annettu taso, esim. viimeisen jälkeen taso 1). */
  repeatLevel(l = this.state.level.number) {
    this.state.phase === "level-complete" && (this.store.startLevel(this.state.input, l), this.beginRound());
  }
  /** Tauko: soitto pysähtyy ja mikrofoni vapautetaan. Jatko vaatii painalluksen. */
  pause(l) {
    mo.includes(this.state.phase) && (this.pausedFrom = this.state.phase, ++this.op, this.cancelTimers(), this.calibration = null, this.audio.stopModel(), this.closeMic(), this.set({ phase: "paused", pausedReason: l, playing: null, modelPlaying: !1, heard: null, calibrating: !1 }));
  }
  resume() {
    if (this.state.phase !== "paused") return;
    const l = this.pausedFrom ?? "listening";
    if (this.pausedFrom = null, this.set({ pausedReason: null }), l === "level-complete") {
      this.set({ phase: l });
      return;
    }
    const o = this.state.feedback, c = () => {
      l === "mic-check" ? this.enterMicCheck() : l === "tools" ? this.enterTools(this.state.tool) : vc.includes(l) ? (this.set({ feedback: o }), this.enterFreeTry(l)) : this.startListening();
    };
    this.state.input === "mic" ? this.openMicThen(c) : c();
  }
  micLost() {
    const l = this.state.phase;
    this.closeMic(), this.calibration = null, mo.includes(l) && (this.pausedFrom = l, ++this.op, this.cancelTimers(), this.audio.stopModel(), this.set({ phase: "paused", pausedReason: "mic-lost", playing: null, modelPlaying: !1, heard: null, micInfo: null, calibrating: !1 }));
  }
  /** Lopeta: kaikki pysähtyy, aloitusnäkymä. Edistyminen on jo tallennettu. */
  stop() {
    ++this.op, this.cancelTimers(), this.calibration = null, this.audio.stopModel(), this.closeMic(), this.practice = null, this.pausedFrom = null, this.afterCheck = null, this.set({
      phase: "idle",
      playing: null,
      modelPlaying: !1,
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
const Fh = 4e3, gc = 12, Ih = 1500;
function Oh(u, l) {
  const o = u.left + u.stickyLeft, c = u.right;
  let f = 0;
  if (l.left < o ? f = l.left - o - gc : l.right > c && (f = l.right - c + gc), f === 0) return null;
  const h = Math.max(0, Math.min(u.maxScroll, u.scrollLeft + f));
  return Math.abs(h - u.scrollLeft) < 1 ? null : h;
}
function Dh(u, l) {
  return l.right <= u.left + u.stickyLeft || l.left >= u.right;
}
function Bh(u, l, o, { stickySelector: c, enabled: f = !0, playback: h } = {}) {
  const w = je.useRef(0), x = je.useRef(!1), E = je.useRef(""), _ = je.useRef(0), j = je.useRef(h);
  je.useEffect(() => {
    const T = u.current;
    if (!T || !f) return;
    const L = () => {
      w.current = Date.now() + Fh;
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
    h === void 0 && E.current === "" && o !== "" && Date.now() - _.current > Ih && !x.current && (w.current = 0), E.current !== "" && o === "" && (_.current = Date.now()), E.current = o;
    const T = u.current;
    if (!T || !f || !o || x.current || Date.now() < w.current) return;
    const L = T.querySelector(l);
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
  }, [u, l, o, c, f, h]);
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
function Kh({ min: u, max: l }) {
  return /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
    /* @__PURE__ */ p.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: l - u + 1 }, (o, c) => {
      const f = u + c;
      return /* @__PURE__ */ p.jsxs("th", { scope: "col", className: f === 0 ? "open-fret" : "", children: [
        f,
        f > 0 && f % 12 === 0 ? /* @__PURE__ */ p.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : $h.has(f) ? /* @__PURE__ */ p.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, f);
    })
  ] }) });
}
function Qh({ area: u, marks: l = [], mutedStrings: o = [], disabled: c = !1, onAnswer: f, caption: h = "Otelauta", follow: w = "hints", playback: x }) {
  const E = { "--cols": u.max - u.min + 1 }, { strings: _, min: j, max: T } = u, [L, V] = je.useState({ string: Math.min(..._), fret: j }), O = je.useRef(null), P = new Map(l.map((Q) => [ni(Q), Q])), D = l.map((Q) => `${ni(Q)}${Q.kind}`).join(",");
  je.useEffect(() => {
    if (w !== "hints") return;
    const Q = O.current, H = Q?.querySelector(".target, .anchor");
    Q && H && (Q.scrollLeft += H.getBoundingClientRect().left - Q.getBoundingClientRect().left - Q.clientWidth / 2 + H.clientWidth / 2);
  }, [D, w]), je.useEffect(() => {
    w === "playing" && O.current && (O.current.scrollLeft = 0);
  }, [w, j, T]);
  const Z = l.find((Q) => Q.kind === "playing");
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
      /* @__PURE__ */ p.jsx("tbody", { children: jc.OPEN_PITCHES.map((Q, H) => /* @__PURE__ */ p.jsxs("tr", { className: _.includes(H) ? "" : "unused", style: Hh(H), children: [
        /* @__PURE__ */ p.jsxs("th", { scope: "row", "aria-label": `${H + 1}. kieli: ${yo[H]}${o.includes(H) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ p.jsx(Uh, { string: H }),
          o.includes(H) && /* @__PURE__ */ p.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        qd([H], j, T).map((re) => {
          const he = P.get(ni(re)), Me = `${yo[H]}-kieli, ${Qd(re.fret)}`;
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
const yr = (u, l = 1) => u.toFixed(l).replace(".", ","), mr = (u) => {
  const l = Math.round(kl(u));
  return `${l < 0 ? "−" : ""}${Math.abs(l)} dB`;
}, Lc = (u) => (u > 0 ? "+" : u < 0 ? "−" : "±") + yr(Math.abs(u), 0);
function gl({ s: u, game: l }) {
  const o = u.devices.some((c) => c.id === u.device);
  return /* @__PURE__ */ p.jsxs("div", { className: "riff-device", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: "riff-device", children: "Äänitulo" }),
    /* @__PURE__ */ p.jsxs("select", { id: "riff-device", value: o || !u.device ? u.device : "", onChange: (c) => l.setDevice(c.target.value), children: [
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
}, kc = {
  silent: "Ei ääntä kynnyksen yläpuolella.",
  unclear: "Ei selkeää säveltä.",
  "out-of-range": "Taajuus alueen ulkopuolella.",
  "off-pitch": "Liian epävireinen.",
  "waiting-new-pluck": "Sama sävel soi yhä: odotetaan uutta näppäystä tai lyhyttä vaimennusta.",
  harmonic: "Edellisen sävelen ylä-ääni tai oktaavi: ei uusi näppäily ilman uutta aluketta.",
  "too-quiet-for-change": "Eri sävel, mutta liian hiljainen (myötäresonanssi?): ei uusi näppäily ilman aluketta.",
  stabilizing: "Sävel vakautuu."
}, wc = { quiet: "hiljaisuuden jälkeen", onset: "uusi aluke", "pitch-change": "sävelen vaihto" }, qh = { game: "riffiyritykseen", "mic-check": "mikrofonitestiin", "not-routed": "ei välitetty (ei vastausvuoroa)" };
function xc({ s: u, compact: l = !1 }) {
  const o = u.diag;
  if (!o) return /* @__PURE__ */ p.jsx("p", { className: "riff-help", "data-testid": "diag", children: "Odotetaan mikrofonin ensimmäisiä analyysitietoja…" });
  const c = o.frame, f = o.pluck, h = c.rms >= o.minRms, w = Math.max(0, Math.min(100, (kl(c.rms) + 60) / 60 * 100)), x = Math.max(0, Math.min(100, (kl(o.minRms) + 60) / 60 * 100)), E = (_, j, T, L) => /* @__PURE__ */ p.jsxs("li", { className: _ ? "ok" : "no", "data-testid": `diag-${L}`, children: [
    /* @__PURE__ */ p.jsxs("strong", { children: [
      /* @__PURE__ */ p.jsx("span", { "aria-hidden": "true", children: _ ? "●" : "○" }),
      " ",
      j
    ] }),
    /* @__PURE__ */ p.jsx("span", { children: T })
  ] });
  return /* @__PURE__ */ p.jsxs("div", { className: `riff-diag${l ? " compact" : ""}`, "data-testid": "diag", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "riff-meter", role: "meter", "aria-label": "Äänitaso", "aria-valuemin": -60, "aria-valuemax": 0, "aria-valuenow": Math.round(kl(c.rms)), children: [
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
        c.cents !== void 0 ? `${Lc(c.cents)} snt` : "",
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
        ] }) : f.reason ? kc[f.reason] : "–",
        "stable"
      ),
      E(f.armed, "4. Uusi näppäily", /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        f.armed ? `Valmis hyväksymään (${wc[f.armedBy]}).` : f.reason ? kc[f.reason] : "Odotetaan uutta näppäystä.",
        f.last && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          " Viimeisin: ",
          /* @__PURE__ */ p.jsx("strong", { children: Ye(f.last.midi) }),
          " (",
          wc[f.last.armedBy],
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
    !l && /* @__PURE__ */ p.jsxs("p", { className: "riff-help", children: [
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
function Xh({ s: u, game: l }) {
  const o = u.tuner, c = o?.cents ?? 0, f = o && ["flat", "in-tune", "sharp"].includes(o.status), h = 50 + Math.max(-50, Math.min(50, c));
  return /* @__PURE__ */ p.jsxs("div", { className: "riff-tuner", "data-testid": "tuner", children: [
    /* @__PURE__ */ p.jsxs("fieldset", { className: "riff-strings", children: [
      /* @__PURE__ */ p.jsx("legend", { children: "Kieli" }),
      /* @__PURE__ */ p.jsx("button", { type: "button", "aria-pressed": u.tunerTarget === null, onClick: () => l.setTunerTarget(null), children: "Auto" }),
      Sl.map((w) => /* @__PURE__ */ p.jsxs("button", { type: "button", "aria-pressed": u.tunerTarget === w.midi, onClick: () => l.setTunerTarget(w.midi), children: [
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
      /* @__PURE__ */ p.jsx("p", { className: "value", "data-testid": "tuner-cents", children: f ? `${Lc(c)} senttiä` : "–" }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-tuner-scale", "aria-hidden": "true", children: [
        /* @__PURE__ */ p.jsx("span", { className: "zone", style: { left: `${50 - wl}%`, width: `${wl * 2}%` } }),
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
      wl,
      " senttiä. Viritin käyttää samaa sävelentunnistusta kuin peli, mutta sen lukemat eivät koskaan mene peliin."
    ] })
  ] });
}
const Jh = { strings: go, min: wh, max: xh, fixed: "" }, Zh = (u) => u.level.strings, bh = {
  manual: "Peli on tauolla.",
  background: "Peli pysähtyi, koska välilehti siirtyi taustalle. Mikrofoni ja äänet on suljettu.",
  "mic-lost": "Yhteys mikrofoniin katkesi (laite irrotettiin tai selain pysäytti äänen). Tarkista laite ja jatka."
}, ep = { pending: "harmaa, ei vielä ratkaistu", red: "punainen, väärä sävel – yritä tätä kohtaa uudelleen", green: "vihreä, oikein heti", yellow: "keltainen, löytyi virheen jälkeen" }, Sc = { pending: "", red: "✗", green: "✓", yellow: "↻" };
function Ec(u) {
  const l = u.heard;
  return l ? l.status === "silent" ? "alle äänikynnyksen" : l.status === "pitch" && l.midi !== void 0 ? Ye(l.midi) : l.status === "off-pitch" && l.midi !== void 0 ? `${Ye(l.midi)}, epävireinen` : "ääntä, ei selvää säveltä" : "ei vielä analyysia";
}
function tp(u) {
  const l = /* @__PURE__ */ new Map();
  return u.riff.spots.forEach((o, c) => {
    const f = { ...o, midi: u.riff.midi[c] }, h = ni(f), w = l.get(h);
    l.set(h, { ...f, kind: u.playing === c ? "playing" : w?.kind ?? "answer", label: w ? `${w.label}·${c + 1}` : String(c + 1) });
  }), [...l.values()];
}
const vo = (u) => `${qe[u - 1]?.name ?? `Kotitreeni ${u}`} – ${qe[u - 1]?.title ?? ""}`;
function np({ s: u }) {
  const l = u.riff.midi.length;
  return /* @__PURE__ */ p.jsx("ol", { className: "riff-slots", "aria-label": `Ratkaistu ${u.index} / ${l} säveltä`, "data-testid": "slots", children: u.riff.midi.map((o, c) => {
    const f = u.marks[c] ?? "pending", h = u.modelPlaying && u.playing === c, w = (f === "pending" || f === "red") && c === u.index && u.phase === "listening", x = f === "pending" && u.memory[c] != null, E = f === "green" || f === "yellow" ? Ye(o) : h ? "♪" : x ? Ye(u.memory[c]) : Sc[f] || (w ? "?" : "");
    return /* @__PURE__ */ p.jsxs(
      "li",
      {
        className: `${f}${w ? " current" : ""}${h ? " model" : ""}${x ? " memory" : ""}`,
        "data-mark": f,
        "aria-label": `${c + 1}. sävel: ${ep[f]}${x ? `, muistivihje ${Ye(u.memory[c])}` : ""}${w ? ", vuorossa" : ""}`,
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "slot-note", "aria-hidden": "true", children: E }),
          (f === "green" || f === "yellow") && /* @__PURE__ */ p.jsx("span", { className: "slot-symbol", "aria-hidden": "true", children: Sc[f] })
        ]
      },
      c
    );
  }) });
}
function rp({ items: u }) {
  const [l, o] = je.useState(!1), c = je.useRef(null), f = je.useRef(null), h = je.useRef(null);
  je.useEffect(() => {
    if (!l) return;
    f.current?.querySelector("button")?.focus();
    const E = (_) => {
      h.current?.contains(_.target) || o(!1);
    };
    return document.addEventListener("pointerdown", E), () => document.removeEventListener("pointerdown", E);
  }, [l]);
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
        "aria-expanded": l,
        "aria-controls": "riff-menu-list",
        onClick: () => o((E) => !E),
        children: [
          /* @__PURE__ */ p.jsx("span", { "aria-hidden": "true", children: "⋯" }),
          " Lisää"
        ]
      }
    ),
    l && /* @__PURE__ */ p.jsx("ul", { id: "riff-menu-list", ref: f, className: "riff-menu-list", "aria-label": "Lisää toimintoja", onKeyDown: x, children: u.map((E) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => {
      o(!1), E.run();
    }, children: E.label }) }, E.label)) })
  ] });
}
function ip({ game: u }) {
  const l = je.useSyncExternalStore(u.subscribe, u.getState), [o, c] = je.useState(null), [f, h] = je.useState(!1), w = je.useRef(), x = je.useRef(null);
  je.useEffect(() => {
    l.phase === "level-complete" && x.current?.focus();
  }, [l.phase]), je.useEffect(() => {
    const A = () => {
      document.visibilityState === "hidden" && u.pause("background");
    }, K = () => u.stop(), b = () => {
      u.refreshDevices();
    };
    return document.addEventListener("visibilitychange", A), window.addEventListener("pagehide", K), navigator.mediaDevices?.addEventListener?.("devicechange", b), () => {
      document.removeEventListener("visibilitychange", A), window.removeEventListener("pagehide", K), navigator.mediaDevices?.removeEventListener?.("devicechange", b), clearTimeout(w.current);
    };
  }, [u]), je.useEffect(() => {
    u.setDiagnosticsOpen(f && l.input === "mic");
  }, [u, f, l.input]);
  const E = l.riff.midi.length, _ = ["ready", "model-playing", "output-settling", "listening", "success", "retry", "paused"].includes(l.phase), j = l.input === "board", T = j && ["ready", "listening", "success", "retry"].includes(l.phase), L = Zh(l);
  function V(A) {
    u.tap(A.midi) && (clearTimeout(w.current), c((K) => ({ p: A, n: (K?.n ?? 0) + 1 })), w.current = setTimeout(() => c(null), 450));
  }
  const O = [
    ...l.hint ? tp(l) : [],
    ...o && j ? [{ ...o.p, kind: "playing", label: Ye(o.p.midi) }] : []
  ];
  if (l.phase === "idle") {
    const A = (Q) => u.progress(Q), K = A(l.input).level, b = (Q) => `${qe[A(Q).level - 1].name}, suoritettu ${A(Q).completed.length}/${qe.length}`;
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
  _ && (["listening", "output-settling", "model-playing"].includes(l.phase) && (l.index > 0 || l.marks.includes("red")) && P.push({ label: "Aloita uusi yritys", run: () => u.restart() }), l.phase === "paused" ? P.push({ label: "Jatka", run: () => u.resume() }) : ["success", "retry"].includes(l.phase) || P.push({ label: "Tauko", run: () => u.pause("manual") }), l.tutorial || P.push({ label: "Kotitreenit", run: () => u.openLevels() }), l.input === "mic" && P.push({ label: f ? "Piilota mikrofonin tiedot" : "Mikrofonin tiedot", run: () => h((A) => !A) }), P.push({ label: j ? "Vaihda oikeaan kitaraan" : "Vaihda virtuaalikitaraan", run: () => u.switchInput(j ? "mic" : "board") }), P.push({ label: "Lopeta harjoitus", run: () => u.stop() }));
  const D = l.phase === "ready" ? "Kuuntele riffi aloittaaksesi." : l.phase === "model-playing" ? "Kuuntele riffi…" : l.phase === "output-settling" ? "Valmistaudu…" : l.phase === "listening" ? l.modelPlaying ? "Kuuntele riffi…" : "Sinun vuorosi!" : l.phase === "success" ? "Riffi läpäisty!" : l.phase === "retry" ? "Riffi soitettu loppuun" : l.phase === "paused" ? bh[l.pausedReason ?? "manual"] : "", Z = { "--focus-rows": L.length };
  return /* @__PURE__ */ p.jsxs("section", { className: "riff-game", "data-phase": l.phase, "data-input": l.input, "aria-labelledby": "riff-title", children: [
    !_ && /* @__PURE__ */ p.jsxs("div", { className: "riff-top", children: [
      /* @__PURE__ */ p.jsx("h1", { id: "riff-title", children: "Riffikaiku" }),
      /* @__PURE__ */ p.jsxs("span", { children: [
        l.input === "mic" ? "Oikea kitara" : "Virtuaalikitara",
        l.micInfo && l.input === "mic" ? ` · ${l.micInfo.label}` : ""
      ] })
    ] }),
    l.phase === "permission" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", children: [
      /* @__PURE__ */ p.jsx("p", { className: "riff-status", role: "status", children: "Pyydetään mikrofonilupaa…" }),
      /* @__PURE__ */ p.jsx("p", { className: "riff-help", children: "Salli mikrofoni selaimen kysymyksestä. Voit myös pelata virtuaalikitaralla." }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.startBoard(), children: "Pelaa virtuaalikitaralla" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.stop(), children: "Takaisin" })
      ] })
    ] }),
    l.phase === "error" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", children: [
      /* @__PURE__ */ p.jsx("p", { className: "riff-status bad", role: "alert", "data-testid": "riff-error", children: l.error }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.startBoard(), children: "Pelaa virtuaalikitaralla" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.startMic(), children: "Yritä mikrofonia uudelleen" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.stop(), children: "Takaisin" })
      ] }),
      l.devices.length > 0 && /* @__PURE__ */ p.jsx(gl, { s: l, game: u })
    ] }),
    l.phase === "mic-check" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", "data-testid": "mic-setup", children: [
      /* @__PURE__ */ p.jsx("h2", { children: "Oikea kitara: valmistelu" }),
      /* @__PURE__ */ p.jsx(gl, { s: l, game: u }),
      /* @__PURE__ */ p.jsx("h3", { children: "Mikrofonin testi" }),
      l.calibrating ? /* @__PURE__ */ p.jsx("p", { className: "riff-status", role: "status", "data-testid": "calibrating", children: "Pidä kielet hiljaa hetki: mitataan taustakohinaa…" }) : /* @__PURE__ */ p.jsxs("p", { children: [
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
        /* @__PURE__ */ p.jsx("strong", { "data-testid": "heard", children: Ec(l) })
      ] }),
      l.feedback && /* @__PURE__ */ p.jsx("p", { className: `riff-feedback ${l.feedback.tone}`, role: "status", "data-testid": "feedback", children: l.feedback.text }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", disabled: l.check === "waiting", onClick: () => u.continueAfterCheck(), children: l.check === "other" ? "Aloita silti harjoitus" : "Aloita harjoitus" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.openTools("tuner"), children: "Viritä kitara (valinnainen)" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.openTools("diagnostics"), children: "Mikrofonin diagnostiikka" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.switchInput("board"), children: "Pelaa virtuaalikitaralla" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.stop(), children: "Lopeta" })
      ] }),
      /* @__PURE__ */ p.jsx("p", { className: "riff-help", children: "Jos sävel ei tunnistu, avaa diagnostiikka: se näyttää, tuleeko ääntä, tunnistuuko sävelkorkeus ja hyväksytäänkö näppäily." })
    ] }),
    l.phase === "tools" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", "data-testid": "tools", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "riff-tabs", role: "tablist", "aria-label": "Mikrofonin työkalut", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", role: "tab", "aria-selected": l.tool === "tuner", onClick: () => u.setTool("tuner"), children: "Viritin" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", role: "tab", "aria-selected": l.tool === "diagnostics", onClick: () => u.setTool("diagnostics"), children: "Diagnostiikka" })
      ] }),
      /* @__PURE__ */ p.jsx(gl, { s: l, game: u }),
      l.calibrating && /* @__PURE__ */ p.jsx("p", { className: "riff-status", role: "status", "data-testid": "calibrating", children: "Pidä kielet hiljaa hetki: mitataan taustakohinaa…" }),
      l.feedback && !l.calibrating && /* @__PURE__ */ p.jsx("p", { className: `riff-feedback ${l.feedback.tone}`, role: "status", children: l.feedback.text }),
      l.tool === "tuner" ? /* @__PURE__ */ p.jsx(Xh, { s: l, game: u }) : /* @__PURE__ */ p.jsx(xc, { s: l }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.startFromTools(), children: "Aloita harjoitus" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.closeTools(), children: "Takaisin" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.calibrate(), disabled: l.calibrating, children: "Mittaa taustakohina uudelleen" })
      ] })
    ] }),
    l.phase === "levels" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", "data-testid": "levels", children: [
      /* @__PURE__ */ p.jsx("h2", { children: "Kotitreenit" }),
      /* @__PURE__ */ p.jsx("p", { className: "riff-help", children: "Jokainen kotitreeni harjoittaa yhtä kieltä kolmella riffillä. Seuraava avautuu edellisen suorittamisesta." }),
      /* @__PURE__ */ p.jsx("ol", { className: "riff-levels", children: qe.map((A) => {
        const K = l.completedLevels.includes(A.number), b = l.unlockedLevels.includes(A.number), Q = u.progress(l.input).level === A.number;
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
    l.phase === "level-complete" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel riff-cleared", "data-testid": "level-complete", children: [
      /* @__PURE__ */ p.jsx("h2", { tabIndex: -1, ref: x, children: "Onneksi olkoon!" }),
      /* @__PURE__ */ p.jsxs("p", { className: "riff-cleared-big", children: [
        vo(l.level.number),
        " suoritettu!"
      ] }),
      l.level.number < qe.length ? /* @__PURE__ */ p.jsxs("p", { children: [
        "Soitit kaikki kolme riffiä oikein. Olet valmis seuraavaan kotitreeniin: ",
        vo(l.level.number + 1),
        "."
      ] }) : /* @__PURE__ */ p.jsx("p", { children: "Olet suorittanut kaikki nykyiset kotitreenit. Muiden kielten kotitreenit ovat tulossa." }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        l.level.number < qe.length && /* @__PURE__ */ p.jsxs("button", { type: "button", className: "primary", onClick: () => u.continueLevel(), children: [
          "Jatka: ",
          qe[l.level.number].name
        ] }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.repeatLevel(), children: "Harjoittele uudelleen" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.openLevels(), children: "Kotitreenit" })
      ] })
    ] }),
    _ && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel riff-play", children: [
      /* @__PURE__ */ p.jsxs("header", { className: "riff-play-head", children: [
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("p", { className: "riff-brand", id: "riff-title", children: "Riffikaiku" }),
          /* @__PURE__ */ p.jsx("h1", { "data-testid": "level-heading", children: l.tutorial ? `${qe[0].name} · Opastus` : `${l.level.name} · Riffi ${l.riffNumber}/${l.level.riffs.length}` }),
          /* @__PURE__ */ p.jsx("p", { className: "riff-name", children: l.tutorial ? "Kaksi säveltä" : l.riff.title })
        ] }),
        /* @__PURE__ */ p.jsx(rp, { items: P })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-turn", children: [
        /* @__PURE__ */ p.jsx("p", { className: `riff-status ${l.phase === "listening" && !l.modelPlaying ? "turn" : l.phase === "success" ? "good" : ""}`, role: "status", "data-testid": "riff-status", children: D }),
        /* @__PURE__ */ p.jsx("p", { className: "riff-instruction", "data-testid": "instruction", children: l.level.instruction })
      ] }),
      /* @__PURE__ */ p.jsx(np, { s: l }),
      /* @__PURE__ */ p.jsxs("p", { className: "riff-count", "data-testid": "count", children: [
        "Ratkaistu ",
        l.index,
        "/",
        E,
        l.memory.some((A) => A !== null) ? " · muistivihjeet käytössä" : ""
      ] }),
      l.feedback && /* @__PURE__ */ p.jsx("p", { className: `riff-feedback ${l.feedback.tone}`, role: "status", "data-testid": "feedback", children: l.feedback.text }),
      l.input === "mic" && l.phase !== "paused" && /* @__PURE__ */ p.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee",
        ["ready", "success", "retry"].includes(l.phase) && !l.modelPlaying ? " (vapaa kokeilu, ei arvioida)" : "",
        ": ",
        /* @__PURE__ */ p.jsx("strong", { "data-testid": "heard", children: l.modelPlaying ? "tauolla mallin ajan" : Ec(l) })
      ] }),
      l.hint && /* @__PURE__ */ p.jsxs("div", { className: "riff-hint", "data-testid": "hint", children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("strong", { children: "Sävelet:" }),
          " ",
          l.riff.midi.map(Ye).join(" – ")
        ] }),
        /* @__PURE__ */ p.jsx("p", { children: l.riff.tip })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: `riff-board ${L.length < go.length ? "has-focus" : ""} ${L.map((A) => `focus-s${A}`).join(" ")}`, style: Z, "data-testid": "board", children: [
        L.length < go.length && /* @__PURE__ */ p.jsxs("p", { className: "riff-focus-legend", "data-testid": "focus-legend", children: [
          /* @__PURE__ */ p.jsx("span", { className: "swatch", "aria-hidden": "true" }),
          " Harjoituskieli: ",
          L.map((A) => `${yo[A]}-kieli`).join(" ja "),
          L.length === 1 ? ` (${lp(L[0])})` : ""
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
        l.phase === "paused" && /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.resume(), children: "Jatka" }),
        l.phase === "success" && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.next(), children: l.tutorial ? `Aloita ${qe[0].name}` : "Seuraava riffi" }),
          !l.tutorial && /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.playAgain(), children: "Soita uudelleen" })
        ] }),
        l.phase === "retry" && /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.retry(), children: "Yritä uudelleen" }),
        l.phase !== "paused" && /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "button",
            className: ["ready", "listening", "output-settling", "model-playing"].includes(l.phase) ? "primary" : "",
            onClick: () => u.listen(),
            "aria-pressed": l.modelPlaying,
            "data-testid": "listen",
            children: l.modelPlaying ? "Pysäytä kuuntelu" : "Kuuntele riffi"
          }
        ),
        l.phase !== "paused" && /* @__PURE__ */ p.jsx("button", { type: "button", "aria-pressed": l.hint, onClick: () => u.toggleHint(), children: l.hint ? "Piilota vihje" : "Vihje" })
      ] }),
      l.input === "mic" && f && /* @__PURE__ */ p.jsxs("div", { className: "riff-details", "data-testid": "mic-details", children: [
        /* @__PURE__ */ p.jsx(gl, { s: l, game: u }),
        /* @__PURE__ */ p.jsx(xc, { s: l, compact: !0 })
      ] })
    ] })
  ] });
}
function lp(u) {
  return ["ohuin kieli", "toiseksi ohuin", "kolmanneksi ohuin", "kolmanneksi paksuin", "toiseksi paksuin", "paksuin kieli"][u];
}
const _c = "musiikin-kartta:riffikaiku:v1", sp = ["mic", "board"], Pc = "kotitreenit", op = () => ({
  version: 1,
  structure: Pc,
  tutorialDone: !1,
  input: "mic",
  fullBoard: !1,
  device: "",
  stats: { mic: {}, board: {} },
  results: [],
  run: { mic: { level: 1, passed: [] }, board: { level: 1, passed: [] } },
  levels: { mic: [], board: [] }
}), si = (u) => typeof u == "number" && Number.isFinite(u) && u >= 0, Ac = (u) => u === "mic" || u === "board", wo = (u) => Number.isInteger(u) && qe.some((l) => l.number === u), ap = (u) => {
  const l = u;
  return !!l && typeof l == "object" && si(l.done) && si(l.solo) && si(l.lastAt) && l.solo <= l.done && (l.passed === void 0 || si(l.passed) && l.passed <= l.done && l.solo <= l.passed);
}, up = (u) => {
  const l = u;
  return !!l && typeof l == "object" && typeof l.riff == "string" && Ac(l.input) && typeof l.hint == "boolean" && ["wrong", "octave", "replays", "ms", "at"].every((o) => si(l[o])) && (l.passed === void 0 || typeof l.passed == "boolean") && (l.level === void 0 || Number.isInteger(l.level) && l.level > 0);
};
function cp(u) {
  const l = op();
  if (!u) return l;
  let o;
  try {
    o = JSON.parse(u);
  } catch {
    return l;
  }
  const c = o;
  if (!c || c.version !== 1) return l;
  l.tutorialDone = c.tutorialDone === !0, l.fullBoard = c.fullBoard === !0, typeof c.device == "string" && (l.device = c.device.slice(0, 256)), Ac(c.input) && (l.input = c.input);
  const f = c.structure !== Pc;
  for (const h of sp) {
    const w = c.stats?.[h];
    if (w && typeof w == "object")
      for (const [_, j] of Object.entries(w)) ap(j) && (l.stats[h][_] = { ...j });
    const x = c.run?.[h];
    if (f) {
      x && x.level === 1 && Array.isArray(x.passed) && (l.run[h] = { level: 1, passed: qe[0].riffs.map((_) => _.id).filter((_) => x.passed.includes(_)) });
      continue;
    }
    if (x && wo(x.level) && Array.isArray(x.passed)) {
      const _ = qe.find((j) => j.number === x.level).riffs.map((j) => j.id);
      l.run[h] = { level: x.level, passed: _.filter((j) => x.passed.includes(j)) };
    }
    const E = c.levels?.[h];
    Array.isArray(E) && (l.levels[h] = [...new Set(E.filter(wo))].sort((_, j) => _ - j));
  }
  return Array.isArray(c.results) && (l.results = c.results.filter(up).slice(-300).map((h) => f && !h.legacy ? { ...h, legacy: !0 } : h)), l;
}
class fp {
  /** storage puuttuu tai heittää (yksityinen ikkuna, estetty tallennus): peli toimii ilman tallennusta. */
  constructor(l) {
    this.storage = l;
    let o = null;
    try {
      o = l?.getItem(_c) ?? null;
    } catch {
      o = null;
    }
    this.data = cp(o);
  }
  storage;
  data;
  save() {
    try {
      this.storage?.setItem(_c, JSON.stringify(this.data));
    } catch {
    }
  }
  setInput(l) {
    this.data.input !== l && (this.data.input = l, this.save());
  }
  setFullBoard(l) {
    this.data.fullBoard !== l && (this.data.fullBoard = l, this.save());
  }
  setDevice(l) {
    this.data.device !== l && (this.data.device = l, this.save());
  }
  /** Tasot, jotka voi valita tasovalikosta: läpäistyt, nykyinen ja seuraava läpäisemätön. */
  unlockedLevels(l) {
    const o = Math.max(this.data.run[l].level, ...this.data.levels[l].map((c) => c + 1));
    return qe.map((c) => c.number).filter((c) => c <= o);
  }
  finishTutorial() {
    this.data.tutorialDone || (this.data.tutorialDone = !0, this.save());
  }
  run(l) {
    return this.data.run[l];
  }
  completedLevels(l) {
    return this.data.levels[l];
  }
  level(l) {
    return qe.find((o) => o.number === this.data.run[l].level);
  }
  /** Tasokierroksen seuraava läpäisemätön riffi, tai null kun kaikki kolme on läpäisty. */
  currentRiff(l) {
    const o = this.data.run[l];
    return this.level(l).riffs.find((c) => !o.passed.includes(c.id)) ?? null;
  }
  /** Aloittaa tason alusta (uusi kierros). Läpäistyt tasot säilyvät. */
  startLevel(l, o) {
    wo(o) && (this.data.run[l] = { level: o, passed: [] }, this.save());
  }
  /**
   * Kirjaa yhden loppuun soitetun riffiyrityksen kerran. Opastus merkitään tehdyksi, mutta se ei ole
   * tasotulos. Palauttaa levelComplete = true sillä kirjauksella, jolla tason kolmas riffi läpäistiin.
   */
  record(l) {
    if (l.riff === li.id)
      return this.finishTutorial(), { levelComplete: !1 };
    const { input: o } = l, c = l.passed === !0, f = this.data.stats[o], h = f[l.riff] ?? { done: 0, solo: 0, passed: 0 };
    f[l.riff] = {
      done: h.done + 1,
      passed: (h.passed ?? 0) + (c ? 1 : 0),
      solo: h.solo + (c && !l.hint ? 1 : 0),
      lastAt: l.at
    }, this.data.results = [...this.data.results, { ...l, level: l.level ?? Sh(l.riff)?.number }].slice(-300);
    let w = !1;
    const x = this.data.run[o], E = this.level(o);
    return c && E.riffs.some((_) => _.id === l.riff) && !x.passed.includes(l.riff) && (x.passed = E.riffs.map((_) => _.id).filter((_) => _ === l.riff || x.passed.includes(_)), x.passed.length === E.riffs.length && (w = !0, this.data.levels[o].includes(E.number) || (this.data.levels[o] = [...this.data.levels[o], E.number].sort((_, j) => _ - j)))), this.save(), { levelComplete: w };
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
  const [u] = je.useState(() => new zh(new gh(), new fp(dp())));
  return je.useEffect(() => () => {
    u.stop();
  }, [u]), /* @__PURE__ */ p.jsx(ip, { game: u });
}
window.addEventListener("pagehide", () => ch());
const Tc = document.getElementById("riffikaiku");
Tc && Dd.createRoot(Tc).render(/* @__PURE__ */ p.jsx(je.StrictMode, { children: /* @__PURE__ */ p.jsx(hp, {}) }));
//# sourceMappingURL=app.js.map
