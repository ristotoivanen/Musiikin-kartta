var xu = { exports: {} }, kl = {}, Eu = { exports: {} }, fe = {};
var oc;
function Rd() {
  if (oc) return fe;
  oc = 1;
  var u = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), S = /* @__PURE__ */ Symbol.for("react.provider"), x = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.memo"), B = /* @__PURE__ */ Symbol.for("react.lazy"), I = Symbol.iterator;
  function G(m) {
    return m === null || typeof m != "object" ? null : (m = I && m[I] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var Z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ce = Object.assign, te = {};
  function O(m, M, X) {
    this.props = m, this.context = M, this.refs = te, this.updater = X || Z;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(m, M) {
    if (typeof m != "object" && typeof m != "function" && m != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, M, "setState");
  }, O.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function ve() {
  }
  ve.prototype = O.prototype;
  function Ee(m, M, X) {
    this.props = m, this.context = M, this.refs = te, this.updater = X || Z;
  }
  var me = Ee.prototype = new ve();
  me.constructor = Ee, ce(me, O.prototype), me.isPureReactComponent = !0;
  var he = Array.isArray, we = Object.prototype.hasOwnProperty, Ce = { current: null }, Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(m, M, X) {
    var ne, se = {}, re = null, oe = null;
    if (M != null) for (ne in M.ref !== void 0 && (oe = M.ref), M.key !== void 0 && (re = "" + M.key), M) we.call(M, ne) && !Te.hasOwnProperty(ne) && (se[ne] = M[ne]);
    var b = arguments.length - 2;
    if (b === 1) se.children = X;
    else if (1 < b) {
      for (var ke = Array(b), Ve = 0; Ve < b; Ve++) ke[Ve] = arguments[Ve + 2];
      se.children = ke;
    }
    if (m && m.defaultProps) for (ne in b = m.defaultProps, b) se[ne] === void 0 && (se[ne] = b[ne]);
    return { $$typeof: u, type: m, key: re, ref: oe, props: se, _owner: Ce.current };
  }
  function ee(m, M) {
    return { $$typeof: u, type: m.type, key: M, ref: m.ref, props: m.props, _owner: m._owner };
  }
  function Me(m) {
    return typeof m == "object" && m !== null && m.$$typeof === u;
  }
  function Se(m) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(X) {
      return M[X];
    });
  }
  var lt = /\/+/g;
  function Le(m, M) {
    return typeof m == "object" && m !== null && m.key != null ? Se("" + m.key) : M.toString(36);
  }
  function Ue(m, M, X, ne, se) {
    var re = typeof m;
    (re === "undefined" || re === "boolean") && (m = null);
    var oe = !1;
    if (m === null) oe = !0;
    else switch (re) {
      case "string":
      case "number":
        oe = !0;
        break;
      case "object":
        switch (m.$$typeof) {
          case u:
          case s:
            oe = !0;
        }
    }
    if (oe) return oe = m, se = se(oe), m = ne === "" ? "." + Le(oe, 0) : ne, he(se) ? (X = "", m != null && (X = m.replace(lt, "$&/") + "/"), Ue(se, M, X, "", function(Ve) {
      return Ve;
    })) : se != null && (Me(se) && (se = ee(se, X + (!se.key || oe && oe.key === se.key ? "" : ("" + se.key).replace(lt, "$&/") + "/") + m)), M.push(se)), 1;
    if (oe = 0, ne = ne === "" ? "." : ne + ":", he(m)) for (var b = 0; b < m.length; b++) {
      re = m[b];
      var ke = ne + Le(re, b);
      oe += Ue(re, M, X, ke, se);
    }
    else if (ke = G(m), typeof ke == "function") for (m = ke.call(m), b = 0; !(re = m.next()).done; ) re = re.value, ke = ne + Le(re, b++), oe += Ue(re, M, X, ke, se);
    else if (re === "object") throw M = String(m), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    return oe;
  }
  function $e(m, M, X) {
    if (m == null) return m;
    var ne = [], se = 0;
    return Ue(m, ne, "", "", function(re) {
      return M.call(X, re, se++);
    }), ne;
  }
  function De(m) {
    if (m._status === -1) {
      var M = m._result;
      M = M(), M.then(function(X) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = X);
      }, function(X) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = X);
      }), m._status === -1 && (m._status = 0, m._result = M);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var U = { current: null }, P = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: P, ReactCurrentOwner: Ce };
  function L() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return fe.Children = { map: $e, forEach: function(m, M, X) {
    $e(m, function() {
      M.apply(this, arguments);
    }, X);
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
    if (!Me(m)) throw Error("React.Children.only expected to receive a single React element child.");
    return m;
  } }, fe.Component = O, fe.Fragment = a, fe.Profiler = g, fe.PureComponent = Ee, fe.StrictMode = h, fe.Suspense = z, fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, fe.act = L, fe.cloneElement = function(m, M, X) {
    if (m == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
    var ne = ce({}, m.props), se = m.key, re = m.ref, oe = m._owner;
    if (M != null) {
      if (M.ref !== void 0 && (re = M.ref, oe = Ce.current), M.key !== void 0 && (se = "" + M.key), m.type && m.type.defaultProps) var b = m.type.defaultProps;
      for (ke in M) we.call(M, ke) && !Te.hasOwnProperty(ke) && (ne[ke] = M[ke] === void 0 && b !== void 0 ? b[ke] : M[ke]);
    }
    var ke = arguments.length - 2;
    if (ke === 1) ne.children = X;
    else if (1 < ke) {
      b = Array(ke);
      for (var Ve = 0; Ve < ke; Ve++) b[Ve] = arguments[Ve + 2];
      ne.children = b;
    }
    return { $$typeof: u, type: m.type, key: se, ref: re, props: ne, _owner: oe };
  }, fe.createContext = function(m) {
    return m = { $$typeof: x, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, m.Provider = { $$typeof: S, _context: m }, m.Consumer = m;
  }, fe.createElement = pe, fe.createFactory = function(m) {
    var M = pe.bind(null, m);
    return M.type = m, M;
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(m) {
    return { $$typeof: N, render: m };
  }, fe.isValidElement = Me, fe.lazy = function(m) {
    return { $$typeof: B, _payload: { _status: -1, _result: m }, _init: De };
  }, fe.memo = function(m, M) {
    return { $$typeof: F, type: m, compare: M === void 0 ? null : M };
  }, fe.startTransition = function(m) {
    var M = P.transition;
    P.transition = {};
    try {
      m();
    } finally {
      P.transition = M;
    }
  }, fe.unstable_act = L, fe.useCallback = function(m, M) {
    return U.current.useCallback(m, M);
  }, fe.useContext = function(m) {
    return U.current.useContext(m);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(m) {
    return U.current.useDeferredValue(m);
  }, fe.useEffect = function(m, M) {
    return U.current.useEffect(m, M);
  }, fe.useId = function() {
    return U.current.useId();
  }, fe.useImperativeHandle = function(m, M, X) {
    return U.current.useImperativeHandle(m, M, X);
  }, fe.useInsertionEffect = function(m, M) {
    return U.current.useInsertionEffect(m, M);
  }, fe.useLayoutEffect = function(m, M) {
    return U.current.useLayoutEffect(m, M);
  }, fe.useMemo = function(m, M) {
    return U.current.useMemo(m, M);
  }, fe.useReducer = function(m, M, X) {
    return U.current.useReducer(m, M, X);
  }, fe.useRef = function(m) {
    return U.current.useRef(m);
  }, fe.useState = function(m) {
    return U.current.useState(m);
  }, fe.useSyncExternalStore = function(m, M, X) {
    return U.current.useSyncExternalStore(m, M, X);
  }, fe.useTransition = function() {
    return U.current.useTransition();
  }, fe.version = "18.3.1", fe;
}
var uc;
function Ou() {
  return uc || (uc = 1, Eu.exports = Rd()), Eu.exports;
}
var sc;
function Ld() {
  if (sc) return kl;
  sc = 1;
  var u = Ou(), s = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, g = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(N, z, F) {
    var B, I = {}, G = null, Z = null;
    F !== void 0 && (G = "" + F), z.key !== void 0 && (G = "" + z.key), z.ref !== void 0 && (Z = z.ref);
    for (B in z) h.call(z, B) && !S.hasOwnProperty(B) && (I[B] = z[B]);
    if (N && N.defaultProps) for (B in z = N.defaultProps, z) I[B] === void 0 && (I[B] = z[B]);
    return { $$typeof: s, type: N, key: G, ref: Z, props: I, _owner: g.current };
  }
  return kl.Fragment = a, kl.jsx = x, kl.jsxs = x, kl;
}
var ac;
function zd() {
  return ac || (ac = 1, xu.exports = Ld()), xu.exports;
}
var E = zd(), Ri = {}, Mu = { exports: {} }, ct = {}, Tu = { exports: {} }, _u = {};
var cc;
function Fd() {
  return cc || (cc = 1, (function(u) {
    function s(P, W) {
      var L = P.length;
      P.push(W);
      e: for (; 0 < L; ) {
        var m = L - 1 >>> 1, M = P[m];
        if (0 < g(M, W)) P[m] = W, P[L] = M, L = m;
        else break e;
      }
    }
    function a(P) {
      return P.length === 0 ? null : P[0];
    }
    function h(P) {
      if (P.length === 0) return null;
      var W = P[0], L = P.pop();
      if (L !== W) {
        P[0] = L;
        e: for (var m = 0, M = P.length, X = M >>> 1; m < X; ) {
          var ne = 2 * (m + 1) - 1, se = P[ne], re = ne + 1, oe = P[re];
          if (0 > g(se, L)) re < M && 0 > g(oe, se) ? (P[m] = oe, P[re] = L, m = re) : (P[m] = se, P[ne] = L, m = ne);
          else if (re < M && 0 > g(oe, L)) P[m] = oe, P[re] = L, m = re;
          else break e;
        }
      }
      return W;
    }
    function g(P, W) {
      var L = P.sortIndex - W.sortIndex;
      return L !== 0 ? L : P.id - W.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      u.unstable_now = function() {
        return S.now();
      };
    } else {
      var x = Date, N = x.now();
      u.unstable_now = function() {
        return x.now() - N;
      };
    }
    var z = [], F = [], B = 1, I = null, G = 3, Z = !1, ce = !1, te = !1, O = typeof setTimeout == "function" ? setTimeout : null, ve = typeof clearTimeout == "function" ? clearTimeout : null, Ee = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function me(P) {
      for (var W = a(F); W !== null; ) {
        if (W.callback === null) h(F);
        else if (W.startTime <= P) h(F), W.sortIndex = W.expirationTime, s(z, W);
        else break;
        W = a(F);
      }
    }
    function he(P) {
      if (te = !1, me(P), !ce) if (a(z) !== null) ce = !0, De(we);
      else {
        var W = a(F);
        W !== null && U(he, W.startTime - P);
      }
    }
    function we(P, W) {
      ce = !1, te && (te = !1, ve(pe), pe = -1), Z = !0;
      var L = G;
      try {
        for (me(W), I = a(z); I !== null && (!(I.expirationTime > W) || P && !Se()); ) {
          var m = I.callback;
          if (typeof m == "function") {
            I.callback = null, G = I.priorityLevel;
            var M = m(I.expirationTime <= W);
            W = u.unstable_now(), typeof M == "function" ? I.callback = M : I === a(z) && h(z), me(W);
          } else h(z);
          I = a(z);
        }
        if (I !== null) var X = !0;
        else {
          var ne = a(F);
          ne !== null && U(he, ne.startTime - W), X = !1;
        }
        return X;
      } finally {
        I = null, G = L, Z = !1;
      }
    }
    var Ce = !1, Te = null, pe = -1, ee = 5, Me = -1;
    function Se() {
      return !(u.unstable_now() - Me < ee);
    }
    function lt() {
      if (Te !== null) {
        var P = u.unstable_now();
        Me = P;
        var W = !0;
        try {
          W = Te(!0, P);
        } finally {
          W ? Le() : (Ce = !1, Te = null);
        }
      } else Ce = !1;
    }
    var Le;
    if (typeof Ee == "function") Le = function() {
      Ee(lt);
    };
    else if (typeof MessageChannel < "u") {
      var Ue = new MessageChannel(), $e = Ue.port2;
      Ue.port1.onmessage = lt, Le = function() {
        $e.postMessage(null);
      };
    } else Le = function() {
      O(lt, 0);
    };
    function De(P) {
      Te = P, Ce || (Ce = !0, Le());
    }
    function U(P, W) {
      pe = O(function() {
        P(u.unstable_now());
      }, W);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, u.unstable_continueExecution = function() {
      ce || Z || (ce = !0, De(we));
    }, u.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < P ? Math.floor(1e3 / P) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, u.unstable_getFirstCallbackNode = function() {
      return a(z);
    }, u.unstable_next = function(P) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = G;
      }
      var L = G;
      G = W;
      try {
        return P();
      } finally {
        G = L;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(P, W) {
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
      var L = G;
      G = P;
      try {
        return W();
      } finally {
        G = L;
      }
    }, u.unstable_scheduleCallback = function(P, W, L) {
      var m = u.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? m + L : m) : L = m, P) {
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
      return M = L + M, P = { id: B++, callback: W, priorityLevel: P, startTime: L, expirationTime: M, sortIndex: -1 }, L > m ? (P.sortIndex = L, s(F, P), a(z) === null && P === a(F) && (te ? (ve(pe), pe = -1) : te = !0, U(he, L - m))) : (P.sortIndex = M, s(z, P), ce || Z || (ce = !0, De(we))), P;
    }, u.unstable_shouldYield = Se, u.unstable_wrapCallback = function(P) {
      var W = G;
      return function() {
        var L = G;
        G = W;
        try {
          return P.apply(this, arguments);
        } finally {
          G = L;
        }
      };
    };
  })(_u)), _u;
}
var fc;
function Od() {
  return fc || (fc = 1, Tu.exports = Fd()), Tu.exports;
}
var dc;
function Id() {
  if (dc) return ct;
  dc = 1;
  var u = Ou(), s = Od();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = /* @__PURE__ */ new Set(), g = {};
  function S(e, t) {
    x(e, t), x(e + "Capture", t);
  }
  function x(e, t) {
    for (g[e] = t, e = 0; e < t.length; e++) h.add(t[e]);
  }
  var N = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), z = Object.prototype.hasOwnProperty, F = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, I = {};
  function G(e) {
    return z.call(I, e) ? !0 : z.call(B, e) ? !1 : F.test(e) ? I[e] = !0 : (B[e] = !0, !1);
  }
  function Z(e, t, n, r) {
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
  function ce(e, t, n, r) {
    if (t === null || typeof t > "u" || Z(e, t, n, r)) return !0;
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
  function te(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    O[e] = new te(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    O[t] = new te(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    O[e] = new te(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    O[e] = new te(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    O[e] = new te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    O[e] = new te(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    O[e] = new te(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    O[e] = new te(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    O[e] = new te(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ve = /[\-:]([a-z])/g;
  function Ee(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      ve,
      Ee
    );
    O[t] = new te(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ve, Ee);
    O[t] = new te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ve, Ee);
    O[t] = new te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    O[e] = new te(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), O.xlinkHref = new te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    O[e] = new te(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function me(e, t, n, r) {
    var l = O.hasOwnProperty(t) ? O[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ce(t, n, l, r) && (n = null), r || l === null ? G(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var he = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, we = /* @__PURE__ */ Symbol.for("react.element"), Ce = /* @__PURE__ */ Symbol.for("react.portal"), Te = /* @__PURE__ */ Symbol.for("react.fragment"), pe = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), Me = /* @__PURE__ */ Symbol.for("react.provider"), Se = /* @__PURE__ */ Symbol.for("react.context"), lt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Le = /* @__PURE__ */ Symbol.for("react.suspense"), Ue = /* @__PURE__ */ Symbol.for("react.suspense_list"), $e = /* @__PURE__ */ Symbol.for("react.memo"), De = /* @__PURE__ */ Symbol.for("react.lazy"), U = /* @__PURE__ */ Symbol.for("react.offscreen"), P = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = P && e[P] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var L = Object.assign, m;
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
  var X = !1;
  function ne(e, t) {
    if (!e || X) return "";
    X = !0;
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
        for (var l = k.stack.split(`
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
      X = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function se(e) {
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
        return e = ne(e.type, !1), e;
      case 11:
        return e = ne(e.type.render, !1), e;
      case 1:
        return e = ne(e.type, !0), e;
      default:
        return "";
    }
  }
  function re(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Te:
        return "Fragment";
      case Ce:
        return "Portal";
      case ee:
        return "Profiler";
      case pe:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Ue:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Se:
        return (e.displayName || "Context") + ".Consumer";
      case Me:
        return (e._context.displayName || "Context") + ".Provider";
      case lt:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case $e:
        return t = e.displayName || null, t !== null ? t : re(e.type) || "Memo";
      case De:
        t = e._payload, e = e._init;
        try {
          return re(e(t));
        } catch {
        }
    }
    return null;
  }
  function oe(e) {
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
        return re(t);
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
  function b(e) {
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
  function ke(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ve(e) {
    var t = ke(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function ht(e) {
    e._valueTracker || (e._valueTracker = Ve(e));
  }
  function qn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ke(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function bn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Pr(e, t) {
    var n = t.checked;
    return L({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function El(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = b(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function jr(e, t) {
    t = t.checked, t != null && me(e, "checked", t, !1);
  }
  function Rr(e, t) {
    jr(e, t);
    var n = b(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? jn(e, t.type, n) : t.hasOwnProperty("defaultValue") && jn(e, t.type, b(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function bt(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function jn(e, t, n) {
    (t !== "number" || bn(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ae = Array.isArray;
  function $t(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + b(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Rn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return L({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Lr(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(a(92));
        if (ae(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: b(n) };
  }
  function zr(e, t) {
    var n = b(t.value), r = b(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function yt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Fr(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function er(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Fr(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var tr, en = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (tr = tr || document.createElement("div"), tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = tr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function tn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var nn = {
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
  }, Ln = ["Webkit", "ms", "Moz", "O"];
  Object.keys(nn).forEach(function(e) {
    Ln.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), nn[t] = nn[e];
    });
  });
  function Lt(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nn.hasOwnProperty(e) && nn[e] ? ("" + t).trim() : t + "px";
  }
  function rn(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Lt(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var nr = L({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function rr(e, t) {
    if (t) {
      if (nr[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function zn(e, t) {
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
  var Or = null;
  function ln(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var on = null, zt = null, Vt = null;
  function Ir(e) {
    if (e = ll(e)) {
      if (typeof on != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = Kl(t), on(e.stateNode, e.type, t));
    }
  }
  function Dr(e) {
    zt ? Vt ? Vt.push(e) : Vt = [e] : zt = e;
  }
  function lr() {
    if (zt) {
      var e = zt, t = Vt;
      if (Vt = zt = null, Ir(e), t) for (e = 0; e < t.length; e++) Ir(t[e]);
    }
  }
  function ir(e, t) {
    return e(t);
  }
  function Ml() {
  }
  var Wt = !1;
  function un(e, t, n) {
    if (Wt) return e(t, n);
    Wt = !0;
    try {
      return ir(e, t, n);
    } finally {
      Wt = !1, (zt !== null || Vt !== null) && (Ml(), lr());
    }
  }
  function Bt(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Kl(n);
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
  var Ht = !1;
  if (N) try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", { get: function() {
      Ht = !0;
    } }), window.addEventListener("test", Fn, Fn), window.removeEventListener("test", Fn, Fn);
  } catch {
    Ht = !1;
  }
  function Ai(e, t, n, r, l, i, o, f, d) {
    var k = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, k);
    } catch (_) {
      this.onError(_);
    }
  }
  var sn = !1, On = null, an = !1, Ar = null, Ui = { onError: function(e) {
    sn = !0, On = e;
  } };
  function $i(e, t, n, r, l, i, o, f, d) {
    sn = !1, On = null, Ai.apply(Ui, arguments);
  }
  function Tl(e, t, n, r, l, i, o, f, d) {
    if ($i.apply(this, arguments), sn) {
      if (sn) {
        var k = On;
        sn = !1, On = null;
      } else throw Error(a(198));
      an || (an = !0, Ar = k);
    }
  }
  function Je(e) {
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
  function Ur(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function _l(e) {
    if (Je(e) !== e) throw Error(a(188));
  }
  function c(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Je(e), t === null) throw Error(a(188));
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
          if (i === n) return _l(l), e;
          if (i === r) return _l(l), t;
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
  function w(e) {
    return e = c(e), e !== null ? R(e) : null;
  }
  function R(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = R(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Y = s.unstable_scheduleCallback, Q = s.unstable_cancelCallback, de = s.unstable_shouldYield, ue = s.unstable_requestPaint, ie = s.unstable_now, Ne = s.unstable_getCurrentPriorityLevel, Qe = s.unstable_ImmediatePriority, ze = s.unstable_UserBlockingPriority, In = s.unstable_NormalPriority, Vi = s.unstable_LowPriority, Iu = s.unstable_IdlePriority, Cl = null, Ft = null;
  function Qc(e) {
    if (Ft && typeof Ft.onCommitFiberRoot == "function") try {
      Ft.onCommitFiberRoot(Cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Tt = Math.clz32 ? Math.clz32 : Xc, Kc = Math.log, Yc = Math.LN2;
  function Xc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Kc(e) / Yc | 0) | 0;
  }
  var Nl = 64, Pl = 4194304;
  function $r(e) {
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
  function jl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var f = o & ~l;
      f !== 0 ? r = $r(f) : (i &= o, i !== 0 && (r = $r(i)));
    } else o = n & ~l, o !== 0 ? r = $r(o) : i !== 0 && (r = $r(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Tt(t), l = 1 << n, r |= e[n], t &= ~l;
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
  function Zc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - Tt(i), f = 1 << o, d = l[o];
      d === -1 ? ((f & n) === 0 || (f & r) !== 0) && (l[o] = Gc(f, t)) : d <= t && (e.expiredLanes |= f), i &= ~f;
    }
  }
  function Wi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Du() {
    var e = Nl;
    return Nl <<= 1, (Nl & 4194240) === 0 && (Nl = 64), e;
  }
  function Bi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Tt(t), e[t] = n;
  }
  function Jc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Tt(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function Hi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Tt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var xe = 0;
  function Au(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Uu, Qi, $u, Vu, Wu, Ki = !1, Rl = [], cn = null, fn = null, dn = null, Wr = /* @__PURE__ */ new Map(), Br = /* @__PURE__ */ new Map(), pn = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Bu(e, t) {
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
        Wr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Br.delete(t.pointerId);
    }
  }
  function Hr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = ll(t), t !== null && Qi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function bc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return cn = Hr(cn, e, t, n, r, l), !0;
      case "dragenter":
        return fn = Hr(fn, e, t, n, r, l), !0;
      case "mouseover":
        return dn = Hr(dn, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Wr.set(i, Hr(Wr.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, Br.set(i, Hr(Br.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function Hu(e) {
    var t = Dn(e.target);
    if (t !== null) {
      var n = Je(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ur(n), t !== null) {
            e.blockedOn = t, Wu(e.priority, function() {
              $u(n);
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
  function Ll(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Xi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Or = r, n.target.dispatchEvent(r), Or = null;
      } else return t = ll(n), t !== null && Qi(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Qu(e, t, n) {
    Ll(e) && n.delete(t);
  }
  function ef() {
    Ki = !1, cn !== null && Ll(cn) && (cn = null), fn !== null && Ll(fn) && (fn = null), dn !== null && Ll(dn) && (dn = null), Wr.forEach(Qu), Br.forEach(Qu);
  }
  function Qr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ki || (Ki = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, ef)));
  }
  function Kr(e) {
    function t(l) {
      return Qr(l, e);
    }
    if (0 < Rl.length) {
      Qr(Rl[0], e);
      for (var n = 1; n < Rl.length; n++) {
        var r = Rl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (cn !== null && Qr(cn, e), fn !== null && Qr(fn, e), dn !== null && Qr(dn, e), Wr.forEach(t), Br.forEach(t), n = 0; n < pn.length; n++) r = pn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < pn.length && (n = pn[0], n.blockedOn === null); ) Hu(n), n.blockedOn === null && pn.shift();
  }
  var or = he.ReactCurrentBatchConfig, zl = !0;
  function tf(e, t, n, r) {
    var l = xe, i = or.transition;
    or.transition = null;
    try {
      xe = 1, Yi(e, t, n, r);
    } finally {
      xe = l, or.transition = i;
    }
  }
  function nf(e, t, n, r) {
    var l = xe, i = or.transition;
    or.transition = null;
    try {
      xe = 4, Yi(e, t, n, r);
    } finally {
      xe = l, or.transition = i;
    }
  }
  function Yi(e, t, n, r) {
    if (zl) {
      var l = Xi(e, t, n, r);
      if (l === null) fo(e, t, r, Fl, n), Bu(e, r);
      else if (bc(l, e, t, n, r)) r.stopPropagation();
      else if (Bu(e, r), t & 4 && -1 < qc.indexOf(e)) {
        for (; l !== null; ) {
          var i = ll(l);
          if (i !== null && Uu(i), i = Xi(e, t, n, r), i === null && fo(e, t, r, Fl, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else fo(e, t, r, null, n);
    }
  }
  var Fl = null;
  function Xi(e, t, n, r) {
    if (Fl = null, e = ln(r), e = Dn(e), e !== null) if (t = Je(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ur(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Fl = e, null;
  }
  function Ku(e) {
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
        switch (Ne()) {
          case Qe:
            return 1;
          case ze:
            return 4;
          case In:
          case Vi:
            return 16;
          case Iu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mn = null, Gi = null, Ol = null;
  function Yu() {
    if (Ol) return Ol;
    var e, t = Gi, n = t.length, r, l = "value" in mn ? mn.value : mn.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
    return Ol = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Il(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Dl() {
    return !0;
  }
  function Xu() {
    return !1;
  }
  function ft(e) {
    function t(n, r, l, i, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Dl : Xu, this.isPropagationStopped = Xu, this;
    }
    return L(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Dl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Dl);
    }, persist: function() {
    }, isPersistent: Dl }), t;
  }
  var ur = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Zi = ft(ur), Yr = L({}, ur, { view: 0, detail: 0 }), rf = ft(Yr), Ji, qi, Xr, Al = L({}, Yr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: eo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Xr && (Xr && e.type === "mousemove" ? (Ji = e.screenX - Xr.screenX, qi = e.screenY - Xr.screenY) : qi = Ji = 0, Xr = e), Ji);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : qi;
  } }), Gu = ft(Al), lf = L({}, Al, { dataTransfer: 0 }), of = ft(lf), uf = L({}, Yr, { relatedTarget: 0 }), bi = ft(uf), sf = L({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), af = ft(sf), cf = L({}, ur, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), ff = ft(cf), df = L({}, ur, { data: 0 }), Zu = ft(df), pf = {
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
  }, mf = {
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
  function yf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = hf[e]) ? !!t[e] : !1;
  }
  function eo() {
    return yf;
  }
  var vf = L({}, Yr, { key: function(e) {
    if (e.key) {
      var t = pf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Il(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: eo, charCode: function(e) {
    return e.type === "keypress" ? Il(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), gf = ft(vf), kf = L({}, Al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ju = ft(kf), wf = L({}, Yr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: eo }), Sf = ft(wf), xf = L({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ef = ft(xf), Mf = L({}, Al, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Tf = ft(Mf), _f = [9, 13, 27, 32], to = N && "CompositionEvent" in window, Gr = null;
  N && "documentMode" in document && (Gr = document.documentMode);
  var Cf = N && "TextEvent" in window && !Gr, qu = N && (!to || Gr && 8 < Gr && 11 >= Gr), bu = " ", es = !1;
  function ts(e, t) {
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
  function ns(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var sr = !1;
  function Nf(e, t) {
    switch (e) {
      case "compositionend":
        return ns(t);
      case "keypress":
        return t.which !== 32 ? null : (es = !0, bu);
      case "textInput":
        return e = t.data, e === bu && es ? null : e;
      default:
        return null;
    }
  }
  function Pf(e, t) {
    if (sr) return e === "compositionend" || !to && ts(e, t) ? (e = Yu(), Ol = Gi = mn = null, sr = !1, e) : null;
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
        return qu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var jf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function rs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jf[e.type] : t === "textarea";
  }
  function ls(e, t, n, r) {
    Dr(r), t = Bl(t, "onChange"), 0 < t.length && (n = new Zi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Zr = null, Jr = null;
  function Rf(e) {
    xs(e, 0);
  }
  function Ul(e) {
    var t = pr(e);
    if (qn(t)) return e;
  }
  function Lf(e, t) {
    if (e === "change") return t;
  }
  var is = !1;
  if (N) {
    var no;
    if (N) {
      var ro = "oninput" in document;
      if (!ro) {
        var os = document.createElement("div");
        os.setAttribute("oninput", "return;"), ro = typeof os.oninput == "function";
      }
      no = ro;
    } else no = !1;
    is = no && (!document.documentMode || 9 < document.documentMode);
  }
  function us() {
    Zr && (Zr.detachEvent("onpropertychange", ss), Jr = Zr = null);
  }
  function ss(e) {
    if (e.propertyName === "value" && Ul(Jr)) {
      var t = [];
      ls(t, Jr, e, ln(e)), un(Rf, t);
    }
  }
  function zf(e, t, n) {
    e === "focusin" ? (us(), Zr = t, Jr = n, Zr.attachEvent("onpropertychange", ss)) : e === "focusout" && us();
  }
  function Ff(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ul(Jr);
  }
  function Of(e, t) {
    if (e === "click") return Ul(t);
  }
  function If(e, t) {
    if (e === "input" || e === "change") return Ul(t);
  }
  function Df(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var _t = typeof Object.is == "function" ? Object.is : Df;
  function qr(e, t) {
    if (_t(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!z.call(t, l) || !_t(e[l], t[l])) return !1;
    }
    return !0;
  }
  function as(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function cs(e, t) {
    var n = as(e);
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
      n = as(n);
    }
  }
  function fs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ds() {
    for (var e = window, t = bn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = bn(e.document);
    }
    return t;
  }
  function lo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Af(e) {
    var t = ds(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && fs(n.ownerDocument.documentElement, n)) {
      if (r !== null && lo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = cs(n, i);
          var o = cs(
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
  var Uf = N && "documentMode" in document && 11 >= document.documentMode, ar = null, io = null, br = null, oo = !1;
  function ps(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    oo || ar == null || ar !== bn(r) || (r = ar, "selectionStart" in r && lo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), br && qr(br, r) || (br = r, r = Bl(io, "onSelect"), 0 < r.length && (t = new Zi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ar)));
  }
  function $l(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var cr = { animationend: $l("Animation", "AnimationEnd"), animationiteration: $l("Animation", "AnimationIteration"), animationstart: $l("Animation", "AnimationStart"), transitionend: $l("Transition", "TransitionEnd") }, uo = {}, ms = {};
  N && (ms = document.createElement("div").style, "AnimationEvent" in window || (delete cr.animationend.animation, delete cr.animationiteration.animation, delete cr.animationstart.animation), "TransitionEvent" in window || delete cr.transitionend.transition);
  function Vl(e) {
    if (uo[e]) return uo[e];
    if (!cr[e]) return e;
    var t = cr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ms) return uo[e] = t[n];
    return e;
  }
  var hs = Vl("animationend"), ys = Vl("animationiteration"), vs = Vl("animationstart"), gs = Vl("transitionend"), ks = /* @__PURE__ */ new Map(), ws = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function hn(e, t) {
    ks.set(e, t), S(t, [e]);
  }
  for (var so = 0; so < ws.length; so++) {
    var ao = ws[so], $f = ao.toLowerCase(), Vf = ao[0].toUpperCase() + ao.slice(1);
    hn($f, "on" + Vf);
  }
  hn(hs, "onAnimationEnd"), hn(ys, "onAnimationIteration"), hn(vs, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(gs, "onTransitionEnd"), x("onMouseEnter", ["mouseout", "mouseover"]), x("onMouseLeave", ["mouseout", "mouseover"]), x("onPointerEnter", ["pointerout", "pointerover"]), x("onPointerLeave", ["pointerout", "pointerover"]), S("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), S("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), S("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), S("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var el = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(el));
  function Ss(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Tl(r, t, void 0, e), e.currentTarget = null;
  }
  function xs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var f = r[o], d = f.instance, k = f.currentTarget;
          if (f = f.listener, d !== i && l.isPropagationStopped()) break e;
          Ss(l, f, k), i = d;
        }
        else for (o = 0; o < r.length; o++) {
          if (f = r[o], d = f.instance, k = f.currentTarget, f = f.listener, d !== i && l.isPropagationStopped()) break e;
          Ss(l, f, k), i = d;
        }
      }
    }
    if (an) throw e = Ar, an = !1, Ar = null, e;
  }
  function Pe(e, t) {
    var n = t[go];
    n === void 0 && (n = t[go] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Es(t, e, 2, !1), n.add(r));
  }
  function co(e, t, n) {
    var r = 0;
    t && (r |= 4), Es(n, e, r, t);
  }
  var Wl = "_reactListening" + Math.random().toString(36).slice(2);
  function tl(e) {
    if (!e[Wl]) {
      e[Wl] = !0, h.forEach(function(n) {
        n !== "selectionchange" && (Wf.has(n) || co(n, !1, e), co(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wl] || (t[Wl] = !0, co("selectionchange", !1, t));
    }
  }
  function Es(e, t, n, r) {
    switch (Ku(t)) {
      case 1:
        var l = tf;
        break;
      case 4:
        l = nf;
        break;
      default:
        l = Yi;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ht || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function fo(e, t, n, r, l) {
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
          if (o = Dn(f), o === null) return;
          if (d = o.tag, d === 5 || d === 6) {
            r = i = o;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    un(function() {
      var k = i, _ = ln(n), C = [];
      e: {
        var T = ks.get(e);
        if (T !== void 0) {
          var D = Zi, $ = e;
          switch (e) {
            case "keypress":
              if (Il(n) === 0) break e;
            case "keydown":
            case "keyup":
              D = gf;
              break;
            case "focusin":
              $ = "focus", D = bi;
              break;
            case "focusout":
              $ = "blur", D = bi;
              break;
            case "beforeblur":
            case "afterblur":
              D = bi;
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
              D = Gu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = of;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = Sf;
              break;
            case hs:
            case ys:
            case vs:
              D = af;
              break;
            case gs:
              D = Ef;
              break;
            case "scroll":
              D = rf;
              break;
            case "wheel":
              D = Tf;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = ff;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Ju;
          }
          var H = (t & 4) !== 0, Ae = !H && e === "scroll", y = H ? T !== null ? T + "Capture" : null : T;
          H = [];
          for (var p = k, v; p !== null; ) {
            v = p;
            var j = v.stateNode;
            if (v.tag === 5 && j !== null && (v = j, y !== null && (j = Bt(p, y), j != null && H.push(nl(p, j, v)))), Ae) break;
            p = p.return;
          }
          0 < H.length && (T = new D(T, $, null, n, _), C.push({ event: T, listeners: H }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (T = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", T && n !== Or && ($ = n.relatedTarget || n.fromElement) && (Dn($) || $[Qt])) break e;
          if ((D || T) && (T = _.window === _ ? _ : (T = _.ownerDocument) ? T.defaultView || T.parentWindow : window, D ? ($ = n.relatedTarget || n.toElement, D = k, $ = $ ? Dn($) : null, $ !== null && (Ae = Je($), $ !== Ae || $.tag !== 5 && $.tag !== 6) && ($ = null)) : (D = null, $ = k), D !== $)) {
            if (H = Gu, j = "onMouseLeave", y = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (H = Ju, j = "onPointerLeave", y = "onPointerEnter", p = "pointer"), Ae = D == null ? T : pr(D), v = $ == null ? T : pr($), T = new H(j, p + "leave", D, n, _), T.target = Ae, T.relatedTarget = v, j = null, Dn(_) === k && (H = new H(y, p + "enter", $, n, _), H.target = v, H.relatedTarget = Ae, j = H), Ae = j, D && $) t: {
              for (H = D, y = $, p = 0, v = H; v; v = fr(v)) p++;
              for (v = 0, j = y; j; j = fr(j)) v++;
              for (; 0 < p - v; ) H = fr(H), p--;
              for (; 0 < v - p; ) y = fr(y), v--;
              for (; p--; ) {
                if (H === y || y !== null && H === y.alternate) break t;
                H = fr(H), y = fr(y);
              }
              H = null;
            }
            else H = null;
            D !== null && Ms(C, T, D, H, !1), $ !== null && Ae !== null && Ms(C, Ae, $, H, !0);
          }
        }
        e: {
          if (T = k ? pr(k) : window, D = T.nodeName && T.nodeName.toLowerCase(), D === "select" || D === "input" && T.type === "file") var K = Lf;
          else if (rs(T)) if (is) K = If;
          else {
            K = Ff;
            var J = zf;
          }
          else (D = T.nodeName) && D.toLowerCase() === "input" && (T.type === "checkbox" || T.type === "radio") && (K = Of);
          if (K && (K = K(e, k))) {
            ls(C, K, n, _);
            break e;
          }
          J && J(e, T, k), e === "focusout" && (J = T._wrapperState) && J.controlled && T.type === "number" && jn(T, "number", T.value);
        }
        switch (J = k ? pr(k) : window, e) {
          case "focusin":
            (rs(J) || J.contentEditable === "true") && (ar = J, io = k, br = null);
            break;
          case "focusout":
            br = io = ar = null;
            break;
          case "mousedown":
            oo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            oo = !1, ps(C, n, _);
            break;
          case "selectionchange":
            if (Uf) break;
          case "keydown":
          case "keyup":
            ps(C, n, _);
        }
        var q;
        if (to) e: {
          switch (e) {
            case "compositionstart":
              var le = "onCompositionStart";
              break e;
            case "compositionend":
              le = "onCompositionEnd";
              break e;
            case "compositionupdate":
              le = "onCompositionUpdate";
              break e;
          }
          le = void 0;
        }
        else sr ? ts(e, n) && (le = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (le = "onCompositionStart");
        le && (qu && n.locale !== "ko" && (sr || le !== "onCompositionStart" ? le === "onCompositionEnd" && sr && (q = Yu()) : (mn = _, Gi = "value" in mn ? mn.value : mn.textContent, sr = !0)), J = Bl(k, le), 0 < J.length && (le = new Zu(le, e, null, n, _), C.push({ event: le, listeners: J }), q ? le.data = q : (q = ns(n), q !== null && (le.data = q)))), (q = Cf ? Nf(e, n) : Pf(e, n)) && (k = Bl(k, "onBeforeInput"), 0 < k.length && (_ = new Zu("onBeforeInput", "beforeinput", null, n, _), C.push({ event: _, listeners: k }), _.data = q));
      }
      xs(C, t);
    });
  }
  function nl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Bl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = Bt(e, n), i != null && r.unshift(nl(e, i, l)), i = Bt(e, t), i != null && r.push(nl(e, i, l))), e = e.return;
    }
    return r;
  }
  function fr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ms(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var f = n, d = f.alternate, k = f.stateNode;
      if (d !== null && d === r) break;
      f.tag === 5 && k !== null && (f = k, l ? (d = Bt(n, i), d != null && o.unshift(nl(n, d, f))) : l || (d = Bt(n, i), d != null && o.push(nl(n, d, f)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Bf = /\r\n?/g, Hf = /\u0000|\uFFFD/g;
  function Ts(e) {
    return (typeof e == "string" ? e : "" + e).replace(Bf, `
`).replace(Hf, "");
  }
  function Hl(e, t, n) {
    if (t = Ts(t), Ts(e) !== t && n) throw Error(a(425));
  }
  function Ql() {
  }
  var po = null, mo = null;
  function ho(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var yo = typeof setTimeout == "function" ? setTimeout : void 0, Qf = typeof clearTimeout == "function" ? clearTimeout : void 0, _s = typeof Promise == "function" ? Promise : void 0, Kf = typeof queueMicrotask == "function" ? queueMicrotask : typeof _s < "u" ? function(e) {
    return _s.resolve(null).then(e).catch(Yf);
  } : yo;
  function Yf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function vo(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Kr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Kr(t);
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
  function Cs(e) {
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
  var dr = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + dr, rl = "__reactProps$" + dr, Qt = "__reactContainer$" + dr, go = "__reactEvents$" + dr, Xf = "__reactListeners$" + dr, Gf = "__reactHandles$" + dr;
  function Dn(e) {
    var t = e[Ot];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Qt] || n[Ot]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Cs(e); e !== null; ) {
          if (n = e[Ot]) return n;
          e = Cs(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ll(e) {
    return e = e[Ot] || e[Qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function pr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Kl(e) {
    return e[rl] || null;
  }
  var ko = [], mr = -1;
  function vn(e) {
    return { current: e };
  }
  function je(e) {
    0 > mr || (e.current = ko[mr], ko[mr] = null, mr--);
  }
  function _e(e, t) {
    mr++, ko[mr] = e.current, e.current = t;
  }
  var gn = {}, qe = vn(gn), it = vn(!1), An = gn;
  function hr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return gn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function ot(e) {
    return e = e.childContextTypes, e != null;
  }
  function Yl() {
    je(it), je(qe);
  }
  function Ns(e, t, n) {
    if (qe.current !== gn) throw Error(a(168));
    _e(qe, t), _e(it, n);
  }
  function Ps(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, oe(e) || "Unknown", l));
    return L({}, n, r);
  }
  function Xl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gn, An = qe.current, _e(qe, e), _e(it, it.current), !0;
  }
  function js(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n ? (e = Ps(e, t, An), r.__reactInternalMemoizedMergedChildContext = e, je(it), je(qe), _e(qe, e)) : je(it), _e(it, n);
  }
  var Kt = null, Gl = !1, wo = !1;
  function Rs(e) {
    Kt === null ? Kt = [e] : Kt.push(e);
  }
  function Zf(e) {
    Gl = !0, Rs(e);
  }
  function kn() {
    if (!wo && Kt !== null) {
      wo = !0;
      var e = 0, t = xe;
      try {
        var n = Kt;
        for (xe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Kt = null, Gl = !1;
      } catch (l) {
        throw Kt !== null && (Kt = Kt.slice(e + 1)), Y(Qe, kn), l;
      } finally {
        xe = t, wo = !1;
      }
    }
    return null;
  }
  var yr = [], vr = 0, Zl = null, Jl = 0, vt = [], gt = 0, Un = null, Yt = 1, Xt = "";
  function $n(e, t) {
    yr[vr++] = Jl, yr[vr++] = Zl, Zl = e, Jl = t;
  }
  function Ls(e, t, n) {
    vt[gt++] = Yt, vt[gt++] = Xt, vt[gt++] = Un, Un = e;
    var r = Yt;
    e = Xt;
    var l = 32 - Tt(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - Tt(t) + l;
    if (30 < i) {
      var o = l - l % 5;
      i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Yt = 1 << 32 - Tt(t) + l | n << l | r, Xt = i + e;
    } else Yt = 1 << i | n << l | r, Xt = e;
  }
  function So(e) {
    e.return !== null && ($n(e, 1), Ls(e, 1, 0));
  }
  function xo(e) {
    for (; e === Zl; ) Zl = yr[--vr], yr[vr] = null, Jl = yr[--vr], yr[vr] = null;
    for (; e === Un; ) Un = vt[--gt], vt[gt] = null, Xt = vt[--gt], vt[gt] = null, Yt = vt[--gt], vt[gt] = null;
  }
  var dt = null, pt = null, Re = !1, Ct = null;
  function zs(e, t) {
    var n = xt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Fs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, dt = e, pt = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, dt = e, pt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Un !== null ? { id: Yt, overflow: Xt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = xt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, dt = e, pt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Eo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Mo(e) {
    if (Re) {
      var t = pt;
      if (t) {
        var n = t;
        if (!Fs(e, t)) {
          if (Eo(e)) throw Error(a(418));
          t = yn(n.nextSibling);
          var r = dt;
          t && Fs(e, t) ? zs(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, dt = e);
        }
      } else {
        if (Eo(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, Re = !1, dt = e;
      }
    }
  }
  function Os(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    dt = e;
  }
  function ql(e) {
    if (e !== dt) return !1;
    if (!Re) return Os(e), Re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ho(e.type, e.memoizedProps)), t && (t = pt)) {
      if (Eo(e)) throw Is(), Error(a(418));
      for (; t; ) zs(e, t), t = yn(t.nextSibling);
    }
    if (Os(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                pt = yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        pt = null;
      }
    } else pt = dt ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Is() {
    for (var e = pt; e; ) e = yn(e.nextSibling);
  }
  function gr() {
    pt = dt = null, Re = !1;
  }
  function To(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  var Jf = he.ReactCurrentBatchConfig;
  function il(e, t, n) {
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
  function bl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ds(e) {
    var t = e._init;
    return t(e._payload);
  }
  function As(e) {
    function t(y, p) {
      if (e) {
        var v = y.deletions;
        v === null ? (y.deletions = [p], y.flags |= 16) : v.push(p);
      }
    }
    function n(y, p) {
      if (!e) return null;
      for (; p !== null; ) t(y, p), p = p.sibling;
      return null;
    }
    function r(y, p) {
      for (y = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? y.set(p.key, p) : y.set(p.index, p), p = p.sibling;
      return y;
    }
    function l(y, p) {
      return y = Cn(y, p), y.index = 0, y.sibling = null, y;
    }
    function i(y, p, v) {
      return y.index = v, e ? (v = y.alternate, v !== null ? (v = v.index, v < p ? (y.flags |= 2, p) : v) : (y.flags |= 2, p)) : (y.flags |= 1048576, p);
    }
    function o(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function f(y, p, v, j) {
      return p === null || p.tag !== 6 ? (p = yu(v, y.mode, j), p.return = y, p) : (p = l(p, v), p.return = y, p);
    }
    function d(y, p, v, j) {
      var K = v.type;
      return K === Te ? _(y, p, v.props.children, j, v.key) : p !== null && (p.elementType === K || typeof K == "object" && K !== null && K.$$typeof === De && Ds(K) === p.type) ? (j = l(p, v.props), j.ref = il(y, p, v), j.return = y, j) : (j = Ei(v.type, v.key, v.props, null, y.mode, j), j.ref = il(y, p, v), j.return = y, j);
    }
    function k(y, p, v, j) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = vu(v, y.mode, j), p.return = y, p) : (p = l(p, v.children || []), p.return = y, p);
    }
    function _(y, p, v, j, K) {
      return p === null || p.tag !== 7 ? (p = Xn(v, y.mode, j, K), p.return = y, p) : (p = l(p, v), p.return = y, p);
    }
    function C(y, p, v) {
      if (typeof p == "string" && p !== "" || typeof p == "number") return p = yu("" + p, y.mode, v), p.return = y, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case we:
            return v = Ei(p.type, p.key, p.props, null, y.mode, v), v.ref = il(y, null, p), v.return = y, v;
          case Ce:
            return p = vu(p, y.mode, v), p.return = y, p;
          case De:
            var j = p._init;
            return C(y, j(p._payload), v);
        }
        if (ae(p) || W(p)) return p = Xn(p, y.mode, v, null), p.return = y, p;
        bl(y, p);
      }
      return null;
    }
    function T(y, p, v, j) {
      var K = p !== null ? p.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number") return K !== null ? null : f(y, p, "" + v, j);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case we:
            return v.key === K ? d(y, p, v, j) : null;
          case Ce:
            return v.key === K ? k(y, p, v, j) : null;
          case De:
            return K = v._init, T(
              y,
              p,
              K(v._payload),
              j
            );
        }
        if (ae(v) || W(v)) return K !== null ? null : _(y, p, v, j, null);
        bl(y, v);
      }
      return null;
    }
    function D(y, p, v, j, K) {
      if (typeof j == "string" && j !== "" || typeof j == "number") return y = y.get(v) || null, f(p, y, "" + j, K);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case we:
            return y = y.get(j.key === null ? v : j.key) || null, d(p, y, j, K);
          case Ce:
            return y = y.get(j.key === null ? v : j.key) || null, k(p, y, j, K);
          case De:
            var J = j._init;
            return D(y, p, v, J(j._payload), K);
        }
        if (ae(j) || W(j)) return y = y.get(v) || null, _(p, y, j, K, null);
        bl(p, j);
      }
      return null;
    }
    function $(y, p, v, j) {
      for (var K = null, J = null, q = p, le = p = 0, Xe = null; q !== null && le < v.length; le++) {
        q.index > le ? (Xe = q, q = null) : Xe = q.sibling;
        var ge = T(y, q, v[le], j);
        if (ge === null) {
          q === null && (q = Xe);
          break;
        }
        e && q && ge.alternate === null && t(y, q), p = i(ge, p, le), J === null ? K = ge : J.sibling = ge, J = ge, q = Xe;
      }
      if (le === v.length) return n(y, q), Re && $n(y, le), K;
      if (q === null) {
        for (; le < v.length; le++) q = C(y, v[le], j), q !== null && (p = i(q, p, le), J === null ? K = q : J.sibling = q, J = q);
        return Re && $n(y, le), K;
      }
      for (q = r(y, q); le < v.length; le++) Xe = D(q, y, le, v[le], j), Xe !== null && (e && Xe.alternate !== null && q.delete(Xe.key === null ? le : Xe.key), p = i(Xe, p, le), J === null ? K = Xe : J.sibling = Xe, J = Xe);
      return e && q.forEach(function(Nn) {
        return t(y, Nn);
      }), Re && $n(y, le), K;
    }
    function H(y, p, v, j) {
      var K = W(v);
      if (typeof K != "function") throw Error(a(150));
      if (v = K.call(v), v == null) throw Error(a(151));
      for (var J = K = null, q = p, le = p = 0, Xe = null, ge = v.next(); q !== null && !ge.done; le++, ge = v.next()) {
        q.index > le ? (Xe = q, q = null) : Xe = q.sibling;
        var Nn = T(y, q, ge.value, j);
        if (Nn === null) {
          q === null && (q = Xe);
          break;
        }
        e && q && Nn.alternate === null && t(y, q), p = i(Nn, p, le), J === null ? K = Nn : J.sibling = Nn, J = Nn, q = Xe;
      }
      if (ge.done) return n(
        y,
        q
      ), Re && $n(y, le), K;
      if (q === null) {
        for (; !ge.done; le++, ge = v.next()) ge = C(y, ge.value, j), ge !== null && (p = i(ge, p, le), J === null ? K = ge : J.sibling = ge, J = ge);
        return Re && $n(y, le), K;
      }
      for (q = r(y, q); !ge.done; le++, ge = v.next()) ge = D(q, y, le, ge.value, j), ge !== null && (e && ge.alternate !== null && q.delete(ge.key === null ? le : ge.key), p = i(ge, p, le), J === null ? K = ge : J.sibling = ge, J = ge);
      return e && q.forEach(function(jd) {
        return t(y, jd);
      }), Re && $n(y, le), K;
    }
    function Ae(y, p, v, j) {
      if (typeof v == "object" && v !== null && v.type === Te && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case we:
            e: {
              for (var K = v.key, J = p; J !== null; ) {
                if (J.key === K) {
                  if (K = v.type, K === Te) {
                    if (J.tag === 7) {
                      n(y, J.sibling), p = l(J, v.props.children), p.return = y, y = p;
                      break e;
                    }
                  } else if (J.elementType === K || typeof K == "object" && K !== null && K.$$typeof === De && Ds(K) === J.type) {
                    n(y, J.sibling), p = l(J, v.props), p.ref = il(y, J, v), p.return = y, y = p;
                    break e;
                  }
                  n(y, J);
                  break;
                } else t(y, J);
                J = J.sibling;
              }
              v.type === Te ? (p = Xn(v.props.children, y.mode, j, v.key), p.return = y, y = p) : (j = Ei(v.type, v.key, v.props, null, y.mode, j), j.ref = il(y, p, v), j.return = y, y = j);
            }
            return o(y);
          case Ce:
            e: {
              for (J = v.key; p !== null; ) {
                if (p.key === J) if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                  n(y, p.sibling), p = l(p, v.children || []), p.return = y, y = p;
                  break e;
                } else {
                  n(y, p);
                  break;
                }
                else t(y, p);
                p = p.sibling;
              }
              p = vu(v, y.mode, j), p.return = y, y = p;
            }
            return o(y);
          case De:
            return J = v._init, Ae(y, p, J(v._payload), j);
        }
        if (ae(v)) return $(y, p, v, j);
        if (W(v)) return H(y, p, v, j);
        bl(y, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, p !== null && p.tag === 6 ? (n(y, p.sibling), p = l(p, v), p.return = y, y = p) : (n(y, p), p = yu(v, y.mode, j), p.return = y, y = p), o(y)) : n(y, p);
    }
    return Ae;
  }
  var kr = As(!0), Us = As(!1), ei = vn(null), ti = null, wr = null, _o = null;
  function Co() {
    _o = wr = ti = null;
  }
  function No(e) {
    var t = ei.current;
    je(ei), e._currentValue = t;
  }
  function Po(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Sr(e, t) {
    ti = e, _o = wr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (ut = !0), e.firstContext = null);
  }
  function kt(e) {
    var t = e._currentValue;
    if (_o !== e) if (e = { context: e, memoizedValue: t, next: null }, wr === null) {
      if (ti === null) throw Error(a(308));
      wr = e, ti.dependencies = { lanes: 0, firstContext: e };
    } else wr = wr.next = e;
    return t;
  }
  var Vn = null;
  function jo(e) {
    Vn === null ? Vn = [e] : Vn.push(e);
  }
  function $s(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, jo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Gt(e, r);
  }
  function Gt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var wn = !1;
  function Ro(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Vs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Zt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Sn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ye & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Gt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, jo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Gt(e, n);
  }
  function ni(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Hi(e, n);
    }
  }
  function Ws(e, t) {
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
  function ri(e, t, n, r) {
    var l = e.updateQueue;
    wn = !1;
    var i = l.firstBaseUpdate, o = l.lastBaseUpdate, f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var d = f, k = d.next;
      d.next = null, o === null ? i = k : o.next = k, o = d;
      var _ = e.alternate;
      _ !== null && (_ = _.updateQueue, f = _.lastBaseUpdate, f !== o && (f === null ? _.firstBaseUpdate = k : f.next = k, _.lastBaseUpdate = d));
    }
    if (i !== null) {
      var C = l.baseState;
      o = 0, _ = k = d = null, f = i;
      do {
        var T = f.lane, D = f.eventTime;
        if ((r & T) === T) {
          _ !== null && (_ = _.next = {
            eventTime: D,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          e: {
            var $ = e, H = f;
            switch (T = t, D = n, H.tag) {
              case 1:
                if ($ = H.payload, typeof $ == "function") {
                  C = $.call(D, C, T);
                  break e;
                }
                C = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = H.payload, T = typeof $ == "function" ? $.call(D, C, T) : $, T == null) break e;
                C = L({}, C, T);
                break e;
              case 2:
                wn = !0;
            }
          }
          f.callback !== null && f.lane !== 0 && (e.flags |= 64, T = l.effects, T === null ? l.effects = [f] : T.push(f));
        } else D = { eventTime: D, lane: T, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, _ === null ? (k = _ = D, d = C) : _ = _.next = D, o |= T;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null) break;
          T = f, f = T.next, T.next = null, l.lastBaseUpdate = T, l.shared.pending = null;
        }
      } while (!0);
      if (_ === null && (d = C), l.baseState = d, l.firstBaseUpdate = k, l.lastBaseUpdate = _, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      Hn |= o, e.lanes = o, e.memoizedState = C;
    }
  }
  function Bs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(a(191, l));
        l.call(r);
      }
    }
  }
  var ol = {}, It = vn(ol), ul = vn(ol), sl = vn(ol);
  function Wn(e) {
    if (e === ol) throw Error(a(174));
    return e;
  }
  function Lo(e, t) {
    switch (_e(sl, t), _e(ul, e), _e(It, ol), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : er(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = er(t, e);
    }
    je(It), _e(It, t);
  }
  function xr() {
    je(It), je(ul), je(sl);
  }
  function Hs(e) {
    Wn(sl.current);
    var t = Wn(It.current), n = er(t, e.type);
    t !== n && (_e(ul, e), _e(It, n));
  }
  function zo(e) {
    ul.current === e && (je(It), je(ul));
  }
  var Fe = vn(0);
  function li(e) {
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
  var Fo = [];
  function Oo() {
    for (var e = 0; e < Fo.length; e++) Fo[e]._workInProgressVersionPrimary = null;
    Fo.length = 0;
  }
  var ii = he.ReactCurrentDispatcher, Io = he.ReactCurrentBatchConfig, Bn = 0, Oe = null, Be = null, Ke = null, oi = !1, al = !1, cl = 0, qf = 0;
  function be() {
    throw Error(a(321));
  }
  function Do(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!_t(e[n], t[n])) return !1;
    return !0;
  }
  function Ao(e, t, n, r, l, i) {
    if (Bn = i, Oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ii.current = e === null || e.memoizedState === null ? nd : rd, e = n(r, l), al) {
      i = 0;
      do {
        if (al = !1, cl = 0, 25 <= i) throw Error(a(301));
        i += 1, Ke = Be = null, t.updateQueue = null, ii.current = ld, e = n(r, l);
      } while (al);
    }
    if (ii.current = ai, t = Be !== null && Be.next !== null, Bn = 0, Ke = Be = Oe = null, oi = !1, t) throw Error(a(300));
    return e;
  }
  function Uo() {
    var e = cl !== 0;
    return cl = 0, e;
  }
  function Dt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ke === null ? Oe.memoizedState = Ke = e : Ke = Ke.next = e, Ke;
  }
  function wt() {
    if (Be === null) {
      var e = Oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = Ke === null ? Oe.memoizedState : Ke.next;
    if (t !== null) Ke = t, Be = e;
    else {
      if (e === null) throw Error(a(310));
      Be = e, e = { memoizedState: Be.memoizedState, baseState: Be.baseState, baseQueue: Be.baseQueue, queue: Be.queue, next: null }, Ke === null ? Oe.memoizedState = Ke = e : Ke = Ke.next = e;
    }
    return Ke;
  }
  function fl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $o(e) {
    var t = wt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Be, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = i.next, i.next = o;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var f = o = null, d = null, k = i;
      do {
        var _ = k.lane;
        if ((Bn & _) === _) d !== null && (d = d.next = { lane: 0, action: k.action, hasEagerState: k.hasEagerState, eagerState: k.eagerState, next: null }), r = k.hasEagerState ? k.eagerState : e(r, k.action);
        else {
          var C = {
            lane: _,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          };
          d === null ? (f = d = C, o = r) : d = d.next = C, Oe.lanes |= _, Hn |= _;
        }
        k = k.next;
      } while (k !== null && k !== i);
      d === null ? o = r : d.next = f, _t(r, t.memoizedState) || (ut = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = d, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, Oe.lanes |= i, Hn |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Vo(e) {
    var t = wt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== l);
      _t(i, t.memoizedState) || (ut = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function Qs() {
  }
  function Ks(e, t) {
    var n = Oe, r = wt(), l = t(), i = !_t(r.memoizedState, l);
    if (i && (r.memoizedState = l, ut = !0), r = r.queue, Wo(Gs.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ke !== null && Ke.memoizedState.tag & 1) {
      if (n.flags |= 2048, dl(9, Xs.bind(null, n, r, l, t), void 0, null), Ye === null) throw Error(a(349));
      (Bn & 30) !== 0 || Ys(n, t, l);
    }
    return l;
  }
  function Ys(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Xs(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Zs(t) && Js(e);
  }
  function Gs(e, t, n) {
    return n(function() {
      Zs(t) && Js(e);
    });
  }
  function Zs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !_t(e, n);
    } catch {
      return !0;
    }
  }
  function Js(e) {
    var t = Gt(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function qs(e) {
    var t = Dt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fl, lastRenderedState: e }, t.queue = e, e = e.dispatch = td.bind(null, Oe, e), [t.memoizedState, e];
  }
  function dl(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function bs() {
    return wt().memoizedState;
  }
  function ui(e, t, n, r) {
    var l = Dt();
    Oe.flags |= e, l.memoizedState = dl(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function si(e, t, n, r) {
    var l = wt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Be !== null) {
      var o = Be.memoizedState;
      if (i = o.destroy, r !== null && Do(r, o.deps)) {
        l.memoizedState = dl(t, n, i, r);
        return;
      }
    }
    Oe.flags |= e, l.memoizedState = dl(1 | t, n, i, r);
  }
  function ea(e, t) {
    return ui(8390656, 8, e, t);
  }
  function Wo(e, t) {
    return si(2048, 8, e, t);
  }
  function ta(e, t) {
    return si(4, 2, e, t);
  }
  function na(e, t) {
    return si(4, 4, e, t);
  }
  function ra(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function la(e, t, n) {
    return n = n != null ? n.concat([e]) : null, si(4, 4, ra.bind(null, t, e), n);
  }
  function Bo() {
  }
  function ia(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Do(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function oa(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Do(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ua(e, t, n) {
    return (Bn & 21) === 0 ? (e.baseState && (e.baseState = !1, ut = !0), e.memoizedState = n) : (_t(n, t) || (n = Du(), Oe.lanes |= n, Hn |= n, e.baseState = !0), t);
  }
  function bf(e, t) {
    var n = xe;
    xe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Io.transition;
    Io.transition = {};
    try {
      e(!1), t();
    } finally {
      xe = n, Io.transition = r;
    }
  }
  function sa() {
    return wt().memoizedState;
  }
  function ed(e, t, n) {
    var r = Tn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, aa(e)) ca(t, n);
    else if (n = $s(e, t, n, r), n !== null) {
      var l = rt();
      Rt(n, e, r, l), fa(n, t, r);
    }
  }
  function td(e, t, n) {
    var r = Tn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (aa(e)) ca(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, f = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = f, _t(f, o)) {
          var d = t.interleaved;
          d === null ? (l.next = l, jo(t)) : (l.next = d.next, d.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = $s(e, t, l, r), n !== null && (l = rt(), Rt(n, e, r, l), fa(n, t, r));
    }
  }
  function aa(e) {
    var t = e.alternate;
    return e === Oe || t !== null && t === Oe;
  }
  function ca(e, t) {
    al = oi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function fa(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Hi(e, n);
    }
  }
  var ai = { readContext: kt, useCallback: be, useContext: be, useEffect: be, useImperativeHandle: be, useInsertionEffect: be, useLayoutEffect: be, useMemo: be, useReducer: be, useRef: be, useState: be, useDebugValue: be, useDeferredValue: be, useTransition: be, useMutableSource: be, useSyncExternalStore: be, useId: be, unstable_isNewReconciler: !1 }, nd = { readContext: kt, useCallback: function(e, t) {
    return Dt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: kt, useEffect: ea, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ui(
      4194308,
      4,
      ra.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ui(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ui(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Dt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Dt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ed.bind(null, Oe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Dt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: qs, useDebugValue: Bo, useDeferredValue: function(e) {
    return Dt().memoizedState = e;
  }, useTransition: function() {
    var e = qs(!1), t = e[0];
    return e = bf.bind(null, e[1]), Dt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Oe, l = Dt();
    if (Re) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), Ye === null) throw Error(a(349));
      (Bn & 30) !== 0 || Ys(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, ea(Gs.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, dl(9, Xs.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Dt(), t = Ye.identifierPrefix;
    if (Re) {
      var n = Xt, r = Yt;
      n = (r & ~(1 << 32 - Tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = cl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = qf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, rd = {
    readContext: kt,
    useCallback: ia,
    useContext: kt,
    useEffect: Wo,
    useImperativeHandle: la,
    useInsertionEffect: ta,
    useLayoutEffect: na,
    useMemo: oa,
    useReducer: $o,
    useRef: bs,
    useState: function() {
      return $o(fl);
    },
    useDebugValue: Bo,
    useDeferredValue: function(e) {
      var t = wt();
      return ua(t, Be.memoizedState, e);
    },
    useTransition: function() {
      var e = $o(fl)[0], t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Qs,
    useSyncExternalStore: Ks,
    useId: sa,
    unstable_isNewReconciler: !1
  }, ld = { readContext: kt, useCallback: ia, useContext: kt, useEffect: Wo, useImperativeHandle: la, useInsertionEffect: ta, useLayoutEffect: na, useMemo: oa, useReducer: Vo, useRef: bs, useState: function() {
    return Vo(fl);
  }, useDebugValue: Bo, useDeferredValue: function(e) {
    var t = wt();
    return Be === null ? t.memoizedState = e : ua(t, Be.memoizedState, e);
  }, useTransition: function() {
    var e = Vo(fl)[0], t = wt().memoizedState;
    return [e, t];
  }, useMutableSource: Qs, useSyncExternalStore: Ks, useId: sa, unstable_isNewReconciler: !1 };
  function Nt(e, t) {
    if (e && e.defaultProps) {
      t = L({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ho(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : L({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ci = { isMounted: function(e) {
    return (e = e._reactInternals) ? Je(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = rt(), l = Tn(e), i = Zt(r, l);
    i.payload = t, n != null && (i.callback = n), t = Sn(e, i, l), t !== null && (Rt(t, e, l, r), ni(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = rt(), l = Tn(e), i = Zt(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Sn(e, i, l), t !== null && (Rt(t, e, l, r), ni(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = rt(), r = Tn(e), l = Zt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Sn(e, l, r), t !== null && (Rt(t, e, r, n), ni(t, e, r));
  } };
  function da(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !qr(n, r) || !qr(l, i) : !0;
  }
  function pa(e, t, n) {
    var r = !1, l = gn, i = t.contextType;
    return typeof i == "object" && i !== null ? i = kt(i) : (l = ot(t) ? An : qe.current, r = t.contextTypes, i = (r = r != null) ? hr(e, l) : gn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ci, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function ma(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ci.enqueueReplaceState(t, t.state, null);
  }
  function Qo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Ro(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = kt(i) : (i = ot(t) ? An : qe.current, l.context = hr(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ho(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ci.enqueueReplaceState(l, l.state, null), ri(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Er(e, t) {
    try {
      var n = "", r = t;
      do
        n += se(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Ko(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Yo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var id = typeof WeakMap == "function" ? WeakMap : Map;
  function ha(e, t, n) {
    n = Zt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      vi || (vi = !0, su = r), Yo(e, t);
    }, n;
  }
  function ya(e, t, n) {
    n = Zt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Yo(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Yo(e, t), typeof r != "function" && (En === null ? En = /* @__PURE__ */ new Set([this]) : En.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function va(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new id();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = kd.bind(null, e, t, n), t.then(e, e));
  }
  function ga(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ka(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Zt(-1, 1), t.tag = 2, Sn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var od = he.ReactCurrentOwner, ut = !1;
  function nt(e, t, n, r) {
    t.child = e === null ? Us(t, null, n, r) : kr(t, e.child, n, r);
  }
  function wa(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Sr(t, l), r = Ao(e, t, n, r, i, l), n = Uo(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Jt(e, t, l)) : (Re && n && So(t), t.flags |= 1, nt(e, t, r, l), t.child);
  }
  function Sa(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !hu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, xa(e, t, i, r, l)) : (e = Ei(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : qr, n(o, r) && e.ref === t.ref) return Jt(e, t, l);
    }
    return t.flags |= 1, e = Cn(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function xa(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (qr(i, r) && e.ref === t.ref) if (ut = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (ut = !0);
      else return t.lanes = e.lanes, Jt(e, t, l);
    }
    return Xo(e, t, n, r, l);
  }
  function Ea(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _e(Tr, mt), mt |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, _e(Tr, mt), mt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, _e(Tr, mt), mt |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, _e(Tr, mt), mt |= r;
    return nt(e, t, l, n), t.child;
  }
  function Ma(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Xo(e, t, n, r, l) {
    var i = ot(n) ? An : qe.current;
    return i = hr(t, i), Sr(t, l), n = Ao(e, t, n, r, i, l), r = Uo(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Jt(e, t, l)) : (Re && r && So(t), t.flags |= 1, nt(e, t, n, l), t.child);
  }
  function Ta(e, t, n, r, l) {
    if (ot(n)) {
      var i = !0;
      Xl(t);
    } else i = !1;
    if (Sr(t, l), t.stateNode === null) di(e, t), pa(t, n, r), Qo(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, f = t.memoizedProps;
      o.props = f;
      var d = o.context, k = n.contextType;
      typeof k == "object" && k !== null ? k = kt(k) : (k = ot(n) ? An : qe.current, k = hr(t, k));
      var _ = n.getDerivedStateFromProps, C = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      C || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== r || d !== k) && ma(t, o, r, k), wn = !1;
      var T = t.memoizedState;
      o.state = T, ri(t, r, o, l), d = t.memoizedState, f !== r || T !== d || it.current || wn ? (typeof _ == "function" && (Ho(t, n, _, r), d = t.memoizedState), (f = wn || da(t, n, f, r, T, d, k)) ? (C || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = d), o.props = r, o.state = d, o.context = k, r = f) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, Vs(e, t), f = t.memoizedProps, k = t.type === t.elementType ? f : Nt(t.type, f), o.props = k, C = t.pendingProps, T = o.context, d = n.contextType, typeof d == "object" && d !== null ? d = kt(d) : (d = ot(n) ? An : qe.current, d = hr(t, d));
      var D = n.getDerivedStateFromProps;
      (_ = typeof D == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== C || T !== d) && ma(t, o, r, d), wn = !1, T = t.memoizedState, o.state = T, ri(t, r, o, l);
      var $ = t.memoizedState;
      f !== C || T !== $ || it.current || wn ? (typeof D == "function" && (Ho(t, n, D, r), $ = t.memoizedState), (k = wn || da(t, n, k, r, T, $, d) || !1) ? (_ || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, $, d), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, $, d)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = $), o.props = r, o.state = $, o.context = d, r = k) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Go(e, t, n, r, i, l);
  }
  function Go(e, t, n, r, l, i) {
    Ma(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && js(t, n, !1), Jt(e, t, i);
    r = t.stateNode, od.current = t;
    var f = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = kr(t, e.child, null, i), t.child = kr(t, null, f, i)) : nt(e, t, f, i), t.memoizedState = r.state, l && js(t, n, !0), t.child;
  }
  function _a(e) {
    var t = e.stateNode;
    t.pendingContext ? Ns(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ns(e, t.context, !1), Lo(e, t.containerInfo);
  }
  function Ca(e, t, n, r, l) {
    return gr(), To(l), t.flags |= 256, nt(e, t, n, r), t.child;
  }
  var Zo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Na(e, t, n) {
    var r = t.pendingProps, l = Fe.current, i = !1, o = (t.flags & 128) !== 0, f;
    if ((f = o) || (f = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), f ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), _e(Fe, l & 1), e === null)
      return Mo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Mi(o, r, 0, null), e = Xn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Jo(n), t.memoizedState = Zo, e) : qo(t, o));
    if (l = e.memoizedState, l !== null && (f = l.dehydrated, f !== null)) return ud(e, t, o, r, f, l, n);
    if (i) {
      i = r.fallback, o = t.mode, l = e.child, f = l.sibling;
      var d = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = d, t.deletions = null) : (r = Cn(l, d), r.subtreeFlags = l.subtreeFlags & 14680064), f !== null ? i = Cn(f, i) : (i = Xn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Jo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Zo, r;
    }
    return i = e.child, e = i.sibling, r = Cn(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function qo(e, t) {
    return t = Mi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function fi(e, t, n, r) {
    return r !== null && To(r), kr(t, e.child, null, n), e = qo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function ud(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ko(Error(a(422))), fi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Mi({ mode: "visible", children: r.children }, l, 0, null), i = Xn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && kr(t, e.child, null, o), t.child.memoizedState = Jo(o), t.memoizedState = Zo, i);
    if ((t.mode & 1) === 0) return fi(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var f = r.dgst;
      return r = f, i = Error(a(419)), r = Ko(i, r, void 0), fi(e, t, o, r);
    }
    if (f = (o & e.childLanes) !== 0, ut || f) {
      if (r = Ye, r !== null) {
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
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Gt(e, l), Rt(r, e, l, -1));
      }
      return mu(), r = Ko(Error(a(421))), fi(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = wd.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, pt = yn(l.nextSibling), dt = t, Re = !0, Ct = null, e !== null && (vt[gt++] = Yt, vt[gt++] = Xt, vt[gt++] = Un, Yt = e.id, Xt = e.overflow, Un = t), t = qo(t, r.children), t.flags |= 4096, t);
  }
  function Pa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Po(e.return, t, n);
  }
  function bo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function ja(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (nt(e, t, r.children, n), r = Fe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Pa(e, n, t);
        else if (e.tag === 19) Pa(e, n, t);
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
    if (_e(Fe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && li(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), bo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && li(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        bo(t, !0, n, null, i);
        break;
      case "together":
        bo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function di(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Jt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Hn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Cn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function sd(e, t, n) {
    switch (t.tag) {
      case 3:
        _a(t), gr();
        break;
      case 5:
        Hs(t);
        break;
      case 1:
        ot(t.type) && Xl(t);
        break;
      case 4:
        Lo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        _e(ei, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (_e(Fe, Fe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Na(e, t, n) : (_e(Fe, Fe.current & 1), e = Jt(e, t, n), e !== null ? e.sibling : null);
        _e(Fe, Fe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return ja(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), _e(Fe, Fe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ea(e, t, n);
    }
    return Jt(e, t, n);
  }
  var Ra, eu, La, za;
  Ra = function(e, t) {
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
  }, eu = function() {
  }, La = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, Wn(It.current);
      var i = null;
      switch (n) {
        case "input":
          l = Pr(e, l), r = Pr(e, r), i = [];
          break;
        case "select":
          l = L({}, l, { value: void 0 }), r = L({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = Rn(e, l), r = Rn(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ql);
      }
      rr(n, r);
      var o;
      n = null;
      for (k in l) if (!r.hasOwnProperty(k) && l.hasOwnProperty(k) && l[k] != null) if (k === "style") {
        var f = l[k];
        for (o in f) f.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else k !== "dangerouslySetInnerHTML" && k !== "children" && k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && k !== "autoFocus" && (g.hasOwnProperty(k) ? i || (i = []) : (i = i || []).push(k, null));
      for (k in r) {
        var d = r[k];
        if (f = l?.[k], r.hasOwnProperty(k) && d !== f && (d != null || f != null)) if (k === "style") if (f) {
          for (o in f) !f.hasOwnProperty(o) || d && d.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in d) d.hasOwnProperty(o) && f[o] !== d[o] && (n || (n = {}), n[o] = d[o]);
        } else n || (i || (i = []), i.push(
          k,
          n
        )), n = d;
        else k === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, f = f ? f.__html : void 0, d != null && f !== d && (i = i || []).push(k, d)) : k === "children" ? typeof d != "string" && typeof d != "number" || (i = i || []).push(k, "" + d) : k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && (g.hasOwnProperty(k) ? (d != null && k === "onScroll" && Pe("scroll", e), i || f === d || (i = [])) : (i = i || []).push(k, d));
      }
      n && (i = i || []).push("style", n);
      var k = i;
      (t.updateQueue = k) && (t.flags |= 4);
    }
  }, za = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function pl(e, t) {
    if (!Re) switch (e.tailMode) {
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
  function et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function ad(e, t, n) {
    var r = t.pendingProps;
    switch (xo(t), t.tag) {
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
        return et(t), null;
      case 1:
        return ot(t.type) && Yl(), et(t), null;
      case 3:
        return r = t.stateNode, xr(), je(it), je(qe), Oo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ct !== null && (fu(Ct), Ct = null))), eu(e, t), et(t), null;
      case 5:
        zo(t);
        var l = Wn(sl.current);
        if (n = t.type, e !== null && t.stateNode != null) La(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return et(t), null;
          }
          if (e = Wn(It.current), ql(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Ot] = t, r[rl] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Pe("cancel", r), Pe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < el.length; l++) Pe(el[l], r);
                break;
              case "source":
                Pe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Pe(
                  "error",
                  r
                ), Pe("load", r);
                break;
              case "details":
                Pe("toggle", r);
                break;
              case "input":
                El(r, i), Pe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, Pe("invalid", r);
                break;
              case "textarea":
                Lr(r, i), Pe("invalid", r);
            }
            rr(n, i), l = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var f = i[o];
              o === "children" ? typeof f == "string" ? r.textContent !== f && (i.suppressHydrationWarning !== !0 && Hl(r.textContent, f, e), l = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (i.suppressHydrationWarning !== !0 && Hl(
                r.textContent,
                f,
                e
              ), l = ["children", "" + f]) : g.hasOwnProperty(o) && f != null && o === "onScroll" && Pe("scroll", r);
            }
            switch (n) {
              case "input":
                ht(r), bt(r, i, !0);
                break;
              case "textarea":
                ht(r), yt(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Ql);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Fr(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ot] = t, e[rl] = r, Ra(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = zn(n, r), n) {
                case "dialog":
                  Pe("cancel", e), Pe("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pe("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < el.length; l++) Pe(el[l], e);
                  l = r;
                  break;
                case "source":
                  Pe("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Pe(
                    "error",
                    e
                  ), Pe("load", e), l = r;
                  break;
                case "details":
                  Pe("toggle", e), l = r;
                  break;
                case "input":
                  El(e, r), l = Pr(e, r), Pe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = L({}, r, { value: void 0 }), Pe("invalid", e);
                  break;
                case "textarea":
                  Lr(e, r), l = Rn(e, r), Pe("invalid", e);
                  break;
                default:
                  l = r;
              }
              rr(n, l), f = l;
              for (i in f) if (f.hasOwnProperty(i)) {
                var d = f[i];
                i === "style" ? rn(e, d) : i === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && en(e, d)) : i === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && tn(e, d) : typeof d == "number" && tn(e, "" + d) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (g.hasOwnProperty(i) ? d != null && i === "onScroll" && Pe("scroll", e) : d != null && me(e, i, d, o));
              }
              switch (n) {
                case "input":
                  ht(e), bt(e, r, !1);
                  break;
                case "textarea":
                  ht(e), yt(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + b(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? $t(e, !!r.multiple, i, !1) : r.defaultValue != null && $t(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ql);
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
        return et(t), null;
      case 6:
        if (e && t.stateNode != null) za(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (n = Wn(sl.current), Wn(It.current), ql(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Ot] = t, (i = r.nodeValue !== n) && (e = dt, e !== null)) switch (e.tag) {
              case 3:
                Hl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Hl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ot] = t, t.stateNode = r;
        }
        return et(t), null;
      case 13:
        if (je(Fe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Re && pt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Is(), gr(), t.flags |= 98560, i = !1;
          else if (i = ql(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(a(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(a(317));
              i[Ot] = t;
            } else gr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            et(t), i = !1;
          } else Ct !== null && (fu(Ct), Ct = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Fe.current & 1) !== 0 ? He === 0 && (He = 3) : mu())), t.updateQueue !== null && (t.flags |= 4), et(t), null);
      case 4:
        return xr(), eu(e, t), e === null && tl(t.stateNode.containerInfo), et(t), null;
      case 10:
        return No(t.type._context), et(t), null;
      case 17:
        return ot(t.type) && Yl(), et(t), null;
      case 19:
        if (je(Fe), i = t.memoizedState, i === null) return et(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) pl(i, !1);
        else {
          if (He !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = li(e), o !== null) {
              for (t.flags |= 128, pl(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return _e(Fe, Fe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && ie() > _r && (t.flags |= 128, r = !0, pl(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = li(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), pl(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Re) return et(t), null;
          } else 2 * ie() - i.renderingStartTime > _r && n !== 1073741824 && (t.flags |= 128, r = !0, pl(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ie(), t.sibling = null, n = Fe.current, _e(Fe, r ? n & 1 | 2 : n & 1), t) : (et(t), null);
      case 22:
      case 23:
        return pu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (mt & 1073741824) !== 0 && (et(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : et(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function cd(e, t) {
    switch (xo(t), t.tag) {
      case 1:
        return ot(t.type) && Yl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return xr(), je(it), je(qe), Oo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return zo(t), null;
      case 13:
        if (je(Fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          gr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return je(Fe), null;
      case 4:
        return xr(), null;
      case 10:
        return No(t.type._context), null;
      case 22:
      case 23:
        return pu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pi = !1, tt = !1, fd = typeof WeakSet == "function" ? WeakSet : Set, A = null;
  function Mr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ie(e, t, r);
    }
    else n.current = null;
  }
  function tu(e, t, n) {
    try {
      n();
    } catch (r) {
      Ie(e, t, r);
    }
  }
  var Fa = !1;
  function dd(e, t) {
    if (po = zl, e = ds(), lo(e)) {
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
          var o = 0, f = -1, d = -1, k = 0, _ = 0, C = e, T = null;
          t: for (; ; ) {
            for (var D; C !== n || l !== 0 && C.nodeType !== 3 || (f = o + l), C !== i || r !== 0 && C.nodeType !== 3 || (d = o + r), C.nodeType === 3 && (o += C.nodeValue.length), (D = C.firstChild) !== null; )
              T = C, C = D;
            for (; ; ) {
              if (C === e) break t;
              if (T === n && ++k === l && (f = o), T === i && ++_ === r && (d = o), (D = C.nextSibling) !== null) break;
              C = T, T = C.parentNode;
            }
            C = D;
          }
          n = f === -1 || d === -1 ? null : { start: f, end: d };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (mo = { focusedElem: e, selectionRange: n }, zl = !1, A = t; A !== null; ) if (t = A, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, A = e;
    else for (; A !== null; ) {
      t = A;
      try {
        var $ = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if ($ !== null) {
              var H = $.memoizedProps, Ae = $.memoizedState, y = t.stateNode, p = y.getSnapshotBeforeUpdate(t.elementType === t.type ? H : Nt(t.type, H), Ae);
              y.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          case 3:
            var v = t.stateNode.containerInfo;
            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(a(163));
        }
      } catch (j) {
        Ie(t, t.return, j);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, A = e;
        break;
      }
      A = t.return;
    }
    return $ = Fa, Fa = !1, $;
  }
  function ml(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && tu(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function mi(e, t) {
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
  function nu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Oa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Oa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ot], delete t[rl], delete t[go], delete t[Xf], delete t[Gf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Ia(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Da(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ia(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ru(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ql));
    else if (r !== 4 && (e = e.child, e !== null)) for (ru(e, t, n), e = e.sibling; e !== null; ) ru(e, t, n), e = e.sibling;
  }
  function lu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (lu(e, t, n), e = e.sibling; e !== null; ) lu(e, t, n), e = e.sibling;
  }
  var Ge = null, Pt = !1;
  function xn(e, t, n) {
    for (n = n.child; n !== null; ) Aa(e, t, n), n = n.sibling;
  }
  function Aa(e, t, n) {
    if (Ft && typeof Ft.onCommitFiberUnmount == "function") try {
      Ft.onCommitFiberUnmount(Cl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        tt || Mr(n, t);
      case 6:
        var r = Ge, l = Pt;
        Ge = null, xn(e, t, n), Ge = r, Pt = l, Ge !== null && (Pt ? (e = Ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ge.removeChild(n.stateNode));
        break;
      case 18:
        Ge !== null && (Pt ? (e = Ge, n = n.stateNode, e.nodeType === 8 ? vo(e.parentNode, n) : e.nodeType === 1 && vo(e, n), Kr(e)) : vo(Ge, n.stateNode));
        break;
      case 4:
        r = Ge, l = Pt, Ge = n.stateNode.containerInfo, Pt = !0, xn(e, t, n), Ge = r, Pt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!tt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && tu(n, t, o), l = l.next;
          } while (l !== r);
        }
        xn(e, t, n);
        break;
      case 1:
        if (!tt && (Mr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          Ie(n, t, f);
        }
        xn(e, t, n);
        break;
      case 21:
        xn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (tt = (r = tt) || n.memoizedState !== null, xn(e, t, n), tt = r) : xn(e, t, n);
        break;
      default:
        xn(e, t, n);
    }
  }
  function Ua(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new fd()), t.forEach(function(r) {
        var l = Sd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function jt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, o = t, f = o;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 5:
              Ge = f.stateNode, Pt = !1;
              break e;
            case 3:
              Ge = f.stateNode.containerInfo, Pt = !0;
              break e;
            case 4:
              Ge = f.stateNode.containerInfo, Pt = !0;
              break e;
          }
          f = f.return;
        }
        if (Ge === null) throw Error(a(160));
        Aa(i, o, l), Ge = null, Pt = !1;
        var d = l.alternate;
        d !== null && (d.return = null), l.return = null;
      } catch (k) {
        Ie(l, t, k);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) $a(t, e), t = t.sibling;
  }
  function $a(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (jt(t, e), At(e), r & 4) {
          try {
            ml(3, e, e.return), mi(3, e);
          } catch (H) {
            Ie(e, e.return, H);
          }
          try {
            ml(5, e, e.return);
          } catch (H) {
            Ie(e, e.return, H);
          }
        }
        break;
      case 1:
        jt(t, e), At(e), r & 512 && n !== null && Mr(n, n.return);
        break;
      case 5:
        if (jt(t, e), At(e), r & 512 && n !== null && Mr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            tn(l, "");
          } catch (H) {
            Ie(e, e.return, H);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, f = e.type, d = e.updateQueue;
          if (e.updateQueue = null, d !== null) try {
            f === "input" && i.type === "radio" && i.name != null && jr(l, i), zn(f, o);
            var k = zn(f, i);
            for (o = 0; o < d.length; o += 2) {
              var _ = d[o], C = d[o + 1];
              _ === "style" ? rn(l, C) : _ === "dangerouslySetInnerHTML" ? en(l, C) : _ === "children" ? tn(l, C) : me(l, _, C, k);
            }
            switch (f) {
              case "input":
                Rr(l, i);
                break;
              case "textarea":
                zr(l, i);
                break;
              case "select":
                var T = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var D = i.value;
                D != null ? $t(l, !!i.multiple, D, !1) : T !== !!i.multiple && (i.defaultValue != null ? $t(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : $t(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[rl] = i;
          } catch (H) {
            Ie(e, e.return, H);
          }
        }
        break;
      case 6:
        if (jt(t, e), At(e), r & 4) {
          if (e.stateNode === null) throw Error(a(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (H) {
            Ie(e, e.return, H);
          }
        }
        break;
      case 3:
        if (jt(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Kr(t.containerInfo);
        } catch (H) {
          Ie(e, e.return, H);
        }
        break;
      case 4:
        jt(t, e), At(e);
        break;
      case 13:
        jt(t, e), At(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (uu = ie())), r & 4 && Ua(e);
        break;
      case 22:
        if (_ = n !== null && n.memoizedState !== null, e.mode & 1 ? (tt = (k = tt) || _, jt(t, e), tt = k) : jt(t, e), At(e), r & 8192) {
          if (k = e.memoizedState !== null, (e.stateNode.isHidden = k) && !_ && (e.mode & 1) !== 0) for (A = e, _ = e.child; _ !== null; ) {
            for (C = A = _; A !== null; ) {
              switch (T = A, D = T.child, T.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ml(4, T, T.return);
                  break;
                case 1:
                  Mr(T, T.return);
                  var $ = T.stateNode;
                  if (typeof $.componentWillUnmount == "function") {
                    r = T, n = T.return;
                    try {
                      t = r, $.props = t.memoizedProps, $.state = t.memoizedState, $.componentWillUnmount();
                    } catch (H) {
                      Ie(r, n, H);
                    }
                  }
                  break;
                case 5:
                  Mr(T, T.return);
                  break;
                case 22:
                  if (T.memoizedState !== null) {
                    Ba(C);
                    continue;
                  }
              }
              D !== null ? (D.return = T, A = D) : Ba(C);
            }
            _ = _.sibling;
          }
          e: for (_ = null, C = e; ; ) {
            if (C.tag === 5) {
              if (_ === null) {
                _ = C;
                try {
                  l = C.stateNode, k ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (f = C.stateNode, d = C.memoizedProps.style, o = d != null && d.hasOwnProperty("display") ? d.display : null, f.style.display = Lt("display", o));
                } catch (H) {
                  Ie(e, e.return, H);
                }
              }
            } else if (C.tag === 6) {
              if (_ === null) try {
                C.stateNode.nodeValue = k ? "" : C.memoizedProps;
              } catch (H) {
                Ie(e, e.return, H);
              }
            } else if ((C.tag !== 22 && C.tag !== 23 || C.memoizedState === null || C === e) && C.child !== null) {
              C.child.return = C, C = C.child;
              continue;
            }
            if (C === e) break e;
            for (; C.sibling === null; ) {
              if (C.return === null || C.return === e) break e;
              _ === C && (_ = null), C = C.return;
            }
            _ === C && (_ = null), C.sibling.return = C.return, C = C.sibling;
          }
        }
        break;
      case 19:
        jt(t, e), At(e), r & 4 && Ua(e);
        break;
      case 21:
        break;
      default:
        jt(
          t,
          e
        ), At(e);
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ia(n)) {
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
            r.flags & 32 && (tn(l, ""), r.flags &= -33);
            var i = Da(e);
            lu(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, f = Da(e);
            ru(e, f, o);
            break;
          default:
            throw Error(a(161));
        }
      } catch (d) {
        Ie(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function pd(e, t, n) {
    A = e, Va(e);
  }
  function Va(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
      var l = A, i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || pi;
        if (!o) {
          var f = l.alternate, d = f !== null && f.memoizedState !== null || tt;
          f = pi;
          var k = tt;
          if (pi = o, (tt = d) && !k) for (A = l; A !== null; ) o = A, d = o.child, o.tag === 22 && o.memoizedState !== null ? Ha(l) : d !== null ? (d.return = o, A = d) : Ha(l);
          for (; i !== null; ) A = i, Va(i), i = i.sibling;
          A = l, pi = f, tt = k;
        }
        Wa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, A = i) : Wa(e);
    }
  }
  function Wa(e) {
    for (; A !== null; ) {
      var t = A;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              tt || mi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !tt) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Nt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Bs(t, i, r);
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
                Bs(t, o, n);
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
                var k = t.alternate;
                if (k !== null) {
                  var _ = k.memoizedState;
                  if (_ !== null) {
                    var C = _.dehydrated;
                    C !== null && Kr(C);
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
          tt || t.flags & 512 && nu(t);
        } catch (T) {
          Ie(t, t.return, T);
        }
      }
      if (t === e) {
        A = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, A = n;
        break;
      }
      A = t.return;
    }
  }
  function Ba(e) {
    for (; A !== null; ) {
      var t = A;
      if (t === e) {
        A = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, A = n;
        break;
      }
      A = t.return;
    }
  }
  function Ha(e) {
    for (; A !== null; ) {
      var t = A;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              mi(4, t);
            } catch (d) {
              Ie(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                Ie(t, l, d);
              }
            }
            var i = t.return;
            try {
              nu(t);
            } catch (d) {
              Ie(t, i, d);
            }
            break;
          case 5:
            var o = t.return;
            try {
              nu(t);
            } catch (d) {
              Ie(t, o, d);
            }
        }
      } catch (d) {
        Ie(t, t.return, d);
      }
      if (t === e) {
        A = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, A = f;
        break;
      }
      A = t.return;
    }
  }
  var md = Math.ceil, hi = he.ReactCurrentDispatcher, iu = he.ReactCurrentOwner, St = he.ReactCurrentBatchConfig, ye = 0, Ye = null, We = null, Ze = 0, mt = 0, Tr = vn(0), He = 0, hl = null, Hn = 0, yi = 0, ou = 0, yl = null, st = null, uu = 0, _r = 1 / 0, qt = null, vi = !1, su = null, En = null, gi = !1, Mn = null, ki = 0, vl = 0, au = null, wi = -1, Si = 0;
  function rt() {
    return (ye & 6) !== 0 ? ie() : wi !== -1 ? wi : wi = ie();
  }
  function Tn(e) {
    return (e.mode & 1) === 0 ? 1 : (ye & 2) !== 0 && Ze !== 0 ? Ze & -Ze : Jf.transition !== null ? (Si === 0 && (Si = Du()), Si) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ku(e.type)), e);
  }
  function Rt(e, t, n, r) {
    if (50 < vl) throw vl = 0, au = null, Error(a(185));
    Vr(e, n, r), ((ye & 2) === 0 || e !== Ye) && (e === Ye && ((ye & 2) === 0 && (yi |= n), He === 4 && _n(e, Ze)), at(e, r), n === 1 && ye === 0 && (t.mode & 1) === 0 && (_r = ie() + 500, Gl && kn()));
  }
  function at(e, t) {
    var n = e.callbackNode;
    Zc(e, t);
    var r = jl(e, e === Ye ? Ze : 0);
    if (r === 0) n !== null && Q(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Q(n), t === 1) e.tag === 0 ? Zf(Ka.bind(null, e)) : Rs(Ka.bind(null, e)), Kf(function() {
        (ye & 6) === 0 && kn();
      }), n = null;
      else {
        switch (Au(r)) {
          case 1:
            n = Qe;
            break;
          case 4:
            n = ze;
            break;
          case 16:
            n = In;
            break;
          case 536870912:
            n = Iu;
            break;
          default:
            n = In;
        }
        n = ec(n, Qa.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Qa(e, t) {
    if (wi = -1, Si = 0, (ye & 6) !== 0) throw Error(a(327));
    var n = e.callbackNode;
    if (Cr() && e.callbackNode !== n) return null;
    var r = jl(e, e === Ye ? Ze : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xi(e, r);
    else {
      t = r;
      var l = ye;
      ye |= 2;
      var i = Xa();
      (Ye !== e || Ze !== t) && (qt = null, _r = ie() + 500, Kn(e, t));
      do
        try {
          vd();
          break;
        } catch (f) {
          Ya(e, f);
        }
      while (!0);
      Co(), hi.current = i, ye = l, We !== null ? t = 0 : (Ye = null, Ze = 0, t = He);
    }
    if (t !== 0) {
      if (t === 2 && (l = Wi(e), l !== 0 && (r = l, t = cu(e, l))), t === 1) throw n = hl, Kn(e, 0), _n(e, r), at(e, ie()), n;
      if (t === 6) _n(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !hd(l) && (t = xi(e, r), t === 2 && (i = Wi(e), i !== 0 && (r = i, t = cu(e, i))), t === 1)) throw n = hl, Kn(e, 0), _n(e, r), at(e, ie()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Yn(e, st, qt);
            break;
          case 3:
            if (_n(e, r), (r & 130023424) === r && (t = uu + 500 - ie(), 10 < t)) {
              if (jl(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                rt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = yo(Yn.bind(null, e, st, qt), t);
              break;
            }
            Yn(e, st, qt);
            break;
          case 4:
            if (_n(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - Tt(r);
              i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
            }
            if (r = l, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * md(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = yo(Yn.bind(null, e, st, qt), r);
              break;
            }
            Yn(e, st, qt);
            break;
          case 5:
            Yn(e, st, qt);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return at(e, ie()), e.callbackNode === n ? Qa.bind(null, e) : null;
  }
  function cu(e, t) {
    var n = yl;
    return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256), e = xi(e, t), e !== 2 && (t = st, st = n, t !== null && fu(t)), e;
  }
  function fu(e) {
    st === null ? st = e : st.push.apply(st, e);
  }
  function hd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!_t(i(), l)) return !1;
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
    for (t &= ~ou, t &= ~yi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Tt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ka(e) {
    if ((ye & 6) !== 0) throw Error(a(327));
    Cr();
    var t = jl(e, 0);
    if ((t & 1) === 0) return at(e, ie()), null;
    var n = xi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Wi(e);
      r !== 0 && (t = r, n = cu(e, r));
    }
    if (n === 1) throw n = hl, Kn(e, 0), _n(e, t), at(e, ie()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yn(e, st, qt), at(e, ie()), null;
  }
  function du(e, t) {
    var n = ye;
    ye |= 1;
    try {
      return e(t);
    } finally {
      ye = n, ye === 0 && (_r = ie() + 500, Gl && kn());
    }
  }
  function Qn(e) {
    Mn !== null && Mn.tag === 0 && (ye & 6) === 0 && Cr();
    var t = ye;
    ye |= 1;
    var n = St.transition, r = xe;
    try {
      if (St.transition = null, xe = 1, e) return e();
    } finally {
      xe = r, St.transition = n, ye = t, (ye & 6) === 0 && kn();
    }
  }
  function pu() {
    mt = Tr.current, je(Tr);
  }
  function Kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Qf(n)), We !== null) for (n = We.return; n !== null; ) {
      var r = n;
      switch (xo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Yl();
          break;
        case 3:
          xr(), je(it), je(qe), Oo();
          break;
        case 5:
          zo(r);
          break;
        case 4:
          xr();
          break;
        case 13:
          je(Fe);
          break;
        case 19:
          je(Fe);
          break;
        case 10:
          No(r.type._context);
          break;
        case 22:
        case 23:
          pu();
      }
      n = n.return;
    }
    if (Ye = e, We = e = Cn(e.current, null), Ze = mt = t, He = 0, hl = null, ou = yi = Hn = 0, st = yl = null, Vn !== null) {
      for (t = 0; t < Vn.length; t++) if (n = Vn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
      Vn = null;
    }
    return e;
  }
  function Ya(e, t) {
    do {
      var n = We;
      try {
        if (Co(), ii.current = ai, oi) {
          for (var r = Oe.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          oi = !1;
        }
        if (Bn = 0, Ke = Be = Oe = null, al = !1, cl = 0, iu.current = null, n === null || n.return === null) {
          He = 1, hl = t, We = null;
          break;
        }
        e: {
          var i = e, o = n.return, f = n, d = t;
          if (t = Ze, f.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
            var k = d, _ = f, C = _.tag;
            if ((_.mode & 1) === 0 && (C === 0 || C === 11 || C === 15)) {
              var T = _.alternate;
              T ? (_.updateQueue = T.updateQueue, _.memoizedState = T.memoizedState, _.lanes = T.lanes) : (_.updateQueue = null, _.memoizedState = null);
            }
            var D = ga(o);
            if (D !== null) {
              D.flags &= -257, ka(D, o, f, i, t), D.mode & 1 && va(i, k, t), t = D, d = k;
              var $ = t.updateQueue;
              if ($ === null) {
                var H = /* @__PURE__ */ new Set();
                H.add(d), t.updateQueue = H;
              } else $.add(d);
              break e;
            } else {
              if ((t & 1) === 0) {
                va(i, k, t), mu();
                break e;
              }
              d = Error(a(426));
            }
          } else if (Re && f.mode & 1) {
            var Ae = ga(o);
            if (Ae !== null) {
              (Ae.flags & 65536) === 0 && (Ae.flags |= 256), ka(Ae, o, f, i, t), To(Er(d, f));
              break e;
            }
          }
          i = d = Er(d, f), He !== 4 && (He = 2), yl === null ? yl = [i] : yl.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = ha(i, d, t);
                Ws(i, y);
                break e;
              case 1:
                f = d;
                var p = i.type, v = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (En === null || !En.has(v)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var j = ya(i, f, t);
                  Ws(i, j);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Za(n);
      } catch (K) {
        t = K, We === n && n !== null && (We = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Xa() {
    var e = hi.current;
    return hi.current = ai, e === null ? ai : e;
  }
  function mu() {
    (He === 0 || He === 3 || He === 2) && (He = 4), Ye === null || (Hn & 268435455) === 0 && (yi & 268435455) === 0 || _n(Ye, Ze);
  }
  function xi(e, t) {
    var n = ye;
    ye |= 2;
    var r = Xa();
    (Ye !== e || Ze !== t) && (qt = null, Kn(e, t));
    do
      try {
        yd();
        break;
      } catch (l) {
        Ya(e, l);
      }
    while (!0);
    if (Co(), ye = n, hi.current = r, We !== null) throw Error(a(261));
    return Ye = null, Ze = 0, He;
  }
  function yd() {
    for (; We !== null; ) Ga(We);
  }
  function vd() {
    for (; We !== null && !de(); ) Ga(We);
  }
  function Ga(e) {
    var t = ba(e.alternate, e, mt);
    e.memoizedProps = e.pendingProps, t === null ? Za(e) : We = t, iu.current = null;
  }
  function Za(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = ad(n, t, mt), n !== null) {
          We = n;
          return;
        }
      } else {
        if (n = cd(n, t), n !== null) {
          n.flags &= 32767, We = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          He = 6, We = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        We = t;
        return;
      }
      We = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function Yn(e, t, n) {
    var r = xe, l = St.transition;
    try {
      St.transition = null, xe = 1, gd(e, t, n, r);
    } finally {
      St.transition = l, xe = r;
    }
    return null;
  }
  function gd(e, t, n, r) {
    do
      Cr();
    while (Mn !== null);
    if ((ye & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Jc(e, i), e === Ye && (We = Ye = null, Ze = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || gi || (gi = !0, ec(In, function() {
      return Cr(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = St.transition, St.transition = null;
      var o = xe;
      xe = 1;
      var f = ye;
      ye |= 4, iu.current = null, dd(e, n), $a(n, e), Af(mo), zl = !!po, mo = po = null, e.current = n, pd(n), ue(), ye = f, xe = o, St.transition = i;
    } else e.current = n;
    if (gi && (gi = !1, Mn = e, ki = l), i = e.pendingLanes, i === 0 && (En = null), Qc(n.stateNode), at(e, ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (vi) throw vi = !1, e = su, su = null, e;
    return (ki & 1) !== 0 && e.tag !== 0 && Cr(), i = e.pendingLanes, (i & 1) !== 0 ? e === au ? vl++ : (vl = 0, au = e) : vl = 0, kn(), null;
  }
  function Cr() {
    if (Mn !== null) {
      var e = Au(ki), t = St.transition, n = xe;
      try {
        if (St.transition = null, xe = 16 > e ? 16 : e, Mn === null) var r = !1;
        else {
          if (e = Mn, Mn = null, ki = 0, (ye & 6) !== 0) throw Error(a(331));
          var l = ye;
          for (ye |= 4, A = e.current; A !== null; ) {
            var i = A, o = i.child;
            if ((A.flags & 16) !== 0) {
              var f = i.deletions;
              if (f !== null) {
                for (var d = 0; d < f.length; d++) {
                  var k = f[d];
                  for (A = k; A !== null; ) {
                    var _ = A;
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ml(8, _, i);
                    }
                    var C = _.child;
                    if (C !== null) C.return = _, A = C;
                    else for (; A !== null; ) {
                      _ = A;
                      var T = _.sibling, D = _.return;
                      if (Oa(_), _ === k) {
                        A = null;
                        break;
                      }
                      if (T !== null) {
                        T.return = D, A = T;
                        break;
                      }
                      A = D;
                    }
                  }
                }
                var $ = i.alternate;
                if ($ !== null) {
                  var H = $.child;
                  if (H !== null) {
                    $.child = null;
                    do {
                      var Ae = H.sibling;
                      H.sibling = null, H = Ae;
                    } while (H !== null);
                  }
                }
                A = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, A = o;
            else e: for (; A !== null; ) {
              if (i = A, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  ml(9, i, i.return);
              }
              var y = i.sibling;
              if (y !== null) {
                y.return = i.return, A = y;
                break e;
              }
              A = i.return;
            }
          }
          var p = e.current;
          for (A = p; A !== null; ) {
            o = A;
            var v = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && v !== null) v.return = o, A = v;
            else e: for (o = p; A !== null; ) {
              if (f = A, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mi(9, f);
                }
              } catch (K) {
                Ie(f, f.return, K);
              }
              if (f === o) {
                A = null;
                break e;
              }
              var j = f.sibling;
              if (j !== null) {
                j.return = f.return, A = j;
                break e;
              }
              A = f.return;
            }
          }
          if (ye = l, kn(), Ft && typeof Ft.onPostCommitFiberRoot == "function") try {
            Ft.onPostCommitFiberRoot(Cl, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        xe = n, St.transition = t;
      }
    }
    return !1;
  }
  function Ja(e, t, n) {
    t = Er(n, t), t = ha(e, t, 1), e = Sn(e, t, 1), t = rt(), e !== null && (Vr(e, 1, t), at(e, t));
  }
  function Ie(e, t, n) {
    if (e.tag === 3) Ja(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ja(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (En === null || !En.has(r))) {
          e = Er(n, e), e = ya(t, e, 1), t = Sn(t, e, 1), e = rt(), t !== null && (Vr(t, 1, e), at(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function kd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = rt(), e.pingedLanes |= e.suspendedLanes & n, Ye === e && (Ze & n) === n && (He === 4 || He === 3 && (Ze & 130023424) === Ze && 500 > ie() - uu ? Kn(e, 0) : ou |= n), at(e, t);
  }
  function qa(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Pl, Pl <<= 1, (Pl & 130023424) === 0 && (Pl = 4194304)));
    var n = rt();
    e = Gt(e, t), e !== null && (Vr(e, t, n), at(e, n));
  }
  function wd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), qa(e, n);
  }
  function Sd(e, t) {
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
    r !== null && r.delete(t), qa(e, n);
  }
  var ba;
  ba = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || it.current) ut = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ut = !1, sd(e, t, n);
      ut = (e.flags & 131072) !== 0;
    }
    else ut = !1, Re && (t.flags & 1048576) !== 0 && Ls(t, Jl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        di(e, t), e = t.pendingProps;
        var l = hr(t, qe.current);
        Sr(t, n), l = Ao(null, t, r, e, l, n);
        var i = Uo();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ot(r) ? (i = !0, Xl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ro(t), l.updater = ci, t.stateNode = l, l._reactInternals = t, Qo(t, r, e, n), t = Go(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && So(t), nt(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (di(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ed(r), e = Nt(r, e), l) {
            case 0:
              t = Xo(null, t, r, e, n);
              break e;
            case 1:
              t = Ta(null, t, r, e, n);
              break e;
            case 11:
              t = wa(null, t, r, e, n);
              break e;
            case 14:
              t = Sa(null, t, r, Nt(r.type, e), n);
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
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), Xo(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), Ta(e, t, r, l, n);
      case 3:
        e: {
          if (_a(t), e === null) throw Error(a(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, Vs(e, t), ri(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = Er(Error(a(423)), t), t = Ca(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Er(Error(a(424)), t), t = Ca(e, t, r, n, l);
            break e;
          } else for (pt = yn(t.stateNode.containerInfo.firstChild), dt = t, Re = !0, Ct = null, n = Us(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (gr(), r === l) {
              t = Jt(e, t, n);
              break e;
            }
            nt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Hs(t), e === null && Mo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, ho(r, l) ? o = null : i !== null && ho(r, i) && (t.flags |= 32), Ma(e, t), nt(e, t, o, n), t.child;
      case 6:
        return e === null && Mo(t), null;
      case 13:
        return Na(e, t, n);
      case 4:
        return Lo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = kr(t, null, r, n) : nt(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), wa(e, t, r, l, n);
      case 7:
        return nt(e, t, t.pendingProps, n), t.child;
      case 8:
        return nt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return nt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, _e(ei, r._currentValue), r._currentValue = o, i !== null) if (_t(i.value, o)) {
            if (i.children === l.children && !it.current) {
              t = Jt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var f = i.dependencies;
            if (f !== null) {
              o = i.child;
              for (var d = f.firstContext; d !== null; ) {
                if (d.context === r) {
                  if (i.tag === 1) {
                    d = Zt(-1, n & -n), d.tag = 2;
                    var k = i.updateQueue;
                    if (k !== null) {
                      k = k.shared;
                      var _ = k.pending;
                      _ === null ? d.next = d : (d.next = _.next, _.next = d), k.pending = d;
                    }
                  }
                  i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), Po(
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
              o.lanes |= n, f = o.alternate, f !== null && (f.lanes |= n), Po(o, n, t), o = i.sibling;
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
          nt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Sr(t, n), l = kt(l), r = r(l), t.flags |= 1, nt(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = Nt(r, t.pendingProps), l = Nt(r.type, l), Sa(e, t, r, l, n);
      case 15:
        return xa(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), di(e, t), t.tag = 1, ot(r) ? (e = !0, Xl(t)) : e = !1, Sr(t, n), pa(t, r, l), Qo(t, r, l, n), Go(null, t, r, !0, e, n);
      case 19:
        return ja(e, t, n);
      case 22:
        return Ea(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function ec(e, t) {
    return Y(e, t);
  }
  function xd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xt(e, t, n, r) {
    return new xd(e, t, n, r);
  }
  function hu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ed(e) {
    if (typeof e == "function") return hu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === lt) return 11;
      if (e === $e) return 14;
    }
    return 2;
  }
  function Cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = xt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Ei(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") hu(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case Te:
        return Xn(n.children, l, i, t);
      case pe:
        o = 8, l |= 8;
        break;
      case ee:
        return e = xt(12, n, t, l | 2), e.elementType = ee, e.lanes = i, e;
      case Le:
        return e = xt(13, n, t, l), e.elementType = Le, e.lanes = i, e;
      case Ue:
        return e = xt(19, n, t, l), e.elementType = Ue, e.lanes = i, e;
      case U:
        return Mi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Me:
            o = 10;
            break e;
          case Se:
            o = 9;
            break e;
          case lt:
            o = 11;
            break e;
          case $e:
            o = 14;
            break e;
          case De:
            o = 16, r = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = xt(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function Xn(e, t, n, r) {
    return e = xt(7, e, r, t), e.lanes = n, e;
  }
  function Mi(e, t, n, r) {
    return e = xt(22, e, r, t), e.elementType = U, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function yu(e, t, n) {
    return e = xt(6, e, null, t), e.lanes = n, e;
  }
  function vu(e, t, n) {
    return t = xt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Md(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bi(0), this.expirationTimes = Bi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function gu(e, t, n, r, l, i, o, f, d) {
    return e = new Md(e, t, n, f, d), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = xt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ro(i), e;
  }
  function Td(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function tc(e) {
    if (!e) return gn;
    e = e._reactInternals;
    e: {
      if (Je(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ot(t.type)) {
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
      if (ot(n)) return Ps(e, n, t);
    }
    return t;
  }
  function nc(e, t, n, r, l, i, o, f, d) {
    return e = gu(n, r, !0, e, l, i, o, f, d), e.context = tc(null), n = e.current, r = rt(), l = Tn(n), i = Zt(r, l), i.callback = t ?? null, Sn(n, i, l), e.current.lanes = l, Vr(e, l, r), at(e, r), e;
  }
  function Ti(e, t, n, r) {
    var l = t.current, i = rt(), o = Tn(l);
    return n = tc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Zt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Sn(l, t, o), e !== null && (Rt(e, l, o, i), ni(e, l, o)), o;
  }
  function _i(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function rc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ku(e, t) {
    rc(e, t), (e = e.alternate) && rc(e, t);
  }
  function _d() {
    return null;
  }
  var lc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function wu(e) {
    this._internalRoot = e;
  }
  Ci.prototype.render = wu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    Ti(e, t, null, null);
  }, Ci.prototype.unmount = wu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Qn(function() {
        Ti(null, e, null, null);
      }), t[Qt] = null;
    }
  };
  function Ci(e) {
    this._internalRoot = e;
  }
  Ci.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Vu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++) ;
      pn.splice(n, 0, e), n === 0 && Hu(e);
    }
  };
  function Su(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ni(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ic() {
  }
  function Cd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var k = _i(o);
          i.call(k);
        };
      }
      var o = nc(t, r, e, 0, null, !1, !1, "", ic);
      return e._reactRootContainer = o, e[Qt] = o.current, tl(e.nodeType === 8 ? e.parentNode : e), Qn(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var k = _i(d);
        f.call(k);
      };
    }
    var d = gu(e, 0, !1, null, null, !1, !1, "", ic);
    return e._reactRootContainer = d, e[Qt] = d.current, tl(e.nodeType === 8 ? e.parentNode : e), Qn(function() {
      Ti(t, d, n, r);
    }), d;
  }
  function Pi(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var f = l;
        l = function() {
          var d = _i(o);
          f.call(d);
        };
      }
      Ti(t, o, e, l);
    } else o = Cd(n, t, e, l, r);
    return _i(o);
  }
  Uu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = $r(t.pendingLanes);
          n !== 0 && (Hi(t, n | 1), at(t, ie()), (ye & 6) === 0 && (_r = ie() + 500, kn()));
        }
        break;
      case 13:
        Qn(function() {
          var r = Gt(e, 1);
          if (r !== null) {
            var l = rt();
            Rt(r, e, 1, l);
          }
        }), ku(e, 1);
    }
  }, Qi = function(e) {
    if (e.tag === 13) {
      var t = Gt(e, 134217728);
      if (t !== null) {
        var n = rt();
        Rt(t, e, 134217728, n);
      }
      ku(e, 134217728);
    }
  }, $u = function(e) {
    if (e.tag === 13) {
      var t = Tn(e), n = Gt(e, t);
      if (n !== null) {
        var r = rt();
        Rt(n, e, t, r);
      }
      ku(e, t);
    }
  }, Vu = function() {
    return xe;
  }, Wu = function(e, t) {
    var n = xe;
    try {
      return xe = e, t();
    } finally {
      xe = n;
    }
  }, on = function(e, t, n) {
    switch (t) {
      case "input":
        if (Rr(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Kl(r);
              if (!l) throw Error(a(90));
              qn(r), Rr(r, l);
            }
          }
        }
        break;
      case "textarea":
        zr(e, n);
        break;
      case "select":
        t = n.value, t != null && $t(e, !!n.multiple, t, !1);
    }
  }, ir = du, Ml = Qn;
  var Nd = { usingClientEntryPoint: !1, Events: [ll, pr, Kl, Dr, lr, du] }, gl = { findFiberByHostInstance: Dn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Pd = { bundleType: gl.bundleType, version: gl.version, rendererPackageName: gl.rendererPackageName, rendererConfig: gl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: he.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = w(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: gl.findFiberByHostInstance || _d, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ji = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ji.isDisabled && ji.supportsFiber) try {
      Cl = ji.inject(Pd), Ft = ji;
    } catch {
    }
  }
  return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nd, ct.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Su(t)) throw Error(a(200));
    return Td(e, t, null, n);
  }, ct.createRoot = function(e, t) {
    if (!Su(e)) throw Error(a(299));
    var n = !1, r = "", l = lc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = gu(e, 1, !1, null, null, n, !1, r, l), e[Qt] = t.current, tl(e.nodeType === 8 ? e.parentNode : e), new wu(t);
  }, ct.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = w(t), e = e === null ? null : e.stateNode, e;
  }, ct.flushSync = function(e) {
    return Qn(e);
  }, ct.hydrate = function(e, t, n) {
    if (!Ni(t)) throw Error(a(200));
    return Pi(null, e, t, !0, n);
  }, ct.hydrateRoot = function(e, t, n) {
    if (!Su(e)) throw Error(a(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", o = lc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = nc(t, null, e, 1, n ?? null, l, !1, i, o), e[Qt] = t.current, tl(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Ci(t);
  }, ct.render = function(e, t, n) {
    if (!Ni(t)) throw Error(a(200));
    return Pi(null, e, t, !1, n);
  }, ct.unmountComponentAtNode = function(e) {
    if (!Ni(e)) throw Error(a(40));
    return e._reactRootContainer ? (Qn(function() {
      Pi(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Qt] = null;
      });
    }), !0) : !1;
  }, ct.unstable_batchedUpdates = du, ct.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ni(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return Pi(e, t, n, !1, r);
  }, ct.version = "18.3.1-next-f1338f8080-20240426", ct;
}
var pc;
function Dd() {
  if (pc) return Mu.exports;
  pc = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (s) {
        console.error(s);
      }
  }
  return u(), Mu.exports = Id(), Mu.exports;
}
var mc;
function Ad() {
  if (mc) return Ri;
  mc = 1;
  var u = Dd();
  return Ri.createRoot = u.createRoot, Ri.hydrateRoot = u.hydrateRoot, Ri;
}
var Ud = Ad(), V = Ou();
const $d = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, hc = 100;
function Vd(u) {
  if (u === null || u.trim() === "") return hc;
  const s = Number(u);
  return Number.isFinite(s) ? Math.round(Math.min(100, Math.max(0, s))) : hc;
}
function yc(u, s, a = !0) {
  return a ? $d[u] * Vd(String(s)) / 100 : 0;
}
function Wd(u = () => new Audio()) {
  try {
    const s = u();
    return s.volume = 0.5, Math.abs(s.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Bd = 0.12, Hd = 2e3, Qd = 3;
function Kd(u, s = !1) {
  return s ? !0 : u.atLoopBoundary || u.drift <= Bd || u.seeking || u.readyState < Qd ? !1 : u.msSinceLastFix >= Hd;
}
const Yd = 1.5, Xd = 0.4, Gd = 0.5;
let Pu = null, Zd = null;
function Jd(u) {
  return Pu !== null ? Pu : (Zd ??= Wd()) ? 0 : Xd;
}
class qd {
  constructor(s = Jd()) {
    this.latency = s;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(s, a, h = !1, g = performance.now()) {
    if (a.readyState < 1 || s.readyState < 1 || !h && (a.paused || s.paused)) return !1;
    const S = a.currentTime - s.currentTime, x = Math.abs(S), N = s.loop && Number.isFinite(s.duration) && Math.abs(x - s.duration) < 0.35, z = this.lastFix.get(a);
    if (!Kd({
      drift: x,
      atLoopBoundary: N,
      seeking: a.seeking,
      readyState: a.readyState,
      msSinceLastFix: z === void 0 ? 1 / 0 : g - z
    }, h)) return !1;
    const F = !s.paused;
    !h && F && z !== void 0 && (this.latency = Math.min(Yd, Math.max(0, this.latency - Gd * S)), Pu = this.latency);
    let B = s.currentTime + (F ? this.latency : 0);
    Number.isFinite(a.duration) && (B = Math.min(B, Math.max(0, a.duration - 0.05)));
    try {
      a.currentTime = B;
    } catch {
      return !1;
    }
    return F ? this.lastFix.set(a, g) : this.lastFix.delete(a), !0;
  }
}
function bd(u = globalThis.navigator) {
  const s = u?.audioSession;
  s && s.type !== "playback" && (s.type = "playback");
}
const ep = () => {
  const u = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!u) throw new Error("Web Audio API puuttuu");
  return new u();
}, tp = 250, np = 0.5, vc = 2e3, rp = 50, lp = 8;
class ip {
  samples = [];
  sample(s, a) {
    if (!Number.isFinite(s) || !Number.isFinite(a)) return;
    const h = this.samples.at(-1);
    h && a - h.wallMs < rp && this.samples.pop(), this.samples.push({ contextTime: s, wallMs: a }), this.samples.length > lp && this.samples.shift();
  }
  reset() {
    this.samples = [];
  }
  check(s, a) {
    if (!Number.isFinite(s) || !Number.isFinite(a)) return "unknown";
    for (let h = this.samples.length - 1; h >= 0; h--) {
      const g = this.samples[h], S = a - g.wallMs;
      if (S < tp) continue;
      return (s - g.contextTime) * 1e3 < S * np ? "stalled" : "advancing";
    }
    return "unknown";
  }
}
function gc(u, s, a) {
  let h;
  const g = new Promise((S, x) => {
    h = setTimeout(() => x(new Error(`${a}: aikakatkaisu ${s} ms`)), s);
  });
  return Promise.race([u, g]).finally(() => clearTimeout(h));
}
function op(u) {
  const s = u?.name, a = u?.message;
  return typeof s == "string" && s !== "Error" ? typeof a == "string" && a ? `${s}: ${a}` : s : typeof a == "string" ? a : String(u);
}
class kc {
  constructor(s = ep, a = globalThis.navigator, h = () => performance.now()) {
    this.create = s, this.nav = a, this.now = h;
  }
  create;
  nav;
  now;
  context = null;
  gains = /* @__PURE__ */ new WeakMap();
  clock = new ip();
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
        bd(this.nav);
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
        if (await gc(s.suspend(), vc, "suspend()"), await gc(s.resume(), vc, "resume()"), s.state !== "running") throw new Error(`tila ${s.state} palautuksen jälkeen`);
        if (s !== this.context) throw new Error("konteksti suljettiin palautuksen aikana");
        return this.clock.reset(), this.observe(), !0;
      } catch (g) {
        return this.lastError = "Web Audion palautus epäonnistui: " + op(g), !1;
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
function up(u) {
  const s = new DataView(u), a = (S) => String.fromCharCode(
    s.getUint8(S),
    s.getUint8(S + 1),
    s.getUint8(S + 2),
    s.getUint8(S + 3)
  );
  if (s.byteLength < 12 || a(0) !== "RIFF" || a(8) !== "WAVE") throw new Error("Tiedosto ei ole WAV");
  let h = 12, g = null;
  for (; h + 8 <= s.byteLength; ) {
    const S = a(h), x = s.getUint32(h + 4, !0), N = h + 8;
    if (S === "fmt ") {
      let z = s.getUint16(N, !0);
      z === 65534 && x >= 26 && (z = s.getUint16(N + 24, !0)), g = {
        format: z,
        channels: s.getUint16(N + 2, !0),
        sampleRate: s.getUint32(N + 4, !0),
        blockAlign: s.getUint16(N + 12, !0),
        bitsPerSample: s.getUint16(N + 14, !0)
      };
    } else if (S === "data") {
      if (!g) throw new Error("WAV: data-lohko ennen fmt-lohkoa");
      if (!(g.format === 1 && [16, 24, 32].includes(g.bitsPerSample) || g.format === 3 && g.bitsPerSample === 32))
        throw new Error(`WAV: muotoa ${g.format}/${g.bitsPerSample} bittiä ei tueta`);
      return { ...g, dataOffset: N, dataBytes: x, frames: Math.floor(x / g.blockAlign) };
    }
    h = N + x + x % 2;
  }
  throw new Error("WAV: data-lohkoa ei löytynyt otsakkeesta");
}
function sp(u, s) {
  const a = Math.floor(u.byteLength / s.blockAlign), h = new DataView(u.buffer, u.byteOffset, u.byteLength), g = s.bitsPerSample / 8, S = s.format === 3 ? (N) => h.getFloat32(N, !0) : g === 2 ? (N) => h.getInt16(N, !0) / 32768 : g === 3 ? (N) => (h.getUint8(N) | h.getUint8(N + 1) << 8 | h.getInt8(N + 2) << 16) / 8388608 : (N) => h.getInt32(N, !0) / 2147483648, x = new Float32Array(a);
  for (let N = 0; N < a; N++) {
    let z = 0;
    const F = N * s.blockAlign;
    for (let B = 0; B < s.channels; B++) z += S(F + B * g);
    x[N] = z / s.channels;
  }
  return x;
}
function ap(u, s, a) {
  if (s === a) return u;
  const h = Math.floor(u.length * a / s), g = new Float32Array(h), S = s / a;
  for (let x = 0; x < h; x++) {
    const N = x * S, z = Math.floor(N), F = N - z, B = u[z] ?? 0, I = u[z + 1] ?? B;
    g[x] = B + (I - B) * F;
  }
  return g;
}
function wc(u, s) {
  if (s <= 1) return u;
  const a = Math.floor(u.length / s), h = new Float32Array(a);
  for (let g = 0; g < a; g++) {
    let S = 0;
    const x = g * s;
    for (let N = 0; N < s; N++) S += u[x + N];
    h[g] = S / s;
  }
  return h;
}
function cp(u) {
  let s = 0;
  for (const a of u) s += a * a;
  return u.length ? Math.sqrt(s / u.length) : 0;
}
function Sc(u, s, a, h) {
  const g = Math.max(0, a), S = Math.min(h, u.length - s.length);
  if (S < g) return new Float32Array(0);
  const x = new Float64Array(u.length + 1);
  for (let F = 0; F < u.length; F++) x[F + 1] = x[F] + u[F] * u[F];
  let N = 0;
  for (const F of s) N += F * F;
  const z = new Float32Array(S - g + 1);
  for (let F = g; F <= S; F++) {
    let B = 0;
    for (let G = 0; G < s.length; G++) B += s[G] * u[G + F];
    const I = Math.sqrt(N * (x[F + s.length] - x[F]));
    z[F - g] = I > 0 ? B / I : 0;
  }
  return z;
}
function xc(u, s) {
  if (s <= 1) return u;
  const a = new Float32Array(u.length);
  let h = 0;
  for (let g = 0; g < u.length; g++)
    h += u[g], g >= s && (h -= u[g - s]), a[g] = h / Math.min(s, g + 1);
  return a;
}
function fp(u, s, a) {
  let h = s;
  for (; h > 0 && u[h - 1] <= u[h]; ) h--;
  let g = s;
  for (; g < u.length - 1 && u[g + 1] <= u[g]; ) g++;
  let S = 0;
  for (let x = 0; x < u.length; x++) {
    if (x >= h && x <= g || Math.abs(x - s) <= a) continue;
    (x === 0 || u[x] >= u[x - 1]) && (x === u.length - 1 || u[x] >= u[x + 1]) && u[x] > S && (S = u[x]);
  }
  return S;
}
function dp(u, s, a, h = 16) {
  if (s.length === 0 || u.length < s.length) throw new Error("Referenssi on lyhyempi kuin näyte");
  const g = wc(u, h), S = wc(s, h), x = Sc(g, S, 0, g.length - S.length);
  let N = 0;
  for (let O = 1; O < x.length; O++) x[O] > x[N] && (N = O);
  const z = fp(x, N, Math.max(1, Math.round(0.02 * a / h))), F = N * h, B = Math.max(0, F - 2 * h), I = Math.min(u.length - s.length, F + 2 * h), G = Math.max(1, Math.round(a / 12e3)), Z = Sc(xc(u, G), xc(s, G), B, I);
  let ce = 0;
  for (let O = 1; O < Z.length; O++) Z[O] > Z[ce] && (ce = O);
  let te = 0;
  if (ce > 0 && ce < Z.length - 1) {
    const [O, ve, Ee] = [Z[ce - 1], Z[ce], Z[ce + 1]], me = O - 2 * ve + Ee;
    me < 0 && (te = Math.max(-0.5, Math.min(0.5, 0.5 * (O - Ee) / me)));
  }
  return { lag: B + ce + te, score: Z[ce], runnerUp: z };
}
function pp(u, s = 0.6, a = 0.1) {
  return u.score >= s && u.score - u.runnerUp >= a;
}
const ju = 32768, Li = 1.5, Dc = /* @__PURE__ */ new WeakMap();
function mp() {
  const u = globalThis.AudioContext?.prototype;
  if (!u || u.__kaksiraita) return;
  const s = u.createMediaElementSource;
  u.createMediaElementSource = function(a) {
    const h = s.call(this, a), g = this.createAnalyser();
    return g.fftSize = ju, h.connect(g), Dc.set(a, { analyser: g, context: this, source: h }), h;
  }, u.__kaksiraita = !0;
}
function Gn(u) {
  return u ? Dc.get(u) ?? null : null;
}
function Ec(u) {
  let s = null;
  async function a(g, S) {
    const x = await u();
    return new Uint8Array(await x.slice(g, S + 1).arrayBuffer());
  }
  const h = () => {
    if (!s) {
      const g = a(0, 4095).then((S) => up(S.slice().buffer));
      s = g, g.catch(() => {
        s === g && (s = null);
      });
    }
    return s;
  };
  return {
    async durationSeconds() {
      const g = await h();
      return g.frames / g.sampleRate;
    },
    async window(g, S) {
      const x = await h(), N = Math.max(0, Math.floor(g * x.sampleRate)), z = Math.min(x.frames, Math.ceil(S * x.sampleRate));
      if (z <= N) throw new Error("Referenssi-ikkuna on tiedoston ulkopuolella");
      const F = await a(x.dataOffset + N * x.blockAlign, x.dataOffset + z * x.blockAlign - 1);
      return { samples: sp(F, x), sampleRate: x.sampleRate, startSeconds: N / x.sampleRate };
    }
  };
}
function Mc(u, s) {
  return {
    async durationSeconds() {
      return u.length / s;
    },
    async window(a, h) {
      const g = Math.max(0, Math.floor(a * s)), S = Math.min(u.length, Math.ceil(h * s));
      return { samples: u.slice(g, S), sampleRate: s, startSeconds: g / s };
    }
  };
}
function Ru(u) {
  const s = u, a = (g) => typeof g == "number" && Number.isFinite(g) ? g : null;
  let h = null;
  try {
    const g = typeof s.getOutputTimestamp == "function" ? s.getOutputTimestamp() : null, S = a(g?.contextTime), x = a(g?.performanceTime);
    S !== null && x !== null && (h = { contextTime: S, performanceTime: x });
  } catch {
  }
  return { baseLatency: a(s.baseLatency), outputLatency: a(s.outputLatency), timestamp: h };
}
async function hp(u, s) {
  const a = s.map((O) => ({ input: O, tap: Gn(O.element) }));
  if (a.some((O) => !O.tap)) throw new Error("Raitaa ei ole vielä kytketty Web Audioon");
  const h = a[0].tap.context;
  let g = 0, S = [], x = [], N = 0, z = 0;
  for (; ; ) {
    g++;
    const O = h.currentTime;
    if (S = a.map(({ tap: ve }) => {
      const Ee = new Float32Array(ju);
      return ve.analyser.getFloatTimeDomainData(Ee), Ee;
    }), x = a.map(({ input: ve }) => ve.element.currentTime), N = h.currentTime, z = performance.now(), N === O || g >= 8) break;
    await new Promise((ve) => setTimeout(ve, 0));
  }
  const F = Ru(h), B = h.sampleRate, I = ju / B, G = [];
  for (let O = 0; O < a.length; O++) {
    const { input: ve } = a[O], Ee = S[O], me = cp(Ee), he = { name: ve.name, mediaTime: x[O], probeRms: me };
    try {
      const we = x[O] + ve.referenceOffsetSeconds, Ce = await ve.reference.durationSeconds();
      if (we - I - Li < 0 || we + Li > Ce)
        throw new Error("Kohta on referenssin ulkopuolella");
      const Te = await ve.reference.window(we - I - Li, we + Li), pe = ap(Te.samples, Te.sampleRate, B), ee = dp(pe, Ee, B), Me = Te.startSeconds + (ee.lag + Ee.length) / B, Se = pp(ee) && me > 1e-4;
      G.push({
        ...he,
        renderedTime: Me,
        score: ee.score,
        runnerUp: ee.runnerUp,
        reliable: Se,
        mediaMinusRenderedMs: (we - Me) * 1e3
      });
    } catch (we) {
      G.push({ ...he, renderedTime: null, score: null, runnerUp: null, reliable: !1, mediaMinusRenderedMs: null, error: String(we) });
    }
  }
  const [Z, ce] = G, te = Z.reliable && ce.reliable && Z.renderedTime !== null && ce.renderedTime !== null;
  return {
    phase: u,
    ms: Math.round(performance.now()),
    captureMs: Math.round(z * 10) / 10,
    output: F,
    contextTime: N,
    sampleRate: B,
    attempts: g,
    tracks: G,
    mediaDiffMs: (ce.mediaTime - Z.mediaTime) * 1e3,
    renderedDiffMs: te ? (ce.renderedTime - Z.renderedTime) * 1e3 : null,
    reliable: te
  };
}
class yp {
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
function vp(u) {
  const s = /* @__PURE__ */ new Map(), a = [];
  for (const h of u) {
    const g = String(h.track ?? "");
    if (h.event === "seek-write" && s.set(g, h), h.event === "seeked" && s.has(g)) {
      const S = s.get(g);
      a.push({ track: g, forced: !!S.forced, ms: h.ms - S.ms, from: Number(S.from), to: Number(S.to) }), s.delete(g);
    }
  }
  return a;
}
class Ac extends Error {
  constructor(s, a, h) {
    super(`${a} (${h} ${h === 1 ? "yritys" : "yritystä"})`), this.url = s, this.reason = a, this.attempts = h, this.name = "LoadError";
  }
  url;
  reason;
  attempts;
}
class Zn extends Error {
  constructor(s, a) {
    super(s), this.retryable = a;
  }
  retryable;
}
const gp = (u) => u >= 500 || u === 408 || u === 429;
async function kp(u, s, a) {
  const h = new AbortController(), g = a.idleTimeoutMs ?? 2e4;
  let S = 0, x = !1, N = null;
  const z = () => {
    clearTimeout(S), S = setTimeout(() => {
      x = !0, h.abort(), N?.cancel().catch(() => {
      });
    }, g);
  };
  z();
  const F = g >= 1e3 ? `${Math.round(g / 1e3)} s` : `${g} ms`, B = performance.now();
  try {
    let I;
    try {
      I = await (a.fetchImpl ?? fetch)(u, { signal: h.signal });
    } catch (me) {
      throw new Zn(x ? `ei vastausta ${F}` : `verkkovirhe (${String(me)})`, !0);
    }
    if (!I.ok) throw new Zn(`HTTP ${I.status}`, gp(I.status));
    const G = Number(I.headers.get("Content-Length")) || null, Z = a.type ?? I.headers.get("Content-Type") ?? "application/octet-stream", ce = performance.now() - B;
    if (!I.body) {
      const me = await I.arrayBuffer(), he = performance.now() - B, we = new Blob([me], { type: Z });
      return a.onProgress?.({ loaded: we.size, total: G, attempt: s }), a.onDone?.({ attempt: s, headersMs: ce, bodyMs: he, blobMs: performance.now() - B, bytes: we.size }), we;
    }
    N = I.body.getReader();
    const te = [];
    let O = 0;
    for (; ; ) {
      let me;
      try {
        me = await N.read();
      } catch (he) {
        throw new Zn(x ? `lataus pysähtyi ${F}` : `lataus katkesi (${String(he)})`, !0);
      }
      if (x) throw new Zn(`lataus pysähtyi ${F}`, !0);
      if (me.done) break;
      z(), te.push(me.value), O += me.value.byteLength, a.onProgress?.({ loaded: O, total: G, attempt: s });
    }
    if (G !== null && O !== G) throw new Zn(`vajaa tiedosto (${O}/${G} tavua)`, !0);
    const ve = performance.now() - B, Ee = new Blob(te, { type: Z });
    return a.onDone?.({ attempt: s, headersMs: ce, bodyMs: ve, blobMs: performance.now() - B, bytes: Ee.size }), Ee;
  } finally {
    clearTimeout(S);
  }
}
async function wp(u, s = {}) {
  const a = Math.max(1, s.attempts ?? 3), h = s.retryDelaysMs ?? [1e3, 3e3], g = s.sleep ?? ((S) => new Promise((x) => setTimeout(x, S)));
  for (let S = 1; ; S++)
    try {
      return await kp(u, S, s);
    } catch (x) {
      const N = x instanceof Zn ? x.message : String(x), z = x instanceof Zn && x.retryable && S < a;
      if (s.onAttemptFailed?.({ attempt: S, reason: N, willRetry: z }), !z) throw new Ac(u, N, S);
      await g(h[Math.min(S - 1, h.length - 1)] ?? 0);
    }
}
class Sp {
  constructor(s = () => ({})) {
    this.options = s;
  }
  options;
  cache = /* @__PURE__ */ new Map();
  load(s) {
    let a = this.cache.get(s);
    return a || (a = wp(s, this.options(s)), this.cache.set(s, a), a.catch(() => {
      this.cache.get(s) === a && this.cache.delete(s);
    })), a;
  }
}
function Lu(u, s) {
  let a = u * 2654435761 + s * 2246822507 | 0;
  return a = Math.imul(a ^ a >>> 16, 2146121005), a = Math.imul(a ^ a >>> 15, 2221713035), a ^= a >>> 16, (a >>> 0) / 4294967296 * 2 - 1;
}
function Uc(u, s) {
  const a = [];
  let h = Math.round(0.25 * s);
  for (let g = 0; h < u; g++)
    a.push(h), h += Math.round((0.35 + 0.4 * (Lu(g, 101) * 0.5 + 0.5)) * s);
  return a;
}
function Tc(u, s, a, h, g, S) {
  const x = new Float32Array(u), N = Math.round(0.1 * s), z = Math.round(0.03 * s), F = Uc(u, s);
  let B = 0, I = 0;
  for (let G = 0; G < u; G++) {
    const Z = G - a;
    if (Z < 0) {
      x[G] = 0;
      continue;
    }
    const ce = 0.03 + 0.12 * (Lu(Math.floor(Z / N), h + 7) * 0.5 + 0.5);
    I += 0.5 * (Lu(Z, h) - I);
    let te = ce * I;
    for (; B < F.length && F[B] + z <= Z; ) B++;
    const O = B < F.length ? Z - F[B] : -1;
    if (O >= 0 && O < z) {
      const ve = 0.5 - 0.5 * Math.cos(2 * Math.PI * O / z);
      te += S * ve * Math.sin(2 * Math.PI * g * O / s);
    }
    x[G] = te;
  }
  return x;
}
function Cu(u = 60, s = 48e3, a = 0) {
  const h = Math.round(u * s), g = Math.round(a * s / 1e3);
  return {
    sampleRate: s,
    shiftSamples: g,
    tausta: Tc(h, s, 0, 11, 300, 0.22),
    kitara: Tc(h, s, g, 23, 1500, 0.16)
  };
}
function xp(u, s) {
  const a = new ArrayBuffer(44 + u.length * 2), h = new DataView(a), g = (S, x) => {
    for (let N = 0; N < x.length; N++) h.setUint8(S + N, x.charCodeAt(N));
  };
  g(0, "RIFF"), h.setUint32(4, 36 + u.length * 2, !0), g(8, "WAVE"), g(12, "fmt "), h.setUint32(16, 16, !0), h.setUint16(20, 1, !0), h.setUint16(22, 1, !0), h.setUint32(24, s, !0), h.setUint32(28, s * 2, !0), h.setUint16(32, 2, !0), h.setUint16(34, 16, !0), g(36, "data"), h.setUint32(40, u.length * 2, !0);
  for (let S = 0; S < u.length; S++) {
    const x = Math.max(-1, Math.min(1, u[S]));
    h.setInt16(44 + S * 2, Math.round(x * 32767), !0);
  }
  return a;
}
const zu = ["käynnistys", "jatko", "kelaus"], xl = 5, Jn = { min: -600, max: 600, step: 10 }, Ep = 80, $c = 60, Mp = 0.25, _c = 3, Vc = "musiikin-kartta:kaksiraitatesti:nayttoaani:v1", Fu = ["iPhonen kaiutin", "Bluetooth-kuulokkeet", "johdolliset kuulokkeet", "muu"], Tp = ["varma", "melko varma", "epävarma"];
function Cc(u, s) {
  let a = 0, h = u.length;
  for (; a < h; ) {
    const g = a + h >> 1;
    u[g] <= s ? a = g + 1 : h = g;
  }
  return a;
}
function _p(u, s, a, h) {
  if (!(h > a) || h - a > Mp) return 0;
  const g = s / 1e3;
  return Cc(u, h - g) - Cc(u, a - g);
}
function Nr(u) {
  const s = Math.round(u / Jn.step) * Jn.step;
  return Math.max(Jn.min, Math.min(Jn.max, s)) || 0;
}
function Nc(u = Math.random) {
  return Nr(-300 + u() * 600);
}
function Nu(u) {
  return [90, 110, 130, 150, 170][(Math.max(1, u) - 1) % 5];
}
function Cp(u) {
  if (!u) return [];
  try {
    const s = JSON.parse(u);
    return Array.isArray(s) ? s.filter((a) => !!a && typeof a == "object" && zu.includes(a.situation) && typeof a.offsetMs == "number") : [];
  } catch {
    return [];
  }
}
function Wc(u = Bc()) {
  try {
    return Cp(u?.getItem(Vc) ?? null);
  } catch {
    return [];
  }
}
function Pc(u, s = Bc()) {
  try {
    return s?.setItem(Vc, JSON.stringify(u)), !!s;
  } catch {
    return !1;
  }
}
function Bc() {
  try {
    return globalThis.sessionStorage ?? null;
  } catch {
    return null;
  }
}
function Np(u, s) {
  const a = { käynnistys: 0, jatko: 0, kelaus: 0 };
  for (const S of u) !S.sameOperation && S.output === s && a[S.situation]++;
  const h = Math.min(...zu.map((S) => a[S]));
  return h >= xl ? { done: !0, situation: null, cycle: xl, counts: a } : { done: !1, situation: zu.find((S) => a[S] === h), cycle: h + 1, counts: a };
}
function zi(u) {
  if (!u.length) return null;
  const s = [...u].sort((h, g) => h - g), a = Math.floor(s.length / 2);
  return s.length % 2 ? s[a] : (s[a - 1] + s[a]) / 2;
}
const Hc = "musiikin-kartta:kaksiraitatesti:nayttoaani:ulostulo", jc = (u) => `${Math.floor(u / 60)}:${String(Math.floor(u % 60)).padStart(2, "0")}`, Pp = (u) => u === "käynnistys" || u === "jatko" || u === "kelaus" ? u : null;
function jp() {
  try {
    return sessionStorage.getItem(Hc) ?? Fu[0];
  } catch {
    return Fu[0];
  }
}
function Rp(u) {
  const { backing: s, beeps: a, segment: h, playing: g } = u, [S, x] = V.useState(() => Nc()), [N, z] = V.useState(S), [F, B] = V.useState(jp), [I, G] = V.useState("melko varma"), [Z, ce] = V.useState(""), [te, O] = V.useState(() => Wc()), [ve, Ee] = V.useState(0), [me, he] = V.useState(""), we = V.useRef(null), Ce = V.useRef(S);
  Ce.current = S;
  const Te = V.useRef({ flashes: 0, intervals: [], stale: 0, frames: 0 });
  V.useEffect(() => {
    try {
      sessionStorage.setItem(Hc, F);
    } catch {
    }
  }, [F]), V.useEffect(() => {
    Te.current = { flashes: 0, intervals: [], stale: 0, frames: 0 }, Ee(0);
    const U = s.current, P = we.current;
    if (!g || !h || !U || !P) {
      P && (P.dataset.on = "ei");
      return;
    }
    let W = U.currentTime, L = null, m = 0, M = requestAnimationFrame(function X(ne) {
      const se = U.currentTime, re = Te.current;
      L !== null && (re.frames++, re.intervals.length < 2e3 && re.intervals.push(ne - L), se === W && re.stale++), L = ne, _p(a, Ce.current, W, se) > 0 ? (P.dataset.on = "kyllä", m = ne + $c, re.flashes++, P.dataset.flashes = String(re.flashes), re.flashes <= _c && Ee(re.flashes)) : ne >= m && P.dataset.on === "kyllä" && (P.dataset.on = "ei"), W = se, M = requestAnimationFrame(X);
    });
    return () => {
      cancelAnimationFrame(M), P.dataset.on = "ei";
    };
  }, [g, h, s, a]);
  const pe = Np(te, F), ee = h ? Pp(h.phase) : null, Me = g && h !== null && ee !== null && ve >= _c, Se = ee !== null && pe.situation !== null && ee !== pe.situation;
  function lt() {
    if (!Me || !h || !ee) return;
    const U = s.current, P = performance.now(), W = u.measurements.filter((b) => b.request === h.request && b.captureMs >= h.startedMs && b.captureMs <= P), L = (b) => {
      const ke = W.flatMap((Ve) => Ve.tracks.filter((ht) => ht.name === b && ht.reliable && ht.mediaMinusRenderedMs !== null).map((ht) => ht.mediaMinusRenderedMs));
      return { median: zi(ke), count: ke.length };
    }, m = W.filter((b) => b.reliable && b.renderedDiffMs !== null).map((b) => b.renderedDiffMs), M = W.map(u.outputEstimate).filter((b) => b !== null), X = Te.current, ne = {
      id: `${u.pageLoadId}-${te.length + 1}`,
      situation: ee,
      offsetMs: S,
      sliderStartMs: N,
      adjustMs: Math.round(P - h.startedMs),
      savedAt: (/* @__PURE__ */ new Date()).toISOString(),
      pageLoadId: u.pageLoadId,
      request: h.request,
      sameOperation: te.some((b) => b.pageLoadId === u.pageLoadId && b.request === h.request),
      output: F,
      confidence: I,
      note: Z.trim(),
      mediaTime: U?.currentTime ?? NaN,
      operationTarget: h.target,
      flashes: X.flashes,
      frames: { count: X.frames, medianIntervalMs: zi(X.intervals), staleShare: X.frames ? X.stale / X.frames : null },
      mediaMinusRendered: { tausta: L("tausta"), kitara: L("kitara") },
      renderedDiffMedianMs: zi(m),
      outputEstimateMs: zi(M) ?? (() => {
        const b = u.outputNow();
        return b?.outputLatency ? b.outputLatency * 1e3 : null;
      })(),
      userAgent: navigator.userAgent
    }, se = [...te, ne], re = Pc(se);
    O(se), u.record("nayttoaani-tallennus", { ...ne, stored: re }), he(`Tallennettu: ${ee}, d = ${S} ms${ne.sameOperation ? " (sama jakso kuin edellinen, ei lasketa uudeksi operaatioksi)" : ""}${re ? "" : ". Huom.: selain ei salli tallennusta, joten kopioi raportti ennen sivun uudelleenlatausta."}`);
    const oe = Nc();
    x(oe), z(oe), ce("");
  }
  function Le() {
    window.confirm("Poistetaanko kaikki tämän välilehden säätökokeet?") && (Pc([]), O([]), he(""), u.record("nayttoaani-nollaus", {}));
  }
  const Ue = pe.done ? `Valmis: ${xl} operaatiota kussakin tilanteessa. Paina Tauko ja kopioi raportti.` : pe.situation === "käynnistys" ? ee === "käynnistys" && g && !De(h) ? "Säädä ja tallenna." : $e() ? "Lataa sivu uudelleen, paina ▶ Soita, säädä ja tallenna." : "Paina ▶ Soita, säädä ja tallenna." : pe.situation === "jatko" ? ee === "jatko" && g && !De(h) ? "Säädä ja tallenna." : "Paina ■ Tauko, odota noin 2 s, paina ▶ Soita, säädä ja tallenna." : ee === "kelaus" && g && !De(h) ? "Säädä ja tallenna." : `Paina Siirry kohtaan ${jc(Nu(pe.cycle))}, säädä ja tallenna.`;
  function $e() {
    return h !== null || te.some((U) => U.pageLoadId === u.pageLoadId);
  }
  function De(U) {
    return U !== null && te.some((P) => P.pageLoadId === u.pageLoadId && P.request === U.request);
  }
  return /* @__PURE__ */ E.jsxs("section", { className: "av", "aria-label": "Näyttö–ääni-säätökoe", "data-situation": ee ?? "", children: [
    /* @__PURE__ */ E.jsx("h2", { children: "H4: näyttö–ääni-säätökoe" }),
    /* @__PURE__ */ E.jsxs("p", { className: "av-step", "data-next": pe.situation ?? "valmis", children: [
      /* @__PURE__ */ E.jsx("strong", { children: pe.done ? "Valmis" : `${pe.situation} ${pe.cycle}/${xl}` }),
      " · ",
      Ue
    ] }),
    /* @__PURE__ */ E.jsx("div", { className: "av-flash", ref: we, "data-on": "ei", "data-flashes": "0", "aria-hidden": "true" }),
    /* @__PURE__ */ E.jsxs("label", { className: "av-slider", children: [
      /* @__PURE__ */ E.jsxs("span", { children: [
        "Välähdyksen siirto ",
        /* @__PURE__ */ E.jsxs("output", { "data-offset": S, children: [
          S > 0 ? "+" : "",
          S,
          " ms"
        ] })
      ] }),
      /* @__PURE__ */ E.jsx(
        "input",
        {
          type: "range",
          min: Jn.min,
          max: Jn.max,
          step: Jn.step,
          value: S,
          "aria-label": "Välähdyksen siirto millisekunteina",
          onChange: (U) => x(Nr(Number(U.target.value)))
        }
      )
    ] }),
    /* @__PURE__ */ E.jsxs("p", { className: "av-fine", children: [
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => x((U) => Nr(U - 50)), children: "−50" }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => x((U) => Nr(U - 10)), children: "−10" }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => x((U) => Nr(U + 10)), children: "+10" }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => x((U) => Nr(U + 50)), children: "+50" })
    ] }),
    /* @__PURE__ */ E.jsxs("p", { className: "av-save", children: [
      /* @__PURE__ */ E.jsxs("label", { children: [
        "Varmuus",
        " ",
        /* @__PURE__ */ E.jsx("select", { value: I, onChange: (U) => G(U.target.value), children: Tp.map((U) => /* @__PURE__ */ E.jsx("option", { children: U }, U)) })
      ] }),
      " ",
      /* @__PURE__ */ E.jsxs("label", { children: [
        "Huomio ",
        /* @__PURE__ */ E.jsx("input", { type: "text", value: Z, maxLength: 200, onChange: (U) => ce(U.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ E.jsx("button", { type: "button", className: "play av-store", onClick: lt, disabled: !Me, children: "Samaan aikaan – tallenna" }),
    Se && /* @__PURE__ */ E.jsxs("p", { className: "hint", role: "status", children: [
      "Nykyinen jakso on ",
      ee,
      ", protokollan seuraava on ",
      pe.situation,
      ". Tallennus kirjataan todellisena tilanteena (",
      ee,
      ")."
    ] }),
    me && /* @__PURE__ */ E.jsx("p", { role: "status", className: "av-saved", children: me }),
    /* @__PURE__ */ E.jsx("p", { className: "hint", children: "Siirrä välähdystä, kunnes se ja naksahdus tuntuvat tapahtuvan samaan aikaan. Pienempi arvo = välähdys aiemmin." }),
    /* @__PURE__ */ E.jsxs("p", { className: "av-ops", children: [
      /* @__PURE__ */ E.jsx("button", { type: "button", className: "play", onClick: u.onToggle, disabled: !g && !u.filesReady, children: g ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ E.jsxs("button", { type: "button", onClick: () => u.onSeek(Nu(pe.cycle)), disabled: !u.filesReady, children: [
        "Siirry kohtaan ",
        jc(Nu(pe.cycle))
      ] }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => window.location.reload(), children: "Lataa sivu uudelleen" })
    ] }),
    /* @__PURE__ */ E.jsxs("p", { className: "av-conditions", children: [
      /* @__PURE__ */ E.jsxs("label", { children: [
        "Ulostulo",
        " ",
        /* @__PURE__ */ E.jsx("select", { value: F, onChange: (U) => B(U.target.value), children: Fu.map((U) => /* @__PURE__ */ E.jsx("option", { children: U }, U)) })
      ] }),
      " ",
      "· Tallennettu: käynnistys ",
      pe.counts.käynnistys,
      ", jatko ",
      pe.counts.jatko,
      ", kelaus ",
      pe.counts.kelaus,
      " / ",
      xl,
      " ",
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: Le, disabled: !te.length, children: "Aloita alusta" })
    ] }),
    te.length > 0 && /* @__PURE__ */ E.jsx("ol", { className: "av-trials", "aria-label": "Tallennetut säätökokeet", children: te.slice(-6).map((U) => /* @__PURE__ */ E.jsxs("li", { children: [
      U.situation,
      ": d = ",
      U.offsetMs,
      " ms (",
      U.confidence,
      U.sameOperation ? ", sama jakso" : "",
      ")"
    ] }, U.id)) })
  ] });
}
const Fi = (u) => typeof u == "number" && Number.isFinite(u) ? u : null;
function Lp(u) {
  const s = u.output;
  if (!s) return null;
  const a = s.timestamp, h = Fi(u.contextTime), g = Fi(u.captureMs);
  if (a && h !== null && g !== null && a.performanceTime > 0)
    return (h - a.contextTime) * 1e3 - (g - a.performanceTime);
  const S = Fi(s.outputLatency);
  return S !== null && S > 0 ? S * 1e3 + (Fi(s.baseLatency) ?? 0) * 1e3 : null;
}
const Et = ["tausta", "kitara"], Oi = { tausta: "tausta", kitara: "kitara" }, Ii = { state: "odottaa", loaded: 0, total: null, attempt: 1, reason: "", url: null }, zp = { 1: "keskeytetty", 2: "verkkovirhe", 3: "purkuvirhe", 4: "lähdettä ei voi toistaa" }, Mt = "assets/audio/kaksiraitatesti/", Pn = {
  mp3: { tausta: Mt + "yksi-sointu-akustinen-tausta.mp3", kitara: Mt + "yksi-sointu-akustinen-kitara.mp3" },
  wav: { tausta: Mt + "yksi-sointu-akustinen-tausta-0-120s.wav", kitara: Mt + "yksi-sointu-akustinen-kitara-0-120s.wav" }
}, Fp = {
  aac: {
    120: { tausta: Mt + "yksi-sointu-akustinen-tausta-0-120s.m4a", kitara: Mt + "yksi-sointu-akustinen-kitara-0-120s.m4a" },
    koko: { tausta: Mt + "yksi-sointu-akustinen-tausta-koko.m4a", kitara: Mt + "yksi-sointu-akustinen-kitara-koko.m4a" }
  },
  mp3cbr: {
    120: { tausta: Mt + "yksi-sointu-akustinen-tausta-0-120s-cbr192.mp3", kitara: Mt + "yksi-sointu-akustinen-kitara-0-120s-cbr192.mp3" },
    koko: { tausta: Mt + "yksi-sointu-akustinen-tausta-koko-cbr192.mp3", kitara: Mt + "yksi-sointu-akustinen-kitara-koko-cbr192.mp3" }
  }
}, Op = (u) => u.endsWith(".m4a") ? "audio/mp4" : u.endsWith(".mp3") ? "audio/mpeg" : "audio/wav", Rc = 1e-3, Lc = 3e3, zc = 240, Fc = 24e3;
function Ip() {
  const u = new URLSearchParams(location.search), s = u.get("koe") === "nayttoaani", a = s ? "synteettinen" : u.get("lahde"), h = a === "wav" || a === "aac" || a === "mp3cbr" || a === "synteettinen" ? a : "mp3", g = (h === "aac" || h === "mp3cbr") && u.get("pituus") === "koko" ? "koko" : "120", S = Number(u.get("siirto") ?? "0"), x = u.get("tahdistin") === "pois" ? "pois" : u.get("tahdistin") === "ei-korjauksia" ? "ei-korjauksia" : "kaytossa", N = Number(u.get("mittausvali") ?? "5000"), z = s || u.get("moottori") === "uusi" ? "uusi" : "nykyinen", F = h === "mp3" || h === "wav" && u.get("lataus") === "verkko" ? "verkko" : "muisti", B = Number(u.get("latausaikaraja") ?? "20000");
  return {
    avTest: s,
    source: h,
    length: g,
    engine: z,
    loading: F,
    loadIdleMs: Number.isFinite(B) && B >= 500 ? B : 2e4,
    // Laaja vakiokoe lisää lopuksi kaksi peräkkäistä kelausta (MK-20261118-03, vaihe C).
    wideScenario: u.get("koe") === "laaja",
    // &mittaus=pois: ei renderöityjä mittauksia eikä WAV-referenssejä (muistinkulutus ilman mittausvälineitä).
    measure: u.get("mittaus") !== "pois",
    syncMode: z === "uusi" ? "uusi-moottori" : x,
    sync: z === "nykyinen" && x !== "pois",
    corrections: z === "nykyinen" && x === "kaytossa",
    offsetMs: !s && h === "synteettinen" && Number.isFinite(S) ? S : 0,
    measureIntervalMs: Number.isFinite(N) && N >= 1e3 ? N : s ? 3e3 : 5e3
  };
}
function Di(u) {
  if (!Number.isFinite(u) || u < 0) return "0:00";
  const s = Math.floor(u);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
const wl = (u) => u === null ? "?" : (u / 1e6).toFixed(1).replace(".", ",");
function Sl(u) {
  const s = u.error;
  return s ? (zp[s.code] ?? `virhe ${s.code}`) + (s.message ? `: ${s.message}` : "") : "";
}
const Ut = (u, s = 1) => u == null || !Number.isFinite(u) ? "–" : u.toFixed(s);
function Oc(u) {
  if (!u.length) return null;
  const s = [...u].sort((h, g) => h - g), a = Math.floor(s.length / 2);
  return s.length % 2 ? s[a] : (s[a - 1] + s[a]) / 2;
}
function Dp() {
  const u = V.useMemo(Ip, []), s = V.useMemo(() => u.source !== "synteettinen" ? null : u.avTest ? Cu(zc, Fc, 0) : Cu(60, 48e3, u.offsetMs), [u]), a = V.useMemo(() => u.avTest && s ? Uc(s.tausta.length, s.sampleRate).map((c) => c / s.sampleRate) : [], [u, s]), h = V.useMemo(() => Date.now().toString(36) + Math.random().toString(36).slice(2, 6), []), [g, S] = V.useState(null), x = V.useMemo(() => {
    if (!s) return null;
    const c = (w) => URL.createObjectURL(new Blob([xp(w, s.sampleRate)], { type: "audio/wav" }));
    return { tausta: c(s.tausta), kitara: c(s.kitara) };
  }, [s]), N = u.source === "wav" ? Pn.wav : u.source === "aac" || u.source === "mp3cbr" ? Fp[u.source][u.length] : null, z = N !== null && u.loading === "muisti", F = z && N !== Pn.wav, B = z ? N : Pn.wav, [I, G] = V.useState({ tausta: Ii, kitara: Ii }), [Z, ce] = V.useState({ tausta: Ii, kitara: Ii }), te = V.useRef({}), O = V.useRef({}), ve = V.useRef({}), Ee = V.useMemo(() => new Sp((c) => {
    const w = c.includes("-kitara") ? "kitara" : "tausta", R = F && c === Pn.wav[w] ? ce : G;
    return {
      idleTimeoutMs: u.loadIdleMs,
      type: Op(c),
      onProgress: ({ loaded: Y, total: Q, attempt: de }) => {
        Y !== Q && Y - (O.current[c] ?? 0) < 1 << 20 || (O.current[c] = Y, R((ue) => ({ ...ue, [w]: { ...ue[w], loaded: Y, total: Q, attempt: de } })));
      },
      onAttemptFailed: ({ attempt: Y, reason: Q, willRetry: de }) => {
        O.current[c] = 0, ae("lataus-yritys-epaonnistui", { track: w, url: c, attempt: Y, reason: Q, willRetry: de });
      },
      onDone: (Y) => {
        ve.current[c] = Y;
      }
    };
  }), [u, F]), me = x ?? (z ? { tausta: I.tausta.url ?? void 0, kitara: I.kitara.url ?? void 0 } : Pn[u.source]), he = V.useMemo(() => s && u.offsetMs !== 0 ? Cu(60, s.sampleRate, 0) : s, [u, s]), we = V.useRef(() => Promise.reject(new Error("ei alustettu"))), Ce = V.useRef(() => Promise.reject(new Error("ei alustettu"))), Te = V.useRef({}), pe = V.useMemo(() => he ? { tausta: Mc(he.tausta, he.sampleRate), kitara: Mc(he.kitara, he.sampleRate) } : { tausta: Ec(() => Ce.current("tausta")), kitara: Ec(() => Ce.current("kitara")) }, [he]), ee = V.useRef(null), Me = V.useRef(null), Se = V.useRef(0), lt = V.useRef(new qd()), Le = V.useRef(null), Ue = V.useRef(null), $e = V.useRef(new yp()), De = V.useRef(!1), U = V.useRef(/* @__PURE__ */ new WeakMap()), P = V.useRef(!1), W = V.useRef([]), [L, m] = V.useState(!1), [M, X] = V.useState(0), [ne, se] = V.useState(0), [re, oe] = V.useState(""), [b, ke] = V.useState(""), [Ve, ht] = V.useState([]), [qn, bn] = V.useState(null), [Pr, El] = V.useState([]), [jr, Rr] = V.useState(""), bt = V.useRef(0), jn = V.useRef(!1), ae = (c, w = {}) => $e.current.record(c, w);
  function $t(c, w, R) {
    const Y = Ee.load(c);
    if (te.current[c] === Y) return Y;
    te.current[c] = Y;
    const Q = R === "referenssi" ? ce : G, de = performance.now();
    return O.current[c] = 0, ae("lataus-alku", { track: w, url: c, kind: R }), Q((ue) => ({ ...ue, [w]: { ...ue[w], state: "lataa", loaded: 0, reason: "" } })), Y.then((ue) => {
      const ie = ve.current[c], Ne = R === "ensisijainen" && z ? URL.createObjectURL(ue) : null;
      ae("lataus-valmis", {
        track: w,
        url: c,
        kind: R,
        bytes: ue.size,
        kestoMs: Math.round(performance.now() - de),
        attempt: ie?.attempt ?? null,
        otsakkeetMs: ie ? Math.round(ie.headersMs) : null,
        siirtoMs: ie ? Math.round(ie.bodyMs) : null,
        blobMs: ie ? Math.round(ie.blobMs - ie.bodyMs) : null
      }), Ne && ae("lahde-asetettu", { track: w, bytes: ue.size }), Q((Qe) => ({ ...Qe, [w]: { ...Qe[w], state: "valmis", loaded: ue.size, total: ue.size, reason: "", url: Ne } }));
    }, (ue) => {
      const ie = ue instanceof Ac ? ue.message : String(ue);
      ae("lataus-virhe", { track: w, url: c, kind: R, reason: ie }), Te.current[c] = !0, Q((Ne) => ({ ...Ne, [w]: { ...Ne[w], state: "virhe", reason: ie } }));
    }), Y;
  }
  const Rn = (c) => $t(B[c], c, "ensisijainen"), Lr = (c) => F ? $t(Pn.wav[c], c, "referenssi") : Rn(c);
  we.current = Rn, Ce.current = (c) => {
    const w = Pn.wav[c], R = F ? Z[c] : I[c];
    return Te.current[w] ? Promise.reject(new Error(`Mittausreferenssi (${c}) ei latautunut: ${R.reason}`)) : Lr(c);
  };
  function zr() {
    for (const c of Et)
      I[c].state === "virhe" && (Te.current[B[c]] = !1, Rn(c).catch(() => {
      })), F && Z[c].state === "virhe" && (Te.current[Pn.wav[c]] = !1, Lr(c).catch(() => {
      }));
  }
  const yt = !z || Et.every((c) => I[c].state === "valmis"), Fr = Et.filter((c) => I[c].state === "virhe"), er = F ? Et.filter((c) => Z[c].state === "virhe") : [];
  function tr(c) {
    let w = U.current.get(c);
    return w || (w = {
      get currentTime() {
        return c.currentTime;
      },
      set currentTime(R) {
        ae("seek-write", { track: "kitara", from: c.currentTime, to: R, forced: De.current, readyState: c.readyState, paused: c.paused }), c.currentTime = R;
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
    }, U.current.set(c, w)), w;
  }
  function en(c = !1) {
    const w = ee.current, R = Me.current;
    !w || !R || !u.sync || !c && !u.corrections || (De.current = c, lt.current.align(w, tr(R), c));
  }
  function tn(c, w) {
    ae("seek-write", { track: "tausta", from: c.currentTime, to: w, forced: "käyttäjä", readyState: c.readyState, paused: c.paused });
    try {
      c.currentTime = w;
    } catch {
    }
  }
  function nn() {
    const c = Ue.current;
    c && (ee.current && c.setLevel(ee.current, yc("backing", 100)), Me.current && c.setLevel(Me.current, yc("guitar", 100)));
  }
  function Ln() {
    for (const c of W.current) clearTimeout(c);
    W.current = [];
  }
  function Lt(c) {
    Se.current++, Ln(), ae("pause-call", { cause: c }), S(null), Ue.current?.observe(), ee.current?.pause(), Me.current?.pause(), u.engine === "uusi" && ee.current && (bt.current = ee.current.currentTime), m(!1);
  }
  function rn(c) {
    const w = ee.current;
    if (!w || !Number.isFinite(c)) return;
    const R = Math.max(0, Math.min(c, Number.isFinite(w.duration) ? w.duration : c));
    if (ae("control", { control: "kelaus", to: R }), u.engine === "uusi") {
      bt.current = R, X(R), L ? Dr(R, "kelaus") : Se.current++;
      return;
    }
    Le.current = R, X(R), tn(w, R), w.paused || zn("kelaus", Se.current);
  }
  function nr(c) {
    const w = Le.current;
    if (w === null || c !== ee.current || c.seeking) return;
    const R = Number.isFinite(c.duration) ? Math.min(w, c.duration) : w;
    if (R !== w && (Le.current = R, X(R)), Math.abs(c.currentTime - R) < Rc) return;
    const Y = c.seekable;
    for (let Q = 0; Q < Y.length; Q++)
      if (Y.start(Q) <= R && R <= Y.end(Q)) {
        tn(c, R);
        return;
      }
  }
  async function rr(c, w) {
    if (P.current || w !== Se.current) return;
    const R = ee.current, Y = Me.current;
    if (!(!R || !Y || !Gn(R) || !Gn(Y))) {
      P.current = !0;
      try {
        const Q = [
          { name: "tausta", element: R, reference: pe.tausta, referenceOffsetSeconds: 0 },
          { name: "kitara", element: Y, reference: pe.kitara, referenceOffsetSeconds: 0 }
        ], de = { ...await hp(c, Q), request: w };
        $e.current.measurements.push(de), ae("mittaus", { phase: c, mediaDiffMs: de.mediaDiffMs, renderedDiffMs: de.renderedDiffMs, reliable: de.reliable, request: w }), ht((ue) => [...ue, de]);
      } catch (Q) {
        ae("mittausvirhe", { phase: c, reason: String(Q) });
      } finally {
        P.current = !1;
      }
    }
  }
  function zn(c, w) {
    if (Ln(), !u.measure) return;
    W.current.push(window.setTimeout(() => {
      rr(c, w);
    }, Lc));
    const R = () => {
      w === Se.current && (rr("jatkuva", w), W.current.push(window.setTimeout(R, u.measureIntervalMs)));
    };
    W.current.push(window.setTimeout(R, Lc + u.measureIntervalMs));
  }
  function Or(c) {
    if (c !== ee.current) return;
    if (u.engine === "uusi") {
      X(c.currentTime);
      return;
    }
    const w = Le.current;
    if (w === null)
      X(c.currentTime);
    else if (c.readyState >= 1 && !c.seeking && Math.abs(c.currentTime - w) < Rc) {
      Le.current = null, ae("kelaus-valmis", { time: c.currentTime }), en(!0);
      return;
    }
    c.paused || en();
  }
  function ln(c, w) {
    return ae("play-call", { track: w, time: c.currentTime, readyState: c.readyState }), c.play().then(
      () => {
        ae("play-result", { track: w, result: "fulfilled", time: c.currentTime });
      },
      (R) => {
        throw ae("play-result", { track: w, result: "rejected", reason: R?.name ?? String(R) }), R;
      }
    );
  }
  async function on() {
    const c = ee.current, w = Me.current;
    if (!c || !w || !L && !yt) return;
    if (ae("control", { control: L ? "tauko" : "soita" }), L) {
      Lt("painallus");
      return;
    }
    if (u.engine === "uusi") return Dr(bt.current, jn.current ? "jatko" : "käynnistys");
    oe("");
    for (const [Ne, Qe] of [[c, "tausta"], [w, "kitara"]])
      Ne.error && (ae("uusi-lataus", { track: Qe, reason: Sl(Ne) }), Ne.load());
    const R = c.currentTime > 0.05, Y = Le.current ?? c.currentTime;
    Number.isFinite(c.duration) && Y >= c.duration - 0.05 && rn(0), nr(c);
    const Q = Ue.current ??= new kc(), de = Q.unlock() && [c, w].map((Ne) => Q.route(Ne)).every(Boolean);
    ke(de ? "" : "Web Audio -kytkentä epäonnistui: " + Q.lastError);
    let ue = null;
    de && (Q.recovering || Q.clockState() === "stalled") && (ae("palautus", { reason: Q.recovering ? "kesken" : "kello pysähtynyt" }), ue = Q.recover()), nn(), en(!0);
    const ie = ++Se.current;
    if (ue) {
      const Ne = await ue;
      if (ae("palautus-tulos", { restored: Ne, error: Ne ? "" : Q.lastError }), ie !== Se.current) return;
      if (!Ne) {
        oe("Ääni ei palautunut: Web Audio on pysähtynyt. Lataa sivu uudelleen. " + Q.lastError);
        return;
      }
    }
    try {
      if (await Promise.all([ln(c, "tausta"), ln(w, "kitara")]), ie !== Se.current) return;
      en(), m(!0), ae("toisto-alkoi", { tausta: c.currentTime, kitara: w.currentTime, request: ie }), zn(R ? "jatko" : "käynnistys", ie), de && (Q.observe(), window.setTimeout(() => {
        ie === Se.current && (Q.state !== "running" ? oe(`Ääni ei käynnistynyt (Web Audio: ${Q.state}).`) : Q.clockState() === "stalled" && (Lt("vahti"), oe("Ääni ei kulje: Web Audio on pysähtynyt. Paina Soita uudelleen.")));
      }, 800));
    } catch {
      if (ie !== Se.current) return;
      Lt("virhe"), oe(zt() || "Toisto epäonnistui.");
    }
  }
  function zt() {
    const c = [[ee.current, "tausta"], [Me.current, "kitara"]].filter(([w]) => w?.error).map(([w, R]) => `${R}: ${Sl(w)}`);
    return c.length ? `Äänitiedoston lataus epäonnistui (${c.join("; ")}). Paina Soita yrittääksesi uudelleen.` : "";
  }
  function Vt(c, w) {
    L && Lt("latausvirhe"), oe(`Äänitiedoston lataus epäonnistui (${c}: ${Sl(w)}). Paina Soita yrittääksesi uudelleen.`);
  }
  function Ir(c, w, R = 5e3) {
    return new Promise((Y) => {
      const Q = () => c.readyState >= 1 && !c.seeking && Math.abs(c.currentTime - w) < 0.25;
      if (c.error) {
        Y("virhe");
        return;
      }
      if (Q()) {
        Y("valmis");
        return;
      }
      const de = ["loadedmetadata", "seeked", "canplay", "loadeddata", "error"], ue = () => {
        c.error ? Ne("virhe") : Q() && Ne("valmis");
      }, ie = window.setTimeout(() => Ne("aikakatkaisu"), R);
      function Ne(Qe) {
        window.clearTimeout(ie);
        for (const ze of de) c.removeEventListener(ze, ue);
        Y(Qe);
      }
      for (const Qe of de) c.addEventListener(Qe, ue);
    });
  }
  async function Dr(c, w) {
    const R = ++Se.current;
    Ln(), oe("");
    const Y = jn.current;
    jn.current = !0, ae("tuore-aloitus", { phase: w, target: c, reload: Y, request: R }), S(null), X(c);
    const Q = ee.current, de = Me.current;
    if (!Q || !de) return;
    const ue = Ue.current ??= new kc(), ie = ue.unlock() && [Q, de].map((ze) => ue.route(ze)).every(Boolean);
    ke(ie ? "" : "Web Audio -kytkentä epäonnistui: " + ue.lastError);
    let Ne = null;
    ie && (ue.recovering || ue.clockState() === "stalled") && (ae("palautus", { reason: ue.recovering ? "kesken" : "kello pysähtynyt" }), Ne = ue.recover()), nn();
    for (const ze of [Q, de])
      ze.pause(), (Y || ze.error) && ze.load(), c > 0 && (ae("seek-write", { track: ze === Q ? "tausta" : "kitara", from: ze.currentTime, to: c, forced: "aloitus", readyState: ze.readyState, paused: !0 }), ze.currentTime = c);
    if (Ne) {
      const ze = await Ne;
      if (ae("palautus-tulos", { restored: ze, error: ze ? "" : ue.lastError }), R !== Se.current) return;
      if (!ze) {
        oe("Ääni ei palautunut: Web Audio on pysähtynyt. Lataa sivu uudelleen. " + ue.lastError);
        return;
      }
    }
    const Qe = await Promise.all([Ir(Q, c), Ir(de, c)]);
    if (ae("kelattu", { tausta: Qe[0], kitara: Qe[1], tT: Q.currentTime, tK: de.currentTime, request: R }), R === Se.current) {
      if (Qe.includes("virhe")) {
        ae("latausvirhe", { target: c, tausta: Sl(Q), kitara: Sl(de), request: R }), bt.current = c, m(!1), oe(zt());
        return;
      }
      if (Qe.includes("aikakatkaisu")) {
        const ze = Et.filter((In, Vi) => Qe[Vi] !== "valmis");
        ae("kelaus-aikakatkaisu", { target: c, raidat: ze, request: R }), bt.current = c, m(!1), oe(`Kelaus ei valmistunut (${ze.join(", ")}). Paina Soita uudelleen.`);
        return;
      }
      try {
        if (await Promise.all([ln(Q, "tausta"), ln(de, "kitara")]), R !== Se.current) return;
        m(!0), ae("toisto-alkoi", { tausta: Q.currentTime, kitara: de.currentTime, request: R }), S({ request: R, phase: w, startedMs: performance.now(), target: c }), zn(w, R), ie && (ue.observe(), window.setTimeout(() => {
          R === Se.current && (ue.state !== "running" ? oe(`Ääni ei käynnistynyt (Web Audio: ${ue.state}).`) : ue.clockState() === "stalled" && (Lt("vahti"), oe("Ääni ei kulje: Web Audio on pysähtynyt. Paina Soita uudelleen.")));
        }, 800));
      } catch (ze) {
        if (R !== Se.current) return;
        Lt("virhe");
        const In = ze?.name === "NotAllowedError";
        oe(In ? "Toisto vaatii uuden painalluksen. Paina Soita." : zt() || "Toisto epäonnistui.");
      }
    }
  }
  function lr(c) {
    const w = ee.current?.currentTime ?? 0;
    ae("kuulokuva", { value: c, time: w }), El((R) => [...R, { value: c, time: w }]);
  }
  function ir() {
    const c = ee.current;
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
        files: me,
        userAgent: navigator.userAgent,
        length: u.length,
        wideScenario: u.wideScenario,
        measure: u.measure,
        fileLoads: Object.fromEntries(Et.map((w) => [w, { url: B[w], state: I[w].state, bytes: I[w].loaded, attempt: I[w].attempt, reason: I[w].reason }])),
        referenceLoads: F ? Object.fromEntries(Et.map((w) => [w, { state: Z[w].state, bytes: Z[w].loaded, reason: Z[w].reason }])) : null,
        loadTimings: ve.current,
        navigation: (() => {
          const w = performance.getEntriesByType("navigation")[0];
          return w ? { responseEndMs: Math.round(w.responseEnd), domContentLoadedMs: Math.round(w.domContentLoadedEventEnd) } : null;
        })(),
        audioSession: navigator.audioSession?.type ?? null,
        contextSampleRate: Gn(c)?.context.sampleRate ?? null,
        audioOutput: (() => {
          const w = Gn(c)?.context;
          return w ? Ru(w) : null;
        })()
      },
      // H4: kaikki tämän välilehden säätökokeet (myös aiemmilta sivulatauksilta, sessionStorage).
      nayttoaani: u.avTest ? {
        version: 1,
        pageLoadId: h,
        trials: Wc(),
        flashMs: $c,
        designTargetMs: Ep,
        synthetic: { seconds: zc, sampleRate: Fc, beeps: a.length }
      } : null,
      seekLatencies: vp($e.current.events),
      measurements: $e.current.measurements,
      events: $e.current.events,
      samples: $e.current.samples
    };
  }
  function Ml() {
    Rr(JSON.stringify(ir()));
  }
  const Wt = V.useRef(on);
  Wt.current = on;
  const un = V.useRef(rn);
  un.current = rn;
  const Bt = V.useRef(!1), [Ht, Fn] = V.useState("");
  async function Ai() {
    if (Bt.current || L || !yt) return;
    Bt.current = !0;
    const c = (R) => new Promise((Y) => window.setTimeout(Y, R)), w = (R) => {
      ae("vakiokoe", { step: R, time: ee.current?.currentTime ?? 0 }), Fn(R);
    };
    try {
      w("soita"), await Wt.current(), await c(25e3), w("kelaus"), un.current(u.source === "synteettinen" ? 30 : 60), await c(15e3), w("tauko"), await Wt.current(), await c(3e3), w("jatko"), await Wt.current(), await c(15e3), u.wideScenario && (w("kaksoiskelaus"), un.current(u.source === "synteettinen" ? 20 : 30), await c(1e3), un.current(u.source === "synteettinen" ? 45 : 90), await c(15e3)), w("tauko-loppu"), await Wt.current(), w("valmis");
    } finally {
      Bt.current = !1;
    }
  }
  const sn = V.useRef(ir);
  sn.current = ir, V.useEffect(() => {
    window.kaksiraitatesti = {
      report: () => sn.current(),
      // Selaintesteille: peräkkäiset ja keskeneräisen kelauksen aikana tehdyt kelaukset.
      seek: (c) => un.current(c)
    };
  }, []), V.useEffect(() => {
    if (u.source === "synteettinen") return;
    const c = Et.map((w) => we.current(w));
    for (const w of c) w.catch(() => {
    });
    F && u.measure && Promise.allSettled(c).then(() => {
      for (const w of Et) Ce.current(w).catch(() => {
      });
    });
  }, [u, F]);
  const On = V.useRef(!1), [an, Ar] = V.useState(null);
  V.useEffect(() => {
    if (!yt || On.current || u.source === "synteettinen") return;
    On.current = !0;
    const c = Math.round(performance.now());
    ae("soita-kaytossa", { sivustaMs: c }), Ar(c);
  }, [yt, u]), V.useEffect(() => {
    const c = [[ee.current, "tausta"], [Me.current, "kitara"]], w = ["loadstart", "emptied", "loadedmetadata", "canplay", "canplaythrough", "play", "playing", "waiting", "stalled", "seeking", "seeked", "pause", "ended", "error"], R = [];
    for (const [Y, Q] of c)
      if (Y)
        for (const de of w) {
          const ue = () => ae(de, {
            track: Q,
            time: Y.currentTime,
            readyState: Y.readyState,
            paused: Y.paused,
            ...de === "error" ? { code: Y.error?.code ?? null, message: Y.error?.message ?? "" } : {}
          });
          Y.addEventListener(de, ue), R.push(() => Y.removeEventListener(de, ue));
        }
    return () => R.forEach((Y) => Y());
  }, []), V.useEffect(() => {
    const c = window.setInterval(() => {
      const R = ee.current, Y = Me.current;
      if (!R || !Y) return;
      const Q = Gn(R)?.context, de = (Y.currentTime - R.currentTime) * 1e3;
      $e.current.sample({
        tausta: R.currentTime,
        kitara: Y.currentTime,
        mediaDiffMs: de,
        pausedT: R.paused,
        pausedK: Y.paused,
        readyT: R.readyState,
        readyK: Y.readyState,
        contextState: Q?.state ?? null,
        contextTime: Q?.currentTime ?? null,
        hidden: document.hidden
      }), bn({ diff: de, tausta: R.currentTime, kitara: Y.currentTime });
    }, 500), w = () => {
      ae("visibilitychange", { hidden: document.hidden }), Ue.current?.observe(), document.hidden && Lt("sivu-piiloon");
    };
    return document.addEventListener("visibilitychange", w), () => {
      clearInterval(c), document.removeEventListener("visibilitychange", w), Se.current++, Ln(), Ue.current?.close();
    };
  }, []);
  const Ui = Ve.filter((c) => c.reliable && c.renderedDiffMs !== null), $i = ["käynnistys", "jatko", "kelaus", "jatkuva"].map((c) => {
    const w = Ui.filter((Q) => Q.phase === c), R = w.map((Q) => Q.renderedDiffMs), Y = w.map((Q) => Q.mediaDiffMs);
    return {
      phase: c,
      count: w.length,
      renderedMedian: Oc(R),
      renderedMaxAbs: R.length ? Math.max(...R.map(Math.abs)) : null,
      mediaMedian: Oc(Y),
      unreliable: Ve.filter((Q) => Q.phase === c && !Q.reliable).length
    };
  }), Tl = u.source === "synteettinen" ? 30 : 60, Je = (c, w = "kaytossa") => `?lahde=${c}${w === "kaytossa" ? "" : "&tahdistin=" + w}`, Ur = u.length === "koko" ? "koko kappale" : "0–120 s", _l = u.source === "mp3" ? "MP3" : u.source === "wav" ? `WAV (0–120 s, ${z ? "muistista" : "verkosta"})` : u.source === "aac" ? `AAC 192 kbit/s (${Ur}, muistista)` : u.source === "mp3cbr" ? `MP3 CBR 192 kbit/s (${Ur}, muistista)` : u.avTest ? "H4 näyttö–ääni-säätökoe (synteettinen 240 s, muistista)" : `Synteettinen (kitara siirretty ${u.offsetMs} ms myöhemmäksi)`;
  return /* @__PURE__ */ E.jsxs("main", { className: "kaksiraita", children: [
    /* @__PURE__ */ E.jsx("h1", { children: "Kahden raidan synkronointitesti" }),
    /* @__PURE__ */ E.jsxs("p", { className: "mode", "data-source": u.source, "data-sync": u.sync ? "on" : "off", "data-sync-mode": u.syncMode, children: [
      "Tila: ",
      /* @__PURE__ */ E.jsx("strong", { children: _l }),
      " · ",
      u.engine === "uusi" ? /* @__PURE__ */ E.jsx("strong", { children: "uusi moottori (korjausehdokas)" }) : /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
        "tahdistin ",
        /* @__PURE__ */ E.jsx("strong", { children: u.syncMode === "kaytossa" ? "käytössä" : u.syncMode === "pois" ? "pois" : "ilman korjauskelauksia" })
      ] })
    ] }),
    /* @__PURE__ */ E.jsxs("p", { className: "links", children: [
      /* @__PURE__ */ E.jsx("a", { href: Je("mp3"), children: "MP3" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Je("wav"), children: "WAV" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Je("aac") + "&moottori=uusi", children: "AAC" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Je("mp3cbr") + "&moottori=uusi", children: "MP3 CBR" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Je("synteettinen"), children: "Synteettinen" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Je(u.source), children: "tahdistin käyttöön" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Je(u.source, "pois"), children: "pois" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: Je(u.source, "ei-korjauksia"), children: "ilman korjauksia" }),
      " · ",
      /* @__PURE__ */ E.jsx("a", { href: `?lahde=${u.source}&moottori=uusi`, children: "uusi moottori" })
    ] }),
    u.avTest && /* @__PURE__ */ E.jsx(
      Rp,
      {
        backing: ee,
        beeps: a,
        segment: g,
        playing: L,
        filesReady: yt,
        measurements: Ve,
        pageLoadId: h,
        onToggle: () => {
          on();
        },
        onSeek: rn,
        record: ae,
        outputNow: () => {
          const c = Gn(ee.current)?.context;
          return c ? Ru(c) : null;
        },
        outputEstimate: Lp
      }
    ),
    /* @__PURE__ */ E.jsxs("section", { className: "player", "aria-label": "Testisoitin", children: [
      /* @__PURE__ */ E.jsx("button", { type: "button", className: "play", onClick: () => {
        on();
      }, disabled: !L && !yt, children: L ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ E.jsxs("button", { type: "button", onClick: () => rn(Tl), disabled: !yt, children: [
        "Siirry kohtaan ",
        Di(Tl)
      ] }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => {
        Ai();
      }, disabled: !yt || Ht !== "" && Ht !== "valmis", children: "Aja vakiokoe (n. 60 s)" }),
      Ht && /* @__PURE__ */ E.jsxs("output", { className: "scenario", "data-step": Ht, children: [
        " Vakiokoe: ",
        Ht
      ] }),
      /* @__PURE__ */ E.jsxs("output", { className: "time", children: [
        Di(M),
        " / ",
        Di(ne)
      ] }),
      u.source !== "synteettinen" && /* @__PURE__ */ E.jsxs("p", { className: "files", "data-ready": yt ? "kyllä" : "ei", children: [
        z ? "Äänitiedostot" : "Mittausreferenssit (WAV)",
        ":",
        " ",
        Et.map((c, w) => /* @__PURE__ */ E.jsxs("span", { "data-track": c, "data-state": I[c].state, children: [
          w ? " · " : "",
          Oi[c],
          " ",
          I[c].state === "valmis" ? `valmis (${wl(I[c].loaded)} Mt)` : I[c].state === "virhe" ? "virhe" : `${wl(I[c].loaded)} / ${wl(I[c].total)} Mt${I[c].attempt > 1 ? ` (yritys ${I[c].attempt})` : ""}`
        ] }, c)),
        an !== null && /* @__PURE__ */ E.jsxs("span", { className: "ready-time", "data-ms": an, children: [
          " · Soita käytössä ",
          (an / 1e3).toFixed(1).replace(".", ","),
          " s sivun avaamisesta"
        ] })
      ] }),
      F && u.measure && /* @__PURE__ */ E.jsxs("p", { className: "files refs", "data-ready": Et.every((c) => Z[c].state === "valmis") ? "kyllä" : "ei", children: [
        "Mittausreferenssit (WAV, vain mittausta varten):",
        " ",
        Et.map((c, w) => /* @__PURE__ */ E.jsxs("span", { "data-track": c, "data-state": Z[c].state, children: [
          w ? " · " : "",
          Oi[c],
          " ",
          Z[c].state === "valmis" ? "valmis" : Z[c].state === "virhe" ? "virhe" : Z[c].state === "odottaa" ? "odottaa" : `${wl(Z[c].loaded)} / ${wl(Z[c].total)} Mt`
        ] }, c))
      ] }),
      er.length > 0 && /* @__PURE__ */ E.jsxs("p", { role: "alert", className: "error load-error", children: [
        "Mittausreferenssin lataus epäonnistui: ",
        er.map((c) => `${Oi[c]} (${Z[c].reason})`).join(", "),
        ".",
        " ",
        "Toisto toimii, mutta mittaukset eivät.",
        " ",
        /* @__PURE__ */ E.jsx("button", { type: "button", onClick: zr, children: "Yritä uudelleen" })
      ] }),
      Fr.length > 0 && /* @__PURE__ */ E.jsxs("p", { role: "alert", className: "error load-error", children: [
        z ? "Äänitiedoston" : "Mittausreferenssin",
        " lataus epäonnistui: ",
        Fr.map((c) => `${Oi[c]} (${I[c].reason})`).join(", "),
        ".",
        z ? " Toistoa ei voi aloittaa." : " Toisto toimii, mutta mittaukset eivät.",
        " ",
        /* @__PURE__ */ E.jsx("button", { type: "button", onClick: zr, children: "Yritä uudelleen" })
      ] }),
      b && /* @__PURE__ */ E.jsx("p", { role: "status", children: b }),
      re && /* @__PURE__ */ E.jsx("p", { role: "alert", className: "error", children: re }),
      /* @__PURE__ */ E.jsx(
        "audio",
        {
          ref: ee,
          src: me.tausta,
          preload: "metadata",
          onLoadedMetadata: (c) => {
            se(c.currentTarget.duration), nr(c.currentTarget);
          },
          onProgress: (c) => nr(c.currentTarget),
          onCanPlay: (c) => nr(c.currentTarget),
          onTimeUpdate: (c) => Or(c.currentTarget),
          onEnded: () => {
            Le.current = null, Ln(), ae("ended", {}), Me.current?.pause(), m(!1);
          },
          onPause: (c) => {
            c.currentTarget === ee.current && m(!1);
          },
          onError: (c) => Vt("tausta", c.currentTarget)
        }
      ),
      /* @__PURE__ */ E.jsx(
        "audio",
        {
          ref: Me,
          src: me.kitara,
          preload: "metadata",
          onLoadedMetadata: () => {
            u.engine === "nykyinen" && ee.current?.paused && en(!0);
          },
          onError: (c) => Vt("kitara", c.currentTarget)
        }
      )
    ] }),
    /* @__PURE__ */ E.jsxs("section", { "aria-label": "Mediakellot", children: [
      /* @__PURE__ */ E.jsx("h2", { children: "Mediaelementtien kellot" }),
      /* @__PURE__ */ E.jsxs("p", { className: "live", children: [
        "Tausta ",
        Ut(qn?.tausta, 3),
        " s · Kitara ",
        Ut(qn?.kitara, 3),
        " s · ",
        /* @__PURE__ */ E.jsxs("strong", { children: [
          "ero ",
          Ut(qn?.diff),
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
        /* @__PURE__ */ E.jsx("tbody", { children: $i.map((c) => /* @__PURE__ */ E.jsxs("tr", { "data-phase": c.phase, children: [
          /* @__PURE__ */ E.jsx("td", { children: c.phase }),
          /* @__PURE__ */ E.jsx("td", { children: c.count }),
          /* @__PURE__ */ E.jsx("td", { children: Ut(c.renderedMedian) }),
          /* @__PURE__ */ E.jsx("td", { children: Ut(c.renderedMaxAbs) }),
          /* @__PURE__ */ E.jsx("td", { children: Ut(c.mediaMedian) }),
          /* @__PURE__ */ E.jsx("td", { children: c.unreliable })
        ] }, c.phase)) })
      ] }),
      /* @__PURE__ */ E.jsx("ol", { className: "measurements", "aria-label": "Mittaukset", children: Ve.slice(-12).map((c) => /* @__PURE__ */ E.jsxs("li", { "data-reliable": c.reliable ? "kyllä" : "ei", children: [
        c.phase,
        ": renderöity ",
        Ut(c.renderedDiffMs),
        " ms, mediakellot ",
        Ut(c.mediaDiffMs),
        " ms",
        " ",
        "(korrelaatio T ",
        Ut(c.tracks[0].score, 3),
        " / K ",
        Ut(c.tracks[1].score, 3),
        c.reliable ? "" : ", epävarma" + (c.tracks.find((w) => w.error)?.error ? ": " + c.tracks.find((w) => w.error).error : c.tracks.some((w) => w.probeRms <= 1e-4) ? ": raita hiljaa" : ""),
        ")"
      ] }, c.ms)) })
    ] }),
    /* @__PURE__ */ E.jsxs("section", { "aria-label": "Kuulokuva", children: [
      /* @__PURE__ */ E.jsx("h2", { children: "Kuulokuva" }),
      /* @__PURE__ */ E.jsx("p", { className: "hint", children: "Kirjaa, miltä kuulostaa juuri nyt. Kirjaus tallentuu raporttiin soittimen kohdan kanssa." }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => lr("tahdissa"), children: "Kuulostaa tahdissa" }),
      " ",
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => lr("epätahdissa"), children: "Kuulostaa epätahdissa" }),
      " ",
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: () => lr("epävarma"), children: "En osaa sanoa" }),
      /* @__PURE__ */ E.jsx("ul", { children: Pr.map((c, w) => /* @__PURE__ */ E.jsxs("li", { children: [
        Di(c.time),
        ": ",
        c.value
      ] }, w)) })
    ] }),
    /* @__PURE__ */ E.jsxs("section", { "aria-label": "Raportti", children: [
      /* @__PURE__ */ E.jsx("h2", { children: "Raportti" }),
      /* @__PURE__ */ E.jsx("button", { type: "button", onClick: Ml, children: "Valitse raportti" }),
      jr && /* @__PURE__ */ E.jsx(
        "textarea",
        {
          readOnly: !0,
          rows: 8,
          "aria-label": "Testiraportti",
          value: jr,
          ref: (c) => {
            c?.focus(), c?.select();
          }
        }
      )
    ] })
  ] });
}
mp();
const Ic = document.getElementById("kaksiraitatesti");
Ic && Ud.createRoot(Ic).render(/* @__PURE__ */ E.jsx(Dp, {}));
//# sourceMappingURL=app.js.map
