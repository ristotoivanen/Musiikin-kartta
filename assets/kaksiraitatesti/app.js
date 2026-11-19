var Pu = { exports: {} }, jl = {}, Ru = { exports: {} }, de = {};
var dc;
function zd() {
  if (dc) return de;
  dc = 1;
  var u = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), y = /* @__PURE__ */ Symbol.for("react.profiler"), x = /* @__PURE__ */ Symbol.for("react.provider"), S = /* @__PURE__ */ Symbol.for("react.context"), _ = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.memo"), Q = /* @__PURE__ */ Symbol.for("react.lazy"), O = Symbol.iterator;
  function G(m) {
    return m === null || typeof m != "object" ? null : (m = O && m[O] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var I = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, re = {};
  function A(m, M, Z) {
    this.props = m, this.context = M, this.refs = re, this.updater = Z || I;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(m, M) {
    if (typeof m != "object" && typeof m != "function" && m != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, M, "setState");
  }, A.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function ge() {
  }
  ge.prototype = A.prototype;
  function Te(m, M, Z) {
    this.props = m, this.context = M, this.refs = re, this.updater = Z || I;
  }
  var he = Te.prototype = new ge();
  he.constructor = Te, fe(he, A.prototype), he.isPureReactComponent = !0;
  var ye = Array.isArray, xe = Object.prototype.hasOwnProperty, Re = { current: null }, Ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(m, M, Z) {
    var le, ce = {}, ie = null, ae = null;
    if (M != null) for (le in M.ref !== void 0 && (ae = M.ref), M.key !== void 0 && (ie = "" + M.key), M) xe.call(M, le) && !Ce.hasOwnProperty(le) && (ce[le] = M[le]);
    var ne = arguments.length - 2;
    if (ne === 1) ce.children = Z;
    else if (1 < ne) {
      for (var Se = Array(ne), He = 0; He < ne; He++) Se[He] = arguments[He + 2];
      ce.children = Se;
    }
    if (m && m.defaultProps) for (le in ne = m.defaultProps, ne) ce[le] === void 0 && (ce[le] = ne[le]);
    return { $$typeof: u, type: m, key: ie, ref: ae, props: ce, _owner: Re.current };
  }
  function b(m, M) {
    return { $$typeof: u, type: m.type, key: M, ref: m.ref, props: m.props, _owner: m._owner };
  }
  function _e(m) {
    return typeof m == "object" && m !== null && m.$$typeof === u;
  }
  function we(m) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(Z) {
      return M[Z];
    });
  }
  var ot = /\/+/g;
  function Ie(m, M) {
    return typeof m == "object" && m !== null && m.key != null ? we("" + m.key) : M.toString(36);
  }
  function Be(m, M, Z, le, ce) {
    var ie = typeof m;
    (ie === "undefined" || ie === "boolean") && (m = null);
    var ae = !1;
    if (m === null) ae = !0;
    else switch (ie) {
      case "string":
      case "number":
        ae = !0;
        break;
      case "object":
        switch (m.$$typeof) {
          case u:
          case s:
            ae = !0;
        }
    }
    if (ae) return ae = m, ce = ce(ae), m = le === "" ? "." + Ie(ae, 0) : le, ye(ce) ? (Z = "", m != null && (Z = m.replace(ot, "$&/") + "/"), Be(ce, M, Z, "", function(He) {
      return He;
    })) : ce != null && (_e(ce) && (ce = b(ce, Z + (!ce.key || ae && ae.key === ce.key ? "" : ("" + ce.key).replace(ot, "$&/") + "/") + m)), M.push(ce)), 1;
    if (ae = 0, le = le === "" ? "." : le + ":", ye(m)) for (var ne = 0; ne < m.length; ne++) {
      ie = m[ne];
      var Se = le + Ie(ie, ne);
      ae += Be(ie, M, Z, Se, ce);
    }
    else if (Se = G(m), typeof Se == "function") for (m = Se.call(m), ne = 0; !(ie = m.next()).done; ) ie = ie.value, Se = le + Ie(ie, ne++), ae += Be(ie, M, Z, Se, ce);
    else if (ie === "object") throw M = String(m), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    return ae;
  }
  function $e(m, M, Z) {
    if (m == null) return m;
    var le = [], ce = 0;
    return Be(m, le, "", "", function(ie) {
      return M.call(Z, ie, ce++);
    }), le;
  }
  function Ve(m) {
    if (m._status === -1) {
      var M = m._result;
      M = M(), M.then(function(Z) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = Z);
      }, function(Z) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = Z);
      }), m._status === -1 && (m._status = 0, m._result = M);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var B = { current: null }, P = { transition: null }, K = { ReactCurrentDispatcher: B, ReactCurrentBatchConfig: P, ReactCurrentOwner: Re };
  function z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return de.Children = { map: $e, forEach: function(m, M, Z) {
    $e(m, function() {
      M.apply(this, arguments);
    }, Z);
  }, count: function(m) {
    var M = 0;
    return $e(m, function() {
      M++;
    }), M;
  }, toArray: function(m) {
    return $e(m, function(M) {
      return M;
    }) || [];
  }, only: function(m) {
    if (!_e(m)) throw Error("React.Children.only expected to receive a single React element child.");
    return m;
  } }, de.Component = A, de.Fragment = a, de.Profiler = y, de.PureComponent = Te, de.StrictMode = h, de.Suspense = L, de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, de.act = z, de.cloneElement = function(m, M, Z) {
    if (m == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
    var le = fe({}, m.props), ce = m.key, ie = m.ref, ae = m._owner;
    if (M != null) {
      if (M.ref !== void 0 && (ie = M.ref, ae = Re.current), M.key !== void 0 && (ce = "" + M.key), m.type && m.type.defaultProps) var ne = m.type.defaultProps;
      for (Se in M) xe.call(M, Se) && !Ce.hasOwnProperty(Se) && (le[Se] = M[Se] === void 0 && ne !== void 0 ? ne[Se] : M[Se]);
    }
    var Se = arguments.length - 2;
    if (Se === 1) le.children = Z;
    else if (1 < Se) {
      ne = Array(Se);
      for (var He = 0; He < Se; He++) ne[He] = arguments[He + 2];
      le.children = ne;
    }
    return { $$typeof: u, type: m.type, key: ce, ref: ie, props: le, _owner: ae };
  }, de.createContext = function(m) {
    return m = { $$typeof: S, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, m.Provider = { $$typeof: x, _context: m }, m.Consumer = m;
  }, de.createElement = me, de.createFactory = function(m) {
    var M = me.bind(null, m);
    return M.type = m, M;
  }, de.createRef = function() {
    return { current: null };
  }, de.forwardRef = function(m) {
    return { $$typeof: _, render: m };
  }, de.isValidElement = _e, de.lazy = function(m) {
    return { $$typeof: Q, _payload: { _status: -1, _result: m }, _init: Ve };
  }, de.memo = function(m, M) {
    return { $$typeof: F, type: m, compare: M === void 0 ? null : M };
  }, de.startTransition = function(m) {
    var M = P.transition;
    P.transition = {};
    try {
      m();
    } finally {
      P.transition = M;
    }
  }, de.unstable_act = z, de.useCallback = function(m, M) {
    return B.current.useCallback(m, M);
  }, de.useContext = function(m) {
    return B.current.useContext(m);
  }, de.useDebugValue = function() {
  }, de.useDeferredValue = function(m) {
    return B.current.useDeferredValue(m);
  }, de.useEffect = function(m, M) {
    return B.current.useEffect(m, M);
  }, de.useId = function() {
    return B.current.useId();
  }, de.useImperativeHandle = function(m, M, Z) {
    return B.current.useImperativeHandle(m, M, Z);
  }, de.useInsertionEffect = function(m, M) {
    return B.current.useInsertionEffect(m, M);
  }, de.useLayoutEffect = function(m, M) {
    return B.current.useLayoutEffect(m, M);
  }, de.useMemo = function(m, M) {
    return B.current.useMemo(m, M);
  }, de.useReducer = function(m, M, Z) {
    return B.current.useReducer(m, M, Z);
  }, de.useRef = function(m) {
    return B.current.useRef(m);
  }, de.useState = function(m) {
    return B.current.useState(m);
  }, de.useSyncExternalStore = function(m, M, Z) {
    return B.current.useSyncExternalStore(m, M, Z);
  }, de.useTransition = function() {
    return B.current.useTransition();
  }, de.version = "18.3.1", de;
}
var pc;
function Bu() {
  return pc || (pc = 1, Ru.exports = zd()), Ru.exports;
}
var mc;
function Fd() {
  if (mc) return jl;
  mc = 1;
  var u = Bu(), s = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, y = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(_, L, F) {
    var Q, O = {}, G = null, I = null;
    F !== void 0 && (G = "" + F), L.key !== void 0 && (G = "" + L.key), L.ref !== void 0 && (I = L.ref);
    for (Q in L) h.call(L, Q) && !x.hasOwnProperty(Q) && (O[Q] = L[Q]);
    if (_ && _.defaultProps) for (Q in L = _.defaultProps, L) O[Q] === void 0 && (O[Q] = L[Q]);
    return { $$typeof: s, type: _, key: G, ref: I, props: O, _owner: y.current };
  }
  return jl.Fragment = a, jl.jsx = S, jl.jsxs = S, jl;
}
var hc;
function Od() {
  return hc || (hc = 1, Pu.exports = Fd()), Pu.exports;
}
var E = Od(), Di = {}, Lu = { exports: {} }, mt = {}, zu = { exports: {} }, Fu = {};
var yc;
function Id() {
  return yc || (yc = 1, (function(u) {
    function s(P, K) {
      var z = P.length;
      P.push(K);
      e: for (; 0 < z; ) {
        var m = z - 1 >>> 1, M = P[m];
        if (0 < y(M, K)) P[m] = K, P[z] = M, z = m;
        else break e;
      }
    }
    function a(P) {
      return P.length === 0 ? null : P[0];
    }
    function h(P) {
      if (P.length === 0) return null;
      var K = P[0], z = P.pop();
      if (z !== K) {
        P[0] = z;
        e: for (var m = 0, M = P.length, Z = M >>> 1; m < Z; ) {
          var le = 2 * (m + 1) - 1, ce = P[le], ie = le + 1, ae = P[ie];
          if (0 > y(ce, z)) ie < M && 0 > y(ae, ce) ? (P[m] = ae, P[ie] = z, m = ie) : (P[m] = ce, P[le] = z, m = le);
          else if (ie < M && 0 > y(ae, z)) P[m] = ae, P[ie] = z, m = ie;
          else break e;
        }
      }
      return K;
    }
    function y(P, K) {
      var z = P.sortIndex - K.sortIndex;
      return z !== 0 ? z : P.id - K.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      u.unstable_now = function() {
        return x.now();
      };
    } else {
      var S = Date, _ = S.now();
      u.unstable_now = function() {
        return S.now() - _;
      };
    }
    var L = [], F = [], Q = 1, O = null, G = 3, I = !1, fe = !1, re = !1, A = typeof setTimeout == "function" ? setTimeout : null, ge = typeof clearTimeout == "function" ? clearTimeout : null, Te = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function he(P) {
      for (var K = a(F); K !== null; ) {
        if (K.callback === null) h(F);
        else if (K.startTime <= P) h(F), K.sortIndex = K.expirationTime, s(L, K);
        else break;
        K = a(F);
      }
    }
    function ye(P) {
      if (re = !1, he(P), !fe) if (a(L) !== null) fe = !0, Ve(xe);
      else {
        var K = a(F);
        K !== null && B(ye, K.startTime - P);
      }
    }
    function xe(P, K) {
      fe = !1, re && (re = !1, ge(me), me = -1), I = !0;
      var z = G;
      try {
        for (he(K), O = a(L); O !== null && (!(O.expirationTime > K) || P && !we()); ) {
          var m = O.callback;
          if (typeof m == "function") {
            O.callback = null, G = O.priorityLevel;
            var M = m(O.expirationTime <= K);
            K = u.unstable_now(), typeof M == "function" ? O.callback = M : O === a(L) && h(L), he(K);
          } else h(L);
          O = a(L);
        }
        if (O !== null) var Z = !0;
        else {
          var le = a(F);
          le !== null && B(ye, le.startTime - K), Z = !1;
        }
        return Z;
      } finally {
        O = null, G = z, I = !1;
      }
    }
    var Re = !1, Ce = null, me = -1, b = 5, _e = -1;
    function we() {
      return !(u.unstable_now() - _e < b);
    }
    function ot() {
      if (Ce !== null) {
        var P = u.unstable_now();
        _e = P;
        var K = !0;
        try {
          K = Ce(!0, P);
        } finally {
          K ? Ie() : (Re = !1, Ce = null);
        }
      } else Re = !1;
    }
    var Ie;
    if (typeof Te == "function") Ie = function() {
      Te(ot);
    };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), $e = Be.port2;
      Be.port1.onmessage = ot, Ie = function() {
        $e.postMessage(null);
      };
    } else Ie = function() {
      A(ot, 0);
    };
    function Ve(P) {
      Ce = P, Re || (Re = !0, Ie());
    }
    function B(P, K) {
      me = A(function() {
        P(u.unstable_now());
      }, K);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, u.unstable_continueExecution = function() {
      fe || I || (fe = !0, Ve(xe));
    }, u.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < P ? Math.floor(1e3 / P) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, u.unstable_getFirstCallbackNode = function() {
      return a(L);
    }, u.unstable_next = function(P) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = G;
      }
      var z = G;
      G = K;
      try {
        return P();
      } finally {
        G = z;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(P, K) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = G;
      G = P;
      try {
        return K();
      } finally {
        G = z;
      }
    }, u.unstable_scheduleCallback = function(P, K, z) {
      var m = u.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? m + z : m) : z = m, P) {
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
      return M = z + M, P = { id: Q++, callback: K, priorityLevel: P, startTime: z, expirationTime: M, sortIndex: -1 }, z > m ? (P.sortIndex = z, s(F, P), a(L) === null && P === a(F) && (re ? (ge(me), me = -1) : re = !0, B(ye, z - m))) : (P.sortIndex = M, s(L, P), fe || I || (fe = !0, Ve(xe))), P;
    }, u.unstable_shouldYield = we, u.unstable_wrapCallback = function(P) {
      var K = G;
      return function() {
        var z = G;
        G = K;
        try {
          return P.apply(this, arguments);
        } finally {
          G = z;
        }
      };
    };
  })(Fu)), Fu;
}
var vc;
function Ad() {
  return vc || (vc = 1, zu.exports = Id()), zu.exports;
}
var gc;
function Dd() {
  if (gc) return mt;
  gc = 1;
  var u = Bu(), s = Ad();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = /* @__PURE__ */ new Set(), y = {};
  function x(e, t) {
    S(e, t), S(e + "Capture", t);
  }
  function S(e, t) {
    for (y[e] = t, e = 0; e < t.length; e++) h.add(t[e]);
  }
  var _ = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), L = Object.prototype.hasOwnProperty, F = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Q = {}, O = {};
  function G(e) {
    return L.call(O, e) ? !0 : L.call(Q, e) ? !1 : F.test(e) ? O[e] = !0 : (Q[e] = !0, !1);
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
  function fe(e, t, n, r) {
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
  function re(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    A[e] = new re(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    A[t] = new re(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    A[e] = new re(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    A[e] = new re(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    A[e] = new re(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    A[e] = new re(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    A[e] = new re(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    A[e] = new re(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    A[e] = new re(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ge = /[\-:]([a-z])/g;
  function Te(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      ge,
      Te
    );
    A[t] = new re(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ge, Te);
    A[t] = new re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ge, Te);
    A[t] = new re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    A[e] = new re(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), A.xlinkHref = new re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    A[e] = new re(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function he(e, t, n, r) {
    var l = A.hasOwnProperty(t) ? A[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (fe(t, n, l, r) && (n = null), r || l === null ? G(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ye = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xe = /* @__PURE__ */ Symbol.for("react.element"), Re = /* @__PURE__ */ Symbol.for("react.portal"), Ce = /* @__PURE__ */ Symbol.for("react.fragment"), me = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), _e = /* @__PURE__ */ Symbol.for("react.provider"), we = /* @__PURE__ */ Symbol.for("react.context"), ot = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ie = /* @__PURE__ */ Symbol.for("react.suspense"), Be = /* @__PURE__ */ Symbol.for("react.suspense_list"), $e = /* @__PURE__ */ Symbol.for("react.memo"), Ve = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.offscreen"), P = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != "object" ? null : (e = P && e[P] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var z = Object.assign, m;
  function M(e) {
    if (m === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      m = t && t[1] || "";
    }
    return `
` + m + e;
  }
  var Z = !1;
  function le(e, t) {
    if (!e || Z) return "";
    Z = !0;
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
        for (var l = w.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, f = i.length - 1; 1 <= o && 0 <= f && l[o] !== i[f]; ) f--;
        for (; 1 <= o && 0 <= f; o--, f--) if (l[o] !== i[f]) {
          if (o !== 1 || f !== 1)
            do
              if (o--, f--, 0 > f || l[o] !== i[f]) {
                var d = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d;
              }
            while (1 <= o && 0 <= f);
          break;
        }
      }
    } finally {
      Z = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function ce(e) {
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
        return e = le(e.type, !1), e;
      case 11:
        return e = le(e.type.render, !1), e;
      case 1:
        return e = le(e.type, !0), e;
      default:
        return "";
    }
  }
  function ie(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ce:
        return "Fragment";
      case Re:
        return "Portal";
      case b:
        return "Profiler";
      case me:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case Be:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case we:
        return (e.displayName || "Context") + ".Consumer";
      case _e:
        return (e._context.displayName || "Context") + ".Provider";
      case ot:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case $e:
        return t = e.displayName || null, t !== null ? t : ie(e.type) || "Memo";
      case Ve:
        t = e._payload, e = e._init;
        try {
          return ie(e(t));
        } catch {
        }
    }
    return null;
  }
  function ae(e) {
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
        return ie(t);
      case 8:
        return t === me ? "StrictMode" : "Mode";
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
  function Se(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function He(e) {
    var t = Se(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, i.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function St(e) {
    e._valueTracker || (e._valueTracker = He(e));
  }
  function lr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Se(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ir(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ar(e, t) {
    var n = t.checked;
    return z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function zl(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ne(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Dr(e, t) {
    t = t.checked, t != null && he(e, "checked", t, !1);
  }
  function Ur(e, t) {
    Dr(e, t);
    var n = ne(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Fn(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fn(e, t.type, ne(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function an(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Fn(e, t, n) {
    (t !== "number" || ir(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var be = Array.isArray;
  function Lt(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ne(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function $r(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function xt(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(a(92));
        if (be(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ne(n) };
  }
  function or(e, t) {
    var n = ne(t.value), r = ne(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ue(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Bt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function On(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var In, ur = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (In = In || document.createElement("div"), In.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = In.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function cn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var fn = {
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
  }, ht = ["Webkit", "ms", "Moz", "O"];
  Object.keys(fn).forEach(function(e) {
    ht.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), fn[t] = fn[e];
    });
  });
  function Vr(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || fn.hasOwnProperty(e) && fn[e] ? ("" + t).trim() : t + "px";
  }
  function Wr(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Vr(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Qi = z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Jt(e, t) {
    if (t) {
      if (Qi[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function sr(e, t) {
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
  var ar = null;
  function qt(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var zt = null, Et = null, Ft = null;
  function Br(e) {
    if (e = ml(e)) {
      if (typeof zt != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = bl(t), zt(e.stateNode, e.type, t));
    }
  }
  function cr(e) {
    Et ? Ft ? Ft.push(e) : Ft = [e] : Et = e;
  }
  function Fl() {
    if (Et) {
      var e = Et, t = Ft;
      if (Ft = Et = null, Br(e), t) for (e = 0; e < t.length; e++) Br(t[e]);
    }
  }
  function An(e, t) {
    return e(t);
  }
  function Dn() {
  }
  var Un = !1;
  function Hr(e, t, n) {
    if (Un) return e(t, n);
    Un = !0;
    try {
      return An(e, t, n);
    } finally {
      Un = !1, (Et !== null || Ft !== null) && (Dn(), Fl());
    }
  }
  function dn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = bl(n);
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
  var fr = !1;
  if (_) try {
    var bt = {};
    Object.defineProperty(bt, "passive", { get: function() {
      fr = !0;
    } }), window.addEventListener("test", bt, bt), window.removeEventListener("test", bt, bt);
  } catch {
    fr = !1;
  }
  function Qr(e, t, n, r, l, i, o, f, d) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, w);
    } catch (C) {
      this.onError(C);
    }
  }
  var $n = !1, ut = null, Ot = !1, Vn = null, Wn = { onError: function(e) {
    $n = !0, ut = e;
  } };
  function Ki(e, t, n, r, l, i, o, f, d) {
    $n = !1, ut = null, Qr.apply(Wn, arguments);
  }
  function Yi(e, t, n, r, l, i, o, f, d) {
    if (Ki.apply(this, arguments), $n) {
      if ($n) {
        var w = ut;
        $n = !1, ut = null;
      } else throw Error(a(198));
      Ot || (Ot = !0, Vn = w);
    }
  }
  function It(e) {
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
  function pn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Kr(e) {
    if (It(e) !== e) throw Error(a(188));
  }
  function Xi(e) {
    var t = e.alternate;
    if (!t) {
      if (t = It(e), t === null) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return Kr(l), e;
          if (i === r) return Kr(l), t;
          i = i.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) n = l, r = i;
      else {
        for (var o = !1, f = l.child; f; ) {
          if (f === n) {
            o = !0, n = l, r = i;
            break;
          }
          if (f === r) {
            o = !0, r = l, n = i;
            break;
          }
          f = f.sibling;
        }
        if (!o) {
          for (f = i.child; f; ) {
            if (f === n) {
              o = !0, n = i, r = l;
              break;
            }
            if (f === r) {
              o = !0, r = i, n = l;
              break;
            }
            f = f.sibling;
          }
          if (!o) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Yr(e) {
    return e = Xi(e), e !== null ? Xr(e) : null;
  }
  function Xr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Xr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var dr = s.unstable_scheduleCallback, Ol = s.unstable_cancelCallback, Gi = s.unstable_shouldYield, Zi = s.unstable_requestPaint, Fe = s.unstable_now, Ht = s.unstable_getCurrentPriorityLevel, pr = s.unstable_ImmediatePriority, Il = s.unstable_UserBlockingPriority, c = s.unstable_NormalPriority, k = s.unstable_LowPriority, N = s.unstable_IdlePriority, V = null, J = null;
  function q(e) {
    if (J && typeof J.onCommitFiberRoot == "function") try {
      J.onCommitFiberRoot(V, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var D = Math.clz32 ? Math.clz32 : Ne, se = Math.log, Ee = Math.LN2;
  function Ne(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (se(e) / Ee | 0) | 0;
  }
  var je = 64, pe = 4194304;
  function st(e) {
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
  function Qt(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var f = o & ~l;
      f !== 0 ? r = st(f) : (i &= o, i !== 0 && (r = st(i)));
    } else o = n & ~l, o !== 0 ? r = st(o) : i !== 0 && (r = st(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - D(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Gr(e, t) {
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
  function Zr(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - D(i), f = 1 << o, d = l[o];
      d === -1 ? ((f & n) === 0 || (f & r) !== 0) && (l[o] = Gr(f, t)) : d <= t && (e.expiredLanes |= f), i &= ~f;
    }
  }
  function yt(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Al() {
    var e = je;
    return je <<= 1, (je & 4194240) === 0 && (je = 64), e;
  }
  function Ji(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Jr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - D(t), e[t] = n;
  }
  function bc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - D(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function qi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - D(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var Me = 0;
  function Hu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Qu, bi, Ku, Yu, Xu, eo = !1, Dl = [], mn = null, hn = null, yn = null, qr = /* @__PURE__ */ new Map(), br = /* @__PURE__ */ new Map(), vn = [], ef = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Gu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        hn = null;
        break;
      case "mouseover":
      case "mouseout":
        yn = null;
        break;
      case "pointerover":
      case "pointerout":
        qr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        br.delete(t.pointerId);
    }
  }
  function el(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = ml(t), t !== null && bi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function tf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return mn = el(mn, e, t, n, r, l), !0;
      case "dragenter":
        return hn = el(hn, e, t, n, r, l), !0;
      case "mouseover":
        return yn = el(yn, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return qr.set(i, el(qr.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, br.set(i, el(br.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function Zu(e) {
    var t = Bn(e.target);
    if (t !== null) {
      var n = It(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = pn(n), t !== null) {
            e.blockedOn = t, Xu(e.priority, function() {
              Ku(n);
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
  function Ul(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = no(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ar = r, n.target.dispatchEvent(r), ar = null;
      } else return t = ml(n), t !== null && bi(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ju(e, t, n) {
    Ul(e) && n.delete(t);
  }
  function nf() {
    eo = !1, mn !== null && Ul(mn) && (mn = null), hn !== null && Ul(hn) && (hn = null), yn !== null && Ul(yn) && (yn = null), qr.forEach(Ju), br.forEach(Ju);
  }
  function tl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, eo || (eo = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, nf)));
  }
  function nl(e) {
    function t(l) {
      return tl(l, e);
    }
    if (0 < Dl.length) {
      tl(Dl[0], e);
      for (var n = 1; n < Dl.length; n++) {
        var r = Dl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (mn !== null && tl(mn, e), hn !== null && tl(hn, e), yn !== null && tl(yn, e), qr.forEach(t), br.forEach(t), n = 0; n < vn.length; n++) r = vn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < vn.length && (n = vn[0], n.blockedOn === null); ) Zu(n), n.blockedOn === null && vn.shift();
  }
  var mr = ye.ReactCurrentBatchConfig, $l = !0;
  function rf(e, t, n, r) {
    var l = Me, i = mr.transition;
    mr.transition = null;
    try {
      Me = 1, to(e, t, n, r);
    } finally {
      Me = l, mr.transition = i;
    }
  }
  function lf(e, t, n, r) {
    var l = Me, i = mr.transition;
    mr.transition = null;
    try {
      Me = 4, to(e, t, n, r);
    } finally {
      Me = l, mr.transition = i;
    }
  }
  function to(e, t, n, r) {
    if ($l) {
      var l = no(e, t, n, r);
      if (l === null) wo(e, t, r, Vl, n), Gu(e, r);
      else if (tf(l, e, t, n, r)) r.stopPropagation();
      else if (Gu(e, r), t & 4 && -1 < ef.indexOf(e)) {
        for (; l !== null; ) {
          var i = ml(l);
          if (i !== null && Qu(i), i = no(e, t, n, r), i === null && wo(e, t, r, Vl, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else wo(e, t, r, null, n);
    }
  }
  var Vl = null;
  function no(e, t, n, r) {
    if (Vl = null, e = qt(r), e = Bn(e), e !== null) if (t = It(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = pn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Vl = e, null;
  }
  function qu(e) {
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
        switch (Ht()) {
          case pr:
            return 1;
          case Il:
            return 4;
          case c:
          case k:
            return 16;
          case N:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gn = null, ro = null, Wl = null;
  function bu() {
    if (Wl) return Wl;
    var e, t = ro, n = t.length, r, l = "value" in gn ? gn.value : gn.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
    return Wl = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Bl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Hl() {
    return !0;
  }
  function es() {
    return !1;
  }
  function vt(e) {
    function t(n, r, l, i, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Hl : es, this.isPropagationStopped = es, this;
    }
    return z(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Hl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Hl);
    }, persist: function() {
    }, isPersistent: Hl }), t;
  }
  var hr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, lo = vt(hr), rl = z({}, hr, { view: 0, detail: 0 }), of = vt(rl), io, oo, ll, Ql = z({}, rl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: so, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ll && (ll && e.type === "mousemove" ? (io = e.screenX - ll.screenX, oo = e.screenY - ll.screenY) : oo = io = 0, ll = e), io);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : oo;
  } }), ts = vt(Ql), uf = z({}, Ql, { dataTransfer: 0 }), sf = vt(uf), af = z({}, rl, { relatedTarget: 0 }), uo = vt(af), cf = z({}, hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ff = vt(cf), df = z({}, hr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), pf = vt(df), mf = z({}, hr, { data: 0 }), ns = vt(mf), hf = {
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
  }, yf = {
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
  }, vf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function gf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vf[e]) ? !!t[e] : !1;
  }
  function so() {
    return gf;
  }
  var kf = z({}, rl, { key: function(e) {
    if (e.key) {
      var t = hf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Bl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: so, charCode: function(e) {
    return e.type === "keypress" ? Bl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Bl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), wf = vt(kf), Sf = z({}, Ql, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rs = vt(Sf), xf = z({}, rl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: so }), Ef = vt(xf), Mf = z({}, hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Tf = vt(Mf), _f = z({}, Ql, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Cf = vt(_f), Nf = [9, 13, 27, 32], ao = _ && "CompositionEvent" in window, il = null;
  _ && "documentMode" in document && (il = document.documentMode);
  var jf = _ && "TextEvent" in window && !il, ls = _ && (!ao || il && 8 < il && 11 >= il), is = " ", os = !1;
  function us(e, t) {
    switch (e) {
      case "keyup":
        return Nf.indexOf(t.keyCode) !== -1;
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
  function ss(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var yr = !1;
  function Pf(e, t) {
    switch (e) {
      case "compositionend":
        return ss(t);
      case "keypress":
        return t.which !== 32 ? null : (os = !0, is);
      case "textInput":
        return e = t.data, e === is && os ? null : e;
      default:
        return null;
    }
  }
  function Rf(e, t) {
    if (yr) return e === "compositionend" || !ao && us(e, t) ? (e = bu(), Wl = ro = gn = null, yr = !1, e) : null;
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
        return ls && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Lf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function as(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Lf[e.type] : t === "textarea";
  }
  function cs(e, t, n, r) {
    cr(r), t = Zl(t, "onChange"), 0 < t.length && (n = new lo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var ol = null, ul = null;
  function zf(e) {
    Ns(e, 0);
  }
  function Kl(e) {
    var t = Sr(e);
    if (lr(t)) return e;
  }
  function Ff(e, t) {
    if (e === "change") return t;
  }
  var fs = !1;
  if (_) {
    var co;
    if (_) {
      var fo = "oninput" in document;
      if (!fo) {
        var ds = document.createElement("div");
        ds.setAttribute("oninput", "return;"), fo = typeof ds.oninput == "function";
      }
      co = fo;
    } else co = !1;
    fs = co && (!document.documentMode || 9 < document.documentMode);
  }
  function ps() {
    ol && (ol.detachEvent("onpropertychange", ms), ul = ol = null);
  }
  function ms(e) {
    if (e.propertyName === "value" && Kl(ul)) {
      var t = [];
      cs(t, ul, e, qt(e)), Hr(zf, t);
    }
  }
  function Of(e, t, n) {
    e === "focusin" ? (ps(), ol = t, ul = n, ol.attachEvent("onpropertychange", ms)) : e === "focusout" && ps();
  }
  function If(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Kl(ul);
  }
  function Af(e, t) {
    if (e === "click") return Kl(t);
  }
  function Df(e, t) {
    if (e === "input" || e === "change") return Kl(t);
  }
  function Uf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var At = typeof Object.is == "function" ? Object.is : Uf;
  function sl(e, t) {
    if (At(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!L.call(t, l) || !At(e[l], t[l])) return !1;
    }
    return !0;
  }
  function hs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ys(e, t) {
    var n = hs(e);
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
      n = hs(n);
    }
  }
  function vs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function gs() {
    for (var e = window, t = ir(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ir(e.document);
    }
    return t;
  }
  function po(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function $f(e) {
    var t = gs(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && vs(n.ownerDocument.documentElement, n)) {
      if (r !== null && po(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = ys(n, i);
          var o = ys(
            n,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Vf = _ && "documentMode" in document && 11 >= document.documentMode, vr = null, mo = null, al = null, ho = !1;
  function ks(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ho || vr == null || vr !== ir(r) || (r = vr, "selectionStart" in r && po(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), al && sl(al, r) || (al = r, r = Zl(mo, "onSelect"), 0 < r.length && (t = new lo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vr)));
  }
  function Yl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var gr = { animationend: Yl("Animation", "AnimationEnd"), animationiteration: Yl("Animation", "AnimationIteration"), animationstart: Yl("Animation", "AnimationStart"), transitionend: Yl("Transition", "TransitionEnd") }, yo = {}, ws = {};
  _ && (ws = document.createElement("div").style, "AnimationEvent" in window || (delete gr.animationend.animation, delete gr.animationiteration.animation, delete gr.animationstart.animation), "TransitionEvent" in window || delete gr.transitionend.transition);
  function Xl(e) {
    if (yo[e]) return yo[e];
    if (!gr[e]) return e;
    var t = gr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ws) return yo[e] = t[n];
    return e;
  }
  var Ss = Xl("animationend"), xs = Xl("animationiteration"), Es = Xl("animationstart"), Ms = Xl("transitionend"), Ts = /* @__PURE__ */ new Map(), _s = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function kn(e, t) {
    Ts.set(e, t), x(t, [e]);
  }
  for (var vo = 0; vo < _s.length; vo++) {
    var go = _s[vo], Wf = go.toLowerCase(), Bf = go[0].toUpperCase() + go.slice(1);
    kn(Wf, "on" + Bf);
  }
  kn(Ss, "onAnimationEnd"), kn(xs, "onAnimationIteration"), kn(Es, "onAnimationStart"), kn("dblclick", "onDoubleClick"), kn("focusin", "onFocus"), kn("focusout", "onBlur"), kn(Ms, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var cl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hf = new Set("cancel close invalid load scroll toggle".split(" ").concat(cl));
  function Cs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Yi(r, t, void 0, e), e.currentTarget = null;
  }
  function Ns(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var f = r[o], d = f.instance, w = f.currentTarget;
          if (f = f.listener, d !== i && l.isPropagationStopped()) break e;
          Cs(l, f, w), i = d;
        }
        else for (o = 0; o < r.length; o++) {
          if (f = r[o], d = f.instance, w = f.currentTarget, f = f.listener, d !== i && l.isPropagationStopped()) break e;
          Cs(l, f, w), i = d;
        }
      }
    }
    if (Ot) throw e = Vn, Ot = !1, Vn = null, e;
  }
  function Le(e, t) {
    var n = t[_o];
    n === void 0 && (n = t[_o] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (js(t, e, 2, !1), n.add(r));
  }
  function ko(e, t, n) {
    var r = 0;
    t && (r |= 4), js(n, e, r, t);
  }
  var Gl = "_reactListening" + Math.random().toString(36).slice(2);
  function fl(e) {
    if (!e[Gl]) {
      e[Gl] = !0, h.forEach(function(n) {
        n !== "selectionchange" && (Hf.has(n) || ko(n, !1, e), ko(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gl] || (t[Gl] = !0, ko("selectionchange", !1, t));
    }
  }
  function js(e, t, n, r) {
    switch (qu(t)) {
      case 1:
        var l = rf;
        break;
      case 4:
        l = lf;
        break;
      default:
        l = to;
    }
    n = l.bind(null, t, n, e), l = void 0, !fr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function wo(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var f = r.stateNode.containerInfo;
        if (f === l || f.nodeType === 8 && f.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var d = o.tag;
          if ((d === 3 || d === 4) && (d = o.stateNode.containerInfo, d === l || d.nodeType === 8 && d.parentNode === l)) return;
          o = o.return;
        }
        for (; f !== null; ) {
          if (o = Bn(f), o === null) return;
          if (d = o.tag, d === 5 || d === 6) {
            r = i = o;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    Hr(function() {
      var w = i, C = qt(n), j = [];
      e: {
        var T = Ts.get(e);
        if (T !== void 0) {
          var U = lo, H = e;
          switch (e) {
            case "keypress":
              if (Bl(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = wf;
              break;
            case "focusin":
              H = "focus", U = uo;
              break;
            case "focusout":
              H = "blur", U = uo;
              break;
            case "beforeblur":
            case "afterblur":
              U = uo;
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
              U = ts;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = sf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Ef;
              break;
            case Ss:
            case xs:
            case Es:
              U = ff;
              break;
            case Ms:
              U = Tf;
              break;
            case "scroll":
              U = of;
              break;
            case "wheel":
              U = Cf;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = pf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = rs;
          }
          var Y = (t & 4) !== 0, We = !Y && e === "scroll", v = Y ? T !== null ? T + "Capture" : null : T;
          Y = [];
          for (var p = w, g; p !== null; ) {
            g = p;
            var R = g.stateNode;
            if (g.tag === 5 && R !== null && (g = R, v !== null && (R = dn(p, v), R != null && Y.push(dl(p, R, g)))), We) break;
            p = p.return;
          }
          0 < Y.length && (T = new U(T, H, null, n, C), j.push({ event: T, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (T = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", T && n !== ar && (H = n.relatedTarget || n.fromElement) && (Bn(H) || H[en])) break e;
          if ((U || T) && (T = C.window === C ? C : (T = C.ownerDocument) ? T.defaultView || T.parentWindow : window, U ? (H = n.relatedTarget || n.toElement, U = w, H = H ? Bn(H) : null, H !== null && (We = It(H), H !== We || H.tag !== 5 && H.tag !== 6) && (H = null)) : (U = null, H = w), U !== H)) {
            if (Y = ts, R = "onMouseLeave", v = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (Y = rs, R = "onPointerLeave", v = "onPointerEnter", p = "pointer"), We = U == null ? T : Sr(U), g = H == null ? T : Sr(H), T = new Y(R, p + "leave", U, n, C), T.target = We, T.relatedTarget = g, R = null, Bn(C) === w && (Y = new Y(v, p + "enter", H, n, C), Y.target = g, Y.relatedTarget = We, R = Y), We = R, U && H) t: {
              for (Y = U, v = H, p = 0, g = Y; g; g = kr(g)) p++;
              for (g = 0, R = v; R; R = kr(R)) g++;
              for (; 0 < p - g; ) Y = kr(Y), p--;
              for (; 0 < g - p; ) v = kr(v), g--;
              for (; p--; ) {
                if (Y === v || v !== null && Y === v.alternate) break t;
                Y = kr(Y), v = kr(v);
              }
              Y = null;
            }
            else Y = null;
            U !== null && Ps(j, T, U, Y, !1), H !== null && We !== null && Ps(j, We, H, Y, !0);
          }
        }
        e: {
          if (T = w ? Sr(w) : window, U = T.nodeName && T.nodeName.toLowerCase(), U === "select" || U === "input" && T.type === "file") var X = Ff;
          else if (as(T)) if (fs) X = Df;
          else {
            X = If;
            var ee = Of;
          }
          else (U = T.nodeName) && U.toLowerCase() === "input" && (T.type === "checkbox" || T.type === "radio") && (X = Af);
          if (X && (X = X(e, w))) {
            cs(j, X, n, C);
            break e;
          }
          ee && ee(e, T, w), e === "focusout" && (ee = T._wrapperState) && ee.controlled && T.type === "number" && Fn(T, "number", T.value);
        }
        switch (ee = w ? Sr(w) : window, e) {
          case "focusin":
            (as(ee) || ee.contentEditable === "true") && (vr = ee, mo = w, al = null);
            break;
          case "focusout":
            al = mo = vr = null;
            break;
          case "mousedown":
            ho = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ho = !1, ks(j, n, C);
            break;
          case "selectionchange":
            if (Vf) break;
          case "keydown":
          case "keyup":
            ks(j, n, C);
        }
        var te;
        if (ao) e: {
          switch (e) {
            case "compositionstart":
              var oe = "onCompositionStart";
              break e;
            case "compositionend":
              oe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              oe = "onCompositionUpdate";
              break e;
          }
          oe = void 0;
        }
        else yr ? us(e, n) && (oe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (oe = "onCompositionStart");
        oe && (ls && n.locale !== "ko" && (yr || oe !== "onCompositionStart" ? oe === "onCompositionEnd" && yr && (te = bu()) : (gn = C, ro = "value" in gn ? gn.value : gn.textContent, yr = !0)), ee = Zl(w, oe), 0 < ee.length && (oe = new ns(oe, e, null, n, C), j.push({ event: oe, listeners: ee }), te ? oe.data = te : (te = ss(n), te !== null && (oe.data = te)))), (te = jf ? Pf(e, n) : Rf(e, n)) && (w = Zl(w, "onBeforeInput"), 0 < w.length && (C = new ns("onBeforeInput", "beforeinput", null, n, C), j.push({ event: C, listeners: w }), C.data = te));
      }
      Ns(j, t);
    });
  }
  function dl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Zl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = dn(e, n), i != null && r.unshift(dl(e, i, l)), i = dn(e, t), i != null && r.push(dl(e, i, l))), e = e.return;
    }
    return r;
  }
  function kr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ps(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var f = n, d = f.alternate, w = f.stateNode;
      if (d !== null && d === r) break;
      f.tag === 5 && w !== null && (f = w, l ? (d = dn(n, i), d != null && o.unshift(dl(n, d, f))) : l || (d = dn(n, i), d != null && o.push(dl(n, d, f)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Qf = /\r\n?/g, Kf = /\u0000|\uFFFD/g;
  function Rs(e) {
    return (typeof e == "string" ? e : "" + e).replace(Qf, `
`).replace(Kf, "");
  }
  function Jl(e, t, n) {
    if (t = Rs(t), Rs(e) !== t && n) throw Error(a(425));
  }
  function ql() {
  }
  var So = null, xo = null;
  function Eo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Mo = typeof setTimeout == "function" ? setTimeout : void 0, Yf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ls = typeof Promise == "function" ? Promise : void 0, Xf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ls < "u" ? function(e) {
    return Ls.resolve(null).then(e).catch(Gf);
  } : Mo;
  function Gf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function To(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), nl(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    nl(t);
  }
  function wn(e) {
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
  function zs(e) {
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
  var wr = Math.random().toString(36).slice(2), Kt = "__reactFiber$" + wr, pl = "__reactProps$" + wr, en = "__reactContainer$" + wr, _o = "__reactEvents$" + wr, Zf = "__reactListeners$" + wr, Jf = "__reactHandles$" + wr;
  function Bn(e) {
    var t = e[Kt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[en] || n[Kt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = zs(e); e !== null; ) {
          if (n = e[Kt]) return n;
          e = zs(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ml(e) {
    return e = e[Kt] || e[en], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Sr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function bl(e) {
    return e[pl] || null;
  }
  var Co = [], xr = -1;
  function Sn(e) {
    return { current: e };
  }
  function ze(e) {
    0 > xr || (e.current = Co[xr], Co[xr] = null, xr--);
  }
  function Pe(e, t) {
    xr++, Co[xr] = e.current, e.current = t;
  }
  var xn = {}, et = Sn(xn), at = Sn(!1), Hn = xn;
  function Er(e, t) {
    var n = e.type.contextTypes;
    if (!n) return xn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function ct(e) {
    return e = e.childContextTypes, e != null;
  }
  function ei() {
    ze(at), ze(et);
  }
  function Fs(e, t, n) {
    if (et.current !== xn) throw Error(a(168));
    Pe(et, t), Pe(at, n);
  }
  function Os(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, ae(e) || "Unknown", l));
    return z({}, n, r);
  }
  function ti(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, Hn = et.current, Pe(et, e), Pe(at, at.current), !0;
  }
  function Is(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n ? (e = Os(e, t, Hn), r.__reactInternalMemoizedMergedChildContext = e, ze(at), ze(et), Pe(et, e)) : ze(at), Pe(at, n);
  }
  var tn = null, ni = !1, No = !1;
  function As(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  function qf(e) {
    ni = !0, As(e);
  }
  function En() {
    if (!No && tn !== null) {
      No = !0;
      var e = 0, t = Me;
      try {
        var n = tn;
        for (Me = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        tn = null, ni = !1;
      } catch (l) {
        throw tn !== null && (tn = tn.slice(e + 1)), dr(pr, En), l;
      } finally {
        Me = t, No = !1;
      }
    }
    return null;
  }
  var Mr = [], Tr = 0, ri = null, li = 0, Mt = [], Tt = 0, Qn = null, nn = 1, rn = "";
  function Kn(e, t) {
    Mr[Tr++] = li, Mr[Tr++] = ri, ri = e, li = t;
  }
  function Ds(e, t, n) {
    Mt[Tt++] = nn, Mt[Tt++] = rn, Mt[Tt++] = Qn, Qn = e;
    var r = nn;
    e = rn;
    var l = 32 - D(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - D(t) + l;
    if (30 < i) {
      var o = l - l % 5;
      i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, nn = 1 << 32 - D(t) + l | n << l | r, rn = i + e;
    } else nn = 1 << i | n << l | r, rn = e;
  }
  function jo(e) {
    e.return !== null && (Kn(e, 1), Ds(e, 1, 0));
  }
  function Po(e) {
    for (; e === ri; ) ri = Mr[--Tr], Mr[Tr] = null, li = Mr[--Tr], Mr[Tr] = null;
    for (; e === Qn; ) Qn = Mt[--Tt], Mt[Tt] = null, rn = Mt[--Tt], Mt[Tt] = null, nn = Mt[--Tt], Mt[Tt] = null;
  }
  var gt = null, kt = null, Oe = !1, Dt = null;
  function Us(e, t) {
    var n = jt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function $s(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, gt = e, kt = wn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, gt = e, kt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Qn !== null ? { id: nn, overflow: rn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = jt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, gt = e, kt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ro(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Lo(e) {
    if (Oe) {
      var t = kt;
      if (t) {
        var n = t;
        if (!$s(e, t)) {
          if (Ro(e)) throw Error(a(418));
          t = wn(n.nextSibling);
          var r = gt;
          t && $s(e, t) ? Us(r, n) : (e.flags = e.flags & -4097 | 2, Oe = !1, gt = e);
        }
      } else {
        if (Ro(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, Oe = !1, gt = e;
      }
    }
  }
  function Vs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    gt = e;
  }
  function ii(e) {
    if (e !== gt) return !1;
    if (!Oe) return Vs(e), Oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Eo(e.type, e.memoizedProps)), t && (t = kt)) {
      if (Ro(e)) throw Ws(), Error(a(418));
      for (; t; ) Us(e, t), t = wn(t.nextSibling);
    }
    if (Vs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                kt = wn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        kt = null;
      }
    } else kt = gt ? wn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ws() {
    for (var e = kt; e; ) e = wn(e.nextSibling);
  }
  function _r() {
    kt = gt = null, Oe = !1;
  }
  function zo(e) {
    Dt === null ? Dt = [e] : Dt.push(e);
  }
  var bf = ye.ReactCurrentBatchConfig;
  function hl(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
          var f = l.refs;
          o === null ? delete f[i] : f[i] = o;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function oi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Bs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Hs(e) {
    function t(v, p) {
      if (e) {
        var g = v.deletions;
        g === null ? (v.deletions = [p], v.flags |= 16) : g.push(p);
      }
    }
    function n(v, p) {
      if (!e) return null;
      for (; p !== null; ) t(v, p), p = p.sibling;
      return null;
    }
    function r(v, p) {
      for (v = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? v.set(p.key, p) : v.set(p.index, p), p = p.sibling;
      return v;
    }
    function l(v, p) {
      return v = Rn(v, p), v.index = 0, v.sibling = null, v;
    }
    function i(v, p, g) {
      return v.index = g, e ? (g = v.alternate, g !== null ? (g = g.index, g < p ? (v.flags |= 2, p) : g) : (v.flags |= 2, p)) : (v.flags |= 1048576, p);
    }
    function o(v) {
      return e && v.alternate === null && (v.flags |= 2), v;
    }
    function f(v, p, g, R) {
      return p === null || p.tag !== 6 ? (p = Mu(g, v.mode, R), p.return = v, p) : (p = l(p, g), p.return = v, p);
    }
    function d(v, p, g, R) {
      var X = g.type;
      return X === Ce ? C(v, p, g.props.children, R, g.key) : p !== null && (p.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Ve && Bs(X) === p.type) ? (R = l(p, g.props), R.ref = hl(v, p, g), R.return = v, R) : (R = Pi(g.type, g.key, g.props, null, v.mode, R), R.ref = hl(v, p, g), R.return = v, R);
    }
    function w(v, p, g, R) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = Tu(g, v.mode, R), p.return = v, p) : (p = l(p, g.children || []), p.return = v, p);
    }
    function C(v, p, g, R, X) {
      return p === null || p.tag !== 7 ? (p = er(g, v.mode, R, X), p.return = v, p) : (p = l(p, g), p.return = v, p);
    }
    function j(v, p, g) {
      if (typeof p == "string" && p !== "" || typeof p == "number") return p = Mu("" + p, v.mode, g), p.return = v, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case xe:
            return g = Pi(p.type, p.key, p.props, null, v.mode, g), g.ref = hl(v, null, p), g.return = v, g;
          case Re:
            return p = Tu(p, v.mode, g), p.return = v, p;
          case Ve:
            var R = p._init;
            return j(v, R(p._payload), g);
        }
        if (be(p) || K(p)) return p = er(p, v.mode, g, null), p.return = v, p;
        oi(v, p);
      }
      return null;
    }
    function T(v, p, g, R) {
      var X = p !== null ? p.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number") return X !== null ? null : f(v, p, "" + g, R);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case xe:
            return g.key === X ? d(v, p, g, R) : null;
          case Re:
            return g.key === X ? w(v, p, g, R) : null;
          case Ve:
            return X = g._init, T(
              v,
              p,
              X(g._payload),
              R
            );
        }
        if (be(g) || K(g)) return X !== null ? null : C(v, p, g, R, null);
        oi(v, g);
      }
      return null;
    }
    function U(v, p, g, R, X) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return v = v.get(g) || null, f(p, v, "" + R, X);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case xe:
            return v = v.get(R.key === null ? g : R.key) || null, d(p, v, R, X);
          case Re:
            return v = v.get(R.key === null ? g : R.key) || null, w(p, v, R, X);
          case Ve:
            var ee = R._init;
            return U(v, p, g, ee(R._payload), X);
        }
        if (be(R) || K(R)) return v = v.get(g) || null, C(p, v, R, X, null);
        oi(p, R);
      }
      return null;
    }
    function H(v, p, g, R) {
      for (var X = null, ee = null, te = p, oe = p = 0, Ze = null; te !== null && oe < g.length; oe++) {
        te.index > oe ? (Ze = te, te = null) : Ze = te.sibling;
        var ke = T(v, te, g[oe], R);
        if (ke === null) {
          te === null && (te = Ze);
          break;
        }
        e && te && ke.alternate === null && t(v, te), p = i(ke, p, oe), ee === null ? X = ke : ee.sibling = ke, ee = ke, te = Ze;
      }
      if (oe === g.length) return n(v, te), Oe && Kn(v, oe), X;
      if (te === null) {
        for (; oe < g.length; oe++) te = j(v, g[oe], R), te !== null && (p = i(te, p, oe), ee === null ? X = te : ee.sibling = te, ee = te);
        return Oe && Kn(v, oe), X;
      }
      for (te = r(v, te); oe < g.length; oe++) Ze = U(te, v, oe, g[oe], R), Ze !== null && (e && Ze.alternate !== null && te.delete(Ze.key === null ? oe : Ze.key), p = i(Ze, p, oe), ee === null ? X = Ze : ee.sibling = Ze, ee = Ze);
      return e && te.forEach(function(Ln) {
        return t(v, Ln);
      }), Oe && Kn(v, oe), X;
    }
    function Y(v, p, g, R) {
      var X = K(g);
      if (typeof X != "function") throw Error(a(150));
      if (g = X.call(g), g == null) throw Error(a(151));
      for (var ee = X = null, te = p, oe = p = 0, Ze = null, ke = g.next(); te !== null && !ke.done; oe++, ke = g.next()) {
        te.index > oe ? (Ze = te, te = null) : Ze = te.sibling;
        var Ln = T(v, te, ke.value, R);
        if (Ln === null) {
          te === null && (te = Ze);
          break;
        }
        e && te && Ln.alternate === null && t(v, te), p = i(Ln, p, oe), ee === null ? X = Ln : ee.sibling = Ln, ee = Ln, te = Ze;
      }
      if (ke.done) return n(
        v,
        te
      ), Oe && Kn(v, oe), X;
      if (te === null) {
        for (; !ke.done; oe++, ke = g.next()) ke = j(v, ke.value, R), ke !== null && (p = i(ke, p, oe), ee === null ? X = ke : ee.sibling = ke, ee = ke);
        return Oe && Kn(v, oe), X;
      }
      for (te = r(v, te); !ke.done; oe++, ke = g.next()) ke = U(te, v, oe, ke.value, R), ke !== null && (e && ke.alternate !== null && te.delete(ke.key === null ? oe : ke.key), p = i(ke, p, oe), ee === null ? X = ke : ee.sibling = ke, ee = ke);
      return e && te.forEach(function(Ld) {
        return t(v, Ld);
      }), Oe && Kn(v, oe), X;
    }
    function We(v, p, g, R) {
      if (typeof g == "object" && g !== null && g.type === Ce && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case xe:
            e: {
              for (var X = g.key, ee = p; ee !== null; ) {
                if (ee.key === X) {
                  if (X = g.type, X === Ce) {
                    if (ee.tag === 7) {
                      n(v, ee.sibling), p = l(ee, g.props.children), p.return = v, v = p;
                      break e;
                    }
                  } else if (ee.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Ve && Bs(X) === ee.type) {
                    n(v, ee.sibling), p = l(ee, g.props), p.ref = hl(v, ee, g), p.return = v, v = p;
                    break e;
                  }
                  n(v, ee);
                  break;
                } else t(v, ee);
                ee = ee.sibling;
              }
              g.type === Ce ? (p = er(g.props.children, v.mode, R, g.key), p.return = v, v = p) : (R = Pi(g.type, g.key, g.props, null, v.mode, R), R.ref = hl(v, p, g), R.return = v, v = R);
            }
            return o(v);
          case Re:
            e: {
              for (ee = g.key; p !== null; ) {
                if (p.key === ee) if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                  n(v, p.sibling), p = l(p, g.children || []), p.return = v, v = p;
                  break e;
                } else {
                  n(v, p);
                  break;
                }
                else t(v, p);
                p = p.sibling;
              }
              p = Tu(g, v.mode, R), p.return = v, v = p;
            }
            return o(v);
          case Ve:
            return ee = g._init, We(v, p, ee(g._payload), R);
        }
        if (be(g)) return H(v, p, g, R);
        if (K(g)) return Y(v, p, g, R);
        oi(v, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(v, p.sibling), p = l(p, g), p.return = v, v = p) : (n(v, p), p = Mu(g, v.mode, R), p.return = v, v = p), o(v)) : n(v, p);
    }
    return We;
  }
  var Cr = Hs(!0), Qs = Hs(!1), ui = Sn(null), si = null, Nr = null, Fo = null;
  function Oo() {
    Fo = Nr = si = null;
  }
  function Io(e) {
    var t = ui.current;
    ze(ui), e._currentValue = t;
  }
  function Ao(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function jr(e, t) {
    si = e, Fo = Nr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (ft = !0), e.firstContext = null);
  }
  function _t(e) {
    var t = e._currentValue;
    if (Fo !== e) if (e = { context: e, memoizedValue: t, next: null }, Nr === null) {
      if (si === null) throw Error(a(308));
      Nr = e, si.dependencies = { lanes: 0, firstContext: e };
    } else Nr = Nr.next = e;
    return t;
  }
  var Yn = null;
  function Do(e) {
    Yn === null ? Yn = [e] : Yn.push(e);
  }
  function Ks(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Do(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ln(e, r);
  }
  function ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Mn = !1;
  function Uo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ys(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function on(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ve & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, ln(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Do(r)) : (t.next = l.next, l.next = t), r.interleaved = t, ln(e, n);
  }
  function ai(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, qi(e, n);
    }
  }
  function Xs(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? l = i = o : i = i.next = o, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function ci(e, t, n, r) {
    var l = e.updateQueue;
    Mn = !1;
    var i = l.firstBaseUpdate, o = l.lastBaseUpdate, f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var d = f, w = d.next;
      d.next = null, o === null ? i = w : o.next = w, o = d;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, f = C.lastBaseUpdate, f !== o && (f === null ? C.firstBaseUpdate = w : f.next = w, C.lastBaseUpdate = d));
    }
    if (i !== null) {
      var j = l.baseState;
      o = 0, C = w = d = null, f = i;
      do {
        var T = f.lane, U = f.eventTime;
        if ((r & T) === T) {
          C !== null && (C = C.next = {
            eventTime: U,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          e: {
            var H = e, Y = f;
            switch (T = t, U = n, Y.tag) {
              case 1:
                if (H = Y.payload, typeof H == "function") {
                  j = H.call(U, j, T);
                  break e;
                }
                j = H;
                break e;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = Y.payload, T = typeof H == "function" ? H.call(U, j, T) : H, T == null) break e;
                j = z({}, j, T);
                break e;
              case 2:
                Mn = !0;
            }
          }
          f.callback !== null && f.lane !== 0 && (e.flags |= 64, T = l.effects, T === null ? l.effects = [f] : T.push(f));
        } else U = { eventTime: U, lane: T, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, C === null ? (w = C = U, d = j) : C = C.next = U, o |= T;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null) break;
          T = f, f = T.next, T.next = null, l.lastBaseUpdate = T, l.shared.pending = null;
        }
      } while (!0);
      if (C === null && (d = j), l.baseState = d, l.firstBaseUpdate = w, l.lastBaseUpdate = C, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      Zn |= o, e.lanes = o, e.memoizedState = j;
    }
  }
  function Gs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(a(191, l));
        l.call(r);
      }
    }
  }
  var yl = {}, Yt = Sn(yl), vl = Sn(yl), gl = Sn(yl);
  function Xn(e) {
    if (e === yl) throw Error(a(174));
    return e;
  }
  function $o(e, t) {
    switch (Pe(gl, t), Pe(vl, e), Pe(Yt, yl), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : On(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = On(t, e);
    }
    ze(Yt), Pe(Yt, t);
  }
  function Pr() {
    ze(Yt), ze(vl), ze(gl);
  }
  function Zs(e) {
    Xn(gl.current);
    var t = Xn(Yt.current), n = On(t, e.type);
    t !== n && (Pe(vl, e), Pe(Yt, n));
  }
  function Vo(e) {
    vl.current === e && (ze(Yt), ze(vl));
  }
  var Ae = Sn(0);
  function fi(e) {
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
  var Wo = [];
  function Bo() {
    for (var e = 0; e < Wo.length; e++) Wo[e]._workInProgressVersionPrimary = null;
    Wo.length = 0;
  }
  var di = ye.ReactCurrentDispatcher, Ho = ye.ReactCurrentBatchConfig, Gn = 0, De = null, Ke = null, Xe = null, pi = !1, kl = !1, wl = 0, ed = 0;
  function tt() {
    throw Error(a(321));
  }
  function Qo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!At(e[n], t[n])) return !1;
    return !0;
  }
  function Ko(e, t, n, r, l, i) {
    if (Gn = i, De = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, di.current = e === null || e.memoizedState === null ? ld : id, e = n(r, l), kl) {
      i = 0;
      do {
        if (kl = !1, wl = 0, 25 <= i) throw Error(a(301));
        i += 1, Xe = Ke = null, t.updateQueue = null, di.current = od, e = n(r, l);
      } while (kl);
    }
    if (di.current = yi, t = Ke !== null && Ke.next !== null, Gn = 0, Xe = Ke = De = null, pi = !1, t) throw Error(a(300));
    return e;
  }
  function Yo() {
    var e = wl !== 0;
    return wl = 0, e;
  }
  function Xt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xe === null ? De.memoizedState = Xe = e : Xe = Xe.next = e, Xe;
  }
  function Ct() {
    if (Ke === null) {
      var e = De.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var t = Xe === null ? De.memoizedState : Xe.next;
    if (t !== null) Xe = t, Ke = e;
    else {
      if (e === null) throw Error(a(310));
      Ke = e, e = { memoizedState: Ke.memoizedState, baseState: Ke.baseState, baseQueue: Ke.baseQueue, queue: Ke.queue, next: null }, Xe === null ? De.memoizedState = Xe = e : Xe = Xe.next = e;
    }
    return Xe;
  }
  function Sl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xo(e) {
    var t = Ct(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Ke, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = i.next, i.next = o;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var f = o = null, d = null, w = i;
      do {
        var C = w.lane;
        if ((Gn & C) === C) d !== null && (d = d.next = { lane: 0, action: w.action, hasEagerState: w.hasEagerState, eagerState: w.eagerState, next: null }), r = w.hasEagerState ? w.eagerState : e(r, w.action);
        else {
          var j = {
            lane: C,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          };
          d === null ? (f = d = j, o = r) : d = d.next = j, De.lanes |= C, Zn |= C;
        }
        w = w.next;
      } while (w !== null && w !== i);
      d === null ? o = r : d.next = f, At(r, t.memoizedState) || (ft = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = d, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, De.lanes |= i, Zn |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Go(e) {
    var t = Ct(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== l);
      At(i, t.memoizedState) || (ft = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function Js() {
  }
  function qs(e, t) {
    var n = De, r = Ct(), l = t(), i = !At(r.memoizedState, l);
    if (i && (r.memoizedState = l, ft = !0), r = r.queue, Zo(ta.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Xe !== null && Xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, xl(9, ea.bind(null, n, r, l, t), void 0, null), Ge === null) throw Error(a(349));
      (Gn & 30) !== 0 || bs(n, t, l);
    }
    return l;
  }
  function bs(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ea(e, t, n, r) {
    t.value = n, t.getSnapshot = r, na(t) && ra(e);
  }
  function ta(e, t, n) {
    return n(function() {
      na(t) && ra(e);
    });
  }
  function na(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !At(e, n);
    } catch {
      return !0;
    }
  }
  function ra(e) {
    var t = ln(e, 1);
    t !== null && Wt(t, e, 1, -1);
  }
  function la(e) {
    var t = Xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sl, lastRenderedState: e }, t.queue = e, e = e.dispatch = rd.bind(null, De, e), [t.memoizedState, e];
  }
  function xl(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ia() {
    return Ct().memoizedState;
  }
  function mi(e, t, n, r) {
    var l = Xt();
    De.flags |= e, l.memoizedState = xl(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function hi(e, t, n, r) {
    var l = Ct();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ke !== null) {
      var o = Ke.memoizedState;
      if (i = o.destroy, r !== null && Qo(r, o.deps)) {
        l.memoizedState = xl(t, n, i, r);
        return;
      }
    }
    De.flags |= e, l.memoizedState = xl(1 | t, n, i, r);
  }
  function oa(e, t) {
    return mi(8390656, 8, e, t);
  }
  function Zo(e, t) {
    return hi(2048, 8, e, t);
  }
  function ua(e, t) {
    return hi(4, 2, e, t);
  }
  function sa(e, t) {
    return hi(4, 4, e, t);
  }
  function aa(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function ca(e, t, n) {
    return n = n != null ? n.concat([e]) : null, hi(4, 4, aa.bind(null, t, e), n);
  }
  function Jo() {
  }
  function fa(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function da(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function pa(e, t, n) {
    return (Gn & 21) === 0 ? (e.baseState && (e.baseState = !1, ft = !0), e.memoizedState = n) : (At(n, t) || (n = Al(), De.lanes |= n, Zn |= n, e.baseState = !0), t);
  }
  function td(e, t) {
    var n = Me;
    Me = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ho.transition;
    Ho.transition = {};
    try {
      e(!1), t();
    } finally {
      Me = n, Ho.transition = r;
    }
  }
  function ma() {
    return Ct().memoizedState;
  }
  function nd(e, t, n) {
    var r = jn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ha(e)) ya(t, n);
    else if (n = Ks(e, t, n, r), n !== null) {
      var l = it();
      Wt(n, e, r, l), va(n, t, r);
    }
  }
  function rd(e, t, n) {
    var r = jn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ha(e)) ya(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, f = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = f, At(f, o)) {
          var d = t.interleaved;
          d === null ? (l.next = l, Do(t)) : (l.next = d.next, d.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = Ks(e, t, l, r), n !== null && (l = it(), Wt(n, e, r, l), va(n, t, r));
    }
  }
  function ha(e) {
    var t = e.alternate;
    return e === De || t !== null && t === De;
  }
  function ya(e, t) {
    kl = pi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function va(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, qi(e, n);
    }
  }
  var yi = { readContext: _t, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, ld = { readContext: _t, useCallback: function(e, t) {
    return Xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: _t, useEffect: oa, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, mi(
      4194308,
      4,
      aa.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return mi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return mi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Xt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Xt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = nd.bind(null, De, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: la, useDebugValue: Jo, useDeferredValue: function(e) {
    return Xt().memoizedState = e;
  }, useTransition: function() {
    var e = la(!1), t = e[0];
    return e = td.bind(null, e[1]), Xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = De, l = Xt();
    if (Oe) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), Ge === null) throw Error(a(349));
      (Gn & 30) !== 0 || bs(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, oa(ta.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, xl(9, ea.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Xt(), t = Ge.identifierPrefix;
    if (Oe) {
      var n = rn, r = nn;
      n = (r & ~(1 << 32 - D(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = ed++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, id = {
    readContext: _t,
    useCallback: fa,
    useContext: _t,
    useEffect: Zo,
    useImperativeHandle: ca,
    useInsertionEffect: ua,
    useLayoutEffect: sa,
    useMemo: da,
    useReducer: Xo,
    useRef: ia,
    useState: function() {
      return Xo(Sl);
    },
    useDebugValue: Jo,
    useDeferredValue: function(e) {
      var t = Ct();
      return pa(t, Ke.memoizedState, e);
    },
    useTransition: function() {
      var e = Xo(Sl)[0], t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Js,
    useSyncExternalStore: qs,
    useId: ma,
    unstable_isNewReconciler: !1
  }, od = { readContext: _t, useCallback: fa, useContext: _t, useEffect: Zo, useImperativeHandle: ca, useInsertionEffect: ua, useLayoutEffect: sa, useMemo: da, useReducer: Go, useRef: ia, useState: function() {
    return Go(Sl);
  }, useDebugValue: Jo, useDeferredValue: function(e) {
    var t = Ct();
    return Ke === null ? t.memoizedState = e : pa(t, Ke.memoizedState, e);
  }, useTransition: function() {
    var e = Go(Sl)[0], t = Ct().memoizedState;
    return [e, t];
  }, useMutableSource: Js, useSyncExternalStore: qs, useId: ma, unstable_isNewReconciler: !1 };
  function Ut(e, t) {
    if (e && e.defaultProps) {
      t = z({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function qo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var vi = { isMounted: function(e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = it(), l = jn(e), i = on(r, l);
    i.payload = t, n != null && (i.callback = n), t = Tn(e, i, l), t !== null && (Wt(t, e, l, r), ai(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = it(), l = jn(e), i = on(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Tn(e, i, l), t !== null && (Wt(t, e, l, r), ai(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = it(), r = jn(e), l = on(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Tn(e, l, r), t !== null && (Wt(t, e, r, n), ai(t, e, r));
  } };
  function ga(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !sl(n, r) || !sl(l, i) : !0;
  }
  function ka(e, t, n) {
    var r = !1, l = xn, i = t.contextType;
    return typeof i == "object" && i !== null ? i = _t(i) : (l = ct(t) ? Hn : et.current, r = t.contextTypes, i = (r = r != null) ? Er(e, l) : xn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function wa(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vi.enqueueReplaceState(t, t.state, null);
  }
  function bo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Uo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = _t(i) : (i = ct(t) ? Hn : et.current, l.context = Er(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (qo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && vi.enqueueReplaceState(l, l.state, null), ci(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Rr(e, t) {
    try {
      var n = "", r = t;
      do
        n += ce(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function eu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function tu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var ud = typeof WeakMap == "function" ? WeakMap : Map;
  function Sa(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Mi || (Mi = !0, yu = r), tu(e, t);
    }, n;
  }
  function xa(e, t, n) {
    n = on(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        tu(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      tu(e, t), typeof r != "function" && (Cn === null ? Cn = /* @__PURE__ */ new Set([this]) : Cn.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Ea(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new ud();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Sd.bind(null, e, t, n), t.then(e, e));
  }
  function Ma(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ta(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, Tn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var sd = ye.ReactCurrentOwner, ft = !1;
  function lt(e, t, n, r) {
    t.child = e === null ? Qs(t, null, n, r) : Cr(t, e.child, n, r);
  }
  function _a(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return jr(t, l), r = Ko(e, t, n, r, i, l), n = Yo(), e !== null && !ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, un(e, t, l)) : (Oe && n && jo(t), t.flags |= 1, lt(e, t, r, l), t.child);
  }
  function Ca(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Eu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Na(e, t, i, r, l)) : (e = Pi(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : sl, n(o, r) && e.ref === t.ref) return un(e, t, l);
    }
    return t.flags |= 1, e = Rn(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Na(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (sl(i, r) && e.ref === t.ref) if (ft = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (ft = !0);
      else return t.lanes = e.lanes, un(e, t, l);
    }
    return nu(e, t, n, r, l);
  }
  function ja(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Pe(zr, wt), wt |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Pe(zr, wt), wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Pe(zr, wt), wt |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Pe(zr, wt), wt |= r;
    return lt(e, t, l, n), t.child;
  }
  function Pa(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function nu(e, t, n, r, l) {
    var i = ct(n) ? Hn : et.current;
    return i = Er(t, i), jr(t, l), n = Ko(e, t, n, r, i, l), r = Yo(), e !== null && !ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, un(e, t, l)) : (Oe && r && jo(t), t.flags |= 1, lt(e, t, n, l), t.child);
  }
  function Ra(e, t, n, r, l) {
    if (ct(n)) {
      var i = !0;
      ti(t);
    } else i = !1;
    if (jr(t, l), t.stateNode === null) ki(e, t), ka(t, n, r), bo(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, f = t.memoizedProps;
      o.props = f;
      var d = o.context, w = n.contextType;
      typeof w == "object" && w !== null ? w = _t(w) : (w = ct(n) ? Hn : et.current, w = Er(t, w));
      var C = n.getDerivedStateFromProps, j = typeof C == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      j || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== r || d !== w) && wa(t, o, r, w), Mn = !1;
      var T = t.memoizedState;
      o.state = T, ci(t, r, o, l), d = t.memoizedState, f !== r || T !== d || at.current || Mn ? (typeof C == "function" && (qo(t, n, C, r), d = t.memoizedState), (f = Mn || ga(t, n, f, r, T, d, w)) ? (j || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = d), o.props = r, o.state = d, o.context = w, r = f) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, Ys(e, t), f = t.memoizedProps, w = t.type === t.elementType ? f : Ut(t.type, f), o.props = w, j = t.pendingProps, T = o.context, d = n.contextType, typeof d == "object" && d !== null ? d = _t(d) : (d = ct(n) ? Hn : et.current, d = Er(t, d));
      var U = n.getDerivedStateFromProps;
      (C = typeof U == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== j || T !== d) && wa(t, o, r, d), Mn = !1, T = t.memoizedState, o.state = T, ci(t, r, o, l);
      var H = t.memoizedState;
      f !== j || T !== H || at.current || Mn ? (typeof U == "function" && (qo(t, n, U, r), H = t.memoizedState), (w = Mn || ga(t, n, w, r, T, H, d) || !1) ? (C || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, H, d), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, H, d)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = H), o.props = r, o.state = H, o.context = d, r = w) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ru(e, t, n, r, i, l);
  }
  function ru(e, t, n, r, l, i) {
    Pa(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Is(t, n, !1), un(e, t, i);
    r = t.stateNode, sd.current = t;
    var f = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Cr(t, e.child, null, i), t.child = Cr(t, null, f, i)) : lt(e, t, f, i), t.memoizedState = r.state, l && Is(t, n, !0), t.child;
  }
  function La(e) {
    var t = e.stateNode;
    t.pendingContext ? Fs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fs(e, t.context, !1), $o(e, t.containerInfo);
  }
  function za(e, t, n, r, l) {
    return _r(), zo(l), t.flags |= 256, lt(e, t, n, r), t.child;
  }
  var lu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function iu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Fa(e, t, n) {
    var r = t.pendingProps, l = Ae.current, i = !1, o = (t.flags & 128) !== 0, f;
    if ((f = o) || (f = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), f ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Pe(Ae, l & 1), e === null)
      return Lo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Ri(o, r, 0, null), e = er(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = iu(n), t.memoizedState = lu, e) : ou(t, o));
    if (l = e.memoizedState, l !== null && (f = l.dehydrated, f !== null)) return ad(e, t, o, r, f, l, n);
    if (i) {
      i = r.fallback, o = t.mode, l = e.child, f = l.sibling;
      var d = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = d, t.deletions = null) : (r = Rn(l, d), r.subtreeFlags = l.subtreeFlags & 14680064), f !== null ? i = Rn(f, i) : (i = er(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? iu(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = lu, r;
    }
    return i = e.child, e = i.sibling, r = Rn(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ou(e, t) {
    return t = Ri({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function gi(e, t, n, r) {
    return r !== null && zo(r), Cr(t, e.child, null, n), e = ou(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function ad(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = eu(Error(a(422))), gi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Ri({ mode: "visible", children: r.children }, l, 0, null), i = er(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Cr(t, e.child, null, o), t.child.memoizedState = iu(o), t.memoizedState = lu, i);
    if ((t.mode & 1) === 0) return gi(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var f = r.dgst;
      return r = f, i = Error(a(419)), r = eu(i, r, void 0), gi(e, t, o, r);
    }
    if (f = (o & e.childLanes) !== 0, ft || f) {
      if (r = Ge, r !== null) {
        switch (o & -o) {
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
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, ln(e, l), Wt(r, e, l, -1));
      }
      return xu(), r = eu(Error(a(421))), gi(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = xd.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, kt = wn(l.nextSibling), gt = t, Oe = !0, Dt = null, e !== null && (Mt[Tt++] = nn, Mt[Tt++] = rn, Mt[Tt++] = Qn, nn = e.id, rn = e.overflow, Qn = t), t = ou(t, r.children), t.flags |= 4096, t);
  }
  function Oa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ao(e.return, t, n);
  }
  function uu(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function Ia(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (lt(e, t, r.children, n), r = Ae.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Oa(e, n, t);
        else if (e.tag === 19) Oa(e, n, t);
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
    if (Pe(Ae, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && fi(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), uu(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && fi(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        uu(t, !0, n, null, i);
        break;
      case "together":
        uu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ki(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function un(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Zn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Rn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function cd(e, t, n) {
    switch (t.tag) {
      case 3:
        La(t), _r();
        break;
      case 5:
        Zs(t);
        break;
      case 1:
        ct(t.type) && ti(t);
        break;
      case 4:
        $o(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        Pe(ui, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Pe(Ae, Ae.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Fa(e, t, n) : (Pe(Ae, Ae.current & 1), e = un(e, t, n), e !== null ? e.sibling : null);
        Pe(Ae, Ae.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Ia(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Pe(Ae, Ae.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ja(e, t, n);
    }
    return un(e, t, n);
  }
  var Aa, su, Da, Ua;
  Aa = function(e, t) {
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
  }, su = function() {
  }, Da = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, Xn(Yt.current);
      var i = null;
      switch (n) {
        case "input":
          l = Ar(e, l), r = Ar(e, r), i = [];
          break;
        case "select":
          l = z({}, l, { value: void 0 }), r = z({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = $r(e, l), r = $r(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ql);
      }
      Jt(n, r);
      var o;
      n = null;
      for (w in l) if (!r.hasOwnProperty(w) && l.hasOwnProperty(w) && l[w] != null) if (w === "style") {
        var f = l[w];
        for (o in f) f.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else w !== "dangerouslySetInnerHTML" && w !== "children" && w !== "suppressContentEditableWarning" && w !== "suppressHydrationWarning" && w !== "autoFocus" && (y.hasOwnProperty(w) ? i || (i = []) : (i = i || []).push(w, null));
      for (w in r) {
        var d = r[w];
        if (f = l?.[w], r.hasOwnProperty(w) && d !== f && (d != null || f != null)) if (w === "style") if (f) {
          for (o in f) !f.hasOwnProperty(o) || d && d.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in d) d.hasOwnProperty(o) && f[o] !== d[o] && (n || (n = {}), n[o] = d[o]);
        } else n || (i || (i = []), i.push(
          w,
          n
        )), n = d;
        else w === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, f = f ? f.__html : void 0, d != null && f !== d && (i = i || []).push(w, d)) : w === "children" ? typeof d != "string" && typeof d != "number" || (i = i || []).push(w, "" + d) : w !== "suppressContentEditableWarning" && w !== "suppressHydrationWarning" && (y.hasOwnProperty(w) ? (d != null && w === "onScroll" && Le("scroll", e), i || f === d || (i = [])) : (i = i || []).push(w, d));
      }
      n && (i = i || []).push("style", n);
      var w = i;
      (t.updateQueue = w) && (t.flags |= 4);
    }
  }, Ua = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function El(e, t) {
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
  function nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function fd(e, t, n) {
    var r = t.pendingProps;
    switch (Po(t), t.tag) {
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
        return nt(t), null;
      case 1:
        return ct(t.type) && ei(), nt(t), null;
      case 3:
        return r = t.stateNode, Pr(), ze(at), ze(et), Bo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ii(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dt !== null && (ku(Dt), Dt = null))), su(e, t), nt(t), null;
      case 5:
        Vo(t);
        var l = Xn(gl.current);
        if (n = t.type, e !== null && t.stateNode != null) Da(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return nt(t), null;
          }
          if (e = Xn(Yt.current), ii(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Kt] = t, r[pl] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Le("cancel", r), Le("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < cl.length; l++) Le(cl[l], r);
                break;
              case "source":
                Le("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Le(
                  "error",
                  r
                ), Le("load", r);
                break;
              case "details":
                Le("toggle", r);
                break;
              case "input":
                zl(r, i), Le("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, Le("invalid", r);
                break;
              case "textarea":
                xt(r, i), Le("invalid", r);
            }
            Jt(n, i), l = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var f = i[o];
              o === "children" ? typeof f == "string" ? r.textContent !== f && (i.suppressHydrationWarning !== !0 && Jl(r.textContent, f, e), l = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (i.suppressHydrationWarning !== !0 && Jl(
                r.textContent,
                f,
                e
              ), l = ["children", "" + f]) : y.hasOwnProperty(o) && f != null && o === "onScroll" && Le("scroll", r);
            }
            switch (n) {
              case "input":
                St(r), an(r, i, !0);
                break;
              case "textarea":
                St(r), ue(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = ql);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Kt] = t, e[pl] = r, Aa(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = sr(n, r), n) {
                case "dialog":
                  Le("cancel", e), Le("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Le("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < cl.length; l++) Le(cl[l], e);
                  l = r;
                  break;
                case "source":
                  Le("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Le(
                    "error",
                    e
                  ), Le("load", e), l = r;
                  break;
                case "details":
                  Le("toggle", e), l = r;
                  break;
                case "input":
                  zl(e, r), l = Ar(e, r), Le("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = z({}, r, { value: void 0 }), Le("invalid", e);
                  break;
                case "textarea":
                  xt(e, r), l = $r(e, r), Le("invalid", e);
                  break;
                default:
                  l = r;
              }
              Jt(n, l), f = l;
              for (i in f) if (f.hasOwnProperty(i)) {
                var d = f[i];
                i === "style" ? Wr(e, d) : i === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && ur(e, d)) : i === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && cn(e, d) : typeof d == "number" && cn(e, "" + d) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (y.hasOwnProperty(i) ? d != null && i === "onScroll" && Le("scroll", e) : d != null && he(e, i, d, o));
              }
              switch (n) {
                case "input":
                  St(e), an(e, r, !1);
                  break;
                case "textarea":
                  St(e), ue(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ne(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? Lt(e, !!r.multiple, i, !1) : r.defaultValue != null && Lt(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ql);
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
        return nt(t), null;
      case 6:
        if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (n = Xn(gl.current), Xn(Yt.current), ii(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Kt] = t, (i = r.nodeValue !== n) && (e = gt, e !== null)) switch (e.tag) {
              case 3:
                Jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Jl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Kt] = t, t.stateNode = r;
        }
        return nt(t), null;
      case 13:
        if (ze(Ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Oe && kt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ws(), _r(), t.flags |= 98560, i = !1;
          else if (i = ii(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(a(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(a(317));
              i[Kt] = t;
            } else _r(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            nt(t), i = !1;
          } else Dt !== null && (ku(Dt), Dt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ae.current & 1) !== 0 ? Ye === 0 && (Ye = 3) : xu())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
      case 4:
        return Pr(), su(e, t), e === null && fl(t.stateNode.containerInfo), nt(t), null;
      case 10:
        return Io(t.type._context), nt(t), null;
      case 17:
        return ct(t.type) && ei(), nt(t), null;
      case 19:
        if (ze(Ae), i = t.memoizedState, i === null) return nt(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) El(i, !1);
        else {
          if (Ye !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = fi(e), o !== null) {
              for (t.flags |= 128, El(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Pe(Ae, Ae.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Fe() > Fr && (t.flags |= 128, r = !0, El(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = fi(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), El(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Oe) return nt(t), null;
          } else 2 * Fe() - i.renderingStartTime > Fr && n !== 1073741824 && (t.flags |= 128, r = !0, El(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Fe(), t.sibling = null, n = Ae.current, Pe(Ae, r ? n & 1 | 2 : n & 1), t) : (nt(t), null);
      case 22:
      case 23:
        return Su(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (wt & 1073741824) !== 0 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function dd(e, t) {
    switch (Po(t), t.tag) {
      case 1:
        return ct(t.type) && ei(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Pr(), ze(at), ze(et), Bo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Vo(t), null;
      case 13:
        if (ze(Ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          _r();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ze(Ae), null;
      case 4:
        return Pr(), null;
      case 10:
        return Io(t.type._context), null;
      case 22:
      case 23:
        return Su(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var wi = !1, rt = !1, pd = typeof WeakSet == "function" ? WeakSet : Set, W = null;
  function Lr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ue(e, t, r);
    }
    else n.current = null;
  }
  function au(e, t, n) {
    try {
      n();
    } catch (r) {
      Ue(e, t, r);
    }
  }
  var $a = !1;
  function md(e, t) {
    if (So = $l, e = gs(), po(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, f = -1, d = -1, w = 0, C = 0, j = e, T = null;
          t: for (; ; ) {
            for (var U; j !== n || l !== 0 && j.nodeType !== 3 || (f = o + l), j !== i || r !== 0 && j.nodeType !== 3 || (d = o + r), j.nodeType === 3 && (o += j.nodeValue.length), (U = j.firstChild) !== null; )
              T = j, j = U;
            for (; ; ) {
              if (j === e) break t;
              if (T === n && ++w === l && (f = o), T === i && ++C === r && (d = o), (U = j.nextSibling) !== null) break;
              j = T, T = j.parentNode;
            }
            j = U;
          }
          n = f === -1 || d === -1 ? null : { start: f, end: d };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (xo = { focusedElem: e, selectionRange: n }, $l = !1, W = t; W !== null; ) if (t = W, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, W = e;
    else for (; W !== null; ) {
      t = W;
      try {
        var H = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (H !== null) {
              var Y = H.memoizedProps, We = H.memoizedState, v = t.stateNode, p = v.getSnapshotBeforeUpdate(t.elementType === t.type ? Y : Ut(t.type, Y), We);
              v.__reactInternalSnapshotBeforeUpdate = p;
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
            throw Error(a(163));
        }
      } catch (R) {
        Ue(t, t.return, R);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, W = e;
        break;
      }
      W = t.return;
    }
    return H = $a, $a = !1, H;
  }
  function Ml(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && au(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Si(e, t) {
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
  function cu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Va(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Va(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Kt], delete t[pl], delete t[_o], delete t[Zf], delete t[Jf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Wa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ba(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wa(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ql));
    else if (r !== 4 && (e = e.child, e !== null)) for (fu(e, t, n), e = e.sibling; e !== null; ) fu(e, t, n), e = e.sibling;
  }
  function du(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (du(e, t, n), e = e.sibling; e !== null; ) du(e, t, n), e = e.sibling;
  }
  var Je = null, $t = !1;
  function _n(e, t, n) {
    for (n = n.child; n !== null; ) Ha(e, t, n), n = n.sibling;
  }
  function Ha(e, t, n) {
    if (J && typeof J.onCommitFiberUnmount == "function") try {
      J.onCommitFiberUnmount(V, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        rt || Lr(n, t);
      case 6:
        var r = Je, l = $t;
        Je = null, _n(e, t, n), Je = r, $t = l, Je !== null && ($t ? (e = Je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Je.removeChild(n.stateNode));
        break;
      case 18:
        Je !== null && ($t ? (e = Je, n = n.stateNode, e.nodeType === 8 ? To(e.parentNode, n) : e.nodeType === 1 && To(e, n), nl(e)) : To(Je, n.stateNode));
        break;
      case 4:
        r = Je, l = $t, Je = n.stateNode.containerInfo, $t = !0, _n(e, t, n), Je = r, $t = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!rt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && au(n, t, o), l = l.next;
          } while (l !== r);
        }
        _n(e, t, n);
        break;
      case 1:
        if (!rt && (Lr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          Ue(n, t, f);
        }
        _n(e, t, n);
        break;
      case 21:
        _n(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (rt = (r = rt) || n.memoizedState !== null, _n(e, t, n), rt = r) : _n(e, t, n);
        break;
      default:
        _n(e, t, n);
    }
  }
  function Qa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new pd()), t.forEach(function(r) {
        var l = Ed.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function Vt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, o = t, f = o;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 5:
              Je = f.stateNode, $t = !1;
              break e;
            case 3:
              Je = f.stateNode.containerInfo, $t = !0;
              break e;
            case 4:
              Je = f.stateNode.containerInfo, $t = !0;
              break e;
          }
          f = f.return;
        }
        if (Je === null) throw Error(a(160));
        Ha(i, o, l), Je = null, $t = !1;
        var d = l.alternate;
        d !== null && (d.return = null), l.return = null;
      } catch (w) {
        Ue(l, t, w);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ka(t, e), t = t.sibling;
  }
  function Ka(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Vt(t, e), Gt(e), r & 4) {
          try {
            Ml(3, e, e.return), Si(3, e);
          } catch (Y) {
            Ue(e, e.return, Y);
          }
          try {
            Ml(5, e, e.return);
          } catch (Y) {
            Ue(e, e.return, Y);
          }
        }
        break;
      case 1:
        Vt(t, e), Gt(e), r & 512 && n !== null && Lr(n, n.return);
        break;
      case 5:
        if (Vt(t, e), Gt(e), r & 512 && n !== null && Lr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            cn(l, "");
          } catch (Y) {
            Ue(e, e.return, Y);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, f = e.type, d = e.updateQueue;
          if (e.updateQueue = null, d !== null) try {
            f === "input" && i.type === "radio" && i.name != null && Dr(l, i), sr(f, o);
            var w = sr(f, i);
            for (o = 0; o < d.length; o += 2) {
              var C = d[o], j = d[o + 1];
              C === "style" ? Wr(l, j) : C === "dangerouslySetInnerHTML" ? ur(l, j) : C === "children" ? cn(l, j) : he(l, C, j, w);
            }
            switch (f) {
              case "input":
                Ur(l, i);
                break;
              case "textarea":
                or(l, i);
                break;
              case "select":
                var T = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var U = i.value;
                U != null ? Lt(l, !!i.multiple, U, !1) : T !== !!i.multiple && (i.defaultValue != null ? Lt(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Lt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[pl] = i;
          } catch (Y) {
            Ue(e, e.return, Y);
          }
        }
        break;
      case 6:
        if (Vt(t, e), Gt(e), r & 4) {
          if (e.stateNode === null) throw Error(a(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (Y) {
            Ue(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (Vt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          nl(t.containerInfo);
        } catch (Y) {
          Ue(e, e.return, Y);
        }
        break;
      case 4:
        Vt(t, e), Gt(e);
        break;
      case 13:
        Vt(t, e), Gt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (hu = Fe())), r & 4 && Qa(e);
        break;
      case 22:
        if (C = n !== null && n.memoizedState !== null, e.mode & 1 ? (rt = (w = rt) || C, Vt(t, e), rt = w) : Vt(t, e), Gt(e), r & 8192) {
          if (w = e.memoizedState !== null, (e.stateNode.isHidden = w) && !C && (e.mode & 1) !== 0) for (W = e, C = e.child; C !== null; ) {
            for (j = W = C; W !== null; ) {
              switch (T = W, U = T.child, T.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ml(4, T, T.return);
                  break;
                case 1:
                  Lr(T, T.return);
                  var H = T.stateNode;
                  if (typeof H.componentWillUnmount == "function") {
                    r = T, n = T.return;
                    try {
                      t = r, H.props = t.memoizedProps, H.state = t.memoizedState, H.componentWillUnmount();
                    } catch (Y) {
                      Ue(r, n, Y);
                    }
                  }
                  break;
                case 5:
                  Lr(T, T.return);
                  break;
                case 22:
                  if (T.memoizedState !== null) {
                    Ga(j);
                    continue;
                  }
              }
              U !== null ? (U.return = T, W = U) : Ga(j);
            }
            C = C.sibling;
          }
          e: for (C = null, j = e; ; ) {
            if (j.tag === 5) {
              if (C === null) {
                C = j;
                try {
                  l = j.stateNode, w ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (f = j.stateNode, d = j.memoizedProps.style, o = d != null && d.hasOwnProperty("display") ? d.display : null, f.style.display = Vr("display", o));
                } catch (Y) {
                  Ue(e, e.return, Y);
                }
              }
            } else if (j.tag === 6) {
              if (C === null) try {
                j.stateNode.nodeValue = w ? "" : j.memoizedProps;
              } catch (Y) {
                Ue(e, e.return, Y);
              }
            } else if ((j.tag !== 22 && j.tag !== 23 || j.memoizedState === null || j === e) && j.child !== null) {
              j.child.return = j, j = j.child;
              continue;
            }
            if (j === e) break e;
            for (; j.sibling === null; ) {
              if (j.return === null || j.return === e) break e;
              C === j && (C = null), j = j.return;
            }
            C === j && (C = null), j.sibling.return = j.return, j = j.sibling;
          }
        }
        break;
      case 19:
        Vt(t, e), Gt(e), r & 4 && Qa(e);
        break;
      case 21:
        break;
      default:
        Vt(
          t,
          e
        ), Gt(e);
    }
  }
  function Gt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Wa(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (cn(l, ""), r.flags &= -33);
            var i = Ba(e);
            du(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, f = Ba(e);
            fu(e, f, o);
            break;
          default:
            throw Error(a(161));
        }
      } catch (d) {
        Ue(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function hd(e, t, n) {
    W = e, Ya(e);
  }
  function Ya(e, t, n) {
    for (var r = (e.mode & 1) !== 0; W !== null; ) {
      var l = W, i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || wi;
        if (!o) {
          var f = l.alternate, d = f !== null && f.memoizedState !== null || rt;
          f = wi;
          var w = rt;
          if (wi = o, (rt = d) && !w) for (W = l; W !== null; ) o = W, d = o.child, o.tag === 22 && o.memoizedState !== null ? Za(l) : d !== null ? (d.return = o, W = d) : Za(l);
          for (; i !== null; ) W = i, Ya(i), i = i.sibling;
          W = l, wi = f, rt = w;
        }
        Xa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, W = i) : Xa(e);
    }
  }
  function Xa(e) {
    for (; W !== null; ) {
      var t = W;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              rt || Si(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !rt) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Ut(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Gs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Gs(t, o, n);
              }
              break;
            case 5:
              var f = t.stateNode;
              if (n === null && t.flags & 4) {
                n = f;
                var d = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d.autoFocus && n.focus();
                    break;
                  case "img":
                    d.src && (n.src = d.src);
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
                  var C = w.memoizedState;
                  if (C !== null) {
                    var j = C.dehydrated;
                    j !== null && nl(j);
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
          rt || t.flags & 512 && cu(t);
        } catch (T) {
          Ue(t, t.return, T);
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
  function Ga(e) {
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
  function Za(e) {
    for (; W !== null; ) {
      var t = W;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Si(4, t);
            } catch (d) {
              Ue(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                Ue(t, l, d);
              }
            }
            var i = t.return;
            try {
              cu(t);
            } catch (d) {
              Ue(t, i, d);
            }
            break;
          case 5:
            var o = t.return;
            try {
              cu(t);
            } catch (d) {
              Ue(t, o, d);
            }
        }
      } catch (d) {
        Ue(t, t.return, d);
      }
      if (t === e) {
        W = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, W = f;
        break;
      }
      W = t.return;
    }
  }
  var yd = Math.ceil, xi = ye.ReactCurrentDispatcher, pu = ye.ReactCurrentOwner, Nt = ye.ReactCurrentBatchConfig, ve = 0, Ge = null, Qe = null, qe = 0, wt = 0, zr = Sn(0), Ye = 0, Tl = null, Zn = 0, Ei = 0, mu = 0, _l = null, dt = null, hu = 0, Fr = 1 / 0, sn = null, Mi = !1, yu = null, Cn = null, Ti = !1, Nn = null, _i = 0, Cl = 0, vu = null, Ci = -1, Ni = 0;
  function it() {
    return (ve & 6) !== 0 ? Fe() : Ci !== -1 ? Ci : Ci = Fe();
  }
  function jn(e) {
    return (e.mode & 1) === 0 ? 1 : (ve & 2) !== 0 && qe !== 0 ? qe & -qe : bf.transition !== null ? (Ni === 0 && (Ni = Al()), Ni) : (e = Me, e !== 0 || (e = window.event, e = e === void 0 ? 16 : qu(e.type)), e);
  }
  function Wt(e, t, n, r) {
    if (50 < Cl) throw Cl = 0, vu = null, Error(a(185));
    Jr(e, n, r), ((ve & 2) === 0 || e !== Ge) && (e === Ge && ((ve & 2) === 0 && (Ei |= n), Ye === 4 && Pn(e, qe)), pt(e, r), n === 1 && ve === 0 && (t.mode & 1) === 0 && (Fr = Fe() + 500, ni && En()));
  }
  function pt(e, t) {
    var n = e.callbackNode;
    Zr(e, t);
    var r = Qt(e, e === Ge ? qe : 0);
    if (r === 0) n !== null && Ol(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Ol(n), t === 1) e.tag === 0 ? qf(qa.bind(null, e)) : As(qa.bind(null, e)), Xf(function() {
        (ve & 6) === 0 && En();
      }), n = null;
      else {
        switch (Hu(r)) {
          case 1:
            n = pr;
            break;
          case 4:
            n = Il;
            break;
          case 16:
            n = c;
            break;
          case 536870912:
            n = N;
            break;
          default:
            n = c;
        }
        n = oc(n, Ja.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ja(e, t) {
    if (Ci = -1, Ni = 0, (ve & 6) !== 0) throw Error(a(327));
    var n = e.callbackNode;
    if (Or() && e.callbackNode !== n) return null;
    var r = Qt(e, e === Ge ? qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ji(e, r);
    else {
      t = r;
      var l = ve;
      ve |= 2;
      var i = ec();
      (Ge !== e || qe !== t) && (sn = null, Fr = Fe() + 500, qn(e, t));
      do
        try {
          kd();
          break;
        } catch (f) {
          ba(e, f);
        }
      while (!0);
      Oo(), xi.current = i, ve = l, Qe !== null ? t = 0 : (Ge = null, qe = 0, t = Ye);
    }
    if (t !== 0) {
      if (t === 2 && (l = yt(e), l !== 0 && (r = l, t = gu(e, l))), t === 1) throw n = Tl, qn(e, 0), Pn(e, r), pt(e, Fe()), n;
      if (t === 6) Pn(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !vd(l) && (t = ji(e, r), t === 2 && (i = yt(e), i !== 0 && (r = i, t = gu(e, i))), t === 1)) throw n = Tl, qn(e, 0), Pn(e, r), pt(e, Fe()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            bn(e, dt, sn);
            break;
          case 3:
            if (Pn(e, r), (r & 130023424) === r && (t = hu + 500 - Fe(), 10 < t)) {
              if (Qt(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                it(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Mo(bn.bind(null, e, dt, sn), t);
              break;
            }
            bn(e, dt, sn);
            break;
          case 4:
            if (Pn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - D(r);
              i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
            }
            if (r = l, r = Fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yd(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Mo(bn.bind(null, e, dt, sn), r);
              break;
            }
            bn(e, dt, sn);
            break;
          case 5:
            bn(e, dt, sn);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return pt(e, Fe()), e.callbackNode === n ? Ja.bind(null, e) : null;
  }
  function gu(e, t) {
    var n = _l;
    return e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256), e = ji(e, t), e !== 2 && (t = dt, dt = n, t !== null && ku(t)), e;
  }
  function ku(e) {
    dt === null ? dt = e : dt.push.apply(dt, e);
  }
  function vd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!At(i(), l)) return !1;
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
  function Pn(e, t) {
    for (t &= ~mu, t &= ~Ei, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - D(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function qa(e) {
    if ((ve & 6) !== 0) throw Error(a(327));
    Or();
    var t = Qt(e, 0);
    if ((t & 1) === 0) return pt(e, Fe()), null;
    var n = ji(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = yt(e);
      r !== 0 && (t = r, n = gu(e, r));
    }
    if (n === 1) throw n = Tl, qn(e, 0), Pn(e, t), pt(e, Fe()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, bn(e, dt, sn), pt(e, Fe()), null;
  }
  function wu(e, t) {
    var n = ve;
    ve |= 1;
    try {
      return e(t);
    } finally {
      ve = n, ve === 0 && (Fr = Fe() + 500, ni && En());
    }
  }
  function Jn(e) {
    Nn !== null && Nn.tag === 0 && (ve & 6) === 0 && Or();
    var t = ve;
    ve |= 1;
    var n = Nt.transition, r = Me;
    try {
      if (Nt.transition = null, Me = 1, e) return e();
    } finally {
      Me = r, Nt.transition = n, ve = t, (ve & 6) === 0 && En();
    }
  }
  function Su() {
    wt = zr.current, ze(zr);
  }
  function qn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Yf(n)), Qe !== null) for (n = Qe.return; n !== null; ) {
      var r = n;
      switch (Po(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ei();
          break;
        case 3:
          Pr(), ze(at), ze(et), Bo();
          break;
        case 5:
          Vo(r);
          break;
        case 4:
          Pr();
          break;
        case 13:
          ze(Ae);
          break;
        case 19:
          ze(Ae);
          break;
        case 10:
          Io(r.type._context);
          break;
        case 22:
        case 23:
          Su();
      }
      n = n.return;
    }
    if (Ge = e, Qe = e = Rn(e.current, null), qe = wt = t, Ye = 0, Tl = null, mu = Ei = Zn = 0, dt = _l = null, Yn !== null) {
      for (t = 0; t < Yn.length; t++) if (n = Yn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
      Yn = null;
    }
    return e;
  }
  function ba(e, t) {
    do {
      var n = Qe;
      try {
        if (Oo(), di.current = yi, pi) {
          for (var r = De.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          pi = !1;
        }
        if (Gn = 0, Xe = Ke = De = null, kl = !1, wl = 0, pu.current = null, n === null || n.return === null) {
          Ye = 1, Tl = t, Qe = null;
          break;
        }
        e: {
          var i = e, o = n.return, f = n, d = t;
          if (t = qe, f.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
            var w = d, C = f, j = C.tag;
            if ((C.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var T = C.alternate;
              T ? (C.updateQueue = T.updateQueue, C.memoizedState = T.memoizedState, C.lanes = T.lanes) : (C.updateQueue = null, C.memoizedState = null);
            }
            var U = Ma(o);
            if (U !== null) {
              U.flags &= -257, Ta(U, o, f, i, t), U.mode & 1 && Ea(i, w, t), t = U, d = w;
              var H = t.updateQueue;
              if (H === null) {
                var Y = /* @__PURE__ */ new Set();
                Y.add(d), t.updateQueue = Y;
              } else H.add(d);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ea(i, w, t), xu();
                break e;
              }
              d = Error(a(426));
            }
          } else if (Oe && f.mode & 1) {
            var We = Ma(o);
            if (We !== null) {
              (We.flags & 65536) === 0 && (We.flags |= 256), Ta(We, o, f, i, t), zo(Rr(d, f));
              break e;
            }
          }
          i = d = Rr(d, f), Ye !== 4 && (Ye = 2), _l === null ? _l = [i] : _l.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = Sa(i, d, t);
                Xs(i, v);
                break e;
              case 1:
                f = d;
                var p = i.type, g = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Cn === null || !Cn.has(g)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var R = xa(i, f, t);
                  Xs(i, R);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        nc(n);
      } catch (X) {
        t = X, Qe === n && n !== null && (Qe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ec() {
    var e = xi.current;
    return xi.current = yi, e === null ? yi : e;
  }
  function xu() {
    (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4), Ge === null || (Zn & 268435455) === 0 && (Ei & 268435455) === 0 || Pn(Ge, qe);
  }
  function ji(e, t) {
    var n = ve;
    ve |= 2;
    var r = ec();
    (Ge !== e || qe !== t) && (sn = null, qn(e, t));
    do
      try {
        gd();
        break;
      } catch (l) {
        ba(e, l);
      }
    while (!0);
    if (Oo(), ve = n, xi.current = r, Qe !== null) throw Error(a(261));
    return Ge = null, qe = 0, Ye;
  }
  function gd() {
    for (; Qe !== null; ) tc(Qe);
  }
  function kd() {
    for (; Qe !== null && !Gi(); ) tc(Qe);
  }
  function tc(e) {
    var t = ic(e.alternate, e, wt);
    e.memoizedProps = e.pendingProps, t === null ? nc(e) : Qe = t, pu.current = null;
  }
  function nc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = fd(n, t, wt), n !== null) {
          Qe = n;
          return;
        }
      } else {
        if (n = dd(n, t), n !== null) {
          n.flags &= 32767, Qe = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ye = 6, Qe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Qe = t;
        return;
      }
      Qe = t = e;
    } while (t !== null);
    Ye === 0 && (Ye = 5);
  }
  function bn(e, t, n) {
    var r = Me, l = Nt.transition;
    try {
      Nt.transition = null, Me = 1, wd(e, t, n, r);
    } finally {
      Nt.transition = l, Me = r;
    }
    return null;
  }
  function wd(e, t, n, r) {
    do
      Or();
    while (Nn !== null);
    if ((ve & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (bc(e, i), e === Ge && (Qe = Ge = null, qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ti || (Ti = !0, oc(c, function() {
      return Or(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = Nt.transition, Nt.transition = null;
      var o = Me;
      Me = 1;
      var f = ve;
      ve |= 4, pu.current = null, md(e, n), Ka(n, e), $f(xo), $l = !!So, xo = So = null, e.current = n, hd(n), Zi(), ve = f, Me = o, Nt.transition = i;
    } else e.current = n;
    if (Ti && (Ti = !1, Nn = e, _i = l), i = e.pendingLanes, i === 0 && (Cn = null), q(n.stateNode), pt(e, Fe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Mi) throw Mi = !1, e = yu, yu = null, e;
    return (_i & 1) !== 0 && e.tag !== 0 && Or(), i = e.pendingLanes, (i & 1) !== 0 ? e === vu ? Cl++ : (Cl = 0, vu = e) : Cl = 0, En(), null;
  }
  function Or() {
    if (Nn !== null) {
      var e = Hu(_i), t = Nt.transition, n = Me;
      try {
        if (Nt.transition = null, Me = 16 > e ? 16 : e, Nn === null) var r = !1;
        else {
          if (e = Nn, Nn = null, _i = 0, (ve & 6) !== 0) throw Error(a(331));
          var l = ve;
          for (ve |= 4, W = e.current; W !== null; ) {
            var i = W, o = i.child;
            if ((W.flags & 16) !== 0) {
              var f = i.deletions;
              if (f !== null) {
                for (var d = 0; d < f.length; d++) {
                  var w = f[d];
                  for (W = w; W !== null; ) {
                    var C = W;
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ml(8, C, i);
                    }
                    var j = C.child;
                    if (j !== null) j.return = C, W = j;
                    else for (; W !== null; ) {
                      C = W;
                      var T = C.sibling, U = C.return;
                      if (Va(C), C === w) {
                        W = null;
                        break;
                      }
                      if (T !== null) {
                        T.return = U, W = T;
                        break;
                      }
                      W = U;
                    }
                  }
                }
                var H = i.alternate;
                if (H !== null) {
                  var Y = H.child;
                  if (Y !== null) {
                    H.child = null;
                    do {
                      var We = Y.sibling;
                      Y.sibling = null, Y = We;
                    } while (Y !== null);
                  }
                }
                W = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, W = o;
            else e: for (; W !== null; ) {
              if (i = W, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Ml(9, i, i.return);
              }
              var v = i.sibling;
              if (v !== null) {
                v.return = i.return, W = v;
                break e;
              }
              W = i.return;
            }
          }
          var p = e.current;
          for (W = p; W !== null; ) {
            o = W;
            var g = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && g !== null) g.return = o, W = g;
            else e: for (o = p; W !== null; ) {
              if (f = W, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Si(9, f);
                }
              } catch (X) {
                Ue(f, f.return, X);
              }
              if (f === o) {
                W = null;
                break e;
              }
              var R = f.sibling;
              if (R !== null) {
                R.return = f.return, W = R;
                break e;
              }
              W = f.return;
            }
          }
          if (ve = l, En(), J && typeof J.onPostCommitFiberRoot == "function") try {
            J.onPostCommitFiberRoot(V, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Me = n, Nt.transition = t;
      }
    }
    return !1;
  }
  function rc(e, t, n) {
    t = Rr(n, t), t = Sa(e, t, 1), e = Tn(e, t, 1), t = it(), e !== null && (Jr(e, 1, t), pt(e, t));
  }
  function Ue(e, t, n) {
    if (e.tag === 3) rc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        rc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Cn === null || !Cn.has(r))) {
          e = Rr(n, e), e = xa(t, e, 1), t = Tn(t, e, 1), e = it(), t !== null && (Jr(t, 1, e), pt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Sd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = it(), e.pingedLanes |= e.suspendedLanes & n, Ge === e && (qe & n) === n && (Ye === 4 || Ye === 3 && (qe & 130023424) === qe && 500 > Fe() - hu ? qn(e, 0) : mu |= n), pt(e, t);
  }
  function lc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = pe, pe <<= 1, (pe & 130023424) === 0 && (pe = 4194304)));
    var n = it();
    e = ln(e, t), e !== null && (Jr(e, t, n), pt(e, n));
  }
  function xd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), lc(e, n);
  }
  function Ed(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), lc(e, n);
  }
  var ic;
  ic = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || at.current) ft = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ft = !1, cd(e, t, n);
      ft = (e.flags & 131072) !== 0;
    }
    else ft = !1, Oe && (t.flags & 1048576) !== 0 && Ds(t, li, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ki(e, t), e = t.pendingProps;
        var l = Er(t, et.current);
        jr(t, n), l = Ko(null, t, r, e, l, n);
        var i = Yo();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ct(r) ? (i = !0, ti(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Uo(t), l.updater = vi, t.stateNode = l, l._reactInternals = t, bo(t, r, e, n), t = ru(null, t, r, !0, i, n)) : (t.tag = 0, Oe && i && jo(t), lt(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ki(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Td(r), e = Ut(r, e), l) {
            case 0:
              t = nu(null, t, r, e, n);
              break e;
            case 1:
              t = Ra(null, t, r, e, n);
              break e;
            case 11:
              t = _a(null, t, r, e, n);
              break e;
            case 14:
              t = Ca(null, t, r, Ut(r.type, e), n);
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
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ut(r, l), nu(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ut(r, l), Ra(e, t, r, l, n);
      case 3:
        e: {
          if (La(t), e === null) throw Error(a(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, Ys(e, t), ci(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = Rr(Error(a(423)), t), t = za(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Rr(Error(a(424)), t), t = za(e, t, r, n, l);
            break e;
          } else for (kt = wn(t.stateNode.containerInfo.firstChild), gt = t, Oe = !0, Dt = null, n = Qs(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (_r(), r === l) {
              t = un(e, t, n);
              break e;
            }
            lt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Zs(t), e === null && Lo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Eo(r, l) ? o = null : i !== null && Eo(r, i) && (t.flags |= 32), Pa(e, t), lt(e, t, o, n), t.child;
      case 6:
        return e === null && Lo(t), null;
      case 13:
        return Fa(e, t, n);
      case 4:
        return $o(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Cr(t, null, r, n) : lt(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ut(r, l), _a(e, t, r, l, n);
      case 7:
        return lt(e, t, t.pendingProps, n), t.child;
      case 8:
        return lt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return lt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, Pe(ui, r._currentValue), r._currentValue = o, i !== null) if (At(i.value, o)) {
            if (i.children === l.children && !at.current) {
              t = un(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var f = i.dependencies;
            if (f !== null) {
              o = i.child;
              for (var d = f.firstContext; d !== null; ) {
                if (d.context === r) {
                  if (i.tag === 1) {
                    d = on(-1, n & -n), d.tag = 2;
                    var w = i.updateQueue;
                    if (w !== null) {
                      w = w.shared;
                      var C = w.pending;
                      C === null ? d.next = d : (d.next = C.next, C.next = d), w.pending = d;
                    }
                  }
                  i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), Ao(
                    i.return,
                    n,
                    t
                  ), f.lanes |= n;
                  break;
                }
                d = d.next;
              }
            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (o = i.return, o === null) throw Error(a(341));
              o.lanes |= n, f = o.alternate, f !== null && (f.lanes |= n), Ao(o, n, t), o = i.sibling;
            } else o = i.child;
            if (o !== null) o.return = i;
            else for (o = i; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (i = o.sibling, i !== null) {
                i.return = o.return, o = i;
                break;
              }
              o = o.return;
            }
            i = o;
          }
          lt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, jr(t, n), l = _t(l), r = r(l), t.flags |= 1, lt(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = Ut(r, t.pendingProps), l = Ut(r.type, l), Ca(e, t, r, l, n);
      case 15:
        return Na(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ut(r, l), ki(e, t), t.tag = 1, ct(r) ? (e = !0, ti(t)) : e = !1, jr(t, n), ka(t, r, l), bo(t, r, l, n), ru(null, t, r, !0, e, n);
      case 19:
        return Ia(e, t, n);
      case 22:
        return ja(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function oc(e, t) {
    return dr(e, t);
  }
  function Md(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jt(e, t, n, r) {
    return new Md(e, t, n, r);
  }
  function Eu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Td(e) {
    if (typeof e == "function") return Eu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ot) return 11;
      if (e === $e) return 14;
    }
    return 2;
  }
  function Rn(e, t) {
    var n = e.alternate;
    return n === null ? (n = jt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Pi(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") Eu(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case Ce:
        return er(n.children, l, i, t);
      case me:
        o = 8, l |= 8;
        break;
      case b:
        return e = jt(12, n, t, l | 2), e.elementType = b, e.lanes = i, e;
      case Ie:
        return e = jt(13, n, t, l), e.elementType = Ie, e.lanes = i, e;
      case Be:
        return e = jt(19, n, t, l), e.elementType = Be, e.lanes = i, e;
      case B:
        return Ri(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case _e:
            o = 10;
            break e;
          case we:
            o = 9;
            break e;
          case ot:
            o = 11;
            break e;
          case $e:
            o = 14;
            break e;
          case Ve:
            o = 16, r = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = jt(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function er(e, t, n, r) {
    return e = jt(7, e, r, t), e.lanes = n, e;
  }
  function Ri(e, t, n, r) {
    return e = jt(22, e, r, t), e.elementType = B, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Mu(e, t, n) {
    return e = jt(6, e, null, t), e.lanes = n, e;
  }
  function Tu(e, t, n) {
    return t = jt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function _d(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ji(0), this.expirationTimes = Ji(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ji(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function _u(e, t, n, r, l, i, o, f, d) {
    return e = new _d(e, t, n, f, d), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = jt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Uo(i), e;
  }
  function Cd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Re, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function uc(e) {
    if (!e) return xn;
    e = e._reactInternals;
    e: {
      if (It(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ct(t.type)) {
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
      if (ct(n)) return Os(e, n, t);
    }
    return t;
  }
  function sc(e, t, n, r, l, i, o, f, d) {
    return e = _u(n, r, !0, e, l, i, o, f, d), e.context = uc(null), n = e.current, r = it(), l = jn(n), i = on(r, l), i.callback = t ?? null, Tn(n, i, l), e.current.lanes = l, Jr(e, l, r), pt(e, r), e;
  }
  function Li(e, t, n, r) {
    var l = t.current, i = it(), o = jn(l);
    return n = uc(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Tn(l, t, o), e !== null && (Wt(e, l, o, i), ai(e, l, o)), o;
  }
  function zi(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function ac(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Cu(e, t) {
    ac(e, t), (e = e.alternate) && ac(e, t);
  }
  function Nd() {
    return null;
  }
  var cc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Nu(e) {
    this._internalRoot = e;
  }
  Fi.prototype.render = Nu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    Li(e, t, null, null);
  }, Fi.prototype.unmount = Nu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Jn(function() {
        Li(null, e, null, null);
      }), t[en] = null;
    }
  };
  function Fi(e) {
    this._internalRoot = e;
  }
  Fi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Yu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++) ;
      vn.splice(n, 0, e), n === 0 && Zu(e);
    }
  };
  function ju(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Oi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function fc() {
  }
  function jd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var w = zi(o);
          i.call(w);
        };
      }
      var o = sc(t, r, e, 0, null, !1, !1, "", fc);
      return e._reactRootContainer = o, e[en] = o.current, fl(e.nodeType === 8 ? e.parentNode : e), Jn(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var w = zi(d);
        f.call(w);
      };
    }
    var d = _u(e, 0, !1, null, null, !1, !1, "", fc);
    return e._reactRootContainer = d, e[en] = d.current, fl(e.nodeType === 8 ? e.parentNode : e), Jn(function() {
      Li(t, d, n, r);
    }), d;
  }
  function Ii(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var f = l;
        l = function() {
          var d = zi(o);
          f.call(d);
        };
      }
      Li(t, o, e, l);
    } else o = jd(n, t, e, l, r);
    return zi(o);
  }
  Qu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = st(t.pendingLanes);
          n !== 0 && (qi(t, n | 1), pt(t, Fe()), (ve & 6) === 0 && (Fr = Fe() + 500, En()));
        }
        break;
      case 13:
        Jn(function() {
          var r = ln(e, 1);
          if (r !== null) {
            var l = it();
            Wt(r, e, 1, l);
          }
        }), Cu(e, 1);
    }
  }, bi = function(e) {
    if (e.tag === 13) {
      var t = ln(e, 134217728);
      if (t !== null) {
        var n = it();
        Wt(t, e, 134217728, n);
      }
      Cu(e, 134217728);
    }
  }, Ku = function(e) {
    if (e.tag === 13) {
      var t = jn(e), n = ln(e, t);
      if (n !== null) {
        var r = it();
        Wt(n, e, t, r);
      }
      Cu(e, t);
    }
  }, Yu = function() {
    return Me;
  }, Xu = function(e, t) {
    var n = Me;
    try {
      return Me = e, t();
    } finally {
      Me = n;
    }
  }, zt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ur(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = bl(r);
              if (!l) throw Error(a(90));
              lr(r), Ur(r, l);
            }
          }
        }
        break;
      case "textarea":
        or(e, n);
        break;
      case "select":
        t = n.value, t != null && Lt(e, !!n.multiple, t, !1);
    }
  }, An = wu, Dn = Jn;
  var Pd = { usingClientEntryPoint: !1, Events: [ml, Sr, bl, cr, Fl, wu] }, Nl = { findFiberByHostInstance: Bn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Rd = { bundleType: Nl.bundleType, version: Nl.version, rendererPackageName: Nl.rendererPackageName, rendererConfig: Nl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Yr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Nl.findFiberByHostInstance || Nd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ai.isDisabled && Ai.supportsFiber) try {
      V = Ai.inject(Rd), J = Ai;
    } catch {
    }
  }
  return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pd, mt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ju(t)) throw Error(a(200));
    return Cd(e, t, null, n);
  }, mt.createRoot = function(e, t) {
    if (!ju(e)) throw Error(a(299));
    var n = !1, r = "", l = cc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = _u(e, 1, !1, null, null, n, !1, r, l), e[en] = t.current, fl(e.nodeType === 8 ? e.parentNode : e), new Nu(t);
  }, mt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = Yr(t), e = e === null ? null : e.stateNode, e;
  }, mt.flushSync = function(e) {
    return Jn(e);
  }, mt.hydrate = function(e, t, n) {
    if (!Oi(t)) throw Error(a(200));
    return Ii(null, e, t, !0, n);
  }, mt.hydrateRoot = function(e, t, n) {
    if (!ju(e)) throw Error(a(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", o = cc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = sc(t, null, e, 1, n ?? null, l, !1, i, o), e[en] = t.current, fl(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Fi(t);
  }, mt.render = function(e, t, n) {
    if (!Oi(t)) throw Error(a(200));
    return Ii(null, e, t, !1, n);
  }, mt.unmountComponentAtNode = function(e) {
    if (!Oi(e)) throw Error(a(40));
    return e._reactRootContainer ? (Jn(function() {
      Ii(null, null, e, !1, function() {
        e._reactRootContainer = null, e[en] = null;
      });
    }), !0) : !1;
  }, mt.unstable_batchedUpdates = wu, mt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Oi(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return Ii(e, t, n, !1, r);
  }, mt.version = "18.3.1-next-f1338f8080-20240426", mt;
}
var kc;
function Ud() {
  if (kc) return Lu.exports;
  kc = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (s) {
        console.error(s);
      }
  }
  return u(), Lu.exports = Dd(), Lu.exports;
}
var wc;
function $d() {
  if (wc) return Di;
  wc = 1;
  var u = Ud();
  return Di.createRoot = u.createRoot, Di.hydrateRoot = u.hydrateRoot, Di;
}
var Vd = $d(), $ = Bu();
const Wd = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Sc = 100;
function Bd(u) {
  if (u === null || u.trim() === "") return Sc;
  const s = Number(u);
  return Number.isFinite(s) ? Math.round(Math.min(100, Math.max(0, s))) : Sc;
}
function xc(u, s, a = !0) {
  return a ? Wd[u] * Bd(String(s)) / 100 : 0;
}
function Hd(u = () => new Audio()) {
  try {
    const s = u();
    return s.volume = 0.5, Math.abs(s.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Qd = 0.12, Kd = 2e3, Yd = 3;
function Xd(u, s = !1) {
  return s ? !0 : u.atLoopBoundary || u.drift <= Qd || u.seeking || u.readyState < Yd ? !1 : u.msSinceLastFix >= Kd;
}
const Gd = 1.5, Zd = 0.4, Jd = 0.5;
let Au = null, qd = null;
function bd(u) {
  return Au !== null ? Au : (qd ??= Hd()) ? 0 : Zd;
}
class ep {
  constructor(s = bd()) {
    this.latency = s;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(s, a, h = !1, y = performance.now()) {
    if (a.readyState < 1 || s.readyState < 1 || !h && (a.paused || s.paused)) return !1;
    const x = a.currentTime - s.currentTime, S = Math.abs(x), _ = s.loop && Number.isFinite(s.duration) && Math.abs(S - s.duration) < 0.35, L = this.lastFix.get(a);
    if (!Xd({
      drift: S,
      atLoopBoundary: _,
      seeking: a.seeking,
      readyState: a.readyState,
      msSinceLastFix: L === void 0 ? 1 / 0 : y - L
    }, h)) return !1;
    const F = !s.paused;
    !h && F && L !== void 0 && (this.latency = Math.min(Gd, Math.max(0, this.latency - Jd * x)), Au = this.latency);
    let Q = s.currentTime + (F ? this.latency : 0);
    Number.isFinite(a.duration) && (Q = Math.min(Q, Math.max(0, a.duration - 0.05)));
    try {
      a.currentTime = Q;
    } catch {
      return !1;
    }
    return F ? this.lastFix.set(a, y) : this.lastFix.delete(a), !0;
  }
}
function tp(u = globalThis.navigator) {
  const s = u?.audioSession;
  s && s.type !== "playback" && (s.type = "playback");
}
const np = () => {
  const u = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!u) throw new Error("Web Audio API puuttuu");
  return new u();
}, rp = 250, lp = 0.5, Ec = 2e3, ip = 50, op = 8;
class up {
  samples = [];
  sample(s, a) {
    if (!Number.isFinite(s) || !Number.isFinite(a)) return;
    const h = this.samples.at(-1);
    h && a - h.wallMs < ip && this.samples.pop(), this.samples.push({ contextTime: s, wallMs: a }), this.samples.length > op && this.samples.shift();
  }
  reset() {
    this.samples = [];
  }
  check(s, a) {
    if (!Number.isFinite(s) || !Number.isFinite(a)) return "unknown";
    for (let h = this.samples.length - 1; h >= 0; h--) {
      const y = this.samples[h], x = a - y.wallMs;
      if (x < rp) continue;
      return (s - y.contextTime) * 1e3 < x * lp ? "stalled" : "advancing";
    }
    return "unknown";
  }
}
function Mc(u, s, a) {
  let h;
  const y = new Promise((x, S) => {
    h = setTimeout(() => S(new Error(`${a}: aikakatkaisu ${s} ms`)), s);
  });
  return Promise.race([u, y]).finally(() => clearTimeout(h));
}
function sp(u) {
  const s = u?.name, a = u?.message;
  return typeof s == "string" && s !== "Error" ? typeof a == "string" && a ? `${s}: ${a}` : s : typeof a == "string" ? a : String(u);
}
class Tc {
  constructor(s = np, a = globalThis.navigator, h = () => performance.now()) {
    this.create = s, this.nav = a, this.now = h;
  }
  create;
  nav;
  now;
  context = null;
  gains = /* @__PURE__ */ new WeakMap();
  clock = new up();
  recovery = null;
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
        tp(this.nav);
      } catch (s) {
        this.lastError = "Ääni-istunnon asetus epäonnistui: " + String(s);
      }
      return (!this.context || this.context.state === "closed") && (this.context = this.create(), this.gains = /* @__PURE__ */ new WeakMap(), this.clock.reset()), this.context.state !== "running" && !this.recovery && this.context.resume().catch((s) => {
        this.lastError = "Web Audio ei käynnistynyt: " + String(s);
      }), !0;
    } catch (s) {
      return this.lastError = "Web Audio ei ole käytettävissä: " + String(s), !1;
    }
  }
  /** Kontekstin kello, kun konteksti on 'running'. Muissa tiloissa kellon pysähtyminen on odotettua. */
  runningTime() {
    const s = this.context;
    return !s || s.state !== "running" ? null : typeof s.currentTime == "number" ? s.currentTime : null;
  }
  /** Tallentaa kellonäytteen (tauko, näkyvyyden muutos, toiston alku). Muu kuin 'running' nollaa näytteet. */
  observe() {
    const s = this.runningTime();
    s === null ? this.clock.reset() : this.clock.sample(s, this.now());
  }
  /**
   * 'stalled', kun tila on 'running', mutta kello on edennyt alle MIN_CLOCK_RATE seinäkellosta
   * vähintään CLOCK_WINDOW_MS pituisella välillä. 'unknown', jos vertailukohtaa ei vielä ole.
   */
  clockState() {
    const s = this.runningTime();
    return s === null ? "unknown" : this.clock.check(s, this.now());
  }
  get recovering() {
    return this.recovery !== null;
  }
  /**
   * Käynnistää pysähtyneen kontekstin uudelleen: suspend() ja sen jälkeen resume(). Kutsutaan vain
   * käyttäjän Soita-painalluksesta. Samanaikaiset kutsut saavat saman lupauksen, joten palautuksia on
   * kerrallaan yksi. Palauttaa true, kun konteksti on taas 'running'. Virhe ei heitä vaan palauttaa false.
   */
  recover() {
    if (this.recovery) return this.recovery;
    const s = this.context;
    if (!s) return Promise.resolve(!1);
    const h = (async () => {
      try {
        if (typeof s.suspend != "function" || typeof s.resume != "function")
          throw new Error("suspend() tai resume() puuttuu");
        if (await Mc(s.suspend(), Ec, "suspend()"), await Mc(s.resume(), Ec, "resume()"), s.state !== "running") throw new Error(`tila ${s.state} palautuksen jälkeen`);
        if (s !== this.context) throw new Error("konteksti suljettiin palautuksen aikana");
        return this.clock.reset(), this.observe(), !0;
      } catch (y) {
        return this.lastError = "Web Audion palautus epäonnistui: " + sp(y), !1;
      }
    })().finally(() => {
      this.recovery === h && (this.recovery = null);
    });
    return this.recovery = h, h;
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(s) {
    if (this.gains.has(s)) return !0;
    if (!this.context) return !1;
    try {
      const a = this.context.createMediaElementSource(s), h = this.context.createGain();
      return a.connect(h), h.connect(this.context.destination), this.gains.set(s, h), !0;
    } catch (a) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(a), !1;
    }
  }
  routed(s) {
    return !!s && this.gains.has(s);
  }
  setLevel(s, a) {
    const h = this.gains.get(s);
    h && (h.gain.value = a);
  }
  /** Raidan nykyinen GainNode-taso tai null, jos raitaa ei ole kytketty. */
  level(s) {
    const a = s ? this.gains.get(s) : void 0;
    return a ? a.gain.value : null;
  }
  close() {
    const s = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), this.clock.reset(), s?.close().catch(() => {
    });
  }
}
function ap(u) {
  const s = new DataView(u), a = (x) => String.fromCharCode(
    s.getUint8(x),
    s.getUint8(x + 1),
    s.getUint8(x + 2),
    s.getUint8(x + 3)
  );
  if (s.byteLength < 12 || a(0) !== "RIFF" || a(8) !== "WAVE") throw new Error("Tiedosto ei ole WAV");
  let h = 12, y = null;
  for (; h + 8 <= s.byteLength; ) {
    const x = a(h), S = s.getUint32(h + 4, !0), _ = h + 8;
    if (x === "fmt ") {
      let L = s.getUint16(_, !0);
      L === 65534 && S >= 26 && (L = s.getUint16(_ + 24, !0)), y = {
        format: L,
        channels: s.getUint16(_ + 2, !0),
        sampleRate: s.getUint32(_ + 4, !0),
        blockAlign: s.getUint16(_ + 12, !0),
        bitsPerSample: s.getUint16(_ + 14, !0)
      };
    } else if (x === "data") {
      if (!y) throw new Error("WAV: data-lohko ennen fmt-lohkoa");
      if (!(y.format === 1 && [16, 24, 32].includes(y.bitsPerSample) || y.format === 3 && y.bitsPerSample === 32))
        throw new Error(`WAV: muotoa ${y.format}/${y.bitsPerSample} bittiä ei tueta`);
      return { ...y, dataOffset: _, dataBytes: S, frames: Math.floor(S / y.blockAlign) };
    }
    h = _ + S + S % 2;
  }
  throw new Error("WAV: data-lohkoa ei löytynyt otsakkeesta");
}
function cp(u, s) {
  const a = Math.floor(u.byteLength / s.blockAlign), h = new DataView(u.buffer, u.byteOffset, u.byteLength), y = s.bitsPerSample / 8, x = s.format === 3 ? (_) => h.getFloat32(_, !0) : y === 2 ? (_) => h.getInt16(_, !0) / 32768 : y === 3 ? (_) => (h.getUint8(_) | h.getUint8(_ + 1) << 8 | h.getInt8(_ + 2) << 16) / 8388608 : (_) => h.getInt32(_, !0) / 2147483648, S = new Float32Array(a);
  for (let _ = 0; _ < a; _++) {
    let L = 0;
    const F = _ * s.blockAlign;
    for (let Q = 0; Q < s.channels; Q++) L += x(F + Q * y);
    S[_] = L / s.channels;
  }
  return S;
}
function fp(u, s, a) {
  if (s === a) return u;
  const h = Math.floor(u.length * a / s), y = new Float32Array(h), x = s / a;
  for (let S = 0; S < h; S++) {
    const _ = S * x, L = Math.floor(_), F = _ - L, Q = u[L] ?? 0, O = u[L + 1] ?? Q;
    y[S] = Q + (O - Q) * F;
  }
  return y;
}
function _c(u, s) {
  if (s <= 1) return u;
  const a = Math.floor(u.length / s), h = new Float32Array(a);
  for (let y = 0; y < a; y++) {
    let x = 0;
    const S = y * s;
    for (let _ = 0; _ < s; _++) x += u[S + _];
    h[y] = x / s;
  }
  return h;
}
function dp(u) {
  let s = 0;
  for (const a of u) s += a * a;
  return u.length ? Math.sqrt(s / u.length) : 0;
}
function Cc(u, s, a, h) {
  const y = Math.max(0, a), x = Math.min(h, u.length - s.length);
  if (x < y) return new Float32Array(0);
  const S = new Float64Array(u.length + 1);
  for (let F = 0; F < u.length; F++) S[F + 1] = S[F] + u[F] * u[F];
  let _ = 0;
  for (const F of s) _ += F * F;
  const L = new Float32Array(x - y + 1);
  for (let F = y; F <= x; F++) {
    let Q = 0;
    for (let G = 0; G < s.length; G++) Q += s[G] * u[G + F];
    const O = Math.sqrt(_ * (S[F + s.length] - S[F]));
    L[F - y] = O > 0 ? Q / O : 0;
  }
  return L;
}
function Nc(u, s) {
  if (s <= 1) return u;
  const a = new Float32Array(u.length);
  let h = 0;
  for (let y = 0; y < u.length; y++)
    h += u[y], y >= s && (h -= u[y - s]), a[y] = h / Math.min(s, y + 1);
  return a;
}
function pp(u, s, a) {
  let h = s;
  for (; h > 0 && u[h - 1] <= u[h]; ) h--;
  let y = s;
  for (; y < u.length - 1 && u[y + 1] <= u[y]; ) y++;
  let x = 0;
  for (let S = 0; S < u.length; S++) {
    if (S >= h && S <= y || Math.abs(S - s) <= a) continue;
    (S === 0 || u[S] >= u[S - 1]) && (S === u.length - 1 || u[S] >= u[S + 1]) && u[S] > x && (x = u[S]);
  }
  return x;
}
function mp(u, s, a, h = 16) {
  if (s.length === 0 || u.length < s.length) throw new Error("Referenssi on lyhyempi kuin näyte");
  const y = _c(u, h), x = _c(s, h), S = Cc(y, x, 0, y.length - x.length);
  let _ = 0;
  for (let A = 1; A < S.length; A++) S[A] > S[_] && (_ = A);
  const L = pp(S, _, Math.max(1, Math.round(0.02 * a / h))), F = _ * h, Q = Math.max(0, F - 2 * h), O = Math.min(u.length - s.length, F + 2 * h), G = Math.max(1, Math.round(a / 12e3)), I = Cc(Nc(u, G), Nc(s, G), Q, O);
  let fe = 0;
  for (let A = 1; A < I.length; A++) I[A] > I[fe] && (fe = A);
  let re = 0;
  if (fe > 0 && fe < I.length - 1) {
    const [A, ge, Te] = [I[fe - 1], I[fe], I[fe + 1]], he = A - 2 * ge + Te;
    he < 0 && (re = Math.max(-0.5, Math.min(0.5, 0.5 * (A - Te) / he)));
  }
  return { lag: Q + fe + re, score: I[fe], runnerUp: L };
}
function hp(u, s = 0.6, a = 0.1) {
  return u.score >= s && u.score - u.runnerUp >= a;
}
const Du = 32768, Ui = 1.5, Qc = /* @__PURE__ */ new WeakMap();
function yp() {
  const u = globalThis.AudioContext?.prototype;
  if (!u || u.__kaksiraita) return;
  const s = u.createMediaElementSource;
  u.createMediaElementSource = function(a) {
    const h = s.call(this, a), y = this.createAnalyser();
    return y.fftSize = Du, h.connect(y), Qc.set(a, { analyser: y, context: this, source: h }), h;
  }, u.__kaksiraita = !0;
}
function tr(u) {
  return u ? Qc.get(u) ?? null : null;
}
function jc(u) {
  let s = null;
  async function a(y, x) {
    const S = await u();
    return new Uint8Array(await S.slice(y, x + 1).arrayBuffer());
  }
  const h = () => {
    if (!s) {
      const y = a(0, 4095).then((x) => ap(x.slice().buffer));
      s = y, y.catch(() => {
        s === y && (s = null);
      });
    }
    return s;
  };
  return {
    async durationSeconds() {
      const y = await h();
      return y.frames / y.sampleRate;
    },
    async window(y, x) {
      const S = await h(), _ = Math.max(0, Math.floor(y * S.sampleRate)), L = Math.min(S.frames, Math.ceil(x * S.sampleRate));
      if (L <= _) throw new Error("Referenssi-ikkuna on tiedoston ulkopuolella");
      const F = await a(S.dataOffset + _ * S.blockAlign, S.dataOffset + L * S.blockAlign - 1);
      return { samples: cp(F, S), sampleRate: S.sampleRate, startSeconds: _ / S.sampleRate };
    }
  };
}
function Pc(u, s) {
  return {
    async durationSeconds() {
      return u.length / s;
    },
    async window(a, h) {
      const y = Math.max(0, Math.floor(a * s)), x = Math.min(u.length, Math.ceil(h * s));
      return { samples: u.slice(y, x), sampleRate: s, startSeconds: y / s };
    }
  };
}
function Uu(u) {
  const s = u, a = (y) => typeof y == "number" && Number.isFinite(y) ? y : null;
  let h = null;
  try {
    const y = typeof s.getOutputTimestamp == "function" ? s.getOutputTimestamp() : null, x = a(y?.contextTime), S = a(y?.performanceTime);
    x !== null && S !== null && (h = { contextTime: x, performanceTime: S });
  } catch {
  }
  return { baseLatency: a(s.baseLatency), outputLatency: a(s.outputLatency), timestamp: h };
}
async function vp(u, s) {
  const a = s.map((A) => ({ input: A, tap: tr(A.element) }));
  if (a.some((A) => !A.tap)) throw new Error("Raitaa ei ole vielä kytketty Web Audioon");
  const h = a[0].tap.context;
  let y = 0, x = [], S = [], _ = 0, L = 0;
  for (; ; ) {
    y++;
    const A = h.currentTime;
    if (x = a.map(({ tap: ge }) => {
      const Te = new Float32Array(Du);
      return ge.analyser.getFloatTimeDomainData(Te), Te;
    }), S = a.map(({ input: ge }) => ge.element.currentTime), _ = h.currentTime, L = performance.now(), _ === A || y >= 8) break;
    await new Promise((ge) => setTimeout(ge, 0));
  }
  const F = Uu(h), Q = h.sampleRate, O = Du / Q, G = [];
  for (let A = 0; A < a.length; A++) {
    const { input: ge } = a[A], Te = x[A], he = dp(Te), ye = { name: ge.name, mediaTime: S[A], probeRms: he };
    try {
      const xe = S[A] + ge.referenceOffsetSeconds, Re = await ge.reference.durationSeconds();
      if (xe - O - Ui < 0 || xe + Ui > Re)
        throw new Error("Kohta on referenssin ulkopuolella");
      const Ce = await ge.reference.window(xe - O - Ui, xe + Ui), me = fp(Ce.samples, Ce.sampleRate, Q), b = mp(me, Te, Q), _e = Ce.startSeconds + (b.lag + Te.length) / Q, we = hp(b) && he > 1e-4;
      G.push({
        ...ye,
        renderedTime: _e,
        score: b.score,
        runnerUp: b.runnerUp,
        reliable: we,
        mediaMinusRenderedMs: (xe - _e) * 1e3
      });
    } catch (xe) {
      G.push({ ...ye, renderedTime: null, score: null, runnerUp: null, reliable: !1, mediaMinusRenderedMs: null, error: String(xe) });
    }
  }
  const [I, fe] = G, re = I.reliable && fe.reliable && I.renderedTime !== null && fe.renderedTime !== null;
  return {
    phase: u,
    ms: Math.round(performance.now()),
    captureMs: Math.round(L * 10) / 10,
    output: F,
    contextTime: _,
    sampleRate: Q,
    attempts: y,
    tracks: G,
    mediaDiffMs: (fe.mediaTime - I.mediaTime) * 1e3,
    renderedDiffMs: re ? (fe.renderedTime - I.renderedTime) * 1e3 : null,
    reliable: re
  };
}
class gp {
  events = [];
  samples = [];
  measurements = [];
  limit = 4e3;
  record(s, a = {}) {
    this.events.push({ ms: Math.round(performance.now()), event: s, ...a }), this.events.length > this.limit && this.events.shift();
  }
  sample(s) {
    this.samples.push({ ms: Math.round(performance.now()), event: "sample", ...s }), this.samples.length > this.limit && this.samples.shift();
  }
}
function kp(u) {
  const s = /* @__PURE__ */ new Map(), a = [];
  for (const h of u) {
    const y = String(h.track ?? "");
    if (h.event === "seek-write" && s.set(y, h), h.event === "seeked" && s.has(y)) {
      const x = s.get(y);
      a.push({ track: y, forced: !!x.forced, ms: h.ms - x.ms, from: Number(x.from), to: Number(x.to) }), s.delete(y);
    }
  }
  return a;
}
class Kc extends Error {
  constructor(s, a, h) {
    super(`${a} (${h} ${h === 1 ? "yritys" : "yritystä"})`), this.url = s, this.reason = a, this.attempts = h, this.name = "LoadError";
  }
  url;
  reason;
  attempts;
}
class nr extends Error {
  constructor(s, a) {
    super(s), this.retryable = a;
  }
  retryable;
}
const wp = (u) => u >= 500 || u === 408 || u === 429;
async function Sp(u, s, a) {
  const h = new AbortController(), y = a.idleTimeoutMs ?? 2e4;
  let x = 0, S = !1, _ = null;
  const L = () => {
    clearTimeout(x), x = setTimeout(() => {
      S = !0, h.abort(), _?.cancel().catch(() => {
      });
    }, y);
  };
  L();
  const F = y >= 1e3 ? `${Math.round(y / 1e3)} s` : `${y} ms`, Q = performance.now();
  try {
    let O;
    try {
      O = await (a.fetchImpl ?? fetch)(u, { signal: h.signal });
    } catch (he) {
      throw new nr(S ? `ei vastausta ${F}` : `verkkovirhe (${String(he)})`, !0);
    }
    if (!O.ok) throw new nr(`HTTP ${O.status}`, wp(O.status));
    const G = Number(O.headers.get("Content-Length")) || null, I = a.type ?? O.headers.get("Content-Type") ?? "application/octet-stream", fe = performance.now() - Q;
    if (!O.body) {
      const he = await O.arrayBuffer(), ye = performance.now() - Q, xe = new Blob([he], { type: I });
      return a.onProgress?.({ loaded: xe.size, total: G, attempt: s }), a.onDone?.({ attempt: s, headersMs: fe, bodyMs: ye, blobMs: performance.now() - Q, bytes: xe.size }), xe;
    }
    _ = O.body.getReader();
    const re = [];
    let A = 0;
    for (; ; ) {
      let he;
      try {
        he = await _.read();
      } catch (ye) {
        throw new nr(S ? `lataus pysähtyi ${F}` : `lataus katkesi (${String(ye)})`, !0);
      }
      if (S) throw new nr(`lataus pysähtyi ${F}`, !0);
      if (he.done) break;
      L(), re.push(he.value), A += he.value.byteLength, a.onProgress?.({ loaded: A, total: G, attempt: s });
    }
    if (G !== null && A !== G) throw new nr(`vajaa tiedosto (${A}/${G} tavua)`, !0);
    const ge = performance.now() - Q, Te = new Blob(re, { type: I });
    return a.onDone?.({ attempt: s, headersMs: fe, bodyMs: ge, blobMs: performance.now() - Q, bytes: Te.size }), Te;
  } finally {
    clearTimeout(x);
  }
}
async function xp(u, s = {}) {
  const a = Math.max(1, s.attempts ?? 3), h = s.retryDelaysMs ?? [1e3, 3e3], y = s.sleep ?? ((x) => new Promise((S) => setTimeout(S, x)));
  for (let x = 1; ; x++)
    try {
      return await Sp(u, x, s);
    } catch (S) {
      const _ = S instanceof nr ? S.message : String(S), L = S instanceof nr && S.retryable && x < a;
      if (s.onAttemptFailed?.({ attempt: x, reason: _, willRetry: L }), !L) throw new Kc(u, _, x);
      await y(h[Math.min(x - 1, h.length - 1)] ?? 0);
    }
}
class Ep {
  constructor(s = () => ({})) {
    this.options = s;
  }
  options;
  cache = /* @__PURE__ */ new Map();
  load(s) {
    let a = this.cache.get(s);
    return a || (a = xp(s, this.options(s)), this.cache.set(s, a), a.catch(() => {
      this.cache.get(s) === a && this.cache.delete(s);
    })), a;
  }
}
function $u(u, s) {
  let a = u * 2654435761 + s * 2246822507 | 0;
  return a = Math.imul(a ^ a >>> 16, 2146121005), a = Math.imul(a ^ a >>> 15, 2221713035), a ^= a >>> 16, (a >>> 0) / 4294967296 * 2 - 1;
}
function Yc(u, s) {
  const a = [];
  let h = Math.round(0.25 * s);
  for (let y = 0; h < u; y++)
    a.push(h), h += Math.round((0.35 + 0.4 * ($u(y, 101) * 0.5 + 0.5)) * s);
  return a;
}
function Rc(u, s, a, h, y, x) {
  const S = new Float32Array(u), _ = Math.round(0.1 * s), L = Math.round(0.03 * s), F = Yc(u, s);
  let Q = 0, O = 0;
  for (let G = 0; G < u; G++) {
    const I = G - a;
    if (I < 0) {
      S[G] = 0;
      continue;
    }
    const fe = 0.03 + 0.12 * ($u(Math.floor(I / _), h + 7) * 0.5 + 0.5);
    O += 0.5 * ($u(I, h) - O);
    let re = fe * O;
    for (; Q < F.length && F[Q] + L <= I; ) Q++;
    const A = Q < F.length ? I - F[Q] : -1;
    if (A >= 0 && A < L) {
      const ge = 0.5 - 0.5 * Math.cos(2 * Math.PI * A / L);
      re += x * ge * Math.sin(2 * Math.PI * y * A / s);
    }
    S[G] = re;
  }
  return S;
}
function Ou(u = 60, s = 48e3, a = 0) {
  const h = Math.round(u * s), y = Math.round(a * s / 1e3);
  return {
    sampleRate: s,
    shiftSamples: y,
    tausta: Rc(h, s, 0, 11, 300, 0.22),
    kitara: Rc(h, s, y, 23, 1500, 0.16)
  };
}
function Mp(u, s) {
  const a = new ArrayBuffer(44 + u.length * 2), h = new DataView(a), y = (x, S) => {
    for (let _ = 0; _ < S.length; _++) h.setUint8(x + _, S.charCodeAt(_));
  };
  y(0, "RIFF"), h.setUint32(4, 36 + u.length * 2, !0), y(8, "WAVE"), y(12, "fmt "), h.setUint32(16, 16, !0), h.setUint16(20, 1, !0), h.setUint16(22, 1, !0), h.setUint32(24, s, !0), h.setUint32(28, s * 2, !0), h.setUint16(32, 2, !0), h.setUint16(34, 16, !0), y(36, "data"), h.setUint32(40, u.length * 2, !0);
  for (let x = 0; x < u.length; x++) {
    const S = Math.max(-1, Math.min(1, u[x]));
    h.setInt16(44 + x * 2, Math.round(S * 32767), !0);
  }
  return a;
}
const Vu = ["käynnistys", "jatko", "kelaus"], Ll = 5, rr = { min: -600, max: 600, step: 10 }, Tp = 80, Xc = 60, _p = 0.25, Lc = 3, Gc = "musiikin-kartta:kaksiraitatesti:nayttoaani:v1", Wu = ["iPhonen kaiutin", "Bluetooth-kuulokkeet", "johdolliset kuulokkeet", "muu"], Cp = ["varma", "melko varma", "epävarma"];
function zc(u, s) {
  let a = 0, h = u.length;
  for (; a < h; ) {
    const y = a + h >> 1;
    u[y] <= s ? a = y + 1 : h = y;
  }
  return a;
}
function Np(u, s, a, h) {
  if (!(h > a) || h - a > _p) return 0;
  const y = s / 1e3;
  return zc(u, h - y) - zc(u, a - y);
}
function Ir(u) {
  const s = Math.round(u / rr.step) * rr.step;
  return Math.max(rr.min, Math.min(rr.max, s)) || 0;
}
function Fc(u = Math.random) {
  return Ir(-300 + u() * 600);
}
function Iu(u) {
  return [90, 110, 130, 150, 170][(Math.max(1, u) - 1) % 5];
}
function jp(u) {
  if (!u) return [];
  try {
    const s = JSON.parse(u);
    return Array.isArray(s) ? s.filter((a) => !!a && typeof a == "object" && Vu.includes(a.situation) && typeof a.offsetMs == "number") : [];
  } catch {
    return [];
  }
}
function Zc(u = Jc()) {
  try {
    return jp(u?.getItem(Gc) ?? null);
  } catch {
    return [];
  }
}
function Oc(u, s = Jc()) {
  try {
    return s?.setItem(Gc, JSON.stringify(u)), !!s;
  } catch {
    return !1;
  }
}
function Jc() {
  try {
    return globalThis.sessionStorage ?? null;
  } catch {
    return null;
  }
}
function Pp(u, s) {
  const a = { käynnistys: 0, jatko: 0, kelaus: 0 };
  for (const x of u) !x.sameOperation && x.output === s && a[x.situation]++;
  const h = Math.min(...Vu.map((x) => a[x]));
  return h >= Ll ? { done: !0, situation: null, cycle: Ll, counts: a } : { done: !1, situation: Vu.find((x) => a[x] === h), cycle: h + 1, counts: a };
}
function $i(u) {
  if (!u.length) return null;
  const s = [...u].sort((h, y) => h - y), a = Math.floor(s.length / 2);
  return s.length % 2 ? s[a] : (s[a - 1] + s[a]) / 2;
}
const qc = "musiikin-kartta:kaksiraitatesti:nayttoaani:ulostulo", Ic = (u) => `${Math.floor(u / 60)}:${String(Math.floor(u % 60)).padStart(2, "0")}`, Rp = (u) => u === "käynnistys" || u === "jatko" || u === "kelaus" ? u : null;
function Lp() {
  try {
    return sessionStorage.getItem(qc) ?? Wu[0];
  } catch {
    return Wu[0];
  }
}
function zp(u) {
  const { backing: s, beeps: a, segment: h, playing: y } = u, [x, S] = $.useState(() => Fc()), [_, L] = $.useState(x), [F, Q] = $.useState(Lp), [O, G] = $.useState("melko varma"), [I, fe] = $.useState(""), [re, A] = $.useState(() => Zc()), [ge, Te] = $.useState(0), [he, ye] = $.useState(""), xe = $.useRef(null), Re = $.useRef(x);
  Re.current = x;
  const Ce = $.useRef({ flashes: 0, intervals: [], stale: 0, frames: 0 });
  $.useEffect(() => {
    try {
      sessionStorage.setItem(qc, F);
    } catch {
    }
  }, [F]), $.useEffect(() => {
    Ce.current = { flashes: 0, intervals: [], stale: 0, frames: 0 }, Te(0);
    const B = s.current, P = xe.current;
    if (!y || !h || !B || !P) {
      P && (P.dataset.on = "ei");
      return;
    }
    let K = B.currentTime, z = null, m = 0, M = requestAnimationFrame(function Z(le) {
      const ce = B.currentTime, ie = Ce.current;
      z !== null && (ie.frames++, ie.intervals.length < 2e3 && ie.intervals.push(le - z), ce === K && ie.stale++), z = le, Np(a, Re.current, K, ce) > 0 ? (P.dataset.on = "kyllä", m = le + Xc, ie.flashes++, P.dataset.flashes = String(ie.flashes), ie.flashes <= Lc && Te(ie.flashes)) : le >= m && P.dataset.on === "kyllä" && (P.dataset.on = "ei"), K = ce, M = requestAnimationFrame(Z);
    });
    return () => {
      cancelAnimationFrame(M), P.dataset.on = "ei";
    };
  }, [y, h, s, a]);
  const me = Pp(re, F), b = h ? Rp(h.phase) : null, _e = y && h !== null && b !== null && ge >= Lc, we = b !== null && me.situation !== null && b !== me.situation;
  function ot() {
    if (!_e || !h || !b) return;
    const B = s.current, P = performance.now(), K = u.measurements.filter((ne) => ne.request === h.request && ne.captureMs >= h.startedMs && ne.captureMs <= P), z = (ne) => {
      const Se = K.flatMap((He) => He.tracks.filter((St) => St.name === ne && St.reliable && St.mediaMinusRenderedMs !== null).map((St) => St.mediaMinusRenderedMs));
      return { median: $i(Se), count: Se.length };
    }, m = K.filter((ne) => ne.reliable && ne.renderedDiffMs !== null).map((ne) => ne.renderedDiffMs), M = K.map(u.outputEstimate).filter((ne) => ne !== null), Z = Ce.current, le = {
      id: `${u.pageLoadId}-${re.length + 1}`,
      situation: b,
      offsetMs: x,
      sliderStartMs: _,
      adjustMs: Math.round(P - h.startedMs),
      savedAt: (/* @__PURE__ */ new Date()).toISOString(),
      pageLoadId: u.pageLoadId,
      request: h.request,
      sameOperation: re.some((ne) => ne.pageLoadId === u.pageLoadId && ne.request === h.request),
      output: F,
      confidence: O,
      note: I.trim(),
      mediaTime: B?.currentTime ?? NaN,
      operationTarget: h.target,
      flashes: Z.flashes,
      frames: { count: Z.frames, medianIntervalMs: $i(Z.intervals), staleShare: Z.frames ? Z.stale / Z.frames : null },
      mediaMinusRendered: { tausta: z("tausta"), kitara: z("kitara") },
      renderedDiffMedianMs: $i(m),
      outputEstimateMs: $i(M) ?? (() => {
        const ne = u.outputNow();
        return ne?.outputLatency ? ne.outputLatency * 1e3 : null;
      })(),
      userAgent: navigator.userAgent
    }, ce = [...re, le], ie = Oc(ce);
    A(ce), u.record("nayttoaani-tallennus", { ...le, stored: ie }), ye(`Tallennettu: ${b}, d = ${x} ms${le.sameOperation ? " (sama jakso kuin edellinen, ei lasketa uudeksi operaatioksi)" : ""}${ie ? "" : ". Huom.: selain ei salli tallennusta, joten kopioi raportti ennen sivun uudelleenlatausta."}`);
    const ae = Fc();
    S(ae), L(ae), fe("");
  }
  function Ie() {
    window.confirm("Poistetaanko kaikki tämän välilehden säätökokeet?") && (Oc([]), A([]), ye(""), u.record("nayttoaani-nollaus", {}));
  }
  const Be = me.done ? `Valmis: ${Ll} operaatiota kussakin tilanteessa. Paina Tauko ja kopioi raportti.` : me.situation === "käynnistys" ? b === "käynnistys" && y && !Ve(h) ? "Säädä ja tallenna." : $e() ? "Lataa sivu uudelleen, paina ▶ Soita, säädä ja tallenna." : "Paina ▶ Soita, säädä ja tallenna." : me.situation === "jatko" ? b === "jatko" && y && !Ve(h) ? "Säädä ja tallenna." : "Paina ■ Tauko, odota noin 2 s, paina ▶ Soita, säädä ja tallenna." : b === "kelaus" && y && !Ve(h) ? "Säädä ja tallenna." : `Paina Siirry kohtaan ${Ic(Iu(me.cycle))}, säädä ja tallenna.`;
  function $e() {
    return h !== null || re.some((B) => B.pageLoadId === u.pageLoadId);
  }
  function Ve(B) {
    return B !== null && re.some((P) => P.pageLoadId === u.pageLoadId && P.request === B.request);
  }
  return /* @__PURE__ */ E.jsxs("section", { className: "av", "aria-label": "Näyttö–ääni-säätökoe", "data-situation": b ?? "", children: [
    /* @__PURE__ */ E.jsx("h2", { children: "H4: näyttö–ääni-säätökoe" }),
    /* @__PURE__ */ E.jsxs("p", { className: "av-step", "data-next": me.situation ?? "valmis", children: [
      /* @__PURE__ */ E.jsx("strong", { children: me.done ? "Valmis" : `${me.situation} ${me.cycle}/${Ll}` }),
      " · ",
      Be
    ] }),
    /* @__PURE__ */ E.jsx("div", { className: "av-flash", ref: xe, "data-on": "ei", "data-flashes": "0", "aria-hidden": "true" }),
    /* @__PURE__ */ E.jsxs("label", { className: "av-slider", children: [
      /* @__PURE__ */ E.jsxs("span", { children: [
        "Välähdyksen siirto ",
        /* @__PURE__ */ E.jsxs("output", { "data-offset": x, children: [
          x > 0 ? "+" : "",
          x,
          " ms"
        ] })
      ] }),
      /* @__PURE__ */ E.jsx(
        "input",
        {
          type: "range",
          min: rr.min,
          max: rr.max,
          step: rr.step,
          value: x,
          "aria-label": "Välähdyksen siirto millisekunteina",
          onChange: (B) => S(Ir(Number(B.target.value)))
        }
      )
    ] }),
    /* @__PURE__ */ E.jsxs("p", { className: "av-fine", children: [
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => S((B) => Ir(B - 50)), children: "−50" }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => S((B) => Ir(B - 10)), children: "−10" }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => S((B) => Ir(B + 10)), children: "+10" }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => S((B) => Ir(B + 50)), children: "+50" })
    ] }),
    /* @__PURE__ */ E.jsxs("p", { className: "av-save", children: [
      /* @__PURE__ */ E.jsxs("label", { children: [
        "Varmuus",
        " ",
        /* @__PURE__ */ E.jsx("select", { value: O, onChange: (B) => G(B.target.value), children: Cp.map((B) => /* @__PURE__ */ E.jsx("option", { children: B }, B)) })
      ] }),
      " ",
      /* @__PURE__ */ E.jsxs("label", { children: [
        "Huomio ",
        /* @__PURE__ */ E.jsx("input", { type: "text", value: I, maxLength: 200, onChange: (B) => fe(B.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ E.jsx("button", { type: "button", className: "play av-store", onClick: ot, disabled: !_e, children: "Samaan aikaan – tallenna" }),
    we && /* @__PURE__ */ E.jsxs("p", { className: "hint", role: "status", children: [
      "Nykyinen jakso on ",
      b,
      ", protokollan seuraava on ",
      me.situation,
      ". Tallennus kirjataan todellisena tilanteena (",
      b,
      ")."
    ] }),
    he && /* @__PURE__ */ E.jsx("p", { role: "status", className: "av-saved", children: he }),
    /* @__PURE__ */ E.jsx("p", { className: "hint", children: "Siirrä välähdystä, kunnes se ja naksahdus tuntuvat tapahtuvan samaan aikaan. Pienempi arvo = välähdys aiemmin." }),
    /* @__PURE__ */ E.jsxs("p", { className: "av-ops", children: [
      /* @__PURE__ */ E.jsx("button", { type: "button", className: "play", onClick: u.onToggle, disabled: !(u.active ?? y) && !u.filesReady, children: u.active ?? y ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ E.jsxs("button", { type: "button", onClick: () => u.onSeek(Iu(me.cycle)), disabled: !u.filesReady, children: [
        "Siirry kohtaan ",
        Ic(Iu(me.cycle))
      ] }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => window.location.reload(), children: "Lataa sivu uudelleen" })
    ] }),
    /* @__PURE__ */ E.jsxs("p", { className: "av-conditions", children: [
      /* @__PURE__ */ E.jsxs("label", { children: [
        "Ulostulo",
        " ",
        /* @__PURE__ */ E.jsx("select", { value: F, onChange: (B) => Q(B.target.value), children: Wu.map((B) => /* @__PURE__ */ E.jsx("option", { children: B }, B)) })
      ] }),
      " ",
      "· Tallennettu: käynnistys ",
      me.counts.käynnistys,
      ", jatko ",
      me.counts.jatko,
      ", kelaus ",
      me.counts.kelaus,
      " / ",
      Ll,
      " ",
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: Ie, disabled: !re.length, children: "Aloita alusta" })
    ] }),
    re.length > 0 && /* @__PURE__ */ E.jsx("ol", { className: "av-trials", "aria-label": "Tallennetut säätökokeet", children: re.slice(-6).map((B) => /* @__PURE__ */ E.jsxs("li", { children: [
      B.situation,
      ": d = ",
      B.offsetMs,
      " ms (",
      B.confidence,
      B.sameOperation ? ", sama jakso" : "",
      ")"
    ] }, B.id)) })
  ] });
}
const Vi = (u) => typeof u == "number" && Number.isFinite(u) ? u : null;
function Fp(u) {
  const s = u.output;
  if (!s) return null;
  const a = s.timestamp, h = Vi(u.contextTime), y = Vi(u.captureMs);
  if (a && h !== null && y !== null && a.performanceTime > 0)
    return (h - a.contextTime) * 1e3 - (y - a.performanceTime);
  const x = Vi(s.outputLatency);
  return x !== null && x > 0 ? x * 1e3 + (Vi(s.baseLatency) ?? 0) * 1e3 : null;
}
const Ac = [0, 30, 80, 150, 250, 400];
function Op(u = 24) {
  return Array.from({ length: u }, (s, a) => {
    const h = Math.floor(a / 2) % 2 ? 3 : 2, y = 0.1 + a % 6 * 0.1;
    return {
      sarja: a + 1,
      tila: a % 2 ? "aloituksesta" : "soitosta",
      valit: Array.from({ length: h }, (x, S) => Ac[(a + S * 2 + Math.floor(a / 6)) % Ac.length]),
      osuudet: Array.from({ length: h }, (x, S) => Math.round((y + S * 0.05) * 1e3) / 1e3)
    };
  });
}
function Dc(u, s, a, h) {
  const y = u.filter((I) => I.ms >= Math.floor(s)), x = y.filter((I) => I.event === "tuore-aloitus"), S = x.at(-1), _ = S ? y.find((I) => I.event === "toisto-alkoi" && I.request === S.request) : void 0, L = y.filter((I) => I.event === "kelaus-aikakatkaisu" || I.event === "kelattu" && (I.tausta === "aikakatkaisu" || I.kitara === "aikakatkaisu")).length, F = _ ? Number(_.tausta) : null, Q = _ ? Number(_.kitara) : null, O = (I) => I !== null && Math.abs(I - h) <= 0.3;
  return {
    tulos: _ ? O(F) && O(Q) ? L ? "aikakatkaisu" : "ok" : "vaara-kohta" : L ? "aikakatkaisu" : "ei-toistoa",
    toistoAlkoi: !!_,
    tausta: F,
    kitara: Q,
    kestoMs: _ ? _.ms - a : null,
    aloituksia: x.length,
    ohitettuja: y.filter((I) => I.event === "aloitus-ohitettu").length,
    aikakatkaisuja: L,
    kelausTauolla: y.filter((I) => I.event === "kelaus-tauolla").length
  };
}
const Pt = ["tausta", "kitara"], Wi = { tausta: "tausta", kitara: "kitara" }, Bi = { state: "odottaa", loaded: 0, total: null, attempt: 1, reason: "", url: null }, Ip = { 1: "keskeytetty", 2: "verkkovirhe", 3: "purkuvirhe", 4: "lähdettä ei voi toistaa" }, Rt = "assets/audio/kaksiraitatesti/", zn = {
  mp3: { tausta: Rt + "yksi-sointu-akustinen-tausta.mp3", kitara: Rt + "yksi-sointu-akustinen-kitara.mp3" },
  wav: { tausta: Rt + "yksi-sointu-akustinen-tausta-0-120s.wav", kitara: Rt + "yksi-sointu-akustinen-kitara-0-120s.wav" }
}, Ap = {
  aac: {
    120: { tausta: Rt + "yksi-sointu-akustinen-tausta-0-120s.m4a", kitara: Rt + "yksi-sointu-akustinen-kitara-0-120s.m4a" },
    koko: { tausta: Rt + "yksi-sointu-akustinen-tausta-koko.m4a", kitara: Rt + "yksi-sointu-akustinen-kitara-koko.m4a" }
  },
  mp3cbr: {
    120: { tausta: Rt + "yksi-sointu-akustinen-tausta-0-120s-cbr192.mp3", kitara: Rt + "yksi-sointu-akustinen-kitara-0-120s-cbr192.mp3" },
    koko: { tausta: Rt + "yksi-sointu-akustinen-tausta-koko-cbr192.mp3", kitara: Rt + "yksi-sointu-akustinen-kitara-koko-cbr192.mp3" }
  }
}, Dp = (u) => u.endsWith(".m4a") ? "audio/mp4" : u.endsWith(".mp3") ? "audio/mpeg" : "audio/wav", Uc = 1e-3, $c = 3e3, Vc = 240, Wc = 24e3;
function Up() {
  const u = new URLSearchParams(location.search), s = u.get("koe") === "nayttoaani", a = u.get("koe") === "kelaussarja", h = s ? "synteettinen" : u.get("lahde"), y = h === "wav" || h === "aac" || h === "mp3cbr" || h === "synteettinen" ? h : "mp3", x = (y === "aac" || y === "mp3cbr") && u.get("pituus") === "koko" ? "koko" : "120", S = Number(u.get("siirto") ?? "0"), _ = u.get("tahdistin") === "pois" ? "pois" : u.get("tahdistin") === "ei-korjauksia" ? "ei-korjauksia" : "kaytossa", L = Number(u.get("mittausvali") ?? "5000"), F = s || a || u.get("moottori") === "uusi" ? "uusi" : "nykyinen", Q = y === "mp3" || y === "wav" && u.get("lataus") === "verkko" ? "verkko" : "muisti", O = Number(u.get("latausaikaraja") ?? "20000");
  return {
    avTest: s,
    burstTest: a,
    source: y,
    length: x,
    engine: F,
    loading: Q,
    loadIdleMs: Number.isFinite(O) && O >= 500 ? O : 2e4,
    // Laaja vakiokoe lisää lopuksi kaksi peräkkäistä kelausta (MK-20261118-03, vaihe C).
    wideScenario: u.get("koe") === "laaja",
    // &mittaus=pois: ei renderöityjä mittauksia eikä WAV-referenssejä (muistinkulutus ilman mittausvälineitä).
    measure: u.get("mittaus") !== "pois",
    syncMode: F === "uusi" ? "uusi-moottori" : _,
    sync: F === "nykyinen" && _ !== "pois",
    corrections: F === "nykyinen" && _ === "kaytossa",
    offsetMs: !s && y === "synteettinen" && Number.isFinite(S) ? S : 0,
    measureIntervalMs: Number.isFinite(L) && L >= 1e3 ? L : s ? 3e3 : 5e3
  };
}
function Hi(u) {
  if (!Number.isFinite(u) || u < 0) return "0:00";
  const s = Math.floor(u);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
const Pl = (u) => u === null ? "?" : (u / 1e6).toFixed(1).replace(".", ",");
function Rl(u) {
  const s = u.error;
  return s ? (Ip[s.code] ?? `virhe ${s.code}`) + (s.message ? `: ${s.message}` : "") : "";
}
const Zt = (u, s = 1) => u == null || !Number.isFinite(u) ? "–" : u.toFixed(s);
function Bc(u) {
  if (!u.length) return null;
  const s = [...u].sort((h, y) => h - y), a = Math.floor(s.length / 2);
  return s.length % 2 ? s[a] : (s[a - 1] + s[a]) / 2;
}
function $p() {
  const u = $.useMemo(Up, []), s = $.useMemo(() => u.source !== "synteettinen" ? null : u.avTest ? Ou(Vc, Wc, 0) : Ou(60, 48e3, u.offsetMs), [u]), a = $.useMemo(() => u.avTest && s ? Yc(s.tausta.length, s.sampleRate).map((c) => c / s.sampleRate) : [], [u, s]), h = $.useMemo(() => Date.now().toString(36) + Math.random().toString(36).slice(2, 6), []), [y, x] = $.useState(null), S = $.useMemo(() => {
    if (!s) return null;
    const c = (k) => URL.createObjectURL(new Blob([Mp(k, s.sampleRate)], { type: "audio/wav" }));
    return { tausta: c(s.tausta), kitara: c(s.kitara) };
  }, [s]), _ = u.source === "wav" ? zn.wav : u.source === "aac" || u.source === "mp3cbr" ? Ap[u.source][u.length] : null, L = _ !== null && u.loading === "muisti", F = L && _ !== zn.wav, Q = L ? _ : zn.wav, [O, G] = $.useState({ tausta: Bi, kitara: Bi }), [I, fe] = $.useState({ tausta: Bi, kitara: Bi }), re = $.useRef({}), A = $.useRef({}), ge = $.useRef({}), Te = $.useMemo(() => new Ep((c) => {
    const k = c.includes("-kitara") ? "kitara" : "tausta", N = F && c === zn.wav[k] ? fe : G;
    return {
      idleTimeoutMs: u.loadIdleMs,
      type: Dp(c),
      onProgress: ({ loaded: V, total: J, attempt: q }) => {
        V !== J && V - (A.current[c] ?? 0) < 1 << 20 || (A.current[c] = V, N((D) => ({ ...D, [k]: { ...D[k], loaded: V, total: J, attempt: q } })));
      },
      onAttemptFailed: ({ attempt: V, reason: J, willRetry: q }) => {
        A.current[c] = 0, ue("lataus-yritys-epaonnistui", { track: k, url: c, attempt: V, reason: J, willRetry: q });
      },
      onDone: (V) => {
        ge.current[c] = V;
      }
    };
  }), [u, F]), he = S ?? (L ? { tausta: O.tausta.url ?? void 0, kitara: O.kitara.url ?? void 0 } : zn[u.source]), ye = $.useMemo(() => s && u.offsetMs !== 0 ? Ou(60, s.sampleRate, 0) : s, [u, s]), xe = $.useRef(() => Promise.reject(new Error("ei alustettu"))), Re = $.useRef(() => Promise.reject(new Error("ei alustettu"))), Ce = $.useRef({}), me = $.useMemo(() => ye ? { tausta: Pc(ye.tausta, ye.sampleRate), kitara: Pc(ye.kitara, ye.sampleRate) } : { tausta: jc(() => Re.current("tausta")), kitara: jc(() => Re.current("kitara")) }, [ye]), b = $.useRef(null), _e = $.useRef(null), we = $.useRef(0), ot = $.useRef(new ep()), Ie = $.useRef(null), Be = $.useRef(null), $e = $.useRef(new gp()), Ve = $.useRef(!1), B = $.useRef(/* @__PURE__ */ new WeakMap()), P = $.useRef(!1), K = $.useRef([]), [z, m] = $.useState(!1), [M, Z] = $.useState(0), [le, ce] = $.useState(0), [ie, ae] = $.useState(""), [ne, Se] = $.useState(""), [He, St] = $.useState([]), [lr, ir] = $.useState(null), [Ar, zl] = $.useState([]), [Dr, Ur] = $.useState(""), an = $.useRef(0), Fn = $.useRef(!1), be = $.useRef(!1), [Lt, $r] = $.useState(!1), xt = $.useRef(null), or = $.useRef(/* @__PURE__ */ new Set()), ue = (c, k = {}) => $e.current.record(c, k);
  function Bt(c, k) {
    be.current !== c && ue("toistoaikomus", { value: c, reason: k }), be.current = c, $r(c);
  }
  function On() {
    for (const c of [...or.current]) c();
  }
  function In(c, k, N) {
    const V = Te.load(c);
    if (re.current[c] === V) return V;
    re.current[c] = V;
    const J = N === "referenssi" ? fe : G, q = performance.now();
    return A.current[c] = 0, ue("lataus-alku", { track: k, url: c, kind: N }), J((D) => ({ ...D, [k]: { ...D[k], state: "lataa", loaded: 0, reason: "" } })), V.then((D) => {
      const se = ge.current[c], Ee = N === "ensisijainen" && L ? URL.createObjectURL(D) : null;
      ue("lataus-valmis", {
        track: k,
        url: c,
        kind: N,
        bytes: D.size,
        kestoMs: Math.round(performance.now() - q),
        attempt: se?.attempt ?? null,
        otsakkeetMs: se ? Math.round(se.headersMs) : null,
        siirtoMs: se ? Math.round(se.bodyMs) : null,
        blobMs: se ? Math.round(se.blobMs - se.bodyMs) : null
      }), Ee && ue("lahde-asetettu", { track: k, bytes: D.size }), J((Ne) => ({ ...Ne, [k]: { ...Ne[k], state: "valmis", loaded: D.size, total: D.size, reason: "", url: Ee } }));
    }, (D) => {
      const se = D instanceof Kc ? D.message : String(D);
      ue("lataus-virhe", { track: k, url: c, kind: N, reason: se }), Ce.current[c] = !0, J((Ee) => ({ ...Ee, [k]: { ...Ee[k], state: "virhe", reason: se } }));
    }), V;
  }
  const ur = (c) => In(Q[c], c, "ensisijainen"), cn = (c) => F ? In(zn.wav[c], c, "referenssi") : ur(c);
  xe.current = ur, Re.current = (c) => {
    const k = zn.wav[c], N = F ? I[c] : O[c];
    return Ce.current[k] ? Promise.reject(new Error(`Mittausreferenssi (${c}) ei latautunut: ${N.reason}`)) : cn(c);
  };
  function fn() {
    for (const c of Pt)
      O[c].state === "virhe" && (Ce.current[Q[c]] = !1, ur(c).catch(() => {
      })), F && I[c].state === "virhe" && (Ce.current[zn.wav[c]] = !1, cn(c).catch(() => {
      }));
  }
  const ht = !L || Pt.every((c) => O[c].state === "valmis"), Vr = Pt.filter((c) => O[c].state === "virhe"), Wr = F ? Pt.filter((c) => I[c].state === "virhe") : [];
  function Qi(c) {
    let k = B.current.get(c);
    return k || (k = {
      get currentTime() {
        return c.currentTime;
      },
      set currentTime(N) {
        ue("seek-write", { track: "kitara", from: c.currentTime, to: N, forced: Ve.current, readyState: c.readyState, paused: c.paused }), c.currentTime = N;
      },
      get paused() {
        return c.paused;
      },
      get seeking() {
        return c.seeking;
      },
      get readyState() {
        return c.readyState;
      },
      get loop() {
        return c.loop;
      },
      get duration() {
        return c.duration;
      }
    }, B.current.set(c, k)), k;
  }
  function Jt(c = !1) {
    const k = b.current, N = _e.current;
    !k || !N || !u.sync || !c && !u.corrections || (Ve.current = c, ot.current.align(k, Qi(N), c));
  }
  function sr(c, k) {
    ue("seek-write", { track: "tausta", from: c.currentTime, to: k, forced: "käyttäjä", readyState: c.readyState, paused: c.paused });
    try {
      c.currentTime = k;
    } catch {
    }
  }
  function ar() {
    const c = Be.current;
    c && (b.current && c.setLevel(b.current, xc("backing", 100)), _e.current && c.setLevel(_e.current, xc("guitar", 100)));
  }
  function qt() {
    for (const c of K.current) clearTimeout(c);
    K.current = [];
  }
  function zt(c) {
    const k = xt.current;
    we.current++, On(), xt.current = null, qt(), ue("pause-call", { cause: c, kesken: k?.request ?? null }), Bt(!1, c), x(null), Be.current?.observe(), b.current?.pause(), _e.current?.pause(), u.engine === "uusi" && b.current && (an.current = k ? k.target : b.current.currentTime), m(!1);
  }
  function Et(c) {
    const k = b.current;
    if (!k || !Number.isFinite(c)) return;
    const N = Math.max(0, Math.min(c, Number.isFinite(k.duration) ? k.duration : c));
    if (u.engine === "uusi") {
      const V = be.current;
      if (ue("control", { control: "kelaus", to: N, playing: z, wantsPlayback: V, kesken: xt.current?.request ?? null, paatos: V ? "uusi-aloitus" : "aseta-kohta" }), an.current = N, Z(N), V) {
        fr(N, "kelaus");
        return;
      }
      we.current++, On(), ue("kelaus-tauolla", { to: N });
      return;
    }
    ue("control", { control: "kelaus", to: N }), Ie.current = N, Z(N), sr(k, N), k.paused || cr("kelaus", we.current);
  }
  function Ft(c) {
    const k = Ie.current;
    if (k === null || c !== b.current || c.seeking) return;
    const N = Number.isFinite(c.duration) ? Math.min(k, c.duration) : k;
    if (N !== k && (Ie.current = N, Z(N)), Math.abs(c.currentTime - N) < Uc) return;
    const V = c.seekable;
    for (let J = 0; J < V.length; J++)
      if (V.start(J) <= N && N <= V.end(J)) {
        sr(c, N);
        return;
      }
  }
  async function Br(c, k) {
    if (P.current || k !== we.current) return;
    const N = b.current, V = _e.current;
    if (!(!N || !V || !tr(N) || !tr(V))) {
      P.current = !0;
      try {
        const J = [
          { name: "tausta", element: N, reference: me.tausta, referenceOffsetSeconds: 0 },
          { name: "kitara", element: V, reference: me.kitara, referenceOffsetSeconds: 0 }
        ], q = { ...await vp(c, J), request: k };
        $e.current.measurements.push(q), ue("mittaus", { phase: c, mediaDiffMs: q.mediaDiffMs, renderedDiffMs: q.renderedDiffMs, reliable: q.reliable, request: k }), St((D) => [...D, q]);
      } catch (J) {
        ue("mittausvirhe", { phase: c, reason: String(J) });
      } finally {
        P.current = !1;
      }
    }
  }
  function cr(c, k) {
    if (qt(), !u.measure) return;
    K.current.push(window.setTimeout(() => {
      Br(c, k);
    }, $c));
    const N = () => {
      k === we.current && (Br("jatkuva", k), K.current.push(window.setTimeout(N, u.measureIntervalMs)));
    };
    K.current.push(window.setTimeout(N, $c + u.measureIntervalMs));
  }
  function Fl(c) {
    if (c !== b.current) return;
    if (u.engine === "uusi") {
      Z(c.currentTime);
      return;
    }
    const k = Ie.current;
    if (k === null)
      Z(c.currentTime);
    else if (c.readyState >= 1 && !c.seeking && Math.abs(c.currentTime - k) < Uc) {
      Ie.current = null, ue("kelaus-valmis", { time: c.currentTime }), Jt(!0);
      return;
    }
    c.paused || Jt();
  }
  function An(c, k) {
    return ue("play-call", { track: k, time: c.currentTime, readyState: c.readyState }), c.play().then(
      () => {
        ue("play-result", { track: k, result: "fulfilled", time: c.currentTime });
      },
      (N) => {
        throw ue("play-result", { track: k, result: "rejected", reason: N?.name ?? String(N) }), N;
      }
    );
  }
  async function Dn() {
    const c = b.current, k = _e.current;
    if (!c || !k) return;
    const N = u.engine === "uusi" ? be.current : z;
    if (!N && !ht) return;
    if (ue("control", { control: N ? "tauko" : "soita", playing: z, wantsPlayback: be.current }), N) {
      zt("painallus");
      return;
    }
    if (u.engine === "uusi") return fr(an.current, Fn.current ? "jatko" : "käynnistys");
    ae("");
    for (const [Ne, je] of [[c, "tausta"], [k, "kitara"]])
      Ne.error && (ue("uusi-lataus", { track: je, reason: Rl(Ne) }), Ne.load());
    const V = c.currentTime > 0.05, J = Ie.current ?? c.currentTime;
    Number.isFinite(c.duration) && J >= c.duration - 0.05 && Et(0), Ft(c);
    const q = Be.current ??= new Tc(), D = q.unlock() && [c, k].map((Ne) => q.route(Ne)).every(Boolean);
    Se(D ? "" : "Web Audio -kytkentä epäonnistui: " + q.lastError);
    let se = null;
    D && (q.recovering || q.clockState() === "stalled") && (ue("palautus", { reason: q.recovering ? "kesken" : "kello pysähtynyt" }), se = q.recover()), ar(), Jt(!0);
    const Ee = ++we.current;
    if (se) {
      const Ne = await se;
      if (ue("palautus-tulos", { restored: Ne, error: Ne ? "" : q.lastError }), Ee !== we.current) return;
      if (!Ne) {
        ae("Ääni ei palautunut: Web Audio on pysähtynyt. Lataa sivu uudelleen. " + q.lastError);
        return;
      }
    }
    try {
      if (await Promise.all([An(c, "tausta"), An(k, "kitara")]), Ee !== we.current) return;
      Jt(), m(!0), ue("toisto-alkoi", { tausta: c.currentTime, kitara: k.currentTime, request: Ee }), cr(V ? "jatko" : "käynnistys", Ee), D && (q.observe(), window.setTimeout(() => {
        Ee === we.current && (q.state !== "running" ? ae(`Ääni ei käynnistynyt (Web Audio: ${q.state}).`) : q.clockState() === "stalled" && (zt("vahti"), ae("Ääni ei kulje: Web Audio on pysähtynyt. Paina Soita uudelleen.")));
      }, 800));
    } catch {
      if (Ee !== we.current) return;
      zt("virhe"), ae(Un() || "Toisto epäonnistui.");
    }
  }
  function Un() {
    const c = [[b.current, "tausta"], [_e.current, "kitara"]].filter(([k]) => k?.error).map(([k, N]) => `${N}: ${Rl(k)}`);
    return c.length ? `Äänitiedoston lataus epäonnistui (${c.join("; ")}). Paina Soita yrittääksesi uudelleen.` : "";
  }
  function Hr(c, k) {
    z && zt("latausvirhe"), ae(`Äänitiedoston lataus epäonnistui (${c}: ${Rl(k)}). Paina Soita yrittääksesi uudelleen.`);
  }
  function dn(c, k, N = 5e3) {
    return new Promise((V) => {
      const J = () => c.readyState >= 1 && !c.seeking && Math.abs(c.currentTime - k) < 0.25;
      if (c.error) {
        V("virhe");
        return;
      }
      if (J()) {
        V("valmis");
        return;
      }
      const q = ["loadedmetadata", "seeked", "canplay", "loadeddata", "error"], D = () => {
        c.error ? je("virhe") : J() && je("valmis");
      }, se = window.setTimeout(() => je("aikakatkaisu"), N), Ee = () => je("ohitettu");
      let Ne = !1;
      function je(pe) {
        if (!Ne) {
          Ne = !0, window.clearTimeout(se);
          for (const st of q) c.removeEventListener(st, D);
          or.current.delete(Ee), V(pe);
        }
      }
      or.current.add(Ee);
      for (const pe of q) c.addEventListener(pe, D);
    });
  }
  async function fr(c, k) {
    const N = ++we.current;
    On(), xt.current = { request: N, target: c }, Bt(!0, k);
    const V = (pe, st = {}) => ue("aloitus-ohitettu", { request: N, vaihe: pe, uusin: we.current, phase: k, target: c, ...st });
    qt(), ae("");
    const J = Fn.current;
    Fn.current = !0, ue("tuore-aloitus", { phase: k, target: c, reload: J, request: N }), x(null), Z(c);
    const q = b.current, D = _e.current;
    if (!q || !D) return;
    const se = Be.current ??= new Tc(), Ee = se.unlock() && [q, D].map((pe) => se.route(pe)).every(Boolean);
    Se(Ee ? "" : "Web Audio -kytkentä epäonnistui: " + se.lastError);
    let Ne = null;
    Ee && (se.recovering || se.clockState() === "stalled") && (ue("palautus", { reason: se.recovering ? "kesken" : "kello pysähtynyt" }), Ne = se.recover()), ar();
    for (const pe of [q, D])
      pe.pause(), (J || pe.error) && pe.load(), c > 0 && (ue("seek-write", { track: pe === q ? "tausta" : "kitara", from: pe.currentTime, to: c, forced: "aloitus", readyState: pe.readyState, paused: !0 }), pe.currentTime = c);
    if (Ne) {
      const pe = await Ne;
      if (ue("palautus-tulos", { restored: pe, error: pe ? "" : se.lastError }), N !== we.current) {
        V("palautus");
        return;
      }
      if (!pe) {
        xt.current = null, Bt(!1, "palautus-epaonnistui"), ae("Ääni ei palautunut: Web Audio on pysähtynyt. Lataa sivu uudelleen. " + se.lastError);
        return;
      }
    }
    const je = await Promise.all([dn(q, c), dn(D, c)]);
    if (N !== we.current || je.includes("ohitettu")) {
      V("kelaus", { tausta: je[0], kitara: je[1] });
      return;
    }
    if (ue("kelattu", { tausta: je[0], kitara: je[1], tT: q.currentTime, tK: D.currentTime, request: N }), je.includes("virhe")) {
      ue("latausvirhe", { target: c, tausta: Rl(q), kitara: Rl(D), request: N }), xt.current = null, Bt(!1, "latausvirhe"), an.current = c, m(!1), ae(Un());
      return;
    }
    if (je.includes("aikakatkaisu")) {
      const pe = Pt.filter((st, Qt) => je[Qt] !== "valmis");
      ue("kelaus-aikakatkaisu", { target: c, raidat: pe, request: N }), xt.current = null, Bt(!1, "kelaus-aikakatkaisu"), an.current = c, m(!1), ae(`Kelaus ei valmistunut (${pe.join(", ")}). Paina Soita uudelleen.`);
      return;
    }
    try {
      if (await Promise.all([An(q, "tausta"), An(D, "kitara")]), N !== we.current) {
        V("toisto");
        return;
      }
      xt.current = null, m(!0), ue("toisto-alkoi", { tausta: q.currentTime, kitara: D.currentTime, request: N }), x({ request: N, phase: k, startedMs: performance.now(), target: c }), cr(k, N), Ee && (se.observe(), window.setTimeout(() => {
        N === we.current && (se.state !== "running" ? ae(`Ääni ei käynnistynyt (Web Audio: ${se.state}).`) : se.clockState() === "stalled" && (zt("vahti"), ae("Ääni ei kulje: Web Audio on pysähtynyt. Paina Soita uudelleen.")));
      }, 800));
    } catch (pe) {
      if (N !== we.current) {
        V("toisto-virhe", { reason: pe?.name ?? String(pe) });
        return;
      }
      zt("virhe");
      const st = pe?.name === "NotAllowedError";
      ae(st ? "Toisto vaatii uuden painalluksen. Paina Soita." : Un() || "Toisto epäonnistui.");
    }
  }
  function bt(c) {
    const k = b.current?.currentTime ?? 0;
    ue("kuulokuva", { value: c, time: k }), zl((N) => [...N, { value: c, time: k }]);
  }
  function Qr() {
    const c = b.current;
    return {
      meta: {
        // Versio 2 (MK-20261119-01): request-tunnisteet, mittausten captureMs ja ulostulon viivearviot.
        test: "kaksiraitatesti",
        reportVersion: 2,
        source: u.source,
        sync: u.sync,
        syncMode: u.syncMode,
        offsetMs: u.offsetMs,
        measureIntervalMs: u.measureIntervalMs,
        engine: u.engine,
        loading: u.loading,
        bundle: new URL(import.meta.url).searchParams.get("v"),
        files: he,
        userAgent: navigator.userAgent,
        length: u.length,
        wideScenario: u.wideScenario,
        measure: u.measure,
        fileLoads: Object.fromEntries(Pt.map((k) => [k, { url: Q[k], state: O[k].state, bytes: O[k].loaded, attempt: O[k].attempt, reason: O[k].reason }])),
        referenceLoads: F ? Object.fromEntries(Pt.map((k) => [k, { state: I[k].state, bytes: I[k].loaded, reason: I[k].reason }])) : null,
        loadTimings: ge.current,
        navigation: (() => {
          const k = performance.getEntriesByType("navigation")[0];
          return k ? { responseEndMs: Math.round(k.responseEnd), domContentLoadedMs: Math.round(k.domContentLoadedEventEnd) } : null;
        })(),
        audioSession: navigator.audioSession?.type ?? null,
        contextSampleRate: tr(c)?.context.sampleRate ?? null,
        audioOutput: (() => {
          const k = tr(c)?.context;
          return k ? Uu(k) : null;
        })()
      },
      // H4: kaikki tämän välilehden säätökokeet (myös aiemmilta sivulatauksilta, sessionStorage).
      nayttoaani: u.avTest ? {
        version: 1,
        pageLoadId: h,
        trials: Zc(),
        flashMs: Xc,
        designTargetMs: Tp,
        synthetic: { seconds: Vc, sampleRate: Wc, beeps: a.length }
      } : null,
      seekLatencies: kp($e.current.events),
      measurements: $e.current.measurements,
      events: $e.current.events,
      samples: $e.current.samples
    };
  }
  function $n() {
    Ur(JSON.stringify(Qr()));
  }
  const ut = $.useRef(Dn);
  ut.current = Dn;
  const Ot = $.useRef(Et);
  Ot.current = Et;
  const Vn = $.useRef(!1), [Wn, Ki] = $.useState("");
  async function Yi() {
    if (Vn.current || z || !ht) return;
    Vn.current = !0;
    const c = (N) => new Promise((V) => window.setTimeout(V, N)), k = (N) => {
      ue("vakiokoe", { step: N, time: b.current?.currentTime ?? 0 }), Ki(N);
    };
    try {
      k("soita"), await ut.current(), await c(25e3), k("kelaus"), Ot.current(u.source === "synteettinen" ? 30 : 60), await c(15e3), k("tauko"), await ut.current(), await c(3e3), k("jatko"), await ut.current(), await c(15e3), u.wideScenario && (k("kaksoiskelaus"), Ot.current(u.source === "synteettinen" ? 20 : 30), await c(1e3), Ot.current(u.source === "synteettinen" ? 45 : 90), await c(15e3)), k("tauko-loppu"), await ut.current(), k("valmis");
    } finally {
      Vn.current = !1;
    }
  }
  const It = $.useRef(!1), [pn, Kr] = $.useState("");
  async function Xi() {
    if (It.current || !ht || u.engine !== "uusi") return;
    It.current = !0;
    const c = (D) => new Promise((se) => window.setTimeout(se, D)), k = () => $e.current.events, N = async (D, se) => {
      const Ee = performance.now() + se;
      for (; !D() && performance.now() < Ee; ) await c(25);
    }, V = (D) => () => k().some((se) => se.ms >= D && (se.event === "toisto-alkoi" || se.event === "kelaus-aikakatkaisu" || se.event === "latausvirhe")), J = Op(), q = {};
    try {
      for (const D of J) {
        const se = Number.isFinite(b.current?.duration) ? b.current.duration : 60, Ee = D.osuudet.map((yt) => Math.round(yt * se * 10) / 10);
        if (D.tila === "soitosta") {
          if (!be.current) {
            const yt = performance.now();
            ut.current(), await N(V(yt), 15e3);
          }
          await c(700);
        } else
          be.current && ut.current(), await c(400);
        const Ne = performance.now();
        let je = 0, pe = Ne;
        const st = window.setInterval(() => {
          const yt = performance.now();
          je = Math.max(je, yt - pe), pe = yt;
        }, 20);
        ue("kelaussarja-alku", { sarja: D.sarja, tila: D.tila, valit: D.valit, kohteet: Ee }), Kr(`sarja ${D.sarja}/${J.length} (${D.tila})`), D.tila === "aloituksesta" && ut.current();
        let Qt = Ne;
        for (const [yt, Al] of Ee.entries())
          D.valit[yt] && await c(D.valit[yt]), Qt = performance.now(), Ot.current(Al);
        const Gr = Ee[Ee.length - 1];
        await N(() => Dc(k(), Ne, Qt, Gr).tulos !== "ei-toistoa", 15e3), await c(300), window.clearInterval(st), je = Math.max(je, performance.now() - pe);
        const Zr = Dc(k(), Ne, Qt, Gr);
        q[Zr.tulos] = (q[Zr.tulos] ?? 0) + 1, ue("kelaussarja-tulos", {
          sarja: D.sarja,
          tila: D.tila,
          valit: D.valit,
          kohteet: Ee,
          odotettu: Gr,
          pisinJumiMs: Math.round(je),
          ...Zr
        });
      }
      be.current && ut.current(), ue("kelaussarja-valmis", { sarjoja: J.length, ...q }), Kr(`valmis: ok ${q.ok ?? 0}/${J.length}` + Object.entries(q).filter(([D]) => D !== "ok").map(([D, se]) => `, ${D} ${se}`).join(""));
    } finally {
      It.current = !1;
    }
  }
  const Yr = $.useRef(Qr);
  Yr.current = Qr, $.useEffect(() => {
    window.kaksiraitatesti = {
      report: () => Yr.current(),
      // Selaintesteille: peräkkäiset ja keskeneräisen kelauksen aikana tehdyt kelaukset.
      seek: (c) => Ot.current(c)
    };
  }, []), $.useEffect(() => {
    if (u.source === "synteettinen") return;
    const c = Pt.map((k) => xe.current(k));
    for (const k of c) k.catch(() => {
    });
    F && u.measure && Promise.allSettled(c).then(() => {
      for (const k of Pt) Re.current(k).catch(() => {
      });
    });
  }, [u, F]);
  const Xr = $.useRef(!1), [dr, Ol] = $.useState(null);
  $.useEffect(() => {
    if (!ht || Xr.current || u.source === "synteettinen") return;
    Xr.current = !0;
    const c = Math.round(performance.now());
    ue("soita-kaytossa", { sivustaMs: c }), Ol(c);
  }, [ht, u]), $.useEffect(() => {
    const c = [[b.current, "tausta"], [_e.current, "kitara"]], k = ["loadstart", "emptied", "loadedmetadata", "canplay", "canplaythrough", "play", "playing", "waiting", "stalled", "seeking", "seeked", "pause", "ended", "error"], N = [];
    for (const [V, J] of c)
      if (V)
        for (const q of k) {
          const D = () => ue(q, {
            track: J,
            time: V.currentTime,
            readyState: V.readyState,
            paused: V.paused,
            ...q === "error" ? { code: V.error?.code ?? null, message: V.error?.message ?? "" } : {}
          });
          V.addEventListener(q, D), N.push(() => V.removeEventListener(q, D));
        }
    return () => N.forEach((V) => V());
  }, []), $.useEffect(() => {
    const c = window.setInterval(() => {
      const N = b.current, V = _e.current;
      if (!N || !V) return;
      const J = tr(N)?.context, q = (V.currentTime - N.currentTime) * 1e3;
      $e.current.sample({
        tausta: N.currentTime,
        kitara: V.currentTime,
        mediaDiffMs: q,
        pausedT: N.paused,
        pausedK: V.paused,
        readyT: N.readyState,
        readyK: V.readyState,
        contextState: J?.state ?? null,
        contextTime: J?.currentTime ?? null,
        hidden: document.hidden
      }), ir({ diff: q, tausta: N.currentTime, kitara: V.currentTime });
    }, 500), k = () => {
      ue("visibilitychange", { hidden: document.hidden }), Be.current?.observe(), document.hidden && zt("sivu-piiloon");
    };
    return document.addEventListener("visibilitychange", k), () => {
      clearInterval(c), document.removeEventListener("visibilitychange", k), we.current++, qt(), Be.current?.close();
    };
  }, []);
  const Gi = He.filter((c) => c.reliable && c.renderedDiffMs !== null), Zi = ["käynnistys", "jatko", "kelaus", "jatkuva"].map((c) => {
    const k = Gi.filter((J) => J.phase === c), N = k.map((J) => J.renderedDiffMs), V = k.map((J) => J.mediaDiffMs);
    return {
      phase: c,
      count: k.length,
      renderedMedian: Bc(N),
      renderedMaxAbs: N.length ? Math.max(...N.map(Math.abs)) : null,
      mediaMedian: Bc(V),
      unreliable: He.filter((J) => J.phase === c && !J.reliable).length
    };
  }), Fe = u.source === "synteettinen" ? 30 : 60, Ht = (c, k = "kaytossa") => `?lahde=${c}${k === "kaytossa" ? "" : "&tahdistin=" + k}`, pr = u.length === "koko" ? "koko kappale" : "0–120 s", Il = u.source === "mp3" ? "MP3" : u.source === "wav" ? `WAV (0–120 s, ${L ? "muistista" : "verkosta"})` : u.source === "aac" ? `AAC 192 kbit/s (${pr}, muistista)` : u.source === "mp3cbr" ? `MP3 CBR 192 kbit/s (${pr}, muistista)` : u.avTest ? "H4 näyttö–ääni-säätökoe (synteettinen 240 s, muistista)" : `Synteettinen (kitara siirretty ${u.offsetMs} ms myöhemmäksi)`;
  return /* @__PURE__ */ E.jsxs("main", { className: "kaksiraita", children: [
    /* @__PURE__ */ E.jsx("h1", { children: "Kahden raidan synkronointitesti" }),
    /* @__PURE__ */ E.jsxs("p", { className: "mode", "data-source": u.source, "data-sync": u.sync ? "on" : "off", "data-sync-mode": u.syncMode, children: [
      "Tila: ",
      /* @__PURE__ */ E.jsx("strong", { children: Il }),
      " · ",
      u.engine === "uusi" ? /* @__PURE__ */ E.jsx("strong", { children: "uusi moottori (korjausehdokas)" }) : /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
        "tahdistin ",
        /* @__PURE__ */ E.jsx("strong", { children: u.syncMode === "kaytossa" ? "käytössä" : u.syncMode === "pois" ? "pois" : "ilman korjauskelauksia" })
      ] })
    ] }),
    /* @__PURE__ */ E.jsxs("p", { className: "links", children: [
      /* @__PURE__ */ E.jsx("a", { href: Ht("mp3"), children: "MP3" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Ht("wav"), children: "WAV" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Ht("aac") + "&moottori=uusi", children: "AAC" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Ht("mp3cbr") + "&moottori=uusi", children: "MP3 CBR" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Ht("synteettinen"), children: "Synteettinen" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Ht(u.source), children: "tahdistin käyttöön" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Ht(u.source, "pois"), children: "pois" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Ht(u.source, "ei-korjauksia"), children: "ilman korjauksia" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: `?lahde=${u.source}&moottori=uusi`, children: "uusi moottori" })
    ] }),
    u.avTest && /* @__PURE__ */ E.jsx(
      zp,
      {
        backing: b,
        beeps: a,
        segment: y,
        playing: z,
        active: z || Lt,
        filesReady: ht,
        measurements: He,
        pageLoadId: h,
        onToggle: () => {
          Dn();
        },
        onSeek: Et,
        record: ue,
        outputNow: () => {
          const c = tr(b.current)?.context;
          return c ? Uu(c) : null;
        },
        outputEstimate: Fp
      }
    ),
    /* @__PURE__ */ E.jsxs("section", { className: "player", "aria-label": "Testisoitin", children: [
      /* @__PURE__ */ E.jsx(
        "button",
        {
          type: "button",
          className: "play",
          onClick: () => {
            Dn();
          },
          disabled: !z && !Lt && !ht,
          "data-tila": z ? "soi" : Lt ? "aloittaa" : "tauko",
          children: z || Lt ? "■ Tauko" : "▶ Soita"
        }
      ),
      /* @__PURE__ */ E.jsxs("button", { type: "button", onClick: () => Et(Fe), disabled: !ht, children: [
        "Siirry kohtaan ",
        Hi(Fe)
      ] }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => {
        Yi();
      }, disabled: !ht || Wn !== "" && Wn !== "valmis", children: "Aja vakiokoe (n. 60 s)" }),
      Wn && /* @__PURE__ */ E.jsxs("output", { className: "scenario", "data-step": Wn, children: [
        " Vakiokoe: ",
        Wn
      ] }),
      u.burstTest && /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => {
        Xi();
      }, disabled: !ht || pn !== "" && !pn.startsWith("valmis"), children: "Aja kelaussarjat (24)" }),
      pn && /* @__PURE__ */ E.jsxs("output", { className: "bursts", "data-tila": pn.startsWith("valmis") ? "valmis" : "kaynnissa", children: [
        " Kelaussarjat: ",
        pn
      ] }),
      /* @__PURE__ */ E.jsxs("output", { className: "time", children: [
        Hi(M),
        " / ",
        Hi(le)
      ] }),
      u.source !== "synteettinen" && /* @__PURE__ */ E.jsxs("p", { className: "files", "data-ready": ht ? "kyllä" : "ei", children: [
        L ? "Äänitiedostot" : "Mittausreferenssit (WAV)",
        ":",
        " ",
        Pt.map((c, k) => /* @__PURE__ */ E.jsxs("span", { "data-track": c, "data-state": O[c].state, children: [
          k ? " · " : "",
          Wi[c],
          " ",
          O[c].state === "valmis" ? `valmis (${Pl(O[c].loaded)} Mt)` : O[c].state === "virhe" ? "virhe" : `${Pl(O[c].loaded)} / ${Pl(O[c].total)} Mt${O[c].attempt > 1 ? ` (yritys ${O[c].attempt})` : ""}`
        ] }, c)),
        dr !== null && /* @__PURE__ */ E.jsxs("span", { className: "ready-time", "data-ms": dr, children: [
          " · Soita käytössä ",
          (dr / 1e3).toFixed(1).replace(".", ","),
          " s sivun avaamisesta"
        ] })
      ] }),
      F && u.measure && /* @__PURE__ */ E.jsxs("p", { className: "files refs", "data-ready": Pt.every((c) => I[c].state === "valmis") ? "kyllä" : "ei", children: [
        "Mittausreferenssit (WAV, vain mittausta varten):",
        " ",
        Pt.map((c, k) => /* @__PURE__ */ E.jsxs("span", { "data-track": c, "data-state": I[c].state, children: [
          k ? " · " : "",
          Wi[c],
          " ",
          I[c].state === "valmis" ? "valmis" : I[c].state === "virhe" ? "virhe" : I[c].state === "odottaa" ? "odottaa" : `${Pl(I[c].loaded)} / ${Pl(I[c].total)} Mt`
        ] }, c))
      ] }),
      Wr.length > 0 && /* @__PURE__ */ E.jsxs("p", { role: "alert", className: "error load-error", children: [
        "Mittausreferenssin lataus epäonnistui: ",
        Wr.map((c) => `${Wi[c]} (${I[c].reason})`).join(", "),
        ".",
        " ",
        "Toisto toimii, mutta mittaukset eivät.",
        " ",
        /* @__PURE__ */ E.jsx("button", { type: "button", onClick: fn, children: "Yritä uudelleen" })
      ] }),
      Vr.length > 0 && /* @__PURE__ */ E.jsxs("p", { role: "alert", className: "error load-error", children: [
        L ? "Äänitiedoston" : "Mittausreferenssin",
        " lataus epäonnistui: ",
        Vr.map((c) => `${Wi[c]} (${O[c].reason})`).join(", "),
        ".",
        L ? " Toistoa ei voi aloittaa." : " Toisto toimii, mutta mittaukset eivät.",
        " ",
        /* @__PURE__ */ E.jsx("button", { type: "button", onClick: fn, children: "Yritä uudelleen" })
      ] }),
      ne && /* @__PURE__ */ E.jsx("p", { role: "status", children: ne }),
      ie && /* @__PURE__ */ E.jsx("p", { role: "alert", className: "error", children: ie }),
      /* @__PURE__ */ E.jsx(
        "audio",
        {
          ref: b,
          src: he.tausta,
          preload: "metadata",
          onLoadedMetadata: (c) => {
            ce(c.currentTarget.duration), Ft(c.currentTarget);
          },
          onProgress: (c) => Ft(c.currentTarget),
          onCanPlay: (c) => Ft(c.currentTarget),
          onTimeUpdate: (c) => Fl(c.currentTarget),
          onEnded: () => {
            Ie.current = null, qt(), ue("ended", {}), _e.current?.pause(), m(!1), Bt(!1, "loppu");
          },
          onPause: (c) => {
            if (c.currentTarget !== b.current) return;
            if (u.engine !== "uusi") {
              m(!1);
              return;
            }
            const k = xt.current !== null, N = !c.currentTarget.paused;
            ue("pause-paatos", { kesken: k, vanhentunut: N, wantsPlayback: be.current }), !N && (m(!1), !k && be.current && Bt(!1, "ulkoinen-pause"));
          },
          onError: (c) => Hr("tausta", c.currentTarget)
        }
      ),
      /* @__PURE__ */ E.jsx(
        "audio",
        {
          ref: _e,
          src: he.kitara,
          preload: "metadata",
          onLoadedMetadata: () => {
            u.engine === "nykyinen" && b.current?.paused && Jt(!0);
          },
          onError: (c) => Hr("kitara", c.currentTarget)
        }
      )
    ] }),
    /* @__PURE__ */ E.jsxs("section", { "aria-label": "Mediakellot", children: [
      /* @__PURE__ */ E.jsx("h2", { children: "Mediaelementtien kellot" }),
      /* @__PURE__ */ E.jsxs("p", { className: "live", children: [
        "Tausta ",
        Zt(lr?.tausta, 3),
        " s · Kitara ",
        Zt(lr?.kitara, 3),
        " s · ",
        /* @__PURE__ */ E.jsxs("strong", { children: [
          "ero ",
          Zt(lr?.diff),
          " ms"
        ] })
      ] }),
      /* @__PURE__ */ E.jsx("p", { className: "hint", children: "Ero on elementtien kellojen ero (kitara − tausta). Se ei ole kuultava kohdistus." })
    ] }),
    /* @__PURE__ */ E.jsxs("section", { "aria-label": "Renderöity kohdistus", children: [
      /* @__PURE__ */ E.jsx("h2", { children: "Renderöity kohdistus (Web Audio -graafi)" }),
      /* @__PURE__ */ E.jsx("p", { className: "hint", children: "Mitataan automaattisesti 3 s Soita-painalluksen ja kelauksen jälkeen ja sen jälkeen 5 s välein. Positiivinen = kitara edellä." }),
      /* @__PURE__ */ E.jsxs("table", { className: "summary", children: [
        /* @__PURE__ */ E.jsx("thead", { children: /* @__PURE__ */ E.jsxs("tr", { children: [
          /* @__PURE__ */ E.jsx("th", { children: "Vaihe" }),
          /* @__PURE__ */ E.jsx("th", { children: "Mittauksia" }),
          /* @__PURE__ */ E.jsx("th", { children: "Renderöity mediaani (ms)" }),
          /* @__PURE__ */ E.jsx("th", { children: "Suurin |ero| (ms)" }),
          /* @__PURE__ */ E.jsx("th", { children: "Mediakellojen mediaani (ms)" }),
          /* @__PURE__ */ E.jsx("th", { children: "Epävarmoja" })
        ] }) }),
        /* @__PURE__ */ E.jsx("tbody", { children: Zi.map((c) => /* @__PURE__ */ E.jsxs("tr", { "data-phase": c.phase, children: [
          /* @__PURE__ */ E.jsx("td", { children: c.phase }),
          /* @__PURE__ */ E.jsx("td", { children: c.count }),
          /* @__PURE__ */ E.jsx("td", { children: Zt(c.renderedMedian) }),
          /* @__PURE__ */ E.jsx("td", { children: Zt(c.renderedMaxAbs) }),
          /* @__PURE__ */ E.jsx("td", { children: Zt(c.mediaMedian) }),
          /* @__PURE__ */ E.jsx("td", { children: c.unreliable })
        ] }, c.phase)) })
      ] }),
      /* @__PURE__ */ E.jsx("ol", { className: "measurements", "aria-label": "Mittaukset", children: He.slice(-12).map((c) => /* @__PURE__ */ E.jsxs("li", { "data-reliable": c.reliable ? "kyllä" : "ei", children: [
        c.phase,
        ": renderöity ",
        Zt(c.renderedDiffMs),
        " ms, mediakellot ",
        Zt(c.mediaDiffMs),
        " ms",
        " ",
        "(korrelaatio T ",
        Zt(c.tracks[0].score, 3),
        " / K ",
        Zt(c.tracks[1].score, 3),
        c.reliable ? "" : ", epävarma" + (c.tracks.find((k) => k.error)?.error ? ": " + c.tracks.find((k) => k.error).error : c.tracks.some((k) => k.probeRms <= 1e-4) ? ": raita hiljaa" : ""),
        ")"
      ] }, c.ms)) })
    ] }),
    /* @__PURE__ */ E.jsxs("section", { "aria-label": "Kuulokuva", children: [
      /* @__PURE__ */ E.jsx("h2", { children: "Kuulokuva" }),
      /* @__PURE__ */ E.jsx("p", { className: "hint", children: "Kirjaa, miltä kuulostaa juuri nyt. Kirjaus tallentuu raporttiin soittimen kohdan kanssa." }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => bt("tahdissa"), children: "Kuulostaa tahdissa" }),
      " ",
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => bt("epätahdissa"), children: "Kuulostaa epätahdissa" }),
      " ",
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => bt("epävarma"), children: "En osaa sanoa" }),
      /* @__PURE__ */ E.jsx("ul", { children: Ar.map((c, k) => /* @__PURE__ */ E.jsxs("li", { children: [
        Hi(c.time),
        ": ",
        c.value
      ] }, k)) })
    ] }),
    /* @__PURE__ */ E.jsxs("section", { "aria-label": "Raportti", children: [
      /* @__PURE__ */ E.jsx("h2", { children: "Raportti" }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: $n, children: "Valitse raportti" }),
      Dr && /* @__PURE__ */ E.jsx(
        "textarea",
        {
          readOnly: !0,
          rows: 8,
          "aria-label": "Testiraportti",
          value: Dr,
          ref: (c) => {
            c?.focus(), c?.select();
          }
        }
      )
    ] })
  ] });
}
yp();
const Hc = document.getElementById("kaksiraitatesti");
Hc && Vd.createRoot(Hc).render(/* @__PURE__ */ E.jsx($p, {}));
//# sourceMappingURL=app.js.map
