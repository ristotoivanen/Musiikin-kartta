function Md(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var oo = { exports: {} }, ri = {}, ao = { exports: {} }, we = {};
var ec;
function Rd() {
  if (ec) return we;
  ec = 1;
  var u = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), _ = Symbol.iterator;
  function z(y) {
    return y === null || typeof y != "object" ? null : (y = _ && y[_] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var V = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, P = {};
  function O(y, j, ue) {
    this.props = y, this.context = j, this.refs = P, this.updater = ue || V;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(y, j) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, j, "setState");
  }, O.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function q() {
  }
  q.prototype = O.prototype;
  function Q(y, j, ue) {
    this.props = y, this.context = j, this.refs = P, this.updater = ue || V;
  }
  var ee = Q.prototype = new q();
  ee.constructor = Q, C(ee, O.prototype), ee.isPureReactComponent = !0;
  var ae = Array.isArray, J = Object.prototype.hasOwnProperty, U = { current: null }, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function he(y, j, ue) {
    var de, pe = {}, me = null, I = null;
    if (j != null) for (de in j.ref !== void 0 && (I = j.ref), j.key !== void 0 && (me = "" + j.key), j) J.call(j, de) && !ne.hasOwnProperty(de) && (pe[de] = j[de]);
    var B = arguments.length - 2;
    if (B === 1) pe.children = ue;
    else if (1 < B) {
      for (var A = Array(B), Y = 0; Y < B; Y++) A[Y] = arguments[Y + 2];
      pe.children = A;
    }
    if (y && y.defaultProps) for (de in B = y.defaultProps, B) pe[de] === void 0 && (pe[de] = B[de]);
    return { $$typeof: u, type: y, key: me, ref: I, props: pe, _owner: U.current };
  }
  function Ne(y, j) {
    return { $$typeof: u, type: y.type, key: j, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function xe(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function We(y) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(ue) {
      return j[ue];
    });
  }
  var Oe = /\/+/g;
  function Me(y, j) {
    return typeof y == "object" && y !== null && y.key != null ? We("" + y.key) : j.toString(36);
  }
  function De(y, j, ue, de, pe) {
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
          case l:
            I = !0;
        }
    }
    if (I) return I = y, pe = pe(I), y = de === "" ? "." + Me(I, 0) : de, ae(pe) ? (ue = "", y != null && (ue = y.replace(Oe, "$&/") + "/"), De(pe, j, ue, "", function(Y) {
      return Y;
    })) : pe != null && (xe(pe) && (pe = Ne(pe, ue + (!pe.key || I && I.key === pe.key ? "" : ("" + pe.key).replace(Oe, "$&/") + "/") + y)), j.push(pe)), 1;
    if (I = 0, de = de === "" ? "." : de + ":", ae(y)) for (var B = 0; B < y.length; B++) {
      me = y[B];
      var A = de + Me(me, B);
      I += De(me, j, ue, A, pe);
    }
    else if (A = z(y), typeof A == "function") for (y = A.call(y), B = 0; !(me = y.next()).done; ) me = me.value, A = de + Me(me, B++), I += De(me, j, ue, A, pe);
    else if (me === "object") throw j = String(y), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return I;
  }
  function Ke(y, j, ue) {
    if (y == null) return y;
    var de = [], pe = 0;
    return De(y, de, "", "", function(me) {
      return j.call(ue, me, pe++);
    }), de;
  }
  function Re(y) {
    if (y._status === -1) {
      var j = y._result;
      j = j(), j.then(function(ue) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = ue);
      }, function(ue) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = ue);
      }), y._status === -1 && (y._status = 0, y._result = j);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var Ee = { current: null }, D = { transition: null }, Z = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: D, ReactCurrentOwner: U };
  function $() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return we.Children = { map: Ke, forEach: function(y, j, ue) {
    Ke(y, function() {
      j.apply(this, arguments);
    }, ue);
  }, count: function(y) {
    var j = 0;
    return Ke(y, function() {
      j++;
    }), j;
  }, toArray: function(y) {
    return Ke(y, function(j) {
      return j;
    }) || [];
  }, only: function(y) {
    if (!xe(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, we.Component = O, we.Fragment = o, we.Profiler = f, we.PureComponent = Q, we.StrictMode = c, we.Suspense = E, we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, we.act = $, we.cloneElement = function(y, j, ue) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var de = C({}, y.props), pe = y.key, me = y.ref, I = y._owner;
    if (j != null) {
      if (j.ref !== void 0 && (me = j.ref, I = U.current), j.key !== void 0 && (pe = "" + j.key), y.type && y.type.defaultProps) var B = y.type.defaultProps;
      for (A in j) J.call(j, A) && !ne.hasOwnProperty(A) && (de[A] = j[A] === void 0 && B !== void 0 ? B[A] : j[A]);
    }
    var A = arguments.length - 2;
    if (A === 1) de.children = ue;
    else if (1 < A) {
      B = Array(A);
      for (var Y = 0; Y < A; Y++) B[Y] = arguments[Y + 2];
      de.children = B;
    }
    return { $$typeof: u, type: y.type, key: pe, ref: me, props: de, _owner: I };
  }, we.createContext = function(y) {
    return y = { $$typeof: w, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: h, _context: y }, y.Consumer = y;
  }, we.createElement = he, we.createFactory = function(y) {
    var j = he.bind(null, y);
    return j.type = y, j;
  }, we.createRef = function() {
    return { current: null };
  }, we.forwardRef = function(y) {
    return { $$typeof: S, render: y };
  }, we.isValidElement = xe, we.lazy = function(y) {
    return { $$typeof: R, _payload: { _status: -1, _result: y }, _init: Re };
  }, we.memo = function(y, j) {
    return { $$typeof: T, type: y, compare: j === void 0 ? null : j };
  }, we.startTransition = function(y) {
    var j = D.transition;
    D.transition = {};
    try {
      y();
    } finally {
      D.transition = j;
    }
  }, we.unstable_act = $, we.useCallback = function(y, j) {
    return Ee.current.useCallback(y, j);
  }, we.useContext = function(y) {
    return Ee.current.useContext(y);
  }, we.useDebugValue = function() {
  }, we.useDeferredValue = function(y) {
    return Ee.current.useDeferredValue(y);
  }, we.useEffect = function(y, j) {
    return Ee.current.useEffect(y, j);
  }, we.useId = function() {
    return Ee.current.useId();
  }, we.useImperativeHandle = function(y, j, ue) {
    return Ee.current.useImperativeHandle(y, j, ue);
  }, we.useInsertionEffect = function(y, j) {
    return Ee.current.useInsertionEffect(y, j);
  }, we.useLayoutEffect = function(y, j) {
    return Ee.current.useLayoutEffect(y, j);
  }, we.useMemo = function(y, j) {
    return Ee.current.useMemo(y, j);
  }, we.useReducer = function(y, j, ue) {
    return Ee.current.useReducer(y, j, ue);
  }, we.useRef = function(y) {
    return Ee.current.useRef(y);
  }, we.useState = function(y) {
    return Ee.current.useState(y);
  }, we.useSyncExternalStore = function(y, j, ue) {
    return Ee.current.useSyncExternalStore(y, j, ue);
  }, we.useTransition = function() {
    return Ee.current.useTransition();
  }, we.version = "18.3.1", we;
}
var tc;
function go() {
  return tc || (tc = 1, ao.exports = Rd()), ao.exports;
}
var nc;
function Ld() {
  if (nc) return ri;
  nc = 1;
  var u = go(), l = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, f = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(S, E, T) {
    var R, _ = {}, z = null, V = null;
    T !== void 0 && (z = "" + T), E.key !== void 0 && (z = "" + E.key), E.ref !== void 0 && (V = E.ref);
    for (R in E) c.call(E, R) && !h.hasOwnProperty(R) && (_[R] = E[R]);
    if (S && S.defaultProps) for (R in E = S.defaultProps, E) _[R] === void 0 && (_[R] = E[R]);
    return { $$typeof: l, type: S, key: z, ref: V, props: _, _owner: f.current };
  }
  return ri.Fragment = o, ri.jsx = w, ri.jsxs = w, ri;
}
var rc;
function Pd() {
  return rc || (rc = 1, oo.exports = Ld()), oo.exports;
}
var p = Pd(), He = go(), yl = {}, uo = { exports: {} }, St = {}, co = { exports: {} }, fo = {};
var ic;
function Ad() {
  return ic || (ic = 1, (function(u) {
    function l(D, Z) {
      var $ = D.length;
      D.push(Z);
      e: for (; 0 < $; ) {
        var y = $ - 1 >>> 1, j = D[y];
        if (0 < f(j, Z)) D[y] = Z, D[$] = j, $ = y;
        else break e;
      }
    }
    function o(D) {
      return D.length === 0 ? null : D[0];
    }
    function c(D) {
      if (D.length === 0) return null;
      var Z = D[0], $ = D.pop();
      if ($ !== Z) {
        D[0] = $;
        e: for (var y = 0, j = D.length, ue = j >>> 1; y < ue; ) {
          var de = 2 * (y + 1) - 1, pe = D[de], me = de + 1, I = D[me];
          if (0 > f(pe, $)) me < j && 0 > f(I, pe) ? (D[y] = I, D[me] = $, y = me) : (D[y] = pe, D[de] = $, y = de);
          else if (me < j && 0 > f(I, $)) D[y] = I, D[me] = $, y = me;
          else break e;
        }
      }
      return Z;
    }
    function f(D, Z) {
      var $ = D.sortIndex - Z.sortIndex;
      return $ !== 0 ? $ : D.id - Z.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function() {
        return h.now();
      };
    } else {
      var w = Date, S = w.now();
      u.unstable_now = function() {
        return w.now() - S;
      };
    }
    var E = [], T = [], R = 1, _ = null, z = 3, V = !1, C = !1, P = !1, O = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(D) {
      for (var Z = o(T); Z !== null; ) {
        if (Z.callback === null) c(T);
        else if (Z.startTime <= D) c(T), Z.sortIndex = Z.expirationTime, l(E, Z);
        else break;
        Z = o(T);
      }
    }
    function ae(D) {
      if (P = !1, ee(D), !C) if (o(E) !== null) C = !0, Re(J);
      else {
        var Z = o(T);
        Z !== null && Ee(ae, Z.startTime - D);
      }
    }
    function J(D, Z) {
      C = !1, P && (P = !1, q(he), he = -1), V = !0;
      var $ = z;
      try {
        for (ee(Z), _ = o(E); _ !== null && (!(_.expirationTime > Z) || D && !We()); ) {
          var y = _.callback;
          if (typeof y == "function") {
            _.callback = null, z = _.priorityLevel;
            var j = y(_.expirationTime <= Z);
            Z = u.unstable_now(), typeof j == "function" ? _.callback = j : _ === o(E) && c(E), ee(Z);
          } else c(E);
          _ = o(E);
        }
        if (_ !== null) var ue = !0;
        else {
          var de = o(T);
          de !== null && Ee(ae, de.startTime - Z), ue = !1;
        }
        return ue;
      } finally {
        _ = null, z = $, V = !1;
      }
    }
    var U = !1, ne = null, he = -1, Ne = 5, xe = -1;
    function We() {
      return !(u.unstable_now() - xe < Ne);
    }
    function Oe() {
      if (ne !== null) {
        var D = u.unstable_now();
        xe = D;
        var Z = !0;
        try {
          Z = ne(!0, D);
        } finally {
          Z ? Me() : (U = !1, ne = null);
        }
      } else U = !1;
    }
    var Me;
    if (typeof Q == "function") Me = function() {
      Q(Oe);
    };
    else if (typeof MessageChannel < "u") {
      var De = new MessageChannel(), Ke = De.port2;
      De.port1.onmessage = Oe, Me = function() {
        Ke.postMessage(null);
      };
    } else Me = function() {
      O(Oe, 0);
    };
    function Re(D) {
      ne = D, U || (U = !0, Me());
    }
    function Ee(D, Z) {
      he = O(function() {
        D(u.unstable_now());
      }, Z);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, u.unstable_continueExecution = function() {
      C || V || (C = !0, Re(J));
    }, u.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ne = 0 < D ? Math.floor(1e3 / D) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, u.unstable_getFirstCallbackNode = function() {
      return o(E);
    }, u.unstable_next = function(D) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = z;
      }
      var $ = z;
      z = Z;
      try {
        return D();
      } finally {
        z = $;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(D, Z) {
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
      var $ = z;
      z = D;
      try {
        return Z();
      } finally {
        z = $;
      }
    }, u.unstable_scheduleCallback = function(D, Z, $) {
      var y = u.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? y + $ : y) : $ = y, D) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = $ + j, D = { id: R++, callback: Z, priorityLevel: D, startTime: $, expirationTime: j, sortIndex: -1 }, $ > y ? (D.sortIndex = $, l(T, D), o(E) === null && D === o(T) && (P ? (q(he), he = -1) : P = !0, Ee(ae, $ - y))) : (D.sortIndex = j, l(E, D), C || V || (C = !0, Re(J))), D;
    }, u.unstable_shouldYield = We, u.unstable_wrapCallback = function(D) {
      var Z = z;
      return function() {
        var $ = z;
        z = Z;
        try {
          return D.apply(this, arguments);
        } finally {
          z = $;
        }
      };
    };
  })(fo)), fo;
}
var lc;
function zd() {
  return lc || (lc = 1, co.exports = Ad()), co.exports;
}
var sc;
function Id() {
  if (sc) return St;
  sc = 1;
  var u = go(), l = zd();
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
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), E = Object.prototype.hasOwnProperty, T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, R = {}, _ = {};
  function z(e) {
    return E.call(_, e) ? !0 : E.call(R, e) ? !1 : T.test(e) ? _[e] = !0 : (R[e] = !0, !1);
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
  function C(e, t, n, r) {
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
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    O[e] = new P(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    O[t] = new P(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    O[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    O[e] = new P(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    O[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    O[e] = new P(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    O[e] = new P(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    O[e] = new P(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    O[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var q = /[\-:]([a-z])/g;
  function Q(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      q,
      Q
    );
    O[t] = new P(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(q, Q);
    O[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(q, Q);
    O[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    O[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), O.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    O[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ee(e, t, n, r) {
    var i = O.hasOwnProperty(t) ? O[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (C(t, n, i, r) && (n = null), r || i === null ? z(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ae = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, J = /* @__PURE__ */ Symbol.for("react.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), ne = /* @__PURE__ */ Symbol.for("react.fragment"), he = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ne = /* @__PURE__ */ Symbol.for("react.profiler"), xe = /* @__PURE__ */ Symbol.for("react.provider"), We = /* @__PURE__ */ Symbol.for("react.context"), Oe = /* @__PURE__ */ Symbol.for("react.forward_ref"), Me = /* @__PURE__ */ Symbol.for("react.suspense"), De = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ke = /* @__PURE__ */ Symbol.for("react.memo"), Re = /* @__PURE__ */ Symbol.for("react.lazy"), Ee = /* @__PURE__ */ Symbol.for("react.offscreen"), D = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var $ = Object.assign, y;
  function j(e) {
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
        } catch (x) {
          var r = x;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (x) {
          r = x;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (x) {
          r = x;
        }
        e();
      }
    } catch (x) {
      if (x && r && typeof x.stack == "string") {
        for (var i = x.stack.split(`
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
    return (e = e ? e.displayName || e.name : "") ? j(e) : "";
  }
  function pe(e) {
    switch (e.tag) {
      case 5:
        return j(e.type);
      case 16:
        return j("Lazy");
      case 13:
        return j("Suspense");
      case 19:
        return j("SuspenseList");
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
      case U:
        return "Portal";
      case Ne:
        return "Profiler";
      case he:
        return "StrictMode";
      case Me:
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
  function A(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Y(e) {
    var t = A(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    e._valueTracker || (e._valueTracker = Y(e));
  }
  function b(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = A(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
    return $({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ve(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = B(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ge(e, t) {
    t = t.checked, t != null && ee(e, "checked", t, !1);
  }
  function Te(e, t) {
    ge(e, t);
    var n = B(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ie(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ie(e, t.type, B(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
  function Nt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return $({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ve(e, t) {
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
  function je(e, t) {
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
  var It, Zt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
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
  }, wr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kt).forEach(function(e) {
    wr.forEach(function(t) {
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
  var oe = $({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  function be(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var en = null, dt = null, Qt = null;
  function Qn(e) {
    if (e = Ur(e)) {
      if (typeof en != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = Pi(t), en(e.stateNode, e.type, t));
    }
  }
  function Gn(e) {
    dt ? Qt ? Qt.push(e) : Qt = [e] : dt = e;
  }
  function qn() {
    if (dt) {
      var e = dt, t = Qt;
      if (Qt = dt = null, Qn(e), t) for (e = 0; e < t.length; e++) Qn(t[e]);
    }
  }
  function wo(e, t) {
    return e(t);
  }
  function xo() {
  }
  var _l = !1;
  function So(e, t, n) {
    if (_l) return e(t, n);
    _l = !0;
    try {
      return wo(e, t, n);
    } finally {
      _l = !1, (dt !== null || Qt !== null) && (xo(), qn());
    }
  }
  function xr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Pi(n);
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
  var Tl = !1;
  if (S) try {
    var Sr = {};
    Object.defineProperty(Sr, "passive", { get: function() {
      Tl = !0;
    } }), window.addEventListener("test", Sr, Sr), window.removeEventListener("test", Sr, Sr);
  } catch {
    Tl = !1;
  }
  function zc(e, t, n, r, i, s, a, d, m) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, x);
    } catch (M) {
      this.onError(M);
    }
  }
  var Er = !1, ci = null, fi = !1, jl = null, Ic = { onError: function(e) {
    Er = !0, ci = e;
  } };
  function Fc(e, t, n, r, i, s, a, d, m) {
    Er = !1, ci = null, zc.apply(Ic, arguments);
  }
  function Oc(e, t, n, r, i, s, a, d, m) {
    if (Fc.apply(this, arguments), Er) {
      if (Er) {
        var x = ci;
        Er = !1, ci = null;
      } else throw Error(o(198));
      fi || (fi = !0, jl = x);
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
  function Eo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function _o(e) {
    if (Pn(e) !== e) throw Error(o(188));
  }
  function Dc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Pn(e), t === null) throw Error(o(188));
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
          if (s === n) return _o(i), e;
          if (s === r) return _o(i), t;
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
  function To(e) {
    return e = Dc(e), e !== null ? jo(e) : null;
  }
  function jo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = jo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Co = l.unstable_scheduleCallback, No = l.unstable_cancelCallback, Bc = l.unstable_shouldYield, Vc = l.unstable_requestPaint, Je = l.unstable_now, $c = l.unstable_getCurrentPriorityLevel, Cl = l.unstable_ImmediatePriority, Mo = l.unstable_UserBlockingPriority, di = l.unstable_NormalPriority, Uc = l.unstable_LowPriority, Ro = l.unstable_IdlePriority, hi = null, Gt = null;
  function Hc(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(hi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ft = Math.clz32 ? Math.clz32 : Qc, Wc = Math.log, Kc = Math.LN2;
  function Qc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wc(e) / Kc | 0) | 0;
  }
  var pi = 64, mi = 4194304;
  function _r(e) {
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
  function vi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, s = e.pingedLanes, a = n & 268435455;
    if (a !== 0) {
      var d = a & ~i;
      d !== 0 ? r = _r(d) : (s &= a, s !== 0 && (r = _r(s)));
    } else a = n & ~i, a !== 0 ? r = _r(a) : s !== 0 && (r = _r(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ft(t), i = 1 << n, r |= e[n], t &= ~i;
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
      var a = 31 - Ft(s), d = 1 << a, m = i[a];
      m === -1 ? ((d & n) === 0 || (d & r) !== 0) && (i[a] = Gc(d, t)) : m <= t && (e.expiredLanes |= d), s &= ~d;
    }
  }
  function Nl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Lo() {
    var e = pi;
    return pi <<= 1, (pi & 4194240) === 0 && (pi = 64), e;
  }
  function Ml(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Tr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ft(t), e[t] = n;
  }
  function Yc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Ft(n), s = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
    }
  }
  function Rl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Ft(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var Ce = 0;
  function Po(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ao, Ll, zo, Io, Fo, Pl = !1, yi = [], dn = null, hn = null, pn = null, jr = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), mn = [], Xc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Oo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        dn = null;
        break;
      case "dragenter":
      case "dragleave":
        hn = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        jr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cr.delete(t.pointerId);
    }
  }
  function Nr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = Ur(t), t !== null && Ll(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Jc(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return dn = Nr(dn, e, t, n, r, i), !0;
      case "dragenter":
        return hn = Nr(hn, e, t, n, r, i), !0;
      case "mouseover":
        return pn = Nr(pn, e, t, n, r, i), !0;
      case "pointerover":
        var s = i.pointerId;
        return jr.set(s, Nr(jr.get(s) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return s = i.pointerId, Cr.set(s, Nr(Cr.get(s) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Do(e) {
    var t = An(e.target);
    if (t !== null) {
      var n = Pn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Eo(n), t !== null) {
            e.blockedOn = t, Fo(e.priority, function() {
              zo(n);
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
  function gi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Pe = r, n.target.dispatchEvent(r), Pe = null;
      } else return t = Ur(n), t !== null && Ll(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Bo(e, t, n) {
    gi(e) && n.delete(t);
  }
  function Zc() {
    Pl = !1, dn !== null && gi(dn) && (dn = null), hn !== null && gi(hn) && (hn = null), pn !== null && gi(pn) && (pn = null), jr.forEach(Bo), Cr.forEach(Bo);
  }
  function Mr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Pl || (Pl = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Zc)));
  }
  function Rr(e) {
    function t(i) {
      return Mr(i, e);
    }
    if (0 < yi.length) {
      Mr(yi[0], e);
      for (var n = 1; n < yi.length; n++) {
        var r = yi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (dn !== null && Mr(dn, e), hn !== null && Mr(hn, e), pn !== null && Mr(pn, e), jr.forEach(t), Cr.forEach(t), n = 0; n < mn.length; n++) r = mn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < mn.length && (n = mn[0], n.blockedOn === null); ) Do(n), n.blockedOn === null && mn.shift();
  }
  var Yn = ae.ReactCurrentBatchConfig, ki = !0;
  function bc(e, t, n, r) {
    var i = Ce, s = Yn.transition;
    Yn.transition = null;
    try {
      Ce = 1, Al(e, t, n, r);
    } finally {
      Ce = i, Yn.transition = s;
    }
  }
  function ef(e, t, n, r) {
    var i = Ce, s = Yn.transition;
    Yn.transition = null;
    try {
      Ce = 4, Al(e, t, n, r);
    } finally {
      Ce = i, Yn.transition = s;
    }
  }
  function Al(e, t, n, r) {
    if (ki) {
      var i = zl(e, t, n, r);
      if (i === null) Jl(e, t, r, wi, n), Oo(e, r);
      else if (Jc(i, e, t, n, r)) r.stopPropagation();
      else if (Oo(e, r), t & 4 && -1 < Xc.indexOf(e)) {
        for (; i !== null; ) {
          var s = Ur(i);
          if (s !== null && Ao(s), s = zl(e, t, n, r), s === null && Jl(e, t, r, wi, n), s === i) break;
          i = s;
        }
        i !== null && r.stopPropagation();
      } else Jl(e, t, r, null, n);
    }
  }
  var wi = null;
  function zl(e, t, n, r) {
    if (wi = null, e = be(r), e = An(e), e !== null) if (t = Pn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Eo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return wi = e, null;
  }
  function Vo(e) {
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
          case Cl:
            return 1;
          case Mo:
            return 4;
          case di:
          case Uc:
            return 16;
          case Ro:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var vn = null, Il = null, xi = null;
  function $o() {
    if (xi) return xi;
    var e, t = Il, n = t.length, r, i = "value" in vn ? vn.value : vn.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === i[s - r]; r++) ;
    return xi = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Si(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ei() {
    return !0;
  }
  function Uo() {
    return !1;
  }
  function Et(e) {
    function t(n, r, i, s, a) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
      for (var d in e) e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(s) : s[d]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ei : Uo, this.isPropagationStopped = Uo, this;
    }
    return $(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ei);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ei);
    }, persist: function() {
    }, isPersistent: Ei }), t;
  }
  var Xn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Fl = Et(Xn), Lr = $({}, Xn, { view: 0, detail: 0 }), tf = Et(Lr), Ol, Dl, Pr, _i = $({}, Lr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Pr && (Pr && e.type === "mousemove" ? (Ol = e.screenX - Pr.screenX, Dl = e.screenY - Pr.screenY) : Dl = Ol = 0, Pr = e), Ol);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Dl;
  } }), Ho = Et(_i), nf = $({}, _i, { dataTransfer: 0 }), rf = Et(nf), lf = $({}, Lr, { relatedTarget: 0 }), Bl = Et(lf), sf = $({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), of = Et(sf), af = $({}, Xn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), uf = Et(af), cf = $({}, Xn, { data: 0 }), Wo = Et(cf), ff = {
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
  function Vl() {
    return pf;
  }
  var mf = $({}, Lr, { key: function(e) {
    if (e.key) {
      var t = ff[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Si(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? df[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vl, charCode: function(e) {
    return e.type === "keypress" ? Si(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Si(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), vf = Et(mf), yf = $({}, _i, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ko = Et(yf), gf = $({}, Lr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vl }), kf = Et(gf), wf = $({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), xf = Et(wf), Sf = $({}, _i, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ef = Et(Sf), _f = [9, 13, 27, 32], $l = S && "CompositionEvent" in window, Ar = null;
  S && "documentMode" in document && (Ar = document.documentMode);
  var Tf = S && "TextEvent" in window && !Ar, Qo = S && (!$l || Ar && 8 < Ar && 11 >= Ar), Go = " ", qo = !1;
  function Yo(e, t) {
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
  function Xo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Jn = !1;
  function jf(e, t) {
    switch (e) {
      case "compositionend":
        return Xo(t);
      case "keypress":
        return t.which !== 32 ? null : (qo = !0, Go);
      case "textInput":
        return e = t.data, e === Go && qo ? null : e;
      default:
        return null;
    }
  }
  function Cf(e, t) {
    if (Jn) return e === "compositionend" || !$l && Yo(e, t) ? (e = $o(), xi = Il = vn = null, Jn = !1, e) : null;
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
        return Qo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Nf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Jo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Nf[e.type] : t === "textarea";
  }
  function Zo(e, t, n, r) {
    Gn(r), t = Mi(t, "onChange"), 0 < t.length && (n = new Fl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var zr = null, Ir = null;
  function Mf(e) {
    va(e, 0);
  }
  function Ti(e) {
    var t = nr(e);
    if (b(t)) return e;
  }
  function Rf(e, t) {
    if (e === "change") return t;
  }
  var bo = !1;
  if (S) {
    var Ul;
    if (S) {
      var Hl = "oninput" in document;
      if (!Hl) {
        var ea = document.createElement("div");
        ea.setAttribute("oninput", "return;"), Hl = typeof ea.oninput == "function";
      }
      Ul = Hl;
    } else Ul = !1;
    bo = Ul && (!document.documentMode || 9 < document.documentMode);
  }
  function ta() {
    zr && (zr.detachEvent("onpropertychange", na), Ir = zr = null);
  }
  function na(e) {
    if (e.propertyName === "value" && Ti(Ir)) {
      var t = [];
      Zo(t, Ir, e, be(e)), So(Mf, t);
    }
  }
  function Lf(e, t, n) {
    e === "focusin" ? (ta(), zr = t, Ir = n, zr.attachEvent("onpropertychange", na)) : e === "focusout" && ta();
  }
  function Pf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ti(Ir);
  }
  function Af(e, t) {
    if (e === "click") return Ti(t);
  }
  function zf(e, t) {
    if (e === "input" || e === "change") return Ti(t);
  }
  function If(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : If;
  function Fr(e, t) {
    if (Ot(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!E.call(t, i) || !Ot(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ra(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ia(e, t) {
    var n = ra(e);
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
      n = ra(n);
    }
  }
  function la(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? la(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function sa() {
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
  function Wl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Ff(e) {
    var t = sa(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && la(n.ownerDocument.documentElement, n)) {
      if (r !== null && Wl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, s = Math.min(r.start, i);
          r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = ia(n, s);
          var a = ia(
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
  var Of = S && "documentMode" in document && 11 >= document.documentMode, Zn = null, Kl = null, Or = null, Ql = !1;
  function oa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ql || Zn == null || Zn !== re(r) || (r = Zn, "selectionStart" in r && Wl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Or && Fr(Or, r) || (Or = r, r = Mi(Kl, "onSelect"), 0 < r.length && (t = new Fl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zn)));
  }
  function ji(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var bn = { animationend: ji("Animation", "AnimationEnd"), animationiteration: ji("Animation", "AnimationIteration"), animationstart: ji("Animation", "AnimationStart"), transitionend: ji("Transition", "TransitionEnd") }, Gl = {}, aa = {};
  S && (aa = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
  function Ci(e) {
    if (Gl[e]) return Gl[e];
    if (!bn[e]) return e;
    var t = bn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in aa) return Gl[e] = t[n];
    return e;
  }
  var ua = Ci("animationend"), ca = Ci("animationiteration"), fa = Ci("animationstart"), da = Ci("transitionend"), ha = /* @__PURE__ */ new Map(), pa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yn(e, t) {
    ha.set(e, t), h(t, [e]);
  }
  for (var ql = 0; ql < pa.length; ql++) {
    var Yl = pa[ql], Df = Yl.toLowerCase(), Bf = Yl[0].toUpperCase() + Yl.slice(1);
    yn(Df, "on" + Bf);
  }
  yn(ua, "onAnimationEnd"), yn(ca, "onAnimationIteration"), yn(fa, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(da, "onTransitionEnd"), w("onMouseEnter", ["mouseout", "mouseover"]), w("onMouseLeave", ["mouseout", "mouseover"]), w("onPointerEnter", ["pointerout", "pointerover"]), w("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
  function ma(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Oc(r, t, void 0, e), e.currentTarget = null;
  }
  function va(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t) for (var a = r.length - 1; 0 <= a; a--) {
          var d = r[a], m = d.instance, x = d.currentTarget;
          if (d = d.listener, m !== s && i.isPropagationStopped()) break e;
          ma(i, d, x), s = m;
        }
        else for (a = 0; a < r.length; a++) {
          if (d = r[a], m = d.instance, x = d.currentTarget, d = d.listener, m !== s && i.isPropagationStopped()) break e;
          ma(i, d, x), s = m;
        }
      }
    }
    if (fi) throw e = jl, fi = !1, jl = null, e;
  }
  function Ae(e, t) {
    var n = t[rs];
    n === void 0 && (n = t[rs] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ya(t, e, 2, !1), n.add(r));
  }
  function Xl(e, t, n) {
    var r = 0;
    t && (r |= 4), ya(n, e, r, t);
  }
  var Ni = "_reactListening" + Math.random().toString(36).slice(2);
  function Br(e) {
    if (!e[Ni]) {
      e[Ni] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Vf.has(n) || Xl(n, !1, e), Xl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ni] || (t[Ni] = !0, Xl("selectionchange", !1, t));
    }
  }
  function ya(e, t, n, r) {
    switch (Vo(t)) {
      case 1:
        var i = bc;
        break;
      case 4:
        i = ef;
        break;
      default:
        i = Al;
    }
    n = i.bind(null, t, n, e), i = void 0, !Tl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Jl(e, t, n, r, i) {
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
          if (a = An(d), a === null) return;
          if (m = a.tag, m === 5 || m === 6) {
            r = s = a;
            continue e;
          }
          d = d.parentNode;
        }
      }
      r = r.return;
    }
    So(function() {
      var x = s, M = be(n), L = [];
      e: {
        var N = ha.get(e);
        if (N !== void 0) {
          var H = Fl, K = e;
          switch (e) {
            case "keypress":
              if (Si(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = vf;
              break;
            case "focusin":
              K = "focus", H = Bl;
              break;
            case "focusout":
              K = "blur", H = Bl;
              break;
            case "beforeblur":
            case "afterblur":
              H = Bl;
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
              H = Ho;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = rf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = kf;
              break;
            case ua:
            case ca:
            case fa:
              H = of;
              break;
            case da:
              H = xf;
              break;
            case "scroll":
              H = tf;
              break;
            case "wheel":
              H = Ef;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = uf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Ko;
          }
          var G = (t & 4) !== 0, Ze = !G && e === "scroll", g = G ? N !== null ? N + "Capture" : null : N;
          G = [];
          for (var v = x, k; v !== null; ) {
            k = v;
            var F = k.stateNode;
            if (k.tag === 5 && F !== null && (k = F, g !== null && (F = xr(v, g), F != null && G.push(Vr(v, F, k)))), Ze) break;
            v = v.return;
          }
          0 < G.length && (N = new H(N, K, null, n, M), L.push({ event: N, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", N && n !== Pe && (K = n.relatedTarget || n.fromElement) && (An(K) || K[tn])) break e;
          if ((H || N) && (N = M.window === M ? M : (N = M.ownerDocument) ? N.defaultView || N.parentWindow : window, H ? (K = n.relatedTarget || n.toElement, H = x, K = K ? An(K) : null, K !== null && (Ze = Pn(K), K !== Ze || K.tag !== 5 && K.tag !== 6) && (K = null)) : (H = null, K = x), H !== K)) {
            if (G = Ho, F = "onMouseLeave", g = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (G = Ko, F = "onPointerLeave", g = "onPointerEnter", v = "pointer"), Ze = H == null ? N : nr(H), k = K == null ? N : nr(K), N = new G(F, v + "leave", H, n, M), N.target = Ze, N.relatedTarget = k, F = null, An(M) === x && (G = new G(g, v + "enter", K, n, M), G.target = k, G.relatedTarget = Ze, F = G), Ze = F, H && K) t: {
              for (G = H, g = K, v = 0, k = G; k; k = er(k)) v++;
              for (k = 0, F = g; F; F = er(F)) k++;
              for (; 0 < v - k; ) G = er(G), v--;
              for (; 0 < k - v; ) g = er(g), k--;
              for (; v--; ) {
                if (G === g || g !== null && G === g.alternate) break t;
                G = er(G), g = er(g);
              }
              G = null;
            }
            else G = null;
            H !== null && ga(L, N, H, G, !1), K !== null && Ze !== null && ga(L, Ze, K, G, !0);
          }
        }
        e: {
          if (N = x ? nr(x) : window, H = N.nodeName && N.nodeName.toLowerCase(), H === "select" || H === "input" && N.type === "file") var X = Rf;
          else if (Jo(N)) if (bo) X = zf;
          else {
            X = Pf;
            var ie = Lf;
          }
          else (H = N.nodeName) && H.toLowerCase() === "input" && (N.type === "checkbox" || N.type === "radio") && (X = Af);
          if (X && (X = X(e, x))) {
            Zo(L, X, n, M);
            break e;
          }
          ie && ie(e, N, x), e === "focusout" && (ie = N._wrapperState) && ie.controlled && N.type === "number" && Ie(N, "number", N.value);
        }
        switch (ie = x ? nr(x) : window, e) {
          case "focusin":
            (Jo(ie) || ie.contentEditable === "true") && (Zn = ie, Kl = x, Or = null);
            break;
          case "focusout":
            Or = Kl = Zn = null;
            break;
          case "mousedown":
            Ql = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ql = !1, oa(L, n, M);
            break;
          case "selectionchange":
            if (Of) break;
          case "keydown":
          case "keyup":
            oa(L, n, M);
        }
        var le;
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
        else Jn ? Yo(e, n) && (fe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (fe = "onCompositionStart");
        fe && (Qo && n.locale !== "ko" && (Jn || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && Jn && (le = $o()) : (vn = M, Il = "value" in vn ? vn.value : vn.textContent, Jn = !0)), ie = Mi(x, fe), 0 < ie.length && (fe = new Wo(fe, e, null, n, M), L.push({ event: fe, listeners: ie }), le ? fe.data = le : (le = Xo(n), le !== null && (fe.data = le)))), (le = Tf ? jf(e, n) : Cf(e, n)) && (x = Mi(x, "onBeforeInput"), 0 < x.length && (M = new Wo("onBeforeInput", "beforeinput", null, n, M), L.push({ event: M, listeners: x }), M.data = le));
      }
      va(L, t);
    });
  }
  function Vr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Mi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, s = i.stateNode;
      i.tag === 5 && s !== null && (i = s, s = xr(e, n), s != null && r.unshift(Vr(e, s, i)), s = xr(e, t), s != null && r.push(Vr(e, s, i))), e = e.return;
    }
    return r;
  }
  function er(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ga(e, t, n, r, i) {
    for (var s = t._reactName, a = []; n !== null && n !== r; ) {
      var d = n, m = d.alternate, x = d.stateNode;
      if (m !== null && m === r) break;
      d.tag === 5 && x !== null && (d = x, i ? (m = xr(n, s), m != null && a.unshift(Vr(n, m, d))) : i || (m = xr(n, s), m != null && a.push(Vr(n, m, d)))), n = n.return;
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var $f = /\r\n?/g, Uf = /\u0000|\uFFFD/g;
  function ka(e) {
    return (typeof e == "string" ? e : "" + e).replace($f, `
`).replace(Uf, "");
  }
  function Ri(e, t, n) {
    if (t = ka(t), ka(e) !== t && n) throw Error(o(425));
  }
  function Li() {
  }
  var Zl = null, bl = null;
  function es(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ts = typeof setTimeout == "function" ? setTimeout : void 0, Hf = typeof clearTimeout == "function" ? clearTimeout : void 0, wa = typeof Promise == "function" ? Promise : void 0, Wf = typeof queueMicrotask == "function" ? queueMicrotask : typeof wa < "u" ? function(e) {
    return wa.resolve(null).then(e).catch(Kf);
  } : ts;
  function Kf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ns(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), Rr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Rr(t);
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
  function xa(e) {
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
  var tr = Math.random().toString(36).slice(2), qt = "__reactFiber$" + tr, $r = "__reactProps$" + tr, tn = "__reactContainer$" + tr, rs = "__reactEvents$" + tr, Qf = "__reactListeners$" + tr, Gf = "__reactHandles$" + tr;
  function An(e) {
    var t = e[qt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[tn] || n[qt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = xa(e); e !== null; ) {
          if (n = e[qt]) return n;
          e = xa(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ur(e) {
    return e = e[qt] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function nr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Pi(e) {
    return e[$r] || null;
  }
  var is = [], rr = -1;
  function kn(e) {
    return { current: e };
  }
  function ze(e) {
    0 > rr || (e.current = is[rr], is[rr] = null, rr--);
  }
  function Le(e, t) {
    rr++, is[rr] = e.current, e.current = t;
  }
  var wn = {}, at = kn(wn), yt = kn(!1), zn = wn;
  function ir(e, t) {
    var n = e.type.contextTypes;
    if (!n) return wn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n) i[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function gt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ai() {
    ze(yt), ze(at);
  }
  function Sa(e, t, n) {
    if (at.current !== wn) throw Error(o(168));
    Le(at, t), Le(yt, n);
  }
  function Ea(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(o(108, I(e) || "Unknown", i));
    return $({}, n, r);
  }
  function zi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wn, zn = at.current, Le(at, e), Le(yt, yt.current), !0;
  }
  function _a(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n ? (e = Ea(e, t, zn), r.__reactInternalMemoizedMergedChildContext = e, ze(yt), ze(at), Le(at, e)) : ze(yt), Le(yt, n);
  }
  var nn = null, Ii = !1, ls = !1;
  function Ta(e) {
    nn === null ? nn = [e] : nn.push(e);
  }
  function qf(e) {
    Ii = !0, Ta(e);
  }
  function xn() {
    if (!ls && nn !== null) {
      ls = !0;
      var e = 0, t = Ce;
      try {
        var n = nn;
        for (Ce = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        nn = null, Ii = !1;
      } catch (i) {
        throw nn !== null && (nn = nn.slice(e + 1)), Co(Cl, xn), i;
      } finally {
        Ce = t, ls = !1;
      }
    }
    return null;
  }
  var lr = [], sr = 0, Fi = null, Oi = 0, Mt = [], Rt = 0, In = null, rn = 1, ln = "";
  function Fn(e, t) {
    lr[sr++] = Oi, lr[sr++] = Fi, Fi = e, Oi = t;
  }
  function ja(e, t, n) {
    Mt[Rt++] = rn, Mt[Rt++] = ln, Mt[Rt++] = In, In = e;
    var r = rn;
    e = ln;
    var i = 32 - Ft(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - Ft(t) + i;
    if (30 < s) {
      var a = i - i % 5;
      s = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, rn = 1 << 32 - Ft(t) + i | n << i | r, ln = s + e;
    } else rn = 1 << s | n << i | r, ln = e;
  }
  function ss(e) {
    e.return !== null && (Fn(e, 1), ja(e, 1, 0));
  }
  function os(e) {
    for (; e === Fi; ) Fi = lr[--sr], lr[sr] = null, Oi = lr[--sr], lr[sr] = null;
    for (; e === In; ) In = Mt[--Rt], Mt[Rt] = null, ln = Mt[--Rt], Mt[Rt] = null, rn = Mt[--Rt], Mt[Rt] = null;
  }
  var _t = null, Tt = null, Fe = !1, Dt = null;
  function Ca(e, t) {
    var n = zt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Na(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, Tt = gn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, Tt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = In !== null ? { id: rn, overflow: ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = zt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, Tt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function as(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function us(e) {
    if (Fe) {
      var t = Tt;
      if (t) {
        var n = t;
        if (!Na(e, t)) {
          if (as(e)) throw Error(o(418));
          t = gn(n.nextSibling);
          var r = _t;
          t && Na(e, t) ? Ca(r, n) : (e.flags = e.flags & -4097 | 2, Fe = !1, _t = e);
        }
      } else {
        if (as(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, Fe = !1, _t = e;
      }
    }
  }
  function Ma(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    _t = e;
  }
  function Di(e) {
    if (e !== _t) return !1;
    if (!Fe) return Ma(e), Fe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !es(e.type, e.memoizedProps)), t && (t = Tt)) {
      if (as(e)) throw Ra(), Error(o(418));
      for (; t; ) Ca(e, t), t = gn(t.nextSibling);
    }
    if (Ma(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Tt = gn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Tt = null;
      }
    } else Tt = _t ? gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ra() {
    for (var e = Tt; e; ) e = gn(e.nextSibling);
  }
  function or() {
    Tt = _t = null, Fe = !1;
  }
  function cs(e) {
    Dt === null ? Dt = [e] : Dt.push(e);
  }
  var Yf = ae.ReactCurrentBatchConfig;
  function Hr(e, t, n) {
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
  function Bi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function La(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pa(e) {
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
      return g = Mn(g, v), g.index = 0, g.sibling = null, g;
    }
    function s(g, v, k) {
      return g.index = k, e ? (k = g.alternate, k !== null ? (k = k.index, k < v ? (g.flags |= 2, v) : k) : (g.flags |= 2, v)) : (g.flags |= 1048576, v);
    }
    function a(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function d(g, v, k, F) {
      return v === null || v.tag !== 6 ? (v = to(k, g.mode, F), v.return = g, v) : (v = i(v, k), v.return = g, v);
    }
    function m(g, v, k, F) {
      var X = k.type;
      return X === ne ? M(g, v, k.props.children, F, k.key) : v !== null && (v.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Re && La(X) === v.type) ? (F = i(v, k.props), F.ref = Hr(g, v, k), F.return = g, F) : (F = ul(k.type, k.key, k.props, null, g.mode, F), F.ref = Hr(g, v, k), F.return = g, F);
    }
    function x(g, v, k, F) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== k.containerInfo || v.stateNode.implementation !== k.implementation ? (v = no(k, g.mode, F), v.return = g, v) : (v = i(v, k.children || []), v.return = g, v);
    }
    function M(g, v, k, F, X) {
      return v === null || v.tag !== 7 ? (v = Wn(k, g.mode, F, X), v.return = g, v) : (v = i(v, k), v.return = g, v);
    }
    function L(g, v, k) {
      if (typeof v == "string" && v !== "" || typeof v == "number") return v = to("" + v, g.mode, k), v.return = g, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case J:
            return k = ul(v.type, v.key, v.props, null, g.mode, k), k.ref = Hr(g, null, v), k.return = g, k;
          case U:
            return v = no(v, g.mode, k), v.return = g, v;
          case Re:
            var F = v._init;
            return L(g, F(v._payload), k);
        }
        if (Be(v) || Z(v)) return v = Wn(v, g.mode, k, null), v.return = g, v;
        Bi(g, v);
      }
      return null;
    }
    function N(g, v, k, F) {
      var X = v !== null ? v.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number") return X !== null ? null : d(g, v, "" + k, F);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case J:
            return k.key === X ? m(g, v, k, F) : null;
          case U:
            return k.key === X ? x(g, v, k, F) : null;
          case Re:
            return X = k._init, N(
              g,
              v,
              X(k._payload),
              F
            );
        }
        if (Be(k) || Z(k)) return X !== null ? null : M(g, v, k, F, null);
        Bi(g, k);
      }
      return null;
    }
    function H(g, v, k, F, X) {
      if (typeof F == "string" && F !== "" || typeof F == "number") return g = g.get(k) || null, d(v, g, "" + F, X);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case J:
            return g = g.get(F.key === null ? k : F.key) || null, m(v, g, F, X);
          case U:
            return g = g.get(F.key === null ? k : F.key) || null, x(v, g, F, X);
          case Re:
            var ie = F._init;
            return H(g, v, k, ie(F._payload), X);
        }
        if (Be(F) || Z(F)) return g = g.get(k) || null, M(v, g, F, X, null);
        Bi(v, F);
      }
      return null;
    }
    function K(g, v, k, F) {
      for (var X = null, ie = null, le = v, fe = v = 0, lt = null; le !== null && fe < k.length; fe++) {
        le.index > fe ? (lt = le, le = null) : lt = le.sibling;
        var _e = N(g, le, k[fe], F);
        if (_e === null) {
          le === null && (le = lt);
          break;
        }
        e && le && _e.alternate === null && t(g, le), v = s(_e, v, fe), ie === null ? X = _e : ie.sibling = _e, ie = _e, le = lt;
      }
      if (fe === k.length) return n(g, le), Fe && Fn(g, fe), X;
      if (le === null) {
        for (; fe < k.length; fe++) le = L(g, k[fe], F), le !== null && (v = s(le, v, fe), ie === null ? X = le : ie.sibling = le, ie = le);
        return Fe && Fn(g, fe), X;
      }
      for (le = r(g, le); fe < k.length; fe++) lt = H(le, g, fe, k[fe], F), lt !== null && (e && lt.alternate !== null && le.delete(lt.key === null ? fe : lt.key), v = s(lt, v, fe), ie === null ? X = lt : ie.sibling = lt, ie = lt);
      return e && le.forEach(function(Rn) {
        return t(g, Rn);
      }), Fe && Fn(g, fe), X;
    }
    function G(g, v, k, F) {
      var X = Z(k);
      if (typeof X != "function") throw Error(o(150));
      if (k = X.call(k), k == null) throw Error(o(151));
      for (var ie = X = null, le = v, fe = v = 0, lt = null, _e = k.next(); le !== null && !_e.done; fe++, _e = k.next()) {
        le.index > fe ? (lt = le, le = null) : lt = le.sibling;
        var Rn = N(g, le, _e.value, F);
        if (Rn === null) {
          le === null && (le = lt);
          break;
        }
        e && le && Rn.alternate === null && t(g, le), v = s(Rn, v, fe), ie === null ? X = Rn : ie.sibling = Rn, ie = Rn, le = lt;
      }
      if (_e.done) return n(
        g,
        le
      ), Fe && Fn(g, fe), X;
      if (le === null) {
        for (; !_e.done; fe++, _e = k.next()) _e = L(g, _e.value, F), _e !== null && (v = s(_e, v, fe), ie === null ? X = _e : ie.sibling = _e, ie = _e);
        return Fe && Fn(g, fe), X;
      }
      for (le = r(g, le); !_e.done; fe++, _e = k.next()) _e = H(le, g, fe, _e.value, F), _e !== null && (e && _e.alternate !== null && le.delete(_e.key === null ? fe : _e.key), v = s(_e, v, fe), ie === null ? X = _e : ie.sibling = _e, ie = _e);
      return e && le.forEach(function(Nd) {
        return t(g, Nd);
      }), Fe && Fn(g, fe), X;
    }
    function Ze(g, v, k, F) {
      if (typeof k == "object" && k !== null && k.type === ne && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case J:
            e: {
              for (var X = k.key, ie = v; ie !== null; ) {
                if (ie.key === X) {
                  if (X = k.type, X === ne) {
                    if (ie.tag === 7) {
                      n(g, ie.sibling), v = i(ie, k.props.children), v.return = g, g = v;
                      break e;
                    }
                  } else if (ie.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Re && La(X) === ie.type) {
                    n(g, ie.sibling), v = i(ie, k.props), v.ref = Hr(g, ie, k), v.return = g, g = v;
                    break e;
                  }
                  n(g, ie);
                  break;
                } else t(g, ie);
                ie = ie.sibling;
              }
              k.type === ne ? (v = Wn(k.props.children, g.mode, F, k.key), v.return = g, g = v) : (F = ul(k.type, k.key, k.props, null, g.mode, F), F.ref = Hr(g, v, k), F.return = g, g = F);
            }
            return a(g);
          case U:
            e: {
              for (ie = k.key; v !== null; ) {
                if (v.key === ie) if (v.tag === 4 && v.stateNode.containerInfo === k.containerInfo && v.stateNode.implementation === k.implementation) {
                  n(g, v.sibling), v = i(v, k.children || []), v.return = g, g = v;
                  break e;
                } else {
                  n(g, v);
                  break;
                }
                else t(g, v);
                v = v.sibling;
              }
              v = no(k, g.mode, F), v.return = g, g = v;
            }
            return a(g);
          case Re:
            return ie = k._init, Ze(g, v, ie(k._payload), F);
        }
        if (Be(k)) return K(g, v, k, F);
        if (Z(k)) return G(g, v, k, F);
        Bi(g, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, v !== null && v.tag === 6 ? (n(g, v.sibling), v = i(v, k), v.return = g, g = v) : (n(g, v), v = to(k, g.mode, F), v.return = g, g = v), a(g)) : n(g, v);
    }
    return Ze;
  }
  var ar = Pa(!0), Aa = Pa(!1), Vi = kn(null), $i = null, ur = null, fs = null;
  function ds() {
    fs = ur = $i = null;
  }
  function hs(e) {
    var t = Vi.current;
    ze(Vi), e._currentValue = t;
  }
  function ps(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function cr(e, t) {
    $i = e, fs = ur = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (kt = !0), e.firstContext = null);
  }
  function Lt(e) {
    var t = e._currentValue;
    if (fs !== e) if (e = { context: e, memoizedValue: t, next: null }, ur === null) {
      if ($i === null) throw Error(o(308));
      ur = e, $i.dependencies = { lanes: 0, firstContext: e };
    } else ur = ur.next = e;
    return t;
  }
  var On = null;
  function ms(e) {
    On === null ? On = [e] : On.push(e);
  }
  function za(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, ms(t)) : (n.next = i.next, i.next = n), t.interleaved = n, sn(e, r);
  }
  function sn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Sn = !1;
  function vs(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ia(e, t) {
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
    return i = r.interleaved, i === null ? (t.next = t, ms(r)) : (t.next = i.next, i.next = t), r.interleaved = t, sn(e, n);
  }
  function Ui(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Rl(e, n);
    }
  }
  function Fa(e, t) {
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
  function Hi(e, t, n, r) {
    var i = e.updateQueue;
    Sn = !1;
    var s = i.firstBaseUpdate, a = i.lastBaseUpdate, d = i.shared.pending;
    if (d !== null) {
      i.shared.pending = null;
      var m = d, x = m.next;
      m.next = null, a === null ? s = x : a.next = x, a = m;
      var M = e.alternate;
      M !== null && (M = M.updateQueue, d = M.lastBaseUpdate, d !== a && (d === null ? M.firstBaseUpdate = x : d.next = x, M.lastBaseUpdate = m));
    }
    if (s !== null) {
      var L = i.baseState;
      a = 0, M = x = m = null, d = s;
      do {
        var N = d.lane, H = d.eventTime;
        if ((r & N) === N) {
          M !== null && (M = M.next = {
            eventTime: H,
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          });
          e: {
            var K = e, G = d;
            switch (N = t, H = n, G.tag) {
              case 1:
                if (K = G.payload, typeof K == "function") {
                  L = K.call(H, L, N);
                  break e;
                }
                L = K;
                break e;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = G.payload, N = typeof K == "function" ? K.call(H, L, N) : K, N == null) break e;
                L = $({}, L, N);
                break e;
              case 2:
                Sn = !0;
            }
          }
          d.callback !== null && d.lane !== 0 && (e.flags |= 64, N = i.effects, N === null ? i.effects = [d] : N.push(d));
        } else H = { eventTime: H, lane: N, tag: d.tag, payload: d.payload, callback: d.callback, next: null }, M === null ? (x = M = H, m = L) : M = M.next = H, a |= N;
        if (d = d.next, d === null) {
          if (d = i.shared.pending, d === null) break;
          N = d, d = N.next, N.next = null, i.lastBaseUpdate = N, i.shared.pending = null;
        }
      } while (!0);
      if (M === null && (m = L), i.baseState = m, i.firstBaseUpdate = x, i.lastBaseUpdate = M, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          a |= i.lane, i = i.next;
        while (i !== t);
      } else s === null && (i.shared.lanes = 0);
      Vn |= a, e.lanes = a, e.memoizedState = L;
    }
  }
  function Oa(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(o(191, i));
        i.call(r);
      }
    }
  }
  var Wr = {}, Yt = kn(Wr), Kr = kn(Wr), Qr = kn(Wr);
  function Dn(e) {
    if (e === Wr) throw Error(o(174));
    return e;
  }
  function ys(e, t) {
    switch (Le(Qr, t), Le(Kr, e), Le(Yt, Wr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ln(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ln(t, e);
    }
    ze(Yt), Le(Yt, t);
  }
  function fr() {
    ze(Yt), ze(Kr), ze(Qr);
  }
  function Da(e) {
    Dn(Qr.current);
    var t = Dn(Yt.current), n = Ln(t, e.type);
    t !== n && (Le(Kr, e), Le(Yt, n));
  }
  function gs(e) {
    Kr.current === e && (ze(Yt), ze(Kr));
  }
  var $e = kn(0);
  function Wi(e) {
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
  var ks = [];
  function ws() {
    for (var e = 0; e < ks.length; e++) ks[e]._workInProgressVersionPrimary = null;
    ks.length = 0;
  }
  var Ki = ae.ReactCurrentDispatcher, xs = ae.ReactCurrentBatchConfig, Bn = 0, Ue = null, tt = null, rt = null, Qi = !1, Gr = !1, qr = 0, Xf = 0;
  function ut() {
    throw Error(o(321));
  }
  function Ss(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ot(e[n], t[n])) return !1;
    return !0;
  }
  function Es(e, t, n, r, i, s) {
    if (Bn = s, Ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ki.current = e === null || e.memoizedState === null ? ed : td, e = n(r, i), Gr) {
      s = 0;
      do {
        if (Gr = !1, qr = 0, 25 <= s) throw Error(o(301));
        s += 1, rt = tt = null, t.updateQueue = null, Ki.current = nd, e = n(r, i);
      } while (Gr);
    }
    if (Ki.current = Yi, t = tt !== null && tt.next !== null, Bn = 0, rt = tt = Ue = null, Qi = !1, t) throw Error(o(300));
    return e;
  }
  function _s() {
    var e = qr !== 0;
    return qr = 0, e;
  }
  function Xt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return rt === null ? Ue.memoizedState = rt = e : rt = rt.next = e, rt;
  }
  function Pt() {
    if (tt === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = tt.next;
    var t = rt === null ? Ue.memoizedState : rt.next;
    if (t !== null) rt = t, tt = e;
    else {
      if (e === null) throw Error(o(310));
      tt = e, e = { memoizedState: tt.memoizedState, baseState: tt.baseState, baseQueue: tt.baseQueue, queue: tt.queue, next: null }, rt === null ? Ue.memoizedState = rt = e : rt = rt.next = e;
    }
    return rt;
  }
  function Yr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ts(e) {
    var t = Pt(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = tt, i = r.baseQueue, s = n.pending;
    if (s !== null) {
      if (i !== null) {
        var a = i.next;
        i.next = s.next, s.next = a;
      }
      r.baseQueue = i = s, n.pending = null;
    }
    if (i !== null) {
      s = i.next, r = r.baseState;
      var d = a = null, m = null, x = s;
      do {
        var M = x.lane;
        if ((Bn & M) === M) m !== null && (m = m.next = { lane: 0, action: x.action, hasEagerState: x.hasEagerState, eagerState: x.eagerState, next: null }), r = x.hasEagerState ? x.eagerState : e(r, x.action);
        else {
          var L = {
            lane: M,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          };
          m === null ? (d = m = L, a = r) : m = m.next = L, Ue.lanes |= M, Vn |= M;
        }
        x = x.next;
      } while (x !== null && x !== s);
      m === null ? a = r : m.next = d, Ot(r, t.memoizedState) || (kt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = m, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        s = i.lane, Ue.lanes |= s, Vn |= s, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function js(e) {
    var t = Pt(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var a = i = i.next;
      do
        s = e(s, a.action), a = a.next;
      while (a !== i);
      Ot(s, t.memoizedState) || (kt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, r];
  }
  function Ba() {
  }
  function Va(e, t) {
    var n = Ue, r = Pt(), i = t(), s = !Ot(r.memoizedState, i);
    if (s && (r.memoizedState = i, kt = !0), r = r.queue, Cs(Ha.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || rt !== null && rt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Xr(9, Ua.bind(null, n, r, i, t), void 0, null), it === null) throw Error(o(349));
      (Bn & 30) !== 0 || $a(n, t, i);
    }
    return i;
  }
  function $a(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ua(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Wa(t) && Ka(e);
  }
  function Ha(e, t, n) {
    return n(function() {
      Wa(t) && Ka(e);
    });
  }
  function Wa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ot(e, n);
    } catch {
      return !0;
    }
  }
  function Ka(e) {
    var t = sn(e, 1);
    t !== null && Ut(t, e, 1, -1);
  }
  function Qa(e) {
    var t = Xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yr, lastRenderedState: e }, t.queue = e, e = e.dispatch = bf.bind(null, Ue, e), [t.memoizedState, e];
  }
  function Xr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ga() {
    return Pt().memoizedState;
  }
  function Gi(e, t, n, r) {
    var i = Xt();
    Ue.flags |= e, i.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function qi(e, t, n, r) {
    var i = Pt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (tt !== null) {
      var a = tt.memoizedState;
      if (s = a.destroy, r !== null && Ss(r, a.deps)) {
        i.memoizedState = Xr(t, n, s, r);
        return;
      }
    }
    Ue.flags |= e, i.memoizedState = Xr(1 | t, n, s, r);
  }
  function qa(e, t) {
    return Gi(8390656, 8, e, t);
  }
  function Cs(e, t) {
    return qi(2048, 8, e, t);
  }
  function Ya(e, t) {
    return qi(4, 2, e, t);
  }
  function Xa(e, t) {
    return qi(4, 4, e, t);
  }
  function Ja(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Za(e, t, n) {
    return n = n != null ? n.concat([e]) : null, qi(4, 4, Ja.bind(null, t, e), n);
  }
  function Ns() {
  }
  function ba(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ss(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function eu(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ss(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function tu(e, t, n) {
    return (Bn & 21) === 0 ? (e.baseState && (e.baseState = !1, kt = !0), e.memoizedState = n) : (Ot(n, t) || (n = Lo(), Ue.lanes |= n, Vn |= n, e.baseState = !0), t);
  }
  function Jf(e, t) {
    var n = Ce;
    Ce = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = xs.transition;
    xs.transition = {};
    try {
      e(!1), t();
    } finally {
      Ce = n, xs.transition = r;
    }
  }
  function nu() {
    return Pt().memoizedState;
  }
  function Zf(e, t, n) {
    var r = Cn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ru(e)) iu(t, n);
    else if (n = za(e, t, n, r), n !== null) {
      var i = pt();
      Ut(n, e, r, i), lu(n, t, r);
    }
  }
  function bf(e, t, n) {
    var r = Cn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ru(e)) iu(t, i);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
        var a = t.lastRenderedState, d = s(a, n);
        if (i.hasEagerState = !0, i.eagerState = d, Ot(d, a)) {
          var m = t.interleaved;
          m === null ? (i.next = i, ms(t)) : (i.next = m.next, m.next = i), t.interleaved = i;
          return;
        }
      } catch {
      }
      n = za(e, t, i, r), n !== null && (i = pt(), Ut(n, e, r, i), lu(n, t, r));
    }
  }
  function ru(e) {
    var t = e.alternate;
    return e === Ue || t !== null && t === Ue;
  }
  function iu(e, t) {
    Gr = Qi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function lu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Rl(e, n);
    }
  }
  var Yi = { readContext: Lt, useCallback: ut, useContext: ut, useEffect: ut, useImperativeHandle: ut, useInsertionEffect: ut, useLayoutEffect: ut, useMemo: ut, useReducer: ut, useRef: ut, useState: ut, useDebugValue: ut, useDeferredValue: ut, useTransition: ut, useMutableSource: ut, useSyncExternalStore: ut, useId: ut, unstable_isNewReconciler: !1 }, ed = { readContext: Lt, useCallback: function(e, t) {
    return Xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Lt, useEffect: qa, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Gi(
      4194308,
      4,
      Ja.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Gi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Gi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Xt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Xt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Zf.bind(null, Ue, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Qa, useDebugValue: Ns, useDeferredValue: function(e) {
    return Xt().memoizedState = e;
  }, useTransition: function() {
    var e = Qa(!1), t = e[0];
    return e = Jf.bind(null, e[1]), Xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ue, i = Xt();
    if (Fe) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), it === null) throw Error(o(349));
      (Bn & 30) !== 0 || $a(r, t, n);
    }
    i.memoizedState = n;
    var s = { value: n, getSnapshot: t };
    return i.queue = s, qa(Ha.bind(
      null,
      r,
      s,
      e
    ), [e]), r.flags |= 2048, Xr(9, Ua.bind(null, r, s, n, t), void 0, null), n;
  }, useId: function() {
    var e = Xt(), t = it.identifierPrefix;
    if (Fe) {
      var n = ln, r = rn;
      n = (r & ~(1 << 32 - Ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Xf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, td = {
    readContext: Lt,
    useCallback: ba,
    useContext: Lt,
    useEffect: Cs,
    useImperativeHandle: Za,
    useInsertionEffect: Ya,
    useLayoutEffect: Xa,
    useMemo: eu,
    useReducer: Ts,
    useRef: Ga,
    useState: function() {
      return Ts(Yr);
    },
    useDebugValue: Ns,
    useDeferredValue: function(e) {
      var t = Pt();
      return tu(t, tt.memoizedState, e);
    },
    useTransition: function() {
      var e = Ts(Yr)[0], t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ba,
    useSyncExternalStore: Va,
    useId: nu,
    unstable_isNewReconciler: !1
  }, nd = { readContext: Lt, useCallback: ba, useContext: Lt, useEffect: Cs, useImperativeHandle: Za, useInsertionEffect: Ya, useLayoutEffect: Xa, useMemo: eu, useReducer: js, useRef: Ga, useState: function() {
    return js(Yr);
  }, useDebugValue: Ns, useDeferredValue: function(e) {
    var t = Pt();
    return tt === null ? t.memoizedState = e : tu(t, tt.memoizedState, e);
  }, useTransition: function() {
    var e = js(Yr)[0], t = Pt().memoizedState;
    return [e, t];
  }, useMutableSource: Ba, useSyncExternalStore: Va, useId: nu, unstable_isNewReconciler: !1 };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      t = $({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ms(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : $({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Xi = { isMounted: function(e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = pt(), i = Cn(e), s = on(r, i);
    s.payload = t, n != null && (s.callback = n), t = En(e, s, i), t !== null && (Ut(t, e, i, r), Ui(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = pt(), i = Cn(e), s = on(r, i);
    s.tag = 1, s.payload = t, n != null && (s.callback = n), t = En(e, s, i), t !== null && (Ut(t, e, i, r), Ui(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = pt(), r = Cn(e), i = on(n, r);
    i.tag = 2, t != null && (i.callback = t), t = En(e, i, r), t !== null && (Ut(t, e, r, n), Ui(t, e, r));
  } };
  function su(e, t, n, r, i, s, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(i, s) : !0;
  }
  function ou(e, t, n) {
    var r = !1, i = wn, s = t.contextType;
    return typeof s == "object" && s !== null ? s = Lt(s) : (i = gt(t) ? zn : at.current, r = t.contextTypes, s = (r = r != null) ? ir(e, i) : wn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Xi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
  }
  function au(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Xi.enqueueReplaceState(t, t.state, null);
  }
  function Rs(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, vs(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Lt(s) : (s = gt(t) ? zn : at.current, i.context = ir(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Ms(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Xi.enqueueReplaceState(i, i.state, null), Hi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function dr(e, t) {
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
  function Ls(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ps(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var rd = typeof WeakMap == "function" ? WeakMap : Map;
  function uu(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      rl || (rl = !0, Gs = r), Ps(e, t);
    }, n;
  }
  function cu(e, t, n) {
    n = on(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        Ps(e, t);
      };
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
      Ps(e, t), typeof r != "function" && (Tn === null ? Tn = /* @__PURE__ */ new Set([this]) : Tn.add(this));
      var a = t.stack;
      this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
    }), n;
  }
  function fu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new rd();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = yd.bind(null, e, t, n), t.then(e, e));
  }
  function du(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function hu(e, t, n, r, i) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, En(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e);
  }
  var id = ae.ReactCurrentOwner, kt = !1;
  function ht(e, t, n, r) {
    t.child = e === null ? Aa(t, null, n, r) : ar(t, e.child, n, r);
  }
  function pu(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return cr(t, i), r = Es(e, t, n, r, s, i), n = _s(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, an(e, t, i)) : (Fe && n && ss(t), t.flags |= 1, ht(e, t, r, i), t.child);
  }
  function mu(e, t, n, r, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !eo(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, vu(e, t, s, r, i)) : (e = ul(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, (e.lanes & i) === 0) {
      var a = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Fr, n(a, r) && e.ref === t.ref) return an(e, t, i);
    }
    return t.flags |= 1, e = Mn(s, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function vu(e, t, n, r, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Fr(s, r) && e.ref === t.ref) if (kt = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) (e.flags & 131072) !== 0 && (kt = !0);
      else return t.lanes = e.lanes, an(e, t, i);
    }
    return As(e, t, n, r, i);
  }
  function yu(e, t, n) {
    var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Le(pr, jt), jt |= n;
    else {
      if ((n & 1073741824) === 0) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Le(pr, jt), jt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, Le(pr, jt), jt |= r;
    }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, Le(pr, jt), jt |= r;
    return ht(e, t, i, n), t.child;
  }
  function gu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function As(e, t, n, r, i) {
    var s = gt(n) ? zn : at.current;
    return s = ir(t, s), cr(t, i), n = Es(e, t, n, r, s, i), r = _s(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, an(e, t, i)) : (Fe && r && ss(t), t.flags |= 1, ht(e, t, n, i), t.child);
  }
  function ku(e, t, n, r, i) {
    if (gt(n)) {
      var s = !0;
      zi(t);
    } else s = !1;
    if (cr(t, i), t.stateNode === null) Zi(e, t), ou(t, n, r), Rs(t, n, r, i), r = !0;
    else if (e === null) {
      var a = t.stateNode, d = t.memoizedProps;
      a.props = d;
      var m = a.context, x = n.contextType;
      typeof x == "object" && x !== null ? x = Lt(x) : (x = gt(n) ? zn : at.current, x = ir(t, x));
      var M = n.getDerivedStateFromProps, L = typeof M == "function" || typeof a.getSnapshotBeforeUpdate == "function";
      L || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (d !== r || m !== x) && au(t, a, r, x), Sn = !1;
      var N = t.memoizedState;
      a.state = N, Hi(t, r, a, i), m = t.memoizedState, d !== r || N !== m || yt.current || Sn ? (typeof M == "function" && (Ms(t, n, M, r), m = t.memoizedState), (d = Sn || su(t, n, d, r, N, m, x)) ? (L || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = m), a.props = r, a.state = m, a.context = x, r = d) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      a = t.stateNode, Ia(e, t), d = t.memoizedProps, x = t.type === t.elementType ? d : Bt(t.type, d), a.props = x, L = t.pendingProps, N = a.context, m = n.contextType, typeof m == "object" && m !== null ? m = Lt(m) : (m = gt(n) ? zn : at.current, m = ir(t, m));
      var H = n.getDerivedStateFromProps;
      (M = typeof H == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (d !== L || N !== m) && au(t, a, r, m), Sn = !1, N = t.memoizedState, a.state = N, Hi(t, r, a, i);
      var K = t.memoizedState;
      d !== L || N !== K || yt.current || Sn ? (typeof H == "function" && (Ms(t, n, H, r), K = t.memoizedState), (x = Sn || su(t, n, x, r, N, K, m) || !1) ? (M || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, K, m), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, K, m)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = K), a.props = r, a.state = K, a.context = m, r = x) : (typeof a.componentDidUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return zs(e, t, n, r, s, i);
  }
  function zs(e, t, n, r, i, s) {
    gu(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return i && _a(t, n, !1), an(e, t, s);
    r = t.stateNode, id.current = t;
    var d = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = ar(t, e.child, null, s), t.child = ar(t, null, d, s)) : ht(e, t, d, s), t.memoizedState = r.state, i && _a(t, n, !0), t.child;
  }
  function wu(e) {
    var t = e.stateNode;
    t.pendingContext ? Sa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sa(e, t.context, !1), ys(e, t.containerInfo);
  }
  function xu(e, t, n, r, i) {
    return or(), cs(i), t.flags |= 256, ht(e, t, n, r), t.child;
  }
  var Is = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Su(e, t, n) {
    var r = t.pendingProps, i = $e.current, s = !1, a = (t.flags & 128) !== 0, d;
    if ((d = a) || (d = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), d ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Le($e, i & 1), e === null)
      return us(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, (r & 1) === 0 && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = cl(a, r, 0, null), e = Wn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Fs(n), t.memoizedState = Is, e) : Os(t, a));
    if (i = e.memoizedState, i !== null && (d = i.dehydrated, d !== null)) return ld(e, t, a, r, d, i, n);
    if (s) {
      s = r.fallback, a = t.mode, i = e.child, d = i.sibling;
      var m = { mode: "hidden", children: r.children };
      return (a & 1) === 0 && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = m, t.deletions = null) : (r = Mn(i, m), r.subtreeFlags = i.subtreeFlags & 14680064), d !== null ? s = Mn(d, s) : (s = Wn(s, a, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, a = e.child.memoizedState, a = a === null ? Fs(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = Is, r;
    }
    return s = e.child, e = s.sibling, r = Mn(s, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Os(e, t) {
    return t = cl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ji(e, t, n, r) {
    return r !== null && cs(r), ar(t, e.child, null, n), e = Os(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function ld(e, t, n, r, i, s, a) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ls(Error(o(422))), Ji(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = cl({ mode: "visible", children: r.children }, i, 0, null), s = Wn(s, i, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, (t.mode & 1) !== 0 && ar(t, e.child, null, a), t.child.memoizedState = Fs(a), t.memoizedState = Is, s);
    if ((t.mode & 1) === 0) return Ji(e, t, a, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var d = r.dgst;
      return r = d, s = Error(o(419)), r = Ls(s, r, void 0), Ji(e, t, a, r);
    }
    if (d = (a & e.childLanes) !== 0, kt || d) {
      if (r = it, r !== null) {
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
        i = (i & (r.suspendedLanes | a)) !== 0 ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, sn(e, i), Ut(r, e, i, -1));
      }
      return bs(), r = Ls(Error(o(421))), Ji(e, t, a, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gd.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Tt = gn(i.nextSibling), _t = t, Fe = !0, Dt = null, e !== null && (Mt[Rt++] = rn, Mt[Rt++] = ln, Mt[Rt++] = In, rn = e.id, ln = e.overflow, In = t), t = Os(t, r.children), t.flags |= 4096, t);
  }
  function Eu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ps(e.return, t, n);
  }
  function Ds(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
  }
  function _u(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, s = r.tail;
    if (ht(e, t, r.children, n), r = $e.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Eu(e, n, t);
        else if (e.tag === 19) Eu(e, n, t);
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
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Wi(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ds(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Wi(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Ds(t, !0, n, null, s);
        break;
      case "together":
        Ds(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Zi(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function an(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Vn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Mn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function sd(e, t, n) {
    switch (t.tag) {
      case 3:
        wu(t), or();
        break;
      case 5:
        Da(t);
        break;
      case 1:
        gt(t.type) && zi(t);
        break;
      case 4:
        ys(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Le(Vi, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Le($e, $e.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Su(e, t, n) : (Le($e, $e.current & 1), e = an(e, t, n), e !== null ? e.sibling : null);
        Le($e, $e.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return _u(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Le($e, $e.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, yu(e, t, n);
    }
    return an(e, t, n);
  }
  var Tu, Bs, ju, Cu;
  Tu = function(e, t) {
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
  }, Bs = function() {
  }, ju = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Dn(Yt.current);
      var s = null;
      switch (n) {
        case "input":
          i = te(e, i), r = te(e, r), s = [];
          break;
        case "select":
          i = $({}, i, { value: void 0 }), r = $({}, r, { value: void 0 }), s = [];
          break;
        case "textarea":
          i = Nt(e, i), r = Nt(e, r), s = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Li);
      }
      ye(n, r);
      var a;
      n = null;
      for (x in i) if (!r.hasOwnProperty(x) && i.hasOwnProperty(x) && i[x] != null) if (x === "style") {
        var d = i[x];
        for (a in d) d.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
      } else x !== "dangerouslySetInnerHTML" && x !== "children" && x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && x !== "autoFocus" && (f.hasOwnProperty(x) ? s || (s = []) : (s = s || []).push(x, null));
      for (x in r) {
        var m = r[x];
        if (d = i?.[x], r.hasOwnProperty(x) && m !== d && (m != null || d != null)) if (x === "style") if (d) {
          for (a in d) !d.hasOwnProperty(a) || m && m.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
          for (a in m) m.hasOwnProperty(a) && d[a] !== m[a] && (n || (n = {}), n[a] = m[a]);
        } else n || (s || (s = []), s.push(
          x,
          n
        )), n = m;
        else x === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, d = d ? d.__html : void 0, m != null && d !== m && (s = s || []).push(x, m)) : x === "children" ? typeof m != "string" && typeof m != "number" || (s = s || []).push(x, "" + m) : x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && (f.hasOwnProperty(x) ? (m != null && x === "onScroll" && Ae("scroll", e), s || d === m || (s = [])) : (s = s || []).push(x, m));
      }
      n && (s = s || []).push("style", n);
      var x = s;
      (t.updateQueue = x) && (t.flags |= 4);
    }
  }, Cu = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Jr(e, t) {
    if (!Fe) switch (e.tailMode) {
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
  function ct(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function od(e, t, n) {
    var r = t.pendingProps;
    switch (os(t), t.tag) {
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
        return ct(t), null;
      case 1:
        return gt(t.type) && Ai(), ct(t), null;
      case 3:
        return r = t.stateNode, fr(), ze(yt), ze(at), ws(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Di(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dt !== null && (Xs(Dt), Dt = null))), Bs(e, t), ct(t), null;
      case 5:
        gs(t);
        var i = Dn(Qr.current);
        if (n = t.type, e !== null && t.stateNode != null) ju(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return ct(t), null;
          }
          if (e = Dn(Yt.current), Di(t)) {
            r = t.stateNode, n = t.type;
            var s = t.memoizedProps;
            switch (r[qt] = t, r[$r] = s, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ae("cancel", r), Ae("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ae("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Dr.length; i++) Ae(Dr[i], r);
                break;
              case "source":
                Ae("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ae(
                  "error",
                  r
                ), Ae("load", r);
                break;
              case "details":
                Ae("toggle", r);
                break;
              case "input":
                ve(r, s), Ae("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!s.multiple }, Ae("invalid", r);
                break;
              case "textarea":
                Ve(r, s), Ae("invalid", r);
            }
            ye(n, s), i = null;
            for (var a in s) if (s.hasOwnProperty(a)) {
              var d = s[a];
              a === "children" ? typeof d == "string" ? r.textContent !== d && (s.suppressHydrationWarning !== !0 && Ri(r.textContent, d, e), i = ["children", d]) : typeof d == "number" && r.textContent !== "" + d && (s.suppressHydrationWarning !== !0 && Ri(
                r.textContent,
                d,
                e
              ), i = ["children", "" + d]) : f.hasOwnProperty(a) && d != null && a === "onScroll" && Ae("scroll", r);
            }
            switch (n) {
              case "input":
                ce(r), Qe(r, s, !0);
                break;
              case "textarea":
                ce(r), Xe(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = Li);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ht(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[qt] = t, e[$r] = r, Tu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (a = ke(n, r), n) {
                case "dialog":
                  Ae("cancel", e), Ae("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ae("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Dr.length; i++) Ae(Dr[i], e);
                  i = r;
                  break;
                case "source":
                  Ae("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Ae(
                    "error",
                    e
                  ), Ae("load", e), i = r;
                  break;
                case "details":
                  Ae("toggle", e), i = r;
                  break;
                case "input":
                  ve(e, r), i = te(e, r), Ae("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = $({}, r, { value: void 0 }), Ae("invalid", e);
                  break;
                case "textarea":
                  Ve(e, r), i = Nt(e, r), Ae("invalid", e);
                  break;
                default:
                  i = r;
              }
              ye(n, i), d = i;
              for (s in d) if (d.hasOwnProperty(s)) {
                var m = d[s];
                s === "style" ? bt(e, m) : s === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, m != null && Zt(e, m)) : s === "children" ? typeof m == "string" ? (n !== "textarea" || m !== "") && Wt(e, m) : typeof m == "number" && Wt(e, "" + m) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (f.hasOwnProperty(s) ? m != null && s === "onScroll" && Ae("scroll", e) : m != null && ee(e, s, m, a));
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
                  e.multiple = !!r.multiple, s = r.value, s != null ? Ye(e, !!r.multiple, s, !1) : r.defaultValue != null && Ye(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Li);
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
        return ct(t), null;
      case 6:
        if (e && t.stateNode != null) Cu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (n = Dn(Qr.current), Dn(Yt.current), Di(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[qt] = t, (s = r.nodeValue !== n) && (e = _t, e !== null)) switch (e.tag) {
              case 3:
                Ri(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ri(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            s && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qt] = t, t.stateNode = r;
        }
        return ct(t), null;
      case 13:
        if (ze($e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Fe && Tt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ra(), or(), t.flags |= 98560, s = !1;
          else if (s = Di(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317));
              s[qt] = t;
            } else or(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ct(t), s = !1;
          } else Dt !== null && (Xs(Dt), Dt = null), s = !0;
          if (!s) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || ($e.current & 1) !== 0 ? nt === 0 && (nt = 3) : bs())), t.updateQueue !== null && (t.flags |= 4), ct(t), null);
      case 4:
        return fr(), Bs(e, t), e === null && Br(t.stateNode.containerInfo), ct(t), null;
      case 10:
        return hs(t.type._context), ct(t), null;
      case 17:
        return gt(t.type) && Ai(), ct(t), null;
      case 19:
        if (ze($e), s = t.memoizedState, s === null) return ct(t), null;
        if (r = (t.flags & 128) !== 0, a = s.rendering, a === null) if (r) Jr(s, !1);
        else {
          if (nt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (a = Wi(e), a !== null) {
              for (t.flags |= 128, Jr(s, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, a = s.alternate, a === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, s.type = a.type, e = a.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Le($e, $e.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          s.tail !== null && Je() > mr && (t.flags |= 128, r = !0, Jr(s, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Wi(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Jr(s, !0), s.tail === null && s.tailMode === "hidden" && !a.alternate && !Fe) return ct(t), null;
          } else 2 * Je() - s.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128, r = !0, Jr(s, !1), t.lanes = 4194304);
          s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !== null ? n.sibling = a : t.child = a, s.last = a);
        }
        return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Je(), t.sibling = null, n = $e.current, Le($e, r ? n & 1 | 2 : n & 1), t) : (ct(t), null);
      case 22:
      case 23:
        return Zs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (jt & 1073741824) !== 0 && (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ct(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function ad(e, t) {
    switch (os(t), t.tag) {
      case 1:
        return gt(t.type) && Ai(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return fr(), ze(yt), ze(at), ws(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return gs(t), null;
      case 13:
        if (ze($e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          or();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ze($e), null;
      case 4:
        return fr(), null;
      case 10:
        return hs(t.type._context), null;
      case 22:
      case 23:
        return Zs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var bi = !1, ft = !1, ud = typeof WeakSet == "function" ? WeakSet : Set, W = null;
  function hr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ge(e, t, r);
    }
    else n.current = null;
  }
  function Vs(e, t, n) {
    try {
      n();
    } catch (r) {
      Ge(e, t, r);
    }
  }
  var Nu = !1;
  function cd(e, t) {
    if (Zl = ki, e = sa(), Wl(e)) {
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
          var a = 0, d = -1, m = -1, x = 0, M = 0, L = e, N = null;
          t: for (; ; ) {
            for (var H; L !== n || i !== 0 && L.nodeType !== 3 || (d = a + i), L !== s || r !== 0 && L.nodeType !== 3 || (m = a + r), L.nodeType === 3 && (a += L.nodeValue.length), (H = L.firstChild) !== null; )
              N = L, L = H;
            for (; ; ) {
              if (L === e) break t;
              if (N === n && ++x === i && (d = a), N === s && ++M === r && (m = a), (H = L.nextSibling) !== null) break;
              L = N, N = L.parentNode;
            }
            L = H;
          }
          n = d === -1 || m === -1 ? null : { start: d, end: m };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (bl = { focusedElem: e, selectionRange: n }, ki = !1, W = t; W !== null; ) if (t = W, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, W = e;
    else for (; W !== null; ) {
      t = W;
      try {
        var K = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (K !== null) {
              var G = K.memoizedProps, Ze = K.memoizedState, g = t.stateNode, v = g.getSnapshotBeforeUpdate(t.elementType === t.type ? G : Bt(t.type, G), Ze);
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
        e.return = t.return, W = e;
        break;
      }
      W = t.return;
    }
    return K = Nu, Nu = !1, K;
  }
  function Zr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var s = i.destroy;
          i.destroy = void 0, s !== void 0 && Vs(t, n, s);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function el(e, t) {
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
  function Mu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Mu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qt], delete t[$r], delete t[rs], delete t[Qf], delete t[Gf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Ru(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Lu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ru(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Us(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Li));
    else if (r !== 4 && (e = e.child, e !== null)) for (Us(e, t, n), e = e.sibling; e !== null; ) Us(e, t, n), e = e.sibling;
  }
  function Hs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Hs(e, t, n), e = e.sibling; e !== null; ) Hs(e, t, n), e = e.sibling;
  }
  var st = null, Vt = !1;
  function _n(e, t, n) {
    for (n = n.child; n !== null; ) Pu(e, t, n), n = n.sibling;
  }
  function Pu(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(hi, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        ft || hr(n, t);
      case 6:
        var r = st, i = Vt;
        st = null, _n(e, t, n), st = r, Vt = i, st !== null && (Vt ? (e = st, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : st.removeChild(n.stateNode));
        break;
      case 18:
        st !== null && (Vt ? (e = st, n = n.stateNode, e.nodeType === 8 ? ns(e.parentNode, n) : e.nodeType === 1 && ns(e, n), Rr(e)) : ns(st, n.stateNode));
        break;
      case 4:
        r = st, i = Vt, st = n.stateNode.containerInfo, Vt = !0, _n(e, t, n), st = r, Vt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ft && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var s = i, a = s.destroy;
            s = s.tag, a !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && Vs(n, t, a), i = i.next;
          } while (i !== r);
        }
        _n(e, t, n);
        break;
      case 1:
        if (!ft && (hr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (d) {
          Ge(n, t, d);
        }
        _n(e, t, n);
        break;
      case 21:
        _n(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (ft = (r = ft) || n.memoizedState !== null, _n(e, t, n), ft = r) : _n(e, t, n);
        break;
      default:
        _n(e, t, n);
    }
  }
  function Au(e) {
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
  function $t(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e, a = t, d = a;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              st = d.stateNode, Vt = !1;
              break e;
            case 3:
              st = d.stateNode.containerInfo, Vt = !0;
              break e;
            case 4:
              st = d.stateNode.containerInfo, Vt = !0;
              break e;
          }
          d = d.return;
        }
        if (st === null) throw Error(o(160));
        Pu(s, a, i), st = null, Vt = !1;
        var m = i.alternate;
        m !== null && (m.return = null), i.return = null;
      } catch (x) {
        Ge(i, t, x);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) zu(t, e), t = t.sibling;
  }
  function zu(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ($t(t, e), Jt(e), r & 4) {
          try {
            Zr(3, e, e.return), el(3, e);
          } catch (G) {
            Ge(e, e.return, G);
          }
          try {
            Zr(5, e, e.return);
          } catch (G) {
            Ge(e, e.return, G);
          }
        }
        break;
      case 1:
        $t(t, e), Jt(e), r & 512 && n !== null && hr(n, n.return);
        break;
      case 5:
        if ($t(t, e), Jt(e), r & 512 && n !== null && hr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Wt(i, "");
          } catch (G) {
            Ge(e, e.return, G);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, d = e.type, m = e.updateQueue;
          if (e.updateQueue = null, m !== null) try {
            d === "input" && s.type === "radio" && s.name != null && ge(i, s), ke(d, a);
            var x = ke(d, s);
            for (a = 0; a < m.length; a += 2) {
              var M = m[a], L = m[a + 1];
              M === "style" ? bt(i, L) : M === "dangerouslySetInnerHTML" ? Zt(i, L) : M === "children" ? Wt(i, L) : ee(i, M, L, x);
            }
            switch (d) {
              case "input":
                Te(i, s);
                break;
              case "textarea":
                je(i, s);
                break;
              case "select":
                var N = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var H = s.value;
                H != null ? Ye(i, !!s.multiple, H, !1) : N !== !!s.multiple && (s.defaultValue != null ? Ye(
                  i,
                  !!s.multiple,
                  s.defaultValue,
                  !0
                ) : Ye(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[$r] = s;
          } catch (G) {
            Ge(e, e.return, G);
          }
        }
        break;
      case 6:
        if ($t(t, e), Jt(e), r & 4) {
          if (e.stateNode === null) throw Error(o(162));
          i = e.stateNode, s = e.memoizedProps;
          try {
            i.nodeValue = s;
          } catch (G) {
            Ge(e, e.return, G);
          }
        }
        break;
      case 3:
        if ($t(t, e), Jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Rr(t.containerInfo);
        } catch (G) {
          Ge(e, e.return, G);
        }
        break;
      case 4:
        $t(t, e), Jt(e);
        break;
      case 13:
        $t(t, e), Jt(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Qs = Je())), r & 4 && Au(e);
        break;
      case 22:
        if (M = n !== null && n.memoizedState !== null, e.mode & 1 ? (ft = (x = ft) || M, $t(t, e), ft = x) : $t(t, e), Jt(e), r & 8192) {
          if (x = e.memoizedState !== null, (e.stateNode.isHidden = x) && !M && (e.mode & 1) !== 0) for (W = e, M = e.child; M !== null; ) {
            for (L = W = M; W !== null; ) {
              switch (N = W, H = N.child, N.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, N, N.return);
                  break;
                case 1:
                  hr(N, N.return);
                  var K = N.stateNode;
                  if (typeof K.componentWillUnmount == "function") {
                    r = N, n = N.return;
                    try {
                      t = r, K.props = t.memoizedProps, K.state = t.memoizedState, K.componentWillUnmount();
                    } catch (G) {
                      Ge(r, n, G);
                    }
                  }
                  break;
                case 5:
                  hr(N, N.return);
                  break;
                case 22:
                  if (N.memoizedState !== null) {
                    Ou(L);
                    continue;
                  }
              }
              H !== null ? (H.return = N, W = H) : Ou(L);
            }
            M = M.sibling;
          }
          e: for (M = null, L = e; ; ) {
            if (L.tag === 5) {
              if (M === null) {
                M = L;
                try {
                  i = L.stateNode, x ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (d = L.stateNode, m = L.memoizedProps.style, a = m != null && m.hasOwnProperty("display") ? m.display : null, d.style.display = se("display", a));
                } catch (G) {
                  Ge(e, e.return, G);
                }
              }
            } else if (L.tag === 6) {
              if (M === null) try {
                L.stateNode.nodeValue = x ? "" : L.memoizedProps;
              } catch (G) {
                Ge(e, e.return, G);
              }
            } else if ((L.tag !== 22 && L.tag !== 23 || L.memoizedState === null || L === e) && L.child !== null) {
              L.child.return = L, L = L.child;
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              M === L && (M = null), L = L.return;
            }
            M === L && (M = null), L.sibling.return = L.return, L = L.sibling;
          }
        }
        break;
      case 19:
        $t(t, e), Jt(e), r & 4 && Au(e);
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
            if (Ru(n)) {
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
            var s = Lu(e);
            Hs(e, s, i);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo, d = Lu(e);
            Us(e, d, a);
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
    W = e, Iu(e);
  }
  function Iu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; W !== null; ) {
      var i = W, s = i.child;
      if (i.tag === 22 && r) {
        var a = i.memoizedState !== null || bi;
        if (!a) {
          var d = i.alternate, m = d !== null && d.memoizedState !== null || ft;
          d = bi;
          var x = ft;
          if (bi = a, (ft = m) && !x) for (W = i; W !== null; ) a = W, m = a.child, a.tag === 22 && a.memoizedState !== null ? Du(i) : m !== null ? (m.return = a, W = m) : Du(i);
          for (; s !== null; ) W = s, Iu(s), s = s.sibling;
          W = i, bi = d, ft = x;
        }
        Fu(e);
      } else (i.subtreeFlags & 8772) !== 0 && s !== null ? (s.return = i, W = s) : Fu(e);
    }
  }
  function Fu(e) {
    for (; W !== null; ) {
      var t = W;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ft || el(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ft) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : Bt(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var s = t.updateQueue;
              s !== null && Oa(t, s, r);
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
                Oa(t, a, n);
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
                var x = t.alternate;
                if (x !== null) {
                  var M = x.memoizedState;
                  if (M !== null) {
                    var L = M.dehydrated;
                    L !== null && Rr(L);
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
          ft || t.flags & 512 && $s(t);
        } catch (N) {
          Ge(t, t.return, N);
        }
      }
      if (t === e) {
        W = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, W = n;
        break;
      }
      W = t.return;
    }
  }
  function Ou(e) {
    for (; W !== null; ) {
      var t = W;
      if (t === e) {
        W = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, W = n;
        break;
      }
      W = t.return;
    }
  }
  function Du(e) {
    for (; W !== null; ) {
      var t = W;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              el(4, t);
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
        W = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        d.return = t.return, W = d;
        break;
      }
      W = t.return;
    }
  }
  var dd = Math.ceil, tl = ae.ReactCurrentDispatcher, Ws = ae.ReactCurrentOwner, At = ae.ReactCurrentBatchConfig, Se = 0, it = null, et = null, ot = 0, jt = 0, pr = kn(0), nt = 0, br = null, Vn = 0, nl = 0, Ks = 0, ei = null, wt = null, Qs = 0, mr = 1 / 0, un = null, rl = !1, Gs = null, Tn = null, il = !1, jn = null, ll = 0, ti = 0, qs = null, sl = -1, ol = 0;
  function pt() {
    return (Se & 6) !== 0 ? Je() : sl !== -1 ? sl : sl = Je();
  }
  function Cn(e) {
    return (e.mode & 1) === 0 ? 1 : (Se & 2) !== 0 && ot !== 0 ? ot & -ot : Yf.transition !== null ? (ol === 0 && (ol = Lo()), ol) : (e = Ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vo(e.type)), e);
  }
  function Ut(e, t, n, r) {
    if (50 < ti) throw ti = 0, qs = null, Error(o(185));
    Tr(e, n, r), ((Se & 2) === 0 || e !== it) && (e === it && ((Se & 2) === 0 && (nl |= n), nt === 4 && Nn(e, ot)), xt(e, r), n === 1 && Se === 0 && (t.mode & 1) === 0 && (mr = Je() + 500, Ii && xn()));
  }
  function xt(e, t) {
    var n = e.callbackNode;
    qc(e, t);
    var r = vi(e, e === it ? ot : 0);
    if (r === 0) n !== null && No(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && No(n), t === 1) e.tag === 0 ? qf(Vu.bind(null, e)) : Ta(Vu.bind(null, e)), Wf(function() {
        (Se & 6) === 0 && xn();
      }), n = null;
      else {
        switch (Po(r)) {
          case 1:
            n = Cl;
            break;
          case 4:
            n = Mo;
            break;
          case 16:
            n = di;
            break;
          case 536870912:
            n = Ro;
            break;
          default:
            n = di;
        }
        n = qu(n, Bu.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Bu(e, t) {
    if (sl = -1, ol = 0, (Se & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (vr() && e.callbackNode !== n) return null;
    var r = vi(e, e === it ? ot : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = al(e, r);
    else {
      t = r;
      var i = Se;
      Se |= 2;
      var s = Uu();
      (it !== e || ot !== t) && (un = null, mr = Je() + 500, Un(e, t));
      do
        try {
          md();
          break;
        } catch (d) {
          $u(e, d);
        }
      while (!0);
      ds(), tl.current = s, Se = i, et !== null ? t = 0 : (it = null, ot = 0, t = nt);
    }
    if (t !== 0) {
      if (t === 2 && (i = Nl(e), i !== 0 && (r = i, t = Ys(e, i))), t === 1) throw n = br, Un(e, 0), Nn(e, r), xt(e, Je()), n;
      if (t === 6) Nn(e, r);
      else {
        if (i = e.current.alternate, (r & 30) === 0 && !hd(i) && (t = al(e, r), t === 2 && (s = Nl(e), s !== 0 && (r = s, t = Ys(e, s))), t === 1)) throw n = br, Un(e, 0), Nn(e, r), xt(e, Je()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Hn(e, wt, un);
            break;
          case 3:
            if (Nn(e, r), (r & 130023424) === r && (t = Qs + 500 - Je(), 10 < t)) {
              if (vi(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                pt(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = ts(Hn.bind(null, e, wt, un), t);
              break;
            }
            Hn(e, wt, un);
            break;
          case 4:
            if (Nn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var a = 31 - Ft(r);
              s = 1 << a, a = t[a], a > i && (i = a), r &= ~s;
            }
            if (r = i, r = Je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dd(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ts(Hn.bind(null, e, wt, un), r);
              break;
            }
            Hn(e, wt, un);
            break;
          case 5:
            Hn(e, wt, un);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return xt(e, Je()), e.callbackNode === n ? Bu.bind(null, e) : null;
  }
  function Ys(e, t) {
    var n = ei;
    return e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256), e = al(e, t), e !== 2 && (t = wt, wt = n, t !== null && Xs(t)), e;
  }
  function Xs(e) {
    wt === null ? wt = e : wt.push.apply(wt, e);
  }
  function hd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r], s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ot(s(), i)) return !1;
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
    for (t &= ~Ks, t &= ~nl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ft(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Vu(e) {
    if ((Se & 6) !== 0) throw Error(o(327));
    vr();
    var t = vi(e, 0);
    if ((t & 1) === 0) return xt(e, Je()), null;
    var n = al(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Nl(e);
      r !== 0 && (t = r, n = Ys(e, r));
    }
    if (n === 1) throw n = br, Un(e, 0), Nn(e, t), xt(e, Je()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Hn(e, wt, un), xt(e, Je()), null;
  }
  function Js(e, t) {
    var n = Se;
    Se |= 1;
    try {
      return e(t);
    } finally {
      Se = n, Se === 0 && (mr = Je() + 500, Ii && xn());
    }
  }
  function $n(e) {
    jn !== null && jn.tag === 0 && (Se & 6) === 0 && vr();
    var t = Se;
    Se |= 1;
    var n = At.transition, r = Ce;
    try {
      if (At.transition = null, Ce = 1, e) return e();
    } finally {
      Ce = r, At.transition = n, Se = t, (Se & 6) === 0 && xn();
    }
  }
  function Zs() {
    jt = pr.current, ze(pr);
  }
  function Un(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Hf(n)), et !== null) for (n = et.return; n !== null; ) {
      var r = n;
      switch (os(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ai();
          break;
        case 3:
          fr(), ze(yt), ze(at), ws();
          break;
        case 5:
          gs(r);
          break;
        case 4:
          fr();
          break;
        case 13:
          ze($e);
          break;
        case 19:
          ze($e);
          break;
        case 10:
          hs(r.type._context);
          break;
        case 22:
        case 23:
          Zs();
      }
      n = n.return;
    }
    if (it = e, et = e = Mn(e.current, null), ot = jt = t, nt = 0, br = null, Ks = nl = Vn = 0, wt = ei = null, On !== null) {
      for (t = 0; t < On.length; t++) if (n = On[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, s = n.pending;
        if (s !== null) {
          var a = s.next;
          s.next = i, r.next = a;
        }
        n.pending = r;
      }
      On = null;
    }
    return e;
  }
  function $u(e, t) {
    do {
      var n = et;
      try {
        if (ds(), Ki.current = Yi, Qi) {
          for (var r = Ue.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Qi = !1;
        }
        if (Bn = 0, rt = tt = Ue = null, Gr = !1, qr = 0, Ws.current = null, n === null || n.return === null) {
          nt = 1, br = t, et = null;
          break;
        }
        e: {
          var s = e, a = n.return, d = n, m = t;
          if (t = ot, d.flags |= 32768, m !== null && typeof m == "object" && typeof m.then == "function") {
            var x = m, M = d, L = M.tag;
            if ((M.mode & 1) === 0 && (L === 0 || L === 11 || L === 15)) {
              var N = M.alternate;
              N ? (M.updateQueue = N.updateQueue, M.memoizedState = N.memoizedState, M.lanes = N.lanes) : (M.updateQueue = null, M.memoizedState = null);
            }
            var H = du(a);
            if (H !== null) {
              H.flags &= -257, hu(H, a, d, s, t), H.mode & 1 && fu(s, x, t), t = H, m = x;
              var K = t.updateQueue;
              if (K === null) {
                var G = /* @__PURE__ */ new Set();
                G.add(m), t.updateQueue = G;
              } else K.add(m);
              break e;
            } else {
              if ((t & 1) === 0) {
                fu(s, x, t), bs();
                break e;
              }
              m = Error(o(426));
            }
          } else if (Fe && d.mode & 1) {
            var Ze = du(a);
            if (Ze !== null) {
              (Ze.flags & 65536) === 0 && (Ze.flags |= 256), hu(Ze, a, d, s, t), cs(dr(m, d));
              break e;
            }
          }
          s = m = dr(m, d), nt !== 4 && (nt = 2), ei === null ? ei = [s] : ei.push(s), s = a;
          do {
            switch (s.tag) {
              case 3:
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var g = uu(s, m, t);
                Fa(s, g);
                break e;
              case 1:
                d = m;
                var v = s.type, k = s.stateNode;
                if ((s.flags & 128) === 0 && (typeof v.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Tn === null || !Tn.has(k)))) {
                  s.flags |= 65536, t &= -t, s.lanes |= t;
                  var F = cu(s, d, t);
                  Fa(s, F);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Wu(n);
      } catch (X) {
        t = X, et === n && n !== null && (et = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Uu() {
    var e = tl.current;
    return tl.current = Yi, e === null ? Yi : e;
  }
  function bs() {
    (nt === 0 || nt === 3 || nt === 2) && (nt = 4), it === null || (Vn & 268435455) === 0 && (nl & 268435455) === 0 || Nn(it, ot);
  }
  function al(e, t) {
    var n = Se;
    Se |= 2;
    var r = Uu();
    (it !== e || ot !== t) && (un = null, Un(e, t));
    do
      try {
        pd();
        break;
      } catch (i) {
        $u(e, i);
      }
    while (!0);
    if (ds(), Se = n, tl.current = r, et !== null) throw Error(o(261));
    return it = null, ot = 0, nt;
  }
  function pd() {
    for (; et !== null; ) Hu(et);
  }
  function md() {
    for (; et !== null && !Bc(); ) Hu(et);
  }
  function Hu(e) {
    var t = Gu(e.alternate, e, jt);
    e.memoizedProps = e.pendingProps, t === null ? Wu(e) : et = t, Ws.current = null;
  }
  function Wu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = od(n, t, jt), n !== null) {
          et = n;
          return;
        }
      } else {
        if (n = ad(n, t), n !== null) {
          n.flags &= 32767, et = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          nt = 6, et = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        et = t;
        return;
      }
      et = t = e;
    } while (t !== null);
    nt === 0 && (nt = 5);
  }
  function Hn(e, t, n) {
    var r = Ce, i = At.transition;
    try {
      At.transition = null, Ce = 1, vd(e, t, n, r);
    } finally {
      At.transition = i, Ce = r;
    }
    return null;
  }
  function vd(e, t, n, r) {
    do
      vr();
    while (jn !== null);
    if ((Se & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Yc(e, s), e === it && (et = it = null, ot = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || il || (il = !0, qu(di, function() {
      return vr(), null;
    })), s = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || s) {
      s = At.transition, At.transition = null;
      var a = Ce;
      Ce = 1;
      var d = Se;
      Se |= 4, Ws.current = null, cd(e, n), zu(n, e), Ff(bl), ki = !!Zl, bl = Zl = null, e.current = n, fd(n), Vc(), Se = d, Ce = a, At.transition = s;
    } else e.current = n;
    if (il && (il = !1, jn = e, ll = i), s = e.pendingLanes, s === 0 && (Tn = null), Hc(n.stateNode), xt(e, Je()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (rl) throw rl = !1, e = Gs, Gs = null, e;
    return (ll & 1) !== 0 && e.tag !== 0 && vr(), s = e.pendingLanes, (s & 1) !== 0 ? e === qs ? ti++ : (ti = 0, qs = e) : ti = 0, xn(), null;
  }
  function vr() {
    if (jn !== null) {
      var e = Po(ll), t = At.transition, n = Ce;
      try {
        if (At.transition = null, Ce = 16 > e ? 16 : e, jn === null) var r = !1;
        else {
          if (e = jn, jn = null, ll = 0, (Se & 6) !== 0) throw Error(o(331));
          var i = Se;
          for (Se |= 4, W = e.current; W !== null; ) {
            var s = W, a = s.child;
            if ((W.flags & 16) !== 0) {
              var d = s.deletions;
              if (d !== null) {
                for (var m = 0; m < d.length; m++) {
                  var x = d[m];
                  for (W = x; W !== null; ) {
                    var M = W;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zr(8, M, s);
                    }
                    var L = M.child;
                    if (L !== null) L.return = M, W = L;
                    else for (; W !== null; ) {
                      M = W;
                      var N = M.sibling, H = M.return;
                      if (Mu(M), M === x) {
                        W = null;
                        break;
                      }
                      if (N !== null) {
                        N.return = H, W = N;
                        break;
                      }
                      W = H;
                    }
                  }
                }
                var K = s.alternate;
                if (K !== null) {
                  var G = K.child;
                  if (G !== null) {
                    K.child = null;
                    do {
                      var Ze = G.sibling;
                      G.sibling = null, G = Ze;
                    } while (G !== null);
                  }
                }
                W = s;
              }
            }
            if ((s.subtreeFlags & 2064) !== 0 && a !== null) a.return = s, W = a;
            else e: for (; W !== null; ) {
              if (s = W, (s.flags & 2048) !== 0) switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Zr(9, s, s.return);
              }
              var g = s.sibling;
              if (g !== null) {
                g.return = s.return, W = g;
                break e;
              }
              W = s.return;
            }
          }
          var v = e.current;
          for (W = v; W !== null; ) {
            a = W;
            var k = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && k !== null) k.return = a, W = k;
            else e: for (a = v; W !== null; ) {
              if (d = W, (d.flags & 2048) !== 0) try {
                switch (d.tag) {
                  case 0:
                  case 11:
                  case 15:
                    el(9, d);
                }
              } catch (X) {
                Ge(d, d.return, X);
              }
              if (d === a) {
                W = null;
                break e;
              }
              var F = d.sibling;
              if (F !== null) {
                F.return = d.return, W = F;
                break e;
              }
              W = d.return;
            }
          }
          if (Se = i, xn(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(hi, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ce = n, At.transition = t;
      }
    }
    return !1;
  }
  function Ku(e, t, n) {
    t = dr(n, t), t = uu(e, t, 1), e = En(e, t, 1), t = pt(), e !== null && (Tr(e, 1, t), xt(e, t));
  }
  function Ge(e, t, n) {
    if (e.tag === 3) Ku(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ku(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Tn === null || !Tn.has(r))) {
          e = dr(n, e), e = cu(t, e, 1), t = En(t, e, 1), e = pt(), t !== null && (Tr(t, 1, e), xt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function yd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = pt(), e.pingedLanes |= e.suspendedLanes & n, it === e && (ot & n) === n && (nt === 4 || nt === 3 && (ot & 130023424) === ot && 500 > Je() - Qs ? Un(e, 0) : Ks |= n), xt(e, t);
  }
  function Qu(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = mi, mi <<= 1, (mi & 130023424) === 0 && (mi = 4194304)));
    var n = pt();
    e = sn(e, t), e !== null && (Tr(e, t, n), xt(e, n));
  }
  function gd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Qu(e, n);
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
    r !== null && r.delete(t), Qu(e, n);
  }
  var Gu;
  Gu = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || yt.current) kt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return kt = !1, sd(e, t, n);
      kt = (e.flags & 131072) !== 0;
    }
    else kt = !1, Fe && (t.flags & 1048576) !== 0 && ja(t, Oi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Zi(e, t), e = t.pendingProps;
        var i = ir(t, at.current);
        cr(t, n), i = Es(null, t, r, e, i, n);
        var s = _s();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, gt(r) ? (s = !0, zi(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, vs(t), i.updater = Xi, t.stateNode = i, i._reactInternals = t, Rs(t, r, e, n), t = zs(null, t, r, !0, s, n)) : (t.tag = 0, Fe && s && ss(t), ht(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Zi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = xd(r), e = Bt(r, e), i) {
            case 0:
              t = As(null, t, r, e, n);
              break e;
            case 1:
              t = ku(null, t, r, e, n);
              break e;
            case 11:
              t = pu(null, t, r, e, n);
              break e;
            case 14:
              t = mu(null, t, r, Bt(r.type, e), n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), As(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), ku(e, t, r, i, n);
      case 3:
        e: {
          if (wu(t), e === null) throw Error(o(387));
          r = t.pendingProps, s = t.memoizedState, i = s.element, Ia(e, t), Hi(t, r, null, n);
          var a = t.memoizedState;
          if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
            i = dr(Error(o(423)), t), t = xu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = dr(Error(o(424)), t), t = xu(e, t, r, n, i);
            break e;
          } else for (Tt = gn(t.stateNode.containerInfo.firstChild), _t = t, Fe = !0, Dt = null, n = Aa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (or(), r === i) {
              t = an(e, t, n);
              break e;
            }
            ht(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Da(t), e === null && us(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = i.children, es(r, i) ? a = null : s !== null && es(r, s) && (t.flags |= 32), gu(e, t), ht(e, t, a, n), t.child;
      case 6:
        return e === null && us(t), null;
      case 13:
        return Su(e, t, n);
      case 4:
        return ys(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : ht(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), pu(e, t, r, i, n);
      case 7:
        return ht(e, t, t.pendingProps, n), t.child;
      case 8:
        return ht(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ht(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, a = i.value, Le(Vi, r._currentValue), r._currentValue = a, s !== null) if (Ot(s.value, a)) {
            if (s.children === i.children && !yt.current) {
              t = an(e, t, n);
              break e;
            }
          } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
            var d = s.dependencies;
            if (d !== null) {
              a = s.child;
              for (var m = d.firstContext; m !== null; ) {
                if (m.context === r) {
                  if (s.tag === 1) {
                    m = on(-1, n & -n), m.tag = 2;
                    var x = s.updateQueue;
                    if (x !== null) {
                      x = x.shared;
                      var M = x.pending;
                      M === null ? m.next = m : (m.next = M.next, M.next = m), x.pending = m;
                    }
                  }
                  s.lanes |= n, m = s.alternate, m !== null && (m.lanes |= n), ps(
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
              a.lanes |= n, d = a.alternate, d !== null && (d.lanes |= n), ps(a, n, t), a = s.sibling;
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
          ht(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, cr(t, n), i = Lt(i), r = r(i), t.flags |= 1, ht(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Bt(r, t.pendingProps), i = Bt(r.type, i), mu(e, t, r, i, n);
      case 15:
        return vu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Zi(e, t), t.tag = 1, gt(r) ? (e = !0, zi(t)) : e = !1, cr(t, n), ou(t, r, i), Rs(t, r, i, n), zs(null, t, r, !0, e, n);
      case 19:
        return _u(e, t, n);
      case 22:
        return yu(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function qu(e, t) {
    return Co(e, t);
  }
  function wd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function zt(e, t, n, r) {
    return new wd(e, t, n, r);
  }
  function eo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function xd(e) {
    if (typeof e == "function") return eo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Oe) return 11;
      if (e === Ke) return 14;
    }
    return 2;
  }
  function Mn(e, t) {
    var n = e.alternate;
    return n === null ? (n = zt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ul(e, t, n, r, i, s) {
    var a = 2;
    if (r = e, typeof e == "function") eo(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
      case ne:
        return Wn(n.children, i, s, t);
      case he:
        a = 8, i |= 8;
        break;
      case Ne:
        return e = zt(12, n, t, i | 2), e.elementType = Ne, e.lanes = s, e;
      case Me:
        return e = zt(13, n, t, i), e.elementType = Me, e.lanes = s, e;
      case De:
        return e = zt(19, n, t, i), e.elementType = De, e.lanes = s, e;
      case Ee:
        return cl(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case xe:
            a = 10;
            break e;
          case We:
            a = 9;
            break e;
          case Oe:
            a = 11;
            break e;
          case Ke:
            a = 14;
            break e;
          case Re:
            a = 16, r = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = zt(a, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
  }
  function Wn(e, t, n, r) {
    return e = zt(7, e, r, t), e.lanes = n, e;
  }
  function cl(e, t, n, r) {
    return e = zt(22, e, r, t), e.elementType = Ee, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function to(e, t, n) {
    return e = zt(6, e, null, t), e.lanes = n, e;
  }
  function no(e, t, n) {
    return t = zt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Sd(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ml(0), this.expirationTimes = Ml(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ml(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function ro(e, t, n, r, i, s, a, d, m) {
    return e = new Sd(e, t, n, d, m), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = zt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, vs(s), e;
  }
  function Ed(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: U, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Yu(e) {
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
      if (gt(n)) return Ea(e, n, t);
    }
    return t;
  }
  function Xu(e, t, n, r, i, s, a, d, m) {
    return e = ro(n, r, !0, e, i, s, a, d, m), e.context = Yu(null), n = e.current, r = pt(), i = Cn(n), s = on(r, i), s.callback = t ?? null, En(n, s, i), e.current.lanes = i, Tr(e, i, r), xt(e, r), e;
  }
  function fl(e, t, n, r) {
    var i = t.current, s = pt(), a = Cn(i);
    return n = Yu(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = En(i, t, a), e !== null && (Ut(e, i, a, s), Ui(e, i, a)), a;
  }
  function dl(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Ju(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function io(e, t) {
    Ju(e, t), (e = e.alternate) && Ju(e, t);
  }
  function _d() {
    return null;
  }
  var Zu = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function lo(e) {
    this._internalRoot = e;
  }
  hl.prototype.render = lo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    fl(e, t, null, null);
  }, hl.prototype.unmount = lo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      $n(function() {
        fl(null, e, null, null);
      }), t[tn] = null;
    }
  };
  function hl(e) {
    this._internalRoot = e;
  }
  hl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Io();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < mn.length && t !== 0 && t < mn[n].priority; n++) ;
      mn.splice(n, 0, e), n === 0 && Do(e);
    }
  };
  function so(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function pl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function bu() {
  }
  function Td(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var s = r;
        r = function() {
          var x = dl(a);
          s.call(x);
        };
      }
      var a = Xu(t, r, e, 0, null, !1, !1, "", bu);
      return e._reactRootContainer = a, e[tn] = a.current, Br(e.nodeType === 8 ? e.parentNode : e), $n(), a;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var d = r;
      r = function() {
        var x = dl(m);
        d.call(x);
      };
    }
    var m = ro(e, 0, !1, null, null, !1, !1, "", bu);
    return e._reactRootContainer = m, e[tn] = m.current, Br(e.nodeType === 8 ? e.parentNode : e), $n(function() {
      fl(t, m, n, r);
    }), m;
  }
  function ml(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
      var a = s;
      if (typeof i == "function") {
        var d = i;
        i = function() {
          var m = dl(a);
          d.call(m);
        };
      }
      fl(t, a, e, i);
    } else a = Td(n, t, e, i, r);
    return dl(a);
  }
  Ao = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = _r(t.pendingLanes);
          n !== 0 && (Rl(t, n | 1), xt(t, Je()), (Se & 6) === 0 && (mr = Je() + 500, xn()));
        }
        break;
      case 13:
        $n(function() {
          var r = sn(e, 1);
          if (r !== null) {
            var i = pt();
            Ut(r, e, 1, i);
          }
        }), io(e, 1);
    }
  }, Ll = function(e) {
    if (e.tag === 13) {
      var t = sn(e, 134217728);
      if (t !== null) {
        var n = pt();
        Ut(t, e, 134217728, n);
      }
      io(e, 134217728);
    }
  }, zo = function(e) {
    if (e.tag === 13) {
      var t = Cn(e), n = sn(e, t);
      if (n !== null) {
        var r = pt();
        Ut(n, e, t, r);
      }
      io(e, t);
    }
  }, Io = function() {
    return Ce;
  }, Fo = function(e, t) {
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
              var i = Pi(r);
              if (!i) throw Error(o(90));
              b(r), Te(r, i);
            }
          }
        }
        break;
      case "textarea":
        je(e, n);
        break;
      case "select":
        t = n.value, t != null && Ye(e, !!n.multiple, t, !1);
    }
  }, wo = Js, xo = $n;
  var jd = { usingClientEntryPoint: !1, Events: [Ur, nr, Pi, Gn, qn, Js] }, ni = { findFiberByHostInstance: An, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cd = { bundleType: ni.bundleType, version: ni.version, rendererPackageName: ni.rendererPackageName, rendererConfig: ni.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ae.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = To(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ni.findFiberByHostInstance || _d, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      hi = vl.inject(Cd), Gt = vl;
    } catch {
    }
  }
  return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jd, St.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!so(t)) throw Error(o(200));
    return Ed(e, t, null, n);
  }, St.createRoot = function(e, t) {
    if (!so(e)) throw Error(o(299));
    var n = !1, r = "", i = Zu;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ro(e, 1, !1, null, null, n, !1, r, i), e[tn] = t.current, Br(e.nodeType === 8 ? e.parentNode : e), new lo(t);
  }, St.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = To(t), e = e === null ? null : e.stateNode, e;
  }, St.flushSync = function(e) {
    return $n(e);
  }, St.hydrate = function(e, t, n) {
    if (!pl(t)) throw Error(o(200));
    return ml(null, e, t, !0, n);
  }, St.hydrateRoot = function(e, t, n) {
    if (!so(e)) throw Error(o(405));
    var r = n != null && n.hydratedSources || null, i = !1, s = "", a = Zu;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Xu(t, null, e, 1, n ?? null, i, !1, s, a), e[tn] = t.current, Br(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new hl(t);
  }, St.render = function(e, t, n) {
    if (!pl(t)) throw Error(o(200));
    return ml(null, e, t, !1, n);
  }, St.unmountComponentAtNode = function(e) {
    if (!pl(e)) throw Error(o(40));
    return e._reactRootContainer ? ($n(function() {
      ml(null, null, e, !1, function() {
        e._reactRootContainer = null, e[tn] = null;
      });
    }), !0) : !1;
  }, St.unstable_batchedUpdates = Js, St.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!pl(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return ml(e, t, n, !1, r);
  }, St.version = "18.3.1-next-f1338f8080-20240426", St;
}
var oc;
function Fd() {
  if (oc) return uo.exports;
  oc = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (l) {
        console.error(l);
      }
  }
  return u(), uo.exports = Id(), uo.exports;
}
var ac;
function Od() {
  if (ac) return yl;
  ac = 1;
  var u = Fd();
  return yl.createRoot = u.createRoot, yl.hydrateRoot = u.hydrateRoot, yl;
}
var Dd = Od();
const Bd = (() => {
  const u = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], l = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], f = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, w = 7, S = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], E = ["e", "B", "G", "D", "A", "E"], T = ["ohut e", "B", "G", "D", "A", "paksu E"], R = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], _ = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], z = {
    mp: {
      name: "mollipentatoninen",
      base: R,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: R,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: R,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: R,
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
  }, V = 26, C = 72, P = 30, O = 54, q = 34, Q = 11, ee = (V + C) / 2, ae = P + (c.length - 1) * q + 30, J = (I) => C + I * O, U = (I) => I === 0 ? ee : J(I) - O / 2, ne = (I) => P + I * q;
  function he(I, B, A) {
    const Y = l.indexOf(u[I][0]) + Number(A.slice(-1)) - 1, ce = Y % l.length, b = o[ce] + 12 * Math.floor(Y / l.length), re = I + B - b;
    return l[ce] + (re < 0 ? "♭" : "♯").repeat(Math.abs(re));
  }
  function Ne(I) {
    return [...I.base, ...I.add].sort((B, A) => B[0] - A[0]);
  }
  function xe(I, B, A) {
    const Y = B + (A ? 1 : 0), ce = S[Y % S.length], b = Math.min(...ce.map(([Te]) => Te)), re = Math.max(...ce.map(([, Te]) => Te));
    let ge = (I - f % 12 + 12) % 12 - (A ? 8 : 5) + 12 * Math.floor(Y / S.length);
    return b + ge < 0 && (ge += 12), re + ge > h.pentatonic && (ge -= 12), {
      strings: ce.map((Te) => Te.map((Qe) => Qe + ge)),
      start: b + ge,
      end: re + ge
    };
  }
  function We(I, B, A) {
    const Y = A[B], ce = (I + Y - f % 12 + 12) % 12, b = f + ce - Y, re = c.map((te, ve) => {
      const ge = B + (c.length - 1 - ve) * 3;
      return [ge, ge + 1, ge + 2].map((Te) => {
        const Qe = Math.floor(Te / A.length), Ie = A[Te % A.length];
        return b + Ie + 12 * Qe - te;
      });
    });
    return {
      strings: re,
      start: Math.min(...re.map((te) => te[0])),
      end: Math.max(...re.map((te) => te.at(-1)))
    };
  }
  function Oe(I, B) {
    const A = [], Y = Math.ceil(-I.end / 12) * 12;
    for (let b = Y; I.start + b <= B; b += 12) {
      const re = I.strings.map((ve) => ve.map((ge) => ge + b).filter((ge) => ge >= 0 && ge <= B)), te = re.flat();
      A.push({
        strings: re,
        start: Math.min(...te),
        end: Math.max(...te),
        partial: I.start + b < 0 || I.end + b > B
      });
    }
    const ce = A.filter((b) => !b.partial);
    return ce.length ? ce : A;
  }
  function Me(I) {
    return Ne(I).length === w;
  }
  function De(I, B, A) {
    const Y = Me(B);
    I.querySelector('[value="3nps"]').disabled = !Y, I.value = Y ? A ?? "3nps" : "pentatonic";
  }
  function Ke(I, B, A, Y, ce) {
    const b = Ne(B).map(([re]) => re);
    return Y.map((re) => {
      const te = re - 1, ve = A === "3nps" ? We(I, te, b) : xe(I, te, B.base === _), ge = ce === void 0 ? [ve] : Oe(ve, ce);
      return { number: re, positions: ge };
    });
  }
  function Re(I, B) {
    const A = I.getBoundingClientRect(), Y = I.querySelectorAll(B);
    let ce = 1 / 0;
    Y.forEach((b) => {
      const re = b.getBoundingClientRect();
      let te = 0;
      re.left < A.left ? te = re.left - A.left - 8 : re.right > A.right && (te = re.right - A.right + 8), Math.abs(te) < Math.abs(ce) && (ce = te);
    }), Number.isFinite(ce) && (I.scrollLeft += ce);
  }
  function Ee(I, B = !1) {
    const A = I === "3nps" ? w : S.length;
    return Array.from({ length: A }, (Y, ce) => {
      const b = ce + 1;
      return '<label class="box-toggle" data-box="' + b + '"><input type="checkbox" value="' + b + '"' + (B && ce === 0 ? " checked" : "") + "> Boksi " + b + "</label>";
    }).join("");
  }
  function D(I, B) {
    const A = Ne(B), Y = new Map(A.map(([b, re]) => [b, he(I, b, re)])), ce = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return A.flatMap(([b, re]) => ce.flatMap(({ suffix: te, base: ve }) => {
      const ge = ve.map(([Te]) => Y.get((b + Te) % 12));
      return ge.every(Boolean) ? {
        root: (I + b) % 12,
        degree: Number(String(re).replace(/\D/g, "")),
        name: ge[0] + te,
        notes: ge,
        base: ve,
        add: []
      } : [];
    }));
  }
  function Z(I, B) {
    const A = I.base.map(([b]) => (I.root + b) % 12), Y = c.map((b) => {
      const re = [];
      for (let te = 0; te <= B; te++) {
        const ve = (b + te) % 12;
        A.includes(ve) && re.push({ fret: te, pitch: ve });
      }
      return re;
    }), ce = [];
    for (let b = 0; b <= Y.length - 3; b++)
      for (const re of Y[b])
        for (const te of Y[b + 1])
          if (re.pitch !== te.pitch)
            for (const ve of Y[b + 2]) {
              if (ve.pitch === re.pitch || ve.pitch === te.pitch) continue;
              const ge = [re.fret, te.fret, ve.fret], Te = Math.min(...ge), Qe = Math.max(...ge);
              if (Qe - Te > 3) continue;
              const Ie = Array(c.length).fill(null);
              Ie.splice(b, 3, ...ge), ce.push({ strings: Ie, low: Te, high: Qe });
            }
    return ce.sort((b, re) => b.high - re.high || b.low - re.low);
  }
  const $ = {
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
  function j(I, B) {
    const A = $[I + ":" + B];
    if (A) return { frets: A, barre: null };
    let Y = null;
    return y.forEach(({ string: ce, openPC: b, shapes: re }) => {
      const te = re[B];
      if (!te) return;
      let ve = (I - b + 12) % 12;
      if (ve + Math.min(...te.filter((Qe) => Qe !== null)) < 0 && (ve += 12), Y && Y.fret <= ve) return;
      const ge = te.map((Qe) => Qe === null ? null : ve + Qe), Te = ve > 0 && te.at(-1) === 0 ? { fret: ve, from: ce, to: te.length - 1 } : null;
      Y = { fret: ve, frets: ge, barre: Te };
    }), Y && { frets: Y.frets, barre: Y.barre };
  }
  function ue(I, { frets: B, barre: A }, Y) {
    const ge = [...c].reverse(), Te = B.filter((je) => je > 0), Ie = !Te.length || Math.max(...Te) <= 4 && (B.includes(0) || Math.min(...Te) === 1) ? 1 : Math.min(...Te), Be = (je) => 24 + je * 14, Ye = (je) => 30 + (je - Ie) * 18 + 18 / 2, Nt = 102;
    let Ve = '<svg class="chord-svg" viewBox="0 0 108 ' + (Nt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + Y + "-ote paksusta kielestä ohueen: " + B.map((je) => je ?? "x").join(" ") + '">';
    for (let je = 0; je <= 4; je++)
      Ve += '<line class="' + (je === 0 && Ie === 1 ? "nut" : "fret") + '" x1="' + Be(0) + '" y1="' + (30 + je * 18) + '" x2="' + Be(5) + '" y2="' + (30 + je * 18) + '"/>';
    return B.forEach((je, Xe) => {
      Ve += '<line class="string" x1="' + Be(Xe) + '" y1="30" x2="' + Be(Xe) + '" y2="' + Nt + '"/>';
    }), Ie > 1 && (Ve += '<text class="fret-label" x="15" y="' + (Ye(Ie) + 4) + '">' + Ie + "</text>"), A && (Ve += '<rect class="barre" x="' + (Be(A.from) - 6.5) + '" y="' + (Ye(A.fret) - 6.5) + '" width="' + ((A.to - A.from) * 14 + 13) + '" height="13" rx="6.5"/>'), B.forEach((je, Xe) => {
      if (je === null) {
        Ve += '<text class="marker" x="' + Be(Xe) + '" y="22">×</text>';
        return;
      }
      const Ht = (ge[Xe] + je) % 12 === I;
      if (je === 0) {
        Ve += '<circle class="open' + (Ht ? " root-open" : "") + '" cx="' + Be(Xe) + '" cy="18" r="4.5"/>';
        return;
      }
      A && je === A.fret && Xe >= A.from && Xe <= A.to && !Ht || (Ve += '<circle class="' + (Ht ? "root" : "tone") + '" cx="' + Be(Xe) + '" cy="' + Ye(je) + '" r="6.5"/>');
    }), Ve + "</svg>";
  }
  function de(I, B) {
    const A = new URLSearchParams(location.search), Y = u.indexOf(A.get("toonikka")), ce = A.get("asteikko");
    return {
      rootPC: Y === -1 ? I : Y,
      scaleId: Object.hasOwn(z, ce) ? ce : B
    };
  }
  function pe(I, B, A) {
    return I + "?" + new URLSearchParams({ toonikka: u[B], asteikko: A });
  }
  function me(I, B, A, {
    boxes: Y = [],
    onlyBoxNotes: ce = !1,
    automatic: b = !0,
    focusDegree: re = "",
    grip: te = null,
    barre: ve = null,
    label: ge = u[I] + " " + B.name,
    notes: Te = null,
    targets: Qe = !1,
    muteFret: Ie = null
  } = {}) {
    const Be = J(A), Ye = Be + 48, Nt = Ye + 28, Ve = P - 14, je = ne(c.length - 1) + 14, Xe = je - Ve, Ht = b ? 680 : Math.ceil(Nt * 0.64), Ln = Y.flatMap((oe) => oe.positions), It = {};
    B.base.forEach(([oe, ye]) => It[(I + oe) % 12] = { deg: ye, added: !1 }), B.add.forEach(([oe, ye]) => It[(I + oe) % 12] = { deg: ye, added: !0 });
    const Zt = c.map((oe, ye) => !!te && te[ye] === null), Wt = !!te && Ie !== null, Kt = T.filter((oe, ye) => Zt[ye]).reverse(), wr = ge + ". " + A + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Kt.length ? " Soittamatta jäävät kielet: " + Kt.join(", ") + "." : "");
    let se = '<svg viewBox="0 0 ' + Nt + " " + ae + '" style="min-width:' + Ht + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Qe ? "group" : "img") + '" aria-label="' + wr + '">';
    se += '<rect x="' + V + '" y="' + Ve + '" width="' + (C - V) + '" height="' + Xe + '" rx="6" fill="#2a2338"/>', se += '<rect x="' + C + '" y="' + Ve + '" width="' + (Be - C) + '" height="' + Xe + '" fill="#231a12"/>', se += '<rect x="' + Be + '" y="' + Ve + '" width="' + (Nt - Be - 4) + '" height="' + Xe + '" rx="8" fill="#32251e"/>';
    for (let oe = 1; oe <= A; oe++)
      se += '<line x1="' + J(oe) + '" y1="' + Ve + '" x2="' + J(oe) + '" y2="' + je + '" stroke="#6f5b47" stroke-width="2"/>';
    se += '<rect x="' + (C - 3) + '" y="' + Ve + '" width="6" height="' + Xe + '" rx="2" fill="#d8cbb6"/>', se += '<rect x="' + (Ye - 11) + '" y="' + (Ve + 3) + '" width="22" height="' + (Xe - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', se += '<rect x="' + (Ye - 4) + '" y="' + (Ve + 7) + '" width="3" height="' + (Xe - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const bt = (Ve + je) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((oe) => oe <= A).forEach((oe) => se += '<circle cx="' + U(oe) + '" cy="' + bt + '" r="5.5" fill="#7a6550"/>');
    for (let oe = 12; oe <= A; oe += 12)
      se += '<circle cx="' + U(oe) + '" cy="' + (bt - q) + '" r="5.5" fill="#7a6550"/>', se += '<circle cx="' + U(oe) + '" cy="' + (bt + q) + '" r="5.5" fill="#7a6550"/>';
    se += '<text x="' + ee + '" y="' + (ae - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', se += '<text x="' + C + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', se += '<text x="' + Ye + '" y="' + (ae - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let oe = 1; oe <= A; oe++)
      se += '<text x="' + U(oe) + '" y="' + (ae - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + oe + "</text>";
    if (Y.forEach(({ number: oe, positions: ye }) => {
      ye.forEach((ke) => {
        const Pe = ke.partial ? "box-highlight box-partial" : "box-highlight";
        se += '<g class="' + Pe + '" data-box="' + oe + '" aria-hidden="true">';
        const be = ke.strings.find((dt) => dt.length), en = (U(be[0]) + U(be.at(-1))) / 2;
        se += '<text class="box-number" x="' + en + '" y="12">' + oe + "</text>", ke.strings.forEach((dt, Qt) => {
          if (!dt.length) return;
          const Qn = U(dt[0]) - 16, Gn = U(dt.at(-1)) - U(dt[0]) + 32;
          se += '<rect class="box-band" x="' + Qn + '" y="' + (ne(Qt) - 14) + '" width="' + Gn + '" height="28" rx="14"/>';
        }), se += "</g>";
      });
    }), c.forEach((oe, ye) => {
      const ke = 1 + ye * 0.45, Pe = ne(ye), be = Zt[ye] && !Wt;
      be ? se += '<text class="muted-mark" x="' + ee + '" y="' + (Pe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : Zt[ye] && Ie === 0 || (se += '<line x1="' + (V + 4) + '" y1="' + Pe + '" x2="' + (C - 4) + '" y2="' + Pe + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), se += "<g" + (be ? ' opacity=".35"' : "") + ">", se += '<line x1="' + C + '" y1="' + Pe + '" x2="' + (Ye + 5) + '" y2="' + Pe + '" stroke="#b9b9c4" stroke-width="' + ke.toFixed(2) + '"/>', se += '<circle cx="' + (Ye + 5) + '" cy="' + Pe + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', se += "</g>", se += '<text x="13" y="' + (Pe + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + E[ye] + "</text>";
    }), te && ve && ve.fret >= 1 && ve.fret <= A) {
      const oe = ne(ve.from), ye = ne(ve.to), ke = Math.min(oe, ye) - 6, Pe = Math.max(oe, ye) + 6;
      se += '<rect class="barre-indicator" x="' + (U(ve.fret) - 7) + '" y="' + ke + '" width="14" height="' + (Pe - ke) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Qe && (se += '<g class="fret-targets">', c.forEach((oe, ye) => {
      for (let ke = 0; ke <= A; ke++) {
        const Pe = ke ? T[ye] + "-kieli, " + ke + ". nauha" : "vapaa " + T[ye] + "-kieli", be = ke ? O : C - V - 6;
        se += '<rect class="fret-target" role="button" tabindex="0" data-string="' + ye + '" data-fret="' + ke + '" data-midi="' + (oe + ke) + '" aria-label="' + Pe + '" x="' + (U(ke) - be / 2) + '" y="' + (ne(ye) - q / 2) + '" width="' + be + '" height="' + q + '" fill="transparent"/>';
      }
    }), se += "</g>"), (Te ?? []).forEach(({ string: oe, fret: ye, label: ke, kind: Pe }) => {
      se += '<g class="octave-note octave-' + Pe + '">', se += '<circle cx="' + U(ye) + '" cy="' + ne(oe) + '" r="' + Q + '"/>', se += '<text x="' + U(ye) + '" y="' + (ne(oe) + 3.5) + '" font-size="' + (ke.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + ke + "</text>", se += "</g>";
    }), te && (se += '<g class="grip-notes">'), (Te ? [] : c).forEach((oe, ye) => {
      for (let ke = 0; ke <= A; ke++) {
        const Pe = (oe + ke) % 12;
        if (!(Pe in It) || te && te[ye] !== ke || ce && !Ln.some(({ strings: Gn }) => {
          const qn = Gn[ye];
          return qn.length > 0 && ke >= qn[0] && ke <= qn.at(-1);
        })) continue;
        const be = It[Pe], en = be.deg === "1", dt = be.added ? "#f0a13c" : en ? "#4b2fd6" : "#6d4aff", Qt = be.added ? "#1a1430" : "#fff";
        be.deg === re && (se += '<circle class="focus-note" cx="' + U(ke) + '" cy="' + ne(ye) + '" r="14.5"/>');
        const Qn = te ? ' data-string="' + (ye + 1) + '" data-fret="' + ke + '" data-degree="' + be.deg + '"' : "";
        se += "<circle" + Qn + ' cx="' + U(ke) + '" cy="' + ne(ye) + '" r="' + Q + '" fill="' + dt + '" stroke="' + (en ? "#fff" : "#1a1430") + '" stroke-width="' + (en ? 2.5 : 1) + '"/>', se += '<text x="' + U(ke) + '" y="' + (ne(ye) + 3.5) + '" font-size="' + (be.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Qt + '" text-anchor="middle">' + be.deg + "</text>";
      }
    }), te && (se += "</g>"), Wt && Zt.forEach((oe, ye) => {
      if (!oe) return;
      const ke = U(Ie), Pe = ne(ye);
      se += '<g class="muted-mark grip-mute" data-string="' + (ye + 1) + '" data-fret="' + Ie + '">', se += '<circle cx="' + ke + '" cy="' + Pe + '" r="9" fill="' + (Ie === 0 ? "#2a2338" : "#231a12") + '"/>', se += '<text x="' + ke + '" y="' + (Pe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', se += "</g>";
    }), se += "</svg>", se;
  }
  return {
    CHROM: u,
    OPEN_PITCHES: c,
    PENT_MAJ: _,
    SCALES: z,
    noteName: he,
    scaleNotes: Ne,
    scaleTriads: D,
    triadGrips: Z,
    chordGrip: j,
    renderChordDiagram: ue,
    selectionFromURL: de,
    selectionHref: pe,
    renderBoard: me,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: Me,
    syncBoxSystem: De,
    fingeringBoxes: Ke,
    boxOptions: Ee,
    revealPositions: Re
  };
})();
globalThis.MusicMapFretboard = Bd;
function ho(u) {
  return 440 * Math.pow(2, (u - 69) / 12);
}
function Vd(u) {
  return 69 + 12 * Math.log2(u / 440);
}
function $d(u) {
  const l = Vd(u), o = Math.round(l), c = (l - o) * 100;
  return { midi: o, cents: c };
}
const Cc = globalThis.MusicMapFretboard, Ud = (u) => (u % 12 + 12) % 12, Hd = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Wd = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Kd = (u, l = !1, o = !1) => (l ? Wd : Hd)[Ud(u)] + (o ? Math.floor(u / 12) - 1 : ""), uc = ["ohut E", "B", "G", "D", "A", "paksu E"], Qd = (u) => u === 0 ? "vapaa kieli" : `${u}. nauha`, Gd = (u, l) => ({ string: u, fret: l, midi: Cc.OPEN_PITCHES[u] + l });
function qd(u, l, o) {
  return [...u].sort((c, f) => c - f).flatMap((c) => Array.from({ length: Math.max(0, o - l + 1) }, (f, h) => Gd(c, l + h)));
}
const ii = (u) => `${u.string}:${u.fret}`, Yd = 4e3;
class cc extends Error {
  name = "MicSetupError";
}
async function Xd(u, l) {
  if (!navigator.mediaDevices?.getUserMedia) throw new cc("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
      let T;
      await Promise.race([
        f.resume(),
        new Promise((R, _) => {
          T = setTimeout(() => _(new cc("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Yd);
        })
      ]).finally(() => clearTimeout(T));
    }
    const h = f.createMediaStreamSource(c), w = f, S = c.getAudioTracks?.()[0] ?? c.getTracks()[0], E = S?.getSettings?.() ?? {};
    return {
      context: f,
      source: h,
      stream: c,
      label: S?.label ?? "",
      deviceId: E.deviceId ?? "",
      channelCount: E.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((T) => T.stop()), h.disconnect(), l || w.close().catch(() => {
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
var po, fc;
function Zd() {
  if (fc) return po;
  fc = 1;
  function u(l) {
    if (this.size = l | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = l << 1;
    for (var o = new Array(this.size * 2), c = 0; c < o.length; c += 2) {
      const T = Math.PI * c / this.size;
      o[c] = Math.cos(T), o[c + 1] = -Math.sin(T);
    }
    this.table = o;
    for (var f = 0, h = 1; this.size > h; h <<= 1)
      f++;
    this._width = f % 2 === 0 ? f - 1 : f, this._bitrev = new Array(1 << this._width);
    for (var w = 0; w < this._bitrev.length; w++) {
      this._bitrev[w] = 0;
      for (var S = 0; S < this._width; S += 2) {
        var E = this._width - S - 2;
        this._bitrev[w] |= (w >>> S & 3) << E;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return po = u, u.prototype.fromComplexArray = function(o, c) {
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
    var o = this._out, c = this._csize, f = this._width, h = 1 << f, w = c / h << 1, S, E, T = this._bitrev;
    if (w === 4)
      for (S = 0, E = 0; S < c; S += w, E++) {
        const O = T[E];
        this._singleTransform2(S, O, h);
      }
    else
      for (S = 0, E = 0; S < c; S += w, E++) {
        const O = T[E];
        this._singleTransform4(S, O, h);
      }
    var R = this._inv ? -1 : 1, _ = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      w = c / h << 1;
      var z = w >>> 2;
      for (S = 0; S < c; S += w)
        for (var V = S + z, C = S, P = 0; C < V; C += 2, P += h) {
          const O = C, q = O + z, Q = q + z, ee = Q + z, ae = o[O], J = o[O + 1], U = o[q], ne = o[q + 1], he = o[Q], Ne = o[Q + 1], xe = o[ee], We = o[ee + 1], Oe = ae, Me = J, De = _[P], Ke = R * _[P + 1], Re = U * De - ne * Ke, Ee = U * Ke + ne * De, D = _[2 * P], Z = R * _[2 * P + 1], $ = he * D - Ne * Z, y = he * Z + Ne * D, j = _[3 * P], ue = R * _[3 * P + 1], de = xe * j - We * ue, pe = xe * ue + We * j, me = Oe + $, I = Me + y, B = Oe - $, A = Me - y, Y = Re + de, ce = Ee + pe, b = R * (Re - de), re = R * (Ee - pe), te = me + Y, ve = I + ce, ge = me - Y, Te = I - ce, Qe = B + re, Ie = A - b, Be = B - re, Ye = A + b;
          o[O] = te, o[O + 1] = ve, o[q] = Qe, o[q + 1] = Ie, o[Q] = ge, o[Q + 1] = Te, o[ee] = Be, o[ee + 1] = Ye;
        }
    }
  }, u.prototype._singleTransform2 = function(o, c, f) {
    const h = this._out, w = this._data, S = w[c], E = w[c + 1], T = w[c + f], R = w[c + f + 1], _ = S + T, z = E + R, V = S - T, C = E - R;
    h[o] = _, h[o + 1] = z, h[o + 2] = V, h[o + 3] = C;
  }, u.prototype._singleTransform4 = function(o, c, f) {
    const h = this._out, w = this._data, S = this._inv ? -1 : 1, E = f * 2, T = f * 3, R = w[c], _ = w[c + 1], z = w[c + f], V = w[c + f + 1], C = w[c + E], P = w[c + E + 1], O = w[c + T], q = w[c + T + 1], Q = R + C, ee = _ + P, ae = R - C, J = _ - P, U = z + O, ne = V + q, he = S * (z - O), Ne = S * (V - q), xe = Q + U, We = ee + ne, Oe = ae + Ne, Me = J - he, De = Q - U, Ke = ee - ne, Re = ae - Ne, Ee = J + he;
    h[o] = xe, h[o + 1] = We, h[o + 2] = Oe, h[o + 3] = Me, h[o + 4] = De, h[o + 5] = Ke, h[o + 6] = Re, h[o + 7] = Ee;
  }, u.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, f = this._width, h = 1 << f, w = c / h << 1, S, E, T = this._bitrev;
    if (w === 4)
      for (S = 0, E = 0; S < c; S += w, E++) {
        const oe = T[E];
        this._singleRealTransform2(S, oe >>> 1, h >>> 1);
      }
    else
      for (S = 0, E = 0; S < c; S += w, E++) {
        const oe = T[E];
        this._singleRealTransform4(S, oe >>> 1, h >>> 1);
      }
    var R = this._inv ? -1 : 1, _ = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      w = c / h << 1;
      var z = w >>> 1, V = z >>> 1, C = V >>> 1;
      for (S = 0; S < c; S += w)
        for (var P = 0, O = 0; P <= C; P += 2, O += h) {
          var q = S + P, Q = q + V, ee = Q + V, ae = ee + V, J = o[q], U = o[q + 1], ne = o[Q], he = o[Q + 1], Ne = o[ee], xe = o[ee + 1], We = o[ae], Oe = o[ae + 1], Me = J, De = U, Ke = _[O], Re = R * _[O + 1], Ee = ne * Ke - he * Re, D = ne * Re + he * Ke, Z = _[2 * O], $ = R * _[2 * O + 1], y = Ne * Z - xe * $, j = Ne * $ + xe * Z, ue = _[3 * O], de = R * _[3 * O + 1], pe = We * ue - Oe * de, me = We * de + Oe * ue, I = Me + y, B = De + j, A = Me - y, Y = De - j, ce = Ee + pe, b = D + me, re = R * (Ee - pe), te = R * (D - me), ve = I + ce, ge = B + b, Te = A + te, Qe = Y - re;
          if (o[q] = ve, o[q + 1] = ge, o[Q] = Te, o[Q + 1] = Qe, P === 0) {
            var Ie = I - ce, Be = B - b;
            o[ee] = Ie, o[ee + 1] = Be;
            continue;
          }
          if (P !== C) {
            var Ye = A, Nt = -Y, Ve = I, je = -B, Xe = -R * te, Ht = -R * re, Ln = -R * b, It = -R * ce, Zt = Ye + Xe, Wt = Nt + Ht, Kt = Ve + It, wr = je - Ln, se = S + V - P, bt = S + z - P;
            o[se] = Zt, o[se + 1] = Wt, o[bt] = Kt, o[bt + 1] = wr;
          }
        }
    }
  }, u.prototype._singleRealTransform2 = function(o, c, f) {
    const h = this._out, w = this._data, S = w[c], E = w[c + f], T = S + E, R = S - E;
    h[o] = T, h[o + 1] = 0, h[o + 2] = R, h[o + 3] = 0;
  }, u.prototype._singleRealTransform4 = function(o, c, f) {
    const h = this._out, w = this._data, S = this._inv ? -1 : 1, E = f * 2, T = f * 3, R = w[c], _ = w[c + f], z = w[c + E], V = w[c + T], C = R + z, P = R - z, O = _ + V, q = S * (_ - V), Q = C + O, ee = P, ae = -q, J = C - O, U = P, ne = q;
    h[o] = Q, h[o + 1] = 0, h[o + 2] = ee, h[o + 3] = ae, h[o + 4] = J, h[o + 5] = 0, h[o + 6] = U, h[o + 7] = ne;
  }, po;
}
var bd = Zd();
const eh = /* @__PURE__ */ Md(bd);
class ai {
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
    return new ai(
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
    return new ai(
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
    return new ai(l, (o) => Array(o));
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
  const [o, c, f] = [u - 1, u, u + 1], [h, w, S] = [l[o], l[c], l[f]], E = h / 2 - w + S / 2, T = -(h / 2) * (c + f) + w * (o + f) - S / 2 * (o + c), R = h * c * f / 2 - w * o * f + S * o * c / 2, _ = -T / (2 * E), z = E * _ * _ + T * _ + R;
  return [_, z];
}
class ui {
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
    return new ui(l, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(l) {
    return new ui(l, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(l) {
    return new ui(l, (o) => Array(o));
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
    this._autocorrelator = new ai(l, o), this._nsdfBuffer = o(l);
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
    ), [w, S] = nh(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [o / w, Math.min(S, 1)];
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
      const S = c.createAnalyser();
      S.fftSize = f, S.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(S, w) : l.source.connect(S), this.analysers.push(S), this.buffers.push(new Float32Array(new ArrayBuffer(f * 4)));
    }
    this.shortLength = Math.min(f, Math.max(256, Math.round(c.sampleRate * lh))), this.detector = ui.forFloat32Array(f), this.detector.minVolumeDecibels = -60;
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
  onset = new Nc();
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
      maxFreq: S = 1450,
      onFrame: E,
      onStableNote: T
    } = this.opts, R = this.analysers.map((ne, he) => (ne.getFloatTimeDomainData(this.buffers[he]), dc(this.buffers[he], this.buffers[he].length - this.shortLength))), _ = R.indexOf(Math.max(...R));
    _ !== this.channel && R[_] > (R[this.channel] ?? 0) * sh && (this.channel = _);
    const z = this.buffers[this.channel], V = R[this.channel], C = uh(z, z.length - this.shortLength), P = { rms: V, peak: C, channel: this.channel, levels: R }, O = V < c, q = this.onset.feed(V, l, c);
    if (O && dc(z, 0) < c) {
      this.gate.feed(null, l, f, !0, !1), E?.({ ...P, status: "silent" });
      return;
    }
    const [Q, ee] = this.detector.findPitch(z, this.mic.context.sampleRate);
    if (!isFinite(Q) || ee < o) {
      this.gate.feed(null, l, f, O, q), E?.({ ...P, status: O ? "silent" : "unclear", clarity: isFinite(ee) ? ee : 0 });
      return;
    }
    if (Q < w || Q > S) {
      this.gate.feed(null, l, f, O, q), E?.({ ...P, status: "out-of-range", frequency: Q, clarity: ee });
      return;
    }
    const { midi: ae, cents: J } = $d(Q);
    if (Math.abs(J) > h) {
      this.gate.feed(null, l, f, O, q), E?.({ ...P, status: "off-pitch", frequency: Q, clarity: ee, midi: ae, cents: J });
      return;
    }
    E?.({ ...P, status: "pitch", frequency: Q, clarity: ee, midi: ae, cents: J });
    const U = this.gate.feed(ae, l, f, O, q);
    U !== null && T?.({ midi: ae, frequency: Q, cents: J, clarity: ee, timestamp: l, heldMs: U.heldMs });
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
class Nc {
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
function dc(u, l = 0) {
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
let gr;
function Mc() {
  return (!gr || gr.state === "closed") && (gr = new AudioContext()), gr;
}
function ch() {
  const u = gr;
  gr = void 0, u?.close().catch(() => {
  });
}
const Rc = (u) => u instanceof Error ? u.name : "";
function fh(u) {
  const l = Rc(u);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(l) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : l === "NotFoundError" || l === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : l === "NotReadableError" || l === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : l === "MicSetupError" ? u.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class dh {
  constructor(l = (o) => Xd(o, Mc)) {
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
    } catch (S) {
      if (!l || f !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Rc(S))) throw S;
      h = await this.opener(void 0), w = !0;
    }
    if (f !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new oh(h, { ...o });
      const S = () => {
        this.mic === h && (this.stop(), c());
      }, E = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((T) => T.addEventListener("ended", S, { once: !0, signal: E.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && S();
      }, { signal: E.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: w };
    } catch (S) {
      throw this.stop(), S;
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
async function mo(u) {
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
class hc {
  constructor(l = Mc) {
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
    if (await mo(f), c !== this.token) return !1;
    const h = f.createGain();
    h.connect(f.destination), this.master = h;
    const w = Array.from({ length: 12 }, (T, R) => 1 / (R + 1) ** 1.3), S = f.createPeriodicWave?.(new Float32Array([0, ...w.map(() => 0)]), new Float32Array([0, ...w]));
    return l.forEach((T, R) => {
      const _ = f.createOscillator(), z = f.createGain(), V = f.currentTime + 0.05 + R * 0.8;
      S ? _.setPeriodicWave(S) : _.type = "triangle", _.frequency.value = ho(T), z.gain.setValueAtTime(0, V), z.gain.linearRampToValueAtTime(0.22, V + 0.012), z.gain.exponentialRampToValueAtTime(1e-3, V + 0.7), _.connect(z), z.connect(h), _.start(V), _.stop(V + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(R);
      }, 50 + R * 800));
    }), !await new Promise((T) => {
      this.settle = T, this.timer = setTimeout(() => T(!0), l.length * 800 + 350);
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
    if (await mo(w), h !== this.token) return !1;
    const S = 60 / Math.max(40, Math.min(140, o)), E = w.createGain();
    E.connect(w.destination), this.master = E;
    const T = Array.from({ length: 12 }, (C, P) => 1 / (P + 1) ** 1.3), R = w.createPeriodicWave?.(
      new Float32Array([0, ...T.map(() => 0)]),
      new Float32Array([0, ...T])
    ), _ = w.currentTime + 0.05;
    let z = 0;
    return l.forEach((C, P) => {
      if (!Number.isFinite(C.beat) || C.beat < 0 || !Number.isFinite(C.duration) || C.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const O = _ + C.beat * S, q = C.duration * S, Q = O + Math.max(0.08, q * 0.94), ee = w.createOscillator(), ae = w.createGain();
      R ? ee.setPeriodicWave(R) : ee.type = "triangle", ee.frequency.value = ho(C.midi), ae.gain.setValueAtTime(0, O), ae.gain.linearRampToValueAtTime(0.22, O + 0.012), ae.gain.exponentialRampToValueAtTime(1e-3, Q - 0.01), ee.connect(ae), ae.connect(E), ee.start(O), ee.stop(Q), c && this.noteTimers.push(setTimeout(() => {
        h === this.token && c(P);
      }, 50 + C.beat * S * 1e3));
      const J = l[P + 1]?.beat ?? 1 / 0;
      f && J > C.beat + C.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && f();
      }, 50 + C.beat * S * 1e3 + q * 1e3)), z = Math.max(z, C.beat + C.duration);
    }), !await new Promise((C) => {
      this.settle = C, this.timer = setTimeout(() => C(!0), 50 + z * S * 1e3 + 150);
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
    if (await mo(h), f !== this.token) return !1;
    const w = h.createGain();
    w.connect(h.destination), this.master = w;
    const S = Array.from({ length: 12 }, (P, O) => 1 / (O + 1) ** 1.3), E = h.createPeriodicWave?.(new Float32Array([0, ...S.map(() => 0)]), new Float32Array([0, ...S]));
    let T = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (P) => {
      f === this.token && Number.isFinite(P) && (T = 60 / Math.max(40, Math.min(140, P)));
    };
    const R = 1.6;
    let _ = h.currentTime + 0.05, z = 0;
    const V = [], C = () => {
      if (f === this.token) {
        if (_ < h.currentTime - 0.02) {
          const P = Math.ceil((h.currentTime - _) / T);
          _ += P * T, z = (z + P) % l.length, V.length = 0;
        }
        for (; _ < h.currentTime + R; ) {
          const P = l[z], O = z, q = _, Q = h.createOscillator(), ee = h.createGain();
          E ? Q.setPeriodicWave(E) : Q.type = "triangle", Q.frequency.value = ho(P), ee.gain.setValueAtTime(0, q), ee.gain.linearRampToValueAtTime(0.22, q + 0.012), ee.gain.exponentialRampToValueAtTime(1e-3, q + T * 0.975), Q.connect(ee), ee.connect(w), Q.start(q), Q.stop(q + T * 0.985), V.push({ at: q, index: O }), _ += T, z = (z + 1) % l.length;
        }
        for (; V.length && V[0].at <= h.currentTime + 0.01; ) {
          const P = V.shift();
          o?.(P.index);
        }
      }
    };
    return C(), this.loopTick = setInterval(C, 25), new Promise((P) => {
      this.settle = P;
    });
  }
}
const mh = /* @__PURE__ */ new Set([12, 19, 24, 28, 31, 36]), vh = 0.25;
class pc {
  constructor(l) {
    this.opts = l;
  }
  opts;
  onset = new Nc();
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
    const { minRms: c, stabilityMs: f, releaseMs: h = 120, gapMs: w = 80 } = this.opts, S = l.rms < c, E = this.onset.feed(l.rms, o, c);
    if (S ? (this.quietSince ??= o, o - this.quietSince >= h && this.arm("quiet")) : (this.quietSince = null, E && this.arm("onset")), this.notePeak = Math.max(this.notePeak, l.rms), l.status !== "pitch" || l.midi === void 0)
      return this.current && o - this.current.seen > w && (this.current = null), this.reason = l.status === "pitch" ? "unclear" : l.status, null;
    const T = l.midi;
    let R = this.armedBy;
    if (!this.armed) {
      const V = this.previous;
      if (!V || T === V.midi)
        return this.current = null, this.reason = "waiting-new-pluck", null;
      if (mh.has(Math.abs(T - V.midi)))
        return this.current = null, this.reason = "harmonic", null;
      if (l.rms < V.peak * vh)
        return this.current = null, this.reason = "too-quiet-for-change", null;
      R = "pitch-change";
    }
    (!this.current || this.current.midi !== T) && (this.current = { midi: T, since: o, seen: o, armedBy: R }, R === "pitch-change" && (this.notePeak = l.rms)), this.current.seen = o;
    const _ = o - this.current.since;
    if (_ < f)
      return this.reason = "stabilizing", null;
    const z = this.current.armedBy;
    return this.armed = !1, this.armedBy = null, this.current = null, this.previous = { midi: T, peak: this.notePeak }, this.last = { midi: T, at: o, armedBy: z }, this.count++, this.reason = null, { midi: T, frequency: l.frequency ?? 0, cents: l.cents ?? 0, clarity: l.clarity ?? 0, timestamp: o, heldMs: _, armedBy: z };
  }
  arm(l) {
    this.armed = !0, this.armedBy = l, this.current = null, this.notePeak = 0;
  }
}
const Kn = { minRms: 0.01, minClarity: 0.94, stabilityMs: 240, centsTolerance: 35 };
function yh(u, l, o) {
  return (c) => {
    const f = l.feed(c, o());
    u.onFrame(c, l.state()), f && u.onStable(f);
  };
}
class gh {
  mic = new dh();
  player = new hc();
  /** Oma soitin painalluksille, jotta nopea uusi painallus ei keskeytä mallia eikä päinvastoin. */
  strings = new hc();
  minRms = Kn.minRms;
  detector = new pc({ minRms: Kn.minRms, stabilityMs: Kn.stabilityMs });
  async openMic(l, o) {
    this.detector = new pc({ minRms: this.minRms, stabilityMs: Kn.stabilityMs });
    const c = yh(l, this.detector, () => performance.now());
    return this.mic.start(o, { ...Kn, minRms: this.minRms, onFrame: c }, l.onEnded);
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
const kh = [64, 59, 55, 50, 45, 40], ko = [0, 1, 2, 3, 4, 5], wh = 0, xh = 5, Ct = (u, l, o, c) => ({
  id: u,
  title: l,
  tip: c,
  spots: o.map(([f, h]) => ({ string: f, fret: h })),
  midi: o.map(([f, h]) => kh[f] + h)
}), fn = (u, l) => l.map((o) => [u, o]), mt = 1, cn = 2, li = 59, si = Ct("opastus", "Opastus: kaksi säveltä", fn(mt, [0, 1]), "Vapaa B-kieli ja sitten 1. nauha."), mc = "Soita B-kielellä (toiseksi ohuin kieli).", vt = [
  { number: 1, title: "Ensimmäiset riffit", strings: [mt], instruction: mc, riffs: [
    Ct("b-kaari", "Ensimmäinen kaiku", fn(mt, [0, 1, 3, 1]), "Vapaa kieli, 1., 3. ja takaisin 1. nauhaan."),
    Ct("b-vaihto", "Edestakaisin", fn(mt, [1, 0, 1, 3]), "1. nauha, vapaa kieli, 1. ja 3. nauha."),
    Ct("b-lasku", "Laskeva kaiku", fn(mt, [5, 3, 1, 0]), "Alaspäin: 5., 3., 1. nauha ja vapaa kieli.")
  ] },
  { number: 2, title: "Muista melodia", strings: [mt], instruction: mc, riffs: [
    Ct("b-kumpu", "Kumpu", fn(mt, [0, 3, 5, 3]), "Vapaa kieli, 3., 5. ja takaisin 3. nauhaan."),
    Ct("b-toisto", "Toistuva alku", fn(mt, [5, 5, 3, 1]), "Kaksi näppäystä 5. nauhalla, sitten 3. ja 1. Vaimenna kieli hetkeksi samojen sävelten välissä."),
    Ct("b-hyppy", "Hyppivä kaiku", fn(mt, [0, 5, 1, 3]), "Vapaa kieli, hyppy 5. nauhaan, sitten 1. ja 3. nauha.")
  ] },
  { number: 3, title: "Kaksi kieltä", strings: [mt, cn], instruction: "Soita G- ja B-kielellä (kolmanneksi ja toiseksi ohuin kieli).", riffs: [
    Ct("gb-nousu", "Kahden kielen nousu", [[cn, 0], [cn, 2], [mt, 0], [mt, 1]], "G-kieli vapaa ja 2. nauha, sitten B-kieli vapaa ja 1. nauha."),
    Ct("g-kaksi-a", "Kaksi samaa", [[cn, 2], [cn, 2], [mt, 1], [cn, 2]], "Kaksi erillistä näppäystä G-kielen 2. nauhalla, C B-kielen 1. nauhalta. Vaimenna kieli A:iden välissä."),
    Ct("gb-kaari", "Kahden kielen kaari", [[cn, 2], [mt, 1], [mt, 3], [cn, 2]], "G-kielen 2. nauha, B-kielen 1. ja 3. nauha ja takaisin G-kielelle.")
  ] },
  { number: 4, title: "Laajempi otelauta", strings: [...ko], instruction: "Soita millä kielellä tahansa, nauhat 0–5.", riffs: [
    Ct("e-hyppy", "Hyppy ylös", fn(0, [0, 5, 3, 0]), "Ohut E-kieli: vapaa, hyppy 5. nauhaan, 3. ja vapaa."),
    Ct("d-molli", "Mollinen kaiku", fn(3, [0, 3, 5, 0]), "D-kieli: vapaa, 3., 5. ja taas vapaa."),
    Ct("am-arpeggio", "Kielten yli", [[4, 0], [4, 3], [3, 2], [cn, 2]], "A-kieli vapaa ja 3. nauha, D-kielen 2. ja G-kielen 2. nauha.")
  ] }
], Sh = vt.flatMap((u) => u.riffs), Eh = (u) => vt.find((l) => l.riffs.some((o) => o.id === u));
class _h {
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
const Th = 3;
class jh {
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
    return this.failed >= Th;
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
    return this.absorb(), this.current = new _h(this.expected, l, this.input), this.current;
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
class Ch {
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
const Lc = 440, yo = (u) => Lc * 2 ** ((u - 69) / 12), xl = (u, l) => 1200 * Math.log2(u / l), wl = 5, Nh = 100, Sl = [
  { name: "E2", midi: 40, number: 6 },
  { name: "A2", midi: 45, number: 5 },
  { name: "D3", midi: 50, number: 4 },
  { name: "G3", midi: 55, number: 3 },
  { name: "B3", midi: 59, number: 2 },
  { name: "E4", midi: 64, number: 1 }
], Mh = (u) => {
  const l = [...u].sort((c, f) => c - f), o = l.length >> 1;
  return l.length % 2 ? l[o] : (l[o - 1] + l[o]) / 2;
}, Rh = (u) => Sl.reduce((l, o) => Math.abs(xl(u, yo(o.midi))) < Math.abs(xl(u, yo(l.midi))) ? o : l);
class Lh {
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
    const h = Mh(this.samples.map((V) => V.frequency)), w = xl(Math.max(...this.samples.map((V) => V.frequency)), Math.min(...this.samples.map((V) => V.frequency))), S = this.samples[this.samples.length - 1].at - this.samples[0].at, E = this.target ?? Rh(h), T = Math.round(69 + 12 * Math.log2(h / Lc));
    if (this.samples.length < this.minSamples || S < 100 || w > this.maxSpreadCents)
      return { status: "unreliable", target: E, auto: !this.target, frequency: h, heardMidi: T };
    const R = xl(h, yo(E.midi));
    if (Math.abs(R) > Nh)
      return this.smoothed = null, { status: "far", target: E, auto: !this.target, frequency: h, cents: R, heardMidi: T };
    this.smoothed = this.smoothed === null ? R : this.smoothed + this.smoothing * (R - this.smoothed);
    const _ = this.smoothed;
    return { status: Math.abs(_) <= wl ? "in-tune" : _ < 0 ? "flat" : "sharp", target: E, auto: !this.target, frequency: h, cents: _, heardMidi: T };
  }
}
const vo = ["mic-check", "tools", "model-playing", "output-settling", "listening", "success", "retry", "level-complete"], Ph = ["listening", "success", "retry", "level-complete"], Ah = 1e3, zh = 80, qe = (u) => Kd(u, !1, !0), vc = (u) => u.midi.map(() => "pending");
class Ih {
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
      hint: !1,
      fullBoard: o.data.fullBoard,
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
      minRms: Kn.minRms,
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
  settler = new Ch();
  settleTimer;
  roundStart = null;
  replays = 0;
  pausedFrom = null;
  /** Mikrofonitestin tai työkalujen jälkeen jatkettava riffi (laitteen vaihto kesken riffin). */
  afterCheck = null;
  toolsReturn = "idle";
  calibration = null;
  tunerEngine = new Lh();
  lastView = -1 / 0;
  routed = { count: 0, last: null };
  /** Vastaustavan tallennettu kohta: opastus, tason seuraava riffi tai läpäisty taso. */
  position(l) {
    const o = this.store.level(l);
    if (!this.store.data.tutorialDone) return { riff: si, tutorial: !0, level: vt[0], riffNumber: 1, marks: vc(si) };
    const c = this.store.currentRiff(l) ?? o.riffs[o.riffs.length - 1];
    return { riff: c, tutorial: !1, level: o, riffNumber: o.riffs.indexOf(c) + 1, marks: vc(c) };
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
  setFullBoard(l) {
    this.store.setFullBoard(l), this.set({ fullBoard: l });
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
    if (this.store.setDevice(l), this.set({ device: l }), this.state.input !== "mic" || !["permission", "error", ...vo, "paused"].includes(this.state.phase)) return;
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
    const o = hh(l), c = o.loud ? Kn.minRms : o.threshold;
    this.audio.setMinRms(c), this.audio.rearm();
    const f = this.state.phase === "mic-check";
    this.set({ calibrating: !1, minRms: c, noise: o, feedback: o.loud ? { tone: "bad", text: "Taustalla kuului ääntä mittauksen aikana. Käytössä on oletuskynnys. Vaimenna kielet ja mittaa uudelleen." } : f ? { tone: "info", text: `Soita vapaa B-kieli (${qe(li)}) ja anna sen soida hetki.` } : null });
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
    this.state.phase === "tools" && (this.toolsReturn === "mic-check" ? (this.audio.rearm(), this.set({ phase: "mic-check", feedback: this.state.check === "waiting" ? { tone: "info", text: `Soita vapaa B-kieli (${qe(li)}) ja anna sen soida hetki.` } : this.state.feedback })) : this.stop());
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
    ["idle", "level-complete", "success", "retry", "listening", "paused"].includes(this.state.phase) && (++this.op, this.cancelTimers(), this.audio.stopModel(), this.micOpen && this.audio.pauseAnalysis(), this.set({ phase: "levels", unlockedLevels: this.store.unlockedLevels(this.state.input), completedLevels: this.store.completedLevels(this.state.input), feedback: null, hint: !1 }));
  }
  /**
   * Valitse taso: läpäisty, nykyinen tai seuraava avattu. Nykyinen taso jatkuu siitä, mihin jäätiin;
   * muu taso (tai restart) alkaa ensimmäisestä riffistä. Läpäistyt tasot säilyvät aina.
   */
  chooseLevel(l, o = !1) {
    this.state.phase !== "levels" || !this.store.unlockedLevels(this.state.input).includes(l) || ((o || l !== this.store.run(this.state.input).level) && this.store.startLevel(this.state.input, l), this.store.finishTutorial(), this.beginRound());
  }
  // ---- kierros ----
  /** Uusi riffi (tai uusi yritys samalla riffillä: riff annettu). */
  beginRound(l, o = !0) {
    if (this.state.input === "mic" && !this.micOpen) {
      this.openMicThen(() => this.beginRound(l, o));
      return;
    }
    const c = this.position(this.state.input);
    if (!c.tutorial && !l && this.store.currentRiff(this.state.input) === null) {
      this.showLevelComplete();
      return;
    }
    const f = c.tutorial ? si : l ?? c.riff, h = !!this.practice && this.practiceRiff === f.id && this.practice.input === this.state.input;
    h || (this.practice = new jh(f.midi, this.state.input), this.practiceRiff = f.id), this.replays = 0, this.roundStart = null, this.set({
      ...c,
      riff: f,
      riffNumber: c.tutorial ? 1 : c.level.riffs.indexOf(f) + 1,
      hint: h ? this.state.hint : !1,
      feedback: null,
      lastStable: null,
      unlockedLevels: this.store.unlockedLevels(this.state.input),
      tuner: null,
      diag: this.state.diagOpen ? this.state.diag : null
    }), this.startAttempt(), o ? this.playModel(!0) : (this.micOpen && this.audio.resumeAnalysis(), this.startListening());
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
    this.set({ phase: c, playing: null });
    let f;
    try {
      f = await this.audio.playModel(this.state.riff.midi, (h) => {
        o === this.op && this.set({ playing: h });
      });
    } catch (h) {
      if (o !== this.op) return;
      this.set({ feedback: { tone: "bad", text: ph(h) + " Voit silti soittaa riffin sävelvihjeen avulla." } }), f = !0;
    }
    o !== this.op || !f || (this.set({ playing: null }), l ? this.afterModel(o) : this.micOpen && this.audio.pauseAnalysis());
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
  // ---- mikrofonin tapahtumat ----
  onFrame(l, o) {
    const c = this.clock(), f = { status: l.status, midi: l.status === "pitch" || l.status === "off-pitch" ? l.midi : void 0 }, h = this.state.heard;
    (!h || h.status !== f.status || h.midi !== f.midi) && this.set({ heard: f });
    const w = this.state.phase;
    this.calibration && (w === "mic-check" || w === "tools") && (this.calibration.samples.push(l.rms), c - this.calibration.start >= Ah && this.finishCalibration(this.calibration.samples)), w === "output-settling" && this.settler.feed(l.status === "silent", c) !== "settling" && this.startListening();
    const S = w === "tools" ? this.tunerEngine.feed(l, c) : null, E = this.state.diagOpen || w === "tools" || w === "mic-check";
    (S || E) && c - this.lastView >= zh && (this.lastView = c, this.set({ ...S ? { tuner: S } : {}, ...E ? { diag: { frame: l, pluck: o, minRms: this.state.minRms, routed: this.routed } } : {} }));
  }
  route(l, o) {
    this.routed = { count: this.routed.count + 1, last: { midi: l.midi, at: l.timestamp, route: o, phase: this.state.phase } }, this.state.diag && this.set({ diag: { ...this.state.diag, routed: this.routed } });
  }
  onStable(l) {
    const o = this.state.phase;
    if (o === "mic-check" && !this.state.calibrating) {
      this.route(l, "mic-check");
      const c = l.midi === li;
      this.set({ lastStable: l.midi, check: c ? "ok" : "other", feedback: c ? { tone: "good", text: `Kuulin ${qe(l.midi)}. Mikrofoni toimii.` } : { tone: "info", text: `Kuulin ${qe(l.midi)}. Mikrofoni toimii, mutta testisävel on ${qe(li)}: vapaa B-kieli, toiseksi ohuin kieli. Tarkista tarvittaessa viritys.` } });
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
    return this.state.input !== "board" || !Ph.includes(o) ? !1 : (this.audio.pluck(l), o === "listening" && this.answer(l, "board"), !0);
  }
  answer(l, o) {
    const c = this.checker;
    if (!c) return;
    const f = c.feed({ midi: l, round: this.round, input: o }), h = c.expected.length;
    f.type === "accepted" ? (this.set({ index: f.index + 1, marks: c.marks, feedback: { tone: "good", text: f.mark === "yellow" ? `${qe(l)} löytyi (${f.index + 1}/${h}). Kohta korjattiin, joten pallukka on keltainen.` : `${qe(l)} oikein (${f.index + 1}/${h}).` } }), f.complete && this.finish(c)) : f.type === "wrong" && this.set({ marks: c.marks, feedback: { tone: "bad", text: o === "mic" ? `Väärä sävel (kuulin ${qe(f.played)}). Kokeile uudelleen.` : "Väärä sävel. Kokeile uudelleen." } });
  }
  /** Riffi soitettu loppuun: virheetön → success / level-complete, keltaisia → retry. Kirjataan kerran. */
  finish(l) {
    this.micOpen && this.audio.pauseAnalysis();
    const o = this.state.riff, c = this.practice.finish(), f = this.practice.failedAttempts, { levelComplete: h } = this.store.record({
      riff: o.id,
      input: l.input,
      hint: l.hintUsed,
      passed: c,
      wrong: l.wrongCount,
      octave: l.octaveCount,
      replays: this.replays,
      ms: Math.max(0, Math.round(this.clock() - (this.roundStart ?? this.clock()))),
      at: Date.now()
    });
    this.set({ completedLevels: this.store.completedLevels(l.input), unlockedLevels: this.store.unlockedLevels(l.input), failedAttempts: f }), o.id === si.id ? (this.practice = null, this.set({ phase: "success", feedback: { tone: "good", text: c ? "Hienoa! Opastus on tehty. Seuraavaksi taso 1: kolme riffiä B-kielellä." : "Opastus on tehty. Tasoilla riffi hyväksytään, kun kaikki pallukat ovat vihreitä." } })) : c ? (this.practice = null, h ? this.showLevelComplete() : this.set({ phase: "success", feedback: { tone: "good", text: l.hintUsed ? "Virheetön, sävelvihjeen kanssa!" : "Virheetön! Kaikki pallukat vihreinä." } })) : this.set({ phase: "retry", feedback: { tone: "info", text: "Soitit riffin loppuun! Kokeile vielä ilman virheitä." + (this.practice.memoryActive ? " Muistivihjeet ovat käytössä: aiemmin heti oikein soitetut sävelet näkyvät pallukoissa." : "") } });
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
  /** Kuuntele malli uudelleen. Vastausvuorossa yritys alkaa alusta, koska riffi kuullaan alusta. */
  replay() {
    const l = this.state.phase;
    if (l === "success" || l === "retry") {
      this.playModel(!1);
      return;
    }
    ["listening", "output-settling", "model-playing"].includes(l) && (this.replays++, this.startAttempt(), this.set({ feedback: null }), this.playModel(!0));
  }
  /** Aloita alusta kesken yrityksen: sama riffi ilman mallia. Ei ole epäonnistunut kokonaisyritys. */
  restart() {
    ["listening", "output-settling"].includes(this.state.phase) && (this.startAttempt(), this.set({ feedback: { tone: "info", text: "Aloita riffi alusta." } }), this.startListening());
  }
  /** Keltaisten kohtien jälkeen: sama riffi uutena yrityksenä, ilman mallia (oletus) tai mallin kanssa. */
  retry(l = !1) {
    this.state.phase === "retry" && this.beginRound(this.state.riff, l);
  }
  toggleHint() {
    const l = !this.state.hint;
    l && this.checker?.useHint(), this.set({ hint: l });
  }
  next() {
    this.state.phase === "success" && this.beginRound();
  }
  /** Onnittelunäkymästä: seuraava taso. Ei koskaan automaattisesti. */
  continueLevel() {
    if (this.state.phase !== "level-complete") return;
    const l = this.state.level.number + 1;
    vt.some((o) => o.number === l) && (this.store.startLevel(this.state.input, l), this.beginRound());
  }
  /** Onnittelunäkymästä: sama taso alusta (tai annettu taso, esim. viimeisen jälkeen taso 1). */
  repeatLevel(l = this.state.level.number) {
    this.state.phase === "level-complete" && (this.store.startLevel(this.state.input, l), this.beginRound());
  }
  /** Tauko: soitto pysähtyy ja mikrofoni vapautetaan. Jatko vaatii painalluksen. */
  pause(l) {
    vo.includes(this.state.phase) && (this.pausedFrom = this.state.phase, ++this.op, this.cancelTimers(), this.calibration = null, this.audio.stopModel(), this.closeMic(), this.set({ phase: "paused", pausedReason: l, playing: null, heard: null, calibrating: !1 }));
  }
  resume() {
    if (this.state.phase !== "paused") return;
    const l = this.pausedFrom ?? "listening";
    if (this.pausedFrom = null, this.set({ pausedReason: null }), ["success", "retry", "level-complete"].includes(l)) {
      this.set({ phase: l });
      return;
    }
    const o = () => {
      l === "mic-check" ? this.enterMicCheck() : l === "tools" ? this.enterTools(this.state.tool) : l === "model-playing" ? (this.startAttempt(), this.playModel(!0)) : this.startListening();
    };
    this.state.input === "mic" ? this.openMicThen(o) : o();
  }
  micLost() {
    const l = this.state.phase;
    this.closeMic(), this.calibration = null, vo.includes(l) && (this.pausedFrom = l, ++this.op, this.cancelTimers(), this.audio.stopModel(), this.set({ phase: "paused", pausedReason: "mic-lost", playing: null, heard: null, micInfo: null, calibrating: !1 }));
  }
  /** Lopeta: kaikki pysähtyy, aloitusnäkymä. Edistyminen on jo tallennettu. */
  stop() {
    ++this.op, this.cancelTimers(), this.calibration = null, this.audio.stopModel(), this.closeMic(), this.practice = null, this.pausedFrom = null, this.afterCheck = null, this.set({
      phase: "idle",
      playing: null,
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
const Fh = 4e3, yc = 12, Oh = 1500;
function Dh(u, l) {
  const o = u.left + u.stickyLeft, c = u.right;
  let f = 0;
  if (l.left < o ? f = l.left - o - yc : l.right > c && (f = l.right - c + yc), f === 0) return null;
  const h = Math.max(0, Math.min(u.maxScroll, u.scrollLeft + f));
  return Math.abs(h - u.scrollLeft) < 1 ? null : h;
}
function Bh(u, l) {
  return l.right <= u.left + u.stickyLeft || l.left >= u.right;
}
function Vh(u, l, o, { stickySelector: c, enabled: f = !0, playback: h } = {}) {
  const w = He.useRef(0), S = He.useRef(!1), E = He.useRef(""), T = He.useRef(0), R = He.useRef(h);
  He.useEffect(() => {
    const _ = u.current;
    if (!_ || !f) return;
    const z = () => {
      w.current = Date.now() + Fh;
    }, V = () => {
      S.current = !0, z();
    }, C = () => {
      S.current && (S.current = !1, z());
    }, P = (O) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(O.key) && z();
    };
    return _.addEventListener("pointerdown", V, { passive: !0 }), _.addEventListener("touchstart", V, { passive: !0 }), _.addEventListener("wheel", z, { passive: !0 }), _.addEventListener("keydown", P), window.addEventListener("pointerup", C, { passive: !0 }), window.addEventListener("pointercancel", C, { passive: !0 }), window.addEventListener("touchend", C, { passive: !0 }), window.addEventListener("touchcancel", C, { passive: !0 }), () => {
      _.removeEventListener("pointerdown", V), _.removeEventListener("touchstart", V), _.removeEventListener("wheel", z), _.removeEventListener("keydown", P), window.removeEventListener("pointerup", C), window.removeEventListener("pointercancel", C), window.removeEventListener("touchend", C), window.removeEventListener("touchcancel", C);
    };
  }, [u, f]), He.useLayoutEffect(() => {
    const _ = h !== void 0 && !!h && h !== R.current;
    R.current = h, _ && !S.current && (w.current = 0);
  }, [h]), He.useLayoutEffect(() => {
    h === void 0 && E.current === "" && o !== "" && Date.now() - T.current > Oh && !S.current && (w.current = 0), E.current !== "" && o === "" && (T.current = Date.now()), E.current = o;
    const _ = u.current;
    if (!_ || !f || !o || S.current || Date.now() < w.current) return;
    const z = _.querySelector(l);
    if (!z) return;
    const V = _.getBoundingClientRect(), C = z.getBoundingClientRect(), P = c ? _.querySelector(c) : null, O = P && getComputedStyle(P).position === "sticky" ? P.getBoundingClientRect().width : 0, q = {
      left: V.left,
      right: V.left + _.clientWidth,
      scrollLeft: _.scrollLeft,
      maxScroll: _.scrollWidth - _.clientWidth,
      stickyLeft: O
    }, Q = Dh(q, C);
    if (Q === null) return;
    const ae = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Bh(q, C);
    typeof _.scrollTo == "function" ? _.scrollTo({ left: Q, behavior: ae ? "auto" : "smooth" }) : _.scrollLeft = Q;
  }, [u, l, o, c, f, h]);
}
const $h = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Uh = ["e", "B", "G", "D", "A", "E"];
function Hh({ string: u }) {
  return /* @__PURE__ */ p.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ p.jsxs("span", { children: [
      u + 1,
      " · ",
      /* @__PURE__ */ p.jsx("strong", { children: Uh[u] })
    ] }),
    u === 0 ? /* @__PURE__ */ p.jsx("small", { children: "ohuin" }) : u === 5 ? /* @__PURE__ */ p.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Wh = (u) => ({ "--string-thickness": 1.25 + u * 0.45 + "px" }), Kh = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Qh({ min: u, max: l }) {
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
function Gh({ area: u, marks: l = [], mutedStrings: o = [], disabled: c = !1, onAnswer: f, caption: h = "Otelauta", follow: w = "hints", playback: S }) {
  const E = { "--cols": u.max - u.min + 1 }, { strings: T, min: R, max: _ } = u, [z, V] = He.useState({ string: Math.min(...T), fret: R }), C = He.useRef(null), P = new Map(l.map((J) => [ii(J), J])), O = l.map((J) => `${ii(J)}${J.kind}`).join(",");
  He.useEffect(() => {
    if (w !== "hints") return;
    const J = C.current, U = J?.querySelector(".target, .anchor");
    J && U && (J.scrollLeft += U.getBoundingClientRect().left - J.getBoundingClientRect().left - J.clientWidth / 2 + U.clientWidth / 2);
  }, [O, w]), He.useEffect(() => {
    w === "playing" && C.current && (C.current.scrollLeft = 0);
  }, [w, R, _]);
  const q = l.find((J) => J.kind === "playing");
  Vh(C, ".playing", q ? ii(q) : "", { stickySelector: "tbody th", enabled: w === "playing", playback: S });
  const [Q, ee] = He.useState({ left: !1, right: !1 });
  He.useEffect(() => {
    const J = C.current;
    if (!J) return;
    const U = () => {
      const he = J.scrollLeft > 2, Ne = J.scrollLeft + J.clientWidth < J.scrollWidth - 2;
      ee((xe) => xe.left === he && xe.right === Ne ? xe : { left: he, right: Ne });
    };
    U(), J.addEventListener("scroll", U, { passive: !0 });
    const ne = typeof ResizeObserver > "u" ? null : new ResizeObserver(U);
    return ne?.observe(J), () => {
      J.removeEventListener("scroll", U), ne?.disconnect();
    };
  }, [O, R, _]);
  const ae = T.includes(z.string) && z.fret >= R && z.fret <= _ ? z : { string: Math.min(...T), fret: R };
  return /* @__PURE__ */ p.jsxs("div", { className: "fret-wrap" + (Q.left ? " more-left" : "") + (Q.right ? " more-right" : ""), children: [
    (Q.left || Q.right) && /* @__PURE__ */ p.jsxs("p", { className: "fret-scroll-hint", children: [
      Q.left && /* @__PURE__ */ p.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      Q.left && Q.right ? "molemmilla puolilla" : Q.right ? "oikealla" : "vasemmalla",
      Q.right && /* @__PURE__ */ p.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ p.jsx("div", { ref: C, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ p.jsxs("table", { className: "practice-board", style: E, children: [
      /* @__PURE__ */ p.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ p.jsx(Qh, { min: R, max: _ }),
      /* @__PURE__ */ p.jsx("tbody", { children: Cc.OPEN_PITCHES.map((J, U) => /* @__PURE__ */ p.jsxs("tr", { className: T.includes(U) ? "" : "unused", style: Wh(U), children: [
        /* @__PURE__ */ p.jsxs("th", { scope: "row", "aria-label": `${U + 1}. kieli: ${uc[U]}${o.includes(U) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ p.jsx(Hh, { string: U }),
          o.includes(U) && /* @__PURE__ */ p.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        qd([U], R, _).map((ne) => {
          const he = P.get(ii(ne)), Ne = `${uc[U]}-kieli, ${Qd(ne.fret)}`;
          return /* @__PURE__ */ p.jsx("td", { className: `${ne.fret === 0 ? "open-fret " : ""}${he ? he.kind === "answer" ? "target" : he.kind : ""}`, children: /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              "data-string": U,
              "data-fret": ne.fret,
              tabIndex: ae.string === U && ae.fret === ne.fret ? 0 : -1,
              onFocus: () => V(ne),
              onKeyDown: (xe) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(xe.key)) return;
                xe.preventDefault();
                const We = [...T].sort((Ke, Re) => Ke - Re), Oe = We.indexOf(U), Me = xe.key === "ArrowUp" ? We[Math.max(0, Oe - 1)] : xe.key === "ArrowDown" ? We[Math.min(We.length - 1, Oe + 1)] : U, De = xe.key === "Home" ? R : xe.key === "End" ? _ : Math.max(R, Math.min(_, ne.fret + (xe.key === "ArrowRight" ? 1 : xe.key === "ArrowLeft" ? -1 : 0)));
                xe.currentTarget.closest("table")?.querySelector(`button[data-string="${Me}"][data-fret="${De}"]`)?.focus();
              },
              disabled: c || !T.includes(U),
              "aria-label": Ne + (he ? `, ${Kh[he.kind]}${he.label ? " " + he.label : ""}` : ""),
              onClick: () => f?.(ne),
              children: he ? /* @__PURE__ */ p.jsx("span", { className: "dot", children: he.label || "●" }) : null
            }
          ) }, ne.fret);
        })
      ] }, U)) })
    ] }) })
  ] });
}
const kr = (u, l = 1) => u.toFixed(l).replace(".", ","), yr = (u) => {
  const l = Math.round(kl(u));
  return `${l < 0 ? "−" : ""}${Math.abs(l)} dB`;
}, Pc = (u) => (u > 0 ? "+" : u < 0 ? "−" : "±") + kr(Math.abs(u), 0);
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
        kr(u.micInfo.sampleRate / 1e3, 1),
        " kHz"
      ] }) : "Mikrofoni ei ole auki.",
      u.micInfo?.fallback && /* @__PURE__ */ p.jsx(p.Fragment, { children: " · Valittua laitetta ei löytynyt, joten käytössä on järjestelmän oletus." })
    ] }),
    !u.devices.length && u.micInfo && /* @__PURE__ */ p.jsx("p", { className: "riff-help", children: "Selain ei ilmoittanut laitteita. Valitse laite tarvittaessa järjestelmän ääniasetuksista ja valitse sitten ”Järjestelmän oletus” uudelleen." })
  ] });
}
const qh = {
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
}, kc = { quiet: "hiljaisuuden jälkeen", onset: "uusi aluke", "pitch-change": "sävelen vaihto" }, Yh = { game: "riffiyritykseen", "mic-check": "mikrofonitestiin", "not-routed": "ei välitetty (ei vastausvuoroa)" };
function wc({ s: u, compact: l = !1 }) {
  const o = u.diag;
  if (!o) return /* @__PURE__ */ p.jsx("p", { className: "riff-help", "data-testid": "diag", children: "Odotetaan mikrofonin ensimmäisiä analyysitietoja…" });
  const c = o.frame, f = o.pluck, h = c.rms >= o.minRms, w = Math.max(0, Math.min(100, (kl(c.rms) + 60) / 60 * 100)), S = Math.max(0, Math.min(100, (kl(o.minRms) + 60) / 60 * 100)), E = (T, R, _, z) => /* @__PURE__ */ p.jsxs("li", { className: T ? "ok" : "no", "data-testid": `diag-${z}`, children: [
    /* @__PURE__ */ p.jsxs("strong", { children: [
      /* @__PURE__ */ p.jsx("span", { "aria-hidden": "true", children: T ? "●" : "○" }),
      " ",
      R
    ] }),
    /* @__PURE__ */ p.jsx("span", { children: _ })
  ] });
  return /* @__PURE__ */ p.jsxs("div", { className: `riff-diag${l ? " compact" : ""}`, "data-testid": "diag", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "riff-meter", role: "meter", "aria-label": "Äänitaso", "aria-valuemin": -60, "aria-valuemax": 0, "aria-valuenow": Math.round(kl(c.rms)), children: [
      /* @__PURE__ */ p.jsx("span", { className: "fill", style: { width: w + "%" } }),
      /* @__PURE__ */ p.jsx("span", { className: "threshold", style: { left: S + "%" }, title: "Äänikynnys" })
    ] }),
    /* @__PURE__ */ p.jsxs("ol", { className: "riff-stages", children: [
      E(h, "1. Ääntä mikrofonista", /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        yr(c.rms),
        " (kynnys ",
        yr(o.minRms),
        ")",
        c.levels.length > 1 ? ` · kanavat ${c.levels.map(yr).join(" / ")}, analysoidaan kanavaa ${c.channel + 1}` : "",
        c.peak > 0.98 ? " · leikkautuu: pienennä gainia" : ""
      ] }), "level"),
      E(c.status === "pitch" || c.status === "off-pitch", "2. Sävelkorkeus", c.frequency ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        kr(c.frequency),
        " Hz · ",
        c.midi !== void 0 ? `${qe(c.midi)} (MIDI ${c.midi})` : "–",
        " · ",
        c.cents !== void 0 ? `${Pc(c.cents)} snt` : "",
        " · selkeys ",
        Math.round((c.clarity ?? 0) * 100),
        " %"
      ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        qh[c.status],
        c.clarity ? ` Selkeys ${Math.round(c.clarity * 100)} %.` : ""
      ] }), "pitch"),
      E(
        !!f.candidate && f.reason === "stabilizing" || !!f.last && f.reason === null,
        "3. Vakaa sävel",
        f.candidate ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          qe(f.candidate.midi),
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
          /* @__PURE__ */ p.jsx("strong", { children: qe(f.last.midi) }),
          " (",
          kc[f.last.armedBy],
          "), näppäilyjä ",
          f.count,
          "."
        ] })
      ] }), "pluck"),
      E(o.routed.last?.route === "game", "5. Välitetty pelille", o.routed.last ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        qe(o.routed.last.midi),
        " → ",
        Yh[o.routed.last.route],
        " · yhteensä ",
        o.routed.count
      ] }) : "Ei vielä näppäilyjä.", "routed")
    ] }),
    !l && /* @__PURE__ */ p.jsxs("p", { className: "riff-help", children: [
      "Taustakohina ",
      u.noise ? `${yr(u.noise.noise)} → äänikynnys ${yr(u.minRms)}` : `ei mitattu, oletuskynnys ${yr(u.minRms)}`,
      ". Diagnostiikka ei lähetä mitään peliin."
    ] })
  ] });
}
const Xh = {
  "no-signal": "Näppää kieli ja anna sen soida.",
  unreliable: "Epävarma havainto – näppää kieli uudelleen ja anna soida. Viritysohjetta ei anneta.",
  far: "",
  flat: "Liian matala – kiristä kieltä hieman.",
  "in-tune": "Vireessä!",
  sharp: "Liian korkea – löysää kieltä hieman."
};
function Jh({ s: u, game: l }) {
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
        kr(440 * 2 ** ((o.target.midi - 69) / 12), 2),
        " Hz)",
        o.auto ? ", valittu automaattisesti" : ""
      ] }) : "Näppää kieli." }),
      /* @__PURE__ */ p.jsx("p", { className: "value", "data-testid": "tuner-cents", children: f ? `${Pc(c)} senttiä` : "–" }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-tuner-scale", "aria-hidden": "true", children: [
        /* @__PURE__ */ p.jsx("span", { className: "zone", style: { left: `${50 - wl}%`, width: `${wl * 2}%` } }),
        f && /* @__PURE__ */ p.jsx("span", { className: "needle", style: { left: h + "%" } }),
        /* @__PURE__ */ p.jsx("span", { className: "label left", children: "−50" }),
        /* @__PURE__ */ p.jsx("span", { className: "label mid", children: "0" }),
        /* @__PURE__ */ p.jsx("span", { className: "label right", children: "+50" })
      ] }),
      /* @__PURE__ */ p.jsx("p", { className: "advice", "data-testid": "tuner-advice", children: o?.status === "far" && o.heardMidi !== void 0 ? `Kuulen ${qe(o.heardMidi)} (${kr(o.frequency)} Hz), mikä on yli puolisävelaskeleen päässä kielestä ${o.target.name}. Tarkista, että soitat oikeaa kieltä.` : Xh[o?.status ?? "no-signal"] }),
      o?.frequency && o.status !== "far" && /* @__PURE__ */ p.jsxs("p", { className: "riff-help", "data-testid": "tuner-frequency", children: [
        "Mitattu ",
        kr(o.frequency, 2),
        " Hz",
        o.heardMidi !== void 0 ? ` · lähin sävel ${qe(o.heardMidi)}` : ""
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("p", { className: "riff-help", children: [
      "A4 = 440 Hz. Vihreä alue on ±",
      wl,
      " senttiä. Viritin käyttää samaa sävelentunnistusta kuin peli, mutta sen lukemat eivät koskaan mene peliin."
    ] })
  ] });
}
const Zh = (u) => ({ strings: u.fullBoard ? ko : u.level.strings, min: wh, max: xh, fixed: "" }), xc = {
  permission: "Pyydetään mikrofonilupaa…",
  "model-playing": "Kuuntele malli",
  "output-settling": "Valmistaudu: odotetaan mallin äänen vaimenemista…",
  success: "Riffi hyväksytty!",
  retry: "Riffi soitettu loppuun"
}, bh = {
  manual: "Peli on tauolla. Mikrofoni on suljettu.",
  background: "Peli pysähtyi, koska välilehti siirtyi taustalle. Mikrofoni ja äänet on suljettu.",
  "mic-lost": "Yhteys mikrofoniin katkesi (laite irrotettiin tai selain pysäytti äänen). Tarkista laite ja jatka."
}, ep = { pending: "harmaa, ei vielä ratkaistu", red: "punainen, väärä sävel – yritä tätä kohtaa uudelleen", green: "vihreä, oikein heti", yellow: "keltainen, löytyi virheen jälkeen" }, Sc = { pending: "", red: "✗", green: "✓", yellow: "↻" };
function Ec(u) {
  const l = u.heard;
  return l ? l.status === "silent" ? "alle äänikynnyksen" : l.status === "pitch" && l.midi !== void 0 ? qe(l.midi) : l.status === "off-pitch" && l.midi !== void 0 ? `${qe(l.midi)}, epävireinen` : "ääntä, ei selvää säveltä" : "ei vielä analyysia";
}
function tp(u) {
  const l = /* @__PURE__ */ new Map();
  return u.riff.spots.forEach((o, c) => {
    const f = { ...o, midi: u.riff.midi[c] }, h = ii(f), w = l.get(h);
    l.set(h, { ...f, kind: u.playing === c ? "playing" : w?.kind ?? "answer", label: w ? `${w.label}·${c + 1}` : String(c + 1) });
  }), [...l.values()];
}
const _c = (u) => u === 1 ? "yksi kieli" : u === 6 ? "koko otelauta" : `${u} kieltä`;
function np({ s: u }) {
  const l = u.riff.midi.length;
  return /* @__PURE__ */ p.jsx("ol", { className: "riff-slots", "aria-label": `Ratkaistu ${u.index} / ${l} säveltä`, "data-testid": "slots", children: u.riff.midi.map((o, c) => {
    const f = u.marks[c] ?? "pending", h = u.phase === "model-playing" && u.playing === c, w = (f === "pending" || f === "red") && c === u.index && u.phase === "listening", S = f === "pending" && u.memory[c] != null, E = f === "green" || f === "yellow" ? qe(o) : h ? "♪" : S ? qe(u.memory[c]) : Sc[f] || (w ? "?" : "");
    return /* @__PURE__ */ p.jsxs(
      "li",
      {
        className: `${f}${w ? " current" : ""}${h ? " model" : ""}${S ? " memory" : ""}`,
        "data-mark": f,
        "aria-label": `${c + 1}. sävel: ${ep[f]}${S ? `, muistivihje ${qe(u.memory[c])}` : ""}${w ? ", vuorossa" : ""}`,
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "slot-note", "aria-hidden": "true", children: E }),
          (f === "green" || f === "yellow") && /* @__PURE__ */ p.jsx("span", { className: "slot-symbol", "aria-hidden": "true", children: Sc[f] })
        ]
      },
      c
    );
  }) });
}
function rp({ game: u }) {
  const l = He.useSyncExternalStore(u.subscribe, u.getState), [o, c] = He.useState(null), f = He.useRef(), h = He.useRef(null);
  He.useEffect(() => {
    l.phase === "level-complete" && h.current?.focus();
  }, [l.phase]), He.useEffect(() => {
    const C = () => {
      document.visibilityState === "hidden" && u.pause("background");
    }, P = () => u.stop(), O = () => {
      u.refreshDevices();
    };
    return document.addEventListener("visibilitychange", C), window.addEventListener("pagehide", P), navigator.mediaDevices?.addEventListener?.("devicechange", O), () => {
      document.removeEventListener("visibilitychange", C), window.removeEventListener("pagehide", P), navigator.mediaDevices?.removeEventListener?.("devicechange", O), clearTimeout(f.current);
    };
  }, [u]);
  const w = l.riff.midi.length, S = ["model-playing", "output-settling", "listening", "success", "retry", "paused"].includes(l.phase), E = l.input === "board", T = E && ["listening", "success", "retry"].includes(l.phase), R = Zh(l), _ = l.level.strings.length < ko.length;
  function z(C) {
    u.tap(C.midi) && (clearTimeout(f.current), c((P) => ({ p: C, n: (P?.n ?? 0) + 1 })), f.current = setTimeout(() => c(null), 450));
  }
  const V = [
    ...l.hint ? tp(l) : [],
    ...o && E ? [{ ...o.p, kind: "playing", label: qe(o.p.midi) }] : []
  ];
  if (l.phase === "idle") {
    const C = (P) => {
      const O = u.progress(P);
      return `taso ${O.level}, läpäisty ${O.completed.length}/${vt.length}`;
    };
    return /* @__PURE__ */ p.jsxs("section", { className: "riff-game", "data-phase": "idle", "aria-labelledby": "riff-title", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "riff-intro", children: [
        /* @__PURE__ */ p.jsx("p", { className: "eyebrow", children: "KAIKUPELI · PROTOTYYPPI 0.2" }),
        /* @__PURE__ */ p.jsx("h1", { id: "riff-title", children: "Riffikaiku" }),
        /* @__PURE__ */ p.jsx("p", { children: "Kuuntele lyhyt riffi ja soita se takaisin samassa järjestyksessä. Ensin yhdellä kielellä, sitten kahdella ja lopuksi laajemmalla otelaudalla. Ei aikarajaa, ei elämiä." })
      ] }),
      /* @__PURE__ */ p.jsx("h2", { children: "Millä soitat?" }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-choices", children: [
        /* @__PURE__ */ p.jsxs("button", { type: "button", className: "riff-choice primary", onClick: () => u.startMic(), children: [
          /* @__PURE__ */ p.jsx("strong", { children: "Oikea kitara" }),
          /* @__PURE__ */ p.jsx("span", { children: "Soita omalla kitaralla. Valitse äänitulo, testaa mikrofoni ja viritä halutessasi. Ääni käsitellään vain tässä selaimessa eikä sitä tallenneta." })
        ] }),
        /* @__PURE__ */ p.jsxs("button", { type: "button", className: "riff-choice", onClick: () => u.startBoard(), children: [
          /* @__PURE__ */ p.jsx("strong", { children: "Virtuaalikitara" }),
          /* @__PURE__ */ p.jsx("span", { children: "Soita otelaudalla hiirellä tai kosketuksella. Ei mikrofonia, suoraan ensimmäiseen harjoitukseen." })
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "riff-tally", "data-testid": "tally", children: [
        "Oikea kitara: ",
        C("mic"),
        " · Virtuaalikitara: ",
        C("board")
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
  return /* @__PURE__ */ p.jsxs("section", { className: "riff-game", "data-phase": l.phase, "data-input": l.input, "aria-labelledby": "riff-title", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "riff-top", children: [
      /* @__PURE__ */ p.jsx("h1", { id: "riff-title", children: "Riffikaiku" }),
      /* @__PURE__ */ p.jsxs("span", { children: [
        l.input === "mic" ? "Oikea kitara" : "Virtuaalikitara",
        l.micInfo && l.input === "mic" ? ` · ${l.micInfo.label}` : ""
      ] })
    ] }),
    l.phase === "permission" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", children: [
      /* @__PURE__ */ p.jsx("p", { className: "riff-status", role: "status", children: xc.permission }),
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
          qe(li),
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
      l.tool === "tuner" ? /* @__PURE__ */ p.jsx(Jh, { s: l, game: u }) : /* @__PURE__ */ p.jsx(wc, { s: l }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.startFromTools(), children: "Aloita harjoitus" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.closeTools(), children: "Takaisin" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.calibrate(), disabled: l.calibrating, children: "Mittaa taustakohina uudelleen" })
      ] })
    ] }),
    l.phase === "levels" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", "data-testid": "levels", children: [
      /* @__PURE__ */ p.jsx("h2", { children: "Tasot" }),
      /* @__PURE__ */ p.jsx("ol", { className: "riff-levels", children: vt.map((C) => {
        const P = l.completedLevels.includes(C.number), O = l.unlockedLevels.includes(C.number), q = u.progress(l.input).level === C.number;
        return /* @__PURE__ */ p.jsxs("li", { className: P ? "done" : O ? "open" : "locked", children: [
          /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsxs("strong", { children: [
              "Taso ",
              C.number,
              " · ",
              C.title
            ] }),
            /* @__PURE__ */ p.jsxs("span", { children: [
              _c(C.strings.length),
              " · ",
              P ? "läpäisty" : q ? "kesken" : O ? "avattu" : "lukittu"
            ] })
          ] }),
          O && /* @__PURE__ */ p.jsx("button", { type: "button", className: q ? "primary" : "", onClick: () => u.chooseLevel(C.number, P && !q), children: q ? "Jatka" : P ? "Harjoittele uudelleen" : "Aloita" })
        ] }, C.number);
      }) }),
      /* @__PURE__ */ p.jsx("div", { className: "riff-actions", children: /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.stop(), children: "Lopeta" }) })
    ] }),
    l.phase === "level-complete" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel riff-cleared", "data-testid": "level-complete", children: [
      /* @__PURE__ */ p.jsx("h2", { tabIndex: -1, ref: h, children: "Onneksi olkoon!" }),
      l.level.number < vt.length ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsxs("p", { className: "riff-cleared-big", children: [
          "Läpäisit tason ",
          l.level.number,
          "!"
        ] }),
        /* @__PURE__ */ p.jsx("p", { children: "Soitit kaikki kolme riffiä oikein. Olet valmis seuraavaan haasteeseen." })
      ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsxs("p", { className: "riff-cleared-big", children: [
          "Läpäisit kaikki ",
          vt.length,
          " tasoa!"
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          "Soitit kaikki ",
          Sh.length,
          " riffiä virheettömästi. Ensimmäinen harjoituskokonaisuus on valmis."
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        l.level.number < vt.length && /* @__PURE__ */ p.jsxs("button", { type: "button", className: "primary", onClick: () => u.continueLevel(), children: [
          "Jatka tasolle ",
          l.level.number + 1
        ] }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.repeatLevel(), children: "Harjoittele tasoa uudelleen" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.openLevels(), children: "Takaisin tasovalikkoon" })
      ] })
    ] }),
    S && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel riff-play", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "riff-heading", children: [
        /* @__PURE__ */ p.jsx("h2", { "data-testid": "level-heading", children: l.tutorial ? "Opastus: kaksi säveltä" : `Taso ${l.level.number} · Riffi ${l.riffNumber}/${l.level.riffs.length}` }),
        /* @__PURE__ */ p.jsx("span", { children: l.tutorial ? "B-kieli" : `${l.riff.title} · ${l.level.title}` })
      ] }),
      l.input === "mic" && /* @__PURE__ */ p.jsx("p", { className: "riff-instruction", "data-testid": "instruction", children: l.tutorial ? vt[0].instruction : l.level.instruction }),
      /* @__PURE__ */ p.jsx("p", { className: `riff-status ${l.phase === "listening" ? "turn" : l.phase === "success" ? "good" : ""}`, role: "status", "data-testid": "riff-status", children: l.phase === "listening" ? E ? "Sinun vuorosi: soita riffi otelaudalla." : "Sinun vuorosi: mikrofoni kuuntelee." : l.phase === "paused" ? bh[l.pausedReason ?? "manual"] : xc[l.phase] }),
      /* @__PURE__ */ p.jsx(np, { s: l }),
      /* @__PURE__ */ p.jsxs("p", { className: "riff-count", "data-testid": "count", children: [
        "Ratkaistu ",
        l.index,
        "/",
        w,
        l.memory.some((C) => C !== null) ? " · muistivihjeet käytössä" : ""
      ] }),
      l.input === "mic" && l.phase !== "paused" && /* @__PURE__ */ p.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee: ",
        /* @__PURE__ */ p.jsx("strong", { "data-testid": "heard", children: l.phase === "model-playing" ? "tauolla mallin ajan" : Ec(l) })
      ] }),
      l.feedback && /* @__PURE__ */ p.jsx("p", { className: `riff-feedback ${l.feedback.tone}`, role: "status", "data-testid": "feedback", children: l.feedback.text }),
      l.hint && /* @__PURE__ */ p.jsxs("div", { className: "riff-hint", "data-testid": "hint", children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("strong", { children: "Sävelet:" }),
          " ",
          l.riff.midi.map(qe).join(" – ")
        ] }),
        /* @__PURE__ */ p.jsx("p", { children: l.riff.tip }),
        /* @__PURE__ */ p.jsx("p", { className: "riff-help", children: E ? "Sama sävel löytyy usein myös toiselta kieleltä; kaikki samat sävelkorkeudet kelpaavat." : "Otelauta ehdottaa soittopaikan. Mikrofoni kuulee vain sävelkorkeuden, ei kieltä eikä sormitusta." })
      ] }),
      (E || l.hint) && /* @__PURE__ */ p.jsxs("div", { className: `riff-board strings-${R.strings.length}`, "data-testid": "board", children: [
        /* @__PURE__ */ p.jsx(
          Gh,
          {
            area: R,
            marks: V,
            disabled: !T,
            onAnswer: z,
            caption: E ? T ? `Virtuaalikitara: ${_c(R.strings.length)}, nauhat 0–5` : "Virtuaalikitara: odota mallin loppuun" : "Sävelvihje otelaudalla"
          }
        ),
        _ && /* @__PURE__ */ p.jsxs("label", { className: "riff-toggle", children: [
          /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: l.fullBoard, onChange: (C) => u.setFullBoard(C.target.checked) }),
          "Näytä koko otelauta (kaikki kuusi kieltä)"
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        l.phase === "paused" && /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.resume(), children: "Jatka" }),
        l.phase === "success" && /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.next(), children: l.tutorial ? "Aloita taso 1" : "Seuraava riffi" }),
        l.phase === "retry" && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.retry(!1), children: "Yritä uudelleen" }),
          /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.retry(!0), children: "Kuuntele ja yritä" })
        ] }),
        l.phase !== "paused" && /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.replay(), disabled: l.phase === "model-playing", children: l.phase === "success" || l.phase === "retry" ? "Kuuntele riffi" : "Kuuntele uudelleen" }),
        (l.phase === "listening" || l.phase === "output-settling") && /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.restart(), disabled: l.index === 0 && !l.marks.includes("red"), children: "Aloita alusta" }),
        l.phase !== "paused" && /* @__PURE__ */ p.jsx("button", { type: "button", "aria-pressed": l.hint, onClick: () => u.toggleHint(), children: l.hint ? "Piilota sävelvihje" : "Näytä sävelvihje" }),
        l.phase !== "paused" && !["success", "retry"].includes(l.phase) && /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.pause("manual"), children: "Tauko" }),
        !l.tutorial && ["listening", "success", "retry", "paused"].includes(l.phase) && /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.openLevels(), children: "Tasot" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.stop(), children: "Lopeta" })
      ] }),
      l.input === "mic" && l.phase !== "paused" && /* @__PURE__ */ p.jsxs("details", { className: "riff-details", onToggle: (C) => u.setDiagnosticsOpen(C.target.open), children: [
        /* @__PURE__ */ p.jsx("summary", { children: "Mikrofonin tiedot ja äänitulo" }),
        /* @__PURE__ */ p.jsx(gl, { s: l, game: u }),
        l.diagOpen && /* @__PURE__ */ p.jsx(wc, { s: l, compact: !0 })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "riff-switch", children: [
        E ? /* @__PURE__ */ p.jsx("button", { type: "button", className: "link", onClick: () => u.switchInput("mic"), children: "Vaihda oikeaan kitaraan (mikrofoni)" }) : /* @__PURE__ */ p.jsx("button", { type: "button", className: "link", onClick: () => u.switchInput("board"), children: "Vaihda virtuaalikitaraan" }),
        /* @__PURE__ */ p.jsxs("span", { children: [
          " · Läpäistyt tasot tällä tavalla: ",
          /* @__PURE__ */ p.jsxs("span", { "data-testid": "levels-done", children: [
            l.completedLevels.length,
            "/",
            vt.length
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Tc = "musiikin-kartta:riffikaiku:v1", ip = ["mic", "board"], lp = () => ({
  version: 1,
  tutorialDone: !1,
  input: "mic",
  fullBoard: !1,
  device: "",
  stats: { mic: {}, board: {} },
  results: [],
  run: { mic: { level: 1, passed: [] }, board: { level: 1, passed: [] } },
  levels: { mic: [], board: [] }
}), oi = (u) => typeof u == "number" && Number.isFinite(u) && u >= 0, Ac = (u) => u === "mic" || u === "board", El = (u) => Number.isInteger(u) && vt.some((l) => l.number === u), sp = (u) => {
  const l = u;
  return !!l && typeof l == "object" && oi(l.done) && oi(l.solo) && oi(l.lastAt) && l.solo <= l.done && (l.passed === void 0 || oi(l.passed) && l.passed <= l.done && l.solo <= l.passed);
}, op = (u) => {
  const l = u;
  return !!l && typeof l == "object" && typeof l.riff == "string" && Ac(l.input) && typeof l.hint == "boolean" && ["wrong", "octave", "replays", "ms", "at"].every((o) => oi(l[o])) && (l.passed === void 0 || typeof l.passed == "boolean") && (l.level === void 0 || El(l.level));
};
function ap(u) {
  const l = lp();
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
  for (const f of ip) {
    const h = c.stats?.[f];
    if (h && typeof h == "object")
      for (const [E, T] of Object.entries(h)) sp(T) && (l.stats[f][E] = { ...T });
    const w = c.run?.[f];
    if (w && El(w.level) && Array.isArray(w.passed)) {
      const E = vt.find((T) => T.number === w.level).riffs.map((T) => T.id);
      l.run[f] = { level: w.level, passed: E.filter((T) => w.passed.includes(T)) };
    }
    const S = c.levels?.[f];
    Array.isArray(S) && (l.levels[f] = [...new Set(S.filter(El))].sort((E, T) => E - T));
  }
  return Array.isArray(c.results) && (l.results = c.results.filter(op).slice(-300)), l;
}
class up {
  /** storage puuttuu tai heittää (yksityinen ikkuna, estetty tallennus): peli toimii ilman tallennusta. */
  constructor(l) {
    this.storage = l;
    let o = null;
    try {
      o = l?.getItem(Tc) ?? null;
    } catch {
      o = null;
    }
    this.data = ap(o);
  }
  storage;
  data;
  save() {
    try {
      this.storage?.setItem(Tc, JSON.stringify(this.data));
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
    return vt.map((c) => c.number).filter((c) => c <= o);
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
    return vt.find((o) => o.number === this.data.run[l].level);
  }
  /** Tasokierroksen seuraava läpäisemätön riffi, tai null kun kaikki kolme on läpäisty. */
  currentRiff(l) {
    const o = this.data.run[l];
    return this.level(l).riffs.find((c) => !o.passed.includes(c.id)) ?? null;
  }
  /** Aloittaa tason alusta (uusi kierros). Läpäistyt tasot säilyvät. */
  startLevel(l, o) {
    El(o) && (this.data.run[l] = { level: o, passed: [] }, this.save());
  }
  /**
   * Kirjaa yhden loppuun soitetun riffiyrityksen kerran. Opastus merkitään tehdyksi, mutta se ei ole
   * tasotulos. Palauttaa levelComplete = true sillä kirjauksella, jolla tason kolmas riffi läpäistiin.
   */
  record(l) {
    if (l.riff === si.id)
      return this.finishTutorial(), { levelComplete: !1 };
    const { input: o } = l, c = l.passed === !0, f = this.data.stats[o], h = f[l.riff] ?? { done: 0, solo: 0, passed: 0 };
    f[l.riff] = {
      done: h.done + 1,
      passed: (h.passed ?? 0) + (c ? 1 : 0),
      solo: h.solo + (c && !l.hint ? 1 : 0),
      lastAt: l.at
    }, this.data.results = [...this.data.results, { ...l, level: l.level ?? Eh(l.riff)?.number }].slice(-300);
    let w = !1;
    const S = this.data.run[o], E = this.level(o);
    return c && E.riffs.some((T) => T.id === l.riff) && !S.passed.includes(l.riff) && (S.passed = E.riffs.map((T) => T.id).filter((T) => T === l.riff || S.passed.includes(T)), S.passed.length === E.riffs.length && (w = !0, this.data.levels[o].includes(E.number) || (this.data.levels[o] = [...this.data.levels[o], E.number].sort((T, R) => T - R)))), this.save(), { levelComplete: w };
  }
}
function cp() {
  try {
    return localStorage;
  } catch {
    return;
  }
}
function fp() {
  const [u] = He.useState(() => new Ih(new gh(), new up(cp())));
  return He.useEffect(() => () => {
    u.stop();
  }, [u]), /* @__PURE__ */ p.jsx(rp, { game: u });
}
window.addEventListener("pagehide", () => ch());
const jc = document.getElementById("riffikaiku");
jc && Dd.createRoot(jc).render(/* @__PURE__ */ p.jsx(He.StrictMode, { children: /* @__PURE__ */ p.jsx(fp, {}) }));
//# sourceMappingURL=app.js.map
