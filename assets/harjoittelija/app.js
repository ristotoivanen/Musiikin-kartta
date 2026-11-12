function tp(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ql = { exports: {} }, Bi = {}, eo = { exports: {} }, Fe = {};
var Zc;
function np() {
  if (Zc) return Fe;
  Zc = 1;
  var i = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), R = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), C = Symbol.iterator;
  function L(g) {
    return g === null || typeof g != "object" ? null : (g = C && g[C] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, w = {};
  function E(g, z, ve) {
    this.props = g, this.context = z, this.refs = w, this.updater = ve || F;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(g, z) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, z, "setState");
  }, E.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function I() {
  }
  I.prototype = E.prototype;
  function N(g, z, ve) {
    this.props = g, this.context = z, this.refs = w, this.updater = ve || F;
  }
  var V = N.prototype = new I();
  V.constructor = N, O(V, E.prototype), V.isPureReactComponent = !0;
  var D = Array.isArray, ee = Object.prototype.hasOwnProperty, Z = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(g, z, ve) {
    var we, _e = {}, Ee = null, Q = null;
    if (z != null) for (we in z.ref !== void 0 && (Q = z.ref), z.key !== void 0 && (Ee = "" + z.key), z) ee.call(z, we) && !M.hasOwnProperty(we) && (_e[we] = z[we]);
    var q = arguments.length - 2;
    if (q === 1) _e.children = ve;
    else if (1 < q) {
      for (var j = Array(q), G = 0; G < q; G++) j[G] = arguments[G + 2];
      _e.children = j;
    }
    if (g && g.defaultProps) for (we in q = g.defaultProps, q) _e[we] === void 0 && (_e[we] = q[we]);
    return { $$typeof: i, type: g, key: Ee, ref: Q, props: _e, _owner: Z.current };
  }
  function re(g, z) {
    return { $$typeof: i, type: g.type, key: z, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function ce(g) {
    return typeof g == "object" && g !== null && g.$$typeof === i;
  }
  function Ce(g) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(ve) {
      return z[ve];
    });
  }
  var Ae = /\/+/g;
  function Te(g, z) {
    return typeof g == "object" && g !== null && g.key != null ? Ce("" + g.key) : z.toString(36);
  }
  function Le(g, z, ve, we, _e) {
    var Ee = typeof g;
    (Ee === "undefined" || Ee === "boolean") && (g = null);
    var Q = !1;
    if (g === null) Q = !0;
    else switch (Ee) {
      case "string":
      case "number":
        Q = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case i:
          case s:
            Q = !0;
        }
    }
    if (Q) return Q = g, _e = _e(Q), g = we === "" ? "." + Te(Q, 0) : we, D(_e) ? (ve = "", g != null && (ve = g.replace(Ae, "$&/") + "/"), Le(_e, z, ve, "", function(G) {
      return G;
    })) : _e != null && (ce(_e) && (_e = re(_e, ve + (!_e.key || Q && Q.key === _e.key ? "" : ("" + _e.key).replace(Ae, "$&/") + "/") + g)), z.push(_e)), 1;
    if (Q = 0, we = we === "" ? "." : we + ":", D(g)) for (var q = 0; q < g.length; q++) {
      Ee = g[q];
      var j = we + Te(Ee, q);
      Q += Le(Ee, z, ve, j, _e);
    }
    else if (j = L(g), typeof j == "function") for (g = j.call(g), q = 0; !(Ee = g.next()).done; ) Ee = Ee.value, j = we + Te(Ee, q++), Q += Le(Ee, z, ve, j, _e);
    else if (Ee === "object") throw z = String(g), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return Q;
  }
  function H(g, z, ve) {
    if (g == null) return g;
    var we = [], _e = 0;
    return Le(g, we, "", "", function(Ee) {
      return z.call(ve, Ee, _e++);
    }), we;
  }
  function ie(g) {
    if (g._status === -1) {
      var z = g._result;
      z = z(), z.then(function(ve) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = ve);
      }, function(ve) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = ve);
      }), g._status === -1 && (g._status = 0, g._result = z);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var ae = { current: null }, A = { transition: null }, Y = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: A, ReactCurrentOwner: Z };
  function J() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Fe.Children = { map: H, forEach: function(g, z, ve) {
    H(g, function() {
      z.apply(this, arguments);
    }, ve);
  }, count: function(g) {
    var z = 0;
    return H(g, function() {
      z++;
    }), z;
  }, toArray: function(g) {
    return H(g, function(z) {
      return z;
    }) || [];
  }, only: function(g) {
    if (!ce(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, Fe.Component = E, Fe.Fragment = u, Fe.Profiler = f, Fe.PureComponent = N, Fe.StrictMode = c, Fe.Suspense = S, Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, Fe.act = J, Fe.cloneElement = function(g, z, ve) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var we = O({}, g.props), _e = g.key, Ee = g.ref, Q = g._owner;
    if (z != null) {
      if (z.ref !== void 0 && (Ee = z.ref, Q = Z.current), z.key !== void 0 && (_e = "" + z.key), g.type && g.type.defaultProps) var q = g.type.defaultProps;
      for (j in z) ee.call(z, j) && !M.hasOwnProperty(j) && (we[j] = z[j] === void 0 && q !== void 0 ? q[j] : z[j]);
    }
    var j = arguments.length - 2;
    if (j === 1) we.children = ve;
    else if (1 < j) {
      q = Array(j);
      for (var G = 0; G < j; G++) q[G] = arguments[G + 2];
      we.children = q;
    }
    return { $$typeof: i, type: g.type, key: _e, ref: Ee, props: we, _owner: Q };
  }, Fe.createContext = function(g) {
    return g = { $$typeof: p, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: h, _context: g }, g.Consumer = g;
  }, Fe.createElement = B, Fe.createFactory = function(g) {
    var z = B.bind(null, g);
    return z.type = g, z;
  }, Fe.createRef = function() {
    return { current: null };
  }, Fe.forwardRef = function(g) {
    return { $$typeof: v, render: g };
  }, Fe.isValidElement = ce, Fe.lazy = function(g) {
    return { $$typeof: k, _payload: { _status: -1, _result: g }, _init: ie };
  }, Fe.memo = function(g, z) {
    return { $$typeof: R, type: g, compare: z === void 0 ? null : z };
  }, Fe.startTransition = function(g) {
    var z = A.transition;
    A.transition = {};
    try {
      g();
    } finally {
      A.transition = z;
    }
  }, Fe.unstable_act = J, Fe.useCallback = function(g, z) {
    return ae.current.useCallback(g, z);
  }, Fe.useContext = function(g) {
    return ae.current.useContext(g);
  }, Fe.useDebugValue = function() {
  }, Fe.useDeferredValue = function(g) {
    return ae.current.useDeferredValue(g);
  }, Fe.useEffect = function(g, z) {
    return ae.current.useEffect(g, z);
  }, Fe.useId = function() {
    return ae.current.useId();
  }, Fe.useImperativeHandle = function(g, z, ve) {
    return ae.current.useImperativeHandle(g, z, ve);
  }, Fe.useInsertionEffect = function(g, z) {
    return ae.current.useInsertionEffect(g, z);
  }, Fe.useLayoutEffect = function(g, z) {
    return ae.current.useLayoutEffect(g, z);
  }, Fe.useMemo = function(g, z) {
    return ae.current.useMemo(g, z);
  }, Fe.useReducer = function(g, z, ve) {
    return ae.current.useReducer(g, z, ve);
  }, Fe.useRef = function(g) {
    return ae.current.useRef(g);
  }, Fe.useState = function(g) {
    return ae.current.useState(g);
  }, Fe.useSyncExternalStore = function(g, z, ve) {
    return ae.current.useSyncExternalStore(g, z, ve);
  }, Fe.useTransition = function() {
    return ae.current.useTransition();
  }, Fe.version = "18.3.1", Fe;
}
var qc;
function So() {
  return qc || (qc = 1, eo.exports = np()), eo.exports;
}
var ed;
function rp() {
  if (ed) return Bi;
  ed = 1;
  var i = So(), s = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(v, S, R) {
    var k, C = {}, L = null, F = null;
    R !== void 0 && (L = "" + R), S.key !== void 0 && (L = "" + S.key), S.ref !== void 0 && (F = S.ref);
    for (k in S) c.call(S, k) && !h.hasOwnProperty(k) && (C[k] = S[k]);
    if (v && v.defaultProps) for (k in S = v.defaultProps, S) C[k] === void 0 && (C[k] = S[k]);
    return { $$typeof: s, type: v, key: L, ref: F, props: C, _owner: f.current };
  }
  return Bi.Fragment = u, Bi.jsx = p, Bi.jsxs = p, Bi;
}
var td;
function ip() {
  return td || (td = 1, ql.exports = rp()), ql.exports;
}
var l = ip(), b = So(), la = {}, to = { exports: {} }, Dt = {}, no = { exports: {} }, ro = {};
var nd;
function sp() {
  return nd || (nd = 1, (function(i) {
    function s(A, Y) {
      var J = A.length;
      A.push(Y);
      e: for (; 0 < J; ) {
        var g = J - 1 >>> 1, z = A[g];
        if (0 < f(z, Y)) A[g] = Y, A[J] = z, J = g;
        else break e;
      }
    }
    function u(A) {
      return A.length === 0 ? null : A[0];
    }
    function c(A) {
      if (A.length === 0) return null;
      var Y = A[0], J = A.pop();
      if (J !== Y) {
        A[0] = J;
        e: for (var g = 0, z = A.length, ve = z >>> 1; g < ve; ) {
          var we = 2 * (g + 1) - 1, _e = A[we], Ee = we + 1, Q = A[Ee];
          if (0 > f(_e, J)) Ee < z && 0 > f(Q, _e) ? (A[g] = Q, A[Ee] = J, g = Ee) : (A[g] = _e, A[we] = J, g = we);
          else if (Ee < z && 0 > f(Q, J)) A[g] = Q, A[Ee] = J, g = Ee;
          else break e;
        }
      }
      return Y;
    }
    function f(A, Y) {
      var J = A.sortIndex - Y.sortIndex;
      return J !== 0 ? J : A.id - Y.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, v = p.now();
      i.unstable_now = function() {
        return p.now() - v;
      };
    }
    var S = [], R = [], k = 1, C = null, L = 3, F = !1, O = !1, w = !1, E = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function V(A) {
      for (var Y = u(R); Y !== null; ) {
        if (Y.callback === null) c(R);
        else if (Y.startTime <= A) c(R), Y.sortIndex = Y.expirationTime, s(S, Y);
        else break;
        Y = u(R);
      }
    }
    function D(A) {
      if (w = !1, V(A), !O) if (u(S) !== null) O = !0, ie(ee);
      else {
        var Y = u(R);
        Y !== null && ae(D, Y.startTime - A);
      }
    }
    function ee(A, Y) {
      O = !1, w && (w = !1, I(B), B = -1), F = !0;
      var J = L;
      try {
        for (V(Y), C = u(S); C !== null && (!(C.expirationTime > Y) || A && !Ce()); ) {
          var g = C.callback;
          if (typeof g == "function") {
            C.callback = null, L = C.priorityLevel;
            var z = g(C.expirationTime <= Y);
            Y = i.unstable_now(), typeof z == "function" ? C.callback = z : C === u(S) && c(S), V(Y);
          } else c(S);
          C = u(S);
        }
        if (C !== null) var ve = !0;
        else {
          var we = u(R);
          we !== null && ae(D, we.startTime - Y), ve = !1;
        }
        return ve;
      } finally {
        C = null, L = J, F = !1;
      }
    }
    var Z = !1, M = null, B = -1, re = 5, ce = -1;
    function Ce() {
      return !(i.unstable_now() - ce < re);
    }
    function Ae() {
      if (M !== null) {
        var A = i.unstable_now();
        ce = A;
        var Y = !0;
        try {
          Y = M(!0, A);
        } finally {
          Y ? Te() : (Z = !1, M = null);
        }
      } else Z = !1;
    }
    var Te;
    if (typeof N == "function") Te = function() {
      N(Ae);
    };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), H = Le.port2;
      Le.port1.onmessage = Ae, Te = function() {
        H.postMessage(null);
      };
    } else Te = function() {
      E(Ae, 0);
    };
    function ie(A) {
      M = A, Z || (Z = !0, Te());
    }
    function ae(A, Y) {
      B = E(function() {
        A(i.unstable_now());
      }, Y);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, i.unstable_continueExecution = function() {
      O || F || (O = !0, ie(ee));
    }, i.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < A ? Math.floor(1e3 / A) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, i.unstable_getFirstCallbackNode = function() {
      return u(S);
    }, i.unstable_next = function(A) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = L;
      }
      var J = L;
      L = Y;
      try {
        return A();
      } finally {
        L = J;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(A, Y) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var J = L;
      L = A;
      try {
        return Y();
      } finally {
        L = J;
      }
    }, i.unstable_scheduleCallback = function(A, Y, J) {
      var g = i.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? g + J : g) : J = g, A) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return z = J + z, A = { id: k++, callback: Y, priorityLevel: A, startTime: J, expirationTime: z, sortIndex: -1 }, J > g ? (A.sortIndex = J, s(R, A), u(S) === null && A === u(R) && (w ? (I(B), B = -1) : w = !0, ae(D, J - g))) : (A.sortIndex = z, s(S, A), O || F || (O = !0, ie(ee))), A;
    }, i.unstable_shouldYield = Ce, i.unstable_wrapCallback = function(A) {
      var Y = L;
      return function() {
        var J = L;
        L = Y;
        try {
          return A.apply(this, arguments);
        } finally {
          L = J;
        }
      };
    };
  })(ro)), ro;
}
var rd;
function ap() {
  return rd || (rd = 1, no.exports = sp()), no.exports;
}
var id;
function lp() {
  if (id) return Dt;
  id = 1;
  var i = So(), s = ap();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), f = {};
  function h(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var v = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), S = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, C = {};
  function L(e) {
    return S.call(C, e) ? !0 : S.call(k, e) ? !1 : R.test(e) ? C[e] = !0 : (k[e] = !0, !1);
  }
  function F(e, t, n, r) {
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
    if (t === null || typeof t > "u" || F(e, t, n, r)) return !0;
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
  function w(e, t, n, r, a, o, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = d;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    E[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    E[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    E[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    E[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    E[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    E[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    E[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    E[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    E[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var I = /[\-:]([a-z])/g;
  function N(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      I,
      N
    );
    E[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(I, N);
    E[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(I, N);
    E[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function V(e, t, n, r) {
    var a = E.hasOwnProperty(t) ? E[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (O(t, n, a, r) && (n = null), r || a === null ? L(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var D = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ee = /* @__PURE__ */ Symbol.for("react.element"), Z = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), B = /* @__PURE__ */ Symbol.for("react.strict_mode"), re = /* @__PURE__ */ Symbol.for("react.profiler"), ce = /* @__PURE__ */ Symbol.for("react.provider"), Ce = /* @__PURE__ */ Symbol.for("react.context"), Ae = /* @__PURE__ */ Symbol.for("react.forward_ref"), Te = /* @__PURE__ */ Symbol.for("react.suspense"), Le = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), ie = /* @__PURE__ */ Symbol.for("react.lazy"), ae = /* @__PURE__ */ Symbol.for("react.offscreen"), A = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object" ? null : (e = A && e[A] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var J = Object.assign, g;
  function z(e) {
    if (g === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      g = t && t[1] || "";
    }
    return `
` + g + e;
  }
  var ve = !1;
  function we(e, t) {
    if (!e || ve) return "";
    ve = !0;
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
        } catch (P) {
          var r = P;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (P) {
          r = P;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (P) {
          r = P;
        }
        e();
      }
    } catch (P) {
      if (P && r && typeof P.stack == "string") {
        for (var a = P.stack.split(`
`), o = r.stack.split(`
`), d = a.length - 1, m = o.length - 1; 1 <= d && 0 <= m && a[d] !== o[m]; ) m--;
        for (; 1 <= d && 0 <= m; d--, m--) if (a[d] !== o[m]) {
          if (d !== 1 || m !== 1)
            do
              if (d--, m--, 0 > m || a[d] !== o[m]) {
                var y = `
` + a[d].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= d && 0 <= m);
          break;
        }
      }
    } finally {
      ve = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? z(e) : "";
  }
  function _e(e) {
    switch (e.tag) {
      case 5:
        return z(e.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = we(e.type, !1), e;
      case 11:
        return e = we(e.type.render, !1), e;
      case 1:
        return e = we(e.type, !0), e;
      default:
        return "";
    }
  }
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case Z:
        return "Portal";
      case re:
        return "Profiler";
      case B:
        return "StrictMode";
      case Te:
        return "Suspense";
      case Le:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ce:
        return (e.displayName || "Context") + ".Consumer";
      case ce:
        return (e._context.displayName || "Context") + ".Provider";
      case Ae:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case H:
        return t = e.displayName || null, t !== null ? t : Ee(e.type) || "Memo";
      case ie:
        t = e._payload, e = e._init;
        try {
          return Ee(e(t));
        } catch {
        }
    }
    return null;
  }
  function Q(e) {
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
        return Ee(t);
      case 8:
        return t === B ? "StrictMode" : "Mode";
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
  function q(e) {
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
  function j(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function G(e) {
    var t = j(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(d) {
        r = "" + d, o.call(this, d);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(d) {
        r = "" + d;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function te(e) {
    e._valueTracker || (e._valueTracker = G(e));
  }
  function ne(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = j(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function le(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function fe(e, t) {
    var n = t.checked;
    return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Me(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = q(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function je(e, t) {
    t = t.checked, t != null && V(e, "checked", t, !1);
  }
  function $e(e, t) {
    je(e, t);
    var n = q(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Be(e, t.type, n) : t.hasOwnProperty("defaultValue") && Be(e, t.type, q(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ye(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Be(e, t, n) {
    (t !== "number" || le(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ge = Array.isArray;
  function Ue(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + q(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, r && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Je(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(u(92));
        if (Ge(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: q(n) };
  }
  function be(e, t) {
    var n = q(t.value), r = q(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function tt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Tt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Kt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var zt, nn = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (zt = zt || document.createElement("div"), zt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Gt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ct = {
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
  }, In = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ct).forEach(function(e) {
    In.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), ct[t] = ct[e];
    });
  });
  function ke(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ct.hasOwnProperty(e) && ct[e] ? ("" + t).trim() : t + "px";
  }
  function Wt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = ke(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var Se = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Re(e, t) {
    if (t) {
      if (Se[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function Pe(e, t) {
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
  var We = null;
  function Ze(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Qt = null, gt = null, bt = null;
  function hn(e) {
    if (e = _i(e)) {
      if (typeof Qt != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = Ss(t), Qt(e.stateNode, e.type, t));
    }
  }
  function pn(e) {
    gt ? bt ? bt.push(e) : bt = [e] : gt = e;
  }
  function Dn() {
    if (gt) {
      var e = gt, t = bt;
      if (bt = gt = null, hn(e), t) for (e = 0; e < t.length; e++) hn(t[e]);
    }
  }
  function Oe(e, t) {
    return e(t);
  }
  function nt() {
  }
  var Qe = !1;
  function pt(e, t, n) {
    if (Qe) return e(t, n);
    Qe = !0;
    try {
      return Oe(e, t, n);
    } finally {
      Qe = !1, (gt !== null || bt !== null) && (nt(), Dn());
    }
  }
  function Mt(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ss(n);
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
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var mn = !1;
  if (v) try {
    var vn = {};
    Object.defineProperty(vn, "passive", { get: function() {
      mn = !0;
    } }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
  } catch {
    mn = !1;
  }
  function li(e, t, n, r, a, o, d, m, y) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, P);
    } catch (K) {
      this.onError(K);
    }
  }
  var wn = !1, lr = null, _r = !1, En = null, oi = { onError: function(e) {
    wn = !0, lr = e;
  } };
  function Zi(e, t, n, r, a, o, d, m, y) {
    wn = !1, lr = null, li.apply(oi, arguments);
  }
  function ga(e, t, n, r, a, o, d, m, y) {
    if (Zi.apply(this, arguments), wn) {
      if (wn) {
        var P = lr;
        wn = !1, lr = null;
      } else throw Error(u(198));
      _r || (_r = !0, En = P);
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
  function xt(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function qi(e) {
    if (Nn(e) !== e) throw Error(u(188));
  }
  function es(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nn(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var o = a.alternate;
      if (o === null) {
        if (r = a.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (a.child === o.child) {
        for (o = a.child; o; ) {
          if (o === n) return qi(a), e;
          if (o === r) return qi(a), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) n = a, r = o;
      else {
        for (var d = !1, m = a.child; m; ) {
          if (m === n) {
            d = !0, n = a, r = o;
            break;
          }
          if (m === r) {
            d = !0, r = a, n = o;
            break;
          }
          m = m.sibling;
        }
        if (!d) {
          for (m = o.child; m; ) {
            if (m === n) {
              d = !0, n = o, r = a;
              break;
            }
            if (m === r) {
              d = !0, r = o, n = a;
              break;
            }
            m = m.sibling;
          }
          if (!d) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function ts(e) {
    return e = es(e), e !== null ? ns(e) : null;
  }
  function ns(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ns(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Cn = s.unstable_scheduleCallback, _n = s.unstable_cancelCallback, $ = s.unstable_shouldYield, ue = s.unstable_requestPaint, ye = s.unstable_now, Yt = s.unstable_getCurrentPriorityLevel, lt = s.unstable_ImmediatePriority, or = s.unstable_UserBlockingPriority, zn = s.unstable_NormalPriority, ur = s.unstable_LowPriority, To = s.unstable_IdlePriority, rs = null, kn = null;
  function vf(e) {
    if (kn && typeof kn.onCommitFiberRoot == "function") try {
      kn.onCommitFiberRoot(rs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var rn = Math.clz32 ? Math.clz32 : gf, kf = Math.log, yf = Math.LN2;
  function gf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (kf(e) / yf | 0) | 0;
  }
  var is = 64, ss = 4194304;
  function ui(e) {
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
  function as(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, a = e.suspendedLanes, o = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var m = d & ~a;
      m !== 0 ? r = ui(m) : (o &= d, o !== 0 && (r = ui(o)));
    } else d = n & ~a, d !== 0 ? r = ui(d) : o !== 0 && (r = ui(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - rn(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function xf(e, t) {
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
  function jf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var d = 31 - rn(o), m = 1 << d, y = a[d];
      y === -1 ? ((m & n) === 0 || (m & r) !== 0) && (a[d] = xf(m, t)) : y <= t && (e.expiredLanes |= m), o &= ~m;
    }
  }
  function xa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Mo() {
    var e = is;
    return is <<= 1, (is & 4194240) === 0 && (is = 64), e;
  }
  function ja(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ci(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - rn(t), e[t] = n;
  }
  function Sf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - rn(n), o = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
    }
  }
  function Sa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - rn(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var He = 0;
  function Po(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ao, wa, Ro, Lo, $o, Ea = !1, ls = [], bn = null, Vn = null, Bn = null, di = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), Un = [], wf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Fo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        bn = null;
        break;
      case "dragenter":
      case "dragleave":
        Vn = null;
        break;
      case "mouseover":
      case "mouseout":
        Bn = null;
        break;
      case "pointerover":
      case "pointerout":
        di.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fi.delete(t.pointerId);
    }
  }
  function hi(e, t, n, r, a, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = _i(t), t !== null && wa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Ef(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return bn = hi(bn, e, t, n, r, a), !0;
      case "dragenter":
        return Vn = hi(Vn, e, t, n, r, a), !0;
      case "mouseover":
        return Bn = hi(Bn, e, t, n, r, a), !0;
      case "pointerover":
        var o = a.pointerId;
        return di.set(o, hi(di.get(o) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return o = a.pointerId, fi.set(o, hi(fi.get(o) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function Oo(e) {
    var t = cr(e.target);
    if (t !== null) {
      var n = Nn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = xt(n), t !== null) {
            e.blockedOn = t, $o(e.priority, function() {
              Ro(n);
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
  function os(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        We = r, n.target.dispatchEvent(r), We = null;
      } else return t = _i(n), t !== null && wa(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Io(e, t, n) {
    os(e) && n.delete(t);
  }
  function Nf() {
    Ea = !1, bn !== null && os(bn) && (bn = null), Vn !== null && os(Vn) && (Vn = null), Bn !== null && os(Bn) && (Bn = null), di.forEach(Io), fi.forEach(Io);
  }
  function pi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ea || (Ea = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Nf)));
  }
  function mi(e) {
    function t(a) {
      return pi(a, e);
    }
    if (0 < ls.length) {
      pi(ls[0], e);
      for (var n = 1; n < ls.length; n++) {
        var r = ls[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (bn !== null && pi(bn, e), Vn !== null && pi(Vn, e), Bn !== null && pi(Bn, e), di.forEach(t), fi.forEach(t), n = 0; n < Un.length; n++) r = Un[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) Oo(n), n.blockedOn === null && Un.shift();
  }
  var Tr = D.ReactCurrentBatchConfig, us = !0;
  function Cf(e, t, n, r) {
    var a = He, o = Tr.transition;
    Tr.transition = null;
    try {
      He = 1, Na(e, t, n, r);
    } finally {
      He = a, Tr.transition = o;
    }
  }
  function _f(e, t, n, r) {
    var a = He, o = Tr.transition;
    Tr.transition = null;
    try {
      He = 4, Na(e, t, n, r);
    } finally {
      He = a, Tr.transition = o;
    }
  }
  function Na(e, t, n, r) {
    if (us) {
      var a = Ca(e, t, n, r);
      if (a === null) Ua(e, t, r, cs, n), Fo(e, r);
      else if (Ef(a, e, t, n, r)) r.stopPropagation();
      else if (Fo(e, r), t & 4 && -1 < wf.indexOf(e)) {
        for (; a !== null; ) {
          var o = _i(a);
          if (o !== null && Ao(o), o = Ca(e, t, n, r), o === null && Ua(e, t, r, cs, n), o === a) break;
          a = o;
        }
        a !== null && r.stopPropagation();
      } else Ua(e, t, r, null, n);
    }
  }
  var cs = null;
  function Ca(e, t, n, r) {
    if (cs = null, e = Ze(r), e = cr(e), e !== null) if (t = Nn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = xt(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return cs = e, null;
  }
  function Do(e) {
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
        switch (Yt()) {
          case lt:
            return 1;
          case or:
            return 4;
          case zn:
          case ur:
            return 16;
          case To:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Hn = null, _a = null, ds = null;
  function zo() {
    if (ds) return ds;
    var e, t = _a, n = t.length, r, a = "value" in Hn ? Hn.value : Hn.textContent, o = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === a[o - r]; r++) ;
    return ds = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function fs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function hs() {
    return !0;
  }
  function bo() {
    return !1;
  }
  function Vt(e) {
    function t(n, r, a, o, d) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = d, this.currentTarget = null;
      for (var m in e) e.hasOwnProperty(m) && (n = e[m], this[m] = n ? n(o) : o[m]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? hs : bo, this.isPropagationStopped = bo, this;
    }
    return J(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = hs);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = hs);
    }, persist: function() {
    }, isPersistent: hs }), t;
  }
  var Mr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ta = Vt(Mr), vi = J({}, Mr, { view: 0, detail: 0 }), Tf = Vt(vi), Ma, Pa, ki, ps = J({}, vi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ra, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ki && (ki && e.type === "mousemove" ? (Ma = e.screenX - ki.screenX, Pa = e.screenY - ki.screenY) : Pa = Ma = 0, ki = e), Ma);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Pa;
  } }), Vo = Vt(ps), Mf = J({}, ps, { dataTransfer: 0 }), Pf = Vt(Mf), Af = J({}, vi, { relatedTarget: 0 }), Aa = Vt(Af), Rf = J({}, Mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lf = Vt(Rf), $f = J({}, Mr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Ff = Vt($f), Of = J({}, Mr, { data: 0 }), Bo = Vt(Of), If = {
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
  }, Df = {
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
  }, zf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function bf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zf[e]) ? !!t[e] : !1;
  }
  function Ra() {
    return bf;
  }
  var Vf = J({}, vi, { key: function(e) {
    if (e.key) {
      var t = If[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = fs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Df[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ra, charCode: function(e) {
    return e.type === "keypress" ? fs(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? fs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Bf = Vt(Vf), Uf = J({}, ps, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Uo = Vt(Uf), Hf = J({}, vi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ra }), Kf = Vt(Hf), Gf = J({}, Mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wf = Vt(Gf), Qf = J({}, ps, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yf = Vt(Qf), Jf = [9, 13, 27, 32], La = v && "CompositionEvent" in window, yi = null;
  v && "documentMode" in document && (yi = document.documentMode);
  var Xf = v && "TextEvent" in window && !yi, Ho = v && (!La || yi && 8 < yi && 11 >= yi), Ko = " ", Go = !1;
  function Wo(e, t) {
    switch (e) {
      case "keyup":
        return Jf.indexOf(t.keyCode) !== -1;
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
  function Qo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Pr = !1;
  function Zf(e, t) {
    switch (e) {
      case "compositionend":
        return Qo(t);
      case "keypress":
        return t.which !== 32 ? null : (Go = !0, Ko);
      case "textInput":
        return e = t.data, e === Ko && Go ? null : e;
      default:
        return null;
    }
  }
  function qf(e, t) {
    if (Pr) return e === "compositionend" || !La && Wo(e, t) ? (e = zo(), ds = _a = Hn = null, Pr = !1, e) : null;
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
        return Ho && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var eh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Yo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!eh[e.type] : t === "textarea";
  }
  function Jo(e, t, n, r) {
    pn(r), t = gs(t, "onChange"), 0 < t.length && (n = new Ta("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var gi = null, xi = null;
  function th(e) {
    pu(e, 0);
  }
  function ms(e) {
    var t = Fr(e);
    if (ne(t)) return e;
  }
  function nh(e, t) {
    if (e === "change") return t;
  }
  var Xo = !1;
  if (v) {
    var $a;
    if (v) {
      var Fa = "oninput" in document;
      if (!Fa) {
        var Zo = document.createElement("div");
        Zo.setAttribute("oninput", "return;"), Fa = typeof Zo.oninput == "function";
      }
      $a = Fa;
    } else $a = !1;
    Xo = $a && (!document.documentMode || 9 < document.documentMode);
  }
  function qo() {
    gi && (gi.detachEvent("onpropertychange", eu), xi = gi = null);
  }
  function eu(e) {
    if (e.propertyName === "value" && ms(xi)) {
      var t = [];
      Jo(t, xi, e, Ze(e)), pt(th, t);
    }
  }
  function rh(e, t, n) {
    e === "focusin" ? (qo(), gi = t, xi = n, gi.attachEvent("onpropertychange", eu)) : e === "focusout" && qo();
  }
  function ih(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ms(xi);
  }
  function sh(e, t) {
    if (e === "click") return ms(t);
  }
  function ah(e, t) {
    if (e === "input" || e === "change") return ms(t);
  }
  function lh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var sn = typeof Object.is == "function" ? Object.is : lh;
  function ji(e, t) {
    if (sn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!S.call(t, a) || !sn(e[a], t[a])) return !1;
    }
    return !0;
  }
  function tu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nu(e, t) {
    var n = tu(e);
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
      n = tu(n);
    }
  }
  function ru(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ru(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function iu() {
    for (var e = window, t = le(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = le(e.document);
    }
    return t;
  }
  function Oa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function oh(e) {
    var t = iu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ru(n.ownerDocument.documentElement, n)) {
      if (r !== null && Oa(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, o = Math.min(r.start, a);
          r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = nu(n, o);
          var d = nu(
            n,
            r
          );
          a && d && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var uh = v && "documentMode" in document && 11 >= document.documentMode, Ar = null, Ia = null, Si = null, Da = !1;
  function su(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Da || Ar == null || Ar !== le(r) || (r = Ar, "selectionStart" in r && Oa(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Si && ji(Si, r) || (Si = r, r = gs(Ia, "onSelect"), 0 < r.length && (t = new Ta("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ar)));
  }
  function vs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Rr = { animationend: vs("Animation", "AnimationEnd"), animationiteration: vs("Animation", "AnimationIteration"), animationstart: vs("Animation", "AnimationStart"), transitionend: vs("Transition", "TransitionEnd") }, za = {}, au = {};
  v && (au = document.createElement("div").style, "AnimationEvent" in window || (delete Rr.animationend.animation, delete Rr.animationiteration.animation, delete Rr.animationstart.animation), "TransitionEvent" in window || delete Rr.transitionend.transition);
  function ks(e) {
    if (za[e]) return za[e];
    if (!Rr[e]) return e;
    var t = Rr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in au) return za[e] = t[n];
    return e;
  }
  var lu = ks("animationend"), ou = ks("animationiteration"), uu = ks("animationstart"), cu = ks("transitionend"), du = /* @__PURE__ */ new Map(), fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Kn(e, t) {
    du.set(e, t), h(t, [e]);
  }
  for (var ba = 0; ba < fu.length; ba++) {
    var Va = fu[ba], ch = Va.toLowerCase(), dh = Va[0].toUpperCase() + Va.slice(1);
    Kn(ch, "on" + dh);
  }
  Kn(lu, "onAnimationEnd"), Kn(ou, "onAnimationIteration"), Kn(uu, "onAnimationStart"), Kn("dblclick", "onDoubleClick"), Kn("focusin", "onFocus"), Kn("focusout", "onBlur"), Kn(cu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fh = new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));
  function hu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ga(r, t, void 0, e), e.currentTarget = null;
  }
  function pu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var m = r[d], y = m.instance, P = m.currentTarget;
          if (m = m.listener, y !== o && a.isPropagationStopped()) break e;
          hu(a, m, P), o = y;
        }
        else for (d = 0; d < r.length; d++) {
          if (m = r[d], y = m.instance, P = m.currentTarget, m = m.listener, y !== o && a.isPropagationStopped()) break e;
          hu(a, m, P), o = y;
        }
      }
    }
    if (_r) throw e = En, _r = !1, En = null, e;
  }
  function qe(e, t) {
    var n = t[Ya];
    n === void 0 && (n = t[Ya] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (mu(t, e, 2, !1), n.add(r));
  }
  function Ba(e, t, n) {
    var r = 0;
    t && (r |= 4), mu(n, e, r, t);
  }
  var ys = "_reactListening" + Math.random().toString(36).slice(2);
  function Ei(e) {
    if (!e[ys]) {
      e[ys] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (fh.has(n) || Ba(n, !1, e), Ba(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ys] || (t[ys] = !0, Ba("selectionchange", !1, t));
    }
  }
  function mu(e, t, n, r) {
    switch (Do(t)) {
      case 1:
        var a = Cf;
        break;
      case 4:
        a = _f;
        break;
      default:
        a = Na;
    }
    n = a.bind(null, t, n, e), a = void 0, !mn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function Ua(e, t, n, r, a) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var d = r.tag;
      if (d === 3 || d === 4) {
        var m = r.stateNode.containerInfo;
        if (m === a || m.nodeType === 8 && m.parentNode === a) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var y = d.tag;
          if ((y === 3 || y === 4) && (y = d.stateNode.containerInfo, y === a || y.nodeType === 8 && y.parentNode === a)) return;
          d = d.return;
        }
        for (; m !== null; ) {
          if (d = cr(m), d === null) return;
          if (y = d.tag, y === 5 || y === 6) {
            r = o = d;
            continue e;
          }
          m = m.parentNode;
        }
      }
      r = r.return;
    }
    pt(function() {
      var P = o, K = Ze(n), W = [];
      e: {
        var U = du.get(e);
        if (U !== void 0) {
          var se = Ta, de = e;
          switch (e) {
            case "keypress":
              if (fs(n) === 0) break e;
            case "keydown":
            case "keyup":
              se = Bf;
              break;
            case "focusin":
              de = "focus", se = Aa;
              break;
            case "focusout":
              de = "blur", se = Aa;
              break;
            case "beforeblur":
            case "afterblur":
              se = Aa;
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
              se = Vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = Pf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = Kf;
              break;
            case lu:
            case ou:
            case uu:
              se = Lf;
              break;
            case cu:
              se = Wf;
              break;
            case "scroll":
              se = Tf;
              break;
            case "wheel":
              se = Yf;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = Ff;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = Uo;
          }
          var pe = (t & 4) !== 0, ut = !pe && e === "scroll", _ = pe ? U !== null ? U + "Capture" : null : U;
          pe = [];
          for (var x = P, T; x !== null; ) {
            T = x;
            var X = T.stateNode;
            if (T.tag === 5 && X !== null && (T = X, _ !== null && (X = Mt(x, _), X != null && pe.push(Ni(x, X, T)))), ut) break;
            x = x.return;
          }
          0 < pe.length && (U = new se(U, de, null, n, K), W.push({ event: U, listeners: pe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", se = e === "mouseout" || e === "pointerout", U && n !== We && (de = n.relatedTarget || n.fromElement) && (cr(de) || de[Tn])) break e;
          if ((se || U) && (U = K.window === K ? K : (U = K.ownerDocument) ? U.defaultView || U.parentWindow : window, se ? (de = n.relatedTarget || n.toElement, se = P, de = de ? cr(de) : null, de !== null && (ut = Nn(de), de !== ut || de.tag !== 5 && de.tag !== 6) && (de = null)) : (se = null, de = P), se !== de)) {
            if (pe = Vo, X = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (pe = Uo, X = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), ut = se == null ? U : Fr(se), T = de == null ? U : Fr(de), U = new pe(X, x + "leave", se, n, K), U.target = ut, U.relatedTarget = T, X = null, cr(K) === P && (pe = new pe(_, x + "enter", de, n, K), pe.target = T, pe.relatedTarget = ut, X = pe), ut = X, se && de) t: {
              for (pe = se, _ = de, x = 0, T = pe; T; T = Lr(T)) x++;
              for (T = 0, X = _; X; X = Lr(X)) T++;
              for (; 0 < x - T; ) pe = Lr(pe), x--;
              for (; 0 < T - x; ) _ = Lr(_), T--;
              for (; x--; ) {
                if (pe === _ || _ !== null && pe === _.alternate) break t;
                pe = Lr(pe), _ = Lr(_);
              }
              pe = null;
            }
            else pe = null;
            se !== null && vu(W, U, se, pe, !1), de !== null && ut !== null && vu(W, ut, de, pe, !0);
          }
        }
        e: {
          if (U = P ? Fr(P) : window, se = U.nodeName && U.nodeName.toLowerCase(), se === "select" || se === "input" && U.type === "file") var me = nh;
          else if (Yo(U)) if (Xo) me = ah;
          else {
            me = ih;
            var ge = rh;
          }
          else (se = U.nodeName) && se.toLowerCase() === "input" && (U.type === "checkbox" || U.type === "radio") && (me = sh);
          if (me && (me = me(e, P))) {
            Jo(W, me, n, K);
            break e;
          }
          ge && ge(e, U, P), e === "focusout" && (ge = U._wrapperState) && ge.controlled && U.type === "number" && Be(U, "number", U.value);
        }
        switch (ge = P ? Fr(P) : window, e) {
          case "focusin":
            (Yo(ge) || ge.contentEditable === "true") && (Ar = ge, Ia = P, Si = null);
            break;
          case "focusout":
            Si = Ia = Ar = null;
            break;
          case "mousedown":
            Da = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Da = !1, su(W, n, K);
            break;
          case "selectionchange":
            if (uh) break;
          case "keydown":
          case "keyup":
            su(W, n, K);
        }
        var xe;
        if (La) e: {
          switch (e) {
            case "compositionstart":
              var Ne = "onCompositionStart";
              break e;
            case "compositionend":
              Ne = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ne = "onCompositionUpdate";
              break e;
          }
          Ne = void 0;
        }
        else Pr ? Wo(e, n) && (Ne = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ne = "onCompositionStart");
        Ne && (Ho && n.locale !== "ko" && (Pr || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && Pr && (xe = zo()) : (Hn = K, _a = "value" in Hn ? Hn.value : Hn.textContent, Pr = !0)), ge = gs(P, Ne), 0 < ge.length && (Ne = new Bo(Ne, e, null, n, K), W.push({ event: Ne, listeners: ge }), xe ? Ne.data = xe : (xe = Qo(n), xe !== null && (Ne.data = xe)))), (xe = Xf ? Zf(e, n) : qf(e, n)) && (P = gs(P, "onBeforeInput"), 0 < P.length && (K = new Bo("onBeforeInput", "beforeinput", null, n, K), W.push({ event: K, listeners: P }), K.data = xe));
      }
      pu(W, t);
    });
  }
  function Ni(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function gs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, o = a.stateNode;
      a.tag === 5 && o !== null && (a = o, o = Mt(e, n), o != null && r.unshift(Ni(e, o, a)), o = Mt(e, t), o != null && r.push(Ni(e, o, a))), e = e.return;
    }
    return r;
  }
  function Lr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function vu(e, t, n, r, a) {
    for (var o = t._reactName, d = []; n !== null && n !== r; ) {
      var m = n, y = m.alternate, P = m.stateNode;
      if (y !== null && y === r) break;
      m.tag === 5 && P !== null && (m = P, a ? (y = Mt(n, o), y != null && d.unshift(Ni(n, y, m))) : a || (y = Mt(n, o), y != null && d.push(Ni(n, y, m)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var hh = /\r\n?/g, ph = /\u0000|\uFFFD/g;
  function ku(e) {
    return (typeof e == "string" ? e : "" + e).replace(hh, `
`).replace(ph, "");
  }
  function xs(e, t, n) {
    if (t = ku(t), ku(e) !== t && n) throw Error(u(425));
  }
  function js() {
  }
  var Ha = null, Ka = null;
  function Ga(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Wa = typeof setTimeout == "function" ? setTimeout : void 0, mh = typeof clearTimeout == "function" ? clearTimeout : void 0, yu = typeof Promise == "function" ? Promise : void 0, vh = typeof queueMicrotask == "function" ? queueMicrotask : typeof yu < "u" ? function(e) {
    return yu.resolve(null).then(e).catch(kh);
  } : Wa;
  function kh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Qa(e, t) {
    var n = t, r = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (r === 0) {
          e.removeChild(a), mi(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = a;
    } while (n);
    mi(t);
  }
  function Gn(e) {
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
  function gu(e) {
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
  var $r = Math.random().toString(36).slice(2), yn = "__reactFiber$" + $r, Ci = "__reactProps$" + $r, Tn = "__reactContainer$" + $r, Ya = "__reactEvents$" + $r, yh = "__reactListeners$" + $r, gh = "__reactHandles$" + $r;
  function cr(e) {
    var t = e[yn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Tn] || n[yn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = gu(e); e !== null; ) {
          if (n = e[yn]) return n;
          e = gu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function _i(e) {
    return e = e[yn] || e[Tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Ss(e) {
    return e[Ci] || null;
  }
  var Ja = [], Or = -1;
  function Wn(e) {
    return { current: e };
  }
  function et(e) {
    0 > Or || (e.current = Ja[Or], Ja[Or] = null, Or--);
  }
  function Xe(e, t) {
    Or++, Ja[Or] = e.current, e.current = t;
  }
  var Qn = {}, Et = Wn(Qn), Lt = Wn(!1), dr = Qn;
  function Ir(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, o;
    for (o in n) a[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function $t(e) {
    return e = e.childContextTypes, e != null;
  }
  function ws() {
    et(Lt), et(Et);
  }
  function xu(e, t, n) {
    if (Et.current !== Qn) throw Error(u(168));
    Xe(Et, t), Xe(Lt, n);
  }
  function ju(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(u(108, Q(e) || "Unknown", a));
    return J({}, n, r);
  }
  function Es(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qn, dr = Et.current, Xe(Et, e), Xe(Lt, Lt.current), !0;
  }
  function Su(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = ju(e, t, dr), r.__reactInternalMemoizedMergedChildContext = e, et(Lt), et(Et), Xe(Et, e)) : et(Lt), Xe(Lt, n);
  }
  var Mn = null, Ns = !1, Xa = !1;
  function wu(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function xh(e) {
    Ns = !0, wu(e);
  }
  function Yn() {
    if (!Xa && Mn !== null) {
      Xa = !0;
      var e = 0, t = He;
      try {
        var n = Mn;
        for (He = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Mn = null, Ns = !1;
      } catch (a) {
        throw Mn !== null && (Mn = Mn.slice(e + 1)), Cn(lt, Yn), a;
      } finally {
        He = t, Xa = !1;
      }
    }
    return null;
  }
  var Dr = [], zr = 0, Cs = null, _s = 0, Jt = [], Xt = 0, fr = null, Pn = 1, An = "";
  function hr(e, t) {
    Dr[zr++] = _s, Dr[zr++] = Cs, Cs = e, _s = t;
  }
  function Eu(e, t, n) {
    Jt[Xt++] = Pn, Jt[Xt++] = An, Jt[Xt++] = fr, fr = e;
    var r = Pn;
    e = An;
    var a = 32 - rn(r) - 1;
    r &= ~(1 << a), n += 1;
    var o = 32 - rn(t) + a;
    if (30 < o) {
      var d = a - a % 5;
      o = (r & (1 << d) - 1).toString(32), r >>= d, a -= d, Pn = 1 << 32 - rn(t) + a | n << a | r, An = o + e;
    } else Pn = 1 << o | n << a | r, An = e;
  }
  function Za(e) {
    e.return !== null && (hr(e, 1), Eu(e, 1, 0));
  }
  function qa(e) {
    for (; e === Cs; ) Cs = Dr[--zr], Dr[zr] = null, _s = Dr[--zr], Dr[zr] = null;
    for (; e === fr; ) fr = Jt[--Xt], Jt[Xt] = null, An = Jt[--Xt], Jt[Xt] = null, Pn = Jt[--Xt], Jt[Xt] = null;
  }
  var Bt = null, Ut = null, rt = !1, an = null;
  function Nu(e, t) {
    var n = tn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Cu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Bt = e, Ut = Gn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Bt = e, Ut = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fr !== null ? { id: Pn, overflow: An } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = tn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Bt = e, Ut = null, !0) : !1;
      default:
        return !1;
    }
  }
  function el(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function tl(e) {
    if (rt) {
      var t = Ut;
      if (t) {
        var n = t;
        if (!Cu(e, t)) {
          if (el(e)) throw Error(u(418));
          t = Gn(n.nextSibling);
          var r = Bt;
          t && Cu(e, t) ? Nu(r, n) : (e.flags = e.flags & -4097 | 2, rt = !1, Bt = e);
        }
      } else {
        if (el(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, rt = !1, Bt = e;
      }
    }
  }
  function _u(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Bt = e;
  }
  function Ts(e) {
    if (e !== Bt) return !1;
    if (!rt) return _u(e), rt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ga(e.type, e.memoizedProps)), t && (t = Ut)) {
      if (el(e)) throw Tu(), Error(u(418));
      for (; t; ) Nu(e, t), t = Gn(t.nextSibling);
    }
    if (_u(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ut = Gn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ut = null;
      }
    } else Ut = Bt ? Gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Tu() {
    for (var e = Ut; e; ) e = Gn(e.nextSibling);
  }
  function br() {
    Ut = Bt = null, rt = !1;
  }
  function nl(e) {
    an === null ? an = [e] : an.push(e);
  }
  var jh = D.ReactCurrentBatchConfig;
  function Ti(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var a = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(d) {
          var m = a.refs;
          d === null ? delete m[o] : m[o] = d;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function Ms(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Mu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pu(e) {
    function t(_, x) {
      if (e) {
        var T = _.deletions;
        T === null ? (_.deletions = [x], _.flags |= 16) : T.push(x);
      }
    }
    function n(_, x) {
      if (!e) return null;
      for (; x !== null; ) t(_, x), x = x.sibling;
      return null;
    }
    function r(_, x) {
      for (_ = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? _.set(x.key, x) : _.set(x.index, x), x = x.sibling;
      return _;
    }
    function a(_, x) {
      return _ = rr(_, x), _.index = 0, _.sibling = null, _;
    }
    function o(_, x, T) {
      return _.index = T, e ? (T = _.alternate, T !== null ? (T = T.index, T < x ? (_.flags |= 2, x) : T) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function d(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function m(_, x, T, X) {
      return x === null || x.tag !== 6 ? (x = Wl(T, _.mode, X), x.return = _, x) : (x = a(x, T), x.return = _, x);
    }
    function y(_, x, T, X) {
      var me = T.type;
      return me === M ? K(_, x, T.props.children, X, T.key) : x !== null && (x.elementType === me || typeof me == "object" && me !== null && me.$$typeof === ie && Mu(me) === x.type) ? (X = a(x, T.props), X.ref = Ti(_, x, T), X.return = _, X) : (X = qs(T.type, T.key, T.props, null, _.mode, X), X.ref = Ti(_, x, T), X.return = _, X);
    }
    function P(_, x, T, X) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== T.containerInfo || x.stateNode.implementation !== T.implementation ? (x = Ql(T, _.mode, X), x.return = _, x) : (x = a(x, T.children || []), x.return = _, x);
    }
    function K(_, x, T, X, me) {
      return x === null || x.tag !== 7 ? (x = jr(T, _.mode, X, me), x.return = _, x) : (x = a(x, T), x.return = _, x);
    }
    function W(_, x, T) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Wl("" + x, _.mode, T), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ee:
            return T = qs(x.type, x.key, x.props, null, _.mode, T), T.ref = Ti(_, null, x), T.return = _, T;
          case Z:
            return x = Ql(x, _.mode, T), x.return = _, x;
          case ie:
            var X = x._init;
            return W(_, X(x._payload), T);
        }
        if (Ge(x) || Y(x)) return x = jr(x, _.mode, T, null), x.return = _, x;
        Ms(_, x);
      }
      return null;
    }
    function U(_, x, T, X) {
      var me = x !== null ? x.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number") return me !== null ? null : m(_, x, "" + T, X);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ee:
            return T.key === me ? y(_, x, T, X) : null;
          case Z:
            return T.key === me ? P(_, x, T, X) : null;
          case ie:
            return me = T._init, U(
              _,
              x,
              me(T._payload),
              X
            );
        }
        if (Ge(T) || Y(T)) return me !== null ? null : K(_, x, T, X, null);
        Ms(_, T);
      }
      return null;
    }
    function se(_, x, T, X, me) {
      if (typeof X == "string" && X !== "" || typeof X == "number") return _ = _.get(T) || null, m(x, _, "" + X, me);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case ee:
            return _ = _.get(X.key === null ? T : X.key) || null, y(x, _, X, me);
          case Z:
            return _ = _.get(X.key === null ? T : X.key) || null, P(x, _, X, me);
          case ie:
            var ge = X._init;
            return se(_, x, T, ge(X._payload), me);
        }
        if (Ge(X) || Y(X)) return _ = _.get(T) || null, K(x, _, X, me, null);
        Ms(x, X);
      }
      return null;
    }
    function de(_, x, T, X) {
      for (var me = null, ge = null, xe = x, Ne = x = 0, kt = null; xe !== null && Ne < T.length; Ne++) {
        xe.index > Ne ? (kt = xe, xe = null) : kt = xe.sibling;
        var Ve = U(_, xe, T[Ne], X);
        if (Ve === null) {
          xe === null && (xe = kt);
          break;
        }
        e && xe && Ve.alternate === null && t(_, xe), x = o(Ve, x, Ne), ge === null ? me = Ve : ge.sibling = Ve, ge = Ve, xe = kt;
      }
      if (Ne === T.length) return n(_, xe), rt && hr(_, Ne), me;
      if (xe === null) {
        for (; Ne < T.length; Ne++) xe = W(_, T[Ne], X), xe !== null && (x = o(xe, x, Ne), ge === null ? me = xe : ge.sibling = xe, ge = xe);
        return rt && hr(_, Ne), me;
      }
      for (xe = r(_, xe); Ne < T.length; Ne++) kt = se(xe, _, Ne, T[Ne], X), kt !== null && (e && kt.alternate !== null && xe.delete(kt.key === null ? Ne : kt.key), x = o(kt, x, Ne), ge === null ? me = kt : ge.sibling = kt, ge = kt);
      return e && xe.forEach(function(ir) {
        return t(_, ir);
      }), rt && hr(_, Ne), me;
    }
    function pe(_, x, T, X) {
      var me = Y(T);
      if (typeof me != "function") throw Error(u(150));
      if (T = me.call(T), T == null) throw Error(u(151));
      for (var ge = me = null, xe = x, Ne = x = 0, kt = null, Ve = T.next(); xe !== null && !Ve.done; Ne++, Ve = T.next()) {
        xe.index > Ne ? (kt = xe, xe = null) : kt = xe.sibling;
        var ir = U(_, xe, Ve.value, X);
        if (ir === null) {
          xe === null && (xe = kt);
          break;
        }
        e && xe && ir.alternate === null && t(_, xe), x = o(ir, x, Ne), ge === null ? me = ir : ge.sibling = ir, ge = ir, xe = kt;
      }
      if (Ve.done) return n(
        _,
        xe
      ), rt && hr(_, Ne), me;
      if (xe === null) {
        for (; !Ve.done; Ne++, Ve = T.next()) Ve = W(_, Ve.value, X), Ve !== null && (x = o(Ve, x, Ne), ge === null ? me = Ve : ge.sibling = Ve, ge = Ve);
        return rt && hr(_, Ne), me;
      }
      for (xe = r(_, xe); !Ve.done; Ne++, Ve = T.next()) Ve = se(xe, _, Ne, Ve.value, X), Ve !== null && (e && Ve.alternate !== null && xe.delete(Ve.key === null ? Ne : Ve.key), x = o(Ve, x, Ne), ge === null ? me = Ve : ge.sibling = Ve, ge = Ve);
      return e && xe.forEach(function(ep) {
        return t(_, ep);
      }), rt && hr(_, Ne), me;
    }
    function ut(_, x, T, X) {
      if (typeof T == "object" && T !== null && T.type === M && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ee:
            e: {
              for (var me = T.key, ge = x; ge !== null; ) {
                if (ge.key === me) {
                  if (me = T.type, me === M) {
                    if (ge.tag === 7) {
                      n(_, ge.sibling), x = a(ge, T.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (ge.elementType === me || typeof me == "object" && me !== null && me.$$typeof === ie && Mu(me) === ge.type) {
                    n(_, ge.sibling), x = a(ge, T.props), x.ref = Ti(_, ge, T), x.return = _, _ = x;
                    break e;
                  }
                  n(_, ge);
                  break;
                } else t(_, ge);
                ge = ge.sibling;
              }
              T.type === M ? (x = jr(T.props.children, _.mode, X, T.key), x.return = _, _ = x) : (X = qs(T.type, T.key, T.props, null, _.mode, X), X.ref = Ti(_, x, T), X.return = _, _ = X);
            }
            return d(_);
          case Z:
            e: {
              for (ge = T.key; x !== null; ) {
                if (x.key === ge) if (x.tag === 4 && x.stateNode.containerInfo === T.containerInfo && x.stateNode.implementation === T.implementation) {
                  n(_, x.sibling), x = a(x, T.children || []), x.return = _, _ = x;
                  break e;
                } else {
                  n(_, x);
                  break;
                }
                else t(_, x);
                x = x.sibling;
              }
              x = Ql(T, _.mode, X), x.return = _, _ = x;
            }
            return d(_);
          case ie:
            return ge = T._init, ut(_, x, ge(T._payload), X);
        }
        if (Ge(T)) return de(_, x, T, X);
        if (Y(T)) return pe(_, x, T, X);
        Ms(_, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" ? (T = "" + T, x !== null && x.tag === 6 ? (n(_, x.sibling), x = a(x, T), x.return = _, _ = x) : (n(_, x), x = Wl(T, _.mode, X), x.return = _, _ = x), d(_)) : n(_, x);
    }
    return ut;
  }
  var Vr = Pu(!0), Au = Pu(!1), Ps = Wn(null), As = null, Br = null, rl = null;
  function il() {
    rl = Br = As = null;
  }
  function sl(e) {
    var t = Ps.current;
    et(Ps), e._currentValue = t;
  }
  function al(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ur(e, t) {
    As = e, rl = Br = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ft = !0), e.firstContext = null);
  }
  function Zt(e) {
    var t = e._currentValue;
    if (rl !== e) if (e = { context: e, memoizedValue: t, next: null }, Br === null) {
      if (As === null) throw Error(u(308));
      Br = e, As.dependencies = { lanes: 0, firstContext: e };
    } else Br = Br.next = e;
    return t;
  }
  var pr = null;
  function ll(e) {
    pr === null ? pr = [e] : pr.push(e);
  }
  function Ru(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, ll(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Rn(e, r);
  }
  function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Jn = !1;
  function ol(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Lu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ln(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Xn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (De & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Rn(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, ll(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Rn(e, n);
  }
  function Rs(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Sa(e, n);
    }
  }
  function $u(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var a = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? a = o = d : o = o.next = d, n = n.next;
        } while (n !== null);
        o === null ? a = o = t : o = o.next = t;
      } else a = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Ls(e, t, n, r) {
    var a = e.updateQueue;
    Jn = !1;
    var o = a.firstBaseUpdate, d = a.lastBaseUpdate, m = a.shared.pending;
    if (m !== null) {
      a.shared.pending = null;
      var y = m, P = y.next;
      y.next = null, d === null ? o = P : d.next = P, d = y;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, m = K.lastBaseUpdate, m !== d && (m === null ? K.firstBaseUpdate = P : m.next = P, K.lastBaseUpdate = y));
    }
    if (o !== null) {
      var W = a.baseState;
      d = 0, K = P = y = null, m = o;
      do {
        var U = m.lane, se = m.eventTime;
        if ((r & U) === U) {
          K !== null && (K = K.next = {
            eventTime: se,
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          });
          e: {
            var de = e, pe = m;
            switch (U = t, se = n, pe.tag) {
              case 1:
                if (de = pe.payload, typeof de == "function") {
                  W = de.call(se, W, U);
                  break e;
                }
                W = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = pe.payload, U = typeof de == "function" ? de.call(se, W, U) : de, U == null) break e;
                W = J({}, W, U);
                break e;
              case 2:
                Jn = !0;
            }
          }
          m.callback !== null && m.lane !== 0 && (e.flags |= 64, U = a.effects, U === null ? a.effects = [m] : U.push(m));
        } else se = { eventTime: se, lane: U, tag: m.tag, payload: m.payload, callback: m.callback, next: null }, K === null ? (P = K = se, y = W) : K = K.next = se, d |= U;
        if (m = m.next, m === null) {
          if (m = a.shared.pending, m === null) break;
          U = m, m = U.next, U.next = null, a.lastBaseUpdate = U, a.shared.pending = null;
        }
      } while (!0);
      if (K === null && (y = W), a.baseState = y, a.firstBaseUpdate = P, a.lastBaseUpdate = K, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          d |= a.lane, a = a.next;
        while (a !== t);
      } else o === null && (a.shared.lanes = 0);
      kr |= d, e.lanes = d, e.memoizedState = W;
    }
  }
  function Fu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(u(191, a));
        a.call(r);
      }
    }
  }
  var Mi = {}, gn = Wn(Mi), Pi = Wn(Mi), Ai = Wn(Mi);
  function mr(e) {
    if (e === Mi) throw Error(u(174));
    return e;
  }
  function ul(e, t) {
    switch (Xe(Ai, t), Xe(Pi, e), Xe(gn, Mi), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Kt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Kt(t, e);
    }
    et(gn), Xe(gn, t);
  }
  function Hr() {
    et(gn), et(Pi), et(Ai);
  }
  function Ou(e) {
    mr(Ai.current);
    var t = mr(gn.current), n = Kt(t, e.type);
    t !== n && (Xe(Pi, e), Xe(gn, n));
  }
  function cl(e) {
    Pi.current === e && (et(gn), et(Pi));
  }
  var st = Wn(0);
  function $s(e) {
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
  var dl = [];
  function fl() {
    for (var e = 0; e < dl.length; e++) dl[e]._workInProgressVersionPrimary = null;
    dl.length = 0;
  }
  var Fs = D.ReactCurrentDispatcher, hl = D.ReactCurrentBatchConfig, vr = 0, at = null, ft = null, mt = null, Os = !1, Ri = !1, Li = 0, Sh = 0;
  function Nt() {
    throw Error(u(321));
  }
  function pl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!sn(e[n], t[n])) return !1;
    return !0;
  }
  function ml(e, t, n, r, a, o) {
    if (vr = o, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fs.current = e === null || e.memoizedState === null ? Ch : _h, e = n(r, a), Ri) {
      o = 0;
      do {
        if (Ri = !1, Li = 0, 25 <= o) throw Error(u(301));
        o += 1, mt = ft = null, t.updateQueue = null, Fs.current = Th, e = n(r, a);
      } while (Ri);
    }
    if (Fs.current = zs, t = ft !== null && ft.next !== null, vr = 0, mt = ft = at = null, Os = !1, t) throw Error(u(300));
    return e;
  }
  function vl() {
    var e = Li !== 0;
    return Li = 0, e;
  }
  function xn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return mt === null ? at.memoizedState = mt = e : mt = mt.next = e, mt;
  }
  function qt() {
    if (ft === null) {
      var e = at.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ft.next;
    var t = mt === null ? at.memoizedState : mt.next;
    if (t !== null) mt = t, ft = e;
    else {
      if (e === null) throw Error(u(310));
      ft = e, e = { memoizedState: ft.memoizedState, baseState: ft.baseState, baseQueue: ft.baseQueue, queue: ft.queue, next: null }, mt === null ? at.memoizedState = mt = e : mt = mt.next = e;
    }
    return mt;
  }
  function $i(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function kl(e) {
    var t = qt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = ft, a = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (a !== null) {
        var d = a.next;
        a.next = o.next, o.next = d;
      }
      r.baseQueue = a = o, n.pending = null;
    }
    if (a !== null) {
      o = a.next, r = r.baseState;
      var m = d = null, y = null, P = o;
      do {
        var K = P.lane;
        if ((vr & K) === K) y !== null && (y = y.next = { lane: 0, action: P.action, hasEagerState: P.hasEagerState, eagerState: P.eagerState, next: null }), r = P.hasEagerState ? P.eagerState : e(r, P.action);
        else {
          var W = {
            lane: K,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null
          };
          y === null ? (m = y = W, d = r) : y = y.next = W, at.lanes |= K, kr |= K;
        }
        P = P.next;
      } while (P !== null && P !== o);
      y === null ? d = r : y.next = m, sn(r, t.memoizedState) || (Ft = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = y, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        o = a.lane, at.lanes |= o, kr |= o, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function yl(e) {
    var t = qt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, o = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var d = a = a.next;
      do
        o = e(o, d.action), d = d.next;
      while (d !== a);
      sn(o, t.memoizedState) || (Ft = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Iu() {
  }
  function Du(e, t) {
    var n = at, r = qt(), a = t(), o = !sn(r.memoizedState, a);
    if (o && (r.memoizedState = a, Ft = !0), r = r.queue, gl(Vu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || mt !== null && mt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Fi(9, bu.bind(null, n, r, a, t), void 0, null), vt === null) throw Error(u(349));
      (vr & 30) !== 0 || zu(n, t, a);
    }
    return a;
  }
  function zu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function bu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Bu(t) && Uu(e);
  }
  function Vu(e, t, n) {
    return n(function() {
      Bu(t) && Uu(e);
    });
  }
  function Bu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !sn(e, n);
    } catch {
      return !0;
    }
  }
  function Uu(e) {
    var t = Rn(e, 1);
    t !== null && cn(t, e, 1, -1);
  }
  function Hu(e) {
    var t = xn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: $i, lastRenderedState: e }, t.queue = e, e = e.dispatch = Nh.bind(null, at, e), [t.memoizedState, e];
  }
  function Fi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ku() {
    return qt().memoizedState;
  }
  function Is(e, t, n, r) {
    var a = xn();
    at.flags |= e, a.memoizedState = Fi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ds(e, t, n, r) {
    var a = qt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ft !== null) {
      var d = ft.memoizedState;
      if (o = d.destroy, r !== null && pl(r, d.deps)) {
        a.memoizedState = Fi(t, n, o, r);
        return;
      }
    }
    at.flags |= e, a.memoizedState = Fi(1 | t, n, o, r);
  }
  function Gu(e, t) {
    return Is(8390656, 8, e, t);
  }
  function gl(e, t) {
    return Ds(2048, 8, e, t);
  }
  function Wu(e, t) {
    return Ds(4, 2, e, t);
  }
  function Qu(e, t) {
    return Ds(4, 4, e, t);
  }
  function Yu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ju(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ds(4, 4, Yu.bind(null, t, e), n);
  }
  function xl() {
  }
  function Xu(e, t) {
    var n = qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Zu(e, t) {
    var n = qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function qu(e, t, n) {
    return (vr & 21) === 0 ? (e.baseState && (e.baseState = !1, Ft = !0), e.memoizedState = n) : (sn(n, t) || (n = Mo(), at.lanes |= n, kr |= n, e.baseState = !0), t);
  }
  function wh(e, t) {
    var n = He;
    He = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = hl.transition;
    hl.transition = {};
    try {
      e(!1), t();
    } finally {
      He = n, hl.transition = r;
    }
  }
  function ec() {
    return qt().memoizedState;
  }
  function Eh(e, t, n) {
    var r = tr(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, tc(e)) nc(t, n);
    else if (n = Ru(e, t, n, r), n !== null) {
      var a = At();
      cn(n, e, r, a), rc(n, t, r);
    }
  }
  function Nh(e, t, n) {
    var r = tr(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (tc(e)) nc(t, a);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var d = t.lastRenderedState, m = o(d, n);
        if (a.hasEagerState = !0, a.eagerState = m, sn(m, d)) {
          var y = t.interleaved;
          y === null ? (a.next = a, ll(t)) : (a.next = y.next, y.next = a), t.interleaved = a;
          return;
        }
      } catch {
      }
      n = Ru(e, t, a, r), n !== null && (a = At(), cn(n, e, r, a), rc(n, t, r));
    }
  }
  function tc(e) {
    var t = e.alternate;
    return e === at || t !== null && t === at;
  }
  function nc(e, t) {
    Ri = Os = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function rc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Sa(e, n);
    }
  }
  var zs = { readContext: Zt, useCallback: Nt, useContext: Nt, useEffect: Nt, useImperativeHandle: Nt, useInsertionEffect: Nt, useLayoutEffect: Nt, useMemo: Nt, useReducer: Nt, useRef: Nt, useState: Nt, useDebugValue: Nt, useDeferredValue: Nt, useTransition: Nt, useMutableSource: Nt, useSyncExternalStore: Nt, useId: Nt, unstable_isNewReconciler: !1 }, Ch = { readContext: Zt, useCallback: function(e, t) {
    return xn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Zt, useEffect: Gu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Is(
      4194308,
      4,
      Yu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Is(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Is(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = xn();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Eh.bind(null, at, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = xn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Hu, useDebugValue: xl, useDeferredValue: function(e) {
    return xn().memoizedState = e;
  }, useTransition: function() {
    var e = Hu(!1), t = e[0];
    return e = wh.bind(null, e[1]), xn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = at, a = xn();
    if (rt) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), vt === null) throw Error(u(349));
      (vr & 30) !== 0 || zu(r, t, n);
    }
    a.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return a.queue = o, Gu(Vu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Fi(9, bu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = xn(), t = vt.identifierPrefix;
    if (rt) {
      var n = An, r = Pn;
      n = (r & ~(1 << 32 - rn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Li++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Sh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, _h = {
    readContext: Zt,
    useCallback: Xu,
    useContext: Zt,
    useEffect: gl,
    useImperativeHandle: Ju,
    useInsertionEffect: Wu,
    useLayoutEffect: Qu,
    useMemo: Zu,
    useReducer: kl,
    useRef: Ku,
    useState: function() {
      return kl($i);
    },
    useDebugValue: xl,
    useDeferredValue: function(e) {
      var t = qt();
      return qu(t, ft.memoizedState, e);
    },
    useTransition: function() {
      var e = kl($i)[0], t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: Du,
    useId: ec,
    unstable_isNewReconciler: !1
  }, Th = { readContext: Zt, useCallback: Xu, useContext: Zt, useEffect: gl, useImperativeHandle: Ju, useInsertionEffect: Wu, useLayoutEffect: Qu, useMemo: Zu, useReducer: yl, useRef: Ku, useState: function() {
    return yl($i);
  }, useDebugValue: xl, useDeferredValue: function(e) {
    var t = qt();
    return ft === null ? t.memoizedState = e : qu(t, ft.memoizedState, e);
  }, useTransition: function() {
    var e = yl($i)[0], t = qt().memoizedState;
    return [e, t];
  }, useMutableSource: Iu, useSyncExternalStore: Du, useId: ec, unstable_isNewReconciler: !1 };
  function ln(e, t) {
    if (e && e.defaultProps) {
      t = J({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function jl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var bs = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = At(), a = tr(e), o = Ln(r, a);
    o.payload = t, n != null && (o.callback = n), t = Xn(e, o, a), t !== null && (cn(t, e, a, r), Rs(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = At(), a = tr(e), o = Ln(r, a);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Xn(e, o, a), t !== null && (cn(t, e, a, r), Rs(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = At(), r = tr(e), a = Ln(n, r);
    a.tag = 2, t != null && (a.callback = t), t = Xn(e, a, r), t !== null && (cn(t, e, r, n), Rs(t, e, r));
  } };
  function ic(e, t, n, r, a, o, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, d) : t.prototype && t.prototype.isPureReactComponent ? !ji(n, r) || !ji(a, o) : !0;
  }
  function sc(e, t, n) {
    var r = !1, a = Qn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Zt(o) : (a = $t(t) ? dr : Et.current, r = t.contextTypes, o = (r = r != null) ? Ir(e, a) : Qn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function ac(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bs.enqueueReplaceState(t, t.state, null);
  }
  function Sl(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, ol(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? a.context = Zt(o) : (o = $t(t) ? dr : Et.current, a.context = Ir(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (jl(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && bs.enqueueReplaceState(a, a.state, null), Ls(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Kr(e, t) {
    try {
      var n = "", r = t;
      do
        n += _e(r), r = r.return;
      while (r);
      var a = n;
    } catch (o) {
      a = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function wl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function El(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Mh = typeof WeakMap == "function" ? WeakMap : Map;
  function lc(e, t, n) {
    n = Ln(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Ws || (Ws = !0, zl = r), El(e, t);
    }, n;
  }
  function oc(e, t, n) {
    n = Ln(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        El(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      El(e, t), typeof r != "function" && (qn === null ? qn = /* @__PURE__ */ new Set([this]) : qn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function uc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Mh();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = Uh.bind(null, e, t, n), t.then(e, e));
  }
  function cc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function dc(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ln(-1, 1), t.tag = 2, Xn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Ph = D.ReactCurrentOwner, Ft = !1;
  function Pt(e, t, n, r) {
    t.child = e === null ? Au(t, null, n, r) : Vr(t, e.child, n, r);
  }
  function fc(e, t, n, r, a) {
    n = n.render;
    var o = t.ref;
    return Ur(t, a), r = ml(e, t, n, r, o, a), n = vl(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, $n(e, t, a)) : (rt && n && Za(t), t.flags |= 1, Pt(e, t, r, a), t.child);
  }
  function hc(e, t, n, r, a) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Gl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, pc(e, t, o, r, a)) : (e = qs(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & a) === 0) {
      var d = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ji, n(d, r) && e.ref === t.ref) return $n(e, t, a);
    }
    return t.flags |= 1, e = rr(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function pc(e, t, n, r, a) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ji(o, r) && e.ref === t.ref) if (Ft = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (Ft = !0);
      else return t.lanes = e.lanes, $n(e, t, a);
    }
    return Nl(e, t, n, r, a);
  }
  function mc(e, t, n) {
    var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Xe(Wr, Ht), Ht |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Xe(Wr, Ht), Ht |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Xe(Wr, Ht), Ht |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Xe(Wr, Ht), Ht |= r;
    return Pt(e, t, a, n), t.child;
  }
  function vc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Nl(e, t, n, r, a) {
    var o = $t(n) ? dr : Et.current;
    return o = Ir(t, o), Ur(t, a), n = ml(e, t, n, r, o, a), r = vl(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, $n(e, t, a)) : (rt && r && Za(t), t.flags |= 1, Pt(e, t, n, a), t.child);
  }
  function kc(e, t, n, r, a) {
    if ($t(n)) {
      var o = !0;
      Es(t);
    } else o = !1;
    if (Ur(t, a), t.stateNode === null) Bs(e, t), sc(t, n, r), Sl(t, n, r, a), r = !0;
    else if (e === null) {
      var d = t.stateNode, m = t.memoizedProps;
      d.props = m;
      var y = d.context, P = n.contextType;
      typeof P == "object" && P !== null ? P = Zt(P) : (P = $t(n) ? dr : Et.current, P = Ir(t, P));
      var K = n.getDerivedStateFromProps, W = typeof K == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      W || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (m !== r || y !== P) && ac(t, d, r, P), Jn = !1;
      var U = t.memoizedState;
      d.state = U, Ls(t, r, d, a), y = t.memoizedState, m !== r || U !== y || Lt.current || Jn ? (typeof K == "function" && (jl(t, n, K, r), y = t.memoizedState), (m = Jn || ic(t, n, m, r, U, y, P)) ? (W || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = y), d.props = r, d.state = y, d.context = P, r = m) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, Lu(e, t), m = t.memoizedProps, P = t.type === t.elementType ? m : ln(t.type, m), d.props = P, W = t.pendingProps, U = d.context, y = n.contextType, typeof y == "object" && y !== null ? y = Zt(y) : (y = $t(n) ? dr : Et.current, y = Ir(t, y));
      var se = n.getDerivedStateFromProps;
      (K = typeof se == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (m !== W || U !== y) && ac(t, d, r, y), Jn = !1, U = t.memoizedState, d.state = U, Ls(t, r, d, a);
      var de = t.memoizedState;
      m !== W || U !== de || Lt.current || Jn ? (typeof se == "function" && (jl(t, n, se, r), de = t.memoizedState), (P = Jn || ic(t, n, P, r, U, de, y) || !1) ? (K || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, de, y), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, de, y)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || m === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = de), d.props = r, d.state = de, d.context = y, r = P) : (typeof d.componentDidUpdate != "function" || m === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Cl(e, t, n, r, o, a);
  }
  function Cl(e, t, n, r, a, o) {
    vc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return a && Su(t, n, !1), $n(e, t, o);
    r = t.stateNode, Ph.current = t;
    var m = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = Vr(t, e.child, null, o), t.child = Vr(t, null, m, o)) : Pt(e, t, m, o), t.memoizedState = r.state, a && Su(t, n, !0), t.child;
  }
  function yc(e) {
    var t = e.stateNode;
    t.pendingContext ? xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xu(e, t.context, !1), ul(e, t.containerInfo);
  }
  function gc(e, t, n, r, a) {
    return br(), nl(a), t.flags |= 256, Pt(e, t, n, r), t.child;
  }
  var _l = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Tl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xc(e, t, n) {
    var r = t.pendingProps, a = st.current, o = !1, d = (t.flags & 128) !== 0, m;
    if ((m = d) || (m = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), m ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Xe(st, a & 1), e === null)
      return tl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = d) : o = ea(d, r, 0, null), e = jr(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Tl(n), t.memoizedState = _l, e) : Ml(t, d));
    if (a = e.memoizedState, a !== null && (m = a.dehydrated, m !== null)) return Ah(e, t, d, r, m, a, n);
    if (o) {
      o = r.fallback, d = t.mode, a = e.child, m = a.sibling;
      var y = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = y, t.deletions = null) : (r = rr(a, y), r.subtreeFlags = a.subtreeFlags & 14680064), m !== null ? o = rr(m, o) : (o = jr(o, d, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, d = e.child.memoizedState, d = d === null ? Tl(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, o.memoizedState = d, o.childLanes = e.childLanes & ~n, t.memoizedState = _l, r;
    }
    return o = e.child, e = o.sibling, r = rr(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ml(e, t) {
    return t = ea({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Vs(e, t, n, r) {
    return r !== null && nl(r), Vr(t, e.child, null, n), e = Ml(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ah(e, t, n, r, a, o, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = wl(Error(u(422))), Vs(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = ea({ mode: "visible", children: r.children }, a, 0, null), o = jr(o, a, d, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Vr(t, e.child, null, d), t.child.memoizedState = Tl(d), t.memoizedState = _l, o);
    if ((t.mode & 1) === 0) return Vs(e, t, d, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var m = r.dgst;
      return r = m, o = Error(u(419)), r = wl(o, r, void 0), Vs(e, t, d, r);
    }
    if (m = (d & e.childLanes) !== 0, Ft || m) {
      if (r = vt, r !== null) {
        switch (d & -d) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
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
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        a = (a & (r.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Rn(e, a), cn(r, e, a, -1));
      }
      return Kl(), r = wl(Error(u(421))), Vs(e, t, d, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hh.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Ut = Gn(a.nextSibling), Bt = t, rt = !0, an = null, e !== null && (Jt[Xt++] = Pn, Jt[Xt++] = An, Jt[Xt++] = fr, Pn = e.id, An = e.overflow, fr = t), t = Ml(t, r.children), t.flags |= 4096, t);
  }
  function jc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), al(e.return, t, n);
  }
  function Pl(e, t, n, r, a) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
  }
  function Sc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, o = r.tail;
    if (Pt(e, t, r.children, n), r = st.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jc(e, n, t);
        else if (e.tag === 19) jc(e, n, t);
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
    if (Xe(st, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && $s(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Pl(t, !1, a, n, o);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && $s(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        Pl(t, !0, n, null, o);
        break;
      case "together":
        Pl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Bs(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function $n(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), kr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = rr(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Rh(e, t, n) {
    switch (t.tag) {
      case 3:
        yc(t), br();
        break;
      case 5:
        Ou(t);
        break;
      case 1:
        $t(t.type) && Es(t);
        break;
      case 4:
        ul(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        Xe(Ps, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Xe(st, st.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? xc(e, t, n) : (Xe(st, st.current & 1), e = $n(e, t, n), e !== null ? e.sibling : null);
        Xe(st, st.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Sc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Xe(st, st.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, mc(e, t, n);
    }
    return $n(e, t, n);
  }
  var wc, Al, Ec, Nc;
  wc = function(e, t) {
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
  }, Al = function() {
  }, Ec = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, mr(gn.current);
      var o = null;
      switch (n) {
        case "input":
          a = fe(e, a), r = fe(e, r), o = [];
          break;
        case "select":
          a = J({}, a, { value: void 0 }), r = J({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          a = yt(e, a), r = yt(e, r), o = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = js);
      }
      Re(n, r);
      var d;
      n = null;
      for (P in a) if (!r.hasOwnProperty(P) && a.hasOwnProperty(P) && a[P] != null) if (P === "style") {
        var m = a[P];
        for (d in m) m.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else P !== "dangerouslySetInnerHTML" && P !== "children" && P !== "suppressContentEditableWarning" && P !== "suppressHydrationWarning" && P !== "autoFocus" && (f.hasOwnProperty(P) ? o || (o = []) : (o = o || []).push(P, null));
      for (P in r) {
        var y = r[P];
        if (m = a?.[P], r.hasOwnProperty(P) && y !== m && (y != null || m != null)) if (P === "style") if (m) {
          for (d in m) !m.hasOwnProperty(d) || y && y.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in y) y.hasOwnProperty(d) && m[d] !== y[d] && (n || (n = {}), n[d] = y[d]);
        } else n || (o || (o = []), o.push(
          P,
          n
        )), n = y;
        else P === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, m = m ? m.__html : void 0, y != null && m !== y && (o = o || []).push(P, y)) : P === "children" ? typeof y != "string" && typeof y != "number" || (o = o || []).push(P, "" + y) : P !== "suppressContentEditableWarning" && P !== "suppressHydrationWarning" && (f.hasOwnProperty(P) ? (y != null && P === "onScroll" && qe("scroll", e), o || m === y || (o = [])) : (o = o || []).push(P, y));
      }
      n && (o = o || []).push("style", n);
      var P = o;
      (t.updateQueue = P) && (t.flags |= 4);
    }
  }, Nc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Oi(e, t) {
    if (!rt) switch (e.tailMode) {
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
  function Ct(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Lh(e, t, n) {
    var r = t.pendingProps;
    switch (qa(t), t.tag) {
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
        return Ct(t), null;
      case 1:
        return $t(t.type) && ws(), Ct(t), null;
      case 3:
        return r = t.stateNode, Hr(), et(Lt), et(Et), fl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ts(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, an !== null && (Bl(an), an = null))), Al(e, t), Ct(t), null;
      case 5:
        cl(t);
        var a = mr(Ai.current);
        if (n = t.type, e !== null && t.stateNode != null) Ec(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return Ct(t), null;
          }
          if (e = mr(gn.current), Ts(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[yn] = t, r[Ci] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                qe("cancel", r), qe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                qe("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < wi.length; a++) qe(wi[a], r);
                break;
              case "source":
                qe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                qe(
                  "error",
                  r
                ), qe("load", r);
                break;
              case "details":
                qe("toggle", r);
                break;
              case "input":
                Me(r, o), qe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, qe("invalid", r);
                break;
              case "textarea":
                Je(r, o), qe("invalid", r);
            }
            Re(n, o), a = null;
            for (var d in o) if (o.hasOwnProperty(d)) {
              var m = o[d];
              d === "children" ? typeof m == "string" ? r.textContent !== m && (o.suppressHydrationWarning !== !0 && xs(r.textContent, m, e), a = ["children", m]) : typeof m == "number" && r.textContent !== "" + m && (o.suppressHydrationWarning !== !0 && xs(
                r.textContent,
                m,
                e
              ), a = ["children", "" + m]) : f.hasOwnProperty(d) && m != null && d === "onScroll" && qe("scroll", r);
            }
            switch (n) {
              case "input":
                te(r), Ye(r, o, !0);
                break;
              case "textarea":
                te(r), tt(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = js);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[yn] = t, e[Ci] = r, wc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Pe(n, r), n) {
                case "dialog":
                  qe("cancel", e), qe("close", e), a = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  qe("load", e), a = r;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < wi.length; a++) qe(wi[a], e);
                  a = r;
                  break;
                case "source":
                  qe("error", e), a = r;
                  break;
                case "img":
                case "image":
                case "link":
                  qe(
                    "error",
                    e
                  ), qe("load", e), a = r;
                  break;
                case "details":
                  qe("toggle", e), a = r;
                  break;
                case "input":
                  Me(e, r), a = fe(e, r), qe("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = J({}, r, { value: void 0 }), qe("invalid", e);
                  break;
                case "textarea":
                  Je(e, r), a = yt(e, r), qe("invalid", e);
                  break;
                default:
                  a = r;
              }
              Re(n, a), m = a;
              for (o in m) if (m.hasOwnProperty(o)) {
                var y = m[o];
                o === "style" ? Wt(e, y) : o === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && nn(e, y)) : o === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Gt(e, y) : typeof y == "number" && Gt(e, "" + y) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (f.hasOwnProperty(o) ? y != null && o === "onScroll" && qe("scroll", e) : y != null && V(e, o, y, d));
              }
              switch (n) {
                case "input":
                  te(e), Ye(e, r, !1);
                  break;
                case "textarea":
                  te(e), tt(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + q(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Ue(e, !!r.multiple, o, !1) : r.defaultValue != null && Ue(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = js);
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
        return Ct(t), null;
      case 6:
        if (e && t.stateNode != null) Nc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (n = mr(Ai.current), mr(gn.current), Ts(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[yn] = t, (o = r.nodeValue !== n) && (e = Bt, e !== null)) switch (e.tag) {
              case 3:
                xs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && xs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yn] = t, t.stateNode = r;
        }
        return Ct(t), null;
      case 13:
        if (et(st), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (rt && Ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Tu(), br(), t.flags |= 98560, o = !1;
          else if (o = Ts(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[yn] = t;
            } else br(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ct(t), o = !1;
          } else an !== null && (Bl(an), an = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (st.current & 1) !== 0 ? ht === 0 && (ht = 3) : Kl())), t.updateQueue !== null && (t.flags |= 4), Ct(t), null);
      case 4:
        return Hr(), Al(e, t), e === null && Ei(t.stateNode.containerInfo), Ct(t), null;
      case 10:
        return sl(t.type._context), Ct(t), null;
      case 17:
        return $t(t.type) && ws(), Ct(t), null;
      case 19:
        if (et(st), o = t.memoizedState, o === null) return Ct(t), null;
        if (r = (t.flags & 128) !== 0, d = o.rendering, d === null) if (r) Oi(o, !1);
        else {
          if (ht !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = $s(e), d !== null) {
              for (t.flags |= 128, Oi(o, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, d = o.alternate, d === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = d.childLanes, o.lanes = d.lanes, o.child = d.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = d.memoizedProps, o.memoizedState = d.memoizedState, o.updateQueue = d.updateQueue, o.type = d.type, e = d.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Xe(st, st.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && ye() > Qr && (t.flags |= 128, r = !0, Oi(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = $s(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Oi(o, !0), o.tail === null && o.tailMode === "hidden" && !d.alternate && !rt) return Ct(t), null;
          } else 2 * ye() - o.renderingStartTime > Qr && n !== 1073741824 && (t.flags |= 128, r = !0, Oi(o, !1), t.lanes = 4194304);
          o.isBackwards ? (d.sibling = t.child, t.child = d) : (n = o.last, n !== null ? n.sibling = d : t.child = d, o.last = d);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ye(), t.sibling = null, n = st.current, Xe(st, r ? n & 1 | 2 : n & 1), t) : (Ct(t), null);
      case 22:
      case 23:
        return Hl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Ht & 1073741824) !== 0 && (Ct(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ct(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function $h(e, t) {
    switch (qa(t), t.tag) {
      case 1:
        return $t(t.type) && ws(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Hr(), et(Lt), et(Et), fl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return cl(t), null;
      case 13:
        if (et(st), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          br();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return et(st), null;
      case 4:
        return Hr(), null;
      case 10:
        return sl(t.type._context), null;
      case 22:
      case 23:
        return Hl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Us = !1, _t = !1, Fh = typeof WeakSet == "function" ? WeakSet : Set, oe = null;
  function Gr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ot(e, t, r);
    }
    else n.current = null;
  }
  function Rl(e, t, n) {
    try {
      n();
    } catch (r) {
      ot(e, t, r);
    }
  }
  var Cc = !1;
  function Oh(e, t) {
    if (Ha = us, e = iu(), Oa(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var d = 0, m = -1, y = -1, P = 0, K = 0, W = e, U = null;
          t: for (; ; ) {
            for (var se; W !== n || a !== 0 && W.nodeType !== 3 || (m = d + a), W !== o || r !== 0 && W.nodeType !== 3 || (y = d + r), W.nodeType === 3 && (d += W.nodeValue.length), (se = W.firstChild) !== null; )
              U = W, W = se;
            for (; ; ) {
              if (W === e) break t;
              if (U === n && ++P === a && (m = d), U === o && ++K === r && (y = d), (se = W.nextSibling) !== null) break;
              W = U, U = W.parentNode;
            }
            W = se;
          }
          n = m === -1 || y === -1 ? null : { start: m, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ka = { focusedElem: e, selectionRange: n }, us = !1, oe = t; oe !== null; ) if (t = oe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, oe = e;
    else for (; oe !== null; ) {
      t = oe;
      try {
        var de = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (de !== null) {
              var pe = de.memoizedProps, ut = de.memoizedState, _ = t.stateNode, x = _.getSnapshotBeforeUpdate(t.elementType === t.type ? pe : ln(t.type, pe), ut);
              _.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var T = t.stateNode.containerInfo;
            T.nodeType === 1 ? T.textContent = "" : T.nodeType === 9 && T.documentElement && T.removeChild(T.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (X) {
        ot(t, t.return, X);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, oe = e;
        break;
      }
      oe = t.return;
    }
    return de = Cc, Cc = !1, de;
  }
  function Ii(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var o = a.destroy;
          a.destroy = void 0, o !== void 0 && Rl(t, n, o);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function Hs(e, t) {
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
  function Ll(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function _c(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, _c(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yn], delete t[Ci], delete t[Ya], delete t[yh], delete t[gh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Tc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Mc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Tc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function $l(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = js));
    else if (r !== 4 && (e = e.child, e !== null)) for ($l(e, t, n), e = e.sibling; e !== null; ) $l(e, t, n), e = e.sibling;
  }
  function Fl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Fl(e, t, n), e = e.sibling; e !== null; ) Fl(e, t, n), e = e.sibling;
  }
  var jt = null, on = !1;
  function Zn(e, t, n) {
    for (n = n.child; n !== null; ) Pc(e, t, n), n = n.sibling;
  }
  function Pc(e, t, n) {
    if (kn && typeof kn.onCommitFiberUnmount == "function") try {
      kn.onCommitFiberUnmount(rs, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        _t || Gr(n, t);
      case 6:
        var r = jt, a = on;
        jt = null, Zn(e, t, n), jt = r, on = a, jt !== null && (on ? (e = jt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : jt.removeChild(n.stateNode));
        break;
      case 18:
        jt !== null && (on ? (e = jt, n = n.stateNode, e.nodeType === 8 ? Qa(e.parentNode, n) : e.nodeType === 1 && Qa(e, n), mi(e)) : Qa(jt, n.stateNode));
        break;
      case 4:
        r = jt, a = on, jt = n.stateNode.containerInfo, on = !0, Zn(e, t, n), jt = r, on = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_t && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var o = a, d = o.destroy;
            o = o.tag, d !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Rl(n, t, d), a = a.next;
          } while (a !== r);
        }
        Zn(e, t, n);
        break;
      case 1:
        if (!_t && (Gr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (m) {
          ot(n, t, m);
        }
        Zn(e, t, n);
        break;
      case 21:
        Zn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (_t = (r = _t) || n.memoizedState !== null, Zn(e, t, n), _t = r) : Zn(e, t, n);
        break;
      default:
        Zn(e, t, n);
    }
  }
  function Ac(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Fh()), t.forEach(function(r) {
        var a = Kh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function un(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var o = e, d = t, m = d;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 5:
              jt = m.stateNode, on = !1;
              break e;
            case 3:
              jt = m.stateNode.containerInfo, on = !0;
              break e;
            case 4:
              jt = m.stateNode.containerInfo, on = !0;
              break e;
          }
          m = m.return;
        }
        if (jt === null) throw Error(u(160));
        Pc(o, d, a), jt = null, on = !1;
        var y = a.alternate;
        y !== null && (y.return = null), a.return = null;
      } catch (P) {
        ot(a, t, P);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Rc(t, e), t = t.sibling;
  }
  function Rc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (un(t, e), jn(e), r & 4) {
          try {
            Ii(3, e, e.return), Hs(3, e);
          } catch (pe) {
            ot(e, e.return, pe);
          }
          try {
            Ii(5, e, e.return);
          } catch (pe) {
            ot(e, e.return, pe);
          }
        }
        break;
      case 1:
        un(t, e), jn(e), r & 512 && n !== null && Gr(n, n.return);
        break;
      case 5:
        if (un(t, e), jn(e), r & 512 && n !== null && Gr(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            Gt(a, "");
          } catch (pe) {
            ot(e, e.return, pe);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var o = e.memoizedProps, d = n !== null ? n.memoizedProps : o, m = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            m === "input" && o.type === "radio" && o.name != null && je(a, o), Pe(m, d);
            var P = Pe(m, o);
            for (d = 0; d < y.length; d += 2) {
              var K = y[d], W = y[d + 1];
              K === "style" ? Wt(a, W) : K === "dangerouslySetInnerHTML" ? nn(a, W) : K === "children" ? Gt(a, W) : V(a, K, W, P);
            }
            switch (m) {
              case "input":
                $e(a, o);
                break;
              case "textarea":
                be(a, o);
                break;
              case "select":
                var U = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!o.multiple;
                var se = o.value;
                se != null ? Ue(a, !!o.multiple, se, !1) : U !== !!o.multiple && (o.defaultValue != null ? Ue(
                  a,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Ue(a, !!o.multiple, o.multiple ? [] : "", !1));
            }
            a[Ci] = o;
          } catch (pe) {
            ot(e, e.return, pe);
          }
        }
        break;
      case 6:
        if (un(t, e), jn(e), r & 4) {
          if (e.stateNode === null) throw Error(u(162));
          a = e.stateNode, o = e.memoizedProps;
          try {
            a.nodeValue = o;
          } catch (pe) {
            ot(e, e.return, pe);
          }
        }
        break;
      case 3:
        if (un(t, e), jn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          mi(t.containerInfo);
        } catch (pe) {
          ot(e, e.return, pe);
        }
        break;
      case 4:
        un(t, e), jn(e);
        break;
      case 13:
        un(t, e), jn(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (Dl = ye())), r & 4 && Ac(e);
        break;
      case 22:
        if (K = n !== null && n.memoizedState !== null, e.mode & 1 ? (_t = (P = _t) || K, un(t, e), _t = P) : un(t, e), jn(e), r & 8192) {
          if (P = e.memoizedState !== null, (e.stateNode.isHidden = P) && !K && (e.mode & 1) !== 0) for (oe = e, K = e.child; K !== null; ) {
            for (W = oe = K; oe !== null; ) {
              switch (U = oe, se = U.child, U.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ii(4, U, U.return);
                  break;
                case 1:
                  Gr(U, U.return);
                  var de = U.stateNode;
                  if (typeof de.componentWillUnmount == "function") {
                    r = U, n = U.return;
                    try {
                      t = r, de.props = t.memoizedProps, de.state = t.memoizedState, de.componentWillUnmount();
                    } catch (pe) {
                      ot(r, n, pe);
                    }
                  }
                  break;
                case 5:
                  Gr(U, U.return);
                  break;
                case 22:
                  if (U.memoizedState !== null) {
                    Fc(W);
                    continue;
                  }
              }
              se !== null ? (se.return = U, oe = se) : Fc(W);
            }
            K = K.sibling;
          }
          e: for (K = null, W = e; ; ) {
            if (W.tag === 5) {
              if (K === null) {
                K = W;
                try {
                  a = W.stateNode, P ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (m = W.stateNode, y = W.memoizedProps.style, d = y != null && y.hasOwnProperty("display") ? y.display : null, m.style.display = ke("display", d));
                } catch (pe) {
                  ot(e, e.return, pe);
                }
              }
            } else if (W.tag === 6) {
              if (K === null) try {
                W.stateNode.nodeValue = P ? "" : W.memoizedProps;
              } catch (pe) {
                ot(e, e.return, pe);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === e) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === e) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === e) break e;
              K === W && (K = null), W = W.return;
            }
            K === W && (K = null), W.sibling.return = W.return, W = W.sibling;
          }
        }
        break;
      case 19:
        un(t, e), jn(e), r & 4 && Ac(e);
        break;
      case 21:
        break;
      default:
        un(
          t,
          e
        ), jn(e);
    }
  }
  function jn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Tc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var a = r.stateNode;
            r.flags & 32 && (Gt(a, ""), r.flags &= -33);
            var o = Mc(e);
            Fl(e, o, a);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, m = Mc(e);
            $l(e, m, d);
            break;
          default:
            throw Error(u(161));
        }
      } catch (y) {
        ot(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ih(e, t, n) {
    oe = e, Lc(e);
  }
  function Lc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; oe !== null; ) {
      var a = oe, o = a.child;
      if (a.tag === 22 && r) {
        var d = a.memoizedState !== null || Us;
        if (!d) {
          var m = a.alternate, y = m !== null && m.memoizedState !== null || _t;
          m = Us;
          var P = _t;
          if (Us = d, (_t = y) && !P) for (oe = a; oe !== null; ) d = oe, y = d.child, d.tag === 22 && d.memoizedState !== null ? Oc(a) : y !== null ? (y.return = d, oe = y) : Oc(a);
          for (; o !== null; ) oe = o, Lc(o), o = o.sibling;
          oe = a, Us = m, _t = P;
        }
        $c(e);
      } else (a.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = a, oe = o) : $c(e);
    }
  }
  function $c(e) {
    for (; oe !== null; ) {
      var t = oe;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _t || Hs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_t) if (n === null) r.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : ln(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Fu(t, o, r);
              break;
            case 3:
              var d = t.updateQueue;
              if (d !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Fu(t, d, n);
              }
              break;
            case 5:
              var m = t.stateNode;
              if (n === null && t.flags & 4) {
                n = m;
                var y = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    y.autoFocus && n.focus();
                    break;
                  case "img":
                    y.src && (n.src = y.src);
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
                var P = t.alternate;
                if (P !== null) {
                  var K = P.memoizedState;
                  if (K !== null) {
                    var W = K.dehydrated;
                    W !== null && mi(W);
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
              throw Error(u(163));
          }
          _t || t.flags & 512 && Ll(t);
        } catch (U) {
          ot(t, t.return, U);
        }
      }
      if (t === e) {
        oe = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, oe = n;
        break;
      }
      oe = t.return;
    }
  }
  function Fc(e) {
    for (; oe !== null; ) {
      var t = oe;
      if (t === e) {
        oe = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, oe = n;
        break;
      }
      oe = t.return;
    }
  }
  function Oc(e) {
    for (; oe !== null; ) {
      var t = oe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Hs(4, t);
            } catch (y) {
              ot(t, n, y);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                ot(t, a, y);
              }
            }
            var o = t.return;
            try {
              Ll(t);
            } catch (y) {
              ot(t, o, y);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Ll(t);
            } catch (y) {
              ot(t, d, y);
            }
        }
      } catch (y) {
        ot(t, t.return, y);
      }
      if (t === e) {
        oe = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        m.return = t.return, oe = m;
        break;
      }
      oe = t.return;
    }
  }
  var Dh = Math.ceil, Ks = D.ReactCurrentDispatcher, Ol = D.ReactCurrentOwner, en = D.ReactCurrentBatchConfig, De = 0, vt = null, dt = null, St = 0, Ht = 0, Wr = Wn(0), ht = 0, Di = null, kr = 0, Gs = 0, Il = 0, zi = null, Ot = null, Dl = 0, Qr = 1 / 0, Fn = null, Ws = !1, zl = null, qn = null, Qs = !1, er = null, Ys = 0, bi = 0, bl = null, Js = -1, Xs = 0;
  function At() {
    return (De & 6) !== 0 ? ye() : Js !== -1 ? Js : Js = ye();
  }
  function tr(e) {
    return (e.mode & 1) === 0 ? 1 : (De & 2) !== 0 && St !== 0 ? St & -St : jh.transition !== null ? (Xs === 0 && (Xs = Mo()), Xs) : (e = He, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Do(e.type)), e);
  }
  function cn(e, t, n, r) {
    if (50 < bi) throw bi = 0, bl = null, Error(u(185));
    ci(e, n, r), ((De & 2) === 0 || e !== vt) && (e === vt && ((De & 2) === 0 && (Gs |= n), ht === 4 && nr(e, St)), It(e, r), n === 1 && De === 0 && (t.mode & 1) === 0 && (Qr = ye() + 500, Ns && Yn()));
  }
  function It(e, t) {
    var n = e.callbackNode;
    jf(e, t);
    var r = as(e, e === vt ? St : 0);
    if (r === 0) n !== null && _n(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && _n(n), t === 1) e.tag === 0 ? xh(Dc.bind(null, e)) : wu(Dc.bind(null, e)), vh(function() {
        (De & 6) === 0 && Yn();
      }), n = null;
      else {
        switch (Po(r)) {
          case 1:
            n = lt;
            break;
          case 4:
            n = or;
            break;
          case 16:
            n = zn;
            break;
          case 536870912:
            n = To;
            break;
          default:
            n = zn;
        }
        n = Gc(n, Ic.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ic(e, t) {
    if (Js = -1, Xs = 0, (De & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Yr() && e.callbackNode !== n) return null;
    var r = as(e, e === vt ? St : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Zs(e, r);
    else {
      t = r;
      var a = De;
      De |= 2;
      var o = bc();
      (vt !== e || St !== t) && (Fn = null, Qr = ye() + 500, gr(e, t));
      do
        try {
          Vh();
          break;
        } catch (m) {
          zc(e, m);
        }
      while (!0);
      il(), Ks.current = o, De = a, dt !== null ? t = 0 : (vt = null, St = 0, t = ht);
    }
    if (t !== 0) {
      if (t === 2 && (a = xa(e), a !== 0 && (r = a, t = Vl(e, a))), t === 1) throw n = Di, gr(e, 0), nr(e, r), It(e, ye()), n;
      if (t === 6) nr(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !zh(a) && (t = Zs(e, r), t === 2 && (o = xa(e), o !== 0 && (r = o, t = Vl(e, o))), t === 1)) throw n = Di, gr(e, 0), nr(e, r), It(e, ye()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            xr(e, Ot, Fn);
            break;
          case 3:
            if (nr(e, r), (r & 130023424) === r && (t = Dl + 500 - ye(), 10 < t)) {
              if (as(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                At(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Wa(xr.bind(null, e, Ot, Fn), t);
              break;
            }
            xr(e, Ot, Fn);
            break;
          case 4:
            if (nr(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var d = 31 - rn(r);
              o = 1 << d, d = t[d], d > a && (a = d), r &= ~o;
            }
            if (r = a, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Dh(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Wa(xr.bind(null, e, Ot, Fn), r);
              break;
            }
            xr(e, Ot, Fn);
            break;
          case 5:
            xr(e, Ot, Fn);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return It(e, ye()), e.callbackNode === n ? Ic.bind(null, e) : null;
  }
  function Vl(e, t) {
    var n = zi;
    return e.current.memoizedState.isDehydrated && (gr(e, t).flags |= 256), e = Zs(e, t), e !== 2 && (t = Ot, Ot = n, t !== null && Bl(t)), e;
  }
  function Bl(e) {
    Ot === null ? Ot = e : Ot.push.apply(Ot, e);
  }
  function zh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var a = n[r], o = a.getSnapshot;
          a = a.value;
          try {
            if (!sn(o(), a)) return !1;
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
  function nr(e, t) {
    for (t &= ~Il, t &= ~Gs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - rn(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Dc(e) {
    if ((De & 6) !== 0) throw Error(u(327));
    Yr();
    var t = as(e, 0);
    if ((t & 1) === 0) return It(e, ye()), null;
    var n = Zs(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = xa(e);
      r !== 0 && (t = r, n = Vl(e, r));
    }
    if (n === 1) throw n = Di, gr(e, 0), nr(e, t), It(e, ye()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, xr(e, Ot, Fn), It(e, ye()), null;
  }
  function Ul(e, t) {
    var n = De;
    De |= 1;
    try {
      return e(t);
    } finally {
      De = n, De === 0 && (Qr = ye() + 500, Ns && Yn());
    }
  }
  function yr(e) {
    er !== null && er.tag === 0 && (De & 6) === 0 && Yr();
    var t = De;
    De |= 1;
    var n = en.transition, r = He;
    try {
      if (en.transition = null, He = 1, e) return e();
    } finally {
      He = r, en.transition = n, De = t, (De & 6) === 0 && Yn();
    }
  }
  function Hl() {
    Ht = Wr.current, et(Wr);
  }
  function gr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, mh(n)), dt !== null) for (n = dt.return; n !== null; ) {
      var r = n;
      switch (qa(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ws();
          break;
        case 3:
          Hr(), et(Lt), et(Et), fl();
          break;
        case 5:
          cl(r);
          break;
        case 4:
          Hr();
          break;
        case 13:
          et(st);
          break;
        case 19:
          et(st);
          break;
        case 10:
          sl(r.type._context);
          break;
        case 22:
        case 23:
          Hl();
      }
      n = n.return;
    }
    if (vt = e, dt = e = rr(e.current, null), St = Ht = t, ht = 0, Di = null, Il = Gs = kr = 0, Ot = zi = null, pr !== null) {
      for (t = 0; t < pr.length; t++) if (n = pr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, o = n.pending;
        if (o !== null) {
          var d = o.next;
          o.next = a, r.next = d;
        }
        n.pending = r;
      }
      pr = null;
    }
    return e;
  }
  function zc(e, t) {
    do {
      var n = dt;
      try {
        if (il(), Fs.current = zs, Os) {
          for (var r = at.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          Os = !1;
        }
        if (vr = 0, mt = ft = at = null, Ri = !1, Li = 0, Ol.current = null, n === null || n.return === null) {
          ht = 1, Di = t, dt = null;
          break;
        }
        e: {
          var o = e, d = n.return, m = n, y = t;
          if (t = St, m.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var P = y, K = m, W = K.tag;
            if ((K.mode & 1) === 0 && (W === 0 || W === 11 || W === 15)) {
              var U = K.alternate;
              U ? (K.updateQueue = U.updateQueue, K.memoizedState = U.memoizedState, K.lanes = U.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var se = cc(d);
            if (se !== null) {
              se.flags &= -257, dc(se, d, m, o, t), se.mode & 1 && uc(o, P, t), t = se, y = P;
              var de = t.updateQueue;
              if (de === null) {
                var pe = /* @__PURE__ */ new Set();
                pe.add(y), t.updateQueue = pe;
              } else de.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                uc(o, P, t), Kl();
                break e;
              }
              y = Error(u(426));
            }
          } else if (rt && m.mode & 1) {
            var ut = cc(d);
            if (ut !== null) {
              (ut.flags & 65536) === 0 && (ut.flags |= 256), dc(ut, d, m, o, t), nl(Kr(y, m));
              break e;
            }
          }
          o = y = Kr(y, m), ht !== 4 && (ht = 2), zi === null ? zi = [o] : zi.push(o), o = d;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var _ = lc(o, y, t);
                $u(o, _);
                break e;
              case 1:
                m = y;
                var x = o.type, T = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || T !== null && typeof T.componentDidCatch == "function" && (qn === null || !qn.has(T)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var X = oc(o, m, t);
                  $u(o, X);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Bc(n);
      } catch (me) {
        t = me, dt === n && n !== null && (dt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bc() {
    var e = Ks.current;
    return Ks.current = zs, e === null ? zs : e;
  }
  function Kl() {
    (ht === 0 || ht === 3 || ht === 2) && (ht = 4), vt === null || (kr & 268435455) === 0 && (Gs & 268435455) === 0 || nr(vt, St);
  }
  function Zs(e, t) {
    var n = De;
    De |= 2;
    var r = bc();
    (vt !== e || St !== t) && (Fn = null, gr(e, t));
    do
      try {
        bh();
        break;
      } catch (a) {
        zc(e, a);
      }
    while (!0);
    if (il(), De = n, Ks.current = r, dt !== null) throw Error(u(261));
    return vt = null, St = 0, ht;
  }
  function bh() {
    for (; dt !== null; ) Vc(dt);
  }
  function Vh() {
    for (; dt !== null && !$(); ) Vc(dt);
  }
  function Vc(e) {
    var t = Kc(e.alternate, e, Ht);
    e.memoizedProps = e.pendingProps, t === null ? Bc(e) : dt = t, Ol.current = null;
  }
  function Bc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Lh(n, t, Ht), n !== null) {
          dt = n;
          return;
        }
      } else {
        if (n = $h(n, t), n !== null) {
          n.flags &= 32767, dt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ht = 6, dt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        dt = t;
        return;
      }
      dt = t = e;
    } while (t !== null);
    ht === 0 && (ht = 5);
  }
  function xr(e, t, n) {
    var r = He, a = en.transition;
    try {
      en.transition = null, He = 1, Bh(e, t, n, r);
    } finally {
      en.transition = a, He = r;
    }
    return null;
  }
  function Bh(e, t, n, r) {
    do
      Yr();
    while (er !== null);
    if ((De & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Sf(e, o), e === vt && (dt = vt = null, St = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Qs || (Qs = !0, Gc(zn, function() {
      return Yr(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = en.transition, en.transition = null;
      var d = He;
      He = 1;
      var m = De;
      De |= 4, Ol.current = null, Oh(e, n), Rc(n, e), oh(Ka), us = !!Ha, Ka = Ha = null, e.current = n, Ih(n), ue(), De = m, He = d, en.transition = o;
    } else e.current = n;
    if (Qs && (Qs = !1, er = e, Ys = a), o = e.pendingLanes, o === 0 && (qn = null), vf(n.stateNode), It(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (Ws) throw Ws = !1, e = zl, zl = null, e;
    return (Ys & 1) !== 0 && e.tag !== 0 && Yr(), o = e.pendingLanes, (o & 1) !== 0 ? e === bl ? bi++ : (bi = 0, bl = e) : bi = 0, Yn(), null;
  }
  function Yr() {
    if (er !== null) {
      var e = Po(Ys), t = en.transition, n = He;
      try {
        if (en.transition = null, He = 16 > e ? 16 : e, er === null) var r = !1;
        else {
          if (e = er, er = null, Ys = 0, (De & 6) !== 0) throw Error(u(331));
          var a = De;
          for (De |= 4, oe = e.current; oe !== null; ) {
            var o = oe, d = o.child;
            if ((oe.flags & 16) !== 0) {
              var m = o.deletions;
              if (m !== null) {
                for (var y = 0; y < m.length; y++) {
                  var P = m[y];
                  for (oe = P; oe !== null; ) {
                    var K = oe;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ii(8, K, o);
                    }
                    var W = K.child;
                    if (W !== null) W.return = K, oe = W;
                    else for (; oe !== null; ) {
                      K = oe;
                      var U = K.sibling, se = K.return;
                      if (_c(K), K === P) {
                        oe = null;
                        break;
                      }
                      if (U !== null) {
                        U.return = se, oe = U;
                        break;
                      }
                      oe = se;
                    }
                  }
                }
                var de = o.alternate;
                if (de !== null) {
                  var pe = de.child;
                  if (pe !== null) {
                    de.child = null;
                    do {
                      var ut = pe.sibling;
                      pe.sibling = null, pe = ut;
                    } while (pe !== null);
                  }
                }
                oe = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) d.return = o, oe = d;
            else e: for (; oe !== null; ) {
              if (o = oe, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Ii(9, o, o.return);
              }
              var _ = o.sibling;
              if (_ !== null) {
                _.return = o.return, oe = _;
                break e;
              }
              oe = o.return;
            }
          }
          var x = e.current;
          for (oe = x; oe !== null; ) {
            d = oe;
            var T = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && T !== null) T.return = d, oe = T;
            else e: for (d = x; oe !== null; ) {
              if (m = oe, (m.flags & 2048) !== 0) try {
                switch (m.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hs(9, m);
                }
              } catch (me) {
                ot(m, m.return, me);
              }
              if (m === d) {
                oe = null;
                break e;
              }
              var X = m.sibling;
              if (X !== null) {
                X.return = m.return, oe = X;
                break e;
              }
              oe = m.return;
            }
          }
          if (De = a, Yn(), kn && typeof kn.onPostCommitFiberRoot == "function") try {
            kn.onPostCommitFiberRoot(rs, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        He = n, en.transition = t;
      }
    }
    return !1;
  }
  function Uc(e, t, n) {
    t = Kr(n, t), t = lc(e, t, 1), e = Xn(e, t, 1), t = At(), e !== null && (ci(e, 1, t), It(e, t));
  }
  function ot(e, t, n) {
    if (e.tag === 3) Uc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Uc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qn === null || !qn.has(r))) {
          e = Kr(n, e), e = oc(t, e, 1), t = Xn(t, e, 1), e = At(), t !== null && (ci(t, 1, e), It(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Uh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = At(), e.pingedLanes |= e.suspendedLanes & n, vt === e && (St & n) === n && (ht === 4 || ht === 3 && (St & 130023424) === St && 500 > ye() - Dl ? gr(e, 0) : Il |= n), It(e, t);
  }
  function Hc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ss, ss <<= 1, (ss & 130023424) === 0 && (ss = 4194304)));
    var n = At();
    e = Rn(e, t), e !== null && (ci(e, t, n), It(e, n));
  }
  function Hh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Hc(e, n);
  }
  function Kh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), Hc(e, n);
  }
  var Kc;
  Kc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Lt.current) Ft = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ft = !1, Rh(e, t, n);
      Ft = (e.flags & 131072) !== 0;
    }
    else Ft = !1, rt && (t.flags & 1048576) !== 0 && Eu(t, _s, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Bs(e, t), e = t.pendingProps;
        var a = Ir(t, Et.current);
        Ur(t, n), a = ml(null, t, r, e, a, n);
        var o = vl();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $t(r) ? (o = !0, Es(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ol(t), a.updater = bs, t.stateNode = a, a._reactInternals = t, Sl(t, r, e, n), t = Cl(null, t, r, !0, o, n)) : (t.tag = 0, rt && o && Za(t), Pt(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Bs(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Wh(r), e = ln(r, e), a) {
            case 0:
              t = Nl(null, t, r, e, n);
              break e;
            case 1:
              t = kc(null, t, r, e, n);
              break e;
            case 11:
              t = fc(null, t, r, e, n);
              break e;
            case 14:
              t = hc(null, t, r, ln(r.type, e), n);
              break e;
          }
          throw Error(u(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ln(r, a), Nl(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ln(r, a), kc(e, t, r, a, n);
      case 3:
        e: {
          if (yc(t), e === null) throw Error(u(387));
          r = t.pendingProps, o = t.memoizedState, a = o.element, Lu(e, t), Ls(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            a = Kr(Error(u(423)), t), t = gc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = Kr(Error(u(424)), t), t = gc(e, t, r, n, a);
            break e;
          } else for (Ut = Gn(t.stateNode.containerInfo.firstChild), Bt = t, rt = !0, an = null, n = Au(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (br(), r === a) {
              t = $n(e, t, n);
              break e;
            }
            Pt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ou(t), e === null && tl(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, d = a.children, Ga(r, a) ? d = null : o !== null && Ga(r, o) && (t.flags |= 32), vc(e, t), Pt(e, t, d, n), t.child;
      case 6:
        return e === null && tl(t), null;
      case 13:
        return xc(e, t, n);
      case 4:
        return ul(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Vr(t, null, r, n) : Pt(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ln(r, a), fc(e, t, r, a, n);
      case 7:
        return Pt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Pt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Pt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, d = a.value, Xe(Ps, r._currentValue), r._currentValue = d, o !== null) if (sn(o.value, d)) {
            if (o.children === a.children && !Lt.current) {
              t = $n(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var m = o.dependencies;
            if (m !== null) {
              d = o.child;
              for (var y = m.firstContext; y !== null; ) {
                if (y.context === r) {
                  if (o.tag === 1) {
                    y = Ln(-1, n & -n), y.tag = 2;
                    var P = o.updateQueue;
                    if (P !== null) {
                      P = P.shared;
                      var K = P.pending;
                      K === null ? y.next = y : (y.next = K.next, K.next = y), P.pending = y;
                    }
                  }
                  o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), al(
                    o.return,
                    n,
                    t
                  ), m.lanes |= n;
                  break;
                }
                y = y.next;
              }
            } else if (o.tag === 10) d = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (d = o.return, d === null) throw Error(u(341));
              d.lanes |= n, m = d.alternate, m !== null && (m.lanes |= n), al(d, n, t), d = o.sibling;
            } else d = o.child;
            if (d !== null) d.return = o;
            else for (d = o; d !== null; ) {
              if (d === t) {
                d = null;
                break;
              }
              if (o = d.sibling, o !== null) {
                o.return = d.return, d = o;
                break;
              }
              d = d.return;
            }
            o = d;
          }
          Pt(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, Ur(t, n), a = Zt(a), r = r(a), t.flags |= 1, Pt(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = ln(r, t.pendingProps), a = ln(r.type, a), hc(e, t, r, a, n);
      case 15:
        return pc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ln(r, a), Bs(e, t), t.tag = 1, $t(r) ? (e = !0, Es(t)) : e = !1, Ur(t, n), sc(t, r, a), Sl(t, r, a, n), Cl(null, t, r, !0, e, n);
      case 19:
        return Sc(e, t, n);
      case 22:
        return mc(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Gc(e, t) {
    return Cn(e, t);
  }
  function Gh(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tn(e, t, n, r) {
    return new Gh(e, t, n, r);
  }
  function Gl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Wh(e) {
    if (typeof e == "function") return Gl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ae) return 11;
      if (e === H) return 14;
    }
    return 2;
  }
  function rr(e, t) {
    var n = e.alternate;
    return n === null ? (n = tn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function qs(e, t, n, r, a, o) {
    var d = 2;
    if (r = e, typeof e == "function") Gl(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case M:
        return jr(n.children, a, o, t);
      case B:
        d = 8, a |= 8;
        break;
      case re:
        return e = tn(12, n, t, a | 2), e.elementType = re, e.lanes = o, e;
      case Te:
        return e = tn(13, n, t, a), e.elementType = Te, e.lanes = o, e;
      case Le:
        return e = tn(19, n, t, a), e.elementType = Le, e.lanes = o, e;
      case ae:
        return ea(n, a, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ce:
            d = 10;
            break e;
          case Ce:
            d = 9;
            break e;
          case Ae:
            d = 11;
            break e;
          case H:
            d = 14;
            break e;
          case ie:
            d = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = tn(d, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function jr(e, t, n, r) {
    return e = tn(7, e, r, t), e.lanes = n, e;
  }
  function ea(e, t, n, r) {
    return e = tn(22, e, r, t), e.elementType = ae, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Wl(e, t, n) {
    return e = tn(6, e, null, t), e.lanes = n, e;
  }
  function Ql(e, t, n) {
    return t = tn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Qh(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ja(0), this.expirationTimes = ja(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ja(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Yl(e, t, n, r, a, o, d, m, y) {
    return e = new Qh(e, t, n, m, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = tn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ol(o), e;
  }
  function Yh(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Z, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Wc(e) {
    if (!e) return Qn;
    e = e._reactInternals;
    e: {
      if (Nn(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if ($t(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if ($t(n)) return ju(e, n, t);
    }
    return t;
  }
  function Qc(e, t, n, r, a, o, d, m, y) {
    return e = Yl(n, r, !0, e, a, o, d, m, y), e.context = Wc(null), n = e.current, r = At(), a = tr(n), o = Ln(r, a), o.callback = t ?? null, Xn(n, o, a), e.current.lanes = a, ci(e, a, r), It(e, r), e;
  }
  function ta(e, t, n, r) {
    var a = t.current, o = At(), d = tr(a);
    return n = Wc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ln(o, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Xn(a, t, d), e !== null && (cn(e, a, d, o), Rs(e, a, d)), d;
  }
  function na(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Yc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Jl(e, t) {
    Yc(e, t), (e = e.alternate) && Yc(e, t);
  }
  function Jh() {
    return null;
  }
  var Jc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Xl(e) {
    this._internalRoot = e;
  }
  ra.prototype.render = Xl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    ta(e, t, null, null);
  }, ra.prototype.unmount = Xl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      yr(function() {
        ta(null, e, null, null);
      }), t[Tn] = null;
    }
  };
  function ra(e) {
    this._internalRoot = e;
  }
  ra.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Lo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && Oo(e);
    }
  };
  function Zl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ia(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Xc() {
  }
  function Xh(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var P = na(d);
          o.call(P);
        };
      }
      var d = Qc(t, r, e, 0, null, !1, !1, "", Xc);
      return e._reactRootContainer = d, e[Tn] = d.current, Ei(e.nodeType === 8 ? e.parentNode : e), yr(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var m = r;
      r = function() {
        var P = na(y);
        m.call(P);
      };
    }
    var y = Yl(e, 0, !1, null, null, !1, !1, "", Xc);
    return e._reactRootContainer = y, e[Tn] = y.current, Ei(e.nodeType === 8 ? e.parentNode : e), yr(function() {
      ta(t, y, n, r);
    }), y;
  }
  function sa(e, t, n, r, a) {
    var o = n._reactRootContainer;
    if (o) {
      var d = o;
      if (typeof a == "function") {
        var m = a;
        a = function() {
          var y = na(d);
          m.call(y);
        };
      }
      ta(t, d, e, a);
    } else d = Xh(n, t, e, a, r);
    return na(d);
  }
  Ao = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ui(t.pendingLanes);
          n !== 0 && (Sa(t, n | 1), It(t, ye()), (De & 6) === 0 && (Qr = ye() + 500, Yn()));
        }
        break;
      case 13:
        yr(function() {
          var r = Rn(e, 1);
          if (r !== null) {
            var a = At();
            cn(r, e, 1, a);
          }
        }), Jl(e, 1);
    }
  }, wa = function(e) {
    if (e.tag === 13) {
      var t = Rn(e, 134217728);
      if (t !== null) {
        var n = At();
        cn(t, e, 134217728, n);
      }
      Jl(e, 134217728);
    }
  }, Ro = function(e) {
    if (e.tag === 13) {
      var t = tr(e), n = Rn(e, t);
      if (n !== null) {
        var r = At();
        cn(n, e, t, r);
      }
      Jl(e, t);
    }
  }, Lo = function() {
    return He;
  }, $o = function(e, t) {
    var n = He;
    try {
      return He = e, t();
    } finally {
      He = n;
    }
  }, Qt = function(e, t, n) {
    switch (t) {
      case "input":
        if ($e(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = Ss(r);
              if (!a) throw Error(u(90));
              ne(r), $e(r, a);
            }
          }
        }
        break;
      case "textarea":
        be(e, n);
        break;
      case "select":
        t = n.value, t != null && Ue(e, !!n.multiple, t, !1);
    }
  }, Oe = Ul, nt = yr;
  var Zh = { usingClientEntryPoint: !1, Events: [_i, Fr, Ss, pn, Dn, Ul] }, Vi = { findFiberByHostInstance: cr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qh = { bundleType: Vi.bundleType, version: Vi.version, rendererPackageName: Vi.rendererPackageName, rendererConfig: Vi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: D.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ts(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Vi.findFiberByHostInstance || Jh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var aa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!aa.isDisabled && aa.supportsFiber) try {
      rs = aa.inject(qh), kn = aa;
    } catch {
    }
  }
  return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zh, Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zl(t)) throw Error(u(200));
    return Yh(e, t, null, n);
  }, Dt.createRoot = function(e, t) {
    if (!Zl(e)) throw Error(u(299));
    var n = !1, r = "", a = Jc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Yl(e, 1, !1, null, null, n, !1, r, a), e[Tn] = t.current, Ei(e.nodeType === 8 ? e.parentNode : e), new Xl(t);
  }, Dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = ts(t), e = e === null ? null : e.stateNode, e;
  }, Dt.flushSync = function(e) {
    return yr(e);
  }, Dt.hydrate = function(e, t, n) {
    if (!ia(t)) throw Error(u(200));
    return sa(null, e, t, !0, n);
  }, Dt.hydrateRoot = function(e, t, n) {
    if (!Zl(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, a = !1, o = "", d = Jc;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = Qc(t, null, e, 1, n ?? null, a, !1, o, d), e[Tn] = t.current, Ei(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new ra(t);
  }, Dt.render = function(e, t, n) {
    if (!ia(t)) throw Error(u(200));
    return sa(null, e, t, !1, n);
  }, Dt.unmountComponentAtNode = function(e) {
    if (!ia(e)) throw Error(u(40));
    return e._reactRootContainer ? (yr(function() {
      sa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Tn] = null;
      });
    }), !0) : !1;
  }, Dt.unstable_batchedUpdates = Ul, Dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ia(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return sa(e, t, n, !1, r);
  }, Dt.version = "18.3.1-next-f1338f8080-20240426", Dt;
}
var sd;
function op() {
  if (sd) return to.exports;
  sd = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), to.exports = lp(), to.exports;
}
var ad;
function up() {
  if (ad) return la;
  ad = 1;
  var i = op();
  return la.createRoot = i.createRoot, la.hydrateRoot = i.hydrateRoot, la;
}
var cp = up();
const dp = (() => {
  const i = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], s = "CDEFGAB", u = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], f = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, p = 7, v = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], S = ["e", "B", "G", "D", "A", "E"], R = ["ohut e", "B", "G", "D", "A", "paksu E"], k = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], C = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], L = {
    mp: {
      name: "mollipentatoninen",
      base: k,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: k,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: k,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: k,
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
      base: C,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: C,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: C,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: C,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, F = 26, O = 72, w = 30, E = 54, I = 34, N = 11, V = (F + O) / 2, D = w + (c.length - 1) * I + 30, ee = (Q) => O + Q * E, Z = (Q) => Q === 0 ? V : ee(Q) - E / 2, M = (Q) => w + Q * I;
  function B(Q, q, j) {
    const G = s.indexOf(i[Q][0]) + Number(j.slice(-1)) - 1, te = G % s.length, ne = u[te] + 12 * Math.floor(G / s.length), le = Q + q - ne;
    return s[te] + (le < 0 ? "♭" : "♯").repeat(Math.abs(le));
  }
  function re(Q) {
    return [...Q.base, ...Q.add].sort((q, j) => q[0] - j[0]);
  }
  function ce(Q, q, j) {
    const G = q + (j ? 1 : 0), te = v[G % v.length], ne = Math.min(...te.map(([$e]) => $e)), le = Math.max(...te.map(([, $e]) => $e));
    let je = (Q - f % 12 + 12) % 12 - (j ? 8 : 5) + 12 * Math.floor(G / v.length);
    return ne + je < 0 && (je += 12), le + je > h.pentatonic && (je -= 12), {
      strings: te.map(($e) => $e.map((Ye) => Ye + je)),
      start: ne + je,
      end: le + je
    };
  }
  function Ce(Q, q, j) {
    const G = j[q], te = (Q + G - f % 12 + 12) % 12, ne = f + te - G, le = c.map((fe, Me) => {
      const je = q + (c.length - 1 - Me) * 3;
      return [je, je + 1, je + 2].map(($e) => {
        const Ye = Math.floor($e / j.length), Be = j[$e % j.length];
        return ne + Be + 12 * Ye - fe;
      });
    });
    return {
      strings: le,
      start: Math.min(...le.map((fe) => fe[0])),
      end: Math.max(...le.map((fe) => fe.at(-1)))
    };
  }
  function Ae(Q, q) {
    const j = [], G = Math.ceil(-Q.end / 12) * 12;
    for (let ne = G; Q.start + ne <= q; ne += 12) {
      const le = Q.strings.map((Me) => Me.map((je) => je + ne).filter((je) => je >= 0 && je <= q)), fe = le.flat();
      j.push({
        strings: le,
        start: Math.min(...fe),
        end: Math.max(...fe),
        partial: Q.start + ne < 0 || Q.end + ne > q
      });
    }
    const te = j.filter((ne) => !ne.partial);
    return te.length ? te : j;
  }
  function Te(Q) {
    return re(Q).length === p;
  }
  function Le(Q, q, j) {
    const G = Te(q);
    Q.querySelector('[value="3nps"]').disabled = !G, Q.value = G ? j ?? "3nps" : "pentatonic";
  }
  function H(Q, q, j, G, te) {
    const ne = re(q).map(([le]) => le);
    return G.map((le) => {
      const fe = le - 1, Me = j === "3nps" ? Ce(Q, fe, ne) : ce(Q, fe, q.base === C), je = te === void 0 ? [Me] : Ae(Me, te);
      return { number: le, positions: je };
    });
  }
  function ie(Q, q) {
    const j = Q.getBoundingClientRect(), G = Q.querySelectorAll(q);
    let te = 1 / 0;
    G.forEach((ne) => {
      const le = ne.getBoundingClientRect();
      let fe = 0;
      le.left < j.left ? fe = le.left - j.left - 8 : le.right > j.right && (fe = le.right - j.right + 8), Math.abs(fe) < Math.abs(te) && (te = fe);
    }), Number.isFinite(te) && (Q.scrollLeft += te);
  }
  function ae(Q, q = !1) {
    const j = Q === "3nps" ? p : v.length;
    return Array.from({ length: j }, (G, te) => {
      const ne = te + 1;
      return '<label class="box-toggle" data-box="' + ne + '"><input type="checkbox" value="' + ne + '"' + (q && te === 0 ? " checked" : "") + "> Boksi " + ne + "</label>";
    }).join("");
  }
  function A(Q, q) {
    const j = re(q), G = new Map(j.map(([ne, le]) => [ne, B(Q, ne, le)])), te = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return j.flatMap(([ne, le]) => te.flatMap(({ suffix: fe, base: Me }) => {
      const je = Me.map(([$e]) => G.get((ne + $e) % 12));
      return je.every(Boolean) ? {
        root: (Q + ne) % 12,
        degree: Number(String(le).replace(/\D/g, "")),
        name: je[0] + fe,
        notes: je,
        base: Me,
        add: []
      } : [];
    }));
  }
  function Y(Q, q) {
    const j = Q.base.map(([ne]) => (Q.root + ne) % 12), G = c.map((ne) => {
      const le = [];
      for (let fe = 0; fe <= q; fe++) {
        const Me = (ne + fe) % 12;
        j.includes(Me) && le.push({ fret: fe, pitch: Me });
      }
      return le;
    }), te = [];
    for (let ne = 0; ne <= G.length - 3; ne++)
      for (const le of G[ne])
        for (const fe of G[ne + 1])
          if (le.pitch !== fe.pitch)
            for (const Me of G[ne + 2]) {
              if (Me.pitch === le.pitch || Me.pitch === fe.pitch) continue;
              const je = [le.fret, fe.fret, Me.fret], $e = Math.min(...je), Ye = Math.max(...je);
              if (Ye - $e > 3) continue;
              const Be = Array(c.length).fill(null);
              Be.splice(ne, 3, ...je), te.push({ strings: Be, low: $e, high: Ye });
            }
    return te.sort((ne, le) => ne.high - le.high || ne.low - le.low);
  }
  const J = {
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
  }, g = [
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
  function z(Q, q) {
    const j = J[Q + ":" + q];
    if (j) return { frets: j, barre: null };
    let G = null;
    return g.forEach(({ string: te, openPC: ne, shapes: le }) => {
      const fe = le[q];
      if (!fe) return;
      let Me = (Q - ne + 12) % 12;
      if (Me + Math.min(...fe.filter((Ye) => Ye !== null)) < 0 && (Me += 12), G && G.fret <= Me) return;
      const je = fe.map((Ye) => Ye === null ? null : Me + Ye), $e = Me > 0 && fe.at(-1) === 0 ? { fret: Me, from: te, to: fe.length - 1 } : null;
      G = { fret: Me, frets: je, barre: $e };
    }), G && { frets: G.frets, barre: G.barre };
  }
  function ve(Q, { frets: q, barre: j }, G) {
    const je = [...c].reverse(), $e = q.filter((be) => be > 0), Be = !$e.length || Math.max(...$e) <= 4 && (q.includes(0) || Math.min(...$e) === 1) ? 1 : Math.min(...$e), Ge = (be) => 24 + be * 14, Ue = (be) => 30 + (be - Be) * 18 + 18 / 2, yt = 102;
    let Je = '<svg class="chord-svg" viewBox="0 0 108 ' + (yt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + G + "-ote paksusta kielestä ohueen: " + q.map((be) => be ?? "x").join(" ") + '">';
    for (let be = 0; be <= 4; be++)
      Je += '<line class="' + (be === 0 && Be === 1 ? "nut" : "fret") + '" x1="' + Ge(0) + '" y1="' + (30 + be * 18) + '" x2="' + Ge(5) + '" y2="' + (30 + be * 18) + '"/>';
    return q.forEach((be, tt) => {
      Je += '<line class="string" x1="' + Ge(tt) + '" y1="30" x2="' + Ge(tt) + '" y2="' + yt + '"/>';
    }), Be > 1 && (Je += '<text class="fret-label" x="15" y="' + (Ue(Be) + 4) + '">' + Be + "</text>"), j && (Je += '<rect class="barre" x="' + (Ge(j.from) - 6.5) + '" y="' + (Ue(j.fret) - 6.5) + '" width="' + ((j.to - j.from) * 14 + 13) + '" height="13" rx="6.5"/>'), q.forEach((be, tt) => {
      if (be === null) {
        Je += '<text class="marker" x="' + Ge(tt) + '" y="22">×</text>';
        return;
      }
      const Tt = (je[tt] + be) % 12 === Q;
      if (be === 0) {
        Je += '<circle class="open' + (Tt ? " root-open" : "") + '" cx="' + Ge(tt) + '" cy="18" r="4.5"/>';
        return;
      }
      j && be === j.fret && tt >= j.from && tt <= j.to && !Tt || (Je += '<circle class="' + (Tt ? "root" : "tone") + '" cx="' + Ge(tt) + '" cy="' + Ue(be) + '" r="6.5"/>');
    }), Je + "</svg>";
  }
  function we(Q, q) {
    const j = new URLSearchParams(location.search), G = i.indexOf(j.get("toonikka")), te = j.get("asteikko");
    return {
      rootPC: G === -1 ? Q : G,
      scaleId: Object.hasOwn(L, te) ? te : q
    };
  }
  function _e(Q, q, j) {
    return Q + "?" + new URLSearchParams({ toonikka: i[q], asteikko: j });
  }
  function Ee(Q, q, j, {
    boxes: G = [],
    onlyBoxNotes: te = !1,
    automatic: ne = !0,
    focusDegree: le = "",
    grip: fe = null,
    barre: Me = null,
    label: je = i[Q] + " " + q.name,
    notes: $e = null,
    targets: Ye = !1,
    muteFret: Be = null
  } = {}) {
    const Ge = ee(j), Ue = Ge + 48, yt = Ue + 28, Je = w - 14, be = M(c.length - 1) + 14, tt = be - Je, Tt = ne ? 680 : Math.ceil(yt * 0.64), Kt = G.flatMap((Se) => Se.positions), zt = {};
    q.base.forEach(([Se, Re]) => zt[(Q + Se) % 12] = { deg: Re, added: !1 }), q.add.forEach(([Se, Re]) => zt[(Q + Se) % 12] = { deg: Re, added: !0 });
    const nn = c.map((Se, Re) => !!fe && fe[Re] === null), Gt = !!fe && Be !== null, ct = R.filter((Se, Re) => nn[Re]).reverse(), In = je + ". " + j + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (ct.length ? " Soittamatta jäävät kielet: " + ct.join(", ") + "." : "");
    let ke = '<svg viewBox="0 0 ' + yt + " " + D + '" style="min-width:' + Tt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Ye ? "group" : "img") + '" aria-label="' + In + '">';
    ke += '<rect x="' + F + '" y="' + Je + '" width="' + (O - F) + '" height="' + tt + '" rx="6" fill="#2a2338"/>', ke += '<rect x="' + O + '" y="' + Je + '" width="' + (Ge - O) + '" height="' + tt + '" fill="#231a12"/>', ke += '<rect x="' + Ge + '" y="' + Je + '" width="' + (yt - Ge - 4) + '" height="' + tt + '" rx="8" fill="#32251e"/>';
    for (let Se = 1; Se <= j; Se++)
      ke += '<line x1="' + ee(Se) + '" y1="' + Je + '" x2="' + ee(Se) + '" y2="' + be + '" stroke="#6f5b47" stroke-width="2"/>';
    ke += '<rect x="' + (O - 3) + '" y="' + Je + '" width="6" height="' + tt + '" rx="2" fill="#d8cbb6"/>', ke += '<rect x="' + (Ue - 11) + '" y="' + (Je + 3) + '" width="22" height="' + (tt - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', ke += '<rect x="' + (Ue - 4) + '" y="' + (Je + 7) + '" width="3" height="' + (tt - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Wt = (Je + be) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Se) => Se <= j).forEach((Se) => ke += '<circle cx="' + Z(Se) + '" cy="' + Wt + '" r="5.5" fill="#7a6550"/>');
    for (let Se = 12; Se <= j; Se += 12)
      ke += '<circle cx="' + Z(Se) + '" cy="' + (Wt - I) + '" r="5.5" fill="#7a6550"/>', ke += '<circle cx="' + Z(Se) + '" cy="' + (Wt + I) + '" r="5.5" fill="#7a6550"/>';
    ke += '<text x="' + V + '" y="' + (D - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', ke += '<text x="' + O + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', ke += '<text x="' + Ue + '" y="' + (D - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Se = 1; Se <= j; Se++)
      ke += '<text x="' + Z(Se) + '" y="' + (D - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Se + "</text>";
    if (G.forEach(({ number: Se, positions: Re }) => {
      Re.forEach((Pe) => {
        const We = Pe.partial ? "box-highlight box-partial" : "box-highlight";
        ke += '<g class="' + We + '" data-box="' + Se + '" aria-hidden="true">';
        const Ze = Pe.strings.find((gt) => gt.length), Qt = (Z(Ze[0]) + Z(Ze.at(-1))) / 2;
        ke += '<text class="box-number" x="' + Qt + '" y="12">' + Se + "</text>", Pe.strings.forEach((gt, bt) => {
          if (!gt.length) return;
          const hn = Z(gt[0]) - 16, pn = Z(gt.at(-1)) - Z(gt[0]) + 32;
          ke += '<rect class="box-band" x="' + hn + '" y="' + (M(bt) - 14) + '" width="' + pn + '" height="28" rx="14"/>';
        }), ke += "</g>";
      });
    }), c.forEach((Se, Re) => {
      const Pe = 1 + Re * 0.45, We = M(Re), Ze = nn[Re] && !Gt;
      Ze ? ke += '<text class="muted-mark" x="' + V + '" y="' + (We + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : nn[Re] && Be === 0 || (ke += '<line x1="' + (F + 4) + '" y1="' + We + '" x2="' + (O - 4) + '" y2="' + We + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), ke += "<g" + (Ze ? ' opacity=".35"' : "") + ">", ke += '<line x1="' + O + '" y1="' + We + '" x2="' + (Ue + 5) + '" y2="' + We + '" stroke="#b9b9c4" stroke-width="' + Pe.toFixed(2) + '"/>', ke += '<circle cx="' + (Ue + 5) + '" cy="' + We + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', ke += "</g>", ke += '<text x="13" y="' + (We + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + S[Re] + "</text>";
    }), fe && Me && Me.fret >= 1 && Me.fret <= j) {
      const Se = M(Me.from), Re = M(Me.to), Pe = Math.min(Se, Re) - 6, We = Math.max(Se, Re) + 6;
      ke += '<rect class="barre-indicator" x="' + (Z(Me.fret) - 7) + '" y="' + Pe + '" width="14" height="' + (We - Pe) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Ye && (ke += '<g class="fret-targets">', c.forEach((Se, Re) => {
      for (let Pe = 0; Pe <= j; Pe++) {
        const We = Pe ? R[Re] + "-kieli, " + Pe + ". nauha" : "vapaa " + R[Re] + "-kieli", Ze = Pe ? E : O - F - 6;
        ke += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Re + '" data-fret="' + Pe + '" data-midi="' + (Se + Pe) + '" aria-label="' + We + '" x="' + (Z(Pe) - Ze / 2) + '" y="' + (M(Re) - I / 2) + '" width="' + Ze + '" height="' + I + '" fill="transparent"/>';
      }
    }), ke += "</g>"), ($e ?? []).forEach(({ string: Se, fret: Re, label: Pe, kind: We }) => {
      ke += '<g class="octave-note octave-' + We + '">', ke += '<circle cx="' + Z(Re) + '" cy="' + M(Se) + '" r="' + N + '"/>', ke += '<text x="' + Z(Re) + '" y="' + (M(Se) + 3.5) + '" font-size="' + (Pe.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Pe + "</text>", ke += "</g>";
    }), fe && (ke += '<g class="grip-notes">'), ($e ? [] : c).forEach((Se, Re) => {
      for (let Pe = 0; Pe <= j; Pe++) {
        const We = (Se + Pe) % 12;
        if (!(We in zt) || fe && fe[Re] !== Pe || te && !Kt.some(({ strings: pn }) => {
          const Dn = pn[Re];
          return Dn.length > 0 && Pe >= Dn[0] && Pe <= Dn.at(-1);
        })) continue;
        const Ze = zt[We], Qt = Ze.deg === "1", gt = Ze.added ? "#f0a13c" : Qt ? "#4b2fd6" : "#6d4aff", bt = Ze.added ? "#1a1430" : "#fff";
        Ze.deg === le && (ke += '<circle class="focus-note" cx="' + Z(Pe) + '" cy="' + M(Re) + '" r="14.5"/>');
        const hn = fe ? ' data-string="' + (Re + 1) + '" data-fret="' + Pe + '" data-degree="' + Ze.deg + '"' : "";
        ke += "<circle" + hn + ' cx="' + Z(Pe) + '" cy="' + M(Re) + '" r="' + N + '" fill="' + gt + '" stroke="' + (Qt ? "#fff" : "#1a1430") + '" stroke-width="' + (Qt ? 2.5 : 1) + '"/>', ke += '<text x="' + Z(Pe) + '" y="' + (M(Re) + 3.5) + '" font-size="' + (Ze.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + bt + '" text-anchor="middle">' + Ze.deg + "</text>";
      }
    }), fe && (ke += "</g>"), Gt && nn.forEach((Se, Re) => {
      if (!Se) return;
      const Pe = Z(Be), We = M(Re);
      ke += '<g class="muted-mark grip-mute" data-string="' + (Re + 1) + '" data-fret="' + Be + '">', ke += '<circle cx="' + Pe + '" cy="' + We + '" r="9" fill="' + (Be === 0 ? "#2a2338" : "#231a12") + '"/>', ke += '<text x="' + Pe + '" y="' + (We + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', ke += "</g>";
    }), ke += "</svg>", ke;
  }
  return {
    CHROM: i,
    OPEN_PITCHES: c,
    PENT_MAJ: C,
    SCALES: L,
    noteName: B,
    scaleNotes: re,
    scaleTriads: A,
    triadGrips: Y,
    chordGrip: z,
    renderChordDiagram: ve,
    selectionFromURL: we,
    selectionHref: _e,
    renderBoard: Ee,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: Te,
    syncBoxSystem: Le,
    fingeringBoxes: H,
    boxOptions: ae,
    revealPositions: ie
  };
})();
globalThis.MusicMapFretboard = dp;
function ld(i) {
  return 440 * Math.pow(2, (i - 69) / 12);
}
function fp(i) {
  return 69 + 12 * Math.log2(i / 440);
}
function hp(i) {
  const s = fp(i), u = Math.round(s), c = (s - u) * 100;
  return { midi: u, cents: c };
}
const ze = globalThis.MusicMapFretboard, Ke = (i) => (i % 12 + 12) % 12, pp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], mp = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ie = (i, s = !1, u = !1) => (s ? mp : pp)[Ke(i)] + (u ? Math.floor(i / 12) - 1 : ""), ar = (i) => ze.CHROM[Ke(i)], Ki = (i, s, u) => ze.noteName(Ke(i), s, u);
function vp(i, s) {
  const u = Math.floor(i / 12) - 1;
  return s[0] === "B" && Ke(i) < 2 ? u - 1 : s[0] === "C" && Ke(i) > 9 ? u + 1 : u;
}
const fn = ["ohut E", "B", "G", "D", "A", "paksu E"], wo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Dd = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], kp = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Er = (i) => i === 0 ? "vapaa kieli" : `${i}. nauha`, va = (i, s) => ({ string: i, fret: s, midi: ze.OPEN_PITCHES[i] + s });
function si(i, s, u) {
  return [...i].sort((c, f) => c - f).flatMap((c) => Array.from({ length: Math.max(0, u - s + 1) }, (f, h) => va(c, s + h)));
}
const it = (i) => `${i.string}:${i.fret}`, wr = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, zd = (i, s) => s === "maj" ? `${ar(i)}-duurisointu` : s === "min" ? `${ar(i)}-mollisointu` : `${ar(i)}7-sointu`, Gi = [
  "priimi",
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
], od = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function bd(i, s) {
  const u = od[s] ?? od.E, c = Ke(i - u.root);
  return u.frets.flatMap((f, h) => f === null ? [] : [va(h, f + c)]);
}
const da = {
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
  hints: "off",
  activity: "play",
  advance: !0,
  reference: !0,
  minRms: 0.01,
  clarity: 0.94,
  stability: 240,
  cents: 35,
  device: ""
}, ka = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, sr = (i, s, u, c) => typeof i == "number" && Number.isFinite(i) ? Math.max(s, Math.min(u, i)) : c, Sn = (i, s, u) => s.includes(i) ? i : u;
function pa(i) {
  const s = { ...da };
  s.mode = Sn(i.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], s.mode), s.strings = Array.isArray(i.strings) ? [...new Set(i.strings.filter((u) => Number.isInteger(u) && u >= 0 && u <= 5))].sort((u, c) => u - c) : s.strings, s.strings.length || (s.strings = [...da.strings]), s.min = Math.round(sr(i.min, 0, 24, s.min)), s.max = Math.round(sr(i.max, s.min, 24, Math.max(s.min, s.max)));
  for (const u of ["accidentals", "flats", "weak", "advance", "reference"]) typeof i[u] == "boolean" && (s[u] = i[u]);
  return s.check = Sn(i.check, ["class", "pitch"], s.check), s.input = Sn(i.input, ["mic", "board"], s.input), s.rounds = [0, 10, 20].includes(i.rounds) ? i.rounds : s.rounds, s.root = Math.round(sr(i.root, 0, 11, s.root)), s.scale = typeof i.scale == "string" && Object.hasOwn(ze.SCALES, i.scale) ? i.scale : s.scale, s.box = Math.round(sr(i.box, 0, 5, s.box)), s.order = Sn(i.order, ["random", "up", "down"], s.order), s.chord = Sn(i.chord, ["maj", "min", "dom7"], s.chord), s.chordTone = Sn(i.chordTone, ["build", "random", "1", "3", "5", "7"], s.chordTone), s.chord !== "dom7" && s.chordTone === "7" && (s.chordTone = "build"), s.shape = Sn(i.shape, ["C", "A", "G", "E", "D"], s.shape), s.intervals = Array.isArray(i.intervals) ? [...new Set(i.intervals.filter((u) => Number.isInteger(u) && u >= 1 && u <= 12))].sort((u, c) => u - c) : s.intervals, s.intervals.length || (s.intervals = [...da.intervals]), s.direction = Sn(i.direction, ["up", "down", "both"], s.direction), s.hints = Sn(i.hints, ["off", "always", "fade"], s.hints), s.activity = Sn(i.activity, ["play", "degree"], s.activity), s.minRms = sr(i.minRms, 1e-3, 0.15, s.minRms), s.clarity = sr(i.clarity, 0.85, 0.99, s.clarity), s.stability = sr(i.stability, 120, 800, s.stability), s.cents = sr(i.cents, 10, 45, s.cents), s.device = typeof i.device == "string" ? i.device.slice(0, 256) : "", s;
}
function yp(i, s) {
  const u = new URLSearchParams(i), c = { ...s };
  for (const [f, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    u.has(f) && Object.assign(c, { [h]: u.get(f) });
  for (const [f, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    u.has(f) && (c[h] = Number(u.get(f)));
  u.has("kielet") && (c.strings = u.get("kielet").split(",").map((f) => Number(f) - 1)), u.has("intervallit") && (c.intervals = u.get("intervallit").split(",").map(Number));
  for (const [f, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    u.has(f) && (c[h] = u.get(f) === "1");
  if (u.has("toonikka")) {
    const f = u.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = f.charAt(0).toUpperCase() + f.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], v = Math.max(ze.CHROM.indexOf(h), p.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    v >= 0 && (c.root = v);
  }
  return pa(c);
}
function gp(i) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: i.mode,
    toonikka: ze.CHROM[i.root],
    asteikko: i.scale,
    alku: String(i.min),
    loppu: String(i.max),
    boksi: String(i.box),
    kierros: String(i.rounds),
    tarkistus: i.check,
    muoto: i.shape,
    sointu: i.chord,
    jarjestys: i.order,
    vastaus: i.input,
    vihjeet: i.hints,
    tehtava: i.activity,
    sointuaste: i.chordTone,
    suunta: i.direction,
    kielet: i.strings.map((s) => s + 1).join(","),
    intervallit: i.intervals.join(","),
    kromaattinen: i.accidentals ? "1" : "0",
    alennukset: i.flats ? "1" : "0",
    kertaus: i.weak ? "1" : "0",
    vertailu: i.reference ? "1" : "0"
  });
}
const Nr = (i) => i.mode === "ear-note" ? "note" : ["scale", "chord"].includes(i.mode) && i.activity === "degree" ? "degree" : i.input, On = (i) => i.mode === "scale" && i.order !== "random", Vd = (i) => ["note", "degree"].includes(Nr(i)) ? "class" : On(i) ? "pitch" : i.check, oa = (i) => Nr(i) === "mic", ud = "musiikin-kartta:harjoittelu", Bd = 3, oo = () => ({ version: Bd, settings: { ...da }, stats: {}, recent: [], sessions: [] }), Ud = (i) => `${i.input}:${i.check}:${i.hint ? "guided" : "solo"}:${i.item}`, dn = (i) => typeof i == "number" && Number.isFinite(i) && i >= 0;
function xp(i) {
  return !!i && ["attempts", "correct", "totalMs", "lastSeen"].every((s) => dn(i[s])) && i.correct <= i.attempts && (i.errors === void 0 || dn(i.errors)) && (i.ema === void 0 || dn(i.ema) && i.ema <= 1) && (i.emaMs === void 0 || dn(i.emaMs));
}
function jp(i) {
  return !!i && typeof i.id == "string" && dn(i.count) && dn(i.first) && i.first <= i.count && dn(i.ms) && dn(i.at) && (i.solo === void 0 || dn(i.solo) && i.solo <= i.count) && (i.soloFirst === void 0 || dn(i.soloFirst) && i.soloFirst <= (i.solo ?? i.count));
}
function cd(i) {
  if (!i) return oo();
  const s = JSON.parse(i);
  if (!s || ![1, 2, 3].includes(s.version) || !s.stats || typeof s.stats != "object" || Array.isArray(s.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(s.stats).some((p) => !xp(p))) throw new Error("Virheellisiä tilastoja");
  if (s.recent !== void 0 && (!Array.isArray(s.recent) || s.recent.some((p) => !p || typeof p.id != "string" || !dn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (s.sessions !== void 0 && (!Array.isArray(s.sessions) || s.sessions.some((p) => !jp(p)))) throw new Error("Virheellisiä kierroksia");
  const u = s.version < 3, c = pa(s.settings ?? {}), f = u && s.settings?.hints !== "always" && s.settings?.hints !== "off";
  f && (c.hints = "off");
  const h = {
    version: Bd,
    settings: c,
    stats: Object.fromEntries(Object.entries(s.stats).map(([p, v]) => [p, { ...v, errors: v.errors ?? 0 }])),
    recent: (s.recent ?? []).slice(-500),
    sessions: (s.sessions ?? []).slice(-200)
  };
  return (f || s.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const dd = 2500, Sp = 8e3, fd = 0.3, Wi = (i) => i.ema ?? i.correct / i.attempts, Qi = (i) => i.emaMs ?? i.totalMs / i.attempts;
function Eo(i) {
  if (!i?.attempts) return null;
  const s = Math.max(0, Math.min(1, 1 - (Qi(i) - dd) / (Sp - dd)));
  return Wi(i) * 0.65 + s * 0.35;
}
function wp(i) {
  return !i || i.attempts < 3 ? 3 : 0.25 + (1 - Eo(i)) * 3;
}
class hd {
  constructor(s) {
    this.storage = s;
    try {
      this.data = cd(s?.getItem(ud) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = oo();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(ud, JSON.stringify(this.data)), this.warning = "";
      } catch {
        this.warning = "Selaintallennus ei onnistu. Tämän käynnin tulokset säilyvät vain sivun aukiolon ajan. Voit ladata varmuuskopion.";
      }
  }
  settings(s) {
    this.data.settings = s, this.save();
  }
  dismissNotice() {
    delete this.data.notice, this.save();
  }
  record(s) {
    if (this.data.recent.some((p) => p.id === s.id)) return;
    const u = Ud(s), c = this.data.stats[u] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, f = Number(s.first), h = {
      attempts: c.attempts + 1,
      correct: c.correct + f,
      errors: c.errors + s.errors,
      totalMs: c.totalMs + s.ms,
      lastSeen: s.at,
      ema: c.attempts ? Wi(c) + fd * (f - Wi(c)) : f,
      emaMs: c.attempts ? Qi(c) + fd * (s.ms - Qi(c)) : s.ms
    };
    Object.defineProperty(this.data.stats, u, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, s].slice(-500), this.save();
  }
  session(s) {
    this.data.sessions = [...this.data.sessions.filter((u) => u.id !== s.id), s].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(s) {
    if (!s.trim()) throw new Error("Tyhjä tiedosto");
    const u = cd(s);
    this.data = u, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...oo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Ep = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Np = ["e", "B", "G", "D", "A", "E"];
function Hd({ string: i }) {
  return /* @__PURE__ */ l.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ l.jsxs("span", { children: [
      i + 1,
      " · ",
      /* @__PURE__ */ l.jsx("strong", { children: Np[i] })
    ] }),
    i === 0 ? /* @__PURE__ */ l.jsx("small", { children: "ohuin" }) : i === 5 ? /* @__PURE__ */ l.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Kd = (i) => ({ "--string-thickness": 1.25 + i * 0.45 + "px" }), Cp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Gd({ min: i, max: s }) {
  return /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
    /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: s - i + 1 }, (u, c) => {
      const f = i + c;
      return /* @__PURE__ */ l.jsxs("th", { scope: "col", className: f === 0 ? "open-fret" : "", children: [
        f,
        f > 0 && f % 12 === 0 ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Ep.has(f) ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, f);
    })
  ] }) });
}
function Yi({ area: i, marks: s = [], mutedStrings: u = [], disabled: c = !1, onAnswer: f, caption: h = "Otelauta" }) {
  const p = { "--cols": i.max - i.min + 1 }, { strings: v, min: S, max: R } = i, [k, C] = b.useState({ string: Math.min(...v), fret: S }), L = b.useRef(null), F = new Map(s.map((N) => [it(N), N])), O = s.map((N) => `${it(N)}${N.kind}`).join(",");
  b.useEffect(() => {
    const N = L.current, V = N?.querySelector(".target, .anchor");
    N && V && (N.scrollLeft += V.getBoundingClientRect().left - N.getBoundingClientRect().left - N.clientWidth / 2 + V.clientWidth / 2);
  }, [O]);
  const [w, E] = b.useState({ left: !1, right: !1 });
  b.useEffect(() => {
    const N = L.current;
    if (!N) return;
    const V = () => {
      const ee = N.scrollLeft > 2, Z = N.scrollLeft + N.clientWidth < N.scrollWidth - 2;
      E((M) => M.left === ee && M.right === Z ? M : { left: ee, right: Z });
    };
    V(), N.addEventListener("scroll", V, { passive: !0 });
    const D = typeof ResizeObserver > "u" ? null : new ResizeObserver(V);
    return D?.observe(N), () => {
      N.removeEventListener("scroll", V), D?.disconnect();
    };
  }, [O, S, R]);
  const I = v.includes(k.string) && k.fret >= S && k.fret <= R ? k : { string: Math.min(...v), fret: S };
  return /* @__PURE__ */ l.jsxs("div", { className: "fret-wrap" + (w.left ? " more-left" : "") + (w.right ? " more-right" : ""), children: [
    (w.left || w.right) && /* @__PURE__ */ l.jsxs("p", { className: "fret-scroll-hint", children: [
      w.left && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      w.left && w.right ? "molemmilla puolilla" : w.right ? "oikealla" : "vasemmalla",
      w.right && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { ref: L, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board", style: p, children: [
      /* @__PURE__ */ l.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ l.jsx(Gd, { min: S, max: R }),
      /* @__PURE__ */ l.jsx("tbody", { children: ze.OPEN_PITCHES.map((N, V) => /* @__PURE__ */ l.jsxs("tr", { className: v.includes(V) ? "" : "unused", style: Kd(V), children: [
        /* @__PURE__ */ l.jsxs("th", { scope: "row", "aria-label": `${V + 1}. kieli: ${fn[V]}${u.includes(V) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ l.jsx(Hd, { string: V }),
          u.includes(V) && /* @__PURE__ */ l.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        si([V], S, R).map((D) => {
          const ee = F.get(it(D)), Z = `${fn[V]}-kieli, ${Er(D.fret)}`;
          return /* @__PURE__ */ l.jsx("td", { className: `${D.fret === 0 ? "open-fret " : ""}${ee ? ee.kind === "answer" ? "target" : ee.kind : ""}`, children: /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "data-string": V,
              "data-fret": D.fret,
              tabIndex: I.string === V && I.fret === D.fret ? 0 : -1,
              onFocus: () => C(D),
              onKeyDown: (M) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(M.key)) return;
                M.preventDefault();
                const B = [...v].sort((Ae, Te) => Ae - Te), re = B.indexOf(V), ce = M.key === "ArrowUp" ? B[Math.max(0, re - 1)] : M.key === "ArrowDown" ? B[Math.min(B.length - 1, re + 1)] : V, Ce = M.key === "Home" ? S : M.key === "End" ? R : Math.max(S, Math.min(R, D.fret + (M.key === "ArrowRight" ? 1 : M.key === "ArrowLeft" ? -1 : 0)));
                M.currentTarget.closest("table")?.querySelector(`button[data-string="${ce}"][data-fret="${Ce}"]`)?.focus();
              },
              disabled: c || !v.includes(V),
              "aria-label": Z + (ee ? `, ${Cp[ee.kind]}${ee.label ? " " + ee.label : ""}` : ""),
              onClick: () => f?.(D),
              children: ee ? /* @__PURE__ */ l.jsx("span", { className: "dot", children: ee.label || "●" }) : null
            }
          ) }, D.fret);
        })
      ] }, V)) })
    ] }) })
  ] });
}
function _p({ area: i, stats: s, input: u, check: c, flats: f }) {
  const { strings: h, min: p, max: v } = i, S = `${u}:${c}:solo:notes:`;
  return /* @__PURE__ */ l.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board mastery", style: { "--cols": v - p + 1 }, children: [
    /* @__PURE__ */ l.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ l.jsx(Gd, { min: p, max: v }),
    /* @__PURE__ */ l.jsx("tbody", { children: ze.OPEN_PITCHES.map((R, k) => /* @__PURE__ */ l.jsxs("tr", { className: h.includes(k) ? "" : "unused", style: Kd(k), children: [
      /* @__PURE__ */ l.jsx("th", { scope: "row", "aria-label": `${k + 1}. kieli: ${fn[k]}`, children: /* @__PURE__ */ l.jsx(Hd, { string: k }) }),
      si([k], p, v).map((C) => {
        const L = Object.hasOwn(s, S + it(C)) ? s[S + it(C)] : void 0, F = Eo(L), O = F === null ? "unseen" : L.attempts < 3 ? "few" : F >= 0.8 ? "strong" : F >= 0.5 ? "growing" : "weak", w = `${fn[k]}-kieli, ${Er(C.fret)}, ${Ie(C.midi, f)}`, E = L ? `${Math.round(F * 100)} %, ${L.correct}/${L.attempts} heti oikein, viime aikoina ${Math.round(Wi(L) * 100)} % ja ${(Qi(L) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ l.jsxs("td", { className: `${C.fret === 0 ? "open-fret " : ""}${O}`, title: `${w}: ${E}`, children: [
          /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: F === null ? "·" : L.attempts < 3 ? "?" : Math.round(F * 100) }),
          /* @__PURE__ */ l.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            E
          ] })
        ] }, C.fret);
      })
    ] }, k)) })
  ] }) });
}
const Tp = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", ya = (i) => i.mode === "scale" ? ze.scaleNotes(ze.SCALES[i.scale]) : wr[i.mode === "caged" ? "maj" : i.chord].tones, Wd = (i) => ze.fingeringBoxes(i.root, ze.SCALES[i.scale], "pentatonic", [i.box])[0].positions[0];
function Cr(i) {
  if (i.mode === "caged") {
    const s = bd(i.root, i.shape).map((u) => u.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...s), max: Math.max(...s), fixed: "shape" };
  }
  if (i.mode === "scale" && i.box) {
    const s = Wd(i);
    return { strings: i.strings, min: s.start, max: s.end, fixed: "box" };
  }
  return { strings: i.strings, min: i.min, max: i.max, fixed: "" };
}
function Mp(i) {
  const s = Cr(i);
  return s.fixed ? { ...s, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, s.min - 1), max: Math.min(24, s.max + 1) } : s;
}
function Xi(i) {
  const s = Cr(i), u = si(s.strings, s.min, s.max);
  if (i.mode === "notes" || i.mode === "ear-note" || i.mode === "repeat")
    return u.filter((h) => i.accidentals || ![1, 3, 6, 8, 10].includes(Ke(h.midi)));
  if (i.mode === "caged") {
    const h = new Set(bd(i.root, i.shape).map(it));
    return u.filter((p) => h.has(it(p)));
  }
  if (i.mode === "interval") return u;
  const c = u.filter((h) => ya(i).some(([p]) => Ke(h.midi - i.root) === p));
  if (i.mode !== "scale" || !i.box) return c;
  const f = Wd(i);
  return c.filter((h) => {
    const p = f.strings[h.string];
    return p.length > 0 && h.fret >= p[0] && h.fret <= p.at(-1);
  });
}
function Qd(i, s) {
  return (i.direction === "both" ? ["up", "down"] : [i.direction]).flatMap((c) => i.intervals.map((f) => ({
    iv: f,
    direction: c,
    pairs: s.flatMap((h) => s.filter((p) => p.midi === h.midi + (c === "down" ? -f : f)).map((p) => ({ reference: h, target: p })))
  }))).filter((c) => c.pairs.length);
}
function Pp(i) {
  const s = ya(i);
  return i.mode !== "chord" || i.chordTone === "random" ? [] : i.chordTone === "build" ? s : s.filter(([, u]) => u.endsWith(i.chordTone));
}
function uo(i) {
  const s = Xi(i), u = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!s.length)
    return i.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${i.box ? "Valitse lisää kieliä tai toinen boksi." : u}` : i.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${u}` : i.mode !== "interval" && !i.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${u}`;
  const c = Pp(i).filter(([f]) => !s.some((h) => Ke(h.midi - i.root) === f));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, f]) => f + ". aste").join(" ja ")}. ${u}` : i.mode === "interval" && !Qd(i, s).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : On(i) && new Set(s.map((f) => f.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${u}` : null;
}
function Ap(i, s) {
  const u = [...new Map([...s].sort((c, f) => c.midi - f.midi || c.string - f.string).map((c) => [c.midi, c])).values()];
  return i.order === "down" ? u.reverse() : u;
}
function Yd(i) {
  return On(i) ? new Set(Xi(i).map((s) => s.midi)).size : i.rounds;
}
function Rp(i, s) {
  return i.hints === "always" ? 2 : i.hints === "fade" ? s <= 3 ? 2 : s <= 6 ? 1 : 0 : 0;
}
function Jr(i, s, u = Math.random) {
  if (!i.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = s.reduce((p, v) => p + v, 0), f = Math.min(0.999999999, Math.max(0, u()));
  if (!(c > 0)) return i[Math.floor(f * i.length)];
  let h = f * c;
  for (let p = 0; p < i.length; p++)
    if (h -= s[p], h < 0) return i[p];
  return i.at(-1);
}
const pd = (i, s) => i.mode === "caged" ? `caged:${i.root}:${i.shape}:${s}` : i.mode === "chord" ? `chord:${i.root}:${i.chord}:${s}:${i.activity}` : `scale:${i.root}:${i.scale}:${s}:${i.activity}`;
function Sr(i, s) {
  const u = i.filter((c) => !s(c));
  return u.length ? u : i;
}
function Lp(i, s, u = {}, c, f = Math.random) {
  const h = uo(i);
  if (h) throw new Error(h);
  const p = Vd(i), v = Nr(i), S = p === "pitch", R = (M) => i.weak ? wp(u[Ud({ input: v, check: p, hint: !1, item: M })]) : 1, k = (M) => Jr(M, M.map(() => 1), f), C = Xi(i), L = { check: p, sound: [], choices: "position" };
  if (i.mode === "notes") {
    const M = Sr(C, (ce) => !!c && it(ce) === it(c.position)), B = Jr(M, M.map((ce) => R(`notes:${it(ce)}`)), f), re = Ie(B.midi, i.flats, S);
    return {
      ...L,
      position: B,
      midi: B.midi,
      name: re,
      item: `notes:${it(B)}`,
      prompt: `Etsi ${re} ${wo[B.string]}.`
    };
  }
  if (i.mode === "ear-note") {
    const M = (Ce) => `ear-note:${Ke(Ce.midi)}${i.reference ? ":ref" : ""}`, B = Sr(C, (Ce) => !!c && Ke(Ce.midi) === Ke(c.midi)), re = Jr(B, B.map((Ce) => R(M(Ce))), f), ce = i.reference ? 57 + 12 * Math.round((re.midi - 57) / 12) : void 0;
    return {
      ...L,
      position: re,
      midi: re.midi,
      name: Ie(re.midi, i.flats),
      item: M(re),
      choices: "note",
      reference: ce,
      sound: ce === void 0 ? [re.midi] : [ce, re.midi],
      prompt: i.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (i.mode === "repeat") {
    const M = Sr(C, (re) => !!c && re.midi === c.midi), B = Jr(M, M.map((re) => R(`repeat:${re.midi}`)), f);
    return {
      ...L,
      position: B,
      midi: B.midi,
      name: Ie(B.midi, i.flats, !0),
      item: `repeat:${B.midi}`,
      sound: [B.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (i.mode === "interval") {
    const M = Sr(Qd(i, C), (ce) => c?.interval === ce.iv && c?.direction === ce.direction), B = Jr(M, M.map((ce) => R(`interval:${ce.iv}:${ce.direction}`)), f), re = k(Sr(B.pairs, (ce) => c?.reference === ce.reference.midi));
    return {
      ...L,
      position: re.target,
      midi: re.target.midi,
      name: Ie(re.target.midi, i.flats, !0),
      item: `interval:${B.iv}:${B.direction}`,
      interval: B.iv,
      direction: B.direction,
      reference: re.reference.midi,
      sound: [re.reference.midi, re.target.midi],
      prompt: `Kuulet ${B.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ie(re.reference.midi, i.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const F = ya(i);
  let O, w = 0;
  if (On(i)) {
    const M = Ap(i, C);
    w = M.length, O = M[s % M.length];
  } else {
    const M = F.filter(([ce]) => C.some((Ce) => Ke(Ce.midi - i.root) === ce)), B = i.mode === "chord" && i.chordTone !== "random" ? i.chordTone === "build" ? [F[s % F.length]] : F.filter(([, ce]) => ce.endsWith(i.chordTone)) : Sr(M, ([ce]) => c?.interval === ce), [re] = Jr(B, B.map(([ce]) => R(pd(i, ce))), f);
    O = k(Sr(C.filter((ce) => Ke(ce.midi - i.root) === re), (ce) => !!c && it(ce) === it(c.position)));
  }
  const E = Ke(O.midi - i.root), I = F.find(([M]) => M === E)[1], N = Ki(i.root, E, I), V = S ? N + vp(O.midi, N) : N, D = i.mode === "scale" ? `${ar(i.root)}-${ze.SCALES[i.scale].name}${i.box ? `, boksi ${i.box}` : ""}` : i.mode === "caged" ? `${ar(i.root)}-duurisointu, ${i.shape}-muoto` : zd(i.root, i.chord), ee = i.mode !== "caged" && i.activity === "degree", Z = ee ? `${D}: mikä aste on ${N}?` : w ? `${D} ${i.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${s % w + 1}/${w}: ${I}. aste (${V}).` : `${D}: etsi ${I}. aste${S ? ` (${V})` : ""}.`;
  return {
    ...L,
    position: O,
    midi: O.midi,
    name: V,
    item: pd(i, E),
    prompt: Z,
    degree: I,
    interval: E,
    choices: ee ? "degree" : "position"
  };
}
function co(i, s, u) {
  return Number.isInteger(s) && (u === "class" ? Ke(i) === Ke(s) : i === s);
}
function Jd(i, s, u) {
  return co(s.midi, u.midi, s.check) ? i.mode === "notes" ? u.string === s.position.string : Tp(i) ? Xi(i).some((c) => it(c) === it(u)) : !0 : !1;
}
function $p(i, s) {
  const u = Cr(i);
  return si(u.strings, u.min, u.max).filter((c) => Jd(i, s, c));
}
const wt = (i, s, u) => ({ ...i, label: s, kind: u }), Fp = (i) => i.charAt(0).toUpperCase() + i.slice(1);
function Op(i, s, u) {
  if (u <= 0) return { marks: [], text: "" };
  const c = u >= 2, f = Cr(i), h = si(f.strings, f.min, f.max), p = $p(i, s);
  if (i.mode === "notes") {
    if (c) return { marks: p.map((I) => wt(I, s.name, "answer")), text: `${s.name} on ${Dd[s.position.string]}: ${Er(s.position.fret)}.` };
    const w = h.find((I) => I.string === s.position.string), E = Ie(w.midi, i.flats);
    return {
      marks: [wt(w, E, "anchor")],
      text: `Apupiste: ${kp[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${E}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (i.mode === "ear-note")
    return c ? { marks: [wt(s.position, s.name, "answer")], text: `Sävel on ${s.name}.` } : { marks: [wt(s.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${fn[s.position.string]}-kieli, ${Er(s.position.fret)}.` };
  if (i.mode === "repeat")
    return c ? { marks: p.map((w) => wt(w, Ie(w.midi, i.flats, s.check === "pitch"), "answer")), text: `Sävel on ${s.name}.` } : { marks: [], text: `Sävel löytyy ${wo[s.position.string]}.` };
  if (i.mode === "interval") {
    const w = Ie(s.reference, i.flats, !0), E = h.filter((I) => I.midi === s.reference).map((I) => wt(I, w, "anchor"));
    return c ? {
      marks: [...E, ...p.map((I) => wt(I, Ie(I.midi, i.flats, !0), "answer"))],
      text: `${Fp(Gi[s.interval])} ${s.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${s.name}.`
    } : { marks: E, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${s.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const v = Xi(i), S = ya(i), R = (w) => S.find(([E]) => E === Ke(w.midi - i.root))?.[1] ?? "", k = Ki(i.root, s.interval, s.degree), C = v.filter((w) => Ke(w.midi - i.root) === 0), L = (w) => p.some((E) => it(E) === it(w)), F = `${s.degree}. aste on ${k}.`;
  if (i.mode === "caged")
    return c ? { marks: v.map((w) => wt(w, R(w), L(w) ? "answer" : "shape")), text: F } : { marks: v.map((w) => wt(w, "", "shape")), text: `${i.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${s.degree}. aste?` };
  const O = i.mode === "scale" ? "asteikon" : "soinnun";
  if (s.choices === "degree") {
    const w = v.filter((E) => Ke(E.midi) === Ke(s.midi));
    return c ? { marks: [...(s.interval === 0 ? [] : C).map((E) => wt(E, "1", "anchor")), ...w.map((E) => wt(E, s.degree, "answer"))], text: `${k} on ${s.degree}. aste.` } : s.interval === 0 ? { marks: w.map((E) => wt(E, k, "shape")), text: `Katso ${O} nimeä: mikä on sen perussävel?` } : {
      marks: [...C.map((E) => wt(E, "1", "anchor")), ...w.map((E) => wt(E, k, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${k} kohdalle.`
    };
  }
  return c ? { marks: [...C.filter((w) => !L(w)).map((w) => wt(w, "1", "anchor")), ...p.map((w) => wt(w, s.degree, "answer"))], text: F } : s.interval === 0 ? { marks: [], text: `1. aste on ${O} perussävel ${ar(i.root)}.` } : { marks: C.map((w) => wt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${s.degree}. aste on ${s.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Ip {
  constructor(s, u, c, f = () => performance.now(), h = Math.random) {
    this.settings = s, this.stats = u, this.record = c, this.now = f, this.random = h, this.total = Yd(s);
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
  started = 0;
  /** 0 = ei vihjettä, 1 = apupiste, 2 = vastaus. Arvo ei laske kysymyksen aikana. */
  hintLevel = 0;
  /** Mikrofonin vakaat, tehtävästä eriävät havainnot tässä kysymyksessä. */
  mismatches = 0;
  /** Kierroksen pituus; 0 = vapaa harjoittelu. */
  total;
  pendingMismatch = !1;
  pausedAt = 0;
  prior = "active";
  id = globalThis.crypto?.randomUUID?.() ?? String(Date.now()) + Math.random();
  get isLast() {
    return this.total > 0 && this.index >= this.total;
  }
  /** Onko nykyiseen kysymykseen jo vastattu oikein (myös tauolla palautteen aikana). */
  get answered() {
    return this.index > 0 && this.results.at(-1)?.id === `${this.id}:${this.index}`;
  }
  start() {
    this.phase === "idle" && this.next();
  }
  next() {
    if (["idle", "feedback"].includes(this.phase)) {
      if (this.isLast) {
        this.phase = "done";
        return;
      }
      this.question = Lp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Rp(this.settings, this.index), this.started = this.now(), this.phase = "active";
    }
  }
  pause() {
    ["active", "feedback"].includes(this.phase) && (this.prior = this.phase, this.pausedAt = this.now(), this.phase = "paused");
  }
  resume() {
    this.phase === "paused" && (this.started += this.now() - this.pausedAt, this.phase = this.prior);
  }
  /** Vihjeen käyttö jää voimaan, vaikka vihje piilotettaisiin näkyvistä. */
  useHint(s) {
    this.phase === "active" && (this.hintLevel = Math.max(this.hintLevel, Math.min(2, Math.round(s))));
  }
  /** heldMs: kuinka kauan mikrofonin sävel oli soinut ennen hyväksymistä. Se ei kuulu vastausaikaan. */
  answer(s, u, c, f = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const h = this.question;
    if (!(u === "degree" ? s === h.interval : u === "note" ? co(h.midi, s, "class") : u === "board" ? !!c && Jd(this.settings, h, c) : co(h.midi, s, h.check)))
      return u === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const v = u === "board" ? c : void 0, S = {
      id: `${this.id}:${this.index}`,
      item: v && this.settings.mode === "notes" ? `notes:${it(v)}` : h.item,
      mode: this.settings.mode,
      input: u,
      check: h.check,
      expected: h.midi,
      played: s,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, f)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return v ? S.position = it(v) : this.settings.mode === "notes" && (S.position = it(h.position)), this.results.push(S), this.record(S), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function fo(i) {
  const s = i.filter((u) => !u.hint);
  return {
    count: i.length,
    first: i.filter((u) => u.first).length,
    solo: s.length,
    soloFirst: s.filter((u) => u.first).length,
    guided: i.length - s.length,
    ms: i.reduce((u, c) => u + c.ms, 0)
  };
}
const ho = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], qr = (i) => ho.find(([s]) => s === i)?.[1] ?? i;
function Rt({ label: i, children: s }) {
  const u = b.useId();
  return /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ l.jsx("label", { htmlFor: u, children: i }),
    b.cloneElement(s, { id: u })
  ] });
}
function md({ legend: i, name: s, value: u, options: c, onChange: f, disabled: h }) {
  return /* @__PURE__ */ l.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ l.jsx("legend", { children: i }),
    /* @__PURE__ */ l.jsx("div", { className: "choice-row", children: c.map((p) => /* @__PURE__ */ l.jsxs("label", { className: p.value === u ? "selected" : "", children: [
      /* @__PURE__ */ l.jsx("input", { type: "radio", name: s, value: p.value, checked: p.value === u, onChange: () => f(p.value) }),
      /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("strong", { children: p.title }),
        /* @__PURE__ */ l.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function vd(i) {
  const s = Cr(i), u = Yd(i), c = Nr(i), f = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = s.fixed === "shape" ? `${i.shape}-muoto, nauhat ${s.min}–${s.max}` : s.fixed === "box" ? `boksi ${i.box}, nauhat ${s.min}–${s.max}` : `nauhat ${s.min}–${s.max}`, p = s.strings.length === 6 ? "" : ` · kielet ${s.strings.map((v) => v + 1).join(", ")}`;
  return `${ka[i.hints].title} · ${f} · ${On(i) ? `yksi läpisoitto, ${u} säveltä` : u ? `${u} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function kd({ s: i, change: s, locked: u, problem: c }) {
  const f = b.useId(), h = (k, C) => s({ ...i, [k]: C }), p = Cr(i), v = Nr(i) === "note" || Nr(i) === "degree", S = ["scale", "chord", "caged"].includes(i.mode), R = ["notes", "ear-note", "repeat"].includes(i.mode);
  return /* @__PURE__ */ l.jsxs("fieldset", { className: "settings", disabled: u, children: [
    /* @__PURE__ */ l.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx(Rt, { label: "Harjoitus", children: /* @__PURE__ */ l.jsx("select", { value: i.mode, onChange: (k) => h("mode", k.target.value), children: ho.map(([k, C]) => /* @__PURE__ */ l.jsx("option", { value: k, children: C }, k)) }) }),
      /* @__PURE__ */ l.jsx("p", { className: "mode-note", children: ho.find(([k]) => k === i.mode)[2] })
    ] }),
    S && /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx(Rt, { label: i.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ l.jsx("select", { value: i.root, onChange: (k) => h("root", Number(k.target.value)), children: ze.CHROM.map((k, C) => /* @__PURE__ */ l.jsx("option", { value: C, children: k }, k)) }) }),
      i.mode === "scale" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Rt, { label: "Asteikko", children: /* @__PURE__ */ l.jsx("select", { value: i.scale, onChange: (k) => h("scale", k.target.value), children: Object.entries(ze.SCALES).map(([k, C]) => /* @__PURE__ */ l.jsx("option", { value: k, children: C.name }, k)) }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ l.jsxs("select", { value: i.box, onChange: (k) => h("box", Number(k.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((k) => /* @__PURE__ */ l.jsxs("option", { value: k, children: [
            "Boksi ",
            k
          ] }, k))
        ] }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Sävelten järjestys", children: /* @__PURE__ */ l.jsxs("select", { value: i.order, onChange: (k) => h("order", k.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ l.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ l.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      i.mode === "chord" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Rt, { label: "Sointutyyppi", children: /* @__PURE__ */ l.jsx("select", { value: i.chord, onChange: (k) => h("chord", k.target.value), children: Object.entries(wr).map(([k, C]) => /* @__PURE__ */ l.jsx("option", { value: k, children: C.name }, k)) }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ l.jsxs("select", { value: i.chordTone, onChange: (k) => h("chordTone", k.target.value), children: [
          /* @__PURE__ */ l.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            i.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ l.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ l.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ l.jsxs("option", { value: "3", children: [
            "Terssi · ",
            i.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ l.jsx("option", { value: "5", children: "Kvintti · 5" }),
          i.chord === "dom7" && /* @__PURE__ */ l.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      i.mode === "caged" ? /* @__PURE__ */ l.jsx(Rt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ l.jsx("select", { value: i.shape, onChange: (k) => h("shape", k.target.value), children: ["C", "A", "G", "E", "D"].map((k) => /* @__PURE__ */ l.jsxs("option", { value: k, children: [
        k,
        "-muoto"
      ] }, k)) }) }) : /* @__PURE__ */ l.jsx(Rt, { label: "Tehtävä", children: /* @__PURE__ */ l.jsxs("select", { value: i.activity, onChange: (k) => h("activity", k.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ l.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    i.mode === "interval" && /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ l.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ l.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => /* @__PURE__ */ l.jsxs("label", { children: [
        /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.intervals.includes(k), onChange: (C) => h("intervals", C.target.checked ? [...i.intervals, k] : i.intervals.filter((L) => L !== k)) }),
        Gi[k]
      ] }, k)) }),
      /* @__PURE__ */ l.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ l.jsx(Rt, { label: "Intervallin suunta", children: /* @__PURE__ */ l.jsxs("select", { value: i.direction, onChange: (k) => h("direction", k.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ l.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ l.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ l.jsx(
      md,
      {
        legend: "Harjoittelutapa",
        name: `${f}-way`,
        value: i.hints,
        onChange: (k) => h("hints", k),
        options: ["off", "always", "fade"].map((k) => ({ value: k, ...ka[k] }))
      }
    ),
    v ? /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ l.jsx(md, { legend: "Vastaustapa", name: `${f}-input`, value: i.input, onChange: (k) => h("input", k), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ l.jsx(Rt, { label: "Kierroksen pituus", children: /* @__PURE__ */ l.jsxs("select", { value: i.rounds, disabled: On(i), onChange: (k) => h("rounds", Number(k.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !v && /* @__PURE__ */ l.jsx(Rt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ l.jsxs("select", { value: On(i) ? "pitch" : i.check, disabled: On(i), onChange: (k) => h("check", k.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ l.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ l.jsxs("select", { value: String(i.flats), onChange: (k) => h("flats", k.target.value === "true"), children: [
          /* @__PURE__ */ l.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ l.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      On(i) && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ l.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${i.shape}-muoto` : `Boksi ${i.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((k) => /* @__PURE__ */ l.jsxs("button", { type: "button", "aria-pressed": i.min === 0 && i.max === k, onClick: () => s({ ...i, min: 0, max: k }), children: [
          "Nauhat 0–",
          k,
          k === 24 ? " · koko otelauta" : ""
        ] }, k)) }),
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsx(Rt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: "0", max: "24", value: i.min, onChange: (k) => h("min", Number(k.target.value)) }) }),
          /* @__PURE__ */ l.jsx(Rt, { label: "Viimeinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: i.min, max: "24", value: i.max, onChange: (k) => h("max", Number(k.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ l.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ l.jsx("div", { className: "check-row", children: fn.map((k, C) => /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.strings.includes(C), onChange: (L) => h("strings", L.target.checked ? [...i.strings, C] : i.strings.filter((F) => F !== C)) }),
          C + 1,
          " · ",
          k
        ] }, k)) })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "check-row", children: [
        R && /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.accidentals, onChange: (k) => h("accidentals", k.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        i.mode === "ear-note" && /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.reference, onChange: (k) => h("reference", k.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.weak, onChange: (k) => h("weak", k.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.advance, onChange: (k) => h("advance", k.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const Dp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Opi asteikko yksi positio kerrallaan ja käytä sitä sooloilussa.", example: "Aloita: A-mollipentatoninen, positio 1" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function zp({ onSelect: i }) {
  return /* @__PURE__ */ l.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ l.jsx("div", { className: "learning-grid", children: Dp.map((s) => /* @__PURE__ */ l.jsxs("button", { type: "button", className: "learning-card", onClick: () => i(s.id), children: [
      /* @__PURE__ */ l.jsx("span", { className: "learning-number", "aria-hidden": "true", children: s.number }),
      /* @__PURE__ */ l.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ l.jsx("strong", { children: s.title }),
        /* @__PURE__ */ l.jsx("span", { children: s.description }),
        /* @__PURE__ */ l.jsx("small", { children: s.example })
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, s.id)) })
  ] });
}
const bp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, po = 100, Xd = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function No(i) {
  if (i === null || i.trim() === "") return po;
  const s = Number(i);
  return Number.isFinite(s) ? Math.round(Math.min(100, Math.max(0, s))) : po;
}
function Vp() {
  try {
    return No(localStorage.getItem(Xd));
  } catch {
    return po;
  }
}
function Bp(i) {
  try {
    localStorage.setItem(Xd, String(No(String(i))));
  } catch {
  }
}
function yd(i, s, u = !0) {
  return u ? bp[i] * No(String(s)) / 100 : 0;
}
function Up(i = () => new Audio()) {
  try {
    const s = i();
    return s.volume = 0.5, Math.abs(s.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Hp = 0.12, Kp = 2e3, Gp = 3;
function Wp(i, s = !1) {
  return s ? !0 : i.atLoopBoundary || i.drift <= Hp || i.seeking || i.readyState < Gp ? !1 : i.msSinceLastFix >= Kp;
}
const Qp = 1.5;
class Zd {
  constructor(s = 0) {
    this.latency = s;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(s, u, c = !1, f = performance.now()) {
    if (u.readyState < 1 || s.readyState < 1 || !c && (u.paused || s.paused)) return !1;
    const h = u.currentTime - s.currentTime, p = Math.abs(h), v = s.loop && Number.isFinite(s.duration) && Math.abs(p - s.duration) < 0.35, S = this.lastFix.get(u);
    if (!Wp({
      drift: p,
      atLoopBoundary: v,
      seeking: u.seeking,
      readyState: u.readyState,
      msSinceLastFix: S === void 0 ? 1 / 0 : f - S
    }, c)) return !1;
    const R = !s.paused;
    !c && R && S !== void 0 && (this.latency = Math.min(Qp, Math.max(0, this.latency - h)));
    let k = s.currentTime + (R ? this.latency : 0);
    Number.isFinite(u.duration) && (k = Math.min(k, Math.max(0, u.duration - 0.05)));
    try {
      u.currentTime = k;
    } catch {
      return !1;
    }
    return R ? this.lastFix.set(u, f) : this.lastFix.delete(u), !0;
  }
}
const Yp = () => {
  const i = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!i) throw new Error("Web Audio API puuttuu");
  return new i();
};
class Jp {
  constructor(s = Yp) {
    this.create = s;
  }
  create;
  context = null;
  gains = /* @__PURE__ */ new WeakMap();
  /** Kutsutaan käyttäjän painalluksesta ennen play()-kutsuja. */
  unlock() {
    try {
      return (!this.context || this.context.state === "closed") && (this.context = this.create(), this.gains = /* @__PURE__ */ new WeakMap()), this.context.state !== "running" && this.context.resume().catch(() => {
      }), !0;
    } catch {
      return !1;
    }
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(s) {
    if (this.gains.has(s)) return !0;
    if (!this.context) return !1;
    try {
      const u = this.context.createMediaElementSource(s), c = this.context.createGain();
      return u.connect(c), c.connect(this.context.destination), this.gains.set(s, c), !0;
    } catch {
      return !1;
    }
  }
  routed(s) {
    return !!s && this.gains.has(s);
  }
  setLevel(s, u) {
    const c = this.gains.get(s);
    c && (c.gain.value = u);
  }
  close() {
    const s = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), s?.close().catch(() => {
    });
  }
}
const Xp = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Zp = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function gd(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const s = Math.floor(i);
  return String(Math.floor(s / 60)) + ":" + String(s % 60).padStart(2, "0");
}
function qp() {
  const i = b.useRef(null), s = b.useRef(null), [u, c] = b.useState(!1), [f, h] = b.useState(!1), [p, v] = b.useState(!1), [S, R] = b.useState(0), [k, C] = b.useState(0), [L, F] = b.useState(""), O = b.useRef(new Zd());
  function w(D = !1) {
    const ee = i.current, Z = s.current;
    !ee || !Z || !Number.isFinite(ee.currentTime) || O.current.align(ee, Z, D);
  }
  function E() {
    i.current?.pause(), s.current?.pause(), c(!1);
  }
  async function I() {
    const D = i.current, ee = s.current;
    if (!(!D || !ee)) {
      if (u) {
        E();
        return;
      }
      F(""), ee.muted = !f, ee.volume = 0.55, D.volume = 0.75, w(!0);
      try {
        await Promise.all(f ? [D.play(), ee.play()] : [D.play()]), w(), c(!0);
      } catch {
        E(), F("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function N(D) {
    const ee = i.current, Z = s.current;
    if (!(!ee || !Z || !Number.isFinite(D))) {
      ee.currentTime = D;
      try {
        Z.currentTime = D;
      } catch {
      }
      R(D);
    }
  }
  function V(D) {
    const ee = i.current, Z = s.current;
    if (h(D), !!Z) {
      if (Z.muted = !D, !D) {
        Z.pause();
        return;
      }
      !ee || !u || (w(!0), Z.play().catch(() => F("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return b.useEffect(() => {
    const D = () => {
      document.hidden && (i.current?.pause(), s.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", D), () => {
      document.removeEventListener("visibilitychange", D), i.current?.pause(), s.current?.pause();
    };
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "backing-track-mixer", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "backing-track-heading", children: [
      /* @__PURE__ */ l.jsx("strong", { children: "Am-harjoitustausta" }),
      /* @__PURE__ */ l.jsxs("div", { className: "backing-track-toggles", children: [
        /* @__PURE__ */ l.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: f,
              onChange: (D) => V(D.target.checked)
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: "Kitara kuuluu" })
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: p,
              onChange: (D) => v(D.target.checked)
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ l.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        I();
      }, children: u ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: k > 0 ? k : 1,
          step: 0.1,
          value: Math.min(S, k > 0 ? k : 1),
          disabled: !k,
          onChange: (D) => N(Number(D.target.value))
        }
      ),
      /* @__PURE__ */ l.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        gd(S),
        " / ",
        gd(k)
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: i,
        preload: "metadata",
        src: Xp,
        loop: p,
        onLoadedMetadata: (D) => C(D.currentTarget.duration),
        onTimeUpdate: (D) => {
          R(D.currentTarget.currentTime), D.currentTarget.paused || w();
        },
        onEnded: () => {
          i.current?.loop || (s.current?.pause(), c(!1), R(k));
        },
        onPause: () => {
          s.current?.pause(), c(!1);
        },
        onError: () => F("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: Zp,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const D = i.current, ee = s.current;
          D?.duration && ee?.duration && Math.abs(D.duration - ee.duration) > 0.15 && F("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => F("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    L && /* @__PURE__ */ l.jsx("p", { className: "backing-error", role: "alert", children: L }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const em = 4e3;
class xd extends Error {
  name = "MicSetupError";
}
async function tm(i, s) {
  if (!navigator.mediaDevices?.getUserMedia) throw new xd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const u = {
    audio: {
      deviceId: i ? { exact: i } : void 0,
      // Selaimen puheenkäsittely vääristäisi kitaran sävelkorkeuden ja vaimentaisi soivan sävelen.
      echoCancellation: !1,
      noiseSuppression: !1,
      autoGainControl: !1,
      // Äänikortin soitintulo voi olla toinen kanava; mono-pyyntö summaisi kanavat puoleen tasoon.
      channelCount: { ideal: 2 }
    },
    video: !1
  }, c = await navigator.mediaDevices.getUserMedia(u);
  let f;
  try {
    if (f = s ? s() : new AudioContext(), f.state !== "running") {
      let R;
      await Promise.race([
        f.resume(),
        new Promise((k, C) => {
          R = setTimeout(() => C(new xd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), em);
        })
      ]).finally(() => clearTimeout(R));
    }
    const h = f.createMediaStreamSource(c), p = f, v = c.getAudioTracks?.()[0] ?? c.getTracks()[0], S = v?.getSettings?.() ?? {};
    return {
      context: f,
      source: h,
      stream: c,
      label: v?.label ?? "",
      deviceId: S.deviceId ?? "",
      channelCount: S.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((R) => R.stop()), h.disconnect(), s || p.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((p) => p.stop()), s || await f?.close().catch(() => {
    }), h;
  }
}
async function nm() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((s) => s.kind === "audioinput" && s.deviceId) : [];
}
var io, jd;
function rm() {
  if (jd) return io;
  jd = 1;
  function i(s) {
    if (this.size = s | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = s << 1;
    for (var u = new Array(this.size * 2), c = 0; c < u.length; c += 2) {
      const R = Math.PI * c / this.size;
      u[c] = Math.cos(R), u[c + 1] = -Math.sin(R);
    }
    this.table = u;
    for (var f = 0, h = 1; this.size > h; h <<= 1)
      f++;
    this._width = f % 2 === 0 ? f - 1 : f, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var v = 0; v < this._width; v += 2) {
        var S = this._width - v - 2;
        this._bitrev[p] |= (p >>> v & 3) << S;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return io = i, i.prototype.fromComplexArray = function(u, c) {
    for (var f = c || new Array(u.length >>> 1), h = 0; h < u.length; h += 2)
      f[h >>> 1] = u[h];
    return f;
  }, i.prototype.createComplexArray = function() {
    const u = new Array(this._csize);
    for (var c = 0; c < u.length; c++)
      u[c] = 0;
    return u;
  }, i.prototype.toComplexArray = function(u, c) {
    for (var f = c || this.createComplexArray(), h = 0; h < f.length; h += 2)
      f[h] = u[h >>> 1], f[h + 1] = 0;
    return f;
  }, i.prototype.completeSpectrum = function(u) {
    for (var c = this._csize, f = c >>> 1, h = 2; h < f; h += 2)
      u[c - h] = u[h], u[c - h + 1] = -u[h + 1];
  }, i.prototype.transform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, i.prototype.realTransform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, i.prototype.inverseTransform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 1, this._transform4();
    for (var f = 0; f < u.length; f++)
      u[f] /= this.size;
    this._out = null, this._data = null;
  }, i.prototype._transform4 = function() {
    var u = this._out, c = this._csize, f = this._width, h = 1 << f, p = c / h << 1, v, S, R = this._bitrev;
    if (p === 4)
      for (v = 0, S = 0; v < c; v += p, S++) {
        const E = R[S];
        this._singleTransform2(v, E, h);
      }
    else
      for (v = 0, S = 0; v < c; v += p, S++) {
        const E = R[S];
        this._singleTransform4(v, E, h);
      }
    var k = this._inv ? -1 : 1, C = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var L = p >>> 2;
      for (v = 0; v < c; v += p)
        for (var F = v + L, O = v, w = 0; O < F; O += 2, w += h) {
          const E = O, I = E + L, N = I + L, V = N + L, D = u[E], ee = u[E + 1], Z = u[I], M = u[I + 1], B = u[N], re = u[N + 1], ce = u[V], Ce = u[V + 1], Ae = D, Te = ee, Le = C[w], H = k * C[w + 1], ie = Z * Le - M * H, ae = Z * H + M * Le, A = C[2 * w], Y = k * C[2 * w + 1], J = B * A - re * Y, g = B * Y + re * A, z = C[3 * w], ve = k * C[3 * w + 1], we = ce * z - Ce * ve, _e = ce * ve + Ce * z, Ee = Ae + J, Q = Te + g, q = Ae - J, j = Te - g, G = ie + we, te = ae + _e, ne = k * (ie - we), le = k * (ae - _e), fe = Ee + G, Me = Q + te, je = Ee - G, $e = Q - te, Ye = q + le, Be = j - ne, Ge = q - le, Ue = j + ne;
          u[E] = fe, u[E + 1] = Me, u[I] = Ye, u[I + 1] = Be, u[N] = je, u[N + 1] = $e, u[V] = Ge, u[V + 1] = Ue;
        }
    }
  }, i.prototype._singleTransform2 = function(u, c, f) {
    const h = this._out, p = this._data, v = p[c], S = p[c + 1], R = p[c + f], k = p[c + f + 1], C = v + R, L = S + k, F = v - R, O = S - k;
    h[u] = C, h[u + 1] = L, h[u + 2] = F, h[u + 3] = O;
  }, i.prototype._singleTransform4 = function(u, c, f) {
    const h = this._out, p = this._data, v = this._inv ? -1 : 1, S = f * 2, R = f * 3, k = p[c], C = p[c + 1], L = p[c + f], F = p[c + f + 1], O = p[c + S], w = p[c + S + 1], E = p[c + R], I = p[c + R + 1], N = k + O, V = C + w, D = k - O, ee = C - w, Z = L + E, M = F + I, B = v * (L - E), re = v * (F - I), ce = N + Z, Ce = V + M, Ae = D + re, Te = ee - B, Le = N - Z, H = V - M, ie = D - re, ae = ee + B;
    h[u] = ce, h[u + 1] = Ce, h[u + 2] = Ae, h[u + 3] = Te, h[u + 4] = Le, h[u + 5] = H, h[u + 6] = ie, h[u + 7] = ae;
  }, i.prototype._realTransform4 = function() {
    var u = this._out, c = this._csize, f = this._width, h = 1 << f, p = c / h << 1, v, S, R = this._bitrev;
    if (p === 4)
      for (v = 0, S = 0; v < c; v += p, S++) {
        const Se = R[S];
        this._singleRealTransform2(v, Se >>> 1, h >>> 1);
      }
    else
      for (v = 0, S = 0; v < c; v += p, S++) {
        const Se = R[S];
        this._singleRealTransform4(v, Se >>> 1, h >>> 1);
      }
    var k = this._inv ? -1 : 1, C = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var L = p >>> 1, F = L >>> 1, O = F >>> 1;
      for (v = 0; v < c; v += p)
        for (var w = 0, E = 0; w <= O; w += 2, E += h) {
          var I = v + w, N = I + F, V = N + F, D = V + F, ee = u[I], Z = u[I + 1], M = u[N], B = u[N + 1], re = u[V], ce = u[V + 1], Ce = u[D], Ae = u[D + 1], Te = ee, Le = Z, H = C[E], ie = k * C[E + 1], ae = M * H - B * ie, A = M * ie + B * H, Y = C[2 * E], J = k * C[2 * E + 1], g = re * Y - ce * J, z = re * J + ce * Y, ve = C[3 * E], we = k * C[3 * E + 1], _e = Ce * ve - Ae * we, Ee = Ce * we + Ae * ve, Q = Te + g, q = Le + z, j = Te - g, G = Le - z, te = ae + _e, ne = A + Ee, le = k * (ae - _e), fe = k * (A - Ee), Me = Q + te, je = q + ne, $e = j + fe, Ye = G - le;
          if (u[I] = Me, u[I + 1] = je, u[N] = $e, u[N + 1] = Ye, w === 0) {
            var Be = Q - te, Ge = q - ne;
            u[V] = Be, u[V + 1] = Ge;
            continue;
          }
          if (w !== O) {
            var Ue = j, yt = -G, Je = Q, be = -q, tt = -k * fe, Tt = -k * le, Kt = -k * ne, zt = -k * te, nn = Ue + tt, Gt = yt + Tt, ct = Je + zt, In = be - Kt, ke = v + F - w, Wt = v + L - w;
            u[ke] = nn, u[ke + 1] = Gt, u[Wt] = ct, u[Wt + 1] = In;
          }
        }
    }
  }, i.prototype._singleRealTransform2 = function(u, c, f) {
    const h = this._out, p = this._data, v = p[c], S = p[c + f], R = v + S, k = v - S;
    h[u] = R, h[u + 1] = 0, h[u + 2] = k, h[u + 3] = 0;
  }, i.prototype._singleRealTransform4 = function(u, c, f) {
    const h = this._out, p = this._data, v = this._inv ? -1 : 1, S = f * 2, R = f * 3, k = p[c], C = p[c + f], L = p[c + S], F = p[c + R], O = k + L, w = k - L, E = C + F, I = v * (C - F), N = O + E, V = w, D = -I, ee = O - E, Z = w, M = I;
    h[u] = N, h[u + 1] = 0, h[u + 2] = V, h[u + 3] = D, h[u + 4] = ee, h[u + 5] = 0, h[u + 6] = Z, h[u + 7] = M;
  }, io;
}
var im = rm();
const sm = /* @__PURE__ */ tp(im);
class Ui {
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
    return new Ui(
      s,
      (u) => new Float32Array(u)
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
    return new Ui(
      s,
      (u) => new Float64Array(u)
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
    return new Ui(s, (u) => Array(u));
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
  constructor(s, u) {
    if (s < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = s, this._fft = new sm(om(2 * s)), this._bufferSupplier = u, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(s, u = this._bufferSupplier(s.length)) {
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
      u[f] = this._inverseBuffer[2 * f];
    return u;
  }
}
function am(i) {
  const s = [];
  let u = !1, c = -1 / 0, f = -1;
  for (let h = 1; h < i.length - 1; h++)
    i[h - 1] <= 0 && i[h] > 0 ? (u = !0, f = h, c = i[h]) : i[h - 1] > 0 && i[h] <= 0 ? (u = !1, f !== -1 && s.push(f)) : u && i[h] > c && (c = i[h], f = h);
  return s;
}
function lm(i, s) {
  const [u, c, f] = [i - 1, i, i + 1], [h, p, v] = [s[u], s[c], s[f]], S = h / 2 - p + v / 2, R = -(h / 2) * (c + f) + p * (u + f) - v / 2 * (u + c), k = h * c * f / 2 - p * u * f + v * u * c / 2, C = -R / (2 * S), L = S * C * C + R * C + k;
  return [C, L];
}
class Hi {
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
    return new Hi(s, (u) => new Float32Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(s) {
    return new Hi(s, (u) => new Float64Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(s) {
    return new Hi(s, (u) => Array(u));
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
  constructor(s, u) {
    this._autocorrelator = new Ui(s, u), this._nsdfBuffer = u(s);
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
  findPitch(s, u) {
    if (this._belowMinimumVolume(s)) return [0, 0];
    this._nsdf(s);
    const c = am(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const f = Math.max(...c.map((S) => this._nsdfBuffer[S])), h = c.find(
      (S) => this._nsdfBuffer[S] >= this._clarityThreshold * f
    ), [p, v] = lm(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [u / p, Math.min(v, 1)];
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
    let u = 0;
    for (let c = 0; c < s.length; c++)
      u += s[c] ** 2;
    return Math.sqrt(u / s.length) < this._minVolumeAbsolute;
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
    let u = 2 * this._nsdfBuffer[0], c;
    for (c = 0; c < this._nsdfBuffer.length && u > 0; c++)
      this._nsdfBuffer[c] = 2 * this._nsdfBuffer[c] / u, u -= s[c] ** 2 + s[s.length - c - 1] ** 2;
    for (; c < this._nsdfBuffer.length; c++)
      this._nsdfBuffer[c] = 0;
  }
}
function om(i) {
  return i--, i |= i >> 1, i |= i >> 2, i |= i >> 4, i |= i >> 8, i |= i >> 16, i++, i;
}
function um(i) {
  const s = i * 0.17;
  let u = 2048;
  for (; u < s && u < 32768; ) u *= 2;
  return u;
}
const cm = 0.05, dm = 1.5;
class fm {
  constructor(s, u = {}) {
    this.mic = s, this.opts = u;
    const c = s.context, f = um(c.sampleRate), h = Math.max(1, Math.min(2, s.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), s.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const v = c.createAnalyser();
      v.fftSize = f, v.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(v, p) : s.source.connect(v), this.analysers.push(v), this.buffers.push(new Float32Array(new ArrayBuffer(f * 4)));
    }
    this.shortLength = Math.min(f, Math.max(256, Math.round(c.sampleRate * cm))), this.detector = Hi.forFloat32Array(f), this.detector.minVolumeDecibels = -60;
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
  gate = new hm();
  onset = new pm();
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
      minClarity: u = 0.9,
      minRms: c = 0.01,
      stabilityMs: f = 240,
      centsTolerance: h = 35,
      minFreq: p = 70,
      maxFreq: v = 1450,
      onFrame: S,
      onStableNote: R
    } = this.opts, k = this.analysers.map((M, B) => (M.getFloatTimeDomainData(this.buffers[B]), Sd(this.buffers[B], this.buffers[B].length - this.shortLength))), C = k.indexOf(Math.max(...k));
    C !== this.channel && k[C] > (k[this.channel] ?? 0) * dm && (this.channel = C);
    const L = this.buffers[this.channel], F = k[this.channel], O = mm(L, L.length - this.shortLength), w = { rms: F, peak: O, channel: this.channel, levels: k }, E = F < c, I = this.onset.feed(F, s, c);
    if (E && Sd(L, 0) < c) {
      this.gate.feed(null, s, f, !0, !1), S?.({ ...w, status: "silent" });
      return;
    }
    const [N, V] = this.detector.findPitch(L, this.mic.context.sampleRate);
    if (!isFinite(N) || V < u) {
      this.gate.feed(null, s, f, E, I), S?.({ ...w, status: E ? "silent" : "unclear", clarity: isFinite(V) ? V : 0 });
      return;
    }
    if (N < p || N > v) {
      this.gate.feed(null, s, f, E, I), S?.({ ...w, status: "out-of-range", frequency: N, clarity: V });
      return;
    }
    const { midi: D, cents: ee } = hp(N);
    if (Math.abs(ee) > h) {
      this.gate.feed(null, s, f, E, I), S?.({ ...w, status: "off-pitch", frequency: N, clarity: V, midi: D, cents: ee });
      return;
    }
    S?.({ ...w, status: "pitch", frequency: N, clarity: V, midi: D, cents: ee });
    const Z = this.gate.feed(D, s, f, E, I);
    Z !== null && R?.({ midi: D, frequency: N, cents: ee, clarity: V, timestamp: s, heldMs: Z.heldMs });
  }
}
class hm {
  constructor(s = 120, u = 80) {
    this.releaseMs = s, this.gapMs = u;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(s, u, c, f, h) {
    if (f ? (this.quietSince ??= u, u - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), s === null)
      return this.current && u - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== s) && (this.current = { midi: s, since: u, seen: u }), this.current.seen = u;
    const p = u - this.current.since;
    return p < c ? null : (this.armed = !1, this.current = null, { midi: s, heldMs: p });
  }
}
class pm {
  constructor(s = 2, u = 300, c = 150) {
    this.ratio = s, this.windowMs = u, this.refractoryMs = c;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(s, u, c) {
    if (u - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: u, rms: s }], !1;
    for (; this.history.length && u - this.history[0].time > this.windowMs; ) this.history.shift();
    const f = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : s;
    return this.history.push({ time: u, rms: s }), s < c * 1.5 || s < f * this.ratio ? !1 : (this.lastOnset = u, this.history = [{ time: u, rms: s }], !0);
  }
}
function Sd(i, s = 0) {
  const u = Math.max(0, s);
  let c = 0;
  for (let f = u; f < i.length; f++) c += i[f] * i[f];
  return Math.sqrt(c / Math.max(1, i.length - u));
}
function mm(i, s = 0) {
  let u = 0;
  for (let c = Math.max(0, s); c < i.length; c++) {
    const f = Math.abs(i[c]);
    f > u && (u = f);
  }
  return u;
}
const ii = (i) => i > 0 ? Math.max(-90, 20 * Math.log10(i)) : -90;
let Zr;
function qd() {
  return (!Zr || Zr.state === "closed") && (Zr = new AudioContext()), Zr;
}
function vm() {
  const i = Zr;
  Zr = void 0, i?.close().catch(() => {
  });
}
const ef = (i) => i instanceof Error ? i.name : "";
function km(i) {
  const s = ef(i);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(s) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : s === "NotFoundError" || s === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : s === "NotReadableError" || s === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : s === "MicSetupError" ? i.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class ym {
  constructor(s = (u) => tm(u, qd)) {
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
  async start(s, u, c) {
    this.stop();
    const f = this.generation;
    let h, p = !1;
    try {
      h = await this.opener(s || void 0);
    } catch (v) {
      if (!s || f !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(ef(v))) throw v;
      h = await this.opener(void 0), p = !0;
    }
    if (f !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new fm(h, { ...u });
      const v = () => {
        this.mic === h && (this.stop(), c());
      }, S = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((R) => R.addEventListener("ended", v, { once: !0, signal: S.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && v();
      }, { signal: S.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: p };
    } catch (v) {
      throw this.stop(), v;
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
function tf(i, s) {
  return i !== "on" ? i : !s || s.status === "silent" ? "silent" : s.status === "pitch" ? "pitch" : s.status === "off-pitch" ? "untuned" : "noise";
}
const wd = (i) => Math.max(0, Math.min(1, (ii(i) + 60) / 60));
function gm(i) {
  const s = [...i].sort((c, f) => c - f), u = s[Math.min(s.length - 1, Math.floor(s.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, u * 3)), noise: u, loud: u > 0.04 };
}
class nf {
  constructor(s = qd) {
    this.provide = s;
  }
  provide;
  master;
  token = 0;
  timer;
  loopTick;
  adjustLoopTempo;
  settle;
  /** Keskeyttää soivan esimerkin heti. Kesken jäänyt play palauttaa false. */
  stop() {
    this.token++, clearTimeout(this.timer), clearInterval(this.loopTick), this.loopTick = void 0, this.adjustLoopTempo = void 0, this.settle?.(!1), this.settle = void 0, this.master?.disconnect(), this.master = void 0;
  }
  async play(s) {
    this.stop();
    const u = this.token, c = this.provide();
    if (c.state !== "running" && await c.resume(), u !== this.token) return !1;
    const f = c.createGain();
    f.connect(c.destination), this.master = f;
    const h = Array.from({ length: 12 }, (S, R) => 1 / (R + 1) ** 1.3), p = c.createPeriodicWave?.(new Float32Array([0, ...h.map(() => 0)]), new Float32Array([0, ...h]));
    return s.forEach((S, R) => {
      const k = c.createOscillator(), C = c.createGain(), L = c.currentTime + 0.05 + R * 0.8;
      p ? k.setPeriodicWave(p) : k.type = "triangle", k.frequency.value = ld(S), C.gain.setValueAtTime(0, L), C.gain.linearRampToValueAtTime(0.22, L + 0.012), C.gain.exponentialRampToValueAtTime(1e-3, L + 0.7), k.connect(C), C.connect(f), k.start(L), k.stop(L + 0.72);
    }), !await new Promise((S) => {
      this.settle = S, this.timer = setTimeout(() => S(!0), s.length * 800 + 350);
    }) || u !== this.token ? !1 : (this.settle = void 0, f.disconnect(), this.master = void 0, !0);
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
  async loop(s, u, c = 75) {
    if (this.stop(), !s.length) return !1;
    const f = this.token, h = this.provide();
    if (h.state !== "running" && await h.resume(), f !== this.token) return !1;
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const v = Array.from({ length: 12 }, (w, E) => 1 / (E + 1) ** 1.3), S = h.createPeriodicWave?.(new Float32Array([0, ...v.map(() => 0)]), new Float32Array([0, ...v]));
    let R = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      f === this.token && Number.isFinite(w) && (R = 60 / Math.max(40, Math.min(140, w)));
    };
    const k = 1.6;
    let C = h.currentTime + 0.05, L = 0;
    const F = [], O = () => {
      if (f === this.token) {
        if (C < h.currentTime - 0.02) {
          const w = Math.ceil((h.currentTime - C) / R);
          C += w * R, L = (L + w) % s.length, F.length = 0;
        }
        for (; C < h.currentTime + k; ) {
          const w = s[L], E = L, I = C, N = h.createOscillator(), V = h.createGain();
          S ? N.setPeriodicWave(S) : N.type = "triangle", N.frequency.value = ld(w), V.gain.setValueAtTime(0, I), V.gain.linearRampToValueAtTime(0.22, I + 0.012), V.gain.exponentialRampToValueAtTime(1e-3, I + R * 0.975), N.connect(V), V.connect(p), N.start(I), N.stop(I + R * 0.985), F.push({ at: I, index: E }), C += R, L = (L + 1) % s.length;
        }
        for (; F.length && F[0].at <= h.currentTime + 0.01; ) {
          const w = F.shift();
          u?.(w.index);
        }
      }
    };
    return O(), this.loopTick = setInterval(O, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
const rf = "musiikin-kartta:skaalapolku:v1", sf = "musiikin-kartta:skaalapolku:tempo:v1", ei = 75, mo = 40, vo = 140;
function xm() {
  try {
    const i = localStorage.getItem(sf);
    if (i === null) return ei;
    const s = Number(i);
    return Number.isInteger(s) && s >= mo && s <= vo && s % 5 === 0 ? s : ei;
  } catch {
    return ei;
  }
}
const so = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele 1. position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio 1 harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], Ed = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on koko position 1 A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Nd() {
  try {
    const i = Number(localStorage.getItem(rf));
    return Number.isInteger(i) ? Math.max(0, Math.min(4, i)) : 0;
  } catch {
    return 0;
  }
}
function jm({ onBack: i }) {
  const [s, u] = b.useState(Nd), [c, f] = b.useState(Nd), [h, p] = b.useState(!1), [v, S] = b.useState("roots"), [R, k] = b.useState(xm), [C, L] = b.useState(null), [F, O] = b.useState(null), [w, E] = b.useState(""), I = b.useRef(new nf()), N = b.useRef(0);
  function V(A) {
    const Y = Math.max(mo, Math.min(vo, A));
    k(Y), I.current.setLoopTempo(Y);
    try {
      localStorage.setItem(sf, String(Y));
    } catch {
    }
  }
  function D() {
    N.current++, I.current.stop(), L(null), O(null);
  }
  b.useEffect(() => {
    const A = () => {
      document.hidden && (N.current++, I.current.stop(), L(null), O(null));
    };
    return document.addEventListener("visibilitychange", A), () => {
      document.removeEventListener("visibilitychange", A), N.current++, I.current.stop();
    };
  }, []);
  const ee = ze.fingeringBoxes(9, ze.SCALES.mp, "pentatonic", [1])[0].positions[0], Z = ee.strings.flatMap((A, Y) => A.map((J) => va(Y, J))).sort((A, Y) => A.midi - Y.midi || Y.string - A.string), M = [...Z, ...Z.slice(1, -1).reverse()], B = F === null ? null : M[F], re = [69, 72, 69, 67, 64, 67, 69], ce = ee.start, Ce = ee.end, Ae = (A) => Ke(A) === 9, Te = (A) => c < 2 ? !0 : c === 2 ? h && Ae(A) : v === "scale" || v === "roots" && Ae(A), Le = Z.filter((A) => Te(A.midi)).map((A) => ({
    ...A,
    label: c < 2 || c === 3 && v === "scale" ? Ie(A.midi) : "A",
    kind: c < 2 && B?.string === A.string && B.fret === A.fret ? "playing" : Ae(A.midi) ? "answer" : "shape"
  }));
  async function H(A) {
    const Y = ++N.current;
    I.current.stop(), O(null), E(""), L(A);
    try {
      A === "phrase" ? await I.current.play(re) : await I.current.loop(M.map((J) => J.midi), (J) => {
        Y === N.current && O(J);
      }, c === 2 ? R : ei);
    } catch {
      Y === N.current && E("Mallisoitto ei käynnistynyt. Tarkista selaimen ääniasetukset ja yritä uudelleen.");
    } finally {
      Y === N.current && (L(null), O(null));
    }
  }
  function ie() {
    D();
    const A = Math.min(4, c + 1);
    if (f(A), p(!1), S("roots"), A > s) {
      u(A);
      try {
        localStorage.setItem(rf, String(A));
      } catch {
      }
    }
  }
  function ae(A) {
    A > s || (D(), f(A), p(!1), S("roots"));
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: () => {
      D(), i();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · VAIHE 1" }),
    /* @__PURE__ */ l.jsx("h2", { id: "scale-path-title", children: "A-mollipentatoninen · positio 1" }),
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ l.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ l.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat 5–8 · 6 kieltä"
    ] }),
    /* @__PURE__ */ l.jsx("nav", { className: "journey-steps", "aria-label": "Position 1 harjoitukset", children: so.map((A, Y) => /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: Y === c ? "journey-step current" : "journey-step",
        "aria-current": Y === c ? "step" : void 0,
        disabled: Y > s,
        onClick: () => ae(Y),
        children: [
          /* @__PURE__ */ l.jsx("span", { className: "journey-index", children: Y > s ? "🔒" : Y < s ? "✓" : Y + 1 }),
          /* @__PURE__ */ l.jsx("span", { children: A.title })
        ]
      },
      A.title
    )) }),
    /* @__PURE__ */ l.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h3", { id: "lesson-title", children: so[c].title }),
        /* @__PURE__ */ l.jsx("span", { children: c === 4 ? "Valmis" : `Harjoitus ${c + 1} / 4` })
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: so[c].detail }),
      c < 4 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        c === 0 && /* @__PURE__ */ l.jsx("p", { children: "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. Kuuntele myös lyhyt mallifraasi. Ääni on syntetisoitu." }),
        c === 1 && /* @__PURE__ */ l.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        c === 2 && /* @__PURE__ */ l.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        c === 3 && /* @__PURE__ */ l.jsx("p", { children: "Kuuntele mallifraasi. Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A." }),
        c === 2 && /* @__PURE__ */ l.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: R <= mo,
              onClick: () => V(R - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ l.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            R,
            " BPM"
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: R >= vo,
              onClick: () => V(R + 5),
              children: "+ 5"
            }
          ),
          R !== ei && /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => V(ei),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ l.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        c !== 3 && /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "loop",
              onClick: () => C === "loop" ? D() : void H("loop"),
              children: C === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => C === "phrase" ? D() : void H("phrase"), children: C === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        c !== 3 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: C === "loop" ? B && c < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Ie(B.midi, !1, !0)} · ${fn[B.string]}-kieli, nauha ${B.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        w && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: w }),
        c >= 1 && c <= 3 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          c === 2 && /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ l.jsx("button", { type: "button", "aria-pressed": h, onClick: () => p((A) => !A), children: h ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => ae(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          c === 3 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ l.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              Ed.map((A) => /* @__PURE__ */ l.jsxs("label", { children: [
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: A.value,
                    checked: v === A.value,
                    onChange: () => S(A.value)
                  }
                ),
                /* @__PURE__ */ l.jsx("span", { children: A.label })
              ] }, A.value))
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
              H("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ l.jsx(Yi, { area: { strings: [0, 1, 2, 3, 4, 5], min: ce, max: Ce, fixed: "box" }, marks: Le, disabled: !0, caption: "A-mollipentatoninen, positio 1" }),
          /* @__PURE__ */ l.jsxs("p", { className: "tools-note", children: [
            c < 2 ? "Vihreällä merkitty A on pohjasävel." : c === 3 ? Ed.find((A) => A.value === v).note : h ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        c === 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Yi, { area: { strings: [0, 1, 2, 3, 4, 5], min: ce, max: Ce, fixed: "box" }, marks: Le, disabled: !0, caption: "Ensimmäisen position sävelet" }),
          /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        c === 3 && /* @__PURE__ */ l.jsx(qp, {}),
        /* @__PURE__ */ l.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ l.jsx("p", { children: c === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : c === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : c === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: ie, children: c === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      c === 4 && /* @__PURE__ */ l.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ l.jsx("h3", { children: "Ensimmäinen positio harjoiteltu" }),
        /* @__PURE__ */ l.jsx("p", { children: "Kertaa asteikko muistista myös myöhemmin. Seuraavat positiot ja niiden yhdistäminen rakennetaan tämän mallin pohjalta." }),
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => ae(2), children: "Kertaa muistiharjoitus" })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ l.jsx("p", { children: "🔒 Positio 2 · 🔒 Positioiden 1 ja 2 yhdistäminen · 🔒 Positio 3" }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Nämä harjoitukset ovat vielä toteuttamatta. Ensimmäinen positio toimii uuden rakenteen testiversiona." })
    ] })
  ] });
}
const Xr = [0, 2, 4, 5, 7, 9, 11], Sm = 1200, ua = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function wm({ onBack: i }) {
  const [s, u] = b.useState(0), [c, f] = b.useState([]), [h, p] = b.useState(!1), [v, S] = b.useState(""), [R, k] = b.useState(0), [C, L] = b.useState(!1), F = s >= Xr.length, O = Xr[Math.min(s, Xr.length - 1)], w = si(ua.strings, ua.min, ua.max).filter((M) => Ke(M.midi) === O), E = w.filter((M) => !c.includes(it(M))), I = E.length === 0 && !F, N = !I && h ? E[0] : void 0;
  b.useEffect(() => {
    if (!C || !I) return;
    const M = window.setTimeout(() => {
      u((B) => B + 1), f([]), p(!1), S("");
    }, Sm);
    return () => window.clearTimeout(M);
  }, [C, I]);
  const V = [
    ...w.filter((M) => c.includes(it(M))).map((M) => ({ ...M, kind: "answer", label: Ie(M.midi) })),
    ...N ? [{ ...N, kind: "anchor", label: "?" }] : []
  ];
  function D(M) {
    if (F || I) return;
    const B = it(M);
    if (Ke(M.midi) !== O) {
      k((Ce) => Ce + 1), S(`Valitsit sävelen ${Ie(M.midi)}. Etsi ${Ie(O)}.`);
      return;
    }
    if (c.includes(B)) {
      S("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const re = [...c, B];
    f(re), p(!1);
    const ce = w.length - re.length;
    S(ce ? `Oikein! ${Ie(O)} löytyi ${fn[M.string]}-kieleltä (${Er(M.fret)}). Vielä ${ce}.` : `Löysit kaikki ${w.length} ${Ie(O)}-säveltä tällä alueella.`);
  }
  function ee() {
    I && (u((M) => M + 1), f([]), p(!1), S(""));
  }
  function Z() {
    u(0), f([]), p(!1), S(""), k(0);
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ l.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !F && /* @__PURE__ */ l.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          checked: C,
          onChange: (M) => L(M.target.checked)
        }
      ),
      /* @__PURE__ */ l.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "journey-lesson", children: F ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        R ? `Vääriä valintoja yhteensä ${R}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: Z, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsxs("h3", { children: [
          "Etsi kaikki ",
          Ie(O),
          "-sävelet"
        ] }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Sävel ",
          s + 1,
          " / ",
          Xr.length
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Ie(O),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ l.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        w.length
      ] }),
      /* @__PURE__ */ l.jsx(
        Yi,
        {
          area: ua,
          marks: V,
          onAnswer: D,
          disabled: I,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "p",
        {
          className: I ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: v
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        !I && /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => p((M) => !M),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        I && (C ? /* @__PURE__ */ l.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          s === Xr.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: ee, children: s === Xr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const Em = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, ao = ["C", "G", "D", "Em"], Cd = ["C", "G", "D", "Em", "Am", "E", "A"], Nm = { min: 0, max: 3, fixed: "" };
function _d(i) {
  const s = [...i];
  for (let u = s.length - 1; u > 0; u--) {
    const c = Math.floor(Math.random() * (u + 1));
    [s[u], s[c]] = [s[c], s[u]];
  }
  return s;
}
function Cm({ onBack: i }) {
  const [s, u] = b.useState(4), [c, f] = b.useState(() => _d(ao)), [h, p] = b.useState(0), [v, S] = b.useState(null), [R, k] = b.useState([]), [C, L] = b.useState(0), F = h >= c.length, O = Em[c[Math.min(h, c.length - 1)]], w = s === 4 ? ao : Cd, E = O.frets.flatMap((M, B) => M === null ? [] : [B]), I = O.frets.flatMap((M, B) => M === null ? [B] : []), N = { ...Nm, strings: E }, V = O.frets.flatMap((M, B) => M === null ? [] : [{
    ...va(B, M),
    kind: M === 0 ? "anchor" : "shape",
    label: M === 0 ? "○" : "●"
  }]);
  function D(M = s) {
    u(M), f(_d(M === 4 ? ao : Cd)), p(0), S(null), k([]), L(0);
  }
  function ee(M) {
    v || F || R.includes(M) || (M === O.name ? S(M) : (k((B) => [...B, M]), L((B) => B + 1)));
  }
  function Z() {
    v && (p((M) => M + 1), S(null), k([]));
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "SOINNUT JA MUSIIKIN RAKENNE · VAIHE 1" }),
    /* @__PURE__ */ l.jsx("h2", { id: "chord-journey-title", children: "Tunnista avoin sointu" }),
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsx("a", { href: "book/osa-6.html#caged", children: "Lue tämän harjoituksen teoria: Avoimet sointumuodot →" }) }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Katso otelaudalla näkyvää avointa sointuotetta ja valitse oikea soinnun nimi. Tässä harjoituksessa ei tarvitse kuunnella tai soittaa." }),
    /* @__PURE__ */ l.jsxs("fieldset", { className: "chord-difficulty", children: [
      /* @__PURE__ */ l.jsx("legend", { children: "Tunnistettavat soinnut" }),
      /* @__PURE__ */ l.jsxs("label", { children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: s === 4,
            onChange: () => D(4)
          }
        ),
        " 4 sointua (C, G, D, Em)"
      ] }),
      /* @__PURE__ */ l.jsxs("label", { children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: s === 7,
            onChange: () => D(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "journey-lesson", children: F ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Tunnistit kaikki ",
        s,
        " sointua. ",
        C ? `Vääriä valintoja yhteensä ${C}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: () => D(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Sointu ",
          h + 1,
          " / ",
          c.length
        ] })
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ l.jsx(
        Yi,
        {
          area: N,
          marks: V,
          mutedStrings: I,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ l.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((M) => /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: v === M ? "right" : R.includes(M) ? "wrong" : "",
          disabled: !!v || R.includes(M),
          "aria-pressed": v === M,
          onClick: () => ee(M),
          children: M
        },
        M
      )) }),
      /* @__PURE__ */ l.jsx(
        "p",
        {
          className: v ? "feedback good" : R.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: v ? `Oikein! Tämä on ${O.name}-sointu.` : R.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      v && /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: Z, children: h === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const he = (i, s) => ({ first: i, ...s ? { second: s } : {} }), ti = () => [
  he("Gm", "F"),
  he("Gm"),
  he("B♭", "F"),
  he("Gm"),
  he("Gm", "F"),
  he("Gm"),
  he("E♭", "F"),
  he("Gm")
], ni = () => [
  he("B♭", "F"),
  he("Gm", "Dm"),
  he("E♭", "F"),
  he("Gm", "Dm")
], ri = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], af = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], _m = [
  { id: "intro", title: "Intro", start: 0, bars: [he("Gm", "F"), he("Gm"), he("B♭", "F"), he("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ti(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...ni(), he("E♭"), { ...he("E♭"), passingBass: "F" }],
    lyrics: ri,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [he("Gm", "F"), he("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: ti(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...ni(), he("E♭"), he("F")],
    lyrics: ri
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [he("Gm"), he("Dm"), he("F"), he("C"), he("Gm"), he("Dm"), he("E♭"), he("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: ti(),
    lyrics: af
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ni(), he("E♭", "F"), he("Gm")],
    lyrics: ri
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      he("E♭", "F"),
      { ...he("Gm"), possibleChord: "Dm" },
      he("E♭", "F"),
      he("Gm", "F"),
      { ...he("Gm"), possibleChord: "Dm" },
      he("Gm", "F"),
      he("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], Tm = [
  { id: "intro", title: "Intro", start: 0, bars: [he("Gm", "F"), he("Gm"), he("B♭", "F"), he("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ti(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...ni(), he("E♭"), he("E♭")],
    lyrics: ri
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: ti(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...ni(), he("E♭"), he("F")],
    lyrics: ri
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [he("Gm"), he("Dm"), he("F"), he("C"), he("Gm"), he("Dm"), he("E♭"), he("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: ti(),
    lyrics: af
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ni(), he("B♭", "F"), he("Gm"), he("E♭", "F"), he("Gm")],
    lyrics: ri
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [he("E♭", "F"), he("Gm", "F"), he("E♭", "F"), he("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ai = {
  acoustic: _m,
  normal: Tm
}, Mm = "normal", ko = "yksi-sointu-kaksi-askelta", Co = {
  acoustic: ko + "-akustinen",
  normal: ko + "-normaali"
}, lf = (i) => i === ko || Object.values(Co).includes(i ?? "");
function Pm(i) {
  const s = Object.entries(Co).find(([, u]) => u === i);
  return s ? s[0] : null;
}
const Am = (i) => Co[i], Td = (i) => {
  const s = Math.max(0, Math.floor(Number.isFinite(i) ? i : 0));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};
function _o(i, s = "acoustic") {
  const u = ai[s], c = u[i], f = u[i + 1];
  return f ? (f.start - c.start) / c.bars.length : 240 / 69;
}
function of(i, s = "acoustic") {
  const u = ai[s], c = Math.max(0, Number.isFinite(i) ? i : 0);
  let f = 0;
  for (let C = 1; C < u.length && !(c < u[C].start); C++)
    f = C;
  const h = u[f];
  let p = 0;
  for (; p + 1 < h.bars.length && c >= Ji(f, p + 1, s); )
    p++;
  const v = Ji(f, p, s), S = _o(f, s) / 4;
  let R = 1;
  for (; R < 4 && c >= v + R * S; ) R++;
  const k = h.bars[p];
  return {
    section: h,
    sectionIndex: f,
    barIndex: p,
    beat: R,
    chord: k.second && R >= 3 ? k.second : k.first
  };
}
function Ji(i, s, u = "acoustic") {
  return ai[u][i].start + _o(i, u) * s;
}
function Rm(i) {
  return ai[i].flatMap((s, u) => s.bars.flatMap((c, f) => {
    const h = Ji(u, f, i), p = { section: s, sectionIndex: u, barIndex: f, part: "first", chord: c.first, time: h };
    if (!c.second) return [p];
    const v = _o(u, i) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: h + v }];
  }));
}
function Lm(i, s = "acoustic", u = !1) {
  const c = ai[s], f = of(i, s), h = f.section.bars[f.barIndex], p = f.beat >= 3 && h.second ? "second" : "first", v = Rm(s), S = v.findIndex((F) => F.sectionIndex === f.sectionIndex && F.barIndex === f.barIndex && F.part === p), k = [
    ...v.slice(S + 1).map((F) => ({ ...F, wrapped: !1 })),
    ...u ? v.slice(0, S + 1).map((F) => ({ ...F, wrapped: !0 })) : []
  ].find((F) => F.chord !== f.chord) ?? null;
  let C = null;
  const L = f.sectionIndex === c.length - 1;
  if (f.barIndex === f.section.bars.length - 1 && (!L || u)) {
    const F = L ? 0 : f.sectionIndex + 1, O = c[F], w = O.bars[0].first;
    C = {
      section: O,
      sectionIndex: F,
      firstChord: w,
      wrapped: L,
      continues: w === (h.second ?? h.first)
    };
  }
  return { nextChord: k, nextSection: C };
}
function $m(i) {
  const s = i.filter((v) => v.lyrics?.length), u = (v) => 1 + (v.lyrics?.length ?? 0), c = s.reduce((v, S) => v + u(S), 0);
  let f = 0, h = 1 / 0, p = 0;
  for (let v = 0; v <= s.length; v++) {
    const S = Math.abs(c - 2 * p);
    (S < h || S === h && p >= c - p) && (f = v, h = S), v < s.length && (p += u(s[v]));
  }
  return [s.slice(0, f), s.slice(f)];
}
const yo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], uf = "musiikin-kartta:kappale-sointuvihjeet:v1", fa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Md = {
  showChords: !0,
  level: 0,
  fadeOrder: fa
};
function ca(i, s) {
  return !s.showChords || s.level >= s.fadeOrder[i];
}
function Pd(i) {
  if (!i) return { ...Md, fadeOrder: { ...fa } };
  try {
    const s = JSON.parse(i);
    if (!s || typeof s != "object") throw new Error("Invalid settings");
    const u = s, c = u.level, f = { ...fa }, h = u.fadeOrder;
    if (h && typeof h == "object") {
      const p = h;
      for (const v of yo)
        [1, 2, 3, 4].includes(p[v]) && (f[v] = p[v]);
    }
    return {
      showChords: typeof u.showChords == "boolean" ? u.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: f
    };
  } catch {
    return { ...Md, fadeOrder: { ...fa } };
  }
}
function Fm() {
  try {
    return Pd(localStorage.getItem(uf));
  } catch {
    return Pd(null);
  }
}
const Om = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Im(i) {
  const s = Om.exec(i.trim());
  if (!s) return i;
  const [, u, , c = "", f = ""] = s;
  return u + "5" + c + f;
}
const Dm = (i, s) => s === "power" ? Im(i) : i, zm = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], bm = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Vm({ version: i, position: s, loop: u = !1, onSeek: c }) {
  const [f, h] = b.useState(Fm), [p, v] = b.useState(null), [S, R] = b.useState(!1), [k, C] = b.useState("full"), L = (H) => Dm(H, k), F = ai[i], O = of(s, i), { section: w, sectionIndex: E, barIndex: I, beat: N, chord: V } = O, D = N >= 3 && w.bars[I].second ? "second" : "first", ee = (H, ie, ae) => `${i}:${H}:${ie}:${ae}`, Z = (H, ie) => ee(w.id, H, ie), M = Z(I, D), B = ca(V, f), re = B && p === M, ce = (H, ie, ae) => !ca(H, f) || p === Z(ie, ae), Ce = f.showChords && f.level === 0, Ae = yo.filter((H) => ca(H, f)).length, { nextSection: Te } = Lm(s, i, u), Le = !!Te && ca(Te.firstChord, f);
  return b.useEffect(() => {
    v(null);
  }, [M]), b.useEffect(() => {
    try {
      localStorage.setItem(uf, JSON.stringify(f));
    } catch {
    }
  }, [f]), /* @__PURE__ */ l.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ l.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ l.jsxs("span", { children: [
        f.showChords && f.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            checked: f.showChords,
            onChange: (H) => {
              h((ie) => ({ ...ie, showChords: H.target.checked })), v(null);
            }
          }
        ),
        "Näytä soinnut"
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            checked: S,
            onChange: (H) => R(H.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ l.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ l.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([H, ie]) => /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: H,
              checked: k === H,
              onChange: () => C(H)
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: ie })
        ] }, H))
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-hint-level",
            value: f.level,
            disabled: !f.showChords,
            onChange: (H) => {
              const ie = Number(H.target.value);
              h((ae) => ({ ...ae, level: ie })), v(null);
            },
            children: zm.map((H) => /* @__PURE__ */ l.jsx("option", { value: H.value, children: H.label }, H.value))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Ae === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Ae}/6 sointua` })
    ] }),
    f.showChords && f.level < 4 && /* @__PURE__ */ l.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ l.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ l.jsx("div", { className: "song-fade-order", children: yo.map((H) => /* @__PURE__ */ l.jsxs("label", { children: [
        H,
        /* @__PURE__ */ l.jsx(
          "select",
          {
            "aria-label": H + ": piilotusvaihe",
            value: f.fadeOrder[H],
            onChange: (ie) => {
              const ae = Number(ie.target.value);
              h((A) => ({ ...A, fadeOrder: { ...A.fadeOrder, [H]: ae } })), v(null);
            },
            children: bm.map((ie) => /* @__PURE__ */ l.jsx("option", { value: ie.value, children: ie.label }, ie.value))
          }
        )
      ] }, H)) })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ l.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (H) => {
              const ie = F.find((ae) => ae.id === H.target.value);
              ie && c(ie.start);
            },
            children: F.map((H) => /* @__PURE__ */ l.jsxs("option", { value: H.id, children: [
              Td(H.start),
              " · ",
              H.title
            ] }, H.id))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ l.jsxs("p", { className: "song-current-chord", children: [
          B && !re ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ l.jsx("strong", { children: B && !re ? "?" : L(V) }),
          /* @__PURE__ */ l.jsxs("span", { children: [
            w.title,
            ", tahti ",
            I + 1,
            ", isku ",
            N,
            "/4"
          ] }),
          B && /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => v(re ? null : M),
              children: re ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        Te && /* @__PURE__ */ l.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ l.jsx("strong", { children: Le ? "?" : L(Te.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((H, ie) => {
      const ae = ie === I, A = ae && (N < 3 || !H.second), Y = ae && N >= 3 && !!H.second, J = ce(H.first, ie, "first"), g = H.second ? ce(H.second, ie, "second") : !1, z = (J ? L(H.first) : "sointu piilossa") + (H.second ? " " + (g ? L(H.second) : "sointu piilossa") : "") + (Ce && H.passingBass ? " (basson kulku " + H.passingBass + ")" : "") + (Ce && H.possibleChord ? " (" + L(H.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (ae ? " active" : ""),
          "aria-pressed": ae,
          "aria-label": "Tahti " + (ie + 1) + ": " + z + ". Siirry kohtaan " + Td(Ji(E, ie, i)),
          onClick: () => c(Ji(E, ie, i)),
          children: [
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ie + 1
            ] }),
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ l.jsx("strong", { className: A && J ? "now" : "", children: J ? L(H.first) : "?" }),
              H.second && /* @__PURE__ */ l.jsx("strong", { className: Y && g ? "now" : "", children: g ? L(H.second) : "?" })
            ] }),
            Ce && H.passingBass && /* @__PURE__ */ l.jsxs("small", { children: [
              "Basso: (",
              H.passingBass,
              "), isku 4"
            ] }),
            Ce && H.possibleChord && /* @__PURE__ */ l.jsxs("small", { children: [
              "Mahdollinen (",
              L(H.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ie
      );
    }) }),
    S ? /* @__PURE__ */ l.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ l.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ l.jsx("div", { className: "song-all-lyrics-grid", children: $m(F).map((H, ie) => /* @__PURE__ */ l.jsx("div", { className: "song-lyrics-column", children: H.map((ae) => /* @__PURE__ */ l.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ l.jsx("h5", { children: ae.title }),
        ae.lyrics?.map((A, Y) => /* @__PURE__ */ l.jsx("p", { children: A }, Y))
      ] }, ae.id)) }, ie)) }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ l.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ l.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((H, ie) => /* @__PURE__ */ l.jsx("p", { children: H }, ie))
    ] }),
    Ce && w.note && /* @__PURE__ */ l.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const ma = 7, Bm = { name: "bluesasteikko", base: ze.SCALES.mp.base, add: [[6, "♭5"]] }, lo = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: ze.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: Bm,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: ze.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function Um(i) {
  return ze.scaleNotes(i).map(([s, u]) => ze.noteName(ma, s, u));
}
const cf = (i) => i === "pentatonic" ? 5 : 7;
function Hm(i, s, u) {
  const c = s.filter((v) => v >= 1 && v <= cf(i.system)), f = ze.fingeringBoxes(ma, i.scale, i.system, c, u);
  if (i.id !== "blues") return f;
  const h = i.scale.add.map(([v]) => (ma + v) % 12), p = (v, S) => S >= 0 && S <= u && h.includes((ze.OPEN_PITCHES[v] + S) % 12);
  return f.map((v) => ({ ...v, positions: v.positions.map((S) => {
    const R = S.strings.map((C, L) => {
      if (!C.length) return C;
      const F = C[C.length - 1];
      return p(L, F + 1) ? [...C.slice(0, -1), F + 1] : C;
    }), k = R.flat();
    return { ...S, strings: R, start: Math.min(...k), end: Math.max(...k) };
  }) }));
}
const Ad = 17;
function Km({ open: i }) {
  const [s, u] = b.useState("mp"), [c, f] = b.useState({ pentatonic: [], "3nps": [] }), [h, p] = b.useState(!1), [v, S] = b.useState(!1), R = b.useRef(null), k = lo.find((E) => E.id === s) ?? lo[0], C = c[k.system], L = Hm(k, C, Ad), F = L.some((E) => E.positions.length > 0), O = ze.renderBoard(ma, k.scale, Ad, {
    automatic: !0,
    boxes: L,
    onlyBoxNotes: F && h,
    label: k.title + (C.length ? ", " + C.map((E) => "boksi " + E).join(", ") : "")
  });
  b.useEffect(() => {
    const E = R.current;
    !E || !i || L.length === 1 && ze.revealPositions(E, ".box-highlight");
  }, [O, i]);
  function w(E, I) {
    f((N) => ({ ...N, [k.system]: I ? [...N[k.system], E].sort((V, D) => V - D) : N[k.system].filter((V) => V !== E) }));
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ l.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ l.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ l.jsx("select", { value: s, onChange: (E) => u(E.target.value), children: lo.map((E) => /* @__PURE__ */ l.jsx("option", { value: E.id, children: E.title }, E.id)) })
    ] }) }),
    /* @__PURE__ */ l.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ l.jsx("strong", { children: k.title }),
      /* @__PURE__ */ l.jsx("span", { children: Um(k.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "song-scale-note", children: k.note }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: R,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: O }
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "legend", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "swatch", style: { background: "#4b2fd6", border: "2px solid #fff" } }),
        "Juurisävel G (1)"
      ] }),
      /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "swatch", style: { background: "#6d4aff" } }),
        "Asteikon sävel"
      ] }),
      k.scale.add.length > 0 && /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        k.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-box-settings", open: v, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (E) => {
        E.preventDefault(), S((I) => !I);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ l.jsx("p", { className: "song-box-system", children: k.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ l.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: cf(k.system) }, (E, I) => I + 1).map((E) => /* @__PURE__ */ l.jsxs("label", { className: "box-toggle", "data-box": E, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            value: E,
            checked: C.includes(E),
            onChange: (I) => w(E, I.target.checked)
          }
        ),
        " Boksi ",
        E
      ] }, k.system + E)) }),
      /* @__PURE__ */ l.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            checked: F && h,
            disabled: !F,
            onChange: (E) => p(E.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: F ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let df = null;
function Gm() {
  return Pm(new URLSearchParams(location.search).get("kappale")) ?? df ?? Mm;
}
function Wm(i) {
  df = i;
  const s = new URL(location.href);
  lf(s.searchParams.get("kappale")) && (s.searchParams.set("kappale", Am(i)), history.replaceState(history.state, "", s.pathname + s.search + s.hash));
}
const Qm = {
  acoustic: {
    label: "Akustinen versio",
    length: "3:53",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-laulu.mp3"
  },
  normal: {
    label: "Normaali versio",
    length: "3:32",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-laulu.mp3"
  }
}, Rd = 1e-3;
function Ld(i, s) {
  try {
    i.currentTime = s;
  } catch {
  }
}
function $d(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const s = Math.floor(i);
  return String(Math.floor(s / 60)) + ":" + String(s % 60).padStart(2, "0");
}
function Ym({ onBack: i }) {
  const s = b.useRef(null), u = b.useRef(null), c = b.useRef(null), f = b.useRef(0), h = b.useRef(new Zd()), p = b.useRef(null), [v, S] = b.useState(Gm), R = Qm[v], [k, C] = b.useState(!1), [L, F] = b.useState(!0), [O, w] = b.useState(!0), [E, I] = b.useState(!1), [N, V] = b.useState(!1), [D, ee] = b.useState(!1), [Z, M] = b.useState(Vp), [B] = b.useState(() => Up() ? "element" : "webaudio"), re = b.useRef(null), [ce, Ce] = b.useState(0), [Ae, Te] = b.useState(0), [Le, H] = b.useState("");
  function ie(j = !1, G) {
    const te = s.current;
    if (te)
      for (const ne of [u.current, c.current])
        ne && (!G || ne === G) && h.current.align(te, ne, j);
  }
  function ae() {
    return [
      ["backing", s.current, !0],
      ["guitar", u.current, L],
      ["vocals", c.current, O]
    ];
  }
  function A(j = Z, G) {
    for (const [te, ne, le] of ae()) {
      if (!ne) continue;
      const fe = yd(te, j, G?.[te] ?? le);
      if (B === "webaudio" && re.current?.routed(ne))
        re.current.setLevel(ne, fe);
      else
        try {
          ne.volume = yd(te, j);
        } catch {
        }
    }
  }
  function Y(j) {
    M(j), Bp(j), A(j);
  }
  function J() {
    f.current++, s.current?.pause(), u.current?.pause(), c.current?.pause(), C(!1);
  }
  function g(j) {
    if (j !== v) {
      p.current = null, J();
      for (const G of [s.current, u.current, c.current])
        if (G)
          try {
            G.currentTime = 0;
          } catch {
          }
      Ce(0), Te(0), H(""), S(j), Wm(j);
    }
  }
  function z(j) {
    const G = s.current;
    if (!G || !Number.isFinite(j)) return;
    const te = Math.max(0, Math.min(j, Number.isFinite(G.duration) ? G.duration : j));
    p.current = te, Ce(te), Ld(G, te);
  }
  function ve(j) {
    const G = p.current;
    if (G === null || j !== s.current || j.seeking) return;
    const te = Number.isFinite(j.duration) ? Math.min(G, j.duration) : G;
    if (te !== G && (p.current = te, Ce(te)), Math.abs(j.currentTime - te) < Rd) return;
    const ne = j.seekable;
    for (let le = 0; le < ne.length; le++)
      if (ne.start(le) <= te && te <= ne.end(le)) {
        Ld(j, te);
        return;
      }
  }
  function we(j) {
    if (j !== s.current) return;
    const G = p.current;
    if (G === null)
      Ce(j.currentTime);
    else if (j.readyState >= 1 && !j.seeking && Math.abs(j.currentTime - G) < Rd) {
      p.current = null, ie(!0);
      return;
    }
    j.paused || ie();
  }
  async function _e() {
    const j = s.current, G = u.current, te = c.current;
    if (!j || !G || !te) return;
    if (k) {
      J();
      return;
    }
    H("");
    const ne = p.current ?? j.currentTime;
    if (Number.isFinite(j.duration) && ne >= j.duration - 0.05 && z(0), ve(j), B === "webaudio" && (re.current ??= new Jp(), re.current.unlock()))
      for (const fe of [j, G, te]) re.current.route(fe);
    A(), G.muted = !L, te.muted = !O, ie(!0);
    const le = ++f.current;
    try {
      L || G.pause(), O || te.pause();
      const fe = [j.play(), ...L ? [G.play()] : [], ...O ? [te.play()] : []];
      if (await Promise.all(fe), le !== f.current) return;
      ie(), C(!0);
    } catch {
      if (le !== f.current) return;
      J(), H("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function Ee(j, G, te) {
    if (!j) return;
    if (j.muted = !G, !G) {
      j.pause();
      return;
    }
    !s.current || !k || (ie(!0, j), j.play().catch(() => H(te + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function Q(j) {
    F(j), A(Z, { guitar: j }), Ee(u.current, j, "Kitararaita");
  }
  function q(j) {
    w(j), A(Z, { vocals: j }), Ee(c.current, j, "Lauluraita");
  }
  return b.useEffect(() => {
    const j = () => {
      document.hidden && J();
    };
    return document.addEventListener("visibilitychange", j), () => {
      document.removeEventListener("visibilitychange", j), f.current++, s.current?.pause(), u.current?.pause(), c.current?.pause(), re.current?.close();
    };
  }, []), b.useEffect(() => {
    A();
  }, [v]), /* @__PURE__ */ l.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ l.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ l.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ l.jsxs(
        "select",
        {
          id: "song-version-select",
          value: v,
          onChange: (j) => g(j.target.value),
          children: [
            /* @__PURE__ */ l.jsx("option", { value: "normal", children: "Normaali versio" }),
            /* @__PURE__ */ l.jsx("option", { value: "acoustic", children: "Akustinen versio" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "journey-lesson song-player", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h3", { children: "Kappaleen soitin" }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          R.label,
          " · ",
          R.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          _e();
        }, children: k ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: Ae > 0 ? Ae : 1,
            step: 0.1,
            value: Math.min(ce, Ae > 0 ? Ae : 1),
            disabled: Ae <= 0,
            onChange: (j) => z(Number(j.target.value))
          }
        ),
        /* @__PURE__ */ l.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          $d(ce),
          " / ",
          $d(Ae)
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: L,
              onChange: (j) => Q(j.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: O,
              onChange: (j) => q(j.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: E,
              onChange: (j) => I(j.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "song-volume", "data-volume-mode": B, children: [
          /* @__PURE__ */ l.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ l.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            Z > 0 && /* @__PURE__ */ l.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            Z > 50 && /* @__PURE__ */ l.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: Z,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": Z + " %",
              onChange: (j) => Y(Number(j.target.value))
            }
          ),
          /* @__PURE__ */ l.jsxs("output", { "aria-hidden": "true", children: [
            Z,
            " %"
          ] })
        ] })
      ] }),
      Le && /* @__PURE__ */ l.jsx("p", { className: "backing-error", role: "alert", children: Le }),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: s,
          src: R.backing,
          preload: "metadata",
          loop: E,
          onLoadedMetadata: (j) => {
            j.currentTarget === s.current && (Te(j.currentTarget.duration), ve(j.currentTarget));
          },
          onProgress: (j) => ve(j.currentTarget),
          onCanPlay: (j) => ve(j.currentTarget),
          onTimeUpdate: (j) => we(j.currentTarget),
          onEnded: (j) => {
            j.currentTarget !== s.current || j.currentTarget.loop || (p.current = null, u.current?.pause(), c.current?.pause(), C(!1), Ce(j.currentTarget.duration));
          },
          onPause: (j) => {
            j.currentTarget === s.current && C(!1);
          },
          onError: () => H(R.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        v + "-backing"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: u,
          src: R.guitar,
          preload: "metadata",
          muted: !L,
          loop: E,
          onLoadedMetadata: () => {
            s.current?.paused && ie(!0);
          },
          onError: () => H(R.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        v + "-guitar"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: c,
          src: R.vocals,
          preload: "metadata",
          muted: !O,
          loop: E,
          onLoadedMetadata: () => {
            s.current?.paused && ie(!0);
          },
          onError: () => H(R.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        v + "-vocals"
      )
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-chart-collapse", open: N, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (j) => {
        j.preventDefault(), V((G) => !G);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ l.jsx(Vm, { version: v, position: ce, loop: E, onSeek: z })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-scales-collapse", open: D, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (j) => {
        j.preventDefault(), ee((G) => !G);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ l.jsx(Km, { open: D })
    ] })
  ] });
}
const go = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, ha = (i, s = 1) => i.toFixed(s).replace(".", ",").replace("-", "−"), ff = (i) => {
  const s = Math.round(i);
  return (s > 0 ? "+" : s < 0 ? "−" : "±") + Math.abs(s);
}, xo = (i) => i ? i.label || "Järjestelmän oletustulo" : "";
function Jm(i, s, u, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (i) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${xo(u)}. Vaihda laite Mikrofonin asetuksista.`,
        "Äänikortti: kytke kitara soitintuloon (INST), käännä gain-säädintä ylemmäs ja avaa kitaran volume.",
        "Jos mittari liikkuu mutta jää kynnysviivan alle, mittaa taustakohina tai laske äänikynnystä."
      ];
    case "noise":
      return [
        "Soita vain yhtä kieltä ja vaimenna muut kädellä.",
        "Sammuta taustamusiikki ja muut äänet. Kaiuttimista kuuluva ääni sekoittaa tunnistusta.",
        "Soita hieman voimakkaammin ja anna sävelen soida hetki."
      ];
    case "untuned":
      return [`Viritä kitara. Sävel hyväksytään, kun poikkeama on enintään ±${s.cents} senttiä.`];
    case "pitch":
      return [`Mikrofoni toimii. Harjoituksessa sävel hyväksytään, kun se soi vakaana ${s.stability} ms.`];
    default:
      return [];
  }
}
function hf({ frame: i, threshold: s }) {
  const u = i?.rms ?? 0, c = ii(u), f = (i?.peak ?? 0) >= 0.98 ? "clip" : u >= s ? "over" : "under";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meter ${f}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${ha(Math.max(-60, c), 0)} desibeliä${u >= s ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meter-fill", style: { width: `${wd(u) * 100}%` } }),
        /* @__PURE__ */ l.jsx("div", { className: "meter-threshold", style: { left: `${wd(s) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Xm({ mic: i, frame: s, heard: u, s: c, now: f }) {
  const h = tf(i.phase, s), p = u && f - u.at < 1500 ? u : null, v = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${Ie(p.midi, c.flats, !0)} · ${ff(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : go[h];
  return /* @__PURE__ */ l.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ l.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: v }),
    i.phase === "on" && /* @__PURE__ */ l.jsx(hf, { frame: s, threshold: c.minRms })
  ] });
}
function Zm({ mic: i, frame: s, heard: u, accepted: c, now: f, s: h, change: p, devices: v, locked: S, calibrating: R, calibration: k, onTest: C, onStop: L, onCalibrate: F }) {
  const O = b.useId(), w = tf(i.phase, s), E = i.purpose === "test" && i.phase !== "off" && i.phase !== "error", I = i.phase === "on", N = u && f - u.at < 1500 ? u : null, V = N && (w === "pitch" || w === "untuned"), D = I && (s?.peak ?? 0) >= 0.98, ee = i.phase === "error" ? [] : Jm(w, h, i.info, D), Z = !h.device || v.some((B) => B.deviceId === h.device), M = (B, re) => p({ ...h, [B]: re });
  return /* @__PURE__ */ l.jsxs("section", { className: "mic-panel", "aria-labelledby": `${O}-title`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ l.jsx("h2", { id: `${O}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ l.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      i.phase === "error" ? i.error : go[w],
      w === "pitch" && N ? ` ${Ie(N.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: i.phase === "on" ? `Mikrofoni kuuntelee: ${xo(i.info)}.` : i.phase === "error" ? i.error : go[i.phase] }),
    i.phase === "off" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    I && /* @__PURE__ */ l.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ l.jsxs("dd", { "data-testid": "mic-device", children: [
          xo(i.info),
          i.info && i.info.channels > 1 ? ` · kanava ${(s?.channel ?? 0) + 1}/${i.info.channels}` : "",
          i.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ l.jsxs("dd", { children: [
          /* @__PURE__ */ l.jsx(hf, { frame: s, threshold: h.minRms }),
          /* @__PURE__ */ l.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            ha(Math.max(-60, ii(s?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: V ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ l.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: N ? Ie(N.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: V ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-frequency", children: N ? `${ha(N.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: V ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-cents", children: N ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          ff(N.cents),
          " senttiä",
          /* @__PURE__ */ l.jsx("span", { className: `cents ${N.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ l.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, N.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: V ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-clarity", children: N ? `${Math.round(N.clarity * 100)} %` : s?.clarity !== void 0 && w === "noise" ? `${Math.round(s.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    I && c && f - c.timestamp < 4e3 && /* @__PURE__ */ l.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ie(c.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    ee.length > 0 && I && /* @__PURE__ */ l.jsx("ul", { className: "mic-advice", children: ee.map((B) => /* @__PURE__ */ l.jsx("li", { children: B }, B)) }),
    i.phase === "error" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    k && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", children: k }),
    /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
      E ? /* @__PURE__ */ l.jsx("button", { type: "button", onClick: L, children: "Lopeta testi" }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: h.input === "mic" && i.phase !== "on" ? "primary" : "", disabled: S, onClick: C, children: "Testaa mikrofoni" }),
      E && I && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: R, onClick: F, children: R ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    S && i.purpose !== "test" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", disabled: S, children: [
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsx("label", { htmlFor: `${O}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ l.jsxs("select", { id: `${O}-device`, value: h.device, onChange: (B) => M("device", B.target.value), children: [
              /* @__PURE__ */ l.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !Z && /* @__PURE__ */ l.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              v.map((B, re) => /* @__PURE__ */ l.jsx("option", { value: B.deviceId, children: B.label || `Äänitulo ${re + 1}` }, B.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${O}-rms`, children: [
              "Äänikynnys · ",
              ha(ii(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${O}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (B) => M("minRms", Number(B.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${O}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${O}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (B) => M("clarity", Number(B.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${O}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${O}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (B) => M("stability", Number(B.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${O}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${O}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (B) => M("cents", Number(B.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("p", { className: "tools-note", children: [
          v.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const qm = (i) => i.mode === "scale" ? ze.scaleNotes(ze.SCALES[i.scale]) : wr[i.mode === "caged" ? "maj" : i.chord].tones, Fd = (i, s) => qm(i).find(([u]) => u === s)?.[1], pf = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", ev = (i) => i.direction === "up" ? "ylöspäin" : "alaspäin";
function tv(i, s) {
  return s.choices === "note" ? "Valitse sävelnimi." : s.choices === "degree" ? "Valitse aste." : i.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function nv(i, s, u, c, f) {
  return s.choices === "degree" ? `Oikein! ${Ki(i.root, s.interval, s.degree)} on ${s.degree}. aste.` : pf(i) ? `Oikein! ${s.degree}. aste on ${Ki(i.root, s.interval, s.degree)}.` : i.mode === "interval" ? `Oikein! ${Ie(s.reference, i.flats, !0)} → ${s.name} on ${Gi[s.interval]} ${ev(s)}.` : i.mode === "notes" ? u === "board" && f ? `Oikein! ${Ie(f.midi, i.flats)} on ${Dd[f.string]}: ${Er(f.fret)}.` : `Oikein! Soitit sävelen ${Ie(c, i.flats, !0)}.` : `Oikein! Sävel oli ${s.name}.`;
}
function rv(i, s, u, c, f) {
  if (u === "note") return `Ei ${Ie(c, i.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (u === "degree") return `Ei ${Fd(i, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!f) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = Ke(f.midi) === Ke(s.midi);
  if (i.mode === "notes")
    return f.string !== s.position.string ? `Tuo on ${fn[f.string]}-kieli. Etsi sävel ${wo[s.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${s.name}.` : `Tuo on ${Ie(f.midi, i.flats)}. Etsi ${s.name}.`;
  if (pf(i)) {
    const p = Ke(f.midi - i.root), v = Fd(i, p), S = i.mode === "scale" ? "asteikkoon" : "sointuun";
    return v ? h && s.check === "pitch" && f.midi !== s.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${s.name}.` : h ? `Oikea sävel, mutta ${i.mode === "caged" ? "muodon" : i.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${s.degree}. aste sen sisältä.` : `Tuo on ${Ki(i.root, p, v)} eli ${v}. aste. Etsi ${s.degree}. aste.` : `Tuo on ${Ie(f.midi, i.flats)}, joka ei kuulu ${S}. Etsi ${s.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ie(f.midi, i.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function iv(i, s, u) {
  const c = Ie(u, i.flats, !0);
  return Ke(u) === Ke(s.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function mf(i, s = !1) {
  const u = i.split(":"), c = (p) => Number(u[p]), f = (...p) => p.every((v) => Number.isInteger(c(v))), h = (p, v) => fn[p] ? `${fn[p]}-kieli, ${Er(v)}` : null;
  switch (u[0]) {
    case "notes":
      return f(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return f(1) ? `Kuultu sävel ${Ie(c(1), s)}${u[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return u.length === 2 && f(1) ? `Kuule ja toista: ${Ie(c(1), s, !0)}` : f(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return f(1) && Gi[c(1)] ? `${Gi[c(1)]} ${u[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = u[2];
      if (!f(1, 3) || !wr[p]) return null;
      const v = wr[p].tones.find(([S]) => S === c(3))?.[1];
      return v ? `${zd(c(1), p)}: ${v}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = ze.SCALES[u[2]];
      if (!f(1) || !p) return null;
      const v = `${ar(c(1))}-${p.name}`;
      if (u.length === 5 && f(3)) {
        const S = ze.scaleNotes(p).find(([R]) => R === c(3))?.[1];
        return S ? `${v}: ${S}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return f(3, 4) && h(c(3), c(4)) ? `${v}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!f(1) || !"CAGED".includes(u[2] ?? "?")) return null;
      const p = `${ar(c(1))}-duuri, ${u[2]}-muoto`;
      if (u.length === 4 && f(3)) {
        const v = wr.maj.tones.find(([S]) => S === c(3))?.[1];
        return v ? `${p}: ${v}. aste` : null;
      }
      return f(3, 4) && h(c(3), c(4)) ? `${p}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Od(i) {
  return Object.entries(i).flatMap(([s, u]) => {
    const [c, f, h, ...p] = s.split(":");
    return !p.length || !["solo", "guided"].includes(h) ? [] : [{ key: s, input: c, check: f, guided: h === "guided", item: p.join(":"), mode: p[0], stat: u }];
  });
}
const jo = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", sv = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function av(i) {
  const s = i.solo === void 0 ? `${i.first}/${i.count} heti oikein` : i.solo ? `itsenäisesti ${i.soloFirst ?? 0}/${i.solo} heti oikein${i.count > i.solo ? ` · ${i.count - i.solo} vihjeen kanssa` : ""}` : `${i.count} vastausta vihjeen kanssa`;
  return `${new Date(i.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${qr(i.mode)}${i.hints ? ` · ${ka[i.hints].title}` : ""} · ${s} · keskimäärin ${jo(i.ms / Math.max(1, i.count))}${i.complete ? "" : " · keskeytetty"}`;
}
function lv({ store: i, s, locked: u, changed: c }) {
  const [f, h] = b.useState(""), p = b.useRef(null), { recent: v, sessions: S, stats: R } = i.data, k = Nr(s), C = Vd(s), L = [...new Set(v.map((N) => N.mode))].map((N) => {
    const V = v.filter((D) => D.mode === N);
    return { mode: N, ...fo(V), last: Math.max(...V.map((D) => D.at)) };
  }).sort((N, V) => V.last - N.last), F = Od(R).filter((N) => !N.guided && N.mode === s.mode && N.input === k && N.check === C && N.stat.attempts >= 3).map((N) => ({ ...N, score: Eo(N.stat), text: mf(N.item, s.flats) })).filter((N) => N.text && N.score < 0.8).sort((N, V) => N.score - V.score).slice(0, 5), O = Od(R).reduce((N, V) => N + V.stat.attempts, 0);
  function w() {
    const N = new Blob([JSON.stringify(i.data, null, 2)], { type: "application/json" }), V = URL.createObjectURL(N), D = document.createElement("a");
    D.href = V, D.download = "musiikin-kartta-harjoittelu.json", D.click(), setTimeout(() => URL.revokeObjectURL(V), 1e3);
  }
  async function E(N) {
    if (N)
      try {
        const V = await N.text();
        if (O && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        i.restore(V), h("Varmuuskopio palautettu."), c();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function I() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (i.clearProgress(), h("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    O === 0 ? /* @__PURE__ */ l.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        O,
        " vastattua kysymystä · ",
        S.length,
        " harjoituskertaa. ",
        /* @__PURE__ */ l.jsx("strong", { children: "Itsenäisesti" }),
        " tarkoittaa vastausta ilman vihjettä, ",
        /* @__PURE__ */ l.jsx("strong", { children: "heti oikein" }),
        " oikeaa vastausta ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "fret-scroll", children: /* @__PURE__ */ l.jsxs("table", { className: "summary-table", children: [
        /* @__PURE__ */ l.jsx("caption", { children: "Viimeisimmät vastaukset harjoituksittain" }),
        /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Harjoitus" }),
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Vastauksia" }),
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Itsenäisesti heti oikein" }),
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Vihjeen kanssa" }),
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Keskiaika" })
        ] }) }),
        /* @__PURE__ */ l.jsx("tbody", { children: L.map((N) => /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsx("th", { scope: "row", children: qr(N.mode) }),
          /* @__PURE__ */ l.jsx("td", { children: N.count }),
          /* @__PURE__ */ l.jsx("td", { children: N.solo ? `${N.soloFirst}/${N.solo} · ${Math.round(N.soloFirst / N.solo * 100)} %` : "–" }),
          /* @__PURE__ */ l.jsx("td", { children: N.guided }),
          /* @__PURE__ */ l.jsx("td", { children: jo(N.ms / N.count) })
        ] }, N.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ l.jsx("h3", { children: "Seuraavaksi" }),
    F.length ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        qr(s.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ l.jsx("ul", { children: F.map((N) => /* @__PURE__ */ l.jsxs("li", { children: [
        N.text,
        " · viime aikoina ",
        Math.round(Wi(N.stat) * 100),
        " % heti oikein · ",
        jo(Qi(N.stat))
      ] }, N.key)) })
    ] }) : /* @__PURE__ */ l.jsx("p", { children: O ? `Harjoituksessa ${qr(s.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        sv[s.input],
        ") ja tarkistuksella (",
        s.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ l.jsx(_p, { area: { strings: s.strings, min: s.min, max: s.max, fixed: "" }, stats: R, input: s.input, check: s.check, flats: s.flats })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      S.length ? /* @__PURE__ */ l.jsx("ul", { children: S.slice(-10).reverse().map((N) => /* @__PURE__ */ l.jsx("li", { children: av(N) }, N.id)) }) : /* @__PURE__ */ l.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ l.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ l.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (N) => {
          E(N.target.files?.[0]);
        } }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u || !O, onClick: I, children: "Poista harjoitustulokset" })
      ] }),
      f && /* @__PURE__ */ l.jsx("p", { role: "status", children: f })
    ] }),
    i.warning && /* @__PURE__ */ l.jsx("p", { role: "status", className: "error", children: i.warning })
  ] });
}
function ov() {
  try {
    return new hd(localStorage);
  } catch {
    return new hd();
  }
}
const Id = (i) => ({ minRms: i.minRms, minClarity: i.clarity, stabilityMs: i.stability, centsTolerance: i.cents }), uv = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", cv = [0, 2, 4, 5, 7, 9, 11];
function dv(i) {
  return i.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : i.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : i.mode === "chord" ? i.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : i.mode === "scale" ? ["mp", "majp"].includes(i.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function fv() {
  const [i] = b.useState(ov), [s, u] = b.useState(() => yp(location.search, i.data.settings)), [, c] = b.useReducer(($) => $ + 1, 0), f = b.useRef(null), h = b.useRef(new ym()), p = b.useRef(new nf()), v = b.useRef(0), S = b.useRef(), R = b.useRef(), k = b.useRef(null), C = b.useRef(0), L = b.useRef(null), F = b.useRef(s);
  F.current = s;
  const [O, w] = b.useState({ phase: "off", purpose: "none" }), E = b.useRef(O), I = ($) => {
    E.current = $, w($);
  }, [N, V] = b.useState(null), [D, ee] = b.useState(null), [Z, M] = b.useState(null), [B, re] = b.useState(0), [ce, Ce] = b.useState([]), [Ae, Te] = b.useState(!1), [Le, H] = b.useState(!1), [ie, ae] = b.useState(""), [A, Y] = b.useState("info"), [J, g] = b.useState(""), [z, ve] = b.useState(0), [we, _e] = b.useState([]), [Ee, Q] = b.useState([]), [q, j] = b.useState(null), [G, te] = b.useState(!1), [ne, le] = b.useState(""), [fe, Me] = b.useState(""), [je, $e] = b.useState(() => {
    const $ = new URLSearchParams(location.search);
    return $.has("tila") || $.has("vanha") ? "legacy" : lf($.get("kappale")) ? "songs" : null;
  }), Ye = () => {
    nm().then(Ce).catch(() => {
    });
  };
  function Be() {
    clearTimeout(R.current), k.current = null, te(!1);
  }
  function Ge() {
    V(null), ee(null), M(null);
  }
  function Ue() {
    h.current.stop(), Be(), I({ phase: "off", purpose: "none" }), Ge();
  }
  async function yt($) {
    if (h.current.active && E.current.phase === "on")
      return Be(), I({ ...E.current, purpose: $ }), h.current.rearm(), !0;
    I({ phase: "requesting", purpose: $ }), Ge();
    try {
      const ue = await h.current.start(F.current.device, {
        ...Id(F.current),
        onFrame: (ye) => Tt.current.frame(ye),
        onStableNote: (ye) => Tt.current.stable(ye)
      }, () => Tt.current.lost());
      return ue ? (I({ phase: "on", purpose: $, info: ue }), Ye(), !0) : !1;
    } catch (ue) {
      return I({ phase: "error", purpose: "none", error: km(ue) }), !1;
    }
  }
  function Je($) {
    k.current?.push($.rms);
    const ue = performance.now();
    ue - C.current < 66 || (C.current = ue, V($), re(ue), $.midi !== void 0 && $.frequency !== void 0 && ee({ midi: $.midi, frequency: $.frequency, cents: $.cents ?? 0, clarity: $.clarity ?? 0, tuned: $.status === "pitch", at: ue }));
  }
  function be($) {
    E.current.purpose === "test" ? M($) : E.current.purpose === "round" && Pe($.midi, "mic", void 0, $.heldMs);
  }
  function tt() {
    const $ = E.current.purpose === "round";
    Be(), Ge(), I({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const ue = f.current;
    $ && ue && ["active", "feedback", "paused"].includes(ue.phase) && (ct(), H(!1), ue.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Tt = b.useRef({ frame: Je, stable: be, lost: tt });
  Tt.current = { frame: Je, stable: be, lost: tt };
  function Kt($) {
    const ue = pa($), ye = ue.device !== F.current.device;
    F.current = ue, u(ue), i.settings(ue), g(""), h.current.active && (ye && E.current.purpose === "test" ? (Ue(), yt("test")) : h.current.setOptions(Id(ue)));
  }
  function zt($) {
    Me(""), f.current = null, $e($);
  }
  function nn() {
    le(""), yt("test");
  }
  function Gt() {
    E.current.phase !== "on" || E.current.purpose !== "test" || (Be(), k.current = [], te(!0), le("Mitataan taustakohinaa kolme sekuntia. Älä soita."), R.current = setTimeout(() => {
      const $ = k.current ?? [];
      if (Be(), $.length < 10) {
        le("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: ue, noise: ye, loud: Yt } = gm($);
      Kt({ ...F.current, minRms: ue }), le(`Taustakohina on ${Math.round(ii(ye))} dB ja äänikynnys nyt ${Math.round(ii(ue))} dB. ${Yt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function ct() {
    v.current++, clearTimeout(S.current), p.current.stop();
  }
  function In($, ue) {
    if (!$.results.length) return;
    const ye = fo($.results);
    i.session({
      id: $.id,
      mode: $.settings.mode,
      count: ye.count,
      first: ye.first,
      ms: ye.ms,
      solo: ye.solo,
      soloFirst: ye.soloFirst,
      hints: $.settings.hints,
      at: Date.now(),
      complete: ue
    });
  }
  async function ke($) {
    if (!$.question?.sound.length || $.phase !== "active") return;
    ct();
    const ue = v.current;
    $.pause(), h.current.pause(), H(!0), Y("info"), ae("Kuuntele…"), c();
    try {
      await p.current.play($.question.sound);
    } catch {
      ue === v.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    ue !== v.current || f.current !== $ || ($.resume(), h.current.resume(), H(!1), ae(""), c());
  }
  async function Wt($) {
    _e([]), Q([]), j(null), g(""), ve($.hintLevel), h.current.rearm(), Y("info"), ae(""), c(), $.question?.sound.length && await ke($);
  }
  async function Se() {
    const $ = F.current, ue = uo($);
    if (ue) {
      g(ue);
      return;
    }
    ct();
    const ye = v.current;
    if (g(""), le(""), Me(""), oa($)) {
      Te(!0);
      const lt = await yt("round");
      if (ye !== v.current) return;
      if (Te(!1), !lt) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else E.current.phase !== "off" && Ue();
    const Yt = new Ip($, () => i.data.stats, (lt) => i.record(lt));
    try {
      Yt.start();
    } catch (lt) {
      E.current.purpose === "round" && Ue(), g(lt instanceof Error ? lt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    f.current = Yt, requestAnimationFrame(() => L.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Wt(Yt);
  }
  function Re() {
    ct(), Te(!1), Ue();
  }
  function Pe($, ue, ye, Yt = 0) {
    const lt = f.current, or = lt?.question;
    if (!lt || !or || lt.phase !== "active") return;
    const zn = lt.answer($, ue, ye, Yt);
    if (zn !== "ignored") {
      if (zn === "candidate")
        j($), Y("bad"), ae(iv(lt.settings, or, $));
      else if (zn === "wrong")
        ye ? _e((ur) => [...ur, ye]) : Q((ur) => [...ur, $]), Y("bad"), ae(rv(lt.settings, or, ue, $, ye));
      else if (j(null), Y("good"), ae(nv(lt.settings, or, ue, $, ye)), In(lt, !1), lt.settings.advance) {
        const ur = v.current;
        S.current = setTimeout(() => {
          ur === v.current && We();
        }, ue === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function We() {
    const $ = f.current;
    if (!(!$ || $.phase !== "feedback")) {
      ct();
      try {
        $.next();
      } catch (ue) {
        Ze(!1), g(ue instanceof Error ? ue.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if ($.phase === "done") {
        Ze(!0);
        return;
      }
      await Wt($);
    }
  }
  function Ze($ = !1) {
    ct(), H(!1), Te(!1), (E.current.purpose === "round" || E.current.phase === "requesting") && Ue();
    const ue = f.current;
    ue && (ue.stop(), In(ue, $)), j(null), ve(0), _e([]), Q([]), g(""), Me($ ? "complete" : "stopped"), Y("info"), ae(""), c();
  }
  function Qt() {
    const $ = f.current;
    if (!$ || !["active", "feedback", "paused"].includes($.phase)) return;
    ct(), H(!1), $.pause();
    const ue = E.current.purpose === "round";
    ue && Ue(), Y("info"), ae(`Harjoitus on tauolla.${ue ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function gt() {
    const $ = f.current;
    if (!$ || $.phase !== "paused" || Le) return;
    ct();
    const ue = v.current;
    if (g(""), oa($.settings)) {
      Te(!0);
      const ye = await yt("round");
      if (ue !== v.current) return;
      if (Te(!1), !ye) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    $.resume(), Y("info"), ae(""), c(), $.phase === "active" && (h.current.rearm(), $.question?.sound.length && await ke($));
  }
  function bt($) {
    const ue = f.current;
    !ue || ue.phase !== "active" || (ue.useHint($), ve($), c());
  }
  const hn = b.useRef({ hidden: () => {
  }, restored: () => {
  } });
  hn.current = {
    hidden: () => {
      const $ = f.current;
      $ && ["active", "feedback"].includes($.phase) || Le ? Qt() : E.current.phase !== "off" && E.current.phase !== "error" && (ct(), Te(!1), Ue());
    },
    restored: () => {
      Te(!1), H(!1), I({ phase: "off", purpose: "none" }), Ge(), c();
    }
  }, b.useEffect(() => {
    Ye();
    const $ = () => Ye();
    navigator.mediaDevices?.addEventListener?.("devicechange", $);
    const ue = () => {
      v.current++, clearTimeout(S.current), clearTimeout(R.current), h.current.stop(), p.current.stop(), vm(), f.current?.pause();
    }, ye = () => {
      document.hidden && hn.current.hidden();
    }, Yt = (lt) => {
      lt.persisted && hn.current.restored();
    };
    return document.addEventListener("visibilitychange", ye), window.addEventListener("pagehide", ue), window.addEventListener("pageshow", Yt), () => {
      ue(), navigator.mediaDevices?.removeEventListener?.("devicechange", $), document.removeEventListener("visibilitychange", ye), window.removeEventListener("pagehide", ue), window.removeEventListener("pageshow", Yt);
    };
  }, []);
  const pn = b.useRef(null), Dn = `${f.current?.id}:${f.current?.index}:${f.current?.phase}:${Le}`;
  b.useEffect(() => {
    const $ = f.current, ue = L.current, ye = document.activeElement;
    !$ || !ue || !(ye === document.body || ue.contains(ye)) || ($.phase === "feedback" ? pn.current?.focus({ preventScroll: !0 }) : $.phase === "active" && !Le && (ye === document.body || ye === pn.current) && ue.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [Dn]);
  const Oe = f.current, nt = !!Oe && ["active", "paused", "feedback"].includes(Oe.phase), Qe = nt ? Oe.settings : s, pt = nt ? Oe.question : void 0, Mt = !!pt && !!Oe?.answered, mn = nt && Oe.phase === "paused" && !Le && !Mt, vn = nt && Oe.phase === "active" && !Le, li = nt ? null : uo(s), wn = nt || Ae, lr = Cr(Qe), _r = Mp(Qe), En = pt && !Mt ? z : 0, oi = pt ? Op(Qe, pt, Mt ? 2 : En) : { marks: [], text: "" }, Zi = [...new Map([...oi.marks, ...Mt ? [] : we.map(($) => ({ ...$, label: Ie($.midi, Qe.flats), kind: "wrong" }))].map(($) => [it($), $])).values()], ga = nt && oa(Qe), Nn = !!pt && !mn && (pt.choices === "position" || Zi.length > 0), xt = Oe ? fo(Oe.results) : null, qi = !Oe || Qe.hints !== "fade" ? "" : Oe.index <= 3 ? " · vastaus näkyy" : Oe.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", es = Oe && !nt ? Oe.results.filter(($) => $.errors > 0 || $.hint) : [], [ts, ns] = dv(Qe), Cn = /* @__PURE__ */ l.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ l.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ l.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), _n = i.data.notice === "hints-default" && /* @__PURE__ */ l.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
    /* @__PURE__ */ l.jsxs("p", { children: [
      /* @__PURE__ */ l.jsx("strong", { children: "Harjoittelutapa on muuttunut." }),
      " Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt ",
      /* @__PURE__ */ l.jsx("em", { children: "Testaa osaamistasi" }),
      ", ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse ",
      /* @__PURE__ */ l.jsx("em", { children: "Opettele" }),
      " tai ",
      /* @__PURE__ */ l.jsx("em", { children: "Vähennä vihjeitä" }),
      "."
    ] }),
    /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
      i.dismissNotice(), c();
    }, children: "Selvä" })
  ] });
  return !nt && je === null ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(zp, { onSelect: zt })
  ] }) : !nt && je === "scales" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(jm, { onBack: () => $e(null) })
  ] }) : !nt && je === "ear" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(wm, { onBack: () => $e(null) })
  ] }) : !nt && je === "chords" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(Cm, { onBack: () => $e(null) })
  ] }) : !nt && je === "songs" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(Ym, { onBack: () => $e(null) })
  ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsxs("a", { href: ts, children: [
      "Lue tämän harjoituksen teoria: ",
      ns,
      " →"
    ] }) }),
    je !== "legacy" && /* @__PURE__ */ l.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: () => {
        nt && Ze(), $e(null);
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ l.jsx("h2", { children: je === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ l.jsx("p", { children: je === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    nt ? /* @__PURE__ */ l.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ l.jsx("strong", { children: qr(Qe.mode) }),
      " · ",
      vd(Qe)
    ] }) : je === "legacy" ? /* @__PURE__ */ l.jsx(kd, { s, change: Kt, locked: wn, problem: li }) : /* @__PURE__ */ l.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ l.jsx(kd, { s, change: Kt, locked: wn, problem: li })
    ] }),
    !nt && (je === "legacy" || oa(s)) && /* @__PURE__ */ l.jsx(
      Zm,
      {
        mic: O,
        frame: N,
        heard: D,
        accepted: Z,
        now: B,
        s,
        change: Kt,
        devices: ce,
        locked: Ae,
        calibrating: G,
        calibration: ne,
        onTest: nn,
        onStop: Ue,
        onCalibrate: Gt
      }
    ),
    /* @__PURE__ */ l.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: L, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h2", { id: "session-title", children: qr(Qe.mode) }),
        /* @__PURE__ */ l.jsx("span", { "data-testid": "round-status", children: nt ? `Kysymys ${Oe.index}${Oe.total ? " / " + Oe.total : " · vapaa harjoittelu"} · ${ka[Qe.hints].title}${qi}${Oe.phase === "paused" && !Le ? " · tauolla" : ""}` : fe === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !nt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        Oe && Oe.results.length > 0 && xt ? /* @__PURE__ */ l.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ l.jsx("h3", { children: fe === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ l.jsxs("dl", { children: [
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ l.jsx("dd", { "data-testid": "summary-solo", children: xt.solo ? `${xt.soloFirst} / ${xt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ l.jsx("dd", { "data-testid": "summary-guided", children: xt.guided })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ l.jsx("dd", { children: uv(xt.ms / xt.count) })
            ] })
          ] }),
          xt.solo === 0 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          es.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ l.jsx("ul", { children: [...new Set(es.map(($) => mf($.item, s.flats)).filter(Boolean))].slice(0, 6).map(($) => /* @__PURE__ */ l.jsx("li", { children: $ }, $)) })
          ] })
        ] }) : /* @__PURE__ */ l.jsx("p", { className: "question idle", children: vd(s) }),
        /* @__PURE__ */ l.jsx("div", { className: "action-row", children: Ae ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !!li, onClick: () => {
          Se();
        }, children: Oe?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Oe && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      nt && pt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: mn ? "Harjoitus on tauolla." : pt.prompt }),
        /* @__PURE__ */ l.jsx("p", { className: "how", "data-testid": "instruction", children: mn ? "Kysymys palaa näkyviin, kun jatkat." : Le ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : tv(Qe, pt) }),
        Oe.hintLevel > 0 && !Mt && /* @__PURE__ */ l.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Qe.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        ga && /* @__PURE__ */ l.jsx(Xm, { mic: O, frame: N, heard: D, s: Qe, now: B }),
        pt.choices === "note" && !mn && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Qe.accidentals ? Array.from({ length: 12 }, ($, ue) => ue) : cv).map(($) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ee.includes($) ? "wrong" : Mt && $ === pt.midi % 12 ? "right" : "", disabled: !vn || Ee.includes($), onClick: () => Pe($, "note"), children: Ie($, Qe.flats) }, $)) }),
        pt.choices === "degree" && !mn && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Qe.mode === "scale" ? ze.scaleNotes(ze.SCALES[Qe.scale]) : wr[Qe.chord].tones).map(([$, ue]) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ee.includes($) ? "wrong" : Mt && $ === pt.interval ? "right" : "", disabled: !vn || Ee.includes($), onClick: () => Pe($, "degree"), children: ue }, $)) }),
        Nn && /* @__PURE__ */ l.jsx(
          Yi,
          {
            area: _r,
            marks: Zi,
            disabled: !vn || pt.choices !== "position" || Qe.input === "mic",
            onAnswer: ($) => Pe($.midi, "board", $),
            caption: lr.fixed === "shape" ? `${Qe.shape}-muodon alue` : lr.fixed === "box" ? `Boksin ${Qe.box} alue` : "Otelauta"
          }
        ),
        !Mt && !mn && En > 0 && oi.text && /* @__PURE__ */ l.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: oi.text }),
        /* @__PURE__ */ l.jsx("p", { className: `feedback ${A}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ie }),
        q !== null && Oe.phase === "active" && /* @__PURE__ */ l.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
            Oe.confirmWrong(), j(null), ae("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ l.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        J && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: J }),
        /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
          Oe.phase === "feedback" && /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", ref: pn, onClick: () => {
            We();
          }, children: Oe.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Oe.phase === "active" && !Mt && !Le && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            En === 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => bt(Math.max(1, Oe.hintLevel)), children: Oe.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            En === 1 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => bt(2), children: "Näytä vastaus" }),
            En > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => ve(0), children: "Piilota vihje" })
          ] }),
          pt.sound.length > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: !vn, onClick: () => {
            ke(Oe);
          }, children: "Kuuntele uudelleen" }),
          Oe.phase === "paused" && !Le ? /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: Ae, onClick: () => {
            gt();
          }, children: Ae ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ l.jsx("button", { type: "button", onClick: Qt, children: "Tauko" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => Ze(), children: "Lopeta harjoitus" })
        ] }),
        Oe.phase === "feedback" && Qe.advance && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "tally", children: xt?.count ? `Vastattu ${xt.count} · itsenäisesti heti oikein ${xt.soloFirst}/${xt.solo}${xt.guided ? ` · vihjeen kanssa ${xt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !nt && J && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: J })
    ] }),
    !nt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { className: "link-row", children: [
        s.mode === "scale" && /* @__PURE__ */ l.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(ze.CHROM[s.root])}&asteikko=${s.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ l.jsx("a", { href: gp(s), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ l.jsx(lv, { store: i, s, locked: wn, changed: () => {
        const $ = pa(i.data.settings);
        F.current = $, u($), c();
      } }),
      /* @__PURE__ */ l.jsxs("details", { className: "privacy", children: [
        /* @__PURE__ */ l.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
        /* @__PURE__ */ l.jsx("p", { children: "Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa." }),
        /* @__PURE__ */ l.jsx("p", { children: "Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi." }),
        /* @__PURE__ */ l.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen." }),
        /* @__PURE__ */ l.jsxs("p", { children: [
          "Tunnistus on sovitettu ",
          /* @__PURE__ */ l.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
          " (MIT) ja käyttää Pitchyä. ",
          /* @__PURE__ */ l.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
          " · ",
          /* @__PURE__ */ l.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
          "."
        ] })
      ] })
    ] })
  ] });
}
cp.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ l.jsx(fv, {}));
//# sourceMappingURL=app.js.map
