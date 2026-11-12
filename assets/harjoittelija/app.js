function qh(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ql = { exports: {} }, Bi = {}, eo = { exports: {} }, Fe = {};
var Zc;
function em() {
  if (Zc) return Fe;
  Zc = 1;
  var i = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), m = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), C = Symbol.iterator;
  function F(g) {
    return g === null || typeof g != "object" ? null : (g = C && g[C] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var D = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, V = Object.assign, w = {};
  function R(g, I, ve) {
    this.props = g, this.context = I, this.refs = w, this.updater = ve || D;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(g, I) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, I, "setState");
  }, R.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function U() {
  }
  U.prototype = R.prototype;
  function N(g, I, ve) {
    this.props = g, this.context = I, this.refs = w, this.updater = ve || D;
  }
  var P = N.prototype = new U();
  P.constructor = N, V(P, R.prototype), P.isPureReactComponent = !0;
  var G = Array.isArray, Z = Object.prototype.hasOwnProperty, ee = { current: null }, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function z(g, I, ve) {
    var we, _e = {}, Ne = null, j = null;
    if (I != null) for (we in I.ref !== void 0 && (j = I.ref), I.key !== void 0 && (Ne = "" + I.key), I) Z.call(I, we) && !T.hasOwnProperty(we) && (_e[we] = I[we]);
    var b = arguments.length - 2;
    if (b === 1) _e.children = ve;
    else if (1 < b) {
      for (var O = Array(b), q = 0; q < b; q++) O[q] = arguments[q + 2];
      _e.children = O;
    }
    if (g && g.defaultProps) for (we in b = g.defaultProps, b) _e[we] === void 0 && (_e[we] = b[we]);
    return { $$typeof: i, type: g, key: Ne, ref: j, props: _e, _owner: ee.current };
  }
  function ne(g, I) {
    return { $$typeof: i, type: g.type, key: I, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function ie(g) {
    return typeof g == "object" && g !== null && g.$$typeof === i;
  }
  function Ee(g) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(ve) {
      return I[ve];
    });
  }
  var Le = /\/+/g;
  function Te(g, I) {
    return typeof g == "object" && g !== null && g.key != null ? Ee("" + g.key) : I.toString(36);
  }
  function Me(g, I, ve, we, _e) {
    var Ne = typeof g;
    (Ne === "undefined" || Ne === "boolean") && (g = null);
    var j = !1;
    if (g === null) j = !0;
    else switch (Ne) {
      case "string":
      case "number":
        j = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case i:
          case a:
            j = !0;
        }
    }
    if (j) return j = g, _e = _e(j), g = we === "" ? "." + Te(j, 0) : we, G(_e) ? (ve = "", g != null && (ve = g.replace(Le, "$&/") + "/"), Me(_e, I, ve, "", function(q) {
      return q;
    })) : _e != null && (ie(_e) && (_e = ne(_e, ve + (!_e.key || j && j.key === _e.key ? "" : ("" + _e.key).replace(Le, "$&/") + "/") + g)), I.push(_e)), 1;
    if (j = 0, we = we === "" ? "." : we + ":", G(g)) for (var b = 0; b < g.length; b++) {
      Ne = g[b];
      var O = we + Te(Ne, b);
      j += Me(Ne, I, ve, O, _e);
    }
    else if (O = F(g), typeof O == "function") for (g = O.call(g), b = 0; !(Ne = g.next()).done; ) Ne = Ne.value, O = we + Te(Ne, b++), j += Me(Ne, I, ve, O, _e);
    else if (Ne === "object") throw I = String(g), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return j;
  }
  function K(g, I, ve) {
    if (g == null) return g;
    var we = [], _e = 0;
    return Me(g, we, "", "", function(Ne) {
      return I.call(ve, Ne, _e++);
    }), we;
  }
  function oe(g) {
    if (g._status === -1) {
      var I = g._result;
      I = I(), I.then(function(ve) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = ve);
      }, function(ve) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = ve);
      }), g._status === -1 && (g._status = 0, g._result = I);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var te = { current: null }, A = { transition: null }, Q = { ReactCurrentDispatcher: te, ReactCurrentBatchConfig: A, ReactCurrentOwner: ee };
  function J() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Fe.Children = { map: K, forEach: function(g, I, ve) {
    K(g, function() {
      I.apply(this, arguments);
    }, ve);
  }, count: function(g) {
    var I = 0;
    return K(g, function() {
      I++;
    }), I;
  }, toArray: function(g) {
    return K(g, function(I) {
      return I;
    }) || [];
  }, only: function(g) {
    if (!ie(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, Fe.Component = R, Fe.Fragment = u, Fe.Profiler = f, Fe.PureComponent = N, Fe.StrictMode = c, Fe.Suspense = S, Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, Fe.act = J, Fe.cloneElement = function(g, I, ve) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var we = V({}, g.props), _e = g.key, Ne = g.ref, j = g._owner;
    if (I != null) {
      if (I.ref !== void 0 && (Ne = I.ref, j = ee.current), I.key !== void 0 && (_e = "" + I.key), g.type && g.type.defaultProps) var b = g.type.defaultProps;
      for (O in I) Z.call(I, O) && !T.hasOwnProperty(O) && (we[O] = I[O] === void 0 && b !== void 0 ? b[O] : I[O]);
    }
    var O = arguments.length - 2;
    if (O === 1) we.children = ve;
    else if (1 < O) {
      b = Array(O);
      for (var q = 0; q < O; q++) b[q] = arguments[q + 2];
      we.children = b;
    }
    return { $$typeof: i, type: g.type, key: _e, ref: Ne, props: we, _owner: j };
  }, Fe.createContext = function(g) {
    return g = { $$typeof: m, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: h, _context: g }, g.Consumer = g;
  }, Fe.createElement = z, Fe.createFactory = function(g) {
    var I = z.bind(null, g);
    return I.type = g, I;
  }, Fe.createRef = function() {
    return { current: null };
  }, Fe.forwardRef = function(g) {
    return { $$typeof: k, render: g };
  }, Fe.isValidElement = ie, Fe.lazy = function(g) {
    return { $$typeof: v, _payload: { _status: -1, _result: g }, _init: oe };
  }, Fe.memo = function(g, I) {
    return { $$typeof: $, type: g, compare: I === void 0 ? null : I };
  }, Fe.startTransition = function(g) {
    var I = A.transition;
    A.transition = {};
    try {
      g();
    } finally {
      A.transition = I;
    }
  }, Fe.unstable_act = J, Fe.useCallback = function(g, I) {
    return te.current.useCallback(g, I);
  }, Fe.useContext = function(g) {
    return te.current.useContext(g);
  }, Fe.useDebugValue = function() {
  }, Fe.useDeferredValue = function(g) {
    return te.current.useDeferredValue(g);
  }, Fe.useEffect = function(g, I) {
    return te.current.useEffect(g, I);
  }, Fe.useId = function() {
    return te.current.useId();
  }, Fe.useImperativeHandle = function(g, I, ve) {
    return te.current.useImperativeHandle(g, I, ve);
  }, Fe.useInsertionEffect = function(g, I) {
    return te.current.useInsertionEffect(g, I);
  }, Fe.useLayoutEffect = function(g, I) {
    return te.current.useLayoutEffect(g, I);
  }, Fe.useMemo = function(g, I) {
    return te.current.useMemo(g, I);
  }, Fe.useReducer = function(g, I, ve) {
    return te.current.useReducer(g, I, ve);
  }, Fe.useRef = function(g) {
    return te.current.useRef(g);
  }, Fe.useState = function(g) {
    return te.current.useState(g);
  }, Fe.useSyncExternalStore = function(g, I, ve) {
    return te.current.useSyncExternalStore(g, I, ve);
  }, Fe.useTransition = function() {
    return te.current.useTransition();
  }, Fe.version = "18.3.1", Fe;
}
var qc;
function So() {
  return qc || (qc = 1, eo.exports = em()), eo.exports;
}
var ed;
function tm() {
  if (ed) return Bi;
  ed = 1;
  var i = So(), a = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(k, S, $) {
    var v, C = {}, F = null, D = null;
    $ !== void 0 && (F = "" + $), S.key !== void 0 && (F = "" + S.key), S.ref !== void 0 && (D = S.ref);
    for (v in S) c.call(S, v) && !h.hasOwnProperty(v) && (C[v] = S[v]);
    if (k && k.defaultProps) for (v in S = k.defaultProps, S) C[v] === void 0 && (C[v] = S[v]);
    return { $$typeof: a, type: k, key: F, ref: D, props: C, _owner: f.current };
  }
  return Bi.Fragment = u, Bi.jsx = m, Bi.jsxs = m, Bi;
}
var td;
function nm() {
  return td || (td = 1, ql.exports = tm()), ql.exports;
}
var l = nm(), B = So(), oa = {}, to = { exports: {} }, Dt = {}, no = { exports: {} }, ro = {};
var nd;
function rm() {
  return nd || (nd = 1, (function(i) {
    function a(A, Q) {
      var J = A.length;
      A.push(Q);
      e: for (; 0 < J; ) {
        var g = J - 1 >>> 1, I = A[g];
        if (0 < f(I, Q)) A[g] = Q, A[J] = I, J = g;
        else break e;
      }
    }
    function u(A) {
      return A.length === 0 ? null : A[0];
    }
    function c(A) {
      if (A.length === 0) return null;
      var Q = A[0], J = A.pop();
      if (J !== Q) {
        A[0] = J;
        e: for (var g = 0, I = A.length, ve = I >>> 1; g < ve; ) {
          var we = 2 * (g + 1) - 1, _e = A[we], Ne = we + 1, j = A[Ne];
          if (0 > f(_e, J)) Ne < I && 0 > f(j, _e) ? (A[g] = j, A[Ne] = J, g = Ne) : (A[g] = _e, A[we] = J, g = we);
          else if (Ne < I && 0 > f(j, J)) A[g] = j, A[Ne] = J, g = Ne;
          else break e;
        }
      }
      return Q;
    }
    function f(A, Q) {
      var J = A.sortIndex - Q.sortIndex;
      return J !== 0 ? J : A.id - Q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var m = Date, k = m.now();
      i.unstable_now = function() {
        return m.now() - k;
      };
    }
    var S = [], $ = [], v = 1, C = null, F = 3, D = !1, V = !1, w = !1, R = typeof setTimeout == "function" ? setTimeout : null, U = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function P(A) {
      for (var Q = u($); Q !== null; ) {
        if (Q.callback === null) c($);
        else if (Q.startTime <= A) c($), Q.sortIndex = Q.expirationTime, a(S, Q);
        else break;
        Q = u($);
      }
    }
    function G(A) {
      if (w = !1, P(A), !V) if (u(S) !== null) V = !0, oe(Z);
      else {
        var Q = u($);
        Q !== null && te(G, Q.startTime - A);
      }
    }
    function Z(A, Q) {
      V = !1, w && (w = !1, U(z), z = -1), D = !0;
      var J = F;
      try {
        for (P(Q), C = u(S); C !== null && (!(C.expirationTime > Q) || A && !Ee()); ) {
          var g = C.callback;
          if (typeof g == "function") {
            C.callback = null, F = C.priorityLevel;
            var I = g(C.expirationTime <= Q);
            Q = i.unstable_now(), typeof I == "function" ? C.callback = I : C === u(S) && c(S), P(Q);
          } else c(S);
          C = u(S);
        }
        if (C !== null) var ve = !0;
        else {
          var we = u($);
          we !== null && te(G, we.startTime - Q), ve = !1;
        }
        return ve;
      } finally {
        C = null, F = J, D = !1;
      }
    }
    var ee = !1, T = null, z = -1, ne = 5, ie = -1;
    function Ee() {
      return !(i.unstable_now() - ie < ne);
    }
    function Le() {
      if (T !== null) {
        var A = i.unstable_now();
        ie = A;
        var Q = !0;
        try {
          Q = T(!0, A);
        } finally {
          Q ? Te() : (ee = !1, T = null);
        }
      } else ee = !1;
    }
    var Te;
    if (typeof N == "function") Te = function() {
      N(Le);
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), K = Me.port2;
      Me.port1.onmessage = Le, Te = function() {
        K.postMessage(null);
      };
    } else Te = function() {
      R(Le, 0);
    };
    function oe(A) {
      T = A, ee || (ee = !0, Te());
    }
    function te(A, Q) {
      z = R(function() {
        A(i.unstable_now());
      }, Q);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, i.unstable_continueExecution = function() {
      V || D || (V = !0, oe(Z));
    }, i.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < A ? Math.floor(1e3 / A) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, i.unstable_getFirstCallbackNode = function() {
      return u(S);
    }, i.unstable_next = function(A) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = F;
      }
      var J = F;
      F = Q;
      try {
        return A();
      } finally {
        F = J;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(A, Q) {
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
      var J = F;
      F = A;
      try {
        return Q();
      } finally {
        F = J;
      }
    }, i.unstable_scheduleCallback = function(A, Q, J) {
      var g = i.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? g + J : g) : J = g, A) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = J + I, A = { id: v++, callback: Q, priorityLevel: A, startTime: J, expirationTime: I, sortIndex: -1 }, J > g ? (A.sortIndex = J, a($, A), u(S) === null && A === u($) && (w ? (U(z), z = -1) : w = !0, te(G, J - g))) : (A.sortIndex = I, a(S, A), V || D || (V = !0, oe(Z))), A;
    }, i.unstable_shouldYield = Ee, i.unstable_wrapCallback = function(A) {
      var Q = F;
      return function() {
        var J = F;
        F = Q;
        try {
          return A.apply(this, arguments);
        } finally {
          F = J;
        }
      };
    };
  })(ro)), ro;
}
var rd;
function im() {
  return rd || (rd = 1, no.exports = rm()), no.exports;
}
var id;
function sm() {
  if (id) return Dt;
  id = 1;
  var i = So(), a = im();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), f = {};
  function h(e, t) {
    m(e, t), m(e + "Capture", t);
  }
  function m(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var k = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), S = Object.prototype.hasOwnProperty, $ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, C = {};
  function F(e) {
    return S.call(C, e) ? !0 : S.call(v, e) ? !1 : $.test(e) ? C[e] = !0 : (v[e] = !0, !1);
  }
  function D(e, t, n, r) {
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
  function V(e, t, n, r) {
    if (t === null || typeof t > "u" || D(e, t, n, r)) return !0;
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
  function w(e, t, n, r, s, o, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = d;
  }
  var R = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    R[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    R[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    R[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    R[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    R[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    R[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    R[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    R[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    R[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var U = /[\-:]([a-z])/g;
  function N(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      U,
      N
    );
    R[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(U, N);
    R[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(U, N);
    R[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    R[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), R.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    R[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function P(e, t, n, r) {
    var s = R.hasOwnProperty(t) ? R[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (V(t, n, s, r) && (n = null), r || s === null ? F(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var G = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Z = /* @__PURE__ */ Symbol.for("react.element"), ee = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), z = /* @__PURE__ */ Symbol.for("react.strict_mode"), ne = /* @__PURE__ */ Symbol.for("react.profiler"), ie = /* @__PURE__ */ Symbol.for("react.provider"), Ee = /* @__PURE__ */ Symbol.for("react.context"), Le = /* @__PURE__ */ Symbol.for("react.forward_ref"), Te = /* @__PURE__ */ Symbol.for("react.suspense"), Me = /* @__PURE__ */ Symbol.for("react.suspense_list"), K = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), te = /* @__PURE__ */ Symbol.for("react.offscreen"), A = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object" ? null : (e = A && e[A] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var J = Object.assign, g;
  function I(e) {
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
        } catch (M) {
          var r = M;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (M) {
          r = M;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (M) {
          r = M;
        }
        e();
      }
    } catch (M) {
      if (M && r && typeof M.stack == "string") {
        for (var s = M.stack.split(`
`), o = r.stack.split(`
`), d = s.length - 1, p = o.length - 1; 1 <= d && 0 <= p && s[d] !== o[p]; ) p--;
        for (; 1 <= d && 0 <= p; d--, p--) if (s[d] !== o[p]) {
          if (d !== 1 || p !== 1)
            do
              if (d--, p--, 0 > p || s[d] !== o[p]) {
                var y = `
` + s[d].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= d && 0 <= p);
          break;
        }
      }
    } finally {
      ve = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? I(e) : "";
  }
  function _e(e) {
    switch (e.tag) {
      case 5:
        return I(e.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
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
  function Ne(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case T:
        return "Fragment";
      case ee:
        return "Portal";
      case ne:
        return "Profiler";
      case z:
        return "StrictMode";
      case Te:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ee:
        return (e.displayName || "Context") + ".Consumer";
      case ie:
        return (e._context.displayName || "Context") + ".Provider";
      case Le:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case K:
        return t = e.displayName || null, t !== null ? t : Ne(e.type) || "Memo";
      case oe:
        t = e._payload, e = e._init;
        try {
          return Ne(e(t));
        } catch {
        }
    }
    return null;
  }
  function j(e) {
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
        return Ne(t);
      case 8:
        return t === z ? "StrictMode" : "Mode";
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
  function O(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function q(e) {
    var t = O(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return s.call(this);
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
  function de(e) {
    e._valueTracker || (e._valueTracker = q(e));
  }
  function ae(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = O(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function me(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function pe(e, t) {
    var n = t.checked;
    return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Pe(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = b(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function je(e, t) {
    t = t.checked, t != null && P(e, "checked", t, !1);
  }
  function $e(e, t) {
    je(e, t);
    var n = b(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Be(e, t.type, n) : t.hasOwnProperty("defaultValue") && Be(e, t.type, b(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
    (t !== "number" || me(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ge = Array.isArray;
  function Ue(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + b(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
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
    e._wrapperState = { initialValue: b(n) };
  }
  function ze(e, t) {
    var n = b(t.value), r = b(t.defaultValue);
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
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, s);
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
      var r = n.indexOf("--") === 0, s = ke(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
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
  function Ae(e, t) {
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
      t && (t = ws(t), Qt(e.stateNode, e.type, t));
    }
  }
  function mn(e) {
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
  function mt(e, t, n) {
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
    var r = ws(n);
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
  var pn = !1;
  if (k) try {
    var vn = {};
    Object.defineProperty(vn, "passive", { get: function() {
      pn = !0;
    } }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
  } catch {
    pn = !1;
  }
  function li(e, t, n, r, s, o, d, p, y) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, M);
    } catch (W) {
      this.onError(W);
    }
  }
  var wn = !1, lr = null, _r = !1, En = null, oi = { onError: function(e) {
    wn = !0, lr = e;
  } };
  function qi(e, t, n, r, s, o, d, p, y) {
    wn = !1, lr = null, li.apply(oi, arguments);
  }
  function ga(e, t, n, r, s, o, d, p, y) {
    if (qi.apply(this, arguments), wn) {
      if (wn) {
        var M = lr;
        wn = !1, lr = null;
      } else throw Error(u(198));
      _r || (_r = !0, En = M);
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
  function es(e) {
    if (Nn(e) !== e) throw Error(u(188));
  }
  function ts(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nn(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (r = s.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === n) return es(s), e;
          if (o === r) return es(s), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) n = s, r = o;
      else {
        for (var d = !1, p = s.child; p; ) {
          if (p === n) {
            d = !0, n = s, r = o;
            break;
          }
          if (p === r) {
            d = !0, r = s, n = o;
            break;
          }
          p = p.sibling;
        }
        if (!d) {
          for (p = o.child; p; ) {
            if (p === n) {
              d = !0, n = o, r = s;
              break;
            }
            if (p === r) {
              d = !0, r = o, n = s;
              break;
            }
            p = p.sibling;
          }
          if (!d) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function ns(e) {
    return e = ts(e), e !== null ? rs(e) : null;
  }
  function rs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = rs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Cn = a.unstable_scheduleCallback, _n = a.unstable_cancelCallback, L = a.unstable_shouldYield, le = a.unstable_requestPaint, ye = a.unstable_now, Yt = a.unstable_getCurrentPriorityLevel, lt = a.unstable_ImmediatePriority, or = a.unstable_UserBlockingPriority, zn = a.unstable_NormalPriority, ur = a.unstable_LowPriority, To = a.unstable_IdlePriority, is = null, kn = null;
  function mf(e) {
    if (kn && typeof kn.onCommitFiberRoot == "function") try {
      kn.onCommitFiberRoot(is, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var rn = Math.clz32 ? Math.clz32 : kf, pf = Math.log, vf = Math.LN2;
  function kf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (pf(e) / vf | 0) | 0;
  }
  var ss = 64, as = 4194304;
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
  function ls(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, s = e.suspendedLanes, o = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var p = d & ~s;
      p !== 0 ? r = ui(p) : (o &= d, o !== 0 && (r = ui(o)));
    } else d = n & ~s, d !== 0 ? r = ui(d) : o !== 0 && (r = ui(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & s) === 0 && (s = r & -r, o = t & -t, s >= o || s === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - rn(t), s = 1 << n, r |= e[n], t &= ~s;
    return r;
  }
  function yf(e, t) {
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
  function gf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var d = 31 - rn(o), p = 1 << d, y = s[d];
      y === -1 ? ((p & n) === 0 || (p & r) !== 0) && (s[d] = yf(p, t)) : y <= t && (e.expiredLanes |= p), o &= ~p;
    }
  }
  function xa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Mo() {
    var e = ss;
    return ss <<= 1, (ss & 4194240) === 0 && (ss = 64), e;
  }
  function ja(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ci(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - rn(t), e[t] = n;
  }
  function xf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - rn(n), o = 1 << s;
      t[s] = 0, r[s] = -1, e[s] = -1, n &= ~o;
    }
  }
  function Sa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - rn(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  var He = 0;
  function Po(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ao, wa, Ro, Lo, $o, Ea = !1, os = [], bn = null, Vn = null, Bn = null, di = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), Un = [], jf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
  function hi(e, t, n, r, s, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [s] }, t !== null && (t = _i(t), t !== null && wa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function Sf(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return bn = hi(bn, e, t, n, r, s), !0;
      case "dragenter":
        return Vn = hi(Vn, e, t, n, r, s), !0;
      case "mouseover":
        return Bn = hi(Bn, e, t, n, r, s), !0;
      case "pointerover":
        var o = s.pointerId;
        return di.set(o, hi(di.get(o) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return o = s.pointerId, fi.set(o, hi(fi.get(o) || null, e, t, n, r, s)), !0;
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
  function us(e) {
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
    us(e) && n.delete(t);
  }
  function wf() {
    Ea = !1, bn !== null && us(bn) && (bn = null), Vn !== null && us(Vn) && (Vn = null), Bn !== null && us(Bn) && (Bn = null), di.forEach(Io), fi.forEach(Io);
  }
  function mi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ea || (Ea = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, wf)));
  }
  function pi(e) {
    function t(s) {
      return mi(s, e);
    }
    if (0 < os.length) {
      mi(os[0], e);
      for (var n = 1; n < os.length; n++) {
        var r = os[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (bn !== null && mi(bn, e), Vn !== null && mi(Vn, e), Bn !== null && mi(Bn, e), di.forEach(t), fi.forEach(t), n = 0; n < Un.length; n++) r = Un[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) Oo(n), n.blockedOn === null && Un.shift();
  }
  var Tr = G.ReactCurrentBatchConfig, cs = !0;
  function Ef(e, t, n, r) {
    var s = He, o = Tr.transition;
    Tr.transition = null;
    try {
      He = 1, Na(e, t, n, r);
    } finally {
      He = s, Tr.transition = o;
    }
  }
  function Nf(e, t, n, r) {
    var s = He, o = Tr.transition;
    Tr.transition = null;
    try {
      He = 4, Na(e, t, n, r);
    } finally {
      He = s, Tr.transition = o;
    }
  }
  function Na(e, t, n, r) {
    if (cs) {
      var s = Ca(e, t, n, r);
      if (s === null) Ua(e, t, r, ds, n), Fo(e, r);
      else if (Sf(s, e, t, n, r)) r.stopPropagation();
      else if (Fo(e, r), t & 4 && -1 < jf.indexOf(e)) {
        for (; s !== null; ) {
          var o = _i(s);
          if (o !== null && Ao(o), o = Ca(e, t, n, r), o === null && Ua(e, t, r, ds, n), o === s) break;
          s = o;
        }
        s !== null && r.stopPropagation();
      } else Ua(e, t, r, null, n);
    }
  }
  var ds = null;
  function Ca(e, t, n, r) {
    if (ds = null, e = Ze(r), e = cr(e), e !== null) if (t = Nn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = xt(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ds = e, null;
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
  var Hn = null, _a = null, fs = null;
  function zo() {
    if (fs) return fs;
    var e, t = _a, n = t.length, r, s = "value" in Hn ? Hn.value : Hn.textContent, o = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === s[o - r]; r++) ;
    return fs = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function hs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ms() {
    return !0;
  }
  function bo() {
    return !1;
  }
  function Vt(e) {
    function t(n, r, s, o, d) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = o, this.target = d, this.currentTarget = null;
      for (var p in e) e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(o) : o[p]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ms : bo, this.isPropagationStopped = bo, this;
    }
    return J(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ms);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ms);
    }, persist: function() {
    }, isPersistent: ms }), t;
  }
  var Mr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ta = Vt(Mr), vi = J({}, Mr, { view: 0, detail: 0 }), Cf = Vt(vi), Ma, Pa, ki, ps = J({}, vi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ra, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ki && (ki && e.type === "mousemove" ? (Ma = e.screenX - ki.screenX, Pa = e.screenY - ki.screenY) : Pa = Ma = 0, ki = e), Ma);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Pa;
  } }), Vo = Vt(ps), _f = J({}, ps, { dataTransfer: 0 }), Tf = Vt(_f), Mf = J({}, vi, { relatedTarget: 0 }), Aa = Vt(Mf), Pf = J({}, Mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Af = Vt(Pf), Rf = J({}, Mr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Lf = Vt(Rf), $f = J({}, Mr, { data: 0 }), Bo = Vt($f), Ff = {
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
  }, Of = {
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
  }, If = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Df(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = If[e]) ? !!t[e] : !1;
  }
  function Ra() {
    return Df;
  }
  var zf = J({}, vi, { key: function(e) {
    if (e.key) {
      var t = Ff[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = hs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Of[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ra, charCode: function(e) {
    return e.type === "keypress" ? hs(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? hs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), bf = Vt(zf), Vf = J({}, ps, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Uo = Vt(Vf), Bf = J({}, vi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ra }), Uf = Vt(Bf), Hf = J({}, Mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = Vt(Hf), Gf = J({}, ps, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wf = Vt(Gf), Qf = [9, 13, 27, 32], La = k && "CompositionEvent" in window, yi = null;
  k && "documentMode" in document && (yi = document.documentMode);
  var Yf = k && "TextEvent" in window && !yi, Ho = k && (!La || yi && 8 < yi && 11 >= yi), Ko = " ", Go = !1;
  function Wo(e, t) {
    switch (e) {
      case "keyup":
        return Qf.indexOf(t.keyCode) !== -1;
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
  function Jf(e, t) {
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
  function Xf(e, t) {
    if (Pr) return e === "compositionend" || !La && Wo(e, t) ? (e = zo(), fs = _a = Hn = null, Pr = !1, e) : null;
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
  var Zf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Yo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Zf[e.type] : t === "textarea";
  }
  function Jo(e, t, n, r) {
    mn(r), t = xs(t, "onChange"), 0 < t.length && (n = new Ta("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var gi = null, xi = null;
  function qf(e) {
    mu(e, 0);
  }
  function vs(e) {
    var t = Fr(e);
    if (ae(t)) return e;
  }
  function eh(e, t) {
    if (e === "change") return t;
  }
  var Xo = !1;
  if (k) {
    var $a;
    if (k) {
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
    if (e.propertyName === "value" && vs(xi)) {
      var t = [];
      Jo(t, xi, e, Ze(e)), mt(qf, t);
    }
  }
  function th(e, t, n) {
    e === "focusin" ? (qo(), gi = t, xi = n, gi.attachEvent("onpropertychange", eu)) : e === "focusout" && qo();
  }
  function nh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return vs(xi);
  }
  function rh(e, t) {
    if (e === "click") return vs(t);
  }
  function ih(e, t) {
    if (e === "input" || e === "change") return vs(t);
  }
  function sh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var sn = typeof Object.is == "function" ? Object.is : sh;
  function ji(e, t) {
    if (sn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!S.call(t, s) || !sn(e[s], t[s])) return !1;
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
    for (var e = window, t = me(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = me(e.document);
    }
    return t;
  }
  function Oa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function ah(e) {
    var t = iu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ru(n.ownerDocument.documentElement, n)) {
      if (r !== null && Oa(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, o = Math.min(r.start, s);
          r = r.end === void 0 ? o : Math.min(r.end, s), !e.extend && o > r && (s = r, r = o, o = s), s = nu(n, o);
          var d = nu(
            n,
            r
          );
          s && d && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var lh = k && "documentMode" in document && 11 >= document.documentMode, Ar = null, Ia = null, Si = null, Da = !1;
  function su(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Da || Ar == null || Ar !== me(r) || (r = Ar, "selectionStart" in r && Oa(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Si && ji(Si, r) || (Si = r, r = xs(Ia, "onSelect"), 0 < r.length && (t = new Ta("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ar)));
  }
  function ks(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Rr = { animationend: ks("Animation", "AnimationEnd"), animationiteration: ks("Animation", "AnimationIteration"), animationstart: ks("Animation", "AnimationStart"), transitionend: ks("Transition", "TransitionEnd") }, za = {}, au = {};
  k && (au = document.createElement("div").style, "AnimationEvent" in window || (delete Rr.animationend.animation, delete Rr.animationiteration.animation, delete Rr.animationstart.animation), "TransitionEvent" in window || delete Rr.transitionend.transition);
  function ys(e) {
    if (za[e]) return za[e];
    if (!Rr[e]) return e;
    var t = Rr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in au) return za[e] = t[n];
    return e;
  }
  var lu = ys("animationend"), ou = ys("animationiteration"), uu = ys("animationstart"), cu = ys("transitionend"), du = /* @__PURE__ */ new Map(), fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Kn(e, t) {
    du.set(e, t), h(t, [e]);
  }
  for (var ba = 0; ba < fu.length; ba++) {
    var Va = fu[ba], oh = Va.toLowerCase(), uh = Va[0].toUpperCase() + Va.slice(1);
    Kn(oh, "on" + uh);
  }
  Kn(lu, "onAnimationEnd"), Kn(ou, "onAnimationIteration"), Kn(uu, "onAnimationStart"), Kn("dblclick", "onDoubleClick"), Kn("focusin", "onFocus"), Kn("focusout", "onBlur"), Kn(cu, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ch = new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));
  function hu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ga(r, t, void 0, e), e.currentTarget = null;
  }
  function mu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var p = r[d], y = p.instance, M = p.currentTarget;
          if (p = p.listener, y !== o && s.isPropagationStopped()) break e;
          hu(s, p, M), o = y;
        }
        else for (d = 0; d < r.length; d++) {
          if (p = r[d], y = p.instance, M = p.currentTarget, p = p.listener, y !== o && s.isPropagationStopped()) break e;
          hu(s, p, M), o = y;
        }
      }
    }
    if (_r) throw e = En, _r = !1, En = null, e;
  }
  function qe(e, t) {
    var n = t[Ya];
    n === void 0 && (n = t[Ya] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (pu(t, e, 2, !1), n.add(r));
  }
  function Ba(e, t, n) {
    var r = 0;
    t && (r |= 4), pu(n, e, r, t);
  }
  var gs = "_reactListening" + Math.random().toString(36).slice(2);
  function Ei(e) {
    if (!e[gs]) {
      e[gs] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (ch.has(n) || Ba(n, !1, e), Ba(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gs] || (t[gs] = !0, Ba("selectionchange", !1, t));
    }
  }
  function pu(e, t, n, r) {
    switch (Do(t)) {
      case 1:
        var s = Ef;
        break;
      case 4:
        s = Nf;
        break;
      default:
        s = Na;
    }
    n = s.bind(null, t, n, e), s = void 0, !pn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function Ua(e, t, n, r, s) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var d = r.tag;
      if (d === 3 || d === 4) {
        var p = r.stateNode.containerInfo;
        if (p === s || p.nodeType === 8 && p.parentNode === s) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var y = d.tag;
          if ((y === 3 || y === 4) && (y = d.stateNode.containerInfo, y === s || y.nodeType === 8 && y.parentNode === s)) return;
          d = d.return;
        }
        for (; p !== null; ) {
          if (d = cr(p), d === null) return;
          if (y = d.tag, y === 5 || y === 6) {
            r = o = d;
            continue e;
          }
          p = p.parentNode;
        }
      }
      r = r.return;
    }
    mt(function() {
      var M = o, W = Ze(n), Y = [];
      e: {
        var H = du.get(e);
        if (H !== void 0) {
          var re = Ta, ue = e;
          switch (e) {
            case "keypress":
              if (hs(n) === 0) break e;
            case "keydown":
            case "keyup":
              re = bf;
              break;
            case "focusin":
              ue = "focus", re = Aa;
              break;
            case "focusout":
              ue = "blur", re = Aa;
              break;
            case "beforeblur":
            case "afterblur":
              re = Aa;
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
              re = Vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              re = Tf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              re = Uf;
              break;
            case lu:
            case ou:
            case uu:
              re = Af;
              break;
            case cu:
              re = Kf;
              break;
            case "scroll":
              re = Cf;
              break;
            case "wheel":
              re = Wf;
              break;
            case "copy":
            case "cut":
            case "paste":
              re = Lf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              re = Uo;
          }
          var fe = (t & 4) !== 0, ut = !fe && e === "scroll", E = fe ? H !== null ? H + "Capture" : null : H;
          fe = [];
          for (var x = M, _; x !== null; ) {
            _ = x;
            var X = _.stateNode;
            if (_.tag === 5 && X !== null && (_ = X, E !== null && (X = Mt(x, E), X != null && fe.push(Ni(x, X, _)))), ut) break;
            x = x.return;
          }
          0 < fe.length && (H = new re(H, ue, null, n, W), Y.push({ event: H, listeners: fe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", re = e === "mouseout" || e === "pointerout", H && n !== We && (ue = n.relatedTarget || n.fromElement) && (cr(ue) || ue[Tn])) break e;
          if ((re || H) && (H = W.window === W ? W : (H = W.ownerDocument) ? H.defaultView || H.parentWindow : window, re ? (ue = n.relatedTarget || n.toElement, re = M, ue = ue ? cr(ue) : null, ue !== null && (ut = Nn(ue), ue !== ut || ue.tag !== 5 && ue.tag !== 6) && (ue = null)) : (re = null, ue = M), re !== ue)) {
            if (fe = Vo, X = "onMouseLeave", E = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (fe = Uo, X = "onPointerLeave", E = "onPointerEnter", x = "pointer"), ut = re == null ? H : Fr(re), _ = ue == null ? H : Fr(ue), H = new fe(X, x + "leave", re, n, W), H.target = ut, H.relatedTarget = _, X = null, cr(W) === M && (fe = new fe(E, x + "enter", ue, n, W), fe.target = _, fe.relatedTarget = ut, X = fe), ut = X, re && ue) t: {
              for (fe = re, E = ue, x = 0, _ = fe; _; _ = Lr(_)) x++;
              for (_ = 0, X = E; X; X = Lr(X)) _++;
              for (; 0 < x - _; ) fe = Lr(fe), x--;
              for (; 0 < _ - x; ) E = Lr(E), _--;
              for (; x--; ) {
                if (fe === E || E !== null && fe === E.alternate) break t;
                fe = Lr(fe), E = Lr(E);
              }
              fe = null;
            }
            else fe = null;
            re !== null && vu(Y, H, re, fe, !1), ue !== null && ut !== null && vu(Y, ut, ue, fe, !0);
          }
        }
        e: {
          if (H = M ? Fr(M) : window, re = H.nodeName && H.nodeName.toLowerCase(), re === "select" || re === "input" && H.type === "file") var he = eh;
          else if (Yo(H)) if (Xo) he = ih;
          else {
            he = nh;
            var ge = th;
          }
          else (re = H.nodeName) && re.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (he = rh);
          if (he && (he = he(e, M))) {
            Jo(Y, he, n, W);
            break e;
          }
          ge && ge(e, H, M), e === "focusout" && (ge = H._wrapperState) && ge.controlled && H.type === "number" && Be(H, "number", H.value);
        }
        switch (ge = M ? Fr(M) : window, e) {
          case "focusin":
            (Yo(ge) || ge.contentEditable === "true") && (Ar = ge, Ia = M, Si = null);
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
            Da = !1, su(Y, n, W);
            break;
          case "selectionchange":
            if (lh) break;
          case "keydown":
          case "keyup":
            su(Y, n, W);
        }
        var xe;
        if (La) e: {
          switch (e) {
            case "compositionstart":
              var Ce = "onCompositionStart";
              break e;
            case "compositionend":
              Ce = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ce = "onCompositionUpdate";
              break e;
          }
          Ce = void 0;
        }
        else Pr ? Wo(e, n) && (Ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (Ho && n.locale !== "ko" && (Pr || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Pr && (xe = zo()) : (Hn = W, _a = "value" in Hn ? Hn.value : Hn.textContent, Pr = !0)), ge = xs(M, Ce), 0 < ge.length && (Ce = new Bo(Ce, e, null, n, W), Y.push({ event: Ce, listeners: ge }), xe ? Ce.data = xe : (xe = Qo(n), xe !== null && (Ce.data = xe)))), (xe = Yf ? Jf(e, n) : Xf(e, n)) && (M = xs(M, "onBeforeInput"), 0 < M.length && (W = new Bo("onBeforeInput", "beforeinput", null, n, W), Y.push({ event: W, listeners: M }), W.data = xe));
      }
      mu(Y, t);
    });
  }
  function Ni(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function xs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, o = s.stateNode;
      s.tag === 5 && o !== null && (s = o, o = Mt(e, n), o != null && r.unshift(Ni(e, o, s)), o = Mt(e, t), o != null && r.push(Ni(e, o, s))), e = e.return;
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
  function vu(e, t, n, r, s) {
    for (var o = t._reactName, d = []; n !== null && n !== r; ) {
      var p = n, y = p.alternate, M = p.stateNode;
      if (y !== null && y === r) break;
      p.tag === 5 && M !== null && (p = M, s ? (y = Mt(n, o), y != null && d.unshift(Ni(n, y, p))) : s || (y = Mt(n, o), y != null && d.push(Ni(n, y, p)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var dh = /\r\n?/g, fh = /\u0000|\uFFFD/g;
  function ku(e) {
    return (typeof e == "string" ? e : "" + e).replace(dh, `
`).replace(fh, "");
  }
  function js(e, t, n) {
    if (t = ku(t), ku(e) !== t && n) throw Error(u(425));
  }
  function Ss() {
  }
  var Ha = null, Ka = null;
  function Ga(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Wa = typeof setTimeout == "function" ? setTimeout : void 0, hh = typeof clearTimeout == "function" ? clearTimeout : void 0, yu = typeof Promise == "function" ? Promise : void 0, mh = typeof queueMicrotask == "function" ? queueMicrotask : typeof yu < "u" ? function(e) {
    return yu.resolve(null).then(e).catch(ph);
  } : Wa;
  function ph(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Qa(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
        if (r === 0) {
          e.removeChild(s), pi(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = s;
    } while (n);
    pi(t);
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
  var $r = Math.random().toString(36).slice(2), yn = "__reactFiber$" + $r, Ci = "__reactProps$" + $r, Tn = "__reactContainer$" + $r, Ya = "__reactEvents$" + $r, vh = "__reactListeners$" + $r, kh = "__reactHandles$" + $r;
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
  function ws(e) {
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
    var s = {}, o;
    for (o in n) s[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function $t(e) {
    return e = e.childContextTypes, e != null;
  }
  function Es() {
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
    for (var s in r) if (!(s in t)) throw Error(u(108, j(e) || "Unknown", s));
    return J({}, n, r);
  }
  function Ns(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qn, dr = Et.current, Xe(Et, e), Xe(Lt, Lt.current), !0;
  }
  function Su(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = ju(e, t, dr), r.__reactInternalMemoizedMergedChildContext = e, et(Lt), et(Et), Xe(Et, e)) : et(Lt), Xe(Lt, n);
  }
  var Mn = null, Cs = !1, Xa = !1;
  function wu(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function yh(e) {
    Cs = !0, wu(e);
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
        Mn = null, Cs = !1;
      } catch (s) {
        throw Mn !== null && (Mn = Mn.slice(e + 1)), Cn(lt, Yn), s;
      } finally {
        He = t, Xa = !1;
      }
    }
    return null;
  }
  var Dr = [], zr = 0, _s = null, Ts = 0, Jt = [], Xt = 0, fr = null, Pn = 1, An = "";
  function hr(e, t) {
    Dr[zr++] = Ts, Dr[zr++] = _s, _s = e, Ts = t;
  }
  function Eu(e, t, n) {
    Jt[Xt++] = Pn, Jt[Xt++] = An, Jt[Xt++] = fr, fr = e;
    var r = Pn;
    e = An;
    var s = 32 - rn(r) - 1;
    r &= ~(1 << s), n += 1;
    var o = 32 - rn(t) + s;
    if (30 < o) {
      var d = s - s % 5;
      o = (r & (1 << d) - 1).toString(32), r >>= d, s -= d, Pn = 1 << 32 - rn(t) + s | n << s | r, An = o + e;
    } else Pn = 1 << o | n << s | r, An = e;
  }
  function Za(e) {
    e.return !== null && (hr(e, 1), Eu(e, 1, 0));
  }
  function qa(e) {
    for (; e === _s; ) _s = Dr[--zr], Dr[zr] = null, Ts = Dr[--zr], Dr[zr] = null;
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
  function Ms(e) {
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
  var gh = G.ReactCurrentBatchConfig;
  function Ti(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var s = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(d) {
          var p = s.refs;
          d === null ? delete p[o] : p[o] = d;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function Ps(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Mu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pu(e) {
    function t(E, x) {
      if (e) {
        var _ = E.deletions;
        _ === null ? (E.deletions = [x], E.flags |= 16) : _.push(x);
      }
    }
    function n(E, x) {
      if (!e) return null;
      for (; x !== null; ) t(E, x), x = x.sibling;
      return null;
    }
    function r(E, x) {
      for (E = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? E.set(x.key, x) : E.set(x.index, x), x = x.sibling;
      return E;
    }
    function s(E, x) {
      return E = rr(E, x), E.index = 0, E.sibling = null, E;
    }
    function o(E, x, _) {
      return E.index = _, e ? (_ = E.alternate, _ !== null ? (_ = _.index, _ < x ? (E.flags |= 2, x) : _) : (E.flags |= 2, x)) : (E.flags |= 1048576, x);
    }
    function d(E) {
      return e && E.alternate === null && (E.flags |= 2), E;
    }
    function p(E, x, _, X) {
      return x === null || x.tag !== 6 ? (x = Wl(_, E.mode, X), x.return = E, x) : (x = s(x, _), x.return = E, x);
    }
    function y(E, x, _, X) {
      var he = _.type;
      return he === T ? W(E, x, _.props.children, X, _.key) : x !== null && (x.elementType === he || typeof he == "object" && he !== null && he.$$typeof === oe && Mu(he) === x.type) ? (X = s(x, _.props), X.ref = Ti(E, x, _), X.return = E, X) : (X = ea(_.type, _.key, _.props, null, E.mode, X), X.ref = Ti(E, x, _), X.return = E, X);
    }
    function M(E, x, _, X) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== _.containerInfo || x.stateNode.implementation !== _.implementation ? (x = Ql(_, E.mode, X), x.return = E, x) : (x = s(x, _.children || []), x.return = E, x);
    }
    function W(E, x, _, X, he) {
      return x === null || x.tag !== 7 ? (x = jr(_, E.mode, X, he), x.return = E, x) : (x = s(x, _), x.return = E, x);
    }
    function Y(E, x, _) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Wl("" + x, E.mode, _), x.return = E, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Z:
            return _ = ea(x.type, x.key, x.props, null, E.mode, _), _.ref = Ti(E, null, x), _.return = E, _;
          case ee:
            return x = Ql(x, E.mode, _), x.return = E, x;
          case oe:
            var X = x._init;
            return Y(E, X(x._payload), _);
        }
        if (Ge(x) || Q(x)) return x = jr(x, E.mode, _, null), x.return = E, x;
        Ps(E, x);
      }
      return null;
    }
    function H(E, x, _, X) {
      var he = x !== null ? x.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return he !== null ? null : p(E, x, "" + _, X);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Z:
            return _.key === he ? y(E, x, _, X) : null;
          case ee:
            return _.key === he ? M(E, x, _, X) : null;
          case oe:
            return he = _._init, H(
              E,
              x,
              he(_._payload),
              X
            );
        }
        if (Ge(_) || Q(_)) return he !== null ? null : W(E, x, _, X, null);
        Ps(E, _);
      }
      return null;
    }
    function re(E, x, _, X, he) {
      if (typeof X == "string" && X !== "" || typeof X == "number") return E = E.get(_) || null, p(x, E, "" + X, he);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case Z:
            return E = E.get(X.key === null ? _ : X.key) || null, y(x, E, X, he);
          case ee:
            return E = E.get(X.key === null ? _ : X.key) || null, M(x, E, X, he);
          case oe:
            var ge = X._init;
            return re(E, x, _, ge(X._payload), he);
        }
        if (Ge(X) || Q(X)) return E = E.get(_) || null, W(x, E, X, he, null);
        Ps(x, X);
      }
      return null;
    }
    function ue(E, x, _, X) {
      for (var he = null, ge = null, xe = x, Ce = x = 0, kt = null; xe !== null && Ce < _.length; Ce++) {
        xe.index > Ce ? (kt = xe, xe = null) : kt = xe.sibling;
        var be = H(E, xe, _[Ce], X);
        if (be === null) {
          xe === null && (xe = kt);
          break;
        }
        e && xe && be.alternate === null && t(E, xe), x = o(be, x, Ce), ge === null ? he = be : ge.sibling = be, ge = be, xe = kt;
      }
      if (Ce === _.length) return n(E, xe), rt && hr(E, Ce), he;
      if (xe === null) {
        for (; Ce < _.length; Ce++) xe = Y(E, _[Ce], X), xe !== null && (x = o(xe, x, Ce), ge === null ? he = xe : ge.sibling = xe, ge = xe);
        return rt && hr(E, Ce), he;
      }
      for (xe = r(E, xe); Ce < _.length; Ce++) kt = re(xe, E, Ce, _[Ce], X), kt !== null && (e && kt.alternate !== null && xe.delete(kt.key === null ? Ce : kt.key), x = o(kt, x, Ce), ge === null ? he = kt : ge.sibling = kt, ge = kt);
      return e && xe.forEach(function(ir) {
        return t(E, ir);
      }), rt && hr(E, Ce), he;
    }
    function fe(E, x, _, X) {
      var he = Q(_);
      if (typeof he != "function") throw Error(u(150));
      if (_ = he.call(_), _ == null) throw Error(u(151));
      for (var ge = he = null, xe = x, Ce = x = 0, kt = null, be = _.next(); xe !== null && !be.done; Ce++, be = _.next()) {
        xe.index > Ce ? (kt = xe, xe = null) : kt = xe.sibling;
        var ir = H(E, xe, be.value, X);
        if (ir === null) {
          xe === null && (xe = kt);
          break;
        }
        e && xe && ir.alternate === null && t(E, xe), x = o(ir, x, Ce), ge === null ? he = ir : ge.sibling = ir, ge = ir, xe = kt;
      }
      if (be.done) return n(
        E,
        xe
      ), rt && hr(E, Ce), he;
      if (xe === null) {
        for (; !be.done; Ce++, be = _.next()) be = Y(E, be.value, X), be !== null && (x = o(be, x, Ce), ge === null ? he = be : ge.sibling = be, ge = be);
        return rt && hr(E, Ce), he;
      }
      for (xe = r(E, xe); !be.done; Ce++, be = _.next()) be = re(xe, E, Ce, be.value, X), be !== null && (e && be.alternate !== null && xe.delete(be.key === null ? Ce : be.key), x = o(be, x, Ce), ge === null ? he = be : ge.sibling = be, ge = be);
      return e && xe.forEach(function(Zh) {
        return t(E, Zh);
      }), rt && hr(E, Ce), he;
    }
    function ut(E, x, _, X) {
      if (typeof _ == "object" && _ !== null && _.type === T && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Z:
            e: {
              for (var he = _.key, ge = x; ge !== null; ) {
                if (ge.key === he) {
                  if (he = _.type, he === T) {
                    if (ge.tag === 7) {
                      n(E, ge.sibling), x = s(ge, _.props.children), x.return = E, E = x;
                      break e;
                    }
                  } else if (ge.elementType === he || typeof he == "object" && he !== null && he.$$typeof === oe && Mu(he) === ge.type) {
                    n(E, ge.sibling), x = s(ge, _.props), x.ref = Ti(E, ge, _), x.return = E, E = x;
                    break e;
                  }
                  n(E, ge);
                  break;
                } else t(E, ge);
                ge = ge.sibling;
              }
              _.type === T ? (x = jr(_.props.children, E.mode, X, _.key), x.return = E, E = x) : (X = ea(_.type, _.key, _.props, null, E.mode, X), X.ref = Ti(E, x, _), X.return = E, E = X);
            }
            return d(E);
          case ee:
            e: {
              for (ge = _.key; x !== null; ) {
                if (x.key === ge) if (x.tag === 4 && x.stateNode.containerInfo === _.containerInfo && x.stateNode.implementation === _.implementation) {
                  n(E, x.sibling), x = s(x, _.children || []), x.return = E, E = x;
                  break e;
                } else {
                  n(E, x);
                  break;
                }
                else t(E, x);
                x = x.sibling;
              }
              x = Ql(_, E.mode, X), x.return = E, E = x;
            }
            return d(E);
          case oe:
            return ge = _._init, ut(E, x, ge(_._payload), X);
        }
        if (Ge(_)) return ue(E, x, _, X);
        if (Q(_)) return fe(E, x, _, X);
        Ps(E, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" ? (_ = "" + _, x !== null && x.tag === 6 ? (n(E, x.sibling), x = s(x, _), x.return = E, E = x) : (n(E, x), x = Wl(_, E.mode, X), x.return = E, E = x), d(E)) : n(E, x);
    }
    return ut;
  }
  var Vr = Pu(!0), Au = Pu(!1), As = Wn(null), Rs = null, Br = null, rl = null;
  function il() {
    rl = Br = Rs = null;
  }
  function sl(e) {
    var t = As.current;
    et(As), e._currentValue = t;
  }
  function al(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ur(e, t) {
    Rs = e, rl = Br = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ft = !0), e.firstContext = null);
  }
  function Zt(e) {
    var t = e._currentValue;
    if (rl !== e) if (e = { context: e, memoizedValue: t, next: null }, Br === null) {
      if (Rs === null) throw Error(u(308));
      Br = e, Rs.dependencies = { lanes: 0, firstContext: e };
    } else Br = Br.next = e;
    return t;
  }
  var mr = null;
  function ll(e) {
    mr === null ? mr = [e] : mr.push(e);
  }
  function Ru(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n, ll(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Rn(e, r);
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
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Rn(e, n);
    }
    return s = r.interleaved, s === null ? (t.next = t, ll(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Rn(e, n);
  }
  function Ls(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Sa(e, n);
    }
  }
  function $u(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var s = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? s = o = d : o = o.next = d, n = n.next;
        } while (n !== null);
        o === null ? s = o = t : o = o.next = t;
      } else s = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function $s(e, t, n, r) {
    var s = e.updateQueue;
    Jn = !1;
    var o = s.firstBaseUpdate, d = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var y = p, M = y.next;
      y.next = null, d === null ? o = M : d.next = M, d = y;
      var W = e.alternate;
      W !== null && (W = W.updateQueue, p = W.lastBaseUpdate, p !== d && (p === null ? W.firstBaseUpdate = M : p.next = M, W.lastBaseUpdate = y));
    }
    if (o !== null) {
      var Y = s.baseState;
      d = 0, W = M = y = null, p = o;
      do {
        var H = p.lane, re = p.eventTime;
        if ((r & H) === H) {
          W !== null && (W = W.next = {
            eventTime: re,
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          });
          e: {
            var ue = e, fe = p;
            switch (H = t, re = n, fe.tag) {
              case 1:
                if (ue = fe.payload, typeof ue == "function") {
                  Y = ue.call(re, Y, H);
                  break e;
                }
                Y = ue;
                break e;
              case 3:
                ue.flags = ue.flags & -65537 | 128;
              case 0:
                if (ue = fe.payload, H = typeof ue == "function" ? ue.call(re, Y, H) : ue, H == null) break e;
                Y = J({}, Y, H);
                break e;
              case 2:
                Jn = !0;
            }
          }
          p.callback !== null && p.lane !== 0 && (e.flags |= 64, H = s.effects, H === null ? s.effects = [p] : H.push(p));
        } else re = { eventTime: re, lane: H, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, W === null ? (M = W = re, y = Y) : W = W.next = re, d |= H;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null) break;
          H = p, p = H.next, H.next = null, s.lastBaseUpdate = H, s.shared.pending = null;
        }
      } while (!0);
      if (W === null && (y = Y), s.baseState = y, s.firstBaseUpdate = M, s.lastBaseUpdate = W, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          d |= s.lane, s = s.next;
        while (s !== t);
      } else o === null && (s.shared.lanes = 0);
      kr |= d, e.lanes = d, e.memoizedState = Y;
    }
  }
  function Fu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], s = r.callback;
      if (s !== null) {
        if (r.callback = null, r = n, typeof s != "function") throw Error(u(191, s));
        s.call(r);
      }
    }
  }
  var Mi = {}, gn = Wn(Mi), Pi = Wn(Mi), Ai = Wn(Mi);
  function pr(e) {
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
    pr(Ai.current);
    var t = pr(gn.current), n = Kt(t, e.type);
    t !== n && (Xe(Pi, e), Xe(gn, n));
  }
  function cl(e) {
    Pi.current === e && (et(gn), et(Pi));
  }
  var st = Wn(0);
  function Fs(e) {
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
  var Os = G.ReactCurrentDispatcher, hl = G.ReactCurrentBatchConfig, vr = 0, at = null, ft = null, pt = null, Is = !1, Ri = !1, Li = 0, xh = 0;
  function Nt() {
    throw Error(u(321));
  }
  function ml(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!sn(e[n], t[n])) return !1;
    return !0;
  }
  function pl(e, t, n, r, s, o) {
    if (vr = o, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Os.current = e === null || e.memoizedState === null ? Eh : Nh, e = n(r, s), Ri) {
      o = 0;
      do {
        if (Ri = !1, Li = 0, 25 <= o) throw Error(u(301));
        o += 1, pt = ft = null, t.updateQueue = null, Os.current = Ch, e = n(r, s);
      } while (Ri);
    }
    if (Os.current = bs, t = ft !== null && ft.next !== null, vr = 0, pt = ft = at = null, Is = !1, t) throw Error(u(300));
    return e;
  }
  function vl() {
    var e = Li !== 0;
    return Li = 0, e;
  }
  function xn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return pt === null ? at.memoizedState = pt = e : pt = pt.next = e, pt;
  }
  function qt() {
    if (ft === null) {
      var e = at.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ft.next;
    var t = pt === null ? at.memoizedState : pt.next;
    if (t !== null) pt = t, ft = e;
    else {
      if (e === null) throw Error(u(310));
      ft = e, e = { memoizedState: ft.memoizedState, baseState: ft.baseState, baseQueue: ft.baseQueue, queue: ft.queue, next: null }, pt === null ? at.memoizedState = pt = e : pt = pt.next = e;
    }
    return pt;
  }
  function $i(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function kl(e) {
    var t = qt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = ft, s = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (s !== null) {
        var d = s.next;
        s.next = o.next, o.next = d;
      }
      r.baseQueue = s = o, n.pending = null;
    }
    if (s !== null) {
      o = s.next, r = r.baseState;
      var p = d = null, y = null, M = o;
      do {
        var W = M.lane;
        if ((vr & W) === W) y !== null && (y = y.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), r = M.hasEagerState ? M.eagerState : e(r, M.action);
        else {
          var Y = {
            lane: W,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          y === null ? (p = y = Y, d = r) : y = y.next = Y, at.lanes |= W, kr |= W;
        }
        M = M.next;
      } while (M !== null && M !== o);
      y === null ? d = r : y.next = p, sn(r, t.memoizedState) || (Ft = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = y, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        o = s.lane, at.lanes |= o, kr |= o, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function yl(e) {
    var t = qt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, o = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = s = s.next;
      do
        o = e(o, d.action), d = d.next;
      while (d !== s);
      sn(o, t.memoizedState) || (Ft = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Iu() {
  }
  function Du(e, t) {
    var n = at, r = qt(), s = t(), o = !sn(r.memoizedState, s);
    if (o && (r.memoizedState = s, Ft = !0), r = r.queue, gl(Vu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || pt !== null && pt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Fi(9, bu.bind(null, n, r, s, t), void 0, null), vt === null) throw Error(u(349));
      (vr & 30) !== 0 || zu(n, t, s);
    }
    return s;
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
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: $i, lastRenderedState: e }, t.queue = e, e = e.dispatch = wh.bind(null, at, e), [t.memoizedState, e];
  }
  function Fi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ku() {
    return qt().memoizedState;
  }
  function Ds(e, t, n, r) {
    var s = xn();
    at.flags |= e, s.memoizedState = Fi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function zs(e, t, n, r) {
    var s = qt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ft !== null) {
      var d = ft.memoizedState;
      if (o = d.destroy, r !== null && ml(r, d.deps)) {
        s.memoizedState = Fi(t, n, o, r);
        return;
      }
    }
    at.flags |= e, s.memoizedState = Fi(1 | t, n, o, r);
  }
  function Gu(e, t) {
    return Ds(8390656, 8, e, t);
  }
  function gl(e, t) {
    return zs(2048, 8, e, t);
  }
  function Wu(e, t) {
    return zs(4, 2, e, t);
  }
  function Qu(e, t) {
    return zs(4, 4, e, t);
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
    return n = n != null ? n.concat([e]) : null, zs(4, 4, Yu.bind(null, t, e), n);
  }
  function xl() {
  }
  function Xu(e, t) {
    var n = qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ml(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Zu(e, t) {
    var n = qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ml(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function qu(e, t, n) {
    return (vr & 21) === 0 ? (e.baseState && (e.baseState = !1, Ft = !0), e.memoizedState = n) : (sn(n, t) || (n = Mo(), at.lanes |= n, kr |= n, e.baseState = !0), t);
  }
  function jh(e, t) {
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
  function Sh(e, t, n) {
    var r = tr(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, tc(e)) nc(t, n);
    else if (n = Ru(e, t, n, r), n !== null) {
      var s = At();
      cn(n, e, r, s), rc(n, t, r);
    }
  }
  function wh(e, t, n) {
    var r = tr(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (tc(e)) nc(t, s);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var d = t.lastRenderedState, p = o(d, n);
        if (s.hasEagerState = !0, s.eagerState = p, sn(p, d)) {
          var y = t.interleaved;
          y === null ? (s.next = s, ll(t)) : (s.next = y.next, y.next = s), t.interleaved = s;
          return;
        }
      } catch {
      }
      n = Ru(e, t, s, r), n !== null && (s = At(), cn(n, e, r, s), rc(n, t, r));
    }
  }
  function tc(e) {
    var t = e.alternate;
    return e === at || t !== null && t === at;
  }
  function nc(e, t) {
    Ri = Is = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function rc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Sa(e, n);
    }
  }
  var bs = { readContext: Zt, useCallback: Nt, useContext: Nt, useEffect: Nt, useImperativeHandle: Nt, useInsertionEffect: Nt, useLayoutEffect: Nt, useMemo: Nt, useReducer: Nt, useRef: Nt, useState: Nt, useDebugValue: Nt, useDeferredValue: Nt, useTransition: Nt, useMutableSource: Nt, useSyncExternalStore: Nt, useId: Nt, unstable_isNewReconciler: !1 }, Eh = { readContext: Zt, useCallback: function(e, t) {
    return xn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Zt, useEffect: Gu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ds(
      4194308,
      4,
      Yu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ds(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ds(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = xn();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Sh.bind(null, at, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = xn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Hu, useDebugValue: xl, useDeferredValue: function(e) {
    return xn().memoizedState = e;
  }, useTransition: function() {
    var e = Hu(!1), t = e[0];
    return e = jh.bind(null, e[1]), xn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = at, s = xn();
    if (rt) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), vt === null) throw Error(u(349));
      (vr & 30) !== 0 || zu(r, t, n);
    }
    s.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return s.queue = o, Gu(Vu.bind(
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
    } else n = xh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Nh = {
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
  }, Ch = { readContext: Zt, useCallback: Xu, useContext: Zt, useEffect: gl, useImperativeHandle: Ju, useInsertionEffect: Wu, useLayoutEffect: Qu, useMemo: Zu, useReducer: yl, useRef: Ku, useState: function() {
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
  var Vs = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = At(), s = tr(e), o = Ln(r, s);
    o.payload = t, n != null && (o.callback = n), t = Xn(e, o, s), t !== null && (cn(t, e, s, r), Ls(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = At(), s = tr(e), o = Ln(r, s);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Xn(e, o, s), t !== null && (cn(t, e, s, r), Ls(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = At(), r = tr(e), s = Ln(n, r);
    s.tag = 2, t != null && (s.callback = t), t = Xn(e, s, r), t !== null && (cn(t, e, r, n), Ls(t, e, r));
  } };
  function ic(e, t, n, r, s, o, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, d) : t.prototype && t.prototype.isPureReactComponent ? !ji(n, r) || !ji(s, o) : !0;
  }
  function sc(e, t, n) {
    var r = !1, s = Qn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Zt(o) : (s = $t(t) ? dr : Et.current, r = t.contextTypes, o = (r = r != null) ? Ir(e, s) : Qn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Vs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function ac(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Vs.enqueueReplaceState(t, t.state, null);
  }
  function Sl(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, ol(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? s.context = Zt(o) : (o = $t(t) ? dr : Et.current, s.context = Ir(e, o)), s.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (jl(e, t, o, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Vs.enqueueReplaceState(s, s.state, null), $s(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Kr(e, t) {
    try {
      var n = "", r = t;
      do
        n += _e(r), r = r.return;
      while (r);
      var s = n;
    } catch (o) {
      s = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
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
  var _h = typeof WeakMap == "function" ? WeakMap : Map;
  function lc(e, t, n) {
    n = Ln(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Qs || (Qs = !0, zl = r), El(e, t);
    }, n;
  }
  function oc(e, t, n) {
    n = Ln(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = t.value;
      n.payload = function() {
        return r(s);
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
      r = e.pingCache = new _h();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (s.add(n), e = Vh.bind(null, e, t, n), t.then(e, e));
  }
  function cc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function dc(e, t, n, r, s) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ln(-1, 1), t.tag = 2, Xn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = s, e);
  }
  var Th = G.ReactCurrentOwner, Ft = !1;
  function Pt(e, t, n, r) {
    t.child = e === null ? Au(t, null, n, r) : Vr(t, e.child, n, r);
  }
  function fc(e, t, n, r, s) {
    n = n.render;
    var o = t.ref;
    return Ur(t, s), r = pl(e, t, n, r, o, s), n = vl(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, $n(e, t, s)) : (rt && n && Za(t), t.flags |= 1, Pt(e, t, r, s), t.child);
  }
  function hc(e, t, n, r, s) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Gl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, mc(e, t, o, r, s)) : (e = ea(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & s) === 0) {
      var d = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ji, n(d, r) && e.ref === t.ref) return $n(e, t, s);
    }
    return t.flags |= 1, e = rr(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function mc(e, t, n, r, s) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ji(o, r) && e.ref === t.ref) if (Ft = !1, t.pendingProps = r = o, (e.lanes & s) !== 0) (e.flags & 131072) !== 0 && (Ft = !0);
      else return t.lanes = e.lanes, $n(e, t, s);
    }
    return Nl(e, t, n, r, s);
  }
  function pc(e, t, n) {
    var r = t.pendingProps, s = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Xe(Wr, Ht), Ht |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Xe(Wr, Ht), Ht |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Xe(Wr, Ht), Ht |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Xe(Wr, Ht), Ht |= r;
    return Pt(e, t, s, n), t.child;
  }
  function vc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Nl(e, t, n, r, s) {
    var o = $t(n) ? dr : Et.current;
    return o = Ir(t, o), Ur(t, s), n = pl(e, t, n, r, o, s), r = vl(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, $n(e, t, s)) : (rt && r && Za(t), t.flags |= 1, Pt(e, t, n, s), t.child);
  }
  function kc(e, t, n, r, s) {
    if ($t(n)) {
      var o = !0;
      Ns(t);
    } else o = !1;
    if (Ur(t, s), t.stateNode === null) Us(e, t), sc(t, n, r), Sl(t, n, r, s), r = !0;
    else if (e === null) {
      var d = t.stateNode, p = t.memoizedProps;
      d.props = p;
      var y = d.context, M = n.contextType;
      typeof M == "object" && M !== null ? M = Zt(M) : (M = $t(n) ? dr : Et.current, M = Ir(t, M));
      var W = n.getDerivedStateFromProps, Y = typeof W == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      Y || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (p !== r || y !== M) && ac(t, d, r, M), Jn = !1;
      var H = t.memoizedState;
      d.state = H, $s(t, r, d, s), y = t.memoizedState, p !== r || H !== y || Lt.current || Jn ? (typeof W == "function" && (jl(t, n, W, r), y = t.memoizedState), (p = Jn || ic(t, n, p, r, H, y, M)) ? (Y || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = y), d.props = r, d.state = y, d.context = M, r = p) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, Lu(e, t), p = t.memoizedProps, M = t.type === t.elementType ? p : ln(t.type, p), d.props = M, Y = t.pendingProps, H = d.context, y = n.contextType, typeof y == "object" && y !== null ? y = Zt(y) : (y = $t(n) ? dr : Et.current, y = Ir(t, y));
      var re = n.getDerivedStateFromProps;
      (W = typeof re == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (p !== Y || H !== y) && ac(t, d, r, y), Jn = !1, H = t.memoizedState, d.state = H, $s(t, r, d, s);
      var ue = t.memoizedState;
      p !== Y || H !== ue || Lt.current || Jn ? (typeof re == "function" && (jl(t, n, re, r), ue = t.memoizedState), (M = Jn || ic(t, n, M, r, H, ue, y) || !1) ? (W || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, ue, y), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, ue, y)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || p === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = ue), d.props = r, d.state = ue, d.context = y, r = M) : (typeof d.componentDidUpdate != "function" || p === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Cl(e, t, n, r, o, s);
  }
  function Cl(e, t, n, r, s, o) {
    vc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return s && Su(t, n, !1), $n(e, t, o);
    r = t.stateNode, Th.current = t;
    var p = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = Vr(t, e.child, null, o), t.child = Vr(t, null, p, o)) : Pt(e, t, p, o), t.memoizedState = r.state, s && Su(t, n, !0), t.child;
  }
  function yc(e) {
    var t = e.stateNode;
    t.pendingContext ? xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xu(e, t.context, !1), ul(e, t.containerInfo);
  }
  function gc(e, t, n, r, s) {
    return br(), nl(s), t.flags |= 256, Pt(e, t, n, r), t.child;
  }
  var _l = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Tl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xc(e, t, n) {
    var r = t.pendingProps, s = st.current, o = !1, d = (t.flags & 128) !== 0, p;
    if ((p = d) || (p = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), p ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Xe(st, s & 1), e === null)
      return tl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = d) : o = ta(d, r, 0, null), e = jr(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Tl(n), t.memoizedState = _l, e) : Ml(t, d));
    if (s = e.memoizedState, s !== null && (p = s.dehydrated, p !== null)) return Mh(e, t, d, r, p, s, n);
    if (o) {
      o = r.fallback, d = t.mode, s = e.child, p = s.sibling;
      var y = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = y, t.deletions = null) : (r = rr(s, y), r.subtreeFlags = s.subtreeFlags & 14680064), p !== null ? o = rr(p, o) : (o = jr(o, d, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, d = e.child.memoizedState, d = d === null ? Tl(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, o.memoizedState = d, o.childLanes = e.childLanes & ~n, t.memoizedState = _l, r;
    }
    return o = e.child, e = o.sibling, r = rr(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ml(e, t) {
    return t = ta({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Bs(e, t, n, r) {
    return r !== null && nl(r), Vr(t, e.child, null, n), e = Ml(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Mh(e, t, n, r, s, o, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = wl(Error(u(422))), Bs(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, s = t.mode, r = ta({ mode: "visible", children: r.children }, s, 0, null), o = jr(o, s, d, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Vr(t, e.child, null, d), t.child.memoizedState = Tl(d), t.memoizedState = _l, o);
    if ((t.mode & 1) === 0) return Bs(e, t, d, null);
    if (s.data === "$!") {
      if (r = s.nextSibling && s.nextSibling.dataset, r) var p = r.dgst;
      return r = p, o = Error(u(419)), r = wl(o, r, void 0), Bs(e, t, d, r);
    }
    if (p = (d & e.childLanes) !== 0, Ft || p) {
      if (r = vt, r !== null) {
        switch (d & -d) {
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
        s = (s & (r.suspendedLanes | d)) !== 0 ? 0 : s, s !== 0 && s !== o.retryLane && (o.retryLane = s, Rn(e, s), cn(r, e, s, -1));
      }
      return Kl(), r = wl(Error(u(421))), Bs(e, t, d, r);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bh.bind(null, e), s._reactRetry = t, null) : (e = o.treeContext, Ut = Gn(s.nextSibling), Bt = t, rt = !0, an = null, e !== null && (Jt[Xt++] = Pn, Jt[Xt++] = An, Jt[Xt++] = fr, Pn = e.id, An = e.overflow, fr = t), t = Ml(t, r.children), t.flags |= 4096, t);
  }
  function jc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), al(e.return, t, n);
  }
  function Pl(e, t, n, r, s) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = s);
  }
  function Sc(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, o = r.tail;
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
    else switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && Fs(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Pl(t, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && Fs(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
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
  function Us(e, t) {
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
  function Ph(e, t, n) {
    switch (t.tag) {
      case 3:
        yc(t), br();
        break;
      case 5:
        Ou(t);
        break;
      case 1:
        $t(t.type) && Ns(t);
        break;
      case 4:
        ul(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, s = t.memoizedProps.value;
        Xe(As, r._currentValue), r._currentValue = s;
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
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Xe(st, st.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, pc(e, t, n);
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
    var s = e.memoizedProps;
    if (s !== r) {
      e = t.stateNode, pr(gn.current);
      var o = null;
      switch (n) {
        case "input":
          s = pe(e, s), r = pe(e, r), o = [];
          break;
        case "select":
          s = J({}, s, { value: void 0 }), r = J({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          s = yt(e, s), r = yt(e, r), o = [];
          break;
        default:
          typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ss);
      }
      Re(n, r);
      var d;
      n = null;
      for (M in s) if (!r.hasOwnProperty(M) && s.hasOwnProperty(M) && s[M] != null) if (M === "style") {
        var p = s[M];
        for (d in p) p.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (f.hasOwnProperty(M) ? o || (o = []) : (o = o || []).push(M, null));
      for (M in r) {
        var y = r[M];
        if (p = s?.[M], r.hasOwnProperty(M) && y !== p && (y != null || p != null)) if (M === "style") if (p) {
          for (d in p) !p.hasOwnProperty(d) || y && y.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in y) y.hasOwnProperty(d) && p[d] !== y[d] && (n || (n = {}), n[d] = y[d]);
        } else n || (o || (o = []), o.push(
          M,
          n
        )), n = y;
        else M === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, p = p ? p.__html : void 0, y != null && p !== y && (o = o || []).push(M, y)) : M === "children" ? typeof y != "string" && typeof y != "number" || (o = o || []).push(M, "" + y) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (f.hasOwnProperty(M) ? (y != null && M === "onScroll" && qe("scroll", e), o || p === y || (o = [])) : (o = o || []).push(M, y));
      }
      n && (o = o || []).push("style", n);
      var M = o;
      (t.updateQueue = M) && (t.flags |= 4);
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
    if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Ah(e, t, n) {
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
        return $t(t.type) && Es(), Ct(t), null;
      case 3:
        return r = t.stateNode, Hr(), et(Lt), et(Et), fl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ms(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, an !== null && (Bl(an), an = null))), Al(e, t), Ct(t), null;
      case 5:
        cl(t);
        var s = pr(Ai.current);
        if (n = t.type, e !== null && t.stateNode != null) Ec(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return Ct(t), null;
          }
          if (e = pr(gn.current), Ms(t)) {
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
                for (s = 0; s < wi.length; s++) qe(wi[s], r);
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
                Pe(r, o), qe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, qe("invalid", r);
                break;
              case "textarea":
                Je(r, o), qe("invalid", r);
            }
            Re(n, o), s = null;
            for (var d in o) if (o.hasOwnProperty(d)) {
              var p = o[d];
              d === "children" ? typeof p == "string" ? r.textContent !== p && (o.suppressHydrationWarning !== !0 && js(r.textContent, p, e), s = ["children", p]) : typeof p == "number" && r.textContent !== "" + p && (o.suppressHydrationWarning !== !0 && js(
                r.textContent,
                p,
                e
              ), s = ["children", "" + p]) : f.hasOwnProperty(d) && p != null && d === "onScroll" && qe("scroll", r);
            }
            switch (n) {
              case "input":
                de(r), Ye(r, o, !0);
                break;
              case "textarea":
                de(r), tt(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Ss);
            }
            r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[yn] = t, e[Ci] = r, wc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Ae(n, r), n) {
                case "dialog":
                  qe("cancel", e), qe("close", e), s = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  qe("load", e), s = r;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < wi.length; s++) qe(wi[s], e);
                  s = r;
                  break;
                case "source":
                  qe("error", e), s = r;
                  break;
                case "img":
                case "image":
                case "link":
                  qe(
                    "error",
                    e
                  ), qe("load", e), s = r;
                  break;
                case "details":
                  qe("toggle", e), s = r;
                  break;
                case "input":
                  Pe(e, r), s = pe(e, r), qe("invalid", e);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, s = J({}, r, { value: void 0 }), qe("invalid", e);
                  break;
                case "textarea":
                  Je(e, r), s = yt(e, r), qe("invalid", e);
                  break;
                default:
                  s = r;
              }
              Re(n, s), p = s;
              for (o in p) if (p.hasOwnProperty(o)) {
                var y = p[o];
                o === "style" ? Wt(e, y) : o === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && nn(e, y)) : o === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Gt(e, y) : typeof y == "number" && Gt(e, "" + y) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (f.hasOwnProperty(o) ? y != null && o === "onScroll" && qe("scroll", e) : y != null && P(e, o, y, d));
              }
              switch (n) {
                case "input":
                  de(e), Ye(e, r, !1);
                  break;
                case "textarea":
                  de(e), tt(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + b(r.value));
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
                  typeof s.onClick == "function" && (e.onclick = Ss);
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
          if (n = pr(Ai.current), pr(gn.current), Ms(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[yn] = t, (o = r.nodeValue !== n) && (e = Bt, e !== null)) switch (e.tag) {
              case 3:
                js(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && js(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yn] = t, t.stateNode = r;
        }
        return Ct(t), null;
      case 13:
        if (et(st), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (rt && Ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Tu(), br(), t.flags |= 98560, o = !1;
          else if (o = Ms(t), r !== null && r.dehydrated !== null) {
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
        return $t(t.type) && Es(), Ct(t), null;
      case 19:
        if (et(st), o = t.memoizedState, o === null) return Ct(t), null;
        if (r = (t.flags & 128) !== 0, d = o.rendering, d === null) if (r) Oi(o, !1);
        else {
          if (ht !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Fs(e), d !== null) {
              for (t.flags |= 128, Oi(o, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, d = o.alternate, d === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = d.childLanes, o.lanes = d.lanes, o.child = d.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = d.memoizedProps, o.memoizedState = d.memoizedState, o.updateQueue = d.updateQueue, o.type = d.type, e = d.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Xe(st, st.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && ye() > Qr && (t.flags |= 128, r = !0, Oi(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Fs(d), e !== null) {
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
  function Rh(e, t) {
    switch (qa(t), t.tag) {
      case 1:
        return $t(t.type) && Es(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
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
  var Hs = !1, _t = !1, Lh = typeof WeakSet == "function" ? WeakSet : Set, se = null;
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
  function $h(e, t) {
    if (Ha = cs, e = iu(), Oa(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var d = 0, p = -1, y = -1, M = 0, W = 0, Y = e, H = null;
          t: for (; ; ) {
            for (var re; Y !== n || s !== 0 && Y.nodeType !== 3 || (p = d + s), Y !== o || r !== 0 && Y.nodeType !== 3 || (y = d + r), Y.nodeType === 3 && (d += Y.nodeValue.length), (re = Y.firstChild) !== null; )
              H = Y, Y = re;
            for (; ; ) {
              if (Y === e) break t;
              if (H === n && ++M === s && (p = d), H === o && ++W === r && (y = d), (re = Y.nextSibling) !== null) break;
              Y = H, H = Y.parentNode;
            }
            Y = re;
          }
          n = p === -1 || y === -1 ? null : { start: p, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ka = { focusedElem: e, selectionRange: n }, cs = !1, se = t; se !== null; ) if (t = se, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, se = e;
    else for (; se !== null; ) {
      t = se;
      try {
        var ue = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ue !== null) {
              var fe = ue.memoizedProps, ut = ue.memoizedState, E = t.stateNode, x = E.getSnapshotBeforeUpdate(t.elementType === t.type ? fe : ln(t.type, fe), ut);
              E.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var _ = t.stateNode.containerInfo;
            _.nodeType === 1 ? _.textContent = "" : _.nodeType === 9 && _.documentElement && _.removeChild(_.documentElement);
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
        e.return = t.return, se = e;
        break;
      }
      se = t.return;
    }
    return ue = Cc, Cc = !1, ue;
  }
  function Ii(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & e) === e) {
          var o = s.destroy;
          s.destroy = void 0, o !== void 0 && Rl(t, n, o);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function Ks(e, t) {
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
    t !== null && (e.alternate = null, _c(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yn], delete t[Ci], delete t[Ya], delete t[vh], delete t[kh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ss));
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
      kn.onCommitFiberUnmount(is, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        _t || Gr(n, t);
      case 6:
        var r = jt, s = on;
        jt = null, Zn(e, t, n), jt = r, on = s, jt !== null && (on ? (e = jt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : jt.removeChild(n.stateNode));
        break;
      case 18:
        jt !== null && (on ? (e = jt, n = n.stateNode, e.nodeType === 8 ? Qa(e.parentNode, n) : e.nodeType === 1 && Qa(e, n), pi(e)) : Qa(jt, n.stateNode));
        break;
      case 4:
        r = jt, s = on, jt = n.stateNode.containerInfo, on = !0, Zn(e, t, n), jt = r, on = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_t && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          s = r = r.next;
          do {
            var o = s, d = o.destroy;
            o = o.tag, d !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Rl(n, t, d), s = s.next;
          } while (s !== r);
        }
        Zn(e, t, n);
        break;
      case 1:
        if (!_t && (Gr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (p) {
          ot(n, t, p);
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
      n === null && (n = e.stateNode = new Lh()), t.forEach(function(r) {
        var s = Uh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
    }
  }
  function un(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e, d = t, p = d;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 5:
              jt = p.stateNode, on = !1;
              break e;
            case 3:
              jt = p.stateNode.containerInfo, on = !0;
              break e;
            case 4:
              jt = p.stateNode.containerInfo, on = !0;
              break e;
          }
          p = p.return;
        }
        if (jt === null) throw Error(u(160));
        Pc(o, d, s), jt = null, on = !1;
        var y = s.alternate;
        y !== null && (y.return = null), s.return = null;
      } catch (M) {
        ot(s, t, M);
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
            Ii(3, e, e.return), Ks(3, e);
          } catch (fe) {
            ot(e, e.return, fe);
          }
          try {
            Ii(5, e, e.return);
          } catch (fe) {
            ot(e, e.return, fe);
          }
        }
        break;
      case 1:
        un(t, e), jn(e), r & 512 && n !== null && Gr(n, n.return);
        break;
      case 5:
        if (un(t, e), jn(e), r & 512 && n !== null && Gr(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            Gt(s, "");
          } catch (fe) {
            ot(e, e.return, fe);
          }
        }
        if (r & 4 && (s = e.stateNode, s != null)) {
          var o = e.memoizedProps, d = n !== null ? n.memoizedProps : o, p = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            p === "input" && o.type === "radio" && o.name != null && je(s, o), Ae(p, d);
            var M = Ae(p, o);
            for (d = 0; d < y.length; d += 2) {
              var W = y[d], Y = y[d + 1];
              W === "style" ? Wt(s, Y) : W === "dangerouslySetInnerHTML" ? nn(s, Y) : W === "children" ? Gt(s, Y) : P(s, W, Y, M);
            }
            switch (p) {
              case "input":
                $e(s, o);
                break;
              case "textarea":
                ze(s, o);
                break;
              case "select":
                var H = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var re = o.value;
                re != null ? Ue(s, !!o.multiple, re, !1) : H !== !!o.multiple && (o.defaultValue != null ? Ue(
                  s,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Ue(s, !!o.multiple, o.multiple ? [] : "", !1));
            }
            s[Ci] = o;
          } catch (fe) {
            ot(e, e.return, fe);
          }
        }
        break;
      case 6:
        if (un(t, e), jn(e), r & 4) {
          if (e.stateNode === null) throw Error(u(162));
          s = e.stateNode, o = e.memoizedProps;
          try {
            s.nodeValue = o;
          } catch (fe) {
            ot(e, e.return, fe);
          }
        }
        break;
      case 3:
        if (un(t, e), jn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          pi(t.containerInfo);
        } catch (fe) {
          ot(e, e.return, fe);
        }
        break;
      case 4:
        un(t, e), jn(e);
        break;
      case 13:
        un(t, e), jn(e), s = e.child, s.flags & 8192 && (o = s.memoizedState !== null, s.stateNode.isHidden = o, !o || s.alternate !== null && s.alternate.memoizedState !== null || (Dl = ye())), r & 4 && Ac(e);
        break;
      case 22:
        if (W = n !== null && n.memoizedState !== null, e.mode & 1 ? (_t = (M = _t) || W, un(t, e), _t = M) : un(t, e), jn(e), r & 8192) {
          if (M = e.memoizedState !== null, (e.stateNode.isHidden = M) && !W && (e.mode & 1) !== 0) for (se = e, W = e.child; W !== null; ) {
            for (Y = se = W; se !== null; ) {
              switch (H = se, re = H.child, H.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ii(4, H, H.return);
                  break;
                case 1:
                  Gr(H, H.return);
                  var ue = H.stateNode;
                  if (typeof ue.componentWillUnmount == "function") {
                    r = H, n = H.return;
                    try {
                      t = r, ue.props = t.memoizedProps, ue.state = t.memoizedState, ue.componentWillUnmount();
                    } catch (fe) {
                      ot(r, n, fe);
                    }
                  }
                  break;
                case 5:
                  Gr(H, H.return);
                  break;
                case 22:
                  if (H.memoizedState !== null) {
                    Fc(Y);
                    continue;
                  }
              }
              re !== null ? (re.return = H, se = re) : Fc(Y);
            }
            W = W.sibling;
          }
          e: for (W = null, Y = e; ; ) {
            if (Y.tag === 5) {
              if (W === null) {
                W = Y;
                try {
                  s = Y.stateNode, M ? (o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (p = Y.stateNode, y = Y.memoizedProps.style, d = y != null && y.hasOwnProperty("display") ? y.display : null, p.style.display = ke("display", d));
                } catch (fe) {
                  ot(e, e.return, fe);
                }
              }
            } else if (Y.tag === 6) {
              if (W === null) try {
                Y.stateNode.nodeValue = M ? "" : Y.memoizedProps;
              } catch (fe) {
                ot(e, e.return, fe);
              }
            } else if ((Y.tag !== 22 && Y.tag !== 23 || Y.memoizedState === null || Y === e) && Y.child !== null) {
              Y.child.return = Y, Y = Y.child;
              continue;
            }
            if (Y === e) break e;
            for (; Y.sibling === null; ) {
              if (Y.return === null || Y.return === e) break e;
              W === Y && (W = null), Y = Y.return;
            }
            W === Y && (W = null), Y.sibling.return = Y.return, Y = Y.sibling;
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
            var s = r.stateNode;
            r.flags & 32 && (Gt(s, ""), r.flags &= -33);
            var o = Mc(e);
            Fl(e, o, s);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, p = Mc(e);
            $l(e, p, d);
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
  function Fh(e, t, n) {
    se = e, Lc(e);
  }
  function Lc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; se !== null; ) {
      var s = se, o = s.child;
      if (s.tag === 22 && r) {
        var d = s.memoizedState !== null || Hs;
        if (!d) {
          var p = s.alternate, y = p !== null && p.memoizedState !== null || _t;
          p = Hs;
          var M = _t;
          if (Hs = d, (_t = y) && !M) for (se = s; se !== null; ) d = se, y = d.child, d.tag === 22 && d.memoizedState !== null ? Oc(s) : y !== null ? (y.return = d, se = y) : Oc(s);
          for (; o !== null; ) se = o, Lc(o), o = o.sibling;
          se = s, Hs = p, _t = M;
        }
        $c(e);
      } else (s.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = s, se = o) : $c(e);
    }
  }
  function $c(e) {
    for (; se !== null; ) {
      var t = se;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _t || Ks(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_t) if (n === null) r.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : ln(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
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
              var p = t.stateNode;
              if (n === null && t.flags & 4) {
                n = p;
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
                var M = t.alternate;
                if (M !== null) {
                  var W = M.memoizedState;
                  if (W !== null) {
                    var Y = W.dehydrated;
                    Y !== null && pi(Y);
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
        } catch (H) {
          ot(t, t.return, H);
        }
      }
      if (t === e) {
        se = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, se = n;
        break;
      }
      se = t.return;
    }
  }
  function Fc(e) {
    for (; se !== null; ) {
      var t = se;
      if (t === e) {
        se = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, se = n;
        break;
      }
      se = t.return;
    }
  }
  function Oc(e) {
    for (; se !== null; ) {
      var t = se;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ks(4, t);
            } catch (y) {
              ot(t, n, y);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                ot(t, s, y);
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
        se = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        p.return = t.return, se = p;
        break;
      }
      se = t.return;
    }
  }
  var Oh = Math.ceil, Gs = G.ReactCurrentDispatcher, Ol = G.ReactCurrentOwner, en = G.ReactCurrentBatchConfig, De = 0, vt = null, dt = null, St = 0, Ht = 0, Wr = Wn(0), ht = 0, Di = null, kr = 0, Ws = 0, Il = 0, zi = null, Ot = null, Dl = 0, Qr = 1 / 0, Fn = null, Qs = !1, zl = null, qn = null, Ys = !1, er = null, Js = 0, bi = 0, bl = null, Xs = -1, Zs = 0;
  function At() {
    return (De & 6) !== 0 ? ye() : Xs !== -1 ? Xs : Xs = ye();
  }
  function tr(e) {
    return (e.mode & 1) === 0 ? 1 : (De & 2) !== 0 && St !== 0 ? St & -St : gh.transition !== null ? (Zs === 0 && (Zs = Mo()), Zs) : (e = He, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Do(e.type)), e);
  }
  function cn(e, t, n, r) {
    if (50 < bi) throw bi = 0, bl = null, Error(u(185));
    ci(e, n, r), ((De & 2) === 0 || e !== vt) && (e === vt && ((De & 2) === 0 && (Ws |= n), ht === 4 && nr(e, St)), It(e, r), n === 1 && De === 0 && (t.mode & 1) === 0 && (Qr = ye() + 500, Cs && Yn()));
  }
  function It(e, t) {
    var n = e.callbackNode;
    gf(e, t);
    var r = ls(e, e === vt ? St : 0);
    if (r === 0) n !== null && _n(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && _n(n), t === 1) e.tag === 0 ? yh(Dc.bind(null, e)) : wu(Dc.bind(null, e)), mh(function() {
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
    if (Xs = -1, Zs = 0, (De & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Yr() && e.callbackNode !== n) return null;
    var r = ls(e, e === vt ? St : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = qs(e, r);
    else {
      t = r;
      var s = De;
      De |= 2;
      var o = bc();
      (vt !== e || St !== t) && (Fn = null, Qr = ye() + 500, gr(e, t));
      do
        try {
          zh();
          break;
        } catch (p) {
          zc(e, p);
        }
      while (!0);
      il(), Gs.current = o, De = s, dt !== null ? t = 0 : (vt = null, St = 0, t = ht);
    }
    if (t !== 0) {
      if (t === 2 && (s = xa(e), s !== 0 && (r = s, t = Vl(e, s))), t === 1) throw n = Di, gr(e, 0), nr(e, r), It(e, ye()), n;
      if (t === 6) nr(e, r);
      else {
        if (s = e.current.alternate, (r & 30) === 0 && !Ih(s) && (t = qs(e, r), t === 2 && (o = xa(e), o !== 0 && (r = o, t = Vl(e, o))), t === 1)) throw n = Di, gr(e, 0), nr(e, r), It(e, ye()), n;
        switch (e.finishedWork = s, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            xr(e, Ot, Fn);
            break;
          case 3:
            if (nr(e, r), (r & 130023424) === r && (t = Dl + 500 - ye(), 10 < t)) {
              if (ls(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & r) !== r) {
                At(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = Wa(xr.bind(null, e, Ot, Fn), t);
              break;
            }
            xr(e, Ot, Fn);
            break;
          case 4:
            if (nr(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var d = 31 - rn(r);
              o = 1 << d, d = t[d], d > s && (s = d), r &= ~o;
            }
            if (r = s, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Oh(r / 1960)) - r, 10 < r) {
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
    return e.current.memoizedState.isDehydrated && (gr(e, t).flags |= 256), e = qs(e, t), e !== 2 && (t = Ot, Ot = n, t !== null && Bl(t)), e;
  }
  function Bl(e) {
    Ot === null ? Ot = e : Ot.push.apply(Ot, e);
  }
  function Ih(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var s = n[r], o = s.getSnapshot;
          s = s.value;
          try {
            if (!sn(o(), s)) return !1;
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
    for (t &= ~Il, t &= ~Ws, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - rn(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Dc(e) {
    if ((De & 6) !== 0) throw Error(u(327));
    Yr();
    var t = ls(e, 0);
    if ((t & 1) === 0) return It(e, ye()), null;
    var n = qs(e, t);
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
      De = n, De === 0 && (Qr = ye() + 500, Cs && Yn());
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
    if (n !== -1 && (e.timeoutHandle = -1, hh(n)), dt !== null) for (n = dt.return; n !== null; ) {
      var r = n;
      switch (qa(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Es();
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
    if (vt = e, dt = e = rr(e.current, null), St = Ht = t, ht = 0, Di = null, Il = Ws = kr = 0, Ot = zi = null, mr !== null) {
      for (t = 0; t < mr.length; t++) if (n = mr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var s = r.next, o = n.pending;
        if (o !== null) {
          var d = o.next;
          o.next = s, r.next = d;
        }
        n.pending = r;
      }
      mr = null;
    }
    return e;
  }
  function zc(e, t) {
    do {
      var n = dt;
      try {
        if (il(), Os.current = bs, Is) {
          for (var r = at.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), r = r.next;
          }
          Is = !1;
        }
        if (vr = 0, pt = ft = at = null, Ri = !1, Li = 0, Ol.current = null, n === null || n.return === null) {
          ht = 1, Di = t, dt = null;
          break;
        }
        e: {
          var o = e, d = n.return, p = n, y = t;
          if (t = St, p.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var M = y, W = p, Y = W.tag;
            if ((W.mode & 1) === 0 && (Y === 0 || Y === 11 || Y === 15)) {
              var H = W.alternate;
              H ? (W.updateQueue = H.updateQueue, W.memoizedState = H.memoizedState, W.lanes = H.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var re = cc(d);
            if (re !== null) {
              re.flags &= -257, dc(re, d, p, o, t), re.mode & 1 && uc(o, M, t), t = re, y = M;
              var ue = t.updateQueue;
              if (ue === null) {
                var fe = /* @__PURE__ */ new Set();
                fe.add(y), t.updateQueue = fe;
              } else ue.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                uc(o, M, t), Kl();
                break e;
              }
              y = Error(u(426));
            }
          } else if (rt && p.mode & 1) {
            var ut = cc(d);
            if (ut !== null) {
              (ut.flags & 65536) === 0 && (ut.flags |= 256), dc(ut, d, p, o, t), nl(Kr(y, p));
              break e;
            }
          }
          o = y = Kr(y, p), ht !== 4 && (ht = 2), zi === null ? zi = [o] : zi.push(o), o = d;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var E = lc(o, y, t);
                $u(o, E);
                break e;
              case 1:
                p = y;
                var x = o.type, _ = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (qn === null || !qn.has(_)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var X = oc(o, p, t);
                  $u(o, X);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Bc(n);
      } catch (he) {
        t = he, dt === n && n !== null && (dt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bc() {
    var e = Gs.current;
    return Gs.current = bs, e === null ? bs : e;
  }
  function Kl() {
    (ht === 0 || ht === 3 || ht === 2) && (ht = 4), vt === null || (kr & 268435455) === 0 && (Ws & 268435455) === 0 || nr(vt, St);
  }
  function qs(e, t) {
    var n = De;
    De |= 2;
    var r = bc();
    (vt !== e || St !== t) && (Fn = null, gr(e, t));
    do
      try {
        Dh();
        break;
      } catch (s) {
        zc(e, s);
      }
    while (!0);
    if (il(), De = n, Gs.current = r, dt !== null) throw Error(u(261));
    return vt = null, St = 0, ht;
  }
  function Dh() {
    for (; dt !== null; ) Vc(dt);
  }
  function zh() {
    for (; dt !== null && !L(); ) Vc(dt);
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
        if (n = Ah(n, t, Ht), n !== null) {
          dt = n;
          return;
        }
      } else {
        if (n = Rh(n, t), n !== null) {
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
    var r = He, s = en.transition;
    try {
      en.transition = null, He = 1, bh(e, t, n, r);
    } finally {
      en.transition = s, He = r;
    }
    return null;
  }
  function bh(e, t, n, r) {
    do
      Yr();
    while (er !== null);
    if ((De & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (xf(e, o), e === vt && (dt = vt = null, St = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ys || (Ys = !0, Gc(zn, function() {
      return Yr(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = en.transition, en.transition = null;
      var d = He;
      He = 1;
      var p = De;
      De |= 4, Ol.current = null, $h(e, n), Rc(n, e), ah(Ka), cs = !!Ha, Ka = Ha = null, e.current = n, Fh(n), le(), De = p, He = d, en.transition = o;
    } else e.current = n;
    if (Ys && (Ys = !1, er = e, Js = s), o = e.pendingLanes, o === 0 && (qn = null), mf(n.stateNode), It(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
    if (Qs) throw Qs = !1, e = zl, zl = null, e;
    return (Js & 1) !== 0 && e.tag !== 0 && Yr(), o = e.pendingLanes, (o & 1) !== 0 ? e === bl ? bi++ : (bi = 0, bl = e) : bi = 0, Yn(), null;
  }
  function Yr() {
    if (er !== null) {
      var e = Po(Js), t = en.transition, n = He;
      try {
        if (en.transition = null, He = 16 > e ? 16 : e, er === null) var r = !1;
        else {
          if (e = er, er = null, Js = 0, (De & 6) !== 0) throw Error(u(331));
          var s = De;
          for (De |= 4, se = e.current; se !== null; ) {
            var o = se, d = o.child;
            if ((se.flags & 16) !== 0) {
              var p = o.deletions;
              if (p !== null) {
                for (var y = 0; y < p.length; y++) {
                  var M = p[y];
                  for (se = M; se !== null; ) {
                    var W = se;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ii(8, W, o);
                    }
                    var Y = W.child;
                    if (Y !== null) Y.return = W, se = Y;
                    else for (; se !== null; ) {
                      W = se;
                      var H = W.sibling, re = W.return;
                      if (_c(W), W === M) {
                        se = null;
                        break;
                      }
                      if (H !== null) {
                        H.return = re, se = H;
                        break;
                      }
                      se = re;
                    }
                  }
                }
                var ue = o.alternate;
                if (ue !== null) {
                  var fe = ue.child;
                  if (fe !== null) {
                    ue.child = null;
                    do {
                      var ut = fe.sibling;
                      fe.sibling = null, fe = ut;
                    } while (fe !== null);
                  }
                }
                se = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) d.return = o, se = d;
            else e: for (; se !== null; ) {
              if (o = se, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Ii(9, o, o.return);
              }
              var E = o.sibling;
              if (E !== null) {
                E.return = o.return, se = E;
                break e;
              }
              se = o.return;
            }
          }
          var x = e.current;
          for (se = x; se !== null; ) {
            d = se;
            var _ = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && _ !== null) _.return = d, se = _;
            else e: for (d = x; se !== null; ) {
              if (p = se, (p.flags & 2048) !== 0) try {
                switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ks(9, p);
                }
              } catch (he) {
                ot(p, p.return, he);
              }
              if (p === d) {
                se = null;
                break e;
              }
              var X = p.sibling;
              if (X !== null) {
                X.return = p.return, se = X;
                break e;
              }
              se = p.return;
            }
          }
          if (De = s, Yn(), kn && typeof kn.onPostCommitFiberRoot == "function") try {
            kn.onPostCommitFiberRoot(is, e);
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
  function Vh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = At(), e.pingedLanes |= e.suspendedLanes & n, vt === e && (St & n) === n && (ht === 4 || ht === 3 && (St & 130023424) === St && 500 > ye() - Dl ? gr(e, 0) : Il |= n), It(e, t);
  }
  function Hc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = as, as <<= 1, (as & 130023424) === 0 && (as = 4194304)));
    var n = At();
    e = Rn(e, t), e !== null && (ci(e, t, n), It(e, n));
  }
  function Bh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Hc(e, n);
  }
  function Uh(e, t) {
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
        throw Error(u(314));
    }
    r !== null && r.delete(t), Hc(e, n);
  }
  var Kc;
  Kc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Lt.current) Ft = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ft = !1, Ph(e, t, n);
      Ft = (e.flags & 131072) !== 0;
    }
    else Ft = !1, rt && (t.flags & 1048576) !== 0 && Eu(t, Ts, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Us(e, t), e = t.pendingProps;
        var s = Ir(t, Et.current);
        Ur(t, n), s = pl(null, t, r, e, s, n);
        var o = vl();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $t(r) ? (o = !0, Ns(t)) : o = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, ol(t), s.updater = Vs, t.stateNode = s, s._reactInternals = t, Sl(t, r, e, n), t = Cl(null, t, r, !0, o, n)) : (t.tag = 0, rt && o && Za(t), Pt(null, t, s, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Us(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Kh(r), e = ln(r, e), s) {
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
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ln(r, s), Nl(e, t, r, s, n);
      case 1:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ln(r, s), kc(e, t, r, s, n);
      case 3:
        e: {
          if (yc(t), e === null) throw Error(u(387));
          r = t.pendingProps, o = t.memoizedState, s = o.element, Lu(e, t), $s(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            s = Kr(Error(u(423)), t), t = gc(e, t, r, n, s);
            break e;
          } else if (r !== s) {
            s = Kr(Error(u(424)), t), t = gc(e, t, r, n, s);
            break e;
          } else for (Ut = Gn(t.stateNode.containerInfo.firstChild), Bt = t, rt = !0, an = null, n = Au(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (br(), r === s) {
              t = $n(e, t, n);
              break e;
            }
            Pt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ou(t), e === null && tl(t), r = t.type, s = t.pendingProps, o = e !== null ? e.memoizedProps : null, d = s.children, Ga(r, s) ? d = null : o !== null && Ga(r, o) && (t.flags |= 32), vc(e, t), Pt(e, t, d, n), t.child;
      case 6:
        return e === null && tl(t), null;
      case 13:
        return xc(e, t, n);
      case 4:
        return ul(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Vr(t, null, r, n) : Pt(e, t, r, n), t.child;
      case 11:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ln(r, s), fc(e, t, r, s, n);
      case 7:
        return Pt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Pt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Pt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, s = t.pendingProps, o = t.memoizedProps, d = s.value, Xe(As, r._currentValue), r._currentValue = d, o !== null) if (sn(o.value, d)) {
            if (o.children === s.children && !Lt.current) {
              t = $n(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var p = o.dependencies;
            if (p !== null) {
              d = o.child;
              for (var y = p.firstContext; y !== null; ) {
                if (y.context === r) {
                  if (o.tag === 1) {
                    y = Ln(-1, n & -n), y.tag = 2;
                    var M = o.updateQueue;
                    if (M !== null) {
                      M = M.shared;
                      var W = M.pending;
                      W === null ? y.next = y : (y.next = W.next, W.next = y), M.pending = y;
                    }
                  }
                  o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), al(
                    o.return,
                    n,
                    t
                  ), p.lanes |= n;
                  break;
                }
                y = y.next;
              }
            } else if (o.tag === 10) d = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (d = o.return, d === null) throw Error(u(341));
              d.lanes |= n, p = d.alternate, p !== null && (p.lanes |= n), al(d, n, t), d = o.sibling;
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
          Pt(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, r = t.pendingProps.children, Ur(t, n), s = Zt(s), r = r(s), t.flags |= 1, Pt(e, t, r, n), t.child;
      case 14:
        return r = t.type, s = ln(r, t.pendingProps), s = ln(r.type, s), hc(e, t, r, s, n);
      case 15:
        return mc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ln(r, s), Us(e, t), t.tag = 1, $t(r) ? (e = !0, Ns(t)) : e = !1, Ur(t, n), sc(t, r, s), Sl(t, r, s, n), Cl(null, t, r, !0, e, n);
      case 19:
        return Sc(e, t, n);
      case 22:
        return pc(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Gc(e, t) {
    return Cn(e, t);
  }
  function Hh(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tn(e, t, n, r) {
    return new Hh(e, t, n, r);
  }
  function Gl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Kh(e) {
    if (typeof e == "function") return Gl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Le) return 11;
      if (e === K) return 14;
    }
    return 2;
  }
  function rr(e, t) {
    var n = e.alternate;
    return n === null ? (n = tn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ea(e, t, n, r, s, o) {
    var d = 2;
    if (r = e, typeof e == "function") Gl(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case T:
        return jr(n.children, s, o, t);
      case z:
        d = 8, s |= 8;
        break;
      case ne:
        return e = tn(12, n, t, s | 2), e.elementType = ne, e.lanes = o, e;
      case Te:
        return e = tn(13, n, t, s), e.elementType = Te, e.lanes = o, e;
      case Me:
        return e = tn(19, n, t, s), e.elementType = Me, e.lanes = o, e;
      case te:
        return ta(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ie:
            d = 10;
            break e;
          case Ee:
            d = 9;
            break e;
          case Le:
            d = 11;
            break e;
          case K:
            d = 14;
            break e;
          case oe:
            d = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = tn(d, n, t, s), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function jr(e, t, n, r) {
    return e = tn(7, e, r, t), e.lanes = n, e;
  }
  function ta(e, t, n, r) {
    return e = tn(22, e, r, t), e.elementType = te, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Wl(e, t, n) {
    return e = tn(6, e, null, t), e.lanes = n, e;
  }
  function Ql(e, t, n) {
    return t = tn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Gh(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ja(0), this.expirationTimes = ja(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ja(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function Yl(e, t, n, r, s, o, d, p, y) {
    return e = new Gh(e, t, n, p, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = tn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ol(o), e;
  }
  function Wh(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ee, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
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
  function Qc(e, t, n, r, s, o, d, p, y) {
    return e = Yl(n, r, !0, e, s, o, d, p, y), e.context = Wc(null), n = e.current, r = At(), s = tr(n), o = Ln(r, s), o.callback = t ?? null, Xn(n, o, s), e.current.lanes = s, ci(e, s, r), It(e, r), e;
  }
  function na(e, t, n, r) {
    var s = t.current, o = At(), d = tr(s);
    return n = Wc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ln(o, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Xn(s, t, d), e !== null && (cn(e, s, d, o), Ls(e, s, d)), d;
  }
  function ra(e) {
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
  function Qh() {
    return null;
  }
  var Jc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Xl(e) {
    this._internalRoot = e;
  }
  ia.prototype.render = Xl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    na(e, t, null, null);
  }, ia.prototype.unmount = Xl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      yr(function() {
        na(null, e, null, null);
      }), t[Tn] = null;
    }
  };
  function ia(e) {
    this._internalRoot = e;
  }
  ia.prototype.unstable_scheduleHydration = function(e) {
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
  function sa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Xc() {
  }
  function Yh(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var M = ra(d);
          o.call(M);
        };
      }
      var d = Qc(t, r, e, 0, null, !1, !1, "", Xc);
      return e._reactRootContainer = d, e[Tn] = d.current, Ei(e.nodeType === 8 ? e.parentNode : e), yr(), d;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof r == "function") {
      var p = r;
      r = function() {
        var M = ra(y);
        p.call(M);
      };
    }
    var y = Yl(e, 0, !1, null, null, !1, !1, "", Xc);
    return e._reactRootContainer = y, e[Tn] = y.current, Ei(e.nodeType === 8 ? e.parentNode : e), yr(function() {
      na(t, y, n, r);
    }), y;
  }
  function aa(e, t, n, r, s) {
    var o = n._reactRootContainer;
    if (o) {
      var d = o;
      if (typeof s == "function") {
        var p = s;
        s = function() {
          var y = ra(d);
          p.call(y);
        };
      }
      na(t, d, e, s);
    } else d = Yh(n, t, e, s, r);
    return ra(d);
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
            var s = At();
            cn(r, e, 1, s);
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
              var s = ws(r);
              if (!s) throw Error(u(90));
              ae(r), $e(r, s);
            }
          }
        }
        break;
      case "textarea":
        ze(e, n);
        break;
      case "select":
        t = n.value, t != null && Ue(e, !!n.multiple, t, !1);
    }
  }, Oe = Ul, nt = yr;
  var Jh = { usingClientEntryPoint: !1, Events: [_i, Fr, ws, mn, Dn, Ul] }, Vi = { findFiberByHostInstance: cr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Xh = { bundleType: Vi.bundleType, version: Vi.version, rendererPackageName: Vi.rendererPackageName, rendererConfig: Vi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: G.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ns(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Vi.findFiberByHostInstance || Qh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var la = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!la.isDisabled && la.supportsFiber) try {
      is = la.inject(Xh), kn = la;
    } catch {
    }
  }
  return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jh, Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zl(t)) throw Error(u(200));
    return Wh(e, t, null, n);
  }, Dt.createRoot = function(e, t) {
    if (!Zl(e)) throw Error(u(299));
    var n = !1, r = "", s = Jc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Yl(e, 1, !1, null, null, n, !1, r, s), e[Tn] = t.current, Ei(e.nodeType === 8 ? e.parentNode : e), new Xl(t);
  }, Dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = ns(t), e = e === null ? null : e.stateNode, e;
  }, Dt.flushSync = function(e) {
    return yr(e);
  }, Dt.hydrate = function(e, t, n) {
    if (!sa(t)) throw Error(u(200));
    return aa(null, e, t, !0, n);
  }, Dt.hydrateRoot = function(e, t, n) {
    if (!Zl(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, s = !1, o = "", d = Jc;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = Qc(t, null, e, 1, n ?? null, s, !1, o, d), e[Tn] = t.current, Ei(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new ia(t);
  }, Dt.render = function(e, t, n) {
    if (!sa(t)) throw Error(u(200));
    return aa(null, e, t, !1, n);
  }, Dt.unmountComponentAtNode = function(e) {
    if (!sa(e)) throw Error(u(40));
    return e._reactRootContainer ? (yr(function() {
      aa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Tn] = null;
      });
    }), !0) : !1;
  }, Dt.unstable_batchedUpdates = Ul, Dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!sa(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return aa(e, t, n, !1, r);
  }, Dt.version = "18.3.1-next-f1338f8080-20240426", Dt;
}
var sd;
function am() {
  if (sd) return to.exports;
  sd = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), to.exports = sm(), to.exports;
}
var ad;
function lm() {
  if (ad) return oa;
  ad = 1;
  var i = am();
  return oa.createRoot = i.createRoot, oa.hydrateRoot = i.hydrateRoot, oa;
}
var om = lm();
const um = (() => {
  const i = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", u = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], f = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, m = 7, k = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], S = ["e", "B", "G", "D", "A", "E"], $ = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], C = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], F = {
    mp: {
      name: "mollipentatoninen",
      base: v,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: v,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: v,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: v,
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
  }, D = 26, V = 72, w = 30, R = 54, U = 34, N = 11, P = (D + V) / 2, G = w + (c.length - 1) * U + 30, Z = (j) => V + j * R, ee = (j) => j === 0 ? P : Z(j) - R / 2, T = (j) => w + j * U;
  function z(j, b, O) {
    const q = a.indexOf(i[j][0]) + Number(O.slice(-1)) - 1, de = q % a.length, ae = u[de] + 12 * Math.floor(q / a.length), me = j + b - ae;
    return a[de] + (me < 0 ? "♭" : "♯").repeat(Math.abs(me));
  }
  function ne(j) {
    return [...j.base, ...j.add].sort((b, O) => b[0] - O[0]);
  }
  function ie(j, b, O) {
    const q = b + (O ? 1 : 0), de = k[q % k.length], ae = Math.min(...de.map(([$e]) => $e)), me = Math.max(...de.map(([, $e]) => $e));
    let je = (j - f % 12 + 12) % 12 - (O ? 8 : 5) + 12 * Math.floor(q / k.length);
    return ae + je < 0 && (je += 12), me + je > h.pentatonic && (je -= 12), {
      strings: de.map(($e) => $e.map((Ye) => Ye + je)),
      start: ae + je,
      end: me + je
    };
  }
  function Ee(j, b, O) {
    const q = O[b], de = (j + q - f % 12 + 12) % 12, ae = f + de - q, me = c.map((pe, Pe) => {
      const je = b + (c.length - 1 - Pe) * 3;
      return [je, je + 1, je + 2].map(($e) => {
        const Ye = Math.floor($e / O.length), Be = O[$e % O.length];
        return ae + Be + 12 * Ye - pe;
      });
    });
    return {
      strings: me,
      start: Math.min(...me.map((pe) => pe[0])),
      end: Math.max(...me.map((pe) => pe.at(-1)))
    };
  }
  function Le(j, b) {
    const O = [], q = Math.ceil(-j.end / 12) * 12;
    for (let ae = q; j.start + ae <= b; ae += 12) {
      const me = j.strings.map((Pe) => Pe.map((je) => je + ae).filter((je) => je >= 0 && je <= b)), pe = me.flat();
      O.push({
        strings: me,
        start: Math.min(...pe),
        end: Math.max(...pe),
        partial: j.start + ae < 0 || j.end + ae > b
      });
    }
    const de = O.filter((ae) => !ae.partial);
    return de.length ? de : O;
  }
  function Te(j) {
    return ne(j).length === m;
  }
  function Me(j, b, O) {
    const q = Te(b);
    j.querySelector('[value="3nps"]').disabled = !q, j.value = q ? O ?? "3nps" : "pentatonic";
  }
  function K(j, b, O, q, de) {
    const ae = ne(b).map(([me]) => me);
    return q.map((me) => {
      const pe = me - 1, Pe = O === "3nps" ? Ee(j, pe, ae) : ie(j, pe, b.base === C), je = de === void 0 ? [Pe] : Le(Pe, de);
      return { number: me, positions: je };
    });
  }
  function oe(j, b) {
    const O = j.getBoundingClientRect(), q = j.querySelectorAll(b);
    let de = 1 / 0;
    q.forEach((ae) => {
      const me = ae.getBoundingClientRect();
      let pe = 0;
      me.left < O.left ? pe = me.left - O.left - 8 : me.right > O.right && (pe = me.right - O.right + 8), Math.abs(pe) < Math.abs(de) && (de = pe);
    }), Number.isFinite(de) && (j.scrollLeft += de);
  }
  function te(j, b = !1) {
    const O = j === "3nps" ? m : k.length;
    return Array.from({ length: O }, (q, de) => {
      const ae = de + 1;
      return '<label class="box-toggle" data-box="' + ae + '"><input type="checkbox" value="' + ae + '"' + (b && de === 0 ? " checked" : "") + "> Boksi " + ae + "</label>";
    }).join("");
  }
  function A(j, b) {
    const O = ne(b), q = new Map(O.map(([ae, me]) => [ae, z(j, ae, me)])), de = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return O.flatMap(([ae, me]) => de.flatMap(({ suffix: pe, base: Pe }) => {
      const je = Pe.map(([$e]) => q.get((ae + $e) % 12));
      return je.every(Boolean) ? {
        root: (j + ae) % 12,
        degree: Number(String(me).replace(/\D/g, "")),
        name: je[0] + pe,
        notes: je,
        base: Pe,
        add: []
      } : [];
    }));
  }
  function Q(j, b) {
    const O = j.base.map(([ae]) => (j.root + ae) % 12), q = c.map((ae) => {
      const me = [];
      for (let pe = 0; pe <= b; pe++) {
        const Pe = (ae + pe) % 12;
        O.includes(Pe) && me.push({ fret: pe, pitch: Pe });
      }
      return me;
    }), de = [];
    for (let ae = 0; ae <= q.length - 3; ae++)
      for (const me of q[ae])
        for (const pe of q[ae + 1])
          if (me.pitch !== pe.pitch)
            for (const Pe of q[ae + 2]) {
              if (Pe.pitch === me.pitch || Pe.pitch === pe.pitch) continue;
              const je = [me.fret, pe.fret, Pe.fret], $e = Math.min(...je), Ye = Math.max(...je);
              if (Ye - $e > 3) continue;
              const Be = Array(c.length).fill(null);
              Be.splice(ae, 3, ...je), de.push({ strings: Be, low: $e, high: Ye });
            }
    return de.sort((ae, me) => ae.high - me.high || ae.low - me.low);
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
  function I(j, b) {
    const O = J[j + ":" + b];
    if (O) return { frets: O, barre: null };
    let q = null;
    return g.forEach(({ string: de, openPC: ae, shapes: me }) => {
      const pe = me[b];
      if (!pe) return;
      let Pe = (j - ae + 12) % 12;
      if (Pe + Math.min(...pe.filter((Ye) => Ye !== null)) < 0 && (Pe += 12), q && q.fret <= Pe) return;
      const je = pe.map((Ye) => Ye === null ? null : Pe + Ye), $e = Pe > 0 && pe.at(-1) === 0 ? { fret: Pe, from: de, to: pe.length - 1 } : null;
      q = { fret: Pe, frets: je, barre: $e };
    }), q && { frets: q.frets, barre: q.barre };
  }
  function ve(j, { frets: b, barre: O }, q) {
    const je = [...c].reverse(), $e = b.filter((ze) => ze > 0), Be = !$e.length || Math.max(...$e) <= 4 && (b.includes(0) || Math.min(...$e) === 1) ? 1 : Math.min(...$e), Ge = (ze) => 24 + ze * 14, Ue = (ze) => 30 + (ze - Be) * 18 + 18 / 2, yt = 102;
    let Je = '<svg class="chord-svg" viewBox="0 0 108 ' + (yt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + q + "-ote paksusta kielestä ohueen: " + b.map((ze) => ze ?? "x").join(" ") + '">';
    for (let ze = 0; ze <= 4; ze++)
      Je += '<line class="' + (ze === 0 && Be === 1 ? "nut" : "fret") + '" x1="' + Ge(0) + '" y1="' + (30 + ze * 18) + '" x2="' + Ge(5) + '" y2="' + (30 + ze * 18) + '"/>';
    return b.forEach((ze, tt) => {
      Je += '<line class="string" x1="' + Ge(tt) + '" y1="30" x2="' + Ge(tt) + '" y2="' + yt + '"/>';
    }), Be > 1 && (Je += '<text class="fret-label" x="15" y="' + (Ue(Be) + 4) + '">' + Be + "</text>"), O && (Je += '<rect class="barre" x="' + (Ge(O.from) - 6.5) + '" y="' + (Ue(O.fret) - 6.5) + '" width="' + ((O.to - O.from) * 14 + 13) + '" height="13" rx="6.5"/>'), b.forEach((ze, tt) => {
      if (ze === null) {
        Je += '<text class="marker" x="' + Ge(tt) + '" y="22">×</text>';
        return;
      }
      const Tt = (je[tt] + ze) % 12 === j;
      if (ze === 0) {
        Je += '<circle class="open' + (Tt ? " root-open" : "") + '" cx="' + Ge(tt) + '" cy="18" r="4.5"/>';
        return;
      }
      O && ze === O.fret && tt >= O.from && tt <= O.to && !Tt || (Je += '<circle class="' + (Tt ? "root" : "tone") + '" cx="' + Ge(tt) + '" cy="' + Ue(ze) + '" r="6.5"/>');
    }), Je + "</svg>";
  }
  function we(j, b) {
    const O = new URLSearchParams(location.search), q = i.indexOf(O.get("toonikka")), de = O.get("asteikko");
    return {
      rootPC: q === -1 ? j : q,
      scaleId: Object.hasOwn(F, de) ? de : b
    };
  }
  function _e(j, b, O) {
    return j + "?" + new URLSearchParams({ toonikka: i[b], asteikko: O });
  }
  function Ne(j, b, O, {
    boxes: q = [],
    onlyBoxNotes: de = !1,
    automatic: ae = !0,
    focusDegree: me = "",
    grip: pe = null,
    barre: Pe = null,
    label: je = i[j] + " " + b.name,
    notes: $e = null,
    targets: Ye = !1,
    muteFret: Be = null
  } = {}) {
    const Ge = Z(O), Ue = Ge + 48, yt = Ue + 28, Je = w - 14, ze = T(c.length - 1) + 14, tt = ze - Je, Tt = ae ? 680 : Math.ceil(yt * 0.64), Kt = q.flatMap((Se) => Se.positions), zt = {};
    b.base.forEach(([Se, Re]) => zt[(j + Se) % 12] = { deg: Re, added: !1 }), b.add.forEach(([Se, Re]) => zt[(j + Se) % 12] = { deg: Re, added: !0 });
    const nn = c.map((Se, Re) => !!pe && pe[Re] === null), Gt = !!pe && Be !== null, ct = $.filter((Se, Re) => nn[Re]).reverse(), In = je + ". " + O + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (ct.length ? " Soittamatta jäävät kielet: " + ct.join(", ") + "." : "");
    let ke = '<svg viewBox="0 0 ' + yt + " " + G + '" style="min-width:' + Tt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Ye ? "group" : "img") + '" aria-label="' + In + '">';
    ke += '<rect x="' + D + '" y="' + Je + '" width="' + (V - D) + '" height="' + tt + '" rx="6" fill="#2a2338"/>', ke += '<rect x="' + V + '" y="' + Je + '" width="' + (Ge - V) + '" height="' + tt + '" fill="#231a12"/>', ke += '<rect x="' + Ge + '" y="' + Je + '" width="' + (yt - Ge - 4) + '" height="' + tt + '" rx="8" fill="#32251e"/>';
    for (let Se = 1; Se <= O; Se++)
      ke += '<line x1="' + Z(Se) + '" y1="' + Je + '" x2="' + Z(Se) + '" y2="' + ze + '" stroke="#6f5b47" stroke-width="2"/>';
    ke += '<rect x="' + (V - 3) + '" y="' + Je + '" width="6" height="' + tt + '" rx="2" fill="#d8cbb6"/>', ke += '<rect x="' + (Ue - 11) + '" y="' + (Je + 3) + '" width="22" height="' + (tt - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', ke += '<rect x="' + (Ue - 4) + '" y="' + (Je + 7) + '" width="3" height="' + (tt - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Wt = (Je + ze) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Se) => Se <= O).forEach((Se) => ke += '<circle cx="' + ee(Se) + '" cy="' + Wt + '" r="5.5" fill="#7a6550"/>');
    for (let Se = 12; Se <= O; Se += 12)
      ke += '<circle cx="' + ee(Se) + '" cy="' + (Wt - U) + '" r="5.5" fill="#7a6550"/>', ke += '<circle cx="' + ee(Se) + '" cy="' + (Wt + U) + '" r="5.5" fill="#7a6550"/>';
    ke += '<text x="' + P + '" y="' + (G - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', ke += '<text x="' + V + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', ke += '<text x="' + Ue + '" y="' + (G - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Se = 1; Se <= O; Se++)
      ke += '<text x="' + ee(Se) + '" y="' + (G - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Se + "</text>";
    if (q.forEach(({ number: Se, positions: Re }) => {
      Re.forEach((Ae) => {
        const We = Ae.partial ? "box-highlight box-partial" : "box-highlight";
        ke += '<g class="' + We + '" data-box="' + Se + '" aria-hidden="true">';
        const Ze = Ae.strings.find((gt) => gt.length), Qt = (ee(Ze[0]) + ee(Ze.at(-1))) / 2;
        ke += '<text class="box-number" x="' + Qt + '" y="12">' + Se + "</text>", Ae.strings.forEach((gt, bt) => {
          if (!gt.length) return;
          const hn = ee(gt[0]) - 16, mn = ee(gt.at(-1)) - ee(gt[0]) + 32;
          ke += '<rect class="box-band" x="' + hn + '" y="' + (T(bt) - 14) + '" width="' + mn + '" height="28" rx="14"/>';
        }), ke += "</g>";
      });
    }), c.forEach((Se, Re) => {
      const Ae = 1 + Re * 0.45, We = T(Re), Ze = nn[Re] && !Gt;
      Ze ? ke += '<text class="muted-mark" x="' + P + '" y="' + (We + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : nn[Re] && Be === 0 || (ke += '<line x1="' + (D + 4) + '" y1="' + We + '" x2="' + (V - 4) + '" y2="' + We + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), ke += "<g" + (Ze ? ' opacity=".35"' : "") + ">", ke += '<line x1="' + V + '" y1="' + We + '" x2="' + (Ue + 5) + '" y2="' + We + '" stroke="#b9b9c4" stroke-width="' + Ae.toFixed(2) + '"/>', ke += '<circle cx="' + (Ue + 5) + '" cy="' + We + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', ke += "</g>", ke += '<text x="13" y="' + (We + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + S[Re] + "</text>";
    }), pe && Pe && Pe.fret >= 1 && Pe.fret <= O) {
      const Se = T(Pe.from), Re = T(Pe.to), Ae = Math.min(Se, Re) - 6, We = Math.max(Se, Re) + 6;
      ke += '<rect class="barre-indicator" x="' + (ee(Pe.fret) - 7) + '" y="' + Ae + '" width="14" height="' + (We - Ae) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Ye && (ke += '<g class="fret-targets">', c.forEach((Se, Re) => {
      for (let Ae = 0; Ae <= O; Ae++) {
        const We = Ae ? $[Re] + "-kieli, " + Ae + ". nauha" : "vapaa " + $[Re] + "-kieli", Ze = Ae ? R : V - D - 6;
        ke += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Re + '" data-fret="' + Ae + '" data-midi="' + (Se + Ae) + '" aria-label="' + We + '" x="' + (ee(Ae) - Ze / 2) + '" y="' + (T(Re) - U / 2) + '" width="' + Ze + '" height="' + U + '" fill="transparent"/>';
      }
    }), ke += "</g>"), ($e ?? []).forEach(({ string: Se, fret: Re, label: Ae, kind: We }) => {
      ke += '<g class="octave-note octave-' + We + '">', ke += '<circle cx="' + ee(Re) + '" cy="' + T(Se) + '" r="' + N + '"/>', ke += '<text x="' + ee(Re) + '" y="' + (T(Se) + 3.5) + '" font-size="' + (Ae.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Ae + "</text>", ke += "</g>";
    }), pe && (ke += '<g class="grip-notes">'), ($e ? [] : c).forEach((Se, Re) => {
      for (let Ae = 0; Ae <= O; Ae++) {
        const We = (Se + Ae) % 12;
        if (!(We in zt) || pe && pe[Re] !== Ae || de && !Kt.some(({ strings: mn }) => {
          const Dn = mn[Re];
          return Dn.length > 0 && Ae >= Dn[0] && Ae <= Dn.at(-1);
        })) continue;
        const Ze = zt[We], Qt = Ze.deg === "1", gt = Ze.added ? "#f0a13c" : Qt ? "#4b2fd6" : "#6d4aff", bt = Ze.added ? "#1a1430" : "#fff";
        Ze.deg === me && (ke += '<circle class="focus-note" cx="' + ee(Ae) + '" cy="' + T(Re) + '" r="14.5"/>');
        const hn = pe ? ' data-string="' + (Re + 1) + '" data-fret="' + Ae + '" data-degree="' + Ze.deg + '"' : "";
        ke += "<circle" + hn + ' cx="' + ee(Ae) + '" cy="' + T(Re) + '" r="' + N + '" fill="' + gt + '" stroke="' + (Qt ? "#fff" : "#1a1430") + '" stroke-width="' + (Qt ? 2.5 : 1) + '"/>', ke += '<text x="' + ee(Ae) + '" y="' + (T(Re) + 3.5) + '" font-size="' + (Ze.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + bt + '" text-anchor="middle">' + Ze.deg + "</text>";
      }
    }), pe && (ke += "</g>"), Gt && nn.forEach((Se, Re) => {
      if (!Se) return;
      const Ae = ee(Be), We = T(Re);
      ke += '<g class="muted-mark grip-mute" data-string="' + (Re + 1) + '" data-fret="' + Be + '">', ke += '<circle cx="' + Ae + '" cy="' + We + '" r="9" fill="' + (Be === 0 ? "#2a2338" : "#231a12") + '"/>', ke += '<text x="' + Ae + '" y="' + (We + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', ke += "</g>";
    }), ke += "</svg>", ke;
  }
  return {
    CHROM: i,
    OPEN_PITCHES: c,
    PENT_MAJ: C,
    SCALES: F,
    noteName: z,
    scaleNotes: ne,
    scaleTriads: A,
    triadGrips: Q,
    chordGrip: I,
    renderChordDiagram: ve,
    selectionFromURL: we,
    selectionHref: _e,
    renderBoard: Ne,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: Te,
    syncBoxSystem: Me,
    fingeringBoxes: K,
    boxOptions: te,
    revealPositions: oe
  };
})();
globalThis.MusicMapFretboard = um;
function ld(i) {
  return 440 * Math.pow(2, (i - 69) / 12);
}
function cm(i) {
  return 69 + 12 * Math.log2(i / 440);
}
function dm(i) {
  const a = cm(i), u = Math.round(a), c = (a - u) * 100;
  return { midi: u, cents: c };
}
const Ve = globalThis.MusicMapFretboard, Ke = (i) => (i % 12 + 12) % 12, fm = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], hm = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ie = (i, a = !1, u = !1) => (a ? hm : fm)[Ke(i)] + (u ? Math.floor(i / 12) - 1 : ""), ar = (i) => Ve.CHROM[Ke(i)], Gi = (i, a, u) => Ve.noteName(Ke(i), a, u);
function mm(i, a) {
  const u = Math.floor(i / 12) - 1;
  return a[0] === "B" && Ke(i) < 2 ? u - 1 : a[0] === "C" && Ke(i) > 9 ? u + 1 : u;
}
const fn = ["ohut E", "B", "G", "D", "A", "paksu E"], wo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Dd = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], pm = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Er = (i) => i === 0 ? "vapaa kieli" : `${i}. nauha`, va = (i, a) => ({ string: i, fret: a, midi: Ve.OPEN_PITCHES[i] + a });
function si(i, a, u) {
  return [...i].sort((c, f) => c - f).flatMap((c) => Array.from({ length: Math.max(0, u - a + 1) }, (f, h) => va(c, a + h)));
}
const it = (i) => `${i.string}:${i.fret}`, wr = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, zd = (i, a) => a === "maj" ? `${ar(i)}-duurisointu` : a === "min" ? `${ar(i)}-mollisointu` : `${ar(i)}7-sointu`, Wi = [
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
function bd(i, a) {
  const u = od[a] ?? od.E, c = Ke(i - u.root);
  return u.frets.flatMap((f, h) => f === null ? [] : [va(h, f + c)]);
}
const fa = {
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
}, sr = (i, a, u, c) => typeof i == "number" && Number.isFinite(i) ? Math.max(a, Math.min(u, i)) : c, Sn = (i, a, u) => a.includes(i) ? i : u;
function pa(i) {
  const a = { ...fa };
  a.mode = Sn(i.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(i.strings) ? [...new Set(i.strings.filter((u) => Number.isInteger(u) && u >= 0 && u <= 5))].sort((u, c) => u - c) : a.strings, a.strings.length || (a.strings = [...fa.strings]), a.min = Math.round(sr(i.min, 0, 24, a.min)), a.max = Math.round(sr(i.max, a.min, 24, Math.max(a.min, a.max)));
  for (const u of ["accidentals", "flats", "weak", "advance", "reference"]) typeof i[u] == "boolean" && (a[u] = i[u]);
  return a.check = Sn(i.check, ["class", "pitch"], a.check), a.input = Sn(i.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(i.rounds) ? i.rounds : a.rounds, a.root = Math.round(sr(i.root, 0, 11, a.root)), a.scale = typeof i.scale == "string" && Object.hasOwn(Ve.SCALES, i.scale) ? i.scale : a.scale, a.box = Math.round(sr(i.box, 0, 5, a.box)), a.order = Sn(i.order, ["random", "up", "down"], a.order), a.chord = Sn(i.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = Sn(i.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = Sn(i.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(i.intervals) ? [...new Set(i.intervals.filter((u) => Number.isInteger(u) && u >= 1 && u <= 12))].sort((u, c) => u - c) : a.intervals, a.intervals.length || (a.intervals = [...fa.intervals]), a.direction = Sn(i.direction, ["up", "down", "both"], a.direction), a.hints = Sn(i.hints, ["off", "always", "fade"], a.hints), a.activity = Sn(i.activity, ["play", "degree"], a.activity), a.minRms = sr(i.minRms, 1e-3, 0.15, a.minRms), a.clarity = sr(i.clarity, 0.85, 0.99, a.clarity), a.stability = sr(i.stability, 120, 800, a.stability), a.cents = sr(i.cents, 10, 45, a.cents), a.device = typeof i.device == "string" ? i.device.slice(0, 256) : "", a;
}
function vm(i, a) {
  const u = new URLSearchParams(i), c = { ...a };
  for (const [f, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    u.has(f) && Object.assign(c, { [h]: u.get(f) });
  for (const [f, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    u.has(f) && (c[h] = Number(u.get(f)));
  u.has("kielet") && (c.strings = u.get("kielet").split(",").map((f) => Number(f) - 1)), u.has("intervallit") && (c.intervals = u.get("intervallit").split(",").map(Number));
  for (const [f, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    u.has(f) && (c[h] = u.get(f) === "1");
  if (u.has("toonikka")) {
    const f = u.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = f.charAt(0).toUpperCase() + f.slice(1), m = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], k = Math.max(Ve.CHROM.indexOf(h), m.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    k >= 0 && (c.root = k);
  }
  return pa(c);
}
function km(i) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: i.mode,
    toonikka: Ve.CHROM[i.root],
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
    kielet: i.strings.map((a) => a + 1).join(","),
    intervallit: i.intervals.join(","),
    kromaattinen: i.accidentals ? "1" : "0",
    alennukset: i.flats ? "1" : "0",
    kertaus: i.weak ? "1" : "0",
    vertailu: i.reference ? "1" : "0"
  });
}
const Nr = (i) => i.mode === "ear-note" ? "note" : ["scale", "chord"].includes(i.mode) && i.activity === "degree" ? "degree" : i.input, On = (i) => i.mode === "scale" && i.order !== "random", Vd = (i) => ["note", "degree"].includes(Nr(i)) ? "class" : On(i) ? "pitch" : i.check, ua = (i) => Nr(i) === "mic", ud = "musiikin-kartta:harjoittelu", Bd = 3, lo = () => ({ version: Bd, settings: { ...fa }, stats: {}, recent: [], sessions: [] }), Ud = (i) => `${i.input}:${i.check}:${i.hint ? "guided" : "solo"}:${i.item}`, dn = (i) => typeof i == "number" && Number.isFinite(i) && i >= 0;
function ym(i) {
  return !!i && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => dn(i[a])) && i.correct <= i.attempts && (i.errors === void 0 || dn(i.errors)) && (i.ema === void 0 || dn(i.ema) && i.ema <= 1) && (i.emaMs === void 0 || dn(i.emaMs));
}
function gm(i) {
  return !!i && typeof i.id == "string" && dn(i.count) && dn(i.first) && i.first <= i.count && dn(i.ms) && dn(i.at) && (i.solo === void 0 || dn(i.solo) && i.solo <= i.count) && (i.soloFirst === void 0 || dn(i.soloFirst) && i.soloFirst <= (i.solo ?? i.count));
}
function cd(i) {
  if (!i) return lo();
  const a = JSON.parse(i);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((m) => !ym(m))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((m) => !m || typeof m.id != "string" || !dn(m.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((m) => !gm(m)))) throw new Error("Virheellisiä kierroksia");
  const u = a.version < 3, c = pa(a.settings ?? {}), f = u && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  f && (c.hints = "off");
  const h = {
    version: Bd,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([m, k]) => [m, { ...k, errors: k.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (f || a.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const dd = 2500, xm = 8e3, fd = 0.3, Qi = (i) => i.ema ?? i.correct / i.attempts, Yi = (i) => i.emaMs ?? i.totalMs / i.attempts;
function Eo(i) {
  if (!i?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (Yi(i) - dd) / (xm - dd)));
  return Qi(i) * 0.65 + a * 0.35;
}
function jm(i) {
  return !i || i.attempts < 3 ? 3 : 0.25 + (1 - Eo(i)) * 3;
}
class hd {
  constructor(a) {
    this.storage = a;
    try {
      this.data = cd(a?.getItem(ud) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = lo();
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
  settings(a) {
    this.data.settings = a, this.save();
  }
  dismissNotice() {
    delete this.data.notice, this.save();
  }
  record(a) {
    if (this.data.recent.some((m) => m.id === a.id)) return;
    const u = Ud(a), c = this.data.stats[u] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, f = Number(a.first), h = {
      attempts: c.attempts + 1,
      correct: c.correct + f,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? Qi(c) + fd * (f - Qi(c)) : f,
      emaMs: c.attempts ? Yi(c) + fd * (a.ms - Yi(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, u, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((u) => u.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const u = cd(a);
    this.data = u, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...lo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Sm = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), wm = ["e", "B", "G", "D", "A", "E"];
function Hd({ string: i }) {
  return /* @__PURE__ */ l.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ l.jsxs("span", { children: [
      i + 1,
      " · ",
      /* @__PURE__ */ l.jsx("strong", { children: wm[i] })
    ] }),
    i === 0 ? /* @__PURE__ */ l.jsx("small", { children: "ohuin" }) : i === 5 ? /* @__PURE__ */ l.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Kd = (i) => ({ "--string-thickness": 1.25 + i * 0.45 + "px" }), Em = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Gd({ min: i, max: a }) {
  return /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
    /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - i + 1 }, (u, c) => {
      const f = i + c;
      return /* @__PURE__ */ l.jsxs("th", { scope: "col", className: f === 0 ? "open-fret" : "", children: [
        f,
        f > 0 && f % 12 === 0 ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Sm.has(f) ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, f);
    })
  ] }) });
}
function Ji({ area: i, marks: a = [], mutedStrings: u = [], disabled: c = !1, onAnswer: f, caption: h = "Otelauta" }) {
  const m = { "--cols": i.max - i.min + 1 }, { strings: k, min: S, max: $ } = i, [v, C] = B.useState({ string: Math.min(...k), fret: S }), F = B.useRef(null), D = new Map(a.map((N) => [it(N), N])), V = a.map((N) => `${it(N)}${N.kind}`).join(",");
  B.useEffect(() => {
    const N = F.current, P = N?.querySelector(".target, .anchor");
    N && P && (N.scrollLeft += P.getBoundingClientRect().left - N.getBoundingClientRect().left - N.clientWidth / 2 + P.clientWidth / 2);
  }, [V]);
  const [w, R] = B.useState({ left: !1, right: !1 });
  B.useEffect(() => {
    const N = F.current;
    if (!N) return;
    const P = () => {
      const Z = N.scrollLeft > 2, ee = N.scrollLeft + N.clientWidth < N.scrollWidth - 2;
      R((T) => T.left === Z && T.right === ee ? T : { left: Z, right: ee });
    };
    P(), N.addEventListener("scroll", P, { passive: !0 });
    const G = typeof ResizeObserver > "u" ? null : new ResizeObserver(P);
    return G?.observe(N), () => {
      N.removeEventListener("scroll", P), G?.disconnect();
    };
  }, [V, S, $]);
  const U = k.includes(v.string) && v.fret >= S && v.fret <= $ ? v : { string: Math.min(...k), fret: S };
  return /* @__PURE__ */ l.jsxs("div", { className: "fret-wrap" + (w.left ? " more-left" : "") + (w.right ? " more-right" : ""), children: [
    (w.left || w.right) && /* @__PURE__ */ l.jsxs("p", { className: "fret-scroll-hint", children: [
      w.left && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      w.left && w.right ? "molemmilla puolilla" : w.right ? "oikealla" : "vasemmalla",
      w.right && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { ref: F, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board", style: m, children: [
      /* @__PURE__ */ l.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ l.jsx(Gd, { min: S, max: $ }),
      /* @__PURE__ */ l.jsx("tbody", { children: Ve.OPEN_PITCHES.map((N, P) => /* @__PURE__ */ l.jsxs("tr", { className: k.includes(P) ? "" : "unused", style: Kd(P), children: [
        /* @__PURE__ */ l.jsxs("th", { scope: "row", "aria-label": `${P + 1}. kieli: ${fn[P]}${u.includes(P) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ l.jsx(Hd, { string: P }),
          u.includes(P) && /* @__PURE__ */ l.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        si([P], S, $).map((G) => {
          const Z = D.get(it(G)), ee = `${fn[P]}-kieli, ${Er(G.fret)}`;
          return /* @__PURE__ */ l.jsx("td", { className: `${G.fret === 0 ? "open-fret " : ""}${Z ? Z.kind === "answer" ? "target" : Z.kind : ""}`, children: /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "data-string": P,
              "data-fret": G.fret,
              tabIndex: U.string === P && U.fret === G.fret ? 0 : -1,
              onFocus: () => C(G),
              onKeyDown: (T) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(T.key)) return;
                T.preventDefault();
                const z = [...k].sort((Le, Te) => Le - Te), ne = z.indexOf(P), ie = T.key === "ArrowUp" ? z[Math.max(0, ne - 1)] : T.key === "ArrowDown" ? z[Math.min(z.length - 1, ne + 1)] : P, Ee = T.key === "Home" ? S : T.key === "End" ? $ : Math.max(S, Math.min($, G.fret + (T.key === "ArrowRight" ? 1 : T.key === "ArrowLeft" ? -1 : 0)));
                T.currentTarget.closest("table")?.querySelector(`button[data-string="${ie}"][data-fret="${Ee}"]`)?.focus();
              },
              disabled: c || !k.includes(P),
              "aria-label": ee + (Z ? `, ${Em[Z.kind]}${Z.label ? " " + Z.label : ""}` : ""),
              onClick: () => f?.(G),
              children: Z ? /* @__PURE__ */ l.jsx("span", { className: "dot", children: Z.label || "●" }) : null
            }
          ) }, G.fret);
        })
      ] }, P)) })
    ] }) })
  ] });
}
function Nm({ area: i, stats: a, input: u, check: c, flats: f }) {
  const { strings: h, min: m, max: k } = i, S = `${u}:${c}:solo:notes:`;
  return /* @__PURE__ */ l.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board mastery", style: { "--cols": k - m + 1 }, children: [
    /* @__PURE__ */ l.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ l.jsx(Gd, { min: m, max: k }),
    /* @__PURE__ */ l.jsx("tbody", { children: Ve.OPEN_PITCHES.map(($, v) => /* @__PURE__ */ l.jsxs("tr", { className: h.includes(v) ? "" : "unused", style: Kd(v), children: [
      /* @__PURE__ */ l.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${fn[v]}`, children: /* @__PURE__ */ l.jsx(Hd, { string: v }) }),
      si([v], m, k).map((C) => {
        const F = Object.hasOwn(a, S + it(C)) ? a[S + it(C)] : void 0, D = Eo(F), V = D === null ? "unseen" : F.attempts < 3 ? "few" : D >= 0.8 ? "strong" : D >= 0.5 ? "growing" : "weak", w = `${fn[v]}-kieli, ${Er(C.fret)}, ${Ie(C.midi, f)}`, R = F ? `${Math.round(D * 100)} %, ${F.correct}/${F.attempts} heti oikein, viime aikoina ${Math.round(Qi(F) * 100)} % ja ${(Yi(F) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ l.jsxs("td", { className: `${C.fret === 0 ? "open-fret " : ""}${V}`, title: `${w}: ${R}`, children: [
          /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: D === null ? "·" : F.attempts < 3 ? "?" : Math.round(D * 100) }),
          /* @__PURE__ */ l.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            R
          ] })
        ] }, C.fret);
      })
    ] }, v)) })
  ] }) });
}
const Cm = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", ya = (i) => i.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[i.scale]) : wr[i.mode === "caged" ? "maj" : i.chord].tones, Wd = (i) => Ve.fingeringBoxes(i.root, Ve.SCALES[i.scale], "pentatonic", [i.box])[0].positions[0];
function Cr(i) {
  if (i.mode === "caged") {
    const a = bd(i.root, i.shape).map((u) => u.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (i.mode === "scale" && i.box) {
    const a = Wd(i);
    return { strings: i.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: i.strings, min: i.min, max: i.max, fixed: "" };
}
function _m(i) {
  const a = Cr(i);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function Zi(i) {
  const a = Cr(i), u = si(a.strings, a.min, a.max);
  if (i.mode === "notes" || i.mode === "ear-note" || i.mode === "repeat")
    return u.filter((h) => i.accidentals || ![1, 3, 6, 8, 10].includes(Ke(h.midi)));
  if (i.mode === "caged") {
    const h = new Set(bd(i.root, i.shape).map(it));
    return u.filter((m) => h.has(it(m)));
  }
  if (i.mode === "interval") return u;
  const c = u.filter((h) => ya(i).some(([m]) => Ke(h.midi - i.root) === m));
  if (i.mode !== "scale" || !i.box) return c;
  const f = Wd(i);
  return c.filter((h) => {
    const m = f.strings[h.string];
    return m.length > 0 && h.fret >= m[0] && h.fret <= m.at(-1);
  });
}
function Qd(i, a) {
  return (i.direction === "both" ? ["up", "down"] : [i.direction]).flatMap((c) => i.intervals.map((f) => ({
    iv: f,
    direction: c,
    pairs: a.flatMap((h) => a.filter((m) => m.midi === h.midi + (c === "down" ? -f : f)).map((m) => ({ reference: h, target: m })))
  }))).filter((c) => c.pairs.length);
}
function Tm(i) {
  const a = ya(i);
  return i.mode !== "chord" || i.chordTone === "random" ? [] : i.chordTone === "build" ? a : a.filter(([, u]) => u.endsWith(i.chordTone));
}
function oo(i) {
  const a = Zi(i), u = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return i.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${i.box ? "Valitse lisää kieliä tai toinen boksi." : u}` : i.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${u}` : i.mode !== "interval" && !i.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${u}`;
  const c = Tm(i).filter(([f]) => !a.some((h) => Ke(h.midi - i.root) === f));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, f]) => f + ". aste").join(" ja ")}. ${u}` : i.mode === "interval" && !Qd(i, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : On(i) && new Set(a.map((f) => f.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${u}` : null;
}
function Mm(i, a) {
  const u = [...new Map([...a].sort((c, f) => c.midi - f.midi || c.string - f.string).map((c) => [c.midi, c])).values()];
  return i.order === "down" ? u.reverse() : u;
}
function Yd(i) {
  return On(i) ? new Set(Zi(i).map((a) => a.midi)).size : i.rounds;
}
function Pm(i, a) {
  return i.hints === "always" ? 2 : i.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function Jr(i, a, u = Math.random) {
  if (!i.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((m, k) => m + k, 0), f = Math.min(0.999999999, Math.max(0, u()));
  if (!(c > 0)) return i[Math.floor(f * i.length)];
  let h = f * c;
  for (let m = 0; m < i.length; m++)
    if (h -= a[m], h < 0) return i[m];
  return i.at(-1);
}
const md = (i, a) => i.mode === "caged" ? `caged:${i.root}:${i.shape}:${a}` : i.mode === "chord" ? `chord:${i.root}:${i.chord}:${a}:${i.activity}` : `scale:${i.root}:${i.scale}:${a}:${i.activity}`;
function Sr(i, a) {
  const u = i.filter((c) => !a(c));
  return u.length ? u : i;
}
function Am(i, a, u = {}, c, f = Math.random) {
  const h = oo(i);
  if (h) throw new Error(h);
  const m = Vd(i), k = Nr(i), S = m === "pitch", $ = (T) => i.weak ? jm(u[Ud({ input: k, check: m, hint: !1, item: T })]) : 1, v = (T) => Jr(T, T.map(() => 1), f), C = Zi(i), F = { check: m, sound: [], choices: "position" };
  if (i.mode === "notes") {
    const T = Sr(C, (ie) => !!c && it(ie) === it(c.position)), z = Jr(T, T.map((ie) => $(`notes:${it(ie)}`)), f), ne = Ie(z.midi, i.flats, S);
    return {
      ...F,
      position: z,
      midi: z.midi,
      name: ne,
      item: `notes:${it(z)}`,
      prompt: `Etsi ${ne} ${wo[z.string]}.`
    };
  }
  if (i.mode === "ear-note") {
    const T = (Ee) => `ear-note:${Ke(Ee.midi)}${i.reference ? ":ref" : ""}`, z = Sr(C, (Ee) => !!c && Ke(Ee.midi) === Ke(c.midi)), ne = Jr(z, z.map((Ee) => $(T(Ee))), f), ie = i.reference ? 57 + 12 * Math.round((ne.midi - 57) / 12) : void 0;
    return {
      ...F,
      position: ne,
      midi: ne.midi,
      name: Ie(ne.midi, i.flats),
      item: T(ne),
      choices: "note",
      reference: ie,
      sound: ie === void 0 ? [ne.midi] : [ie, ne.midi],
      prompt: i.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (i.mode === "repeat") {
    const T = Sr(C, (ne) => !!c && ne.midi === c.midi), z = Jr(T, T.map((ne) => $(`repeat:${ne.midi}`)), f);
    return {
      ...F,
      position: z,
      midi: z.midi,
      name: Ie(z.midi, i.flats, !0),
      item: `repeat:${z.midi}`,
      sound: [z.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (i.mode === "interval") {
    const T = Sr(Qd(i, C), (ie) => c?.interval === ie.iv && c?.direction === ie.direction), z = Jr(T, T.map((ie) => $(`interval:${ie.iv}:${ie.direction}`)), f), ne = v(Sr(z.pairs, (ie) => c?.reference === ie.reference.midi));
    return {
      ...F,
      position: ne.target,
      midi: ne.target.midi,
      name: Ie(ne.target.midi, i.flats, !0),
      item: `interval:${z.iv}:${z.direction}`,
      interval: z.iv,
      direction: z.direction,
      reference: ne.reference.midi,
      sound: [ne.reference.midi, ne.target.midi],
      prompt: `Kuulet ${z.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ie(ne.reference.midi, i.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const D = ya(i);
  let V, w = 0;
  if (On(i)) {
    const T = Mm(i, C);
    w = T.length, V = T[a % T.length];
  } else {
    const T = D.filter(([ie]) => C.some((Ee) => Ke(Ee.midi - i.root) === ie)), z = i.mode === "chord" && i.chordTone !== "random" ? i.chordTone === "build" ? [D[a % D.length]] : D.filter(([, ie]) => ie.endsWith(i.chordTone)) : Sr(T, ([ie]) => c?.interval === ie), [ne] = Jr(z, z.map(([ie]) => $(md(i, ie))), f);
    V = v(Sr(C.filter((ie) => Ke(ie.midi - i.root) === ne), (ie) => !!c && it(ie) === it(c.position)));
  }
  const R = Ke(V.midi - i.root), U = D.find(([T]) => T === R)[1], N = Gi(i.root, R, U), P = S ? N + mm(V.midi, N) : N, G = i.mode === "scale" ? `${ar(i.root)}-${Ve.SCALES[i.scale].name}${i.box ? `, boksi ${i.box}` : ""}` : i.mode === "caged" ? `${ar(i.root)}-duurisointu, ${i.shape}-muoto` : zd(i.root, i.chord), Z = i.mode !== "caged" && i.activity === "degree", ee = Z ? `${G}: mikä aste on ${N}?` : w ? `${G} ${i.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % w + 1}/${w}: ${U}. aste (${P}).` : `${G}: etsi ${U}. aste${S ? ` (${P})` : ""}.`;
  return {
    ...F,
    position: V,
    midi: V.midi,
    name: P,
    item: md(i, R),
    prompt: ee,
    degree: U,
    interval: R,
    choices: Z ? "degree" : "position"
  };
}
function uo(i, a, u) {
  return Number.isInteger(a) && (u === "class" ? Ke(i) === Ke(a) : i === a);
}
function Jd(i, a, u) {
  return uo(a.midi, u.midi, a.check) ? i.mode === "notes" ? u.string === a.position.string : Cm(i) ? Zi(i).some((c) => it(c) === it(u)) : !0 : !1;
}
function Rm(i, a) {
  const u = Cr(i);
  return si(u.strings, u.min, u.max).filter((c) => Jd(i, a, c));
}
const wt = (i, a, u) => ({ ...i, label: a, kind: u }), Lm = (i) => i.charAt(0).toUpperCase() + i.slice(1);
function $m(i, a, u) {
  if (u <= 0) return { marks: [], text: "" };
  const c = u >= 2, f = Cr(i), h = si(f.strings, f.min, f.max), m = Rm(i, a);
  if (i.mode === "notes") {
    if (c) return { marks: m.map((U) => wt(U, a.name, "answer")), text: `${a.name} on ${Dd[a.position.string]}: ${Er(a.position.fret)}.` };
    const w = h.find((U) => U.string === a.position.string), R = Ie(w.midi, i.flats);
    return {
      marks: [wt(w, R, "anchor")],
      text: `Apupiste: ${pm[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${R}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (i.mode === "ear-note")
    return c ? { marks: [wt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [wt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${fn[a.position.string]}-kieli, ${Er(a.position.fret)}.` };
  if (i.mode === "repeat")
    return c ? { marks: m.map((w) => wt(w, Ie(w.midi, i.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${wo[a.position.string]}.` };
  if (i.mode === "interval") {
    const w = Ie(a.reference, i.flats, !0), R = h.filter((U) => U.midi === a.reference).map((U) => wt(U, w, "anchor"));
    return c ? {
      marks: [...R, ...m.map((U) => wt(U, Ie(U.midi, i.flats, !0), "answer"))],
      text: `${Lm(Wi[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${a.name}.`
    } : { marks: R, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const k = Zi(i), S = ya(i), $ = (w) => S.find(([R]) => R === Ke(w.midi - i.root))?.[1] ?? "", v = Gi(i.root, a.interval, a.degree), C = k.filter((w) => Ke(w.midi - i.root) === 0), F = (w) => m.some((R) => it(R) === it(w)), D = `${a.degree}. aste on ${v}.`;
  if (i.mode === "caged")
    return c ? { marks: k.map((w) => wt(w, $(w), F(w) ? "answer" : "shape")), text: D } : { marks: k.map((w) => wt(w, "", "shape")), text: `${i.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const V = i.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const w = k.filter((R) => Ke(R.midi) === Ke(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : C).map((R) => wt(R, "1", "anchor")), ...w.map((R) => wt(R, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: w.map((R) => wt(R, v, "shape")), text: `Katso ${V} nimeä: mikä on sen perussävel?` } : {
      marks: [...C.map((R) => wt(R, "1", "anchor")), ...w.map((R) => wt(R, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...C.filter((w) => !F(w)).map((w) => wt(w, "1", "anchor")), ...m.map((w) => wt(w, a.degree, "answer"))], text: D } : a.interval === 0 ? { marks: [], text: `1. aste on ${V} perussävel ${ar(i.root)}.` } : { marks: C.map((w) => wt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Fm {
  constructor(a, u, c, f = () => performance.now(), h = Math.random) {
    this.settings = a, this.stats = u, this.record = c, this.now = f, this.random = h, this.total = Yd(a);
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
      this.question = Am(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Pm(this.settings, this.index), this.started = this.now(), this.phase = "active";
    }
  }
  pause() {
    ["active", "feedback"].includes(this.phase) && (this.prior = this.phase, this.pausedAt = this.now(), this.phase = "paused");
  }
  resume() {
    this.phase === "paused" && (this.started += this.now() - this.pausedAt, this.phase = this.prior);
  }
  /** Vihjeen käyttö jää voimaan, vaikka vihje piilotettaisiin näkyvistä. */
  useHint(a) {
    this.phase === "active" && (this.hintLevel = Math.max(this.hintLevel, Math.min(2, Math.round(a))));
  }
  /** heldMs: kuinka kauan mikrofonin sävel oli soinut ennen hyväksymistä. Se ei kuulu vastausaikaan. */
  answer(a, u, c, f = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const h = this.question;
    if (!(u === "degree" ? a === h.interval : u === "note" ? uo(h.midi, a, "class") : u === "board" ? !!c && Jd(this.settings, h, c) : uo(h.midi, a, h.check)))
      return u === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const k = u === "board" ? c : void 0, S = {
      id: `${this.id}:${this.index}`,
      item: k && this.settings.mode === "notes" ? `notes:${it(k)}` : h.item,
      mode: this.settings.mode,
      input: u,
      check: h.check,
      expected: h.midi,
      played: a,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, f)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return k ? S.position = it(k) : this.settings.mode === "notes" && (S.position = it(h.position)), this.results.push(S), this.record(S), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function co(i) {
  const a = i.filter((u) => !u.hint);
  return {
    count: i.length,
    first: i.filter((u) => u.first).length,
    solo: a.length,
    soloFirst: a.filter((u) => u.first).length,
    guided: i.length - a.length,
    ms: i.reduce((u, c) => u + c.ms, 0)
  };
}
const fo = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], qr = (i) => fo.find(([a]) => a === i)?.[1] ?? i;
function Rt({ label: i, children: a }) {
  const u = B.useId();
  return /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ l.jsx("label", { htmlFor: u, children: i }),
    B.cloneElement(a, { id: u })
  ] });
}
function pd({ legend: i, name: a, value: u, options: c, onChange: f, disabled: h }) {
  return /* @__PURE__ */ l.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ l.jsx("legend", { children: i }),
    /* @__PURE__ */ l.jsx("div", { className: "choice-row", children: c.map((m) => /* @__PURE__ */ l.jsxs("label", { className: m.value === u ? "selected" : "", children: [
      /* @__PURE__ */ l.jsx("input", { type: "radio", name: a, value: m.value, checked: m.value === u, onChange: () => f(m.value) }),
      /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("strong", { children: m.title }),
        /* @__PURE__ */ l.jsx("small", { children: m.summary })
      ] })
    ] }, m.value)) })
  ] });
}
function vd(i) {
  const a = Cr(i), u = Yd(i), c = Nr(i), f = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = a.fixed === "shape" ? `${i.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${i.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, m = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((k) => k + 1).join(", ")}`;
  return `${ka[i.hints].title} · ${f} · ${On(i) ? `yksi läpisoitto, ${u} säveltä` : u ? `${u} kysymystä` : "vapaa harjoittelu"} · ${h}${m}`;
}
function kd({ s: i, change: a, locked: u, problem: c }) {
  const f = B.useId(), h = (v, C) => a({ ...i, [v]: C }), m = Cr(i), k = Nr(i) === "note" || Nr(i) === "degree", S = ["scale", "chord", "caged"].includes(i.mode), $ = ["notes", "ear-note", "repeat"].includes(i.mode);
  return /* @__PURE__ */ l.jsxs("fieldset", { className: "settings", disabled: u, children: [
    /* @__PURE__ */ l.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx(Rt, { label: "Harjoitus", children: /* @__PURE__ */ l.jsx("select", { value: i.mode, onChange: (v) => h("mode", v.target.value), children: fo.map(([v, C]) => /* @__PURE__ */ l.jsx("option", { value: v, children: C }, v)) }) }),
      /* @__PURE__ */ l.jsx("p", { className: "mode-note", children: fo.find(([v]) => v === i.mode)[2] })
    ] }),
    S && /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx(Rt, { label: i.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ l.jsx("select", { value: i.root, onChange: (v) => h("root", Number(v.target.value)), children: Ve.CHROM.map((v, C) => /* @__PURE__ */ l.jsx("option", { value: C, children: v }, v)) }) }),
      i.mode === "scale" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Rt, { label: "Asteikko", children: /* @__PURE__ */ l.jsx("select", { value: i.scale, onChange: (v) => h("scale", v.target.value), children: Object.entries(Ve.SCALES).map(([v, C]) => /* @__PURE__ */ l.jsx("option", { value: v, children: C.name }, v)) }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ l.jsxs("select", { value: i.box, onChange: (v) => h("box", Number(v.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ l.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Sävelten järjestys", children: /* @__PURE__ */ l.jsxs("select", { value: i.order, onChange: (v) => h("order", v.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ l.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ l.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      i.mode === "chord" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Rt, { label: "Sointutyyppi", children: /* @__PURE__ */ l.jsx("select", { value: i.chord, onChange: (v) => h("chord", v.target.value), children: Object.entries(wr).map(([v, C]) => /* @__PURE__ */ l.jsx("option", { value: v, children: C.name }, v)) }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ l.jsxs("select", { value: i.chordTone, onChange: (v) => h("chordTone", v.target.value), children: [
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
      i.mode === "caged" ? /* @__PURE__ */ l.jsx(Rt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ l.jsx("select", { value: i.shape, onChange: (v) => h("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ l.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ l.jsx(Rt, { label: "Tehtävä", children: /* @__PURE__ */ l.jsxs("select", { value: i.activity, onChange: (v) => h("activity", v.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ l.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    i.mode === "interval" && /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ l.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ l.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ l.jsxs("label", { children: [
        /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.intervals.includes(v), onChange: (C) => h("intervals", C.target.checked ? [...i.intervals, v] : i.intervals.filter((F) => F !== v)) }),
        Wi[v]
      ] }, v)) }),
      /* @__PURE__ */ l.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ l.jsx(Rt, { label: "Intervallin suunta", children: /* @__PURE__ */ l.jsxs("select", { value: i.direction, onChange: (v) => h("direction", v.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ l.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ l.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ l.jsx(
      pd,
      {
        legend: "Harjoittelutapa",
        name: `${f}-way`,
        value: i.hints,
        onChange: (v) => h("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...ka[v] }))
      }
    ),
    k ? /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ l.jsx(pd, { legend: "Vastaustapa", name: `${f}-input`, value: i.input, onChange: (v) => h("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ l.jsx(Rt, { label: "Kierroksen pituus", children: /* @__PURE__ */ l.jsxs("select", { value: i.rounds, disabled: On(i), onChange: (v) => h("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !k && /* @__PURE__ */ l.jsx(Rt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ l.jsxs("select", { value: On(i) ? "pitch" : i.check, disabled: On(i), onChange: (v) => h("check", v.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ l.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ l.jsxs("select", { value: String(i.flats), onChange: (v) => h("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ l.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ l.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      On(i) && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      m.fixed ? /* @__PURE__ */ l.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        m.fixed === "shape" ? `${i.shape}-muoto` : `Boksi ${i.box}`,
        " määrää harjoitusalueen: nauhat ",
        m.min,
        "–",
        m.max,
        "."
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ l.jsxs("button", { type: "button", "aria-pressed": i.min === 0 && i.max === v, onClick: () => a({ ...i, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsx(Rt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: "0", max: "24", value: i.min, onChange: (v) => h("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ l.jsx(Rt, { label: "Viimeinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: i.min, max: "24", value: i.max, onChange: (v) => h("max", Number(v.target.value)) }) })
        ] })
      ] }),
      m.fixed !== "shape" && /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ l.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ l.jsx("div", { className: "check-row", children: fn.map((v, C) => /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.strings.includes(C), onChange: (F) => h("strings", F.target.checked ? [...i.strings, C] : i.strings.filter((D) => D !== C)) }),
          C + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "check-row", children: [
        $ && /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.accidentals, onChange: (v) => h("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        i.mode === "ear-note" && /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.reference, onChange: (v) => h("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.weak, onChange: (v) => h("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.advance, onChange: (v) => h("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const Om = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Opi asteikko yksi positio kerrallaan ja käytä sitä sooloilussa.", example: "Aloita: A-mollipentatoninen, positio 1" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Im({ onSelect: i }) {
  return /* @__PURE__ */ l.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ l.jsx("div", { className: "learning-grid", children: Om.map((a) => /* @__PURE__ */ l.jsxs("button", { type: "button", className: "learning-card", onClick: () => i(a.id), children: [
      /* @__PURE__ */ l.jsx("span", { className: "learning-number", "aria-hidden": "true", children: a.number }),
      /* @__PURE__ */ l.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ l.jsx("strong", { children: a.title }),
        /* @__PURE__ */ l.jsx("span", { children: a.description }),
        /* @__PURE__ */ l.jsx("small", { children: a.example })
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, a.id)) })
  ] });
}
const Dm = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", zm = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3", bm = 0.12;
function yd(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const a = Math.floor(i);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Vm() {
  const i = B.useRef(null), a = B.useRef(null), [u, c] = B.useState(!1), [f, h] = B.useState(!1), [m, k] = B.useState(!1), [S, $] = B.useState(0), [v, C] = B.useState(0), [F, D] = B.useState("");
  function V(P = !1) {
    const G = i.current, Z = a.current;
    if (!G || !Z || !Number.isFinite(G.currentTime) || Z.readyState < 1) return;
    const ee = Math.abs(Z.currentTime - G.currentTime), T = G.loop && Number.isFinite(G.duration) && Math.abs(ee - G.duration) < 0.3;
    if (P || !T && ee > bm)
      try {
        Z.currentTime = G.currentTime;
      } catch {
      }
  }
  function w() {
    i.current?.pause(), a.current?.pause(), c(!1);
  }
  async function R() {
    const P = i.current, G = a.current;
    if (!(!P || !G)) {
      if (u) {
        w();
        return;
      }
      D(""), G.muted = !f, G.volume = 0.55, P.volume = 0.75, V(!0);
      try {
        await Promise.all([P.play(), G.play()]), V(), c(!0);
      } catch {
        w(), D("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function U(P) {
    const G = i.current, Z = a.current;
    if (!(!G || !Z || !Number.isFinite(P))) {
      G.currentTime = P;
      try {
        Z.currentTime = P;
      } catch {
      }
      $(P);
    }
  }
  function N(P) {
    P && V(), a.current && (a.current.muted = !P), h(P);
  }
  return B.useEffect(() => {
    const P = () => {
      document.hidden && (i.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", P), () => {
      document.removeEventListener("visibilitychange", P), i.current?.pause(), a.current?.pause();
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
              onChange: (P) => N(P.target.checked)
            }
          ),
          /* @__PURE__ */ l.jsxs("span", { children: [
            "Mallikitara ",
            f ? "päällä" : "pois"
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: m,
              onChange: (P) => k(P.target.checked)
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ l.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        R();
      }, children: u ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(S, v > 0 ? v : 1),
          disabled: !v,
          onChange: (P) => U(Number(P.target.value))
        }
      ),
      /* @__PURE__ */ l.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        yd(S),
        " / ",
        yd(v)
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: i,
        preload: "metadata",
        src: Dm,
        loop: m,
        onLoadedMetadata: (P) => C(P.currentTarget.duration),
        onTimeUpdate: (P) => {
          $(P.currentTarget.currentTime), P.currentTarget.paused || V();
        },
        onEnded: () => {
          i.current?.loop || (a.current?.pause(), c(!1), $(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => D("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: zm,
        muted: !0,
        loop: m,
        onLoadedMetadata: () => {
          const P = i.current, G = a.current;
          P?.duration && G?.duration && Math.abs(P.duration - G.duration) > 0.15 && D("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => D("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    F && /* @__PURE__ */ l.jsx("p", { className: "backing-error", role: "alert", children: F }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Bm = 4e3;
class gd extends Error {
  name = "MicSetupError";
}
async function Um(i, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new gd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
    if (f = a ? a() : new AudioContext(), f.state !== "running") {
      let $;
      await Promise.race([
        f.resume(),
        new Promise((v, C) => {
          $ = setTimeout(() => C(new gd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Bm);
        })
      ]).finally(() => clearTimeout($));
    }
    const h = f.createMediaStreamSource(c), m = f, k = c.getAudioTracks?.()[0] ?? c.getTracks()[0], S = k?.getSettings?.() ?? {};
    return {
      context: f,
      source: h,
      stream: c,
      label: k?.label ?? "",
      deviceId: S.deviceId ?? "",
      channelCount: S.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach(($) => $.stop()), h.disconnect(), a || m.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((m) => m.stop()), a || await f?.close().catch(() => {
    }), h;
  }
}
async function Hm() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var io, xd;
function Km() {
  if (xd) return io;
  xd = 1;
  function i(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var u = new Array(this.size * 2), c = 0; c < u.length; c += 2) {
      const $ = Math.PI * c / this.size;
      u[c] = Math.cos($), u[c + 1] = -Math.sin($);
    }
    this.table = u;
    for (var f = 0, h = 1; this.size > h; h <<= 1)
      f++;
    this._width = f % 2 === 0 ? f - 1 : f, this._bitrev = new Array(1 << this._width);
    for (var m = 0; m < this._bitrev.length; m++) {
      this._bitrev[m] = 0;
      for (var k = 0; k < this._width; k += 2) {
        var S = this._width - k - 2;
        this._bitrev[m] |= (m >>> k & 3) << S;
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
    var u = this._out, c = this._csize, f = this._width, h = 1 << f, m = c / h << 1, k, S, $ = this._bitrev;
    if (m === 4)
      for (k = 0, S = 0; k < c; k += m, S++) {
        const R = $[S];
        this._singleTransform2(k, R, h);
      }
    else
      for (k = 0, S = 0; k < c; k += m, S++) {
        const R = $[S];
        this._singleTransform4(k, R, h);
      }
    var v = this._inv ? -1 : 1, C = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      m = c / h << 1;
      var F = m >>> 2;
      for (k = 0; k < c; k += m)
        for (var D = k + F, V = k, w = 0; V < D; V += 2, w += h) {
          const R = V, U = R + F, N = U + F, P = N + F, G = u[R], Z = u[R + 1], ee = u[U], T = u[U + 1], z = u[N], ne = u[N + 1], ie = u[P], Ee = u[P + 1], Le = G, Te = Z, Me = C[w], K = v * C[w + 1], oe = ee * Me - T * K, te = ee * K + T * Me, A = C[2 * w], Q = v * C[2 * w + 1], J = z * A - ne * Q, g = z * Q + ne * A, I = C[3 * w], ve = v * C[3 * w + 1], we = ie * I - Ee * ve, _e = ie * ve + Ee * I, Ne = Le + J, j = Te + g, b = Le - J, O = Te - g, q = oe + we, de = te + _e, ae = v * (oe - we), me = v * (te - _e), pe = Ne + q, Pe = j + de, je = Ne - q, $e = j - de, Ye = b + me, Be = O - ae, Ge = b - me, Ue = O + ae;
          u[R] = pe, u[R + 1] = Pe, u[U] = Ye, u[U + 1] = Be, u[N] = je, u[N + 1] = $e, u[P] = Ge, u[P + 1] = Ue;
        }
    }
  }, i.prototype._singleTransform2 = function(u, c, f) {
    const h = this._out, m = this._data, k = m[c], S = m[c + 1], $ = m[c + f], v = m[c + f + 1], C = k + $, F = S + v, D = k - $, V = S - v;
    h[u] = C, h[u + 1] = F, h[u + 2] = D, h[u + 3] = V;
  }, i.prototype._singleTransform4 = function(u, c, f) {
    const h = this._out, m = this._data, k = this._inv ? -1 : 1, S = f * 2, $ = f * 3, v = m[c], C = m[c + 1], F = m[c + f], D = m[c + f + 1], V = m[c + S], w = m[c + S + 1], R = m[c + $], U = m[c + $ + 1], N = v + V, P = C + w, G = v - V, Z = C - w, ee = F + R, T = D + U, z = k * (F - R), ne = k * (D - U), ie = N + ee, Ee = P + T, Le = G + ne, Te = Z - z, Me = N - ee, K = P - T, oe = G - ne, te = Z + z;
    h[u] = ie, h[u + 1] = Ee, h[u + 2] = Le, h[u + 3] = Te, h[u + 4] = Me, h[u + 5] = K, h[u + 6] = oe, h[u + 7] = te;
  }, i.prototype._realTransform4 = function() {
    var u = this._out, c = this._csize, f = this._width, h = 1 << f, m = c / h << 1, k, S, $ = this._bitrev;
    if (m === 4)
      for (k = 0, S = 0; k < c; k += m, S++) {
        const Se = $[S];
        this._singleRealTransform2(k, Se >>> 1, h >>> 1);
      }
    else
      for (k = 0, S = 0; k < c; k += m, S++) {
        const Se = $[S];
        this._singleRealTransform4(k, Se >>> 1, h >>> 1);
      }
    var v = this._inv ? -1 : 1, C = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      m = c / h << 1;
      var F = m >>> 1, D = F >>> 1, V = D >>> 1;
      for (k = 0; k < c; k += m)
        for (var w = 0, R = 0; w <= V; w += 2, R += h) {
          var U = k + w, N = U + D, P = N + D, G = P + D, Z = u[U], ee = u[U + 1], T = u[N], z = u[N + 1], ne = u[P], ie = u[P + 1], Ee = u[G], Le = u[G + 1], Te = Z, Me = ee, K = C[R], oe = v * C[R + 1], te = T * K - z * oe, A = T * oe + z * K, Q = C[2 * R], J = v * C[2 * R + 1], g = ne * Q - ie * J, I = ne * J + ie * Q, ve = C[3 * R], we = v * C[3 * R + 1], _e = Ee * ve - Le * we, Ne = Ee * we + Le * ve, j = Te + g, b = Me + I, O = Te - g, q = Me - I, de = te + _e, ae = A + Ne, me = v * (te - _e), pe = v * (A - Ne), Pe = j + de, je = b + ae, $e = O + pe, Ye = q - me;
          if (u[U] = Pe, u[U + 1] = je, u[N] = $e, u[N + 1] = Ye, w === 0) {
            var Be = j - de, Ge = b - ae;
            u[P] = Be, u[P + 1] = Ge;
            continue;
          }
          if (w !== V) {
            var Ue = O, yt = -q, Je = j, ze = -b, tt = -v * pe, Tt = -v * me, Kt = -v * ae, zt = -v * de, nn = Ue + tt, Gt = yt + Tt, ct = Je + zt, In = ze - Kt, ke = k + D - w, Wt = k + F - w;
            u[ke] = nn, u[ke + 1] = Gt, u[Wt] = ct, u[Wt + 1] = In;
          }
        }
    }
  }, i.prototype._singleRealTransform2 = function(u, c, f) {
    const h = this._out, m = this._data, k = m[c], S = m[c + f], $ = k + S, v = k - S;
    h[u] = $, h[u + 1] = 0, h[u + 2] = v, h[u + 3] = 0;
  }, i.prototype._singleRealTransform4 = function(u, c, f) {
    const h = this._out, m = this._data, k = this._inv ? -1 : 1, S = f * 2, $ = f * 3, v = m[c], C = m[c + f], F = m[c + S], D = m[c + $], V = v + F, w = v - F, R = C + D, U = k * (C - D), N = V + R, P = w, G = -U, Z = V - R, ee = w, T = U;
    h[u] = N, h[u + 1] = 0, h[u + 2] = P, h[u + 3] = G, h[u + 4] = Z, h[u + 5] = 0, h[u + 6] = ee, h[u + 7] = T;
  }, io;
}
var Gm = Km();
const Wm = /* @__PURE__ */ qh(Gm);
class Hi {
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
  static forFloat32Array(a) {
    return new Hi(
      a,
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
  static forFloat64Array(a) {
    return new Hi(
      a,
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
  static forNumberArray(a) {
    return new Hi(a, (u) => Array(u));
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
  constructor(a, u) {
    if (a < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = a, this._fft = new Wm(Jm(2 * a)), this._bufferSupplier = u, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(a, u = this._bufferSupplier(a.length)) {
    if (a.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${a.length}`
      );
    for (let f = 0; f < a.length; f++)
      this._paddedInputBuffer[f] = a[f];
    for (let f = a.length; f < this._paddedInputBuffer.length; f++)
      this._paddedInputBuffer[f] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const c = this._transformBuffer;
    for (let f = 0; f < c.length; f += 2)
      c[f] = c[f] * c[f] + c[f + 1] * c[f + 1], c[f + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let f = 0; f < a.length; f++)
      u[f] = this._inverseBuffer[2 * f];
    return u;
  }
}
function Qm(i) {
  const a = [];
  let u = !1, c = -1 / 0, f = -1;
  for (let h = 1; h < i.length - 1; h++)
    i[h - 1] <= 0 && i[h] > 0 ? (u = !0, f = h, c = i[h]) : i[h - 1] > 0 && i[h] <= 0 ? (u = !1, f !== -1 && a.push(f)) : u && i[h] > c && (c = i[h], f = h);
  return a;
}
function Ym(i, a) {
  const [u, c, f] = [i - 1, i, i + 1], [h, m, k] = [a[u], a[c], a[f]], S = h / 2 - m + k / 2, $ = -(h / 2) * (c + f) + m * (u + f) - k / 2 * (u + c), v = h * c * f / 2 - m * u * f + k * u * c / 2, C = -$ / (2 * S), F = S * C * C + $ * C + v;
  return [C, F];
}
class Ki {
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
  static forFloat32Array(a) {
    return new Ki(a, (u) => new Float32Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Ki(a, (u) => new Float64Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new Ki(a, (u) => Array(u));
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
  constructor(a, u) {
    this._autocorrelator = new Hi(a, u), this._nsdfBuffer = u(a);
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
  set clarityThreshold(a) {
    if (!Number.isFinite(a) || a <= 0 || a > 1)
      throw new Error("clarityThreshold must be a number in the range (0, 1]");
    this._clarityThreshold = a;
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
  set minVolumeAbsolute(a) {
    if (!Number.isFinite(a) || a < 0 || a > this._maxInputAmplitude)
      throw new Error(
        `minVolumeAbsolute must be a number in the range [0, ${this._maxInputAmplitude}]`
      );
    this._minVolumeAbsolute = a;
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
  set minVolumeDecibels(a) {
    if (!Number.isFinite(a) || a > 0)
      throw new Error("minVolumeDecibels must be a number <= 0");
    this._minVolumeAbsolute = this._maxInputAmplitude * 10 ** (a / 10);
  }
  /**
   * Sets the maximum amplitude of an input reading. Must be greater than 0.
   *
   * @param amplitude {number} the maximum amplitude (absolute value) of an input reading
   */
  set maxInputAmplitude(a) {
    if (!Number.isFinite(a) || a <= 0)
      throw new Error("maxInputAmplitude must be a number > 0");
    this._maxInputAmplitude = a;
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
  findPitch(a, u) {
    if (this._belowMinimumVolume(a)) return [0, 0];
    this._nsdf(a);
    const c = Qm(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const f = Math.max(...c.map((S) => this._nsdfBuffer[S])), h = c.find(
      (S) => this._nsdfBuffer[S] >= this._clarityThreshold * f
    ), [m, k] = Ym(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [u / m, Math.min(k, 1)];
  }
  /**
   * Returns whether the input audio data is below the minimum volume allowed by
   * the pitch detector.
   *
   * @private
   * @param input {ArrayLike<number>}
   * @returns {boolean}
   */
  _belowMinimumVolume(a) {
    if (this._minVolumeAbsolute === 0) return !1;
    let u = 0;
    for (let c = 0; c < a.length; c++)
      u += a[c] ** 2;
    return Math.sqrt(u / a.length) < this._minVolumeAbsolute;
  }
  /**
   * Computes the NSDF of the input and stores it in the internal buffer. This
   * is equation (9) in the McLeod pitch method paper.
   *
   * @private
   * @param input {ArrayLike<number>}
   */
  _nsdf(a) {
    this._autocorrelator.autocorrelate(a, this._nsdfBuffer);
    let u = 2 * this._nsdfBuffer[0], c;
    for (c = 0; c < this._nsdfBuffer.length && u > 0; c++)
      this._nsdfBuffer[c] = 2 * this._nsdfBuffer[c] / u, u -= a[c] ** 2 + a[a.length - c - 1] ** 2;
    for (; c < this._nsdfBuffer.length; c++)
      this._nsdfBuffer[c] = 0;
  }
}
function Jm(i) {
  return i--, i |= i >> 1, i |= i >> 2, i |= i >> 4, i |= i >> 8, i |= i >> 16, i++, i;
}
function Xm(i) {
  const a = i * 0.17;
  let u = 2048;
  for (; u < a && u < 32768; ) u *= 2;
  return u;
}
const Zm = 0.05, qm = 1.5;
class ep {
  constructor(a, u = {}) {
    this.mic = a, this.opts = u;
    const c = a.context, f = Xm(c.sampleRate), h = Math.max(1, Math.min(2, a.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), a.source.connect(this.splitter));
    for (let m = 0; m < (this.splitter ? h : 1); m++) {
      const k = c.createAnalyser();
      k.fftSize = f, k.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(k, m) : a.source.connect(k), this.analysers.push(k), this.buffers.push(new Float32Array(new ArrayBuffer(f * 4)));
    }
    this.shortLength = Math.min(f, Math.max(256, Math.round(c.sampleRate * Zm))), this.detector = Ki.forFloat32Array(f), this.detector.minVolumeDecibels = -60;
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
  gate = new tp();
  onset = new np();
  /** Kynnysten muuttaminen kesken kuuntelun, esimerkiksi mikrofonitestin liukusäätimistä. */
  setOptions(a) {
    Object.assign(this.opts, a);
  }
  start() {
    if (this.running) return;
    this.running = !0, this.gate.reset(), this.onset.reset();
    const a = () => {
      this.running && (this.paused || this.processFrame(performance.now()), this.rafId = requestAnimationFrame(a));
    };
    this.rafId = requestAnimationFrame(a);
  }
  stop() {
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = null, this.gate.reset(), this.onset.reset();
    for (const a of this.analysers) a.disconnect();
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
  processFrame(a) {
    const {
      minClarity: u = 0.9,
      minRms: c = 0.01,
      stabilityMs: f = 240,
      centsTolerance: h = 35,
      minFreq: m = 70,
      maxFreq: k = 1450,
      onFrame: S,
      onStableNote: $
    } = this.opts, v = this.analysers.map((T, z) => (T.getFloatTimeDomainData(this.buffers[z]), jd(this.buffers[z], this.buffers[z].length - this.shortLength))), C = v.indexOf(Math.max(...v));
    C !== this.channel && v[C] > (v[this.channel] ?? 0) * qm && (this.channel = C);
    const F = this.buffers[this.channel], D = v[this.channel], V = rp(F, F.length - this.shortLength), w = { rms: D, peak: V, channel: this.channel, levels: v }, R = D < c, U = this.onset.feed(D, a, c);
    if (R && jd(F, 0) < c) {
      this.gate.feed(null, a, f, !0, !1), S?.({ ...w, status: "silent" });
      return;
    }
    const [N, P] = this.detector.findPitch(F, this.mic.context.sampleRate);
    if (!isFinite(N) || P < u) {
      this.gate.feed(null, a, f, R, U), S?.({ ...w, status: R ? "silent" : "unclear", clarity: isFinite(P) ? P : 0 });
      return;
    }
    if (N < m || N > k) {
      this.gate.feed(null, a, f, R, U), S?.({ ...w, status: "out-of-range", frequency: N, clarity: P });
      return;
    }
    const { midi: G, cents: Z } = dm(N);
    if (Math.abs(Z) > h) {
      this.gate.feed(null, a, f, R, U), S?.({ ...w, status: "off-pitch", frequency: N, clarity: P, midi: G, cents: Z });
      return;
    }
    S?.({ ...w, status: "pitch", frequency: N, clarity: P, midi: G, cents: Z });
    const ee = this.gate.feed(G, a, f, R, U);
    ee !== null && $?.({ midi: G, frequency: N, cents: Z, clarity: P, timestamp: a, heldMs: ee.heldMs });
  }
}
class tp {
  constructor(a = 120, u = 80) {
    this.releaseMs = a, this.gapMs = u;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(a, u, c, f, h) {
    if (f ? (this.quietSince ??= u, u - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), a === null)
      return this.current && u - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== a) && (this.current = { midi: a, since: u, seen: u }), this.current.seen = u;
    const m = u - this.current.since;
    return m < c ? null : (this.armed = !1, this.current = null, { midi: a, heldMs: m });
  }
}
class np {
  constructor(a = 2, u = 300, c = 150) {
    this.ratio = a, this.windowMs = u, this.refractoryMs = c;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(a, u, c) {
    if (u - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: u, rms: a }], !1;
    for (; this.history.length && u - this.history[0].time > this.windowMs; ) this.history.shift();
    const f = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : a;
    return this.history.push({ time: u, rms: a }), a < c * 1.5 || a < f * this.ratio ? !1 : (this.lastOnset = u, this.history = [{ time: u, rms: a }], !0);
  }
}
function jd(i, a = 0) {
  const u = Math.max(0, a);
  let c = 0;
  for (let f = u; f < i.length; f++) c += i[f] * i[f];
  return Math.sqrt(c / Math.max(1, i.length - u));
}
function rp(i, a = 0) {
  let u = 0;
  for (let c = Math.max(0, a); c < i.length; c++) {
    const f = Math.abs(i[c]);
    f > u && (u = f);
  }
  return u;
}
const ii = (i) => i > 0 ? Math.max(-90, 20 * Math.log10(i)) : -90;
let Zr;
function Xd() {
  return (!Zr || Zr.state === "closed") && (Zr = new AudioContext()), Zr;
}
function ip() {
  const i = Zr;
  Zr = void 0, i?.close().catch(() => {
  });
}
const Zd = (i) => i instanceof Error ? i.name : "";
function sp(i) {
  const a = Zd(i);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? i.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class ap {
  constructor(a = (u) => Um(u, Xd)) {
    this.opener = a;
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
  async start(a, u, c) {
    this.stop();
    const f = this.generation;
    let h, m = !1;
    try {
      h = await this.opener(a || void 0);
    } catch (k) {
      if (!a || f !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Zd(k))) throw k;
      h = await this.opener(void 0), m = !0;
    }
    if (f !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new ep(h, { ...u });
      const k = () => {
        this.mic === h && (this.stop(), c());
      }, S = this.listeners = new AbortController();
      return h.stream.getTracks().forEach(($) => $.addEventListener("ended", k, { once: !0, signal: S.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && k();
      }, { signal: S.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: m };
    } catch (k) {
      throw this.stop(), k;
    }
  }
  setOptions(a) {
    this.loop?.setOptions(a);
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
function qd(i, a) {
  return i !== "on" ? i : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Sd = (i) => Math.max(0, Math.min(1, (ii(i) + 60) / 60));
function lp(i) {
  const a = [...i].sort((c, f) => c - f), u = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, u * 3)), noise: u, loud: u > 0.04 };
}
class ef {
  constructor(a = Xd) {
    this.provide = a;
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
  async play(a) {
    this.stop();
    const u = this.token, c = this.provide();
    if (c.state !== "running" && await c.resume(), u !== this.token) return !1;
    const f = c.createGain();
    f.connect(c.destination), this.master = f;
    const h = Array.from({ length: 12 }, (S, $) => 1 / ($ + 1) ** 1.3), m = c.createPeriodicWave?.(new Float32Array([0, ...h.map(() => 0)]), new Float32Array([0, ...h]));
    return a.forEach((S, $) => {
      const v = c.createOscillator(), C = c.createGain(), F = c.currentTime + 0.05 + $ * 0.8;
      m ? v.setPeriodicWave(m) : v.type = "triangle", v.frequency.value = ld(S), C.gain.setValueAtTime(0, F), C.gain.linearRampToValueAtTime(0.22, F + 0.012), C.gain.exponentialRampToValueAtTime(1e-3, F + 0.7), v.connect(C), C.connect(f), v.start(F), v.stop(F + 0.72);
    }), !await new Promise((S) => {
      this.settle = S, this.timer = setTimeout(() => S(!0), a.length * 800 + 350);
    }) || u !== this.token ? !1 : (this.settle = void 0, f.disconnect(), this.master = void 0, !0);
  }
  /**
   * Yhtenäinen asteikkolooppi. Sävelet ajastetaan AudioContextin kellolla etukäteen,
   * ei toistokierroksen päättymistä odottavalla JavaScript-silmukalla.
   * onNote kertoo saman audiokellon mukaisen sävelindeksin otelautaa varten.
   * Toisto päättyy vain stop()-kutsuun (tai audioalustan virheeseen).
   */
  /** Muuta käynnissä olevan asteikkoloopin tempoa ilman äänivirran katkaisua. */
  setLoopTempo(a) {
    this.adjustLoopTempo?.(a);
  }
  async loop(a, u, c = 75) {
    if (this.stop(), !a.length) return !1;
    const f = this.token, h = this.provide();
    if (h.state !== "running" && await h.resume(), f !== this.token) return !1;
    const m = h.createGain();
    m.connect(h.destination), this.master = m;
    const k = Array.from({ length: 12 }, (w, R) => 1 / (R + 1) ** 1.3), S = h.createPeriodicWave?.(new Float32Array([0, ...k.map(() => 0)]), new Float32Array([0, ...k]));
    let $ = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      f === this.token && Number.isFinite(w) && ($ = 60 / Math.max(40, Math.min(140, w)));
    };
    const v = 1.6;
    let C = h.currentTime + 0.05, F = 0;
    const D = [], V = () => {
      if (f === this.token) {
        if (C < h.currentTime - 0.02) {
          const w = Math.ceil((h.currentTime - C) / $);
          C += w * $, F = (F + w) % a.length, D.length = 0;
        }
        for (; C < h.currentTime + v; ) {
          const w = a[F], R = F, U = C, N = h.createOscillator(), P = h.createGain();
          S ? N.setPeriodicWave(S) : N.type = "triangle", N.frequency.value = ld(w), P.gain.setValueAtTime(0, U), P.gain.linearRampToValueAtTime(0.22, U + 0.012), P.gain.exponentialRampToValueAtTime(1e-3, U + $ * 0.975), N.connect(P), P.connect(m), N.start(U), N.stop(U + $ * 0.985), D.push({ at: U, index: R }), C += $, F = (F + 1) % a.length;
        }
        for (; D.length && D[0].at <= h.currentTime + 0.01; ) {
          const w = D.shift();
          u?.(w.index);
        }
      }
    };
    return V(), this.loopTick = setInterval(V, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
const tf = "musiikin-kartta:skaalapolku:v1", nf = "musiikin-kartta:skaalapolku:tempo:v1", ei = 75, ho = 40, mo = 140;
function op() {
  try {
    const i = localStorage.getItem(nf);
    if (i === null) return ei;
    const a = Number(i);
    return Number.isInteger(a) && a >= ho && a <= mo && a % 5 === 0 ? a : ei;
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
], wd = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on koko position 1 A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Ed() {
  try {
    const i = Number(localStorage.getItem(tf));
    return Number.isInteger(i) ? Math.max(0, Math.min(4, i)) : 0;
  } catch {
    return 0;
  }
}
function up({ onBack: i }) {
  const [a, u] = B.useState(Ed), [c, f] = B.useState(Ed), [h, m] = B.useState(!1), [k, S] = B.useState("roots"), [$, v] = B.useState(op), [C, F] = B.useState(null), [D, V] = B.useState(null), [w, R] = B.useState(""), U = B.useRef(new ef()), N = B.useRef(0);
  function P(A) {
    const Q = Math.max(ho, Math.min(mo, A));
    v(Q), U.current.setLoopTempo(Q);
    try {
      localStorage.setItem(nf, String(Q));
    } catch {
    }
  }
  function G() {
    N.current++, U.current.stop(), F(null), V(null);
  }
  B.useEffect(() => {
    const A = () => {
      document.hidden && (N.current++, U.current.stop(), F(null), V(null));
    };
    return document.addEventListener("visibilitychange", A), () => {
      document.removeEventListener("visibilitychange", A), N.current++, U.current.stop();
    };
  }, []);
  const Z = Ve.fingeringBoxes(9, Ve.SCALES.mp, "pentatonic", [1])[0].positions[0], ee = Z.strings.flatMap((A, Q) => A.map((J) => va(Q, J))).sort((A, Q) => A.midi - Q.midi || Q.string - A.string), T = [...ee, ...ee.slice(1, -1).reverse()], z = D === null ? null : T[D], ne = [69, 72, 69, 67, 64, 67, 69], ie = Z.start, Ee = Z.end, Le = (A) => Ke(A) === 9, Te = (A) => c < 2 ? !0 : c === 2 ? h && Le(A) : k === "scale" || k === "roots" && Le(A), Me = ee.filter((A) => Te(A.midi)).map((A) => ({
    ...A,
    label: c < 2 || c === 3 && k === "scale" ? Ie(A.midi) : "A",
    kind: c < 2 && z?.string === A.string && z.fret === A.fret ? "playing" : Le(A.midi) ? "answer" : "shape"
  }));
  async function K(A) {
    const Q = ++N.current;
    U.current.stop(), V(null), R(""), F(A);
    try {
      A === "phrase" ? await U.current.play(ne) : await U.current.loop(T.map((J) => J.midi), (J) => {
        Q === N.current && V(J);
      }, c === 2 ? $ : ei);
    } catch {
      Q === N.current && R("Mallisoitto ei käynnistynyt. Tarkista selaimen ääniasetukset ja yritä uudelleen.");
    } finally {
      Q === N.current && (F(null), V(null));
    }
  }
  function oe() {
    G();
    const A = Math.min(4, c + 1);
    if (f(A), m(!1), S("roots"), A > a) {
      u(A);
      try {
        localStorage.setItem(tf, String(A));
      } catch {
      }
    }
  }
  function te(A) {
    A > a || (G(), f(A), m(!1), S("roots"));
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: () => {
      G(), i();
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
    /* @__PURE__ */ l.jsx("nav", { className: "journey-steps", "aria-label": "Position 1 harjoitukset", children: so.map((A, Q) => /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: Q === c ? "journey-step current" : "journey-step",
        "aria-current": Q === c ? "step" : void 0,
        disabled: Q > a,
        onClick: () => te(Q),
        children: [
          /* @__PURE__ */ l.jsx("span", { className: "journey-index", children: Q > a ? "🔒" : Q < a ? "✓" : Q + 1 }),
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
              disabled: $ <= ho,
              onClick: () => P($ - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ l.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            $,
            " BPM"
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: $ >= mo,
              onClick: () => P($ + 5),
              children: "+ 5"
            }
          ),
          $ !== ei && /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => P(ei),
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
              onClick: () => C === "loop" ? G() : void K("loop"),
              children: C === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => C === "phrase" ? G() : void K("phrase"), children: C === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        c !== 3 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: C === "loop" ? z && c < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Ie(z.midi, !1, !0)} · ${fn[z.string]}-kieli, nauha ${z.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        w && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: w }),
        c >= 1 && c <= 3 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          c === 2 && /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ l.jsx("button", { type: "button", "aria-pressed": h, onClick: () => m((A) => !A), children: h ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => te(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          c === 3 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ l.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              wd.map((A) => /* @__PURE__ */ l.jsxs("label", { children: [
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: A.value,
                    checked: k === A.value,
                    onChange: () => S(A.value)
                  }
                ),
                /* @__PURE__ */ l.jsx("span", { children: A.label })
              ] }, A.value))
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
              K("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ l.jsx(Ji, { area: { strings: [0, 1, 2, 3, 4, 5], min: ie, max: Ee, fixed: "box" }, marks: Me, disabled: !0, caption: "A-mollipentatoninen, positio 1" }),
          /* @__PURE__ */ l.jsxs("p", { className: "tools-note", children: [
            c < 2 ? "Vihreällä merkitty A on pohjasävel." : c === 3 ? wd.find((A) => A.value === k).note : h ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        c === 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Ji, { area: { strings: [0, 1, 2, 3, 4, 5], min: ie, max: Ee, fixed: "box" }, marks: Me, disabled: !0, caption: "Ensimmäisen position sävelet" }),
          /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        c === 3 && /* @__PURE__ */ l.jsx(Vm, {}),
        /* @__PURE__ */ l.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ l.jsx("p", { children: c === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : c === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : c === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: oe, children: c === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      c === 4 && /* @__PURE__ */ l.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ l.jsx("h3", { children: "Ensimmäinen positio harjoiteltu" }),
        /* @__PURE__ */ l.jsx("p", { children: "Kertaa asteikko muistista myös myöhemmin. Seuraavat positiot ja niiden yhdistäminen rakennetaan tämän mallin pohjalta." }),
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => te(2), children: "Kertaa muistiharjoitus" })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ l.jsx("p", { children: "🔒 Positio 2 · 🔒 Positioiden 1 ja 2 yhdistäminen · 🔒 Positio 3" }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Nämä harjoitukset ovat vielä toteuttamatta. Ensimmäinen positio toimii uuden rakenteen testiversiona." })
    ] })
  ] });
}
const Xr = [0, 2, 4, 5, 7, 9, 11], cp = 1200, ca = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function dp({ onBack: i }) {
  const [a, u] = B.useState(0), [c, f] = B.useState([]), [h, m] = B.useState(!1), [k, S] = B.useState(""), [$, v] = B.useState(0), [C, F] = B.useState(!1), D = a >= Xr.length, V = Xr[Math.min(a, Xr.length - 1)], w = si(ca.strings, ca.min, ca.max).filter((T) => Ke(T.midi) === V), R = w.filter((T) => !c.includes(it(T))), U = R.length === 0 && !D, N = !U && h ? R[0] : void 0;
  B.useEffect(() => {
    if (!C || !U) return;
    const T = window.setTimeout(() => {
      u((z) => z + 1), f([]), m(!1), S("");
    }, cp);
    return () => window.clearTimeout(T);
  }, [C, U]);
  const P = [
    ...w.filter((T) => c.includes(it(T))).map((T) => ({ ...T, kind: "answer", label: Ie(T.midi) })),
    ...N ? [{ ...N, kind: "anchor", label: "?" }] : []
  ];
  function G(T) {
    if (D || U) return;
    const z = it(T);
    if (Ke(T.midi) !== V) {
      v((Ee) => Ee + 1), S(`Valitsit sävelen ${Ie(T.midi)}. Etsi ${Ie(V)}.`);
      return;
    }
    if (c.includes(z)) {
      S("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const ne = [...c, z];
    f(ne), m(!1);
    const ie = w.length - ne.length;
    S(ie ? `Oikein! ${Ie(V)} löytyi ${fn[T.string]}-kieleltä (${Er(T.fret)}). Vielä ${ie}.` : `Löysit kaikki ${w.length} ${Ie(V)}-säveltä tällä alueella.`);
  }
  function Z() {
    U && (u((T) => T + 1), f([]), m(!1), S(""));
  }
  function ee() {
    u(0), f([]), m(!1), S(""), v(0);
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ l.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !D && /* @__PURE__ */ l.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          checked: C,
          onChange: (T) => F(T.target.checked)
        }
      ),
      /* @__PURE__ */ l.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "journey-lesson", children: D ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        $ ? `Vääriä valintoja yhteensä ${$}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: ee, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsxs("h3", { children: [
          "Etsi kaikki ",
          Ie(V),
          "-sävelet"
        ] }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          Xr.length
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Ie(V),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ l.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        w.length
      ] }),
      /* @__PURE__ */ l.jsx(
        Ji,
        {
          area: ca,
          marks: P,
          onAnswer: G,
          disabled: U,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "p",
        {
          className: U ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: k
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        !U && /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => m((T) => !T),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        U && (C ? /* @__PURE__ */ l.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === Xr.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: Z, children: a === Xr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const fp = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, ao = ["C", "G", "D", "Em"], Nd = ["C", "G", "D", "Em", "Am", "E", "A"], hp = { min: 0, max: 3, fixed: "" };
function Cd(i) {
  const a = [...i];
  for (let u = a.length - 1; u > 0; u--) {
    const c = Math.floor(Math.random() * (u + 1));
    [a[u], a[c]] = [a[c], a[u]];
  }
  return a;
}
function mp({ onBack: i }) {
  const [a, u] = B.useState(4), [c, f] = B.useState(() => Cd(ao)), [h, m] = B.useState(0), [k, S] = B.useState(null), [$, v] = B.useState([]), [C, F] = B.useState(0), D = h >= c.length, V = fp[c[Math.min(h, c.length - 1)]], w = a === 4 ? ao : Nd, R = V.frets.flatMap((T, z) => T === null ? [] : [z]), U = V.frets.flatMap((T, z) => T === null ? [z] : []), N = { ...hp, strings: R }, P = V.frets.flatMap((T, z) => T === null ? [] : [{
    ...va(z, T),
    kind: T === 0 ? "anchor" : "shape",
    label: T === 0 ? "○" : "●"
  }]);
  function G(T = a) {
    u(T), f(Cd(T === 4 ? ao : Nd)), m(0), S(null), v([]), F(0);
  }
  function Z(T) {
    k || D || $.includes(T) || (T === V.name ? S(T) : (v((z) => [...z, T]), F((z) => z + 1)));
  }
  function ee() {
    k && (m((T) => T + 1), S(null), v([]));
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
            checked: a === 4,
            onChange: () => G(4)
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
            checked: a === 7,
            onChange: () => G(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "journey-lesson", children: D ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        C ? `Vääriä valintoja yhteensä ${C}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: () => G(), children: "Harjoittele uudelleen" }) })
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
        Ji,
        {
          area: N,
          marks: P,
          mutedStrings: U,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ l.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((T) => /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: k === T ? "right" : $.includes(T) ? "wrong" : "",
          disabled: !!k || $.includes(T),
          "aria-pressed": k === T,
          onClick: () => Z(T),
          children: T
        },
        T
      )) }),
      /* @__PURE__ */ l.jsx(
        "p",
        {
          className: k ? "feedback good" : $.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: k ? `Oikein! Tämä on ${V.name}-sointu.` : $.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      k && /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: ee, children: h === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ce = (i, a) => ({ first: i, ...a ? { second: a } : {} }), ti = () => [
  ce("Gm", "F"),
  ce("Gm"),
  ce("B♭", "F"),
  ce("Gm"),
  ce("Gm", "F"),
  ce("Gm"),
  ce("E♭", "F"),
  ce("Gm")
], ni = () => [
  ce("B♭", "F"),
  ce("Gm", "Dm"),
  ce("E♭", "F"),
  ce("Gm", "Dm")
], ri = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], rf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], pp = [
  { id: "intro", title: "Intro", start: 0, bars: [ce("Gm", "F"), ce("Gm"), ce("B♭", "F"), ce("Gm")] },
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
    bars: [...ni(), ce("E♭"), { ...ce("E♭"), passingBass: "F" }],
    lyrics: ri,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ce("Gm", "F"), ce("Gm")] },
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
    bars: [...ni(), ce("E♭"), ce("F")],
    lyrics: ri
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [ce("Gm"), ce("Dm"), ce("F"), ce("C"), ce("Gm"), ce("Dm"), ce("E♭"), ce("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: ti(),
    lyrics: rf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ni(), ce("E♭", "F"), ce("Gm")],
    lyrics: ri
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      ce("E♭", "F"),
      { ...ce("Gm"), possibleChord: "Dm" },
      ce("E♭", "F"),
      ce("Gm", "F"),
      { ...ce("Gm"), possibleChord: "Dm" },
      ce("Gm", "F"),
      ce("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], vp = [
  { id: "intro", title: "Intro", start: 0, bars: [ce("Gm", "F"), ce("Gm"), ce("B♭", "F"), ce("Gm")] },
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
    bars: [...ni(), ce("E♭"), ce("E♭")],
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
    bars: [...ni(), ce("E♭"), ce("F")],
    lyrics: ri
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [ce("Gm"), ce("Dm"), ce("F"), ce("C"), ce("Gm"), ce("Dm"), ce("E♭"), ce("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: ti(),
    lyrics: rf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ni(), ce("B♭", "F"), ce("Gm"), ce("E♭", "F"), ce("Gm")],
    lyrics: ri
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ce("E♭", "F"), ce("Gm", "F"), ce("E♭", "F"), ce("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ai = {
  acoustic: pp,
  normal: vp
}, kp = "normal", po = "yksi-sointu-kaksi-askelta", No = {
  acoustic: po + "-akustinen",
  normal: po + "-normaali"
}, sf = (i) => i === po || Object.values(No).includes(i ?? "");
function yp(i) {
  const a = Object.entries(No).find(([, u]) => u === i);
  return a ? a[0] : null;
}
const gp = (i) => No[i], _d = (i) => {
  const a = Math.max(0, Math.floor(Number.isFinite(i) ? i : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Co(i, a = "acoustic") {
  const u = ai[a], c = u[i], f = u[i + 1];
  return f ? (f.start - c.start) / c.bars.length : 240 / 69;
}
function af(i, a = "acoustic") {
  const u = ai[a], c = Math.max(0, Number.isFinite(i) ? i : 0);
  let f = 0;
  for (let C = 1; C < u.length && !(c < u[C].start); C++)
    f = C;
  const h = u[f];
  let m = 0;
  for (; m + 1 < h.bars.length && c >= Xi(f, m + 1, a); )
    m++;
  const k = Xi(f, m, a), S = Co(f, a) / 4;
  let $ = 1;
  for (; $ < 4 && c >= k + $ * S; ) $++;
  const v = h.bars[m];
  return {
    section: h,
    sectionIndex: f,
    barIndex: m,
    beat: $,
    chord: v.second && $ >= 3 ? v.second : v.first
  };
}
function Xi(i, a, u = "acoustic") {
  return ai[u][i].start + Co(i, u) * a;
}
function xp(i) {
  return ai[i].flatMap((a, u) => a.bars.flatMap((c, f) => {
    const h = Xi(u, f, i), m = { section: a, sectionIndex: u, barIndex: f, part: "first", chord: c.first, time: h };
    if (!c.second) return [m];
    const k = Co(u, i) / 2;
    return [m, { ...m, part: "second", chord: c.second, time: h + k }];
  }));
}
function jp(i, a = "acoustic", u = !1) {
  const c = ai[a], f = af(i, a), h = f.section.bars[f.barIndex], m = f.beat >= 3 && h.second ? "second" : "first", k = xp(a), S = k.findIndex((D) => D.sectionIndex === f.sectionIndex && D.barIndex === f.barIndex && D.part === m), v = [
    ...k.slice(S + 1).map((D) => ({ ...D, wrapped: !1 })),
    ...u ? k.slice(0, S + 1).map((D) => ({ ...D, wrapped: !0 })) : []
  ].find((D) => D.chord !== f.chord) ?? null;
  let C = null;
  const F = f.sectionIndex === c.length - 1;
  if (f.barIndex === f.section.bars.length - 1 && (!F || u)) {
    const D = F ? 0 : f.sectionIndex + 1, V = c[D], w = V.bars[0].first;
    C = {
      section: V,
      sectionIndex: D,
      firstChord: w,
      wrapped: F,
      continues: w === (h.second ?? h.first)
    };
  }
  return { nextChord: v, nextSection: C };
}
function Sp(i) {
  const a = i.filter((k) => k.lyrics?.length), u = (k) => 1 + (k.lyrics?.length ?? 0), c = a.reduce((k, S) => k + u(S), 0);
  let f = 0, h = 1 / 0, m = 0;
  for (let k = 0; k <= a.length; k++) {
    const S = Math.abs(c - 2 * m);
    (S < h || S === h && m >= c - m) && (f = k, h = S), k < a.length && (m += u(a[k]));
  }
  return [a.slice(0, f), a.slice(f)];
}
const vo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], lf = "musiikin-kartta:kappale-sointuvihjeet:v1", ha = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Td = {
  showChords: !0,
  level: 0,
  fadeOrder: ha
};
function da(i, a) {
  return !a.showChords || a.level >= a.fadeOrder[i];
}
function Md(i) {
  if (!i) return { ...Td, fadeOrder: { ...ha } };
  try {
    const a = JSON.parse(i);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const u = a, c = u.level, f = { ...ha }, h = u.fadeOrder;
    if (h && typeof h == "object") {
      const m = h;
      for (const k of vo)
        [1, 2, 3, 4].includes(m[k]) && (f[k] = m[k]);
    }
    return {
      showChords: typeof u.showChords == "boolean" ? u.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: f
    };
  } catch {
    return { ...Td, fadeOrder: { ...ha } };
  }
}
function wp() {
  try {
    return Md(localStorage.getItem(lf));
  } catch {
    return Md(null);
  }
}
const Ep = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Np(i) {
  const a = Ep.exec(i.trim());
  if (!a) return i;
  const [, u, , c = "", f = ""] = a;
  return u + "5" + c + f;
}
const Cp = (i, a) => a === "power" ? Np(i) : i, _p = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Tp = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Mp({ version: i, position: a, loop: u = !1, onSeek: c }) {
  const [f, h] = B.useState(wp), [m, k] = B.useState(null), [S, $] = B.useState(!1), [v, C] = B.useState("full"), F = (K) => Cp(K, v), D = ai[i], V = af(a, i), { section: w, sectionIndex: R, barIndex: U, beat: N, chord: P } = V, G = N >= 3 && w.bars[U].second ? "second" : "first", Z = (K, oe, te) => `${i}:${K}:${oe}:${te}`, ee = (K, oe) => Z(w.id, K, oe), T = ee(U, G), z = da(P, f), ne = z && m === T, ie = (K, oe, te) => !da(K, f) || m === ee(oe, te), Ee = f.showChords && f.level === 0, Le = vo.filter((K) => da(K, f)).length, { nextSection: Te } = jp(a, i, u), Me = !!Te && da(Te.firstChord, f);
  return B.useEffect(() => {
    k(null);
  }, [T]), B.useEffect(() => {
    try {
      localStorage.setItem(lf, JSON.stringify(f));
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
            onChange: (K) => {
              h((oe) => ({ ...oe, showChords: K.target.checked })), k(null);
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
            onChange: (K) => $(K.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ l.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ l.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([K, oe]) => /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: K,
              checked: v === K,
              onChange: () => C(K)
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: oe })
        ] }, K))
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-hint-level",
            value: f.level,
            disabled: !f.showChords,
            onChange: (K) => {
              const oe = Number(K.target.value);
              h((te) => ({ ...te, level: oe })), k(null);
            },
            children: _p.map((K) => /* @__PURE__ */ l.jsx("option", { value: K.value, children: K.label }, K.value))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Le === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Le}/6 sointua` })
    ] }),
    f.showChords && f.level < 4 && /* @__PURE__ */ l.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ l.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ l.jsx("div", { className: "song-fade-order", children: vo.map((K) => /* @__PURE__ */ l.jsxs("label", { children: [
        K,
        /* @__PURE__ */ l.jsx(
          "select",
          {
            "aria-label": K + ": piilotusvaihe",
            value: f.fadeOrder[K],
            onChange: (oe) => {
              const te = Number(oe.target.value);
              h((A) => ({ ...A, fadeOrder: { ...A.fadeOrder, [K]: te } })), k(null);
            },
            children: Tp.map((oe) => /* @__PURE__ */ l.jsx("option", { value: oe.value, children: oe.label }, oe.value))
          }
        )
      ] }, K)) })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ l.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (K) => {
              const oe = D.find((te) => te.id === K.target.value);
              oe && c(oe.start);
            },
            children: D.map((K) => /* @__PURE__ */ l.jsxs("option", { value: K.id, children: [
              _d(K.start),
              " · ",
              K.title
            ] }, K.id))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ l.jsxs("p", { className: "song-current-chord", children: [
          z && !ne ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ l.jsx("strong", { children: z && !ne ? "?" : F(P) }),
          /* @__PURE__ */ l.jsxs("span", { children: [
            w.title,
            ", tahti ",
            U + 1,
            ", isku ",
            N,
            "/4"
          ] }),
          z && /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => k(ne ? null : T),
              children: ne ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        Te && /* @__PURE__ */ l.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ l.jsx("strong", { children: Me ? "?" : F(Te.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((K, oe) => {
      const te = oe === U, A = te && (N < 3 || !K.second), Q = te && N >= 3 && !!K.second, J = ie(K.first, oe, "first"), g = K.second ? ie(K.second, oe, "second") : !1, I = (J ? F(K.first) : "sointu piilossa") + (K.second ? " " + (g ? F(K.second) : "sointu piilossa") : "") + (Ee && K.passingBass ? " (basson kulku " + K.passingBass + ")" : "") + (Ee && K.possibleChord ? " (" + F(K.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (te ? " active" : ""),
          "aria-pressed": te,
          "aria-label": "Tahti " + (oe + 1) + ": " + I + ". Siirry kohtaan " + _d(Xi(R, oe, i)),
          onClick: () => c(Xi(R, oe, i)),
          children: [
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              oe + 1
            ] }),
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ l.jsx("strong", { className: A && J ? "now" : "", children: J ? F(K.first) : "?" }),
              K.second && /* @__PURE__ */ l.jsx("strong", { className: Q && g ? "now" : "", children: g ? F(K.second) : "?" })
            ] }),
            Ee && K.passingBass && /* @__PURE__ */ l.jsxs("small", { children: [
              "Basso: (",
              K.passingBass,
              "), isku 4"
            ] }),
            Ee && K.possibleChord && /* @__PURE__ */ l.jsxs("small", { children: [
              "Mahdollinen (",
              F(K.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        oe
      );
    }) }),
    S ? /* @__PURE__ */ l.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ l.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ l.jsx("div", { className: "song-all-lyrics-grid", children: Sp(D).map((K, oe) => /* @__PURE__ */ l.jsx("div", { className: "song-lyrics-column", children: K.map((te) => /* @__PURE__ */ l.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ l.jsx("h5", { children: te.title }),
        te.lyrics?.map((A, Q) => /* @__PURE__ */ l.jsx("p", { children: A }, Q))
      ] }, te.id)) }, oe)) }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ l.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ l.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((K, oe) => /* @__PURE__ */ l.jsx("p", { children: K }, oe))
    ] }),
    Ee && w.note && /* @__PURE__ */ l.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const ko = 7, Pp = { name: "bluesasteikko", base: Ve.SCALES.mp.base, add: [[6, "♭5"]] }, Ui = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: Ve.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: Pp,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: Ve.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function Ap(i) {
  return Ve.scaleNotes(i).map(([a, u]) => Ve.noteName(ko, a, u));
}
const Pd = 17;
function Rp({ open: i }) {
  const [a, u] = B.useState("mp"), [c, f] = B.useState(0), h = B.useRef(null), m = Ui.find((v) => v.id === a) ?? Ui[0], k = m.system === "pentatonic" ? 5 : 7, S = c ? Ve.fingeringBoxes(ko, m.scale, m.system, [c], Pd) : [], $ = Ve.renderBoard(ko, m.scale, Pd, {
    automatic: !0,
    boxes: S,
    label: m.title + (c ? ", boksi " + c : "")
  });
  return B.useEffect(() => {
    const v = h.current;
    !v || !i || (c ? Ve.revealPositions(v, ".box-highlight") : v.scrollLeft = 0);
  }, [$, c, i]), /* @__PURE__ */ l.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "song-scale-controls", children: [
      /* @__PURE__ */ l.jsxs("label", { children: [
        "Asteikko",
        /* @__PURE__ */ l.jsx("select", { value: a, onChange: (v) => {
          const C = Ui.find((F) => F.id === v.target.value) ?? Ui[0];
          u(C.id), c > (C.system === "pentatonic" ? 5 : 7) && f(0);
        }, children: Ui.map((v) => /* @__PURE__ */ l.jsx("option", { value: v.id, children: v.title }, v.id)) })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { children: [
        m.system === "pentatonic" ? "Pentatoninen boksi" : "Sormitus (3 säveltä kielellä)",
        /* @__PURE__ */ l.jsxs("select", { value: c, onChange: (v) => f(Number(v.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: 0, children: "Koko otelauta" }),
          Array.from({ length: k }, (v, C) => /* @__PURE__ */ l.jsxs("option", { value: C + 1, children: [
            "Boksi ",
            C + 1
          ] }, C + 1))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ l.jsx("strong", { children: m.title }),
      /* @__PURE__ */ l.jsx("span", { children: Ap(m.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "song-scale-note", children: m.note }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: h,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: $ }
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
      m.scale.add.length > 0 && /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        m.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] })
  ] });
}
const Lp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, yo = 100, of = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function _o(i) {
  if (i === null || i.trim() === "") return yo;
  const a = Number(i);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : yo;
}
function $p() {
  try {
    return _o(localStorage.getItem(of));
  } catch {
    return yo;
  }
}
function Fp(i) {
  try {
    localStorage.setItem(of, String(_o(String(i))));
  } catch {
  }
}
function Ad(i, a, u = !0) {
  return u ? Lp[i] * _o(String(a)) / 100 : 0;
}
function Op(i = () => new Audio()) {
  try {
    const a = i();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Ip = () => {
  const i = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!i) throw new Error("Web Audio API puuttuu");
  return new i();
};
class Dp {
  constructor(a = Ip) {
    this.create = a;
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
  route(a) {
    if (this.gains.has(a)) return !0;
    if (!this.context) return !1;
    try {
      const u = this.context.createMediaElementSource(a), c = this.context.createGain();
      return u.connect(c), c.connect(this.context.destination), this.gains.set(a, c), !0;
    } catch {
      return !1;
    }
  }
  routed(a) {
    return !!a && this.gains.has(a);
  }
  setLevel(a, u) {
    const c = this.gains.get(a);
    c && (c.gain.value = u);
  }
  close() {
    const a = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), a?.close().catch(() => {
    });
  }
}
let uf = null;
function zp() {
  return yp(new URLSearchParams(location.search).get("kappale")) ?? uf ?? kp;
}
function bp(i) {
  uf = i;
  const a = new URL(location.href);
  sf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", gp(i)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const Vp = {
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
}, Bp = 0.12, Rd = 1e-3;
function Ld(i, a) {
  try {
    i.currentTime = a;
  } catch {
  }
}
function $d(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const a = Math.floor(i);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Up({ onBack: i }) {
  const a = B.useRef(null), u = B.useRef(null), c = B.useRef(null), f = B.useRef(0), h = B.useRef(null), [m, k] = B.useState(zp), S = Vp[m], [$, v] = B.useState(!1), [C, F] = B.useState(!0), [D, V] = B.useState(!0), [w, R] = B.useState(!1), [U, N] = B.useState(!1), [P, G] = B.useState(!1), [Z, ee] = B.useState($p), [T] = B.useState(() => Op() ? "element" : "webaudio"), z = B.useRef(null), [ne, ie] = B.useState(0), [Ee, Le] = B.useState(0), [Te, Me] = B.useState("");
  function K(j = !1) {
    const b = a.current;
    if (!(!b || b.readyState < 1))
      for (const O of [u.current, c.current]) {
        if (!O || O.readyState < 1) continue;
        const q = Math.abs(O.currentTime - b.currentTime), de = b.loop && Number.isFinite(b.duration) && Math.abs(q - b.duration) < 0.35;
        if (j || !de && q > Bp)
          try {
            O.currentTime = b.currentTime;
          } catch {
          }
      }
  }
  function oe() {
    return [
      ["backing", a.current, !0],
      ["guitar", u.current, C],
      ["vocals", c.current, D]
    ];
  }
  function te(j = Z, b) {
    for (const [O, q, de] of oe()) {
      if (!q) continue;
      const ae = Ad(O, j, b?.[O] ?? de);
      if (T === "webaudio" && z.current?.routed(q))
        z.current.setLevel(q, ae);
      else
        try {
          q.volume = Ad(O, j);
        } catch {
        }
    }
  }
  function A(j) {
    ee(j), Fp(j), te(j);
  }
  function Q() {
    f.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), v(!1);
  }
  function J(j) {
    if (j !== m) {
      h.current = null, Q();
      for (const b of [a.current, u.current, c.current])
        if (b)
          try {
            b.currentTime = 0;
          } catch {
          }
      ie(0), Le(0), Me(""), k(j), bp(j);
    }
  }
  function g(j) {
    const b = a.current;
    if (!b || !Number.isFinite(j)) return;
    const O = Math.max(0, Math.min(j, Number.isFinite(b.duration) ? b.duration : j));
    h.current = O, ie(O), Ld(b, O);
  }
  function I(j) {
    const b = h.current;
    if (b === null || j !== a.current || j.seeking) return;
    const O = Number.isFinite(j.duration) ? Math.min(b, j.duration) : b;
    if (O !== b && (h.current = O, ie(O)), Math.abs(j.currentTime - O) < Rd) return;
    const q = j.seekable;
    for (let de = 0; de < q.length; de++)
      if (q.start(de) <= O && O <= q.end(de)) {
        Ld(j, O);
        return;
      }
  }
  function ve(j) {
    if (j !== a.current) return;
    const b = h.current;
    if (b === null)
      ie(j.currentTime);
    else if (j.readyState >= 1 && !j.seeking && Math.abs(j.currentTime - b) < Rd) {
      h.current = null, K(!0);
      return;
    }
    j.paused || K();
  }
  async function we() {
    const j = a.current, b = u.current, O = c.current;
    if (!j || !b || !O) return;
    if ($) {
      Q();
      return;
    }
    Me("");
    const q = h.current ?? j.currentTime;
    if (Number.isFinite(j.duration) && q >= j.duration - 0.05 && g(0), I(j), T === "webaudio" && (z.current ??= new Dp(), z.current.unlock()))
      for (const ae of [j, b, O]) z.current.route(ae);
    te(), b.muted = !C, O.muted = !D, K(!0);
    const de = ++f.current;
    try {
      const ae = [j.play(), b.play(), O.play()];
      if (await Promise.all(ae), de !== f.current) return;
      K(), v(!0);
    } catch {
      if (de !== f.current) return;
      Q(), Me("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function _e(j) {
    j && K(), u.current && (u.current.muted = !j), F(j), te(Z, { guitar: j });
  }
  function Ne(j) {
    j && K(), c.current && (c.current.muted = !j), V(j), te(Z, { vocals: j });
  }
  return B.useEffect(() => {
    const j = () => {
      document.hidden && Q();
    };
    return document.addEventListener("visibilitychange", j), () => {
      document.removeEventListener("visibilitychange", j), f.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), z.current?.close();
    };
  }, []), B.useEffect(() => {
    te();
  }, [m]), /* @__PURE__ */ l.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
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
          value: m,
          onChange: (j) => J(j.target.value),
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
          S.label,
          " · ",
          S.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          we();
        }, children: $ ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: Ee > 0 ? Ee : 1,
            step: 0.1,
            value: Math.min(ne, Ee > 0 ? Ee : 1),
            disabled: Ee <= 0,
            onChange: (j) => g(Number(j.target.value))
          }
        ),
        /* @__PURE__ */ l.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          $d(ne),
          " / ",
          $d(Ee)
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: C,
              onChange: (j) => _e(j.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: D,
              onChange: (j) => Ne(j.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: w,
              onChange: (j) => R(j.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "song-volume", "data-volume-mode": T, children: [
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
              onChange: (j) => A(Number(j.target.value))
            }
          ),
          /* @__PURE__ */ l.jsxs("output", { "aria-hidden": "true", children: [
            Z,
            " %"
          ] })
        ] })
      ] }),
      Te && /* @__PURE__ */ l.jsx("p", { className: "backing-error", role: "alert", children: Te }),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: a,
          src: S.backing,
          preload: "metadata",
          loop: w,
          onLoadedMetadata: (j) => {
            j.currentTarget === a.current && (Le(j.currentTarget.duration), I(j.currentTarget));
          },
          onProgress: (j) => I(j.currentTarget),
          onCanPlay: (j) => I(j.currentTarget),
          onTimeUpdate: (j) => ve(j.currentTarget),
          onEnded: (j) => {
            j.currentTarget !== a.current || j.currentTarget.loop || (h.current = null, u.current?.pause(), c.current?.pause(), v(!1), ie(j.currentTarget.duration));
          },
          onPause: (j) => {
            j.currentTarget === a.current && v(!1);
          },
          onError: () => Me(S.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: u,
          src: S.guitar,
          preload: "metadata",
          muted: !C,
          loop: w,
          onLoadedMetadata: () => K(!0),
          onError: () => Me(S.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: c,
          src: S.vocals,
          preload: "metadata",
          muted: !D,
          loop: w,
          onLoadedMetadata: () => K(!0),
          onError: () => Me(S.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-chart-collapse", open: U, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (j) => {
        j.preventDefault(), N((b) => !b);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ l.jsx(Mp, { version: m, position: ne, loop: w, onSeek: g })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-scales-collapse", open: P, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (j) => {
        j.preventDefault(), G((b) => !b);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ l.jsx(Rp, { open: P })
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
}, ma = (i, a = 1) => i.toFixed(a).replace(".", ",").replace("-", "−"), cf = (i) => {
  const a = Math.round(i);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, xo = (i) => i ? i.label || "Järjestelmän oletustulo" : "";
function Hp(i, a, u, c) {
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
      return [`Viritä kitara. Sävel hyväksytään, kun poikkeama on enintään ±${a.cents} senttiä.`];
    case "pitch":
      return [`Mikrofoni toimii. Harjoituksessa sävel hyväksytään, kun se soi vakaana ${a.stability} ms.`];
    default:
      return [];
  }
}
function df({ frame: i, threshold: a }) {
  const u = i?.rms ?? 0, c = ii(u), f = (i?.peak ?? 0) >= 0.98 ? "clip" : u >= a ? "over" : "under";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meter ${f}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${ma(Math.max(-60, c), 0)} desibeliä${u >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meter-fill", style: { width: `${Sd(u) * 100}%` } }),
        /* @__PURE__ */ l.jsx("div", { className: "meter-threshold", style: { left: `${Sd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Kp({ mic: i, frame: a, heard: u, s: c, now: f }) {
  const h = qd(i.phase, a), m = u && f - u.at < 1500 ? u : null, k = h === "pitch" || h === "untuned" || m ? m ? `Kuulen: ${Ie(m.midi, c.flats, !0)} · ${cf(m.cents)} senttiä${m.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : go[h];
  return /* @__PURE__ */ l.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ l.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: k }),
    i.phase === "on" && /* @__PURE__ */ l.jsx(df, { frame: a, threshold: c.minRms })
  ] });
}
function Gp({ mic: i, frame: a, heard: u, accepted: c, now: f, s: h, change: m, devices: k, locked: S, calibrating: $, calibration: v, onTest: C, onStop: F, onCalibrate: D }) {
  const V = B.useId(), w = qd(i.phase, a), R = i.purpose === "test" && i.phase !== "off" && i.phase !== "error", U = i.phase === "on", N = u && f - u.at < 1500 ? u : null, P = N && (w === "pitch" || w === "untuned"), G = U && (a?.peak ?? 0) >= 0.98, Z = i.phase === "error" ? [] : Hp(w, h, i.info, G), ee = !h.device || k.some((z) => z.deviceId === h.device), T = (z, ne) => m({ ...h, [z]: ne });
  return /* @__PURE__ */ l.jsxs("section", { className: "mic-panel", "aria-labelledby": `${V}-title`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ l.jsx("h2", { id: `${V}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ l.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      i.phase === "error" ? i.error : go[w],
      w === "pitch" && N ? ` ${Ie(N.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: i.phase === "on" ? `Mikrofoni kuuntelee: ${xo(i.info)}.` : i.phase === "error" ? i.error : go[i.phase] }),
    i.phase === "off" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    U && /* @__PURE__ */ l.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ l.jsxs("dd", { "data-testid": "mic-device", children: [
          xo(i.info),
          i.info && i.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${i.info.channels}` : "",
          i.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ l.jsxs("dd", { children: [
          /* @__PURE__ */ l.jsx(df, { frame: a, threshold: h.minRms }),
          /* @__PURE__ */ l.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            ma(Math.max(-60, ii(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: P ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ l.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: N ? Ie(N.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: P ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-frequency", children: N ? `${ma(N.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: P ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-cents", children: N ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          cf(N.cents),
          " senttiä",
          /* @__PURE__ */ l.jsx("span", { className: `cents ${N.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ l.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, N.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: P ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-clarity", children: N ? `${Math.round(N.clarity * 100)} %` : a?.clarity !== void 0 && w === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    U && c && f - c.timestamp < 4e3 && /* @__PURE__ */ l.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ie(c.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    Z.length > 0 && U && /* @__PURE__ */ l.jsx("ul", { className: "mic-advice", children: Z.map((z) => /* @__PURE__ */ l.jsx("li", { children: z }, z)) }),
    i.phase === "error" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
      R ? /* @__PURE__ */ l.jsx("button", { type: "button", onClick: F, children: "Lopeta testi" }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: h.input === "mic" && i.phase !== "on" ? "primary" : "", disabled: S, onClick: C, children: "Testaa mikrofoni" }),
      R && U && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: $, onClick: D, children: $ ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    S && i.purpose !== "test" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", disabled: S, children: [
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsx("label", { htmlFor: `${V}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ l.jsxs("select", { id: `${V}-device`, value: h.device, onChange: (z) => T("device", z.target.value), children: [
              /* @__PURE__ */ l.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !ee && /* @__PURE__ */ l.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              k.map((z, ne) => /* @__PURE__ */ l.jsx("option", { value: z.deviceId, children: z.label || `Äänitulo ${ne + 1}` }, z.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${V}-rms`, children: [
              "Äänikynnys · ",
              ma(ii(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${V}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (z) => T("minRms", Number(z.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${V}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${V}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (z) => T("clarity", Number(z.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${V}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${V}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (z) => T("stability", Number(z.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${V}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${V}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (z) => T("cents", Number(z.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("p", { className: "tools-note", children: [
          k.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const Wp = (i) => i.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[i.scale]) : wr[i.mode === "caged" ? "maj" : i.chord].tones, Fd = (i, a) => Wp(i).find(([u]) => u === a)?.[1], ff = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", Qp = (i) => i.direction === "up" ? "ylöspäin" : "alaspäin";
function Yp(i, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : i.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Jp(i, a, u, c, f) {
  return a.choices === "degree" ? `Oikein! ${Gi(i.root, a.interval, a.degree)} on ${a.degree}. aste.` : ff(i) ? `Oikein! ${a.degree}. aste on ${Gi(i.root, a.interval, a.degree)}.` : i.mode === "interval" ? `Oikein! ${Ie(a.reference, i.flats, !0)} → ${a.name} on ${Wi[a.interval]} ${Qp(a)}.` : i.mode === "notes" ? u === "board" && f ? `Oikein! ${Ie(f.midi, i.flats)} on ${Dd[f.string]}: ${Er(f.fret)}.` : `Oikein! Soitit sävelen ${Ie(c, i.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function Xp(i, a, u, c, f) {
  if (u === "note") return `Ei ${Ie(c, i.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (u === "degree") return `Ei ${Fd(i, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!f) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = Ke(f.midi) === Ke(a.midi);
  if (i.mode === "notes")
    return f.string !== a.position.string ? `Tuo on ${fn[f.string]}-kieli. Etsi sävel ${wo[a.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Ie(f.midi, i.flats)}. Etsi ${a.name}.`;
  if (ff(i)) {
    const m = Ke(f.midi - i.root), k = Fd(i, m), S = i.mode === "scale" ? "asteikkoon" : "sointuun";
    return k ? h && a.check === "pitch" && f.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : h ? `Oikea sävel, mutta ${i.mode === "caged" ? "muodon" : i.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Gi(i.root, m, k)} eli ${k}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Ie(f.midi, i.flats)}, joka ei kuulu ${S}. Etsi ${a.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ie(f.midi, i.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Zp(i, a, u) {
  const c = Ie(u, i.flats, !0);
  return Ke(u) === Ke(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function hf(i, a = !1) {
  const u = i.split(":"), c = (m) => Number(u[m]), f = (...m) => m.every((k) => Number.isInteger(c(k))), h = (m, k) => fn[m] ? `${fn[m]}-kieli, ${Er(k)}` : null;
  switch (u[0]) {
    case "notes":
      return f(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return f(1) ? `Kuultu sävel ${Ie(c(1), a)}${u[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return u.length === 2 && f(1) ? `Kuule ja toista: ${Ie(c(1), a, !0)}` : f(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return f(1) && Wi[c(1)] ? `${Wi[c(1)]} ${u[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const m = u[2];
      if (!f(1, 3) || !wr[m]) return null;
      const k = wr[m].tones.find(([S]) => S === c(3))?.[1];
      return k ? `${zd(c(1), m)}: ${k}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const m = Ve.SCALES[u[2]];
      if (!f(1) || !m) return null;
      const k = `${ar(c(1))}-${m.name}`;
      if (u.length === 5 && f(3)) {
        const S = Ve.scaleNotes(m).find(([$]) => $ === c(3))?.[1];
        return S ? `${k}: ${S}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return f(3, 4) && h(c(3), c(4)) ? `${k}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!f(1) || !"CAGED".includes(u[2] ?? "?")) return null;
      const m = `${ar(c(1))}-duuri, ${u[2]}-muoto`;
      if (u.length === 4 && f(3)) {
        const k = wr.maj.tones.find(([S]) => S === c(3))?.[1];
        return k ? `${m}: ${k}. aste` : null;
      }
      return f(3, 4) && h(c(3), c(4)) ? `${m}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Od(i) {
  return Object.entries(i).flatMap(([a, u]) => {
    const [c, f, h, ...m] = a.split(":");
    return !m.length || !["solo", "guided"].includes(h) ? [] : [{ key: a, input: c, check: f, guided: h === "guided", item: m.join(":"), mode: m[0], stat: u }];
  });
}
const jo = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", qp = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function ev(i) {
  const a = i.solo === void 0 ? `${i.first}/${i.count} heti oikein` : i.solo ? `itsenäisesti ${i.soloFirst ?? 0}/${i.solo} heti oikein${i.count > i.solo ? ` · ${i.count - i.solo} vihjeen kanssa` : ""}` : `${i.count} vastausta vihjeen kanssa`;
  return `${new Date(i.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${qr(i.mode)}${i.hints ? ` · ${ka[i.hints].title}` : ""} · ${a} · keskimäärin ${jo(i.ms / Math.max(1, i.count))}${i.complete ? "" : " · keskeytetty"}`;
}
function tv({ store: i, s: a, locked: u, changed: c }) {
  const [f, h] = B.useState(""), m = B.useRef(null), { recent: k, sessions: S, stats: $ } = i.data, v = Nr(a), C = Vd(a), F = [...new Set(k.map((N) => N.mode))].map((N) => {
    const P = k.filter((G) => G.mode === N);
    return { mode: N, ...co(P), last: Math.max(...P.map((G) => G.at)) };
  }).sort((N, P) => P.last - N.last), D = Od($).filter((N) => !N.guided && N.mode === a.mode && N.input === v && N.check === C && N.stat.attempts >= 3).map((N) => ({ ...N, score: Eo(N.stat), text: hf(N.item, a.flats) })).filter((N) => N.text && N.score < 0.8).sort((N, P) => N.score - P.score).slice(0, 5), V = Od($).reduce((N, P) => N + P.stat.attempts, 0);
  function w() {
    const N = new Blob([JSON.stringify(i.data, null, 2)], { type: "application/json" }), P = URL.createObjectURL(N), G = document.createElement("a");
    G.href = P, G.download = "musiikin-kartta-harjoittelu.json", G.click(), setTimeout(() => URL.revokeObjectURL(P), 1e3);
  }
  async function R(N) {
    if (N)
      try {
        const P = await N.text();
        if (V && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        i.restore(P), h("Varmuuskopio palautettu."), c();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        m.current && (m.current.value = "");
      }
  }
  function U() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (i.clearProgress(), h("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    V === 0 ? /* @__PURE__ */ l.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        V,
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
        /* @__PURE__ */ l.jsx("tbody", { children: F.map((N) => /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsx("th", { scope: "row", children: qr(N.mode) }),
          /* @__PURE__ */ l.jsx("td", { children: N.count }),
          /* @__PURE__ */ l.jsx("td", { children: N.solo ? `${N.soloFirst}/${N.solo} · ${Math.round(N.soloFirst / N.solo * 100)} %` : "–" }),
          /* @__PURE__ */ l.jsx("td", { children: N.guided }),
          /* @__PURE__ */ l.jsx("td", { children: jo(N.ms / N.count) })
        ] }, N.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ l.jsx("h3", { children: "Seuraavaksi" }),
    D.length ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        qr(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ l.jsx("ul", { children: D.map((N) => /* @__PURE__ */ l.jsxs("li", { children: [
        N.text,
        " · viime aikoina ",
        Math.round(Qi(N.stat) * 100),
        " % heti oikein · ",
        jo(Yi(N.stat))
      ] }, N.key)) })
    ] }) : /* @__PURE__ */ l.jsx("p", { children: V ? `Harjoituksessa ${qr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        qp[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ l.jsx(Nm, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: $, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      S.length ? /* @__PURE__ */ l.jsx("ul", { children: S.slice(-10).reverse().map((N) => /* @__PURE__ */ l.jsx("li", { children: ev(N) }, N.id)) }) : /* @__PURE__ */ l.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ l.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u, onClick: () => m.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ l.jsx("input", { ref: m, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (N) => {
          R(N.target.files?.[0]);
        } }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u || !V, onClick: U, children: "Poista harjoitustulokset" })
      ] }),
      f && /* @__PURE__ */ l.jsx("p", { role: "status", children: f })
    ] }),
    i.warning && /* @__PURE__ */ l.jsx("p", { role: "status", className: "error", children: i.warning })
  ] });
}
function nv() {
  try {
    return new hd(localStorage);
  } catch {
    return new hd();
  }
}
const Id = (i) => ({ minRms: i.minRms, minClarity: i.clarity, stabilityMs: i.stability, centsTolerance: i.cents }), rv = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", iv = [0, 2, 4, 5, 7, 9, 11];
function sv(i) {
  return i.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : i.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : i.mode === "chord" ? i.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : i.mode === "scale" ? ["mp", "majp"].includes(i.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function av() {
  const [i] = B.useState(nv), [a, u] = B.useState(() => vm(location.search, i.data.settings)), [, c] = B.useReducer((L) => L + 1, 0), f = B.useRef(null), h = B.useRef(new ap()), m = B.useRef(new ef()), k = B.useRef(0), S = B.useRef(), $ = B.useRef(), v = B.useRef(null), C = B.useRef(0), F = B.useRef(null), D = B.useRef(a);
  D.current = a;
  const [V, w] = B.useState({ phase: "off", purpose: "none" }), R = B.useRef(V), U = (L) => {
    R.current = L, w(L);
  }, [N, P] = B.useState(null), [G, Z] = B.useState(null), [ee, T] = B.useState(null), [z, ne] = B.useState(0), [ie, Ee] = B.useState([]), [Le, Te] = B.useState(!1), [Me, K] = B.useState(!1), [oe, te] = B.useState(""), [A, Q] = B.useState("info"), [J, g] = B.useState(""), [I, ve] = B.useState(0), [we, _e] = B.useState([]), [Ne, j] = B.useState([]), [b, O] = B.useState(null), [q, de] = B.useState(!1), [ae, me] = B.useState(""), [pe, Pe] = B.useState(""), [je, $e] = B.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : sf(L.get("kappale")) ? "songs" : null;
  }), Ye = () => {
    Hm().then(Ee).catch(() => {
    });
  };
  function Be() {
    clearTimeout($.current), v.current = null, de(!1);
  }
  function Ge() {
    P(null), Z(null), T(null);
  }
  function Ue() {
    h.current.stop(), Be(), U({ phase: "off", purpose: "none" }), Ge();
  }
  async function yt(L) {
    if (h.current.active && R.current.phase === "on")
      return Be(), U({ ...R.current, purpose: L }), h.current.rearm(), !0;
    U({ phase: "requesting", purpose: L }), Ge();
    try {
      const le = await h.current.start(D.current.device, {
        ...Id(D.current),
        onFrame: (ye) => Tt.current.frame(ye),
        onStableNote: (ye) => Tt.current.stable(ye)
      }, () => Tt.current.lost());
      return le ? (U({ phase: "on", purpose: L, info: le }), Ye(), !0) : !1;
    } catch (le) {
      return U({ phase: "error", purpose: "none", error: sp(le) }), !1;
    }
  }
  function Je(L) {
    v.current?.push(L.rms);
    const le = performance.now();
    le - C.current < 66 || (C.current = le, P(L), ne(le), L.midi !== void 0 && L.frequency !== void 0 && Z({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: le }));
  }
  function ze(L) {
    R.current.purpose === "test" ? T(L) : R.current.purpose === "round" && Ae(L.midi, "mic", void 0, L.heldMs);
  }
  function tt() {
    const L = R.current.purpose === "round";
    Be(), Ge(), U({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const le = f.current;
    L && le && ["active", "feedback", "paused"].includes(le.phase) && (ct(), K(!1), le.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Tt = B.useRef({ frame: Je, stable: ze, lost: tt });
  Tt.current = { frame: Je, stable: ze, lost: tt };
  function Kt(L) {
    const le = pa(L), ye = le.device !== D.current.device;
    D.current = le, u(le), i.settings(le), g(""), h.current.active && (ye && R.current.purpose === "test" ? (Ue(), yt("test")) : h.current.setOptions(Id(le)));
  }
  function zt(L) {
    Pe(""), f.current = null, $e(L);
  }
  function nn() {
    me(""), yt("test");
  }
  function Gt() {
    R.current.phase !== "on" || R.current.purpose !== "test" || (Be(), v.current = [], de(!0), me("Mitataan taustakohinaa kolme sekuntia. Älä soita."), $.current = setTimeout(() => {
      const L = v.current ?? [];
      if (Be(), L.length < 10) {
        me("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: le, noise: ye, loud: Yt } = lp(L);
      Kt({ ...D.current, minRms: le }), me(`Taustakohina on ${Math.round(ii(ye))} dB ja äänikynnys nyt ${Math.round(ii(le))} dB. ${Yt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function ct() {
    k.current++, clearTimeout(S.current), m.current.stop();
  }
  function In(L, le) {
    if (!L.results.length) return;
    const ye = co(L.results);
    i.session({
      id: L.id,
      mode: L.settings.mode,
      count: ye.count,
      first: ye.first,
      ms: ye.ms,
      solo: ye.solo,
      soloFirst: ye.soloFirst,
      hints: L.settings.hints,
      at: Date.now(),
      complete: le
    });
  }
  async function ke(L) {
    if (!L.question?.sound.length || L.phase !== "active") return;
    ct();
    const le = k.current;
    L.pause(), h.current.pause(), K(!0), Q("info"), te("Kuuntele…"), c();
    try {
      await m.current.play(L.question.sound);
    } catch {
      le === k.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    le !== k.current || f.current !== L || (L.resume(), h.current.resume(), K(!1), te(""), c());
  }
  async function Wt(L) {
    _e([]), j([]), O(null), g(""), ve(L.hintLevel), h.current.rearm(), Q("info"), te(""), c(), L.question?.sound.length && await ke(L);
  }
  async function Se() {
    const L = D.current, le = oo(L);
    if (le) {
      g(le);
      return;
    }
    ct();
    const ye = k.current;
    if (g(""), me(""), Pe(""), ua(L)) {
      Te(!0);
      const lt = await yt("round");
      if (ye !== k.current) return;
      if (Te(!1), !lt) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else R.current.phase !== "off" && Ue();
    const Yt = new Fm(L, () => i.data.stats, (lt) => i.record(lt));
    try {
      Yt.start();
    } catch (lt) {
      R.current.purpose === "round" && Ue(), g(lt instanceof Error ? lt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    f.current = Yt, requestAnimationFrame(() => F.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Wt(Yt);
  }
  function Re() {
    ct(), Te(!1), Ue();
  }
  function Ae(L, le, ye, Yt = 0) {
    const lt = f.current, or = lt?.question;
    if (!lt || !or || lt.phase !== "active") return;
    const zn = lt.answer(L, le, ye, Yt);
    if (zn !== "ignored") {
      if (zn === "candidate")
        O(L), Q("bad"), te(Zp(lt.settings, or, L));
      else if (zn === "wrong")
        ye ? _e((ur) => [...ur, ye]) : j((ur) => [...ur, L]), Q("bad"), te(Xp(lt.settings, or, le, L, ye));
      else if (O(null), Q("good"), te(Jp(lt.settings, or, le, L, ye)), In(lt, !1), lt.settings.advance) {
        const ur = k.current;
        S.current = setTimeout(() => {
          ur === k.current && We();
        }, le === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function We() {
    const L = f.current;
    if (!(!L || L.phase !== "feedback")) {
      ct();
      try {
        L.next();
      } catch (le) {
        Ze(!1), g(le instanceof Error ? le.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (L.phase === "done") {
        Ze(!0);
        return;
      }
      await Wt(L);
    }
  }
  function Ze(L = !1) {
    ct(), K(!1), Te(!1), (R.current.purpose === "round" || R.current.phase === "requesting") && Ue();
    const le = f.current;
    le && (le.stop(), In(le, L)), O(null), ve(0), _e([]), j([]), g(""), Pe(L ? "complete" : "stopped"), Q("info"), te(""), c();
  }
  function Qt() {
    const L = f.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    ct(), K(!1), L.pause();
    const le = R.current.purpose === "round";
    le && Ue(), Q("info"), te(`Harjoitus on tauolla.${le ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function gt() {
    const L = f.current;
    if (!L || L.phase !== "paused" || Me) return;
    ct();
    const le = k.current;
    if (g(""), ua(L.settings)) {
      Te(!0);
      const ye = await yt("round");
      if (le !== k.current) return;
      if (Te(!1), !ye) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), Q("info"), te(""), c(), L.phase === "active" && (h.current.rearm(), L.question?.sound.length && await ke(L));
  }
  function bt(L) {
    const le = f.current;
    !le || le.phase !== "active" || (le.useHint(L), ve(L), c());
  }
  const hn = B.useRef({ hidden: () => {
  }, restored: () => {
  } });
  hn.current = {
    hidden: () => {
      const L = f.current;
      L && ["active", "feedback"].includes(L.phase) || Me ? Qt() : R.current.phase !== "off" && R.current.phase !== "error" && (ct(), Te(!1), Ue());
    },
    restored: () => {
      Te(!1), K(!1), U({ phase: "off", purpose: "none" }), Ge(), c();
    }
  }, B.useEffect(() => {
    Ye();
    const L = () => Ye();
    navigator.mediaDevices?.addEventListener?.("devicechange", L);
    const le = () => {
      k.current++, clearTimeout(S.current), clearTimeout($.current), h.current.stop(), m.current.stop(), ip(), f.current?.pause();
    }, ye = () => {
      document.hidden && hn.current.hidden();
    }, Yt = (lt) => {
      lt.persisted && hn.current.restored();
    };
    return document.addEventListener("visibilitychange", ye), window.addEventListener("pagehide", le), window.addEventListener("pageshow", Yt), () => {
      le(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", ye), window.removeEventListener("pagehide", le), window.removeEventListener("pageshow", Yt);
    };
  }, []);
  const mn = B.useRef(null), Dn = `${f.current?.id}:${f.current?.index}:${f.current?.phase}:${Me}`;
  B.useEffect(() => {
    const L = f.current, le = F.current, ye = document.activeElement;
    !L || !le || !(ye === document.body || le.contains(ye)) || (L.phase === "feedback" ? mn.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !Me && (ye === document.body || ye === mn.current) && le.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [Dn]);
  const Oe = f.current, nt = !!Oe && ["active", "paused", "feedback"].includes(Oe.phase), Qe = nt ? Oe.settings : a, mt = nt ? Oe.question : void 0, Mt = !!mt && !!Oe?.answered, pn = nt && Oe.phase === "paused" && !Me && !Mt, vn = nt && Oe.phase === "active" && !Me, li = nt ? null : oo(a), wn = nt || Le, lr = Cr(Qe), _r = _m(Qe), En = mt && !Mt ? I : 0, oi = mt ? $m(Qe, mt, Mt ? 2 : En) : { marks: [], text: "" }, qi = [...new Map([...oi.marks, ...Mt ? [] : we.map((L) => ({ ...L, label: Ie(L.midi, Qe.flats), kind: "wrong" }))].map((L) => [it(L), L])).values()], ga = nt && ua(Qe), Nn = !!mt && !pn && (mt.choices === "position" || qi.length > 0), xt = Oe ? co(Oe.results) : null, es = !Oe || Qe.hints !== "fade" ? "" : Oe.index <= 3 ? " · vastaus näkyy" : Oe.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", ts = Oe && !nt ? Oe.results.filter((L) => L.errors > 0 || L.hint) : [], [ns, rs] = sv(Qe), Cn = /* @__PURE__ */ l.jsxs("div", { className: "intro", children: [
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
    /* @__PURE__ */ l.jsx(Im, { onSelect: zt })
  ] }) : !nt && je === "scales" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(up, { onBack: () => $e(null) })
  ] }) : !nt && je === "ear" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(dp, { onBack: () => $e(null) })
  ] }) : !nt && je === "chords" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(mp, { onBack: () => $e(null) })
  ] }) : !nt && je === "songs" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(Up, { onBack: () => $e(null) })
  ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsxs("a", { href: ns, children: [
      "Lue tämän harjoituksen teoria: ",
      rs,
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
    ] }) : je === "legacy" ? /* @__PURE__ */ l.jsx(kd, { s: a, change: Kt, locked: wn, problem: li }) : /* @__PURE__ */ l.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ l.jsx(kd, { s: a, change: Kt, locked: wn, problem: li })
    ] }),
    !nt && (je === "legacy" || ua(a)) && /* @__PURE__ */ l.jsx(
      Gp,
      {
        mic: V,
        frame: N,
        heard: G,
        accepted: ee,
        now: z,
        s: a,
        change: Kt,
        devices: ie,
        locked: Le,
        calibrating: q,
        calibration: ae,
        onTest: nn,
        onStop: Ue,
        onCalibrate: Gt
      }
    ),
    /* @__PURE__ */ l.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: F, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h2", { id: "session-title", children: qr(Qe.mode) }),
        /* @__PURE__ */ l.jsx("span", { "data-testid": "round-status", children: nt ? `Kysymys ${Oe.index}${Oe.total ? " / " + Oe.total : " · vapaa harjoittelu"} · ${ka[Qe.hints].title}${es}${Oe.phase === "paused" && !Me ? " · tauolla" : ""}` : pe === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !nt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        Oe && Oe.results.length > 0 && xt ? /* @__PURE__ */ l.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ l.jsx("h3", { children: pe === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
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
              /* @__PURE__ */ l.jsx("dd", { children: rv(xt.ms / xt.count) })
            ] })
          ] }),
          xt.solo === 0 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          ts.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ l.jsx("ul", { children: [...new Set(ts.map((L) => hf(L.item, a.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ l.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ l.jsx("p", { className: "question idle", children: vd(a) }),
        /* @__PURE__ */ l.jsx("div", { className: "action-row", children: Le ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !!li, onClick: () => {
          Se();
        }, children: Oe?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Oe && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      nt && mt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: pn ? "Harjoitus on tauolla." : mt.prompt }),
        /* @__PURE__ */ l.jsx("p", { className: "how", "data-testid": "instruction", children: pn ? "Kysymys palaa näkyviin, kun jatkat." : Me ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Yp(Qe, mt) }),
        Oe.hintLevel > 0 && !Mt && /* @__PURE__ */ l.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Qe.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        ga && /* @__PURE__ */ l.jsx(Kp, { mic: V, frame: N, heard: G, s: Qe, now: z }),
        mt.choices === "note" && !pn && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Qe.accidentals ? Array.from({ length: 12 }, (L, le) => le) : iv).map((L) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ne.includes(L) ? "wrong" : Mt && L === mt.midi % 12 ? "right" : "", disabled: !vn || Ne.includes(L), onClick: () => Ae(L, "note"), children: Ie(L, Qe.flats) }, L)) }),
        mt.choices === "degree" && !pn && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Qe.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[Qe.scale]) : wr[Qe.chord].tones).map(([L, le]) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ne.includes(L) ? "wrong" : Mt && L === mt.interval ? "right" : "", disabled: !vn || Ne.includes(L), onClick: () => Ae(L, "degree"), children: le }, L)) }),
        Nn && /* @__PURE__ */ l.jsx(
          Ji,
          {
            area: _r,
            marks: qi,
            disabled: !vn || mt.choices !== "position" || Qe.input === "mic",
            onAnswer: (L) => Ae(L.midi, "board", L),
            caption: lr.fixed === "shape" ? `${Qe.shape}-muodon alue` : lr.fixed === "box" ? `Boksin ${Qe.box} alue` : "Otelauta"
          }
        ),
        !Mt && !pn && En > 0 && oi.text && /* @__PURE__ */ l.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: oi.text }),
        /* @__PURE__ */ l.jsx("p", { className: `feedback ${A}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: oe }),
        b !== null && Oe.phase === "active" && /* @__PURE__ */ l.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
            Oe.confirmWrong(), O(null), te("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ l.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        J && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: J }),
        /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
          Oe.phase === "feedback" && /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", ref: mn, onClick: () => {
            We();
          }, children: Oe.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Oe.phase === "active" && !Mt && !Me && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            En === 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => bt(Math.max(1, Oe.hintLevel)), children: Oe.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            En === 1 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => bt(2), children: "Näytä vastaus" }),
            En > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => ve(0), children: "Piilota vihje" })
          ] }),
          mt.sound.length > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: !vn, onClick: () => {
            ke(Oe);
          }, children: "Kuuntele uudelleen" }),
          Oe.phase === "paused" && !Me ? /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: Le, onClick: () => {
            gt();
          }, children: Le ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ l.jsx("button", { type: "button", onClick: Qt, children: "Tauko" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => Ze(), children: "Lopeta harjoitus" })
        ] }),
        Oe.phase === "feedback" && Qe.advance && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "tally", children: xt?.count ? `Vastattu ${xt.count} · itsenäisesti heti oikein ${xt.soloFirst}/${xt.solo}${xt.guided ? ` · vihjeen kanssa ${xt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !nt && J && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: J })
    ] }),
    !nt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ l.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ve.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ l.jsx("a", { href: km(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ l.jsx(tv, { store: i, s: a, locked: wn, changed: () => {
        const L = pa(i.data.settings);
        D.current = L, u(L), c();
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
om.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ l.jsx(av, {}));
//# sourceMappingURL=app.js.map
