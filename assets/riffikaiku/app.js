function hd(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var bs = { exports: {} }, ei = {}, eo = { exports: {} }, we = {};
var Qa;
function md() {
  if (Qa) return we;
  Qa = 1;
  var a = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), p = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), _ = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), E = Symbol.iterator;
  function I(v) {
    return v === null || typeof v != "object" ? null : (v = E && v[E] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var G = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, j = {};
  function L(v, C, ae) {
    this.props = v, this.context = C, this.refs = j, this.updater = ae || G;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(v, C) {
    if (typeof v != "object" && typeof v != "function" && v != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, v, C, "setState");
  }, L.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function $() {
  }
  $.prototype = L.prototype;
  function W(v, C, ae) {
    this.props = v, this.context = C, this.refs = j, this.updater = ae || G;
  }
  var J = W.prototype = new $();
  J.constructor = W, O(J, L.prototype), J.isPureReactComponent = !0;
  var ue = Array.isArray, Z = Object.prototype.hasOwnProperty, V = { current: null }, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(v, C, ae) {
    var de, he = {}, me = null, z = null;
    if (C != null) for (de in C.ref !== void 0 && (z = C.ref), C.key !== void 0 && (me = "" + C.key), C) Z.call(C, de) && !ne.hasOwnProperty(de) && (he[de] = C[de]);
    var B = arguments.length - 2;
    if (B === 1) he.children = ae;
    else if (1 < B) {
      for (var P = Array(B), X = 0; X < B; X++) P[X] = arguments[X + 2];
      he.children = P;
    }
    if (v && v.defaultProps) for (de in B = v.defaultProps, B) he[de] === void 0 && (he[de] = B[de]);
    return { $$typeof: a, type: v, key: me, ref: z, props: he, _owner: V.current };
  }
  function Me(v, C) {
    return { $$typeof: a, type: v.type, key: C, ref: v.ref, props: v.props, _owner: v._owner };
  }
  function xe(v) {
    return typeof v == "object" && v !== null && v.$$typeof === a;
  }
  function We(v) {
    var C = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(ae) {
      return C[ae];
    });
  }
  var Oe = /\/+/g;
  function je(v, C) {
    return typeof v == "object" && v !== null && v.key != null ? We("" + v.key) : C.toString(36);
  }
  function De(v, C, ae, de, he) {
    var me = typeof v;
    (me === "undefined" || me === "boolean") && (v = null);
    var z = !1;
    if (v === null) z = !0;
    else switch (me) {
      case "string":
      case "number":
        z = !0;
        break;
      case "object":
        switch (v.$$typeof) {
          case a:
          case s:
            z = !0;
        }
    }
    if (z) return z = v, he = he(z), v = de === "" ? "." + je(z, 0) : de, ue(he) ? (ae = "", v != null && (ae = v.replace(Oe, "$&/") + "/"), De(he, C, ae, "", function(X) {
      return X;
    })) : he != null && (xe(he) && (he = Me(he, ae + (!he.key || z && z.key === he.key ? "" : ("" + he.key).replace(Oe, "$&/") + "/") + v)), C.push(he)), 1;
    if (z = 0, de = de === "" ? "." : de + ":", ue(v)) for (var B = 0; B < v.length; B++) {
      me = v[B];
      var P = de + je(me, B);
      z += De(me, C, ae, P, he);
    }
    else if (P = I(v), typeof P == "function") for (v = P.call(v), B = 0; !(me = v.next()).done; ) me = me.value, P = de + je(me, B++), z += De(me, C, ae, P, he);
    else if (me === "object") throw C = String(v), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
    return z;
  }
  function Ke(v, C, ae) {
    if (v == null) return v;
    var de = [], he = 0;
    return De(v, de, "", "", function(me) {
      return C.call(ae, me, he++);
    }), de;
  }
  function Re(v) {
    if (v._status === -1) {
      var C = v._result;
      C = C(), C.then(function(ae) {
        (v._status === 0 || v._status === -1) && (v._status = 1, v._result = ae);
      }, function(ae) {
        (v._status === 0 || v._status === -1) && (v._status = 2, v._result = ae);
      }), v._status === -1 && (v._status = 0, v._result = C);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var Ee = { current: null }, D = { transition: null }, b = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: D, ReactCurrentOwner: V };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return we.Children = { map: Ke, forEach: function(v, C, ae) {
    Ke(v, function() {
      C.apply(this, arguments);
    }, ae);
  }, count: function(v) {
    var C = 0;
    return Ke(v, function() {
      C++;
    }), C;
  }, toArray: function(v) {
    return Ke(v, function(C) {
      return C;
    }) || [];
  }, only: function(v) {
    if (!xe(v)) throw Error("React.Children.only expected to receive a single React element child.");
    return v;
  } }, we.Component = L, we.Fragment = o, we.Profiler = d, we.PureComponent = W, we.StrictMode = c, we.Suspense = _, we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b, we.act = U, we.cloneElement = function(v, C, ae) {
    if (v == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + v + ".");
    var de = O({}, v.props), he = v.key, me = v.ref, z = v._owner;
    if (C != null) {
      if (C.ref !== void 0 && (me = C.ref, z = V.current), C.key !== void 0 && (he = "" + C.key), v.type && v.type.defaultProps) var B = v.type.defaultProps;
      for (P in C) Z.call(C, P) && !ne.hasOwnProperty(P) && (de[P] = C[P] === void 0 && B !== void 0 ? B[P] : C[P]);
    }
    var P = arguments.length - 2;
    if (P === 1) de.children = ae;
    else if (1 < P) {
      B = Array(P);
      for (var X = 0; X < P; X++) B[X] = arguments[X + 2];
      de.children = B;
    }
    return { $$typeof: a, type: v.type, key: he, ref: me, props: de, _owner: z };
  }, we.createContext = function(v) {
    return v = { $$typeof: w, _currentValue: v, _currentValue2: v, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, v.Provider = { $$typeof: p, _context: v }, v.Consumer = v;
  }, we.createElement = pe, we.createFactory = function(v) {
    var C = pe.bind(null, v);
    return C.type = v, C;
  }, we.createRef = function() {
    return { current: null };
  }, we.forwardRef = function(v) {
    return { $$typeof: x, render: v };
  }, we.isValidElement = xe, we.lazy = function(v) {
    return { $$typeof: F, _payload: { _status: -1, _result: v }, _init: Re };
  }, we.memo = function(v, C) {
    return { $$typeof: M, type: v, compare: C === void 0 ? null : C };
  }, we.startTransition = function(v) {
    var C = D.transition;
    D.transition = {};
    try {
      v();
    } finally {
      D.transition = C;
    }
  }, we.unstable_act = U, we.useCallback = function(v, C) {
    return Ee.current.useCallback(v, C);
  }, we.useContext = function(v) {
    return Ee.current.useContext(v);
  }, we.useDebugValue = function() {
  }, we.useDeferredValue = function(v) {
    return Ee.current.useDeferredValue(v);
  }, we.useEffect = function(v, C) {
    return Ee.current.useEffect(v, C);
  }, we.useId = function() {
    return Ee.current.useId();
  }, we.useImperativeHandle = function(v, C, ae) {
    return Ee.current.useImperativeHandle(v, C, ae);
  }, we.useInsertionEffect = function(v, C) {
    return Ee.current.useInsertionEffect(v, C);
  }, we.useLayoutEffect = function(v, C) {
    return Ee.current.useLayoutEffect(v, C);
  }, we.useMemo = function(v, C) {
    return Ee.current.useMemo(v, C);
  }, we.useReducer = function(v, C, ae) {
    return Ee.current.useReducer(v, C, ae);
  }, we.useRef = function(v) {
    return Ee.current.useRef(v);
  }, we.useState = function(v) {
    return Ee.current.useState(v);
  }, we.useSyncExternalStore = function(v, C, ae) {
    return Ee.current.useSyncExternalStore(v, C, ae);
  }, we.useTransition = function() {
    return Ee.current.useTransition();
  }, we.version = "18.3.1", we;
}
var Ga;
function ao() {
  return Ga || (Ga = 1, eo.exports = md()), eo.exports;
}
var Ya;
function vd() {
  if (Ya) return ei;
  Ya = 1;
  var a = ao(), s = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(x, _, M) {
    var F, E = {}, I = null, G = null;
    M !== void 0 && (I = "" + M), _.key !== void 0 && (I = "" + _.key), _.ref !== void 0 && (G = _.ref);
    for (F in _) c.call(_, F) && !p.hasOwnProperty(F) && (E[F] = _[F]);
    if (x && x.defaultProps) for (F in _ = x.defaultProps, _) E[F] === void 0 && (E[F] = _[F]);
    return { $$typeof: s, type: x, key: I, ref: G, props: E, _owner: d.current };
  }
  return ei.Fragment = o, ei.jsx = w, ei.jsxs = w, ei;
}
var Xa;
function yd() {
  return Xa || (Xa = 1, bs.exports = vd()), bs.exports;
}
var S = yd(), He = ao(), dl = {}, to = { exports: {} }, St = {}, no = { exports: {} }, ro = {};
var qa;
function gd() {
  return qa || (qa = 1, (function(a) {
    function s(D, b) {
      var U = D.length;
      D.push(b);
      e: for (; 0 < U; ) {
        var v = U - 1 >>> 1, C = D[v];
        if (0 < d(C, b)) D[v] = b, D[U] = C, U = v;
        else break e;
      }
    }
    function o(D) {
      return D.length === 0 ? null : D[0];
    }
    function c(D) {
      if (D.length === 0) return null;
      var b = D[0], U = D.pop();
      if (U !== b) {
        D[0] = U;
        e: for (var v = 0, C = D.length, ae = C >>> 1; v < ae; ) {
          var de = 2 * (v + 1) - 1, he = D[de], me = de + 1, z = D[me];
          if (0 > d(he, U)) me < C && 0 > d(z, he) ? (D[v] = z, D[me] = U, v = me) : (D[v] = he, D[de] = U, v = de);
          else if (me < C && 0 > d(z, U)) D[v] = z, D[me] = U, v = me;
          else break e;
        }
      }
      return b;
    }
    function d(D, b) {
      var U = D.sortIndex - b.sortIndex;
      return U !== 0 ? U : D.id - b.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      a.unstable_now = function() {
        return p.now();
      };
    } else {
      var w = Date, x = w.now();
      a.unstable_now = function() {
        return w.now() - x;
      };
    }
    var _ = [], M = [], F = 1, E = null, I = 3, G = !1, O = !1, j = !1, L = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, W = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function J(D) {
      for (var b = o(M); b !== null; ) {
        if (b.callback === null) c(M);
        else if (b.startTime <= D) c(M), b.sortIndex = b.expirationTime, s(_, b);
        else break;
        b = o(M);
      }
    }
    function ue(D) {
      if (j = !1, J(D), !O) if (o(_) !== null) O = !0, Re(Z);
      else {
        var b = o(M);
        b !== null && Ee(ue, b.startTime - D);
      }
    }
    function Z(D, b) {
      O = !1, j && (j = !1, $(pe), pe = -1), G = !0;
      var U = I;
      try {
        for (J(b), E = o(_); E !== null && (!(E.expirationTime > b) || D && !We()); ) {
          var v = E.callback;
          if (typeof v == "function") {
            E.callback = null, I = E.priorityLevel;
            var C = v(E.expirationTime <= b);
            b = a.unstable_now(), typeof C == "function" ? E.callback = C : E === o(_) && c(_), J(b);
          } else c(_);
          E = o(_);
        }
        if (E !== null) var ae = !0;
        else {
          var de = o(M);
          de !== null && Ee(ue, de.startTime - b), ae = !1;
        }
        return ae;
      } finally {
        E = null, I = U, G = !1;
      }
    }
    var V = !1, ne = null, pe = -1, Me = 5, xe = -1;
    function We() {
      return !(a.unstable_now() - xe < Me);
    }
    function Oe() {
      if (ne !== null) {
        var D = a.unstable_now();
        xe = D;
        var b = !0;
        try {
          b = ne(!0, D);
        } finally {
          b ? je() : (V = !1, ne = null);
        }
      } else V = !1;
    }
    var je;
    if (typeof W == "function") je = function() {
      W(Oe);
    };
    else if (typeof MessageChannel < "u") {
      var De = new MessageChannel(), Ke = De.port2;
      De.port1.onmessage = Oe, je = function() {
        Ke.postMessage(null);
      };
    } else je = function() {
      L(Oe, 0);
    };
    function Re(D) {
      ne = D, V || (V = !0, je());
    }
    function Ee(D, b) {
      pe = L(function() {
        D(a.unstable_now());
      }, b);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, a.unstable_continueExecution = function() {
      O || G || (O = !0, Re(Z));
    }, a.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Me = 0 < D ? Math.floor(1e3 / D) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, a.unstable_getFirstCallbackNode = function() {
      return o(_);
    }, a.unstable_next = function(D) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = I;
      }
      var U = I;
      I = b;
      try {
        return D();
      } finally {
        I = U;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(D, b) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var U = I;
      I = D;
      try {
        return b();
      } finally {
        I = U;
      }
    }, a.unstable_scheduleCallback = function(D, b, U) {
      var v = a.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? v + U : v) : U = v, D) {
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
      return C = U + C, D = { id: F++, callback: b, priorityLevel: D, startTime: U, expirationTime: C, sortIndex: -1 }, U > v ? (D.sortIndex = U, s(M, D), o(_) === null && D === o(M) && (j ? ($(pe), pe = -1) : j = !0, Ee(ue, U - v))) : (D.sortIndex = C, s(_, D), O || G || (O = !0, Re(Z))), D;
    }, a.unstable_shouldYield = We, a.unstable_wrapCallback = function(D) {
      var b = I;
      return function() {
        var U = I;
        I = b;
        try {
          return D.apply(this, arguments);
        } finally {
          I = U;
        }
      };
    };
  })(ro)), ro;
}
var Ja;
function kd() {
  return Ja || (Ja = 1, no.exports = gd()), no.exports;
}
var Za;
function wd() {
  if (Za) return St;
  Za = 1;
  var a = ao(), s = kd();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function p(e, t) {
    w(e, t), w(e + "Capture", t);
  }
  function w(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var x = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _ = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, F = {}, E = {};
  function I(e) {
    return _.call(E, e) ? !0 : _.call(F, e) ? !1 : M.test(e) ? E[e] = !0 : (F[e] = !0, !1);
  }
  function G(e, t, n, r) {
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
    if (t === null || typeof t > "u" || G(e, t, n, r)) return !0;
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
  function j(e, t, n, r, i, l, u) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = u;
  }
  var L = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    L[e] = new j(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    L[t] = new j(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    L[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    L[e] = new j(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    L[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    L[e] = new j(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    L[e] = new j(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    L[e] = new j(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    L[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var $ = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      $,
      W
    );
    L[t] = new j(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace($, W);
    L[t] = new j(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace($, W);
    L[t] = new j(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    L[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), L.xlinkHref = new j("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    L[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function J(e, t, n, r) {
    var i = L.hasOwnProperty(t) ? L[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (O(t, n, i, r) && (n = null), r || i === null ? I(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ue = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Z = /* @__PURE__ */ Symbol.for("react.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), ne = /* @__PURE__ */ Symbol.for("react.fragment"), pe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Me = /* @__PURE__ */ Symbol.for("react.profiler"), xe = /* @__PURE__ */ Symbol.for("react.provider"), We = /* @__PURE__ */ Symbol.for("react.context"), Oe = /* @__PURE__ */ Symbol.for("react.forward_ref"), je = /* @__PURE__ */ Symbol.for("react.suspense"), De = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ke = /* @__PURE__ */ Symbol.for("react.memo"), Re = /* @__PURE__ */ Symbol.for("react.lazy"), Ee = /* @__PURE__ */ Symbol.for("react.offscreen"), D = Symbol.iterator;
  function b(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var U = Object.assign, v;
  function C(e) {
    if (v === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      v = t && t[1] || "";
    }
    return `
` + v + e;
  }
  var ae = !1;
  function de(e, t) {
    if (!e || ae) return "";
    ae = !0;
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
        } catch (k) {
          var r = k;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (k) {
          r = k;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (k) {
          r = k;
        }
        e();
      }
    } catch (k) {
      if (k && r && typeof k.stack == "string") {
        for (var i = k.stack.split(`
`), l = r.stack.split(`
`), u = i.length - 1, f = l.length - 1; 1 <= u && 0 <= f && i[u] !== l[f]; ) f--;
        for (; 1 <= u && 0 <= f; u--, f--) if (i[u] !== l[f]) {
          if (u !== 1 || f !== 1)
            do
              if (u--, f--, 0 > f || i[u] !== l[f]) {
                var h = `
` + i[u].replace(" at new ", " at ");
                return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), h;
              }
            while (1 <= u && 0 <= f);
          break;
        }
      }
    } finally {
      ae = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }
  function he(e) {
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
      case ne:
        return "Fragment";
      case V:
        return "Portal";
      case Me:
        return "Profiler";
      case pe:
        return "StrictMode";
      case je:
        return "Suspense";
      case De:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case We:
        return (e.displayName || "Context") + ".Consumer";
      case xe:
        return (e._context.displayName || "Context") + ".Provider";
      case Oe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ke:
        return t = e.displayName || null, t !== null ? t : me(e.type) || "Memo";
      case Re:
        t = e._payload, e = e._init;
        try {
          return me(e(t));
        } catch {
        }
    }
    return null;
  }
  function z(e) {
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
  function P(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function X(e) {
    var t = P(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, l = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(u) {
        r = "" + u, l.call(this, u);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function ce(e) {
    e._valueTracker || (e._valueTracker = X(e));
  }
  function ee(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = P(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
    return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ve(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = B(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ge(e, t) {
    t = t.checked, t != null && J(e, "checked", t, !1);
  }
  function Ce(e, t) {
    ge(e, t);
    var n = B(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Fe(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fe(e, t.type, B(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
    (t !== "number" || re(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Be = Array.isArray;
  function Ye(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + B(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ue(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Be(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: B(n) };
  }
  function Te(e, t) {
    var n = B(t.value), r = B(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Xe(e) {
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
  function Ln(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ht(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ft, Zt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ft = Ft || document.createElement("div"), Ft.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ft.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  }, yr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kt).forEach(function(e) {
    yr.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Kt[t] = Kt[e];
    });
  });
  function se(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kt.hasOwnProperty(e) && Kt[e] ? ("" + t).trim() : t + "px";
  }
  function bt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = se(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var oe = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ye(e, t) {
    if (t) {
      if (oe[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
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
  var Pe = null;
  function Ze(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var en = null, dt = null, Qt = null;
  function Kn(e) {
    if (e = Br(e)) {
      if (typeof en != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = Ni(t), en(e.stateNode, e.type, t));
    }
  }
  function Qn(e) {
    dt ? Qt ? Qt.push(e) : Qt = [e] : dt = e;
  }
  function Gn() {
    if (dt) {
      var e = dt, t = Qt;
      if (Qt = dt = null, Kn(e), t) for (e = 0; e < t.length; e++) Kn(t[e]);
    }
  }
  function fo(e, t) {
    return e(t);
  }
  function po() {
  }
  var vl = !1;
  function ho(e, t, n) {
    if (vl) return e(t, n);
    vl = !0;
    try {
      return fo(e, t, n);
    } finally {
      vl = !1, (dt !== null || Qt !== null) && (po(), Gn());
    }
  }
  function gr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ni(n);
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
  var yl = !1;
  if (x) try {
    var kr = {};
    Object.defineProperty(kr, "passive", { get: function() {
      yl = !0;
    } }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
  } catch {
    yl = !1;
  }
  function kc(e, t, n, r, i, l, u, f, h) {
    var k = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, k);
    } catch (N) {
      this.onError(N);
    }
  }
  var wr = !1, li = null, si = !1, gl = null, wc = { onError: function(e) {
    wr = !0, li = e;
  } };
  function xc(e, t, n, r, i, l, u, f, h) {
    wr = !1, li = null, kc.apply(wc, arguments);
  }
  function Sc(e, t, n, r, i, l, u, f, h) {
    if (xc.apply(this, arguments), wr) {
      if (wr) {
        var k = li;
        wr = !1, li = null;
      } else throw Error(o(198));
      si || (si = !0, gl = k);
    }
  }
  function Pn(e) {
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
  function mo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function vo(e) {
    if (Pn(e) !== e) throw Error(o(188));
  }
  function Ec(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Pn(e), t === null) throw Error(o(188));
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
          if (l === n) return vo(i), e;
          if (l === r) return vo(i), t;
          l = l.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) n = i, r = l;
      else {
        for (var u = !1, f = i.child; f; ) {
          if (f === n) {
            u = !0, n = i, r = l;
            break;
          }
          if (f === r) {
            u = !0, r = i, n = l;
            break;
          }
          f = f.sibling;
        }
        if (!u) {
          for (f = l.child; f; ) {
            if (f === n) {
              u = !0, n = l, r = i;
              break;
            }
            if (f === r) {
              u = !0, r = l, n = i;
              break;
            }
            f = f.sibling;
          }
          if (!u) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function yo(e) {
    return e = Ec(e), e !== null ? go(e) : null;
  }
  function go(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = go(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ko = s.unstable_scheduleCallback, wo = s.unstable_cancelCallback, _c = s.unstable_shouldYield, Cc = s.unstable_requestPaint, qe = s.unstable_now, Tc = s.unstable_getCurrentPriorityLevel, kl = s.unstable_ImmediatePriority, xo = s.unstable_UserBlockingPriority, oi = s.unstable_NormalPriority, Nc = s.unstable_LowPriority, So = s.unstable_IdlePriority, ui = null, Gt = null;
  function Mc(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(ui, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var It = Math.clz32 ? Math.clz32 : Lc, jc = Math.log, Rc = Math.LN2;
  function Lc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (jc(e) / Rc | 0) | 0;
  }
  var ai = 64, ci = 4194304;
  function xr(e) {
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
  function fi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, l = e.pingedLanes, u = n & 268435455;
    if (u !== 0) {
      var f = u & ~i;
      f !== 0 ? r = xr(f) : (l &= u, l !== 0 && (r = xr(l)));
    } else u = n & ~i, u !== 0 ? r = xr(u) : l !== 0 && (r = xr(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - It(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function Pc(e, t) {
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
  function zc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var u = 31 - It(l), f = 1 << u, h = i[u];
      h === -1 ? ((f & n) === 0 || (f & r) !== 0) && (i[u] = Pc(f, t)) : h <= t && (e.expiredLanes |= f), l &= ~f;
    }
  }
  function wl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Eo() {
    var e = ai;
    return ai <<= 1, (ai & 4194240) === 0 && (ai = 64), e;
  }
  function xl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Sr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - It(t), e[t] = n;
  }
  function Ac(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - It(n), l = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l;
    }
  }
  function Sl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - It(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var Ne = 0;
  function _o(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Co, El, To, No, Mo, _l = !1, di = [], dn = null, pn = null, hn = null, Er = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), mn = [], Fc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function jo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        dn = null;
        break;
      case "dragenter":
      case "dragleave":
        pn = null;
        break;
      case "mouseover":
      case "mouseout":
        hn = null;
        break;
      case "pointerover":
      case "pointerout":
        Er.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _r.delete(t.pointerId);
    }
  }
  function Cr(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }, t !== null && (t = Br(t), t !== null && El(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Ic(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return dn = Cr(dn, e, t, n, r, i), !0;
      case "dragenter":
        return pn = Cr(pn, e, t, n, r, i), !0;
      case "mouseover":
        return hn = Cr(hn, e, t, n, r, i), !0;
      case "pointerover":
        var l = i.pointerId;
        return Er.set(l, Cr(Er.get(l) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return l = i.pointerId, _r.set(l, Cr(_r.get(l) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Ro(e) {
    var t = zn(e.target);
    if (t !== null) {
      var n = Pn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = mo(n), t !== null) {
            e.blockedOn = t, Mo(e.priority, function() {
              To(n);
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
  function pi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Tl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Pe = r, n.target.dispatchEvent(r), Pe = null;
      } else return t = Br(n), t !== null && El(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Lo(e, t, n) {
    pi(e) && n.delete(t);
  }
  function Oc() {
    _l = !1, dn !== null && pi(dn) && (dn = null), pn !== null && pi(pn) && (pn = null), hn !== null && pi(hn) && (hn = null), Er.forEach(Lo), _r.forEach(Lo);
  }
  function Tr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, _l || (_l = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Oc)));
  }
  function Nr(e) {
    function t(i) {
      return Tr(i, e);
    }
    if (0 < di.length) {
      Tr(di[0], e);
      for (var n = 1; n < di.length; n++) {
        var r = di[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (dn !== null && Tr(dn, e), pn !== null && Tr(pn, e), hn !== null && Tr(hn, e), Er.forEach(t), _r.forEach(t), n = 0; n < mn.length; n++) r = mn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < mn.length && (n = mn[0], n.blockedOn === null); ) Ro(n), n.blockedOn === null && mn.shift();
  }
  var Yn = ue.ReactCurrentBatchConfig, hi = !0;
  function Dc(e, t, n, r) {
    var i = Ne, l = Yn.transition;
    Yn.transition = null;
    try {
      Ne = 1, Cl(e, t, n, r);
    } finally {
      Ne = i, Yn.transition = l;
    }
  }
  function Bc(e, t, n, r) {
    var i = Ne, l = Yn.transition;
    Yn.transition = null;
    try {
      Ne = 4, Cl(e, t, n, r);
    } finally {
      Ne = i, Yn.transition = l;
    }
  }
  function Cl(e, t, n, r) {
    if (hi) {
      var i = Tl(e, t, n, r);
      if (i === null) Hl(e, t, r, mi, n), jo(e, r);
      else if (Ic(i, e, t, n, r)) r.stopPropagation();
      else if (jo(e, r), t & 4 && -1 < Fc.indexOf(e)) {
        for (; i !== null; ) {
          var l = Br(i);
          if (l !== null && Co(l), l = Tl(e, t, n, r), l === null && Hl(e, t, r, mi, n), l === i) break;
          i = l;
        }
        i !== null && r.stopPropagation();
      } else Hl(e, t, r, null, n);
    }
  }
  var mi = null;
  function Tl(e, t, n, r) {
    if (mi = null, e = Ze(r), e = zn(e), e !== null) if (t = Pn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = mo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return mi = e, null;
  }
  function Po(e) {
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
        switch (Tc()) {
          case kl:
            return 1;
          case xo:
            return 4;
          case oi:
          case Nc:
            return 16;
          case So:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var vn = null, Nl = null, vi = null;
  function zo() {
    if (vi) return vi;
    var e, t = Nl, n = t.length, r, i = "value" in vn ? vn.value : vn.textContent, l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === i[l - r]; r++) ;
    return vi = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function yi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function gi() {
    return !0;
  }
  function Ao() {
    return !1;
  }
  function Et(e) {
    function t(n, r, i, l, u) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = u, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(l) : l[f]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? gi : Ao, this.isPropagationStopped = Ao, this;
    }
    return U(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gi);
    }, persist: function() {
    }, isPersistent: gi }), t;
  }
  var Xn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ml = Et(Xn), Mr = U({}, Xn, { view: 0, detail: 0 }), Uc = Et(Mr), jl, Rl, jr, ki = U({}, Mr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== jr && (jr && e.type === "mousemove" ? (jl = e.screenX - jr.screenX, Rl = e.screenY - jr.screenY) : Rl = jl = 0, jr = e), jl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Rl;
  } }), Fo = Et(ki), $c = U({}, ki, { dataTransfer: 0 }), Vc = Et($c), Hc = U({}, Mr, { relatedTarget: 0 }), Ll = Et(Hc), Wc = U({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kc = Et(Wc), Qc = U({}, Xn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Gc = Et(Qc), Yc = U({}, Xn, { data: 0 }), Io = Et(Yc), Xc = {
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
  }, qc = {
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
  }, Jc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Jc[e]) ? !!t[e] : !1;
  }
  function Pl() {
    return Zc;
  }
  var bc = U({}, Mr, { key: function(e) {
    if (e.key) {
      var t = Xc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = yi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pl, charCode: function(e) {
    return e.type === "keypress" ? yi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), ef = Et(bc), tf = U({}, ki, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oo = Et(tf), nf = U({}, Mr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pl }), rf = Et(nf), lf = U({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sf = Et(lf), of = U({}, ki, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), uf = Et(of), af = [9, 13, 27, 32], zl = x && "CompositionEvent" in window, Rr = null;
  x && "documentMode" in document && (Rr = document.documentMode);
  var cf = x && "TextEvent" in window && !Rr, Do = x && (!zl || Rr && 8 < Rr && 11 >= Rr), Bo = " ", Uo = !1;
  function $o(e, t) {
    switch (e) {
      case "keyup":
        return af.indexOf(t.keyCode) !== -1;
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
  function Vo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var qn = !1;
  function ff(e, t) {
    switch (e) {
      case "compositionend":
        return Vo(t);
      case "keypress":
        return t.which !== 32 ? null : (Uo = !0, Bo);
      case "textInput":
        return e = t.data, e === Bo && Uo ? null : e;
      default:
        return null;
    }
  }
  function df(e, t) {
    if (qn) return e === "compositionend" || !zl && $o(e, t) ? (e = zo(), vi = Nl = vn = null, qn = !1, e) : null;
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
        return Do && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var pf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ho(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!pf[e.type] : t === "textarea";
  }
  function Wo(e, t, n, r) {
    Qn(r), t = _i(t, "onChange"), 0 < t.length && (n = new Ml("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Lr = null, Pr = null;
  function hf(e) {
    uu(e, 0);
  }
  function wi(e) {
    var t = tr(e);
    if (ee(t)) return e;
  }
  function mf(e, t) {
    if (e === "change") return t;
  }
  var Ko = !1;
  if (x) {
    var Al;
    if (x) {
      var Fl = "oninput" in document;
      if (!Fl) {
        var Qo = document.createElement("div");
        Qo.setAttribute("oninput", "return;"), Fl = typeof Qo.oninput == "function";
      }
      Al = Fl;
    } else Al = !1;
    Ko = Al && (!document.documentMode || 9 < document.documentMode);
  }
  function Go() {
    Lr && (Lr.detachEvent("onpropertychange", Yo), Pr = Lr = null);
  }
  function Yo(e) {
    if (e.propertyName === "value" && wi(Pr)) {
      var t = [];
      Wo(t, Pr, e, Ze(e)), ho(hf, t);
    }
  }
  function vf(e, t, n) {
    e === "focusin" ? (Go(), Lr = t, Pr = n, Lr.attachEvent("onpropertychange", Yo)) : e === "focusout" && Go();
  }
  function yf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return wi(Pr);
  }
  function gf(e, t) {
    if (e === "click") return wi(t);
  }
  function kf(e, t) {
    if (e === "input" || e === "change") return wi(t);
  }
  function wf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : wf;
  function zr(e, t) {
    if (Ot(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!_.call(t, i) || !Ot(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Xo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qo(e, t) {
    var n = Xo(e);
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
      n = Xo(n);
    }
  }
  function Jo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zo() {
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
  function Il(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function xf(e) {
    var t = Zo(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Jo(n.ownerDocument.documentElement, n)) {
      if (r !== null && Il(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, l = Math.min(r.start, i);
          r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = qo(n, l);
          var u = qo(
            n,
            r
          );
          i && u && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Sf = x && "documentMode" in document && 11 >= document.documentMode, Jn = null, Ol = null, Ar = null, Dl = !1;
  function bo(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Dl || Jn == null || Jn !== re(r) || (r = Jn, "selectionStart" in r && Il(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ar && zr(Ar, r) || (Ar = r, r = _i(Ol, "onSelect"), 0 < r.length && (t = new Ml("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Jn)));
  }
  function xi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Zn = { animationend: xi("Animation", "AnimationEnd"), animationiteration: xi("Animation", "AnimationIteration"), animationstart: xi("Animation", "AnimationStart"), transitionend: xi("Transition", "TransitionEnd") }, Bl = {}, eu = {};
  x && (eu = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);
  function Si(e) {
    if (Bl[e]) return Bl[e];
    if (!Zn[e]) return e;
    var t = Zn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in eu) return Bl[e] = t[n];
    return e;
  }
  var tu = Si("animationend"), nu = Si("animationiteration"), ru = Si("animationstart"), iu = Si("transitionend"), lu = /* @__PURE__ */ new Map(), su = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yn(e, t) {
    lu.set(e, t), p(t, [e]);
  }
  for (var Ul = 0; Ul < su.length; Ul++) {
    var $l = su[Ul], Ef = $l.toLowerCase(), _f = $l[0].toUpperCase() + $l.slice(1);
    yn(Ef, "on" + _f);
  }
  yn(tu, "onAnimationEnd"), yn(nu, "onAnimationIteration"), yn(ru, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(iu, "onTransitionEnd"), w("onMouseEnter", ["mouseout", "mouseover"]), w("onMouseLeave", ["mouseout", "mouseover"]), w("onPointerEnter", ["pointerout", "pointerover"]), w("onPointerLeave", ["pointerout", "pointerover"]), p("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), p("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), p("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), p("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), p("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), p("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
  function ou(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Sc(r, t, void 0, e), e.currentTarget = null;
  }
  function uu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t) for (var u = r.length - 1; 0 <= u; u--) {
          var f = r[u], h = f.instance, k = f.currentTarget;
          if (f = f.listener, h !== l && i.isPropagationStopped()) break e;
          ou(i, f, k), l = h;
        }
        else for (u = 0; u < r.length; u++) {
          if (f = r[u], h = f.instance, k = f.currentTarget, f = f.listener, h !== l && i.isPropagationStopped()) break e;
          ou(i, f, k), l = h;
        }
      }
    }
    if (si) throw e = gl, si = !1, gl = null, e;
  }
  function ze(e, t) {
    var n = t[Xl];
    n === void 0 && (n = t[Xl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (au(t, e, 2, !1), n.add(r));
  }
  function Vl(e, t, n) {
    var r = 0;
    t && (r |= 4), au(n, e, r, t);
  }
  var Ei = "_reactListening" + Math.random().toString(36).slice(2);
  function Ir(e) {
    if (!e[Ei]) {
      e[Ei] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Cf.has(n) || Vl(n, !1, e), Vl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ei] || (t[Ei] = !0, Vl("selectionchange", !1, t));
    }
  }
  function au(e, t, n, r) {
    switch (Po(t)) {
      case 1:
        var i = Dc;
        break;
      case 4:
        i = Bc;
        break;
      default:
        i = Cl;
    }
    n = i.bind(null, t, n, e), i = void 0, !yl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Hl(e, t, n, r, i) {
    var l = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var f = r.stateNode.containerInfo;
        if (f === i || f.nodeType === 8 && f.parentNode === i) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var h = u.tag;
          if ((h === 3 || h === 4) && (h = u.stateNode.containerInfo, h === i || h.nodeType === 8 && h.parentNode === i)) return;
          u = u.return;
        }
        for (; f !== null; ) {
          if (u = zn(f), u === null) return;
          if (h = u.tag, h === 5 || h === 6) {
            r = l = u;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    ho(function() {
      var k = l, N = Ze(n), R = [];
      e: {
        var T = lu.get(e);
        if (T !== void 0) {
          var H = Ml, Q = e;
          switch (e) {
            case "keypress":
              if (yi(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = ef;
              break;
            case "focusin":
              Q = "focus", H = Ll;
              break;
            case "focusout":
              Q = "blur", H = Ll;
              break;
            case "beforeblur":
            case "afterblur":
              H = Ll;
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
              H = Fo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Vc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = rf;
              break;
            case tu:
            case nu:
            case ru:
              H = Kc;
              break;
            case iu:
              H = sf;
              break;
            case "scroll":
              H = Uc;
              break;
            case "wheel":
              H = uf;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Gc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Oo;
          }
          var Y = (t & 4) !== 0, Je = !Y && e === "scroll", y = Y ? T !== null ? T + "Capture" : null : T;
          Y = [];
          for (var m = k, g; m !== null; ) {
            g = m;
            var A = g.stateNode;
            if (g.tag === 5 && A !== null && (g = A, y !== null && (A = gr(m, y), A != null && Y.push(Or(m, A, g)))), Je) break;
            m = m.return;
          }
          0 < Y.length && (T = new H(T, Q, null, n, N), R.push({ event: T, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (T = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", T && n !== Pe && (Q = n.relatedTarget || n.fromElement) && (zn(Q) || Q[tn])) break e;
          if ((H || T) && (T = N.window === N ? N : (T = N.ownerDocument) ? T.defaultView || T.parentWindow : window, H ? (Q = n.relatedTarget || n.toElement, H = k, Q = Q ? zn(Q) : null, Q !== null && (Je = Pn(Q), Q !== Je || Q.tag !== 5 && Q.tag !== 6) && (Q = null)) : (H = null, Q = k), H !== Q)) {
            if (Y = Fo, A = "onMouseLeave", y = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (Y = Oo, A = "onPointerLeave", y = "onPointerEnter", m = "pointer"), Je = H == null ? T : tr(H), g = Q == null ? T : tr(Q), T = new Y(A, m + "leave", H, n, N), T.target = Je, T.relatedTarget = g, A = null, zn(N) === k && (Y = new Y(y, m + "enter", Q, n, N), Y.target = g, Y.relatedTarget = Je, A = Y), Je = A, H && Q) t: {
              for (Y = H, y = Q, m = 0, g = Y; g; g = bn(g)) m++;
              for (g = 0, A = y; A; A = bn(A)) g++;
              for (; 0 < m - g; ) Y = bn(Y), m--;
              for (; 0 < g - m; ) y = bn(y), g--;
              for (; m--; ) {
                if (Y === y || y !== null && Y === y.alternate) break t;
                Y = bn(Y), y = bn(y);
              }
              Y = null;
            }
            else Y = null;
            H !== null && cu(R, T, H, Y, !1), Q !== null && Je !== null && cu(R, Je, Q, Y, !0);
          }
        }
        e: {
          if (T = k ? tr(k) : window, H = T.nodeName && T.nodeName.toLowerCase(), H === "select" || H === "input" && T.type === "file") var q = mf;
          else if (Ho(T)) if (Ko) q = kf;
          else {
            q = yf;
            var ie = vf;
          }
          else (H = T.nodeName) && H.toLowerCase() === "input" && (T.type === "checkbox" || T.type === "radio") && (q = gf);
          if (q && (q = q(e, k))) {
            Wo(R, q, n, N);
            break e;
          }
          ie && ie(e, T, k), e === "focusout" && (ie = T._wrapperState) && ie.controlled && T.type === "number" && Fe(T, "number", T.value);
        }
        switch (ie = k ? tr(k) : window, e) {
          case "focusin":
            (Ho(ie) || ie.contentEditable === "true") && (Jn = ie, Ol = k, Ar = null);
            break;
          case "focusout":
            Ar = Ol = Jn = null;
            break;
          case "mousedown":
            Dl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Dl = !1, bo(R, n, N);
            break;
          case "selectionchange":
            if (Sf) break;
          case "keydown":
          case "keyup":
            bo(R, n, N);
        }
        var le;
        if (zl) e: {
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
        else qn ? $o(e, n) && (fe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (fe = "onCompositionStart");
        fe && (Do && n.locale !== "ko" && (qn || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && qn && (le = zo()) : (vn = N, Nl = "value" in vn ? vn.value : vn.textContent, qn = !0)), ie = _i(k, fe), 0 < ie.length && (fe = new Io(fe, e, null, n, N), R.push({ event: fe, listeners: ie }), le ? fe.data = le : (le = Vo(n), le !== null && (fe.data = le)))), (le = cf ? ff(e, n) : df(e, n)) && (k = _i(k, "onBeforeInput"), 0 < k.length && (N = new Io("onBeforeInput", "beforeinput", null, n, N), R.push({ event: N, listeners: k }), N.data = le));
      }
      uu(R, t);
    });
  }
  function Or(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function _i(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, l = i.stateNode;
      i.tag === 5 && l !== null && (i = l, l = gr(e, n), l != null && r.unshift(Or(e, l, i)), l = gr(e, t), l != null && r.push(Or(e, l, i))), e = e.return;
    }
    return r;
  }
  function bn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function cu(e, t, n, r, i) {
    for (var l = t._reactName, u = []; n !== null && n !== r; ) {
      var f = n, h = f.alternate, k = f.stateNode;
      if (h !== null && h === r) break;
      f.tag === 5 && k !== null && (f = k, i ? (h = gr(n, l), h != null && u.unshift(Or(n, h, f))) : i || (h = gr(n, l), h != null && u.push(Or(n, h, f)))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Tf = /\r\n?/g, Nf = /\u0000|\uFFFD/g;
  function fu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Tf, `
`).replace(Nf, "");
  }
  function Ci(e, t, n) {
    if (t = fu(t), fu(e) !== t && n) throw Error(o(425));
  }
  function Ti() {
  }
  var Wl = null, Kl = null;
  function Ql(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Gl = typeof setTimeout == "function" ? setTimeout : void 0, Mf = typeof clearTimeout == "function" ? clearTimeout : void 0, du = typeof Promise == "function" ? Promise : void 0, jf = typeof queueMicrotask == "function" ? queueMicrotask : typeof du < "u" ? function(e) {
    return du.resolve(null).then(e).catch(Rf);
  } : Gl;
  function Rf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Yl(e, t) {
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
  function gn(e) {
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
  function pu(e) {
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
  var er = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + er, Dr = "__reactProps$" + er, tn = "__reactContainer$" + er, Xl = "__reactEvents$" + er, Lf = "__reactListeners$" + er, Pf = "__reactHandles$" + er;
  function zn(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[tn] || n[Yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = pu(e); e !== null; ) {
          if (n = e[Yt]) return n;
          e = pu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Br(e) {
    return e = e[Yt] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function tr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ni(e) {
    return e[Dr] || null;
  }
  var ql = [], nr = -1;
  function kn(e) {
    return { current: e };
  }
  function Ae(e) {
    0 > nr || (e.current = ql[nr], ql[nr] = null, nr--);
  }
  function Le(e, t) {
    nr++, ql[nr] = e.current, e.current = t;
  }
  var wn = {}, ot = kn(wn), yt = kn(!1), An = wn;
  function rr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return wn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, l;
    for (l in n) i[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function gt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Mi() {
    Ae(yt), Ae(ot);
  }
  function hu(e, t, n) {
    if (ot.current !== wn) throw Error(o(168));
    Le(ot, t), Le(yt, n);
  }
  function mu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(o(108, z(e) || "Unknown", i));
    return U({}, n, r);
  }
  function ji(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wn, An = ot.current, Le(ot, e), Le(yt, yt.current), !0;
  }
  function vu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n ? (e = mu(e, t, An), r.__reactInternalMemoizedMergedChildContext = e, Ae(yt), Ae(ot), Le(ot, e)) : Ae(yt), Le(yt, n);
  }
  var nn = null, Ri = !1, Jl = !1;
  function yu(e) {
    nn === null ? nn = [e] : nn.push(e);
  }
  function zf(e) {
    Ri = !0, yu(e);
  }
  function xn() {
    if (!Jl && nn !== null) {
      Jl = !0;
      var e = 0, t = Ne;
      try {
        var n = nn;
        for (Ne = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        nn = null, Ri = !1;
      } catch (i) {
        throw nn !== null && (nn = nn.slice(e + 1)), ko(kl, xn), i;
      } finally {
        Ne = t, Jl = !1;
      }
    }
    return null;
  }
  var ir = [], lr = 0, Li = null, Pi = 0, jt = [], Rt = 0, Fn = null, rn = 1, ln = "";
  function In(e, t) {
    ir[lr++] = Pi, ir[lr++] = Li, Li = e, Pi = t;
  }
  function gu(e, t, n) {
    jt[Rt++] = rn, jt[Rt++] = ln, jt[Rt++] = Fn, Fn = e;
    var r = rn;
    e = ln;
    var i = 32 - It(r) - 1;
    r &= ~(1 << i), n += 1;
    var l = 32 - It(t) + i;
    if (30 < l) {
      var u = i - i % 5;
      l = (r & (1 << u) - 1).toString(32), r >>= u, i -= u, rn = 1 << 32 - It(t) + i | n << i | r, ln = l + e;
    } else rn = 1 << l | n << i | r, ln = e;
  }
  function Zl(e) {
    e.return !== null && (In(e, 1), gu(e, 1, 0));
  }
  function bl(e) {
    for (; e === Li; ) Li = ir[--lr], ir[lr] = null, Pi = ir[--lr], ir[lr] = null;
    for (; e === Fn; ) Fn = jt[--Rt], jt[Rt] = null, ln = jt[--Rt], jt[Rt] = null, rn = jt[--Rt], jt[Rt] = null;
  }
  var _t = null, Ct = null, Ie = !1, Dt = null;
  function ku(e, t) {
    var n = At(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function wu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, Ct = gn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, Ct = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Fn !== null ? { id: rn, overflow: ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = At(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, Ct = null, !0) : !1;
      default:
        return !1;
    }
  }
  function es(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ts(e) {
    if (Ie) {
      var t = Ct;
      if (t) {
        var n = t;
        if (!wu(e, t)) {
          if (es(e)) throw Error(o(418));
          t = gn(n.nextSibling);
          var r = _t;
          t && wu(e, t) ? ku(r, n) : (e.flags = e.flags & -4097 | 2, Ie = !1, _t = e);
        }
      } else {
        if (es(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, Ie = !1, _t = e;
      }
    }
  }
  function xu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    _t = e;
  }
  function zi(e) {
    if (e !== _t) return !1;
    if (!Ie) return xu(e), Ie = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ql(e.type, e.memoizedProps)), t && (t = Ct)) {
      if (es(e)) throw Su(), Error(o(418));
      for (; t; ) ku(e, t), t = gn(t.nextSibling);
    }
    if (xu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ct = gn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ct = null;
      }
    } else Ct = _t ? gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Su() {
    for (var e = Ct; e; ) e = gn(e.nextSibling);
  }
  function sr() {
    Ct = _t = null, Ie = !1;
  }
  function ns(e) {
    Dt === null ? Dt = [e] : Dt.push(e);
  }
  var Af = ue.ReactCurrentBatchConfig;
  function Ur(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var i = r, l = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(u) {
          var f = i.refs;
          u === null ? delete f[l] : f[l] = u;
        }, t._stringRef = l, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Ai(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Eu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function _u(e) {
    function t(y, m) {
      if (e) {
        var g = y.deletions;
        g === null ? (y.deletions = [m], y.flags |= 16) : g.push(m);
      }
    }
    function n(y, m) {
      if (!e) return null;
      for (; m !== null; ) t(y, m), m = m.sibling;
      return null;
    }
    function r(y, m) {
      for (y = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? y.set(m.key, m) : y.set(m.index, m), m = m.sibling;
      return y;
    }
    function i(y, m) {
      return y = jn(y, m), y.index = 0, y.sibling = null, y;
    }
    function l(y, m, g) {
      return y.index = g, e ? (g = y.alternate, g !== null ? (g = g.index, g < m ? (y.flags |= 2, m) : g) : (y.flags |= 2, m)) : (y.flags |= 1048576, m);
    }
    function u(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function f(y, m, g, A) {
      return m === null || m.tag !== 6 ? (m = Gs(g, y.mode, A), m.return = y, m) : (m = i(m, g), m.return = y, m);
    }
    function h(y, m, g, A) {
      var q = g.type;
      return q === ne ? N(y, m, g.props.children, A, g.key) : m !== null && (m.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Re && Eu(q) === m.type) ? (A = i(m, g.props), A.ref = Ur(y, m, g), A.return = y, A) : (A = il(g.type, g.key, g.props, null, y.mode, A), A.ref = Ur(y, m, g), A.return = y, A);
    }
    function k(y, m, g, A) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = Ys(g, y.mode, A), m.return = y, m) : (m = i(m, g.children || []), m.return = y, m);
    }
    function N(y, m, g, A, q) {
      return m === null || m.tag !== 7 ? (m = Wn(g, y.mode, A, q), m.return = y, m) : (m = i(m, g), m.return = y, m);
    }
    function R(y, m, g) {
      if (typeof m == "string" && m !== "" || typeof m == "number") return m = Gs("" + m, y.mode, g), m.return = y, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Z:
            return g = il(m.type, m.key, m.props, null, y.mode, g), g.ref = Ur(y, null, m), g.return = y, g;
          case V:
            return m = Ys(m, y.mode, g), m.return = y, m;
          case Re:
            var A = m._init;
            return R(y, A(m._payload), g);
        }
        if (Be(m) || b(m)) return m = Wn(m, y.mode, g, null), m.return = y, m;
        Ai(y, m);
      }
      return null;
    }
    function T(y, m, g, A) {
      var q = m !== null ? m.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number") return q !== null ? null : f(y, m, "" + g, A);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Z:
            return g.key === q ? h(y, m, g, A) : null;
          case V:
            return g.key === q ? k(y, m, g, A) : null;
          case Re:
            return q = g._init, T(
              y,
              m,
              q(g._payload),
              A
            );
        }
        if (Be(g) || b(g)) return q !== null ? null : N(y, m, g, A, null);
        Ai(y, g);
      }
      return null;
    }
    function H(y, m, g, A, q) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return y = y.get(g) || null, f(m, y, "" + A, q);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case Z:
            return y = y.get(A.key === null ? g : A.key) || null, h(m, y, A, q);
          case V:
            return y = y.get(A.key === null ? g : A.key) || null, k(m, y, A, q);
          case Re:
            var ie = A._init;
            return H(y, m, g, ie(A._payload), q);
        }
        if (Be(A) || b(A)) return y = y.get(g) || null, N(m, y, A, q, null);
        Ai(m, A);
      }
      return null;
    }
    function Q(y, m, g, A) {
      for (var q = null, ie = null, le = m, fe = m = 0, it = null; le !== null && fe < g.length; fe++) {
        le.index > fe ? (it = le, le = null) : it = le.sibling;
        var _e = T(y, le, g[fe], A);
        if (_e === null) {
          le === null && (le = it);
          break;
        }
        e && le && _e.alternate === null && t(y, le), m = l(_e, m, fe), ie === null ? q = _e : ie.sibling = _e, ie = _e, le = it;
      }
      if (fe === g.length) return n(y, le), Ie && In(y, fe), q;
      if (le === null) {
        for (; fe < g.length; fe++) le = R(y, g[fe], A), le !== null && (m = l(le, m, fe), ie === null ? q = le : ie.sibling = le, ie = le);
        return Ie && In(y, fe), q;
      }
      for (le = r(y, le); fe < g.length; fe++) it = H(le, y, fe, g[fe], A), it !== null && (e && it.alternate !== null && le.delete(it.key === null ? fe : it.key), m = l(it, m, fe), ie === null ? q = it : ie.sibling = it, ie = it);
      return e && le.forEach(function(Rn) {
        return t(y, Rn);
      }), Ie && In(y, fe), q;
    }
    function Y(y, m, g, A) {
      var q = b(g);
      if (typeof q != "function") throw Error(o(150));
      if (g = q.call(g), g == null) throw Error(o(151));
      for (var ie = q = null, le = m, fe = m = 0, it = null, _e = g.next(); le !== null && !_e.done; fe++, _e = g.next()) {
        le.index > fe ? (it = le, le = null) : it = le.sibling;
        var Rn = T(y, le, _e.value, A);
        if (Rn === null) {
          le === null && (le = it);
          break;
        }
        e && le && Rn.alternate === null && t(y, le), m = l(Rn, m, fe), ie === null ? q = Rn : ie.sibling = Rn, ie = Rn, le = it;
      }
      if (_e.done) return n(
        y,
        le
      ), Ie && In(y, fe), q;
      if (le === null) {
        for (; !_e.done; fe++, _e = g.next()) _e = R(y, _e.value, A), _e !== null && (m = l(_e, m, fe), ie === null ? q = _e : ie.sibling = _e, ie = _e);
        return Ie && In(y, fe), q;
      }
      for (le = r(y, le); !_e.done; fe++, _e = g.next()) _e = H(le, y, fe, _e.value, A), _e !== null && (e && _e.alternate !== null && le.delete(_e.key === null ? fe : _e.key), m = l(_e, m, fe), ie === null ? q = _e : ie.sibling = _e, ie = _e);
      return e && le.forEach(function(pd) {
        return t(y, pd);
      }), Ie && In(y, fe), q;
    }
    function Je(y, m, g, A) {
      if (typeof g == "object" && g !== null && g.type === ne && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Z:
            e: {
              for (var q = g.key, ie = m; ie !== null; ) {
                if (ie.key === q) {
                  if (q = g.type, q === ne) {
                    if (ie.tag === 7) {
                      n(y, ie.sibling), m = i(ie, g.props.children), m.return = y, y = m;
                      break e;
                    }
                  } else if (ie.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Re && Eu(q) === ie.type) {
                    n(y, ie.sibling), m = i(ie, g.props), m.ref = Ur(y, ie, g), m.return = y, y = m;
                    break e;
                  }
                  n(y, ie);
                  break;
                } else t(y, ie);
                ie = ie.sibling;
              }
              g.type === ne ? (m = Wn(g.props.children, y.mode, A, g.key), m.return = y, y = m) : (A = il(g.type, g.key, g.props, null, y.mode, A), A.ref = Ur(y, m, g), A.return = y, y = A);
            }
            return u(y);
          case V:
            e: {
              for (ie = g.key; m !== null; ) {
                if (m.key === ie) if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                  n(y, m.sibling), m = i(m, g.children || []), m.return = y, y = m;
                  break e;
                } else {
                  n(y, m);
                  break;
                }
                else t(y, m);
                m = m.sibling;
              }
              m = Ys(g, y.mode, A), m.return = y, y = m;
            }
            return u(y);
          case Re:
            return ie = g._init, Je(y, m, ie(g._payload), A);
        }
        if (Be(g)) return Q(y, m, g, A);
        if (b(g)) return Y(y, m, g, A);
        Ai(y, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, m !== null && m.tag === 6 ? (n(y, m.sibling), m = i(m, g), m.return = y, y = m) : (n(y, m), m = Gs(g, y.mode, A), m.return = y, y = m), u(y)) : n(y, m);
    }
    return Je;
  }
  var or = _u(!0), Cu = _u(!1), Fi = kn(null), Ii = null, ur = null, rs = null;
  function is() {
    rs = ur = Ii = null;
  }
  function ls(e) {
    var t = Fi.current;
    Ae(Fi), e._currentValue = t;
  }
  function ss(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ar(e, t) {
    Ii = e, rs = ur = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (kt = !0), e.firstContext = null);
  }
  function Lt(e) {
    var t = e._currentValue;
    if (rs !== e) if (e = { context: e, memoizedValue: t, next: null }, ur === null) {
      if (Ii === null) throw Error(o(308));
      ur = e, Ii.dependencies = { lanes: 0, firstContext: e };
    } else ur = ur.next = e;
    return t;
  }
  var On = null;
  function os(e) {
    On === null ? On = [e] : On.push(e);
  }
  function Tu(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, os(t)) : (n.next = i.next, i.next = n), t.interleaved = n, sn(e, r);
  }
  function sn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Sn = !1;
  function us(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Nu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function on(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function En(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Se & 2) !== 0) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, sn(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, os(r)) : (t.next = i.next, i.next = t), r.interleaved = t, sn(e, n);
  }
  function Oi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Sl(e, n);
    }
  }
  function Mu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, l = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          l === null ? i = l = u : l = l.next = u, n = n.next;
        } while (n !== null);
        l === null ? i = l = t : l = l.next = t;
      } else i = l = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Di(e, t, n, r) {
    var i = e.updateQueue;
    Sn = !1;
    var l = i.firstBaseUpdate, u = i.lastBaseUpdate, f = i.shared.pending;
    if (f !== null) {
      i.shared.pending = null;
      var h = f, k = h.next;
      h.next = null, u === null ? l = k : u.next = k, u = h;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, f = N.lastBaseUpdate, f !== u && (f === null ? N.firstBaseUpdate = k : f.next = k, N.lastBaseUpdate = h));
    }
    if (l !== null) {
      var R = i.baseState;
      u = 0, N = k = h = null, f = l;
      do {
        var T = f.lane, H = f.eventTime;
        if ((r & T) === T) {
          N !== null && (N = N.next = {
            eventTime: H,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          e: {
            var Q = e, Y = f;
            switch (T = t, H = n, Y.tag) {
              case 1:
                if (Q = Y.payload, typeof Q == "function") {
                  R = Q.call(H, R, T);
                  break e;
                }
                R = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = Y.payload, T = typeof Q == "function" ? Q.call(H, R, T) : Q, T == null) break e;
                R = U({}, R, T);
                break e;
              case 2:
                Sn = !0;
            }
          }
          f.callback !== null && f.lane !== 0 && (e.flags |= 64, T = i.effects, T === null ? i.effects = [f] : T.push(f));
        } else H = { eventTime: H, lane: T, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, N === null ? (k = N = H, h = R) : N = N.next = H, u |= T;
        if (f = f.next, f === null) {
          if (f = i.shared.pending, f === null) break;
          T = f, f = T.next, T.next = null, i.lastBaseUpdate = T, i.shared.pending = null;
        }
      } while (!0);
      if (N === null && (h = R), i.baseState = h, i.firstBaseUpdate = k, i.lastBaseUpdate = N, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          u |= i.lane, i = i.next;
        while (i !== t);
      } else l === null && (i.shared.lanes = 0);
      Un |= u, e.lanes = u, e.memoizedState = R;
    }
  }
  function ju(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(o(191, i));
        i.call(r);
      }
    }
  }
  var $r = {}, Xt = kn($r), Vr = kn($r), Hr = kn($r);
  function Dn(e) {
    if (e === $r) throw Error(o(174));
    return e;
  }
  function as(e, t) {
    switch (Le(Hr, t), Le(Vr, e), Le(Xt, $r), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ln(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ln(t, e);
    }
    Ae(Xt), Le(Xt, t);
  }
  function cr() {
    Ae(Xt), Ae(Vr), Ae(Hr);
  }
  function Ru(e) {
    Dn(Hr.current);
    var t = Dn(Xt.current), n = Ln(t, e.type);
    t !== n && (Le(Vr, e), Le(Xt, n));
  }
  function cs(e) {
    Vr.current === e && (Ae(Xt), Ae(Vr));
  }
  var $e = kn(0);
  function Bi(e) {
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
  var fs = [];
  function ds() {
    for (var e = 0; e < fs.length; e++) fs[e]._workInProgressVersionPrimary = null;
    fs.length = 0;
  }
  var Ui = ue.ReactCurrentDispatcher, ps = ue.ReactCurrentBatchConfig, Bn = 0, Ve = null, et = null, nt = null, $i = !1, Wr = !1, Kr = 0, Ff = 0;
  function ut() {
    throw Error(o(321));
  }
  function hs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ot(e[n], t[n])) return !1;
    return !0;
  }
  function ms(e, t, n, r, i, l) {
    if (Bn = l, Ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ui.current = e === null || e.memoizedState === null ? Bf : Uf, e = n(r, i), Wr) {
      l = 0;
      do {
        if (Wr = !1, Kr = 0, 25 <= l) throw Error(o(301));
        l += 1, nt = et = null, t.updateQueue = null, Ui.current = $f, e = n(r, i);
      } while (Wr);
    }
    if (Ui.current = Wi, t = et !== null && et.next !== null, Bn = 0, nt = et = Ve = null, $i = !1, t) throw Error(o(300));
    return e;
  }
  function vs() {
    var e = Kr !== 0;
    return Kr = 0, e;
  }
  function qt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return nt === null ? Ve.memoizedState = nt = e : nt = nt.next = e, nt;
  }
  function Pt() {
    if (et === null) {
      var e = Ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var t = nt === null ? Ve.memoizedState : nt.next;
    if (t !== null) nt = t, et = e;
    else {
      if (e === null) throw Error(o(310));
      et = e, e = { memoizedState: et.memoizedState, baseState: et.baseState, baseQueue: et.baseQueue, queue: et.queue, next: null }, nt === null ? Ve.memoizedState = nt = e : nt = nt.next = e;
    }
    return nt;
  }
  function Qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ys(e) {
    var t = Pt(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = et, i = r.baseQueue, l = n.pending;
    if (l !== null) {
      if (i !== null) {
        var u = i.next;
        i.next = l.next, l.next = u;
      }
      r.baseQueue = i = l, n.pending = null;
    }
    if (i !== null) {
      l = i.next, r = r.baseState;
      var f = u = null, h = null, k = l;
      do {
        var N = k.lane;
        if ((Bn & N) === N) h !== null && (h = h.next = { lane: 0, action: k.action, hasEagerState: k.hasEagerState, eagerState: k.eagerState, next: null }), r = k.hasEagerState ? k.eagerState : e(r, k.action);
        else {
          var R = {
            lane: N,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          };
          h === null ? (f = h = R, u = r) : h = h.next = R, Ve.lanes |= N, Un |= N;
        }
        k = k.next;
      } while (k !== null && k !== l);
      h === null ? u = r : h.next = f, Ot(r, t.memoizedState) || (kt = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = h, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        l = i.lane, Ve.lanes |= l, Un |= l, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function gs(e) {
    var t = Pt(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, l = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var u = i = i.next;
      do
        l = e(l, u.action), u = u.next;
      while (u !== i);
      Ot(l, t.memoizedState) || (kt = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, r];
  }
  function Lu() {
  }
  function Pu(e, t) {
    var n = Ve, r = Pt(), i = t(), l = !Ot(r.memoizedState, i);
    if (l && (r.memoizedState = i, kt = !0), r = r.queue, ks(Fu.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || nt !== null && nt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Gr(9, Au.bind(null, n, r, i, t), void 0, null), rt === null) throw Error(o(349));
      (Bn & 30) !== 0 || zu(n, t, i);
    }
    return i;
  }
  function zu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Au(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Iu(t) && Ou(e);
  }
  function Fu(e, t, n) {
    return n(function() {
      Iu(t) && Ou(e);
    });
  }
  function Iu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ot(e, n);
    } catch {
      return !0;
    }
  }
  function Ou(e) {
    var t = sn(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function Du(e) {
    var t = qt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Df.bind(null, Ve, e), [t.memoizedState, e];
  }
  function Gr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ve.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Bu() {
    return Pt().memoizedState;
  }
  function Vi(e, t, n, r) {
    var i = qt();
    Ve.flags |= e, i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Hi(e, t, n, r) {
    var i = Pt();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (et !== null) {
      var u = et.memoizedState;
      if (l = u.destroy, r !== null && hs(r, u.deps)) {
        i.memoizedState = Gr(t, n, l, r);
        return;
      }
    }
    Ve.flags |= e, i.memoizedState = Gr(1 | t, n, l, r);
  }
  function Uu(e, t) {
    return Vi(8390656, 8, e, t);
  }
  function ks(e, t) {
    return Hi(2048, 8, e, t);
  }
  function $u(e, t) {
    return Hi(4, 2, e, t);
  }
  function Vu(e, t) {
    return Hi(4, 4, e, t);
  }
  function Hu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Wu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Hi(4, 4, Hu.bind(null, t, e), n);
  }
  function ws() {
  }
  function Ku(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Qu(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Gu(e, t, n) {
    return (Bn & 21) === 0 ? (e.baseState && (e.baseState = !1, kt = !0), e.memoizedState = n) : (Ot(n, t) || (n = Eo(), Ve.lanes |= n, Un |= n, e.baseState = !0), t);
  }
  function If(e, t) {
    var n = Ne;
    Ne = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = ps.transition;
    ps.transition = {};
    try {
      e(!1), t();
    } finally {
      Ne = n, ps.transition = r;
    }
  }
  function Yu() {
    return Pt().memoizedState;
  }
  function Of(e, t, n) {
    var r = Nn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Xu(e)) qu(t, n);
    else if (n = Tu(e, t, n, r), n !== null) {
      var i = ht();
      Vt(n, e, r, i), Ju(n, t, r);
    }
  }
  function Df(e, t, n) {
    var r = Nn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Xu(e)) qu(t, i);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
        var u = t.lastRenderedState, f = l(u, n);
        if (i.hasEagerState = !0, i.eagerState = f, Ot(f, u)) {
          var h = t.interleaved;
          h === null ? (i.next = i, os(t)) : (i.next = h.next, h.next = i), t.interleaved = i;
          return;
        }
      } catch {
      }
      n = Tu(e, t, i, r), n !== null && (i = ht(), Vt(n, e, r, i), Ju(n, t, r));
    }
  }
  function Xu(e) {
    var t = e.alternate;
    return e === Ve || t !== null && t === Ve;
  }
  function qu(e, t) {
    Wr = $i = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ju(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Sl(e, n);
    }
  }
  var Wi = { readContext: Lt, useCallback: ut, useContext: ut, useEffect: ut, useImperativeHandle: ut, useInsertionEffect: ut, useLayoutEffect: ut, useMemo: ut, useReducer: ut, useRef: ut, useState: ut, useDebugValue: ut, useDeferredValue: ut, useTransition: ut, useMutableSource: ut, useSyncExternalStore: ut, useId: ut, unstable_isNewReconciler: !1 }, Bf = { readContext: Lt, useCallback: function(e, t) {
    return qt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Lt, useEffect: Uu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Vi(
      4194308,
      4,
      Hu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Vi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Vi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = qt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = qt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Of.bind(null, Ve, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = qt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Du, useDebugValue: ws, useDeferredValue: function(e) {
    return qt().memoizedState = e;
  }, useTransition: function() {
    var e = Du(!1), t = e[0];
    return e = If.bind(null, e[1]), qt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ve, i = qt();
    if (Ie) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), rt === null) throw Error(o(349));
      (Bn & 30) !== 0 || zu(r, t, n);
    }
    i.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return i.queue = l, Uu(Fu.bind(
      null,
      r,
      l,
      e
    ), [e]), r.flags |= 2048, Gr(9, Au.bind(null, r, l, n, t), void 0, null), n;
  }, useId: function() {
    var e = qt(), t = rt.identifierPrefix;
    if (Ie) {
      var n = ln, r = rn;
      n = (r & ~(1 << 32 - It(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Ff++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Uf = {
    readContext: Lt,
    useCallback: Ku,
    useContext: Lt,
    useEffect: ks,
    useImperativeHandle: Wu,
    useInsertionEffect: $u,
    useLayoutEffect: Vu,
    useMemo: Qu,
    useReducer: ys,
    useRef: Bu,
    useState: function() {
      return ys(Qr);
    },
    useDebugValue: ws,
    useDeferredValue: function(e) {
      var t = Pt();
      return Gu(t, et.memoizedState, e);
    },
    useTransition: function() {
      var e = ys(Qr)[0], t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Lu,
    useSyncExternalStore: Pu,
    useId: Yu,
    unstable_isNewReconciler: !1
  }, $f = { readContext: Lt, useCallback: Ku, useContext: Lt, useEffect: ks, useImperativeHandle: Wu, useInsertionEffect: $u, useLayoutEffect: Vu, useMemo: Qu, useReducer: gs, useRef: Bu, useState: function() {
    return gs(Qr);
  }, useDebugValue: ws, useDeferredValue: function(e) {
    var t = Pt();
    return et === null ? t.memoizedState = e : Gu(t, et.memoizedState, e);
  }, useTransition: function() {
    var e = gs(Qr)[0], t = Pt().memoizedState;
    return [e, t];
  }, useMutableSource: Lu, useSyncExternalStore: Pu, useId: Yu, unstable_isNewReconciler: !1 };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      t = U({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function xs(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ki = { isMounted: function(e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = ht(), i = Nn(e), l = on(r, i);
    l.payload = t, n != null && (l.callback = n), t = En(e, l, i), t !== null && (Vt(t, e, i, r), Oi(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = ht(), i = Nn(e), l = on(r, i);
    l.tag = 1, l.payload = t, n != null && (l.callback = n), t = En(e, l, i), t !== null && (Vt(t, e, i, r), Oi(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ht(), r = Nn(e), i = on(n, r);
    i.tag = 2, t != null && (i.callback = t), t = En(e, i, r), t !== null && (Vt(t, e, r, n), Oi(t, e, r));
  } };
  function Zu(e, t, n, r, i, l, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, u) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(i, l) : !0;
  }
  function bu(e, t, n) {
    var r = !1, i = wn, l = t.contextType;
    return typeof l == "object" && l !== null ? l = Lt(l) : (i = gt(t) ? An : ot.current, r = t.contextTypes, l = (r = r != null) ? rr(e, i) : wn), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ki, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t;
  }
  function ea(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ki.enqueueReplaceState(t, t.state, null);
  }
  function Ss(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, us(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? i.context = Lt(l) : (l = gt(t) ? An : ot.current, i.context = rr(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (xs(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ki.enqueueReplaceState(i, i.state, null), Di(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function fr(e, t) {
    try {
      var n = "", r = t;
      do
        n += he(r), r = r.return;
      while (r);
      var i = n;
    } catch (l) {
      i = `
Error generating stack: ` + l.message + `
` + l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Es(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function _s(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Vf = typeof WeakMap == "function" ? WeakMap : Map;
  function ta(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Zi || (Zi = !0, Bs = r), _s(e, t);
    }, n;
  }
  function na(e, t, n) {
    n = on(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        _s(e, t);
      };
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
      _s(e, t), typeof r != "function" && (Cn === null ? Cn = /* @__PURE__ */ new Set([this]) : Cn.add(this));
      var u = t.stack;
      this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
    }), n;
  }
  function ra(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Vf();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = nd.bind(null, e, t, n), t.then(e, e));
  }
  function ia(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function la(e, t, n, r, i) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, En(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e);
  }
  var Hf = ue.ReactCurrentOwner, kt = !1;
  function pt(e, t, n, r) {
    t.child = e === null ? Cu(t, null, n, r) : or(t, e.child, n, r);
  }
  function sa(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return ar(t, i), r = ms(e, t, n, r, l, i), n = vs(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, un(e, t, i)) : (Ie && n && Zl(t), t.flags |= 1, pt(e, t, r, i), t.child);
  }
  function oa(e, t, n, r, i) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" && !Qs(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, ua(e, t, l, r, i)) : (e = il(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, (e.lanes & i) === 0) {
      var u = l.memoizedProps;
      if (n = n.compare, n = n !== null ? n : zr, n(u, r) && e.ref === t.ref) return un(e, t, i);
    }
    return t.flags |= 1, e = jn(l, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ua(e, t, n, r, i) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (zr(l, r) && e.ref === t.ref) if (kt = !1, t.pendingProps = r = l, (e.lanes & i) !== 0) (e.flags & 131072) !== 0 && (kt = !0);
      else return t.lanes = e.lanes, un(e, t, i);
    }
    return Cs(e, t, n, r, i);
  }
  function aa(e, t, n) {
    var r = t.pendingProps, i = r.children, l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Le(pr, Tt), Tt |= n;
    else {
      if ((n & 1073741824) === 0) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Le(pr, Tt), Tt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, Le(pr, Tt), Tt |= r;
    }
    else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, Le(pr, Tt), Tt |= r;
    return pt(e, t, i, n), t.child;
  }
  function ca(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Cs(e, t, n, r, i) {
    var l = gt(n) ? An : ot.current;
    return l = rr(t, l), ar(t, i), n = ms(e, t, n, r, l, i), r = vs(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, un(e, t, i)) : (Ie && r && Zl(t), t.flags |= 1, pt(e, t, n, i), t.child);
  }
  function fa(e, t, n, r, i) {
    if (gt(n)) {
      var l = !0;
      ji(t);
    } else l = !1;
    if (ar(t, i), t.stateNode === null) Gi(e, t), bu(t, n, r), Ss(t, n, r, i), r = !0;
    else if (e === null) {
      var u = t.stateNode, f = t.memoizedProps;
      u.props = f;
      var h = u.context, k = n.contextType;
      typeof k == "object" && k !== null ? k = Lt(k) : (k = gt(n) ? An : ot.current, k = rr(t, k));
      var N = n.getDerivedStateFromProps, R = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      R || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== r || h !== k) && ea(t, u, r, k), Sn = !1;
      var T = t.memoizedState;
      u.state = T, Di(t, r, u, i), h = t.memoizedState, f !== r || T !== h || yt.current || Sn ? (typeof N == "function" && (xs(t, n, N, r), h = t.memoizedState), (f = Sn || Zu(t, n, f, r, T, h, k)) ? (R || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = h), u.props = r, u.state = h, u.context = k, r = f) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      u = t.stateNode, Nu(e, t), f = t.memoizedProps, k = t.type === t.elementType ? f : Bt(t.type, f), u.props = k, R = t.pendingProps, T = u.context, h = n.contextType, typeof h == "object" && h !== null ? h = Lt(h) : (h = gt(n) ? An : ot.current, h = rr(t, h));
      var H = n.getDerivedStateFromProps;
      (N = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== R || T !== h) && ea(t, u, r, h), Sn = !1, T = t.memoizedState, u.state = T, Di(t, r, u, i);
      var Q = t.memoizedState;
      f !== R || T !== Q || yt.current || Sn ? (typeof H == "function" && (xs(t, n, H, r), Q = t.memoizedState), (k = Sn || Zu(t, n, k, r, T, Q, h) || !1) ? (N || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, Q, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, Q, h)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = Q), u.props = r, u.state = Q, u.context = h, r = k) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Ts(e, t, n, r, l, i);
  }
  function Ts(e, t, n, r, i, l) {
    ca(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return i && vu(t, n, !1), un(e, t, l);
    r = t.stateNode, Hf.current = t;
    var f = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && u ? (t.child = or(t, e.child, null, l), t.child = or(t, null, f, l)) : pt(e, t, f, l), t.memoizedState = r.state, i && vu(t, n, !0), t.child;
  }
  function da(e) {
    var t = e.stateNode;
    t.pendingContext ? hu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hu(e, t.context, !1), as(e, t.containerInfo);
  }
  function pa(e, t, n, r, i) {
    return sr(), ns(i), t.flags |= 256, pt(e, t, n, r), t.child;
  }
  var Ns = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ms(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ha(e, t, n) {
    var r = t.pendingProps, i = $e.current, l = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), f ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Le($e, i & 1), e === null)
      return ts(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, u = { mode: "hidden", children: u }, (r & 1) === 0 && l !== null ? (l.childLanes = 0, l.pendingProps = u) : l = ll(u, r, 0, null), e = Wn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ms(n), t.memoizedState = Ns, e) : js(t, u));
    if (i = e.memoizedState, i !== null && (f = i.dehydrated, f !== null)) return Wf(e, t, u, r, f, i, n);
    if (l) {
      l = r.fallback, u = t.mode, i = e.child, f = i.sibling;
      var h = { mode: "hidden", children: r.children };
      return (u & 1) === 0 && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = h, t.deletions = null) : (r = jn(i, h), r.subtreeFlags = i.subtreeFlags & 14680064), f !== null ? l = jn(f, l) : (l = Wn(l, u, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, u = e.child.memoizedState, u = u === null ? Ms(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, l.memoizedState = u, l.childLanes = e.childLanes & ~n, t.memoizedState = Ns, r;
    }
    return l = e.child, e = l.sibling, r = jn(l, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function js(e, t) {
    return t = ll({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Qi(e, t, n, r) {
    return r !== null && ns(r), or(t, e.child, null, n), e = js(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Wf(e, t, n, r, i, l, u) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Es(Error(o(422))), Qi(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = ll({ mode: "visible", children: r.children }, i, 0, null), l = Wn(l, i, u, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, (t.mode & 1) !== 0 && or(t, e.child, null, u), t.child.memoizedState = Ms(u), t.memoizedState = Ns, l);
    if ((t.mode & 1) === 0) return Qi(e, t, u, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var f = r.dgst;
      return r = f, l = Error(o(419)), r = Es(l, r, void 0), Qi(e, t, u, r);
    }
    if (f = (u & e.childLanes) !== 0, kt || f) {
      if (r = rt, r !== null) {
        switch (u & -u) {
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
        i = (i & (r.suspendedLanes | u)) !== 0 ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, sn(e, i), Vt(r, e, i, -1));
      }
      return Ks(), r = Es(Error(o(421))), Qi(e, t, u, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = rd.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, Ct = gn(i.nextSibling), _t = t, Ie = !0, Dt = null, e !== null && (jt[Rt++] = rn, jt[Rt++] = ln, jt[Rt++] = Fn, rn = e.id, ln = e.overflow, Fn = t), t = js(t, r.children), t.flags |= 4096, t);
  }
  function ma(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ss(e.return, t, n);
  }
  function Rs(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i);
  }
  function va(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, l = r.tail;
    if (pt(e, t, r.children, n), r = $e.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ma(e, n, t);
        else if (e.tag === 19) ma(e, n, t);
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
    if (Le($e, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Bi(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Rs(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Bi(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Rs(t, !0, n, null, l);
        break;
      case "together":
        Rs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gi(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function un(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Un |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = jn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Kf(e, t, n) {
    switch (t.tag) {
      case 3:
        da(t), sr();
        break;
      case 5:
        Ru(t);
        break;
      case 1:
        gt(t.type) && ji(t);
        break;
      case 4:
        as(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Le(Fi, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Le($e, $e.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ha(e, t, n) : (Le($e, $e.current & 1), e = un(e, t, n), e !== null ? e.sibling : null);
        Le($e, $e.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return va(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Le($e, $e.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, aa(e, t, n);
    }
    return un(e, t, n);
  }
  var ya, Ls, ga, ka;
  ya = function(e, t) {
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
  }, Ls = function() {
  }, ga = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Dn(Xt.current);
      var l = null;
      switch (n) {
        case "input":
          i = te(e, i), r = te(e, r), l = [];
          break;
        case "select":
          i = U({}, i, { value: void 0 }), r = U({}, r, { value: void 0 }), l = [];
          break;
        case "textarea":
          i = Mt(e, i), r = Mt(e, r), l = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ti);
      }
      ye(n, r);
      var u;
      n = null;
      for (k in i) if (!r.hasOwnProperty(k) && i.hasOwnProperty(k) && i[k] != null) if (k === "style") {
        var f = i[k];
        for (u in f) f.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
      } else k !== "dangerouslySetInnerHTML" && k !== "children" && k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && k !== "autoFocus" && (d.hasOwnProperty(k) ? l || (l = []) : (l = l || []).push(k, null));
      for (k in r) {
        var h = r[k];
        if (f = i?.[k], r.hasOwnProperty(k) && h !== f && (h != null || f != null)) if (k === "style") if (f) {
          for (u in f) !f.hasOwnProperty(u) || h && h.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
          for (u in h) h.hasOwnProperty(u) && f[u] !== h[u] && (n || (n = {}), n[u] = h[u]);
        } else n || (l || (l = []), l.push(
          k,
          n
        )), n = h;
        else k === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, f = f ? f.__html : void 0, h != null && f !== h && (l = l || []).push(k, h)) : k === "children" ? typeof h != "string" && typeof h != "number" || (l = l || []).push(k, "" + h) : k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && (d.hasOwnProperty(k) ? (h != null && k === "onScroll" && ze("scroll", e), l || f === h || (l = [])) : (l = l || []).push(k, h));
      }
      n && (l = l || []).push("style", n);
      var k = l;
      (t.updateQueue = k) && (t.flags |= 4);
    }
  }, ka = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Yr(e, t) {
    if (!Ie) switch (e.tailMode) {
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
  function at(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Qf(e, t, n) {
    var r = t.pendingProps;
    switch (bl(t), t.tag) {
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
        return at(t), null;
      case 1:
        return gt(t.type) && Mi(), at(t), null;
      case 3:
        return r = t.stateNode, cr(), Ae(yt), Ae(ot), ds(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dt !== null && (Vs(Dt), Dt = null))), Ls(e, t), at(t), null;
      case 5:
        cs(t);
        var i = Dn(Hr.current);
        if (n = t.type, e !== null && t.stateNode != null) ga(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return at(t), null;
          }
          if (e = Dn(Xt.current), zi(t)) {
            r = t.stateNode, n = t.type;
            var l = t.memoizedProps;
            switch (r[Yt] = t, r[Dr] = l, e = (t.mode & 1) !== 0, n) {
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
                Ue(r, l), ze("invalid", r);
            }
            ye(n, l), i = null;
            for (var u in l) if (l.hasOwnProperty(u)) {
              var f = l[u];
              u === "children" ? typeof f == "string" ? r.textContent !== f && (l.suppressHydrationWarning !== !0 && Ci(r.textContent, f, e), i = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (l.suppressHydrationWarning !== !0 && Ci(
                r.textContent,
                f,
                e
              ), i = ["children", "" + f]) : d.hasOwnProperty(u) && f != null && u === "onScroll" && ze("scroll", r);
            }
            switch (n) {
              case "input":
                ce(r), Qe(r, l, !0);
                break;
              case "textarea":
                ce(r), Xe(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = Ti);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            u = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ht(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Yt] = t, e[Dr] = r, ya(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (u = ke(n, r), n) {
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
                  ve(e, r), i = te(e, r), ze("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = U({}, r, { value: void 0 }), ze("invalid", e);
                  break;
                case "textarea":
                  Ue(e, r), i = Mt(e, r), ze("invalid", e);
                  break;
                default:
                  i = r;
              }
              ye(n, i), f = i;
              for (l in f) if (f.hasOwnProperty(l)) {
                var h = f[l];
                l === "style" ? bt(e, h) : l === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, h != null && Zt(e, h)) : l === "children" ? typeof h == "string" ? (n !== "textarea" || h !== "") && Wt(e, h) : typeof h == "number" && Wt(e, "" + h) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (d.hasOwnProperty(l) ? h != null && l === "onScroll" && ze("scroll", e) : h != null && J(e, l, h, u));
              }
              switch (n) {
                case "input":
                  ce(e), Qe(e, r, !1);
                  break;
                case "textarea":
                  ce(e), Xe(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + B(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, l = r.value, l != null ? Ye(e, !!r.multiple, l, !1) : r.defaultValue != null && Ye(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Ti);
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
        return at(t), null;
      case 6:
        if (e && t.stateNode != null) ka(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (n = Dn(Hr.current), Dn(Xt.current), zi(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (l = r.nodeValue !== n) && (e = _t, e !== null)) switch (e.tag) {
              case 3:
                Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ci(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            l && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r;
        }
        return at(t), null;
      case 13:
        if (Ae($e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ie && Ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Su(), sr(), t.flags |= 98560, l = !1;
          else if (l = zi(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
              l[Yt] = t;
            } else sr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            at(t), l = !1;
          } else Dt !== null && (Vs(Dt), Dt = null), l = !0;
          if (!l) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || ($e.current & 1) !== 0 ? tt === 0 && (tt = 3) : Ks())), t.updateQueue !== null && (t.flags |= 4), at(t), null);
      case 4:
        return cr(), Ls(e, t), e === null && Ir(t.stateNode.containerInfo), at(t), null;
      case 10:
        return ls(t.type._context), at(t), null;
      case 17:
        return gt(t.type) && Mi(), at(t), null;
      case 19:
        if (Ae($e), l = t.memoizedState, l === null) return at(t), null;
        if (r = (t.flags & 128) !== 0, u = l.rendering, u === null) if (r) Yr(l, !1);
        else {
          if (tt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = Bi(e), u !== null) {
              for (t.flags |= 128, Yr(l, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, u = l.alternate, u === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, e = u.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Le($e, $e.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && qe() > hr && (t.flags |= 128, r = !0, Yr(l, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Bi(u), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yr(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !Ie) return at(t), null;
          } else 2 * qe() - l.renderingStartTime > hr && n !== 1073741824 && (t.flags |= 128, r = !0, Yr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (n = l.last, n !== null ? n.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = qe(), t.sibling = null, n = $e.current, Le($e, r ? n & 1 | 2 : n & 1), t) : (at(t), null);
      case 22:
      case 23:
        return Ws(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Tt & 1073741824) !== 0 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : at(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Gf(e, t) {
    switch (bl(t), t.tag) {
      case 1:
        return gt(t.type) && Mi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return cr(), Ae(yt), Ae(ot), ds(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return cs(t), null;
      case 13:
        if (Ae($e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          sr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ae($e), null;
      case 4:
        return cr(), null;
      case 10:
        return ls(t.type._context), null;
      case 22:
      case 23:
        return Ws(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Yi = !1, ct = !1, Yf = typeof WeakSet == "function" ? WeakSet : Set, K = null;
  function dr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ge(e, t, r);
    }
    else n.current = null;
  }
  function Ps(e, t, n) {
    try {
      n();
    } catch (r) {
      Ge(e, t, r);
    }
  }
  var wa = !1;
  function Xf(e, t) {
    if (Wl = hi, e = Zo(), Il(e)) {
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
          var u = 0, f = -1, h = -1, k = 0, N = 0, R = e, T = null;
          t: for (; ; ) {
            for (var H; R !== n || i !== 0 && R.nodeType !== 3 || (f = u + i), R !== l || r !== 0 && R.nodeType !== 3 || (h = u + r), R.nodeType === 3 && (u += R.nodeValue.length), (H = R.firstChild) !== null; )
              T = R, R = H;
            for (; ; ) {
              if (R === e) break t;
              if (T === n && ++k === i && (f = u), T === l && ++N === r && (h = u), (H = R.nextSibling) !== null) break;
              R = T, T = R.parentNode;
            }
            R = H;
          }
          n = f === -1 || h === -1 ? null : { start: f, end: h };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Kl = { focusedElem: e, selectionRange: n }, hi = !1, K = t; K !== null; ) if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, K = e;
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
              var Y = Q.memoizedProps, Je = Q.memoizedState, y = t.stateNode, m = y.getSnapshotBeforeUpdate(t.elementType === t.type ? Y : Bt(t.type, Y), Je);
              y.__reactInternalSnapshotBeforeUpdate = m;
            }
            break;
          case 3:
            var g = t.stateNode.containerInfo;
            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (A) {
        Ge(t, t.return, A);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, K = e;
        break;
      }
      K = t.return;
    }
    return Q = wa, wa = !1, Q;
  }
  function Xr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var l = i.destroy;
          i.destroy = void 0, l !== void 0 && Ps(t, n, l);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Xi(e, t) {
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
  function zs(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function xa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, xa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Dr], delete t[Xl], delete t[Lf], delete t[Pf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Sa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ea(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sa(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function As(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ti));
    else if (r !== 4 && (e = e.child, e !== null)) for (As(e, t, n), e = e.sibling; e !== null; ) As(e, t, n), e = e.sibling;
  }
  function Fs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Fs(e, t, n), e = e.sibling; e !== null; ) Fs(e, t, n), e = e.sibling;
  }
  var lt = null, Ut = !1;
  function _n(e, t, n) {
    for (n = n.child; n !== null; ) _a(e, t, n), n = n.sibling;
  }
  function _a(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(ui, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        ct || dr(n, t);
      case 6:
        var r = lt, i = Ut;
        lt = null, _n(e, t, n), lt = r, Ut = i, lt !== null && (Ut ? (e = lt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : lt.removeChild(n.stateNode));
        break;
      case 18:
        lt !== null && (Ut ? (e = lt, n = n.stateNode, e.nodeType === 8 ? Yl(e.parentNode, n) : e.nodeType === 1 && Yl(e, n), Nr(e)) : Yl(lt, n.stateNode));
        break;
      case 4:
        r = lt, i = Ut, lt = n.stateNode.containerInfo, Ut = !0, _n(e, t, n), lt = r, Ut = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ct && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var l = i, u = l.destroy;
            l = l.tag, u !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && Ps(n, t, u), i = i.next;
          } while (i !== r);
        }
        _n(e, t, n);
        break;
      case 1:
        if (!ct && (dr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          Ge(n, t, f);
        }
        _n(e, t, n);
        break;
      case 21:
        _n(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (ct = (r = ct) || n.memoizedState !== null, _n(e, t, n), ct = r) : _n(e, t, n);
        break;
      default:
        _n(e, t, n);
    }
  }
  function Ca(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Yf()), t.forEach(function(r) {
        var i = id.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function $t(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e, u = t, f = u;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 5:
              lt = f.stateNode, Ut = !1;
              break e;
            case 3:
              lt = f.stateNode.containerInfo, Ut = !0;
              break e;
            case 4:
              lt = f.stateNode.containerInfo, Ut = !0;
              break e;
          }
          f = f.return;
        }
        if (lt === null) throw Error(o(160));
        _a(l, u, i), lt = null, Ut = !1;
        var h = i.alternate;
        h !== null && (h.return = null), i.return = null;
      } catch (k) {
        Ge(i, t, k);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ta(t, e), t = t.sibling;
  }
  function Ta(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ($t(t, e), Jt(e), r & 4) {
          try {
            Xr(3, e, e.return), Xi(3, e);
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
        $t(t, e), Jt(e), r & 512 && n !== null && dr(n, n.return);
        break;
      case 5:
        if ($t(t, e), Jt(e), r & 512 && n !== null && dr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Wt(i, "");
          } catch (Y) {
            Ge(e, e.return, Y);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var l = e.memoizedProps, u = n !== null ? n.memoizedProps : l, f = e.type, h = e.updateQueue;
          if (e.updateQueue = null, h !== null) try {
            f === "input" && l.type === "radio" && l.name != null && ge(i, l), ke(f, u);
            var k = ke(f, l);
            for (u = 0; u < h.length; u += 2) {
              var N = h[u], R = h[u + 1];
              N === "style" ? bt(i, R) : N === "dangerouslySetInnerHTML" ? Zt(i, R) : N === "children" ? Wt(i, R) : J(i, N, R, k);
            }
            switch (f) {
              case "input":
                Ce(i, l);
                break;
              case "textarea":
                Te(i, l);
                break;
              case "select":
                var T = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var H = l.value;
                H != null ? Ye(i, !!l.multiple, H, !1) : T !== !!l.multiple && (l.defaultValue != null ? Ye(
                  i,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : Ye(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[Dr] = l;
          } catch (Y) {
            Ge(e, e.return, Y);
          }
        }
        break;
      case 6:
        if ($t(t, e), Jt(e), r & 4) {
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
        if ($t(t, e), Jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Nr(t.containerInfo);
        } catch (Y) {
          Ge(e, e.return, Y);
        }
        break;
      case 4:
        $t(t, e), Jt(e);
        break;
      case 13:
        $t(t, e), Jt(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (Ds = qe())), r & 4 && Ca(e);
        break;
      case 22:
        if (N = n !== null && n.memoizedState !== null, e.mode & 1 ? (ct = (k = ct) || N, $t(t, e), ct = k) : $t(t, e), Jt(e), r & 8192) {
          if (k = e.memoizedState !== null, (e.stateNode.isHidden = k) && !N && (e.mode & 1) !== 0) for (K = e, N = e.child; N !== null; ) {
            for (R = K = N; K !== null; ) {
              switch (T = K, H = T.child, T.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xr(4, T, T.return);
                  break;
                case 1:
                  dr(T, T.return);
                  var Q = T.stateNode;
                  if (typeof Q.componentWillUnmount == "function") {
                    r = T, n = T.return;
                    try {
                      t = r, Q.props = t.memoizedProps, Q.state = t.memoizedState, Q.componentWillUnmount();
                    } catch (Y) {
                      Ge(r, n, Y);
                    }
                  }
                  break;
                case 5:
                  dr(T, T.return);
                  break;
                case 22:
                  if (T.memoizedState !== null) {
                    ja(R);
                    continue;
                  }
              }
              H !== null ? (H.return = T, K = H) : ja(R);
            }
            N = N.sibling;
          }
          e: for (N = null, R = e; ; ) {
            if (R.tag === 5) {
              if (N === null) {
                N = R;
                try {
                  i = R.stateNode, k ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (f = R.stateNode, h = R.memoizedProps.style, u = h != null && h.hasOwnProperty("display") ? h.display : null, f.style.display = se("display", u));
                } catch (Y) {
                  Ge(e, e.return, Y);
                }
              }
            } else if (R.tag === 6) {
              if (N === null) try {
                R.stateNode.nodeValue = k ? "" : R.memoizedProps;
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
              N === R && (N = null), R = R.return;
            }
            N === R && (N = null), R.sibling.return = R.return, R = R.sibling;
          }
        }
        break;
      case 19:
        $t(t, e), Jt(e), r & 4 && Ca(e);
        break;
      case 21:
        break;
      default:
        $t(
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
            if (Sa(n)) {
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
            r.flags & 32 && (Wt(i, ""), r.flags &= -33);
            var l = Ea(e);
            Fs(e, l, i);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, f = Ea(e);
            As(e, f, u);
            break;
          default:
            throw Error(o(161));
        }
      } catch (h) {
        Ge(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function qf(e, t, n) {
    K = e, Na(e);
  }
  function Na(e, t, n) {
    for (var r = (e.mode & 1) !== 0; K !== null; ) {
      var i = K, l = i.child;
      if (i.tag === 22 && r) {
        var u = i.memoizedState !== null || Yi;
        if (!u) {
          var f = i.alternate, h = f !== null && f.memoizedState !== null || ct;
          f = Yi;
          var k = ct;
          if (Yi = u, (ct = h) && !k) for (K = i; K !== null; ) u = K, h = u.child, u.tag === 22 && u.memoizedState !== null ? Ra(i) : h !== null ? (h.return = u, K = h) : Ra(i);
          for (; l !== null; ) K = l, Na(l), l = l.sibling;
          K = i, Yi = f, ct = k;
        }
        Ma(e);
      } else (i.subtreeFlags & 8772) !== 0 && l !== null ? (l.return = i, K = l) : Ma(e);
    }
  }
  function Ma(e) {
    for (; K !== null; ) {
      var t = K;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ct || Xi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ct) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : Bt(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var l = t.updateQueue;
              l !== null && ju(t, l, r);
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
                ju(t, u, n);
              }
              break;
            case 5:
              var f = t.stateNode;
              if (n === null && t.flags & 4) {
                n = f;
                var h = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    h.autoFocus && n.focus();
                    break;
                  case "img":
                    h.src && (n.src = h.src);
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
                var k = t.alternate;
                if (k !== null) {
                  var N = k.memoizedState;
                  if (N !== null) {
                    var R = N.dehydrated;
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
          ct || t.flags & 512 && zs(t);
        } catch (T) {
          Ge(t, t.return, T);
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
  function ja(e) {
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
  function Ra(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Xi(4, t);
            } catch (h) {
              Ge(t, n, h);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (h) {
                Ge(t, i, h);
              }
            }
            var l = t.return;
            try {
              zs(t);
            } catch (h) {
              Ge(t, l, h);
            }
            break;
          case 5:
            var u = t.return;
            try {
              zs(t);
            } catch (h) {
              Ge(t, u, h);
            }
        }
      } catch (h) {
        Ge(t, t.return, h);
      }
      if (t === e) {
        K = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, K = f;
        break;
      }
      K = t.return;
    }
  }
  var Jf = Math.ceil, qi = ue.ReactCurrentDispatcher, Is = ue.ReactCurrentOwner, zt = ue.ReactCurrentBatchConfig, Se = 0, rt = null, be = null, st = 0, Tt = 0, pr = kn(0), tt = 0, qr = null, Un = 0, Ji = 0, Os = 0, Jr = null, wt = null, Ds = 0, hr = 1 / 0, an = null, Zi = !1, Bs = null, Cn = null, bi = !1, Tn = null, el = 0, Zr = 0, Us = null, tl = -1, nl = 0;
  function ht() {
    return (Se & 6) !== 0 ? qe() : tl !== -1 ? tl : tl = qe();
  }
  function Nn(e) {
    return (e.mode & 1) === 0 ? 1 : (Se & 2) !== 0 && st !== 0 ? st & -st : Af.transition !== null ? (nl === 0 && (nl = Eo()), nl) : (e = Ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Po(e.type)), e);
  }
  function Vt(e, t, n, r) {
    if (50 < Zr) throw Zr = 0, Us = null, Error(o(185));
    Sr(e, n, r), ((Se & 2) === 0 || e !== rt) && (e === rt && ((Se & 2) === 0 && (Ji |= n), tt === 4 && Mn(e, st)), xt(e, r), n === 1 && Se === 0 && (t.mode & 1) === 0 && (hr = qe() + 500, Ri && xn()));
  }
  function xt(e, t) {
    var n = e.callbackNode;
    zc(e, t);
    var r = fi(e, e === rt ? st : 0);
    if (r === 0) n !== null && wo(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && wo(n), t === 1) e.tag === 0 ? zf(Pa.bind(null, e)) : yu(Pa.bind(null, e)), jf(function() {
        (Se & 6) === 0 && xn();
      }), n = null;
      else {
        switch (_o(r)) {
          case 1:
            n = kl;
            break;
          case 4:
            n = xo;
            break;
          case 16:
            n = oi;
            break;
          case 536870912:
            n = So;
            break;
          default:
            n = oi;
        }
        n = Ua(n, La.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function La(e, t) {
    if (tl = -1, nl = 0, (Se & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (mr() && e.callbackNode !== n) return null;
    var r = fi(e, e === rt ? st : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = rl(e, r);
    else {
      t = r;
      var i = Se;
      Se |= 2;
      var l = Aa();
      (rt !== e || st !== t) && (an = null, hr = qe() + 500, Vn(e, t));
      do
        try {
          ed();
          break;
        } catch (f) {
          za(e, f);
        }
      while (!0);
      is(), qi.current = l, Se = i, be !== null ? t = 0 : (rt = null, st = 0, t = tt);
    }
    if (t !== 0) {
      if (t === 2 && (i = wl(e), i !== 0 && (r = i, t = $s(e, i))), t === 1) throw n = qr, Vn(e, 0), Mn(e, r), xt(e, qe()), n;
      if (t === 6) Mn(e, r);
      else {
        if (i = e.current.alternate, (r & 30) === 0 && !Zf(i) && (t = rl(e, r), t === 2 && (l = wl(e), l !== 0 && (r = l, t = $s(e, l))), t === 1)) throw n = qr, Vn(e, 0), Mn(e, r), xt(e, qe()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Hn(e, wt, an);
            break;
          case 3:
            if (Mn(e, r), (r & 130023424) === r && (t = Ds + 500 - qe(), 10 < t)) {
              if (fi(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                ht(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = Gl(Hn.bind(null, e, wt, an), t);
              break;
            }
            Hn(e, wt, an);
            break;
          case 4:
            if (Mn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var u = 31 - It(r);
              l = 1 << u, u = t[u], u > i && (i = u), r &= ~l;
            }
            if (r = i, r = qe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Jf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Gl(Hn.bind(null, e, wt, an), r);
              break;
            }
            Hn(e, wt, an);
            break;
          case 5:
            Hn(e, wt, an);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return xt(e, qe()), e.callbackNode === n ? La.bind(null, e) : null;
  }
  function $s(e, t) {
    var n = Jr;
    return e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256), e = rl(e, t), e !== 2 && (t = wt, wt = n, t !== null && Vs(t)), e;
  }
  function Vs(e) {
    wt === null ? wt = e : wt.push.apply(wt, e);
  }
  function Zf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r], l = i.getSnapshot;
          i = i.value;
          try {
            if (!Ot(l(), i)) return !1;
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
  function Mn(e, t) {
    for (t &= ~Os, t &= ~Ji, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - It(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Pa(e) {
    if ((Se & 6) !== 0) throw Error(o(327));
    mr();
    var t = fi(e, 0);
    if ((t & 1) === 0) return xt(e, qe()), null;
    var n = rl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = wl(e);
      r !== 0 && (t = r, n = $s(e, r));
    }
    if (n === 1) throw n = qr, Vn(e, 0), Mn(e, t), xt(e, qe()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Hn(e, wt, an), xt(e, qe()), null;
  }
  function Hs(e, t) {
    var n = Se;
    Se |= 1;
    try {
      return e(t);
    } finally {
      Se = n, Se === 0 && (hr = qe() + 500, Ri && xn());
    }
  }
  function $n(e) {
    Tn !== null && Tn.tag === 0 && (Se & 6) === 0 && mr();
    var t = Se;
    Se |= 1;
    var n = zt.transition, r = Ne;
    try {
      if (zt.transition = null, Ne = 1, e) return e();
    } finally {
      Ne = r, zt.transition = n, Se = t, (Se & 6) === 0 && xn();
    }
  }
  function Ws() {
    Tt = pr.current, Ae(pr);
  }
  function Vn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Mf(n)), be !== null) for (n = be.return; n !== null; ) {
      var r = n;
      switch (bl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Mi();
          break;
        case 3:
          cr(), Ae(yt), Ae(ot), ds();
          break;
        case 5:
          cs(r);
          break;
        case 4:
          cr();
          break;
        case 13:
          Ae($e);
          break;
        case 19:
          Ae($e);
          break;
        case 10:
          ls(r.type._context);
          break;
        case 22:
        case 23:
          Ws();
      }
      n = n.return;
    }
    if (rt = e, be = e = jn(e.current, null), st = Tt = t, tt = 0, qr = null, Os = Ji = Un = 0, wt = Jr = null, On !== null) {
      for (t = 0; t < On.length; t++) if (n = On[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, l = n.pending;
        if (l !== null) {
          var u = l.next;
          l.next = i, r.next = u;
        }
        n.pending = r;
      }
      On = null;
    }
    return e;
  }
  function za(e, t) {
    do {
      var n = be;
      try {
        if (is(), Ui.current = Wi, $i) {
          for (var r = Ve.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          $i = !1;
        }
        if (Bn = 0, nt = et = Ve = null, Wr = !1, Kr = 0, Is.current = null, n === null || n.return === null) {
          tt = 1, qr = t, be = null;
          break;
        }
        e: {
          var l = e, u = n.return, f = n, h = t;
          if (t = st, f.flags |= 32768, h !== null && typeof h == "object" && typeof h.then == "function") {
            var k = h, N = f, R = N.tag;
            if ((N.mode & 1) === 0 && (R === 0 || R === 11 || R === 15)) {
              var T = N.alternate;
              T ? (N.updateQueue = T.updateQueue, N.memoizedState = T.memoizedState, N.lanes = T.lanes) : (N.updateQueue = null, N.memoizedState = null);
            }
            var H = ia(u);
            if (H !== null) {
              H.flags &= -257, la(H, u, f, l, t), H.mode & 1 && ra(l, k, t), t = H, h = k;
              var Q = t.updateQueue;
              if (Q === null) {
                var Y = /* @__PURE__ */ new Set();
                Y.add(h), t.updateQueue = Y;
              } else Q.add(h);
              break e;
            } else {
              if ((t & 1) === 0) {
                ra(l, k, t), Ks();
                break e;
              }
              h = Error(o(426));
            }
          } else if (Ie && f.mode & 1) {
            var Je = ia(u);
            if (Je !== null) {
              (Je.flags & 65536) === 0 && (Je.flags |= 256), la(Je, u, f, l, t), ns(fr(h, f));
              break e;
            }
          }
          l = h = fr(h, f), tt !== 4 && (tt = 2), Jr === null ? Jr = [l] : Jr.push(l), l = u;
          do {
            switch (l.tag) {
              case 3:
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var y = ta(l, h, t);
                Mu(l, y);
                break e;
              case 1:
                f = h;
                var m = l.type, g = l.stateNode;
                if ((l.flags & 128) === 0 && (typeof m.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Cn === null || !Cn.has(g)))) {
                  l.flags |= 65536, t &= -t, l.lanes |= t;
                  var A = na(l, f, t);
                  Mu(l, A);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        Ia(n);
      } catch (q) {
        t = q, be === n && n !== null && (be = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Aa() {
    var e = qi.current;
    return qi.current = Wi, e === null ? Wi : e;
  }
  function Ks() {
    (tt === 0 || tt === 3 || tt === 2) && (tt = 4), rt === null || (Un & 268435455) === 0 && (Ji & 268435455) === 0 || Mn(rt, st);
  }
  function rl(e, t) {
    var n = Se;
    Se |= 2;
    var r = Aa();
    (rt !== e || st !== t) && (an = null, Vn(e, t));
    do
      try {
        bf();
        break;
      } catch (i) {
        za(e, i);
      }
    while (!0);
    if (is(), Se = n, qi.current = r, be !== null) throw Error(o(261));
    return rt = null, st = 0, tt;
  }
  function bf() {
    for (; be !== null; ) Fa(be);
  }
  function ed() {
    for (; be !== null && !_c(); ) Fa(be);
  }
  function Fa(e) {
    var t = Ba(e.alternate, e, Tt);
    e.memoizedProps = e.pendingProps, t === null ? Ia(e) : be = t, Is.current = null;
  }
  function Ia(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Qf(n, t, Tt), n !== null) {
          be = n;
          return;
        }
      } else {
        if (n = Gf(n, t), n !== null) {
          n.flags &= 32767, be = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          tt = 6, be = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    tt === 0 && (tt = 5);
  }
  function Hn(e, t, n) {
    var r = Ne, i = zt.transition;
    try {
      zt.transition = null, Ne = 1, td(e, t, n, r);
    } finally {
      zt.transition = i, Ne = r;
    }
    return null;
  }
  function td(e, t, n, r) {
    do
      mr();
    while (Tn !== null);
    if ((Se & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Ac(e, l), e === rt && (be = rt = null, st = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || bi || (bi = !0, Ua(oi, function() {
      return mr(), null;
    })), l = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || l) {
      l = zt.transition, zt.transition = null;
      var u = Ne;
      Ne = 1;
      var f = Se;
      Se |= 4, Is.current = null, Xf(e, n), Ta(n, e), xf(Kl), hi = !!Wl, Kl = Wl = null, e.current = n, qf(n), Cc(), Se = f, Ne = u, zt.transition = l;
    } else e.current = n;
    if (bi && (bi = !1, Tn = e, el = i), l = e.pendingLanes, l === 0 && (Cn = null), Mc(n.stateNode), xt(e, qe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Zi) throw Zi = !1, e = Bs, Bs = null, e;
    return (el & 1) !== 0 && e.tag !== 0 && mr(), l = e.pendingLanes, (l & 1) !== 0 ? e === Us ? Zr++ : (Zr = 0, Us = e) : Zr = 0, xn(), null;
  }
  function mr() {
    if (Tn !== null) {
      var e = _o(el), t = zt.transition, n = Ne;
      try {
        if (zt.transition = null, Ne = 16 > e ? 16 : e, Tn === null) var r = !1;
        else {
          if (e = Tn, Tn = null, el = 0, (Se & 6) !== 0) throw Error(o(331));
          var i = Se;
          for (Se |= 4, K = e.current; K !== null; ) {
            var l = K, u = l.child;
            if ((K.flags & 16) !== 0) {
              var f = l.deletions;
              if (f !== null) {
                for (var h = 0; h < f.length; h++) {
                  var k = f[h];
                  for (K = k; K !== null; ) {
                    var N = K;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xr(8, N, l);
                    }
                    var R = N.child;
                    if (R !== null) R.return = N, K = R;
                    else for (; K !== null; ) {
                      N = K;
                      var T = N.sibling, H = N.return;
                      if (xa(N), N === k) {
                        K = null;
                        break;
                      }
                      if (T !== null) {
                        T.return = H, K = T;
                        break;
                      }
                      K = H;
                    }
                  }
                }
                var Q = l.alternate;
                if (Q !== null) {
                  var Y = Q.child;
                  if (Y !== null) {
                    Q.child = null;
                    do {
                      var Je = Y.sibling;
                      Y.sibling = null, Y = Je;
                    } while (Y !== null);
                  }
                }
                K = l;
              }
            }
            if ((l.subtreeFlags & 2064) !== 0 && u !== null) u.return = l, K = u;
            else e: for (; K !== null; ) {
              if (l = K, (l.flags & 2048) !== 0) switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Xr(9, l, l.return);
              }
              var y = l.sibling;
              if (y !== null) {
                y.return = l.return, K = y;
                break e;
              }
              K = l.return;
            }
          }
          var m = e.current;
          for (K = m; K !== null; ) {
            u = K;
            var g = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && g !== null) g.return = u, K = g;
            else e: for (u = m; K !== null; ) {
              if (f = K, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xi(9, f);
                }
              } catch (q) {
                Ge(f, f.return, q);
              }
              if (f === u) {
                K = null;
                break e;
              }
              var A = f.sibling;
              if (A !== null) {
                A.return = f.return, K = A;
                break e;
              }
              K = f.return;
            }
          }
          if (Se = i, xn(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(ui, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ne = n, zt.transition = t;
      }
    }
    return !1;
  }
  function Oa(e, t, n) {
    t = fr(n, t), t = ta(e, t, 1), e = En(e, t, 1), t = ht(), e !== null && (Sr(e, 1, t), xt(e, t));
  }
  function Ge(e, t, n) {
    if (e.tag === 3) Oa(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Oa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Cn === null || !Cn.has(r))) {
          e = fr(n, e), e = na(t, e, 1), t = En(t, e, 1), e = ht(), t !== null && (Sr(t, 1, e), xt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function nd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ht(), e.pingedLanes |= e.suspendedLanes & n, rt === e && (st & n) === n && (tt === 4 || tt === 3 && (st & 130023424) === st && 500 > qe() - Ds ? Vn(e, 0) : Os |= n), xt(e, t);
  }
  function Da(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ci, ci <<= 1, (ci & 130023424) === 0 && (ci = 4194304)));
    var n = ht();
    e = sn(e, t), e !== null && (Sr(e, t, n), xt(e, n));
  }
  function rd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Da(e, n);
  }
  function id(e, t) {
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
    r !== null && r.delete(t), Da(e, n);
  }
  var Ba;
  Ba = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || yt.current) kt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return kt = !1, Kf(e, t, n);
      kt = (e.flags & 131072) !== 0;
    }
    else kt = !1, Ie && (t.flags & 1048576) !== 0 && gu(t, Pi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Gi(e, t), e = t.pendingProps;
        var i = rr(t, ot.current);
        ar(t, n), i = ms(null, t, r, e, i, n);
        var l = vs();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, gt(r) ? (l = !0, ji(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, us(t), i.updater = Ki, t.stateNode = i, i._reactInternals = t, Ss(t, r, e, n), t = Ts(null, t, r, !0, l, n)) : (t.tag = 0, Ie && l && Zl(t), pt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Gi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = sd(r), e = Bt(r, e), i) {
            case 0:
              t = Cs(null, t, r, e, n);
              break e;
            case 1:
              t = fa(null, t, r, e, n);
              break e;
            case 11:
              t = sa(null, t, r, e, n);
              break e;
            case 14:
              t = oa(null, t, r, Bt(r.type, e), n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Cs(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), fa(e, t, r, i, n);
      case 3:
        e: {
          if (da(t), e === null) throw Error(o(387));
          r = t.pendingProps, l = t.memoizedState, i = l.element, Nu(e, t), Di(t, r, null, n);
          var u = t.memoizedState;
          if (r = u.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            i = fr(Error(o(423)), t), t = pa(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = fr(Error(o(424)), t), t = pa(e, t, r, n, i);
            break e;
          } else for (Ct = gn(t.stateNode.containerInfo.firstChild), _t = t, Ie = !0, Dt = null, n = Cu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (sr(), r === i) {
              t = un(e, t, n);
              break e;
            }
            pt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ru(t), e === null && ts(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, u = i.children, Ql(r, i) ? u = null : l !== null && Ql(r, l) && (t.flags |= 32), ca(e, t), pt(e, t, u, n), t.child;
      case 6:
        return e === null && ts(t), null;
      case 13:
        return ha(e, t, n);
      case 4:
        return as(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = or(t, null, r, n) : pt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), sa(e, t, r, i, n);
      case 7:
        return pt(e, t, t.pendingProps, n), t.child;
      case 8:
        return pt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return pt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, u = i.value, Le(Fi, r._currentValue), r._currentValue = u, l !== null) if (Ot(l.value, u)) {
            if (l.children === i.children && !yt.current) {
              t = un(e, t, n);
              break e;
            }
          } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
            var f = l.dependencies;
            if (f !== null) {
              u = l.child;
              for (var h = f.firstContext; h !== null; ) {
                if (h.context === r) {
                  if (l.tag === 1) {
                    h = on(-1, n & -n), h.tag = 2;
                    var k = l.updateQueue;
                    if (k !== null) {
                      k = k.shared;
                      var N = k.pending;
                      N === null ? h.next = h : (h.next = N.next, N.next = h), k.pending = h;
                    }
                  }
                  l.lanes |= n, h = l.alternate, h !== null && (h.lanes |= n), ss(
                    l.return,
                    n,
                    t
                  ), f.lanes |= n;
                  break;
                }
                h = h.next;
              }
            } else if (l.tag === 10) u = l.type === t.type ? null : l.child;
            else if (l.tag === 18) {
              if (u = l.return, u === null) throw Error(o(341));
              u.lanes |= n, f = u.alternate, f !== null && (f.lanes |= n), ss(u, n, t), u = l.sibling;
            } else u = l.child;
            if (u !== null) u.return = l;
            else for (u = l; u !== null; ) {
              if (u === t) {
                u = null;
                break;
              }
              if (l = u.sibling, l !== null) {
                l.return = u.return, u = l;
                break;
              }
              u = u.return;
            }
            l = u;
          }
          pt(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, ar(t, n), i = Lt(i), r = r(i), t.flags |= 1, pt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Bt(r, t.pendingProps), i = Bt(r.type, i), oa(e, t, r, i, n);
      case 15:
        return ua(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Gi(e, t), t.tag = 1, gt(r) ? (e = !0, ji(t)) : e = !1, ar(t, n), bu(t, r, i), Ss(t, r, i, n), Ts(null, t, r, !0, e, n);
      case 19:
        return va(e, t, n);
      case 22:
        return aa(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Ua(e, t) {
    return ko(e, t);
  }
  function ld(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function At(e, t, n, r) {
    return new ld(e, t, n, r);
  }
  function Qs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function sd(e) {
    if (typeof e == "function") return Qs(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Oe) return 11;
      if (e === Ke) return 14;
    }
    return 2;
  }
  function jn(e, t) {
    var n = e.alternate;
    return n === null ? (n = At(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function il(e, t, n, r, i, l) {
    var u = 2;
    if (r = e, typeof e == "function") Qs(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case ne:
        return Wn(n.children, i, l, t);
      case pe:
        u = 8, i |= 8;
        break;
      case Me:
        return e = At(12, n, t, i | 2), e.elementType = Me, e.lanes = l, e;
      case je:
        return e = At(13, n, t, i), e.elementType = je, e.lanes = l, e;
      case De:
        return e = At(19, n, t, i), e.elementType = De, e.lanes = l, e;
      case Ee:
        return ll(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case xe:
            u = 10;
            break e;
          case We:
            u = 9;
            break e;
          case Oe:
            u = 11;
            break e;
          case Ke:
            u = 14;
            break e;
          case Re:
            u = 16, r = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = At(u, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t;
  }
  function Wn(e, t, n, r) {
    return e = At(7, e, r, t), e.lanes = n, e;
  }
  function ll(e, t, n, r) {
    return e = At(22, e, r, t), e.elementType = Ee, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Gs(e, t, n) {
    return e = At(6, e, null, t), e.lanes = n, e;
  }
  function Ys(e, t, n) {
    return t = At(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function od(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xl(0), this.expirationTimes = xl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Xs(e, t, n, r, i, l, u, f, h) {
    return e = new od(e, t, n, f, h), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = At(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, us(l), e;
  }
  function ud(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: V, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function $a(e) {
    if (!e) return wn;
    e = e._reactInternals;
    e: {
      if (Pn(e) !== e || e.tag !== 1) throw Error(o(170));
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
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (gt(n)) return mu(e, n, t);
    }
    return t;
  }
  function Va(e, t, n, r, i, l, u, f, h) {
    return e = Xs(n, r, !0, e, i, l, u, f, h), e.context = $a(null), n = e.current, r = ht(), i = Nn(n), l = on(r, i), l.callback = t ?? null, En(n, l, i), e.current.lanes = i, Sr(e, i, r), xt(e, r), e;
  }
  function sl(e, t, n, r) {
    var i = t.current, l = ht(), u = Nn(i);
    return n = $a(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(l, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = En(i, t, u), e !== null && (Vt(e, i, u, l), Oi(e, i, u)), u;
  }
  function ol(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Ha(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function qs(e, t) {
    Ha(e, t), (e = e.alternate) && Ha(e, t);
  }
  function ad() {
    return null;
  }
  var Wa = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Js(e) {
    this._internalRoot = e;
  }
  ul.prototype.render = Js.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    sl(e, t, null, null);
  }, ul.prototype.unmount = Js.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      $n(function() {
        sl(null, e, null, null);
      }), t[tn] = null;
    }
  };
  function ul(e) {
    this._internalRoot = e;
  }
  ul.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = No();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < mn.length && t !== 0 && t < mn[n].priority; n++) ;
      mn.splice(n, 0, e), n === 0 && Ro(e);
    }
  };
  function Zs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function al(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ka() {
  }
  function cd(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var l = r;
        r = function() {
          var k = ol(u);
          l.call(k);
        };
      }
      var u = Va(t, r, e, 0, null, !1, !1, "", Ka);
      return e._reactRootContainer = u, e[tn] = u.current, Ir(e.nodeType === 8 ? e.parentNode : e), $n(), u;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var k = ol(h);
        f.call(k);
      };
    }
    var h = Xs(e, 0, !1, null, null, !1, !1, "", Ka);
    return e._reactRootContainer = h, e[tn] = h.current, Ir(e.nodeType === 8 ? e.parentNode : e), $n(function() {
      sl(t, h, n, r);
    }), h;
  }
  function cl(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
      var u = l;
      if (typeof i == "function") {
        var f = i;
        i = function() {
          var h = ol(u);
          f.call(h);
        };
      }
      sl(t, u, e, i);
    } else u = cd(n, t, e, i, r);
    return ol(u);
  }
  Co = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = xr(t.pendingLanes);
          n !== 0 && (Sl(t, n | 1), xt(t, qe()), (Se & 6) === 0 && (hr = qe() + 500, xn()));
        }
        break;
      case 13:
        $n(function() {
          var r = sn(e, 1);
          if (r !== null) {
            var i = ht();
            Vt(r, e, 1, i);
          }
        }), qs(e, 1);
    }
  }, El = function(e) {
    if (e.tag === 13) {
      var t = sn(e, 134217728);
      if (t !== null) {
        var n = ht();
        Vt(t, e, 134217728, n);
      }
      qs(e, 134217728);
    }
  }, To = function(e) {
    if (e.tag === 13) {
      var t = Nn(e), n = sn(e, t);
      if (n !== null) {
        var r = ht();
        Vt(n, e, t, r);
      }
      qs(e, t);
    }
  }, No = function() {
    return Ne;
  }, Mo = function(e, t) {
    var n = Ne;
    try {
      return Ne = e, t();
    } finally {
      Ne = n;
    }
  }, en = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ce(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Ni(r);
              if (!i) throw Error(o(90));
              ee(r), Ce(r, i);
            }
          }
        }
        break;
      case "textarea":
        Te(e, n);
        break;
      case "select":
        t = n.value, t != null && Ye(e, !!n.multiple, t, !1);
    }
  }, fo = Hs, po = $n;
  var fd = { usingClientEntryPoint: !1, Events: [Br, tr, Ni, Qn, Gn, Hs] }, br = { findFiberByHostInstance: zn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, dd = { bundleType: br.bundleType, version: br.version, rendererPackageName: br.rendererPackageName, rendererConfig: br.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ue.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = yo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: br.findFiberByHostInstance || ad, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fl.isDisabled && fl.supportsFiber) try {
      ui = fl.inject(dd), Gt = fl;
    } catch {
    }
  }
  return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fd, St.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zs(t)) throw Error(o(200));
    return ud(e, t, null, n);
  }, St.createRoot = function(e, t) {
    if (!Zs(e)) throw Error(o(299));
    var n = !1, r = "", i = Wa;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Xs(e, 1, !1, null, null, n, !1, r, i), e[tn] = t.current, Ir(e.nodeType === 8 ? e.parentNode : e), new Js(t);
  }, St.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = yo(t), e = e === null ? null : e.stateNode, e;
  }, St.flushSync = function(e) {
    return $n(e);
  }, St.hydrate = function(e, t, n) {
    if (!al(t)) throw Error(o(200));
    return cl(null, e, t, !0, n);
  }, St.hydrateRoot = function(e, t, n) {
    if (!Zs(e)) throw Error(o(405));
    var r = n != null && n.hydratedSources || null, i = !1, l = "", u = Wa;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = Va(t, null, e, 1, n ?? null, i, !1, l, u), e[tn] = t.current, Ir(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new ul(t);
  }, St.render = function(e, t, n) {
    if (!al(t)) throw Error(o(200));
    return cl(null, e, t, !1, n);
  }, St.unmountComponentAtNode = function(e) {
    if (!al(e)) throw Error(o(40));
    return e._reactRootContainer ? ($n(function() {
      cl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[tn] = null;
      });
    }), !0) : !1;
  }, St.unstable_batchedUpdates = Hs, St.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!al(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return cl(e, t, n, !1, r);
  }, St.version = "18.3.1-next-f1338f8080-20240426", St;
}
var ba;
function xd() {
  if (ba) return to.exports;
  ba = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (s) {
        console.error(s);
      }
  }
  return a(), to.exports = wd(), to.exports;
}
var ec;
function Sd() {
  if (ec) return dl;
  ec = 1;
  var a = xd();
  return dl.createRoot = a.createRoot, dl.hydrateRoot = a.hydrateRoot, dl;
}
var Ed = Sd();
const _d = (() => {
  const a = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], s = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), p = { pentatonic: 15, "3nps": 17 }, w = 7, x = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], _ = ["e", "B", "G", "D", "A", "E"], M = ["ohut e", "B", "G", "D", "A", "paksu E"], F = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], E = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], I = {
    mp: {
      name: "mollipentatoninen",
      base: F,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: F,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: F,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: F,
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
      base: E,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: E,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: E,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: E,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, G = 26, O = 72, j = 30, L = 54, $ = 34, W = 11, J = (G + O) / 2, ue = j + (c.length - 1) * $ + 30, Z = (z) => O + z * L, V = (z) => z === 0 ? J : Z(z) - L / 2, ne = (z) => j + z * $;
  function pe(z, B, P) {
    const X = s.indexOf(a[z][0]) + Number(P.slice(-1)) - 1, ce = X % s.length, ee = o[ce] + 12 * Math.floor(X / s.length), re = z + B - ee;
    return s[ce] + (re < 0 ? "♭" : "♯").repeat(Math.abs(re));
  }
  function Me(z) {
    return [...z.base, ...z.add].sort((B, P) => B[0] - P[0]);
  }
  function xe(z, B, P) {
    const X = B + (P ? 1 : 0), ce = x[X % x.length], ee = Math.min(...ce.map(([Ce]) => Ce)), re = Math.max(...ce.map(([, Ce]) => Ce));
    let ge = (z - d % 12 + 12) % 12 - (P ? 8 : 5) + 12 * Math.floor(X / x.length);
    return ee + ge < 0 && (ge += 12), re + ge > p.pentatonic && (ge -= 12), {
      strings: ce.map((Ce) => Ce.map((Qe) => Qe + ge)),
      start: ee + ge,
      end: re + ge
    };
  }
  function We(z, B, P) {
    const X = P[B], ce = (z + X - d % 12 + 12) % 12, ee = d + ce - X, re = c.map((te, ve) => {
      const ge = B + (c.length - 1 - ve) * 3;
      return [ge, ge + 1, ge + 2].map((Ce) => {
        const Qe = Math.floor(Ce / P.length), Fe = P[Ce % P.length];
        return ee + Fe + 12 * Qe - te;
      });
    });
    return {
      strings: re,
      start: Math.min(...re.map((te) => te[0])),
      end: Math.max(...re.map((te) => te.at(-1)))
    };
  }
  function Oe(z, B) {
    const P = [], X = Math.ceil(-z.end / 12) * 12;
    for (let ee = X; z.start + ee <= B; ee += 12) {
      const re = z.strings.map((ve) => ve.map((ge) => ge + ee).filter((ge) => ge >= 0 && ge <= B)), te = re.flat();
      P.push({
        strings: re,
        start: Math.min(...te),
        end: Math.max(...te),
        partial: z.start + ee < 0 || z.end + ee > B
      });
    }
    const ce = P.filter((ee) => !ee.partial);
    return ce.length ? ce : P;
  }
  function je(z) {
    return Me(z).length === w;
  }
  function De(z, B, P) {
    const X = je(B);
    z.querySelector('[value="3nps"]').disabled = !X, z.value = X ? P ?? "3nps" : "pentatonic";
  }
  function Ke(z, B, P, X, ce) {
    const ee = Me(B).map(([re]) => re);
    return X.map((re) => {
      const te = re - 1, ve = P === "3nps" ? We(z, te, ee) : xe(z, te, B.base === E), ge = ce === void 0 ? [ve] : Oe(ve, ce);
      return { number: re, positions: ge };
    });
  }
  function Re(z, B) {
    const P = z.getBoundingClientRect(), X = z.querySelectorAll(B);
    let ce = 1 / 0;
    X.forEach((ee) => {
      const re = ee.getBoundingClientRect();
      let te = 0;
      re.left < P.left ? te = re.left - P.left - 8 : re.right > P.right && (te = re.right - P.right + 8), Math.abs(te) < Math.abs(ce) && (ce = te);
    }), Number.isFinite(ce) && (z.scrollLeft += ce);
  }
  function Ee(z, B = !1) {
    const P = z === "3nps" ? w : x.length;
    return Array.from({ length: P }, (X, ce) => {
      const ee = ce + 1;
      return '<label class="box-toggle" data-box="' + ee + '"><input type="checkbox" value="' + ee + '"' + (B && ce === 0 ? " checked" : "") + "> Boksi " + ee + "</label>";
    }).join("");
  }
  function D(z, B) {
    const P = Me(B), X = new Map(P.map(([ee, re]) => [ee, pe(z, ee, re)])), ce = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return P.flatMap(([ee, re]) => ce.flatMap(({ suffix: te, base: ve }) => {
      const ge = ve.map(([Ce]) => X.get((ee + Ce) % 12));
      return ge.every(Boolean) ? {
        root: (z + ee) % 12,
        degree: Number(String(re).replace(/\D/g, "")),
        name: ge[0] + te,
        notes: ge,
        base: ve,
        add: []
      } : [];
    }));
  }
  function b(z, B) {
    const P = z.base.map(([ee]) => (z.root + ee) % 12), X = c.map((ee) => {
      const re = [];
      for (let te = 0; te <= B; te++) {
        const ve = (ee + te) % 12;
        P.includes(ve) && re.push({ fret: te, pitch: ve });
      }
      return re;
    }), ce = [];
    for (let ee = 0; ee <= X.length - 3; ee++)
      for (const re of X[ee])
        for (const te of X[ee + 1])
          if (re.pitch !== te.pitch)
            for (const ve of X[ee + 2]) {
              if (ve.pitch === re.pitch || ve.pitch === te.pitch) continue;
              const ge = [re.fret, te.fret, ve.fret], Ce = Math.min(...ge), Qe = Math.max(...ge);
              if (Qe - Ce > 3) continue;
              const Fe = Array(c.length).fill(null);
              Fe.splice(ee, 3, ...ge), ce.push({ strings: Fe, low: Ce, high: Qe });
            }
    return ce.sort((ee, re) => ee.high - re.high || ee.low - re.low);
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
  function C(z, B) {
    const P = U[z + ":" + B];
    if (P) return { frets: P, barre: null };
    let X = null;
    return v.forEach(({ string: ce, openPC: ee, shapes: re }) => {
      const te = re[B];
      if (!te) return;
      let ve = (z - ee + 12) % 12;
      if (ve + Math.min(...te.filter((Qe) => Qe !== null)) < 0 && (ve += 12), X && X.fret <= ve) return;
      const ge = te.map((Qe) => Qe === null ? null : ve + Qe), Ce = ve > 0 && te.at(-1) === 0 ? { fret: ve, from: ce, to: te.length - 1 } : null;
      X = { fret: ve, frets: ge, barre: Ce };
    }), X && { frets: X.frets, barre: X.barre };
  }
  function ae(z, { frets: B, barre: P }, X) {
    const ge = [...c].reverse(), Ce = B.filter((Te) => Te > 0), Fe = !Ce.length || Math.max(...Ce) <= 4 && (B.includes(0) || Math.min(...Ce) === 1) ? 1 : Math.min(...Ce), Be = (Te) => 24 + Te * 14, Ye = (Te) => 30 + (Te - Fe) * 18 + 18 / 2, Mt = 102;
    let Ue = '<svg class="chord-svg" viewBox="0 0 108 ' + (Mt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + X + "-ote paksusta kielestä ohueen: " + B.map((Te) => Te ?? "x").join(" ") + '">';
    for (let Te = 0; Te <= 4; Te++)
      Ue += '<line class="' + (Te === 0 && Fe === 1 ? "nut" : "fret") + '" x1="' + Be(0) + '" y1="' + (30 + Te * 18) + '" x2="' + Be(5) + '" y2="' + (30 + Te * 18) + '"/>';
    return B.forEach((Te, Xe) => {
      Ue += '<line class="string" x1="' + Be(Xe) + '" y1="30" x2="' + Be(Xe) + '" y2="' + Mt + '"/>';
    }), Fe > 1 && (Ue += '<text class="fret-label" x="15" y="' + (Ye(Fe) + 4) + '">' + Fe + "</text>"), P && (Ue += '<rect class="barre" x="' + (Be(P.from) - 6.5) + '" y="' + (Ye(P.fret) - 6.5) + '" width="' + ((P.to - P.from) * 14 + 13) + '" height="13" rx="6.5"/>'), B.forEach((Te, Xe) => {
      if (Te === null) {
        Ue += '<text class="marker" x="' + Be(Xe) + '" y="22">×</text>';
        return;
      }
      const Ht = (ge[Xe] + Te) % 12 === z;
      if (Te === 0) {
        Ue += '<circle class="open' + (Ht ? " root-open" : "") + '" cx="' + Be(Xe) + '" cy="18" r="4.5"/>';
        return;
      }
      P && Te === P.fret && Xe >= P.from && Xe <= P.to && !Ht || (Ue += '<circle class="' + (Ht ? "root" : "tone") + '" cx="' + Be(Xe) + '" cy="' + Ye(Te) + '" r="6.5"/>');
    }), Ue + "</svg>";
  }
  function de(z, B) {
    const P = new URLSearchParams(location.search), X = a.indexOf(P.get("toonikka")), ce = P.get("asteikko");
    return {
      rootPC: X === -1 ? z : X,
      scaleId: Object.hasOwn(I, ce) ? ce : B
    };
  }
  function he(z, B, P) {
    return z + "?" + new URLSearchParams({ toonikka: a[B], asteikko: P });
  }
  function me(z, B, P, {
    boxes: X = [],
    onlyBoxNotes: ce = !1,
    automatic: ee = !0,
    focusDegree: re = "",
    grip: te = null,
    barre: ve = null,
    label: ge = a[z] + " " + B.name,
    notes: Ce = null,
    targets: Qe = !1,
    muteFret: Fe = null
  } = {}) {
    const Be = Z(P), Ye = Be + 48, Mt = Ye + 28, Ue = j - 14, Te = ne(c.length - 1) + 14, Xe = Te - Ue, Ht = ee ? 680 : Math.ceil(Mt * 0.64), Ln = X.flatMap((oe) => oe.positions), Ft = {};
    B.base.forEach(([oe, ye]) => Ft[(z + oe) % 12] = { deg: ye, added: !1 }), B.add.forEach(([oe, ye]) => Ft[(z + oe) % 12] = { deg: ye, added: !0 });
    const Zt = c.map((oe, ye) => !!te && te[ye] === null), Wt = !!te && Fe !== null, Kt = M.filter((oe, ye) => Zt[ye]).reverse(), yr = ge + ". " + P + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Kt.length ? " Soittamatta jäävät kielet: " + Kt.join(", ") + "." : "");
    let se = '<svg viewBox="0 0 ' + Mt + " " + ue + '" style="min-width:' + Ht + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Qe ? "group" : "img") + '" aria-label="' + yr + '">';
    se += '<rect x="' + G + '" y="' + Ue + '" width="' + (O - G) + '" height="' + Xe + '" rx="6" fill="#2a2338"/>', se += '<rect x="' + O + '" y="' + Ue + '" width="' + (Be - O) + '" height="' + Xe + '" fill="#231a12"/>', se += '<rect x="' + Be + '" y="' + Ue + '" width="' + (Mt - Be - 4) + '" height="' + Xe + '" rx="8" fill="#32251e"/>';
    for (let oe = 1; oe <= P; oe++)
      se += '<line x1="' + Z(oe) + '" y1="' + Ue + '" x2="' + Z(oe) + '" y2="' + Te + '" stroke="#6f5b47" stroke-width="2"/>';
    se += '<rect x="' + (O - 3) + '" y="' + Ue + '" width="6" height="' + Xe + '" rx="2" fill="#d8cbb6"/>', se += '<rect x="' + (Ye - 11) + '" y="' + (Ue + 3) + '" width="22" height="' + (Xe - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', se += '<rect x="' + (Ye - 4) + '" y="' + (Ue + 7) + '" width="3" height="' + (Xe - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const bt = (Ue + Te) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((oe) => oe <= P).forEach((oe) => se += '<circle cx="' + V(oe) + '" cy="' + bt + '" r="5.5" fill="#7a6550"/>');
    for (let oe = 12; oe <= P; oe += 12)
      se += '<circle cx="' + V(oe) + '" cy="' + (bt - $) + '" r="5.5" fill="#7a6550"/>', se += '<circle cx="' + V(oe) + '" cy="' + (bt + $) + '" r="5.5" fill="#7a6550"/>';
    se += '<text x="' + J + '" y="' + (ue - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', se += '<text x="' + O + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', se += '<text x="' + Ye + '" y="' + (ue - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let oe = 1; oe <= P; oe++)
      se += '<text x="' + V(oe) + '" y="' + (ue - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + oe + "</text>";
    if (X.forEach(({ number: oe, positions: ye }) => {
      ye.forEach((ke) => {
        const Pe = ke.partial ? "box-highlight box-partial" : "box-highlight";
        se += '<g class="' + Pe + '" data-box="' + oe + '" aria-hidden="true">';
        const Ze = ke.strings.find((dt) => dt.length), en = (V(Ze[0]) + V(Ze.at(-1))) / 2;
        se += '<text class="box-number" x="' + en + '" y="12">' + oe + "</text>", ke.strings.forEach((dt, Qt) => {
          if (!dt.length) return;
          const Kn = V(dt[0]) - 16, Qn = V(dt.at(-1)) - V(dt[0]) + 32;
          se += '<rect class="box-band" x="' + Kn + '" y="' + (ne(Qt) - 14) + '" width="' + Qn + '" height="28" rx="14"/>';
        }), se += "</g>";
      });
    }), c.forEach((oe, ye) => {
      const ke = 1 + ye * 0.45, Pe = ne(ye), Ze = Zt[ye] && !Wt;
      Ze ? se += '<text class="muted-mark" x="' + J + '" y="' + (Pe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : Zt[ye] && Fe === 0 || (se += '<line x1="' + (G + 4) + '" y1="' + Pe + '" x2="' + (O - 4) + '" y2="' + Pe + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), se += "<g" + (Ze ? ' opacity=".35"' : "") + ">", se += '<line x1="' + O + '" y1="' + Pe + '" x2="' + (Ye + 5) + '" y2="' + Pe + '" stroke="#b9b9c4" stroke-width="' + ke.toFixed(2) + '"/>', se += '<circle cx="' + (Ye + 5) + '" cy="' + Pe + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', se += "</g>", se += '<text x="13" y="' + (Pe + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + _[ye] + "</text>";
    }), te && ve && ve.fret >= 1 && ve.fret <= P) {
      const oe = ne(ve.from), ye = ne(ve.to), ke = Math.min(oe, ye) - 6, Pe = Math.max(oe, ye) + 6;
      se += '<rect class="barre-indicator" x="' + (V(ve.fret) - 7) + '" y="' + ke + '" width="14" height="' + (Pe - ke) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Qe && (se += '<g class="fret-targets">', c.forEach((oe, ye) => {
      for (let ke = 0; ke <= P; ke++) {
        const Pe = ke ? M[ye] + "-kieli, " + ke + ". nauha" : "vapaa " + M[ye] + "-kieli", Ze = ke ? L : O - G - 6;
        se += '<rect class="fret-target" role="button" tabindex="0" data-string="' + ye + '" data-fret="' + ke + '" data-midi="' + (oe + ke) + '" aria-label="' + Pe + '" x="' + (V(ke) - Ze / 2) + '" y="' + (ne(ye) - $ / 2) + '" width="' + Ze + '" height="' + $ + '" fill="transparent"/>';
      }
    }), se += "</g>"), (Ce ?? []).forEach(({ string: oe, fret: ye, label: ke, kind: Pe }) => {
      se += '<g class="octave-note octave-' + Pe + '">', se += '<circle cx="' + V(ye) + '" cy="' + ne(oe) + '" r="' + W + '"/>', se += '<text x="' + V(ye) + '" y="' + (ne(oe) + 3.5) + '" font-size="' + (ke.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + ke + "</text>", se += "</g>";
    }), te && (se += '<g class="grip-notes">'), (Ce ? [] : c).forEach((oe, ye) => {
      for (let ke = 0; ke <= P; ke++) {
        const Pe = (oe + ke) % 12;
        if (!(Pe in Ft) || te && te[ye] !== ke || ce && !Ln.some(({ strings: Qn }) => {
          const Gn = Qn[ye];
          return Gn.length > 0 && ke >= Gn[0] && ke <= Gn.at(-1);
        })) continue;
        const Ze = Ft[Pe], en = Ze.deg === "1", dt = Ze.added ? "#f0a13c" : en ? "#4b2fd6" : "#6d4aff", Qt = Ze.added ? "#1a1430" : "#fff";
        Ze.deg === re && (se += '<circle class="focus-note" cx="' + V(ke) + '" cy="' + ne(ye) + '" r="14.5"/>');
        const Kn = te ? ' data-string="' + (ye + 1) + '" data-fret="' + ke + '" data-degree="' + Ze.deg + '"' : "";
        se += "<circle" + Kn + ' cx="' + V(ke) + '" cy="' + ne(ye) + '" r="' + W + '" fill="' + dt + '" stroke="' + (en ? "#fff" : "#1a1430") + '" stroke-width="' + (en ? 2.5 : 1) + '"/>', se += '<text x="' + V(ke) + '" y="' + (ne(ye) + 3.5) + '" font-size="' + (Ze.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Qt + '" text-anchor="middle">' + Ze.deg + "</text>";
      }
    }), te && (se += "</g>"), Wt && Zt.forEach((oe, ye) => {
      if (!oe) return;
      const ke = V(Fe), Pe = ne(ye);
      se += '<g class="muted-mark grip-mute" data-string="' + (ye + 1) + '" data-fret="' + Fe + '">', se += '<circle cx="' + ke + '" cy="' + Pe + '" r="9" fill="' + (Fe === 0 ? "#2a2338" : "#231a12") + '"/>', se += '<text x="' + ke + '" y="' + (Pe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', se += "</g>";
    }), se += "</svg>", se;
  }
  return {
    CHROM: a,
    OPEN_PITCHES: c,
    PENT_MAJ: E,
    SCALES: I,
    noteName: pe,
    scaleNotes: Me,
    scaleTriads: D,
    triadGrips: b,
    chordGrip: C,
    renderChordDiagram: ae,
    selectionFromURL: de,
    selectionHref: he,
    renderBoard: me,
    BOX_FRETS: p,
    supportsThreeNoteBoxes: je,
    syncBoxSystem: De,
    fingeringBoxes: Ke,
    boxOptions: Ee,
    revealPositions: Re
  };
})();
globalThis.MusicMapFretboard = _d;
function io(a) {
  return 440 * Math.pow(2, (a - 69) / 12);
}
function Cd(a) {
  return 69 + 12 * Math.log2(a / 440);
}
function Td(a) {
  const s = Cd(a), o = Math.round(s), c = (s - o) * 100;
  return { midi: o, cents: c };
}
const mc = globalThis.MusicMapFretboard, Nd = (a) => (a % 12 + 12) % 12, Md = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], jd = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Rd = (a, s = !1, o = !1) => (s ? jd : Md)[Nd(a)] + (o ? Math.floor(a / 12) - 1 : ""), tc = ["ohut E", "B", "G", "D", "A", "paksu E"], Ld = (a) => a === 0 ? "vapaa kieli" : `${a}. nauha`, Pd = (a, s) => ({ string: a, fret: s, midi: mc.OPEN_PITCHES[a] + s });
function zd(a, s, o) {
  return [...a].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, o - s + 1) }, (d, p) => Pd(c, s + p)));
}
const ti = (a) => `${a.string}:${a.fret}`, Ad = 4e3;
class nc extends Error {
  name = "MicSetupError";
}
async function Fd(a, s) {
  if (!navigator.mediaDevices?.getUserMedia) throw new nc("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const o = {
    audio: {
      deviceId: a ? { exact: a } : void 0,
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
    if (d = s ? s() : new AudioContext(), d.state !== "running") {
      let M;
      await Promise.race([
        d.resume(),
        new Promise((F, E) => {
          M = setTimeout(() => E(new nc("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Ad);
        })
      ]).finally(() => clearTimeout(M));
    }
    const p = d.createMediaStreamSource(c), w = d, x = c.getAudioTracks?.()[0] ?? c.getTracks()[0], _ = x?.getSettings?.() ?? {};
    return {
      context: d,
      source: p,
      stream: c,
      label: x?.label ?? "",
      deviceId: _.deviceId ?? "",
      channelCount: _.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((M) => M.stop()), p.disconnect(), s || w.close().catch(() => {
        });
      }
    };
  } catch (p) {
    throw c.getTracks().forEach((w) => w.stop()), s || await d?.close().catch(() => {
    }), p;
  }
}
var lo, rc;
function Id() {
  if (rc) return lo;
  rc = 1;
  function a(s) {
    if (this.size = s | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = s << 1;
    for (var o = new Array(this.size * 2), c = 0; c < o.length; c += 2) {
      const M = Math.PI * c / this.size;
      o[c] = Math.cos(M), o[c + 1] = -Math.sin(M);
    }
    this.table = o;
    for (var d = 0, p = 1; this.size > p; p <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var w = 0; w < this._bitrev.length; w++) {
      this._bitrev[w] = 0;
      for (var x = 0; x < this._width; x += 2) {
        var _ = this._width - x - 2;
        this._bitrev[w] |= (w >>> x & 3) << _;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return lo = a, a.prototype.fromComplexArray = function(o, c) {
    for (var d = c || new Array(o.length >>> 1), p = 0; p < o.length; p += 2)
      d[p >>> 1] = o[p];
    return d;
  }, a.prototype.createComplexArray = function() {
    const o = new Array(this._csize);
    for (var c = 0; c < o.length; c++)
      o[c] = 0;
    return o;
  }, a.prototype.toComplexArray = function(o, c) {
    for (var d = c || this.createComplexArray(), p = 0; p < d.length; p += 2)
      d[p] = o[p >>> 1], d[p + 1] = 0;
    return d;
  }, a.prototype.completeSpectrum = function(o) {
    for (var c = this._csize, d = c >>> 1, p = 2; p < d; p += 2)
      o[c - p] = o[p], o[c - p + 1] = -o[p + 1];
  }, a.prototype.transform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, a.prototype.realTransform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, a.prototype.inverseTransform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 1, this._transform4();
    for (var d = 0; d < o.length; d++)
      o[d] /= this.size;
    this._out = null, this._data = null;
  }, a.prototype._transform4 = function() {
    var o = this._out, c = this._csize, d = this._width, p = 1 << d, w = c / p << 1, x, _, M = this._bitrev;
    if (w === 4)
      for (x = 0, _ = 0; x < c; x += w, _++) {
        const L = M[_];
        this._singleTransform2(x, L, p);
      }
    else
      for (x = 0, _ = 0; x < c; x += w, _++) {
        const L = M[_];
        this._singleTransform4(x, L, p);
      }
    var F = this._inv ? -1 : 1, E = this.table;
    for (p >>= 2; p >= 2; p >>= 2) {
      w = c / p << 1;
      var I = w >>> 2;
      for (x = 0; x < c; x += w)
        for (var G = x + I, O = x, j = 0; O < G; O += 2, j += p) {
          const L = O, $ = L + I, W = $ + I, J = W + I, ue = o[L], Z = o[L + 1], V = o[$], ne = o[$ + 1], pe = o[W], Me = o[W + 1], xe = o[J], We = o[J + 1], Oe = ue, je = Z, De = E[j], Ke = F * E[j + 1], Re = V * De - ne * Ke, Ee = V * Ke + ne * De, D = E[2 * j], b = F * E[2 * j + 1], U = pe * D - Me * b, v = pe * b + Me * D, C = E[3 * j], ae = F * E[3 * j + 1], de = xe * C - We * ae, he = xe * ae + We * C, me = Oe + U, z = je + v, B = Oe - U, P = je - v, X = Re + de, ce = Ee + he, ee = F * (Re - de), re = F * (Ee - he), te = me + X, ve = z + ce, ge = me - X, Ce = z - ce, Qe = B + re, Fe = P - ee, Be = B - re, Ye = P + ee;
          o[L] = te, o[L + 1] = ve, o[$] = Qe, o[$ + 1] = Fe, o[W] = ge, o[W + 1] = Ce, o[J] = Be, o[J + 1] = Ye;
        }
    }
  }, a.prototype._singleTransform2 = function(o, c, d) {
    const p = this._out, w = this._data, x = w[c], _ = w[c + 1], M = w[c + d], F = w[c + d + 1], E = x + M, I = _ + F, G = x - M, O = _ - F;
    p[o] = E, p[o + 1] = I, p[o + 2] = G, p[o + 3] = O;
  }, a.prototype._singleTransform4 = function(o, c, d) {
    const p = this._out, w = this._data, x = this._inv ? -1 : 1, _ = d * 2, M = d * 3, F = w[c], E = w[c + 1], I = w[c + d], G = w[c + d + 1], O = w[c + _], j = w[c + _ + 1], L = w[c + M], $ = w[c + M + 1], W = F + O, J = E + j, ue = F - O, Z = E - j, V = I + L, ne = G + $, pe = x * (I - L), Me = x * (G - $), xe = W + V, We = J + ne, Oe = ue + Me, je = Z - pe, De = W - V, Ke = J - ne, Re = ue - Me, Ee = Z + pe;
    p[o] = xe, p[o + 1] = We, p[o + 2] = Oe, p[o + 3] = je, p[o + 4] = De, p[o + 5] = Ke, p[o + 6] = Re, p[o + 7] = Ee;
  }, a.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, d = this._width, p = 1 << d, w = c / p << 1, x, _, M = this._bitrev;
    if (w === 4)
      for (x = 0, _ = 0; x < c; x += w, _++) {
        const oe = M[_];
        this._singleRealTransform2(x, oe >>> 1, p >>> 1);
      }
    else
      for (x = 0, _ = 0; x < c; x += w, _++) {
        const oe = M[_];
        this._singleRealTransform4(x, oe >>> 1, p >>> 1);
      }
    var F = this._inv ? -1 : 1, E = this.table;
    for (p >>= 2; p >= 2; p >>= 2) {
      w = c / p << 1;
      var I = w >>> 1, G = I >>> 1, O = G >>> 1;
      for (x = 0; x < c; x += w)
        for (var j = 0, L = 0; j <= O; j += 2, L += p) {
          var $ = x + j, W = $ + G, J = W + G, ue = J + G, Z = o[$], V = o[$ + 1], ne = o[W], pe = o[W + 1], Me = o[J], xe = o[J + 1], We = o[ue], Oe = o[ue + 1], je = Z, De = V, Ke = E[L], Re = F * E[L + 1], Ee = ne * Ke - pe * Re, D = ne * Re + pe * Ke, b = E[2 * L], U = F * E[2 * L + 1], v = Me * b - xe * U, C = Me * U + xe * b, ae = E[3 * L], de = F * E[3 * L + 1], he = We * ae - Oe * de, me = We * de + Oe * ae, z = je + v, B = De + C, P = je - v, X = De - C, ce = Ee + he, ee = D + me, re = F * (Ee - he), te = F * (D - me), ve = z + ce, ge = B + ee, Ce = P + te, Qe = X - re;
          if (o[$] = ve, o[$ + 1] = ge, o[W] = Ce, o[W + 1] = Qe, j === 0) {
            var Fe = z - ce, Be = B - ee;
            o[J] = Fe, o[J + 1] = Be;
            continue;
          }
          if (j !== O) {
            var Ye = P, Mt = -X, Ue = z, Te = -B, Xe = -F * te, Ht = -F * re, Ln = -F * ee, Ft = -F * ce, Zt = Ye + Xe, Wt = Mt + Ht, Kt = Ue + Ft, yr = Te - Ln, se = x + G - j, bt = x + I - j;
            o[se] = Zt, o[se + 1] = Wt, o[bt] = Kt, o[bt + 1] = yr;
          }
        }
    }
  }, a.prototype._singleRealTransform2 = function(o, c, d) {
    const p = this._out, w = this._data, x = w[c], _ = w[c + d], M = x + _, F = x - _;
    p[o] = M, p[o + 1] = 0, p[o + 2] = F, p[o + 3] = 0;
  }, a.prototype._singleRealTransform4 = function(o, c, d) {
    const p = this._out, w = this._data, x = this._inv ? -1 : 1, _ = d * 2, M = d * 3, F = w[c], E = w[c + d], I = w[c + _], G = w[c + M], O = F + I, j = F - I, L = E + G, $ = x * (E - G), W = O + L, J = j, ue = -$, Z = O - L, V = j, ne = $;
    p[o] = W, p[o + 1] = 0, p[o + 2] = J, p[o + 3] = ue, p[o + 4] = Z, p[o + 5] = 0, p[o + 6] = V, p[o + 7] = ne;
  }, lo;
}
var Od = Id();
const Dd = /* @__PURE__ */ hd(Od);
class ri {
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
    return new ri(
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
    return new ri(
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
    return new ri(s, (o) => Array(o));
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
    this._inputLength = s, this._fft = new Dd($d(2 * s)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
    for (let d = 0; d < s.length; d++)
      this._paddedInputBuffer[d] = s[d];
    for (let d = s.length; d < this._paddedInputBuffer.length; d++)
      this._paddedInputBuffer[d] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const c = this._transformBuffer;
    for (let d = 0; d < c.length; d += 2)
      c[d] = c[d] * c[d] + c[d + 1] * c[d + 1], c[d + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let d = 0; d < s.length; d++)
      o[d] = this._inverseBuffer[2 * d];
    return o;
  }
}
function Bd(a) {
  const s = [];
  let o = !1, c = -1 / 0, d = -1;
  for (let p = 1; p < a.length - 1; p++)
    a[p - 1] <= 0 && a[p] > 0 ? (o = !0, d = p, c = a[p]) : a[p - 1] > 0 && a[p] <= 0 ? (o = !1, d !== -1 && s.push(d)) : o && a[p] > c && (c = a[p], d = p);
  return s;
}
function Ud(a, s) {
  const [o, c, d] = [a - 1, a, a + 1], [p, w, x] = [s[o], s[c], s[d]], _ = p / 2 - w + x / 2, M = -(p / 2) * (c + d) + w * (o + d) - x / 2 * (o + c), F = p * c * d / 2 - w * o * d + x * o * c / 2, E = -M / (2 * _), I = _ * E * E + M * E + F;
  return [E, I];
}
class ii {
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
    return new ii(s, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(s) {
    return new ii(s, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(s) {
    return new ii(s, (o) => Array(o));
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
    this._autocorrelator = new ri(s, o), this._nsdfBuffer = o(s);
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
    const c = Bd(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((_) => this._nsdfBuffer[_])), p = c.find(
      (_) => this._nsdfBuffer[_] >= this._clarityThreshold * d
    ), [w, x] = Ud(
      // @ts-expect-error resultIndex is guaranteed to be defined
      p,
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
function $d(a) {
  return a--, a |= a >> 1, a |= a >> 2, a |= a >> 4, a |= a >> 8, a |= a >> 16, a++, a;
}
function Vd(a) {
  const s = a * 0.17;
  let o = 2048;
  for (; o < s && o < 32768; ) o *= 2;
  return o;
}
const Hd = 0.05, Wd = 1.5;
class Kd {
  constructor(s, o = {}) {
    this.mic = s, this.opts = o;
    const c = s.context, d = Vd(c.sampleRate), p = Math.max(1, Math.min(2, s.channelCount ?? 1));
    p > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(p), s.source.connect(this.splitter));
    for (let w = 0; w < (this.splitter ? p : 1); w++) {
      const x = c.createAnalyser();
      x.fftSize = d, x.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(x, w) : s.source.connect(x), this.analysers.push(x), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * Hd))), this.detector = ii.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Qd();
  onset = new Gd();
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
      stabilityMs: d = 240,
      centsTolerance: p = 35,
      minFreq: w = 70,
      maxFreq: x = 1450,
      onFrame: _,
      onStableNote: M
    } = this.opts, F = this.analysers.map((ne, pe) => (ne.getFloatTimeDomainData(this.buffers[pe]), ic(this.buffers[pe], this.buffers[pe].length - this.shortLength))), E = F.indexOf(Math.max(...F));
    E !== this.channel && F[E] > (F[this.channel] ?? 0) * Wd && (this.channel = E);
    const I = this.buffers[this.channel], G = F[this.channel], O = Yd(I, I.length - this.shortLength), j = { rms: G, peak: O, channel: this.channel, levels: F }, L = G < c, $ = this.onset.feed(G, s, c);
    if (L && ic(I, 0) < c) {
      this.gate.feed(null, s, d, !0, !1), _?.({ ...j, status: "silent" });
      return;
    }
    const [W, J] = this.detector.findPitch(I, this.mic.context.sampleRate);
    if (!isFinite(W) || J < o) {
      this.gate.feed(null, s, d, L, $), _?.({ ...j, status: L ? "silent" : "unclear", clarity: isFinite(J) ? J : 0 });
      return;
    }
    if (W < w || W > x) {
      this.gate.feed(null, s, d, L, $), _?.({ ...j, status: "out-of-range", frequency: W, clarity: J });
      return;
    }
    const { midi: ue, cents: Z } = Td(W);
    if (Math.abs(Z) > p) {
      this.gate.feed(null, s, d, L, $), _?.({ ...j, status: "off-pitch", frequency: W, clarity: J, midi: ue, cents: Z });
      return;
    }
    _?.({ ...j, status: "pitch", frequency: W, clarity: J, midi: ue, cents: Z });
    const V = this.gate.feed(ue, s, d, L, $);
    V !== null && M?.({ midi: ue, frequency: W, cents: Z, clarity: J, timestamp: s, heldMs: V.heldMs });
  }
}
class Qd {
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
  feed(s, o, c, d, p) {
    if (d ? (this.quietSince ??= o, o - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, p && (this.armed = !0, this.current = null)), s === null)
      return this.current && o - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== s) && (this.current = { midi: s, since: o, seen: o }), this.current.seen = o;
    const w = o - this.current.since;
    return w < c ? null : (this.armed = !1, this.current = null, { midi: s, heldMs: w });
  }
}
class Gd {
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
    const d = this.history.length ? Math.min(...this.history.map((p) => p.rms)) : s;
    return this.history.push({ time: o, rms: s }), s < c * 1.5 || s < d * this.ratio ? !1 : (this.lastOnset = o, this.history = [{ time: o, rms: s }], !0);
  }
}
function ic(a, s = 0) {
  const o = Math.max(0, s);
  let c = 0;
  for (let d = o; d < a.length; d++) c += a[d] * a[d];
  return Math.sqrt(c / Math.max(1, a.length - o));
}
function Yd(a, s = 0) {
  let o = 0;
  for (let c = Math.max(0, s); c < a.length; c++) {
    const d = Math.abs(a[c]);
    d > o && (o = d);
  }
  return o;
}
let vr;
function vc() {
  return (!vr || vr.state === "closed") && (vr = new AudioContext()), vr;
}
function Xd() {
  const a = vr;
  vr = void 0, a?.close().catch(() => {
  });
}
const yc = (a) => a instanceof Error ? a.name : "";
function qd(a) {
  const s = yc(a);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(s) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : s === "NotFoundError" || s === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : s === "NotReadableError" || s === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : s === "MicSetupError" ? a.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Jd {
  constructor(s = (o) => Fd(o, vc)) {
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
    const d = this.generation;
    let p, w = !1;
    try {
      p = await this.opener(s || void 0);
    } catch (x) {
      if (!s || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(yc(x))) throw x;
      p = await this.opener(void 0), w = !0;
    }
    if (d !== this.generation)
      return p.stop(), null;
    this.mic = p;
    try {
      this.loop = new Kd(p, { ...o });
      const x = () => {
        this.mic === p && (this.stop(), c());
      }, _ = this.listeners = new AbortController();
      return p.stream.getTracks().forEach((M) => M.addEventListener("ended", x, { once: !0, signal: _.signal })), p.context.addEventListener?.("statechange", () => {
        p.context.state !== "running" && x();
      }, { signal: _.signal }), this.loop.start(), { label: p.label, deviceId: p.deviceId, channels: p.channelCount, sampleRate: p.context.sampleRate, fallback: w };
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
async function so(a) {
  const s = () => a.state === "running";
  if (s()) return;
  let o;
  try {
    await Promise.race([
      a.resume(),
      new Promise((c, d) => {
        o = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    o !== void 0 && clearTimeout(o);
  }
  if (!s()) throw new Error("reference-audio-not-running");
}
function Zd(a) {
  const s = a instanceof Error ? a.message : "";
  return s === "reference-audio-resume-timeout" || s === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : a instanceof Error && a.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class lc {
  constructor(s = vc) {
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
    const c = this.token, d = this.provide();
    if (await so(d), c !== this.token) return !1;
    const p = d.createGain();
    p.connect(d.destination), this.master = p;
    const w = Array.from({ length: 12 }, (M, F) => 1 / (F + 1) ** 1.3), x = d.createPeriodicWave?.(new Float32Array([0, ...w.map(() => 0)]), new Float32Array([0, ...w]));
    return s.forEach((M, F) => {
      const E = d.createOscillator(), I = d.createGain(), G = d.currentTime + 0.05 + F * 0.8;
      x ? E.setPeriodicWave(x) : E.type = "triangle", E.frequency.value = io(M), I.gain.setValueAtTime(0, G), I.gain.linearRampToValueAtTime(0.22, G + 0.012), I.gain.exponentialRampToValueAtTime(1e-3, G + 0.7), E.connect(I), I.connect(p), E.start(G), E.stop(G + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(F);
      }, 50 + F * 800));
    }), !await new Promise((M) => {
      this.settle = M, this.timer = setTimeout(() => M(!0), s.length * 800 + 350);
    }) || c !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], p.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(s, o, c, d) {
    if (this.stop(), !s.length) return !1;
    const p = this.token, w = this.provide();
    if (await so(w), p !== this.token) return !1;
    const x = 60 / Math.max(40, Math.min(140, o)), _ = w.createGain();
    _.connect(w.destination), this.master = _;
    const M = Array.from({ length: 12 }, (O, j) => 1 / (j + 1) ** 1.3), F = w.createPeriodicWave?.(
      new Float32Array([0, ...M.map(() => 0)]),
      new Float32Array([0, ...M])
    ), E = w.currentTime + 0.05;
    let I = 0;
    return s.forEach((O, j) => {
      if (!Number.isFinite(O.beat) || O.beat < 0 || !Number.isFinite(O.duration) || O.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const L = E + O.beat * x, $ = O.duration * x, W = L + Math.max(0.08, $ * 0.94), J = w.createOscillator(), ue = w.createGain();
      F ? J.setPeriodicWave(F) : J.type = "triangle", J.frequency.value = io(O.midi), ue.gain.setValueAtTime(0, L), ue.gain.linearRampToValueAtTime(0.22, L + 0.012), ue.gain.exponentialRampToValueAtTime(1e-3, W - 0.01), J.connect(ue), ue.connect(_), J.start(L), J.stop(W), c && this.noteTimers.push(setTimeout(() => {
        p === this.token && c(j);
      }, 50 + O.beat * x * 1e3));
      const Z = s[j + 1]?.beat ?? 1 / 0;
      d && Z > O.beat + O.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        p === this.token && d();
      }, 50 + O.beat * x * 1e3 + $ * 1e3)), I = Math.max(I, O.beat + O.duration);
    }), !await new Promise((O) => {
      this.settle = O, this.timer = setTimeout(() => O(!0), 50 + I * x * 1e3 + 150);
    }) || p !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], _.disconnect(), this.master = void 0, !0);
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
    const d = this.token, p = this.provide();
    if (await so(p), d !== this.token) return !1;
    const w = p.createGain();
    w.connect(p.destination), this.master = w;
    const x = Array.from({ length: 12 }, (j, L) => 1 / (L + 1) ** 1.3), _ = p.createPeriodicWave?.(new Float32Array([0, ...x.map(() => 0)]), new Float32Array([0, ...x]));
    let M = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (j) => {
      d === this.token && Number.isFinite(j) && (M = 60 / Math.max(40, Math.min(140, j)));
    };
    const F = 1.6;
    let E = p.currentTime + 0.05, I = 0;
    const G = [], O = () => {
      if (d === this.token) {
        if (E < p.currentTime - 0.02) {
          const j = Math.ceil((p.currentTime - E) / M);
          E += j * M, I = (I + j) % s.length, G.length = 0;
        }
        for (; E < p.currentTime + F; ) {
          const j = s[I], L = I, $ = E, W = p.createOscillator(), J = p.createGain();
          _ ? W.setPeriodicWave(_) : W.type = "triangle", W.frequency.value = io(j), J.gain.setValueAtTime(0, $), J.gain.linearRampToValueAtTime(0.22, $ + 0.012), J.gain.exponentialRampToValueAtTime(1e-3, $ + M * 0.975), W.connect(J), J.connect(w), W.start($), W.stop($ + M * 0.985), G.push({ at: $, index: L }), E += M, I = (I + 1) % s.length;
        }
        for (; G.length && G[0].at <= p.currentTime + 0.01; ) {
          const j = G.shift();
          o?.(j.index);
        }
      }
    };
    return O(), this.loopTick = setInterval(O, 25), new Promise((j) => {
      this.settle = j;
    });
  }
}
const bd = { minRms: 0.01, minClarity: 0.94, stabilityMs: 240, centsTolerance: 35 };
class ep {
  mic = new Jd();
  player = new lc();
  /** Oma soitin painalluksille, jotta nopea uusi painallus ei keskeytä mallia eikä päinvastoin. */
  strings = new lc();
  async openMic(s) {
    return this.mic.start("", { ...bd, onFrame: s.onFrame, onStableNote: s.onStable }, s.onEnded);
  }
  pauseAnalysis() {
    this.mic.pause();
  }
  resumeAnalysis() {
    this.mic.resume();
  }
  rearm() {
    this.mic.rearm();
  }
  closeMic() {
    this.mic.stop();
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
const tp = [64, 59, 55, 50, 45, 40], co = [0, 1, 2, 3, 4, 5], np = 0, rp = 5, Nt = (a, s, o, c) => ({
  id: a,
  title: s,
  tip: c,
  spots: o.map(([d, p]) => ({ string: d, fret: p })),
  midi: o.map(([d, p]) => tp[d] + p)
}), fn = (a, s) => s.map((o) => [a, o]), mt = 1, cn = 2, pl = 59, hl = Nt("opastus", "Opastus: kaksi säveltä", fn(mt, [0, 1]), "Vapaa B-kieli ja sitten 1. nauha."), sc = "Soita B-kielellä (toiseksi ohuin kieli).", ft = [
  { number: 1, title: "Yksi kieli", strings: [mt], instruction: sc, riffs: [
    Nt("b-kaari", "Ensimmäinen kaiku", fn(mt, [0, 1, 3, 1]), "Vapaa kieli, 1., 3. ja takaisin 1. nauhaan."),
    Nt("b-vaihto", "Edestakaisin", fn(mt, [1, 0, 1, 3]), "1. nauha, vapaa kieli, 1. ja 3. nauha."),
    Nt("b-lasku", "Laskeva kaiku", fn(mt, [5, 3, 1, 0]), "Alaspäin: 5., 3., 1. nauha ja vapaa kieli.")
  ] },
  { number: 2, title: "Yksi kieli, isommat askeleet", strings: [mt], instruction: sc, riffs: [
    Nt("b-kumpu", "Kumpu", fn(mt, [0, 3, 5, 3]), "Vapaa kieli, 3., 5. ja takaisin 3. nauhaan."),
    Nt("b-toisto", "Toistuva alku", fn(mt, [5, 5, 3, 1]), "Kaksi näppäystä 5. nauhalla, sitten 3. ja 1. Vaimenna kieli hetkeksi samojen sävelten välissä."),
    Nt("b-hyppy", "Hyppivä kaiku", fn(mt, [0, 5, 1, 3]), "Vapaa kieli, hyppy 5. nauhaan, sitten 1. ja 3. nauha.")
  ] },
  { number: 3, title: "Kaksi kieltä", strings: [mt, cn], instruction: "Soita G- ja B-kielellä (kolmanneksi ja toiseksi ohuin kieli).", riffs: [
    Nt("gb-nousu", "Kahden kielen nousu", [[cn, 0], [cn, 2], [mt, 0], [mt, 1]], "G-kieli vapaa ja 2. nauha, sitten B-kieli vapaa ja 1. nauha."),
    Nt("g-kaksi-a", "Kaksi samaa", [[cn, 2], [cn, 2], [mt, 1], [cn, 2]], "Kaksi erillistä näppäystä G-kielen 2. nauhalla, C B-kielen 1. nauhalta. Vaimenna kieli A:iden välissä."),
    Nt("gb-kaari", "Kahden kielen kaari", [[cn, 2], [mt, 1], [mt, 3], [cn, 2]], "G-kielen 2. nauha, B-kielen 1. ja 3. nauha ja takaisin G-kielelle.")
  ] },
  { number: 4, title: "Koko otelauta", strings: [...co], instruction: "Soita millä kielellä tahansa, nauhat 0–5.", riffs: [
    Nt("e-hyppy", "Hyppy ylös", fn(0, [0, 5, 3, 0]), "Ohut E-kieli: vapaa, hyppy 5. nauhaan, 3. ja vapaa."),
    Nt("d-molli", "Mollinen kaiku", fn(3, [0, 3, 5, 0]), "D-kieli: vapaa, 3., 5. ja taas vapaa."),
    Nt("am-arpeggio", "Kielten yli", [[4, 0], [4, 3], [3, 2], [cn, 2]], "A-kieli vapaa ja 3. nauha, D-kielen 2. ja G-kielen 2. nauha.")
  ] }
];
ft.flatMap((a) => a.riffs);
const ip = (a) => ft.find((s) => s.riffs.some((o) => o.id === a));
class oc {
  constructor(s, o, c) {
    if (this.round = o, this.input = c, !s.length || s.some((d) => !Number.isInteger(d))) throw new Error("Riffissä pitää olla vähintään yksi kokonaislukuinen MIDI-sävel.");
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
  /** Vakaat väärät sävelet. Ne eivät pysäytä peliä; luku on vain tulosten tulkintaa varten. */
  get wrongCount() {
    return this.wrongs;
  }
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
    const o = this.position, c = this.expected[o], d = s.midi;
    if (d === c) {
      const p = this.slots[o] === "red" ? "yellow" : "green";
      return this.slots[o] = p, this.position++, { type: "accepted", index: o, midi: d, complete: this.complete, mark: p };
    }
    return ((d - c) % 12 + 12) % 12 === 0 ? (this.octaves++, { type: "octave", index: o, expected: c, played: d }) : (this.wrongs++, this.slots[o] = "red", { type: "wrong", index: o, expected: c, played: d });
  }
}
class lp {
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
const uc = ["mic-check", "model-playing", "output-settling", "listening", "success", "retry", "level-complete"], sp = ["listening", "success", "retry", "level-complete"], vt = (a) => Rd(a, !1, !0), oo = (a) => a.midi.map(() => "pending");
class op {
  constructor(s, o, c = () => performance.now()) {
    this.audio = s, this.store = o, this.clock = c;
    const d = o.data.input;
    this.state = {
      phase: "idle",
      input: d,
      ...this.position(d),
      index: 0,
      playing: null,
      hint: !1,
      fullBoard: o.data.fullBoard,
      heard: null,
      lastStable: null,
      check: "waiting",
      feedback: null,
      error: "",
      pausedReason: null,
      micLabel: "",
      completedLevels: o.completedLevels(d)
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
  checker = null;
  settler = new lp();
  settleTimer;
  roundStart = null;
  replays = 0;
  pausedFrom = null;
  /** Saman riffiyrityksen aiemmilta kierroksilta (uusinta, aloita alusta) kertyneet tiedot. */
  carried = { wrong: 0, octave: 0, hint: !1 };
  /** Vastaustavan tallennettu kohta: opastus, tason seuraava riffi tai läpäisty taso. */
  position(s) {
    const o = this.store.level(s);
    if (!this.store.data.tutorialDone) return { riff: hl, tutorial: !0, level: ft[0], riffNumber: 1, marks: oo(hl) };
    const c = this.store.currentRiff(s) ?? o.riffs[o.riffs.length - 1];
    return { riff: c, tutorial: !1, level: o, riffNumber: o.riffs.indexOf(c) + 1, marks: oo(c) };
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
    this.store.setInput(s), this.set({ input: s, error: "", completedLevels: this.store.completedLevels(s), ...s === "board" ? { heard: null, lastStable: null } : {} });
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
  /** Koko kuusikielinen otelauta näkyviin jo ennen tasoa 4 (tai takaisin tason kieliin). */
  setFullBoard(s) {
    this.store.setFullBoard(s), this.set({ fullBoard: s });
  }
  async openMicThen(s) {
    const o = ++this.op;
    this.cancelTimers(), this.audio.stopModel(), this.closeMic(), this.set({ phase: "permission", feedback: null, error: "", playing: null });
    const c = ++this.micSession, d = {
      onFrame: (p) => {
        c === this.micSession && this.onFrame(p);
      },
      onStable: (p) => {
        c === this.micSession && this.onStable(p);
      },
      onEnded: () => {
        c === this.micSession && this.micLost();
      }
    };
    try {
      const p = await this.audio.openMic(d);
      if (o !== this.op || c !== this.micSession || !p) return;
      this.micOpen = !0, this.set({ micLabel: p.label }), s();
    } catch (p) {
      if (o !== this.op) return;
      this.micOpen = !1, this.set({ phase: "error", error: qd(p) });
    }
  }
  enterMicCheck() {
    this.audio.resumeAnalysis(), this.set({ phase: "mic-check", check: "waiting", lastStable: null, feedback: { tone: "info", text: `Soita vapaa B-kieli (${vt(pl)}) ja anna sen soida hetki.` } });
  }
  /** Mikrofonitestin jälkeen: opastus tai tason seuraava riffi. */
  continueAfterCheck() {
    this.state.phase !== "mic-check" || this.state.check === "waiting" || (this.micChecked = !0, this.beginRound());
  }
  // ---- kierros ----
  /** Uusi riffiyritys: tallennetun etenemisen seuraava riffi tai annettu riffi (uusi yritys). */
  beginRound(s, o = !0) {
    if (this.state.input === "mic" && !this.micOpen) {
      this.openMicThen(() => this.beginRound(s, o));
      return;
    }
    const c = this.position(this.state.input);
    if (!c.tutorial && !s && this.store.currentRiff(this.state.input) === null) {
      this.showLevelComplete();
      return;
    }
    const d = s ?? c.riff;
    this.newChecker(d), this.replays = 0, this.roundStart = null, this.set({
      ...c,
      riff: d,
      riffNumber: c.tutorial ? 1 : c.level.riffs.indexOf(d) + 1,
      marks: oo(d),
      index: 0,
      hint: !1,
      feedback: null,
      lastStable: null
    }), o ? this.playModel(!0) : (this.micOpen && this.audio.resumeAnalysis(), this.startListening());
  }
  newChecker(s) {
    this.checker = new oc(s.midi, ++this.round, this.state.input), this.carried = { wrong: 0, octave: 0, hint: !1 };
  }
  /**
   * Sama riffi alusta kesken yrityksen (uusinta, aloita alusta, jatko tauolta): uusi kierrostunniste
   * hylkää vanhat vastaukset ja pallukat alkavat alusta, mutta väärät sävelet ja vihje kertyvät tulokseen.
   */
  renewChecker() {
    const s = this.checker, o = this.carried;
    this.checker = new oc(this.state.riff.midi, ++this.round, this.state.input), this.carried = { wrong: o.wrong + (s?.wrongCount ?? 0), octave: o.octave + (s?.octaveCount ?? 0), hint: o.hint || !!s?.hintUsed }, this.carried.hint && this.checker.useHint(), this.set({ index: 0, marks: this.checker.marks, lastStable: null });
  }
  async playModel(s) {
    const o = ++this.op;
    this.cancelTimers(), this.micOpen && this.audio.pauseAnalysis();
    const c = s ? "model-playing" : this.state.phase;
    this.set({ phase: c, playing: null });
    let d;
    try {
      d = await this.audio.playModel(this.state.riff.midi, (p) => {
        o === this.op && this.set({ playing: p });
      });
    } catch (p) {
      if (o !== this.op) return;
      this.set({ feedback: { tone: "bad", text: Zd(p) + " Voit silti soittaa riffin sävelvihjeen avulla." } }), d = !0;
    }
    o !== this.op || !d || (this.set({ playing: null }), s && this.afterModel(o));
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
    clearTimeout(this.settleTimer), this.settleTimer = void 0, this.settler.cancel();
  }
  // ---- mikrofonin tapahtumat ----
  onFrame(s) {
    const o = { status: s.status, midi: s.status === "pitch" || s.status === "off-pitch" ? s.midi : void 0 }, c = this.state.heard;
    (!c || c.status !== o.status || c.midi !== o.midi) && this.set({ heard: o }), this.state.phase === "output-settling" && this.settler.feed(s.status === "silent", this.clock()) !== "settling" && this.startListening();
  }
  onStable(s) {
    const o = this.state.phase;
    if (o === "mic-check") {
      const c = s.midi === pl;
      this.set({ lastStable: s.midi, check: c ? "ok" : "other", feedback: c ? { tone: "good", text: `Kuulin ${vt(s.midi)}. Mikrofoni toimii.` } : { tone: "info", text: `Kuulin ${vt(s.midi)}. Mikrofoni toimii, mutta testisävel on ${vt(pl)}: vapaa B-kieli, toiseksi ohuin kieli. Tarkista tarvittaessa viritys.` } });
      return;
    }
    o !== "listening" || this.state.input !== "mic" || (this.set({ lastStable: s.midi }), this.answer(s.midi, "mic"));
  }
  /**
   * Virtuaalikitaran painallus. Jokainen painallus soi ja on täsmälleen yksi syötetapahtuma, joten
   * sama sävel kahdesti (A–A) on kaksi painallusta. Vastaukseksi lasketaan vain vastausvuorossa;
   * riffin jälkeen otelaudalla voi soitella vapaasti. Mallisoiton aikana otelauta on lukittu.
   * Palauttaa true, jos painallus soi.
   */
  tap(s) {
    const o = this.state.phase;
    return this.state.input !== "board" || !sp.includes(o) ? !1 : (this.audio.pluck(s), o === "listening" && this.answer(s, "board"), !0);
  }
  answer(s, o) {
    const c = this.checker;
    if (!c) return;
    const d = c.feed({ midi: s, round: this.round, input: o }), p = c.expected.length, w = o === "mic" ? "Kuulin" : "Soitit";
    d.type === "accepted" ? (this.set({ index: d.index + 1, marks: c.marks, feedback: { tone: "good", text: d.mark === "yellow" ? `${vt(s)} oikein (${d.index + 1}/${p}). Kohta korjattiin, joten se on keltainen.` : `${vt(s)} oikein (${d.index + 1}/${p}).` } }), d.complete && this.finish(c)) : d.type === "wrong" ? this.set({ marks: c.marks, feedback: { tone: "bad", text: `${w} ${vt(d.played)}; kokeile ${d.index + 1}. sävelen kohtaa uudelleen.` } }) : d.type === "octave" && this.set({ feedback: { tone: "info", text: `${w} ${vt(d.played)}: oikea sävelnimi, mutta eri oktaavi. ${d.index + 1}. sävel on ${vt(d.expected)}.` } });
  }
  /** Riffi soitettu loppuun: virheetön → success / level-complete, keltaisia → retry. Kirjataan kerran. */
  finish(s) {
    this.micOpen && this.audio.pauseAnalysis();
    const o = this.state.riff, c = s.flawless, { levelComplete: d } = this.store.record({
      riff: o.id,
      input: s.input,
      hint: s.hintUsed,
      passed: c,
      wrong: this.carried.wrong + s.wrongCount,
      octave: this.carried.octave + s.octaveCount,
      replays: this.replays,
      ms: Math.max(0, Math.round(this.clock() - (this.roundStart ?? this.clock()))),
      at: Date.now()
    });
    if (this.checker = null, this.set({ completedLevels: this.store.completedLevels(s.input) }), o.id === hl.id)
      this.set({ phase: "success", feedback: { tone: "good", text: c ? "Hienoa! Opastus on tehty. Seuraavaksi taso 1: kolme riffiä B-kielellä." : "Opastus on tehty. Tasoilla riffi hyväksytään, kun kaikki pallukat ovat vihreitä." } });
    else if (c)
      d ? this.showLevelComplete() : this.set({ phase: "success", feedback: { tone: "good", text: s.hintUsed ? "Virheetön, sävelvihjeen kanssa." : "Virheetön, omin korvin!" } });
    else {
      const p = s.marks.flatMap((w, x) => w === "yellow" ? [x + 1] : []);
      this.set({ phase: "retry", feedback: { tone: "info", text: `Soitit riffin loppuun. ${p.length === 1 ? `Kohta ${p[0]} meni` : `Kohdat ${p.join(" ja ")} menivät`} ensin väärin. Riffi hyväksytään, kun kaikki pallukat ovat vihreitä – yritä uudelleen.` } });
    }
  }
  showLevelComplete() {
    this.micOpen && this.audio.pauseAnalysis();
    const s = this.store.level(this.state.input);
    this.set({ phase: "level-complete", level: s, completedLevels: this.store.completedLevels(this.state.input), feedback: null, hint: !1 });
  }
  // ---- sivutoiminnot ----
  /** Kuuntele malli uudelleen. Vastausvuorossa yritys alkaa alusta, koska riffi kuullaan alusta. */
  replay() {
    const s = this.state.phase;
    if (s === "success" || s === "retry") {
      this.playModel(!1);
      return;
    }
    ["listening", "output-settling", "model-playing"].includes(s) && (this.replays++, this.renewChecker(), this.set({ feedback: null }), this.playModel(!0));
  }
  /** Aloita alusta kesken yrityksen: sama riffi ilman mallia. */
  restart() {
    ["listening", "output-settling"].includes(this.state.phase) && (this.renewChecker(), this.set({ feedback: { tone: "info", text: "Aloita riffi alusta." } }), this.startListening());
  }
  /** Keltaisten kohtien jälkeen: sama riffi uutena yrityksenä, mallin kanssa tai ilman. */
  retry(s = !0) {
    this.state.phase === "retry" && this.beginRound(this.state.riff, s);
  }
  toggleHint() {
    const s = !this.state.hint;
    s && this.checker?.useHint(), this.set({ hint: s });
  }
  /** Virheettömän riffin jälkeen tason seuraava riffi. */
  next() {
    this.state.phase === "success" && this.beginRound();
  }
  /** Onnittelunäkymästä: seuraava taso. Ei koskaan automaattisesti. */
  continueLevel() {
    if (this.state.phase !== "level-complete") return;
    const s = this.state.level.number + 1;
    ft.some((o) => o.number === s) && (this.store.startLevel(this.state.input, s), this.beginRound());
  }
  /** Onnittelunäkymästä: sama taso alusta (tai mikä tahansa tason numero, esim. viimeisen tason jälkeen taso 1). */
  repeatLevel(s = this.state.level.number) {
    this.state.phase === "level-complete" && (this.store.startLevel(this.state.input, s), this.beginRound());
  }
  /** Tauko: soitto pysähtyy ja mikrofoni vapautetaan. Jatko vaatii painalluksen. */
  pause(s) {
    uc.includes(this.state.phase) && (this.pausedFrom = this.state.phase, ++this.op, this.cancelTimers(), this.audio.stopModel(), this.closeMic(), this.set({ phase: "paused", pausedReason: s, playing: null, heard: null }));
  }
  resume() {
    if (this.state.phase !== "paused") return;
    const s = this.pausedFrom ?? "listening";
    if (this.pausedFrom = null, this.set({ pausedReason: null }), ["success", "retry", "level-complete"].includes(s)) {
      this.set({ phase: s });
      return;
    }
    const o = () => {
      s === "mic-check" ? this.enterMicCheck() : s === "model-playing" ? (this.renewChecker(), this.playModel(!0)) : this.startListening();
    };
    this.state.input === "mic" ? this.openMicThen(o) : o();
  }
  micLost() {
    const s = this.state.phase;
    this.closeMic(), uc.includes(s) && (this.pausedFrom = s, ++this.op, this.cancelTimers(), this.audio.stopModel(), this.set({ phase: "paused", pausedReason: "mic-lost", playing: null, heard: null }));
  }
  /** Lopeta: kaikki pysähtyy, aloitusnäkymä. Edistyminen on jo tallennettu. */
  stop() {
    ++this.op, this.cancelTimers(), this.audio.stopModel(), this.closeMic(), this.checker = null, this.pausedFrom = null, this.set({ phase: "idle", playing: null, heard: null, feedback: null, error: "", pausedReason: null, index: 0, hint: !1, ...this.position(this.state.input) });
  }
  closeMic() {
    this.micSession++, this.micOpen && this.audio.closeMic(), this.micOpen = !1;
  }
}
const up = 4e3, ac = 12, ap = 1500;
function cp(a, s) {
  const o = a.left + a.stickyLeft, c = a.right;
  let d = 0;
  if (s.left < o ? d = s.left - o - ac : s.right > c && (d = s.right - c + ac), d === 0) return null;
  const p = Math.max(0, Math.min(a.maxScroll, a.scrollLeft + d));
  return Math.abs(p - a.scrollLeft) < 1 ? null : p;
}
function fp(a, s) {
  return s.right <= a.left + a.stickyLeft || s.left >= a.right;
}
function dp(a, s, o, { stickySelector: c, enabled: d = !0, playback: p } = {}) {
  const w = He.useRef(0), x = He.useRef(!1), _ = He.useRef(""), M = He.useRef(0), F = He.useRef(p);
  He.useEffect(() => {
    const E = a.current;
    if (!E || !d) return;
    const I = () => {
      w.current = Date.now() + up;
    }, G = () => {
      x.current = !0, I();
    }, O = () => {
      x.current && (x.current = !1, I());
    }, j = (L) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(L.key) && I();
    };
    return E.addEventListener("pointerdown", G, { passive: !0 }), E.addEventListener("touchstart", G, { passive: !0 }), E.addEventListener("wheel", I, { passive: !0 }), E.addEventListener("keydown", j), window.addEventListener("pointerup", O, { passive: !0 }), window.addEventListener("pointercancel", O, { passive: !0 }), window.addEventListener("touchend", O, { passive: !0 }), window.addEventListener("touchcancel", O, { passive: !0 }), () => {
      E.removeEventListener("pointerdown", G), E.removeEventListener("touchstart", G), E.removeEventListener("wheel", I), E.removeEventListener("keydown", j), window.removeEventListener("pointerup", O), window.removeEventListener("pointercancel", O), window.removeEventListener("touchend", O), window.removeEventListener("touchcancel", O);
    };
  }, [a, d]), He.useLayoutEffect(() => {
    const E = p !== void 0 && !!p && p !== F.current;
    F.current = p, E && !x.current && (w.current = 0);
  }, [p]), He.useLayoutEffect(() => {
    p === void 0 && _.current === "" && o !== "" && Date.now() - M.current > ap && !x.current && (w.current = 0), _.current !== "" && o === "" && (M.current = Date.now()), _.current = o;
    const E = a.current;
    if (!E || !d || !o || x.current || Date.now() < w.current) return;
    const I = E.querySelector(s);
    if (!I) return;
    const G = E.getBoundingClientRect(), O = I.getBoundingClientRect(), j = c ? E.querySelector(c) : null, L = j && getComputedStyle(j).position === "sticky" ? j.getBoundingClientRect().width : 0, $ = {
      left: G.left,
      right: G.left + E.clientWidth,
      scrollLeft: E.scrollLeft,
      maxScroll: E.scrollWidth - E.clientWidth,
      stickyLeft: L
    }, W = cp($, O);
    if (W === null) return;
    const ue = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || fp($, O);
    typeof E.scrollTo == "function" ? E.scrollTo({ left: W, behavior: ue ? "auto" : "smooth" }) : E.scrollLeft = W;
  }, [a, s, o, c, d, p]);
}
const pp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), hp = ["e", "B", "G", "D", "A", "E"];
function mp({ string: a }) {
  return /* @__PURE__ */ S.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ S.jsxs("span", { children: [
      a + 1,
      " · ",
      /* @__PURE__ */ S.jsx("strong", { children: hp[a] })
    ] }),
    a === 0 ? /* @__PURE__ */ S.jsx("small", { children: "ohuin" }) : a === 5 ? /* @__PURE__ */ S.jsx("small", { children: "paksuin" }) : null
  ] });
}
const vp = (a) => ({ "--string-thickness": 1.25 + a * 0.45 + "px" }), yp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function gp({ min: a, max: s }) {
  return /* @__PURE__ */ S.jsx("thead", { children: /* @__PURE__ */ S.jsxs("tr", { children: [
    /* @__PURE__ */ S.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: s - a + 1 }, (o, c) => {
      const d = a + c;
      return /* @__PURE__ */ S.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ S.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : pp.has(d) ? /* @__PURE__ */ S.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function kp({ area: a, marks: s = [], mutedStrings: o = [], disabled: c = !1, onAnswer: d, caption: p = "Otelauta", follow: w = "hints", playback: x }) {
  const _ = { "--cols": a.max - a.min + 1 }, { strings: M, min: F, max: E } = a, [I, G] = He.useState({ string: Math.min(...M), fret: F }), O = He.useRef(null), j = new Map(s.map((Z) => [ti(Z), Z])), L = s.map((Z) => `${ti(Z)}${Z.kind}`).join(",");
  He.useEffect(() => {
    if (w !== "hints") return;
    const Z = O.current, V = Z?.querySelector(".target, .anchor");
    Z && V && (Z.scrollLeft += V.getBoundingClientRect().left - Z.getBoundingClientRect().left - Z.clientWidth / 2 + V.clientWidth / 2);
  }, [L, w]), He.useEffect(() => {
    w === "playing" && O.current && (O.current.scrollLeft = 0);
  }, [w, F, E]);
  const $ = s.find((Z) => Z.kind === "playing");
  dp(O, ".playing", $ ? ti($) : "", { stickySelector: "tbody th", enabled: w === "playing", playback: x });
  const [W, J] = He.useState({ left: !1, right: !1 });
  He.useEffect(() => {
    const Z = O.current;
    if (!Z) return;
    const V = () => {
      const pe = Z.scrollLeft > 2, Me = Z.scrollLeft + Z.clientWidth < Z.scrollWidth - 2;
      J((xe) => xe.left === pe && xe.right === Me ? xe : { left: pe, right: Me });
    };
    V(), Z.addEventListener("scroll", V, { passive: !0 });
    const ne = typeof ResizeObserver > "u" ? null : new ResizeObserver(V);
    return ne?.observe(Z), () => {
      Z.removeEventListener("scroll", V), ne?.disconnect();
    };
  }, [L, F, E]);
  const ue = M.includes(I.string) && I.fret >= F && I.fret <= E ? I : { string: Math.min(...M), fret: F };
  return /* @__PURE__ */ S.jsxs("div", { className: "fret-wrap" + (W.left ? " more-left" : "") + (W.right ? " more-right" : ""), children: [
    (W.left || W.right) && /* @__PURE__ */ S.jsxs("p", { className: "fret-scroll-hint", children: [
      W.left && /* @__PURE__ */ S.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      W.left && W.right ? "molemmilla puolilla" : W.right ? "oikealla" : "vasemmalla",
      W.right && /* @__PURE__ */ S.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ S.jsx("div", { ref: O, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ S.jsxs("table", { className: "practice-board", style: _, children: [
      /* @__PURE__ */ S.jsxs("caption", { children: [
        p,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ S.jsx(gp, { min: F, max: E }),
      /* @__PURE__ */ S.jsx("tbody", { children: mc.OPEN_PITCHES.map((Z, V) => /* @__PURE__ */ S.jsxs("tr", { className: M.includes(V) ? "" : "unused", style: vp(V), children: [
        /* @__PURE__ */ S.jsxs("th", { scope: "row", "aria-label": `${V + 1}. kieli: ${tc[V]}${o.includes(V) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ S.jsx(mp, { string: V }),
          o.includes(V) && /* @__PURE__ */ S.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        zd([V], F, E).map((ne) => {
          const pe = j.get(ti(ne)), Me = `${tc[V]}-kieli, ${Ld(ne.fret)}`;
          return /* @__PURE__ */ S.jsx("td", { className: `${ne.fret === 0 ? "open-fret " : ""}${pe ? pe.kind === "answer" ? "target" : pe.kind : ""}`, children: /* @__PURE__ */ S.jsx(
            "button",
            {
              type: "button",
              "data-string": V,
              "data-fret": ne.fret,
              tabIndex: ue.string === V && ue.fret === ne.fret ? 0 : -1,
              onFocus: () => G(ne),
              onKeyDown: (xe) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(xe.key)) return;
                xe.preventDefault();
                const We = [...M].sort((Ke, Re) => Ke - Re), Oe = We.indexOf(V), je = xe.key === "ArrowUp" ? We[Math.max(0, Oe - 1)] : xe.key === "ArrowDown" ? We[Math.min(We.length - 1, Oe + 1)] : V, De = xe.key === "Home" ? F : xe.key === "End" ? E : Math.max(F, Math.min(E, ne.fret + (xe.key === "ArrowRight" ? 1 : xe.key === "ArrowLeft" ? -1 : 0)));
                xe.currentTarget.closest("table")?.querySelector(`button[data-string="${je}"][data-fret="${De}"]`)?.focus();
              },
              disabled: c || !M.includes(V),
              "aria-label": Me + (pe ? `, ${yp[pe.kind]}${pe.label ? " " + pe.label : ""}` : ""),
              onClick: () => d?.(ne),
              children: pe ? /* @__PURE__ */ S.jsx("span", { className: "dot", children: pe.label || "●" }) : null
            }
          ) }, ne.fret);
        })
      ] }, V)) })
    ] }) })
  ] });
}
const wp = (a) => ({ strings: a.fullBoard ? co : a.level.strings, min: np, max: rp, fixed: "" }), cc = {
  idle: "",
  permission: "Pyydetään mikrofonilupaa…",
  "mic-check": "Mikrofonin testi",
  "model-playing": "Kuuntele malli",
  "output-settling": "Valmistaudu: odotetaan mallin äänen vaimenemista…",
  listening: "Sinun vuorosi",
  success: "Riffi hyväksytty!",
  retry: "Melkein! Yritä uudelleen.",
  "level-complete": "",
  paused: "Tauko",
  error: "Mikrofoni ei käynnistynyt"
}, xp = {
  manual: "Peli on tauolla. Mikrofoni on suljettu.",
  background: "Peli pysähtyi, koska välilehti siirtyi taustalle. Mikrofoni ja äänet on suljettu.",
  "mic-lost": "Yhteys mikrofoniin katkesi (laite irrotettiin tai selain pysäytti äänen). Tarkista laite ja jatka."
}, Sp = { pending: "ei vielä soitettu", red: "väärin, yritä tätä kohtaa uudelleen", green: "oikein heti", yellow: "korjattu oikeaksi" }, uo = { pending: "", red: "✗", green: "✓", yellow: "!" };
function fc(a) {
  const s = a.heard;
  return !s || s.status === "silent" ? "hiljaista" : s.status === "pitch" && s.midi !== void 0 ? vt(s.midi) : s.status === "off-pitch" && s.midi !== void 0 ? `${vt(s.midi)}, epävireinen` : "ääntä, ei selvää säveltä";
}
function Ep(a) {
  const s = /* @__PURE__ */ new Map();
  return a.riff.spots.forEach((o, c) => {
    const d = { ...o, midi: a.riff.midi[c] }, p = ti(d), w = s.get(p);
    s.set(p, { ...d, kind: a.playing === c ? "playing" : w?.kind ?? "answer", label: w ? `${w.label}·${c + 1}` : String(c + 1) });
  }), [...s.values()];
}
const dc = (a) => a === 1 ? "yksi kieli" : a === 6 ? "koko otelauta" : `${a} kieltä`;
function _p({ game: a }) {
  const s = He.useSyncExternalStore(a.subscribe, a.getState), [o, c] = He.useState(null), d = He.useRef(), p = He.useRef(null);
  He.useEffect(() => {
    s.phase === "level-complete" && p.current?.focus();
  }, [s.phase]), He.useEffect(() => {
    const j = () => {
      document.visibilityState === "hidden" && a.pause("background");
    }, L = () => a.stop();
    return document.addEventListener("visibilitychange", j), window.addEventListener("pagehide", L), () => {
      document.removeEventListener("visibilitychange", j), window.removeEventListener("pagehide", L), clearTimeout(d.current);
    };
  }, [a]);
  const w = s.riff.midi.length, x = ["model-playing", "output-settling", "listening", "success", "retry", "paused"].includes(s.phase), _ = s.input === "board", M = _ && ["listening", "success", "retry"].includes(s.phase), F = wp(s), E = s.level.strings.length < co.length;
  function I(j) {
    a.tap(j.midi) && (clearTimeout(d.current), c((L) => ({ p: j, n: (L?.n ?? 0) + 1 })), d.current = setTimeout(() => c(null), 450));
  }
  const G = [
    ...s.hint ? Ep(s) : [],
    ...o && _ ? [{ ...o.p, kind: "playing", label: vt(o.p.midi) }] : []
  ], O = E && (_ || s.hint) && /* @__PURE__ */ S.jsxs("label", { className: "riff-toggle", children: [
    /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: s.fullBoard, onChange: (j) => a.setFullBoard(j.target.checked) }),
    "Näytä koko otelauta (kaikki kuusi kieltä)"
  ] });
  if (s.phase === "idle") {
    const j = (L) => {
      const $ = a.progress(L);
      return `taso ${$.level}, läpäisty ${$.completed.length}/${ft.length}`;
    };
    return /* @__PURE__ */ S.jsxs("section", { className: "riff-game", "data-phase": "idle", "aria-labelledby": "riff-title", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "riff-intro", children: [
        /* @__PURE__ */ S.jsx("p", { className: "eyebrow", children: "KAIKUPELI · PROTOTYYPPI 0.1" }),
        /* @__PURE__ */ S.jsx("h1", { id: "riff-title", children: "Riffikaiku" }),
        /* @__PURE__ */ S.jsx("p", { children: "Kuuntele lyhyt riffi ja soita se takaisin samassa järjestyksessä. Ensin yhdellä kielellä, sitten kahdella ja lopuksi koko otelaudalla. Ei aikarajaa, ei elämiä." })
      ] }),
      /* @__PURE__ */ S.jsx("h2", { children: "Millä soitat?" }),
      /* @__PURE__ */ S.jsxs("div", { className: "riff-choices", children: [
        /* @__PURE__ */ S.jsxs("button", { type: "button", className: "riff-choice primary", onClick: () => a.startMic(), children: [
          /* @__PURE__ */ S.jsx("strong", { children: "Oikea kitara" }),
          /* @__PURE__ */ S.jsx("span", { children: "Soita omalla kitaralla. Selain pyytää mikrofoniluvan; ääni käsitellään vain tässä selaimessa eikä sitä tallenneta." })
        ] }),
        /* @__PURE__ */ S.jsxs("button", { type: "button", className: "riff-choice", onClick: () => a.startBoard(), children: [
          /* @__PURE__ */ S.jsx("strong", { children: "Virtuaalikitara" }),
          /* @__PURE__ */ S.jsx("span", { children: "Soita otelaudalla hiirellä tai kosketuksella. Ei mikrofonia eikä soitinta." })
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("p", { className: "riff-tally", "data-testid": "tally", children: [
        "Oikea kitara: ",
        j("mic"),
        " · Virtuaalikitara: ",
        j("board")
      ] })
    ] });
  }
  return /* @__PURE__ */ S.jsxs("section", { className: "riff-game", "data-phase": s.phase, "data-input": s.input, "aria-labelledby": "riff-title", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "riff-top", children: [
      /* @__PURE__ */ S.jsx("h1", { id: "riff-title", children: "Riffikaiku" }),
      /* @__PURE__ */ S.jsxs("span", { children: [
        s.input === "mic" ? "Oikea kitara" : "Virtuaalikitara",
        s.micLabel && s.input === "mic" ? ` · ${s.micLabel}` : ""
      ] })
    ] }),
    s.phase === "permission" && /* @__PURE__ */ S.jsxs("div", { className: "riff-panel", children: [
      /* @__PURE__ */ S.jsx("p", { className: "riff-status", role: "status", children: cc.permission }),
      /* @__PURE__ */ S.jsx("p", { className: "riff-help", children: "Salli mikrofoni selaimen kysymyksestä. Voit myös pelata virtuaalikitaralla." }),
      /* @__PURE__ */ S.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.startBoard(), children: "Pelaa virtuaalikitaralla" }),
        /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.stop(), children: "Takaisin" })
      ] })
    ] }),
    s.phase === "error" && /* @__PURE__ */ S.jsxs("div", { className: "riff-panel", children: [
      /* @__PURE__ */ S.jsx("p", { className: "riff-status bad", role: "alert", "data-testid": "riff-error", children: s.error }),
      /* @__PURE__ */ S.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ S.jsx("button", { type: "button", className: "primary", onClick: () => a.startBoard(), children: "Pelaa virtuaalikitaralla" }),
        /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.startMic(), children: "Yritä mikrofonia uudelleen" }),
        /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.stop(), children: "Takaisin" })
      ] })
    ] }),
    s.phase === "mic-check" && /* @__PURE__ */ S.jsxs("div", { className: "riff-panel", children: [
      /* @__PURE__ */ S.jsx("h2", { children: "Mikrofonin testi" }),
      /* @__PURE__ */ S.jsxs("p", { children: [
        "Soita ",
        /* @__PURE__ */ S.jsxs("strong", { children: [
          "vapaa B-kieli (",
          vt(pl),
          ")"
        ] }),
        ", toiseksi ohuin kieli, ja anna sen soida hetki."
      ] }),
      /* @__PURE__ */ S.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee: ",
        /* @__PURE__ */ S.jsx("strong", { "data-testid": "heard", children: fc(s) })
      ] }),
      s.feedback && /* @__PURE__ */ S.jsx("p", { className: `riff-feedback ${s.feedback.tone}`, role: "status", "data-testid": "feedback", children: s.feedback.text }),
      /* @__PURE__ */ S.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ S.jsx("button", { type: "button", className: "primary", disabled: s.check === "waiting", onClick: () => a.continueAfterCheck(), children: s.check === "other" ? "Jatka silti" : "Jatka" }),
        /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.switchInput("board"), children: "Pelaa virtuaalikitaralla" }),
        /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.stop(), children: "Lopeta" })
      ] }),
      /* @__PURE__ */ S.jsx("p", { className: "riff-help", children: "Jos mitään ei kuulu: tarkista, että selain käyttää oikeaa mikrofonia, ja soita lähempänä. Kohina tai epäselvä ääni ei ole virhe." })
    ] }),
    s.phase === "level-complete" && /* @__PURE__ */ S.jsxs("div", { className: "riff-panel riff-cleared", "data-testid": "level-complete", children: [
      /* @__PURE__ */ S.jsxs("h2", { tabIndex: -1, ref: p, children: [
        "Onneksi olkoon! Läpäisit tason ",
        s.level.number,
        "!"
      ] }),
      /* @__PURE__ */ S.jsxs("p", { children: [
        "Kaikki kolme riffiä virheettömästi: ",
        s.level.riffs.map((j) => j.title).join(", "),
        "."
      ] }),
      s.level.number < ft.length ? /* @__PURE__ */ S.jsxs("p", { children: [
        "Seuraavaksi taso ",
        s.level.number + 1,
        ": ",
        ft[s.level.number].title.toLowerCase(),
        " (",
        dc(ft[s.level.number].strings.length),
        ")."
      ] }) : /* @__PURE__ */ S.jsxs("p", { children: [
        "Läpäisit kaikki ",
        ft.length,
        " tasoa."
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "riff-actions", children: [
        s.level.number < ft.length && /* @__PURE__ */ S.jsxs("button", { type: "button", className: "primary", onClick: () => a.continueLevel(), children: [
          "Jatka tasolle ",
          s.level.number + 1
        ] }),
        /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.repeatLevel(), children: "Harjoittele tasoa uudelleen" }),
        s.level.number === ft.length && /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.repeatLevel(1), children: "Aloita alusta tasolta 1" }),
        /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.stop(), children: "Lopeta" })
      ] }),
      /* @__PURE__ */ S.jsxs("p", { className: "riff-help", children: [
        "Läpäistyt tasot tällä tavalla: ",
        s.completedLevels.join(", ") || "–",
        ". Edistyminen tallentuu tähän selaimeen."
      ] })
    ] }),
    x && /* @__PURE__ */ S.jsxs("div", { className: "riff-panel riff-play", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "riff-heading", children: [
        /* @__PURE__ */ S.jsx("h2", { "data-testid": "level-heading", children: s.tutorial ? "Opastus: kaksi säveltä" : `Taso ${s.level.number} – Riffi ${s.riffNumber}/${s.level.riffs.length}` }),
        /* @__PURE__ */ S.jsx("span", { children: s.tutorial ? "B-kieli" : `${s.riff.title} · ${s.level.title}` })
      ] }),
      s.input === "mic" && /* @__PURE__ */ S.jsx("p", { className: "riff-instruction", "data-testid": "instruction", children: s.tutorial ? ft[0].instruction : s.level.instruction }),
      /* @__PURE__ */ S.jsx("p", { className: `riff-status ${s.phase === "listening" ? "turn" : s.phase === "success" ? "good" : ""}`, role: "status", "data-testid": "riff-status", children: s.phase === "listening" ? _ ? "Sinun vuorosi: soita riffi otelaudalla." : "Sinun vuorosi: mikrofoni kuuntelee." : s.phase === "paused" ? xp[s.pausedReason ?? "manual"] : cc[s.phase] }),
      /* @__PURE__ */ S.jsx("ol", { className: "riff-slots", "aria-label": `Soitettu ${s.index} / ${w} säveltä`, "data-testid": "slots", children: s.riff.midi.map((j, L) => {
        const $ = s.marks[L] ?? "pending", W = s.phase === "model-playing" && s.playing === L, J = $ !== "green" && $ !== "yellow" && L === s.index && s.phase === "listening";
        return /* @__PURE__ */ S.jsxs(
          "li",
          {
            className: `${$}${J ? " current" : ""}${W ? " model" : ""}`,
            "data-mark": $,
            "aria-label": `${L + 1}. sävel: ${Sp[$]}${J ? ", vuorossa" : ""}`,
            children: [
              /* @__PURE__ */ S.jsx("span", { className: "slot-number", "aria-hidden": "true", children: L + 1 }),
              /* @__PURE__ */ S.jsx("span", { className: "slot-note", "aria-hidden": "true", children: $ === "green" || $ === "yellow" ? vt(j) : W ? "♪" : J && $ === "pending" ? "?" : uo[$] || "·" }),
              uo[$] && ($ === "green" || $ === "yellow") && /* @__PURE__ */ S.jsx("span", { className: "slot-symbol", "aria-hidden": "true", children: uo[$] })
            ]
          },
          L
        );
      }) }),
      /* @__PURE__ */ S.jsxs("p", { className: "riff-count", "data-testid": "count", children: [
        "Soitettu ",
        s.index,
        "/",
        w
      ] }),
      s.input === "mic" && s.phase !== "paused" && /* @__PURE__ */ S.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee: ",
        /* @__PURE__ */ S.jsx("strong", { "data-testid": "heard", children: s.phase === "model-playing" ? "tauolla mallin ajan" : fc(s) })
      ] }),
      s.feedback && /* @__PURE__ */ S.jsx("p", { className: `riff-feedback ${s.feedback.tone}`, role: "status", "data-testid": "feedback", children: s.feedback.text }),
      s.hint && /* @__PURE__ */ S.jsxs("div", { className: "riff-hint", "data-testid": "hint", children: [
        /* @__PURE__ */ S.jsxs("p", { children: [
          /* @__PURE__ */ S.jsx("strong", { children: "Sävelet:" }),
          " ",
          s.riff.midi.map(vt).join(" – ")
        ] }),
        /* @__PURE__ */ S.jsx("p", { children: s.riff.tip }),
        /* @__PURE__ */ S.jsx("p", { className: "riff-help", children: _ ? "Sama sävel löytyy usein myös toiselta kieleltä; kaikki samat sävelkorkeudet kelpaavat." : "Otelauta ehdottaa soittopaikan. Mikrofoni kuulee vain sävelkorkeuden, ei kieltä eikä sormitusta." })
      ] }),
      (_ || s.hint) && /* @__PURE__ */ S.jsxs("div", { className: `riff-board strings-${F.strings.length}`, "data-testid": "board", children: [
        /* @__PURE__ */ S.jsx(
          kp,
          {
            area: F,
            marks: G,
            disabled: !M,
            onAnswer: I,
            caption: _ ? M ? `Virtuaalikitara: ${dc(F.strings.length)}, nauhat 0–5` : "Virtuaalikitara: odota mallin loppuun" : "Sävelvihje otelaudalla"
          }
        ),
        O
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "riff-actions", children: [
        s.phase === "paused" && /* @__PURE__ */ S.jsx("button", { type: "button", className: "primary", onClick: () => a.resume(), children: "Jatka" }),
        s.phase === "success" && /* @__PURE__ */ S.jsx("button", { type: "button", className: "primary", onClick: () => a.next(), children: s.tutorial ? "Aloita taso 1" : "Seuraava riffi" }),
        s.phase === "retry" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsx("button", { type: "button", className: "primary", onClick: () => a.retry(!0), children: "Kuuntele ja yritä uudelleen" }),
          /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.retry(!1), children: "Yritä heti uudelleen" })
        ] }),
        s.phase !== "paused" && /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.replay(), disabled: s.phase === "model-playing", children: s.phase === "success" || s.phase === "retry" ? "Kuuntele riffi" : "Kuuntele uudelleen" }),
        (s.phase === "listening" || s.phase === "output-settling") && /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.restart(), disabled: s.index === 0 && !s.marks.includes("red"), children: "Aloita alusta" }),
        s.phase !== "paused" && /* @__PURE__ */ S.jsx("button", { type: "button", "aria-pressed": s.hint, onClick: () => a.toggleHint(), children: s.hint ? "Piilota sävelvihje" : "Näytä sävelvihje" }),
        s.phase !== "paused" && !["success", "retry"].includes(s.phase) && /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.pause("manual"), children: "Tauko" }),
        /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => a.stop(), children: "Lopeta" })
      ] }),
      /* @__PURE__ */ S.jsxs("p", { className: "riff-switch", children: [
        _ ? /* @__PURE__ */ S.jsx("button", { type: "button", className: "link", onClick: () => a.switchInput("mic"), children: "Vaihda oikeaan kitaraan (mikrofoni)" }) : /* @__PURE__ */ S.jsx("button", { type: "button", className: "link", onClick: () => a.switchInput("board"), children: "Vaihda virtuaalikitaraan" }),
        /* @__PURE__ */ S.jsxs("span", { children: [
          " · Läpäistyt tasot tällä tavalla: ",
          /* @__PURE__ */ S.jsxs("span", { "data-testid": "levels-done", children: [
            s.completedLevels.length,
            "/",
            ft.length
          ] })
        ] })
      ] })
    ] })
  ] });
}
const pc = "musiikin-kartta:riffikaiku:v1", Cp = ["mic", "board"], Tp = () => ({
  version: 1,
  tutorialDone: !1,
  input: "mic",
  fullBoard: !1,
  stats: { mic: {}, board: {} },
  results: [],
  run: { mic: { level: 1, passed: [] }, board: { level: 1, passed: [] } },
  levels: { mic: [], board: [] }
}), ni = (a) => typeof a == "number" && Number.isFinite(a) && a >= 0, gc = (a) => a === "mic" || a === "board", ml = (a) => Number.isInteger(a) && ft.some((s) => s.number === a), Np = (a) => {
  const s = a;
  return !!s && typeof s == "object" && ni(s.done) && ni(s.solo) && ni(s.lastAt) && s.solo <= s.done && (s.passed === void 0 || ni(s.passed) && s.passed <= s.done && s.solo <= s.passed);
}, Mp = (a) => {
  const s = a;
  return !!s && typeof s == "object" && typeof s.riff == "string" && gc(s.input) && typeof s.hint == "boolean" && ["wrong", "octave", "replays", "ms", "at"].every((o) => ni(s[o])) && (s.passed === void 0 || typeof s.passed == "boolean") && (s.level === void 0 || ml(s.level));
};
function jp(a) {
  const s = Tp();
  if (!a) return s;
  let o;
  try {
    o = JSON.parse(a);
  } catch {
    return s;
  }
  const c = o;
  if (!c || c.version !== 1) return s;
  s.tutorialDone = c.tutorialDone === !0, s.fullBoard = c.fullBoard === !0, gc(c.input) && (s.input = c.input);
  for (const d of Cp) {
    const p = c.stats?.[d];
    if (p && typeof p == "object")
      for (const [_, M] of Object.entries(p)) Np(M) && (s.stats[d][_] = { ...M });
    const w = c.run?.[d];
    if (w && ml(w.level) && Array.isArray(w.passed)) {
      const _ = ft.find((M) => M.number === w.level).riffs.map((M) => M.id);
      s.run[d] = { level: w.level, passed: _.filter((M) => w.passed.includes(M)) };
    }
    const x = c.levels?.[d];
    Array.isArray(x) && (s.levels[d] = [...new Set(x.filter(ml))].sort((_, M) => _ - M));
  }
  return Array.isArray(c.results) && (s.results = c.results.filter(Mp).slice(-300)), s;
}
class Rp {
  /** storage puuttuu tai heittää (yksityinen ikkuna, estetty tallennus): peli toimii ilman tallennusta. */
  constructor(s) {
    this.storage = s;
    let o = null;
    try {
      o = s?.getItem(pc) ?? null;
    } catch {
      o = null;
    }
    this.data = jp(o);
  }
  storage;
  data;
  save() {
    try {
      this.storage?.setItem(pc, JSON.stringify(this.data));
    } catch {
    }
  }
  setInput(s) {
    this.data.input !== s && (this.data.input = s, this.save());
  }
  setFullBoard(s) {
    this.data.fullBoard !== s && (this.data.fullBoard = s, this.save());
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
    return ft.find((o) => o.number === this.data.run[s].level);
  }
  /** Tasokierroksen seuraava läpäisemätön riffi, tai null kun kaikki kolme on läpäisty. */
  currentRiff(s) {
    const o = this.data.run[s];
    return this.level(s).riffs.find((c) => !o.passed.includes(c.id)) ?? null;
  }
  /** Aloittaa tason alusta (uusi kierros). Läpäistyt tasot säilyvät. */
  startLevel(s, o) {
    ml(o) && (this.data.run[s] = { level: o, passed: [] }, this.save());
  }
  /**
   * Kirjaa yhden loppuun soitetun riffiyrityksen kerran. Opastus merkitään tehdyksi, mutta se ei ole
   * tasotulos. Palauttaa levelComplete = true sillä kirjauksella, jolla tason kolmas riffi läpäistiin.
   */
  record(s) {
    if (s.riff === hl.id)
      return this.finishTutorial(), { levelComplete: !1 };
    const { input: o } = s, c = s.passed === !0, d = this.data.stats[o], p = d[s.riff] ?? { done: 0, solo: 0, passed: 0 };
    d[s.riff] = {
      done: p.done + 1,
      passed: (p.passed ?? 0) + (c ? 1 : 0),
      solo: p.solo + (c && !s.hint ? 1 : 0),
      lastAt: s.at
    }, this.data.results = [...this.data.results, { ...s, level: s.level ?? ip(s.riff)?.number }].slice(-300);
    let w = !1;
    const x = this.data.run[o], _ = this.level(o);
    return c && _.riffs.some((M) => M.id === s.riff) && !x.passed.includes(s.riff) && (x.passed = _.riffs.map((M) => M.id).filter((M) => M === s.riff || x.passed.includes(M)), x.passed.length === _.riffs.length && (w = !0, this.data.levels[o].includes(_.number) || (this.data.levels[o] = [...this.data.levels[o], _.number].sort((M, F) => M - F)))), this.save(), { levelComplete: w };
  }
}
function Lp() {
  try {
    return localStorage;
  } catch {
    return;
  }
}
function Pp() {
  const [a] = He.useState(() => new op(new ep(), new Rp(Lp())));
  return He.useEffect(() => () => {
    a.stop();
  }, [a]), /* @__PURE__ */ S.jsx(_p, { game: a });
}
window.addEventListener("pagehide", () => Xd());
const hc = document.getElementById("riffikaiku");
hc && Ed.createRoot(hc).render(/* @__PURE__ */ S.jsx(He.StrictMode, { children: /* @__PURE__ */ S.jsx(Pp, {}) }));
//# sourceMappingURL=app.js.map
