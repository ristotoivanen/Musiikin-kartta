function cd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var rs = { exports: {} }, Jr = {}, is = { exports: {} }, Ee = {};
var Zu;
function fd() {
  if (Zu) return Ee;
  Zu = 1;
  var o = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), m = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.provider"), x = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), ne = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), A = Symbol.iterator;
  function Y(y) {
    return y === null || typeof y != "object" ? null : (y = A && y[A] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var re = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ae = Object.assign, X = {};
  function D(y, E, ce) {
    this.props = y, this.context = E, this.refs = X, this.updater = ce || re;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(y, E) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, E, "setState");
  }, D.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function U() {
  }
  U.prototype = D.prototype;
  function ue(y, E, ce) {
    this.props = y, this.context = E, this.refs = X, this.updater = ce || re;
  }
  var I = ue.prototype = new U();
  I.constructor = ue, ae(I, D.prototype), I.isPureReactComponent = !0;
  var q = Array.isArray, b = Object.prototype.hasOwnProperty, ee = { current: null }, ye = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Me(y, E, ce) {
    var fe, me = {}, ve = null, P = null;
    if (E != null) for (fe in E.ref !== void 0 && (P = E.ref), E.key !== void 0 && (ve = "" + E.key), E) b.call(E, fe) && !ye.hasOwnProperty(fe) && (me[fe] = E[fe]);
    var L = arguments.length - 2;
    if (L === 1) me.children = ce;
    else if (1 < L) {
      for (var R = Array(L), W = 0; W < L; W++) R[W] = arguments[W + 2];
      me.children = R;
    }
    if (y && y.defaultProps) for (fe in L = y.defaultProps, L) me[fe] === void 0 && (me[fe] = L[fe]);
    return { $$typeof: o, type: y, key: ve, ref: P, props: me, _owner: ee.current };
  }
  function Fe(y, E) {
    return { $$typeof: o, type: y.type, key: E, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function je(y) {
    return typeof y == "object" && y !== null && y.$$typeof === o;
  }
  function $e(y) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(ce) {
      return E[ce];
    });
  }
  var Le = /\/+/g;
  function Pe(y, E) {
    return typeof y == "object" && y !== null && y.key != null ? $e("" + y.key) : E.toString(36);
  }
  function Ae(y, E, ce, fe, me) {
    var ve = typeof y;
    (ve === "undefined" || ve === "boolean") && (y = null);
    var P = !1;
    if (y === null) P = !0;
    else switch (ve) {
      case "string":
      case "number":
        P = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case o:
          case u:
            P = !0;
        }
    }
    if (P) return P = y, me = me(P), y = fe === "" ? "." + Pe(P, 0) : fe, q(me) ? (ce = "", y != null && (ce = y.replace(Le, "$&/") + "/"), Ae(me, E, ce, "", function(W) {
      return W;
    })) : me != null && (je(me) && (me = Fe(me, ce + (!me.key || P && P.key === me.key ? "" : ("" + me.key).replace(Le, "$&/") + "/") + y)), E.push(me)), 1;
    if (P = 0, fe = fe === "" ? "." : fe + ":", q(y)) for (var L = 0; L < y.length; L++) {
      ve = y[L];
      var R = fe + Pe(ve, L);
      P += Ae(ve, E, ce, R, me);
    }
    else if (R = Y(y), typeof R == "function") for (y = R.call(y), L = 0; !(ve = y.next()).done; ) ve = ve.value, R = fe + Pe(ve, L++), P += Ae(ve, E, ce, R, me);
    else if (ve === "object") throw E = String(y), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function Ie(y, E, ce) {
    if (y == null) return y;
    var fe = [], me = 0;
    return Ae(y, fe, "", "", function(ve) {
      return E.call(ce, ve, me++);
    }), fe;
  }
  function ge(y) {
    if (y._status === -1) {
      var E = y._result;
      E = E(), E.then(function(ce) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = ce);
      }, function(ce) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = ce);
      }), y._status === -1 && (y._status = 0, y._result = E);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var J = { current: null }, C = { transition: null }, Q = { ReactCurrentDispatcher: J, ReactCurrentBatchConfig: C, ReactCurrentOwner: ee };
  function O() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ee.Children = { map: Ie, forEach: function(y, E, ce) {
    Ie(y, function() {
      E.apply(this, arguments);
    }, ce);
  }, count: function(y) {
    var E = 0;
    return Ie(y, function() {
      E++;
    }), E;
  }, toArray: function(y) {
    return Ie(y, function(E) {
      return E;
    }) || [];
  }, only: function(y) {
    if (!je(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, Ee.Component = D, Ee.Fragment = a, Ee.Profiler = m, Ee.PureComponent = ue, Ee.StrictMode = d, Ee.Suspense = T, Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, Ee.act = O, Ee.cloneElement = function(y, E, ce) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var fe = ae({}, y.props), me = y.key, ve = y.ref, P = y._owner;
    if (E != null) {
      if (E.ref !== void 0 && (ve = E.ref, P = ee.current), E.key !== void 0 && (me = "" + E.key), y.type && y.type.defaultProps) var L = y.type.defaultProps;
      for (R in E) b.call(E, R) && !ye.hasOwnProperty(R) && (fe[R] = E[R] === void 0 && L !== void 0 ? L[R] : E[R]);
    }
    var R = arguments.length - 2;
    if (R === 1) fe.children = ce;
    else if (1 < R) {
      L = Array(R);
      for (var W = 0; W < R; W++) L[W] = arguments[W + 2];
      fe.children = L;
    }
    return { $$typeof: o, type: y.type, key: me, ref: ve, props: fe, _owner: P };
  }, Ee.createContext = function(y) {
    return y = { $$typeof: x, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: c, _context: y }, y.Consumer = y;
  }, Ee.createElement = Me, Ee.createFactory = function(y) {
    var E = Me.bind(null, y);
    return E.type = y, E;
  }, Ee.createRef = function() {
    return { current: null };
  }, Ee.forwardRef = function(y) {
    return { $$typeof: N, render: y };
  }, Ee.isValidElement = je, Ee.lazy = function(y) {
    return { $$typeof: $, _payload: { _status: -1, _result: y }, _init: ge };
  }, Ee.memo = function(y, E) {
    return { $$typeof: ne, type: y, compare: E === void 0 ? null : E };
  }, Ee.startTransition = function(y) {
    var E = C.transition;
    C.transition = {};
    try {
      y();
    } finally {
      C.transition = E;
    }
  }, Ee.unstable_act = O, Ee.useCallback = function(y, E) {
    return J.current.useCallback(y, E);
  }, Ee.useContext = function(y) {
    return J.current.useContext(y);
  }, Ee.useDebugValue = function() {
  }, Ee.useDeferredValue = function(y) {
    return J.current.useDeferredValue(y);
  }, Ee.useEffect = function(y, E) {
    return J.current.useEffect(y, E);
  }, Ee.useId = function() {
    return J.current.useId();
  }, Ee.useImperativeHandle = function(y, E, ce) {
    return J.current.useImperativeHandle(y, E, ce);
  }, Ee.useInsertionEffect = function(y, E) {
    return J.current.useInsertionEffect(y, E);
  }, Ee.useLayoutEffect = function(y, E) {
    return J.current.useLayoutEffect(y, E);
  }, Ee.useMemo = function(y, E) {
    return J.current.useMemo(y, E);
  }, Ee.useReducer = function(y, E, ce) {
    return J.current.useReducer(y, E, ce);
  }, Ee.useRef = function(y) {
    return J.current.useRef(y);
  }, Ee.useState = function(y) {
    return J.current.useState(y);
  }, Ee.useSyncExternalStore = function(y, E, ce) {
    return J.current.useSyncExternalStore(y, E, ce);
  }, Ee.useTransition = function() {
    return J.current.useTransition();
  }, Ee.version = "18.3.1", Ee;
}
var bu;
function hs() {
  return bu || (bu = 1, is.exports = fd()), is.exports;
}
var ec;
function dd() {
  if (ec) return Jr;
  ec = 1;
  var o = hs(), u = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, m = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(N, T, ne) {
    var $, A = {}, Y = null, re = null;
    ne !== void 0 && (Y = "" + ne), T.key !== void 0 && (Y = "" + T.key), T.ref !== void 0 && (re = T.ref);
    for ($ in T) d.call(T, $) && !c.hasOwnProperty($) && (A[$] = T[$]);
    if (N && N.defaultProps) for ($ in T = N.defaultProps, T) A[$] === void 0 && (A[$] = T[$]);
    return { $$typeof: u, type: N, key: Y, ref: re, props: A, _owner: m.current };
  }
  return Jr.Fragment = a, Jr.jsx = x, Jr.jsxs = x, Jr;
}
var tc;
function hd() {
  return tc || (tc = 1, rs.exports = dd()), rs.exports;
}
var p = hd(), De = hs(), al = {}, ls = { exports: {} }, _t = {}, os = { exports: {} }, ss = {};
var nc;
function pd() {
  return nc || (nc = 1, (function(o) {
    function u(C, Q) {
      var O = C.length;
      C.push(Q);
      e: for (; 0 < O; ) {
        var y = O - 1 >>> 1, E = C[y];
        if (0 < m(E, Q)) C[y] = Q, C[O] = E, O = y;
        else break e;
      }
    }
    function a(C) {
      return C.length === 0 ? null : C[0];
    }
    function d(C) {
      if (C.length === 0) return null;
      var Q = C[0], O = C.pop();
      if (O !== Q) {
        C[0] = O;
        e: for (var y = 0, E = C.length, ce = E >>> 1; y < ce; ) {
          var fe = 2 * (y + 1) - 1, me = C[fe], ve = fe + 1, P = C[ve];
          if (0 > m(me, O)) ve < E && 0 > m(P, me) ? (C[y] = P, C[ve] = O, y = ve) : (C[y] = me, C[fe] = O, y = fe);
          else if (ve < E && 0 > m(P, O)) C[y] = P, C[ve] = O, y = ve;
          else break e;
        }
      }
      return Q;
    }
    function m(C, Q) {
      var O = C.sortIndex - Q.sortIndex;
      return O !== 0 ? O : C.id - Q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      o.unstable_now = function() {
        return c.now();
      };
    } else {
      var x = Date, N = x.now();
      o.unstable_now = function() {
        return x.now() - N;
      };
    }
    var T = [], ne = [], $ = 1, A = null, Y = 3, re = !1, ae = !1, X = !1, D = typeof setTimeout == "function" ? setTimeout : null, U = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function I(C) {
      for (var Q = a(ne); Q !== null; ) {
        if (Q.callback === null) d(ne);
        else if (Q.startTime <= C) d(ne), Q.sortIndex = Q.expirationTime, u(T, Q);
        else break;
        Q = a(ne);
      }
    }
    function q(C) {
      if (X = !1, I(C), !ae) if (a(T) !== null) ae = !0, ge(b);
      else {
        var Q = a(ne);
        Q !== null && J(q, Q.startTime - C);
      }
    }
    function b(C, Q) {
      ae = !1, X && (X = !1, U(Me), Me = -1), re = !0;
      var O = Y;
      try {
        for (I(Q), A = a(T); A !== null && (!(A.expirationTime > Q) || C && !$e()); ) {
          var y = A.callback;
          if (typeof y == "function") {
            A.callback = null, Y = A.priorityLevel;
            var E = y(A.expirationTime <= Q);
            Q = o.unstable_now(), typeof E == "function" ? A.callback = E : A === a(T) && d(T), I(Q);
          } else d(T);
          A = a(T);
        }
        if (A !== null) var ce = !0;
        else {
          var fe = a(ne);
          fe !== null && J(q, fe.startTime - Q), ce = !1;
        }
        return ce;
      } finally {
        A = null, Y = O, re = !1;
      }
    }
    var ee = !1, ye = null, Me = -1, Fe = 5, je = -1;
    function $e() {
      return !(o.unstable_now() - je < Fe);
    }
    function Le() {
      if (ye !== null) {
        var C = o.unstable_now();
        je = C;
        var Q = !0;
        try {
          Q = ye(!0, C);
        } finally {
          Q ? Pe() : (ee = !1, ye = null);
        }
      } else ee = !1;
    }
    var Pe;
    if (typeof ue == "function") Pe = function() {
      ue(Le);
    };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), Ie = Ae.port2;
      Ae.port1.onmessage = Le, Pe = function() {
        Ie.postMessage(null);
      };
    } else Pe = function() {
      D(Le, 0);
    };
    function ge(C) {
      ye = C, ee || (ee = !0, Pe());
    }
    function J(C, Q) {
      Me = D(function() {
        C(o.unstable_now());
      }, Q);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, o.unstable_continueExecution = function() {
      ae || re || (ae = !0, ge(b));
    }, o.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Fe = 0 < C ? Math.floor(1e3 / C) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, o.unstable_getFirstCallbackNode = function() {
      return a(T);
    }, o.unstable_next = function(C) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = Y;
      }
      var O = Y;
      Y = Q;
      try {
        return C();
      } finally {
        Y = O;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(C, Q) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var O = Y;
      Y = C;
      try {
        return Q();
      } finally {
        Y = O;
      }
    }, o.unstable_scheduleCallback = function(C, Q, O) {
      var y = o.unstable_now();
      switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? y + O : y) : O = y, C) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = O + E, C = { id: $++, callback: Q, priorityLevel: C, startTime: O, expirationTime: E, sortIndex: -1 }, O > y ? (C.sortIndex = O, u(ne, C), a(T) === null && C === a(ne) && (X ? (U(Me), Me = -1) : X = !0, J(q, O - y))) : (C.sortIndex = E, u(T, C), ae || re || (ae = !0, ge(b))), C;
    }, o.unstable_shouldYield = $e, o.unstable_wrapCallback = function(C) {
      var Q = Y;
      return function() {
        var O = Y;
        Y = Q;
        try {
          return C.apply(this, arguments);
        } finally {
          Y = O;
        }
      };
    };
  })(ss)), ss;
}
var rc;
function md() {
  return rc || (rc = 1, os.exports = pd()), os.exports;
}
var ic;
function vd() {
  if (ic) return _t;
  ic = 1;
  var o = hs(), u = md();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), m = {};
  function c(e, t) {
    x(e, t), x(e + "Capture", t);
  }
  function x(e, t) {
    for (m[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var N = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, ne = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, A = {};
  function Y(e) {
    return T.call(A, e) ? !0 : T.call($, e) ? !1 : ne.test(e) ? A[e] = !0 : ($[e] = !0, !1);
  }
  function re(e, t, n, r) {
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
  function ae(e, t, n, r) {
    if (t === null || typeof t > "u" || re(e, t, n, r)) return !0;
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
  function X(e, t, n, r, i, l, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = s;
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    D[e] = new X(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    D[t] = new X(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    D[e] = new X(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    D[e] = new X(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    D[e] = new X(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    D[e] = new X(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    D[e] = new X(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    D[e] = new X(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    D[e] = new X(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var U = /[\-:]([a-z])/g;
  function ue(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      U,
      ue
    );
    D[t] = new X(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(U, ue);
    D[t] = new X(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(U, ue);
    D[t] = new X(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    D[e] = new X(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), D.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    D[e] = new X(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function I(e, t, n, r) {
    var i = D.hasOwnProperty(t) ? D[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ae(t, n, i, r) && (n = null), r || i === null ? Y(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var q = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = /* @__PURE__ */ Symbol.for("react.element"), ee = /* @__PURE__ */ Symbol.for("react.portal"), ye = /* @__PURE__ */ Symbol.for("react.fragment"), Me = /* @__PURE__ */ Symbol.for("react.strict_mode"), Fe = /* @__PURE__ */ Symbol.for("react.profiler"), je = /* @__PURE__ */ Symbol.for("react.provider"), $e = /* @__PURE__ */ Symbol.for("react.context"), Le = /* @__PURE__ */ Symbol.for("react.forward_ref"), Pe = /* @__PURE__ */ Symbol.for("react.suspense"), Ae = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ie = /* @__PURE__ */ Symbol.for("react.memo"), ge = /* @__PURE__ */ Symbol.for("react.lazy"), J = /* @__PURE__ */ Symbol.for("react.offscreen"), C = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object" ? null : (e = C && e[C] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var O = Object.assign, y;
  function E(e) {
    if (y === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      y = t && t[1] || "";
    }
    return `
` + y + e;
  }
  var ce = !1;
  function fe(e, t) {
    if (!e || ce) return "";
    ce = !0;
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
        } catch (w) {
          var r = w;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (w) {
          r = w;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (w) {
          r = w;
        }
        e();
      }
    } catch (w) {
      if (w && r && typeof w.stack == "string") {
        for (var i = w.stack.split(`
`), l = r.stack.split(`
`), s = i.length - 1, f = l.length - 1; 1 <= s && 0 <= f && i[s] !== l[f]; ) f--;
        for (; 1 <= s && 0 <= f; s--, f--) if (i[s] !== l[f]) {
          if (s !== 1 || f !== 1)
            do
              if (s--, f--, 0 > f || i[s] !== l[f]) {
                var h = `
` + i[s].replace(" at new ", " at ");
                return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), h;
              }
            while (1 <= s && 0 <= f);
          break;
        }
      }
    } finally {
      ce = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function me(e) {
    switch (e.tag) {
      case 5:
        return E(e.type);
      case 16:
        return E("Lazy");
      case 13:
        return E("Suspense");
      case 19:
        return E("SuspenseList");
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
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ye:
        return "Fragment";
      case ee:
        return "Portal";
      case Fe:
        return "Profiler";
      case Me:
        return "StrictMode";
      case Pe:
        return "Suspense";
      case Ae:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case $e:
        return (e.displayName || "Context") + ".Consumer";
      case je:
        return (e._context.displayName || "Context") + ".Provider";
      case Le:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ie:
        return t = e.displayName || null, t !== null ? t : ve(e.type) || "Memo";
      case ge:
        t = e._payload, e = e._init;
        try {
          return ve(e(t));
        } catch {
        }
    }
    return null;
  }
  function P(e) {
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
        return t === Me ? "StrictMode" : "Mode";
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
  function L(e) {
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
  function R(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function W(e) {
    var t = R(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, l = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(s) {
        r = "" + s, l.call(this, s);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(s) {
        r = "" + s;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function de(e) {
    e._valueTracker || (e._valueTracker = W(e));
  }
  function Z(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = R(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function te(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ie(e, t) {
    var n = t.checked;
    return O({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function _e(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = L(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function he(e, t) {
    t = t.checked, t != null && I(e, "checked", t, !1);
  }
  function Se(e, t) {
    he(e, t);
    var n = L(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ne(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ne(e, t.type, L(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function He(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ne(e, t, n) {
    (t !== "number" || te(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var We = Array.isArray;
  function Qe(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + L(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function S(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return O({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function F(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(a(92));
        if (We(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: L(n) };
  }
  function le(e, t) {
    var n = L(t.value), r = L(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function xe(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Oe(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function tt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Oe(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var ke, Qt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (ke = ke || document.createElement("div"), ke.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ke.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function we(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Re = {
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
  }, nt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Re).forEach(function(e) {
    nt.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Re[t] = Re[e];
    });
  });
  function lt(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Re.hasOwnProperty(e) && Re[e] ? ("" + t).trim() : t + "px";
  }
  function yt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = lt(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var Dt = O({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Rt(e, t) {
    if (t) {
      if (Dt[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function Mn(e, t) {
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
  var Pn = null;
  function bt(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var gl = null, Kn = null, Qn = null;
  function ms(e) {
    if (e = Ir(e)) {
      if (typeof gl != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = Ei(t), gl(e.stateNode, e.type, t));
    }
  }
  function vs(e) {
    Kn ? Qn ? Qn.push(e) : Qn = [e] : Kn = e;
  }
  function ys() {
    if (Kn) {
      var e = Kn, t = Qn;
      if (Qn = Kn = null, ms(e), t) for (e = 0; e < t.length; e++) ms(t[e]);
    }
  }
  function gs(e, t) {
    return e(t);
  }
  function ks() {
  }
  var kl = !1;
  function ws(e, t, n) {
    if (kl) return e(t, n);
    kl = !0;
    try {
      return gs(e, t, n);
    } finally {
      kl = !1, (Kn !== null || Qn !== null) && (ks(), ys());
    }
  }
  function mr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ei(n);
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
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var wl = !1;
  if (N) try {
    var vr = {};
    Object.defineProperty(vr, "passive", { get: function() {
      wl = !0;
    } }), window.addEventListener("test", vr, vr), window.removeEventListener("test", vr, vr);
  } catch {
    wl = !1;
  }
  function mc(e, t, n, r, i, l, s, f, h) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, w);
    } catch (_) {
      this.onError(_);
    }
  }
  var yr = !1, ti = null, ni = !1, xl = null, vc = { onError: function(e) {
    yr = !0, ti = e;
  } };
  function yc(e, t, n, r, i, l, s, f, h) {
    yr = !1, ti = null, mc.apply(vc, arguments);
  }
  function gc(e, t, n, r, i, l, s, f, h) {
    if (yc.apply(this, arguments), yr) {
      if (yr) {
        var w = ti;
        yr = !1, ti = null;
      } else throw Error(a(198));
      ni || (ni = !0, xl = w);
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
  function xs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ss(e) {
    if (Rn(e) !== e) throw Error(a(188));
  }
  function kc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Rn(e), t === null) throw Error(a(188));
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
          if (l === n) return Ss(i), e;
          if (l === r) return Ss(i), t;
          l = l.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) n = i, r = l;
      else {
        for (var s = !1, f = i.child; f; ) {
          if (f === n) {
            s = !0, n = i, r = l;
            break;
          }
          if (f === r) {
            s = !0, r = i, n = l;
            break;
          }
          f = f.sibling;
        }
        if (!s) {
          for (f = l.child; f; ) {
            if (f === n) {
              s = !0, n = l, r = i;
              break;
            }
            if (f === r) {
              s = !0, r = l, n = i;
              break;
            }
            f = f.sibling;
          }
          if (!s) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Es(e) {
    return e = kc(e), e !== null ? js(e) : null;
  }
  function js(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = js(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _s = u.unstable_scheduleCallback, Cs = u.unstable_cancelCallback, wc = u.unstable_shouldYield, xc = u.unstable_requestPaint, Je = u.unstable_now, Sc = u.unstable_getCurrentPriorityLevel, Sl = u.unstable_ImmediatePriority, Ns = u.unstable_UserBlockingPriority, ri = u.unstable_NormalPriority, Ec = u.unstable_LowPriority, Ts = u.unstable_IdlePriority, ii = null, Gt = null;
  function jc(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(ii, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var $t = Math.clz32 ? Math.clz32 : Nc, _c = Math.log, Cc = Math.LN2;
  function Nc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_c(e) / Cc | 0) | 0;
  }
  var li = 64, oi = 4194304;
  function gr(e) {
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
  function si(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, l = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var f = s & ~i;
      f !== 0 ? r = gr(f) : (l &= s, l !== 0 && (r = gr(l)));
    } else s = n & ~i, s !== 0 ? r = gr(s) : l !== 0 && (r = gr(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - $t(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function Tc(e, t) {
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
  function Mc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var s = 31 - $t(l), f = 1 << s, h = i[s];
      h === -1 ? ((f & n) === 0 || (f & r) !== 0) && (i[s] = Tc(f, t)) : h <= t && (e.expiredLanes |= f), l &= ~f;
    }
  }
  function El(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ms() {
    var e = li;
    return li <<= 1, (li & 4194240) === 0 && (li = 64), e;
  }
  function jl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function kr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $t(t), e[t] = n;
  }
  function Pc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - $t(n), l = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l;
    }
  }
  function _l(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - $t(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var ze = 0;
  function Ps(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Rs, Cl, zs, Fs, Ls, Nl = !1, ai = [], un = null, cn = null, fn = null, wr = /* @__PURE__ */ new Map(), xr = /* @__PURE__ */ new Map(), dn = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function As(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        un = null;
        break;
      case "dragenter":
      case "dragleave":
        cn = null;
        break;
      case "mouseover":
      case "mouseout":
        fn = null;
        break;
      case "pointerover":
      case "pointerout":
        wr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xr.delete(t.pointerId);
    }
  }
  function Sr(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }, t !== null && (t = Ir(t), t !== null && Cl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function zc(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return un = Sr(un, e, t, n, r, i), !0;
      case "dragenter":
        return cn = Sr(cn, e, t, n, r, i), !0;
      case "mouseover":
        return fn = Sr(fn, e, t, n, r, i), !0;
      case "pointerover":
        var l = i.pointerId;
        return wr.set(l, Sr(wr.get(l) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return l = i.pointerId, xr.set(l, Sr(xr.get(l) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Is(e) {
    var t = zn(e.target);
    if (t !== null) {
      var n = Rn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = xs(n), t !== null) {
            e.blockedOn = t, Ls(e.priority, function() {
              zs(n);
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
  function ui(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ml(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Pn = r, n.target.dispatchEvent(r), Pn = null;
      } else return t = Ir(n), t !== null && Cl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Os(e, t, n) {
    ui(e) && n.delete(t);
  }
  function Fc() {
    Nl = !1, un !== null && ui(un) && (un = null), cn !== null && ui(cn) && (cn = null), fn !== null && ui(fn) && (fn = null), wr.forEach(Os), xr.forEach(Os);
  }
  function Er(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Nl || (Nl = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Fc)));
  }
  function jr(e) {
    function t(i) {
      return Er(i, e);
    }
    if (0 < ai.length) {
      Er(ai[0], e);
      for (var n = 1; n < ai.length; n++) {
        var r = ai[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (un !== null && Er(un, e), cn !== null && Er(cn, e), fn !== null && Er(fn, e), wr.forEach(t), xr.forEach(t), n = 0; n < dn.length; n++) r = dn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < dn.length && (n = dn[0], n.blockedOn === null); ) Is(n), n.blockedOn === null && dn.shift();
  }
  var Gn = q.ReactCurrentBatchConfig, ci = !0;
  function Lc(e, t, n, r) {
    var i = ze, l = Gn.transition;
    Gn.transition = null;
    try {
      ze = 1, Tl(e, t, n, r);
    } finally {
      ze = i, Gn.transition = l;
    }
  }
  function Ac(e, t, n, r) {
    var i = ze, l = Gn.transition;
    Gn.transition = null;
    try {
      ze = 4, Tl(e, t, n, r);
    } finally {
      ze = i, Gn.transition = l;
    }
  }
  function Tl(e, t, n, r) {
    if (ci) {
      var i = Ml(e, t, n, r);
      if (i === null) Ql(e, t, r, fi, n), As(e, r);
      else if (zc(i, e, t, n, r)) r.stopPropagation();
      else if (As(e, r), t & 4 && -1 < Rc.indexOf(e)) {
        for (; i !== null; ) {
          var l = Ir(i);
          if (l !== null && Rs(l), l = Ml(e, t, n, r), l === null && Ql(e, t, r, fi, n), l === i) break;
          i = l;
        }
        i !== null && r.stopPropagation();
      } else Ql(e, t, r, null, n);
    }
  }
  var fi = null;
  function Ml(e, t, n, r) {
    if (fi = null, e = bt(r), e = zn(e), e !== null) if (t = Rn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = xs(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return fi = e, null;
  }
  function Ds(e) {
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
        switch (Sc()) {
          case Sl:
            return 1;
          case Ns:
            return 4;
          case ri:
          case Ec:
            return 16;
          case Ts:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var hn = null, Pl = null, di = null;
  function $s() {
    if (di) return di;
    var e, t = Pl, n = t.length, r, i = "value" in hn ? hn.value : hn.textContent, l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[l - r]; r++) ;
    return di = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function hi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function pi() {
    return !0;
  }
  function Bs() {
    return !1;
  }
  function Ct(e) {
    function t(n, r, i, l, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = s, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(l) : l[f]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? pi : Bs, this.isPropagationStopped = Bs, this;
    }
    return O(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pi);
    }, persist: function() {
    }, isPersistent: pi }), t;
  }
  var Yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Rl = Ct(Yn), _r = O({}, Yn, { view: 0, detail: 0 }), Ic = Ct(_r), zl, Fl, Cr, mi = O({}, _r, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Al, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Cr && (Cr && e.type === "mousemove" ? (zl = e.screenX - Cr.screenX, Fl = e.screenY - Cr.screenY) : Fl = zl = 0, Cr = e), zl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Fl;
  } }), Vs = Ct(mi), Oc = O({}, mi, { dataTransfer: 0 }), Dc = Ct(Oc), $c = O({}, _r, { relatedTarget: 0 }), Ll = Ct($c), Bc = O({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vc = Ct(Bc), Uc = O({}, Yn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Hc = Ct(Uc), Wc = O({}, Yn, { data: 0 }), Us = Ct(Wc), Kc = {
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
  }, Qc = {
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
  }, Gc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gc[e]) ? !!t[e] : !1;
  }
  function Al() {
    return Yc;
  }
  var Xc = O({}, _r, { key: function(e) {
    if (e.key) {
      var t = Kc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = hi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Al, charCode: function(e) {
    return e.type === "keypress" ? hi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), qc = Ct(Xc), Jc = O({}, mi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hs = Ct(Jc), Zc = O({}, _r, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Al }), bc = Ct(Zc), ef = O({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tf = Ct(ef), nf = O({}, mi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), rf = Ct(nf), lf = [9, 13, 27, 32], Il = N && "CompositionEvent" in window, Nr = null;
  N && "documentMode" in document && (Nr = document.documentMode);
  var of = N && "TextEvent" in window && !Nr, Ws = N && (!Il || Nr && 8 < Nr && 11 >= Nr), Ks = " ", Qs = !1;
  function Gs(e, t) {
    switch (e) {
      case "keyup":
        return lf.indexOf(t.keyCode) !== -1;
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
  function Ys(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Xn = !1;
  function sf(e, t) {
    switch (e) {
      case "compositionend":
        return Ys(t);
      case "keypress":
        return t.which !== 32 ? null : (Qs = !0, Ks);
      case "textInput":
        return e = t.data, e === Ks && Qs ? null : e;
      default:
        return null;
    }
  }
  function af(e, t) {
    if (Xn) return e === "compositionend" || !Il && Gs(e, t) ? (e = $s(), di = Pl = hn = null, Xn = !1, e) : null;
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
        return Ws && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var uf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Xs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!uf[e.type] : t === "textarea";
  }
  function qs(e, t, n, r) {
    vs(r), t = wi(t, "onChange"), 0 < t.length && (n = new Rl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Tr = null, Mr = null;
  function cf(e) {
    pa(e, 0);
  }
  function vi(e) {
    var t = er(e);
    if (Z(t)) return e;
  }
  function ff(e, t) {
    if (e === "change") return t;
  }
  var Js = !1;
  if (N) {
    var Ol;
    if (N) {
      var Dl = "oninput" in document;
      if (!Dl) {
        var Zs = document.createElement("div");
        Zs.setAttribute("oninput", "return;"), Dl = typeof Zs.oninput == "function";
      }
      Ol = Dl;
    } else Ol = !1;
    Js = Ol && (!document.documentMode || 9 < document.documentMode);
  }
  function bs() {
    Tr && (Tr.detachEvent("onpropertychange", ea), Mr = Tr = null);
  }
  function ea(e) {
    if (e.propertyName === "value" && vi(Mr)) {
      var t = [];
      qs(t, Mr, e, bt(e)), ws(cf, t);
    }
  }
  function df(e, t, n) {
    e === "focusin" ? (bs(), Tr = t, Mr = n, Tr.attachEvent("onpropertychange", ea)) : e === "focusout" && bs();
  }
  function hf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return vi(Mr);
  }
  function pf(e, t) {
    if (e === "click") return vi(t);
  }
  function mf(e, t) {
    if (e === "input" || e === "change") return vi(t);
  }
  function vf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Bt = typeof Object.is == "function" ? Object.is : vf;
  function Pr(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!T.call(t, i) || !Bt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ta(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function na(e, t) {
    var n = ta(e);
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
      n = ta(n);
    }
  }
  function ra(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ra(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ia() {
    for (var e = window, t = te(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = te(e.document);
    }
    return t;
  }
  function $l(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function yf(e) {
    var t = ia(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ra(n.ownerDocument.documentElement, n)) {
      if (r !== null && $l(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, l = Math.min(r.start, i);
          r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = na(n, l);
          var s = na(
            n,
            r
          );
          i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var gf = N && "documentMode" in document && 11 >= document.documentMode, qn = null, Bl = null, Rr = null, Vl = !1;
  function la(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Vl || qn == null || qn !== te(r) || (r = qn, "selectionStart" in r && $l(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Rr && Pr(Rr, r) || (Rr = r, r = wi(Bl, "onSelect"), 0 < r.length && (t = new Rl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = qn)));
  }
  function yi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jn = { animationend: yi("Animation", "AnimationEnd"), animationiteration: yi("Animation", "AnimationIteration"), animationstart: yi("Animation", "AnimationStart"), transitionend: yi("Transition", "TransitionEnd") }, Ul = {}, oa = {};
  N && (oa = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
  function gi(e) {
    if (Ul[e]) return Ul[e];
    if (!Jn[e]) return e;
    var t = Jn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in oa) return Ul[e] = t[n];
    return e;
  }
  var sa = gi("animationend"), aa = gi("animationiteration"), ua = gi("animationstart"), ca = gi("transitionend"), fa = /* @__PURE__ */ new Map(), da = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function pn(e, t) {
    fa.set(e, t), c(t, [e]);
  }
  for (var Hl = 0; Hl < da.length; Hl++) {
    var Wl = da[Hl], kf = Wl.toLowerCase(), wf = Wl[0].toUpperCase() + Wl.slice(1);
    pn(kf, "on" + wf);
  }
  pn(sa, "onAnimationEnd"), pn(aa, "onAnimationIteration"), pn(ua, "onAnimationStart"), pn("dblclick", "onDoubleClick"), pn("focusin", "onFocus"), pn("focusout", "onBlur"), pn(ca, "onTransitionEnd"), x("onMouseEnter", ["mouseout", "mouseover"]), x("onMouseLeave", ["mouseout", "mouseover"]), x("onPointerEnter", ["pointerout", "pointerover"]), x("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xf = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
  function ha(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, gc(r, t, void 0, e), e.currentTarget = null;
  }
  function pa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t) for (var s = r.length - 1; 0 <= s; s--) {
          var f = r[s], h = f.instance, w = f.currentTarget;
          if (f = f.listener, h !== l && i.isPropagationStopped()) break e;
          ha(i, f, w), l = h;
        }
        else for (s = 0; s < r.length; s++) {
          if (f = r[s], h = f.instance, w = f.currentTarget, f = f.listener, h !== l && i.isPropagationStopped()) break e;
          ha(i, f, w), l = h;
        }
      }
    }
    if (ni) throw e = xl, ni = !1, xl = null, e;
  }
  function Ve(e, t) {
    var n = t[Zl];
    n === void 0 && (n = t[Zl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ma(t, e, 2, !1), n.add(r));
  }
  function Kl(e, t, n) {
    var r = 0;
    t && (r |= 4), ma(n, e, r, t);
  }
  var ki = "_reactListening" + Math.random().toString(36).slice(2);
  function Fr(e) {
    if (!e[ki]) {
      e[ki] = !0, d.forEach(function(n) {
        n !== "selectionchange" && (xf.has(n) || Kl(n, !1, e), Kl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ki] || (t[ki] = !0, Kl("selectionchange", !1, t));
    }
  }
  function ma(e, t, n, r) {
    switch (Ds(t)) {
      case 1:
        var i = Lc;
        break;
      case 4:
        i = Ac;
        break;
      default:
        i = Tl;
    }
    n = i.bind(null, t, n, e), i = void 0, !wl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Ql(e, t, n, r, i) {
    var l = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var f = r.stateNode.containerInfo;
        if (f === i || f.nodeType === 8 && f.parentNode === i) break;
        if (s === 4) for (s = r.return; s !== null; ) {
          var h = s.tag;
          if ((h === 3 || h === 4) && (h = s.stateNode.containerInfo, h === i || h.nodeType === 8 && h.parentNode === i)) return;
          s = s.return;
        }
        for (; f !== null; ) {
          if (s = zn(f), s === null) return;
          if (h = s.tag, h === 5 || h === 6) {
            r = l = s;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    ws(function() {
      var w = l, _ = bt(n), M = [];
      e: {
        var j = fa.get(e);
        if (j !== void 0) {
          var B = Rl, H = e;
          switch (e) {
            case "keypress":
              if (hi(n) === 0) break e;
            case "keydown":
            case "keyup":
              B = qc;
              break;
            case "focusin":
              H = "focus", B = Ll;
              break;
            case "focusout":
              H = "blur", B = Ll;
              break;
            case "beforeblur":
            case "afterblur":
              B = Ll;
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
              B = Vs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = Dc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = bc;
              break;
            case sa:
            case aa:
            case ua:
              B = Vc;
              break;
            case ca:
              B = tf;
              break;
            case "scroll":
              B = Ic;
              break;
            case "wheel":
              B = rf;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = Hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = Hs;
          }
          var K = (t & 4) !== 0, Ze = !K && e === "scroll", g = K ? j !== null ? j + "Capture" : null : j;
          K = [];
          for (var v = w, k; v !== null; ) {
            k = v;
            var z = k.stateNode;
            if (k.tag === 5 && z !== null && (k = z, g !== null && (z = mr(v, g), z != null && K.push(Lr(v, z, k)))), Ze) break;
            v = v.return;
          }
          0 < K.length && (j = new B(j, H, null, n, _), M.push({ event: j, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", j && n !== Pn && (H = n.relatedTarget || n.fromElement) && (zn(H) || H[en])) break e;
          if ((B || j) && (j = _.window === _ ? _ : (j = _.ownerDocument) ? j.defaultView || j.parentWindow : window, B ? (H = n.relatedTarget || n.toElement, B = w, H = H ? zn(H) : null, H !== null && (Ze = Rn(H), H !== Ze || H.tag !== 5 && H.tag !== 6) && (H = null)) : (B = null, H = w), B !== H)) {
            if (K = Vs, z = "onMouseLeave", g = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (K = Hs, z = "onPointerLeave", g = "onPointerEnter", v = "pointer"), Ze = B == null ? j : er(B), k = H == null ? j : er(H), j = new K(z, v + "leave", B, n, _), j.target = Ze, j.relatedTarget = k, z = null, zn(_) === w && (K = new K(g, v + "enter", H, n, _), K.target = k, K.relatedTarget = Ze, z = K), Ze = z, B && H) t: {
              for (K = B, g = H, v = 0, k = K; k; k = Zn(k)) v++;
              for (k = 0, z = g; z; z = Zn(z)) k++;
              for (; 0 < v - k; ) K = Zn(K), v--;
              for (; 0 < k - v; ) g = Zn(g), k--;
              for (; v--; ) {
                if (K === g || g !== null && K === g.alternate) break t;
                K = Zn(K), g = Zn(g);
              }
              K = null;
            }
            else K = null;
            B !== null && va(M, j, B, K, !1), H !== null && Ze !== null && va(M, Ze, H, K, !0);
          }
        }
        e: {
          if (j = w ? er(w) : window, B = j.nodeName && j.nodeName.toLowerCase(), B === "select" || B === "input" && j.type === "file") var G = ff;
          else if (Xs(j)) if (Js) G = mf;
          else {
            G = hf;
            var oe = df;
          }
          else (B = j.nodeName) && B.toLowerCase() === "input" && (j.type === "checkbox" || j.type === "radio") && (G = pf);
          if (G && (G = G(e, w))) {
            qs(M, G, n, _);
            break e;
          }
          oe && oe(e, j, w), e === "focusout" && (oe = j._wrapperState) && oe.controlled && j.type === "number" && Ne(j, "number", j.value);
        }
        switch (oe = w ? er(w) : window, e) {
          case "focusin":
            (Xs(oe) || oe.contentEditable === "true") && (qn = oe, Bl = w, Rr = null);
            break;
          case "focusout":
            Rr = Bl = qn = null;
            break;
          case "mousedown":
            Vl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Vl = !1, la(M, n, _);
            break;
          case "selectionchange":
            if (gf) break;
          case "keydown":
          case "keyup":
            la(M, n, _);
        }
        var se;
        if (Il) e: {
          switch (e) {
            case "compositionstart":
              var pe = "onCompositionStart";
              break e;
            case "compositionend":
              pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              pe = "onCompositionUpdate";
              break e;
          }
          pe = void 0;
        }
        else Xn ? Gs(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (Ws && n.locale !== "ko" && (Xn || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Xn && (se = $s()) : (hn = _, Pl = "value" in hn ? hn.value : hn.textContent, Xn = !0)), oe = wi(w, pe), 0 < oe.length && (pe = new Us(pe, e, null, n, _), M.push({ event: pe, listeners: oe }), se ? pe.data = se : (se = Ys(n), se !== null && (pe.data = se)))), (se = of ? sf(e, n) : af(e, n)) && (w = wi(w, "onBeforeInput"), 0 < w.length && (_ = new Us("onBeforeInput", "beforeinput", null, n, _), M.push({ event: _, listeners: w }), _.data = se));
      }
      pa(M, t);
    });
  }
  function Lr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function wi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, l = i.stateNode;
      i.tag === 5 && l !== null && (i = l, l = mr(e, n), l != null && r.unshift(Lr(e, l, i)), l = mr(e, t), l != null && r.push(Lr(e, l, i))), e = e.return;
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
  function va(e, t, n, r, i) {
    for (var l = t._reactName, s = []; n !== null && n !== r; ) {
      var f = n, h = f.alternate, w = f.stateNode;
      if (h !== null && h === r) break;
      f.tag === 5 && w !== null && (f = w, i ? (h = mr(n, l), h != null && s.unshift(Lr(n, h, f))) : i || (h = mr(n, l), h != null && s.push(Lr(n, h, f)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Sf = /\r\n?/g, Ef = /\u0000|\uFFFD/g;
  function ya(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sf, `
`).replace(Ef, "");
  }
  function xi(e, t, n) {
    if (t = ya(t), ya(e) !== t && n) throw Error(a(425));
  }
  function Si() {
  }
  var Gl = null, Yl = null;
  function Xl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ql = typeof setTimeout == "function" ? setTimeout : void 0, jf = typeof clearTimeout == "function" ? clearTimeout : void 0, ga = typeof Promise == "function" ? Promise : void 0, _f = typeof queueMicrotask == "function" ? queueMicrotask : typeof ga < "u" ? function(e) {
    return ga.resolve(null).then(e).catch(Cf);
  } : ql;
  function Cf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Jl(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), jr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    jr(t);
  }
  function mn(e) {
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
  function ka(e) {
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
  var bn = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + bn, Ar = "__reactProps$" + bn, en = "__reactContainer$" + bn, Zl = "__reactEvents$" + bn, Nf = "__reactListeners$" + bn, Tf = "__reactHandles$" + bn;
  function zn(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[en] || n[Yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ka(e); e !== null; ) {
          if (n = e[Yt]) return n;
          e = ka(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ir(e) {
    return e = e[Yt] || e[en], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function er(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Ei(e) {
    return e[Ar] || null;
  }
  var bl = [], tr = -1;
  function vn(e) {
    return { current: e };
  }
  function Ue(e) {
    0 > tr || (e.current = bl[tr], bl[tr] = null, tr--);
  }
  function Be(e, t) {
    tr++, bl[tr] = e.current, e.current = t;
  }
  var yn = {}, dt = vn(yn), wt = vn(!1), Fn = yn;
  function nr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return yn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, l;
    for (l in n) i[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function xt(e) {
    return e = e.childContextTypes, e != null;
  }
  function ji() {
    Ue(wt), Ue(dt);
  }
  function wa(e, t, n) {
    if (dt.current !== yn) throw Error(a(168));
    Be(dt, t), Be(wt, n);
  }
  function xa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(a(108, P(e) || "Unknown", i));
    return O({}, n, r);
  }
  function _i(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yn, Fn = dt.current, Be(dt, e), Be(wt, wt.current), !0;
  }
  function Sa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n ? (e = xa(e, t, Fn), r.__reactInternalMemoizedMergedChildContext = e, Ue(wt), Ue(dt), Be(dt, e)) : Ue(wt), Be(wt, n);
  }
  var tn = null, Ci = !1, eo = !1;
  function Ea(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  function Mf(e) {
    Ci = !0, Ea(e);
  }
  function gn() {
    if (!eo && tn !== null) {
      eo = !0;
      var e = 0, t = ze;
      try {
        var n = tn;
        for (ze = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        tn = null, Ci = !1;
      } catch (i) {
        throw tn !== null && (tn = tn.slice(e + 1)), _s(Sl, gn), i;
      } finally {
        ze = t, eo = !1;
      }
    }
    return null;
  }
  var rr = [], ir = 0, Ni = null, Ti = 0, zt = [], Ft = 0, Ln = null, nn = 1, rn = "";
  function An(e, t) {
    rr[ir++] = Ti, rr[ir++] = Ni, Ni = e, Ti = t;
  }
  function ja(e, t, n) {
    zt[Ft++] = nn, zt[Ft++] = rn, zt[Ft++] = Ln, Ln = e;
    var r = nn;
    e = rn;
    var i = 32 - $t(r) - 1;
    r &= ~(1 << i), n += 1;
    var l = 32 - $t(t) + i;
    if (30 < l) {
      var s = i - i % 5;
      l = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, nn = 1 << 32 - $t(t) + i | n << i | r, rn = l + e;
    } else nn = 1 << l | n << i | r, rn = e;
  }
  function to(e) {
    e.return !== null && (An(e, 1), ja(e, 1, 0));
  }
  function no(e) {
    for (; e === Ni; ) Ni = rr[--ir], rr[ir] = null, Ti = rr[--ir], rr[ir] = null;
    for (; e === Ln; ) Ln = zt[--Ft], zt[Ft] = null, rn = zt[--Ft], zt[Ft] = null, nn = zt[--Ft], zt[Ft] = null;
  }
  var Nt = null, Tt = null, Ke = !1, Vt = null;
  function _a(e, t) {
    var n = Ot(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Ca(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Nt = e, Tt = mn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Nt = e, Tt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: nn, overflow: rn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ot(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Nt = e, Tt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ro(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function io(e) {
    if (Ke) {
      var t = Tt;
      if (t) {
        var n = t;
        if (!Ca(e, t)) {
          if (ro(e)) throw Error(a(418));
          t = mn(n.nextSibling);
          var r = Nt;
          t && Ca(e, t) ? _a(r, n) : (e.flags = e.flags & -4097 | 2, Ke = !1, Nt = e);
        }
      } else {
        if (ro(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, Ke = !1, Nt = e;
      }
    }
  }
  function Na(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Nt = e;
  }
  function Mi(e) {
    if (e !== Nt) return !1;
    if (!Ke) return Na(e), Ke = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xl(e.type, e.memoizedProps)), t && (t = Tt)) {
      if (ro(e)) throw Ta(), Error(a(418));
      for (; t; ) _a(e, t), t = mn(t.nextSibling);
    }
    if (Na(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Tt = mn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Tt = null;
      }
    } else Tt = Nt ? mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ta() {
    for (var e = Tt; e; ) e = mn(e.nextSibling);
  }
  function lr() {
    Tt = Nt = null, Ke = !1;
  }
  function lo(e) {
    Vt === null ? Vt = [e] : Vt.push(e);
  }
  var Pf = q.ReactCurrentBatchConfig;
  function Or(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var i = r, l = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(s) {
          var f = i.refs;
          s === null ? delete f[l] : f[l] = s;
        }, t._stringRef = l, t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function Pi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ma(e) {
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
      return g = Cn(g, v), g.index = 0, g.sibling = null, g;
    }
    function l(g, v, k) {
      return g.index = k, e ? (k = g.alternate, k !== null ? (k = k.index, k < v ? (g.flags |= 2, v) : k) : (g.flags |= 2, v)) : (g.flags |= 1048576, v);
    }
    function s(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function f(g, v, k, z) {
      return v === null || v.tag !== 6 ? (v = Jo(k, g.mode, z), v.return = g, v) : (v = i(v, k), v.return = g, v);
    }
    function h(g, v, k, z) {
      var G = k.type;
      return G === ye ? _(g, v, k.props.children, z, k.key) : v !== null && (v.elementType === G || typeof G == "object" && G !== null && G.$$typeof === ge && Ma(G) === v.type) ? (z = i(v, k.props), z.ref = Or(g, v, k), z.return = g, z) : (z = el(k.type, k.key, k.props, null, g.mode, z), z.ref = Or(g, v, k), z.return = g, z);
    }
    function w(g, v, k, z) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== k.containerInfo || v.stateNode.implementation !== k.implementation ? (v = Zo(k, g.mode, z), v.return = g, v) : (v = i(v, k.children || []), v.return = g, v);
    }
    function _(g, v, k, z, G) {
      return v === null || v.tag !== 7 ? (v = Hn(k, g.mode, z, G), v.return = g, v) : (v = i(v, k), v.return = g, v);
    }
    function M(g, v, k) {
      if (typeof v == "string" && v !== "" || typeof v == "number") return v = Jo("" + v, g.mode, k), v.return = g, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case b:
            return k = el(v.type, v.key, v.props, null, g.mode, k), k.ref = Or(g, null, v), k.return = g, k;
          case ee:
            return v = Zo(v, g.mode, k), v.return = g, v;
          case ge:
            var z = v._init;
            return M(g, z(v._payload), k);
        }
        if (We(v) || Q(v)) return v = Hn(v, g.mode, k, null), v.return = g, v;
        Pi(g, v);
      }
      return null;
    }
    function j(g, v, k, z) {
      var G = v !== null ? v.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number") return G !== null ? null : f(g, v, "" + k, z);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case b:
            return k.key === G ? h(g, v, k, z) : null;
          case ee:
            return k.key === G ? w(g, v, k, z) : null;
          case ge:
            return G = k._init, j(
              g,
              v,
              G(k._payload),
              z
            );
        }
        if (We(k) || Q(k)) return G !== null ? null : _(g, v, k, z, null);
        Pi(g, k);
      }
      return null;
    }
    function B(g, v, k, z, G) {
      if (typeof z == "string" && z !== "" || typeof z == "number") return g = g.get(k) || null, f(v, g, "" + z, G);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            return g = g.get(z.key === null ? k : z.key) || null, h(v, g, z, G);
          case ee:
            return g = g.get(z.key === null ? k : z.key) || null, w(v, g, z, G);
          case ge:
            var oe = z._init;
            return B(g, v, k, oe(z._payload), G);
        }
        if (We(z) || Q(z)) return g = g.get(k) || null, _(v, g, z, G, null);
        Pi(v, z);
      }
      return null;
    }
    function H(g, v, k, z) {
      for (var G = null, oe = null, se = v, pe = v = 0, at = null; se !== null && pe < k.length; pe++) {
        se.index > pe ? (at = se, se = null) : at = se.sibling;
        var Te = j(g, se, k[pe], z);
        if (Te === null) {
          se === null && (se = at);
          break;
        }
        e && se && Te.alternate === null && t(g, se), v = l(Te, v, pe), oe === null ? G = Te : oe.sibling = Te, oe = Te, se = at;
      }
      if (pe === k.length) return n(g, se), Ke && An(g, pe), G;
      if (se === null) {
        for (; pe < k.length; pe++) se = M(g, k[pe], z), se !== null && (v = l(se, v, pe), oe === null ? G = se : oe.sibling = se, oe = se);
        return Ke && An(g, pe), G;
      }
      for (se = r(g, se); pe < k.length; pe++) at = B(se, g, pe, k[pe], z), at !== null && (e && at.alternate !== null && se.delete(at.key === null ? pe : at.key), v = l(at, v, pe), oe === null ? G = at : oe.sibling = at, oe = at);
      return e && se.forEach(function(Nn) {
        return t(g, Nn);
      }), Ke && An(g, pe), G;
    }
    function K(g, v, k, z) {
      var G = Q(k);
      if (typeof G != "function") throw Error(a(150));
      if (k = G.call(k), k == null) throw Error(a(151));
      for (var oe = G = null, se = v, pe = v = 0, at = null, Te = k.next(); se !== null && !Te.done; pe++, Te = k.next()) {
        se.index > pe ? (at = se, se = null) : at = se.sibling;
        var Nn = j(g, se, Te.value, z);
        if (Nn === null) {
          se === null && (se = at);
          break;
        }
        e && se && Nn.alternate === null && t(g, se), v = l(Nn, v, pe), oe === null ? G = Nn : oe.sibling = Nn, oe = Nn, se = at;
      }
      if (Te.done) return n(
        g,
        se
      ), Ke && An(g, pe), G;
      if (se === null) {
        for (; !Te.done; pe++, Te = k.next()) Te = M(g, Te.value, z), Te !== null && (v = l(Te, v, pe), oe === null ? G = Te : oe.sibling = Te, oe = Te);
        return Ke && An(g, pe), G;
      }
      for (se = r(g, se); !Te.done; pe++, Te = k.next()) Te = B(se, g, pe, Te.value, z), Te !== null && (e && Te.alternate !== null && se.delete(Te.key === null ? pe : Te.key), v = l(Te, v, pe), oe === null ? G = Te : oe.sibling = Te, oe = Te);
      return e && se.forEach(function(ud) {
        return t(g, ud);
      }), Ke && An(g, pe), G;
    }
    function Ze(g, v, k, z) {
      if (typeof k == "object" && k !== null && k.type === ye && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case b:
            e: {
              for (var G = k.key, oe = v; oe !== null; ) {
                if (oe.key === G) {
                  if (G = k.type, G === ye) {
                    if (oe.tag === 7) {
                      n(g, oe.sibling), v = i(oe, k.props.children), v.return = g, g = v;
                      break e;
                    }
                  } else if (oe.elementType === G || typeof G == "object" && G !== null && G.$$typeof === ge && Ma(G) === oe.type) {
                    n(g, oe.sibling), v = i(oe, k.props), v.ref = Or(g, oe, k), v.return = g, g = v;
                    break e;
                  }
                  n(g, oe);
                  break;
                } else t(g, oe);
                oe = oe.sibling;
              }
              k.type === ye ? (v = Hn(k.props.children, g.mode, z, k.key), v.return = g, g = v) : (z = el(k.type, k.key, k.props, null, g.mode, z), z.ref = Or(g, v, k), z.return = g, g = z);
            }
            return s(g);
          case ee:
            e: {
              for (oe = k.key; v !== null; ) {
                if (v.key === oe) if (v.tag === 4 && v.stateNode.containerInfo === k.containerInfo && v.stateNode.implementation === k.implementation) {
                  n(g, v.sibling), v = i(v, k.children || []), v.return = g, g = v;
                  break e;
                } else {
                  n(g, v);
                  break;
                }
                else t(g, v);
                v = v.sibling;
              }
              v = Zo(k, g.mode, z), v.return = g, g = v;
            }
            return s(g);
          case ge:
            return oe = k._init, Ze(g, v, oe(k._payload), z);
        }
        if (We(k)) return H(g, v, k, z);
        if (Q(k)) return K(g, v, k, z);
        Pi(g, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, v !== null && v.tag === 6 ? (n(g, v.sibling), v = i(v, k), v.return = g, g = v) : (n(g, v), v = Jo(k, g.mode, z), v.return = g, g = v), s(g)) : n(g, v);
    }
    return Ze;
  }
  var or = Pa(!0), Ra = Pa(!1), Ri = vn(null), zi = null, sr = null, oo = null;
  function so() {
    oo = sr = zi = null;
  }
  function ao(e) {
    var t = Ri.current;
    Ue(Ri), e._currentValue = t;
  }
  function uo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ar(e, t) {
    zi = e, oo = sr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (St = !0), e.firstContext = null);
  }
  function Lt(e) {
    var t = e._currentValue;
    if (oo !== e) if (e = { context: e, memoizedValue: t, next: null }, sr === null) {
      if (zi === null) throw Error(a(308));
      sr = e, zi.dependencies = { lanes: 0, firstContext: e };
    } else sr = sr.next = e;
    return t;
  }
  var In = null;
  function co(e) {
    In === null ? In = [e] : In.push(e);
  }
  function za(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, co(t)) : (n.next = i.next, i.next = n), t.interleaved = n, ln(e, r);
  }
  function ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var kn = !1;
  function fo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fa(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function on(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function wn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Ce & 2) !== 0) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, ln(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, co(r)) : (t.next = i.next, i.next = t), r.interleaved = t, ln(e, n);
  }
  function Fi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, _l(e, n);
    }
  }
  function La(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, l = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          l === null ? i = l = s : l = l.next = s, n = n.next;
        } while (n !== null);
        l === null ? i = l = t : l = l.next = t;
      } else i = l = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Li(e, t, n, r) {
    var i = e.updateQueue;
    kn = !1;
    var l = i.firstBaseUpdate, s = i.lastBaseUpdate, f = i.shared.pending;
    if (f !== null) {
      i.shared.pending = null;
      var h = f, w = h.next;
      h.next = null, s === null ? l = w : s.next = w, s = h;
      var _ = e.alternate;
      _ !== null && (_ = _.updateQueue, f = _.lastBaseUpdate, f !== s && (f === null ? _.firstBaseUpdate = w : f.next = w, _.lastBaseUpdate = h));
    }
    if (l !== null) {
      var M = i.baseState;
      s = 0, _ = w = h = null, f = l;
      do {
        var j = f.lane, B = f.eventTime;
        if ((r & j) === j) {
          _ !== null && (_ = _.next = {
            eventTime: B,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          e: {
            var H = e, K = f;
            switch (j = t, B = n, K.tag) {
              case 1:
                if (H = K.payload, typeof H == "function") {
                  M = H.call(B, M, j);
                  break e;
                }
                M = H;
                break e;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = K.payload, j = typeof H == "function" ? H.call(B, M, j) : H, j == null) break e;
                M = O({}, M, j);
                break e;
              case 2:
                kn = !0;
            }
          }
          f.callback !== null && f.lane !== 0 && (e.flags |= 64, j = i.effects, j === null ? i.effects = [f] : j.push(f));
        } else B = { eventTime: B, lane: j, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, _ === null ? (w = _ = B, h = M) : _ = _.next = B, s |= j;
        if (f = f.next, f === null) {
          if (f = i.shared.pending, f === null) break;
          j = f, f = j.next, j.next = null, i.lastBaseUpdate = j, i.shared.pending = null;
        }
      } while (!0);
      if (_ === null && (h = M), i.baseState = h, i.firstBaseUpdate = w, i.lastBaseUpdate = _, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          s |= i.lane, i = i.next;
        while (i !== t);
      } else l === null && (i.shared.lanes = 0);
      $n |= s, e.lanes = s, e.memoizedState = M;
    }
  }
  function Aa(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(a(191, i));
        i.call(r);
      }
    }
  }
  var Dr = {}, Xt = vn(Dr), $r = vn(Dr), Br = vn(Dr);
  function On(e) {
    if (e === Dr) throw Error(a(174));
    return e;
  }
  function ho(e, t) {
    switch (Be(Br, t), Be($r, e), Be(Xt, Dr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : tt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = tt(t, e);
    }
    Ue(Xt), Be(Xt, t);
  }
  function ur() {
    Ue(Xt), Ue($r), Ue(Br);
  }
  function Ia(e) {
    On(Br.current);
    var t = On(Xt.current), n = tt(t, e.type);
    t !== n && (Be($r, e), Be(Xt, n));
  }
  function po(e) {
    $r.current === e && (Ue(Xt), Ue($r));
  }
  var Ge = vn(0);
  function Ai(e) {
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
  var mo = [];
  function vo() {
    for (var e = 0; e < mo.length; e++) mo[e]._workInProgressVersionPrimary = null;
    mo.length = 0;
  }
  var Ii = q.ReactCurrentDispatcher, yo = q.ReactCurrentBatchConfig, Dn = 0, Ye = null, rt = null, ot = null, Oi = !1, Vr = !1, Ur = 0, Rf = 0;
  function ht() {
    throw Error(a(321));
  }
  function go(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function ko(e, t, n, r, i, l) {
    if (Dn = l, Ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ii.current = e === null || e.memoizedState === null ? Af : If, e = n(r, i), Vr) {
      l = 0;
      do {
        if (Vr = !1, Ur = 0, 25 <= l) throw Error(a(301));
        l += 1, ot = rt = null, t.updateQueue = null, Ii.current = Of, e = n(r, i);
      } while (Vr);
    }
    if (Ii.current = Bi, t = rt !== null && rt.next !== null, Dn = 0, ot = rt = Ye = null, Oi = !1, t) throw Error(a(300));
    return e;
  }
  function wo() {
    var e = Ur !== 0;
    return Ur = 0, e;
  }
  function qt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ot === null ? Ye.memoizedState = ot = e : ot = ot.next = e, ot;
  }
  function At() {
    if (rt === null) {
      var e = Ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = rt.next;
    var t = ot === null ? Ye.memoizedState : ot.next;
    if (t !== null) ot = t, rt = e;
    else {
      if (e === null) throw Error(a(310));
      rt = e, e = { memoizedState: rt.memoizedState, baseState: rt.baseState, baseQueue: rt.baseQueue, queue: rt.queue, next: null }, ot === null ? Ye.memoizedState = ot = e : ot = ot.next = e;
    }
    return ot;
  }
  function Hr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function xo(e) {
    var t = At(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = rt, i = r.baseQueue, l = n.pending;
    if (l !== null) {
      if (i !== null) {
        var s = i.next;
        i.next = l.next, l.next = s;
      }
      r.baseQueue = i = l, n.pending = null;
    }
    if (i !== null) {
      l = i.next, r = r.baseState;
      var f = s = null, h = null, w = l;
      do {
        var _ = w.lane;
        if ((Dn & _) === _) h !== null && (h = h.next = { lane: 0, action: w.action, hasEagerState: w.hasEagerState, eagerState: w.eagerState, next: null }), r = w.hasEagerState ? w.eagerState : e(r, w.action);
        else {
          var M = {
            lane: _,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          };
          h === null ? (f = h = M, s = r) : h = h.next = M, Ye.lanes |= _, $n |= _;
        }
        w = w.next;
      } while (w !== null && w !== l);
      h === null ? s = r : h.next = f, Bt(r, t.memoizedState) || (St = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = h, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        l = i.lane, Ye.lanes |= l, $n |= l, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function So(e) {
    var t = At(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, l = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do
        l = e(l, s.action), s = s.next;
      while (s !== i);
      Bt(l, t.memoizedState) || (St = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, r];
  }
  function Oa() {
  }
  function Da(e, t) {
    var n = Ye, r = At(), i = t(), l = !Bt(r.memoizedState, i);
    if (l && (r.memoizedState = i, St = !0), r = r.queue, Eo(Va.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || ot !== null && ot.memoizedState.tag & 1) {
      if (n.flags |= 2048, Wr(9, Ba.bind(null, n, r, i, t), void 0, null), st === null) throw Error(a(349));
      (Dn & 30) !== 0 || $a(n, t, i);
    }
    return i;
  }
  function $a(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ba(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ua(t) && Ha(e);
  }
  function Va(e, t, n) {
    return n(function() {
      Ua(t) && Ha(e);
    });
  }
  function Ua(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function Ha(e) {
    var t = ln(e, 1);
    t !== null && Kt(t, e, 1, -1);
  }
  function Wa(e) {
    var t = qt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Lf.bind(null, Ye, e), [t.memoizedState, e];
  }
  function Wr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ye.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ka() {
    return At().memoizedState;
  }
  function Di(e, t, n, r) {
    var i = qt();
    Ye.flags |= e, i.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function $i(e, t, n, r) {
    var i = At();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (rt !== null) {
      var s = rt.memoizedState;
      if (l = s.destroy, r !== null && go(r, s.deps)) {
        i.memoizedState = Wr(t, n, l, r);
        return;
      }
    }
    Ye.flags |= e, i.memoizedState = Wr(1 | t, n, l, r);
  }
  function Qa(e, t) {
    return Di(8390656, 8, e, t);
  }
  function Eo(e, t) {
    return $i(2048, 8, e, t);
  }
  function Ga(e, t) {
    return $i(4, 2, e, t);
  }
  function Ya(e, t) {
    return $i(4, 4, e, t);
  }
  function Xa(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function qa(e, t, n) {
    return n = n != null ? n.concat([e]) : null, $i(4, 4, Xa.bind(null, t, e), n);
  }
  function jo() {
  }
  function Ja(e, t) {
    var n = At();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Za(e, t) {
    var n = At();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ba(e, t, n) {
    return (Dn & 21) === 0 ? (e.baseState && (e.baseState = !1, St = !0), e.memoizedState = n) : (Bt(n, t) || (n = Ms(), Ye.lanes |= n, $n |= n, e.baseState = !0), t);
  }
  function zf(e, t) {
    var n = ze;
    ze = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = yo.transition;
    yo.transition = {};
    try {
      e(!1), t();
    } finally {
      ze = n, yo.transition = r;
    }
  }
  function eu() {
    return At().memoizedState;
  }
  function Ff(e, t, n) {
    var r = jn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, tu(e)) nu(t, n);
    else if (n = za(e, t, n, r), n !== null) {
      var i = kt();
      Kt(n, e, r, i), ru(n, t, r);
    }
  }
  function Lf(e, t, n) {
    var r = jn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (tu(e)) nu(t, i);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
        var s = t.lastRenderedState, f = l(s, n);
        if (i.hasEagerState = !0, i.eagerState = f, Bt(f, s)) {
          var h = t.interleaved;
          h === null ? (i.next = i, co(t)) : (i.next = h.next, h.next = i), t.interleaved = i;
          return;
        }
      } catch {
      }
      n = za(e, t, i, r), n !== null && (i = kt(), Kt(n, e, r, i), ru(n, t, r));
    }
  }
  function tu(e) {
    var t = e.alternate;
    return e === Ye || t !== null && t === Ye;
  }
  function nu(e, t) {
    Vr = Oi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ru(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, _l(e, n);
    }
  }
  var Bi = { readContext: Lt, useCallback: ht, useContext: ht, useEffect: ht, useImperativeHandle: ht, useInsertionEffect: ht, useLayoutEffect: ht, useMemo: ht, useReducer: ht, useRef: ht, useState: ht, useDebugValue: ht, useDeferredValue: ht, useTransition: ht, useMutableSource: ht, useSyncExternalStore: ht, useId: ht, unstable_isNewReconciler: !1 }, Af = { readContext: Lt, useCallback: function(e, t) {
    return qt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Lt, useEffect: Qa, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Di(
      4194308,
      4,
      Xa.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Di(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Di(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = qt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = qt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ff.bind(null, Ye, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = qt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Wa, useDebugValue: jo, useDeferredValue: function(e) {
    return qt().memoizedState = e;
  }, useTransition: function() {
    var e = Wa(!1), t = e[0];
    return e = zf.bind(null, e[1]), qt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ye, i = qt();
    if (Ke) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), st === null) throw Error(a(349));
      (Dn & 30) !== 0 || $a(r, t, n);
    }
    i.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return i.queue = l, Qa(Va.bind(
      null,
      r,
      l,
      e
    ), [e]), r.flags |= 2048, Wr(9, Ba.bind(null, r, l, n, t), void 0, null), n;
  }, useId: function() {
    var e = qt(), t = st.identifierPrefix;
    if (Ke) {
      var n = rn, r = nn;
      n = (r & ~(1 << 32 - $t(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ur++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Rf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, If = {
    readContext: Lt,
    useCallback: Ja,
    useContext: Lt,
    useEffect: Eo,
    useImperativeHandle: qa,
    useInsertionEffect: Ga,
    useLayoutEffect: Ya,
    useMemo: Za,
    useReducer: xo,
    useRef: Ka,
    useState: function() {
      return xo(Hr);
    },
    useDebugValue: jo,
    useDeferredValue: function(e) {
      var t = At();
      return ba(t, rt.memoizedState, e);
    },
    useTransition: function() {
      var e = xo(Hr)[0], t = At().memoizedState;
      return [e, t];
    },
    useMutableSource: Oa,
    useSyncExternalStore: Da,
    useId: eu,
    unstable_isNewReconciler: !1
  }, Of = { readContext: Lt, useCallback: Ja, useContext: Lt, useEffect: Eo, useImperativeHandle: qa, useInsertionEffect: Ga, useLayoutEffect: Ya, useMemo: Za, useReducer: So, useRef: Ka, useState: function() {
    return So(Hr);
  }, useDebugValue: jo, useDeferredValue: function(e) {
    var t = At();
    return rt === null ? t.memoizedState = e : ba(t, rt.memoizedState, e);
  }, useTransition: function() {
    var e = So(Hr)[0], t = At().memoizedState;
    return [e, t];
  }, useMutableSource: Oa, useSyncExternalStore: Da, useId: eu, unstable_isNewReconciler: !1 };
  function Ut(e, t) {
    if (e && e.defaultProps) {
      t = O({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function _o(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : O({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Vi = { isMounted: function(e) {
    return (e = e._reactInternals) ? Rn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = kt(), i = jn(e), l = on(r, i);
    l.payload = t, n != null && (l.callback = n), t = wn(e, l, i), t !== null && (Kt(t, e, i, r), Fi(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = kt(), i = jn(e), l = on(r, i);
    l.tag = 1, l.payload = t, n != null && (l.callback = n), t = wn(e, l, i), t !== null && (Kt(t, e, i, r), Fi(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = kt(), r = jn(e), i = on(n, r);
    i.tag = 2, t != null && (i.callback = t), t = wn(e, i, r), t !== null && (Kt(t, e, r, n), Fi(t, e, r));
  } };
  function iu(e, t, n, r, i, l, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, s) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(i, l) : !0;
  }
  function lu(e, t, n) {
    var r = !1, i = yn, l = t.contextType;
    return typeof l == "object" && l !== null ? l = Lt(l) : (i = xt(t) ? Fn : dt.current, r = t.contextTypes, l = (r = r != null) ? nr(e, i) : yn), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Vi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t;
  }
  function ou(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Vi.enqueueReplaceState(t, t.state, null);
  }
  function Co(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, fo(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? i.context = Lt(l) : (l = xt(t) ? Fn : dt.current, i.context = nr(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (_o(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Vi.enqueueReplaceState(i, i.state, null), Li(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function cr(e, t) {
    try {
      var n = "", r = t;
      do
        n += me(r), r = r.return;
      while (r);
      var i = n;
    } catch (l) {
      i = `
Error generating stack: ` + l.message + `
` + l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function No(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function To(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Df = typeof WeakMap == "function" ? WeakMap : Map;
  function su(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Yi || (Yi = !0, Ho = r), To(e, t);
    }, n;
  }
  function au(e, t, n) {
    n = on(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        To(e, t);
      };
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
      To(e, t), typeof r != "function" && (Sn === null ? Sn = /* @__PURE__ */ new Set([this]) : Sn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function uu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Df();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Zf.bind(null, e, t, n), t.then(e, e));
  }
  function cu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function fu(e, t, n, r, i) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, wn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e);
  }
  var $f = q.ReactCurrentOwner, St = !1;
  function gt(e, t, n, r) {
    t.child = e === null ? Ra(t, null, n, r) : or(t, e.child, n, r);
  }
  function du(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return ar(t, i), r = ko(e, t, n, r, l, i), n = wo(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, sn(e, t, i)) : (Ke && n && to(t), t.flags |= 1, gt(e, t, r, i), t.child);
  }
  function hu(e, t, n, r, i) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" && !qo(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, pu(e, t, l, r, i)) : (e = el(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, (e.lanes & i) === 0) {
      var s = l.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Pr, n(s, r) && e.ref === t.ref) return sn(e, t, i);
    }
    return t.flags |= 1, e = Cn(l, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function pu(e, t, n, r, i) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (Pr(l, r) && e.ref === t.ref) if (St = !1, t.pendingProps = r = l, (e.lanes & i) !== 0) (e.flags & 131072) !== 0 && (St = !0);
      else return t.lanes = e.lanes, sn(e, t, i);
    }
    return Mo(e, t, n, r, i);
  }
  function mu(e, t, n) {
    var r = t.pendingProps, i = r.children, l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Be(dr, Mt), Mt |= n;
    else {
      if ((n & 1073741824) === 0) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Be(dr, Mt), Mt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, Be(dr, Mt), Mt |= r;
    }
    else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, Be(dr, Mt), Mt |= r;
    return gt(e, t, i, n), t.child;
  }
  function vu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Mo(e, t, n, r, i) {
    var l = xt(n) ? Fn : dt.current;
    return l = nr(t, l), ar(t, i), n = ko(e, t, n, r, l, i), r = wo(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, sn(e, t, i)) : (Ke && r && to(t), t.flags |= 1, gt(e, t, n, i), t.child);
  }
  function yu(e, t, n, r, i) {
    if (xt(n)) {
      var l = !0;
      _i(t);
    } else l = !1;
    if (ar(t, i), t.stateNode === null) Hi(e, t), lu(t, n, r), Co(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, f = t.memoizedProps;
      s.props = f;
      var h = s.context, w = n.contextType;
      typeof w == "object" && w !== null ? w = Lt(w) : (w = xt(n) ? Fn : dt.current, w = nr(t, w));
      var _ = n.getDerivedStateFromProps, M = typeof _ == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      M || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== r || h !== w) && ou(t, s, r, w), kn = !1;
      var j = t.memoizedState;
      s.state = j, Li(t, r, s, i), h = t.memoizedState, f !== r || j !== h || wt.current || kn ? (typeof _ == "function" && (_o(t, n, _, r), h = t.memoizedState), (f = kn || iu(t, n, f, r, j, h, w)) ? (M || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = h), s.props = r, s.state = h, s.context = w, r = f) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, Fa(e, t), f = t.memoizedProps, w = t.type === t.elementType ? f : Ut(t.type, f), s.props = w, M = t.pendingProps, j = s.context, h = n.contextType, typeof h == "object" && h !== null ? h = Lt(h) : (h = xt(n) ? Fn : dt.current, h = nr(t, h));
      var B = n.getDerivedStateFromProps;
      (_ = typeof B == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== M || j !== h) && ou(t, s, r, h), kn = !1, j = t.memoizedState, s.state = j, Li(t, r, s, i);
      var H = t.memoizedState;
      f !== M || j !== H || wt.current || kn ? (typeof B == "function" && (_o(t, n, B, r), H = t.memoizedState), (w = kn || iu(t, n, w, r, j, H, h) || !1) ? (_ || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, H, h), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, H, h)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = H), s.props = r, s.state = H, s.context = h, r = w) : (typeof s.componentDidUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Po(e, t, n, r, l, i);
  }
  function Po(e, t, n, r, i, l) {
    vu(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Sa(t, n, !1), sn(e, t, l);
    r = t.stateNode, $f.current = t;
    var f = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = or(t, e.child, null, l), t.child = or(t, null, f, l)) : gt(e, t, f, l), t.memoizedState = r.state, i && Sa(t, n, !0), t.child;
  }
  function gu(e) {
    var t = e.stateNode;
    t.pendingContext ? wa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wa(e, t.context, !1), ho(e, t.containerInfo);
  }
  function ku(e, t, n, r, i) {
    return lr(), lo(i), t.flags |= 256, gt(e, t, n, r), t.child;
  }
  var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function wu(e, t, n) {
    var r = t.pendingProps, i = Ge.current, l = !1, s = (t.flags & 128) !== 0, f;
    if ((f = s) || (f = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), f ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Be(Ge, i & 1), e === null)
      return io(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, s = { mode: "hidden", children: s }, (r & 1) === 0 && l !== null ? (l.childLanes = 0, l.pendingProps = s) : l = tl(s, r, 0, null), e = Hn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = zo(n), t.memoizedState = Ro, e) : Fo(t, s));
    if (i = e.memoizedState, i !== null && (f = i.dehydrated, f !== null)) return Bf(e, t, s, r, f, i, n);
    if (l) {
      l = r.fallback, s = t.mode, i = e.child, f = i.sibling;
      var h = { mode: "hidden", children: r.children };
      return (s & 1) === 0 && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = h, t.deletions = null) : (r = Cn(i, h), r.subtreeFlags = i.subtreeFlags & 14680064), f !== null ? l = Cn(f, l) : (l = Hn(l, s, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, s = e.child.memoizedState, s = s === null ? zo(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, l.memoizedState = s, l.childLanes = e.childLanes & ~n, t.memoizedState = Ro, r;
    }
    return l = e.child, e = l.sibling, r = Cn(l, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Fo(e, t) {
    return t = tl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ui(e, t, n, r) {
    return r !== null && lo(r), or(t, e.child, null, n), e = Fo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bf(e, t, n, r, i, l, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = No(Error(a(422))), Ui(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = tl({ mode: "visible", children: r.children }, i, 0, null), l = Hn(l, i, s, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, (t.mode & 1) !== 0 && or(t, e.child, null, s), t.child.memoizedState = zo(s), t.memoizedState = Ro, l);
    if ((t.mode & 1) === 0) return Ui(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var f = r.dgst;
      return r = f, l = Error(a(419)), r = No(l, r, void 0), Ui(e, t, s, r);
    }
    if (f = (s & e.childLanes) !== 0, St || f) {
      if (r = st, r !== null) {
        switch (s & -s) {
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
        i = (i & (r.suspendedLanes | s)) !== 0 ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, ln(e, i), Kt(r, e, i, -1));
      }
      return Xo(), r = No(Error(a(421))), Ui(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = bf.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, Tt = mn(i.nextSibling), Nt = t, Ke = !0, Vt = null, e !== null && (zt[Ft++] = nn, zt[Ft++] = rn, zt[Ft++] = Ln, nn = e.id, rn = e.overflow, Ln = t), t = Fo(t, r.children), t.flags |= 4096, t);
  }
  function xu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), uo(e.return, t, n);
  }
  function Lo(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i);
  }
  function Su(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, l = r.tail;
    if (gt(e, t, r.children, n), r = Ge.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xu(e, n, t);
        else if (e.tag === 19) xu(e, n, t);
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
    if (Be(Ge, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Ai(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Lo(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Ai(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Lo(t, !0, n, null, l);
        break;
      case "together":
        Lo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Hi(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function sn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), $n |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Cn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Vf(e, t, n) {
    switch (t.tag) {
      case 3:
        gu(t), lr();
        break;
      case 5:
        Ia(t);
        break;
      case 1:
        xt(t.type) && _i(t);
        break;
      case 4:
        ho(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Be(Ri, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Be(Ge, Ge.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? wu(e, t, n) : (Be(Ge, Ge.current & 1), e = sn(e, t, n), e !== null ? e.sibling : null);
        Be(Ge, Ge.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Su(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Be(Ge, Ge.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, mu(e, t, n);
    }
    return sn(e, t, n);
  }
  var Eu, Ao, ju, _u;
  Eu = function(e, t) {
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
  }, Ao = function() {
  }, ju = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, On(Xt.current);
      var l = null;
      switch (n) {
        case "input":
          i = ie(e, i), r = ie(e, r), l = [];
          break;
        case "select":
          i = O({}, i, { value: void 0 }), r = O({}, r, { value: void 0 }), l = [];
          break;
        case "textarea":
          i = S(e, i), r = S(e, r), l = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Si);
      }
      Rt(n, r);
      var s;
      n = null;
      for (w in i) if (!r.hasOwnProperty(w) && i.hasOwnProperty(w) && i[w] != null) if (w === "style") {
        var f = i[w];
        for (s in f) f.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
      } else w !== "dangerouslySetInnerHTML" && w !== "children" && w !== "suppressContentEditableWarning" && w !== "suppressHydrationWarning" && w !== "autoFocus" && (m.hasOwnProperty(w) ? l || (l = []) : (l = l || []).push(w, null));
      for (w in r) {
        var h = r[w];
        if (f = i?.[w], r.hasOwnProperty(w) && h !== f && (h != null || f != null)) if (w === "style") if (f) {
          for (s in f) !f.hasOwnProperty(s) || h && h.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
          for (s in h) h.hasOwnProperty(s) && f[s] !== h[s] && (n || (n = {}), n[s] = h[s]);
        } else n || (l || (l = []), l.push(
          w,
          n
        )), n = h;
        else w === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, f = f ? f.__html : void 0, h != null && f !== h && (l = l || []).push(w, h)) : w === "children" ? typeof h != "string" && typeof h != "number" || (l = l || []).push(w, "" + h) : w !== "suppressContentEditableWarning" && w !== "suppressHydrationWarning" && (m.hasOwnProperty(w) ? (h != null && w === "onScroll" && Ve("scroll", e), l || f === h || (l = [])) : (l = l || []).push(w, h));
      }
      n && (l = l || []).push("style", n);
      var w = l;
      (t.updateQueue = w) && (t.flags |= 4);
    }
  }, _u = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Kr(e, t) {
    if (!Ke) switch (e.tailMode) {
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
  function pt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Uf(e, t, n) {
    var r = t.pendingProps;
    switch (no(t), t.tag) {
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
        return pt(t), null;
      case 1:
        return xt(t.type) && ji(), pt(t), null;
      case 3:
        return r = t.stateNode, ur(), Ue(wt), Ue(dt), vo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Mi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Vt !== null && (Qo(Vt), Vt = null))), Ao(e, t), pt(t), null;
      case 5:
        po(t);
        var i = On(Br.current);
        if (n = t.type, e !== null && t.stateNode != null) ju(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return pt(t), null;
          }
          if (e = On(Xt.current), Mi(t)) {
            r = t.stateNode, n = t.type;
            var l = t.memoizedProps;
            switch (r[Yt] = t, r[Ar] = l, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ve("cancel", r), Ve("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ve("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < zr.length; i++) Ve(zr[i], r);
                break;
              case "source":
                Ve("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ve(
                  "error",
                  r
                ), Ve("load", r);
                break;
              case "details":
                Ve("toggle", r);
                break;
              case "input":
                _e(r, l), Ve("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!l.multiple }, Ve("invalid", r);
                break;
              case "textarea":
                F(r, l), Ve("invalid", r);
            }
            Rt(n, l), i = null;
            for (var s in l) if (l.hasOwnProperty(s)) {
              var f = l[s];
              s === "children" ? typeof f == "string" ? r.textContent !== f && (l.suppressHydrationWarning !== !0 && xi(r.textContent, f, e), i = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (l.suppressHydrationWarning !== !0 && xi(
                r.textContent,
                f,
                e
              ), i = ["children", "" + f]) : m.hasOwnProperty(s) && f != null && s === "onScroll" && Ve("scroll", r);
            }
            switch (n) {
              case "input":
                de(r), He(r, l, !0);
                break;
              case "textarea":
                de(r), xe(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = Si);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Oe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Yt] = t, e[Ar] = r, Eu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Mn(n, r), n) {
                case "dialog":
                  Ve("cancel", e), Ve("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ve("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < zr.length; i++) Ve(zr[i], e);
                  i = r;
                  break;
                case "source":
                  Ve("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Ve(
                    "error",
                    e
                  ), Ve("load", e), i = r;
                  break;
                case "details":
                  Ve("toggle", e), i = r;
                  break;
                case "input":
                  _e(e, r), i = ie(e, r), Ve("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = O({}, r, { value: void 0 }), Ve("invalid", e);
                  break;
                case "textarea":
                  F(e, r), i = S(e, r), Ve("invalid", e);
                  break;
                default:
                  i = r;
              }
              Rt(n, i), f = i;
              for (l in f) if (f.hasOwnProperty(l)) {
                var h = f[l];
                l === "style" ? yt(e, h) : l === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, h != null && Qt(e, h)) : l === "children" ? typeof h == "string" ? (n !== "textarea" || h !== "") && we(e, h) : typeof h == "number" && we(e, "" + h) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (m.hasOwnProperty(l) ? h != null && l === "onScroll" && Ve("scroll", e) : h != null && I(e, l, h, s));
              }
              switch (n) {
                case "input":
                  de(e), He(e, r, !1);
                  break;
                case "textarea":
                  de(e), xe(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + L(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, l = r.value, l != null ? Qe(e, !!r.multiple, l, !1) : r.defaultValue != null && Qe(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Si);
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
        return pt(t), null;
      case 6:
        if (e && t.stateNode != null) _u(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (n = On(Br.current), On(Xt.current), Mi(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (l = r.nodeValue !== n) && (e = Nt, e !== null)) switch (e.tag) {
              case 3:
                xi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && xi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            l && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r;
        }
        return pt(t), null;
      case 13:
        if (Ue(Ge), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ke && Tt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ta(), lr(), t.flags |= 98560, l = !1;
          else if (l = Mi(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(a(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(a(317));
              l[Yt] = t;
            } else lr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            pt(t), l = !1;
          } else Vt !== null && (Qo(Vt), Vt = null), l = !0;
          if (!l) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ge.current & 1) !== 0 ? it === 0 && (it = 3) : Xo())), t.updateQueue !== null && (t.flags |= 4), pt(t), null);
      case 4:
        return ur(), Ao(e, t), e === null && Fr(t.stateNode.containerInfo), pt(t), null;
      case 10:
        return ao(t.type._context), pt(t), null;
      case 17:
        return xt(t.type) && ji(), pt(t), null;
      case 19:
        if (Ue(Ge), l = t.memoizedState, l === null) return pt(t), null;
        if (r = (t.flags & 128) !== 0, s = l.rendering, s === null) if (r) Kr(l, !1);
        else {
          if (it !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (s = Ai(e), s !== null) {
              for (t.flags |= 128, Kr(l, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, s = l.alternate, s === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = s.childLanes, l.lanes = s.lanes, l.child = s.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = s.memoizedProps, l.memoizedState = s.memoizedState, l.updateQueue = s.updateQueue, l.type = s.type, e = s.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Be(Ge, Ge.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && Je() > hr && (t.flags |= 128, r = !0, Kr(l, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Ai(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kr(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !Ke) return pt(t), null;
          } else 2 * Je() - l.renderingStartTime > hr && n !== 1073741824 && (t.flags |= 128, r = !0, Kr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (s.sibling = t.child, t.child = s) : (n = l.last, n !== null ? n.sibling = s : t.child = s, l.last = s);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Je(), t.sibling = null, n = Ge.current, Be(Ge, r ? n & 1 | 2 : n & 1), t) : (pt(t), null);
      case 22:
      case 23:
        return Yo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Mt & 1073741824) !== 0 && (pt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Hf(e, t) {
    switch (no(t), t.tag) {
      case 1:
        return xt(t.type) && ji(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ur(), Ue(wt), Ue(dt), vo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return po(t), null;
      case 13:
        if (Ue(Ge), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          lr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ue(Ge), null;
      case 4:
        return ur(), null;
      case 10:
        return ao(t.type._context), null;
      case 22:
      case 23:
        return Yo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wi = !1, mt = !1, Wf = typeof WeakSet == "function" ? WeakSet : Set, V = null;
  function fr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Xe(e, t, r);
    }
    else n.current = null;
  }
  function Io(e, t, n) {
    try {
      n();
    } catch (r) {
      Xe(e, t, r);
    }
  }
  var Cu = !1;
  function Kf(e, t) {
    if (Gl = ci, e = ia(), $l(e)) {
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
          var s = 0, f = -1, h = -1, w = 0, _ = 0, M = e, j = null;
          t: for (; ; ) {
            for (var B; M !== n || i !== 0 && M.nodeType !== 3 || (f = s + i), M !== l || r !== 0 && M.nodeType !== 3 || (h = s + r), M.nodeType === 3 && (s += M.nodeValue.length), (B = M.firstChild) !== null; )
              j = M, M = B;
            for (; ; ) {
              if (M === e) break t;
              if (j === n && ++w === i && (f = s), j === l && ++_ === r && (h = s), (B = M.nextSibling) !== null) break;
              M = j, j = M.parentNode;
            }
            M = B;
          }
          n = f === -1 || h === -1 ? null : { start: f, end: h };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Yl = { focusedElem: e, selectionRange: n }, ci = !1, V = t; V !== null; ) if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, V = e;
    else for (; V !== null; ) {
      t = V;
      try {
        var H = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (H !== null) {
              var K = H.memoizedProps, Ze = H.memoizedState, g = t.stateNode, v = g.getSnapshotBeforeUpdate(t.elementType === t.type ? K : Ut(t.type, K), Ze);
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
            throw Error(a(163));
        }
      } catch (z) {
        Xe(t, t.return, z);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, V = e;
        break;
      }
      V = t.return;
    }
    return H = Cu, Cu = !1, H;
  }
  function Qr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var l = i.destroy;
          i.destroy = void 0, l !== void 0 && Io(t, n, l);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Ki(e, t) {
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
  function Oo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Nu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Nu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Ar], delete t[Zl], delete t[Nf], delete t[Tf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Tu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Mu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Tu(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Do(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Si));
    else if (r !== 4 && (e = e.child, e !== null)) for (Do(e, t, n), e = e.sibling; e !== null; ) Do(e, t, n), e = e.sibling;
  }
  function $o(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for ($o(e, t, n), e = e.sibling; e !== null; ) $o(e, t, n), e = e.sibling;
  }
  var ut = null, Ht = !1;
  function xn(e, t, n) {
    for (n = n.child; n !== null; ) Pu(e, t, n), n = n.sibling;
  }
  function Pu(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(ii, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        mt || fr(n, t);
      case 6:
        var r = ut, i = Ht;
        ut = null, xn(e, t, n), ut = r, Ht = i, ut !== null && (Ht ? (e = ut, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ut.removeChild(n.stateNode));
        break;
      case 18:
        ut !== null && (Ht ? (e = ut, n = n.stateNode, e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n), jr(e)) : Jl(ut, n.stateNode));
        break;
      case 4:
        r = ut, i = Ht, ut = n.stateNode.containerInfo, Ht = !0, xn(e, t, n), ut = r, Ht = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!mt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var l = i, s = l.destroy;
            l = l.tag, s !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && Io(n, t, s), i = i.next;
          } while (i !== r);
        }
        xn(e, t, n);
        break;
      case 1:
        if (!mt && (fr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          Xe(n, t, f);
        }
        xn(e, t, n);
        break;
      case 21:
        xn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (mt = (r = mt) || n.memoizedState !== null, xn(e, t, n), mt = r) : xn(e, t, n);
        break;
      default:
        xn(e, t, n);
    }
  }
  function Ru(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Wf()), t.forEach(function(r) {
        var i = ed.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function Wt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e, s = t, f = s;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 5:
              ut = f.stateNode, Ht = !1;
              break e;
            case 3:
              ut = f.stateNode.containerInfo, Ht = !0;
              break e;
            case 4:
              ut = f.stateNode.containerInfo, Ht = !0;
              break e;
          }
          f = f.return;
        }
        if (ut === null) throw Error(a(160));
        Pu(l, s, i), ut = null, Ht = !1;
        var h = i.alternate;
        h !== null && (h.return = null), i.return = null;
      } catch (w) {
        Xe(i, t, w);
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
        if (Wt(t, e), Jt(e), r & 4) {
          try {
            Qr(3, e, e.return), Ki(3, e);
          } catch (K) {
            Xe(e, e.return, K);
          }
          try {
            Qr(5, e, e.return);
          } catch (K) {
            Xe(e, e.return, K);
          }
        }
        break;
      case 1:
        Wt(t, e), Jt(e), r & 512 && n !== null && fr(n, n.return);
        break;
      case 5:
        if (Wt(t, e), Jt(e), r & 512 && n !== null && fr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            we(i, "");
          } catch (K) {
            Xe(e, e.return, K);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var l = e.memoizedProps, s = n !== null ? n.memoizedProps : l, f = e.type, h = e.updateQueue;
          if (e.updateQueue = null, h !== null) try {
            f === "input" && l.type === "radio" && l.name != null && he(i, l), Mn(f, s);
            var w = Mn(f, l);
            for (s = 0; s < h.length; s += 2) {
              var _ = h[s], M = h[s + 1];
              _ === "style" ? yt(i, M) : _ === "dangerouslySetInnerHTML" ? Qt(i, M) : _ === "children" ? we(i, M) : I(i, _, M, w);
            }
            switch (f) {
              case "input":
                Se(i, l);
                break;
              case "textarea":
                le(i, l);
                break;
              case "select":
                var j = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var B = l.value;
                B != null ? Qe(i, !!l.multiple, B, !1) : j !== !!l.multiple && (l.defaultValue != null ? Qe(
                  i,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : Qe(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[Ar] = l;
          } catch (K) {
            Xe(e, e.return, K);
          }
        }
        break;
      case 6:
        if (Wt(t, e), Jt(e), r & 4) {
          if (e.stateNode === null) throw Error(a(162));
          i = e.stateNode, l = e.memoizedProps;
          try {
            i.nodeValue = l;
          } catch (K) {
            Xe(e, e.return, K);
          }
        }
        break;
      case 3:
        if (Wt(t, e), Jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          jr(t.containerInfo);
        } catch (K) {
          Xe(e, e.return, K);
        }
        break;
      case 4:
        Wt(t, e), Jt(e);
        break;
      case 13:
        Wt(t, e), Jt(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (Uo = Je())), r & 4 && Ru(e);
        break;
      case 22:
        if (_ = n !== null && n.memoizedState !== null, e.mode & 1 ? (mt = (w = mt) || _, Wt(t, e), mt = w) : Wt(t, e), Jt(e), r & 8192) {
          if (w = e.memoizedState !== null, (e.stateNode.isHidden = w) && !_ && (e.mode & 1) !== 0) for (V = e, _ = e.child; _ !== null; ) {
            for (M = V = _; V !== null; ) {
              switch (j = V, B = j.child, j.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qr(4, j, j.return);
                  break;
                case 1:
                  fr(j, j.return);
                  var H = j.stateNode;
                  if (typeof H.componentWillUnmount == "function") {
                    r = j, n = j.return;
                    try {
                      t = r, H.props = t.memoizedProps, H.state = t.memoizedState, H.componentWillUnmount();
                    } catch (K) {
                      Xe(r, n, K);
                    }
                  }
                  break;
                case 5:
                  fr(j, j.return);
                  break;
                case 22:
                  if (j.memoizedState !== null) {
                    Au(M);
                    continue;
                  }
              }
              B !== null ? (B.return = j, V = B) : Au(M);
            }
            _ = _.sibling;
          }
          e: for (_ = null, M = e; ; ) {
            if (M.tag === 5) {
              if (_ === null) {
                _ = M;
                try {
                  i = M.stateNode, w ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (f = M.stateNode, h = M.memoizedProps.style, s = h != null && h.hasOwnProperty("display") ? h.display : null, f.style.display = lt("display", s));
                } catch (K) {
                  Xe(e, e.return, K);
                }
              }
            } else if (M.tag === 6) {
              if (_ === null) try {
                M.stateNode.nodeValue = w ? "" : M.memoizedProps;
              } catch (K) {
                Xe(e, e.return, K);
              }
            } else if ((M.tag !== 22 && M.tag !== 23 || M.memoizedState === null || M === e) && M.child !== null) {
              M.child.return = M, M = M.child;
              continue;
            }
            if (M === e) break e;
            for (; M.sibling === null; ) {
              if (M.return === null || M.return === e) break e;
              _ === M && (_ = null), M = M.return;
            }
            _ === M && (_ = null), M.sibling.return = M.return, M = M.sibling;
          }
        }
        break;
      case 19:
        Wt(t, e), Jt(e), r & 4 && Ru(e);
        break;
      case 21:
        break;
      default:
        Wt(
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
            if (Tu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (we(i, ""), r.flags &= -33);
            var l = Mu(e);
            $o(e, l, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, f = Mu(e);
            Do(e, f, s);
            break;
          default:
            throw Error(a(161));
        }
      } catch (h) {
        Xe(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Qf(e, t, n) {
    V = e, Fu(e);
  }
  function Fu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null; ) {
      var i = V, l = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || Wi;
        if (!s) {
          var f = i.alternate, h = f !== null && f.memoizedState !== null || mt;
          f = Wi;
          var w = mt;
          if (Wi = s, (mt = h) && !w) for (V = i; V !== null; ) s = V, h = s.child, s.tag === 22 && s.memoizedState !== null ? Iu(i) : h !== null ? (h.return = s, V = h) : Iu(i);
          for (; l !== null; ) V = l, Fu(l), l = l.sibling;
          V = i, Wi = f, mt = w;
        }
        Lu(e);
      } else (i.subtreeFlags & 8772) !== 0 && l !== null ? (l.return = i, V = l) : Lu(e);
    }
  }
  function Lu(e) {
    for (; V !== null; ) {
      var t = V;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              mt || Ki(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !mt) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : Ut(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var l = t.updateQueue;
              l !== null && Aa(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Aa(t, s, n);
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
                var w = t.alternate;
                if (w !== null) {
                  var _ = w.memoizedState;
                  if (_ !== null) {
                    var M = _.dehydrated;
                    M !== null && jr(M);
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
              throw Error(a(163));
          }
          mt || t.flags & 512 && Oo(t);
        } catch (j) {
          Xe(t, t.return, j);
        }
      }
      if (t === e) {
        V = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, V = n;
        break;
      }
      V = t.return;
    }
  }
  function Au(e) {
    for (; V !== null; ) {
      var t = V;
      if (t === e) {
        V = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, V = n;
        break;
      }
      V = t.return;
    }
  }
  function Iu(e) {
    for (; V !== null; ) {
      var t = V;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ki(4, t);
            } catch (h) {
              Xe(t, n, h);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (h) {
                Xe(t, i, h);
              }
            }
            var l = t.return;
            try {
              Oo(t);
            } catch (h) {
              Xe(t, l, h);
            }
            break;
          case 5:
            var s = t.return;
            try {
              Oo(t);
            } catch (h) {
              Xe(t, s, h);
            }
        }
      } catch (h) {
        Xe(t, t.return, h);
      }
      if (t === e) {
        V = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, V = f;
        break;
      }
      V = t.return;
    }
  }
  var Gf = Math.ceil, Qi = q.ReactCurrentDispatcher, Bo = q.ReactCurrentOwner, It = q.ReactCurrentBatchConfig, Ce = 0, st = null, be = null, ct = 0, Mt = 0, dr = vn(0), it = 0, Gr = null, $n = 0, Gi = 0, Vo = 0, Yr = null, Et = null, Uo = 0, hr = 1 / 0, an = null, Yi = !1, Ho = null, Sn = null, Xi = !1, En = null, qi = 0, Xr = 0, Wo = null, Ji = -1, Zi = 0;
  function kt() {
    return (Ce & 6) !== 0 ? Je() : Ji !== -1 ? Ji : Ji = Je();
  }
  function jn(e) {
    return (e.mode & 1) === 0 ? 1 : (Ce & 2) !== 0 && ct !== 0 ? ct & -ct : Pf.transition !== null ? (Zi === 0 && (Zi = Ms()), Zi) : (e = ze, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ds(e.type)), e);
  }
  function Kt(e, t, n, r) {
    if (50 < Xr) throw Xr = 0, Wo = null, Error(a(185));
    kr(e, n, r), ((Ce & 2) === 0 || e !== st) && (e === st && ((Ce & 2) === 0 && (Gi |= n), it === 4 && _n(e, ct)), jt(e, r), n === 1 && Ce === 0 && (t.mode & 1) === 0 && (hr = Je() + 500, Ci && gn()));
  }
  function jt(e, t) {
    var n = e.callbackNode;
    Mc(e, t);
    var r = si(e, e === st ? ct : 0);
    if (r === 0) n !== null && Cs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Cs(n), t === 1) e.tag === 0 ? Mf(Du.bind(null, e)) : Ea(Du.bind(null, e)), _f(function() {
        (Ce & 6) === 0 && gn();
      }), n = null;
      else {
        switch (Ps(r)) {
          case 1:
            n = Sl;
            break;
          case 4:
            n = Ns;
            break;
          case 16:
            n = ri;
            break;
          case 536870912:
            n = Ts;
            break;
          default:
            n = ri;
        }
        n = Qu(n, Ou.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ou(e, t) {
    if (Ji = -1, Zi = 0, (Ce & 6) !== 0) throw Error(a(327));
    var n = e.callbackNode;
    if (pr() && e.callbackNode !== n) return null;
    var r = si(e, e === st ? ct : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = bi(e, r);
    else {
      t = r;
      var i = Ce;
      Ce |= 2;
      var l = Bu();
      (st !== e || ct !== t) && (an = null, hr = Je() + 500, Vn(e, t));
      do
        try {
          qf();
          break;
        } catch (f) {
          $u(e, f);
        }
      while (!0);
      so(), Qi.current = l, Ce = i, be !== null ? t = 0 : (st = null, ct = 0, t = it);
    }
    if (t !== 0) {
      if (t === 2 && (i = El(e), i !== 0 && (r = i, t = Ko(e, i))), t === 1) throw n = Gr, Vn(e, 0), _n(e, r), jt(e, Je()), n;
      if (t === 6) _n(e, r);
      else {
        if (i = e.current.alternate, (r & 30) === 0 && !Yf(i) && (t = bi(e, r), t === 2 && (l = El(e), l !== 0 && (r = l, t = Ko(e, l))), t === 1)) throw n = Gr, Vn(e, 0), _n(e, r), jt(e, Je()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Un(e, Et, an);
            break;
          case 3:
            if (_n(e, r), (r & 130023424) === r && (t = Uo + 500 - Je(), 10 < t)) {
              if (si(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                kt(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = ql(Un.bind(null, e, Et, an), t);
              break;
            }
            Un(e, Et, an);
            break;
          case 4:
            if (_n(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - $t(r);
              l = 1 << s, s = t[s], s > i && (i = s), r &= ~l;
            }
            if (r = i, r = Je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Gf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ql(Un.bind(null, e, Et, an), r);
              break;
            }
            Un(e, Et, an);
            break;
          case 5:
            Un(e, Et, an);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return jt(e, Je()), e.callbackNode === n ? Ou.bind(null, e) : null;
  }
  function Ko(e, t) {
    var n = Yr;
    return e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256), e = bi(e, t), e !== 2 && (t = Et, Et = n, t !== null && Qo(t)), e;
  }
  function Qo(e) {
    Et === null ? Et = e : Et.push.apply(Et, e);
  }
  function Yf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r], l = i.getSnapshot;
          i = i.value;
          try {
            if (!Bt(l(), i)) return !1;
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
    for (t &= ~Vo, t &= ~Gi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - $t(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Du(e) {
    if ((Ce & 6) !== 0) throw Error(a(327));
    pr();
    var t = si(e, 0);
    if ((t & 1) === 0) return jt(e, Je()), null;
    var n = bi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = El(e);
      r !== 0 && (t = r, n = Ko(e, r));
    }
    if (n === 1) throw n = Gr, Vn(e, 0), _n(e, t), jt(e, Je()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Un(e, Et, an), jt(e, Je()), null;
  }
  function Go(e, t) {
    var n = Ce;
    Ce |= 1;
    try {
      return e(t);
    } finally {
      Ce = n, Ce === 0 && (hr = Je() + 500, Ci && gn());
    }
  }
  function Bn(e) {
    En !== null && En.tag === 0 && (Ce & 6) === 0 && pr();
    var t = Ce;
    Ce |= 1;
    var n = It.transition, r = ze;
    try {
      if (It.transition = null, ze = 1, e) return e();
    } finally {
      ze = r, It.transition = n, Ce = t, (Ce & 6) === 0 && gn();
    }
  }
  function Yo() {
    Mt = dr.current, Ue(dr);
  }
  function Vn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, jf(n)), be !== null) for (n = be.return; n !== null; ) {
      var r = n;
      switch (no(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ji();
          break;
        case 3:
          ur(), Ue(wt), Ue(dt), vo();
          break;
        case 5:
          po(r);
          break;
        case 4:
          ur();
          break;
        case 13:
          Ue(Ge);
          break;
        case 19:
          Ue(Ge);
          break;
        case 10:
          ao(r.type._context);
          break;
        case 22:
        case 23:
          Yo();
      }
      n = n.return;
    }
    if (st = e, be = e = Cn(e.current, null), ct = Mt = t, it = 0, Gr = null, Vo = Gi = $n = 0, Et = Yr = null, In !== null) {
      for (t = 0; t < In.length; t++) if (n = In[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, l = n.pending;
        if (l !== null) {
          var s = l.next;
          l.next = i, r.next = s;
        }
        n.pending = r;
      }
      In = null;
    }
    return e;
  }
  function $u(e, t) {
    do {
      var n = be;
      try {
        if (so(), Ii.current = Bi, Oi) {
          for (var r = Ye.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Oi = !1;
        }
        if (Dn = 0, ot = rt = Ye = null, Vr = !1, Ur = 0, Bo.current = null, n === null || n.return === null) {
          it = 1, Gr = t, be = null;
          break;
        }
        e: {
          var l = e, s = n.return, f = n, h = t;
          if (t = ct, f.flags |= 32768, h !== null && typeof h == "object" && typeof h.then == "function") {
            var w = h, _ = f, M = _.tag;
            if ((_.mode & 1) === 0 && (M === 0 || M === 11 || M === 15)) {
              var j = _.alternate;
              j ? (_.updateQueue = j.updateQueue, _.memoizedState = j.memoizedState, _.lanes = j.lanes) : (_.updateQueue = null, _.memoizedState = null);
            }
            var B = cu(s);
            if (B !== null) {
              B.flags &= -257, fu(B, s, f, l, t), B.mode & 1 && uu(l, w, t), t = B, h = w;
              var H = t.updateQueue;
              if (H === null) {
                var K = /* @__PURE__ */ new Set();
                K.add(h), t.updateQueue = K;
              } else H.add(h);
              break e;
            } else {
              if ((t & 1) === 0) {
                uu(l, w, t), Xo();
                break e;
              }
              h = Error(a(426));
            }
          } else if (Ke && f.mode & 1) {
            var Ze = cu(s);
            if (Ze !== null) {
              (Ze.flags & 65536) === 0 && (Ze.flags |= 256), fu(Ze, s, f, l, t), lo(cr(h, f));
              break e;
            }
          }
          l = h = cr(h, f), it !== 4 && (it = 2), Yr === null ? Yr = [l] : Yr.push(l), l = s;
          do {
            switch (l.tag) {
              case 3:
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var g = su(l, h, t);
                La(l, g);
                break e;
              case 1:
                f = h;
                var v = l.type, k = l.stateNode;
                if ((l.flags & 128) === 0 && (typeof v.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Sn === null || !Sn.has(k)))) {
                  l.flags |= 65536, t &= -t, l.lanes |= t;
                  var z = au(l, f, t);
                  La(l, z);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        Uu(n);
      } catch (G) {
        t = G, be === n && n !== null && (be = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Bu() {
    var e = Qi.current;
    return Qi.current = Bi, e === null ? Bi : e;
  }
  function Xo() {
    (it === 0 || it === 3 || it === 2) && (it = 4), st === null || ($n & 268435455) === 0 && (Gi & 268435455) === 0 || _n(st, ct);
  }
  function bi(e, t) {
    var n = Ce;
    Ce |= 2;
    var r = Bu();
    (st !== e || ct !== t) && (an = null, Vn(e, t));
    do
      try {
        Xf();
        break;
      } catch (i) {
        $u(e, i);
      }
    while (!0);
    if (so(), Ce = n, Qi.current = r, be !== null) throw Error(a(261));
    return st = null, ct = 0, it;
  }
  function Xf() {
    for (; be !== null; ) Vu(be);
  }
  function qf() {
    for (; be !== null && !wc(); ) Vu(be);
  }
  function Vu(e) {
    var t = Ku(e.alternate, e, Mt);
    e.memoizedProps = e.pendingProps, t === null ? Uu(e) : be = t, Bo.current = null;
  }
  function Uu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Uf(n, t, Mt), n !== null) {
          be = n;
          return;
        }
      } else {
        if (n = Hf(n, t), n !== null) {
          n.flags &= 32767, be = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          it = 6, be = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    it === 0 && (it = 5);
  }
  function Un(e, t, n) {
    var r = ze, i = It.transition;
    try {
      It.transition = null, ze = 1, Jf(e, t, n, r);
    } finally {
      It.transition = i, ze = r;
    }
    return null;
  }
  function Jf(e, t, n, r) {
    do
      pr();
    while (En !== null);
    if ((Ce & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Pc(e, l), e === st && (be = st = null, ct = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Xi || (Xi = !0, Qu(ri, function() {
      return pr(), null;
    })), l = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || l) {
      l = It.transition, It.transition = null;
      var s = ze;
      ze = 1;
      var f = Ce;
      Ce |= 4, Bo.current = null, Kf(e, n), zu(n, e), yf(Yl), ci = !!Gl, Yl = Gl = null, e.current = n, Qf(n), xc(), Ce = f, ze = s, It.transition = l;
    } else e.current = n;
    if (Xi && (Xi = !1, En = e, qi = i), l = e.pendingLanes, l === 0 && (Sn = null), jc(n.stateNode), jt(e, Je()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Yi) throw Yi = !1, e = Ho, Ho = null, e;
    return (qi & 1) !== 0 && e.tag !== 0 && pr(), l = e.pendingLanes, (l & 1) !== 0 ? e === Wo ? Xr++ : (Xr = 0, Wo = e) : Xr = 0, gn(), null;
  }
  function pr() {
    if (En !== null) {
      var e = Ps(qi), t = It.transition, n = ze;
      try {
        if (It.transition = null, ze = 16 > e ? 16 : e, En === null) var r = !1;
        else {
          if (e = En, En = null, qi = 0, (Ce & 6) !== 0) throw Error(a(331));
          var i = Ce;
          for (Ce |= 4, V = e.current; V !== null; ) {
            var l = V, s = l.child;
            if ((V.flags & 16) !== 0) {
              var f = l.deletions;
              if (f !== null) {
                for (var h = 0; h < f.length; h++) {
                  var w = f[h];
                  for (V = w; V !== null; ) {
                    var _ = V;
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qr(8, _, l);
                    }
                    var M = _.child;
                    if (M !== null) M.return = _, V = M;
                    else for (; V !== null; ) {
                      _ = V;
                      var j = _.sibling, B = _.return;
                      if (Nu(_), _ === w) {
                        V = null;
                        break;
                      }
                      if (j !== null) {
                        j.return = B, V = j;
                        break;
                      }
                      V = B;
                    }
                  }
                }
                var H = l.alternate;
                if (H !== null) {
                  var K = H.child;
                  if (K !== null) {
                    H.child = null;
                    do {
                      var Ze = K.sibling;
                      K.sibling = null, K = Ze;
                    } while (K !== null);
                  }
                }
                V = l;
              }
            }
            if ((l.subtreeFlags & 2064) !== 0 && s !== null) s.return = l, V = s;
            else e: for (; V !== null; ) {
              if (l = V, (l.flags & 2048) !== 0) switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Qr(9, l, l.return);
              }
              var g = l.sibling;
              if (g !== null) {
                g.return = l.return, V = g;
                break e;
              }
              V = l.return;
            }
          }
          var v = e.current;
          for (V = v; V !== null; ) {
            s = V;
            var k = s.child;
            if ((s.subtreeFlags & 2064) !== 0 && k !== null) k.return = s, V = k;
            else e: for (s = v; V !== null; ) {
              if (f = V, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ki(9, f);
                }
              } catch (G) {
                Xe(f, f.return, G);
              }
              if (f === s) {
                V = null;
                break e;
              }
              var z = f.sibling;
              if (z !== null) {
                z.return = f.return, V = z;
                break e;
              }
              V = f.return;
            }
          }
          if (Ce = i, gn(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(ii, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ze = n, It.transition = t;
      }
    }
    return !1;
  }
  function Hu(e, t, n) {
    t = cr(n, t), t = su(e, t, 1), e = wn(e, t, 1), t = kt(), e !== null && (kr(e, 1, t), jt(e, t));
  }
  function Xe(e, t, n) {
    if (e.tag === 3) Hu(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Hu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Sn === null || !Sn.has(r))) {
          e = cr(n, e), e = au(t, e, 1), t = wn(t, e, 1), e = kt(), t !== null && (kr(t, 1, e), jt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Zf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = kt(), e.pingedLanes |= e.suspendedLanes & n, st === e && (ct & n) === n && (it === 4 || it === 3 && (ct & 130023424) === ct && 500 > Je() - Uo ? Vn(e, 0) : Vo |= n), jt(e, t);
  }
  function Wu(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = oi, oi <<= 1, (oi & 130023424) === 0 && (oi = 4194304)));
    var n = kt();
    e = ln(e, t), e !== null && (kr(e, t, n), jt(e, n));
  }
  function bf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Wu(e, n);
  }
  function ed(e, t) {
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
        throw Error(a(314));
    }
    r !== null && r.delete(t), Wu(e, n);
  }
  var Ku;
  Ku = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || wt.current) St = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return St = !1, Vf(e, t, n);
      St = (e.flags & 131072) !== 0;
    }
    else St = !1, Ke && (t.flags & 1048576) !== 0 && ja(t, Ti, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Hi(e, t), e = t.pendingProps;
        var i = nr(t, dt.current);
        ar(t, n), i = ko(null, t, r, e, i, n);
        var l = wo();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xt(r) ? (l = !0, _i(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, fo(t), i.updater = Vi, t.stateNode = i, i._reactInternals = t, Co(t, r, e, n), t = Po(null, t, r, !0, l, n)) : (t.tag = 0, Ke && l && to(t), gt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Hi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = nd(r), e = Ut(r, e), i) {
            case 0:
              t = Mo(null, t, r, e, n);
              break e;
            case 1:
              t = yu(null, t, r, e, n);
              break e;
            case 11:
              t = du(null, t, r, e, n);
              break e;
            case 14:
              t = hu(null, t, r, Ut(r.type, e), n);
              break e;
          }
          throw Error(a(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ut(r, i), Mo(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ut(r, i), yu(e, t, r, i, n);
      case 3:
        e: {
          if (gu(t), e === null) throw Error(a(387));
          r = t.pendingProps, l = t.memoizedState, i = l.element, Fa(e, t), Li(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            i = cr(Error(a(423)), t), t = ku(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = cr(Error(a(424)), t), t = ku(e, t, r, n, i);
            break e;
          } else for (Tt = mn(t.stateNode.containerInfo.firstChild), Nt = t, Ke = !0, Vt = null, n = Ra(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (lr(), r === i) {
              t = sn(e, t, n);
              break e;
            }
            gt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ia(t), e === null && io(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, s = i.children, Xl(r, i) ? s = null : l !== null && Xl(r, l) && (t.flags |= 32), vu(e, t), gt(e, t, s, n), t.child;
      case 6:
        return e === null && io(t), null;
      case 13:
        return wu(e, t, n);
      case 4:
        return ho(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = or(t, null, r, n) : gt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ut(r, i), du(e, t, r, i, n);
      case 7:
        return gt(e, t, t.pendingProps, n), t.child;
      case 8:
        return gt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return gt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, s = i.value, Be(Ri, r._currentValue), r._currentValue = s, l !== null) if (Bt(l.value, s)) {
            if (l.children === i.children && !wt.current) {
              t = sn(e, t, n);
              break e;
            }
          } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
            var f = l.dependencies;
            if (f !== null) {
              s = l.child;
              for (var h = f.firstContext; h !== null; ) {
                if (h.context === r) {
                  if (l.tag === 1) {
                    h = on(-1, n & -n), h.tag = 2;
                    var w = l.updateQueue;
                    if (w !== null) {
                      w = w.shared;
                      var _ = w.pending;
                      _ === null ? h.next = h : (h.next = _.next, _.next = h), w.pending = h;
                    }
                  }
                  l.lanes |= n, h = l.alternate, h !== null && (h.lanes |= n), uo(
                    l.return,
                    n,
                    t
                  ), f.lanes |= n;
                  break;
                }
                h = h.next;
              }
            } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
            else if (l.tag === 18) {
              if (s = l.return, s === null) throw Error(a(341));
              s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), uo(s, n, t), s = l.sibling;
            } else s = l.child;
            if (s !== null) s.return = l;
            else for (s = l; s !== null; ) {
              if (s === t) {
                s = null;
                break;
              }
              if (l = s.sibling, l !== null) {
                l.return = s.return, s = l;
                break;
              }
              s = s.return;
            }
            l = s;
          }
          gt(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, ar(t, n), i = Lt(i), r = r(i), t.flags |= 1, gt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Ut(r, t.pendingProps), i = Ut(r.type, i), hu(e, t, r, i, n);
      case 15:
        return pu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ut(r, i), Hi(e, t), t.tag = 1, xt(r) ? (e = !0, _i(t)) : e = !1, ar(t, n), lu(t, r, i), Co(t, r, i, n), Po(null, t, r, !0, e, n);
      case 19:
        return Su(e, t, n);
      case 22:
        return mu(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Qu(e, t) {
    return _s(e, t);
  }
  function td(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, n, r) {
    return new td(e, t, n, r);
  }
  function qo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function nd(e) {
    if (typeof e == "function") return qo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Le) return 11;
      if (e === Ie) return 14;
    }
    return 2;
  }
  function Cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ot(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function el(e, t, n, r, i, l) {
    var s = 2;
    if (r = e, typeof e == "function") qo(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
      case ye:
        return Hn(n.children, i, l, t);
      case Me:
        s = 8, i |= 8;
        break;
      case Fe:
        return e = Ot(12, n, t, i | 2), e.elementType = Fe, e.lanes = l, e;
      case Pe:
        return e = Ot(13, n, t, i), e.elementType = Pe, e.lanes = l, e;
      case Ae:
        return e = Ot(19, n, t, i), e.elementType = Ae, e.lanes = l, e;
      case J:
        return tl(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case je:
            s = 10;
            break e;
          case $e:
            s = 9;
            break e;
          case Le:
            s = 11;
            break e;
          case Ie:
            s = 14;
            break e;
          case ge:
            s = 16, r = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = Ot(s, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t;
  }
  function Hn(e, t, n, r) {
    return e = Ot(7, e, r, t), e.lanes = n, e;
  }
  function tl(e, t, n, r) {
    return e = Ot(22, e, r, t), e.elementType = J, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Jo(e, t, n) {
    return e = Ot(6, e, null, t), e.lanes = n, e;
  }
  function Zo(e, t, n) {
    return t = Ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function rd(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = jl(0), this.expirationTimes = jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function bo(e, t, n, r, i, l, s, f, h) {
    return e = new rd(e, t, n, f, h), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Ot(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fo(l), e;
  }
  function id(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ee, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Gu(e) {
    if (!e) return yn;
    e = e._reactInternals;
    e: {
      if (Rn(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (xt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (xt(n)) return xa(e, n, t);
    }
    return t;
  }
  function Yu(e, t, n, r, i, l, s, f, h) {
    return e = bo(n, r, !0, e, i, l, s, f, h), e.context = Gu(null), n = e.current, r = kt(), i = jn(n), l = on(r, i), l.callback = t ?? null, wn(n, l, i), e.current.lanes = i, kr(e, i, r), jt(e, r), e;
  }
  function nl(e, t, n, r) {
    var i = t.current, l = kt(), s = jn(i);
    return n = Gu(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(l, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = wn(i, t, s), e !== null && (Kt(e, i, s, l), Fi(e, i, s)), s;
  }
  function rl(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Xu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function es(e, t) {
    Xu(e, t), (e = e.alternate) && Xu(e, t);
  }
  function ld() {
    return null;
  }
  var qu = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ts(e) {
    this._internalRoot = e;
  }
  il.prototype.render = ts.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    nl(e, t, null, null);
  }, il.prototype.unmount = ts.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Bn(function() {
        nl(null, e, null, null);
      }), t[en] = null;
    }
  };
  function il(e) {
    this._internalRoot = e;
  }
  il.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Fs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++) ;
      dn.splice(n, 0, e), n === 0 && Is(e);
    }
  };
  function ns(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ll(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ju() {
  }
  function od(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var l = r;
        r = function() {
          var w = rl(s);
          l.call(w);
        };
      }
      var s = Yu(t, r, e, 0, null, !1, !1, "", Ju);
      return e._reactRootContainer = s, e[en] = s.current, Fr(e.nodeType === 8 ? e.parentNode : e), Bn(), s;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var w = rl(h);
        f.call(w);
      };
    }
    var h = bo(e, 0, !1, null, null, !1, !1, "", Ju);
    return e._reactRootContainer = h, e[en] = h.current, Fr(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
      nl(t, h, n, r);
    }), h;
  }
  function ol(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
      var s = l;
      if (typeof i == "function") {
        var f = i;
        i = function() {
          var h = rl(s);
          f.call(h);
        };
      }
      nl(t, s, e, i);
    } else s = od(n, t, e, i, r);
    return rl(s);
  }
  Rs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = gr(t.pendingLanes);
          n !== 0 && (_l(t, n | 1), jt(t, Je()), (Ce & 6) === 0 && (hr = Je() + 500, gn()));
        }
        break;
      case 13:
        Bn(function() {
          var r = ln(e, 1);
          if (r !== null) {
            var i = kt();
            Kt(r, e, 1, i);
          }
        }), es(e, 1);
    }
  }, Cl = function(e) {
    if (e.tag === 13) {
      var t = ln(e, 134217728);
      if (t !== null) {
        var n = kt();
        Kt(t, e, 134217728, n);
      }
      es(e, 134217728);
    }
  }, zs = function(e) {
    if (e.tag === 13) {
      var t = jn(e), n = ln(e, t);
      if (n !== null) {
        var r = kt();
        Kt(n, e, t, r);
      }
      es(e, t);
    }
  }, Fs = function() {
    return ze;
  }, Ls = function(e, t) {
    var n = ze;
    try {
      return ze = e, t();
    } finally {
      ze = n;
    }
  }, gl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Se(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Ei(r);
              if (!i) throw Error(a(90));
              Z(r), Se(r, i);
            }
          }
        }
        break;
      case "textarea":
        le(e, n);
        break;
      case "select":
        t = n.value, t != null && Qe(e, !!n.multiple, t, !1);
    }
  }, gs = Go, ks = Bn;
  var sd = { usingClientEntryPoint: !1, Events: [Ir, er, Ei, vs, ys, Go] }, qr = { findFiberByHostInstance: zn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ad = { bundleType: qr.bundleType, version: qr.version, rendererPackageName: qr.rendererPackageName, rendererConfig: qr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: q.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Es(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: qr.findFiberByHostInstance || ld, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sl.isDisabled && sl.supportsFiber) try {
      ii = sl.inject(ad), Gt = sl;
    } catch {
    }
  }
  return _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sd, _t.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ns(t)) throw Error(a(200));
    return id(e, t, null, n);
  }, _t.createRoot = function(e, t) {
    if (!ns(e)) throw Error(a(299));
    var n = !1, r = "", i = qu;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = bo(e, 1, !1, null, null, n, !1, r, i), e[en] = t.current, Fr(e.nodeType === 8 ? e.parentNode : e), new ts(t);
  }, _t.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = Es(t), e = e === null ? null : e.stateNode, e;
  }, _t.flushSync = function(e) {
    return Bn(e);
  }, _t.hydrate = function(e, t, n) {
    if (!ll(t)) throw Error(a(200));
    return ol(null, e, t, !0, n);
  }, _t.hydrateRoot = function(e, t, n) {
    if (!ns(e)) throw Error(a(405));
    var r = n != null && n.hydratedSources || null, i = !1, l = "", s = qu;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Yu(t, null, e, 1, n ?? null, i, !1, l, s), e[en] = t.current, Fr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new il(t);
  }, _t.render = function(e, t, n) {
    if (!ll(t)) throw Error(a(200));
    return ol(null, e, t, !1, n);
  }, _t.unmountComponentAtNode = function(e) {
    if (!ll(e)) throw Error(a(40));
    return e._reactRootContainer ? (Bn(function() {
      ol(null, null, e, !1, function() {
        e._reactRootContainer = null, e[en] = null;
      });
    }), !0) : !1;
  }, _t.unstable_batchedUpdates = Go, _t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ll(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return ol(e, t, n, !1, r);
  }, _t.version = "18.3.1-next-f1338f8080-20240426", _t;
}
var lc;
function yd() {
  if (lc) return ls.exports;
  lc = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (u) {
        console.error(u);
      }
  }
  return o(), ls.exports = vd(), ls.exports;
}
var oc;
function gd() {
  if (oc) return al;
  oc = 1;
  var o = yd();
  return al.createRoot = o.createRoot, al.hydrateRoot = o.hydrateRoot, al;
}
var kd = gd();
const wd = (() => {
  const o = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], u = "CDEFGAB", a = [0, 2, 4, 5, 7, 9, 11], d = [64, 59, 55, 50, 45, 40], m = d.at(-1), c = { pentatonic: 15, "3nps": 17 }, x = 7, N = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], T = ["e", "B", "G", "D", "A", "E"], ne = ["ohut e", "B", "G", "D", "A", "paksu E"], $ = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], A = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], Y = {
    mp: {
      name: "mollipentatoninen",
      base: $,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: $,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: $,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: $,
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
      base: A,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: A,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: A,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: A,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, re = 26, ae = 72, X = 30, D = 54, U = 34, ue = 11, I = (re + ae) / 2, q = X + (d.length - 1) * U + 30, b = (P) => ae + P * D, ee = (P) => P === 0 ? I : b(P) - D / 2, ye = (P) => X + P * U;
  function Me(P, L, R) {
    const W = u.indexOf(o[P][0]) + Number(R.slice(-1)) - 1, de = W % u.length, Z = a[de] + 12 * Math.floor(W / u.length), te = P + L - Z;
    return u[de] + (te < 0 ? "♭" : "♯").repeat(Math.abs(te));
  }
  function Fe(P) {
    return [...P.base, ...P.add].sort((L, R) => L[0] - R[0]);
  }
  function je(P, L, R) {
    const W = L + (R ? 1 : 0), de = N[W % N.length], Z = Math.min(...de.map(([Se]) => Se)), te = Math.max(...de.map(([, Se]) => Se));
    let he = (P - m % 12 + 12) % 12 - (R ? 8 : 5) + 12 * Math.floor(W / N.length);
    return Z + he < 0 && (he += 12), te + he > c.pentatonic && (he -= 12), {
      strings: de.map((Se) => Se.map((He) => He + he)),
      start: Z + he,
      end: te + he
    };
  }
  function $e(P, L, R) {
    const W = R[L], de = (P + W - m % 12 + 12) % 12, Z = m + de - W, te = d.map((ie, _e) => {
      const he = L + (d.length - 1 - _e) * 3;
      return [he, he + 1, he + 2].map((Se) => {
        const He = Math.floor(Se / R.length), Ne = R[Se % R.length];
        return Z + Ne + 12 * He - ie;
      });
    });
    return {
      strings: te,
      start: Math.min(...te.map((ie) => ie[0])),
      end: Math.max(...te.map((ie) => ie.at(-1)))
    };
  }
  function Le(P, L) {
    const R = [], W = Math.ceil(-P.end / 12) * 12;
    for (let Z = W; P.start + Z <= L; Z += 12) {
      const te = P.strings.map((_e) => _e.map((he) => he + Z).filter((he) => he >= 0 && he <= L)), ie = te.flat();
      R.push({
        strings: te,
        start: Math.min(...ie),
        end: Math.max(...ie),
        partial: P.start + Z < 0 || P.end + Z > L
      });
    }
    const de = R.filter((Z) => !Z.partial);
    return de.length ? de : R;
  }
  function Pe(P) {
    return Fe(P).length === x;
  }
  function Ae(P, L, R) {
    const W = Pe(L);
    P.querySelector('[value="3nps"]').disabled = !W, P.value = W ? R ?? "3nps" : "pentatonic";
  }
  function Ie(P, L, R, W, de) {
    const Z = Fe(L).map(([te]) => te);
    return W.map((te) => {
      const ie = te - 1, _e = R === "3nps" ? $e(P, ie, Z) : je(P, ie, L.base === A), he = de === void 0 ? [_e] : Le(_e, de);
      return { number: te, positions: he };
    });
  }
  function ge(P, L) {
    const R = P.getBoundingClientRect(), W = P.querySelectorAll(L);
    let de = 1 / 0;
    W.forEach((Z) => {
      const te = Z.getBoundingClientRect();
      let ie = 0;
      te.left < R.left ? ie = te.left - R.left - 8 : te.right > R.right && (ie = te.right - R.right + 8), Math.abs(ie) < Math.abs(de) && (de = ie);
    }), Number.isFinite(de) && (P.scrollLeft += de);
  }
  function J(P, L = !1) {
    const R = P === "3nps" ? x : N.length;
    return Array.from({ length: R }, (W, de) => {
      const Z = de + 1;
      return '<label class="box-toggle" data-box="' + Z + '"><input type="checkbox" value="' + Z + '"' + (L && de === 0 ? " checked" : "") + "> Boksi " + Z + "</label>";
    }).join("");
  }
  function C(P, L) {
    const R = Fe(L), W = new Map(R.map(([Z, te]) => [Z, Me(P, Z, te)])), de = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return R.flatMap(([Z, te]) => de.flatMap(({ suffix: ie, base: _e }) => {
      const he = _e.map(([Se]) => W.get((Z + Se) % 12));
      return he.every(Boolean) ? {
        root: (P + Z) % 12,
        degree: Number(String(te).replace(/\D/g, "")),
        name: he[0] + ie,
        notes: he,
        base: _e,
        add: []
      } : [];
    }));
  }
  function Q(P, L) {
    const R = P.base.map(([Z]) => (P.root + Z) % 12), W = d.map((Z) => {
      const te = [];
      for (let ie = 0; ie <= L; ie++) {
        const _e = (Z + ie) % 12;
        R.includes(_e) && te.push({ fret: ie, pitch: _e });
      }
      return te;
    }), de = [];
    for (let Z = 0; Z <= W.length - 3; Z++)
      for (const te of W[Z])
        for (const ie of W[Z + 1])
          if (te.pitch !== ie.pitch)
            for (const _e of W[Z + 2]) {
              if (_e.pitch === te.pitch || _e.pitch === ie.pitch) continue;
              const he = [te.fret, ie.fret, _e.fret], Se = Math.min(...he), He = Math.max(...he);
              if (He - Se > 3) continue;
              const Ne = Array(d.length).fill(null);
              Ne.splice(Z, 3, ...he), de.push({ strings: Ne, low: Se, high: He });
            }
    return de.sort((Z, te) => Z.high - te.high || Z.low - te.low);
  }
  const O = {
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
  function E(P, L) {
    const R = O[P + ":" + L];
    if (R) return { frets: R, barre: null };
    let W = null;
    return y.forEach(({ string: de, openPC: Z, shapes: te }) => {
      const ie = te[L];
      if (!ie) return;
      let _e = (P - Z + 12) % 12;
      if (_e + Math.min(...ie.filter((He) => He !== null)) < 0 && (_e += 12), W && W.fret <= _e) return;
      const he = ie.map((He) => He === null ? null : _e + He), Se = _e > 0 && ie.at(-1) === 0 ? { fret: _e, from: de, to: ie.length - 1 } : null;
      W = { fret: _e, frets: he, barre: Se };
    }), W && { frets: W.frets, barre: W.barre };
  }
  function ce(P, { frets: L, barre: R }, W) {
    const he = [...d].reverse(), Se = L.filter((le) => le > 0), Ne = !Se.length || Math.max(...Se) <= 4 && (L.includes(0) || Math.min(...Se) === 1) ? 1 : Math.min(...Se), We = (le) => 24 + le * 14, Qe = (le) => 30 + (le - Ne) * 18 + 18 / 2, S = 102;
    let F = '<svg class="chord-svg" viewBox="0 0 108 ' + (S + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + W + "-ote paksusta kielestä ohueen: " + L.map((le) => le ?? "x").join(" ") + '">';
    for (let le = 0; le <= 4; le++)
      F += '<line class="' + (le === 0 && Ne === 1 ? "nut" : "fret") + '" x1="' + We(0) + '" y1="' + (30 + le * 18) + '" x2="' + We(5) + '" y2="' + (30 + le * 18) + '"/>';
    return L.forEach((le, xe) => {
      F += '<line class="string" x1="' + We(xe) + '" y1="30" x2="' + We(xe) + '" y2="' + S + '"/>';
    }), Ne > 1 && (F += '<text class="fret-label" x="15" y="' + (Qe(Ne) + 4) + '">' + Ne + "</text>"), R && (F += '<rect class="barre" x="' + (We(R.from) - 6.5) + '" y="' + (Qe(R.fret) - 6.5) + '" width="' + ((R.to - R.from) * 14 + 13) + '" height="13" rx="6.5"/>'), L.forEach((le, xe) => {
      if (le === null) {
        F += '<text class="marker" x="' + We(xe) + '" y="22">×</text>';
        return;
      }
      const Oe = (he[xe] + le) % 12 === P;
      if (le === 0) {
        F += '<circle class="open' + (Oe ? " root-open" : "") + '" cx="' + We(xe) + '" cy="18" r="4.5"/>';
        return;
      }
      R && le === R.fret && xe >= R.from && xe <= R.to && !Oe || (F += '<circle class="' + (Oe ? "root" : "tone") + '" cx="' + We(xe) + '" cy="' + Qe(le) + '" r="6.5"/>');
    }), F + "</svg>";
  }
  function fe(P, L) {
    const R = new URLSearchParams(location.search), W = o.indexOf(R.get("toonikka")), de = R.get("asteikko");
    return {
      rootPC: W === -1 ? P : W,
      scaleId: Object.hasOwn(Y, de) ? de : L
    };
  }
  function me(P, L, R) {
    return P + "?" + new URLSearchParams({ toonikka: o[L], asteikko: R });
  }
  function ve(P, L, R, {
    boxes: W = [],
    onlyBoxNotes: de = !1,
    automatic: Z = !0,
    focusDegree: te = "",
    grip: ie = null,
    label: _e = o[P] + " " + L.name
  } = {}) {
    const he = b(R), Se = he + 48, He = Se + 28, Ne = X - 14, We = ye(d.length - 1) + 14, Qe = We - Ne, S = Z ? 680 : Math.ceil(He * 0.64), F = W.flatMap((we) => we.positions), le = {};
    L.base.forEach(([we, Re]) => le[(P + we) % 12] = { deg: Re, added: !1 }), L.add.forEach(([we, Re]) => le[(P + we) % 12] = { deg: Re, added: !0 });
    const xe = d.map((we, Re) => !!ie && ie[Re] === null), Oe = ne.filter((we, Re) => xe[Re]).reverse(), tt = _e + ". " + R + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Oe.length ? " Soittamatta jäävät kielet: " + Oe.join(", ") + "." : "");
    let ke = '<svg viewBox="0 0 ' + He + " " + q + '" style="min-width:' + S + 'px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + tt + '">';
    ke += '<rect x="' + re + '" y="' + Ne + '" width="' + (ae - re) + '" height="' + Qe + '" rx="6" fill="#2a2338"/>', ke += '<rect x="' + ae + '" y="' + Ne + '" width="' + (he - ae) + '" height="' + Qe + '" fill="#231a12"/>', ke += '<rect x="' + he + '" y="' + Ne + '" width="' + (He - he - 4) + '" height="' + Qe + '" rx="8" fill="#32251e"/>';
    for (let we = 1; we <= R; we++)
      ke += '<line x1="' + b(we) + '" y1="' + Ne + '" x2="' + b(we) + '" y2="' + We + '" stroke="#6f5b47" stroke-width="2"/>';
    ke += '<rect x="' + (ae - 3) + '" y="' + Ne + '" width="6" height="' + Qe + '" rx="2" fill="#d8cbb6"/>', ke += '<rect x="' + (Se - 11) + '" y="' + (Ne + 3) + '" width="22" height="' + (Qe - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', ke += '<rect x="' + (Se - 4) + '" y="' + (Ne + 7) + '" width="3" height="' + (Qe - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Qt = (Ne + We) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((we) => we <= R).forEach((we) => ke += '<circle cx="' + ee(we) + '" cy="' + Qt + '" r="5.5" fill="#7a6550"/>');
    for (let we = 12; we <= R; we += 12)
      ke += '<circle cx="' + ee(we) + '" cy="' + (Qt - U) + '" r="5.5" fill="#7a6550"/>', ke += '<circle cx="' + ee(we) + '" cy="' + (Qt + U) + '" r="5.5" fill="#7a6550"/>';
    ke += '<text x="' + I + '" y="' + (q - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', ke += '<text x="' + ae + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', ke += '<text x="' + Se + '" y="' + (q - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let we = 1; we <= R; we++)
      ke += '<text x="' + ee(we) + '" y="' + (q - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + we + "</text>";
    return W.forEach(({ number: we, positions: Re }) => {
      Re.forEach((nt) => {
        const lt = nt.partial ? "box-highlight box-partial" : "box-highlight";
        ke += '<g class="' + lt + '" data-box="' + we + '" aria-hidden="true">';
        const yt = nt.strings.find((Rt) => Rt.length), Dt = (ee(yt[0]) + ee(yt.at(-1))) / 2;
        ke += '<text class="box-number" x="' + Dt + '" y="12">' + we + "</text>", nt.strings.forEach((Rt, Mn) => {
          if (!Rt.length) return;
          const Pn = ee(Rt[0]) - 16, bt = ee(Rt.at(-1)) - ee(Rt[0]) + 32;
          ke += '<rect class="box-band" x="' + Pn + '" y="' + (ye(Mn) - 14) + '" width="' + bt + '" height="28" rx="14"/>';
        }), ke += "</g>";
      });
    }), d.forEach((we, Re) => {
      const nt = 1 + Re * 0.45, lt = ye(Re);
      xe[Re] ? ke += '<text class="muted-mark" x="' + I + '" y="' + (lt + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : ke += '<line x1="' + (re + 4) + '" y1="' + lt + '" x2="' + (ae - 4) + '" y2="' + lt + '" stroke="#8b809d" stroke-dasharray="3 3"/>', ke += "<g" + (xe[Re] ? ' opacity=".35"' : "") + ">", ke += '<line x1="' + ae + '" y1="' + lt + '" x2="' + (Se + 5) + '" y2="' + lt + '" stroke="#b9b9c4" stroke-width="' + nt.toFixed(2) + '"/>', ke += '<circle cx="' + (Se + 5) + '" cy="' + lt + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', ke += "</g>", ke += '<text x="13" y="' + (lt + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + T[Re] + "</text>";
    }), ie && (ke += '<g class="grip-notes">'), d.forEach((we, Re) => {
      for (let nt = 0; nt <= R; nt++) {
        const lt = (we + nt) % 12;
        if (!(lt in le) || ie && ie[Re] !== nt || de && !F.some(({ strings: Pn }) => {
          const bt = Pn[Re];
          return bt.length > 0 && nt >= bt[0] && nt <= bt.at(-1);
        })) continue;
        const yt = le[lt], Dt = yt.deg === "1", Rt = yt.added ? "#f0a13c" : Dt ? "#4b2fd6" : "#6d4aff", Mn = yt.added ? "#1a1430" : "#fff";
        yt.deg === te && (ke += '<circle class="focus-note" cx="' + ee(nt) + '" cy="' + ye(Re) + '" r="14.5"/>'), ke += '<circle cx="' + ee(nt) + '" cy="' + ye(Re) + '" r="' + ue + '" fill="' + Rt + '" stroke="' + (Dt ? "#fff" : "#1a1430") + '" stroke-width="' + (Dt ? 2.5 : 1) + '"/>', ke += '<text x="' + ee(nt) + '" y="' + (ye(Re) + 3.5) + '" font-size="' + (yt.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Mn + '" text-anchor="middle">' + yt.deg + "</text>";
      }
    }), ie && (ke += "</g>"), ke += "</svg>", ke;
  }
  return {
    CHROM: o,
    OPEN_PITCHES: d,
    PENT_MAJ: A,
    SCALES: Y,
    noteName: Me,
    scaleNotes: Fe,
    scaleTriads: C,
    triadGrips: Q,
    chordGrip: E,
    renderChordDiagram: ce,
    selectionFromURL: fe,
    selectionHref: me,
    renderBoard: ve,
    BOX_FRETS: c,
    supportsThreeNoteBoxes: Pe,
    syncBoxSystem: Ae,
    fingeringBoxes: Ie,
    boxOptions: J,
    revealPositions: ge
  };
})();
globalThis.MusicMapFretboard = wd;
function xd(o) {
  return 440 * Math.pow(2, (o - 69) / 12);
}
function Sd(o) {
  return 69 + 12 * Math.log2(o / 440);
}
function Ed(o) {
  const u = Sd(o), a = Math.round(u), d = (u - a) * 100;
  return { midi: a, cents: d };
}
const et = globalThis.MusicMapFretboard, Pt = (o) => (o % 12 + 12) % 12, jd = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], _d = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], ft = (o, u = !1, a = !1) => (u ? _d : jd)[Pt(o)] + (a ? Math.floor(o / 12) - 1 : ""), cs = ["ohut E", "B", "G", "D", "A", "paksu E"];
function hc(o, u, a) {
  return o.flatMap((d) => Array.from({ length: a - u + 1 }, (m, c) => ({ string: d, fret: u + c, midi: et.OPEN_PITCHES[d] + u + c })));
}
const vt = (o) => `${o.string}:${o.fret}`, Wn = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, dl = [
  "",
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
], Cd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Nd(o, u) {
  const a = Cd[u], d = Pt(o - a.root);
  return [d, d + 12].flatMap((m) => a.frets.flatMap((c, x) => c === null || c + m > 24 ? [] : [{ string: x, fret: c + m, midi: et.OPEN_PITCHES[x] + c + m }]));
}
const cl = {
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
  hints: "fade",
  activity: "play",
  minRms: 0.01,
  clarity: 0.94,
  stability: 240,
  cents: 35,
  device: ""
}, Tn = (o, u, a, d) => typeof o == "number" && Number.isFinite(o) ? Math.max(u, Math.min(a, o)) : d, Zt = (o, u, a) => u.includes(o) ? o : a;
function ps(o) {
  const u = { ...cl };
  u.mode = Zt(o.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], u.mode), u.strings = Array.isArray(o.strings) ? [...new Set(o.strings.filter((a) => Number.isInteger(a) && a >= 0 && a <= 5))] : u.strings, u.strings.length || (u.strings = [...cl.strings]), u.min = Math.round(Tn(o.min, 0, 24, u.min)), u.max = Math.round(Tn(o.max, u.min, 24, Math.max(u.min, u.max)));
  for (const a of ["accidentals", "flats", "weak"]) typeof o[a] == "boolean" && (u[a] = o[a]);
  return u.check = Zt(o.check, ["class", "pitch"], u.check), u.input = Zt(o.input, ["mic", "board"], u.input), u.rounds = [0, 10, 20].includes(o.rounds) ? o.rounds : u.rounds, u.root = Math.round(Tn(o.root, 0, 11, u.root)), u.scale = typeof o.scale == "string" && Object.hasOwn(et.SCALES, o.scale) ? o.scale : u.scale, u.box = Math.round(Tn(o.box, 0, 5, u.box)), u.order = Zt(o.order, ["random", "up", "down"], u.order), u.chord = Zt(o.chord, ["maj", "min", "dom7"], u.chord), u.chordTone = Zt(o.chordTone, ["build", "random", "1", "3", "5", "7"], u.chordTone), u.chord !== "dom7" && u.chordTone === "7" && (u.chordTone = "build"), u.shape = Zt(o.shape, ["C", "A", "G", "E", "D"], u.shape), u.intervals = Array.isArray(o.intervals) ? [...new Set(o.intervals.filter((a) => Number.isInteger(a) && a >= 1 && a <= 12))] : u.intervals, u.intervals.length || (u.intervals = [...cl.intervals]), u.direction = Zt(o.direction, ["up", "down", "both"], u.direction), u.hints = Zt(o.hints, ["always", "fade", "off"], u.hints), u.activity = Zt(o.activity, ["play", "degree"], u.activity), u.minRms = Tn(o.minRms, 1e-3, 0.15, u.minRms), u.clarity = Tn(o.clarity, 0.85, 0.99, u.clarity), u.stability = Tn(o.stability, 120, 800, u.stability), u.cents = Tn(o.cents, 10, 45, u.cents), u.device = typeof o.device == "string" ? o.device.slice(0, 256) : "", u;
}
function Td(o, u) {
  const a = new URLSearchParams(o), d = { ...u };
  for (const [m, c] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    a.has(m) && Object.assign(d, { [c]: a.get(m) });
  for (const [m, c] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    a.has(m) && (d[c] = Number(a.get(m)));
  a.has("kielet") && (d.strings = a.get("kielet").split(",").map((m) => Number(m) - 1)), a.has("intervallit") && (d.intervals = a.get("intervallit").split(",").map(Number));
  for (const [m, c] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"]])
    a.has(m) && (d[c] = a.get(m) === "1");
  if (a.has("toonikka")) {
    const m = a.get("toonikka").replace("#", "♯").replace("b", "♭"), c = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], x = Math.max(et.CHROM.indexOf(m), c.indexOf(m), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(m));
    x >= 0 && (d.root = x);
  }
  return ps(d);
}
function Md(o) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: o.mode,
    toonikka: et.CHROM[o.root],
    asteikko: o.scale,
    alku: String(o.min),
    loppu: String(o.max),
    boksi: String(o.box),
    kierros: String(o.rounds),
    tarkistus: o.check,
    muoto: o.shape,
    sointu: o.chord,
    jarjestys: o.order,
    vastaus: o.input,
    vihjeet: o.hints,
    tehtava: o.activity,
    sointuaste: o.chordTone,
    suunta: o.direction,
    kielet: o.strings.map((u) => u + 1).join(","),
    intervallit: o.intervals.join(","),
    kromaattinen: o.accidentals ? "1" : "0",
    alennukset: o.flats ? "1" : "0",
    kertaus: o.weak ? "1" : "0"
  });
}
const hl = (o) => o.mode === "ear-note" ? "note" : ["scale", "chord"].includes(o.mode) && o.activity === "degree" ? "degree" : o.input, pl = (o) => ["note", "degree"].includes(hl(o)) ? "class" : o.check, fs = [
  ["notes", "Otelaudan sävelet", "Löydä sävel valitulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele yksi sävel ja valitse sen nimi. Tämä harjoittaa sävelmuistia ilman sävellajiviitettä."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitaralla."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu yksi sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi saman duurisoinnun säveliä viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja toista niistä jälkimmäinen."]
];
function qe({ label: o, children: u }) {
  const a = De.useId();
  return /* @__PURE__ */ p.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: a, children: o }),
    De.cloneElement(u, { id: a })
  ] });
}
function Pd({ s: o, change: u, locked: a, devices: d }) {
  const m = (c, x) => u(ps({ ...o, [c]: x }));
  return /* @__PURE__ */ p.jsxs("fieldset", { className: "settings", disabled: a, children: [
    /* @__PURE__ */ p.jsx("legend", { children: "Harjoituksen asetukset" }),
    /* @__PURE__ */ p.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ p.jsx(qe, { label: "Harjoitus", children: /* @__PURE__ */ p.jsx("select", { value: o.mode, onChange: (c) => m("mode", c.target.value), children: fs.map(([c, x]) => /* @__PURE__ */ p.jsx("option", { value: c, children: x }, c)) }) }),
      /* @__PURE__ */ p.jsx(qe, { label: "Vastaustapa", children: /* @__PURE__ */ p.jsxs("select", { value: o.input, onChange: (c) => m("input", c.target.value), children: [
        /* @__PURE__ */ p.jsx("option", { value: "board", children: "Valitse otelaudalta" }),
        /* @__PURE__ */ p.jsx("option", { value: "mic", children: "Soita mikrofoniin / äänikorttiin" })
      ] }) }),
      /* @__PURE__ */ p.jsx(qe, { label: "Kierroksen pituus", children: /* @__PURE__ */ p.jsxs("select", { value: o.rounds, onChange: (c) => m("rounds", Number(c.target.value)), children: [
        /* @__PURE__ */ p.jsx("option", { value: "10", children: "10 kysymystä" }),
        /* @__PURE__ */ p.jsx("option", { value: "20", children: "20 kysymystä" }),
        /* @__PURE__ */ p.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
      ] }) }),
      /* @__PURE__ */ p.jsx(qe, { label: "Vastausten tarkistus", children: /* @__PURE__ */ p.jsxs("select", { value: o.check, onChange: (c) => m("check", c.target.value), children: [
        /* @__PURE__ */ p.jsx("option", { value: "class", children: "Sävelluokka · mikä tahansa oktaavi" }),
        /* @__PURE__ */ p.jsx("option", { value: "pitch", children: "Sävelkorkeus · tarkka oktaavi" })
      ] }) })
    ] }),
    o.mode === "ear-note" && /* @__PURE__ */ p.jsx("p", { className: "tools-note", children: "Tässä tehtävässä vastaat aina sävelnimipainikkeilla. Mikrofoni ei käynnisty." }),
    ["scale", "chord", "caged"].includes(o.mode) && /* @__PURE__ */ p.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ p.jsx(qe, { label: "Toonika / soinnun perussävel", children: /* @__PURE__ */ p.jsx("select", { value: o.root, onChange: (c) => m("root", Number(c.target.value)), children: et.CHROM.map((c, x) => /* @__PURE__ */ p.jsx("option", { value: x, children: c }, c)) }) }),
      o.mode === "scale" && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(qe, { label: "Asteikko", children: /* @__PURE__ */ p.jsx("select", { value: o.scale, onChange: (c) => m("scale", c.target.value), children: Object.entries(et.SCALES).map(([c, x]) => /* @__PURE__ */ p.jsx("option", { value: c, children: x.name }, c)) }) }),
        /* @__PURE__ */ p.jsx(qe, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ p.jsxs("select", { value: o.box, onChange: (c) => m("box", Number(c.target.value)), children: [
          /* @__PURE__ */ p.jsx("option", { value: "0", children: "Koko valittu alue" }),
          [1, 2, 3, 4, 5].map((c) => /* @__PURE__ */ p.jsxs("option", { value: c, children: [
            "Boksi ",
            c
          ] }, c))
        ] }) }),
        /* @__PURE__ */ p.jsx(qe, { label: "Sävelten järjestys", children: /* @__PURE__ */ p.jsxs("select", { value: o.order, onChange: (c) => m("order", c.target.value), children: [
          /* @__PURE__ */ p.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ p.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ p.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      o.mode === "chord" && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(qe, { label: "Sointutyyppi", children: /* @__PURE__ */ p.jsx("select", { value: o.chord, onChange: (c) => m("chord", c.target.value), children: Object.entries(Wn).map(([c, x]) => /* @__PURE__ */ p.jsx("option", { value: c, children: x.name }, c)) }) }),
        /* @__PURE__ */ p.jsx(qe, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ p.jsxs("select", { value: o.chordTone, onChange: (c) => m("chordTone", c.target.value), children: [
          /* @__PURE__ */ p.jsx("option", { value: "build", children: "Rakenna: 1 → 3 → 5 → (♭7)" }),
          /* @__PURE__ */ p.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ p.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ p.jsx("option", { value: "3", children: "Terssi · 3 / ♭3" }),
          /* @__PURE__ */ p.jsx("option", { value: "5", children: "Kvintti · 5" }),
          o.chord === "dom7" && /* @__PURE__ */ p.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      o.mode === "caged" ? /* @__PURE__ */ p.jsx(qe, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ p.jsx("select", { value: o.shape, onChange: (c) => m("shape", c.target.value), children: ["C", "A", "G", "E", "D"].map((c) => /* @__PURE__ */ p.jsx("option", { children: c }, c)) }) }) : /* @__PURE__ */ p.jsx(qe, { label: "Tehtävä", children: /* @__PURE__ */ p.jsxs("select", { value: o.activity, onChange: (c) => m("activity", c.target.value), children: [
        /* @__PURE__ */ p.jsx("option", { value: "play", children: "Etsi ja soita aste" }),
        /* @__PURE__ */ p.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    /* @__PURE__ */ p.jsxs("details", { children: [
      /* @__PURE__ */ p.jsx("summary", { children: "Alue, vihjeet ja kertaus" }),
      /* @__PURE__ */ p.jsxs("fieldset", { children: [
        /* @__PURE__ */ p.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ p.jsx("div", { className: "check-row", children: cs.map((c, x) => /* @__PURE__ */ p.jsxs("label", { children: [
          /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: o.strings.includes(x), onChange: (N) => m("strings", N.target.checked ? [...o.strings, x] : o.strings.filter((T) => T !== x)) }),
          x + 1,
          " · ",
          c
        ] }, c)) })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "check-row", children: [5, 12, 24].map((c) => /* @__PURE__ */ p.jsxs("button", { type: "button", "aria-pressed": o.min === 0 && o.max === c, onClick: () => u({ ...o, min: 0, max: c }), children: [
        "0–",
        c,
        c === 24 ? " · koko otelauta" : ""
      ] }, c)) }),
      /* @__PURE__ */ p.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ p.jsx(qe, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ p.jsx("input", { type: "number", min: "0", max: "24", value: o.min, onChange: (c) => m("min", Number(c.target.value)) }) }),
        /* @__PURE__ */ p.jsx(qe, { label: "Viimeinen nauha", children: /* @__PURE__ */ p.jsx("input", { type: "number", min: o.min, max: "24", value: o.max, onChange: (c) => m("max", Number(c.target.value)) }) }),
        /* @__PURE__ */ p.jsx(qe, { label: "Otelaudan vihjeet", children: /* @__PURE__ */ p.jsxs("select", { value: o.hints, onChange: (c) => m("hints", c.target.value), children: [
          /* @__PURE__ */ p.jsx("option", { value: "always", children: "Näytä aina" }),
          /* @__PURE__ */ p.jsx("option", { value: "fade", children: "Vähennä: 3 avustettua, 3 ilman nimiä, sitten piiloon" }),
          /* @__PURE__ */ p.jsx("option", { value: "off", children: "Piilota · avaa tarvittaessa" })
        ] }) }),
        /* @__PURE__ */ p.jsx(qe, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ p.jsxs("select", { value: String(o.flats), onChange: (c) => m("flats", c.target.value === "true"), children: [
          /* @__PURE__ */ p.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ p.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "check-row", children: [
        /* @__PURE__ */ p.jsxs("label", { children: [
          /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: o.accidentals, onChange: (c) => m("accidentals", c.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet sävelharjoituksissa"
        ] }),
        /* @__PURE__ */ p.jsxs("label", { children: [
          /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: o.weak, onChange: (c) => m("weak", c.target.checked) }),
          " Painota vähän harjoiteltuja ja heikkoja kohteita"
        ] })
      ] })
    ] }),
    o.mode === "interval" && /* @__PURE__ */ p.jsxs("details", { open: !0, children: [
      /* @__PURE__ */ p.jsx("summary", { children: "Intervallien vaikeustaso" }),
      /* @__PURE__ */ p.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((c) => /* @__PURE__ */ p.jsxs("label", { children: [
        /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: o.intervals.includes(c), onChange: (x) => m("intervals", x.target.checked ? [...o.intervals, c] : o.intervals.filter((N) => N !== c)) }),
        dl[c]
      ] }, c)) }),
      /* @__PURE__ */ p.jsx(qe, { label: "Intervallin suunta", children: /* @__PURE__ */ p.jsxs("select", { value: o.direction, onChange: (c) => m("direction", c.target.value), children: [
        /* @__PURE__ */ p.jsx("option", { value: "both", children: "Molemmat" }),
        /* @__PURE__ */ p.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ p.jsx("option", { value: "down", children: "Laskeva" })
      ] }) })
    ] }),
    /* @__PURE__ */ p.jsxs("details", { children: [
      /* @__PURE__ */ p.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ p.jsx("p", { children: "Valitse mikrofoni tai äänikortin soitintulo. Sammuta taustamusiikki ja vaimenna muut kielet. Soita yksi puhdas sävel, anna sen vakaantua ja vaimenna kieli ennen seuraavaa vastausta. Kalibroi hiljaisessa huoneessa." }),
      /* @__PURE__ */ p.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ p.jsx(qe, { label: "Äänitulo", children: /* @__PURE__ */ p.jsxs("select", { value: o.device, onChange: (c) => m("device", c.target.value), children: [
          /* @__PURE__ */ p.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
          d.map((c, x) => /* @__PURE__ */ p.jsx("option", { value: c.deviceId, children: c.label || `Äänitulo ${x + 1}` }, c.deviceId))
        ] }) }),
        /* @__PURE__ */ p.jsx(qe, { label: `Äänikynnys (RMS) · ${o.minRms.toFixed(3)}`, children: /* @__PURE__ */ p.jsx("input", { type: "range", min: "0.001", max: "0.15", step: "0.001", value: o.minRms, onChange: (c) => m("minRms", Number(c.target.value)) }) }),
        /* @__PURE__ */ p.jsx(qe, { label: `Varmuuskynnys · ${Math.round(o.clarity * 100)} %`, children: /* @__PURE__ */ p.jsx("input", { type: "range", min: "0.85", max: "0.99", step: "0.01", value: o.clarity, onChange: (c) => m("clarity", Number(c.target.value)) }) }),
        /* @__PURE__ */ p.jsx(qe, { label: `Vakaa sävel vähintään · ${o.stability} ms`, children: /* @__PURE__ */ p.jsx("input", { type: "range", min: "120", max: "800", step: "20", value: o.stability, onChange: (c) => m("stability", Number(c.target.value)) }) }),
        /* @__PURE__ */ p.jsx(qe, { label: `Vireen toleranssi · ±${o.cents} senttiä`, children: /* @__PURE__ */ p.jsx("input", { type: "range", min: "10", max: "45", step: "1", value: o.cents, onChange: (c) => m("cents", Number(c.target.value)) }) })
      ] })
    ] })
  ] });
}
const sc = "musiikin-kartta:harjoittelu", pc = () => ({ version: 2, settings: { ...cl }, stats: {}, recent: [], sessions: [] }), ds = (o) => `${o.input}:${o.check}:${o.hint ? "guided" : "solo"}:${o.item}`, ml = (o) => typeof o == "number" && Number.isFinite(o) && o >= 0;
function Rd(o) {
  return !!o && ["attempts", "correct", "totalMs", "lastSeen"].every((u) => ml(o[u])) && o.correct <= o.attempts && (o.errors === void 0 || ml(o.errors));
}
function zd(o) {
  if (!o) return pc();
  const u = JSON.parse(o);
  if (!u || ![1, 2].includes(u.version) || !u.stats || typeof u.stats != "object" || Array.isArray(u.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(u.stats).some((a) => !Rd(a))) throw new Error("Virheellisiä tilastoja");
  if (u.recent !== void 0 && (!Array.isArray(u.recent) || u.recent.some((a) => !a || typeof a.id != "string" || !ml(a.ms)))) throw new Error("Virheellisiä tuloksia");
  if (u.sessions !== void 0 && (!Array.isArray(u.sessions) || u.sessions.some((a) => !a || typeof a.id != "string" || !ml(a.count)))) throw new Error("Virheellisiä kierroksia");
  return {
    version: 2,
    settings: ps(u.settings ?? {}),
    stats: Object.fromEntries(Object.entries(u.stats).map(([a, d]) => [a, { ...d, errors: d.errors ?? 0 }])),
    recent: (u.recent ?? []).slice(-500),
    sessions: (u.sessions ?? []).slice(-200)
  };
}
function vl(o) {
  if (!o?.attempts) return null;
  const u = Math.max(0, Math.min(1, 1 - (o.totalMs / o.attempts - 1500) / 3500));
  return o.correct / o.attempts * 0.65 + u * 0.35;
}
function ac(o) {
  return !o || o.attempts < 3 ? 3 : 0.25 + (1 - vl(o)) * 3;
}
class uc {
  constructor(u) {
    this.storage = u;
    try {
      this.data = zd(u?.getItem(sc) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = pc();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(sc, JSON.stringify(this.data)), this.warning = "";
      } catch {
        this.warning = "Selaintallennus ei onnistu. Tämän käynnin tulokset säilyvät vain sivun aukiolon ajan. Voit ladata varmuuskopion.";
      }
  }
  settings(u) {
    this.data.settings = u, this.save();
  }
  record(u) {
    if (this.data.recent.some((m) => m.id === u.id)) return;
    const a = ds(u), d = this.data.stats[a] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 };
    Object.defineProperty(this.data.stats, a, { value: {
      attempts: d.attempts + 1,
      correct: d.correct + Number(u.first),
      errors: d.errors + u.errors,
      totalMs: d.totalMs + u.ms,
      lastSeen: u.at
    }, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, u].slice(-500), this.save();
  }
  session(u) {
    this.data.sessions = [...this.data.sessions.filter((a) => a.id !== u.id), u].slice(-200), this.save();
  }
}
function cc({ min: o, max: u, strings: a, targets: d = [], contextTargets: m = [], labels: c = !1, disabled: x = !1, answer: N, stats: T, currentInput: ne, currentCheck: $ }) {
  const [A, Y] = De.useState({ string: Math.min(...a), fret: o }), re = De.useRef(null), ae = d.map(vt).join(",");
  De.useEffect(() => {
    const D = re.current, U = D?.querySelector(".target");
    D && U && (D.scrollLeft += U.getBoundingClientRect().left - D.getBoundingClientRect().left - D.clientWidth / 2 + U.clientWidth / 2);
  }, [ae]);
  function X(D) {
    if (!T) return;
    const U = `:${vt(D)}`, ue = Object.entries(T).filter(([I]) => I.startsWith(`${ne}:${$}:solo:notes:`) && I.endsWith(U)).map(([, I]) => I);
    if (ue.length)
      return ue.reduce((I, q) => ({ attempts: I.attempts + q.attempts, correct: I.correct + q.correct, errors: I.errors + q.errors, totalMs: I.totalMs + q.totalMs, lastSeen: Math.max(I.lastSeen, q.lastSeen) }));
  }
  return /* @__PURE__ */ p.jsx("div", { ref: re, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": T ? "Harjoiteltujen kohteiden osaamiskartta" : "Otelaudan vastausruudukko", children: /* @__PURE__ */ p.jsxs("table", { className: "practice-board", children: [
    /* @__PURE__ */ p.jsxs("caption", { children: [
      T ? "Osaamiskartta" : "Otelaudan nauhat",
      " · ohut E ylimpänä"
    ] }),
    /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
      /* @__PURE__ */ p.jsx("th", { scope: "col", children: "Kieli" }),
      Array.from({ length: u - o + 1 }, (D, U) => /* @__PURE__ */ p.jsx("th", { scope: "col", children: o + U }, U))
    ] }) }),
    /* @__PURE__ */ p.jsx("tbody", { children: et.OPEN_PITCHES.map((D, U) => /* @__PURE__ */ p.jsxs("tr", { children: [
      /* @__PURE__ */ p.jsxs("th", { scope: "row", children: [
        U + 1,
        " · ",
        cs[U]
      ] }),
      hc([U], o, u).map((ue) => {
        const I = d.some((je) => vt(je) === vt(ue)), q = m.some((je) => vt(je) === vt(ue)), b = X(ue), ee = vl(b), ye = ee === null ? "unseen" : b.attempts < 3 ? "few" : ee >= 0.8 ? "strong" : ee >= 0.5 ? "growing" : "weak", Me = `${cs[U]}-kieli, nauha ${ue.fret}`, Fe = b ? `${Math.round(ee * 100)} %, ${b.correct}/${b.attempts} heti oikein, keskimäärin ${(b.totalMs / b.attempts / 1e3).toFixed(1)} s` : "ei havaintoja";
        return /* @__PURE__ */ p.jsx("td", { className: `${I ? "target" : q ? "context-note" : ""} ${T ? ye : ""}`, children: T ? /* @__PURE__ */ p.jsx("span", { tabIndex: 0, title: `${Me}: ${Fe}`, "aria-label": `${Me}: ${Fe}`, children: ee === null ? "·" : b.attempts < 3 ? "?" : Math.round(ee * 100) }) : /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "button",
            "data-string": U,
            "data-fret": ue.fret,
            tabIndex: A.string === U && A.fret === ue.fret ? 0 : -1,
            onFocus: () => Y(ue),
            onKeyDown: (je) => {
              if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(je.key)) return;
              je.preventDefault();
              const $e = [...a].sort((Ie, ge) => Ie - ge), Le = $e.indexOf(U), Pe = je.key === "ArrowUp" ? $e[Math.max(0, Le - 1)] : je.key === "ArrowDown" ? $e[Math.min($e.length - 1, Le + 1)] : U, Ae = je.key === "Home" ? o : je.key === "End" ? u : Math.max(o, Math.min(u, ue.fret + (je.key === "ArrowRight" ? 1 : je.key === "ArrowLeft" ? -1 : 0)));
              je.currentTarget.closest("table")?.querySelector(`button[data-string="${Pe}"][data-fret="${Ae}"]`)?.focus();
            },
            disabled: x || !a.includes(U),
            "aria-label": Me + (c && (I || q) ? `, ${ft(ue.midi)}` : ""),
            onClick: () => N?.(ue),
            children: I || q ? c ? ft(ue.midi) : "●" : "·"
          }
        ) }, ue.fret);
      })
    ] }, U)) })
  ] }) });
}
function Fd(o) {
  const u = o.length;
  return u ? `${u} vastattua · ${o.filter((a) => a.first).length}/${u} heti oikein · keskimäärin ${(o.reduce((a, d) => a + d.ms, 0) / u / 1e3).toFixed(1)} s` : "Ei vielä vastattuja kysymyksiä.";
}
async function Ld(o) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Error("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const u = {
    audio: {
      deviceId: o ? { exact: o } : void 0,
      echoCancellation: !1,
      noiseSuppression: !1,
      autoGainControl: !1,
      channelCount: 1
    },
    video: !1
  }, a = await navigator.mediaDevices.getUserMedia(u);
  let d;
  try {
    d = new AudioContext(), await d.resume();
    const m = d.createMediaStreamSource(a), c = d;
    return {
      context: d,
      source: m,
      stream: a,
      stop: () => {
        a.getTracks().forEach((x) => x.stop()), m.disconnect(), c.close().catch(() => {
        });
      }
    };
  } catch (m) {
    throw a.getTracks().forEach((c) => c.stop()), await d?.close().catch(() => {
    }), m;
  }
}
async function Ad() {
  return (await navigator.mediaDevices.enumerateDevices()).filter((u) => u.kind === "audioinput");
}
var as, fc;
function Id() {
  if (fc) return as;
  fc = 1;
  function o(u) {
    if (this.size = u | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = u << 1;
    for (var a = new Array(this.size * 2), d = 0; d < a.length; d += 2) {
      const ne = Math.PI * d / this.size;
      a[d] = Math.cos(ne), a[d + 1] = -Math.sin(ne);
    }
    this.table = a;
    for (var m = 0, c = 1; this.size > c; c <<= 1)
      m++;
    this._width = m % 2 === 0 ? m - 1 : m, this._bitrev = new Array(1 << this._width);
    for (var x = 0; x < this._bitrev.length; x++) {
      this._bitrev[x] = 0;
      for (var N = 0; N < this._width; N += 2) {
        var T = this._width - N - 2;
        this._bitrev[x] |= (x >>> N & 3) << T;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return as = o, o.prototype.fromComplexArray = function(a, d) {
    for (var m = d || new Array(a.length >>> 1), c = 0; c < a.length; c += 2)
      m[c >>> 1] = a[c];
    return m;
  }, o.prototype.createComplexArray = function() {
    const a = new Array(this._csize);
    for (var d = 0; d < a.length; d++)
      a[d] = 0;
    return a;
  }, o.prototype.toComplexArray = function(a, d) {
    for (var m = d || this.createComplexArray(), c = 0; c < m.length; c += 2)
      m[c] = a[c >>> 1], m[c + 1] = 0;
    return m;
  }, o.prototype.completeSpectrum = function(a) {
    for (var d = this._csize, m = d >>> 1, c = 2; c < m; c += 2)
      a[d - c] = a[c], a[d - c + 1] = -a[c + 1];
  }, o.prototype.transform = function(a, d) {
    if (a === d)
      throw new Error("Input and output buffers must be different");
    this._out = a, this._data = d, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, o.prototype.realTransform = function(a, d) {
    if (a === d)
      throw new Error("Input and output buffers must be different");
    this._out = a, this._data = d, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, o.prototype.inverseTransform = function(a, d) {
    if (a === d)
      throw new Error("Input and output buffers must be different");
    this._out = a, this._data = d, this._inv = 1, this._transform4();
    for (var m = 0; m < a.length; m++)
      a[m] /= this.size;
    this._out = null, this._data = null;
  }, o.prototype._transform4 = function() {
    var a = this._out, d = this._csize, m = this._width, c = 1 << m, x = d / c << 1, N, T, ne = this._bitrev;
    if (x === 4)
      for (N = 0, T = 0; N < d; N += x, T++) {
        const D = ne[T];
        this._singleTransform2(N, D, c);
      }
    else
      for (N = 0, T = 0; N < d; N += x, T++) {
        const D = ne[T];
        this._singleTransform4(N, D, c);
      }
    var $ = this._inv ? -1 : 1, A = this.table;
    for (c >>= 2; c >= 2; c >>= 2) {
      x = d / c << 1;
      var Y = x >>> 2;
      for (N = 0; N < d; N += x)
        for (var re = N + Y, ae = N, X = 0; ae < re; ae += 2, X += c) {
          const D = ae, U = D + Y, ue = U + Y, I = ue + Y, q = a[D], b = a[D + 1], ee = a[U], ye = a[U + 1], Me = a[ue], Fe = a[ue + 1], je = a[I], $e = a[I + 1], Le = q, Pe = b, Ae = A[X], Ie = $ * A[X + 1], ge = ee * Ae - ye * Ie, J = ee * Ie + ye * Ae, C = A[2 * X], Q = $ * A[2 * X + 1], O = Me * C - Fe * Q, y = Me * Q + Fe * C, E = A[3 * X], ce = $ * A[3 * X + 1], fe = je * E - $e * ce, me = je * ce + $e * E, ve = Le + O, P = Pe + y, L = Le - O, R = Pe - y, W = ge + fe, de = J + me, Z = $ * (ge - fe), te = $ * (J - me), ie = ve + W, _e = P + de, he = ve - W, Se = P - de, He = L + te, Ne = R - Z, We = L - te, Qe = R + Z;
          a[D] = ie, a[D + 1] = _e, a[U] = He, a[U + 1] = Ne, a[ue] = he, a[ue + 1] = Se, a[I] = We, a[I + 1] = Qe;
        }
    }
  }, o.prototype._singleTransform2 = function(a, d, m) {
    const c = this._out, x = this._data, N = x[d], T = x[d + 1], ne = x[d + m], $ = x[d + m + 1], A = N + ne, Y = T + $, re = N - ne, ae = T - $;
    c[a] = A, c[a + 1] = Y, c[a + 2] = re, c[a + 3] = ae;
  }, o.prototype._singleTransform4 = function(a, d, m) {
    const c = this._out, x = this._data, N = this._inv ? -1 : 1, T = m * 2, ne = m * 3, $ = x[d], A = x[d + 1], Y = x[d + m], re = x[d + m + 1], ae = x[d + T], X = x[d + T + 1], D = x[d + ne], U = x[d + ne + 1], ue = $ + ae, I = A + X, q = $ - ae, b = A - X, ee = Y + D, ye = re + U, Me = N * (Y - D), Fe = N * (re - U), je = ue + ee, $e = I + ye, Le = q + Fe, Pe = b - Me, Ae = ue - ee, Ie = I - ye, ge = q - Fe, J = b + Me;
    c[a] = je, c[a + 1] = $e, c[a + 2] = Le, c[a + 3] = Pe, c[a + 4] = Ae, c[a + 5] = Ie, c[a + 6] = ge, c[a + 7] = J;
  }, o.prototype._realTransform4 = function() {
    var a = this._out, d = this._csize, m = this._width, c = 1 << m, x = d / c << 1, N, T, ne = this._bitrev;
    if (x === 4)
      for (N = 0, T = 0; N < d; N += x, T++) {
        const Dt = ne[T];
        this._singleRealTransform2(N, Dt >>> 1, c >>> 1);
      }
    else
      for (N = 0, T = 0; N < d; N += x, T++) {
        const Dt = ne[T];
        this._singleRealTransform4(N, Dt >>> 1, c >>> 1);
      }
    var $ = this._inv ? -1 : 1, A = this.table;
    for (c >>= 2; c >= 2; c >>= 2) {
      x = d / c << 1;
      var Y = x >>> 1, re = Y >>> 1, ae = re >>> 1;
      for (N = 0; N < d; N += x)
        for (var X = 0, D = 0; X <= ae; X += 2, D += c) {
          var U = N + X, ue = U + re, I = ue + re, q = I + re, b = a[U], ee = a[U + 1], ye = a[ue], Me = a[ue + 1], Fe = a[I], je = a[I + 1], $e = a[q], Le = a[q + 1], Pe = b, Ae = ee, Ie = A[D], ge = $ * A[D + 1], J = ye * Ie - Me * ge, C = ye * ge + Me * Ie, Q = A[2 * D], O = $ * A[2 * D + 1], y = Fe * Q - je * O, E = Fe * O + je * Q, ce = A[3 * D], fe = $ * A[3 * D + 1], me = $e * ce - Le * fe, ve = $e * fe + Le * ce, P = Pe + y, L = Ae + E, R = Pe - y, W = Ae - E, de = J + me, Z = C + ve, te = $ * (J - me), ie = $ * (C - ve), _e = P + de, he = L + Z, Se = R + ie, He = W - te;
          if (a[U] = _e, a[U + 1] = he, a[ue] = Se, a[ue + 1] = He, X === 0) {
            var Ne = P - de, We = L - Z;
            a[I] = Ne, a[I + 1] = We;
            continue;
          }
          if (X !== ae) {
            var Qe = R, S = -W, F = P, le = -L, xe = -$ * ie, Oe = -$ * te, tt = -$ * Z, ke = -$ * de, Qt = Qe + xe, we = S + Oe, Re = F + ke, nt = le - tt, lt = N + re - X, yt = N + Y - X;
            a[lt] = Qt, a[lt + 1] = we, a[yt] = Re, a[yt + 1] = nt;
          }
        }
    }
  }, o.prototype._singleRealTransform2 = function(a, d, m) {
    const c = this._out, x = this._data, N = x[d], T = x[d + m], ne = N + T, $ = N - T;
    c[a] = ne, c[a + 1] = 0, c[a + 2] = $, c[a + 3] = 0;
  }, o.prototype._singleRealTransform4 = function(a, d, m) {
    const c = this._out, x = this._data, N = this._inv ? -1 : 1, T = m * 2, ne = m * 3, $ = x[d], A = x[d + m], Y = x[d + T], re = x[d + ne], ae = $ + Y, X = $ - Y, D = A + re, U = N * (A - re), ue = ae + D, I = X, q = -U, b = ae - D, ee = X, ye = U;
    c[a] = ue, c[a + 1] = 0, c[a + 2] = I, c[a + 3] = q, c[a + 4] = b, c[a + 5] = 0, c[a + 6] = ee, c[a + 7] = ye;
  }, as;
}
var Od = Id();
const Dd = /* @__PURE__ */ cd(Od);
class br {
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
  static forFloat32Array(u) {
    return new br(
      u,
      (a) => new Float32Array(a)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using
   * {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<Float64Array>}
   */
  static forFloat64Array(u) {
    return new br(
      u,
      (a) => new Float64Array(a)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using `number[]`
   * buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<number[]>}
   */
  static forNumberArray(u) {
    return new br(u, (a) => Array(a));
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
  constructor(u, a) {
    if (u < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = u, this._fft = new Dd(Vd(2 * u)), this._bufferSupplier = a, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(u, a = this._bufferSupplier(u.length)) {
    if (u.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${u.length}`
      );
    for (let m = 0; m < u.length; m++)
      this._paddedInputBuffer[m] = u[m];
    for (let m = u.length; m < this._paddedInputBuffer.length; m++)
      this._paddedInputBuffer[m] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const d = this._transformBuffer;
    for (let m = 0; m < d.length; m += 2)
      d[m] = d[m] * d[m] + d[m + 1] * d[m + 1], d[m + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let m = 0; m < u.length; m++)
      a[m] = this._inverseBuffer[2 * m];
    return a;
  }
}
function $d(o) {
  const u = [];
  let a = !1, d = -1 / 0, m = -1;
  for (let c = 1; c < o.length - 1; c++)
    o[c - 1] <= 0 && o[c] > 0 ? (a = !0, m = c, d = o[c]) : o[c - 1] > 0 && o[c] <= 0 ? (a = !1, m !== -1 && u.push(m)) : a && o[c] > d && (d = o[c], m = c);
  return u;
}
function Bd(o, u) {
  const [a, d, m] = [o - 1, o, o + 1], [c, x, N] = [u[a], u[d], u[m]], T = c / 2 - x + N / 2, ne = -(c / 2) * (d + m) + x * (a + m) - N / 2 * (a + d), $ = c * d * m / 2 - x * a * m + N * a * d / 2, A = -ne / (2 * T), Y = T * A * A + ne * A + $;
  return [A, Y];
}
class ei {
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
  static forFloat32Array(u) {
    return new ei(u, (a) => new Float32Array(a));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(u) {
    return new ei(u, (a) => new Float64Array(a));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(u) {
    return new ei(u, (a) => Array(a));
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
  constructor(u, a) {
    this._autocorrelator = new br(u, a), this._nsdfBuffer = a(u);
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
  set clarityThreshold(u) {
    if (!Number.isFinite(u) || u <= 0 || u > 1)
      throw new Error("clarityThreshold must be a number in the range (0, 1]");
    this._clarityThreshold = u;
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
  set minVolumeAbsolute(u) {
    if (!Number.isFinite(u) || u < 0 || u > this._maxInputAmplitude)
      throw new Error(
        `minVolumeAbsolute must be a number in the range [0, ${this._maxInputAmplitude}]`
      );
    this._minVolumeAbsolute = u;
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
  set minVolumeDecibels(u) {
    if (!Number.isFinite(u) || u > 0)
      throw new Error("minVolumeDecibels must be a number <= 0");
    this._minVolumeAbsolute = this._maxInputAmplitude * 10 ** (u / 10);
  }
  /**
   * Sets the maximum amplitude of an input reading. Must be greater than 0.
   *
   * @param amplitude {number} the maximum amplitude (absolute value) of an input reading
   */
  set maxInputAmplitude(u) {
    if (!Number.isFinite(u) || u <= 0)
      throw new Error("maxInputAmplitude must be a number > 0");
    this._maxInputAmplitude = u;
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
  findPitch(u, a) {
    if (this._belowMinimumVolume(u)) return [0, 0];
    this._nsdf(u);
    const d = $d(this._nsdfBuffer);
    if (d.length === 0)
      return [0, 0];
    const m = Math.max(...d.map((T) => this._nsdfBuffer[T])), c = d.find(
      (T) => this._nsdfBuffer[T] >= this._clarityThreshold * m
    ), [x, N] = Bd(
      // @ts-expect-error resultIndex is guaranteed to be defined
      c,
      this._nsdfBuffer
    );
    return [a / x, Math.min(N, 1)];
  }
  /**
   * Returns whether the input audio data is below the minimum volume allowed by
   * the pitch detector.
   *
   * @private
   * @param input {ArrayLike<number>}
   * @returns {boolean}
   */
  _belowMinimumVolume(u) {
    if (this._minVolumeAbsolute === 0) return !1;
    let a = 0;
    for (let d = 0; d < u.length; d++)
      a += u[d] ** 2;
    return Math.sqrt(a / u.length) < this._minVolumeAbsolute;
  }
  /**
   * Computes the NSDF of the input and stores it in the internal buffer. This
   * is equation (9) in the McLeod pitch method paper.
   *
   * @private
   * @param input {ArrayLike<number>}
   */
  _nsdf(u) {
    this._autocorrelator.autocorrelate(u, this._nsdfBuffer);
    let a = 2 * this._nsdfBuffer[0], d;
    for (d = 0; d < this._nsdfBuffer.length && a > 0; d++)
      this._nsdfBuffer[d] = 2 * this._nsdfBuffer[d] / a, a -= u[d] ** 2 + u[u.length - d - 1] ** 2;
    for (; d < this._nsdfBuffer.length; d++)
      this._nsdfBuffer[d] = 0;
  }
}
function Vd(o) {
  return o--, o |= o >> 1, o |= o >> 2, o |= o >> 4, o |= o >> 8, o |= o >> 16, o++, o;
}
class Ud {
  constructor(u, a = {}) {
    this.mic = u, this.opts = a;
    const d = a.fftSize ?? 8192;
    this.analyser = u.context.createAnalyser(), this.analyser.fftSize = d, this.analyser.smoothingTimeConstant = 0, u.source.connect(this.analyser), this.buffer = new Float32Array(new ArrayBuffer(this.analyser.fftSize * 4)), this.detector = ei.forFloat32Array(this.analyser.fftSize), this.detector.minVolumeDecibels = -60;
  }
  mic;
  opts;
  analyser;
  detector;
  buffer;
  rafId = null;
  consecutive = null;
  lastEmittedMidi = null;
  running = !1;
  paused = !1;
  gate = new Hd();
  start() {
    if (this.running) return;
    this.running = !0, this.consecutive = null, this.lastEmittedMidi = null;
    const u = () => {
      this.running && (this.paused || this.processFrame(), this.rafId = requestAnimationFrame(u));
    };
    this.rafId = requestAnimationFrame(u);
  }
  stop() {
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = null, this.consecutive = null, this.lastEmittedMidi = null, this.gate.reset(), this.analyser.disconnect();
  }
  /** Stop processing frames without tearing down the audio graph. */
  pause() {
    this.paused = !0, this.consecutive = null, this.lastEmittedMidi = null, this.opts.onFrame?.(null), this.gate.reset();
  }
  /** Resume processing. Clears any residual state so the next note is fresh. */
  resume() {
    this.paused = !1, this.consecutive = null, this.lastEmittedMidi = null, this.gate.reset();
  }
  /** Allow the UI to read current RMS for a mic meter. */
  getRms() {
    return this.analyser.getFloatTimeDomainData(this.buffer), dc(this.buffer);
  }
  /** Reset the stable-note state so the next correct note is freshly emitted. */
  armForNextNote() {
    this.consecutive = null, this.lastEmittedMidi = null;
  }
  processFrame() {
    const {
      minClarity: u = 0.9,
      minRms: a = 0.01,
      stabilityFrames: d = 3,
      stabilityMs: m = 240,
      centsTolerance: c = 35,
      minFreq: x = 70,
      maxFreq: N = 1450,
      onFrame: T,
      onStableNote: ne
    } = this.opts;
    this.analyser.getFloatTimeDomainData(this.buffer);
    const $ = dc(this.buffer);
    if ($ < a) {
      this.consecutive = null, this.lastEmittedMidi = null, T?.(null), this.gate.feed(null, performance.now(), m);
      return;
    }
    const [A, Y] = this.detector.findPitch(
      this.buffer,
      this.mic.context.sampleRate
    );
    if (Y < u || !isFinite(A) || A < x || A > N) {
      this.consecutive = null, T?.(null), this.gate.feed(null, performance.now(), m);
      return;
    }
    const { midi: re, cents: ae } = Ed(A);
    if (T?.({ frequency: A, clarity: Y, midi: re, cents: ae, rms: $ }), Math.abs(ae) > c) {
      this.consecutive = null, this.gate.feed(null, performance.now(), m);
      return;
    }
    this.consecutive && this.consecutive.midi === re ? this.consecutive.count += 1 : this.consecutive = { midi: re, count: 1, since: performance.now() }, this.consecutive.count >= d && this.gate.feed(re, performance.now(), m) !== null && (this.lastEmittedMidi = re, ne?.({ midi: re, frequency: A, timestamp: performance.now() }));
  }
}
class Hd {
  current = null;
  emitted = !0;
  silentSince = null;
  reset() {
    this.current = null, this.emitted = !0, this.silentSince = null;
  }
  feed(u, a, d) {
    return u === null ? (this.current = null, this.silentSince ??= a, a - this.silentSince >= 140 && (this.emitted = !1), null) : (this.silentSince = null, this.emitted || ((!this.current || this.current.midi !== u) && (this.current = { midi: u, since: a }), a - this.current.since < d) ? null : (this.emitted = !0, u));
  }
}
function dc(o) {
  let u = 0;
  for (let a = 0; a < o.length; a++) u += o[a] * o[a];
  return Math.sqrt(u / o.length);
}
function Zr(o) {
  const u = o instanceof Error ? o.name : "";
  return ["NotAllowedError", "SecurityError"].includes(u) ? "Mikrofonilupa evättiin. Voit sallia mikrofonin selaimen sivustoasetuksista tai vastata otelaudalla." : u === "NotFoundError" || u === "OverconstrainedError" ? "Valittua äänituloa ei löydy. Valitse oletustulo tai kytke äänikortti uudelleen." : u === "NotReadableError" ? "Äänituloa ei voitu avata. Tarkista, käyttääkö toinen ohjelma laitetta." : o instanceof Error ? o.message : "Mikrofonia ei voitu käynnistää.";
}
class Wd {
  constructor(u = Ld) {
    this.opener = u;
  }
  opener;
  generation = 0;
  mic;
  loop;
  async start(u, a, d) {
    this.stop();
    const m = this.generation, c = await this.opener(u || void 0);
    if (m !== this.generation)
      return c.stop(), !1;
    this.mic = c;
    try {
      return this.loop = new Ud(c, a), c.stream.getTracks().forEach((x) => x.addEventListener("ended", () => {
        this.mic === c && (this.stop(), d());
      }, { once: !0 })), c.context.addEventListener?.("statechange", () => {
        this.mic === c && c.context.state !== "running" && (this.stop(), d());
      }), this.loop.start(), !0;
    } catch (x) {
      throw this.stop(), x;
    }
  }
  stop() {
    this.generation++, this.loop?.stop(), this.loop = void 0, this.mic?.stop(), this.mic = void 0;
  }
}
class Kd {
  context;
  token = 0;
  stop() {
    this.token++;
    const u = this.context;
    this.context = void 0, u?.close().catch(() => {
    });
  }
  async play(u) {
    this.stop();
    const a = this.token, d = new AudioContext();
    this.context = d;
    try {
      return await d.resume(), a !== this.token ? !1 : (u.forEach((m, c) => {
        const x = d.createOscillator(), N = d.createGain(), T = d.currentTime + 0.04 + c * 0.8;
        x.type = "triangle", x.frequency.value = xd(m), N.gain.setValueAtTime(0, T), N.gain.linearRampToValueAtTime(0.16, T + 0.025), N.gain.exponentialRampToValueAtTime(1e-3, T + 0.6), x.connect(N), N.connect(d.destination), x.start(T), x.stop(T + 0.65);
      }), await new Promise((m) => setTimeout(m, u.length * 800 + 450)), a === this.token);
    } finally {
      this.context === d && (this.context = void 0, await d.close().catch(() => {
      }));
    }
  }
}
function yl(o) {
  let u = hc(o.strings, o.min, o.max);
  if (["notes", "ear-note", "repeat"].includes(o.mode)) return u.filter((a) => o.accidentals || ![1, 3, 6, 8, 10].includes(Pt(a.midi)));
  if (o.mode === "caged") {
    const a = new Set(Nd(o.root, o.shape).map(vt));
    return u.filter((d) => a.has(vt(d)));
  }
  if (o.mode === "chord") return u.filter((a) => Wn[o.chord].tones.some(([d]) => Pt(a.midi - o.root) === d));
  if (o.mode === "scale") {
    const a = et.SCALES[o.scale];
    if (u = u.filter((d) => et.scaleNotes(a).some(([m]) => Pt(d.midi - o.root) === m)), o.box) {
      const d = et.fingeringBoxes(o.root, a, "pentatonic", [o.box], 24).flatMap((m) => m.positions);
      u = u.filter((m) => d.some((c) => c.strings[m.string].length && m.fret >= c.strings[m.string][0] && m.fret <= c.strings[m.string].at(-1)));
    }
  }
  return u;
}
function ul(o, u, a = Math.random) {
  if (!o.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  let d = Math.min(0.999999999, Math.max(0, a())) * u.reduce((m, c) => m + c, 0);
  for (let m = 0; m < o.length; m++)
    if (d -= u[m], d < 0) return o[m];
  return o.at(-1);
}
function fl(o, u, a, d) {
  return o.mode === "interval" ? `interval:${a}:${d}` : o.mode === "chord" ? `chord:${o.root}:${o.chord}:${Pt(u.midi - o.root)}:${o.activity}` : o.mode === "scale" ? `scale:${o.root}:${o.scale}:${vt(u)}:${o.activity}` : o.mode === "caged" ? `caged:${o.root}:${o.shape}:${vt(u)}` : o.mode === "ear-note" ? `ear-note:${Pt(u.midi)}` : `${o.mode}:${vt(u)}`;
}
function Qd(o, u, a = {}, d, m = Math.random) {
  let c = yl(o);
  c.length || ul([], []);
  let x, N, T = o.direction;
  if (o.mode === "interval") {
    T = T === "both" ? m() < 0.5 ? "up" : "down" : T;
    const I = o.intervals.flatMap((b) => c.flatMap((ee) => c.filter((ye) => ye.midi === ee.midi + (T === "down" ? -b : b)).map((ye) => ({ iv: b, reference: ee.midi, target: ye })))), q = ul(I, I.map((b) => o.weak ? ac(a[ds({ input: hl(o), check: pl(o), hint: !1, item: fl(o, b.target, b.iv, T) })]) : 1), m);
    x = q.iv, N = q.reference, c = [q.target];
  }
  const ne = o.mode === "scale" ? et.scaleNotes(et.SCALES[o.scale]) : Wn[o.mode === "caged" ? "maj" : o.chord].tones;
  if (o.mode === "chord" && o.chordTone !== "random") {
    const I = o.chordTone === "build" ? ne[u % ne.length][0] : ne.find(([, q]) => q.endsWith(o.chordTone))?.[0];
    c = c.filter((q) => Pt(q.midi - o.root) === I);
  }
  let $;
  if (o.mode === "scale" && o.order !== "random") {
    const I = [...new Map(c.sort((q, b) => q.midi - b.midi || q.string - b.string).map((q) => [q.midi, q])).values()];
    o.order === "down" && I.reverse(), $ = ul(I, I.map((q, b) => b === u % I.length ? 1 : 0), m);
  } else
    c.length > 1 && (c = c.filter((I) => vt(I) !== (d && vt(d.position)))), $ = ul(c, c.map((I) => o.weak ? ac(a[ds({ input: hl(o), check: pl(o), hint: !1, item: fl(o, I) })]) : 1), m);
  const A = Pt($.midi - o.root), Y = ne.find(([I]) => I === A)?.[1], re = o.mode === "scale" && Y ? et.noteName(o.root, A, Y) : ft($.midi, o.flats), ae = re + (o.check === "pitch" ? Math.floor($.midi / 12) - 1 : ""), X = ["ohuelta E", "B", "G", "D", "A", "paksulta E"][$.string];
  let D = `Etsi ja soita ${ae} ${X}-kieleltä.`, U = [], ue = "position";
  return o.mode === "ear-note" && (D = "Kuuntele sävel. Mikä sävelnimi soi?", U = [$.midi], ue = "note"), o.mode === "repeat" && (D = "Kuuntele ja toista kuulemasi sävel kitaralla.", U = [$.midi]), o.mode === "scale" && (D = `Soita ${ft(o.root, o.flats)}-${et.SCALES[o.scale].name}: ${Y}. aste${o.check === "pitch" ? ` (${ae})` : ""}.`), (o.mode === "chord" || o.mode === "caged") && (D = `Soita ${ft(o.root, o.flats)}${Wn[o.mode === "caged" ? "maj" : o.chord].suffix}-soinnun ${Y}. aste${o.mode === "caged" ? ` ${o.shape}-muodosta` : ""}${o.check === "pitch" ? ` (${ae})` : ""}.`), ["scale", "chord"].includes(o.mode) && o.activity === "degree" && (D = `Mikä aste ${re} on ${ft(o.root, o.flats)}${o.mode === "scale" ? "-" + et.SCALES[o.scale].name + "-asteikossa" : Wn[o.chord].suffix + "-soinnussa"}?`, ue = "degree"), o.mode === "interval" && (U = [N, $.midi], D = `Kuuntele ${T === "down" ? "laskeva" : "nouseva"} intervalli. Toista jälkimmäinen sävel. Alkusävel on ${ft(N, o.flats, !0)}.`), {
    position: $,
    midi: $.midi,
    item: fl(o, $, x, T),
    prompt: D,
    degree: Y,
    interval: o.mode === "interval" ? x : A,
    reference: N,
    sound: U,
    choices: ue
  };
}
function us(o, u, a) {
  return Number.isInteger(u) && (a === "class" ? Pt(o) === Pt(u) : o === u);
}
class Gd {
  constructor(u, a, d, m = () => performance.now(), c = Math.random) {
    this.settings = u, this.stats = a, this.record = d, this.now = m, this.random = c;
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
  hinted = !1;
  started = 0;
  pausedAt = 0;
  prior = "active";
  id = globalThis.crypto?.randomUUID?.() ?? String(Date.now()) + Math.random();
  start() {
    this.phase === "idle" && this.next();
  }
  next() {
    if (["idle", "feedback"].includes(this.phase)) {
      if (this.settings.rounds && this.index >= this.settings.rounds) {
        this.phase = "done";
        return;
      }
      this.question = Qd(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.hinted = !1, this.started = this.now(), this.phase = "active";
    }
  }
  pause() {
    ["active", "feedback"].includes(this.phase) && (this.prior = this.phase, this.pausedAt = this.now(), this.phase = "paused");
  }
  resume() {
    this.phase === "paused" && (this.started += this.now() - this.pausedAt, this.phase = this.prior);
  }
  hint() {
    this.phase === "active" && (this.hinted = !0);
  }
  answer(u, a, d) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const m = this.question;
    if (!(a === "degree" ? u === m.interval : a === "board" && this.settings.mode === "notes" ? !!d && d.string === m.position.string && us(m.midi, u, this.settings.check) : a === "board" && this.settings.mode === "caged" ? !!d && yl(this.settings).some((N) => vt(N) === vt(d)) && us(m.midi, u, this.settings.check) : us(m.midi, u, a === "note" ? "class" : this.settings.check)))
      return a === "mic" ? "candidate" : (this.errors++, "wrong");
    const x = {
      id: `${this.id}:${this.index}`,
      item: a === "board" && d && this.settings.mode !== "interval" ? fl(this.settings, d) : m.item,
      mode: this.settings.mode,
      input: m.choices === "position" ? this.settings.input : m.choices,
      check: pl(this.settings),
      expected: m.midi,
      played: u,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started),
      hint: this.hinted,
      at: Date.now(),
      position: vt(a === "board" && d ? d : m.position)
    };
    return this.results.push(x), this.record(x), this.phase = "feedback", "correct";
  }
  confirmWrong() {
    this.phase === "active" && this.errors++;
  }
  stop() {
    this.phase = "done";
  }
  get intervalName() {
    return this.question?.interval ? dl[this.question.interval] : "";
  }
}
function Yd() {
  try {
    return new uc(localStorage);
  } catch {
    return new uc();
  }
}
function Xd() {
  const [o] = De.useState(Yd), [u, a] = De.useState(() => Td(location.search, o.data.settings)), d = De.useRef(), m = De.useRef(new Wd()), c = De.useRef(new Kd()), x = De.useRef(0), N = De.useState(0)[1], [T, ne] = De.useState(!1), [$, A] = De.useState(!1), [Y, re] = De.useState(!1), [ae, X] = De.useState(null), [D, U] = De.useState(null), [ue, I] = De.useState("Valitse harjoitus ja aloita. Voit harjoitella myös ilman mikrofonia."), [q, b] = De.useState(""), [ee, ye] = De.useState(!1), [Me, Fe] = De.useState([]), [je, $e] = De.useState(!1), Le = De.useRef(!1), Pe = De.useRef([]), Ae = De.useRef(0), Ie = De.useRef(), ge = () => N((S) => S + 1), J = d.current, C = J?.question, Q = J?.phase === "active", O = !!J && !["idle", "done"].includes(J.phase) || T || je;
  function y() {
    x.current++, m.current.stop(), c.current.stop(), re(!1), A(!1), ne(!1), X(null), U(null), Le.current = !1, $e(!1), cancelAnimationFrame(Ae.current), clearTimeout(Ie.current);
  }
  function E(S, F) {
    S.results.length && o.session({
      id: S.id,
      mode: S.settings.mode,
      count: S.results.length,
      first: S.results.filter((le) => le.first).length,
      ms: S.results.reduce((le, xe) => le + xe.ms, 0),
      at: Date.now(),
      complete: F
    });
  }
  function ce(S = !1) {
    y();
    const F = d.current;
    F && (F.stop(), E(F, S)), I(S ? "Kierros valmis. Hyvää työtä! Katso tulokset ja valitse seuraava harjoitus." : "Harjoitus päättyi. Vastatut kysymykset on säilytetty."), ge();
  }
  function fe(S, F, le) {
    const xe = d.current;
    if (!xe || xe.phase !== "active") return;
    const Oe = xe.answer(S, F, le);
    if (Oe === "candidate") {
      U(S);
      return;
    }
    if (Oe === "wrong" && I(`Vastaus ei vielä osunut. ${F === "degree" ? `Valitsit ${S === 0 ? "1" : S === 3 ? "♭3" : S === 4 ? "3" : S === 7 ? "5" : S === 10 ? "♭7" : "toisen asteen"}.` : `Valitsit ${ft(S, u.flats, !0)}.`} Kokeile uudelleen tai avaa vihje.`), Oe === "correct") {
      m.current.stop(), re(!1), U(null), X(null), E(xe, !1);
      const tt = xe.question;
      I(`Oikein: ${ft(tt.midi, u.flats, xe.settings.check === "pitch")}${tt.degree ? `, ${tt.degree}. aste` : ""}. ${F === "mic" ? "Sävel vastasi tehtävää; kieltä tai nauhaa ei voida varmistaa mikrofonista." : "Jatka seuraavaan kysymykseen."}`);
    }
    ge();
  }
  async function me(S) {
    if (S.settings.input !== "mic" || S.question?.choices !== "position" || S.phase !== "active") return;
    const F = x.current;
    let le = 0;
    ne(!0);
    try {
      if (await m.current.start(S.settings.device, {
        minRms: S.settings.minRms,
        minClarity: S.settings.clarity,
        stabilityMs: S.settings.stability,
        centsTolerance: S.settings.cents,
        onFrame: (Oe) => {
          const tt = performance.now();
          (!Oe || tt - le >= 120) && (X(Oe), le = tt);
        },
        onStableNote: (Oe) => {
          d.current === S && !Le.current && fe(Oe.midi, "mic");
        }
      }, () => {
        S.pause(), re(!1), b("Äänitulo katosi. Kytke laite takaisin ja jatka tai päätä kierros."), ge();
      }) && F === x.current) {
        re(!0);
        const Oe = await navigator.mediaDevices.enumerateDevices().catch(() => []);
        F === x.current && Fe(Oe.filter((tt) => tt.kind === "audioinput"));
      }
    } catch (xe) {
      F === x.current && (S.pause(), b(Zr(xe)), ge());
    } finally {
      F === x.current && ne(!1);
    }
  }
  async function ve(S) {
    const F = S.question?.sound;
    if (!F?.length || S.phase !== "active") return;
    y();
    const le = x.current;
    S.pause(), A(!0), I("Kuuntele. Vastaa äänen päätyttyä."), ge();
    try {
      if (!await c.current.play(F) || le !== x.current || S !== d.current) return;
      S.resume(), A(!1), I("Nyt voit vastata. Voit kuunnella esimerkin uudelleen."), ge(), await me(S);
    } catch (xe) {
      le === x.current && (A(!1), b(Zr(xe)), ge());
    }
  }
  async function P(S) {
    ye(!1), U(null), b(""), S.question?.choices === "position" && (u.hints === "always" || u.hints === "fade" && S.index <= 6) && (ye(!0), S.hint()), ge(), S.question?.sound.length ? await ve(S) : await me(S);
  }
  async function L() {
    y(), b("");
    const S = new Gd(u, () => o.data.stats, (F) => {
      o.record(F);
    });
    try {
      S.start(), d.current = S, I("Etsi tehtävän sävel. Otelaudalla vastaus valitaan painamalla nauhan kohtaa."), await P(S);
    } catch (F) {
      S.stop(), d.current = S, b(Zr(F)), ge();
    }
  }
  async function R() {
    const S = d.current;
    if (!(!S || S.phase !== "feedback"))
      try {
        if (S.next(), S.phase === "done") {
          ce(!0);
          return;
        }
        I("Seuraava sävel."), await P(S);
      } catch (F) {
        ce(), b(Zr(F));
      }
  }
  function W() {
    y(), d.current?.pause(), I("Harjoitus on tauolla. Mikrofoni on suljettu."), ge();
  }
  async function de() {
    const S = d.current;
    !S || S.phase !== "paused" || (b(""), S.resume(), I("Harjoitus jatkuu."), ge(), S.question?.sound.length && S.phase === "active" ? await ve(S) : await me(S));
  }
  async function Z() {
    y(), b(""), $e(!0), Le.current = !0;
    const S = x.current;
    I("Kalibrointi: ole hiljaa kolme sekuntia. Kitaran säveliä ei arvioida.");
    try {
      if (!await m.current.start(u.device, {}, () => {
        y(), b("Äänitulo katosi kalibroinnin aikana.");
      }) || S !== x.current) return;
      re(!0), Pe.current = [];
      const le = () => {
        S === x.current && (Pe.current.push(m.current.loop.getRms()), Ae.current = requestAnimationFrame(le));
      };
      le(), Ie.current = setTimeout(() => {
        if (S !== x.current) return;
        const xe = Pe.current.sort((ke, Qt) => ke - Qt), Oe = xe[Math.floor(xe.length * 0.95)] ?? 2e-3, tt = Math.min(0.15, Math.max(3e-3, Oe * 3));
        y(), te({ ...u, minRms: tt }), I(`Kalibrointi valmis. Äänikynnys on ${tt.toFixed(3)}. ${Oe > 0.04 ? "Huone on äänekäs: vähennä taustamelua ja kalibroi uudelleen." : "Aloita harjoitus ja kokeile yhtä säveltä."}`);
      }, 3e3);
    } catch (F) {
      S === x.current && (y(), b(Zr(F)));
    }
  }
  function te(S) {
    a(S), o.settings(S);
  }
  De.useEffect(() => {
    let S = !1;
    Ad().then((Oe) => {
      S || Fe(Oe);
    }).catch(() => {
    });
    const F = () => {
      document.hidden && (y(), d.current?.pause(), ge());
    }, le = () => {
      m.current.stop(), c.current.stop(), x.current++, d.current?.pause(), Le.current = !1, clearTimeout(Ie.current), cancelAnimationFrame(Ae.current);
    }, xe = () => {
      ne(!1), A(!1), re(!1), $e(!1), ge();
    };
    return document.addEventListener("visibilitychange", F), window.addEventListener("pagehide", le), window.addEventListener("pageshow", xe), () => {
      S = !0, le(), clearTimeout(Ie.current), cancelAnimationFrame(Ae.current), document.removeEventListener("visibilitychange", F), window.removeEventListener("pagehide", le), window.removeEventListener("pageshow", xe);
    };
  }, []);
  const ie = () => {
    ye(!0), d.current?.hint(), ge();
  }, _e = C && ee ? C.choices === "position" && u.mode !== "notes" ? yl(u).filter((S) => u.check === "pitch" ? S.midi === C.midi : Pt(S.midi) === Pt(C.midi)) : [C.position] : [], he = Q && !T && !$, Se = fs.find(([S]) => S === u.mode), Ne = Object.entries(o.data.stats).filter(([S]) => S.startsWith(`${hl(u)}:${pl(u)}:solo:`) && S.includes(`:${u.mode}:`)).filter(([, S]) => S.attempts >= 3).sort((S, F) => vl(S[1]) - vl(F[1])).slice(0, 5), We = Object.values(o.data.stats).reduce((S, F) => S + F.attempts, 0);
  function Qe(S) {
    const F = S.split(":");
    return F[3] === "ear-note" ? `Kuultu sävel ${ft(Number(F[4]), u.flats)}` : ["notes", "repeat"].includes(F[3]) ? `${["ohut E", "B", "G", "D", "A", "paksu E"][Number(F[4])]}-kieli, nauha ${F[5]}` : F[3] === "interval" ? `${dl[Number(F[4])]} · ${F[5] === "up" ? "nouseva" : "laskeva"}` : F[3] === "chord" ? `${ft(Number(F[4]))}${Wn[F[5]]?.suffix ?? ""} · ${F[6]} puoliaskelta perussävelestä` : `${F[3] === "scale" ? et.SCALES[F[5]]?.name : "CAGED " + F[5]} · ${ft(Number(F[4]))} · kieli ${Number(F[6]) + 1}, nauha ${F[7]}`;
  }
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "intro", children: [
      /* @__PURE__ */ p.jsx("p", { className: "eyebrow", children: "KUUNTELE · LÖYDÄ · SOITA" }),
      /* @__PURE__ */ p.jsx("h1", { children: "Harjoittele kitaralla" }),
      /* @__PURE__ */ p.jsx("p", { children: "Yhdistä oppaan teoria siihen, mitä kuulet ja soitat. Lyhyt kierros kerrallaan." })
    ] }),
    /* @__PURE__ */ p.jsx(Pd, { s: u, change: te, locked: O, devices: Me }),
    /* @__PURE__ */ p.jsxs("p", { className: "tools-note", children: [
      Se[2],
      " ",
      u.check === "class" ? "Sävelluokka: sama sävelnimi hyväksytään kaikissa oktaaveissa." : "Sävelkorkeus: myös oktaavin on vastattava tehtävää. Oktaaviylä-ääni voi aiheuttaa eriävän havainnon.",
      " Mikrofoni kuulee sävelkorkeuden, mutta ei tunnista kieltä tai nauhaa."
    ] }),
    /* @__PURE__ */ p.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ p.jsx("h2", { id: "session-title", children: Se[1] }),
        /* @__PURE__ */ p.jsx("span", { children: J && J.phase !== "idle" ? `${J.phase === "done" ? "Valmis" : "Kysymys " + J.index}${u.rounds ? " / " + u.rounds : " · vapaa"}` : "Valmis aloittamaan" })
      ] }),
      /* @__PURE__ */ p.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: C && J?.phase !== "done" ? C.prompt : "Muutama minuutti keskittynyttä harjoittelua." }),
      /* @__PURE__ */ p.jsxs("div", { className: "action-row", children: [
        !J || J.phase === "done" ? /* @__PURE__ */ p.jsx("button", { className: "primary", disabled: T || je, onClick: () => {
          L();
        }, children: "Aloita harjoitus" }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          J.phase === "feedback" ? /* @__PURE__ */ p.jsx("button", { className: "primary", onClick: () => {
            R();
          }, children: u.rounds && J.index >= u.rounds ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }) : J.phase === "paused" && !$ ? /* @__PURE__ */ p.jsx("button", { className: "primary", disabled: T, onClick: () => {
            de();
          }, children: "Jatka harjoitusta" }) : /* @__PURE__ */ p.jsx("button", { onClick: W, children: "Keskeytä hetkeksi" }),
          /* @__PURE__ */ p.jsx("button", { onClick: () => ce(), children: "Päätä harjoitus" })
        ] }),
        C?.sound.length && J?.phase !== "done" ? /* @__PURE__ */ p.jsx("button", { disabled: !he, onClick: () => {
          ve(J);
        }, children: "Kuuntele uudelleen" }) : null,
        C && J?.phase !== "done" && /* @__PURE__ */ p.jsx("button", { disabled: !he, "aria-pressed": ee, onClick: () => ee ? ye(!1) : ie(), children: ee ? "Piilota vihje" : "Näytä otelautavihje" })
      ] }),
      /* @__PURE__ */ p.jsx("p", { className: "feedback", role: "status", "aria-live": "polite", children: ue }),
      q && /* @__PURE__ */ p.jsx("p", { className: "error", role: "alert", children: q }),
      /* @__PURE__ */ p.jsxs("p", { className: "mic-status", children: [
        /* @__PURE__ */ p.jsx("span", { className: Y ? "mic-dot on" : "mic-dot" }),
        T ? "Avataan mikrofonia… Voit perua päättämällä harjoituksen." : Y ? "Mikrofoni käytössä · ääni käsitellään vain tässä selaimessa" : "Mikrofoni suljettu",
        ae && ` · havainto ${ft(ae.midi, u.flats, !0)}, ${Math.round(ae.cents)} senttiä, varmuus ${Math.round(ae.clarity * 100)} %`
      ] }),
      D !== null && Q && /* @__PURE__ */ p.jsxs("div", { className: "candidate", children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          "Vakaa havainto: ",
          ft(D, u.flats, !0),
          ". Se eroaa tehtävästä. Vaimenna kieli ja yritä uudelleen. Ylä-ääni tai resonanssi voi selittää eron."
        ] }),
        /* @__PURE__ */ p.jsx("button", { onClick: () => {
          J.confirmWrong(), U(null), I("Merkitsit oman soiton virheeksi. Etsi sama tehtäväsävel uudelleen."), ge();
        }, children: "Soitin väärän sävelen · kirjaa virhe" }),
        /* @__PURE__ */ p.jsx("button", { onClick: () => U(null), children: "Ohita havainto" })
      ] }),
      C?.choices === "note" && J?.phase !== "done" && /* @__PURE__ */ p.jsx("div", { className: "answer-choices", "aria-label": "Sävelnimet", children: Array.from({ length: 12 }, (S, F) => /* @__PURE__ */ p.jsx("button", { disabled: !he, onClick: () => fe(F, "note"), children: ft(F, u.flats) }, F)) }),
      C?.choices === "degree" && J?.phase !== "done" && /* @__PURE__ */ p.jsx("div", { className: "answer-choices", "aria-label": "Asteet", children: (u.mode === "scale" ? et.scaleNotes(et.SCALES[u.scale]) : Wn[u.chord].tones).map(([S, F]) => /* @__PURE__ */ p.jsx("button", { disabled: !he, onClick: () => fe(S, "degree"), children: F }, S)) }),
      C && J?.phase !== "done" && (C.choices === "position" || ee) && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsxs("p", { className: "tools-note", children: [
          u.mode === "caged" && ee ? `${ft(u.root)}-duuri · ${u.shape}-muoto: kaikki otteen sävelet näkyvät, tehtävän aste on vihreä.` : "Otelaudalla voit liikkua nuolinäppäimillä ja vastata Enterillä.",
          " Vieritä otelautaa sivusuunnassa tarvittaessa."
        ] }),
        /* @__PURE__ */ p.jsx(cc, { min: u.min, max: u.max, strings: u.strings, targets: _e, contextTargets: u.mode === "caged" && ee ? yl(u) : [], labels: ee && !(u.hints === "fade" && J.index > 3 && J.index <= 6), disabled: !he || C.choices !== "position" || u.input === "mic", answer: (S) => fe(S.midi, "board", S) })
      ] }),
      ee && C?.interval && u.mode === "interval" ? /* @__PURE__ */ p.jsxs("p", { children: [
        "Intervalli: ",
        dl[C.interval],
        ". Jälkimmäinen sävel: ",
        ft(C.midi, u.flats, !0),
        "."
      ] }) : null,
      /* @__PURE__ */ p.jsxs("p", { className: "tools-note", children: [
        J ? Fd(J.results) : "Tulokset tallentuvat tähän selaimeen.",
        J?.results.some((S) => S.hint) ? " Vihjeellä ja ilman vihjettä annetut vastaukset tilastoidaan erikseen." : ""
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "action-row", children: [
      /* @__PURE__ */ p.jsx("button", { disabled: O, onClick: () => {
        Z();
      }, children: "Kalibroi hiljaisuuden äänikynnys" }),
      je && /* @__PURE__ */ p.jsx("button", { onClick: () => {
        y(), I("Kalibrointi peruttu.");
      }, children: "Peru kalibrointi" }),
      /* @__PURE__ */ p.jsx("a", { href: Md(u), children: "Linkki tähän harjoitukseen" }),
      /* @__PURE__ */ p.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(et.CHROM[u.root])}&asteikko=${u.scale}`, children: "Tutki asteikkoa otelaudalla" })
    ] }),
    /* @__PURE__ */ p.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
      /* @__PURE__ */ p.jsx("h2", { id: "progress-title", children: "Näe oppimisesi" }),
      /* @__PURE__ */ p.jsxs("p", { children: [
        We,
        " vastattua kysymystä · ",
        o.data.sessions.length,
        " tallennettua harjoituskertaa. Osaamisarvio yhdistää ensimmäisen yrityksen tarkkuuden ja vastausnopeuden. Alle kolme vastausta on vasta alkuhavainto."
      ] }),
      /* @__PURE__ */ p.jsxs("p", { children: [
        /* @__PURE__ */ p.jsx("strong", { children: "Seuraavaksi:" }),
        " ",
        Ne.length ? "Kertaa alla olevia kohteita. Heikkojen kohtien painotus käyttää vastaustavan ja tarkistustavan mukaisia tuloksia." : "Tee ensin lyhyt kierros ilman vihjeitä. Aloita nauhoista 0–5 ja laajenna aluetta, kun sävelet löytyvät varmasti."
      ] }),
      Ne.length > 0 && /* @__PURE__ */ p.jsx("ul", { children: Ne.map(([S, F]) => /* @__PURE__ */ p.jsxs("li", { children: [
        Qe(S),
        " · ",
        F.correct,
        "/",
        F.attempts,
        " heti oikein · ",
        (F.totalMs / F.attempts / 1e3).toFixed(1),
        " s"
      ] }, S)) }),
      /* @__PURE__ */ p.jsxs("details", { children: [
        /* @__PURE__ */ p.jsx("summary", { children: "Otelaudan sävelharjoituksen osaamiskartta" }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          "Kartta näyttää ",
          /* @__PURE__ */ p.jsx("strong", { children: "harjoiteltuja kohteita" }),
          " valitulla vastaustavalla (",
          u.input === "mic" ? "mikrofoni" : "otelauta",
          ") ja tarkistuksella (",
          u.check === "class" ? "sävelluokka" : "sävelkorkeus",
          "), ilman vihjeitä. Mikrofonivastaus ei todista, miltä kieleltä tai nauhalta sävel soitettiin."
        ] }),
        /* @__PURE__ */ p.jsx("p", { children: "· ei havaintoja · ? alle 3 vastausta · prosenttiluku = osaamisarvio. Vihreä ≥ 80 %, violetti ≥ 50 %, lämmin väri < 50 %. Myös luvut kertovat tason." }),
        /* @__PURE__ */ p.jsx(cc, { min: u.min, max: u.max, strings: u.strings, stats: o.data.stats, currentInput: u.input, currentCheck: u.check })
      ] }),
      /* @__PURE__ */ p.jsxs("details", { children: [
        /* @__PURE__ */ p.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
        o.data.sessions.length ? /* @__PURE__ */ p.jsx("ul", { children: o.data.sessions.slice(-10).reverse().map((S) => /* @__PURE__ */ p.jsxs("li", { children: [
          new Date(S.at).toLocaleString("fi-FI"),
          " · ",
          fs.find(([F]) => F === S.mode)?.[1],
          " · ",
          S.first,
          "/",
          S.count,
          " heti oikein · keskimäärin ",
          (S.ms / S.count / 1e3).toFixed(1),
          " s",
          S.complete ? " · valmis kierros" : " · osittainen kierros"
        ] }, S.id)) }) : /* @__PURE__ */ p.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
      ] }),
      /* @__PURE__ */ p.jsx("button", { onClick: () => {
        const S = new Blob([JSON.stringify(o.data, null, 2)], { type: "application/json" }), F = URL.createObjectURL(S), le = document.createElement("a");
        le.href = F, le.download = "musiikin-kartta-harjoittelu.json", le.click(), setTimeout(() => URL.revokeObjectURL(F), 1e3);
      }, children: "Lataa tulosten varmuuskopio" }),
      o.warning && /* @__PURE__ */ p.jsx("p", { role: "status", className: "error", children: o.warning })
    ] }),
    /* @__PURE__ */ p.jsxs("details", { className: "privacy", children: [
      /* @__PURE__ */ p.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
      /* @__PURE__ */ p.jsx("p", { children: "Mikrofoni käynnistyy vain aloittamalla mikrofoniharjoituksen tai kalibroinnin. Ääntä ei tallenneta eikä lähetetä palvelimelle. Kuuntelu suljetaan tauolla, vastauksen jälkeen, kierroksen lopussa ja sivulta poistuttaessa. Välilehden piilottaminen keskeyttää harjoituksen." }),
      /* @__PURE__ */ p.jsx("p", { children: "Sävel hyväksytään vain asetetun äänenvoimakkuuden, varmuuden, vireen ja vakausajan ylittyessä. Mikrofonin eriäviä havaintoja ei tilastoida ilman omaa vahvistustasi. Soita yksi sävel kerrallaan ja vaimenna se vastausten välillä. Kokonaisen sointuotteen oikeellisuutta ei arvioida." }),
      /* @__PURE__ */ p.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Varmuuskopio sisältää harjoitustiedot, ei ääntä. Mikrofonikäyttö tarvitsee HTTPS:n tai paikallisen localhost-palvelimen." }),
      /* @__PURE__ */ p.jsxs("p", { children: [
        "Tunnistus on sovitettu ",
        /* @__PURE__ */ p.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
        " (MIT) ja käyttää Pitchyä. ",
        /* @__PURE__ */ p.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
        " · ",
        /* @__PURE__ */ p.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
        "."
      ] })
    ] })
  ] });
}
kd.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ p.jsx(Xd, {}));
//# sourceMappingURL=app.js.map
