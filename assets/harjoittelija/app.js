function ap(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var So = { exports: {} }, nr = {}, wo = { exports: {} }, Oe = {};
var _d;
function lp() {
  if (_d) return Oe;
  _d = 1;
  var r = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), g = Symbol.iterator;
  function P(j) {
    return j === null || typeof j != "object" ? null : (j = g && j[g] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var D = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, N = {};
  function x(j, L, oe) {
    this.props = j, this.context = L, this.refs = N, this.updater = oe || D;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(j, L) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, L, "setState");
  }, x.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function z() {
  }
  z.prototype = x.prototype;
  function T(j, L, oe) {
    this.props = j, this.context = L, this.refs = N, this.updater = oe || D;
  }
  var W = T.prototype = new z();
  W.constructor = T, b(W, x.prototype), W.isPureReactComponent = !0;
  var H = Array.isArray, G = Object.prototype.hasOwnProperty, w = { current: null }, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(j, L, oe) {
    var _, se = {}, M = null, V = null;
    if (L != null) for (_ in L.ref !== void 0 && (V = L.ref), L.key !== void 0 && (M = "" + L.key), L) G.call(L, _) && !F.hasOwnProperty(_) && (se[_] = L[_]);
    var X = arguments.length - 2;
    if (X === 1) se.children = oe;
    else if (1 < X) {
      for (var q = Array(X), pe = 0; pe < X; pe++) q[pe] = arguments[pe + 2];
      se.children = q;
    }
    if (j && j.defaultProps) for (_ in X = j.defaultProps, X) se[_] === void 0 && (se[_] = X[_]);
    return { $$typeof: r, type: j, key: M, ref: V, props: se, _owner: w.current };
  }
  function ne(j, L) {
    return { $$typeof: r, type: j.type, key: L, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function J(j) {
    return typeof j == "object" && j !== null && j.$$typeof === r;
  }
  function me(j) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(oe) {
      return L[oe];
    });
  }
  var xe = /\/+/g;
  function Z(j, L) {
    return typeof j == "object" && j !== null && j.key != null ? me("" + j.key) : L.toString(36);
  }
  function ce(j, L, oe, _, se) {
    var M = typeof j;
    (M === "undefined" || M === "boolean") && (j = null);
    var V = !1;
    if (j === null) V = !0;
    else switch (M) {
      case "string":
      case "number":
        V = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case r:
          case a:
            V = !0;
        }
    }
    if (V) return V = j, se = se(V), j = _ === "" ? "." + Z(V, 0) : _, H(se) ? (oe = "", j != null && (oe = j.replace(xe, "$&/") + "/"), ce(se, L, oe, "", function(pe) {
      return pe;
    })) : se != null && (J(se) && (se = ne(se, oe + (!se.key || V && V.key === se.key ? "" : ("" + se.key).replace(xe, "$&/") + "/") + j)), L.push(se)), 1;
    if (V = 0, _ = _ === "" ? "." : _ + ":", H(j)) for (var X = 0; X < j.length; X++) {
      M = j[X];
      var q = _ + Z(M, X);
      V += ce(M, L, oe, q, se);
    }
    else if (q = P(j), typeof q == "function") for (j = q.call(j), X = 0; !(M = j.next()).done; ) M = M.value, q = _ + Z(M, X++), V += ce(M, L, oe, q, se);
    else if (M === "object") throw L = String(j), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
    return V;
  }
  function ye(j, L, oe) {
    if (j == null) return j;
    var _ = [], se = 0;
    return ce(j, _, "", "", function(M) {
      return L.call(oe, M, se++);
    }), _;
  }
  function Ee(j) {
    if (j._status === -1) {
      var L = j._result;
      L = L(), L.then(function(oe) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = oe);
      }, function(oe) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = oe);
      }), j._status === -1 && (j._status = 0, j._result = L);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var he = { current: null }, R = { transition: null }, Y = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: R, ReactCurrentOwner: w };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Oe.Children = { map: ye, forEach: function(j, L, oe) {
    ye(j, function() {
      L.apply(this, arguments);
    }, oe);
  }, count: function(j) {
    var L = 0;
    return ye(j, function() {
      L++;
    }), L;
  }, toArray: function(j) {
    return ye(j, function(L) {
      return L;
    }) || [];
  }, only: function(j) {
    if (!J(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, Oe.Component = x, Oe.Fragment = o, Oe.Profiler = c, Oe.PureComponent = T, Oe.StrictMode = d, Oe.Suspense = y, Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, Oe.act = Q, Oe.cloneElement = function(j, L, oe) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var _ = b({}, j.props), se = j.key, M = j.ref, V = j._owner;
    if (L != null) {
      if (L.ref !== void 0 && (M = L.ref, V = w.current), L.key !== void 0 && (se = "" + L.key), j.type && j.type.defaultProps) var X = j.type.defaultProps;
      for (q in L) G.call(L, q) && !F.hasOwnProperty(q) && (_[q] = L[q] === void 0 && X !== void 0 ? X[q] : L[q]);
    }
    var q = arguments.length - 2;
    if (q === 1) _.children = oe;
    else if (1 < q) {
      X = Array(q);
      for (var pe = 0; pe < q; pe++) X[pe] = arguments[pe + 2];
      _.children = X;
    }
    return { $$typeof: r, type: j.type, key: se, ref: M, props: _, _owner: V };
  }, Oe.createContext = function(j) {
    return j = { $$typeof: p, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: h, _context: j }, j.Consumer = j;
  }, Oe.createElement = A, Oe.createFactory = function(j) {
    var L = A.bind(null, j);
    return L.type = j, L;
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(j) {
    return { $$typeof: m, render: j };
  }, Oe.isValidElement = J, Oe.lazy = function(j) {
    return { $$typeof: v, _payload: { _status: -1, _result: j }, _init: Ee };
  }, Oe.memo = function(j, L) {
    return { $$typeof: $, type: j, compare: L === void 0 ? null : L };
  }, Oe.startTransition = function(j) {
    var L = R.transition;
    R.transition = {};
    try {
      j();
    } finally {
      R.transition = L;
    }
  }, Oe.unstable_act = Q, Oe.useCallback = function(j, L) {
    return he.current.useCallback(j, L);
  }, Oe.useContext = function(j) {
    return he.current.useContext(j);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(j) {
    return he.current.useDeferredValue(j);
  }, Oe.useEffect = function(j, L) {
    return he.current.useEffect(j, L);
  }, Oe.useId = function() {
    return he.current.useId();
  }, Oe.useImperativeHandle = function(j, L, oe) {
    return he.current.useImperativeHandle(j, L, oe);
  }, Oe.useInsertionEffect = function(j, L) {
    return he.current.useInsertionEffect(j, L);
  }, Oe.useLayoutEffect = function(j, L) {
    return he.current.useLayoutEffect(j, L);
  }, Oe.useMemo = function(j, L) {
    return he.current.useMemo(j, L);
  }, Oe.useReducer = function(j, L, oe) {
    return he.current.useReducer(j, L, oe);
  }, Oe.useRef = function(j) {
    return he.current.useRef(j);
  }, Oe.useState = function(j) {
    return he.current.useState(j);
  }, Oe.useSyncExternalStore = function(j, L, oe) {
    return he.current.useSyncExternalStore(j, L, oe);
  }, Oe.useTransition = function() {
    return he.current.useTransition();
  }, Oe.version = "18.3.1", Oe;
}
var Ad;
function eu() {
  return Ad || (Ad = 1, wo.exports = lp()), wo.exports;
}
var Pd;
function op() {
  if (Pd) return nr;
  Pd = 1;
  var r = eu(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, y, $) {
    var v, g = {}, P = null, D = null;
    $ !== void 0 && (P = "" + $), y.key !== void 0 && (P = "" + y.key), y.ref !== void 0 && (D = y.ref);
    for (v in y) d.call(y, v) && !h.hasOwnProperty(v) && (g[v] = y[v]);
    if (m && m.defaultProps) for (v in y = m.defaultProps, y) g[v] === void 0 && (g[v] = y[v]);
    return { $$typeof: a, type: m, key: P, ref: D, props: g, _owner: c.current };
  }
  return nr.Fragment = o, nr.jsx = p, nr.jsxs = p, nr;
}
var Ld;
function up() {
  return Ld || (Ld = 1, So.exports = op()), So.exports;
}
var i = up(), E = eu(), Na = {}, No = { exports: {} }, Bt = {}, Eo = { exports: {} }, Co = {};
var $d;
function cp() {
  return $d || ($d = 1, (function(r) {
    function a(R, Y) {
      var Q = R.length;
      R.push(Y);
      e: for (; 0 < Q; ) {
        var j = Q - 1 >>> 1, L = R[j];
        if (0 < c(L, Y)) R[j] = Y, R[Q] = L, Q = j;
        else break e;
      }
    }
    function o(R) {
      return R.length === 0 ? null : R[0];
    }
    function d(R) {
      if (R.length === 0) return null;
      var Y = R[0], Q = R.pop();
      if (Q !== Y) {
        R[0] = Q;
        e: for (var j = 0, L = R.length, oe = L >>> 1; j < oe; ) {
          var _ = 2 * (j + 1) - 1, se = R[_], M = _ + 1, V = R[M];
          if (0 > c(se, Q)) M < L && 0 > c(V, se) ? (R[j] = V, R[M] = Q, j = M) : (R[j] = se, R[_] = Q, j = _);
          else if (M < L && 0 > c(V, Q)) R[j] = V, R[M] = Q, j = M;
          else break e;
        }
      }
      return Y;
    }
    function c(R, Y) {
      var Q = R.sortIndex - Y.sortIndex;
      return Q !== 0 ? Q : R.id - Y.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      r.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, m = p.now();
      r.unstable_now = function() {
        return p.now() - m;
      };
    }
    var y = [], $ = [], v = 1, g = null, P = 3, D = !1, b = !1, N = !1, x = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function W(R) {
      for (var Y = o($); Y !== null; ) {
        if (Y.callback === null) d($);
        else if (Y.startTime <= R) d($), Y.sortIndex = Y.expirationTime, a(y, Y);
        else break;
        Y = o($);
      }
    }
    function H(R) {
      if (N = !1, W(R), !b) if (o(y) !== null) b = !0, Ee(G);
      else {
        var Y = o($);
        Y !== null && he(H, Y.startTime - R);
      }
    }
    function G(R, Y) {
      b = !1, N && (N = !1, z(A), A = -1), D = !0;
      var Q = P;
      try {
        for (W(Y), g = o(y); g !== null && (!(g.expirationTime > Y) || R && !me()); ) {
          var j = g.callback;
          if (typeof j == "function") {
            g.callback = null, P = g.priorityLevel;
            var L = j(g.expirationTime <= Y);
            Y = r.unstable_now(), typeof L == "function" ? g.callback = L : g === o(y) && d(y), W(Y);
          } else d(y);
          g = o(y);
        }
        if (g !== null) var oe = !0;
        else {
          var _ = o($);
          _ !== null && he(H, _.startTime - Y), oe = !1;
        }
        return oe;
      } finally {
        g = null, P = Q, D = !1;
      }
    }
    var w = !1, F = null, A = -1, ne = 5, J = -1;
    function me() {
      return !(r.unstable_now() - J < ne);
    }
    function xe() {
      if (F !== null) {
        var R = r.unstable_now();
        J = R;
        var Y = !0;
        try {
          Y = F(!0, R);
        } finally {
          Y ? Z() : (w = !1, F = null);
        }
      } else w = !1;
    }
    var Z;
    if (typeof T == "function") Z = function() {
      T(xe);
    };
    else if (typeof MessageChannel < "u") {
      var ce = new MessageChannel(), ye = ce.port2;
      ce.port1.onmessage = xe, Z = function() {
        ye.postMessage(null);
      };
    } else Z = function() {
      x(xe, 0);
    };
    function Ee(R) {
      F = R, w || (w = !0, Z());
    }
    function he(R, Y) {
      A = x(function() {
        R(r.unstable_now());
      }, Y);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, r.unstable_continueExecution = function() {
      b || D || (b = !0, Ee(G));
    }, r.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < R ? Math.floor(1e3 / R) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, r.unstable_getFirstCallbackNode = function() {
      return o(y);
    }, r.unstable_next = function(R) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = P;
      }
      var Q = P;
      P = Y;
      try {
        return R();
      } finally {
        P = Q;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(R, Y) {
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
      var Q = P;
      P = R;
      try {
        return Y();
      } finally {
        P = Q;
      }
    }, r.unstable_scheduleCallback = function(R, Y, Q) {
      var j = r.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? j + Q : j) : Q = j, R) {
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
      return L = Q + L, R = { id: v++, callback: Y, priorityLevel: R, startTime: Q, expirationTime: L, sortIndex: -1 }, Q > j ? (R.sortIndex = Q, a($, R), o(y) === null && R === o($) && (N ? (z(A), A = -1) : N = !0, he(H, Q - j))) : (R.sortIndex = L, a(y, R), b || D || (b = !0, Ee(G))), R;
    }, r.unstable_shouldYield = me, r.unstable_wrapCallback = function(R) {
      var Y = P;
      return function() {
        var Q = P;
        P = Y;
        try {
          return R.apply(this, arguments);
        } finally {
          P = Q;
        }
      };
    };
  })(Co)), Co;
}
var Rd;
function dp() {
  return Rd || (Rd = 1, Eo.exports = cp()), Eo.exports;
}
var Od;
function hp() {
  if (Od) return Bt;
  Od = 1;
  var r = eu(), a = dp();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), c = {};
  function h(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), y = Object.prototype.hasOwnProperty, $ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, g = {};
  function P(e) {
    return y.call(g, e) ? !0 : y.call(v, e) ? !1 : $.test(e) ? g[e] = !0 : (v[e] = !0, !1);
  }
  function D(e, t, n, s) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function b(e, t, n, s) {
    if (t === null || typeof t > "u" || D(e, t, n, s)) return !0;
    if (s) return !1;
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
  function N(e, t, n, s, l, u, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = f;
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    x[e] = new N(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    x[t] = new N(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    x[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    x[e] = new N(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    x[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    x[e] = new N(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    x[e] = new N(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    x[e] = new N(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    x[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function T(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      z,
      T
    );
    x[t] = new N(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(z, T);
    x[t] = new N(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(z, T);
    x[t] = new N(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    x[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), x.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    x[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function W(e, t, n, s) {
    var l = x.hasOwnProperty(t) ? x[t] : null;
    (l !== null ? l.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, l, s) && (n = null), s || l === null ? P(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, s = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var H = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, G = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.portal"), F = /* @__PURE__ */ Symbol.for("react.fragment"), A = /* @__PURE__ */ Symbol.for("react.strict_mode"), ne = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.provider"), me = /* @__PURE__ */ Symbol.for("react.context"), xe = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), ce = /* @__PURE__ */ Symbol.for("react.suspense_list"), ye = /* @__PURE__ */ Symbol.for("react.memo"), Ee = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.offscreen"), R = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object" ? null : (e = R && e[R] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Q = Object.assign, j;
  function L(e) {
    if (j === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      j = t && t[1] || "";
    }
    return `
` + j + e;
  }
  var oe = !1;
  function _(e, t) {
    if (!e || oe) return "";
    oe = !0;
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
        } catch (B) {
          var s = B;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (B) {
          s = B;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (B) {
          s = B;
        }
        e();
      }
    } catch (B) {
      if (B && s && typeof B.stack == "string") {
        for (var l = B.stack.split(`
`), u = s.stack.split(`
`), f = l.length - 1, k = u.length - 1; 1 <= f && 0 <= k && l[f] !== u[k]; ) k--;
        for (; 1 <= f && 0 <= k; f--, k--) if (l[f] !== u[k]) {
          if (f !== 1 || k !== 1)
            do
              if (f--, k--, 0 > k || l[f] !== u[k]) {
                var S = `
` + l[f].replace(" at new ", " at ");
                return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), S;
              }
            while (1 <= f && 0 <= k);
          break;
        }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? L(e) : "";
  }
  function se(e) {
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
        return e = _(e.type, !1), e;
      case 11:
        return e = _(e.type.render, !1), e;
      case 1:
        return e = _(e.type, !0), e;
      default:
        return "";
    }
  }
  function M(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case F:
        return "Fragment";
      case w:
        return "Portal";
      case ne:
        return "Profiler";
      case A:
        return "StrictMode";
      case Z:
        return "Suspense";
      case ce:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case me:
        return (e.displayName || "Context") + ".Consumer";
      case J:
        return (e._context.displayName || "Context") + ".Provider";
      case xe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ye:
        return t = e.displayName || null, t !== null ? t : M(e.type) || "Memo";
      case Ee:
        t = e._payload, e = e._init;
        try {
          return M(e(t));
        } catch {
        }
    }
    return null;
  }
  function V(e) {
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
        return M(t);
      case 8:
        return t === A ? "StrictMode" : "Mode";
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
  function X(e) {
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
  function q(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function pe(e) {
    var t = q(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(f) {
        s = "" + f, u.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(f) {
        s = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function K(e) {
    e._valueTracker || (e._valueTracker = pe(e));
  }
  function re(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = q(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ae(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function de(e, t) {
    var n = t.checked;
    return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ce(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = X(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function we(e, t) {
    t = t.checked, t != null && W(e, "checked", t, !1);
  }
  function $e(e, t) {
    we(e, t);
    var n = X(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ye(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ye(e, t.type, X(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function He(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ye(e, t, n) {
    (t !== "number" || ae(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var We = Array.isArray;
  function Xe(e, t, n, s) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && s && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + X(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, s && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ut(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Je(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (We(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: X(n) };
  }
  function Ve(e, t) {
    var n = X(t.value), s = X(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), s != null && (e.defaultValue = "" + s);
  }
  function it(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Kt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Xt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Kt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Et, un = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Et = Et || document.createElement("div"), Et.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Et.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Zt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var qt = {
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
  }, _t = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qt).forEach(function(e) {
    _t.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), qt[t] = qt[e];
    });
  });
  function be(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qt.hasOwnProperty(e) && qt[e] ? ("" + t).trim() : t + "px";
  }
  function Ut(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, l = be(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var _e = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Le(e, t) {
    if (t) {
      if (_e[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Re(e, t) {
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
  var Ge = null;
  function rt(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var $t = null, kt = null, en = null;
  function Mn(e) {
    if (e = Bs(e)) {
      if (typeof $t != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = Dr(t), $t(e.stateNode, e.type, t));
    }
  }
  function yn(e) {
    kt ? en ? en.push(e) : en = [e] : kt = e;
  }
  function gn() {
    if (kt) {
      var e = kt, t = en;
      if (en = kt = null, Mn(e), t) for (e = 0; e < t.length; e++) Mn(t[e]);
    }
  }
  function pr(e, t) {
    return e(t);
  }
  function Fe() {
  }
  var et = !1;
  function Ze(e, t, n) {
    if (et) return e(t, n);
    et = !0;
    try {
      return pr(e, t, n);
    } finally {
      et = !1, (kt !== null || en !== null) && (Fe(), gn());
    }
  }
  function ct(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = Dr(n);
    if (s === null) return null;
    n = s[t];
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
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var Ht = !1;
  if (m) try {
    var tn = {};
    Object.defineProperty(tn, "passive", { get: function() {
      Ht = !0;
    } }), window.addEventListener("test", tn, tn), window.removeEventListener("test", tn, tn);
  } catch {
    Ht = !1;
  }
  function Ri(e, t, n, s, l, u, f, k, S) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, B);
    } catch (te) {
      this.onError(te);
    }
  }
  var Tn = !1, Vn = null, mi = !1, gs = null, pi = { onError: function(e) {
    Tn = !0, Vn = e;
  } };
  function js(e, t, n, s, l, u, f, k, S) {
    Tn = !1, Vn = null, Ri.apply(pi, arguments);
  }
  function vr(e, t, n, s, l, u, f, k, S) {
    if (js.apply(this, arguments), Tn) {
      if (Tn) {
        var B = Vn;
        Tn = !1, Vn = null;
      } else throw Error(o(198));
      mi || (mi = !0, gs = B);
    }
  }
  function _n(e) {
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
  function kr(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function xt(e) {
    if (_n(e) !== e) throw Error(o(188));
  }
  function Ba(e) {
    var t = e.alternate;
    if (!t) {
      if (t = _n(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, s = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (s = l.return, s !== null) {
          n = s;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return xt(l), e;
          if (u === s) return xt(l), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== s.return) n = l, s = u;
      else {
        for (var f = !1, k = l.child; k; ) {
          if (k === n) {
            f = !0, n = l, s = u;
            break;
          }
          if (k === s) {
            f = !0, s = l, n = u;
            break;
          }
          k = k.sibling;
        }
        if (!f) {
          for (k = u.child; k; ) {
            if (k === n) {
              f = !0, n = u, s = l;
              break;
            }
            if (k === s) {
              f = !0, s = u, n = l;
              break;
            }
            k = k.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== s) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function xs(e) {
    return e = Ba(e), e !== null ? yr(e) : null;
  }
  function yr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = yr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var gr = a.unstable_scheduleCallback, An = a.unstable_cancelCallback, Kn = a.unstable_shouldYield, U = a.unstable_requestPaint, ue = a.unstable_now, ze = a.unstable_getCurrentPriorityLevel, Rt = a.unstable_ImmediatePriority, dt = a.unstable_UserBlockingPriority, Pn = a.unstable_NormalPriority, Ss = a.unstable_LowPriority, Un = a.unstable_IdlePriority, jr = null, jn = null;
  function xf(e) {
    if (jn && typeof jn.onCommitFiberRoot == "function") try {
      jn.onCommitFiberRoot(jr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var cn = Math.clz32 ? Math.clz32 : Nf, Sf = Math.log, wf = Math.LN2;
  function Nf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Sf(e) / wf | 0) | 0;
  }
  var xr = 64, Sr = 4194304;
  function ws(e) {
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
  function wr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, l = e.suspendedLanes, u = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var k = f & ~l;
      k !== 0 ? s = ws(k) : (u &= f, u !== 0 && (s = ws(u)));
    } else f = n & ~l, f !== 0 ? s = ws(f) : u !== 0 && (s = ws(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & l) === 0 && (l = s & -s, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - cn(t), l = 1 << n, s |= e[n], t &= ~l;
    return s;
  }
  function Ef(e, t) {
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
  function Cf(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var f = 31 - cn(u), k = 1 << f, S = l[f];
      S === -1 ? ((k & n) === 0 || (k & s) !== 0) && (l[f] = Ef(k, t)) : S <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Va(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function lu() {
    var e = xr;
    return xr <<= 1, (xr & 4194240) === 0 && (xr = 64), e;
  }
  function Ka(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ns(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - cn(t), e[t] = n;
  }
  function bf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - cn(n), u = 1 << l;
      t[l] = 0, s[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Ua(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - cn(n), l = 1 << s;
      l & t | e[s] & t && (e[s] |= t), n &= ~l;
    }
  }
  var Qe = 0;
  function ou(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var uu, Ha, cu, du, hu, Ga = !1, Nr = [], Hn = null, Gn = null, Wn = null, Es = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), Qn = [], Mf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function fu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Gn = null;
        break;
      case "mouseover":
      case "mouseout":
        Wn = null;
        break;
      case "pointerover":
      case "pointerout":
        Es.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cs.delete(t.pointerId);
    }
  }
  function bs(e, t, n, s, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [l] }, t !== null && (t = Bs(t), t !== null && Ha(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Tf(e, t, n, s, l) {
    switch (t) {
      case "focusin":
        return Hn = bs(Hn, e, t, n, s, l), !0;
      case "dragenter":
        return Gn = bs(Gn, e, t, n, s, l), !0;
      case "mouseover":
        return Wn = bs(Wn, e, t, n, s, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Es.set(u, bs(Es.get(u) || null, e, t, n, s, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Cs.set(u, bs(Cs.get(u) || null, e, t, n, s, l)), !0;
    }
    return !1;
  }
  function mu(e) {
    var t = vi(e.target);
    if (t !== null) {
      var n = _n(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = kr(n), t !== null) {
            e.blockedOn = t, hu(e.priority, function() {
              cu(n);
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
  function Er(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Qa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        Ge = s, n.target.dispatchEvent(s), Ge = null;
      } else return t = Bs(n), t !== null && Ha(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function pu(e, t, n) {
    Er(e) && n.delete(t);
  }
  function _f() {
    Ga = !1, Hn !== null && Er(Hn) && (Hn = null), Gn !== null && Er(Gn) && (Gn = null), Wn !== null && Er(Wn) && (Wn = null), Es.forEach(pu), Cs.forEach(pu);
  }
  function Ms(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ga || (Ga = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, _f)));
  }
  function Ts(e) {
    function t(l) {
      return Ms(l, e);
    }
    if (0 < Nr.length) {
      Ms(Nr[0], e);
      for (var n = 1; n < Nr.length; n++) {
        var s = Nr[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (Hn !== null && Ms(Hn, e), Gn !== null && Ms(Gn, e), Wn !== null && Ms(Wn, e), Es.forEach(t), Cs.forEach(t), n = 0; n < Qn.length; n++) s = Qn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < Qn.length && (n = Qn[0], n.blockedOn === null); ) mu(n), n.blockedOn === null && Qn.shift();
  }
  var Oi = H.ReactCurrentBatchConfig, Cr = !0;
  function Af(e, t, n, s) {
    var l = Qe, u = Oi.transition;
    Oi.transition = null;
    try {
      Qe = 1, Wa(e, t, n, s);
    } finally {
      Qe = l, Oi.transition = u;
    }
  }
  function Pf(e, t, n, s) {
    var l = Qe, u = Oi.transition;
    Oi.transition = null;
    try {
      Qe = 4, Wa(e, t, n, s);
    } finally {
      Qe = l, Oi.transition = u;
    }
  }
  function Wa(e, t, n, s) {
    if (Cr) {
      var l = Qa(e, t, n, s);
      if (l === null) dl(e, t, s, br, n), fu(e, s);
      else if (Tf(l, e, t, n, s)) s.stopPropagation();
      else if (fu(e, s), t & 4 && -1 < Mf.indexOf(e)) {
        for (; l !== null; ) {
          var u = Bs(l);
          if (u !== null && uu(u), u = Qa(e, t, n, s), u === null && dl(e, t, s, br, n), u === l) break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else dl(e, t, s, null, n);
    }
  }
  var br = null;
  function Qa(e, t, n, s) {
    if (br = null, e = rt(s), e = vi(e), e !== null) if (t = _n(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = kr(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return br = e, null;
  }
  function vu(e) {
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
        switch (ze()) {
          case Rt:
            return 1;
          case dt:
            return 4;
          case Pn:
          case Ss:
            return 16;
          case Un:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Yn = null, Ya = null, Mr = null;
  function ku() {
    if (Mr) return Mr;
    var e, t = Ya, n = t.length, s, l = "value" in Yn ? Yn.value : Yn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var f = n - e;
    for (s = 1; s <= f && t[n - s] === l[u - s]; s++) ;
    return Mr = l.slice(e, 1 < s ? 1 - s : void 0);
  }
  function Tr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _r() {
    return !0;
  }
  function yu() {
    return !1;
  }
  function Gt(e) {
    function t(n, s, l, u, f) {
      this._reactName = n, this._targetInst = l, this.type = s, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? _r : yu, this.isPropagationStopped = yu, this;
    }
    return Q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _r);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _r);
    }, persist: function() {
    }, isPersistent: _r }), t;
  }
  var Fi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ja = Gt(Fi), _s = Q({}, Fi, { view: 0, detail: 0 }), Lf = Gt(_s), Xa, Za, As, Ar = Q({}, _s, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: el, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== As && (As && e.type === "mousemove" ? (Xa = e.screenX - As.screenX, Za = e.screenY - As.screenY) : Za = Xa = 0, As = e), Xa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Za;
  } }), gu = Gt(Ar), $f = Q({}, Ar, { dataTransfer: 0 }), Rf = Gt($f), Of = Q({}, _s, { relatedTarget: 0 }), qa = Gt(Of), Ff = Q({}, Fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), If = Gt(Ff), Df = Q({}, Fi, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), zf = Gt(Df), Bf = Q({}, Fi, { data: 0 }), ju = Gt(Bf), Vf = {
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
  }, Kf = {
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
  }, Uf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Hf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Uf[e]) ? !!t[e] : !1;
  }
  function el() {
    return Hf;
  }
  var Gf = Q({}, _s, { key: function(e) {
    if (e.key) {
      var t = Vf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: el, charCode: function(e) {
    return e.type === "keypress" ? Tr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Wf = Gt(Gf), Qf = Q({}, Ar, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xu = Gt(Qf), Yf = Q({}, _s, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: el }), Jf = Gt(Yf), Xf = Q({}, Fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zf = Gt(Xf), qf = Q({}, Ar, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), em = Gt(qf), tm = [9, 13, 27, 32], tl = m && "CompositionEvent" in window, Ps = null;
  m && "documentMode" in document && (Ps = document.documentMode);
  var nm = m && "TextEvent" in window && !Ps, Su = m && (!tl || Ps && 8 < Ps && 11 >= Ps), wu = " ", Nu = !1;
  function Eu(e, t) {
    switch (e) {
      case "keyup":
        return tm.indexOf(t.keyCode) !== -1;
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
  function Cu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ii = !1;
  function im(e, t) {
    switch (e) {
      case "compositionend":
        return Cu(t);
      case "keypress":
        return t.which !== 32 ? null : (Nu = !0, wu);
      case "textInput":
        return e = t.data, e === wu && Nu ? null : e;
      default:
        return null;
    }
  }
  function sm(e, t) {
    if (Ii) return e === "compositionend" || !tl && Eu(e, t) ? (e = ku(), Mr = Ya = Yn = null, Ii = !1, e) : null;
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
        return Su && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var rm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function bu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!rm[e.type] : t === "textarea";
  }
  function Mu(e, t, n, s) {
    yn(s), t = Or(t, "onChange"), 0 < t.length && (n = new Ja("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var Ls = null, $s = null;
  function am(e) {
    Gu(e, 0);
  }
  function Pr(e) {
    var t = Ki(e);
    if (re(t)) return e;
  }
  function lm(e, t) {
    if (e === "change") return t;
  }
  var Tu = !1;
  if (m) {
    var nl;
    if (m) {
      var il = "oninput" in document;
      if (!il) {
        var _u = document.createElement("div");
        _u.setAttribute("oninput", "return;"), il = typeof _u.oninput == "function";
      }
      nl = il;
    } else nl = !1;
    Tu = nl && (!document.documentMode || 9 < document.documentMode);
  }
  function Au() {
    Ls && (Ls.detachEvent("onpropertychange", Pu), $s = Ls = null);
  }
  function Pu(e) {
    if (e.propertyName === "value" && Pr($s)) {
      var t = [];
      Mu(t, $s, e, rt(e)), Ze(am, t);
    }
  }
  function om(e, t, n) {
    e === "focusin" ? (Au(), Ls = t, $s = n, Ls.attachEvent("onpropertychange", Pu)) : e === "focusout" && Au();
  }
  function um(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Pr($s);
  }
  function cm(e, t) {
    if (e === "click") return Pr(t);
  }
  function dm(e, t) {
    if (e === "input" || e === "change") return Pr(t);
  }
  function hm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var dn = typeof Object.is == "function" ? Object.is : hm;
  function Rs(e, t) {
    if (dn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var l = n[s];
      if (!y.call(t, l) || !dn(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Lu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $u(e, t) {
    var n = Lu(e);
    e = 0;
    for (var s; n; ) {
      if (n.nodeType === 3) {
        if (s = e + n.textContent.length, e <= t && s >= t) return { node: n, offset: t - e };
        e = s;
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
      n = Lu(n);
    }
  }
  function Ru(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ru(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ou() {
    for (var e = window, t = ae(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ae(e.document);
    }
    return t;
  }
  function sl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function fm(e) {
    var t = Ou(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ru(n.ownerDocument.documentElement, n)) {
      if (s !== null && sl(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(s.start, l);
          s = s.end === void 0 ? u : Math.min(s.end, l), !e.extend && u > s && (l = s, s = u, u = l), l = $u(n, u);
          var f = $u(
            n,
            s
          );
          l && f && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > s ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var mm = m && "documentMode" in document && 11 >= document.documentMode, Di = null, rl = null, Os = null, al = !1;
  function Fu(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    al || Di == null || Di !== ae(s) || (s = Di, "selectionStart" in s && sl(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Os && Rs(Os, s) || (Os = s, s = Or(rl, "onSelect"), 0 < s.length && (t = new Ja("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = Di)));
  }
  function Lr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var zi = { animationend: Lr("Animation", "AnimationEnd"), animationiteration: Lr("Animation", "AnimationIteration"), animationstart: Lr("Animation", "AnimationStart"), transitionend: Lr("Transition", "TransitionEnd") }, ll = {}, Iu = {};
  m && (Iu = document.createElement("div").style, "AnimationEvent" in window || (delete zi.animationend.animation, delete zi.animationiteration.animation, delete zi.animationstart.animation), "TransitionEvent" in window || delete zi.transitionend.transition);
  function $r(e) {
    if (ll[e]) return ll[e];
    if (!zi[e]) return e;
    var t = zi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Iu) return ll[e] = t[n];
    return e;
  }
  var Du = $r("animationend"), zu = $r("animationiteration"), Bu = $r("animationstart"), Vu = $r("transitionend"), Ku = /* @__PURE__ */ new Map(), Uu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Jn(e, t) {
    Ku.set(e, t), h(t, [e]);
  }
  for (var ol = 0; ol < Uu.length; ol++) {
    var ul = Uu[ol], pm = ul.toLowerCase(), vm = ul[0].toUpperCase() + ul.slice(1);
    Jn(pm, "on" + vm);
  }
  Jn(Du, "onAnimationEnd"), Jn(zu, "onAnimationIteration"), Jn(Bu, "onAnimationStart"), Jn("dblclick", "onDoubleClick"), Jn("focusin", "onFocus"), Jn("focusout", "onBlur"), Jn(Vu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), km = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));
  function Hu(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, vr(s, t, void 0, e), e.currentTarget = null;
  }
  function Gu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], l = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var f = s.length - 1; 0 <= f; f--) {
          var k = s[f], S = k.instance, B = k.currentTarget;
          if (k = k.listener, S !== u && l.isPropagationStopped()) break e;
          Hu(l, k, B), u = S;
        }
        else for (f = 0; f < s.length; f++) {
          if (k = s[f], S = k.instance, B = k.currentTarget, k = k.listener, S !== u && l.isPropagationStopped()) break e;
          Hu(l, k, B), u = S;
        }
      }
    }
    if (mi) throw e = gs, mi = !1, gs = null, e;
  }
  function tt(e, t) {
    var n = t[kl];
    n === void 0 && (n = t[kl] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (Wu(t, e, 2, !1), n.add(s));
  }
  function cl(e, t, n) {
    var s = 0;
    t && (s |= 4), Wu(n, e, s, t);
  }
  var Rr = "_reactListening" + Math.random().toString(36).slice(2);
  function Is(e) {
    if (!e[Rr]) {
      e[Rr] = !0, d.forEach(function(n) {
        n !== "selectionchange" && (km.has(n) || cl(n, !1, e), cl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Rr] || (t[Rr] = !0, cl("selectionchange", !1, t));
    }
  }
  function Wu(e, t, n, s) {
    switch (vu(t)) {
      case 1:
        var l = Af;
        break;
      case 4:
        l = Pf;
        break;
      default:
        l = Wa;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ht || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), s ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function dl(e, t, n, s, l) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var f = s.tag;
      if (f === 3 || f === 4) {
        var k = s.stateNode.containerInfo;
        if (k === l || k.nodeType === 8 && k.parentNode === l) break;
        if (f === 4) for (f = s.return; f !== null; ) {
          var S = f.tag;
          if ((S === 3 || S === 4) && (S = f.stateNode.containerInfo, S === l || S.nodeType === 8 && S.parentNode === l)) return;
          f = f.return;
        }
        for (; k !== null; ) {
          if (f = vi(k), f === null) return;
          if (S = f.tag, S === 5 || S === 6) {
            s = u = f;
            continue e;
          }
          k = k.parentNode;
        }
      }
      s = s.return;
    }
    Ze(function() {
      var B = u, te = rt(n), ie = [];
      e: {
        var ee = Ku.get(e);
        if (ee !== void 0) {
          var fe = Ja, ke = e;
          switch (e) {
            case "keypress":
              if (Tr(n) === 0) break e;
            case "keydown":
            case "keyup":
              fe = Wf;
              break;
            case "focusin":
              ke = "focus", fe = qa;
              break;
            case "focusout":
              ke = "blur", fe = qa;
              break;
            case "beforeblur":
            case "afterblur":
              fe = qa;
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
              fe = gu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Rf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = Jf;
              break;
            case Du:
            case zu:
            case Bu:
              fe = If;
              break;
            case Vu:
              fe = Zf;
              break;
            case "scroll":
              fe = Lf;
              break;
            case "wheel":
              fe = em;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = zf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = xu;
          }
          var je = (t & 4) !== 0, ht = !je && e === "scroll", O = je ? ee !== null ? ee + "Capture" : null : ee;
          je = [];
          for (var C = B, I; C !== null; ) {
            I = C;
            var le = I.stateNode;
            if (I.tag === 5 && le !== null && (I = le, O !== null && (le = ct(C, O), le != null && je.push(Ds(C, le, I)))), ht) break;
            C = C.return;
          }
          0 < je.length && (ee = new fe(ee, ke, null, n, te), ie.push({ event: ee, listeners: je }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (ee = e === "mouseover" || e === "pointerover", fe = e === "mouseout" || e === "pointerout", ee && n !== Ge && (ke = n.relatedTarget || n.fromElement) && (vi(ke) || ke[Ln])) break e;
          if ((fe || ee) && (ee = te.window === te ? te : (ee = te.ownerDocument) ? ee.defaultView || ee.parentWindow : window, fe ? (ke = n.relatedTarget || n.toElement, fe = B, ke = ke ? vi(ke) : null, ke !== null && (ht = _n(ke), ke !== ht || ke.tag !== 5 && ke.tag !== 6) && (ke = null)) : (fe = null, ke = B), fe !== ke)) {
            if (je = gu, le = "onMouseLeave", O = "onMouseEnter", C = "mouse", (e === "pointerout" || e === "pointerover") && (je = xu, le = "onPointerLeave", O = "onPointerEnter", C = "pointer"), ht = fe == null ? ee : Ki(fe), I = ke == null ? ee : Ki(ke), ee = new je(le, C + "leave", fe, n, te), ee.target = ht, ee.relatedTarget = I, le = null, vi(te) === B && (je = new je(O, C + "enter", ke, n, te), je.target = I, je.relatedTarget = ht, le = je), ht = le, fe && ke) t: {
              for (je = fe, O = ke, C = 0, I = je; I; I = Bi(I)) C++;
              for (I = 0, le = O; le; le = Bi(le)) I++;
              for (; 0 < C - I; ) je = Bi(je), C--;
              for (; 0 < I - C; ) O = Bi(O), I--;
              for (; C--; ) {
                if (je === O || O !== null && je === O.alternate) break t;
                je = Bi(je), O = Bi(O);
              }
              je = null;
            }
            else je = null;
            fe !== null && Qu(ie, ee, fe, je, !1), ke !== null && ht !== null && Qu(ie, ht, ke, je, !0);
          }
        }
        e: {
          if (ee = B ? Ki(B) : window, fe = ee.nodeName && ee.nodeName.toLowerCase(), fe === "select" || fe === "input" && ee.type === "file") var Se = lm;
          else if (bu(ee)) if (Tu) Se = dm;
          else {
            Se = um;
            var Me = om;
          }
          else (fe = ee.nodeName) && fe.toLowerCase() === "input" && (ee.type === "checkbox" || ee.type === "radio") && (Se = cm);
          if (Se && (Se = Se(e, B))) {
            Mu(ie, Se, n, te);
            break e;
          }
          Me && Me(e, ee, B), e === "focusout" && (Me = ee._wrapperState) && Me.controlled && ee.type === "number" && Ye(ee, "number", ee.value);
        }
        switch (Me = B ? Ki(B) : window, e) {
          case "focusin":
            (bu(Me) || Me.contentEditable === "true") && (Di = Me, rl = B, Os = null);
            break;
          case "focusout":
            Os = rl = Di = null;
            break;
          case "mousedown":
            al = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            al = !1, Fu(ie, n, te);
            break;
          case "selectionchange":
            if (mm) break;
          case "keydown":
          case "keyup":
            Fu(ie, n, te);
        }
        var Te;
        if (tl) e: {
          switch (e) {
            case "compositionstart":
              var Pe = "onCompositionStart";
              break e;
            case "compositionend":
              Pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Pe = "onCompositionUpdate";
              break e;
          }
          Pe = void 0;
        }
        else Ii ? Eu(e, n) && (Pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (Su && n.locale !== "ko" && (Ii || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Ii && (Te = ku()) : (Yn = te, Ya = "value" in Yn ? Yn.value : Yn.textContent, Ii = !0)), Me = Or(B, Pe), 0 < Me.length && (Pe = new ju(Pe, e, null, n, te), ie.push({ event: Pe, listeners: Me }), Te ? Pe.data = Te : (Te = Cu(n), Te !== null && (Pe.data = Te)))), (Te = nm ? im(e, n) : sm(e, n)) && (B = Or(B, "onBeforeInput"), 0 < B.length && (te = new ju("onBeforeInput", "beforeinput", null, n, te), ie.push({ event: te, listeners: B }), te.data = Te));
      }
      Gu(ie, t);
    });
  }
  function Ds(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Or(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = ct(e, n), u != null && s.unshift(Ds(e, u, l)), u = ct(e, t), u != null && s.push(Ds(e, u, l))), e = e.return;
    }
    return s;
  }
  function Bi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qu(e, t, n, s, l) {
    for (var u = t._reactName, f = []; n !== null && n !== s; ) {
      var k = n, S = k.alternate, B = k.stateNode;
      if (S !== null && S === s) break;
      k.tag === 5 && B !== null && (k = B, l ? (S = ct(n, u), S != null && f.unshift(Ds(n, S, k))) : l || (S = ct(n, u), S != null && f.push(Ds(n, S, k)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var ym = /\r\n?/g, gm = /\u0000|\uFFFD/g;
  function Yu(e) {
    return (typeof e == "string" ? e : "" + e).replace(ym, `
`).replace(gm, "");
  }
  function Fr(e, t, n) {
    if (t = Yu(t), Yu(e) !== t && n) throw Error(o(425));
  }
  function Ir() {
  }
  var hl = null, fl = null;
  function ml(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var pl = typeof setTimeout == "function" ? setTimeout : void 0, jm = typeof clearTimeout == "function" ? clearTimeout : void 0, Ju = typeof Promise == "function" ? Promise : void 0, xm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ju < "u" ? function(e) {
    return Ju.resolve(null).then(e).catch(Sm);
  } : pl;
  function Sm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function vl(e, t) {
    var n = t, s = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (s === 0) {
          e.removeChild(l), Ts(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = l;
    } while (n);
    Ts(t);
  }
  function Xn(e) {
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
  function Xu(e) {
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
  var Vi = Math.random().toString(36).slice(2), xn = "__reactFiber$" + Vi, zs = "__reactProps$" + Vi, Ln = "__reactContainer$" + Vi, kl = "__reactEvents$" + Vi, wm = "__reactListeners$" + Vi, Nm = "__reactHandles$" + Vi;
  function vi(e) {
    var t = e[xn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ln] || n[xn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Xu(e); e !== null; ) {
          if (n = e[xn]) return n;
          e = Xu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Bs(e) {
    return e = e[xn] || e[Ln], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ki(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Dr(e) {
    return e[zs] || null;
  }
  var yl = [], Ui = -1;
  function Zn(e) {
    return { current: e };
  }
  function nt(e) {
    0 > Ui || (e.current = yl[Ui], yl[Ui] = null, Ui--);
  }
  function qe(e, t) {
    Ui++, yl[Ui] = e.current, e.current = t;
  }
  var qn = {}, Ct = Zn(qn), Ot = Zn(!1), ki = qn;
  function Hi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return qn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ft(e) {
    return e = e.childContextTypes, e != null;
  }
  function zr() {
    nt(Ot), nt(Ct);
  }
  function Zu(e, t, n) {
    if (Ct.current !== qn) throw Error(o(168));
    qe(Ct, t), qe(Ot, n);
  }
  function qu(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(o(108, V(e) || "Unknown", l));
    return Q({}, n, s);
  }
  function Br(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qn, ki = Ct.current, qe(Ct, e), qe(Ot, Ot.current), !0;
  }
  function ec(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    n ? (e = qu(e, t, ki), s.__reactInternalMemoizedMergedChildContext = e, nt(Ot), nt(Ct), qe(Ct, e)) : nt(Ot), qe(Ot, n);
  }
  var $n = null, Vr = !1, gl = !1;
  function tc(e) {
    $n === null ? $n = [e] : $n.push(e);
  }
  function Em(e) {
    Vr = !0, tc(e);
  }
  function ei() {
    if (!gl && $n !== null) {
      gl = !0;
      var e = 0, t = Qe;
      try {
        var n = $n;
        for (Qe = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        $n = null, Vr = !1;
      } catch (l) {
        throw $n !== null && ($n = $n.slice(e + 1)), gr(Rt, ei), l;
      } finally {
        Qe = t, gl = !1;
      }
    }
    return null;
  }
  var Gi = [], Wi = 0, Kr = null, Ur = 0, nn = [], sn = 0, yi = null, Rn = 1, On = "";
  function gi(e, t) {
    Gi[Wi++] = Ur, Gi[Wi++] = Kr, Kr = e, Ur = t;
  }
  function nc(e, t, n) {
    nn[sn++] = Rn, nn[sn++] = On, nn[sn++] = yi, yi = e;
    var s = Rn;
    e = On;
    var l = 32 - cn(s) - 1;
    s &= ~(1 << l), n += 1;
    var u = 32 - cn(t) + l;
    if (30 < u) {
      var f = l - l % 5;
      u = (s & (1 << f) - 1).toString(32), s >>= f, l -= f, Rn = 1 << 32 - cn(t) + l | n << l | s, On = u + e;
    } else Rn = 1 << u | n << l | s, On = e;
  }
  function jl(e) {
    e.return !== null && (gi(e, 1), nc(e, 1, 0));
  }
  function xl(e) {
    for (; e === Kr; ) Kr = Gi[--Wi], Gi[Wi] = null, Ur = Gi[--Wi], Gi[Wi] = null;
    for (; e === yi; ) yi = nn[--sn], nn[sn] = null, On = nn[--sn], nn[sn] = null, Rn = nn[--sn], nn[sn] = null;
  }
  var Wt = null, Qt = null, st = !1, hn = null;
  function ic(e, t) {
    var n = on(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function sc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Wt = e, Qt = Xn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Wt = e, Qt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = yi !== null ? { id: Rn, overflow: On } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = on(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Wt = e, Qt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Sl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function wl(e) {
    if (st) {
      var t = Qt;
      if (t) {
        var n = t;
        if (!sc(e, t)) {
          if (Sl(e)) throw Error(o(418));
          t = Xn(n.nextSibling);
          var s = Wt;
          t && sc(e, t) ? ic(s, n) : (e.flags = e.flags & -4097 | 2, st = !1, Wt = e);
        }
      } else {
        if (Sl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, st = !1, Wt = e;
      }
    }
  }
  function rc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Wt = e;
  }
  function Hr(e) {
    if (e !== Wt) return !1;
    if (!st) return rc(e), st = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ml(e.type, e.memoizedProps)), t && (t = Qt)) {
      if (Sl(e)) throw ac(), Error(o(418));
      for (; t; ) ic(e, t), t = Xn(t.nextSibling);
    }
    if (rc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Qt = Xn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Qt = null;
      }
    } else Qt = Wt ? Xn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ac() {
    for (var e = Qt; e; ) e = Xn(e.nextSibling);
  }
  function Qi() {
    Qt = Wt = null, st = !1;
  }
  function Nl(e) {
    hn === null ? hn = [e] : hn.push(e);
  }
  var Cm = H.ReactCurrentBatchConfig;
  function Vs(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(o(147, e));
        var l = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(f) {
          var k = l.refs;
          f === null ? delete k[u] : k[u] = f;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Gr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function lc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function oc(e) {
    function t(O, C) {
      if (e) {
        var I = O.deletions;
        I === null ? (O.deletions = [C], O.flags |= 16) : I.push(C);
      }
    }
    function n(O, C) {
      if (!e) return null;
      for (; C !== null; ) t(O, C), C = C.sibling;
      return null;
    }
    function s(O, C) {
      for (O = /* @__PURE__ */ new Map(); C !== null; ) C.key !== null ? O.set(C.key, C) : O.set(C.index, C), C = C.sibling;
      return O;
    }
    function l(O, C) {
      return O = oi(O, C), O.index = 0, O.sibling = null, O;
    }
    function u(O, C, I) {
      return O.index = I, e ? (I = O.alternate, I !== null ? (I = I.index, I < C ? (O.flags |= 2, C) : I) : (O.flags |= 2, C)) : (O.flags |= 1048576, C);
    }
    function f(O) {
      return e && O.alternate === null && (O.flags |= 2), O;
    }
    function k(O, C, I, le) {
      return C === null || C.tag !== 6 ? (C = vo(I, O.mode, le), C.return = O, C) : (C = l(C, I), C.return = O, C);
    }
    function S(O, C, I, le) {
      var Se = I.type;
      return Se === F ? te(O, C, I.props.children, le, I.key) : C !== null && (C.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ee && lc(Se) === C.type) ? (le = l(C, I.props), le.ref = Vs(O, C, I), le.return = O, le) : (le = va(I.type, I.key, I.props, null, O.mode, le), le.ref = Vs(O, C, I), le.return = O, le);
    }
    function B(O, C, I, le) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== I.containerInfo || C.stateNode.implementation !== I.implementation ? (C = ko(I, O.mode, le), C.return = O, C) : (C = l(C, I.children || []), C.return = O, C);
    }
    function te(O, C, I, le, Se) {
      return C === null || C.tag !== 7 ? (C = bi(I, O.mode, le, Se), C.return = O, C) : (C = l(C, I), C.return = O, C);
    }
    function ie(O, C, I) {
      if (typeof C == "string" && C !== "" || typeof C == "number") return C = vo("" + C, O.mode, I), C.return = O, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case G:
            return I = va(C.type, C.key, C.props, null, O.mode, I), I.ref = Vs(O, null, C), I.return = O, I;
          case w:
            return C = ko(C, O.mode, I), C.return = O, C;
          case Ee:
            var le = C._init;
            return ie(O, le(C._payload), I);
        }
        if (We(C) || Y(C)) return C = bi(C, O.mode, I, null), C.return = O, C;
        Gr(O, C);
      }
      return null;
    }
    function ee(O, C, I, le) {
      var Se = C !== null ? C.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return Se !== null ? null : k(O, C, "" + I, le);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case G:
            return I.key === Se ? S(O, C, I, le) : null;
          case w:
            return I.key === Se ? B(O, C, I, le) : null;
          case Ee:
            return Se = I._init, ee(
              O,
              C,
              Se(I._payload),
              le
            );
        }
        if (We(I) || Y(I)) return Se !== null ? null : te(O, C, I, le, null);
        Gr(O, I);
      }
      return null;
    }
    function fe(O, C, I, le, Se) {
      if (typeof le == "string" && le !== "" || typeof le == "number") return O = O.get(I) || null, k(C, O, "" + le, Se);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case G:
            return O = O.get(le.key === null ? I : le.key) || null, S(C, O, le, Se);
          case w:
            return O = O.get(le.key === null ? I : le.key) || null, B(C, O, le, Se);
          case Ee:
            var Me = le._init;
            return fe(O, C, I, Me(le._payload), Se);
        }
        if (We(le) || Y(le)) return O = O.get(I) || null, te(C, O, le, Se, null);
        Gr(C, le);
      }
      return null;
    }
    function ke(O, C, I, le) {
      for (var Se = null, Me = null, Te = C, Pe = C = 0, jt = null; Te !== null && Pe < I.length; Pe++) {
        Te.index > Pe ? (jt = Te, Te = null) : jt = Te.sibling;
        var Ke = ee(O, Te, I[Pe], le);
        if (Ke === null) {
          Te === null && (Te = jt);
          break;
        }
        e && Te && Ke.alternate === null && t(O, Te), C = u(Ke, C, Pe), Me === null ? Se = Ke : Me.sibling = Ke, Me = Ke, Te = jt;
      }
      if (Pe === I.length) return n(O, Te), st && gi(O, Pe), Se;
      if (Te === null) {
        for (; Pe < I.length; Pe++) Te = ie(O, I[Pe], le), Te !== null && (C = u(Te, C, Pe), Me === null ? Se = Te : Me.sibling = Te, Me = Te);
        return st && gi(O, Pe), Se;
      }
      for (Te = s(O, Te); Pe < I.length; Pe++) jt = fe(Te, O, Pe, I[Pe], le), jt !== null && (e && jt.alternate !== null && Te.delete(jt.key === null ? Pe : jt.key), C = u(jt, C, Pe), Me === null ? Se = jt : Me.sibling = jt, Me = jt);
      return e && Te.forEach(function(ui) {
        return t(O, ui);
      }), st && gi(O, Pe), Se;
    }
    function je(O, C, I, le) {
      var Se = Y(I);
      if (typeof Se != "function") throw Error(o(150));
      if (I = Se.call(I), I == null) throw Error(o(151));
      for (var Me = Se = null, Te = C, Pe = C = 0, jt = null, Ke = I.next(); Te !== null && !Ke.done; Pe++, Ke = I.next()) {
        Te.index > Pe ? (jt = Te, Te = null) : jt = Te.sibling;
        var ui = ee(O, Te, Ke.value, le);
        if (ui === null) {
          Te === null && (Te = jt);
          break;
        }
        e && Te && ui.alternate === null && t(O, Te), C = u(ui, C, Pe), Me === null ? Se = ui : Me.sibling = ui, Me = ui, Te = jt;
      }
      if (Ke.done) return n(
        O,
        Te
      ), st && gi(O, Pe), Se;
      if (Te === null) {
        for (; !Ke.done; Pe++, Ke = I.next()) Ke = ie(O, Ke.value, le), Ke !== null && (C = u(Ke, C, Pe), Me === null ? Se = Ke : Me.sibling = Ke, Me = Ke);
        return st && gi(O, Pe), Se;
      }
      for (Te = s(O, Te); !Ke.done; Pe++, Ke = I.next()) Ke = fe(Te, O, Pe, Ke.value, le), Ke !== null && (e && Ke.alternate !== null && Te.delete(Ke.key === null ? Pe : Ke.key), C = u(Ke, C, Pe), Me === null ? Se = Ke : Me.sibling = Ke, Me = Ke);
      return e && Te.forEach(function(rp) {
        return t(O, rp);
      }), st && gi(O, Pe), Se;
    }
    function ht(O, C, I, le) {
      if (typeof I == "object" && I !== null && I.type === F && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case G:
            e: {
              for (var Se = I.key, Me = C; Me !== null; ) {
                if (Me.key === Se) {
                  if (Se = I.type, Se === F) {
                    if (Me.tag === 7) {
                      n(O, Me.sibling), C = l(Me, I.props.children), C.return = O, O = C;
                      break e;
                    }
                  } else if (Me.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ee && lc(Se) === Me.type) {
                    n(O, Me.sibling), C = l(Me, I.props), C.ref = Vs(O, Me, I), C.return = O, O = C;
                    break e;
                  }
                  n(O, Me);
                  break;
                } else t(O, Me);
                Me = Me.sibling;
              }
              I.type === F ? (C = bi(I.props.children, O.mode, le, I.key), C.return = O, O = C) : (le = va(I.type, I.key, I.props, null, O.mode, le), le.ref = Vs(O, C, I), le.return = O, O = le);
            }
            return f(O);
          case w:
            e: {
              for (Me = I.key; C !== null; ) {
                if (C.key === Me) if (C.tag === 4 && C.stateNode.containerInfo === I.containerInfo && C.stateNode.implementation === I.implementation) {
                  n(O, C.sibling), C = l(C, I.children || []), C.return = O, O = C;
                  break e;
                } else {
                  n(O, C);
                  break;
                }
                else t(O, C);
                C = C.sibling;
              }
              C = ko(I, O.mode, le), C.return = O, O = C;
            }
            return f(O);
          case Ee:
            return Me = I._init, ht(O, C, Me(I._payload), le);
        }
        if (We(I)) return ke(O, C, I, le);
        if (Y(I)) return je(O, C, I, le);
        Gr(O, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, C !== null && C.tag === 6 ? (n(O, C.sibling), C = l(C, I), C.return = O, O = C) : (n(O, C), C = vo(I, O.mode, le), C.return = O, O = C), f(O)) : n(O, C);
    }
    return ht;
  }
  var Yi = oc(!0), uc = oc(!1), Wr = Zn(null), Qr = null, Ji = null, El = null;
  function Cl() {
    El = Ji = Qr = null;
  }
  function bl(e) {
    var t = Wr.current;
    nt(Wr), e._currentValue = t;
  }
  function Ml(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Xi(e, t) {
    Qr = e, El = Ji = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (It = !0), e.firstContext = null);
  }
  function rn(e) {
    var t = e._currentValue;
    if (El !== e) if (e = { context: e, memoizedValue: t, next: null }, Ji === null) {
      if (Qr === null) throw Error(o(308));
      Ji = e, Qr.dependencies = { lanes: 0, firstContext: e };
    } else Ji = Ji.next = e;
    return t;
  }
  var ji = null;
  function Tl(e) {
    ji === null ? ji = [e] : ji.push(e);
  }
  function cc(e, t, n, s) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Tl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Fn(e, s);
  }
  function Fn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var ti = !1;
  function _l(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function dc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function In(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ni(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Be & 2) !== 0) {
      var l = s.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), s.pending = t, Fn(e, n);
    }
    return l = s.interleaved, l === null ? (t.next = t, Tl(s)) : (t.next = l.next, l.next = t), s.interleaved = t, Fn(e, n);
  }
  function Yr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Ua(e, n);
    }
  }
  function hc(e, t) {
    var n = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, n === s)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? l = u = f : u = u.next = f, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = { baseState: s.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: s.shared, effects: s.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Jr(e, t, n, s) {
    var l = e.updateQueue;
    ti = !1;
    var u = l.firstBaseUpdate, f = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var S = k, B = S.next;
      S.next = null, f === null ? u = B : f.next = B, f = S;
      var te = e.alternate;
      te !== null && (te = te.updateQueue, k = te.lastBaseUpdate, k !== f && (k === null ? te.firstBaseUpdate = B : k.next = B, te.lastBaseUpdate = S));
    }
    if (u !== null) {
      var ie = l.baseState;
      f = 0, te = B = S = null, k = u;
      do {
        var ee = k.lane, fe = k.eventTime;
        if ((s & ee) === ee) {
          te !== null && (te = te.next = {
            eventTime: fe,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ke = e, je = k;
            switch (ee = t, fe = n, je.tag) {
              case 1:
                if (ke = je.payload, typeof ke == "function") {
                  ie = ke.call(fe, ie, ee);
                  break e;
                }
                ie = ke;
                break e;
              case 3:
                ke.flags = ke.flags & -65537 | 128;
              case 0:
                if (ke = je.payload, ee = typeof ke == "function" ? ke.call(fe, ie, ee) : ke, ee == null) break e;
                ie = Q({}, ie, ee);
                break e;
              case 2:
                ti = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, ee = l.effects, ee === null ? l.effects = [k] : ee.push(k));
        } else fe = { eventTime: fe, lane: ee, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, te === null ? (B = te = fe, S = ie) : te = te.next = fe, f |= ee;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          ee = k, k = ee.next, ee.next = null, l.lastBaseUpdate = ee, l.shared.pending = null;
        }
      } while (!0);
      if (te === null && (S = ie), l.baseState = S, l.firstBaseUpdate = B, l.lastBaseUpdate = te, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          f |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      wi |= f, e.lanes = f, e.memoizedState = ie;
    }
  }
  function fc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], l = s.callback;
      if (l !== null) {
        if (s.callback = null, s = n, typeof l != "function") throw Error(o(191, l));
        l.call(s);
      }
    }
  }
  var Ks = {}, Sn = Zn(Ks), Us = Zn(Ks), Hs = Zn(Ks);
  function xi(e) {
    if (e === Ks) throw Error(o(174));
    return e;
  }
  function Al(e, t) {
    switch (qe(Hs, t), qe(Us, e), qe(Sn, Ks), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Xt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xt(t, e);
    }
    nt(Sn), qe(Sn, t);
  }
  function Zi() {
    nt(Sn), nt(Us), nt(Hs);
  }
  function mc(e) {
    xi(Hs.current);
    var t = xi(Sn.current), n = Xt(t, e.type);
    t !== n && (qe(Us, e), qe(Sn, n));
  }
  function Pl(e) {
    Us.current === e && (nt(Sn), nt(Us));
  }
  var at = Zn(0);
  function Xr(e) {
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
  var Ll = [];
  function $l() {
    for (var e = 0; e < Ll.length; e++) Ll[e]._workInProgressVersionPrimary = null;
    Ll.length = 0;
  }
  var Zr = H.ReactCurrentDispatcher, Rl = H.ReactCurrentBatchConfig, Si = 0, lt = null, pt = null, yt = null, qr = !1, Gs = !1, Ws = 0, bm = 0;
  function bt() {
    throw Error(o(321));
  }
  function Ol(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!dn(e[n], t[n])) return !1;
    return !0;
  }
  function Fl(e, t, n, s, l, u) {
    if (Si = u, lt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Zr.current = e === null || e.memoizedState === null ? Am : Pm, e = n(s, l), Gs) {
      u = 0;
      do {
        if (Gs = !1, Ws = 0, 25 <= u) throw Error(o(301));
        u += 1, yt = pt = null, t.updateQueue = null, Zr.current = Lm, e = n(s, l);
      } while (Gs);
    }
    if (Zr.current = na, t = pt !== null && pt.next !== null, Si = 0, yt = pt = lt = null, qr = !1, t) throw Error(o(300));
    return e;
  }
  function Il() {
    var e = Ws !== 0;
    return Ws = 0, e;
  }
  function wn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return yt === null ? lt.memoizedState = yt = e : yt = yt.next = e, yt;
  }
  function an() {
    if (pt === null) {
      var e = lt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pt.next;
    var t = yt === null ? lt.memoizedState : yt.next;
    if (t !== null) yt = t, pt = e;
    else {
      if (e === null) throw Error(o(310));
      pt = e, e = { memoizedState: pt.memoizedState, baseState: pt.baseState, baseQueue: pt.baseQueue, queue: pt.queue, next: null }, yt === null ? lt.memoizedState = yt = e : yt = yt.next = e;
    }
    return yt;
  }
  function Qs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Dl(e) {
    var t = an(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var s = pt, l = s.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var f = l.next;
        l.next = u.next, u.next = f;
      }
      s.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, s = s.baseState;
      var k = f = null, S = null, B = u;
      do {
        var te = B.lane;
        if ((Si & te) === te) S !== null && (S = S.next = { lane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), s = B.hasEagerState ? B.eagerState : e(s, B.action);
        else {
          var ie = {
            lane: te,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          S === null ? (k = S = ie, f = s) : S = S.next = ie, lt.lanes |= te, wi |= te;
        }
        B = B.next;
      } while (B !== null && B !== u);
      S === null ? f = s : S.next = k, dn(s, t.memoizedState) || (It = !0), t.memoizedState = s, t.baseState = f, t.baseQueue = S, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, lt.lanes |= u, wi |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function zl(e) {
    var t = an(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = l = l.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== l);
      dn(u, t.memoizedState) || (It = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, s];
  }
  function pc() {
  }
  function vc(e, t) {
    var n = lt, s = an(), l = t(), u = !dn(s.memoizedState, l);
    if (u && (s.memoizedState = l, It = !0), s = s.queue, Bl(gc.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || yt !== null && yt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ys(9, yc.bind(null, n, s, l, t), void 0, null), gt === null) throw Error(o(349));
      (Si & 30) !== 0 || kc(n, t, l);
    }
    return l;
  }
  function kc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function yc(e, t, n, s) {
    t.value = n, t.getSnapshot = s, jc(t) && xc(e);
  }
  function gc(e, t, n) {
    return n(function() {
      jc(t) && xc(e);
    });
  }
  function jc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dn(e, n);
    } catch {
      return !0;
    }
  }
  function xc(e) {
    var t = Fn(e, 1);
    t !== null && vn(t, e, 1, -1);
  }
  function Sc(e) {
    var t = wn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qs, lastRenderedState: e }, t.queue = e, e = e.dispatch = _m.bind(null, lt, e), [t.memoizedState, e];
  }
  function Ys(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function wc() {
    return an().memoizedState;
  }
  function ea(e, t, n, s) {
    var l = wn();
    lt.flags |= e, l.memoizedState = Ys(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function ta(e, t, n, s) {
    var l = an();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (pt !== null) {
      var f = pt.memoizedState;
      if (u = f.destroy, s !== null && Ol(s, f.deps)) {
        l.memoizedState = Ys(t, n, u, s);
        return;
      }
    }
    lt.flags |= e, l.memoizedState = Ys(1 | t, n, u, s);
  }
  function Nc(e, t) {
    return ea(8390656, 8, e, t);
  }
  function Bl(e, t) {
    return ta(2048, 8, e, t);
  }
  function Ec(e, t) {
    return ta(4, 2, e, t);
  }
  function Cc(e, t) {
    return ta(4, 4, e, t);
  }
  function bc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Mc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ta(4, 4, bc.bind(null, t, e), n);
  }
  function Vl() {
  }
  function Tc(e, t) {
    var n = an();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ol(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function _c(e, t) {
    var n = an();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ol(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ac(e, t, n) {
    return (Si & 21) === 0 ? (e.baseState && (e.baseState = !1, It = !0), e.memoizedState = n) : (dn(n, t) || (n = lu(), lt.lanes |= n, wi |= n, e.baseState = !0), t);
  }
  function Mm(e, t) {
    var n = Qe;
    Qe = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = Rl.transition;
    Rl.transition = {};
    try {
      e(!1), t();
    } finally {
      Qe = n, Rl.transition = s;
    }
  }
  function Pc() {
    return an().memoizedState;
  }
  function Tm(e, t, n) {
    var s = ai(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Lc(e)) $c(t, n);
    else if (n = cc(e, t, n, s), n !== null) {
      var l = Pt();
      vn(n, e, s, l), Rc(n, t, s);
    }
  }
  function _m(e, t, n) {
    var s = ai(e), l = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Lc(e)) $c(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var f = t.lastRenderedState, k = u(f, n);
        if (l.hasEagerState = !0, l.eagerState = k, dn(k, f)) {
          var S = t.interleaved;
          S === null ? (l.next = l, Tl(t)) : (l.next = S.next, S.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = cc(e, t, l, s), n !== null && (l = Pt(), vn(n, e, s, l), Rc(n, t, s));
    }
  }
  function Lc(e) {
    var t = e.alternate;
    return e === lt || t !== null && t === lt;
  }
  function $c(e, t) {
    Gs = qr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Rc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Ua(e, n);
    }
  }
  var na = { readContext: rn, useCallback: bt, useContext: bt, useEffect: bt, useImperativeHandle: bt, useInsertionEffect: bt, useLayoutEffect: bt, useMemo: bt, useReducer: bt, useRef: bt, useState: bt, useDebugValue: bt, useDeferredValue: bt, useTransition: bt, useMutableSource: bt, useSyncExternalStore: bt, useId: bt, unstable_isNewReconciler: !1 }, Am = { readContext: rn, useCallback: function(e, t) {
    return wn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: rn, useEffect: Nc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ea(
      4194308,
      4,
      bc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ea(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ea(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = wn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = wn();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Tm.bind(null, lt, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = wn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Sc, useDebugValue: Vl, useDeferredValue: function(e) {
    return wn().memoizedState = e;
  }, useTransition: function() {
    var e = Sc(!1), t = e[0];
    return e = Mm.bind(null, e[1]), wn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = lt, l = wn();
    if (st) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), gt === null) throw Error(o(349));
      (Si & 30) !== 0 || kc(s, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, Nc(gc.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, Ys(9, yc.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = wn(), t = gt.identifierPrefix;
    if (st) {
      var n = On, s = Rn;
      n = (s & ~(1 << 32 - cn(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ws++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = bm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Pm = {
    readContext: rn,
    useCallback: Tc,
    useContext: rn,
    useEffect: Bl,
    useImperativeHandle: Mc,
    useInsertionEffect: Ec,
    useLayoutEffect: Cc,
    useMemo: _c,
    useReducer: Dl,
    useRef: wc,
    useState: function() {
      return Dl(Qs);
    },
    useDebugValue: Vl,
    useDeferredValue: function(e) {
      var t = an();
      return Ac(t, pt.memoizedState, e);
    },
    useTransition: function() {
      var e = Dl(Qs)[0], t = an().memoizedState;
      return [e, t];
    },
    useMutableSource: pc,
    useSyncExternalStore: vc,
    useId: Pc,
    unstable_isNewReconciler: !1
  }, Lm = { readContext: rn, useCallback: Tc, useContext: rn, useEffect: Bl, useImperativeHandle: Mc, useInsertionEffect: Ec, useLayoutEffect: Cc, useMemo: _c, useReducer: zl, useRef: wc, useState: function() {
    return zl(Qs);
  }, useDebugValue: Vl, useDeferredValue: function(e) {
    var t = an();
    return pt === null ? t.memoizedState = e : Ac(t, pt.memoizedState, e);
  }, useTransition: function() {
    var e = zl(Qs)[0], t = an().memoizedState;
    return [e, t];
  }, useMutableSource: pc, useSyncExternalStore: vc, useId: Pc, unstable_isNewReconciler: !1 };
  function fn(e, t) {
    if (e && e.defaultProps) {
      t = Q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Kl(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ia = { isMounted: function(e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = Pt(), l = ai(e), u = In(s, l);
    u.payload = t, n != null && (u.callback = n), t = ni(e, u, l), t !== null && (vn(t, e, l, s), Yr(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = Pt(), l = ai(e), u = In(s, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = ni(e, u, l), t !== null && (vn(t, e, l, s), Yr(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Pt(), s = ai(e), l = In(n, s);
    l.tag = 2, t != null && (l.callback = t), t = ni(e, l, s), t !== null && (vn(t, e, s, n), Yr(t, e, s));
  } };
  function Oc(e, t, n, s, l, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Rs(n, s) || !Rs(l, u) : !0;
  }
  function Fc(e, t, n) {
    var s = !1, l = qn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = rn(u) : (l = Ft(t) ? ki : Ct.current, s = t.contextTypes, u = (s = s != null) ? Hi(e, l) : qn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ia, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Ic(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && ia.enqueueReplaceState(t, t.state, null);
  }
  function Ul(e, t, n, s) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, _l(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = rn(u) : (u = Ft(t) ? ki : Ct.current, l.context = Hi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Kl(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ia.enqueueReplaceState(l, l.state, null), Jr(e, n, l, s), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function qi(e, t) {
    try {
      var n = "", s = t;
      do
        n += se(s), s = s.return;
      while (s);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Hl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Gl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var $m = typeof WeakMap == "function" ? WeakMap : Map;
  function Dc(e, t, n) {
    n = In(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      ca || (ca = !0, lo = s), Gl(e, t);
    }, n;
  }
  function zc(e, t, n) {
    n = In(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      n.payload = function() {
        return s(l);
      }, n.callback = function() {
        Gl(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Gl(e, t), typeof s != "function" && (si === null ? si = /* @__PURE__ */ new Set([this]) : si.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function Bc(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new $m();
      var l = /* @__PURE__ */ new Set();
      s.set(t, l);
    } else l = s.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), s.set(t, l));
    l.has(n) || (l.add(n), e = Qm.bind(null, e, t, n), t.then(e, e));
  }
  function Vc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Kc(e, t, n, s, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = In(-1, 1), t.tag = 2, ni(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Rm = H.ReactCurrentOwner, It = !1;
  function At(e, t, n, s) {
    t.child = e === null ? uc(t, null, n, s) : Yi(t, e.child, n, s);
  }
  function Uc(e, t, n, s, l) {
    n = n.render;
    var u = t.ref;
    return Xi(t, l), s = Fl(e, t, n, s, u, l), n = Il(), e !== null && !It ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dn(e, t, l)) : (st && n && jl(t), t.flags |= 1, At(e, t, s, l), t.child);
  }
  function Hc(e, t, n, s, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !po(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Gc(e, t, u, s, l)) : (e = va(n.type, null, s, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Rs, n(f, s) && e.ref === t.ref) return Dn(e, t, l);
    }
    return t.flags |= 1, e = oi(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Gc(e, t, n, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Rs(u, s) && e.ref === t.ref) if (It = !1, t.pendingProps = s = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (It = !0);
      else return t.lanes = e.lanes, Dn(e, t, l);
    }
    return Wl(e, t, n, s, l);
  }
  function Wc(e, t, n) {
    var s = t.pendingProps, l = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(ts, Yt), Yt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, qe(ts, Yt), Yt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, qe(ts, Yt), Yt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, qe(ts, Yt), Yt |= s;
    return At(e, t, l, n), t.child;
  }
  function Qc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Wl(e, t, n, s, l) {
    var u = Ft(n) ? ki : Ct.current;
    return u = Hi(t, u), Xi(t, l), n = Fl(e, t, n, s, u, l), s = Il(), e !== null && !It ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dn(e, t, l)) : (st && s && jl(t), t.flags |= 1, At(e, t, n, l), t.child);
  }
  function Yc(e, t, n, s, l) {
    if (Ft(n)) {
      var u = !0;
      Br(t);
    } else u = !1;
    if (Xi(t, l), t.stateNode === null) ra(e, t), Fc(t, n, s), Ul(t, n, s, l), s = !0;
    else if (e === null) {
      var f = t.stateNode, k = t.memoizedProps;
      f.props = k;
      var S = f.context, B = n.contextType;
      typeof B == "object" && B !== null ? B = rn(B) : (B = Ft(n) ? ki : Ct.current, B = Hi(t, B));
      var te = n.getDerivedStateFromProps, ie = typeof te == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      ie || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (k !== s || S !== B) && Ic(t, f, s, B), ti = !1;
      var ee = t.memoizedState;
      f.state = ee, Jr(t, s, f, l), S = t.memoizedState, k !== s || ee !== S || Ot.current || ti ? (typeof te == "function" && (Kl(t, n, te, s), S = t.memoizedState), (k = ti || Oc(t, n, k, s, ee, S, B)) ? (ie || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = S), f.props = s, f.state = S, f.context = B, s = k) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      f = t.stateNode, dc(e, t), k = t.memoizedProps, B = t.type === t.elementType ? k : fn(t.type, k), f.props = B, ie = t.pendingProps, ee = f.context, S = n.contextType, typeof S == "object" && S !== null ? S = rn(S) : (S = Ft(n) ? ki : Ct.current, S = Hi(t, S));
      var fe = n.getDerivedStateFromProps;
      (te = typeof fe == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (k !== ie || ee !== S) && Ic(t, f, s, S), ti = !1, ee = t.memoizedState, f.state = ee, Jr(t, s, f, l);
      var ke = t.memoizedState;
      k !== ie || ee !== ke || Ot.current || ti ? (typeof fe == "function" && (Kl(t, n, fe, s), ke = t.memoizedState), (B = ti || Oc(t, n, B, s, ee, ke, S) || !1) ? (te || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(s, ke, S), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(s, ke, S)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || k === e.memoizedProps && ee === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && ee === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = ke), f.props = s, f.state = ke, f.context = S, s = B) : (typeof f.componentDidUpdate != "function" || k === e.memoizedProps && ee === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && ee === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Ql(e, t, n, s, u, l);
  }
  function Ql(e, t, n, s, l, u) {
    Qc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!s && !f) return l && ec(t, n, !1), Dn(e, t, u);
    s = t.stateNode, Rm.current = t;
    var k = f && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && f ? (t.child = Yi(t, e.child, null, u), t.child = Yi(t, null, k, u)) : At(e, t, k, u), t.memoizedState = s.state, l && ec(t, n, !0), t.child;
  }
  function Jc(e) {
    var t = e.stateNode;
    t.pendingContext ? Zu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zu(e, t.context, !1), Al(e, t.containerInfo);
  }
  function Xc(e, t, n, s, l) {
    return Qi(), Nl(l), t.flags |= 256, At(e, t, n, s), t.child;
  }
  var Yl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zc(e, t, n) {
    var s = t.pendingProps, l = at.current, u = !1, f = (t.flags & 128) !== 0, k;
    if ((k = f) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), qe(at, l & 1), e === null)
      return wl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, f = { mode: "hidden", children: f }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = f) : u = ka(f, s, 0, null), e = bi(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Jl(n), t.memoizedState = Yl, e) : Xl(t, f));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return Om(e, t, f, s, k, l, n);
    if (u) {
      u = s.fallback, f = t.mode, l = e.child, k = l.sibling;
      var S = { mode: "hidden", children: s.children };
      return (f & 1) === 0 && t.child !== l ? (s = t.child, s.childLanes = 0, s.pendingProps = S, t.deletions = null) : (s = oi(l, S), s.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = oi(k, u) : (u = bi(u, f, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, f = e.child.memoizedState, f = f === null ? Jl(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, u.memoizedState = f, u.childLanes = e.childLanes & ~n, t.memoizedState = Yl, s;
    }
    return u = e.child, e = u.sibling, s = oi(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Xl(e, t) {
    return t = ka({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function sa(e, t, n, s) {
    return s !== null && Nl(s), Yi(t, e.child, null, n), e = Xl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Om(e, t, n, s, l, u, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = Hl(Error(o(422))), sa(e, t, f, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, l = t.mode, s = ka({ mode: "visible", children: s.children }, l, 0, null), u = bi(u, l, f, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && Yi(t, e.child, null, f), t.child.memoizedState = Jl(f), t.memoizedState = Yl, u);
    if ((t.mode & 1) === 0) return sa(e, t, f, null);
    if (l.data === "$!") {
      if (s = l.nextSibling && l.nextSibling.dataset, s) var k = s.dgst;
      return s = k, u = Error(o(419)), s = Hl(u, s, void 0), sa(e, t, f, s);
    }
    if (k = (f & e.childLanes) !== 0, It || k) {
      if (s = gt, s !== null) {
        switch (f & -f) {
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
        l = (l & (s.suspendedLanes | f)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Fn(e, l), vn(s, e, l, -1));
      }
      return mo(), s = Hl(Error(o(421))), sa(e, t, f, s);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ym.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Qt = Xn(l.nextSibling), Wt = t, st = !0, hn = null, e !== null && (nn[sn++] = Rn, nn[sn++] = On, nn[sn++] = yi, Rn = e.id, On = e.overflow, yi = t), t = Xl(t, s.children), t.flags |= 4096, t);
  }
  function qc(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Ml(e.return, t, n);
  }
  function Zl(e, t, n, s, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = l);
  }
  function ed(e, t, n) {
    var s = t.pendingProps, l = s.revealOrder, u = s.tail;
    if (At(e, t, s.children, n), s = at.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qc(e, n, t);
        else if (e.tag === 19) qc(e, n, t);
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
      s &= 1;
    }
    if (qe(at, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Xr(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Zl(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Xr(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Zl(t, !0, n, null, u);
        break;
      case "together":
        Zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ra(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Dn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), wi |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = oi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = oi(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Fm(e, t, n) {
    switch (t.tag) {
      case 3:
        Jc(t), Qi();
        break;
      case 5:
        mc(t);
        break;
      case 1:
        Ft(t.type) && Br(t);
        break;
      case 4:
        Al(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, l = t.memoizedProps.value;
        qe(Wr, s._currentValue), s._currentValue = l;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (qe(at, at.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Zc(e, t, n) : (qe(at, at.current & 1), e = Dn(e, t, n), e !== null ? e.sibling : null);
        qe(at, at.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return ed(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), qe(at, at.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Wc(e, t, n);
    }
    return Dn(e, t, n);
  }
  var td, ql, nd, id;
  td = function(e, t) {
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
  }, ql = function() {
  }, nd = function(e, t, n, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = t.stateNode, xi(Sn.current);
      var u = null;
      switch (n) {
        case "input":
          l = de(e, l), s = de(e, s), u = [];
          break;
        case "select":
          l = Q({}, l, { value: void 0 }), s = Q({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = ut(e, l), s = ut(e, s), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = Ir);
      }
      Le(n, s);
      var f;
      n = null;
      for (B in l) if (!s.hasOwnProperty(B) && l.hasOwnProperty(B) && l[B] != null) if (B === "style") {
        var k = l[B];
        for (f in k) k.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (c.hasOwnProperty(B) ? u || (u = []) : (u = u || []).push(B, null));
      for (B in s) {
        var S = s[B];
        if (k = l?.[B], s.hasOwnProperty(B) && S !== k && (S != null || k != null)) if (B === "style") if (k) {
          for (f in k) !k.hasOwnProperty(f) || S && S.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in S) S.hasOwnProperty(f) && k[f] !== S[f] && (n || (n = {}), n[f] = S[f]);
        } else n || (u || (u = []), u.push(
          B,
          n
        )), n = S;
        else B === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, k = k ? k.__html : void 0, S != null && k !== S && (u = u || []).push(B, S)) : B === "children" ? typeof S != "string" && typeof S != "number" || (u = u || []).push(B, "" + S) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (c.hasOwnProperty(B) ? (S != null && B === "onScroll" && tt("scroll", e), u || k === S || (u = [])) : (u = u || []).push(B, S));
      }
      n && (u = u || []).push("style", n);
      var B = u;
      (t.updateQueue = B) && (t.flags |= 4);
    }
  }, id = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function Js(e, t) {
    if (!st) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var s = null; n !== null; ) n.alternate !== null && (s = n), n = n.sibling;
        s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
    }
  }
  function Mt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags & 14680064, s |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags, s |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function Im(e, t, n) {
    var s = t.pendingProps;
    switch (xl(t), t.tag) {
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
        return Mt(t), null;
      case 1:
        return Ft(t.type) && zr(), Mt(t), null;
      case 3:
        return s = t.stateNode, Zi(), nt(Ot), nt(Ct), $l(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (Hr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hn !== null && (co(hn), hn = null))), ql(e, t), Mt(t), null;
      case 5:
        Pl(t);
        var l = xi(Hs.current);
        if (n = t.type, e !== null && t.stateNode != null) nd(e, t, n, s, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return Mt(t), null;
          }
          if (e = xi(Sn.current), Hr(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[xn] = t, s[zs] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                tt("cancel", s), tt("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                tt("load", s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fs.length; l++) tt(Fs[l], s);
                break;
              case "source":
                tt("error", s);
                break;
              case "img":
              case "image":
              case "link":
                tt(
                  "error",
                  s
                ), tt("load", s);
                break;
              case "details":
                tt("toggle", s);
                break;
              case "input":
                Ce(s, u), tt("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!u.multiple }, tt("invalid", s);
                break;
              case "textarea":
                Je(s, u), tt("invalid", s);
            }
            Le(n, u), l = null;
            for (var f in u) if (u.hasOwnProperty(f)) {
              var k = u[f];
              f === "children" ? typeof k == "string" ? s.textContent !== k && (u.suppressHydrationWarning !== !0 && Fr(s.textContent, k, e), l = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && Fr(
                s.textContent,
                k,
                e
              ), l = ["children", "" + k]) : c.hasOwnProperty(f) && k != null && f === "onScroll" && tt("scroll", s);
            }
            switch (n) {
              case "input":
                K(s), He(s, u, !0);
                break;
              case "textarea":
                K(s), it(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = Ir);
            }
            s = l, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            f = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = f.createElement(n, { is: s.is }) : (e = f.createElement(n), n === "select" && (f = e, s.multiple ? f.multiple = !0 : s.size && (f.size = s.size))) : e = f.createElementNS(e, n), e[xn] = t, e[zs] = s, td(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = Re(n, s), n) {
                case "dialog":
                  tt("cancel", e), tt("close", e), l = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  tt("load", e), l = s;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Fs.length; l++) tt(Fs[l], e);
                  l = s;
                  break;
                case "source":
                  tt("error", e), l = s;
                  break;
                case "img":
                case "image":
                case "link":
                  tt(
                    "error",
                    e
                  ), tt("load", e), l = s;
                  break;
                case "details":
                  tt("toggle", e), l = s;
                  break;
                case "input":
                  Ce(e, s), l = de(e, s), tt("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, l = Q({}, s, { value: void 0 }), tt("invalid", e);
                  break;
                case "textarea":
                  Je(e, s), l = ut(e, s), tt("invalid", e);
                  break;
                default:
                  l = s;
              }
              Le(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var S = k[u];
                u === "style" ? Ut(e, S) : u === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, S != null && un(e, S)) : u === "children" ? typeof S == "string" ? (n !== "textarea" || S !== "") && Zt(e, S) : typeof S == "number" && Zt(e, "" + S) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? S != null && u === "onScroll" && tt("scroll", e) : S != null && W(e, u, S, f));
              }
              switch (n) {
                case "input":
                  K(e), He(e, s, !1);
                  break;
                case "textarea":
                  K(e), it(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + X(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, u = s.value, u != null ? Xe(e, !!s.multiple, u, !1) : s.defaultValue != null && Xe(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ir);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Mt(t), null;
      case 6:
        if (e && t.stateNode != null) id(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (n = xi(Hs.current), xi(Sn.current), Hr(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[xn] = t, (u = s.nodeValue !== n) && (e = Wt, e !== null)) switch (e.tag) {
              case 3:
                Fr(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Fr(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[xn] = t, t.stateNode = s;
        }
        return Mt(t), null;
      case 13:
        if (nt(at), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (st && Qt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ac(), Qi(), t.flags |= 98560, u = !1;
          else if (u = Hr(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[xn] = t;
            } else Qi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Mt(t), u = !1;
          } else hn !== null && (co(hn), hn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (at.current & 1) !== 0 ? vt === 0 && (vt = 3) : mo())), t.updateQueue !== null && (t.flags |= 4), Mt(t), null);
      case 4:
        return Zi(), ql(e, t), e === null && Is(t.stateNode.containerInfo), Mt(t), null;
      case 10:
        return bl(t.type._context), Mt(t), null;
      case 17:
        return Ft(t.type) && zr(), Mt(t), null;
      case 19:
        if (nt(at), u = t.memoizedState, u === null) return Mt(t), null;
        if (s = (t.flags & 128) !== 0, f = u.rendering, f === null) if (s) Js(u, !1);
        else {
          if (vt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Xr(e), f !== null) {
              for (t.flags |= 128, Js(u, !1), s = f.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, f = u.alternate, f === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = f.childLanes, u.lanes = f.lanes, u.child = f.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = f.memoizedProps, u.memoizedState = f.memoizedState, u.updateQueue = f.updateQueue, u.type = f.type, e = f.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return qe(at, at.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && ue() > ns && (t.flags |= 128, s = !0, Js(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Xr(f), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Js(u, !0), u.tail === null && u.tailMode === "hidden" && !f.alternate && !st) return Mt(t), null;
          } else 2 * ue() - u.renderingStartTime > ns && n !== 1073741824 && (t.flags |= 128, s = !0, Js(u, !1), t.lanes = 4194304);
          u.isBackwards ? (f.sibling = t.child, t.child = f) : (n = u.last, n !== null ? n.sibling = f : t.child = f, u.last = f);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ue(), t.sibling = null, n = at.current, qe(at, s ? n & 1 | 2 : n & 1), t) : (Mt(t), null);
      case 22:
      case 23:
        return fo(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Yt & 1073741824) !== 0 && (Mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Mt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Dm(e, t) {
    switch (xl(t), t.tag) {
      case 1:
        return Ft(t.type) && zr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Zi(), nt(Ot), nt(Ct), $l(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Pl(t), null;
      case 13:
        if (nt(at), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Qi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return nt(at), null;
      case 4:
        return Zi(), null;
      case 10:
        return bl(t.type._context), null;
      case 22:
      case 23:
        return fo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var aa = !1, Tt = !1, zm = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function es(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      ot(e, t, s);
    }
    else n.current = null;
  }
  function eo(e, t, n) {
    try {
      n();
    } catch (s) {
      ot(e, t, s);
    }
  }
  var sd = !1;
  function Bm(e, t) {
    if (hl = Cr, e = Ou(), sl(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var l = s.anchorOffset, u = s.focusNode;
          s = s.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, k = -1, S = -1, B = 0, te = 0, ie = e, ee = null;
          t: for (; ; ) {
            for (var fe; ie !== n || l !== 0 && ie.nodeType !== 3 || (k = f + l), ie !== u || s !== 0 && ie.nodeType !== 3 || (S = f + s), ie.nodeType === 3 && (f += ie.nodeValue.length), (fe = ie.firstChild) !== null; )
              ee = ie, ie = fe;
            for (; ; ) {
              if (ie === e) break t;
              if (ee === n && ++B === l && (k = f), ee === u && ++te === s && (S = f), (fe = ie.nextSibling) !== null) break;
              ie = ee, ee = ie.parentNode;
            }
            ie = fe;
          }
          n = k === -1 || S === -1 ? null : { start: k, end: S };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (fl = { focusedElem: e, selectionRange: n }, Cr = !1, ve = t; ve !== null; ) if (t = ve, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ve = e;
    else for (; ve !== null; ) {
      t = ve;
      try {
        var ke = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ke !== null) {
              var je = ke.memoizedProps, ht = ke.memoizedState, O = t.stateNode, C = O.getSnapshotBeforeUpdate(t.elementType === t.type ? je : fn(t.type, je), ht);
              O.__reactInternalSnapshotBeforeUpdate = C;
            }
            break;
          case 3:
            var I = t.stateNode.containerInfo;
            I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (le) {
        ot(t, t.return, le);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ve = e;
        break;
      }
      ve = t.return;
    }
    return ke = sd, sd = !1, ke;
  }
  function Xs(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var l = s = s.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && eo(t, n, u);
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function la(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var s = n.create;
          n.destroy = s();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function to(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function rd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, rd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xn], delete t[zs], delete t[kl], delete t[wm], delete t[Nm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ad(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ld(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ad(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function no(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ir));
    else if (s !== 4 && (e = e.child, e !== null)) for (no(e, t, n), e = e.sibling; e !== null; ) no(e, t, n), e = e.sibling;
  }
  function io(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (io(e, t, n), e = e.sibling; e !== null; ) io(e, t, n), e = e.sibling;
  }
  var St = null, mn = !1;
  function ii(e, t, n) {
    for (n = n.child; n !== null; ) od(e, t, n), n = n.sibling;
  }
  function od(e, t, n) {
    if (jn && typeof jn.onCommitFiberUnmount == "function") try {
      jn.onCommitFiberUnmount(jr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Tt || es(n, t);
      case 6:
        var s = St, l = mn;
        St = null, ii(e, t, n), St = s, mn = l, St !== null && (mn ? (e = St, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : St.removeChild(n.stateNode));
        break;
      case 18:
        St !== null && (mn ? (e = St, n = n.stateNode, e.nodeType === 8 ? vl(e.parentNode, n) : e.nodeType === 1 && vl(e, n), Ts(e)) : vl(St, n.stateNode));
        break;
      case 4:
        s = St, l = mn, St = n.stateNode.containerInfo, mn = !0, ii(e, t, n), St = s, mn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tt && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var u = l, f = u.destroy;
            u = u.tag, f !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && eo(n, t, f), l = l.next;
          } while (l !== s);
        }
        ii(e, t, n);
        break;
      case 1:
        if (!Tt && (es(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (k) {
          ot(n, t, k);
        }
        ii(e, t, n);
        break;
      case 21:
        ii(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Tt = (s = Tt) || n.memoizedState !== null, ii(e, t, n), Tt = s) : ii(e, t, n);
        break;
      default:
        ii(e, t, n);
    }
  }
  function ud(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new zm()), t.forEach(function(s) {
        var l = Jm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(l, l));
      });
    }
  }
  function pn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var l = n[s];
      try {
        var u = e, f = t, k = f;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              St = k.stateNode, mn = !1;
              break e;
            case 3:
              St = k.stateNode.containerInfo, mn = !0;
              break e;
            case 4:
              St = k.stateNode.containerInfo, mn = !0;
              break e;
          }
          k = k.return;
        }
        if (St === null) throw Error(o(160));
        od(u, f, l), St = null, mn = !1;
        var S = l.alternate;
        S !== null && (S.return = null), l.return = null;
      } catch (B) {
        ot(l, t, B);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) cd(t, e), t = t.sibling;
  }
  function cd(e, t) {
    var n = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pn(t, e), Nn(e), s & 4) {
          try {
            Xs(3, e, e.return), la(3, e);
          } catch (je) {
            ot(e, e.return, je);
          }
          try {
            Xs(5, e, e.return);
          } catch (je) {
            ot(e, e.return, je);
          }
        }
        break;
      case 1:
        pn(t, e), Nn(e), s & 512 && n !== null && es(n, n.return);
        break;
      case 5:
        if (pn(t, e), Nn(e), s & 512 && n !== null && es(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Zt(l, "");
          } catch (je) {
            ot(e, e.return, je);
          }
        }
        if (s & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, f = n !== null ? n.memoizedProps : u, k = e.type, S = e.updateQueue;
          if (e.updateQueue = null, S !== null) try {
            k === "input" && u.type === "radio" && u.name != null && we(l, u), Re(k, f);
            var B = Re(k, u);
            for (f = 0; f < S.length; f += 2) {
              var te = S[f], ie = S[f + 1];
              te === "style" ? Ut(l, ie) : te === "dangerouslySetInnerHTML" ? un(l, ie) : te === "children" ? Zt(l, ie) : W(l, te, ie, B);
            }
            switch (k) {
              case "input":
                $e(l, u);
                break;
              case "textarea":
                Ve(l, u);
                break;
              case "select":
                var ee = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var fe = u.value;
                fe != null ? Xe(l, !!u.multiple, fe, !1) : ee !== !!u.multiple && (u.defaultValue != null ? Xe(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Xe(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[zs] = u;
          } catch (je) {
            ot(e, e.return, je);
          }
        }
        break;
      case 6:
        if (pn(t, e), Nn(e), s & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (je) {
            ot(e, e.return, je);
          }
        }
        break;
      case 3:
        if (pn(t, e), Nn(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ts(t.containerInfo);
        } catch (je) {
          ot(e, e.return, je);
        }
        break;
      case 4:
        pn(t, e), Nn(e);
        break;
      case 13:
        pn(t, e), Nn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (ao = ue())), s & 4 && ud(e);
        break;
      case 22:
        if (te = n !== null && n.memoizedState !== null, e.mode & 1 ? (Tt = (B = Tt) || te, pn(t, e), Tt = B) : pn(t, e), Nn(e), s & 8192) {
          if (B = e.memoizedState !== null, (e.stateNode.isHidden = B) && !te && (e.mode & 1) !== 0) for (ve = e, te = e.child; te !== null; ) {
            for (ie = ve = te; ve !== null; ) {
              switch (ee = ve, fe = ee.child, ee.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xs(4, ee, ee.return);
                  break;
                case 1:
                  es(ee, ee.return);
                  var ke = ee.stateNode;
                  if (typeof ke.componentWillUnmount == "function") {
                    s = ee, n = ee.return;
                    try {
                      t = s, ke.props = t.memoizedProps, ke.state = t.memoizedState, ke.componentWillUnmount();
                    } catch (je) {
                      ot(s, n, je);
                    }
                  }
                  break;
                case 5:
                  es(ee, ee.return);
                  break;
                case 22:
                  if (ee.memoizedState !== null) {
                    fd(ie);
                    continue;
                  }
              }
              fe !== null ? (fe.return = ee, ve = fe) : fd(ie);
            }
            te = te.sibling;
          }
          e: for (te = null, ie = e; ; ) {
            if (ie.tag === 5) {
              if (te === null) {
                te = ie;
                try {
                  l = ie.stateNode, B ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = ie.stateNode, S = ie.memoizedProps.style, f = S != null && S.hasOwnProperty("display") ? S.display : null, k.style.display = be("display", f));
                } catch (je) {
                  ot(e, e.return, je);
                }
              }
            } else if (ie.tag === 6) {
              if (te === null) try {
                ie.stateNode.nodeValue = B ? "" : ie.memoizedProps;
              } catch (je) {
                ot(e, e.return, je);
              }
            } else if ((ie.tag !== 22 && ie.tag !== 23 || ie.memoizedState === null || ie === e) && ie.child !== null) {
              ie.child.return = ie, ie = ie.child;
              continue;
            }
            if (ie === e) break e;
            for (; ie.sibling === null; ) {
              if (ie.return === null || ie.return === e) break e;
              te === ie && (te = null), ie = ie.return;
            }
            te === ie && (te = null), ie.sibling.return = ie.return, ie = ie.sibling;
          }
        }
        break;
      case 19:
        pn(t, e), Nn(e), s & 4 && ud(e);
        break;
      case 21:
        break;
      default:
        pn(
          t,
          e
        ), Nn(e);
    }
  }
  function Nn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ad(n)) {
              var s = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var l = s.stateNode;
            s.flags & 32 && (Zt(l, ""), s.flags &= -33);
            var u = ld(e);
            io(e, u, l);
            break;
          case 3:
          case 4:
            var f = s.stateNode.containerInfo, k = ld(e);
            no(e, k, f);
            break;
          default:
            throw Error(o(161));
        }
      } catch (S) {
        ot(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vm(e, t, n) {
    ve = e, dd(e);
  }
  function dd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; ve !== null; ) {
      var l = ve, u = l.child;
      if (l.tag === 22 && s) {
        var f = l.memoizedState !== null || aa;
        if (!f) {
          var k = l.alternate, S = k !== null && k.memoizedState !== null || Tt;
          k = aa;
          var B = Tt;
          if (aa = f, (Tt = S) && !B) for (ve = l; ve !== null; ) f = ve, S = f.child, f.tag === 22 && f.memoizedState !== null ? md(l) : S !== null ? (S.return = f, ve = S) : md(l);
          for (; u !== null; ) ve = u, dd(u), u = u.sibling;
          ve = l, aa = k, Tt = B;
        }
        hd(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, ve = u) : hd(e);
    }
  }
  function hd(e) {
    for (; ve !== null; ) {
      var t = ve;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Tt || la(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !Tt) if (n === null) s.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : fn(t.type, n.memoizedProps);
                s.componentDidUpdate(l, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && fc(t, u, s);
              break;
            case 3:
              var f = t.updateQueue;
              if (f !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                fc(t, f, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var S = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    S.autoFocus && n.focus();
                    break;
                  case "img":
                    S.src && (n.src = S.src);
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
                var B = t.alternate;
                if (B !== null) {
                  var te = B.memoizedState;
                  if (te !== null) {
                    var ie = te.dehydrated;
                    ie !== null && Ts(ie);
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
          Tt || t.flags & 512 && to(t);
        } catch (ee) {
          ot(t, t.return, ee);
        }
      }
      if (t === e) {
        ve = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, ve = n;
        break;
      }
      ve = t.return;
    }
  }
  function fd(e) {
    for (; ve !== null; ) {
      var t = ve;
      if (t === e) {
        ve = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ve = n;
        break;
      }
      ve = t.return;
    }
  }
  function md(e) {
    for (; ve !== null; ) {
      var t = ve;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              la(4, t);
            } catch (S) {
              ot(t, n, S);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = t.return;
              try {
                s.componentDidMount();
              } catch (S) {
                ot(t, l, S);
              }
            }
            var u = t.return;
            try {
              to(t);
            } catch (S) {
              ot(t, u, S);
            }
            break;
          case 5:
            var f = t.return;
            try {
              to(t);
            } catch (S) {
              ot(t, f, S);
            }
        }
      } catch (S) {
        ot(t, t.return, S);
      }
      if (t === e) {
        ve = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, ve = k;
        break;
      }
      ve = t.return;
    }
  }
  var Km = Math.ceil, oa = H.ReactCurrentDispatcher, so = H.ReactCurrentOwner, ln = H.ReactCurrentBatchConfig, Be = 0, gt = null, mt = null, wt = 0, Yt = 0, ts = Zn(0), vt = 0, Zs = null, wi = 0, ua = 0, ro = 0, qs = null, Dt = null, ao = 0, ns = 1 / 0, zn = null, ca = !1, lo = null, si = null, da = !1, ri = null, ha = 0, er = 0, oo = null, fa = -1, ma = 0;
  function Pt() {
    return (Be & 6) !== 0 ? ue() : fa !== -1 ? fa : fa = ue();
  }
  function ai(e) {
    return (e.mode & 1) === 0 ? 1 : (Be & 2) !== 0 && wt !== 0 ? wt & -wt : Cm.transition !== null ? (ma === 0 && (ma = lu()), ma) : (e = Qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : vu(e.type)), e);
  }
  function vn(e, t, n, s) {
    if (50 < er) throw er = 0, oo = null, Error(o(185));
    Ns(e, n, s), ((Be & 2) === 0 || e !== gt) && (e === gt && ((Be & 2) === 0 && (ua |= n), vt === 4 && li(e, wt)), zt(e, s), n === 1 && Be === 0 && (t.mode & 1) === 0 && (ns = ue() + 500, Vr && ei()));
  }
  function zt(e, t) {
    var n = e.callbackNode;
    Cf(e, t);
    var s = wr(e, e === gt ? wt : 0);
    if (s === 0) n !== null && An(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && An(n), t === 1) e.tag === 0 ? Em(vd.bind(null, e)) : tc(vd.bind(null, e)), xm(function() {
        (Be & 6) === 0 && ei();
      }), n = null;
      else {
        switch (ou(s)) {
          case 1:
            n = Rt;
            break;
          case 4:
            n = dt;
            break;
          case 16:
            n = Pn;
            break;
          case 536870912:
            n = Un;
            break;
          default:
            n = Pn;
        }
        n = Nd(n, pd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function pd(e, t) {
    if (fa = -1, ma = 0, (Be & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (is() && e.callbackNode !== n) return null;
    var s = wr(e, e === gt ? wt : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = pa(e, s);
    else {
      t = s;
      var l = Be;
      Be |= 2;
      var u = yd();
      (gt !== e || wt !== t) && (zn = null, ns = ue() + 500, Ei(e, t));
      do
        try {
          Gm();
          break;
        } catch (k) {
          kd(e, k);
        }
      while (!0);
      Cl(), oa.current = u, Be = l, mt !== null ? t = 0 : (gt = null, wt = 0, t = vt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Va(e), l !== 0 && (s = l, t = uo(e, l))), t === 1) throw n = Zs, Ei(e, 0), li(e, s), zt(e, ue()), n;
      if (t === 6) li(e, s);
      else {
        if (l = e.current.alternate, (s & 30) === 0 && !Um(l) && (t = pa(e, s), t === 2 && (u = Va(e), u !== 0 && (s = u, t = uo(e, u))), t === 1)) throw n = Zs, Ei(e, 0), li(e, s), zt(e, ue()), n;
        switch (e.finishedWork = l, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Ci(e, Dt, zn);
            break;
          case 3:
            if (li(e, s), (s & 130023424) === s && (t = ao + 500 - ue(), 10 < t)) {
              if (wr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & s) !== s) {
                Pt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = pl(Ci.bind(null, e, Dt, zn), t);
              break;
            }
            Ci(e, Dt, zn);
            break;
          case 4:
            if (li(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var f = 31 - cn(s);
              u = 1 << f, f = t[f], f > l && (l = f), s &= ~u;
            }
            if (s = l, s = ue() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Km(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = pl(Ci.bind(null, e, Dt, zn), s);
              break;
            }
            Ci(e, Dt, zn);
            break;
          case 5:
            Ci(e, Dt, zn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return zt(e, ue()), e.callbackNode === n ? pd.bind(null, e) : null;
  }
  function uo(e, t) {
    var n = qs;
    return e.current.memoizedState.isDehydrated && (Ei(e, t).flags |= 256), e = pa(e, t), e !== 2 && (t = Dt, Dt = n, t !== null && co(t)), e;
  }
  function co(e) {
    Dt === null ? Dt = e : Dt.push.apply(Dt, e);
  }
  function Um(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var l = n[s], u = l.getSnapshot;
          l = l.value;
          try {
            if (!dn(u(), l)) return !1;
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
  function li(e, t) {
    for (t &= ~ro, t &= ~ua, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - cn(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function vd(e) {
    if ((Be & 6) !== 0) throw Error(o(327));
    is();
    var t = wr(e, 0);
    if ((t & 1) === 0) return zt(e, ue()), null;
    var n = pa(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Va(e);
      s !== 0 && (t = s, n = uo(e, s));
    }
    if (n === 1) throw n = Zs, Ei(e, 0), li(e, t), zt(e, ue()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ci(e, Dt, zn), zt(e, ue()), null;
  }
  function ho(e, t) {
    var n = Be;
    Be |= 1;
    try {
      return e(t);
    } finally {
      Be = n, Be === 0 && (ns = ue() + 500, Vr && ei());
    }
  }
  function Ni(e) {
    ri !== null && ri.tag === 0 && (Be & 6) === 0 && is();
    var t = Be;
    Be |= 1;
    var n = ln.transition, s = Qe;
    try {
      if (ln.transition = null, Qe = 1, e) return e();
    } finally {
      Qe = s, ln.transition = n, Be = t, (Be & 6) === 0 && ei();
    }
  }
  function fo() {
    Yt = ts.current, nt(ts);
  }
  function Ei(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, jm(n)), mt !== null) for (n = mt.return; n !== null; ) {
      var s = n;
      switch (xl(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && zr();
          break;
        case 3:
          Zi(), nt(Ot), nt(Ct), $l();
          break;
        case 5:
          Pl(s);
          break;
        case 4:
          Zi();
          break;
        case 13:
          nt(at);
          break;
        case 19:
          nt(at);
          break;
        case 10:
          bl(s.type._context);
          break;
        case 22:
        case 23:
          fo();
      }
      n = n.return;
    }
    if (gt = e, mt = e = oi(e.current, null), wt = Yt = t, vt = 0, Zs = null, ro = ua = wi = 0, Dt = qs = null, ji !== null) {
      for (t = 0; t < ji.length; t++) if (n = ji[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var l = s.next, u = n.pending;
        if (u !== null) {
          var f = u.next;
          u.next = l, s.next = f;
        }
        n.pending = s;
      }
      ji = null;
    }
    return e;
  }
  function kd(e, t) {
    do {
      var n = mt;
      try {
        if (Cl(), Zr.current = na, qr) {
          for (var s = lt.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), s = s.next;
          }
          qr = !1;
        }
        if (Si = 0, yt = pt = lt = null, Gs = !1, Ws = 0, so.current = null, n === null || n.return === null) {
          vt = 1, Zs = t, mt = null;
          break;
        }
        e: {
          var u = e, f = n.return, k = n, S = t;
          if (t = wt, k.flags |= 32768, S !== null && typeof S == "object" && typeof S.then == "function") {
            var B = S, te = k, ie = te.tag;
            if ((te.mode & 1) === 0 && (ie === 0 || ie === 11 || ie === 15)) {
              var ee = te.alternate;
              ee ? (te.updateQueue = ee.updateQueue, te.memoizedState = ee.memoizedState, te.lanes = ee.lanes) : (te.updateQueue = null, te.memoizedState = null);
            }
            var fe = Vc(f);
            if (fe !== null) {
              fe.flags &= -257, Kc(fe, f, k, u, t), fe.mode & 1 && Bc(u, B, t), t = fe, S = B;
              var ke = t.updateQueue;
              if (ke === null) {
                var je = /* @__PURE__ */ new Set();
                je.add(S), t.updateQueue = je;
              } else ke.add(S);
              break e;
            } else {
              if ((t & 1) === 0) {
                Bc(u, B, t), mo();
                break e;
              }
              S = Error(o(426));
            }
          } else if (st && k.mode & 1) {
            var ht = Vc(f);
            if (ht !== null) {
              (ht.flags & 65536) === 0 && (ht.flags |= 256), Kc(ht, f, k, u, t), Nl(qi(S, k));
              break e;
            }
          }
          u = S = qi(S, k), vt !== 4 && (vt = 2), qs === null ? qs = [u] : qs.push(u), u = f;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var O = Dc(u, S, t);
                hc(u, O);
                break e;
              case 1:
                k = S;
                var C = u.type, I = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof C.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (si === null || !si.has(I)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var le = zc(u, k, t);
                  hc(u, le);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        jd(n);
      } catch (Se) {
        t = Se, mt === n && n !== null && (mt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function yd() {
    var e = oa.current;
    return oa.current = na, e === null ? na : e;
  }
  function mo() {
    (vt === 0 || vt === 3 || vt === 2) && (vt = 4), gt === null || (wi & 268435455) === 0 && (ua & 268435455) === 0 || li(gt, wt);
  }
  function pa(e, t) {
    var n = Be;
    Be |= 2;
    var s = yd();
    (gt !== e || wt !== t) && (zn = null, Ei(e, t));
    do
      try {
        Hm();
        break;
      } catch (l) {
        kd(e, l);
      }
    while (!0);
    if (Cl(), Be = n, oa.current = s, mt !== null) throw Error(o(261));
    return gt = null, wt = 0, vt;
  }
  function Hm() {
    for (; mt !== null; ) gd(mt);
  }
  function Gm() {
    for (; mt !== null && !Kn(); ) gd(mt);
  }
  function gd(e) {
    var t = wd(e.alternate, e, Yt);
    e.memoizedProps = e.pendingProps, t === null ? jd(e) : mt = t, so.current = null;
  }
  function jd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Im(n, t, Yt), n !== null) {
          mt = n;
          return;
        }
      } else {
        if (n = Dm(n, t), n !== null) {
          n.flags &= 32767, mt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          vt = 6, mt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        mt = t;
        return;
      }
      mt = t = e;
    } while (t !== null);
    vt === 0 && (vt = 5);
  }
  function Ci(e, t, n) {
    var s = Qe, l = ln.transition;
    try {
      ln.transition = null, Qe = 1, Wm(e, t, n, s);
    } finally {
      ln.transition = l, Qe = s;
    }
    return null;
  }
  function Wm(e, t, n, s) {
    do
      is();
    while (ri !== null);
    if ((Be & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (bf(e, u), e === gt && (mt = gt = null, wt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || da || (da = !0, Nd(Pn, function() {
      return is(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = ln.transition, ln.transition = null;
      var f = Qe;
      Qe = 1;
      var k = Be;
      Be |= 4, so.current = null, Bm(e, n), cd(n, e), fm(fl), Cr = !!hl, fl = hl = null, e.current = n, Vm(n), U(), Be = k, Qe = f, ln.transition = u;
    } else e.current = n;
    if (da && (da = !1, ri = e, ha = l), u = e.pendingLanes, u === 0 && (si = null), xf(n.stateNode), zt(e, ue()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], s(l.value, { componentStack: l.stack, digest: l.digest });
    if (ca) throw ca = !1, e = lo, lo = null, e;
    return (ha & 1) !== 0 && e.tag !== 0 && is(), u = e.pendingLanes, (u & 1) !== 0 ? e === oo ? er++ : (er = 0, oo = e) : er = 0, ei(), null;
  }
  function is() {
    if (ri !== null) {
      var e = ou(ha), t = ln.transition, n = Qe;
      try {
        if (ln.transition = null, Qe = 16 > e ? 16 : e, ri === null) var s = !1;
        else {
          if (e = ri, ri = null, ha = 0, (Be & 6) !== 0) throw Error(o(331));
          var l = Be;
          for (Be |= 4, ve = e.current; ve !== null; ) {
            var u = ve, f = u.child;
            if ((ve.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var S = 0; S < k.length; S++) {
                  var B = k[S];
                  for (ve = B; ve !== null; ) {
                    var te = ve;
                    switch (te.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xs(8, te, u);
                    }
                    var ie = te.child;
                    if (ie !== null) ie.return = te, ve = ie;
                    else for (; ve !== null; ) {
                      te = ve;
                      var ee = te.sibling, fe = te.return;
                      if (rd(te), te === B) {
                        ve = null;
                        break;
                      }
                      if (ee !== null) {
                        ee.return = fe, ve = ee;
                        break;
                      }
                      ve = fe;
                    }
                  }
                }
                var ke = u.alternate;
                if (ke !== null) {
                  var je = ke.child;
                  if (je !== null) {
                    ke.child = null;
                    do {
                      var ht = je.sibling;
                      je.sibling = null, je = ht;
                    } while (je !== null);
                  }
                }
                ve = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && f !== null) f.return = u, ve = f;
            else e: for (; ve !== null; ) {
              if (u = ve, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Xs(9, u, u.return);
              }
              var O = u.sibling;
              if (O !== null) {
                O.return = u.return, ve = O;
                break e;
              }
              ve = u.return;
            }
          }
          var C = e.current;
          for (ve = C; ve !== null; ) {
            f = ve;
            var I = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && I !== null) I.return = f, ve = I;
            else e: for (f = C; ve !== null; ) {
              if (k = ve, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    la(9, k);
                }
              } catch (Se) {
                ot(k, k.return, Se);
              }
              if (k === f) {
                ve = null;
                break e;
              }
              var le = k.sibling;
              if (le !== null) {
                le.return = k.return, ve = le;
                break e;
              }
              ve = k.return;
            }
          }
          if (Be = l, ei(), jn && typeof jn.onPostCommitFiberRoot == "function") try {
            jn.onPostCommitFiberRoot(jr, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Qe = n, ln.transition = t;
      }
    }
    return !1;
  }
  function xd(e, t, n) {
    t = qi(n, t), t = Dc(e, t, 1), e = ni(e, t, 1), t = Pt(), e !== null && (Ns(e, 1, t), zt(e, t));
  }
  function ot(e, t, n) {
    if (e.tag === 3) xd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        xd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (si === null || !si.has(s))) {
          e = qi(n, e), e = zc(t, e, 1), t = ni(t, e, 1), e = Pt(), t !== null && (Ns(t, 1, e), zt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Qm(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = Pt(), e.pingedLanes |= e.suspendedLanes & n, gt === e && (wt & n) === n && (vt === 4 || vt === 3 && (wt & 130023424) === wt && 500 > ue() - ao ? Ei(e, 0) : ro |= n), zt(e, t);
  }
  function Sd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Sr, Sr <<= 1, (Sr & 130023424) === 0 && (Sr = 4194304)));
    var n = Pt();
    e = Fn(e, t), e !== null && (Ns(e, t, n), zt(e, n));
  }
  function Ym(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Sd(e, n);
  }
  function Jm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    s !== null && s.delete(t), Sd(e, n);
  }
  var wd;
  wd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ot.current) It = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return It = !1, Fm(e, t, n);
      It = (e.flags & 131072) !== 0;
    }
    else It = !1, st && (t.flags & 1048576) !== 0 && nc(t, Ur, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        ra(e, t), e = t.pendingProps;
        var l = Hi(t, Ct.current);
        Xi(t, n), l = Fl(null, t, s, e, l, n);
        var u = Il();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ft(s) ? (u = !0, Br(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, _l(t), l.updater = ia, t.stateNode = l, l._reactInternals = t, Ul(t, s, e, n), t = Ql(null, t, s, !0, u, n)) : (t.tag = 0, st && u && jl(t), At(null, t, l, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (ra(e, t), e = t.pendingProps, l = s._init, s = l(s._payload), t.type = s, l = t.tag = Zm(s), e = fn(s, e), l) {
            case 0:
              t = Wl(null, t, s, e, n);
              break e;
            case 1:
              t = Yc(null, t, s, e, n);
              break e;
            case 11:
              t = Uc(null, t, s, e, n);
              break e;
            case 14:
              t = Hc(null, t, s, fn(s.type, e), n);
              break e;
          }
          throw Error(o(
            306,
            s,
            ""
          ));
        }
        return t;
      case 0:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : fn(s, l), Wl(e, t, s, l, n);
      case 1:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : fn(s, l), Yc(e, t, s, l, n);
      case 3:
        e: {
          if (Jc(t), e === null) throw Error(o(387));
          s = t.pendingProps, u = t.memoizedState, l = u.element, dc(e, t), Jr(t, s, null, n);
          var f = t.memoizedState;
          if (s = f.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = qi(Error(o(423)), t), t = Xc(e, t, s, n, l);
            break e;
          } else if (s !== l) {
            l = qi(Error(o(424)), t), t = Xc(e, t, s, n, l);
            break e;
          } else for (Qt = Xn(t.stateNode.containerInfo.firstChild), Wt = t, st = !0, hn = null, n = uc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Qi(), s === l) {
              t = Dn(e, t, n);
              break e;
            }
            At(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return mc(t), e === null && wl(t), s = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, f = l.children, ml(s, l) ? f = null : u !== null && ml(s, u) && (t.flags |= 32), Qc(e, t), At(e, t, f, n), t.child;
      case 6:
        return e === null && wl(t), null;
      case 13:
        return Zc(e, t, n);
      case 4:
        return Al(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = Yi(t, null, s, n) : At(e, t, s, n), t.child;
      case 11:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : fn(s, l), Uc(e, t, s, l, n);
      case 7:
        return At(e, t, t.pendingProps, n), t.child;
      case 8:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, l = t.pendingProps, u = t.memoizedProps, f = l.value, qe(Wr, s._currentValue), s._currentValue = f, u !== null) if (dn(u.value, f)) {
            if (u.children === l.children && !Ot.current) {
              t = Dn(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              f = u.child;
              for (var S = k.firstContext; S !== null; ) {
                if (S.context === s) {
                  if (u.tag === 1) {
                    S = In(-1, n & -n), S.tag = 2;
                    var B = u.updateQueue;
                    if (B !== null) {
                      B = B.shared;
                      var te = B.pending;
                      te === null ? S.next = S : (S.next = te.next, te.next = S), B.pending = S;
                    }
                  }
                  u.lanes |= n, S = u.alternate, S !== null && (S.lanes |= n), Ml(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                S = S.next;
              }
            } else if (u.tag === 10) f = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (f = u.return, f === null) throw Error(o(341));
              f.lanes |= n, k = f.alternate, k !== null && (k.lanes |= n), Ml(f, n, t), f = u.sibling;
            } else f = u.child;
            if (f !== null) f.return = u;
            else for (f = u; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (u = f.sibling, u !== null) {
                u.return = f.return, f = u;
                break;
              }
              f = f.return;
            }
            u = f;
          }
          At(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, s = t.pendingProps.children, Xi(t, n), l = rn(l), s = s(l), t.flags |= 1, At(e, t, s, n), t.child;
      case 14:
        return s = t.type, l = fn(s, t.pendingProps), l = fn(s.type, l), Hc(e, t, s, l, n);
      case 15:
        return Gc(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : fn(s, l), ra(e, t), t.tag = 1, Ft(s) ? (e = !0, Br(t)) : e = !1, Xi(t, n), Fc(t, s, l), Ul(t, s, l, n), Ql(null, t, s, !0, e, n);
      case 19:
        return ed(e, t, n);
      case 22:
        return Wc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Nd(e, t) {
    return gr(e, t);
  }
  function Xm(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function on(e, t, n, s) {
    return new Xm(e, t, n, s);
  }
  function po(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Zm(e) {
    if (typeof e == "function") return po(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === xe) return 11;
      if (e === ye) return 14;
    }
    return 2;
  }
  function oi(e, t) {
    var n = e.alternate;
    return n === null ? (n = on(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function va(e, t, n, s, l, u) {
    var f = 2;
    if (s = e, typeof e == "function") po(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case F:
        return bi(n.children, l, u, t);
      case A:
        f = 8, l |= 8;
        break;
      case ne:
        return e = on(12, n, t, l | 2), e.elementType = ne, e.lanes = u, e;
      case Z:
        return e = on(13, n, t, l), e.elementType = Z, e.lanes = u, e;
      case ce:
        return e = on(19, n, t, l), e.elementType = ce, e.lanes = u, e;
      case he:
        return ka(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case J:
            f = 10;
            break e;
          case me:
            f = 9;
            break e;
          case xe:
            f = 11;
            break e;
          case ye:
            f = 14;
            break e;
          case Ee:
            f = 16, s = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = on(f, n, t, l), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function bi(e, t, n, s) {
    return e = on(7, e, s, t), e.lanes = n, e;
  }
  function ka(e, t, n, s) {
    return e = on(22, e, s, t), e.elementType = he, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function vo(e, t, n) {
    return e = on(6, e, null, t), e.lanes = n, e;
  }
  function ko(e, t, n) {
    return t = on(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function qm(e, t, n, s, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ka(0), this.expirationTimes = Ka(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ka(0), this.identifierPrefix = s, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function yo(e, t, n, s, l, u, f, k, S) {
    return e = new qm(e, t, n, k, S), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = on(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _l(u), e;
  }
  function ep(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: w, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function Ed(e) {
    if (!e) return qn;
    e = e._reactInternals;
    e: {
      if (_n(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ft(t.type)) {
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
      if (Ft(n)) return qu(e, n, t);
    }
    return t;
  }
  function Cd(e, t, n, s, l, u, f, k, S) {
    return e = yo(n, s, !0, e, l, u, f, k, S), e.context = Ed(null), n = e.current, s = Pt(), l = ai(n), u = In(s, l), u.callback = t ?? null, ni(n, u, l), e.current.lanes = l, Ns(e, l, s), zt(e, s), e;
  }
  function ya(e, t, n, s) {
    var l = t.current, u = Pt(), f = ai(l);
    return n = Ed(n), t.context === null ? t.context = n : t.pendingContext = n, t = In(u, f), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = ni(l, t, f), e !== null && (vn(e, l, f, u), Yr(e, l, f)), f;
  }
  function ga(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function bd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function go(e, t) {
    bd(e, t), (e = e.alternate) && bd(e, t);
  }
  function tp() {
    return null;
  }
  var Md = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function jo(e) {
    this._internalRoot = e;
  }
  ja.prototype.render = jo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    ya(e, t, null, null);
  }, ja.prototype.unmount = jo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ni(function() {
        ya(null, e, null, null);
      }), t[Ln] = null;
    }
  };
  function ja(e) {
    this._internalRoot = e;
  }
  ja.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = du();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Qn.length && t !== 0 && t < Qn[n].priority; n++) ;
      Qn.splice(n, 0, e), n === 0 && mu(e);
    }
  };
  function xo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function xa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Td() {
  }
  function np(e, t, n, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var B = ga(f);
          u.call(B);
        };
      }
      var f = Cd(t, s, e, 0, null, !1, !1, "", Td);
      return e._reactRootContainer = f, e[Ln] = f.current, Is(e.nodeType === 8 ? e.parentNode : e), Ni(), f;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var B = ga(S);
        k.call(B);
      };
    }
    var S = yo(e, 0, !1, null, null, !1, !1, "", Td);
    return e._reactRootContainer = S, e[Ln] = S.current, Is(e.nodeType === 8 ? e.parentNode : e), Ni(function() {
      ya(t, S, n, s);
    }), S;
  }
  function Sa(e, t, n, s, l) {
    var u = n._reactRootContainer;
    if (u) {
      var f = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var S = ga(f);
          k.call(S);
        };
      }
      ya(t, f, e, l);
    } else f = np(n, t, e, l, s);
    return ga(f);
  }
  uu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ws(t.pendingLanes);
          n !== 0 && (Ua(t, n | 1), zt(t, ue()), (Be & 6) === 0 && (ns = ue() + 500, ei()));
        }
        break;
      case 13:
        Ni(function() {
          var s = Fn(e, 1);
          if (s !== null) {
            var l = Pt();
            vn(s, e, 1, l);
          }
        }), go(e, 1);
    }
  }, Ha = function(e) {
    if (e.tag === 13) {
      var t = Fn(e, 134217728);
      if (t !== null) {
        var n = Pt();
        vn(t, e, 134217728, n);
      }
      go(e, 134217728);
    }
  }, cu = function(e) {
    if (e.tag === 13) {
      var t = ai(e), n = Fn(e, t);
      if (n !== null) {
        var s = Pt();
        vn(n, e, t, s);
      }
      go(e, t);
    }
  }, du = function() {
    return Qe;
  }, hu = function(e, t) {
    var n = Qe;
    try {
      return Qe = e, t();
    } finally {
      Qe = n;
    }
  }, $t = function(e, t, n) {
    switch (t) {
      case "input":
        if ($e(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var l = Dr(s);
              if (!l) throw Error(o(90));
              re(s), $e(s, l);
            }
          }
        }
        break;
      case "textarea":
        Ve(e, n);
        break;
      case "select":
        t = n.value, t != null && Xe(e, !!n.multiple, t, !1);
    }
  }, pr = ho, Fe = Ni;
  var ip = { usingClientEntryPoint: !1, Events: [Bs, Ki, Dr, yn, gn, ho] }, tr = { findFiberByHostInstance: vi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, sp = { bundleType: tr.bundleType, version: tr.version, rendererPackageName: tr.rendererPackageName, rendererConfig: tr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = xs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: tr.findFiberByHostInstance || tp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wa.isDisabled && wa.supportsFiber) try {
      jr = wa.inject(sp), jn = wa;
    } catch {
    }
  }
  return Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip, Bt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xo(t)) throw Error(o(200));
    return ep(e, t, null, n);
  }, Bt.createRoot = function(e, t) {
    if (!xo(e)) throw Error(o(299));
    var n = !1, s = "", l = Md;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = yo(e, 1, !1, null, null, n, !1, s, l), e[Ln] = t.current, Is(e.nodeType === 8 ? e.parentNode : e), new jo(t);
  }, Bt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = xs(t), e = e === null ? null : e.stateNode, e;
  }, Bt.flushSync = function(e) {
    return Ni(e);
  }, Bt.hydrate = function(e, t, n) {
    if (!xa(t)) throw Error(o(200));
    return Sa(null, e, t, !0, n);
  }, Bt.hydrateRoot = function(e, t, n) {
    if (!xo(e)) throw Error(o(405));
    var s = n != null && n.hydratedSources || null, l = !1, u = "", f = Md;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = Cd(t, null, e, 1, n ?? null, l, !1, u, f), e[Ln] = t.current, Is(e), s) for (e = 0; e < s.length; e++) n = s[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ja(t);
  }, Bt.render = function(e, t, n) {
    if (!xa(t)) throw Error(o(200));
    return Sa(null, e, t, !1, n);
  }, Bt.unmountComponentAtNode = function(e) {
    if (!xa(e)) throw Error(o(40));
    return e._reactRootContainer ? (Ni(function() {
      Sa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ln] = null;
      });
    }), !0) : !1;
  }, Bt.unstable_batchedUpdates = ho, Bt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!xa(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return Sa(e, t, n, !1, s);
  }, Bt.version = "18.3.1-next-f1338f8080-20240426", Bt;
}
var Fd;
function fp() {
  if (Fd) return No.exports;
  Fd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), No.exports = hp(), No.exports;
}
var Id;
function mp() {
  if (Id) return Na;
  Id = 1;
  var r = fp();
  return Na.createRoot = r.createRoot, Na.hydrateRoot = r.hydrateRoot, Na;
}
var pp = mp();
const vp = (() => {
  const r = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], d = [64, 59, 55, 50, 45, 40], c = d.at(-1), h = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], y = ["e", "B", "G", "D", "A", "E"], $ = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], g = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], P = {
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
      base: g,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: g,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: g,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: g,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, D = 26, b = 72, N = 30, x = 54, z = 34, T = 11, W = (D + b) / 2, H = N + (d.length - 1) * z + 30, G = (V) => b + V * x, w = (V) => V === 0 ? W : G(V) - x / 2, F = (V) => N + V * z;
  function A(V, X, q) {
    const pe = a.indexOf(r[V][0]) + Number(q.slice(-1)) - 1, K = pe % a.length, re = o[K] + 12 * Math.floor(pe / a.length), ae = V + X - re;
    return a[K] + (ae < 0 ? "♭" : "♯").repeat(Math.abs(ae));
  }
  function ne(V) {
    return [...V.base, ...V.add].sort((X, q) => X[0] - q[0]);
  }
  function J(V, X, q) {
    const pe = X + (q ? 1 : 0), K = m[pe % m.length], re = Math.min(...K.map(([$e]) => $e)), ae = Math.max(...K.map(([, $e]) => $e));
    let we = (V - c % 12 + 12) % 12 - (q ? 8 : 5) + 12 * Math.floor(pe / m.length);
    return re + we < 0 && (we += 12), ae + we > h.pentatonic && (we -= 12), {
      strings: K.map(($e) => $e.map((He) => He + we)),
      start: re + we,
      end: ae + we
    };
  }
  function me(V, X, q) {
    const pe = q[X], K = (V + pe - c % 12 + 12) % 12, re = c + K - pe, ae = d.map((de, Ce) => {
      const we = X + (d.length - 1 - Ce) * 3;
      return [we, we + 1, we + 2].map(($e) => {
        const He = Math.floor($e / q.length), Ye = q[$e % q.length];
        return re + Ye + 12 * He - de;
      });
    });
    return {
      strings: ae,
      start: Math.min(...ae.map((de) => de[0])),
      end: Math.max(...ae.map((de) => de.at(-1)))
    };
  }
  function xe(V, X) {
    const q = [], pe = Math.ceil(-V.end / 12) * 12;
    for (let re = pe; V.start + re <= X; re += 12) {
      const ae = V.strings.map((Ce) => Ce.map((we) => we + re).filter((we) => we >= 0 && we <= X)), de = ae.flat();
      q.push({
        strings: ae,
        start: Math.min(...de),
        end: Math.max(...de),
        partial: V.start + re < 0 || V.end + re > X
      });
    }
    const K = q.filter((re) => !re.partial);
    return K.length ? K : q;
  }
  function Z(V) {
    return ne(V).length === p;
  }
  function ce(V, X, q) {
    const pe = Z(X);
    V.querySelector('[value="3nps"]').disabled = !pe, V.value = pe ? q ?? "3nps" : "pentatonic";
  }
  function ye(V, X, q, pe, K) {
    const re = ne(X).map(([ae]) => ae);
    return pe.map((ae) => {
      const de = ae - 1, Ce = q === "3nps" ? me(V, de, re) : J(V, de, X.base === g), we = K === void 0 ? [Ce] : xe(Ce, K);
      return { number: ae, positions: we };
    });
  }
  function Ee(V, X) {
    const q = V.getBoundingClientRect(), pe = V.querySelectorAll(X);
    let K = 1 / 0;
    pe.forEach((re) => {
      const ae = re.getBoundingClientRect();
      let de = 0;
      ae.left < q.left ? de = ae.left - q.left - 8 : ae.right > q.right && (de = ae.right - q.right + 8), Math.abs(de) < Math.abs(K) && (K = de);
    }), Number.isFinite(K) && (V.scrollLeft += K);
  }
  function he(V, X = !1) {
    const q = V === "3nps" ? p : m.length;
    return Array.from({ length: q }, (pe, K) => {
      const re = K + 1;
      return '<label class="box-toggle" data-box="' + re + '"><input type="checkbox" value="' + re + '"' + (X && K === 0 ? " checked" : "") + "> Boksi " + re + "</label>";
    }).join("");
  }
  function R(V, X) {
    const q = ne(X), pe = new Map(q.map(([re, ae]) => [re, A(V, re, ae)])), K = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return q.flatMap(([re, ae]) => K.flatMap(({ suffix: de, base: Ce }) => {
      const we = Ce.map(([$e]) => pe.get((re + $e) % 12));
      return we.every(Boolean) ? {
        root: (V + re) % 12,
        degree: Number(String(ae).replace(/\D/g, "")),
        name: we[0] + de,
        notes: we,
        base: Ce,
        add: []
      } : [];
    }));
  }
  function Y(V, X) {
    const q = V.base.map(([re]) => (V.root + re) % 12), pe = d.map((re) => {
      const ae = [];
      for (let de = 0; de <= X; de++) {
        const Ce = (re + de) % 12;
        q.includes(Ce) && ae.push({ fret: de, pitch: Ce });
      }
      return ae;
    }), K = [];
    for (let re = 0; re <= pe.length - 3; re++)
      for (const ae of pe[re])
        for (const de of pe[re + 1])
          if (ae.pitch !== de.pitch)
            for (const Ce of pe[re + 2]) {
              if (Ce.pitch === ae.pitch || Ce.pitch === de.pitch) continue;
              const we = [ae.fret, de.fret, Ce.fret], $e = Math.min(...we), He = Math.max(...we);
              if (He - $e > 3) continue;
              const Ye = Array(d.length).fill(null);
              Ye.splice(re, 3, ...we), K.push({ strings: Ye, low: $e, high: He });
            }
    return K.sort((re, ae) => re.high - ae.high || re.low - ae.low);
  }
  const Q = {
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
  }, j = [
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
  function L(V, X) {
    const q = Q[V + ":" + X];
    if (q) return { frets: q, barre: null };
    let pe = null;
    return j.forEach(({ string: K, openPC: re, shapes: ae }) => {
      const de = ae[X];
      if (!de) return;
      let Ce = (V - re + 12) % 12;
      if (Ce + Math.min(...de.filter((He) => He !== null)) < 0 && (Ce += 12), pe && pe.fret <= Ce) return;
      const we = de.map((He) => He === null ? null : Ce + He), $e = Ce > 0 && de.at(-1) === 0 ? { fret: Ce, from: K, to: de.length - 1 } : null;
      pe = { fret: Ce, frets: we, barre: $e };
    }), pe && { frets: pe.frets, barre: pe.barre };
  }
  function oe(V, { frets: X, barre: q }, pe) {
    const we = [...d].reverse(), $e = X.filter((Ve) => Ve > 0), Ye = !$e.length || Math.max(...$e) <= 4 && (X.includes(0) || Math.min(...$e) === 1) ? 1 : Math.min(...$e), We = (Ve) => 24 + Ve * 14, Xe = (Ve) => 30 + (Ve - Ye) * 18 + 18 / 2, ut = 102;
    let Je = '<svg class="chord-svg" viewBox="0 0 108 ' + (ut + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + pe + "-ote paksusta kielestä ohueen: " + X.map((Ve) => Ve ?? "x").join(" ") + '">';
    for (let Ve = 0; Ve <= 4; Ve++)
      Je += '<line class="' + (Ve === 0 && Ye === 1 ? "nut" : "fret") + '" x1="' + We(0) + '" y1="' + (30 + Ve * 18) + '" x2="' + We(5) + '" y2="' + (30 + Ve * 18) + '"/>';
    return X.forEach((Ve, it) => {
      Je += '<line class="string" x1="' + We(it) + '" y1="30" x2="' + We(it) + '" y2="' + ut + '"/>';
    }), Ye > 1 && (Je += '<text class="fret-label" x="15" y="' + (Xe(Ye) + 4) + '">' + Ye + "</text>"), q && (Je += '<rect class="barre" x="' + (We(q.from) - 6.5) + '" y="' + (Xe(q.fret) - 6.5) + '" width="' + ((q.to - q.from) * 14 + 13) + '" height="13" rx="6.5"/>'), X.forEach((Ve, it) => {
      if (Ve === null) {
        Je += '<text class="marker" x="' + We(it) + '" y="22">×</text>';
        return;
      }
      const Kt = (we[it] + Ve) % 12 === V;
      if (Ve === 0) {
        Je += '<circle class="open' + (Kt ? " root-open" : "") + '" cx="' + We(it) + '" cy="18" r="4.5"/>';
        return;
      }
      q && Ve === q.fret && it >= q.from && it <= q.to && !Kt || (Je += '<circle class="' + (Kt ? "root" : "tone") + '" cx="' + We(it) + '" cy="' + Xe(Ve) + '" r="6.5"/>');
    }), Je + "</svg>";
  }
  function _(V, X) {
    const q = new URLSearchParams(location.search), pe = r.indexOf(q.get("toonikka")), K = q.get("asteikko");
    return {
      rootPC: pe === -1 ? V : pe,
      scaleId: Object.hasOwn(P, K) ? K : X
    };
  }
  function se(V, X, q) {
    return V + "?" + new URLSearchParams({ toonikka: r[X], asteikko: q });
  }
  function M(V, X, q, {
    boxes: pe = [],
    onlyBoxNotes: K = !1,
    automatic: re = !0,
    focusDegree: ae = "",
    grip: de = null,
    barre: Ce = null,
    label: we = r[V] + " " + X.name,
    notes: $e = null,
    targets: He = !1,
    muteFret: Ye = null
  } = {}) {
    const We = G(q), Xe = We + 48, ut = Xe + 28, Je = N - 14, Ve = F(d.length - 1) + 14, it = Ve - Je, Kt = re ? 680 : Math.ceil(ut * 0.64), Xt = pe.flatMap((_e) => _e.positions), Et = {};
    X.base.forEach(([_e, Le]) => Et[(V + _e) % 12] = { deg: Le, added: !1 }), X.add.forEach(([_e, Le]) => Et[(V + _e) % 12] = { deg: Le, added: !0 });
    const un = d.map((_e, Le) => !!de && de[Le] === null), Zt = !!de && Ye !== null, qt = $.filter((_e, Le) => un[Le]).reverse(), _t = we + ". " + q + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (qt.length ? " Soittamatta jäävät kielet: " + qt.join(", ") + "." : "");
    let be = '<svg viewBox="0 0 ' + ut + " " + H + '" style="min-width:' + Kt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (He ? "group" : "img") + '" aria-label="' + _t + '">';
    be += '<rect x="' + D + '" y="' + Je + '" width="' + (b - D) + '" height="' + it + '" rx="6" fill="#2a2338"/>', be += '<rect x="' + b + '" y="' + Je + '" width="' + (We - b) + '" height="' + it + '" fill="#231a12"/>', be += '<rect x="' + We + '" y="' + Je + '" width="' + (ut - We - 4) + '" height="' + it + '" rx="8" fill="#32251e"/>';
    for (let _e = 1; _e <= q; _e++)
      be += '<line x1="' + G(_e) + '" y1="' + Je + '" x2="' + G(_e) + '" y2="' + Ve + '" stroke="#6f5b47" stroke-width="2"/>';
    be += '<rect x="' + (b - 3) + '" y="' + Je + '" width="6" height="' + it + '" rx="2" fill="#d8cbb6"/>', be += '<rect x="' + (Xe - 11) + '" y="' + (Je + 3) + '" width="22" height="' + (it - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', be += '<rect x="' + (Xe - 4) + '" y="' + (Je + 7) + '" width="3" height="' + (it - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Ut = (Je + Ve) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((_e) => _e <= q).forEach((_e) => be += '<circle cx="' + w(_e) + '" cy="' + Ut + '" r="5.5" fill="#7a6550"/>');
    for (let _e = 12; _e <= q; _e += 12)
      be += '<circle cx="' + w(_e) + '" cy="' + (Ut - z) + '" r="5.5" fill="#7a6550"/>', be += '<circle cx="' + w(_e) + '" cy="' + (Ut + z) + '" r="5.5" fill="#7a6550"/>';
    be += '<text x="' + W + '" y="' + (H - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', be += '<text x="' + b + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', be += '<text x="' + Xe + '" y="' + (H - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let _e = 1; _e <= q; _e++)
      be += '<text x="' + w(_e) + '" y="' + (H - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + _e + "</text>";
    if (pe.forEach(({ number: _e, positions: Le }) => {
      Le.forEach((Re) => {
        const Ge = Re.partial ? "box-highlight box-partial" : "box-highlight";
        be += '<g class="' + Ge + '" data-box="' + _e + '" aria-hidden="true">';
        const rt = Re.strings.find((kt) => kt.length), $t = (w(rt[0]) + w(rt.at(-1))) / 2;
        be += '<text class="box-number" x="' + $t + '" y="12">' + _e + "</text>", Re.strings.forEach((kt, en) => {
          if (!kt.length) return;
          const Mn = w(kt[0]) - 16, yn = w(kt.at(-1)) - w(kt[0]) + 32;
          be += '<rect class="box-band" x="' + Mn + '" y="' + (F(en) - 14) + '" width="' + yn + '" height="28" rx="14"/>';
        }), be += "</g>";
      });
    }), d.forEach((_e, Le) => {
      const Re = 1 + Le * 0.45, Ge = F(Le), rt = un[Le] && !Zt;
      rt ? be += '<text class="muted-mark" x="' + W + '" y="' + (Ge + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : un[Le] && Ye === 0 || (be += '<line x1="' + (D + 4) + '" y1="' + Ge + '" x2="' + (b - 4) + '" y2="' + Ge + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), be += "<g" + (rt ? ' opacity=".35"' : "") + ">", be += '<line x1="' + b + '" y1="' + Ge + '" x2="' + (Xe + 5) + '" y2="' + Ge + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', be += '<circle cx="' + (Xe + 5) + '" cy="' + Ge + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', be += "</g>", be += '<text x="13" y="' + (Ge + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + y[Le] + "</text>";
    }), de && Ce && Ce.fret >= 1 && Ce.fret <= q) {
      const _e = F(Ce.from), Le = F(Ce.to), Re = Math.min(_e, Le) - 6, Ge = Math.max(_e, Le) + 6;
      be += '<rect class="barre-indicator" x="' + (w(Ce.fret) - 7) + '" y="' + Re + '" width="14" height="' + (Ge - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return He && (be += '<g class="fret-targets">', d.forEach((_e, Le) => {
      for (let Re = 0; Re <= q; Re++) {
        const Ge = Re ? $[Le] + "-kieli, " + Re + ". nauha" : "vapaa " + $[Le] + "-kieli", rt = Re ? x : b - D - 6;
        be += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Le + '" data-fret="' + Re + '" data-midi="' + (_e + Re) + '" aria-label="' + Ge + '" x="' + (w(Re) - rt / 2) + '" y="' + (F(Le) - z / 2) + '" width="' + rt + '" height="' + z + '" fill="transparent"/>';
      }
    }), be += "</g>"), ($e ?? []).forEach(({ string: _e, fret: Le, label: Re, kind: Ge }) => {
      be += '<g class="octave-note octave-' + Ge + '">', be += '<circle cx="' + w(Le) + '" cy="' + F(_e) + '" r="' + T + '"/>', be += '<text x="' + w(Le) + '" y="' + (F(_e) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", be += "</g>";
    }), de && (be += '<g class="grip-notes">'), ($e ? [] : d).forEach((_e, Le) => {
      for (let Re = 0; Re <= q; Re++) {
        const Ge = (_e + Re) % 12;
        if (!(Ge in Et) || de && de[Le] !== Re || K && !Xt.some(({ strings: yn }) => {
          const gn = yn[Le];
          return gn.length > 0 && Re >= gn[0] && Re <= gn.at(-1);
        })) continue;
        const rt = Et[Ge], $t = rt.deg === "1", kt = rt.added ? "#f0a13c" : $t ? "#4b2fd6" : "#6d4aff", en = rt.added ? "#1a1430" : "#fff";
        rt.deg === ae && (be += '<circle class="focus-note" cx="' + w(Re) + '" cy="' + F(Le) + '" r="14.5"/>');
        const Mn = de ? ' data-string="' + (Le + 1) + '" data-fret="' + Re + '" data-degree="' + rt.deg + '"' : "";
        be += "<circle" + Mn + ' cx="' + w(Re) + '" cy="' + F(Le) + '" r="' + T + '" fill="' + kt + '" stroke="' + ($t ? "#fff" : "#1a1430") + '" stroke-width="' + ($t ? 2.5 : 1) + '"/>', be += '<text x="' + w(Re) + '" y="' + (F(Le) + 3.5) + '" font-size="' + (rt.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + en + '" text-anchor="middle">' + rt.deg + "</text>";
      }
    }), de && (be += "</g>"), Zt && un.forEach((_e, Le) => {
      if (!_e) return;
      const Re = w(Ye), Ge = F(Le);
      be += '<g class="muted-mark grip-mute" data-string="' + (Le + 1) + '" data-fret="' + Ye + '">', be += '<circle cx="' + Re + '" cy="' + Ge + '" r="9" fill="' + (Ye === 0 ? "#2a2338" : "#231a12") + '"/>', be += '<text x="' + Re + '" y="' + (Ge + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', be += "</g>";
    }), be += "</svg>", be;
  }
  return {
    CHROM: r,
    OPEN_PITCHES: d,
    PENT_MAJ: g,
    SCALES: P,
    noteName: A,
    scaleNotes: ne,
    scaleTriads: R,
    triadGrips: Y,
    chordGrip: L,
    renderChordDiagram: oe,
    selectionFromURL: _,
    selectionHref: se,
    renderBoard: M,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: Z,
    syncBoxSystem: ce,
    fingeringBoxes: ye,
    boxOptions: he,
    revealPositions: Ee
  };
})();
globalThis.MusicMapFretboard = vp;
function bo(r) {
  return 440 * Math.pow(2, (r - 69) / 12);
}
function kp(r) {
  return 69 + 12 * Math.log2(r / 440);
}
function yp(r) {
  const a = kp(r), o = Math.round(a), d = (a - o) * 100;
  return { midi: o, cents: d };
}
const Ie = globalThis.MusicMapFretboard, De = (r) => (r % 12 + 12) % 12, gp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], jp = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ae = (r, a = !1, o = !1) => (a ? jp : gp)[De(r)] + (o ? Math.floor(r / 12) - 1 : ""), fi = (r) => Ie.CHROM[De(r)], ur = (r, a, o) => Ie.noteName(De(r), a, o);
function xp(r, a) {
  const o = Math.floor(r / 12) - 1;
  return a[0] === "B" && De(r) < 2 ? o - 1 : a[0] === "C" && De(r) > 9 ? o + 1 : o;
}
const ft = ["ohut E", "B", "G", "D", "A", "paksu E"], tu = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], $a = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], Rh = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Vt = (r) => r === 0 ? "vapaa kieli" : `${r}. nauha`, Ne = (r, a) => ({ string: r, fret: a, midi: Ie.OPEN_PITCHES[r] + a });
function vs(r, a, o) {
  return [...r].sort((d, c) => d - c).flatMap((d) => Array.from({ length: Math.max(0, o - a + 1) }, (c, h) => Ne(d, a + h)));
}
const Ue = (r) => `${r.string}:${r.fret}`, Ai = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Oh = (r, a) => a === "maj" ? `${fi(r)}-duurisointu` : a === "min" ? `${fi(r)}-mollisointu` : `${fi(r)}7-sointu`, cr = [
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
], Dd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Fh(r, a) {
  const o = Dd[a] ?? Dd.E, d = De(r - o.root);
  return o.frets.flatMap((c, h) => c === null ? [] : [Ne(h, c + d)]);
}
const Ma = {
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
}, Da = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, ci = (r, a, o, d) => typeof r == "number" && Number.isFinite(r) ? Math.max(a, Math.min(o, r)) : d, En = (r, a, o) => a.includes(r) ? r : o;
function Ra(r) {
  const a = { ...Ma };
  a.mode = En(r.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(r.strings) ? [...new Set(r.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, d) => o - d) : a.strings, a.strings.length || (a.strings = [...Ma.strings]), a.min = Math.round(ci(r.min, 0, 24, a.min)), a.max = Math.round(ci(r.max, a.min, 24, Math.max(a.min, a.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof r[o] == "boolean" && (a[o] = r[o]);
  return a.check = En(r.check, ["class", "pitch"], a.check), a.input = En(r.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(r.rounds) ? r.rounds : a.rounds, a.root = Math.round(ci(r.root, 0, 11, a.root)), a.scale = typeof r.scale == "string" && Object.hasOwn(Ie.SCALES, r.scale) ? r.scale : a.scale, a.box = Math.round(ci(r.box, 0, 5, a.box)), a.order = En(r.order, ["random", "up", "down"], a.order), a.chord = En(r.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = En(r.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = En(r.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(r.intervals) ? [...new Set(r.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, d) => o - d) : a.intervals, a.intervals.length || (a.intervals = [...Ma.intervals]), a.direction = En(r.direction, ["up", "down", "both"], a.direction), a.hints = En(r.hints, ["off", "always", "fade"], a.hints), a.activity = En(r.activity, ["play", "degree"], a.activity), a.minRms = ci(r.minRms, 1e-3, 0.15, a.minRms), a.clarity = ci(r.clarity, 0.85, 0.99, a.clarity), a.stability = ci(r.stability, 120, 800, a.stability), a.cents = ci(r.cents, 10, 45, a.cents), a.device = typeof r.device == "string" ? r.device.slice(0, 256) : "", a;
}
function Sp(r, a) {
  const o = new URLSearchParams(r), d = { ...a };
  for (const [c, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(c) && Object.assign(d, { [h]: o.get(c) });
  for (const [c, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(c) && (d[h] = Number(o.get(c)));
  o.has("kielet") && (d.strings = o.get("kielet").split(",").map((c) => Number(c) - 1)), o.has("intervallit") && (d.intervals = o.get("intervallit").split(",").map(Number));
  for (const [c, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(c) && (d[h] = o.get(c) === "1");
  if (o.has("toonikka")) {
    const c = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = c.charAt(0).toUpperCase() + c.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(Ie.CHROM.indexOf(h), p.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    m >= 0 && (d.root = m);
  }
  return Ra(d);
}
function wp(r) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: r.mode,
    toonikka: Ie.CHROM[r.root],
    asteikko: r.scale,
    alku: String(r.min),
    loppu: String(r.max),
    boksi: String(r.box),
    kierros: String(r.rounds),
    tarkistus: r.check,
    muoto: r.shape,
    sointu: r.chord,
    jarjestys: r.order,
    vastaus: r.input,
    vihjeet: r.hints,
    tehtava: r.activity,
    sointuaste: r.chordTone,
    suunta: r.direction,
    kielet: r.strings.map((a) => a + 1).join(","),
    intervallit: r.intervals.join(","),
    kromaattinen: r.accidentals ? "1" : "0",
    alennukset: r.flats ? "1" : "0",
    kertaus: r.weak ? "1" : "0",
    vertailu: r.reference ? "1" : "0"
  });
}
const Pi = (r) => r.mode === "ear-note" ? "note" : ["scale", "chord"].includes(r.mode) && r.activity === "degree" ? "degree" : r.input, Bn = (r) => r.mode === "scale" && r.order !== "random", Ih = (r) => ["note", "degree"].includes(Pi(r)) ? "class" : Bn(r) ? "pitch" : r.check, Ea = (r) => Pi(r) === "mic", zd = "musiikin-kartta:harjoittelu", Dh = 3, Io = () => ({ version: Dh, settings: { ...Ma }, stats: {}, recent: [], sessions: [] }), zh = (r) => `${r.input}:${r.check}:${r.hint ? "guided" : "solo"}:${r.item}`, kn = (r) => typeof r == "number" && Number.isFinite(r) && r >= 0;
function Np(r) {
  return !!r && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => kn(r[a])) && r.correct <= r.attempts && (r.errors === void 0 || kn(r.errors)) && (r.ema === void 0 || kn(r.ema) && r.ema <= 1) && (r.emaMs === void 0 || kn(r.emaMs));
}
function Ep(r) {
  return !!r && typeof r.id == "string" && kn(r.count) && kn(r.first) && r.first <= r.count && kn(r.ms) && kn(r.at) && (r.solo === void 0 || kn(r.solo) && r.solo <= r.count) && (r.soloFirst === void 0 || kn(r.soloFirst) && r.soloFirst <= (r.solo ?? r.count));
}
function Bd(r) {
  if (!r) return Io();
  const a = JSON.parse(r);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !Np(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !kn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !Ep(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, d = Ra(a.settings ?? {}), c = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  c && (d.hints = "off");
  const h = {
    version: Dh,
    settings: d,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (c || a.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const Vd = 2500, Cp = 8e3, Kd = 0.3, dr = (r) => r.ema ?? r.correct / r.attempts, hr = (r) => r.emaMs ?? r.totalMs / r.attempts;
function nu(r) {
  if (!r?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (hr(r) - Vd) / (Cp - Vd)));
  return dr(r) * 0.65 + a * 0.35;
}
function bp(r) {
  return !r || r.attempts < 3 ? 3 : 0.25 + (1 - nu(r)) * 3;
}
class Ud {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Bd(a?.getItem(zd) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = Io();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(zd, JSON.stringify(this.data)), this.warning = "";
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
    const o = zh(a), d = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, c = Number(a.first), h = {
      attempts: d.attempts + 1,
      correct: d.correct + c,
      errors: d.errors + a.errors,
      totalMs: d.totalMs + a.ms,
      lastSeen: a.at,
      ema: d.attempts ? dr(d) + Kd * (c - dr(d)) : c,
      emaMs: d.attempts ? hr(d) + Kd * (a.ms - hr(d)) : a.ms
    };
    Object.defineProperty(this.data.stats, o, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((o) => o.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const o = Bd(a);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...Io(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Mp = 4e3, Hd = 12, Tp = 1500;
function _p(r, a) {
  const o = r.left + r.stickyLeft, d = r.right;
  let c = 0;
  if (a.left < o ? c = a.left - o - Hd : a.right > d && (c = a.right - d + Hd), c === 0) return null;
  const h = Math.max(0, Math.min(r.maxScroll, r.scrollLeft + c));
  return Math.abs(h - r.scrollLeft) < 1 ? null : h;
}
function Ap(r, a) {
  return a.right <= r.left + r.stickyLeft || a.left >= r.right;
}
function Bh(r, a, o, { stickySelector: d, enabled: c = !0, playback: h } = {}) {
  const p = E.useRef(0), m = E.useRef(!1), y = E.useRef(""), $ = E.useRef(0), v = E.useRef(h);
  E.useEffect(() => {
    const g = r.current;
    if (!g || !c) return;
    const P = () => {
      p.current = Date.now() + Mp;
    }, D = () => {
      m.current = !0, P();
    }, b = () => {
      m.current && (m.current = !1, P());
    }, N = (x) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(x.key) && P();
    };
    return g.addEventListener("pointerdown", D, { passive: !0 }), g.addEventListener("touchstart", D, { passive: !0 }), g.addEventListener("wheel", P, { passive: !0 }), g.addEventListener("keydown", N), window.addEventListener("pointerup", b, { passive: !0 }), window.addEventListener("pointercancel", b, { passive: !0 }), window.addEventListener("touchend", b, { passive: !0 }), window.addEventListener("touchcancel", b, { passive: !0 }), () => {
      g.removeEventListener("pointerdown", D), g.removeEventListener("touchstart", D), g.removeEventListener("wheel", P), g.removeEventListener("keydown", N), window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), window.removeEventListener("touchend", b), window.removeEventListener("touchcancel", b);
    };
  }, [r, c]), E.useLayoutEffect(() => {
    const g = h !== void 0 && !!h && h !== v.current;
    v.current = h, g && !m.current && (p.current = 0);
  }, [h]), E.useLayoutEffect(() => {
    h === void 0 && y.current === "" && o !== "" && Date.now() - $.current > Tp && !m.current && (p.current = 0), y.current !== "" && o === "" && ($.current = Date.now()), y.current = o;
    const g = r.current;
    if (!g || !c || !o || m.current || Date.now() < p.current) return;
    const P = g.querySelector(a);
    if (!P) return;
    const D = g.getBoundingClientRect(), b = P.getBoundingClientRect(), N = d ? g.querySelector(d) : null, x = N && getComputedStyle(N).position === "sticky" ? N.getBoundingClientRect().width : 0, z = {
      left: D.left,
      right: D.left + g.clientWidth,
      scrollLeft: g.scrollLeft,
      maxScroll: g.scrollWidth - g.clientWidth,
      stickyLeft: x
    }, T = _p(z, b);
    if (T === null) return;
    const H = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Ap(z, b);
    typeof g.scrollTo == "function" ? g.scrollTo({ left: T, behavior: H ? "auto" : "smooth" }) : g.scrollLeft = T;
  }, [r, a, o, d, c, h]);
}
const Pp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Lp = ["e", "B", "G", "D", "A", "E"];
function Vh({ string: r }) {
  return /* @__PURE__ */ i.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ i.jsxs("span", { children: [
      /* @__PURE__ */ i.jsxs("span", { className: "string-number", children: [
        r + 1,
        " · "
      ] }),
      /* @__PURE__ */ i.jsx("strong", { children: Lp[r] })
    ] }),
    r === 0 ? /* @__PURE__ */ i.jsx("small", { children: "ohuin" }) : r === 5 ? /* @__PURE__ */ i.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Kh = (r) => ({ "--string-thickness": 1.25 + r * 0.45 + "px" }), $p = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Uh({ min: r, max: a }) {
  return /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { children: [
    /* @__PURE__ */ i.jsx("th", { scope: "col", children: /* @__PURE__ */ i.jsx("span", { className: "board-head-label", children: "Kielet" }) }),
    Array.from({ length: a - r + 1 }, (o, d) => {
      const c = r + d;
      return /* @__PURE__ */ i.jsxs("th", { scope: "col", className: c === 0 ? "open-fret" : "", children: [
        c,
        c > 0 && c % 12 === 0 ? /* @__PURE__ */ i.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Pp.has(c) ? /* @__PURE__ */ i.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, c);
    })
  ] }) });
}
function bn({ area: r, marks: a = [], mutedStrings: o = [], disabled: d = !1, onAnswer: c, caption: h = "Otelauta", follow: p = "hints", playback: m }) {
  const y = { "--cols": r.max - r.min + 1 }, { strings: $, min: v, max: g } = r, [P, D] = E.useState({ string: Math.min(...$), fret: v }), b = E.useRef(null), N = new Map(a.map((G) => [Ue(G), G])), x = a.map((G) => `${Ue(G)}${G.kind}`).join(",");
  E.useEffect(() => {
    if (p !== "hints") return;
    const G = b.current, w = G?.querySelector(".target, .anchor");
    G && w && (G.scrollLeft += w.getBoundingClientRect().left - G.getBoundingClientRect().left - G.clientWidth / 2 + w.clientWidth / 2);
  }, [x, p]), E.useEffect(() => {
    p === "playing" && b.current && (b.current.scrollLeft = 0);
  }, [p, v, g]);
  const z = a.find((G) => G.kind === "playing");
  Bh(b, ".playing", z ? Ue(z) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: m });
  const [T, W] = E.useState({ left: !1, right: !1 });
  E.useEffect(() => {
    const G = b.current;
    if (!G) return;
    const w = () => {
      const A = G.scrollLeft > 2, ne = G.scrollLeft + G.clientWidth < G.scrollWidth - 2;
      W((J) => J.left === A && J.right === ne ? J : { left: A, right: ne });
    };
    w(), G.addEventListener("scroll", w, { passive: !0 });
    const F = typeof ResizeObserver > "u" ? null : new ResizeObserver(w);
    return F?.observe(G), () => {
      G.removeEventListener("scroll", w), F?.disconnect();
    };
  }, [x, v, g]);
  const H = $.includes(P.string) && P.fret >= v && P.fret <= g ? P : { string: Math.min(...$), fret: v };
  return /* @__PURE__ */ i.jsxs("div", { className: "fret-wrap" + (T.left ? " more-left" : "") + (T.right ? " more-right" : ""), children: [
    (T.left || T.right) && /* @__PURE__ */ i.jsxs("p", { className: "fret-scroll-hint", children: [
      T.left && /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      T.left && T.right ? "molemmilla puolilla" : T.right ? "oikealla" : "vasemmalla",
      T.right && /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { ref: b, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ i.jsxs("table", { className: "practice-board" + (d && !c ? " display-only" : ""), style: y, children: [
      /* @__PURE__ */ i.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ i.jsx(Uh, { min: v, max: g }),
      /* @__PURE__ */ i.jsx("tbody", { children: Ie.OPEN_PITCHES.map((G, w) => /* @__PURE__ */ i.jsxs("tr", { className: $.includes(w) ? "" : "unused", style: Kh(w), children: [
        /* @__PURE__ */ i.jsxs("th", { scope: "row", "aria-label": `${w + 1}. kieli: ${ft[w]}${o.includes(w) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ i.jsx(Vh, { string: w }),
          o.includes(w) && /* @__PURE__ */ i.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        vs([w], v, g).map((F) => {
          const A = N.get(Ue(F)), ne = `${ft[w]}-kieli, ${Vt(F.fret)}`;
          return /* @__PURE__ */ i.jsx("td", { className: `${F.fret === 0 ? "open-fret " : ""}${A ? A.kind === "answer" ? "target" : A.kind : ""}`, children: /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "data-string": w,
              "data-fret": F.fret,
              tabIndex: H.string === w && H.fret === F.fret ? 0 : -1,
              onFocus: () => D(F),
              onKeyDown: (J) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(J.key)) return;
                J.preventDefault();
                const me = [...$].sort((ye, Ee) => ye - Ee), xe = me.indexOf(w), Z = J.key === "ArrowUp" ? me[Math.max(0, xe - 1)] : J.key === "ArrowDown" ? me[Math.min(me.length - 1, xe + 1)] : w, ce = J.key === "Home" ? v : J.key === "End" ? g : Math.max(v, Math.min(g, F.fret + (J.key === "ArrowRight" ? 1 : J.key === "ArrowLeft" ? -1 : 0)));
                J.currentTarget.closest("table")?.querySelector(`button[data-string="${Z}"][data-fret="${ce}"]`)?.focus();
              },
              disabled: d || !$.includes(w),
              "aria-label": ne + (A ? `, ${$p[A.kind]}${A.label ? " " + A.label : ""}` : ""),
              onClick: () => c?.(F),
              children: A ? /* @__PURE__ */ i.jsx("span", { className: "dot", children: A.label || "●" }) : null
            }
          ) }, F.fret);
        })
      ] }, w)) })
    ] }) })
  ] });
}
function Rp({ area: r, stats: a, input: o, check: d, flats: c }) {
  const { strings: h, min: p, max: m } = r, y = `${o}:${d}:solo:notes:`;
  return /* @__PURE__ */ i.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ i.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ i.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ i.jsx(Uh, { min: p, max: m }),
    /* @__PURE__ */ i.jsx("tbody", { children: Ie.OPEN_PITCHES.map(($, v) => /* @__PURE__ */ i.jsxs("tr", { className: h.includes(v) ? "" : "unused", style: Kh(v), children: [
      /* @__PURE__ */ i.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${ft[v]}`, children: /* @__PURE__ */ i.jsx(Vh, { string: v }) }),
      vs([v], p, m).map((g) => {
        const P = Object.hasOwn(a, y + Ue(g)) ? a[y + Ue(g)] : void 0, D = nu(P), b = D === null ? "unseen" : P.attempts < 3 ? "few" : D >= 0.8 ? "strong" : D >= 0.5 ? "growing" : "weak", N = `${ft[v]}-kieli, ${Vt(g.fret)}, ${Ae(g.midi, c)}`, x = P ? `${Math.round(D * 100)} %, ${P.correct}/${P.attempts} heti oikein, viime aikoina ${Math.round(dr(P) * 100)} % ja ${(hr(P) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ i.jsxs("td", { className: `${g.fret === 0 ? "open-fret " : ""}${b}`, title: `${N}: ${x}`, children: [
          /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: D === null ? "·" : P.attempts < 3 ? "?" : Math.round(D * 100) }),
          /* @__PURE__ */ i.jsxs("span", { className: "sr-only", children: [
            N,
            ": ",
            x
          ] })
        ] }, g.fret);
      })
    ] }, v)) })
  ] }) });
}
const Op = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", za = (r) => r.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[r.scale]) : Ai[r.mode === "caged" ? "maj" : r.chord].tones, Hh = (r) => Ie.fingeringBoxes(r.root, Ie.SCALES[r.scale], "pentatonic", [r.box])[0].positions[0];
function Li(r) {
  if (r.mode === "caged") {
    const a = Fh(r.root, r.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (r.mode === "scale" && r.box) {
    const a = Hh(r);
    return { strings: r.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: r.strings, min: r.min, max: r.max, fixed: "" };
}
function Fp(r) {
  const a = Li(r);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function mr(r) {
  const a = Li(r), o = vs(a.strings, a.min, a.max);
  if (r.mode === "notes" || r.mode === "ear-note" || r.mode === "repeat")
    return o.filter((h) => r.accidentals || ![1, 3, 6, 8, 10].includes(De(h.midi)));
  if (r.mode === "caged") {
    const h = new Set(Fh(r.root, r.shape).map(Ue));
    return o.filter((p) => h.has(Ue(p)));
  }
  if (r.mode === "interval") return o;
  const d = o.filter((h) => za(r).some(([p]) => De(h.midi - r.root) === p));
  if (r.mode !== "scale" || !r.box) return d;
  const c = Hh(r);
  return d.filter((h) => {
    const p = c.strings[h.string];
    return p.length > 0 && h.fret >= p[0] && h.fret <= p.at(-1);
  });
}
function Gh(r, a) {
  return (r.direction === "both" ? ["up", "down"] : [r.direction]).flatMap((d) => r.intervals.map((c) => ({
    iv: c,
    direction: d,
    pairs: a.flatMap((h) => a.filter((p) => p.midi === h.midi + (d === "down" ? -c : c)).map((p) => ({ reference: h, target: p })))
  }))).filter((d) => d.pairs.length);
}
function Ip(r) {
  const a = za(r);
  return r.mode !== "chord" || r.chordTone === "random" ? [] : r.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(r.chordTone));
}
function Do(r) {
  const a = mr(r), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return r.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${r.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : r.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : r.mode !== "interval" && !r.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const d = Ip(r).filter(([c]) => !a.some((h) => De(h.midi - r.root) === c));
  return d.length ? `Valitulta alueelta puuttuu soinnun ${d.map(([, c]) => c + ". aste").join(" ja ")}. ${o}` : r.mode === "interval" && !Gh(r, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Bn(r) && new Set(a.map((c) => c.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function Dp(r, a) {
  const o = [...new Map([...a].sort((d, c) => d.midi - c.midi || d.string - c.string).map((d) => [d.midi, d])).values()];
  return r.order === "down" ? o.reverse() : o;
}
function Wh(r) {
  return Bn(r) ? new Set(mr(r).map((a) => a.midi)).size : r.rounds;
}
function zp(r, a) {
  return r.hints === "always" ? 2 : r.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function ss(r, a, o = Math.random) {
  if (!r.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const d = a.reduce((p, m) => p + m, 0), c = Math.min(0.999999999, Math.max(0, o()));
  if (!(d > 0)) return r[Math.floor(c * r.length)];
  let h = c * d;
  for (let p = 0; p < r.length; p++)
    if (h -= a[p], h < 0) return r[p];
  return r.at(-1);
}
const Gd = (r, a) => r.mode === "caged" ? `caged:${r.root}:${r.shape}:${a}` : r.mode === "chord" ? `chord:${r.root}:${r.chord}:${a}:${r.activity}` : `scale:${r.root}:${r.scale}:${a}:${r.activity}`;
function Mi(r, a) {
  const o = r.filter((d) => !a(d));
  return o.length ? o : r;
}
function Bp(r, a, o = {}, d, c = Math.random) {
  const h = Do(r);
  if (h) throw new Error(h);
  const p = Ih(r), m = Pi(r), y = p === "pitch", $ = (F) => r.weak ? bp(o[zh({ input: m, check: p, hint: !1, item: F })]) : 1, v = (F) => ss(F, F.map(() => 1), c), g = mr(r), P = { check: p, sound: [], choices: "position" };
  if (r.mode === "notes") {
    const F = Mi(g, (J) => !!d && Ue(J) === Ue(d.position)), A = ss(F, F.map((J) => $(`notes:${Ue(J)}`)), c), ne = Ae(A.midi, r.flats, y);
    return {
      ...P,
      position: A,
      midi: A.midi,
      name: ne,
      item: `notes:${Ue(A)}`,
      prompt: `Etsi ${ne} ${tu[A.string]}.`
    };
  }
  if (r.mode === "ear-note") {
    const F = (me) => `ear-note:${De(me.midi)}${r.reference ? ":ref" : ""}`, A = Mi(g, (me) => !!d && De(me.midi) === De(d.midi)), ne = ss(A, A.map((me) => $(F(me))), c), J = r.reference ? 57 + 12 * Math.round((ne.midi - 57) / 12) : void 0;
    return {
      ...P,
      position: ne,
      midi: ne.midi,
      name: Ae(ne.midi, r.flats),
      item: F(ne),
      choices: "note",
      reference: J,
      sound: J === void 0 ? [ne.midi] : [J, ne.midi],
      prompt: r.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (r.mode === "repeat") {
    const F = Mi(g, (ne) => !!d && ne.midi === d.midi), A = ss(F, F.map((ne) => $(`repeat:${ne.midi}`)), c);
    return {
      ...P,
      position: A,
      midi: A.midi,
      name: Ae(A.midi, r.flats, !0),
      item: `repeat:${A.midi}`,
      sound: [A.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (r.mode === "interval") {
    const F = Mi(Gh(r, g), (J) => d?.interval === J.iv && d?.direction === J.direction), A = ss(F, F.map((J) => $(`interval:${J.iv}:${J.direction}`)), c), ne = v(Mi(A.pairs, (J) => d?.reference === J.reference.midi));
    return {
      ...P,
      position: ne.target,
      midi: ne.target.midi,
      name: Ae(ne.target.midi, r.flats, !0),
      item: `interval:${A.iv}:${A.direction}`,
      interval: A.iv,
      direction: A.direction,
      reference: ne.reference.midi,
      sound: [ne.reference.midi, ne.target.midi],
      prompt: `Kuulet ${A.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ae(ne.reference.midi, r.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const D = za(r);
  let b, N = 0;
  if (Bn(r)) {
    const F = Dp(r, g);
    N = F.length, b = F[a % F.length];
  } else {
    const F = D.filter(([J]) => g.some((me) => De(me.midi - r.root) === J)), A = r.mode === "chord" && r.chordTone !== "random" ? r.chordTone === "build" ? [D[a % D.length]] : D.filter(([, J]) => J.endsWith(r.chordTone)) : Mi(F, ([J]) => d?.interval === J), [ne] = ss(A, A.map(([J]) => $(Gd(r, J))), c);
    b = v(Mi(g.filter((J) => De(J.midi - r.root) === ne), (J) => !!d && Ue(J) === Ue(d.position)));
  }
  const x = De(b.midi - r.root), z = D.find(([F]) => F === x)[1], T = ur(r.root, x, z), W = y ? T + xp(b.midi, T) : T, H = r.mode === "scale" ? `${fi(r.root)}-${Ie.SCALES[r.scale].name}${r.box ? `, boksi ${r.box}` : ""}` : r.mode === "caged" ? `${fi(r.root)}-duurisointu, ${r.shape}-muoto` : Oh(r.root, r.chord), G = r.mode !== "caged" && r.activity === "degree", w = G ? `${H}: mikä aste on ${T}?` : N ? `${H} ${r.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % N + 1}/${N}: ${z}. aste (${W}).` : `${H}: etsi ${z}. aste${y ? ` (${W})` : ""}.`;
  return {
    ...P,
    position: b,
    midi: b.midi,
    name: W,
    item: Gd(r, x),
    prompt: w,
    degree: z,
    interval: x,
    choices: G ? "degree" : "position"
  };
}
function zo(r, a, o) {
  return Number.isInteger(a) && (o === "class" ? De(r) === De(a) : r === a);
}
function Qh(r, a, o) {
  return zo(a.midi, o.midi, a.check) ? r.mode === "notes" ? o.string === a.position.string : Op(r) ? mr(r).some((d) => Ue(d) === Ue(o)) : !0 : !1;
}
function Vp(r, a) {
  const o = Li(r);
  return vs(o.strings, o.min, o.max).filter((d) => Qh(r, a, d));
}
const Nt = (r, a, o) => ({ ...r, label: a, kind: o }), Kp = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function Up(r, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const d = o >= 2, c = Li(r), h = vs(c.strings, c.min, c.max), p = Vp(r, a);
  if (r.mode === "notes") {
    if (d) return { marks: p.map((z) => Nt(z, a.name, "answer")), text: `${a.name} on ${$a[a.position.string]}: ${Vt(a.position.fret)}.` };
    const N = h.find((z) => z.string === a.position.string), x = Ae(N.midi, r.flats);
    return {
      marks: [Nt(N, x, "anchor")],
      text: `Apupiste: ${Rh[N.string]} ${N.fret === 0 ? "vapaa sävel" : N.fret + ". nauhan sävel"} on ${x}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (r.mode === "ear-note")
    return d ? { marks: [Nt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [Nt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${ft[a.position.string]}-kieli, ${Vt(a.position.fret)}.` };
  if (r.mode === "repeat")
    return d ? { marks: p.map((N) => Nt(N, Ae(N.midi, r.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${tu[a.position.string]}.` };
  if (r.mode === "interval") {
    const N = Ae(a.reference, r.flats, !0), x = h.filter((z) => z.midi === a.reference).map((z) => Nt(z, N, "anchor"));
    return d ? {
      marks: [...x, ...p.map((z) => Nt(z, Ae(z.midi, r.flats, !0), "answer"))],
      text: `${Kp(cr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${N} → ${a.name}.`
    } : { marks: x, text: `Alkusävel ${N} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = mr(r), y = za(r), $ = (N) => y.find(([x]) => x === De(N.midi - r.root))?.[1] ?? "", v = ur(r.root, a.interval, a.degree), g = m.filter((N) => De(N.midi - r.root) === 0), P = (N) => p.some((x) => Ue(x) === Ue(N)), D = `${a.degree}. aste on ${v}.`;
  if (r.mode === "caged")
    return d ? { marks: m.map((N) => Nt(N, $(N), P(N) ? "answer" : "shape")), text: D } : { marks: m.map((N) => Nt(N, "", "shape")), text: `${r.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const b = r.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const N = m.filter((x) => De(x.midi) === De(a.midi));
    return d ? { marks: [...(a.interval === 0 ? [] : g).map((x) => Nt(x, "1", "anchor")), ...N.map((x) => Nt(x, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: N.map((x) => Nt(x, v, "shape")), text: `Katso ${b} nimeä: mikä on sen perussävel?` } : {
      marks: [...g.map((x) => Nt(x, "1", "anchor")), ...N.map((x) => Nt(x, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return d ? { marks: [...g.filter((N) => !P(N)).map((N) => Nt(N, "1", "anchor")), ...p.map((N) => Nt(N, a.degree, "answer"))], text: D } : a.interval === 0 ? { marks: [], text: `1. aste on ${b} perussävel ${fi(r.root)}.` } : { marks: g.map((N) => Nt(N, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Hp {
  constructor(a, o, d, c = () => performance.now(), h = Math.random) {
    this.settings = a, this.stats = o, this.record = d, this.now = c, this.random = h, this.total = Wh(a);
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
      this.question = Bp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = zp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
  answer(a, o, d, c = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const h = this.question;
    if (!(o === "degree" ? a === h.interval : o === "note" ? zo(h.midi, a, "class") : o === "board" ? !!d && Qh(this.settings, h, d) : zo(h.midi, a, h.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? d : void 0, y = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${Ue(m)}` : h.item,
      mode: this.settings.mode,
      input: o,
      check: h.check,
      expected: h.midi,
      played: a,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, c)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return m ? y.position = Ue(m) : this.settings.mode === "notes" && (y.position = Ue(h.position)), this.results.push(y), this.record(y), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Bo(r) {
  const a = r.filter((o) => !o.hint);
  return {
    count: r.length,
    first: r.filter((o) => o.first).length,
    solo: a.length,
    soloFirst: a.filter((o) => o.first).length,
    guided: r.length - a.length,
    ms: r.reduce((o, d) => o + d.ms, 0)
  };
}
const Vo = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], cs = (r) => Vo.find(([a]) => a === r)?.[1] ?? r;
function Lt({ label: r, children: a }) {
  const o = E.useId();
  return /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ i.jsx("label", { htmlFor: o, children: r }),
    E.cloneElement(a, { id: o })
  ] });
}
function Wd({ legend: r, name: a, value: o, options: d, onChange: c, disabled: h }) {
  return /* @__PURE__ */ i.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ i.jsx("legend", { children: r }),
    /* @__PURE__ */ i.jsx("div", { className: "choice-row", children: d.map((p) => /* @__PURE__ */ i.jsxs("label", { className: p.value === o ? "selected" : "", children: [
      /* @__PURE__ */ i.jsx("input", { type: "radio", name: a, value: p.value, checked: p.value === o, onChange: () => c(p.value) }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: p.title }),
        /* @__PURE__ */ i.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Qd(r) {
  const a = Li(r), o = Wh(r), d = Pi(r), c = d === "mic" ? "soita kitaralla" : d === "board" ? "vastaa otelaudalta" : d === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = a.fixed === "shape" ? `${r.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${r.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${Da[r.hints].title} · ${c} · ${Bn(r) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function Yd({ s: r, change: a, locked: o, problem: d }) {
  const c = E.useId(), h = (v, g) => a({ ...r, [v]: g }), p = Li(r), m = Pi(r) === "note" || Pi(r) === "degree", y = ["scale", "chord", "caged"].includes(r.mode), $ = ["notes", "ear-note", "repeat"].includes(r.mode);
  return /* @__PURE__ */ i.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ i.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ i.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ i.jsx(Lt, { label: "Harjoitus", children: /* @__PURE__ */ i.jsx("select", { value: r.mode, onChange: (v) => h("mode", v.target.value), children: Vo.map(([v, g]) => /* @__PURE__ */ i.jsx("option", { value: v, children: g }, v)) }) }),
      /* @__PURE__ */ i.jsx("p", { className: "mode-note", children: Vo.find(([v]) => v === r.mode)[2] })
    ] }),
    y && /* @__PURE__ */ i.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ i.jsx(Lt, { label: r.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ i.jsx("select", { value: r.root, onChange: (v) => h("root", Number(v.target.value)), children: Ie.CHROM.map((v, g) => /* @__PURE__ */ i.jsx("option", { value: g, children: v }, v)) }) }),
      r.mode === "scale" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(Lt, { label: "Asteikko", children: /* @__PURE__ */ i.jsx("select", { value: r.scale, onChange: (v) => h("scale", v.target.value), children: Object.entries(Ie.SCALES).map(([v, g]) => /* @__PURE__ */ i.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ i.jsx(Lt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ i.jsxs("select", { value: r.box, onChange: (v) => h("box", Number(v.target.value)), children: [
          /* @__PURE__ */ i.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ i.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ i.jsx(Lt, { label: "Sävelten järjestys", children: /* @__PURE__ */ i.jsxs("select", { value: r.order, onChange: (v) => h("order", v.target.value), children: [
          /* @__PURE__ */ i.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ i.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ i.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      r.mode === "chord" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(Lt, { label: "Sointutyyppi", children: /* @__PURE__ */ i.jsx("select", { value: r.chord, onChange: (v) => h("chord", v.target.value), children: Object.entries(Ai).map(([v, g]) => /* @__PURE__ */ i.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ i.jsx(Lt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ i.jsxs("select", { value: r.chordTone, onChange: (v) => h("chordTone", v.target.value), children: [
          /* @__PURE__ */ i.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            r.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ i.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ i.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ i.jsxs("option", { value: "3", children: [
            "Terssi · ",
            r.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ i.jsx("option", { value: "5", children: "Kvintti · 5" }),
          r.chord === "dom7" && /* @__PURE__ */ i.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      r.mode === "caged" ? /* @__PURE__ */ i.jsx(Lt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ i.jsx("select", { value: r.shape, onChange: (v) => h("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ i.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ i.jsx(Lt, { label: "Tehtävä", children: /* @__PURE__ */ i.jsxs("select", { value: r.activity, onChange: (v) => h("activity", v.target.value), children: [
        /* @__PURE__ */ i.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ i.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    r.mode === "interval" && /* @__PURE__ */ i.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ i.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ i.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ i.jsxs("label", { children: [
        /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.intervals.includes(v), onChange: (g) => h("intervals", g.target.checked ? [...r.intervals, v] : r.intervals.filter((P) => P !== v)) }),
        cr[v]
      ] }, v)) }),
      /* @__PURE__ */ i.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ i.jsx(Lt, { label: "Intervallin suunta", children: /* @__PURE__ */ i.jsxs("select", { value: r.direction, onChange: (v) => h("direction", v.target.value), children: [
        /* @__PURE__ */ i.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ i.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ i.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Wd,
      {
        legend: "Harjoittelutapa",
        name: `${c}-way`,
        value: r.hints,
        onChange: (v) => h("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Da[v] }))
      }
    ),
    m ? /* @__PURE__ */ i.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ i.jsx(Wd, { legend: "Vastaustapa", name: `${c}-input`, value: r.input, onChange: (v) => h("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ i.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ i.jsx(Lt, { label: "Kierroksen pituus", children: /* @__PURE__ */ i.jsxs("select", { value: r.rounds, disabled: Bn(r), onChange: (v) => h("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ i.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ i.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ i.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ i.jsx(Lt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ i.jsxs("select", { value: Bn(r) ? "pitch" : r.check, disabled: Bn(r), onChange: (v) => h("check", v.target.value), children: [
          /* @__PURE__ */ i.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ i.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ i.jsx(Lt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ i.jsxs("select", { value: String(r.flats), onChange: (v) => h("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ i.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ i.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      Bn(r) && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ i.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${r.shape}-muoto` : `Boksi ${r.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ i.jsxs("button", { type: "button", "aria-pressed": r.min === 0 && r.max === v, onClick: () => a({ ...r, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ i.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ i.jsx(Lt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ i.jsx("input", { type: "number", min: "0", max: "24", value: r.min, onChange: (v) => h("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ i.jsx(Lt, { label: "Viimeinen nauha", children: /* @__PURE__ */ i.jsx("input", { type: "number", min: r.min, max: "24", value: r.max, onChange: (v) => h("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ i.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ i.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ i.jsx("div", { className: "check-row", children: ft.map((v, g) => /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.strings.includes(g), onChange: (P) => h("strings", P.target.checked ? [...r.strings, g] : r.strings.filter((D) => D !== g)) }),
          g + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "check-row", children: [
        $ && /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.accidentals, onChange: (v) => h("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        r.mode === "ear-note" && /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.reference, onChange: (v) => h("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.weak, onChange: (v) => h("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.advance, onChange: (v) => h("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: d })
  ] });
}
const Jd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function Gp(r) {
  return r && Object.hasOwn(Jd, r) ? Jd[r] : null;
}
const Wp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat ja tunnista sitten korvalla, missä sävel soi.", example: "Etsi sävelet otelaudalta · Kuuntele ja paikanna sävel" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Qp({ onSelect: r }) {
  return /* @__PURE__ */ i.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ i.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ i.jsx("div", { className: "learning-grid", children: Wp.map((a) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => r(a.id), children: [
      /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: a.number }),
      /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ i.jsx("strong", { children: a.title }),
        /* @__PURE__ */ i.jsx("span", { children: a.description }),
        /* @__PURE__ */ i.jsx("small", { children: a.example })
      ] }),
      /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, a.id)) })
  ] });
}
const Yp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Ko = 100, Yh = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function iu(r) {
  if (r === null || r.trim() === "") return Ko;
  const a = Number(r);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Ko;
}
function Jp() {
  try {
    return iu(localStorage.getItem(Yh));
  } catch {
    return Ko;
  }
}
function Xp(r) {
  try {
    localStorage.setItem(Yh, String(iu(String(r))));
  } catch {
  }
}
function Xd(r, a, o = !0) {
  return o ? Yp[r] * iu(String(a)) / 100 : 0;
}
function Jh(r = () => new Audio()) {
  try {
    const a = r();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Zp = 0.12, qp = 2e3, ev = 3;
function tv(r, a = !1) {
  return a ? !0 : r.atLoopBoundary || r.drift <= Zp || r.seeking || r.readyState < ev ? !1 : r.msSinceLastFix >= qp;
}
const nv = 1.5, iv = 0.4, sv = 0.5;
let Uo = null, rv = null;
function av(r) {
  return Uo !== null ? Uo : (rv ??= Jh()) ? 0 : iv;
}
class Xh {
  constructor(a = av()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(a, o, d = !1, c = performance.now()) {
    if (o.readyState < 1 || a.readyState < 1 || !d && (o.paused || a.paused)) return !1;
    const h = o.currentTime - a.currentTime, p = Math.abs(h), m = a.loop && Number.isFinite(a.duration) && Math.abs(p - a.duration) < 0.35, y = this.lastFix.get(o);
    if (!tv({
      drift: p,
      atLoopBoundary: m,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: y === void 0 ? 1 / 0 : c - y
    }, d)) return !1;
    const $ = !a.paused;
    !d && $ && y !== void 0 && (this.latency = Math.min(nv, Math.max(0, this.latency - sv * h)), Uo = this.latency);
    let v = a.currentTime + ($ ? this.latency : 0);
    Number.isFinite(o.duration) && (v = Math.min(v, Math.max(0, o.duration - 0.05)));
    try {
      o.currentTime = v;
    } catch {
      return !1;
    }
    return $ ? this.lastFix.set(o, c) : this.lastFix.delete(o), !0;
  }
}
function lv(r = globalThis.navigator) {
  return r ? /iPhone|iPad|iPod/.test(r.userAgent) || r.platform === "MacIntel" && r.maxTouchPoints > 1 : !1;
}
function ov(r = lv(), a = () => Jh()) {
  return r ? "webaudio" : a() ? "element" : "webaudio";
}
function uv(r = globalThis.navigator) {
  const a = r?.audioSession;
  a && a.type !== "playback" && (a.type = "playback");
}
const cv = () => {
  const r = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!r) throw new Error("Web Audio API puuttuu");
  return new r();
};
class dv {
  constructor(a = cv, o = globalThis.navigator) {
    this.create = a, this.nav = o;
  }
  create;
  nav;
  context = null;
  gains = /* @__PURE__ */ new WeakMap();
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
        uv(this.nav);
      } catch (a) {
        this.lastError = "Ääni-istunnon asetus epäonnistui: " + String(a);
      }
      return (!this.context || this.context.state === "closed") && (this.context = this.create(), this.gains = /* @__PURE__ */ new WeakMap()), this.context.state !== "running" && this.context.resume().catch((a) => {
        this.lastError = "Web Audio ei käynnistynyt: " + String(a);
      }), !0;
    } catch (a) {
      return this.lastError = "Web Audio ei ole käytettävissä: " + String(a), !1;
    }
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(a) {
    if (this.gains.has(a)) return !0;
    if (!this.context) return !1;
    try {
      const o = this.context.createMediaElementSource(a), d = this.context.createGain();
      return o.connect(d), d.connect(this.context.destination), this.gains.set(a, d), !0;
    } catch (o) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(o), !1;
    }
  }
  routed(a) {
    return !!a && this.gains.has(a);
  }
  setLevel(a, o) {
    const d = this.gains.get(a);
    d && (d.gain.value = o);
  }
  /** Raidan nykyinen GainNode-taso tai null, jos raitaa ei ole kytketty. */
  level(a) {
    const o = a ? this.gains.get(a) : void 0;
    return o ? o.gain.value : null;
  }
  close() {
    const a = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), a?.close().catch(() => {
    });
  }
}
const hv = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", fv = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Zd(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Zh() {
  const r = E.useRef(null), a = E.useRef(null), [o, d] = E.useState(!1), [c, h] = E.useState(!1), [p, m] = E.useState(!1), [y, $] = E.useState(0), [v, g] = E.useState(0), [P, D] = E.useState(""), b = E.useRef(new Xh());
  function N(H = !1) {
    const G = r.current, w = a.current;
    !G || !w || !Number.isFinite(G.currentTime) || b.current.align(G, w, H);
  }
  function x() {
    r.current?.pause(), a.current?.pause(), d(!1);
  }
  async function z() {
    const H = r.current, G = a.current;
    if (!(!H || !G)) {
      if (o) {
        x();
        return;
      }
      D(""), G.muted = !c, G.volume = 0.55, H.volume = 0.75, N(!0);
      try {
        await Promise.all(c ? [H.play(), G.play()] : [H.play()]), N(), d(!0);
      } catch {
        x(), D("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function T(H) {
    const G = r.current, w = a.current;
    if (!(!G || !w || !Number.isFinite(H))) {
      G.currentTime = H;
      try {
        w.currentTime = H;
      } catch {
      }
      $(H);
    }
  }
  function W(H) {
    const G = r.current, w = a.current;
    if (h(H), !!w) {
      if (w.muted = !H, !H) {
        w.pause();
        return;
      }
      !G || !o || (N(!0), w.play().catch(() => D("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return E.useEffect(() => {
    const H = () => {
      document.hidden && (r.current?.pause(), a.current?.pause(), d(!1));
    };
    return document.addEventListener("visibilitychange", H), () => {
      document.removeEventListener("visibilitychange", H), r.current?.pause(), a.current?.pause();
    };
  }, []), /* @__PURE__ */ i.jsxs("div", { className: "backing-track-mixer", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "backing-track-heading", children: [
      /* @__PURE__ */ i.jsx("strong", { children: "Am-harjoitustausta" }),
      /* @__PURE__ */ i.jsxs("div", { className: "backing-track-toggles", children: [
        /* @__PURE__ */ i.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: c,
              onChange: (H) => W(H.target.checked)
            }
          ),
          /* @__PURE__ */ i.jsx("span", { children: "Kitara kuuluu" })
        ] }),
        /* @__PURE__ */ i.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: p,
              onChange: (H) => m(H.target.checked)
            }
          ),
          /* @__PURE__ */ i.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ i.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        z();
      }, children: o ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(y, v > 0 ? v : 1),
          disabled: !v,
          onChange: (H) => T(Number(H.target.value))
        }
      ),
      /* @__PURE__ */ i.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Zd(y),
        " / ",
        Zd(v)
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      "audio",
      {
        ref: r,
        preload: "metadata",
        src: hv,
        loop: p,
        onLoadedMetadata: (H) => g(H.currentTarget.duration),
        onTimeUpdate: (H) => {
          $(H.currentTarget.currentTime), H.currentTarget.paused || N();
        },
        onEnded: () => {
          r.current?.loop || (a.current?.pause(), d(!1), $(v));
        },
        onPause: () => {
          a.current?.pause(), d(!1);
        },
        onError: () => D("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ i.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: fv,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const H = r.current, G = a.current;
          H?.duration && G?.duration && Math.abs(H.duration - G.duration) > 0.15 && D("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => D("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    P && /* @__PURE__ */ i.jsx("p", { className: "backing-error", role: "alert", children: P }),
    /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const mv = 4e3;
class qd extends Error {
  name = "MicSetupError";
}
async function pv(r, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new qd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const o = {
    audio: {
      deviceId: r ? { exact: r } : void 0,
      // Selaimen puheenkäsittely vääristäisi kitaran sävelkorkeuden ja vaimentaisi soivan sävelen.
      echoCancellation: !1,
      noiseSuppression: !1,
      autoGainControl: !1,
      // Äänikortin soitintulo voi olla toinen kanava; mono-pyyntö summaisi kanavat puoleen tasoon.
      channelCount: { ideal: 2 }
    },
    video: !1
  }, d = await navigator.mediaDevices.getUserMedia(o);
  let c;
  try {
    if (c = a ? a() : new AudioContext(), c.state !== "running") {
      let $;
      await Promise.race([
        c.resume(),
        new Promise((v, g) => {
          $ = setTimeout(() => g(new qd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), mv);
        })
      ]).finally(() => clearTimeout($));
    }
    const h = c.createMediaStreamSource(d), p = c, m = d.getAudioTracks?.()[0] ?? d.getTracks()[0], y = m?.getSettings?.() ?? {};
    return {
      context: c,
      source: h,
      stream: d,
      label: m?.label ?? "",
      deviceId: y.deviceId ?? "",
      channelCount: y.channelCount ?? 1,
      stop: () => {
        d.getTracks().forEach(($) => $.stop()), h.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw d.getTracks().forEach((p) => p.stop()), a || await c?.close().catch(() => {
    }), h;
  }
}
async function vv() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var Mo, eh;
function kv() {
  if (eh) return Mo;
  eh = 1;
  function r(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var o = new Array(this.size * 2), d = 0; d < o.length; d += 2) {
      const $ = Math.PI * d / this.size;
      o[d] = Math.cos($), o[d + 1] = -Math.sin($);
    }
    this.table = o;
    for (var c = 0, h = 1; this.size > h; h <<= 1)
      c++;
    this._width = c % 2 === 0 ? c - 1 : c, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var m = 0; m < this._width; m += 2) {
        var y = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << y;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return Mo = r, r.prototype.fromComplexArray = function(o, d) {
    for (var c = d || new Array(o.length >>> 1), h = 0; h < o.length; h += 2)
      c[h >>> 1] = o[h];
    return c;
  }, r.prototype.createComplexArray = function() {
    const o = new Array(this._csize);
    for (var d = 0; d < o.length; d++)
      o[d] = 0;
    return o;
  }, r.prototype.toComplexArray = function(o, d) {
    for (var c = d || this.createComplexArray(), h = 0; h < c.length; h += 2)
      c[h] = o[h >>> 1], c[h + 1] = 0;
    return c;
  }, r.prototype.completeSpectrum = function(o) {
    for (var d = this._csize, c = d >>> 1, h = 2; h < c; h += 2)
      o[d - h] = o[h], o[d - h + 1] = -o[h + 1];
  }, r.prototype.transform = function(o, d) {
    if (o === d)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = d, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, r.prototype.realTransform = function(o, d) {
    if (o === d)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = d, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, r.prototype.inverseTransform = function(o, d) {
    if (o === d)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = d, this._inv = 1, this._transform4();
    for (var c = 0; c < o.length; c++)
      o[c] /= this.size;
    this._out = null, this._data = null;
  }, r.prototype._transform4 = function() {
    var o = this._out, d = this._csize, c = this._width, h = 1 << c, p = d / h << 1, m, y, $ = this._bitrev;
    if (p === 4)
      for (m = 0, y = 0; m < d; m += p, y++) {
        const x = $[y];
        this._singleTransform2(m, x, h);
      }
    else
      for (m = 0, y = 0; m < d; m += p, y++) {
        const x = $[y];
        this._singleTransform4(m, x, h);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = d / h << 1;
      var P = p >>> 2;
      for (m = 0; m < d; m += p)
        for (var D = m + P, b = m, N = 0; b < D; b += 2, N += h) {
          const x = b, z = x + P, T = z + P, W = T + P, H = o[x], G = o[x + 1], w = o[z], F = o[z + 1], A = o[T], ne = o[T + 1], J = o[W], me = o[W + 1], xe = H, Z = G, ce = g[N], ye = v * g[N + 1], Ee = w * ce - F * ye, he = w * ye + F * ce, R = g[2 * N], Y = v * g[2 * N + 1], Q = A * R - ne * Y, j = A * Y + ne * R, L = g[3 * N], oe = v * g[3 * N + 1], _ = J * L - me * oe, se = J * oe + me * L, M = xe + Q, V = Z + j, X = xe - Q, q = Z - j, pe = Ee + _, K = he + se, re = v * (Ee - _), ae = v * (he - se), de = M + pe, Ce = V + K, we = M - pe, $e = V - K, He = X + ae, Ye = q - re, We = X - ae, Xe = q + re;
          o[x] = de, o[x + 1] = Ce, o[z] = He, o[z + 1] = Ye, o[T] = we, o[T + 1] = $e, o[W] = We, o[W + 1] = Xe;
        }
    }
  }, r.prototype._singleTransform2 = function(o, d, c) {
    const h = this._out, p = this._data, m = p[d], y = p[d + 1], $ = p[d + c], v = p[d + c + 1], g = m + $, P = y + v, D = m - $, b = y - v;
    h[o] = g, h[o + 1] = P, h[o + 2] = D, h[o + 3] = b;
  }, r.prototype._singleTransform4 = function(o, d, c) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, y = c * 2, $ = c * 3, v = p[d], g = p[d + 1], P = p[d + c], D = p[d + c + 1], b = p[d + y], N = p[d + y + 1], x = p[d + $], z = p[d + $ + 1], T = v + b, W = g + N, H = v - b, G = g - N, w = P + x, F = D + z, A = m * (P - x), ne = m * (D - z), J = T + w, me = W + F, xe = H + ne, Z = G - A, ce = T - w, ye = W - F, Ee = H - ne, he = G + A;
    h[o] = J, h[o + 1] = me, h[o + 2] = xe, h[o + 3] = Z, h[o + 4] = ce, h[o + 5] = ye, h[o + 6] = Ee, h[o + 7] = he;
  }, r.prototype._realTransform4 = function() {
    var o = this._out, d = this._csize, c = this._width, h = 1 << c, p = d / h << 1, m, y, $ = this._bitrev;
    if (p === 4)
      for (m = 0, y = 0; m < d; m += p, y++) {
        const _e = $[y];
        this._singleRealTransform2(m, _e >>> 1, h >>> 1);
      }
    else
      for (m = 0, y = 0; m < d; m += p, y++) {
        const _e = $[y];
        this._singleRealTransform4(m, _e >>> 1, h >>> 1);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = d / h << 1;
      var P = p >>> 1, D = P >>> 1, b = D >>> 1;
      for (m = 0; m < d; m += p)
        for (var N = 0, x = 0; N <= b; N += 2, x += h) {
          var z = m + N, T = z + D, W = T + D, H = W + D, G = o[z], w = o[z + 1], F = o[T], A = o[T + 1], ne = o[W], J = o[W + 1], me = o[H], xe = o[H + 1], Z = G, ce = w, ye = g[x], Ee = v * g[x + 1], he = F * ye - A * Ee, R = F * Ee + A * ye, Y = g[2 * x], Q = v * g[2 * x + 1], j = ne * Y - J * Q, L = ne * Q + J * Y, oe = g[3 * x], _ = v * g[3 * x + 1], se = me * oe - xe * _, M = me * _ + xe * oe, V = Z + j, X = ce + L, q = Z - j, pe = ce - L, K = he + se, re = R + M, ae = v * (he - se), de = v * (R - M), Ce = V + K, we = X + re, $e = q + de, He = pe - ae;
          if (o[z] = Ce, o[z + 1] = we, o[T] = $e, o[T + 1] = He, N === 0) {
            var Ye = V - K, We = X - re;
            o[W] = Ye, o[W + 1] = We;
            continue;
          }
          if (N !== b) {
            var Xe = q, ut = -pe, Je = V, Ve = -X, it = -v * de, Kt = -v * ae, Xt = -v * re, Et = -v * K, un = Xe + it, Zt = ut + Kt, qt = Je + Et, _t = Ve - Xt, be = m + D - N, Ut = m + P - N;
            o[be] = un, o[be + 1] = Zt, o[Ut] = qt, o[Ut + 1] = _t;
          }
        }
    }
  }, r.prototype._singleRealTransform2 = function(o, d, c) {
    const h = this._out, p = this._data, m = p[d], y = p[d + c], $ = m + y, v = m - y;
    h[o] = $, h[o + 1] = 0, h[o + 2] = v, h[o + 3] = 0;
  }, r.prototype._singleRealTransform4 = function(o, d, c) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, y = c * 2, $ = c * 3, v = p[d], g = p[d + c], P = p[d + y], D = p[d + $], b = v + P, N = v - P, x = g + D, z = m * (g - D), T = b + x, W = N, H = -z, G = b - x, w = N, F = z;
    h[o] = T, h[o + 1] = 0, h[o + 2] = W, h[o + 3] = H, h[o + 4] = G, h[o + 5] = 0, h[o + 6] = w, h[o + 7] = F;
  }, Mo;
}
var yv = kv();
const gv = /* @__PURE__ */ ap(yv);
class ar {
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
    return new ar(
      a,
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
  static forFloat64Array(a) {
    return new ar(
      a,
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
  static forNumberArray(a) {
    return new ar(a, (o) => Array(o));
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
  constructor(a, o) {
    if (a < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = a, this._fft = new gv(Sv(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(a, o = this._bufferSupplier(a.length)) {
    if (a.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${a.length}`
      );
    for (let c = 0; c < a.length; c++)
      this._paddedInputBuffer[c] = a[c];
    for (let c = a.length; c < this._paddedInputBuffer.length; c++)
      this._paddedInputBuffer[c] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const d = this._transformBuffer;
    for (let c = 0; c < d.length; c += 2)
      d[c] = d[c] * d[c] + d[c + 1] * d[c + 1], d[c + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let c = 0; c < a.length; c++)
      o[c] = this._inverseBuffer[2 * c];
    return o;
  }
}
function jv(r) {
  const a = [];
  let o = !1, d = -1 / 0, c = -1;
  for (let h = 1; h < r.length - 1; h++)
    r[h - 1] <= 0 && r[h] > 0 ? (o = !0, c = h, d = r[h]) : r[h - 1] > 0 && r[h] <= 0 ? (o = !1, c !== -1 && a.push(c)) : o && r[h] > d && (d = r[h], c = h);
  return a;
}
function xv(r, a) {
  const [o, d, c] = [r - 1, r, r + 1], [h, p, m] = [a[o], a[d], a[c]], y = h / 2 - p + m / 2, $ = -(h / 2) * (d + c) + p * (o + c) - m / 2 * (o + d), v = h * d * c / 2 - p * o * c + m * o * d / 2, g = -$ / (2 * y), P = y * g * g + $ * g + v;
  return [g, P];
}
class lr {
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
    return new lr(a, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new lr(a, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new lr(a, (o) => Array(o));
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
  constructor(a, o) {
    this._autocorrelator = new ar(a, o), this._nsdfBuffer = o(a);
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
  findPitch(a, o) {
    if (this._belowMinimumVolume(a)) return [0, 0];
    this._nsdf(a);
    const d = jv(this._nsdfBuffer);
    if (d.length === 0)
      return [0, 0];
    const c = Math.max(...d.map((y) => this._nsdfBuffer[y])), h = d.find(
      (y) => this._nsdfBuffer[y] >= this._clarityThreshold * c
    ), [p, m] = xv(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [o / p, Math.min(m, 1)];
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
    let o = 0;
    for (let d = 0; d < a.length; d++)
      o += a[d] ** 2;
    return Math.sqrt(o / a.length) < this._minVolumeAbsolute;
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
    let o = 2 * this._nsdfBuffer[0], d;
    for (d = 0; d < this._nsdfBuffer.length && o > 0; d++)
      this._nsdfBuffer[d] = 2 * this._nsdfBuffer[d] / o, o -= a[d] ** 2 + a[a.length - d - 1] ** 2;
    for (; d < this._nsdfBuffer.length; d++)
      this._nsdfBuffer[d] = 0;
  }
}
function Sv(r) {
  return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
}
function wv(r) {
  const a = r * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const Nv = 0.05, Ev = 1.5;
class Cv {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const d = a.context, c = wv(d.sampleRate), h = Math.max(1, Math.min(2, a.channelCount ?? 1));
    h > 1 && typeof d.createChannelSplitter == "function" && (this.splitter = d.createChannelSplitter(h), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const m = d.createAnalyser();
      m.fftSize = c, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(c * 4)));
    }
    this.shortLength = Math.min(c, Math.max(256, Math.round(d.sampleRate * Nv))), this.detector = lr.forFloat32Array(c), this.detector.minVolumeDecibels = -60;
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
  gate = new bv();
  onset = new Mv();
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
      minClarity: o = 0.9,
      minRms: d = 0.01,
      stabilityMs: c = 240,
      centsTolerance: h = 35,
      minFreq: p = 70,
      maxFreq: m = 1450,
      onFrame: y,
      onStableNote: $
    } = this.opts, v = this.analysers.map((F, A) => (F.getFloatTimeDomainData(this.buffers[A]), th(this.buffers[A], this.buffers[A].length - this.shortLength))), g = v.indexOf(Math.max(...v));
    g !== this.channel && v[g] > (v[this.channel] ?? 0) * Ev && (this.channel = g);
    const P = this.buffers[this.channel], D = v[this.channel], b = Tv(P, P.length - this.shortLength), N = { rms: D, peak: b, channel: this.channel, levels: v }, x = D < d, z = this.onset.feed(D, a, d);
    if (x && th(P, 0) < d) {
      this.gate.feed(null, a, c, !0, !1), y?.({ ...N, status: "silent" });
      return;
    }
    const [T, W] = this.detector.findPitch(P, this.mic.context.sampleRate);
    if (!isFinite(T) || W < o) {
      this.gate.feed(null, a, c, x, z), y?.({ ...N, status: x ? "silent" : "unclear", clarity: isFinite(W) ? W : 0 });
      return;
    }
    if (T < p || T > m) {
      this.gate.feed(null, a, c, x, z), y?.({ ...N, status: "out-of-range", frequency: T, clarity: W });
      return;
    }
    const { midi: H, cents: G } = yp(T);
    if (Math.abs(G) > h) {
      this.gate.feed(null, a, c, x, z), y?.({ ...N, status: "off-pitch", frequency: T, clarity: W, midi: H, cents: G });
      return;
    }
    y?.({ ...N, status: "pitch", frequency: T, clarity: W, midi: H, cents: G });
    const w = this.gate.feed(H, a, c, x, z);
    w !== null && $?.({ midi: H, frequency: T, cents: G, clarity: W, timestamp: a, heldMs: w.heldMs });
  }
}
class bv {
  constructor(a = 120, o = 80) {
    this.releaseMs = a, this.gapMs = o;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(a, o, d, c, h) {
    if (c ? (this.quietSince ??= o, o - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), a === null)
      return this.current && o - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== a) && (this.current = { midi: a, since: o, seen: o }), this.current.seen = o;
    const p = o - this.current.since;
    return p < d ? null : (this.armed = !1, this.current = null, { midi: a, heldMs: p });
  }
}
class Mv {
  constructor(a = 2, o = 300, d = 150) {
    this.ratio = a, this.windowMs = o, this.refractoryMs = d;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(a, o, d) {
    if (o - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: o, rms: a }], !1;
    for (; this.history.length && o - this.history[0].time > this.windowMs; ) this.history.shift();
    const c = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : a;
    return this.history.push({ time: o, rms: a }), a < d * 1.5 || a < c * this.ratio ? !1 : (this.lastOnset = o, this.history = [{ time: o, rms: a }], !0);
  }
}
function th(r, a = 0) {
  const o = Math.max(0, a);
  let d = 0;
  for (let c = o; c < r.length; c++) d += r[c] * r[c];
  return Math.sqrt(d / Math.max(1, r.length - o));
}
function Tv(r, a = 0) {
  let o = 0;
  for (let d = Math.max(0, a); d < r.length; d++) {
    const c = Math.abs(r[d]);
    c > o && (o = c);
  }
  return o;
}
const ps = (r) => r > 0 ? Math.max(-90, 20 * Math.log10(r)) : -90;
let ls;
function qh() {
  return (!ls || ls.state === "closed") && (ls = new AudioContext()), ls;
}
function _v() {
  const r = ls;
  ls = void 0, r?.close().catch(() => {
  });
}
const ef = (r) => r instanceof Error ? r.name : "";
function Av(r) {
  const a = ef(r);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? r.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Pv {
  constructor(a = (o) => pv(o, qh)) {
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
  async start(a, o, d) {
    this.stop();
    const c = this.generation;
    let h, p = !1;
    try {
      h = await this.opener(a || void 0);
    } catch (m) {
      if (!a || c !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(ef(m))) throw m;
      h = await this.opener(void 0), p = !0;
    }
    if (c !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new Cv(h, { ...o });
      const m = () => {
        this.mic === h && (this.stop(), d());
      }, y = this.listeners = new AbortController();
      return h.stream.getTracks().forEach(($) => $.addEventListener("ended", m, { once: !0, signal: y.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && m();
      }, { signal: y.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: p };
    } catch (m) {
      throw this.stop(), m;
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
function tf(r, a) {
  return r !== "on" ? r : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const nh = (r) => Math.max(0, Math.min(1, (ps(r) + 60) / 60));
function Lv(r) {
  const a = [...r].sort((d, c) => d - c), o = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, o * 3)), noise: o, loud: o > 0.04 };
}
async function To(r) {
  const a = () => r.state === "running";
  if (a()) return;
  let o;
  try {
    await Promise.race([
      r.resume(),
      new Promise((d, c) => {
        o = setTimeout(() => c(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    o !== void 0 && clearTimeout(o);
  }
  if (!a()) throw new Error("reference-audio-not-running");
}
function ks(r) {
  const a = r instanceof Error ? r.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : r instanceof Error && r.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class $i {
  constructor(a = qh) {
    this.provide = a;
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
  async play(a, o) {
    this.stop();
    const d = this.token, c = this.provide();
    if (await To(c), d !== this.token) return !1;
    const h = c.createGain();
    h.connect(c.destination), this.master = h;
    const p = Array.from({ length: 12 }, ($, v) => 1 / (v + 1) ** 1.3), m = c.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach(($, v) => {
      const g = c.createOscillator(), P = c.createGain(), D = c.currentTime + 0.05 + v * 0.8;
      m ? g.setPeriodicWave(m) : g.type = "triangle", g.frequency.value = bo($), P.gain.setValueAtTime(0, D), P.gain.linearRampToValueAtTime(0.22, D + 0.012), P.gain.exponentialRampToValueAtTime(1e-3, D + 0.7), g.connect(P), P.connect(h), g.start(D), g.stop(D + 0.72), o && this.noteTimers.push(setTimeout(() => {
        d === this.token && o(v);
      }, 50 + v * 800));
    }), !await new Promise(($) => {
      this.settle = $, this.timer = setTimeout(() => $(!0), a.length * 800 + 350);
    }) || d !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], h.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(a, o, d, c) {
    if (this.stop(), !a.length) return !1;
    const h = this.token, p = this.provide();
    if (await To(p), h !== this.token) return !1;
    const m = 60 / Math.max(40, Math.min(140, o)), y = p.createGain();
    y.connect(p.destination), this.master = y;
    const $ = Array.from({ length: 12 }, (b, N) => 1 / (N + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...$.map(() => 0)]),
      new Float32Array([0, ...$])
    ), g = p.currentTime + 0.05;
    let P = 0;
    return a.forEach((b, N) => {
      if (!Number.isFinite(b.beat) || b.beat < 0 || !Number.isFinite(b.duration) || b.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const x = g + b.beat * m, z = b.duration * m, T = x + Math.max(0.08, z * 0.94), W = p.createOscillator(), H = p.createGain();
      v ? W.setPeriodicWave(v) : W.type = "triangle", W.frequency.value = bo(b.midi), H.gain.setValueAtTime(0, x), H.gain.linearRampToValueAtTime(b.level ?? 0.22, x + 0.012), H.gain.exponentialRampToValueAtTime(1e-3, T - 0.01), W.connect(H), H.connect(y), W.start(x), W.stop(T), d && this.noteTimers.push(setTimeout(() => {
        h === this.token && d(N);
      }, 50 + b.beat * m * 1e3));
      const G = a[N + 1]?.beat ?? 1 / 0;
      c && G > b.beat + b.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && c();
      }, 50 + b.beat * m * 1e3 + z * 1e3)), P = Math.max(P, b.beat + b.duration);
    }), !await new Promise((b) => {
      this.settle = b, this.timer = setTimeout(() => b(!0), 50 + P * m * 1e3 + 150);
    }) || h !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], y.disconnect(), this.master = void 0, !0);
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
  async loop(a, o, d = 75) {
    if (this.stop(), !a.length) return !1;
    const c = this.token, h = this.provide();
    if (await To(h), c !== this.token) return !1;
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const m = Array.from({ length: 12 }, (N, x) => 1 / (x + 1) ** 1.3), y = h.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let $ = 60 / Math.max(40, Math.min(140, d));
    this.adjustLoopTempo = (N) => {
      c === this.token && Number.isFinite(N) && ($ = 60 / Math.max(40, Math.min(140, N)));
    };
    const v = 1.6;
    let g = h.currentTime + 0.05, P = 0;
    const D = [], b = () => {
      if (c === this.token) {
        if (g < h.currentTime - 0.02) {
          const N = Math.ceil((h.currentTime - g) / $);
          g += N * $, P = (P + N) % a.length, D.length = 0;
        }
        for (; g < h.currentTime + v; ) {
          const N = a[P], x = P, z = g, T = h.createOscillator(), W = h.createGain();
          y ? T.setPeriodicWave(y) : T.type = "triangle", T.frequency.value = bo(N), W.gain.setValueAtTime(0, z), W.gain.linearRampToValueAtTime(0.22, z + 0.012), W.gain.exponentialRampToValueAtTime(1e-3, z + $ * 0.975), T.connect(W), W.connect(p), T.start(z), T.stop(z + $ * 0.985), D.push({ at: z, index: x }), g += $, P = (P + 1) % a.length;
        }
        for (; D.length && D[0].at <= h.currentTime + 0.01; ) {
          const N = D.shift();
          o?.(N.index);
        }
      }
    };
    return b(), this.loopTick = setInterval(b, 25), new Promise((N) => {
      this.settle = N;
    });
  }
}
function Jt(r, a) {
  let o = 0;
  const d = a.map(([c, h, p]) => {
    const y = { position: c === null || h === null ? null : Ne(c, h), beat: o, duration: p };
    return o += p, y;
  });
  return { label: r, events: d, beats: o };
}
function ir(r, ...a) {
  let o = 0;
  const d = a.flatMap((c) => {
    const h = c.events.map((p) => ({ ...p, beat: p.beat + o }));
    return o += c.beats, h;
  });
  return { label: r, events: d, beats: o };
}
const ih = Jt("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), sh = Jt("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), $v = Jt("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), rh = Jt("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [2, 9, 1],
  [2, 9, 1],
  [2, 7, 2],
  [null, null, 2]
]), ah = Jt("B · Vastaus", [
  [2, 9, 1],
  [2, 7, 1],
  [3, 10, 1],
  [3, 7, 1],
  [3, 7, 4]
]), Rv = Jt("C · Jatko", [
  [3, 10, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [3, 10, 4]
]), lh = Jt("A · Kysymys", [
  [1, 10, 1],
  [1, 13, 1],
  [0, 10, 2],
  [1, 13, 1],
  [1, 10, 1],
  [2, 12, 2]
]), oh = Jt("B · Vastaus", [
  [0, 12, 1],
  [0, 10, 1],
  [1, 13, 1],
  [1, 10, 1],
  [2, 12, 1],
  [2, 9, 1],
  [1, 10, 2]
]), uh = Jt("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), ch = Jt("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), Ov = Jt("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), dh = Jt("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), hh = Jt("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), fh = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [ih, sh],
    whole: ir("Melodia · A + B + C", ih, sh, $v),
    source: "https://hymnary.org/tune/wayfaring_stranger",
    note: "Sävelkulku perustuu perinteisen melodian 15-säveliseen alkumotiiviin. Rytmi on tätä harjoitusta varten itse laadittu: kyse ei ole tietyn levytyksen tai nuottisovituksen tarkasta versiosta."
  },
  "wayfaring-p2": {
    id: "wayfaring-p2",
    title: "Wayfaring Stranger · positio 2",
    qualifier: "Sama perinnesävelmän alku uudessa käsiasemassa · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [rh, ah],
    whole: ir("Melodia · A + B + C", rh, ah, Rv),
    compareWith: { id: "wayfaring", label: "Positio 1", ownLabel: "Positio 2" },
    source: "https://hymnary.org/tune/wayfaring_stranger",
    note: "Sama sävelkulku, samat sävelkorkeudet ja sama itse laadittu harjoitusrytmi kuin positiossa 1. Vain sormitus vaihtuu: kaksi säveltä siirtyy toiselle kielelle. Sävelkulku perustuu perinteisen melodian alkumotiiviin."
  },
  "high-answer": {
    id: "high-answer",
    title: "Korkea vastaus",
    qualifier: "Oma sävellys · A-mollipentatoninen · positio 3",
    tempo: 76,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [lh, oh],
    whole: ir("Korkea vastaus · A + B", lh, oh),
    source: "",
    note: "Alkuperäinen tätä harjoitusta varten sävelletty neljän tahdin melodia. Kysymys jää G-säveleen, ja vastaus laskeutuu position ylimmästä E-sävelestä A-pohjasäveleen. Melodia käyttää position 3 kolmea ohuinta kieltä."
  },
  nooa: {
    id: "nooa",
    title: "Ukko Nooa",
    qualifier: "Perinteinen melodia · C-jooninen",
    tempo: 84,
    tonic: 0,
    permitted: [0, 2, 4, 5, 7, 9, 11],
    fragments: [uh, ch],
    whole: ir("Ukko Nooa · A + B", uh, ch),
    bonus: Ov,
    source: "https://aoe.fi/api/v1/download/file/opisavellajitjaasteikothankkeentehtavapaketti1-1701684466136.pdf",
    note: "Lähde: Opi sävellajit ja asteikot (2023), s. 56, Ukko Nooan alku C-duurissa. Tässä soitetaan oktaavia alempaa samalla säveljonolla ja rytmillä. Erillinen B → C -täydennys on itse sävelletty."
  },
  "pentatonic-bridge": {
    id: "pentatonic-bridge",
    title: "Siirtymä kahden position välillä",
    qualifier: "Oma sävellys · A-mollipentatoninen",
    tempo: 75,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [dh, hh],
    whole: ir("Siirtymämelodia · A + B", dh, hh),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Fv(r) {
  return r.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
function Iv(r, a) {
  const o = (h) => new Map(h.events.filter((p) => p.position).map((p) => [p.position.midi, p.position]).reverse()), d = o(r);
  return [...o(a).entries()].sort((h, p) => p[0] - h[0]).map(([h, p]) => {
    const m = d.get(h) ?? null;
    return { midi: h, from: m, to: p, moved: !m || m.string !== p.string || m.fret !== p.fret };
  });
}
const _o = ["e", "B", "G", "D", "A", "E"];
function su({ pieceId: r, stage: a, onBeforePlay: o, stopHandleRef: d }) {
  const c = fh[r], [h, p] = E.useState(a === "fingering" ? "a" : "whole"), [m, y] = E.useState(c.tempo), [$, v] = E.useState(!1), [g, P] = E.useState(!1), [D, b] = E.useState(a !== "memory"), [N, x] = E.useState(!1), [z, T] = E.useState(null), [W, H] = E.useState(""), G = E.useRef(new $i()), w = E.useRef(0);
  function F() {
    w.current++, G.current.stop(), x(!1), T(null);
  }
  E.useEffect(() => {
    d && (d.current = F);
    const _ = () => {
      document.hidden && F();
    };
    return document.addEventListener("visibilitychange", _), () => {
      document.removeEventListener("visibilitychange", _), w.current++, G.current.stop(), d && (d.current = null);
    };
  }, [d]);
  const A = a === "memory" ? [{ id: "whole", name: "Koko melodia", clip: c.whole }] : [
    { id: "a", name: "Osa A", clip: c.fragments[0] },
    { id: "b", name: "Osa B", clip: c.fragments[1] },
    ...c.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: c.bonus }] : []
  ], ne = A.find((_) => _.id === h) ?? A[0], J = ne.clip, me = Fv(J), xe = z === null ? null : me[z]?.beat ?? null, Z = xe === null ? null : J.events.find((_) => _.beat === xe)?.position ?? null, ce = E.useRef(null);
  Bh(ce, ".melody-playing", N && xe !== null ? String(xe) : "", { enabled: $ && g, playback: N });
  const ye = J.beats / 4, Ee = a === "fingering" && c.compareWith ? Iv(fh[c.compareWith.id].whole, c.whole) : null, he = (_) => _ ? `${_o[_.string]}-kieli, ${_.fret}. nauha` : "–", R = [...new Map(J.events.filter((_) => _.position).map((_) => [Ue(_.position), _.position])).values()], Y = R.map((_) => _.fret), Q = R.filter((_) => D || Z?.string === _.string && Z.fret === _.fret).map((_) => ({
    ..._,
    label: Ae(_.midi),
    kind: Z?.string === _.string && Z.fret === _.fret ? "playing" : De(_.midi) === c.tonic ? "answer" : "shape"
  })), j = {
    strings: [...new Set(R.map((_) => _.string))],
    min: Math.min(...Y),
    max: Math.max(...Y),
    fixed: "box"
  };
  async function L() {
    if (N) {
      F();
      return;
    }
    o?.();
    const _ = ++w.current;
    G.current.stop(), x(!0), T(null), H("");
    try {
      await G.current.playTimed(me, m, (se) => {
        _ === w.current && T(se);
      }, () => {
        _ === w.current && T(null);
      });
    } catch (se) {
      _ === w.current && H(ks(se));
    } finally {
      _ === w.current && (x(!1), T(null));
    }
  }
  function oe(_) {
    F(), H(""), p(_);
  }
  return /* @__PURE__ */ i.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${c.title}`, children: /* @__PURE__ */ i.jsxs("details", { onToggle: (_) => {
    const se = _.currentTarget.open;
    v(se), se || F();
  }, children: [
    /* @__PURE__ */ i.jsx("summary", { children: a === "memory" ? `Valinnainen: pidempi melodia muistista · ${c.title}` : `Valinnainen melodiaharjoitus · ${c.title}` }),
    $ && /* @__PURE__ */ i.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: a === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ i.jsx("h4", { children: c.title }),
      /* @__PURE__ */ i.jsxs("p", { className: "melody-subtitle", children: [
        c.qualifier,
        " · 4/4 · ",
        ye.toString().replace(".", ","),
        " tahtia ",
        a === "memory" ? "yhdistetyssä melodiassa" : "valitussa osassa"
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "melody-instruction", children: a === "fingering" && c.compareWith ? `Sama melodia kuin ${c.compareWith.label.toLowerCase().replace("positio", "positiossa")}, samoilla sävelkorkeuksilla ja samalla rytmillä. Vain sormitus vaihtuu. Kokeile osia A ja B erikseen ja seuraa keltaista korostusta otelaudalla.` : a === "fingering" ? "Kokeile osia A ja B erikseen. Kuuntele ja seuraa keltaisella korostettua säveltä otelaudalla." : "Yhdistä aiemmin harjoitellut osat ja soita koko melodia alusta loppuun muistista. Sävelvihjeet ja tabulatuuri ovat aluksi piilossa. Kuunnellessa soiva sävel korostuu otelaudalla. Siirry tämän jälkeen improvisoimaan." }),
      Ee && c.compareWith && /* @__PURE__ */ i.jsxs("details", { className: "melody-compare", children: [
        /* @__PURE__ */ i.jsxs("summary", { children: [
          "Vertaa sormitusta: ",
          c.compareWith.label.toLowerCase(),
          " ja ",
          c.compareWith.ownLabel.toLowerCase()
        ] }),
        /* @__PURE__ */ i.jsxs("table", { className: "melody-compare-table", children: [
          /* @__PURE__ */ i.jsxs("caption", { className: "sr-only", children: [
            "Melodian sävelet: paikka ",
            c.compareWith.label.toLowerCase().replace("positio", "positiossa"),
            " ja ",
            c.compareWith.ownLabel.toLowerCase().replace("positio", "positiossa")
          ] }),
          /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { children: [
            /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Sävel" }),
            /* @__PURE__ */ i.jsx("th", { scope: "col", children: c.compareWith.label }),
            /* @__PURE__ */ i.jsx("th", { scope: "col", children: c.compareWith.ownLabel })
          ] }) }),
          /* @__PURE__ */ i.jsx("tbody", { children: Ee.map((_) => /* @__PURE__ */ i.jsxs("tr", { className: _.moved ? "moved" : "", children: [
            /* @__PURE__ */ i.jsx("th", { scope: "row", children: Ae(_.midi, !1, !0) }),
            /* @__PURE__ */ i.jsx("td", { children: he(_.from) }),
            /* @__PURE__ */ i.jsx("td", { children: _.moved ? /* @__PURE__ */ i.jsx("strong", { children: he(_.to) }) : he(_.to) })
          ] }, _.midi)) })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Lihavoidut sävelet soitetaan uudessa käsiasemassa eri kieleltä. Muut pysyvät samassa paikassa." })
      ] }),
      a === "fingering" && c.bonus && /* @__PURE__ */ i.jsxs("p", { className: "tools-note", children: [
        "Oma B → C -lisä on ",
        /* @__PURE__ */ i.jsx("strong", { children: "erillinen harjoitus" }),
        ", ei osa ",
        c.title,
        " -sävelmää."
      ] }),
      a !== "memory" && /* @__PURE__ */ i.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: A.map((_) => /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": ne.id === _.id,
          onClick: () => oe(_.id),
          children: _.name
        },
        _.id
      )) }),
      /* @__PURE__ */ i.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": N, onClick: () => {
          L();
        }, children: N ? "■ Pysäytä melodia" : a === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ i.jsx("select", { value: m, onChange: (_) => {
            F(), y(Number(_.target.value));
          }, children: [60, 75, 84, 96, 108].concat([c.tempo]).sort((_, se) => _ - se).filter((_, se, M) => M.indexOf(_) === se).map((_) => /* @__PURE__ */ i.jsxs("option", { value: _, children: [
            _,
            " BPM"
          ] }, _)) })
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": g, onClick: () => P((_) => !_), children: g ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      W && /* @__PURE__ */ i.jsx("p", { role: "alert", className: "error", children: W }),
      /* @__PURE__ */ i.jsx("p", { className: "melody-now", "aria-live": "polite", children: N && z !== null ? `Nyt soi ${Ae(me[z].midi)} · ${_o[Z.string]}-kieli, ${Z.fret}. nauha` : N ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ i.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ i.jsx(bn, { area: j, marks: Q, disabled: !0, follow: "playing", playback: N, caption: `${c.title}, ${ne.name}` }),
        /* @__PURE__ */ i.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": D,
              onClick: () => b((_) => !_),
              children: D ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      g && /* @__PURE__ */ i.jsxs("div", { ref: ce, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ i.jsxs("table", { className: "melody-tab", "aria-label": `${c.title}, ${ne.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { children: [
            /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Kieli" }),
            J.events.map((_, se) => /* @__PURE__ */ i.jsxs("th", { scope: "col", className: _.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ i.jsx("span", { className: "melody-bar", children: _.beat % 4 === 0 ? `T${Math.floor(_.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ i.jsx("span", { className: "melody-duration", children: _.duration === 1 ? "♩" : `${_.duration} iskua` })
            ] }, se))
          ] }) }),
          /* @__PURE__ */ i.jsx("tbody", { children: _o.map((_, se) => /* @__PURE__ */ i.jsxs("tr", { children: [
            /* @__PURE__ */ i.jsx("th", { scope: "row", children: _ }),
            J.events.map((M, V) => {
              const X = M.position?.string === se, q = X && xe === M.beat;
              return /* @__PURE__ */ i.jsx(
                "td",
                {
                  className: `${M.beat % 4 === 0 ? "bar-start " : ""}${q ? "melody-playing " : ""}${X && De(M.position.midi) === c.tonic ? "melody-root" : ""}`,
                  "aria-label": X ? `${_}-kieli, ${M.position.fret}. nauha, ${Ae(M.position.midi)}` : void 0,
                  children: X ? M.position.fret : "—"
                },
                V
              );
            })
          ] }, se)) })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: c.note }),
      c.source && /* @__PURE__ */ i.jsx("p", { className: "melody-source", children: /* @__PURE__ */ i.jsx("a", { href: c.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Ho = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [1, 2]), nf = [...new Map(Ho.flatMap((r) => r.positions[0].strings.flatMap((a, o) => a.map((d) => {
  const c = Ne(o, d);
  return [Ue(c), c];
})))).values()].sort((r, a) => r.midi - a.midi || a.string - r.string), Oa = [5, 4, 3, 2, 1, 0].flatMap((r) => nf.filter((a) => a.string === r).sort((a, o) => a.fret - o.fret)), Go = [
  ...Oa,
  ...Oa.slice(1, -1).reverse()
], Dv = [...Go, Oa[0]], mh = new Set(
  Ho[0].positions[0].strings.flatMap((r, a) => r.map((o) => {
    const d = Ne(a, o);
    return Ue(d);
  })).filter((r) => Ho[1].positions[0].strings.flatMap((a, o) => a.map((d) => Ue(Ne(o, d)))).includes(r))
), zv = [
  Ne(5, 5),
  Ne(5, 8),
  Ne(5, 10),
  Ne(4, 7),
  Ne(4, 10),
  Ne(3, 7),
  Ne(3, 10),
  Ne(3, 7),
  Ne(4, 10),
  Ne(4, 7),
  Ne(5, 10),
  Ne(5, 8),
  Ne(5, 5)
], sf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", rf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", Ao = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], ph = (r) => De(r) === 9;
function vh() {
  try {
    const r = Number(localStorage.getItem(sf));
    return Number.isInteger(r) ? Math.max(0, Math.min(4, r)) : 0;
  } catch {
    return 0;
  }
}
function Bv() {
  try {
    const r = Number(localStorage.getItem(rf));
    return Number.isInteger(r) && r >= 40 && r <= 140 && r % 5 === 0 ? r : 75;
  } catch {
    return 75;
  }
}
function Vv({ onBack: r, onPosition: a }) {
  const [o, d] = E.useState(vh), [c, h] = E.useState(vh), [p, m] = E.useState(!1), [y, $] = E.useState("roots"), [v, g] = E.useState(Bv), [P, D] = E.useState(null), [b, N] = E.useState(null), [x, z] = E.useState(""), T = E.useRef(new $i()), W = E.useRef(0), H = E.useRef(null), G = b === null ? null : Go[b];
  function w() {
    H.current?.(), W.current++, T.current.stop(), D(null), N(null);
  }
  E.useEffect(() => {
    const Z = () => {
      document.hidden && (W.current++, T.current.stop(), D(null), N(null));
    };
    return document.addEventListener("visibilitychange", Z), () => {
      document.removeEventListener("visibilitychange", Z), W.current++, T.current.stop();
    };
  }, []);
  async function F(Z) {
    H.current?.();
    const ce = ++W.current;
    T.current.stop(), N(null), z(""), D(Z);
    try {
      Z === "transition" ? await T.current.play(zv.map((ye) => ye.midi)) : Z === "once" ? await T.current.play(Dv.map((ye) => ye.midi)) : await T.current.loop(Go.map((ye) => ye.midi), (ye) => {
        ce === W.current && N(ye);
      }, v);
    } catch (ye) {
      ce === W.current && z(ks(ye));
    } finally {
      ce === W.current && (D(null), N(null));
    }
  }
  function A(Z) {
    const ce = Math.max(40, Math.min(140, Z));
    g(ce), T.current.setLoopTempo(ce);
    try {
      localStorage.setItem(rf, String(ce));
    } catch {
    }
  }
  function ne(Z) {
    Z > o || (w(), h(Z), m(!1), $("roots"));
  }
  function J() {
    w();
    const Z = Math.min(4, c + 1);
    if (h(Z), m(!1), $("roots"), Z > o) {
      d(Z);
      try {
        localStorage.setItem(sf, String(Z));
      } catch {
      }
    }
  }
  const me = (Z, ce) => c < 2 || c === 2 && p && mh.has(ce) || c === 3 && (y === "all" || y === "roots" && ph(Z)), xe = nf.filter((Z) => me(Z.midi, Ue(Z))).map((Z) => ({
    ...Z,
    label: c < 2 || c === 2 && p || c === 3 && y === "all" ? Ae(Z.midi) : "A",
    kind: c < 2 && G?.string === Z.string && G?.fret === Z.fret ? "playing" : ph(Z.midi) ? "answer" : mh.has(Ue(Z)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ i.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
      w(), r();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · VAIHE 3" }),
    /* @__PURE__ */ i.jsx("h2", { id: "scale-path-title", children: "A-mollipentatoninen · positioiden 1 ja 2 yhdistäminen" }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Opettele liikkumaan kahden tutun boksin välillä, älä vain muistamaan kahta erillistä kuviota." }),
    /* @__PURE__ */ i.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ i.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat 5–10 · 6 kieltä"
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
        w(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
        w(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => ne(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ i.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: Ao.map((Z, ce) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        type: "button",
        className: ce === c ? "journey-step current" : "journey-step",
        "aria-current": ce === c ? "step" : void 0,
        disabled: ce > o,
        onClick: () => ne(ce),
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: ce > o ? "🔒" : ce < o ? "✓" : ce + 1 }),
          /* @__PURE__ */ i.jsx("span", { children: Z.title })
        ]
      },
      Z.title
    )) }),
    /* @__PURE__ */ i.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h3", { id: "lesson-title", children: Ao[c].title }),
        /* @__PURE__ */ i.jsx("span", { children: c === 4 ? "Valmis" : `Harjoitus ${c + 1} / 4` })
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: Ao[c].detail }),
      c < 4 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        c === 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("p", { children: "Kummassakin positiossa on 12 sävelpaikkaa, mutta yhteisiä paikkoja on kuusi. Niinpä näet yhteensä 18 erillistä paikkaa, et 24:ää. Koko asteikon mallisoitto käy nämä kaikki läpi kuudella kielellä ylös ja alas." }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "Violetit reunustetut sävelet" }),
            " kuuluvat molempiin bokseihin. Vihreät A:t ovat pohjasäveliä. D-kielen 7. nauha on sekä yhteinen sävel että A-pohjasävel. Koko yhdistetyllä otelaudalla on neljä A-pohjasävelpaikkaa."
          ] })
        ] }),
        c === 1 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs("p", { children: [
            "Soita ensin koko yhdistetty asteikko paksulta E-kieleltä ohuelle e-kielelle. Jokaisella kielellä on kolme eri nauhapaikkaa, yhteensä ",
            /* @__PURE__ */ i.jsxs("strong", { children: [
              Oa.length,
              " paikkaa"
            ] }),
            ". Palaa samaa reittiä alas. Yhteiset sävelet muodostavat kohdat, joista pääset positiosta toiseen."
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            "Erillisessä lyhyessä siirtymäfraasissa harjoittelet paksulla E-kielellä ",
            /* @__PURE__ */ i.jsx("strong", { children: "5 (A) → 8 (C) → 10 (D)" }),
            " sekä sen jälkeen A- ja D-kieliä. Se on vain käsiaseman vaihdon harjoitus, ei koko asteikko. Vaihda käsiasemaa rauhallisesti, älä venytä sormia väkisin."
          ] }),
          /* @__PURE__ */ i.jsx("p", { children: "Osa sävelkorkeuksista toistuu eri kielillä. Se on tarkoituksellista: harjoittelet myös niiden paikkojen löytämistä otelaudalta." })
        ] }),
        c === 2 && /* @__PURE__ */ i.jsx("p", { children: "Soita koko yhdistetty 18 paikan asteikko kuudella kielellä ylös ja alas muistista. Sävelet eivät näy oletuksena. Voit pyytää näkyviin vain molempien boksien kuusi yhteistä sävelpaikkaa. Palaa edelliseen vaiheeseen, jos tarvitset koko kuvion." }),
        c === 3 && /* @__PURE__ */ i.jsx("p", { children: "Kuuntele ensin koko yhdistetty asteikko tai lyhyt siirtymäfraasi. Soita Am-taustan päälle sitten kahden tahdin fraasi 1. positiosta ja vastaa siihen 2. positiosta. Käytä samoja yhteisiä säveliä siirtymäkohtina. Kokeile lopettaa A-säveleen ja pidä fraasien välissä taukoja." }),
        c === 2 && /* @__PURE__ */ i.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Siirtymäharjoituksen tempo", children: [
          /* @__PURE__ */ i.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => A(v - 5), children: "− 5" }),
          /* @__PURE__ */ i.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => A(v + 5), children: "+ 5" }),
          /* @__PURE__ */ i.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        c < 3 && /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": P === "whole",
              onClick: () => P === "whole" ? w() : void F("whole"),
              children: P === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": P === "once",
              onClick: () => P === "once" ? w() : void F("once"),
              children: P === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": P === "transition",
              onClick: () => P === "transition" ? w() : void F("transition"),
              children: P === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        c === 2 && /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((Z) => !Z), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => ne(1), children: "← Palaa sormitukseen" })
        ] }),
        c === 3 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ i.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((Z) => /* @__PURE__ */ i.jsxs("label", { children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: Z.value,
                  checked: y === Z.value,
                  onChange: () => $(Z.value)
                }
              ),
              /* @__PURE__ */ i.jsx("span", { children: Z.name })
            ] }, Z.value))
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => P === "once" ? w() : void F("once"), children: P === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => P === "transition" ? w() : void F("transition"), children: P === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        c !== 3 && /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: P === "whole" ? G && c < 2 ? `Nyt soi ${Ae(G.midi, !1, !0)} · ${ft[G.string]}-kieli, nauha ${G.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : P === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : P === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        x && /* @__PURE__ */ i.jsx("p", { role: "alert", className: "error", children: x }),
        /* @__PURE__ */ i.jsx(
          bn,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: P,
            marks: xe,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ i.jsxs("p", { className: "tools-note", children: [
          c === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : c === 3 ? y === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : y === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (c === 1 || c === 2) && /* @__PURE__ */ i.jsx(
          su,
          {
            pieceId: "pentatonic-bridge",
            stage: c === 1 ? "fingering" : "memory",
            onBeforePlay: w,
            stopHandleRef: H
          },
          `bridge:${c}`
        ),
        c === 3 && /* @__PURE__ */ i.jsx(Zh, {}),
        /* @__PURE__ */ i.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ i.jsx("p", { children: c === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : c === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : c === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: J, children: c === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      c === 4 && /* @__PURE__ */ i.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ i.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => ne(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => a(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => a(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: () => a(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ i.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ i.jsx("p", { children: o === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const or = "musiikin-kartta:skaalapolku:v1", Ta = "musiikin-kartta:skaalapolku:position-2:v1", Po = "musiikin-kartta:skaalapolku:position-3:v1", _a = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Fa = "musiikin-kartta:skaalapolku:active-position:v1", af = "musiikin-kartta:skaalapolku:tempo:v1", ds = 75, Wo = 40, Qo = 140;
function Kv() {
  try {
    const r = localStorage.getItem(af);
    if (r === null) return ds;
    const a = Number(r);
    return Number.isInteger(a) && a >= Wo && a <= Qo && a % 5 === 0 ? a : ds;
  } catch {
    return ds;
  }
}
const Lo = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], kh = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
], yh = { 1: "wayfaring", 2: "wayfaring-p2", 3: "high-answer" };
function Cn(r = or) {
  try {
    const a = Number(localStorage.getItem(r));
    return Number.isInteger(a) ? Math.max(0, Math.min(4, a)) : 0;
  } catch {
    return 0;
  }
}
function $o() {
  try {
    const r = localStorage.getItem(Fa);
    return r === "3" && Cn(_a) === 4 ? 3 : Cn(or) === 4 && (r === "2" || r === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Uv() {
  try {
    return Cn(Ta) === 4 && localStorage.getItem(Fa) === "bridge";
  } catch {
    return !1;
  }
}
function Hv({ onBack: r }) {
  const [a, o] = E.useState($o), [d, c] = E.useState(Uv), [h, p] = E.useState(() => ({
    1: Cn(or),
    2: Cn(Ta),
    3: Cn(Po)
  })), [m, y] = E.useState(() => Cn($o() === 3 ? Po : $o() === 2 ? Ta : or)), $ = h[a], [v, g] = E.useState(!1), [P, D] = E.useState("roots"), [b, N] = E.useState(Kv), [x, z] = E.useState(null), [T, W] = E.useState(null), [H, G] = E.useState(""), w = E.useRef(new $i()), F = E.useRef(0), A = E.useRef(null);
  function ne(M) {
    const V = Math.max(Wo, Math.min(Qo, M));
    N(V), w.current.setLoopTempo(V);
    try {
      localStorage.setItem(af, String(V));
    } catch {
    }
  }
  function J() {
    A.current?.(), F.current++, w.current.stop(), z(null), W(null);
  }
  E.useEffect(() => {
    const M = () => {
      document.hidden && (F.current++, w.current.stop(), z(null), W(null));
    };
    return document.addEventListener("visibilitychange", M), () => {
      document.removeEventListener("visibilitychange", M), F.current++, w.current.stop();
    };
  }, []);
  const me = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [a])[0].positions[0], xe = me.strings.flatMap((M, V) => M.map((X) => Ne(V, X))).sort((M, V) => M.midi - V.midi || V.string - M.string), Z = [...xe, ...xe.slice(1, -1).reverse()], ce = T === null ? null : Z[T], ye = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], Ee = me.start, he = me.end, R = (M) => De(M) === 9, Y = (M) => m < 2 ? !0 : m === 2 ? v && R(M) : P === "scale" || P === "roots" && R(M), Q = xe.filter((M) => Y(M.midi)).map((M) => ({
    ...M,
    label: m < 2 || m === 3 && P === "scale" ? Ae(M.midi) : "A",
    kind: m < 2 && ce?.string === M.string && ce.fret === M.fret ? "playing" : R(M.midi) ? "answer" : "shape"
  }));
  async function j(M) {
    A.current?.();
    const V = ++F.current;
    w.current.stop(), W(null), G(""), z(M);
    try {
      M === "phrase" ? await w.current.play(ye) : await w.current.loop(Z.map((X) => X.midi), (X) => {
        V === F.current && W(X);
      }, m === 2 ? b : ds);
    } catch (X) {
      V === F.current && G(ks(X));
    } finally {
      V === F.current && (z(null), W(null));
    }
  }
  function L() {
    J();
    const M = Math.min(4, m + 1);
    if (y(M), g(!1), D("roots"), M > $) {
      p((X) => ({ ...X, [a]: M }));
      const V = a === 1 ? or : a === 2 ? Ta : Po;
      try {
        localStorage.setItem(V, String(M));
      } catch {
      }
    }
  }
  function oe(M) {
    M > $ || (J(), y(M), g(!1), D("roots"));
  }
  function _(M) {
    if (!(M === 2 && h[1] < 4) && !(M === 3 && Cn(_a) < 4)) {
      J(), c(!1), o(M), y(h[M]), g(!1), D("roots"), G("");
      try {
        localStorage.setItem(Fa, String(M));
      } catch {
      }
    }
  }
  function se() {
    if (!(h[2] < 4)) {
      J(), c(!0), g(!1), G("");
      try {
        localStorage.setItem(Fa, "bridge");
      } catch {
      }
    }
  }
  return d ? /* @__PURE__ */ i.jsx(Vv, { onBack: r, onPosition: _ }) : /* @__PURE__ */ i.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
      J(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ i.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · VAIHE ",
      a
    ] }),
    /* @__PURE__ */ i.jsxs("h2", { id: "scale-path-title", children: [
      "A-mollipentatoninen · positio ",
      a
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ i.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ i.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ i.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat ",
      Ee,
      "–",
      he,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => _(1), children: "Positio 1" }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: h[1] < 4,
          onClick: () => _(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          disabled: h[2] < 4,
          onClick: se,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: Cn(_a) < 4,
          onClick: () => _(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: Lo.map((M, V) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        type: "button",
        className: V === m ? "journey-step current" : "journey-step",
        "aria-current": V === m ? "step" : void 0,
        disabled: V > $,
        onClick: () => oe(V),
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: V > $ ? "🔒" : V < $ ? "✓" : V + 1 }),
          /* @__PURE__ */ i.jsx("span", { children: V === 4 ? `Positio ${a} harjoiteltu` : M.title })
        ]
      },
      M.title
    )) }),
    /* @__PURE__ */ i.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${a} harjoiteltu` : Lo[m].title }),
        /* @__PURE__ */ i.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: Lo[m].detail }),
      m < 4 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        m === 0 && /* @__PURE__ */ i.jsxs("p", { children: [
          "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. ",
          a === 1 ? "Tässä vaiheessa keskitytään vain asteikon säveliin." : "Kuuntele myös lyhyt mallifraasi.",
          " Ääni on syntetisoitu."
        ] }),
        m === 0 && a === 2 && /* @__PURE__ */ i.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        m === 0 && a === 3 && /* @__PURE__ */ i.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        m === 1 && /* @__PURE__ */ i.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        m === 2 && /* @__PURE__ */ i.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        m === 3 && /* @__PURE__ */ i.jsxs("p", { children: [
          a === 1 ? "Käytä aiemmin muistista soitettua melodiaa omien fraasien lähtökohtana. " : "Kuuntele mallifraasi. ",
          "Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A."
        ] }),
        m === 2 && /* @__PURE__ */ i.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ i.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: b <= Wo,
              onClick: () => ne(b - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ i.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            b,
            " BPM"
          ] }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: b >= Qo,
              onClick: () => ne(b + 5),
              children: "+ 5"
            }
          ),
          b !== ds && /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => ne(ds),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ i.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        m !== 3 && /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "loop",
              onClick: () => x === "loop" ? J() : void j("loop"),
              children: x === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => x === "phrase" ? J() : void j("phrase"), children: x === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: x === "loop" ? ce && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Ae(ce.midi, !1, !0)} · ${ft[ce.string]}-kieli, nauha ${ce.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        H && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: H }),
        m >= 1 && m <= 3 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          m === 2 && /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": v, onClick: () => g((M) => !M), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => oe(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ i.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              kh.map((M) => /* @__PURE__ */ i.jsxs("label", { children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: M.value,
                    checked: P === M.value,
                    onChange: () => D(M.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: M.label })
              ] }, M.value))
            ] }),
            a !== 1 && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
              j("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ i.jsx(bn, { area: { strings: [0, 1, 2, 3, 4, 5], min: Ee, max: he, fixed: "box" }, marks: Q, disabled: !0, follow: "playing", playback: x, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ i.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? kh.find((M) => M.value === P).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(bn, { area: { strings: [0, 1, 2, 3, 4, 5], min: Ee, max: he, fixed: "box" }, marks: Q, disabled: !0, follow: "playing", playback: x, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        (m === 1 || m === 2) && /* @__PURE__ */ i.jsx(
          su,
          {
            pieceId: yh[a],
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: J,
            stopHandleRef: A
          },
          `${yh[a]}:${m}`
        ),
        m === 3 && /* @__PURE__ */ i.jsx(Zh, {}, a),
        /* @__PURE__ */ i.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ i.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: L, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ i.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ i.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ i.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => oe(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: () => _(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: se, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => _(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ i.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        h[1] < 4 ? "🔒 Positio 2" : h[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        h[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Cn(_a) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const Gv = ["ionian", "aeolian"], os = {
  ionian: {
    id: "ionian",
    title: "C-jooninen",
    alias: "Ionian · tavallinen duuri",
    tonic: 0,
    scaleKey: "ionian",
    tonicName: "C",
    chord: "C-duuri",
    noteNames: "C · D · E · F · G · A · B",
    explanation: "Seitsemän säveltä ja C kotisävelenä. Kuuntele, miten B pyrkii C:hen.",
    contrast: "A-aiolisessa ovat samat seitsemän säveltä, mutta A on kotisävel.",
    // A-kieli 3.–5., D-kieli 2.–5. ja G-kieli 2.–5. nauha.
    positions: [
      Ne(4, 3),
      Ne(4, 5),
      Ne(3, 2),
      Ne(3, 3),
      Ne(3, 5),
      Ne(2, 2),
      Ne(2, 4),
      Ne(2, 5)
    ],
    phrase: [48, 52, 55, 59, 60, 59, 55, 52, 48],
    accompaniment: [48, 52, 55, 52]
  },
  aeolian: {
    id: "aeolian",
    title: "A-aiolinen",
    alias: "Aeolian · luonnollinen molli",
    tonic: 9,
    scaleKey: "aeolian",
    tonicName: "A",
    chord: "A-molli",
    noteNames: "A · B · C · D · E · F · G",
    explanation: "A tuntuu nyt kotisäveleltä, vaikka sävelnimet ovat samat kuin C-duurissa.",
    contrast: "C-joonisessa C on kotisävel. Opettele kuulemaan A:n ja C:n eri vetovoima.",
    // Paksu E 5.–8., A-kieli 5.–8. ja D-kieli 5.–7. nauha.
    positions: [
      Ne(5, 5),
      Ne(5, 7),
      Ne(5, 8),
      Ne(4, 5),
      Ne(4, 7),
      Ne(4, 8),
      Ne(3, 5),
      Ne(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, lf = (r) => "musiikin-kartta:moodipolku:" + r + ":v1", of = "musiikin-kartta:moodipolku:active:v1", Wv = (r) => {
  const a = os[r].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, Qv = (r) => [...Wv(r), os[r].positions[0]], gh = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Aa(r) {
  try {
    const a = Number(localStorage.getItem(lf(r)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function jh() {
  try {
    return localStorage.getItem(of) === "aeolian" && Aa("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function Yv({ onBack: r }) {
  const [a, o] = E.useState(jh), [d, c] = E.useState(() => ({
    ionian: Aa("ionian"),
    aeolian: Aa("aeolian")
  })), [h, p] = E.useState(() => Aa(jh())), [m, y] = E.useState(null), [$, v] = E.useState(null), [g, P] = E.useState(!1), [D, b] = E.useState("roots"), [N, x] = E.useState(""), [z, T] = E.useState(null), [W, H] = E.useState(null), G = E.useRef(new $i()), w = E.useRef(0), F = E.useRef(null), A = os[a], ne = Qv(a), J = m === "scale" && $ !== null ? ne[$] : null;
  function me() {
    F.current?.(), w.current++, G.current.stop(), y(null), v(null);
  }
  E.useEffect(() => {
    const L = () => {
      document.hidden && (w.current++, G.current.stop(), y(null), v(null));
    };
    return document.addEventListener("visibilitychange", L), () => {
      document.removeEventListener("visibilitychange", L), w.current++, G.current.stop();
    };
  }, []);
  async function xe(L, oe, _ = !1) {
    F.current?.();
    const se = ++w.current;
    G.current.stop(), v(null), x(""), y(L);
    try {
      const M = _ ? await G.current.loop(oe, void 0, 75) : await G.current.play(oe, (V) => {
        se === w.current && L === "scale" && v(V);
      });
      return se === w.current && M;
    } catch (M) {
      return se === w.current && x(ks(M)), !1;
    } finally {
      se === w.current && (y(null), v(null));
    }
  }
  function Z(L) {
    L > d[a] || (me(), p(L), T(null), H(null), P(!1), b("roots"), x(""));
  }
  function ce() {
    me();
    const L = Math.min(5, h + 1);
    if (p(L), T(null), H(null), P(!1), b("roots"), L > d[a]) {
      c((oe) => ({ ...oe, [a]: L }));
      try {
        localStorage.setItem(lf(a), String(L));
      } catch {
      }
    }
  }
  function ye(L) {
    if (!(L === "aeolian" && d.ionian < 5)) {
      me(), o(L), p(d[L]), T(null), H(null), P(!1), b("roots"), x("");
      try {
        localStorage.setItem(of, L);
      } catch {
      }
    }
  }
  async function Ee() {
    me(), H(null), T(null);
    const L = Math.random() < 0.5 ? "ionian" : "aeolian";
    await xe("comparison", os[L].phrase) && T(L);
  }
  const he = (L) => De(L) === A.tonic, R = A.positions.filter((L) => h < 2 ? !0 : h === 2 ? g && he(L.midi) : h === 4 ? D === "all" || D === "roots" && he(L.midi) : !1).map((L) => ({
    ...L,
    label: h === 2 || h === 4 && D === "roots" ? A.tonicName : Ae(L.midi),
    kind: J?.string === L.string && J.fret === L.fret ? "playing" : he(L.midi) ? "answer" : "shape"
  })), Y = [...new Set(A.positions.map((L) => L.string))], Q = Math.min(...A.positions.map((L) => L.fret)), j = Math.max(...A.positions.map((L) => L.fret));
  return /* @__PURE__ */ i.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
      me(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ i.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      Gv.indexOf(a) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ i.jsxs("h2", { id: "mode-path-title", children: [
      A.title,
      " · ",
      A.alias
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ i.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: A.explanation }),
    /* @__PURE__ */ i.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ i.jsx("strong", { children: A.noteNames }),
      " · Pohjasävel ",
      A.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => ye("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: d.ionian < 5,
          onClick: () => ye("aeolian"),
          children: [
            "2. A-aiolinen ",
            d.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ i.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      gh.map((L, oe) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: h === oe ? "journey-step current" : "journey-step",
          "aria-current": h === oe ? "step" : void 0,
          disabled: oe > d[a],
          onClick: () => Z(oe),
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: oe > d[a] ? "🔒" : oe < d[a] ? "✓" : oe + 1 }),
            /* @__PURE__ */ i.jsx("span", { children: L })
          ]
        },
        L
      )),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: h === 5 ? "journey-step current" : "journey-step",
          disabled: d[a] < 5,
          "aria-current": h === 5 ? "step" : void 0,
          onClick: () => Z(5),
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: d[a] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ i.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h3", { id: "mode-lesson-title", children: h === 5 ? "Moodi harjoiteltu" : gh[h] }),
        /* @__PURE__ */ i.jsx("span", { children: h === 5 ? "Valmis" : "Harjoitus " + (h + 1) + " / 5" })
      ] }),
      h === 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          A.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          A.contrast
        ] })
      ] }),
      h === 1 && /* @__PURE__ */ i.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      h === 2 && /* @__PURE__ */ i.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        A.tonicName,
        "-pohjasävelen, jos tarvitset vihjettä."
      ] }),
      h === 3 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Kuuntele satunnainen fraasi. Sen sävelet kuuluvat samaan C-duurin ja A-mollin säveljoukkoon. Päättele, ",
          /* @__PURE__ */ i.jsx("strong", { children: "päättyykö fraasi C:hen vai A:han" }),
          ". Tämä harjoittaa sävelkeskuksen kuulemista, ei vielä koko moodin automaattista tunnistusta."
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              disabled: m !== null,
              onClick: () => {
                Ee();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          z !== null && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
            xe("comparison", os[z].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        z !== null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ i.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                disabled: W !== null || m !== null,
                onClick: () => H("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                disabled: W !== null || m !== null,
                onClick: () => H("aeolian"),
                children: "A"
              }
            )
          ] }),
          W !== null && /* @__PURE__ */ i.jsxs("p", { role: "status", children: [
            W === z ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            os[z].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      h === 4 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Soita ",
          A.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          A.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ i.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          A.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ i.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ i.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([L, oe]) => /* @__PURE__ */ i.jsxs("label", { children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: L,
                checked: D === L,
                onChange: () => b(L)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: oe })
          ] }, L))
        ] })
      ] }),
      h === 2 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => P((L) => !L), children: g ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      h < 3 && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? me() : void xe("scale", ne.map((L) => L.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      h === 4 && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? me() : void xe("accompaniment", A.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      h < 2 && m === "scale" && J && /* @__PURE__ */ i.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Ae(J.midi, !1, !0),
        " · ",
        ft[J.string],
        "-kieli, nauha ",
        J.fret,
        "."
      ] }),
      h !== 3 && h !== 5 && /* @__PURE__ */ i.jsx(
        bn,
        {
          area: { strings: Y, min: Q, max: j, fixed: "box" },
          marks: R,
          follow: "playing",
          playback: m,
          disabled: !0,
          caption: A.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && (h === 1 || h === 2) && /* @__PURE__ */ i.jsx(
        su,
        {
          pieceId: "nooa",
          stage: h === 1 ? "fingering" : "memory",
          onBeforePlay: me,
          stopHandleRef: F
        },
        `nooa:${h}`
      ),
      N && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: N }),
      h < 5 && /* @__PURE__ */ i.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ i.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: ce, children: h === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      h === 5 && /* @__PURE__ */ i.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ i.jsxs("h3", { children: [
          A.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ i.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => Z(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => ye("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ i.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
const di = [0, 1, 2], us = 0, sr = 5, rr = 5, Jv = /* @__PURE__ */ new Set([0, 2, 4, 5, 7, 9, 11]);
function uf(r) {
  return Array.from({ length: sr - us + 1 }, (a, o) => Ne(r, us + o)).filter((a) => Jv.has(De(a.midi)));
}
function Xv(r, a = rr, o = Math.random) {
  const d = uf(r), c = (m) => m[Math.min(m.length - 1, Math.floor(o() * m.length))], h = [...d];
  for (let m = h.length - 1; m > 0; m--) {
    const y = Math.min(m, Math.floor(o() * (m + 1)));
    [h[m], h[y]] = [h[y], h[m]];
  }
  const p = h.slice(0, Math.min(a, h.length));
  for (; p.length < a; ) p.push(c(d.filter((m) => m.fret !== p[p.length - 1].fret)));
  return p;
}
const Zv = { id: "aeolian", name: "A-aiolinen", steps: [0, 2, 3, 5, 7, 8, 10, 12], spelled: ["A", "B", "C", "D", "E", "F", "G", "A"] }, qv = { id: "dorian", name: "A-doorinen", steps: [0, 2, 3, 5, 7, 9, 10, 12], spelled: ["A", "B", "C", "D", "E", "F♯", "G", "A"] }, ek = { id: "ionian", name: "C-jooninen", steps: [0, 2, 4, 5, 7, 9, 11, 12], spelled: ["C", "D", "E", "F", "G", "A", "B", "C"] }, tk = { id: "mixolydian", name: "C-miksolyydinen", steps: [0, 2, 4, 5, 7, 9, 10, 12], spelled: ["C", "D", "E", "F", "G", "A", "B♭", "C"] }, _i = {
  "a-aeolian-dorian": {
    id: "a-aeolian-dorian",
    title: "A-aiolinen ja A-doorinen",
    tonic: 57,
    tonicName: "A",
    drone: 45,
    modes: [Zv, qv],
    degree: 6,
    degreeNames: ["F", "F♯"],
    intervalNames: ["♭6, pieni seksti", "6, suuri seksti"],
    // Nauhat 7–11, kielet D, G ja B: A3 D7, B3 D9, C4 D10, D4 G7, E4 G9, F4 G10 / F♯4 G11, G4 B8, A4 B10.
    fingering: { 57: Ne(3, 7), 59: Ne(3, 9), 60: Ne(3, 10), 62: Ne(2, 7), 64: Ne(2, 9), 65: Ne(2, 10), 66: Ne(2, 11), 67: Ne(1, 8), 69: Ne(1, 10) },
    phrase: [
      { degree: 1, duration: 1 },
      { degree: 3, duration: 1 },
      { degree: 5, duration: 1 },
      { degree: 6, duration: 1 },
      { degree: 6, duration: 1 },
      { degree: 5, duration: 1 },
      { degree: 4, duration: 1 },
      { degree: 3, duration: 1 },
      { degree: 2, duration: 1 },
      { degree: 1, duration: 3 }
    ],
    explanation: "Molemmissa on molliterssi C. Aiolisessa kuudes aste on F, puoli sävelaskelta kvintin E yläpuolella: kuulostaa tummalta ja haluaa laskeutua E:hen. Doorisessa kuudes aste on F♯, kokonainen sävelaskel E:n yläpuolella: mollisointi kirkastuu."
  },
  "c-ionian-mixolydian": {
    id: "c-ionian-mixolydian",
    title: "C-jooninen ja C-miksolyydinen",
    tonic: 60,
    tonicName: "C",
    drone: 48,
    modes: [ek, tk],
    degree: 7,
    degreeNames: ["B", "B♭"],
    intervalNames: ["7, suuri septimi", "♭7, pieni septimi"],
    // Nauhat 5–8, kielet G, B ja e: C4 G5, D4 G7, E4 B5, F4 B6, G4 B8, A4 e5, B♭4 e6 / B4 e7, C5 e8.
    fingering: { 60: Ne(2, 5), 62: Ne(2, 7), 64: Ne(1, 5), 65: Ne(1, 6), 67: Ne(1, 8), 69: Ne(0, 5), 70: Ne(0, 6), 71: Ne(0, 7), 72: Ne(0, 8) },
    phrase: [
      { degree: 1, duration: 1 },
      { degree: 3, duration: 1 },
      { degree: 5, duration: 1 },
      { degree: 7, duration: 1 },
      { degree: 8, duration: 1 },
      { degree: 7, duration: 1 },
      { degree: 6, duration: 1 },
      { degree: 5, duration: 1 },
      { degree: 3, duration: 1 },
      { degree: 1, duration: 3 }
    ],
    explanation: "Molemmissa on duuriterssi E. Joonisessa seitsemäs aste on B, puoli sävelaskelta toonikan alapuolella: johtosävel vetää C:hen. Miksolyydisessä seitsemäs aste on B♭, kokonainen sävelaskel alempana: veto heikkenee ja sointi on rennompi, bluesahtavampi."
  }
}, hi = (r, a, o) => r.tonic + a.steps[o - 1];
function nk(r, a, o = 0) {
  return a.steps.map((d, c) => ({ midi: r.tonic + d, beat: o + c, duration: c === 7 ? 2 : 1 }));
}
function ik(r, a, o = 0) {
  let d = o;
  return r.phrase.map((c) => {
    const h = { midi: hi(r, a, c.degree), beat: d, duration: c.duration };
    return d += c.duration, h;
  });
}
function sk(r, a) {
  const o = Math.min(...a.map((c) => c.beat)), d = Math.max(...a.map((c) => c.beat + c.duration));
  return [{ midi: r.drone, beat: o, duration: d - o, level: 0.1 }, ...a];
}
function Ro(r, a = Math.random) {
  const o = a() < 0.5 ? [r.modes[0], r.modes[1]] : [r.modes[1], r.modes[0]], d = a() < 0.5 ? r.modes[0] : r.modes[1];
  return { order: o, asked: d, answer: o[0].id === d.id ? 0 : 1 };
}
const rk = [
  { degree: 6, direction: "up" },
  { degree: 6, direction: "down" },
  { degree: 7, direction: "up" },
  { degree: 7, direction: "down" }
];
function xh(r = Math.random) {
  const a = r() < 0.5 ? _i["a-aeolian-dorian"] : _i["c-ionian-mixolydian"], [o, d] = r() < 0.5 ? [a.modes[0], a.modes[1]] : [a.modes[1], a.modes[0]], c = a.degree, h = o.steps[c - 1] < d.steps[c - 1] ? "up" : "down";
  return { pair: a, first: o, second: d, answer: { degree: c, direction: h } };
}
const ak = [
  { id: "listen", title: "Kuuntele ero" },
  { id: "which", title: "Kumpi oli kumpi?" },
  { id: "change", title: "Mikä sävelaste muuttui?" }
], lk = 84, ok = 2, Sh = (r) => `${r.degree}. aste ${r.direction === "up" ? "nousi" : "laski"}`, rs = (r, a, o) => {
  const d = a.steps.findIndex((c) => o.tonic + c === r);
  return d >= 0 ? a.spelled[d] : Ae(r);
};
function uk(r, a) {
  let o = 0;
  const d = [], c = [], h = [];
  return a.forEach((p, m) => {
    const y = p.kind === "scale" ? nk(r, p.mode, o) : ik(r, p.mode, o);
    d.push(...y), c.push(...y.map(() => p.mode)), h.push(...y.map(() => m)), o = Math.max(...y.map(($) => $.beat + $.duration)) + ok;
  }), { notes: sk(r, d), owners: c, sample: h };
}
function cf({ onBack: r, backLabel: a }) {
  const [o, d] = E.useState("a-aeolian-dorian"), [c, h] = E.useState("listen"), [p, m] = E.useState(() => Ro(_i["a-aeolian-dorian"])), [y, $] = E.useState(() => xh()), [v, g] = E.useState(null), [P, D] = E.useState({ right: 0, total: 0 }), [b, N] = E.useState(null), [x, z] = E.useState(null), [T, W] = E.useState(""), H = E.useRef(new $i()), G = E.useRef(0), w = c === "change" ? y.pair : _i[o];
  function F() {
    G.current++, H.current.stop(), N(null), z(null);
  }
  E.useEffect(() => {
    const M = () => {
      document.hidden && F();
    };
    return document.addEventListener("visibilitychange", M), () => {
      document.removeEventListener("visibilitychange", M), G.current++, H.current.stop();
    };
  }, []);
  async function A(M, V, X = w) {
    if (b === M) {
      F();
      return;
    }
    const q = ++G.current, { notes: pe, owners: K, sample: re } = uk(X, V);
    W(""), z(null), N(M);
    try {
      await H.current.playTimed(pe, lk, (ae) => {
        q !== G.current || ae === 0 || z({ midi: pe[ae].midi, mode: K[ae - 1], sample: re[ae - 1] });
      }, () => {
        q === G.current && z(null);
      });
    } catch (ae) {
      q === G.current && W(ks(ae));
    } finally {
      q === G.current && (N(null), z(null));
    }
  }
  function ne(M) {
    F(), d(M), g(null), m(Ro(_i[M]));
  }
  function J(M) {
    F(), h(M), g(null);
  }
  function me() {
    F(), g(null), c === "which" ? m(Ro(_i[o])) : $(xh());
  }
  function xe(M) {
    v === null && (F(), g(M), D((V) => ({ right: V.right + (M === p.answer ? 1 : 0), total: V.total + 1 })));
  }
  function Z(M) {
    if (v !== null) return;
    F(), g(M);
    const V = M.degree === y.answer.degree && M.direction === y.answer.direction;
    D((X) => ({ right: X.right + (V ? 1 : 0), total: X.total + 1 }));
  }
  const ce = c === "listen" || v !== null, [ye, Ee] = w.modes, he = (M) => M === hi(w, ye, w.degree) || M === hi(w, Ee, w.degree), R = Object.entries(w.fingering).map(([M, V]) => ({ midi: Number(M), position: V })), Y = R.filter(() => ce).map(({ midi: M, position: V }) => {
    const X = M === hi(w, Ee, w.degree) ? Ee : ye;
    return {
      ...V,
      label: rs(M, X, w),
      kind: x?.midi === M ? "playing" : he(M) ? "anchor" : M % 12 === w.tonic % 12 ? "answer" : "shape"
    };
  }), Q = R.map((M) => M.position.fret), j = { strings: [...new Set(R.map((M) => M.position.string))], min: Math.min(...Q), max: Math.max(...Q), fixed: "box" }, L = x ? ce ? `Nyt soi: ${c === "listen" ? x.mode.name : `${c === "which" ? "näyte" : "versio"} ${x.sample + 1} (${x.mode.name})`} · ${rs(x.midi, x.mode, w)}` : `Nyt soi: ${c === "which" ? "näyte" : "versio"} ${x.sample + 1}` : "Toonika soi hiljaisena urkupisteenä oktaavia alempana koko näytteen ajan.", oe = `${ye.name}: ${w.degree}. aste ${w.degreeNames[0]} (${w.intervalNames[0]}) · ${Ee.name}: ${w.degree}. aste ${w.degreeNames[1]} (${w.intervalNames[1]}).`, _ = v !== null && typeof v == "number" ? v === p.answer : null, se = v !== null && typeof v == "object" ? v.degree === y.answer.degree && v.direction === y.answer.direction : null;
  return /* @__PURE__ */ i.jsxs("section", { className: "scale-journey mode-compare", "aria-labelledby": "mode-compare-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
      F(), r();
    }, children: a }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · KUUNTELE" }),
    /* @__PURE__ */ i.jsx("h2", { id: "mode-compare-title", children: "Kuuntele moodien ero" }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Kaksi moodia samasta toonikasta, ero vain yhdessä sävelasteessa. Kuuntele, miltä ero kuulostaa, ja tunnista se sitten ilman nimiä." }),
    c !== "change" && /* @__PURE__ */ i.jsx("div", { className: "action-row", role: "group", "aria-label": "Vertailupari", children: Object.values(_i).map((M) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        "aria-pressed": o === M.id,
        onClick: () => ne(M.id),
        children: M.title
      },
      M.id
    )) }),
    /* @__PURE__ */ i.jsx("nav", { className: "journey-steps mode-compare-steps", "aria-label": "Moodivertailun harjoitukset", children: ak.map((M, V) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        type: "button",
        className: c === M.id ? "journey-step current" : "journey-step",
        "aria-current": c === M.id ? "step" : void 0,
        onClick: () => J(M.id),
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: V + 1 }),
          /* @__PURE__ */ i.jsx("span", { children: M.title })
        ]
      },
      M.id
    )) }),
    /* @__PURE__ */ i.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-compare-lesson", children: [
      c === "listen" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
          /* @__PURE__ */ i.jsx("h3", { id: "mode-compare-lesson", children: w.title }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Toonika ",
            w.tonicName
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "scale-fact", children: oe }),
        /* @__PURE__ */ i.jsx("p", { children: w.explanation }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "primary",
              "aria-pressed": b === "both",
              onClick: () => {
                A("both", [{ mode: ye, kind: "scale" }, { mode: Ee, kind: "scale" }]);
              },
              children: b === "both" ? "■ Pysäytä" : `▶ Asteikot peräkkäin: ${ye.name}, sitten ${Ee.name}`
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": b === "phrase",
              onClick: () => {
                A("phrase", [{ mode: ye, kind: "phrase" }, { mode: Ee, kind: "phrase" }]);
              },
              children: b === "phrase" ? "■ Pysäytä" : "▶ Sama fraasi molempina"
            }
          )
        ] })
      ] }),
      c === "which" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
          /* @__PURE__ */ i.jsxs("h3", { id: "mode-compare-lesson", children: [
            "Kumpi näyte oli ",
            p.asked.name,
            "?"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            w.title,
            P.total ? ` · ${P.right}/${P.total} oikein` : ""
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Kuuntele kaksi nimeämätöntä asteikkoa samasta toonikasta ",
          w.tonicName,
          ". Kuuntele erityisesti ",
          w.degree,
          ". astetta."
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "primary",
              "aria-pressed": b === "samples",
              onClick: () => {
                A("samples", [{ mode: p.order[0], kind: "scale" }, { mode: p.order[1], kind: "scale" }]);
              },
              children: b === "samples" ? "■ Pysäytä" : "▶ Kuuntele näytteet 1 ja 2"
            }
          ),
          [0, 1].map((M) => /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": b === `sample-${M}`,
              onClick: () => {
                A(`sample-${M}`, [{ mode: p.order[M], kind: "scale" }]);
              },
              children: b === `sample-${M}` ? "■ Pysäytä" : `▶ Näyte ${M + 1}`
            },
            M
          ))
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "answer-choices", role: "group", "aria-label": `Kumpi näyte oli ${p.asked.name}?`, children: [0, 1].map((M) => /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "button",
            disabled: v !== null,
            className: v === null ? "" : M === p.answer ? "right" : M === v ? "wrong" : "",
            onClick: () => xe(M),
            children: [
              "Näyte ",
              M + 1
            ]
          },
          M
        )) }),
        v !== null && /* @__PURE__ */ i.jsxs("p", { className: `feedback ${_ ? "good" : "bad"}`, role: "status", "data-testid": "mode-feedback", children: [
          _ ? "Oikein! " : "Ei aivan. ",
          "Näyte ",
          p.answer + 1,
          " oli ",
          p.asked.name,
          ". Näyte 1: ",
          p.order[0].name,
          " (",
          w.degree,
          ". aste ",
          rs(hi(w, p.order[0], w.degree), p.order[0], w),
          "), näyte 2: ",
          p.order[1].name,
          " (",
          w.degree,
          ". aste ",
          rs(hi(w, p.order[1], w.degree), p.order[1], w),
          "). ",
          w.explanation
        ] })
      ] }),
      c === "change" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
          /* @__PURE__ */ i.jsx("h3", { id: "mode-compare-lesson", children: "Mikä sävelaste muuttui?" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Toonika ",
            w.tonicName,
            P.total ? ` · ${P.right}/${P.total} oikein` : ""
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("p", { children: "Sama lyhyt fraasi soi kahdesti. Toisessa versiossa yksi sävelaste on eri. Mikä aste muuttui, ja nousiko vai laskiko se?" }),
        /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            "aria-pressed": b === "versions",
            onClick: () => {
              A("versions", [{ mode: y.first, kind: "phrase" }, { mode: y.second, kind: "phrase" }], y.pair);
            },
            children: b === "versions" ? "■ Pysäytä" : "▶ Kuuntele versiot 1 ja 2"
          }
        ) }),
        /* @__PURE__ */ i.jsx("div", { className: "answer-choices degree-choices", role: "group", "aria-label": "Mikä sävelaste muuttui?", children: rk.map((M) => {
          const V = M.degree === y.answer.degree && M.direction === y.answer.direction, X = typeof v == "object" && v !== null && v.degree === M.degree && v.direction === M.direction;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              disabled: v !== null,
              className: v === null ? "" : V ? "right" : X ? "wrong" : "",
              onClick: () => Z(M),
              children: Sh(M)
            },
            Sh(M)
          );
        }) }),
        v !== null && /* @__PURE__ */ i.jsxs("p", { className: `feedback ${se ? "good" : "bad"}`, role: "status", "data-testid": "mode-feedback", children: [
          se ? "Oikein! " : "Ei aivan. ",
          y.pair.title,
          ": versio 1 oli ",
          y.first.name,
          ", versio 2 ",
          y.second.name,
          ".",
          " ",
          y.answer.degree,
          ". aste ",
          y.answer.direction === "up" ? "nousi" : "laski",
          " puoli sävelaskelta:",
          " ",
          rs(hi(w, y.first, w.degree), y.first, w),
          " → ",
          rs(hi(w, y.second, w.degree), y.second, w),
          "."
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: L }),
      ce && c !== "listen" && /* @__PURE__ */ i.jsx("p", { className: "scale-fact", children: oe }),
      /* @__PURE__ */ i.jsx(
        bn,
        {
          area: j,
          marks: Y,
          disabled: !0,
          follow: "playing",
          playback: b,
          caption: `${w.title}: sävelet otelaudalla`
        }
      ),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: ce ? `Valkoreunaiset pisteet ovat eroavan ${w.degree}. asteen vaihtoehdot, vihreä on toonika ${w.tonicName}.` : "Eroava sävelaste näytetään otelaudalla vastauksen jälkeen." }),
      c !== "listen" && v !== null && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: me, children: "Uusi kysymys →" }) }),
      T && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: T })
    ] })
  ] });
}
function ck({ onBack: r }) {
  const [a, o] = E.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ i.jsx(Hv, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ i.jsx(Yv, { onBack: () => o(null) }) : a === "compare" ? /* @__PURE__ */ i.jsx(cf, { onBack: () => o(null), backLabel: "← Skaalat ja moodit" }) : /* @__PURE__ */ i.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT" }),
    /* @__PURE__ */ i.jsx("h2", { id: "scale-tracks-title", children: "Mitä haluat opetella?" }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen." }),
    /* @__PURE__ */ i.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("pentatonic"), children: [
        /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Pentatoniset" }),
          /* @__PURE__ */ i.jsx("span", { children: "A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi." }),
          /* @__PURE__ */ i.jsx("small", { children: "Jatka nykyistä harjoittelua" })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("modes"), children: [
        /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Moodit" }),
          /* @__PURE__ */ i.jsx("span", { children: "Opettele tunnistamaan sävelkeskus, soittamaan yksi oktaavi ja improvisoimaan." }),
          /* @__PURE__ */ i.jsx("small", { children: "Aloita C-joonisesta; seuraavaksi A-aiolinen" })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("compare"), children: [
        /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "03" }),
        /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Kuuntele moodien ero" }),
          /* @__PURE__ */ i.jsx("span", { children: "Sama toonika, yksi eri sävelaste: A-aiolinen ja A-doorinen, C-jooninen ja C-miksolyydinen." }),
          /* @__PURE__ */ i.jsx("small", { children: "Kuunteluharjoitus, ei tallennettua etenemistä" })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const as = [0, 2, 4, 5, 7, 9, 11], dk = 1200, Ca = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function hk({ onBack: r, children: a }) {
  const [o, d] = E.useState(0), [c, h] = E.useState([]), [p, m] = E.useState(!1), [y, $] = E.useState(""), [v, g] = E.useState(0), [P, D] = E.useState(!1), b = o >= as.length, N = as[Math.min(o, as.length - 1)], x = vs(Ca.strings, Ca.min, Ca.max).filter((A) => De(A.midi) === N), z = x.filter((A) => !c.includes(Ue(A))), T = z.length === 0 && !b, W = !T && p ? z[0] : void 0;
  E.useEffect(() => {
    if (!P || !T) return;
    const A = window.setTimeout(() => {
      d((ne) => ne + 1), h([]), m(!1), $("");
    }, dk);
    return () => window.clearTimeout(A);
  }, [P, T]);
  const H = [
    ...x.filter((A) => c.includes(Ue(A))).map((A) => ({ ...A, kind: "answer", label: Ae(A.midi) })),
    ...W ? [{ ...W, kind: "anchor", label: "?" }] : []
  ];
  function G(A) {
    if (b || T) return;
    const ne = Ue(A);
    if (De(A.midi) !== N) {
      g((xe) => xe + 1), $(`Valitsit sävelen ${Ae(A.midi)}. Etsi ${Ae(N)}.`);
      return;
    }
    if (c.includes(ne)) {
      $("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const J = [...c, ne];
    h(J), m(!1);
    const me = x.length - J.length;
    $(me ? `Oikein! ${Ae(N)} löytyi ${ft[A.string]}-kieleltä (${Vt(A.fret)}). Vielä ${me}.` : `Löysit kaikki ${x.length} ${Ae(N)}-säveltä tällä alueella.`);
  }
  function w() {
    T && (d((A) => A + 1), h([]), m(!1), $(""));
  }
  function F() {
    d(0), h([]), m(!1), $(""), g(0);
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ i.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ i.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ i.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen on tämän harjoituksen alla." }),
    !b && /* @__PURE__ */ i.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          checked: P,
          onChange: (A) => D(A.target.checked)
        }
      ),
      /* @__PURE__ */ i.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "journey-lesson", children: b ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        v ? `Vääriä valintoja yhteensä ${v}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: F, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsxs("h3", { children: [
          "Etsi kaikki ",
          Ae(N),
          "-sävelet"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "Sävel ",
          o + 1,
          " / ",
          as.length
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Ae(N),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ i.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        x.length
      ] }),
      /* @__PURE__ */ i.jsx(
        bn,
        {
          area: Ca,
          marks: H,
          onAnswer: G,
          disabled: T,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "p",
        {
          className: T ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: y
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
        !T && /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": p,
            onClick: () => m((A) => !A),
            children: p ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        T && (P ? /* @__PURE__ */ i.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          o === as.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: w, children: o === as.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    a
  ] });
}
const Ti = (r) => Ae(r, !1, !0);
function fk({ onBack: r, backLabel: a }) {
  const [o, d] = E.useState(0), [c, h] = E.useState("learn"), [p, m] = E.useState([]), [y, $] = E.useState(0), [v, g] = E.useState(null), [P, D] = E.useState([]), [b, N] = E.useState(null), [x, z] = E.useState(null), [T, W] = E.useState(""), H = E.useRef(new $i()), G = E.useRef(0), w = di[Math.min(o, di.length - 1)], F = uf(w), A = p[y], ne = Ie.OPEN_PITCHES[w];
  function J() {
    G.current++, H.current.stop(), N(null), z(null);
  }
  E.useEffect(() => {
    const _ = () => {
      document.hidden && J();
    };
    return document.addEventListener("visibilitychange", _), () => {
      document.removeEventListener("visibilitychange", _), G.current++, H.current.stop();
    };
  }, []);
  async function me(_, se) {
    if (b === _) {
      J();
      return;
    }
    const M = ++G.current;
    W(""), z(null), N(_);
    try {
      await H.current.play(se, (V) => {
        M === G.current && z(V);
      });
    } catch (V) {
      M === G.current && W(ks(V));
    } finally {
      M === G.current && (N(null), z(null));
    }
  }
  function xe() {
    J();
    const _ = Xv(w);
    m(_), $(0), g(null), h("quiz"), me("question", [_[0].midi]);
  }
  function Z(_) {
    c !== "quiz" || v || !A || (J(), g(_), D((se) => [...se, { string: w, asked: A, chosen: _, correct: _.fret === A.fret }]));
  }
  function ce() {
    if (y + 1 >= p.length) {
      J(), h("string-done");
      return;
    }
    $(y + 1), g(null), me("question", [p[y + 1].midi]);
  }
  function ye(_) {
    J(), d(_), h("learn"), m([]), g(null);
  }
  function Ee() {
    if (o + 1 >= di.length) {
      J(), h("finished");
      return;
    }
    ye(o + 1);
  }
  function he() {
    D([]), ye(0);
  }
  const Y = P.filter((_) => _.string === w).slice(-rr), Q = v && A ? v.fret === A.fret : null, j = b === "scale" && x !== null ? F[x] : null, L = c === "learn" ? F.map((_) => ({
    ..._,
    label: Ae(_.midi),
    kind: j?.fret === _.fret ? "playing" : "shape"
  })) : c === "quiz" && v && A ? [
    { ...A, kind: "answer", label: Ae(A.midi) },
    ...Q ? [] : [{ ...v, kind: "wrong", label: Ae(v.midi) }]
  ] : [], oe = di.map((_) => {
    const se = P.filter((M) => M.string === _).slice(-rr);
    return { string: _, right: se.filter((M) => M.correct).length, total: se.length };
  });
  return /* @__PURE__ */ i.jsxs("section", { className: "note-journey ear-locate", "aria-labelledby": "ear-locate-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
      J(), r();
    }, children: a }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · KUUNTELE" }),
    /* @__PURE__ */ i.jsx("h2", { id: "ear-locate-title", children: "Kuuntele ja paikanna sävel" }),
    /* @__PURE__ */ i.jsxs("p", { className: "learning-lead", children: [
      "Kuuntele ensin kielen tutut sävelet ja vastaa sitten korvakuulolta, millä nauhalla kuulemasi sävel soi. Kolme ohuinta kieltä, nauhat ",
      us,
      "–",
      sr,
      ", aluksi vain luonnolliset sävelet."
    ] }),
    /* @__PURE__ */ i.jsx("nav", { className: "journey-steps ear-strings", "aria-label": "Kielet", children: di.map((_, se) => {
      const M = oe[se].total >= rr;
      return /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: se === o && c !== "finished" ? "journey-step current" : "journey-step",
          "aria-current": se === o && c !== "finished" ? "step" : void 0,
          onClick: () => ye(se),
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: M ? "✓" : se + 1 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              ft[_],
              "-kieli",
              M ? ` · ${oe[se].right}/${oe[se].total}` : ""
            ] })
          ]
        },
        _
      );
    }) }),
    /* @__PURE__ */ i.jsxs("section", { className: "journey-lesson", "aria-labelledby": "ear-lesson-title", children: [
      c === "learn" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
          /* @__PURE__ */ i.jsxs("h3", { id: "ear-lesson-title", children: [
            ft[w],
            "-kieli: tutustu säveliin"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Kieli ",
            o + 1,
            " / ",
            di.length
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Kuuntele ",
          Rh[w],
          " luonnolliset sävelet alhaalta ylös: ",
          F.map((_) => `${Ti(_.midi)} (${Vt(_.fret)})`).join(", "),
          ". Juuri soiva paikka korostuu otelaudalla. Toista niin monta kertaa kuin haluat."
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": b === "scale", onClick: () => {
          me("scale", F.map((_) => _.midi));
        }, children: b === "scale" ? "■ Pysäytä" : "▶ Kuuntele kielen sävelet" }) }),
        /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: j ? `Nyt soi: ${Ti(j.midi)} · ${ft[w]}-kieli, ${Vt(j.fret)}.` : "Sävelet soivat kerran nousevassa järjestyksessä." })
      ] }),
      c === "quiz" && A && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
          /* @__PURE__ */ i.jsxs("h3", { id: "ear-lesson-title", children: [
            "Kysymys ",
            y + 1,
            " / ",
            p.length
          ] }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            ft[w],
            "-kieli"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Kuuntele sävel ja napauta, millä ",
          $a[w],
          " nauhalla ",
          us,
          "–",
          sr,
          " se soi. Kaikki kysytyt sävelet ovat luonnollisia säveliä tältä kieleltä."
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: () => {
            me("question", [A.midi]);
          }, children: b === "question" ? "■ Pysäytä" : "▶ Kuuntele uudelleen" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
            me("reference", [ne]);
          }, children: b === "reference" ? "■ Pysäytä" : `▶ Vertailusävel: vapaa kieli (${Ti(ne)})` })
        ] })
      ] }),
      (c === "learn" || c === "quiz") && /* @__PURE__ */ i.jsx(
        bn,
        {
          area: { strings: [w], min: us, max: sr, fixed: "" },
          marks: L,
          disabled: c !== "quiz" || !!v,
          onAnswer: c === "quiz" ? Z : void 0,
          follow: c === "learn" ? "playing" : "hints",
          playback: b,
          caption: `${ft[w]}-kieli, nauhat ${us}–${sr}`
        }
      ),
      c === "quiz" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("p", { className: `feedback ${Q === null ? "" : Q ? "good" : "bad"}`, role: "status", "aria-live": "polite", "data-testid": "ear-feedback", children: v && A ? Q ? `Oikein! ${Ti(A.midi)} soi ${$a[w]}, ${Vt(A.fret)}.` : `Ei aivan. Valitsit ${Vt(v.fret)} (${Ti(v.midi)}). Kuulemasi sävel oli ${Ti(A.midi)}: ${Vt(A.fret)}.` : "Vastaa napauttamalla nauhaa. Oikea paikka näytetään vasta vastauksen jälkeen." }),
        v && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: ce, children: y + 1 >= p.length ? "Näytä kielen tulos →" : "Seuraava kysymys →" }) })
      ] }),
      c === "learn" && /* @__PURE__ */ i.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Kun sävelet ovat tuttuja, kokeile tunnistaa ne korvakuulolta. Testissä on ",
          rr,
          " kysymystä."
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: xe, children: "Aloita kuuntelutesti →" })
      ] }),
      c === "string-done" && /* @__PURE__ */ i.jsxs("div", { className: "round-summary", role: "status", children: [
        /* @__PURE__ */ i.jsxs("h3", { id: "ear-lesson-title", children: [
          ft[w],
          "-kieli: ",
          Y.filter((_) => _.correct).length,
          " / ",
          Y.length,
          " oikein"
        ] }),
        /* @__PURE__ */ i.jsx("ul", { className: "ear-results", children: Y.map((_, se) => /* @__PURE__ */ i.jsxs("li", { className: _.correct ? "good" : "bad", children: [
          Ti(_.asked.midi),
          " · ",
          Vt(_.asked.fret),
          " — ",
          _.correct ? "oikein" : `vastasit ${Vt(_.chosen.fret)}`
        ] }, se)) }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: xe, children: "Uusi testi tällä kielellä" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: Ee, children: o + 1 >= di.length ? "Yhteenveto →" : `Seuraava kieli: ${ft[di[o + 1]]} →` })
        ] })
      ] }),
      c === "finished" && /* @__PURE__ */ i.jsxs("div", { className: "round-summary", role: "status", children: [
        /* @__PURE__ */ i.jsx("h3", { id: "ear-lesson-title", children: "Yhteenveto" }),
        /* @__PURE__ */ i.jsx("dl", { children: oe.map((_) => /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsxs("dt", { children: [
            ft[_.string],
            "-kieli"
          ] }),
          /* @__PURE__ */ i.jsx("dd", { children: _.total ? `${_.right} / ${_.total}` : "–" })
        ] }, _.string)) }),
        /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Sama sävelkorkeus voi soida myös toisella kielellä (esimerkiksi C4 on G-kielen 5. ja B-kielen 1. nauha), joten kysymys koskee aina valittua kieltä." }),
        /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: he, children: "Harjoittele uudelleen" }) })
      ] }),
      T && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: T })
    ] })
  ] });
}
function mk({ onBack: r }) {
  const [a, o] = E.useState("notes"), d = () => o("notes");
  return a === "locate" ? /* @__PURE__ */ i.jsx(fk, { onBack: d, backLabel: "← Sävelkorva ja otelauta" }) : a === "modes" ? /* @__PURE__ */ i.jsx(cf, { onBack: d, backLabel: "← Sävelkorva ja otelauta" }) : /* @__PURE__ */ i.jsx(hk, { onBack: r, children: /* @__PURE__ */ i.jsxs("div", { className: "journey-below ear-more", children: [
    /* @__PURE__ */ i.jsx("h3", { children: "Kuuntele korvalla" }),
    /* @__PURE__ */ i.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("locate"), children: [
        /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Kuuntele ja paikanna sävel" }),
          /* @__PURE__ */ i.jsx("span", { children: "Kuule sävel ja napauta, millä nauhalla se soi. Ohut e-, B- ja G-kieli, nauhat 0–5." })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("modes"), children: [
        /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "03" }),
        /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Kuuntele moodien ero" }),
          /* @__PURE__ */ i.jsx("span", { children: "A-aiolinen ja A-doorinen, C-jooninen ja C-miksolyydinen: sama toonika, yksi eri sävelaste." }),
          /* @__PURE__ */ i.jsx("small", { children: "Sama harjoitus löytyy myös Skaalat ja moodit -polulta" })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] }) });
}
const pk = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Oo = ["C", "G", "D", "Em"], wh = ["C", "G", "D", "Em", "Am", "E", "A"], vk = { min: 0, max: 3, fixed: "" };
function Nh(r) {
  const a = [...r];
  for (let o = a.length - 1; o > 0; o--) {
    const d = Math.floor(Math.random() * (o + 1));
    [a[o], a[d]] = [a[d], a[o]];
  }
  return a;
}
function kk({ onBack: r }) {
  const [a, o] = E.useState(4), [d, c] = E.useState(() => Nh(Oo)), [h, p] = E.useState(0), [m, y] = E.useState(null), [$, v] = E.useState([]), [g, P] = E.useState(0), D = h >= d.length, b = pk[d[Math.min(h, d.length - 1)]], N = a === 4 ? Oo : wh, x = b.frets.flatMap((F, A) => F === null ? [] : [A]), z = b.frets.flatMap((F, A) => F === null ? [A] : []), T = { ...vk, strings: x }, W = b.frets.flatMap((F, A) => F === null ? [] : [{
    ...Ne(A, F),
    kind: F === 0 ? "anchor" : "shape",
    label: F === 0 ? "○" : "●"
  }]);
  function H(F = a) {
    o(F), c(Nh(F === 4 ? Oo : wh)), p(0), y(null), v([]), P(0);
  }
  function G(F) {
    m || D || $.includes(F) || (F === b.name ? y(F) : (v((A) => [...A, F]), P((A) => A + 1)));
  }
  function w() {
    m && (p((F) => F + 1), y(null), v([]));
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SOINNUT JA MUSIIKIN RAKENNE · VAIHE 1" }),
    /* @__PURE__ */ i.jsx("h2", { id: "chord-journey-title", children: "Tunnista avoin sointu" }),
    /* @__PURE__ */ i.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ i.jsx("a", { href: "book/osa-6.html#caged", children: "Lue tämän harjoituksen teoria: Avoimet sointumuodot →" }) }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Katso otelaudalla näkyvää avointa sointuotetta ja valitse oikea soinnun nimi. Tässä harjoituksessa ei tarvitse kuunnella tai soittaa." }),
    /* @__PURE__ */ i.jsxs("fieldset", { className: "chord-difficulty", children: [
      /* @__PURE__ */ i.jsx("legend", { children: "Tunnistettavat soinnut" }),
      /* @__PURE__ */ i.jsxs("label", { children: [
        /* @__PURE__ */ i.jsx(
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
      /* @__PURE__ */ i.jsxs("label", { children: [
        /* @__PURE__ */ i.jsx(
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
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "journey-lesson", children: D ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        g ? `Vääriä valintoja yhteensä ${g}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: () => H(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "Sointu ",
          h + 1,
          " / ",
          d.length
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ i.jsx(
        bn,
        {
          area: T,
          marks: W,
          mutedStrings: z,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ i.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: N.map((F) => /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: m === F ? "right" : $.includes(F) ? "wrong" : "",
          disabled: !!m || $.includes(F),
          "aria-pressed": m === F,
          onClick: () => G(F),
          children: F
        },
        F
      )) }),
      /* @__PURE__ */ i.jsx(
        "p",
        {
          className: m ? "feedback good" : $.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${b.name}-sointu.` : $.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: w, children: h === d.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ge = (r, a) => ({ first: r, ...a ? { second: a } : {} }), hs = () => [
  ge("Gm", "F"),
  ge("Gm"),
  ge("B♭", "F"),
  ge("Gm"),
  ge("Gm", "F"),
  ge("Gm"),
  ge("E♭", "F"),
  ge("Gm")
], fs = () => [
  ge("B♭", "F"),
  ge("Gm", "Dm"),
  ge("E♭", "F"),
  ge("Gm", "Dm")
], ms = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], df = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], yk = [
  { id: "intro", title: "Intro", start: 0, bars: [ge("Gm", "F"), ge("Gm"), ge("B♭", "F"), ge("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: hs(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...fs(), ge("E♭"), { ...ge("E♭"), passingBass: "F" }],
    lyrics: ms,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ge("Gm", "F"), ge("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: hs(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...fs(), ge("E♭"), ge("F")],
    lyrics: ms
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [ge("Gm"), ge("Dm"), ge("F"), ge("C"), ge("Gm"), ge("Dm"), ge("E♭"), ge("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: hs(),
    lyrics: df
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...fs(), ge("E♭", "F"), ge("Gm")],
    lyrics: ms
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      ge("E♭", "F"),
      { ...ge("Gm"), possibleChord: "Dm" },
      ge("E♭", "F"),
      ge("Gm", "F"),
      { ...ge("Gm"), possibleChord: "Dm" },
      ge("Gm", "F"),
      ge("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], gk = [
  { id: "intro", title: "Intro", start: 0, bars: [ge("Gm", "F"), ge("Gm"), ge("B♭", "F"), ge("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: hs(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...fs(), ge("E♭"), ge("E♭")],
    lyrics: ms
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: hs(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...fs(), ge("E♭"), ge("F")],
    lyrics: ms
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [ge("Gm"), ge("Dm"), ge("F"), ge("C"), ge("Gm"), ge("Dm"), ge("E♭"), ge("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: hs(),
    lyrics: df
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...fs(), ge("B♭", "F"), ge("Gm"), ge("E♭", "F"), ge("Gm")],
    lyrics: ms
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ge("E♭", "F"), ge("Gm", "F"), ge("E♭", "F"), ge("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ys = {
  acoustic: yk,
  normal: gk
}, jk = "normal", Yo = "yksi-sointu-kaksi-askelta", ru = {
  acoustic: Yo + "-akustinen",
  normal: Yo + "-normaali"
}, hf = (r) => r === Yo || Object.values(ru).includes(r ?? "");
function xk(r) {
  const a = Object.entries(ru).find(([, o]) => o === r);
  return a ? a[0] : null;
}
const Sk = (r) => ru[r], Eh = (r) => {
  const a = Math.max(0, Math.floor(Number.isFinite(r) ? r : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function au(r, a = "acoustic") {
  const o = ys[a], d = o[r], c = o[r + 1];
  return c ? (c.start - d.start) / d.bars.length : 240 / 69;
}
function ff(r, a = "acoustic") {
  const o = ys[a], d = Math.max(0, Number.isFinite(r) ? r : 0);
  let c = 0;
  for (let g = 1; g < o.length && !(d < o[g].start); g++)
    c = g;
  const h = o[c];
  let p = 0;
  for (; p + 1 < h.bars.length && d >= fr(c, p + 1, a); )
    p++;
  const m = fr(c, p, a), y = au(c, a) / 4;
  let $ = 1;
  for (; $ < 4 && d >= m + $ * y; ) $++;
  const v = h.bars[p];
  return {
    section: h,
    sectionIndex: c,
    barIndex: p,
    beat: $,
    chord: v.second && $ >= 3 ? v.second : v.first
  };
}
function fr(r, a, o = "acoustic") {
  return ys[o][r].start + au(r, o) * a;
}
function wk(r) {
  return ys[r].flatMap((a, o) => a.bars.flatMap((d, c) => {
    const h = fr(o, c, r), p = { section: a, sectionIndex: o, barIndex: c, part: "first", chord: d.first, time: h };
    if (!d.second) return [p];
    const m = au(o, r) / 2;
    return [p, { ...p, part: "second", chord: d.second, time: h + m }];
  }));
}
function Nk(r, a = "acoustic", o = !1) {
  const d = ys[a], c = ff(r, a), h = c.section.bars[c.barIndex], p = c.beat >= 3 && h.second ? "second" : "first", m = wk(a), y = m.findIndex((D) => D.sectionIndex === c.sectionIndex && D.barIndex === c.barIndex && D.part === p), v = [
    ...m.slice(y + 1).map((D) => ({ ...D, wrapped: !1 })),
    ...o ? m.slice(0, y + 1).map((D) => ({ ...D, wrapped: !0 })) : []
  ].find((D) => D.chord !== c.chord) ?? null;
  let g = null;
  const P = c.sectionIndex === d.length - 1;
  if (c.barIndex === c.section.bars.length - 1 && (!P || o)) {
    const D = P ? 0 : c.sectionIndex + 1, b = d[D], N = b.bars[0].first;
    g = {
      section: b,
      sectionIndex: D,
      firstChord: N,
      wrapped: P,
      continues: N === (h.second ?? h.first)
    };
  }
  return { nextChord: v, nextSection: g };
}
function Ek(r) {
  const a = r.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), d = a.reduce((m, y) => m + o(y), 0);
  let c = 0, h = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const y = Math.abs(d - 2 * p);
    (y < h || y === h && p >= d - p) && (c = m, h = y), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, c), a.slice(c)];
}
const Jo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], mf = "musiikin-kartta:kappale-sointuvihjeet:v1", Pa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Ch = {
  showChords: !0,
  level: 0,
  fadeOrder: Pa
};
function ba(r, a) {
  return !a.showChords || a.level >= a.fadeOrder[r];
}
function bh(r) {
  if (!r) return { ...Ch, fadeOrder: { ...Pa } };
  try {
    const a = JSON.parse(r);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const o = a, d = o.level, c = { ...Pa }, h = o.fadeOrder;
    if (h && typeof h == "object") {
      const p = h;
      for (const m of Jo)
        [1, 2, 3, 4].includes(p[m]) && (c[m] = p[m]);
    }
    return {
      showChords: typeof o.showChords == "boolean" ? o.showChords : !0,
      level: typeof d == "number" && [0, 1, 2, 3, 4].includes(d) ? d : 0,
      fadeOrder: c
    };
  } catch {
    return { ...Ch, fadeOrder: { ...Pa } };
  }
}
function Ck() {
  try {
    return bh(localStorage.getItem(mf));
  } catch {
    return bh(null);
  }
}
const bk = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Mk(r) {
  const a = bk.exec(r.trim());
  if (!a) return r;
  const [, o, , d = "", c = ""] = a;
  return o + "5" + d + c;
}
const Tk = (r, a) => a === "power" ? Mk(r) : r, _k = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Ak = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Pk({ version: r, position: a, loop: o = !1, onSeek: d }) {
  const [c, h] = E.useState(Ck), [p, m] = E.useState(null), [y, $] = E.useState(!1), [v, g] = E.useState(() => typeof matchMedia != "function" || matchMedia("(min-width: 701px)").matches), [P, D] = E.useState("full"), b = (R) => Tk(R, P), N = ys[r], x = ff(a, r), { section: z, sectionIndex: T, barIndex: W, beat: H, chord: G } = x, w = H >= 3 && z.bars[W].second ? "second" : "first", F = (R, Y, Q) => `${r}:${R}:${Y}:${Q}`, A = (R, Y) => F(z.id, R, Y), ne = A(W, w), J = ba(G, c), me = J && p === ne, xe = (R, Y, Q) => !ba(R, c) || p === A(Y, Q), Z = c.showChords && c.level === 0, ce = Jo.filter((R) => ba(R, c)).length, ye = c.showChords ? c.level === 0 ? "Kaikki soinnut näkyvät" : `Taso ${c.level} · piilossa ${ce}/6` : "Soinnut piilossa", { nextSection: Ee } = Nk(a, r, o), he = !!Ee && ba(Ee.firstChord, c);
  return E.useEffect(() => {
    m(null);
  }, [ne]), E.useEffect(() => {
    try {
      localStorage.setItem(mf, JSON.stringify(c));
    } catch {
    }
  }, [c]), /* @__PURE__ */ i.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ i.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        c.showChords && c.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ i.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ i.jsx(
          "select",
          {
            id: "song-section-jump",
            value: z.id,
            onChange: (R) => {
              const Y = N.find((Q) => Q.id === R.target.value);
              Y && d(Y.start);
            },
            children: N.map((R) => /* @__PURE__ */ i.jsxs("option", { value: R.id, children: [
              Eh(R.start),
              " · ",
              R.title
            ] }, R.id))
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ i.jsxs("p", { className: "song-current-chord", children: [
          J && !me ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ i.jsx("strong", { children: J && !me ? "?" : b(G) }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            z.title,
            ", tahti ",
            W + 1,
            ", isku ",
            H,
            "/4"
          ] }),
          J && /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(me ? null : ne),
              children: me ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        Ee && /* @__PURE__ */ i.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ i.jsx("strong", { children: he ? "?" : b(Ee.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": z.title + ": tahdit", children: z.bars.map((R, Y) => {
      const Q = Y === W, j = Q && (H < 3 || !R.second), L = Q && H >= 3 && !!R.second, oe = xe(R.first, Y, "first"), _ = R.second ? xe(R.second, Y, "second") : !1, se = (oe ? b(R.first) : "sointu piilossa") + (R.second ? " " + (_ ? b(R.second) : "sointu piilossa") : "") + (Z && R.passingBass ? " (basson kulku " + R.passingBass + ")" : "") + (Z && R.possibleChord ? " (" + b(R.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (Q ? " active" : ""),
          "aria-pressed": Q,
          "aria-label": "Tahti " + (Y + 1) + ": " + se + ". Siirry kohtaan " + Eh(fr(T, Y, r)),
          onClick: () => d(fr(T, Y, r)),
          children: [
            /* @__PURE__ */ i.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              Y + 1
            ] }),
            /* @__PURE__ */ i.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ i.jsx("strong", { className: j && oe ? "now" : "", children: oe ? b(R.first) : "?" }),
              R.second && /* @__PURE__ */ i.jsx("strong", { className: L && _ ? "now" : "", children: _ ? b(R.second) : "?" })
            ] }),
            Z && R.passingBass && /* @__PURE__ */ i.jsxs("small", { children: [
              "Basso: (",
              R.passingBass,
              "), isku 4"
            ] }),
            Z && R.possibleChord && /* @__PURE__ */ i.jsxs("small", { children: [
              "Mahdollinen (",
              b(R.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        Y
      );
    }) }),
    /* @__PURE__ */ i.jsxs("details", { className: "song-chart-settings", open: v, children: [
      /* @__PURE__ */ i.jsxs("summary", { onClick: (R) => {
        R.preventDefault(), g((Y) => !Y);
      }, children: [
        "Harjoituskartan asetukset",
        /* @__PURE__ */ i.jsx("span", { className: "song-chart-settings-state", children: ye })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
        /* @__PURE__ */ i.jsxs("label", { className: "song-hints-toggle", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: c.showChords,
              onChange: (R) => {
                h((Y) => ({ ...Y, showChords: R.target.checked })), m(null);
              }
            }
          ),
          "Näytä soinnut"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { className: "song-hints-toggle", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: y,
              onChange: (R) => $(R.target.checked)
            }
          ),
          "Näytä koko sanoitus"
        ] }),
        /* @__PURE__ */ i.jsxs("fieldset", { className: "song-chord-display", children: [
          /* @__PURE__ */ i.jsx("legend", { children: "Sointumerkinnät" }),
          [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([R, Y]) => /* @__PURE__ */ i.jsxs("label", { children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "radio",
                name: "song-chord-display",
                value: R,
                checked: P === R,
                onChange: () => D(R)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: Y })
          ] }, R))
        ] }),
        /* @__PURE__ */ i.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
          "Harjoitustaso",
          /* @__PURE__ */ i.jsx(
            "select",
            {
              id: "song-hint-level",
              value: c.level,
              disabled: !c.showChords,
              onChange: (R) => {
                const Y = Number(R.target.value);
                h((Q) => ({ ...Q, level: Y })), m(null);
              },
              children: _k.map((R) => /* @__PURE__ */ i.jsx("option", { value: R.value, children: R.label }, R.value))
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: ce === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${ce}/6 sointua` })
      ] }),
      c.showChords && c.level < 4 && /* @__PURE__ */ i.jsxs("details", { className: "song-fade-customize", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
        /* @__PURE__ */ i.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
        /* @__PURE__ */ i.jsx("div", { className: "song-fade-order", children: Jo.map((R) => /* @__PURE__ */ i.jsxs("label", { children: [
          R,
          /* @__PURE__ */ i.jsx(
            "select",
            {
              "aria-label": R + ": piilotusvaihe",
              value: c.fadeOrder[R],
              onChange: (Y) => {
                const Q = Number(Y.target.value);
                h((j) => ({ ...j, fadeOrder: { ...j.fadeOrder, [R]: Q } })), m(null);
              },
              children: Ak.map((Y) => /* @__PURE__ */ i.jsx("option", { value: Y.value, children: Y.label }, Y.value))
            }
          )
        ] }, R)) })
      ] })
    ] }),
    y ? /* @__PURE__ */ i.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ i.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ i.jsx("div", { className: "song-all-lyrics-grid", children: Ek(N).map((R, Y) => /* @__PURE__ */ i.jsx("div", { className: "song-lyrics-column", children: R.map((Q) => /* @__PURE__ */ i.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ i.jsx("h5", { children: Q.title }),
        Q.lyrics?.map((j, L) => /* @__PURE__ */ i.jsx("p", { children: j }, L))
      ] }, Q.id)) }, Y)) }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : z.lyrics && /* @__PURE__ */ i.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ i.jsxs("h4", { children: [
        z.title,
        ": sanat"
      ] }),
      z.lyrics.map((R, Y) => /* @__PURE__ */ i.jsx("p", { children: R }, Y))
    ] }),
    Z && z.note && /* @__PURE__ */ i.jsx("p", { className: "song-chord-note", children: z.note })
  ] });
}
const Ia = 7, Lk = { name: "bluesasteikko", base: Ie.SCALES.mp.base, add: [[6, "♭5"]] }, Fo = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: Ie.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: Lk,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: Ie.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function $k(r) {
  return Ie.scaleNotes(r).map(([a, o]) => Ie.noteName(Ia, a, o));
}
const pf = (r) => r === "pentatonic" ? 5 : 7;
function Rk(r, a, o) {
  const d = a.filter((m) => m >= 1 && m <= pf(r.system)), c = Ie.fingeringBoxes(Ia, r.scale, r.system, d, o);
  if (r.id !== "blues") return c;
  const h = r.scale.add.map(([m]) => (Ia + m) % 12), p = (m, y) => y >= 0 && y <= o && h.includes((Ie.OPEN_PITCHES[m] + y) % 12);
  return c.map((m) => ({ ...m, positions: m.positions.map((y) => {
    const $ = y.strings.map((g, P) => {
      if (!g.length) return g;
      const D = g[g.length - 1];
      return p(P, D + 1) ? [...g.slice(0, -1), D + 1] : g;
    }), v = $.flat();
    return { ...y, strings: $, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const Mh = 17;
function Ok({ open: r }) {
  const [a, o] = E.useState("mp"), [d, c] = E.useState({ pentatonic: [], "3nps": [] }), [h, p] = E.useState(!1), [m, y] = E.useState(!1), $ = E.useRef(null), v = Fo.find((x) => x.id === a) ?? Fo[0], g = d[v.system], P = Rk(v, g, Mh), D = P.some((x) => x.positions.length > 0), b = Ie.renderBoard(Ia, v.scale, Mh, {
    automatic: !0,
    boxes: P,
    onlyBoxNotes: D && h,
    label: v.title + (g.length ? ", " + g.map((x) => "boksi " + x).join(", ") : "")
  });
  E.useEffect(() => {
    const x = $.current;
    !x || !r || P.length === 1 && Ie.revealPositions(x, ".box-highlight");
  }, [b, r]);
  function N(x, z) {
    c((T) => ({ ...T, [v.system]: z ? [...T[v.system], x].sort((W, H) => W - H) : T[v.system].filter((W) => W !== x) }));
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ i.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ i.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ i.jsx("select", { value: a, onChange: (x) => o(x.target.value), children: Fo.map((x) => /* @__PURE__ */ i.jsx("option", { value: x.id, children: x.title }, x.id)) })
    ] }) }),
    /* @__PURE__ */ i.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ i.jsx("strong", { children: v.title }),
      /* @__PURE__ */ i.jsx("span", { children: $k(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: $,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: b }
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "legend", children: [
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "swatch", style: { background: "#4b2fd6", border: "2px solid #fff" } }),
        "Juurisävel G (1)"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "swatch", style: { background: "#6d4aff" } }),
        "Asteikon sävel"
      ] }),
      v.scale.add.length > 0 && /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        v.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("details", { className: "song-box-settings", open: m, children: [
      /* @__PURE__ */ i.jsx("summary", { onClick: (x) => {
        x.preventDefault(), y((z) => !z);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ i.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ i.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: pf(v.system) }, (x, z) => z + 1).map((x) => /* @__PURE__ */ i.jsxs("label", { className: "box-toggle", "data-box": x, children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "checkbox",
            value: x,
            checked: g.includes(x),
            onChange: (z) => N(x, z.target.checked)
          }
        ),
        " Boksi ",
        x
      ] }, v.system + x)) }),
      /* @__PURE__ */ i.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "checkbox",
            checked: D && h,
            disabled: !D,
            onChange: (x) => p(x.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: D ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let vf = null;
function Fk() {
  return xk(new URLSearchParams(location.search).get("kappale")) ?? vf ?? jk;
}
function Ik(r) {
  vf = r;
  const a = new URL(location.href);
  hf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", Sk(r)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const Dk = {
  acoustic: {
    label: "Akustinen versio",
    length: "3:53",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-laulu.mp3",
    // Valmis kokonainen MP3 sellaisenaan, ei soittimen raitojen miksausta.
    download: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kokonainen.mp3",
    downloadSize: "5,3 Mt"
  },
  normal: {
    label: "Normaali versio",
    length: "3:32",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-laulu.mp3",
    // Valmis kokonainen MP3 sellaisenaan, ei soittimen raitojen miksausta.
    download: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kokonainen.mp3",
    downloadSize: "4,9 Mt"
  }
}, Th = 1e-3;
function _h(r, a) {
  try {
    r.currentTime = a;
  } catch {
  }
}
function Ah(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function zk({ onBack: r }) {
  const a = E.useRef(null), o = E.useRef(null), d = E.useRef(null), c = E.useRef(0), h = E.useRef(new Xh()), p = E.useRef(null), [m, y] = E.useState(Fk), $ = Dk[m], [v, g] = E.useState(!1), [P, D] = E.useState(!0), [b, N] = E.useState(!0), [x, z] = E.useState(!1), [T, W] = E.useState(!1), [H, G] = E.useState(!1), [w, F] = E.useState(Jp), [A] = E.useState(() => ov()), ne = E.useRef(null), [J, me] = E.useState(""), [xe, Z] = E.useState(0), [ce, ye] = E.useState(0), [Ee, he] = E.useState("");
  function R(K = !1, re) {
    const ae = a.current;
    if (ae)
      for (const de of [o.current, d.current])
        de && (!re || de === re) && h.current.align(ae, de, K);
  }
  function Y() {
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, P],
      ["vocals", d.current, b]
    ];
  }
  function Q(K = w, re) {
    for (const [ae, de, Ce] of Y()) {
      if (!de) continue;
      const we = Xd(ae, K, re?.[ae] ?? Ce);
      if (A === "webaudio" && ne.current?.routed(de))
        ne.current.setLevel(de, we);
      else
        try {
          de.volume = Xd(ae, K);
        } catch {
        }
    }
  }
  function j(K) {
    F(K), Xp(K), Q(K);
  }
  function L() {
    c.current++, a.current?.pause(), o.current?.pause(), d.current?.pause(), g(!1);
  }
  function oe(K) {
    if (K !== m) {
      p.current = null, L();
      for (const re of [a.current, o.current, d.current])
        if (re)
          try {
            re.currentTime = 0;
          } catch {
          }
      Z(0), ye(0), he(""), y(K), Ik(K);
    }
  }
  function _(K) {
    const re = a.current;
    if (!re || !Number.isFinite(K)) return;
    const ae = Math.max(0, Math.min(K, Number.isFinite(re.duration) ? re.duration : K));
    p.current = ae, Z(ae), _h(re, ae);
  }
  function se(K) {
    const re = p.current;
    if (re === null || K !== a.current || K.seeking) return;
    const ae = Number.isFinite(K.duration) ? Math.min(re, K.duration) : re;
    if (ae !== re && (p.current = ae, Z(ae)), Math.abs(K.currentTime - ae) < Th) return;
    const de = K.seekable;
    for (let Ce = 0; Ce < de.length; Ce++)
      if (de.start(Ce) <= ae && ae <= de.end(Ce)) {
        _h(K, ae);
        return;
      }
  }
  function M(K) {
    if (K !== a.current) return;
    const re = p.current;
    if (re === null)
      Z(K.currentTime);
    else if (K.readyState >= 1 && !K.seeking && Math.abs(K.currentTime - re) < Th) {
      p.current = null, R(!0);
      return;
    }
    K.paused || R();
  }
  async function V() {
    const K = a.current, re = o.current, ae = d.current;
    if (!K || !re || !ae) return;
    if (v) {
      L();
      return;
    }
    he("");
    const de = p.current ?? K.currentTime;
    if (Number.isFinite(K.duration) && de >= K.duration - 0.05 && _(0), se(K), A === "webaudio") {
      const we = ne.current ??= new dv(), $e = we.unlock() && [K, re, ae].map((He) => we.route(He)).every(Boolean);
      me($e ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + we.lastError);
    }
    Q(), re.muted = !P, ae.muted = !b, R(!0);
    const Ce = ++c.current;
    try {
      P || re.pause(), b || ae.pause();
      const we = [K.play(), ...P ? [re.play()] : [], ...b ? [ae.play()] : []];
      if (await Promise.all(we), Ce !== c.current) return;
      if (R(), g(!0), A === "webaudio" && ne.current?.routed(K)) {
        const $e = ne.current;
        setTimeout(() => {
          Ce === c.current && $e.state !== "running" && he(`Ääni ei käynnistynyt (Web Audio: ${$e.state}). Pysäytä ja soita uudelleen.${$e.lastError ? " " + $e.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (Ce !== c.current) return;
      L(), he("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function X(K, re, ae) {
    if (!K) return;
    if (K.muted = !re, !re) {
      K.pause();
      return;
    }
    !a.current || !v || (R(!0, K), K.play().catch(() => he(ae + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function q(K) {
    D(K), Q(w, { guitar: K }), X(o.current, K, "Kitararaita");
  }
  function pe(K) {
    N(K), Q(w, { vocals: K }), X(d.current, K, "Lauluraita");
  }
  return E.useEffect(() => {
    const K = () => {
      document.hidden && L();
    };
    return document.addEventListener("visibilitychange", K), () => {
      document.removeEventListener("visibilitychange", K), c.current++, a.current?.pause(), o.current?.pause(), d.current?.pause(), ne.current?.close();
    };
  }, []), E.useEffect(() => {
    Q();
  }, [m]), /* @__PURE__ */ i.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ i.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ i.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ i.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          id: "song-version-select",
          value: m,
          onChange: (K) => oe(K.target.value),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "normal", children: "Normaali versio" }),
            /* @__PURE__ */ i.jsx("option", { value: "acoustic", children: "Akustinen versio" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "journey-lesson song-player", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Kappaleen soitin" }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          $.label,
          " · ",
          $.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          V();
        }, children: v ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: ce > 0 ? ce : 1,
            step: 0.1,
            value: Math.min(xe, ce > 0 ? ce : 1),
            disabled: ce <= 0,
            onChange: (K) => _(Number(K.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Ah(xe),
          " / ",
          Ah(ce)
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: P,
              onChange: (K) => q(K.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: b,
              onChange: (K) => pe(K.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: x,
              onChange: (K) => z(K.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { className: "song-volume", "data-volume-mode": A, children: [
          /* @__PURE__ */ i.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ i.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            w > 0 && /* @__PURE__ */ i.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            w > 50 && /* @__PURE__ */ i.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: w,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": w + " %",
              onChange: (K) => j(Number(K.target.value))
            }
          ),
          /* @__PURE__ */ i.jsxs("output", { "aria-hidden": "true", children: [
            w,
            " %"
          ] })
        ] })
      ] }),
      J && /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", children: J }),
      /* @__PURE__ */ i.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ i.jsxs("a", { href: $.download, download: $.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ i.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ i.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          $.label,
          ", koko kappale · ",
          $.downloadSize
        ] })
      ] }),
      Ee && /* @__PURE__ */ i.jsx("p", { className: "backing-error", role: "alert", children: Ee }),
      /* @__PURE__ */ i.jsx(
        "audio",
        {
          ref: a,
          src: $.backing,
          preload: "metadata",
          loop: x,
          onLoadedMetadata: (K) => {
            K.currentTarget === a.current && (ye(K.currentTarget.duration), se(K.currentTarget));
          },
          onProgress: (K) => se(K.currentTarget),
          onCanPlay: (K) => se(K.currentTarget),
          onTimeUpdate: (K) => M(K.currentTarget),
          onEnded: (K) => {
            K.currentTarget !== a.current || K.currentTarget.loop || (p.current = null, o.current?.pause(), d.current?.pause(), g(!1), Z(K.currentTarget.duration));
          },
          onPause: (K) => {
            K.currentTarget === a.current && g(!1);
          },
          onError: () => he($.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ i.jsx(
        "audio",
        {
          ref: o,
          src: $.guitar,
          preload: "metadata",
          muted: !P,
          loop: x,
          onLoadedMetadata: () => {
            a.current?.paused && R(!0);
          },
          onError: () => he($.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ i.jsx(
        "audio",
        {
          ref: d,
          src: $.vocals,
          preload: "metadata",
          muted: !b,
          loop: x,
          onLoadedMetadata: () => {
            a.current?.paused && R(!0);
          },
          onError: () => he($.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ i.jsxs("details", { className: "song-chart-collapse", open: T, children: [
      /* @__PURE__ */ i.jsx("summary", { onClick: (K) => {
        K.preventDefault(), W((re) => !re);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ i.jsx(Pk, { version: m, position: xe, loop: x, onSeek: _ })
    ] }),
    /* @__PURE__ */ i.jsxs("details", { className: "song-scales-collapse", open: H, children: [
      /* @__PURE__ */ i.jsx("summary", { onClick: (K) => {
        K.preventDefault(), G((re) => !re);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ i.jsx(Ok, { open: H })
    ] })
  ] });
}
const Xo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, La = (r, a = 1) => r.toFixed(a).replace(".", ",").replace("-", "−"), kf = (r) => {
  const a = Math.round(r);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Zo = (r) => r ? r.label || "Järjestelmän oletustulo" : "";
function Bk(r, a, o, d) {
  if (d) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (r) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Zo(o)}. Vaihda laite Mikrofonin asetuksista.`,
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
function yf({ frame: r, threshold: a }) {
  const o = r?.rms ?? 0, d = ps(o), c = (r?.peak ?? 0) >= 0.98 ? "clip" : o >= a ? "over" : "under";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `meter ${c}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, d)),
      "aria-valuetext": `${La(Math.max(-60, d), 0)} desibeliä${o >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "meter-fill", style: { width: `${nh(o) * 100}%` } }),
        /* @__PURE__ */ i.jsx("div", { className: "meter-threshold", style: { left: `${nh(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Vk({ mic: r, frame: a, heard: o, s: d, now: c }) {
  const h = tf(r.phase, a), p = o && c - o.at < 1500 ? o : null, m = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${Ae(p.midi, d.flats, !0)} · ${kf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : Xo[h];
  return /* @__PURE__ */ i.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ i.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ i.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    r.phase === "on" && /* @__PURE__ */ i.jsx(yf, { frame: a, threshold: d.minRms })
  ] });
}
function Kk({ mic: r, frame: a, heard: o, accepted: d, now: c, s: h, change: p, devices: m, locked: y, calibrating: $, calibration: v, onTest: g, onStop: P, onCalibrate: D }) {
  const b = E.useId(), N = tf(r.phase, a), x = r.purpose === "test" && r.phase !== "off" && r.phase !== "error", z = r.phase === "on", T = o && c - o.at < 1500 ? o : null, W = T && (N === "pitch" || N === "untuned"), H = z && (a?.peak ?? 0) >= 0.98, G = r.phase === "error" ? [] : Bk(N, h, r.info, H), w = !h.device || m.some((A) => A.deviceId === h.device), F = (A, ne) => p({ ...h, [A]: ne });
  return /* @__PURE__ */ i.jsxs("section", { className: "mic-panel", "aria-labelledby": `${b}-title`, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ i.jsx("h2", { id: `${b}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ i.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ i.jsxs("p", { className: `mic-state ${N}`, "data-testid": "mic-state", "data-reading": N, children: [
      /* @__PURE__ */ i.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      r.phase === "error" ? r.error : Xo[N],
      N === "pitch" && T ? ` ${Ae(T.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: r.phase === "on" ? `Mikrofoni kuuntelee: ${Zo(r.info)}.` : r.phase === "error" ? r.error : Xo[r.phase] }),
    r.phase === "off" && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    z && /* @__PURE__ */ i.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ i.jsxs("dd", { "data-testid": "mic-device", children: [
          Zo(r.info),
          r.info && r.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${r.info.channels}` : "",
          r.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ i.jsxs("dd", { children: [
          /* @__PURE__ */ i.jsx(yf, { frame: a, threshold: h.minRms }),
          /* @__PURE__ */ i.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            La(Math.max(-60, ps(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: W ? "" : "stale", children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ i.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: T ? Ae(T.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: W ? "" : "stale", children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ i.jsx("dd", { "data-testid": "mic-frequency", children: T ? `${La(T.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: W ? "" : "stale", children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ i.jsx("dd", { "data-testid": "mic-cents", children: T ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          kf(T.cents),
          " senttiä",
          /* @__PURE__ */ i.jsx("span", { className: `cents ${T.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ i.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, T.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: W ? "" : "stale", children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ i.jsx("dd", { "data-testid": "mic-clarity", children: T ? `${Math.round(T.clarity * 100)} %` : a?.clarity !== void 0 && N === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    z && d && c - d.timestamp < 4e3 && /* @__PURE__ */ i.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ae(d.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    G.length > 0 && z && /* @__PURE__ */ i.jsx("ul", { className: "mic-advice", children: G.map((A) => /* @__PURE__ */ i.jsx("li", { children: A }, A)) }),
    r.phase === "error" && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
      x ? /* @__PURE__ */ i.jsx("button", { type: "button", onClick: P, children: "Lopeta testi" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: h.input === "mic" && r.phase !== "on" ? "primary" : "", disabled: y, onClick: g, children: "Testaa mikrofoni" }),
      x && z && /* @__PURE__ */ i.jsx("button", { type: "button", disabled: $, onClick: D, children: $ ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    y && r.purpose !== "test" && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ i.jsxs("fieldset", { className: "plain", disabled: y, children: [
        /* @__PURE__ */ i.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ i.jsx("label", { htmlFor: `${b}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ i.jsxs("select", { id: `${b}-device`, value: h.device, onChange: (A) => F("device", A.target.value), children: [
              /* @__PURE__ */ i.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !w && /* @__PURE__ */ i.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              m.map((A, ne) => /* @__PURE__ */ i.jsx("option", { value: A.deviceId, children: A.label || `Äänitulo ${ne + 1}` }, A.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ i.jsxs("label", { htmlFor: `${b}-rms`, children: [
              "Äänikynnys · ",
              La(ps(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ i.jsx("input", { id: `${b}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (A) => F("minRms", Number(A.target.value)) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ i.jsxs("label", { htmlFor: `${b}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ i.jsx("input", { id: `${b}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (A) => F("clarity", Number(A.target.value)) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ i.jsxs("label", { htmlFor: `${b}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ i.jsx("input", { id: `${b}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (A) => F("stability", Number(A.target.value)) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ i.jsxs("label", { htmlFor: `${b}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ i.jsx("input", { id: `${b}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (A) => F("cents", Number(A.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("p", { className: "tools-note", children: [
          m.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const Uk = (r) => r.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[r.scale]) : Ai[r.mode === "caged" ? "maj" : r.chord].tones, Ph = (r, a) => Uk(r).find(([o]) => o === a)?.[1], gf = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Hk = (r) => r.direction === "up" ? "ylöspäin" : "alaspäin";
function Gk(r, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : r.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Wk(r, a, o, d, c) {
  return a.choices === "degree" ? `Oikein! ${ur(r.root, a.interval, a.degree)} on ${a.degree}. aste.` : gf(r) ? `Oikein! ${a.degree}. aste on ${ur(r.root, a.interval, a.degree)}.` : r.mode === "interval" ? `Oikein! ${Ae(a.reference, r.flats, !0)} → ${a.name} on ${cr[a.interval]} ${Hk(a)}.` : r.mode === "notes" ? o === "board" && c ? `Oikein! ${Ae(c.midi, r.flats)} on ${$a[c.string]}: ${Vt(c.fret)}.` : `Oikein! Soitit sävelen ${Ae(d, r.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function Qk(r, a, o, d, c) {
  if (o === "note") return `Ei ${Ae(d, r.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${Ph(r, d) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!c) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = De(c.midi) === De(a.midi);
  if (r.mode === "notes")
    return c.string !== a.position.string ? `Tuo on ${ft[c.string]}-kieli. Etsi sävel ${tu[a.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Ae(c.midi, r.flats)}. Etsi ${a.name}.`;
  if (gf(r)) {
    const p = De(c.midi - r.root), m = Ph(r, p), y = r.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? h && a.check === "pitch" && c.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : h ? `Oikea sävel, mutta ${r.mode === "caged" ? "muodon" : r.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${ur(r.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Ae(c.midi, r.flats)}, joka ei kuulu ${y}. Etsi ${a.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ae(c.midi, r.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Yk(r, a, o) {
  const d = Ae(o, r.flats, !0);
  return De(o) === De(a.midi) ? `Kuulin sävelen ${d}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${d}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function jf(r, a = !1) {
  const o = r.split(":"), d = (p) => Number(o[p]), c = (...p) => p.every((m) => Number.isInteger(d(m))), h = (p, m) => ft[p] ? `${ft[p]}-kieli, ${Vt(m)}` : null;
  switch (o[0]) {
    case "notes":
      return c(1, 2) ? h(d(1), d(2)) : null;
    case "ear-note":
      return c(1) ? `Kuultu sävel ${Ae(d(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && c(1) ? `Kuule ja toista: ${Ae(d(1), a, !0)}` : c(1, 2) && h(d(1), d(2)) ? `Kuule ja toista: ${h(d(1), d(2))}` : null;
    case "interval":
      return c(1) && cr[d(1)] ? `${cr[d(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!c(1, 3) || !Ai[p]) return null;
      const m = Ai[p].tones.find(([y]) => y === d(3))?.[1];
      return m ? `${Oh(d(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ie.SCALES[o[2]];
      if (!c(1) || !p) return null;
      const m = `${fi(d(1))}-${p.name}`;
      if (o.length === 5 && c(3)) {
        const y = Ie.scaleNotes(p).find(([$]) => $ === d(3))?.[1];
        return y ? `${m}: ${y}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return c(3, 4) && h(d(3), d(4)) ? `${m}: ${h(d(3), d(4))}` : null;
    }
    case "caged": {
      if (!c(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${fi(d(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && c(3)) {
        const m = Ai.maj.tones.find(([y]) => y === d(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return c(3, 4) && h(d(3), d(4)) ? `${p}: ${h(d(3), d(4))}` : null;
    }
    default:
      return null;
  }
}
function Lh(r) {
  return Object.entries(r).flatMap(([a, o]) => {
    const [d, c, h, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(h) ? [] : [{ key: a, input: d, check: c, guided: h === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const qo = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", Jk = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function Xk(r) {
  const a = r.solo === void 0 ? `${r.first}/${r.count} heti oikein` : r.solo ? `itsenäisesti ${r.soloFirst ?? 0}/${r.solo} heti oikein${r.count > r.solo ? ` · ${r.count - r.solo} vihjeen kanssa` : ""}` : `${r.count} vastausta vihjeen kanssa`;
  return `${new Date(r.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${cs(r.mode)}${r.hints ? ` · ${Da[r.hints].title}` : ""} · ${a} · keskimäärin ${qo(r.ms / Math.max(1, r.count))}${r.complete ? "" : " · keskeytetty"}`;
}
function Zk({ store: r, s: a, locked: o, changed: d }) {
  const [c, h] = E.useState(""), p = E.useRef(null), { recent: m, sessions: y, stats: $ } = r.data, v = Pi(a), g = Ih(a), P = [...new Set(m.map((T) => T.mode))].map((T) => {
    const W = m.filter((H) => H.mode === T);
    return { mode: T, ...Bo(W), last: Math.max(...W.map((H) => H.at)) };
  }).sort((T, W) => W.last - T.last), D = Lh($).filter((T) => !T.guided && T.mode === a.mode && T.input === v && T.check === g && T.stat.attempts >= 3).map((T) => ({ ...T, score: nu(T.stat), text: jf(T.item, a.flats) })).filter((T) => T.text && T.score < 0.8).sort((T, W) => T.score - W.score).slice(0, 5), b = Lh($).reduce((T, W) => T + W.stat.attempts, 0);
  function N() {
    const T = new Blob([JSON.stringify(r.data, null, 2)], { type: "application/json" }), W = URL.createObjectURL(T), H = document.createElement("a");
    H.href = W, H.download = "musiikin-kartta-harjoittelu.json", H.click(), setTimeout(() => URL.revokeObjectURL(W), 1e3);
  }
  async function x(T) {
    if (T)
      try {
        const W = await T.text();
        if (b && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        r.restore(W), h("Varmuuskopio palautettu."), d();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function z() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (r.clearProgress(), h("Harjoitustulokset poistettu."), d());
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ i.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    b === 0 ? /* @__PURE__ */ i.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("p", { children: [
        b,
        " vastattua kysymystä · ",
        y.length,
        " harjoituskertaa. ",
        /* @__PURE__ */ i.jsx("strong", { children: "Itsenäisesti" }),
        " tarkoittaa vastausta ilman vihjettä, ",
        /* @__PURE__ */ i.jsx("strong", { children: "heti oikein" }),
        " oikeaa vastausta ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "fret-scroll", children: /* @__PURE__ */ i.jsxs("table", { className: "summary-table", children: [
        /* @__PURE__ */ i.jsx("caption", { children: "Viimeisimmät vastaukset harjoituksittain" }),
        /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { children: [
          /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Harjoitus" }),
          /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Vastauksia" }),
          /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Itsenäisesti heti oikein" }),
          /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Vihjeen kanssa" }),
          /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Keskiaika" })
        ] }) }),
        /* @__PURE__ */ i.jsx("tbody", { children: P.map((T) => /* @__PURE__ */ i.jsxs("tr", { children: [
          /* @__PURE__ */ i.jsx("th", { scope: "row", children: cs(T.mode) }),
          /* @__PURE__ */ i.jsx("td", { children: T.count }),
          /* @__PURE__ */ i.jsx("td", { children: T.solo ? `${T.soloFirst}/${T.solo} · ${Math.round(T.soloFirst / T.solo * 100)} %` : "–" }),
          /* @__PURE__ */ i.jsx("td", { children: T.guided }),
          /* @__PURE__ */ i.jsx("td", { children: qo(T.ms / T.count) })
        ] }, T.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ i.jsx("h3", { children: "Seuraavaksi" }),
    D.length ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        cs(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ i.jsx("ul", { children: D.map((T) => /* @__PURE__ */ i.jsxs("li", { children: [
        T.text,
        " · viime aikoina ",
        Math.round(dr(T.stat) * 100),
        " % heti oikein · ",
        qo(hr(T.stat))
      ] }, T.key)) })
    ] }) : /* @__PURE__ */ i.jsx("p", { children: b ? `Harjoituksessa ${cs(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        Jk[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ i.jsx(Rp, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: $, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      y.length ? /* @__PURE__ */ i.jsx("ul", { children: y.slice(-10).reverse().map((T) => /* @__PURE__ */ i.jsx("li", { children: Xk(T) }, T.id)) }) : /* @__PURE__ */ i.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ i.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", onClick: N, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ i.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ i.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (T) => {
          x(T.target.files?.[0]);
        } }),
        /* @__PURE__ */ i.jsx("button", { type: "button", disabled: o || !b, onClick: z, children: "Poista harjoitustulokset" })
      ] }),
      c && /* @__PURE__ */ i.jsx("p", { role: "status", children: c })
    ] }),
    r.warning && /* @__PURE__ */ i.jsx("p", { role: "status", className: "error", children: r.warning })
  ] });
}
function qk() {
  try {
    return new Ud(localStorage);
  } catch {
    return new Ud();
  }
}
const $h = (r) => ({ minRms: r.minRms, minClarity: r.clarity, stabilityMs: r.stability, centsTolerance: r.cents }), ey = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", ty = [0, 2, 4, 5, 7, 9, 11];
function ny(r) {
  return r.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : r.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : r.mode === "chord" ? r.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : r.mode === "scale" ? ["mp", "majp"].includes(r.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function iy() {
  const [r] = E.useState(qk), [a, o] = E.useState(() => Sp(location.search, r.data.settings)), [, d] = E.useReducer((U) => U + 1, 0), c = E.useRef(null), h = E.useRef(new Pv()), p = E.useRef(new $i()), m = E.useRef(0), y = E.useRef(), $ = E.useRef(), v = E.useRef(null), g = E.useRef(0), P = E.useRef(null), D = E.useRef(a);
  D.current = a;
  const [b, N] = E.useState({ phase: "off", purpose: "none" }), x = E.useRef(b), z = (U) => {
    x.current = U, N(U);
  }, [T, W] = E.useState(null), [H, G] = E.useState(null), [w, F] = E.useState(null), [A, ne] = E.useState(0), [J, me] = E.useState([]), [xe, Z] = E.useState(!1), [ce, ye] = E.useState(!1), [Ee, he] = E.useState(""), [R, Y] = E.useState("info"), [Q, j] = E.useState(""), [L, oe] = E.useState(0), [_, se] = E.useState([]), [M, V] = E.useState([]), [X, q] = E.useState(null), [pe, K] = E.useState(!1), [re, ae] = E.useState(""), [de, Ce] = E.useState(""), [we, $e] = E.useState(() => {
    const U = new URLSearchParams(location.search);
    return U.has("tila") || U.has("vanha") ? "legacy" : hf(U.get("kappale")) ? "songs" : Gp(U.get("polku"));
  });
  function He() {
    $e(null);
    const U = new URL(location.href);
    U.searchParams.has("polku") && (U.searchParams.delete("polku"), history.replaceState(history.state, "", U.pathname + U.search + U.hash));
  }
  const Ye = () => {
    vv().then(me).catch(() => {
    });
  };
  function We() {
    clearTimeout($.current), v.current = null, K(!1);
  }
  function Xe() {
    W(null), G(null), F(null);
  }
  function ut() {
    h.current.stop(), We(), z({ phase: "off", purpose: "none" }), Xe();
  }
  async function Je(U) {
    if (h.current.active && x.current.phase === "on")
      return We(), z({ ...x.current, purpose: U }), h.current.rearm(), !0;
    z({ phase: "requesting", purpose: U }), Xe();
    try {
      const ue = await h.current.start(D.current.device, {
        ...$h(D.current),
        onFrame: (ze) => Xt.current.frame(ze),
        onStableNote: (ze) => Xt.current.stable(ze)
      }, () => Xt.current.lost());
      return ue ? (z({ phase: "on", purpose: U, info: ue }), Ye(), !0) : !1;
    } catch (ue) {
      return z({ phase: "error", purpose: "none", error: Av(ue) }), !1;
    }
  }
  function Ve(U) {
    v.current?.push(U.rms);
    const ue = performance.now();
    ue - g.current < 66 || (g.current = ue, W(U), ne(ue), U.midi !== void 0 && U.frequency !== void 0 && G({ midi: U.midi, frequency: U.frequency, cents: U.cents ?? 0, clarity: U.clarity ?? 0, tuned: U.status === "pitch", at: ue }));
  }
  function it(U) {
    x.current.purpose === "test" ? F(U) : x.current.purpose === "round" && Ge(U.midi, "mic", void 0, U.heldMs);
  }
  function Kt() {
    const U = x.current.purpose === "round";
    We(), Xe(), z({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const ue = c.current;
    U && ue && ["active", "feedback", "paused"].includes(ue.phase) && (_t(), ye(!1), ue.pause(), j("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), d());
  }
  const Xt = E.useRef({ frame: Ve, stable: it, lost: Kt });
  Xt.current = { frame: Ve, stable: it, lost: Kt };
  function Et(U) {
    const ue = Ra(U), ze = ue.device !== D.current.device;
    D.current = ue, o(ue), r.settings(ue), j(""), h.current.active && (ze && x.current.purpose === "test" ? (ut(), Je("test")) : h.current.setOptions($h(ue)));
  }
  function un(U) {
    Ce(""), c.current = null, $e(U);
  }
  function Zt() {
    ae(""), Je("test");
  }
  function qt() {
    x.current.phase !== "on" || x.current.purpose !== "test" || (We(), v.current = [], K(!0), ae("Mitataan taustakohinaa kolme sekuntia. Älä soita."), $.current = setTimeout(() => {
      const U = v.current ?? [];
      if (We(), U.length < 10) {
        ae("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: ue, noise: ze, loud: Rt } = Lv(U);
      Et({ ...D.current, minRms: ue }), ae(`Taustakohina on ${Math.round(ps(ze))} dB ja äänikynnys nyt ${Math.round(ps(ue))} dB. ${Rt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function _t() {
    m.current++, clearTimeout(y.current), p.current.stop();
  }
  function be(U, ue) {
    if (!U.results.length) return;
    const ze = Bo(U.results);
    r.session({
      id: U.id,
      mode: U.settings.mode,
      count: ze.count,
      first: ze.first,
      ms: ze.ms,
      solo: ze.solo,
      soloFirst: ze.soloFirst,
      hints: U.settings.hints,
      at: Date.now(),
      complete: ue
    });
  }
  async function Ut(U) {
    if (!U.question?.sound.length || U.phase !== "active") return;
    _t();
    const ue = m.current;
    U.pause(), h.current.pause(), ye(!0), Y("info"), he("Kuuntele…"), d();
    try {
      await p.current.play(U.question.sound);
    } catch {
      ue === m.current && j("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    ue !== m.current || c.current !== U || (U.resume(), h.current.resume(), ye(!1), he(""), d());
  }
  async function _e(U) {
    se([]), V([]), q(null), j(""), oe(U.hintLevel), h.current.rearm(), Y("info"), he(""), d(), U.question?.sound.length && await Ut(U);
  }
  async function Le() {
    const U = D.current, ue = Do(U);
    if (ue) {
      j(ue);
      return;
    }
    _t();
    const ze = m.current;
    if (j(""), ae(""), Ce(""), Ea(U)) {
      Z(!0);
      const dt = await Je("round");
      if (ze !== m.current) return;
      if (Z(!1), !dt) {
        j("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else x.current.phase !== "off" && ut();
    const Rt = new Hp(U, () => r.data.stats, (dt) => r.record(dt));
    try {
      Rt.start();
    } catch (dt) {
      x.current.purpose === "round" && ut(), j(dt instanceof Error ? dt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    c.current = Rt, requestAnimationFrame(() => P.current?.scrollIntoView({ block: "start", behavior: "auto" })), await _e(Rt);
  }
  function Re() {
    _t(), Z(!1), ut();
  }
  function Ge(U, ue, ze, Rt = 0) {
    const dt = c.current, Pn = dt?.question;
    if (!dt || !Pn || dt.phase !== "active") return;
    const Ss = dt.answer(U, ue, ze, Rt);
    if (Ss !== "ignored") {
      if (Ss === "candidate")
        q(U), Y("bad"), he(Yk(dt.settings, Pn, U));
      else if (Ss === "wrong")
        ze ? se((Un) => [...Un, ze]) : V((Un) => [...Un, U]), Y("bad"), he(Qk(dt.settings, Pn, ue, U, ze));
      else if (q(null), Y("good"), he(Wk(dt.settings, Pn, ue, U, ze)), be(dt, !1), dt.settings.advance) {
        const Un = m.current;
        y.current = setTimeout(() => {
          Un === m.current && rt();
        }, ue === "mic" ? 1800 : 1400);
      }
      d();
    }
  }
  async function rt() {
    const U = c.current;
    if (!(!U || U.phase !== "feedback")) {
      _t();
      try {
        U.next();
      } catch (ue) {
        $t(!1), j(ue instanceof Error ? ue.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (U.phase === "done") {
        $t(!0);
        return;
      }
      await _e(U);
    }
  }
  function $t(U = !1) {
    _t(), ye(!1), Z(!1), (x.current.purpose === "round" || x.current.phase === "requesting") && ut();
    const ue = c.current;
    ue && (ue.stop(), be(ue, U)), q(null), oe(0), se([]), V([]), j(""), Ce(U ? "complete" : "stopped"), Y("info"), he(""), d();
  }
  function kt() {
    const U = c.current;
    if (!U || !["active", "feedback", "paused"].includes(U.phase)) return;
    _t(), ye(!1), U.pause();
    const ue = x.current.purpose === "round";
    ue && ut(), Y("info"), he(`Harjoitus on tauolla.${ue ? " Mikrofoni on suljettu." : ""}`), d();
  }
  async function en() {
    const U = c.current;
    if (!U || U.phase !== "paused" || ce) return;
    _t();
    const ue = m.current;
    if (j(""), Ea(U.settings)) {
      Z(!0);
      const ze = await Je("round");
      if (ue !== m.current) return;
      if (Z(!1), !ze) {
        j("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    U.resume(), Y("info"), he(""), d(), U.phase === "active" && (h.current.rearm(), U.question?.sound.length && await Ut(U));
  }
  function Mn(U) {
    const ue = c.current;
    !ue || ue.phase !== "active" || (ue.useHint(U), oe(U), d());
  }
  const yn = E.useRef({ hidden: () => {
  }, restored: () => {
  } });
  yn.current = {
    hidden: () => {
      const U = c.current;
      U && ["active", "feedback"].includes(U.phase) || ce ? kt() : x.current.phase !== "off" && x.current.phase !== "error" && (_t(), Z(!1), ut());
    },
    restored: () => {
      Z(!1), ye(!1), z({ phase: "off", purpose: "none" }), Xe(), d();
    }
  }, E.useEffect(() => {
    Ye();
    const U = () => Ye();
    navigator.mediaDevices?.addEventListener?.("devicechange", U);
    const ue = () => {
      m.current++, clearTimeout(y.current), clearTimeout($.current), h.current.stop(), p.current.stop(), _v(), c.current?.pause();
    }, ze = () => {
      document.hidden && yn.current.hidden();
    }, Rt = (dt) => {
      dt.persisted && yn.current.restored();
    };
    return document.addEventListener("visibilitychange", ze), window.addEventListener("pagehide", ue), window.addEventListener("pageshow", Rt), () => {
      ue(), navigator.mediaDevices?.removeEventListener?.("devicechange", U), document.removeEventListener("visibilitychange", ze), window.removeEventListener("pagehide", ue), window.removeEventListener("pageshow", Rt);
    };
  }, []);
  const gn = E.useRef(null), pr = `${c.current?.id}:${c.current?.index}:${c.current?.phase}:${ce}`;
  E.useEffect(() => {
    const U = c.current, ue = P.current, ze = document.activeElement;
    !U || !ue || !(ze === document.body || ue.contains(ze)) || (U.phase === "feedback" ? gn.current?.focus({ preventScroll: !0 }) : U.phase === "active" && !ce && (ze === document.body || ze === gn.current) && ue.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [pr]);
  const Fe = c.current, et = !!Fe && ["active", "paused", "feedback"].includes(Fe.phase), Ze = et ? Fe.settings : a, ct = et ? Fe.question : void 0, Ht = !!ct && !!Fe?.answered, tn = et && Fe.phase === "paused" && !ce && !Ht, Ri = et && Fe.phase === "active" && !ce, Tn = et ? null : Do(a), Vn = et || xe, mi = Li(Ze), gs = Fp(Ze), pi = ct && !Ht ? L : 0, js = ct ? Up(Ze, ct, Ht ? 2 : pi) : { marks: [], text: "" }, vr = [...new Map([...js.marks, ...Ht ? [] : _.map((U) => ({ ...U, label: Ae(U.midi, Ze.flats), kind: "wrong" }))].map((U) => [Ue(U), U])).values()], _n = et && Ea(Ze), kr = !!ct && !tn && (ct.choices === "position" || vr.length > 0), xt = Fe ? Bo(Fe.results) : null, Ba = !Fe || Ze.hints !== "fade" ? "" : Fe.index <= 3 ? " · vastaus näkyy" : Fe.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", xs = Fe && !et ? Fe.results.filter((U) => U.errors > 0 || U.hint) : [], [yr, gr] = ny(Ze), An = /* @__PURE__ */ i.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ i.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ i.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), Kn = r.data.notice === "hints-default" && /* @__PURE__ */ i.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
    /* @__PURE__ */ i.jsxs("p", { children: [
      /* @__PURE__ */ i.jsx("strong", { children: "Harjoittelutapa on muuttunut." }),
      " Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt ",
      /* @__PURE__ */ i.jsx("em", { children: "Testaa osaamistasi" }),
      ", ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse ",
      /* @__PURE__ */ i.jsx("em", { children: "Opettele" }),
      " tai ",
      /* @__PURE__ */ i.jsx("em", { children: "Vähennä vihjeitä" }),
      "."
    ] }),
    /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
      r.dismissNotice(), d();
    }, children: "Selvä" })
  ] });
  return !et && we === null ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx(Qp, { onSelect: un })
  ] }) : !et && we === "scales" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx(ck, { onBack: He })
  ] }) : !et && we === "ear" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx(mk, { onBack: He })
  ] }) : !et && we === "chords" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx(kk, { onBack: He })
  ] }) : !et && we === "songs" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx(zk, { onBack: He })
  ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ i.jsxs("a", { href: yr, children: [
      "Lue tämän harjoituksen teoria: ",
      gr,
      " →"
    ] }) }),
    we !== "legacy" && /* @__PURE__ */ i.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
        et && $t(), He();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ i.jsx("h2", { children: we === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ i.jsx("p", { children: we === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    et ? /* @__PURE__ */ i.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ i.jsx("strong", { children: cs(Ze.mode) }),
      " · ",
      Qd(Ze)
    ] }) : we === "legacy" ? /* @__PURE__ */ i.jsx(Yd, { s: a, change: Et, locked: Vn, problem: Tn }) : /* @__PURE__ */ i.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ i.jsx(Yd, { s: a, change: Et, locked: Vn, problem: Tn })
    ] }),
    !et && (we === "legacy" || Ea(a)) && /* @__PURE__ */ i.jsx(
      Kk,
      {
        mic: b,
        frame: T,
        heard: H,
        accepted: w,
        now: A,
        s: a,
        change: Et,
        devices: J,
        locked: xe,
        calibrating: pe,
        calibration: re,
        onTest: Zt,
        onStop: ut,
        onCalibrate: qt
      }
    ),
    /* @__PURE__ */ i.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: P, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h2", { id: "session-title", children: cs(Ze.mode) }),
        /* @__PURE__ */ i.jsx("span", { "data-testid": "round-status", children: et ? `Kysymys ${Fe.index}${Fe.total ? " / " + Fe.total : " · vapaa harjoittelu"} · ${Da[Ze.hints].title}${Ba}${Fe.phase === "paused" && !ce ? " · tauolla" : ""}` : de === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !et && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        Fe && Fe.results.length > 0 && xt ? /* @__PURE__ */ i.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ i.jsx("h3", { children: de === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ i.jsxs("dl", { children: [
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ i.jsx("dd", { "data-testid": "summary-solo", children: xt.solo ? `${xt.soloFirst} / ${xt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ i.jsx("dd", { "data-testid": "summary-guided", children: xt.guided })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ i.jsx("dd", { children: ey(xt.ms / xt.count) })
            ] })
          ] }),
          xt.solo === 0 && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          xs.length > 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ i.jsx("ul", { children: [...new Set(xs.map((U) => jf(U.item, a.flats)).filter(Boolean))].slice(0, 6).map((U) => /* @__PURE__ */ i.jsx("li", { children: U }, U)) })
          ] })
        ] }) : /* @__PURE__ */ i.jsx("p", { className: "question idle", children: Qd(a) }),
        /* @__PURE__ */ i.jsx("div", { className: "action-row", children: xe ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: !!Tn, onClick: () => {
          Le();
        }, children: Fe?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Fe && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      et && ct && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: tn ? "Harjoitus on tauolla." : ct.prompt }),
        /* @__PURE__ */ i.jsx("p", { className: "how", "data-testid": "instruction", children: tn ? "Kysymys palaa näkyviin, kun jatkat." : ce ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Gk(Ze, ct) }),
        Fe.hintLevel > 0 && !Ht && /* @__PURE__ */ i.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Ze.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        _n && /* @__PURE__ */ i.jsx(Vk, { mic: b, frame: T, heard: H, s: Ze, now: A }),
        ct.choices === "note" && !tn && /* @__PURE__ */ i.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Ze.accidentals ? Array.from({ length: 12 }, (U, ue) => ue) : ty).map((U) => /* @__PURE__ */ i.jsx("button", { type: "button", className: M.includes(U) ? "wrong" : Ht && U === ct.midi % 12 ? "right" : "", disabled: !Ri || M.includes(U), onClick: () => Ge(U, "note"), children: Ae(U, Ze.flats) }, U)) }),
        ct.choices === "degree" && !tn && /* @__PURE__ */ i.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Ze.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[Ze.scale]) : Ai[Ze.chord].tones).map(([U, ue]) => /* @__PURE__ */ i.jsx("button", { type: "button", className: M.includes(U) ? "wrong" : Ht && U === ct.interval ? "right" : "", disabled: !Ri || M.includes(U), onClick: () => Ge(U, "degree"), children: ue }, U)) }),
        kr && /* @__PURE__ */ i.jsx(
          bn,
          {
            area: gs,
            marks: vr,
            disabled: !Ri || ct.choices !== "position" || Ze.input === "mic",
            onAnswer: (U) => Ge(U.midi, "board", U),
            caption: mi.fixed === "shape" ? `${Ze.shape}-muodon alue` : mi.fixed === "box" ? `Boksin ${Ze.box} alue` : "Otelauta"
          }
        ),
        !Ht && !tn && pi > 0 && js.text && /* @__PURE__ */ i.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: js.text }),
        /* @__PURE__ */ i.jsx("p", { className: `feedback ${R}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: Ee }),
        X !== null && Fe.phase === "active" && /* @__PURE__ */ i.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
            Fe.confirmWrong(), q(null), he("Kirjattu virheeksi. Etsi sävel uudelleen."), d();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ i.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        Q && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: Q }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          Fe.phase === "feedback" && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", ref: gn, onClick: () => {
            rt();
          }, children: Fe.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Fe.phase === "active" && !Ht && !ce && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            pi === 0 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => Mn(Math.max(1, Fe.hintLevel)), children: Fe.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            pi === 1 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => Mn(2), children: "Näytä vastaus" }),
            pi > 0 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => oe(0), children: "Piilota vihje" })
          ] }),
          ct.sound.length > 0 && /* @__PURE__ */ i.jsx("button", { type: "button", disabled: !Ri, onClick: () => {
            Ut(Fe);
          }, children: "Kuuntele uudelleen" }),
          Fe.phase === "paused" && !ce ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: xe, onClick: () => {
            en();
          }, children: xe ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ i.jsx("button", { type: "button", onClick: kt, children: "Tauko" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => $t(), children: "Lopeta harjoitus" })
        ] }),
        Fe.phase === "feedback" && Ze.advance && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ i.jsx("p", { className: "tools-note", "data-testid": "tally", children: xt?.count ? `Vastattu ${xt.count} · itsenäisesti heti oikein ${xt.soloFirst}/${xt.solo}${xt.guided ? ` · vihjeen kanssa ${xt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !et && Q && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: Q })
    ] }),
    !et && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ i.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ie.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ i.jsx("a", { href: wp(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ i.jsx(Zk, { store: r, s: a, locked: Vn, changed: () => {
        const U = Ra(r.data.settings);
        D.current = U, o(U), d();
      } }),
      /* @__PURE__ */ i.jsxs("details", { className: "privacy", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
        /* @__PURE__ */ i.jsx("p", { children: "Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa." }),
        /* @__PURE__ */ i.jsx("p", { children: "Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi." }),
        /* @__PURE__ */ i.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen." }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Tunnistus on sovitettu ",
          /* @__PURE__ */ i.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
          " (MIT) ja käyttää Pitchyä. ",
          /* @__PURE__ */ i.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
          " · ",
          /* @__PURE__ */ i.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
          "."
        ] })
      ] })
    ] })
  ] });
}
pp.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ i.jsx(iy, {}));
//# sourceMappingURL=app.js.map
