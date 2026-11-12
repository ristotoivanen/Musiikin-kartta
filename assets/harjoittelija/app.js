function em(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ql = { exports: {} }, Bi = {}, eo = { exports: {} }, Oe = {};
var Zc;
function tm() {
  if (Zc) return Oe;
  Zc = 1;
  var i = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), m = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), N = Symbol.iterator;
  function O(g) {
    return g === null || typeof g != "object" ? null : (g = N && g[N] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, w = {};
  function C(g, z, ve) {
    this.props = g, this.context = z, this.refs = w, this.updater = ve || F;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(g, z) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, z, "setState");
  }, C.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function D() {
  }
  D.prototype = C.prototype;
  function E(g, z, ve) {
    this.props = g, this.context = z, this.refs = w, this.updater = ve || F;
  }
  var P = E.prototype = new D();
  P.constructor = E, b(P, C.prototype), P.isPureReactComponent = !0;
  var H = Array.isArray, Z = Object.prototype.hasOwnProperty, ee = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(g, z, ve) {
    var we, _e = {}, Ne = null, S = null;
    if (z != null) for (we in z.ref !== void 0 && (S = z.ref), z.key !== void 0 && (Ne = "" + z.key), z) Z.call(z, we) && !M.hasOwnProperty(we) && (_e[we] = z[we]);
    var B = arguments.length - 2;
    if (B === 1) _e.children = ve;
    else if (1 < B) {
      for (var I = Array(B), q = 0; q < B; q++) I[q] = arguments[q + 2];
      _e.children = I;
    }
    if (g && g.defaultProps) for (we in B = g.defaultProps, B) _e[we] === void 0 && (_e[we] = B[we]);
    return { $$typeof: i, type: g, key: Ne, ref: S, props: _e, _owner: ee.current };
  }
  function ne(g, z) {
    return { $$typeof: i, type: g.type, key: z, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function ie(g) {
    return typeof g == "object" && g !== null && g.$$typeof === i;
  }
  function Ee(g) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(ve) {
      return z[ve];
    });
  }
  var $e = /\/+/g;
  function Te(g, z) {
    return typeof g == "object" && g !== null && g.key != null ? Ee("" + g.key) : z.toString(36);
  }
  function Me(g, z, ve, we, _e) {
    var Ne = typeof g;
    (Ne === "undefined" || Ne === "boolean") && (g = null);
    var S = !1;
    if (g === null) S = !0;
    else switch (Ne) {
      case "string":
      case "number":
        S = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case i:
          case a:
            S = !0;
        }
    }
    if (S) return S = g, _e = _e(S), g = we === "" ? "." + Te(S, 0) : we, H(_e) ? (ve = "", g != null && (ve = g.replace($e, "$&/") + "/"), Me(_e, z, ve, "", function(q) {
      return q;
    })) : _e != null && (ie(_e) && (_e = ne(_e, ve + (!_e.key || S && S.key === _e.key ? "" : ("" + _e.key).replace($e, "$&/") + "/") + g)), z.push(_e)), 1;
    if (S = 0, we = we === "" ? "." : we + ":", H(g)) for (var B = 0; B < g.length; B++) {
      Ne = g[B];
      var I = we + Te(Ne, B);
      S += Me(Ne, z, ve, I, _e);
    }
    else if (I = O(g), typeof I == "function") for (g = I.call(g), B = 0; !(Ne = g.next()).done; ) Ne = Ne.value, I = we + Te(Ne, B++), S += Me(Ne, z, ve, I, _e);
    else if (Ne === "object") throw z = String(g), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return S;
  }
  function G(g, z, ve) {
    if (g == null) return g;
    var we = [], _e = 0;
    return Me(g, we, "", "", function(Ne) {
      return z.call(ve, Ne, _e++);
    }), we;
  }
  function oe(g) {
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
  var te = { current: null }, R = { transition: null }, Q = { ReactCurrentDispatcher: te, ReactCurrentBatchConfig: R, ReactCurrentOwner: ee };
  function J() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Oe.Children = { map: G, forEach: function(g, z, ve) {
    G(g, function() {
      z.apply(this, arguments);
    }, ve);
  }, count: function(g) {
    var z = 0;
    return G(g, function() {
      z++;
    }), z;
  }, toArray: function(g) {
    return G(g, function(z) {
      return z;
    }) || [];
  }, only: function(g) {
    if (!ie(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, Oe.Component = C, Oe.Fragment = u, Oe.Profiler = f, Oe.PureComponent = E, Oe.StrictMode = c, Oe.Suspense = j, Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, Oe.act = J, Oe.cloneElement = function(g, z, ve) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var we = b({}, g.props), _e = g.key, Ne = g.ref, S = g._owner;
    if (z != null) {
      if (z.ref !== void 0 && (Ne = z.ref, S = ee.current), z.key !== void 0 && (_e = "" + z.key), g.type && g.type.defaultProps) var B = g.type.defaultProps;
      for (I in z) Z.call(z, I) && !M.hasOwnProperty(I) && (we[I] = z[I] === void 0 && B !== void 0 ? B[I] : z[I]);
    }
    var I = arguments.length - 2;
    if (I === 1) we.children = ve;
    else if (1 < I) {
      B = Array(I);
      for (var q = 0; q < I; q++) B[q] = arguments[q + 2];
      we.children = B;
    }
    return { $$typeof: i, type: g.type, key: _e, ref: Ne, props: we, _owner: S };
  }, Oe.createContext = function(g) {
    return g = { $$typeof: m, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: h, _context: g }, g.Consumer = g;
  }, Oe.createElement = V, Oe.createFactory = function(g) {
    var z = V.bind(null, g);
    return z.type = g, z;
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(g) {
    return { $$typeof: v, render: g };
  }, Oe.isValidElement = ie, Oe.lazy = function(g) {
    return { $$typeof: k, _payload: { _status: -1, _result: g }, _init: oe };
  }, Oe.memo = function(g, z) {
    return { $$typeof: L, type: g, compare: z === void 0 ? null : z };
  }, Oe.startTransition = function(g) {
    var z = R.transition;
    R.transition = {};
    try {
      g();
    } finally {
      R.transition = z;
    }
  }, Oe.unstable_act = J, Oe.useCallback = function(g, z) {
    return te.current.useCallback(g, z);
  }, Oe.useContext = function(g) {
    return te.current.useContext(g);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(g) {
    return te.current.useDeferredValue(g);
  }, Oe.useEffect = function(g, z) {
    return te.current.useEffect(g, z);
  }, Oe.useId = function() {
    return te.current.useId();
  }, Oe.useImperativeHandle = function(g, z, ve) {
    return te.current.useImperativeHandle(g, z, ve);
  }, Oe.useInsertionEffect = function(g, z) {
    return te.current.useInsertionEffect(g, z);
  }, Oe.useLayoutEffect = function(g, z) {
    return te.current.useLayoutEffect(g, z);
  }, Oe.useMemo = function(g, z) {
    return te.current.useMemo(g, z);
  }, Oe.useReducer = function(g, z, ve) {
    return te.current.useReducer(g, z, ve);
  }, Oe.useRef = function(g) {
    return te.current.useRef(g);
  }, Oe.useState = function(g) {
    return te.current.useState(g);
  }, Oe.useSyncExternalStore = function(g, z, ve) {
    return te.current.useSyncExternalStore(g, z, ve);
  }, Oe.useTransition = function() {
    return te.current.useTransition();
  }, Oe.version = "18.3.1", Oe;
}
var qc;
function So() {
  return qc || (qc = 1, eo.exports = tm()), eo.exports;
}
var ed;
function nm() {
  if (ed) return Bi;
  ed = 1;
  var i = So(), a = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(v, j, L) {
    var k, N = {}, O = null, F = null;
    L !== void 0 && (O = "" + L), j.key !== void 0 && (O = "" + j.key), j.ref !== void 0 && (F = j.ref);
    for (k in j) c.call(j, k) && !h.hasOwnProperty(k) && (N[k] = j[k]);
    if (v && v.defaultProps) for (k in j = v.defaultProps, j) N[k] === void 0 && (N[k] = j[k]);
    return { $$typeof: a, type: v, key: O, ref: F, props: N, _owner: f.current };
  }
  return Bi.Fragment = u, Bi.jsx = m, Bi.jsxs = m, Bi;
}
var td;
function rm() {
  return td || (td = 1, ql.exports = nm()), ql.exports;
}
var l = rm(), U = So(), la = {}, to = { exports: {} }, Dt = {}, no = { exports: {} }, ro = {};
var nd;
function im() {
  return nd || (nd = 1, (function(i) {
    function a(R, Q) {
      var J = R.length;
      R.push(Q);
      e: for (; 0 < J; ) {
        var g = J - 1 >>> 1, z = R[g];
        if (0 < f(z, Q)) R[g] = Q, R[J] = z, J = g;
        else break e;
      }
    }
    function u(R) {
      return R.length === 0 ? null : R[0];
    }
    function c(R) {
      if (R.length === 0) return null;
      var Q = R[0], J = R.pop();
      if (J !== Q) {
        R[0] = J;
        e: for (var g = 0, z = R.length, ve = z >>> 1; g < ve; ) {
          var we = 2 * (g + 1) - 1, _e = R[we], Ne = we + 1, S = R[Ne];
          if (0 > f(_e, J)) Ne < z && 0 > f(S, _e) ? (R[g] = S, R[Ne] = J, g = Ne) : (R[g] = _e, R[we] = J, g = we);
          else if (Ne < z && 0 > f(S, J)) R[g] = S, R[Ne] = J, g = Ne;
          else break e;
        }
      }
      return Q;
    }
    function f(R, Q) {
      var J = R.sortIndex - Q.sortIndex;
      return J !== 0 ? J : R.id - Q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var m = Date, v = m.now();
      i.unstable_now = function() {
        return m.now() - v;
      };
    }
    var j = [], L = [], k = 1, N = null, O = 3, F = !1, b = !1, w = !1, C = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, E = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function P(R) {
      for (var Q = u(L); Q !== null; ) {
        if (Q.callback === null) c(L);
        else if (Q.startTime <= R) c(L), Q.sortIndex = Q.expirationTime, a(j, Q);
        else break;
        Q = u(L);
      }
    }
    function H(R) {
      if (w = !1, P(R), !b) if (u(j) !== null) b = !0, oe(Z);
      else {
        var Q = u(L);
        Q !== null && te(H, Q.startTime - R);
      }
    }
    function Z(R, Q) {
      b = !1, w && (w = !1, D(V), V = -1), F = !0;
      var J = O;
      try {
        for (P(Q), N = u(j); N !== null && (!(N.expirationTime > Q) || R && !Ee()); ) {
          var g = N.callback;
          if (typeof g == "function") {
            N.callback = null, O = N.priorityLevel;
            var z = g(N.expirationTime <= Q);
            Q = i.unstable_now(), typeof z == "function" ? N.callback = z : N === u(j) && c(j), P(Q);
          } else c(j);
          N = u(j);
        }
        if (N !== null) var ve = !0;
        else {
          var we = u(L);
          we !== null && te(H, we.startTime - Q), ve = !1;
        }
        return ve;
      } finally {
        N = null, O = J, F = !1;
      }
    }
    var ee = !1, M = null, V = -1, ne = 5, ie = -1;
    function Ee() {
      return !(i.unstable_now() - ie < ne);
    }
    function $e() {
      if (M !== null) {
        var R = i.unstable_now();
        ie = R;
        var Q = !0;
        try {
          Q = M(!0, R);
        } finally {
          Q ? Te() : (ee = !1, M = null);
        }
      } else ee = !1;
    }
    var Te;
    if (typeof E == "function") Te = function() {
      E($e);
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), G = Me.port2;
      Me.port1.onmessage = $e, Te = function() {
        G.postMessage(null);
      };
    } else Te = function() {
      C($e, 0);
    };
    function oe(R) {
      M = R, ee || (ee = !0, Te());
    }
    function te(R, Q) {
      V = C(function() {
        R(i.unstable_now());
      }, Q);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, i.unstable_continueExecution = function() {
      b || F || (b = !0, oe(Z));
    }, i.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < R ? Math.floor(1e3 / R) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return O;
    }, i.unstable_getFirstCallbackNode = function() {
      return u(j);
    }, i.unstable_next = function(R) {
      switch (O) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = O;
      }
      var J = O;
      O = Q;
      try {
        return R();
      } finally {
        O = J;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(R, Q) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var J = O;
      O = R;
      try {
        return Q();
      } finally {
        O = J;
      }
    }, i.unstable_scheduleCallback = function(R, Q, J) {
      var g = i.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? g + J : g) : J = g, R) {
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
      return z = J + z, R = { id: k++, callback: Q, priorityLevel: R, startTime: J, expirationTime: z, sortIndex: -1 }, J > g ? (R.sortIndex = J, a(L, R), u(j) === null && R === u(L) && (w ? (D(V), V = -1) : w = !0, te(H, J - g))) : (R.sortIndex = z, a(j, R), b || F || (b = !0, oe(Z))), R;
    }, i.unstable_shouldYield = Ee, i.unstable_wrapCallback = function(R) {
      var Q = O;
      return function() {
        var J = O;
        O = Q;
        try {
          return R.apply(this, arguments);
        } finally {
          O = J;
        }
      };
    };
  })(ro)), ro;
}
var rd;
function sm() {
  return rd || (rd = 1, no.exports = im()), no.exports;
}
var id;
function am() {
  if (id) return Dt;
  id = 1;
  var i = So(), a = sm();
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
  var v = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, N = {};
  function O(e) {
    return j.call(N, e) ? !0 : j.call(k, e) ? !1 : L.test(e) ? N[e] = !0 : (k[e] = !0, !1);
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
  function b(e, t, n, r) {
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
  function w(e, t, n, r, s, o, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = d;
  }
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    C[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    C[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    C[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    C[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    C[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    C[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    C[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    C[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    C[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var D = /[\-:]([a-z])/g;
  function E(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      D,
      E
    );
    C[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(D, E);
    C[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(D, E);
    C[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    C[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), C.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    C[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function P(e, t, n, r) {
    var s = C.hasOwnProperty(t) ? C[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, s, r) && (n = null), r || s === null ? O(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var H = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Z = /* @__PURE__ */ Symbol.for("react.element"), ee = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), ne = /* @__PURE__ */ Symbol.for("react.profiler"), ie = /* @__PURE__ */ Symbol.for("react.provider"), Ee = /* @__PURE__ */ Symbol.for("react.context"), $e = /* @__PURE__ */ Symbol.for("react.forward_ref"), Te = /* @__PURE__ */ Symbol.for("react.suspense"), Me = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), te = /* @__PURE__ */ Symbol.for("react.offscreen"), R = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object" ? null : (e = R && e[R] || e["@@iterator"], typeof e == "function" ? e : null);
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
        } catch (A) {
          var r = A;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (A) {
          r = A;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (A) {
          r = A;
        }
        e();
      }
    } catch (A) {
      if (A && r && typeof A.stack == "string") {
        for (var s = A.stack.split(`
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
  function Ne(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case ee:
        return "Portal";
      case ne:
        return "Profiler";
      case V:
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
      case $e:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case G:
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
  function S(e) {
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
        return t === V ? "StrictMode" : "Mode";
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
  function I(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function q(e) {
    var t = I(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    return e && (r = I(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
    n = B(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function je(e, t) {
    t = t.checked, t != null && P(e, "checked", t, !1);
  }
  function Le(e, t) {
    je(e, t);
    var n = B(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Be(e, t.type, n) : t.hasOwnProperty("defaultValue") && Be(e, t.type, B(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
    e._wrapperState = { initialValue: B(n) };
  }
  function be(e, t) {
    var n = B(t.value), r = B(t.defaultValue);
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
      t && (t = Ss(t), Qt(e.stateNode, e.type, t));
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
  function Fe(e, t) {
    return e(t);
  }
  function nt() {
  }
  var Qe = !1;
  function mt(e, t, n) {
    if (Qe) return e(t, n);
    Qe = !0;
    try {
      return Fe(e, t, n);
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
  var pn = !1;
  if (v) try {
    var vn = {};
    Object.defineProperty(vn, "passive", { get: function() {
      pn = !0;
    } }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
  } catch {
    pn = !1;
  }
  function li(e, t, n, r, s, o, d, p, y) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, A);
    } catch (W) {
      this.onError(W);
    }
  }
  var wn = !1, lr = null, _r = !1, En = null, oi = { onError: function(e) {
    wn = !0, lr = e;
  } };
  function Zi(e, t, n, r, s, o, d, p, y) {
    wn = !1, lr = null, li.apply(oi, arguments);
  }
  function ga(e, t, n, r, s, o, d, p, y) {
    if (Zi.apply(this, arguments), wn) {
      if (wn) {
        var A = lr;
        wn = !1, lr = null;
      } else throw Error(u(198));
      _r || (_r = !0, En = A);
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
          if (o === n) return qi(s), e;
          if (o === r) return qi(s), t;
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
  var Cn = a.unstable_scheduleCallback, _n = a.unstable_cancelCallback, $ = a.unstable_shouldYield, le = a.unstable_requestPaint, ye = a.unstable_now, Yt = a.unstable_getCurrentPriorityLevel, lt = a.unstable_ImmediatePriority, or = a.unstable_UserBlockingPriority, zn = a.unstable_NormalPriority, ur = a.unstable_LowPriority, To = a.unstable_IdlePriority, rs = null, kn = null;
  function pf(e) {
    if (kn && typeof kn.onCommitFiberRoot == "function") try {
      kn.onCommitFiberRoot(rs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var rn = Math.clz32 ? Math.clz32 : yf, vf = Math.log, kf = Math.LN2;
  function yf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (vf(e) / kf | 0) | 0;
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
  function gf(e, t) {
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
  function xf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var d = 31 - rn(o), p = 1 << d, y = s[d];
      y === -1 ? ((p & n) === 0 || (p & r) !== 0) && (s[d] = gf(p, t)) : y <= t && (e.expiredLanes |= p), o &= ~p;
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
  function jf(e, t) {
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
  var Ao, wa, Ro, $o, Lo, Ea = !1, ls = [], bn = null, Vn = null, Bn = null, di = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), Un = [], Sf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Oo(e, t) {
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
  function wf(e, t, n, r, s) {
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
  function Fo(e) {
    var t = cr(e.target);
    if (t !== null) {
      var n = Nn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = xt(n), t !== null) {
            e.blockedOn = t, Lo(e.priority, function() {
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
  function Ef() {
    Ea = !1, bn !== null && os(bn) && (bn = null), Vn !== null && os(Vn) && (Vn = null), Bn !== null && os(Bn) && (Bn = null), di.forEach(Io), fi.forEach(Io);
  }
  function mi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ea || (Ea = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Ef)));
  }
  function pi(e) {
    function t(s) {
      return mi(s, e);
    }
    if (0 < ls.length) {
      mi(ls[0], e);
      for (var n = 1; n < ls.length; n++) {
        var r = ls[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (bn !== null && mi(bn, e), Vn !== null && mi(Vn, e), Bn !== null && mi(Bn, e), di.forEach(t), fi.forEach(t), n = 0; n < Un.length; n++) r = Un[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) Fo(n), n.blockedOn === null && Un.shift();
  }
  var Tr = H.ReactCurrentBatchConfig, us = !0;
  function Nf(e, t, n, r) {
    var s = He, o = Tr.transition;
    Tr.transition = null;
    try {
      He = 1, Na(e, t, n, r);
    } finally {
      He = s, Tr.transition = o;
    }
  }
  function Cf(e, t, n, r) {
    var s = He, o = Tr.transition;
    Tr.transition = null;
    try {
      He = 4, Na(e, t, n, r);
    } finally {
      He = s, Tr.transition = o;
    }
  }
  function Na(e, t, n, r) {
    if (us) {
      var s = Ca(e, t, n, r);
      if (s === null) Ua(e, t, r, cs, n), Oo(e, r);
      else if (wf(s, e, t, n, r)) r.stopPropagation();
      else if (Oo(e, r), t & 4 && -1 < Sf.indexOf(e)) {
        for (; s !== null; ) {
          var o = _i(s);
          if (o !== null && Ao(o), o = Ca(e, t, n, r), o === null && Ua(e, t, r, cs, n), o === s) break;
          s = o;
        }
        s !== null && r.stopPropagation();
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
    var e, t = _a, n = t.length, r, s = "value" in Hn ? Hn.value : Hn.textContent, o = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === s[o - r]; r++) ;
    return ds = s.slice(e, 1 < r ? 1 - r : void 0);
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
    function t(n, r, s, o, d) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = o, this.target = d, this.currentTarget = null;
      for (var p in e) e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(o) : o[p]);
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
  }, defaultPrevented: 0, isTrusted: 0 }, Ta = Vt(Mr), vi = J({}, Mr, { view: 0, detail: 0 }), _f = Vt(vi), Ma, Pa, ki, ms = J({}, vi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ra, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ki && (ki && e.type === "mousemove" ? (Ma = e.screenX - ki.screenX, Pa = e.screenY - ki.screenY) : Pa = Ma = 0, ki = e), Ma);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Pa;
  } }), Vo = Vt(ms), Tf = J({}, ms, { dataTransfer: 0 }), Mf = Vt(Tf), Pf = J({}, vi, { relatedTarget: 0 }), Aa = Vt(Pf), Af = J({}, Mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Rf = Vt(Af), $f = J({}, Mr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Lf = Vt($f), Of = J({}, Mr, { data: 0 }), Bo = Vt(Of), Ff = {
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
  }, If = {
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
  }, Df = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Df[e]) ? !!t[e] : !1;
  }
  function Ra() {
    return zf;
  }
  var bf = J({}, vi, { key: function(e) {
    if (e.key) {
      var t = Ff[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = fs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? If[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ra, charCode: function(e) {
    return e.type === "keypress" ? fs(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? fs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Vf = Vt(bf), Bf = J({}, ms, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Uo = Vt(Bf), Uf = J({}, vi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ra }), Hf = Vt(Uf), Kf = J({}, Mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gf = Vt(Kf), Wf = J({}, ms, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qf = Vt(Wf), Yf = [9, 13, 27, 32], $a = v && "CompositionEvent" in window, yi = null;
  v && "documentMode" in document && (yi = document.documentMode);
  var Jf = v && "TextEvent" in window && !yi, Ho = v && (!$a || yi && 8 < yi && 11 >= yi), Ko = " ", Go = !1;
  function Wo(e, t) {
    switch (e) {
      case "keyup":
        return Yf.indexOf(t.keyCode) !== -1;
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
  function Xf(e, t) {
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
  function Zf(e, t) {
    if (Pr) return e === "compositionend" || !$a && Wo(e, t) ? (e = zo(), ds = _a = Hn = null, Pr = !1, e) : null;
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
  var qf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Yo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!qf[e.type] : t === "textarea";
  }
  function Jo(e, t, n, r) {
    mn(r), t = gs(t, "onChange"), 0 < t.length && (n = new Ta("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var gi = null, xi = null;
  function eh(e) {
    mu(e, 0);
  }
  function ps(e) {
    var t = Or(e);
    if (ae(t)) return e;
  }
  function th(e, t) {
    if (e === "change") return t;
  }
  var Xo = !1;
  if (v) {
    var La;
    if (v) {
      var Oa = "oninput" in document;
      if (!Oa) {
        var Zo = document.createElement("div");
        Zo.setAttribute("oninput", "return;"), Oa = typeof Zo.oninput == "function";
      }
      La = Oa;
    } else La = !1;
    Xo = La && (!document.documentMode || 9 < document.documentMode);
  }
  function qo() {
    gi && (gi.detachEvent("onpropertychange", eu), xi = gi = null);
  }
  function eu(e) {
    if (e.propertyName === "value" && ps(xi)) {
      var t = [];
      Jo(t, xi, e, Ze(e)), mt(eh, t);
    }
  }
  function nh(e, t, n) {
    e === "focusin" ? (qo(), gi = t, xi = n, gi.attachEvent("onpropertychange", eu)) : e === "focusout" && qo();
  }
  function rh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ps(xi);
  }
  function ih(e, t) {
    if (e === "click") return ps(t);
  }
  function sh(e, t) {
    if (e === "input" || e === "change") return ps(t);
  }
  function ah(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var sn = typeof Object.is == "function" ? Object.is : ah;
  function ji(e, t) {
    if (sn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!j.call(t, s) || !sn(e[s], t[s])) return !1;
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
  function Fa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function lh(e) {
    var t = iu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ru(n.ownerDocument.documentElement, n)) {
      if (r !== null && Fa(n)) {
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
  var oh = v && "documentMode" in document && 11 >= document.documentMode, Ar = null, Ia = null, Si = null, Da = !1;
  function su(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Da || Ar == null || Ar !== me(r) || (r = Ar, "selectionStart" in r && Fa(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Si && ji(Si, r) || (Si = r, r = gs(Ia, "onSelect"), 0 < r.length && (t = new Ta("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ar)));
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
    var Va = fu[ba], uh = Va.toLowerCase(), ch = Va[0].toUpperCase() + Va.slice(1);
    Kn(uh, "on" + ch);
  }
  Kn(lu, "onAnimationEnd"), Kn(ou, "onAnimationIteration"), Kn(uu, "onAnimationStart"), Kn("dblclick", "onDoubleClick"), Kn("focusin", "onFocus"), Kn("focusout", "onBlur"), Kn(cu, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dh = new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));
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
          var p = r[d], y = p.instance, A = p.currentTarget;
          if (p = p.listener, y !== o && s.isPropagationStopped()) break e;
          hu(s, p, A), o = y;
        }
        else for (d = 0; d < r.length; d++) {
          if (p = r[d], y = p.instance, A = p.currentTarget, p = p.listener, y !== o && s.isPropagationStopped()) break e;
          hu(s, p, A), o = y;
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
  var ys = "_reactListening" + Math.random().toString(36).slice(2);
  function Ei(e) {
    if (!e[ys]) {
      e[ys] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (dh.has(n) || Ba(n, !1, e), Ba(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ys] || (t[ys] = !0, Ba("selectionchange", !1, t));
    }
  }
  function pu(e, t, n, r) {
    switch (Do(t)) {
      case 1:
        var s = Nf;
        break;
      case 4:
        s = Cf;
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
      var A = o, W = Ze(n), Y = [];
      e: {
        var K = du.get(e);
        if (K !== void 0) {
          var re = Ta, ue = e;
          switch (e) {
            case "keypress":
              if (fs(n) === 0) break e;
            case "keydown":
            case "keyup":
              re = Vf;
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
              re = Mf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              re = Hf;
              break;
            case lu:
            case ou:
            case uu:
              re = Rf;
              break;
            case cu:
              re = Gf;
              break;
            case "scroll":
              re = _f;
              break;
            case "wheel":
              re = Qf;
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
          var fe = (t & 4) !== 0, ut = !fe && e === "scroll", _ = fe ? K !== null ? K + "Capture" : null : K;
          fe = [];
          for (var x = A, T; x !== null; ) {
            T = x;
            var X = T.stateNode;
            if (T.tag === 5 && X !== null && (T = X, _ !== null && (X = Mt(x, _), X != null && fe.push(Ni(x, X, T)))), ut) break;
            x = x.return;
          }
          0 < fe.length && (K = new re(K, ue, null, n, W), Y.push({ event: K, listeners: fe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (K = e === "mouseover" || e === "pointerover", re = e === "mouseout" || e === "pointerout", K && n !== We && (ue = n.relatedTarget || n.fromElement) && (cr(ue) || ue[Tn])) break e;
          if ((re || K) && (K = W.window === W ? W : (K = W.ownerDocument) ? K.defaultView || K.parentWindow : window, re ? (ue = n.relatedTarget || n.toElement, re = A, ue = ue ? cr(ue) : null, ue !== null && (ut = Nn(ue), ue !== ut || ue.tag !== 5 && ue.tag !== 6) && (ue = null)) : (re = null, ue = A), re !== ue)) {
            if (fe = Vo, X = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (fe = Uo, X = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), ut = re == null ? K : Or(re), T = ue == null ? K : Or(ue), K = new fe(X, x + "leave", re, n, W), K.target = ut, K.relatedTarget = T, X = null, cr(W) === A && (fe = new fe(_, x + "enter", ue, n, W), fe.target = T, fe.relatedTarget = ut, X = fe), ut = X, re && ue) t: {
              for (fe = re, _ = ue, x = 0, T = fe; T; T = $r(T)) x++;
              for (T = 0, X = _; X; X = $r(X)) T++;
              for (; 0 < x - T; ) fe = $r(fe), x--;
              for (; 0 < T - x; ) _ = $r(_), T--;
              for (; x--; ) {
                if (fe === _ || _ !== null && fe === _.alternate) break t;
                fe = $r(fe), _ = $r(_);
              }
              fe = null;
            }
            else fe = null;
            re !== null && vu(Y, K, re, fe, !1), ue !== null && ut !== null && vu(Y, ut, ue, fe, !0);
          }
        }
        e: {
          if (K = A ? Or(A) : window, re = K.nodeName && K.nodeName.toLowerCase(), re === "select" || re === "input" && K.type === "file") var he = th;
          else if (Yo(K)) if (Xo) he = sh;
          else {
            he = rh;
            var ge = nh;
          }
          else (re = K.nodeName) && re.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (he = ih);
          if (he && (he = he(e, A))) {
            Jo(Y, he, n, W);
            break e;
          }
          ge && ge(e, K, A), e === "focusout" && (ge = K._wrapperState) && ge.controlled && K.type === "number" && Be(K, "number", K.value);
        }
        switch (ge = A ? Or(A) : window, e) {
          case "focusin":
            (Yo(ge) || ge.contentEditable === "true") && (Ar = ge, Ia = A, Si = null);
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
            if (oh) break;
          case "keydown":
          case "keyup":
            su(Y, n, W);
        }
        var xe;
        if ($a) e: {
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
        Ce && (Ho && n.locale !== "ko" && (Pr || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Pr && (xe = zo()) : (Hn = W, _a = "value" in Hn ? Hn.value : Hn.textContent, Pr = !0)), ge = gs(A, Ce), 0 < ge.length && (Ce = new Bo(Ce, e, null, n, W), Y.push({ event: Ce, listeners: ge }), xe ? Ce.data = xe : (xe = Qo(n), xe !== null && (Ce.data = xe)))), (xe = Jf ? Xf(e, n) : Zf(e, n)) && (A = gs(A, "onBeforeInput"), 0 < A.length && (W = new Bo("onBeforeInput", "beforeinput", null, n, W), Y.push({ event: W, listeners: A }), W.data = xe));
      }
      mu(Y, t);
    });
  }
  function Ni(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function gs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, o = s.stateNode;
      s.tag === 5 && o !== null && (s = o, o = Mt(e, n), o != null && r.unshift(Ni(e, o, s)), o = Mt(e, t), o != null && r.push(Ni(e, o, s))), e = e.return;
    }
    return r;
  }
  function $r(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function vu(e, t, n, r, s) {
    for (var o = t._reactName, d = []; n !== null && n !== r; ) {
      var p = n, y = p.alternate, A = p.stateNode;
      if (y !== null && y === r) break;
      p.tag === 5 && A !== null && (p = A, s ? (y = Mt(n, o), y != null && d.unshift(Ni(n, y, p))) : s || (y = Mt(n, o), y != null && d.push(Ni(n, y, p)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var fh = /\r\n?/g, hh = /\u0000|\uFFFD/g;
  function ku(e) {
    return (typeof e == "string" ? e : "" + e).replace(fh, `
`).replace(hh, "");
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
  var Wa = typeof setTimeout == "function" ? setTimeout : void 0, mh = typeof clearTimeout == "function" ? clearTimeout : void 0, yu = typeof Promise == "function" ? Promise : void 0, ph = typeof queueMicrotask == "function" ? queueMicrotask : typeof yu < "u" ? function(e) {
    return yu.resolve(null).then(e).catch(vh);
  } : Wa;
  function vh(e) {
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
  var Lr = Math.random().toString(36).slice(2), yn = "__reactFiber$" + Lr, Ci = "__reactProps$" + Lr, Tn = "__reactContainer$" + Lr, Ya = "__reactEvents$" + Lr, kh = "__reactListeners$" + Lr, yh = "__reactHandles$" + Lr;
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
  function Or(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Ss(e) {
    return e[Ci] || null;
  }
  var Ja = [], Fr = -1;
  function Wn(e) {
    return { current: e };
  }
  function et(e) {
    0 > Fr || (e.current = Ja[Fr], Ja[Fr] = null, Fr--);
  }
  function Xe(e, t) {
    Fr++, Ja[Fr] = e.current, e.current = t;
  }
  var Qn = {}, Et = Wn(Qn), $t = Wn(!1), dr = Qn;
  function Ir(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, o;
    for (o in n) s[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function Lt(e) {
    return e = e.childContextTypes, e != null;
  }
  function ws() {
    et($t), et(Et);
  }
  function xu(e, t, n) {
    if (Et.current !== Qn) throw Error(u(168));
    Xe(Et, t), Xe($t, n);
  }
  function ju(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(u(108, S(e) || "Unknown", s));
    return J({}, n, r);
  }
  function Es(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qn, dr = Et.current, Xe(Et, e), Xe($t, $t.current), !0;
  }
  function Su(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = ju(e, t, dr), r.__reactInternalMemoizedMergedChildContext = e, et($t), et(Et), Xe(Et, e)) : et($t), Xe($t, n);
  }
  var Mn = null, Ns = !1, Xa = !1;
  function wu(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function gh(e) {
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
      } catch (s) {
        throw Mn !== null && (Mn = Mn.slice(e + 1)), Cn(lt, Yn), s;
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
  var xh = H.ReactCurrentBatchConfig;
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
    function s(_, x) {
      return _ = rr(_, x), _.index = 0, _.sibling = null, _;
    }
    function o(_, x, T) {
      return _.index = T, e ? (T = _.alternate, T !== null ? (T = T.index, T < x ? (_.flags |= 2, x) : T) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function d(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function p(_, x, T, X) {
      return x === null || x.tag !== 6 ? (x = Wl(T, _.mode, X), x.return = _, x) : (x = s(x, T), x.return = _, x);
    }
    function y(_, x, T, X) {
      var he = T.type;
      return he === M ? W(_, x, T.props.children, X, T.key) : x !== null && (x.elementType === he || typeof he == "object" && he !== null && he.$$typeof === oe && Mu(he) === x.type) ? (X = s(x, T.props), X.ref = Ti(_, x, T), X.return = _, X) : (X = qs(T.type, T.key, T.props, null, _.mode, X), X.ref = Ti(_, x, T), X.return = _, X);
    }
    function A(_, x, T, X) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== T.containerInfo || x.stateNode.implementation !== T.implementation ? (x = Ql(T, _.mode, X), x.return = _, x) : (x = s(x, T.children || []), x.return = _, x);
    }
    function W(_, x, T, X, he) {
      return x === null || x.tag !== 7 ? (x = jr(T, _.mode, X, he), x.return = _, x) : (x = s(x, T), x.return = _, x);
    }
    function Y(_, x, T) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Wl("" + x, _.mode, T), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Z:
            return T = qs(x.type, x.key, x.props, null, _.mode, T), T.ref = Ti(_, null, x), T.return = _, T;
          case ee:
            return x = Ql(x, _.mode, T), x.return = _, x;
          case oe:
            var X = x._init;
            return Y(_, X(x._payload), T);
        }
        if (Ge(x) || Q(x)) return x = jr(x, _.mode, T, null), x.return = _, x;
        Ms(_, x);
      }
      return null;
    }
    function K(_, x, T, X) {
      var he = x !== null ? x.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number") return he !== null ? null : p(_, x, "" + T, X);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Z:
            return T.key === he ? y(_, x, T, X) : null;
          case ee:
            return T.key === he ? A(_, x, T, X) : null;
          case oe:
            return he = T._init, K(
              _,
              x,
              he(T._payload),
              X
            );
        }
        if (Ge(T) || Q(T)) return he !== null ? null : W(_, x, T, X, null);
        Ms(_, T);
      }
      return null;
    }
    function re(_, x, T, X, he) {
      if (typeof X == "string" && X !== "" || typeof X == "number") return _ = _.get(T) || null, p(x, _, "" + X, he);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case Z:
            return _ = _.get(X.key === null ? T : X.key) || null, y(x, _, X, he);
          case ee:
            return _ = _.get(X.key === null ? T : X.key) || null, A(x, _, X, he);
          case oe:
            var ge = X._init;
            return re(_, x, T, ge(X._payload), he);
        }
        if (Ge(X) || Q(X)) return _ = _.get(T) || null, W(x, _, X, he, null);
        Ms(x, X);
      }
      return null;
    }
    function ue(_, x, T, X) {
      for (var he = null, ge = null, xe = x, Ce = x = 0, kt = null; xe !== null && Ce < T.length; Ce++) {
        xe.index > Ce ? (kt = xe, xe = null) : kt = xe.sibling;
        var Ve = K(_, xe, T[Ce], X);
        if (Ve === null) {
          xe === null && (xe = kt);
          break;
        }
        e && xe && Ve.alternate === null && t(_, xe), x = o(Ve, x, Ce), ge === null ? he = Ve : ge.sibling = Ve, ge = Ve, xe = kt;
      }
      if (Ce === T.length) return n(_, xe), rt && hr(_, Ce), he;
      if (xe === null) {
        for (; Ce < T.length; Ce++) xe = Y(_, T[Ce], X), xe !== null && (x = o(xe, x, Ce), ge === null ? he = xe : ge.sibling = xe, ge = xe);
        return rt && hr(_, Ce), he;
      }
      for (xe = r(_, xe); Ce < T.length; Ce++) kt = re(xe, _, Ce, T[Ce], X), kt !== null && (e && kt.alternate !== null && xe.delete(kt.key === null ? Ce : kt.key), x = o(kt, x, Ce), ge === null ? he = kt : ge.sibling = kt, ge = kt);
      return e && xe.forEach(function(ir) {
        return t(_, ir);
      }), rt && hr(_, Ce), he;
    }
    function fe(_, x, T, X) {
      var he = Q(T);
      if (typeof he != "function") throw Error(u(150));
      if (T = he.call(T), T == null) throw Error(u(151));
      for (var ge = he = null, xe = x, Ce = x = 0, kt = null, Ve = T.next(); xe !== null && !Ve.done; Ce++, Ve = T.next()) {
        xe.index > Ce ? (kt = xe, xe = null) : kt = xe.sibling;
        var ir = K(_, xe, Ve.value, X);
        if (ir === null) {
          xe === null && (xe = kt);
          break;
        }
        e && xe && ir.alternate === null && t(_, xe), x = o(ir, x, Ce), ge === null ? he = ir : ge.sibling = ir, ge = ir, xe = kt;
      }
      if (Ve.done) return n(
        _,
        xe
      ), rt && hr(_, Ce), he;
      if (xe === null) {
        for (; !Ve.done; Ce++, Ve = T.next()) Ve = Y(_, Ve.value, X), Ve !== null && (x = o(Ve, x, Ce), ge === null ? he = Ve : ge.sibling = Ve, ge = Ve);
        return rt && hr(_, Ce), he;
      }
      for (xe = r(_, xe); !Ve.done; Ce++, Ve = T.next()) Ve = re(xe, _, Ce, Ve.value, X), Ve !== null && (e && Ve.alternate !== null && xe.delete(Ve.key === null ? Ce : Ve.key), x = o(Ve, x, Ce), ge === null ? he = Ve : ge.sibling = Ve, ge = Ve);
      return e && xe.forEach(function(qh) {
        return t(_, qh);
      }), rt && hr(_, Ce), he;
    }
    function ut(_, x, T, X) {
      if (typeof T == "object" && T !== null && T.type === M && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Z:
            e: {
              for (var he = T.key, ge = x; ge !== null; ) {
                if (ge.key === he) {
                  if (he = T.type, he === M) {
                    if (ge.tag === 7) {
                      n(_, ge.sibling), x = s(ge, T.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (ge.elementType === he || typeof he == "object" && he !== null && he.$$typeof === oe && Mu(he) === ge.type) {
                    n(_, ge.sibling), x = s(ge, T.props), x.ref = Ti(_, ge, T), x.return = _, _ = x;
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
          case ee:
            e: {
              for (ge = T.key; x !== null; ) {
                if (x.key === ge) if (x.tag === 4 && x.stateNode.containerInfo === T.containerInfo && x.stateNode.implementation === T.implementation) {
                  n(_, x.sibling), x = s(x, T.children || []), x.return = _, _ = x;
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
          case oe:
            return ge = T._init, ut(_, x, ge(T._payload), X);
        }
        if (Ge(T)) return ue(_, x, T, X);
        if (Q(T)) return fe(_, x, T, X);
        Ms(_, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" ? (T = "" + T, x !== null && x.tag === 6 ? (n(_, x.sibling), x = s(x, T), x.return = _, _ = x) : (n(_, x), x = Wl(T, _.mode, X), x.return = _, _ = x), d(_)) : n(_, x);
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
    As = e, rl = Br = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ot = !0), e.firstContext = null);
  }
  function Zt(e) {
    var t = e._currentValue;
    if (rl !== e) if (e = { context: e, memoizedValue: t, next: null }, Br === null) {
      if (As === null) throw Error(u(308));
      Br = e, As.dependencies = { lanes: 0, firstContext: e };
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
  function $u(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function $n(e, t) {
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
  function Rs(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Sa(e, n);
    }
  }
  function Lu(e, t) {
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
      var y = p, A = y.next;
      y.next = null, d === null ? o = A : d.next = A, d = y;
      var W = e.alternate;
      W !== null && (W = W.updateQueue, p = W.lastBaseUpdate, p !== d && (p === null ? W.firstBaseUpdate = A : p.next = A, W.lastBaseUpdate = y));
    }
    if (o !== null) {
      var Y = s.baseState;
      d = 0, W = A = y = null, p = o;
      do {
        var K = p.lane, re = p.eventTime;
        if ((r & K) === K) {
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
            switch (K = t, re = n, fe.tag) {
              case 1:
                if (ue = fe.payload, typeof ue == "function") {
                  Y = ue.call(re, Y, K);
                  break e;
                }
                Y = ue;
                break e;
              case 3:
                ue.flags = ue.flags & -65537 | 128;
              case 0:
                if (ue = fe.payload, K = typeof ue == "function" ? ue.call(re, Y, K) : ue, K == null) break e;
                Y = J({}, Y, K);
                break e;
              case 2:
                Jn = !0;
            }
          }
          p.callback !== null && p.lane !== 0 && (e.flags |= 64, K = s.effects, K === null ? s.effects = [p] : K.push(p));
        } else re = { eventTime: re, lane: K, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, W === null ? (A = W = re, y = Y) : W = W.next = re, d |= K;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null) break;
          K = p, p = K.next, K.next = null, s.lastBaseUpdate = K, s.shared.pending = null;
        }
      } while (!0);
      if (W === null && (y = Y), s.baseState = y, s.firstBaseUpdate = A, s.lastBaseUpdate = W, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          d |= s.lane, s = s.next;
        while (s !== t);
      } else o === null && (s.shared.lanes = 0);
      kr |= d, e.lanes = d, e.memoizedState = Y;
    }
  }
  function Ou(e, t, n) {
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
  function Fu(e) {
    pr(Ai.current);
    var t = pr(gn.current), n = Kt(t, e.type);
    t !== n && (Xe(Pi, e), Xe(gn, n));
  }
  function cl(e) {
    Pi.current === e && (et(gn), et(Pi));
  }
  var st = Wn(0);
  function Ls(e) {
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
  var Os = H.ReactCurrentDispatcher, hl = H.ReactCurrentBatchConfig, vr = 0, at = null, ft = null, pt = null, Fs = !1, Ri = !1, $i = 0, jh = 0;
  function Nt() {
    throw Error(u(321));
  }
  function ml(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!sn(e[n], t[n])) return !1;
    return !0;
  }
  function pl(e, t, n, r, s, o) {
    if (vr = o, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Os.current = e === null || e.memoizedState === null ? Nh : Ch, e = n(r, s), Ri) {
      o = 0;
      do {
        if (Ri = !1, $i = 0, 25 <= o) throw Error(u(301));
        o += 1, pt = ft = null, t.updateQueue = null, Os.current = _h, e = n(r, s);
      } while (Ri);
    }
    if (Os.current = zs, t = ft !== null && ft.next !== null, vr = 0, pt = ft = at = null, Fs = !1, t) throw Error(u(300));
    return e;
  }
  function vl() {
    var e = $i !== 0;
    return $i = 0, e;
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
  function Li(e, t) {
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
      var p = d = null, y = null, A = o;
      do {
        var W = A.lane;
        if ((vr & W) === W) y !== null && (y = y.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), r = A.hasEagerState ? A.eagerState : e(r, A.action);
        else {
          var Y = {
            lane: W,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          y === null ? (p = y = Y, d = r) : y = y.next = Y, at.lanes |= W, kr |= W;
        }
        A = A.next;
      } while (A !== null && A !== o);
      y === null ? d = r : y.next = p, sn(r, t.memoizedState) || (Ot = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = y, n.lastRenderedState = r;
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
      sn(o, t.memoizedState) || (Ot = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Iu() {
  }
  function Du(e, t) {
    var n = at, r = qt(), s = t(), o = !sn(r.memoizedState, s);
    if (o && (r.memoizedState = s, Ot = !0), r = r.queue, gl(Vu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || pt !== null && pt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Oi(9, bu.bind(null, n, r, s, t), void 0, null), vt === null) throw Error(u(349));
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
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Li, lastRenderedState: e }, t.queue = e, e = e.dispatch = Eh.bind(null, at, e), [t.memoizedState, e];
  }
  function Oi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ku() {
    return qt().memoizedState;
  }
  function Is(e, t, n, r) {
    var s = xn();
    at.flags |= e, s.memoizedState = Oi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ds(e, t, n, r) {
    var s = qt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ft !== null) {
      var d = ft.memoizedState;
      if (o = d.destroy, r !== null && ml(r, d.deps)) {
        s.memoizedState = Oi(t, n, o, r);
        return;
      }
    }
    at.flags |= e, s.memoizedState = Oi(1 | t, n, o, r);
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
    return r !== null && t !== null && ml(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Zu(e, t) {
    var n = qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ml(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function qu(e, t, n) {
    return (vr & 21) === 0 ? (e.baseState && (e.baseState = !1, Ot = !0), e.memoizedState = n) : (sn(n, t) || (n = Mo(), at.lanes |= n, kr |= n, e.baseState = !0), t);
  }
  function Sh(e, t) {
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
  function wh(e, t, n) {
    var r = tr(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, tc(e)) nc(t, n);
    else if (n = Ru(e, t, n, r), n !== null) {
      var s = At();
      cn(n, e, r, s), rc(n, t, r);
    }
  }
  function Eh(e, t, n) {
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
    Ri = Fs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function rc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Sa(e, n);
    }
  }
  var zs = { readContext: Zt, useCallback: Nt, useContext: Nt, useEffect: Nt, useImperativeHandle: Nt, useInsertionEffect: Nt, useLayoutEffect: Nt, useMemo: Nt, useReducer: Nt, useRef: Nt, useState: Nt, useDebugValue: Nt, useDeferredValue: Nt, useTransition: Nt, useMutableSource: Nt, useSyncExternalStore: Nt, useId: Nt, unstable_isNewReconciler: !1 }, Nh = { readContext: Zt, useCallback: function(e, t) {
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = wh.bind(null, at, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = xn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Hu, useDebugValue: xl, useDeferredValue: function(e) {
    return xn().memoizedState = e;
  }, useTransition: function() {
    var e = Hu(!1), t = e[0];
    return e = Sh.bind(null, e[1]), xn().memoizedState = e, [t, e];
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
    ), [e]), r.flags |= 2048, Oi(9, bu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = xn(), t = vt.identifierPrefix;
    if (rt) {
      var n = An, r = Pn;
      n = (r & ~(1 << 32 - rn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $i++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = jh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Ch = {
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
      return kl(Li);
    },
    useDebugValue: xl,
    useDeferredValue: function(e) {
      var t = qt();
      return qu(t, ft.memoizedState, e);
    },
    useTransition: function() {
      var e = kl(Li)[0], t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: Du,
    useId: ec,
    unstable_isNewReconciler: !1
  }, _h = { readContext: Zt, useCallback: Xu, useContext: Zt, useEffect: gl, useImperativeHandle: Ju, useInsertionEffect: Wu, useLayoutEffect: Qu, useMemo: Zu, useReducer: yl, useRef: Ku, useState: function() {
    return yl(Li);
  }, useDebugValue: xl, useDeferredValue: function(e) {
    var t = qt();
    return ft === null ? t.memoizedState = e : qu(t, ft.memoizedState, e);
  }, useTransition: function() {
    var e = yl(Li)[0], t = qt().memoizedState;
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
    var r = At(), s = tr(e), o = $n(r, s);
    o.payload = t, n != null && (o.callback = n), t = Xn(e, o, s), t !== null && (cn(t, e, s, r), Rs(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = At(), s = tr(e), o = $n(r, s);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Xn(e, o, s), t !== null && (cn(t, e, s, r), Rs(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = At(), r = tr(e), s = $n(n, r);
    s.tag = 2, t != null && (s.callback = t), t = Xn(e, s, r), t !== null && (cn(t, e, r, n), Rs(t, e, r));
  } };
  function ic(e, t, n, r, s, o, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, d) : t.prototype && t.prototype.isPureReactComponent ? !ji(n, r) || !ji(s, o) : !0;
  }
  function sc(e, t, n) {
    var r = !1, s = Qn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Zt(o) : (s = Lt(t) ? dr : Et.current, r = t.contextTypes, o = (r = r != null) ? Ir(e, s) : Qn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function ac(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bs.enqueueReplaceState(t, t.state, null);
  }
  function Sl(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, ol(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? s.context = Zt(o) : (o = Lt(t) ? dr : Et.current, s.context = Ir(e, o)), s.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (jl(e, t, o, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && bs.enqueueReplaceState(s, s.state, null), $s(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
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
  var Th = typeof WeakMap == "function" ? WeakMap : Map;
  function lc(e, t, n) {
    n = $n(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Ws || (Ws = !0, zl = r), El(e, t);
    }, n;
  }
  function oc(e, t, n) {
    n = $n(-1, n), n.tag = 3;
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
      r = e.pingCache = new Th();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (s.add(n), e = Bh.bind(null, e, t, n), t.then(e, e));
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
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $n(-1, 1), t.tag = 2, Xn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = s, e);
  }
  var Mh = H.ReactCurrentOwner, Ot = !1;
  function Pt(e, t, n, r) {
    t.child = e === null ? Au(t, null, n, r) : Vr(t, e.child, n, r);
  }
  function fc(e, t, n, r, s) {
    n = n.render;
    var o = t.ref;
    return Ur(t, s), r = pl(e, t, n, r, o, s), n = vl(), e !== null && !Ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Ln(e, t, s)) : (rt && n && Za(t), t.flags |= 1, Pt(e, t, r, s), t.child);
  }
  function hc(e, t, n, r, s) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Gl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, mc(e, t, o, r, s)) : (e = qs(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & s) === 0) {
      var d = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ji, n(d, r) && e.ref === t.ref) return Ln(e, t, s);
    }
    return t.flags |= 1, e = rr(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function mc(e, t, n, r, s) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ji(o, r) && e.ref === t.ref) if (Ot = !1, t.pendingProps = r = o, (e.lanes & s) !== 0) (e.flags & 131072) !== 0 && (Ot = !0);
      else return t.lanes = e.lanes, Ln(e, t, s);
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
    var o = Lt(n) ? dr : Et.current;
    return o = Ir(t, o), Ur(t, s), n = pl(e, t, n, r, o, s), r = vl(), e !== null && !Ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Ln(e, t, s)) : (rt && r && Za(t), t.flags |= 1, Pt(e, t, n, s), t.child);
  }
  function kc(e, t, n, r, s) {
    if (Lt(n)) {
      var o = !0;
      Es(t);
    } else o = !1;
    if (Ur(t, s), t.stateNode === null) Bs(e, t), sc(t, n, r), Sl(t, n, r, s), r = !0;
    else if (e === null) {
      var d = t.stateNode, p = t.memoizedProps;
      d.props = p;
      var y = d.context, A = n.contextType;
      typeof A == "object" && A !== null ? A = Zt(A) : (A = Lt(n) ? dr : Et.current, A = Ir(t, A));
      var W = n.getDerivedStateFromProps, Y = typeof W == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      Y || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (p !== r || y !== A) && ac(t, d, r, A), Jn = !1;
      var K = t.memoizedState;
      d.state = K, $s(t, r, d, s), y = t.memoizedState, p !== r || K !== y || $t.current || Jn ? (typeof W == "function" && (jl(t, n, W, r), y = t.memoizedState), (p = Jn || ic(t, n, p, r, K, y, A)) ? (Y || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = y), d.props = r, d.state = y, d.context = A, r = p) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, $u(e, t), p = t.memoizedProps, A = t.type === t.elementType ? p : ln(t.type, p), d.props = A, Y = t.pendingProps, K = d.context, y = n.contextType, typeof y == "object" && y !== null ? y = Zt(y) : (y = Lt(n) ? dr : Et.current, y = Ir(t, y));
      var re = n.getDerivedStateFromProps;
      (W = typeof re == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (p !== Y || K !== y) && ac(t, d, r, y), Jn = !1, K = t.memoizedState, d.state = K, $s(t, r, d, s);
      var ue = t.memoizedState;
      p !== Y || K !== ue || $t.current || Jn ? (typeof re == "function" && (jl(t, n, re, r), ue = t.memoizedState), (A = Jn || ic(t, n, A, r, K, ue, y) || !1) ? (W || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, ue, y), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, ue, y)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || p === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = ue), d.props = r, d.state = ue, d.context = y, r = A) : (typeof d.componentDidUpdate != "function" || p === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Cl(e, t, n, r, o, s);
  }
  function Cl(e, t, n, r, s, o) {
    vc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return s && Su(t, n, !1), Ln(e, t, o);
    r = t.stateNode, Mh.current = t;
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
      return tl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = d) : o = ea(d, r, 0, null), e = jr(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Tl(n), t.memoizedState = _l, e) : Ml(t, d));
    if (s = e.memoizedState, s !== null && (p = s.dehydrated, p !== null)) return Ph(e, t, d, r, p, s, n);
    if (o) {
      o = r.fallback, d = t.mode, s = e.child, p = s.sibling;
      var y = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = y, t.deletions = null) : (r = rr(s, y), r.subtreeFlags = s.subtreeFlags & 14680064), p !== null ? o = rr(p, o) : (o = jr(o, d, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, d = e.child.memoizedState, d = d === null ? Tl(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, o.memoizedState = d, o.childLanes = e.childLanes & ~n, t.memoizedState = _l, r;
    }
    return o = e.child, e = o.sibling, r = rr(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ml(e, t) {
    return t = ea({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Vs(e, t, n, r) {
    return r !== null && nl(r), Vr(t, e.child, null, n), e = Ml(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ph(e, t, n, r, s, o, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = wl(Error(u(422))), Vs(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, s = t.mode, r = ea({ mode: "visible", children: r.children }, s, 0, null), o = jr(o, s, d, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Vr(t, e.child, null, d), t.child.memoizedState = Tl(d), t.memoizedState = _l, o);
    if ((t.mode & 1) === 0) return Vs(e, t, d, null);
    if (s.data === "$!") {
      if (r = s.nextSibling && s.nextSibling.dataset, r) var p = r.dgst;
      return r = p, o = Error(u(419)), r = wl(o, r, void 0), Vs(e, t, d, r);
    }
    if (p = (d & e.childLanes) !== 0, Ot || p) {
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
      return Kl(), r = wl(Error(u(421))), Vs(e, t, d, r);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Uh.bind(null, e), s._reactRetry = t, null) : (e = o.treeContext, Ut = Gn(s.nextSibling), Bt = t, rt = !0, an = null, e !== null && (Jt[Xt++] = Pn, Jt[Xt++] = An, Jt[Xt++] = fr, Pn = e.id, An = e.overflow, fr = t), t = Ml(t, r.children), t.flags |= 4096, t);
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
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && Ls(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Pl(t, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && Ls(e) === null) {
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
  function Bs(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Ln(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), kr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = rr(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ah(e, t, n) {
    switch (t.tag) {
      case 3:
        yc(t), br();
        break;
      case 5:
        Fu(t);
        break;
      case 1:
        Lt(t.type) && Es(t);
        break;
      case 4:
        ul(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, s = t.memoizedProps.value;
        Xe(Ps, r._currentValue), r._currentValue = s;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Xe(st, st.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? xc(e, t, n) : (Xe(st, st.current & 1), e = Ln(e, t, n), e !== null ? e.sibling : null);
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
    return Ln(e, t, n);
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
          typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = js);
      }
      Re(n, r);
      var d;
      n = null;
      for (A in s) if (!r.hasOwnProperty(A) && s.hasOwnProperty(A) && s[A] != null) if (A === "style") {
        var p = s[A];
        for (d in p) p.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (f.hasOwnProperty(A) ? o || (o = []) : (o = o || []).push(A, null));
      for (A in r) {
        var y = r[A];
        if (p = s?.[A], r.hasOwnProperty(A) && y !== p && (y != null || p != null)) if (A === "style") if (p) {
          for (d in p) !p.hasOwnProperty(d) || y && y.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in y) y.hasOwnProperty(d) && p[d] !== y[d] && (n || (n = {}), n[d] = y[d]);
        } else n || (o || (o = []), o.push(
          A,
          n
        )), n = y;
        else A === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, p = p ? p.__html : void 0, y != null && p !== y && (o = o || []).push(A, y)) : A === "children" ? typeof y != "string" && typeof y != "number" || (o = o || []).push(A, "" + y) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (f.hasOwnProperty(A) ? (y != null && A === "onScroll" && qe("scroll", e), o || p === y || (o = [])) : (o = o || []).push(A, y));
      }
      n && (o = o || []).push("style", n);
      var A = o;
      (t.updateQueue = A) && (t.flags |= 4);
    }
  }, Nc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Fi(e, t) {
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
  function Rh(e, t, n) {
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
        return Lt(t.type) && ws(), Ct(t), null;
      case 3:
        return r = t.stateNode, Hr(), et($t), et(Et), fl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ts(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, an !== null && (Bl(an), an = null))), Al(e, t), Ct(t), null;
      case 5:
        cl(t);
        var s = pr(Ai.current);
        if (n = t.type, e !== null && t.stateNode != null) Ec(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return Ct(t), null;
          }
          if (e = pr(gn.current), Ts(t)) {
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
              d === "children" ? typeof p == "string" ? r.textContent !== p && (o.suppressHydrationWarning !== !0 && xs(r.textContent, p, e), s = ["children", p]) : typeof p == "number" && r.textContent !== "" + p && (o.suppressHydrationWarning !== !0 && xs(
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
                typeof o.onClick == "function" && (r.onclick = js);
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
                  r.value != null && e.setAttribute("value", "" + B(r.value));
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
                  typeof s.onClick == "function" && (e.onclick = js);
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
          if (n = pr(Ai.current), pr(gn.current), Ts(t)) {
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
        return Lt(t.type) && ws(), Ct(t), null;
      case 19:
        if (et(st), o = t.memoizedState, o === null) return Ct(t), null;
        if (r = (t.flags & 128) !== 0, d = o.rendering, d === null) if (r) Fi(o, !1);
        else {
          if (ht !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Ls(e), d !== null) {
              for (t.flags |= 128, Fi(o, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, d = o.alternate, d === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = d.childLanes, o.lanes = d.lanes, o.child = d.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = d.memoizedProps, o.memoizedState = d.memoizedState, o.updateQueue = d.updateQueue, o.type = d.type, e = d.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Xe(st, st.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && ye() > Qr && (t.flags |= 128, r = !0, Fi(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Ls(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Fi(o, !0), o.tail === null && o.tailMode === "hidden" && !d.alternate && !rt) return Ct(t), null;
          } else 2 * ye() - o.renderingStartTime > Qr && n !== 1073741824 && (t.flags |= 128, r = !0, Fi(o, !1), t.lanes = 4194304);
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
        return Lt(t.type) && ws(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Hr(), et($t), et(Et), fl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
  var Us = !1, _t = !1, Lh = typeof WeakSet == "function" ? WeakSet : Set, se = null;
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
    if (Ha = us, e = iu(), Fa(e)) {
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
          var d = 0, p = -1, y = -1, A = 0, W = 0, Y = e, K = null;
          t: for (; ; ) {
            for (var re; Y !== n || s !== 0 && Y.nodeType !== 3 || (p = d + s), Y !== o || r !== 0 && Y.nodeType !== 3 || (y = d + r), Y.nodeType === 3 && (d += Y.nodeValue.length), (re = Y.firstChild) !== null; )
              K = Y, Y = re;
            for (; ; ) {
              if (Y === e) break t;
              if (K === n && ++A === s && (p = d), K === o && ++W === r && (y = d), (re = Y.nextSibling) !== null) break;
              Y = K, K = Y.parentNode;
            }
            Y = re;
          }
          n = p === -1 || y === -1 ? null : { start: p, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ka = { focusedElem: e, selectionRange: n }, us = !1, se = t; se !== null; ) if (t = se, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, se = e;
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
              var fe = ue.memoizedProps, ut = ue.memoizedState, _ = t.stateNode, x = _.getSnapshotBeforeUpdate(t.elementType === t.type ? fe : ln(t.type, fe), ut);
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
  function $l(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function _c(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, _c(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yn], delete t[Ci], delete t[Ya], delete t[kh], delete t[yh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function Ll(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = js));
    else if (r !== 4 && (e = e.child, e !== null)) for (Ll(e, t, n), e = e.sibling; e !== null; ) Ll(e, t, n), e = e.sibling;
  }
  function Ol(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Ol(e, t, n), e = e.sibling; e !== null; ) Ol(e, t, n), e = e.sibling;
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
        var s = Hh.bind(null, e, r);
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
      } catch (A) {
        ot(s, t, A);
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
            var A = Ae(p, o);
            for (d = 0; d < y.length; d += 2) {
              var W = y[d], Y = y[d + 1];
              W === "style" ? Wt(s, Y) : W === "dangerouslySetInnerHTML" ? nn(s, Y) : W === "children" ? Gt(s, Y) : P(s, W, Y, A);
            }
            switch (p) {
              case "input":
                Le(s, o);
                break;
              case "textarea":
                be(s, o);
                break;
              case "select":
                var K = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var re = o.value;
                re != null ? Ue(s, !!o.multiple, re, !1) : K !== !!o.multiple && (o.defaultValue != null ? Ue(
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
        if (W = n !== null && n.memoizedState !== null, e.mode & 1 ? (_t = (A = _t) || W, un(t, e), _t = A) : un(t, e), jn(e), r & 8192) {
          if (A = e.memoizedState !== null, (e.stateNode.isHidden = A) && !W && (e.mode & 1) !== 0) for (se = e, W = e.child; W !== null; ) {
            for (Y = se = W; se !== null; ) {
              switch (K = se, re = K.child, K.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ii(4, K, K.return);
                  break;
                case 1:
                  Gr(K, K.return);
                  var ue = K.stateNode;
                  if (typeof ue.componentWillUnmount == "function") {
                    r = K, n = K.return;
                    try {
                      t = r, ue.props = t.memoizedProps, ue.state = t.memoizedState, ue.componentWillUnmount();
                    } catch (fe) {
                      ot(r, n, fe);
                    }
                  }
                  break;
                case 5:
                  Gr(K, K.return);
                  break;
                case 22:
                  if (K.memoizedState !== null) {
                    Oc(Y);
                    continue;
                  }
              }
              re !== null ? (re.return = K, se = re) : Oc(Y);
            }
            W = W.sibling;
          }
          e: for (W = null, Y = e; ; ) {
            if (Y.tag === 5) {
              if (W === null) {
                W = Y;
                try {
                  s = Y.stateNode, A ? (o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (p = Y.stateNode, y = Y.memoizedProps.style, d = y != null && y.hasOwnProperty("display") ? y.display : null, p.style.display = ke("display", d));
                } catch (fe) {
                  ot(e, e.return, fe);
                }
              }
            } else if (Y.tag === 6) {
              if (W === null) try {
                Y.stateNode.nodeValue = A ? "" : Y.memoizedProps;
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
            Ol(e, o, s);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, p = Mc(e);
            Ll(e, p, d);
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
    se = e, $c(e);
  }
  function $c(e, t, n) {
    for (var r = (e.mode & 1) !== 0; se !== null; ) {
      var s = se, o = s.child;
      if (s.tag === 22 && r) {
        var d = s.memoizedState !== null || Us;
        if (!d) {
          var p = s.alternate, y = p !== null && p.memoizedState !== null || _t;
          p = Us;
          var A = _t;
          if (Us = d, (_t = y) && !A) for (se = s; se !== null; ) d = se, y = d.child, d.tag === 22 && d.memoizedState !== null ? Fc(s) : y !== null ? (y.return = d, se = y) : Fc(s);
          for (; o !== null; ) se = o, $c(o), o = o.sibling;
          se = s, Us = p, _t = A;
        }
        Lc(e);
      } else (s.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = s, se = o) : Lc(e);
    }
  }
  function Lc(e) {
    for (; se !== null; ) {
      var t = se;
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
                var s = t.elementType === t.type ? n.memoizedProps : ln(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Ou(t, o, r);
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
                Ou(t, d, n);
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
                var A = t.alternate;
                if (A !== null) {
                  var W = A.memoizedState;
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
          _t || t.flags & 512 && $l(t);
        } catch (K) {
          ot(t, t.return, K);
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
  function Oc(e) {
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
  function Fc(e) {
    for (; se !== null; ) {
      var t = se;
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
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                ot(t, s, y);
              }
            }
            var o = t.return;
            try {
              $l(t);
            } catch (y) {
              ot(t, o, y);
            }
            break;
          case 5:
            var d = t.return;
            try {
              $l(t);
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
  var Ih = Math.ceil, Ks = H.ReactCurrentDispatcher, Fl = H.ReactCurrentOwner, en = H.ReactCurrentBatchConfig, De = 0, vt = null, dt = null, St = 0, Ht = 0, Wr = Wn(0), ht = 0, Di = null, kr = 0, Gs = 0, Il = 0, zi = null, Ft = null, Dl = 0, Qr = 1 / 0, On = null, Ws = !1, zl = null, qn = null, Qs = !1, er = null, Ys = 0, bi = 0, bl = null, Js = -1, Xs = 0;
  function At() {
    return (De & 6) !== 0 ? ye() : Js !== -1 ? Js : Js = ye();
  }
  function tr(e) {
    return (e.mode & 1) === 0 ? 1 : (De & 2) !== 0 && St !== 0 ? St & -St : xh.transition !== null ? (Xs === 0 && (Xs = Mo()), Xs) : (e = He, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Do(e.type)), e);
  }
  function cn(e, t, n, r) {
    if (50 < bi) throw bi = 0, bl = null, Error(u(185));
    ci(e, n, r), ((De & 2) === 0 || e !== vt) && (e === vt && ((De & 2) === 0 && (Gs |= n), ht === 4 && nr(e, St)), It(e, r), n === 1 && De === 0 && (t.mode & 1) === 0 && (Qr = ye() + 500, Ns && Yn()));
  }
  function It(e, t) {
    var n = e.callbackNode;
    xf(e, t);
    var r = as(e, e === vt ? St : 0);
    if (r === 0) n !== null && _n(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && _n(n), t === 1) e.tag === 0 ? gh(Dc.bind(null, e)) : wu(Dc.bind(null, e)), ph(function() {
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
      var s = De;
      De |= 2;
      var o = bc();
      (vt !== e || St !== t) && (On = null, Qr = ye() + 500, gr(e, t));
      do
        try {
          bh();
          break;
        } catch (p) {
          zc(e, p);
        }
      while (!0);
      il(), Ks.current = o, De = s, dt !== null ? t = 0 : (vt = null, St = 0, t = ht);
    }
    if (t !== 0) {
      if (t === 2 && (s = xa(e), s !== 0 && (r = s, t = Vl(e, s))), t === 1) throw n = Di, gr(e, 0), nr(e, r), It(e, ye()), n;
      if (t === 6) nr(e, r);
      else {
        if (s = e.current.alternate, (r & 30) === 0 && !Dh(s) && (t = Zs(e, r), t === 2 && (o = xa(e), o !== 0 && (r = o, t = Vl(e, o))), t === 1)) throw n = Di, gr(e, 0), nr(e, r), It(e, ye()), n;
        switch (e.finishedWork = s, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            xr(e, Ft, On);
            break;
          case 3:
            if (nr(e, r), (r & 130023424) === r && (t = Dl + 500 - ye(), 10 < t)) {
              if (as(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & r) !== r) {
                At(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = Wa(xr.bind(null, e, Ft, On), t);
              break;
            }
            xr(e, Ft, On);
            break;
          case 4:
            if (nr(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var d = 31 - rn(r);
              o = 1 << d, d = t[d], d > s && (s = d), r &= ~o;
            }
            if (r = s, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ih(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Wa(xr.bind(null, e, Ft, On), r);
              break;
            }
            xr(e, Ft, On);
            break;
          case 5:
            xr(e, Ft, On);
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
    return e.current.memoizedState.isDehydrated && (gr(e, t).flags |= 256), e = Zs(e, t), e !== 2 && (t = Ft, Ft = n, t !== null && Bl(t)), e;
  }
  function Bl(e) {
    Ft === null ? Ft = e : Ft.push.apply(Ft, e);
  }
  function Dh(e) {
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
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, xr(e, Ft, On), It(e, ye()), null;
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
          Hr(), et($t), et(Et), fl();
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
    if (vt = e, dt = e = rr(e.current, null), St = Ht = t, ht = 0, Di = null, Il = Gs = kr = 0, Ft = zi = null, mr !== null) {
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
        if (il(), Os.current = zs, Fs) {
          for (var r = at.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), r = r.next;
          }
          Fs = !1;
        }
        if (vr = 0, pt = ft = at = null, Ri = !1, $i = 0, Fl.current = null, n === null || n.return === null) {
          ht = 1, Di = t, dt = null;
          break;
        }
        e: {
          var o = e, d = n.return, p = n, y = t;
          if (t = St, p.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var A = y, W = p, Y = W.tag;
            if ((W.mode & 1) === 0 && (Y === 0 || Y === 11 || Y === 15)) {
              var K = W.alternate;
              K ? (W.updateQueue = K.updateQueue, W.memoizedState = K.memoizedState, W.lanes = K.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var re = cc(d);
            if (re !== null) {
              re.flags &= -257, dc(re, d, p, o, t), re.mode & 1 && uc(o, A, t), t = re, y = A;
              var ue = t.updateQueue;
              if (ue === null) {
                var fe = /* @__PURE__ */ new Set();
                fe.add(y), t.updateQueue = fe;
              } else ue.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                uc(o, A, t), Kl();
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
                var _ = lc(o, y, t);
                Lu(o, _);
                break e;
              case 1:
                p = y;
                var x = o.type, T = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || T !== null && typeof T.componentDidCatch == "function" && (qn === null || !qn.has(T)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var X = oc(o, p, t);
                  Lu(o, X);
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
    (vt !== e || St !== t) && (On = null, gr(e, t));
    do
      try {
        zh();
        break;
      } catch (s) {
        zc(e, s);
      }
    while (!0);
    if (il(), De = n, Ks.current = r, dt !== null) throw Error(u(261));
    return vt = null, St = 0, ht;
  }
  function zh() {
    for (; dt !== null; ) Vc(dt);
  }
  function bh() {
    for (; dt !== null && !$(); ) Vc(dt);
  }
  function Vc(e) {
    var t = Kc(e.alternate, e, Ht);
    e.memoizedProps = e.pendingProps, t === null ? Bc(e) : dt = t, Fl.current = null;
  }
  function Bc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Rh(n, t, Ht), n !== null) {
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
    var r = He, s = en.transition;
    try {
      en.transition = null, He = 1, Vh(e, t, n, r);
    } finally {
      en.transition = s, He = r;
    }
    return null;
  }
  function Vh(e, t, n, r) {
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
    if (jf(e, o), e === vt && (dt = vt = null, St = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Qs || (Qs = !0, Gc(zn, function() {
      return Yr(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = en.transition, en.transition = null;
      var d = He;
      He = 1;
      var p = De;
      De |= 4, Fl.current = null, Oh(e, n), Rc(n, e), lh(Ka), us = !!Ha, Ka = Ha = null, e.current = n, Fh(n), le(), De = p, He = d, en.transition = o;
    } else e.current = n;
    if (Qs && (Qs = !1, er = e, Ys = s), o = e.pendingLanes, o === 0 && (qn = null), pf(n.stateNode), It(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
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
          var s = De;
          for (De |= 4, se = e.current; se !== null; ) {
            var o = se, d = o.child;
            if ((se.flags & 16) !== 0) {
              var p = o.deletions;
              if (p !== null) {
                for (var y = 0; y < p.length; y++) {
                  var A = p[y];
                  for (se = A; se !== null; ) {
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
                      var K = W.sibling, re = W.return;
                      if (_c(W), W === A) {
                        se = null;
                        break;
                      }
                      if (K !== null) {
                        K.return = re, se = K;
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
              var _ = o.sibling;
              if (_ !== null) {
                _.return = o.return, se = _;
                break e;
              }
              se = o.return;
            }
          }
          var x = e.current;
          for (se = x; se !== null; ) {
            d = se;
            var T = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && T !== null) T.return = d, se = T;
            else e: for (d = x; se !== null; ) {
              if (p = se, (p.flags & 2048) !== 0) try {
                switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hs(9, p);
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
  function Bh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = At(), e.pingedLanes |= e.suspendedLanes & n, vt === e && (St & n) === n && (ht === 4 || ht === 3 && (St & 130023424) === St && 500 > ye() - Dl ? gr(e, 0) : Il |= n), It(e, t);
  }
  function Hc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ss, ss <<= 1, (ss & 130023424) === 0 && (ss = 4194304)));
    var n = At();
    e = Rn(e, t), e !== null && (ci(e, t, n), It(e, n));
  }
  function Uh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Hc(e, n);
  }
  function Hh(e, t) {
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
    if (e !== null) if (e.memoizedProps !== t.pendingProps || $t.current) Ot = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ot = !1, Ah(e, t, n);
      Ot = (e.flags & 131072) !== 0;
    }
    else Ot = !1, rt && (t.flags & 1048576) !== 0 && Eu(t, _s, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Bs(e, t), e = t.pendingProps;
        var s = Ir(t, Et.current);
        Ur(t, n), s = pl(null, t, r, e, s, n);
        var o = vl();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Lt(r) ? (o = !0, Es(t)) : o = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, ol(t), s.updater = bs, t.stateNode = s, s._reactInternals = t, Sl(t, r, e, n), t = Cl(null, t, r, !0, o, n)) : (t.tag = 0, rt && o && Za(t), Pt(null, t, s, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Bs(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Gh(r), e = ln(r, e), s) {
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
          r = t.pendingProps, o = t.memoizedState, s = o.element, $u(e, t), $s(t, r, null, n);
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
              t = Ln(e, t, n);
              break e;
            }
            Pt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Fu(t), e === null && tl(t), r = t.type, s = t.pendingProps, o = e !== null ? e.memoizedProps : null, d = s.children, Ga(r, s) ? d = null : o !== null && Ga(r, o) && (t.flags |= 32), vc(e, t), Pt(e, t, d, n), t.child;
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
          if (r = t.type._context, s = t.pendingProps, o = t.memoizedProps, d = s.value, Xe(Ps, r._currentValue), r._currentValue = d, o !== null) if (sn(o.value, d)) {
            if (o.children === s.children && !$t.current) {
              t = Ln(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var p = o.dependencies;
            if (p !== null) {
              d = o.child;
              for (var y = p.firstContext; y !== null; ) {
                if (y.context === r) {
                  if (o.tag === 1) {
                    y = $n(-1, n & -n), y.tag = 2;
                    var A = o.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var W = A.pending;
                      W === null ? y.next = y : (y.next = W.next, W.next = y), A.pending = y;
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
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ln(r, s), Bs(e, t), t.tag = 1, Lt(r) ? (e = !0, Es(t)) : e = !1, Ur(t, n), sc(t, r, s), Sl(t, r, s, n), Cl(null, t, r, !0, e, n);
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
  function Kh(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tn(e, t, n, r) {
    return new Kh(e, t, n, r);
  }
  function Gl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Gh(e) {
    if (typeof e == "function") return Gl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === $e) return 11;
      if (e === G) return 14;
    }
    return 2;
  }
  function rr(e, t) {
    var n = e.alternate;
    return n === null ? (n = tn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function qs(e, t, n, r, s, o) {
    var d = 2;
    if (r = e, typeof e == "function") Gl(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case M:
        return jr(n.children, s, o, t);
      case V:
        d = 8, s |= 8;
        break;
      case ne:
        return e = tn(12, n, t, s | 2), e.elementType = ne, e.lanes = o, e;
      case Te:
        return e = tn(13, n, t, s), e.elementType = Te, e.lanes = o, e;
      case Me:
        return e = tn(19, n, t, s), e.elementType = Me, e.lanes = o, e;
      case te:
        return ea(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ie:
            d = 10;
            break e;
          case Ee:
            d = 9;
            break e;
          case $e:
            d = 11;
            break e;
          case G:
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
  function ea(e, t, n, r) {
    return e = tn(22, e, r, t), e.elementType = te, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Wl(e, t, n) {
    return e = tn(6, e, null, t), e.lanes = n, e;
  }
  function Ql(e, t, n) {
    return t = tn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Wh(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ja(0), this.expirationTimes = ja(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ja(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function Yl(e, t, n, r, s, o, d, p, y) {
    return e = new Wh(e, t, n, p, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = tn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ol(o), e;
  }
  function Qh(e, t, n) {
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
            if (Lt(t.type)) {
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
      if (Lt(n)) return ju(e, n, t);
    }
    return t;
  }
  function Qc(e, t, n, r, s, o, d, p, y) {
    return e = Yl(n, r, !0, e, s, o, d, p, y), e.context = Wc(null), n = e.current, r = At(), s = tr(n), o = $n(r, s), o.callback = t ?? null, Xn(n, o, s), e.current.lanes = s, ci(e, s, r), It(e, r), e;
  }
  function ta(e, t, n, r) {
    var s = t.current, o = At(), d = tr(s);
    return n = Wc(n), t.context === null ? t.context = n : t.pendingContext = n, t = $n(o, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Xn(s, t, d), e !== null && (cn(e, s, d, o), Rs(e, s, d)), d;
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
  function Yh() {
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
      var t = $o();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && Fo(e);
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
  function Jh(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var A = na(d);
          o.call(A);
        };
      }
      var d = Qc(t, r, e, 0, null, !1, !1, "", Xc);
      return e._reactRootContainer = d, e[Tn] = d.current, Ei(e.nodeType === 8 ? e.parentNode : e), yr(), d;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof r == "function") {
      var p = r;
      r = function() {
        var A = na(y);
        p.call(A);
      };
    }
    var y = Yl(e, 0, !1, null, null, !1, !1, "", Xc);
    return e._reactRootContainer = y, e[Tn] = y.current, Ei(e.nodeType === 8 ? e.parentNode : e), yr(function() {
      ta(t, y, n, r);
    }), y;
  }
  function sa(e, t, n, r, s) {
    var o = n._reactRootContainer;
    if (o) {
      var d = o;
      if (typeof s == "function") {
        var p = s;
        s = function() {
          var y = na(d);
          p.call(y);
        };
      }
      ta(t, d, e, s);
    } else d = Jh(n, t, e, s, r);
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
  }, $o = function() {
    return He;
  }, Lo = function(e, t) {
    var n = He;
    try {
      return He = e, t();
    } finally {
      He = n;
    }
  }, Qt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Le(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var s = Ss(r);
              if (!s) throw Error(u(90));
              ae(r), Le(r, s);
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
  }, Fe = Ul, nt = yr;
  var Xh = { usingClientEntryPoint: !1, Events: [_i, Or, Ss, mn, Dn, Ul] }, Vi = { findFiberByHostInstance: cr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Zh = { bundleType: Vi.bundleType, version: Vi.version, rendererPackageName: Vi.rendererPackageName, rendererConfig: Vi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ts(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Vi.findFiberByHostInstance || Yh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var aa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!aa.isDisabled && aa.supportsFiber) try {
      rs = aa.inject(Zh), kn = aa;
    } catch {
    }
  }
  return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xh, Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zl(t)) throw Error(u(200));
    return Qh(e, t, null, n);
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
    return e = ts(t), e = e === null ? null : e.stateNode, e;
  }, Dt.flushSync = function(e) {
    return yr(e);
  }, Dt.hydrate = function(e, t, n) {
    if (!ia(t)) throw Error(u(200));
    return sa(null, e, t, !0, n);
  }, Dt.hydrateRoot = function(e, t, n) {
    if (!Zl(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, s = !1, o = "", d = Jc;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = Qc(t, null, e, 1, n ?? null, s, !1, o, d), e[Tn] = t.current, Ei(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
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
function lm() {
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
  return i(), to.exports = am(), to.exports;
}
var ad;
function om() {
  if (ad) return la;
  ad = 1;
  var i = lm();
  return la.createRoot = i.createRoot, la.hydrateRoot = i.hydrateRoot, la;
}
var um = om();
const cm = (() => {
  const i = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", u = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], f = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, m = 7, v = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], j = ["e", "B", "G", "D", "A", "E"], L = ["ohut e", "B", "G", "D", "A", "paksu E"], k = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], N = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], O = {
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
      base: N,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: N,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: N,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: N,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, F = 26, b = 72, w = 30, C = 54, D = 34, E = 11, P = (F + b) / 2, H = w + (c.length - 1) * D + 30, Z = (S) => b + S * C, ee = (S) => S === 0 ? P : Z(S) - C / 2, M = (S) => w + S * D;
  function V(S, B, I) {
    const q = a.indexOf(i[S][0]) + Number(I.slice(-1)) - 1, de = q % a.length, ae = u[de] + 12 * Math.floor(q / a.length), me = S + B - ae;
    return a[de] + (me < 0 ? "♭" : "♯").repeat(Math.abs(me));
  }
  function ne(S) {
    return [...S.base, ...S.add].sort((B, I) => B[0] - I[0]);
  }
  function ie(S, B, I) {
    const q = B + (I ? 1 : 0), de = v[q % v.length], ae = Math.min(...de.map(([Le]) => Le)), me = Math.max(...de.map(([, Le]) => Le));
    let je = (S - f % 12 + 12) % 12 - (I ? 8 : 5) + 12 * Math.floor(q / v.length);
    return ae + je < 0 && (je += 12), me + je > h.pentatonic && (je -= 12), {
      strings: de.map((Le) => Le.map((Ye) => Ye + je)),
      start: ae + je,
      end: me + je
    };
  }
  function Ee(S, B, I) {
    const q = I[B], de = (S + q - f % 12 + 12) % 12, ae = f + de - q, me = c.map((pe, Pe) => {
      const je = B + (c.length - 1 - Pe) * 3;
      return [je, je + 1, je + 2].map((Le) => {
        const Ye = Math.floor(Le / I.length), Be = I[Le % I.length];
        return ae + Be + 12 * Ye - pe;
      });
    });
    return {
      strings: me,
      start: Math.min(...me.map((pe) => pe[0])),
      end: Math.max(...me.map((pe) => pe.at(-1)))
    };
  }
  function $e(S, B) {
    const I = [], q = Math.ceil(-S.end / 12) * 12;
    for (let ae = q; S.start + ae <= B; ae += 12) {
      const me = S.strings.map((Pe) => Pe.map((je) => je + ae).filter((je) => je >= 0 && je <= B)), pe = me.flat();
      I.push({
        strings: me,
        start: Math.min(...pe),
        end: Math.max(...pe),
        partial: S.start + ae < 0 || S.end + ae > B
      });
    }
    const de = I.filter((ae) => !ae.partial);
    return de.length ? de : I;
  }
  function Te(S) {
    return ne(S).length === m;
  }
  function Me(S, B, I) {
    const q = Te(B);
    S.querySelector('[value="3nps"]').disabled = !q, S.value = q ? I ?? "3nps" : "pentatonic";
  }
  function G(S, B, I, q, de) {
    const ae = ne(B).map(([me]) => me);
    return q.map((me) => {
      const pe = me - 1, Pe = I === "3nps" ? Ee(S, pe, ae) : ie(S, pe, B.base === N), je = de === void 0 ? [Pe] : $e(Pe, de);
      return { number: me, positions: je };
    });
  }
  function oe(S, B) {
    const I = S.getBoundingClientRect(), q = S.querySelectorAll(B);
    let de = 1 / 0;
    q.forEach((ae) => {
      const me = ae.getBoundingClientRect();
      let pe = 0;
      me.left < I.left ? pe = me.left - I.left - 8 : me.right > I.right && (pe = me.right - I.right + 8), Math.abs(pe) < Math.abs(de) && (de = pe);
    }), Number.isFinite(de) && (S.scrollLeft += de);
  }
  function te(S, B = !1) {
    const I = S === "3nps" ? m : v.length;
    return Array.from({ length: I }, (q, de) => {
      const ae = de + 1;
      return '<label class="box-toggle" data-box="' + ae + '"><input type="checkbox" value="' + ae + '"' + (B && de === 0 ? " checked" : "") + "> Boksi " + ae + "</label>";
    }).join("");
  }
  function R(S, B) {
    const I = ne(B), q = new Map(I.map(([ae, me]) => [ae, V(S, ae, me)])), de = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return I.flatMap(([ae, me]) => de.flatMap(({ suffix: pe, base: Pe }) => {
      const je = Pe.map(([Le]) => q.get((ae + Le) % 12));
      return je.every(Boolean) ? {
        root: (S + ae) % 12,
        degree: Number(String(me).replace(/\D/g, "")),
        name: je[0] + pe,
        notes: je,
        base: Pe,
        add: []
      } : [];
    }));
  }
  function Q(S, B) {
    const I = S.base.map(([ae]) => (S.root + ae) % 12), q = c.map((ae) => {
      const me = [];
      for (let pe = 0; pe <= B; pe++) {
        const Pe = (ae + pe) % 12;
        I.includes(Pe) && me.push({ fret: pe, pitch: Pe });
      }
      return me;
    }), de = [];
    for (let ae = 0; ae <= q.length - 3; ae++)
      for (const me of q[ae])
        for (const pe of q[ae + 1])
          if (me.pitch !== pe.pitch)
            for (const Pe of q[ae + 2]) {
              if (Pe.pitch === me.pitch || Pe.pitch === pe.pitch) continue;
              const je = [me.fret, pe.fret, Pe.fret], Le = Math.min(...je), Ye = Math.max(...je);
              if (Ye - Le > 3) continue;
              const Be = Array(c.length).fill(null);
              Be.splice(ae, 3, ...je), de.push({ strings: Be, low: Le, high: Ye });
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
  function z(S, B) {
    const I = J[S + ":" + B];
    if (I) return { frets: I, barre: null };
    let q = null;
    return g.forEach(({ string: de, openPC: ae, shapes: me }) => {
      const pe = me[B];
      if (!pe) return;
      let Pe = (S - ae + 12) % 12;
      if (Pe + Math.min(...pe.filter((Ye) => Ye !== null)) < 0 && (Pe += 12), q && q.fret <= Pe) return;
      const je = pe.map((Ye) => Ye === null ? null : Pe + Ye), Le = Pe > 0 && pe.at(-1) === 0 ? { fret: Pe, from: de, to: pe.length - 1 } : null;
      q = { fret: Pe, frets: je, barre: Le };
    }), q && { frets: q.frets, barre: q.barre };
  }
  function ve(S, { frets: B, barre: I }, q) {
    const je = [...c].reverse(), Le = B.filter((be) => be > 0), Be = !Le.length || Math.max(...Le) <= 4 && (B.includes(0) || Math.min(...Le) === 1) ? 1 : Math.min(...Le), Ge = (be) => 24 + be * 14, Ue = (be) => 30 + (be - Be) * 18 + 18 / 2, yt = 102;
    let Je = '<svg class="chord-svg" viewBox="0 0 108 ' + (yt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + q + "-ote paksusta kielestä ohueen: " + B.map((be) => be ?? "x").join(" ") + '">';
    for (let be = 0; be <= 4; be++)
      Je += '<line class="' + (be === 0 && Be === 1 ? "nut" : "fret") + '" x1="' + Ge(0) + '" y1="' + (30 + be * 18) + '" x2="' + Ge(5) + '" y2="' + (30 + be * 18) + '"/>';
    return B.forEach((be, tt) => {
      Je += '<line class="string" x1="' + Ge(tt) + '" y1="30" x2="' + Ge(tt) + '" y2="' + yt + '"/>';
    }), Be > 1 && (Je += '<text class="fret-label" x="15" y="' + (Ue(Be) + 4) + '">' + Be + "</text>"), I && (Je += '<rect class="barre" x="' + (Ge(I.from) - 6.5) + '" y="' + (Ue(I.fret) - 6.5) + '" width="' + ((I.to - I.from) * 14 + 13) + '" height="13" rx="6.5"/>'), B.forEach((be, tt) => {
      if (be === null) {
        Je += '<text class="marker" x="' + Ge(tt) + '" y="22">×</text>';
        return;
      }
      const Tt = (je[tt] + be) % 12 === S;
      if (be === 0) {
        Je += '<circle class="open' + (Tt ? " root-open" : "") + '" cx="' + Ge(tt) + '" cy="18" r="4.5"/>';
        return;
      }
      I && be === I.fret && tt >= I.from && tt <= I.to && !Tt || (Je += '<circle class="' + (Tt ? "root" : "tone") + '" cx="' + Ge(tt) + '" cy="' + Ue(be) + '" r="6.5"/>');
    }), Je + "</svg>";
  }
  function we(S, B) {
    const I = new URLSearchParams(location.search), q = i.indexOf(I.get("toonikka")), de = I.get("asteikko");
    return {
      rootPC: q === -1 ? S : q,
      scaleId: Object.hasOwn(O, de) ? de : B
    };
  }
  function _e(S, B, I) {
    return S + "?" + new URLSearchParams({ toonikka: i[B], asteikko: I });
  }
  function Ne(S, B, I, {
    boxes: q = [],
    onlyBoxNotes: de = !1,
    automatic: ae = !0,
    focusDegree: me = "",
    grip: pe = null,
    barre: Pe = null,
    label: je = i[S] + " " + B.name,
    notes: Le = null,
    targets: Ye = !1,
    muteFret: Be = null
  } = {}) {
    const Ge = Z(I), Ue = Ge + 48, yt = Ue + 28, Je = w - 14, be = M(c.length - 1) + 14, tt = be - Je, Tt = ae ? 680 : Math.ceil(yt * 0.64), Kt = q.flatMap((Se) => Se.positions), zt = {};
    B.base.forEach(([Se, Re]) => zt[(S + Se) % 12] = { deg: Re, added: !1 }), B.add.forEach(([Se, Re]) => zt[(S + Se) % 12] = { deg: Re, added: !0 });
    const nn = c.map((Se, Re) => !!pe && pe[Re] === null), Gt = !!pe && Be !== null, ct = L.filter((Se, Re) => nn[Re]).reverse(), In = je + ". " + I + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (ct.length ? " Soittamatta jäävät kielet: " + ct.join(", ") + "." : "");
    let ke = '<svg viewBox="0 0 ' + yt + " " + H + '" style="min-width:' + Tt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Ye ? "group" : "img") + '" aria-label="' + In + '">';
    ke += '<rect x="' + F + '" y="' + Je + '" width="' + (b - F) + '" height="' + tt + '" rx="6" fill="#2a2338"/>', ke += '<rect x="' + b + '" y="' + Je + '" width="' + (Ge - b) + '" height="' + tt + '" fill="#231a12"/>', ke += '<rect x="' + Ge + '" y="' + Je + '" width="' + (yt - Ge - 4) + '" height="' + tt + '" rx="8" fill="#32251e"/>';
    for (let Se = 1; Se <= I; Se++)
      ke += '<line x1="' + Z(Se) + '" y1="' + Je + '" x2="' + Z(Se) + '" y2="' + be + '" stroke="#6f5b47" stroke-width="2"/>';
    ke += '<rect x="' + (b - 3) + '" y="' + Je + '" width="6" height="' + tt + '" rx="2" fill="#d8cbb6"/>', ke += '<rect x="' + (Ue - 11) + '" y="' + (Je + 3) + '" width="22" height="' + (tt - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', ke += '<rect x="' + (Ue - 4) + '" y="' + (Je + 7) + '" width="3" height="' + (tt - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Wt = (Je + be) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Se) => Se <= I).forEach((Se) => ke += '<circle cx="' + ee(Se) + '" cy="' + Wt + '" r="5.5" fill="#7a6550"/>');
    for (let Se = 12; Se <= I; Se += 12)
      ke += '<circle cx="' + ee(Se) + '" cy="' + (Wt - D) + '" r="5.5" fill="#7a6550"/>', ke += '<circle cx="' + ee(Se) + '" cy="' + (Wt + D) + '" r="5.5" fill="#7a6550"/>';
    ke += '<text x="' + P + '" y="' + (H - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', ke += '<text x="' + b + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', ke += '<text x="' + Ue + '" y="' + (H - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Se = 1; Se <= I; Se++)
      ke += '<text x="' + ee(Se) + '" y="' + (H - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Se + "</text>";
    if (q.forEach(({ number: Se, positions: Re }) => {
      Re.forEach((Ae) => {
        const We = Ae.partial ? "box-highlight box-partial" : "box-highlight";
        ke += '<g class="' + We + '" data-box="' + Se + '" aria-hidden="true">';
        const Ze = Ae.strings.find((gt) => gt.length), Qt = (ee(Ze[0]) + ee(Ze.at(-1))) / 2;
        ke += '<text class="box-number" x="' + Qt + '" y="12">' + Se + "</text>", Ae.strings.forEach((gt, bt) => {
          if (!gt.length) return;
          const hn = ee(gt[0]) - 16, mn = ee(gt.at(-1)) - ee(gt[0]) + 32;
          ke += '<rect class="box-band" x="' + hn + '" y="' + (M(bt) - 14) + '" width="' + mn + '" height="28" rx="14"/>';
        }), ke += "</g>";
      });
    }), c.forEach((Se, Re) => {
      const Ae = 1 + Re * 0.45, We = M(Re), Ze = nn[Re] && !Gt;
      Ze ? ke += '<text class="muted-mark" x="' + P + '" y="' + (We + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : nn[Re] && Be === 0 || (ke += '<line x1="' + (F + 4) + '" y1="' + We + '" x2="' + (b - 4) + '" y2="' + We + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), ke += "<g" + (Ze ? ' opacity=".35"' : "") + ">", ke += '<line x1="' + b + '" y1="' + We + '" x2="' + (Ue + 5) + '" y2="' + We + '" stroke="#b9b9c4" stroke-width="' + Ae.toFixed(2) + '"/>', ke += '<circle cx="' + (Ue + 5) + '" cy="' + We + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', ke += "</g>", ke += '<text x="13" y="' + (We + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + j[Re] + "</text>";
    }), pe && Pe && Pe.fret >= 1 && Pe.fret <= I) {
      const Se = M(Pe.from), Re = M(Pe.to), Ae = Math.min(Se, Re) - 6, We = Math.max(Se, Re) + 6;
      ke += '<rect class="barre-indicator" x="' + (ee(Pe.fret) - 7) + '" y="' + Ae + '" width="14" height="' + (We - Ae) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Ye && (ke += '<g class="fret-targets">', c.forEach((Se, Re) => {
      for (let Ae = 0; Ae <= I; Ae++) {
        const We = Ae ? L[Re] + "-kieli, " + Ae + ". nauha" : "vapaa " + L[Re] + "-kieli", Ze = Ae ? C : b - F - 6;
        ke += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Re + '" data-fret="' + Ae + '" data-midi="' + (Se + Ae) + '" aria-label="' + We + '" x="' + (ee(Ae) - Ze / 2) + '" y="' + (M(Re) - D / 2) + '" width="' + Ze + '" height="' + D + '" fill="transparent"/>';
      }
    }), ke += "</g>"), (Le ?? []).forEach(({ string: Se, fret: Re, label: Ae, kind: We }) => {
      ke += '<g class="octave-note octave-' + We + '">', ke += '<circle cx="' + ee(Re) + '" cy="' + M(Se) + '" r="' + E + '"/>', ke += '<text x="' + ee(Re) + '" y="' + (M(Se) + 3.5) + '" font-size="' + (Ae.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Ae + "</text>", ke += "</g>";
    }), pe && (ke += '<g class="grip-notes">'), (Le ? [] : c).forEach((Se, Re) => {
      for (let Ae = 0; Ae <= I; Ae++) {
        const We = (Se + Ae) % 12;
        if (!(We in zt) || pe && pe[Re] !== Ae || de && !Kt.some(({ strings: mn }) => {
          const Dn = mn[Re];
          return Dn.length > 0 && Ae >= Dn[0] && Ae <= Dn.at(-1);
        })) continue;
        const Ze = zt[We], Qt = Ze.deg === "1", gt = Ze.added ? "#f0a13c" : Qt ? "#4b2fd6" : "#6d4aff", bt = Ze.added ? "#1a1430" : "#fff";
        Ze.deg === me && (ke += '<circle class="focus-note" cx="' + ee(Ae) + '" cy="' + M(Re) + '" r="14.5"/>');
        const hn = pe ? ' data-string="' + (Re + 1) + '" data-fret="' + Ae + '" data-degree="' + Ze.deg + '"' : "";
        ke += "<circle" + hn + ' cx="' + ee(Ae) + '" cy="' + M(Re) + '" r="' + E + '" fill="' + gt + '" stroke="' + (Qt ? "#fff" : "#1a1430") + '" stroke-width="' + (Qt ? 2.5 : 1) + '"/>', ke += '<text x="' + ee(Ae) + '" y="' + (M(Re) + 3.5) + '" font-size="' + (Ze.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + bt + '" text-anchor="middle">' + Ze.deg + "</text>";
      }
    }), pe && (ke += "</g>"), Gt && nn.forEach((Se, Re) => {
      if (!Se) return;
      const Ae = ee(Be), We = M(Re);
      ke += '<g class="muted-mark grip-mute" data-string="' + (Re + 1) + '" data-fret="' + Be + '">', ke += '<circle cx="' + Ae + '" cy="' + We + '" r="9" fill="' + (Be === 0 ? "#2a2338" : "#231a12") + '"/>', ke += '<text x="' + Ae + '" y="' + (We + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', ke += "</g>";
    }), ke += "</svg>", ke;
  }
  return {
    CHROM: i,
    OPEN_PITCHES: c,
    PENT_MAJ: N,
    SCALES: O,
    noteName: V,
    scaleNotes: ne,
    scaleTriads: R,
    triadGrips: Q,
    chordGrip: z,
    renderChordDiagram: ve,
    selectionFromURL: we,
    selectionHref: _e,
    renderBoard: Ne,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: Te,
    syncBoxSystem: Me,
    fingeringBoxes: G,
    boxOptions: te,
    revealPositions: oe
  };
})();
globalThis.MusicMapFretboard = cm;
function ld(i) {
  return 440 * Math.pow(2, (i - 69) / 12);
}
function dm(i) {
  return 69 + 12 * Math.log2(i / 440);
}
function fm(i) {
  const a = dm(i), u = Math.round(a), c = (a - u) * 100;
  return { midi: u, cents: c };
}
const ze = globalThis.MusicMapFretboard, Ke = (i) => (i % 12 + 12) % 12, hm = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], mm = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ie = (i, a = !1, u = !1) => (a ? mm : hm)[Ke(i)] + (u ? Math.floor(i / 12) - 1 : ""), ar = (i) => ze.CHROM[Ke(i)], Ki = (i, a, u) => ze.noteName(Ke(i), a, u);
function pm(i, a) {
  const u = Math.floor(i / 12) - 1;
  return a[0] === "B" && Ke(i) < 2 ? u - 1 : a[0] === "C" && Ke(i) > 9 ? u + 1 : u;
}
const fn = ["ohut E", "B", "G", "D", "A", "paksu E"], wo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Dd = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], vm = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Er = (i) => i === 0 ? "vapaa kieli" : `${i}. nauha`, va = (i, a) => ({ string: i, fret: a, midi: ze.OPEN_PITCHES[i] + a });
function si(i, a, u) {
  return [...i].sort((c, f) => c - f).flatMap((c) => Array.from({ length: Math.max(0, u - a + 1) }, (f, h) => va(c, a + h)));
}
const it = (i) => `${i.string}:${i.fret}`, wr = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, zd = (i, a) => a === "maj" ? `${ar(i)}-duurisointu` : a === "min" ? `${ar(i)}-mollisointu` : `${ar(i)}7-sointu`, Gi = [
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
}, sr = (i, a, u, c) => typeof i == "number" && Number.isFinite(i) ? Math.max(a, Math.min(u, i)) : c, Sn = (i, a, u) => a.includes(i) ? i : u;
function ma(i) {
  const a = { ...da };
  a.mode = Sn(i.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(i.strings) ? [...new Set(i.strings.filter((u) => Number.isInteger(u) && u >= 0 && u <= 5))].sort((u, c) => u - c) : a.strings, a.strings.length || (a.strings = [...da.strings]), a.min = Math.round(sr(i.min, 0, 24, a.min)), a.max = Math.round(sr(i.max, a.min, 24, Math.max(a.min, a.max)));
  for (const u of ["accidentals", "flats", "weak", "advance", "reference"]) typeof i[u] == "boolean" && (a[u] = i[u]);
  return a.check = Sn(i.check, ["class", "pitch"], a.check), a.input = Sn(i.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(i.rounds) ? i.rounds : a.rounds, a.root = Math.round(sr(i.root, 0, 11, a.root)), a.scale = typeof i.scale == "string" && Object.hasOwn(ze.SCALES, i.scale) ? i.scale : a.scale, a.box = Math.round(sr(i.box, 0, 5, a.box)), a.order = Sn(i.order, ["random", "up", "down"], a.order), a.chord = Sn(i.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = Sn(i.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = Sn(i.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(i.intervals) ? [...new Set(i.intervals.filter((u) => Number.isInteger(u) && u >= 1 && u <= 12))].sort((u, c) => u - c) : a.intervals, a.intervals.length || (a.intervals = [...da.intervals]), a.direction = Sn(i.direction, ["up", "down", "both"], a.direction), a.hints = Sn(i.hints, ["off", "always", "fade"], a.hints), a.activity = Sn(i.activity, ["play", "degree"], a.activity), a.minRms = sr(i.minRms, 1e-3, 0.15, a.minRms), a.clarity = sr(i.clarity, 0.85, 0.99, a.clarity), a.stability = sr(i.stability, 120, 800, a.stability), a.cents = sr(i.cents, 10, 45, a.cents), a.device = typeof i.device == "string" ? i.device.slice(0, 256) : "", a;
}
function km(i, a) {
  const u = new URLSearchParams(i), c = { ...a };
  for (const [f, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    u.has(f) && Object.assign(c, { [h]: u.get(f) });
  for (const [f, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    u.has(f) && (c[h] = Number(u.get(f)));
  u.has("kielet") && (c.strings = u.get("kielet").split(",").map((f) => Number(f) - 1)), u.has("intervallit") && (c.intervals = u.get("intervallit").split(",").map(Number));
  for (const [f, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    u.has(f) && (c[h] = u.get(f) === "1");
  if (u.has("toonikka")) {
    const f = u.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = f.charAt(0).toUpperCase() + f.slice(1), m = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], v = Math.max(ze.CHROM.indexOf(h), m.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    v >= 0 && (c.root = v);
  }
  return ma(c);
}
function ym(i) {
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
    kielet: i.strings.map((a) => a + 1).join(","),
    intervallit: i.intervals.join(","),
    kromaattinen: i.accidentals ? "1" : "0",
    alennukset: i.flats ? "1" : "0",
    kertaus: i.weak ? "1" : "0",
    vertailu: i.reference ? "1" : "0"
  });
}
const Nr = (i) => i.mode === "ear-note" ? "note" : ["scale", "chord"].includes(i.mode) && i.activity === "degree" ? "degree" : i.input, Fn = (i) => i.mode === "scale" && i.order !== "random", Vd = (i) => ["note", "degree"].includes(Nr(i)) ? "class" : Fn(i) ? "pitch" : i.check, oa = (i) => Nr(i) === "mic", ud = "musiikin-kartta:harjoittelu", Bd = 3, oo = () => ({ version: Bd, settings: { ...da }, stats: {}, recent: [], sessions: [] }), Ud = (i) => `${i.input}:${i.check}:${i.hint ? "guided" : "solo"}:${i.item}`, dn = (i) => typeof i == "number" && Number.isFinite(i) && i >= 0;
function gm(i) {
  return !!i && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => dn(i[a])) && i.correct <= i.attempts && (i.errors === void 0 || dn(i.errors)) && (i.ema === void 0 || dn(i.ema) && i.ema <= 1) && (i.emaMs === void 0 || dn(i.emaMs));
}
function xm(i) {
  return !!i && typeof i.id == "string" && dn(i.count) && dn(i.first) && i.first <= i.count && dn(i.ms) && dn(i.at) && (i.solo === void 0 || dn(i.solo) && i.solo <= i.count) && (i.soloFirst === void 0 || dn(i.soloFirst) && i.soloFirst <= (i.solo ?? i.count));
}
function cd(i) {
  if (!i) return oo();
  const a = JSON.parse(i);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((m) => !gm(m))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((m) => !m || typeof m.id != "string" || !dn(m.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((m) => !xm(m)))) throw new Error("Virheellisiä kierroksia");
  const u = a.version < 3, c = ma(a.settings ?? {}), f = u && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  f && (c.hints = "off");
  const h = {
    version: Bd,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([m, v]) => [m, { ...v, errors: v.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (f || a.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const dd = 2500, jm = 8e3, fd = 0.3, Wi = (i) => i.ema ?? i.correct / i.attempts, Qi = (i) => i.emaMs ?? i.totalMs / i.attempts;
function Eo(i) {
  if (!i?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (Qi(i) - dd) / (jm - dd)));
  return Wi(i) * 0.65 + a * 0.35;
}
function Sm(i) {
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
      ema: c.attempts ? Wi(c) + fd * (f - Wi(c)) : f,
      emaMs: c.attempts ? Qi(c) + fd * (a.ms - Qi(c)) : a.ms
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
    this.data = { ...oo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const wm = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Em = ["e", "B", "G", "D", "A", "E"];
function Hd({ string: i }) {
  return /* @__PURE__ */ l.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ l.jsxs("span", { children: [
      i + 1,
      " · ",
      /* @__PURE__ */ l.jsx("strong", { children: Em[i] })
    ] }),
    i === 0 ? /* @__PURE__ */ l.jsx("small", { children: "ohuin" }) : i === 5 ? /* @__PURE__ */ l.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Kd = (i) => ({ "--string-thickness": 1.25 + i * 0.45 + "px" }), Nm = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Gd({ min: i, max: a }) {
  return /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
    /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - i + 1 }, (u, c) => {
      const f = i + c;
      return /* @__PURE__ */ l.jsxs("th", { scope: "col", className: f === 0 ? "open-fret" : "", children: [
        f,
        f > 0 && f % 12 === 0 ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : wm.has(f) ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, f);
    })
  ] }) });
}
function Yi({ area: i, marks: a = [], mutedStrings: u = [], disabled: c = !1, onAnswer: f, caption: h = "Otelauta" }) {
  const m = { "--cols": i.max - i.min + 1 }, { strings: v, min: j, max: L } = i, [k, N] = U.useState({ string: Math.min(...v), fret: j }), O = U.useRef(null), F = new Map(a.map((E) => [it(E), E])), b = a.map((E) => `${it(E)}${E.kind}`).join(",");
  U.useEffect(() => {
    const E = O.current, P = E?.querySelector(".target, .anchor");
    E && P && (E.scrollLeft += P.getBoundingClientRect().left - E.getBoundingClientRect().left - E.clientWidth / 2 + P.clientWidth / 2);
  }, [b]);
  const [w, C] = U.useState({ left: !1, right: !1 });
  U.useEffect(() => {
    const E = O.current;
    if (!E) return;
    const P = () => {
      const Z = E.scrollLeft > 2, ee = E.scrollLeft + E.clientWidth < E.scrollWidth - 2;
      C((M) => M.left === Z && M.right === ee ? M : { left: Z, right: ee });
    };
    P(), E.addEventListener("scroll", P, { passive: !0 });
    const H = typeof ResizeObserver > "u" ? null : new ResizeObserver(P);
    return H?.observe(E), () => {
      E.removeEventListener("scroll", P), H?.disconnect();
    };
  }, [b, j, L]);
  const D = v.includes(k.string) && k.fret >= j && k.fret <= L ? k : { string: Math.min(...v), fret: j };
  return /* @__PURE__ */ l.jsxs("div", { className: "fret-wrap" + (w.left ? " more-left" : "") + (w.right ? " more-right" : ""), children: [
    (w.left || w.right) && /* @__PURE__ */ l.jsxs("p", { className: "fret-scroll-hint", children: [
      w.left && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      w.left && w.right ? "molemmilla puolilla" : w.right ? "oikealla" : "vasemmalla",
      w.right && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { ref: O, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board", style: m, children: [
      /* @__PURE__ */ l.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ l.jsx(Gd, { min: j, max: L }),
      /* @__PURE__ */ l.jsx("tbody", { children: ze.OPEN_PITCHES.map((E, P) => /* @__PURE__ */ l.jsxs("tr", { className: v.includes(P) ? "" : "unused", style: Kd(P), children: [
        /* @__PURE__ */ l.jsxs("th", { scope: "row", "aria-label": `${P + 1}. kieli: ${fn[P]}${u.includes(P) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ l.jsx(Hd, { string: P }),
          u.includes(P) && /* @__PURE__ */ l.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        si([P], j, L).map((H) => {
          const Z = F.get(it(H)), ee = `${fn[P]}-kieli, ${Er(H.fret)}`;
          return /* @__PURE__ */ l.jsx("td", { className: `${H.fret === 0 ? "open-fret " : ""}${Z ? Z.kind === "answer" ? "target" : Z.kind : ""}`, children: /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "data-string": P,
              "data-fret": H.fret,
              tabIndex: D.string === P && D.fret === H.fret ? 0 : -1,
              onFocus: () => N(H),
              onKeyDown: (M) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(M.key)) return;
                M.preventDefault();
                const V = [...v].sort(($e, Te) => $e - Te), ne = V.indexOf(P), ie = M.key === "ArrowUp" ? V[Math.max(0, ne - 1)] : M.key === "ArrowDown" ? V[Math.min(V.length - 1, ne + 1)] : P, Ee = M.key === "Home" ? j : M.key === "End" ? L : Math.max(j, Math.min(L, H.fret + (M.key === "ArrowRight" ? 1 : M.key === "ArrowLeft" ? -1 : 0)));
                M.currentTarget.closest("table")?.querySelector(`button[data-string="${ie}"][data-fret="${Ee}"]`)?.focus();
              },
              disabled: c || !v.includes(P),
              "aria-label": ee + (Z ? `, ${Nm[Z.kind]}${Z.label ? " " + Z.label : ""}` : ""),
              onClick: () => f?.(H),
              children: Z ? /* @__PURE__ */ l.jsx("span", { className: "dot", children: Z.label || "●" }) : null
            }
          ) }, H.fret);
        })
      ] }, P)) })
    ] }) })
  ] });
}
function Cm({ area: i, stats: a, input: u, check: c, flats: f }) {
  const { strings: h, min: m, max: v } = i, j = `${u}:${c}:solo:notes:`;
  return /* @__PURE__ */ l.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board mastery", style: { "--cols": v - m + 1 }, children: [
    /* @__PURE__ */ l.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ l.jsx(Gd, { min: m, max: v }),
    /* @__PURE__ */ l.jsx("tbody", { children: ze.OPEN_PITCHES.map((L, k) => /* @__PURE__ */ l.jsxs("tr", { className: h.includes(k) ? "" : "unused", style: Kd(k), children: [
      /* @__PURE__ */ l.jsx("th", { scope: "row", "aria-label": `${k + 1}. kieli: ${fn[k]}`, children: /* @__PURE__ */ l.jsx(Hd, { string: k }) }),
      si([k], m, v).map((N) => {
        const O = Object.hasOwn(a, j + it(N)) ? a[j + it(N)] : void 0, F = Eo(O), b = F === null ? "unseen" : O.attempts < 3 ? "few" : F >= 0.8 ? "strong" : F >= 0.5 ? "growing" : "weak", w = `${fn[k]}-kieli, ${Er(N.fret)}, ${Ie(N.midi, f)}`, C = O ? `${Math.round(F * 100)} %, ${O.correct}/${O.attempts} heti oikein, viime aikoina ${Math.round(Wi(O) * 100)} % ja ${(Qi(O) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ l.jsxs("td", { className: `${N.fret === 0 ? "open-fret " : ""}${b}`, title: `${w}: ${C}`, children: [
          /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: F === null ? "·" : O.attempts < 3 ? "?" : Math.round(F * 100) }),
          /* @__PURE__ */ l.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            C
          ] })
        ] }, N.fret);
      })
    ] }, k)) })
  ] }) });
}
const _m = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", ya = (i) => i.mode === "scale" ? ze.scaleNotes(ze.SCALES[i.scale]) : wr[i.mode === "caged" ? "maj" : i.chord].tones, Wd = (i) => ze.fingeringBoxes(i.root, ze.SCALES[i.scale], "pentatonic", [i.box])[0].positions[0];
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
function Tm(i) {
  const a = Cr(i);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function Xi(i) {
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
function Mm(i) {
  const a = ya(i);
  return i.mode !== "chord" || i.chordTone === "random" ? [] : i.chordTone === "build" ? a : a.filter(([, u]) => u.endsWith(i.chordTone));
}
function uo(i) {
  const a = Xi(i), u = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return i.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${i.box ? "Valitse lisää kieliä tai toinen boksi." : u}` : i.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${u}` : i.mode !== "interval" && !i.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${u}`;
  const c = Mm(i).filter(([f]) => !a.some((h) => Ke(h.midi - i.root) === f));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, f]) => f + ". aste").join(" ja ")}. ${u}` : i.mode === "interval" && !Qd(i, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Fn(i) && new Set(a.map((f) => f.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${u}` : null;
}
function Pm(i, a) {
  const u = [...new Map([...a].sort((c, f) => c.midi - f.midi || c.string - f.string).map((c) => [c.midi, c])).values()];
  return i.order === "down" ? u.reverse() : u;
}
function Yd(i) {
  return Fn(i) ? new Set(Xi(i).map((a) => a.midi)).size : i.rounds;
}
function Am(i, a) {
  return i.hints === "always" ? 2 : i.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function Jr(i, a, u = Math.random) {
  if (!i.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((m, v) => m + v, 0), f = Math.min(0.999999999, Math.max(0, u()));
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
function Rm(i, a, u = {}, c, f = Math.random) {
  const h = uo(i);
  if (h) throw new Error(h);
  const m = Vd(i), v = Nr(i), j = m === "pitch", L = (M) => i.weak ? Sm(u[Ud({ input: v, check: m, hint: !1, item: M })]) : 1, k = (M) => Jr(M, M.map(() => 1), f), N = Xi(i), O = { check: m, sound: [], choices: "position" };
  if (i.mode === "notes") {
    const M = Sr(N, (ie) => !!c && it(ie) === it(c.position)), V = Jr(M, M.map((ie) => L(`notes:${it(ie)}`)), f), ne = Ie(V.midi, i.flats, j);
    return {
      ...O,
      position: V,
      midi: V.midi,
      name: ne,
      item: `notes:${it(V)}`,
      prompt: `Etsi ${ne} ${wo[V.string]}.`
    };
  }
  if (i.mode === "ear-note") {
    const M = (Ee) => `ear-note:${Ke(Ee.midi)}${i.reference ? ":ref" : ""}`, V = Sr(N, (Ee) => !!c && Ke(Ee.midi) === Ke(c.midi)), ne = Jr(V, V.map((Ee) => L(M(Ee))), f), ie = i.reference ? 57 + 12 * Math.round((ne.midi - 57) / 12) : void 0;
    return {
      ...O,
      position: ne,
      midi: ne.midi,
      name: Ie(ne.midi, i.flats),
      item: M(ne),
      choices: "note",
      reference: ie,
      sound: ie === void 0 ? [ne.midi] : [ie, ne.midi],
      prompt: i.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (i.mode === "repeat") {
    const M = Sr(N, (ne) => !!c && ne.midi === c.midi), V = Jr(M, M.map((ne) => L(`repeat:${ne.midi}`)), f);
    return {
      ...O,
      position: V,
      midi: V.midi,
      name: Ie(V.midi, i.flats, !0),
      item: `repeat:${V.midi}`,
      sound: [V.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (i.mode === "interval") {
    const M = Sr(Qd(i, N), (ie) => c?.interval === ie.iv && c?.direction === ie.direction), V = Jr(M, M.map((ie) => L(`interval:${ie.iv}:${ie.direction}`)), f), ne = k(Sr(V.pairs, (ie) => c?.reference === ie.reference.midi));
    return {
      ...O,
      position: ne.target,
      midi: ne.target.midi,
      name: Ie(ne.target.midi, i.flats, !0),
      item: `interval:${V.iv}:${V.direction}`,
      interval: V.iv,
      direction: V.direction,
      reference: ne.reference.midi,
      sound: [ne.reference.midi, ne.target.midi],
      prompt: `Kuulet ${V.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ie(ne.reference.midi, i.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const F = ya(i);
  let b, w = 0;
  if (Fn(i)) {
    const M = Pm(i, N);
    w = M.length, b = M[a % M.length];
  } else {
    const M = F.filter(([ie]) => N.some((Ee) => Ke(Ee.midi - i.root) === ie)), V = i.mode === "chord" && i.chordTone !== "random" ? i.chordTone === "build" ? [F[a % F.length]] : F.filter(([, ie]) => ie.endsWith(i.chordTone)) : Sr(M, ([ie]) => c?.interval === ie), [ne] = Jr(V, V.map(([ie]) => L(md(i, ie))), f);
    b = k(Sr(N.filter((ie) => Ke(ie.midi - i.root) === ne), (ie) => !!c && it(ie) === it(c.position)));
  }
  const C = Ke(b.midi - i.root), D = F.find(([M]) => M === C)[1], E = Ki(i.root, C, D), P = j ? E + pm(b.midi, E) : E, H = i.mode === "scale" ? `${ar(i.root)}-${ze.SCALES[i.scale].name}${i.box ? `, boksi ${i.box}` : ""}` : i.mode === "caged" ? `${ar(i.root)}-duurisointu, ${i.shape}-muoto` : zd(i.root, i.chord), Z = i.mode !== "caged" && i.activity === "degree", ee = Z ? `${H}: mikä aste on ${E}?` : w ? `${H} ${i.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % w + 1}/${w}: ${D}. aste (${P}).` : `${H}: etsi ${D}. aste${j ? ` (${P})` : ""}.`;
  return {
    ...O,
    position: b,
    midi: b.midi,
    name: P,
    item: md(i, C),
    prompt: ee,
    degree: D,
    interval: C,
    choices: Z ? "degree" : "position"
  };
}
function co(i, a, u) {
  return Number.isInteger(a) && (u === "class" ? Ke(i) === Ke(a) : i === a);
}
function Jd(i, a, u) {
  return co(a.midi, u.midi, a.check) ? i.mode === "notes" ? u.string === a.position.string : _m(i) ? Xi(i).some((c) => it(c) === it(u)) : !0 : !1;
}
function $m(i, a) {
  const u = Cr(i);
  return si(u.strings, u.min, u.max).filter((c) => Jd(i, a, c));
}
const wt = (i, a, u) => ({ ...i, label: a, kind: u }), Lm = (i) => i.charAt(0).toUpperCase() + i.slice(1);
function Om(i, a, u) {
  if (u <= 0) return { marks: [], text: "" };
  const c = u >= 2, f = Cr(i), h = si(f.strings, f.min, f.max), m = $m(i, a);
  if (i.mode === "notes") {
    if (c) return { marks: m.map((D) => wt(D, a.name, "answer")), text: `${a.name} on ${Dd[a.position.string]}: ${Er(a.position.fret)}.` };
    const w = h.find((D) => D.string === a.position.string), C = Ie(w.midi, i.flats);
    return {
      marks: [wt(w, C, "anchor")],
      text: `Apupiste: ${vm[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${C}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (i.mode === "ear-note")
    return c ? { marks: [wt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [wt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${fn[a.position.string]}-kieli, ${Er(a.position.fret)}.` };
  if (i.mode === "repeat")
    return c ? { marks: m.map((w) => wt(w, Ie(w.midi, i.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${wo[a.position.string]}.` };
  if (i.mode === "interval") {
    const w = Ie(a.reference, i.flats, !0), C = h.filter((D) => D.midi === a.reference).map((D) => wt(D, w, "anchor"));
    return c ? {
      marks: [...C, ...m.map((D) => wt(D, Ie(D.midi, i.flats, !0), "answer"))],
      text: `${Lm(Gi[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${a.name}.`
    } : { marks: C, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const v = Xi(i), j = ya(i), L = (w) => j.find(([C]) => C === Ke(w.midi - i.root))?.[1] ?? "", k = Ki(i.root, a.interval, a.degree), N = v.filter((w) => Ke(w.midi - i.root) === 0), O = (w) => m.some((C) => it(C) === it(w)), F = `${a.degree}. aste on ${k}.`;
  if (i.mode === "caged")
    return c ? { marks: v.map((w) => wt(w, L(w), O(w) ? "answer" : "shape")), text: F } : { marks: v.map((w) => wt(w, "", "shape")), text: `${i.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const b = i.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const w = v.filter((C) => Ke(C.midi) === Ke(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : N).map((C) => wt(C, "1", "anchor")), ...w.map((C) => wt(C, a.degree, "answer"))], text: `${k} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: w.map((C) => wt(C, k, "shape")), text: `Katso ${b} nimeä: mikä on sen perussävel?` } : {
      marks: [...N.map((C) => wt(C, "1", "anchor")), ...w.map((C) => wt(C, k, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${k} kohdalle.`
    };
  }
  return c ? { marks: [...N.filter((w) => !O(w)).map((w) => wt(w, "1", "anchor")), ...m.map((w) => wt(w, a.degree, "answer"))], text: F } : a.interval === 0 ? { marks: [], text: `1. aste on ${b} perussävel ${ar(i.root)}.` } : { marks: N.map((w) => wt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
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
      this.question = Rm(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Am(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    if (!(u === "degree" ? a === h.interval : u === "note" ? co(h.midi, a, "class") : u === "board" ? !!c && Jd(this.settings, h, c) : co(h.midi, a, h.check)))
      return u === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const v = u === "board" ? c : void 0, j = {
      id: `${this.id}:${this.index}`,
      item: v && this.settings.mode === "notes" ? `notes:${it(v)}` : h.item,
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
    return v ? j.position = it(v) : this.settings.mode === "notes" && (j.position = it(h.position)), this.results.push(j), this.record(j), this.phase = "feedback", "correct";
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
const ho = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], qr = (i) => ho.find(([a]) => a === i)?.[1] ?? i;
function Rt({ label: i, children: a }) {
  const u = U.useId();
  return /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ l.jsx("label", { htmlFor: u, children: i }),
    U.cloneElement(a, { id: u })
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
  const a = Cr(i), u = Yd(i), c = Nr(i), f = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = a.fixed === "shape" ? `${i.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${i.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, m = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((v) => v + 1).join(", ")}`;
  return `${ka[i.hints].title} · ${f} · ${Fn(i) ? `yksi läpisoitto, ${u} säveltä` : u ? `${u} kysymystä` : "vapaa harjoittelu"} · ${h}${m}`;
}
function kd({ s: i, change: a, locked: u, problem: c }) {
  const f = U.useId(), h = (k, N) => a({ ...i, [k]: N }), m = Cr(i), v = Nr(i) === "note" || Nr(i) === "degree", j = ["scale", "chord", "caged"].includes(i.mode), L = ["notes", "ear-note", "repeat"].includes(i.mode);
  return /* @__PURE__ */ l.jsxs("fieldset", { className: "settings", disabled: u, children: [
    /* @__PURE__ */ l.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx(Rt, { label: "Harjoitus", children: /* @__PURE__ */ l.jsx("select", { value: i.mode, onChange: (k) => h("mode", k.target.value), children: ho.map(([k, N]) => /* @__PURE__ */ l.jsx("option", { value: k, children: N }, k)) }) }),
      /* @__PURE__ */ l.jsx("p", { className: "mode-note", children: ho.find(([k]) => k === i.mode)[2] })
    ] }),
    j && /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx(Rt, { label: i.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ l.jsx("select", { value: i.root, onChange: (k) => h("root", Number(k.target.value)), children: ze.CHROM.map((k, N) => /* @__PURE__ */ l.jsx("option", { value: N, children: k }, k)) }) }),
      i.mode === "scale" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Rt, { label: "Asteikko", children: /* @__PURE__ */ l.jsx("select", { value: i.scale, onChange: (k) => h("scale", k.target.value), children: Object.entries(ze.SCALES).map(([k, N]) => /* @__PURE__ */ l.jsx("option", { value: k, children: N.name }, k)) }) }),
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
        /* @__PURE__ */ l.jsx(Rt, { label: "Sointutyyppi", children: /* @__PURE__ */ l.jsx("select", { value: i.chord, onChange: (k) => h("chord", k.target.value), children: Object.entries(wr).map(([k, N]) => /* @__PURE__ */ l.jsx("option", { value: k, children: N.name }, k)) }) }),
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
        /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.intervals.includes(k), onChange: (N) => h("intervals", N.target.checked ? [...i.intervals, k] : i.intervals.filter((O) => O !== k)) }),
        Gi[k]
      ] }, k)) }),
      /* @__PURE__ */ l.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ l.jsx(Rt, { label: "Intervallin suunta", children: /* @__PURE__ */ l.jsxs("select", { value: i.direction, onChange: (k) => h("direction", k.target.value), children: [
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
        onChange: (k) => h("hints", k),
        options: ["off", "always", "fade"].map((k) => ({ value: k, ...ka[k] }))
      }
    ),
    v ? /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ l.jsx(pd, { legend: "Vastaustapa", name: `${f}-input`, value: i.input, onChange: (k) => h("input", k), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ l.jsx(Rt, { label: "Kierroksen pituus", children: /* @__PURE__ */ l.jsxs("select", { value: i.rounds, disabled: Fn(i), onChange: (k) => h("rounds", Number(k.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !v && /* @__PURE__ */ l.jsx(Rt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ l.jsxs("select", { value: Fn(i) ? "pitch" : i.check, disabled: Fn(i), onChange: (k) => h("check", k.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ l.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ l.jsxs("select", { value: String(i.flats), onChange: (k) => h("flats", k.target.value === "true"), children: [
          /* @__PURE__ */ l.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ l.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      Fn(i) && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      m.fixed ? /* @__PURE__ */ l.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        m.fixed === "shape" ? `${i.shape}-muoto` : `Boksi ${i.box}`,
        " määrää harjoitusalueen: nauhat ",
        m.min,
        "–",
        m.max,
        "."
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((k) => /* @__PURE__ */ l.jsxs("button", { type: "button", "aria-pressed": i.min === 0 && i.max === k, onClick: () => a({ ...i, min: 0, max: k }), children: [
          "Nauhat 0–",
          k,
          k === 24 ? " · koko otelauta" : ""
        ] }, k)) }),
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsx(Rt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: "0", max: "24", value: i.min, onChange: (k) => h("min", Number(k.target.value)) }) }),
          /* @__PURE__ */ l.jsx(Rt, { label: "Viimeinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: i.min, max: "24", value: i.max, onChange: (k) => h("max", Number(k.target.value)) }) })
        ] })
      ] }),
      m.fixed !== "shape" && /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ l.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ l.jsx("div", { className: "check-row", children: fn.map((k, N) => /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.strings.includes(N), onChange: (O) => h("strings", O.target.checked ? [...i.strings, N] : i.strings.filter((F) => F !== N)) }),
          N + 1,
          " · ",
          k
        ] }, k)) })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "check-row", children: [
        L && /* @__PURE__ */ l.jsxs("label", { children: [
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
const Im = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Opi asteikko yksi positio kerrallaan ja käytä sitä sooloilussa.", example: "Aloita: A-mollipentatoninen, positio 1" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Dm({ onSelect: i }) {
  return /* @__PURE__ */ l.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ l.jsx("div", { className: "learning-grid", children: Im.map((a) => /* @__PURE__ */ l.jsxs("button", { type: "button", className: "learning-card", onClick: () => i(a.id), children: [
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
const zm = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", bm = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3", Vm = 0.12;
function yd(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const a = Math.floor(i);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Bm() {
  const i = U.useRef(null), a = U.useRef(null), [u, c] = U.useState(!1), [f, h] = U.useState(!1), [m, v] = U.useState(!1), [j, L] = U.useState(0), [k, N] = U.useState(0), [O, F] = U.useState("");
  function b(P = !1) {
    const H = i.current, Z = a.current;
    if (!H || !Z || !Number.isFinite(H.currentTime) || Z.readyState < 1) return;
    const ee = Math.abs(Z.currentTime - H.currentTime), M = H.loop && Number.isFinite(H.duration) && Math.abs(ee - H.duration) < 0.3;
    if (P || !M && ee > Vm)
      try {
        Z.currentTime = H.currentTime;
      } catch {
      }
  }
  function w() {
    i.current?.pause(), a.current?.pause(), c(!1);
  }
  async function C() {
    const P = i.current, H = a.current;
    if (!(!P || !H)) {
      if (u) {
        w();
        return;
      }
      F(""), H.muted = !f, H.volume = 0.55, P.volume = 0.75, b(!0);
      try {
        await Promise.all([P.play(), H.play()]), b(), c(!0);
      } catch {
        w(), F("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function D(P) {
    const H = i.current, Z = a.current;
    if (!(!H || !Z || !Number.isFinite(P))) {
      H.currentTime = P;
      try {
        Z.currentTime = P;
      } catch {
      }
      L(P);
    }
  }
  function E(P) {
    P && b(), a.current && (a.current.muted = !P), h(P);
  }
  return U.useEffect(() => {
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
              onChange: (P) => E(P.target.checked)
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
              onChange: (P) => v(P.target.checked)
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ l.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        C();
      }, children: u ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: k > 0 ? k : 1,
          step: 0.1,
          value: Math.min(j, k > 0 ? k : 1),
          disabled: !k,
          onChange: (P) => D(Number(P.target.value))
        }
      ),
      /* @__PURE__ */ l.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        yd(j),
        " / ",
        yd(k)
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: i,
        preload: "metadata",
        src: zm,
        loop: m,
        onLoadedMetadata: (P) => N(P.currentTarget.duration),
        onTimeUpdate: (P) => {
          L(P.currentTarget.currentTime), P.currentTarget.paused || b();
        },
        onEnded: () => {
          i.current?.loop || (a.current?.pause(), c(!1), L(k));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => F("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: bm,
        muted: !0,
        loop: m,
        onLoadedMetadata: () => {
          const P = i.current, H = a.current;
          P?.duration && H?.duration && Math.abs(P.duration - H.duration) > 0.15 && F("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => F("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    O && /* @__PURE__ */ l.jsx("p", { className: "backing-error", role: "alert", children: O }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Um = 4e3;
class gd extends Error {
  name = "MicSetupError";
}
async function Hm(i, a) {
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
      let L;
      await Promise.race([
        f.resume(),
        new Promise((k, N) => {
          L = setTimeout(() => N(new gd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Um);
        })
      ]).finally(() => clearTimeout(L));
    }
    const h = f.createMediaStreamSource(c), m = f, v = c.getAudioTracks?.()[0] ?? c.getTracks()[0], j = v?.getSettings?.() ?? {};
    return {
      context: f,
      source: h,
      stream: c,
      label: v?.label ?? "",
      deviceId: j.deviceId ?? "",
      channelCount: j.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((L) => L.stop()), h.disconnect(), a || m.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((m) => m.stop()), a || await f?.close().catch(() => {
    }), h;
  }
}
async function Km() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var io, xd;
function Gm() {
  if (xd) return io;
  xd = 1;
  function i(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var u = new Array(this.size * 2), c = 0; c < u.length; c += 2) {
      const L = Math.PI * c / this.size;
      u[c] = Math.cos(L), u[c + 1] = -Math.sin(L);
    }
    this.table = u;
    for (var f = 0, h = 1; this.size > h; h <<= 1)
      f++;
    this._width = f % 2 === 0 ? f - 1 : f, this._bitrev = new Array(1 << this._width);
    for (var m = 0; m < this._bitrev.length; m++) {
      this._bitrev[m] = 0;
      for (var v = 0; v < this._width; v += 2) {
        var j = this._width - v - 2;
        this._bitrev[m] |= (m >>> v & 3) << j;
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
    var u = this._out, c = this._csize, f = this._width, h = 1 << f, m = c / h << 1, v, j, L = this._bitrev;
    if (m === 4)
      for (v = 0, j = 0; v < c; v += m, j++) {
        const C = L[j];
        this._singleTransform2(v, C, h);
      }
    else
      for (v = 0, j = 0; v < c; v += m, j++) {
        const C = L[j];
        this._singleTransform4(v, C, h);
      }
    var k = this._inv ? -1 : 1, N = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      m = c / h << 1;
      var O = m >>> 2;
      for (v = 0; v < c; v += m)
        for (var F = v + O, b = v, w = 0; b < F; b += 2, w += h) {
          const C = b, D = C + O, E = D + O, P = E + O, H = u[C], Z = u[C + 1], ee = u[D], M = u[D + 1], V = u[E], ne = u[E + 1], ie = u[P], Ee = u[P + 1], $e = H, Te = Z, Me = N[w], G = k * N[w + 1], oe = ee * Me - M * G, te = ee * G + M * Me, R = N[2 * w], Q = k * N[2 * w + 1], J = V * R - ne * Q, g = V * Q + ne * R, z = N[3 * w], ve = k * N[3 * w + 1], we = ie * z - Ee * ve, _e = ie * ve + Ee * z, Ne = $e + J, S = Te + g, B = $e - J, I = Te - g, q = oe + we, de = te + _e, ae = k * (oe - we), me = k * (te - _e), pe = Ne + q, Pe = S + de, je = Ne - q, Le = S - de, Ye = B + me, Be = I - ae, Ge = B - me, Ue = I + ae;
          u[C] = pe, u[C + 1] = Pe, u[D] = Ye, u[D + 1] = Be, u[E] = je, u[E + 1] = Le, u[P] = Ge, u[P + 1] = Ue;
        }
    }
  }, i.prototype._singleTransform2 = function(u, c, f) {
    const h = this._out, m = this._data, v = m[c], j = m[c + 1], L = m[c + f], k = m[c + f + 1], N = v + L, O = j + k, F = v - L, b = j - k;
    h[u] = N, h[u + 1] = O, h[u + 2] = F, h[u + 3] = b;
  }, i.prototype._singleTransform4 = function(u, c, f) {
    const h = this._out, m = this._data, v = this._inv ? -1 : 1, j = f * 2, L = f * 3, k = m[c], N = m[c + 1], O = m[c + f], F = m[c + f + 1], b = m[c + j], w = m[c + j + 1], C = m[c + L], D = m[c + L + 1], E = k + b, P = N + w, H = k - b, Z = N - w, ee = O + C, M = F + D, V = v * (O - C), ne = v * (F - D), ie = E + ee, Ee = P + M, $e = H + ne, Te = Z - V, Me = E - ee, G = P - M, oe = H - ne, te = Z + V;
    h[u] = ie, h[u + 1] = Ee, h[u + 2] = $e, h[u + 3] = Te, h[u + 4] = Me, h[u + 5] = G, h[u + 6] = oe, h[u + 7] = te;
  }, i.prototype._realTransform4 = function() {
    var u = this._out, c = this._csize, f = this._width, h = 1 << f, m = c / h << 1, v, j, L = this._bitrev;
    if (m === 4)
      for (v = 0, j = 0; v < c; v += m, j++) {
        const Se = L[j];
        this._singleRealTransform2(v, Se >>> 1, h >>> 1);
      }
    else
      for (v = 0, j = 0; v < c; v += m, j++) {
        const Se = L[j];
        this._singleRealTransform4(v, Se >>> 1, h >>> 1);
      }
    var k = this._inv ? -1 : 1, N = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      m = c / h << 1;
      var O = m >>> 1, F = O >>> 1, b = F >>> 1;
      for (v = 0; v < c; v += m)
        for (var w = 0, C = 0; w <= b; w += 2, C += h) {
          var D = v + w, E = D + F, P = E + F, H = P + F, Z = u[D], ee = u[D + 1], M = u[E], V = u[E + 1], ne = u[P], ie = u[P + 1], Ee = u[H], $e = u[H + 1], Te = Z, Me = ee, G = N[C], oe = k * N[C + 1], te = M * G - V * oe, R = M * oe + V * G, Q = N[2 * C], J = k * N[2 * C + 1], g = ne * Q - ie * J, z = ne * J + ie * Q, ve = N[3 * C], we = k * N[3 * C + 1], _e = Ee * ve - $e * we, Ne = Ee * we + $e * ve, S = Te + g, B = Me + z, I = Te - g, q = Me - z, de = te + _e, ae = R + Ne, me = k * (te - _e), pe = k * (R - Ne), Pe = S + de, je = B + ae, Le = I + pe, Ye = q - me;
          if (u[D] = Pe, u[D + 1] = je, u[E] = Le, u[E + 1] = Ye, w === 0) {
            var Be = S - de, Ge = B - ae;
            u[P] = Be, u[P + 1] = Ge;
            continue;
          }
          if (w !== b) {
            var Ue = I, yt = -q, Je = S, be = -B, tt = -k * pe, Tt = -k * me, Kt = -k * ae, zt = -k * de, nn = Ue + tt, Gt = yt + Tt, ct = Je + zt, In = be - Kt, ke = v + F - w, Wt = v + O - w;
            u[ke] = nn, u[ke + 1] = Gt, u[Wt] = ct, u[Wt + 1] = In;
          }
        }
    }
  }, i.prototype._singleRealTransform2 = function(u, c, f) {
    const h = this._out, m = this._data, v = m[c], j = m[c + f], L = v + j, k = v - j;
    h[u] = L, h[u + 1] = 0, h[u + 2] = k, h[u + 3] = 0;
  }, i.prototype._singleRealTransform4 = function(u, c, f) {
    const h = this._out, m = this._data, v = this._inv ? -1 : 1, j = f * 2, L = f * 3, k = m[c], N = m[c + f], O = m[c + j], F = m[c + L], b = k + O, w = k - O, C = N + F, D = v * (N - F), E = b + C, P = w, H = -D, Z = b - C, ee = w, M = D;
    h[u] = E, h[u + 1] = 0, h[u + 2] = P, h[u + 3] = H, h[u + 4] = Z, h[u + 5] = 0, h[u + 6] = ee, h[u + 7] = M;
  }, io;
}
var Wm = Gm();
const Qm = /* @__PURE__ */ em(Wm);
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
  static forFloat32Array(a) {
    return new Ui(
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
    return new Ui(
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
    return new Ui(a, (u) => Array(u));
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
    this._inputLength = a, this._fft = new Qm(Xm(2 * a)), this._bufferSupplier = u, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function Ym(i) {
  const a = [];
  let u = !1, c = -1 / 0, f = -1;
  for (let h = 1; h < i.length - 1; h++)
    i[h - 1] <= 0 && i[h] > 0 ? (u = !0, f = h, c = i[h]) : i[h - 1] > 0 && i[h] <= 0 ? (u = !1, f !== -1 && a.push(f)) : u && i[h] > c && (c = i[h], f = h);
  return a;
}
function Jm(i, a) {
  const [u, c, f] = [i - 1, i, i + 1], [h, m, v] = [a[u], a[c], a[f]], j = h / 2 - m + v / 2, L = -(h / 2) * (c + f) + m * (u + f) - v / 2 * (u + c), k = h * c * f / 2 - m * u * f + v * u * c / 2, N = -L / (2 * j), O = j * N * N + L * N + k;
  return [N, O];
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
  static forFloat32Array(a) {
    return new Hi(a, (u) => new Float32Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Hi(a, (u) => new Float64Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new Hi(a, (u) => Array(u));
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
    this._autocorrelator = new Ui(a, u), this._nsdfBuffer = u(a);
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
    const c = Ym(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const f = Math.max(...c.map((j) => this._nsdfBuffer[j])), h = c.find(
      (j) => this._nsdfBuffer[j] >= this._clarityThreshold * f
    ), [m, v] = Jm(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [u / m, Math.min(v, 1)];
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
function Xm(i) {
  return i--, i |= i >> 1, i |= i >> 2, i |= i >> 4, i |= i >> 8, i |= i >> 16, i++, i;
}
function Zm(i) {
  const a = i * 0.17;
  let u = 2048;
  for (; u < a && u < 32768; ) u *= 2;
  return u;
}
const qm = 0.05, ep = 1.5;
class tp {
  constructor(a, u = {}) {
    this.mic = a, this.opts = u;
    const c = a.context, f = Zm(c.sampleRate), h = Math.max(1, Math.min(2, a.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), a.source.connect(this.splitter));
    for (let m = 0; m < (this.splitter ? h : 1); m++) {
      const v = c.createAnalyser();
      v.fftSize = f, v.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(v, m) : a.source.connect(v), this.analysers.push(v), this.buffers.push(new Float32Array(new ArrayBuffer(f * 4)));
    }
    this.shortLength = Math.min(f, Math.max(256, Math.round(c.sampleRate * qm))), this.detector = Hi.forFloat32Array(f), this.detector.minVolumeDecibels = -60;
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
  gate = new np();
  onset = new rp();
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
      maxFreq: v = 1450,
      onFrame: j,
      onStableNote: L
    } = this.opts, k = this.analysers.map((M, V) => (M.getFloatTimeDomainData(this.buffers[V]), jd(this.buffers[V], this.buffers[V].length - this.shortLength))), N = k.indexOf(Math.max(...k));
    N !== this.channel && k[N] > (k[this.channel] ?? 0) * ep && (this.channel = N);
    const O = this.buffers[this.channel], F = k[this.channel], b = ip(O, O.length - this.shortLength), w = { rms: F, peak: b, channel: this.channel, levels: k }, C = F < c, D = this.onset.feed(F, a, c);
    if (C && jd(O, 0) < c) {
      this.gate.feed(null, a, f, !0, !1), j?.({ ...w, status: "silent" });
      return;
    }
    const [E, P] = this.detector.findPitch(O, this.mic.context.sampleRate);
    if (!isFinite(E) || P < u) {
      this.gate.feed(null, a, f, C, D), j?.({ ...w, status: C ? "silent" : "unclear", clarity: isFinite(P) ? P : 0 });
      return;
    }
    if (E < m || E > v) {
      this.gate.feed(null, a, f, C, D), j?.({ ...w, status: "out-of-range", frequency: E, clarity: P });
      return;
    }
    const { midi: H, cents: Z } = fm(E);
    if (Math.abs(Z) > h) {
      this.gate.feed(null, a, f, C, D), j?.({ ...w, status: "off-pitch", frequency: E, clarity: P, midi: H, cents: Z });
      return;
    }
    j?.({ ...w, status: "pitch", frequency: E, clarity: P, midi: H, cents: Z });
    const ee = this.gate.feed(H, a, f, C, D);
    ee !== null && L?.({ midi: H, frequency: E, cents: Z, clarity: P, timestamp: a, heldMs: ee.heldMs });
  }
}
class np {
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
class rp {
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
function ip(i, a = 0) {
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
function sp() {
  const i = Zr;
  Zr = void 0, i?.close().catch(() => {
  });
}
const Zd = (i) => i instanceof Error ? i.name : "";
function ap(i) {
  const a = Zd(i);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? i.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class lp {
  constructor(a = (u) => Hm(u, Xd)) {
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
    } catch (v) {
      if (!a || f !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Zd(v))) throw v;
      h = await this.opener(void 0), m = !0;
    }
    if (f !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new tp(h, { ...u });
      const v = () => {
        this.mic === h && (this.stop(), c());
      }, j = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((L) => L.addEventListener("ended", v, { once: !0, signal: j.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && v();
      }, { signal: j.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: m };
    } catch (v) {
      throw this.stop(), v;
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
function op(i) {
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
    const h = Array.from({ length: 12 }, (j, L) => 1 / (L + 1) ** 1.3), m = c.createPeriodicWave?.(new Float32Array([0, ...h.map(() => 0)]), new Float32Array([0, ...h]));
    return a.forEach((j, L) => {
      const k = c.createOscillator(), N = c.createGain(), O = c.currentTime + 0.05 + L * 0.8;
      m ? k.setPeriodicWave(m) : k.type = "triangle", k.frequency.value = ld(j), N.gain.setValueAtTime(0, O), N.gain.linearRampToValueAtTime(0.22, O + 0.012), N.gain.exponentialRampToValueAtTime(1e-3, O + 0.7), k.connect(N), N.connect(f), k.start(O), k.stop(O + 0.72);
    }), !await new Promise((j) => {
      this.settle = j, this.timer = setTimeout(() => j(!0), a.length * 800 + 350);
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
    const v = Array.from({ length: 12 }, (w, C) => 1 / (C + 1) ** 1.3), j = h.createPeriodicWave?.(new Float32Array([0, ...v.map(() => 0)]), new Float32Array([0, ...v]));
    let L = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      f === this.token && Number.isFinite(w) && (L = 60 / Math.max(40, Math.min(140, w)));
    };
    const k = 1.6;
    let N = h.currentTime + 0.05, O = 0;
    const F = [], b = () => {
      if (f === this.token) {
        if (N < h.currentTime - 0.02) {
          const w = Math.ceil((h.currentTime - N) / L);
          N += w * L, O = (O + w) % a.length, F.length = 0;
        }
        for (; N < h.currentTime + k; ) {
          const w = a[O], C = O, D = N, E = h.createOscillator(), P = h.createGain();
          j ? E.setPeriodicWave(j) : E.type = "triangle", E.frequency.value = ld(w), P.gain.setValueAtTime(0, D), P.gain.linearRampToValueAtTime(0.22, D + 0.012), P.gain.exponentialRampToValueAtTime(1e-3, D + L * 0.975), E.connect(P), P.connect(m), E.start(D), E.stop(D + L * 0.985), F.push({ at: D, index: C }), N += L, O = (O + 1) % a.length;
        }
        for (; F.length && F[0].at <= h.currentTime + 0.01; ) {
          const w = F.shift();
          u?.(w.index);
        }
      }
    };
    return b(), this.loopTick = setInterval(b, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
const tf = "musiikin-kartta:skaalapolku:v1", nf = "musiikin-kartta:skaalapolku:tempo:v1", ei = 75, mo = 40, po = 140;
function up() {
  try {
    const i = localStorage.getItem(nf);
    if (i === null) return ei;
    const a = Number(i);
    return Number.isInteger(a) && a >= mo && a <= po && a % 5 === 0 ? a : ei;
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
function cp({ onBack: i }) {
  const [a, u] = U.useState(Ed), [c, f] = U.useState(Ed), [h, m] = U.useState(!1), [v, j] = U.useState("roots"), [L, k] = U.useState(up), [N, O] = U.useState(null), [F, b] = U.useState(null), [w, C] = U.useState(""), D = U.useRef(new ef()), E = U.useRef(0);
  function P(R) {
    const Q = Math.max(mo, Math.min(po, R));
    k(Q), D.current.setLoopTempo(Q);
    try {
      localStorage.setItem(nf, String(Q));
    } catch {
    }
  }
  function H() {
    E.current++, D.current.stop(), O(null), b(null);
  }
  U.useEffect(() => {
    const R = () => {
      document.hidden && (E.current++, D.current.stop(), O(null), b(null));
    };
    return document.addEventListener("visibilitychange", R), () => {
      document.removeEventListener("visibilitychange", R), E.current++, D.current.stop();
    };
  }, []);
  const Z = ze.fingeringBoxes(9, ze.SCALES.mp, "pentatonic", [1])[0].positions[0], ee = Z.strings.flatMap((R, Q) => R.map((J) => va(Q, J))).sort((R, Q) => R.midi - Q.midi || Q.string - R.string), M = [...ee, ...ee.slice(1, -1).reverse()], V = F === null ? null : M[F], ne = [69, 72, 69, 67, 64, 67, 69], ie = Z.start, Ee = Z.end, $e = (R) => Ke(R) === 9, Te = (R) => c < 2 ? !0 : c === 2 ? h && $e(R) : v === "scale" || v === "roots" && $e(R), Me = ee.filter((R) => Te(R.midi)).map((R) => ({
    ...R,
    label: c < 2 || c === 3 && v === "scale" ? Ie(R.midi) : "A",
    kind: c < 2 && V?.string === R.string && V.fret === R.fret ? "playing" : $e(R.midi) ? "answer" : "shape"
  }));
  async function G(R) {
    const Q = ++E.current;
    D.current.stop(), b(null), C(""), O(R);
    try {
      R === "phrase" ? await D.current.play(ne) : await D.current.loop(M.map((J) => J.midi), (J) => {
        Q === E.current && b(J);
      }, c === 2 ? L : ei);
    } catch {
      Q === E.current && C("Mallisoitto ei käynnistynyt. Tarkista selaimen ääniasetukset ja yritä uudelleen.");
    } finally {
      Q === E.current && (O(null), b(null));
    }
  }
  function oe() {
    H();
    const R = Math.min(4, c + 1);
    if (f(R), m(!1), j("roots"), R > a) {
      u(R);
      try {
        localStorage.setItem(tf, String(R));
      } catch {
      }
    }
  }
  function te(R) {
    R > a || (H(), f(R), m(!1), j("roots"));
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: () => {
      H(), i();
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
    /* @__PURE__ */ l.jsx("nav", { className: "journey-steps", "aria-label": "Position 1 harjoitukset", children: so.map((R, Q) => /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: Q === c ? "journey-step current" : "journey-step",
        "aria-current": Q === c ? "step" : void 0,
        disabled: Q > a,
        onClick: () => te(Q),
        children: [
          /* @__PURE__ */ l.jsx("span", { className: "journey-index", children: Q > a ? "🔒" : Q < a ? "✓" : Q + 1 }),
          /* @__PURE__ */ l.jsx("span", { children: R.title })
        ]
      },
      R.title
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
              disabled: L <= mo,
              onClick: () => P(L - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ l.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            L,
            " BPM"
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: L >= po,
              onClick: () => P(L + 5),
              children: "+ 5"
            }
          ),
          L !== ei && /* @__PURE__ */ l.jsx(
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
              "aria-pressed": N === "loop",
              onClick: () => N === "loop" ? H() : void G("loop"),
              children: N === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => N === "phrase" ? H() : void G("phrase"), children: N === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        c !== 3 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: N === "loop" ? V && c < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Ie(V.midi, !1, !0)} · ${fn[V.string]}-kieli, nauha ${V.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        w && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: w }),
        c >= 1 && c <= 3 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          c === 2 && /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ l.jsx("button", { type: "button", "aria-pressed": h, onClick: () => m((R) => !R), children: h ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => te(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          c === 3 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ l.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              wd.map((R) => /* @__PURE__ */ l.jsxs("label", { children: [
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: R.value,
                    checked: v === R.value,
                    onChange: () => j(R.value)
                  }
                ),
                /* @__PURE__ */ l.jsx("span", { children: R.label })
              ] }, R.value))
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
              G("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ l.jsx(Yi, { area: { strings: [0, 1, 2, 3, 4, 5], min: ie, max: Ee, fixed: "box" }, marks: Me, disabled: !0, caption: "A-mollipentatoninen, positio 1" }),
          /* @__PURE__ */ l.jsxs("p", { className: "tools-note", children: [
            c < 2 ? "Vihreällä merkitty A on pohjasävel." : c === 3 ? wd.find((R) => R.value === v).note : h ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        c === 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Yi, { area: { strings: [0, 1, 2, 3, 4, 5], min: ie, max: Ee, fixed: "box" }, marks: Me, disabled: !0, caption: "Ensimmäisen position sävelet" }),
          /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        c === 3 && /* @__PURE__ */ l.jsx(Bm, {}),
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
const Xr = [0, 2, 4, 5, 7, 9, 11], dp = 1200, ua = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function fp({ onBack: i }) {
  const [a, u] = U.useState(0), [c, f] = U.useState([]), [h, m] = U.useState(!1), [v, j] = U.useState(""), [L, k] = U.useState(0), [N, O] = U.useState(!1), F = a >= Xr.length, b = Xr[Math.min(a, Xr.length - 1)], w = si(ua.strings, ua.min, ua.max).filter((M) => Ke(M.midi) === b), C = w.filter((M) => !c.includes(it(M))), D = C.length === 0 && !F, E = !D && h ? C[0] : void 0;
  U.useEffect(() => {
    if (!N || !D) return;
    const M = window.setTimeout(() => {
      u((V) => V + 1), f([]), m(!1), j("");
    }, dp);
    return () => window.clearTimeout(M);
  }, [N, D]);
  const P = [
    ...w.filter((M) => c.includes(it(M))).map((M) => ({ ...M, kind: "answer", label: Ie(M.midi) })),
    ...E ? [{ ...E, kind: "anchor", label: "?" }] : []
  ];
  function H(M) {
    if (F || D) return;
    const V = it(M);
    if (Ke(M.midi) !== b) {
      k((Ee) => Ee + 1), j(`Valitsit sävelen ${Ie(M.midi)}. Etsi ${Ie(b)}.`);
      return;
    }
    if (c.includes(V)) {
      j("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const ne = [...c, V];
    f(ne), m(!1);
    const ie = w.length - ne.length;
    j(ie ? `Oikein! ${Ie(b)} löytyi ${fn[M.string]}-kieleltä (${Er(M.fret)}). Vielä ${ie}.` : `Löysit kaikki ${w.length} ${Ie(b)}-säveltä tällä alueella.`);
  }
  function Z() {
    D && (u((M) => M + 1), f([]), m(!1), j(""));
  }
  function ee() {
    u(0), f([]), m(!1), j(""), k(0);
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
          checked: N,
          onChange: (M) => O(M.target.checked)
        }
      ),
      /* @__PURE__ */ l.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "journey-lesson", children: F ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        L ? `Vääriä valintoja yhteensä ${L}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: ee, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsxs("h3", { children: [
          "Etsi kaikki ",
          Ie(b),
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
        Ie(b),
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
          marks: P,
          onAnswer: H,
          disabled: D,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "p",
        {
          className: D ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: v
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        !D && /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => m((M) => !M),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        D && (N ? /* @__PURE__ */ l.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === Xr.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: Z, children: a === Xr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const hp = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, ao = ["C", "G", "D", "Em"], Nd = ["C", "G", "D", "Em", "Am", "E", "A"], mp = { min: 0, max: 3, fixed: "" };
function Cd(i) {
  const a = [...i];
  for (let u = a.length - 1; u > 0; u--) {
    const c = Math.floor(Math.random() * (u + 1));
    [a[u], a[c]] = [a[c], a[u]];
  }
  return a;
}
function pp({ onBack: i }) {
  const [a, u] = U.useState(4), [c, f] = U.useState(() => Cd(ao)), [h, m] = U.useState(0), [v, j] = U.useState(null), [L, k] = U.useState([]), [N, O] = U.useState(0), F = h >= c.length, b = hp[c[Math.min(h, c.length - 1)]], w = a === 4 ? ao : Nd, C = b.frets.flatMap((M, V) => M === null ? [] : [V]), D = b.frets.flatMap((M, V) => M === null ? [V] : []), E = { ...mp, strings: C }, P = b.frets.flatMap((M, V) => M === null ? [] : [{
    ...va(V, M),
    kind: M === 0 ? "anchor" : "shape",
    label: M === 0 ? "○" : "●"
  }]);
  function H(M = a) {
    u(M), f(Cd(M === 4 ? ao : Nd)), m(0), j(null), k([]), O(0);
  }
  function Z(M) {
    v || F || L.includes(M) || (M === b.name ? j(M) : (k((V) => [...V, M]), O((V) => V + 1)));
  }
  function ee() {
    v && (m((M) => M + 1), j(null), k([]));
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
            onChange: () => H(4)
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
            onChange: () => H(7)
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
        a,
        " sointua. ",
        N ? `Vääriä valintoja yhteensä ${N}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: () => H(), children: "Harjoittele uudelleen" }) })
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
          area: E,
          marks: P,
          mutedStrings: D,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ l.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((M) => /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: v === M ? "right" : L.includes(M) ? "wrong" : "",
          disabled: !!v || L.includes(M),
          "aria-pressed": v === M,
          onClick: () => Z(M),
          children: M
        },
        M
      )) }),
      /* @__PURE__ */ l.jsx(
        "p",
        {
          className: v ? "feedback good" : L.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: v ? `Oikein! Tämä on ${b.name}-sointu.` : L.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      v && /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: ee, children: h === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
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
], kp = [
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
  acoustic: vp,
  normal: kp
}, yp = "normal", vo = "yksi-sointu-kaksi-askelta", No = {
  acoustic: vo + "-akustinen",
  normal: vo + "-normaali"
}, sf = (i) => i === vo || Object.values(No).includes(i ?? "");
function gp(i) {
  const a = Object.entries(No).find(([, u]) => u === i);
  return a ? a[0] : null;
}
const xp = (i) => No[i], _d = (i) => {
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
  for (let N = 1; N < u.length && !(c < u[N].start); N++)
    f = N;
  const h = u[f];
  let m = 0;
  for (; m + 1 < h.bars.length && c >= Ji(f, m + 1, a); )
    m++;
  const v = Ji(f, m, a), j = Co(f, a) / 4;
  let L = 1;
  for (; L < 4 && c >= v + L * j; ) L++;
  const k = h.bars[m];
  return {
    section: h,
    sectionIndex: f,
    barIndex: m,
    beat: L,
    chord: k.second && L >= 3 ? k.second : k.first
  };
}
function Ji(i, a, u = "acoustic") {
  return ai[u][i].start + Co(i, u) * a;
}
function jp(i) {
  return ai[i].flatMap((a, u) => a.bars.flatMap((c, f) => {
    const h = Ji(u, f, i), m = { section: a, sectionIndex: u, barIndex: f, part: "first", chord: c.first, time: h };
    if (!c.second) return [m];
    const v = Co(u, i) / 2;
    return [m, { ...m, part: "second", chord: c.second, time: h + v }];
  }));
}
function Sp(i, a = "acoustic", u = !1) {
  const c = ai[a], f = af(i, a), h = f.section.bars[f.barIndex], m = f.beat >= 3 && h.second ? "second" : "first", v = jp(a), j = v.findIndex((F) => F.sectionIndex === f.sectionIndex && F.barIndex === f.barIndex && F.part === m), k = [
    ...v.slice(j + 1).map((F) => ({ ...F, wrapped: !1 })),
    ...u ? v.slice(0, j + 1).map((F) => ({ ...F, wrapped: !0 })) : []
  ].find((F) => F.chord !== f.chord) ?? null;
  let N = null;
  const O = f.sectionIndex === c.length - 1;
  if (f.barIndex === f.section.bars.length - 1 && (!O || u)) {
    const F = O ? 0 : f.sectionIndex + 1, b = c[F], w = b.bars[0].first;
    N = {
      section: b,
      sectionIndex: F,
      firstChord: w,
      wrapped: O,
      continues: w === (h.second ?? h.first)
    };
  }
  return { nextChord: k, nextSection: N };
}
function wp(i) {
  const a = i.filter((v) => v.lyrics?.length), u = (v) => 1 + (v.lyrics?.length ?? 0), c = a.reduce((v, j) => v + u(j), 0);
  let f = 0, h = 1 / 0, m = 0;
  for (let v = 0; v <= a.length; v++) {
    const j = Math.abs(c - 2 * m);
    (j < h || j === h && m >= c - m) && (f = v, h = j), v < a.length && (m += u(a[v]));
  }
  return [a.slice(0, f), a.slice(f)];
}
const ko = ["Gm", "F", "B♭", "E♭", "Dm", "C"], lf = "musiikin-kartta:kappale-sointuvihjeet:v1", fa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Td = {
  showChords: !0,
  level: 0,
  fadeOrder: fa
};
function ca(i, a) {
  return !a.showChords || a.level >= a.fadeOrder[i];
}
function Md(i) {
  if (!i) return { ...Td, fadeOrder: { ...fa } };
  try {
    const a = JSON.parse(i);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const u = a, c = u.level, f = { ...fa }, h = u.fadeOrder;
    if (h && typeof h == "object") {
      const m = h;
      for (const v of ko)
        [1, 2, 3, 4].includes(m[v]) && (f[v] = m[v]);
    }
    return {
      showChords: typeof u.showChords == "boolean" ? u.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: f
    };
  } catch {
    return { ...Td, fadeOrder: { ...fa } };
  }
}
function Ep() {
  try {
    return Md(localStorage.getItem(lf));
  } catch {
    return Md(null);
  }
}
const Np = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Cp(i) {
  const a = Np.exec(i.trim());
  if (!a) return i;
  const [, u, , c = "", f = ""] = a;
  return u + "5" + c + f;
}
const _p = (i, a) => a === "power" ? Cp(i) : i, Tp = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Mp = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Pp({ version: i, position: a, loop: u = !1, onSeek: c }) {
  const [f, h] = U.useState(Ep), [m, v] = U.useState(null), [j, L] = U.useState(!1), [k, N] = U.useState("full"), O = (G) => _p(G, k), F = ai[i], b = af(a, i), { section: w, sectionIndex: C, barIndex: D, beat: E, chord: P } = b, H = E >= 3 && w.bars[D].second ? "second" : "first", Z = (G, oe, te) => `${i}:${G}:${oe}:${te}`, ee = (G, oe) => Z(w.id, G, oe), M = ee(D, H), V = ca(P, f), ne = V && m === M, ie = (G, oe, te) => !ca(G, f) || m === ee(oe, te), Ee = f.showChords && f.level === 0, $e = ko.filter((G) => ca(G, f)).length, { nextSection: Te } = Sp(a, i, u), Me = !!Te && ca(Te.firstChord, f);
  return U.useEffect(() => {
    v(null);
  }, [M]), U.useEffect(() => {
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
            onChange: (G) => {
              h((oe) => ({ ...oe, showChords: G.target.checked })), v(null);
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
            checked: j,
            onChange: (G) => L(G.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ l.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ l.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([G, oe]) => /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: G,
              checked: k === G,
              onChange: () => N(G)
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: oe })
        ] }, G))
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-hint-level",
            value: f.level,
            disabled: !f.showChords,
            onChange: (G) => {
              const oe = Number(G.target.value);
              h((te) => ({ ...te, level: oe })), v(null);
            },
            children: Tp.map((G) => /* @__PURE__ */ l.jsx("option", { value: G.value, children: G.label }, G.value))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: $e === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${$e}/6 sointua` })
    ] }),
    f.showChords && f.level < 4 && /* @__PURE__ */ l.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ l.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ l.jsx("div", { className: "song-fade-order", children: ko.map((G) => /* @__PURE__ */ l.jsxs("label", { children: [
        G,
        /* @__PURE__ */ l.jsx(
          "select",
          {
            "aria-label": G + ": piilotusvaihe",
            value: f.fadeOrder[G],
            onChange: (oe) => {
              const te = Number(oe.target.value);
              h((R) => ({ ...R, fadeOrder: { ...R.fadeOrder, [G]: te } })), v(null);
            },
            children: Mp.map((oe) => /* @__PURE__ */ l.jsx("option", { value: oe.value, children: oe.label }, oe.value))
          }
        )
      ] }, G)) })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ l.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (G) => {
              const oe = F.find((te) => te.id === G.target.value);
              oe && c(oe.start);
            },
            children: F.map((G) => /* @__PURE__ */ l.jsxs("option", { value: G.id, children: [
              _d(G.start),
              " · ",
              G.title
            ] }, G.id))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ l.jsxs("p", { className: "song-current-chord", children: [
          V && !ne ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ l.jsx("strong", { children: V && !ne ? "?" : O(P) }),
          /* @__PURE__ */ l.jsxs("span", { children: [
            w.title,
            ", tahti ",
            D + 1,
            ", isku ",
            E,
            "/4"
          ] }),
          V && /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => v(ne ? null : M),
              children: ne ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        Te && /* @__PURE__ */ l.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ l.jsx("strong", { children: Me ? "?" : O(Te.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((G, oe) => {
      const te = oe === D, R = te && (E < 3 || !G.second), Q = te && E >= 3 && !!G.second, J = ie(G.first, oe, "first"), g = G.second ? ie(G.second, oe, "second") : !1, z = (J ? O(G.first) : "sointu piilossa") + (G.second ? " " + (g ? O(G.second) : "sointu piilossa") : "") + (Ee && G.passingBass ? " (basson kulku " + G.passingBass + ")" : "") + (Ee && G.possibleChord ? " (" + O(G.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (te ? " active" : ""),
          "aria-pressed": te,
          "aria-label": "Tahti " + (oe + 1) + ": " + z + ". Siirry kohtaan " + _d(Ji(C, oe, i)),
          onClick: () => c(Ji(C, oe, i)),
          children: [
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              oe + 1
            ] }),
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ l.jsx("strong", { className: R && J ? "now" : "", children: J ? O(G.first) : "?" }),
              G.second && /* @__PURE__ */ l.jsx("strong", { className: Q && g ? "now" : "", children: g ? O(G.second) : "?" })
            ] }),
            Ee && G.passingBass && /* @__PURE__ */ l.jsxs("small", { children: [
              "Basso: (",
              G.passingBass,
              "), isku 4"
            ] }),
            Ee && G.possibleChord && /* @__PURE__ */ l.jsxs("small", { children: [
              "Mahdollinen (",
              O(G.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        oe
      );
    }) }),
    j ? /* @__PURE__ */ l.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ l.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ l.jsx("div", { className: "song-all-lyrics-grid", children: wp(F).map((G, oe) => /* @__PURE__ */ l.jsx("div", { className: "song-lyrics-column", children: G.map((te) => /* @__PURE__ */ l.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ l.jsx("h5", { children: te.title }),
        te.lyrics?.map((R, Q) => /* @__PURE__ */ l.jsx("p", { children: R }, Q))
      ] }, te.id)) }, oe)) }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ l.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ l.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((G, oe) => /* @__PURE__ */ l.jsx("p", { children: G }, oe))
    ] }),
    Ee && w.note && /* @__PURE__ */ l.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const pa = 7, Ap = { name: "bluesasteikko", base: ze.SCALES.mp.base, add: [[6, "♭5"]] }, lo = [
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
    scale: Ap,
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
function Rp(i) {
  return ze.scaleNotes(i).map(([a, u]) => ze.noteName(pa, a, u));
}
const of = (i) => i === "pentatonic" ? 5 : 7;
function $p(i, a, u) {
  const c = a.filter((v) => v >= 1 && v <= of(i.system)), f = ze.fingeringBoxes(pa, i.scale, i.system, c, u);
  if (i.id !== "blues") return f;
  const h = i.scale.add.map(([v]) => (pa + v) % 12), m = (v, j) => j >= 0 && j <= u && h.includes((ze.OPEN_PITCHES[v] + j) % 12);
  return f.map((v) => ({ ...v, positions: v.positions.map((j) => {
    const L = j.strings.map((N, O) => {
      if (!N.length) return N;
      const F = N[N.length - 1];
      return m(O, F + 1) ? [...N.slice(0, -1), F + 1] : N;
    }), k = L.flat();
    return { ...j, strings: L, start: Math.min(...k), end: Math.max(...k) };
  }) }));
}
const Pd = 17;
function Lp({ open: i }) {
  const [a, u] = U.useState("mp"), [c, f] = U.useState({ pentatonic: [], "3nps": [] }), [h, m] = U.useState(!1), [v, j] = U.useState(!1), L = U.useRef(null), k = lo.find((C) => C.id === a) ?? lo[0], N = c[k.system], O = $p(k, N, Pd), F = O.some((C) => C.positions.length > 0), b = ze.renderBoard(pa, k.scale, Pd, {
    automatic: !0,
    boxes: O,
    onlyBoxNotes: F && h,
    label: k.title + (N.length ? ", " + N.map((C) => "boksi " + C).join(", ") : "")
  });
  U.useEffect(() => {
    const C = L.current;
    !C || !i || O.length === 1 && ze.revealPositions(C, ".box-highlight");
  }, [b, i]);
  function w(C, D) {
    f((E) => ({ ...E, [k.system]: D ? [...E[k.system], C].sort((P, H) => P - H) : E[k.system].filter((P) => P !== C) }));
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ l.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ l.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ l.jsx("select", { value: a, onChange: (C) => u(C.target.value), children: lo.map((C) => /* @__PURE__ */ l.jsx("option", { value: C.id, children: C.title }, C.id)) })
    ] }) }),
    /* @__PURE__ */ l.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ l.jsx("strong", { children: k.title }),
      /* @__PURE__ */ l.jsx("span", { children: Rp(k.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "song-scale-note", children: k.note }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: L,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: b }
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
      /* @__PURE__ */ l.jsx("summary", { onClick: (C) => {
        C.preventDefault(), j((D) => !D);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ l.jsx("p", { className: "song-box-system", children: k.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ l.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: of(k.system) }, (C, D) => D + 1).map((C) => /* @__PURE__ */ l.jsxs("label", { className: "box-toggle", "data-box": C, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            value: C,
            checked: N.includes(C),
            onChange: (D) => w(C, D.target.checked)
          }
        ),
        " Boksi ",
        C
      ] }, k.system + C)) }),
      /* @__PURE__ */ l.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            checked: F && h,
            disabled: !F,
            onChange: (C) => m(C.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: F ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
const Op = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, yo = 100, uf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function _o(i) {
  if (i === null || i.trim() === "") return yo;
  const a = Number(i);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : yo;
}
function Fp() {
  try {
    return _o(localStorage.getItem(uf));
  } catch {
    return yo;
  }
}
function Ip(i) {
  try {
    localStorage.setItem(uf, String(_o(String(i))));
  } catch {
  }
}
function Ad(i, a, u = !0) {
  return u ? Op[i] * _o(String(a)) / 100 : 0;
}
function Dp(i = () => new Audio()) {
  try {
    const a = i();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const zp = () => {
  const i = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!i) throw new Error("Web Audio API puuttuu");
  return new i();
};
class bp {
  constructor(a = zp) {
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
let cf = null;
function Vp() {
  return gp(new URLSearchParams(location.search).get("kappale")) ?? cf ?? yp;
}
function Bp(i) {
  cf = i;
  const a = new URL(location.href);
  sf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", xp(i)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const Up = {
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
}, Hp = 0.12, Rd = 1e-3;
function $d(i, a) {
  try {
    i.currentTime = a;
  } catch {
  }
}
function Ld(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const a = Math.floor(i);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Kp({ onBack: i }) {
  const a = U.useRef(null), u = U.useRef(null), c = U.useRef(null), f = U.useRef(0), h = U.useRef(null), [m, v] = U.useState(Vp), j = Up[m], [L, k] = U.useState(!1), [N, O] = U.useState(!0), [F, b] = U.useState(!0), [w, C] = U.useState(!1), [D, E] = U.useState(!1), [P, H] = U.useState(!1), [Z, ee] = U.useState(Fp), [M] = U.useState(() => Dp() ? "element" : "webaudio"), V = U.useRef(null), [ne, ie] = U.useState(0), [Ee, $e] = U.useState(0), [Te, Me] = U.useState("");
  function G(S = !1) {
    const B = a.current;
    if (!(!B || B.readyState < 1))
      for (const I of [u.current, c.current]) {
        if (!I || I.readyState < 1) continue;
        const q = Math.abs(I.currentTime - B.currentTime), de = B.loop && Number.isFinite(B.duration) && Math.abs(q - B.duration) < 0.35;
        if (S || !de && q > Hp)
          try {
            I.currentTime = B.currentTime;
          } catch {
          }
      }
  }
  function oe() {
    return [
      ["backing", a.current, !0],
      ["guitar", u.current, N],
      ["vocals", c.current, F]
    ];
  }
  function te(S = Z, B) {
    for (const [I, q, de] of oe()) {
      if (!q) continue;
      const ae = Ad(I, S, B?.[I] ?? de);
      if (M === "webaudio" && V.current?.routed(q))
        V.current.setLevel(q, ae);
      else
        try {
          q.volume = Ad(I, S);
        } catch {
        }
    }
  }
  function R(S) {
    ee(S), Ip(S), te(S);
  }
  function Q() {
    f.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), k(!1);
  }
  function J(S) {
    if (S !== m) {
      h.current = null, Q();
      for (const B of [a.current, u.current, c.current])
        if (B)
          try {
            B.currentTime = 0;
          } catch {
          }
      ie(0), $e(0), Me(""), v(S), Bp(S);
    }
  }
  function g(S) {
    const B = a.current;
    if (!B || !Number.isFinite(S)) return;
    const I = Math.max(0, Math.min(S, Number.isFinite(B.duration) ? B.duration : S));
    h.current = I, ie(I), $d(B, I);
  }
  function z(S) {
    const B = h.current;
    if (B === null || S !== a.current || S.seeking) return;
    const I = Number.isFinite(S.duration) ? Math.min(B, S.duration) : B;
    if (I !== B && (h.current = I, ie(I)), Math.abs(S.currentTime - I) < Rd) return;
    const q = S.seekable;
    for (let de = 0; de < q.length; de++)
      if (q.start(de) <= I && I <= q.end(de)) {
        $d(S, I);
        return;
      }
  }
  function ve(S) {
    if (S !== a.current) return;
    const B = h.current;
    if (B === null)
      ie(S.currentTime);
    else if (S.readyState >= 1 && !S.seeking && Math.abs(S.currentTime - B) < Rd) {
      h.current = null, G(!0);
      return;
    }
    S.paused || G();
  }
  async function we() {
    const S = a.current, B = u.current, I = c.current;
    if (!S || !B || !I) return;
    if (L) {
      Q();
      return;
    }
    Me("");
    const q = h.current ?? S.currentTime;
    if (Number.isFinite(S.duration) && q >= S.duration - 0.05 && g(0), z(S), M === "webaudio" && (V.current ??= new bp(), V.current.unlock()))
      for (const ae of [S, B, I]) V.current.route(ae);
    te(), B.muted = !N, I.muted = !F, G(!0);
    const de = ++f.current;
    try {
      const ae = [S.play(), B.play(), I.play()];
      if (await Promise.all(ae), de !== f.current) return;
      G(), k(!0);
    } catch {
      if (de !== f.current) return;
      Q(), Me("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function _e(S) {
    S && G(), u.current && (u.current.muted = !S), O(S), te(Z, { guitar: S });
  }
  function Ne(S) {
    S && G(), c.current && (c.current.muted = !S), b(S), te(Z, { vocals: S });
  }
  return U.useEffect(() => {
    const S = () => {
      document.hidden && Q();
    };
    return document.addEventListener("visibilitychange", S), () => {
      document.removeEventListener("visibilitychange", S), f.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), V.current?.close();
    };
  }, []), U.useEffect(() => {
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
          onChange: (S) => J(S.target.value),
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
          j.label,
          " · ",
          j.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          we();
        }, children: L ? "■ Tauko" : "▶ Soita kappale" }),
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
            onChange: (S) => g(Number(S.target.value))
          }
        ),
        /* @__PURE__ */ l.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Ld(ne),
          " / ",
          Ld(Ee)
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: N,
              onChange: (S) => _e(S.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: F,
              onChange: (S) => Ne(S.target.checked)
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
              onChange: (S) => C(S.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "song-volume", "data-volume-mode": M, children: [
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
              onChange: (S) => R(Number(S.target.value))
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
          src: j.backing,
          preload: "metadata",
          loop: w,
          onLoadedMetadata: (S) => {
            S.currentTarget === a.current && ($e(S.currentTarget.duration), z(S.currentTarget));
          },
          onProgress: (S) => z(S.currentTarget),
          onCanPlay: (S) => z(S.currentTarget),
          onTimeUpdate: (S) => ve(S.currentTarget),
          onEnded: (S) => {
            S.currentTarget !== a.current || S.currentTarget.loop || (h.current = null, u.current?.pause(), c.current?.pause(), k(!1), ie(S.currentTarget.duration));
          },
          onPause: (S) => {
            S.currentTarget === a.current && k(!1);
          },
          onError: () => Me(j.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: u,
          src: j.guitar,
          preload: "metadata",
          muted: !N,
          loop: w,
          onLoadedMetadata: () => G(!0),
          onError: () => Me(j.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: c,
          src: j.vocals,
          preload: "metadata",
          muted: !F,
          loop: w,
          onLoadedMetadata: () => G(!0),
          onError: () => Me(j.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-chart-collapse", open: D, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (S) => {
        S.preventDefault(), E((B) => !B);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ l.jsx(Pp, { version: m, position: ne, loop: w, onSeek: g })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-scales-collapse", open: P, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (S) => {
        S.preventDefault(), H((B) => !B);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ l.jsx(Lp, { open: P })
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
}, ha = (i, a = 1) => i.toFixed(a).replace(".", ",").replace("-", "−"), df = (i) => {
  const a = Math.round(i);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, xo = (i) => i ? i.label || "Järjestelmän oletustulo" : "";
function Gp(i, a, u, c) {
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
function ff({ frame: i, threshold: a }) {
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
      "aria-valuetext": `${ha(Math.max(-60, c), 0)} desibeliä${u >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meter-fill", style: { width: `${Sd(u) * 100}%` } }),
        /* @__PURE__ */ l.jsx("div", { className: "meter-threshold", style: { left: `${Sd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Wp({ mic: i, frame: a, heard: u, s: c, now: f }) {
  const h = qd(i.phase, a), m = u && f - u.at < 1500 ? u : null, v = h === "pitch" || h === "untuned" || m ? m ? `Kuulen: ${Ie(m.midi, c.flats, !0)} · ${df(m.cents)} senttiä${m.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : go[h];
  return /* @__PURE__ */ l.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ l.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: v }),
    i.phase === "on" && /* @__PURE__ */ l.jsx(ff, { frame: a, threshold: c.minRms })
  ] });
}
function Qp({ mic: i, frame: a, heard: u, accepted: c, now: f, s: h, change: m, devices: v, locked: j, calibrating: L, calibration: k, onTest: N, onStop: O, onCalibrate: F }) {
  const b = U.useId(), w = qd(i.phase, a), C = i.purpose === "test" && i.phase !== "off" && i.phase !== "error", D = i.phase === "on", E = u && f - u.at < 1500 ? u : null, P = E && (w === "pitch" || w === "untuned"), H = D && (a?.peak ?? 0) >= 0.98, Z = i.phase === "error" ? [] : Gp(w, h, i.info, H), ee = !h.device || v.some((V) => V.deviceId === h.device), M = (V, ne) => m({ ...h, [V]: ne });
  return /* @__PURE__ */ l.jsxs("section", { className: "mic-panel", "aria-labelledby": `${b}-title`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ l.jsx("h2", { id: `${b}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ l.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      i.phase === "error" ? i.error : go[w],
      w === "pitch" && E ? ` ${Ie(E.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: i.phase === "on" ? `Mikrofoni kuuntelee: ${xo(i.info)}.` : i.phase === "error" ? i.error : go[i.phase] }),
    i.phase === "off" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    D && /* @__PURE__ */ l.jsxs("dl", { className: "mic-readout", children: [
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
          /* @__PURE__ */ l.jsx(ff, { frame: a, threshold: h.minRms }),
          /* @__PURE__ */ l.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            ha(Math.max(-60, ii(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: P ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ l.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: E ? Ie(E.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: P ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-frequency", children: E ? `${ha(E.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: P ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-cents", children: E ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          df(E.cents),
          " senttiä",
          /* @__PURE__ */ l.jsx("span", { className: `cents ${E.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ l.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, E.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: P ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-clarity", children: E ? `${Math.round(E.clarity * 100)} %` : a?.clarity !== void 0 && w === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    D && c && f - c.timestamp < 4e3 && /* @__PURE__ */ l.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ie(c.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    Z.length > 0 && D && /* @__PURE__ */ l.jsx("ul", { className: "mic-advice", children: Z.map((V) => /* @__PURE__ */ l.jsx("li", { children: V }, V)) }),
    i.phase === "error" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    k && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", children: k }),
    /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
      C ? /* @__PURE__ */ l.jsx("button", { type: "button", onClick: O, children: "Lopeta testi" }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: h.input === "mic" && i.phase !== "on" ? "primary" : "", disabled: j, onClick: N, children: "Testaa mikrofoni" }),
      C && D && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: L, onClick: F, children: L ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    j && i.purpose !== "test" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", disabled: j, children: [
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsx("label", { htmlFor: `${b}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ l.jsxs("select", { id: `${b}-device`, value: h.device, onChange: (V) => M("device", V.target.value), children: [
              /* @__PURE__ */ l.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !ee && /* @__PURE__ */ l.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              v.map((V, ne) => /* @__PURE__ */ l.jsx("option", { value: V.deviceId, children: V.label || `Äänitulo ${ne + 1}` }, V.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${b}-rms`, children: [
              "Äänikynnys · ",
              ha(ii(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${b}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (V) => M("minRms", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${b}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${b}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (V) => M("clarity", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${b}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${b}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (V) => M("stability", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${b}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${b}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (V) => M("cents", Number(V.target.value)) })
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
const Yp = (i) => i.mode === "scale" ? ze.scaleNotes(ze.SCALES[i.scale]) : wr[i.mode === "caged" ? "maj" : i.chord].tones, Od = (i, a) => Yp(i).find(([u]) => u === a)?.[1], hf = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", Jp = (i) => i.direction === "up" ? "ylöspäin" : "alaspäin";
function Xp(i, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : i.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Zp(i, a, u, c, f) {
  return a.choices === "degree" ? `Oikein! ${Ki(i.root, a.interval, a.degree)} on ${a.degree}. aste.` : hf(i) ? `Oikein! ${a.degree}. aste on ${Ki(i.root, a.interval, a.degree)}.` : i.mode === "interval" ? `Oikein! ${Ie(a.reference, i.flats, !0)} → ${a.name} on ${Gi[a.interval]} ${Jp(a)}.` : i.mode === "notes" ? u === "board" && f ? `Oikein! ${Ie(f.midi, i.flats)} on ${Dd[f.string]}: ${Er(f.fret)}.` : `Oikein! Soitit sävelen ${Ie(c, i.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function qp(i, a, u, c, f) {
  if (u === "note") return `Ei ${Ie(c, i.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (u === "degree") return `Ei ${Od(i, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!f) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = Ke(f.midi) === Ke(a.midi);
  if (i.mode === "notes")
    return f.string !== a.position.string ? `Tuo on ${fn[f.string]}-kieli. Etsi sävel ${wo[a.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Ie(f.midi, i.flats)}. Etsi ${a.name}.`;
  if (hf(i)) {
    const m = Ke(f.midi - i.root), v = Od(i, m), j = i.mode === "scale" ? "asteikkoon" : "sointuun";
    return v ? h && a.check === "pitch" && f.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : h ? `Oikea sävel, mutta ${i.mode === "caged" ? "muodon" : i.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Ki(i.root, m, v)} eli ${v}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Ie(f.midi, i.flats)}, joka ei kuulu ${j}. Etsi ${a.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ie(f.midi, i.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function ev(i, a, u) {
  const c = Ie(u, i.flats, !0);
  return Ke(u) === Ke(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function mf(i, a = !1) {
  const u = i.split(":"), c = (m) => Number(u[m]), f = (...m) => m.every((v) => Number.isInteger(c(v))), h = (m, v) => fn[m] ? `${fn[m]}-kieli, ${Er(v)}` : null;
  switch (u[0]) {
    case "notes":
      return f(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return f(1) ? `Kuultu sävel ${Ie(c(1), a)}${u[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return u.length === 2 && f(1) ? `Kuule ja toista: ${Ie(c(1), a, !0)}` : f(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return f(1) && Gi[c(1)] ? `${Gi[c(1)]} ${u[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const m = u[2];
      if (!f(1, 3) || !wr[m]) return null;
      const v = wr[m].tones.find(([j]) => j === c(3))?.[1];
      return v ? `${zd(c(1), m)}: ${v}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const m = ze.SCALES[u[2]];
      if (!f(1) || !m) return null;
      const v = `${ar(c(1))}-${m.name}`;
      if (u.length === 5 && f(3)) {
        const j = ze.scaleNotes(m).find(([L]) => L === c(3))?.[1];
        return j ? `${v}: ${j}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return f(3, 4) && h(c(3), c(4)) ? `${v}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!f(1) || !"CAGED".includes(u[2] ?? "?")) return null;
      const m = `${ar(c(1))}-duuri, ${u[2]}-muoto`;
      if (u.length === 4 && f(3)) {
        const v = wr.maj.tones.find(([j]) => j === c(3))?.[1];
        return v ? `${m}: ${v}. aste` : null;
      }
      return f(3, 4) && h(c(3), c(4)) ? `${m}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Fd(i) {
  return Object.entries(i).flatMap(([a, u]) => {
    const [c, f, h, ...m] = a.split(":");
    return !m.length || !["solo", "guided"].includes(h) ? [] : [{ key: a, input: c, check: f, guided: h === "guided", item: m.join(":"), mode: m[0], stat: u }];
  });
}
const jo = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", tv = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function nv(i) {
  const a = i.solo === void 0 ? `${i.first}/${i.count} heti oikein` : i.solo ? `itsenäisesti ${i.soloFirst ?? 0}/${i.solo} heti oikein${i.count > i.solo ? ` · ${i.count - i.solo} vihjeen kanssa` : ""}` : `${i.count} vastausta vihjeen kanssa`;
  return `${new Date(i.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${qr(i.mode)}${i.hints ? ` · ${ka[i.hints].title}` : ""} · ${a} · keskimäärin ${jo(i.ms / Math.max(1, i.count))}${i.complete ? "" : " · keskeytetty"}`;
}
function rv({ store: i, s: a, locked: u, changed: c }) {
  const [f, h] = U.useState(""), m = U.useRef(null), { recent: v, sessions: j, stats: L } = i.data, k = Nr(a), N = Vd(a), O = [...new Set(v.map((E) => E.mode))].map((E) => {
    const P = v.filter((H) => H.mode === E);
    return { mode: E, ...fo(P), last: Math.max(...P.map((H) => H.at)) };
  }).sort((E, P) => P.last - E.last), F = Fd(L).filter((E) => !E.guided && E.mode === a.mode && E.input === k && E.check === N && E.stat.attempts >= 3).map((E) => ({ ...E, score: Eo(E.stat), text: mf(E.item, a.flats) })).filter((E) => E.text && E.score < 0.8).sort((E, P) => E.score - P.score).slice(0, 5), b = Fd(L).reduce((E, P) => E + P.stat.attempts, 0);
  function w() {
    const E = new Blob([JSON.stringify(i.data, null, 2)], { type: "application/json" }), P = URL.createObjectURL(E), H = document.createElement("a");
    H.href = P, H.download = "musiikin-kartta-harjoittelu.json", H.click(), setTimeout(() => URL.revokeObjectURL(P), 1e3);
  }
  async function C(E) {
    if (E)
      try {
        const P = await E.text();
        if (b && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        i.restore(P), h("Varmuuskopio palautettu."), c();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        m.current && (m.current.value = "");
      }
  }
  function D() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (i.clearProgress(), h("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    b === 0 ? /* @__PURE__ */ l.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        b,
        " vastattua kysymystä · ",
        j.length,
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
        /* @__PURE__ */ l.jsx("tbody", { children: O.map((E) => /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsx("th", { scope: "row", children: qr(E.mode) }),
          /* @__PURE__ */ l.jsx("td", { children: E.count }),
          /* @__PURE__ */ l.jsx("td", { children: E.solo ? `${E.soloFirst}/${E.solo} · ${Math.round(E.soloFirst / E.solo * 100)} %` : "–" }),
          /* @__PURE__ */ l.jsx("td", { children: E.guided }),
          /* @__PURE__ */ l.jsx("td", { children: jo(E.ms / E.count) })
        ] }, E.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ l.jsx("h3", { children: "Seuraavaksi" }),
    F.length ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        qr(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ l.jsx("ul", { children: F.map((E) => /* @__PURE__ */ l.jsxs("li", { children: [
        E.text,
        " · viime aikoina ",
        Math.round(Wi(E.stat) * 100),
        " % heti oikein · ",
        jo(Qi(E.stat))
      ] }, E.key)) })
    ] }) : /* @__PURE__ */ l.jsx("p", { children: b ? `Harjoituksessa ${qr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        tv[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ l.jsx(Cm, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: L, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      j.length ? /* @__PURE__ */ l.jsx("ul", { children: j.slice(-10).reverse().map((E) => /* @__PURE__ */ l.jsx("li", { children: nv(E) }, E.id)) }) : /* @__PURE__ */ l.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ l.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u, onClick: () => m.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ l.jsx("input", { ref: m, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (E) => {
          C(E.target.files?.[0]);
        } }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u || !b, onClick: D, children: "Poista harjoitustulokset" })
      ] }),
      f && /* @__PURE__ */ l.jsx("p", { role: "status", children: f })
    ] }),
    i.warning && /* @__PURE__ */ l.jsx("p", { role: "status", className: "error", children: i.warning })
  ] });
}
function iv() {
  try {
    return new hd(localStorage);
  } catch {
    return new hd();
  }
}
const Id = (i) => ({ minRms: i.minRms, minClarity: i.clarity, stabilityMs: i.stability, centsTolerance: i.cents }), sv = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", av = [0, 2, 4, 5, 7, 9, 11];
function lv(i) {
  return i.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : i.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : i.mode === "chord" ? i.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : i.mode === "scale" ? ["mp", "majp"].includes(i.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function ov() {
  const [i] = U.useState(iv), [a, u] = U.useState(() => km(location.search, i.data.settings)), [, c] = U.useReducer(($) => $ + 1, 0), f = U.useRef(null), h = U.useRef(new lp()), m = U.useRef(new ef()), v = U.useRef(0), j = U.useRef(), L = U.useRef(), k = U.useRef(null), N = U.useRef(0), O = U.useRef(null), F = U.useRef(a);
  F.current = a;
  const [b, w] = U.useState({ phase: "off", purpose: "none" }), C = U.useRef(b), D = ($) => {
    C.current = $, w($);
  }, [E, P] = U.useState(null), [H, Z] = U.useState(null), [ee, M] = U.useState(null), [V, ne] = U.useState(0), [ie, Ee] = U.useState([]), [$e, Te] = U.useState(!1), [Me, G] = U.useState(!1), [oe, te] = U.useState(""), [R, Q] = U.useState("info"), [J, g] = U.useState(""), [z, ve] = U.useState(0), [we, _e] = U.useState([]), [Ne, S] = U.useState([]), [B, I] = U.useState(null), [q, de] = U.useState(!1), [ae, me] = U.useState(""), [pe, Pe] = U.useState(""), [je, Le] = U.useState(() => {
    const $ = new URLSearchParams(location.search);
    return $.has("tila") || $.has("vanha") ? "legacy" : sf($.get("kappale")) ? "songs" : null;
  }), Ye = () => {
    Km().then(Ee).catch(() => {
    });
  };
  function Be() {
    clearTimeout(L.current), k.current = null, de(!1);
  }
  function Ge() {
    P(null), Z(null), M(null);
  }
  function Ue() {
    h.current.stop(), Be(), D({ phase: "off", purpose: "none" }), Ge();
  }
  async function yt($) {
    if (h.current.active && C.current.phase === "on")
      return Be(), D({ ...C.current, purpose: $ }), h.current.rearm(), !0;
    D({ phase: "requesting", purpose: $ }), Ge();
    try {
      const le = await h.current.start(F.current.device, {
        ...Id(F.current),
        onFrame: (ye) => Tt.current.frame(ye),
        onStableNote: (ye) => Tt.current.stable(ye)
      }, () => Tt.current.lost());
      return le ? (D({ phase: "on", purpose: $, info: le }), Ye(), !0) : !1;
    } catch (le) {
      return D({ phase: "error", purpose: "none", error: ap(le) }), !1;
    }
  }
  function Je($) {
    k.current?.push($.rms);
    const le = performance.now();
    le - N.current < 66 || (N.current = le, P($), ne(le), $.midi !== void 0 && $.frequency !== void 0 && Z({ midi: $.midi, frequency: $.frequency, cents: $.cents ?? 0, clarity: $.clarity ?? 0, tuned: $.status === "pitch", at: le }));
  }
  function be($) {
    C.current.purpose === "test" ? M($) : C.current.purpose === "round" && Ae($.midi, "mic", void 0, $.heldMs);
  }
  function tt() {
    const $ = C.current.purpose === "round";
    Be(), Ge(), D({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const le = f.current;
    $ && le && ["active", "feedback", "paused"].includes(le.phase) && (ct(), G(!1), le.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Tt = U.useRef({ frame: Je, stable: be, lost: tt });
  Tt.current = { frame: Je, stable: be, lost: tt };
  function Kt($) {
    const le = ma($), ye = le.device !== F.current.device;
    F.current = le, u(le), i.settings(le), g(""), h.current.active && (ye && C.current.purpose === "test" ? (Ue(), yt("test")) : h.current.setOptions(Id(le)));
  }
  function zt($) {
    Pe(""), f.current = null, Le($);
  }
  function nn() {
    me(""), yt("test");
  }
  function Gt() {
    C.current.phase !== "on" || C.current.purpose !== "test" || (Be(), k.current = [], de(!0), me("Mitataan taustakohinaa kolme sekuntia. Älä soita."), L.current = setTimeout(() => {
      const $ = k.current ?? [];
      if (Be(), $.length < 10) {
        me("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: le, noise: ye, loud: Yt } = op($);
      Kt({ ...F.current, minRms: le }), me(`Taustakohina on ${Math.round(ii(ye))} dB ja äänikynnys nyt ${Math.round(ii(le))} dB. ${Yt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function ct() {
    v.current++, clearTimeout(j.current), m.current.stop();
  }
  function In($, le) {
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
      complete: le
    });
  }
  async function ke($) {
    if (!$.question?.sound.length || $.phase !== "active") return;
    ct();
    const le = v.current;
    $.pause(), h.current.pause(), G(!0), Q("info"), te("Kuuntele…"), c();
    try {
      await m.current.play($.question.sound);
    } catch {
      le === v.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    le !== v.current || f.current !== $ || ($.resume(), h.current.resume(), G(!1), te(""), c());
  }
  async function Wt($) {
    _e([]), S([]), I(null), g(""), ve($.hintLevel), h.current.rearm(), Q("info"), te(""), c(), $.question?.sound.length && await ke($);
  }
  async function Se() {
    const $ = F.current, le = uo($);
    if (le) {
      g(le);
      return;
    }
    ct();
    const ye = v.current;
    if (g(""), me(""), Pe(""), oa($)) {
      Te(!0);
      const lt = await yt("round");
      if (ye !== v.current) return;
      if (Te(!1), !lt) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else C.current.phase !== "off" && Ue();
    const Yt = new Fm($, () => i.data.stats, (lt) => i.record(lt));
    try {
      Yt.start();
    } catch (lt) {
      C.current.purpose === "round" && Ue(), g(lt instanceof Error ? lt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    f.current = Yt, requestAnimationFrame(() => O.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Wt(Yt);
  }
  function Re() {
    ct(), Te(!1), Ue();
  }
  function Ae($, le, ye, Yt = 0) {
    const lt = f.current, or = lt?.question;
    if (!lt || !or || lt.phase !== "active") return;
    const zn = lt.answer($, le, ye, Yt);
    if (zn !== "ignored") {
      if (zn === "candidate")
        I($), Q("bad"), te(ev(lt.settings, or, $));
      else if (zn === "wrong")
        ye ? _e((ur) => [...ur, ye]) : S((ur) => [...ur, $]), Q("bad"), te(qp(lt.settings, or, le, $, ye));
      else if (I(null), Q("good"), te(Zp(lt.settings, or, le, $, ye)), In(lt, !1), lt.settings.advance) {
        const ur = v.current;
        j.current = setTimeout(() => {
          ur === v.current && We();
        }, le === "mic" ? 1800 : 1400);
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
      } catch (le) {
        Ze(!1), g(le instanceof Error ? le.message : "Seuraavaa kysymystä ei voitu muodostaa.");
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
    ct(), G(!1), Te(!1), (C.current.purpose === "round" || C.current.phase === "requesting") && Ue();
    const le = f.current;
    le && (le.stop(), In(le, $)), I(null), ve(0), _e([]), S([]), g(""), Pe($ ? "complete" : "stopped"), Q("info"), te(""), c();
  }
  function Qt() {
    const $ = f.current;
    if (!$ || !["active", "feedback", "paused"].includes($.phase)) return;
    ct(), G(!1), $.pause();
    const le = C.current.purpose === "round";
    le && Ue(), Q("info"), te(`Harjoitus on tauolla.${le ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function gt() {
    const $ = f.current;
    if (!$ || $.phase !== "paused" || Me) return;
    ct();
    const le = v.current;
    if (g(""), oa($.settings)) {
      Te(!0);
      const ye = await yt("round");
      if (le !== v.current) return;
      if (Te(!1), !ye) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    $.resume(), Q("info"), te(""), c(), $.phase === "active" && (h.current.rearm(), $.question?.sound.length && await ke($));
  }
  function bt($) {
    const le = f.current;
    !le || le.phase !== "active" || (le.useHint($), ve($), c());
  }
  const hn = U.useRef({ hidden: () => {
  }, restored: () => {
  } });
  hn.current = {
    hidden: () => {
      const $ = f.current;
      $ && ["active", "feedback"].includes($.phase) || Me ? Qt() : C.current.phase !== "off" && C.current.phase !== "error" && (ct(), Te(!1), Ue());
    },
    restored: () => {
      Te(!1), G(!1), D({ phase: "off", purpose: "none" }), Ge(), c();
    }
  }, U.useEffect(() => {
    Ye();
    const $ = () => Ye();
    navigator.mediaDevices?.addEventListener?.("devicechange", $);
    const le = () => {
      v.current++, clearTimeout(j.current), clearTimeout(L.current), h.current.stop(), m.current.stop(), sp(), f.current?.pause();
    }, ye = () => {
      document.hidden && hn.current.hidden();
    }, Yt = (lt) => {
      lt.persisted && hn.current.restored();
    };
    return document.addEventListener("visibilitychange", ye), window.addEventListener("pagehide", le), window.addEventListener("pageshow", Yt), () => {
      le(), navigator.mediaDevices?.removeEventListener?.("devicechange", $), document.removeEventListener("visibilitychange", ye), window.removeEventListener("pagehide", le), window.removeEventListener("pageshow", Yt);
    };
  }, []);
  const mn = U.useRef(null), Dn = `${f.current?.id}:${f.current?.index}:${f.current?.phase}:${Me}`;
  U.useEffect(() => {
    const $ = f.current, le = O.current, ye = document.activeElement;
    !$ || !le || !(ye === document.body || le.contains(ye)) || ($.phase === "feedback" ? mn.current?.focus({ preventScroll: !0 }) : $.phase === "active" && !Me && (ye === document.body || ye === mn.current) && le.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [Dn]);
  const Fe = f.current, nt = !!Fe && ["active", "paused", "feedback"].includes(Fe.phase), Qe = nt ? Fe.settings : a, mt = nt ? Fe.question : void 0, Mt = !!mt && !!Fe?.answered, pn = nt && Fe.phase === "paused" && !Me && !Mt, vn = nt && Fe.phase === "active" && !Me, li = nt ? null : uo(a), wn = nt || $e, lr = Cr(Qe), _r = Tm(Qe), En = mt && !Mt ? z : 0, oi = mt ? Om(Qe, mt, Mt ? 2 : En) : { marks: [], text: "" }, Zi = [...new Map([...oi.marks, ...Mt ? [] : we.map(($) => ({ ...$, label: Ie($.midi, Qe.flats), kind: "wrong" }))].map(($) => [it($), $])).values()], ga = nt && oa(Qe), Nn = !!mt && !pn && (mt.choices === "position" || Zi.length > 0), xt = Fe ? fo(Fe.results) : null, qi = !Fe || Qe.hints !== "fade" ? "" : Fe.index <= 3 ? " · vastaus näkyy" : Fe.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", es = Fe && !nt ? Fe.results.filter(($) => $.errors > 0 || $.hint) : [], [ts, ns] = lv(Qe), Cn = /* @__PURE__ */ l.jsxs("div", { className: "intro", children: [
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
    /* @__PURE__ */ l.jsx(Dm, { onSelect: zt })
  ] }) : !nt && je === "scales" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(cp, { onBack: () => Le(null) })
  ] }) : !nt && je === "ear" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(fp, { onBack: () => Le(null) })
  ] }) : !nt && je === "chords" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(pp, { onBack: () => Le(null) })
  ] }) : !nt && je === "songs" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(Kp, { onBack: () => Le(null) })
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
        nt && Ze(), Le(null);
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
    !nt && (je === "legacy" || oa(a)) && /* @__PURE__ */ l.jsx(
      Qp,
      {
        mic: b,
        frame: E,
        heard: H,
        accepted: ee,
        now: V,
        s: a,
        change: Kt,
        devices: ie,
        locked: $e,
        calibrating: q,
        calibration: ae,
        onTest: nn,
        onStop: Ue,
        onCalibrate: Gt
      }
    ),
    /* @__PURE__ */ l.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: O, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h2", { id: "session-title", children: qr(Qe.mode) }),
        /* @__PURE__ */ l.jsx("span", { "data-testid": "round-status", children: nt ? `Kysymys ${Fe.index}${Fe.total ? " / " + Fe.total : " · vapaa harjoittelu"} · ${ka[Qe.hints].title}${qi}${Fe.phase === "paused" && !Me ? " · tauolla" : ""}` : pe === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !nt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        Fe && Fe.results.length > 0 && xt ? /* @__PURE__ */ l.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
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
              /* @__PURE__ */ l.jsx("dd", { children: sv(xt.ms / xt.count) })
            ] })
          ] }),
          xt.solo === 0 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          es.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ l.jsx("ul", { children: [...new Set(es.map(($) => mf($.item, a.flats)).filter(Boolean))].slice(0, 6).map(($) => /* @__PURE__ */ l.jsx("li", { children: $ }, $)) })
          ] })
        ] }) : /* @__PURE__ */ l.jsx("p", { className: "question idle", children: vd(a) }),
        /* @__PURE__ */ l.jsx("div", { className: "action-row", children: $e ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !!li, onClick: () => {
          Se();
        }, children: Fe?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Fe && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      nt && mt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: pn ? "Harjoitus on tauolla." : mt.prompt }),
        /* @__PURE__ */ l.jsx("p", { className: "how", "data-testid": "instruction", children: pn ? "Kysymys palaa näkyviin, kun jatkat." : Me ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Xp(Qe, mt) }),
        Fe.hintLevel > 0 && !Mt && /* @__PURE__ */ l.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Qe.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        ga && /* @__PURE__ */ l.jsx(Wp, { mic: b, frame: E, heard: H, s: Qe, now: V }),
        mt.choices === "note" && !pn && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Qe.accidentals ? Array.from({ length: 12 }, ($, le) => le) : av).map(($) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ne.includes($) ? "wrong" : Mt && $ === mt.midi % 12 ? "right" : "", disabled: !vn || Ne.includes($), onClick: () => Ae($, "note"), children: Ie($, Qe.flats) }, $)) }),
        mt.choices === "degree" && !pn && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Qe.mode === "scale" ? ze.scaleNotes(ze.SCALES[Qe.scale]) : wr[Qe.chord].tones).map(([$, le]) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ne.includes($) ? "wrong" : Mt && $ === mt.interval ? "right" : "", disabled: !vn || Ne.includes($), onClick: () => Ae($, "degree"), children: le }, $)) }),
        Nn && /* @__PURE__ */ l.jsx(
          Yi,
          {
            area: _r,
            marks: Zi,
            disabled: !vn || mt.choices !== "position" || Qe.input === "mic",
            onAnswer: ($) => Ae($.midi, "board", $),
            caption: lr.fixed === "shape" ? `${Qe.shape}-muodon alue` : lr.fixed === "box" ? `Boksin ${Qe.box} alue` : "Otelauta"
          }
        ),
        !Mt && !pn && En > 0 && oi.text && /* @__PURE__ */ l.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: oi.text }),
        /* @__PURE__ */ l.jsx("p", { className: `feedback ${R}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: oe }),
        B !== null && Fe.phase === "active" && /* @__PURE__ */ l.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
            Fe.confirmWrong(), I(null), te("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ l.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        J && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: J }),
        /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
          Fe.phase === "feedback" && /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", ref: mn, onClick: () => {
            We();
          }, children: Fe.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Fe.phase === "active" && !Mt && !Me && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            En === 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => bt(Math.max(1, Fe.hintLevel)), children: Fe.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            En === 1 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => bt(2), children: "Näytä vastaus" }),
            En > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => ve(0), children: "Piilota vihje" })
          ] }),
          mt.sound.length > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: !vn, onClick: () => {
            ke(Fe);
          }, children: "Kuuntele uudelleen" }),
          Fe.phase === "paused" && !Me ? /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: $e, onClick: () => {
            gt();
          }, children: $e ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ l.jsx("button", { type: "button", onClick: Qt, children: "Tauko" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => Ze(), children: "Lopeta harjoitus" })
        ] }),
        Fe.phase === "feedback" && Qe.advance && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "tally", children: xt?.count ? `Vastattu ${xt.count} · itsenäisesti heti oikein ${xt.soloFirst}/${xt.solo}${xt.guided ? ` · vihjeen kanssa ${xt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !nt && J && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: J })
    ] }),
    !nt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ l.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(ze.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ l.jsx("a", { href: ym(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ l.jsx(rv, { store: i, s: a, locked: wn, changed: () => {
        const $ = ma(i.data.settings);
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
um.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ l.jsx(ov, {}));
//# sourceMappingURL=app.js.map
