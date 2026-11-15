function qd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var da = { exports: {} }, li = {}, ha = { exports: {} }, we = {};
var ac;
function Yd() {
  if (ac) return we;
  ac = 1;
  var o = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), v = /* @__PURE__ */ Symbol.for("react.context"), g = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), w = Symbol.iterator;
  function P(k) {
    return k === null || typeof k != "object" ? null : (k = w && k[w] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, I = {};
  function T(k, M, ue) {
    this.props = k, this.context = M, this.refs = I, this.updater = ue || z;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(k, M) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, M, "setState");
  }, T.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function W() {
  }
  W.prototype = T.prototype;
  function U(k, M, ue) {
    this.props = k, this.context = M, this.refs = I, this.updater = ue || z;
  }
  var J = U.prototype = new W();
  J.constructor = U, L(J, T.prototype), J.isPureReactComponent = !0;
  var oe = Array.isArray, b = Object.prototype.hasOwnProperty, H = { current: null }, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(k, M, ue) {
    var de, me = {}, ve = null, O = null;
    if (M != null) for (de in M.ref !== void 0 && (O = M.ref), M.key !== void 0 && (ve = "" + M.key), M) b.call(M, de) && !ne.hasOwnProperty(de) && (me[de] = M[de]);
    var B = arguments.length - 2;
    if (B === 1) me.children = ue;
    else if (1 < B) {
      for (var F = Array(B), Y = 0; Y < B; Y++) F[Y] = arguments[Y + 2];
      me.children = F;
    }
    if (k && k.defaultProps) for (de in B = k.defaultProps, B) me[de] === void 0 && (me[de] = B[de]);
    return { $$typeof: o, type: k, key: ve, ref: O, props: me, _owner: H.current };
  }
  function Pe(k, M) {
    return { $$typeof: o, type: k.type, key: M, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function je(k) {
    return typeof k == "object" && k !== null && k.$$typeof === o;
  }
  function Qe(k) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(ue) {
      return M[ue];
    });
  }
  var Be = /\/+/g;
  function Le(k, M) {
    return typeof k == "object" && k !== null && k.key != null ? Qe("" + k.key) : M.toString(36);
  }
  function Ve(k, M, ue, de, me) {
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
    if (O) return O = k, me = me(O), k = de === "" ? "." + Le(O, 0) : de, oe(me) ? (ue = "", k != null && (ue = k.replace(Be, "$&/") + "/"), Ve(me, M, ue, "", function(Y) {
      return Y;
    })) : me != null && (je(me) && (me = Pe(me, ue + (!me.key || O && O.key === me.key ? "" : ("" + me.key).replace(Be, "$&/") + "/") + k)), M.push(me)), 1;
    if (O = 0, de = de === "" ? "." : de + ":", oe(k)) for (var B = 0; B < k.length; B++) {
      ve = k[B];
      var F = de + Le(ve, B);
      O += Ve(ve, M, ue, F, me);
    }
    else if (F = P(k), typeof F == "function") for (k = F.call(k), B = 0; !(ve = k.next()).done; ) ve = ve.value, F = de + Le(ve, B++), O += Ve(ve, M, ue, F, me);
    else if (ve === "object") throw M = String(k), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    return O;
  }
  function Ge(k, M, ue) {
    if (k == null) return k;
    var de = [], me = 0;
    return Ve(k, de, "", "", function(ve) {
      return M.call(ue, ve, me++);
    }), de;
  }
  function Ae(k) {
    if (k._status === -1) {
      var M = k._result;
      M = M(), M.then(function(ue) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = ue);
      }, function(ue) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = ue);
      }), k._status === -1 && (k._status = 0, k._result = M);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var _e = { current: null }, $ = { transition: null }, Z = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: $, ReactCurrentOwner: H };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return we.Children = { map: Ge, forEach: function(k, M, ue) {
    Ge(k, function() {
      M.apply(this, arguments);
    }, ue);
  }, count: function(k) {
    var M = 0;
    return Ge(k, function() {
      M++;
    }), M;
  }, toArray: function(k) {
    return Ge(k, function(M) {
      return M;
    }) || [];
  }, only: function(k) {
    if (!je(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, we.Component = T, we.Fragment = l, we.Profiler = d, we.PureComponent = U, we.StrictMode = u, we.Suspense = E, we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, we.act = V, we.cloneElement = function(k, M, ue) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var de = L({}, k.props), me = k.key, ve = k.ref, O = k._owner;
    if (M != null) {
      if (M.ref !== void 0 && (ve = M.ref, O = H.current), M.key !== void 0 && (me = "" + M.key), k.type && k.type.defaultProps) var B = k.type.defaultProps;
      for (F in M) b.call(M, F) && !ne.hasOwnProperty(F) && (de[F] = M[F] === void 0 && B !== void 0 ? B[F] : M[F]);
    }
    var F = arguments.length - 2;
    if (F === 1) de.children = ue;
    else if (1 < F) {
      B = Array(F);
      for (var Y = 0; Y < F; Y++) B[Y] = arguments[Y + 2];
      de.children = B;
    }
    return { $$typeof: o, type: k.type, key: me, ref: ve, props: de, _owner: O };
  }, we.createContext = function(k) {
    return k = { $$typeof: v, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: h, _context: k }, k.Consumer = k;
  }, we.createElement = pe, we.createFactory = function(k) {
    var M = pe.bind(null, k);
    return M.type = k, M;
  }, we.createRef = function() {
    return { current: null };
  }, we.forwardRef = function(k) {
    return { $$typeof: g, render: k };
  }, we.isValidElement = je, we.lazy = function(k) {
    return { $$typeof: N, _payload: { _status: -1, _result: k }, _init: Ae };
  }, we.memo = function(k, M) {
    return { $$typeof: _, type: k, compare: M === void 0 ? null : M };
  }, we.startTransition = function(k) {
    var M = $.transition;
    $.transition = {};
    try {
      k();
    } finally {
      $.transition = M;
    }
  }, we.unstable_act = V, we.useCallback = function(k, M) {
    return _e.current.useCallback(k, M);
  }, we.useContext = function(k) {
    return _e.current.useContext(k);
  }, we.useDebugValue = function() {
  }, we.useDeferredValue = function(k) {
    return _e.current.useDeferredValue(k);
  }, we.useEffect = function(k, M) {
    return _e.current.useEffect(k, M);
  }, we.useId = function() {
    return _e.current.useId();
  }, we.useImperativeHandle = function(k, M, ue) {
    return _e.current.useImperativeHandle(k, M, ue);
  }, we.useInsertionEffect = function(k, M) {
    return _e.current.useInsertionEffect(k, M);
  }, we.useLayoutEffect = function(k, M) {
    return _e.current.useLayoutEffect(k, M);
  }, we.useMemo = function(k, M) {
    return _e.current.useMemo(k, M);
  }, we.useReducer = function(k, M, ue) {
    return _e.current.useReducer(k, M, ue);
  }, we.useRef = function(k) {
    return _e.current.useRef(k);
  }, we.useState = function(k) {
    return _e.current.useState(k);
  }, we.useSyncExternalStore = function(k, M, ue) {
    return _e.current.useSyncExternalStore(k, M, ue);
  }, we.useTransition = function() {
    return _e.current.useTransition();
  }, we.version = "18.3.1", we;
}
var oc;
function Ea() {
  return oc || (oc = 1, ha.exports = Yd()), ha.exports;
}
var uc;
function Xd() {
  if (uc) return li;
  uc = 1;
  var o = Ea(), i = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(g, E, _) {
    var N, w = {}, P = null, z = null;
    _ !== void 0 && (P = "" + _), E.key !== void 0 && (P = "" + E.key), E.ref !== void 0 && (z = E.ref);
    for (N in E) u.call(E, N) && !h.hasOwnProperty(N) && (w[N] = E[N]);
    if (g && g.defaultProps) for (N in E = g.defaultProps, E) w[N] === void 0 && (w[N] = E[N]);
    return { $$typeof: i, type: g, key: P, ref: z, props: w, _owner: d.current };
  }
  return li.Fragment = l, li.jsx = v, li.jsxs = v, li;
}
var cc;
function Jd() {
  return cc || (cc = 1, da.exports = Xd()), da.exports;
}
var c = Jd(), he = Ea(), ws = {}, pa = { exports: {} }, St = {}, ma = { exports: {} }, va = {};
var fc;
function bd() {
  return fc || (fc = 1, (function(o) {
    function i($, Z) {
      var V = $.length;
      $.push(Z);
      e: for (; 0 < V; ) {
        var k = V - 1 >>> 1, M = $[k];
        if (0 < d(M, Z)) $[k] = Z, $[V] = M, V = k;
        else break e;
      }
    }
    function l($) {
      return $.length === 0 ? null : $[0];
    }
    function u($) {
      if ($.length === 0) return null;
      var Z = $[0], V = $.pop();
      if (V !== Z) {
        $[0] = V;
        e: for (var k = 0, M = $.length, ue = M >>> 1; k < ue; ) {
          var de = 2 * (k + 1) - 1, me = $[de], ve = de + 1, O = $[ve];
          if (0 > d(me, V)) ve < M && 0 > d(O, me) ? ($[k] = O, $[ve] = V, k = ve) : ($[k] = me, $[de] = V, k = de);
          else if (ve < M && 0 > d(O, V)) $[k] = O, $[ve] = V, k = ve;
          else break e;
        }
      }
      return Z;
    }
    function d($, Z) {
      var V = $.sortIndex - Z.sortIndex;
      return V !== 0 ? V : $.id - Z.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      o.unstable_now = function() {
        return h.now();
      };
    } else {
      var v = Date, g = v.now();
      o.unstable_now = function() {
        return v.now() - g;
      };
    }
    var E = [], _ = [], N = 1, w = null, P = 3, z = !1, L = !1, I = !1, T = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function J($) {
      for (var Z = l(_); Z !== null; ) {
        if (Z.callback === null) u(_);
        else if (Z.startTime <= $) u(_), Z.sortIndex = Z.expirationTime, i(E, Z);
        else break;
        Z = l(_);
      }
    }
    function oe($) {
      if (I = !1, J($), !L) if (l(E) !== null) L = !0, Ae(b);
      else {
        var Z = l(_);
        Z !== null && _e(oe, Z.startTime - $);
      }
    }
    function b($, Z) {
      L = !1, I && (I = !1, W(pe), pe = -1), z = !0;
      var V = P;
      try {
        for (J(Z), w = l(E); w !== null && (!(w.expirationTime > Z) || $ && !Qe()); ) {
          var k = w.callback;
          if (typeof k == "function") {
            w.callback = null, P = w.priorityLevel;
            var M = k(w.expirationTime <= Z);
            Z = o.unstable_now(), typeof M == "function" ? w.callback = M : w === l(E) && u(E), J(Z);
          } else u(E);
          w = l(E);
        }
        if (w !== null) var ue = !0;
        else {
          var de = l(_);
          de !== null && _e(oe, de.startTime - Z), ue = !1;
        }
        return ue;
      } finally {
        w = null, P = V, z = !1;
      }
    }
    var H = !1, ne = null, pe = -1, Pe = 5, je = -1;
    function Qe() {
      return !(o.unstable_now() - je < Pe);
    }
    function Be() {
      if (ne !== null) {
        var $ = o.unstable_now();
        je = $;
        var Z = !0;
        try {
          Z = ne(!0, $);
        } finally {
          Z ? Le() : (H = !1, ne = null);
        }
      } else H = !1;
    }
    var Le;
    if (typeof U == "function") Le = function() {
      U(Be);
    };
    else if (typeof MessageChannel < "u") {
      var Ve = new MessageChannel(), Ge = Ve.port2;
      Ve.port1.onmessage = Be, Le = function() {
        Ge.postMessage(null);
      };
    } else Le = function() {
      T(Be, 0);
    };
    function Ae($) {
      ne = $, H || (H = !0, Le());
    }
    function _e($, Z) {
      pe = T(function() {
        $(o.unstable_now());
      }, Z);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function($) {
      $.callback = null;
    }, o.unstable_continueExecution = function() {
      L || z || (L = !0, Ae(b));
    }, o.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pe = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, o.unstable_getFirstCallbackNode = function() {
      return l(E);
    }, o.unstable_next = function($) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = P;
      }
      var V = P;
      P = Z;
      try {
        return $();
      } finally {
        P = V;
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
      var V = P;
      P = $;
      try {
        return Z();
      } finally {
        P = V;
      }
    }, o.unstable_scheduleCallback = function($, Z, V) {
      var k = o.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? k + V : k) : V = k, $) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = V + M, $ = { id: N++, callback: Z, priorityLevel: $, startTime: V, expirationTime: M, sortIndex: -1 }, V > k ? ($.sortIndex = V, i(_, $), l(E) === null && $ === l(_) && (I ? (W(pe), pe = -1) : I = !0, _e(oe, V - k))) : ($.sortIndex = M, i(E, $), L || z || (L = !0, Ae(b))), $;
    }, o.unstable_shouldYield = Qe, o.unstable_wrapCallback = function($) {
      var Z = P;
      return function() {
        var V = P;
        P = Z;
        try {
          return $.apply(this, arguments);
        } finally {
          P = V;
        }
      };
    };
  })(va)), va;
}
var dc;
function Zd() {
  return dc || (dc = 1, ma.exports = bd()), ma.exports;
}
var hc;
function eh() {
  if (hc) return St;
  hc = 1;
  var o = Ea(), i = Zd();
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
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), E = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, w = {};
  function P(e) {
    return E.call(w, e) ? !0 : E.call(N, e) ? !1 : _.test(e) ? w[e] = !0 : (N[e] = !0, !1);
  }
  function z(e, t, n, r) {
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
  function L(e, t, n, r) {
    if (t === null || typeof t > "u" || z(e, t, n, r)) return !0;
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
  function I(e, t, n, r, s, a, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = f;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    T[e] = new I(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    T[t] = new I(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    T[e] = new I(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    T[e] = new I(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    T[e] = new I(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    T[e] = new I(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    T[e] = new I(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    T[e] = new I(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    T[e] = new I(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var W = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      W,
      U
    );
    T[t] = new I(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(W, U);
    T[t] = new I(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(W, U);
    T[t] = new I(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    T[e] = new I(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    T[e] = new I(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function J(e, t, n, r) {
    var s = T.hasOwnProperty(t) ? T[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (L(t, n, s, r) && (n = null), r || s === null ? P(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var oe = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = /* @__PURE__ */ Symbol.for("react.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), ne = /* @__PURE__ */ Symbol.for("react.fragment"), pe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Pe = /* @__PURE__ */ Symbol.for("react.profiler"), je = /* @__PURE__ */ Symbol.for("react.provider"), Qe = /* @__PURE__ */ Symbol.for("react.context"), Be = /* @__PURE__ */ Symbol.for("react.forward_ref"), Le = /* @__PURE__ */ Symbol.for("react.suspense"), Ve = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ge = /* @__PURE__ */ Symbol.for("react.memo"), Ae = /* @__PURE__ */ Symbol.for("react.lazy"), _e = /* @__PURE__ */ Symbol.for("react.offscreen"), $ = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = $ && e[$] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var V = Object.assign, k;
  function M(e) {
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
        } catch (j) {
          var r = j;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (j) {
          r = j;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (j) {
          r = j;
        }
        e();
      }
    } catch (j) {
      if (j && r && typeof j.stack == "string") {
        for (var s = j.stack.split(`
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
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function me(e) {
    switch (e.tag) {
      case 5:
        return M(e.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
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
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ne:
        return "Fragment";
      case H:
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
  function re(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function te(e, t) {
    var n = t.checked;
    return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ye(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = B(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ke(e, t) {
    t = t.checked, t != null && J(e, "checked", t, !1);
  }
  function Te(e, t) {
    ke(e, t);
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
    (t !== "number" || re(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
    return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
  function Je(e) {
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
  var It, bt = (function(e) {
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
  }, jr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kt).forEach(function(e) {
    jr.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Kt[t] = Kt[e];
    });
  });
  function le(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kt.hasOwnProperty(e) && Kt[e] ? ("" + t).trim() : t + "px";
  }
  function Zt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, s = le(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
    }
  }
  var ae = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ge(e, t) {
    if (t) {
      if (ae[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function xe(e, t) {
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
  var Fe = null;
  function et(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var en = null, pt = null, Qt = null;
  function Gn(e) {
    if (e = Kr(e)) {
      if (typeof en != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = zi(t), en(e.stateNode, e.type, t));
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
  function Na(e, t) {
    return e(t);
  }
  function Ta() {
  }
  var Cs = !1;
  function Ma(e, t, n) {
    if (Cs) return e(t, n);
    Cs = !0;
    try {
      return Na(e, t, n);
    } finally {
      Cs = !1, (pt !== null || Qt !== null) && (Ta(), Yn());
    }
  }
  function Er(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = zi(n);
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
  var Rs = !1;
  if (g) try {
    var _r = {};
    Object.defineProperty(_r, "passive", { get: function() {
      Rs = !0;
    } }), window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
  } catch {
    Rs = !1;
  }
  function Zc(e, t, n, r, s, a, f, p, m) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, j);
    } catch (R) {
      this.onError(R);
    }
  }
  var Nr = !1, pi = null, mi = !1, Ps = null, ef = { onError: function(e) {
    Nr = !0, pi = e;
  } };
  function tf(e, t, n, r, s, a, f, p, m) {
    Nr = !1, pi = null, Zc.apply(ef, arguments);
  }
  function nf(e, t, n, r, s, a, f, p, m) {
    if (tf.apply(this, arguments), Nr) {
      if (Nr) {
        var j = pi;
        Nr = !1, pi = null;
      } else throw Error(l(198));
      mi || (mi = !0, Ps = j);
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
  function Ca(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ra(e) {
    if (Rn(e) !== e) throw Error(l(188));
  }
  function rf(e) {
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
          if (a === n) return Ra(s), e;
          if (a === r) return Ra(s), t;
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
  function Pa(e) {
    return e = rf(e), e !== null ? La(e) : null;
  }
  function La(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = La(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Aa = i.unstable_scheduleCallback, Ia = i.unstable_cancelCallback, sf = i.unstable_shouldYield, lf = i.unstable_requestPaint, be = i.unstable_now, af = i.unstable_getCurrentPriorityLevel, Ls = i.unstable_ImmediatePriority, Fa = i.unstable_UserBlockingPriority, vi = i.unstable_NormalPriority, of = i.unstable_LowPriority, za = i.unstable_IdlePriority, yi = null, Gt = null;
  function uf(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ft = Math.clz32 ? Math.clz32 : df, cf = Math.log, ff = Math.LN2;
  function df(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (cf(e) / ff | 0) | 0;
  }
  var gi = 64, ki = 4194304;
  function Tr(e) {
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
  function xi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, s = e.suspendedLanes, a = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var p = f & ~s;
      p !== 0 ? r = Tr(p) : (a &= f, a !== 0 && (r = Tr(a)));
    } else f = n & ~s, f !== 0 ? r = Tr(f) : a !== 0 && (r = Tr(a));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & s) === 0 && (s = r & -r, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ft(t), s = 1 << n, r |= e[n], t &= ~s;
    return r;
  }
  function hf(e, t) {
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
  function pf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
      var f = 31 - Ft(a), p = 1 << f, m = s[f];
      m === -1 ? ((p & n) === 0 || (p & r) !== 0) && (s[f] = hf(p, t)) : m <= t && (e.expiredLanes |= p), a &= ~p;
    }
  }
  function As(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Oa() {
    var e = gi;
    return gi <<= 1, (gi & 4194240) === 0 && (gi = 64), e;
  }
  function Is(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Mr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ft(t), e[t] = n;
  }
  function mf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - Ft(n), a = 1 << s;
      t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
    }
  }
  function Fs(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Ft(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  var Ce = 0;
  function Da(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var $a, zs, Ba, Va, Ua, Os = !1, wi = [], cn = null, fn = null, dn = null, Cr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), hn = [], vf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ha(e, t) {
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
        Cr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rr.delete(t.pointerId);
    }
  }
  function Pr(e, t, n, r, s, a) {
    return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = Kr(t), t !== null && zs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function yf(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return cn = Pr(cn, e, t, n, r, s), !0;
      case "dragenter":
        return fn = Pr(fn, e, t, n, r, s), !0;
      case "mouseover":
        return dn = Pr(dn, e, t, n, r, s), !0;
      case "pointerover":
        var a = s.pointerId;
        return Cr.set(a, Pr(Cr.get(a) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return a = s.pointerId, Rr.set(a, Pr(Rr.get(a) || null, e, t, n, r, s)), !0;
    }
    return !1;
  }
  function Wa(e) {
    var t = Pn(e.target);
    if (t !== null) {
      var n = Rn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ca(n), t !== null) {
            e.blockedOn = t, Ua(e.priority, function() {
              Ba(n);
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
  function Si(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = $s(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Fe = r, n.target.dispatchEvent(r), Fe = null;
      } else return t = Kr(n), t !== null && zs(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ka(e, t, n) {
    Si(e) && n.delete(t);
  }
  function gf() {
    Os = !1, cn !== null && Si(cn) && (cn = null), fn !== null && Si(fn) && (fn = null), dn !== null && Si(dn) && (dn = null), Cr.forEach(Ka), Rr.forEach(Ka);
  }
  function Lr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Os || (Os = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, gf)));
  }
  function Ar(e) {
    function t(s) {
      return Lr(s, e);
    }
    if (0 < wi.length) {
      Lr(wi[0], e);
      for (var n = 1; n < wi.length; n++) {
        var r = wi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (cn !== null && Lr(cn, e), fn !== null && Lr(fn, e), dn !== null && Lr(dn, e), Cr.forEach(t), Rr.forEach(t), n = 0; n < hn.length; n++) r = hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) Wa(n), n.blockedOn === null && hn.shift();
  }
  var Xn = oe.ReactCurrentBatchConfig, ji = !0;
  function kf(e, t, n, r) {
    var s = Ce, a = Xn.transition;
    Xn.transition = null;
    try {
      Ce = 1, Ds(e, t, n, r);
    } finally {
      Ce = s, Xn.transition = a;
    }
  }
  function xf(e, t, n, r) {
    var s = Ce, a = Xn.transition;
    Xn.transition = null;
    try {
      Ce = 4, Ds(e, t, n, r);
    } finally {
      Ce = s, Xn.transition = a;
    }
  }
  function Ds(e, t, n, r) {
    if (ji) {
      var s = $s(e, t, n, r);
      if (s === null) nl(e, t, r, Ei, n), Ha(e, r);
      else if (yf(s, e, t, n, r)) r.stopPropagation();
      else if (Ha(e, r), t & 4 && -1 < vf.indexOf(e)) {
        for (; s !== null; ) {
          var a = Kr(s);
          if (a !== null && $a(a), a = $s(e, t, n, r), a === null && nl(e, t, r, Ei, n), a === s) break;
          s = a;
        }
        s !== null && r.stopPropagation();
      } else nl(e, t, r, null, n);
    }
  }
  var Ei = null;
  function $s(e, t, n, r) {
    if (Ei = null, e = et(r), e = Pn(e), e !== null) if (t = Rn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ca(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ei = e, null;
  }
  function Qa(e) {
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
        switch (af()) {
          case Ls:
            return 1;
          case Fa:
            return 4;
          case vi:
          case of:
            return 16;
          case za:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pn = null, Bs = null, _i = null;
  function Ga() {
    if (_i) return _i;
    var e, t = Bs, n = t.length, r, s = "value" in pn ? pn.value : pn.textContent, a = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === s[a - r]; r++) ;
    return _i = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ni(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ti() {
    return !0;
  }
  function qa() {
    return !1;
  }
  function jt(e) {
    function t(n, r, s, a, f) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = f, this.currentTarget = null;
      for (var p in e) e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(a) : a[p]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Ti : qa, this.isPropagationStopped = qa, this;
    }
    return V(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ti);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ti);
    }, persist: function() {
    }, isPersistent: Ti }), t;
  }
  var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Vs = jt(Jn), Ir = V({}, Jn, { view: 0, detail: 0 }), wf = jt(Ir), Us, Hs, Fr, Mi = V({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ks, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Fr && (Fr && e.type === "mousemove" ? (Us = e.screenX - Fr.screenX, Hs = e.screenY - Fr.screenY) : Hs = Us = 0, Fr = e), Us);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Hs;
  } }), Ya = jt(Mi), Sf = V({}, Mi, { dataTransfer: 0 }), jf = jt(Sf), Ef = V({}, Ir, { relatedTarget: 0 }), Ws = jt(Ef), _f = V({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Nf = jt(_f), Tf = V({}, Jn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Mf = jt(Tf), Cf = V({}, Jn, { data: 0 }), Xa = jt(Cf), Rf = {
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
  }, Pf = {
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
  }, Lf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Af(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lf[e]) ? !!t[e] : !1;
  }
  function Ks() {
    return Af;
  }
  var If = V({}, Ir, { key: function(e) {
    if (e.key) {
      var t = Rf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ni(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ks, charCode: function(e) {
    return e.type === "keypress" ? Ni(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ni(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Ff = jt(If), zf = V({}, Mi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ja = jt(zf), Of = V({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ks }), Df = jt(Of), $f = V({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bf = jt($f), Vf = V({}, Mi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Uf = jt(Vf), Hf = [9, 13, 27, 32], Qs = g && "CompositionEvent" in window, zr = null;
  g && "documentMode" in document && (zr = document.documentMode);
  var Wf = g && "TextEvent" in window && !zr, ba = g && (!Qs || zr && 8 < zr && 11 >= zr), Za = " ", eo = !1;
  function to(e, t) {
    switch (e) {
      case "keyup":
        return Hf.indexOf(t.keyCode) !== -1;
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
  function no(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var bn = !1;
  function Kf(e, t) {
    switch (e) {
      case "compositionend":
        return no(t);
      case "keypress":
        return t.which !== 32 ? null : (eo = !0, Za);
      case "textInput":
        return e = t.data, e === Za && eo ? null : e;
      default:
        return null;
    }
  }
  function Qf(e, t) {
    if (bn) return e === "compositionend" || !Qs && to(e, t) ? (e = Ga(), _i = Bs = pn = null, bn = !1, e) : null;
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
        return ba && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Gf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gf[e.type] : t === "textarea";
  }
  function io(e, t, n, r) {
    qn(r), t = Ai(t, "onChange"), 0 < t.length && (n = new Vs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Or = null, Dr = null;
  function qf(e) {
    jo(e, 0);
  }
  function Ci(e) {
    var t = rr(e);
    if (ee(t)) return e;
  }
  function Yf(e, t) {
    if (e === "change") return t;
  }
  var so = !1;
  if (g) {
    var Gs;
    if (g) {
      var qs = "oninput" in document;
      if (!qs) {
        var lo = document.createElement("div");
        lo.setAttribute("oninput", "return;"), qs = typeof lo.oninput == "function";
      }
      Gs = qs;
    } else Gs = !1;
    so = Gs && (!document.documentMode || 9 < document.documentMode);
  }
  function ao() {
    Or && (Or.detachEvent("onpropertychange", oo), Dr = Or = null);
  }
  function oo(e) {
    if (e.propertyName === "value" && Ci(Dr)) {
      var t = [];
      io(t, Dr, e, et(e)), Ma(qf, t);
    }
  }
  function Xf(e, t, n) {
    e === "focusin" ? (ao(), Or = t, Dr = n, Or.attachEvent("onpropertychange", oo)) : e === "focusout" && ao();
  }
  function Jf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ci(Dr);
  }
  function bf(e, t) {
    if (e === "click") return Ci(t);
  }
  function Zf(e, t) {
    if (e === "input" || e === "change") return Ci(t);
  }
  function ed(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var zt = typeof Object.is == "function" ? Object.is : ed;
  function $r(e, t) {
    if (zt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!E.call(t, s) || !zt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function uo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function co(e, t) {
    var n = uo(e);
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
      n = uo(n);
    }
  }
  function fo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ho() {
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
  function Ys(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function td(e) {
    var t = ho(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && fo(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ys(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, a = Math.min(r.start, s);
          r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = co(n, a);
          var f = co(
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
  var nd = g && "documentMode" in document && 11 >= document.documentMode, Zn = null, Xs = null, Br = null, Js = !1;
  function po(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Js || Zn == null || Zn !== re(r) || (r = Zn, "selectionStart" in r && Ys(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Br && $r(Br, r) || (Br = r, r = Ai(Xs, "onSelect"), 0 < r.length && (t = new Vs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zn)));
  }
  function Ri(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var er = { animationend: Ri("Animation", "AnimationEnd"), animationiteration: Ri("Animation", "AnimationIteration"), animationstart: Ri("Animation", "AnimationStart"), transitionend: Ri("Transition", "TransitionEnd") }, bs = {}, mo = {};
  g && (mo = document.createElement("div").style, "AnimationEvent" in window || (delete er.animationend.animation, delete er.animationiteration.animation, delete er.animationstart.animation), "TransitionEvent" in window || delete er.transitionend.transition);
  function Pi(e) {
    if (bs[e]) return bs[e];
    if (!er[e]) return e;
    var t = er[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in mo) return bs[e] = t[n];
    return e;
  }
  var vo = Pi("animationend"), yo = Pi("animationiteration"), go = Pi("animationstart"), ko = Pi("transitionend"), xo = /* @__PURE__ */ new Map(), wo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mn(e, t) {
    xo.set(e, t), h(t, [e]);
  }
  for (var Zs = 0; Zs < wo.length; Zs++) {
    var el = wo[Zs], rd = el.toLowerCase(), id = el[0].toUpperCase() + el.slice(1);
    mn(rd, "on" + id);
  }
  mn(vo, "onAnimationEnd"), mn(yo, "onAnimationIteration"), mn(go, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(ko, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));
  function So(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, nf(r, t, void 0, e), e.currentTarget = null;
  }
  function jo(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t) for (var f = r.length - 1; 0 <= f; f--) {
          var p = r[f], m = p.instance, j = p.currentTarget;
          if (p = p.listener, m !== a && s.isPropagationStopped()) break e;
          So(s, p, j), a = m;
        }
        else for (f = 0; f < r.length; f++) {
          if (p = r[f], m = p.instance, j = p.currentTarget, p = p.listener, m !== a && s.isPropagationStopped()) break e;
          So(s, p, j), a = m;
        }
      }
    }
    if (mi) throw e = Ps, mi = !1, Ps = null, e;
  }
  function ze(e, t) {
    var n = t[ol];
    n === void 0 && (n = t[ol] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Eo(t, e, 2, !1), n.add(r));
  }
  function tl(e, t, n) {
    var r = 0;
    t && (r |= 4), Eo(n, e, r, t);
  }
  var Li = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Li]) {
      e[Li] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (sd.has(n) || tl(n, !1, e), tl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Li] || (t[Li] = !0, tl("selectionchange", !1, t));
    }
  }
  function Eo(e, t, n, r) {
    switch (Qa(t)) {
      case 1:
        var s = kf;
        break;
      case 4:
        s = xf;
        break;
      default:
        s = Ds;
    }
    n = s.bind(null, t, n, e), s = void 0, !Rs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function nl(e, t, n, r, s) {
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
    Ma(function() {
      var j = a, R = et(n), A = [];
      e: {
        var C = xo.get(e);
        if (C !== void 0) {
          var K = Vs, G = e;
          switch (e) {
            case "keypress":
              if (Ni(n) === 0) break e;
            case "keydown":
            case "keyup":
              K = Ff;
              break;
            case "focusin":
              G = "focus", K = Ws;
              break;
            case "focusout":
              G = "blur", K = Ws;
              break;
            case "beforeblur":
            case "afterblur":
              K = Ws;
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
              K = Ya;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = jf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = Df;
              break;
            case vo:
            case yo:
            case go:
              K = Nf;
              break;
            case ko:
              K = Bf;
              break;
            case "scroll":
              K = wf;
              break;
            case "wheel":
              K = Uf;
              break;
            case "copy":
            case "cut":
            case "paste":
              K = Mf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = Ja;
          }
          var q = (t & 4) !== 0, Ze = !q && e === "scroll", x = q ? C !== null ? C + "Capture" : null : C;
          q = [];
          for (var y = j, S; y !== null; ) {
            S = y;
            var D = S.stateNode;
            if (S.tag === 5 && D !== null && (S = D, x !== null && (D = Er(y, x), D != null && q.push(Hr(y, D, S)))), Ze) break;
            y = y.return;
          }
          0 < q.length && (C = new K(C, G, null, n, R), A.push({ event: C, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", K = e === "mouseout" || e === "pointerout", C && n !== Fe && (G = n.relatedTarget || n.fromElement) && (Pn(G) || G[tn])) break e;
          if ((K || C) && (C = R.window === R ? R : (C = R.ownerDocument) ? C.defaultView || C.parentWindow : window, K ? (G = n.relatedTarget || n.toElement, K = j, G = G ? Pn(G) : null, G !== null && (Ze = Rn(G), G !== Ze || G.tag !== 5 && G.tag !== 6) && (G = null)) : (K = null, G = j), K !== G)) {
            if (q = Ya, D = "onMouseLeave", x = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (q = Ja, D = "onPointerLeave", x = "onPointerEnter", y = "pointer"), Ze = K == null ? C : rr(K), S = G == null ? C : rr(G), C = new q(D, y + "leave", K, n, R), C.target = Ze, C.relatedTarget = S, D = null, Pn(R) === j && (q = new q(x, y + "enter", G, n, R), q.target = S, q.relatedTarget = Ze, D = q), Ze = D, K && G) t: {
              for (q = K, x = G, y = 0, S = q; S; S = tr(S)) y++;
              for (S = 0, D = x; D; D = tr(D)) S++;
              for (; 0 < y - S; ) q = tr(q), y--;
              for (; 0 < S - y; ) x = tr(x), S--;
              for (; y--; ) {
                if (q === x || x !== null && q === x.alternate) break t;
                q = tr(q), x = tr(x);
              }
              q = null;
            }
            else q = null;
            K !== null && _o(A, C, K, q, !1), G !== null && Ze !== null && _o(A, Ze, G, q, !0);
          }
        }
        e: {
          if (C = j ? rr(j) : window, K = C.nodeName && C.nodeName.toLowerCase(), K === "select" || K === "input" && C.type === "file") var X = Yf;
          else if (ro(C)) if (so) X = Zf;
          else {
            X = Jf;
            var ie = Xf;
          }
          else (K = C.nodeName) && K.toLowerCase() === "input" && (C.type === "checkbox" || C.type === "radio") && (X = bf);
          if (X && (X = X(e, j))) {
            io(A, X, n, R);
            break e;
          }
          ie && ie(e, C, j), e === "focusout" && (ie = C._wrapperState) && ie.controlled && C.type === "number" && De(C, "number", C.value);
        }
        switch (ie = j ? rr(j) : window, e) {
          case "focusin":
            (ro(ie) || ie.contentEditable === "true") && (Zn = ie, Xs = j, Br = null);
            break;
          case "focusout":
            Br = Xs = Zn = null;
            break;
          case "mousedown":
            Js = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Js = !1, po(A, n, R);
            break;
          case "selectionchange":
            if (nd) break;
          case "keydown":
          case "keyup":
            po(A, n, R);
        }
        var se;
        if (Qs) e: {
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
        else bn ? to(e, n) && (fe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (fe = "onCompositionStart");
        fe && (ba && n.locale !== "ko" && (bn || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && bn && (se = Ga()) : (pn = R, Bs = "value" in pn ? pn.value : pn.textContent, bn = !0)), ie = Ai(j, fe), 0 < ie.length && (fe = new Xa(fe, e, null, n, R), A.push({ event: fe, listeners: ie }), se ? fe.data = se : (se = no(n), se !== null && (fe.data = se)))), (se = Wf ? Kf(e, n) : Qf(e, n)) && (j = Ai(j, "onBeforeInput"), 0 < j.length && (R = new Xa("onBeforeInput", "beforeinput", null, n, R), A.push({ event: R, listeners: j }), R.data = se));
      }
      jo(A, t);
    });
  }
  function Hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ai(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, a = s.stateNode;
      s.tag === 5 && a !== null && (s = a, a = Er(e, n), a != null && r.unshift(Hr(e, a, s)), a = Er(e, t), a != null && r.push(Hr(e, a, s))), e = e.return;
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
  function _o(e, t, n, r, s) {
    for (var a = t._reactName, f = []; n !== null && n !== r; ) {
      var p = n, m = p.alternate, j = p.stateNode;
      if (m !== null && m === r) break;
      p.tag === 5 && j !== null && (p = j, s ? (m = Er(n, a), m != null && f.unshift(Hr(n, m, p))) : s || (m = Er(n, a), m != null && f.push(Hr(n, m, p)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var ld = /\r\n?/g, ad = /\u0000|\uFFFD/g;
  function No(e) {
    return (typeof e == "string" ? e : "" + e).replace(ld, `
`).replace(ad, "");
  }
  function Ii(e, t, n) {
    if (t = No(t), No(e) !== t && n) throw Error(l(425));
  }
  function Fi() {
  }
  var rl = null, il = null;
  function sl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ll = typeof setTimeout == "function" ? setTimeout : void 0, od = typeof clearTimeout == "function" ? clearTimeout : void 0, To = typeof Promise == "function" ? Promise : void 0, ud = typeof queueMicrotask == "function" ? queueMicrotask : typeof To < "u" ? function(e) {
    return To.resolve(null).then(e).catch(cd);
  } : ll;
  function cd(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function al(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
        if (r === 0) {
          e.removeChild(s), Ar(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = s;
    } while (n);
    Ar(t);
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
  function Mo(e) {
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
  var nr = Math.random().toString(36).slice(2), qt = "__reactFiber$" + nr, Wr = "__reactProps$" + nr, tn = "__reactContainer$" + nr, ol = "__reactEvents$" + nr, fd = "__reactListeners$" + nr, dd = "__reactHandles$" + nr;
  function Pn(e) {
    var t = e[qt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[tn] || n[qt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Mo(e); e !== null; ) {
          if (n = e[qt]) return n;
          e = Mo(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Kr(e) {
    return e = e[qt] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function rr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function zi(e) {
    return e[Wr] || null;
  }
  var ul = [], ir = -1;
  function yn(e) {
    return { current: e };
  }
  function Oe(e) {
    0 > ir || (e.current = ul[ir], ul[ir] = null, ir--);
  }
  function Ie(e, t) {
    ir++, ul[ir] = e.current, e.current = t;
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
  function Oi() {
    Oe(yt), Oe(ct);
  }
  function Co(e, t, n) {
    if (ct.current !== gn) throw Error(l(168));
    Ie(ct, t), Ie(yt, n);
  }
  function Ro(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(l(108, O(e) || "Unknown", s));
    return V({}, n, r);
  }
  function Di(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gn, Ln = ct.current, Ie(ct, e), Ie(yt, yt.current), !0;
  }
  function Po(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = Ro(e, t, Ln), r.__reactInternalMemoizedMergedChildContext = e, Oe(yt), Oe(ct), Ie(ct, e)) : Oe(yt), Ie(yt, n);
  }
  var nn = null, $i = !1, cl = !1;
  function Lo(e) {
    nn === null ? nn = [e] : nn.push(e);
  }
  function hd(e) {
    $i = !0, Lo(e);
  }
  function kn() {
    if (!cl && nn !== null) {
      cl = !0;
      var e = 0, t = Ce;
      try {
        var n = nn;
        for (Ce = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        nn = null, $i = !1;
      } catch (s) {
        throw nn !== null && (nn = nn.slice(e + 1)), Aa(Ls, kn), s;
      } finally {
        Ce = t, cl = !1;
      }
    }
    return null;
  }
  var lr = [], ar = 0, Bi = null, Vi = 0, Mt = [], Ct = 0, An = null, rn = 1, sn = "";
  function In(e, t) {
    lr[ar++] = Vi, lr[ar++] = Bi, Bi = e, Vi = t;
  }
  function Ao(e, t, n) {
    Mt[Ct++] = rn, Mt[Ct++] = sn, Mt[Ct++] = An, An = e;
    var r = rn;
    e = sn;
    var s = 32 - Ft(r) - 1;
    r &= ~(1 << s), n += 1;
    var a = 32 - Ft(t) + s;
    if (30 < a) {
      var f = s - s % 5;
      a = (r & (1 << f) - 1).toString(32), r >>= f, s -= f, rn = 1 << 32 - Ft(t) + s | n << s | r, sn = a + e;
    } else rn = 1 << a | n << s | r, sn = e;
  }
  function fl(e) {
    e.return !== null && (In(e, 1), Ao(e, 1, 0));
  }
  function dl(e) {
    for (; e === Bi; ) Bi = lr[--ar], lr[ar] = null, Vi = lr[--ar], lr[ar] = null;
    for (; e === An; ) An = Mt[--Ct], Mt[Ct] = null, sn = Mt[--Ct], Mt[Ct] = null, rn = Mt[--Ct], Mt[Ct] = null;
  }
  var Et = null, _t = null, $e = !1, Ot = null;
  function Io(e, t) {
    var n = At(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Fo(e, t) {
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
  function hl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function pl(e) {
    if ($e) {
      var t = _t;
      if (t) {
        var n = t;
        if (!Fo(e, t)) {
          if (hl(e)) throw Error(l(418));
          t = vn(n.nextSibling);
          var r = Et;
          t && Fo(e, t) ? Io(r, n) : (e.flags = e.flags & -4097 | 2, $e = !1, Et = e);
        }
      } else {
        if (hl(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, $e = !1, Et = e;
      }
    }
  }
  function zo(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Et = e;
  }
  function Ui(e) {
    if (e !== Et) return !1;
    if (!$e) return zo(e), $e = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !sl(e.type, e.memoizedProps)), t && (t = _t)) {
      if (hl(e)) throw Oo(), Error(l(418));
      for (; t; ) Io(e, t), t = vn(t.nextSibling);
    }
    if (zo(e), e.tag === 13) {
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
  function Oo() {
    for (var e = _t; e; ) e = vn(e.nextSibling);
  }
  function or() {
    _t = Et = null, $e = !1;
  }
  function ml(e) {
    Ot === null ? Ot = [e] : Ot.push(e);
  }
  var pd = oe.ReactCurrentBatchConfig;
  function Qr(e, t, n) {
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
  function Hi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Do(e) {
    var t = e._init;
    return t(e._payload);
  }
  function $o(e) {
    function t(x, y) {
      if (e) {
        var S = x.deletions;
        S === null ? (x.deletions = [y], x.flags |= 16) : S.push(y);
      }
    }
    function n(x, y) {
      if (!e) return null;
      for (; y !== null; ) t(x, y), y = y.sibling;
      return null;
    }
    function r(x, y) {
      for (x = /* @__PURE__ */ new Map(); y !== null; ) y.key !== null ? x.set(y.key, y) : x.set(y.index, y), y = y.sibling;
      return x;
    }
    function s(x, y) {
      return x = Tn(x, y), x.index = 0, x.sibling = null, x;
    }
    function a(x, y, S) {
      return x.index = S, e ? (S = x.alternate, S !== null ? (S = S.index, S < y ? (x.flags |= 2, y) : S) : (x.flags |= 2, y)) : (x.flags |= 1048576, y);
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 2), x;
    }
    function p(x, y, S, D) {
      return y === null || y.tag !== 6 ? (y = la(S, x.mode, D), y.return = x, y) : (y = s(y, S), y.return = x, y);
    }
    function m(x, y, S, D) {
      var X = S.type;
      return X === ne ? R(x, y, S.props.children, D, S.key) : y !== null && (y.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Ae && Do(X) === y.type) ? (D = s(y, S.props), D.ref = Qr(x, y, S), D.return = x, D) : (D = hs(S.type, S.key, S.props, null, x.mode, D), D.ref = Qr(x, y, S), D.return = x, D);
    }
    function j(x, y, S, D) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== S.containerInfo || y.stateNode.implementation !== S.implementation ? (y = aa(S, x.mode, D), y.return = x, y) : (y = s(y, S.children || []), y.return = x, y);
    }
    function R(x, y, S, D, X) {
      return y === null || y.tag !== 7 ? (y = Un(S, x.mode, D, X), y.return = x, y) : (y = s(y, S), y.return = x, y);
    }
    function A(x, y, S) {
      if (typeof y == "string" && y !== "" || typeof y == "number") return y = la("" + y, x.mode, S), y.return = x, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case b:
            return S = hs(y.type, y.key, y.props, null, x.mode, S), S.ref = Qr(x, null, y), S.return = x, S;
          case H:
            return y = aa(y, x.mode, S), y.return = x, y;
          case Ae:
            var D = y._init;
            return A(x, D(y._payload), S);
        }
        if (Ue(y) || Z(y)) return y = Un(y, x.mode, S, null), y.return = x, y;
        Hi(x, y);
      }
      return null;
    }
    function C(x, y, S, D) {
      var X = y !== null ? y.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number") return X !== null ? null : p(x, y, "" + S, D);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case b:
            return S.key === X ? m(x, y, S, D) : null;
          case H:
            return S.key === X ? j(x, y, S, D) : null;
          case Ae:
            return X = S._init, C(
              x,
              y,
              X(S._payload),
              D
            );
        }
        if (Ue(S) || Z(S)) return X !== null ? null : R(x, y, S, D, null);
        Hi(x, S);
      }
      return null;
    }
    function K(x, y, S, D, X) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return x = x.get(S) || null, p(y, x, "" + D, X);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case b:
            return x = x.get(D.key === null ? S : D.key) || null, m(y, x, D, X);
          case H:
            return x = x.get(D.key === null ? S : D.key) || null, j(y, x, D, X);
          case Ae:
            var ie = D._init;
            return K(x, y, S, ie(D._payload), X);
        }
        if (Ue(D) || Z(D)) return x = x.get(S) || null, R(y, x, D, X, null);
        Hi(y, D);
      }
      return null;
    }
    function G(x, y, S, D) {
      for (var X = null, ie = null, se = y, fe = y = 0, lt = null; se !== null && fe < S.length; fe++) {
        se.index > fe ? (lt = se, se = null) : lt = se.sibling;
        var Ne = C(x, se, S[fe], D);
        if (Ne === null) {
          se === null && (se = lt);
          break;
        }
        e && se && Ne.alternate === null && t(x, se), y = a(Ne, y, fe), ie === null ? X = Ne : ie.sibling = Ne, ie = Ne, se = lt;
      }
      if (fe === S.length) return n(x, se), $e && In(x, fe), X;
      if (se === null) {
        for (; fe < S.length; fe++) se = A(x, S[fe], D), se !== null && (y = a(se, y, fe), ie === null ? X = se : ie.sibling = se, ie = se);
        return $e && In(x, fe), X;
      }
      for (se = r(x, se); fe < S.length; fe++) lt = K(se, x, fe, S[fe], D), lt !== null && (e && lt.alternate !== null && se.delete(lt.key === null ? fe : lt.key), y = a(lt, y, fe), ie === null ? X = lt : ie.sibling = lt, ie = lt);
      return e && se.forEach(function(Mn) {
        return t(x, Mn);
      }), $e && In(x, fe), X;
    }
    function q(x, y, S, D) {
      var X = Z(S);
      if (typeof X != "function") throw Error(l(150));
      if (S = X.call(S), S == null) throw Error(l(151));
      for (var ie = X = null, se = y, fe = y = 0, lt = null, Ne = S.next(); se !== null && !Ne.done; fe++, Ne = S.next()) {
        se.index > fe ? (lt = se, se = null) : lt = se.sibling;
        var Mn = C(x, se, Ne.value, D);
        if (Mn === null) {
          se === null && (se = lt);
          break;
        }
        e && se && Mn.alternate === null && t(x, se), y = a(Mn, y, fe), ie === null ? X = Mn : ie.sibling = Mn, ie = Mn, se = lt;
      }
      if (Ne.done) return n(
        x,
        se
      ), $e && In(x, fe), X;
      if (se === null) {
        for (; !Ne.done; fe++, Ne = S.next()) Ne = A(x, Ne.value, D), Ne !== null && (y = a(Ne, y, fe), ie === null ? X = Ne : ie.sibling = Ne, ie = Ne);
        return $e && In(x, fe), X;
      }
      for (se = r(x, se); !Ne.done; fe++, Ne = S.next()) Ne = K(se, x, fe, Ne.value, D), Ne !== null && (e && Ne.alternate !== null && se.delete(Ne.key === null ? fe : Ne.key), y = a(Ne, y, fe), ie === null ? X = Ne : ie.sibling = Ne, ie = Ne);
      return e && se.forEach(function(Gd) {
        return t(x, Gd);
      }), $e && In(x, fe), X;
    }
    function Ze(x, y, S, D) {
      if (typeof S == "object" && S !== null && S.type === ne && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case b:
            e: {
              for (var X = S.key, ie = y; ie !== null; ) {
                if (ie.key === X) {
                  if (X = S.type, X === ne) {
                    if (ie.tag === 7) {
                      n(x, ie.sibling), y = s(ie, S.props.children), y.return = x, x = y;
                      break e;
                    }
                  } else if (ie.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Ae && Do(X) === ie.type) {
                    n(x, ie.sibling), y = s(ie, S.props), y.ref = Qr(x, ie, S), y.return = x, x = y;
                    break e;
                  }
                  n(x, ie);
                  break;
                } else t(x, ie);
                ie = ie.sibling;
              }
              S.type === ne ? (y = Un(S.props.children, x.mode, D, S.key), y.return = x, x = y) : (D = hs(S.type, S.key, S.props, null, x.mode, D), D.ref = Qr(x, y, S), D.return = x, x = D);
            }
            return f(x);
          case H:
            e: {
              for (ie = S.key; y !== null; ) {
                if (y.key === ie) if (y.tag === 4 && y.stateNode.containerInfo === S.containerInfo && y.stateNode.implementation === S.implementation) {
                  n(x, y.sibling), y = s(y, S.children || []), y.return = x, x = y;
                  break e;
                } else {
                  n(x, y);
                  break;
                }
                else t(x, y);
                y = y.sibling;
              }
              y = aa(S, x.mode, D), y.return = x, x = y;
            }
            return f(x);
          case Ae:
            return ie = S._init, Ze(x, y, ie(S._payload), D);
        }
        if (Ue(S)) return G(x, y, S, D);
        if (Z(S)) return q(x, y, S, D);
        Hi(x, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, y !== null && y.tag === 6 ? (n(x, y.sibling), y = s(y, S), y.return = x, x = y) : (n(x, y), y = la(S, x.mode, D), y.return = x, x = y), f(x)) : n(x, y);
    }
    return Ze;
  }
  var ur = $o(!0), Bo = $o(!1), Wi = yn(null), Ki = null, cr = null, vl = null;
  function yl() {
    vl = cr = Ki = null;
  }
  function gl(e) {
    var t = Wi.current;
    Oe(Wi), e._currentValue = t;
  }
  function kl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function fr(e, t) {
    Ki = e, vl = cr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (kt = !0), e.firstContext = null);
  }
  function Rt(e) {
    var t = e._currentValue;
    if (vl !== e) if (e = { context: e, memoizedValue: t, next: null }, cr === null) {
      if (Ki === null) throw Error(l(308));
      cr = e, Ki.dependencies = { lanes: 0, firstContext: e };
    } else cr = cr.next = e;
    return t;
  }
  var Fn = null;
  function xl(e) {
    Fn === null ? Fn = [e] : Fn.push(e);
  }
  function Vo(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n, xl(t)) : (n.next = s.next, s.next = n), t.interleaved = n, ln(e, r);
  }
  function ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var xn = !1;
  function wl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Uo(e, t) {
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
    return s = r.interleaved, s === null ? (t.next = t, xl(r)) : (t.next = s.next, s.next = t), r.interleaved = t, ln(e, n);
  }
  function Qi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Fs(e, n);
    }
  }
  function Ho(e, t) {
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
  function Gi(e, t, n, r) {
    var s = e.updateQueue;
    xn = !1;
    var a = s.firstBaseUpdate, f = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var m = p, j = m.next;
      m.next = null, f === null ? a = j : f.next = j, f = m;
      var R = e.alternate;
      R !== null && (R = R.updateQueue, p = R.lastBaseUpdate, p !== f && (p === null ? R.firstBaseUpdate = j : p.next = j, R.lastBaseUpdate = m));
    }
    if (a !== null) {
      var A = s.baseState;
      f = 0, R = j = m = null, p = a;
      do {
        var C = p.lane, K = p.eventTime;
        if ((r & C) === C) {
          R !== null && (R = R.next = {
            eventTime: K,
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          });
          e: {
            var G = e, q = p;
            switch (C = t, K = n, q.tag) {
              case 1:
                if (G = q.payload, typeof G == "function") {
                  A = G.call(K, A, C);
                  break e;
                }
                A = G;
                break e;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = q.payload, C = typeof G == "function" ? G.call(K, A, C) : G, C == null) break e;
                A = V({}, A, C);
                break e;
              case 2:
                xn = !0;
            }
          }
          p.callback !== null && p.lane !== 0 && (e.flags |= 64, C = s.effects, C === null ? s.effects = [p] : C.push(p));
        } else K = { eventTime: K, lane: C, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, R === null ? (j = R = K, m = A) : R = R.next = K, f |= C;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null) break;
          C = p, p = C.next, C.next = null, s.lastBaseUpdate = C, s.shared.pending = null;
        }
      } while (!0);
      if (R === null && (m = A), s.baseState = m, s.firstBaseUpdate = j, s.lastBaseUpdate = R, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          f |= s.lane, s = s.next;
        while (s !== t);
      } else a === null && (s.shared.lanes = 0);
      Dn |= f, e.lanes = f, e.memoizedState = A;
    }
  }
  function Wo(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], s = r.callback;
      if (s !== null) {
        if (r.callback = null, r = n, typeof s != "function") throw Error(l(191, s));
        s.call(r);
      }
    }
  }
  var Gr = {}, Yt = yn(Gr), qr = yn(Gr), Yr = yn(Gr);
  function zn(e) {
    if (e === Gr) throw Error(l(174));
    return e;
  }
  function Sl(e, t) {
    switch (Ie(Yr, t), Ie(qr, e), Ie(Yt, Gr), e = t.nodeType, e) {
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
    Oe(Yt), Oe(qr), Oe(Yr);
  }
  function Ko(e) {
    zn(Yr.current);
    var t = zn(Yt.current), n = Cn(t, e.type);
    t !== n && (Ie(qr, e), Ie(Yt, n));
  }
  function jl(e) {
    qr.current === e && (Oe(Yt), Oe(qr));
  }
  var We = yn(0);
  function qi(e) {
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
  var El = [];
  function _l() {
    for (var e = 0; e < El.length; e++) El[e]._workInProgressVersionPrimary = null;
    El.length = 0;
  }
  var Yi = oe.ReactCurrentDispatcher, Nl = oe.ReactCurrentBatchConfig, On = 0, Ke = null, nt = null, it = null, Xi = !1, Xr = !1, Jr = 0, md = 0;
  function ft() {
    throw Error(l(321));
  }
  function Tl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!zt(e[n], t[n])) return !1;
    return !0;
  }
  function Ml(e, t, n, r, s, a) {
    if (On = a, Ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yi.current = e === null || e.memoizedState === null ? kd : xd, e = n(r, s), Xr) {
      a = 0;
      do {
        if (Xr = !1, Jr = 0, 25 <= a) throw Error(l(301));
        a += 1, it = nt = null, t.updateQueue = null, Yi.current = wd, e = n(r, s);
      } while (Xr);
    }
    if (Yi.current = Zi, t = nt !== null && nt.next !== null, On = 0, it = nt = Ke = null, Xi = !1, t) throw Error(l(300));
    return e;
  }
  function Cl() {
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
  function br(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Rl(e) {
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
      var p = f = null, m = null, j = a;
      do {
        var R = j.lane;
        if ((On & R) === R) m !== null && (m = m.next = { lane: 0, action: j.action, hasEagerState: j.hasEagerState, eagerState: j.eagerState, next: null }), r = j.hasEagerState ? j.eagerState : e(r, j.action);
        else {
          var A = {
            lane: R,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          };
          m === null ? (p = m = A, f = r) : m = m.next = A, Ke.lanes |= R, Dn |= R;
        }
        j = j.next;
      } while (j !== null && j !== a);
      m === null ? f = r : m.next = p, zt(r, t.memoizedState) || (kt = !0), t.memoizedState = r, t.baseState = f, t.baseQueue = m, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        a = s.lane, Ke.lanes |= a, Dn |= a, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Pl(e) {
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
      zt(a, t.memoizedState) || (kt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
    }
    return [a, r];
  }
  function Qo() {
  }
  function Go(e, t) {
    var n = Ke, r = Pt(), s = t(), a = !zt(r.memoizedState, s);
    if (a && (r.memoizedState = s, kt = !0), r = r.queue, Ll(Xo.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || it !== null && it.memoizedState.tag & 1) {
      if (n.flags |= 2048, Zr(9, Yo.bind(null, n, r, s, t), void 0, null), st === null) throw Error(l(349));
      (On & 30) !== 0 || qo(n, t, s);
    }
    return s;
  }
  function qo(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Yo(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Jo(t) && bo(e);
  }
  function Xo(e, t, n) {
    return n(function() {
      Jo(t) && bo(e);
    });
  }
  function Jo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !zt(e, n);
    } catch {
      return !0;
    }
  }
  function bo(e) {
    var t = ln(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function Zo(e) {
    var t = Xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: br, lastRenderedState: e }, t.queue = e, e = e.dispatch = gd.bind(null, Ke, e), [t.memoizedState, e];
  }
  function Zr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function eu() {
    return Pt().memoizedState;
  }
  function Ji(e, t, n, r) {
    var s = Xt();
    Ke.flags |= e, s.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function bi(e, t, n, r) {
    var s = Pt();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (nt !== null) {
      var f = nt.memoizedState;
      if (a = f.destroy, r !== null && Tl(r, f.deps)) {
        s.memoizedState = Zr(t, n, a, r);
        return;
      }
    }
    Ke.flags |= e, s.memoizedState = Zr(1 | t, n, a, r);
  }
  function tu(e, t) {
    return Ji(8390656, 8, e, t);
  }
  function Ll(e, t) {
    return bi(2048, 8, e, t);
  }
  function nu(e, t) {
    return bi(4, 2, e, t);
  }
  function ru(e, t) {
    return bi(4, 4, e, t);
  }
  function iu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function su(e, t, n) {
    return n = n != null ? n.concat([e]) : null, bi(4, 4, iu.bind(null, t, e), n);
  }
  function Al() {
  }
  function lu(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function au(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ou(e, t, n) {
    return (On & 21) === 0 ? (e.baseState && (e.baseState = !1, kt = !0), e.memoizedState = n) : (zt(n, t) || (n = Oa(), Ke.lanes |= n, Dn |= n, e.baseState = !0), t);
  }
  function vd(e, t) {
    var n = Ce;
    Ce = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Nl.transition;
    Nl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ce = n, Nl.transition = r;
    }
  }
  function uu() {
    return Pt().memoizedState;
  }
  function yd(e, t, n) {
    var r = _n(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, cu(e)) fu(t, n);
    else if (n = Vo(e, t, n, r), n !== null) {
      var s = vt();
      Vt(n, e, r, s), du(n, t, r);
    }
  }
  function gd(e, t, n) {
    var r = _n(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (cu(e)) fu(t, s);
    else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
        var f = t.lastRenderedState, p = a(f, n);
        if (s.hasEagerState = !0, s.eagerState = p, zt(p, f)) {
          var m = t.interleaved;
          m === null ? (s.next = s, xl(t)) : (s.next = m.next, m.next = s), t.interleaved = s;
          return;
        }
      } catch {
      }
      n = Vo(e, t, s, r), n !== null && (s = vt(), Vt(n, e, r, s), du(n, t, r));
    }
  }
  function cu(e) {
    var t = e.alternate;
    return e === Ke || t !== null && t === Ke;
  }
  function fu(e, t) {
    Xr = Xi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function du(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Fs(e, n);
    }
  }
  var Zi = { readContext: Rt, useCallback: ft, useContext: ft, useEffect: ft, useImperativeHandle: ft, useInsertionEffect: ft, useLayoutEffect: ft, useMemo: ft, useReducer: ft, useRef: ft, useState: ft, useDebugValue: ft, useDeferredValue: ft, useTransition: ft, useMutableSource: ft, useSyncExternalStore: ft, useId: ft, unstable_isNewReconciler: !1 }, kd = { readContext: Rt, useCallback: function(e, t) {
    return Xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Rt, useEffect: tu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ji(
      4194308,
      4,
      iu.bind(null, t, e),
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = yd.bind(null, Ke, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Zo, useDebugValue: Al, useDeferredValue: function(e) {
    return Xt().memoizedState = e;
  }, useTransition: function() {
    var e = Zo(!1), t = e[0];
    return e = vd.bind(null, e[1]), Xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ke, s = Xt();
    if ($e) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), st === null) throw Error(l(349));
      (On & 30) !== 0 || qo(r, t, n);
    }
    s.memoizedState = n;
    var a = { value: n, getSnapshot: t };
    return s.queue = a, tu(Xo.bind(
      null,
      r,
      a,
      e
    ), [e]), r.flags |= 2048, Zr(9, Yo.bind(null, r, a, n, t), void 0, null), n;
  }, useId: function() {
    var e = Xt(), t = st.identifierPrefix;
    if ($e) {
      var n = sn, r = rn;
      n = (r & ~(1 << 32 - Ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = md++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, xd = {
    readContext: Rt,
    useCallback: lu,
    useContext: Rt,
    useEffect: Ll,
    useImperativeHandle: su,
    useInsertionEffect: nu,
    useLayoutEffect: ru,
    useMemo: au,
    useReducer: Rl,
    useRef: eu,
    useState: function() {
      return Rl(br);
    },
    useDebugValue: Al,
    useDeferredValue: function(e) {
      var t = Pt();
      return ou(t, nt.memoizedState, e);
    },
    useTransition: function() {
      var e = Rl(br)[0], t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Qo,
    useSyncExternalStore: Go,
    useId: uu,
    unstable_isNewReconciler: !1
  }, wd = { readContext: Rt, useCallback: lu, useContext: Rt, useEffect: Ll, useImperativeHandle: su, useInsertionEffect: nu, useLayoutEffect: ru, useMemo: au, useReducer: Pl, useRef: eu, useState: function() {
    return Pl(br);
  }, useDebugValue: Al, useDeferredValue: function(e) {
    var t = Pt();
    return nt === null ? t.memoizedState = e : ou(t, nt.memoizedState, e);
  }, useTransition: function() {
    var e = Pl(br)[0], t = Pt().memoizedState;
    return [e, t];
  }, useMutableSource: Qo, useSyncExternalStore: Go, useId: uu, unstable_isNewReconciler: !1 };
  function Dt(e, t) {
    if (e && e.defaultProps) {
      t = V({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Il(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var es = { isMounted: function(e) {
    return (e = e._reactInternals) ? Rn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = vt(), s = _n(e), a = an(r, s);
    a.payload = t, n != null && (a.callback = n), t = wn(e, a, s), t !== null && (Vt(t, e, s, r), Qi(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = vt(), s = _n(e), a = an(r, s);
    a.tag = 1, a.payload = t, n != null && (a.callback = n), t = wn(e, a, s), t !== null && (Vt(t, e, s, r), Qi(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = vt(), r = _n(e), s = an(n, r);
    s.tag = 2, t != null && (s.callback = t), t = wn(e, s, r), t !== null && (Vt(t, e, r, n), Qi(t, e, r));
  } };
  function hu(e, t, n, r, s, a, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, f) : t.prototype && t.prototype.isPureReactComponent ? !$r(n, r) || !$r(s, a) : !0;
  }
  function pu(e, t, n) {
    var r = !1, s = gn, a = t.contextType;
    return typeof a == "object" && a !== null ? a = Rt(a) : (s = gt(t) ? Ln : ct.current, r = t.contextTypes, a = (r = r != null) ? sr(e, s) : gn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = es, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
  }
  function mu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && es.enqueueReplaceState(t, t.state, null);
  }
  function Fl(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, wl(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? s.context = Rt(a) : (a = gt(t) ? Ln : ct.current, s.context = sr(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Il(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && es.enqueueReplaceState(s, s.state, null), Gi(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
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
  function zl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ol(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Sd = typeof WeakMap == "function" ? WeakMap : Map;
  function vu(e, t, n) {
    n = an(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      as || (as = !0, bl = r), Ol(e, t);
    }, n;
  }
  function yu(e, t, n) {
    n = an(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = t.value;
      n.payload = function() {
        return r(s);
      }, n.callback = function() {
        Ol(e, t);
      };
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
      Ol(e, t), typeof r != "function" && (jn === null ? jn = /* @__PURE__ */ new Set([this]) : jn.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function gu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Sd();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (s.add(n), e = zd.bind(null, e, t, n), t.then(e, e));
  }
  function ku(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function xu(e, t, n, r, s) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = an(-1, 1), t.tag = 2, wn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = s, e);
  }
  var jd = oe.ReactCurrentOwner, kt = !1;
  function mt(e, t, n, r) {
    t.child = e === null ? Bo(t, null, n, r) : ur(t, e.child, n, r);
  }
  function wu(e, t, n, r, s) {
    n = n.render;
    var a = t.ref;
    return fr(t, s), r = Ml(e, t, n, r, a, s), n = Cl(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, on(e, t, s)) : ($e && n && fl(t), t.flags |= 1, mt(e, t, r, s), t.child);
  }
  function Su(e, t, n, r, s) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" && !sa(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, ju(e, t, a, r, s)) : (e = hs(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (a = e.child, (e.lanes & s) === 0) {
      var f = a.memoizedProps;
      if (n = n.compare, n = n !== null ? n : $r, n(f, r) && e.ref === t.ref) return on(e, t, s);
    }
    return t.flags |= 1, e = Tn(a, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ju(e, t, n, r, s) {
    if (e !== null) {
      var a = e.memoizedProps;
      if ($r(a, r) && e.ref === t.ref) if (kt = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) (e.flags & 131072) !== 0 && (kt = !0);
      else return t.lanes = e.lanes, on(e, t, s);
    }
    return Dl(e, t, n, r, s);
  }
  function Eu(e, t, n) {
    var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ie(mr, Nt), Nt |= n;
    else {
      if ((n & 1073741824) === 0) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ie(mr, Nt), Nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, Ie(mr, Nt), Nt |= r;
    }
    else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Ie(mr, Nt), Nt |= r;
    return mt(e, t, s, n), t.child;
  }
  function _u(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Dl(e, t, n, r, s) {
    var a = gt(n) ? Ln : ct.current;
    return a = sr(t, a), fr(t, s), n = Ml(e, t, n, r, a, s), r = Cl(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, on(e, t, s)) : ($e && r && fl(t), t.flags |= 1, mt(e, t, n, s), t.child);
  }
  function Nu(e, t, n, r, s) {
    if (gt(n)) {
      var a = !0;
      Di(t);
    } else a = !1;
    if (fr(t, s), t.stateNode === null) ns(e, t), pu(t, n, r), Fl(t, n, r, s), r = !0;
    else if (e === null) {
      var f = t.stateNode, p = t.memoizedProps;
      f.props = p;
      var m = f.context, j = n.contextType;
      typeof j == "object" && j !== null ? j = Rt(j) : (j = gt(n) ? Ln : ct.current, j = sr(t, j));
      var R = n.getDerivedStateFromProps, A = typeof R == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      A || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p !== r || m !== j) && mu(t, f, r, j), xn = !1;
      var C = t.memoizedState;
      f.state = C, Gi(t, r, f, s), m = t.memoizedState, p !== r || C !== m || yt.current || xn ? (typeof R == "function" && (Il(t, n, R, r), m = t.memoizedState), (p = xn || hu(t, n, p, r, C, m, j)) ? (A || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = m), f.props = r, f.state = m, f.context = j, r = p) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      f = t.stateNode, Uo(e, t), p = t.memoizedProps, j = t.type === t.elementType ? p : Dt(t.type, p), f.props = j, A = t.pendingProps, C = f.context, m = n.contextType, typeof m == "object" && m !== null ? m = Rt(m) : (m = gt(n) ? Ln : ct.current, m = sr(t, m));
      var K = n.getDerivedStateFromProps;
      (R = typeof K == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p !== A || C !== m) && mu(t, f, r, m), xn = !1, C = t.memoizedState, f.state = C, Gi(t, r, f, s);
      var G = t.memoizedState;
      p !== A || C !== G || yt.current || xn ? (typeof K == "function" && (Il(t, n, K, r), G = t.memoizedState), (j = xn || hu(t, n, j, r, C, G, m) || !1) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, G, m), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(r, G, m)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = G), f.props = r, f.state = G, f.context = m, r = j) : (typeof f.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return $l(e, t, n, r, a, s);
  }
  function $l(e, t, n, r, s, a) {
    _u(e, t);
    var f = (t.flags & 128) !== 0;
    if (!r && !f) return s && Po(t, n, !1), on(e, t, a);
    r = t.stateNode, jd.current = t;
    var p = f && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && f ? (t.child = ur(t, e.child, null, a), t.child = ur(t, null, p, a)) : mt(e, t, p, a), t.memoizedState = r.state, s && Po(t, n, !0), t.child;
  }
  function Tu(e) {
    var t = e.stateNode;
    t.pendingContext ? Co(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Co(e, t.context, !1), Sl(e, t.containerInfo);
  }
  function Mu(e, t, n, r, s) {
    return or(), ml(s), t.flags |= 256, mt(e, t, n, r), t.child;
  }
  var Bl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Cu(e, t, n) {
    var r = t.pendingProps, s = We.current, a = !1, f = (t.flags & 128) !== 0, p;
    if ((p = f) || (p = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), p ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Ie(We, s & 1), e === null)
      return pl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, f = { mode: "hidden", children: f }, (r & 1) === 0 && a !== null ? (a.childLanes = 0, a.pendingProps = f) : a = ps(f, r, 0, null), e = Un(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Vl(n), t.memoizedState = Bl, e) : Ul(t, f));
    if (s = e.memoizedState, s !== null && (p = s.dehydrated, p !== null)) return Ed(e, t, f, r, p, s, n);
    if (a) {
      a = r.fallback, f = t.mode, s = e.child, p = s.sibling;
      var m = { mode: "hidden", children: r.children };
      return (f & 1) === 0 && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = m, t.deletions = null) : (r = Tn(s, m), r.subtreeFlags = s.subtreeFlags & 14680064), p !== null ? a = Tn(p, a) : (a = Un(a, f, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, f = e.child.memoizedState, f = f === null ? Vl(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, a.memoizedState = f, a.childLanes = e.childLanes & ~n, t.memoizedState = Bl, r;
    }
    return a = e.child, e = a.sibling, r = Tn(a, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ul(e, t) {
    return t = ps({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ts(e, t, n, r) {
    return r !== null && ml(r), ur(t, e.child, null, n), e = Ul(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ed(e, t, n, r, s, a, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = zl(Error(l(422))), ts(e, t, f, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = ps({ mode: "visible", children: r.children }, s, 0, null), a = Un(a, s, f, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, (t.mode & 1) !== 0 && ur(t, e.child, null, f), t.child.memoizedState = Vl(f), t.memoizedState = Bl, a);
    if ((t.mode & 1) === 0) return ts(e, t, f, null);
    if (s.data === "$!") {
      if (r = s.nextSibling && s.nextSibling.dataset, r) var p = r.dgst;
      return r = p, a = Error(l(419)), r = zl(a, r, void 0), ts(e, t, f, r);
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
      return ia(), r = zl(Error(l(421))), ts(e, t, f, r);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Od.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, _t = vn(s.nextSibling), Et = t, $e = !0, Ot = null, e !== null && (Mt[Ct++] = rn, Mt[Ct++] = sn, Mt[Ct++] = An, rn = e.id, sn = e.overflow, An = t), t = Ul(t, r.children), t.flags |= 4096, t);
  }
  function Ru(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), kl(e.return, t, n);
  }
  function Hl(e, t, n, r, s) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
  }
  function Pu(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, a = r.tail;
    if (mt(e, t, r.children, n), r = We.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t);
        else if (e.tag === 19) Ru(e, n, t);
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
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && qi(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Hl(t, !1, s, n, a);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && qi(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        Hl(t, !0, n, null, a);
        break;
      case "together":
        Hl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ns(e, t) {
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
  function _d(e, t, n) {
    switch (t.tag) {
      case 3:
        Tu(t), or();
        break;
      case 5:
        Ko(t);
        break;
      case 1:
        gt(t.type) && Di(t);
        break;
      case 4:
        Sl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, s = t.memoizedProps.value;
        Ie(Wi, r._currentValue), r._currentValue = s;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ie(We, We.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Cu(e, t, n) : (Ie(We, We.current & 1), e = on(e, t, n), e !== null ? e.sibling : null);
        Ie(We, We.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Pu(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ie(We, We.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Eu(e, t, n);
    }
    return on(e, t, n);
  }
  var Lu, Wl, Au, Iu;
  Lu = function(e, t) {
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
  }, Wl = function() {
  }, Au = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
      e = t.stateNode, zn(Yt.current);
      var a = null;
      switch (n) {
        case "input":
          s = te(e, s), r = te(e, r), a = [];
          break;
        case "select":
          s = V({}, s, { value: void 0 }), r = V({}, r, { value: void 0 }), a = [];
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
      for (j in s) if (!r.hasOwnProperty(j) && s.hasOwnProperty(j) && s[j] != null) if (j === "style") {
        var p = s[j];
        for (f in p) p.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else j !== "dangerouslySetInnerHTML" && j !== "children" && j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && j !== "autoFocus" && (d.hasOwnProperty(j) ? a || (a = []) : (a = a || []).push(j, null));
      for (j in r) {
        var m = r[j];
        if (p = s?.[j], r.hasOwnProperty(j) && m !== p && (m != null || p != null)) if (j === "style") if (p) {
          for (f in p) !p.hasOwnProperty(f) || m && m.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in m) m.hasOwnProperty(f) && p[f] !== m[f] && (n || (n = {}), n[f] = m[f]);
        } else n || (a || (a = []), a.push(
          j,
          n
        )), n = m;
        else j === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, p = p ? p.__html : void 0, m != null && p !== m && (a = a || []).push(j, m)) : j === "children" ? typeof m != "string" && typeof m != "number" || (a = a || []).push(j, "" + m) : j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && (d.hasOwnProperty(j) ? (m != null && j === "onScroll" && ze("scroll", e), a || p === m || (a = [])) : (a = a || []).push(j, m));
      }
      n && (a = a || []).push("style", n);
      var j = a;
      (t.updateQueue = j) && (t.flags |= 4);
    }
  }, Iu = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ei(e, t) {
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
  function Nd(e, t, n) {
    var r = t.pendingProps;
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
        return dt(t), null;
      case 1:
        return gt(t.type) && Oi(), dt(t), null;
      case 3:
        return r = t.stateNode, dr(), Oe(yt), Oe(ct), _l(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ui(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ot !== null && (ta(Ot), Ot = null))), Wl(e, t), dt(t), null;
      case 5:
        jl(t);
        var s = zn(Yr.current);
        if (n = t.type, e !== null && t.stateNode != null) Au(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return dt(t), null;
          }
          if (e = zn(Yt.current), Ui(t)) {
            r = t.stateNode, n = t.type;
            var a = t.memoizedProps;
            switch (r[qt] = t, r[Wr] = a, e = (t.mode & 1) !== 0, n) {
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
                for (s = 0; s < Vr.length; s++) ze(Vr[s], r);
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
                ye(r, a), ze("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!a.multiple }, ze("invalid", r);
                break;
              case "textarea":
                He(r, a), ze("invalid", r);
            }
            ge(n, a), s = null;
            for (var f in a) if (a.hasOwnProperty(f)) {
              var p = a[f];
              f === "children" ? typeof p == "string" ? r.textContent !== p && (a.suppressHydrationWarning !== !0 && Ii(r.textContent, p, e), s = ["children", p]) : typeof p == "number" && r.textContent !== "" + p && (a.suppressHydrationWarning !== !0 && Ii(
                r.textContent,
                p,
                e
              ), s = ["children", "" + p]) : d.hasOwnProperty(f) && p != null && f === "onScroll" && ze("scroll", r);
            }
            switch (n) {
              case "input":
                ce(r), qe(r, a, !0);
                break;
              case "textarea":
                ce(r), Je(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (r.onclick = Fi);
            }
            r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            f = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ht(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = f.createElement(n, { is: r.is }) : (e = f.createElement(n), n === "select" && (f = e, r.multiple ? f.multiple = !0 : r.size && (f.size = r.size))) : e = f.createElementNS(e, n), e[qt] = t, e[Wr] = r, Lu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = xe(n, r), n) {
                case "dialog":
                  ze("cancel", e), ze("close", e), s = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ze("load", e), s = r;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < Vr.length; s++) ze(Vr[s], e);
                  s = r;
                  break;
                case "source":
                  ze("error", e), s = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ze(
                    "error",
                    e
                  ), ze("load", e), s = r;
                  break;
                case "details":
                  ze("toggle", e), s = r;
                  break;
                case "input":
                  ye(e, r), s = te(e, r), ze("invalid", e);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, s = V({}, r, { value: void 0 }), ze("invalid", e);
                  break;
                case "textarea":
                  He(e, r), s = Tt(e, r), ze("invalid", e);
                  break;
                default:
                  s = r;
              }
              ge(n, s), p = s;
              for (a in p) if (p.hasOwnProperty(a)) {
                var m = p[a];
                a === "style" ? Zt(e, m) : a === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, m != null && bt(e, m)) : a === "children" ? typeof m == "string" ? (n !== "textarea" || m !== "") && Wt(e, m) : typeof m == "number" && Wt(e, "" + m) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (d.hasOwnProperty(a) ? m != null && a === "onScroll" && ze("scroll", e) : m != null && J(e, a, m, f));
              }
              switch (n) {
                case "input":
                  ce(e), qe(e, r, !1);
                  break;
                case "textarea":
                  ce(e), Je(e);
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
        if (e && t.stateNode != null) Iu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(l(166));
          if (n = zn(Yr.current), zn(Yt.current), Ui(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[qt] = t, (a = r.nodeValue !== n) && (e = Et, e !== null)) switch (e.tag) {
              case 3:
                Ii(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ii(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            a && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qt] = t, t.stateNode = r;
        }
        return dt(t), null;
      case 13:
        if (Oe(We), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if ($e && _t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Oo(), or(), t.flags |= 98560, a = !1;
          else if (a = Ui(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(l(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(l(317));
              a[qt] = t;
            } else or(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dt(t), a = !1;
          } else Ot !== null && (ta(Ot), Ot = null), a = !0;
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (We.current & 1) !== 0 ? rt === 0 && (rt = 3) : ia())), t.updateQueue !== null && (t.flags |= 4), dt(t), null);
      case 4:
        return dr(), Wl(e, t), e === null && Ur(t.stateNode.containerInfo), dt(t), null;
      case 10:
        return gl(t.type._context), dt(t), null;
      case 17:
        return gt(t.type) && Oi(), dt(t), null;
      case 19:
        if (Oe(We), a = t.memoizedState, a === null) return dt(t), null;
        if (r = (t.flags & 128) !== 0, f = a.rendering, f === null) if (r) ei(a, !1);
        else {
          if (rt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = qi(e), f !== null) {
              for (t.flags |= 128, ei(a, !1), r = f.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, f = a.alternate, f === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = f.childLanes, a.lanes = f.lanes, a.child = f.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = f.memoizedProps, a.memoizedState = f.memoizedState, a.updateQueue = f.updateQueue, a.type = f.type, e = f.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ie(We, We.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          a.tail !== null && be() > vr && (t.flags |= 128, r = !0, ei(a, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = qi(f), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ei(a, !0), a.tail === null && a.tailMode === "hidden" && !f.alternate && !$e) return dt(t), null;
          } else 2 * be() - a.renderingStartTime > vr && n !== 1073741824 && (t.flags |= 128, r = !0, ei(a, !1), t.lanes = 4194304);
          a.isBackwards ? (f.sibling = t.child, t.child = f) : (n = a.last, n !== null ? n.sibling = f : t.child = f, a.last = f);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = be(), t.sibling = null, n = We.current, Ie(We, r ? n & 1 | 2 : n & 1), t) : (dt(t), null);
      case 22:
      case 23:
        return ra(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Nt & 1073741824) !== 0 && (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Td(e, t) {
    switch (dl(t), t.tag) {
      case 1:
        return gt(t.type) && Oi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return dr(), Oe(yt), Oe(ct), _l(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return jl(t), null;
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
        return gl(t.type._context), null;
      case 22:
      case 23:
        return ra(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var rs = !1, ht = !1, Md = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
  function pr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ye(e, t, r);
    }
    else n.current = null;
  }
  function Kl(e, t, n) {
    try {
      n();
    } catch (r) {
      Ye(e, t, r);
    }
  }
  var Fu = !1;
  function Cd(e, t) {
    if (rl = ji, e = ho(), Ys(e)) {
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
          var f = 0, p = -1, m = -1, j = 0, R = 0, A = e, C = null;
          t: for (; ; ) {
            for (var K; A !== n || s !== 0 && A.nodeType !== 3 || (p = f + s), A !== a || r !== 0 && A.nodeType !== 3 || (m = f + r), A.nodeType === 3 && (f += A.nodeValue.length), (K = A.firstChild) !== null; )
              C = A, A = K;
            for (; ; ) {
              if (A === e) break t;
              if (C === n && ++j === s && (p = f), C === a && ++R === r && (m = f), (K = A.nextSibling) !== null) break;
              A = C, C = A.parentNode;
            }
            A = K;
          }
          n = p === -1 || m === -1 ? null : { start: p, end: m };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (il = { focusedElem: e, selectionRange: n }, ji = !1, Q = t; Q !== null; ) if (t = Q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Q = e;
    else for (; Q !== null; ) {
      t = Q;
      try {
        var G = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (G !== null) {
              var q = G.memoizedProps, Ze = G.memoizedState, x = t.stateNode, y = x.getSnapshotBeforeUpdate(t.elementType === t.type ? q : Dt(t.type, q), Ze);
              x.__reactInternalSnapshotBeforeUpdate = y;
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
        e.return = t.return, Q = e;
        break;
      }
      Q = t.return;
    }
    return G = Fu, Fu = !1, G;
  }
  function ti(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & e) === e) {
          var a = s.destroy;
          s.destroy = void 0, a !== void 0 && Kl(t, n, a);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function is(e, t) {
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
  function Ql(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function zu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, zu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qt], delete t[Wr], delete t[ol], delete t[fd], delete t[dd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Ou(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Du(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ou(e.return)) return null;
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
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Fi));
    else if (r !== 4 && (e = e.child, e !== null)) for (Gl(e, t, n), e = e.sibling; e !== null; ) Gl(e, t, n), e = e.sibling;
  }
  function ql(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ql(e, t, n), e = e.sibling; e !== null; ) ql(e, t, n), e = e.sibling;
  }
  var at = null, $t = !1;
  function Sn(e, t, n) {
    for (n = n.child; n !== null; ) $u(e, t, n), n = n.sibling;
  }
  function $u(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(yi, n);
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
        at !== null && ($t ? (e = at, n = n.stateNode, e.nodeType === 8 ? al(e.parentNode, n) : e.nodeType === 1 && al(e, n), Ar(e)) : al(at, n.stateNode));
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
            a = a.tag, f !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Kl(n, t, f), s = s.next;
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
  function Bu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Md()), t.forEach(function(r) {
        var s = Dd.bind(null, e, r);
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
        $u(a, f, s), at = null, $t = !1;
        var m = s.alternate;
        m !== null && (m.return = null), s.return = null;
      } catch (j) {
        Ye(s, t, j);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Vu(t, e), t = t.sibling;
  }
  function Vu(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Bt(t, e), Jt(e), r & 4) {
          try {
            ti(3, e, e.return), is(3, e);
          } catch (q) {
            Ye(e, e.return, q);
          }
          try {
            ti(5, e, e.return);
          } catch (q) {
            Ye(e, e.return, q);
          }
        }
        break;
      case 1:
        Bt(t, e), Jt(e), r & 512 && n !== null && pr(n, n.return);
        break;
      case 5:
        if (Bt(t, e), Jt(e), r & 512 && n !== null && pr(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            Wt(s, "");
          } catch (q) {
            Ye(e, e.return, q);
          }
        }
        if (r & 4 && (s = e.stateNode, s != null)) {
          var a = e.memoizedProps, f = n !== null ? n.memoizedProps : a, p = e.type, m = e.updateQueue;
          if (e.updateQueue = null, m !== null) try {
            p === "input" && a.type === "radio" && a.name != null && ke(s, a), xe(p, f);
            var j = xe(p, a);
            for (f = 0; f < m.length; f += 2) {
              var R = m[f], A = m[f + 1];
              R === "style" ? Zt(s, A) : R === "dangerouslySetInnerHTML" ? bt(s, A) : R === "children" ? Wt(s, A) : J(s, R, A, j);
            }
            switch (p) {
              case "input":
                Te(s, a);
                break;
              case "textarea":
                Me(s, a);
                break;
              case "select":
                var C = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!a.multiple;
                var K = a.value;
                K != null ? Xe(s, !!a.multiple, K, !1) : C !== !!a.multiple && (a.defaultValue != null ? Xe(
                  s,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                ) : Xe(s, !!a.multiple, a.multiple ? [] : "", !1));
            }
            s[Wr] = a;
          } catch (q) {
            Ye(e, e.return, q);
          }
        }
        break;
      case 6:
        if (Bt(t, e), Jt(e), r & 4) {
          if (e.stateNode === null) throw Error(l(162));
          s = e.stateNode, a = e.memoizedProps;
          try {
            s.nodeValue = a;
          } catch (q) {
            Ye(e, e.return, q);
          }
        }
        break;
      case 3:
        if (Bt(t, e), Jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ar(t.containerInfo);
        } catch (q) {
          Ye(e, e.return, q);
        }
        break;
      case 4:
        Bt(t, e), Jt(e);
        break;
      case 13:
        Bt(t, e), Jt(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (Jl = be())), r & 4 && Bu(e);
        break;
      case 22:
        if (R = n !== null && n.memoizedState !== null, e.mode & 1 ? (ht = (j = ht) || R, Bt(t, e), ht = j) : Bt(t, e), Jt(e), r & 8192) {
          if (j = e.memoizedState !== null, (e.stateNode.isHidden = j) && !R && (e.mode & 1) !== 0) for (Q = e, R = e.child; R !== null; ) {
            for (A = Q = R; Q !== null; ) {
              switch (C = Q, K = C.child, C.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ti(4, C, C.return);
                  break;
                case 1:
                  pr(C, C.return);
                  var G = C.stateNode;
                  if (typeof G.componentWillUnmount == "function") {
                    r = C, n = C.return;
                    try {
                      t = r, G.props = t.memoizedProps, G.state = t.memoizedState, G.componentWillUnmount();
                    } catch (q) {
                      Ye(r, n, q);
                    }
                  }
                  break;
                case 5:
                  pr(C, C.return);
                  break;
                case 22:
                  if (C.memoizedState !== null) {
                    Wu(A);
                    continue;
                  }
              }
              K !== null ? (K.return = C, Q = K) : Wu(A);
            }
            R = R.sibling;
          }
          e: for (R = null, A = e; ; ) {
            if (A.tag === 5) {
              if (R === null) {
                R = A;
                try {
                  s = A.stateNode, j ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (p = A.stateNode, m = A.memoizedProps.style, f = m != null && m.hasOwnProperty("display") ? m.display : null, p.style.display = le("display", f));
                } catch (q) {
                  Ye(e, e.return, q);
                }
              }
            } else if (A.tag === 6) {
              if (R === null) try {
                A.stateNode.nodeValue = j ? "" : A.memoizedProps;
              } catch (q) {
                Ye(e, e.return, q);
              }
            } else if ((A.tag !== 22 && A.tag !== 23 || A.memoizedState === null || A === e) && A.child !== null) {
              A.child.return = A, A = A.child;
              continue;
            }
            if (A === e) break e;
            for (; A.sibling === null; ) {
              if (A.return === null || A.return === e) break e;
              R === A && (R = null), A = A.return;
            }
            R === A && (R = null), A.sibling.return = A.return, A = A.sibling;
          }
        }
        break;
      case 19:
        Bt(t, e), Jt(e), r & 4 && Bu(e);
        break;
      case 21:
        break;
      default:
        Bt(
          t,
          e
        ), Jt(e);
    }
  }
  function Jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ou(n)) {
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
            var a = Du(e);
            ql(e, a, s);
            break;
          case 3:
          case 4:
            var f = r.stateNode.containerInfo, p = Du(e);
            Gl(e, p, f);
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
  function Rd(e, t, n) {
    Q = e, Uu(e);
  }
  function Uu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var s = Q, a = s.child;
      if (s.tag === 22 && r) {
        var f = s.memoizedState !== null || rs;
        if (!f) {
          var p = s.alternate, m = p !== null && p.memoizedState !== null || ht;
          p = rs;
          var j = ht;
          if (rs = f, (ht = m) && !j) for (Q = s; Q !== null; ) f = Q, m = f.child, f.tag === 22 && f.memoizedState !== null ? Ku(s) : m !== null ? (m.return = f, Q = m) : Ku(s);
          for (; a !== null; ) Q = a, Uu(a), a = a.sibling;
          Q = s, rs = p, ht = j;
        }
        Hu(e);
      } else (s.subtreeFlags & 8772) !== 0 && a !== null ? (a.return = s, Q = a) : Hu(e);
    }
  }
  function Hu(e) {
    for (; Q !== null; ) {
      var t = Q;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ht || is(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ht) if (n === null) r.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : Dt(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var a = t.updateQueue;
              a !== null && Wo(t, a, r);
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
                Wo(t, f, n);
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
                var j = t.alternate;
                if (j !== null) {
                  var R = j.memoizedState;
                  if (R !== null) {
                    var A = R.dehydrated;
                    A !== null && Ar(A);
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
          ht || t.flags & 512 && Ql(t);
        } catch (C) {
          Ye(t, t.return, C);
        }
      }
      if (t === e) {
        Q = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, Q = n;
        break;
      }
      Q = t.return;
    }
  }
  function Wu(e) {
    for (; Q !== null; ) {
      var t = Q;
      if (t === e) {
        Q = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, Q = n;
        break;
      }
      Q = t.return;
    }
  }
  function Ku(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              is(4, t);
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
              Ql(t);
            } catch (m) {
              Ye(t, a, m);
            }
            break;
          case 5:
            var f = t.return;
            try {
              Ql(t);
            } catch (m) {
              Ye(t, f, m);
            }
        }
      } catch (m) {
        Ye(t, t.return, m);
      }
      if (t === e) {
        Q = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        p.return = t.return, Q = p;
        break;
      }
      Q = t.return;
    }
  }
  var Pd = Math.ceil, ss = oe.ReactCurrentDispatcher, Yl = oe.ReactCurrentOwner, Lt = oe.ReactCurrentBatchConfig, Ee = 0, st = null, tt = null, ot = 0, Nt = 0, mr = yn(0), rt = 0, ni = null, Dn = 0, ls = 0, Xl = 0, ri = null, xt = null, Jl = 0, vr = 1 / 0, un = null, as = !1, bl = null, jn = null, os = !1, En = null, us = 0, ii = 0, Zl = null, cs = -1, fs = 0;
  function vt() {
    return (Ee & 6) !== 0 ? be() : cs !== -1 ? cs : cs = be();
  }
  function _n(e) {
    return (e.mode & 1) === 0 ? 1 : (Ee & 2) !== 0 && ot !== 0 ? ot & -ot : pd.transition !== null ? (fs === 0 && (fs = Oa()), fs) : (e = Ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qa(e.type)), e);
  }
  function Vt(e, t, n, r) {
    if (50 < ii) throw ii = 0, Zl = null, Error(l(185));
    Mr(e, n, r), ((Ee & 2) === 0 || e !== st) && (e === st && ((Ee & 2) === 0 && (ls |= n), rt === 4 && Nn(e, ot)), wt(e, r), n === 1 && Ee === 0 && (t.mode & 1) === 0 && (vr = be() + 500, $i && kn()));
  }
  function wt(e, t) {
    var n = e.callbackNode;
    pf(e, t);
    var r = xi(e, e === st ? ot : 0);
    if (r === 0) n !== null && Ia(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Ia(n), t === 1) e.tag === 0 ? hd(Gu.bind(null, e)) : Lo(Gu.bind(null, e)), ud(function() {
        (Ee & 6) === 0 && kn();
      }), n = null;
      else {
        switch (Da(r)) {
          case 1:
            n = Ls;
            break;
          case 4:
            n = Fa;
            break;
          case 16:
            n = vi;
            break;
          case 536870912:
            n = za;
            break;
          default:
            n = vi;
        }
        n = tc(n, Qu.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Qu(e, t) {
    if (cs = -1, fs = 0, (Ee & 6) !== 0) throw Error(l(327));
    var n = e.callbackNode;
    if (yr() && e.callbackNode !== n) return null;
    var r = xi(e, e === st ? ot : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ds(e, r);
    else {
      t = r;
      var s = Ee;
      Ee |= 2;
      var a = Yu();
      (st !== e || ot !== t) && (un = null, vr = be() + 500, Bn(e, t));
      do
        try {
          Id();
          break;
        } catch (p) {
          qu(e, p);
        }
      while (!0);
      yl(), ss.current = a, Ee = s, tt !== null ? t = 0 : (st = null, ot = 0, t = rt);
    }
    if (t !== 0) {
      if (t === 2 && (s = As(e), s !== 0 && (r = s, t = ea(e, s))), t === 1) throw n = ni, Bn(e, 0), Nn(e, r), wt(e, be()), n;
      if (t === 6) Nn(e, r);
      else {
        if (s = e.current.alternate, (r & 30) === 0 && !Ld(s) && (t = ds(e, r), t === 2 && (a = As(e), a !== 0 && (r = a, t = ea(e, a))), t === 1)) throw n = ni, Bn(e, 0), Nn(e, r), wt(e, be()), n;
        switch (e.finishedWork = s, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Vn(e, xt, un);
            break;
          case 3:
            if (Nn(e, r), (r & 130023424) === r && (t = Jl + 500 - be(), 10 < t)) {
              if (xi(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & r) !== r) {
                vt(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = ll(Vn.bind(null, e, xt, un), t);
              break;
            }
            Vn(e, xt, un);
            break;
          case 4:
            if (Nn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var f = 31 - Ft(r);
              a = 1 << f, f = t[f], f > s && (s = f), r &= ~a;
            }
            if (r = s, r = be() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pd(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ll(Vn.bind(null, e, xt, un), r);
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
    return wt(e, be()), e.callbackNode === n ? Qu.bind(null, e) : null;
  }
  function ea(e, t) {
    var n = ri;
    return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256), e = ds(e, t), e !== 2 && (t = xt, xt = n, t !== null && ta(t)), e;
  }
  function ta(e) {
    xt === null ? xt = e : xt.push.apply(xt, e);
  }
  function Ld(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var s = n[r], a = s.getSnapshot;
          s = s.value;
          try {
            if (!zt(a(), s)) return !1;
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
    for (t &= ~Xl, t &= ~ls, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ft(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Gu(e) {
    if ((Ee & 6) !== 0) throw Error(l(327));
    yr();
    var t = xi(e, 0);
    if ((t & 1) === 0) return wt(e, be()), null;
    var n = ds(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = As(e);
      r !== 0 && (t = r, n = ea(e, r));
    }
    if (n === 1) throw n = ni, Bn(e, 0), Nn(e, t), wt(e, be()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vn(e, xt, un), wt(e, be()), null;
  }
  function na(e, t) {
    var n = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      Ee = n, Ee === 0 && (vr = be() + 500, $i && kn());
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
  function ra() {
    Nt = mr.current, Oe(mr);
  }
  function Bn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, od(n)), tt !== null) for (n = tt.return; n !== null; ) {
      var r = n;
      switch (dl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Oi();
          break;
        case 3:
          dr(), Oe(yt), Oe(ct), _l();
          break;
        case 5:
          jl(r);
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
          gl(r.type._context);
          break;
        case 22:
        case 23:
          ra();
      }
      n = n.return;
    }
    if (st = e, tt = e = Tn(e.current, null), ot = Nt = t, rt = 0, ni = null, Xl = ls = Dn = 0, xt = ri = null, Fn !== null) {
      for (t = 0; t < Fn.length; t++) if (n = Fn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var s = r.next, a = n.pending;
        if (a !== null) {
          var f = a.next;
          a.next = s, r.next = f;
        }
        n.pending = r;
      }
      Fn = null;
    }
    return e;
  }
  function qu(e, t) {
    do {
      var n = tt;
      try {
        if (yl(), Yi.current = Zi, Xi) {
          for (var r = Ke.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), r = r.next;
          }
          Xi = !1;
        }
        if (On = 0, it = nt = Ke = null, Xr = !1, Jr = 0, Yl.current = null, n === null || n.return === null) {
          rt = 1, ni = t, tt = null;
          break;
        }
        e: {
          var a = e, f = n.return, p = n, m = t;
          if (t = ot, p.flags |= 32768, m !== null && typeof m == "object" && typeof m.then == "function") {
            var j = m, R = p, A = R.tag;
            if ((R.mode & 1) === 0 && (A === 0 || A === 11 || A === 15)) {
              var C = R.alternate;
              C ? (R.updateQueue = C.updateQueue, R.memoizedState = C.memoizedState, R.lanes = C.lanes) : (R.updateQueue = null, R.memoizedState = null);
            }
            var K = ku(f);
            if (K !== null) {
              K.flags &= -257, xu(K, f, p, a, t), K.mode & 1 && gu(a, j, t), t = K, m = j;
              var G = t.updateQueue;
              if (G === null) {
                var q = /* @__PURE__ */ new Set();
                q.add(m), t.updateQueue = q;
              } else G.add(m);
              break e;
            } else {
              if ((t & 1) === 0) {
                gu(a, j, t), ia();
                break e;
              }
              m = Error(l(426));
            }
          } else if ($e && p.mode & 1) {
            var Ze = ku(f);
            if (Ze !== null) {
              (Ze.flags & 65536) === 0 && (Ze.flags |= 256), xu(Ze, f, p, a, t), ml(hr(m, p));
              break e;
            }
          }
          a = m = hr(m, p), rt !== 4 && (rt = 2), ri === null ? ri = [a] : ri.push(a), a = f;
          do {
            switch (a.tag) {
              case 3:
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var x = vu(a, m, t);
                Ho(a, x);
                break e;
              case 1:
                p = m;
                var y = a.type, S = a.stateNode;
                if ((a.flags & 128) === 0 && (typeof y.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (jn === null || !jn.has(S)))) {
                  a.flags |= 65536, t &= -t, a.lanes |= t;
                  var D = yu(a, p, t);
                  Ho(a, D);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        Ju(n);
      } catch (X) {
        t = X, tt === n && n !== null && (tt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Yu() {
    var e = ss.current;
    return ss.current = Zi, e === null ? Zi : e;
  }
  function ia() {
    (rt === 0 || rt === 3 || rt === 2) && (rt = 4), st === null || (Dn & 268435455) === 0 && (ls & 268435455) === 0 || Nn(st, ot);
  }
  function ds(e, t) {
    var n = Ee;
    Ee |= 2;
    var r = Yu();
    (st !== e || ot !== t) && (un = null, Bn(e, t));
    do
      try {
        Ad();
        break;
      } catch (s) {
        qu(e, s);
      }
    while (!0);
    if (yl(), Ee = n, ss.current = r, tt !== null) throw Error(l(261));
    return st = null, ot = 0, rt;
  }
  function Ad() {
    for (; tt !== null; ) Xu(tt);
  }
  function Id() {
    for (; tt !== null && !sf(); ) Xu(tt);
  }
  function Xu(e) {
    var t = ec(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, t === null ? Ju(e) : tt = t, Yl.current = null;
  }
  function Ju(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Nd(n, t, Nt), n !== null) {
          tt = n;
          return;
        }
      } else {
        if (n = Td(n, t), n !== null) {
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
      Lt.transition = null, Ce = 1, Fd(e, t, n, r);
    } finally {
      Lt.transition = s, Ce = r;
    }
    return null;
  }
  function Fd(e, t, n, r) {
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
    if (mf(e, a), e === st && (tt = st = null, ot = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || os || (os = !0, tc(vi, function() {
      return yr(), null;
    })), a = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || a) {
      a = Lt.transition, Lt.transition = null;
      var f = Ce;
      Ce = 1;
      var p = Ee;
      Ee |= 4, Yl.current = null, Cd(e, n), Vu(n, e), td(il), ji = !!rl, il = rl = null, e.current = n, Rd(n), lf(), Ee = p, Ce = f, Lt.transition = a;
    } else e.current = n;
    if (os && (os = !1, En = e, us = s), a = e.pendingLanes, a === 0 && (jn = null), uf(n.stateNode), wt(e, be()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
    if (as) throw as = !1, e = bl, bl = null, e;
    return (us & 1) !== 0 && e.tag !== 0 && yr(), a = e.pendingLanes, (a & 1) !== 0 ? e === Zl ? ii++ : (ii = 0, Zl = e) : ii = 0, kn(), null;
  }
  function yr() {
    if (En !== null) {
      var e = Da(us), t = Lt.transition, n = Ce;
      try {
        if (Lt.transition = null, Ce = 16 > e ? 16 : e, En === null) var r = !1;
        else {
          if (e = En, En = null, us = 0, (Ee & 6) !== 0) throw Error(l(331));
          var s = Ee;
          for (Ee |= 4, Q = e.current; Q !== null; ) {
            var a = Q, f = a.child;
            if ((Q.flags & 16) !== 0) {
              var p = a.deletions;
              if (p !== null) {
                for (var m = 0; m < p.length; m++) {
                  var j = p[m];
                  for (Q = j; Q !== null; ) {
                    var R = Q;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ti(8, R, a);
                    }
                    var A = R.child;
                    if (A !== null) A.return = R, Q = A;
                    else for (; Q !== null; ) {
                      R = Q;
                      var C = R.sibling, K = R.return;
                      if (zu(R), R === j) {
                        Q = null;
                        break;
                      }
                      if (C !== null) {
                        C.return = K, Q = C;
                        break;
                      }
                      Q = K;
                    }
                  }
                }
                var G = a.alternate;
                if (G !== null) {
                  var q = G.child;
                  if (q !== null) {
                    G.child = null;
                    do {
                      var Ze = q.sibling;
                      q.sibling = null, q = Ze;
                    } while (q !== null);
                  }
                }
                Q = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && f !== null) f.return = a, Q = f;
            else e: for (; Q !== null; ) {
              if (a = Q, (a.flags & 2048) !== 0) switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  ti(9, a, a.return);
              }
              var x = a.sibling;
              if (x !== null) {
                x.return = a.return, Q = x;
                break e;
              }
              Q = a.return;
            }
          }
          var y = e.current;
          for (Q = y; Q !== null; ) {
            f = Q;
            var S = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && S !== null) S.return = f, Q = S;
            else e: for (f = y; Q !== null; ) {
              if (p = Q, (p.flags & 2048) !== 0) try {
                switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    is(9, p);
                }
              } catch (X) {
                Ye(p, p.return, X);
              }
              if (p === f) {
                Q = null;
                break e;
              }
              var D = p.sibling;
              if (D !== null) {
                D.return = p.return, Q = D;
                break e;
              }
              Q = p.return;
            }
          }
          if (Ee = s, kn(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(yi, e);
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
  function bu(e, t, n) {
    t = hr(n, t), t = vu(e, t, 1), e = wn(e, t, 1), t = vt(), e !== null && (Mr(e, 1, t), wt(e, t));
  }
  function Ye(e, t, n) {
    if (e.tag === 3) bu(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        bu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jn === null || !jn.has(r))) {
          e = hr(n, e), e = yu(t, e, 1), t = wn(t, e, 1), e = vt(), t !== null && (Mr(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function zd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = vt(), e.pingedLanes |= e.suspendedLanes & n, st === e && (ot & n) === n && (rt === 4 || rt === 3 && (ot & 130023424) === ot && 500 > be() - Jl ? Bn(e, 0) : Xl |= n), wt(e, t);
  }
  function Zu(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ki, ki <<= 1, (ki & 130023424) === 0 && (ki = 4194304)));
    var n = vt();
    e = ln(e, t), e !== null && (Mr(e, t, n), wt(e, n));
  }
  function Od(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Zu(e, n);
  }
  function Dd(e, t) {
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
    r !== null && r.delete(t), Zu(e, n);
  }
  var ec;
  ec = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || yt.current) kt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return kt = !1, _d(e, t, n);
      kt = (e.flags & 131072) !== 0;
    }
    else kt = !1, $e && (t.flags & 1048576) !== 0 && Ao(t, Vi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ns(e, t), e = t.pendingProps;
        var s = sr(t, ct.current);
        fr(t, n), s = Ml(null, t, r, e, s, n);
        var a = Cl();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, gt(r) ? (a = !0, Di(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, wl(t), s.updater = es, t.stateNode = s, s._reactInternals = t, Fl(t, r, e, n), t = $l(null, t, r, !0, a, n)) : (t.tag = 0, $e && a && fl(t), mt(null, t, s, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ns(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Bd(r), e = Dt(r, e), s) {
            case 0:
              t = Dl(null, t, r, e, n);
              break e;
            case 1:
              t = Nu(null, t, r, e, n);
              break e;
            case 11:
              t = wu(null, t, r, e, n);
              break e;
            case 14:
              t = Su(null, t, r, Dt(r.type, e), n);
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
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Dt(r, s), Dl(e, t, r, s, n);
      case 1:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Dt(r, s), Nu(e, t, r, s, n);
      case 3:
        e: {
          if (Tu(t), e === null) throw Error(l(387));
          r = t.pendingProps, a = t.memoizedState, s = a.element, Uo(e, t), Gi(t, r, null, n);
          var f = t.memoizedState;
          if (r = f.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
            s = hr(Error(l(423)), t), t = Mu(e, t, r, n, s);
            break e;
          } else if (r !== s) {
            s = hr(Error(l(424)), t), t = Mu(e, t, r, n, s);
            break e;
          } else for (_t = vn(t.stateNode.containerInfo.firstChild), Et = t, $e = !0, Ot = null, n = Bo(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
        return Ko(t), e === null && pl(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, f = s.children, sl(r, s) ? f = null : a !== null && sl(r, a) && (t.flags |= 32), _u(e, t), mt(e, t, f, n), t.child;
      case 6:
        return e === null && pl(t), null;
      case 13:
        return Cu(e, t, n);
      case 4:
        return Sl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ur(t, null, r, n) : mt(e, t, r, n), t.child;
      case 11:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Dt(r, s), wu(e, t, r, s, n);
      case 7:
        return mt(e, t, t.pendingProps, n), t.child;
      case 8:
        return mt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return mt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, f = s.value, Ie(Wi, r._currentValue), r._currentValue = f, a !== null) if (zt(a.value, f)) {
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
                    var j = a.updateQueue;
                    if (j !== null) {
                      j = j.shared;
                      var R = j.pending;
                      R === null ? m.next = m : (m.next = R.next, R.next = m), j.pending = m;
                    }
                  }
                  a.lanes |= n, m = a.alternate, m !== null && (m.lanes |= n), kl(
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
              f.lanes |= n, p = f.alternate, p !== null && (p.lanes |= n), kl(f, n, t), f = a.sibling;
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
        return r = t.type, s = Dt(r, t.pendingProps), s = Dt(r.type, s), Su(e, t, r, s, n);
      case 15:
        return ju(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Dt(r, s), ns(e, t), t.tag = 1, gt(r) ? (e = !0, Di(t)) : e = !1, fr(t, n), pu(t, r, s), Fl(t, r, s, n), $l(null, t, r, !0, e, n);
      case 19:
        return Pu(e, t, n);
      case 22:
        return Eu(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function tc(e, t) {
    return Aa(e, t);
  }
  function $d(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function At(e, t, n, r) {
    return new $d(e, t, n, r);
  }
  function sa(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Bd(e) {
    if (typeof e == "function") return sa(e) ? 1 : 0;
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
  function hs(e, t, n, r, s, a) {
    var f = 2;
    if (r = e, typeof e == "function") sa(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case ne:
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
        return ps(n, s, a, t);
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
  function ps(e, t, n, r) {
    return e = At(22, e, r, t), e.elementType = _e, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function la(e, t, n) {
    return e = At(6, e, null, t), e.lanes = n, e;
  }
  function aa(e, t, n) {
    return t = At(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Vd(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Is(0), this.expirationTimes = Is(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Is(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function oa(e, t, n, r, s, a, f, p, m) {
    return e = new Vd(e, t, n, p, m), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = At(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wl(a), e;
  }
  function Ud(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: H, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function nc(e) {
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
      if (gt(n)) return Ro(e, n, t);
    }
    return t;
  }
  function rc(e, t, n, r, s, a, f, p, m) {
    return e = oa(n, r, !0, e, s, a, f, p, m), e.context = nc(null), n = e.current, r = vt(), s = _n(n), a = an(r, s), a.callback = t ?? null, wn(n, a, s), e.current.lanes = s, Mr(e, s, r), wt(e, r), e;
  }
  function ms(e, t, n, r) {
    var s = t.current, a = vt(), f = _n(s);
    return n = nc(n), t.context === null ? t.context = n : t.pendingContext = n, t = an(a, f), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = wn(s, t, f), e !== null && (Vt(e, s, f, a), Qi(e, s, f)), f;
  }
  function vs(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function ic(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ua(e, t) {
    ic(e, t), (e = e.alternate) && ic(e, t);
  }
  function Hd() {
    return null;
  }
  var sc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ca(e) {
    this._internalRoot = e;
  }
  ys.prototype.render = ca.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    ms(e, t, null, null);
  }, ys.prototype.unmount = ca.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      $n(function() {
        ms(null, e, null, null);
      }), t[tn] = null;
    }
  };
  function ys(e) {
    this._internalRoot = e;
  }
  ys.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Va();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++) ;
      hn.splice(n, 0, e), n === 0 && Wa(e);
    }
  };
  function fa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function gs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function lc() {
  }
  function Wd(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var a = r;
        r = function() {
          var j = vs(f);
          a.call(j);
        };
      }
      var f = rc(t, r, e, 0, null, !1, !1, "", lc);
      return e._reactRootContainer = f, e[tn] = f.current, Ur(e.nodeType === 8 ? e.parentNode : e), $n(), f;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof r == "function") {
      var p = r;
      r = function() {
        var j = vs(m);
        p.call(j);
      };
    }
    var m = oa(e, 0, !1, null, null, !1, !1, "", lc);
    return e._reactRootContainer = m, e[tn] = m.current, Ur(e.nodeType === 8 ? e.parentNode : e), $n(function() {
      ms(t, m, n, r);
    }), m;
  }
  function ks(e, t, n, r, s) {
    var a = n._reactRootContainer;
    if (a) {
      var f = a;
      if (typeof s == "function") {
        var p = s;
        s = function() {
          var m = vs(f);
          p.call(m);
        };
      }
      ms(t, f, e, s);
    } else f = Wd(n, t, e, s, r);
    return vs(f);
  }
  $a = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Tr(t.pendingLanes);
          n !== 0 && (Fs(t, n | 1), wt(t, be()), (Ee & 6) === 0 && (vr = be() + 500, kn()));
        }
        break;
      case 13:
        $n(function() {
          var r = ln(e, 1);
          if (r !== null) {
            var s = vt();
            Vt(r, e, 1, s);
          }
        }), ua(e, 1);
    }
  }, zs = function(e) {
    if (e.tag === 13) {
      var t = ln(e, 134217728);
      if (t !== null) {
        var n = vt();
        Vt(t, e, 134217728, n);
      }
      ua(e, 134217728);
    }
  }, Ba = function(e) {
    if (e.tag === 13) {
      var t = _n(e), n = ln(e, t);
      if (n !== null) {
        var r = vt();
        Vt(n, e, t, r);
      }
      ua(e, t);
    }
  }, Va = function() {
    return Ce;
  }, Ua = function(e, t) {
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
              var s = zi(r);
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
  }, Na = na, Ta = $n;
  var Kd = { usingClientEntryPoint: !1, Events: [Kr, rr, zi, qn, Yn, na] }, si = { findFiberByHostInstance: Pn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qd = { bundleType: si.bundleType, version: si.version, rendererPackageName: si.rendererPackageName, rendererConfig: si.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: oe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Pa(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: si.findFiberByHostInstance || Hd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xs.isDisabled && xs.supportsFiber) try {
      yi = xs.inject(Qd), Gt = xs;
    } catch {
    }
  }
  return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kd, St.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fa(t)) throw Error(l(200));
    return Ud(e, t, null, n);
  }, St.createRoot = function(e, t) {
    if (!fa(e)) throw Error(l(299));
    var n = !1, r = "", s = sc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = oa(e, 1, !1, null, null, n, !1, r, s), e[tn] = t.current, Ur(e.nodeType === 8 ? e.parentNode : e), new ca(t);
  }, St.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = Pa(t), e = e === null ? null : e.stateNode, e;
  }, St.flushSync = function(e) {
    return $n(e);
  }, St.hydrate = function(e, t, n) {
    if (!gs(t)) throw Error(l(200));
    return ks(null, e, t, !0, n);
  }, St.hydrateRoot = function(e, t, n) {
    if (!fa(e)) throw Error(l(405));
    var r = n != null && n.hydratedSources || null, s = !1, a = "", f = sc;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = rc(t, null, e, 1, n ?? null, s, !1, a, f), e[tn] = t.current, Ur(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new ys(t);
  }, St.render = function(e, t, n) {
    if (!gs(t)) throw Error(l(200));
    return ks(null, e, t, !1, n);
  }, St.unmountComponentAtNode = function(e) {
    if (!gs(e)) throw Error(l(40));
    return e._reactRootContainer ? ($n(function() {
      ks(null, null, e, !1, function() {
        e._reactRootContainer = null, e[tn] = null;
      });
    }), !0) : !1;
  }, St.unstable_batchedUpdates = na, St.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!gs(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return ks(e, t, n, !1, r);
  }, St.version = "18.3.1-next-f1338f8080-20240426", St;
}
var pc;
function th() {
  if (pc) return pa.exports;
  pc = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), pa.exports = eh(), pa.exports;
}
var mc;
function nh() {
  if (mc) return ws;
  mc = 1;
  var o = th();
  return ws.createRoot = o.createRoot, ws.hydrateRoot = o.hydrateRoot, ws;
}
var rh = nh();
const ih = (() => {
  const o = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], i = "CDEFGAB", l = [0, 2, 4, 5, 7, 9, 11], u = [64, 59, 55, 50, 45, 40], d = u.at(-1), h = { pentatonic: 15, "3nps": 17 }, v = 7, g = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], E = ["e", "B", "G", "D", "A", "E"], _ = ["ohut e", "B", "G", "D", "A", "paksu E"], N = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], w = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], P = {
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
  }, z = 26, L = 72, I = 30, T = 54, W = 34, U = 11, J = (z + L) / 2, oe = I + (u.length - 1) * W + 30, b = (O) => L + O * T, H = (O) => O === 0 ? J : b(O) - T / 2, ne = (O) => I + O * W;
  function pe(O, B, F) {
    const Y = i.indexOf(o[O][0]) + Number(F.slice(-1)) - 1, ce = Y % i.length, ee = l[ce] + 12 * Math.floor(Y / i.length), re = O + B - ee;
    return i[ce] + (re < 0 ? "♭" : "♯").repeat(Math.abs(re));
  }
  function Pe(O) {
    return [...O.base, ...O.add].sort((B, F) => B[0] - F[0]);
  }
  function je(O, B, F) {
    const Y = B + (F ? 1 : 0), ce = g[Y % g.length], ee = Math.min(...ce.map(([Te]) => Te)), re = Math.max(...ce.map(([, Te]) => Te));
    let ke = (O - d % 12 + 12) % 12 - (F ? 8 : 5) + 12 * Math.floor(Y / g.length);
    return ee + ke < 0 && (ke += 12), re + ke > h.pentatonic && (ke -= 12), {
      strings: ce.map((Te) => Te.map((qe) => qe + ke)),
      start: ee + ke,
      end: re + ke
    };
  }
  function Qe(O, B, F) {
    const Y = F[B], ce = (O + Y - d % 12 + 12) % 12, ee = d + ce - Y, re = u.map((te, ye) => {
      const ke = B + (u.length - 1 - ye) * 3;
      return [ke, ke + 1, ke + 2].map((Te) => {
        const qe = Math.floor(Te / F.length), De = F[Te % F.length];
        return ee + De + 12 * qe - te;
      });
    });
    return {
      strings: re,
      start: Math.min(...re.map((te) => te[0])),
      end: Math.max(...re.map((te) => te.at(-1)))
    };
  }
  function Be(O, B) {
    const F = [], Y = Math.ceil(-O.end / 12) * 12;
    for (let ee = Y; O.start + ee <= B; ee += 12) {
      const re = O.strings.map((ye) => ye.map((ke) => ke + ee).filter((ke) => ke >= 0 && ke <= B)), te = re.flat();
      F.push({
        strings: re,
        start: Math.min(...te),
        end: Math.max(...te),
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
    const ee = Pe(B).map(([re]) => re);
    return Y.map((re) => {
      const te = re - 1, ye = F === "3nps" ? Qe(O, te, ee) : je(O, te, B.base === w), ke = ce === void 0 ? [ye] : Be(ye, ce);
      return { number: re, positions: ke };
    });
  }
  function Ae(O, B) {
    const F = O.getBoundingClientRect(), Y = O.querySelectorAll(B);
    let ce = 1 / 0;
    Y.forEach((ee) => {
      const re = ee.getBoundingClientRect();
      let te = 0;
      re.left < F.left ? te = re.left - F.left - 8 : re.right > F.right && (te = re.right - F.right + 8), Math.abs(te) < Math.abs(ce) && (ce = te);
    }), Number.isFinite(ce) && (O.scrollLeft += ce);
  }
  function _e(O, B = !1) {
    const F = O === "3nps" ? v : g.length;
    return Array.from({ length: F }, (Y, ce) => {
      const ee = ce + 1;
      return '<label class="box-toggle" data-box="' + ee + '"><input type="checkbox" value="' + ee + '"' + (B && ce === 0 ? " checked" : "") + "> Boksi " + ee + "</label>";
    }).join("");
  }
  function $(O, B) {
    const F = Pe(B), Y = new Map(F.map(([ee, re]) => [ee, pe(O, ee, re)])), ce = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return F.flatMap(([ee, re]) => ce.flatMap(({ suffix: te, base: ye }) => {
      const ke = ye.map(([Te]) => Y.get((ee + Te) % 12));
      return ke.every(Boolean) ? {
        root: (O + ee) % 12,
        degree: Number(String(re).replace(/\D/g, "")),
        name: ke[0] + te,
        notes: ke,
        base: ye,
        add: []
      } : [];
    }));
  }
  function Z(O, B) {
    const F = O.base.map(([ee]) => (O.root + ee) % 12), Y = u.map((ee) => {
      const re = [];
      for (let te = 0; te <= B; te++) {
        const ye = (ee + te) % 12;
        F.includes(ye) && re.push({ fret: te, pitch: ye });
      }
      return re;
    }), ce = [];
    for (let ee = 0; ee <= Y.length - 3; ee++)
      for (const re of Y[ee])
        for (const te of Y[ee + 1])
          if (re.pitch !== te.pitch)
            for (const ye of Y[ee + 2]) {
              if (ye.pitch === re.pitch || ye.pitch === te.pitch) continue;
              const ke = [re.fret, te.fret, ye.fret], Te = Math.min(...ke), qe = Math.max(...ke);
              if (qe - Te > 3) continue;
              const De = Array(u.length).fill(null);
              De.splice(ee, 3, ...ke), ce.push({ strings: De, low: Te, high: qe });
            }
    return ce.sort((ee, re) => ee.high - re.high || ee.low - re.low);
  }
  const V = {
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
  function M(O, B) {
    const F = V[O + ":" + B];
    if (F) return { frets: F, barre: null };
    let Y = null;
    return k.forEach(({ string: ce, openPC: ee, shapes: re }) => {
      const te = re[B];
      if (!te) return;
      let ye = (O - ee + 12) % 12;
      if (ye + Math.min(...te.filter((qe) => qe !== null)) < 0 && (ye += 12), Y && Y.fret <= ye) return;
      const ke = te.map((qe) => qe === null ? null : ye + qe), Te = ye > 0 && te.at(-1) === 0 ? { fret: ye, from: ce, to: te.length - 1 } : null;
      Y = { fret: ye, frets: ke, barre: Te };
    }), Y && { frets: Y.frets, barre: Y.barre };
  }
  function ue(O, { frets: B, barre: F }, Y) {
    const ke = [...u].reverse(), Te = B.filter((Me) => Me > 0), De = !Te.length || Math.max(...Te) <= 4 && (B.includes(0) || Math.min(...Te) === 1) ? 1 : Math.min(...Te), Ue = (Me) => 24 + Me * 14, Xe = (Me) => 30 + (Me - De) * 18 + 18 / 2, Tt = 102;
    let He = '<svg class="chord-svg" viewBox="0 0 108 ' + (Tt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + Y + "-ote paksusta kielestä ohueen: " + B.map((Me) => Me ?? "x").join(" ") + '">';
    for (let Me = 0; Me <= 4; Me++)
      He += '<line class="' + (Me === 0 && De === 1 ? "nut" : "fret") + '" x1="' + Ue(0) + '" y1="' + (30 + Me * 18) + '" x2="' + Ue(5) + '" y2="' + (30 + Me * 18) + '"/>';
    return B.forEach((Me, Je) => {
      He += '<line class="string" x1="' + Ue(Je) + '" y1="30" x2="' + Ue(Je) + '" y2="' + Tt + '"/>';
    }), De > 1 && (He += '<text class="fret-label" x="15" y="' + (Xe(De) + 4) + '">' + De + "</text>"), F && (He += '<rect class="barre" x="' + (Ue(F.from) - 6.5) + '" y="' + (Xe(F.fret) - 6.5) + '" width="' + ((F.to - F.from) * 14 + 13) + '" height="13" rx="6.5"/>'), B.forEach((Me, Je) => {
      if (Me === null) {
        He += '<text class="marker" x="' + Ue(Je) + '" y="22">×</text>';
        return;
      }
      const Ht = (ke[Je] + Me) % 12 === O;
      if (Me === 0) {
        He += '<circle class="open' + (Ht ? " root-open" : "") + '" cx="' + Ue(Je) + '" cy="18" r="4.5"/>';
        return;
      }
      F && Me === F.fret && Je >= F.from && Je <= F.to && !Ht || (He += '<circle class="' + (Ht ? "root" : "tone") + '" cx="' + Ue(Je) + '" cy="' + Xe(Me) + '" r="6.5"/>');
    }), He + "</svg>";
  }
  function de(O, B) {
    const F = new URLSearchParams(location.search), Y = o.indexOf(F.get("toonikka")), ce = F.get("asteikko");
    return {
      rootPC: Y === -1 ? O : Y,
      scaleId: Object.hasOwn(P, ce) ? ce : B
    };
  }
  function me(O, B, F) {
    return O + "?" + new URLSearchParams({ toonikka: o[B], asteikko: F });
  }
  function ve(O, B, F, {
    boxes: Y = [],
    onlyBoxNotes: ce = !1,
    automatic: ee = !0,
    focusDegree: re = "",
    grip: te = null,
    barre: ye = null,
    label: ke = o[O] + " " + B.name,
    notes: Te = null,
    targets: qe = !1,
    muteFret: De = null
  } = {}) {
    const Ue = b(F), Xe = Ue + 48, Tt = Xe + 28, He = I - 14, Me = ne(u.length - 1) + 14, Je = Me - He, Ht = ee ? 680 : Math.ceil(Tt * 0.64), Cn = Y.flatMap((ae) => ae.positions), It = {};
    B.base.forEach(([ae, ge]) => It[(O + ae) % 12] = { deg: ge, added: !1 }), B.add.forEach(([ae, ge]) => It[(O + ae) % 12] = { deg: ge, added: !0 });
    const bt = u.map((ae, ge) => !!te && te[ge] === null), Wt = !!te && De !== null, Kt = _.filter((ae, ge) => bt[ge]).reverse(), jr = ke + ". " + F + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Kt.length ? " Soittamatta jäävät kielet: " + Kt.join(", ") + "." : "");
    let le = '<svg viewBox="0 0 ' + Tt + " " + oe + '" style="min-width:' + Ht + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (qe ? "group" : "img") + '" aria-label="' + jr + '">';
    le += '<rect x="' + z + '" y="' + He + '" width="' + (L - z) + '" height="' + Je + '" rx="6" fill="#2a2338"/>', le += '<rect x="' + L + '" y="' + He + '" width="' + (Ue - L) + '" height="' + Je + '" fill="#231a12"/>', le += '<rect x="' + Ue + '" y="' + He + '" width="' + (Tt - Ue - 4) + '" height="' + Je + '" rx="8" fill="#32251e"/>';
    for (let ae = 1; ae <= F; ae++)
      le += '<line x1="' + b(ae) + '" y1="' + He + '" x2="' + b(ae) + '" y2="' + Me + '" stroke="#6f5b47" stroke-width="2"/>';
    le += '<rect x="' + (L - 3) + '" y="' + He + '" width="6" height="' + Je + '" rx="2" fill="#d8cbb6"/>', le += '<rect x="' + (Xe - 11) + '" y="' + (He + 3) + '" width="22" height="' + (Je - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', le += '<rect x="' + (Xe - 4) + '" y="' + (He + 7) + '" width="3" height="' + (Je - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Zt = (He + Me) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((ae) => ae <= F).forEach((ae) => le += '<circle cx="' + H(ae) + '" cy="' + Zt + '" r="5.5" fill="#7a6550"/>');
    for (let ae = 12; ae <= F; ae += 12)
      le += '<circle cx="' + H(ae) + '" cy="' + (Zt - W) + '" r="5.5" fill="#7a6550"/>', le += '<circle cx="' + H(ae) + '" cy="' + (Zt + W) + '" r="5.5" fill="#7a6550"/>';
    le += '<text x="' + J + '" y="' + (oe - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', le += '<text x="' + L + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', le += '<text x="' + Xe + '" y="' + (oe - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let ae = 1; ae <= F; ae++)
      le += '<text x="' + H(ae) + '" y="' + (oe - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + ae + "</text>";
    if (Y.forEach(({ number: ae, positions: ge }) => {
      ge.forEach((xe) => {
        const Fe = xe.partial ? "box-highlight box-partial" : "box-highlight";
        le += '<g class="' + Fe + '" data-box="' + ae + '" aria-hidden="true">';
        const et = xe.strings.find((pt) => pt.length), en = (H(et[0]) + H(et.at(-1))) / 2;
        le += '<text class="box-number" x="' + en + '" y="12">' + ae + "</text>", xe.strings.forEach((pt, Qt) => {
          if (!pt.length) return;
          const Gn = H(pt[0]) - 16, qn = H(pt.at(-1)) - H(pt[0]) + 32;
          le += '<rect class="box-band" x="' + Gn + '" y="' + (ne(Qt) - 14) + '" width="' + qn + '" height="28" rx="14"/>';
        }), le += "</g>";
      });
    }), u.forEach((ae, ge) => {
      const xe = 1 + ge * 0.45, Fe = ne(ge), et = bt[ge] && !Wt;
      et ? le += '<text class="muted-mark" x="' + J + '" y="' + (Fe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : bt[ge] && De === 0 || (le += '<line x1="' + (z + 4) + '" y1="' + Fe + '" x2="' + (L - 4) + '" y2="' + Fe + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), le += "<g" + (et ? ' opacity=".35"' : "") + ">", le += '<line x1="' + L + '" y1="' + Fe + '" x2="' + (Xe + 5) + '" y2="' + Fe + '" stroke="#b9b9c4" stroke-width="' + xe.toFixed(2) + '"/>', le += '<circle cx="' + (Xe + 5) + '" cy="' + Fe + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', le += "</g>", le += '<text x="13" y="' + (Fe + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + E[ge] + "</text>";
    }), te && ye && ye.fret >= 1 && ye.fret <= F) {
      const ae = ne(ye.from), ge = ne(ye.to), xe = Math.min(ae, ge) - 6, Fe = Math.max(ae, ge) + 6;
      le += '<rect class="barre-indicator" x="' + (H(ye.fret) - 7) + '" y="' + xe + '" width="14" height="' + (Fe - xe) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return qe && (le += '<g class="fret-targets">', u.forEach((ae, ge) => {
      for (let xe = 0; xe <= F; xe++) {
        const Fe = xe ? _[ge] + "-kieli, " + xe + ". nauha" : "vapaa " + _[ge] + "-kieli", et = xe ? T : L - z - 6;
        le += '<rect class="fret-target" role="button" tabindex="0" data-string="' + ge + '" data-fret="' + xe + '" data-midi="' + (ae + xe) + '" aria-label="' + Fe + '" x="' + (H(xe) - et / 2) + '" y="' + (ne(ge) - W / 2) + '" width="' + et + '" height="' + W + '" fill="transparent"/>';
      }
    }), le += "</g>"), (Te ?? []).forEach(({ string: ae, fret: ge, label: xe, kind: Fe }) => {
      le += '<g class="octave-note octave-' + Fe + '">', le += '<circle cx="' + H(ge) + '" cy="' + ne(ae) + '" r="' + U + '"/>', le += '<text x="' + H(ge) + '" y="' + (ne(ae) + 3.5) + '" font-size="' + (xe.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + xe + "</text>", le += "</g>";
    }), te && (le += '<g class="grip-notes">'), (Te ? [] : u).forEach((ae, ge) => {
      for (let xe = 0; xe <= F; xe++) {
        const Fe = (ae + xe) % 12;
        if (!(Fe in It) || te && te[ge] !== xe || ce && !Cn.some(({ strings: qn }) => {
          const Yn = qn[ge];
          return Yn.length > 0 && xe >= Yn[0] && xe <= Yn.at(-1);
        })) continue;
        const et = It[Fe], en = et.deg === "1", pt = et.added ? "#f0a13c" : en ? "#4b2fd6" : "#6d4aff", Qt = et.added ? "#1a1430" : "#fff";
        et.deg === re && (le += '<circle class="focus-note" cx="' + H(xe) + '" cy="' + ne(ge) + '" r="14.5"/>');
        const Gn = te ? ' data-string="' + (ge + 1) + '" data-fret="' + xe + '" data-degree="' + et.deg + '"' : "";
        le += "<circle" + Gn + ' cx="' + H(xe) + '" cy="' + ne(ge) + '" r="' + U + '" fill="' + pt + '" stroke="' + (en ? "#fff" : "#1a1430") + '" stroke-width="' + (en ? 2.5 : 1) + '"/>', le += '<text x="' + H(xe) + '" y="' + (ne(ge) + 3.5) + '" font-size="' + (et.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Qt + '" text-anchor="middle">' + et.deg + "</text>";
      }
    }), te && (le += "</g>"), Wt && bt.forEach((ae, ge) => {
      if (!ae) return;
      const xe = H(De), Fe = ne(ge);
      le += '<g class="muted-mark grip-mute" data-string="' + (ge + 1) + '" data-fret="' + De + '">', le += '<circle cx="' + xe + '" cy="' + Fe + '" r="9" fill="' + (De === 0 ? "#2a2338" : "#231a12") + '"/>', le += '<text x="' + xe + '" y="' + (Fe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', le += "</g>";
    }), le += "</svg>", le;
  }
  return {
    CHROM: o,
    OPEN_PITCHES: u,
    PENT_MAJ: w,
    SCALES: P,
    noteName: pe,
    scaleNotes: Pe,
    scaleTriads: $,
    triadGrips: Z,
    chordGrip: M,
    renderChordDiagram: ue,
    selectionFromURL: de,
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
globalThis.MusicMapFretboard = ih;
function ya(o) {
  return 440 * Math.pow(2, (o - 69) / 12);
}
function sh(o) {
  return 69 + 12 * Math.log2(o / 440);
}
function lh(o) {
  const i = sh(o), l = Math.round(i), u = (i - l) * 100;
  return { midi: l, cents: u };
}
const Pc = globalThis.MusicMapFretboard, ah = (o) => (o % 12 + 12) % 12, oh = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], uh = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], ch = (o, i = !1, l = !1) => (i ? uh : oh)[ah(o)] + (l ? Math.floor(o / 12) - 1 : ""), _s = ["ohut E", "B", "G", "D", "A", "paksu E"], fh = (o) => o === 0 ? "vapaa kieli" : `${o}. nauha`, dh = (o, i) => ({ string: o, fret: i, midi: Pc.OPEN_PITCHES[o] + i });
function hh(o, i, l) {
  return [...o].sort((u, d) => u - d).flatMap((u) => Array.from({ length: Math.max(0, l - i + 1) }, (d, h) => dh(u, i + h)));
}
const ai = (o) => `${o.string}:${o.fret}`, ph = 4e3;
class vc extends Error {
  name = "MicSetupError";
}
async function mh(o, i) {
  if (!navigator.mediaDevices?.getUserMedia) throw new vc("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
          _ = setTimeout(() => w(new vc("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), ph);
        })
      ]).finally(() => clearTimeout(_));
    }
    const h = d.createMediaStreamSource(u), v = d, g = u.getAudioTracks?.()[0] ?? u.getTracks()[0], E = g?.getSettings?.() ?? {};
    return {
      context: d,
      source: h,
      stream: u,
      label: g?.label ?? "",
      deviceId: E.deviceId ?? "",
      channelCount: E.channelCount ?? 1,
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
async function vh() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((i) => i.kind === "audioinput" && i.deviceId) : [];
}
var ga, yc;
function yh() {
  if (yc) return ga;
  yc = 1;
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
      for (var g = 0; g < this._width; g += 2) {
        var E = this._width - g - 2;
        this._bitrev[v] |= (v >>> g & 3) << E;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return ga = o, o.prototype.fromComplexArray = function(l, u) {
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
    var l = this._out, u = this._csize, d = this._width, h = 1 << d, v = u / h << 1, g, E, _ = this._bitrev;
    if (v === 4)
      for (g = 0, E = 0; g < u; g += v, E++) {
        const T = _[E];
        this._singleTransform2(g, T, h);
      }
    else
      for (g = 0, E = 0; g < u; g += v, E++) {
        const T = _[E];
        this._singleTransform4(g, T, h);
      }
    var N = this._inv ? -1 : 1, w = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      v = u / h << 1;
      var P = v >>> 2;
      for (g = 0; g < u; g += v)
        for (var z = g + P, L = g, I = 0; L < z; L += 2, I += h) {
          const T = L, W = T + P, U = W + P, J = U + P, oe = l[T], b = l[T + 1], H = l[W], ne = l[W + 1], pe = l[U], Pe = l[U + 1], je = l[J], Qe = l[J + 1], Be = oe, Le = b, Ve = w[I], Ge = N * w[I + 1], Ae = H * Ve - ne * Ge, _e = H * Ge + ne * Ve, $ = w[2 * I], Z = N * w[2 * I + 1], V = pe * $ - Pe * Z, k = pe * Z + Pe * $, M = w[3 * I], ue = N * w[3 * I + 1], de = je * M - Qe * ue, me = je * ue + Qe * M, ve = Be + V, O = Le + k, B = Be - V, F = Le - k, Y = Ae + de, ce = _e + me, ee = N * (Ae - de), re = N * (_e - me), te = ve + Y, ye = O + ce, ke = ve - Y, Te = O - ce, qe = B + re, De = F - ee, Ue = B - re, Xe = F + ee;
          l[T] = te, l[T + 1] = ye, l[W] = qe, l[W + 1] = De, l[U] = ke, l[U + 1] = Te, l[J] = Ue, l[J + 1] = Xe;
        }
    }
  }, o.prototype._singleTransform2 = function(l, u, d) {
    const h = this._out, v = this._data, g = v[u], E = v[u + 1], _ = v[u + d], N = v[u + d + 1], w = g + _, P = E + N, z = g - _, L = E - N;
    h[l] = w, h[l + 1] = P, h[l + 2] = z, h[l + 3] = L;
  }, o.prototype._singleTransform4 = function(l, u, d) {
    const h = this._out, v = this._data, g = this._inv ? -1 : 1, E = d * 2, _ = d * 3, N = v[u], w = v[u + 1], P = v[u + d], z = v[u + d + 1], L = v[u + E], I = v[u + E + 1], T = v[u + _], W = v[u + _ + 1], U = N + L, J = w + I, oe = N - L, b = w - I, H = P + T, ne = z + W, pe = g * (P - T), Pe = g * (z - W), je = U + H, Qe = J + ne, Be = oe + Pe, Le = b - pe, Ve = U - H, Ge = J - ne, Ae = oe - Pe, _e = b + pe;
    h[l] = je, h[l + 1] = Qe, h[l + 2] = Be, h[l + 3] = Le, h[l + 4] = Ve, h[l + 5] = Ge, h[l + 6] = Ae, h[l + 7] = _e;
  }, o.prototype._realTransform4 = function() {
    var l = this._out, u = this._csize, d = this._width, h = 1 << d, v = u / h << 1, g, E, _ = this._bitrev;
    if (v === 4)
      for (g = 0, E = 0; g < u; g += v, E++) {
        const ae = _[E];
        this._singleRealTransform2(g, ae >>> 1, h >>> 1);
      }
    else
      for (g = 0, E = 0; g < u; g += v, E++) {
        const ae = _[E];
        this._singleRealTransform4(g, ae >>> 1, h >>> 1);
      }
    var N = this._inv ? -1 : 1, w = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      v = u / h << 1;
      var P = v >>> 1, z = P >>> 1, L = z >>> 1;
      for (g = 0; g < u; g += v)
        for (var I = 0, T = 0; I <= L; I += 2, T += h) {
          var W = g + I, U = W + z, J = U + z, oe = J + z, b = l[W], H = l[W + 1], ne = l[U], pe = l[U + 1], Pe = l[J], je = l[J + 1], Qe = l[oe], Be = l[oe + 1], Le = b, Ve = H, Ge = w[T], Ae = N * w[T + 1], _e = ne * Ge - pe * Ae, $ = ne * Ae + pe * Ge, Z = w[2 * T], V = N * w[2 * T + 1], k = Pe * Z - je * V, M = Pe * V + je * Z, ue = w[3 * T], de = N * w[3 * T + 1], me = Qe * ue - Be * de, ve = Qe * de + Be * ue, O = Le + k, B = Ve + M, F = Le - k, Y = Ve - M, ce = _e + me, ee = $ + ve, re = N * (_e - me), te = N * ($ - ve), ye = O + ce, ke = B + ee, Te = F + te, qe = Y - re;
          if (l[W] = ye, l[W + 1] = ke, l[U] = Te, l[U + 1] = qe, I === 0) {
            var De = O - ce, Ue = B - ee;
            l[J] = De, l[J + 1] = Ue;
            continue;
          }
          if (I !== L) {
            var Xe = F, Tt = -Y, He = O, Me = -B, Je = -N * te, Ht = -N * re, Cn = -N * ee, It = -N * ce, bt = Xe + Je, Wt = Tt + Ht, Kt = He + It, jr = Me - Cn, le = g + z - I, Zt = g + P - I;
            l[le] = bt, l[le + 1] = Wt, l[Zt] = Kt, l[Zt + 1] = jr;
          }
        }
    }
  }, o.prototype._singleRealTransform2 = function(l, u, d) {
    const h = this._out, v = this._data, g = v[u], E = v[u + d], _ = g + E, N = g - E;
    h[l] = _, h[l + 1] = 0, h[l + 2] = N, h[l + 3] = 0;
  }, o.prototype._singleRealTransform4 = function(l, u, d) {
    const h = this._out, v = this._data, g = this._inv ? -1 : 1, E = d * 2, _ = d * 3, N = v[u], w = v[u + d], P = v[u + E], z = v[u + _], L = N + P, I = N - P, T = w + z, W = g * (w - z), U = L + T, J = I, oe = -W, b = L - T, H = I, ne = W;
    h[l] = U, h[l + 1] = 0, h[l + 2] = J, h[l + 3] = oe, h[l + 4] = b, h[l + 5] = 0, h[l + 6] = H, h[l + 7] = ne;
  }, ga;
}
var gh = yh();
const kh = /* @__PURE__ */ qd(gh);
class ci {
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
    return new ci(
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
    return new ci(
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
    return new ci(i, (l) => Array(l));
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
    this._inputLength = i, this._fft = new kh(Sh(2 * i)), this._bufferSupplier = l, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function xh(o) {
  const i = [];
  let l = !1, u = -1 / 0, d = -1;
  for (let h = 1; h < o.length - 1; h++)
    o[h - 1] <= 0 && o[h] > 0 ? (l = !0, d = h, u = o[h]) : o[h - 1] > 0 && o[h] <= 0 ? (l = !1, d !== -1 && i.push(d)) : l && o[h] > u && (u = o[h], d = h);
  return i;
}
function wh(o, i) {
  const [l, u, d] = [o - 1, o, o + 1], [h, v, g] = [i[l], i[u], i[d]], E = h / 2 - v + g / 2, _ = -(h / 2) * (u + d) + v * (l + d) - g / 2 * (l + u), N = h * u * d / 2 - v * l * d + g * l * u / 2, w = -_ / (2 * E), P = E * w * w + _ * w + N;
  return [w, P];
}
class fi {
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
    return new fi(i, (l) => new Float32Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(i) {
    return new fi(i, (l) => new Float64Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(i) {
    return new fi(i, (l) => Array(l));
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
    this._autocorrelator = new ci(i, l), this._nsdfBuffer = l(i);
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
    const u = xh(this._nsdfBuffer);
    if (u.length === 0)
      return [0, 0];
    const d = Math.max(...u.map((E) => this._nsdfBuffer[E])), h = u.find(
      (E) => this._nsdfBuffer[E] >= this._clarityThreshold * d
    ), [v, g] = wh(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [l / v, Math.min(g, 1)];
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
function Sh(o) {
  return o--, o |= o >> 1, o |= o >> 2, o |= o >> 4, o |= o >> 8, o |= o >> 16, o++, o;
}
function jh(o) {
  const i = o * 0.17;
  let l = 2048;
  for (; l < i && l < 32768; ) l *= 2;
  return l;
}
const Eh = 0.05, _h = 1.5;
class Nh {
  constructor(i, l = {}) {
    this.mic = i, this.opts = l;
    const u = i.context, d = jh(u.sampleRate), h = Math.max(1, Math.min(2, i.channelCount ?? 1));
    h > 1 && typeof u.createChannelSplitter == "function" && (this.splitter = u.createChannelSplitter(h), i.source.connect(this.splitter));
    for (let v = 0; v < (this.splitter ? h : 1); v++) {
      const g = u.createAnalyser();
      g.fftSize = d, g.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(g, v) : i.source.connect(g), this.analysers.push(g), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(u.sampleRate * Eh))), this.detector = fi.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Th();
  onset = new Lc();
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
      maxFreq: g = 1450,
      onFrame: E,
      onStableNote: _
    } = this.opts, N = this.analysers.map((ne, pe) => (ne.getFloatTimeDomainData(this.buffers[pe]), gc(this.buffers[pe], this.buffers[pe].length - this.shortLength))), w = N.indexOf(Math.max(...N));
    w !== this.channel && N[w] > (N[this.channel] ?? 0) * _h && (this.channel = w);
    const P = this.buffers[this.channel], z = N[this.channel], L = Mh(P, P.length - this.shortLength), I = { rms: z, peak: L, channel: this.channel, levels: N }, T = z < u, W = this.onset.feed(z, i, u);
    if (T && gc(P, 0) < u) {
      this.gate.feed(null, i, d, !0, !1), E?.({ ...I, status: "silent" });
      return;
    }
    const [U, J] = this.detector.findPitch(P, this.mic.context.sampleRate);
    if (!isFinite(U) || J < l) {
      this.gate.feed(null, i, d, T, W), E?.({ ...I, status: T ? "silent" : "unclear", clarity: isFinite(J) ? J : 0 });
      return;
    }
    if (U < v || U > g) {
      this.gate.feed(null, i, d, T, W), E?.({ ...I, status: "out-of-range", frequency: U, clarity: J });
      return;
    }
    const { midi: oe, cents: b } = lh(U);
    if (Math.abs(b) > h) {
      this.gate.feed(null, i, d, T, W), E?.({ ...I, status: "off-pitch", frequency: U, clarity: J, midi: oe, cents: b });
      return;
    }
    E?.({ ...I, status: "pitch", frequency: U, clarity: J, midi: oe, cents: b });
    const H = this.gate.feed(oe, i, d, T, W);
    H !== null && _?.({ midi: oe, frequency: U, cents: b, clarity: J, timestamp: i, heldMs: H.heldMs });
  }
}
class Th {
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
class Lc {
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
function gc(o, i = 0) {
  const l = Math.max(0, i);
  let u = 0;
  for (let d = l; d < o.length; d++) u += o[d] * o[d];
  return Math.sqrt(u / Math.max(1, o.length - l));
}
function Mh(o, i = 0) {
  let l = 0;
  for (let u = Math.max(0, i); u < o.length; u++) {
    const d = Math.abs(o[u]);
    d > l && (l = d);
  }
  return l;
}
const js = (o) => o > 0 ? Math.max(-90, 20 * Math.log10(o)) : -90;
let kr;
function Ac() {
  return (!kr || kr.state === "closed") && (kr = new AudioContext()), kr;
}
function Ch() {
  const o = kr;
  kr = void 0, o?.close().catch(() => {
  });
}
const Ic = (o) => o instanceof Error ? o.name : "";
function Rh(o) {
  const i = Ic(o);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(i) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : i === "NotFoundError" || i === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : i === "NotReadableError" || i === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : i === "MicSetupError" ? o.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Ph {
  constructor(i = (l) => mh(l, Ac)) {
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
    } catch (g) {
      if (!i || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Ic(g))) throw g;
      h = await this.opener(void 0), v = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new Nh(h, { ...l });
      const g = () => {
        this.mic === h && (this.stop(), u());
      }, E = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((_) => _.addEventListener("ended", g, { once: !0, signal: E.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && g();
      }, { signal: E.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: v };
    } catch (g) {
      throw this.stop(), g;
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
function Lh(o) {
  const i = [...o].sort((u, d) => u - d), l = i[Math.min(i.length - 1, Math.floor(i.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, l * 3)), noise: l, loud: l > 0.04 };
}
async function ka(o) {
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
function Fc(o) {
  const i = o instanceof Error ? o.message : "";
  return i === "reference-audio-resume-timeout" || i === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : o instanceof Error && o.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class kc {
  constructor(i = Ac) {
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
    if (await ka(d), u !== this.token) return !1;
    const h = d.createGain();
    h.connect(d.destination), this.master = h;
    const v = Array.from({ length: 12 }, (_, N) => 1 / (N + 1) ** 1.3), g = d.createPeriodicWave?.(new Float32Array([0, ...v.map(() => 0)]), new Float32Array([0, ...v]));
    return i.forEach((_, N) => {
      const w = d.createOscillator(), P = d.createGain(), z = d.currentTime + 0.05 + N * 0.8;
      g ? w.setPeriodicWave(g) : w.type = "triangle", w.frequency.value = ya(_), P.gain.setValueAtTime(0, z), P.gain.linearRampToValueAtTime(0.22, z + 0.012), P.gain.exponentialRampToValueAtTime(1e-3, z + 0.7), w.connect(P), P.connect(h), w.start(z), w.stop(z + 0.72), l && this.noteTimers.push(setTimeout(() => {
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
    if (await ka(v), h !== this.token) return !1;
    const g = 60 / Math.max(40, Math.min(140, l)), E = v.createGain();
    E.connect(v.destination), this.master = E;
    const _ = Array.from({ length: 12 }, (L, I) => 1 / (I + 1) ** 1.3), N = v.createPeriodicWave?.(
      new Float32Array([0, ..._.map(() => 0)]),
      new Float32Array([0, ..._])
    ), w = v.currentTime + 0.05;
    let P = 0;
    return i.forEach((L, I) => {
      if (!Number.isFinite(L.beat) || L.beat < 0 || !Number.isFinite(L.duration) || L.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const T = w + L.beat * g, W = L.duration * g, U = T + Math.max(0.08, W * 0.94), J = v.createOscillator(), oe = v.createGain();
      N ? J.setPeriodicWave(N) : J.type = "triangle", J.frequency.value = ya(L.midi), oe.gain.setValueAtTime(0, T), oe.gain.linearRampToValueAtTime(0.22, T + 0.012), oe.gain.exponentialRampToValueAtTime(1e-3, U - 0.01), J.connect(oe), oe.connect(E), J.start(T), J.stop(U), u && this.noteTimers.push(setTimeout(() => {
        h === this.token && u(I);
      }, 50 + L.beat * g * 1e3));
      const b = i[I + 1]?.beat ?? 1 / 0;
      d && b > L.beat + L.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && d();
      }, 50 + L.beat * g * 1e3 + W * 1e3)), P = Math.max(P, L.beat + L.duration);
    }), !await new Promise((L) => {
      this.settle = L, this.timer = setTimeout(() => L(!0), 50 + P * g * 1e3 + 150);
    }) || h !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], E.disconnect(), this.master = void 0, !0);
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
    if (await ka(h), d !== this.token) return !1;
    const v = h.createGain();
    v.connect(h.destination), this.master = v;
    const g = Array.from({ length: 12 }, (I, T) => 1 / (T + 1) ** 1.3), E = h.createPeriodicWave?.(new Float32Array([0, ...g.map(() => 0)]), new Float32Array([0, ...g]));
    let _ = 60 / Math.max(40, Math.min(140, u));
    this.adjustLoopTempo = (I) => {
      d === this.token && Number.isFinite(I) && (_ = 60 / Math.max(40, Math.min(140, I)));
    };
    const N = 1.6;
    let w = h.currentTime + 0.05, P = 0;
    const z = [], L = () => {
      if (d === this.token) {
        if (w < h.currentTime - 0.02) {
          const I = Math.ceil((h.currentTime - w) / _);
          w += I * _, P = (P + I) % i.length, z.length = 0;
        }
        for (; w < h.currentTime + N; ) {
          const I = i[P], T = P, W = w, U = h.createOscillator(), J = h.createGain();
          E ? U.setPeriodicWave(E) : U.type = "triangle", U.frequency.value = ya(I), J.gain.setValueAtTime(0, W), J.gain.linearRampToValueAtTime(0.22, W + 0.012), J.gain.exponentialRampToValueAtTime(1e-3, W + _ * 0.975), U.connect(J), J.connect(v), U.start(W), U.stop(W + _ * 0.985), z.push({ at: W, index: T }), w += _, P = (P + 1) % i.length;
        }
        for (; z.length && z[0].at <= h.currentTime + 0.01; ) {
          const I = z.shift();
          l?.(I.index);
        }
      }
    };
    return L(), this.loopTick = setInterval(L, 25), new Promise((I) => {
      this.settle = I;
    });
  }
}
const Ah = /* @__PURE__ */ new Set([12, 19, 24, 28, 31, 36]), Ih = 0.25;
class xc {
  constructor(i) {
    this.opts = i;
  }
  opts;
  onset = new Lc();
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
    const { minRms: u, stabilityMs: d, releaseMs: h = 120, gapMs: v = 80 } = this.opts, g = i.rms < u, E = this.onset.feed(i.rms, l, u);
    if (g ? (this.quietSince ??= l, l - this.quietSince >= h && this.arm("quiet")) : (this.quietSince = null, E && this.arm("onset")), this.notePeak = Math.max(this.notePeak, i.rms), i.status !== "pitch" || i.midi === void 0)
      return this.current && l - this.current.seen > v && (this.current = null), this.reason = i.status === "pitch" ? "unclear" : i.status, null;
    const _ = i.midi;
    let N = this.armedBy;
    if (!this.armed) {
      const z = this.previous;
      if (!z || _ === z.midi)
        return this.current = null, this.reason = "waiting-new-pluck", null;
      if (Ah.has(Math.abs(_ - z.midi)))
        return this.current = null, this.reason = "harmonic", null;
      if (i.rms < z.peak * Ih)
        return this.current = null, this.reason = "too-quiet-for-change", null;
      N = "pitch-change";
    }
    (!this.current || this.current.midi !== _) && (this.current = { midi: _, since: l, seen: l, armedBy: N }, N === "pitch-change" && (this.notePeak = i.rms)), this.current.seen = l;
    const w = l - this.current.since;
    if (w < d)
      return this.reason = "stabilizing", null;
    const P = this.current.armedBy;
    return this.armed = !1, this.armedBy = null, this.current = null, this.previous = { midi: _, peak: this.notePeak }, this.last = { midi: _, at: l, armedBy: P }, this.count++, this.reason = null, { midi: _, frequency: i.frequency ?? 0, cents: i.cents ?? 0, clarity: i.clarity ?? 0, timestamp: l, heldMs: w, armedBy: P };
  }
  arm(i) {
    this.armed = !0, this.armedBy = i, this.current = null, this.notePeak = 0;
  }
}
const Kn = { minRms: 0.01, minClarity: 0.94, stabilityMs: 240, centsTolerance: 35 };
function Fh(o, i, l) {
  return (u) => {
    const d = i.feed(u, l());
    o.onFrame(u, i.state()), d && o.onStable(d);
  };
}
class zc {
  mic = new Ph();
  player = new kc();
  /** Oma soitin painalluksille, jotta nopea uusi painallus ei keskeytä mallia eikä päinvastoin. */
  strings = new kc();
  minRms = Kn.minRms;
  detector = new xc({ minRms: Kn.minRms, stabilityMs: Kn.stabilityMs });
  async openMic(i, l) {
    this.detector = new xc({ minRms: this.minRms, stabilityMs: Kn.stabilityMs });
    const u = Fh(i, this.detector, () => performance.now());
    return this.mic.start(l, { ...Kn, minRms: this.minRms, onFrame: u }, i.onEnded);
  }
  async listDevices() {
    return (await vh()).filter((l) => l.deviceId !== "default" && l.deviceId !== "communications").map((l, u) => ({ id: l.deviceId, label: l.label || `Äänitulo ${u + 1}` }));
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
  // Uusi painallus katkaisee edellisen sävelen: sama sävel kahdesti kuuluu kahtena näppäyksenä.
  pluck(i) {
    this.strings.play([i]).catch(() => {
    });
  }
}
const Se = (o) => ch(o, !1, !0), zh = [64, 59, 55, 50, 45, 40], Oc = [0, 1, 2, 3, 4, 5], Oh = 0, Dh = 5, Hn = (o, i, l, u) => ({
  id: o,
  title: i,
  tip: u,
  spots: l.map(([d, h]) => ({ string: d, fret: h })),
  midi: l.map(([d, h]) => zh[d] + h)
}), Wn = (o, i) => i.map((l) => [o, l]), oi = 1, Ss = 2, Ns = 59, ui = Hn("opastus", "Opastus: kaksi säveltä", Wn(oi, [0, 1]), "Vapaa B-kieli ja sitten 1. nauha."), Re = [
  { number: 1, name: "Kotitreeni 1", title: "B-kieli", strings: [oi], instruction: "Soita riffi B-kieleltä.", riffs: [
    // Sävelet B3, C4 ja D4: vapaa kieli, 1. ja 3. nauha.
    Hn("b-kaari", "Ensimmäinen kaiku", Wn(oi, [0, 1, 3, 1]), "Vapaa kieli, 1., 3. ja takaisin 1. nauhaan."),
    Hn("b-vaihto", "Edestakaisin", Wn(oi, [1, 0, 1, 3]), "1. nauha, vapaa kieli, 1. ja 3. nauha."),
    Hn("b-takaisin", "Kaari takaisin", Wn(oi, [0, 3, 1, 0]), "Vapaa kieli, 3. ja 1. nauha ja taas vapaa kieli.")
  ] },
  { number: 2, name: "Kotitreeni 2", title: "G-kieli", strings: [Ss], instruction: "Soita riffi G-kieleltä.", riffs: [
    // Sävelet G3, A3 ja B3: vapaa kieli, 2. ja 4. nauha. Vaihtelevampi: toisto ja hyppy.
    Hn("g-nousu", "G-kielen kaari", Wn(Ss, [0, 2, 4, 2]), "Vapaa kieli, 2., 4. ja takaisin 2. nauhaan."),
    Hn("g-toisto", "Kaksi samaa", Wn(Ss, [2, 2, 0, 4]), "Kaksi erillistä näppäystä 2. nauhalla, sitten vapaa kieli ja 4. nauha. Vaimenna kieli hetkeksi samojen sävelten välissä."),
    Hn("g-hyppy", "Hyppy alas", Wn(Ss, [4, 0, 2, 0]), "4. nauha, vapaa kieli, 2. nauha ja taas vapaa kieli.")
  ] }
], Ut = Re.flatMap((o) => o.riffs), Dc = (o) => Re.find((i) => i.riffs.some((l) => l.id === o));
function $c(o) {
  const i = Dc(o), l = i?.riffs.find((u) => u.id === o);
  return i && l ? { level: i, riff: l, number: i.riffs.indexOf(l) + 1 } : void 0;
}
const _a = (o) => `${_s[o.string]}-kieli, ${o.fret === 0 ? "vapaa kieli" : `${o.fret}. nauha`}`;
class xa {
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
const $h = 3;
class Bh {
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
    return this.failed >= $h;
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
    return this.absorb(), this.current = new xa(this.expected, i, this.input), this.current;
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
class Vh {
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
const Uh = ["ready", "listening", "success", "retry"], wc = (o) => o.midi.map(() => "pending"), ut = "board";
class Hh {
  constructor(i, l, u = () => performance.now()) {
    this.audio = i, this.store = l, this.clock = u, this.state = {
      phase: "home",
      ...this.position(),
      index: 0,
      memory: [],
      failedAttempts: 0,
      playing: null,
      modelPlaying: !1,
      hint: !1,
      feedback: null,
      achievement: null,
      ...this.progressPatch()
    };
  }
  audio;
  store;
  clock;
  state;
  listeners = /* @__PURE__ */ new Set();
  op = 0;
  round = 0;
  practice = null;
  practiceRiff = null;
  roundStart = null;
  replays = 0;
  /** Tallennettu kohta: opastus, kotitreenin seuraava riffi tai läpäisty kotitreeni. */
  position() {
    const i = this.store.level(ut);
    if (!this.store.data.tutorialDone) return { riff: ui, tutorial: !0, level: Re[0], riffNumber: 1, marks: wc(ui) };
    const l = this.store.currentRiff(ut) ?? i.riffs[i.riffs.length - 1];
    return { riff: l, tutorial: !1, level: i, riffNumber: i.riffs.indexOf(l) + 1, marks: wc(l) };
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
    return Bc(this.store, i);
  }
  // ---- aloitus ja kotitreenit ----
  /** Pelaa: opastus, kesken oleva kotitreeni tai sen onnittelunäkymä. */
  play() {
    this.beginRound();
  }
  /** Pelin aloitusnäkymä: kotitreenit ja eteneminen. Kaikki pysähtyy; edistyminen on jo tallennettu. */
  home() {
    ++this.op, this.audio.stopModel(), this.practice = null, this.set({
      phase: "home",
      playing: null,
      modelPlaying: !1,
      feedback: null,
      achievement: null,
      index: 0,
      hint: !1,
      memory: [],
      failedAttempts: 0,
      ...this.position(),
      ...this.progressPatch()
    });
  }
  /**
   * Valitse kotitreeni: läpäisty, nykyinen tai seuraava avattu. Nykyinen jatkuu siitä, mihin jäätiin;
   * muu kotitreeni (tai restart) alkaa ensimmäisestä riffistä. Läpäistyt kotitreenit säilyvät aina.
   */
  chooseLevel(i, l = !1) {
    !["home", "level-complete"].includes(this.state.phase) || !this.store.unlockedLevels(ut).includes(i) || ((l || i !== this.store.run(ut).level) && this.store.startLevel(ut, i), this.store.finishTutorial(), this.beginRound());
  }
  // ---- kierros ----
  /**
   * Uusi riffi (tai uusi yritys samalla riffillä: riff annettu).
   * start: 'ready' = pelaaja aloittaa kuuntelun itse (uusi riffi), 'listen' = suoraan vuoroon ilman mallia.
   */
  beginRound(i, l = "ready") {
    ++this.op, this.audio.stopModel(), this.set({ modelPlaying: !1, playing: null });
    const u = this.position();
    if (!u.tutorial && !i && this.store.currentRiff(ut) === null) {
      this.showLevelComplete();
      return;
    }
    const d = u.tutorial ? ui : i ?? u.riff, h = !!this.practice && this.practiceRiff === d.id;
    h || (this.practice = new Bh(d.midi, ut), this.practiceRiff = d.id), this.replays = 0, this.roundStart = null, this.set({
      ...u,
      riff: d,
      riffNumber: u.tutorial ? 1 : u.level.riffs.indexOf(d) + 1,
      hint: h ? this.state.hint : !1,
      feedback: null,
      achievement: null,
      ...this.progressPatch()
    }), this.startAttempt(), l === "listen" ? this.startListening() : this.set({ phase: "ready" });
  }
  /** Uusi yritys samassa sarjassa: kierrostunniste vaihtuu, pallukat harmaiksi, muistivihjeet näkyviin. */
  startAttempt() {
    const i = this.practice.start(++this.round);
    return this.state.hint && i.useHint(), this.set({ index: 0, marks: i.marks, memory: this.practice.memory, failedAttempts: this.practice.failedAttempts }), i;
  }
  get checker() {
    return this.practice?.attempt ?? null;
  }
  async playModel(i) {
    const l = ++this.op, u = i ? "model-playing" : this.state.phase;
    this.set({ phase: u, playing: null, modelPlaying: !0 });
    let d;
    try {
      d = await this.audio.playModel(this.state.riff.midi, (h) => {
        l === this.op && this.set({ playing: h });
      });
    } catch (h) {
      if (l !== this.op) return;
      this.set({ feedback: { tone: "bad", text: Fc(h) + " Voit silti soittaa riffin sävelvihjeen avulla." } }), d = !0;
    }
    l !== this.op || !d || (this.set({ playing: null, modelPlaying: !1 }), i && this.startListening());
  }
  startListening() {
    this.roundStart ??= this.clock(), this.set({ phase: "listening" });
  }
  /**
   * Virtuaalikitaran painallus. Jokainen painallus soi ja on täsmälleen yksi syötetapahtuma, joten
   * sama sävel kahdesti (A–A) on kaksi painallusta. Vastaukseksi lasketaan vain vastausvuorossa;
   * muulloin otelaudalla voi soitella vapaasti. Mallisoiton aikana otelauta on lukittu.
   */
  tap(i) {
    const l = this.state.phase;
    return !Uh.includes(l) || this.state.modelPlaying ? null : (this.audio.pluck(i), l === "listening" ? this.answer(i) : "free");
  }
  answer(i) {
    const l = this.checker;
    if (!l) return "free";
    const u = l.feed({ midi: i, round: this.round, input: ut }), d = l.expected.length;
    return u.type === "accepted" ? (this.set({ index: u.index + 1, marks: l.marks, feedback: { tone: "good", text: u.mark === "yellow" ? `${Se(i)} löytyi (${u.index + 1}/${d}). Kohta korjattiin, joten pallukka on keltainen.` : `${Se(i)} oikein (${u.index + 1}/${d}).` } }), u.complete && this.finish(l), "right") : u.type === "wrong" ? (this.set({ marks: l.marks, feedback: { tone: "bad", text: "Väärä sävel. Kokeile uudelleen." } }), "wrong") : "free";
  }
  /**
   * Riffi soitettu loppuun. Kirjataan kerran.
   * - Virheetön → success: pelaaja valitsee itse Soita uudelleen tai Seuraava riffi.
   * - Keltaisia → retry: vihreät ja keltaiset jäävät näkyviin. Ei automaattista mallia eikä uutta
   *   yritystä; pelaaja voi kuunnella ja kokeilla vapaasti ja valitsee itse Yritä uudelleen.
   */
  finish(i) {
    const l = this.state.riff, u = this.practice.finish(), d = this.practice.failedAttempts, h = this.store.record({
      riff: l.id,
      input: ut,
      hint: i.hintUsed,
      passed: u,
      wrong: i.wrongCount,
      octave: i.octaveCount,
      replays: this.replays,
      ms: Math.max(0, Math.round(this.clock() - (this.roundStart ?? this.clock()))),
      at: Date.now()
    });
    if (this.set({ ...this.progressPatch(), failedAttempts: d }), l.id === ui.id) {
      this.practice = null, this.set({ phase: "success", feedback: { tone: "good", text: u ? `Hienoa! Opastus on tehty. Seuraavaksi ${Re[0].name}: kolme riffiä ${Re[0].title.toLowerCase().replace("kieli", "kielellä")}.` : "Opastus on tehty. Riffi hyväksytään, kun kaikki pallukat ovat vihreitä." } });
      return;
    }
    const v = { flawless: u, wrong: i.wrongCount, firstPass: h.firstPass, firstStar: h.firstStar, newBest: h.newBest };
    if (!u) {
      this.set({ phase: "retry", achievement: v, feedback: { tone: "info", text: "Soitit riffin loppuun! Kokeile vielä ilman virheitä. Voit kuunnella ja kokeilla säveliä vapaasti – niitä ei arvioida ennen kuin valitset Yritä uudelleen." + (h.newBest ? ` Uusi ennätys: ${Kh(i.wrongCount)}.` : "") + (this.practice.memoryActive ? " Muistivihjeet ovat käytössä: aiemmin heti oikein soitetut sävelet näkyvät seuraavassa yrityksessä." : "") } });
      return;
    }
    this.practice = null;
    const g = this.record(l.id);
    this.set({ phase: "success", achievement: v, feedback: { tone: "good", text: i.hintUsed ? `Virheetön, vihjeen kanssa! Riffi läpäisty.${g.star ? "" : " Soita uudelleen ilman vihjettä, niin saat tähden."}` : `Virheetön! Kaikki pallukat vihreinä – riffi läpäisty.${h.firstStar ? " Sait tähden." : ""}` } });
  }
  showLevelComplete() {
    const i = this.store.level(ut);
    this.set({ phase: "level-complete", level: i, ...this.progressPatch(), feedback: null, hint: !1, achievement: null });
  }
  // ---- sivutoiminnot ----
  /**
   * Kuuntele riffi / Pysäytä kuuntelu (sama painike).
   * - Kesken yrityksen malli soi, eikä mitään nollata: sama paikka, samat pallukat, muistivihjeet ja laskurit.
   * - ready: ensimmäinen kuuntelu, sitten vuoro.
   * - success / retry: pelkkä kuuntelu, vaihe ja pallukat eivät muutu.
   */
  listen() {
    if (this.state.modelPlaying) {
      this.stopListening();
      return;
    }
    const i = this.state.phase;
    if (i === "success" || i === "retry") {
      this.playModel(!1);
      return;
    }
    ["ready", "listening"].includes(i) && (i !== "ready" && this.replays++, this.playModel(!0));
  }
  /** Pysäytä kuuntelu: malli katkeaa, eteneminen säilyy; ensimmäisen kuuntelun jälkeen vuoro alkaa. */
  stopListening() {
    this.state.modelPlaying && (++this.op, this.audio.stopModel(), this.set({ modelPlaying: !1, playing: null }), this.state.phase === "model-playing" && this.startListening());
  }
  /** Välilehti taustalle: malli pysähtyy, mutta yritys ja pallukat säilyvät. */
  hidden() {
    this.stopListening();
  }
  /** Yritä uudelleen (keltaisten jälkeen): uusi arvioitava yritys ensimmäisestä sävelestä. Muistivihjeet säilyvät. */
  retry() {
    this.state.phase === "retry" && this.beginRound(this.state.riff, "listen");
  }
  /** Soita uudelleen (virheettömän jälkeen): sama riffi uutena yrityksenä. Läpäisy säilyy. */
  playAgain() {
    this.state.phase === "success" && !this.state.tutorial && this.beginRound(this.state.riff, "listen");
  }
  toggleHint() {
    const i = !this.state.hint;
    i && this.checker?.useHint(), this.set({ hint: i });
  }
  /** Seuraava riffi; kotitreenin kolmannen jälkeen onnittelunäkymä. */
  next() {
    this.state.phase === "success" && this.beginRound();
  }
  /** Onnittelunäkymästä: seuraava kotitreeni. Ei koskaan automaattisesti. */
  continueLevel() {
    if (this.state.phase !== "level-complete") return;
    const i = this.state.level.number + 1;
    Re.some((l) => l.number === i) && (this.store.startLevel(ut, i), this.beginRound());
  }
  /** Onnittelunäkymästä: sama kotitreeni alusta. */
  repeatLevel(i = this.state.level.number) {
    this.state.phase === "level-complete" && (this.store.startLevel(ut, i), this.beginRound());
  }
  /** Sivulta poistuttaessa: kaikki ääni pysähtyy. */
  dispose() {
    ++this.op, this.audio.stopModel();
  }
}
function Bc(o, i) {
  const l = o.data.stats.board[i];
  return { passed: (l?.passed ?? 0) > 0, star: (l?.solo ?? 0) > 0, best: l?.best ?? null, done: l?.done ?? 0 };
}
function Wh(o) {
  const i = Re.flatMap((l) => l.riffs).map((l) => Bc(o, l.id));
  return {
    level: o.run(ut).level,
    completed: o.completedLevels(ut),
    passed: i.filter((l) => l.passed).length,
    stars: i.filter((l) => l.star).length,
    total: i.length,
    started: o.data.tutorialDone || i.some((l) => l.done > 0)
  };
}
const Kh = (o) => o === 1 ? "vain yksi väärä sävel" : `vain ${o} väärää säveltä`, Qh = 4e3, Sc = 12, Gh = 1500;
function qh(o, i) {
  const l = o.left + o.stickyLeft, u = o.right;
  let d = 0;
  if (i.left < l ? d = i.left - l - Sc : i.right > u && (d = i.right - u + Sc), d === 0) return null;
  const h = Math.max(0, Math.min(o.maxScroll, o.scrollLeft + d));
  return Math.abs(h - o.scrollLeft) < 1 ? null : h;
}
function Yh(o, i) {
  return i.right <= o.left + o.stickyLeft || i.left >= o.right;
}
function Xh(o, i, l, { stickySelector: u, enabled: d = !0, playback: h } = {}) {
  const v = he.useRef(0), g = he.useRef(!1), E = he.useRef(""), _ = he.useRef(0), N = he.useRef(h);
  he.useEffect(() => {
    const w = o.current;
    if (!w || !d) return;
    const P = () => {
      v.current = Date.now() + Qh;
    }, z = () => {
      g.current = !0, P();
    }, L = () => {
      g.current && (g.current = !1, P());
    }, I = (T) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(T.key) && P();
    };
    return w.addEventListener("pointerdown", z, { passive: !0 }), w.addEventListener("touchstart", z, { passive: !0 }), w.addEventListener("wheel", P, { passive: !0 }), w.addEventListener("keydown", I), window.addEventListener("pointerup", L, { passive: !0 }), window.addEventListener("pointercancel", L, { passive: !0 }), window.addEventListener("touchend", L, { passive: !0 }), window.addEventListener("touchcancel", L, { passive: !0 }), () => {
      w.removeEventListener("pointerdown", z), w.removeEventListener("touchstart", z), w.removeEventListener("wheel", P), w.removeEventListener("keydown", I), window.removeEventListener("pointerup", L), window.removeEventListener("pointercancel", L), window.removeEventListener("touchend", L), window.removeEventListener("touchcancel", L);
    };
  }, [o, d]), he.useLayoutEffect(() => {
    const w = h !== void 0 && !!h && h !== N.current;
    N.current = h, w && !g.current && (v.current = 0);
  }, [h]), he.useLayoutEffect(() => {
    h === void 0 && E.current === "" && l !== "" && Date.now() - _.current > Gh && !g.current && (v.current = 0), E.current !== "" && l === "" && (_.current = Date.now()), E.current = l;
    const w = o.current;
    if (!w || !d || !l || g.current || Date.now() < v.current) return;
    const P = w.querySelector(i);
    if (!P) return;
    const z = w.getBoundingClientRect(), L = P.getBoundingClientRect(), I = u ? w.querySelector(u) : null, T = I && getComputedStyle(I).position === "sticky" ? I.getBoundingClientRect().width : 0, W = {
      left: z.left,
      right: z.left + w.clientWidth,
      scrollLeft: w.scrollLeft,
      maxScroll: w.scrollWidth - w.clientWidth,
      stickyLeft: T
    }, U = qh(W, L);
    if (U === null) return;
    const oe = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Yh(W, L);
    typeof w.scrollTo == "function" ? w.scrollTo({ left: U, behavior: oe ? "auto" : "smooth" }) : w.scrollLeft = U;
  }, [o, i, l, u, d, h]);
}
const Jh = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), bh = ["e", "B", "G", "D", "A", "E"];
function Zh({ string: o }) {
  return /* @__PURE__ */ c.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ c.jsxs("span", { children: [
      o + 1,
      " · ",
      /* @__PURE__ */ c.jsx("strong", { children: bh[o] })
    ] }),
    o === 0 ? /* @__PURE__ */ c.jsx("small", { children: "ohuin" }) : o === 5 ? /* @__PURE__ */ c.jsx("small", { children: "paksuin" }) : null
  ] });
}
const ep = (o) => ({ "--string-thickness": 1.25 + o * 0.45 + "px" }), tp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function np({ min: o, max: i }) {
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
function rp({ area: o, marks: i = [], mutedStrings: l = [], disabled: u = !1, onAnswer: d, caption: h = "Otelauta", follow: v = "hints", playback: g }) {
  const E = { "--cols": o.max - o.min + 1 }, { strings: _, min: N, max: w } = o, [P, z] = he.useState({ string: Math.min(..._), fret: N }), L = he.useRef(null), I = new Map(i.map((b) => [ai(b), b])), T = i.map((b) => `${ai(b)}${b.kind}`).join(",");
  he.useEffect(() => {
    if (v !== "hints") return;
    const b = L.current, H = b?.querySelector(".target, .anchor");
    b && H && (b.scrollLeft += H.getBoundingClientRect().left - b.getBoundingClientRect().left - b.clientWidth / 2 + H.clientWidth / 2);
  }, [T, v]), he.useEffect(() => {
    v === "playing" && L.current && (L.current.scrollLeft = 0);
  }, [v, N, w]);
  const W = i.find((b) => b.kind === "playing");
  Xh(L, ".playing", W ? ai(W) : "", { stickySelector: "tbody th", enabled: v === "playing", playback: g });
  const [U, J] = he.useState({ left: !1, right: !1 });
  he.useEffect(() => {
    const b = L.current;
    if (!b) return;
    const H = () => {
      const pe = b.scrollLeft > 2, Pe = b.scrollLeft + b.clientWidth < b.scrollWidth - 2;
      J((je) => je.left === pe && je.right === Pe ? je : { left: pe, right: Pe });
    };
    H(), b.addEventListener("scroll", H, { passive: !0 });
    const ne = typeof ResizeObserver > "u" ? null : new ResizeObserver(H);
    return ne?.observe(b), () => {
      b.removeEventListener("scroll", H), ne?.disconnect();
    };
  }, [T, N, w]);
  const oe = _.includes(P.string) && P.fret >= N && P.fret <= w ? P : { string: Math.min(..._), fret: N };
  return /* @__PURE__ */ c.jsxs("div", { className: "fret-wrap" + (U.left ? " more-left" : "") + (U.right ? " more-right" : ""), children: [
    (U.left || U.right) && /* @__PURE__ */ c.jsxs("p", { className: "fret-scroll-hint", children: [
      U.left && /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      U.left && U.right ? "molemmilla puolilla" : U.right ? "oikealla" : "vasemmalla",
      U.right && /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ c.jsx("div", { ref: L, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ c.jsxs("table", { className: "practice-board", style: E, children: [
      /* @__PURE__ */ c.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ c.jsx(np, { min: N, max: w }),
      /* @__PURE__ */ c.jsx("tbody", { children: Pc.OPEN_PITCHES.map((b, H) => /* @__PURE__ */ c.jsxs("tr", { className: _.includes(H) ? "" : "unused", style: ep(H), children: [
        /* @__PURE__ */ c.jsxs("th", { scope: "row", "aria-label": `${H + 1}. kieli: ${_s[H]}${l.includes(H) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ c.jsx(Zh, { string: H }),
          l.includes(H) && /* @__PURE__ */ c.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        hh([H], N, w).map((ne) => {
          const pe = I.get(ai(ne)), Pe = `${_s[H]}-kieli, ${fh(ne.fret)}`;
          return /* @__PURE__ */ c.jsx("td", { className: `${ne.fret === 0 ? "open-fret " : ""}${pe ? pe.kind === "answer" ? "target" : pe.kind : ""}`, children: /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              "data-string": H,
              "data-fret": ne.fret,
              tabIndex: oe.string === H && oe.fret === ne.fret ? 0 : -1,
              onFocus: () => z(ne),
              onKeyDown: (je) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(je.key)) return;
                je.preventDefault();
                const Qe = [..._].sort((Ge, Ae) => Ge - Ae), Be = Qe.indexOf(H), Le = je.key === "ArrowUp" ? Qe[Math.max(0, Be - 1)] : je.key === "ArrowDown" ? Qe[Math.min(Qe.length - 1, Be + 1)] : H, Ve = je.key === "Home" ? N : je.key === "End" ? w : Math.max(N, Math.min(w, ne.fret + (je.key === "ArrowRight" ? 1 : je.key === "ArrowLeft" ? -1 : 0)));
                je.currentTarget.closest("table")?.querySelector(`button[data-string="${Le}"][data-fret="${Ve}"]`)?.focus();
              },
              disabled: u || !_.includes(H),
              "aria-label": Pe + (pe ? `, ${tp[pe.kind]}${pe.label ? " " + pe.label : ""}` : ""),
              onClick: () => d?.(ne),
              children: pe ? /* @__PURE__ */ c.jsx("span", { className: "dot", children: pe.label || "●" }) : null
            }
          ) }, ne.fret);
        })
      ] }, H)) })
    ] }) })
  ] });
}
const xr = {
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
}, ip = "kitaraharjoittelija.html?polku=otelauta";
function sp(o) {
  const i = new URLSearchParams(o).get("tila");
  return i === "harjoitus" || i === "peli" ? i : null;
}
const Vc = (o) => o ? `?tila=${o}` : "./" + (typeof location > "u" ? "riffikaiku.html" : location.pathname.split("/").pop() || "riffikaiku.html"), lp = (o) => `${o ? xr[o].title + " · " : ""}Riffikaiku (beta) – Musiikin kartta`, ap = { strings: Oc, min: Oh, max: Dh, fixed: "" };
function hi({ mode: o }) {
  return /* @__PURE__ */ c.jsxs("nav", { className: "riff-crumbs", "aria-label": "Sijainti", children: [
    /* @__PURE__ */ c.jsxs("a", { className: "riff-back", href: ip, children: [
      /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "←" }),
      " Takaisin harjoitusvalikkoon"
    ] }),
    o && /* @__PURE__ */ c.jsxs("ol", { children: [
      /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsx("a", { href: Vc(null), children: "Riffikaiku" }) }),
      /* @__PURE__ */ c.jsx("li", { "aria-current": "page", children: xr[o].tag })
    ] })
  ] });
}
function Sr({ mode: o }) {
  return /* @__PURE__ */ c.jsx("p", { className: `riff-mode-tag ${o}`, "data-testid": "mode-tag", children: xr[o].title });
}
function Uc({ slots: o, label: i }) {
  return /* @__PURE__ */ c.jsx("ol", { className: "riff-slots", "aria-label": i, "data-testid": "slots", children: o.map((l, u) => /* @__PURE__ */ c.jsxs("li", { className: l.cls, "data-mark": l.mark, "aria-label": l.label, children: [
    /* @__PURE__ */ c.jsx("span", { className: "slot-note", "aria-hidden": "true", children: l.content }),
    l.symbol && /* @__PURE__ */ c.jsx("span", { className: "slot-symbol", "aria-hidden": "true", children: l.symbol })
  ] }, u)) });
}
function wa(o, i, l = () => !0, u = (d) => String(d + 1)) {
  const d = /* @__PURE__ */ new Map();
  return o.spots.forEach((h, v) => {
    if (!l(v)) return;
    const g = { ...h, midi: o.midi[v] }, E = ai(g), _ = d.get(E);
    d.set(E, { ...g, kind: i === v ? "playing" : _?.kind ?? "answer", label: _ ? `${_.label}·${u(v)}` : u(v) });
  }), [...d.values()];
}
const op = ["ohuin kieli", "toiseksi ohuin", "kolmanneksi ohuin", "kolmanneksi paksuin", "toiseksi paksuin", "paksuin kieli"];
function Hc({ focus: o, marks: i, disabled: l, onAnswer: u, caption: d }) {
  const h = o.length < Oc.length;
  return /* @__PURE__ */ c.jsxs("div", { className: `riff-board ${h ? "has-focus" : ""} ${o.map((v) => `focus-s${v}`).join(" ")}`, "data-testid": "board", children: [
    h && /* @__PURE__ */ c.jsxs("p", { className: "riff-focus-legend", "data-testid": "focus-legend", children: [
      /* @__PURE__ */ c.jsx("span", { className: "swatch", "aria-hidden": "true" }),
      " Harjoituskieli: ",
      o.map((v) => `${_s[v]}-kieli`).join(" ja "),
      o.length === 1 ? ` (${op[o[0]]})` : ""
    ] }),
    /* @__PURE__ */ c.jsx(rp, { area: ap, marks: i, disabled: l, onAnswer: u, caption: d })
  ] });
}
const up = { pending: "harmaa, ei vielä ratkaistu", red: "punainen, väärä sävel – yritä tätä kohtaa uudelleen", green: "vihreä, oikein heti", yellow: "keltainen, löytyi virheen jälkeen" }, jc = { pending: "", red: "✗", green: "✓", yellow: "↻" }, cp = ["ready", "model-playing", "listening", "success", "retry"], Ec = (o) => `${Re[o - 1]?.name ?? `Kotitreeni ${o}`} – ${Re[o - 1]?.title ?? ""}`;
function fp(o) {
  return o.riff.midi.map((i, l) => {
    const u = o.marks[l] ?? "pending", d = o.modelPlaying && o.playing === l, h = (u === "pending" || u === "red") && l === o.index && o.phase === "listening", v = u === "pending" && o.memory[l] != null, g = u === "green" || u === "yellow";
    return {
      cls: `${u}${h ? " current" : ""}${d ? " model" : ""}${v ? " memory" : ""}`,
      mark: u,
      content: g ? Se(i) : d ? "♪" : v ? Se(o.memory[l]) : jc[u] || (h ? "?" : ""),
      symbol: g ? jc[u] : void 0,
      label: `${l + 1}. sävel: ${up[u]}${v ? `, muistivihje ${Se(o.memory[l])}` : ""}${h ? ", vuorossa" : ""}`
    };
  });
}
function dp({ game: o, s: i }) {
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
function hp({ game: o, s: i, titleRef: l }) {
  const u = Re.flatMap((w) => w.riffs).map((w) => o.record(w.id)), d = u.filter((w) => w.passed).length, h = u.filter((w) => w.star).length, v = Re.find((w) => w.number === i.level.number) ?? Re[0], g = !i.tutorial && i.passedInRun.length >= v.riffs.length, E = g ? Re.find((w) => w.number === v.number + 1 && i.unlockedLevels.includes(w.number)) : void 0, _ = i.tutorial ? "Aloita peli: lyhyt opastus" : E ? `Aloita: ${E.name} – ${E.title}` : g ? "Kaikki kotitreenit suoritettu – valitse uusinta" : `${d > 0 || i.passedInRun.length > 0 ? "Jatka" : "Aloita"}: ${v.name} · Riffi ${i.passedInRun.length + 1}/${v.riffs.length}`, N = () => E ? o.chooseLevel(E.number) : o.play();
  return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-phase": "home", "data-mode": "peli", "aria-labelledby": "riff-title", children: [
    /* @__PURE__ */ c.jsx(hi, { mode: "peli" }),
    /* @__PURE__ */ c.jsxs("div", { className: "intro riff-intro", children: [
      /* @__PURE__ */ c.jsx(Sr, { mode: "peli" }),
      /* @__PURE__ */ c.jsx("h1", { id: "riff-title", ref: l, tabIndex: -1, children: "Kuuntele ja toista" }),
      /* @__PURE__ */ c.jsx("p", { children: "Kuuntele riffi ja toista se otelaudalla samassa järjestyksessä. Riffi läpäistään, kun kaikki pallukat ovat vihreitä. Ei aikarajaa eikä elämiä – yritä niin monta kertaa kuin haluat." })
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
      const P = i.completedLevels.includes(w.number), z = i.unlockedLevels.includes(w.number), L = i.level.number === w.number && !i.tutorial && !g;
      return /* @__PURE__ */ c.jsxs("li", { className: P ? "done" : z ? "open" : "locked", children: [
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsxs("strong", { children: [
            w.name,
            " – ",
            w.title
          ] }),
          /* @__PURE__ */ c.jsx("span", { children: P ? "suoritettu" : L ? "kesken" : z ? "avattu" : "lukittu – läpäise ensin edellinen kotitreeni" }),
          /* @__PURE__ */ c.jsx("span", { className: "riff-level-riffs", children: w.riffs.map((I) => {
            const T = o.record(I.id);
            return /* @__PURE__ */ c.jsxs("span", { className: T.star ? "star" : T.passed ? "passed" : "", children: [
              /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: T.star ? "★" : T.passed ? "✓" : "○" }),
              " ",
              I.title,
              /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: T.star ? ", läpäisty ilman vihjettä" : T.passed ? ", läpäisty" : ", ei vielä läpäisty" })
            ] }, I.id);
          }) })
        ] }),
        z && /* @__PURE__ */ c.jsx("button", { type: "button", className: L ? "primary" : "", onClick: () => o.chooseLevel(w.number, P && !L), children: L ? "Jatka" : P ? "Pelaa uudelleen" : "Aloita" })
      ] }, w.number);
    }) }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", children: [
      "Muiden kielten kotitreenit tulevat myöhemmin. Haluatko soittaa oikealla kitaralla? ",
      /* @__PURE__ */ c.jsx("a", { href: "?tila=harjoitus", children: "Riffiharjoitus – oikea kitara" }),
      "."
    ] })
  ] });
}
function pp({ game: o }) {
  const i = he.useSyncExternalStore(o.subscribe, o.getState), [l, u] = he.useState(null), d = he.useRef(), h = cp.includes(i.phase) ? "play" : i.phase, v = he.useRef(null), g = he.useRef(null), E = he.useRef(h);
  if (he.useEffect(() => {
    E.current !== h && (h === "level-complete" ? g.current?.focus() : v.current?.focus()), E.current = h;
  }, [h]), he.useEffect(() => {
    const W = () => {
      document.visibilityState === "hidden" && o.hidden();
    }, U = () => o.dispose();
    return document.addEventListener("visibilitychange", W), window.addEventListener("pagehide", U), () => {
      document.removeEventListener("visibilitychange", W), window.removeEventListener("pagehide", U), clearTimeout(d.current);
    };
  }, [o]), he.useEffect(() => {
    u(null);
  }, [i.riff.id, i.phase]), i.phase === "home") return /* @__PURE__ */ c.jsx(hp, { game: o, s: i, titleRef: v });
  function _() {
    clearTimeout(d.current), u(null), o.home();
  }
  function N(W) {
    const U = o.tap(W.midi);
    U && (clearTimeout(d.current), u((J) => ({ p: W, result: U, n: (J?.n ?? 0) + 1 })), d.current = setTimeout(() => u(null), 600));
  }
  if (i.phase === "level-complete") {
    const W = i.level.riffs.filter((U) => o.record(U.id).star).length;
    return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-phase": i.phase, "data-mode": "peli", "aria-labelledby": "riff-cleared-title", children: [
      /* @__PURE__ */ c.jsx(hi, { mode: "peli" }),
      /* @__PURE__ */ c.jsx(Sr, { mode: "peli" }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-panel riff-cleared", "data-testid": "level-complete", children: [
        /* @__PURE__ */ c.jsx("p", { className: "riff-cleared-badge", "aria-hidden": "true", children: "★".repeat(W) + "☆".repeat(i.level.riffs.length - W) }),
        /* @__PURE__ */ c.jsx("h2", { id: "riff-cleared-title", tabIndex: -1, ref: g, children: "Onneksi olkoon!" }),
        /* @__PURE__ */ c.jsxs("p", { className: "riff-cleared-big", children: [
          Ec(i.level.number),
          " suoritettu!"
        ] }),
        /* @__PURE__ */ c.jsxs("p", { children: [
          "Läpäisit kaikki kolme riffiä virheettömästi. Tähtiä ",
          W,
          "/",
          i.level.riffs.length,
          W < i.level.riffs.length ? " – tähden saa, kun riffi menee virheettä ilman vihjettä." : " – kaikki ilman vihjettä!"
        ] }),
        i.level.number < Re.length ? /* @__PURE__ */ c.jsxs("p", { children: [
          "Seuraava kotitreeni on auki: ",
          Ec(i.level.number + 1),
          "."
        ] }) : /* @__PURE__ */ c.jsx("p", { children: "Olet suorittanut kaikki nykyiset kotitreenit. Muiden kielten kotitreenit ovat tulossa." }),
        /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
          i.level.number < Re.length && /* @__PURE__ */ c.jsxs("button", { type: "button", className: "primary", onClick: () => o.continueLevel(), children: [
            "Jatka: ",
            Re[i.level.number].name
          ] }),
          /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o.repeatLevel(), children: "Pelaa uudelleen" }),
          /* @__PURE__ */ c.jsx("button", { type: "button", onClick: _, children: "Pelin valikko" })
        ] })
      ] })
    ] });
  }
  const w = i.riff.midi.length, P = ["ready", "listening", "success", "retry"].includes(i.phase) && !i.modelPlaying, z = i.phase === "ready" ? "Kuuntele riffi aloittaaksesi." : i.phase === "model-playing" ? "Kuuntele riffi…" : i.phase === "listening" ? i.modelPlaying ? "Kuuntele riffi…" : "Sinun vuorosi!" : i.phase === "success" ? "Riffi läpäisty!" : i.phase === "retry" ? "Riffi soitettu loppuun" : "", L = l ? [{
    ...l.p,
    kind: l.result === "right" ? "answer" : l.result === "wrong" ? "wrong" : "playing",
    label: l.result === "wrong" ? "✗" : Se(l.p.midi)
  }] : [], I = [...i.hint ? wa(i.riff, i.playing) : [], ...L], T = i.achievement;
  return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-phase": i.phase, "data-mode": "peli", "aria-labelledby": "riff-title", children: [
    /* @__PURE__ */ c.jsx(hi, { mode: "peli" }),
    /* @__PURE__ */ c.jsxs("div", { className: "riff-panel riff-play", children: [
      /* @__PURE__ */ c.jsxs("header", { className: "riff-round-heading", children: [
        /* @__PURE__ */ c.jsx(Sr, { mode: "peli" }),
        /* @__PURE__ */ c.jsx("h1", { id: "riff-title", ref: v, tabIndex: -1, "data-testid": "level-heading", children: i.tutorial ? `${Re[0].name} · Opastus` : `${i.level.name} · Riffi ${i.riffNumber}/${i.level.riffs.length}` }),
        /* @__PURE__ */ c.jsx("p", { className: "riff-name", children: i.tutorial ? "Kaksi säveltä" : i.riff.title }),
        /* @__PURE__ */ c.jsx(dp, { game: o, s: i })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-turn", children: [
        /* @__PURE__ */ c.jsx("p", { className: `riff-status ${i.phase === "listening" && !i.modelPlaying ? "turn" : i.phase === "success" ? "good" : ""}`, role: "status", "data-testid": "riff-status", children: z }),
        /* @__PURE__ */ c.jsx("p", { className: "riff-instruction", "data-testid": "instruction", children: i.level.instruction })
      ] }),
      /* @__PURE__ */ c.jsx(Uc, { slots: fp(i), label: `Ratkaistu ${i.index} / ${w} säveltä` }),
      /* @__PURE__ */ c.jsxs("p", { className: "riff-count", "data-testid": "count", children: [
        "Ratkaistu ",
        i.index,
        "/",
        w,
        i.memory.some((W) => W !== null) ? " · muistivihjeet käytössä" : ""
      ] }),
      T && (T.firstStar || T.newBest || T.flawless && T.firstPass) && /* @__PURE__ */ c.jsxs("p", { className: "riff-achievement", "data-testid": "achievement", children: [
        T.firstStar ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "★ " }),
          "Tähti! Virheetön ilman vihjettä."
        ] }) : T.flawless && T.firstPass ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "✓ " }),
          "Ensimmäinen läpäisy!"
        ] }) : null,
        T.newBest && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          " Uusi ennätys: ",
          T.wrong === 0 ? "ei yhtään väärää säveltä" : T.wrong === 1 ? "vain yksi väärä sävel" : `vain ${T.wrong} väärää säveltä`,
          "."
        ] })
      ] }),
      i.feedback && /* @__PURE__ */ c.jsx("p", { className: `riff-feedback ${i.feedback.tone}`, role: "status", "data-testid": "feedback", children: i.feedback.text }),
      i.hint && /* @__PURE__ */ c.jsxs("div", { className: "riff-hint", "data-testid": "hint", children: [
        /* @__PURE__ */ c.jsxs("p", { children: [
          /* @__PURE__ */ c.jsx("strong", { children: "Sävelet:" }),
          " ",
          i.riff.midi.map(Se).join(" – ")
        ] }),
        /* @__PURE__ */ c.jsx("p", { children: i.riff.tip })
      ] }),
      /* @__PURE__ */ c.jsx(
        Hc,
        {
          focus: i.level.strings,
          marks: I,
          disabled: !P,
          onAnswer: N,
          caption: P ? "Virtuaalikitara: kaikki kuusi kieltä, nauhat 0–5" : "Virtuaalikitara: odota mallin loppuun"
        }
      ),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-actions riff-main-actions", children: [
        i.phase === "success" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", onClick: () => o.next(), children: i.tutorial ? `Aloita ${Re[0].name}` : "Seuraava riffi" }),
          !i.tutorial && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o.playAgain(), children: "Soita uudelleen" })
        ] }),
        i.phase === "retry" && /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", onClick: () => o.retry(), children: "Yritä uudelleen" }),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            type: "button",
            className: ["ready", "listening", "model-playing"].includes(i.phase) ? "primary" : "",
            onClick: () => o.listen(),
            "aria-pressed": i.modelPlaying,
            "data-testid": "listen",
            children: i.modelPlaying ? "Pysäytä kuuntelu" : "Kuuntele riffi"
          }
        ),
        /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": i.hint, onClick: () => o.toggleHint(), children: i.hint ? "Piilota vihje" : "Vihje" })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "riff-end-actions", children: /* @__PURE__ */ c.jsx("button", { type: "button", onClick: _, children: "Lopeta peli" }) })
    ] })
  ] });
}
const Wc = 440, Sa = (o) => Wc * 2 ** ((o - 69) / 12), Ts = (o, i) => 1200 * Math.log2(o / i), Es = 5, mp = 100, Ms = [
  { name: "E2", midi: 40, number: 6 },
  { name: "A2", midi: 45, number: 5 },
  { name: "D3", midi: 50, number: 4 },
  { name: "G3", midi: 55, number: 3 },
  { name: "B3", midi: 59, number: 2 },
  { name: "E4", midi: 64, number: 1 }
], vp = (o) => {
  const i = [...o].sort((u, d) => u - d), l = i.length >> 1;
  return i.length % 2 ? i[l] : (i[l - 1] + i[l]) / 2;
}, yp = (o) => Ms.reduce((i, l) => Math.abs(Ts(o, Sa(l.midi))) < Math.abs(Ts(o, Sa(i.midi))) ? l : i);
class gp {
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
    this.target = i === null ? null : Ms.find((l) => l.midi === i) ?? null, this.smoothed = null;
  }
  get selected() {
    return this.target;
  }
  reset() {
    this.samples = [], this.smoothed = null;
  }
  feed(i, l) {
    const u = (i.status === "pitch" || i.status === "off-pitch") && i.frequency !== void 0 && i.frequency > 0;
    u && (this.samples.push({ at: l, frequency: i.frequency }), this.lastAt = l), this.samples = this.samples.filter((z) => l - z.at <= this.windowMs), !u && l - this.lastAt > this.windowMs && (this.smoothed = null);
    const d = this.target ?? Ms[0];
    if (!this.samples.length)
      return { status: i.status === "silent" ? "no-signal" : "unreliable", target: d, auto: !this.target };
    const h = vp(this.samples.map((z) => z.frequency)), v = Ts(Math.max(...this.samples.map((z) => z.frequency)), Math.min(...this.samples.map((z) => z.frequency))), g = this.samples[this.samples.length - 1].at - this.samples[0].at, E = this.target ?? yp(h), _ = Math.round(69 + 12 * Math.log2(h / Wc));
    if (this.samples.length < this.minSamples || g < 100 || v > this.maxSpreadCents)
      return { status: "unreliable", target: E, auto: !this.target, frequency: h, heardMidi: _ };
    const N = Ts(h, Sa(E.midi));
    if (Math.abs(N) > mp)
      return this.smoothed = null, { status: "far", target: E, auto: !this.target, frequency: h, cents: N, heardMidi: _ };
    this.smoothed = this.smoothed === null ? N : this.smoothed + this.smoothing * (N - this.smoothed);
    const w = this.smoothed;
    return { status: Math.abs(w) <= Es ? "in-tune" : w < 0 ? "flat" : "sharp", target: E, auto: !this.target, frequency: h, cents: w, heardMidi: _ };
  }
}
const kp = 1e3, xp = 80;
class wp {
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
  settler = new Vh();
  settleTimer;
  tunerEngine = new gp();
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
      return i !== this.session || (this.open = !1, this.set({ status: "error", error: Rh(u), micInfo: null })), !1;
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
    i !== this.state.view && (i === "tuner" && (this.tunerEngine.reset(), this.tunerEngine.setTarget(this.state.tunerTarget)), this.open && this.audio.rearm(), this.set({ view: i, tuner: null, ...i === "check" && this.state.check === "waiting" && !this.state.calibrating ? { notice: _c() } : {} }));
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
    const l = Lh(i), u = l.loud ? Kn.minRms : l.threshold;
    this.audio.setMinRms(u), this.audio.rearm(), this.set({ calibrating: !1, minRms: u, noise: l, notice: l.loud ? { tone: "bad", text: "Taustalla kuului ääntä mittauksen aikana. Käytössä on oletuskynnys. Vaimenna kielet ja mittaa uudelleen." } : this.state.view === "check" && this.state.check === "waiting" ? _c() : null });
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
    (!h || h.status !== d.status || h.midi !== d.midi) && this.set({ heard: d }), this.calibration && (this.calibration.samples.push(i.rms), u - this.calibration.start >= kp && this.finishCalibration(this.calibration.samples)), this.state.muted === "settling" && this.settler.feed(i.status === "silent", u) !== "settling" && this.endSettle();
    const v = this.state.view, g = v === "tuner" ? this.tunerEngine.feed(i, u) : null, E = v === "diagnostics" || v === "check";
    (g || E) && u - this.lastView >= xp && (this.lastView = u, this.set({ ...g ? { tuner: g } : {}, ...E ? { diag: { frame: i, pluck: l, minRms: this.state.minRms, routed: this.routed } } : {} })), v === "practice" && this.listening && this.onFrame(i, l, u);
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
      const l = i.midi === Ns;
      this.set({ check: l ? "ok" : "other", notice: l ? { tone: "good", text: `Kuulin ${Se(i.midi)}. Mikrofoni toimii.` } : { tone: "info", text: `Kuulin ${Se(i.midi)}. Mikrofoni toimii, mutta testisävel on ${Se(Ns)}: vapaa B-kieli, toiseksi ohuin kieli. Tarkista tarvittaessa viritys.` } });
      return;
    }
    if (this.state.view !== "practice") {
      this.route(i, "not-routed");
      return;
    }
    this.route(i, this.onPluck(i) ? "practice" : "not-routed");
  }
}
const _c = () => ({ tone: "info", text: `Soita vapaa B-kieli (${Se(Ns)}) ja anna sen soida hetki.` }), Sp = 450, jp = 700;
class Ep {
  constructor(i, l, u) {
    this.audio = i, this.mic = l, this.store = u;
    const d = Re[0].riffs[0];
    this.checker = new xa(d.midi, this.round, "mic"), this.state = {
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
    }, l.onPluck = (h) => this.pluck(h), l.onFrame = (h, v, g) => this.frame(h, v, g);
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
    const u = $c(i);
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
      this.set({ modelError: Fc(l) });
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
    this.set({ nextHint: !0, feedback: { tone: "hint", text: `Seuraava sävel (${i + 1}/${this.state.riff.midi.length}): ${Se(this.state.riff.midi[i])} – ${_a(l)}.` } });
  }
  /** Ilman mikrofonia: näytä tai piilota riffin sävelet oman soiton tarkistamiseksi. */
  toggleReveal() {
    this.state.step === "recall" && this.set({ revealed: !this.state.revealed });
  }
  newAttempt(i) {
    this.checker = new xa(i.midi, ++this.round, "mic"), this.unsure = null, this.repeatSince = null, this.repeatShown = -1;
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
      const h = l.found.map((v, g) => v || g === u.index);
      return u.complete ? (this.store.addHeard(l.riff.id), this.set({
        found: h,
        index: u.index + 1,
        complete: !0,
        nextHint: !1,
        last: { midi: i.midi, verdict: "right" },
        progress: this.progressCopy(),
        feedback: { tone: "done", text: `Mikrofoni kuuli koko riffin oikeassa järjestyksessä: ${l.riff.midi.map(Se).join(" – ")}. Voit soittaa uudelleen, kuitata riffin harjoitelluksi tai siirtyä seuraavaan.` }
      })) : this.set({
        found: h,
        index: u.index + 1,
        nextHint: !1,
        last: { midi: i.midi, verdict: "right" },
        feedback: { tone: "good", text: `${Se(i.midi)} – oikea sävel oikeassa kohdassa (${u.index + 1}/${d}).` }
      }), !0;
    }
    return u.type === "wrong" ? (this.set({ last: { midi: i.midi, verdict: u.octave ? "octave" : "wrong" }, feedback: u.octave ? { tone: "near", text: `Kuulin ${Se(i.midi)}: sävelnimi on oikea, mutta korkeus on eri oktaavissa. Kokeile toista nauhaa tai kieltä. Mikrofoni voi myös kuulla ylä-äänen – jos soitit mielestäsi oikein, näppää uudelleen.` } : { tone: "info", text: `Kuulin ${Se(i.midi)}. Tähän kohtaan (${u.index + 1}/${d}) kuuluu toinen sävel. Kokeile uudelleen, kuuntele malli tai pyydä vihje.` } }), !0) : !1;
  }
  /**
   * Analyysikehykset: epävarma tunnistus ja toistuva sama sävel. Kumpikaan ei ole virhe; ne kertovat,
   * miksi soitto ei (vielä) tunnistunut.
   */
  frame(i, l, u) {
    const d = this.state;
    if (d.view !== "riff" || d.panel !== null || d.modelPlaying || d.step === "listen") return;
    const h = i.rms >= this.mic.getState().minRms;
    h && (i.status === "unclear" || i.status === "off-pitch") ? (this.unsure ??= { since: u, shown: !1 }, !this.unsure.shown && u - this.unsure.since >= Sp && (this.unsure.shown = !0, this.set({ feedback: { tone: "uncertain", text: i.status === "off-pitch" && i.midi !== void 0 ? `Epävarma tunnistus: lähin sävel on ${Se(i.midi)}, mutta vire on yli 35 senttiä sivussa. Tätä ei arvioida – tarkista viritys virittimellä.` : "Epävarma tunnistus: kuulen ääntä, mutta selvää säveltä ei löydy. Syynä voi olla useampi soiva kieli, taustamelu tai hiljainen soitto. Tätä ei lasketa virheeksi – soita yksi kieli kerrallaan ja anna sen soida hetki." } }))) : (!h || i.status === "pitch") && (this.unsure = null);
    const v = this.checker.next;
    if (!(d.step === "recall" && !d.complete && v !== null && l.reason === "waiting-new-pluck" && l.last?.midi === v && d.index > 0 && d.riff.midi[d.index - 1] === v)) {
      this.repeatSince = null;
      return;
    }
    this.repeatSince ??= u, this.repeatShown !== d.index && u - this.repeatSince >= jp && (this.repeatShown = d.index, this.set({ feedback: { tone: "hint", text: "Sama sävel soi yhä. Toistuvaa säveltä varten vaimenna kieli hetkeksi kämmenellä tai sormella ja näppää sitten uudelleen." } }));
  }
}
const wr = (o, i = 1) => o.toFixed(i).replace(".", ","), gr = (o) => {
  const i = Math.round(js(o));
  return `${i < 0 ? "−" : ""}${Math.abs(i)} dB`;
}, Kc = (o) => (o > 0 ? "+" : o < 0 ? "−" : "±") + wr(Math.abs(o), 0);
function _p({ s: o, mic: i }) {
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
        wr(o.micInfo.sampleRate / 1e3, 1),
        " kHz"
      ] }) : "Mikrofoni ei ole auki.",
      o.micInfo?.fallback && /* @__PURE__ */ c.jsx(c.Fragment, { children: " · Valittua laitetta ei löytynyt, joten käytössä on järjestelmän oletus." })
    ] }),
    !o.devices.length && o.micInfo && /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Selain ei ilmoittanut laitteita. Valitse laite tarvittaessa järjestelmän ääniasetuksista ja valitse sitten ”Järjestelmän oletus” uudelleen." })
  ] });
}
const Np = {
  silent: "Taso on äänikynnyksen alapuolella.",
  unclear: "Ääntä tulee, mutta selkeää sävelkorkeutta ei löydy (selkeys alle 94 %).",
  "out-of-range": "Taajuus on kitaran alueen ulkopuolella.",
  "off-pitch": "Sävel tunnistettiin, mutta se on yli ±35 senttiä vireestä.",
  pitch: "Sävelkorkeus tunnistettu."
}, Nc = {
  silent: "Ei ääntä kynnyksen yläpuolella.",
  unclear: "Ei selkeää säveltä.",
  "out-of-range": "Taajuus alueen ulkopuolella.",
  "off-pitch": "Liian epävireinen.",
  "waiting-new-pluck": "Sama sävel soi yhä: odotetaan uutta näppäystä tai lyhyttä vaimennusta.",
  harmonic: "Edellisen sävelen ylä-ääni tai oktaavi: ei uusi näppäily ilman uutta aluketta.",
  "too-quiet-for-change": "Eri sävel, mutta liian hiljainen (myötäresonanssi?): ei uusi näppäily ilman aluketta.",
  stabilizing: "Sävel vakautuu."
}, Tc = { quiet: "hiljaisuuden jälkeen", onset: "uusi aluke", "pitch-change": "sävelen vaihto" }, Tp = { practice: "harjoitukseen", check: "mikrofonitestiin", "not-routed": "ei välitetty (ei kuunteluvuoroa)" };
function Mp({ s: o }) {
  const i = o.diag;
  if (!i) return /* @__PURE__ */ c.jsx("p", { className: "riff-help", "data-testid": "diag", children: "Odotetaan mikrofonin ensimmäisiä analyysitietoja…" });
  const l = i.frame, u = i.pluck, d = l.rms >= i.minRms, h = Math.max(0, Math.min(100, (js(l.rms) + 60) / 60 * 100)), v = Math.max(0, Math.min(100, (js(i.minRms) + 60) / 60 * 100)), g = (E, _, N, w) => /* @__PURE__ */ c.jsxs("li", { className: E ? "ok" : "no", "data-testid": `diag-${w}`, children: [
    /* @__PURE__ */ c.jsxs("strong", { children: [
      /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: E ? "●" : "○" }),
      " ",
      _
    ] }),
    /* @__PURE__ */ c.jsx("span", { children: N })
  ] });
  return /* @__PURE__ */ c.jsxs("div", { className: "riff-diag", "data-testid": "diag", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "riff-meter", role: "meter", "aria-label": "Äänitaso", "aria-valuemin": -60, "aria-valuemax": 0, "aria-valuenow": Math.round(js(l.rms)), children: [
      /* @__PURE__ */ c.jsx("span", { className: "fill", style: { width: h + "%" } }),
      /* @__PURE__ */ c.jsx("span", { className: "threshold", style: { left: v + "%" }, title: "Äänikynnys" })
    ] }),
    /* @__PURE__ */ c.jsxs("ol", { className: "riff-stages", children: [
      g(d, "1. Ääntä mikrofonista", /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        gr(l.rms),
        " (kynnys ",
        gr(i.minRms),
        ")",
        l.levels.length > 1 ? ` · kanavat ${l.levels.map(gr).join(" / ")}, analysoidaan kanavaa ${l.channel + 1}` : "",
        l.peak > 0.98 ? " · leikkautuu: pienennä gainia" : ""
      ] }), "level"),
      g(l.status === "pitch" || l.status === "off-pitch", "2. Sävelkorkeus", l.frequency ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        wr(l.frequency),
        " Hz · ",
        l.midi !== void 0 ? `${Se(l.midi)} (MIDI ${l.midi})` : "–",
        " · ",
        l.cents !== void 0 ? `${Kc(l.cents)} snt` : "",
        " · selkeys ",
        Math.round((l.clarity ?? 0) * 100),
        " %"
      ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        Np[l.status],
        l.clarity ? ` Selkeys ${Math.round(l.clarity * 100)} %.` : ""
      ] }), "pitch"),
      g(
        !!u.candidate && u.reason === "stabilizing" || !!u.last && u.reason === null,
        "3. Vakaa sävel",
        u.candidate ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          Se(u.candidate.midi),
          ": ",
          Math.round(u.candidate.heldMs),
          " / 240 ms"
        ] }) : u.reason ? Nc[u.reason] : "–",
        "stable"
      ),
      g(u.armed, "4. Uusi näppäily", /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        u.armed ? `Valmis hyväksymään (${Tc[u.armedBy]}).` : u.reason ? Nc[u.reason] : "Odotetaan uutta näppäystä.",
        u.last && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          " Viimeisin: ",
          /* @__PURE__ */ c.jsx("strong", { children: Se(u.last.midi) }),
          " (",
          Tc[u.last.armedBy],
          "), näppäilyjä ",
          u.count,
          "."
        ] })
      ] }), "pluck"),
      g(i.routed.last?.route === "practice" || i.routed.last?.route === "check", "5. Välitetty harjoitukselle", i.routed.last ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        Se(i.routed.last.midi),
        " → ",
        Tp[i.routed.last.route],
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
const Cp = {
  "no-signal": "Näppää kieli ja anna sen soida.",
  unreliable: "Epävarma havainto – näppää kieli uudelleen ja anna soida. Viritysohjetta ei anneta.",
  far: "",
  flat: "Liian matala – kiristä kieltä hieman.",
  "in-tune": "Vireessä!",
  sharp: "Liian korkea – löysää kieltä hieman."
};
function Rp({ s: o, mic: i }) {
  const l = o.tuner, u = l?.cents ?? 0, d = l && ["flat", "in-tune", "sharp"].includes(l.status), h = 50 + Math.max(-50, Math.min(50, u));
  return /* @__PURE__ */ c.jsxs("div", { className: "riff-tuner", "data-testid": "tuner", children: [
    /* @__PURE__ */ c.jsxs("fieldset", { className: "riff-strings", children: [
      /* @__PURE__ */ c.jsx("legend", { children: "Kieli" }),
      /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": o.tunerTarget === null, onClick: () => i.setTunerTarget(null), children: "Auto" }),
      Ms.map((v) => /* @__PURE__ */ c.jsxs("button", { type: "button", "aria-pressed": o.tunerTarget === v.midi, onClick: () => i.setTunerTarget(v.midi), children: [
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
        wr(440 * 2 ** ((l.target.midi - 69) / 12), 2),
        " Hz)",
        l.auto ? ", valittu automaattisesti" : ""
      ] }) : "Näppää kieli." }),
      /* @__PURE__ */ c.jsx("p", { className: "value", "data-testid": "tuner-cents", children: d ? `${Kc(u)} senttiä` : "–" }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-tuner-scale", "aria-hidden": "true", children: [
        /* @__PURE__ */ c.jsx("span", { className: "zone", style: { left: `${50 - Es}%`, width: `${Es * 2}%` } }),
        d && /* @__PURE__ */ c.jsx("span", { className: "needle", style: { left: h + "%" } }),
        /* @__PURE__ */ c.jsx("span", { className: "label left", children: "−50" }),
        /* @__PURE__ */ c.jsx("span", { className: "label mid", children: "0" }),
        /* @__PURE__ */ c.jsx("span", { className: "label right", children: "+50" })
      ] }),
      /* @__PURE__ */ c.jsx("p", { className: "advice", "data-testid": "tuner-advice", children: l?.status === "far" && l.heardMidi !== void 0 ? `Kuulen ${Se(l.heardMidi)} (${wr(l.frequency)} Hz), mikä on yli puolisävelaskeleen päässä kielestä ${l.target.name}. Tarkista, että soitat oikeaa kieltä.` : Cp[l?.status ?? "no-signal"] }),
      l?.frequency && l.status !== "far" && /* @__PURE__ */ c.jsxs("p", { className: "riff-help", "data-testid": "tuner-frequency", children: [
        "Mitattu ",
        wr(l.frequency, 2),
        " Hz",
        l.heardMidi !== void 0 ? ` · lähin sävel ${Se(l.heardMidi)}` : ""
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", children: [
      "A4 = 440 Hz. Vihreä alue on ±",
      Es,
      " senttiä. Viritin käyttää samaa sävelentunnistusta kuin harjoitus, mutta sen lukemat eivät koskaan mene harjoitukseen."
    ] })
  ] });
}
const Qc = {
  user: "",
  background: "Mikrofoni suljettiin, koska välilehti siirtyi taustalle.",
  "mic-lost": "Yhteys mikrofoniin katkesi (laite irrotettiin tai selain pysäytti äänen). Tarkista laite."
};
function Gc(o) {
  if (o.calibrating) return "mittaa taustakohinaa";
  if (o.muted === "model") return "tauolla mallin ajan";
  if (o.muted === "settling") return "odottaa, että malli hiljenee";
  const i = o.heard;
  return i ? i.status === "silent" ? "alle äänikynnyksen" : i.status === "pitch" && i.midi !== void 0 ? Se(i.midi) : i.status === "off-pitch" && i.midi !== void 0 ? `${Se(i.midi)}, epävireinen` : "ääntä, ei selvää säveltä" : "ei vielä analyysia";
}
function qc({ m: o, practice: i }) {
  const l = o.closed ? Qc[o.closed] : "";
  return /* @__PURE__ */ c.jsxs("div", { className: `riff-micbar ${o.status}`, "data-testid": "mic-bar", children: [
    o.status === "on" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs("p", { className: "riff-mic-line", children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Mikrofoni käytössä" }),
        " · ",
        o.micInfo?.label || "äänitulo"
      ] }),
      /* @__PURE__ */ c.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee: ",
        /* @__PURE__ */ c.jsx("strong", { "data-testid": "heard", children: Gc(o) })
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
const Pp = { mic: "Mikrofonin valmistelu", tuner: "Viritin", diagnostics: "Mikrofonin diagnostiikka" };
function Lp({ m: o, mic: i, practice: l, panel: u, headingRef: d }) {
  return /* @__PURE__ */ c.jsxs("div", { className: "riff-panel", "data-testid": u === "mic" ? "mic-setup" : "tools", children: [
    /* @__PURE__ */ c.jsx("h2", { tabIndex: -1, ref: d, children: Pp[u] }),
    /* @__PURE__ */ c.jsx("div", { className: "riff-tools-switch", role: "group", "aria-label": "Mikrofonin työkalut", children: ["mic", "tuner", "diagnostics"].map((h) => /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": u === h, onClick: () => l.openPanel(h), children: h === "mic" ? "Valmistelu" : h === "tuner" ? "Viritin" : "Diagnostiikka" }, h)) }),
    o.status === "permission" && /* @__PURE__ */ c.jsx("p", { className: "riff-status", role: "status", children: "Pyydetään mikrofonilupaa… Salli mikrofoni selaimen kysymyksestä." }),
    o.status === "error" && /* @__PURE__ */ c.jsx("p", { className: "riff-status bad", role: "alert", "data-testid": "riff-error", children: o.error }),
    o.status === "off" && /* @__PURE__ */ c.jsxs("p", { className: "riff-status", role: "status", children: [
      o.closed && o.closed !== "user" ? Qc[o.closed] + " " : "",
      "Mikrofoni ei ole auki."
    ] }),
    (o.status === "error" || o.status === "off") && /* @__PURE__ */ c.jsx("div", { className: "riff-actions", children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", onClick: () => {
      i.start();
    }, children: "Avaa mikrofoni" }) }),
    /* @__PURE__ */ c.jsx(_p, { s: o, mic: i }),
    o.calibrating && /* @__PURE__ */ c.jsx("p", { className: "riff-status", role: "status", "data-testid": "calibrating", children: "Pidä kielet hiljaa hetki: mitataan taustakohinaa…" }),
    u === "mic" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("h3", { children: "Mikrofonin testi" }),
      !o.calibrating && /* @__PURE__ */ c.jsxs("p", { children: [
        "Soita ",
        /* @__PURE__ */ c.jsxs("strong", { children: [
          "vapaa B-kieli (",
          Se(Ns),
          ")"
        ] }),
        ", toiseksi ohuin kieli, ja anna sen soida hetki. Testi on vapaaehtoinen."
      ] }),
      /* @__PURE__ */ c.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee: ",
        /* @__PURE__ */ c.jsx("strong", { "data-testid": "heard", children: o.status === "on" ? Gc(o) : "mikrofoni ei ole auki" })
      ] }),
      o.notice && !o.calibrating && /* @__PURE__ */ c.jsx("p", { className: `riff-feedback ${o.notice.tone}`, role: "status", "data-testid": "feedback", children: o.notice.text })
    ] }),
    u !== "mic" && o.notice && !o.calibrating && o.notice.tone === "bad" && /* @__PURE__ */ c.jsx("p", { className: "riff-feedback bad", role: "status", children: o.notice.text }),
    u === "tuner" && /* @__PURE__ */ c.jsx(Rp, { s: o, mic: i }),
    u === "diagnostics" && /* @__PURE__ */ c.jsx(Mp, { s: o }),
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
const Yc = { listen: "Kuuntele", learn: "Opettele", recall: "Kokeile muistista" };
function Ap({ s: o, practice: i }) {
  return /* @__PURE__ */ c.jsx("nav", { className: "riff-steps", "aria-label": "Harjoittelun vaiheet", children: /* @__PURE__ */ c.jsx("ol", { children: ["listen", "learn", "recall"].map((l, u) => /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsxs("button", { type: "button", "aria-current": o.step === l ? "step" : void 0, onClick: () => i.setStep(l), children: [
    /* @__PURE__ */ c.jsx("span", { className: "riff-step-number", "aria-hidden": "true", children: u + 1 }),
    " ",
    Yc[l],
    l === "recall" && o.index > 0 && /* @__PURE__ */ c.jsxs("span", { className: "riff-step-progress", children: [
      " · ",
      o.index,
      "/",
      o.riff.midi.length
    ] })
  ] }) }, l)) }) });
}
function Ip(o, i) {
  return o.riff.midi.map((l, u) => {
    const d = o.modelPlaying && o.playing === u;
    if (o.step === "listen") return { cls: `pending${d ? " model" : ""}`, content: d ? "♪" : "", label: `${u + 1}. sävel${d ? ", soi nyt" : ""}` };
    if (!i && o.step === "recall") return {
      cls: `${o.revealed ? "shown" : "pending"}${d ? " model" : ""}`,
      content: o.revealed ? Se(l) : d ? "♪" : "",
      label: `${u + 1}. sävel${o.revealed ? `: ${Se(l)}` : ""}`
    };
    if (o.step === "learn") return { cls: `shown${d ? " model" : ""}`, content: Se(l), label: `${u + 1}. sävel: ${Se(l)}, ${_a(o.riff.spots[u])}` };
    const h = o.found[u], v = !o.complete && u === o.index, g = v && o.nextHint;
    return {
      cls: `${h ? "found" : "pending"}${v ? " current" : ""}${d ? " model" : ""}${g ? " memory" : ""}`,
      mark: h ? "found" : "pending",
      content: h ? Se(l) : d ? "♪" : g ? Se(l) : v ? "?" : "",
      symbol: h ? "✓" : void 0,
      label: `${u + 1}. sävel: ${h ? `${Se(l)}, tunnistettu oikeassa kohdassa` : g ? `vihje ${Se(l)}` : "ei vielä soitettu"}${v ? ", vuorossa" : ""}`
    };
  });
}
const Fp = (o) => o.modelPlaying ? "Pysäytä malli" : "Kuuntele malli";
function zp({ s: o, m: i, practice: l, headingRef: u }) {
  const d = o.riff.midi.length, h = i.status === "on", v = /* @__PURE__ */ c.jsx(Uc, { slots: Ip(o, h), label: o.step === "recall" && h ? `Kokeile muistista: tunnistettu ${o.index}/${d} säveltä` : `Riffissä on ${d} säveltä` }), g = (_) => /* @__PURE__ */ c.jsx("button", { type: "button", className: _ ? "primary" : "", onClick: () => l.listen(), "aria-pressed": o.modelPlaying, "data-testid": "listen", children: Fp(o) }), E = o.modelError && /* @__PURE__ */ c.jsx("p", { className: "riff-feedback bad", role: "status", children: o.modelError });
  return o.step === "listen" ? /* @__PURE__ */ c.jsxs("section", { className: "riff-step", "data-testid": "step-listen", "aria-labelledby": "riff-step-title", children: [
    /* @__PURE__ */ c.jsx("h2", { id: "riff-step-title", tabIndex: -1, ref: u, children: "1. Kuuntele" }),
    /* @__PURE__ */ c.jsx("p", { children: "Kuuntele malliriffi rauhassa niin monta kertaa kuin haluat. Montako säveltä siinä on? Nouseeko vai laskeeko melodia? Toistuuko jokin sävel?" }),
    v,
    E,
    /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      g(!0),
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
      /* @__PURE__ */ c.jsx("strong", { children: Se(_) }),
      " – ",
      _a(o.riff.spots[N])
    ] }, N)) }),
    /* @__PURE__ */ c.jsx("p", { className: "riff-tip", children: o.riff.tip }),
    h && /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Mikrofoni näyttää kuulemansa sävelen ja sen paikan otelaudalla, jos sävel kuuluu riffiin. Se ei tunnista kieltä – sama sävel löytyy usein muualtakin." }),
    E,
    /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      g(!1),
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
    E,
    h ? /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      g(!1),
      !o.complete && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => l.showNextHint(), disabled: o.nextHint, children: "Näytä seuraava sävel" }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => l.restartRecall(), className: o.complete ? "primary" : "", children: o.complete ? "Soita uudelleen" : "Aloita alusta" })
    ] }) : /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      g(!1),
      /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": o.revealed, onClick: () => l.toggleReveal(), children: o.revealed ? "Piilota sävelet" : "Näytä sävelet tarkistukseen" })
    ] })
  ] });
}
function Mc(o, i) {
  const l = he.useRef(o);
  he.useEffect(() => {
    l.current !== o && i.current?.focus(), l.current = o;
  }, [o, i]);
}
function Xc(o, i) {
  const l = i in o.progress.marked, u = o.progress.heard[i] ?? 0;
  return { marked: l, heard: u, text: [l ? "harjoiteltu (itse kuitattu)" : "", u ? `mikrofoni kuuli kokonaan ${u} ${u === 1 ? "kerran" : "kertaa"}` : ""].filter(Boolean).join(" · ") };
}
function Op({ s: o, m: i, practice: l, titleRef: u }) {
  const d = o.progress.last && $c(o.progress.last.riff), h = Ut.filter((g) => g.id in o.progress.marked).length, v = l.legacyMicPasses();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "intro riff-intro", children: [
      /* @__PURE__ */ c.jsx(Sr, { mode: "harjoitus" }),
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
      Yc[o.progress.last.step],
      ")"
    ] }) }),
    /* @__PURE__ */ c.jsx(qc, { m: i, practice: l }),
    /* @__PURE__ */ c.jsx("h2", { children: "Harjoitukset" }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", "data-testid": "practice-summary", children: [
      "Harjoiteltu ",
      h,
      "/",
      Ut.length,
      " riffiä. Kaikki harjoitukset ovat auki: järjestystä ei tarvitse noudattaa."
    ] }),
    Re.map((g) => {
      const E = g.riffs.filter((_) => _.id in o.progress.marked).length;
      return /* @__PURE__ */ c.jsxs("section", { className: "riff-set", "aria-labelledby": `riff-set-${g.number}`, children: [
        /* @__PURE__ */ c.jsxs("h3", { id: `riff-set-${g.number}`, children: [
          g.name,
          " – ",
          g.title,
          " ",
          /* @__PURE__ */ c.jsxs("span", { className: "riff-set-count", children: [
            "Harjoiteltu ",
            E,
            "/",
            g.riffs.length
          ] })
        ] }),
        /* @__PURE__ */ c.jsx("ol", { className: "riff-set-list", children: g.riffs.map((_, N) => {
          const w = Xc(o, _.id);
          return /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsxs("button", { type: "button", className: `riff-set-item${w.marked ? " marked" : ""}`, onClick: () => l.openRiff(_.id), children: [
            /* @__PURE__ */ c.jsx("span", { className: "riff-set-mark", "aria-hidden": "true", children: w.marked ? "✓" : N + 1 }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              /* @__PURE__ */ c.jsx("strong", { children: _.title }),
              w.text && /* @__PURE__ */ c.jsx("small", { children: w.text })
            ] })
          ] }) }, _.id);
        }) })
      ] }, g.number);
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
function Dp({ s: o, m: i, practice: l, titleRef: u, stepRef: d }) {
  const [h, v] = he.useState(null), g = he.useRef();
  he.useEffect(() => () => clearTimeout(g.current), []), he.useEffect(() => {
    v(null);
  }, [o.step, o.riff.id]);
  const E = Ut.findIndex((T) => T.id === o.riff.id), _ = Xc(o, o.riff.id), N = i.status === "on" && i.muted === null && !i.calibrating && i.heard?.status === "pitch" ? i.heard.midi : void 0, w = o.step !== "recall";
  function P(T) {
    l.tap(T.midi) && (clearTimeout(g.current), v((W) => ({ p: T, n: (W?.n ?? 0) + 1 })), g.current = setTimeout(() => v(null), 600));
  }
  const z = i.status === "on", L = o.step === "learn" || o.step === "recall" && !z && o.revealed ? wa(o.riff, o.playing) : o.step === "recall" && z ? wa(o.riff, o.playing, (T) => o.complete || o.found[T] || o.nextHint && T === o.index, (T) => o.found[T] || o.complete ? String(T + 1) : "?") : [], I = N !== void 0 && o.step === "learn" ? o.riff.spots[o.riff.midi.indexOf(N)] : void 0;
  return I && L.push({ ...I, midi: N, kind: "playing", label: Se(N) }), h && w && L.push({ ...h.p, kind: "playing", label: Se(h.p.midi) }), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("header", { className: "riff-round-heading", children: [
      /* @__PURE__ */ c.jsx(Sr, { mode: "harjoitus" }),
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
    /* @__PURE__ */ c.jsx(Ap, { s: o, practice: l }),
    /* @__PURE__ */ c.jsx(qc, { m: i, practice: l }),
    /* @__PURE__ */ c.jsxs("div", { className: "riff-panel riff-play", children: [
      /* @__PURE__ */ c.jsx(zp, { s: o, m: i, practice: l, headingRef: d }),
      o.step === "learn" && i.status === "on" && /* @__PURE__ */ c.jsxs("p", { className: "riff-heard", "data-testid": "learn-heard", children: [
        "Kuulen nyt: ",
        /* @__PURE__ */ c.jsx("strong", { children: N !== void 0 ? Se(N) : "–" }),
        N !== void 0 && !o.riff.midi.includes(N) ? " (ei kuulu tähän riffiin)" : ""
      ] }),
      /* @__PURE__ */ c.jsx(
        Hc,
        {
          focus: o.level.strings,
          marks: L,
          disabled: !w || o.modelPlaying,
          onAnswer: P,
          caption: w ? "Otelauta: painamalla kuulet sävelen (ei arvioida)" : "Otelauta: soita oikealla kitaralla – mikrofoni kuulee vain sävelkorkeuden, ei kieltä"
        }
      ),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-actions riff-practice-footer", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": _.marked, onClick: () => l.toggleMarked(), "data-testid": "mark-practiced", className: _.marked ? "marked" : "", children: _.marked ? "✓ Harjoiteltu – poista kuittaus" : "Kuittaa harjoitelluksi" }),
        E > 0 && /* @__PURE__ */ c.jsxs("button", { type: "button", onClick: () => l.moveRiff(-1), children: [
          /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "←" }),
          " Edellinen riffi"
        ] }),
        E < Ut.length - 1 && /* @__PURE__ */ c.jsxs("button", { type: "button", onClick: () => l.moveRiff(1), children: [
          "Seuraava riffi ",
          /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "riff-end-actions", children: /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => l.home(), children: "Kaikki harjoitukset" }) })
    ] })
  ] });
}
function $p({ practice: o }) {
  const i = he.useSyncExternalStore(o.subscribe, o.getState), l = he.useSyncExternalStore(o.mic.subscribe, o.mic.getState), u = he.useRef(null), d = he.useRef(null), h = he.useRef(null);
  return Mc(i.panel ? "panel" : `${i.view}:${i.riff.id}`, i.panel ? h : u), Mc(i.step, d), he.useEffect(() => {
    const v = () => {
      document.visibilityState === "hidden" && o.hidden();
    }, g = () => o.dispose(), E = () => {
      o.mic.refreshDevices();
    };
    return document.addEventListener("visibilitychange", v), window.addEventListener("pagehide", g), navigator.mediaDevices?.addEventListener?.("devicechange", E), () => {
      document.removeEventListener("visibilitychange", v), window.removeEventListener("pagehide", g), navigator.mediaDevices?.removeEventListener?.("devicechange", E);
    };
  }, [o]), /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-mode": "harjoitus", "data-view": i.panel ? "panel" : i.view, "aria-labelledby": i.panel ? void 0 : "riff-title", "aria-label": i.panel ? "Riffiharjoitus – oikea kitara" : void 0, children: [
    /* @__PURE__ */ c.jsx(hi, { mode: "harjoitus" }),
    i.panel ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(Sr, { mode: "harjoitus" }),
      /* @__PURE__ */ c.jsx(Lp, { m: l, mic: o.mic, practice: o, panel: i.panel, headingRef: h })
    ] }) : i.view === "home" ? /* @__PURE__ */ c.jsx(Op, { s: i, m: l, practice: o, titleRef: u }) : /* @__PURE__ */ c.jsx(Dp, { s: i, m: l, practice: o, titleRef: u, stepRef: d })
  ] });
}
function Bp({ store: o }) {
  const i = Wh(o), l = Ut.filter((d) => d.id in o.data.practice.marked).length, u = {
    harjoitus: l ? `Harjoiteltu ${l}/${Ut.length} riffiä (itse kuitattu)` : "Mikrofoni on vapaaehtoinen: harjoitella voi myös ilman sitä.",
    peli: i.started ? `Läpäisty ${i.passed}/${i.total} riffiä · tähdet ${i.stars}/${i.total}` : "Aloita lyhyellä kahden sävelen opastuksella."
  };
  return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-view": "start", "aria-labelledby": "riff-title", children: [
    /* @__PURE__ */ c.jsx(hi, { mode: null }),
    /* @__PURE__ */ c.jsxs("div", { className: "intro riff-intro", children: [
      /* @__PURE__ */ c.jsx("h1", { id: "riff-title", tabIndex: -1, children: "Riffikaiku (beta)" }),
      /* @__PURE__ */ c.jsx("p", { children: "Lyhyitä, neljän sävelen kitarariffejä kuunneltavaksi ja soitettavaksi. Valitse, harjoitteletko omalla kitaralla vai pelaatko virtuaalikitaralla." })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "learning-grid riff-modes", children: ["harjoitus", "peli"].map((d, h) => /* @__PURE__ */ c.jsxs("a", { className: `learning-card riff-mode-card ${d}`, href: Vc(d), "data-testid": `mode-${d}`, children: [
      /* @__PURE__ */ c.jsx("span", { className: "learning-number", "aria-hidden": "true", children: String(h + 1).padStart(2, "0") }),
      /* @__PURE__ */ c.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ c.jsx("strong", { children: xr[d].card }),
        /* @__PURE__ */ c.jsx("span", { children: xr[d].description }),
        /* @__PURE__ */ c.jsx("span", { className: "riff-card-progress", children: u[d] }),
        /* @__PURE__ */ c.jsx("small", { children: xr[d].action })
      ] }),
      /* @__PURE__ */ c.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, d)) }),
    /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Mikrofonin lupaa kysytään vasta, kun otat sen käyttöön harjoituksessa. Ääntä ei tallenneta eikä lähetetä mihinkään. Edistyminen tallentuu vain tähän selaimeen, ja harjoituksen ja pelin tulokset pidetään erillään." })
  ] });
}
const Cc = "musiikin-kartta:riffikaiku:v1", Vp = ["mic", "board"], Up = ["listen", "learn", "recall"], Jc = "kotitreenit", Hp = () => ({
  version: 1,
  structure: Jc,
  tutorialDone: !1,
  input: "mic",
  fullBoard: !1,
  device: "",
  stats: { mic: {}, board: {} },
  results: [],
  run: { mic: { level: 1, passed: [] }, board: { level: 1, passed: [] } },
  levels: { mic: [], board: [] },
  practice: { marked: {}, heard: {}, last: null }
}), Qn = (o) => typeof o == "number" && Number.isFinite(o) && o >= 0, bc = (o) => o === "mic" || o === "board", ja = (o) => Number.isInteger(o) && Re.some((i) => i.number === o), Wp = (o) => {
  const i = o;
  return !!i && typeof i == "object" && Qn(i.done) && Qn(i.solo) && Qn(i.lastAt) && i.solo <= i.done && (i.passed === void 0 || Qn(i.passed) && i.passed <= i.done && i.solo <= i.passed) && (i.best === void 0 || Qn(i.best));
}, di = (o) => Ut.some((i) => i.id === o);
function Kp(o) {
  const i = { marked: {}, heard: {}, last: null }, l = o;
  if (!l || typeof l != "object") return i;
  for (const d of ["marked", "heard"]) {
    const h = l[d];
    if (h && typeof h == "object")
      for (const [v, g] of Object.entries(h)) di(v) && Qn(g) && (i[d][v] = g);
  }
  const u = l.last;
  return u && typeof u == "object" && typeof u.riff == "string" && di(u.riff) && Up.includes(u.step) && (i.last = { riff: u.riff, step: u.step }), i;
}
const Qp = (o) => {
  const i = o;
  return !!i && typeof i == "object" && typeof i.riff == "string" && bc(i.input) && typeof i.hint == "boolean" && ["wrong", "octave", "replays", "ms", "at"].every((l) => Qn(i[l])) && (i.passed === void 0 || typeof i.passed == "boolean") && (i.level === void 0 || Number.isInteger(i.level) && i.level > 0);
};
function Gp(o) {
  const i = Hp();
  if (!o) return i;
  let l;
  try {
    l = JSON.parse(o);
  } catch {
    return i;
  }
  const u = l;
  if (!u || u.version !== 1) return i;
  i.tutorialDone = u.tutorialDone === !0, i.fullBoard = u.fullBoard === !0, typeof u.device == "string" && (i.device = u.device.slice(0, 256)), bc(u.input) && (i.input = u.input);
  const d = u.structure !== Jc;
  for (const h of Vp) {
    const v = u.stats?.[h];
    if (v && typeof v == "object")
      for (const [_, N] of Object.entries(v)) Wp(N) && (i.stats[h][_] = { ...N });
    const g = u.run?.[h];
    if (d) {
      g && g.level === 1 && Array.isArray(g.passed) && (i.run[h] = { level: 1, passed: Re[0].riffs.map((_) => _.id).filter((_) => g.passed.includes(_)) });
      continue;
    }
    if (g && ja(g.level) && Array.isArray(g.passed)) {
      const _ = Re.find((N) => N.number === g.level).riffs.map((N) => N.id);
      i.run[h] = { level: g.level, passed: _.filter((N) => g.passed.includes(N)) };
    }
    const E = u.levels?.[h];
    Array.isArray(E) && (i.levels[h] = [...new Set(E.filter(ja))].sort((_, N) => _ - N));
  }
  return i.practice = Kp(u.practice), Array.isArray(u.results) && (i.results = u.results.filter(Qp).slice(-300).map((h) => d && !h.legacy ? { ...h, legacy: !0 } : h)), i;
}
class qp {
  /** storage puuttuu tai heittää (yksityinen ikkuna, estetty tallennus): peli toimii ilman tallennusta. */
  constructor(i) {
    this.storage = i;
    let l = null;
    try {
      l = i?.getItem(Cc) ?? null;
    } catch {
      l = null;
    }
    this.data = Gp(l);
  }
  storage;
  data;
  save() {
    try {
      this.storage?.setItem(Cc, JSON.stringify(this.data));
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
    ja(l) && (this.data.run[i] = { level: l, passed: [] }, this.save());
  }
  /**
   * Kirjaa yhden loppuun soitetun riffiyrityksen kerran. Opastus merkitään tehdyksi, mutta se ei ole
   * tasotulos. Palauttaa levelComplete = true sillä kirjauksella, jolla tason kolmas riffi läpäistiin,
   * ja tiedot uusista saavutuksista (ensimmäinen läpäisy, ensimmäinen tähti, uusi ennätys).
   */
  record(i) {
    if (i.riff === ui.id)
      return this.finishTutorial(), { levelComplete: !1, firstPass: !1, firstStar: !1, newBest: !1 };
    const { input: l } = i, u = i.passed === !0, d = this.data.stats[l], h = d[i.riff] ?? { done: 0, solo: 0, passed: 0 }, v = u && !i.hint, g = u && (h.passed ?? 0) === 0, E = v && h.solo === 0, _ = h.best !== void 0 && i.wrong < h.best, N = h.best === void 0 ? i.wrong : Math.min(h.best, i.wrong);
    d[i.riff] = {
      done: h.done + 1,
      passed: (h.passed ?? 0) + (u ? 1 : 0),
      solo: h.solo + (v ? 1 : 0),
      lastAt: i.at,
      best: N
    }, this.data.results = [...this.data.results, { ...i, level: i.level ?? Dc(i.riff)?.number }].slice(-300);
    let w = !1;
    const P = this.data.run[l], z = this.level(l);
    return u && z.riffs.some((L) => L.id === i.riff) && !P.passed.includes(i.riff) && (P.passed = z.riffs.map((L) => L.id).filter((L) => L === i.riff || P.passed.includes(L)), P.passed.length === z.riffs.length && (w = !0, this.data.levels[l].includes(z.number) || (this.data.levels[l] = [...this.data.levels[l], z.number].sort((L, I) => L - I)))), this.save(), { levelComplete: w, firstPass: g, firstStar: E, newBest: _ };
  }
  // ---- oikean kitaran riffiharjoitus ----
  /** Itse kuitattu (true) tai kuittaus poistettu (false). */
  setMarked(i, l, u = Date.now()) {
    !di(i) || i in this.data.practice.marked === l || (l ? this.data.practice.marked[i] = u : delete this.data.practice.marked[i], this.save());
  }
  /** Mikrofoni kuuli koko riffin oikeassa järjestyksessä. */
  addHeard(i) {
    di(i) && (this.data.practice.heard[i] = (this.data.practice.heard[i] ?? 0) + 1, this.save());
  }
  setPracticeLast(i, l) {
    const u = this.data.practice.last;
    !di(i) || u?.riff === i && u.step === l || (this.data.practice.last = { riff: i, step: l }, this.save());
  }
}
function Yp() {
  try {
    return localStorage;
  } catch {
    return;
  }
}
function Xp({ store: o }) {
  const [i] = he.useState(() => new Hh(new zc(), o));
  return he.useEffect(() => () => {
    i.dispose();
  }, [i]), /* @__PURE__ */ c.jsx(pp, { game: i });
}
function Jp({ store: o }) {
  const [i] = he.useState(() => {
    const l = new zc();
    return new Ep(l, new wp(l, o), o);
  });
  return he.useEffect(() => () => {
    i.dispose();
  }, [i]), /* @__PURE__ */ c.jsx($p, { practice: i });
}
function bp({ mode: o }) {
  const [i] = he.useState(() => new qp(Yp()));
  return he.useEffect(() => {
    document.title = lp(o);
  }, [o]), o === "harjoitus" ? /* @__PURE__ */ c.jsx(Jp, { store: i }) : o === "peli" ? /* @__PURE__ */ c.jsx(Xp, { store: i }) : /* @__PURE__ */ c.jsx(Bp, { store: i });
}
window.addEventListener("pagehide", () => Ch());
const Rc = document.getElementById("riffikaiku");
Rc && rh.createRoot(Rc).render(/* @__PURE__ */ c.jsx(he.StrictMode, { children: /* @__PURE__ */ c.jsx(bp, { mode: sp(location.search) }) }));
//# sourceMappingURL=app.js.map
