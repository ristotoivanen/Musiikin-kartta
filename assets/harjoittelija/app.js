function pp(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var xo = { exports: {} }, Xs = {}, jo = { exports: {} }, Ie = {};
var Ld;
function vp() {
  if (Ld) return Ie;
  Ld = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), f = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), y = Symbol.iterator;
  function x(C) {
    return C === null || typeof C != "object" ? null : (C = y && C[y] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var T = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, E = {};
  function w(C, j, re) {
    this.props = C, this.context = j, this.refs = E, this.updater = re || T;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(C, j) {
    if (typeof C != "object" && typeof C != "function" && C != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, C, j, "setState");
  }, w.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function z() {
  }
  z.prototype = w.prototype;
  function P(C, j, re) {
    this.props = C, this.context = j, this.refs = E, this.updater = re || T;
  }
  var U = P.prototype = new z();
  U.constructor = P, _(U, w.prototype), U.isPureReactComponent = !0;
  var V = Array.isArray, B = Object.prototype.hasOwnProperty, D = { current: null }, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(C, j, re) {
    var ce, be = {}, G = null, K = null;
    if (j != null) for (ce in j.ref !== void 0 && (K = j.ref), j.key !== void 0 && (G = "" + j.key), j) B.call(j, ce) && !O.hasOwnProperty(ce) && (be[ce] = j[ce]);
    var te = arguments.length - 2;
    if (te === 1) be.children = re;
    else if (1 < te) {
      for (var q = Array(te), ke = 0; ke < te; ke++) q[ke] = arguments[ke + 2];
      be.children = q;
    }
    if (C && C.defaultProps) for (ce in te = C.defaultProps, te) be[ce] === void 0 && (be[ce] = te[ce]);
    return { $$typeof: s, type: C, key: G, ref: K, props: be, _owner: D.current };
  }
  function ne(C, j) {
    return { $$typeof: s, type: C.type, key: j, ref: C.ref, props: C.props, _owner: C._owner };
  }
  function ie(C) {
    return typeof C == "object" && C !== null && C.$$typeof === s;
  }
  function de(C) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(re) {
      return j[re];
    });
  }
  var _e = /\/+/g;
  function J(C, j) {
    return typeof C == "object" && C !== null && C.key != null ? de("" + C.key) : j.toString(36);
  }
  function he(C, j, re, ce, be) {
    var G = typeof C;
    (G === "undefined" || G === "boolean") && (C = null);
    var K = !1;
    if (C === null) K = !0;
    else switch (G) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (C.$$typeof) {
          case s:
          case i:
            K = !0;
        }
    }
    if (K) return K = C, be = be(K), C = ce === "" ? "." + J(K, 0) : ce, V(be) ? (re = "", C != null && (re = C.replace(_e, "$&/") + "/"), he(be, j, re, "", function(ke) {
      return ke;
    })) : be != null && (ie(be) && (be = ne(be, re + (!be.key || K && K.key === be.key ? "" : ("" + be.key).replace(_e, "$&/") + "/") + C)), j.push(be)), 1;
    if (K = 0, ce = ce === "" ? "." : ce + ":", V(C)) for (var te = 0; te < C.length; te++) {
      G = C[te];
      var q = ce + J(G, te);
      K += he(G, j, re, q, be);
    }
    else if (q = x(C), typeof q == "function") for (C = q.call(C), te = 0; !(G = C.next()).done; ) G = G.value, q = ce + J(G, te++), K += he(G, j, re, q, be);
    else if (G === "object") throw j = String(C), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function W(C, j, re) {
    if (C == null) return C;
    var ce = [], be = 0;
    return he(C, ce, "", "", function(G) {
      return j.call(re, G, be++);
    }), ce;
  }
  function le(C) {
    if (C._status === -1) {
      var j = C._result;
      j = j(), j.then(function(re) {
        (C._status === 0 || C._status === -1) && (C._status = 1, C._result = re);
      }, function(re) {
        (C._status === 0 || C._status === -1) && (C._status = 2, C._result = re);
      }), C._status === -1 && (C._status = 0, C._result = j);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var ue = { current: null }, Q = { transition: null }, oe = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: Q, ReactCurrentOwner: D };
  function se() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ie.Children = { map: W, forEach: function(C, j, re) {
    W(C, function() {
      j.apply(this, arguments);
    }, re);
  }, count: function(C) {
    var j = 0;
    return W(C, function() {
      j++;
    }), j;
  }, toArray: function(C) {
    return W(C, function(j) {
      return j;
    }) || [];
  }, only: function(C) {
    if (!ie(C)) throw Error("React.Children.only expected to receive a single React element child.");
    return C;
  } }, Ie.Component = w, Ie.Fragment = l, Ie.Profiler = d, Ie.PureComponent = P, Ie.StrictMode = u, Ie.Suspense = k, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe, Ie.act = se, Ie.cloneElement = function(C, j, re) {
    if (C == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
    var ce = _({}, C.props), be = C.key, G = C.ref, K = C._owner;
    if (j != null) {
      if (j.ref !== void 0 && (G = j.ref, K = D.current), j.key !== void 0 && (be = "" + j.key), C.type && C.type.defaultProps) var te = C.type.defaultProps;
      for (q in j) B.call(j, q) && !O.hasOwnProperty(q) && (ce[q] = j[q] === void 0 && te !== void 0 ? te[q] : j[q]);
    }
    var q = arguments.length - 2;
    if (q === 1) ce.children = re;
    else if (1 < q) {
      te = Array(q);
      for (var ke = 0; ke < q; ke++) te[ke] = arguments[ke + 2];
      ce.children = te;
    }
    return { $$typeof: s, type: C.type, key: be, ref: G, props: ce, _owner: K };
  }, Ie.createContext = function(C) {
    return C = { $$typeof: p, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, C.Provider = { $$typeof: h, _context: C }, C.Consumer = C;
  }, Ie.createElement = F, Ie.createFactory = function(C) {
    var j = F.bind(null, C);
    return j.type = C, j;
  }, Ie.createRef = function() {
    return { current: null };
  }, Ie.forwardRef = function(C) {
    return { $$typeof: f, render: C };
  }, Ie.isValidElement = ie, Ie.lazy = function(C) {
    return { $$typeof: v, _payload: { _status: -1, _result: C }, _init: le };
  }, Ie.memo = function(C, j) {
    return { $$typeof: S, type: C, compare: j === void 0 ? null : j };
  }, Ie.startTransition = function(C) {
    var j = Q.transition;
    Q.transition = {};
    try {
      C();
    } finally {
      Q.transition = j;
    }
  }, Ie.unstable_act = se, Ie.useCallback = function(C, j) {
    return ue.current.useCallback(C, j);
  }, Ie.useContext = function(C) {
    return ue.current.useContext(C);
  }, Ie.useDebugValue = function() {
  }, Ie.useDeferredValue = function(C) {
    return ue.current.useDeferredValue(C);
  }, Ie.useEffect = function(C, j) {
    return ue.current.useEffect(C, j);
  }, Ie.useId = function() {
    return ue.current.useId();
  }, Ie.useImperativeHandle = function(C, j, re) {
    return ue.current.useImperativeHandle(C, j, re);
  }, Ie.useInsertionEffect = function(C, j) {
    return ue.current.useInsertionEffect(C, j);
  }, Ie.useLayoutEffect = function(C, j) {
    return ue.current.useLayoutEffect(C, j);
  }, Ie.useMemo = function(C, j) {
    return ue.current.useMemo(C, j);
  }, Ie.useReducer = function(C, j, re) {
    return ue.current.useReducer(C, j, re);
  }, Ie.useRef = function(C) {
    return ue.current.useRef(C);
  }, Ie.useState = function(C) {
    return ue.current.useState(C);
  }, Ie.useSyncExternalStore = function(C, j, re) {
    return ue.current.useSyncExternalStore(C, j, re);
  }, Ie.useTransition = function() {
    return ue.current.useTransition();
  }, Ie.version = "18.3.1", Ie;
}
var Rd;
function nu() {
  return Rd || (Rd = 1, jo.exports = vp()), jo.exports;
}
var Od;
function kp() {
  if (Od) return Xs;
  Od = 1;
  var s = nu(), i = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(f, k, S) {
    var v, y = {}, x = null, T = null;
    S !== void 0 && (x = "" + S), k.key !== void 0 && (x = "" + k.key), k.ref !== void 0 && (T = k.ref);
    for (v in k) u.call(k, v) && !h.hasOwnProperty(v) && (y[v] = k[v]);
    if (f && f.defaultProps) for (v in k = f.defaultProps, k) y[v] === void 0 && (y[v] = k[v]);
    return { $$typeof: i, type: f, key: x, ref: T, props: y, _owner: d.current };
  }
  return Xs.Fragment = l, Xs.jsx = p, Xs.jsxs = p, Xs;
}
var $d;
function yp() {
  return $d || ($d = 1, xo.exports = kp()), xo.exports;
}
var a = yp(), b = nu(), ja = {}, So = { exports: {} }, Jt = {}, wo = { exports: {} }, Eo = {};
var Id;
function gp() {
  return Id || (Id = 1, (function(s) {
    function i(Q, oe) {
      var se = Q.length;
      Q.push(oe);
      e: for (; 0 < se; ) {
        var C = se - 1 >>> 1, j = Q[C];
        if (0 < d(j, oe)) Q[C] = oe, Q[se] = j, se = C;
        else break e;
      }
    }
    function l(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function u(Q) {
      if (Q.length === 0) return null;
      var oe = Q[0], se = Q.pop();
      if (se !== oe) {
        Q[0] = se;
        e: for (var C = 0, j = Q.length, re = j >>> 1; C < re; ) {
          var ce = 2 * (C + 1) - 1, be = Q[ce], G = ce + 1, K = Q[G];
          if (0 > d(be, se)) G < j && 0 > d(K, be) ? (Q[C] = K, Q[G] = se, C = G) : (Q[C] = be, Q[ce] = se, C = ce);
          else if (G < j && 0 > d(K, se)) Q[C] = K, Q[G] = se, C = G;
          else break e;
        }
      }
      return oe;
    }
    function d(Q, oe) {
      var se = Q.sortIndex - oe.sortIndex;
      return se !== 0 ? se : Q.id - oe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      s.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, f = p.now();
      s.unstable_now = function() {
        return p.now() - f;
      };
    }
    var k = [], S = [], v = 1, y = null, x = 3, T = !1, _ = !1, E = !1, w = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function U(Q) {
      for (var oe = l(S); oe !== null; ) {
        if (oe.callback === null) u(S);
        else if (oe.startTime <= Q) u(S), oe.sortIndex = oe.expirationTime, i(k, oe);
        else break;
        oe = l(S);
      }
    }
    function V(Q) {
      if (E = !1, U(Q), !_) if (l(k) !== null) _ = !0, le(B);
      else {
        var oe = l(S);
        oe !== null && ue(V, oe.startTime - Q);
      }
    }
    function B(Q, oe) {
      _ = !1, E && (E = !1, z(F), F = -1), T = !0;
      var se = x;
      try {
        for (U(oe), y = l(k); y !== null && (!(y.expirationTime > oe) || Q && !de()); ) {
          var C = y.callback;
          if (typeof C == "function") {
            y.callback = null, x = y.priorityLevel;
            var j = C(y.expirationTime <= oe);
            oe = s.unstable_now(), typeof j == "function" ? y.callback = j : y === l(k) && u(k), U(oe);
          } else u(k);
          y = l(k);
        }
        if (y !== null) var re = !0;
        else {
          var ce = l(S);
          ce !== null && ue(V, ce.startTime - oe), re = !1;
        }
        return re;
      } finally {
        y = null, x = se, T = !1;
      }
    }
    var D = !1, O = null, F = -1, ne = 5, ie = -1;
    function de() {
      return !(s.unstable_now() - ie < ne);
    }
    function _e() {
      if (O !== null) {
        var Q = s.unstable_now();
        ie = Q;
        var oe = !0;
        try {
          oe = O(!0, Q);
        } finally {
          oe ? J() : (D = !1, O = null);
        }
      } else D = !1;
    }
    var J;
    if (typeof P == "function") J = function() {
      P(_e);
    };
    else if (typeof MessageChannel < "u") {
      var he = new MessageChannel(), W = he.port2;
      he.port1.onmessage = _e, J = function() {
        W.postMessage(null);
      };
    } else J = function() {
      w(_e, 0);
    };
    function le(Q) {
      O = Q, D || (D = !0, J());
    }
    function ue(Q, oe) {
      F = w(function() {
        Q(s.unstable_now());
      }, oe);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, s.unstable_continueExecution = function() {
      _ || T || (_ = !0, le(B));
    }, s.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, s.unstable_getFirstCallbackNode = function() {
      return l(k);
    }, s.unstable_next = function(Q) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var oe = 3;
          break;
        default:
          oe = x;
      }
      var se = x;
      x = oe;
      try {
        return Q();
      } finally {
        x = se;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(Q, oe) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Q = 3;
      }
      var se = x;
      x = Q;
      try {
        return oe();
      } finally {
        x = se;
      }
    }, s.unstable_scheduleCallback = function(Q, oe, se) {
      var C = s.unstable_now();
      switch (typeof se == "object" && se !== null ? (se = se.delay, se = typeof se == "number" && 0 < se ? C + se : C) : se = C, Q) {
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
      return j = se + j, Q = { id: v++, callback: oe, priorityLevel: Q, startTime: se, expirationTime: j, sortIndex: -1 }, se > C ? (Q.sortIndex = se, i(S, Q), l(k) === null && Q === l(S) && (E ? (z(F), F = -1) : E = !0, ue(V, se - C))) : (Q.sortIndex = j, i(k, Q), _ || T || (_ = !0, le(B))), Q;
    }, s.unstable_shouldYield = de, s.unstable_wrapCallback = function(Q) {
      var oe = x;
      return function() {
        var se = x;
        x = oe;
        try {
          return Q.apply(this, arguments);
        } finally {
          x = se;
        }
      };
    };
  })(Eo)), Eo;
}
var Fd;
function xp() {
  return Fd || (Fd = 1, wo.exports = gp()), wo.exports;
}
var Dd;
function jp() {
  if (Dd) return Jt;
  Dd = 1;
  var s = nu(), i = xp();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), d = {};
  function h(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, S = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, y = {};
  function x(e) {
    return k.call(y, e) ? !0 : k.call(v, e) ? !1 : S.test(e) ? y[e] = !0 : (v[e] = !0, !1);
  }
  function T(e, t, n, r) {
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
  function _(e, t, n, r) {
    if (t === null || typeof t > "u" || T(e, t, n, r)) return !0;
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
  function E(e, t, n, r, o, c, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = m;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new E(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    w[t] = new E(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new E(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new E(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new E(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new E(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new E(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new E(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new E(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function P(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      z,
      P
    );
    w[t] = new E(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(z, P);
    w[t] = new E(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(z, P);
    w[t] = new E(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new E(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new E(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function U(e, t, n, r) {
    var o = w.hasOwnProperty(t) ? w[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_(t, n, o, r) && (n = null), r || o === null ? x(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var V = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = /* @__PURE__ */ Symbol.for("react.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), F = /* @__PURE__ */ Symbol.for("react.strict_mode"), ne = /* @__PURE__ */ Symbol.for("react.profiler"), ie = /* @__PURE__ */ Symbol.for("react.provider"), de = /* @__PURE__ */ Symbol.for("react.context"), _e = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), he = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), le = /* @__PURE__ */ Symbol.for("react.lazy"), ue = /* @__PURE__ */ Symbol.for("react.offscreen"), Q = Symbol.iterator;
  function oe(e) {
    return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var se = Object.assign, C;
  function j(e) {
    if (C === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      C = t && t[1] || "";
    }
    return `
` + C + e;
  }
  var re = !1;
  function ce(e, t) {
    if (!e || re) return "";
    re = !0;
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
        } catch ($) {
          var r = $;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch ($) {
          r = $;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch ($) {
          r = $;
        }
        e();
      }
    } catch ($) {
      if ($ && r && typeof $.stack == "string") {
        for (var o = $.stack.split(`
`), c = r.stack.split(`
`), m = o.length - 1, g = c.length - 1; 1 <= m && 0 <= g && o[m] !== c[g]; ) g--;
        for (; 1 <= m && 0 <= g; m--, g--) if (o[m] !== c[g]) {
          if (m !== 1 || g !== 1)
            do
              if (m--, g--, 0 > g || o[m] !== c[g]) {
                var N = `
` + o[m].replace(" at new ", " at ");
                return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
              }
            while (1 <= m && 0 <= g);
          break;
        }
      }
    } finally {
      re = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? j(e) : "";
  }
  function be(e) {
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
        return e = ce(e.type, !1), e;
      case 11:
        return e = ce(e.type.render, !1), e;
      case 1:
        return e = ce(e.type, !0), e;
      default:
        return "";
    }
  }
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case D:
        return "Portal";
      case ne:
        return "Profiler";
      case F:
        return "StrictMode";
      case J:
        return "Suspense";
      case he:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case de:
        return (e.displayName || "Context") + ".Consumer";
      case ie:
        return (e._context.displayName || "Context") + ".Provider";
      case _e:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case W:
        return t = e.displayName || null, t !== null ? t : G(e.type) || "Memo";
      case le:
        t = e._payload, e = e._init;
        try {
          return G(e(t));
        } catch {
        }
    }
    return null;
  }
  function K(e) {
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
        return G(t);
      case 8:
        return t === F ? "StrictMode" : "Mode";
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
  function te(e) {
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
  function ke(e) {
    var t = q(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, c = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(m) {
        r = "" + m, c.call(this, m);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(m) {
        r = "" + m;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function ye(e) {
    e._valueTracker || (e._valueTracker = ke(e));
  }
  function pe(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = q(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ee(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ce(e, t) {
    var n = t.checked;
    return se({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Se(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = te(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Me(e, t) {
    t = t.checked, t != null && U(e, "checked", t, !1);
  }
  function Fe(e, t) {
    Me(e, t);
    var n = te(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Je(e, t.type, n) : t.hasOwnProperty("defaultValue") && Je(e, t.type, te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Qe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Je(e, t, n) {
    (t !== "number" || Ee(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Xe = Array.isArray;
  function it(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + te(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function pt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return se({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ge(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(l(92));
        if (Xe(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function De(e, t) {
    var n = te(t.value), r = te(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function et(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ut(e) {
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
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ut(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var At, Kt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, o);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (At = At || document.createElement("div"), At.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = At.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function It(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wt = {
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
  }, rn = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wt).forEach(function(e) {
    rn.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), wt[t] = wt[e];
    });
  });
  function Pe(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wt.hasOwnProperty(e) && wt[e] ? ("" + t).trim() : t + "px";
  }
  function I(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Pe(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var H = se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Y(e, t) {
    if (t) {
      if (H[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function fe(e, t) {
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
  var xe = null;
  function Oe(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var We = null, st = null, ct = null;
  function Mn(e) {
    if (e = $s(e)) {
      if (typeof We != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = $r(t), We(e.stateNode, e.type, t));
    }
  }
  function hn(e) {
    st ? ct ? ct.push(e) : ct = [e] : st = e;
  }
  function _n() {
    if (st) {
      var e = st, t = ct;
      if (ct = st = null, Mn(e), t) for (e = 0; e < t.length; e++) Mn(t[e]);
    }
  }
  function dr(e, t) {
    return e(t);
  }
  function ms() {
  }
  var mi = !1;
  function Li(e, t, n) {
    if (mi) return e(t, n);
    mi = !0;
    try {
      return dr(e, t, n);
    } finally {
      mi = !1, (st !== null || ct !== null) && (ms(), _n());
    }
  }
  function pi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = $r(n);
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
    if (n && typeof n != "function") throw Error(l(231, t, typeof n));
    return n;
  }
  var ze = !1;
  if (f) try {
    var tt = {};
    Object.defineProperty(tt, "passive", { get: function() {
      ze = !0;
    } }), window.addEventListener("test", tt, tt), window.removeEventListener("test", tt, tt);
  } catch {
    ze = !1;
  }
  function rt(e, t, n, r, o, c, m, g, N) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, $);
    } catch (Z) {
      this.onError(Z);
    }
  }
  var kt = !1, Ut = null, fn = !1, Bn = null, ps = { onError: function(e) {
    kt = !0, Ut = e;
  } };
  function vs(e, t, n, r, o, c, m, g, N) {
    kt = !1, Ut = null, rt.apply(ps, arguments);
  }
  function hr(e, t, n, r, o, c, m, g, N) {
    if (vs.apply(this, arguments), kt) {
      if (kt) {
        var $ = Ut;
        kt = !1, Ut = null;
      } else throw Error(l(198));
      fn || (fn = !0, Bn = $);
    }
  }
  function bn(e) {
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
  function Vn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ri(e) {
    if (bn(e) !== e) throw Error(l(188));
  }
  function fr(e) {
    var t = e.alternate;
    if (!t) {
      if (t = bn(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var c = o.alternate;
      if (c === null) {
        if (r = o.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === c.child) {
        for (c = o.child; c; ) {
          if (c === n) return Ri(o), e;
          if (c === r) return Ri(o), t;
          c = c.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== r.return) n = o, r = c;
      else {
        for (var m = !1, g = o.child; g; ) {
          if (g === n) {
            m = !0, n = o, r = c;
            break;
          }
          if (g === r) {
            m = !0, r = o, n = c;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = c.child; g; ) {
            if (g === n) {
              m = !0, n = c, r = o;
              break;
            }
            if (g === r) {
              m = !0, r = c, n = o;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(l(189));
        }
      }
      if (n.alternate !== r) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function mr(e) {
    return e = fr(e), e !== null ? pr(e) : null;
  }
  function pr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = pr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Tt = i.unstable_scheduleCallback, vr = i.unstable_cancelCallback, kr = i.unstable_shouldYield, Da = i.unstable_requestPaint, dt = i.unstable_now, Kn = i.unstable_getCurrentPriorityLevel, jn = i.unstable_ImmediatePriority, L = i.unstable_UserBlockingPriority, ve = i.unstable_NormalPriority, Ke = i.unstable_LowPriority, Xt = i.unstable_IdlePriority, ht = null, Ft = null;
  function ks(e) {
    if (Ft && typeof Ft.onCommitFiberRoot == "function") try {
      Ft.onCommitFiberRoot(ht, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Mt = Math.clz32 ? Math.clz32 : Lf, Pf = Math.log, Af = Math.LN2;
  function Lf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Pf(e) / Af | 0) | 0;
  }
  var yr = 64, gr = 4194304;
  function ys(e) {
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
  function xr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, c = e.pingedLanes, m = n & 268435455;
    if (m !== 0) {
      var g = m & ~o;
      g !== 0 ? r = ys(g) : (c &= m, c !== 0 && (r = ys(c)));
    } else m = n & ~o, m !== 0 ? r = ys(m) : c !== 0 && (r = ys(c));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, c = t & -t, o >= c || o === 16 && (c & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Mt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r;
  }
  function Rf(e, t) {
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
  function Of(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
      var m = 31 - Mt(c), g = 1 << m, N = o[m];
      N === -1 ? ((g & n) === 0 || (g & r) !== 0) && (o[m] = Rf(g, t)) : N <= t && (e.expiredLanes |= g), c &= ~g;
    }
  }
  function za(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function cu() {
    var e = yr;
    return yr <<= 1, (yr & 4194240) === 0 && (yr = 64), e;
  }
  function Ba(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function gs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Mt(t), e[t] = n;
  }
  function $f(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Mt(n), c = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~c;
    }
  }
  function Va(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Mt(n), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
  }
  var qe = 0;
  function du(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var hu, Ka, fu, mu, pu, Ua = !1, jr = [], Un = null, Hn = null, Gn = null, xs = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Wn = [], If = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function vu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Un = null;
        break;
      case "dragenter":
      case "dragleave":
        Hn = null;
        break;
      case "mouseover":
      case "mouseout":
        Gn = null;
        break;
      case "pointerover":
      case "pointerout":
        xs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        js.delete(t.pointerId);
    }
  }
  function Ss(e, t, n, r, o, c) {
    return e === null || e.nativeEvent !== c ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: c, targetContainers: [o] }, t !== null && (t = $s(t), t !== null && Ka(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Ff(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return Un = Ss(Un, e, t, n, r, o), !0;
      case "dragenter":
        return Hn = Ss(Hn, e, t, n, r, o), !0;
      case "mouseover":
        return Gn = Ss(Gn, e, t, n, r, o), !0;
      case "pointerover":
        var c = o.pointerId;
        return xs.set(c, Ss(xs.get(c) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return c = o.pointerId, js.set(c, Ss(js.get(c) || null, e, t, n, r, o)), !0;
    }
    return !1;
  }
  function ku(e) {
    var t = vi(e.target);
    if (t !== null) {
      var n = bn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Vn(n), t !== null) {
            e.blockedOn = t, pu(e.priority, function() {
              fu(n);
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
  function Sr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ga(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        xe = r, n.target.dispatchEvent(r), xe = null;
      } else return t = $s(n), t !== null && Ka(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function yu(e, t, n) {
    Sr(e) && n.delete(t);
  }
  function Df() {
    Ua = !1, Un !== null && Sr(Un) && (Un = null), Hn !== null && Sr(Hn) && (Hn = null), Gn !== null && Sr(Gn) && (Gn = null), xs.forEach(yu), js.forEach(yu);
  }
  function ws(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ua || (Ua = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Df)));
  }
  function Es(e) {
    function t(o) {
      return ws(o, e);
    }
    if (0 < jr.length) {
      ws(jr[0], e);
      for (var n = 1; n < jr.length; n++) {
        var r = jr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Un !== null && ws(Un, e), Hn !== null && ws(Hn, e), Gn !== null && ws(Gn, e), xs.forEach(t), js.forEach(t), n = 0; n < Wn.length; n++) r = Wn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Wn.length && (n = Wn[0], n.blockedOn === null); ) ku(n), n.blockedOn === null && Wn.shift();
  }
  var Oi = V.ReactCurrentBatchConfig, wr = !0;
  function zf(e, t, n, r) {
    var o = qe, c = Oi.transition;
    Oi.transition = null;
    try {
      qe = 1, Ha(e, t, n, r);
    } finally {
      qe = o, Oi.transition = c;
    }
  }
  function Bf(e, t, n, r) {
    var o = qe, c = Oi.transition;
    Oi.transition = null;
    try {
      qe = 4, Ha(e, t, n, r);
    } finally {
      qe = o, Oi.transition = c;
    }
  }
  function Ha(e, t, n, r) {
    if (wr) {
      var o = Ga(e, t, n, r);
      if (o === null) ul(e, t, r, Er, n), vu(e, r);
      else if (Ff(o, e, t, n, r)) r.stopPropagation();
      else if (vu(e, r), t & 4 && -1 < If.indexOf(e)) {
        for (; o !== null; ) {
          var c = $s(o);
          if (c !== null && hu(c), c = Ga(e, t, n, r), c === null && ul(e, t, r, Er, n), c === o) break;
          o = c;
        }
        o !== null && r.stopPropagation();
      } else ul(e, t, r, null, n);
    }
  }
  var Er = null;
  function Ga(e, t, n, r) {
    if (Er = null, e = Oe(r), e = vi(e), e !== null) if (t = bn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Vn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Er = e, null;
  }
  function gu(e) {
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
        switch (Kn()) {
          case jn:
            return 1;
          case L:
            return 4;
          case ve:
          case Ke:
            return 16;
          case Xt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Yn = null, Wa = null, Nr = null;
  function xu() {
    if (Nr) return Nr;
    var e, t = Wa, n = t.length, r, o = "value" in Yn ? Yn.value : Yn.textContent, c = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var m = n - e;
    for (r = 1; r <= m && t[n - r] === o[c - r]; r++) ;
    return Nr = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Cr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Tr() {
    return !0;
  }
  function ju() {
    return !1;
  }
  function Zt(e) {
    function t(n, r, o, c, m) {
      this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = c, this.target = m, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(c) : c[g]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Tr : ju, this.isPropagationStopped = ju, this;
    }
    return se(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Tr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Tr);
    }, persist: function() {
    }, isPersistent: Tr }), t;
  }
  var $i = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ya = Zt($i), Ns = se({}, $i, { view: 0, detail: 0 }), Vf = Zt(Ns), Qa, Ja, Cs, Mr = se({}, Ns, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Za, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Cs && (Cs && e.type === "mousemove" ? (Qa = e.screenX - Cs.screenX, Ja = e.screenY - Cs.screenY) : Ja = Qa = 0, Cs = e), Qa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ja;
  } }), Su = Zt(Mr), Kf = se({}, Mr, { dataTransfer: 0 }), Uf = Zt(Kf), Hf = se({}, Ns, { relatedTarget: 0 }), Xa = Zt(Hf), Gf = se({}, $i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wf = Zt(Gf), Yf = se({}, $i, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Qf = Zt(Yf), Jf = se({}, $i, { data: 0 }), wu = Zt(Jf), Xf = {
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
  }, Zf = {
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
  }, qf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function em(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qf[e]) ? !!t[e] : !1;
  }
  function Za() {
    return em;
  }
  var tm = se({}, Ns, { key: function(e) {
    if (e.key) {
      var t = Xf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Cr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Za, charCode: function(e) {
    return e.type === "keypress" ? Cr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Cr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), nm = Zt(tm), im = se({}, Mr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Eu = Zt(im), sm = se({}, Ns, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Za }), rm = Zt(sm), am = se({}, $i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), lm = Zt(am), om = se({}, Mr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), um = Zt(om), cm = [9, 13, 27, 32], qa = f && "CompositionEvent" in window, Ts = null;
  f && "documentMode" in document && (Ts = document.documentMode);
  var dm = f && "TextEvent" in window && !Ts, Nu = f && (!qa || Ts && 8 < Ts && 11 >= Ts), Cu = " ", Tu = !1;
  function Mu(e, t) {
    switch (e) {
      case "keyup":
        return cm.indexOf(t.keyCode) !== -1;
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
  function _u(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ii = !1;
  function hm(e, t) {
    switch (e) {
      case "compositionend":
        return _u(t);
      case "keypress":
        return t.which !== 32 ? null : (Tu = !0, Cu);
      case "textInput":
        return e = t.data, e === Cu && Tu ? null : e;
      default:
        return null;
    }
  }
  function fm(e, t) {
    if (Ii) return e === "compositionend" || !qa && Mu(e, t) ? (e = xu(), Nr = Wa = Yn = null, Ii = !1, e) : null;
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
        return Nu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var mm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function bu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!mm[e.type] : t === "textarea";
  }
  function Pu(e, t, n, r) {
    hn(r), t = Lr(t, "onChange"), 0 < t.length && (n = new Ya("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Ms = null, _s = null;
  function pm(e) {
    Qu(e, 0);
  }
  function _r(e) {
    var t = Vi(e);
    if (pe(t)) return e;
  }
  function vm(e, t) {
    if (e === "change") return t;
  }
  var Au = !1;
  if (f) {
    var el;
    if (f) {
      var tl = "oninput" in document;
      if (!tl) {
        var Lu = document.createElement("div");
        Lu.setAttribute("oninput", "return;"), tl = typeof Lu.oninput == "function";
      }
      el = tl;
    } else el = !1;
    Au = el && (!document.documentMode || 9 < document.documentMode);
  }
  function Ru() {
    Ms && (Ms.detachEvent("onpropertychange", Ou), _s = Ms = null);
  }
  function Ou(e) {
    if (e.propertyName === "value" && _r(_s)) {
      var t = [];
      Pu(t, _s, e, Oe(e)), Li(pm, t);
    }
  }
  function km(e, t, n) {
    e === "focusin" ? (Ru(), Ms = t, _s = n, Ms.attachEvent("onpropertychange", Ou)) : e === "focusout" && Ru();
  }
  function ym(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return _r(_s);
  }
  function gm(e, t) {
    if (e === "click") return _r(t);
  }
  function xm(e, t) {
    if (e === "input" || e === "change") return _r(t);
  }
  function jm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mn = typeof Object.is == "function" ? Object.is : jm;
  function bs(e, t) {
    if (mn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!k.call(t, o) || !mn(e[o], t[o])) return !1;
    }
    return !0;
  }
  function $u(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Iu(e, t) {
    var n = $u(e);
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
      n = $u(n);
    }
  }
  function Fu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Du() {
    for (var e = window, t = Ee(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ee(e.document);
    }
    return t;
  }
  function nl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Sm(e) {
    var t = Du(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Fu(n.ownerDocument.documentElement, n)) {
      if (r !== null && nl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, c = Math.min(r.start, o);
          r = r.end === void 0 ? c : Math.min(r.end, o), !e.extend && c > r && (o = r, r = c, c = o), o = Iu(n, c);
          var m = Iu(
            n,
            r
          );
          o && m && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), c > r ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var wm = f && "documentMode" in document && 11 >= document.documentMode, Fi = null, il = null, Ps = null, sl = !1;
  function zu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    sl || Fi == null || Fi !== Ee(r) || (r = Fi, "selectionStart" in r && nl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ps && bs(Ps, r) || (Ps = r, r = Lr(il, "onSelect"), 0 < r.length && (t = new Ya("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Fi)));
  }
  function br(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Di = { animationend: br("Animation", "AnimationEnd"), animationiteration: br("Animation", "AnimationIteration"), animationstart: br("Animation", "AnimationStart"), transitionend: br("Transition", "TransitionEnd") }, rl = {}, Bu = {};
  f && (Bu = document.createElement("div").style, "AnimationEvent" in window || (delete Di.animationend.animation, delete Di.animationiteration.animation, delete Di.animationstart.animation), "TransitionEvent" in window || delete Di.transitionend.transition);
  function Pr(e) {
    if (rl[e]) return rl[e];
    if (!Di[e]) return e;
    var t = Di[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Bu) return rl[e] = t[n];
    return e;
  }
  var Vu = Pr("animationend"), Ku = Pr("animationiteration"), Uu = Pr("animationstart"), Hu = Pr("transitionend"), Gu = /* @__PURE__ */ new Map(), Wu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Qn(e, t) {
    Gu.set(e, t), h(t, [e]);
  }
  for (var al = 0; al < Wu.length; al++) {
    var ll = Wu[al], Em = ll.toLowerCase(), Nm = ll[0].toUpperCase() + ll.slice(1);
    Qn(Em, "on" + Nm);
  }
  Qn(Vu, "onAnimationEnd"), Qn(Ku, "onAnimationIteration"), Qn(Uu, "onAnimationStart"), Qn("dblclick", "onDoubleClick"), Qn("focusin", "onFocus"), Qn("focusout", "onBlur"), Qn(Hu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var As = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cm = new Set("cancel close invalid load scroll toggle".split(" ").concat(As));
  function Yu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, hr(r, t, void 0, e), e.currentTarget = null;
  }
  function Qu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var c = void 0;
        if (t) for (var m = r.length - 1; 0 <= m; m--) {
          var g = r[m], N = g.instance, $ = g.currentTarget;
          if (g = g.listener, N !== c && o.isPropagationStopped()) break e;
          Yu(o, g, $), c = N;
        }
        else for (m = 0; m < r.length; m++) {
          if (g = r[m], N = g.instance, $ = g.currentTarget, g = g.listener, N !== c && o.isPropagationStopped()) break e;
          Yu(o, g, $), c = N;
        }
      }
    }
    if (fn) throw e = Bn, fn = !1, Bn = null, e;
  }
  function at(e, t) {
    var n = t[pl];
    n === void 0 && (n = t[pl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ju(t, e, 2, !1), n.add(r));
  }
  function ol(e, t, n) {
    var r = 0;
    t && (r |= 4), Ju(n, e, r, t);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function Ls(e) {
    if (!e[Ar]) {
      e[Ar] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (Cm.has(n) || ol(n, !1, e), ol(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ar] || (t[Ar] = !0, ol("selectionchange", !1, t));
    }
  }
  function Ju(e, t, n, r) {
    switch (gu(t)) {
      case 1:
        var o = zf;
        break;
      case 4:
        o = Bf;
        break;
      default:
        o = Ha;
    }
    n = o.bind(null, t, n, e), o = void 0, !ze || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function ul(e, t, n, r, o) {
    var c = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var m = r.tag;
      if (m === 3 || m === 4) {
        var g = r.stateNode.containerInfo;
        if (g === o || g.nodeType === 8 && g.parentNode === o) break;
        if (m === 4) for (m = r.return; m !== null; ) {
          var N = m.tag;
          if ((N === 3 || N === 4) && (N = m.stateNode.containerInfo, N === o || N.nodeType === 8 && N.parentNode === o)) return;
          m = m.return;
        }
        for (; g !== null; ) {
          if (m = vi(g), m === null) return;
          if (N = m.tag, N === 5 || N === 6) {
            r = c = m;
            continue e;
          }
          g = g.parentNode;
        }
      }
      r = r.return;
    }
    Li(function() {
      var $ = c, Z = Oe(n), ee = [];
      e: {
        var X = Gu.get(e);
        if (X !== void 0) {
          var me = Ya, je = e;
          switch (e) {
            case "keypress":
              if (Cr(n) === 0) break e;
            case "keydown":
            case "keyup":
              me = nm;
              break;
            case "focusin":
              je = "focus", me = Xa;
              break;
            case "focusout":
              je = "blur", me = Xa;
              break;
            case "beforeblur":
            case "afterblur":
              me = Xa;
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
              me = Su;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              me = Uf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              me = rm;
              break;
            case Vu:
            case Ku:
            case Uu:
              me = Wf;
              break;
            case Hu:
              me = lm;
              break;
            case "scroll":
              me = Vf;
              break;
            case "wheel":
              me = um;
              break;
            case "copy":
            case "cut":
            case "paste":
              me = Qf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              me = Eu;
          }
          var Ne = (t & 4) !== 0, yt = !Ne && e === "scroll", A = Ne ? X !== null ? X + "Capture" : null : X;
          Ne = [];
          for (var M = $, R; M !== null; ) {
            R = M;
            var ae = R.stateNode;
            if (R.tag === 5 && ae !== null && (R = ae, A !== null && (ae = pi(M, A), ae != null && Ne.push(Rs(M, ae, R)))), yt) break;
            M = M.return;
          }
          0 < Ne.length && (X = new me(X, je, null, n, Z), ee.push({ event: X, listeners: Ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (X = e === "mouseover" || e === "pointerover", me = e === "mouseout" || e === "pointerout", X && n !== xe && (je = n.relatedTarget || n.fromElement) && (vi(je) || je[Pn])) break e;
          if ((me || X) && (X = Z.window === Z ? Z : (X = Z.ownerDocument) ? X.defaultView || X.parentWindow : window, me ? (je = n.relatedTarget || n.toElement, me = $, je = je ? vi(je) : null, je !== null && (yt = bn(je), je !== yt || je.tag !== 5 && je.tag !== 6) && (je = null)) : (me = null, je = $), me !== je)) {
            if (Ne = Su, ae = "onMouseLeave", A = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (Ne = Eu, ae = "onPointerLeave", A = "onPointerEnter", M = "pointer"), yt = me == null ? X : Vi(me), R = je == null ? X : Vi(je), X = new Ne(ae, M + "leave", me, n, Z), X.target = yt, X.relatedTarget = R, ae = null, vi(Z) === $ && (Ne = new Ne(A, M + "enter", je, n, Z), Ne.target = R, Ne.relatedTarget = yt, ae = Ne), yt = ae, me && je) t: {
              for (Ne = me, A = je, M = 0, R = Ne; R; R = zi(R)) M++;
              for (R = 0, ae = A; ae; ae = zi(ae)) R++;
              for (; 0 < M - R; ) Ne = zi(Ne), M--;
              for (; 0 < R - M; ) A = zi(A), R--;
              for (; M--; ) {
                if (Ne === A || A !== null && Ne === A.alternate) break t;
                Ne = zi(Ne), A = zi(A);
              }
              Ne = null;
            }
            else Ne = null;
            me !== null && Xu(ee, X, me, Ne, !1), je !== null && yt !== null && Xu(ee, yt, je, Ne, !0);
          }
        }
        e: {
          if (X = $ ? Vi($) : window, me = X.nodeName && X.nodeName.toLowerCase(), me === "select" || me === "input" && X.type === "file") var Te = vm;
          else if (bu(X)) if (Au) Te = xm;
          else {
            Te = ym;
            var Ae = km;
          }
          else (me = X.nodeName) && me.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio") && (Te = gm);
          if (Te && (Te = Te(e, $))) {
            Pu(ee, Te, n, Z);
            break e;
          }
          Ae && Ae(e, X, $), e === "focusout" && (Ae = X._wrapperState) && Ae.controlled && X.type === "number" && Je(X, "number", X.value);
        }
        switch (Ae = $ ? Vi($) : window, e) {
          case "focusin":
            (bu(Ae) || Ae.contentEditable === "true") && (Fi = Ae, il = $, Ps = null);
            break;
          case "focusout":
            Ps = il = Fi = null;
            break;
          case "mousedown":
            sl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sl = !1, zu(ee, n, Z);
            break;
          case "selectionchange":
            if (wm) break;
          case "keydown":
          case "keyup":
            zu(ee, n, Z);
        }
        var Le;
        if (qa) e: {
          switch (e) {
            case "compositionstart":
              var Re = "onCompositionStart";
              break e;
            case "compositionend":
              Re = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Re = "onCompositionUpdate";
              break e;
          }
          Re = void 0;
        }
        else Ii ? Mu(e, n) && (Re = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Re = "onCompositionStart");
        Re && (Nu && n.locale !== "ko" && (Ii || Re !== "onCompositionStart" ? Re === "onCompositionEnd" && Ii && (Le = xu()) : (Yn = Z, Wa = "value" in Yn ? Yn.value : Yn.textContent, Ii = !0)), Ae = Lr($, Re), 0 < Ae.length && (Re = new wu(Re, e, null, n, Z), ee.push({ event: Re, listeners: Ae }), Le ? Re.data = Le : (Le = _u(n), Le !== null && (Re.data = Le)))), (Le = dm ? hm(e, n) : fm(e, n)) && ($ = Lr($, "onBeforeInput"), 0 < $.length && (Z = new wu("onBeforeInput", "beforeinput", null, n, Z), ee.push({ event: Z, listeners: $ }), Z.data = Le));
      }
      Qu(ee, t);
    });
  }
  function Rs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Lr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e, c = o.stateNode;
      o.tag === 5 && c !== null && (o = c, c = pi(e, n), c != null && r.unshift(Rs(e, c, o)), c = pi(e, t), c != null && r.push(Rs(e, c, o))), e = e.return;
    }
    return r;
  }
  function zi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Xu(e, t, n, r, o) {
    for (var c = t._reactName, m = []; n !== null && n !== r; ) {
      var g = n, N = g.alternate, $ = g.stateNode;
      if (N !== null && N === r) break;
      g.tag === 5 && $ !== null && (g = $, o ? (N = pi(n, c), N != null && m.unshift(Rs(n, N, g))) : o || (N = pi(n, c), N != null && m.push(Rs(n, N, g)))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Tm = /\r\n?/g, Mm = /\u0000|\uFFFD/g;
  function Zu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Tm, `
`).replace(Mm, "");
  }
  function Rr(e, t, n) {
    if (t = Zu(t), Zu(e) !== t && n) throw Error(l(425));
  }
  function Or() {
  }
  var cl = null, dl = null;
  function hl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var fl = typeof setTimeout == "function" ? setTimeout : void 0, _m = typeof clearTimeout == "function" ? clearTimeout : void 0, qu = typeof Promise == "function" ? Promise : void 0, bm = typeof queueMicrotask == "function" ? queueMicrotask : typeof qu < "u" ? function(e) {
    return qu.resolve(null).then(e).catch(Pm);
  } : fl;
  function Pm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ml(e, t) {
    var n = t, r = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Es(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o;
    } while (n);
    Es(t);
  }
  function Jn(e) {
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
  function ec(e) {
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
  var Bi = Math.random().toString(36).slice(2), Sn = "__reactFiber$" + Bi, Os = "__reactProps$" + Bi, Pn = "__reactContainer$" + Bi, pl = "__reactEvents$" + Bi, Am = "__reactListeners$" + Bi, Lm = "__reactHandles$" + Bi;
  function vi(e) {
    var t = e[Sn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Pn] || n[Sn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ec(e); e !== null; ) {
          if (n = e[Sn]) return n;
          e = ec(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function $s(e) {
    return e = e[Sn] || e[Pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Vi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function $r(e) {
    return e[Os] || null;
  }
  var vl = [], Ki = -1;
  function Xn(e) {
    return { current: e };
  }
  function lt(e) {
    0 > Ki || (e.current = vl[Ki], vl[Ki] = null, Ki--);
  }
  function nt(e, t) {
    Ki++, vl[Ki] = e.current, e.current = t;
  }
  var Zn = {}, Lt = Xn(Zn), Ht = Xn(!1), ki = Zn;
  function Ui(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Zn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, c;
    for (c in n) o[c] = t[c];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Gt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ir() {
    lt(Ht), lt(Lt);
  }
  function tc(e, t, n) {
    if (Lt.current !== Zn) throw Error(l(168));
    nt(Lt, t), nt(Ht, n);
  }
  function nc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(l(108, K(e) || "Unknown", o));
    return se({}, n, r);
  }
  function Fr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zn, ki = Lt.current, nt(Lt, e), nt(Ht, Ht.current), !0;
  }
  function ic(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = nc(e, t, ki), r.__reactInternalMemoizedMergedChildContext = e, lt(Ht), lt(Lt), nt(Lt, e)) : lt(Ht), nt(Ht, n);
  }
  var An = null, Dr = !1, kl = !1;
  function sc(e) {
    An === null ? An = [e] : An.push(e);
  }
  function Rm(e) {
    Dr = !0, sc(e);
  }
  function qn() {
    if (!kl && An !== null) {
      kl = !0;
      var e = 0, t = qe;
      try {
        var n = An;
        for (qe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        An = null, Dr = !1;
      } catch (o) {
        throw An !== null && (An = An.slice(e + 1)), Tt(jn, qn), o;
      } finally {
        qe = t, kl = !1;
      }
    }
    return null;
  }
  var Hi = [], Gi = 0, zr = null, Br = 0, an = [], ln = 0, yi = null, Ln = 1, Rn = "";
  function gi(e, t) {
    Hi[Gi++] = Br, Hi[Gi++] = zr, zr = e, Br = t;
  }
  function rc(e, t, n) {
    an[ln++] = Ln, an[ln++] = Rn, an[ln++] = yi, yi = e;
    var r = Ln;
    e = Rn;
    var o = 32 - Mt(r) - 1;
    r &= ~(1 << o), n += 1;
    var c = 32 - Mt(t) + o;
    if (30 < c) {
      var m = o - o % 5;
      c = (r & (1 << m) - 1).toString(32), r >>= m, o -= m, Ln = 1 << 32 - Mt(t) + o | n << o | r, Rn = c + e;
    } else Ln = 1 << c | n << o | r, Rn = e;
  }
  function yl(e) {
    e.return !== null && (gi(e, 1), rc(e, 1, 0));
  }
  function gl(e) {
    for (; e === zr; ) zr = Hi[--Gi], Hi[Gi] = null, Br = Hi[--Gi], Hi[Gi] = null;
    for (; e === yi; ) yi = an[--ln], an[ln] = null, Rn = an[--ln], an[ln] = null, Ln = an[--ln], an[ln] = null;
  }
  var qt = null, en = null, ot = !1, pn = null;
  function ac(e, t) {
    var n = dn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function lc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qt = e, en = Jn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qt = e, en = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = yi !== null ? { id: Ln, overflow: Rn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = dn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qt = e, en = null, !0) : !1;
      default:
        return !1;
    }
  }
  function xl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function jl(e) {
    if (ot) {
      var t = en;
      if (t) {
        var n = t;
        if (!lc(e, t)) {
          if (xl(e)) throw Error(l(418));
          t = Jn(n.nextSibling);
          var r = qt;
          t && lc(e, t) ? ac(r, n) : (e.flags = e.flags & -4097 | 2, ot = !1, qt = e);
        }
      } else {
        if (xl(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, ot = !1, qt = e;
      }
    }
  }
  function oc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    qt = e;
  }
  function Vr(e) {
    if (e !== qt) return !1;
    if (!ot) return oc(e), ot = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hl(e.type, e.memoizedProps)), t && (t = en)) {
      if (xl(e)) throw uc(), Error(l(418));
      for (; t; ) ac(e, t), t = Jn(t.nextSibling);
    }
    if (oc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                en = Jn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        en = null;
      }
    } else en = qt ? Jn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function uc() {
    for (var e = en; e; ) e = Jn(e.nextSibling);
  }
  function Wi() {
    en = qt = null, ot = !1;
  }
  function Sl(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  var Om = V.ReactCurrentBatchConfig;
  function Is(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(l(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(l(147, e));
        var o = r, c = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c ? t.ref : (t = function(m) {
          var g = o.refs;
          m === null ? delete g[c] : g[c] = m;
        }, t._stringRef = c, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Kr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function cc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function dc(e) {
    function t(A, M) {
      if (e) {
        var R = A.deletions;
        R === null ? (A.deletions = [M], A.flags |= 16) : R.push(M);
      }
    }
    function n(A, M) {
      if (!e) return null;
      for (; M !== null; ) t(A, M), M = M.sibling;
      return null;
    }
    function r(A, M) {
      for (A = /* @__PURE__ */ new Map(); M !== null; ) M.key !== null ? A.set(M.key, M) : A.set(M.index, M), M = M.sibling;
      return A;
    }
    function o(A, M) {
      return A = li(A, M), A.index = 0, A.sibling = null, A;
    }
    function c(A, M, R) {
      return A.index = R, e ? (R = A.alternate, R !== null ? (R = R.index, R < M ? (A.flags |= 2, M) : R) : (A.flags |= 2, M)) : (A.flags |= 1048576, M);
    }
    function m(A) {
      return e && A.alternate === null && (A.flags |= 2), A;
    }
    function g(A, M, R, ae) {
      return M === null || M.tag !== 6 ? (M = mo(R, A.mode, ae), M.return = A, M) : (M = o(M, R), M.return = A, M);
    }
    function N(A, M, R, ae) {
      var Te = R.type;
      return Te === O ? Z(A, M, R.props.children, ae, R.key) : M !== null && (M.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === le && cc(Te) === M.type) ? (ae = o(M, R.props), ae.ref = Is(A, M, R), ae.return = A, ae) : (ae = fa(R.type, R.key, R.props, null, A.mode, ae), ae.ref = Is(A, M, R), ae.return = A, ae);
    }
    function $(A, M, R, ae) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== R.containerInfo || M.stateNode.implementation !== R.implementation ? (M = po(R, A.mode, ae), M.return = A, M) : (M = o(M, R.children || []), M.return = A, M);
    }
    function Z(A, M, R, ae, Te) {
      return M === null || M.tag !== 7 ? (M = Ti(R, A.mode, ae, Te), M.return = A, M) : (M = o(M, R), M.return = A, M);
    }
    function ee(A, M, R) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return M = mo("" + M, A.mode, R), M.return = A, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case B:
            return R = fa(M.type, M.key, M.props, null, A.mode, R), R.ref = Is(A, null, M), R.return = A, R;
          case D:
            return M = po(M, A.mode, R), M.return = A, M;
          case le:
            var ae = M._init;
            return ee(A, ae(M._payload), R);
        }
        if (Xe(M) || oe(M)) return M = Ti(M, A.mode, R, null), M.return = A, M;
        Kr(A, M);
      }
      return null;
    }
    function X(A, M, R, ae) {
      var Te = M !== null ? M.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return Te !== null ? null : g(A, M, "" + R, ae);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case B:
            return R.key === Te ? N(A, M, R, ae) : null;
          case D:
            return R.key === Te ? $(A, M, R, ae) : null;
          case le:
            return Te = R._init, X(
              A,
              M,
              Te(R._payload),
              ae
            );
        }
        if (Xe(R) || oe(R)) return Te !== null ? null : Z(A, M, R, ae, null);
        Kr(A, R);
      }
      return null;
    }
    function me(A, M, R, ae, Te) {
      if (typeof ae == "string" && ae !== "" || typeof ae == "number") return A = A.get(R) || null, g(M, A, "" + ae, Te);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case B:
            return A = A.get(ae.key === null ? R : ae.key) || null, N(M, A, ae, Te);
          case D:
            return A = A.get(ae.key === null ? R : ae.key) || null, $(M, A, ae, Te);
          case le:
            var Ae = ae._init;
            return me(A, M, R, Ae(ae._payload), Te);
        }
        if (Xe(ae) || oe(ae)) return A = A.get(R) || null, Z(M, A, ae, Te, null);
        Kr(M, ae);
      }
      return null;
    }
    function je(A, M, R, ae) {
      for (var Te = null, Ae = null, Le = M, Re = M = 0, Ct = null; Le !== null && Re < R.length; Re++) {
        Le.index > Re ? (Ct = Le, Le = null) : Ct = Le.sibling;
        var Ye = X(A, Le, R[Re], ae);
        if (Ye === null) {
          Le === null && (Le = Ct);
          break;
        }
        e && Le && Ye.alternate === null && t(A, Le), M = c(Ye, M, Re), Ae === null ? Te = Ye : Ae.sibling = Ye, Ae = Ye, Le = Ct;
      }
      if (Re === R.length) return n(A, Le), ot && gi(A, Re), Te;
      if (Le === null) {
        for (; Re < R.length; Re++) Le = ee(A, R[Re], ae), Le !== null && (M = c(Le, M, Re), Ae === null ? Te = Le : Ae.sibling = Le, Ae = Le);
        return ot && gi(A, Re), Te;
      }
      for (Le = r(A, Le); Re < R.length; Re++) Ct = me(Le, A, Re, R[Re], ae), Ct !== null && (e && Ct.alternate !== null && Le.delete(Ct.key === null ? Re : Ct.key), M = c(Ct, M, Re), Ae === null ? Te = Ct : Ae.sibling = Ct, Ae = Ct);
      return e && Le.forEach(function(oi) {
        return t(A, oi);
      }), ot && gi(A, Re), Te;
    }
    function Ne(A, M, R, ae) {
      var Te = oe(R);
      if (typeof Te != "function") throw Error(l(150));
      if (R = Te.call(R), R == null) throw Error(l(151));
      for (var Ae = Te = null, Le = M, Re = M = 0, Ct = null, Ye = R.next(); Le !== null && !Ye.done; Re++, Ye = R.next()) {
        Le.index > Re ? (Ct = Le, Le = null) : Ct = Le.sibling;
        var oi = X(A, Le, Ye.value, ae);
        if (oi === null) {
          Le === null && (Le = Ct);
          break;
        }
        e && Le && oi.alternate === null && t(A, Le), M = c(oi, M, Re), Ae === null ? Te = oi : Ae.sibling = oi, Ae = oi, Le = Ct;
      }
      if (Ye.done) return n(
        A,
        Le
      ), ot && gi(A, Re), Te;
      if (Le === null) {
        for (; !Ye.done; Re++, Ye = R.next()) Ye = ee(A, Ye.value, ae), Ye !== null && (M = c(Ye, M, Re), Ae === null ? Te = Ye : Ae.sibling = Ye, Ae = Ye);
        return ot && gi(A, Re), Te;
      }
      for (Le = r(A, Le); !Ye.done; Re++, Ye = R.next()) Ye = me(Le, A, Re, Ye.value, ae), Ye !== null && (e && Ye.alternate !== null && Le.delete(Ye.key === null ? Re : Ye.key), M = c(Ye, M, Re), Ae === null ? Te = Ye : Ae.sibling = Ye, Ae = Ye);
      return e && Le.forEach(function(mp) {
        return t(A, mp);
      }), ot && gi(A, Re), Te;
    }
    function yt(A, M, R, ae) {
      if (typeof R == "object" && R !== null && R.type === O && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case B:
            e: {
              for (var Te = R.key, Ae = M; Ae !== null; ) {
                if (Ae.key === Te) {
                  if (Te = R.type, Te === O) {
                    if (Ae.tag === 7) {
                      n(A, Ae.sibling), M = o(Ae, R.props.children), M.return = A, A = M;
                      break e;
                    }
                  } else if (Ae.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === le && cc(Te) === Ae.type) {
                    n(A, Ae.sibling), M = o(Ae, R.props), M.ref = Is(A, Ae, R), M.return = A, A = M;
                    break e;
                  }
                  n(A, Ae);
                  break;
                } else t(A, Ae);
                Ae = Ae.sibling;
              }
              R.type === O ? (M = Ti(R.props.children, A.mode, ae, R.key), M.return = A, A = M) : (ae = fa(R.type, R.key, R.props, null, A.mode, ae), ae.ref = Is(A, M, R), ae.return = A, A = ae);
            }
            return m(A);
          case D:
            e: {
              for (Ae = R.key; M !== null; ) {
                if (M.key === Ae) if (M.tag === 4 && M.stateNode.containerInfo === R.containerInfo && M.stateNode.implementation === R.implementation) {
                  n(A, M.sibling), M = o(M, R.children || []), M.return = A, A = M;
                  break e;
                } else {
                  n(A, M);
                  break;
                }
                else t(A, M);
                M = M.sibling;
              }
              M = po(R, A.mode, ae), M.return = A, A = M;
            }
            return m(A);
          case le:
            return Ae = R._init, yt(A, M, Ae(R._payload), ae);
        }
        if (Xe(R)) return je(A, M, R, ae);
        if (oe(R)) return Ne(A, M, R, ae);
        Kr(A, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, M !== null && M.tag === 6 ? (n(A, M.sibling), M = o(M, R), M.return = A, A = M) : (n(A, M), M = mo(R, A.mode, ae), M.return = A, A = M), m(A)) : n(A, M);
    }
    return yt;
  }
  var Yi = dc(!0), hc = dc(!1), Ur = Xn(null), Hr = null, Qi = null, wl = null;
  function El() {
    wl = Qi = Hr = null;
  }
  function Nl(e) {
    var t = Ur.current;
    lt(Ur), e._currentValue = t;
  }
  function Cl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ji(e, t) {
    Hr = e, wl = Qi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Wt = !0), e.firstContext = null);
  }
  function on(e) {
    var t = e._currentValue;
    if (wl !== e) if (e = { context: e, memoizedValue: t, next: null }, Qi === null) {
      if (Hr === null) throw Error(l(308));
      Qi = e, Hr.dependencies = { lanes: 0, firstContext: e };
    } else Qi = Qi.next = e;
    return t;
  }
  var xi = null;
  function Tl(e) {
    xi === null ? xi = [e] : xi.push(e);
  }
  function fc(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Tl(t)) : (n.next = o.next, o.next = n), t.interleaved = n, On(e, r);
  }
  function On(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var ei = !1;
  function Ml(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function mc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function $n(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ti(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Ue & 2) !== 0) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, On(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, Tl(r)) : (t.next = o.next, o.next = t), r.interleaved = t, On(e, n);
  }
  function Gr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Va(e, n);
    }
  }
  function pc(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var o = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          c === null ? o = c = m : c = c.next = m, n = n.next;
        } while (n !== null);
        c === null ? o = c = t : c = c.next = t;
      } else o = c = t;
      n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: c, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Wr(e, t, n, r) {
    var o = e.updateQueue;
    ei = !1;
    var c = o.firstBaseUpdate, m = o.lastBaseUpdate, g = o.shared.pending;
    if (g !== null) {
      o.shared.pending = null;
      var N = g, $ = N.next;
      N.next = null, m === null ? c = $ : m.next = $, m = N;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, g = Z.lastBaseUpdate, g !== m && (g === null ? Z.firstBaseUpdate = $ : g.next = $, Z.lastBaseUpdate = N));
    }
    if (c !== null) {
      var ee = o.baseState;
      m = 0, Z = $ = N = null, g = c;
      do {
        var X = g.lane, me = g.eventTime;
        if ((r & X) === X) {
          Z !== null && (Z = Z.next = {
            eventTime: me,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var je = e, Ne = g;
            switch (X = t, me = n, Ne.tag) {
              case 1:
                if (je = Ne.payload, typeof je == "function") {
                  ee = je.call(me, ee, X);
                  break e;
                }
                ee = je;
                break e;
              case 3:
                je.flags = je.flags & -65537 | 128;
              case 0:
                if (je = Ne.payload, X = typeof je == "function" ? je.call(me, ee, X) : je, X == null) break e;
                ee = se({}, ee, X);
                break e;
              case 2:
                ei = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, X = o.effects, X === null ? o.effects = [g] : X.push(g));
        } else me = { eventTime: me, lane: X, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, Z === null ? ($ = Z = me, N = ee) : Z = Z.next = me, m |= X;
        if (g = g.next, g === null) {
          if (g = o.shared.pending, g === null) break;
          X = g, g = X.next, X.next = null, o.lastBaseUpdate = X, o.shared.pending = null;
        }
      } while (!0);
      if (Z === null && (N = ee), o.baseState = N, o.firstBaseUpdate = $, o.lastBaseUpdate = Z, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          m |= o.lane, o = o.next;
        while (o !== t);
      } else c === null && (o.shared.lanes = 0);
      wi |= m, e.lanes = m, e.memoizedState = ee;
    }
  }
  function vc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(l(191, o));
        o.call(r);
      }
    }
  }
  var Fs = {}, wn = Xn(Fs), Ds = Xn(Fs), zs = Xn(Fs);
  function ji(e) {
    if (e === Fs) throw Error(l(174));
    return e;
  }
  function _l(e, t) {
    switch (nt(zs, t), nt(Ds, e), nt(wn, Fs), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Vt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Vt(t, e);
    }
    lt(wn), nt(wn, t);
  }
  function Xi() {
    lt(wn), lt(Ds), lt(zs);
  }
  function kc(e) {
    ji(zs.current);
    var t = ji(wn.current), n = Vt(t, e.type);
    t !== n && (nt(Ds, e), nt(wn, n));
  }
  function bl(e) {
    Ds.current === e && (lt(wn), lt(Ds));
  }
  var ft = Xn(0);
  function Yr(e) {
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
  var Pl = [];
  function Al() {
    for (var e = 0; e < Pl.length; e++) Pl[e]._workInProgressVersionPrimary = null;
    Pl.length = 0;
  }
  var Qr = V.ReactCurrentDispatcher, Ll = V.ReactCurrentBatchConfig, Si = 0, mt = null, xt = null, Et = null, Jr = !1, Bs = !1, Vs = 0, $m = 0;
  function Rt() {
    throw Error(l(321));
  }
  function Rl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!mn(e[n], t[n])) return !1;
    return !0;
  }
  function Ol(e, t, n, r, o, c) {
    if (Si = c, mt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qr.current = e === null || e.memoizedState === null ? zm : Bm, e = n(r, o), Bs) {
      c = 0;
      do {
        if (Bs = !1, Vs = 0, 25 <= c) throw Error(l(301));
        c += 1, Et = xt = null, t.updateQueue = null, Qr.current = Vm, e = n(r, o);
      } while (Bs);
    }
    if (Qr.current = qr, t = xt !== null && xt.next !== null, Si = 0, Et = xt = mt = null, Jr = !1, t) throw Error(l(300));
    return e;
  }
  function $l() {
    var e = Vs !== 0;
    return Vs = 0, e;
  }
  function En() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Et === null ? mt.memoizedState = Et = e : Et = Et.next = e, Et;
  }
  function un() {
    if (xt === null) {
      var e = mt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xt.next;
    var t = Et === null ? mt.memoizedState : Et.next;
    if (t !== null) Et = t, xt = e;
    else {
      if (e === null) throw Error(l(310));
      xt = e, e = { memoizedState: xt.memoizedState, baseState: xt.baseState, baseQueue: xt.baseQueue, queue: xt.queue, next: null }, Et === null ? mt.memoizedState = Et = e : Et = Et.next = e;
    }
    return Et;
  }
  function Ks(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Il(e) {
    var t = un(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = xt, o = r.baseQueue, c = n.pending;
    if (c !== null) {
      if (o !== null) {
        var m = o.next;
        o.next = c.next, c.next = m;
      }
      r.baseQueue = o = c, n.pending = null;
    }
    if (o !== null) {
      c = o.next, r = r.baseState;
      var g = m = null, N = null, $ = c;
      do {
        var Z = $.lane;
        if ((Si & Z) === Z) N !== null && (N = N.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), r = $.hasEagerState ? $.eagerState : e(r, $.action);
        else {
          var ee = {
            lane: Z,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          N === null ? (g = N = ee, m = r) : N = N.next = ee, mt.lanes |= Z, wi |= Z;
        }
        $ = $.next;
      } while ($ !== null && $ !== c);
      N === null ? m = r : N.next = g, mn(r, t.memoizedState) || (Wt = !0), t.memoizedState = r, t.baseState = m, t.baseQueue = N, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        c = o.lane, mt.lanes |= c, wi |= c, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Fl(e) {
    var t = un(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, c = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var m = o = o.next;
      do
        c = e(c, m.action), m = m.next;
      while (m !== o);
      mn(c, t.memoizedState) || (Wt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, r];
  }
  function yc() {
  }
  function gc(e, t) {
    var n = mt, r = un(), o = t(), c = !mn(r.memoizedState, o);
    if (c && (r.memoizedState = o, Wt = !0), r = r.queue, Dl(Sc.bind(null, n, r, e), [e]), r.getSnapshot !== t || c || Et !== null && Et.memoizedState.tag & 1) {
      if (n.flags |= 2048, Us(9, jc.bind(null, n, r, o, t), void 0, null), Nt === null) throw Error(l(349));
      (Si & 30) !== 0 || xc(n, t, o);
    }
    return o;
  }
  function xc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function jc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, wc(t) && Ec(e);
  }
  function Sc(e, t, n) {
    return n(function() {
      wc(t) && Ec(e);
    });
  }
  function wc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mn(e, n);
    } catch {
      return !0;
    }
  }
  function Ec(e) {
    var t = On(e, 1);
    t !== null && gn(t, e, 1, -1);
  }
  function Nc(e) {
    var t = En();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ks, lastRenderedState: e }, t.queue = e, e = e.dispatch = Dm.bind(null, mt, e), [t.memoizedState, e];
  }
  function Us(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Cc() {
    return un().memoizedState;
  }
  function Xr(e, t, n, r) {
    var o = En();
    mt.flags |= e, o.memoizedState = Us(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Zr(e, t, n, r) {
    var o = un();
    r = r === void 0 ? null : r;
    var c = void 0;
    if (xt !== null) {
      var m = xt.memoizedState;
      if (c = m.destroy, r !== null && Rl(r, m.deps)) {
        o.memoizedState = Us(t, n, c, r);
        return;
      }
    }
    mt.flags |= e, o.memoizedState = Us(1 | t, n, c, r);
  }
  function Tc(e, t) {
    return Xr(8390656, 8, e, t);
  }
  function Dl(e, t) {
    return Zr(2048, 8, e, t);
  }
  function Mc(e, t) {
    return Zr(4, 2, e, t);
  }
  function _c(e, t) {
    return Zr(4, 4, e, t);
  }
  function bc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Pc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Zr(4, 4, bc.bind(null, t, e), n);
  }
  function zl() {
  }
  function Ac(e, t) {
    var n = un();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Rl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Lc(e, t) {
    var n = un();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Rl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Rc(e, t, n) {
    return (Si & 21) === 0 ? (e.baseState && (e.baseState = !1, Wt = !0), e.memoizedState = n) : (mn(n, t) || (n = cu(), mt.lanes |= n, wi |= n, e.baseState = !0), t);
  }
  function Im(e, t) {
    var n = qe;
    qe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ll.transition;
    Ll.transition = {};
    try {
      e(!1), t();
    } finally {
      qe = n, Ll.transition = r;
    }
  }
  function Oc() {
    return un().memoizedState;
  }
  function Fm(e, t, n) {
    var r = ri(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $c(e)) Ic(t, n);
    else if (n = fc(e, t, n, r), n !== null) {
      var o = zt();
      gn(n, e, r, o), Fc(n, t, r);
    }
  }
  function Dm(e, t, n) {
    var r = ri(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if ($c(e)) Ic(t, o);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
        var m = t.lastRenderedState, g = c(m, n);
        if (o.hasEagerState = !0, o.eagerState = g, mn(g, m)) {
          var N = t.interleaved;
          N === null ? (o.next = o, Tl(t)) : (o.next = N.next, N.next = o), t.interleaved = o;
          return;
        }
      } catch {
      }
      n = fc(e, t, o, r), n !== null && (o = zt(), gn(n, e, r, o), Fc(n, t, r));
    }
  }
  function $c(e) {
    var t = e.alternate;
    return e === mt || t !== null && t === mt;
  }
  function Ic(e, t) {
    Bs = Jr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Fc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Va(e, n);
    }
  }
  var qr = { readContext: on, useCallback: Rt, useContext: Rt, useEffect: Rt, useImperativeHandle: Rt, useInsertionEffect: Rt, useLayoutEffect: Rt, useMemo: Rt, useReducer: Rt, useRef: Rt, useState: Rt, useDebugValue: Rt, useDeferredValue: Rt, useTransition: Rt, useMutableSource: Rt, useSyncExternalStore: Rt, useId: Rt, unstable_isNewReconciler: !1 }, zm = { readContext: on, useCallback: function(e, t) {
    return En().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: on, useEffect: Tc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Xr(
      4194308,
      4,
      bc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Xr(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Xr(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = En();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = En();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fm.bind(null, mt, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = En();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Nc, useDebugValue: zl, useDeferredValue: function(e) {
    return En().memoizedState = e;
  }, useTransition: function() {
    var e = Nc(!1), t = e[0];
    return e = Im.bind(null, e[1]), En().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = mt, o = En();
    if (ot) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), Nt === null) throw Error(l(349));
      (Si & 30) !== 0 || xc(r, t, n);
    }
    o.memoizedState = n;
    var c = { value: n, getSnapshot: t };
    return o.queue = c, Tc(Sc.bind(
      null,
      r,
      c,
      e
    ), [e]), r.flags |= 2048, Us(9, jc.bind(null, r, c, n, t), void 0, null), n;
  }, useId: function() {
    var e = En(), t = Nt.identifierPrefix;
    if (ot) {
      var n = Rn, r = Ln;
      n = (r & ~(1 << 32 - Mt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Vs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = $m++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Bm = {
    readContext: on,
    useCallback: Ac,
    useContext: on,
    useEffect: Dl,
    useImperativeHandle: Pc,
    useInsertionEffect: Mc,
    useLayoutEffect: _c,
    useMemo: Lc,
    useReducer: Il,
    useRef: Cc,
    useState: function() {
      return Il(Ks);
    },
    useDebugValue: zl,
    useDeferredValue: function(e) {
      var t = un();
      return Rc(t, xt.memoizedState, e);
    },
    useTransition: function() {
      var e = Il(Ks)[0], t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: yc,
    useSyncExternalStore: gc,
    useId: Oc,
    unstable_isNewReconciler: !1
  }, Vm = { readContext: on, useCallback: Ac, useContext: on, useEffect: Dl, useImperativeHandle: Pc, useInsertionEffect: Mc, useLayoutEffect: _c, useMemo: Lc, useReducer: Fl, useRef: Cc, useState: function() {
    return Fl(Ks);
  }, useDebugValue: zl, useDeferredValue: function(e) {
    var t = un();
    return xt === null ? t.memoizedState = e : Rc(t, xt.memoizedState, e);
  }, useTransition: function() {
    var e = Fl(Ks)[0], t = un().memoizedState;
    return [e, t];
  }, useMutableSource: yc, useSyncExternalStore: gc, useId: Oc, unstable_isNewReconciler: !1 };
  function vn(e, t) {
    if (e && e.defaultProps) {
      t = se({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Bl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ea = { isMounted: function(e) {
    return (e = e._reactInternals) ? bn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = zt(), o = ri(e), c = $n(r, o);
    c.payload = t, n != null && (c.callback = n), t = ti(e, c, o), t !== null && (gn(t, e, o, r), Gr(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = zt(), o = ri(e), c = $n(r, o);
    c.tag = 1, c.payload = t, n != null && (c.callback = n), t = ti(e, c, o), t !== null && (gn(t, e, o, r), Gr(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = zt(), r = ri(e), o = $n(n, r);
    o.tag = 2, t != null && (o.callback = t), t = ti(e, o, r), t !== null && (gn(t, e, r, n), Gr(t, e, r));
  } };
  function Dc(e, t, n, r, o, c, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, m) : t.prototype && t.prototype.isPureReactComponent ? !bs(n, r) || !bs(o, c) : !0;
  }
  function zc(e, t, n) {
    var r = !1, o = Zn, c = t.contextType;
    return typeof c == "object" && c !== null ? c = on(c) : (o = Gt(t) ? ki : Lt.current, r = t.contextTypes, c = (r = r != null) ? Ui(e, o) : Zn), t = new t(n, c), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ea, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = c), t;
  }
  function Bc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ea.enqueueReplaceState(t, t.state, null);
  }
  function Vl(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Ml(e);
    var c = t.contextType;
    typeof c == "object" && c !== null ? o.context = on(c) : (c = Gt(t) ? ki : Lt.current, o.context = Ui(e, c)), o.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (Bl(e, t, c, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ea.enqueueReplaceState(o, o.state, null), Wr(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Zi(e, t) {
    try {
      var n = "", r = t;
      do
        n += be(r), r = r.return;
      while (r);
      var o = n;
    } catch (c) {
      o = `
Error generating stack: ` + c.message + `
` + c.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Kl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ul(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Km = typeof WeakMap == "function" ? WeakMap : Map;
  function Vc(e, t, n) {
    n = $n(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      la || (la = !0, ro = r), Ul(e, t);
    }, n;
  }
  function Kc(e, t, n) {
    n = $n(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
        return r(o);
      }, n.callback = function() {
        Ul(e, t);
      };
    }
    var c = e.stateNode;
    return c !== null && typeof c.componentDidCatch == "function" && (n.callback = function() {
      Ul(e, t), typeof r != "function" && (ii === null ? ii = /* @__PURE__ */ new Set([this]) : ii.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), n;
  }
  function Uc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Km();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = ip.bind(null, e, t, n), t.then(e, e));
  }
  function Hc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Gc(e, t, n, r, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $n(-1, 1), t.tag = 2, ti(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var Um = V.ReactCurrentOwner, Wt = !1;
  function Dt(e, t, n, r) {
    t.child = e === null ? hc(t, null, n, r) : Yi(t, e.child, n, r);
  }
  function Wc(e, t, n, r, o) {
    n = n.render;
    var c = t.ref;
    return Ji(t, o), r = Ol(e, t, n, r, c, o), n = $l(), e !== null && !Wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, In(e, t, o)) : (ot && n && yl(t), t.flags |= 1, Dt(e, t, r, o), t.child);
  }
  function Yc(e, t, n, r, o) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !fo(c) && c.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = c, Qc(e, t, c, r, o)) : (e = fa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, (e.lanes & o) === 0) {
      var m = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : bs, n(m, r) && e.ref === t.ref) return In(e, t, o);
    }
    return t.flags |= 1, e = li(c, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Qc(e, t, n, r, o) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (bs(c, r) && e.ref === t.ref) if (Wt = !1, t.pendingProps = r = c, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (Wt = !0);
      else return t.lanes = e.lanes, In(e, t, o);
    }
    return Hl(e, t, n, r, o);
  }
  function Jc(e, t, n) {
    var r = t.pendingProps, o = r.children, c = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nt(es, tn), tn |= n;
    else {
      if ((n & 1073741824) === 0) return e = c !== null ? c.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, nt(es, tn), tn |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = c !== null ? c.baseLanes : n, nt(es, tn), tn |= r;
    }
    else c !== null ? (r = c.baseLanes | n, t.memoizedState = null) : r = n, nt(es, tn), tn |= r;
    return Dt(e, t, o, n), t.child;
  }
  function Xc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Hl(e, t, n, r, o) {
    var c = Gt(n) ? ki : Lt.current;
    return c = Ui(t, c), Ji(t, o), n = Ol(e, t, n, r, c, o), r = $l(), e !== null && !Wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, In(e, t, o)) : (ot && r && yl(t), t.flags |= 1, Dt(e, t, n, o), t.child);
  }
  function Zc(e, t, n, r, o) {
    if (Gt(n)) {
      var c = !0;
      Fr(t);
    } else c = !1;
    if (Ji(t, o), t.stateNode === null) na(e, t), zc(t, n, r), Vl(t, n, r, o), r = !0;
    else if (e === null) {
      var m = t.stateNode, g = t.memoizedProps;
      m.props = g;
      var N = m.context, $ = n.contextType;
      typeof $ == "object" && $ !== null ? $ = on($) : ($ = Gt(n) ? ki : Lt.current, $ = Ui(t, $));
      var Z = n.getDerivedStateFromProps, ee = typeof Z == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      ee || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (g !== r || N !== $) && Bc(t, m, r, $), ei = !1;
      var X = t.memoizedState;
      m.state = X, Wr(t, r, m, o), N = t.memoizedState, g !== r || X !== N || Ht.current || ei ? (typeof Z == "function" && (Bl(t, n, Z, r), N = t.memoizedState), (g = ei || Dc(t, n, g, r, X, N, $)) ? (ee || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = N), m.props = r, m.state = N, m.context = $, r = g) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      m = t.stateNode, mc(e, t), g = t.memoizedProps, $ = t.type === t.elementType ? g : vn(t.type, g), m.props = $, ee = t.pendingProps, X = m.context, N = n.contextType, typeof N == "object" && N !== null ? N = on(N) : (N = Gt(n) ? ki : Lt.current, N = Ui(t, N));
      var me = n.getDerivedStateFromProps;
      (Z = typeof me == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (g !== ee || X !== N) && Bc(t, m, r, N), ei = !1, X = t.memoizedState, m.state = X, Wr(t, r, m, o);
      var je = t.memoizedState;
      g !== ee || X !== je || Ht.current || ei ? (typeof me == "function" && (Bl(t, n, me, r), je = t.memoizedState), ($ = ei || Dc(t, n, $, r, X, je, N) || !1) ? (Z || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(r, je, N), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(r, je, N)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = je), m.props = r, m.state = je, m.context = N, r = $) : (typeof m.componentDidUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Gl(e, t, n, r, c, o);
  }
  function Gl(e, t, n, r, o, c) {
    Xc(e, t);
    var m = (t.flags & 128) !== 0;
    if (!r && !m) return o && ic(t, n, !1), In(e, t, c);
    r = t.stateNode, Um.current = t;
    var g = m && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && m ? (t.child = Yi(t, e.child, null, c), t.child = Yi(t, null, g, c)) : Dt(e, t, g, c), t.memoizedState = r.state, o && ic(t, n, !0), t.child;
  }
  function qc(e) {
    var t = e.stateNode;
    t.pendingContext ? tc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tc(e, t.context, !1), _l(e, t.containerInfo);
  }
  function ed(e, t, n, r, o) {
    return Wi(), Sl(o), t.flags |= 256, Dt(e, t, n, r), t.child;
  }
  var Wl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function td(e, t, n) {
    var r = t.pendingProps, o = ft.current, c = !1, m = (t.flags & 128) !== 0, g;
    if ((g = m) || (g = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), g ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), nt(ft, o & 1), e === null)
      return jl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = r.children, e = r.fallback, c ? (r = t.mode, c = t.child, m = { mode: "hidden", children: m }, (r & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = m) : c = ma(m, r, 0, null), e = Ti(e, r, n, null), c.return = t, e.return = t, c.sibling = e, t.child = c, t.child.memoizedState = Yl(n), t.memoizedState = Wl, e) : Ql(t, m));
    if (o = e.memoizedState, o !== null && (g = o.dehydrated, g !== null)) return Hm(e, t, m, r, g, o, n);
    if (c) {
      c = r.fallback, m = t.mode, o = e.child, g = o.sibling;
      var N = { mode: "hidden", children: r.children };
      return (m & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = N, t.deletions = null) : (r = li(o, N), r.subtreeFlags = o.subtreeFlags & 14680064), g !== null ? c = li(g, c) : (c = Ti(c, m, n, null), c.flags |= 2), c.return = t, r.return = t, r.sibling = c, t.child = r, r = c, c = t.child, m = e.child.memoizedState, m = m === null ? Yl(n) : { baseLanes: m.baseLanes | n, cachePool: null, transitions: m.transitions }, c.memoizedState = m, c.childLanes = e.childLanes & ~n, t.memoizedState = Wl, r;
    }
    return c = e.child, e = c.sibling, r = li(c, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ql(e, t) {
    return t = ma({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ta(e, t, n, r) {
    return r !== null && Sl(r), Yi(t, e.child, null, n), e = Ql(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Hm(e, t, n, r, o, c, m) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Kl(Error(l(422))), ta(e, t, m, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (c = r.fallback, o = t.mode, r = ma({ mode: "visible", children: r.children }, o, 0, null), c = Ti(c, o, m, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, (t.mode & 1) !== 0 && Yi(t, e.child, null, m), t.child.memoizedState = Yl(m), t.memoizedState = Wl, c);
    if ((t.mode & 1) === 0) return ta(e, t, m, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r) var g = r.dgst;
      return r = g, c = Error(l(419)), r = Kl(c, r, void 0), ta(e, t, m, r);
    }
    if (g = (m & e.childLanes) !== 0, Wt || g) {
      if (r = Nt, r !== null) {
        switch (m & -m) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
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
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = (o & (r.suspendedLanes | m)) !== 0 ? 0 : o, o !== 0 && o !== c.retryLane && (c.retryLane = o, On(e, o), gn(r, e, o, -1));
      }
      return ho(), r = Kl(Error(l(421))), ta(e, t, m, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sp.bind(null, e), o._reactRetry = t, null) : (e = c.treeContext, en = Jn(o.nextSibling), qt = t, ot = !0, pn = null, e !== null && (an[ln++] = Ln, an[ln++] = Rn, an[ln++] = yi, Ln = e.id, Rn = e.overflow, yi = t), t = Ql(t, r.children), t.flags |= 4096, t);
  }
  function nd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Cl(e.return, t, n);
  }
  function Jl(e, t, n, r, o) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = r, c.tail = n, c.tailMode = o);
  }
  function id(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, c = r.tail;
    if (Dt(e, t, r.children, n), r = ft.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && nd(e, n, t);
        else if (e.tag === 19) nd(e, n, t);
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
    if (nt(ft, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Yr(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Jl(t, !1, o, n, c);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Yr(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Jl(t, !0, n, null, c);
        break;
      case "together":
        Jl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function na(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function In(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), wi |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = li(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = li(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Gm(e, t, n) {
    switch (t.tag) {
      case 3:
        qc(t), Wi();
        break;
      case 5:
        kc(t);
        break;
      case 1:
        Gt(t.type) && Fr(t);
        break;
      case 4:
        _l(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        nt(Ur, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (nt(ft, ft.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? td(e, t, n) : (nt(ft, ft.current & 1), e = In(e, t, n), e !== null ? e.sibling : null);
        nt(ft, ft.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return id(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), nt(ft, ft.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Jc(e, t, n);
    }
    return In(e, t, n);
  }
  var sd, Xl, rd, ad;
  sd = function(e, t) {
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
  }, Xl = function() {
  }, rd = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, ji(wn.current);
      var c = null;
      switch (n) {
        case "input":
          o = Ce(e, o), r = Ce(e, r), c = [];
          break;
        case "select":
          o = se({}, o, { value: void 0 }), r = se({}, r, { value: void 0 }), c = [];
          break;
        case "textarea":
          o = pt(e, o), r = pt(e, r), c = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Or);
      }
      Y(n, r);
      var m;
      n = null;
      for ($ in o) if (!r.hasOwnProperty($) && o.hasOwnProperty($) && o[$] != null) if ($ === "style") {
        var g = o[$];
        for (m in g) g.hasOwnProperty(m) && (n || (n = {}), n[m] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (d.hasOwnProperty($) ? c || (c = []) : (c = c || []).push($, null));
      for ($ in r) {
        var N = r[$];
        if (g = o?.[$], r.hasOwnProperty($) && N !== g && (N != null || g != null)) if ($ === "style") if (g) {
          for (m in g) !g.hasOwnProperty(m) || N && N.hasOwnProperty(m) || (n || (n = {}), n[m] = "");
          for (m in N) N.hasOwnProperty(m) && g[m] !== N[m] && (n || (n = {}), n[m] = N[m]);
        } else n || (c || (c = []), c.push(
          $,
          n
        )), n = N;
        else $ === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, g = g ? g.__html : void 0, N != null && g !== N && (c = c || []).push($, N)) : $ === "children" ? typeof N != "string" && typeof N != "number" || (c = c || []).push($, "" + N) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (d.hasOwnProperty($) ? (N != null && $ === "onScroll" && at("scroll", e), c || g === N || (c = [])) : (c = c || []).push($, N));
      }
      n && (c = c || []).push("style", n);
      var $ = c;
      (t.updateQueue = $) && (t.flags |= 4);
    }
  }, ad = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Hs(e, t) {
    if (!ot) switch (e.tailMode) {
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
  function Ot(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Wm(e, t, n) {
    var r = t.pendingProps;
    switch (gl(t), t.tag) {
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
        return Ot(t), null;
      case 1:
        return Gt(t.type) && Ir(), Ot(t), null;
      case 3:
        return r = t.stateNode, Xi(), lt(Ht), lt(Lt), Al(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, pn !== null && (oo(pn), pn = null))), Xl(e, t), Ot(t), null;
      case 5:
        bl(t);
        var o = ji(zs.current);
        if (n = t.type, e !== null && t.stateNode != null) rd(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return Ot(t), null;
          }
          if (e = ji(wn.current), Vr(t)) {
            r = t.stateNode, n = t.type;
            var c = t.memoizedProps;
            switch (r[Sn] = t, r[Os] = c, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                at("cancel", r), at("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                at("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < As.length; o++) at(As[o], r);
                break;
              case "source":
                at("error", r);
                break;
              case "img":
              case "image":
              case "link":
                at(
                  "error",
                  r
                ), at("load", r);
                break;
              case "details":
                at("toggle", r);
                break;
              case "input":
                Se(r, c), at("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!c.multiple }, at("invalid", r);
                break;
              case "textarea":
                Ge(r, c), at("invalid", r);
            }
            Y(n, c), o = null;
            for (var m in c) if (c.hasOwnProperty(m)) {
              var g = c[m];
              m === "children" ? typeof g == "string" ? r.textContent !== g && (c.suppressHydrationWarning !== !0 && Rr(r.textContent, g, e), o = ["children", g]) : typeof g == "number" && r.textContent !== "" + g && (c.suppressHydrationWarning !== !0 && Rr(
                r.textContent,
                g,
                e
              ), o = ["children", "" + g]) : d.hasOwnProperty(m) && g != null && m === "onScroll" && at("scroll", r);
            }
            switch (n) {
              case "input":
                ye(r), Qe(r, c, !0);
                break;
              case "textarea":
                ye(r), et(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (r.onclick = Or);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            m = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ut(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = m.createElement(n, { is: r.is }) : (e = m.createElement(n), n === "select" && (m = e, r.multiple ? m.multiple = !0 : r.size && (m.size = r.size))) : e = m.createElementNS(e, n), e[Sn] = t, e[Os] = r, sd(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = fe(n, r), n) {
                case "dialog":
                  at("cancel", e), at("close", e), o = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  at("load", e), o = r;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < As.length; o++) at(As[o], e);
                  o = r;
                  break;
                case "source":
                  at("error", e), o = r;
                  break;
                case "img":
                case "image":
                case "link":
                  at(
                    "error",
                    e
                  ), at("load", e), o = r;
                  break;
                case "details":
                  at("toggle", e), o = r;
                  break;
                case "input":
                  Se(e, r), o = Ce(e, r), at("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, o = se({}, r, { value: void 0 }), at("invalid", e);
                  break;
                case "textarea":
                  Ge(e, r), o = pt(e, r), at("invalid", e);
                  break;
                default:
                  o = r;
              }
              Y(n, o), g = o;
              for (c in g) if (g.hasOwnProperty(c)) {
                var N = g[c];
                c === "style" ? I(e, N) : c === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && Kt(e, N)) : c === "children" ? typeof N == "string" ? (n !== "textarea" || N !== "") && It(e, N) : typeof N == "number" && It(e, "" + N) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (d.hasOwnProperty(c) ? N != null && c === "onScroll" && at("scroll", e) : N != null && U(e, c, N, m));
              }
              switch (n) {
                case "input":
                  ye(e), Qe(e, r, !1);
                  break;
                case "textarea":
                  ye(e), et(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + te(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, c = r.value, c != null ? it(e, !!r.multiple, c, !1) : r.defaultValue != null && it(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Or);
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
        return Ot(t), null;
      case 6:
        if (e && t.stateNode != null) ad(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(l(166));
          if (n = ji(zs.current), ji(wn.current), Vr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Sn] = t, (c = r.nodeValue !== n) && (e = qt, e !== null)) switch (e.tag) {
              case 3:
                Rr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Rr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            c && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Sn] = t, t.stateNode = r;
        }
        return Ot(t), null;
      case 13:
        if (lt(ft), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ot && en !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) uc(), Wi(), t.flags |= 98560, c = !1;
          else if (c = Vr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(l(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(l(317));
              c[Sn] = t;
            } else Wi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ot(t), c = !1;
          } else pn !== null && (oo(pn), pn = null), c = !0;
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ft.current & 1) !== 0 ? jt === 0 && (jt = 3) : ho())), t.updateQueue !== null && (t.flags |= 4), Ot(t), null);
      case 4:
        return Xi(), Xl(e, t), e === null && Ls(t.stateNode.containerInfo), Ot(t), null;
      case 10:
        return Nl(t.type._context), Ot(t), null;
      case 17:
        return Gt(t.type) && Ir(), Ot(t), null;
      case 19:
        if (lt(ft), c = t.memoizedState, c === null) return Ot(t), null;
        if (r = (t.flags & 128) !== 0, m = c.rendering, m === null) if (r) Hs(c, !1);
        else {
          if (jt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (m = Yr(e), m !== null) {
              for (t.flags |= 128, Hs(c, !1), r = m.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) c = n, e = r, c.flags &= 14680066, m = c.alternate, m === null ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = m.childLanes, c.lanes = m.lanes, c.child = m.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = m.memoizedProps, c.memoizedState = m.memoizedState, c.updateQueue = m.updateQueue, c.type = m.type, e = m.dependencies, c.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return nt(ft, ft.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          c.tail !== null && dt() > ts && (t.flags |= 128, r = !0, Hs(c, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Yr(m), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hs(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !ot) return Ot(t), null;
          } else 2 * dt() - c.renderingStartTime > ts && n !== 1073741824 && (t.flags |= 128, r = !0, Hs(c, !1), t.lanes = 4194304);
          c.isBackwards ? (m.sibling = t.child, t.child = m) : (n = c.last, n !== null ? n.sibling = m : t.child = m, c.last = m);
        }
        return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = dt(), t.sibling = null, n = ft.current, nt(ft, r ? n & 1 | 2 : n & 1), t) : (Ot(t), null);
      case 22:
      case 23:
        return co(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (tn & 1073741824) !== 0 && (Ot(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ot(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Ym(e, t) {
    switch (gl(t), t.tag) {
      case 1:
        return Gt(t.type) && Ir(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Xi(), lt(Ht), lt(Lt), Al(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return bl(t), null;
      case 13:
        if (lt(ft), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          Wi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return lt(ft), null;
      case 4:
        return Xi(), null;
      case 10:
        return Nl(t.type._context), null;
      case 22:
      case 23:
        return co(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ia = !1, $t = !1, Qm = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
  function qi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      vt(e, t, r);
    }
    else n.current = null;
  }
  function Zl(e, t, n) {
    try {
      n();
    } catch (r) {
      vt(e, t, r);
    }
  }
  var ld = !1;
  function Jm(e, t) {
    if (cl = wr, e = Du(), nl(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, c = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, c.nodeType;
          } catch {
            n = null;
            break e;
          }
          var m = 0, g = -1, N = -1, $ = 0, Z = 0, ee = e, X = null;
          t: for (; ; ) {
            for (var me; ee !== n || o !== 0 && ee.nodeType !== 3 || (g = m + o), ee !== c || r !== 0 && ee.nodeType !== 3 || (N = m + r), ee.nodeType === 3 && (m += ee.nodeValue.length), (me = ee.firstChild) !== null; )
              X = ee, ee = me;
            for (; ; ) {
              if (ee === e) break t;
              if (X === n && ++$ === o && (g = m), X === c && ++Z === r && (N = m), (me = ee.nextSibling) !== null) break;
              ee = X, X = ee.parentNode;
            }
            ee = me;
          }
          n = g === -1 || N === -1 ? null : { start: g, end: N };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (dl = { focusedElem: e, selectionRange: n }, wr = !1, ge = t; ge !== null; ) if (t = ge, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ge = e;
    else for (; ge !== null; ) {
      t = ge;
      try {
        var je = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (je !== null) {
              var Ne = je.memoizedProps, yt = je.memoizedState, A = t.stateNode, M = A.getSnapshotBeforeUpdate(t.elementType === t.type ? Ne : vn(t.type, Ne), yt);
              A.__reactInternalSnapshotBeforeUpdate = M;
            }
            break;
          case 3:
            var R = t.stateNode.containerInfo;
            R.nodeType === 1 ? R.textContent = "" : R.nodeType === 9 && R.documentElement && R.removeChild(R.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch (ae) {
        vt(t, t.return, ae);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ge = e;
        break;
      }
      ge = t.return;
    }
    return je = ld, ld = !1, je;
  }
  function Gs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var c = o.destroy;
          o.destroy = void 0, c !== void 0 && Zl(t, n, c);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function sa(e, t) {
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
  function ql(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function od(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, od(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Sn], delete t[Os], delete t[pl], delete t[Am], delete t[Lm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ud(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function cd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ud(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function eo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Or));
    else if (r !== 4 && (e = e.child, e !== null)) for (eo(e, t, n), e = e.sibling; e !== null; ) eo(e, t, n), e = e.sibling;
  }
  function to(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (to(e, t, n), e = e.sibling; e !== null; ) to(e, t, n), e = e.sibling;
  }
  var _t = null, kn = !1;
  function ni(e, t, n) {
    for (n = n.child; n !== null; ) dd(e, t, n), n = n.sibling;
  }
  function dd(e, t, n) {
    if (Ft && typeof Ft.onCommitFiberUnmount == "function") try {
      Ft.onCommitFiberUnmount(ht, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        $t || qi(n, t);
      case 6:
        var r = _t, o = kn;
        _t = null, ni(e, t, n), _t = r, kn = o, _t !== null && (kn ? (e = _t, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _t.removeChild(n.stateNode));
        break;
      case 18:
        _t !== null && (kn ? (e = _t, n = n.stateNode, e.nodeType === 8 ? ml(e.parentNode, n) : e.nodeType === 1 && ml(e, n), Es(e)) : ml(_t, n.stateNode));
        break;
      case 4:
        r = _t, o = kn, _t = n.stateNode.containerInfo, kn = !0, ni(e, t, n), _t = r, kn = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$t && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          o = r = r.next;
          do {
            var c = o, m = c.destroy;
            c = c.tag, m !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && Zl(n, t, m), o = o.next;
          } while (o !== r);
        }
        ni(e, t, n);
        break;
      case 1:
        if (!$t && (qi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (g) {
          vt(n, t, g);
        }
        ni(e, t, n);
        break;
      case 21:
        ni(e, t, n);
        break;
      case 22:
        n.mode & 1 ? ($t = (r = $t) || n.memoizedState !== null, ni(e, t, n), $t = r) : ni(e, t, n);
        break;
      default:
        ni(e, t, n);
    }
  }
  function hd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Qm()), t.forEach(function(r) {
        var o = rp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
    }
  }
  function yn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var c = e, m = t, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 5:
              _t = g.stateNode, kn = !1;
              break e;
            case 3:
              _t = g.stateNode.containerInfo, kn = !0;
              break e;
            case 4:
              _t = g.stateNode.containerInfo, kn = !0;
              break e;
          }
          g = g.return;
        }
        if (_t === null) throw Error(l(160));
        dd(c, m, o), _t = null, kn = !1;
        var N = o.alternate;
        N !== null && (N.return = null), o.return = null;
      } catch ($) {
        vt(o, t, $);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) fd(t, e), t = t.sibling;
  }
  function fd(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (yn(t, e), Nn(e), r & 4) {
          try {
            Gs(3, e, e.return), sa(3, e);
          } catch (Ne) {
            vt(e, e.return, Ne);
          }
          try {
            Gs(5, e, e.return);
          } catch (Ne) {
            vt(e, e.return, Ne);
          }
        }
        break;
      case 1:
        yn(t, e), Nn(e), r & 512 && n !== null && qi(n, n.return);
        break;
      case 5:
        if (yn(t, e), Nn(e), r & 512 && n !== null && qi(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            It(o, "");
          } catch (Ne) {
            vt(e, e.return, Ne);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var c = e.memoizedProps, m = n !== null ? n.memoizedProps : c, g = e.type, N = e.updateQueue;
          if (e.updateQueue = null, N !== null) try {
            g === "input" && c.type === "radio" && c.name != null && Me(o, c), fe(g, m);
            var $ = fe(g, c);
            for (m = 0; m < N.length; m += 2) {
              var Z = N[m], ee = N[m + 1];
              Z === "style" ? I(o, ee) : Z === "dangerouslySetInnerHTML" ? Kt(o, ee) : Z === "children" ? It(o, ee) : U(o, Z, ee, $);
            }
            switch (g) {
              case "input":
                Fe(o, c);
                break;
              case "textarea":
                De(o, c);
                break;
              case "select":
                var X = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!c.multiple;
                var me = c.value;
                me != null ? it(o, !!c.multiple, me, !1) : X !== !!c.multiple && (c.defaultValue != null ? it(
                  o,
                  !!c.multiple,
                  c.defaultValue,
                  !0
                ) : it(o, !!c.multiple, c.multiple ? [] : "", !1));
            }
            o[Os] = c;
          } catch (Ne) {
            vt(e, e.return, Ne);
          }
        }
        break;
      case 6:
        if (yn(t, e), Nn(e), r & 4) {
          if (e.stateNode === null) throw Error(l(162));
          o = e.stateNode, c = e.memoizedProps;
          try {
            o.nodeValue = c;
          } catch (Ne) {
            vt(e, e.return, Ne);
          }
        }
        break;
      case 3:
        if (yn(t, e), Nn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Es(t.containerInfo);
        } catch (Ne) {
          vt(e, e.return, Ne);
        }
        break;
      case 4:
        yn(t, e), Nn(e);
        break;
      case 13:
        yn(t, e), Nn(e), o = e.child, o.flags & 8192 && (c = o.memoizedState !== null, o.stateNode.isHidden = c, !c || o.alternate !== null && o.alternate.memoizedState !== null || (so = dt())), r & 4 && hd(e);
        break;
      case 22:
        if (Z = n !== null && n.memoizedState !== null, e.mode & 1 ? ($t = ($ = $t) || Z, yn(t, e), $t = $) : yn(t, e), Nn(e), r & 8192) {
          if ($ = e.memoizedState !== null, (e.stateNode.isHidden = $) && !Z && (e.mode & 1) !== 0) for (ge = e, Z = e.child; Z !== null; ) {
            for (ee = ge = Z; ge !== null; ) {
              switch (X = ge, me = X.child, X.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gs(4, X, X.return);
                  break;
                case 1:
                  qi(X, X.return);
                  var je = X.stateNode;
                  if (typeof je.componentWillUnmount == "function") {
                    r = X, n = X.return;
                    try {
                      t = r, je.props = t.memoizedProps, je.state = t.memoizedState, je.componentWillUnmount();
                    } catch (Ne) {
                      vt(r, n, Ne);
                    }
                  }
                  break;
                case 5:
                  qi(X, X.return);
                  break;
                case 22:
                  if (X.memoizedState !== null) {
                    vd(ee);
                    continue;
                  }
              }
              me !== null ? (me.return = X, ge = me) : vd(ee);
            }
            Z = Z.sibling;
          }
          e: for (Z = null, ee = e; ; ) {
            if (ee.tag === 5) {
              if (Z === null) {
                Z = ee;
                try {
                  o = ee.stateNode, $ ? (c = o.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (g = ee.stateNode, N = ee.memoizedProps.style, m = N != null && N.hasOwnProperty("display") ? N.display : null, g.style.display = Pe("display", m));
                } catch (Ne) {
                  vt(e, e.return, Ne);
                }
              }
            } else if (ee.tag === 6) {
              if (Z === null) try {
                ee.stateNode.nodeValue = $ ? "" : ee.memoizedProps;
              } catch (Ne) {
                vt(e, e.return, Ne);
              }
            } else if ((ee.tag !== 22 && ee.tag !== 23 || ee.memoizedState === null || ee === e) && ee.child !== null) {
              ee.child.return = ee, ee = ee.child;
              continue;
            }
            if (ee === e) break e;
            for (; ee.sibling === null; ) {
              if (ee.return === null || ee.return === e) break e;
              Z === ee && (Z = null), ee = ee.return;
            }
            Z === ee && (Z = null), ee.sibling.return = ee.return, ee = ee.sibling;
          }
        }
        break;
      case 19:
        yn(t, e), Nn(e), r & 4 && hd(e);
        break;
      case 21:
        break;
      default:
        yn(
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
            if (ud(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(l(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (It(o, ""), r.flags &= -33);
            var c = cd(e);
            to(e, c, o);
            break;
          case 3:
          case 4:
            var m = r.stateNode.containerInfo, g = cd(e);
            eo(e, g, m);
            break;
          default:
            throw Error(l(161));
        }
      } catch (N) {
        vt(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xm(e, t, n) {
    ge = e, md(e);
  }
  function md(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ge !== null; ) {
      var o = ge, c = o.child;
      if (o.tag === 22 && r) {
        var m = o.memoizedState !== null || ia;
        if (!m) {
          var g = o.alternate, N = g !== null && g.memoizedState !== null || $t;
          g = ia;
          var $ = $t;
          if (ia = m, ($t = N) && !$) for (ge = o; ge !== null; ) m = ge, N = m.child, m.tag === 22 && m.memoizedState !== null ? kd(o) : N !== null ? (N.return = m, ge = N) : kd(o);
          for (; c !== null; ) ge = c, md(c), c = c.sibling;
          ge = o, ia = g, $t = $;
        }
        pd(e);
      } else (o.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = o, ge = c) : pd(e);
    }
  }
  function pd(e) {
    for (; ge !== null; ) {
      var t = ge;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              $t || sa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !$t) if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : vn(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var c = t.updateQueue;
              c !== null && vc(t, c, r);
              break;
            case 3:
              var m = t.updateQueue;
              if (m !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                vc(t, m, n);
              }
              break;
            case 5:
              var g = t.stateNode;
              if (n === null && t.flags & 4) {
                n = g;
                var N = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    N.autoFocus && n.focus();
                    break;
                  case "img":
                    N.src && (n.src = N.src);
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
                var $ = t.alternate;
                if ($ !== null) {
                  var Z = $.memoizedState;
                  if (Z !== null) {
                    var ee = Z.dehydrated;
                    ee !== null && Es(ee);
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
              throw Error(l(163));
          }
          $t || t.flags & 512 && ql(t);
        } catch (X) {
          vt(t, t.return, X);
        }
      }
      if (t === e) {
        ge = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, ge = n;
        break;
      }
      ge = t.return;
    }
  }
  function vd(e) {
    for (; ge !== null; ) {
      var t = ge;
      if (t === e) {
        ge = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ge = n;
        break;
      }
      ge = t.return;
    }
  }
  function kd(e) {
    for (; ge !== null; ) {
      var t = ge;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              sa(4, t);
            } catch (N) {
              vt(t, n, N);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (N) {
                vt(t, o, N);
              }
            }
            var c = t.return;
            try {
              ql(t);
            } catch (N) {
              vt(t, c, N);
            }
            break;
          case 5:
            var m = t.return;
            try {
              ql(t);
            } catch (N) {
              vt(t, m, N);
            }
        }
      } catch (N) {
        vt(t, t.return, N);
      }
      if (t === e) {
        ge = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        g.return = t.return, ge = g;
        break;
      }
      ge = t.return;
    }
  }
  var Zm = Math.ceil, ra = V.ReactCurrentDispatcher, no = V.ReactCurrentOwner, cn = V.ReactCurrentBatchConfig, Ue = 0, Nt = null, gt = null, bt = 0, tn = 0, es = Xn(0), jt = 0, Ws = null, wi = 0, aa = 0, io = 0, Ys = null, Yt = null, so = 0, ts = 1 / 0, Fn = null, la = !1, ro = null, ii = null, oa = !1, si = null, ua = 0, Qs = 0, ao = null, ca = -1, da = 0;
  function zt() {
    return (Ue & 6) !== 0 ? dt() : ca !== -1 ? ca : ca = dt();
  }
  function ri(e) {
    return (e.mode & 1) === 0 ? 1 : (Ue & 2) !== 0 && bt !== 0 ? bt & -bt : Om.transition !== null ? (da === 0 && (da = cu()), da) : (e = qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : gu(e.type)), e);
  }
  function gn(e, t, n, r) {
    if (50 < Qs) throw Qs = 0, ao = null, Error(l(185));
    gs(e, n, r), ((Ue & 2) === 0 || e !== Nt) && (e === Nt && ((Ue & 2) === 0 && (aa |= n), jt === 4 && ai(e, bt)), Qt(e, r), n === 1 && Ue === 0 && (t.mode & 1) === 0 && (ts = dt() + 500, Dr && qn()));
  }
  function Qt(e, t) {
    var n = e.callbackNode;
    Of(e, t);
    var r = xr(e, e === Nt ? bt : 0);
    if (r === 0) n !== null && vr(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && vr(n), t === 1) e.tag === 0 ? Rm(gd.bind(null, e)) : sc(gd.bind(null, e)), bm(function() {
        (Ue & 6) === 0 && qn();
      }), n = null;
      else {
        switch (du(r)) {
          case 1:
            n = jn;
            break;
          case 4:
            n = L;
            break;
          case 16:
            n = ve;
            break;
          case 536870912:
            n = Xt;
            break;
          default:
            n = ve;
        }
        n = Td(n, yd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function yd(e, t) {
    if (ca = -1, da = 0, (Ue & 6) !== 0) throw Error(l(327));
    var n = e.callbackNode;
    if (ns() && e.callbackNode !== n) return null;
    var r = xr(e, e === Nt ? bt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ha(e, r);
    else {
      t = r;
      var o = Ue;
      Ue |= 2;
      var c = jd();
      (Nt !== e || bt !== t) && (Fn = null, ts = dt() + 500, Ni(e, t));
      do
        try {
          tp();
          break;
        } catch (g) {
          xd(e, g);
        }
      while (!0);
      El(), ra.current = c, Ue = o, gt !== null ? t = 0 : (Nt = null, bt = 0, t = jt);
    }
    if (t !== 0) {
      if (t === 2 && (o = za(e), o !== 0 && (r = o, t = lo(e, o))), t === 1) throw n = Ws, Ni(e, 0), ai(e, r), Qt(e, dt()), n;
      if (t === 6) ai(e, r);
      else {
        if (o = e.current.alternate, (r & 30) === 0 && !qm(o) && (t = ha(e, r), t === 2 && (c = za(e), c !== 0 && (r = c, t = lo(e, c))), t === 1)) throw n = Ws, Ni(e, 0), ai(e, r), Qt(e, dt()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Ci(e, Yt, Fn);
            break;
          case 3:
            if (ai(e, r), (r & 130023424) === r && (t = so + 500 - dt(), 10 < t)) {
              if (xr(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                zt(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = fl(Ci.bind(null, e, Yt, Fn), t);
              break;
            }
            Ci(e, Yt, Fn);
            break;
          case 4:
            if (ai(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var m = 31 - Mt(r);
              c = 1 << m, m = t[m], m > o && (o = m), r &= ~c;
            }
            if (r = o, r = dt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = fl(Ci.bind(null, e, Yt, Fn), r);
              break;
            }
            Ci(e, Yt, Fn);
            break;
          case 5:
            Ci(e, Yt, Fn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return Qt(e, dt()), e.callbackNode === n ? yd.bind(null, e) : null;
  }
  function lo(e, t) {
    var n = Ys;
    return e.current.memoizedState.isDehydrated && (Ni(e, t).flags |= 256), e = ha(e, t), e !== 2 && (t = Yt, Yt = n, t !== null && oo(t)), e;
  }
  function oo(e) {
    Yt === null ? Yt = e : Yt.push.apply(Yt, e);
  }
  function qm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var o = n[r], c = o.getSnapshot;
          o = o.value;
          try {
            if (!mn(c(), o)) return !1;
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
  function ai(e, t) {
    for (t &= ~io, t &= ~aa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Mt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function gd(e) {
    if ((Ue & 6) !== 0) throw Error(l(327));
    ns();
    var t = xr(e, 0);
    if ((t & 1) === 0) return Qt(e, dt()), null;
    var n = ha(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = za(e);
      r !== 0 && (t = r, n = lo(e, r));
    }
    if (n === 1) throw n = Ws, Ni(e, 0), ai(e, t), Qt(e, dt()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ci(e, Yt, Fn), Qt(e, dt()), null;
  }
  function uo(e, t) {
    var n = Ue;
    Ue |= 1;
    try {
      return e(t);
    } finally {
      Ue = n, Ue === 0 && (ts = dt() + 500, Dr && qn());
    }
  }
  function Ei(e) {
    si !== null && si.tag === 0 && (Ue & 6) === 0 && ns();
    var t = Ue;
    Ue |= 1;
    var n = cn.transition, r = qe;
    try {
      if (cn.transition = null, qe = 1, e) return e();
    } finally {
      qe = r, cn.transition = n, Ue = t, (Ue & 6) === 0 && qn();
    }
  }
  function co() {
    tn = es.current, lt(es);
  }
  function Ni(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, _m(n)), gt !== null) for (n = gt.return; n !== null; ) {
      var r = n;
      switch (gl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ir();
          break;
        case 3:
          Xi(), lt(Ht), lt(Lt), Al();
          break;
        case 5:
          bl(r);
          break;
        case 4:
          Xi();
          break;
        case 13:
          lt(ft);
          break;
        case 19:
          lt(ft);
          break;
        case 10:
          Nl(r.type._context);
          break;
        case 22:
        case 23:
          co();
      }
      n = n.return;
    }
    if (Nt = e, gt = e = li(e.current, null), bt = tn = t, jt = 0, Ws = null, io = aa = wi = 0, Yt = Ys = null, xi !== null) {
      for (t = 0; t < xi.length; t++) if (n = xi[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, c = n.pending;
        if (c !== null) {
          var m = c.next;
          c.next = o, r.next = m;
        }
        n.pending = r;
      }
      xi = null;
    }
    return e;
  }
  function xd(e, t) {
    do {
      var n = gt;
      try {
        if (El(), Qr.current = qr, Jr) {
          for (var r = mt.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          Jr = !1;
        }
        if (Si = 0, Et = xt = mt = null, Bs = !1, Vs = 0, no.current = null, n === null || n.return === null) {
          jt = 1, Ws = t, gt = null;
          break;
        }
        e: {
          var c = e, m = n.return, g = n, N = t;
          if (t = bt, g.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var $ = N, Z = g, ee = Z.tag;
            if ((Z.mode & 1) === 0 && (ee === 0 || ee === 11 || ee === 15)) {
              var X = Z.alternate;
              X ? (Z.updateQueue = X.updateQueue, Z.memoizedState = X.memoizedState, Z.lanes = X.lanes) : (Z.updateQueue = null, Z.memoizedState = null);
            }
            var me = Hc(m);
            if (me !== null) {
              me.flags &= -257, Gc(me, m, g, c, t), me.mode & 1 && Uc(c, $, t), t = me, N = $;
              var je = t.updateQueue;
              if (je === null) {
                var Ne = /* @__PURE__ */ new Set();
                Ne.add(N), t.updateQueue = Ne;
              } else je.add(N);
              break e;
            } else {
              if ((t & 1) === 0) {
                Uc(c, $, t), ho();
                break e;
              }
              N = Error(l(426));
            }
          } else if (ot && g.mode & 1) {
            var yt = Hc(m);
            if (yt !== null) {
              (yt.flags & 65536) === 0 && (yt.flags |= 256), Gc(yt, m, g, c, t), Sl(Zi(N, g));
              break e;
            }
          }
          c = N = Zi(N, g), jt !== 4 && (jt = 2), Ys === null ? Ys = [c] : Ys.push(c), c = m;
          do {
            switch (c.tag) {
              case 3:
                c.flags |= 65536, t &= -t, c.lanes |= t;
                var A = Vc(c, N, t);
                pc(c, A);
                break e;
              case 1:
                g = N;
                var M = c.type, R = c.stateNode;
                if ((c.flags & 128) === 0 && (typeof M.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (ii === null || !ii.has(R)))) {
                  c.flags |= 65536, t &= -t, c.lanes |= t;
                  var ae = Kc(c, g, t);
                  pc(c, ae);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        wd(n);
      } catch (Te) {
        t = Te, gt === n && n !== null && (gt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function jd() {
    var e = ra.current;
    return ra.current = qr, e === null ? qr : e;
  }
  function ho() {
    (jt === 0 || jt === 3 || jt === 2) && (jt = 4), Nt === null || (wi & 268435455) === 0 && (aa & 268435455) === 0 || ai(Nt, bt);
  }
  function ha(e, t) {
    var n = Ue;
    Ue |= 2;
    var r = jd();
    (Nt !== e || bt !== t) && (Fn = null, Ni(e, t));
    do
      try {
        ep();
        break;
      } catch (o) {
        xd(e, o);
      }
    while (!0);
    if (El(), Ue = n, ra.current = r, gt !== null) throw Error(l(261));
    return Nt = null, bt = 0, jt;
  }
  function ep() {
    for (; gt !== null; ) Sd(gt);
  }
  function tp() {
    for (; gt !== null && !kr(); ) Sd(gt);
  }
  function Sd(e) {
    var t = Cd(e.alternate, e, tn);
    e.memoizedProps = e.pendingProps, t === null ? wd(e) : gt = t, no.current = null;
  }
  function wd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Wm(n, t, tn), n !== null) {
          gt = n;
          return;
        }
      } else {
        if (n = Ym(n, t), n !== null) {
          n.flags &= 32767, gt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          jt = 6, gt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        gt = t;
        return;
      }
      gt = t = e;
    } while (t !== null);
    jt === 0 && (jt = 5);
  }
  function Ci(e, t, n) {
    var r = qe, o = cn.transition;
    try {
      cn.transition = null, qe = 1, np(e, t, n, r);
    } finally {
      cn.transition = o, qe = r;
    }
    return null;
  }
  function np(e, t, n, r) {
    do
      ns();
    while (si !== null);
    if ((Ue & 6) !== 0) throw Error(l(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var c = n.lanes | n.childLanes;
    if ($f(e, c), e === Nt && (gt = Nt = null, bt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || oa || (oa = !0, Td(ve, function() {
      return ns(), null;
    })), c = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || c) {
      c = cn.transition, cn.transition = null;
      var m = qe;
      qe = 1;
      var g = Ue;
      Ue |= 4, no.current = null, Jm(e, n), fd(n, e), Sm(dl), wr = !!cl, dl = cl = null, e.current = n, Xm(n), Da(), Ue = g, qe = m, cn.transition = c;
    } else e.current = n;
    if (oa && (oa = !1, si = e, ua = o), c = e.pendingLanes, c === 0 && (ii = null), ks(n.stateNode), Qt(e, dt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (la) throw la = !1, e = ro, ro = null, e;
    return (ua & 1) !== 0 && e.tag !== 0 && ns(), c = e.pendingLanes, (c & 1) !== 0 ? e === ao ? Qs++ : (Qs = 0, ao = e) : Qs = 0, qn(), null;
  }
  function ns() {
    if (si !== null) {
      var e = du(ua), t = cn.transition, n = qe;
      try {
        if (cn.transition = null, qe = 16 > e ? 16 : e, si === null) var r = !1;
        else {
          if (e = si, si = null, ua = 0, (Ue & 6) !== 0) throw Error(l(331));
          var o = Ue;
          for (Ue |= 4, ge = e.current; ge !== null; ) {
            var c = ge, m = c.child;
            if ((ge.flags & 16) !== 0) {
              var g = c.deletions;
              if (g !== null) {
                for (var N = 0; N < g.length; N++) {
                  var $ = g[N];
                  for (ge = $; ge !== null; ) {
                    var Z = ge;
                    switch (Z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gs(8, Z, c);
                    }
                    var ee = Z.child;
                    if (ee !== null) ee.return = Z, ge = ee;
                    else for (; ge !== null; ) {
                      Z = ge;
                      var X = Z.sibling, me = Z.return;
                      if (od(Z), Z === $) {
                        ge = null;
                        break;
                      }
                      if (X !== null) {
                        X.return = me, ge = X;
                        break;
                      }
                      ge = me;
                    }
                  }
                }
                var je = c.alternate;
                if (je !== null) {
                  var Ne = je.child;
                  if (Ne !== null) {
                    je.child = null;
                    do {
                      var yt = Ne.sibling;
                      Ne.sibling = null, Ne = yt;
                    } while (Ne !== null);
                  }
                }
                ge = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && m !== null) m.return = c, ge = m;
            else e: for (; ge !== null; ) {
              if (c = ge, (c.flags & 2048) !== 0) switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  Gs(9, c, c.return);
              }
              var A = c.sibling;
              if (A !== null) {
                A.return = c.return, ge = A;
                break e;
              }
              ge = c.return;
            }
          }
          var M = e.current;
          for (ge = M; ge !== null; ) {
            m = ge;
            var R = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && R !== null) R.return = m, ge = R;
            else e: for (m = M; ge !== null; ) {
              if (g = ge, (g.flags & 2048) !== 0) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sa(9, g);
                }
              } catch (Te) {
                vt(g, g.return, Te);
              }
              if (g === m) {
                ge = null;
                break e;
              }
              var ae = g.sibling;
              if (ae !== null) {
                ae.return = g.return, ge = ae;
                break e;
              }
              ge = g.return;
            }
          }
          if (Ue = o, qn(), Ft && typeof Ft.onPostCommitFiberRoot == "function") try {
            Ft.onPostCommitFiberRoot(ht, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        qe = n, cn.transition = t;
      }
    }
    return !1;
  }
  function Ed(e, t, n) {
    t = Zi(n, t), t = Vc(e, t, 1), e = ti(e, t, 1), t = zt(), e !== null && (gs(e, 1, t), Qt(e, t));
  }
  function vt(e, t, n) {
    if (e.tag === 3) Ed(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ed(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ii === null || !ii.has(r))) {
          e = Zi(n, e), e = Kc(t, e, 1), t = ti(t, e, 1), e = zt(), t !== null && (gs(t, 1, e), Qt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function ip(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = zt(), e.pingedLanes |= e.suspendedLanes & n, Nt === e && (bt & n) === n && (jt === 4 || jt === 3 && (bt & 130023424) === bt && 500 > dt() - so ? Ni(e, 0) : io |= n), Qt(e, t);
  }
  function Nd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = gr, gr <<= 1, (gr & 130023424) === 0 && (gr = 4194304)));
    var n = zt();
    e = On(e, t), e !== null && (gs(e, t, n), Qt(e, n));
  }
  function sp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Nd(e, n);
  }
  function rp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    r !== null && r.delete(t), Nd(e, n);
  }
  var Cd;
  Cd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ht.current) Wt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Wt = !1, Gm(e, t, n);
      Wt = (e.flags & 131072) !== 0;
    }
    else Wt = !1, ot && (t.flags & 1048576) !== 0 && rc(t, Br, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        na(e, t), e = t.pendingProps;
        var o = Ui(t, Lt.current);
        Ji(t, n), o = Ol(null, t, r, e, o, n);
        var c = $l();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Gt(r) ? (c = !0, Fr(t)) : c = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ml(t), o.updater = ea, t.stateNode = o, o._reactInternals = t, Vl(t, r, e, n), t = Gl(null, t, r, !0, c, n)) : (t.tag = 0, ot && c && yl(t), Dt(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (na(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = lp(r), e = vn(r, e), o) {
            case 0:
              t = Hl(null, t, r, e, n);
              break e;
            case 1:
              t = Zc(null, t, r, e, n);
              break e;
            case 11:
              t = Wc(null, t, r, e, n);
              break e;
            case 14:
              t = Yc(null, t, r, vn(r.type, e), n);
              break e;
          }
          throw Error(l(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vn(r, o), Hl(e, t, r, o, n);
      case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vn(r, o), Zc(e, t, r, o, n);
      case 3:
        e: {
          if (qc(t), e === null) throw Error(l(387));
          r = t.pendingProps, c = t.memoizedState, o = c.element, mc(e, t), Wr(t, r, null, n);
          var m = t.memoizedState;
          if (r = m.element, c.isDehydrated) if (c = { element: r, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
            o = Zi(Error(l(423)), t), t = ed(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Zi(Error(l(424)), t), t = ed(e, t, r, n, o);
            break e;
          } else for (en = Jn(t.stateNode.containerInfo.firstChild), qt = t, ot = !0, pn = null, n = hc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Wi(), r === o) {
              t = In(e, t, n);
              break e;
            }
            Dt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return kc(t), e === null && jl(t), r = t.type, o = t.pendingProps, c = e !== null ? e.memoizedProps : null, m = o.children, hl(r, o) ? m = null : c !== null && hl(r, c) && (t.flags |= 32), Xc(e, t), Dt(e, t, m, n), t.child;
      case 6:
        return e === null && jl(t), null;
      case 13:
        return td(e, t, n);
      case 4:
        return _l(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Yi(t, null, r, n) : Dt(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vn(r, o), Wc(e, t, r, o, n);
      case 7:
        return Dt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Dt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Dt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, c = t.memoizedProps, m = o.value, nt(Ur, r._currentValue), r._currentValue = m, c !== null) if (mn(c.value, m)) {
            if (c.children === o.children && !Ht.current) {
              t = In(e, t, n);
              break e;
            }
          } else for (c = t.child, c !== null && (c.return = t); c !== null; ) {
            var g = c.dependencies;
            if (g !== null) {
              m = c.child;
              for (var N = g.firstContext; N !== null; ) {
                if (N.context === r) {
                  if (c.tag === 1) {
                    N = $n(-1, n & -n), N.tag = 2;
                    var $ = c.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var Z = $.pending;
                      Z === null ? N.next = N : (N.next = Z.next, Z.next = N), $.pending = N;
                    }
                  }
                  c.lanes |= n, N = c.alternate, N !== null && (N.lanes |= n), Cl(
                    c.return,
                    n,
                    t
                  ), g.lanes |= n;
                  break;
                }
                N = N.next;
              }
            } else if (c.tag === 10) m = c.type === t.type ? null : c.child;
            else if (c.tag === 18) {
              if (m = c.return, m === null) throw Error(l(341));
              m.lanes |= n, g = m.alternate, g !== null && (g.lanes |= n), Cl(m, n, t), m = c.sibling;
            } else m = c.child;
            if (m !== null) m.return = c;
            else for (m = c; m !== null; ) {
              if (m === t) {
                m = null;
                break;
              }
              if (c = m.sibling, c !== null) {
                c.return = m.return, m = c;
                break;
              }
              m = m.return;
            }
            c = m;
          }
          Dt(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, Ji(t, n), o = on(o), r = r(o), t.flags |= 1, Dt(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = vn(r, t.pendingProps), o = vn(r.type, o), Yc(e, t, r, o, n);
      case 15:
        return Qc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vn(r, o), na(e, t), t.tag = 1, Gt(r) ? (e = !0, Fr(t)) : e = !1, Ji(t, n), zc(t, r, o), Vl(t, r, o, n), Gl(null, t, r, !0, e, n);
      case 19:
        return id(e, t, n);
      case 22:
        return Jc(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function Td(e, t) {
    return Tt(e, t);
  }
  function ap(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dn(e, t, n, r) {
    return new ap(e, t, n, r);
  }
  function fo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function lp(e) {
    if (typeof e == "function") return fo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === _e) return 11;
      if (e === W) return 14;
    }
    return 2;
  }
  function li(e, t) {
    var n = e.alternate;
    return n === null ? (n = dn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function fa(e, t, n, r, o, c) {
    var m = 2;
    if (r = e, typeof e == "function") fo(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case O:
        return Ti(n.children, o, c, t);
      case F:
        m = 8, o |= 8;
        break;
      case ne:
        return e = dn(12, n, t, o | 2), e.elementType = ne, e.lanes = c, e;
      case J:
        return e = dn(13, n, t, o), e.elementType = J, e.lanes = c, e;
      case he:
        return e = dn(19, n, t, o), e.elementType = he, e.lanes = c, e;
      case ue:
        return ma(n, o, c, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ie:
            m = 10;
            break e;
          case de:
            m = 9;
            break e;
          case _e:
            m = 11;
            break e;
          case W:
            m = 14;
            break e;
          case le:
            m = 16, r = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = dn(m, n, t, o), t.elementType = e, t.type = r, t.lanes = c, t;
  }
  function Ti(e, t, n, r) {
    return e = dn(7, e, r, t), e.lanes = n, e;
  }
  function ma(e, t, n, r) {
    return e = dn(22, e, r, t), e.elementType = ue, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function mo(e, t, n) {
    return e = dn(6, e, null, t), e.lanes = n, e;
  }
  function po(e, t, n) {
    return t = dn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function op(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ba(0), this.expirationTimes = Ba(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ba(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function vo(e, t, n, r, o, c, m, g, N) {
    return e = new op(e, t, n, g, N), t === 1 ? (t = 1, c === !0 && (t |= 8)) : t = 0, c = dn(3, null, null, t), e.current = c, c.stateNode = e, c.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ml(c), e;
  }
  function up(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Md(e) {
    if (!e) return Zn;
    e = e._reactInternals;
    e: {
      if (bn(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Gt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Gt(n)) return nc(e, n, t);
    }
    return t;
  }
  function _d(e, t, n, r, o, c, m, g, N) {
    return e = vo(n, r, !0, e, o, c, m, g, N), e.context = Md(null), n = e.current, r = zt(), o = ri(n), c = $n(r, o), c.callback = t ?? null, ti(n, c, o), e.current.lanes = o, gs(e, o, r), Qt(e, r), e;
  }
  function pa(e, t, n, r) {
    var o = t.current, c = zt(), m = ri(o);
    return n = Md(n), t.context === null ? t.context = n : t.pendingContext = n, t = $n(c, m), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ti(o, t, m), e !== null && (gn(e, o, m, c), Gr(e, o, m)), m;
  }
  function va(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function bd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ko(e, t) {
    bd(e, t), (e = e.alternate) && bd(e, t);
  }
  function cp() {
    return null;
  }
  var Pd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function yo(e) {
    this._internalRoot = e;
  }
  ka.prototype.render = yo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    pa(e, t, null, null);
  }, ka.prototype.unmount = yo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ei(function() {
        pa(null, e, null, null);
      }), t[Pn] = null;
    }
  };
  function ka(e) {
    this._internalRoot = e;
  }
  ka.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = mu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++) ;
      Wn.splice(n, 0, e), n === 0 && ku(e);
    }
  };
  function go(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ya(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ad() {
  }
  function dp(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var c = r;
        r = function() {
          var $ = va(m);
          c.call($);
        };
      }
      var m = _d(t, r, e, 0, null, !1, !1, "", Ad);
      return e._reactRootContainer = m, e[Pn] = m.current, Ls(e.nodeType === 8 ? e.parentNode : e), Ei(), m;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var $ = va(N);
        g.call($);
      };
    }
    var N = vo(e, 0, !1, null, null, !1, !1, "", Ad);
    return e._reactRootContainer = N, e[Pn] = N.current, Ls(e.nodeType === 8 ? e.parentNode : e), Ei(function() {
      pa(t, N, n, r);
    }), N;
  }
  function ga(e, t, n, r, o) {
    var c = n._reactRootContainer;
    if (c) {
      var m = c;
      if (typeof o == "function") {
        var g = o;
        o = function() {
          var N = va(m);
          g.call(N);
        };
      }
      pa(t, m, e, o);
    } else m = dp(n, t, e, o, r);
    return va(m);
  }
  hu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ys(t.pendingLanes);
          n !== 0 && (Va(t, n | 1), Qt(t, dt()), (Ue & 6) === 0 && (ts = dt() + 500, qn()));
        }
        break;
      case 13:
        Ei(function() {
          var r = On(e, 1);
          if (r !== null) {
            var o = zt();
            gn(r, e, 1, o);
          }
        }), ko(e, 1);
    }
  }, Ka = function(e) {
    if (e.tag === 13) {
      var t = On(e, 134217728);
      if (t !== null) {
        var n = zt();
        gn(t, e, 134217728, n);
      }
      ko(e, 134217728);
    }
  }, fu = function(e) {
    if (e.tag === 13) {
      var t = ri(e), n = On(e, t);
      if (n !== null) {
        var r = zt();
        gn(n, e, t, r);
      }
      ko(e, t);
    }
  }, mu = function() {
    return qe;
  }, pu = function(e, t) {
    var n = qe;
    try {
      return qe = e, t();
    } finally {
      qe = n;
    }
  }, We = function(e, t, n) {
    switch (t) {
      case "input":
        if (Fe(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = $r(r);
              if (!o) throw Error(l(90));
              pe(r), Fe(r, o);
            }
          }
        }
        break;
      case "textarea":
        De(e, n);
        break;
      case "select":
        t = n.value, t != null && it(e, !!n.multiple, t, !1);
    }
  }, dr = uo, ms = Ei;
  var hp = { usingClientEntryPoint: !1, Events: [$s, Vi, $r, hn, _n, uo] }, Js = { findFiberByHostInstance: vi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, fp = { bundleType: Js.bundleType, version: Js.version, rendererPackageName: Js.rendererPackageName, rendererConfig: Js.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: V.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = mr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Js.findFiberByHostInstance || cp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xa.isDisabled && xa.supportsFiber) try {
      ht = xa.inject(fp), Ft = xa;
    } catch {
    }
  }
  return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hp, Jt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!go(t)) throw Error(l(200));
    return up(e, t, null, n);
  }, Jt.createRoot = function(e, t) {
    if (!go(e)) throw Error(l(299));
    var n = !1, r = "", o = Pd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = vo(e, 1, !1, null, null, n, !1, r, o), e[Pn] = t.current, Ls(e.nodeType === 8 ? e.parentNode : e), new yo(t);
  }, Jt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = mr(t), e = e === null ? null : e.stateNode, e;
  }, Jt.flushSync = function(e) {
    return Ei(e);
  }, Jt.hydrate = function(e, t, n) {
    if (!ya(t)) throw Error(l(200));
    return ga(null, e, t, !0, n);
  }, Jt.hydrateRoot = function(e, t, n) {
    if (!go(e)) throw Error(l(405));
    var r = n != null && n.hydratedSources || null, o = !1, c = "", m = Pd;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), t = _d(t, null, e, 1, n ?? null, o, !1, c, m), e[Pn] = t.current, Ls(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new ka(t);
  }, Jt.render = function(e, t, n) {
    if (!ya(t)) throw Error(l(200));
    return ga(null, e, t, !1, n);
  }, Jt.unmountComponentAtNode = function(e) {
    if (!ya(e)) throw Error(l(40));
    return e._reactRootContainer ? (Ei(function() {
      ga(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pn] = null;
      });
    }), !0) : !1;
  }, Jt.unstable_batchedUpdates = uo, Jt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ya(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return ga(e, t, n, !1, r);
  }, Jt.version = "18.3.1-next-f1338f8080-20240426", Jt;
}
var zd;
function Sp() {
  if (zd) return So.exports;
  zd = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (i) {
        console.error(i);
      }
  }
  return s(), So.exports = jp(), So.exports;
}
var Bd;
function wp() {
  if (Bd) return ja;
  Bd = 1;
  var s = Sp();
  return ja.createRoot = s.createRoot, ja.hydrateRoot = s.hydrateRoot, ja;
}
var Ep = wp();
const Np = (() => {
  const s = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], i = "CDEFGAB", l = [0, 2, 4, 5, 7, 9, 11], u = [64, 59, 55, 50, 45, 40], d = u.at(-1), h = { pentatonic: 15, "3nps": 17 }, p = 7, f = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], k = ["e", "B", "G", "D", "A", "E"], S = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], y = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], x = {
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
      base: y,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: y,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: y,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: y,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, T = 26, _ = 72, E = 30, w = 54, z = 34, P = 11, U = (T + _) / 2, V = E + (u.length - 1) * z + 30, B = (K) => _ + K * w, D = (K) => K === 0 ? U : B(K) - w / 2, O = (K) => E + K * z;
  function F(K, te, q) {
    const ke = i.indexOf(s[K][0]) + Number(q.slice(-1)) - 1, ye = ke % i.length, pe = l[ye] + 12 * Math.floor(ke / i.length), Ee = K + te - pe;
    return i[ye] + (Ee < 0 ? "♭" : "♯").repeat(Math.abs(Ee));
  }
  function ne(K) {
    return [...K.base, ...K.add].sort((te, q) => te[0] - q[0]);
  }
  function ie(K, te, q) {
    const ke = te + (q ? 1 : 0), ye = f[ke % f.length], pe = Math.min(...ye.map(([Fe]) => Fe)), Ee = Math.max(...ye.map(([, Fe]) => Fe));
    let Me = (K - d % 12 + 12) % 12 - (q ? 8 : 5) + 12 * Math.floor(ke / f.length);
    return pe + Me < 0 && (Me += 12), Ee + Me > h.pentatonic && (Me -= 12), {
      strings: ye.map((Fe) => Fe.map((Qe) => Qe + Me)),
      start: pe + Me,
      end: Ee + Me
    };
  }
  function de(K, te, q) {
    const ke = q[te], ye = (K + ke - d % 12 + 12) % 12, pe = d + ye - ke, Ee = u.map((Ce, Se) => {
      const Me = te + (u.length - 1 - Se) * 3;
      return [Me, Me + 1, Me + 2].map((Fe) => {
        const Qe = Math.floor(Fe / q.length), Je = q[Fe % q.length];
        return pe + Je + 12 * Qe - Ce;
      });
    });
    return {
      strings: Ee,
      start: Math.min(...Ee.map((Ce) => Ce[0])),
      end: Math.max(...Ee.map((Ce) => Ce.at(-1)))
    };
  }
  function _e(K, te) {
    const q = [], ke = Math.ceil(-K.end / 12) * 12;
    for (let pe = ke; K.start + pe <= te; pe += 12) {
      const Ee = K.strings.map((Se) => Se.map((Me) => Me + pe).filter((Me) => Me >= 0 && Me <= te)), Ce = Ee.flat();
      q.push({
        strings: Ee,
        start: Math.min(...Ce),
        end: Math.max(...Ce),
        partial: K.start + pe < 0 || K.end + pe > te
      });
    }
    const ye = q.filter((pe) => !pe.partial);
    return ye.length ? ye : q;
  }
  function J(K) {
    return ne(K).length === p;
  }
  function he(K, te, q) {
    const ke = J(te);
    K.querySelector('[value="3nps"]').disabled = !ke, K.value = ke ? q ?? "3nps" : "pentatonic";
  }
  function W(K, te, q, ke, ye) {
    const pe = ne(te).map(([Ee]) => Ee);
    return ke.map((Ee) => {
      const Ce = Ee - 1, Se = q === "3nps" ? de(K, Ce, pe) : ie(K, Ce, te.base === y), Me = ye === void 0 ? [Se] : _e(Se, ye);
      return { number: Ee, positions: Me };
    });
  }
  function le(K, te) {
    const q = K.getBoundingClientRect(), ke = K.querySelectorAll(te);
    let ye = 1 / 0;
    ke.forEach((pe) => {
      const Ee = pe.getBoundingClientRect();
      let Ce = 0;
      Ee.left < q.left ? Ce = Ee.left - q.left - 8 : Ee.right > q.right && (Ce = Ee.right - q.right + 8), Math.abs(Ce) < Math.abs(ye) && (ye = Ce);
    }), Number.isFinite(ye) && (K.scrollLeft += ye);
  }
  function ue(K, te = !1) {
    const q = K === "3nps" ? p : f.length;
    return Array.from({ length: q }, (ke, ye) => {
      const pe = ye + 1;
      return '<label class="box-toggle" data-box="' + pe + '"><input type="checkbox" value="' + pe + '"' + (te && ye === 0 ? " checked" : "") + "> Boksi " + pe + "</label>";
    }).join("");
  }
  function Q(K, te) {
    const q = ne(te), ke = new Map(q.map(([pe, Ee]) => [pe, F(K, pe, Ee)])), ye = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return q.flatMap(([pe, Ee]) => ye.flatMap(({ suffix: Ce, base: Se }) => {
      const Me = Se.map(([Fe]) => ke.get((pe + Fe) % 12));
      return Me.every(Boolean) ? {
        root: (K + pe) % 12,
        degree: Number(String(Ee).replace(/\D/g, "")),
        name: Me[0] + Ce,
        notes: Me,
        base: Se,
        add: []
      } : [];
    }));
  }
  function oe(K, te) {
    const q = K.base.map(([pe]) => (K.root + pe) % 12), ke = u.map((pe) => {
      const Ee = [];
      for (let Ce = 0; Ce <= te; Ce++) {
        const Se = (pe + Ce) % 12;
        q.includes(Se) && Ee.push({ fret: Ce, pitch: Se });
      }
      return Ee;
    }), ye = [];
    for (let pe = 0; pe <= ke.length - 3; pe++)
      for (const Ee of ke[pe])
        for (const Ce of ke[pe + 1])
          if (Ee.pitch !== Ce.pitch)
            for (const Se of ke[pe + 2]) {
              if (Se.pitch === Ee.pitch || Se.pitch === Ce.pitch) continue;
              const Me = [Ee.fret, Ce.fret, Se.fret], Fe = Math.min(...Me), Qe = Math.max(...Me);
              if (Qe - Fe > 3) continue;
              const Je = Array(u.length).fill(null);
              Je.splice(pe, 3, ...Me), ye.push({ strings: Je, low: Fe, high: Qe });
            }
    return ye.sort((pe, Ee) => pe.high - Ee.high || pe.low - Ee.low);
  }
  const se = {
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
  }, C = [
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
  function j(K, te) {
    const q = se[K + ":" + te];
    if (q) return { frets: q, barre: null };
    let ke = null;
    return C.forEach(({ string: ye, openPC: pe, shapes: Ee }) => {
      const Ce = Ee[te];
      if (!Ce) return;
      let Se = (K - pe + 12) % 12;
      if (Se + Math.min(...Ce.filter((Qe) => Qe !== null)) < 0 && (Se += 12), ke && ke.fret <= Se) return;
      const Me = Ce.map((Qe) => Qe === null ? null : Se + Qe), Fe = Se > 0 && Ce.at(-1) === 0 ? { fret: Se, from: ye, to: Ce.length - 1 } : null;
      ke = { fret: Se, frets: Me, barre: Fe };
    }), ke && { frets: ke.frets, barre: ke.barre };
  }
  function re(K, { frets: te, barre: q }, ke) {
    const Me = [...u].reverse(), Fe = te.filter((De) => De > 0), Je = !Fe.length || Math.max(...Fe) <= 4 && (te.includes(0) || Math.min(...Fe) === 1) ? 1 : Math.min(...Fe), Xe = (De) => 24 + De * 14, it = (De) => 30 + (De - Je) * 18 + 18 / 2, pt = 102;
    let Ge = '<svg class="chord-svg" viewBox="0 0 108 ' + (pt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + ke + "-ote paksusta kielestä ohueen: " + te.map((De) => De ?? "x").join(" ") + '">';
    for (let De = 0; De <= 4; De++)
      Ge += '<line class="' + (De === 0 && Je === 1 ? "nut" : "fret") + '" x1="' + Xe(0) + '" y1="' + (30 + De * 18) + '" x2="' + Xe(5) + '" y2="' + (30 + De * 18) + '"/>';
    return te.forEach((De, et) => {
      Ge += '<line class="string" x1="' + Xe(et) + '" y1="30" x2="' + Xe(et) + '" y2="' + pt + '"/>';
    }), Je > 1 && (Ge += '<text class="fret-label" x="15" y="' + (it(Je) + 4) + '">' + Je + "</text>"), q && (Ge += '<rect class="barre" x="' + (Xe(q.from) - 6.5) + '" y="' + (it(q.fret) - 6.5) + '" width="' + ((q.to - q.from) * 14 + 13) + '" height="13" rx="6.5"/>'), te.forEach((De, et) => {
      if (De === null) {
        Ge += '<text class="marker" x="' + Xe(et) + '" y="22">×</text>';
        return;
      }
      const ut = (Me[et] + De) % 12 === K;
      if (De === 0) {
        Ge += '<circle class="open' + (ut ? " root-open" : "") + '" cx="' + Xe(et) + '" cy="18" r="4.5"/>';
        return;
      }
      q && De === q.fret && et >= q.from && et <= q.to && !ut || (Ge += '<circle class="' + (ut ? "root" : "tone") + '" cx="' + Xe(et) + '" cy="' + it(De) + '" r="6.5"/>');
    }), Ge + "</svg>";
  }
  function ce(K, te) {
    const q = new URLSearchParams(location.search), ke = s.indexOf(q.get("toonikka")), ye = q.get("asteikko");
    return {
      rootPC: ke === -1 ? K : ke,
      scaleId: Object.hasOwn(x, ye) ? ye : te
    };
  }
  function be(K, te, q) {
    return K + "?" + new URLSearchParams({ toonikka: s[te], asteikko: q });
  }
  function G(K, te, q, {
    boxes: ke = [],
    onlyBoxNotes: ye = !1,
    automatic: pe = !0,
    focusDegree: Ee = "",
    grip: Ce = null,
    barre: Se = null,
    label: Me = s[K] + " " + te.name,
    notes: Fe = null,
    targets: Qe = !1,
    muteFret: Je = null
  } = {}) {
    const Xe = B(q), it = Xe + 48, pt = it + 28, Ge = E - 14, De = O(u.length - 1) + 14, et = De - Ge, ut = pe ? 680 : Math.ceil(pt * 0.64), Vt = ke.flatMap((H) => H.positions), At = {};
    te.base.forEach(([H, Y]) => At[(K + H) % 12] = { deg: Y, added: !1 }), te.add.forEach(([H, Y]) => At[(K + H) % 12] = { deg: Y, added: !0 });
    const Kt = u.map((H, Y) => !!Ce && Ce[Y] === null), It = !!Ce && Je !== null, wt = S.filter((H, Y) => Kt[Y]).reverse(), rn = Me + ". " + q + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (wt.length ? " Soittamatta jäävät kielet: " + wt.join(", ") + "." : "");
    let Pe = '<svg viewBox="0 0 ' + pt + " " + V + '" style="min-width:' + ut + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Qe ? "group" : "img") + '" aria-label="' + rn + '">';
    Pe += '<rect x="' + T + '" y="' + Ge + '" width="' + (_ - T) + '" height="' + et + '" rx="6" fill="#2a2338"/>', Pe += '<rect x="' + _ + '" y="' + Ge + '" width="' + (Xe - _) + '" height="' + et + '" fill="#231a12"/>', Pe += '<rect x="' + Xe + '" y="' + Ge + '" width="' + (pt - Xe - 4) + '" height="' + et + '" rx="8" fill="#32251e"/>';
    for (let H = 1; H <= q; H++)
      Pe += '<line x1="' + B(H) + '" y1="' + Ge + '" x2="' + B(H) + '" y2="' + De + '" stroke="#6f5b47" stroke-width="2"/>';
    Pe += '<rect x="' + (_ - 3) + '" y="' + Ge + '" width="6" height="' + et + '" rx="2" fill="#d8cbb6"/>', Pe += '<rect x="' + (it - 11) + '" y="' + (Ge + 3) + '" width="22" height="' + (et - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', Pe += '<rect x="' + (it - 4) + '" y="' + (Ge + 7) + '" width="3" height="' + (et - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const I = (Ge + De) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((H) => H <= q).forEach((H) => Pe += '<circle cx="' + D(H) + '" cy="' + I + '" r="5.5" fill="#7a6550"/>');
    for (let H = 12; H <= q; H += 12)
      Pe += '<circle cx="' + D(H) + '" cy="' + (I - z) + '" r="5.5" fill="#7a6550"/>', Pe += '<circle cx="' + D(H) + '" cy="' + (I + z) + '" r="5.5" fill="#7a6550"/>';
    Pe += '<text x="' + U + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', Pe += '<text x="' + _ + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', Pe += '<text x="' + it + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let H = 1; H <= q; H++)
      Pe += '<text x="' + D(H) + '" y="' + (V - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + H + "</text>";
    if (ke.forEach(({ number: H, positions: Y }) => {
      Y.forEach((fe) => {
        const xe = fe.partial ? "box-highlight box-partial" : "box-highlight";
        Pe += '<g class="' + xe + '" data-box="' + H + '" aria-hidden="true">';
        const Oe = fe.strings.find((st) => st.length), We = (D(Oe[0]) + D(Oe.at(-1))) / 2;
        Pe += '<text class="box-number" x="' + We + '" y="12">' + H + "</text>", fe.strings.forEach((st, ct) => {
          if (!st.length) return;
          const Mn = D(st[0]) - 16, hn = D(st.at(-1)) - D(st[0]) + 32;
          Pe += '<rect class="box-band" x="' + Mn + '" y="' + (O(ct) - 14) + '" width="' + hn + '" height="28" rx="14"/>';
        }), Pe += "</g>";
      });
    }), u.forEach((H, Y) => {
      const fe = 1 + Y * 0.45, xe = O(Y), Oe = Kt[Y] && !It;
      Oe ? Pe += '<text class="muted-mark" x="' + U + '" y="' + (xe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : Kt[Y] && Je === 0 || (Pe += '<line x1="' + (T + 4) + '" y1="' + xe + '" x2="' + (_ - 4) + '" y2="' + xe + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), Pe += "<g" + (Oe ? ' opacity=".35"' : "") + ">", Pe += '<line x1="' + _ + '" y1="' + xe + '" x2="' + (it + 5) + '" y2="' + xe + '" stroke="#b9b9c4" stroke-width="' + fe.toFixed(2) + '"/>', Pe += '<circle cx="' + (it + 5) + '" cy="' + xe + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', Pe += "</g>", Pe += '<text x="13" y="' + (xe + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + k[Y] + "</text>";
    }), Ce && Se && Se.fret >= 1 && Se.fret <= q) {
      const H = O(Se.from), Y = O(Se.to), fe = Math.min(H, Y) - 6, xe = Math.max(H, Y) + 6;
      Pe += '<rect class="barre-indicator" x="' + (D(Se.fret) - 7) + '" y="' + fe + '" width="14" height="' + (xe - fe) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Qe && (Pe += '<g class="fret-targets">', u.forEach((H, Y) => {
      for (let fe = 0; fe <= q; fe++) {
        const xe = fe ? S[Y] + "-kieli, " + fe + ". nauha" : "vapaa " + S[Y] + "-kieli", Oe = fe ? w : _ - T - 6;
        Pe += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Y + '" data-fret="' + fe + '" data-midi="' + (H + fe) + '" aria-label="' + xe + '" x="' + (D(fe) - Oe / 2) + '" y="' + (O(Y) - z / 2) + '" width="' + Oe + '" height="' + z + '" fill="transparent"/>';
      }
    }), Pe += "</g>"), (Fe ?? []).forEach(({ string: H, fret: Y, label: fe, kind: xe }) => {
      Pe += '<g class="octave-note octave-' + xe + '">', Pe += '<circle cx="' + D(Y) + '" cy="' + O(H) + '" r="' + P + '"/>', Pe += '<text x="' + D(Y) + '" y="' + (O(H) + 3.5) + '" font-size="' + (fe.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + fe + "</text>", Pe += "</g>";
    }), Ce && (Pe += '<g class="grip-notes">'), (Fe ? [] : u).forEach((H, Y) => {
      for (let fe = 0; fe <= q; fe++) {
        const xe = (H + fe) % 12;
        if (!(xe in At) || Ce && Ce[Y] !== fe || ye && !Vt.some(({ strings: hn }) => {
          const _n = hn[Y];
          return _n.length > 0 && fe >= _n[0] && fe <= _n.at(-1);
        })) continue;
        const Oe = At[xe], We = Oe.deg === "1", st = Oe.added ? "#f0a13c" : We ? "#4b2fd6" : "#6d4aff", ct = Oe.added ? "#1a1430" : "#fff";
        Oe.deg === Ee && (Pe += '<circle class="focus-note" cx="' + D(fe) + '" cy="' + O(Y) + '" r="14.5"/>');
        const Mn = Ce ? ' data-string="' + (Y + 1) + '" data-fret="' + fe + '" data-degree="' + Oe.deg + '"' : "";
        Pe += "<circle" + Mn + ' cx="' + D(fe) + '" cy="' + O(Y) + '" r="' + P + '" fill="' + st + '" stroke="' + (We ? "#fff" : "#1a1430") + '" stroke-width="' + (We ? 2.5 : 1) + '"/>', Pe += '<text x="' + D(fe) + '" y="' + (O(Y) + 3.5) + '" font-size="' + (Oe.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + ct + '" text-anchor="middle">' + Oe.deg + "</text>";
      }
    }), Ce && (Pe += "</g>"), It && Kt.forEach((H, Y) => {
      if (!H) return;
      const fe = D(Je), xe = O(Y);
      Pe += '<g class="muted-mark grip-mute" data-string="' + (Y + 1) + '" data-fret="' + Je + '">', Pe += '<circle cx="' + fe + '" cy="' + xe + '" r="9" fill="' + (Je === 0 ? "#2a2338" : "#231a12") + '"/>', Pe += '<text x="' + fe + '" y="' + (xe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', Pe += "</g>";
    }), Pe += "</svg>", Pe;
  }
  return {
    CHROM: s,
    OPEN_PITCHES: u,
    PENT_MAJ: y,
    SCALES: x,
    noteName: F,
    scaleNotes: ne,
    scaleTriads: Q,
    triadGrips: oe,
    chordGrip: j,
    renderChordDiagram: re,
    selectionFromURL: ce,
    selectionHref: be,
    renderBoard: G,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: J,
    syncBoxSystem: he,
    fingeringBoxes: W,
    boxOptions: ue,
    revealPositions: le
  };
})();
globalThis.MusicMapFretboard = Np;
function No(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function Cp(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function Tp(s) {
  const i = Cp(s), l = Math.round(i), u = (i - l) * 100;
  return { midi: l, cents: u };
}
const Ve = globalThis.MusicMapFretboard, He = (s) => (s % 12 + 12) % 12, Mp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], _p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], $e = (s, i = !1, l = !1) => (i ? _p : Mp)[He(s)] + (l ? Math.floor(s / 12) - 1 : ""), di = (s) => Ve.CHROM[He(s)], ir = (s, i, l) => Ve.noteName(He(s), i, l);
function bp(s, i) {
  const l = Math.floor(s / 12) - 1;
  return i[0] === "B" && He(s) < 2 ? l - 1 : i[0] === "C" && He(s) > 9 ? l + 1 : l;
}
const sn = ["ohut E", "B", "G", "D", "A", "paksu E"], iu = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Dh = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], Pp = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], bi = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, Be = (s, i) => ({ string: s, fret: i, midi: Ve.OPEN_PITCHES[s] + i });
function hs(s, i, l) {
  return [...s].sort((u, d) => u - d).flatMap((u) => Array.from({ length: Math.max(0, l - i + 1) }, (d, h) => Be(u, i + h)));
}
const Ze = (s) => `${s.string}:${s.fret}`, _i = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, zh = (s, i) => i === "maj" ? `${di(s)}-duurisointu` : i === "min" ? `${di(s)}-mollisointu` : `${di(s)}7-sointu`, sr = [
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
], Vd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Bh(s, i) {
  const l = Vd[i] ?? Vd.E, u = He(s - l.root);
  return l.frets.flatMap((d, h) => d === null ? [] : [Be(h, d + u)]);
}
const Na = {
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
}, $a = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, ui = (s, i, l, u) => typeof s == "number" && Number.isFinite(s) ? Math.max(i, Math.min(l, s)) : u, Cn = (s, i, l) => i.includes(s) ? s : l;
function Aa(s) {
  const i = { ...Na };
  i.mode = Cn(s.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], i.mode), i.strings = Array.isArray(s.strings) ? [...new Set(s.strings.filter((l) => Number.isInteger(l) && l >= 0 && l <= 5))].sort((l, u) => l - u) : i.strings, i.strings.length || (i.strings = [...Na.strings]), i.min = Math.round(ui(s.min, 0, 24, i.min)), i.max = Math.round(ui(s.max, i.min, 24, Math.max(i.min, i.max)));
  for (const l of ["accidentals", "flats", "weak", "advance", "reference"]) typeof s[l] == "boolean" && (i[l] = s[l]);
  return i.check = Cn(s.check, ["class", "pitch"], i.check), i.input = Cn(s.input, ["mic", "board"], i.input), i.rounds = [0, 10, 20].includes(s.rounds) ? s.rounds : i.rounds, i.root = Math.round(ui(s.root, 0, 11, i.root)), i.scale = typeof s.scale == "string" && Object.hasOwn(Ve.SCALES, s.scale) ? s.scale : i.scale, i.box = Math.round(ui(s.box, 0, 5, i.box)), i.order = Cn(s.order, ["random", "up", "down"], i.order), i.chord = Cn(s.chord, ["maj", "min", "dom7"], i.chord), i.chordTone = Cn(s.chordTone, ["build", "random", "1", "3", "5", "7"], i.chordTone), i.chord !== "dom7" && i.chordTone === "7" && (i.chordTone = "build"), i.shape = Cn(s.shape, ["C", "A", "G", "E", "D"], i.shape), i.intervals = Array.isArray(s.intervals) ? [...new Set(s.intervals.filter((l) => Number.isInteger(l) && l >= 1 && l <= 12))].sort((l, u) => l - u) : i.intervals, i.intervals.length || (i.intervals = [...Na.intervals]), i.direction = Cn(s.direction, ["up", "down", "both"], i.direction), i.hints = Cn(s.hints, ["off", "always", "fade"], i.hints), i.activity = Cn(s.activity, ["play", "degree"], i.activity), i.minRms = ui(s.minRms, 1e-3, 0.15, i.minRms), i.clarity = ui(s.clarity, 0.85, 0.99, i.clarity), i.stability = ui(s.stability, 120, 800, i.stability), i.cents = ui(s.cents, 10, 45, i.cents), i.device = typeof s.device == "string" ? s.device.slice(0, 256) : "", i;
}
function Ap(s, i) {
  const l = new URLSearchParams(s), u = { ...i };
  for (const [d, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    l.has(d) && Object.assign(u, { [h]: l.get(d) });
  for (const [d, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    l.has(d) && (u[h] = Number(l.get(d)));
  l.has("kielet") && (u.strings = l.get("kielet").split(",").map((d) => Number(d) - 1)), l.has("intervallit") && (u.intervals = l.get("intervallit").split(",").map(Number));
  for (const [d, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    l.has(d) && (u[h] = l.get(d) === "1");
  if (l.has("toonikka")) {
    const d = l.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], f = Math.max(Ve.CHROM.indexOf(h), p.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    f >= 0 && (u.root = f);
  }
  return Aa(u);
}
function Lp(s) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: s.mode,
    toonikka: Ve.CHROM[s.root],
    asteikko: s.scale,
    alku: String(s.min),
    loppu: String(s.max),
    boksi: String(s.box),
    kierros: String(s.rounds),
    tarkistus: s.check,
    muoto: s.shape,
    sointu: s.chord,
    jarjestys: s.order,
    vastaus: s.input,
    vihjeet: s.hints,
    tehtava: s.activity,
    sointuaste: s.chordTone,
    suunta: s.direction,
    kielet: s.strings.map((i) => i + 1).join(","),
    intervallit: s.intervals.join(","),
    kromaattinen: s.accidentals ? "1" : "0",
    alennukset: s.flats ? "1" : "0",
    kertaus: s.weak ? "1" : "0",
    vertailu: s.reference ? "1" : "0"
  });
}
const Pi = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, zn = (s) => s.mode === "scale" && s.order !== "random", Vh = (s) => ["note", "degree"].includes(Pi(s)) ? "class" : zn(s) ? "pitch" : s.check, Sa = (s) => Pi(s) === "mic", Kd = "musiikin-kartta:harjoittelu", Kh = 3, zo = () => ({ version: Kh, settings: { ...Na }, stats: {}, recent: [], sessions: [] }), Uh = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, xn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function Rp(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((i) => xn(s[i])) && s.correct <= s.attempts && (s.errors === void 0 || xn(s.errors)) && (s.ema === void 0 || xn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || xn(s.emaMs));
}
function Op(s) {
  return !!s && typeof s.id == "string" && xn(s.count) && xn(s.first) && s.first <= s.count && xn(s.ms) && xn(s.at) && (s.solo === void 0 || xn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || xn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function Ud(s) {
  if (!s) return zo();
  const i = JSON.parse(s);
  if (!i || ![1, 2, 3].includes(i.version) || !i.stats || typeof i.stats != "object" || Array.isArray(i.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(i.stats).some((p) => !Rp(p))) throw new Error("Virheellisiä tilastoja");
  if (i.recent !== void 0 && (!Array.isArray(i.recent) || i.recent.some((p) => !p || typeof p.id != "string" || !xn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (i.sessions !== void 0 && (!Array.isArray(i.sessions) || i.sessions.some((p) => !Op(p)))) throw new Error("Virheellisiä kierroksia");
  const l = i.version < 3, u = Aa(i.settings ?? {}), d = l && i.settings?.hints !== "always" && i.settings?.hints !== "off";
  d && (u.hints = "off");
  const h = {
    version: Kh,
    settings: u,
    stats: Object.fromEntries(Object.entries(i.stats).map(([p, f]) => [p, { ...f, errors: f.errors ?? 0 }])),
    recent: (i.recent ?? []).slice(-500),
    sessions: (i.sessions ?? []).slice(-200)
  };
  return (d || i.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const Hd = 2500, $p = 8e3, Gd = 0.3, rr = (s) => s.ema ?? s.correct / s.attempts, ar = (s) => s.emaMs ?? s.totalMs / s.attempts;
function su(s) {
  if (!s?.attempts) return null;
  const i = Math.max(0, Math.min(1, 1 - (ar(s) - Hd) / ($p - Hd)));
  return rr(s) * 0.65 + i * 0.35;
}
function Ip(s) {
  return !s || s.attempts < 3 ? 3 : 0.25 + (1 - su(s)) * 3;
}
class Wd {
  constructor(i) {
    this.storage = i;
    try {
      this.data = Ud(i?.getItem(Kd) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = zo();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Kd, JSON.stringify(this.data)), this.warning = "";
      } catch {
        this.warning = "Selaintallennus ei onnistu. Tämän käynnin tulokset säilyvät vain sivun aukiolon ajan. Voit ladata varmuuskopion.";
      }
  }
  settings(i) {
    this.data.settings = i, this.save();
  }
  dismissNotice() {
    delete this.data.notice, this.save();
  }
  record(i) {
    if (this.data.recent.some((p) => p.id === i.id)) return;
    const l = Uh(i), u = this.data.stats[l] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(i.first), h = {
      attempts: u.attempts + 1,
      correct: u.correct + d,
      errors: u.errors + i.errors,
      totalMs: u.totalMs + i.ms,
      lastSeen: i.at,
      ema: u.attempts ? rr(u) + Gd * (d - rr(u)) : d,
      emaMs: u.attempts ? ar(u) + Gd * (i.ms - ar(u)) : i.ms
    };
    Object.defineProperty(this.data.stats, l, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, i].slice(-500), this.save();
  }
  session(i) {
    this.data.sessions = [...this.data.sessions.filter((l) => l.id !== i.id), i].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(i) {
    if (!i.trim()) throw new Error("Tyhjä tiedosto");
    const l = Ud(i);
    this.data = l, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...zo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Fp = 4e3, Yd = 12, Dp = 1500;
function zp(s, i) {
  const l = s.left + s.stickyLeft, u = s.right;
  let d = 0;
  if (i.left < l ? d = i.left - l - Yd : i.right > u && (d = i.right - u + Yd), d === 0) return null;
  const h = Math.max(0, Math.min(s.maxScroll, s.scrollLeft + d));
  return Math.abs(h - s.scrollLeft) < 1 ? null : h;
}
function Bp(s, i) {
  return i.right <= s.left + s.stickyLeft || i.left >= s.right;
}
function Hh(s, i, l, { stickySelector: u, enabled: d = !0, playback: h } = {}) {
  const p = b.useRef(0), f = b.useRef(!1), k = b.useRef(""), S = b.useRef(0), v = b.useRef(h);
  b.useEffect(() => {
    const y = s.current;
    if (!y || !d) return;
    const x = () => {
      p.current = Date.now() + Fp;
    }, T = () => {
      f.current = !0, x();
    }, _ = () => {
      f.current && (f.current = !1, x());
    }, E = (w) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(w.key) && x();
    };
    return y.addEventListener("pointerdown", T, { passive: !0 }), y.addEventListener("touchstart", T, { passive: !0 }), y.addEventListener("wheel", x, { passive: !0 }), y.addEventListener("keydown", E), window.addEventListener("pointerup", _, { passive: !0 }), window.addEventListener("pointercancel", _, { passive: !0 }), window.addEventListener("touchend", _, { passive: !0 }), window.addEventListener("touchcancel", _, { passive: !0 }), () => {
      y.removeEventListener("pointerdown", T), y.removeEventListener("touchstart", T), y.removeEventListener("wheel", x), y.removeEventListener("keydown", E), window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _), window.removeEventListener("touchend", _), window.removeEventListener("touchcancel", _);
    };
  }, [s, d]), b.useLayoutEffect(() => {
    const y = h !== void 0 && !!h && h !== v.current;
    v.current = h, y && !f.current && (p.current = 0);
  }, [h]), b.useLayoutEffect(() => {
    h === void 0 && k.current === "" && l !== "" && Date.now() - S.current > Dp && !f.current && (p.current = 0), k.current !== "" && l === "" && (S.current = Date.now()), k.current = l;
    const y = s.current;
    if (!y || !d || !l || f.current || Date.now() < p.current) return;
    const x = y.querySelector(i);
    if (!x) return;
    const T = y.getBoundingClientRect(), _ = x.getBoundingClientRect(), E = u ? y.querySelector(u) : null, w = E && getComputedStyle(E).position === "sticky" ? E.getBoundingClientRect().width : 0, z = {
      left: T.left,
      right: T.left + y.clientWidth,
      scrollLeft: y.scrollLeft,
      maxScroll: y.scrollWidth - y.clientWidth,
      stickyLeft: w
    }, P = zp(z, _);
    if (P === null) return;
    const V = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Bp(z, _);
    typeof y.scrollTo == "function" ? y.scrollTo({ left: P, behavior: V ? "auto" : "smooth" }) : y.scrollLeft = P;
  }, [s, i, l, u, d, h]);
}
const Vp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Kp = ["e", "B", "G", "D", "A", "E"];
function Gh({ string: s }) {
  return /* @__PURE__ */ a.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ a.jsxs("span", { children: [
      s + 1,
      " · ",
      /* @__PURE__ */ a.jsx("strong", { children: Kp[s] })
    ] }),
    s === 0 ? /* @__PURE__ */ a.jsx("small", { children: "ohuin" }) : s === 5 ? /* @__PURE__ */ a.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Wh = (s) => ({ "--string-thickness": 1.25 + s * 0.45 + "px" }), Up = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Yh({ min: s, max: i }) {
  return /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
    /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: i - s + 1 }, (l, u) => {
      const d = s + u;
      return /* @__PURE__ */ a.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Vp.has(d) ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function hi({ area: s, marks: i = [], mutedStrings: l = [], disabled: u = !1, onAnswer: d, caption: h = "Otelauta", follow: p = "hints", playback: f }) {
  const k = { "--cols": s.max - s.min + 1 }, { strings: S, min: v, max: y } = s, [x, T] = b.useState({ string: Math.min(...S), fret: v }), _ = b.useRef(null), E = new Map(i.map((B) => [Ze(B), B])), w = i.map((B) => `${Ze(B)}${B.kind}`).join(",");
  b.useEffect(() => {
    if (p !== "hints") return;
    const B = _.current, D = B?.querySelector(".target, .anchor");
    B && D && (B.scrollLeft += D.getBoundingClientRect().left - B.getBoundingClientRect().left - B.clientWidth / 2 + D.clientWidth / 2);
  }, [w, p]), b.useEffect(() => {
    p === "playing" && _.current && (_.current.scrollLeft = 0);
  }, [p, v, y]);
  const z = i.find((B) => B.kind === "playing");
  Hh(_, ".playing", z ? Ze(z) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: f });
  const [P, U] = b.useState({ left: !1, right: !1 });
  b.useEffect(() => {
    const B = _.current;
    if (!B) return;
    const D = () => {
      const F = B.scrollLeft > 2, ne = B.scrollLeft + B.clientWidth < B.scrollWidth - 2;
      U((ie) => ie.left === F && ie.right === ne ? ie : { left: F, right: ne });
    };
    D(), B.addEventListener("scroll", D, { passive: !0 });
    const O = typeof ResizeObserver > "u" ? null : new ResizeObserver(D);
    return O?.observe(B), () => {
      B.removeEventListener("scroll", D), O?.disconnect();
    };
  }, [w, v, y]);
  const V = S.includes(x.string) && x.fret >= v && x.fret <= y ? x : { string: Math.min(...S), fret: v };
  return /* @__PURE__ */ a.jsxs("div", { className: "fret-wrap" + (P.left ? " more-left" : "") + (P.right ? " more-right" : ""), children: [
    (P.left || P.right) && /* @__PURE__ */ a.jsxs("p", { className: "fret-scroll-hint", children: [
      P.left && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      P.left && P.right ? "molemmilla puolilla" : P.right ? "oikealla" : "vasemmalla",
      P.right && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ a.jsx("div", { ref: _, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board", style: k, children: [
      /* @__PURE__ */ a.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ a.jsx(Yh, { min: v, max: y }),
      /* @__PURE__ */ a.jsx("tbody", { children: Ve.OPEN_PITCHES.map((B, D) => /* @__PURE__ */ a.jsxs("tr", { className: S.includes(D) ? "" : "unused", style: Wh(D), children: [
        /* @__PURE__ */ a.jsxs("th", { scope: "row", "aria-label": `${D + 1}. kieli: ${sn[D]}${l.includes(D) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ a.jsx(Gh, { string: D }),
          l.includes(D) && /* @__PURE__ */ a.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        hs([D], v, y).map((O) => {
          const F = E.get(Ze(O)), ne = `${sn[D]}-kieli, ${bi(O.fret)}`;
          return /* @__PURE__ */ a.jsx("td", { className: `${O.fret === 0 ? "open-fret " : ""}${F ? F.kind === "answer" ? "target" : F.kind : ""}`, children: /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "data-string": D,
              "data-fret": O.fret,
              tabIndex: V.string === D && V.fret === O.fret ? 0 : -1,
              onFocus: () => T(O),
              onKeyDown: (ie) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(ie.key)) return;
                ie.preventDefault();
                const de = [...S].sort((W, le) => W - le), _e = de.indexOf(D), J = ie.key === "ArrowUp" ? de[Math.max(0, _e - 1)] : ie.key === "ArrowDown" ? de[Math.min(de.length - 1, _e + 1)] : D, he = ie.key === "Home" ? v : ie.key === "End" ? y : Math.max(v, Math.min(y, O.fret + (ie.key === "ArrowRight" ? 1 : ie.key === "ArrowLeft" ? -1 : 0)));
                ie.currentTarget.closest("table")?.querySelector(`button[data-string="${J}"][data-fret="${he}"]`)?.focus();
              },
              disabled: u || !S.includes(D),
              "aria-label": ne + (F ? `, ${Up[F.kind]}${F.label ? " " + F.label : ""}` : ""),
              onClick: () => d?.(O),
              children: F ? /* @__PURE__ */ a.jsx("span", { className: "dot", children: F.label || "●" }) : null
            }
          ) }, O.fret);
        })
      ] }, D)) })
    ] }) })
  ] });
}
function Hp({ area: s, stats: i, input: l, check: u, flats: d }) {
  const { strings: h, min: p, max: f } = s, k = `${l}:${u}:solo:notes:`;
  return /* @__PURE__ */ a.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board mastery", style: { "--cols": f - p + 1 }, children: [
    /* @__PURE__ */ a.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ a.jsx(Yh, { min: p, max: f }),
    /* @__PURE__ */ a.jsx("tbody", { children: Ve.OPEN_PITCHES.map((S, v) => /* @__PURE__ */ a.jsxs("tr", { className: h.includes(v) ? "" : "unused", style: Wh(v), children: [
      /* @__PURE__ */ a.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${sn[v]}`, children: /* @__PURE__ */ a.jsx(Gh, { string: v }) }),
      hs([v], p, f).map((y) => {
        const x = Object.hasOwn(i, k + Ze(y)) ? i[k + Ze(y)] : void 0, T = su(x), _ = T === null ? "unseen" : x.attempts < 3 ? "few" : T >= 0.8 ? "strong" : T >= 0.5 ? "growing" : "weak", E = `${sn[v]}-kieli, ${bi(y.fret)}, ${$e(y.midi, d)}`, w = x ? `${Math.round(T * 100)} %, ${x.correct}/${x.attempts} heti oikein, viime aikoina ${Math.round(rr(x) * 100)} % ja ${(ar(x) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ a.jsxs("td", { className: `${y.fret === 0 ? "open-fret " : ""}${_}`, title: `${E}: ${w}`, children: [
          /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: T === null ? "·" : x.attempts < 3 ? "?" : Math.round(T * 100) }),
          /* @__PURE__ */ a.jsxs("span", { className: "sr-only", children: [
            E,
            ": ",
            w
          ] })
        ] }, y.fret);
      })
    ] }, v)) })
  ] }) });
}
const Gp = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", Ia = (s) => s.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[s.scale]) : _i[s.mode === "caged" ? "maj" : s.chord].tones, Qh = (s) => Ve.fingeringBoxes(s.root, Ve.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
function Ai(s) {
  if (s.mode === "caged") {
    const i = Bh(s.root, s.shape).map((l) => l.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...i), max: Math.max(...i), fixed: "shape" };
  }
  if (s.mode === "scale" && s.box) {
    const i = Qh(s);
    return { strings: s.strings, min: i.start, max: i.end, fixed: "box" };
  }
  return { strings: s.strings, min: s.min, max: s.max, fixed: "" };
}
function Wp(s) {
  const i = Ai(s);
  return i.fixed ? { ...i, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, i.min - 1), max: Math.min(24, i.max + 1) } : i;
}
function or(s) {
  const i = Ai(s), l = hs(i.strings, i.min, i.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return l.filter((h) => s.accidentals || ![1, 3, 6, 8, 10].includes(He(h.midi)));
  if (s.mode === "caged") {
    const h = new Set(Bh(s.root, s.shape).map(Ze));
    return l.filter((p) => h.has(Ze(p)));
  }
  if (s.mode === "interval") return l;
  const u = l.filter((h) => Ia(s).some(([p]) => He(h.midi - s.root) === p));
  if (s.mode !== "scale" || !s.box) return u;
  const d = Qh(s);
  return u.filter((h) => {
    const p = d.strings[h.string];
    return p.length > 0 && h.fret >= p[0] && h.fret <= p.at(-1);
  });
}
function Jh(s, i) {
  return (s.direction === "both" ? ["up", "down"] : [s.direction]).flatMap((u) => s.intervals.map((d) => ({
    iv: d,
    direction: u,
    pairs: i.flatMap((h) => i.filter((p) => p.midi === h.midi + (u === "down" ? -d : d)).map((p) => ({ reference: h, target: p })))
  }))).filter((u) => u.pairs.length);
}
function Yp(s) {
  const i = Ia(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? i : i.filter(([, l]) => l.endsWith(s.chordTone));
}
function Bo(s) {
  const i = or(s), l = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!i.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : l}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${l}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${l}`;
  const u = Yp(s).filter(([d]) => !i.some((h) => He(h.midi - s.root) === d));
  return u.length ? `Valitulta alueelta puuttuu soinnun ${u.map(([, d]) => d + ". aste").join(" ja ")}. ${l}` : s.mode === "interval" && !Jh(s, i).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : zn(s) && new Set(i.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${l}` : null;
}
function Qp(s, i) {
  const l = [...new Map([...i].sort((u, d) => u.midi - d.midi || u.string - d.string).map((u) => [u.midi, u])).values()];
  return s.order === "down" ? l.reverse() : l;
}
function Xh(s) {
  return zn(s) ? new Set(or(s).map((i) => i.midi)).size : s.rounds;
}
function Jp(s, i) {
  return s.hints === "always" ? 2 : s.hints === "fade" ? i <= 3 ? 2 : i <= 6 ? 1 : 0 : 0;
}
function is(s, i, l = Math.random) {
  if (!s.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const u = i.reduce((p, f) => p + f, 0), d = Math.min(0.999999999, Math.max(0, l()));
  if (!(u > 0)) return s[Math.floor(d * s.length)];
  let h = d * u;
  for (let p = 0; p < s.length; p++)
    if (h -= i[p], h < 0) return s[p];
  return s.at(-1);
}
const Qd = (s, i) => s.mode === "caged" ? `caged:${s.root}:${s.shape}:${i}` : s.mode === "chord" ? `chord:${s.root}:${s.chord}:${i}:${s.activity}` : `scale:${s.root}:${s.scale}:${i}:${s.activity}`;
function Mi(s, i) {
  const l = s.filter((u) => !i(u));
  return l.length ? l : s;
}
function Xp(s, i, l = {}, u, d = Math.random) {
  const h = Bo(s);
  if (h) throw new Error(h);
  const p = Vh(s), f = Pi(s), k = p === "pitch", S = (O) => s.weak ? Ip(l[Uh({ input: f, check: p, hint: !1, item: O })]) : 1, v = (O) => is(O, O.map(() => 1), d), y = or(s), x = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const O = Mi(y, (ie) => !!u && Ze(ie) === Ze(u.position)), F = is(O, O.map((ie) => S(`notes:${Ze(ie)}`)), d), ne = $e(F.midi, s.flats, k);
    return {
      ...x,
      position: F,
      midi: F.midi,
      name: ne,
      item: `notes:${Ze(F)}`,
      prompt: `Etsi ${ne} ${iu[F.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const O = (de) => `ear-note:${He(de.midi)}${s.reference ? ":ref" : ""}`, F = Mi(y, (de) => !!u && He(de.midi) === He(u.midi)), ne = is(F, F.map((de) => S(O(de))), d), ie = s.reference ? 57 + 12 * Math.round((ne.midi - 57) / 12) : void 0;
    return {
      ...x,
      position: ne,
      midi: ne.midi,
      name: $e(ne.midi, s.flats),
      item: O(ne),
      choices: "note",
      reference: ie,
      sound: ie === void 0 ? [ne.midi] : [ie, ne.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const O = Mi(y, (ne) => !!u && ne.midi === u.midi), F = is(O, O.map((ne) => S(`repeat:${ne.midi}`)), d);
    return {
      ...x,
      position: F,
      midi: F.midi,
      name: $e(F.midi, s.flats, !0),
      item: `repeat:${F.midi}`,
      sound: [F.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const O = Mi(Jh(s, y), (ie) => u?.interval === ie.iv && u?.direction === ie.direction), F = is(O, O.map((ie) => S(`interval:${ie.iv}:${ie.direction}`)), d), ne = v(Mi(F.pairs, (ie) => u?.reference === ie.reference.midi));
    return {
      ...x,
      position: ne.target,
      midi: ne.target.midi,
      name: $e(ne.target.midi, s.flats, !0),
      item: `interval:${F.iv}:${F.direction}`,
      interval: F.iv,
      direction: F.direction,
      reference: ne.reference.midi,
      sound: [ne.reference.midi, ne.target.midi],
      prompt: `Kuulet ${F.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${$e(ne.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const T = Ia(s);
  let _, E = 0;
  if (zn(s)) {
    const O = Qp(s, y);
    E = O.length, _ = O[i % O.length];
  } else {
    const O = T.filter(([ie]) => y.some((de) => He(de.midi - s.root) === ie)), F = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [T[i % T.length]] : T.filter(([, ie]) => ie.endsWith(s.chordTone)) : Mi(O, ([ie]) => u?.interval === ie), [ne] = is(F, F.map(([ie]) => S(Qd(s, ie))), d);
    _ = v(Mi(y.filter((ie) => He(ie.midi - s.root) === ne), (ie) => !!u && Ze(ie) === Ze(u.position)));
  }
  const w = He(_.midi - s.root), z = T.find(([O]) => O === w)[1], P = ir(s.root, w, z), U = k ? P + bp(_.midi, P) : P, V = s.mode === "scale" ? `${di(s.root)}-${Ve.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${di(s.root)}-duurisointu, ${s.shape}-muoto` : zh(s.root, s.chord), B = s.mode !== "caged" && s.activity === "degree", D = B ? `${V}: mikä aste on ${P}?` : E ? `${V} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${i % E + 1}/${E}: ${z}. aste (${U}).` : `${V}: etsi ${z}. aste${k ? ` (${U})` : ""}.`;
  return {
    ...x,
    position: _,
    midi: _.midi,
    name: U,
    item: Qd(s, w),
    prompt: D,
    degree: z,
    interval: w,
    choices: B ? "degree" : "position"
  };
}
function Vo(s, i, l) {
  return Number.isInteger(i) && (l === "class" ? He(s) === He(i) : s === i);
}
function Zh(s, i, l) {
  return Vo(i.midi, l.midi, i.check) ? s.mode === "notes" ? l.string === i.position.string : Gp(s) ? or(s).some((u) => Ze(u) === Ze(l)) : !0 : !1;
}
function Zp(s, i) {
  const l = Ai(s);
  return hs(l.strings, l.min, l.max).filter((u) => Zh(s, i, u));
}
const Pt = (s, i, l) => ({ ...s, label: i, kind: l }), qp = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function ev(s, i, l) {
  if (l <= 0) return { marks: [], text: "" };
  const u = l >= 2, d = Ai(s), h = hs(d.strings, d.min, d.max), p = Zp(s, i);
  if (s.mode === "notes") {
    if (u) return { marks: p.map((z) => Pt(z, i.name, "answer")), text: `${i.name} on ${Dh[i.position.string]}: ${bi(i.position.fret)}.` };
    const E = h.find((z) => z.string === i.position.string), w = $e(E.midi, s.flats);
    return {
      marks: [Pt(E, w, "anchor")],
      text: `Apupiste: ${Pp[E.string]} ${E.fret === 0 ? "vapaa sävel" : E.fret + ". nauhan sävel"} on ${w}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return u ? { marks: [Pt(i.position, i.name, "answer")], text: `Sävel on ${i.name}.` } : { marks: [Pt(i.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${sn[i.position.string]}-kieli, ${bi(i.position.fret)}.` };
  if (s.mode === "repeat")
    return u ? { marks: p.map((E) => Pt(E, $e(E.midi, s.flats, i.check === "pitch"), "answer")), text: `Sävel on ${i.name}.` } : { marks: [], text: `Sävel löytyy ${iu[i.position.string]}.` };
  if (s.mode === "interval") {
    const E = $e(i.reference, s.flats, !0), w = h.filter((z) => z.midi === i.reference).map((z) => Pt(z, E, "anchor"));
    return u ? {
      marks: [...w, ...p.map((z) => Pt(z, $e(z.midi, s.flats, !0), "answer"))],
      text: `${qp(sr[i.interval])} ${i.direction === "up" ? "ylöspäin" : "alaspäin"}: ${E} → ${i.name}.`
    } : { marks: w, text: `Alkusävel ${E} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${i.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const f = or(s), k = Ia(s), S = (E) => k.find(([w]) => w === He(E.midi - s.root))?.[1] ?? "", v = ir(s.root, i.interval, i.degree), y = f.filter((E) => He(E.midi - s.root) === 0), x = (E) => p.some((w) => Ze(w) === Ze(E)), T = `${i.degree}. aste on ${v}.`;
  if (s.mode === "caged")
    return u ? { marks: f.map((E) => Pt(E, S(E), x(E) ? "answer" : "shape")), text: T } : { marks: f.map((E) => Pt(E, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${i.degree}. aste?` };
  const _ = s.mode === "scale" ? "asteikon" : "soinnun";
  if (i.choices === "degree") {
    const E = f.filter((w) => He(w.midi) === He(i.midi));
    return u ? { marks: [...(i.interval === 0 ? [] : y).map((w) => Pt(w, "1", "anchor")), ...E.map((w) => Pt(w, i.degree, "answer"))], text: `${v} on ${i.degree}. aste.` } : i.interval === 0 ? { marks: E.map((w) => Pt(w, v, "shape")), text: `Katso ${_} nimeä: mikä on sen perussävel?` } : {
      marks: [...y.map((w) => Pt(w, "1", "anchor")), ...E.map((w) => Pt(w, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return u ? { marks: [...y.filter((E) => !x(E)).map((E) => Pt(E, "1", "anchor")), ...p.map((E) => Pt(E, i.degree, "answer"))], text: T } : i.interval === 0 ? { marks: [], text: `1. aste on ${_} perussävel ${di(s.root)}.` } : { marks: y.map((E) => Pt(E, "1", "anchor")), text: `Apupiste: perussävelet (1). ${i.degree}. aste on ${i.interval} puoliaskelta perussävelen yläpuolella.` };
}
class tv {
  constructor(i, l, u, d = () => performance.now(), h = Math.random) {
    this.settings = i, this.stats = l, this.record = u, this.now = d, this.random = h, this.total = Xh(i);
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
      this.question = Xp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Jp(this.settings, this.index), this.started = this.now(), this.phase = "active";
    }
  }
  pause() {
    ["active", "feedback"].includes(this.phase) && (this.prior = this.phase, this.pausedAt = this.now(), this.phase = "paused");
  }
  resume() {
    this.phase === "paused" && (this.started += this.now() - this.pausedAt, this.phase = this.prior);
  }
  /** Vihjeen käyttö jää voimaan, vaikka vihje piilotettaisiin näkyvistä. */
  useHint(i) {
    this.phase === "active" && (this.hintLevel = Math.max(this.hintLevel, Math.min(2, Math.round(i))));
  }
  /** heldMs: kuinka kauan mikrofonin sävel oli soinut ennen hyväksymistä. Se ei kuulu vastausaikaan. */
  answer(i, l, u, d = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const h = this.question;
    if (!(l === "degree" ? i === h.interval : l === "note" ? Vo(h.midi, i, "class") : l === "board" ? !!u && Zh(this.settings, h, u) : Vo(h.midi, i, h.check)))
      return l === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const f = l === "board" ? u : void 0, k = {
      id: `${this.id}:${this.index}`,
      item: f && this.settings.mode === "notes" ? `notes:${Ze(f)}` : h.item,
      mode: this.settings.mode,
      input: l,
      check: h.check,
      expected: h.midi,
      played: i,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, d)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return f ? k.position = Ze(f) : this.settings.mode === "notes" && (k.position = Ze(h.position)), this.results.push(k), this.record(k), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Ko(s) {
  const i = s.filter((l) => !l.hint);
  return {
    count: s.length,
    first: s.filter((l) => l.first).length,
    solo: i.length,
    soloFirst: i.filter((l) => l.first).length,
    guided: s.length - i.length,
    ms: s.reduce((l, u) => l + u.ms, 0)
  };
}
const Uo = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], as = (s) => Uo.find(([i]) => i === s)?.[1] ?? s;
function Bt({ label: s, children: i }) {
  const l = b.useId();
  return /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ a.jsx("label", { htmlFor: l, children: s }),
    b.cloneElement(i, { id: l })
  ] });
}
function Jd({ legend: s, name: i, value: l, options: u, onChange: d, disabled: h }) {
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ a.jsx("legend", { children: s }),
    /* @__PURE__ */ a.jsx("div", { className: "choice-row", children: u.map((p) => /* @__PURE__ */ a.jsxs("label", { className: p.value === l ? "selected" : "", children: [
      /* @__PURE__ */ a.jsx("input", { type: "radio", name: i, value: p.value, checked: p.value === l, onChange: () => d(p.value) }),
      /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("strong", { children: p.title }),
        /* @__PURE__ */ a.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Xd(s) {
  const i = Ai(s), l = Xh(s), u = Pi(s), d = u === "mic" ? "soita kitaralla" : u === "board" ? "vastaa otelaudalta" : u === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = i.fixed === "shape" ? `${s.shape}-muoto, nauhat ${i.min}–${i.max}` : i.fixed === "box" ? `boksi ${s.box}, nauhat ${i.min}–${i.max}` : `nauhat ${i.min}–${i.max}`, p = i.strings.length === 6 ? "" : ` · kielet ${i.strings.map((f) => f + 1).join(", ")}`;
  return `${$a[s.hints].title} · ${d} · ${zn(s) ? `yksi läpisoitto, ${l} säveltä` : l ? `${l} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function Zd({ s, change: i, locked: l, problem: u }) {
  const d = b.useId(), h = (v, y) => i({ ...s, [v]: y }), p = Ai(s), f = Pi(s) === "note" || Pi(s) === "degree", k = ["scale", "chord", "caged"].includes(s.mode), S = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "settings", disabled: l, children: [
    /* @__PURE__ */ a.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Bt, { label: "Harjoitus", children: /* @__PURE__ */ a.jsx("select", { value: s.mode, onChange: (v) => h("mode", v.target.value), children: Uo.map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y }, v)) }) }),
      /* @__PURE__ */ a.jsx("p", { className: "mode-note", children: Uo.find(([v]) => v === s.mode)[2] })
    ] }),
    k && /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Bt, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ a.jsx("select", { value: s.root, onChange: (v) => h("root", Number(v.target.value)), children: Ve.CHROM.map((v, y) => /* @__PURE__ */ a.jsx("option", { value: y, children: v }, v)) }) }),
      s.mode === "scale" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Bt, { label: "Asteikko", children: /* @__PURE__ */ a.jsx("select", { value: s.scale, onChange: (v) => h("scale", v.target.value), children: Object.entries(Ve.SCALES).map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(Bt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ a.jsxs("select", { value: s.box, onChange: (v) => h("box", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ a.jsx(Bt, { label: "Sävelten järjestys", children: /* @__PURE__ */ a.jsxs("select", { value: s.order, onChange: (v) => h("order", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ a.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ a.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      s.mode === "chord" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Bt, { label: "Sointutyyppi", children: /* @__PURE__ */ a.jsx("select", { value: s.chord, onChange: (v) => h("chord", v.target.value), children: Object.entries(_i).map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(Bt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ a.jsxs("select", { value: s.chordTone, onChange: (v) => h("chordTone", v.target.value), children: [
          /* @__PURE__ */ a.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            s.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ a.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ a.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ a.jsxs("option", { value: "3", children: [
            "Terssi · ",
            s.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ a.jsx("option", { value: "5", children: "Kvintti · 5" }),
          s.chord === "dom7" && /* @__PURE__ */ a.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      s.mode === "caged" ? /* @__PURE__ */ a.jsx(Bt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ a.jsx("select", { value: s.shape, onChange: (v) => h("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ a.jsx(Bt, { label: "Tehtävä", children: /* @__PURE__ */ a.jsxs("select", { value: s.activity, onChange: (v) => h("activity", v.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ a.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    s.mode === "interval" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ a.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.intervals.includes(v), onChange: (y) => h("intervals", y.target.checked ? [...s.intervals, v] : s.intervals.filter((x) => x !== v)) }),
        sr[v]
      ] }, v)) }),
      /* @__PURE__ */ a.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ a.jsx(Bt, { label: "Intervallin suunta", children: /* @__PURE__ */ a.jsxs("select", { value: s.direction, onChange: (v) => h("direction", v.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ a.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ a.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ a.jsx(
      Jd,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: s.hints,
        onChange: (v) => h("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...$a[v] }))
      }
    ),
    f ? /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ a.jsx(Jd, { legend: "Vastaustapa", name: `${d}-input`, value: s.input, onChange: (v) => h("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ a.jsx(Bt, { label: "Kierroksen pituus", children: /* @__PURE__ */ a.jsxs("select", { value: s.rounds, disabled: zn(s), onChange: (v) => h("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !f && /* @__PURE__ */ a.jsx(Bt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ a.jsxs("select", { value: zn(s) ? "pitch" : s.check, disabled: zn(s), onChange: (v) => h("check", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ a.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ a.jsx(Bt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ a.jsxs("select", { value: String(s.flats), onChange: (v) => h("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ a.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ a.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      zn(s) && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ a.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${s.shape}-muoto` : `Boksi ${s.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ a.jsxs("button", { type: "button", "aria-pressed": s.min === 0 && s.max === v, onClick: () => i({ ...s, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ a.jsx(Bt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: "0", max: "24", value: s.min, onChange: (v) => h("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ a.jsx(Bt, { label: "Viimeinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: s.min, max: "24", value: s.max, onChange: (v) => h("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ a.jsx("div", { className: "check-row", children: sn.map((v, y) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.strings.includes(y), onChange: (x) => h("strings", x.target.checked ? [...s.strings, y] : s.strings.filter((T) => T !== y)) }),
          y + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "check-row", children: [
        S && /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.accidentals, onChange: (v) => h("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        s.mode === "ear-note" && /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.reference, onChange: (v) => h("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.weak, onChange: (v) => h("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.advance, onChange: (v) => h("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    u && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: u })
  ] });
}
const qd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function nv(s) {
  return s && Object.hasOwn(qd, s) ? qd[s] : null;
}
const iv = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opettele sävelten sijainnit ja harjoittele musiikkikorvaa lyhyillä peleillä.", example: "Sävelten etsintä · Riffikaiku · Ensikeikka" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function sv({ onSelect: s }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ a.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ a.jsx("div", { className: "learning-grid", children: iv.map((i) => /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => s(i.id), children: [
      /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: i.number }),
      /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ a.jsx("strong", { children: i.title }),
        /* @__PURE__ */ a.jsx("span", { children: i.description }),
        /* @__PURE__ */ a.jsx("small", { children: i.example })
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, i.id)) })
  ] });
}
function rv({ onBack: s, onNotes: i }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "learning-home ear-exercise-menu", "aria-labelledby": "ear-exercise-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("h2", { id: "ear-exercise-title", children: "Sävelkorva ja otelauta" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse harjoitus. Voit aloittaa sävelten paikoista tai opetella kuuntelemalla." }),
    /* @__PURE__ */ a.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: i, children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Sävelten etsintä" }),
          /* @__PURE__ */ a.jsx("span", { children: "Etsi seitsemän eri sävelen sijainnit kitaran otelaudalta. Aloita C-sävelestä." }),
          /* @__PURE__ */ a.jsx("small", { children: "Avaa harjoitus" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ a.jsxs("a", { className: "learning-card", href: "riffikaiku.html", children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Riffikaiku (beta)" }),
          /* @__PURE__ */ a.jsx("span", { children: "Kuuntele lyhyt kitarariffi ja toista se virtuaalikitaralla tai oikealla kitaralla." }),
          /* @__PURE__ */ a.jsx("small", { children: "Avaa peli" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ a.jsxs("a", { className: "learning-card", href: "pelit/ensikeikka/", children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "03" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Ensikeikka (beta)" }),
          /* @__PURE__ */ a.jsx("span", { children: "Kuuntele kappaleita ja löydä melodian kotisävel viiden kappaleen ensikeikassa." }),
          /* @__PURE__ */ a.jsx("small", { children: "Avaa peli" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const av = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Ho = 100, qh = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function ru(s) {
  if (s === null || s.trim() === "") return Ho;
  const i = Number(s);
  return Number.isFinite(i) ? Math.round(Math.min(100, Math.max(0, i))) : Ho;
}
function lv() {
  try {
    return ru(localStorage.getItem(qh));
  } catch {
    return Ho;
  }
}
function ov(s) {
  try {
    localStorage.setItem(qh, String(ru(String(s))));
  } catch {
  }
}
function Co(s, i, l = !0) {
  return l ? av[s] * ru(String(i)) / 100 : 0;
}
function ef(s = () => new Audio()) {
  try {
    const i = s();
    return i.volume = 0.5, Math.abs(i.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const tf = 0.12, uv = 2e3, nf = 3, eh = 1e-3, cv = tf, th = 1500, dv = 4e3;
function sf(s) {
  return s.readyState >= nf && !s.seeking;
}
function rf(s) {
  return s.every(sf);
}
function hv(s) {
  let i = 0;
  for (const l of s)
    if (!sf(l))
      try {
        const u = l.play();
        l.pause(), u && typeof u.catch == "function" && u.catch(() => {
        }), i++;
      } catch {
      }
  return i;
}
function fv(s, i, l, u = {
  set: (d, h) => setTimeout(d, h),
  clear: (d) => clearTimeout(d)
}) {
  return new Promise((d) => {
    const h = ["loadeddata", "canplay", "canplaythrough", "seeked", "error"];
    let p = !1, f = null;
    const k = u.set(() => S("aikakatkaisu"), i);
    function S(x) {
      if (!p) {
        p = !0, u.clear(k), f !== null && u.clear(f);
        for (const T of s) for (const _ of h) T.removeEventListener(_, v);
        d(x);
      }
    }
    function v() {
      l() ? S("ohitettu") : s.some((x) => x.error) ? S("virhe") : rf(s) && S("valmis");
    }
    const y = () => {
      v(), p || (f = u.set(y, 50));
    };
    for (const x of s) for (const T of h) x.addEventListener(T, v);
    v(), p || (f = u.set(y, 50));
  });
}
function mv(s, i = !1) {
  return i ? !0 : s.atLoopBoundary || s.drift <= tf || s.seeking || s.readyState < nf ? !1 : s.msSinceLastFix >= uv;
}
const pv = 1.5, vv = 0.4, kv = 0.5;
let Go = null, yv = null;
function gv(s) {
  return Go !== null ? Go : (yv ??= ef()) ? 0 : vv;
}
class af {
  constructor(i = gv()) {
    this.latency = i;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  holdUntil = -1 / 0;
  /**
   * Pidättää korjauskelaukset hetkeen until (performance.now) asti, esimerkiksi toiston alun
   * vakiintumisen ajaksi. Pakotettu tahdistus (käyttäjän kelaus, raidan päälle kytkentä) tehdään silti.
   */
  hold(i) {
    this.holdUntil = i;
  }
  /**
   * Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä.
   * tolerance = ero (s), jota pienempää ei kelata (toiston alussa START_ALIGN_TOLERANCE_SECONDS).
   */
  align(i, l, u = !1, d = performance.now(), h = eh) {
    if (l.readyState < 1 || i.readyState < 1 || !u && (l.paused || i.paused) || !u && d < this.holdUntil) return !1;
    const p = l.currentTime - i.currentTime, f = Math.abs(p), k = i.loop && Number.isFinite(i.duration) && Math.abs(f - i.duration) < 0.35, S = this.lastFix.get(l);
    if (!mv({
      drift: f,
      atLoopBoundary: k,
      seeking: l.seeking,
      readyState: l.readyState,
      msSinceLastFix: S === void 0 ? 1 / 0 : d - S
    }, u)) return !1;
    const v = !i.paused;
    !u && v && S !== void 0 && (this.latency = Math.min(pv, Math.max(0, this.latency - kv * p)), Go = this.latency);
    let y = i.currentTime + (v ? this.latency : 0);
    if (Number.isFinite(l.duration) && (y = Math.min(y, Math.max(0, l.duration - 0.05))), Math.abs(l.currentTime - y) < Math.max(h, eh)) return !1;
    try {
      l.currentTime = y;
    } catch {
      return !1;
    }
    return v ? this.lastFix.set(l, d) : this.lastFix.delete(l), !0;
  }
}
function xv(s = globalThis.navigator) {
  return s ? /iPhone|iPad|iPod/.test(s.userAgent) || s.platform === "MacIntel" && s.maxTouchPoints > 1 : !1;
}
function jv(s = xv(), i = () => ef()) {
  return s ? "webaudio" : i() ? "element" : "webaudio";
}
function Sv(s = globalThis.navigator) {
  const i = s?.audioSession;
  i && i.type !== "playback" && (i.type = "playback");
}
const wv = () => {
  const s = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!s) throw new Error("Web Audio API puuttuu");
  return new s();
};
class Ev {
  constructor(i = wv, l = globalThis.navigator) {
    this.create = i, this.nav = l;
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
        Sv(this.nav);
      } catch (i) {
        this.lastError = "Ääni-istunnon asetus epäonnistui: " + String(i);
      }
      return (!this.context || this.context.state === "closed") && (this.context = this.create(), this.gains = /* @__PURE__ */ new WeakMap()), this.context.state !== "running" && this.context.resume().catch((i) => {
        this.lastError = "Web Audio ei käynnistynyt: " + String(i);
      }), !0;
    } catch (i) {
      return this.lastError = "Web Audio ei ole käytettävissä: " + String(i), !1;
    }
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(i) {
    if (this.gains.has(i)) return !0;
    if (!this.context) return !1;
    try {
      const l = this.context.createMediaElementSource(i), u = this.context.createGain();
      return l.connect(u), u.connect(this.context.destination), this.gains.set(i, u), !0;
    } catch (l) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(l), !1;
    }
  }
  routed(i) {
    return !!i && this.gains.has(i);
  }
  setLevel(i, l) {
    const u = this.gains.get(i);
    u && (u.gain.value = l);
  }
  /** Raidan nykyinen GainNode-taso tai null, jos raitaa ei ole kytketty. */
  level(i) {
    const l = i ? this.gains.get(i) : void 0;
    return l ? l.gain.value : null;
  }
  close() {
    const i = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), i?.close().catch(() => {
    });
  }
}
const Nv = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Cv = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function nh(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const i = Math.floor(s);
  return String(Math.floor(i / 60)) + ":" + String(i % 60).padStart(2, "0");
}
function lf() {
  const s = b.useRef(null), i = b.useRef(null), [l, u] = b.useState(!1), [d, h] = b.useState(!1), [p, f] = b.useState(!1), [k, S] = b.useState(0), [v, y] = b.useState(0), [x, T] = b.useState(""), _ = b.useRef(new af());
  function E(V = !1) {
    const B = s.current, D = i.current;
    !B || !D || !Number.isFinite(B.currentTime) || _.current.align(B, D, V);
  }
  function w() {
    s.current?.pause(), i.current?.pause(), u(!1);
  }
  async function z() {
    const V = s.current, B = i.current;
    if (!(!V || !B)) {
      if (l) {
        w();
        return;
      }
      T(""), B.muted = !d, B.volume = 0.55, V.volume = 0.75, E(!0);
      try {
        await Promise.all(d ? [V.play(), B.play()] : [V.play()]), E(), u(!0);
      } catch {
        w(), T("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function P(V) {
    const B = s.current, D = i.current;
    if (!(!B || !D || !Number.isFinite(V))) {
      B.currentTime = V;
      try {
        D.currentTime = V;
      } catch {
      }
      S(V);
    }
  }
  function U(V) {
    const B = s.current, D = i.current;
    if (h(V), !!D) {
      if (D.muted = !V, !V) {
        D.pause();
        return;
      }
      !B || !l || (E(!0), D.play().catch(() => T("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return b.useEffect(() => {
    const V = () => {
      document.hidden && (s.current?.pause(), i.current?.pause(), u(!1));
    };
    return document.addEventListener("visibilitychange", V), () => {
      document.removeEventListener("visibilitychange", V), s.current?.pause(), i.current?.pause();
    };
  }, []), /* @__PURE__ */ a.jsxs("div", { className: "backing-track-mixer", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "backing-track-heading", children: [
      /* @__PURE__ */ a.jsx("strong", { children: "Am-harjoitustausta" }),
      /* @__PURE__ */ a.jsxs("div", { className: "backing-track-toggles", children: [
        /* @__PURE__ */ a.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: d,
              onChange: (V) => U(V.target.checked)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "Kitara kuuluu" })
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: p,
              onChange: (V) => f(V.target.checked)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ a.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        z();
      }, children: l ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(k, v > 0 ? v : 1),
          disabled: !v,
          onChange: (V) => P(Number(V.target.value))
        }
      ),
      /* @__PURE__ */ a.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        nh(k),
        " / ",
        nh(v)
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: Nv,
        loop: p,
        onLoadedMetadata: (V) => y(V.currentTarget.duration),
        onTimeUpdate: (V) => {
          S(V.currentTarget.currentTime), V.currentTarget.paused || E();
        },
        onEnded: () => {
          s.current?.loop || (i.current?.pause(), u(!1), S(v));
        },
        onPause: () => {
          i.current?.pause(), u(!1);
        },
        onError: () => T("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: i,
        preload: "metadata",
        src: Cv,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const V = s.current, B = i.current;
          V?.duration && B?.duration && Math.abs(V.duration - B.duration) > 0.15 && T("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => T("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    x && /* @__PURE__ */ a.jsx("p", { className: "backing-error", role: "alert", children: x }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Tv = 4e3;
class ih extends Error {
  name = "MicSetupError";
}
async function Mv(s, i) {
  if (!navigator.mediaDevices?.getUserMedia) throw new ih("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const l = {
    audio: {
      deviceId: s ? { exact: s } : void 0,
      // Selaimen puheenkäsittely vääristäisi kitaran sävelkorkeuden ja vaimentaisi soivan sävelen.
      echoCancellation: !1,
      noiseSuppression: !1,
      autoGainControl: !1,
      // Äänikortin soitintulo voi olla toinen kanava; mono-pyyntö summaisi kanavat puoleen tasoon.
      channelCount: { ideal: 2 }
    },
    video: !1
  }, u = await navigator.mediaDevices.getUserMedia(l);
  let d;
  try {
    if (d = i ? i() : new AudioContext(), d.state !== "running") {
      let S;
      await Promise.race([
        d.resume(),
        new Promise((v, y) => {
          S = setTimeout(() => y(new ih("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Tv);
        })
      ]).finally(() => clearTimeout(S));
    }
    const h = d.createMediaStreamSource(u), p = d, f = u.getAudioTracks?.()[0] ?? u.getTracks()[0], k = f?.getSettings?.() ?? {};
    return {
      context: d,
      source: h,
      stream: u,
      label: f?.label ?? "",
      deviceId: k.deviceId ?? "",
      channelCount: k.channelCount ?? 1,
      stop: () => {
        u.getTracks().forEach((S) => S.stop()), h.disconnect(), i || p.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw u.getTracks().forEach((p) => p.stop()), i || await d?.close().catch(() => {
    }), h;
  }
}
async function _v() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((i) => i.kind === "audioinput" && i.deviceId) : [];
}
var To, sh;
function bv() {
  if (sh) return To;
  sh = 1;
  function s(i) {
    if (this.size = i | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = i << 1;
    for (var l = new Array(this.size * 2), u = 0; u < l.length; u += 2) {
      const S = Math.PI * u / this.size;
      l[u] = Math.cos(S), l[u + 1] = -Math.sin(S);
    }
    this.table = l;
    for (var d = 0, h = 1; this.size > h; h <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var f = 0; f < this._width; f += 2) {
        var k = this._width - f - 2;
        this._bitrev[p] |= (p >>> f & 3) << k;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return To = s, s.prototype.fromComplexArray = function(l, u) {
    for (var d = u || new Array(l.length >>> 1), h = 0; h < l.length; h += 2)
      d[h >>> 1] = l[h];
    return d;
  }, s.prototype.createComplexArray = function() {
    const l = new Array(this._csize);
    for (var u = 0; u < l.length; u++)
      l[u] = 0;
    return l;
  }, s.prototype.toComplexArray = function(l, u) {
    for (var d = u || this.createComplexArray(), h = 0; h < d.length; h += 2)
      d[h] = l[h >>> 1], d[h + 1] = 0;
    return d;
  }, s.prototype.completeSpectrum = function(l) {
    for (var u = this._csize, d = u >>> 1, h = 2; h < d; h += 2)
      l[u - h] = l[h], l[u - h + 1] = -l[h + 1];
  }, s.prototype.transform = function(l, u) {
    if (l === u)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = u, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, s.prototype.realTransform = function(l, u) {
    if (l === u)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = u, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, s.prototype.inverseTransform = function(l, u) {
    if (l === u)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = u, this._inv = 1, this._transform4();
    for (var d = 0; d < l.length; d++)
      l[d] /= this.size;
    this._out = null, this._data = null;
  }, s.prototype._transform4 = function() {
    var l = this._out, u = this._csize, d = this._width, h = 1 << d, p = u / h << 1, f, k, S = this._bitrev;
    if (p === 4)
      for (f = 0, k = 0; f < u; f += p, k++) {
        const w = S[k];
        this._singleTransform2(f, w, h);
      }
    else
      for (f = 0, k = 0; f < u; f += p, k++) {
        const w = S[k];
        this._singleTransform4(f, w, h);
      }
    var v = this._inv ? -1 : 1, y = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = u / h << 1;
      var x = p >>> 2;
      for (f = 0; f < u; f += p)
        for (var T = f + x, _ = f, E = 0; _ < T; _ += 2, E += h) {
          const w = _, z = w + x, P = z + x, U = P + x, V = l[w], B = l[w + 1], D = l[z], O = l[z + 1], F = l[P], ne = l[P + 1], ie = l[U], de = l[U + 1], _e = V, J = B, he = y[E], W = v * y[E + 1], le = D * he - O * W, ue = D * W + O * he, Q = y[2 * E], oe = v * y[2 * E + 1], se = F * Q - ne * oe, C = F * oe + ne * Q, j = y[3 * E], re = v * y[3 * E + 1], ce = ie * j - de * re, be = ie * re + de * j, G = _e + se, K = J + C, te = _e - se, q = J - C, ke = le + ce, ye = ue + be, pe = v * (le - ce), Ee = v * (ue - be), Ce = G + ke, Se = K + ye, Me = G - ke, Fe = K - ye, Qe = te + Ee, Je = q - pe, Xe = te - Ee, it = q + pe;
          l[w] = Ce, l[w + 1] = Se, l[z] = Qe, l[z + 1] = Je, l[P] = Me, l[P + 1] = Fe, l[U] = Xe, l[U + 1] = it;
        }
    }
  }, s.prototype._singleTransform2 = function(l, u, d) {
    const h = this._out, p = this._data, f = p[u], k = p[u + 1], S = p[u + d], v = p[u + d + 1], y = f + S, x = k + v, T = f - S, _ = k - v;
    h[l] = y, h[l + 1] = x, h[l + 2] = T, h[l + 3] = _;
  }, s.prototype._singleTransform4 = function(l, u, d) {
    const h = this._out, p = this._data, f = this._inv ? -1 : 1, k = d * 2, S = d * 3, v = p[u], y = p[u + 1], x = p[u + d], T = p[u + d + 1], _ = p[u + k], E = p[u + k + 1], w = p[u + S], z = p[u + S + 1], P = v + _, U = y + E, V = v - _, B = y - E, D = x + w, O = T + z, F = f * (x - w), ne = f * (T - z), ie = P + D, de = U + O, _e = V + ne, J = B - F, he = P - D, W = U - O, le = V - ne, ue = B + F;
    h[l] = ie, h[l + 1] = de, h[l + 2] = _e, h[l + 3] = J, h[l + 4] = he, h[l + 5] = W, h[l + 6] = le, h[l + 7] = ue;
  }, s.prototype._realTransform4 = function() {
    var l = this._out, u = this._csize, d = this._width, h = 1 << d, p = u / h << 1, f, k, S = this._bitrev;
    if (p === 4)
      for (f = 0, k = 0; f < u; f += p, k++) {
        const H = S[k];
        this._singleRealTransform2(f, H >>> 1, h >>> 1);
      }
    else
      for (f = 0, k = 0; f < u; f += p, k++) {
        const H = S[k];
        this._singleRealTransform4(f, H >>> 1, h >>> 1);
      }
    var v = this._inv ? -1 : 1, y = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = u / h << 1;
      var x = p >>> 1, T = x >>> 1, _ = T >>> 1;
      for (f = 0; f < u; f += p)
        for (var E = 0, w = 0; E <= _; E += 2, w += h) {
          var z = f + E, P = z + T, U = P + T, V = U + T, B = l[z], D = l[z + 1], O = l[P], F = l[P + 1], ne = l[U], ie = l[U + 1], de = l[V], _e = l[V + 1], J = B, he = D, W = y[w], le = v * y[w + 1], ue = O * W - F * le, Q = O * le + F * W, oe = y[2 * w], se = v * y[2 * w + 1], C = ne * oe - ie * se, j = ne * se + ie * oe, re = y[3 * w], ce = v * y[3 * w + 1], be = de * re - _e * ce, G = de * ce + _e * re, K = J + C, te = he + j, q = J - C, ke = he - j, ye = ue + be, pe = Q + G, Ee = v * (ue - be), Ce = v * (Q - G), Se = K + ye, Me = te + pe, Fe = q + Ce, Qe = ke - Ee;
          if (l[z] = Se, l[z + 1] = Me, l[P] = Fe, l[P + 1] = Qe, E === 0) {
            var Je = K - ye, Xe = te - pe;
            l[U] = Je, l[U + 1] = Xe;
            continue;
          }
          if (E !== _) {
            var it = q, pt = -ke, Ge = K, De = -te, et = -v * Ce, ut = -v * Ee, Vt = -v * pe, At = -v * ye, Kt = it + et, It = pt + ut, wt = Ge + At, rn = De - Vt, Pe = f + T - E, I = f + x - E;
            l[Pe] = Kt, l[Pe + 1] = It, l[I] = wt, l[I + 1] = rn;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(l, u, d) {
    const h = this._out, p = this._data, f = p[u], k = p[u + d], S = f + k, v = f - k;
    h[l] = S, h[l + 1] = 0, h[l + 2] = v, h[l + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(l, u, d) {
    const h = this._out, p = this._data, f = this._inv ? -1 : 1, k = d * 2, S = d * 3, v = p[u], y = p[u + d], x = p[u + k], T = p[u + S], _ = v + x, E = v - x, w = y + T, z = f * (y - T), P = _ + w, U = E, V = -z, B = _ - w, D = E, O = z;
    h[l] = P, h[l + 1] = 0, h[l + 2] = U, h[l + 3] = V, h[l + 4] = B, h[l + 5] = 0, h[l + 6] = D, h[l + 7] = O;
  }, To;
}
var Pv = bv();
const Av = /* @__PURE__ */ pp(Pv);
class qs {
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
  static forFloat32Array(i) {
    return new qs(
      i,
      (l) => new Float32Array(l)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using
   * {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<Float64Array>}
   */
  static forFloat64Array(i) {
    return new qs(
      i,
      (l) => new Float64Array(l)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using `number[]`
   * buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<number[]>}
   */
  static forNumberArray(i) {
    return new qs(i, (l) => Array(l));
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
  constructor(i, l) {
    if (i < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = i, this._fft = new Av(Ov(2 * i)), this._bufferSupplier = l, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(i, l = this._bufferSupplier(i.length)) {
    if (i.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${i.length}`
      );
    for (let d = 0; d < i.length; d++)
      this._paddedInputBuffer[d] = i[d];
    for (let d = i.length; d < this._paddedInputBuffer.length; d++)
      this._paddedInputBuffer[d] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const u = this._transformBuffer;
    for (let d = 0; d < u.length; d += 2)
      u[d] = u[d] * u[d] + u[d + 1] * u[d + 1], u[d + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let d = 0; d < i.length; d++)
      l[d] = this._inverseBuffer[2 * d];
    return l;
  }
}
function Lv(s) {
  const i = [];
  let l = !1, u = -1 / 0, d = -1;
  for (let h = 1; h < s.length - 1; h++)
    s[h - 1] <= 0 && s[h] > 0 ? (l = !0, d = h, u = s[h]) : s[h - 1] > 0 && s[h] <= 0 ? (l = !1, d !== -1 && i.push(d)) : l && s[h] > u && (u = s[h], d = h);
  return i;
}
function Rv(s, i) {
  const [l, u, d] = [s - 1, s, s + 1], [h, p, f] = [i[l], i[u], i[d]], k = h / 2 - p + f / 2, S = -(h / 2) * (u + d) + p * (l + d) - f / 2 * (l + u), v = h * u * d / 2 - p * l * d + f * l * u / 2, y = -S / (2 * k), x = k * y * y + S * y + v;
  return [y, x];
}
class er {
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
  static forFloat32Array(i) {
    return new er(i, (l) => new Float32Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(i) {
    return new er(i, (l) => new Float64Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(i) {
    return new er(i, (l) => Array(l));
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
  constructor(i, l) {
    this._autocorrelator = new qs(i, l), this._nsdfBuffer = l(i);
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
  set clarityThreshold(i) {
    if (!Number.isFinite(i) || i <= 0 || i > 1)
      throw new Error("clarityThreshold must be a number in the range (0, 1]");
    this._clarityThreshold = i;
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
  set minVolumeAbsolute(i) {
    if (!Number.isFinite(i) || i < 0 || i > this._maxInputAmplitude)
      throw new Error(
        `minVolumeAbsolute must be a number in the range [0, ${this._maxInputAmplitude}]`
      );
    this._minVolumeAbsolute = i;
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
  set minVolumeDecibels(i) {
    if (!Number.isFinite(i) || i > 0)
      throw new Error("minVolumeDecibels must be a number <= 0");
    this._minVolumeAbsolute = this._maxInputAmplitude * 10 ** (i / 10);
  }
  /**
   * Sets the maximum amplitude of an input reading. Must be greater than 0.
   *
   * @param amplitude {number} the maximum amplitude (absolute value) of an input reading
   */
  set maxInputAmplitude(i) {
    if (!Number.isFinite(i) || i <= 0)
      throw new Error("maxInputAmplitude must be a number > 0");
    this._maxInputAmplitude = i;
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
  findPitch(i, l) {
    if (this._belowMinimumVolume(i)) return [0, 0];
    this._nsdf(i);
    const u = Lv(this._nsdfBuffer);
    if (u.length === 0)
      return [0, 0];
    const d = Math.max(...u.map((k) => this._nsdfBuffer[k])), h = u.find(
      (k) => this._nsdfBuffer[k] >= this._clarityThreshold * d
    ), [p, f] = Rv(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [l / p, Math.min(f, 1)];
  }
  /**
   * Returns whether the input audio data is below the minimum volume allowed by
   * the pitch detector.
   *
   * @private
   * @param input {ArrayLike<number>}
   * @returns {boolean}
   */
  _belowMinimumVolume(i) {
    if (this._minVolumeAbsolute === 0) return !1;
    let l = 0;
    for (let u = 0; u < i.length; u++)
      l += i[u] ** 2;
    return Math.sqrt(l / i.length) < this._minVolumeAbsolute;
  }
  /**
   * Computes the NSDF of the input and stores it in the internal buffer. This
   * is equation (9) in the McLeod pitch method paper.
   *
   * @private
   * @param input {ArrayLike<number>}
   */
  _nsdf(i) {
    this._autocorrelator.autocorrelate(i, this._nsdfBuffer);
    let l = 2 * this._nsdfBuffer[0], u;
    for (u = 0; u < this._nsdfBuffer.length && l > 0; u++)
      this._nsdfBuffer[u] = 2 * this._nsdfBuffer[u] / l, l -= i[u] ** 2 + i[i.length - u - 1] ** 2;
    for (; u < this._nsdfBuffer.length; u++)
      this._nsdfBuffer[u] = 0;
  }
}
function Ov(s) {
  return s--, s |= s >> 1, s |= s >> 2, s |= s >> 4, s |= s >> 8, s |= s >> 16, s++, s;
}
function $v(s) {
  const i = s * 0.17;
  let l = 2048;
  for (; l < i && l < 32768; ) l *= 2;
  return l;
}
const Iv = 0.05, Fv = 1.5;
class Dv {
  constructor(i, l = {}) {
    this.mic = i, this.opts = l;
    const u = i.context, d = $v(u.sampleRate), h = Math.max(1, Math.min(2, i.channelCount ?? 1));
    h > 1 && typeof u.createChannelSplitter == "function" && (this.splitter = u.createChannelSplitter(h), i.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const f = u.createAnalyser();
      f.fftSize = d, f.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(f, p) : i.source.connect(f), this.analysers.push(f), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(u.sampleRate * Iv))), this.detector = er.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new zv();
  onset = new Bv();
  /** Kynnysten muuttaminen kesken kuuntelun, esimerkiksi mikrofonitestin liukusäätimistä. */
  setOptions(i) {
    Object.assign(this.opts, i);
  }
  start() {
    if (this.running) return;
    this.running = !0, this.gate.reset(), this.onset.reset();
    const i = () => {
      this.running && (this.paused || this.processFrame(performance.now()), this.rafId = requestAnimationFrame(i));
    };
    this.rafId = requestAnimationFrame(i);
  }
  stop() {
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = null, this.gate.reset(), this.onset.reset();
    for (const i of this.analysers) i.disconnect();
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
  processFrame(i) {
    const {
      minClarity: l = 0.9,
      minRms: u = 0.01,
      stabilityMs: d = 240,
      centsTolerance: h = 35,
      minFreq: p = 70,
      maxFreq: f = 1450,
      onFrame: k,
      onStableNote: S
    } = this.opts, v = this.analysers.map((O, F) => (O.getFloatTimeDomainData(this.buffers[F]), rh(this.buffers[F], this.buffers[F].length - this.shortLength))), y = v.indexOf(Math.max(...v));
    y !== this.channel && v[y] > (v[this.channel] ?? 0) * Fv && (this.channel = y);
    const x = this.buffers[this.channel], T = v[this.channel], _ = Vv(x, x.length - this.shortLength), E = { rms: T, peak: _, channel: this.channel, levels: v }, w = T < u, z = this.onset.feed(T, i, u);
    if (w && rh(x, 0) < u) {
      this.gate.feed(null, i, d, !0, !1), k?.({ ...E, status: "silent" });
      return;
    }
    const [P, U] = this.detector.findPitch(x, this.mic.context.sampleRate);
    if (!isFinite(P) || U < l) {
      this.gate.feed(null, i, d, w, z), k?.({ ...E, status: w ? "silent" : "unclear", clarity: isFinite(U) ? U : 0 });
      return;
    }
    if (P < p || P > f) {
      this.gate.feed(null, i, d, w, z), k?.({ ...E, status: "out-of-range", frequency: P, clarity: U });
      return;
    }
    const { midi: V, cents: B } = Tp(P);
    if (Math.abs(B) > h) {
      this.gate.feed(null, i, d, w, z), k?.({ ...E, status: "off-pitch", frequency: P, clarity: U, midi: V, cents: B });
      return;
    }
    k?.({ ...E, status: "pitch", frequency: P, clarity: U, midi: V, cents: B });
    const D = this.gate.feed(V, i, d, w, z);
    D !== null && S?.({ midi: V, frequency: P, cents: B, clarity: U, timestamp: i, heldMs: D.heldMs });
  }
}
class zv {
  constructor(i = 120, l = 80) {
    this.releaseMs = i, this.gapMs = l;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(i, l, u, d, h) {
    if (d ? (this.quietSince ??= l, l - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), i === null)
      return this.current && l - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== i) && (this.current = { midi: i, since: l, seen: l }), this.current.seen = l;
    const p = l - this.current.since;
    return p < u ? null : (this.armed = !1, this.current = null, { midi: i, heldMs: p });
  }
}
class Bv {
  constructor(i = 2, l = 300, u = 150) {
    this.ratio = i, this.windowMs = l, this.refractoryMs = u;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(i, l, u) {
    if (l - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: l, rms: i }], !1;
    for (; this.history.length && l - this.history[0].time > this.windowMs; ) this.history.shift();
    const d = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : i;
    return this.history.push({ time: l, rms: i }), i < u * 1.5 || i < d * this.ratio ? !1 : (this.lastOnset = l, this.history = [{ time: l, rms: i }], !0);
  }
}
function rh(s, i = 0) {
  const l = Math.max(0, i);
  let u = 0;
  for (let d = l; d < s.length; d++) u += s[d] * s[d];
  return Math.sqrt(u / Math.max(1, s.length - l));
}
function Vv(s, i = 0) {
  let l = 0;
  for (let u = Math.max(0, i); u < s.length; u++) {
    const d = Math.abs(s[u]);
    d > l && (l = d);
  }
  return l;
}
const ds = (s) => s > 0 ? Math.max(-90, 20 * Math.log10(s)) : -90;
let ss;
function of() {
  return (!ss || ss.state === "closed") && (ss = new AudioContext()), ss;
}
function Kv() {
  const s = ss;
  ss = void 0, s?.close().catch(() => {
  });
}
const uf = (s) => s instanceof Error ? s.name : "";
function Uv(s) {
  const i = uf(s);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(i) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : i === "NotFoundError" || i === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : i === "NotReadableError" || i === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : i === "MicSetupError" ? s.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Hv {
  constructor(i = (l) => Mv(l, of)) {
    this.opener = i;
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
  async start(i, l, u) {
    this.stop();
    const d = this.generation;
    let h, p = !1;
    try {
      h = await this.opener(i || void 0);
    } catch (f) {
      if (!i || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(uf(f))) throw f;
      h = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new Dv(h, { ...l });
      const f = () => {
        this.mic === h && (this.stop(), u());
      }, k = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((S) => S.addEventListener("ended", f, { once: !0, signal: k.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && f();
      }, { signal: k.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: p };
    } catch (f) {
      throw this.stop(), f;
    }
  }
  setOptions(i) {
    this.loop?.setOptions(i);
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
function cf(s, i) {
  return s !== "on" ? s : !i || i.status === "silent" ? "silent" : i.status === "pitch" ? "pitch" : i.status === "off-pitch" ? "untuned" : "noise";
}
const ah = (s) => Math.max(0, Math.min(1, (ds(s) + 60) / 60));
function Gv(s) {
  const i = [...s].sort((u, d) => u - d), l = i[Math.min(i.length - 1, Math.floor(i.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, l * 3)), noise: l, loud: l > 0.04 };
}
async function Mo(s) {
  const i = () => s.state === "running";
  if (i()) return;
  let l;
  try {
    await Promise.race([
      s.resume(),
      new Promise((u, d) => {
        l = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    l !== void 0 && clearTimeout(l);
  }
  if (!i()) throw new Error("reference-audio-not-running");
}
function Fa(s) {
  const i = s instanceof Error ? s.message : "";
  return i === "reference-audio-resume-timeout" || i === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : s instanceof Error && s.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class ur {
  constructor(i = of) {
    this.provide = i;
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
  async play(i, l) {
    this.stop();
    const u = this.token, d = this.provide();
    if (await Mo(d), u !== this.token) return !1;
    const h = d.createGain();
    h.connect(d.destination), this.master = h;
    const p = Array.from({ length: 12 }, (S, v) => 1 / (v + 1) ** 1.3), f = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return i.forEach((S, v) => {
      const y = d.createOscillator(), x = d.createGain(), T = d.currentTime + 0.05 + v * 0.8;
      f ? y.setPeriodicWave(f) : y.type = "triangle", y.frequency.value = No(S), x.gain.setValueAtTime(0, T), x.gain.linearRampToValueAtTime(0.22, T + 0.012), x.gain.exponentialRampToValueAtTime(1e-3, T + 0.7), y.connect(x), x.connect(h), y.start(T), y.stop(T + 0.72), l && this.noteTimers.push(setTimeout(() => {
        u === this.token && l(v);
      }, 50 + v * 800));
    }), !await new Promise((S) => {
      this.settle = S, this.timer = setTimeout(() => S(!0), i.length * 800 + 350);
    }) || u !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], h.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(i, l, u, d) {
    if (this.stop(), !i.length) return !1;
    const h = this.token, p = this.provide();
    if (await Mo(p), h !== this.token) return !1;
    const f = 60 / Math.max(40, Math.min(140, l)), k = p.createGain();
    k.connect(p.destination), this.master = k;
    const S = Array.from({ length: 12 }, (_, E) => 1 / (E + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...S.map(() => 0)]),
      new Float32Array([0, ...S])
    ), y = p.currentTime + 0.05;
    let x = 0;
    return i.forEach((_, E) => {
      if (!Number.isFinite(_.beat) || _.beat < 0 || !Number.isFinite(_.duration) || _.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const w = y + _.beat * f, z = _.duration * f, P = w + Math.max(0.08, z * 0.94), U = p.createOscillator(), V = p.createGain();
      v ? U.setPeriodicWave(v) : U.type = "triangle", U.frequency.value = No(_.midi), V.gain.setValueAtTime(0, w), V.gain.linearRampToValueAtTime(0.22, w + 0.012), V.gain.exponentialRampToValueAtTime(1e-3, P - 0.01), U.connect(V), V.connect(k), U.start(w), U.stop(P), u && this.noteTimers.push(setTimeout(() => {
        h === this.token && u(E);
      }, 50 + _.beat * f * 1e3));
      const B = i[E + 1]?.beat ?? 1 / 0;
      d && B > _.beat + _.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && d();
      }, 50 + _.beat * f * 1e3 + z * 1e3)), x = Math.max(x, _.beat + _.duration);
    }), !await new Promise((_) => {
      this.settle = _, this.timer = setTimeout(() => _(!0), 50 + x * f * 1e3 + 150);
    }) || h !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], k.disconnect(), this.master = void 0, !0);
  }
  /**
   * Yhtenäinen asteikkolooppi. Sävelet ajastetaan AudioContextin kellolla etukäteen,
   * ei toistokierroksen päättymistä odottavalla JavaScript-silmukalla.
   * onNote kertoo saman audiokellon mukaisen sävelindeksin otelautaa varten.
   * Toisto päättyy vain stop()-kutsuun (tai audioalustan virheeseen).
   */
  /** Muuta käynnissä olevan asteikkoloopin tempoa ilman äänivirran katkaisua. */
  setLoopTempo(i) {
    this.adjustLoopTempo?.(i);
  }
  async loop(i, l, u = 75) {
    if (this.stop(), !i.length) return !1;
    const d = this.token, h = this.provide();
    if (await Mo(h), d !== this.token) return !1;
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const f = Array.from({ length: 12 }, (E, w) => 1 / (w + 1) ** 1.3), k = h.createPeriodicWave?.(new Float32Array([0, ...f.map(() => 0)]), new Float32Array([0, ...f]));
    let S = 60 / Math.max(40, Math.min(140, u));
    this.adjustLoopTempo = (E) => {
      d === this.token && Number.isFinite(E) && (S = 60 / Math.max(40, Math.min(140, E)));
    };
    const v = 1.6;
    let y = h.currentTime + 0.05, x = 0;
    const T = [], _ = () => {
      if (d === this.token) {
        if (y < h.currentTime - 0.02) {
          const E = Math.ceil((h.currentTime - y) / S);
          y += E * S, x = (x + E) % i.length, T.length = 0;
        }
        for (; y < h.currentTime + v; ) {
          const E = i[x], w = x, z = y, P = h.createOscillator(), U = h.createGain();
          k ? P.setPeriodicWave(k) : P.type = "triangle", P.frequency.value = No(E), U.gain.setValueAtTime(0, z), U.gain.linearRampToValueAtTime(0.22, z + 0.012), U.gain.exponentialRampToValueAtTime(1e-3, z + S * 0.975), P.connect(U), U.connect(p), P.start(z), P.stop(z + S * 0.985), T.push({ at: z, index: w }), y += S, x = (x + 1) % i.length;
        }
        for (; T.length && T[0].at <= h.currentTime + 0.01; ) {
          const E = T.shift();
          l?.(E.index);
        }
      }
    };
    return _(), this.loopTick = setInterval(_, 25), new Promise((E) => {
      this.settle = E;
    });
  }
}
function fi(s, i) {
  let l = 0;
  const u = i.map(([d, h, p]) => {
    const k = { position: d === null || h === null ? null : Be(d, h), beat: l, duration: p };
    return l += p, k;
  });
  return { label: s, events: u, beats: l };
}
function _o(s, ...i) {
  let l = 0;
  const u = i.flatMap((d) => {
    const h = d.events.map((p) => ({ ...p, beat: p.beat + l }));
    return l += d.beats, h;
  });
  return { label: s, events: u, beats: l };
}
const lh = fi("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), oh = fi("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), Wv = fi("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), uh = fi("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), ch = fi("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), Yv = fi("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), dh = fi("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), hh = fi("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), Qv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [lh, oh],
    whole: _o("Melodia · A + B + C", lh, oh, Wv),
    source: "https://hymnary.org/tune/wayfaring_stranger",
    note: "Sävelkulku perustuu perinteisen melodian 15-säveliseen alkumotiiviin. Rytmi on tätä harjoitusta varten itse laadittu: kyse ei ole tietyn levytyksen tai nuottisovituksen tarkasta versiosta."
  },
  nooa: {
    id: "nooa",
    title: "Ukko Nooa",
    qualifier: "Perinteinen melodia · C-jooninen",
    tempo: 84,
    tonic: 0,
    permitted: [0, 2, 4, 5, 7, 9, 11],
    fragments: [uh, ch],
    whole: _o("Ukko Nooa · A + B", uh, ch),
    bonus: Yv,
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
    whole: _o("Siirtymämelodia · A + B", dh, hh),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Jv(s) {
  return s.events.filter((i) => i.position !== null).map((i) => ({ midi: i.position.midi, beat: i.beat, duration: i.duration }));
}
const fh = ["e", "B", "G", "D", "A", "E"];
function au({ pieceId: s, stage: i, onBeforePlay: l, stopHandleRef: u }) {
  const d = Qv[s], [h, p] = b.useState(i === "fingering" ? "a" : "whole"), [f, k] = b.useState(d.tempo), [S, v] = b.useState(!1), [y, x] = b.useState(!1), [T, _] = b.useState(i !== "memory"), [E, w] = b.useState(!1), [z, P] = b.useState(null), [U, V] = b.useState(""), B = b.useRef(new ur()), D = b.useRef(0);
  function O() {
    D.current++, B.current.stop(), w(!1), P(null);
  }
  b.useEffect(() => {
    u && (u.current = O);
    const j = () => {
      document.hidden && O();
    };
    return document.addEventListener("visibilitychange", j), () => {
      document.removeEventListener("visibilitychange", j), D.current++, B.current.stop(), u && (u.current = null);
    };
  }, [u]);
  const F = i === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], ne = F.find((j) => j.id === h) ?? F[0], ie = ne.clip, de = Jv(ie), _e = z === null ? null : de[z]?.beat ?? null, J = _e === null ? null : ie.events.find((j) => j.beat === _e)?.position ?? null, he = b.useRef(null);
  Hh(he, ".melody-playing", E && _e !== null ? String(_e) : "", { enabled: S && y, playback: E });
  const W = ie.beats / 4, le = [...new Map(ie.events.filter((j) => j.position).map((j) => [Ze(j.position), j.position])).values()], ue = le.map((j) => j.fret), Q = le.filter((j) => T || J?.string === j.string && J.fret === j.fret).map((j) => ({
    ...j,
    label: $e(j.midi),
    kind: J?.string === j.string && J.fret === j.fret ? "playing" : He(j.midi) === d.tonic ? "answer" : "shape"
  })), oe = {
    strings: [...new Set(le.map((j) => j.string))],
    min: Math.min(...ue),
    max: Math.max(...ue),
    fixed: "box"
  };
  async function se() {
    if (E) {
      O();
      return;
    }
    l?.();
    const j = ++D.current;
    B.current.stop(), w(!0), P(null), V("");
    try {
      await B.current.playTimed(de, f, (re) => {
        j === D.current && P(re);
      }, () => {
        j === D.current && P(null);
      });
    } catch (re) {
      j === D.current && V(Fa(re));
    } finally {
      j === D.current && (w(!1), P(null));
    }
  }
  function C(j) {
    O(), V(""), p(j);
  }
  return /* @__PURE__ */ a.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ a.jsxs("details", { onToggle: (j) => {
    const re = j.currentTarget.open;
    v(re), re || O();
  }, children: [
    /* @__PURE__ */ a.jsx("summary", { children: i === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    S && /* @__PURE__ */ a.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: i === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ a.jsx("h4", { children: d.title }),
      /* @__PURE__ */ a.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        W.toString().replace(".", ","),
        " tahtia ",
        i === "memory" ? "yhdistetyssä melodiassa" : "valitussa osassa"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "melody-instruction", children: i === "fingering" ? "Kokeile osia A ja B erikseen. Kuuntele ja seuraa keltaisella korostettua säveltä otelaudalla." : "Yhdistä aiemmin harjoitellut osat ja soita koko melodia alusta loppuun muistista. Sävelvihjeet ja tabulatuuri ovat aluksi piilossa. Kuunnellessa soiva sävel korostuu otelaudalla. Siirry tämän jälkeen improvisoimaan." }),
      i === "fingering" && d.bonus && /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
        "Oma B → C -lisä on ",
        /* @__PURE__ */ a.jsx("strong", { children: "erillinen harjoitus" }),
        ", ei osa ",
        d.title,
        " -sävelmää."
      ] }),
      i !== "memory" && /* @__PURE__ */ a.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: F.map((j) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": ne.id === j.id,
          onClick: () => C(j.id),
          children: j.name
        },
        j.id
      )) }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": E, onClick: () => {
          se();
        }, children: E ? "■ Pysäytä melodia" : i === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ a.jsx("select", { value: f, onChange: (j) => {
            O(), k(Number(j.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((j, re) => j - re).filter((j, re, ce) => ce.indexOf(j) === re).map((j) => /* @__PURE__ */ a.jsxs("option", { value: j, children: [
            j,
            " BPM"
          ] }, j)) })
        ] }),
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": y, onClick: () => x((j) => !j), children: y ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      U && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: U }),
      /* @__PURE__ */ a.jsx("p", { className: "melody-now", "aria-live": "polite", children: E && z !== null ? `Nyt soi ${$e(de[z].midi)} · ${fh[J.string]}-kieli, ${J.fret}. nauha` : E ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ a.jsx(hi, { area: oe, marks: Q, disabled: !0, follow: "playing", playback: E, caption: `${d.title}, ${ne.name}` }),
        /* @__PURE__ */ a.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T,
              onClick: () => _((j) => !j),
              children: T ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      y && /* @__PURE__ */ a.jsxs("div", { ref: he, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ a.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${ne.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kieli" }),
            ie.events.map((j, re) => /* @__PURE__ */ a.jsxs("th", { scope: "col", className: j.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ a.jsx("span", { className: "melody-bar", children: j.beat % 4 === 0 ? `T${Math.floor(j.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ a.jsx("span", { className: "melody-duration", children: j.duration === 1 ? "♩" : `${j.duration} iskua` })
            ] }, re))
          ] }) }),
          /* @__PURE__ */ a.jsx("tbody", { children: fh.map((j, re) => /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("th", { scope: "row", children: j }),
            ie.events.map((ce, be) => {
              const G = ce.position?.string === re, K = G && _e === ce.beat;
              return /* @__PURE__ */ a.jsx(
                "td",
                {
                  className: `${ce.beat % 4 === 0 ? "bar-start " : ""}${K ? "melody-playing " : ""}${G && He(ce.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": G ? `${j}-kieli, ${ce.position.fret}. nauha, ${$e(ce.position.midi)}` : void 0,
                  children: G ? ce.position.fret : "—"
                },
                be
              );
            })
          ] }, re)) })
        ] }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: d.note }),
      d.source && /* @__PURE__ */ a.jsx("p", { className: "melody-source", children: /* @__PURE__ */ a.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Wo = Ve.fingeringBoxes(9, Ve.SCALES.mp, "pentatonic", [1, 2]), df = [...new Map(Wo.flatMap((s) => s.positions[0].strings.flatMap((i, l) => i.map((u) => {
  const d = Be(l, u);
  return [Ze(d), d];
})))).values()].sort((s, i) => s.midi - i.midi || i.string - s.string), La = [5, 4, 3, 2, 1, 0].flatMap((s) => df.filter((i) => i.string === s).sort((i, l) => i.fret - l.fret)), Yo = [
  ...La,
  ...La.slice(1, -1).reverse()
], Xv = [...Yo, La[0]], mh = new Set(
  Wo[0].positions[0].strings.flatMap((s, i) => s.map((l) => {
    const u = Be(i, l);
    return Ze(u);
  })).filter((s) => Wo[1].positions[0].strings.flatMap((i, l) => i.map((u) => Ze(Be(l, u)))).includes(s))
), Zv = [
  Be(5, 5),
  Be(5, 8),
  Be(5, 10),
  Be(4, 7),
  Be(4, 10),
  Be(3, 7),
  Be(3, 10),
  Be(3, 7),
  Be(4, 10),
  Be(4, 7),
  Be(5, 10),
  Be(5, 8),
  Be(5, 5)
], hf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", ff = "musiikin-kartta:skaalapolku:bridge-tempo:v1", bo = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], ph = (s) => He(s) === 9;
function vh() {
  try {
    const s = Number(localStorage.getItem(hf));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function qv() {
  try {
    const s = Number(localStorage.getItem(ff));
    return Number.isInteger(s) && s >= 40 && s <= 140 && s % 5 === 0 ? s : 75;
  } catch {
    return 75;
  }
}
function ek({ onBack: s, onPosition: i }) {
  const [l, u] = b.useState(vh), [d, h] = b.useState(vh), [p, f] = b.useState(!1), [k, S] = b.useState("roots"), [v, y] = b.useState(qv), [x, T] = b.useState(null), [_, E] = b.useState(null), [w, z] = b.useState(""), P = b.useRef(new ur()), U = b.useRef(0), V = b.useRef(null), B = _ === null ? null : Yo[_];
  function D() {
    V.current?.(), U.current++, P.current.stop(), T(null), E(null);
  }
  b.useEffect(() => {
    const J = () => {
      document.hidden && (U.current++, P.current.stop(), T(null), E(null));
    };
    return document.addEventListener("visibilitychange", J), () => {
      document.removeEventListener("visibilitychange", J), U.current++, P.current.stop();
    };
  }, []);
  async function O(J) {
    V.current?.();
    const he = ++U.current;
    P.current.stop(), E(null), z(""), T(J);
    try {
      J === "transition" ? await P.current.play(Zv.map((W) => W.midi)) : J === "once" ? await P.current.play(Xv.map((W) => W.midi)) : await P.current.loop(Yo.map((W) => W.midi), (W) => {
        he === U.current && E(W);
      }, v);
    } catch (W) {
      he === U.current && z(Fa(W));
    } finally {
      he === U.current && (T(null), E(null));
    }
  }
  function F(J) {
    const he = Math.max(40, Math.min(140, J));
    y(he), P.current.setLoopTempo(he);
    try {
      localStorage.setItem(ff, String(he));
    } catch {
    }
  }
  function ne(J) {
    J > l || (D(), h(J), f(!1), S("roots"));
  }
  function ie() {
    D();
    const J = Math.min(4, d + 1);
    if (h(J), f(!1), S("roots"), J > l) {
      u(J);
      try {
        localStorage.setItem(hf, String(J));
      } catch {
      }
    }
  }
  const de = (J, he) => d < 2 || d === 2 && p && mh.has(he) || d === 3 && (k === "all" || k === "roots" && ph(J)), _e = df.filter((J) => de(J.midi, Ze(J))).map((J) => ({
    ...J,
    label: d < 2 || d === 2 && p || d === 3 && k === "all" ? $e(J.midi) : "A",
    kind: d < 2 && B?.string === J.string && B?.fret === J.fret ? "playing" : ph(J.midi) ? "answer" : mh.has(Ze(J)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ a.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      D(), s();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · VAIHE 3" }),
    /* @__PURE__ */ a.jsx("h2", { id: "scale-path-title", children: "A-mollipentatoninen · positioiden 1 ja 2 yhdistäminen" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Opettele liikkumaan kahden tutun boksin välillä, älä vain muistamaan kahta erillistä kuviota." }),
    /* @__PURE__ */ a.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ a.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat 5–10 · 6 kieltä"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
        D(), i(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
        D(), i(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => ne(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: bo.map((J, he) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: he === d ? "journey-step current" : "journey-step",
        "aria-current": he === d ? "step" : void 0,
        disabled: he > l,
        onClick: () => ne(he),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: he > l ? "🔒" : he < l ? "✓" : he + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: J.title })
        ]
      },
      J.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: bo[d].title }),
        /* @__PURE__ */ a.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: bo[d].detail }),
      d < 4 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        d === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("p", { children: "Kummassakin positiossa on 12 sävelpaikkaa, mutta yhteisiä paikkoja on kuusi. Niinpä näet yhteensä 18 erillistä paikkaa, et 24:ää. Koko asteikon mallisoitto käy nämä kaikki läpi kuudella kielellä ylös ja alas." }),
          /* @__PURE__ */ a.jsxs("p", { children: [
            /* @__PURE__ */ a.jsx("strong", { children: "Violetit reunustetut sävelet" }),
            " kuuluvat molempiin bokseihin. Vihreät A:t ovat pohjasäveliä. D-kielen 7. nauha on sekä yhteinen sävel että A-pohjasävel. Koko yhdistetyllä otelaudalla on neljä A-pohjasävelpaikkaa."
          ] })
        ] }),
        d === 1 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs("p", { children: [
            "Soita ensin koko yhdistetty asteikko paksulta E-kieleltä ohuelle e-kielelle. Jokaisella kielellä on kolme eri nauhapaikkaa, yhteensä ",
            /* @__PURE__ */ a.jsxs("strong", { children: [
              La.length,
              " paikkaa"
            ] }),
            ". Palaa samaa reittiä alas. Yhteiset sävelet muodostavat kohdat, joista pääset positiosta toiseen."
          ] }),
          /* @__PURE__ */ a.jsxs("p", { children: [
            "Erillisessä lyhyessä siirtymäfraasissa harjoittelet paksulla E-kielellä ",
            /* @__PURE__ */ a.jsx("strong", { children: "5 (A) → 8 (C) → 10 (D)" }),
            " sekä sen jälkeen A- ja D-kieliä. Se on vain käsiaseman vaihdon harjoitus, ei koko asteikko. Vaihda käsiasemaa rauhallisesti, älä venytä sormia väkisin."
          ] }),
          /* @__PURE__ */ a.jsx("p", { children: "Osa sävelkorkeuksista toistuu eri kielillä. Se on tarkoituksellista: harjoittelet myös niiden paikkojen löytämistä otelaudalta." })
        ] }),
        d === 2 && /* @__PURE__ */ a.jsx("p", { children: "Soita koko yhdistetty 18 paikan asteikko kuudella kielellä ylös ja alas muistista. Sävelet eivät näy oletuksena. Voit pyytää näkyviin vain molempien boksien kuusi yhteistä sävelpaikkaa. Palaa edelliseen vaiheeseen, jos tarvitset koko kuvion." }),
        d === 3 && /* @__PURE__ */ a.jsx("p", { children: "Kuuntele ensin koko yhdistetty asteikko tai lyhyt siirtymäfraasi. Soita Am-taustan päälle sitten kahden tahdin fraasi 1. positiosta ja vastaa siihen 2. positiosta. Käytä samoja yhteisiä säveliä siirtymäkohtina. Kokeile lopettaa A-säveleen ja pidä fraasien välissä taukoja." }),
        d === 2 && /* @__PURE__ */ a.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Siirtymäharjoituksen tempo", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => F(v - 5), children: "− 5" }),
          /* @__PURE__ */ a.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => F(v + 5), children: "+ 5" }),
          /* @__PURE__ */ a.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "whole",
              onClick: () => x === "whole" ? D() : void O("whole"),
              children: x === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "once",
              onClick: () => x === "once" ? D() : void O("once"),
              children: x === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "transition",
              onClick: () => x === "transition" ? D() : void O("transition"),
              children: x === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": p, onClick: () => f((J) => !J), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ne(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((J) => /* @__PURE__ */ a.jsxs("label", { children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: J.value,
                  checked: k === J.value,
                  onChange: () => S(J.value)
                }
              ),
              /* @__PURE__ */ a.jsx("span", { children: J.name })
            ] }, J.value))
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => x === "once" ? D() : void O("once"), children: x === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => x === "transition" ? D() : void O("transition"), children: x === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: x === "whole" ? B && d < 2 ? `Nyt soi ${$e(B.midi, !1, !0)} · ${sn[B.string]}-kieli, nauha ${B.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : x === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : x === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        w && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: w }),
        /* @__PURE__ */ a.jsx(
          hi,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: x,
            marks: _e,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? k === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : k === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ a.jsx(
          au,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: D,
            stopHandleRef: V
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ a.jsx(lf, {}),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: ie, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ a.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ne(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => i(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => i(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => i(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsx("p", { children: l === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const tr = "musiikin-kartta:skaalapolku:v1", Ca = "musiikin-kartta:skaalapolku:position-2:v1", Po = "musiikin-kartta:skaalapolku:position-3:v1", Ta = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ra = "musiikin-kartta:skaalapolku:active-position:v1", mf = "musiikin-kartta:skaalapolku:tempo:v1", ls = 75, Qo = 40, Jo = 140;
function tk() {
  try {
    const s = localStorage.getItem(mf);
    if (s === null) return ls;
    const i = Number(s);
    return Number.isInteger(i) && i >= Qo && i <= Jo && i % 5 === 0 ? i : ls;
  } catch {
    return ls;
  }
}
const Ao = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], kh = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Tn(s = tr) {
  try {
    const i = Number(localStorage.getItem(s));
    return Number.isInteger(i) ? Math.max(0, Math.min(4, i)) : 0;
  } catch {
    return 0;
  }
}
function Lo() {
  try {
    const s = localStorage.getItem(Ra);
    return s === "3" && Tn(Ta) === 4 ? 3 : Tn(tr) === 4 && (s === "2" || s === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function nk() {
  try {
    return Tn(Ca) === 4 && localStorage.getItem(Ra) === "bridge";
  } catch {
    return !1;
  }
}
function ik({ onBack: s }) {
  const [i, l] = b.useState(Lo), [u, d] = b.useState(nk), [h, p] = b.useState(() => ({
    1: Tn(tr),
    2: Tn(Ca),
    3: Tn(Po)
  })), [f, k] = b.useState(() => Tn(Lo() === 3 ? Po : Lo() === 2 ? Ca : tr)), S = h[i], [v, y] = b.useState(!1), [x, T] = b.useState("roots"), [_, E] = b.useState(tk), [w, z] = b.useState(null), [P, U] = b.useState(null), [V, B] = b.useState(""), D = b.useRef(new ur()), O = b.useRef(0), F = b.useRef(null);
  function ne(G) {
    const K = Math.max(Qo, Math.min(Jo, G));
    E(K), D.current.setLoopTempo(K);
    try {
      localStorage.setItem(mf, String(K));
    } catch {
    }
  }
  function ie() {
    F.current?.(), O.current++, D.current.stop(), z(null), U(null);
  }
  b.useEffect(() => {
    const G = () => {
      document.hidden && (O.current++, D.current.stop(), z(null), U(null));
    };
    return document.addEventListener("visibilitychange", G), () => {
      document.removeEventListener("visibilitychange", G), O.current++, D.current.stop();
    };
  }, []);
  const de = Ve.fingeringBoxes(9, Ve.SCALES.mp, "pentatonic", [i])[0].positions[0], _e = de.strings.flatMap((G, K) => G.map((te) => Be(K, te))).sort((G, K) => G.midi - K.midi || K.string - G.string), J = [..._e, ..._e.slice(1, -1).reverse()], he = P === null ? null : J[P], W = i === 1 ? [69, 72, 69, 67, 64, 67, 69] : i === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], le = de.start, ue = de.end, Q = (G) => He(G) === 9, oe = (G) => f < 2 ? !0 : f === 2 ? v && Q(G) : x === "scale" || x === "roots" && Q(G), se = _e.filter((G) => oe(G.midi)).map((G) => ({
    ...G,
    label: f < 2 || f === 3 && x === "scale" ? $e(G.midi) : "A",
    kind: f < 2 && he?.string === G.string && he.fret === G.fret ? "playing" : Q(G.midi) ? "answer" : "shape"
  }));
  async function C(G) {
    F.current?.();
    const K = ++O.current;
    D.current.stop(), U(null), B(""), z(G);
    try {
      G === "phrase" ? await D.current.play(W) : await D.current.loop(J.map((te) => te.midi), (te) => {
        K === O.current && U(te);
      }, f === 2 ? _ : ls);
    } catch (te) {
      K === O.current && B(Fa(te));
    } finally {
      K === O.current && (z(null), U(null));
    }
  }
  function j() {
    ie();
    const G = Math.min(4, f + 1);
    if (k(G), y(!1), T("roots"), G > S) {
      p((te) => ({ ...te, [i]: G }));
      const K = i === 1 ? tr : i === 2 ? Ca : Po;
      try {
        localStorage.setItem(K, String(G));
      } catch {
      }
    }
  }
  function re(G) {
    G > S || (ie(), k(G), y(!1), T("roots"));
  }
  function ce(G) {
    if (!(G === 2 && h[1] < 4) && !(G === 3 && Tn(Ta) < 4)) {
      ie(), d(!1), l(G), k(h[G]), y(!1), T("roots"), B("");
      try {
        localStorage.setItem(Ra, String(G));
      } catch {
      }
    }
  }
  function be() {
    if (!(h[2] < 4)) {
      ie(), d(!0), y(!1), B("");
      try {
        localStorage.setItem(Ra, "bridge");
      } catch {
      }
    }
  }
  return u ? /* @__PURE__ */ a.jsx(ek, { onBack: s, onPosition: ce }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ie(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ a.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · VAIHE ",
      i
    ] }),
    /* @__PURE__ */ a.jsxs("h2", { id: "scale-path-title", children: [
      "A-mollipentatoninen · positio ",
      i
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ a.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ a.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat ",
      le,
      "–",
      ue,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": i === 1, onClick: () => ce(1), children: "Positio 1" }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": i === 2,
          disabled: h[1] < 4,
          onClick: () => ce(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          disabled: h[2] < 4,
          onClick: be,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": i === 3,
          disabled: Tn(Ta) < 4,
          onClick: () => ce(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": `Position ${i} harjoitukset`, children: Ao.map((G, K) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: K === f ? "journey-step current" : "journey-step",
        "aria-current": K === f ? "step" : void 0,
        disabled: K > S,
        onClick: () => re(K),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: K > S ? "🔒" : K < S ? "✓" : K + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: K === 4 ? `Positio ${i} harjoiteltu` : G.title })
        ]
      },
      G.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: f === 4 ? `Positio ${i} harjoiteltu` : Ao[f].title }),
        /* @__PURE__ */ a.jsx("span", { children: f === 4 ? "Valmis" : `Harjoitus ${f + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: Ao[f].detail }),
      f < 4 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        f === 0 && /* @__PURE__ */ a.jsxs("p", { children: [
          "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. ",
          i === 1 ? "Tässä vaiheessa keskitytään vain asteikon säveliin." : "Kuuntele myös lyhyt mallifraasi.",
          " Ääni on syntetisoitu."
        ] }),
        f === 0 && i === 2 && /* @__PURE__ */ a.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        f === 0 && i === 3 && /* @__PURE__ */ a.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        f === 1 && /* @__PURE__ */ a.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        f === 2 && /* @__PURE__ */ a.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        f === 3 && /* @__PURE__ */ a.jsxs("p", { children: [
          i === 1 ? "Käytä aiemmin muistista soitettua melodiaa omien fraasien lähtökohtana. " : "Kuuntele mallifraasi. ",
          "Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A."
        ] }),
        f === 2 && /* @__PURE__ */ a.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: _ <= Qo,
              onClick: () => ne(_ - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ a.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            _,
            " BPM"
          ] }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: _ >= Jo,
              onClick: () => ne(_ + 5),
              children: "+ 5"
            }
          ),
          _ !== ls && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => ne(ls),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ a.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        f !== 3 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": w === "loop",
              onClick: () => w === "loop" ? ie() : void C("loop"),
              children: w === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          i !== 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => w === "phrase" ? ie() : void C("phrase"), children: w === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        f !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: w === "loop" ? he && f < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${$e(he.midi, !1, !0)} · ${sn[he.string]}-kieli, nauha ${he.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        V && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: V }),
        f >= 1 && f <= 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          f === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": v, onClick: () => y((G) => !G), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => re(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          f === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              kh.map((G) => /* @__PURE__ */ a.jsxs("label", { children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: G.value,
                    checked: x === G.value,
                    onChange: () => T(G.value)
                  }
                ),
                /* @__PURE__ */ a.jsx("span", { children: G.label })
              ] }, G.value))
            ] }),
            i !== 1 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
              C("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ a.jsx(hi, { area: { strings: [0, 1, 2, 3, 4, 5], min: le, max: ue, fixed: "box" }, marks: se, disabled: !0, follow: "playing", playback: w, caption: `A-mollipentatoninen, positio ${i}` }),
          /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
            f < 2 ? "Vihreällä merkitty A on pohjasävel." : f === 3 ? kh.find((G) => G.value === x).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        f === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(hi, { area: { strings: [0, 1, 2, 3, 4, 5], min: le, max: ue, fixed: "box" }, marks: se, disabled: !0, follow: "playing", playback: w, caption: `Position ${i} sävelet` }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        i === 1 && (f === 1 || f === 2) && /* @__PURE__ */ a.jsx(
          au,
          {
            pieceId: "wayfaring",
            stage: f === 1 ? "fingering" : "memory",
            onBeforePlay: ie,
            stopHandleRef: F
          },
          `wayfaring:${f}`
        ),
        f === 3 && /* @__PURE__ */ a.jsx(lf, {}, i),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: f === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : f === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : f === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: j, children: f === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsx("h3", { children: i === 1 ? "Valmis seuraavaan positioon" : i === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ a.jsx("p", { children: i === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : i === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => re(2), children: "Kertaa muistiharjoitus" }),
        i === 1 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => ce(2), children: "Siirry positioon 2 →" }) : i === 2 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: be, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ce(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        h[1] < 4 ? "🔒 Positio 2" : h[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        h[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Tn(Ta) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const sk = ["ionian", "aeolian"], rs = {
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
      Be(4, 3),
      Be(4, 5),
      Be(3, 2),
      Be(3, 3),
      Be(3, 5),
      Be(2, 2),
      Be(2, 4),
      Be(2, 5)
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
      Be(5, 5),
      Be(5, 7),
      Be(5, 8),
      Be(4, 5),
      Be(4, 7),
      Be(4, 8),
      Be(3, 5),
      Be(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, pf = (s) => "musiikin-kartta:moodipolku:" + s + ":v1", vf = "musiikin-kartta:moodipolku:active:v1", rk = (s) => {
  const i = rs[s].positions;
  return [...i, ...i.slice(1, -1).reverse()];
}, ak = (s) => [...rk(s), rs[s].positions[0]], yh = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Ma(s) {
  try {
    const i = Number(localStorage.getItem(pf(s)));
    return Number.isInteger(i) ? Math.max(0, Math.min(5, i)) : 0;
  } catch {
    return 0;
  }
}
function gh() {
  try {
    return localStorage.getItem(vf) === "aeolian" && Ma("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function lk({ onBack: s }) {
  const [i, l] = b.useState(gh), [u, d] = b.useState(() => ({
    ionian: Ma("ionian"),
    aeolian: Ma("aeolian")
  })), [h, p] = b.useState(() => Ma(gh())), [f, k] = b.useState(null), [S, v] = b.useState(null), [y, x] = b.useState(!1), [T, _] = b.useState("roots"), [E, w] = b.useState(""), [z, P] = b.useState(null), [U, V] = b.useState(null), B = b.useRef(new ur()), D = b.useRef(0), O = b.useRef(null), F = rs[i], ne = ak(i), ie = f === "scale" && S !== null ? ne[S] : null;
  function de() {
    O.current?.(), D.current++, B.current.stop(), k(null), v(null);
  }
  b.useEffect(() => {
    const j = () => {
      document.hidden && (D.current++, B.current.stop(), k(null), v(null));
    };
    return document.addEventListener("visibilitychange", j), () => {
      document.removeEventListener("visibilitychange", j), D.current++, B.current.stop();
    };
  }, []);
  async function _e(j, re, ce = !1) {
    O.current?.();
    const be = ++D.current;
    B.current.stop(), v(null), w(""), k(j);
    try {
      const G = ce ? await B.current.loop(re, void 0, 75) : await B.current.play(re, (K) => {
        be === D.current && j === "scale" && v(K);
      });
      return be === D.current && G;
    } catch (G) {
      return be === D.current && w(Fa(G)), !1;
    } finally {
      be === D.current && (k(null), v(null));
    }
  }
  function J(j) {
    j > u[i] || (de(), p(j), P(null), V(null), x(!1), _("roots"), w(""));
  }
  function he() {
    de();
    const j = Math.min(5, h + 1);
    if (p(j), P(null), V(null), x(!1), _("roots"), j > u[i]) {
      d((re) => ({ ...re, [i]: j }));
      try {
        localStorage.setItem(pf(i), String(j));
      } catch {
      }
    }
  }
  function W(j) {
    if (!(j === "aeolian" && u.ionian < 5)) {
      de(), l(j), p(u[j]), P(null), V(null), x(!1), _("roots"), w("");
      try {
        localStorage.setItem(vf, j);
      } catch {
      }
    }
  }
  async function le() {
    de(), V(null), P(null);
    const j = Math.random() < 0.5 ? "ionian" : "aeolian";
    await _e("comparison", rs[j].phrase) && P(j);
  }
  const ue = (j) => He(j) === F.tonic, Q = F.positions.filter((j) => h < 2 ? !0 : h === 2 ? y && ue(j.midi) : h === 4 ? T === "all" || T === "roots" && ue(j.midi) : !1).map((j) => ({
    ...j,
    label: h === 2 || h === 4 && T === "roots" ? F.tonicName : $e(j.midi),
    kind: ie?.string === j.string && ie.fret === j.fret ? "playing" : ue(j.midi) ? "answer" : "shape"
  })), oe = [...new Set(F.positions.map((j) => j.string))], se = Math.min(...F.positions.map((j) => j.fret)), C = Math.max(...F.positions.map((j) => j.fret));
  return /* @__PURE__ */ a.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      de(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ a.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      sk.indexOf(i) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ a.jsxs("h2", { id: "mode-path-title", children: [
      F.title,
      " · ",
      F.alias
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: F.explanation }),
    /* @__PURE__ */ a.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ a.jsx("strong", { children: F.noteNames }),
      " · Pohjasävel ",
      F.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": i === "ionian", onClick: () => W("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": i === "aeolian",
          disabled: u.ionian < 5,
          onClick: () => W("aeolian"),
          children: [
            "2. A-aiolinen ",
            u.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ a.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      yh.map((j, re) => /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: h === re ? "journey-step current" : "journey-step",
          "aria-current": h === re ? "step" : void 0,
          disabled: re > u[i],
          onClick: () => J(re),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: re > u[i] ? "🔒" : re < u[i] ? "✓" : re + 1 }),
            /* @__PURE__ */ a.jsx("span", { children: j })
          ]
        },
        j
      )),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: h === 5 ? "journey-step current" : "journey-step",
          disabled: u[i] < 5,
          "aria-current": h === 5 ? "step" : void 0,
          onClick: () => J(5),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: u[i] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ a.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "mode-lesson-title", children: h === 5 ? "Moodi harjoiteltu" : yh[h] }),
        /* @__PURE__ */ a.jsx("span", { children: h === 5 ? "Valmis" : "Harjoitus " + (h + 1) + " / 5" })
      ] }),
      h === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          F.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          F.contrast
        ] })
      ] }),
      h === 1 && /* @__PURE__ */ a.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      h === 2 && /* @__PURE__ */ a.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        F.tonicName,
        "-pohjasävelen, jos tarvitset vihjettä."
      ] }),
      h === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Kuuntele satunnainen fraasi. Sen sävelet kuuluvat samaan C-duurin ja A-mollin säveljoukkoon. Päättele, ",
          /* @__PURE__ */ a.jsx("strong", { children: "päättyykö fraasi C:hen vai A:han" }),
          ". Tämä harjoittaa sävelkeskuksen kuulemista, ei vielä koko moodin automaattista tunnistusta."
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              disabled: f !== null,
              onClick: () => {
                le();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          z !== null && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            _e("comparison", rs[z].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        z !== null && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                disabled: U !== null || f !== null,
                onClick: () => V("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                disabled: U !== null || f !== null,
                onClick: () => V("aeolian"),
                children: "A"
              }
            )
          ] }),
          U !== null && /* @__PURE__ */ a.jsxs("p", { role: "status", children: [
            U === z ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            rs[z].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      h === 4 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Soita ",
          F.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          F.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          F.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([j, re]) => /* @__PURE__ */ a.jsxs("label", { children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: j,
                checked: T === j,
                onChange: () => _(j)
              }
            ),
            /* @__PURE__ */ a.jsx("span", { children: re })
          ] }, j))
        ] })
      ] }),
      h === 2 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => x((j) => !j), children: y ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      h < 3 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": f === "scale",
          onClick: () => f === "scale" ? de() : void _e("scale", ne.map((j) => j.midi)),
          children: f === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      h === 4 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": f === "accompaniment",
          onClick: () => f === "accompaniment" ? de() : void _e("accompaniment", F.accompaniment, !0),
          children: f === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      h < 2 && f === "scale" && ie && /* @__PURE__ */ a.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        $e(ie.midi, !1, !0),
        " · ",
        sn[ie.string],
        "-kieli, nauha ",
        ie.fret,
        "."
      ] }),
      h !== 3 && h !== 5 && /* @__PURE__ */ a.jsx(
        hi,
        {
          area: { strings: oe, min: se, max: C, fixed: "box" },
          marks: Q,
          follow: "playing",
          playback: f,
          disabled: !0,
          caption: F.title + " – yhden oktaavin sormitus"
        }
      ),
      i === "ionian" && (h === 1 || h === 2) && /* @__PURE__ */ a.jsx(
        au,
        {
          pieceId: "nooa",
          stage: h === 1 ? "fingering" : "memory",
          onBeforePlay: de,
          stopHandleRef: O
        },
        `nooa:${h}`
      ),
      E && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: E }),
      h < 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ a.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: he, children: h === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      h === 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsxs("h3", { children: [
          F.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ a.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => J(2), children: "Kertaa muistiharjoitus" }),
        i === "ionian" && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => W("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        i === "aeolian" && /* @__PURE__ */ a.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function ok({ onBack: s }) {
  const [i, l] = b.useState(null);
  return i === "pentatonic" ? /* @__PURE__ */ a.jsx(ik, { onBack: () => l(null) }) : i === "modes" ? /* @__PURE__ */ a.jsx(lk, { onBack: () => l(null) }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT" }),
    /* @__PURE__ */ a.jsx("h2", { id: "scale-tracks-title", children: "Mitä haluat opetella?" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen." }),
    /* @__PURE__ */ a.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => l("pentatonic"), children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Pentatoniset" }),
          /* @__PURE__ */ a.jsx("span", { children: "A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi." }),
          /* @__PURE__ */ a.jsx("small", { children: "Jatka nykyistä harjoittelua" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => l("modes"), children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Moodit" }),
          /* @__PURE__ */ a.jsx("span", { children: "Opettele tunnistamaan sävelkeskus, soittamaan yksi oktaavi ja improvisoimaan." }),
          /* @__PURE__ */ a.jsx("small", { children: "Aloita C-joonisesta; seuraavaksi A-aiolinen" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const Zs = [0, 2, 4, 5, 7, 9, 11], wa = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function uk({ onBack: s }) {
  const [i, l] = b.useState(0), [u, d] = b.useState([]), [h, p] = b.useState(!1), [f, k] = b.useState(""), [S, v] = b.useState(0), y = i >= Zs.length, x = Zs[Math.min(i, Zs.length - 1)], T = hs(wa.strings, wa.min, wa.max).filter((B) => He(B.midi) === x), _ = T.filter((B) => !u.includes(Ze(B))), E = _.length === 0 && !y, w = !E && h ? _[0] : void 0, z = [
    ...T.filter((B) => u.includes(Ze(B))).map((B) => ({ ...B, kind: "answer", label: $e(B.midi) })),
    ...w ? [{ ...w, kind: "anchor", label: "?" }] : []
  ];
  function P(B) {
    if (y || E) return;
    const D = Ze(B);
    if (He(B.midi) !== x) {
      v((ne) => ne + 1), k(`Valitsit sävelen ${$e(B.midi)}. Etsi ${$e(x)}.`);
      return;
    }
    if (u.includes(D)) {
      k("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const O = [...u, D];
    d(O), p(!1);
    const F = T.length - O.length;
    k(F ? `Oikein! ${$e(x)} löytyi ${sn[B.string]}-kieleltä (${bi(B.fret)}). Vielä ${F}.` : `Löysit kaikki ${T.length} ${$e(x)}-säveltä tällä alueella.`);
  }
  function U() {
    E && (l((B) => B + 1), d([]), p(!1), k(""));
  }
  function V() {
    l(0), d([]), p(!1), k(""), v(0);
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Harjoitusvalikko" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ a.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Etsi kaikkien seitsemän luonnollisen sävelen sijainnit nauhoilta 0–5. Aloita C-sävelestä." }),
    /* @__PURE__ */ a.jsx("div", { className: "journey-lesson", children: y ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        S ? `Vääriä valintoja yhteensä ${S}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: V, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsxs("h3", { children: [
          "Etsi kaikki ",
          $e(x),
          "-sävelet"
        ] }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Sävel ",
          i + 1,
          " / ",
          Zs.length
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        $e(x),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ a.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        u.length,
        " / ",
        T.length
      ] }),
      /* @__PURE__ */ a.jsx(
        hi,
        {
          area: wa,
          marks: z,
          onAnswer: P,
          disabled: E,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "p",
        {
          className: E ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: f
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        !E && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => p((B) => !B),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        E && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: U, children: i === Zs.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" })
      ] })
    ] }) })
  ] });
}
const ck = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Ro = ["C", "G", "D", "Em"], xh = ["C", "G", "D", "Em", "Am", "E", "A"], dk = { min: 0, max: 3, fixed: "" };
function jh(s) {
  const i = [...s];
  for (let l = i.length - 1; l > 0; l--) {
    const u = Math.floor(Math.random() * (l + 1));
    [i[l], i[u]] = [i[u], i[l]];
  }
  return i;
}
function hk({ onBack: s }) {
  const [i, l] = b.useState(4), [u, d] = b.useState(() => jh(Ro)), [h, p] = b.useState(0), [f, k] = b.useState(null), [S, v] = b.useState([]), [y, x] = b.useState(0), T = h >= u.length, _ = ck[u[Math.min(h, u.length - 1)]], E = i === 4 ? Ro : xh, w = _.frets.flatMap((O, F) => O === null ? [] : [F]), z = _.frets.flatMap((O, F) => O === null ? [F] : []), P = { ...dk, strings: w }, U = _.frets.flatMap((O, F) => O === null ? [] : [{
    ...Be(F, O),
    kind: O === 0 ? "anchor" : "shape",
    label: O === 0 ? "○" : "●"
  }]);
  function V(O = i) {
    l(O), d(jh(O === 4 ? Ro : xh)), p(0), k(null), v([]), x(0);
  }
  function B(O) {
    f || T || S.includes(O) || (O === _.name ? k(O) : (v((F) => [...F, O]), x((F) => F + 1)));
  }
  function D() {
    f && (p((O) => O + 1), k(null), v([]));
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SOINNUT JA MUSIIKIN RAKENNE · VAIHE 1" }),
    /* @__PURE__ */ a.jsx("h2", { id: "chord-journey-title", children: "Tunnista avoin sointu" }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-6.html#caged", children: "Lue tämän harjoituksen teoria: Avoimet sointumuodot →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Katso otelaudalla näkyvää avointa sointuotetta ja valitse oikea soinnun nimi. Tässä harjoituksessa ei tarvitse kuunnella tai soittaa." }),
    /* @__PURE__ */ a.jsxs("fieldset", { className: "chord-difficulty", children: [
      /* @__PURE__ */ a.jsx("legend", { children: "Tunnistettavat soinnut" }),
      /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: i === 4,
            onChange: () => V(4)
          }
        ),
        " 4 sointua (C, G, D, Em)"
      ] }),
      /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: i === 7,
            onChange: () => V(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "journey-lesson", children: T ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Tunnistit kaikki ",
        i,
        " sointua. ",
        y ? `Vääriä valintoja yhteensä ${y}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => V(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Sointu ",
          h + 1,
          " / ",
          u.length
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ a.jsx(
        hi,
        {
          area: P,
          marks: U,
          mutedStrings: z,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ a.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: E.map((O) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: f === O ? "right" : S.includes(O) ? "wrong" : "",
          disabled: !!f || S.includes(O),
          "aria-pressed": f === O,
          onClick: () => B(O),
          children: O
        },
        O
      )) }),
      /* @__PURE__ */ a.jsx(
        "p",
        {
          className: f ? "feedback good" : S.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: f ? `Oikein! Tämä on ${_.name}-sointu.` : S.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      f && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: D, children: h === u.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const we = (s, i) => ({ first: s, ...i ? { second: i } : {} }), os = () => [
  we("Gm", "F"),
  we("Gm"),
  we("B♭", "F"),
  we("Gm"),
  we("Gm", "F"),
  we("Gm"),
  we("E♭", "F"),
  we("Gm")
], us = () => [
  we("B♭", "F"),
  we("Gm", "Dm"),
  we("E♭", "F"),
  we("Gm", "Dm")
], cs = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], kf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], fk = [
  { id: "intro", title: "Intro", start: 0, bars: [we("Gm", "F"), we("Gm"), we("B♭", "F"), we("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: os(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...us(), we("E♭"), { ...we("E♭"), passingBass: "F" }],
    lyrics: cs,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [we("Gm", "F"), we("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: os(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...us(), we("E♭"), we("F")],
    lyrics: cs
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [we("Gm"), we("Dm"), we("F"), we("C"), we("Gm"), we("Dm"), we("E♭"), we("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: os(),
    lyrics: kf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...us(), we("E♭", "F"), we("Gm")],
    lyrics: cs
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      we("E♭", "F"),
      { ...we("Gm"), possibleChord: "Dm" },
      we("E♭", "F"),
      we("Gm", "F"),
      { ...we("Gm"), possibleChord: "Dm" },
      we("Gm", "F"),
      we("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], mk = [
  { id: "intro", title: "Intro", start: 0, bars: [we("Gm", "F"), we("Gm"), we("B♭", "F"), we("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: os(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...us(), we("E♭"), we("E♭")],
    lyrics: cs
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: os(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...us(), we("E♭"), we("F")],
    lyrics: cs
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [we("Gm"), we("Dm"), we("F"), we("C"), we("Gm"), we("Dm"), we("E♭"), we("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: os(),
    lyrics: kf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...us(), we("B♭", "F"), we("Gm"), we("E♭", "F"), we("Gm")],
    lyrics: cs
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [we("E♭", "F"), we("Gm", "F"), we("E♭", "F"), we("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], fs = {
  acoustic: fk,
  normal: mk
}, pk = "normal", Xo = "yksi-sointu-kaksi-askelta", lu = {
  acoustic: Xo + "-akustinen",
  normal: Xo + "-normaali"
}, yf = (s) => s === Xo || Object.values(lu).includes(s ?? "");
function vk(s) {
  const i = Object.entries(lu).find(([, l]) => l === s);
  return i ? i[0] : null;
}
const kk = (s) => lu[s], Sh = (s) => {
  const i = Math.max(0, Math.floor(Number.isFinite(s) ? s : 0));
  return `${Math.floor(i / 60)}:${String(i % 60).padStart(2, "0")}`;
};
function ou(s, i = "acoustic") {
  const l = fs[i], u = l[s], d = l[s + 1];
  return d ? (d.start - u.start) / u.bars.length : 240 / 69;
}
function uu(s, i = "acoustic") {
  const l = fs[i], u = Math.max(0, Number.isFinite(s) ? s : 0);
  let d = 0;
  for (let y = 1; y < l.length && !(u < l[y].start); y++)
    d = y;
  const h = l[d];
  let p = 0;
  for (; p + 1 < h.bars.length && u >= lr(d, p + 1, i); )
    p++;
  const f = lr(d, p, i), k = ou(d, i) / 4;
  let S = 1;
  for (; S < 4 && u >= f + S * k; ) S++;
  const v = h.bars[p];
  return {
    section: h,
    sectionIndex: d,
    barIndex: p,
    beat: S,
    chord: v.second && S >= 3 ? v.second : v.first
  };
}
function lr(s, i, l = "acoustic") {
  return fs[l][s].start + ou(s, l) * i;
}
function yk(s) {
  return fs[s].flatMap((i, l) => i.bars.flatMap((u, d) => {
    const h = lr(l, d, s), p = { section: i, sectionIndex: l, barIndex: d, part: "first", chord: u.first, time: h };
    if (!u.second) return [p];
    const f = ou(l, s) / 2;
    return [p, { ...p, part: "second", chord: u.second, time: h + f }];
  }));
}
function gk(s, i = "acoustic", l = !1) {
  const u = fs[i], d = uu(s, i), h = d.section.bars[d.barIndex], p = d.beat >= 3 && h.second ? "second" : "first", f = yk(i), k = f.findIndex((T) => T.sectionIndex === d.sectionIndex && T.barIndex === d.barIndex && T.part === p), v = [
    ...f.slice(k + 1).map((T) => ({ ...T, wrapped: !1 })),
    ...l ? f.slice(0, k + 1).map((T) => ({ ...T, wrapped: !0 })) : []
  ].find((T) => T.chord !== d.chord) ?? null;
  let y = null;
  const x = d.sectionIndex === u.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!x || l)) {
    const T = x ? 0 : d.sectionIndex + 1, _ = u[T], E = _.bars[0].first;
    y = {
      section: _,
      sectionIndex: T,
      firstChord: E,
      wrapped: x,
      continues: E === (h.second ?? h.first)
    };
  }
  return { nextChord: v, nextSection: y };
}
function xk(s) {
  const i = s.filter((f) => f.lyrics?.length), l = (f) => 1 + (f.lyrics?.length ?? 0), u = i.reduce((f, k) => f + l(k), 0);
  let d = 0, h = 1 / 0, p = 0;
  for (let f = 0; f <= i.length; f++) {
    const k = Math.abs(u - 2 * p);
    (k < h || k === h && p >= u - p) && (d = f, h = k), f < i.length && (p += l(i[f]));
  }
  return [i.slice(0, d), i.slice(d)];
}
const Zo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], gf = "musiikin-kartta:kappale-sointuvihjeet:v1", _a = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, wh = {
  showChords: !0,
  level: 0,
  fadeOrder: _a
};
function Ea(s, i) {
  return !i.showChords || i.level >= i.fadeOrder[s];
}
function Eh(s) {
  if (!s) return { ...wh, fadeOrder: { ..._a } };
  try {
    const i = JSON.parse(s);
    if (!i || typeof i != "object") throw new Error("Invalid settings");
    const l = i, u = l.level, d = { ..._a }, h = l.fadeOrder;
    if (h && typeof h == "object") {
      const p = h;
      for (const f of Zo)
        [1, 2, 3, 4].includes(p[f]) && (d[f] = p[f]);
    }
    return {
      showChords: typeof l.showChords == "boolean" ? l.showChords : !0,
      level: typeof u == "number" && [0, 1, 2, 3, 4].includes(u) ? u : 0,
      fadeOrder: d
    };
  } catch {
    return { ...wh, fadeOrder: { ..._a } };
  }
}
function jk() {
  try {
    return Eh(localStorage.getItem(gf));
  } catch {
    return Eh(null);
  }
}
const Sk = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function wk(s) {
  const i = Sk.exec(s.trim());
  if (!i) return s;
  const [, l, , u = "", d = ""] = i;
  return l + "5" + u + d;
}
const Ek = (s, i) => i === "power" ? wk(s) : s, Nk = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Ck = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Tk({ version: s, position: i, loop: l = !1, onSeek: u }) {
  const [d, h] = b.useState(jk), [p, f] = b.useState(null), [k, S] = b.useState(!1), [v, y] = b.useState("full"), x = (W) => Ek(W, v), T = fs[s], _ = uu(i, s), { section: E, sectionIndex: w, barIndex: z, beat: P, chord: U } = _, V = P >= 3 && E.bars[z].second ? "second" : "first", B = (W, le, ue) => `${s}:${W}:${le}:${ue}`, D = (W, le) => B(E.id, W, le), O = D(z, V), F = Ea(U, d), ne = F && p === O, ie = (W, le, ue) => !Ea(W, d) || p === D(le, ue), de = d.showChords && d.level === 0, _e = Zo.filter((W) => Ea(W, d)).length, { nextSection: J } = gk(i, s, l), he = !!J && Ea(J.firstChord, d);
  return b.useEffect(() => {
    f(null);
  }, [O]), b.useEffect(() => {
    try {
      localStorage.setItem(gf, JSON.stringify(d));
    } catch {
    }
  }, [d]), /* @__PURE__ */ a.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ a.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ a.jsxs("span", { children: [
        d.showChords && d.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: d.showChords,
            onChange: (W) => {
              h((le) => ({ ...le, showChords: W.target.checked })), f(null);
            }
          }
        ),
        "Näytä soinnut"
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: k,
            onChange: (W) => S(W.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([W, le]) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: W,
              checked: v === W,
              onChange: () => y(W)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: le })
        ] }, W))
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (W) => {
              const le = Number(W.target.value);
              h((ue) => ({ ...ue, level: le })), f(null);
            },
            children: Nk.map((W) => /* @__PURE__ */ a.jsx("option", { value: W.value, children: W.label }, W.value))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: _e === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${_e}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ a.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ a.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ a.jsx("div", { className: "song-fade-order", children: Zo.map((W) => /* @__PURE__ */ a.jsxs("label", { children: [
        W,
        /* @__PURE__ */ a.jsx(
          "select",
          {
            "aria-label": W + ": piilotusvaihe",
            value: d.fadeOrder[W],
            onChange: (le) => {
              const ue = Number(le.target.value);
              h((Q) => ({ ...Q, fadeOrder: { ...Q.fadeOrder, [W]: ue } })), f(null);
            },
            children: Ck.map((le) => /* @__PURE__ */ a.jsx("option", { value: le.value, children: le.label }, le.value))
          }
        )
      ] }, W)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ a.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-section-jump",
            value: E.id,
            onChange: (W) => {
              const le = T.find((ue) => ue.id === W.target.value);
              le && u(le.start);
            },
            children: T.map((W) => /* @__PURE__ */ a.jsxs("option", { value: W.id, children: [
              Sh(W.start),
              " · ",
              W.title
            ] }, W.id))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ a.jsxs("p", { className: "song-current-chord", children: [
          F && !ne ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ a.jsx("strong", { children: F && !ne ? "?" : x(U) }),
          /* @__PURE__ */ a.jsxs("span", { children: [
            E.title,
            ", tahti ",
            z + 1,
            ", isku ",
            P,
            "/4"
          ] }),
          F && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => f(ne ? null : O),
              children: ne ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        J && /* @__PURE__ */ a.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ a.jsx("strong", { children: he ? "?" : x(J.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": E.title + ": tahdit", children: E.bars.map((W, le) => {
      const ue = le === z, Q = ue && (P < 3 || !W.second), oe = ue && P >= 3 && !!W.second, se = ie(W.first, le, "first"), C = W.second ? ie(W.second, le, "second") : !1, j = (se ? x(W.first) : "sointu piilossa") + (W.second ? " " + (C ? x(W.second) : "sointu piilossa") : "") + (de && W.passingBass ? " (basson kulku " + W.passingBass + ")" : "") + (de && W.possibleChord ? " (" + x(W.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (ue ? " active" : ""),
          "aria-pressed": ue,
          "aria-label": "Tahti " + (le + 1) + ": " + j + ". Siirry kohtaan " + Sh(lr(w, le, s)),
          onClick: () => u(lr(w, le, s)),
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              le + 1
            ] }),
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ a.jsx("strong", { className: Q && se ? "now" : "", children: se ? x(W.first) : "?" }),
              W.second && /* @__PURE__ */ a.jsx("strong", { className: oe && C ? "now" : "", children: C ? x(W.second) : "?" })
            ] }),
            de && W.passingBass && /* @__PURE__ */ a.jsxs("small", { children: [
              "Basso: (",
              W.passingBass,
              "), isku 4"
            ] }),
            de && W.possibleChord && /* @__PURE__ */ a.jsxs("small", { children: [
              "Mahdollinen (",
              x(W.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        le
      );
    }) }),
    k ? /* @__PURE__ */ a.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ a.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ a.jsx("div", { className: "song-all-lyrics-grid", children: xk(T).map((W, le) => /* @__PURE__ */ a.jsx("div", { className: "song-lyrics-column", children: W.map((ue) => /* @__PURE__ */ a.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ a.jsx("h5", { children: ue.title }),
        ue.lyrics?.map((Q, oe) => /* @__PURE__ */ a.jsx("p", { children: Q }, oe))
      ] }, ue.id)) }, le)) }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : E.lyrics && /* @__PURE__ */ a.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ a.jsxs("h4", { children: [
        E.title,
        ": sanat"
      ] }),
      E.lyrics.map((W, le) => /* @__PURE__ */ a.jsx("p", { children: W }, le))
    ] }),
    de && E.note && /* @__PURE__ */ a.jsx("p", { className: "song-chord-note", children: E.note })
  ] });
}
const Oa = 7, Mk = { name: "bluesasteikko", base: Ve.SCALES.mp.base, add: [[6, "♭5"]] }, Oo = [
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
    scale: Mk,
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
function _k(s) {
  return Ve.scaleNotes(s).map(([i, l]) => Ve.noteName(Oa, i, l));
}
const xf = (s) => s === "pentatonic" ? 5 : 7;
function bk(s, i, l) {
  const u = i.filter((f) => f >= 1 && f <= xf(s.system)), d = Ve.fingeringBoxes(Oa, s.scale, s.system, u, l);
  if (s.id !== "blues") return d;
  const h = s.scale.add.map(([f]) => (Oa + f) % 12), p = (f, k) => k >= 0 && k <= l && h.includes((Ve.OPEN_PITCHES[f] + k) % 12);
  return d.map((f) => ({ ...f, positions: f.positions.map((k) => {
    const S = k.strings.map((y, x) => {
      if (!y.length) return y;
      const T = y[y.length - 1];
      return p(x, T + 1) ? [...y.slice(0, -1), T + 1] : y;
    }), v = S.flat();
    return { ...k, strings: S, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const Nh = 17;
function Pk({ open: s }) {
  const [i, l] = b.useState("mp"), [u, d] = b.useState({ pentatonic: [], "3nps": [] }), [h, p] = b.useState(!1), [f, k] = b.useState(!1), S = b.useRef(null), v = Oo.find((w) => w.id === i) ?? Oo[0], y = u[v.system], x = bk(v, y, Nh), T = x.some((w) => w.positions.length > 0), _ = Ve.renderBoard(Oa, v.scale, Nh, {
    automatic: !0,
    boxes: x,
    onlyBoxNotes: T && h,
    label: v.title + (y.length ? ", " + y.map((w) => "boksi " + w).join(", ") : "")
  });
  b.useEffect(() => {
    const w = S.current;
    !w || !s || x.length === 1 && Ve.revealPositions(w, ".box-highlight");
  }, [_, s]);
  function E(w, z) {
    d((P) => ({ ...P, [v.system]: z ? [...P[v.system], w].sort((U, V) => U - V) : P[v.system].filter((U) => U !== w) }));
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ a.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ a.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ a.jsx("select", { value: i, onChange: (w) => l(w.target.value), children: Oo.map((w) => /* @__PURE__ */ a.jsx("option", { value: w.id, children: w.title }, w.id)) })
    ] }) }),
    /* @__PURE__ */ a.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ a.jsx("strong", { children: v.title }),
      /* @__PURE__ */ a.jsx("span", { children: _k(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: S,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: _ }
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "legend", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("span", { className: "swatch", style: { background: "#4b2fd6", border: "2px solid #fff" } }),
        "Juurisävel G (1)"
      ] }),
      /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("span", { className: "swatch", style: { background: "#6d4aff" } }),
        "Asteikon sävel"
      ] }),
      v.scale.add.length > 0 && /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        v.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-box-settings", open: f, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (w) => {
        w.preventDefault(), k((z) => !z);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ a.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ a.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: xf(v.system) }, (w, z) => z + 1).map((w) => /* @__PURE__ */ a.jsxs("label", { className: "box-toggle", "data-box": w, children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            value: w,
            checked: y.includes(w),
            onChange: (z) => E(w, z.target.checked)
          }
        ),
        " Boksi ",
        w
      ] }, v.system + w)) }),
      /* @__PURE__ */ a.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: T && h,
            disabled: !T,
            onChange: (w) => p(w.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: T ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
const St = ["backing", "guitar", "vocals"], Ak = 0.05, Lk = 5e-3;
function Rk(s) {
  const i = globalThis.navigator?.audioSession;
  i && i.type !== "playback" && (i.type = "playback");
  const l = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!l) throw new Error("Web Audio API puuttuu");
  if (s)
    try {
      return new l(s);
    } catch {
    }
  return new l();
}
const ci = 1152, Ok = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320], $k = [44100, 48e3, 32e3];
function ba(s) {
  let i = 0;
  for (s.length >= 10 && s[0] === 73 && s[1] === 68 && s[2] === 51 && (i = 10 + ((s[6] & 127) << 21 | (s[7] & 127) << 14 | (s[8] & 127) << 7 | s[9] & 127) + (s[5] & 16 ? 10 : 0)); i + 4 <= s.length && !(s[i] === 255 && (s[i + 1] & 224) === 224); ) i++;
  const l = [];
  let u = 0, d = 0, h = i;
  for (; h + 4 <= s.length && s[h] === 255 && (s[h + 1] & 224) === 224; ) {
    const T = s[h + 1], _ = s[h + 2], E = s[h + 3];
    if ((T >> 3 & 3) !== 3 || (T >> 1 & 3) !== 1) throw new Error("MP3: vain MPEG-1 Layer III on tuettu");
    const w = Ok[_ >> 4 & 15] * 1e3, z = $k[_ >> 2 & 3];
    if (!w || !z) throw new Error(`MP3: virheellinen kehysotsake kohdassa ${h}`);
    const P = Math.floor(144 * w / z) + (_ >> 1 & 1);
    if (h + P > s.length) break;
    if (!u)
      u = z, d = (E >> 6 & 3) === 3 ? 1 : 2;
    else if (z !== u) throw new Error("MP3: näytetaajuus vaihtuu kesken tiedoston");
    l.push(h), h += P;
  }
  if (!l.length) throw new Error("MP3: kehyksiä ei löytynyt");
  let p = 0, f = 0, k = 0;
  const S = l[0] + 4 + (d === 1 ? 17 : 32), v = String.fromCharCode(...s.subarray(S, S + 4));
  if (v === "Xing" || v === "Info") {
    k = 1;
    const T = s[S + 7], _ = S + 8 + (T & 1 ? 4 : 0) + (T & 2 ? 4 : 0) + (T & 4 ? 100 : 0) + (T & 8 ? 4 : 0), E = s.subarray(_, _ + 4);
    if (_ + 24 <= l[1] && E.length === 4 && [...E].every((w) => w >= 32 && w < 127)) {
      const w = _ + 21;
      p = s[w] << 4 | s[w + 1] >> 4, f = (s[w + 1] & 15) << 8 | s[w + 2];
    }
  }
  const y = Uint32Array.from(l.slice(k)), x = Math.max(0, y.length * ci - p - f);
  return { sampleRate: u, channels: d, frameOffsets: y, dataEnd: h, delay: p, padding: f, length: x };
}
const jf = 2, Ik = 1;
function $o(s, i, l, u = 0) {
  const d = i + s.delay, h = d + l, p = s.frameOffsets.length, f = Math.max(0, Math.floor(d / ci) - jf), k = Math.min(p, Math.ceil(h / ci) + Ik + Math.ceil(u / ci));
  return { firstFrame: f, endFrame: k, skip: d - f * ci + u };
}
const Fk = [[100, 160], [1e3, 1060], [3e3, 3060]], nr = 2048, Dn = (jf + 1) * ci;
function Sf(s) {
  if (s.length < Dn + nr) return !1;
  let i = 0;
  for (let l = Dn; l < Dn + nr; l++) i += s[l] * s[l];
  return i >= 1e-6;
}
function Dk(s, i, l, u, d = 1700) {
  if (!Sf(i)) return null;
  const h = u * ci - l.delay;
  let p = null, f = 1 / 0;
  for (let S = 0; S <= d; S++) {
    const v = h - S;
    if (v + Dn < 0 || v + Dn + nr > s.length) continue;
    let y = 0;
    for (let x = Dn; x < Dn + nr && y < f; x += 8) y = Math.max(y, Math.abs(i[x] - s[v + x]));
    y < f && (f = y, p = S);
  }
  if (p === null) return null;
  let k = 0;
  for (let S = Dn; S < Dn + nr; S++) k = Math.max(k, Math.abs(i[S] - s[h - p + S]));
  return k <= 1e-4 ? p : null;
}
function Io(s, i, l) {
  const u = l.endFrame < i.frameOffsets.length ? i.frameOffsets[l.endFrame] : i.dataEnd;
  return s.slice(i.frameOffsets[l.firstFrame], u);
}
function zk(s, i) {
  let l;
  try {
    l = ba(s);
  } catch {
    return null;
  }
  const u = l.frameOffsets;
  if (u.length < 3) return null;
  const d = u[0], h = u[1] - d;
  for (let k = 2; k < u.length; k++) if (u[k] - u[k - 1] !== h) return null;
  const p = Math.floor((i - d) / h);
  if (p < u.length || d + p * h !== i) return null;
  const f = new Uint32Array(p);
  for (let k = 0; k < p; k++) f[k] = d + k * h;
  return { ...l, frameOffsets: f, dataEnd: i, length: Math.max(0, p * ci - l.delay - l.padding) };
}
function Bk(s) {
  return s.length < 10 ? null : (s[0] === 73 && s[1] === 68 && s[2] === 51 ? 10 + ((s[6] & 127) << 21 | (s[7] & 127) << 14 | (s[8] & 127) << 7 | s[9] & 127) + (s[5] & 16 ? 10 : 0) : 0) + 5 * 1441;
}
class Vk {
  constructor(i, l) {
    this.total = i, this.now = l, this.bytes = new Uint8Array(i);
  }
  total;
  now;
  bytes;
  received = 0;
  done = !1;
  error = null;
  layout = null;
  firstByteAt = null;
  doneAt = null;
  verified = 0;
  headerKey = -1;
  waiters = [];
  /** Lukee virran loppuun. Virheet (myös keskeytys) merkitään ja välitetään odottajille. */
  async run(i) {
    const l = i.getReader();
    try {
      for (; ; ) {
        const { value: u, done: d } = await l.read();
        if (d) break;
        if (u?.length) {
          if (this.received + u.length > this.total) throw new Error("MP3-virta on pidempi kuin Content-Length");
          this.bytes.set(u, this.received), this.received += u.length, this.firstByteAt ??= this.now(), this.verify(), this.notify();
        }
      }
      if (this.received !== this.total) throw new Error(`MP3-virta katkesi (${this.received}/${this.total} tavua)`);
      this.done = !0, this.doneAt = this.now(), this.notify();
    } catch (u) {
      this.fail(u instanceof Error ? u : new Error(String(u)));
      try {
        l.releaseLock();
      } catch {
      }
    }
  }
  /** Ennustettu rakenne käyttöön: tarkistetaan jo saapuneet ja jatkossa saapuvat kehysotsakkeet. */
  useLayout(i) {
    this.layout = i;
    const l = i.frameOffsets[0];
    this.headerKey = this.bytes[l + 1] << 8 | this.bytes[l + 2] & 254, this.verify();
  }
  verify() {
    const i = this.layout;
    if (!i || this.error) return;
    const l = i.frameOffsets;
    for (; this.verified < l.length && l[this.verified] + 4 <= this.received; ) {
      const u = l[this.verified], d = this.bytes[u + 1] << 8 | this.bytes[u + 2] & 254;
      if (this.bytes[u] !== 255 || d !== this.headerKey) {
        this.fail(new Error(`MP3-kehys ${this.verified} ei vastaa ennustettua rakennetta`));
        return;
      }
      this.verified++;
    }
  }
  fail(i) {
    if (!(this.error || this.done)) {
      this.error = i;
      for (const l of this.waiters.splice(0)) l.reject(i);
    }
  }
  notify() {
    const i = this.waiters.filter((l) => this.done || this.received >= l.need);
    this.waiters = this.waiters.filter((l) => !i.includes(l));
    for (const l of i) l.resolve();
  }
  /** Valmis, kun tavut [0, end) ovat saapuneet (ja ennustetun rakenteen kehysotsakkeet tarkistettu niiltä osin). */
  waitForBytes(i) {
    return this.error ? Promise.reject(this.error) : this.done || this.received >= i ? Promise.resolve() : new Promise((l, u) => this.waiters.push({ need: i, resolve: l, reject: u }));
  }
  has(i) {
    return this.done || this.received >= i;
  }
  /** Vastaanottonopeus (tavua/s) ensimmäisestä tavusta lähtien, tai null ennen luotettavaa arviota. */
  rate() {
    if (this.firstByteAt === null) return null;
    const i = (this.now() - this.firstByteAt) / 1e3;
    return i >= 0.4 ? this.received / i : null;
  }
}
const Ch = 16, Kk = 0.8;
function Uk(s, i) {
  if (s.done) return !0;
  const l = s.layout;
  if (!l || i <= 0) return !1;
  const u = l.frameOffsets[0], d = (s.total - u) / i, h = u + d * Ch + 4 * (l.frameOffsets[1] - u);
  if (s.received < h) return !1;
  const p = s.rate();
  if (p === null) return !1;
  const f = s.total - Kk * p * Math.max(0, i - Ch);
  return s.received >= f;
}
const Hk = 10, Th = 4, Gk = 6, Wk = 400, Yk = 256, Qk = 480;
class Mh extends Error {
}
class _h extends Error {
}
const wf = (s, i) => i ? wf(i, s % i) : s, bh = (s, i) => i < s.frameOffsets.length ? s.frameOffsets[i] : s.dataEnd;
class Fo {
  constructor(i, l = {}) {
    this.context = i, this.fetchImpl = l.fetch ?? ((h, p) => fetch(h, p)), this.now = l.now ?? (() => performance.now()), this.setIntervalImpl = l.setInterval ?? ((h, p) => setInterval(h, p)), this.clearIntervalImpl = l.clearInterval ?? ((h) => clearInterval(h)), this.decoderFor = l.decoderFor, this.progressive = l.progressive ?? !1, this.sleep = l.sleep ?? ((h) => new Promise((p) => setTimeout(p, h)));
    const u = {}, d = {};
    for (const h of St)
      u[h] = i.createGain(), d[h] = i.createGain(), u[h].connect(d[h]), d[h].connect(i.destination);
    this.inputs = u, this.levels = d;
  }
  context;
  state = "tyhja";
  error = "";
  /** Viimeisimmän virheen laji: kalibrointi ja näytetaajuus eivät korjaannu uudella yrityksellä. */
  errorKind = null;
  events = [];
  onEnded;
  onStateChange;
  /** Toisto keskeytyi purkuvirheeseen (soitin on tilassa 'virhe'). */
  onError;
  /** Virtalataus: toisto odottaa, että seuraavan palan tavut saapuvat (true) tai jatkuu (false). */
  onWaitingChange;
  waiting = !1;
  /** Mittausta varten: raitakohtaiset tulot ennen tasoa (lähteet kytkeytyvät näihin). */
  inputs;
  levels;
  data = null;
  length = 0;
  rate = 0;
  channels = 2;
  /** Selaimen MP3-dekooderin viive raakakehysten purussa (kalibroidaan kerran: Apple 0, FFmpeg 529). */
  decoderDelay = null;
  slots = [];
  pending = [];
  gen = 0;
  useCounter = 0;
  session = null;
  sessionId = 0;
  offset = 0;
  looping = !1;
  loadToken = 0;
  controller = null;
  /** Virtalatauksen keskeytys (jatkuu taustalla 'valmis'-tilan jälkeen; versionvaihto ja poistuminen keskeyttävät). */
  streamController = null;
  streams = [];
  progressive;
  sleep;
  pumping = !1;
  pumpQueued = !1;
  timer = null;
  fetchImpl;
  now;
  setIntervalImpl;
  clearIntervalImpl;
  decoderFor;
  record(i, l = {}) {
    this.events.push({ kind: i, ms: Math.round(this.now()), ...l }), this.events.length > 500 && this.events.shift();
  }
  setState(i) {
    this.state !== i && (this.state = i, this.onStateChange?.(i));
  }
  /** Raitojen yhteinen kelvollinen pituus sekunteina. 0, jos kappaletta ei ole ladattu. */
  get duration() {
    return this.rate > 0 ? this.length / this.rate : 0;
  }
  get playing() {
    return this.session !== null;
  }
  /** Puretun äänen allas tavuina (paikat × raidat × näytteet × kanavat × 4). */
  get bufferBytes() {
    return this.slots.reduce((i, l) => i + St.reduce((u, d) => {
      const h = l.buffers[d];
      return u + h.length * h.numberOfChannels * 4;
    }, 0), 0);
  }
  /** Ladatut pakatut MP3-tavut. */
  get compressedBytes() {
    return this.data ? St.reduce((i, l) => i + this.data[l].bytes.byteLength, 0) : 0;
  }
  /** Lataa yhden version kolme MP3:a ja purkaa ensimmäisen palan valmiiksi. Edellinen versio vapautetaan ensin. */
  async load(i) {
    this.release();
    const l = ++this.loadToken, u = new AbortController();
    this.controller = u;
    const d = () => l === this.loadToken;
    this.error = "", this.errorKind = null, this.setState("ladataan");
    const h = this.now();
    this.record("lataus-alku");
    try {
      const p = {};
      if (this.progressive) {
        const x = await this.loadProgressive(i, u, h);
        if (!d()) return "peruttu";
        Object.assign(p, x);
      } else {
        const x = await Promise.all(St.map(async (T) => {
          const _ = await this.fetchImpl(i[T], { signal: u.signal });
          if (!_.ok) throw new Error(`${T}: HTTP ${_.status}`);
          const E = new Uint8Array(await _.arrayBuffer());
          return this.record("ladattu", { track: T, bytes: E.byteLength, kesto: Math.round(this.now() - h) }), E;
        }));
        if (!d()) return "peruttu";
        St.forEach((T, _) => {
          p[T] = { bytes: x[_], layout: ba(x[_]) };
        }), this.setState("puretaan");
      }
      if (new Set(St.map((x) => p[x].layout.sampleRate)).size !== 1) throw new Error("Raitojen näytetaajuudet eroavat");
      const k = p.backing.layout.sampleRate, S = Math.max(...St.map((x) => p[x].layout.channels));
      (k !== this.rate || S !== this.channels) && (this.slots = []), this.rate = k, this.channels = S;
      const v = this.grid;
      if (v > Qk) throw new _h(`Äänikontekstin näytetaajuus ${this.context.sampleRate} Hz ei sovi ${k} Hz:n raitojen näytetarkkaan paloitukseen`);
      if (this.length = Math.floor(Math.min(...St.map((x) => p[x].layout.length)) / v) * v, this.data = p, this.gen++, k !== this.context.sampleRate && this.record("naytetaajuus-ero", { mp3: k, konteksti: this.context.sampleRate, ruudukko: v }), this.decoderDelay === null && await this.calibrate(p, d), !d()) return "peruttu";
      const y = await this.obtain(0);
      if (!d()) return "peruttu";
      if (!y) throw new Error("Puskurialtaassa ei ole tilaa");
      if (this.streams.length) {
        for (; !this.streams.every((x) => Uk(x, this.duration)); ) {
          const x = this.streams.find((T) => T.error);
          if (x) throw x.error;
          if (await this.sleep(100), !d()) return "peruttu";
        }
        this.record("alku-valmis", { tavut: this.streams.map((x) => x.received), kesto: Math.round(this.now() - h) });
      }
      return this.controller = null, this.record("valmis", {
        kesto: Math.round(this.now() - h),
        bytes: this.bufferBytes,
        compressed: this.compressedBytes,
        duration: this.duration,
        sampleRate: k
      }), this.setState("valmis"), "valmis";
    } catch (p) {
      return d() ? (this.controller = null, this.abortStreams(), this.data = null, this.length = 0, this.error = p instanceof Error ? p.message : String(p), this.errorKind = p instanceof Mh ? "kalibrointi" : p instanceof _h ? "naytetaajuus" : "lataus", this.record("virhe", { message: this.error, laji: this.errorKind }), this.setState("virhe"), "virhe") : "peruttu";
    }
  }
  /** Peruu kesken olevan latauksen tai ensimmäisen palan purun. */
  cancel() {
    this.state !== "ladataan" && this.state !== "puretaan" || (this.loadToken++, this.controller?.abort(), this.controller = null, this.record("peruttu"), this.setState("tyhja"));
  }
  /** Pysäyttää toiston ja unohtaa version (versionvaihto). Allas säilyy uudelleenkäyttöä varten. */
  release() {
    this.cancel(), this.stopSession(), this.abortStreams(), this.setWaiting(!1);
    const i = this.data !== null;
    this.data = null, this.length = 0, this.offset = 0, this.gen++;
    for (const l of this.slots)
      l.ready = !1, l.gen = -1;
    i && this.record("vapautettu"), this.state !== "tyhja" && this.setState("tyhja");
  }
  /** Vapauttaa kaiken, myös altaan ja raitojen tasosolmut. AudioContextin sulkee omistaja. */
  dispose() {
    this.release(), this.slots = [];
    for (const i of St)
      this.inputs[i].disconnect(), this.levels[i].disconnect();
  }
  /**
   * Soittaa kaikki raidat kohdasta at. Jos kohdan pala on valmiina, ääni alkaa START_LEAD_SECONDS:n päästä,
   * muuten heti kun pala on purettu. Palauttaa false, jos kappaletta ei ole ladattu.
   */
  play(i = this.offset) {
    if (this.state !== "valmis" || this.length <= 0) return !1;
    this.stopSession();
    const l = this.grid, u = Math.max(0, Math.min(Math.round(i * this.rate / l) * l, this.length - l));
    return this.session = { id: ++this.sessionId, items: [], nextFrame: null, nextTimeline: u, ending: !1 }, this.offset = u / this.rate, this.timer = this.setIntervalImpl(() => {
      this.pump();
    }, Wk), this.pump(), !0;
  }
  /** Pysäyttää ja palauttaa kohdan, josta jatko alkaa. */
  pause() {
    const i = this.position();
    return this.session && this.record("tauko", { at: i }), this.stopSession(), this.offset = i, i;
  }
  /** Kelaa kohtaan at. Soiva kappale jatkuu uudesta kohdasta, pysäytetty aloittaa siitä. */
  seek(i) {
    this.session ? this.play(i) : this.offset = Math.max(0, Math.min(i, Math.max(0, this.duration - 1 / Math.max(1, this.rate)))), this.record("kelaus", { at: i });
  }
  /** Loop koko kappaleelle: lopun jälkeen seuraava pala alkaa kohdasta 0 samaan näytekehykseen. */
  setLoop(i) {
    if (this.looping === i) return;
    this.looping = i;
    const l = this.session;
    if (!l) return;
    if (i) {
      l.ending = !1, this.pump();
      return;
    }
    const u = this.context.currentTime * this.context.sampleRate, d = l.items.findIndex((h, p) => p > 0 && h.timelineStart === 0 && h.frame > u);
    if (d > 0) {
      const h = l.items.splice(d);
      for (const p of h) this.stopItem(p);
      l.nextFrame = h[0].frame, l.nextTimeline = this.length;
    }
  }
  /** Raidan taso (äänenvoimakkuus × tasapaino, 0 kun raita on pois). Soitto ei katkea. */
  setLevel(i, l) {
    const u = this.levels[i].gain;
    typeof u.setTargetAtTime == "function" ? u.setTargetAtTime(l, this.context.currentTime, Lk) : u.value = l;
  }
  level(i) {
    return this.levels[i].gain.value;
  }
  /** Aikajanan kohta kontekstin kellon hetkellä contextTime: se pala, jonka ajastettu alku on viimeksi ohitettu. */
  position(i = this.context.currentTime) {
    const l = this.session;
    if (!l || !l.items.length) return this.offset;
    const u = i * this.context.sampleRate;
    let d = l.items[0];
    for (const p of l.items)
      if (p.frame <= u) d = p;
      else break;
    if (u <= d.frame) return d.timelineStart / this.rate;
    const h = Math.min((u - d.frame) * this.rate / this.context.sampleRate, d.length);
    return Math.min(d.timelineStart + h, this.length) / this.rate;
  }
  /** Kuuluva kohta nyt (kuten D1): getOutputTimestamp, tai kontekstin kello miinus ilmoitetut viiveet. */
  audiblePosition(i = this.now()) {
    const l = this.context.getOutputTimestamp?.();
    let u;
    return l && typeof l.contextTime == "number" && typeof l.performanceTime == "number" && l.contextTime > 0 ? u = l.contextTime + (i - l.performanceTime) / 1e3 : u = this.context.currentTime - (this.context.outputLatency ?? 0) - (this.context.baseLatency ?? 0), this.position(Math.min(u, this.context.currentTime));
  }
  /** Purkaa aikajanan näytteet [start, start + length) uusiin taulukoihin (testejä ja tarkistuksia varten, ei altaaseen). */
  async readRange(i, l, u) {
    const d = this.data?.[i];
    if (!d) throw new Error("Kappaletta ei ole ladattu");
    const h = $o(d.layout, l, u, this.decoderDelay ?? 0);
    await d.ready?.(bh(d.layout, h.endFrame));
    const p = await this.decoder().decodeAudioData(Io(d.bytes, d.layout, h).buffer);
    return Array.from({ length: p.numberOfChannels }, (f, k) => p.getChannelData(k).slice(h.skip, h.skip + u));
  }
  /**
   * KOKEILU (ensilataus): käynnistää raitojen virtalatauksen ja palauttaa rakenteen heti, kun alkutavut riittävät
   * ennustukseen. Jos ennustus ei ole varma (tai virtaa ei ole), raita ladataan kokonaan ennen jäsennystä.
   */
  async loadProgressive(i, l, u) {
    const d = new AbortController();
    this.streamController = d, l.signal.addEventListener("abort", () => d.abort(), { once: !0 });
    const h = [];
    this.streams = h;
    const p = await Promise.all(St.map(async (f) => {
      const k = await this.fetchImpl(i[f], { signal: d.signal });
      if (!k.ok) throw new Error(`${f}: HTTP ${k.status}`);
      const S = Number(k.headers.get("Content-Length"));
      if (!k.body || !Number.isSafeInteger(S) || S <= 0) {
        const T = new Uint8Array(await k.arrayBuffer());
        return this.record("ladattu", { track: f, bytes: T.byteLength, kesto: Math.round(this.now() - u), virta: !1 }), [f, { bytes: T, layout: ba(T) }];
      }
      const v = new Vk(S, this.now);
      h.push(v), v.run(k.body).then(() => {
        v.done && this.record("ladattu", { track: f, bytes: S, kesto: Math.round((v.doneAt ?? this.now()) - u), virta: !0 });
      }), await v.waitForBytes(10);
      const y = Math.min(S, Bk(v.bytes.subarray(0, v.received)) ?? S);
      await v.waitForBytes(y), this.record("ensitavut", { track: f, kesto: Math.round((v.firstByteAt ?? this.now()) - u) });
      let x = zk(v.bytes.subarray(0, Math.max(y, v.received)), S);
      if (x || (this.record("virta-ei-ennustetta", { track: f }), await v.waitForBytes(S), x = ba(v.bytes)), v.useLayout(x), v.error) throw v.error;
      return [f, { bytes: v.bytes, layout: x, ready: (T) => v.waitForBytes(T), has: (T) => v.has(T) }];
    }));
    return Object.fromEntries(p);
  }
  abortStreams() {
    this.streamController?.abort(), this.streamController = null, this.streams = [];
  }
  setWaiting(i) {
    this.waiting !== i && (this.waiting = i, this.record(i ? "odottaa-latausta" : "lataus-ehti"), this.onWaitingChange?.(i));
  }
  /**
   * Käyttöliittymälle (vain luku, ei vaikuta lataukseen tai soittoon): taustalatauksen saapuneet ja kokonaistavut.
   * total = null, jos kaikkien raitojen kokoa ei tunneta; ilman virtaa ja ilman dataa { 0, null, false }.
   */
  get downloadStatus() {
    if (!this.streams.length)
      return this.data ? { received: this.compressedBytes, total: this.compressedBytes, complete: !0 } : { received: 0, total: null, complete: !1 };
    const i = this.streams.length === St.length;
    return {
      received: this.streams.reduce((l, u) => l + u.received, 0),
      total: i ? this.streams.reduce((l, u) => l + u.total, 0) : null,
      complete: this.streams.every((l) => l.done) && (i || this.data !== null)
    };
  }
  /** Ladattu osuus (0…1) virtalatauksessa; 1, kun kaikki on ladattu tai virtaa ei käytetä. */
  get downloadProgress() {
    if (!this.streams.length) return this.data ? 1 : 0;
    const i = this.streams.reduce((l, u) => l + u.total, 0);
    return this.streams.reduce((l, u) => l + u.received, 0) / i;
  }
  /**
   * Mittaa kerran, miten selaimen dekooderi kohdistaa raakakehysten purun aikajanaan (Apple 0, Chromiumin FFmpeg 529
   * näytettä). Kokeillaan ikkunoita ja raitoja, kunnes löytyy ääntä ja bittitarkka vastaavuus. Jos ei löydy, lataus
   * päättyy hallittuun virheeseen eikä viivettä arvata (väärä arvo siirtäisi koko kappaleen).
   */
  async calibrate(i, l) {
    const u = this.decoder(), d = [], h = [];
    for (const p of St) {
      const f = i[p].layout.frameOffsets.length, k = Fk.filter(([, S]) => f > S + 2);
      if (!k.length && f >= 16) {
        const S = Math.max(4, Math.floor(f / 3));
        k.push([S, Math.min(f - 2, S + 60)]);
      }
      for (const [S, v] of k) h.push([p, S, v]);
    }
    h.sort((p, f) => p[2] - f[2]);
    for (const [p, f, k] of h) {
      const { bytes: S, layout: v } = i[p];
      if (await i[p].ready?.(v.frameOffsets[k]), !l()) return;
      const y = await u.decodeAudioData(Io(S, v, { firstFrame: f, endFrame: k }).buffer);
      if (!l()) return;
      if (!Sf(y.getChannelData(0))) {
        d.push(`${p}@${f}: hiljainen`);
        continue;
      }
      const x = await u.decodeAudioData(S.slice(0, v.frameOffsets[k]).buffer);
      if (!l()) return;
      const T = Dk(x.getChannelData(0), y.getChannelData(0), v, f);
      if (T !== null) {
        this.decoderDelay = T, this.record("kalibroitu", { track: p, kehys: f, dekooderiviive: T });
        return;
      }
      d.push(`${p}@${f}: ei bittitarkkaa vastaavuutta`);
    }
    throw this.record("kalibrointi-epaonnistui", { yritykset: d }), new Mh("Selaimen MP3-purkua ei voitu kohdistaa aikajanaan");
  }
  decoder() {
    return this.rate === this.context.sampleRate ? this.context : this.decoderFor ? this.decoderFor(this.rate) : new OfflineAudioContext(1, 1, this.rate);
  }
  /** Kohdistusruudukko MP3-näytteinä: 1, kun taajuudet ovat samat; muuten pienin pituus, joka on kokonainen kontekstin kehysmäärä. */
  get grid() {
    const i = Math.round(this.context.sampleRate);
    return this.rate && i !== this.rate ? this.rate / wf(this.rate, i) : 1;
  }
  get segmentLength() {
    const i = this.grid;
    return Math.floor(Math.round(Hk * this.rate) / i) * i;
  }
  /** Vapaa allaspaikka: varaamaton tai vanhentunut ensin, sitten pisimpään käyttämätön; uusi vain tarvittaessa. */
  freeSlot() {
    const i = this.slots.filter((u) => u.users === 0 && !u.filling), l = i.find((u) => !u.ready || u.gen !== this.gen);
    if (l) return l;
    if (i.length && this.slots.length >= Th) return i.reduce((u, d) => u.used <= d.used ? u : d);
    if (this.slots.length < Th) {
      const u = {};
      for (const h of St) u[h] = this.context.createBuffer(this.channels, this.segmentLength, this.rate);
      const d = { buffers: u, gen: -1, start: 0, length: 0, ready: !1, filling: !1, users: 0, used: 0 };
      return this.slots.push(d), this.record("allas", { paikat: this.slots.length, bytes: this.bufferBytes }), d;
    }
    return i.length ? i.reduce((u, d) => u.used <= d.used ? u : d) : null;
  }
  /**
   * Pala, joka sisältää aikajanan näytteen start: valmis paikka altaasta, kesken oleva purku samalle kohdalle
   * (ei kahta purkua samasta palasta) tai uusi purku alkaen kohdasta start.
   */
  obtain(i) {
    const l = this.gen, u = this.slots.find((S) => S.ready && S.gen === l && i >= S.start && i < S.start + S.length);
    if (u)
      return u.used = ++this.useCounter, Promise.resolve(u);
    const d = this.pending.find((S) => S.gen === l && i >= S.start && i < S.start + S.length);
    if (d) return d.promise;
    const h = this.data, p = this.freeSlot();
    if (!p || !h) return Promise.resolve(null);
    const f = Math.min(this.segmentLength, this.length - i), k = { gen: l, start: i, length: f, promise: Promise.resolve(null) };
    return k.promise = this.fill(p, h, l, i, f).finally(() => {
      this.pending = this.pending.filter((S) => S !== k);
    }), this.pending.push(k), k.promise;
  }
  async fill(i, l, u, d, h) {
    Object.assign(i, { gen: u, start: d, length: h, ready: !1, filling: !0 });
    const p = this.now();
    try {
      const f = this.decoder(), S = St.map((y) => $o(l[y].layout, d, h, this.decoderDelay ?? 0)).map((y, x) => bh(l[St[x]].layout, y.endFrame));
      if (St.some((y, x) => l[y].has && !l[y].has(S[x]))) {
        this.session && this.setWaiting(!0);
        try {
          await Promise.all(St.map((y, x) => l[y].ready?.(S[x])));
        } catch (y) {
          if (u !== this.gen)
            return i.filling = !1, i.gen = -1, null;
          throw y;
        }
        this.session && this.setWaiting(!1);
      }
      const v = await Promise.all(St.map(async (y) => {
        const { bytes: x, layout: T } = l[y], _ = $o(T, d, h, this.decoderDelay ?? 0), E = await f.decodeAudioData(Io(x, T, _).buffer);
        return { track: y, buffer: E, plan: _ };
      }));
      if (i.filling = !1, u !== this.gen)
        return i.gen = -1, null;
      for (const { track: y, buffer: x, plan: T } of v) {
        const _ = i.buffers[y];
        for (let E = 0; E < _.numberOfChannels; E++) {
          const w = x.getChannelData(Math.min(E, x.numberOfChannels - 1)).subarray(T.skip, T.skip + h);
          _.copyToChannel(w, E, 0), w.length < h && (_.copyToChannel(new Float32Array(h - w.length), E, w.length), this.record("pala-lyhyt", { track: y, start: d, puuttuu: h - w.length }));
        }
      }
      return i.ready = !0, i.used = ++this.useCounter, this.record("pala", { start: d / this.rate, length: h / this.rate, kesto: Math.round(this.now() - p) }), i;
    } catch (f) {
      throw i.filling = !1, i.gen = -1, f;
    }
  }
  /** Ajastaa paloja, kunnes ääntä on LOOKAHEAD_SECONDS valmiina. Vain yksi kierros kerrallaan. */
  async pump() {
    if (this.pumping) {
      this.pumpQueued = !0;
      return;
    }
    this.pumping = !0;
    try {
      for (; ; ) {
        const i = this.session;
        if (!i || i.ending || i.nextFrame !== null && i.nextFrame / this.context.sampleRate - this.context.currentTime >= Gk) return;
        let l = i.nextTimeline;
        if (l >= this.length) {
          if (!this.looping) {
            i.ending = !0, this.obtain(0).catch(() => this.record("alku-esipurku-virhe"));
            return;
          }
          l = 0;
        }
        const u = await this.obtain(l);
        if (this.session !== i) return;
        if (!u) {
          this.record("allas-taynna");
          return;
        }
        if (l === 0 && i.nextTimeline >= this.length && !this.looping) {
          i.ending = !0;
          return;
        }
        this.schedule(i, u, l);
      }
    } catch (i) {
      this.fail(i);
    } finally {
      this.pumping = !1, this.pumpQueued && (this.pumpQueued = !1, this.pump());
    }
  }
  schedule(i, l, u) {
    const d = this.context.sampleRate, h = u - l.start, p = l.length - h, f = Math.ceil((this.context.currentTime + Ak) * d);
    let k = i.nextFrame ?? f;
    i.nextFrame !== null && i.nextFrame < Math.ceil(this.context.currentTime * d) + Yk && (this.record("alivuoto", { myohassa: Math.round((this.context.currentTime * d - i.nextFrame) / d * 1e3) }), k = f);
    const S = k / d, v = Math.round(p * d / this.rate), y = St.map((T) => {
      const _ = this.context.createBufferSource();
      return _.buffer = l.buffers[T], _.connect(this.inputs[T]), _.start(S, h / this.rate), _.stop((k + v) / d), _;
    }), x = { slot: l, frame: k, timelineStart: u, length: p, sources: y, done: !1 };
    l.users++, y[0].onended = () => this.finished(i, x), i.items.push(x), i.items.length === 1 ? this.record("soitto", { when: S, offset: u / this.rate, contextTime: this.context.currentTime }) : this.record("pala-ajastettu", { when: S, offset: u / this.rate, pituus: p / this.rate }), i.nextFrame = k + v, i.nextTimeline = u + p;
  }
  stopItem(i) {
    if (!i.done) {
      i.done = !0, i.slot.users = Math.max(0, i.slot.users - 1);
      for (const l of i.sources) {
        l.onended = null;
        try {
          l.stop();
        } catch {
        }
        l.disconnect();
      }
    }
  }
  finished(i, l) {
    if (l.done) return;
    l.done = !0, l.slot.users = Math.max(0, l.slot.users - 1);
    for (const d of l.sources)
      d.onended = null, d.disconnect();
    if (this.session !== i) return;
    const u = i.items.indexOf(l);
    if (u > 0 && i.items.splice(0, u), i.ending && i.items[i.items.length - 1] === l) {
      this.stopSession(), this.offset = this.duration, this.record("loppu"), this.onEnded?.();
      return;
    }
    this.pump();
  }
  stopSession() {
    const i = this.session;
    this.session = null, this.setWaiting(!1), this.timer !== null && (this.clearIntervalImpl(this.timer), this.timer = null);
    for (const l of i?.items ?? []) this.stopItem(l);
  }
  fail(i) {
    this.stopSession(), this.error = i instanceof Error ? i.message : String(i), this.record("virhe", { message: this.error }), this.setState("virhe"), this.onError?.(this.error);
  }
}
const Jk = 250, Xk = 1e3, Ef = 0.5, Zk = 2e3;
class qk {
  samples = [];
  /** contextSeconds = AudioContext.currentTime, wallMs = performance.now(). */
  sample(i, l) {
    const u = this.samples[this.samples.length - 1];
    u && l <= u.wall || (this.samples.push({ context: i, wall: l }), this.samples.length > 32 && this.samples.shift());
  }
  /** Nollaa näytteet (sivu piiloon tai näkyviin, uusi konteksti, palautus): piilossa kello saa pysähtyä. */
  reset() {
    this.samples = [];
  }
  /**
   * Uusinta näytettä verrataan uusimpaan vähintään minWindowMs vanhempaan näytteeseen.
   * 'unknown', jos vertailukohtaa ei ole.
   */
  status(i = Jk) {
    const l = this.samples[this.samples.length - 1];
    if (!l) return "unknown";
    for (let u = this.samples.length - 2; u >= 0; u--) {
      const d = this.samples[u], h = l.wall - d.wall;
      if (h < i) continue;
      return (l.context - d.context) * 1e3 < Ef * h ? "stalled" : "ok";
    }
    return "unknown";
  }
}
function Ph(s, i, l) {
  return new Promise((u, d) => {
    const h = setTimeout(() => d(new Error(`${l}: aikaraja ${i} ms`)), i);
    s.then((p) => {
      clearTimeout(h), u(p);
    }, (p) => {
      clearTimeout(h), d(p);
    });
  });
}
async function ey(s, i = Zk) {
  try {
    return s.state === "closed" ? { ok: !1, reason: "konteksti suljettu" } : (typeof s.suspend == "function" && s.state === "running" && await Ph(s.suspend(), i, "suspend"), s.state === "closed" ? { ok: !1, reason: "konteksti suljettu" } : (await Ph(s.resume(), i, "resume"), s.state !== "running" ? { ok: !1, reason: `tila ${s.state}` } : { ok: !0 }));
  } catch (l) {
    const u = l instanceof DOMException || l instanceof Error ? l.name : "", d = l instanceof Error ? l.message : String(l);
    return { ok: !1, reason: u && u !== "Error" ? `${u}: ${d}` : d };
  }
}
async function ty(s, {
  ms: i = 300,
  now: l = () => performance.now(),
  wait: u = (d) => new Promise((h) => setTimeout(h, d))
} = {}) {
  const d = s(), h = l();
  await u(i);
  const p = (s() - d) * 1e3, f = l() - h;
  return p >= Ef * Math.max(i, f);
}
const ny = 2e3, Do = { visible: !1, text: "", percent: null, announce: "" };
function iy(s) {
  return s.complete ? 100 : s.total ? Math.min(99, Math.floor(s.received / s.total * 100)) : null;
}
class sy {
  sawIncomplete = !1;
  doneUntil = 0;
  announcedStart = !1;
  update(i, l, u) {
    if (!i || l === "tyhja" || l === "virhe")
      return this.reset(), Do;
    if (!i.complete) {
      this.doneUntil = 0;
      const d = iy(i);
      if (d === null && l === "ladataan") return Do;
      this.sawIncomplete = !0;
      const h = this.announcedStart ? "" : "Kappaleen lataus jatkuu taustalla.";
      return this.announcedStart = !0, d === null ? { visible: !0, text: "Ladataan kappaletta…", percent: null, announce: h } : { visible: !0, text: `Ladattu ${d} %`, percent: d, announce: h };
    }
    return this.sawIncomplete ? (this.sawIncomplete = !1, this.doneUntil = u + ny, { visible: !0, text: "Ladattu 100 %", percent: 100, announce: "Kappale ladattu." }) : u < this.doneUntil ? { visible: !0, text: "Ladattu 100 %", percent: 100, announce: "" } : Do;
  }
  reset() {
    this.sawIncomplete = !1, this.doneUntil = 0, this.announcedStart = !1;
  }
}
const ry = { visible: !1, text: "", percent: null, announce: "" }, ay = 1e3;
function ly({ read: s, state: i }) {
  const l = b.useRef(new sy()), [u, d] = b.useState(ry), h = b.useRef(s);
  h.current = s, b.useEffect(() => {
    const f = setInterval(() => {
      const k = h.current(), S = l.current.update(k?.status ?? null, k?.state ?? "tyhja", performance.now());
      d((v) => v.visible === S.visible && v.text === S.text && v.percent === S.percent && (S.announce === "" || v.announce === S.announce) && (S.visible || v.announce === "") ? v : { ...S, announce: S.visible ? S.announce || v.announce : "" });
    }, ay);
    return () => clearInterval(f);
  }, []);
  const p = i === "ladataan" || i === "puretaan";
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    p && !(u.visible && u.percent !== null) && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: i === "ladataan" ? "Ladataan kappaleen raitoja…" : "Valmistellaan raitoja soittoa varten…" }),
    u.visible && /* @__PURE__ */ a.jsxs("div", { className: "song-load", children: [
      /* @__PURE__ */ a.jsx("span", { id: "song-load-label", children: u.text }),
      u.percent !== null && /* @__PURE__ */ a.jsx("progress", { max: 100, value: u.percent, "aria-labelledby": "song-load-label" })
    ] }),
    /* @__PURE__ */ a.jsx("span", { className: "sr-only", role: "status", children: u.announce })
  ] });
}
const oy = b.memo(ly, (s, i) => s.state === i.state), cr = typeof location < "u" ? new URLSearchParams(location.search) : new URLSearchParams(), uy = cr.get("soitin") === "vanha", nn = !uy, cy = nn && (cr.has("valjas") || typeof navigator < "u" && navigator.webdriver === !0), dy = Number(cr.get("naytetaajuus")) || 48e3, hy = nn && cr.get("lataus") !== "koko", Ah = nn && cr.get("diag") === "1";
function fy() {
  const s = new URL(location.href);
  return s.searchParams.set("soitin", "vanha"), s.pathname + s.search + s.hash;
}
const Nf = () => typeof navigator < "u" ? navigator.audioSession : void 0;
function my(s, i, l) {
  const u = Nf(), d = [`konteksti ${i.state}, kello ${i.currentTime.toFixed(2)} s, outputLatency ${((i.outputLatency ?? 0) * 1e3).toFixed(0)} ms, äänisessio ${u ? `${u.type ?? "?"}/${u.state ?? "?"}` : "ei tukea"}`, ...l.slice(-10)], h = s.events, p = h.find((v) => v.kind === "lataus-alku")?.ms;
  if (p === void 0) return [...d, "Ei latausta vielä."].join(`
`);
  d.push(`ladattu ${Math.round(s.downloadProgress * 100)} %${s.waiting ? ", odottaa latausta" : ""}`);
  const f = h.find((v) => v.kind === "pala"), k = h.find((v) => v.kind === "soitto");
  for (const v of h)
    !["ensitavut", "kalibroitu", "alku-valmis", "valmis", "ladattu", "virhe", "odottaa-latausta", "alivuoto"].includes(v.kind) && v !== f && v !== k || d.push(`${String(v.ms - p).padStart(6)} ms ${v.kind}${v.track ? " " + v.track : ""}${typeof v.kesto == "number" && v.kind === "pala" ? ` (purku ${v.kesto} ms)` : ""}`);
  const S = typeof performance < "u" && performance.getEntriesByType ? performance.getEntriesByType("resource") : [];
  for (const v of S.filter((y) => /\.mp3(\?|$)/.test(y.name)).slice(-6))
    d.push(`${v.name.split("/").pop()}: ${v.nextHopProtocol || "?"} ${Math.round(v.transferSize / 1024)} kt, vastaus ${Math.round(v.responseStart - v.startTime)} ms, kesto ${Math.round(v.duration)} ms`);
  return d.join(`
`);
}
let Cf = null;
function py() {
  return vk(new URLSearchParams(location.search).get("kappale")) ?? Cf ?? pk;
}
function vy(s) {
  Cf = s;
  const i = new URL(location.href);
  yf(i.searchParams.get("kappale")) && (i.searchParams.set("kappale", kk(s)), history.replaceState(history.state, "", i.pathname + i.search + i.hash));
}
const ky = {
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
}, Lh = 1e-3;
function Rh(s, i) {
  try {
    s.currentTime = i;
  } catch {
  }
}
function Oh(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const i = Math.floor(s);
  return String(Math.floor(i / 60)) + ":" + String(i % 60).padStart(2, "0");
}
function yy({ onBack: s }) {
  const i = b.useRef(null), l = b.useRef(null), u = b.useRef(null), d = b.useRef(0), h = b.useRef(new af()), p = b.useRef(null), f = b.useRef(null), k = b.useRef(0), S = b.useRef(new qk()), v = b.useRef(!1), y = b.useRef(!1), x = b.useRef(!1), T = b.useRef([]), _ = (I) => {
    T.current.push(`${(/* @__PURE__ */ new Date()).toLocaleTimeString("fi-FI")} ${I}`), T.current.length > 40 && T.current.shift();
  }, [E, w] = b.useState(""), [z, P] = b.useState(!1), [U, V] = b.useState("tyhja"), [B, D] = b.useState(!1), [O, F] = b.useState("");
  b.useEffect(() => {
    if (!Ah) return;
    const I = setInterval(() => {
      const H = f.current;
      F(H ? my(H.player, H.context, T.current) : T.current.join(`
`));
    }, 500);
    return () => clearInterval(I);
  }, []);
  const [ne, ie] = b.useState(py), de = ky[ne], [_e, J] = b.useState(!1), [he, W] = b.useState(!0), [le, ue] = b.useState(!0), [Q, oe] = b.useState(!1), [se, C] = b.useState(!1), [j, re] = b.useState(!1), [ce, be] = b.useState(lv), [G] = b.useState(() => jv()), K = b.useRef(null), [te, q] = b.useState(""), [ke, ye] = b.useState(0), [pe, Ee] = b.useState(0), [Ce, Se] = b.useState("");
  function Me(I = !1, H, Y) {
    const fe = i.current;
    if (fe)
      for (const xe of [l.current, u.current])
        xe && (!H || xe === H) && h.current.align(fe, xe, I, void 0, Y);
  }
  function Fe() {
    return [
      ["backing", i.current, !0],
      ["guitar", l.current, he],
      ["vocals", u.current, le]
    ];
  }
  function Qe(I = ce, H) {
    if (nn) {
      const Y = f.current?.player;
      if (Y) for (const [fe, , xe] of Fe()) Y.setLevel(fe, Co(fe, I, H?.[fe] ?? xe));
      return;
    }
    for (const [Y, fe, xe] of Fe()) {
      if (!fe) continue;
      const Oe = Co(Y, I, H?.[Y] ?? xe);
      if (G === "webaudio" && K.current?.routed(fe))
        K.current.setLevel(fe, Oe);
      else
        try {
          fe.volume = Co(Y, I);
        } catch {
        }
    }
  }
  function Je(I) {
    be(I), ov(I), Qe(I);
  }
  function Xe() {
    if (nn) {
      const I = f.current?.player;
      I?.playing && ye(I.pause());
    }
    d.current++, i.current?.pause(), l.current?.pause(), u.current?.pause(), J(!1);
  }
  function it(I) {
    if (I !== ne) {
      nn && (k.current++, f.current?.player.release()), p.current = null, Xe();
      for (const H of [i.current, l.current, u.current])
        if (H)
          try {
            H.currentTime = 0;
          } catch {
          }
      ye(0), Ee(0), Se(""), ie(I), vy(I);
    }
  }
  function pt(I) {
    if (nn) {
      const fe = f.current?.player, xe = Math.max(0, Math.min(I, pe > 0 ? pe : I));
      ye(xe), fe?.state === "valmis" ? fe.seek(xe) : p.current = xe;
      return;
    }
    const H = i.current;
    if (!H || !Number.isFinite(I)) return;
    const Y = Math.max(0, Math.min(I, Number.isFinite(H.duration) ? H.duration : I));
    p.current = Y, ye(Y), Rh(H, Y);
  }
  function Ge(I) {
    const H = p.current;
    if (H === null || I !== i.current || I.seeking) return;
    const Y = Number.isFinite(I.duration) ? Math.min(H, I.duration) : H;
    if (Y !== H && (p.current = Y, ye(Y)), Math.abs(I.currentTime - Y) < Lh) return;
    const fe = I.seekable;
    for (let xe = 0; xe < fe.length; xe++)
      if (fe.start(xe) <= Y && Y <= fe.end(xe)) {
        Rh(I, Y);
        return;
      }
  }
  function De(I) {
    if (I !== i.current) return;
    const H = p.current;
    if (H === null)
      ye(I.currentTime);
    else if (I.readyState >= 1 && !I.seeking && Math.abs(I.currentTime - H) < Lh) {
      p.current = null, Me(!0);
      return;
    }
    I.paused || Me();
  }
  function et() {
    if (f.current) return f.current;
    try {
      const I = Rk({ sampleRate: dy }), H = new Fo(I, { progressive: hy });
      return H.onStateChange = V, H.onWaitingChange = D, H.onError = (Y) => {
        J(!1), ye(H.position()), Se(`Toisto keskeytyi (${Y}). Paina Soita uudelleen.`);
      }, H.onEnded = () => {
        J(!1), ye(H.duration);
      }, I.onstatechange = () => {
        _(`konteksti ${I.state}`), I.state === "interrupted" && (x.current = !0), I.state !== "running" && H.playing && (ye(H.pause()), J(!1));
      }, S.current.reset(), v.current = !1, f.current = { context: I, player: H }, x.current = !1, _(`uusi konteksti ${I.sampleRate} Hz`), cy && (window.__kappaleD1 = { context: I, player: H, lifecycle: T.current }), f.current;
    } catch (I) {
      return Se("Web Audio ei ole käytettävissä tässä selaimessa. " + (I instanceof Error ? I.message : "")), P(!0), null;
    }
  }
  function ut() {
    k.current++, f.current?.player.dispose(), f.current?.context.close().catch(() => {
    }), f.current = null, S.current.reset(), v.current = !1, delete window.__kappaleD1;
  }
  async function Vt(I, H) {
    y.current = !0, w("Palautetaan ääntä…");
    try {
      const Y = await ey(I), fe = Y.ok && await ty(() => I.currentTime);
      if (H !== k.current) return !1;
      if (S.current.reset(), fe)
        return v.current = !1, !0;
      if (Y.reason?.startsWith("NotAllowedError"))
        return Se("Ääni ei käynnistynyt. Paina Soita uudelleen."), !1;
      const xe = f.current?.player.position() ?? 0;
      return ut(), p.current = xe, ye(xe), V("tyhja"), Se("Ääntä ei saatu palautettua. Paina Soita, niin soitin käynnistetään uudelleen samasta kohdasta."), !1;
    } finally {
      y.current = !1, w("");
    }
  }
  function At() {
    const I = f.current?.player, H = p.current ?? (I?.state === "valmis" ? I.position() : ke);
    _(`konteksti uusitaan kohdassa ${H.toFixed(1)} s`), ut(), p.current = H > 0 ? H : null, ye(H), V("tyhja");
  }
  async function Kt() {
    if (y.current) return;
    w(""), x.current && f.current && !_e && At();
    const I = et();
    if (!I) return;
    const { context: H, player: Y } = I;
    if (_e) {
      ye(Y.pause()), J(!1);
      return;
    }
    if (Y.state === "ladataan" || Y.state === "puretaan") {
      k.current++, Y.cancel();
      return;
    }
    const fe = H.state === "running" ? Promise.resolve() : H.resume();
    Se(""), P(!1);
    const xe = ++k.current;
    if (Y.state !== "valmis") {
      const We = await Y.load({ backing: de.backing, guitar: de.guitar, vocals: de.vocals });
      if (xe !== k.current) return;
      if (We === "virhe") {
        const st = Y instanceof Fo ? Y.errorKind : "lataus", ct = st === "kalibrointi" || st === "naytetaajuus";
        Se(ct ? `Soitin ei voi purkaa kappaleen ääntä tässä selaimessa (${Y.error}).` : "Kappaleen lataus epäonnistui. Tarkista yhteys ja paina Soita uudelleen."), P(ct);
        return;
      }
      if (We !== "valmis") return;
      Ee(Y.duration);
    }
    try {
      await fe;
    } catch {
    }
    if (xe !== k.current) return;
    if (x.current) {
      _("lataus valmis taustakäynnin jälkeen, odotetaan Soita"), w("Soitin oli taustalla latauksen aikana. Paina Soita aloittaaksesi.");
      return;
    }
    if (H.state !== "running") {
      Se(`Ääni ei käynnistynyt (Web Audio: ${H.state}). Paina Soita uudelleen.`);
      return;
    }
    if ((v.current || S.current.status() === "stalled") && (!await Vt(H, xe) || xe !== k.current))
      return;
    Qe(), Y.setLoop(Q), p.current !== null && (Y.seek(p.current), p.current = null);
    let Oe = Y.position();
    if (Oe >= Y.duration - 0.05 && (Oe = 0), !Y.play(Oe)) {
      Se("Toisto epäonnistui. Paina Soita uudelleen.");
      return;
    }
    ye(Oe), J(!0);
  }
  async function It() {
    if (nn) {
      await Kt();
      return;
    }
    const I = i.current, H = l.current, Y = u.current;
    if (!I || !H || !Y) return;
    if (_e) {
      Xe();
      return;
    }
    Se("");
    const fe = p.current ?? I.currentTime;
    if (Number.isFinite(I.duration) && fe >= I.duration - 0.05 && pt(0), Ge(I), G === "webaudio") {
      const We = K.current ??= new Ev(), st = We.unlock() && [I, H, Y].map((ct) => We.route(ct)).every(Boolean);
      q(st ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + We.lastError);
    }
    Qe(), H.muted = !he, Y.muted = !le, Me(!0, void 0, cv);
    const xe = ++d.current;
    he || H.pause(), le || Y.pause();
    const Oe = [I, ...he ? [H] : [], ...le ? [Y] : []];
    if (!rf(Oe)) {
      hv(Oe);
      const We = await fv(Oe, dv, () => xe !== d.current);
      if (We === "ohitettu" || xe !== d.current) return;
      if (We === "virhe") {
        Xe(), Se("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
    }
    try {
      if (h.current.hold(performance.now() + th), await Promise.all(Oe.map((We) => We.play())), xe !== d.current) return;
      if (h.current.hold(performance.now() + th), Me(), J(!0), G === "webaudio" && K.current?.routed(I)) {
        const We = K.current;
        setTimeout(() => {
          xe === d.current && We.state !== "running" && Se(`Ääni ei käynnistynyt (Web Audio: ${We.state}). Pysäytä ja soita uudelleen.${We.lastError ? " " + We.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (xe !== d.current) return;
      Xe(), Se("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function wt(I, H, Y) {
    if (!I) return;
    if (I.muted = !H, !H) {
      I.pause();
      return;
    }
    !i.current || !_e || (Me(!0, I), I.play().catch(() => Se(Y + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function rn(I) {
    W(I), Qe(ce, { guitar: I }), wt(l.current, I, "Kitararaita");
  }
  function Pe(I) {
    ue(I), Qe(ce, { vocals: I }), wt(u.current, I, "Lauluraita");
  }
  return b.useEffect(() => {
    const I = () => {
      document.hidden && Xe();
    };
    return document.addEventListener("visibilitychange", I), () => {
      document.removeEventListener("visibilitychange", I), d.current++, i.current?.pause(), l.current?.pause(), u.current?.pause(), K.current?.close(), ut();
    };
  }, []), b.useEffect(() => {
    if (!nn) return;
    const I = S.current, H = () => {
      I.reset(), _(document.hidden ? "sivu piiloon" : "sivu näkyviin"), document.hidden && f.current && (x.current = !0);
    };
    document.addEventListener("visibilitychange", H);
    const Y = Nf(), fe = () => {
      _(`äänisessio ${Y?.state ?? "?"}`), Y?.state === "interrupted" && f.current && (x.current = !0);
    };
    Y?.addEventListener?.("statechange", fe);
    const xe = setInterval(() => {
      const Oe = f.current;
      if (!Oe || document.hidden || Oe.context.state !== "running" || y.current) {
        I.reset();
        return;
      }
      I.sample(Oe.context.currentTime, performance.now()), !(!Oe.player.playing || I.status(Xk) !== "stalled") && (v.current = !0, ye(Oe.player.pause()), J(!1), Se("Ääni pysähtyi (esimerkiksi näytön lukituksen jälkeen). Paina Soita jatkaaksesi samasta kohdasta."));
    }, 250);
    return () => {
      clearInterval(xe), document.removeEventListener("visibilitychange", H), Y?.removeEventListener?.("statechange", fe);
    };
  }, []), b.useEffect(() => {
    Qe();
  }, [ne]), b.useEffect(() => {
    f.current?.player.setLoop(Q);
  }, [Q]), b.useEffect(() => {
    if (!nn || !_e) return;
    let I = 0, H = "", Y = 0;
    const fe = () => {
      const xe = f.current?.player;
      if (xe?.playing) {
        const Oe = xe.audiblePosition(), We = uu(Oe, ne), st = `${We.sectionIndex}:${We.barIndex}:${We.beat}`, ct = performance.now();
        (st !== H || ct - Y > 250) && (H = st, Y = ct, ye(Oe));
      }
      I = requestAnimationFrame(fe);
    };
    return I = requestAnimationFrame(fe), () => cancelAnimationFrame(I);
  }, [_e, ne]), /* @__PURE__ */ a.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ a.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ a.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          id: "song-version-select",
          value: ne,
          onChange: (I) => it(I.target.value),
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "normal", children: "Normaali versio" }),
            /* @__PURE__ */ a.jsx("option", { value: "acoustic", children: "Akustinen versio" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-lesson song-player", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Kappaleen soitin" }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          de.label,
          " · ",
          de.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          It();
        }, children: _e ? "■ Tauko" : U === "ladataan" || U === "puretaan" ? "■ Peruuta lataus" : "▶ Soita kappale" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: pe > 0 ? pe : 1,
            step: 0.1,
            value: Math.min(ke, pe > 0 ? pe : 1),
            disabled: pe <= 0,
            onChange: (I) => pt(Number(I.target.value))
          }
        ),
        /* @__PURE__ */ a.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Oh(ke),
          " / ",
          Oh(pe)
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: he,
              onChange: (I) => rn(I.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: le,
              onChange: (I) => Pe(I.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: Q,
              onChange: (I) => oe(I.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "song-volume", "data-volume-mode": G, children: [
          /* @__PURE__ */ a.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ a.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            ce > 0 && /* @__PURE__ */ a.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            ce > 50 && /* @__PURE__ */ a.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: ce,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": ce + " %",
              onChange: (I) => Je(Number(I.target.value))
            }
          ),
          /* @__PURE__ */ a.jsxs("output", { "aria-hidden": "true", children: [
            ce,
            " %"
          ] })
        ] })
      ] }),
      te && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: te }),
      /* @__PURE__ */ a.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ a.jsxs("a", { href: de.download, download: de.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ a.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ a.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          de.label,
          ", koko kappale · ",
          de.downloadSize
        ] })
      ] }),
      Ce && /* @__PURE__ */ a.jsxs("p", { className: "backing-error", role: "alert", children: [
        Ce,
        z && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          " ",
          /* @__PURE__ */ a.jsx("a", { href: fy(), children: "Käytä vanhaa soitinta" }),
          "."
        ] })
      ] }),
      E && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: E }),
      nn && B && /* @__PURE__ */ a.jsx("p", { className: "tools-note song-load-wait", role: "status", children: "Ladataan valittua kohtaa…" }),
      nn && /* @__PURE__ */ a.jsx(oy, { state: U, read: () => {
        const I = f.current?.player;
        return I instanceof Fo ? { status: I.downloadStatus, state: I.state } : null;
      } }),
      Ah && /* @__PURE__ */ a.jsx("pre", { className: "tools-note", style: { whiteSpace: "pre-wrap", fontSize: "0.75rem" }, children: O }),
      !nn && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: i,
            src: de.backing,
            preload: "metadata",
            loop: Q,
            onLoadedMetadata: (I) => {
              I.currentTarget === i.current && (Ee(I.currentTarget.duration), Ge(I.currentTarget));
            },
            onProgress: (I) => Ge(I.currentTarget),
            onCanPlay: (I) => Ge(I.currentTarget),
            onTimeUpdate: (I) => De(I.currentTarget),
            onEnded: (I) => {
              I.currentTarget !== i.current || I.currentTarget.loop || (p.current = null, l.current?.pause(), u.current?.pause(), J(!1), ye(I.currentTarget.duration));
            },
            onPause: (I) => {
              I.currentTarget === i.current && J(!1);
            },
            onError: () => Se(de.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
          },
          ne + "-backing"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: l,
            src: de.guitar,
            preload: "metadata",
            muted: !he,
            loop: Q,
            onLoadedMetadata: () => {
              i.current?.paused && Me(!0);
            },
            onError: () => Se(de.label + ": kitararaita puuttuu tai ei lataudu.")
          },
          ne + "-guitar"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: u,
            src: de.vocals,
            preload: "metadata",
            muted: !le,
            loop: Q,
            onLoadedMetadata: () => {
              i.current?.paused && Me(!0);
            },
            onError: () => Se(de.label + ": lauluraita puuttuu tai ei lataudu.")
          },
          ne + "-vocals"
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-chart-collapse", open: se, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (I) => {
        I.preventDefault(), C((H) => !H);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ a.jsx(Tk, { version: ne, position: ke, loop: Q, onSeek: pt })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-scales-collapse", open: j, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (I) => {
        I.preventDefault(), re((H) => !H);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ a.jsx(Pk, { open: j })
    ] })
  ] });
}
const qo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, Pa = (s, i = 1) => s.toFixed(i).replace(".", ",").replace("-", "−"), Tf = (s) => {
  const i = Math.round(s);
  return (i > 0 ? "+" : i < 0 ? "−" : "±") + Math.abs(i);
}, eu = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function gy(s, i, l, u) {
  if (u) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (s) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${eu(l)}. Vaihda laite Mikrofonin asetuksista.`,
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
      return [`Viritä kitara. Sävel hyväksytään, kun poikkeama on enintään ±${i.cents} senttiä.`];
    case "pitch":
      return [`Mikrofoni toimii. Harjoituksessa sävel hyväksytään, kun se soi vakaana ${i.stability} ms.`];
    default:
      return [];
  }
}
function Mf({ frame: s, threshold: i }) {
  const l = s?.rms ?? 0, u = ds(l), d = (s?.peak ?? 0) >= 0.98 ? "clip" : l >= i ? "over" : "under";
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, u)),
      "aria-valuetext": `${Pa(Math.max(-60, u), 0)} desibeliä${l >= i ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meter-fill", style: { width: `${ah(l) * 100}%` } }),
        /* @__PURE__ */ a.jsx("div", { className: "meter-threshold", style: { left: `${ah(i) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function xy({ mic: s, frame: i, heard: l, s: u, now: d }) {
  const h = cf(s.phase, i), p = l && d - l.at < 1500 ? l : null, f = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${$e(p.midi, u.flats, !0)} · ${Tf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : qo[h];
  return /* @__PURE__ */ a.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ a.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: f }),
    s.phase === "on" && /* @__PURE__ */ a.jsx(Mf, { frame: i, threshold: u.minRms })
  ] });
}
function jy({ mic: s, frame: i, heard: l, accepted: u, now: d, s: h, change: p, devices: f, locked: k, calibrating: S, calibration: v, onTest: y, onStop: x, onCalibrate: T }) {
  const _ = b.useId(), E = cf(s.phase, i), w = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", z = s.phase === "on", P = l && d - l.at < 1500 ? l : null, U = P && (E === "pitch" || E === "untuned"), V = z && (i?.peak ?? 0) >= 0.98, B = s.phase === "error" ? [] : gy(E, h, s.info, V), D = !h.device || f.some((F) => F.deviceId === h.device), O = (F, ne) => p({ ...h, [F]: ne });
  return /* @__PURE__ */ a.jsxs("section", { className: "mic-panel", "aria-labelledby": `${_}-title`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ a.jsx("h2", { id: `${_}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ a.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: `mic-state ${E}`, "data-testid": "mic-state", "data-reading": E, children: [
      /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : qo[E],
      E === "pitch" && P ? ` ${$e(P.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: s.phase === "on" ? `Mikrofoni kuuntelee: ${eu(s.info)}.` : s.phase === "error" ? s.error : qo[s.phase] }),
    s.phase === "off" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    z && /* @__PURE__ */ a.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ a.jsxs("dd", { "data-testid": "mic-device", children: [
          eu(s.info),
          s.info && s.info.channels > 1 ? ` · kanava ${(i?.channel ?? 0) + 1}/${s.info.channels}` : "",
          s.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ a.jsxs("dd", { children: [
          /* @__PURE__ */ a.jsx(Mf, { frame: i, threshold: h.minRms }),
          /* @__PURE__ */ a.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Pa(Math.max(-60, ds(i?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ a.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: P ? $e(P.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-frequency", children: P ? `${Pa(P.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-cents", children: P ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          Tf(P.cents),
          " senttiä",
          /* @__PURE__ */ a.jsx("span", { className: `cents ${P.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ a.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, P.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-clarity", children: P ? `${Math.round(P.clarity * 100)} %` : i?.clarity !== void 0 && E === "noise" ? `${Math.round(i.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    z && u && d - u.timestamp < 4e3 && /* @__PURE__ */ a.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      $e(u.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    B.length > 0 && z && /* @__PURE__ */ a.jsx("ul", { className: "mic-advice", children: B.map((F) => /* @__PURE__ */ a.jsx("li", { children: F }, F)) }),
    s.phase === "error" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
      w ? /* @__PURE__ */ a.jsx("button", { type: "button", onClick: x, children: "Lopeta testi" }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: h.input === "mic" && s.phase !== "on" ? "primary" : "", disabled: k, onClick: y, children: "Testaa mikrofoni" }),
      w && z && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: S, onClick: T, children: S ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    k && s.purpose !== "test" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", disabled: k, children: [
        /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsx("label", { htmlFor: `${_}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ a.jsxs("select", { id: `${_}-device`, value: h.device, onChange: (F) => O("device", F.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !D && /* @__PURE__ */ a.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              f.map((F, ne) => /* @__PURE__ */ a.jsx("option", { value: F.deviceId, children: F.label || `Äänitulo ${ne + 1}` }, F.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-rms`, children: [
              "Äänikynnys · ",
              Pa(ds(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (F) => O("minRms", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (F) => O("clarity", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (F) => O("stability", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (F) => O("cents", Number(F.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          f.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const Sy = (s) => s.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[s.scale]) : _i[s.mode === "caged" ? "maj" : s.chord].tones, $h = (s, i) => Sy(s).find(([l]) => l === i)?.[1], _f = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", wy = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function Ey(s, i) {
  return i.choices === "note" ? "Valitse sävelnimi." : i.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Ny(s, i, l, u, d) {
  return i.choices === "degree" ? `Oikein! ${ir(s.root, i.interval, i.degree)} on ${i.degree}. aste.` : _f(s) ? `Oikein! ${i.degree}. aste on ${ir(s.root, i.interval, i.degree)}.` : s.mode === "interval" ? `Oikein! ${$e(i.reference, s.flats, !0)} → ${i.name} on ${sr[i.interval]} ${wy(i)}.` : s.mode === "notes" ? l === "board" && d ? `Oikein! ${$e(d.midi, s.flats)} on ${Dh[d.string]}: ${bi(d.fret)}.` : `Oikein! Soitit sävelen ${$e(u, s.flats, !0)}.` : `Oikein! Sävel oli ${i.name}.`;
}
function Cy(s, i, l, u, d) {
  if (l === "note") return `Ei ${$e(u, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (l === "degree") return `Ei ${$h(s, u) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = He(d.midi) === He(i.midi);
  if (s.mode === "notes")
    return d.string !== i.position.string ? `Tuo on ${sn[d.string]}-kieli. Etsi sävel ${iu[i.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${i.name}.` : `Tuo on ${$e(d.midi, s.flats)}. Etsi ${i.name}.`;
  if (_f(s)) {
    const p = He(d.midi - s.root), f = $h(s, p), k = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return f ? h && i.check === "pitch" && d.midi !== i.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${i.name}.` : h ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${i.degree}. aste sen sisältä.` : `Tuo on ${ir(s.root, p, f)} eli ${f}. aste. Etsi ${i.degree}. aste.` : `Tuo on ${$e(d.midi, s.flats)}, joka ei kuulu ${k}. Etsi ${i.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${$e(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Ty(s, i, l) {
  const u = $e(l, s.flats, !0);
  return He(l) === He(i.midi) ? `Kuulin sävelen ${u}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${u}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function bf(s, i = !1) {
  const l = s.split(":"), u = (p) => Number(l[p]), d = (...p) => p.every((f) => Number.isInteger(u(f))), h = (p, f) => sn[p] ? `${sn[p]}-kieli, ${bi(f)}` : null;
  switch (l[0]) {
    case "notes":
      return d(1, 2) ? h(u(1), u(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${$e(u(1), i)}${l[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return l.length === 2 && d(1) ? `Kuule ja toista: ${$e(u(1), i, !0)}` : d(1, 2) && h(u(1), u(2)) ? `Kuule ja toista: ${h(u(1), u(2))}` : null;
    case "interval":
      return d(1) && sr[u(1)] ? `${sr[u(1)]} ${l[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = l[2];
      if (!d(1, 3) || !_i[p]) return null;
      const f = _i[p].tones.find(([k]) => k === u(3))?.[1];
      return f ? `${zh(u(1), p)}: ${f}. aste${l[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ve.SCALES[l[2]];
      if (!d(1) || !p) return null;
      const f = `${di(u(1))}-${p.name}`;
      if (l.length === 5 && d(3)) {
        const k = Ve.scaleNotes(p).find(([S]) => S === u(3))?.[1];
        return k ? `${f}: ${k}. aste${l[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && h(u(3), u(4)) ? `${f}: ${h(u(3), u(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(l[2] ?? "?")) return null;
      const p = `${di(u(1))}-duuri, ${l[2]}-muoto`;
      if (l.length === 4 && d(3)) {
        const f = _i.maj.tones.find(([k]) => k === u(3))?.[1];
        return f ? `${p}: ${f}. aste` : null;
      }
      return d(3, 4) && h(u(3), u(4)) ? `${p}: ${h(u(3), u(4))}` : null;
    }
    default:
      return null;
  }
}
function Ih(s) {
  return Object.entries(s).flatMap(([i, l]) => {
    const [u, d, h, ...p] = i.split(":");
    return !p.length || !["solo", "guided"].includes(h) ? [] : [{ key: i, input: u, check: d, guided: h === "guided", item: p.join(":"), mode: p[0], stat: l }];
  });
}
const tu = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", My = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function _y(s) {
  const i = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${as(s.mode)}${s.hints ? ` · ${$a[s.hints].title}` : ""} · ${i} · keskimäärin ${tu(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function by({ store: s, s: i, locked: l, changed: u }) {
  const [d, h] = b.useState(""), p = b.useRef(null), { recent: f, sessions: k, stats: S } = s.data, v = Pi(i), y = Vh(i), x = [...new Set(f.map((P) => P.mode))].map((P) => {
    const U = f.filter((V) => V.mode === P);
    return { mode: P, ...Ko(U), last: Math.max(...U.map((V) => V.at)) };
  }).sort((P, U) => U.last - P.last), T = Ih(S).filter((P) => !P.guided && P.mode === i.mode && P.input === v && P.check === y && P.stat.attempts >= 3).map((P) => ({ ...P, score: su(P.stat), text: bf(P.item, i.flats) })).filter((P) => P.text && P.score < 0.8).sort((P, U) => P.score - U.score).slice(0, 5), _ = Ih(S).reduce((P, U) => P + U.stat.attempts, 0);
  function E() {
    const P = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), U = URL.createObjectURL(P), V = document.createElement("a");
    V.href = U, V.download = "musiikin-kartta-harjoittelu.json", V.click(), setTimeout(() => URL.revokeObjectURL(U), 1e3);
  }
  async function w(P) {
    if (P)
      try {
        const U = await P.text();
        if (_ && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        s.restore(U), h("Varmuuskopio palautettu."), u();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function z() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (s.clearProgress(), h("Harjoitustulokset poistettu."), u());
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ a.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    _ === 0 ? /* @__PURE__ */ a.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        _,
        " vastattua kysymystä · ",
        k.length,
        " harjoituskertaa. ",
        /* @__PURE__ */ a.jsx("strong", { children: "Itsenäisesti" }),
        " tarkoittaa vastausta ilman vihjettä, ",
        /* @__PURE__ */ a.jsx("strong", { children: "heti oikein" }),
        " oikeaa vastausta ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "fret-scroll", children: /* @__PURE__ */ a.jsxs("table", { className: "summary-table", children: [
        /* @__PURE__ */ a.jsx("caption", { children: "Viimeisimmät vastaukset harjoituksittain" }),
        /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Harjoitus" }),
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Vastauksia" }),
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Itsenäisesti heti oikein" }),
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Vihjeen kanssa" }),
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Keskiaika" })
        ] }) }),
        /* @__PURE__ */ a.jsx("tbody", { children: x.map((P) => /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { scope: "row", children: as(P.mode) }),
          /* @__PURE__ */ a.jsx("td", { children: P.count }),
          /* @__PURE__ */ a.jsx("td", { children: P.solo ? `${P.soloFirst}/${P.solo} · ${Math.round(P.soloFirst / P.solo * 100)} %` : "–" }),
          /* @__PURE__ */ a.jsx("td", { children: P.guided }),
          /* @__PURE__ */ a.jsx("td", { children: tu(P.ms / P.count) })
        ] }, P.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi" }),
    T.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        as(i.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ a.jsx("ul", { children: T.map((P) => /* @__PURE__ */ a.jsxs("li", { children: [
        P.text,
        " · viime aikoina ",
        Math.round(rr(P.stat) * 100),
        " % heti oikein · ",
        tu(ar(P.stat))
      ] }, P.key)) })
    ] }) : /* @__PURE__ */ a.jsx("p", { children: _ ? `Harjoituksessa ${as(i.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        My[i.input],
        ") ja tarkistuksella (",
        i.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ a.jsx(Hp, { area: { strings: i.strings, min: i.min, max: i.max, fixed: "" }, stats: S, input: i.input, check: i.check, flats: i.flats })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      k.length ? /* @__PURE__ */ a.jsx("ul", { children: k.slice(-10).reverse().map((P) => /* @__PURE__ */ a.jsx("li", { children: _y(P) }, P.id)) }) : /* @__PURE__ */ a.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ a.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: E, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: l, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ a.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (P) => {
          w(P.target.files?.[0]);
        } }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: l || !_, onClick: z, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ a.jsx("p", { role: "status", children: d })
    ] }),
    s.warning && /* @__PURE__ */ a.jsx("p", { role: "status", className: "error", children: s.warning })
  ] });
}
function Py() {
  try {
    return new Wd(localStorage);
  } catch {
    return new Wd();
  }
}
const Fh = (s) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents }), Ay = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", Ly = [0, 2, 4, 5, 7, 9, 11];
function Ry(s) {
  return s.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : s.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : s.mode === "chord" ? s.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : s.mode === "scale" ? ["mp", "majp"].includes(s.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Oy() {
  const [s] = b.useState(Py), [i, l] = b.useState(() => Ap(location.search, s.data.settings)), [, u] = b.useReducer((L) => L + 1, 0), d = b.useRef(null), h = b.useRef(new Hv()), p = b.useRef(new ur()), f = b.useRef(0), k = b.useRef(), S = b.useRef(), v = b.useRef(null), y = b.useRef(0), x = b.useRef(null), T = b.useRef(i);
  T.current = i;
  const [_, E] = b.useState({ phase: "off", purpose: "none" }), w = b.useRef(_), z = (L) => {
    w.current = L, E(L);
  }, [P, U] = b.useState(null), [V, B] = b.useState(null), [D, O] = b.useState(null), [F, ne] = b.useState(0), [ie, de] = b.useState([]), [_e, J] = b.useState(!1), [he, W] = b.useState(!1), [le, ue] = b.useState(""), [Q, oe] = b.useState("info"), [se, C] = b.useState(""), [j, re] = b.useState(0), [ce, be] = b.useState([]), [G, K] = b.useState([]), [te, q] = b.useState(null), [ke, ye] = b.useState(!1), [pe, Ee] = b.useState(""), [Ce, Se] = b.useState(""), [Me, Fe] = b.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : yf(L.get("kappale")) ? "songs" : nv(L.get("polku"));
  }), [Qe, Je] = b.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.get("polku") === "otelauta" && L.get("harjoitus") === "savelten-etsinta";
  });
  function Xe() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.set("harjoitus", "savelten-etsinta"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), Je(!0);
  }
  function it() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), Je(!1);
  }
  function pt() {
    Fe(null), Je(!1);
    const L = new URL(location.href);
    L.searchParams.delete("polku"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash);
  }
  const Ge = () => {
    _v().then(de).catch(() => {
    });
  };
  function De() {
    clearTimeout(S.current), v.current = null, ye(!1);
  }
  function et() {
    U(null), B(null), O(null);
  }
  function ut() {
    h.current.stop(), De(), z({ phase: "off", purpose: "none" }), et();
  }
  async function Vt(L) {
    if (h.current.active && w.current.phase === "on")
      return De(), z({ ...w.current, purpose: L }), h.current.rearm(), !0;
    z({ phase: "requesting", purpose: L }), et();
    try {
      const ve = await h.current.start(T.current.device, {
        ...Fh(T.current),
        onFrame: (Ke) => wt.current.frame(Ke),
        onStableNote: (Ke) => wt.current.stable(Ke)
      }, () => wt.current.lost());
      return ve ? (z({ phase: "on", purpose: L, info: ve }), Ge(), !0) : !1;
    } catch (ve) {
      return z({ phase: "error", purpose: "none", error: Uv(ve) }), !1;
    }
  }
  function At(L) {
    v.current?.push(L.rms);
    const ve = performance.now();
    ve - y.current < 66 || (y.current = ve, U(L), ne(ve), L.midi !== void 0 && L.frequency !== void 0 && B({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: ve }));
  }
  function Kt(L) {
    w.current.purpose === "test" ? O(L) : w.current.purpose === "round" && ct(L.midi, "mic", void 0, L.heldMs);
  }
  function It() {
    const L = w.current.purpose === "round";
    De(), et(), z({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const ve = d.current;
    L && ve && ["active", "feedback", "paused"].includes(ve.phase) && (Y(), W(!1), ve.pause(), C("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), u());
  }
  const wt = b.useRef({ frame: At, stable: Kt, lost: It });
  wt.current = { frame: At, stable: Kt, lost: It };
  function rn(L) {
    const ve = Aa(L), Ke = ve.device !== T.current.device;
    T.current = ve, l(ve), s.settings(ve), C(""), h.current.active && (Ke && w.current.purpose === "test" ? (ut(), Vt("test")) : h.current.setOptions(Fh(ve)));
  }
  function Pe(L) {
    Se(""), d.current = null, Je(!1), Fe(L);
  }
  function I() {
    Ee(""), Vt("test");
  }
  function H() {
    w.current.phase !== "on" || w.current.purpose !== "test" || (De(), v.current = [], ye(!0), Ee("Mitataan taustakohinaa kolme sekuntia. Älä soita."), S.current = setTimeout(() => {
      const L = v.current ?? [];
      if (De(), L.length < 10) {
        Ee("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: ve, noise: Ke, loud: Xt } = Gv(L);
      rn({ ...T.current, minRms: ve }), Ee(`Taustakohina on ${Math.round(ds(Ke))} dB ja äänikynnys nyt ${Math.round(ds(ve))} dB. ${Xt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Y() {
    f.current++, clearTimeout(k.current), p.current.stop();
  }
  function fe(L, ve) {
    if (!L.results.length) return;
    const Ke = Ko(L.results);
    s.session({
      id: L.id,
      mode: L.settings.mode,
      count: Ke.count,
      first: Ke.first,
      ms: Ke.ms,
      solo: Ke.solo,
      soloFirst: Ke.soloFirst,
      hints: L.settings.hints,
      at: Date.now(),
      complete: ve
    });
  }
  async function xe(L) {
    if (!L.question?.sound.length || L.phase !== "active") return;
    Y();
    const ve = f.current;
    L.pause(), h.current.pause(), W(!0), oe("info"), ue("Kuuntele…"), u();
    try {
      await p.current.play(L.question.sound);
    } catch {
      ve === f.current && C("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    ve !== f.current || d.current !== L || (L.resume(), h.current.resume(), W(!1), ue(""), u());
  }
  async function Oe(L) {
    be([]), K([]), q(null), C(""), re(L.hintLevel), h.current.rearm(), oe("info"), ue(""), u(), L.question?.sound.length && await xe(L);
  }
  async function We() {
    const L = T.current, ve = Bo(L);
    if (ve) {
      C(ve);
      return;
    }
    Y();
    const Ke = f.current;
    if (C(""), Ee(""), Se(""), Sa(L)) {
      J(!0);
      const ht = await Vt("round");
      if (Ke !== f.current) return;
      if (J(!1), !ht) {
        C("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else w.current.phase !== "off" && ut();
    const Xt = new tv(L, () => s.data.stats, (ht) => s.record(ht));
    try {
      Xt.start();
    } catch (ht) {
      w.current.purpose === "round" && ut(), C(ht instanceof Error ? ht.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Xt, requestAnimationFrame(() => x.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Oe(Xt);
  }
  function st() {
    Y(), J(!1), ut();
  }
  function ct(L, ve, Ke, Xt = 0) {
    const ht = d.current, Ft = ht?.question;
    if (!ht || !Ft || ht.phase !== "active") return;
    const ks = ht.answer(L, ve, Ke, Xt);
    if (ks !== "ignored") {
      if (ks === "candidate")
        q(L), oe("bad"), ue(Ty(ht.settings, Ft, L));
      else if (ks === "wrong")
        Ke ? be((Mt) => [...Mt, Ke]) : K((Mt) => [...Mt, L]), oe("bad"), ue(Cy(ht.settings, Ft, ve, L, Ke));
      else if (q(null), oe("good"), ue(Ny(ht.settings, Ft, ve, L, Ke)), fe(ht, !1), ht.settings.advance) {
        const Mt = f.current;
        k.current = setTimeout(() => {
          Mt === f.current && Mn();
        }, ve === "mic" ? 1800 : 1400);
      }
      u();
    }
  }
  async function Mn() {
    const L = d.current;
    if (!(!L || L.phase !== "feedback")) {
      Y();
      try {
        L.next();
      } catch (ve) {
        hn(!1), C(ve instanceof Error ? ve.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (L.phase === "done") {
        hn(!0);
        return;
      }
      await Oe(L);
    }
  }
  function hn(L = !1) {
    Y(), W(!1), J(!1), (w.current.purpose === "round" || w.current.phase === "requesting") && ut();
    const ve = d.current;
    ve && (ve.stop(), fe(ve, L)), q(null), re(0), be([]), K([]), C(""), Se(L ? "complete" : "stopped"), oe("info"), ue(""), u();
  }
  function _n() {
    const L = d.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    Y(), W(!1), L.pause();
    const ve = w.current.purpose === "round";
    ve && ut(), oe("info"), ue(`Harjoitus on tauolla.${ve ? " Mikrofoni on suljettu." : ""}`), u();
  }
  async function dr() {
    const L = d.current;
    if (!L || L.phase !== "paused" || he) return;
    Y();
    const ve = f.current;
    if (C(""), Sa(L.settings)) {
      J(!0);
      const Ke = await Vt("round");
      if (ve !== f.current) return;
      if (J(!1), !Ke) {
        C("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), oe("info"), ue(""), u(), L.phase === "active" && (h.current.rearm(), L.question?.sound.length && await xe(L));
  }
  function ms(L) {
    const ve = d.current;
    !ve || ve.phase !== "active" || (ve.useHint(L), re(L), u());
  }
  const mi = b.useRef({ hidden: () => {
  }, restored: () => {
  } });
  mi.current = {
    hidden: () => {
      const L = d.current;
      L && ["active", "feedback"].includes(L.phase) || he ? _n() : w.current.phase !== "off" && w.current.phase !== "error" && (Y(), J(!1), ut());
    },
    restored: () => {
      J(!1), W(!1), z({ phase: "off", purpose: "none" }), et(), u();
    }
  }, b.useEffect(() => {
    Ge();
    const L = () => Ge();
    navigator.mediaDevices?.addEventListener?.("devicechange", L);
    const ve = () => {
      f.current++, clearTimeout(k.current), clearTimeout(S.current), h.current.stop(), p.current.stop(), Kv(), d.current?.pause();
    }, Ke = () => {
      document.hidden && mi.current.hidden();
    }, Xt = (ht) => {
      ht.persisted && mi.current.restored();
    };
    return document.addEventListener("visibilitychange", Ke), window.addEventListener("pagehide", ve), window.addEventListener("pageshow", Xt), () => {
      ve(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", Ke), window.removeEventListener("pagehide", ve), window.removeEventListener("pageshow", Xt);
    };
  }, []);
  const Li = b.useRef(null), pi = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${he}`;
  b.useEffect(() => {
    const L = d.current, ve = x.current, Ke = document.activeElement;
    !L || !ve || !(Ke === document.body || ve.contains(Ke)) || (L.phase === "feedback" ? Li.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !he && (Ke === document.body || Ke === Li.current) && ve.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [pi]);
  const ze = d.current, tt = !!ze && ["active", "paused", "feedback"].includes(ze.phase), rt = tt ? ze.settings : i, kt = tt ? ze.question : void 0, Ut = !!kt && !!ze?.answered, fn = tt && ze.phase === "paused" && !he && !Ut, Bn = tt && ze.phase === "active" && !he, ps = tt ? null : Bo(i), vs = tt || _e, hr = Ai(rt), bn = Wp(rt), Vn = kt && !Ut ? j : 0, Ri = kt ? ev(rt, kt, Ut ? 2 : Vn) : { marks: [], text: "" }, fr = [...new Map([...Ri.marks, ...Ut ? [] : ce.map((L) => ({ ...L, label: $e(L.midi, rt.flats), kind: "wrong" }))].map((L) => [Ze(L), L])).values()], mr = tt && Sa(rt), pr = !!kt && !fn && (kt.choices === "position" || fr.length > 0), Tt = ze ? Ko(ze.results) : null, vr = !ze || rt.hints !== "fade" ? "" : ze.index <= 3 ? " · vastaus näkyy" : ze.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", kr = ze && !tt ? ze.results.filter((L) => L.errors > 0 || L.hint) : [], [Da, dt] = Ry(rt), Kn = /* @__PURE__ */ a.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ a.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ a.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), jn = s.data.notice === "hints-default" && /* @__PURE__ */ a.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
    /* @__PURE__ */ a.jsxs("p", { children: [
      /* @__PURE__ */ a.jsx("strong", { children: "Harjoittelutapa on muuttunut." }),
      " Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt ",
      /* @__PURE__ */ a.jsx("em", { children: "Testaa osaamistasi" }),
      ", ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse ",
      /* @__PURE__ */ a.jsx("em", { children: "Opettele" }),
      " tai ",
      /* @__PURE__ */ a.jsx("em", { children: "Vähennä vihjeitä" }),
      "."
    ] }),
    /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
      s.dismissNotice(), u();
    }, children: "Selvä" })
  ] });
  return !tt && Me === null ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    /* @__PURE__ */ a.jsx(sv, { onSelect: Pe })
  ] }) : !tt && Me === "scales" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    /* @__PURE__ */ a.jsx(ok, { onBack: pt })
  ] }) : !tt && Me === "ear" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    Qe ? /* @__PURE__ */ a.jsx(uk, { onBack: it }) : /* @__PURE__ */ a.jsx(rv, { onBack: pt, onNotes: Xe })
  ] }) : !tt && Me === "chords" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    /* @__PURE__ */ a.jsx(hk, { onBack: pt })
  ] }) : !tt && Me === "songs" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    /* @__PURE__ */ a.jsx(yy, { onBack: pt })
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsxs("a", { href: Da, children: [
      "Lue tämän harjoituksen teoria: ",
      dt,
      " →"
    ] }) }),
    Me !== "legacy" && /* @__PURE__ */ a.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
        tt && hn(), pt();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ a.jsx("h2", { children: Me === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ a.jsx("p", { children: Me === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    tt ? /* @__PURE__ */ a.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ a.jsx("strong", { children: as(rt.mode) }),
      " · ",
      Xd(rt)
    ] }) : Me === "legacy" ? /* @__PURE__ */ a.jsx(Zd, { s: i, change: rn, locked: vs, problem: ps }) : /* @__PURE__ */ a.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ a.jsx(Zd, { s: i, change: rn, locked: vs, problem: ps })
    ] }),
    !tt && (Me === "legacy" || Sa(i)) && /* @__PURE__ */ a.jsx(
      jy,
      {
        mic: _,
        frame: P,
        heard: V,
        accepted: D,
        now: F,
        s: i,
        change: rn,
        devices: ie,
        locked: _e,
        calibrating: ke,
        calibration: pe,
        onTest: I,
        onStop: ut,
        onCalibrate: H
      }
    ),
    /* @__PURE__ */ a.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: x, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h2", { id: "session-title", children: as(rt.mode) }),
        /* @__PURE__ */ a.jsx("span", { "data-testid": "round-status", children: tt ? `Kysymys ${ze.index}${ze.total ? " / " + ze.total : " · vapaa harjoittelu"} · ${$a[rt.hints].title}${vr}${ze.phase === "paused" && !he ? " · tauolla" : ""}` : Ce === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !tt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        ze && ze.results.length > 0 && Tt ? /* @__PURE__ */ a.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ a.jsx("h3", { children: Ce === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ a.jsxs("dl", { children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-solo", children: Tt.solo ? `${Tt.soloFirst} / ${Tt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-guided", children: Tt.guided })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ a.jsx("dd", { children: Ay(Tt.ms / Tt.count) })
            ] })
          ] }),
          Tt.solo === 0 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          kr.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ a.jsx("ul", { children: [...new Set(kr.map((L) => bf(L.item, i.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ a.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ a.jsx("p", { className: "question idle", children: Xd(i) }),
        /* @__PURE__ */ a.jsx("div", { className: "action-row", children: _e ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: st, children: "Peru" })
        ] }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !!ps, onClick: () => {
          We();
        }, children: ze?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !ze && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      tt && kt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: fn ? "Harjoitus on tauolla." : kt.prompt }),
        /* @__PURE__ */ a.jsx("p", { className: "how", "data-testid": "instruction", children: fn ? "Kysymys palaa näkyviin, kun jatkat." : he ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Ey(rt, kt) }),
        ze.hintLevel > 0 && !Ut && /* @__PURE__ */ a.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: rt.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        mr && /* @__PURE__ */ a.jsx(xy, { mic: _, frame: P, heard: V, s: rt, now: F }),
        kt.choices === "note" && !fn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (rt.accidentals ? Array.from({ length: 12 }, (L, ve) => ve) : Ly).map((L) => /* @__PURE__ */ a.jsx("button", { type: "button", className: G.includes(L) ? "wrong" : Ut && L === kt.midi % 12 ? "right" : "", disabled: !Bn || G.includes(L), onClick: () => ct(L, "note"), children: $e(L, rt.flats) }, L)) }),
        kt.choices === "degree" && !fn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (rt.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[rt.scale]) : _i[rt.chord].tones).map(([L, ve]) => /* @__PURE__ */ a.jsx("button", { type: "button", className: G.includes(L) ? "wrong" : Ut && L === kt.interval ? "right" : "", disabled: !Bn || G.includes(L), onClick: () => ct(L, "degree"), children: ve }, L)) }),
        pr && /* @__PURE__ */ a.jsx(
          hi,
          {
            area: bn,
            marks: fr,
            disabled: !Bn || kt.choices !== "position" || rt.input === "mic",
            onAnswer: (L) => ct(L.midi, "board", L),
            caption: hr.fixed === "shape" ? `${rt.shape}-muodon alue` : hr.fixed === "box" ? `Boksin ${rt.box} alue` : "Otelauta"
          }
        ),
        !Ut && !fn && Vn > 0 && Ri.text && /* @__PURE__ */ a.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: Ri.text }),
        /* @__PURE__ */ a.jsx("p", { className: `feedback ${Q}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: le }),
        te !== null && ze.phase === "active" && /* @__PURE__ */ a.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            ze.confirmWrong(), q(null), ue("Kirjattu virheeksi. Etsi sävel uudelleen."), u();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ a.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        se && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: se }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          ze.phase === "feedback" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", ref: Li, onClick: () => {
            Mn();
          }, children: ze.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          ze.phase === "active" && !Ut && !he && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            Vn === 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ms(Math.max(1, ze.hintLevel)), children: ze.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Vn === 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ms(2), children: "Näytä vastaus" }),
            Vn > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => re(0), children: "Piilota vihje" })
          ] }),
          kt.sound.length > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: !Bn, onClick: () => {
            xe(ze);
          }, children: "Kuuntele uudelleen" }),
          ze.phase === "paused" && !he ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: _e, onClick: () => {
            dr();
          }, children: _e ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: _n, children: "Tauko" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => hn(), children: "Lopeta harjoitus" })
        ] }),
        ze.phase === "feedback" && rt.advance && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "tally", children: Tt?.count ? `Vastattu ${Tt.count} · itsenäisesti heti oikein ${Tt.soloFirst}/${Tt.solo}${Tt.guided ? ` · vihjeen kanssa ${Tt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !tt && se && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: se })
    ] }),
    !tt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { className: "link-row", children: [
        i.mode === "scale" && /* @__PURE__ */ a.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ve.CHROM[i.root])}&asteikko=${i.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ a.jsx("a", { href: Lp(i), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ a.jsx(by, { store: s, s: i, locked: vs, changed: () => {
        const L = Aa(s.data.settings);
        T.current = L, l(L), u();
      } }),
      /* @__PURE__ */ a.jsxs("details", { className: "privacy", children: [
        /* @__PURE__ */ a.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
        /* @__PURE__ */ a.jsx("p", { children: "Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa." }),
        /* @__PURE__ */ a.jsx("p", { children: "Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi." }),
        /* @__PURE__ */ a.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen." }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Tunnistus on sovitettu ",
          /* @__PURE__ */ a.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
          " (MIT) ja käyttää Pitchyä. ",
          /* @__PURE__ */ a.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
          " · ",
          /* @__PURE__ */ a.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
          "."
        ] })
      ] })
    ] })
  ] });
}
Ep.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ a.jsx(Oy, {}));
//# sourceMappingURL=app.js.map
