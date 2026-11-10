function cd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var rs = { exports: {} }, Zr = {}, is = { exports: {} }, xe = {};
var Zu;
function fd() {
  if (Zu) return xe;
  Zu = 1;
  var o = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), m = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.provider"), x = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), te = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), A = Symbol.iterator;
  function X(y) {
    return y === null || typeof y != "object" ? null : (y = A && y[A] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var re = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, le = Object.assign, q = {};
  function I(y, E, ue) {
    this.props = y, this.context = E, this.refs = q, this.updater = ue || re;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(y, E) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, E, "setState");
  }, I.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function V() {
  }
  V.prototype = I.prototype;
  function oe(y, E, ue) {
    this.props = y, this.context = E, this.refs = q, this.updater = ue || re;
  }
  var O = oe.prototype = new V();
  O.constructor = oe, le(O, I.prototype), O.isPureReactComponent = !0;
  var J = Array.isArray, ee = Object.prototype.hasOwnProperty, Q = { current: null }, me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(y, E, ue) {
    var ce, ye = {}, ge = null, P = null;
    if (E != null) for (ce in E.ref !== void 0 && (P = E.ref), E.key !== void 0 && (ge = "" + E.key), E) ee.call(E, ce) && !me.hasOwnProperty(ce) && (ye[ce] = E[ce]);
    var L = arguments.length - 2;
    if (L === 1) ye.children = ue;
    else if (1 < L) {
      for (var R = Array(L), W = 0; W < L; W++) R[W] = arguments[W + 2];
      ye.children = R;
    }
    if (y && y.defaultProps) for (ce in L = y.defaultProps, L) ye[ce] === void 0 && (ye[ce] = L[ce]);
    return { $$typeof: o, type: y, key: ge, ref: P, props: ye, _owner: Q.current };
  }
  function Ae(y, E) {
    return { $$typeof: o, type: y.type, key: E, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function Se(y) {
    return typeof y == "object" && y !== null && y.$$typeof === o;
  }
  function Be(y) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(ue) {
      return E[ue];
    });
  }
  var Ie = /\/+/g;
  function Re(y, E) {
    return typeof y == "object" && y !== null && y.key != null ? Be("" + y.key) : E.toString(36);
  }
  function Oe(y, E, ue, ce, ye) {
    var ge = typeof y;
    (ge === "undefined" || ge === "boolean") && (y = null);
    var P = !1;
    if (y === null) P = !0;
    else switch (ge) {
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
    if (P) return P = y, ye = ye(P), y = ce === "" ? "." + Re(P, 0) : ce, J(ye) ? (ue = "", y != null && (ue = y.replace(Ie, "$&/") + "/"), Oe(ye, E, ue, "", function(W) {
      return W;
    })) : ye != null && (Se(ye) && (ye = Ae(ye, ue + (!ye.key || P && P.key === ye.key ? "" : ("" + ye.key).replace(Ie, "$&/") + "/") + y)), E.push(ye)), 1;
    if (P = 0, ce = ce === "" ? "." : ce + ":", J(y)) for (var L = 0; L < y.length; L++) {
      ge = y[L];
      var R = ce + Re(ge, L);
      P += Oe(ge, E, ue, R, ye);
    }
    else if (R = X(y), typeof R == "function") for (y = R.call(y), L = 0; !(ge = y.next()).done; ) ge = ge.value, R = ce + Re(ge, L++), P += Oe(ge, E, ue, R, ye);
    else if (ge === "object") throw E = String(y), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function De(y, E, ue) {
    if (y == null) return y;
    var ce = [], ye = 0;
    return Oe(y, ce, "", "", function(ge) {
      return E.call(ue, ge, ye++);
    }), ce;
  }
  function ke(y) {
    if (y._status === -1) {
      var E = y._result;
      E = E(), E.then(function(ue) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = ue);
      }, function(ue) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = ue);
      }), y._status === -1 && (y._status = 0, y._result = E);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var Z = { current: null }, C = { transition: null }, G = { ReactCurrentDispatcher: Z, ReactCurrentBatchConfig: C, ReactCurrentOwner: Q };
  function D() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return xe.Children = { map: De, forEach: function(y, E, ue) {
    De(y, function() {
      E.apply(this, arguments);
    }, ue);
  }, count: function(y) {
    var E = 0;
    return De(y, function() {
      E++;
    }), E;
  }, toArray: function(y) {
    return De(y, function(E) {
      return E;
    }) || [];
  }, only: function(y) {
    if (!Se(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, xe.Component = I, xe.Fragment = a, xe.Profiler = m, xe.PureComponent = oe, xe.StrictMode = d, xe.Suspense = T, xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, xe.act = D, xe.cloneElement = function(y, E, ue) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var ce = le({}, y.props), ye = y.key, ge = y.ref, P = y._owner;
    if (E != null) {
      if (E.ref !== void 0 && (ge = E.ref, P = Q.current), E.key !== void 0 && (ye = "" + E.key), y.type && y.type.defaultProps) var L = y.type.defaultProps;
      for (R in E) ee.call(E, R) && !me.hasOwnProperty(R) && (ce[R] = E[R] === void 0 && L !== void 0 ? L[R] : E[R]);
    }
    var R = arguments.length - 2;
    if (R === 1) ce.children = ue;
    else if (1 < R) {
      L = Array(R);
      for (var W = 0; W < R; W++) L[W] = arguments[W + 2];
      ce.children = L;
    }
    return { $$typeof: o, type: y.type, key: ye, ref: ge, props: ce, _owner: P };
  }, xe.createContext = function(y) {
    return y = { $$typeof: x, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: c, _context: y }, y.Consumer = y;
  }, xe.createElement = Pe, xe.createFactory = function(y) {
    var E = Pe.bind(null, y);
    return E.type = y, E;
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(y) {
    return { $$typeof: N, render: y };
  }, xe.isValidElement = Se, xe.lazy = function(y) {
    return { $$typeof: $, _payload: { _status: -1, _result: y }, _init: ke };
  }, xe.memo = function(y, E) {
    return { $$typeof: te, type: y, compare: E === void 0 ? null : E };
  }, xe.startTransition = function(y) {
    var E = C.transition;
    C.transition = {};
    try {
      y();
    } finally {
      C.transition = E;
    }
  }, xe.unstable_act = D, xe.useCallback = function(y, E) {
    return Z.current.useCallback(y, E);
  }, xe.useContext = function(y) {
    return Z.current.useContext(y);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(y) {
    return Z.current.useDeferredValue(y);
  }, xe.useEffect = function(y, E) {
    return Z.current.useEffect(y, E);
  }, xe.useId = function() {
    return Z.current.useId();
  }, xe.useImperativeHandle = function(y, E, ue) {
    return Z.current.useImperativeHandle(y, E, ue);
  }, xe.useInsertionEffect = function(y, E) {
    return Z.current.useInsertionEffect(y, E);
  }, xe.useLayoutEffect = function(y, E) {
    return Z.current.useLayoutEffect(y, E);
  }, xe.useMemo = function(y, E) {
    return Z.current.useMemo(y, E);
  }, xe.useReducer = function(y, E, ue) {
    return Z.current.useReducer(y, E, ue);
  }, xe.useRef = function(y) {
    return Z.current.useRef(y);
  }, xe.useState = function(y) {
    return Z.current.useState(y);
  }, xe.useSyncExternalStore = function(y, E, ue) {
    return Z.current.useSyncExternalStore(y, E, ue);
  }, xe.useTransition = function() {
    return Z.current.useTransition();
  }, xe.version = "18.3.1", xe;
}
var bu;
function hs() {
  return bu || (bu = 1, is.exports = fd()), is.exports;
}
var ec;
function dd() {
  if (ec) return Zr;
  ec = 1;
  var o = hs(), u = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, m = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(N, T, te) {
    var $, A = {}, X = null, re = null;
    te !== void 0 && (X = "" + te), T.key !== void 0 && (X = "" + T.key), T.ref !== void 0 && (re = T.ref);
    for ($ in T) d.call(T, $) && !c.hasOwnProperty($) && (A[$] = T[$]);
    if (N && N.defaultProps) for ($ in T = N.defaultProps, T) A[$] === void 0 && (A[$] = T[$]);
    return { $$typeof: u, type: N, key: X, ref: re, props: A, _owner: m.current };
  }
  return Zr.Fragment = a, Zr.jsx = x, Zr.jsxs = x, Zr;
}
var tc;
function hd() {
  return tc || (tc = 1, rs.exports = dd()), rs.exports;
}
var p = hd(), $e = hs(), ul = {}, ls = { exports: {} }, _t = {}, os = { exports: {} }, ss = {};
var nc;
function pd() {
  return nc || (nc = 1, (function(o) {
    function u(C, G) {
      var D = C.length;
      C.push(G);
      e: for (; 0 < D; ) {
        var y = D - 1 >>> 1, E = C[y];
        if (0 < m(E, G)) C[y] = G, C[D] = E, D = y;
        else break e;
      }
    }
    function a(C) {
      return C.length === 0 ? null : C[0];
    }
    function d(C) {
      if (C.length === 0) return null;
      var G = C[0], D = C.pop();
      if (D !== G) {
        C[0] = D;
        e: for (var y = 0, E = C.length, ue = E >>> 1; y < ue; ) {
          var ce = 2 * (y + 1) - 1, ye = C[ce], ge = ce + 1, P = C[ge];
          if (0 > m(ye, D)) ge < E && 0 > m(P, ye) ? (C[y] = P, C[ge] = D, y = ge) : (C[y] = ye, C[ce] = D, y = ce);
          else if (ge < E && 0 > m(P, D)) C[y] = P, C[ge] = D, y = ge;
          else break e;
        }
      }
      return G;
    }
    function m(C, G) {
      var D = C.sortIndex - G.sortIndex;
      return D !== 0 ? D : C.id - G.id;
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
    var T = [], te = [], $ = 1, A = null, X = 3, re = !1, le = !1, q = !1, I = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function O(C) {
      for (var G = a(te); G !== null; ) {
        if (G.callback === null) d(te);
        else if (G.startTime <= C) d(te), G.sortIndex = G.expirationTime, u(T, G);
        else break;
        G = a(te);
      }
    }
    function J(C) {
      if (q = !1, O(C), !le) if (a(T) !== null) le = !0, ke(ee);
      else {
        var G = a(te);
        G !== null && Z(J, G.startTime - C);
      }
    }
    function ee(C, G) {
      le = !1, q && (q = !1, V(Pe), Pe = -1), re = !0;
      var D = X;
      try {
        for (O(G), A = a(T); A !== null && (!(A.expirationTime > G) || C && !Be()); ) {
          var y = A.callback;
          if (typeof y == "function") {
            A.callback = null, X = A.priorityLevel;
            var E = y(A.expirationTime <= G);
            G = o.unstable_now(), typeof E == "function" ? A.callback = E : A === a(T) && d(T), O(G);
          } else d(T);
          A = a(T);
        }
        if (A !== null) var ue = !0;
        else {
          var ce = a(te);
          ce !== null && Z(J, ce.startTime - G), ue = !1;
        }
        return ue;
      } finally {
        A = null, X = D, re = !1;
      }
    }
    var Q = !1, me = null, Pe = -1, Ae = 5, Se = -1;
    function Be() {
      return !(o.unstable_now() - Se < Ae);
    }
    function Ie() {
      if (me !== null) {
        var C = o.unstable_now();
        Se = C;
        var G = !0;
        try {
          G = me(!0, C);
        } finally {
          G ? Re() : (Q = !1, me = null);
        }
      } else Q = !1;
    }
    var Re;
    if (typeof oe == "function") Re = function() {
      oe(Ie);
    };
    else if (typeof MessageChannel < "u") {
      var Oe = new MessageChannel(), De = Oe.port2;
      Oe.port1.onmessage = Ie, Re = function() {
        De.postMessage(null);
      };
    } else Re = function() {
      I(Ie, 0);
    };
    function ke(C) {
      me = C, Q || (Q = !0, Re());
    }
    function Z(C, G) {
      Pe = I(function() {
        C(o.unstable_now());
      }, G);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, o.unstable_continueExecution = function() {
      le || re || (le = !0, ke(ee));
    }, o.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ae = 0 < C ? Math.floor(1e3 / C) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, o.unstable_getFirstCallbackNode = function() {
      return a(T);
    }, o.unstable_next = function(C) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = X;
      }
      var D = X;
      X = G;
      try {
        return C();
      } finally {
        X = D;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(C, G) {
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
      var D = X;
      X = C;
      try {
        return G();
      } finally {
        X = D;
      }
    }, o.unstable_scheduleCallback = function(C, G, D) {
      var y = o.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? y + D : y) : D = y, C) {
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
      return E = D + E, C = { id: $++, callback: G, priorityLevel: C, startTime: D, expirationTime: E, sortIndex: -1 }, D > y ? (C.sortIndex = D, u(te, C), a(T) === null && C === a(te) && (q ? (V(Pe), Pe = -1) : q = !0, Z(J, D - y))) : (C.sortIndex = E, u(T, C), le || re || (le = !0, ke(ee))), C;
    }, o.unstable_shouldYield = Be, o.unstable_wrapCallback = function(C) {
      var G = X;
      return function() {
        var D = X;
        X = G;
        try {
          return C.apply(this, arguments);
        } finally {
          X = D;
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
  var N = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, te = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, A = {};
  function X(e) {
    return T.call(A, e) ? !0 : T.call($, e) ? !1 : te.test(e) ? A[e] = !0 : ($[e] = !0, !1);
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
  function le(e, t, n, r) {
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
  function q(e, t, n, r, i, l, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = s;
  }
  var I = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    I[e] = new q(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    I[t] = new q(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    I[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    I[e] = new q(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    I[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    I[e] = new q(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    I[e] = new q(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    I[e] = new q(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    I[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var V = /[\-:]([a-z])/g;
  function oe(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      V,
      oe
    );
    I[t] = new q(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(V, oe);
    I[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(V, oe);
    I[t] = new q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    I[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), I.xlinkHref = new q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    I[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function O(e, t, n, r) {
    var i = I.hasOwnProperty(t) ? I[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (le(t, n, i, r) && (n = null), r || i === null ? X(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var J = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ee = /* @__PURE__ */ Symbol.for("react.element"), Q = /* @__PURE__ */ Symbol.for("react.portal"), me = /* @__PURE__ */ Symbol.for("react.fragment"), Pe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ae = /* @__PURE__ */ Symbol.for("react.profiler"), Se = /* @__PURE__ */ Symbol.for("react.provider"), Be = /* @__PURE__ */ Symbol.for("react.context"), Ie = /* @__PURE__ */ Symbol.for("react.forward_ref"), Re = /* @__PURE__ */ Symbol.for("react.suspense"), Oe = /* @__PURE__ */ Symbol.for("react.suspense_list"), De = /* @__PURE__ */ Symbol.for("react.memo"), ke = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.offscreen"), C = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object" ? null : (e = C && e[C] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var D = Object.assign, y;
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
  var ue = !1;
  function ce(e, t) {
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
      ue = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function ye(e) {
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
        return e = ce(e.type, !1), e;
      case 11:
        return e = ce(e.type.render, !1), e;
      case 1:
        return e = ce(e.type, !0), e;
      default:
        return "";
    }
  }
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case me:
        return "Fragment";
      case Q:
        return "Portal";
      case Ae:
        return "Profiler";
      case Pe:
        return "StrictMode";
      case Re:
        return "Suspense";
      case Oe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Be:
        return (e.displayName || "Context") + ".Consumer";
      case Se:
        return (e._context.displayName || "Context") + ".Provider";
      case Ie:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case De:
        return t = e.displayName || null, t !== null ? t : ge(e.type) || "Memo";
      case ke:
        t = e._payload, e = e._init;
        try {
          return ge(e(t));
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
        return ge(t);
      case 8:
        return t === Pe ? "StrictMode" : "Mode";
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
  function b(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = R(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ne(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ie(e, t) {
    var n = t.checked;
    return D({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ee(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = L(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ve(e, t) {
    t = t.checked, t != null && O(e, "checked", t, !1);
  }
  function Ce(e, t) {
    ve(e, t);
    var n = L(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ze(e, t.type, n) : t.hasOwnProperty("defaultValue") && ze(e, t.type, L(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function He(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function ze(e, t, n) {
    (t !== "number" || ne(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Qe = Array.isArray;
  function Ve(e, t, n, r) {
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
    return D({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function z(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(a(92));
        if (Qe(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: L(n) };
  }
  function fe(e, t) {
    var n = L(t.value), r = L(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function je(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Fe(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function be(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Fe(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var $t, cn = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for ($t = $t || document.createElement("div"), $t.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = $t.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function he(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bt = {
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
  }, we = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bt).forEach(function(e) {
    we.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Bt[t] = Bt[e];
    });
  });
  function _e(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bt.hasOwnProperty(e) && Bt[e] ? ("" + t).trim() : t + "px";
  }
  function Ne(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = _e(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var qe = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function dt(e, t) {
    if (t) {
      if (qe[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function en(e, t) {
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
  var Rt = null;
  function Rn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var zn = null, zt = null, Gn = null;
  function ms(e) {
    if (e = Or(e)) {
      if (typeof zn != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = ji(t), zn(e.stateNode, e.type, t));
    }
  }
  function vs(e) {
    zt ? Gn ? Gn.push(e) : Gn = [e] : zt = e;
  }
  function ys() {
    if (zt) {
      var e = zt, t = Gn;
      if (Gn = zt = null, ms(e), t) for (e = 0; e < t.length; e++) ms(t[e]);
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
      kl = !1, (zt !== null || Gn !== null) && (ks(), ys());
    }
  }
  function vr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ji(n);
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
    var yr = {};
    Object.defineProperty(yr, "passive", { get: function() {
      wl = !0;
    } }), window.addEventListener("test", yr, yr), window.removeEventListener("test", yr, yr);
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
  var gr = !1, ni = null, ri = !1, xl = null, vc = { onError: function(e) {
    gr = !0, ni = e;
  } };
  function yc(e, t, n, r, i, l, s, f, h) {
    gr = !1, ni = null, mc.apply(vc, arguments);
  }
  function gc(e, t, n, r, i, l, s, f, h) {
    if (yc.apply(this, arguments), gr) {
      if (gr) {
        var w = ni;
        gr = !1, ni = null;
      } else throw Error(a(198));
      ri || (ri = !0, xl = w);
    }
  }
  function Fn(e) {
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
    if (Fn(e) !== e) throw Error(a(188));
  }
  function kc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Fn(e), t === null) throw Error(a(188));
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
  var _s = u.unstable_scheduleCallback, Cs = u.unstable_cancelCallback, wc = u.unstable_shouldYield, xc = u.unstable_requestPaint, et = u.unstable_now, Sc = u.unstable_getCurrentPriorityLevel, Sl = u.unstable_ImmediatePriority, Ns = u.unstable_UserBlockingPriority, ii = u.unstable_NormalPriority, Ec = u.unstable_LowPriority, Ts = u.unstable_IdlePriority, li = null, Yt = null;
  function jc(e) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function") try {
      Yt.onCommitFiberRoot(li, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Vt = Math.clz32 ? Math.clz32 : Nc, _c = Math.log, Cc = Math.LN2;
  function Nc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_c(e) / Cc | 0) | 0;
  }
  var oi = 64, si = 4194304;
  function kr(e) {
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
  function ai(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, l = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var f = s & ~i;
      f !== 0 ? r = kr(f) : (l &= s, l !== 0 && (r = kr(l)));
    } else s = n & ~i, s !== 0 ? r = kr(s) : l !== 0 && (r = kr(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Vt(t), i = 1 << n, r |= e[n], t &= ~i;
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
      var s = 31 - Vt(l), f = 1 << s, h = i[s];
      h === -1 ? ((f & n) === 0 || (f & r) !== 0) && (i[s] = Tc(f, t)) : h <= t && (e.expiredLanes |= f), l &= ~f;
    }
  }
  function El(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ms() {
    var e = oi;
    return oi <<= 1, (oi & 4194240) === 0 && (oi = 64), e;
  }
  function jl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function wr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Vt(t), e[t] = n;
  }
  function Pc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Vt(n), l = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l;
    }
  }
  function _l(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Vt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var Le = 0;
  function Ps(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Rs, Cl, zs, Fs, Ls, Nl = !1, ui = [], fn = null, dn = null, hn = null, xr = /* @__PURE__ */ new Map(), Sr = /* @__PURE__ */ new Map(), pn = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function As(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fn = null;
        break;
      case "dragenter":
      case "dragleave":
        dn = null;
        break;
      case "mouseover":
      case "mouseout":
        hn = null;
        break;
      case "pointerover":
      case "pointerout":
        xr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sr.delete(t.pointerId);
    }
  }
  function Er(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }, t !== null && (t = Or(t), t !== null && Cl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function zc(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return fn = Er(fn, e, t, n, r, i), !0;
      case "dragenter":
        return dn = Er(dn, e, t, n, r, i), !0;
      case "mouseover":
        return hn = Er(hn, e, t, n, r, i), !0;
      case "pointerover":
        var l = i.pointerId;
        return xr.set(l, Er(xr.get(l) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return l = i.pointerId, Sr.set(l, Er(Sr.get(l) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Is(e) {
    var t = Ln(e.target);
    if (t !== null) {
      var n = Fn(t);
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
  function ci(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ml(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Rt = r, n.target.dispatchEvent(r), Rt = null;
      } else return t = Or(n), t !== null && Cl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Os(e, t, n) {
    ci(e) && n.delete(t);
  }
  function Fc() {
    Nl = !1, fn !== null && ci(fn) && (fn = null), dn !== null && ci(dn) && (dn = null), hn !== null && ci(hn) && (hn = null), xr.forEach(Os), Sr.forEach(Os);
  }
  function jr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Nl || (Nl = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Fc)));
  }
  function _r(e) {
    function t(i) {
      return jr(i, e);
    }
    if (0 < ui.length) {
      jr(ui[0], e);
      for (var n = 1; n < ui.length; n++) {
        var r = ui[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (fn !== null && jr(fn, e), dn !== null && jr(dn, e), hn !== null && jr(hn, e), xr.forEach(t), Sr.forEach(t), n = 0; n < pn.length; n++) r = pn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < pn.length && (n = pn[0], n.blockedOn === null); ) Is(n), n.blockedOn === null && pn.shift();
  }
  var Yn = J.ReactCurrentBatchConfig, fi = !0;
  function Lc(e, t, n, r) {
    var i = Le, l = Yn.transition;
    Yn.transition = null;
    try {
      Le = 1, Tl(e, t, n, r);
    } finally {
      Le = i, Yn.transition = l;
    }
  }
  function Ac(e, t, n, r) {
    var i = Le, l = Yn.transition;
    Yn.transition = null;
    try {
      Le = 4, Tl(e, t, n, r);
    } finally {
      Le = i, Yn.transition = l;
    }
  }
  function Tl(e, t, n, r) {
    if (fi) {
      var i = Ml(e, t, n, r);
      if (i === null) Ql(e, t, r, di, n), As(e, r);
      else if (zc(i, e, t, n, r)) r.stopPropagation();
      else if (As(e, r), t & 4 && -1 < Rc.indexOf(e)) {
        for (; i !== null; ) {
          var l = Or(i);
          if (l !== null && Rs(l), l = Ml(e, t, n, r), l === null && Ql(e, t, r, di, n), l === i) break;
          i = l;
        }
        i !== null && r.stopPropagation();
      } else Ql(e, t, r, null, n);
    }
  }
  var di = null;
  function Ml(e, t, n, r) {
    if (di = null, e = Rn(r), e = Ln(e), e !== null) if (t = Fn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = xs(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return di = e, null;
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
          case ii:
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
  var mn = null, Pl = null, hi = null;
  function $s() {
    if (hi) return hi;
    var e, t = Pl, n = t.length, r, i = "value" in mn ? mn.value : mn.textContent, l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[l - r]; r++) ;
    return hi = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function pi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function mi() {
    return !0;
  }
  function Bs() {
    return !1;
  }
  function Ct(e) {
    function t(n, r, i, l, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = s, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(l) : l[f]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? mi : Bs, this.isPropagationStopped = Bs, this;
    }
    return D(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = mi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = mi);
    }, persist: function() {
    }, isPersistent: mi }), t;
  }
  var Xn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Rl = Ct(Xn), Cr = D({}, Xn, { view: 0, detail: 0 }), Ic = Ct(Cr), zl, Fl, Nr, vi = D({}, Cr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Al, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Nr && (Nr && e.type === "mousemove" ? (zl = e.screenX - Nr.screenX, Fl = e.screenY - Nr.screenY) : Fl = zl = 0, Nr = e), zl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Fl;
  } }), Vs = Ct(vi), Oc = D({}, vi, { dataTransfer: 0 }), Dc = Ct(Oc), $c = D({}, Cr, { relatedTarget: 0 }), Ll = Ct($c), Bc = D({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vc = Ct(Bc), Uc = D({}, Xn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Hc = Ct(Uc), Wc = D({}, Xn, { data: 0 }), Us = Ct(Wc), Kc = {
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
  var Xc = D({}, Cr, { key: function(e) {
    if (e.key) {
      var t = Kc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = pi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Al, charCode: function(e) {
    return e.type === "keypress" ? pi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), qc = Ct(Xc), Jc = D({}, vi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hs = Ct(Jc), Zc = D({}, Cr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Al }), bc = Ct(Zc), ef = D({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tf = Ct(ef), nf = D({}, vi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), rf = Ct(nf), lf = [9, 13, 27, 32], Il = N && "CompositionEvent" in window, Tr = null;
  N && "documentMode" in document && (Tr = document.documentMode);
  var of = N && "TextEvent" in window && !Tr, Ws = N && (!Il || Tr && 8 < Tr && 11 >= Tr), Ks = " ", Qs = !1;
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
  var qn = !1;
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
    if (qn) return e === "compositionend" || !Il && Gs(e, t) ? (e = $s(), hi = Pl = mn = null, qn = !1, e) : null;
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
    vs(r), t = xi(t, "onChange"), 0 < t.length && (n = new Rl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Mr = null, Pr = null;
  function cf(e) {
    pa(e, 0);
  }
  function yi(e) {
    var t = tr(e);
    if (b(t)) return e;
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
    Mr && (Mr.detachEvent("onpropertychange", ea), Pr = Mr = null);
  }
  function ea(e) {
    if (e.propertyName === "value" && yi(Pr)) {
      var t = [];
      qs(t, Pr, e, Rn(e)), ws(cf, t);
    }
  }
  function df(e, t, n) {
    e === "focusin" ? (bs(), Mr = t, Pr = n, Mr.attachEvent("onpropertychange", ea)) : e === "focusout" && bs();
  }
  function hf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return yi(Pr);
  }
  function pf(e, t) {
    if (e === "click") return yi(t);
  }
  function mf(e, t) {
    if (e === "input" || e === "change") return yi(t);
  }
  function vf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ut = typeof Object.is == "function" ? Object.is : vf;
  function Rr(e, t) {
    if (Ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!T.call(t, i) || !Ut(e[i], t[i])) return !1;
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
    for (var e = window, t = ne(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ne(e.document);
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
  var gf = N && "documentMode" in document && 11 >= document.documentMode, Jn = null, Bl = null, zr = null, Vl = !1;
  function la(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Vl || Jn == null || Jn !== ne(r) || (r = Jn, "selectionStart" in r && $l(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), zr && Rr(zr, r) || (zr = r, r = xi(Bl, "onSelect"), 0 < r.length && (t = new Rl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Jn)));
  }
  function gi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Zn = { animationend: gi("Animation", "AnimationEnd"), animationiteration: gi("Animation", "AnimationIteration"), animationstart: gi("Animation", "AnimationStart"), transitionend: gi("Transition", "TransitionEnd") }, Ul = {}, oa = {};
  N && (oa = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);
  function ki(e) {
    if (Ul[e]) return Ul[e];
    if (!Zn[e]) return e;
    var t = Zn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in oa) return Ul[e] = t[n];
    return e;
  }
  var sa = ki("animationend"), aa = ki("animationiteration"), ua = ki("animationstart"), ca = ki("transitionend"), fa = /* @__PURE__ */ new Map(), da = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function vn(e, t) {
    fa.set(e, t), c(t, [e]);
  }
  for (var Hl = 0; Hl < da.length; Hl++) {
    var Wl = da[Hl], kf = Wl.toLowerCase(), wf = Wl[0].toUpperCase() + Wl.slice(1);
    vn(kf, "on" + wf);
  }
  vn(sa, "onAnimationEnd"), vn(aa, "onAnimationIteration"), vn(ua, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(ca, "onTransitionEnd"), x("onMouseEnter", ["mouseout", "mouseover"]), x("onMouseLeave", ["mouseout", "mouseover"]), x("onPointerEnter", ["pointerout", "pointerover"]), x("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
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
    if (ri) throw e = xl, ri = !1, xl = null, e;
  }
  function We(e, t) {
    var n = t[Zl];
    n === void 0 && (n = t[Zl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ma(t, e, 2, !1), n.add(r));
  }
  function Kl(e, t, n) {
    var r = 0;
    t && (r |= 4), ma(n, e, r, t);
  }
  var wi = "_reactListening" + Math.random().toString(36).slice(2);
  function Lr(e) {
    if (!e[wi]) {
      e[wi] = !0, d.forEach(function(n) {
        n !== "selectionchange" && (xf.has(n) || Kl(n, !1, e), Kl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[wi] || (t[wi] = !0, Kl("selectionchange", !1, t));
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
          if (s = Ln(f), s === null) return;
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
      var w = l, _ = Rn(n), M = [];
      e: {
        var j = fa.get(e);
        if (j !== void 0) {
          var B = Rl, H = e;
          switch (e) {
            case "keypress":
              if (pi(n) === 0) break e;
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
          var K = (t & 4) !== 0, tt = !K && e === "scroll", g = K ? j !== null ? j + "Capture" : null : j;
          K = [];
          for (var v = w, k; v !== null; ) {
            k = v;
            var F = k.stateNode;
            if (k.tag === 5 && F !== null && (k = F, g !== null && (F = vr(v, g), F != null && K.push(Ar(v, F, k)))), tt) break;
            v = v.return;
          }
          0 < K.length && (j = new B(j, H, null, n, _), M.push({ event: j, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", j && n !== Rt && (H = n.relatedTarget || n.fromElement) && (Ln(H) || H[tn])) break e;
          if ((B || j) && (j = _.window === _ ? _ : (j = _.ownerDocument) ? j.defaultView || j.parentWindow : window, B ? (H = n.relatedTarget || n.toElement, B = w, H = H ? Ln(H) : null, H !== null && (tt = Fn(H), H !== tt || H.tag !== 5 && H.tag !== 6) && (H = null)) : (B = null, H = w), B !== H)) {
            if (K = Vs, F = "onMouseLeave", g = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (K = Hs, F = "onPointerLeave", g = "onPointerEnter", v = "pointer"), tt = B == null ? j : tr(B), k = H == null ? j : tr(H), j = new K(F, v + "leave", B, n, _), j.target = tt, j.relatedTarget = k, F = null, Ln(_) === w && (K = new K(g, v + "enter", H, n, _), K.target = k, K.relatedTarget = tt, F = K), tt = F, B && H) t: {
              for (K = B, g = H, v = 0, k = K; k; k = bn(k)) v++;
              for (k = 0, F = g; F; F = bn(F)) k++;
              for (; 0 < v - k; ) K = bn(K), v--;
              for (; 0 < k - v; ) g = bn(g), k--;
              for (; v--; ) {
                if (K === g || g !== null && K === g.alternate) break t;
                K = bn(K), g = bn(g);
              }
              K = null;
            }
            else K = null;
            B !== null && va(M, j, B, K, !1), H !== null && tt !== null && va(M, tt, H, K, !0);
          }
        }
        e: {
          if (j = w ? tr(w) : window, B = j.nodeName && j.nodeName.toLowerCase(), B === "select" || B === "input" && j.type === "file") var Y = ff;
          else if (Xs(j)) if (Js) Y = mf;
          else {
            Y = hf;
            var se = df;
          }
          else (B = j.nodeName) && B.toLowerCase() === "input" && (j.type === "checkbox" || j.type === "radio") && (Y = pf);
          if (Y && (Y = Y(e, w))) {
            qs(M, Y, n, _);
            break e;
          }
          se && se(e, j, w), e === "focusout" && (se = j._wrapperState) && se.controlled && j.type === "number" && ze(j, "number", j.value);
        }
        switch (se = w ? tr(w) : window, e) {
          case "focusin":
            (Xs(se) || se.contentEditable === "true") && (Jn = se, Bl = w, zr = null);
            break;
          case "focusout":
            zr = Bl = Jn = null;
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
        var ae;
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
        else qn ? Gs(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (Ws && n.locale !== "ko" && (qn || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && qn && (ae = $s()) : (mn = _, Pl = "value" in mn ? mn.value : mn.textContent, qn = !0)), se = xi(w, pe), 0 < se.length && (pe = new Us(pe, e, null, n, _), M.push({ event: pe, listeners: se }), ae ? pe.data = ae : (ae = Ys(n), ae !== null && (pe.data = ae)))), (ae = of ? sf(e, n) : af(e, n)) && (w = xi(w, "onBeforeInput"), 0 < w.length && (_ = new Us("onBeforeInput", "beforeinput", null, n, _), M.push({ event: _, listeners: w }), _.data = ae));
      }
      pa(M, t);
    });
  }
  function Ar(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function xi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, l = i.stateNode;
      i.tag === 5 && l !== null && (i = l, l = vr(e, n), l != null && r.unshift(Ar(e, l, i)), l = vr(e, t), l != null && r.push(Ar(e, l, i))), e = e.return;
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
  function va(e, t, n, r, i) {
    for (var l = t._reactName, s = []; n !== null && n !== r; ) {
      var f = n, h = f.alternate, w = f.stateNode;
      if (h !== null && h === r) break;
      f.tag === 5 && w !== null && (f = w, i ? (h = vr(n, l), h != null && s.unshift(Ar(n, h, f))) : i || (h = vr(n, l), h != null && s.push(Ar(n, h, f)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Sf = /\r\n?/g, Ef = /\u0000|\uFFFD/g;
  function ya(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sf, `
`).replace(Ef, "");
  }
  function Si(e, t, n) {
    if (t = ya(t), ya(e) !== t && n) throw Error(a(425));
  }
  function Ei() {
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
          e.removeChild(i), _r(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    _r(t);
  }
  function yn(e) {
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
  var er = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + er, Ir = "__reactProps$" + er, tn = "__reactContainer$" + er, Zl = "__reactEvents$" + er, Nf = "__reactListeners$" + er, Tf = "__reactHandles$" + er;
  function Ln(e) {
    var t = e[Xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[tn] || n[Xt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ka(e); e !== null; ) {
          if (n = e[Xt]) return n;
          e = ka(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Or(e) {
    return e = e[Xt] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function tr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function ji(e) {
    return e[Ir] || null;
  }
  var bl = [], nr = -1;
  function gn(e) {
    return { current: e };
  }
  function Ke(e) {
    0 > nr || (e.current = bl[nr], bl[nr] = null, nr--);
  }
  function Ue(e, t) {
    nr++, bl[nr] = e.current, e.current = t;
  }
  var kn = {}, ht = gn(kn), wt = gn(!1), An = kn;
  function rr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return kn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, l;
    for (l in n) i[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function xt(e) {
    return e = e.childContextTypes, e != null;
  }
  function _i() {
    Ke(wt), Ke(ht);
  }
  function wa(e, t, n) {
    if (ht.current !== kn) throw Error(a(168));
    Ue(ht, t), Ue(wt, n);
  }
  function xa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(a(108, P(e) || "Unknown", i));
    return D({}, n, r);
  }
  function Ci(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kn, An = ht.current, Ue(ht, e), Ue(wt, wt.current), !0;
  }
  function Sa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n ? (e = xa(e, t, An), r.__reactInternalMemoizedMergedChildContext = e, Ke(wt), Ke(ht), Ue(ht, e)) : Ke(wt), Ue(wt, n);
  }
  var nn = null, Ni = !1, eo = !1;
  function Ea(e) {
    nn === null ? nn = [e] : nn.push(e);
  }
  function Mf(e) {
    Ni = !0, Ea(e);
  }
  function wn() {
    if (!eo && nn !== null) {
      eo = !0;
      var e = 0, t = Le;
      try {
        var n = nn;
        for (Le = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        nn = null, Ni = !1;
      } catch (i) {
        throw nn !== null && (nn = nn.slice(e + 1)), _s(Sl, wn), i;
      } finally {
        Le = t, eo = !1;
      }
    }
    return null;
  }
  var ir = [], lr = 0, Ti = null, Mi = 0, Ft = [], Lt = 0, In = null, rn = 1, ln = "";
  function On(e, t) {
    ir[lr++] = Mi, ir[lr++] = Ti, Ti = e, Mi = t;
  }
  function ja(e, t, n) {
    Ft[Lt++] = rn, Ft[Lt++] = ln, Ft[Lt++] = In, In = e;
    var r = rn;
    e = ln;
    var i = 32 - Vt(r) - 1;
    r &= ~(1 << i), n += 1;
    var l = 32 - Vt(t) + i;
    if (30 < l) {
      var s = i - i % 5;
      l = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, rn = 1 << 32 - Vt(t) + i | n << i | r, ln = l + e;
    } else rn = 1 << l | n << i | r, ln = e;
  }
  function to(e) {
    e.return !== null && (On(e, 1), ja(e, 1, 0));
  }
  function no(e) {
    for (; e === Ti; ) Ti = ir[--lr], ir[lr] = null, Mi = ir[--lr], ir[lr] = null;
    for (; e === In; ) In = Ft[--Lt], Ft[Lt] = null, ln = Ft[--Lt], Ft[Lt] = null, rn = Ft[--Lt], Ft[Lt] = null;
  }
  var Nt = null, Tt = null, Ge = !1, Ht = null;
  function _a(e, t) {
    var n = Dt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Ca(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Nt = e, Tt = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Nt = e, Tt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = In !== null ? { id: rn, overflow: ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Dt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Nt = e, Tt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ro(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function io(e) {
    if (Ge) {
      var t = Tt;
      if (t) {
        var n = t;
        if (!Ca(e, t)) {
          if (ro(e)) throw Error(a(418));
          t = yn(n.nextSibling);
          var r = Nt;
          t && Ca(e, t) ? _a(r, n) : (e.flags = e.flags & -4097 | 2, Ge = !1, Nt = e);
        }
      } else {
        if (ro(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, Ge = !1, Nt = e;
      }
    }
  }
  function Na(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Nt = e;
  }
  function Pi(e) {
    if (e !== Nt) return !1;
    if (!Ge) return Na(e), Ge = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xl(e.type, e.memoizedProps)), t && (t = Tt)) {
      if (ro(e)) throw Ta(), Error(a(418));
      for (; t; ) _a(e, t), t = yn(t.nextSibling);
    }
    if (Na(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Tt = yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Tt = null;
      }
    } else Tt = Nt ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ta() {
    for (var e = Tt; e; ) e = yn(e.nextSibling);
  }
  function or() {
    Tt = Nt = null, Ge = !1;
  }
  function lo(e) {
    Ht === null ? Ht = [e] : Ht.push(e);
  }
  var Pf = J.ReactCurrentBatchConfig;
  function Dr(e, t, n) {
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
  function Ri(e, t) {
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
      return g = Tn(g, v), g.index = 0, g.sibling = null, g;
    }
    function l(g, v, k) {
      return g.index = k, e ? (k = g.alternate, k !== null ? (k = k.index, k < v ? (g.flags |= 2, v) : k) : (g.flags |= 2, v)) : (g.flags |= 1048576, v);
    }
    function s(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function f(g, v, k, F) {
      return v === null || v.tag !== 6 ? (v = Jo(k, g.mode, F), v.return = g, v) : (v = i(v, k), v.return = g, v);
    }
    function h(g, v, k, F) {
      var Y = k.type;
      return Y === me ? _(g, v, k.props.children, F, k.key) : v !== null && (v.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === ke && Ma(Y) === v.type) ? (F = i(v, k.props), F.ref = Dr(g, v, k), F.return = g, F) : (F = tl(k.type, k.key, k.props, null, g.mode, F), F.ref = Dr(g, v, k), F.return = g, F);
    }
    function w(g, v, k, F) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== k.containerInfo || v.stateNode.implementation !== k.implementation ? (v = Zo(k, g.mode, F), v.return = g, v) : (v = i(v, k.children || []), v.return = g, v);
    }
    function _(g, v, k, F, Y) {
      return v === null || v.tag !== 7 ? (v = Kn(k, g.mode, F, Y), v.return = g, v) : (v = i(v, k), v.return = g, v);
    }
    function M(g, v, k) {
      if (typeof v == "string" && v !== "" || typeof v == "number") return v = Jo("" + v, g.mode, k), v.return = g, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ee:
            return k = tl(v.type, v.key, v.props, null, g.mode, k), k.ref = Dr(g, null, v), k.return = g, k;
          case Q:
            return v = Zo(v, g.mode, k), v.return = g, v;
          case ke:
            var F = v._init;
            return M(g, F(v._payload), k);
        }
        if (Qe(v) || G(v)) return v = Kn(v, g.mode, k, null), v.return = g, v;
        Ri(g, v);
      }
      return null;
    }
    function j(g, v, k, F) {
      var Y = v !== null ? v.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number") return Y !== null ? null : f(g, v, "" + k, F);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case ee:
            return k.key === Y ? h(g, v, k, F) : null;
          case Q:
            return k.key === Y ? w(g, v, k, F) : null;
          case ke:
            return Y = k._init, j(
              g,
              v,
              Y(k._payload),
              F
            );
        }
        if (Qe(k) || G(k)) return Y !== null ? null : _(g, v, k, F, null);
        Ri(g, k);
      }
      return null;
    }
    function B(g, v, k, F, Y) {
      if (typeof F == "string" && F !== "" || typeof F == "number") return g = g.get(k) || null, f(v, g, "" + F, Y);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case ee:
            return g = g.get(F.key === null ? k : F.key) || null, h(v, g, F, Y);
          case Q:
            return g = g.get(F.key === null ? k : F.key) || null, w(v, g, F, Y);
          case ke:
            var se = F._init;
            return B(g, v, k, se(F._payload), Y);
        }
        if (Qe(F) || G(F)) return g = g.get(k) || null, _(v, g, F, Y, null);
        Ri(v, F);
      }
      return null;
    }
    function H(g, v, k, F) {
      for (var Y = null, se = null, ae = v, pe = v = 0, at = null; ae !== null && pe < k.length; pe++) {
        ae.index > pe ? (at = ae, ae = null) : at = ae.sibling;
        var Me = j(g, ae, k[pe], F);
        if (Me === null) {
          ae === null && (ae = at);
          break;
        }
        e && ae && Me.alternate === null && t(g, ae), v = l(Me, v, pe), se === null ? Y = Me : se.sibling = Me, se = Me, ae = at;
      }
      if (pe === k.length) return n(g, ae), Ge && On(g, pe), Y;
      if (ae === null) {
        for (; pe < k.length; pe++) ae = M(g, k[pe], F), ae !== null && (v = l(ae, v, pe), se === null ? Y = ae : se.sibling = ae, se = ae);
        return Ge && On(g, pe), Y;
      }
      for (ae = r(g, ae); pe < k.length; pe++) at = B(ae, g, pe, k[pe], F), at !== null && (e && at.alternate !== null && ae.delete(at.key === null ? pe : at.key), v = l(at, v, pe), se === null ? Y = at : se.sibling = at, se = at);
      return e && ae.forEach(function(Mn) {
        return t(g, Mn);
      }), Ge && On(g, pe), Y;
    }
    function K(g, v, k, F) {
      var Y = G(k);
      if (typeof Y != "function") throw Error(a(150));
      if (k = Y.call(k), k == null) throw Error(a(151));
      for (var se = Y = null, ae = v, pe = v = 0, at = null, Me = k.next(); ae !== null && !Me.done; pe++, Me = k.next()) {
        ae.index > pe ? (at = ae, ae = null) : at = ae.sibling;
        var Mn = j(g, ae, Me.value, F);
        if (Mn === null) {
          ae === null && (ae = at);
          break;
        }
        e && ae && Mn.alternate === null && t(g, ae), v = l(Mn, v, pe), se === null ? Y = Mn : se.sibling = Mn, se = Mn, ae = at;
      }
      if (Me.done) return n(
        g,
        ae
      ), Ge && On(g, pe), Y;
      if (ae === null) {
        for (; !Me.done; pe++, Me = k.next()) Me = M(g, Me.value, F), Me !== null && (v = l(Me, v, pe), se === null ? Y = Me : se.sibling = Me, se = Me);
        return Ge && On(g, pe), Y;
      }
      for (ae = r(g, ae); !Me.done; pe++, Me = k.next()) Me = B(ae, g, pe, Me.value, F), Me !== null && (e && Me.alternate !== null && ae.delete(Me.key === null ? pe : Me.key), v = l(Me, v, pe), se === null ? Y = Me : se.sibling = Me, se = Me);
      return e && ae.forEach(function(ud) {
        return t(g, ud);
      }), Ge && On(g, pe), Y;
    }
    function tt(g, v, k, F) {
      if (typeof k == "object" && k !== null && k.type === me && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case ee:
            e: {
              for (var Y = k.key, se = v; se !== null; ) {
                if (se.key === Y) {
                  if (Y = k.type, Y === me) {
                    if (se.tag === 7) {
                      n(g, se.sibling), v = i(se, k.props.children), v.return = g, g = v;
                      break e;
                    }
                  } else if (se.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === ke && Ma(Y) === se.type) {
                    n(g, se.sibling), v = i(se, k.props), v.ref = Dr(g, se, k), v.return = g, g = v;
                    break e;
                  }
                  n(g, se);
                  break;
                } else t(g, se);
                se = se.sibling;
              }
              k.type === me ? (v = Kn(k.props.children, g.mode, F, k.key), v.return = g, g = v) : (F = tl(k.type, k.key, k.props, null, g.mode, F), F.ref = Dr(g, v, k), F.return = g, g = F);
            }
            return s(g);
          case Q:
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
              v = Zo(k, g.mode, F), v.return = g, g = v;
            }
            return s(g);
          case ke:
            return se = k._init, tt(g, v, se(k._payload), F);
        }
        if (Qe(k)) return H(g, v, k, F);
        if (G(k)) return K(g, v, k, F);
        Ri(g, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, v !== null && v.tag === 6 ? (n(g, v.sibling), v = i(v, k), v.return = g, g = v) : (n(g, v), v = Jo(k, g.mode, F), v.return = g, g = v), s(g)) : n(g, v);
    }
    return tt;
  }
  var sr = Pa(!0), Ra = Pa(!1), zi = gn(null), Fi = null, ar = null, oo = null;
  function so() {
    oo = ar = Fi = null;
  }
  function ao(e) {
    var t = zi.current;
    Ke(zi), e._currentValue = t;
  }
  function uo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ur(e, t) {
    Fi = e, oo = ar = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (St = !0), e.firstContext = null);
  }
  function At(e) {
    var t = e._currentValue;
    if (oo !== e) if (e = { context: e, memoizedValue: t, next: null }, ar === null) {
      if (Fi === null) throw Error(a(308));
      ar = e, Fi.dependencies = { lanes: 0, firstContext: e };
    } else ar = ar.next = e;
    return t;
  }
  var Dn = null;
  function co(e) {
    Dn === null ? Dn = [e] : Dn.push(e);
  }
  function za(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, co(t)) : (n.next = i.next, i.next = n), t.interleaved = n, on(e, r);
  }
  function on(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var xn = !1;
  function fo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fa(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function sn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Sn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Te & 2) !== 0) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, on(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, co(r)) : (t.next = i.next, i.next = t), r.interleaved = t, on(e, n);
  }
  function Li(e, t, n) {
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
  function Ai(e, t, n, r) {
    var i = e.updateQueue;
    xn = !1;
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
                M = D({}, M, j);
                break e;
              case 2:
                xn = !0;
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
      Vn |= s, e.lanes = s, e.memoizedState = M;
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
  var $r = {}, qt = gn($r), Br = gn($r), Vr = gn($r);
  function $n(e) {
    if (e === $r) throw Error(a(174));
    return e;
  }
  function ho(e, t) {
    switch (Ue(Vr, t), Ue(Br, e), Ue(qt, $r), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : be(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = be(t, e);
    }
    Ke(qt), Ue(qt, t);
  }
  function cr() {
    Ke(qt), Ke(Br), Ke(Vr);
  }
  function Ia(e) {
    $n(Vr.current);
    var t = $n(qt.current), n = be(t, e.type);
    t !== n && (Ue(Br, e), Ue(qt, n));
  }
  function po(e) {
    Br.current === e && (Ke(qt), Ke(Br));
  }
  var Ye = gn(0);
  function Ii(e) {
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
  var Oi = J.ReactCurrentDispatcher, yo = J.ReactCurrentBatchConfig, Bn = 0, Xe = null, it = null, ot = null, Di = !1, Ur = !1, Hr = 0, Rf = 0;
  function pt() {
    throw Error(a(321));
  }
  function go(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ut(e[n], t[n])) return !1;
    return !0;
  }
  function ko(e, t, n, r, i, l) {
    if (Bn = l, Xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Oi.current = e === null || e.memoizedState === null ? Af : If, e = n(r, i), Ur) {
      l = 0;
      do {
        if (Ur = !1, Hr = 0, 25 <= l) throw Error(a(301));
        l += 1, ot = it = null, t.updateQueue = null, Oi.current = Of, e = n(r, i);
      } while (Ur);
    }
    if (Oi.current = Vi, t = it !== null && it.next !== null, Bn = 0, ot = it = Xe = null, Di = !1, t) throw Error(a(300));
    return e;
  }
  function wo() {
    var e = Hr !== 0;
    return Hr = 0, e;
  }
  function Jt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ot === null ? Xe.memoizedState = ot = e : ot = ot.next = e, ot;
  }
  function It() {
    if (it === null) {
      var e = Xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = it.next;
    var t = ot === null ? Xe.memoizedState : ot.next;
    if (t !== null) ot = t, it = e;
    else {
      if (e === null) throw Error(a(310));
      it = e, e = { memoizedState: it.memoizedState, baseState: it.baseState, baseQueue: it.baseQueue, queue: it.queue, next: null }, ot === null ? Xe.memoizedState = ot = e : ot = ot.next = e;
    }
    return ot;
  }
  function Wr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function xo(e) {
    var t = It(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = it, i = r.baseQueue, l = n.pending;
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
        if ((Bn & _) === _) h !== null && (h = h.next = { lane: 0, action: w.action, hasEagerState: w.hasEagerState, eagerState: w.eagerState, next: null }), r = w.hasEagerState ? w.eagerState : e(r, w.action);
        else {
          var M = {
            lane: _,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          };
          h === null ? (f = h = M, s = r) : h = h.next = M, Xe.lanes |= _, Vn |= _;
        }
        w = w.next;
      } while (w !== null && w !== l);
      h === null ? s = r : h.next = f, Ut(r, t.memoizedState) || (St = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = h, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        l = i.lane, Xe.lanes |= l, Vn |= l, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function So(e) {
    var t = It(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, l = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do
        l = e(l, s.action), s = s.next;
      while (s !== i);
      Ut(l, t.memoizedState) || (St = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, r];
  }
  function Oa() {
  }
  function Da(e, t) {
    var n = Xe, r = It(), i = t(), l = !Ut(r.memoizedState, i);
    if (l && (r.memoizedState = i, St = !0), r = r.queue, Eo(Va.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || ot !== null && ot.memoizedState.tag & 1) {
      if (n.flags |= 2048, Kr(9, Ba.bind(null, n, r, i, t), void 0, null), st === null) throw Error(a(349));
      (Bn & 30) !== 0 || $a(n, t, i);
    }
    return i;
  }
  function $a(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !Ut(e, n);
    } catch {
      return !0;
    }
  }
  function Ha(e) {
    var t = on(e, 1);
    t !== null && Gt(t, e, 1, -1);
  }
  function Wa(e) {
    var t = Jt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Wr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Lf.bind(null, Xe, e), [t.memoizedState, e];
  }
  function Kr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Xe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ka() {
    return It().memoizedState;
  }
  function $i(e, t, n, r) {
    var i = Jt();
    Xe.flags |= e, i.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Bi(e, t, n, r) {
    var i = It();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (it !== null) {
      var s = it.memoizedState;
      if (l = s.destroy, r !== null && go(r, s.deps)) {
        i.memoizedState = Kr(t, n, l, r);
        return;
      }
    }
    Xe.flags |= e, i.memoizedState = Kr(1 | t, n, l, r);
  }
  function Qa(e, t) {
    return $i(8390656, 8, e, t);
  }
  function Eo(e, t) {
    return Bi(2048, 8, e, t);
  }
  function Ga(e, t) {
    return Bi(4, 2, e, t);
  }
  function Ya(e, t) {
    return Bi(4, 4, e, t);
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
    return n = n != null ? n.concat([e]) : null, Bi(4, 4, Xa.bind(null, t, e), n);
  }
  function jo() {
  }
  function Ja(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Za(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ba(e, t, n) {
    return (Bn & 21) === 0 ? (e.baseState && (e.baseState = !1, St = !0), e.memoizedState = n) : (Ut(n, t) || (n = Ms(), Xe.lanes |= n, Vn |= n, e.baseState = !0), t);
  }
  function zf(e, t) {
    var n = Le;
    Le = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = yo.transition;
    yo.transition = {};
    try {
      e(!1), t();
    } finally {
      Le = n, yo.transition = r;
    }
  }
  function eu() {
    return It().memoizedState;
  }
  function Ff(e, t, n) {
    var r = Cn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, tu(e)) nu(t, n);
    else if (n = za(e, t, n, r), n !== null) {
      var i = kt();
      Gt(n, e, r, i), ru(n, t, r);
    }
  }
  function Lf(e, t, n) {
    var r = Cn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (tu(e)) nu(t, i);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
        var s = t.lastRenderedState, f = l(s, n);
        if (i.hasEagerState = !0, i.eagerState = f, Ut(f, s)) {
          var h = t.interleaved;
          h === null ? (i.next = i, co(t)) : (i.next = h.next, h.next = i), t.interleaved = i;
          return;
        }
      } catch {
      }
      n = za(e, t, i, r), n !== null && (i = kt(), Gt(n, e, r, i), ru(n, t, r));
    }
  }
  function tu(e) {
    var t = e.alternate;
    return e === Xe || t !== null && t === Xe;
  }
  function nu(e, t) {
    Ur = Di = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ru(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, _l(e, n);
    }
  }
  var Vi = { readContext: At, useCallback: pt, useContext: pt, useEffect: pt, useImperativeHandle: pt, useInsertionEffect: pt, useLayoutEffect: pt, useMemo: pt, useReducer: pt, useRef: pt, useState: pt, useDebugValue: pt, useDeferredValue: pt, useTransition: pt, useMutableSource: pt, useSyncExternalStore: pt, useId: pt, unstable_isNewReconciler: !1 }, Af = { readContext: At, useCallback: function(e, t) {
    return Jt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: At, useEffect: Qa, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, $i(
      4194308,
      4,
      Xa.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return $i(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return $i(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Jt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Jt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ff.bind(null, Xe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Jt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Wa, useDebugValue: jo, useDeferredValue: function(e) {
    return Jt().memoizedState = e;
  }, useTransition: function() {
    var e = Wa(!1), t = e[0];
    return e = zf.bind(null, e[1]), Jt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Xe, i = Jt();
    if (Ge) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), st === null) throw Error(a(349));
      (Bn & 30) !== 0 || $a(r, t, n);
    }
    i.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return i.queue = l, Qa(Va.bind(
      null,
      r,
      l,
      e
    ), [e]), r.flags |= 2048, Kr(9, Ba.bind(null, r, l, n, t), void 0, null), n;
  }, useId: function() {
    var e = Jt(), t = st.identifierPrefix;
    if (Ge) {
      var n = ln, r = rn;
      n = (r & ~(1 << 32 - Vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Rf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, If = {
    readContext: At,
    useCallback: Ja,
    useContext: At,
    useEffect: Eo,
    useImperativeHandle: qa,
    useInsertionEffect: Ga,
    useLayoutEffect: Ya,
    useMemo: Za,
    useReducer: xo,
    useRef: Ka,
    useState: function() {
      return xo(Wr);
    },
    useDebugValue: jo,
    useDeferredValue: function(e) {
      var t = It();
      return ba(t, it.memoizedState, e);
    },
    useTransition: function() {
      var e = xo(Wr)[0], t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Oa,
    useSyncExternalStore: Da,
    useId: eu,
    unstable_isNewReconciler: !1
  }, Of = { readContext: At, useCallback: Ja, useContext: At, useEffect: Eo, useImperativeHandle: qa, useInsertionEffect: Ga, useLayoutEffect: Ya, useMemo: Za, useReducer: So, useRef: Ka, useState: function() {
    return So(Wr);
  }, useDebugValue: jo, useDeferredValue: function(e) {
    var t = It();
    return it === null ? t.memoizedState = e : ba(t, it.memoizedState, e);
  }, useTransition: function() {
    var e = So(Wr)[0], t = It().memoizedState;
    return [e, t];
  }, useMutableSource: Oa, useSyncExternalStore: Da, useId: eu, unstable_isNewReconciler: !1 };
  function Wt(e, t) {
    if (e && e.defaultProps) {
      t = D({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function _o(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ui = { isMounted: function(e) {
    return (e = e._reactInternals) ? Fn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = kt(), i = Cn(e), l = sn(r, i);
    l.payload = t, n != null && (l.callback = n), t = Sn(e, l, i), t !== null && (Gt(t, e, i, r), Li(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = kt(), i = Cn(e), l = sn(r, i);
    l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Sn(e, l, i), t !== null && (Gt(t, e, i, r), Li(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = kt(), r = Cn(e), i = sn(n, r);
    i.tag = 2, t != null && (i.callback = t), t = Sn(e, i, r), t !== null && (Gt(t, e, r, n), Li(t, e, r));
  } };
  function iu(e, t, n, r, i, l, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, s) : t.prototype && t.prototype.isPureReactComponent ? !Rr(n, r) || !Rr(i, l) : !0;
  }
  function lu(e, t, n) {
    var r = !1, i = kn, l = t.contextType;
    return typeof l == "object" && l !== null ? l = At(l) : (i = xt(t) ? An : ht.current, r = t.contextTypes, l = (r = r != null) ? rr(e, i) : kn), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ui, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t;
  }
  function ou(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
  }
  function Co(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, fo(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? i.context = At(l) : (l = xt(t) ? An : ht.current, i.context = rr(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (_o(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ui.enqueueReplaceState(i, i.state, null), Ai(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function fr(e, t) {
    try {
      var n = "", r = t;
      do
        n += ye(r), r = r.return;
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
    n = sn(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Xi || (Xi = !0, Ho = r), To(e, t);
    }, n;
  }
  function au(e, t, n) {
    n = sn(-1, n), n.tag = 3;
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
      To(e, t), typeof r != "function" && (jn === null ? jn = /* @__PURE__ */ new Set([this]) : jn.add(this));
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
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = sn(-1, 1), t.tag = 2, Sn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e);
  }
  var $f = J.ReactCurrentOwner, St = !1;
  function gt(e, t, n, r) {
    t.child = e === null ? Ra(t, null, n, r) : sr(t, e.child, n, r);
  }
  function du(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return ur(t, i), r = ko(e, t, n, r, l, i), n = wo(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, an(e, t, i)) : (Ge && n && to(t), t.flags |= 1, gt(e, t, r, i), t.child);
  }
  function hu(e, t, n, r, i) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" && !qo(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, pu(e, t, l, r, i)) : (e = tl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, (e.lanes & i) === 0) {
      var s = l.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Rr, n(s, r) && e.ref === t.ref) return an(e, t, i);
    }
    return t.flags |= 1, e = Tn(l, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function pu(e, t, n, r, i) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (Rr(l, r) && e.ref === t.ref) if (St = !1, t.pendingProps = r = l, (e.lanes & i) !== 0) (e.flags & 131072) !== 0 && (St = !0);
      else return t.lanes = e.lanes, an(e, t, i);
    }
    return Mo(e, t, n, r, i);
  }
  function mu(e, t, n) {
    var r = t.pendingProps, i = r.children, l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ue(hr, Mt), Mt |= n;
    else {
      if ((n & 1073741824) === 0) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ue(hr, Mt), Mt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, Ue(hr, Mt), Mt |= r;
    }
    else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, Ue(hr, Mt), Mt |= r;
    return gt(e, t, i, n), t.child;
  }
  function vu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Mo(e, t, n, r, i) {
    var l = xt(n) ? An : ht.current;
    return l = rr(t, l), ur(t, i), n = ko(e, t, n, r, l, i), r = wo(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, an(e, t, i)) : (Ge && r && to(t), t.flags |= 1, gt(e, t, n, i), t.child);
  }
  function yu(e, t, n, r, i) {
    if (xt(n)) {
      var l = !0;
      Ci(t);
    } else l = !1;
    if (ur(t, i), t.stateNode === null) Wi(e, t), lu(t, n, r), Co(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, f = t.memoizedProps;
      s.props = f;
      var h = s.context, w = n.contextType;
      typeof w == "object" && w !== null ? w = At(w) : (w = xt(n) ? An : ht.current, w = rr(t, w));
      var _ = n.getDerivedStateFromProps, M = typeof _ == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      M || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== r || h !== w) && ou(t, s, r, w), xn = !1;
      var j = t.memoizedState;
      s.state = j, Ai(t, r, s, i), h = t.memoizedState, f !== r || j !== h || wt.current || xn ? (typeof _ == "function" && (_o(t, n, _, r), h = t.memoizedState), (f = xn || iu(t, n, f, r, j, h, w)) ? (M || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = h), s.props = r, s.state = h, s.context = w, r = f) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, Fa(e, t), f = t.memoizedProps, w = t.type === t.elementType ? f : Wt(t.type, f), s.props = w, M = t.pendingProps, j = s.context, h = n.contextType, typeof h == "object" && h !== null ? h = At(h) : (h = xt(n) ? An : ht.current, h = rr(t, h));
      var B = n.getDerivedStateFromProps;
      (_ = typeof B == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== M || j !== h) && ou(t, s, r, h), xn = !1, j = t.memoizedState, s.state = j, Ai(t, r, s, i);
      var H = t.memoizedState;
      f !== M || j !== H || wt.current || xn ? (typeof B == "function" && (_o(t, n, B, r), H = t.memoizedState), (w = xn || iu(t, n, w, r, j, H, h) || !1) ? (_ || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, H, h), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, H, h)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = H), s.props = r, s.state = H, s.context = h, r = w) : (typeof s.componentDidUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Po(e, t, n, r, l, i);
  }
  function Po(e, t, n, r, i, l) {
    vu(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Sa(t, n, !1), an(e, t, l);
    r = t.stateNode, $f.current = t;
    var f = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = sr(t, e.child, null, l), t.child = sr(t, null, f, l)) : gt(e, t, f, l), t.memoizedState = r.state, i && Sa(t, n, !0), t.child;
  }
  function gu(e) {
    var t = e.stateNode;
    t.pendingContext ? wa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wa(e, t.context, !1), ho(e, t.containerInfo);
  }
  function ku(e, t, n, r, i) {
    return or(), lo(i), t.flags |= 256, gt(e, t, n, r), t.child;
  }
  var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function wu(e, t, n) {
    var r = t.pendingProps, i = Ye.current, l = !1, s = (t.flags & 128) !== 0, f;
    if ((f = s) || (f = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), f ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ue(Ye, i & 1), e === null)
      return io(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, s = { mode: "hidden", children: s }, (r & 1) === 0 && l !== null ? (l.childLanes = 0, l.pendingProps = s) : l = nl(s, r, 0, null), e = Kn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = zo(n), t.memoizedState = Ro, e) : Fo(t, s));
    if (i = e.memoizedState, i !== null && (f = i.dehydrated, f !== null)) return Bf(e, t, s, r, f, i, n);
    if (l) {
      l = r.fallback, s = t.mode, i = e.child, f = i.sibling;
      var h = { mode: "hidden", children: r.children };
      return (s & 1) === 0 && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = h, t.deletions = null) : (r = Tn(i, h), r.subtreeFlags = i.subtreeFlags & 14680064), f !== null ? l = Tn(f, l) : (l = Kn(l, s, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, s = e.child.memoizedState, s = s === null ? zo(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, l.memoizedState = s, l.childLanes = e.childLanes & ~n, t.memoizedState = Ro, r;
    }
    return l = e.child, e = l.sibling, r = Tn(l, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Fo(e, t) {
    return t = nl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Hi(e, t, n, r) {
    return r !== null && lo(r), sr(t, e.child, null, n), e = Fo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bf(e, t, n, r, i, l, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = No(Error(a(422))), Hi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = nl({ mode: "visible", children: r.children }, i, 0, null), l = Kn(l, i, s, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, (t.mode & 1) !== 0 && sr(t, e.child, null, s), t.child.memoizedState = zo(s), t.memoizedState = Ro, l);
    if ((t.mode & 1) === 0) return Hi(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var f = r.dgst;
      return r = f, l = Error(a(419)), r = No(l, r, void 0), Hi(e, t, s, r);
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
        i = (i & (r.suspendedLanes | s)) !== 0 ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, on(e, i), Gt(r, e, i, -1));
      }
      return Xo(), r = No(Error(a(421))), Hi(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = bf.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, Tt = yn(i.nextSibling), Nt = t, Ge = !0, Ht = null, e !== null && (Ft[Lt++] = rn, Ft[Lt++] = ln, Ft[Lt++] = In, rn = e.id, ln = e.overflow, In = t), t = Fo(t, r.children), t.flags |= 4096, t);
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
    if (gt(e, t, r.children, n), r = Ye.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
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
    if (Ue(Ye, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Ii(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Lo(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Ii(e) === null) {
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
  function Wi(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function an(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Vn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Tn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Vf(e, t, n) {
    switch (t.tag) {
      case 3:
        gu(t), or();
        break;
      case 5:
        Ia(t);
        break;
      case 1:
        xt(t.type) && Ci(t);
        break;
      case 4:
        ho(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Ue(zi, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ue(Ye, Ye.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? wu(e, t, n) : (Ue(Ye, Ye.current & 1), e = an(e, t, n), e !== null ? e.sibling : null);
        Ue(Ye, Ye.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Su(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ue(Ye, Ye.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, mu(e, t, n);
    }
    return an(e, t, n);
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
      e = t.stateNode, $n(qt.current);
      var l = null;
      switch (n) {
        case "input":
          i = ie(e, i), r = ie(e, r), l = [];
          break;
        case "select":
          i = D({}, i, { value: void 0 }), r = D({}, r, { value: void 0 }), l = [];
          break;
        case "textarea":
          i = S(e, i), r = S(e, r), l = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ei);
      }
      dt(n, r);
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
        else w === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, f = f ? f.__html : void 0, h != null && f !== h && (l = l || []).push(w, h)) : w === "children" ? typeof h != "string" && typeof h != "number" || (l = l || []).push(w, "" + h) : w !== "suppressContentEditableWarning" && w !== "suppressHydrationWarning" && (m.hasOwnProperty(w) ? (h != null && w === "onScroll" && We("scroll", e), l || f === h || (l = [])) : (l = l || []).push(w, h));
      }
      n && (l = l || []).push("style", n);
      var w = l;
      (t.updateQueue = w) && (t.flags |= 4);
    }
  }, _u = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Qr(e, t) {
    if (!Ge) switch (e.tailMode) {
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
  function mt(e) {
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
        return mt(t), null;
      case 1:
        return xt(t.type) && _i(), mt(t), null;
      case 3:
        return r = t.stateNode, cr(), Ke(wt), Ke(ht), vo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Pi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ht !== null && (Qo(Ht), Ht = null))), Ao(e, t), mt(t), null;
      case 5:
        po(t);
        var i = $n(Vr.current);
        if (n = t.type, e !== null && t.stateNode != null) ju(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return mt(t), null;
          }
          if (e = $n(qt.current), Pi(t)) {
            r = t.stateNode, n = t.type;
            var l = t.memoizedProps;
            switch (r[Xt] = t, r[Ir] = l, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                We("cancel", r), We("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                We("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fr.length; i++) We(Fr[i], r);
                break;
              case "source":
                We("error", r);
                break;
              case "img":
              case "image":
              case "link":
                We(
                  "error",
                  r
                ), We("load", r);
                break;
              case "details":
                We("toggle", r);
                break;
              case "input":
                Ee(r, l), We("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!l.multiple }, We("invalid", r);
                break;
              case "textarea":
                z(r, l), We("invalid", r);
            }
            dt(n, l), i = null;
            for (var s in l) if (l.hasOwnProperty(s)) {
              var f = l[s];
              s === "children" ? typeof f == "string" ? r.textContent !== f && (l.suppressHydrationWarning !== !0 && Si(r.textContent, f, e), i = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (l.suppressHydrationWarning !== !0 && Si(
                r.textContent,
                f,
                e
              ), i = ["children", "" + f]) : m.hasOwnProperty(s) && f != null && s === "onScroll" && We("scroll", r);
            }
            switch (n) {
              case "input":
                de(r), He(r, l, !0);
                break;
              case "textarea":
                de(r), je(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = Ei);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Fe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Xt] = t, e[Ir] = r, Eu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = en(n, r), n) {
                case "dialog":
                  We("cancel", e), We("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  We("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Fr.length; i++) We(Fr[i], e);
                  i = r;
                  break;
                case "source":
                  We("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  We(
                    "error",
                    e
                  ), We("load", e), i = r;
                  break;
                case "details":
                  We("toggle", e), i = r;
                  break;
                case "input":
                  Ee(e, r), i = ie(e, r), We("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = D({}, r, { value: void 0 }), We("invalid", e);
                  break;
                case "textarea":
                  z(e, r), i = S(e, r), We("invalid", e);
                  break;
                default:
                  i = r;
              }
              dt(n, i), f = i;
              for (l in f) if (f.hasOwnProperty(l)) {
                var h = f[l];
                l === "style" ? Ne(e, h) : l === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, h != null && cn(e, h)) : l === "children" ? typeof h == "string" ? (n !== "textarea" || h !== "") && he(e, h) : typeof h == "number" && he(e, "" + h) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (m.hasOwnProperty(l) ? h != null && l === "onScroll" && We("scroll", e) : h != null && O(e, l, h, s));
              }
              switch (n) {
                case "input":
                  de(e), He(e, r, !1);
                  break;
                case "textarea":
                  de(e), je(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + L(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, l = r.value, l != null ? Ve(e, !!r.multiple, l, !1) : r.defaultValue != null && Ve(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Ei);
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
        return mt(t), null;
      case 6:
        if (e && t.stateNode != null) _u(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (n = $n(Vr.current), $n(qt.current), Pi(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Xt] = t, (l = r.nodeValue !== n) && (e = Nt, e !== null)) switch (e.tag) {
              case 3:
                Si(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Si(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            l && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Xt] = t, t.stateNode = r;
        }
        return mt(t), null;
      case 13:
        if (Ke(Ye), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ge && Tt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ta(), or(), t.flags |= 98560, l = !1;
          else if (l = Pi(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(a(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(a(317));
              l[Xt] = t;
            } else or(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            mt(t), l = !1;
          } else Ht !== null && (Qo(Ht), Ht = null), l = !0;
          if (!l) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ye.current & 1) !== 0 ? lt === 0 && (lt = 3) : Xo())), t.updateQueue !== null && (t.flags |= 4), mt(t), null);
      case 4:
        return cr(), Ao(e, t), e === null && Lr(t.stateNode.containerInfo), mt(t), null;
      case 10:
        return ao(t.type._context), mt(t), null;
      case 17:
        return xt(t.type) && _i(), mt(t), null;
      case 19:
        if (Ke(Ye), l = t.memoizedState, l === null) return mt(t), null;
        if (r = (t.flags & 128) !== 0, s = l.rendering, s === null) if (r) Qr(l, !1);
        else {
          if (lt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (s = Ii(e), s !== null) {
              for (t.flags |= 128, Qr(l, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, s = l.alternate, s === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = s.childLanes, l.lanes = s.lanes, l.child = s.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = s.memoizedProps, l.memoizedState = s.memoizedState, l.updateQueue = s.updateQueue, l.type = s.type, e = s.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ue(Ye, Ye.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && et() > pr && (t.flags |= 128, r = !0, Qr(l, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Ii(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qr(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !Ge) return mt(t), null;
          } else 2 * et() - l.renderingStartTime > pr && n !== 1073741824 && (t.flags |= 128, r = !0, Qr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (s.sibling = t.child, t.child = s) : (n = l.last, n !== null ? n.sibling = s : t.child = s, l.last = s);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = et(), t.sibling = null, n = Ye.current, Ue(Ye, r ? n & 1 | 2 : n & 1), t) : (mt(t), null);
      case 22:
      case 23:
        return Yo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Mt & 1073741824) !== 0 && (mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : mt(t), null;
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
        return xt(t.type) && _i(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return cr(), Ke(wt), Ke(ht), vo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return po(t), null;
      case 13:
        if (Ke(Ye), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          or();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ke(Ye), null;
      case 4:
        return cr(), null;
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
  var Ki = !1, vt = !1, Wf = typeof WeakSet == "function" ? WeakSet : Set, U = null;
  function dr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Je(e, t, r);
    }
    else n.current = null;
  }
  function Io(e, t, n) {
    try {
      n();
    } catch (r) {
      Je(e, t, r);
    }
  }
  var Cu = !1;
  function Kf(e, t) {
    if (Gl = fi, e = ia(), $l(e)) {
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
    for (Yl = { focusedElem: e, selectionRange: n }, fi = !1, U = t; U !== null; ) if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, U = e;
    else for (; U !== null; ) {
      t = U;
      try {
        var H = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (H !== null) {
              var K = H.memoizedProps, tt = H.memoizedState, g = t.stateNode, v = g.getSnapshotBeforeUpdate(t.elementType === t.type ? K : Wt(t.type, K), tt);
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
      } catch (F) {
        Je(t, t.return, F);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, U = e;
        break;
      }
      U = t.return;
    }
    return H = Cu, Cu = !1, H;
  }
  function Gr(e, t, n) {
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
  function Qi(e, t) {
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
    t !== null && (e.alternate = null, Nu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xt], delete t[Ir], delete t[Zl], delete t[Nf], delete t[Tf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ei));
    else if (r !== 4 && (e = e.child, e !== null)) for (Do(e, t, n), e = e.sibling; e !== null; ) Do(e, t, n), e = e.sibling;
  }
  function $o(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for ($o(e, t, n), e = e.sibling; e !== null; ) $o(e, t, n), e = e.sibling;
  }
  var ut = null, Kt = !1;
  function En(e, t, n) {
    for (n = n.child; n !== null; ) Pu(e, t, n), n = n.sibling;
  }
  function Pu(e, t, n) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function") try {
      Yt.onCommitFiberUnmount(li, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        vt || dr(n, t);
      case 6:
        var r = ut, i = Kt;
        ut = null, En(e, t, n), ut = r, Kt = i, ut !== null && (Kt ? (e = ut, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ut.removeChild(n.stateNode));
        break;
      case 18:
        ut !== null && (Kt ? (e = ut, n = n.stateNode, e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n), _r(e)) : Jl(ut, n.stateNode));
        break;
      case 4:
        r = ut, i = Kt, ut = n.stateNode.containerInfo, Kt = !0, En(e, t, n), ut = r, Kt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var l = i, s = l.destroy;
            l = l.tag, s !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && Io(n, t, s), i = i.next;
          } while (i !== r);
        }
        En(e, t, n);
        break;
      case 1:
        if (!vt && (dr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          Je(n, t, f);
        }
        En(e, t, n);
        break;
      case 21:
        En(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (vt = (r = vt) || n.memoizedState !== null, En(e, t, n), vt = r) : En(e, t, n);
        break;
      default:
        En(e, t, n);
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
  function Qt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e, s = t, f = s;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 5:
              ut = f.stateNode, Kt = !1;
              break e;
            case 3:
              ut = f.stateNode.containerInfo, Kt = !0;
              break e;
            case 4:
              ut = f.stateNode.containerInfo, Kt = !0;
              break e;
          }
          f = f.return;
        }
        if (ut === null) throw Error(a(160));
        Pu(l, s, i), ut = null, Kt = !1;
        var h = i.alternate;
        h !== null && (h.return = null), i.return = null;
      } catch (w) {
        Je(i, t, w);
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
        if (Qt(t, e), Zt(e), r & 4) {
          try {
            Gr(3, e, e.return), Qi(3, e);
          } catch (K) {
            Je(e, e.return, K);
          }
          try {
            Gr(5, e, e.return);
          } catch (K) {
            Je(e, e.return, K);
          }
        }
        break;
      case 1:
        Qt(t, e), Zt(e), r & 512 && n !== null && dr(n, n.return);
        break;
      case 5:
        if (Qt(t, e), Zt(e), r & 512 && n !== null && dr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            he(i, "");
          } catch (K) {
            Je(e, e.return, K);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var l = e.memoizedProps, s = n !== null ? n.memoizedProps : l, f = e.type, h = e.updateQueue;
          if (e.updateQueue = null, h !== null) try {
            f === "input" && l.type === "radio" && l.name != null && ve(i, l), en(f, s);
            var w = en(f, l);
            for (s = 0; s < h.length; s += 2) {
              var _ = h[s], M = h[s + 1];
              _ === "style" ? Ne(i, M) : _ === "dangerouslySetInnerHTML" ? cn(i, M) : _ === "children" ? he(i, M) : O(i, _, M, w);
            }
            switch (f) {
              case "input":
                Ce(i, l);
                break;
              case "textarea":
                fe(i, l);
                break;
              case "select":
                var j = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var B = l.value;
                B != null ? Ve(i, !!l.multiple, B, !1) : j !== !!l.multiple && (l.defaultValue != null ? Ve(
                  i,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : Ve(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[Ir] = l;
          } catch (K) {
            Je(e, e.return, K);
          }
        }
        break;
      case 6:
        if (Qt(t, e), Zt(e), r & 4) {
          if (e.stateNode === null) throw Error(a(162));
          i = e.stateNode, l = e.memoizedProps;
          try {
            i.nodeValue = l;
          } catch (K) {
            Je(e, e.return, K);
          }
        }
        break;
      case 3:
        if (Qt(t, e), Zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          _r(t.containerInfo);
        } catch (K) {
          Je(e, e.return, K);
        }
        break;
      case 4:
        Qt(t, e), Zt(e);
        break;
      case 13:
        Qt(t, e), Zt(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (Uo = et())), r & 4 && Ru(e);
        break;
      case 22:
        if (_ = n !== null && n.memoizedState !== null, e.mode & 1 ? (vt = (w = vt) || _, Qt(t, e), vt = w) : Qt(t, e), Zt(e), r & 8192) {
          if (w = e.memoizedState !== null, (e.stateNode.isHidden = w) && !_ && (e.mode & 1) !== 0) for (U = e, _ = e.child; _ !== null; ) {
            for (M = U = _; U !== null; ) {
              switch (j = U, B = j.child, j.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gr(4, j, j.return);
                  break;
                case 1:
                  dr(j, j.return);
                  var H = j.stateNode;
                  if (typeof H.componentWillUnmount == "function") {
                    r = j, n = j.return;
                    try {
                      t = r, H.props = t.memoizedProps, H.state = t.memoizedState, H.componentWillUnmount();
                    } catch (K) {
                      Je(r, n, K);
                    }
                  }
                  break;
                case 5:
                  dr(j, j.return);
                  break;
                case 22:
                  if (j.memoizedState !== null) {
                    Au(M);
                    continue;
                  }
              }
              B !== null ? (B.return = j, U = B) : Au(M);
            }
            _ = _.sibling;
          }
          e: for (_ = null, M = e; ; ) {
            if (M.tag === 5) {
              if (_ === null) {
                _ = M;
                try {
                  i = M.stateNode, w ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (f = M.stateNode, h = M.memoizedProps.style, s = h != null && h.hasOwnProperty("display") ? h.display : null, f.style.display = _e("display", s));
                } catch (K) {
                  Je(e, e.return, K);
                }
              }
            } else if (M.tag === 6) {
              if (_ === null) try {
                M.stateNode.nodeValue = w ? "" : M.memoizedProps;
              } catch (K) {
                Je(e, e.return, K);
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
        Qt(t, e), Zt(e), r & 4 && Ru(e);
        break;
      case 21:
        break;
      default:
        Qt(
          t,
          e
        ), Zt(e);
    }
  }
  function Zt(e) {
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
            r.flags & 32 && (he(i, ""), r.flags &= -33);
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
        Je(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Qf(e, t, n) {
    U = e, Fu(e);
  }
  function Fu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null; ) {
      var i = U, l = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || Ki;
        if (!s) {
          var f = i.alternate, h = f !== null && f.memoizedState !== null || vt;
          f = Ki;
          var w = vt;
          if (Ki = s, (vt = h) && !w) for (U = i; U !== null; ) s = U, h = s.child, s.tag === 22 && s.memoizedState !== null ? Iu(i) : h !== null ? (h.return = s, U = h) : Iu(i);
          for (; l !== null; ) U = l, Fu(l), l = l.sibling;
          U = i, Ki = f, vt = w;
        }
        Lu(e);
      } else (i.subtreeFlags & 8772) !== 0 && l !== null ? (l.return = i, U = l) : Lu(e);
    }
  }
  function Lu(e) {
    for (; U !== null; ) {
      var t = U;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              vt || Qi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !vt) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : Wt(t.type, n.memoizedProps);
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
                    M !== null && _r(M);
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
          vt || t.flags & 512 && Oo(t);
        } catch (j) {
          Je(t, t.return, j);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, U = n;
        break;
      }
      U = t.return;
    }
  }
  function Au(e) {
    for (; U !== null; ) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, U = n;
        break;
      }
      U = t.return;
    }
  }
  function Iu(e) {
    for (; U !== null; ) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Qi(4, t);
            } catch (h) {
              Je(t, n, h);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (h) {
                Je(t, i, h);
              }
            }
            var l = t.return;
            try {
              Oo(t);
            } catch (h) {
              Je(t, l, h);
            }
            break;
          case 5:
            var s = t.return;
            try {
              Oo(t);
            } catch (h) {
              Je(t, s, h);
            }
        }
      } catch (h) {
        Je(t, t.return, h);
      }
      if (t === e) {
        U = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, U = f;
        break;
      }
      U = t.return;
    }
  }
  var Gf = Math.ceil, Gi = J.ReactCurrentDispatcher, Bo = J.ReactCurrentOwner, Ot = J.ReactCurrentBatchConfig, Te = 0, st = null, nt = null, ct = 0, Mt = 0, hr = gn(0), lt = 0, Yr = null, Vn = 0, Yi = 0, Vo = 0, Xr = null, Et = null, Uo = 0, pr = 1 / 0, un = null, Xi = !1, Ho = null, jn = null, qi = !1, _n = null, Ji = 0, qr = 0, Wo = null, Zi = -1, bi = 0;
  function kt() {
    return (Te & 6) !== 0 ? et() : Zi !== -1 ? Zi : Zi = et();
  }
  function Cn(e) {
    return (e.mode & 1) === 0 ? 1 : (Te & 2) !== 0 && ct !== 0 ? ct & -ct : Pf.transition !== null ? (bi === 0 && (bi = Ms()), bi) : (e = Le, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ds(e.type)), e);
  }
  function Gt(e, t, n, r) {
    if (50 < qr) throw qr = 0, Wo = null, Error(a(185));
    wr(e, n, r), ((Te & 2) === 0 || e !== st) && (e === st && ((Te & 2) === 0 && (Yi |= n), lt === 4 && Nn(e, ct)), jt(e, r), n === 1 && Te === 0 && (t.mode & 1) === 0 && (pr = et() + 500, Ni && wn()));
  }
  function jt(e, t) {
    var n = e.callbackNode;
    Mc(e, t);
    var r = ai(e, e === st ? ct : 0);
    if (r === 0) n !== null && Cs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Cs(n), t === 1) e.tag === 0 ? Mf(Du.bind(null, e)) : Ea(Du.bind(null, e)), _f(function() {
        (Te & 6) === 0 && wn();
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
            n = ii;
            break;
          case 536870912:
            n = Ts;
            break;
          default:
            n = ii;
        }
        n = Qu(n, Ou.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ou(e, t) {
    if (Zi = -1, bi = 0, (Te & 6) !== 0) throw Error(a(327));
    var n = e.callbackNode;
    if (mr() && e.callbackNode !== n) return null;
    var r = ai(e, e === st ? ct : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = el(e, r);
    else {
      t = r;
      var i = Te;
      Te |= 2;
      var l = Bu();
      (st !== e || ct !== t) && (un = null, pr = et() + 500, Hn(e, t));
      do
        try {
          qf();
          break;
        } catch (f) {
          $u(e, f);
        }
      while (!0);
      so(), Gi.current = l, Te = i, nt !== null ? t = 0 : (st = null, ct = 0, t = lt);
    }
    if (t !== 0) {
      if (t === 2 && (i = El(e), i !== 0 && (r = i, t = Ko(e, i))), t === 1) throw n = Yr, Hn(e, 0), Nn(e, r), jt(e, et()), n;
      if (t === 6) Nn(e, r);
      else {
        if (i = e.current.alternate, (r & 30) === 0 && !Yf(i) && (t = el(e, r), t === 2 && (l = El(e), l !== 0 && (r = l, t = Ko(e, l))), t === 1)) throw n = Yr, Hn(e, 0), Nn(e, r), jt(e, et()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Wn(e, Et, un);
            break;
          case 3:
            if (Nn(e, r), (r & 130023424) === r && (t = Uo + 500 - et(), 10 < t)) {
              if (ai(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                kt(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = ql(Wn.bind(null, e, Et, un), t);
              break;
            }
            Wn(e, Et, un);
            break;
          case 4:
            if (Nn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - Vt(r);
              l = 1 << s, s = t[s], s > i && (i = s), r &= ~l;
            }
            if (r = i, r = et() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Gf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ql(Wn.bind(null, e, Et, un), r);
              break;
            }
            Wn(e, Et, un);
            break;
          case 5:
            Wn(e, Et, un);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return jt(e, et()), e.callbackNode === n ? Ou.bind(null, e) : null;
  }
  function Ko(e, t) {
    var n = Xr;
    return e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256), e = el(e, t), e !== 2 && (t = Et, Et = n, t !== null && Qo(t)), e;
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
            if (!Ut(l(), i)) return !1;
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
    for (t &= ~Vo, t &= ~Yi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Vt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Du(e) {
    if ((Te & 6) !== 0) throw Error(a(327));
    mr();
    var t = ai(e, 0);
    if ((t & 1) === 0) return jt(e, et()), null;
    var n = el(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = El(e);
      r !== 0 && (t = r, n = Ko(e, r));
    }
    if (n === 1) throw n = Yr, Hn(e, 0), Nn(e, t), jt(e, et()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wn(e, Et, un), jt(e, et()), null;
  }
  function Go(e, t) {
    var n = Te;
    Te |= 1;
    try {
      return e(t);
    } finally {
      Te = n, Te === 0 && (pr = et() + 500, Ni && wn());
    }
  }
  function Un(e) {
    _n !== null && _n.tag === 0 && (Te & 6) === 0 && mr();
    var t = Te;
    Te |= 1;
    var n = Ot.transition, r = Le;
    try {
      if (Ot.transition = null, Le = 1, e) return e();
    } finally {
      Le = r, Ot.transition = n, Te = t, (Te & 6) === 0 && wn();
    }
  }
  function Yo() {
    Mt = hr.current, Ke(hr);
  }
  function Hn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, jf(n)), nt !== null) for (n = nt.return; n !== null; ) {
      var r = n;
      switch (no(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && _i();
          break;
        case 3:
          cr(), Ke(wt), Ke(ht), vo();
          break;
        case 5:
          po(r);
          break;
        case 4:
          cr();
          break;
        case 13:
          Ke(Ye);
          break;
        case 19:
          Ke(Ye);
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
    if (st = e, nt = e = Tn(e.current, null), ct = Mt = t, lt = 0, Yr = null, Vo = Yi = Vn = 0, Et = Xr = null, Dn !== null) {
      for (t = 0; t < Dn.length; t++) if (n = Dn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, l = n.pending;
        if (l !== null) {
          var s = l.next;
          l.next = i, r.next = s;
        }
        n.pending = r;
      }
      Dn = null;
    }
    return e;
  }
  function $u(e, t) {
    do {
      var n = nt;
      try {
        if (so(), Oi.current = Vi, Di) {
          for (var r = Xe.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Di = !1;
        }
        if (Bn = 0, ot = it = Xe = null, Ur = !1, Hr = 0, Bo.current = null, n === null || n.return === null) {
          lt = 1, Yr = t, nt = null;
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
          } else if (Ge && f.mode & 1) {
            var tt = cu(s);
            if (tt !== null) {
              (tt.flags & 65536) === 0 && (tt.flags |= 256), fu(tt, s, f, l, t), lo(fr(h, f));
              break e;
            }
          }
          l = h = fr(h, f), lt !== 4 && (lt = 2), Xr === null ? Xr = [l] : Xr.push(l), l = s;
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
                if ((l.flags & 128) === 0 && (typeof v.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (jn === null || !jn.has(k)))) {
                  l.flags |= 65536, t &= -t, l.lanes |= t;
                  var F = au(l, f, t);
                  La(l, F);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        Uu(n);
      } catch (Y) {
        t = Y, nt === n && n !== null && (nt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Bu() {
    var e = Gi.current;
    return Gi.current = Vi, e === null ? Vi : e;
  }
  function Xo() {
    (lt === 0 || lt === 3 || lt === 2) && (lt = 4), st === null || (Vn & 268435455) === 0 && (Yi & 268435455) === 0 || Nn(st, ct);
  }
  function el(e, t) {
    var n = Te;
    Te |= 2;
    var r = Bu();
    (st !== e || ct !== t) && (un = null, Hn(e, t));
    do
      try {
        Xf();
        break;
      } catch (i) {
        $u(e, i);
      }
    while (!0);
    if (so(), Te = n, Gi.current = r, nt !== null) throw Error(a(261));
    return st = null, ct = 0, lt;
  }
  function Xf() {
    for (; nt !== null; ) Vu(nt);
  }
  function qf() {
    for (; nt !== null && !wc(); ) Vu(nt);
  }
  function Vu(e) {
    var t = Ku(e.alternate, e, Mt);
    e.memoizedProps = e.pendingProps, t === null ? Uu(e) : nt = t, Bo.current = null;
  }
  function Uu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Uf(n, t, Mt), n !== null) {
          nt = n;
          return;
        }
      } else {
        if (n = Hf(n, t), n !== null) {
          n.flags &= 32767, nt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          lt = 6, nt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        nt = t;
        return;
      }
      nt = t = e;
    } while (t !== null);
    lt === 0 && (lt = 5);
  }
  function Wn(e, t, n) {
    var r = Le, i = Ot.transition;
    try {
      Ot.transition = null, Le = 1, Jf(e, t, n, r);
    } finally {
      Ot.transition = i, Le = r;
    }
    return null;
  }
  function Jf(e, t, n, r) {
    do
      mr();
    while (_n !== null);
    if ((Te & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Pc(e, l), e === st && (nt = st = null, ct = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || qi || (qi = !0, Qu(ii, function() {
      return mr(), null;
    })), l = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || l) {
      l = Ot.transition, Ot.transition = null;
      var s = Le;
      Le = 1;
      var f = Te;
      Te |= 4, Bo.current = null, Kf(e, n), zu(n, e), yf(Yl), fi = !!Gl, Yl = Gl = null, e.current = n, Qf(n), xc(), Te = f, Le = s, Ot.transition = l;
    } else e.current = n;
    if (qi && (qi = !1, _n = e, Ji = i), l = e.pendingLanes, l === 0 && (jn = null), jc(n.stateNode), jt(e, et()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Xi) throw Xi = !1, e = Ho, Ho = null, e;
    return (Ji & 1) !== 0 && e.tag !== 0 && mr(), l = e.pendingLanes, (l & 1) !== 0 ? e === Wo ? qr++ : (qr = 0, Wo = e) : qr = 0, wn(), null;
  }
  function mr() {
    if (_n !== null) {
      var e = Ps(Ji), t = Ot.transition, n = Le;
      try {
        if (Ot.transition = null, Le = 16 > e ? 16 : e, _n === null) var r = !1;
        else {
          if (e = _n, _n = null, Ji = 0, (Te & 6) !== 0) throw Error(a(331));
          var i = Te;
          for (Te |= 4, U = e.current; U !== null; ) {
            var l = U, s = l.child;
            if ((U.flags & 16) !== 0) {
              var f = l.deletions;
              if (f !== null) {
                for (var h = 0; h < f.length; h++) {
                  var w = f[h];
                  for (U = w; U !== null; ) {
                    var _ = U;
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gr(8, _, l);
                    }
                    var M = _.child;
                    if (M !== null) M.return = _, U = M;
                    else for (; U !== null; ) {
                      _ = U;
                      var j = _.sibling, B = _.return;
                      if (Nu(_), _ === w) {
                        U = null;
                        break;
                      }
                      if (j !== null) {
                        j.return = B, U = j;
                        break;
                      }
                      U = B;
                    }
                  }
                }
                var H = l.alternate;
                if (H !== null) {
                  var K = H.child;
                  if (K !== null) {
                    H.child = null;
                    do {
                      var tt = K.sibling;
                      K.sibling = null, K = tt;
                    } while (K !== null);
                  }
                }
                U = l;
              }
            }
            if ((l.subtreeFlags & 2064) !== 0 && s !== null) s.return = l, U = s;
            else e: for (; U !== null; ) {
              if (l = U, (l.flags & 2048) !== 0) switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Gr(9, l, l.return);
              }
              var g = l.sibling;
              if (g !== null) {
                g.return = l.return, U = g;
                break e;
              }
              U = l.return;
            }
          }
          var v = e.current;
          for (U = v; U !== null; ) {
            s = U;
            var k = s.child;
            if ((s.subtreeFlags & 2064) !== 0 && k !== null) k.return = s, U = k;
            else e: for (s = v; U !== null; ) {
              if (f = U, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qi(9, f);
                }
              } catch (Y) {
                Je(f, f.return, Y);
              }
              if (f === s) {
                U = null;
                break e;
              }
              var F = f.sibling;
              if (F !== null) {
                F.return = f.return, U = F;
                break e;
              }
              U = f.return;
            }
          }
          if (Te = i, wn(), Yt && typeof Yt.onPostCommitFiberRoot == "function") try {
            Yt.onPostCommitFiberRoot(li, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Le = n, Ot.transition = t;
      }
    }
    return !1;
  }
  function Hu(e, t, n) {
    t = fr(n, t), t = su(e, t, 1), e = Sn(e, t, 1), t = kt(), e !== null && (wr(e, 1, t), jt(e, t));
  }
  function Je(e, t, n) {
    if (e.tag === 3) Hu(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Hu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jn === null || !jn.has(r))) {
          e = fr(n, e), e = au(t, e, 1), t = Sn(t, e, 1), e = kt(), t !== null && (wr(t, 1, e), jt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Zf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = kt(), e.pingedLanes |= e.suspendedLanes & n, st === e && (ct & n) === n && (lt === 4 || lt === 3 && (ct & 130023424) === ct && 500 > et() - Uo ? Hn(e, 0) : Vo |= n), jt(e, t);
  }
  function Wu(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = si, si <<= 1, (si & 130023424) === 0 && (si = 4194304)));
    var n = kt();
    e = on(e, t), e !== null && (wr(e, t, n), jt(e, n));
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
    else St = !1, Ge && (t.flags & 1048576) !== 0 && ja(t, Mi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Wi(e, t), e = t.pendingProps;
        var i = rr(t, ht.current);
        ur(t, n), i = ko(null, t, r, e, i, n);
        var l = wo();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xt(r) ? (l = !0, Ci(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, fo(t), i.updater = Ui, t.stateNode = i, i._reactInternals = t, Co(t, r, e, n), t = Po(null, t, r, !0, l, n)) : (t.tag = 0, Ge && l && to(t), gt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Wi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = nd(r), e = Wt(r, e), i) {
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
              t = hu(null, t, r, Wt(r.type, e), n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Wt(r, i), Mo(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Wt(r, i), yu(e, t, r, i, n);
      case 3:
        e: {
          if (gu(t), e === null) throw Error(a(387));
          r = t.pendingProps, l = t.memoizedState, i = l.element, Fa(e, t), Ai(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            i = fr(Error(a(423)), t), t = ku(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = fr(Error(a(424)), t), t = ku(e, t, r, n, i);
            break e;
          } else for (Tt = yn(t.stateNode.containerInfo.firstChild), Nt = t, Ge = !0, Ht = null, n = Ra(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (or(), r === i) {
              t = an(e, t, n);
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
        return ho(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sr(t, null, r, n) : gt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Wt(r, i), du(e, t, r, i, n);
      case 7:
        return gt(e, t, t.pendingProps, n), t.child;
      case 8:
        return gt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return gt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, s = i.value, Ue(zi, r._currentValue), r._currentValue = s, l !== null) if (Ut(l.value, s)) {
            if (l.children === i.children && !wt.current) {
              t = an(e, t, n);
              break e;
            }
          } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
            var f = l.dependencies;
            if (f !== null) {
              s = l.child;
              for (var h = f.firstContext; h !== null; ) {
                if (h.context === r) {
                  if (l.tag === 1) {
                    h = sn(-1, n & -n), h.tag = 2;
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
        return i = t.type, r = t.pendingProps.children, ur(t, n), i = At(i), r = r(i), t.flags |= 1, gt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Wt(r, t.pendingProps), i = Wt(r.type, i), hu(e, t, r, i, n);
      case 15:
        return pu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Wt(r, i), Wi(e, t), t.tag = 1, xt(r) ? (e = !0, Ci(t)) : e = !1, ur(t, n), lu(t, r, i), Co(t, r, i, n), Po(null, t, r, !0, e, n);
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
  function Dt(e, t, n, r) {
    return new td(e, t, n, r);
  }
  function qo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function nd(e) {
    if (typeof e == "function") return qo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ie) return 11;
      if (e === De) return 14;
    }
    return 2;
  }
  function Tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function tl(e, t, n, r, i, l) {
    var s = 2;
    if (r = e, typeof e == "function") qo(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
      case me:
        return Kn(n.children, i, l, t);
      case Pe:
        s = 8, i |= 8;
        break;
      case Ae:
        return e = Dt(12, n, t, i | 2), e.elementType = Ae, e.lanes = l, e;
      case Re:
        return e = Dt(13, n, t, i), e.elementType = Re, e.lanes = l, e;
      case Oe:
        return e = Dt(19, n, t, i), e.elementType = Oe, e.lanes = l, e;
      case Z:
        return nl(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Se:
            s = 10;
            break e;
          case Be:
            s = 9;
            break e;
          case Ie:
            s = 11;
            break e;
          case De:
            s = 14;
            break e;
          case ke:
            s = 16, r = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = Dt(s, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t;
  }
  function Kn(e, t, n, r) {
    return e = Dt(7, e, r, t), e.lanes = n, e;
  }
  function nl(e, t, n, r) {
    return e = Dt(22, e, r, t), e.elementType = Z, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Jo(e, t, n) {
    return e = Dt(6, e, null, t), e.lanes = n, e;
  }
  function Zo(e, t, n) {
    return t = Dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function rd(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = jl(0), this.expirationTimes = jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function bo(e, t, n, r, i, l, s, f, h) {
    return e = new rd(e, t, n, f, h), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Dt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fo(l), e;
  }
  function id(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Q, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Gu(e) {
    if (!e) return kn;
    e = e._reactInternals;
    e: {
      if (Fn(e) !== e || e.tag !== 1) throw Error(a(170));
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
    return e = bo(n, r, !0, e, i, l, s, f, h), e.context = Gu(null), n = e.current, r = kt(), i = Cn(n), l = sn(r, i), l.callback = t ?? null, Sn(n, l, i), e.current.lanes = i, wr(e, i, r), jt(e, r), e;
  }
  function rl(e, t, n, r) {
    var i = t.current, l = kt(), s = Cn(i);
    return n = Gu(n), t.context === null ? t.context = n : t.pendingContext = n, t = sn(l, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Sn(i, t, s), e !== null && (Gt(e, i, s, l), Li(e, i, s)), s;
  }
  function il(e) {
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
  ll.prototype.render = ts.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    rl(e, t, null, null);
  }, ll.prototype.unmount = ts.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Un(function() {
        rl(null, e, null, null);
      }), t[tn] = null;
    }
  };
  function ll(e) {
    this._internalRoot = e;
  }
  ll.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Fs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++) ;
      pn.splice(n, 0, e), n === 0 && Is(e);
    }
  };
  function ns(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ol(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ju() {
  }
  function od(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var l = r;
        r = function() {
          var w = il(s);
          l.call(w);
        };
      }
      var s = Yu(t, r, e, 0, null, !1, !1, "", Ju);
      return e._reactRootContainer = s, e[tn] = s.current, Lr(e.nodeType === 8 ? e.parentNode : e), Un(), s;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var w = il(h);
        f.call(w);
      };
    }
    var h = bo(e, 0, !1, null, null, !1, !1, "", Ju);
    return e._reactRootContainer = h, e[tn] = h.current, Lr(e.nodeType === 8 ? e.parentNode : e), Un(function() {
      rl(t, h, n, r);
    }), h;
  }
  function sl(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
      var s = l;
      if (typeof i == "function") {
        var f = i;
        i = function() {
          var h = il(s);
          f.call(h);
        };
      }
      rl(t, s, e, i);
    } else s = od(n, t, e, i, r);
    return il(s);
  }
  Rs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = kr(t.pendingLanes);
          n !== 0 && (_l(t, n | 1), jt(t, et()), (Te & 6) === 0 && (pr = et() + 500, wn()));
        }
        break;
      case 13:
        Un(function() {
          var r = on(e, 1);
          if (r !== null) {
            var i = kt();
            Gt(r, e, 1, i);
          }
        }), es(e, 1);
    }
  }, Cl = function(e) {
    if (e.tag === 13) {
      var t = on(e, 134217728);
      if (t !== null) {
        var n = kt();
        Gt(t, e, 134217728, n);
      }
      es(e, 134217728);
    }
  }, zs = function(e) {
    if (e.tag === 13) {
      var t = Cn(e), n = on(e, t);
      if (n !== null) {
        var r = kt();
        Gt(n, e, t, r);
      }
      es(e, t);
    }
  }, Fs = function() {
    return Le;
  }, Ls = function(e, t) {
    var n = Le;
    try {
      return Le = e, t();
    } finally {
      Le = n;
    }
  }, zn = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ce(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = ji(r);
              if (!i) throw Error(a(90));
              b(r), Ce(r, i);
            }
          }
        }
        break;
      case "textarea":
        fe(e, n);
        break;
      case "select":
        t = n.value, t != null && Ve(e, !!n.multiple, t, !1);
    }
  }, gs = Go, ks = Un;
  var sd = { usingClientEntryPoint: !1, Events: [Or, tr, ji, vs, ys, Go] }, Jr = { findFiberByHostInstance: Ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ad = { bundleType: Jr.bundleType, version: Jr.version, rendererPackageName: Jr.rendererPackageName, rendererConfig: Jr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: J.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Es(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Jr.findFiberByHostInstance || ld, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!al.isDisabled && al.supportsFiber) try {
      li = al.inject(ad), Yt = al;
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
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = bo(e, 1, !1, null, null, n, !1, r, i), e[tn] = t.current, Lr(e.nodeType === 8 ? e.parentNode : e), new ts(t);
  }, _t.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = Es(t), e = e === null ? null : e.stateNode, e;
  }, _t.flushSync = function(e) {
    return Un(e);
  }, _t.hydrate = function(e, t, n) {
    if (!ol(t)) throw Error(a(200));
    return sl(null, e, t, !0, n);
  }, _t.hydrateRoot = function(e, t, n) {
    if (!ns(e)) throw Error(a(405));
    var r = n != null && n.hydratedSources || null, i = !1, l = "", s = qu;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Yu(t, null, e, 1, n ?? null, i, !1, l, s), e[tn] = t.current, Lr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new ll(t);
  }, _t.render = function(e, t, n) {
    if (!ol(t)) throw Error(a(200));
    return sl(null, e, t, !1, n);
  }, _t.unmountComponentAtNode = function(e) {
    if (!ol(e)) throw Error(a(40));
    return e._reactRootContainer ? (Un(function() {
      sl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[tn] = null;
      });
    }), !0) : !1;
  }, _t.unstable_batchedUpdates = Go, _t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ol(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return sl(e, t, n, !1, r);
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
  if (oc) return ul;
  oc = 1;
  var o = yd();
  return ul.createRoot = o.createRoot, ul.hydrateRoot = o.hydrateRoot, ul;
}
var kd = gd();
const wd = (() => {
  const o = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], u = "CDEFGAB", a = [0, 2, 4, 5, 7, 9, 11], d = [64, 59, 55, 50, 45, 40], m = d.at(-1), c = { pentatonic: 15, "3nps": 17 }, x = 7, N = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], T = ["e", "B", "G", "D", "A", "E"], te = ["ohut e", "B", "G", "D", "A", "paksu E"], $ = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], A = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], X = {
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
  }, re = 26, le = 72, q = 30, I = 54, V = 34, oe = 11, O = (re + le) / 2, J = q + (d.length - 1) * V + 30, ee = (P) => le + P * I, Q = (P) => P === 0 ? O : ee(P) - I / 2, me = (P) => q + P * V;
  function Pe(P, L, R) {
    const W = u.indexOf(o[P][0]) + Number(R.slice(-1)) - 1, de = W % u.length, b = a[de] + 12 * Math.floor(W / u.length), ne = P + L - b;
    return u[de] + (ne < 0 ? "♭" : "♯").repeat(Math.abs(ne));
  }
  function Ae(P) {
    return [...P.base, ...P.add].sort((L, R) => L[0] - R[0]);
  }
  function Se(P, L, R) {
    const W = L + (R ? 1 : 0), de = N[W % N.length], b = Math.min(...de.map(([Ce]) => Ce)), ne = Math.max(...de.map(([, Ce]) => Ce));
    let ve = (P - m % 12 + 12) % 12 - (R ? 8 : 5) + 12 * Math.floor(W / N.length);
    return b + ve < 0 && (ve += 12), ne + ve > c.pentatonic && (ve -= 12), {
      strings: de.map((Ce) => Ce.map((He) => He + ve)),
      start: b + ve,
      end: ne + ve
    };
  }
  function Be(P, L, R) {
    const W = R[L], de = (P + W - m % 12 + 12) % 12, b = m + de - W, ne = d.map((ie, Ee) => {
      const ve = L + (d.length - 1 - Ee) * 3;
      return [ve, ve + 1, ve + 2].map((Ce) => {
        const He = Math.floor(Ce / R.length), ze = R[Ce % R.length];
        return b + ze + 12 * He - ie;
      });
    });
    return {
      strings: ne,
      start: Math.min(...ne.map((ie) => ie[0])),
      end: Math.max(...ne.map((ie) => ie.at(-1)))
    };
  }
  function Ie(P, L) {
    const R = [], W = Math.ceil(-P.end / 12) * 12;
    for (let b = W; P.start + b <= L; b += 12) {
      const ne = P.strings.map((Ee) => Ee.map((ve) => ve + b).filter((ve) => ve >= 0 && ve <= L)), ie = ne.flat();
      R.push({
        strings: ne,
        start: Math.min(...ie),
        end: Math.max(...ie),
        partial: P.start + b < 0 || P.end + b > L
      });
    }
    const de = R.filter((b) => !b.partial);
    return de.length ? de : R;
  }
  function Re(P) {
    return Ae(P).length === x;
  }
  function Oe(P, L, R) {
    const W = Re(L);
    P.querySelector('[value="3nps"]').disabled = !W, P.value = W ? R ?? "3nps" : "pentatonic";
  }
  function De(P, L, R, W, de) {
    const b = Ae(L).map(([ne]) => ne);
    return W.map((ne) => {
      const ie = ne - 1, Ee = R === "3nps" ? Be(P, ie, b) : Se(P, ie, L.base === A), ve = de === void 0 ? [Ee] : Ie(Ee, de);
      return { number: ne, positions: ve };
    });
  }
  function ke(P, L) {
    const R = P.getBoundingClientRect(), W = P.querySelectorAll(L);
    let de = 1 / 0;
    W.forEach((b) => {
      const ne = b.getBoundingClientRect();
      let ie = 0;
      ne.left < R.left ? ie = ne.left - R.left - 8 : ne.right > R.right && (ie = ne.right - R.right + 8), Math.abs(ie) < Math.abs(de) && (de = ie);
    }), Number.isFinite(de) && (P.scrollLeft += de);
  }
  function Z(P, L = !1) {
    const R = P === "3nps" ? x : N.length;
    return Array.from({ length: R }, (W, de) => {
      const b = de + 1;
      return '<label class="box-toggle" data-box="' + b + '"><input type="checkbox" value="' + b + '"' + (L && de === 0 ? " checked" : "") + "> Boksi " + b + "</label>";
    }).join("");
  }
  function C(P, L) {
    const R = Ae(L), W = new Map(R.map(([b, ne]) => [b, Pe(P, b, ne)])), de = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return R.flatMap(([b, ne]) => de.flatMap(({ suffix: ie, base: Ee }) => {
      const ve = Ee.map(([Ce]) => W.get((b + Ce) % 12));
      return ve.every(Boolean) ? {
        root: (P + b) % 12,
        degree: Number(String(ne).replace(/\D/g, "")),
        name: ve[0] + ie,
        notes: ve,
        base: Ee,
        add: []
      } : [];
    }));
  }
  function G(P, L) {
    const R = P.base.map(([b]) => (P.root + b) % 12), W = d.map((b) => {
      const ne = [];
      for (let ie = 0; ie <= L; ie++) {
        const Ee = (b + ie) % 12;
        R.includes(Ee) && ne.push({ fret: ie, pitch: Ee });
      }
      return ne;
    }), de = [];
    for (let b = 0; b <= W.length - 3; b++)
      for (const ne of W[b])
        for (const ie of W[b + 1])
          if (ne.pitch !== ie.pitch)
            for (const Ee of W[b + 2]) {
              if (Ee.pitch === ne.pitch || Ee.pitch === ie.pitch) continue;
              const ve = [ne.fret, ie.fret, Ee.fret], Ce = Math.min(...ve), He = Math.max(...ve);
              if (He - Ce > 3) continue;
              const ze = Array(d.length).fill(null);
              ze.splice(b, 3, ...ve), de.push({ strings: ze, low: Ce, high: He });
            }
    return de.sort((b, ne) => b.high - ne.high || b.low - ne.low);
  }
  const D = {
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
    const R = D[P + ":" + L];
    if (R) return { frets: R, barre: null };
    let W = null;
    return y.forEach(({ string: de, openPC: b, shapes: ne }) => {
      const ie = ne[L];
      if (!ie) return;
      let Ee = (P - b + 12) % 12;
      if (Ee + Math.min(...ie.filter((He) => He !== null)) < 0 && (Ee += 12), W && W.fret <= Ee) return;
      const ve = ie.map((He) => He === null ? null : Ee + He), Ce = Ee > 0 && ie.at(-1) === 0 ? { fret: Ee, from: de, to: ie.length - 1 } : null;
      W = { fret: Ee, frets: ve, barre: Ce };
    }), W && { frets: W.frets, barre: W.barre };
  }
  function ue(P, { frets: L, barre: R }, W) {
    const ve = [...d].reverse(), Ce = L.filter((fe) => fe > 0), ze = !Ce.length || Math.max(...Ce) <= 4 && (L.includes(0) || Math.min(...Ce) === 1) ? 1 : Math.min(...Ce), Qe = (fe) => 24 + fe * 14, Ve = (fe) => 30 + (fe - ze) * 18 + 18 / 2, S = 102;
    let z = '<svg class="chord-svg" viewBox="0 0 108 ' + (S + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + W + "-ote paksusta kielestä ohueen: " + L.map((fe) => fe ?? "x").join(" ") + '">';
    for (let fe = 0; fe <= 4; fe++)
      z += '<line class="' + (fe === 0 && ze === 1 ? "nut" : "fret") + '" x1="' + Qe(0) + '" y1="' + (30 + fe * 18) + '" x2="' + Qe(5) + '" y2="' + (30 + fe * 18) + '"/>';
    return L.forEach((fe, je) => {
      z += '<line class="string" x1="' + Qe(je) + '" y1="30" x2="' + Qe(je) + '" y2="' + S + '"/>';
    }), ze > 1 && (z += '<text class="fret-label" x="15" y="' + (Ve(ze) + 4) + '">' + ze + "</text>"), R && (z += '<rect class="barre" x="' + (Qe(R.from) - 6.5) + '" y="' + (Ve(R.fret) - 6.5) + '" width="' + ((R.to - R.from) * 14 + 13) + '" height="13" rx="6.5"/>'), L.forEach((fe, je) => {
      if (fe === null) {
        z += '<text class="marker" x="' + Qe(je) + '" y="22">×</text>';
        return;
      }
      const Fe = (ve[je] + fe) % 12 === P;
      if (fe === 0) {
        z += '<circle class="open' + (Fe ? " root-open" : "") + '" cx="' + Qe(je) + '" cy="18" r="4.5"/>';
        return;
      }
      R && fe === R.fret && je >= R.from && je <= R.to && !Fe || (z += '<circle class="' + (Fe ? "root" : "tone") + '" cx="' + Qe(je) + '" cy="' + Ve(fe) + '" r="6.5"/>');
    }), z + "</svg>";
  }
  function ce(P, L) {
    const R = new URLSearchParams(location.search), W = o.indexOf(R.get("toonikka")), de = R.get("asteikko");
    return {
      rootPC: W === -1 ? P : W,
      scaleId: Object.hasOwn(X, de) ? de : L
    };
  }
  function ye(P, L, R) {
    return P + "?" + new URLSearchParams({ toonikka: o[L], asteikko: R });
  }
  function ge(P, L, R, {
    boxes: W = [],
    onlyBoxNotes: de = !1,
    automatic: b = !0,
    focusDegree: ne = "",
    grip: ie = null,
    label: Ee = o[P] + " " + L.name,
    notes: ve = null,
    targets: Ce = !1
  } = {}) {
    const He = ee(R), ze = He + 48, Qe = ze + 28, Ve = q - 14, S = me(d.length - 1) + 14, z = S - Ve, fe = b ? 680 : Math.ceil(Qe * 0.64), je = W.flatMap((we) => we.positions), Fe = {};
    L.base.forEach(([we, _e]) => Fe[(P + we) % 12] = { deg: _e, added: !1 }), L.add.forEach(([we, _e]) => Fe[(P + we) % 12] = { deg: _e, added: !0 });
    const be = d.map((we, _e) => !!ie && ie[_e] === null), $t = te.filter((we, _e) => be[_e]).reverse(), cn = Ee + ". " + R + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + ($t.length ? " Soittamatta jäävät kielet: " + $t.join(", ") + "." : "");
    let he = '<svg viewBox="0 0 ' + Qe + " " + J + '" style="min-width:' + fe + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Ce ? "group" : "img") + '" aria-label="' + cn + '">';
    he += '<rect x="' + re + '" y="' + Ve + '" width="' + (le - re) + '" height="' + z + '" rx="6" fill="#2a2338"/>', he += '<rect x="' + le + '" y="' + Ve + '" width="' + (He - le) + '" height="' + z + '" fill="#231a12"/>', he += '<rect x="' + He + '" y="' + Ve + '" width="' + (Qe - He - 4) + '" height="' + z + '" rx="8" fill="#32251e"/>';
    for (let we = 1; we <= R; we++)
      he += '<line x1="' + ee(we) + '" y1="' + Ve + '" x2="' + ee(we) + '" y2="' + S + '" stroke="#6f5b47" stroke-width="2"/>';
    he += '<rect x="' + (le - 3) + '" y="' + Ve + '" width="6" height="' + z + '" rx="2" fill="#d8cbb6"/>', he += '<rect x="' + (ze - 11) + '" y="' + (Ve + 3) + '" width="22" height="' + (z - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', he += '<rect x="' + (ze - 4) + '" y="' + (Ve + 7) + '" width="3" height="' + (z - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Bt = (Ve + S) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((we) => we <= R).forEach((we) => he += '<circle cx="' + Q(we) + '" cy="' + Bt + '" r="5.5" fill="#7a6550"/>');
    for (let we = 12; we <= R; we += 12)
      he += '<circle cx="' + Q(we) + '" cy="' + (Bt - V) + '" r="5.5" fill="#7a6550"/>', he += '<circle cx="' + Q(we) + '" cy="' + (Bt + V) + '" r="5.5" fill="#7a6550"/>';
    he += '<text x="' + O + '" y="' + (J - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', he += '<text x="' + le + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', he += '<text x="' + ze + '" y="' + (J - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let we = 1; we <= R; we++)
      he += '<text x="' + Q(we) + '" y="' + (J - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + we + "</text>";
    return W.forEach(({ number: we, positions: _e }) => {
      _e.forEach((Ne) => {
        const qe = Ne.partial ? "box-highlight box-partial" : "box-highlight";
        he += '<g class="' + qe + '" data-box="' + we + '" aria-hidden="true">';
        const dt = Ne.strings.find((Rt) => Rt.length), en = (Q(dt[0]) + Q(dt.at(-1))) / 2;
        he += '<text class="box-number" x="' + en + '" y="12">' + we + "</text>", Ne.strings.forEach((Rt, Rn) => {
          if (!Rt.length) return;
          const zn = Q(Rt[0]) - 16, zt = Q(Rt.at(-1)) - Q(Rt[0]) + 32;
          he += '<rect class="box-band" x="' + zn + '" y="' + (me(Rn) - 14) + '" width="' + zt + '" height="28" rx="14"/>';
        }), he += "</g>";
      });
    }), d.forEach((we, _e) => {
      const Ne = 1 + _e * 0.45, qe = me(_e);
      be[_e] ? he += '<text class="muted-mark" x="' + O + '" y="' + (qe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : he += '<line x1="' + (re + 4) + '" y1="' + qe + '" x2="' + (le - 4) + '" y2="' + qe + '" stroke="#8b809d" stroke-dasharray="3 3"/>', he += "<g" + (be[_e] ? ' opacity=".35"' : "") + ">", he += '<line x1="' + le + '" y1="' + qe + '" x2="' + (ze + 5) + '" y2="' + qe + '" stroke="#b9b9c4" stroke-width="' + Ne.toFixed(2) + '"/>', he += '<circle cx="' + (ze + 5) + '" cy="' + qe + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', he += "</g>", he += '<text x="13" y="' + (qe + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + T[_e] + "</text>";
    }), Ce && (he += '<g class="fret-targets">', d.forEach((we, _e) => {
      for (let Ne = 0; Ne <= R; Ne++) {
        const qe = Ne ? te[_e] + "-kieli, " + Ne + ". nauha" : "vapaa " + te[_e] + "-kieli", dt = Ne ? I : le - re - 6;
        he += '<rect class="fret-target" role="button" tabindex="0" data-string="' + _e + '" data-fret="' + Ne + '" data-midi="' + (we + Ne) + '" aria-label="' + qe + '" x="' + (Q(Ne) - dt / 2) + '" y="' + (me(_e) - V / 2) + '" width="' + dt + '" height="' + V + '" fill="transparent"/>';
      }
    }), he += "</g>"), (ve ?? []).forEach(({ string: we, fret: _e, label: Ne, kind: qe }) => {
      he += '<g class="octave-note octave-' + qe + '">', he += '<circle cx="' + Q(_e) + '" cy="' + me(we) + '" r="' + oe + '"/>', he += '<text x="' + Q(_e) + '" y="' + (me(we) + 3.5) + '" font-size="' + (Ne.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Ne + "</text>", he += "</g>";
    }), ie && (he += '<g class="grip-notes">'), (ve ? [] : d).forEach((we, _e) => {
      for (let Ne = 0; Ne <= R; Ne++) {
        const qe = (we + Ne) % 12;
        if (!(qe in Fe) || ie && ie[_e] !== Ne || de && !je.some(({ strings: zn }) => {
          const zt = zn[_e];
          return zt.length > 0 && Ne >= zt[0] && Ne <= zt.at(-1);
        })) continue;
        const dt = Fe[qe], en = dt.deg === "1", Rt = dt.added ? "#f0a13c" : en ? "#4b2fd6" : "#6d4aff", Rn = dt.added ? "#1a1430" : "#fff";
        dt.deg === ne && (he += '<circle class="focus-note" cx="' + Q(Ne) + '" cy="' + me(_e) + '" r="14.5"/>'), he += '<circle cx="' + Q(Ne) + '" cy="' + me(_e) + '" r="' + oe + '" fill="' + Rt + '" stroke="' + (en ? "#fff" : "#1a1430") + '" stroke-width="' + (en ? 2.5 : 1) + '"/>', he += '<text x="' + Q(Ne) + '" y="' + (me(_e) + 3.5) + '" font-size="' + (dt.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Rn + '" text-anchor="middle">' + dt.deg + "</text>";
      }
    }), ie && (he += "</g>"), he += "</svg>", he;
  }
  return {
    CHROM: o,
    OPEN_PITCHES: d,
    PENT_MAJ: A,
    SCALES: X,
    noteName: Pe,
    scaleNotes: Ae,
    scaleTriads: C,
    triadGrips: G,
    chordGrip: E,
    renderChordDiagram: ue,
    selectionFromURL: ce,
    selectionHref: ye,
    renderBoard: ge,
    BOX_FRETS: c,
    supportsThreeNoteBoxes: Re,
    syncBoxSystem: Oe,
    fingeringBoxes: De,
    boxOptions: Z,
    revealPositions: ke
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
const rt = globalThis.MusicMapFretboard, Pt = (o) => (o % 12 + 12) % 12, jd = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], _d = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], ft = (o, u = !1, a = !1) => (u ? _d : jd)[Pt(o)] + (a ? Math.floor(o / 12) - 1 : ""), cs = ["ohut E", "B", "G", "D", "A", "paksu E"];
function hc(o, u, a) {
  return o.flatMap((d) => Array.from({ length: a - u + 1 }, (m, c) => ({ string: d, fret: u + c, midi: rt.OPEN_PITCHES[d] + u + c })));
}
const yt = (o) => `${o.string}:${o.fret}`, Qn = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, hl = [
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
  return [d, d + 12].flatMap((m) => a.frets.flatMap((c, x) => c === null || c + m > 24 ? [] : [{ string: x, fret: c + m, midi: rt.OPEN_PITCHES[x] + c + m }]));
}
const fl = {
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
}, Pn = (o, u, a, d) => typeof o == "number" && Number.isFinite(o) ? Math.max(u, Math.min(a, o)) : d, bt = (o, u, a) => u.includes(o) ? o : a;
function ps(o) {
  const u = { ...fl };
  u.mode = bt(o.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], u.mode), u.strings = Array.isArray(o.strings) ? [...new Set(o.strings.filter((a) => Number.isInteger(a) && a >= 0 && a <= 5))] : u.strings, u.strings.length || (u.strings = [...fl.strings]), u.min = Math.round(Pn(o.min, 0, 24, u.min)), u.max = Math.round(Pn(o.max, u.min, 24, Math.max(u.min, u.max)));
  for (const a of ["accidentals", "flats", "weak"]) typeof o[a] == "boolean" && (u[a] = o[a]);
  return u.check = bt(o.check, ["class", "pitch"], u.check), u.input = bt(o.input, ["mic", "board"], u.input), u.rounds = [0, 10, 20].includes(o.rounds) ? o.rounds : u.rounds, u.root = Math.round(Pn(o.root, 0, 11, u.root)), u.scale = typeof o.scale == "string" && Object.hasOwn(rt.SCALES, o.scale) ? o.scale : u.scale, u.box = Math.round(Pn(o.box, 0, 5, u.box)), u.order = bt(o.order, ["random", "up", "down"], u.order), u.chord = bt(o.chord, ["maj", "min", "dom7"], u.chord), u.chordTone = bt(o.chordTone, ["build", "random", "1", "3", "5", "7"], u.chordTone), u.chord !== "dom7" && u.chordTone === "7" && (u.chordTone = "build"), u.shape = bt(o.shape, ["C", "A", "G", "E", "D"], u.shape), u.intervals = Array.isArray(o.intervals) ? [...new Set(o.intervals.filter((a) => Number.isInteger(a) && a >= 1 && a <= 12))] : u.intervals, u.intervals.length || (u.intervals = [...fl.intervals]), u.direction = bt(o.direction, ["up", "down", "both"], u.direction), u.hints = bt(o.hints, ["always", "fade", "off"], u.hints), u.activity = bt(o.activity, ["play", "degree"], u.activity), u.minRms = Pn(o.minRms, 1e-3, 0.15, u.minRms), u.clarity = Pn(o.clarity, 0.85, 0.99, u.clarity), u.stability = Pn(o.stability, 120, 800, u.stability), u.cents = Pn(o.cents, 10, 45, u.cents), u.device = typeof o.device == "string" ? o.device.slice(0, 256) : "", u;
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
    const m = a.get("toonikka").replace("#", "♯").replace("b", "♭"), c = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], x = Math.max(rt.CHROM.indexOf(m), c.indexOf(m), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(m));
    x >= 0 && (d.root = x);
  }
  return ps(d);
}
function Md(o) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: o.mode,
    toonikka: rt.CHROM[o.root],
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
const pl = (o) => o.mode === "ear-note" ? "note" : ["scale", "chord"].includes(o.mode) && o.activity === "degree" ? "degree" : o.input, ml = (o) => ["note", "degree"].includes(pl(o)) ? "class" : o.check, fs = [
  ["notes", "Otelaudan sävelet", "Löydä sävel valitulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele yksi sävel ja valitse sen nimi. Tämä harjoittaa sävelmuistia ilman sävellajiviitettä."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitaralla."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu yksi sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi saman duurisoinnun säveliä viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja toista niistä jälkimmäinen."]
];
function Ze({ label: o, children: u }) {
  const a = $e.useId();
  return /* @__PURE__ */ p.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: a, children: o }),
    $e.cloneElement(u, { id: a })
  ] });
}
function Pd({ s: o, change: u, locked: a, devices: d }) {
  const m = (c, x) => u(ps({ ...o, [c]: x }));
  return /* @__PURE__ */ p.jsxs("fieldset", { className: "settings", disabled: a, children: [
    /* @__PURE__ */ p.jsx("legend", { children: "Harjoituksen asetukset" }),
    /* @__PURE__ */ p.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ p.jsx(Ze, { label: "Harjoitus", children: /* @__PURE__ */ p.jsx("select", { value: o.mode, onChange: (c) => m("mode", c.target.value), children: fs.map(([c, x]) => /* @__PURE__ */ p.jsx("option", { value: c, children: x }, c)) }) }),
      /* @__PURE__ */ p.jsx(Ze, { label: "Vastaustapa", children: /* @__PURE__ */ p.jsxs("select", { value: o.input, onChange: (c) => m("input", c.target.value), children: [
        /* @__PURE__ */ p.jsx("option", { value: "board", children: "Valitse otelaudalta" }),
        /* @__PURE__ */ p.jsx("option", { value: "mic", children: "Soita mikrofoniin / äänikorttiin" })
      ] }) }),
      /* @__PURE__ */ p.jsx(Ze, { label: "Kierroksen pituus", children: /* @__PURE__ */ p.jsxs("select", { value: o.rounds, onChange: (c) => m("rounds", Number(c.target.value)), children: [
        /* @__PURE__ */ p.jsx("option", { value: "10", children: "10 kysymystä" }),
        /* @__PURE__ */ p.jsx("option", { value: "20", children: "20 kysymystä" }),
        /* @__PURE__ */ p.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
      ] }) }),
      /* @__PURE__ */ p.jsx(Ze, { label: "Vastausten tarkistus", children: /* @__PURE__ */ p.jsxs("select", { value: o.check, onChange: (c) => m("check", c.target.value), children: [
        /* @__PURE__ */ p.jsx("option", { value: "class", children: "Sävelluokka · mikä tahansa oktaavi" }),
        /* @__PURE__ */ p.jsx("option", { value: "pitch", children: "Sävelkorkeus · tarkka oktaavi" })
      ] }) })
    ] }),
    o.mode === "ear-note" && /* @__PURE__ */ p.jsx("p", { className: "tools-note", children: "Tässä tehtävässä vastaat aina sävelnimipainikkeilla. Mikrofoni ei käynnisty." }),
    ["scale", "chord", "caged"].includes(o.mode) && /* @__PURE__ */ p.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ p.jsx(Ze, { label: "Toonika / soinnun perussävel", children: /* @__PURE__ */ p.jsx("select", { value: o.root, onChange: (c) => m("root", Number(c.target.value)), children: rt.CHROM.map((c, x) => /* @__PURE__ */ p.jsx("option", { value: x, children: c }, c)) }) }),
      o.mode === "scale" && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(Ze, { label: "Asteikko", children: /* @__PURE__ */ p.jsx("select", { value: o.scale, onChange: (c) => m("scale", c.target.value), children: Object.entries(rt.SCALES).map(([c, x]) => /* @__PURE__ */ p.jsx("option", { value: c, children: x.name }, c)) }) }),
        /* @__PURE__ */ p.jsx(Ze, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ p.jsxs("select", { value: o.box, onChange: (c) => m("box", Number(c.target.value)), children: [
          /* @__PURE__ */ p.jsx("option", { value: "0", children: "Koko valittu alue" }),
          [1, 2, 3, 4, 5].map((c) => /* @__PURE__ */ p.jsxs("option", { value: c, children: [
            "Boksi ",
            c
          ] }, c))
        ] }) }),
        /* @__PURE__ */ p.jsx(Ze, { label: "Sävelten järjestys", children: /* @__PURE__ */ p.jsxs("select", { value: o.order, onChange: (c) => m("order", c.target.value), children: [
          /* @__PURE__ */ p.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ p.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ p.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      o.mode === "chord" && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(Ze, { label: "Sointutyyppi", children: /* @__PURE__ */ p.jsx("select", { value: o.chord, onChange: (c) => m("chord", c.target.value), children: Object.entries(Qn).map(([c, x]) => /* @__PURE__ */ p.jsx("option", { value: c, children: x.name }, c)) }) }),
        /* @__PURE__ */ p.jsx(Ze, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ p.jsxs("select", { value: o.chordTone, onChange: (c) => m("chordTone", c.target.value), children: [
          /* @__PURE__ */ p.jsx("option", { value: "build", children: "Rakenna: 1 → 3 → 5 → (♭7)" }),
          /* @__PURE__ */ p.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ p.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ p.jsx("option", { value: "3", children: "Terssi · 3 / ♭3" }),
          /* @__PURE__ */ p.jsx("option", { value: "5", children: "Kvintti · 5" }),
          o.chord === "dom7" && /* @__PURE__ */ p.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      o.mode === "caged" ? /* @__PURE__ */ p.jsx(Ze, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ p.jsx("select", { value: o.shape, onChange: (c) => m("shape", c.target.value), children: ["C", "A", "G", "E", "D"].map((c) => /* @__PURE__ */ p.jsx("option", { children: c }, c)) }) }) : /* @__PURE__ */ p.jsx(Ze, { label: "Tehtävä", children: /* @__PURE__ */ p.jsxs("select", { value: o.activity, onChange: (c) => m("activity", c.target.value), children: [
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
        /* @__PURE__ */ p.jsx(Ze, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ p.jsx("input", { type: "number", min: "0", max: "24", value: o.min, onChange: (c) => m("min", Number(c.target.value)) }) }),
        /* @__PURE__ */ p.jsx(Ze, { label: "Viimeinen nauha", children: /* @__PURE__ */ p.jsx("input", { type: "number", min: o.min, max: "24", value: o.max, onChange: (c) => m("max", Number(c.target.value)) }) }),
        /* @__PURE__ */ p.jsx(Ze, { label: "Otelaudan vihjeet", children: /* @__PURE__ */ p.jsxs("select", { value: o.hints, onChange: (c) => m("hints", c.target.value), children: [
          /* @__PURE__ */ p.jsx("option", { value: "always", children: "Näytä aina" }),
          /* @__PURE__ */ p.jsx("option", { value: "fade", children: "Vähennä: 3 avustettua, 3 ilman nimiä, sitten piiloon" }),
          /* @__PURE__ */ p.jsx("option", { value: "off", children: "Piilota · avaa tarvittaessa" })
        ] }) }),
        /* @__PURE__ */ p.jsx(Ze, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ p.jsxs("select", { value: String(o.flats), onChange: (c) => m("flats", c.target.value === "true"), children: [
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
        hl[c]
      ] }, c)) }),
      /* @__PURE__ */ p.jsx(Ze, { label: "Intervallin suunta", children: /* @__PURE__ */ p.jsxs("select", { value: o.direction, onChange: (c) => m("direction", c.target.value), children: [
        /* @__PURE__ */ p.jsx("option", { value: "both", children: "Molemmat" }),
        /* @__PURE__ */ p.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ p.jsx("option", { value: "down", children: "Laskeva" })
      ] }) })
    ] }),
    /* @__PURE__ */ p.jsxs("details", { children: [
      /* @__PURE__ */ p.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ p.jsx("p", { children: "Valitse mikrofoni tai äänikortin soitintulo. Sammuta taustamusiikki ja vaimenna muut kielet. Soita yksi puhdas sävel, anna sen vakaantua ja vaimenna kieli ennen seuraavaa vastausta. Kalibroi hiljaisessa huoneessa." }),
      /* @__PURE__ */ p.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ p.jsx(Ze, { label: "Äänitulo", children: /* @__PURE__ */ p.jsxs("select", { value: o.device, onChange: (c) => m("device", c.target.value), children: [
          /* @__PURE__ */ p.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
          d.map((c, x) => /* @__PURE__ */ p.jsx("option", { value: c.deviceId, children: c.label || `Äänitulo ${x + 1}` }, c.deviceId))
        ] }) }),
        /* @__PURE__ */ p.jsx(Ze, { label: `Äänikynnys (RMS) · ${o.minRms.toFixed(3)}`, children: /* @__PURE__ */ p.jsx("input", { type: "range", min: "0.001", max: "0.15", step: "0.001", value: o.minRms, onChange: (c) => m("minRms", Number(c.target.value)) }) }),
        /* @__PURE__ */ p.jsx(Ze, { label: `Varmuuskynnys · ${Math.round(o.clarity * 100)} %`, children: /* @__PURE__ */ p.jsx("input", { type: "range", min: "0.85", max: "0.99", step: "0.01", value: o.clarity, onChange: (c) => m("clarity", Number(c.target.value)) }) }),
        /* @__PURE__ */ p.jsx(Ze, { label: `Vakaa sävel vähintään · ${o.stability} ms`, children: /* @__PURE__ */ p.jsx("input", { type: "range", min: "120", max: "800", step: "20", value: o.stability, onChange: (c) => m("stability", Number(c.target.value)) }) }),
        /* @__PURE__ */ p.jsx(Ze, { label: `Vireen toleranssi · ±${o.cents} senttiä`, children: /* @__PURE__ */ p.jsx("input", { type: "range", min: "10", max: "45", step: "1", value: o.cents, onChange: (c) => m("cents", Number(c.target.value)) }) })
      ] })
    ] })
  ] });
}
const sc = "musiikin-kartta:harjoittelu", pc = () => ({ version: 2, settings: { ...fl }, stats: {}, recent: [], sessions: [] }), ds = (o) => `${o.input}:${o.check}:${o.hint ? "guided" : "solo"}:${o.item}`, vl = (o) => typeof o == "number" && Number.isFinite(o) && o >= 0;
function Rd(o) {
  return !!o && ["attempts", "correct", "totalMs", "lastSeen"].every((u) => vl(o[u])) && o.correct <= o.attempts && (o.errors === void 0 || vl(o.errors));
}
function zd(o) {
  if (!o) return pc();
  const u = JSON.parse(o);
  if (!u || ![1, 2].includes(u.version) || !u.stats || typeof u.stats != "object" || Array.isArray(u.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(u.stats).some((a) => !Rd(a))) throw new Error("Virheellisiä tilastoja");
  if (u.recent !== void 0 && (!Array.isArray(u.recent) || u.recent.some((a) => !a || typeof a.id != "string" || !vl(a.ms)))) throw new Error("Virheellisiä tuloksia");
  if (u.sessions !== void 0 && (!Array.isArray(u.sessions) || u.sessions.some((a) => !a || typeof a.id != "string" || !vl(a.count)))) throw new Error("Virheellisiä kierroksia");
  return {
    version: 2,
    settings: ps(u.settings ?? {}),
    stats: Object.fromEntries(Object.entries(u.stats).map(([a, d]) => [a, { ...d, errors: d.errors ?? 0 }])),
    recent: (u.recent ?? []).slice(-500),
    sessions: (u.sessions ?? []).slice(-200)
  };
}
function yl(o) {
  if (!o?.attempts) return null;
  const u = Math.max(0, Math.min(1, 1 - (o.totalMs / o.attempts - 1500) / 3500));
  return o.correct / o.attempts * 0.65 + u * 0.35;
}
function ac(o) {
  return !o || o.attempts < 3 ? 3 : 0.25 + (1 - yl(o)) * 3;
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
function cc({ min: o, max: u, strings: a, targets: d = [], contextTargets: m = [], labels: c = !1, disabled: x = !1, answer: N, stats: T, currentInput: te, currentCheck: $ }) {
  const [A, X] = $e.useState({ string: Math.min(...a), fret: o }), re = $e.useRef(null), le = d.map(yt).join(",");
  $e.useEffect(() => {
    const I = re.current, V = I?.querySelector(".target");
    I && V && (I.scrollLeft += V.getBoundingClientRect().left - I.getBoundingClientRect().left - I.clientWidth / 2 + V.clientWidth / 2);
  }, [le]);
  function q(I) {
    if (!T) return;
    const V = `:${yt(I)}`, oe = Object.entries(T).filter(([O]) => O.startsWith(`${te}:${$}:solo:notes:`) && O.endsWith(V)).map(([, O]) => O);
    if (oe.length)
      return oe.reduce((O, J) => ({ attempts: O.attempts + J.attempts, correct: O.correct + J.correct, errors: O.errors + J.errors, totalMs: O.totalMs + J.totalMs, lastSeen: Math.max(O.lastSeen, J.lastSeen) }));
  }
  return /* @__PURE__ */ p.jsx("div", { ref: re, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": T ? "Harjoiteltujen kohteiden osaamiskartta" : "Otelaudan vastausruudukko", children: /* @__PURE__ */ p.jsxs("table", { className: "practice-board", children: [
    /* @__PURE__ */ p.jsxs("caption", { children: [
      T ? "Osaamiskartta" : "Otelaudan nauhat",
      " · ohut E ylimpänä"
    ] }),
    /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
      /* @__PURE__ */ p.jsx("th", { scope: "col", children: "Kieli" }),
      Array.from({ length: u - o + 1 }, (I, V) => /* @__PURE__ */ p.jsx("th", { scope: "col", children: o + V }, V))
    ] }) }),
    /* @__PURE__ */ p.jsx("tbody", { children: rt.OPEN_PITCHES.map((I, V) => /* @__PURE__ */ p.jsxs("tr", { children: [
      /* @__PURE__ */ p.jsxs("th", { scope: "row", children: [
        V + 1,
        " · ",
        cs[V]
      ] }),
      hc([V], o, u).map((oe) => {
        const O = d.some((Se) => yt(Se) === yt(oe)), J = m.some((Se) => yt(Se) === yt(oe)), ee = q(oe), Q = yl(ee), me = Q === null ? "unseen" : ee.attempts < 3 ? "few" : Q >= 0.8 ? "strong" : Q >= 0.5 ? "growing" : "weak", Pe = `${cs[V]}-kieli, nauha ${oe.fret}`, Ae = ee ? `${Math.round(Q * 100)} %, ${ee.correct}/${ee.attempts} heti oikein, keskimäärin ${(ee.totalMs / ee.attempts / 1e3).toFixed(1)} s` : "ei havaintoja";
        return /* @__PURE__ */ p.jsx("td", { className: `${O ? "target" : J ? "context-note" : ""} ${T ? me : ""}`, children: T ? /* @__PURE__ */ p.jsx("span", { tabIndex: 0, title: `${Pe}: ${Ae}`, "aria-label": `${Pe}: ${Ae}`, children: Q === null ? "·" : ee.attempts < 3 ? "?" : Math.round(Q * 100) }) : /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "button",
            "data-string": V,
            "data-fret": oe.fret,
            tabIndex: A.string === V && A.fret === oe.fret ? 0 : -1,
            onFocus: () => X(oe),
            onKeyDown: (Se) => {
              if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(Se.key)) return;
              Se.preventDefault();
              const Be = [...a].sort((De, ke) => De - ke), Ie = Be.indexOf(V), Re = Se.key === "ArrowUp" ? Be[Math.max(0, Ie - 1)] : Se.key === "ArrowDown" ? Be[Math.min(Be.length - 1, Ie + 1)] : V, Oe = Se.key === "Home" ? o : Se.key === "End" ? u : Math.max(o, Math.min(u, oe.fret + (Se.key === "ArrowRight" ? 1 : Se.key === "ArrowLeft" ? -1 : 0)));
              Se.currentTarget.closest("table")?.querySelector(`button[data-string="${Re}"][data-fret="${Oe}"]`)?.focus();
            },
            disabled: x || !a.includes(V),
            "aria-label": Pe + (c && (O || J) ? `, ${ft(oe.midi)}` : ""),
            onClick: () => N?.(oe),
            children: O || J ? c ? ft(oe.midi) : "●" : "·"
          }
        ) }, oe.fret);
      })
    ] }, V)) })
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
      const te = Math.PI * d / this.size;
      a[d] = Math.cos(te), a[d + 1] = -Math.sin(te);
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
    var a = this._out, d = this._csize, m = this._width, c = 1 << m, x = d / c << 1, N, T, te = this._bitrev;
    if (x === 4)
      for (N = 0, T = 0; N < d; N += x, T++) {
        const I = te[T];
        this._singleTransform2(N, I, c);
      }
    else
      for (N = 0, T = 0; N < d; N += x, T++) {
        const I = te[T];
        this._singleTransform4(N, I, c);
      }
    var $ = this._inv ? -1 : 1, A = this.table;
    for (c >>= 2; c >= 2; c >>= 2) {
      x = d / c << 1;
      var X = x >>> 2;
      for (N = 0; N < d; N += x)
        for (var re = N + X, le = N, q = 0; le < re; le += 2, q += c) {
          const I = le, V = I + X, oe = V + X, O = oe + X, J = a[I], ee = a[I + 1], Q = a[V], me = a[V + 1], Pe = a[oe], Ae = a[oe + 1], Se = a[O], Be = a[O + 1], Ie = J, Re = ee, Oe = A[q], De = $ * A[q + 1], ke = Q * Oe - me * De, Z = Q * De + me * Oe, C = A[2 * q], G = $ * A[2 * q + 1], D = Pe * C - Ae * G, y = Pe * G + Ae * C, E = A[3 * q], ue = $ * A[3 * q + 1], ce = Se * E - Be * ue, ye = Se * ue + Be * E, ge = Ie + D, P = Re + y, L = Ie - D, R = Re - y, W = ke + ce, de = Z + ye, b = $ * (ke - ce), ne = $ * (Z - ye), ie = ge + W, Ee = P + de, ve = ge - W, Ce = P - de, He = L + ne, ze = R - b, Qe = L - ne, Ve = R + b;
          a[I] = ie, a[I + 1] = Ee, a[V] = He, a[V + 1] = ze, a[oe] = ve, a[oe + 1] = Ce, a[O] = Qe, a[O + 1] = Ve;
        }
    }
  }, o.prototype._singleTransform2 = function(a, d, m) {
    const c = this._out, x = this._data, N = x[d], T = x[d + 1], te = x[d + m], $ = x[d + m + 1], A = N + te, X = T + $, re = N - te, le = T - $;
    c[a] = A, c[a + 1] = X, c[a + 2] = re, c[a + 3] = le;
  }, o.prototype._singleTransform4 = function(a, d, m) {
    const c = this._out, x = this._data, N = this._inv ? -1 : 1, T = m * 2, te = m * 3, $ = x[d], A = x[d + 1], X = x[d + m], re = x[d + m + 1], le = x[d + T], q = x[d + T + 1], I = x[d + te], V = x[d + te + 1], oe = $ + le, O = A + q, J = $ - le, ee = A - q, Q = X + I, me = re + V, Pe = N * (X - I), Ae = N * (re - V), Se = oe + Q, Be = O + me, Ie = J + Ae, Re = ee - Pe, Oe = oe - Q, De = O - me, ke = J - Ae, Z = ee + Pe;
    c[a] = Se, c[a + 1] = Be, c[a + 2] = Ie, c[a + 3] = Re, c[a + 4] = Oe, c[a + 5] = De, c[a + 6] = ke, c[a + 7] = Z;
  }, o.prototype._realTransform4 = function() {
    var a = this._out, d = this._csize, m = this._width, c = 1 << m, x = d / c << 1, N, T, te = this._bitrev;
    if (x === 4)
      for (N = 0, T = 0; N < d; N += x, T++) {
        const qe = te[T];
        this._singleRealTransform2(N, qe >>> 1, c >>> 1);
      }
    else
      for (N = 0, T = 0; N < d; N += x, T++) {
        const qe = te[T];
        this._singleRealTransform4(N, qe >>> 1, c >>> 1);
      }
    var $ = this._inv ? -1 : 1, A = this.table;
    for (c >>= 2; c >= 2; c >>= 2) {
      x = d / c << 1;
      var X = x >>> 1, re = X >>> 1, le = re >>> 1;
      for (N = 0; N < d; N += x)
        for (var q = 0, I = 0; q <= le; q += 2, I += c) {
          var V = N + q, oe = V + re, O = oe + re, J = O + re, ee = a[V], Q = a[V + 1], me = a[oe], Pe = a[oe + 1], Ae = a[O], Se = a[O + 1], Be = a[J], Ie = a[J + 1], Re = ee, Oe = Q, De = A[I], ke = $ * A[I + 1], Z = me * De - Pe * ke, C = me * ke + Pe * De, G = A[2 * I], D = $ * A[2 * I + 1], y = Ae * G - Se * D, E = Ae * D + Se * G, ue = A[3 * I], ce = $ * A[3 * I + 1], ye = Be * ue - Ie * ce, ge = Be * ce + Ie * ue, P = Re + y, L = Oe + E, R = Re - y, W = Oe - E, de = Z + ye, b = C + ge, ne = $ * (Z - ye), ie = $ * (C - ge), Ee = P + de, ve = L + b, Ce = R + ie, He = W - ne;
          if (a[V] = Ee, a[V + 1] = ve, a[oe] = Ce, a[oe + 1] = He, q === 0) {
            var ze = P - de, Qe = L - b;
            a[O] = ze, a[O + 1] = Qe;
            continue;
          }
          if (q !== le) {
            var Ve = R, S = -W, z = P, fe = -L, je = -$ * ie, Fe = -$ * ne, be = -$ * b, $t = -$ * de, cn = Ve + je, he = S + Fe, Bt = z + $t, we = fe - be, _e = N + re - q, Ne = N + X - q;
            a[_e] = cn, a[_e + 1] = he, a[Ne] = Bt, a[Ne + 1] = we;
          }
        }
    }
  }, o.prototype._singleRealTransform2 = function(a, d, m) {
    const c = this._out, x = this._data, N = x[d], T = x[d + m], te = N + T, $ = N - T;
    c[a] = te, c[a + 1] = 0, c[a + 2] = $, c[a + 3] = 0;
  }, o.prototype._singleRealTransform4 = function(a, d, m) {
    const c = this._out, x = this._data, N = this._inv ? -1 : 1, T = m * 2, te = m * 3, $ = x[d], A = x[d + m], X = x[d + T], re = x[d + te], le = $ + X, q = $ - X, I = A + re, V = N * (A - re), oe = le + I, O = q, J = -V, ee = le - I, Q = q, me = V;
    c[a] = oe, c[a + 1] = 0, c[a + 2] = O, c[a + 3] = J, c[a + 4] = ee, c[a + 5] = 0, c[a + 6] = Q, c[a + 7] = me;
  }, as;
}
var Od = Id();
const Dd = /* @__PURE__ */ cd(Od);
class ei {
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
    return new ei(
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
    return new ei(
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
    return new ei(u, (a) => Array(a));
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
  const [a, d, m] = [o - 1, o, o + 1], [c, x, N] = [u[a], u[d], u[m]], T = c / 2 - x + N / 2, te = -(c / 2) * (d + m) + x * (a + m) - N / 2 * (a + d), $ = c * d * m / 2 - x * a * m + N * a * d / 2, A = -te / (2 * T), X = T * A * A + te * A + $;
  return [A, X];
}
class ti {
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
    return new ti(u, (a) => new Float32Array(a));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(u) {
    return new ti(u, (a) => new Float64Array(a));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(u) {
    return new ti(u, (a) => Array(a));
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
    this._autocorrelator = new ei(u, a), this._nsdfBuffer = a(u);
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
    this.analyser = u.context.createAnalyser(), this.analyser.fftSize = d, this.analyser.smoothingTimeConstant = 0, u.source.connect(this.analyser), this.buffer = new Float32Array(new ArrayBuffer(this.analyser.fftSize * 4)), this.detector = ti.forFloat32Array(this.analyser.fftSize), this.detector.minVolumeDecibels = -60;
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
      onStableNote: te
    } = this.opts;
    this.analyser.getFloatTimeDomainData(this.buffer);
    const $ = dc(this.buffer);
    if ($ < a) {
      this.consecutive = null, this.lastEmittedMidi = null, T?.(null), this.gate.feed(null, performance.now(), m);
      return;
    }
    const [A, X] = this.detector.findPitch(
      this.buffer,
      this.mic.context.sampleRate
    );
    if (X < u || !isFinite(A) || A < x || A > N) {
      this.consecutive = null, T?.(null), this.gate.feed(null, performance.now(), m);
      return;
    }
    const { midi: re, cents: le } = Ed(A);
    if (T?.({ frequency: A, clarity: X, midi: re, cents: le, rms: $ }), Math.abs(le) > c) {
      this.consecutive = null, this.gate.feed(null, performance.now(), m);
      return;
    }
    this.consecutive && this.consecutive.midi === re ? this.consecutive.count += 1 : this.consecutive = { midi: re, count: 1, since: performance.now() }, this.consecutive.count >= d && this.gate.feed(re, performance.now(), m) !== null && (this.lastEmittedMidi = re, te?.({ midi: re, frequency: A, timestamp: performance.now() }));
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
function br(o) {
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
function gl(o) {
  let u = hc(o.strings, o.min, o.max);
  if (["notes", "ear-note", "repeat"].includes(o.mode)) return u.filter((a) => o.accidentals || ![1, 3, 6, 8, 10].includes(Pt(a.midi)));
  if (o.mode === "caged") {
    const a = new Set(Nd(o.root, o.shape).map(yt));
    return u.filter((d) => a.has(yt(d)));
  }
  if (o.mode === "chord") return u.filter((a) => Qn[o.chord].tones.some(([d]) => Pt(a.midi - o.root) === d));
  if (o.mode === "scale") {
    const a = rt.SCALES[o.scale];
    if (u = u.filter((d) => rt.scaleNotes(a).some(([m]) => Pt(d.midi - o.root) === m)), o.box) {
      const d = rt.fingeringBoxes(o.root, a, "pentatonic", [o.box], 24).flatMap((m) => m.positions);
      u = u.filter((m) => d.some((c) => c.strings[m.string].length && m.fret >= c.strings[m.string][0] && m.fret <= c.strings[m.string].at(-1)));
    }
  }
  return u;
}
function cl(o, u, a = Math.random) {
  if (!o.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  let d = Math.min(0.999999999, Math.max(0, a())) * u.reduce((m, c) => m + c, 0);
  for (let m = 0; m < o.length; m++)
    if (d -= u[m], d < 0) return o[m];
  return o.at(-1);
}
function dl(o, u, a, d) {
  return o.mode === "interval" ? `interval:${a}:${d}` : o.mode === "chord" ? `chord:${o.root}:${o.chord}:${Pt(u.midi - o.root)}:${o.activity}` : o.mode === "scale" ? `scale:${o.root}:${o.scale}:${yt(u)}:${o.activity}` : o.mode === "caged" ? `caged:${o.root}:${o.shape}:${yt(u)}` : o.mode === "ear-note" ? `ear-note:${Pt(u.midi)}` : `${o.mode}:${yt(u)}`;
}
function Qd(o, u, a = {}, d, m = Math.random) {
  let c = gl(o);
  c.length || cl([], []);
  let x, N, T = o.direction;
  if (o.mode === "interval") {
    T = T === "both" ? m() < 0.5 ? "up" : "down" : T;
    const O = o.intervals.flatMap((ee) => c.flatMap((Q) => c.filter((me) => me.midi === Q.midi + (T === "down" ? -ee : ee)).map((me) => ({ iv: ee, reference: Q.midi, target: me })))), J = cl(O, O.map((ee) => o.weak ? ac(a[ds({ input: pl(o), check: ml(o), hint: !1, item: dl(o, ee.target, ee.iv, T) })]) : 1), m);
    x = J.iv, N = J.reference, c = [J.target];
  }
  const te = o.mode === "scale" ? rt.scaleNotes(rt.SCALES[o.scale]) : Qn[o.mode === "caged" ? "maj" : o.chord].tones;
  if (o.mode === "chord" && o.chordTone !== "random") {
    const O = o.chordTone === "build" ? te[u % te.length][0] : te.find(([, J]) => J.endsWith(o.chordTone))?.[0];
    c = c.filter((J) => Pt(J.midi - o.root) === O);
  }
  let $;
  if (o.mode === "scale" && o.order !== "random") {
    const O = [...new Map(c.sort((J, ee) => J.midi - ee.midi || J.string - ee.string).map((J) => [J.midi, J])).values()];
    o.order === "down" && O.reverse(), $ = cl(O, O.map((J, ee) => ee === u % O.length ? 1 : 0), m);
  } else
    c.length > 1 && (c = c.filter((O) => yt(O) !== (d && yt(d.position)))), $ = cl(c, c.map((O) => o.weak ? ac(a[ds({ input: pl(o), check: ml(o), hint: !1, item: dl(o, O) })]) : 1), m);
  const A = Pt($.midi - o.root), X = te.find(([O]) => O === A)?.[1], re = o.mode === "scale" && X ? rt.noteName(o.root, A, X) : ft($.midi, o.flats), le = re + (o.check === "pitch" ? Math.floor($.midi / 12) - 1 : ""), q = ["ohuelta E", "B", "G", "D", "A", "paksulta E"][$.string];
  let I = `Etsi ja soita ${le} ${q}-kieleltä.`, V = [], oe = "position";
  return o.mode === "ear-note" && (I = "Kuuntele sävel. Mikä sävelnimi soi?", V = [$.midi], oe = "note"), o.mode === "repeat" && (I = "Kuuntele ja toista kuulemasi sävel kitaralla.", V = [$.midi]), o.mode === "scale" && (I = `Soita ${ft(o.root, o.flats)}-${rt.SCALES[o.scale].name}: ${X}. aste${o.check === "pitch" ? ` (${le})` : ""}.`), (o.mode === "chord" || o.mode === "caged") && (I = `Soita ${ft(o.root, o.flats)}${Qn[o.mode === "caged" ? "maj" : o.chord].suffix}-soinnun ${X}. aste${o.mode === "caged" ? ` ${o.shape}-muodosta` : ""}${o.check === "pitch" ? ` (${le})` : ""}.`), ["scale", "chord"].includes(o.mode) && o.activity === "degree" && (I = `Mikä aste ${re} on ${ft(o.root, o.flats)}${o.mode === "scale" ? "-" + rt.SCALES[o.scale].name + "-asteikossa" : Qn[o.chord].suffix + "-soinnussa"}?`, oe = "degree"), o.mode === "interval" && (V = [N, $.midi], I = `Kuuntele ${T === "down" ? "laskeva" : "nouseva"} intervalli. Toista jälkimmäinen sävel. Alkusävel on ${ft(N, o.flats, !0)}.`), {
    position: $,
    midi: $.midi,
    item: dl(o, $, x, T),
    prompt: I,
    degree: X,
    interval: o.mode === "interval" ? x : A,
    reference: N,
    sound: V,
    choices: oe
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
    if (!(a === "degree" ? u === m.interval : a === "board" && this.settings.mode === "notes" ? !!d && d.string === m.position.string && us(m.midi, u, this.settings.check) : a === "board" && this.settings.mode === "caged" ? !!d && gl(this.settings).some((N) => yt(N) === yt(d)) && us(m.midi, u, this.settings.check) : us(m.midi, u, a === "note" ? "class" : this.settings.check)))
      return a === "mic" ? "candidate" : (this.errors++, "wrong");
    const x = {
      id: `${this.id}:${this.index}`,
      item: a === "board" && d && this.settings.mode !== "interval" ? dl(this.settings, d) : m.item,
      mode: this.settings.mode,
      input: m.choices === "position" ? this.settings.input : m.choices,
      check: ml(this.settings),
      expected: m.midi,
      played: u,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started),
      hint: this.hinted,
      at: Date.now(),
      position: yt(a === "board" && d ? d : m.position)
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
    return this.question?.interval ? hl[this.question.interval] : "";
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
  const [o] = $e.useState(Yd), [u, a] = $e.useState(() => Td(location.search, o.data.settings)), d = $e.useRef(), m = $e.useRef(new Wd()), c = $e.useRef(new Kd()), x = $e.useRef(0), N = $e.useState(0)[1], [T, te] = $e.useState(!1), [$, A] = $e.useState(!1), [X, re] = $e.useState(!1), [le, q] = $e.useState(null), [I, V] = $e.useState(null), [oe, O] = $e.useState("Valitse harjoitus ja aloita. Voit harjoitella myös ilman mikrofonia."), [J, ee] = $e.useState(""), [Q, me] = $e.useState(!1), [Pe, Ae] = $e.useState([]), [Se, Be] = $e.useState(!1), Ie = $e.useRef(!1), Re = $e.useRef([]), Oe = $e.useRef(0), De = $e.useRef(), ke = () => N((S) => S + 1), Z = d.current, C = Z?.question, G = Z?.phase === "active", D = !!Z && !["idle", "done"].includes(Z.phase) || T || Se;
  function y() {
    x.current++, m.current.stop(), c.current.stop(), re(!1), A(!1), te(!1), q(null), V(null), Ie.current = !1, Be(!1), cancelAnimationFrame(Oe.current), clearTimeout(De.current);
  }
  function E(S, z) {
    S.results.length && o.session({
      id: S.id,
      mode: S.settings.mode,
      count: S.results.length,
      first: S.results.filter((fe) => fe.first).length,
      ms: S.results.reduce((fe, je) => fe + je.ms, 0),
      at: Date.now(),
      complete: z
    });
  }
  function ue(S = !1) {
    y();
    const z = d.current;
    z && (z.stop(), E(z, S)), O(S ? "Kierros valmis. Hyvää työtä! Katso tulokset ja valitse seuraava harjoitus." : "Harjoitus päättyi. Vastatut kysymykset on säilytetty."), ke();
  }
  function ce(S, z, fe) {
    const je = d.current;
    if (!je || je.phase !== "active") return;
    const Fe = je.answer(S, z, fe);
    if (Fe === "candidate") {
      V(S);
      return;
    }
    if (Fe === "wrong" && O(`Vastaus ei vielä osunut. ${z === "degree" ? `Valitsit ${S === 0 ? "1" : S === 3 ? "♭3" : S === 4 ? "3" : S === 7 ? "5" : S === 10 ? "♭7" : "toisen asteen"}.` : `Valitsit ${ft(S, u.flats, !0)}.`} Kokeile uudelleen tai avaa vihje.`), Fe === "correct") {
      m.current.stop(), re(!1), V(null), q(null), E(je, !1);
      const be = je.question;
      O(`Oikein: ${ft(be.midi, u.flats, je.settings.check === "pitch")}${be.degree ? `, ${be.degree}. aste` : ""}. ${z === "mic" ? "Sävel vastasi tehtävää; kieltä tai nauhaa ei voida varmistaa mikrofonista." : "Jatka seuraavaan kysymykseen."}`);
    }
    ke();
  }
  async function ye(S) {
    if (S.settings.input !== "mic" || S.question?.choices !== "position" || S.phase !== "active") return;
    const z = x.current;
    let fe = 0;
    te(!0);
    try {
      if (await m.current.start(S.settings.device, {
        minRms: S.settings.minRms,
        minClarity: S.settings.clarity,
        stabilityMs: S.settings.stability,
        centsTolerance: S.settings.cents,
        onFrame: (Fe) => {
          const be = performance.now();
          (!Fe || be - fe >= 120) && (q(Fe), fe = be);
        },
        onStableNote: (Fe) => {
          d.current === S && !Ie.current && ce(Fe.midi, "mic");
        }
      }, () => {
        S.pause(), re(!1), ee("Äänitulo katosi. Kytke laite takaisin ja jatka tai päätä kierros."), ke();
      }) && z === x.current) {
        re(!0);
        const Fe = await navigator.mediaDevices.enumerateDevices().catch(() => []);
        z === x.current && Ae(Fe.filter((be) => be.kind === "audioinput"));
      }
    } catch (je) {
      z === x.current && (S.pause(), ee(br(je)), ke());
    } finally {
      z === x.current && te(!1);
    }
  }
  async function ge(S) {
    const z = S.question?.sound;
    if (!z?.length || S.phase !== "active") return;
    y();
    const fe = x.current;
    S.pause(), A(!0), O("Kuuntele. Vastaa äänen päätyttyä."), ke();
    try {
      if (!await c.current.play(z) || fe !== x.current || S !== d.current) return;
      S.resume(), A(!1), O("Nyt voit vastata. Voit kuunnella esimerkin uudelleen."), ke(), await ye(S);
    } catch (je) {
      fe === x.current && (A(!1), ee(br(je)), ke());
    }
  }
  async function P(S) {
    me(!1), V(null), ee(""), S.question?.choices === "position" && (u.hints === "always" || u.hints === "fade" && S.index <= 6) && (me(!0), S.hint()), ke(), S.question?.sound.length ? await ge(S) : await ye(S);
  }
  async function L() {
    y(), ee("");
    const S = new Gd(u, () => o.data.stats, (z) => {
      o.record(z);
    });
    try {
      S.start(), d.current = S, O("Etsi tehtävän sävel. Otelaudalla vastaus valitaan painamalla nauhan kohtaa."), await P(S);
    } catch (z) {
      S.stop(), d.current = S, ee(br(z)), ke();
    }
  }
  async function R() {
    const S = d.current;
    if (!(!S || S.phase !== "feedback"))
      try {
        if (S.next(), S.phase === "done") {
          ue(!0);
          return;
        }
        O("Seuraava sävel."), await P(S);
      } catch (z) {
        ue(), ee(br(z));
      }
  }
  function W() {
    y(), d.current?.pause(), O("Harjoitus on tauolla. Mikrofoni on suljettu."), ke();
  }
  async function de() {
    const S = d.current;
    !S || S.phase !== "paused" || (ee(""), S.resume(), O("Harjoitus jatkuu."), ke(), S.question?.sound.length && S.phase === "active" ? await ge(S) : await ye(S));
  }
  async function b() {
    y(), ee(""), Be(!0), Ie.current = !0;
    const S = x.current;
    O("Kalibrointi: ole hiljaa kolme sekuntia. Kitaran säveliä ei arvioida.");
    try {
      if (!await m.current.start(u.device, {}, () => {
        y(), ee("Äänitulo katosi kalibroinnin aikana.");
      }) || S !== x.current) return;
      re(!0), Re.current = [];
      const fe = () => {
        S === x.current && (Re.current.push(m.current.loop.getRms()), Oe.current = requestAnimationFrame(fe));
      };
      fe(), De.current = setTimeout(() => {
        if (S !== x.current) return;
        const je = Re.current.sort(($t, cn) => $t - cn), Fe = je[Math.floor(je.length * 0.95)] ?? 2e-3, be = Math.min(0.15, Math.max(3e-3, Fe * 3));
        y(), ne({ ...u, minRms: be }), O(`Kalibrointi valmis. Äänikynnys on ${be.toFixed(3)}. ${Fe > 0.04 ? "Huone on äänekäs: vähennä taustamelua ja kalibroi uudelleen." : "Aloita harjoitus ja kokeile yhtä säveltä."}`);
      }, 3e3);
    } catch (z) {
      S === x.current && (y(), ee(br(z)));
    }
  }
  function ne(S) {
    a(S), o.settings(S);
  }
  $e.useEffect(() => {
    let S = !1;
    Ad().then((Fe) => {
      S || Ae(Fe);
    }).catch(() => {
    });
    const z = () => {
      document.hidden && (y(), d.current?.pause(), ke());
    }, fe = () => {
      m.current.stop(), c.current.stop(), x.current++, d.current?.pause(), Ie.current = !1, clearTimeout(De.current), cancelAnimationFrame(Oe.current);
    }, je = () => {
      te(!1), A(!1), re(!1), Be(!1), ke();
    };
    return document.addEventListener("visibilitychange", z), window.addEventListener("pagehide", fe), window.addEventListener("pageshow", je), () => {
      S = !0, fe(), clearTimeout(De.current), cancelAnimationFrame(Oe.current), document.removeEventListener("visibilitychange", z), window.removeEventListener("pagehide", fe), window.removeEventListener("pageshow", je);
    };
  }, []);
  const ie = () => {
    me(!0), d.current?.hint(), ke();
  }, Ee = C && Q ? C.choices === "position" && u.mode !== "notes" ? gl(u).filter((S) => u.check === "pitch" ? S.midi === C.midi : Pt(S.midi) === Pt(C.midi)) : [C.position] : [], ve = G && !T && !$, Ce = fs.find(([S]) => S === u.mode), ze = Object.entries(o.data.stats).filter(([S]) => S.startsWith(`${pl(u)}:${ml(u)}:solo:`) && S.includes(`:${u.mode}:`)).filter(([, S]) => S.attempts >= 3).sort((S, z) => yl(S[1]) - yl(z[1])).slice(0, 5), Qe = Object.values(o.data.stats).reduce((S, z) => S + z.attempts, 0);
  function Ve(S) {
    const z = S.split(":");
    return z[3] === "ear-note" ? `Kuultu sävel ${ft(Number(z[4]), u.flats)}` : ["notes", "repeat"].includes(z[3]) ? `${["ohut E", "B", "G", "D", "A", "paksu E"][Number(z[4])]}-kieli, nauha ${z[5]}` : z[3] === "interval" ? `${hl[Number(z[4])]} · ${z[5] === "up" ? "nouseva" : "laskeva"}` : z[3] === "chord" ? `${ft(Number(z[4]))}${Qn[z[5]]?.suffix ?? ""} · ${z[6]} puoliaskelta perussävelestä` : `${z[3] === "scale" ? rt.SCALES[z[5]]?.name : "CAGED " + z[5]} · ${ft(Number(z[4]))} · kieli ${Number(z[6]) + 1}, nauha ${z[7]}`;
  }
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "intro", children: [
      /* @__PURE__ */ p.jsx("p", { className: "eyebrow", children: "KUUNTELE · LÖYDÄ · SOITA" }),
      /* @__PURE__ */ p.jsx("h1", { children: "Harjoittele kitaralla" }),
      /* @__PURE__ */ p.jsx("p", { children: "Yhdistä oppaan teoria siihen, mitä kuulet ja soitat. Lyhyt kierros kerrallaan." })
    ] }),
    /* @__PURE__ */ p.jsx(Pd, { s: u, change: ne, locked: D, devices: Pe }),
    /* @__PURE__ */ p.jsxs("p", { className: "tools-note", children: [
      Ce[2],
      " ",
      u.check === "class" ? "Sävelluokka: sama sävelnimi hyväksytään kaikissa oktaaveissa." : "Sävelkorkeus: myös oktaavin on vastattava tehtävää. Oktaaviylä-ääni voi aiheuttaa eriävän havainnon.",
      " Mikrofoni kuulee sävelkorkeuden, mutta ei tunnista kieltä tai nauhaa."
    ] }),
    /* @__PURE__ */ p.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ p.jsx("h2", { id: "session-title", children: Ce[1] }),
        /* @__PURE__ */ p.jsx("span", { children: Z && Z.phase !== "idle" ? `${Z.phase === "done" ? "Valmis" : "Kysymys " + Z.index}${u.rounds ? " / " + u.rounds : " · vapaa"}` : "Valmis aloittamaan" })
      ] }),
      /* @__PURE__ */ p.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: C && Z?.phase !== "done" ? C.prompt : "Muutama minuutti keskittynyttä harjoittelua." }),
      /* @__PURE__ */ p.jsxs("div", { className: "action-row", children: [
        !Z || Z.phase === "done" ? /* @__PURE__ */ p.jsx("button", { className: "primary", disabled: T || Se, onClick: () => {
          L();
        }, children: "Aloita harjoitus" }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          Z.phase === "feedback" ? /* @__PURE__ */ p.jsx("button", { className: "primary", onClick: () => {
            R();
          }, children: u.rounds && Z.index >= u.rounds ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }) : Z.phase === "paused" && !$ ? /* @__PURE__ */ p.jsx("button", { className: "primary", disabled: T, onClick: () => {
            de();
          }, children: "Jatka harjoitusta" }) : /* @__PURE__ */ p.jsx("button", { onClick: W, children: "Keskeytä hetkeksi" }),
          /* @__PURE__ */ p.jsx("button", { onClick: () => ue(), children: "Päätä harjoitus" })
        ] }),
        C?.sound.length && Z?.phase !== "done" ? /* @__PURE__ */ p.jsx("button", { disabled: !ve, onClick: () => {
          ge(Z);
        }, children: "Kuuntele uudelleen" }) : null,
        C && Z?.phase !== "done" && /* @__PURE__ */ p.jsx("button", { disabled: !ve, "aria-pressed": Q, onClick: () => Q ? me(!1) : ie(), children: Q ? "Piilota vihje" : "Näytä otelautavihje" })
      ] }),
      /* @__PURE__ */ p.jsx("p", { className: "feedback", role: "status", "aria-live": "polite", children: oe }),
      J && /* @__PURE__ */ p.jsx("p", { className: "error", role: "alert", children: J }),
      /* @__PURE__ */ p.jsxs("p", { className: "mic-status", children: [
        /* @__PURE__ */ p.jsx("span", { className: X ? "mic-dot on" : "mic-dot" }),
        T ? "Avataan mikrofonia… Voit perua päättämällä harjoituksen." : X ? "Mikrofoni käytössä · ääni käsitellään vain tässä selaimessa" : "Mikrofoni suljettu",
        le && ` · havainto ${ft(le.midi, u.flats, !0)}, ${Math.round(le.cents)} senttiä, varmuus ${Math.round(le.clarity * 100)} %`
      ] }),
      I !== null && G && /* @__PURE__ */ p.jsxs("div", { className: "candidate", children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          "Vakaa havainto: ",
          ft(I, u.flats, !0),
          ". Se eroaa tehtävästä. Vaimenna kieli ja yritä uudelleen. Ylä-ääni tai resonanssi voi selittää eron."
        ] }),
        /* @__PURE__ */ p.jsx("button", { onClick: () => {
          Z.confirmWrong(), V(null), O("Merkitsit oman soiton virheeksi. Etsi sama tehtäväsävel uudelleen."), ke();
        }, children: "Soitin väärän sävelen · kirjaa virhe" }),
        /* @__PURE__ */ p.jsx("button", { onClick: () => V(null), children: "Ohita havainto" })
      ] }),
      C?.choices === "note" && Z?.phase !== "done" && /* @__PURE__ */ p.jsx("div", { className: "answer-choices", "aria-label": "Sävelnimet", children: Array.from({ length: 12 }, (S, z) => /* @__PURE__ */ p.jsx("button", { disabled: !ve, onClick: () => ce(z, "note"), children: ft(z, u.flats) }, z)) }),
      C?.choices === "degree" && Z?.phase !== "done" && /* @__PURE__ */ p.jsx("div", { className: "answer-choices", "aria-label": "Asteet", children: (u.mode === "scale" ? rt.scaleNotes(rt.SCALES[u.scale]) : Qn[u.chord].tones).map(([S, z]) => /* @__PURE__ */ p.jsx("button", { disabled: !ve, onClick: () => ce(S, "degree"), children: z }, S)) }),
      C && Z?.phase !== "done" && (C.choices === "position" || Q) && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsxs("p", { className: "tools-note", children: [
          u.mode === "caged" && Q ? `${ft(u.root)}-duuri · ${u.shape}-muoto: kaikki otteen sävelet näkyvät, tehtävän aste on vihreä.` : "Otelaudalla voit liikkua nuolinäppäimillä ja vastata Enterillä.",
          " Vieritä otelautaa sivusuunnassa tarvittaessa."
        ] }),
        /* @__PURE__ */ p.jsx(cc, { min: u.min, max: u.max, strings: u.strings, targets: Ee, contextTargets: u.mode === "caged" && Q ? gl(u) : [], labels: Q && !(u.hints === "fade" && Z.index > 3 && Z.index <= 6), disabled: !ve || C.choices !== "position" || u.input === "mic", answer: (S) => ce(S.midi, "board", S) })
      ] }),
      Q && C?.interval && u.mode === "interval" ? /* @__PURE__ */ p.jsxs("p", { children: [
        "Intervalli: ",
        hl[C.interval],
        ". Jälkimmäinen sävel: ",
        ft(C.midi, u.flats, !0),
        "."
      ] }) : null,
      /* @__PURE__ */ p.jsxs("p", { className: "tools-note", children: [
        Z ? Fd(Z.results) : "Tulokset tallentuvat tähän selaimeen.",
        Z?.results.some((S) => S.hint) ? " Vihjeellä ja ilman vihjettä annetut vastaukset tilastoidaan erikseen." : ""
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "action-row", children: [
      /* @__PURE__ */ p.jsx("button", { disabled: D, onClick: () => {
        b();
      }, children: "Kalibroi hiljaisuuden äänikynnys" }),
      Se && /* @__PURE__ */ p.jsx("button", { onClick: () => {
        y(), O("Kalibrointi peruttu.");
      }, children: "Peru kalibrointi" }),
      /* @__PURE__ */ p.jsx("a", { href: Md(u), children: "Linkki tähän harjoitukseen" }),
      /* @__PURE__ */ p.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(rt.CHROM[u.root])}&asteikko=${u.scale}`, children: "Tutki asteikkoa otelaudalla" })
    ] }),
    /* @__PURE__ */ p.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
      /* @__PURE__ */ p.jsx("h2", { id: "progress-title", children: "Näe oppimisesi" }),
      /* @__PURE__ */ p.jsxs("p", { children: [
        Qe,
        " vastattua kysymystä · ",
        o.data.sessions.length,
        " tallennettua harjoituskertaa. Osaamisarvio yhdistää ensimmäisen yrityksen tarkkuuden ja vastausnopeuden. Alle kolme vastausta on vasta alkuhavainto."
      ] }),
      /* @__PURE__ */ p.jsxs("p", { children: [
        /* @__PURE__ */ p.jsx("strong", { children: "Seuraavaksi:" }),
        " ",
        ze.length ? "Kertaa alla olevia kohteita. Heikkojen kohtien painotus käyttää vastaustavan ja tarkistustavan mukaisia tuloksia." : "Tee ensin lyhyt kierros ilman vihjeitä. Aloita nauhoista 0–5 ja laajenna aluetta, kun sävelet löytyvät varmasti."
      ] }),
      ze.length > 0 && /* @__PURE__ */ p.jsx("ul", { children: ze.map(([S, z]) => /* @__PURE__ */ p.jsxs("li", { children: [
        Ve(S),
        " · ",
        z.correct,
        "/",
        z.attempts,
        " heti oikein · ",
        (z.totalMs / z.attempts / 1e3).toFixed(1),
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
          fs.find(([z]) => z === S.mode)?.[1],
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
        const S = new Blob([JSON.stringify(o.data, null, 2)], { type: "application/json" }), z = URL.createObjectURL(S), fe = document.createElement("a");
        fe.href = z, fe.download = "musiikin-kartta-harjoittelu.json", fe.click(), setTimeout(() => URL.revokeObjectURL(z), 1e3);
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
