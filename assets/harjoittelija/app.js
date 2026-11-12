function Vh(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Zl = { exports: {} }, bi = {}, ql = { exports: {} }, Ae = {};
var Kc;
function Bh() {
  if (Kc) return Ae;
  Kc = 1;
  var i = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), O = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), E = Symbol.iterator;
  function I(g) {
    return g === null || typeof g != "object" ? null : (g = E && g[E] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, _ = {};
  function T(g, L, he) {
    this.props = g, this.context = L, this.refs = _, this.updater = he || z;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(g, L) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, L, "setState");
  }, T.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function F() {
  }
  F.prototype = T.prototype;
  function M(g, L, he) {
    this.props = g, this.context = L, this.refs = _, this.updater = he || z;
  }
  var R = M.prototype = new F();
  R.constructor = M, D(R, T.prototype), R.isPureReactComponent = !0;
  var Q = Array.isArray, te = Object.prototype.hasOwnProperty, ee = { current: null }, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(g, L, he) {
    var Se, _e = {}, Ee = null, Y = null;
    if (L != null) for (Se in L.ref !== void 0 && (Y = L.ref), L.key !== void 0 && (Ee = "" + L.key), L) te.call(L, Se) && !$.hasOwnProperty(Se) && (_e[Se] = L[Se]);
    var Z = arguments.length - 2;
    if (Z === 1) _e.children = he;
    else if (1 < Z) {
      for (var G = Array(Z), le = 0; le < Z; le++) G[le] = arguments[le + 2];
      _e.children = G;
    }
    if (g && g.defaultProps) for (Se in Z = g.defaultProps, Z) _e[Se] === void 0 && (_e[Se] = Z[Se]);
    return { $$typeof: i, type: g, key: Ee, ref: Y, props: _e, _owner: ee.current };
  }
  function b(g, L) {
    return { $$typeof: i, type: g.type, key: L, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function q(g) {
    return typeof g == "object" && g !== null && g.$$typeof === i;
  }
  function Pe(g) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(he) {
      return L[he];
    });
  }
  var Fe = /\/+/g;
  function Ce(g, L) {
    return typeof g == "object" && g !== null && g.key != null ? Pe("" + g.key) : L.toString(36);
  }
  function Te(g, L, he, Se, _e) {
    var Ee = typeof g;
    (Ee === "undefined" || Ee === "boolean") && (g = null);
    var Y = !1;
    if (g === null) Y = !0;
    else switch (Ee) {
      case "string":
      case "number":
        Y = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case i:
          case a:
            Y = !0;
        }
    }
    if (Y) return Y = g, _e = _e(Y), g = Se === "" ? "." + Ce(Y, 0) : Se, Q(_e) ? (he = "", g != null && (he = g.replace(Fe, "$&/") + "/"), Te(_e, L, he, "", function(le) {
      return le;
    })) : _e != null && (q(_e) && (_e = b(_e, he + (!_e.key || Y && Y.key === _e.key ? "" : ("" + _e.key).replace(Fe, "$&/") + "/") + g)), L.push(_e)), 1;
    if (Y = 0, Se = Se === "" ? "." : Se + ":", Q(g)) for (var Z = 0; Z < g.length; Z++) {
      Ee = g[Z];
      var G = Se + Ce(Ee, Z);
      Y += Te(Ee, L, he, G, _e);
    }
    else if (G = I(g), typeof G == "function") for (g = G.call(g), Z = 0; !(Ee = g.next()).done; ) Ee = Ee.value, G = Se + Ce(Ee, Z++), Y += Te(Ee, L, he, G, _e);
    else if (Ee === "object") throw L = String(g), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
    return Y;
  }
  function ie(g, L, he) {
    if (g == null) return g;
    var Se = [], _e = 0;
    return Te(g, Se, "", "", function(Ee) {
      return L.call(he, Ee, _e++);
    }), Se;
  }
  function je(g) {
    if (g._status === -1) {
      var L = g._result;
      L = L(), L.then(function(he) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = he);
      }, function(he) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = he);
      }), g._status === -1 && (g._status = 0, g._result = L);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var ye = { current: null }, C = { transition: null }, K = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: C, ReactCurrentOwner: ee };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ae.Children = { map: ie, forEach: function(g, L, he) {
    ie(g, function() {
      L.apply(this, arguments);
    }, he);
  }, count: function(g) {
    var L = 0;
    return ie(g, function() {
      L++;
    }), L;
  }, toArray: function(g) {
    return ie(g, function(L) {
      return L;
    }) || [];
  }, only: function(g) {
    if (!q(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, Ae.Component = T, Ae.Fragment = u, Ae.Profiler = f, Ae.PureComponent = M, Ae.StrictMode = c, Ae.Suspense = j, Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, Ae.act = U, Ae.cloneElement = function(g, L, he) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var Se = D({}, g.props), _e = g.key, Ee = g.ref, Y = g._owner;
    if (L != null) {
      if (L.ref !== void 0 && (Ee = L.ref, Y = ee.current), L.key !== void 0 && (_e = "" + L.key), g.type && g.type.defaultProps) var Z = g.type.defaultProps;
      for (G in L) te.call(L, G) && !$.hasOwnProperty(G) && (Se[G] = L[G] === void 0 && Z !== void 0 ? Z[G] : L[G]);
    }
    var G = arguments.length - 2;
    if (G === 1) Se.children = he;
    else if (1 < G) {
      Z = Array(G);
      for (var le = 0; le < G; le++) Z[le] = arguments[le + 2];
      Se.children = Z;
    }
    return { $$typeof: i, type: g.type, key: _e, ref: Ee, props: Se, _owner: Y };
  }, Ae.createContext = function(g) {
    return g = { $$typeof: p, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: h, _context: g }, g.Consumer = g;
  }, Ae.createElement = w, Ae.createFactory = function(g) {
    var L = w.bind(null, g);
    return L.type = g, L;
  }, Ae.createRef = function() {
    return { current: null };
  }, Ae.forwardRef = function(g) {
    return { $$typeof: k, render: g };
  }, Ae.isValidElement = q, Ae.lazy = function(g) {
    return { $$typeof: v, _payload: { _status: -1, _result: g }, _init: je };
  }, Ae.memo = function(g, L) {
    return { $$typeof: O, type: g, compare: L === void 0 ? null : L };
  }, Ae.startTransition = function(g) {
    var L = C.transition;
    C.transition = {};
    try {
      g();
    } finally {
      C.transition = L;
    }
  }, Ae.unstable_act = U, Ae.useCallback = function(g, L) {
    return ye.current.useCallback(g, L);
  }, Ae.useContext = function(g) {
    return ye.current.useContext(g);
  }, Ae.useDebugValue = function() {
  }, Ae.useDeferredValue = function(g) {
    return ye.current.useDeferredValue(g);
  }, Ae.useEffect = function(g, L) {
    return ye.current.useEffect(g, L);
  }, Ae.useId = function() {
    return ye.current.useId();
  }, Ae.useImperativeHandle = function(g, L, he) {
    return ye.current.useImperativeHandle(g, L, he);
  }, Ae.useInsertionEffect = function(g, L) {
    return ye.current.useInsertionEffect(g, L);
  }, Ae.useLayoutEffect = function(g, L) {
    return ye.current.useLayoutEffect(g, L);
  }, Ae.useMemo = function(g, L) {
    return ye.current.useMemo(g, L);
  }, Ae.useReducer = function(g, L, he) {
    return ye.current.useReducer(g, L, he);
  }, Ae.useRef = function(g) {
    return ye.current.useRef(g);
  }, Ae.useState = function(g) {
    return ye.current.useState(g);
  }, Ae.useSyncExternalStore = function(g, L, he) {
    return ye.current.useSyncExternalStore(g, L, he);
  }, Ae.useTransition = function() {
    return ye.current.useTransition();
  }, Ae.version = "18.3.1", Ae;
}
var Gc;
function go() {
  return Gc || (Gc = 1, ql.exports = Bh()), ql.exports;
}
var Wc;
function bh() {
  if (Wc) return bi;
  Wc = 1;
  var i = go(), a = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(k, j, O) {
    var v, E = {}, I = null, z = null;
    O !== void 0 && (I = "" + O), j.key !== void 0 && (I = "" + j.key), j.ref !== void 0 && (z = j.ref);
    for (v in j) c.call(j, v) && !h.hasOwnProperty(v) && (E[v] = j[v]);
    if (k && k.defaultProps) for (v in j = k.defaultProps, j) E[v] === void 0 && (E[v] = j[v]);
    return { $$typeof: a, type: k, key: I, ref: z, props: E, _owner: f.current };
  }
  return bi.Fragment = u, bi.jsx = p, bi.jsxs = p, bi;
}
var Qc;
function Uh() {
  return Qc || (Qc = 1, Zl.exports = bh()), Zl.exports;
}
var l = Uh(), H = go(), aa = {}, eo = { exports: {} }, zt = {}, to = { exports: {} }, no = {};
var Yc;
function Hh() {
  return Yc || (Yc = 1, (function(i) {
    function a(C, K) {
      var U = C.length;
      C.push(K);
      e: for (; 0 < U; ) {
        var g = U - 1 >>> 1, L = C[g];
        if (0 < f(L, K)) C[g] = K, C[U] = L, U = g;
        else break e;
      }
    }
    function u(C) {
      return C.length === 0 ? null : C[0];
    }
    function c(C) {
      if (C.length === 0) return null;
      var K = C[0], U = C.pop();
      if (U !== K) {
        C[0] = U;
        e: for (var g = 0, L = C.length, he = L >>> 1; g < he; ) {
          var Se = 2 * (g + 1) - 1, _e = C[Se], Ee = Se + 1, Y = C[Ee];
          if (0 > f(_e, U)) Ee < L && 0 > f(Y, _e) ? (C[g] = Y, C[Ee] = U, g = Ee) : (C[g] = _e, C[Se] = U, g = Se);
          else if (Ee < L && 0 > f(Y, U)) C[g] = Y, C[Ee] = U, g = Ee;
          else break e;
        }
      }
      return K;
    }
    function f(C, K) {
      var U = C.sortIndex - K.sortIndex;
      return U !== 0 ? U : C.id - K.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, k = p.now();
      i.unstable_now = function() {
        return p.now() - k;
      };
    }
    var j = [], O = [], v = 1, E = null, I = 3, z = !1, D = !1, _ = !1, T = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function R(C) {
      for (var K = u(O); K !== null; ) {
        if (K.callback === null) c(O);
        else if (K.startTime <= C) c(O), K.sortIndex = K.expirationTime, a(j, K);
        else break;
        K = u(O);
      }
    }
    function Q(C) {
      if (_ = !1, R(C), !D) if (u(j) !== null) D = !0, je(te);
      else {
        var K = u(O);
        K !== null && ye(Q, K.startTime - C);
      }
    }
    function te(C, K) {
      D = !1, _ && (_ = !1, F(w), w = -1), z = !0;
      var U = I;
      try {
        for (R(K), E = u(j); E !== null && (!(E.expirationTime > K) || C && !Pe()); ) {
          var g = E.callback;
          if (typeof g == "function") {
            E.callback = null, I = E.priorityLevel;
            var L = g(E.expirationTime <= K);
            K = i.unstable_now(), typeof L == "function" ? E.callback = L : E === u(j) && c(j), R(K);
          } else c(j);
          E = u(j);
        }
        if (E !== null) var he = !0;
        else {
          var Se = u(O);
          Se !== null && ye(Q, Se.startTime - K), he = !1;
        }
        return he;
      } finally {
        E = null, I = U, z = !1;
      }
    }
    var ee = !1, $ = null, w = -1, b = 5, q = -1;
    function Pe() {
      return !(i.unstable_now() - q < b);
    }
    function Fe() {
      if ($ !== null) {
        var C = i.unstable_now();
        q = C;
        var K = !0;
        try {
          K = $(!0, C);
        } finally {
          K ? Ce() : (ee = !1, $ = null);
        }
      } else ee = !1;
    }
    var Ce;
    if (typeof M == "function") Ce = function() {
      M(Fe);
    };
    else if (typeof MessageChannel < "u") {
      var Te = new MessageChannel(), ie = Te.port2;
      Te.port1.onmessage = Fe, Ce = function() {
        ie.postMessage(null);
      };
    } else Ce = function() {
      T(Fe, 0);
    };
    function je(C) {
      $ = C, ee || (ee = !0, Ce());
    }
    function ye(C, K) {
      w = T(function() {
        C(i.unstable_now());
      }, K);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, i.unstable_continueExecution = function() {
      D || z || (D = !0, je(te));
    }, i.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < C ? Math.floor(1e3 / C) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, i.unstable_getFirstCallbackNode = function() {
      return u(j);
    }, i.unstable_next = function(C) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = I;
      }
      var U = I;
      I = K;
      try {
        return C();
      } finally {
        I = U;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(C, K) {
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
      var U = I;
      I = C;
      try {
        return K();
      } finally {
        I = U;
      }
    }, i.unstable_scheduleCallback = function(C, K, U) {
      var g = i.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? g + U : g) : U = g, C) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return L = U + L, C = { id: v++, callback: K, priorityLevel: C, startTime: U, expirationTime: L, sortIndex: -1 }, U > g ? (C.sortIndex = U, a(O, C), u(j) === null && C === u(O) && (_ ? (F(w), w = -1) : _ = !0, ye(Q, U - g))) : (C.sortIndex = L, a(j, C), D || z || (D = !0, je(te))), C;
    }, i.unstable_shouldYield = Pe, i.unstable_wrapCallback = function(C) {
      var K = I;
      return function() {
        var U = I;
        I = K;
        try {
          return C.apply(this, arguments);
        } finally {
          I = U;
        }
      };
    };
  })(no)), no;
}
var Jc;
function Kh() {
  return Jc || (Jc = 1, to.exports = Hh()), to.exports;
}
var Xc;
function Gh() {
  if (Xc) return zt;
  Xc = 1;
  var i = go(), a = Kh();
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
  var k = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, E = {};
  function I(e) {
    return j.call(E, e) ? !0 : j.call(v, e) ? !1 : O.test(e) ? E[e] = !0 : (v[e] = !0, !1);
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
  function D(e, t, n, r) {
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
  function _(e, t, n, r, s, o, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = d;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    T[e] = new _(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    T[t] = new _(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    T[e] = new _(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    T[e] = new _(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    T[e] = new _(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    T[e] = new _(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    T[e] = new _(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    T[e] = new _(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    T[e] = new _(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var F = /[\-:]([a-z])/g;
  function M(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      F,
      M
    );
    T[t] = new _(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(F, M);
    T[t] = new _(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(F, M);
    T[t] = new _(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    T[e] = new _(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new _("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    T[e] = new _(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function R(e, t, n, r) {
    var s = T.hasOwnProperty(t) ? T[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, s, r) && (n = null), r || s === null ? I(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Q = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, te = /* @__PURE__ */ Symbol.for("react.element"), ee = /* @__PURE__ */ Symbol.for("react.portal"), $ = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.provider"), Pe = /* @__PURE__ */ Symbol.for("react.context"), Fe = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ce = /* @__PURE__ */ Symbol.for("react.suspense"), Te = /* @__PURE__ */ Symbol.for("react.suspense_list"), ie = /* @__PURE__ */ Symbol.for("react.memo"), je = /* @__PURE__ */ Symbol.for("react.lazy"), ye = /* @__PURE__ */ Symbol.for("react.offscreen"), C = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != "object" ? null : (e = C && e[C] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var U = Object.assign, g;
  function L(e) {
    if (g === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      g = t && t[1] || "";
    }
    return `
` + g + e;
  }
  var he = !1;
  function Se(e, t) {
    if (!e || he) return "";
    he = !0;
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
        for (var s = P.stack.split(`
`), o = r.stack.split(`
`), d = s.length - 1, m = o.length - 1; 1 <= d && 0 <= m && s[d] !== o[m]; ) m--;
        for (; 1 <= d && 0 <= m; d--, m--) if (s[d] !== o[m]) {
          if (d !== 1 || m !== 1)
            do
              if (d--, m--, 0 > m || s[d] !== o[m]) {
                var y = `
` + s[d].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= d && 0 <= m);
          break;
        }
      }
    } finally {
      he = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? L(e) : "";
  }
  function _e(e) {
    switch (e.tag) {
      case 5:
        return L(e.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Se(e.type, !1), e;
      case 11:
        return e = Se(e.type.render, !1), e;
      case 1:
        return e = Se(e.type, !0), e;
      default:
        return "";
    }
  }
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case ee:
        return "Portal";
      case b:
        return "Profiler";
      case w:
        return "StrictMode";
      case Ce:
        return "Suspense";
      case Te:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Pe:
        return (e.displayName || "Context") + ".Consumer";
      case q:
        return (e._context.displayName || "Context") + ".Provider";
      case Fe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ie:
        return t = e.displayName || null, t !== null ? t : Ee(e.type) || "Memo";
      case je:
        t = e._payload, e = e._init;
        try {
          return Ee(e(t));
        } catch {
        }
    }
    return null;
  }
  function Y(e) {
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
        return t === w ? "StrictMode" : "Mode";
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
  function Z(e) {
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
  function G(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function le(e) {
    var t = G(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function ge(e) {
    e._valueTracker || (e._valueTracker = le(e));
  }
  function ce(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = G(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function de(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function fe(e, t) {
    var n = t.checked;
    return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ne(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Z(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function xe(e, t) {
    t = t.checked, t != null && R(e, "checked", t, !1);
  }
  function Re(e, t) {
    xe(e, t);
    var n = Z(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Be(e, t.type, n) : t.hasOwnProperty("defaultValue") && Be(e, t.type, Z(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function We(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Be(e, t, n) {
    (t !== "number" || de(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ge = Array.isArray;
  function be(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Z(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function kt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Qe(e, t) {
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
    e._wrapperState = { initialValue: Z(n) };
  }
  function ze(e, t) {
    var n = Z(t.value), r = Z(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function et(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function _t(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Vt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? _t(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Bt, sn = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, s);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Bt = Bt || document.createElement("div"), Bt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Bt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Qt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Yt = {
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
  }, Tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Yt).forEach(function(e) {
    Tt.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Yt[t] = Yt[e];
    });
  });
  function me(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Yt.hasOwnProperty(e) && Yt[e] ? ("" + t).trim() : t + "px";
  }
  function bt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, s = me(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
    }
  }
  var ke = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Me(e, t) {
    if (t) {
      if (ke[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function $e(e, t) {
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
  var Ue = null;
  function it(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Rt = null, mt = null, Jt = null;
  function wn(e) {
    if (e = _i(e)) {
      if (typeof Rt != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = js(t), Rt(e.stateNode, e.type, t));
    }
  }
  function pn(e) {
    mt ? Jt ? Jt.push(e) : Jt = [e] : mt = e;
  }
  function vn() {
    if (mt) {
      var e = mt, t = Jt;
      if (Jt = mt = null, wn(e), t) for (e = 0; e < t.length; e++) wn(t[e]);
    }
  }
  function Xi(e, t) {
    return e(t);
  }
  function Le() {
  }
  var Xe = !1;
  function Ye(e, t, n) {
    if (Xe) return e(t, n);
    Xe = !0;
    try {
      return Xi(e, t, n);
    } finally {
      Xe = !1, (mt !== null || Jt !== null) && (Le(), vn());
    }
  }
  function ot(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = js(n);
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
  var Ut = !1;
  if (k) try {
    var Xt = {};
    Object.defineProperty(Xt, "passive", { get: function() {
      Ut = !0;
    } }), window.addEventListener("test", Xt, Xt), window.removeEventListener("test", Xt, Xt);
  } catch {
    Ut = !1;
  }
  function Cr(e, t, n, r, s, o, d, m, y) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, P);
    } catch (B) {
      this.onError(B);
    }
  }
  var En = !1, In = null, lr = !1, si = null, or = { onError: function(e) {
    En = !0, In = e;
  } };
  function ai(e, t, n, r, s, o, d, m, y) {
    En = !1, In = null, Cr.apply(or, arguments);
  }
  function Zi(e, t, n, r, s, o, d, m, y) {
    if (ai.apply(this, arguments), En) {
      if (En) {
        var P = In;
        En = !1, In = null;
      } else throw Error(u(198));
      lr || (lr = !0, si = P);
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
  function qi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function gt(e) {
    if (Nn(e) !== e) throw Error(u(188));
  }
  function ka(e) {
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
          if (o === n) return gt(s), e;
          if (o === r) return gt(s), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) n = s, r = o;
      else {
        for (var d = !1, m = s.child; m; ) {
          if (m === n) {
            d = !0, n = s, r = o;
            break;
          }
          if (m === r) {
            d = !0, r = s, n = o;
            break;
          }
          m = m.sibling;
        }
        if (!d) {
          for (m = o.child; m; ) {
            if (m === n) {
              d = !0, n = o, r = s;
              break;
            }
            if (m === r) {
              d = !0, r = o, n = s;
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
  function li(e) {
    return e = ka(e), e !== null ? es(e) : null;
  }
  function es(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = es(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ts = a.unstable_scheduleCallback, Cn = a.unstable_cancelCallback, Dn = a.unstable_shouldYield, A = a.unstable_requestPaint, X = a.unstable_now, Ie = a.unstable_getCurrentPriorityLevel, At = a.unstable_ImmediatePriority, ut = a.unstable_UserBlockingPriority, _n = a.unstable_NormalPriority, oi = a.unstable_LowPriority, zn = a.unstable_IdlePriority, ns = null, yn = null;
  function ef(e) {
    if (yn && typeof yn.onCommitFiberRoot == "function") try {
      yn.onCommitFiberRoot(ns, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var an = Math.clz32 ? Math.clz32 : rf, tf = Math.log, nf = Math.LN2;
  function rf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (tf(e) / nf | 0) | 0;
  }
  var rs = 64, is = 4194304;
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
  function ss(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, s = e.suspendedLanes, o = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var m = d & ~s;
      m !== 0 ? r = ui(m) : (o &= d, o !== 0 && (r = ui(o)));
    } else d = n & ~s, d !== 0 ? r = ui(d) : o !== 0 && (r = ui(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & s) === 0 && (s = r & -r, o = t & -t, s >= o || s === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - an(t), s = 1 << n, r |= e[n], t &= ~s;
    return r;
  }
  function sf(e, t) {
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
  function af(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var d = 31 - an(o), m = 1 << d, y = s[d];
      y === -1 ? ((m & n) === 0 || (m & r) !== 0) && (s[d] = sf(m, t)) : y <= t && (e.expiredLanes |= m), o &= ~m;
    }
  }
  function ga(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function So() {
    var e = rs;
    return rs <<= 1, (rs & 4194240) === 0 && (rs = 64), e;
  }
  function xa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ci(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - an(t), e[t] = n;
  }
  function lf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - an(n), o = 1 << s;
      t[s] = 0, r[s] = -1, e[s] = -1, n &= ~o;
    }
  }
  function ja(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - an(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  var Ke = 0;
  function wo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Eo, Sa, No, Co, _o, wa = !1, as = [], Vn = null, Bn = null, bn = null, di = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), Un = [], of = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function To(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vn = null;
        break;
      case "dragenter":
      case "dragleave":
        Bn = null;
        break;
      case "mouseover":
      case "mouseout":
        bn = null;
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
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [s] }, t !== null && (t = _i(t), t !== null && Sa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function uf(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return Vn = hi(Vn, e, t, n, r, s), !0;
      case "dragenter":
        return Bn = hi(Bn, e, t, n, r, s), !0;
      case "mouseover":
        return bn = hi(bn, e, t, n, r, s), !0;
      case "pointerover":
        var o = s.pointerId;
        return di.set(o, hi(di.get(o) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return o = s.pointerId, fi.set(o, hi(fi.get(o) || null, e, t, n, r, s)), !0;
    }
    return !1;
  }
  function Mo(e) {
    var t = ur(e.target);
    if (t !== null) {
      var n = Nn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = qi(n), t !== null) {
            e.blockedOn = t, _o(e.priority, function() {
              No(n);
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
  function ls(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Na(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ue = r, n.target.dispatchEvent(r), Ue = null;
      } else return t = _i(n), t !== null && Sa(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Po(e, t, n) {
    ls(e) && n.delete(t);
  }
  function cf() {
    wa = !1, Vn !== null && ls(Vn) && (Vn = null), Bn !== null && ls(Bn) && (Bn = null), bn !== null && ls(bn) && (bn = null), di.forEach(Po), fi.forEach(Po);
  }
  function mi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, wa || (wa = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, cf)));
  }
  function pi(e) {
    function t(s) {
      return mi(s, e);
    }
    if (0 < as.length) {
      mi(as[0], e);
      for (var n = 1; n < as.length; n++) {
        var r = as[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Vn !== null && mi(Vn, e), Bn !== null && mi(Bn, e), bn !== null && mi(bn, e), di.forEach(t), fi.forEach(t), n = 0; n < Un.length; n++) r = Un[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) Mo(n), n.blockedOn === null && Un.shift();
  }
  var _r = Q.ReactCurrentBatchConfig, os = !0;
  function df(e, t, n, r) {
    var s = Ke, o = _r.transition;
    _r.transition = null;
    try {
      Ke = 1, Ea(e, t, n, r);
    } finally {
      Ke = s, _r.transition = o;
    }
  }
  function ff(e, t, n, r) {
    var s = Ke, o = _r.transition;
    _r.transition = null;
    try {
      Ke = 4, Ea(e, t, n, r);
    } finally {
      Ke = s, _r.transition = o;
    }
  }
  function Ea(e, t, n, r) {
    if (os) {
      var s = Na(e, t, n, r);
      if (s === null) ba(e, t, r, us, n), To(e, r);
      else if (uf(s, e, t, n, r)) r.stopPropagation();
      else if (To(e, r), t & 4 && -1 < of.indexOf(e)) {
        for (; s !== null; ) {
          var o = _i(s);
          if (o !== null && Eo(o), o = Na(e, t, n, r), o === null && ba(e, t, r, us, n), o === s) break;
          s = o;
        }
        s !== null && r.stopPropagation();
      } else ba(e, t, r, null, n);
    }
  }
  var us = null;
  function Na(e, t, n, r) {
    if (us = null, e = it(r), e = ur(e), e !== null) if (t = Nn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = qi(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return us = e, null;
  }
  function $o(e) {
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
        switch (Ie()) {
          case At:
            return 1;
          case ut:
            return 4;
          case _n:
          case oi:
            return 16;
          case zn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Hn = null, Ca = null, cs = null;
  function Ro() {
    if (cs) return cs;
    var e, t = Ca, n = t.length, r, s = "value" in Hn ? Hn.value : Hn.textContent, o = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === s[o - r]; r++) ;
    return cs = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ds(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function fs() {
    return !0;
  }
  function Ao() {
    return !1;
  }
  function Ht(e) {
    function t(n, r, s, o, d) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = o, this.target = d, this.currentTarget = null;
      for (var m in e) e.hasOwnProperty(m) && (n = e[m], this[m] = n ? n(o) : o[m]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? fs : Ao, this.isPropagationStopped = Ao, this;
    }
    return U(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = fs);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = fs);
    }, persist: function() {
    }, isPersistent: fs }), t;
  }
  var Tr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, _a = Ht(Tr), vi = U({}, Tr, { view: 0, detail: 0 }), hf = Ht(vi), Ta, Ma, yi, hs = U({}, vi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $a, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== yi && (yi && e.type === "mousemove" ? (Ta = e.screenX - yi.screenX, Ma = e.screenY - yi.screenY) : Ma = Ta = 0, yi = e), Ta);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ma;
  } }), Fo = Ht(hs), mf = U({}, hs, { dataTransfer: 0 }), pf = Ht(mf), vf = U({}, vi, { relatedTarget: 0 }), Pa = Ht(vf), yf = U({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), kf = Ht(yf), gf = U({}, Tr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), xf = Ht(gf), jf = U({}, Tr, { data: 0 }), Lo = Ht(jf), Sf = {
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
  }, wf = {
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
  }, Ef = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Nf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ef[e]) ? !!t[e] : !1;
  }
  function $a() {
    return Nf;
  }
  var Cf = U({}, vi, { key: function(e) {
    if (e.key) {
      var t = Sf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ds(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $a, charCode: function(e) {
    return e.type === "keypress" ? ds(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ds(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), _f = Ht(Cf), Tf = U({}, hs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oo = Ht(Tf), Mf = U({}, vi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $a }), Pf = Ht(Mf), $f = U({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rf = Ht($f), Af = U({}, hs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ff = Ht(Af), Lf = [9, 13, 27, 32], Ra = k && "CompositionEvent" in window, ki = null;
  k && "documentMode" in document && (ki = document.documentMode);
  var Of = k && "TextEvent" in window && !ki, Io = k && (!Ra || ki && 8 < ki && 11 >= ki), Do = " ", zo = !1;
  function Vo(e, t) {
    switch (e) {
      case "keyup":
        return Lf.indexOf(t.keyCode) !== -1;
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
  function Bo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Mr = !1;
  function If(e, t) {
    switch (e) {
      case "compositionend":
        return Bo(t);
      case "keypress":
        return t.which !== 32 ? null : (zo = !0, Do);
      case "textInput":
        return e = t.data, e === Do && zo ? null : e;
      default:
        return null;
    }
  }
  function Df(e, t) {
    if (Mr) return e === "compositionend" || !Ra && Vo(e, t) ? (e = Ro(), cs = Ca = Hn = null, Mr = !1, e) : null;
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
        return Io && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function bo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zf[e.type] : t === "textarea";
  }
  function Uo(e, t, n, r) {
    pn(r), t = ks(t, "onChange"), 0 < t.length && (n = new _a("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var gi = null, xi = null;
  function Vf(e) {
    lu(e, 0);
  }
  function ms(e) {
    var t = Fr(e);
    if (ce(t)) return e;
  }
  function Bf(e, t) {
    if (e === "change") return t;
  }
  var Ho = !1;
  if (k) {
    var Aa;
    if (k) {
      var Fa = "oninput" in document;
      if (!Fa) {
        var Ko = document.createElement("div");
        Ko.setAttribute("oninput", "return;"), Fa = typeof Ko.oninput == "function";
      }
      Aa = Fa;
    } else Aa = !1;
    Ho = Aa && (!document.documentMode || 9 < document.documentMode);
  }
  function Go() {
    gi && (gi.detachEvent("onpropertychange", Wo), xi = gi = null);
  }
  function Wo(e) {
    if (e.propertyName === "value" && ms(xi)) {
      var t = [];
      Uo(t, xi, e, it(e)), Ye(Vf, t);
    }
  }
  function bf(e, t, n) {
    e === "focusin" ? (Go(), gi = t, xi = n, gi.attachEvent("onpropertychange", Wo)) : e === "focusout" && Go();
  }
  function Uf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ms(xi);
  }
  function Hf(e, t) {
    if (e === "click") return ms(t);
  }
  function Kf(e, t) {
    if (e === "input" || e === "change") return ms(t);
  }
  function Gf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ln = typeof Object.is == "function" ? Object.is : Gf;
  function ji(e, t) {
    if (ln(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!j.call(t, s) || !ln(e[s], t[s])) return !1;
    }
    return !0;
  }
  function Qo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Yo(e, t) {
    var n = Qo(e);
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
      n = Qo(n);
    }
  }
  function Jo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Xo() {
    for (var e = window, t = de(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = de(e.document);
    }
    return t;
  }
  function La(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Wf(e) {
    var t = Xo(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Jo(n.ownerDocument.documentElement, n)) {
      if (r !== null && La(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, o = Math.min(r.start, s);
          r = r.end === void 0 ? o : Math.min(r.end, s), !e.extend && o > r && (s = r, r = o, o = s), s = Yo(n, o);
          var d = Yo(
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
  var Qf = k && "documentMode" in document && 11 >= document.documentMode, Pr = null, Oa = null, Si = null, Ia = !1;
  function Zo(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ia || Pr == null || Pr !== de(r) || (r = Pr, "selectionStart" in r && La(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Si && ji(Si, r) || (Si = r, r = ks(Oa, "onSelect"), 0 < r.length && (t = new _a("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Pr)));
  }
  function ps(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var $r = { animationend: ps("Animation", "AnimationEnd"), animationiteration: ps("Animation", "AnimationIteration"), animationstart: ps("Animation", "AnimationStart"), transitionend: ps("Transition", "TransitionEnd") }, Da = {}, qo = {};
  k && (qo = document.createElement("div").style, "AnimationEvent" in window || (delete $r.animationend.animation, delete $r.animationiteration.animation, delete $r.animationstart.animation), "TransitionEvent" in window || delete $r.transitionend.transition);
  function vs(e) {
    if (Da[e]) return Da[e];
    if (!$r[e]) return e;
    var t = $r[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in qo) return Da[e] = t[n];
    return e;
  }
  var eu = vs("animationend"), tu = vs("animationiteration"), nu = vs("animationstart"), ru = vs("transitionend"), iu = /* @__PURE__ */ new Map(), su = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Kn(e, t) {
    iu.set(e, t), h(t, [e]);
  }
  for (var za = 0; za < su.length; za++) {
    var Va = su[za], Yf = Va.toLowerCase(), Jf = Va[0].toUpperCase() + Va.slice(1);
    Kn(Yf, "on" + Jf);
  }
  Kn(eu, "onAnimationEnd"), Kn(tu, "onAnimationIteration"), Kn(nu, "onAnimationStart"), Kn("dblclick", "onDoubleClick"), Kn("focusin", "onFocus"), Kn("focusout", "onBlur"), Kn(ru, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xf = new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));
  function au(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Zi(r, t, void 0, e), e.currentTarget = null;
  }
  function lu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var m = r[d], y = m.instance, P = m.currentTarget;
          if (m = m.listener, y !== o && s.isPropagationStopped()) break e;
          au(s, m, P), o = y;
        }
        else for (d = 0; d < r.length; d++) {
          if (m = r[d], y = m.instance, P = m.currentTarget, m = m.listener, y !== o && s.isPropagationStopped()) break e;
          au(s, m, P), o = y;
        }
      }
    }
    if (lr) throw e = si, lr = !1, si = null, e;
  }
  function Ze(e, t) {
    var n = t[Qa];
    n === void 0 && (n = t[Qa] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ou(t, e, 2, !1), n.add(r));
  }
  function Ba(e, t, n) {
    var r = 0;
    t && (r |= 4), ou(n, e, r, t);
  }
  var ys = "_reactListening" + Math.random().toString(36).slice(2);
  function Ei(e) {
    if (!e[ys]) {
      e[ys] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Xf.has(n) || Ba(n, !1, e), Ba(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ys] || (t[ys] = !0, Ba("selectionchange", !1, t));
    }
  }
  function ou(e, t, n, r) {
    switch ($o(t)) {
      case 1:
        var s = df;
        break;
      case 4:
        s = ff;
        break;
      default:
        s = Ea;
    }
    n = s.bind(null, t, n, e), s = void 0, !Ut || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function ba(e, t, n, r, s) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var d = r.tag;
      if (d === 3 || d === 4) {
        var m = r.stateNode.containerInfo;
        if (m === s || m.nodeType === 8 && m.parentNode === s) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var y = d.tag;
          if ((y === 3 || y === 4) && (y = d.stateNode.containerInfo, y === s || y.nodeType === 8 && y.parentNode === s)) return;
          d = d.return;
        }
        for (; m !== null; ) {
          if (d = ur(m), d === null) return;
          if (y = d.tag, y === 5 || y === 6) {
            r = o = d;
            continue e;
          }
          m = m.parentNode;
        }
      }
      r = r.return;
    }
    Ye(function() {
      var P = o, B = it(n), W = [];
      e: {
        var V = iu.get(e);
        if (V !== void 0) {
          var ne = _a, se = e;
          switch (e) {
            case "keypress":
              if (ds(n) === 0) break e;
            case "keydown":
            case "keyup":
              ne = _f;
              break;
            case "focusin":
              se = "focus", ne = Pa;
              break;
            case "focusout":
              se = "blur", ne = Pa;
              break;
            case "beforeblur":
            case "afterblur":
              ne = Pa;
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
              ne = Fo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ne = pf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ne = Pf;
              break;
            case eu:
            case tu:
            case nu:
              ne = kf;
              break;
            case ru:
              ne = Rf;
              break;
            case "scroll":
              ne = hf;
              break;
            case "wheel":
              ne = Ff;
              break;
            case "copy":
            case "cut":
            case "paste":
              ne = xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ne = Oo;
          }
          var oe = (t & 4) !== 0, ct = !oe && e === "scroll", S = oe ? V !== null ? V + "Capture" : null : V;
          oe = [];
          for (var x = P, N; x !== null; ) {
            N = x;
            var J = N.stateNode;
            if (N.tag === 5 && J !== null && (N = J, S !== null && (J = ot(x, S), J != null && oe.push(Ni(x, J, N)))), ct) break;
            x = x.return;
          }
          0 < oe.length && (V = new ne(V, se, null, n, B), W.push({ event: V, listeners: oe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (V = e === "mouseover" || e === "pointerover", ne = e === "mouseout" || e === "pointerout", V && n !== Ue && (se = n.relatedTarget || n.fromElement) && (ur(se) || se[Tn])) break e;
          if ((ne || V) && (V = B.window === B ? B : (V = B.ownerDocument) ? V.defaultView || V.parentWindow : window, ne ? (se = n.relatedTarget || n.toElement, ne = P, se = se ? ur(se) : null, se !== null && (ct = Nn(se), se !== ct || se.tag !== 5 && se.tag !== 6) && (se = null)) : (ne = null, se = P), ne !== se)) {
            if (oe = Fo, J = "onMouseLeave", S = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (oe = Oo, J = "onPointerLeave", S = "onPointerEnter", x = "pointer"), ct = ne == null ? V : Fr(ne), N = se == null ? V : Fr(se), V = new oe(J, x + "leave", ne, n, B), V.target = ct, V.relatedTarget = N, J = null, ur(B) === P && (oe = new oe(S, x + "enter", se, n, B), oe.target = N, oe.relatedTarget = ct, J = oe), ct = J, ne && se) t: {
              for (oe = ne, S = se, x = 0, N = oe; N; N = Rr(N)) x++;
              for (N = 0, J = S; J; J = Rr(J)) N++;
              for (; 0 < x - N; ) oe = Rr(oe), x--;
              for (; 0 < N - x; ) S = Rr(S), N--;
              for (; x--; ) {
                if (oe === S || S !== null && oe === S.alternate) break t;
                oe = Rr(oe), S = Rr(S);
              }
              oe = null;
            }
            else oe = null;
            ne !== null && uu(W, V, ne, oe, !1), se !== null && ct !== null && uu(W, ct, se, oe, !0);
          }
        }
        e: {
          if (V = P ? Fr(P) : window, ne = V.nodeName && V.nodeName.toLowerCase(), ne === "select" || ne === "input" && V.type === "file") var ue = Bf;
          else if (bo(V)) if (Ho) ue = Kf;
          else {
            ue = Uf;
            var pe = bf;
          }
          else (ne = V.nodeName) && ne.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (ue = Hf);
          if (ue && (ue = ue(e, P))) {
            Uo(W, ue, n, B);
            break e;
          }
          pe && pe(e, V, P), e === "focusout" && (pe = V._wrapperState) && pe.controlled && V.type === "number" && Be(V, "number", V.value);
        }
        switch (pe = P ? Fr(P) : window, e) {
          case "focusin":
            (bo(pe) || pe.contentEditable === "true") && (Pr = pe, Oa = P, Si = null);
            break;
          case "focusout":
            Si = Oa = Pr = null;
            break;
          case "mousedown":
            Ia = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ia = !1, Zo(W, n, B);
            break;
          case "selectionchange":
            if (Qf) break;
          case "keydown":
          case "keyup":
            Zo(W, n, B);
        }
        var ve;
        if (Ra) e: {
          switch (e) {
            case "compositionstart":
              var we = "onCompositionStart";
              break e;
            case "compositionend":
              we = "onCompositionEnd";
              break e;
            case "compositionupdate":
              we = "onCompositionUpdate";
              break e;
          }
          we = void 0;
        }
        else Mr ? Vo(e, n) && (we = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (we = "onCompositionStart");
        we && (Io && n.locale !== "ko" && (Mr || we !== "onCompositionStart" ? we === "onCompositionEnd" && Mr && (ve = Ro()) : (Hn = B, Ca = "value" in Hn ? Hn.value : Hn.textContent, Mr = !0)), pe = ks(P, we), 0 < pe.length && (we = new Lo(we, e, null, n, B), W.push({ event: we, listeners: pe }), ve ? we.data = ve : (ve = Bo(n), ve !== null && (we.data = ve)))), (ve = Of ? If(e, n) : Df(e, n)) && (P = ks(P, "onBeforeInput"), 0 < P.length && (B = new Lo("onBeforeInput", "beforeinput", null, n, B), W.push({ event: B, listeners: P }), B.data = ve));
      }
      lu(W, t);
    });
  }
  function Ni(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ks(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, o = s.stateNode;
      s.tag === 5 && o !== null && (s = o, o = ot(e, n), o != null && r.unshift(Ni(e, o, s)), o = ot(e, t), o != null && r.push(Ni(e, o, s))), e = e.return;
    }
    return r;
  }
  function Rr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function uu(e, t, n, r, s) {
    for (var o = t._reactName, d = []; n !== null && n !== r; ) {
      var m = n, y = m.alternate, P = m.stateNode;
      if (y !== null && y === r) break;
      m.tag === 5 && P !== null && (m = P, s ? (y = ot(n, o), y != null && d.unshift(Ni(n, y, m))) : s || (y = ot(n, o), y != null && d.push(Ni(n, y, m)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Zf = /\r\n?/g, qf = /\u0000|\uFFFD/g;
  function cu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Zf, `
`).replace(qf, "");
  }
  function gs(e, t, n) {
    if (t = cu(t), cu(e) !== t && n) throw Error(u(425));
  }
  function xs() {
  }
  var Ua = null, Ha = null;
  function Ka(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ga = typeof setTimeout == "function" ? setTimeout : void 0, eh = typeof clearTimeout == "function" ? clearTimeout : void 0, du = typeof Promise == "function" ? Promise : void 0, th = typeof queueMicrotask == "function" ? queueMicrotask : typeof du < "u" ? function(e) {
    return du.resolve(null).then(e).catch(nh);
  } : Ga;
  function nh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Wa(e, t) {
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
  function fu(e) {
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
  var Ar = Math.random().toString(36).slice(2), kn = "__reactFiber$" + Ar, Ci = "__reactProps$" + Ar, Tn = "__reactContainer$" + Ar, Qa = "__reactEvents$" + Ar, rh = "__reactListeners$" + Ar, ih = "__reactHandles$" + Ar;
  function ur(e) {
    var t = e[kn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Tn] || n[kn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fu(e); e !== null; ) {
          if (n = e[kn]) return n;
          e = fu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function _i(e) {
    return e = e[kn] || e[Tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function js(e) {
    return e[Ci] || null;
  }
  var Ya = [], Lr = -1;
  function Wn(e) {
    return { current: e };
  }
  function qe(e) {
    0 > Lr || (e.current = Ya[Lr], Ya[Lr] = null, Lr--);
  }
  function Je(e, t) {
    Lr++, Ya[Lr] = e.current, e.current = t;
  }
  var Qn = {}, wt = Wn(Qn), Ft = Wn(!1), cr = Qn;
  function Or(e, t) {
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
  function Ss() {
    qe(Ft), qe(wt);
  }
  function hu(e, t, n) {
    if (wt.current !== Qn) throw Error(u(168));
    Je(wt, t), Je(Ft, n);
  }
  function mu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(u(108, Y(e) || "Unknown", s));
    return U({}, n, r);
  }
  function ws(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qn, cr = wt.current, Je(wt, e), Je(Ft, Ft.current), !0;
  }
  function pu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = mu(e, t, cr), r.__reactInternalMemoizedMergedChildContext = e, qe(Ft), qe(wt), Je(wt, e)) : qe(Ft), Je(Ft, n);
  }
  var Mn = null, Es = !1, Ja = !1;
  function vu(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function sh(e) {
    Es = !0, vu(e);
  }
  function Yn() {
    if (!Ja && Mn !== null) {
      Ja = !0;
      var e = 0, t = Ke;
      try {
        var n = Mn;
        for (Ke = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Mn = null, Es = !1;
      } catch (s) {
        throw Mn !== null && (Mn = Mn.slice(e + 1)), ts(At, Yn), s;
      } finally {
        Ke = t, Ja = !1;
      }
    }
    return null;
  }
  var Ir = [], Dr = 0, Ns = null, Cs = 0, Zt = [], qt = 0, dr = null, Pn = 1, $n = "";
  function fr(e, t) {
    Ir[Dr++] = Cs, Ir[Dr++] = Ns, Ns = e, Cs = t;
  }
  function yu(e, t, n) {
    Zt[qt++] = Pn, Zt[qt++] = $n, Zt[qt++] = dr, dr = e;
    var r = Pn;
    e = $n;
    var s = 32 - an(r) - 1;
    r &= ~(1 << s), n += 1;
    var o = 32 - an(t) + s;
    if (30 < o) {
      var d = s - s % 5;
      o = (r & (1 << d) - 1).toString(32), r >>= d, s -= d, Pn = 1 << 32 - an(t) + s | n << s | r, $n = o + e;
    } else Pn = 1 << o | n << s | r, $n = e;
  }
  function Xa(e) {
    e.return !== null && (fr(e, 1), yu(e, 1, 0));
  }
  function Za(e) {
    for (; e === Ns; ) Ns = Ir[--Dr], Ir[Dr] = null, Cs = Ir[--Dr], Ir[Dr] = null;
    for (; e === dr; ) dr = Zt[--qt], Zt[qt] = null, $n = Zt[--qt], Zt[qt] = null, Pn = Zt[--qt], Zt[qt] = null;
  }
  var Kt = null, Gt = null, tt = !1, on = null;
  function ku(e, t) {
    var n = rn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function gu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Kt = e, Gt = Gn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Kt = e, Gt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dr !== null ? { id: Pn, overflow: $n } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Kt = e, Gt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function qa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function el(e) {
    if (tt) {
      var t = Gt;
      if (t) {
        var n = t;
        if (!gu(e, t)) {
          if (qa(e)) throw Error(u(418));
          t = Gn(n.nextSibling);
          var r = Kt;
          t && gu(e, t) ? ku(r, n) : (e.flags = e.flags & -4097 | 2, tt = !1, Kt = e);
        }
      } else {
        if (qa(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, tt = !1, Kt = e;
      }
    }
  }
  function xu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Kt = e;
  }
  function _s(e) {
    if (e !== Kt) return !1;
    if (!tt) return xu(e), tt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ka(e.type, e.memoizedProps)), t && (t = Gt)) {
      if (qa(e)) throw ju(), Error(u(418));
      for (; t; ) ku(e, t), t = Gn(t.nextSibling);
    }
    if (xu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Gt = Gn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Gt = null;
      }
    } else Gt = Kt ? Gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ju() {
    for (var e = Gt; e; ) e = Gn(e.nextSibling);
  }
  function zr() {
    Gt = Kt = null, tt = !1;
  }
  function tl(e) {
    on === null ? on = [e] : on.push(e);
  }
  var ah = Q.ReactCurrentBatchConfig;
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
          var m = s.refs;
          d === null ? delete m[o] : m[o] = d;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function Ts(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Su(e) {
    var t = e._init;
    return t(e._payload);
  }
  function wu(e) {
    function t(S, x) {
      if (e) {
        var N = S.deletions;
        N === null ? (S.deletions = [x], S.flags |= 16) : N.push(x);
      }
    }
    function n(S, x) {
      if (!e) return null;
      for (; x !== null; ) t(S, x), x = x.sibling;
      return null;
    }
    function r(S, x) {
      for (S = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? S.set(x.key, x) : S.set(x.index, x), x = x.sibling;
      return S;
    }
    function s(S, x) {
      return S = rr(S, x), S.index = 0, S.sibling = null, S;
    }
    function o(S, x, N) {
      return S.index = N, e ? (N = S.alternate, N !== null ? (N = N.index, N < x ? (S.flags |= 2, x) : N) : (S.flags |= 2, x)) : (S.flags |= 1048576, x);
    }
    function d(S) {
      return e && S.alternate === null && (S.flags |= 2), S;
    }
    function m(S, x, N, J) {
      return x === null || x.tag !== 6 ? (x = Gl(N, S.mode, J), x.return = S, x) : (x = s(x, N), x.return = S, x);
    }
    function y(S, x, N, J) {
      var ue = N.type;
      return ue === $ ? B(S, x, N.props.children, J, N.key) : x !== null && (x.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === je && Su(ue) === x.type) ? (J = s(x, N.props), J.ref = Ti(S, x, N), J.return = S, J) : (J = Zs(N.type, N.key, N.props, null, S.mode, J), J.ref = Ti(S, x, N), J.return = S, J);
    }
    function P(S, x, N, J) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== N.containerInfo || x.stateNode.implementation !== N.implementation ? (x = Wl(N, S.mode, J), x.return = S, x) : (x = s(x, N.children || []), x.return = S, x);
    }
    function B(S, x, N, J, ue) {
      return x === null || x.tag !== 7 ? (x = xr(N, S.mode, J, ue), x.return = S, x) : (x = s(x, N), x.return = S, x);
    }
    function W(S, x, N) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Gl("" + x, S.mode, N), x.return = S, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case te:
            return N = Zs(x.type, x.key, x.props, null, S.mode, N), N.ref = Ti(S, null, x), N.return = S, N;
          case ee:
            return x = Wl(x, S.mode, N), x.return = S, x;
          case je:
            var J = x._init;
            return W(S, J(x._payload), N);
        }
        if (Ge(x) || K(x)) return x = xr(x, S.mode, N, null), x.return = S, x;
        Ts(S, x);
      }
      return null;
    }
    function V(S, x, N, J) {
      var ue = x !== null ? x.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return ue !== null ? null : m(S, x, "" + N, J);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case te:
            return N.key === ue ? y(S, x, N, J) : null;
          case ee:
            return N.key === ue ? P(S, x, N, J) : null;
          case je:
            return ue = N._init, V(
              S,
              x,
              ue(N._payload),
              J
            );
        }
        if (Ge(N) || K(N)) return ue !== null ? null : B(S, x, N, J, null);
        Ts(S, N);
      }
      return null;
    }
    function ne(S, x, N, J, ue) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return S = S.get(N) || null, m(x, S, "" + J, ue);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case te:
            return S = S.get(J.key === null ? N : J.key) || null, y(x, S, J, ue);
          case ee:
            return S = S.get(J.key === null ? N : J.key) || null, P(x, S, J, ue);
          case je:
            var pe = J._init;
            return ne(S, x, N, pe(J._payload), ue);
        }
        if (Ge(J) || K(J)) return S = S.get(N) || null, B(x, S, J, ue, null);
        Ts(x, J);
      }
      return null;
    }
    function se(S, x, N, J) {
      for (var ue = null, pe = null, ve = x, we = x = 0, yt = null; ve !== null && we < N.length; we++) {
        ve.index > we ? (yt = ve, ve = null) : yt = ve.sibling;
        var Ve = V(S, ve, N[we], J);
        if (Ve === null) {
          ve === null && (ve = yt);
          break;
        }
        e && ve && Ve.alternate === null && t(S, ve), x = o(Ve, x, we), pe === null ? ue = Ve : pe.sibling = Ve, pe = Ve, ve = yt;
      }
      if (we === N.length) return n(S, ve), tt && fr(S, we), ue;
      if (ve === null) {
        for (; we < N.length; we++) ve = W(S, N[we], J), ve !== null && (x = o(ve, x, we), pe === null ? ue = ve : pe.sibling = ve, pe = ve);
        return tt && fr(S, we), ue;
      }
      for (ve = r(S, ve); we < N.length; we++) yt = ne(ve, S, we, N[we], J), yt !== null && (e && yt.alternate !== null && ve.delete(yt.key === null ? we : yt.key), x = o(yt, x, we), pe === null ? ue = yt : pe.sibling = yt, pe = yt);
      return e && ve.forEach(function(ir) {
        return t(S, ir);
      }), tt && fr(S, we), ue;
    }
    function oe(S, x, N, J) {
      var ue = K(N);
      if (typeof ue != "function") throw Error(u(150));
      if (N = ue.call(N), N == null) throw Error(u(151));
      for (var pe = ue = null, ve = x, we = x = 0, yt = null, Ve = N.next(); ve !== null && !Ve.done; we++, Ve = N.next()) {
        ve.index > we ? (yt = ve, ve = null) : yt = ve.sibling;
        var ir = V(S, ve, Ve.value, J);
        if (ir === null) {
          ve === null && (ve = yt);
          break;
        }
        e && ve && ir.alternate === null && t(S, ve), x = o(ir, x, we), pe === null ? ue = ir : pe.sibling = ir, pe = ir, ve = yt;
      }
      if (Ve.done) return n(
        S,
        ve
      ), tt && fr(S, we), ue;
      if (ve === null) {
        for (; !Ve.done; we++, Ve = N.next()) Ve = W(S, Ve.value, J), Ve !== null && (x = o(Ve, x, we), pe === null ? ue = Ve : pe.sibling = Ve, pe = Ve);
        return tt && fr(S, we), ue;
      }
      for (ve = r(S, ve); !Ve.done; we++, Ve = N.next()) Ve = ne(ve, S, we, Ve.value, J), Ve !== null && (e && Ve.alternate !== null && ve.delete(Ve.key === null ? we : Ve.key), x = o(Ve, x, we), pe === null ? ue = Ve : pe.sibling = Ve, pe = Ve);
      return e && ve.forEach(function(zh) {
        return t(S, zh);
      }), tt && fr(S, we), ue;
    }
    function ct(S, x, N, J) {
      if (typeof N == "object" && N !== null && N.type === $ && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case te:
            e: {
              for (var ue = N.key, pe = x; pe !== null; ) {
                if (pe.key === ue) {
                  if (ue = N.type, ue === $) {
                    if (pe.tag === 7) {
                      n(S, pe.sibling), x = s(pe, N.props.children), x.return = S, S = x;
                      break e;
                    }
                  } else if (pe.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === je && Su(ue) === pe.type) {
                    n(S, pe.sibling), x = s(pe, N.props), x.ref = Ti(S, pe, N), x.return = S, S = x;
                    break e;
                  }
                  n(S, pe);
                  break;
                } else t(S, pe);
                pe = pe.sibling;
              }
              N.type === $ ? (x = xr(N.props.children, S.mode, J, N.key), x.return = S, S = x) : (J = Zs(N.type, N.key, N.props, null, S.mode, J), J.ref = Ti(S, x, N), J.return = S, S = J);
            }
            return d(S);
          case ee:
            e: {
              for (pe = N.key; x !== null; ) {
                if (x.key === pe) if (x.tag === 4 && x.stateNode.containerInfo === N.containerInfo && x.stateNode.implementation === N.implementation) {
                  n(S, x.sibling), x = s(x, N.children || []), x.return = S, S = x;
                  break e;
                } else {
                  n(S, x);
                  break;
                }
                else t(S, x);
                x = x.sibling;
              }
              x = Wl(N, S.mode, J), x.return = S, S = x;
            }
            return d(S);
          case je:
            return pe = N._init, ct(S, x, pe(N._payload), J);
        }
        if (Ge(N)) return se(S, x, N, J);
        if (K(N)) return oe(S, x, N, J);
        Ts(S, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, x !== null && x.tag === 6 ? (n(S, x.sibling), x = s(x, N), x.return = S, S = x) : (n(S, x), x = Gl(N, S.mode, J), x.return = S, S = x), d(S)) : n(S, x);
    }
    return ct;
  }
  var Vr = wu(!0), Eu = wu(!1), Ms = Wn(null), Ps = null, Br = null, nl = null;
  function rl() {
    nl = Br = Ps = null;
  }
  function il(e) {
    var t = Ms.current;
    qe(Ms), e._currentValue = t;
  }
  function sl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function br(e, t) {
    Ps = e, nl = Br = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ot = !0), e.firstContext = null);
  }
  function en(e) {
    var t = e._currentValue;
    if (nl !== e) if (e = { context: e, memoizedValue: t, next: null }, Br === null) {
      if (Ps === null) throw Error(u(308));
      Br = e, Ps.dependencies = { lanes: 0, firstContext: e };
    } else Br = Br.next = e;
    return t;
  }
  var hr = null;
  function al(e) {
    hr === null ? hr = [e] : hr.push(e);
  }
  function Nu(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n, al(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Rn(e, r);
  }
  function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Jn = !1;
  function ll(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Cu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function An(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Xn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (De & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Rn(e, n);
    }
    return s = r.interleaved, s === null ? (t.next = t, al(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Rn(e, n);
  }
  function $s(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ja(e, n);
    }
  }
  function _u(e, t) {
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
  function Rs(e, t, n, r) {
    var s = e.updateQueue;
    Jn = !1;
    var o = s.firstBaseUpdate, d = s.lastBaseUpdate, m = s.shared.pending;
    if (m !== null) {
      s.shared.pending = null;
      var y = m, P = y.next;
      y.next = null, d === null ? o = P : d.next = P, d = y;
      var B = e.alternate;
      B !== null && (B = B.updateQueue, m = B.lastBaseUpdate, m !== d && (m === null ? B.firstBaseUpdate = P : m.next = P, B.lastBaseUpdate = y));
    }
    if (o !== null) {
      var W = s.baseState;
      d = 0, B = P = y = null, m = o;
      do {
        var V = m.lane, ne = m.eventTime;
        if ((r & V) === V) {
          B !== null && (B = B.next = {
            eventTime: ne,
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          });
          e: {
            var se = e, oe = m;
            switch (V = t, ne = n, oe.tag) {
              case 1:
                if (se = oe.payload, typeof se == "function") {
                  W = se.call(ne, W, V);
                  break e;
                }
                W = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = oe.payload, V = typeof se == "function" ? se.call(ne, W, V) : se, V == null) break e;
                W = U({}, W, V);
                break e;
              case 2:
                Jn = !0;
            }
          }
          m.callback !== null && m.lane !== 0 && (e.flags |= 64, V = s.effects, V === null ? s.effects = [m] : V.push(m));
        } else ne = { eventTime: ne, lane: V, tag: m.tag, payload: m.payload, callback: m.callback, next: null }, B === null ? (P = B = ne, y = W) : B = B.next = ne, d |= V;
        if (m = m.next, m === null) {
          if (m = s.shared.pending, m === null) break;
          V = m, m = V.next, V.next = null, s.lastBaseUpdate = V, s.shared.pending = null;
        }
      } while (!0);
      if (B === null && (y = W), s.baseState = y, s.firstBaseUpdate = P, s.lastBaseUpdate = B, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          d |= s.lane, s = s.next;
        while (s !== t);
      } else o === null && (s.shared.lanes = 0);
      vr |= d, e.lanes = d, e.memoizedState = W;
    }
  }
  function Tu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], s = r.callback;
      if (s !== null) {
        if (r.callback = null, r = n, typeof s != "function") throw Error(u(191, s));
        s.call(r);
      }
    }
  }
  var Mi = {}, gn = Wn(Mi), Pi = Wn(Mi), $i = Wn(Mi);
  function mr(e) {
    if (e === Mi) throw Error(u(174));
    return e;
  }
  function ol(e, t) {
    switch (Je($i, t), Je(Pi, e), Je(gn, Mi), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Vt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Vt(t, e);
    }
    qe(gn), Je(gn, t);
  }
  function Ur() {
    qe(gn), qe(Pi), qe($i);
  }
  function Mu(e) {
    mr($i.current);
    var t = mr(gn.current), n = Vt(t, e.type);
    t !== n && (Je(Pi, e), Je(gn, n));
  }
  function ul(e) {
    Pi.current === e && (qe(gn), qe(Pi));
  }
  var st = Wn(0);
  function As(e) {
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
  var cl = [];
  function dl() {
    for (var e = 0; e < cl.length; e++) cl[e]._workInProgressVersionPrimary = null;
    cl.length = 0;
  }
  var Fs = Q.ReactCurrentDispatcher, fl = Q.ReactCurrentBatchConfig, pr = 0, at = null, ft = null, pt = null, Ls = !1, Ri = !1, Ai = 0, lh = 0;
  function Et() {
    throw Error(u(321));
  }
  function hl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ln(e[n], t[n])) return !1;
    return !0;
  }
  function ml(e, t, n, r, s, o) {
    if (pr = o, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fs.current = e === null || e.memoizedState === null ? dh : fh, e = n(r, s), Ri) {
      o = 0;
      do {
        if (Ri = !1, Ai = 0, 25 <= o) throw Error(u(301));
        o += 1, pt = ft = null, t.updateQueue = null, Fs.current = hh, e = n(r, s);
      } while (Ri);
    }
    if (Fs.current = Ds, t = ft !== null && ft.next !== null, pr = 0, pt = ft = at = null, Ls = !1, t) throw Error(u(300));
    return e;
  }
  function pl() {
    var e = Ai !== 0;
    return Ai = 0, e;
  }
  function xn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return pt === null ? at.memoizedState = pt = e : pt = pt.next = e, pt;
  }
  function tn() {
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
  function Fi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function vl(e) {
    var t = tn(), n = t.queue;
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
      var m = d = null, y = null, P = o;
      do {
        var B = P.lane;
        if ((pr & B) === B) y !== null && (y = y.next = { lane: 0, action: P.action, hasEagerState: P.hasEagerState, eagerState: P.eagerState, next: null }), r = P.hasEagerState ? P.eagerState : e(r, P.action);
        else {
          var W = {
            lane: B,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null
          };
          y === null ? (m = y = W, d = r) : y = y.next = W, at.lanes |= B, vr |= B;
        }
        P = P.next;
      } while (P !== null && P !== o);
      y === null ? d = r : y.next = m, ln(r, t.memoizedState) || (Ot = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = y, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        o = s.lane, at.lanes |= o, vr |= o, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function yl(e) {
    var t = tn(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, o = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = s = s.next;
      do
        o = e(o, d.action), d = d.next;
      while (d !== s);
      ln(o, t.memoizedState) || (Ot = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Pu() {
  }
  function $u(e, t) {
    var n = at, r = tn(), s = t(), o = !ln(r.memoizedState, s);
    if (o && (r.memoizedState = s, Ot = !0), r = r.queue, kl(Fu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || pt !== null && pt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Li(9, Au.bind(null, n, r, s, t), void 0, null), vt === null) throw Error(u(349));
      (pr & 30) !== 0 || Ru(n, t, s);
    }
    return s;
  }
  function Ru(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Au(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Lu(t) && Ou(e);
  }
  function Fu(e, t, n) {
    return n(function() {
      Lu(t) && Ou(e);
    });
  }
  function Lu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ln(e, n);
    } catch {
      return !0;
    }
  }
  function Ou(e) {
    var t = Rn(e, 1);
    t !== null && fn(t, e, 1, -1);
  }
  function Iu(e) {
    var t = xn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Fi, lastRenderedState: e }, t.queue = e, e = e.dispatch = ch.bind(null, at, e), [t.memoizedState, e];
  }
  function Li(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Du() {
    return tn().memoizedState;
  }
  function Os(e, t, n, r) {
    var s = xn();
    at.flags |= e, s.memoizedState = Li(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Is(e, t, n, r) {
    var s = tn();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ft !== null) {
      var d = ft.memoizedState;
      if (o = d.destroy, r !== null && hl(r, d.deps)) {
        s.memoizedState = Li(t, n, o, r);
        return;
      }
    }
    at.flags |= e, s.memoizedState = Li(1 | t, n, o, r);
  }
  function zu(e, t) {
    return Os(8390656, 8, e, t);
  }
  function kl(e, t) {
    return Is(2048, 8, e, t);
  }
  function Vu(e, t) {
    return Is(4, 2, e, t);
  }
  function Bu(e, t) {
    return Is(4, 4, e, t);
  }
  function bu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Uu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Is(4, 4, bu.bind(null, t, e), n);
  }
  function gl() {
  }
  function Hu(e, t) {
    var n = tn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Ku(e, t) {
    var n = tn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Gu(e, t, n) {
    return (pr & 21) === 0 ? (e.baseState && (e.baseState = !1, Ot = !0), e.memoizedState = n) : (ln(n, t) || (n = So(), at.lanes |= n, vr |= n, e.baseState = !0), t);
  }
  function oh(e, t) {
    var n = Ke;
    Ke = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = fl.transition;
    fl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ke = n, fl.transition = r;
    }
  }
  function Wu() {
    return tn().memoizedState;
  }
  function uh(e, t, n) {
    var r = tr(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Qu(e)) Yu(t, n);
    else if (n = Nu(e, t, n, r), n !== null) {
      var s = Pt();
      fn(n, e, r, s), Ju(n, t, r);
    }
  }
  function ch(e, t, n) {
    var r = tr(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Qu(e)) Yu(t, s);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var d = t.lastRenderedState, m = o(d, n);
        if (s.hasEagerState = !0, s.eagerState = m, ln(m, d)) {
          var y = t.interleaved;
          y === null ? (s.next = s, al(t)) : (s.next = y.next, y.next = s), t.interleaved = s;
          return;
        }
      } catch {
      }
      n = Nu(e, t, s, r), n !== null && (s = Pt(), fn(n, e, r, s), Ju(n, t, r));
    }
  }
  function Qu(e) {
    var t = e.alternate;
    return e === at || t !== null && t === at;
  }
  function Yu(e, t) {
    Ri = Ls = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ju(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ja(e, n);
    }
  }
  var Ds = { readContext: en, useCallback: Et, useContext: Et, useEffect: Et, useImperativeHandle: Et, useInsertionEffect: Et, useLayoutEffect: Et, useMemo: Et, useReducer: Et, useRef: Et, useState: Et, useDebugValue: Et, useDeferredValue: Et, useTransition: Et, useMutableSource: Et, useSyncExternalStore: Et, useId: Et, unstable_isNewReconciler: !1 }, dh = { readContext: en, useCallback: function(e, t) {
    return xn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: en, useEffect: zu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Os(
      4194308,
      4,
      bu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Os(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Os(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = xn();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = uh.bind(null, at, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = xn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Iu, useDebugValue: gl, useDeferredValue: function(e) {
    return xn().memoizedState = e;
  }, useTransition: function() {
    var e = Iu(!1), t = e[0];
    return e = oh.bind(null, e[1]), xn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = at, s = xn();
    if (tt) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), vt === null) throw Error(u(349));
      (pr & 30) !== 0 || Ru(r, t, n);
    }
    s.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return s.queue = o, zu(Fu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Li(9, Au.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = xn(), t = vt.identifierPrefix;
    if (tt) {
      var n = $n, r = Pn;
      n = (r & ~(1 << 32 - an(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ai++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = lh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, fh = {
    readContext: en,
    useCallback: Hu,
    useContext: en,
    useEffect: kl,
    useImperativeHandle: Uu,
    useInsertionEffect: Vu,
    useLayoutEffect: Bu,
    useMemo: Ku,
    useReducer: vl,
    useRef: Du,
    useState: function() {
      return vl(Fi);
    },
    useDebugValue: gl,
    useDeferredValue: function(e) {
      var t = tn();
      return Gu(t, ft.memoizedState, e);
    },
    useTransition: function() {
      var e = vl(Fi)[0], t = tn().memoizedState;
      return [e, t];
    },
    useMutableSource: Pu,
    useSyncExternalStore: $u,
    useId: Wu,
    unstable_isNewReconciler: !1
  }, hh = { readContext: en, useCallback: Hu, useContext: en, useEffect: kl, useImperativeHandle: Uu, useInsertionEffect: Vu, useLayoutEffect: Bu, useMemo: Ku, useReducer: yl, useRef: Du, useState: function() {
    return yl(Fi);
  }, useDebugValue: gl, useDeferredValue: function(e) {
    var t = tn();
    return ft === null ? t.memoizedState = e : Gu(t, ft.memoizedState, e);
  }, useTransition: function() {
    var e = yl(Fi)[0], t = tn().memoizedState;
    return [e, t];
  }, useMutableSource: Pu, useSyncExternalStore: $u, useId: Wu, unstable_isNewReconciler: !1 };
  function un(e, t) {
    if (e && e.defaultProps) {
      t = U({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function xl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var zs = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Pt(), s = tr(e), o = An(r, s);
    o.payload = t, n != null && (o.callback = n), t = Xn(e, o, s), t !== null && (fn(t, e, s, r), $s(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Pt(), s = tr(e), o = An(r, s);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Xn(e, o, s), t !== null && (fn(t, e, s, r), $s(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Pt(), r = tr(e), s = An(n, r);
    s.tag = 2, t != null && (s.callback = t), t = Xn(e, s, r), t !== null && (fn(t, e, r, n), $s(t, e, r));
  } };
  function Xu(e, t, n, r, s, o, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, d) : t.prototype && t.prototype.isPureReactComponent ? !ji(n, r) || !ji(s, o) : !0;
  }
  function Zu(e, t, n) {
    var r = !1, s = Qn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = en(o) : (s = Lt(t) ? cr : wt.current, r = t.contextTypes, o = (r = r != null) ? Or(e, s) : Qn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function qu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zs.enqueueReplaceState(t, t.state, null);
  }
  function jl(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, ll(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? s.context = en(o) : (o = Lt(t) ? cr : wt.current, s.context = Or(e, o)), s.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (xl(e, t, o, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && zs.enqueueReplaceState(s, s.state, null), Rs(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Hr(e, t) {
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
  function Sl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function wl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var mh = typeof WeakMap == "function" ? WeakMap : Map;
  function ec(e, t, n) {
    n = An(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Gs || (Gs = !0, Dl = r), wl(e, t);
    }, n;
  }
  function tc(e, t, n) {
    n = An(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = t.value;
      n.payload = function() {
        return r(s);
      }, n.callback = function() {
        wl(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      wl(e, t), typeof r != "function" && (qn === null ? qn = /* @__PURE__ */ new Set([this]) : qn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function nc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new mh();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (s.add(n), e = Th.bind(null, e, t, n), t.then(e, e));
  }
  function rc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ic(e, t, n, r, s) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = An(-1, 1), t.tag = 2, Xn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = s, e);
  }
  var ph = Q.ReactCurrentOwner, Ot = !1;
  function Mt(e, t, n, r) {
    t.child = e === null ? Eu(t, null, n, r) : Vr(t, e.child, n, r);
  }
  function sc(e, t, n, r, s) {
    n = n.render;
    var o = t.ref;
    return br(t, s), r = ml(e, t, n, r, o, s), n = pl(), e !== null && !Ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Fn(e, t, s)) : (tt && n && Xa(t), t.flags |= 1, Mt(e, t, r, s), t.child);
  }
  function ac(e, t, n, r, s) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Kl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, lc(e, t, o, r, s)) : (e = Zs(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & s) === 0) {
      var d = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ji, n(d, r) && e.ref === t.ref) return Fn(e, t, s);
    }
    return t.flags |= 1, e = rr(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function lc(e, t, n, r, s) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ji(o, r) && e.ref === t.ref) if (Ot = !1, t.pendingProps = r = o, (e.lanes & s) !== 0) (e.flags & 131072) !== 0 && (Ot = !0);
      else return t.lanes = e.lanes, Fn(e, t, s);
    }
    return El(e, t, n, r, s);
  }
  function oc(e, t, n) {
    var r = t.pendingProps, s = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Je(Gr, Wt), Wt |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Je(Gr, Wt), Wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Je(Gr, Wt), Wt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Je(Gr, Wt), Wt |= r;
    return Mt(e, t, s, n), t.child;
  }
  function uc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function El(e, t, n, r, s) {
    var o = Lt(n) ? cr : wt.current;
    return o = Or(t, o), br(t, s), n = ml(e, t, n, r, o, s), r = pl(), e !== null && !Ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Fn(e, t, s)) : (tt && r && Xa(t), t.flags |= 1, Mt(e, t, n, s), t.child);
  }
  function cc(e, t, n, r, s) {
    if (Lt(n)) {
      var o = !0;
      ws(t);
    } else o = !1;
    if (br(t, s), t.stateNode === null) Bs(e, t), Zu(t, n, r), jl(t, n, r, s), r = !0;
    else if (e === null) {
      var d = t.stateNode, m = t.memoizedProps;
      d.props = m;
      var y = d.context, P = n.contextType;
      typeof P == "object" && P !== null ? P = en(P) : (P = Lt(n) ? cr : wt.current, P = Or(t, P));
      var B = n.getDerivedStateFromProps, W = typeof B == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      W || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (m !== r || y !== P) && qu(t, d, r, P), Jn = !1;
      var V = t.memoizedState;
      d.state = V, Rs(t, r, d, s), y = t.memoizedState, m !== r || V !== y || Ft.current || Jn ? (typeof B == "function" && (xl(t, n, B, r), y = t.memoizedState), (m = Jn || Xu(t, n, m, r, V, y, P)) ? (W || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = y), d.props = r, d.state = y, d.context = P, r = m) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, Cu(e, t), m = t.memoizedProps, P = t.type === t.elementType ? m : un(t.type, m), d.props = P, W = t.pendingProps, V = d.context, y = n.contextType, typeof y == "object" && y !== null ? y = en(y) : (y = Lt(n) ? cr : wt.current, y = Or(t, y));
      var ne = n.getDerivedStateFromProps;
      (B = typeof ne == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (m !== W || V !== y) && qu(t, d, r, y), Jn = !1, V = t.memoizedState, d.state = V, Rs(t, r, d, s);
      var se = t.memoizedState;
      m !== W || V !== se || Ft.current || Jn ? (typeof ne == "function" && (xl(t, n, ne, r), se = t.memoizedState), (P = Jn || Xu(t, n, P, r, V, se, y) || !1) ? (B || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, se, y), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, se, y)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || m === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = se), d.props = r, d.state = se, d.context = y, r = P) : (typeof d.componentDidUpdate != "function" || m === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Nl(e, t, n, r, o, s);
  }
  function Nl(e, t, n, r, s, o) {
    uc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return s && pu(t, n, !1), Fn(e, t, o);
    r = t.stateNode, ph.current = t;
    var m = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = Vr(t, e.child, null, o), t.child = Vr(t, null, m, o)) : Mt(e, t, m, o), t.memoizedState = r.state, s && pu(t, n, !0), t.child;
  }
  function dc(e) {
    var t = e.stateNode;
    t.pendingContext ? hu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hu(e, t.context, !1), ol(e, t.containerInfo);
  }
  function fc(e, t, n, r, s) {
    return zr(), tl(s), t.flags |= 256, Mt(e, t, n, r), t.child;
  }
  var Cl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function _l(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function hc(e, t, n) {
    var r = t.pendingProps, s = st.current, o = !1, d = (t.flags & 128) !== 0, m;
    if ((m = d) || (m = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), m ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Je(st, s & 1), e === null)
      return el(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = d) : o = qs(d, r, 0, null), e = xr(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = _l(n), t.memoizedState = Cl, e) : Tl(t, d));
    if (s = e.memoizedState, s !== null && (m = s.dehydrated, m !== null)) return vh(e, t, d, r, m, s, n);
    if (o) {
      o = r.fallback, d = t.mode, s = e.child, m = s.sibling;
      var y = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = y, t.deletions = null) : (r = rr(s, y), r.subtreeFlags = s.subtreeFlags & 14680064), m !== null ? o = rr(m, o) : (o = xr(o, d, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, d = e.child.memoizedState, d = d === null ? _l(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, o.memoizedState = d, o.childLanes = e.childLanes & ~n, t.memoizedState = Cl, r;
    }
    return o = e.child, e = o.sibling, r = rr(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Tl(e, t) {
    return t = qs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Vs(e, t, n, r) {
    return r !== null && tl(r), Vr(t, e.child, null, n), e = Tl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function vh(e, t, n, r, s, o, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Sl(Error(u(422))), Vs(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, s = t.mode, r = qs({ mode: "visible", children: r.children }, s, 0, null), o = xr(o, s, d, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Vr(t, e.child, null, d), t.child.memoizedState = _l(d), t.memoizedState = Cl, o);
    if ((t.mode & 1) === 0) return Vs(e, t, d, null);
    if (s.data === "$!") {
      if (r = s.nextSibling && s.nextSibling.dataset, r) var m = r.dgst;
      return r = m, o = Error(u(419)), r = Sl(o, r, void 0), Vs(e, t, d, r);
    }
    if (m = (d & e.childLanes) !== 0, Ot || m) {
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
        s = (s & (r.suspendedLanes | d)) !== 0 ? 0 : s, s !== 0 && s !== o.retryLane && (o.retryLane = s, Rn(e, s), fn(r, e, s, -1));
      }
      return Hl(), r = Sl(Error(u(421))), Vs(e, t, d, r);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mh.bind(null, e), s._reactRetry = t, null) : (e = o.treeContext, Gt = Gn(s.nextSibling), Kt = t, tt = !0, on = null, e !== null && (Zt[qt++] = Pn, Zt[qt++] = $n, Zt[qt++] = dr, Pn = e.id, $n = e.overflow, dr = t), t = Tl(t, r.children), t.flags |= 4096, t);
  }
  function mc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), sl(e.return, t, n);
  }
  function Ml(e, t, n, r, s) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = s);
  }
  function pc(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, o = r.tail;
    if (Mt(e, t, r.children, n), r = st.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mc(e, n, t);
        else if (e.tag === 19) mc(e, n, t);
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
    if (Je(st, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && As(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Ml(t, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && As(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        Ml(t, !0, n, null, o);
        break;
      case "together":
        Ml(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Bs(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Fn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), vr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = rr(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function yh(e, t, n) {
    switch (t.tag) {
      case 3:
        dc(t), zr();
        break;
      case 5:
        Mu(t);
        break;
      case 1:
        Lt(t.type) && ws(t);
        break;
      case 4:
        ol(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, s = t.memoizedProps.value;
        Je(Ms, r._currentValue), r._currentValue = s;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Je(st, st.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? hc(e, t, n) : (Je(st, st.current & 1), e = Fn(e, t, n), e !== null ? e.sibling : null);
        Je(st, st.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return pc(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Je(st, st.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, oc(e, t, n);
    }
    return Fn(e, t, n);
  }
  var vc, Pl, yc, kc;
  vc = function(e, t) {
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
  }, Pl = function() {
  }, yc = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
      e = t.stateNode, mr(gn.current);
      var o = null;
      switch (n) {
        case "input":
          s = fe(e, s), r = fe(e, r), o = [];
          break;
        case "select":
          s = U({}, s, { value: void 0 }), r = U({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          s = kt(e, s), r = kt(e, r), o = [];
          break;
        default:
          typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xs);
      }
      Me(n, r);
      var d;
      n = null;
      for (P in s) if (!r.hasOwnProperty(P) && s.hasOwnProperty(P) && s[P] != null) if (P === "style") {
        var m = s[P];
        for (d in m) m.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else P !== "dangerouslySetInnerHTML" && P !== "children" && P !== "suppressContentEditableWarning" && P !== "suppressHydrationWarning" && P !== "autoFocus" && (f.hasOwnProperty(P) ? o || (o = []) : (o = o || []).push(P, null));
      for (P in r) {
        var y = r[P];
        if (m = s?.[P], r.hasOwnProperty(P) && y !== m && (y != null || m != null)) if (P === "style") if (m) {
          for (d in m) !m.hasOwnProperty(d) || y && y.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in y) y.hasOwnProperty(d) && m[d] !== y[d] && (n || (n = {}), n[d] = y[d]);
        } else n || (o || (o = []), o.push(
          P,
          n
        )), n = y;
        else P === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, m = m ? m.__html : void 0, y != null && m !== y && (o = o || []).push(P, y)) : P === "children" ? typeof y != "string" && typeof y != "number" || (o = o || []).push(P, "" + y) : P !== "suppressContentEditableWarning" && P !== "suppressHydrationWarning" && (f.hasOwnProperty(P) ? (y != null && P === "onScroll" && Ze("scroll", e), o || m === y || (o = [])) : (o = o || []).push(P, y));
      }
      n && (o = o || []).push("style", n);
      var P = o;
      (t.updateQueue = P) && (t.flags |= 4);
    }
  }, kc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Oi(e, t) {
    if (!tt) switch (e.tailMode) {
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
  function Nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function kh(e, t, n) {
    var r = t.pendingProps;
    switch (Za(t), t.tag) {
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
        return Nt(t), null;
      case 1:
        return Lt(t.type) && Ss(), Nt(t), null;
      case 3:
        return r = t.stateNode, Ur(), qe(Ft), qe(wt), dl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_s(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, on !== null && (Bl(on), on = null))), Pl(e, t), Nt(t), null;
      case 5:
        ul(t);
        var s = mr($i.current);
        if (n = t.type, e !== null && t.stateNode != null) yc(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return Nt(t), null;
          }
          if (e = mr(gn.current), _s(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[kn] = t, r[Ci] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ze("cancel", r), Ze("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ze("load", r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < wi.length; s++) Ze(wi[s], r);
                break;
              case "source":
                Ze("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ze(
                  "error",
                  r
                ), Ze("load", r);
                break;
              case "details":
                Ze("toggle", r);
                break;
              case "input":
                Ne(r, o), Ze("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, Ze("invalid", r);
                break;
              case "textarea":
                Qe(r, o), Ze("invalid", r);
            }
            Me(n, o), s = null;
            for (var d in o) if (o.hasOwnProperty(d)) {
              var m = o[d];
              d === "children" ? typeof m == "string" ? r.textContent !== m && (o.suppressHydrationWarning !== !0 && gs(r.textContent, m, e), s = ["children", m]) : typeof m == "number" && r.textContent !== "" + m && (o.suppressHydrationWarning !== !0 && gs(
                r.textContent,
                m,
                e
              ), s = ["children", "" + m]) : f.hasOwnProperty(d) && m != null && d === "onScroll" && Ze("scroll", r);
            }
            switch (n) {
              case "input":
                ge(r), We(r, o, !0);
                break;
              case "textarea":
                ge(r), et(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = xs);
            }
            r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _t(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[kn] = t, e[Ci] = r, vc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = $e(n, r), n) {
                case "dialog":
                  Ze("cancel", e), Ze("close", e), s = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ze("load", e), s = r;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < wi.length; s++) Ze(wi[s], e);
                  s = r;
                  break;
                case "source":
                  Ze("error", e), s = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Ze(
                    "error",
                    e
                  ), Ze("load", e), s = r;
                  break;
                case "details":
                  Ze("toggle", e), s = r;
                  break;
                case "input":
                  Ne(e, r), s = fe(e, r), Ze("invalid", e);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, s = U({}, r, { value: void 0 }), Ze("invalid", e);
                  break;
                case "textarea":
                  Qe(e, r), s = kt(e, r), Ze("invalid", e);
                  break;
                default:
                  s = r;
              }
              Me(n, s), m = s;
              for (o in m) if (m.hasOwnProperty(o)) {
                var y = m[o];
                o === "style" ? bt(e, y) : o === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && sn(e, y)) : o === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Qt(e, y) : typeof y == "number" && Qt(e, "" + y) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (f.hasOwnProperty(o) ? y != null && o === "onScroll" && Ze("scroll", e) : y != null && R(e, o, y, d));
              }
              switch (n) {
                case "input":
                  ge(e), We(e, r, !1);
                  break;
                case "textarea":
                  ge(e), et(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Z(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? be(e, !!r.multiple, o, !1) : r.defaultValue != null && be(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = xs);
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
        return Nt(t), null;
      case 6:
        if (e && t.stateNode != null) kc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (n = mr($i.current), mr(gn.current), _s(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[kn] = t, (o = r.nodeValue !== n) && (e = Kt, e !== null)) switch (e.tag) {
              case 3:
                gs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && gs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kn] = t, t.stateNode = r;
        }
        return Nt(t), null;
      case 13:
        if (qe(st), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (tt && Gt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ju(), zr(), t.flags |= 98560, o = !1;
          else if (o = _s(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[kn] = t;
            } else zr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Nt(t), o = !1;
          } else on !== null && (Bl(on), on = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (st.current & 1) !== 0 ? ht === 0 && (ht = 3) : Hl())), t.updateQueue !== null && (t.flags |= 4), Nt(t), null);
      case 4:
        return Ur(), Pl(e, t), e === null && Ei(t.stateNode.containerInfo), Nt(t), null;
      case 10:
        return il(t.type._context), Nt(t), null;
      case 17:
        return Lt(t.type) && Ss(), Nt(t), null;
      case 19:
        if (qe(st), o = t.memoizedState, o === null) return Nt(t), null;
        if (r = (t.flags & 128) !== 0, d = o.rendering, d === null) if (r) Oi(o, !1);
        else {
          if (ht !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = As(e), d !== null) {
              for (t.flags |= 128, Oi(o, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, d = o.alternate, d === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = d.childLanes, o.lanes = d.lanes, o.child = d.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = d.memoizedProps, o.memoizedState = d.memoizedState, o.updateQueue = d.updateQueue, o.type = d.type, e = d.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Je(st, st.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && X() > Wr && (t.flags |= 128, r = !0, Oi(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = As(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Oi(o, !0), o.tail === null && o.tailMode === "hidden" && !d.alternate && !tt) return Nt(t), null;
          } else 2 * X() - o.renderingStartTime > Wr && n !== 1073741824 && (t.flags |= 128, r = !0, Oi(o, !1), t.lanes = 4194304);
          o.isBackwards ? (d.sibling = t.child, t.child = d) : (n = o.last, n !== null ? n.sibling = d : t.child = d, o.last = d);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = X(), t.sibling = null, n = st.current, Je(st, r ? n & 1 | 2 : n & 1), t) : (Nt(t), null);
      case 22:
      case 23:
        return Ul(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Wt & 1073741824) !== 0 && (Nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Nt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function gh(e, t) {
    switch (Za(t), t.tag) {
      case 1:
        return Lt(t.type) && Ss(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ur(), qe(Ft), qe(wt), dl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ul(t), null;
      case 13:
        if (qe(st), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          zr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return qe(st), null;
      case 4:
        return Ur(), null;
      case 10:
        return il(t.type._context), null;
      case 22:
      case 23:
        return Ul(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var bs = !1, Ct = !1, xh = typeof WeakSet == "function" ? WeakSet : Set, re = null;
  function Kr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      lt(e, t, r);
    }
    else n.current = null;
  }
  function $l(e, t, n) {
    try {
      n();
    } catch (r) {
      lt(e, t, r);
    }
  }
  var gc = !1;
  function jh(e, t) {
    if (Ua = os, e = Xo(), La(e)) {
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
          var d = 0, m = -1, y = -1, P = 0, B = 0, W = e, V = null;
          t: for (; ; ) {
            for (var ne; W !== n || s !== 0 && W.nodeType !== 3 || (m = d + s), W !== o || r !== 0 && W.nodeType !== 3 || (y = d + r), W.nodeType === 3 && (d += W.nodeValue.length), (ne = W.firstChild) !== null; )
              V = W, W = ne;
            for (; ; ) {
              if (W === e) break t;
              if (V === n && ++P === s && (m = d), V === o && ++B === r && (y = d), (ne = W.nextSibling) !== null) break;
              W = V, V = W.parentNode;
            }
            W = ne;
          }
          n = m === -1 || y === -1 ? null : { start: m, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ha = { focusedElem: e, selectionRange: n }, os = !1, re = t; re !== null; ) if (t = re, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, re = e;
    else for (; re !== null; ) {
      t = re;
      try {
        var se = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (se !== null) {
              var oe = se.memoizedProps, ct = se.memoizedState, S = t.stateNode, x = S.getSnapshotBeforeUpdate(t.elementType === t.type ? oe : un(t.type, oe), ct);
              S.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var N = t.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (J) {
        lt(t, t.return, J);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, re = e;
        break;
      }
      re = t.return;
    }
    return se = gc, gc = !1, se;
  }
  function Ii(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & e) === e) {
          var o = s.destroy;
          s.destroy = void 0, o !== void 0 && $l(t, n, o);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function Us(e, t) {
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
  function Rl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function xc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, xc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kn], delete t[Ci], delete t[Qa], delete t[rh], delete t[ih])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function jc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Sc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || jc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Al(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xs));
    else if (r !== 4 && (e = e.child, e !== null)) for (Al(e, t, n), e = e.sibling; e !== null; ) Al(e, t, n), e = e.sibling;
  }
  function Fl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Fl(e, t, n), e = e.sibling; e !== null; ) Fl(e, t, n), e = e.sibling;
  }
  var xt = null, cn = !1;
  function Zn(e, t, n) {
    for (n = n.child; n !== null; ) wc(e, t, n), n = n.sibling;
  }
  function wc(e, t, n) {
    if (yn && typeof yn.onCommitFiberUnmount == "function") try {
      yn.onCommitFiberUnmount(ns, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ct || Kr(n, t);
      case 6:
        var r = xt, s = cn;
        xt = null, Zn(e, t, n), xt = r, cn = s, xt !== null && (cn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xt.removeChild(n.stateNode));
        break;
      case 18:
        xt !== null && (cn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? Wa(e.parentNode, n) : e.nodeType === 1 && Wa(e, n), pi(e)) : Wa(xt, n.stateNode));
        break;
      case 4:
        r = xt, s = cn, xt = n.stateNode.containerInfo, cn = !0, Zn(e, t, n), xt = r, cn = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ct && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          s = r = r.next;
          do {
            var o = s, d = o.destroy;
            o = o.tag, d !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && $l(n, t, d), s = s.next;
          } while (s !== r);
        }
        Zn(e, t, n);
        break;
      case 1:
        if (!Ct && (Kr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (m) {
          lt(n, t, m);
        }
        Zn(e, t, n);
        break;
      case 21:
        Zn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ct = (r = Ct) || n.memoizedState !== null, Zn(e, t, n), Ct = r) : Zn(e, t, n);
        break;
      default:
        Zn(e, t, n);
    }
  }
  function Ec(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new xh()), t.forEach(function(r) {
        var s = Ph.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
    }
  }
  function dn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e, d = t, m = d;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 5:
              xt = m.stateNode, cn = !1;
              break e;
            case 3:
              xt = m.stateNode.containerInfo, cn = !0;
              break e;
            case 4:
              xt = m.stateNode.containerInfo, cn = !0;
              break e;
          }
          m = m.return;
        }
        if (xt === null) throw Error(u(160));
        wc(o, d, s), xt = null, cn = !1;
        var y = s.alternate;
        y !== null && (y.return = null), s.return = null;
      } catch (P) {
        lt(s, t, P);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Nc(t, e), t = t.sibling;
  }
  function Nc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (dn(t, e), jn(e), r & 4) {
          try {
            Ii(3, e, e.return), Us(3, e);
          } catch (oe) {
            lt(e, e.return, oe);
          }
          try {
            Ii(5, e, e.return);
          } catch (oe) {
            lt(e, e.return, oe);
          }
        }
        break;
      case 1:
        dn(t, e), jn(e), r & 512 && n !== null && Kr(n, n.return);
        break;
      case 5:
        if (dn(t, e), jn(e), r & 512 && n !== null && Kr(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            Qt(s, "");
          } catch (oe) {
            lt(e, e.return, oe);
          }
        }
        if (r & 4 && (s = e.stateNode, s != null)) {
          var o = e.memoizedProps, d = n !== null ? n.memoizedProps : o, m = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            m === "input" && o.type === "radio" && o.name != null && xe(s, o), $e(m, d);
            var P = $e(m, o);
            for (d = 0; d < y.length; d += 2) {
              var B = y[d], W = y[d + 1];
              B === "style" ? bt(s, W) : B === "dangerouslySetInnerHTML" ? sn(s, W) : B === "children" ? Qt(s, W) : R(s, B, W, P);
            }
            switch (m) {
              case "input":
                Re(s, o);
                break;
              case "textarea":
                ze(s, o);
                break;
              case "select":
                var V = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var ne = o.value;
                ne != null ? be(s, !!o.multiple, ne, !1) : V !== !!o.multiple && (o.defaultValue != null ? be(
                  s,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : be(s, !!o.multiple, o.multiple ? [] : "", !1));
            }
            s[Ci] = o;
          } catch (oe) {
            lt(e, e.return, oe);
          }
        }
        break;
      case 6:
        if (dn(t, e), jn(e), r & 4) {
          if (e.stateNode === null) throw Error(u(162));
          s = e.stateNode, o = e.memoizedProps;
          try {
            s.nodeValue = o;
          } catch (oe) {
            lt(e, e.return, oe);
          }
        }
        break;
      case 3:
        if (dn(t, e), jn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          pi(t.containerInfo);
        } catch (oe) {
          lt(e, e.return, oe);
        }
        break;
      case 4:
        dn(t, e), jn(e);
        break;
      case 13:
        dn(t, e), jn(e), s = e.child, s.flags & 8192 && (o = s.memoizedState !== null, s.stateNode.isHidden = o, !o || s.alternate !== null && s.alternate.memoizedState !== null || (Il = X())), r & 4 && Ec(e);
        break;
      case 22:
        if (B = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ct = (P = Ct) || B, dn(t, e), Ct = P) : dn(t, e), jn(e), r & 8192) {
          if (P = e.memoizedState !== null, (e.stateNode.isHidden = P) && !B && (e.mode & 1) !== 0) for (re = e, B = e.child; B !== null; ) {
            for (W = re = B; re !== null; ) {
              switch (V = re, ne = V.child, V.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ii(4, V, V.return);
                  break;
                case 1:
                  Kr(V, V.return);
                  var se = V.stateNode;
                  if (typeof se.componentWillUnmount == "function") {
                    r = V, n = V.return;
                    try {
                      t = r, se.props = t.memoizedProps, se.state = t.memoizedState, se.componentWillUnmount();
                    } catch (oe) {
                      lt(r, n, oe);
                    }
                  }
                  break;
                case 5:
                  Kr(V, V.return);
                  break;
                case 22:
                  if (V.memoizedState !== null) {
                    Tc(W);
                    continue;
                  }
              }
              ne !== null ? (ne.return = V, re = ne) : Tc(W);
            }
            B = B.sibling;
          }
          e: for (B = null, W = e; ; ) {
            if (W.tag === 5) {
              if (B === null) {
                B = W;
                try {
                  s = W.stateNode, P ? (o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (m = W.stateNode, y = W.memoizedProps.style, d = y != null && y.hasOwnProperty("display") ? y.display : null, m.style.display = me("display", d));
                } catch (oe) {
                  lt(e, e.return, oe);
                }
              }
            } else if (W.tag === 6) {
              if (B === null) try {
                W.stateNode.nodeValue = P ? "" : W.memoizedProps;
              } catch (oe) {
                lt(e, e.return, oe);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === e) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === e) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === e) break e;
              B === W && (B = null), W = W.return;
            }
            B === W && (B = null), W.sibling.return = W.return, W = W.sibling;
          }
        }
        break;
      case 19:
        dn(t, e), jn(e), r & 4 && Ec(e);
        break;
      case 21:
        break;
      default:
        dn(
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
            if (jc(n)) {
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
            r.flags & 32 && (Qt(s, ""), r.flags &= -33);
            var o = Sc(e);
            Fl(e, o, s);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, m = Sc(e);
            Al(e, m, d);
            break;
          default:
            throw Error(u(161));
        }
      } catch (y) {
        lt(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sh(e, t, n) {
    re = e, Cc(e);
  }
  function Cc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; re !== null; ) {
      var s = re, o = s.child;
      if (s.tag === 22 && r) {
        var d = s.memoizedState !== null || bs;
        if (!d) {
          var m = s.alternate, y = m !== null && m.memoizedState !== null || Ct;
          m = bs;
          var P = Ct;
          if (bs = d, (Ct = y) && !P) for (re = s; re !== null; ) d = re, y = d.child, d.tag === 22 && d.memoizedState !== null ? Mc(s) : y !== null ? (y.return = d, re = y) : Mc(s);
          for (; o !== null; ) re = o, Cc(o), o = o.sibling;
          re = s, bs = m, Ct = P;
        }
        _c(e);
      } else (s.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = s, re = o) : _c(e);
    }
  }
  function _c(e) {
    for (; re !== null; ) {
      var t = re;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ct || Us(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ct) if (n === null) r.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : un(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Tu(t, o, r);
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
                Tu(t, d, n);
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
                  var B = P.memoizedState;
                  if (B !== null) {
                    var W = B.dehydrated;
                    W !== null && pi(W);
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
          Ct || t.flags & 512 && Rl(t);
        } catch (V) {
          lt(t, t.return, V);
        }
      }
      if (t === e) {
        re = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, re = n;
        break;
      }
      re = t.return;
    }
  }
  function Tc(e) {
    for (; re !== null; ) {
      var t = re;
      if (t === e) {
        re = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, re = n;
        break;
      }
      re = t.return;
    }
  }
  function Mc(e) {
    for (; re !== null; ) {
      var t = re;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Us(4, t);
            } catch (y) {
              lt(t, n, y);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                lt(t, s, y);
              }
            }
            var o = t.return;
            try {
              Rl(t);
            } catch (y) {
              lt(t, o, y);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Rl(t);
            } catch (y) {
              lt(t, d, y);
            }
        }
      } catch (y) {
        lt(t, t.return, y);
      }
      if (t === e) {
        re = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        m.return = t.return, re = m;
        break;
      }
      re = t.return;
    }
  }
  var wh = Math.ceil, Hs = Q.ReactCurrentDispatcher, Ll = Q.ReactCurrentOwner, nn = Q.ReactCurrentBatchConfig, De = 0, vt = null, dt = null, jt = 0, Wt = 0, Gr = Wn(0), ht = 0, Di = null, vr = 0, Ks = 0, Ol = 0, zi = null, It = null, Il = 0, Wr = 1 / 0, Ln = null, Gs = !1, Dl = null, qn = null, Ws = !1, er = null, Qs = 0, Vi = 0, zl = null, Ys = -1, Js = 0;
  function Pt() {
    return (De & 6) !== 0 ? X() : Ys !== -1 ? Ys : Ys = X();
  }
  function tr(e) {
    return (e.mode & 1) === 0 ? 1 : (De & 2) !== 0 && jt !== 0 ? jt & -jt : ah.transition !== null ? (Js === 0 && (Js = So()), Js) : (e = Ke, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $o(e.type)), e);
  }
  function fn(e, t, n, r) {
    if (50 < Vi) throw Vi = 0, zl = null, Error(u(185));
    ci(e, n, r), ((De & 2) === 0 || e !== vt) && (e === vt && ((De & 2) === 0 && (Ks |= n), ht === 4 && nr(e, jt)), Dt(e, r), n === 1 && De === 0 && (t.mode & 1) === 0 && (Wr = X() + 500, Es && Yn()));
  }
  function Dt(e, t) {
    var n = e.callbackNode;
    af(e, t);
    var r = ss(e, e === vt ? jt : 0);
    if (r === 0) n !== null && Cn(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Cn(n), t === 1) e.tag === 0 ? sh($c.bind(null, e)) : vu($c.bind(null, e)), th(function() {
        (De & 6) === 0 && Yn();
      }), n = null;
      else {
        switch (wo(r)) {
          case 1:
            n = At;
            break;
          case 4:
            n = ut;
            break;
          case 16:
            n = _n;
            break;
          case 536870912:
            n = zn;
            break;
          default:
            n = _n;
        }
        n = zc(n, Pc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Pc(e, t) {
    if (Ys = -1, Js = 0, (De & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Qr() && e.callbackNode !== n) return null;
    var r = ss(e, e === vt ? jt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Xs(e, r);
    else {
      t = r;
      var s = De;
      De |= 2;
      var o = Ac();
      (vt !== e || jt !== t) && (Ln = null, Wr = X() + 500, kr(e, t));
      do
        try {
          Ch();
          break;
        } catch (m) {
          Rc(e, m);
        }
      while (!0);
      rl(), Hs.current = o, De = s, dt !== null ? t = 0 : (vt = null, jt = 0, t = ht);
    }
    if (t !== 0) {
      if (t === 2 && (s = ga(e), s !== 0 && (r = s, t = Vl(e, s))), t === 1) throw n = Di, kr(e, 0), nr(e, r), Dt(e, X()), n;
      if (t === 6) nr(e, r);
      else {
        if (s = e.current.alternate, (r & 30) === 0 && !Eh(s) && (t = Xs(e, r), t === 2 && (o = ga(e), o !== 0 && (r = o, t = Vl(e, o))), t === 1)) throw n = Di, kr(e, 0), nr(e, r), Dt(e, X()), n;
        switch (e.finishedWork = s, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            gr(e, It, Ln);
            break;
          case 3:
            if (nr(e, r), (r & 130023424) === r && (t = Il + 500 - X(), 10 < t)) {
              if (ss(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & r) !== r) {
                Pt(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = Ga(gr.bind(null, e, It, Ln), t);
              break;
            }
            gr(e, It, Ln);
            break;
          case 4:
            if (nr(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var d = 31 - an(r);
              o = 1 << d, d = t[d], d > s && (s = d), r &= ~o;
            }
            if (r = s, r = X() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wh(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Ga(gr.bind(null, e, It, Ln), r);
              break;
            }
            gr(e, It, Ln);
            break;
          case 5:
            gr(e, It, Ln);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return Dt(e, X()), e.callbackNode === n ? Pc.bind(null, e) : null;
  }
  function Vl(e, t) {
    var n = zi;
    return e.current.memoizedState.isDehydrated && (kr(e, t).flags |= 256), e = Xs(e, t), e !== 2 && (t = It, It = n, t !== null && Bl(t)), e;
  }
  function Bl(e) {
    It === null ? It = e : It.push.apply(It, e);
  }
  function Eh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var s = n[r], o = s.getSnapshot;
          s = s.value;
          try {
            if (!ln(o(), s)) return !1;
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
    for (t &= ~Ol, t &= ~Ks, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - an(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function $c(e) {
    if ((De & 6) !== 0) throw Error(u(327));
    Qr();
    var t = ss(e, 0);
    if ((t & 1) === 0) return Dt(e, X()), null;
    var n = Xs(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ga(e);
      r !== 0 && (t = r, n = Vl(e, r));
    }
    if (n === 1) throw n = Di, kr(e, 0), nr(e, t), Dt(e, X()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, gr(e, It, Ln), Dt(e, X()), null;
  }
  function bl(e, t) {
    var n = De;
    De |= 1;
    try {
      return e(t);
    } finally {
      De = n, De === 0 && (Wr = X() + 500, Es && Yn());
    }
  }
  function yr(e) {
    er !== null && er.tag === 0 && (De & 6) === 0 && Qr();
    var t = De;
    De |= 1;
    var n = nn.transition, r = Ke;
    try {
      if (nn.transition = null, Ke = 1, e) return e();
    } finally {
      Ke = r, nn.transition = n, De = t, (De & 6) === 0 && Yn();
    }
  }
  function Ul() {
    Wt = Gr.current, qe(Gr);
  }
  function kr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, eh(n)), dt !== null) for (n = dt.return; n !== null; ) {
      var r = n;
      switch (Za(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ss();
          break;
        case 3:
          Ur(), qe(Ft), qe(wt), dl();
          break;
        case 5:
          ul(r);
          break;
        case 4:
          Ur();
          break;
        case 13:
          qe(st);
          break;
        case 19:
          qe(st);
          break;
        case 10:
          il(r.type._context);
          break;
        case 22:
        case 23:
          Ul();
      }
      n = n.return;
    }
    if (vt = e, dt = e = rr(e.current, null), jt = Wt = t, ht = 0, Di = null, Ol = Ks = vr = 0, It = zi = null, hr !== null) {
      for (t = 0; t < hr.length; t++) if (n = hr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var s = r.next, o = n.pending;
        if (o !== null) {
          var d = o.next;
          o.next = s, r.next = d;
        }
        n.pending = r;
      }
      hr = null;
    }
    return e;
  }
  function Rc(e, t) {
    do {
      var n = dt;
      try {
        if (rl(), Fs.current = Ds, Ls) {
          for (var r = at.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), r = r.next;
          }
          Ls = !1;
        }
        if (pr = 0, pt = ft = at = null, Ri = !1, Ai = 0, Ll.current = null, n === null || n.return === null) {
          ht = 1, Di = t, dt = null;
          break;
        }
        e: {
          var o = e, d = n.return, m = n, y = t;
          if (t = jt, m.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var P = y, B = m, W = B.tag;
            if ((B.mode & 1) === 0 && (W === 0 || W === 11 || W === 15)) {
              var V = B.alternate;
              V ? (B.updateQueue = V.updateQueue, B.memoizedState = V.memoizedState, B.lanes = V.lanes) : (B.updateQueue = null, B.memoizedState = null);
            }
            var ne = rc(d);
            if (ne !== null) {
              ne.flags &= -257, ic(ne, d, m, o, t), ne.mode & 1 && nc(o, P, t), t = ne, y = P;
              var se = t.updateQueue;
              if (se === null) {
                var oe = /* @__PURE__ */ new Set();
                oe.add(y), t.updateQueue = oe;
              } else se.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                nc(o, P, t), Hl();
                break e;
              }
              y = Error(u(426));
            }
          } else if (tt && m.mode & 1) {
            var ct = rc(d);
            if (ct !== null) {
              (ct.flags & 65536) === 0 && (ct.flags |= 256), ic(ct, d, m, o, t), tl(Hr(y, m));
              break e;
            }
          }
          o = y = Hr(y, m), ht !== 4 && (ht = 2), zi === null ? zi = [o] : zi.push(o), o = d;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var S = ec(o, y, t);
                _u(o, S);
                break e;
              case 1:
                m = y;
                var x = o.type, N = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (qn === null || !qn.has(N)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var J = tc(o, m, t);
                  _u(o, J);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Lc(n);
      } catch (ue) {
        t = ue, dt === n && n !== null && (dt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ac() {
    var e = Hs.current;
    return Hs.current = Ds, e === null ? Ds : e;
  }
  function Hl() {
    (ht === 0 || ht === 3 || ht === 2) && (ht = 4), vt === null || (vr & 268435455) === 0 && (Ks & 268435455) === 0 || nr(vt, jt);
  }
  function Xs(e, t) {
    var n = De;
    De |= 2;
    var r = Ac();
    (vt !== e || jt !== t) && (Ln = null, kr(e, t));
    do
      try {
        Nh();
        break;
      } catch (s) {
        Rc(e, s);
      }
    while (!0);
    if (rl(), De = n, Hs.current = r, dt !== null) throw Error(u(261));
    return vt = null, jt = 0, ht;
  }
  function Nh() {
    for (; dt !== null; ) Fc(dt);
  }
  function Ch() {
    for (; dt !== null && !Dn(); ) Fc(dt);
  }
  function Fc(e) {
    var t = Dc(e.alternate, e, Wt);
    e.memoizedProps = e.pendingProps, t === null ? Lc(e) : dt = t, Ll.current = null;
  }
  function Lc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = kh(n, t, Wt), n !== null) {
          dt = n;
          return;
        }
      } else {
        if (n = gh(n, t), n !== null) {
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
  function gr(e, t, n) {
    var r = Ke, s = nn.transition;
    try {
      nn.transition = null, Ke = 1, _h(e, t, n, r);
    } finally {
      nn.transition = s, Ke = r;
    }
    return null;
  }
  function _h(e, t, n, r) {
    do
      Qr();
    while (er !== null);
    if ((De & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (lf(e, o), e === vt && (dt = vt = null, jt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ws || (Ws = !0, zc(_n, function() {
      return Qr(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = nn.transition, nn.transition = null;
      var d = Ke;
      Ke = 1;
      var m = De;
      De |= 4, Ll.current = null, jh(e, n), Nc(n, e), Wf(Ha), os = !!Ua, Ha = Ua = null, e.current = n, Sh(n), A(), De = m, Ke = d, nn.transition = o;
    } else e.current = n;
    if (Ws && (Ws = !1, er = e, Qs = s), o = e.pendingLanes, o === 0 && (qn = null), ef(n.stateNode), Dt(e, X()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
    if (Gs) throw Gs = !1, e = Dl, Dl = null, e;
    return (Qs & 1) !== 0 && e.tag !== 0 && Qr(), o = e.pendingLanes, (o & 1) !== 0 ? e === zl ? Vi++ : (Vi = 0, zl = e) : Vi = 0, Yn(), null;
  }
  function Qr() {
    if (er !== null) {
      var e = wo(Qs), t = nn.transition, n = Ke;
      try {
        if (nn.transition = null, Ke = 16 > e ? 16 : e, er === null) var r = !1;
        else {
          if (e = er, er = null, Qs = 0, (De & 6) !== 0) throw Error(u(331));
          var s = De;
          for (De |= 4, re = e.current; re !== null; ) {
            var o = re, d = o.child;
            if ((re.flags & 16) !== 0) {
              var m = o.deletions;
              if (m !== null) {
                for (var y = 0; y < m.length; y++) {
                  var P = m[y];
                  for (re = P; re !== null; ) {
                    var B = re;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ii(8, B, o);
                    }
                    var W = B.child;
                    if (W !== null) W.return = B, re = W;
                    else for (; re !== null; ) {
                      B = re;
                      var V = B.sibling, ne = B.return;
                      if (xc(B), B === P) {
                        re = null;
                        break;
                      }
                      if (V !== null) {
                        V.return = ne, re = V;
                        break;
                      }
                      re = ne;
                    }
                  }
                }
                var se = o.alternate;
                if (se !== null) {
                  var oe = se.child;
                  if (oe !== null) {
                    se.child = null;
                    do {
                      var ct = oe.sibling;
                      oe.sibling = null, oe = ct;
                    } while (oe !== null);
                  }
                }
                re = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) d.return = o, re = d;
            else e: for (; re !== null; ) {
              if (o = re, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Ii(9, o, o.return);
              }
              var S = o.sibling;
              if (S !== null) {
                S.return = o.return, re = S;
                break e;
              }
              re = o.return;
            }
          }
          var x = e.current;
          for (re = x; re !== null; ) {
            d = re;
            var N = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && N !== null) N.return = d, re = N;
            else e: for (d = x; re !== null; ) {
              if (m = re, (m.flags & 2048) !== 0) try {
                switch (m.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Us(9, m);
                }
              } catch (ue) {
                lt(m, m.return, ue);
              }
              if (m === d) {
                re = null;
                break e;
              }
              var J = m.sibling;
              if (J !== null) {
                J.return = m.return, re = J;
                break e;
              }
              re = m.return;
            }
          }
          if (De = s, Yn(), yn && typeof yn.onPostCommitFiberRoot == "function") try {
            yn.onPostCommitFiberRoot(ns, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ke = n, nn.transition = t;
      }
    }
    return !1;
  }
  function Oc(e, t, n) {
    t = Hr(n, t), t = ec(e, t, 1), e = Xn(e, t, 1), t = Pt(), e !== null && (ci(e, 1, t), Dt(e, t));
  }
  function lt(e, t, n) {
    if (e.tag === 3) Oc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Oc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qn === null || !qn.has(r))) {
          e = Hr(n, e), e = tc(t, e, 1), t = Xn(t, e, 1), e = Pt(), t !== null && (ci(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Th(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Pt(), e.pingedLanes |= e.suspendedLanes & n, vt === e && (jt & n) === n && (ht === 4 || ht === 3 && (jt & 130023424) === jt && 500 > X() - Il ? kr(e, 0) : Ol |= n), Dt(e, t);
  }
  function Ic(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = is, is <<= 1, (is & 130023424) === 0 && (is = 4194304)));
    var n = Pt();
    e = Rn(e, t), e !== null && (ci(e, t, n), Dt(e, n));
  }
  function Mh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ic(e, n);
  }
  function Ph(e, t) {
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
    r !== null && r.delete(t), Ic(e, n);
  }
  var Dc;
  Dc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ft.current) Ot = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ot = !1, yh(e, t, n);
      Ot = (e.flags & 131072) !== 0;
    }
    else Ot = !1, tt && (t.flags & 1048576) !== 0 && yu(t, Cs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Bs(e, t), e = t.pendingProps;
        var s = Or(t, wt.current);
        br(t, n), s = ml(null, t, r, e, s, n);
        var o = pl();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Lt(r) ? (o = !0, ws(t)) : o = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, ll(t), s.updater = zs, t.stateNode = s, s._reactInternals = t, jl(t, r, e, n), t = Nl(null, t, r, !0, o, n)) : (t.tag = 0, tt && o && Xa(t), Mt(null, t, s, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Bs(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Rh(r), e = un(r, e), s) {
            case 0:
              t = El(null, t, r, e, n);
              break e;
            case 1:
              t = cc(null, t, r, e, n);
              break e;
            case 11:
              t = sc(null, t, r, e, n);
              break e;
            case 14:
              t = ac(null, t, r, un(r.type, e), n);
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
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : un(r, s), El(e, t, r, s, n);
      case 1:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : un(r, s), cc(e, t, r, s, n);
      case 3:
        e: {
          if (dc(t), e === null) throw Error(u(387));
          r = t.pendingProps, o = t.memoizedState, s = o.element, Cu(e, t), Rs(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            s = Hr(Error(u(423)), t), t = fc(e, t, r, n, s);
            break e;
          } else if (r !== s) {
            s = Hr(Error(u(424)), t), t = fc(e, t, r, n, s);
            break e;
          } else for (Gt = Gn(t.stateNode.containerInfo.firstChild), Kt = t, tt = !0, on = null, n = Eu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (zr(), r === s) {
              t = Fn(e, t, n);
              break e;
            }
            Mt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Mu(t), e === null && el(t), r = t.type, s = t.pendingProps, o = e !== null ? e.memoizedProps : null, d = s.children, Ka(r, s) ? d = null : o !== null && Ka(r, o) && (t.flags |= 32), uc(e, t), Mt(e, t, d, n), t.child;
      case 6:
        return e === null && el(t), null;
      case 13:
        return hc(e, t, n);
      case 4:
        return ol(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Vr(t, null, r, n) : Mt(e, t, r, n), t.child;
      case 11:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : un(r, s), sc(e, t, r, s, n);
      case 7:
        return Mt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Mt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Mt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, s = t.pendingProps, o = t.memoizedProps, d = s.value, Je(Ms, r._currentValue), r._currentValue = d, o !== null) if (ln(o.value, d)) {
            if (o.children === s.children && !Ft.current) {
              t = Fn(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var m = o.dependencies;
            if (m !== null) {
              d = o.child;
              for (var y = m.firstContext; y !== null; ) {
                if (y.context === r) {
                  if (o.tag === 1) {
                    y = An(-1, n & -n), y.tag = 2;
                    var P = o.updateQueue;
                    if (P !== null) {
                      P = P.shared;
                      var B = P.pending;
                      B === null ? y.next = y : (y.next = B.next, B.next = y), P.pending = y;
                    }
                  }
                  o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), sl(
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
              d.lanes |= n, m = d.alternate, m !== null && (m.lanes |= n), sl(d, n, t), d = o.sibling;
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
          Mt(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, r = t.pendingProps.children, br(t, n), s = en(s), r = r(s), t.flags |= 1, Mt(e, t, r, n), t.child;
      case 14:
        return r = t.type, s = un(r, t.pendingProps), s = un(r.type, s), ac(e, t, r, s, n);
      case 15:
        return lc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : un(r, s), Bs(e, t), t.tag = 1, Lt(r) ? (e = !0, ws(t)) : e = !1, br(t, n), Zu(t, r, s), jl(t, r, s, n), Nl(null, t, r, !0, e, n);
      case 19:
        return pc(e, t, n);
      case 22:
        return oc(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function zc(e, t) {
    return ts(e, t);
  }
  function $h(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rn(e, t, n, r) {
    return new $h(e, t, n, r);
  }
  function Kl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Rh(e) {
    if (typeof e == "function") return Kl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Fe) return 11;
      if (e === ie) return 14;
    }
    return 2;
  }
  function rr(e, t) {
    var n = e.alternate;
    return n === null ? (n = rn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Zs(e, t, n, r, s, o) {
    var d = 2;
    if (r = e, typeof e == "function") Kl(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case $:
        return xr(n.children, s, o, t);
      case w:
        d = 8, s |= 8;
        break;
      case b:
        return e = rn(12, n, t, s | 2), e.elementType = b, e.lanes = o, e;
      case Ce:
        return e = rn(13, n, t, s), e.elementType = Ce, e.lanes = o, e;
      case Te:
        return e = rn(19, n, t, s), e.elementType = Te, e.lanes = o, e;
      case ye:
        return qs(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case q:
            d = 10;
            break e;
          case Pe:
            d = 9;
            break e;
          case Fe:
            d = 11;
            break e;
          case ie:
            d = 14;
            break e;
          case je:
            d = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = rn(d, n, t, s), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function xr(e, t, n, r) {
    return e = rn(7, e, r, t), e.lanes = n, e;
  }
  function qs(e, t, n, r) {
    return e = rn(22, e, r, t), e.elementType = ye, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Gl(e, t, n) {
    return e = rn(6, e, null, t), e.lanes = n, e;
  }
  function Wl(e, t, n) {
    return t = rn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Ah(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xa(0), this.expirationTimes = xa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xa(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function Ql(e, t, n, r, s, o, d, m, y) {
    return e = new Ah(e, t, n, m, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = rn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ll(o), e;
  }
  function Fh(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ee, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Vc(e) {
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
      if (Lt(n)) return mu(e, n, t);
    }
    return t;
  }
  function Bc(e, t, n, r, s, o, d, m, y) {
    return e = Ql(n, r, !0, e, s, o, d, m, y), e.context = Vc(null), n = e.current, r = Pt(), s = tr(n), o = An(r, s), o.callback = t ?? null, Xn(n, o, s), e.current.lanes = s, ci(e, s, r), Dt(e, r), e;
  }
  function ea(e, t, n, r) {
    var s = t.current, o = Pt(), d = tr(s);
    return n = Vc(n), t.context === null ? t.context = n : t.pendingContext = n, t = An(o, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Xn(s, t, d), e !== null && (fn(e, s, d, o), $s(e, s, d)), d;
  }
  function ta(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function bc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Yl(e, t) {
    bc(e, t), (e = e.alternate) && bc(e, t);
  }
  function Lh() {
    return null;
  }
  var Uc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Jl(e) {
    this._internalRoot = e;
  }
  na.prototype.render = Jl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    ea(e, t, null, null);
  }, na.prototype.unmount = Jl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      yr(function() {
        ea(null, e, null, null);
      }), t[Tn] = null;
    }
  };
  function na(e) {
    this._internalRoot = e;
  }
  na.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Co();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && Mo(e);
    }
  };
  function Xl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ra(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Hc() {
  }
  function Oh(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var P = ta(d);
          o.call(P);
        };
      }
      var d = Bc(t, r, e, 0, null, !1, !1, "", Hc);
      return e._reactRootContainer = d, e[Tn] = d.current, Ei(e.nodeType === 8 ? e.parentNode : e), yr(), d;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof r == "function") {
      var m = r;
      r = function() {
        var P = ta(y);
        m.call(P);
      };
    }
    var y = Ql(e, 0, !1, null, null, !1, !1, "", Hc);
    return e._reactRootContainer = y, e[Tn] = y.current, Ei(e.nodeType === 8 ? e.parentNode : e), yr(function() {
      ea(t, y, n, r);
    }), y;
  }
  function ia(e, t, n, r, s) {
    var o = n._reactRootContainer;
    if (o) {
      var d = o;
      if (typeof s == "function") {
        var m = s;
        s = function() {
          var y = ta(d);
          m.call(y);
        };
      }
      ea(t, d, e, s);
    } else d = Oh(n, t, e, s, r);
    return ta(d);
  }
  Eo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ui(t.pendingLanes);
          n !== 0 && (ja(t, n | 1), Dt(t, X()), (De & 6) === 0 && (Wr = X() + 500, Yn()));
        }
        break;
      case 13:
        yr(function() {
          var r = Rn(e, 1);
          if (r !== null) {
            var s = Pt();
            fn(r, e, 1, s);
          }
        }), Yl(e, 1);
    }
  }, Sa = function(e) {
    if (e.tag === 13) {
      var t = Rn(e, 134217728);
      if (t !== null) {
        var n = Pt();
        fn(t, e, 134217728, n);
      }
      Yl(e, 134217728);
    }
  }, No = function(e) {
    if (e.tag === 13) {
      var t = tr(e), n = Rn(e, t);
      if (n !== null) {
        var r = Pt();
        fn(n, e, t, r);
      }
      Yl(e, t);
    }
  }, Co = function() {
    return Ke;
  }, _o = function(e, t) {
    var n = Ke;
    try {
      return Ke = e, t();
    } finally {
      Ke = n;
    }
  }, Rt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Re(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var s = js(r);
              if (!s) throw Error(u(90));
              ce(r), Re(r, s);
            }
          }
        }
        break;
      case "textarea":
        ze(e, n);
        break;
      case "select":
        t = n.value, t != null && be(e, !!n.multiple, t, !1);
    }
  }, Xi = bl, Le = yr;
  var Ih = { usingClientEntryPoint: !1, Events: [_i, Fr, js, pn, vn, bl] }, Bi = { findFiberByHostInstance: ur, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Dh = { bundleType: Bi.bundleType, version: Bi.version, rendererPackageName: Bi.rendererPackageName, rendererConfig: Bi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Q.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = li(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Bi.findFiberByHostInstance || Lh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sa.isDisabled && sa.supportsFiber) try {
      ns = sa.inject(Dh), yn = sa;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ih, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xl(t)) throw Error(u(200));
    return Fh(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!Xl(e)) throw Error(u(299));
    var n = !1, r = "", s = Uc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Ql(e, 1, !1, null, null, n, !1, r, s), e[Tn] = t.current, Ei(e.nodeType === 8 ? e.parentNode : e), new Jl(t);
  }, zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = li(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return yr(e);
  }, zt.hydrate = function(e, t, n) {
    if (!ra(t)) throw Error(u(200));
    return ia(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!Xl(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, s = !1, o = "", d = Uc;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = Bc(t, null, e, 1, n ?? null, s, !1, o, d), e[Tn] = t.current, Ei(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new na(t);
  }, zt.render = function(e, t, n) {
    if (!ra(t)) throw Error(u(200));
    return ia(null, e, t, !1, n);
  }, zt.unmountComponentAtNode = function(e) {
    if (!ra(e)) throw Error(u(40));
    return e._reactRootContainer ? (yr(function() {
      ia(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Tn] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = bl, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ra(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return ia(e, t, n, !1, r);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var Zc;
function Wh() {
  if (Zc) return eo.exports;
  Zc = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), eo.exports = Gh(), eo.exports;
}
var qc;
function Qh() {
  if (qc) return aa;
  qc = 1;
  var i = Wh();
  return aa.createRoot = i.createRoot, aa.hydrateRoot = i.hydrateRoot, aa;
}
var Yh = Qh();
const Jh = (() => {
  const i = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", u = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], f = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, p = 7, k = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], j = ["e", "B", "G", "D", "A", "E"], O = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], E = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], I = {
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
  }, z = 26, D = 72, _ = 30, T = 54, F = 34, M = 11, R = (z + D) / 2, Q = _ + (c.length - 1) * F + 30, te = (Y) => D + Y * T, ee = (Y) => Y === 0 ? R : te(Y) - T / 2, $ = (Y) => _ + Y * F;
  function w(Y, Z, G) {
    const le = a.indexOf(i[Y][0]) + Number(G.slice(-1)) - 1, ge = le % a.length, ce = u[ge] + 12 * Math.floor(le / a.length), de = Y + Z - ce;
    return a[ge] + (de < 0 ? "♭" : "♯").repeat(Math.abs(de));
  }
  function b(Y) {
    return [...Y.base, ...Y.add].sort((Z, G) => Z[0] - G[0]);
  }
  function q(Y, Z, G) {
    const le = Z + (G ? 1 : 0), ge = k[le % k.length], ce = Math.min(...ge.map(([Re]) => Re)), de = Math.max(...ge.map(([, Re]) => Re));
    let xe = (Y - f % 12 + 12) % 12 - (G ? 8 : 5) + 12 * Math.floor(le / k.length);
    return ce + xe < 0 && (xe += 12), de + xe > h.pentatonic && (xe -= 12), {
      strings: ge.map((Re) => Re.map((We) => We + xe)),
      start: ce + xe,
      end: de + xe
    };
  }
  function Pe(Y, Z, G) {
    const le = G[Z], ge = (Y + le - f % 12 + 12) % 12, ce = f + ge - le, de = c.map((fe, Ne) => {
      const xe = Z + (c.length - 1 - Ne) * 3;
      return [xe, xe + 1, xe + 2].map((Re) => {
        const We = Math.floor(Re / G.length), Be = G[Re % G.length];
        return ce + Be + 12 * We - fe;
      });
    });
    return {
      strings: de,
      start: Math.min(...de.map((fe) => fe[0])),
      end: Math.max(...de.map((fe) => fe.at(-1)))
    };
  }
  function Fe(Y, Z) {
    const G = [], le = Math.ceil(-Y.end / 12) * 12;
    for (let ce = le; Y.start + ce <= Z; ce += 12) {
      const de = Y.strings.map((Ne) => Ne.map((xe) => xe + ce).filter((xe) => xe >= 0 && xe <= Z)), fe = de.flat();
      G.push({
        strings: de,
        start: Math.min(...fe),
        end: Math.max(...fe),
        partial: Y.start + ce < 0 || Y.end + ce > Z
      });
    }
    const ge = G.filter((ce) => !ce.partial);
    return ge.length ? ge : G;
  }
  function Ce(Y) {
    return b(Y).length === p;
  }
  function Te(Y, Z, G) {
    const le = Ce(Z);
    Y.querySelector('[value="3nps"]').disabled = !le, Y.value = le ? G ?? "3nps" : "pentatonic";
  }
  function ie(Y, Z, G, le, ge) {
    const ce = b(Z).map(([de]) => de);
    return le.map((de) => {
      const fe = de - 1, Ne = G === "3nps" ? Pe(Y, fe, ce) : q(Y, fe, Z.base === E), xe = ge === void 0 ? [Ne] : Fe(Ne, ge);
      return { number: de, positions: xe };
    });
  }
  function je(Y, Z) {
    const G = Y.getBoundingClientRect(), le = Y.querySelectorAll(Z);
    let ge = 1 / 0;
    le.forEach((ce) => {
      const de = ce.getBoundingClientRect();
      let fe = 0;
      de.left < G.left ? fe = de.left - G.left - 8 : de.right > G.right && (fe = de.right - G.right + 8), Math.abs(fe) < Math.abs(ge) && (ge = fe);
    }), Number.isFinite(ge) && (Y.scrollLeft += ge);
  }
  function ye(Y, Z = !1) {
    const G = Y === "3nps" ? p : k.length;
    return Array.from({ length: G }, (le, ge) => {
      const ce = ge + 1;
      return '<label class="box-toggle" data-box="' + ce + '"><input type="checkbox" value="' + ce + '"' + (Z && ge === 0 ? " checked" : "") + "> Boksi " + ce + "</label>";
    }).join("");
  }
  function C(Y, Z) {
    const G = b(Z), le = new Map(G.map(([ce, de]) => [ce, w(Y, ce, de)])), ge = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return G.flatMap(([ce, de]) => ge.flatMap(({ suffix: fe, base: Ne }) => {
      const xe = Ne.map(([Re]) => le.get((ce + Re) % 12));
      return xe.every(Boolean) ? {
        root: (Y + ce) % 12,
        degree: Number(String(de).replace(/\D/g, "")),
        name: xe[0] + fe,
        notes: xe,
        base: Ne,
        add: []
      } : [];
    }));
  }
  function K(Y, Z) {
    const G = Y.base.map(([ce]) => (Y.root + ce) % 12), le = c.map((ce) => {
      const de = [];
      for (let fe = 0; fe <= Z; fe++) {
        const Ne = (ce + fe) % 12;
        G.includes(Ne) && de.push({ fret: fe, pitch: Ne });
      }
      return de;
    }), ge = [];
    for (let ce = 0; ce <= le.length - 3; ce++)
      for (const de of le[ce])
        for (const fe of le[ce + 1])
          if (de.pitch !== fe.pitch)
            for (const Ne of le[ce + 2]) {
              if (Ne.pitch === de.pitch || Ne.pitch === fe.pitch) continue;
              const xe = [de.fret, fe.fret, Ne.fret], Re = Math.min(...xe), We = Math.max(...xe);
              if (We - Re > 3) continue;
              const Be = Array(c.length).fill(null);
              Be.splice(ce, 3, ...xe), ge.push({ strings: Be, low: Re, high: We });
            }
    return ge.sort((ce, de) => ce.high - de.high || ce.low - de.low);
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
  function L(Y, Z) {
    const G = U[Y + ":" + Z];
    if (G) return { frets: G, barre: null };
    let le = null;
    return g.forEach(({ string: ge, openPC: ce, shapes: de }) => {
      const fe = de[Z];
      if (!fe) return;
      let Ne = (Y - ce + 12) % 12;
      if (Ne + Math.min(...fe.filter((We) => We !== null)) < 0 && (Ne += 12), le && le.fret <= Ne) return;
      const xe = fe.map((We) => We === null ? null : Ne + We), Re = Ne > 0 && fe.at(-1) === 0 ? { fret: Ne, from: ge, to: fe.length - 1 } : null;
      le = { fret: Ne, frets: xe, barre: Re };
    }), le && { frets: le.frets, barre: le.barre };
  }
  function he(Y, { frets: Z, barre: G }, le) {
    const xe = [...c].reverse(), Re = Z.filter((ze) => ze > 0), Be = !Re.length || Math.max(...Re) <= 4 && (Z.includes(0) || Math.min(...Re) === 1) ? 1 : Math.min(...Re), Ge = (ze) => 24 + ze * 14, be = (ze) => 30 + (ze - Be) * 18 + 18 / 2, kt = 102;
    let Qe = '<svg class="chord-svg" viewBox="0 0 108 ' + (kt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + le + "-ote paksusta kielestä ohueen: " + Z.map((ze) => ze ?? "x").join(" ") + '">';
    for (let ze = 0; ze <= 4; ze++)
      Qe += '<line class="' + (ze === 0 && Be === 1 ? "nut" : "fret") + '" x1="' + Ge(0) + '" y1="' + (30 + ze * 18) + '" x2="' + Ge(5) + '" y2="' + (30 + ze * 18) + '"/>';
    return Z.forEach((ze, et) => {
      Qe += '<line class="string" x1="' + Ge(et) + '" y1="30" x2="' + Ge(et) + '" y2="' + kt + '"/>';
    }), Be > 1 && (Qe += '<text class="fret-label" x="15" y="' + (be(Be) + 4) + '">' + Be + "</text>"), G && (Qe += '<rect class="barre" x="' + (Ge(G.from) - 6.5) + '" y="' + (be(G.fret) - 6.5) + '" width="' + ((G.to - G.from) * 14 + 13) + '" height="13" rx="6.5"/>'), Z.forEach((ze, et) => {
      if (ze === null) {
        Qe += '<text class="marker" x="' + Ge(et) + '" y="22">×</text>';
        return;
      }
      const _t = (xe[et] + ze) % 12 === Y;
      if (ze === 0) {
        Qe += '<circle class="open' + (_t ? " root-open" : "") + '" cx="' + Ge(et) + '" cy="18" r="4.5"/>';
        return;
      }
      G && ze === G.fret && et >= G.from && et <= G.to && !_t || (Qe += '<circle class="' + (_t ? "root" : "tone") + '" cx="' + Ge(et) + '" cy="' + be(ze) + '" r="6.5"/>');
    }), Qe + "</svg>";
  }
  function Se(Y, Z) {
    const G = new URLSearchParams(location.search), le = i.indexOf(G.get("toonikka")), ge = G.get("asteikko");
    return {
      rootPC: le === -1 ? Y : le,
      scaleId: Object.hasOwn(I, ge) ? ge : Z
    };
  }
  function _e(Y, Z, G) {
    return Y + "?" + new URLSearchParams({ toonikka: i[Z], asteikko: G });
  }
  function Ee(Y, Z, G, {
    boxes: le = [],
    onlyBoxNotes: ge = !1,
    automatic: ce = !0,
    focusDegree: de = "",
    grip: fe = null,
    barre: Ne = null,
    label: xe = i[Y] + " " + Z.name,
    notes: Re = null,
    targets: We = !1,
    muteFret: Be = null
  } = {}) {
    const Ge = te(G), be = Ge + 48, kt = be + 28, Qe = _ - 14, ze = $(c.length - 1) + 14, et = ze - Qe, _t = ce ? 680 : Math.ceil(kt * 0.64), Vt = le.flatMap((ke) => ke.positions), Bt = {};
    Z.base.forEach(([ke, Me]) => Bt[(Y + ke) % 12] = { deg: Me, added: !1 }), Z.add.forEach(([ke, Me]) => Bt[(Y + ke) % 12] = { deg: Me, added: !0 });
    const sn = c.map((ke, Me) => !!fe && fe[Me] === null), Qt = !!fe && Be !== null, Yt = O.filter((ke, Me) => sn[Me]).reverse(), Tt = xe + ". " + G + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Yt.length ? " Soittamatta jäävät kielet: " + Yt.join(", ") + "." : "");
    let me = '<svg viewBox="0 0 ' + kt + " " + Q + '" style="min-width:' + _t + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (We ? "group" : "img") + '" aria-label="' + Tt + '">';
    me += '<rect x="' + z + '" y="' + Qe + '" width="' + (D - z) + '" height="' + et + '" rx="6" fill="#2a2338"/>', me += '<rect x="' + D + '" y="' + Qe + '" width="' + (Ge - D) + '" height="' + et + '" fill="#231a12"/>', me += '<rect x="' + Ge + '" y="' + Qe + '" width="' + (kt - Ge - 4) + '" height="' + et + '" rx="8" fill="#32251e"/>';
    for (let ke = 1; ke <= G; ke++)
      me += '<line x1="' + te(ke) + '" y1="' + Qe + '" x2="' + te(ke) + '" y2="' + ze + '" stroke="#6f5b47" stroke-width="2"/>';
    me += '<rect x="' + (D - 3) + '" y="' + Qe + '" width="6" height="' + et + '" rx="2" fill="#d8cbb6"/>', me += '<rect x="' + (be - 11) + '" y="' + (Qe + 3) + '" width="22" height="' + (et - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', me += '<rect x="' + (be - 4) + '" y="' + (Qe + 7) + '" width="3" height="' + (et - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const bt = (Qe + ze) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((ke) => ke <= G).forEach((ke) => me += '<circle cx="' + ee(ke) + '" cy="' + bt + '" r="5.5" fill="#7a6550"/>');
    for (let ke = 12; ke <= G; ke += 12)
      me += '<circle cx="' + ee(ke) + '" cy="' + (bt - F) + '" r="5.5" fill="#7a6550"/>', me += '<circle cx="' + ee(ke) + '" cy="' + (bt + F) + '" r="5.5" fill="#7a6550"/>';
    me += '<text x="' + R + '" y="' + (Q - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', me += '<text x="' + D + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', me += '<text x="' + be + '" y="' + (Q - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let ke = 1; ke <= G; ke++)
      me += '<text x="' + ee(ke) + '" y="' + (Q - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + ke + "</text>";
    if (le.forEach(({ number: ke, positions: Me }) => {
      Me.forEach(($e) => {
        const Ue = $e.partial ? "box-highlight box-partial" : "box-highlight";
        me += '<g class="' + Ue + '" data-box="' + ke + '" aria-hidden="true">';
        const it = $e.strings.find((mt) => mt.length), Rt = (ee(it[0]) + ee(it.at(-1))) / 2;
        me += '<text class="box-number" x="' + Rt + '" y="12">' + ke + "</text>", $e.strings.forEach((mt, Jt) => {
          if (!mt.length) return;
          const wn = ee(mt[0]) - 16, pn = ee(mt.at(-1)) - ee(mt[0]) + 32;
          me += '<rect class="box-band" x="' + wn + '" y="' + ($(Jt) - 14) + '" width="' + pn + '" height="28" rx="14"/>';
        }), me += "</g>";
      });
    }), c.forEach((ke, Me) => {
      const $e = 1 + Me * 0.45, Ue = $(Me), it = sn[Me] && !Qt;
      it ? me += '<text class="muted-mark" x="' + R + '" y="' + (Ue + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : sn[Me] && Be === 0 || (me += '<line x1="' + (z + 4) + '" y1="' + Ue + '" x2="' + (D - 4) + '" y2="' + Ue + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), me += "<g" + (it ? ' opacity=".35"' : "") + ">", me += '<line x1="' + D + '" y1="' + Ue + '" x2="' + (be + 5) + '" y2="' + Ue + '" stroke="#b9b9c4" stroke-width="' + $e.toFixed(2) + '"/>', me += '<circle cx="' + (be + 5) + '" cy="' + Ue + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', me += "</g>", me += '<text x="13" y="' + (Ue + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + j[Me] + "</text>";
    }), fe && Ne && Ne.fret >= 1 && Ne.fret <= G) {
      const ke = $(Ne.from), Me = $(Ne.to), $e = Math.min(ke, Me) - 6, Ue = Math.max(ke, Me) + 6;
      me += '<rect class="barre-indicator" x="' + (ee(Ne.fret) - 7) + '" y="' + $e + '" width="14" height="' + (Ue - $e) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return We && (me += '<g class="fret-targets">', c.forEach((ke, Me) => {
      for (let $e = 0; $e <= G; $e++) {
        const Ue = $e ? O[Me] + "-kieli, " + $e + ". nauha" : "vapaa " + O[Me] + "-kieli", it = $e ? T : D - z - 6;
        me += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Me + '" data-fret="' + $e + '" data-midi="' + (ke + $e) + '" aria-label="' + Ue + '" x="' + (ee($e) - it / 2) + '" y="' + ($(Me) - F / 2) + '" width="' + it + '" height="' + F + '" fill="transparent"/>';
      }
    }), me += "</g>"), (Re ?? []).forEach(({ string: ke, fret: Me, label: $e, kind: Ue }) => {
      me += '<g class="octave-note octave-' + Ue + '">', me += '<circle cx="' + ee(Me) + '" cy="' + $(ke) + '" r="' + M + '"/>', me += '<text x="' + ee(Me) + '" y="' + ($(ke) + 3.5) + '" font-size="' + ($e.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + $e + "</text>", me += "</g>";
    }), fe && (me += '<g class="grip-notes">'), (Re ? [] : c).forEach((ke, Me) => {
      for (let $e = 0; $e <= G; $e++) {
        const Ue = (ke + $e) % 12;
        if (!(Ue in Bt) || fe && fe[Me] !== $e || ge && !Vt.some(({ strings: pn }) => {
          const vn = pn[Me];
          return vn.length > 0 && $e >= vn[0] && $e <= vn.at(-1);
        })) continue;
        const it = Bt[Ue], Rt = it.deg === "1", mt = it.added ? "#f0a13c" : Rt ? "#4b2fd6" : "#6d4aff", Jt = it.added ? "#1a1430" : "#fff";
        it.deg === de && (me += '<circle class="focus-note" cx="' + ee($e) + '" cy="' + $(Me) + '" r="14.5"/>');
        const wn = fe ? ' data-string="' + (Me + 1) + '" data-fret="' + $e + '" data-degree="' + it.deg + '"' : "";
        me += "<circle" + wn + ' cx="' + ee($e) + '" cy="' + $(Me) + '" r="' + M + '" fill="' + mt + '" stroke="' + (Rt ? "#fff" : "#1a1430") + '" stroke-width="' + (Rt ? 2.5 : 1) + '"/>', me += '<text x="' + ee($e) + '" y="' + ($(Me) + 3.5) + '" font-size="' + (it.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Jt + '" text-anchor="middle">' + it.deg + "</text>";
      }
    }), fe && (me += "</g>"), Qt && sn.forEach((ke, Me) => {
      if (!ke) return;
      const $e = ee(Be), Ue = $(Me);
      me += '<g class="muted-mark grip-mute" data-string="' + (Me + 1) + '" data-fret="' + Be + '">', me += '<circle cx="' + $e + '" cy="' + Ue + '" r="9" fill="' + (Be === 0 ? "#2a2338" : "#231a12") + '"/>', me += '<text x="' + $e + '" y="' + (Ue + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', me += "</g>";
    }), me += "</svg>", me;
  }
  return {
    CHROM: i,
    OPEN_PITCHES: c,
    PENT_MAJ: E,
    SCALES: I,
    noteName: w,
    scaleNotes: b,
    scaleTriads: C,
    triadGrips: K,
    chordGrip: L,
    renderChordDiagram: he,
    selectionFromURL: Se,
    selectionHref: _e,
    renderBoard: Ee,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: Ce,
    syncBoxSystem: Te,
    fingeringBoxes: ie,
    boxOptions: ye,
    revealPositions: je
  };
})();
globalThis.MusicMapFretboard = Jh;
function ed(i) {
  return 440 * Math.pow(2, (i - 69) / 12);
}
function Xh(i) {
  return 69 + 12 * Math.log2(i / 440);
}
function Zh(i) {
  const a = Xh(i), u = Math.round(a), c = (a - u) * 100;
  return { midi: u, cents: c };
}
const rt = globalThis.MusicMapFretboard, He = (i) => (i % 12 + 12) % 12, qh = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], em = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Oe = (i, a = !1, u = !1) => (a ? em : qh)[He(i)] + (u ? Math.floor(i / 12) - 1 : ""), ar = (i) => rt.CHROM[He(i)], Ki = (i, a, u) => rt.noteName(He(i), a, u);
function tm(i, a) {
  const u = Math.floor(i / 12) - 1;
  return a[0] === "B" && He(i) < 2 ? u - 1 : a[0] === "C" && He(i) > 9 ? u + 1 : u;
}
const mn = ["ohut E", "B", "G", "D", "A", "paksu E"], xo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Td = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], nm = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], wr = (i) => i === 0 ? "vapaa kieli" : `${i}. nauha`, ma = (i, a) => ({ string: i, fret: a, midi: rt.OPEN_PITCHES[i] + a });
function ii(i, a, u) {
  return [...i].sort((c, f) => c - f).flatMap((c) => Array.from({ length: Math.max(0, u - a + 1) }, (f, h) => ma(c, a + h)));
}
const nt = (i) => `${i.string}:${i.fret}`, Sr = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Md = (i, a) => a === "maj" ? `${ar(i)}-duurisointu` : a === "min" ? `${ar(i)}-mollisointu` : `${ar(i)}7-sointu`, Gi = [
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
], td = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Pd(i, a) {
  const u = td[a] ?? td.E, c = He(i - u.root);
  return u.frets.flatMap((f, h) => f === null ? [] : [ma(h, f + c)]);
}
const ua = {
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
}, pa = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, sr = (i, a, u, c) => typeof i == "number" && Number.isFinite(i) ? Math.max(a, Math.min(u, i)) : c, Sn = (i, a, u) => a.includes(i) ? i : u;
function fa(i) {
  const a = { ...ua };
  a.mode = Sn(i.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(i.strings) ? [...new Set(i.strings.filter((u) => Number.isInteger(u) && u >= 0 && u <= 5))].sort((u, c) => u - c) : a.strings, a.strings.length || (a.strings = [...ua.strings]), a.min = Math.round(sr(i.min, 0, 24, a.min)), a.max = Math.round(sr(i.max, a.min, 24, Math.max(a.min, a.max)));
  for (const u of ["accidentals", "flats", "weak", "advance", "reference"]) typeof i[u] == "boolean" && (a[u] = i[u]);
  return a.check = Sn(i.check, ["class", "pitch"], a.check), a.input = Sn(i.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(i.rounds) ? i.rounds : a.rounds, a.root = Math.round(sr(i.root, 0, 11, a.root)), a.scale = typeof i.scale == "string" && Object.hasOwn(rt.SCALES, i.scale) ? i.scale : a.scale, a.box = Math.round(sr(i.box, 0, 5, a.box)), a.order = Sn(i.order, ["random", "up", "down"], a.order), a.chord = Sn(i.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = Sn(i.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = Sn(i.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(i.intervals) ? [...new Set(i.intervals.filter((u) => Number.isInteger(u) && u >= 1 && u <= 12))].sort((u, c) => u - c) : a.intervals, a.intervals.length || (a.intervals = [...ua.intervals]), a.direction = Sn(i.direction, ["up", "down", "both"], a.direction), a.hints = Sn(i.hints, ["off", "always", "fade"], a.hints), a.activity = Sn(i.activity, ["play", "degree"], a.activity), a.minRms = sr(i.minRms, 1e-3, 0.15, a.minRms), a.clarity = sr(i.clarity, 0.85, 0.99, a.clarity), a.stability = sr(i.stability, 120, 800, a.stability), a.cents = sr(i.cents, 10, 45, a.cents), a.device = typeof i.device == "string" ? i.device.slice(0, 256) : "", a;
}
function rm(i, a) {
  const u = new URLSearchParams(i), c = { ...a };
  for (const [f, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    u.has(f) && Object.assign(c, { [h]: u.get(f) });
  for (const [f, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    u.has(f) && (c[h] = Number(u.get(f)));
  u.has("kielet") && (c.strings = u.get("kielet").split(",").map((f) => Number(f) - 1)), u.has("intervallit") && (c.intervals = u.get("intervallit").split(",").map(Number));
  for (const [f, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    u.has(f) && (c[h] = u.get(f) === "1");
  if (u.has("toonikka")) {
    const f = u.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = f.charAt(0).toUpperCase() + f.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], k = Math.max(rt.CHROM.indexOf(h), p.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    k >= 0 && (c.root = k);
  }
  return fa(c);
}
function im(i) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: i.mode,
    toonikka: rt.CHROM[i.root],
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
const Er = (i) => i.mode === "ear-note" ? "note" : ["scale", "chord"].includes(i.mode) && i.activity === "degree" ? "degree" : i.input, On = (i) => i.mode === "scale" && i.order !== "random", $d = (i) => ["note", "degree"].includes(Er(i)) ? "class" : On(i) ? "pitch" : i.check, la = (i) => Er(i) === "mic", nd = "musiikin-kartta:harjoittelu", Rd = 3, lo = () => ({ version: Rd, settings: { ...ua }, stats: {}, recent: [], sessions: [] }), Ad = (i) => `${i.input}:${i.check}:${i.hint ? "guided" : "solo"}:${i.item}`, hn = (i) => typeof i == "number" && Number.isFinite(i) && i >= 0;
function sm(i) {
  return !!i && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => hn(i[a])) && i.correct <= i.attempts && (i.errors === void 0 || hn(i.errors)) && (i.ema === void 0 || hn(i.ema) && i.ema <= 1) && (i.emaMs === void 0 || hn(i.emaMs));
}
function am(i) {
  return !!i && typeof i.id == "string" && hn(i.count) && hn(i.first) && i.first <= i.count && hn(i.ms) && hn(i.at) && (i.solo === void 0 || hn(i.solo) && i.solo <= i.count) && (i.soloFirst === void 0 || hn(i.soloFirst) && i.soloFirst <= (i.solo ?? i.count));
}
function rd(i) {
  if (!i) return lo();
  const a = JSON.parse(i);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !sm(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !hn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !am(p)))) throw new Error("Virheellisiä kierroksia");
  const u = a.version < 3, c = fa(a.settings ?? {}), f = u && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  f && (c.hints = "off");
  const h = {
    version: Rd,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, k]) => [p, { ...k, errors: k.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (f || a.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const id = 2500, lm = 8e3, sd = 0.3, Wi = (i) => i.ema ?? i.correct / i.attempts, Qi = (i) => i.emaMs ?? i.totalMs / i.attempts;
function jo(i) {
  if (!i?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (Qi(i) - id) / (lm - id)));
  return Wi(i) * 0.65 + a * 0.35;
}
function om(i) {
  return !i || i.attempts < 3 ? 3 : 0.25 + (1 - jo(i)) * 3;
}
class ad {
  constructor(a) {
    this.storage = a;
    try {
      this.data = rd(a?.getItem(nd) ?? null);
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
        this.storage.setItem(nd, JSON.stringify(this.data)), this.warning = "";
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
    if (this.data.recent.some((p) => p.id === a.id)) return;
    const u = Ad(a), c = this.data.stats[u] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, f = Number(a.first), h = {
      attempts: c.attempts + 1,
      correct: c.correct + f,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? Wi(c) + sd * (f - Wi(c)) : f,
      emaMs: c.attempts ? Qi(c) + sd * (a.ms - Qi(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, u, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((u) => u.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const u = rd(a);
    this.data = u, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...lo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const um = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), cm = ["e", "B", "G", "D", "A", "E"];
function Fd({ string: i }) {
  return /* @__PURE__ */ l.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ l.jsxs("span", { children: [
      i + 1,
      " · ",
      /* @__PURE__ */ l.jsx("strong", { children: cm[i] })
    ] }),
    i === 0 ? /* @__PURE__ */ l.jsx("small", { children: "ohuin" }) : i === 5 ? /* @__PURE__ */ l.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Ld = (i) => ({ "--string-thickness": 1.25 + i * 0.45 + "px" }), dm = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Od({ min: i, max: a }) {
  return /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
    /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - i + 1 }, (u, c) => {
      const f = i + c;
      return /* @__PURE__ */ l.jsxs("th", { scope: "col", className: f === 0 ? "open-fret" : "", children: [
        f,
        f > 0 && f % 12 === 0 ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : um.has(f) ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, f);
    })
  ] }) });
}
function Yi({ area: i, marks: a = [], mutedStrings: u = [], disabled: c = !1, onAnswer: f, caption: h = "Otelauta" }) {
  const p = { "--cols": i.max - i.min + 1 }, { strings: k, min: j, max: O } = i, [v, E] = H.useState({ string: Math.min(...k), fret: j }), I = H.useRef(null), z = new Map(a.map((T) => [nt(T), T])), D = a.map((T) => `${nt(T)}${T.kind}`).join(",");
  H.useEffect(() => {
    const T = I.current, F = T?.querySelector(".target, .anchor");
    T && F && (T.scrollLeft += F.getBoundingClientRect().left - T.getBoundingClientRect().left - T.clientWidth / 2 + F.clientWidth / 2);
  }, [D]);
  const _ = k.includes(v.string) && v.fret >= j && v.fret <= O ? v : { string: Math.min(...k), fret: j };
  return /* @__PURE__ */ l.jsx("div", { ref: I, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board", style: p, children: [
    /* @__PURE__ */ l.jsxs("caption", { children: [
      h,
      " · ohut e ylhäällä, paksu E alhaalla"
    ] }),
    /* @__PURE__ */ l.jsx(Od, { min: j, max: O }),
    /* @__PURE__ */ l.jsx("tbody", { children: rt.OPEN_PITCHES.map((T, F) => /* @__PURE__ */ l.jsxs("tr", { className: k.includes(F) ? "" : "unused", style: Ld(F), children: [
      /* @__PURE__ */ l.jsxs("th", { scope: "row", "aria-label": `${F + 1}. kieli: ${mn[F]}${u.includes(F) ? ", ei soiteta" : ""}`, children: [
        /* @__PURE__ */ l.jsx(Fd, { string: F }),
        u.includes(F) && /* @__PURE__ */ l.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
      ] }),
      ii([F], j, O).map((M) => {
        const R = z.get(nt(M)), Q = `${mn[F]}-kieli, ${wr(M.fret)}`;
        return /* @__PURE__ */ l.jsx("td", { className: `${M.fret === 0 ? "open-fret " : ""}${R ? R.kind === "answer" ? "target" : R.kind : ""}`, children: /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            "data-string": F,
            "data-fret": M.fret,
            tabIndex: _.string === F && _.fret === M.fret ? 0 : -1,
            onFocus: () => E(M),
            onKeyDown: (te) => {
              if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(te.key)) return;
              te.preventDefault();
              const ee = [...k].sort((q, Pe) => q - Pe), $ = ee.indexOf(F), w = te.key === "ArrowUp" ? ee[Math.max(0, $ - 1)] : te.key === "ArrowDown" ? ee[Math.min(ee.length - 1, $ + 1)] : F, b = te.key === "Home" ? j : te.key === "End" ? O : Math.max(j, Math.min(O, M.fret + (te.key === "ArrowRight" ? 1 : te.key === "ArrowLeft" ? -1 : 0)));
              te.currentTarget.closest("table")?.querySelector(`button[data-string="${w}"][data-fret="${b}"]`)?.focus();
            },
            disabled: c || !k.includes(F),
            "aria-label": Q + (R ? `, ${dm[R.kind]}${R.label ? " " + R.label : ""}` : ""),
            onClick: () => f?.(M),
            children: R ? /* @__PURE__ */ l.jsx("span", { className: "dot", children: R.label || "●" }) : null
          }
        ) }, M.fret);
      })
    ] }, F)) })
  ] }) });
}
function fm({ area: i, stats: a, input: u, check: c, flats: f }) {
  const { strings: h, min: p, max: k } = i, j = `${u}:${c}:solo:notes:`;
  return /* @__PURE__ */ l.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board mastery", style: { "--cols": k - p + 1 }, children: [
    /* @__PURE__ */ l.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ l.jsx(Od, { min: p, max: k }),
    /* @__PURE__ */ l.jsx("tbody", { children: rt.OPEN_PITCHES.map((O, v) => /* @__PURE__ */ l.jsxs("tr", { className: h.includes(v) ? "" : "unused", style: Ld(v), children: [
      /* @__PURE__ */ l.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${mn[v]}`, children: /* @__PURE__ */ l.jsx(Fd, { string: v }) }),
      ii([v], p, k).map((E) => {
        const I = Object.hasOwn(a, j + nt(E)) ? a[j + nt(E)] : void 0, z = jo(I), D = z === null ? "unseen" : I.attempts < 3 ? "few" : z >= 0.8 ? "strong" : z >= 0.5 ? "growing" : "weak", _ = `${mn[v]}-kieli, ${wr(E.fret)}, ${Oe(E.midi, f)}`, T = I ? `${Math.round(z * 100)} %, ${I.correct}/${I.attempts} heti oikein, viime aikoina ${Math.round(Wi(I) * 100)} % ja ${(Qi(I) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ l.jsxs("td", { className: `${E.fret === 0 ? "open-fret " : ""}${D}`, title: `${_}: ${T}`, children: [
          /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: z === null ? "·" : I.attempts < 3 ? "?" : Math.round(z * 100) }),
          /* @__PURE__ */ l.jsxs("span", { className: "sr-only", children: [
            _,
            ": ",
            T
          ] })
        ] }, E.fret);
      })
    ] }, v)) })
  ] }) });
}
const hm = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", va = (i) => i.mode === "scale" ? rt.scaleNotes(rt.SCALES[i.scale]) : Sr[i.mode === "caged" ? "maj" : i.chord].tones, Id = (i) => rt.fingeringBoxes(i.root, rt.SCALES[i.scale], "pentatonic", [i.box])[0].positions[0];
function Nr(i) {
  if (i.mode === "caged") {
    const a = Pd(i.root, i.shape).map((u) => u.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (i.mode === "scale" && i.box) {
    const a = Id(i);
    return { strings: i.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: i.strings, min: i.min, max: i.max, fixed: "" };
}
function mm(i) {
  const a = Nr(i);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function Ji(i) {
  const a = Nr(i), u = ii(a.strings, a.min, a.max);
  if (i.mode === "notes" || i.mode === "ear-note" || i.mode === "repeat")
    return u.filter((h) => i.accidentals || ![1, 3, 6, 8, 10].includes(He(h.midi)));
  if (i.mode === "caged") {
    const h = new Set(Pd(i.root, i.shape).map(nt));
    return u.filter((p) => h.has(nt(p)));
  }
  if (i.mode === "interval") return u;
  const c = u.filter((h) => va(i).some(([p]) => He(h.midi - i.root) === p));
  if (i.mode !== "scale" || !i.box) return c;
  const f = Id(i);
  return c.filter((h) => {
    const p = f.strings[h.string];
    return p.length > 0 && h.fret >= p[0] && h.fret <= p.at(-1);
  });
}
function Dd(i, a) {
  return (i.direction === "both" ? ["up", "down"] : [i.direction]).flatMap((c) => i.intervals.map((f) => ({
    iv: f,
    direction: c,
    pairs: a.flatMap((h) => a.filter((p) => p.midi === h.midi + (c === "down" ? -f : f)).map((p) => ({ reference: h, target: p })))
  }))).filter((c) => c.pairs.length);
}
function pm(i) {
  const a = va(i);
  return i.mode !== "chord" || i.chordTone === "random" ? [] : i.chordTone === "build" ? a : a.filter(([, u]) => u.endsWith(i.chordTone));
}
function oo(i) {
  const a = Ji(i), u = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return i.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${i.box ? "Valitse lisää kieliä tai toinen boksi." : u}` : i.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${u}` : i.mode !== "interval" && !i.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${u}`;
  const c = pm(i).filter(([f]) => !a.some((h) => He(h.midi - i.root) === f));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, f]) => f + ". aste").join(" ja ")}. ${u}` : i.mode === "interval" && !Dd(i, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : On(i) && new Set(a.map((f) => f.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${u}` : null;
}
function vm(i, a) {
  const u = [...new Map([...a].sort((c, f) => c.midi - f.midi || c.string - f.string).map((c) => [c.midi, c])).values()];
  return i.order === "down" ? u.reverse() : u;
}
function zd(i) {
  return On(i) ? new Set(Ji(i).map((a) => a.midi)).size : i.rounds;
}
function ym(i, a) {
  return i.hints === "always" ? 2 : i.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function Yr(i, a, u = Math.random) {
  if (!i.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((p, k) => p + k, 0), f = Math.min(0.999999999, Math.max(0, u()));
  if (!(c > 0)) return i[Math.floor(f * i.length)];
  let h = f * c;
  for (let p = 0; p < i.length; p++)
    if (h -= a[p], h < 0) return i[p];
  return i.at(-1);
}
const ld = (i, a) => i.mode === "caged" ? `caged:${i.root}:${i.shape}:${a}` : i.mode === "chord" ? `chord:${i.root}:${i.chord}:${a}:${i.activity}` : `scale:${i.root}:${i.scale}:${a}:${i.activity}`;
function jr(i, a) {
  const u = i.filter((c) => !a(c));
  return u.length ? u : i;
}
function km(i, a, u = {}, c, f = Math.random) {
  const h = oo(i);
  if (h) throw new Error(h);
  const p = $d(i), k = Er(i), j = p === "pitch", O = ($) => i.weak ? om(u[Ad({ input: k, check: p, hint: !1, item: $ })]) : 1, v = ($) => Yr($, $.map(() => 1), f), E = Ji(i), I = { check: p, sound: [], choices: "position" };
  if (i.mode === "notes") {
    const $ = jr(E, (q) => !!c && nt(q) === nt(c.position)), w = Yr($, $.map((q) => O(`notes:${nt(q)}`)), f), b = Oe(w.midi, i.flats, j);
    return {
      ...I,
      position: w,
      midi: w.midi,
      name: b,
      item: `notes:${nt(w)}`,
      prompt: `Etsi ${b} ${xo[w.string]}.`
    };
  }
  if (i.mode === "ear-note") {
    const $ = (Pe) => `ear-note:${He(Pe.midi)}${i.reference ? ":ref" : ""}`, w = jr(E, (Pe) => !!c && He(Pe.midi) === He(c.midi)), b = Yr(w, w.map((Pe) => O($(Pe))), f), q = i.reference ? 57 + 12 * Math.round((b.midi - 57) / 12) : void 0;
    return {
      ...I,
      position: b,
      midi: b.midi,
      name: Oe(b.midi, i.flats),
      item: $(b),
      choices: "note",
      reference: q,
      sound: q === void 0 ? [b.midi] : [q, b.midi],
      prompt: i.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (i.mode === "repeat") {
    const $ = jr(E, (b) => !!c && b.midi === c.midi), w = Yr($, $.map((b) => O(`repeat:${b.midi}`)), f);
    return {
      ...I,
      position: w,
      midi: w.midi,
      name: Oe(w.midi, i.flats, !0),
      item: `repeat:${w.midi}`,
      sound: [w.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (i.mode === "interval") {
    const $ = jr(Dd(i, E), (q) => c?.interval === q.iv && c?.direction === q.direction), w = Yr($, $.map((q) => O(`interval:${q.iv}:${q.direction}`)), f), b = v(jr(w.pairs, (q) => c?.reference === q.reference.midi));
    return {
      ...I,
      position: b.target,
      midi: b.target.midi,
      name: Oe(b.target.midi, i.flats, !0),
      item: `interval:${w.iv}:${w.direction}`,
      interval: w.iv,
      direction: w.direction,
      reference: b.reference.midi,
      sound: [b.reference.midi, b.target.midi],
      prompt: `Kuulet ${w.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Oe(b.reference.midi, i.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const z = va(i);
  let D, _ = 0;
  if (On(i)) {
    const $ = vm(i, E);
    _ = $.length, D = $[a % $.length];
  } else {
    const $ = z.filter(([q]) => E.some((Pe) => He(Pe.midi - i.root) === q)), w = i.mode === "chord" && i.chordTone !== "random" ? i.chordTone === "build" ? [z[a % z.length]] : z.filter(([, q]) => q.endsWith(i.chordTone)) : jr($, ([q]) => c?.interval === q), [b] = Yr(w, w.map(([q]) => O(ld(i, q))), f);
    D = v(jr(E.filter((q) => He(q.midi - i.root) === b), (q) => !!c && nt(q) === nt(c.position)));
  }
  const T = He(D.midi - i.root), F = z.find(([$]) => $ === T)[1], M = Ki(i.root, T, F), R = j ? M + tm(D.midi, M) : M, Q = i.mode === "scale" ? `${ar(i.root)}-${rt.SCALES[i.scale].name}${i.box ? `, boksi ${i.box}` : ""}` : i.mode === "caged" ? `${ar(i.root)}-duurisointu, ${i.shape}-muoto` : Md(i.root, i.chord), te = i.mode !== "caged" && i.activity === "degree", ee = te ? `${Q}: mikä aste on ${M}?` : _ ? `${Q} ${i.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % _ + 1}/${_}: ${F}. aste (${R}).` : `${Q}: etsi ${F}. aste${j ? ` (${R})` : ""}.`;
  return {
    ...I,
    position: D,
    midi: D.midi,
    name: R,
    item: ld(i, T),
    prompt: ee,
    degree: F,
    interval: T,
    choices: te ? "degree" : "position"
  };
}
function uo(i, a, u) {
  return Number.isInteger(a) && (u === "class" ? He(i) === He(a) : i === a);
}
function Vd(i, a, u) {
  return uo(a.midi, u.midi, a.check) ? i.mode === "notes" ? u.string === a.position.string : hm(i) ? Ji(i).some((c) => nt(c) === nt(u)) : !0 : !1;
}
function gm(i, a) {
  const u = Nr(i);
  return ii(u.strings, u.min, u.max).filter((c) => Vd(i, a, c));
}
const St = (i, a, u) => ({ ...i, label: a, kind: u }), xm = (i) => i.charAt(0).toUpperCase() + i.slice(1);
function jm(i, a, u) {
  if (u <= 0) return { marks: [], text: "" };
  const c = u >= 2, f = Nr(i), h = ii(f.strings, f.min, f.max), p = gm(i, a);
  if (i.mode === "notes") {
    if (c) return { marks: p.map((F) => St(F, a.name, "answer")), text: `${a.name} on ${Td[a.position.string]}: ${wr(a.position.fret)}.` };
    const _ = h.find((F) => F.string === a.position.string), T = Oe(_.midi, i.flats);
    return {
      marks: [St(_, T, "anchor")],
      text: `Apupiste: ${nm[_.string]} ${_.fret === 0 ? "vapaa sävel" : _.fret + ". nauhan sävel"} on ${T}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (i.mode === "ear-note")
    return c ? { marks: [St(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [St(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${mn[a.position.string]}-kieli, ${wr(a.position.fret)}.` };
  if (i.mode === "repeat")
    return c ? { marks: p.map((_) => St(_, Oe(_.midi, i.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${xo[a.position.string]}.` };
  if (i.mode === "interval") {
    const _ = Oe(a.reference, i.flats, !0), T = h.filter((F) => F.midi === a.reference).map((F) => St(F, _, "anchor"));
    return c ? {
      marks: [...T, ...p.map((F) => St(F, Oe(F.midi, i.flats, !0), "answer"))],
      text: `${xm(Gi[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${_} → ${a.name}.`
    } : { marks: T, text: `Alkusävel ${_} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const k = Ji(i), j = va(i), O = (_) => j.find(([T]) => T === He(_.midi - i.root))?.[1] ?? "", v = Ki(i.root, a.interval, a.degree), E = k.filter((_) => He(_.midi - i.root) === 0), I = (_) => p.some((T) => nt(T) === nt(_)), z = `${a.degree}. aste on ${v}.`;
  if (i.mode === "caged")
    return c ? { marks: k.map((_) => St(_, O(_), I(_) ? "answer" : "shape")), text: z } : { marks: k.map((_) => St(_, "", "shape")), text: `${i.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const D = i.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const _ = k.filter((T) => He(T.midi) === He(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : E).map((T) => St(T, "1", "anchor")), ..._.map((T) => St(T, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: _.map((T) => St(T, v, "shape")), text: `Katso ${D} nimeä: mikä on sen perussävel?` } : {
      marks: [...E.map((T) => St(T, "1", "anchor")), ..._.map((T) => St(T, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...E.filter((_) => !I(_)).map((_) => St(_, "1", "anchor")), ...p.map((_) => St(_, a.degree, "answer"))], text: z } : a.interval === 0 ? { marks: [], text: `1. aste on ${D} perussävel ${ar(i.root)}.` } : { marks: E.map((_) => St(_, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Sm {
  constructor(a, u, c, f = () => performance.now(), h = Math.random) {
    this.settings = a, this.stats = u, this.record = c, this.now = f, this.random = h, this.total = zd(a);
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
      this.question = km(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = ym(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    if (!(u === "degree" ? a === h.interval : u === "note" ? uo(h.midi, a, "class") : u === "board" ? !!c && Vd(this.settings, h, c) : uo(h.midi, a, h.check)))
      return u === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const k = u === "board" ? c : void 0, j = {
      id: `${this.id}:${this.index}`,
      item: k && this.settings.mode === "notes" ? `notes:${nt(k)}` : h.item,
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
    return k ? j.position = nt(k) : this.settings.mode === "notes" && (j.position = nt(h.position)), this.results.push(j), this.record(j), this.phase = "feedback", "correct";
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
], Zr = (i) => fo.find(([a]) => a === i)?.[1] ?? i;
function $t({ label: i, children: a }) {
  const u = H.useId();
  return /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ l.jsx("label", { htmlFor: u, children: i }),
    H.cloneElement(a, { id: u })
  ] });
}
function od({ legend: i, name: a, value: u, options: c, onChange: f, disabled: h }) {
  return /* @__PURE__ */ l.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ l.jsx("legend", { children: i }),
    /* @__PURE__ */ l.jsx("div", { className: "choice-row", children: c.map((p) => /* @__PURE__ */ l.jsxs("label", { className: p.value === u ? "selected" : "", children: [
      /* @__PURE__ */ l.jsx("input", { type: "radio", name: a, value: p.value, checked: p.value === u, onChange: () => f(p.value) }),
      /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("strong", { children: p.title }),
        /* @__PURE__ */ l.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function ud(i) {
  const a = Nr(i), u = zd(i), c = Er(i), f = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = a.fixed === "shape" ? `${i.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${i.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((k) => k + 1).join(", ")}`;
  return `${pa[i.hints].title} · ${f} · ${On(i) ? `yksi läpisoitto, ${u} säveltä` : u ? `${u} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function cd({ s: i, change: a, locked: u, problem: c }) {
  const f = H.useId(), h = (v, E) => a({ ...i, [v]: E }), p = Nr(i), k = Er(i) === "note" || Er(i) === "degree", j = ["scale", "chord", "caged"].includes(i.mode), O = ["notes", "ear-note", "repeat"].includes(i.mode);
  return /* @__PURE__ */ l.jsxs("fieldset", { className: "settings", disabled: u, children: [
    /* @__PURE__ */ l.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx($t, { label: "Harjoitus", children: /* @__PURE__ */ l.jsx("select", { value: i.mode, onChange: (v) => h("mode", v.target.value), children: fo.map(([v, E]) => /* @__PURE__ */ l.jsx("option", { value: v, children: E }, v)) }) }),
      /* @__PURE__ */ l.jsx("p", { className: "mode-note", children: fo.find(([v]) => v === i.mode)[2] })
    ] }),
    j && /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx($t, { label: i.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ l.jsx("select", { value: i.root, onChange: (v) => h("root", Number(v.target.value)), children: rt.CHROM.map((v, E) => /* @__PURE__ */ l.jsx("option", { value: E, children: v }, v)) }) }),
      i.mode === "scale" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx($t, { label: "Asteikko", children: /* @__PURE__ */ l.jsx("select", { value: i.scale, onChange: (v) => h("scale", v.target.value), children: Object.entries(rt.SCALES).map(([v, E]) => /* @__PURE__ */ l.jsx("option", { value: v, children: E.name }, v)) }) }),
        /* @__PURE__ */ l.jsx($t, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ l.jsxs("select", { value: i.box, onChange: (v) => h("box", Number(v.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ l.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ l.jsx($t, { label: "Sävelten järjestys", children: /* @__PURE__ */ l.jsxs("select", { value: i.order, onChange: (v) => h("order", v.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ l.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ l.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      i.mode === "chord" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx($t, { label: "Sointutyyppi", children: /* @__PURE__ */ l.jsx("select", { value: i.chord, onChange: (v) => h("chord", v.target.value), children: Object.entries(Sr).map(([v, E]) => /* @__PURE__ */ l.jsx("option", { value: v, children: E.name }, v)) }) }),
        /* @__PURE__ */ l.jsx($t, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ l.jsxs("select", { value: i.chordTone, onChange: (v) => h("chordTone", v.target.value), children: [
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
      i.mode === "caged" ? /* @__PURE__ */ l.jsx($t, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ l.jsx("select", { value: i.shape, onChange: (v) => h("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ l.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ l.jsx($t, { label: "Tehtävä", children: /* @__PURE__ */ l.jsxs("select", { value: i.activity, onChange: (v) => h("activity", v.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ l.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    i.mode === "interval" && /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ l.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ l.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ l.jsxs("label", { children: [
        /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.intervals.includes(v), onChange: (E) => h("intervals", E.target.checked ? [...i.intervals, v] : i.intervals.filter((I) => I !== v)) }),
        Gi[v]
      ] }, v)) }),
      /* @__PURE__ */ l.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ l.jsx($t, { label: "Intervallin suunta", children: /* @__PURE__ */ l.jsxs("select", { value: i.direction, onChange: (v) => h("direction", v.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ l.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ l.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ l.jsx(
      od,
      {
        legend: "Harjoittelutapa",
        name: `${f}-way`,
        value: i.hints,
        onChange: (v) => h("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...pa[v] }))
      }
    ),
    k ? /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ l.jsx(od, { legend: "Vastaustapa", name: `${f}-input`, value: i.input, onChange: (v) => h("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ l.jsx($t, { label: "Kierroksen pituus", children: /* @__PURE__ */ l.jsxs("select", { value: i.rounds, disabled: On(i), onChange: (v) => h("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !k && /* @__PURE__ */ l.jsx($t, { label: "Vastausten tarkistus", children: /* @__PURE__ */ l.jsxs("select", { value: On(i) ? "pitch" : i.check, disabled: On(i), onChange: (v) => h("check", v.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ l.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ l.jsx($t, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ l.jsxs("select", { value: String(i.flats), onChange: (v) => h("flats", v.target.value === "true"), children: [
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
        /* @__PURE__ */ l.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ l.jsxs("button", { type: "button", "aria-pressed": i.min === 0 && i.max === v, onClick: () => a({ ...i, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsx($t, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: "0", max: "24", value: i.min, onChange: (v) => h("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ l.jsx($t, { label: "Viimeinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: i.min, max: "24", value: i.max, onChange: (v) => h("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ l.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ l.jsx("div", { className: "check-row", children: mn.map((v, E) => /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.strings.includes(E), onChange: (I) => h("strings", I.target.checked ? [...i.strings, E] : i.strings.filter((z) => z !== E)) }),
          E + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "check-row", children: [
        O && /* @__PURE__ */ l.jsxs("label", { children: [
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
const wm = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Opi asteikko yksi positio kerrallaan ja käytä sitä sooloilussa.", example: "Aloita: A-mollipentatoninen, positio 1" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (akustinen / normaali)" }
];
function Em({ onSelect: i }) {
  return /* @__PURE__ */ l.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ l.jsx("div", { className: "learning-grid", children: wm.map((a) => /* @__PURE__ */ l.jsxs("button", { type: "button", className: "learning-card", onClick: () => i(a.id), children: [
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
const Nm = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Cm = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3", _m = 0.12;
function dd(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const a = Math.floor(i);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Tm() {
  const i = H.useRef(null), a = H.useRef(null), [u, c] = H.useState(!1), [f, h] = H.useState(!1), [p, k] = H.useState(!1), [j, O] = H.useState(0), [v, E] = H.useState(0), [I, z] = H.useState("");
  function D(R = !1) {
    const Q = i.current, te = a.current;
    if (!Q || !te || !Number.isFinite(Q.currentTime) || te.readyState < 1) return;
    const ee = Math.abs(te.currentTime - Q.currentTime), $ = Q.loop && Number.isFinite(Q.duration) && Math.abs(ee - Q.duration) < 0.3;
    if (R || !$ && ee > _m)
      try {
        te.currentTime = Q.currentTime;
      } catch {
      }
  }
  function _() {
    i.current?.pause(), a.current?.pause(), c(!1);
  }
  async function T() {
    const R = i.current, Q = a.current;
    if (!(!R || !Q)) {
      if (u) {
        _();
        return;
      }
      z(""), Q.muted = !f, Q.volume = 0.55, R.volume = 0.75, D(!0);
      try {
        await Promise.all([R.play(), Q.play()]), D(), c(!0);
      } catch {
        _(), z("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function F(R) {
    const Q = i.current, te = a.current;
    if (!(!Q || !te || !Number.isFinite(R))) {
      Q.currentTime = R;
      try {
        te.currentTime = R;
      } catch {
      }
      O(R);
    }
  }
  function M(R) {
    R && D(), a.current && (a.current.muted = !R), h(R);
  }
  return H.useEffect(() => {
    const R = () => {
      document.hidden && (i.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", R), () => {
      document.removeEventListener("visibilitychange", R), i.current?.pause(), a.current?.pause();
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
              onChange: (R) => M(R.target.checked)
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
              checked: p,
              onChange: (R) => k(R.target.checked)
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ l.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        T();
      }, children: u ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(j, v > 0 ? v : 1),
          disabled: !v,
          onChange: (R) => F(Number(R.target.value))
        }
      ),
      /* @__PURE__ */ l.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        dd(j),
        " / ",
        dd(v)
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: i,
        preload: "metadata",
        src: Nm,
        loop: p,
        onLoadedMetadata: (R) => E(R.currentTarget.duration),
        onTimeUpdate: (R) => {
          O(R.currentTarget.currentTime), R.currentTarget.paused || D();
        },
        onEnded: () => {
          i.current?.loop || (a.current?.pause(), c(!1), O(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => z("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: Cm,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const R = i.current, Q = a.current;
          R?.duration && Q?.duration && Math.abs(R.duration - Q.duration) > 0.15 && z("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => z("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    I && /* @__PURE__ */ l.jsx("p", { className: "backing-error", role: "alert", children: I }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Mm = 4e3;
class fd extends Error {
  name = "MicSetupError";
}
async function Pm(i, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new fd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
      let O;
      await Promise.race([
        f.resume(),
        new Promise((v, E) => {
          O = setTimeout(() => E(new fd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Mm);
        })
      ]).finally(() => clearTimeout(O));
    }
    const h = f.createMediaStreamSource(c), p = f, k = c.getAudioTracks?.()[0] ?? c.getTracks()[0], j = k?.getSettings?.() ?? {};
    return {
      context: f,
      source: h,
      stream: c,
      label: k?.label ?? "",
      deviceId: j.deviceId ?? "",
      channelCount: j.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((O) => O.stop()), h.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((p) => p.stop()), a || await f?.close().catch(() => {
    }), h;
  }
}
async function $m() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var ro, hd;
function Rm() {
  if (hd) return ro;
  hd = 1;
  function i(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var u = new Array(this.size * 2), c = 0; c < u.length; c += 2) {
      const O = Math.PI * c / this.size;
      u[c] = Math.cos(O), u[c + 1] = -Math.sin(O);
    }
    this.table = u;
    for (var f = 0, h = 1; this.size > h; h <<= 1)
      f++;
    this._width = f % 2 === 0 ? f - 1 : f, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var k = 0; k < this._width; k += 2) {
        var j = this._width - k - 2;
        this._bitrev[p] |= (p >>> k & 3) << j;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return ro = i, i.prototype.fromComplexArray = function(u, c) {
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
    var u = this._out, c = this._csize, f = this._width, h = 1 << f, p = c / h << 1, k, j, O = this._bitrev;
    if (p === 4)
      for (k = 0, j = 0; k < c; k += p, j++) {
        const T = O[j];
        this._singleTransform2(k, T, h);
      }
    else
      for (k = 0, j = 0; k < c; k += p, j++) {
        const T = O[j];
        this._singleTransform4(k, T, h);
      }
    var v = this._inv ? -1 : 1, E = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var I = p >>> 2;
      for (k = 0; k < c; k += p)
        for (var z = k + I, D = k, _ = 0; D < z; D += 2, _ += h) {
          const T = D, F = T + I, M = F + I, R = M + I, Q = u[T], te = u[T + 1], ee = u[F], $ = u[F + 1], w = u[M], b = u[M + 1], q = u[R], Pe = u[R + 1], Fe = Q, Ce = te, Te = E[_], ie = v * E[_ + 1], je = ee * Te - $ * ie, ye = ee * ie + $ * Te, C = E[2 * _], K = v * E[2 * _ + 1], U = w * C - b * K, g = w * K + b * C, L = E[3 * _], he = v * E[3 * _ + 1], Se = q * L - Pe * he, _e = q * he + Pe * L, Ee = Fe + U, Y = Ce + g, Z = Fe - U, G = Ce - g, le = je + Se, ge = ye + _e, ce = v * (je - Se), de = v * (ye - _e), fe = Ee + le, Ne = Y + ge, xe = Ee - le, Re = Y - ge, We = Z + de, Be = G - ce, Ge = Z - de, be = G + ce;
          u[T] = fe, u[T + 1] = Ne, u[F] = We, u[F + 1] = Be, u[M] = xe, u[M + 1] = Re, u[R] = Ge, u[R + 1] = be;
        }
    }
  }, i.prototype._singleTransform2 = function(u, c, f) {
    const h = this._out, p = this._data, k = p[c], j = p[c + 1], O = p[c + f], v = p[c + f + 1], E = k + O, I = j + v, z = k - O, D = j - v;
    h[u] = E, h[u + 1] = I, h[u + 2] = z, h[u + 3] = D;
  }, i.prototype._singleTransform4 = function(u, c, f) {
    const h = this._out, p = this._data, k = this._inv ? -1 : 1, j = f * 2, O = f * 3, v = p[c], E = p[c + 1], I = p[c + f], z = p[c + f + 1], D = p[c + j], _ = p[c + j + 1], T = p[c + O], F = p[c + O + 1], M = v + D, R = E + _, Q = v - D, te = E - _, ee = I + T, $ = z + F, w = k * (I - T), b = k * (z - F), q = M + ee, Pe = R + $, Fe = Q + b, Ce = te - w, Te = M - ee, ie = R - $, je = Q - b, ye = te + w;
    h[u] = q, h[u + 1] = Pe, h[u + 2] = Fe, h[u + 3] = Ce, h[u + 4] = Te, h[u + 5] = ie, h[u + 6] = je, h[u + 7] = ye;
  }, i.prototype._realTransform4 = function() {
    var u = this._out, c = this._csize, f = this._width, h = 1 << f, p = c / h << 1, k, j, O = this._bitrev;
    if (p === 4)
      for (k = 0, j = 0; k < c; k += p, j++) {
        const ke = O[j];
        this._singleRealTransform2(k, ke >>> 1, h >>> 1);
      }
    else
      for (k = 0, j = 0; k < c; k += p, j++) {
        const ke = O[j];
        this._singleRealTransform4(k, ke >>> 1, h >>> 1);
      }
    var v = this._inv ? -1 : 1, E = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var I = p >>> 1, z = I >>> 1, D = z >>> 1;
      for (k = 0; k < c; k += p)
        for (var _ = 0, T = 0; _ <= D; _ += 2, T += h) {
          var F = k + _, M = F + z, R = M + z, Q = R + z, te = u[F], ee = u[F + 1], $ = u[M], w = u[M + 1], b = u[R], q = u[R + 1], Pe = u[Q], Fe = u[Q + 1], Ce = te, Te = ee, ie = E[T], je = v * E[T + 1], ye = $ * ie - w * je, C = $ * je + w * ie, K = E[2 * T], U = v * E[2 * T + 1], g = b * K - q * U, L = b * U + q * K, he = E[3 * T], Se = v * E[3 * T + 1], _e = Pe * he - Fe * Se, Ee = Pe * Se + Fe * he, Y = Ce + g, Z = Te + L, G = Ce - g, le = Te - L, ge = ye + _e, ce = C + Ee, de = v * (ye - _e), fe = v * (C - Ee), Ne = Y + ge, xe = Z + ce, Re = G + fe, We = le - de;
          if (u[F] = Ne, u[F + 1] = xe, u[M] = Re, u[M + 1] = We, _ === 0) {
            var Be = Y - ge, Ge = Z - ce;
            u[R] = Be, u[R + 1] = Ge;
            continue;
          }
          if (_ !== D) {
            var be = G, kt = -le, Qe = Y, ze = -Z, et = -v * fe, _t = -v * de, Vt = -v * ce, Bt = -v * ge, sn = be + et, Qt = kt + _t, Yt = Qe + Bt, Tt = ze - Vt, me = k + z - _, bt = k + I - _;
            u[me] = sn, u[me + 1] = Qt, u[bt] = Yt, u[bt + 1] = Tt;
          }
        }
    }
  }, i.prototype._singleRealTransform2 = function(u, c, f) {
    const h = this._out, p = this._data, k = p[c], j = p[c + f], O = k + j, v = k - j;
    h[u] = O, h[u + 1] = 0, h[u + 2] = v, h[u + 3] = 0;
  }, i.prototype._singleRealTransform4 = function(u, c, f) {
    const h = this._out, p = this._data, k = this._inv ? -1 : 1, j = f * 2, O = f * 3, v = p[c], E = p[c + f], I = p[c + j], z = p[c + O], D = v + I, _ = v - I, T = E + z, F = k * (E - z), M = D + T, R = _, Q = -F, te = D - T, ee = _, $ = F;
    h[u] = M, h[u + 1] = 0, h[u + 2] = R, h[u + 3] = Q, h[u + 4] = te, h[u + 5] = 0, h[u + 6] = ee, h[u + 7] = $;
  }, ro;
}
var Am = Rm();
const Fm = /* @__PURE__ */ Vh(Am);
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
    this._inputLength = a, this._fft = new Fm(Im(2 * a)), this._bufferSupplier = u, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function Lm(i) {
  const a = [];
  let u = !1, c = -1 / 0, f = -1;
  for (let h = 1; h < i.length - 1; h++)
    i[h - 1] <= 0 && i[h] > 0 ? (u = !0, f = h, c = i[h]) : i[h - 1] > 0 && i[h] <= 0 ? (u = !1, f !== -1 && a.push(f)) : u && i[h] > c && (c = i[h], f = h);
  return a;
}
function Om(i, a) {
  const [u, c, f] = [i - 1, i, i + 1], [h, p, k] = [a[u], a[c], a[f]], j = h / 2 - p + k / 2, O = -(h / 2) * (c + f) + p * (u + f) - k / 2 * (u + c), v = h * c * f / 2 - p * u * f + k * u * c / 2, E = -O / (2 * j), I = j * E * E + O * E + v;
  return [E, I];
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
    const c = Lm(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const f = Math.max(...c.map((j) => this._nsdfBuffer[j])), h = c.find(
      (j) => this._nsdfBuffer[j] >= this._clarityThreshold * f
    ), [p, k] = Om(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [u / p, Math.min(k, 1)];
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
function Im(i) {
  return i--, i |= i >> 1, i |= i >> 2, i |= i >> 4, i |= i >> 8, i |= i >> 16, i++, i;
}
function Dm(i) {
  const a = i * 0.17;
  let u = 2048;
  for (; u < a && u < 32768; ) u *= 2;
  return u;
}
const zm = 0.05, Vm = 1.5;
class Bm {
  constructor(a, u = {}) {
    this.mic = a, this.opts = u;
    const c = a.context, f = Dm(c.sampleRate), h = Math.max(1, Math.min(2, a.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const k = c.createAnalyser();
      k.fftSize = f, k.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(k, p) : a.source.connect(k), this.analysers.push(k), this.buffers.push(new Float32Array(new ArrayBuffer(f * 4)));
    }
    this.shortLength = Math.min(f, Math.max(256, Math.round(c.sampleRate * zm))), this.detector = Hi.forFloat32Array(f), this.detector.minVolumeDecibels = -60;
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
  gate = new bm();
  onset = new Um();
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
      minFreq: p = 70,
      maxFreq: k = 1450,
      onFrame: j,
      onStableNote: O
    } = this.opts, v = this.analysers.map(($, w) => ($.getFloatTimeDomainData(this.buffers[w]), md(this.buffers[w], this.buffers[w].length - this.shortLength))), E = v.indexOf(Math.max(...v));
    E !== this.channel && v[E] > (v[this.channel] ?? 0) * Vm && (this.channel = E);
    const I = this.buffers[this.channel], z = v[this.channel], D = Hm(I, I.length - this.shortLength), _ = { rms: z, peak: D, channel: this.channel, levels: v }, T = z < c, F = this.onset.feed(z, a, c);
    if (T && md(I, 0) < c) {
      this.gate.feed(null, a, f, !0, !1), j?.({ ..._, status: "silent" });
      return;
    }
    const [M, R] = this.detector.findPitch(I, this.mic.context.sampleRate);
    if (!isFinite(M) || R < u) {
      this.gate.feed(null, a, f, T, F), j?.({ ..._, status: T ? "silent" : "unclear", clarity: isFinite(R) ? R : 0 });
      return;
    }
    if (M < p || M > k) {
      this.gate.feed(null, a, f, T, F), j?.({ ..._, status: "out-of-range", frequency: M, clarity: R });
      return;
    }
    const { midi: Q, cents: te } = Zh(M);
    if (Math.abs(te) > h) {
      this.gate.feed(null, a, f, T, F), j?.({ ..._, status: "off-pitch", frequency: M, clarity: R, midi: Q, cents: te });
      return;
    }
    j?.({ ..._, status: "pitch", frequency: M, clarity: R, midi: Q, cents: te });
    const ee = this.gate.feed(Q, a, f, T, F);
    ee !== null && O?.({ midi: Q, frequency: M, cents: te, clarity: R, timestamp: a, heldMs: ee.heldMs });
  }
}
class bm {
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
    const p = u - this.current.since;
    return p < c ? null : (this.armed = !1, this.current = null, { midi: a, heldMs: p });
  }
}
class Um {
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
function md(i, a = 0) {
  const u = Math.max(0, a);
  let c = 0;
  for (let f = u; f < i.length; f++) c += i[f] * i[f];
  return Math.sqrt(c / Math.max(1, i.length - u));
}
function Hm(i, a = 0) {
  let u = 0;
  for (let c = Math.max(0, a); c < i.length; c++) {
    const f = Math.abs(i[c]);
    f > u && (u = f);
  }
  return u;
}
const ri = (i) => i > 0 ? Math.max(-90, 20 * Math.log10(i)) : -90;
let Xr;
function Bd() {
  return (!Xr || Xr.state === "closed") && (Xr = new AudioContext()), Xr;
}
function Km() {
  const i = Xr;
  Xr = void 0, i?.close().catch(() => {
  });
}
const bd = (i) => i instanceof Error ? i.name : "";
function Gm(i) {
  const a = bd(i);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? i.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Wm {
  constructor(a = (u) => Pm(u, Bd)) {
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
    let h, p = !1;
    try {
      h = await this.opener(a || void 0);
    } catch (k) {
      if (!a || f !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(bd(k))) throw k;
      h = await this.opener(void 0), p = !0;
    }
    if (f !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new Bm(h, { ...u });
      const k = () => {
        this.mic === h && (this.stop(), c());
      }, j = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((O) => O.addEventListener("ended", k, { once: !0, signal: j.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && k();
      }, { signal: j.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: p };
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
function Ud(i, a) {
  return i !== "on" ? i : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const pd = (i) => Math.max(0, Math.min(1, (ri(i) + 60) / 60));
function Qm(i) {
  const a = [...i].sort((c, f) => c - f), u = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, u * 3)), noise: u, loud: u > 0.04 };
}
class Hd {
  constructor(a = Bd) {
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
    const h = Array.from({ length: 12 }, (j, O) => 1 / (O + 1) ** 1.3), p = c.createPeriodicWave?.(new Float32Array([0, ...h.map(() => 0)]), new Float32Array([0, ...h]));
    return a.forEach((j, O) => {
      const v = c.createOscillator(), E = c.createGain(), I = c.currentTime + 0.05 + O * 0.8;
      p ? v.setPeriodicWave(p) : v.type = "triangle", v.frequency.value = ed(j), E.gain.setValueAtTime(0, I), E.gain.linearRampToValueAtTime(0.22, I + 0.012), E.gain.exponentialRampToValueAtTime(1e-3, I + 0.7), v.connect(E), E.connect(f), v.start(I), v.stop(I + 0.72);
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
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const k = Array.from({ length: 12 }, (_, T) => 1 / (T + 1) ** 1.3), j = h.createPeriodicWave?.(new Float32Array([0, ...k.map(() => 0)]), new Float32Array([0, ...k]));
    let O = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (_) => {
      f === this.token && Number.isFinite(_) && (O = 60 / Math.max(40, Math.min(140, _)));
    };
    const v = 1.6;
    let E = h.currentTime + 0.05, I = 0;
    const z = [], D = () => {
      if (f === this.token) {
        if (E < h.currentTime - 0.02) {
          const _ = Math.ceil((h.currentTime - E) / O);
          E += _ * O, I = (I + _) % a.length, z.length = 0;
        }
        for (; E < h.currentTime + v; ) {
          const _ = a[I], T = I, F = E, M = h.createOscillator(), R = h.createGain();
          j ? M.setPeriodicWave(j) : M.type = "triangle", M.frequency.value = ed(_), R.gain.setValueAtTime(0, F), R.gain.linearRampToValueAtTime(0.22, F + 0.012), R.gain.exponentialRampToValueAtTime(1e-3, F + O * 0.975), M.connect(R), R.connect(p), M.start(F), M.stop(F + O * 0.985), z.push({ at: F, index: T }), E += O, I = (I + 1) % a.length;
        }
        for (; z.length && z[0].at <= h.currentTime + 0.01; ) {
          const _ = z.shift();
          u?.(_.index);
        }
      }
    };
    return D(), this.loopTick = setInterval(D, 25), new Promise((_) => {
      this.settle = _;
    });
  }
}
const Kd = "musiikin-kartta:skaalapolku:v1", Gd = "musiikin-kartta:skaalapolku:tempo:v1", qr = 75, ho = 40, mo = 140;
function Ym() {
  try {
    const i = localStorage.getItem(Gd);
    if (i === null) return qr;
    const a = Number(i);
    return Number.isInteger(a) && a >= ho && a <= mo && a % 5 === 0 ? a : qr;
  } catch {
    return qr;
  }
}
const io = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele 1. position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio 1 harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
];
function vd() {
  try {
    const i = Number(localStorage.getItem(Kd));
    return Number.isInteger(i) ? Math.max(0, Math.min(4, i)) : 0;
  } catch {
    return 0;
  }
}
function Jm({ onBack: i, onOpenOldExercise: a }) {
  const [u, c] = H.useState(vd), [f, h] = H.useState(vd), [p, k] = H.useState(!1), [j, O] = H.useState(Ym), [v, E] = H.useState(null), [I, z] = H.useState(null), [D, _] = H.useState(""), T = H.useRef(new Hd()), F = H.useRef(0);
  function M(ie) {
    const je = Math.max(ho, Math.min(mo, ie));
    O(je), T.current.setLoopTempo(je);
    try {
      localStorage.setItem(Gd, String(je));
    } catch {
    }
  }
  function R() {
    F.current++, T.current.stop(), E(null), z(null);
  }
  H.useEffect(() => {
    const ie = () => {
      document.hidden && (F.current++, T.current.stop(), E(null), z(null));
    };
    return document.addEventListener("visibilitychange", ie), () => {
      document.removeEventListener("visibilitychange", ie), F.current++, T.current.stop();
    };
  }, []);
  const Q = rt.fingeringBoxes(9, rt.SCALES.mp, "pentatonic", [1])[0].positions[0], te = Q.strings.flatMap((ie, je) => ie.map((ye) => ma(je, ye))).sort((ie, je) => ie.midi - je.midi || je.string - ie.string), ee = [...te, ...te.slice(1, -1).reverse()], $ = I === null ? null : ee[I], w = [69, 72, 69, 67, 64, 67, 69], b = Q.start, q = Q.end, Pe = te.filter((ie) => f < 2 || p && He(ie.midi) === 9).map((ie) => ({
    ...ie,
    label: f >= 2 ? "A" : Oe(ie.midi),
    kind: f < 2 && $?.string === ie.string && $.fret === ie.fret ? "playing" : He(ie.midi) === 9 ? "answer" : "shape"
  }));
  async function Fe(ie) {
    const je = ++F.current;
    T.current.stop(), z(null), _(""), E(ie);
    try {
      ie === "phrase" ? await T.current.play(w) : await T.current.loop(ee.map((ye) => ye.midi), (ye) => {
        je === F.current && z(ye);
      }, f === 2 ? j : qr);
    } catch {
      je === F.current && _("Mallisoitto ei käynnistynyt. Tarkista selaimen ääniasetukset ja yritä uudelleen.");
    } finally {
      je === F.current && (E(null), z(null));
    }
  }
  function Ce() {
    R();
    const ie = Math.min(4, f + 1);
    if (h(ie), k(!1), ie > u) {
      c(ie);
      try {
        localStorage.setItem(Kd, String(ie));
      } catch {
      }
    }
  }
  function Te(ie) {
    ie > u || (R(), h(ie), k(!1));
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: () => {
      R(), i();
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
    /* @__PURE__ */ l.jsx("nav", { className: "journey-steps", "aria-label": "Position 1 harjoitukset", children: io.map((ie, je) => /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: je === f ? "journey-step current" : "journey-step",
        "aria-current": je === f ? "step" : void 0,
        disabled: je > u,
        onClick: () => Te(je),
        children: [
          /* @__PURE__ */ l.jsx("span", { className: "journey-index", children: je > u ? "🔒" : je < u ? "✓" : je + 1 }),
          /* @__PURE__ */ l.jsx("span", { children: ie.title })
        ]
      },
      ie.title
    )) }),
    /* @__PURE__ */ l.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h3", { id: "lesson-title", children: io[f].title }),
        /* @__PURE__ */ l.jsx("span", { children: f === 4 ? "Valmis" : `Harjoitus ${f + 1} / 4` })
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: io[f].detail }),
      f < 4 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        f === 0 && /* @__PURE__ */ l.jsx("p", { children: "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. Kuuntele myös lyhyt mallifraasi. Ääni on syntetisoitu." }),
        f === 1 && /* @__PURE__ */ l.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        f === 2 && /* @__PURE__ */ l.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        f === 3 && /* @__PURE__ */ l.jsx("p", { children: "Kuuntele mallifraasi. Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A." }),
        f === 2 && /* @__PURE__ */ l.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: j <= ho,
              onClick: () => M(j - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ l.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            j,
            " BPM"
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: j >= mo,
              onClick: () => M(j + 5),
              children: "+ 5"
            }
          ),
          j !== qr && /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => M(qr),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ l.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        f !== 3 && /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": v === "loop",
              onClick: () => v === "loop" ? R() : void Fe("loop"),
              children: v === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => v === "phrase" ? R() : void Fe("phrase"), children: v === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        f !== 3 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: v === "loop" ? $ && f < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Oe($.midi, !1, !0)} · ${mn[$.string]}-kieli, nauha ${$.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        D && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: D }),
        f >= 1 && f <= 3 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          f >= 2 && /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ l.jsx("button", { type: "button", "aria-pressed": p, onClick: () => k((ie) => !ie), children: p ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            f === 2 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => Te(1), children: "← Palaa edelliseen opetukseen" }),
            f === 3 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
              Fe("phrase");
            }, children: "▶ Mallifraasi" })
          ] }),
          /* @__PURE__ */ l.jsx(Yi, { area: { strings: [0, 1, 2, 3, 4, 5], min: b, max: q, fixed: "box" }, marks: Pe, disabled: !0, caption: "A-mollipentatoninen, positio 1" }),
          /* @__PURE__ */ l.jsxs("p", { className: "tools-note", children: [
            f < 2 ? "Vihreällä merkitty A on pohjasävel." : p ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        f === 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Yi, { area: { strings: [0, 1, 2, 3, 4, 5], min: b, max: q, fixed: "box" }, marks: Pe, disabled: !0, caption: "Ensimmäisen position sävelet" }),
          /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        f === 3 && /* @__PURE__ */ l.jsx(Tm, {}),
        /* @__PURE__ */ l.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ l.jsx("p", { children: f === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : f === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : f === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: Ce, children: f === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ l.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ l.jsx("h3", { children: "Ensimmäinen positio harjoiteltu" }),
        /* @__PURE__ */ l.jsx("p", { children: "Kertaa asteikko muistista myös myöhemmin. Seuraavat positiot ja niiden yhdistäminen rakennetaan tämän mallin pohjalta." }),
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => Te(2), children: "Kertaa muistiharjoitus" })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ l.jsx("p", { children: "🔒 Positio 2 · 🔒 Positioiden 1 ja 2 yhdistäminen · 🔒 Positio 3" }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Nämä harjoitukset ovat vielä toteuttamatta. Ensimmäinen positio toimii uuden rakenteen testiversiona." }),
      /* @__PURE__ */ l.jsxs("details", { children: [
        /* @__PURE__ */ l.jsx("summary", { children: "Vanha asteikon sävelharjoitus" }),
        /* @__PURE__ */ l.jsx("p", { children: "Halutessasi voit käyttää myös aiempaa otelaudalta vastaamisen harjoitusta. Se avautuu omine asetuksineen." }),
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
          R(), a();
        }, children: "Avaa vanha asteikkoharjoitus" })
      ] })
    ] })
  ] });
}
const Jr = [0, 2, 4, 5, 7, 9, 11], Xm = 1200, oa = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function Zm({ onBack: i }) {
  const [a, u] = H.useState(0), [c, f] = H.useState([]), [h, p] = H.useState(!1), [k, j] = H.useState(""), [O, v] = H.useState(0), [E, I] = H.useState(!1), z = a >= Jr.length, D = Jr[Math.min(a, Jr.length - 1)], _ = ii(oa.strings, oa.min, oa.max).filter(($) => He($.midi) === D), T = _.filter(($) => !c.includes(nt($))), F = T.length === 0 && !z, M = !F && h ? T[0] : void 0;
  H.useEffect(() => {
    if (!E || !F) return;
    const $ = window.setTimeout(() => {
      u((w) => w + 1), f([]), p(!1), j("");
    }, Xm);
    return () => window.clearTimeout($);
  }, [E, F]);
  const R = [
    ..._.filter(($) => c.includes(nt($))).map(($) => ({ ...$, kind: "answer", label: Oe($.midi) })),
    ...M ? [{ ...M, kind: "anchor", label: "?" }] : []
  ];
  function Q($) {
    if (z || F) return;
    const w = nt($);
    if (He($.midi) !== D) {
      v((Pe) => Pe + 1), j(`Valitsit sävelen ${Oe($.midi)}. Etsi ${Oe(D)}.`);
      return;
    }
    if (c.includes(w)) {
      j("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const b = [...c, w];
    f(b), p(!1);
    const q = _.length - b.length;
    j(q ? `Oikein! ${Oe(D)} löytyi ${mn[$.string]}-kieleltä (${wr($.fret)}). Vielä ${q}.` : `Löysit kaikki ${_.length} ${Oe(D)}-säveltä tällä alueella.`);
  }
  function te() {
    F && (u(($) => $ + 1), f([]), p(!1), j(""));
  }
  function ee() {
    u(0), f([]), p(!1), j(""), v(0);
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ l.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !z && /* @__PURE__ */ l.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          checked: E,
          onChange: ($) => I($.target.checked)
        }
      ),
      /* @__PURE__ */ l.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "journey-lesson", children: z ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        O ? `Vääriä valintoja yhteensä ${O}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: ee, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsxs("h3", { children: [
          "Etsi kaikki ",
          Oe(D),
          "-sävelet"
        ] }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          Jr.length
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Oe(D),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ l.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        _.length
      ] }),
      /* @__PURE__ */ l.jsx(
        Yi,
        {
          area: oa,
          marks: R,
          onAnswer: Q,
          disabled: F,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "p",
        {
          className: F ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: k
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        !F && /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => p(($) => !$),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        F && (E ? /* @__PURE__ */ l.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === Jr.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: te, children: a === Jr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const qm = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, so = ["C", "G", "D", "Em"], yd = ["C", "G", "D", "Em", "Am", "E", "A"], ep = { min: 0, max: 3, fixed: "" };
function kd(i) {
  const a = [...i];
  for (let u = a.length - 1; u > 0; u--) {
    const c = Math.floor(Math.random() * (u + 1));
    [a[u], a[c]] = [a[c], a[u]];
  }
  return a;
}
function tp({ onBack: i }) {
  const [a, u] = H.useState(4), [c, f] = H.useState(() => kd(so)), [h, p] = H.useState(0), [k, j] = H.useState(null), [O, v] = H.useState([]), [E, I] = H.useState(0), z = h >= c.length, D = qm[c[Math.min(h, c.length - 1)]], _ = a === 4 ? so : yd, T = D.frets.flatMap(($, w) => $ === null ? [] : [w]), F = D.frets.flatMap(($, w) => $ === null ? [w] : []), M = { ...ep, strings: T }, R = D.frets.flatMap(($, w) => $ === null ? [] : [{
    ...ma(w, $),
    kind: $ === 0 ? "anchor" : "shape",
    label: $ === 0 ? "○" : "●"
  }]);
  function Q($ = a) {
    u($), f(kd($ === 4 ? so : yd)), p(0), j(null), v([]), I(0);
  }
  function te($) {
    k || z || O.includes($) || ($ === D.name ? j($) : (v((w) => [...w, $]), I((w) => w + 1)));
  }
  function ee() {
    k && (p(($) => $ + 1), j(null), v([]));
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
            onChange: () => Q(4)
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
            onChange: () => Q(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "journey-lesson", children: z ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        E ? `Vääriä valintoja yhteensä ${E}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: () => Q(), children: "Harjoittele uudelleen" }) })
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
          area: M,
          marks: R,
          mutedStrings: F,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ l.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: _.map(($) => /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: k === $ ? "right" : O.includes($) ? "wrong" : "",
          disabled: !!k || O.includes($),
          "aria-pressed": k === $,
          onClick: () => te($),
          children: $
        },
        $
      )) }),
      /* @__PURE__ */ l.jsx(
        "p",
        {
          className: k ? "feedback good" : O.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: k ? `Oikein! Tämä on ${D.name}-sointu.` : O.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      k && /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: ee, children: h === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ae = (i, a) => ({ first: i, ...a ? { second: a } : {} }), ei = () => [
  ae("Gm", "F"),
  ae("Gm"),
  ae("B♭", "F"),
  ae("Gm"),
  ae("Gm", "F"),
  ae("Gm"),
  ae("E♭", "F"),
  ae("Gm")
], ti = () => [
  ae("B♭", "F"),
  ae("Gm", "Dm"),
  ae("E♭", "F"),
  ae("Gm", "Dm")
], ni = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], Wd = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], np = [
  { id: "intro", title: "Intro", start: 0, bars: [ae("Gm", "F"), ae("Gm"), ae("B♭", "F"), ae("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ei(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...ti(), ae("E♭"), { ...ae("E♭"), passingBass: "F" }],
    lyrics: ni,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ae("Gm", "F"), ae("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: ei(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...ti(), ae("E♭"), ae("F")],
    lyrics: ni
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [ae("Gm"), ae("Dm"), ae("F"), ae("C"), ae("Gm"), ae("Dm"), ae("E♭"), ae("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: ei(),
    lyrics: Wd
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ti(), ae("E♭", "F"), ae("Gm")],
    lyrics: ni
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      ae("E♭", "F"),
      { ...ae("Gm"), possibleChord: "Dm" },
      ae("E♭", "F"),
      ae("Gm", "F"),
      { ...ae("Gm"), possibleChord: "Dm" },
      ae("Gm", "F"),
      ae("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], rp = [
  { id: "intro", title: "Intro", start: 0, bars: [ae("Gm", "F"), ae("Gm"), ae("B♭", "F"), ae("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ei(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...ti(), ae("E♭"), ae("E♭")],
    lyrics: ni
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: ei(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...ti(), ae("E♭"), ae("F")],
    lyrics: ni
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [ae("Gm"), ae("Dm"), ae("F"), ae("C"), ae("Gm"), ae("Dm"), ae("E♭"), ae("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: ei(),
    lyrics: Wd,
    note: "Basso on tauolla noin 2:23–2:44. Laulu sijoittuu tämän kitaravetoisen jakson päälle."
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ti(), ae("B♭", "F"), ae("Gm"), ae("E♭", "F"), ae("Gm")],
    lyrics: ni
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ae("E♭", "F"), ae("Gm", "F"), ae("E♭", "F"), ae("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ya = {
  acoustic: np,
  normal: rp
}, gd = (i) => {
  const a = Math.max(0, Math.floor(Number.isFinite(i) ? i : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Qd(i, a = "acoustic") {
  const u = ya[a], c = u[i], f = u[i + 1];
  return f ? (f.start - c.start) / c.bars.length : 240 / 69;
}
function ip(i, a = "acoustic") {
  const u = ya[a], c = Math.max(0, Number.isFinite(i) ? i : 0);
  let f = 0;
  for (let E = 1; E < u.length && !(c < u[E].start); E++)
    f = E;
  const h = u[f];
  let p = 0;
  for (; p + 1 < h.bars.length && c >= ha(f, p + 1, a); )
    p++;
  const k = ha(f, p, a), j = Qd(f, a) / 4;
  let O = 1;
  for (; O < 4 && c >= k + O * j; ) O++;
  const v = h.bars[p];
  return {
    section: h,
    sectionIndex: f,
    barIndex: p,
    beat: O,
    chord: v.second && O >= 3 ? v.second : v.first
  };
}
function ha(i, a, u = "acoustic") {
  return ya[u][i].start + Qd(i, u) * a;
}
const po = ["Gm", "F", "B♭", "E♭", "Dm", "C"], Yd = "musiikin-kartta:kappale-sointuvihjeet:v1", ca = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, xd = {
  showChords: !0,
  level: 0,
  fadeOrder: ca
};
function ao(i, a) {
  return !a.showChords || a.level >= a.fadeOrder[i];
}
function jd(i) {
  if (!i) return { ...xd, fadeOrder: { ...ca } };
  try {
    const a = JSON.parse(i);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const u = a, c = u.level, f = { ...ca }, h = u.fadeOrder;
    if (h && typeof h == "object") {
      const p = h;
      for (const k of po)
        [1, 2, 3, 4].includes(p[k]) && (f[k] = p[k]);
    }
    return {
      showChords: typeof u.showChords == "boolean" ? u.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: f
    };
  } catch {
    return { ...xd, fadeOrder: { ...ca } };
  }
}
function sp() {
  try {
    return jd(localStorage.getItem(Yd));
  } catch {
    return jd(null);
  }
}
const ap = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], lp = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function op({ version: i, position: a, onSeek: u }) {
  const [c, f] = H.useState(sp), [h, p] = H.useState(null), [k, j] = H.useState(!1), O = ya[i], v = ip(a, i), { section: E, sectionIndex: I, barIndex: z, beat: D, chord: _ } = v, T = D >= 3 && E.bars[z].second ? "second" : "first", F = (w, b) => `${i}:${E.id}:${w}:${b}`, M = F(z, T), R = ao(_, c), Q = R && h === M, te = (w, b, q) => !ao(w, c) || h === F(b, q), ee = c.showChords && c.level === 0, $ = po.filter((w) => ao(w, c)).length;
  return H.useEffect(() => {
    p(null);
  }, [M]), H.useEffect(() => {
    try {
      localStorage.setItem(Yd, JSON.stringify(c));
    } catch {
    }
  }, [c]), /* @__PURE__ */ l.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ l.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ l.jsxs("span", { children: [
        c.showChords && c.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            checked: c.showChords,
            onChange: (w) => {
              f((b) => ({ ...b, showChords: w.target.checked })), p(null);
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
            checked: k,
            onChange: (w) => j(w.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-hint-level",
            value: c.level,
            disabled: !c.showChords,
            onChange: (w) => {
              const b = Number(w.target.value);
              f((q) => ({ ...q, level: b })), p(null);
            },
            children: ap.map((w) => /* @__PURE__ */ l.jsx("option", { value: w.value, children: w.label }, w.value))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: $ === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${$}/6 sointua` })
    ] }),
    c.showChords && c.level < 4 && /* @__PURE__ */ l.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ l.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ l.jsx("div", { className: "song-fade-order", children: po.map((w) => /* @__PURE__ */ l.jsxs("label", { children: [
        w,
        /* @__PURE__ */ l.jsx(
          "select",
          {
            "aria-label": w + ": piilotusvaihe",
            value: c.fadeOrder[w],
            onChange: (b) => {
              const q = Number(b.target.value);
              f((Pe) => ({ ...Pe, fadeOrder: { ...Pe.fadeOrder, [w]: q } })), p(null);
            },
            children: lp.map((b) => /* @__PURE__ */ l.jsx("option", { value: b.value, children: b.label }, b.value))
          }
        )
      ] }, w)) })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ l.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-section-jump",
            value: E.id,
            onChange: (w) => {
              const b = O.find((q) => q.id === w.target.value);
              b && u(b.start);
            },
            children: O.map((w) => /* @__PURE__ */ l.jsxs("option", { value: w.id, children: [
              gd(w.start),
              " · ",
              w.title
            ] }, w.id))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("p", { className: "song-current-chord", children: [
        R && !Q ? "Piilotettu sointu" : "Soiva sointu",
        /* @__PURE__ */ l.jsx("strong", { children: R && !Q ? "?" : _ }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          E.title,
          ", tahti ",
          z + 1,
          ", isku ",
          D,
          "/4"
        ] }),
        R && /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "song-reveal-chord",
            onClick: () => p(Q ? null : M),
            children: Q ? "Piilota vihje" : "Paljasta sointu"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": E.title + ": tahdit", children: E.bars.map((w, b) => {
      const q = b === z, Pe = q && (D < 3 || !w.second), Fe = q && D >= 3 && !!w.second, Ce = te(w.first, b, "first"), Te = w.second ? te(w.second, b, "second") : !1, ie = (Ce ? w.first : "sointu piilossa") + (w.second ? " " + (Te ? w.second : "sointu piilossa") : "") + (ee && w.passingBass ? " (basson kulku " + w.passingBass + ")" : "") + (ee && w.possibleChord ? " (" + w.possibleChord + "?)" : "");
      return /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (q ? " active" : ""),
          "aria-pressed": q,
          "aria-label": "Tahti " + (b + 1) + ": " + ie + ". Siirry kohtaan " + gd(ha(I, b, i)),
          onClick: () => u(ha(I, b, i)),
          children: [
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              b + 1
            ] }),
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ l.jsx("strong", { className: Pe && Ce ? "now" : "", children: Ce ? w.first : "?" }),
              w.second && /* @__PURE__ */ l.jsx("strong", { className: Fe && Te ? "now" : "", children: Te ? w.second : "?" })
            ] }),
            ee && w.passingBass && /* @__PURE__ */ l.jsxs("small", { children: [
              "Basso: (",
              w.passingBass,
              "), isku 4"
            ] }),
            ee && w.possibleChord && /* @__PURE__ */ l.jsxs("small", { children: [
              "Mahdollinen (",
              w.possibleChord,
              "?)"
            ] })
          ]
        },
        b
      );
    }) }),
    k ? /* @__PURE__ */ l.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ l.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ l.jsx("div", { className: "song-all-lyrics-grid", children: O.filter((w) => w.lyrics?.length).map((w) => /* @__PURE__ */ l.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ l.jsx("h5", { children: w.title }),
        w.lyrics?.map((b, q) => /* @__PURE__ */ l.jsx("p", { children: b }, q))
      ] }, w.id)) }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : E.lyrics && /* @__PURE__ */ l.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ l.jsxs("h4", { children: [
        E.title,
        ": sanat"
      ] }),
      E.lyrics.map((w, b) => /* @__PURE__ */ l.jsx("p", { children: w }, b))
    ] }),
    ee && E.note && /* @__PURE__ */ l.jsx("p", { className: "song-chord-note", children: E.note })
  ] });
}
const up = {
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
}, cp = 0.12, Sd = 1e-3;
function wd(i, a) {
  try {
    i.currentTime = a;
  } catch {
  }
}
function Ed(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const a = Math.floor(i);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function dp({ onBack: i }) {
  const a = H.useRef(null), u = H.useRef(null), c = H.useRef(null), f = H.useRef(0), h = H.useRef(null), [p, k] = H.useState("acoustic"), j = up[p], [O, v] = H.useState(!1), [E, I] = H.useState(!0), [z, D] = H.useState(!0), [_, T] = H.useState(!1), [F, M] = H.useState(!0), [R, Q] = H.useState(0), [te, ee] = H.useState(0), [$, w] = H.useState("");
  function b(C = !1) {
    const K = a.current;
    if (!(!K || K.readyState < 1))
      for (const U of [u.current, c.current]) {
        if (!U || U.readyState < 1) continue;
        const g = Math.abs(U.currentTime - K.currentTime), L = K.loop && Number.isFinite(K.duration) && Math.abs(g - K.duration) < 0.35;
        if (C || !L && g > cp)
          try {
            U.currentTime = K.currentTime;
          } catch {
          }
      }
  }
  function q() {
    f.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), v(!1);
  }
  function Pe(C) {
    if (C !== p) {
      h.current = null, q();
      for (const K of [a.current, u.current, c.current])
        if (K)
          try {
            K.currentTime = 0;
          } catch {
          }
      Q(0), ee(0), w(""), k(C);
    }
  }
  function Fe(C) {
    const K = a.current;
    if (!K || !Number.isFinite(C)) return;
    const U = Math.max(0, Math.min(C, Number.isFinite(K.duration) ? K.duration : C));
    h.current = U, Q(U), wd(K, U);
  }
  function Ce(C) {
    const K = h.current;
    if (K === null || C !== a.current || C.seeking) return;
    const U = Number.isFinite(C.duration) ? Math.min(K, C.duration) : K;
    if (U !== K && (h.current = U, Q(U)), Math.abs(C.currentTime - U) < Sd) return;
    const g = C.seekable;
    for (let L = 0; L < g.length; L++)
      if (g.start(L) <= U && U <= g.end(L)) {
        wd(C, U);
        return;
      }
  }
  function Te(C) {
    if (C !== a.current) return;
    const K = h.current;
    if (K === null)
      Q(C.currentTime);
    else if (C.readyState >= 1 && !C.seeking && Math.abs(C.currentTime - K) < Sd) {
      h.current = null, b(!0);
      return;
    }
    C.paused || b();
  }
  async function ie() {
    const C = a.current, K = u.current, U = c.current;
    if (!C || !K || !U) return;
    if (O) {
      q();
      return;
    }
    w("");
    const g = h.current ?? C.currentTime;
    Number.isFinite(C.duration) && g >= C.duration - 0.05 && Fe(0), Ce(C), C.volume = 0.85, K.volume = 0.78, U.volume = 0.78, K.muted = !E, U.muted = !z, b(!0);
    const L = ++f.current;
    try {
      const he = [C.play(), K.play(), U.play()];
      if (await Promise.all(he), L !== f.current) return;
      b(), v(!0);
    } catch {
      if (L !== f.current) return;
      q(), w("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function je(C) {
    C && b(), u.current && (u.current.muted = !C), I(C);
  }
  function ye(C) {
    C && b(), c.current && (c.current.muted = !C), D(C);
  }
  return H.useEffect(() => {
    const C = () => {
      document.hidden && q();
    };
    return document.addEventListener("visibilitychange", C), () => {
      document.removeEventListener("visibilitychange", C), f.current++, a.current?.pause(), u.current?.pause(), c.current?.pause();
    };
  }, []), /* @__PURE__ */ l.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ l.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ l.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ l.jsxs(
        "select",
        {
          id: "song-version-select",
          value: p,
          onChange: (C) => Pe(C.target.value),
          children: [
            /* @__PURE__ */ l.jsx("option", { value: "acoustic", children: "Akustinen versio" }),
            /* @__PURE__ */ l.jsx("option", { value: "normal", children: "Normaali versio" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Soita itsenäisesti kappaleen mukana. Voit poistaa mallikitaran tai laulun kesken toiston ja kuulla oman soiton paremmin." }),
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
          ie();
        }, children: O ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: te > 0 ? te : 1,
            step: 0.1,
            value: Math.min(R, te > 0 ? te : 1),
            disabled: te <= 0,
            onChange: (C) => Fe(Number(C.target.value))
          }
        ),
        /* @__PURE__ */ l.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Ed(R),
          " / ",
          Ed(te)
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: E,
              onChange: (C) => je(C.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: z,
              onChange: (C) => ye(C.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: _,
              onChange: (C) => T(C.target.checked)
            }
          ),
          " Soita looppina"
        ] })
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Kitara ja laulu ovat aluksi päällä. Versiota vaihtaessa toisto pysähtyy ja palautuu alkuun. Käynnistä valitsemasi versio Soita-painikkeesta." }),
      $ && /* @__PURE__ */ l.jsx("p", { className: "backing-error", role: "alert", children: $ }),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: a,
          src: j.backing,
          preload: "metadata",
          loop: _,
          onLoadedMetadata: (C) => {
            C.currentTarget === a.current && (ee(C.currentTarget.duration), Ce(C.currentTarget));
          },
          onProgress: (C) => Ce(C.currentTarget),
          onCanPlay: (C) => Ce(C.currentTarget),
          onTimeUpdate: (C) => Te(C.currentTarget),
          onEnded: (C) => {
            C.currentTarget !== a.current || C.currentTarget.loop || (h.current = null, u.current?.pause(), c.current?.pause(), v(!1), Q(C.currentTarget.duration));
          },
          onPause: (C) => {
            C.currentTarget === a.current && v(!1);
          },
          onError: () => w(j.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        p + "-backing"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: u,
          src: j.guitar,
          preload: "metadata",
          muted: !E,
          loop: _,
          onLoadedMetadata: () => b(!0),
          onError: () => w(j.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        p + "-guitar"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: c,
          src: j.vocals,
          preload: "metadata",
          muted: !z,
          loop: _,
          onLoadedMetadata: () => b(!0),
          onError: () => w(j.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        p + "-vocals"
      )
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-chart-collapse", open: F, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (C) => {
        C.preventDefault(), M((K) => !K);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ l.jsx(op, { version: p, position: R, onSeek: Fe })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-instructions", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Miten harjoittelen tämän kappaleen kanssa?" }),
      /* @__PURE__ */ l.jsx("p", { children: "Kuuntele ensin kappale kitara ja laulu päällä. Kytke sitten kitara pois ja soita itse sen osuutta laulun ja bändin mukana. Kun haluat harjoitella ilman laulua, poista myös laulu: jäljelle jää säestys." })
    ] })
  ] });
}
const vo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, da = (i, a = 1) => i.toFixed(a).replace(".", ",").replace("-", "−"), Jd = (i) => {
  const a = Math.round(i);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, yo = (i) => i ? i.label || "Järjestelmän oletustulo" : "";
function fp(i, a, u, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (i) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${yo(u)}. Vaihda laite Mikrofonin asetuksista.`,
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
function Xd({ frame: i, threshold: a }) {
  const u = i?.rms ?? 0, c = ri(u), f = (i?.peak ?? 0) >= 0.98 ? "clip" : u >= a ? "over" : "under";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meter ${f}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${da(Math.max(-60, c), 0)} desibeliä${u >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meter-fill", style: { width: `${pd(u) * 100}%` } }),
        /* @__PURE__ */ l.jsx("div", { className: "meter-threshold", style: { left: `${pd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function hp({ mic: i, frame: a, heard: u, s: c, now: f }) {
  const h = Ud(i.phase, a), p = u && f - u.at < 1500 ? u : null, k = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${Oe(p.midi, c.flats, !0)} · ${Jd(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : vo[h];
  return /* @__PURE__ */ l.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ l.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: k }),
    i.phase === "on" && /* @__PURE__ */ l.jsx(Xd, { frame: a, threshold: c.minRms })
  ] });
}
function mp({ mic: i, frame: a, heard: u, accepted: c, now: f, s: h, change: p, devices: k, locked: j, calibrating: O, calibration: v, onTest: E, onStop: I, onCalibrate: z }) {
  const D = H.useId(), _ = Ud(i.phase, a), T = i.purpose === "test" && i.phase !== "off" && i.phase !== "error", F = i.phase === "on", M = u && f - u.at < 1500 ? u : null, R = M && (_ === "pitch" || _ === "untuned"), Q = F && (a?.peak ?? 0) >= 0.98, te = i.phase === "error" ? [] : fp(_, h, i.info, Q), ee = !h.device || k.some((w) => w.deviceId === h.device), $ = (w, b) => p({ ...h, [w]: b });
  return /* @__PURE__ */ l.jsxs("section", { className: "mic-panel", "aria-labelledby": `${D}-title`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ l.jsx("h2", { id: `${D}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ l.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: `mic-state ${_}`, "data-testid": "mic-state", "data-reading": _, children: [
      /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      i.phase === "error" ? i.error : vo[_],
      _ === "pitch" && M ? ` ${Oe(M.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: i.phase === "on" ? `Mikrofoni kuuntelee: ${yo(i.info)}.` : i.phase === "error" ? i.error : vo[i.phase] }),
    i.phase === "off" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    F && /* @__PURE__ */ l.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ l.jsxs("dd", { "data-testid": "mic-device", children: [
          yo(i.info),
          i.info && i.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${i.info.channels}` : "",
          i.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ l.jsxs("dd", { children: [
          /* @__PURE__ */ l.jsx(Xd, { frame: a, threshold: h.minRms }),
          /* @__PURE__ */ l.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            da(Math.max(-60, ri(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: R ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ l.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: M ? Oe(M.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: R ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-frequency", children: M ? `${da(M.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: R ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-cents", children: M ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          Jd(M.cents),
          " senttiä",
          /* @__PURE__ */ l.jsx("span", { className: `cents ${M.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ l.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, M.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: R ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-clarity", children: M ? `${Math.round(M.clarity * 100)} %` : a?.clarity !== void 0 && _ === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    F && c && f - c.timestamp < 4e3 && /* @__PURE__ */ l.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Oe(c.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    te.length > 0 && F && /* @__PURE__ */ l.jsx("ul", { className: "mic-advice", children: te.map((w) => /* @__PURE__ */ l.jsx("li", { children: w }, w)) }),
    i.phase === "error" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
      T ? /* @__PURE__ */ l.jsx("button", { type: "button", onClick: I, children: "Lopeta testi" }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: h.input === "mic" && i.phase !== "on" ? "primary" : "", disabled: j, onClick: E, children: "Testaa mikrofoni" }),
      T && F && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: O, onClick: z, children: O ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    j && i.purpose !== "test" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", disabled: j, children: [
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsx("label", { htmlFor: `${D}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ l.jsxs("select", { id: `${D}-device`, value: h.device, onChange: (w) => $("device", w.target.value), children: [
              /* @__PURE__ */ l.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !ee && /* @__PURE__ */ l.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              k.map((w, b) => /* @__PURE__ */ l.jsx("option", { value: w.deviceId, children: w.label || `Äänitulo ${b + 1}` }, w.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${D}-rms`, children: [
              "Äänikynnys · ",
              da(ri(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${D}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (w) => $("minRms", Number(w.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${D}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${D}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (w) => $("clarity", Number(w.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${D}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${D}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (w) => $("stability", Number(w.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${D}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${D}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (w) => $("cents", Number(w.target.value)) })
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
const pp = (i) => i.mode === "scale" ? rt.scaleNotes(rt.SCALES[i.scale]) : Sr[i.mode === "caged" ? "maj" : i.chord].tones, Nd = (i, a) => pp(i).find(([u]) => u === a)?.[1], Zd = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", vp = (i) => i.direction === "up" ? "ylöspäin" : "alaspäin";
function yp(i, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : i.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function kp(i, a, u, c, f) {
  return a.choices === "degree" ? `Oikein! ${Ki(i.root, a.interval, a.degree)} on ${a.degree}. aste.` : Zd(i) ? `Oikein! ${a.degree}. aste on ${Ki(i.root, a.interval, a.degree)}.` : i.mode === "interval" ? `Oikein! ${Oe(a.reference, i.flats, !0)} → ${a.name} on ${Gi[a.interval]} ${vp(a)}.` : i.mode === "notes" ? u === "board" && f ? `Oikein! ${Oe(f.midi, i.flats)} on ${Td[f.string]}: ${wr(f.fret)}.` : `Oikein! Soitit sävelen ${Oe(c, i.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function gp(i, a, u, c, f) {
  if (u === "note") return `Ei ${Oe(c, i.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (u === "degree") return `Ei ${Nd(i, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!f) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = He(f.midi) === He(a.midi);
  if (i.mode === "notes")
    return f.string !== a.position.string ? `Tuo on ${mn[f.string]}-kieli. Etsi sävel ${xo[a.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Oe(f.midi, i.flats)}. Etsi ${a.name}.`;
  if (Zd(i)) {
    const p = He(f.midi - i.root), k = Nd(i, p), j = i.mode === "scale" ? "asteikkoon" : "sointuun";
    return k ? h && a.check === "pitch" && f.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : h ? `Oikea sävel, mutta ${i.mode === "caged" ? "muodon" : i.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Ki(i.root, p, k)} eli ${k}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Oe(f.midi, i.flats)}, joka ei kuulu ${j}. Etsi ${a.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Oe(f.midi, i.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function xp(i, a, u) {
  const c = Oe(u, i.flats, !0);
  return He(u) === He(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function qd(i, a = !1) {
  const u = i.split(":"), c = (p) => Number(u[p]), f = (...p) => p.every((k) => Number.isInteger(c(k))), h = (p, k) => mn[p] ? `${mn[p]}-kieli, ${wr(k)}` : null;
  switch (u[0]) {
    case "notes":
      return f(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return f(1) ? `Kuultu sävel ${Oe(c(1), a)}${u[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return u.length === 2 && f(1) ? `Kuule ja toista: ${Oe(c(1), a, !0)}` : f(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return f(1) && Gi[c(1)] ? `${Gi[c(1)]} ${u[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = u[2];
      if (!f(1, 3) || !Sr[p]) return null;
      const k = Sr[p].tones.find(([j]) => j === c(3))?.[1];
      return k ? `${Md(c(1), p)}: ${k}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = rt.SCALES[u[2]];
      if (!f(1) || !p) return null;
      const k = `${ar(c(1))}-${p.name}`;
      if (u.length === 5 && f(3)) {
        const j = rt.scaleNotes(p).find(([O]) => O === c(3))?.[1];
        return j ? `${k}: ${j}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return f(3, 4) && h(c(3), c(4)) ? `${k}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!f(1) || !"CAGED".includes(u[2] ?? "?")) return null;
      const p = `${ar(c(1))}-duuri, ${u[2]}-muoto`;
      if (u.length === 4 && f(3)) {
        const k = Sr.maj.tones.find(([j]) => j === c(3))?.[1];
        return k ? `${p}: ${k}. aste` : null;
      }
      return f(3, 4) && h(c(3), c(4)) ? `${p}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Cd(i) {
  return Object.entries(i).flatMap(([a, u]) => {
    const [c, f, h, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(h) ? [] : [{ key: a, input: c, check: f, guided: h === "guided", item: p.join(":"), mode: p[0], stat: u }];
  });
}
const ko = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", jp = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function Sp(i) {
  const a = i.solo === void 0 ? `${i.first}/${i.count} heti oikein` : i.solo ? `itsenäisesti ${i.soloFirst ?? 0}/${i.solo} heti oikein${i.count > i.solo ? ` · ${i.count - i.solo} vihjeen kanssa` : ""}` : `${i.count} vastausta vihjeen kanssa`;
  return `${new Date(i.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${Zr(i.mode)}${i.hints ? ` · ${pa[i.hints].title}` : ""} · ${a} · keskimäärin ${ko(i.ms / Math.max(1, i.count))}${i.complete ? "" : " · keskeytetty"}`;
}
function wp({ store: i, s: a, locked: u, changed: c }) {
  const [f, h] = H.useState(""), p = H.useRef(null), { recent: k, sessions: j, stats: O } = i.data, v = Er(a), E = $d(a), I = [...new Set(k.map((M) => M.mode))].map((M) => {
    const R = k.filter((Q) => Q.mode === M);
    return { mode: M, ...co(R), last: Math.max(...R.map((Q) => Q.at)) };
  }).sort((M, R) => R.last - M.last), z = Cd(O).filter((M) => !M.guided && M.mode === a.mode && M.input === v && M.check === E && M.stat.attempts >= 3).map((M) => ({ ...M, score: jo(M.stat), text: qd(M.item, a.flats) })).filter((M) => M.text && M.score < 0.8).sort((M, R) => M.score - R.score).slice(0, 5), D = Cd(O).reduce((M, R) => M + R.stat.attempts, 0);
  function _() {
    const M = new Blob([JSON.stringify(i.data, null, 2)], { type: "application/json" }), R = URL.createObjectURL(M), Q = document.createElement("a");
    Q.href = R, Q.download = "musiikin-kartta-harjoittelu.json", Q.click(), setTimeout(() => URL.revokeObjectURL(R), 1e3);
  }
  async function T(M) {
    if (M)
      try {
        const R = await M.text();
        if (D && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        i.restore(R), h("Varmuuskopio palautettu."), c();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function F() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (i.clearProgress(), h("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    D === 0 ? /* @__PURE__ */ l.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        D,
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
        /* @__PURE__ */ l.jsx("tbody", { children: I.map((M) => /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsx("th", { scope: "row", children: Zr(M.mode) }),
          /* @__PURE__ */ l.jsx("td", { children: M.count }),
          /* @__PURE__ */ l.jsx("td", { children: M.solo ? `${M.soloFirst}/${M.solo} · ${Math.round(M.soloFirst / M.solo * 100)} %` : "–" }),
          /* @__PURE__ */ l.jsx("td", { children: M.guided }),
          /* @__PURE__ */ l.jsx("td", { children: ko(M.ms / M.count) })
        ] }, M.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ l.jsx("h3", { children: "Seuraavaksi" }),
    z.length ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        Zr(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ l.jsx("ul", { children: z.map((M) => /* @__PURE__ */ l.jsxs("li", { children: [
        M.text,
        " · viime aikoina ",
        Math.round(Wi(M.stat) * 100),
        " % heti oikein · ",
        ko(Qi(M.stat))
      ] }, M.key)) })
    ] }) : /* @__PURE__ */ l.jsx("p", { children: D ? `Harjoituksessa ${Zr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        jp[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ l.jsx(fm, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: O, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      j.length ? /* @__PURE__ */ l.jsx("ul", { children: j.slice(-10).reverse().map((M) => /* @__PURE__ */ l.jsx("li", { children: Sp(M) }, M.id)) }) : /* @__PURE__ */ l.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ l.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: _, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ l.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (M) => {
          T(M.target.files?.[0]);
        } }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u || !D, onClick: F, children: "Poista harjoitustulokset" })
      ] }),
      f && /* @__PURE__ */ l.jsx("p", { role: "status", children: f })
    ] }),
    i.warning && /* @__PURE__ */ l.jsx("p", { role: "status", className: "error", children: i.warning })
  ] });
}
function Ep() {
  try {
    return new ad(localStorage);
  } catch {
    return new ad();
  }
}
const _d = (i) => ({ minRms: i.minRms, minClarity: i.clarity, stabilityMs: i.stability, centsTolerance: i.cents }), Np = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", Cp = [0, 2, 4, 5, 7, 9, 11];
function _p(i) {
  return i.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : i.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : i.mode === "chord" ? i.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : i.mode === "scale" ? ["mp", "majp"].includes(i.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Tp() {
  const [i] = H.useState(Ep), [a, u] = H.useState(() => rm(location.search, i.data.settings)), [, c] = H.useReducer((A) => A + 1, 0), f = H.useRef(null), h = H.useRef(new Wm()), p = H.useRef(new Hd()), k = H.useRef(0), j = H.useRef(), O = H.useRef(), v = H.useRef(null), E = H.useRef(0), I = H.useRef(null), z = H.useRef(a);
  z.current = a;
  const [D, _] = H.useState({ phase: "off", purpose: "none" }), T = H.useRef(D), F = (A) => {
    T.current = A, _(A);
  }, [M, R] = H.useState(null), [Q, te] = H.useState(null), [ee, $] = H.useState(null), [w, b] = H.useState(0), [q, Pe] = H.useState([]), [Fe, Ce] = H.useState(!1), [Te, ie] = H.useState(!1), [je, ye] = H.useState(""), [C, K] = H.useState("info"), [U, g] = H.useState(""), [L, he] = H.useState(0), [Se, _e] = H.useState([]), [Ee, Y] = H.useState([]), [Z, G] = H.useState(null), [le, ge] = H.useState(!1), [ce, de] = H.useState(""), [fe, Ne] = H.useState(""), [xe, Re] = H.useState(() => {
    const A = new URLSearchParams(location.search);
    return A.has("tila") || A.has("vanha") ? "legacy" : A.get("kappale") === "yksi-sointu-kaksi-askelta-akustinen" ? "songs" : null;
  }), We = () => {
    $m().then(Pe).catch(() => {
    });
  };
  function Be() {
    clearTimeout(O.current), v.current = null, ge(!1);
  }
  function Ge() {
    R(null), te(null), $(null);
  }
  function be() {
    h.current.stop(), Be(), F({ phase: "off", purpose: "none" }), Ge();
  }
  async function kt(A) {
    if (h.current.active && T.current.phase === "on")
      return Be(), F({ ...T.current, purpose: A }), h.current.rearm(), !0;
    F({ phase: "requesting", purpose: A }), Ge();
    try {
      const X = await h.current.start(z.current.device, {
        ..._d(z.current),
        onFrame: (Ie) => _t.current.frame(Ie),
        onStableNote: (Ie) => _t.current.stable(Ie)
      }, () => _t.current.lost());
      return X ? (F({ phase: "on", purpose: A, info: X }), We(), !0) : !1;
    } catch (X) {
      return F({ phase: "error", purpose: "none", error: Gm(X) }), !1;
    }
  }
  function Qe(A) {
    v.current?.push(A.rms);
    const X = performance.now();
    X - E.current < 66 || (E.current = X, R(A), b(X), A.midi !== void 0 && A.frequency !== void 0 && te({ midi: A.midi, frequency: A.frequency, cents: A.cents ?? 0, clarity: A.clarity ?? 0, tuned: A.status === "pitch", at: X }));
  }
  function ze(A) {
    T.current.purpose === "test" ? $(A) : T.current.purpose === "round" && Ue(A.midi, "mic", void 0, A.heldMs);
  }
  function et() {
    const A = T.current.purpose === "round";
    Be(), Ge(), F({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const X = f.current;
    A && X && ["active", "feedback", "paused"].includes(X.phase) && (Tt(), ie(!1), X.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const _t = H.useRef({ frame: Qe, stable: ze, lost: et });
  _t.current = { frame: Qe, stable: ze, lost: et };
  function Vt(A) {
    const X = fa(A), Ie = X.device !== z.current.device;
    z.current = X, u(X), i.settings(X), g(""), h.current.active && (Ie && T.current.purpose === "test" ? (be(), kt("test")) : h.current.setOptions(_d(X)));
  }
  function Bt(A) {
    Ne(""), f.current = null, Re(A);
  }
  function sn() {
    Vt({
      ...z.current,
      mode: "scale",
      root: 9,
      scale: "mp",
      box: 1,
      order: "up",
      activity: "play",
      hints: "fade",
      input: "board",
      rounds: 10
    }), f.current = null, Ne(""), Re("legacy");
  }
  function Qt() {
    de(""), kt("test");
  }
  function Yt() {
    T.current.phase !== "on" || T.current.purpose !== "test" || (Be(), v.current = [], ge(!0), de("Mitataan taustakohinaa kolme sekuntia. Älä soita."), O.current = setTimeout(() => {
      const A = v.current ?? [];
      if (Be(), A.length < 10) {
        de("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: X, noise: Ie, loud: At } = Qm(A);
      Vt({ ...z.current, minRms: X }), de(`Taustakohina on ${Math.round(ri(Ie))} dB ja äänikynnys nyt ${Math.round(ri(X))} dB. ${At ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Tt() {
    k.current++, clearTimeout(j.current), p.current.stop();
  }
  function me(A, X) {
    if (!A.results.length) return;
    const Ie = co(A.results);
    i.session({
      id: A.id,
      mode: A.settings.mode,
      count: Ie.count,
      first: Ie.first,
      ms: Ie.ms,
      solo: Ie.solo,
      soloFirst: Ie.soloFirst,
      hints: A.settings.hints,
      at: Date.now(),
      complete: X
    });
  }
  async function bt(A) {
    if (!A.question?.sound.length || A.phase !== "active") return;
    Tt();
    const X = k.current;
    A.pause(), h.current.pause(), ie(!0), K("info"), ye("Kuuntele…"), c();
    try {
      await p.current.play(A.question.sound);
    } catch {
      X === k.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    X !== k.current || f.current !== A || (A.resume(), h.current.resume(), ie(!1), ye(""), c());
  }
  async function ke(A) {
    _e([]), Y([]), G(null), g(""), he(A.hintLevel), h.current.rearm(), K("info"), ye(""), c(), A.question?.sound.length && await bt(A);
  }
  async function Me() {
    const A = z.current, X = oo(A);
    if (X) {
      g(X);
      return;
    }
    Tt();
    const Ie = k.current;
    if (g(""), de(""), Ne(""), la(A)) {
      Ce(!0);
      const ut = await kt("round");
      if (Ie !== k.current) return;
      if (Ce(!1), !ut) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else T.current.phase !== "off" && be();
    const At = new Sm(A, () => i.data.stats, (ut) => i.record(ut));
    try {
      At.start();
    } catch (ut) {
      T.current.purpose === "round" && be(), g(ut instanceof Error ? ut.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    f.current = At, requestAnimationFrame(() => I.current?.scrollIntoView({ block: "start", behavior: "auto" })), await ke(At);
  }
  function $e() {
    Tt(), Ce(!1), be();
  }
  function Ue(A, X, Ie, At = 0) {
    const ut = f.current, _n = ut?.question;
    if (!ut || !_n || ut.phase !== "active") return;
    const oi = ut.answer(A, X, Ie, At);
    if (oi !== "ignored") {
      if (oi === "candidate")
        G(A), K("bad"), ye(xp(ut.settings, _n, A));
      else if (oi === "wrong")
        Ie ? _e((zn) => [...zn, Ie]) : Y((zn) => [...zn, A]), K("bad"), ye(gp(ut.settings, _n, X, A, Ie));
      else if (G(null), K("good"), ye(kp(ut.settings, _n, X, A, Ie)), me(ut, !1), ut.settings.advance) {
        const zn = k.current;
        j.current = setTimeout(() => {
          zn === k.current && it();
        }, X === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function it() {
    const A = f.current;
    if (!(!A || A.phase !== "feedback")) {
      Tt();
      try {
        A.next();
      } catch (X) {
        Rt(!1), g(X instanceof Error ? X.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (A.phase === "done") {
        Rt(!0);
        return;
      }
      await ke(A);
    }
  }
  function Rt(A = !1) {
    Tt(), ie(!1), Ce(!1), (T.current.purpose === "round" || T.current.phase === "requesting") && be();
    const X = f.current;
    X && (X.stop(), me(X, A)), G(null), he(0), _e([]), Y([]), g(""), Ne(A ? "complete" : "stopped"), K("info"), ye(""), c();
  }
  function mt() {
    const A = f.current;
    if (!A || !["active", "feedback", "paused"].includes(A.phase)) return;
    Tt(), ie(!1), A.pause();
    const X = T.current.purpose === "round";
    X && be(), K("info"), ye(`Harjoitus on tauolla.${X ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function Jt() {
    const A = f.current;
    if (!A || A.phase !== "paused" || Te) return;
    Tt();
    const X = k.current;
    if (g(""), la(A.settings)) {
      Ce(!0);
      const Ie = await kt("round");
      if (X !== k.current) return;
      if (Ce(!1), !Ie) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    A.resume(), K("info"), ye(""), c(), A.phase === "active" && (h.current.rearm(), A.question?.sound.length && await bt(A));
  }
  function wn(A) {
    const X = f.current;
    !X || X.phase !== "active" || (X.useHint(A), he(A), c());
  }
  const pn = H.useRef({ hidden: () => {
  }, restored: () => {
  } });
  pn.current = {
    hidden: () => {
      const A = f.current;
      A && ["active", "feedback"].includes(A.phase) || Te ? mt() : T.current.phase !== "off" && T.current.phase !== "error" && (Tt(), Ce(!1), be());
    },
    restored: () => {
      Ce(!1), ie(!1), F({ phase: "off", purpose: "none" }), Ge(), c();
    }
  }, H.useEffect(() => {
    We();
    const A = () => We();
    navigator.mediaDevices?.addEventListener?.("devicechange", A);
    const X = () => {
      k.current++, clearTimeout(j.current), clearTimeout(O.current), h.current.stop(), p.current.stop(), Km(), f.current?.pause();
    }, Ie = () => {
      document.hidden && pn.current.hidden();
    }, At = (ut) => {
      ut.persisted && pn.current.restored();
    };
    return document.addEventListener("visibilitychange", Ie), window.addEventListener("pagehide", X), window.addEventListener("pageshow", At), () => {
      X(), navigator.mediaDevices?.removeEventListener?.("devicechange", A), document.removeEventListener("visibilitychange", Ie), window.removeEventListener("pagehide", X), window.removeEventListener("pageshow", At);
    };
  }, []);
  const vn = H.useRef(null), Xi = `${f.current?.id}:${f.current?.index}:${f.current?.phase}:${Te}`;
  H.useEffect(() => {
    const A = f.current, X = I.current, Ie = document.activeElement;
    !A || !X || !(Ie === document.body || X.contains(Ie)) || (A.phase === "feedback" ? vn.current?.focus({ preventScroll: !0 }) : A.phase === "active" && !Te && (Ie === document.body || Ie === vn.current) && X.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [Xi]);
  const Le = f.current, Xe = !!Le && ["active", "paused", "feedback"].includes(Le.phase), Ye = Xe ? Le.settings : a, ot = Xe ? Le.question : void 0, Ut = !!ot && !!Le?.answered, Xt = Xe && Le.phase === "paused" && !Te && !Ut, Cr = Xe && Le.phase === "active" && !Te, En = Xe ? null : oo(a), In = Xe || Fe, lr = Nr(Ye), si = mm(Ye), or = ot && !Ut ? L : 0, ai = ot ? jm(Ye, ot, Ut ? 2 : or) : { marks: [], text: "" }, Zi = [...new Map([...ai.marks, ...Ut ? [] : Se.map((A) => ({ ...A, label: Oe(A.midi, Ye.flats), kind: "wrong" }))].map((A) => [nt(A), A])).values()], Nn = Xe && la(Ye), qi = !!ot && !Xt && (ot.choices === "position" || Zi.length > 0), gt = Le ? co(Le.results) : null, ka = !Le || Ye.hints !== "fade" ? "" : Le.index <= 3 ? " · vastaus näkyy" : Le.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", li = Le && !Xe ? Le.results.filter((A) => A.errors > 0 || A.hint) : [], [es, ts] = _p(Ye), Cn = /* @__PURE__ */ l.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ l.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ l.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), Dn = i.data.notice === "hints-default" && /* @__PURE__ */ l.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
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
  return !Xe && xe === null ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx(Em, { onSelect: Bt })
  ] }) : !Xe && xe === "scales" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx(Jm, { onBack: () => Re(null), onOpenOldExercise: sn })
  ] }) : !Xe && xe === "ear" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx(Zm, { onBack: () => Re(null) })
  ] }) : !Xe && xe === "chords" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx(tp, { onBack: () => Re(null) })
  ] }) : !Xe && xe === "songs" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx(dp, { onBack: () => Re(null) })
  ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsxs("a", { href: es, children: [
      "Lue tämän harjoituksen teoria: ",
      ts,
      " →"
    ] }) }),
    xe !== "legacy" && /* @__PURE__ */ l.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: () => {
        Xe && Rt(), Re(null);
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ l.jsx("h2", { children: xe === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ l.jsx("p", { children: xe === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    Xe ? /* @__PURE__ */ l.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ l.jsx("strong", { children: Zr(Ye.mode) }),
      " · ",
      ud(Ye)
    ] }) : xe === "legacy" ? /* @__PURE__ */ l.jsx(cd, { s: a, change: Vt, locked: In, problem: En }) : /* @__PURE__ */ l.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ l.jsx(cd, { s: a, change: Vt, locked: In, problem: En })
    ] }),
    !Xe && (xe === "legacy" || la(a)) && /* @__PURE__ */ l.jsx(
      mp,
      {
        mic: D,
        frame: M,
        heard: Q,
        accepted: ee,
        now: w,
        s: a,
        change: Vt,
        devices: q,
        locked: Fe,
        calibrating: le,
        calibration: ce,
        onTest: Qt,
        onStop: be,
        onCalibrate: Yt
      }
    ),
    /* @__PURE__ */ l.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: I, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h2", { id: "session-title", children: Zr(Ye.mode) }),
        /* @__PURE__ */ l.jsx("span", { "data-testid": "round-status", children: Xe ? `Kysymys ${Le.index}${Le.total ? " / " + Le.total : " · vapaa harjoittelu"} · ${pa[Ye.hints].title}${ka}${Le.phase === "paused" && !Te ? " · tauolla" : ""}` : fe === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !Xe && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        Le && Le.results.length > 0 && gt ? /* @__PURE__ */ l.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ l.jsx("h3", { children: fe === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ l.jsxs("dl", { children: [
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ l.jsx("dd", { "data-testid": "summary-solo", children: gt.solo ? `${gt.soloFirst} / ${gt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ l.jsx("dd", { "data-testid": "summary-guided", children: gt.guided })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ l.jsx("dd", { children: Np(gt.ms / gt.count) })
            ] })
          ] }),
          gt.solo === 0 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          li.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ l.jsx("ul", { children: [...new Set(li.map((A) => qd(A.item, a.flats)).filter(Boolean))].slice(0, 6).map((A) => /* @__PURE__ */ l.jsx("li", { children: A }, A)) })
          ] })
        ] }) : /* @__PURE__ */ l.jsx("p", { className: "question idle", children: ud(a) }),
        /* @__PURE__ */ l.jsx("div", { className: "action-row", children: Fe ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: $e, children: "Peru" })
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !!En, onClick: () => {
          Me();
        }, children: Le?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Le && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      Xe && ot && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: Xt ? "Harjoitus on tauolla." : ot.prompt }),
        /* @__PURE__ */ l.jsx("p", { className: "how", "data-testid": "instruction", children: Xt ? "Kysymys palaa näkyviin, kun jatkat." : Te ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : yp(Ye, ot) }),
        Le.hintLevel > 0 && !Ut && /* @__PURE__ */ l.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Ye.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Nn && /* @__PURE__ */ l.jsx(hp, { mic: D, frame: M, heard: Q, s: Ye, now: w }),
        ot.choices === "note" && !Xt && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Ye.accidentals ? Array.from({ length: 12 }, (A, X) => X) : Cp).map((A) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ee.includes(A) ? "wrong" : Ut && A === ot.midi % 12 ? "right" : "", disabled: !Cr || Ee.includes(A), onClick: () => Ue(A, "note"), children: Oe(A, Ye.flats) }, A)) }),
        ot.choices === "degree" && !Xt && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Ye.mode === "scale" ? rt.scaleNotes(rt.SCALES[Ye.scale]) : Sr[Ye.chord].tones).map(([A, X]) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ee.includes(A) ? "wrong" : Ut && A === ot.interval ? "right" : "", disabled: !Cr || Ee.includes(A), onClick: () => Ue(A, "degree"), children: X }, A)) }),
        qi && /* @__PURE__ */ l.jsx(
          Yi,
          {
            area: si,
            marks: Zi,
            disabled: !Cr || ot.choices !== "position" || Ye.input === "mic",
            onAnswer: (A) => Ue(A.midi, "board", A),
            caption: lr.fixed === "shape" ? `${Ye.shape}-muodon alue` : lr.fixed === "box" ? `Boksin ${Ye.box} alue` : "Otelauta"
          }
        ),
        !Ut && !Xt && or > 0 && ai.text && /* @__PURE__ */ l.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: ai.text }),
        /* @__PURE__ */ l.jsx("p", { className: `feedback ${C}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: je }),
        Z !== null && Le.phase === "active" && /* @__PURE__ */ l.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
            Le.confirmWrong(), G(null), ye("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ l.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        U && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: U }),
        /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
          Le.phase === "feedback" && /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", ref: vn, onClick: () => {
            it();
          }, children: Le.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Le.phase === "active" && !Ut && !Te && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            or === 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => wn(Math.max(1, Le.hintLevel)), children: Le.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            or === 1 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => wn(2), children: "Näytä vastaus" }),
            or > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => he(0), children: "Piilota vihje" })
          ] }),
          ot.sound.length > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: !Cr, onClick: () => {
            bt(Le);
          }, children: "Kuuntele uudelleen" }),
          Le.phase === "paused" && !Te ? /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: Fe, onClick: () => {
            Jt();
          }, children: Fe ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ l.jsx("button", { type: "button", onClick: mt, children: "Tauko" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => Rt(), children: "Lopeta harjoitus" })
        ] }),
        Le.phase === "feedback" && Ye.advance && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "tally", children: gt?.count ? `Vastattu ${gt.count} · itsenäisesti heti oikein ${gt.soloFirst}/${gt.solo}${gt.guided ? ` · vihjeen kanssa ${gt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !Xe && U && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: U })
    ] }),
    !Xe && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ l.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(rt.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ l.jsx("a", { href: im(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ l.jsx(wp, { store: i, s: a, locked: In, changed: () => {
        const A = fa(i.data.settings);
        z.current = A, u(A), c();
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
Yh.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ l.jsx(Tp, {}));
//# sourceMappingURL=app.js.map
