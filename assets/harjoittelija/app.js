function mp(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var jo = { exports: {} }, Xs = {}, So = { exports: {} }, De = {};
var Ld;
function pp() {
  if (Ld) return De;
  Ld = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), f = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), y = Symbol.iterator;
  function x(N) {
    return N === null || typeof N != "object" ? null : (N = y && N[y] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var T = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, w = {};
  function E(N, j, te) {
    this.props = N, this.context = j, this.refs = w, this.updater = te || T;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(N, j) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, j, "setState");
  }, E.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function z() {
  }
  z.prototype = E.prototype;
  function P(N, j, te) {
    this.props = N, this.context = j, this.refs = w, this.updater = te || T;
  }
  var U = P.prototype = new z();
  U.constructor = P, b(U, E.prototype), U.isPureReactComponent = !0;
  var V = Array.isArray, B = Object.prototype.hasOwnProperty, F = { current: null }, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(N, j, te) {
    var de, Te = {}, G = null, K = null;
    if (j != null) for (de in j.ref !== void 0 && (K = j.ref), j.key !== void 0 && (G = "" + j.key), j) B.call(j, de) && !$.hasOwnProperty(de) && (Te[de] = j[de]);
    var W = arguments.length - 2;
    if (W === 1) Te.children = te;
    else if (1 < W) {
      for (var Y = Array(W), ve = 0; ve < W; ve++) Y[ve] = arguments[ve + 2];
      Te.children = Y;
    }
    if (N && N.defaultProps) for (de in W = N.defaultProps, W) Te[de] === void 0 && (Te[de] = W[de]);
    return { $$typeof: s, type: N, key: G, ref: K, props: Te, _owner: F.current };
  }
  function ie(N, j) {
    return { $$typeof: s, type: N.type, key: j, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function J(N) {
    return typeof N == "object" && N !== null && N.$$typeof === s;
  }
  function je(N) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(te) {
      return j[te];
    });
  }
  var Ae = /\/+/g;
  function X(N, j) {
    return typeof N == "object" && N !== null && N.key != null ? je("" + N.key) : j.toString(36);
  }
  function me(N, j, te, de, Te) {
    var G = typeof N;
    (G === "undefined" || G === "boolean") && (N = null);
    var K = !1;
    if (N === null) K = !0;
    else switch (G) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (N.$$typeof) {
          case s:
          case i:
            K = !0;
        }
    }
    if (K) return K = N, Te = Te(K), N = de === "" ? "." + X(K, 0) : de, V(Te) ? (te = "", N != null && (te = N.replace(Ae, "$&/") + "/"), me(Te, j, te, "", function(ve) {
      return ve;
    })) : Te != null && (J(Te) && (Te = ie(Te, te + (!Te.key || K && K.key === Te.key ? "" : ("" + Te.key).replace(Ae, "$&/") + "/") + N)), j.push(Te)), 1;
    if (K = 0, de = de === "" ? "." : de + ":", V(N)) for (var W = 0; W < N.length; W++) {
      G = N[W];
      var Y = de + X(G, W);
      K += me(G, j, te, Y, Te);
    }
    else if (Y = x(N), typeof Y == "function") for (N = Y.call(N), W = 0; !(G = N.next()).done; ) G = G.value, Y = de + X(G, W++), K += me(G, j, te, Y, Te);
    else if (G === "object") throw j = String(N), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function H(N, j, te) {
    if (N == null) return N;
    var de = [], Te = 0;
    return me(N, de, "", "", function(G) {
      return j.call(te, G, Te++);
    }), de;
  }
  function ce(N) {
    if (N._status === -1) {
      var j = N._result;
      j = j(), j.then(function(te) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = te);
      }, function(te) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = te);
      }), N._status === -1 && (N._status = 0, N._result = j);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var ue = { current: null }, q = { transition: null }, ae = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: q, ReactCurrentOwner: F };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return De.Children = { map: H, forEach: function(N, j, te) {
    H(N, function() {
      j.apply(this, arguments);
    }, te);
  }, count: function(N) {
    var j = 0;
    return H(N, function() {
      j++;
    }), j;
  }, toArray: function(N) {
    return H(N, function(j) {
      return j;
    }) || [];
  }, only: function(N) {
    if (!J(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, De.Component = E, De.Fragment = l, De.Profiler = d, De.PureComponent = P, De.StrictMode = u, De.Suspense = k, De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, De.act = ne, De.cloneElement = function(N, j, te) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var de = b({}, N.props), Te = N.key, G = N.ref, K = N._owner;
    if (j != null) {
      if (j.ref !== void 0 && (G = j.ref, K = F.current), j.key !== void 0 && (Te = "" + j.key), N.type && N.type.defaultProps) var W = N.type.defaultProps;
      for (Y in j) B.call(j, Y) && !$.hasOwnProperty(Y) && (de[Y] = j[Y] === void 0 && W !== void 0 ? W[Y] : j[Y]);
    }
    var Y = arguments.length - 2;
    if (Y === 1) de.children = te;
    else if (1 < Y) {
      W = Array(Y);
      for (var ve = 0; ve < Y; ve++) W[ve] = arguments[ve + 2];
      de.children = W;
    }
    return { $$typeof: s, type: N.type, key: Te, ref: G, props: de, _owner: K };
  }, De.createContext = function(N) {
    return N = { $$typeof: p, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: h, _context: N }, N.Consumer = N;
  }, De.createElement = L, De.createFactory = function(N) {
    var j = L.bind(null, N);
    return j.type = N, j;
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(N) {
    return { $$typeof: f, render: N };
  }, De.isValidElement = J, De.lazy = function(N) {
    return { $$typeof: v, _payload: { _status: -1, _result: N }, _init: ce };
  }, De.memo = function(N, j) {
    return { $$typeof: S, type: N, compare: j === void 0 ? null : j };
  }, De.startTransition = function(N) {
    var j = q.transition;
    q.transition = {};
    try {
      N();
    } finally {
      q.transition = j;
    }
  }, De.unstable_act = ne, De.useCallback = function(N, j) {
    return ue.current.useCallback(N, j);
  }, De.useContext = function(N) {
    return ue.current.useContext(N);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(N) {
    return ue.current.useDeferredValue(N);
  }, De.useEffect = function(N, j) {
    return ue.current.useEffect(N, j);
  }, De.useId = function() {
    return ue.current.useId();
  }, De.useImperativeHandle = function(N, j, te) {
    return ue.current.useImperativeHandle(N, j, te);
  }, De.useInsertionEffect = function(N, j) {
    return ue.current.useInsertionEffect(N, j);
  }, De.useLayoutEffect = function(N, j) {
    return ue.current.useLayoutEffect(N, j);
  }, De.useMemo = function(N, j) {
    return ue.current.useMemo(N, j);
  }, De.useReducer = function(N, j, te) {
    return ue.current.useReducer(N, j, te);
  }, De.useRef = function(N) {
    return ue.current.useRef(N);
  }, De.useState = function(N) {
    return ue.current.useState(N);
  }, De.useSyncExternalStore = function(N, j, te) {
    return ue.current.useSyncExternalStore(N, j, te);
  }, De.useTransition = function() {
    return ue.current.useTransition();
  }, De.version = "18.3.1", De;
}
var Rd;
function nu() {
  return Rd || (Rd = 1, So.exports = pp()), So.exports;
}
var Od;
function vp() {
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
function kp() {
  return $d || ($d = 1, jo.exports = vp()), jo.exports;
}
var a = kp(), _ = nu(), ja = {}, wo = { exports: {} }, Jt = {}, Eo = { exports: {} }, No = {};
var Id;
function yp() {
  return Id || (Id = 1, (function(s) {
    function i(q, ae) {
      var ne = q.length;
      q.push(ae);
      e: for (; 0 < ne; ) {
        var N = ne - 1 >>> 1, j = q[N];
        if (0 < d(j, ae)) q[N] = ae, q[ne] = j, ne = N;
        else break e;
      }
    }
    function l(q) {
      return q.length === 0 ? null : q[0];
    }
    function u(q) {
      if (q.length === 0) return null;
      var ae = q[0], ne = q.pop();
      if (ne !== ae) {
        q[0] = ne;
        e: for (var N = 0, j = q.length, te = j >>> 1; N < te; ) {
          var de = 2 * (N + 1) - 1, Te = q[de], G = de + 1, K = q[G];
          if (0 > d(Te, ne)) G < j && 0 > d(K, Te) ? (q[N] = K, q[G] = ne, N = G) : (q[N] = Te, q[de] = ne, N = de);
          else if (G < j && 0 > d(K, ne)) q[N] = K, q[G] = ne, N = G;
          else break e;
        }
      }
      return ae;
    }
    function d(q, ae) {
      var ne = q.sortIndex - ae.sortIndex;
      return ne !== 0 ? ne : q.id - ae.id;
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
    var k = [], S = [], v = 1, y = null, x = 3, T = !1, b = !1, w = !1, E = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function U(q) {
      for (var ae = l(S); ae !== null; ) {
        if (ae.callback === null) u(S);
        else if (ae.startTime <= q) u(S), ae.sortIndex = ae.expirationTime, i(k, ae);
        else break;
        ae = l(S);
      }
    }
    function V(q) {
      if (w = !1, U(q), !b) if (l(k) !== null) b = !0, ce(B);
      else {
        var ae = l(S);
        ae !== null && ue(V, ae.startTime - q);
      }
    }
    function B(q, ae) {
      b = !1, w && (w = !1, z(L), L = -1), T = !0;
      var ne = x;
      try {
        for (U(ae), y = l(k); y !== null && (!(y.expirationTime > ae) || q && !je()); ) {
          var N = y.callback;
          if (typeof N == "function") {
            y.callback = null, x = y.priorityLevel;
            var j = N(y.expirationTime <= ae);
            ae = s.unstable_now(), typeof j == "function" ? y.callback = j : y === l(k) && u(k), U(ae);
          } else u(k);
          y = l(k);
        }
        if (y !== null) var te = !0;
        else {
          var de = l(S);
          de !== null && ue(V, de.startTime - ae), te = !1;
        }
        return te;
      } finally {
        y = null, x = ne, T = !1;
      }
    }
    var F = !1, $ = null, L = -1, ie = 5, J = -1;
    function je() {
      return !(s.unstable_now() - J < ie);
    }
    function Ae() {
      if ($ !== null) {
        var q = s.unstable_now();
        J = q;
        var ae = !0;
        try {
          ae = $(!0, q);
        } finally {
          ae ? X() : (F = !1, $ = null);
        }
      } else F = !1;
    }
    var X;
    if (typeof P == "function") X = function() {
      P(Ae);
    };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), H = me.port2;
      me.port1.onmessage = Ae, X = function() {
        H.postMessage(null);
      };
    } else X = function() {
      E(Ae, 0);
    };
    function ce(q) {
      $ = q, F || (F = !0, X());
    }
    function ue(q, ae) {
      L = E(function() {
        q(s.unstable_now());
      }, ae);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, s.unstable_continueExecution = function() {
      b || T || (b = !0, ce(B));
    }, s.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ie = 0 < q ? Math.floor(1e3 / q) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, s.unstable_getFirstCallbackNode = function() {
      return l(k);
    }, s.unstable_next = function(q) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = x;
      }
      var ne = x;
      x = ae;
      try {
        return q();
      } finally {
        x = ne;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(q, ae) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var ne = x;
      x = q;
      try {
        return ae();
      } finally {
        x = ne;
      }
    }, s.unstable_scheduleCallback = function(q, ae, ne) {
      var N = s.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? N + ne : N) : ne = N, q) {
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
      return j = ne + j, q = { id: v++, callback: ae, priorityLevel: q, startTime: ne, expirationTime: j, sortIndex: -1 }, ne > N ? (q.sortIndex = ne, i(S, q), l(k) === null && q === l(S) && (w ? (z(L), L = -1) : w = !0, ue(V, ne - N))) : (q.sortIndex = j, i(k, q), b || T || (b = !0, ce(B))), q;
    }, s.unstable_shouldYield = je, s.unstable_wrapCallback = function(q) {
      var ae = x;
      return function() {
        var ne = x;
        x = ae;
        try {
          return q.apply(this, arguments);
        } finally {
          x = ne;
        }
      };
    };
  })(No)), No;
}
var Fd;
function gp() {
  return Fd || (Fd = 1, Eo.exports = yp()), Eo.exports;
}
var Dd;
function xp() {
  if (Dd) return Jt;
  Dd = 1;
  var s = nu(), i = gp();
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
  function b(e, t, n, r) {
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
  function w(e, t, n, r, o, c, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = m;
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
  var z = /[\-:]([a-z])/g;
  function P(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      z,
      P
    );
    E[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(z, P);
    E[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(z, P);
    E[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function U(e, t, n, r) {
    var o = E.hasOwnProperty(t) ? E[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, o, r) && (n = null), r || o === null ? x(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var V = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = /* @__PURE__ */ Symbol.for("react.element"), F = /* @__PURE__ */ Symbol.for("react.portal"), $ = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), ie = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.provider"), je = /* @__PURE__ */ Symbol.for("react.context"), Ae = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), me = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), ce = /* @__PURE__ */ Symbol.for("react.lazy"), ue = /* @__PURE__ */ Symbol.for("react.offscreen"), q = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = q && e[q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ne = Object.assign, N;
  function j(e) {
    if (N === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      N = t && t[1] || "";
    }
    return `
` + N + e;
  }
  var te = !1;
  function de(e, t) {
    if (!e || te) return "";
    te = !0;
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
        } catch (I) {
          var r = I;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (I) {
          r = I;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (I) {
          r = I;
        }
        e();
      }
    } catch (I) {
      if (I && r && typeof I.stack == "string") {
        for (var o = I.stack.split(`
`), c = r.stack.split(`
`), m = o.length - 1, g = c.length - 1; 1 <= m && 0 <= g && o[m] !== c[g]; ) g--;
        for (; 1 <= m && 0 <= g; m--, g--) if (o[m] !== c[g]) {
          if (m !== 1 || g !== 1)
            do
              if (m--, g--, 0 > g || o[m] !== c[g]) {
                var C = `
` + o[m].replace(" at new ", " at ");
                return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
              }
            while (1 <= m && 0 <= g);
          break;
        }
      }
    } finally {
      te = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? j(e) : "";
  }
  function Te(e) {
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
        return e = de(e.type, !1), e;
      case 11:
        return e = de(e.type.render, !1), e;
      case 1:
        return e = de(e.type, !0), e;
      default:
        return "";
    }
  }
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case F:
        return "Portal";
      case ie:
        return "Profiler";
      case L:
        return "StrictMode";
      case X:
        return "Suspense";
      case me:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case je:
        return (e.displayName || "Context") + ".Consumer";
      case J:
        return (e._context.displayName || "Context") + ".Provider";
      case Ae:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case H:
        return t = e.displayName || null, t !== null ? t : G(e.type) || "Memo";
      case ce:
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
        return t === L ? "StrictMode" : "Mode";
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
  function W(e) {
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
  function Y(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ve(e) {
    var t = Y(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function Me(e) {
    e._valueTracker || (e._valueTracker = ve(e));
  }
  function le(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Y(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ke(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ne(e, t) {
    var n = t.checked;
    return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Le(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = W(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function _e(e, t) {
    t = t.checked, t != null && U(e, "checked", t, !1);
  }
  function Fe(e, t) {
    _e(e, t);
    var n = W(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? He(e, t.type, n) : t.hasOwnProperty("defaultValue") && He(e, t.type, W(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function nt(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function He(e, t, n) {
    (t !== "number" || ke(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Xe = Array.isArray;
  function st(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + W(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ze(e, t) {
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
    e._wrapperState = { initialValue: W(n) };
  }
  function ze(e, t) {
    var n = W(t.value), r = W(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function et(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function pt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function It(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? pt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
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
  function D(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var oe = {
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
  }, ge = ["Webkit", "ms", "Moz", "O"];
  Object.keys(oe).forEach(function(e) {
    ge.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), oe[t] = oe[e];
    });
  });
  function re(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || oe.hasOwnProperty(e) && oe[e] ? ("" + t).trim() : t + "px";
  }
  function $e(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = re(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var xe = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function he(e, t) {
    if (t) {
      if (xe[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
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
  var Be = null;
  function ut(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var dn = null, Ct = null, Ft = null;
  function Mn(e) {
    if (e = $s(e)) {
      if (typeof dn != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = $r(t), dn(e.stateNode, e.type, t));
    }
  }
  function hn(e) {
    Ct ? Ft ? Ft.push(e) : Ft = [e] : Ct = e;
  }
  function _n() {
    if (Ct) {
      var e = Ct, t = Ft;
      if (Ft = Ct = null, Mn(e), t) for (e = 0; e < t.length; e++) Mn(t[e]);
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
      mi = !1, (Ct !== null || Ft !== null) && (ms(), _n());
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
  var Ve = !1;
  if (f) try {
    var tt = {};
    Object.defineProperty(tt, "passive", { get: function() {
      Ve = !0;
    } }), window.addEventListener("test", tt, tt), window.removeEventListener("test", tt, tt);
  } catch {
    Ve = !1;
  }
  function rt(e, t, n, r, o, c, m, g, C) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (Z) {
      this.onError(Z);
    }
  }
  var vt = !1, Ut = null, fn = !1, Bn = null, ps = { onError: function(e) {
    vt = !0, Ut = e;
  } };
  function vs(e, t, n, r, o, c, m, g, C) {
    vt = !1, Ut = null, rt.apply(ps, arguments);
  }
  function hr(e, t, n, r, o, c, m, g, C) {
    if (vs.apply(this, arguments), vt) {
      if (vt) {
        var I = Ut;
        vt = !1, Ut = null;
      } else throw Error(l(198));
      fn || (fn = !0, Bn = I);
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
  var Tt = i.unstable_scheduleCallback, vr = i.unstable_cancelCallback, kr = i.unstable_shouldYield, za = i.unstable_requestPaint, ct = i.unstable_now, Kn = i.unstable_getCurrentPriorityLevel, jn = i.unstable_ImmediatePriority, R = i.unstable_UserBlockingPriority, pe = i.unstable_NormalPriority, Ge = i.unstable_LowPriority, Xt = i.unstable_IdlePriority, dt = null, Dt = null;
  function ks(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function") try {
      Dt.onCommitFiberRoot(dt, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Mt = Math.clz32 ? Math.clz32 : Af, bf = Math.log, Pf = Math.LN2;
  function Af(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bf(e) / Pf | 0) | 0;
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
  function Lf(e, t) {
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
  function Rf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
      var m = 31 - Mt(c), g = 1 << m, C = o[m];
      C === -1 ? ((g & n) === 0 || (g & r) !== 0) && (o[m] = Lf(g, t)) : C <= t && (e.expiredLanes |= g), c &= ~g;
    }
  }
  function Ba(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function cu() {
    var e = yr;
    return yr <<= 1, (yr & 4194240) === 0 && (yr = 64), e;
  }
  function Va(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function gs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Mt(t), e[t] = n;
  }
  function Of(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Mt(n), c = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~c;
    }
  }
  function Ka(e, t) {
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
  var hu, Ua, fu, mu, pu, Ha = !1, jr = [], Un = null, Hn = null, Gn = null, xs = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Wn = [], $f = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
    return e === null || e.nativeEvent !== c ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: c, targetContainers: [o] }, t !== null && (t = $s(t), t !== null && Ua(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function If(e, t, n, r, o) {
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
      var n = Wa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Be = r, n.target.dispatchEvent(r), Be = null;
      } else return t = $s(n), t !== null && Ua(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function yu(e, t, n) {
    Sr(e) && n.delete(t);
  }
  function Ff() {
    Ha = !1, Un !== null && Sr(Un) && (Un = null), Hn !== null && Sr(Hn) && (Hn = null), Gn !== null && Sr(Gn) && (Gn = null), xs.forEach(yu), js.forEach(yu);
  }
  function ws(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ha || (Ha = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Ff)));
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
  function Df(e, t, n, r) {
    var o = qe, c = Oi.transition;
    Oi.transition = null;
    try {
      qe = 1, Ga(e, t, n, r);
    } finally {
      qe = o, Oi.transition = c;
    }
  }
  function zf(e, t, n, r) {
    var o = qe, c = Oi.transition;
    Oi.transition = null;
    try {
      qe = 4, Ga(e, t, n, r);
    } finally {
      qe = o, Oi.transition = c;
    }
  }
  function Ga(e, t, n, r) {
    if (wr) {
      var o = Wa(e, t, n, r);
      if (o === null) cl(e, t, r, Er, n), vu(e, r);
      else if (If(o, e, t, n, r)) r.stopPropagation();
      else if (vu(e, r), t & 4 && -1 < $f.indexOf(e)) {
        for (; o !== null; ) {
          var c = $s(o);
          if (c !== null && hu(c), c = Wa(e, t, n, r), c === null && cl(e, t, r, Er, n), c === o) break;
          o = c;
        }
        o !== null && r.stopPropagation();
      } else cl(e, t, r, null, n);
    }
  }
  var Er = null;
  function Wa(e, t, n, r) {
    if (Er = null, e = ut(r), e = vi(e), e !== null) if (t = bn(e), t === null) e = null;
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
          case R:
            return 4;
          case pe:
          case Ge:
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
  var Yn = null, Ya = null, Nr = null;
  function xu() {
    if (Nr) return Nr;
    var e, t = Ya, n = t.length, r, o = "value" in Yn ? Yn.value : Yn.textContent, c = o.length;
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
    return ne(t.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, Qa = Zt($i), Ns = ne({}, $i, { view: 0, detail: 0 }), Bf = Zt(Ns), Ja, Xa, Cs, Mr = ne({}, Ns, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Cs && (Cs && e.type === "mousemove" ? (Ja = e.screenX - Cs.screenX, Xa = e.screenY - Cs.screenY) : Xa = Ja = 0, Cs = e), Ja);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Xa;
  } }), Su = Zt(Mr), Vf = ne({}, Mr, { dataTransfer: 0 }), Kf = Zt(Vf), Uf = ne({}, Ns, { relatedTarget: 0 }), Za = Zt(Uf), Hf = ne({}, $i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gf = Zt(Hf), Wf = ne({}, $i, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Yf = Zt(Wf), Qf = ne({}, $i, { data: 0 }), wu = Zt(Qf), Jf = {
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
  }, Xf = {
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
  }, Zf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zf[e]) ? !!t[e] : !1;
  }
  function qa() {
    return qf;
  }
  var em = ne({}, Ns, { key: function(e) {
    if (e.key) {
      var t = Jf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Cr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qa, charCode: function(e) {
    return e.type === "keypress" ? Cr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Cr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), tm = Zt(em), nm = ne({}, Mr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Eu = Zt(nm), im = ne({}, Ns, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qa }), sm = Zt(im), rm = ne({}, $i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), am = Zt(rm), lm = ne({}, Mr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), om = Zt(lm), um = [9, 13, 27, 32], el = f && "CompositionEvent" in window, Ts = null;
  f && "documentMode" in document && (Ts = document.documentMode);
  var cm = f && "TextEvent" in window && !Ts, Nu = f && (!el || Ts && 8 < Ts && 11 >= Ts), Cu = " ", Tu = !1;
  function Mu(e, t) {
    switch (e) {
      case "keyup":
        return um.indexOf(t.keyCode) !== -1;
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
  function dm(e, t) {
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
  function hm(e, t) {
    if (Ii) return e === "compositionend" || !el && Mu(e, t) ? (e = xu(), Nr = Ya = Yn = null, Ii = !1, e) : null;
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
  var fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function bu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fm[e.type] : t === "textarea";
  }
  function Pu(e, t, n, r) {
    hn(r), t = Lr(t, "onChange"), 0 < t.length && (n = new Qa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Ms = null, _s = null;
  function mm(e) {
    Qu(e, 0);
  }
  function _r(e) {
    var t = Vi(e);
    if (le(t)) return e;
  }
  function pm(e, t) {
    if (e === "change") return t;
  }
  var Au = !1;
  if (f) {
    var tl;
    if (f) {
      var nl = "oninput" in document;
      if (!nl) {
        var Lu = document.createElement("div");
        Lu.setAttribute("oninput", "return;"), nl = typeof Lu.oninput == "function";
      }
      tl = nl;
    } else tl = !1;
    Au = tl && (!document.documentMode || 9 < document.documentMode);
  }
  function Ru() {
    Ms && (Ms.detachEvent("onpropertychange", Ou), _s = Ms = null);
  }
  function Ou(e) {
    if (e.propertyName === "value" && _r(_s)) {
      var t = [];
      Pu(t, _s, e, ut(e)), Li(mm, t);
    }
  }
  function vm(e, t, n) {
    e === "focusin" ? (Ru(), Ms = t, _s = n, Ms.attachEvent("onpropertychange", Ou)) : e === "focusout" && Ru();
  }
  function km(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return _r(_s);
  }
  function ym(e, t) {
    if (e === "click") return _r(t);
  }
  function gm(e, t) {
    if (e === "input" || e === "change") return _r(t);
  }
  function xm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mn = typeof Object.is == "function" ? Object.is : xm;
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
    for (var e = window, t = ke(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ke(e.document);
    }
    return t;
  }
  function il(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function jm(e) {
    var t = Du(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Fu(n.ownerDocument.documentElement, n)) {
      if (r !== null && il(n)) {
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
  var Sm = f && "documentMode" in document && 11 >= document.documentMode, Fi = null, sl = null, Ps = null, rl = !1;
  function zu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    rl || Fi == null || Fi !== ke(r) || (r = Fi, "selectionStart" in r && il(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ps && bs(Ps, r) || (Ps = r, r = Lr(sl, "onSelect"), 0 < r.length && (t = new Qa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Fi)));
  }
  function br(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Di = { animationend: br("Animation", "AnimationEnd"), animationiteration: br("Animation", "AnimationIteration"), animationstart: br("Animation", "AnimationStart"), transitionend: br("Transition", "TransitionEnd") }, al = {}, Bu = {};
  f && (Bu = document.createElement("div").style, "AnimationEvent" in window || (delete Di.animationend.animation, delete Di.animationiteration.animation, delete Di.animationstart.animation), "TransitionEvent" in window || delete Di.transitionend.transition);
  function Pr(e) {
    if (al[e]) return al[e];
    if (!Di[e]) return e;
    var t = Di[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Bu) return al[e] = t[n];
    return e;
  }
  var Vu = Pr("animationend"), Ku = Pr("animationiteration"), Uu = Pr("animationstart"), Hu = Pr("transitionend"), Gu = /* @__PURE__ */ new Map(), Wu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Qn(e, t) {
    Gu.set(e, t), h(t, [e]);
  }
  for (var ll = 0; ll < Wu.length; ll++) {
    var ol = Wu[ll], wm = ol.toLowerCase(), Em = ol[0].toUpperCase() + ol.slice(1);
    Qn(wm, "on" + Em);
  }
  Qn(Vu, "onAnimationEnd"), Qn(Ku, "onAnimationIteration"), Qn(Uu, "onAnimationStart"), Qn("dblclick", "onDoubleClick"), Qn("focusin", "onFocus"), Qn("focusout", "onBlur"), Qn(Hu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var As = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Nm = new Set("cancel close invalid load scroll toggle".split(" ").concat(As));
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
          var g = r[m], C = g.instance, I = g.currentTarget;
          if (g = g.listener, C !== c && o.isPropagationStopped()) break e;
          Yu(o, g, I), c = C;
        }
        else for (m = 0; m < r.length; m++) {
          if (g = r[m], C = g.instance, I = g.currentTarget, g = g.listener, C !== c && o.isPropagationStopped()) break e;
          Yu(o, g, I), c = C;
        }
      }
    }
    if (fn) throw e = Bn, fn = !1, Bn = null, e;
  }
  function at(e, t) {
    var n = t[vl];
    n === void 0 && (n = t[vl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ju(t, e, 2, !1), n.add(r));
  }
  function ul(e, t, n) {
    var r = 0;
    t && (r |= 4), Ju(n, e, r, t);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function Ls(e) {
    if (!e[Ar]) {
      e[Ar] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (Nm.has(n) || ul(n, !1, e), ul(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ar] || (t[Ar] = !0, ul("selectionchange", !1, t));
    }
  }
  function Ju(e, t, n, r) {
    switch (gu(t)) {
      case 1:
        var o = Df;
        break;
      case 4:
        o = zf;
        break;
      default:
        o = Ga;
    }
    n = o.bind(null, t, n, e), o = void 0, !Ve || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function cl(e, t, n, r, o) {
    var c = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var m = r.tag;
      if (m === 3 || m === 4) {
        var g = r.stateNode.containerInfo;
        if (g === o || g.nodeType === 8 && g.parentNode === o) break;
        if (m === 4) for (m = r.return; m !== null; ) {
          var C = m.tag;
          if ((C === 3 || C === 4) && (C = m.stateNode.containerInfo, C === o || C.nodeType === 8 && C.parentNode === o)) return;
          m = m.return;
        }
        for (; g !== null; ) {
          if (m = vi(g), m === null) return;
          if (C = m.tag, C === 5 || C === 6) {
            r = c = m;
            continue e;
          }
          g = g.parentNode;
        }
      }
      r = r.return;
    }
    Li(function() {
      var I = c, Z = ut(n), ee = [];
      e: {
        var Q = Gu.get(e);
        if (Q !== void 0) {
          var fe = Qa, Se = e;
          switch (e) {
            case "keypress":
              if (Cr(n) === 0) break e;
            case "keydown":
            case "keyup":
              fe = tm;
              break;
            case "focusin":
              Se = "focus", fe = Za;
              break;
            case "focusout":
              Se = "blur", fe = Za;
              break;
            case "beforeblur":
            case "afterblur":
              fe = Za;
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
              fe = Su;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Kf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = sm;
              break;
            case Vu:
            case Ku:
            case Uu:
              fe = Gf;
              break;
            case Hu:
              fe = am;
              break;
            case "scroll":
              fe = Bf;
              break;
            case "wheel":
              fe = om;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = Yf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = Eu;
          }
          var Ee = (t & 4) !== 0, kt = !Ee && e === "scroll", A = Ee ? Q !== null ? Q + "Capture" : null : Q;
          Ee = [];
          for (var M = I, O; M !== null; ) {
            O = M;
            var se = O.stateNode;
            if (O.tag === 5 && se !== null && (O = se, A !== null && (se = pi(M, A), se != null && Ee.push(Rs(M, se, O)))), kt) break;
            M = M.return;
          }
          0 < Ee.length && (Q = new fe(Q, Se, null, n, Z), ee.push({ event: Q, listeners: Ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", fe = e === "mouseout" || e === "pointerout", Q && n !== Be && (Se = n.relatedTarget || n.fromElement) && (vi(Se) || Se[Pn])) break e;
          if ((fe || Q) && (Q = Z.window === Z ? Z : (Q = Z.ownerDocument) ? Q.defaultView || Q.parentWindow : window, fe ? (Se = n.relatedTarget || n.toElement, fe = I, Se = Se ? vi(Se) : null, Se !== null && (kt = bn(Se), Se !== kt || Se.tag !== 5 && Se.tag !== 6) && (Se = null)) : (fe = null, Se = I), fe !== Se)) {
            if (Ee = Su, se = "onMouseLeave", A = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (Ee = Eu, se = "onPointerLeave", A = "onPointerEnter", M = "pointer"), kt = fe == null ? Q : Vi(fe), O = Se == null ? Q : Vi(Se), Q = new Ee(se, M + "leave", fe, n, Z), Q.target = kt, Q.relatedTarget = O, se = null, vi(Z) === I && (Ee = new Ee(A, M + "enter", Se, n, Z), Ee.target = O, Ee.relatedTarget = kt, se = Ee), kt = se, fe && Se) t: {
              for (Ee = fe, A = Se, M = 0, O = Ee; O; O = zi(O)) M++;
              for (O = 0, se = A; se; se = zi(se)) O++;
              for (; 0 < M - O; ) Ee = zi(Ee), M--;
              for (; 0 < O - M; ) A = zi(A), O--;
              for (; M--; ) {
                if (Ee === A || A !== null && Ee === A.alternate) break t;
                Ee = zi(Ee), A = zi(A);
              }
              Ee = null;
            }
            else Ee = null;
            fe !== null && Xu(ee, Q, fe, Ee, !1), Se !== null && kt !== null && Xu(ee, kt, Se, Ee, !0);
          }
        }
        e: {
          if (Q = I ? Vi(I) : window, fe = Q.nodeName && Q.nodeName.toLowerCase(), fe === "select" || fe === "input" && Q.type === "file") var Ce = pm;
          else if (bu(Q)) if (Au) Ce = gm;
          else {
            Ce = km;
            var be = vm;
          }
          else (fe = Q.nodeName) && fe.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (Ce = ym);
          if (Ce && (Ce = Ce(e, I))) {
            Pu(ee, Ce, n, Z);
            break e;
          }
          be && be(e, Q, I), e === "focusout" && (be = Q._wrapperState) && be.controlled && Q.type === "number" && He(Q, "number", Q.value);
        }
        switch (be = I ? Vi(I) : window, e) {
          case "focusin":
            (bu(be) || be.contentEditable === "true") && (Fi = be, sl = I, Ps = null);
            break;
          case "focusout":
            Ps = sl = Fi = null;
            break;
          case "mousedown":
            rl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rl = !1, zu(ee, n, Z);
            break;
          case "selectionchange":
            if (Sm) break;
          case "keydown":
          case "keyup":
            zu(ee, n, Z);
        }
        var Pe;
        if (el) e: {
          switch (e) {
            case "compositionstart":
              var Oe = "onCompositionStart";
              break e;
            case "compositionend":
              Oe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Oe = "onCompositionUpdate";
              break e;
          }
          Oe = void 0;
        }
        else Ii ? Mu(e, n) && (Oe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Oe = "onCompositionStart");
        Oe && (Nu && n.locale !== "ko" && (Ii || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && Ii && (Pe = xu()) : (Yn = Z, Ya = "value" in Yn ? Yn.value : Yn.textContent, Ii = !0)), be = Lr(I, Oe), 0 < be.length && (Oe = new wu(Oe, e, null, n, Z), ee.push({ event: Oe, listeners: be }), Pe ? Oe.data = Pe : (Pe = _u(n), Pe !== null && (Oe.data = Pe)))), (Pe = cm ? dm(e, n) : hm(e, n)) && (I = Lr(I, "onBeforeInput"), 0 < I.length && (Z = new wu("onBeforeInput", "beforeinput", null, n, Z), ee.push({ event: Z, listeners: I }), Z.data = Pe));
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
      var g = n, C = g.alternate, I = g.stateNode;
      if (C !== null && C === r) break;
      g.tag === 5 && I !== null && (g = I, o ? (C = pi(n, c), C != null && m.unshift(Rs(n, C, g))) : o || (C = pi(n, c), C != null && m.push(Rs(n, C, g)))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Cm = /\r\n?/g, Tm = /\u0000|\uFFFD/g;
  function Zu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Cm, `
`).replace(Tm, "");
  }
  function Rr(e, t, n) {
    if (t = Zu(t), Zu(e) !== t && n) throw Error(l(425));
  }
  function Or() {
  }
  var dl = null, hl = null;
  function fl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ml = typeof setTimeout == "function" ? setTimeout : void 0, Mm = typeof clearTimeout == "function" ? clearTimeout : void 0, qu = typeof Promise == "function" ? Promise : void 0, _m = typeof queueMicrotask == "function" ? queueMicrotask : typeof qu < "u" ? function(e) {
    return qu.resolve(null).then(e).catch(bm);
  } : ml;
  function bm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function pl(e, t) {
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
  var Bi = Math.random().toString(36).slice(2), Sn = "__reactFiber$" + Bi, Os = "__reactProps$" + Bi, Pn = "__reactContainer$" + Bi, vl = "__reactEvents$" + Bi, Pm = "__reactListeners$" + Bi, Am = "__reactHandles$" + Bi;
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
  var kl = [], Ki = -1;
  function Xn(e) {
    return { current: e };
  }
  function lt(e) {
    0 > Ki || (e.current = kl[Ki], kl[Ki] = null, Ki--);
  }
  function it(e, t) {
    Ki++, kl[Ki] = e.current, e.current = t;
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
    it(Lt, t), it(Ht, n);
  }
  function nc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(l(108, K(e) || "Unknown", o));
    return ne({}, n, r);
  }
  function Fr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zn, ki = Lt.current, it(Lt, e), it(Ht, Ht.current), !0;
  }
  function ic(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = nc(e, t, ki), r.__reactInternalMemoizedMergedChildContext = e, lt(Ht), lt(Lt), it(Lt, e)) : lt(Ht), it(Ht, n);
  }
  var An = null, Dr = !1, yl = !1;
  function sc(e) {
    An === null ? An = [e] : An.push(e);
  }
  function Lm(e) {
    Dr = !0, sc(e);
  }
  function qn() {
    if (!yl && An !== null) {
      yl = !0;
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
        qe = t, yl = !1;
      }
    }
    return null;
  }
  var Hi = [], Gi = 0, zr = null, Br = 0, rn = [], an = 0, yi = null, Ln = 1, Rn = "";
  function gi(e, t) {
    Hi[Gi++] = Br, Hi[Gi++] = zr, zr = e, Br = t;
  }
  function rc(e, t, n) {
    rn[an++] = Ln, rn[an++] = Rn, rn[an++] = yi, yi = e;
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
  function gl(e) {
    e.return !== null && (gi(e, 1), rc(e, 1, 0));
  }
  function xl(e) {
    for (; e === zr; ) zr = Hi[--Gi], Hi[Gi] = null, Br = Hi[--Gi], Hi[Gi] = null;
    for (; e === yi; ) yi = rn[--an], rn[an] = null, Rn = rn[--an], rn[an] = null, Ln = rn[--an], rn[an] = null;
  }
  var qt = null, en = null, ot = !1, pn = null;
  function ac(e, t) {
    var n = cn(5, null, null, 0);
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
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = yi !== null ? { id: Ln, overflow: Rn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = cn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qt = e, en = null, !0) : !1;
      default:
        return !1;
    }
  }
  function jl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Sl(e) {
    if (ot) {
      var t = en;
      if (t) {
        var n = t;
        if (!lc(e, t)) {
          if (jl(e)) throw Error(l(418));
          t = Jn(n.nextSibling);
          var r = qt;
          t && lc(e, t) ? ac(r, n) : (e.flags = e.flags & -4097 | 2, ot = !1, qt = e);
        }
      } else {
        if (jl(e)) throw Error(l(418));
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
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fl(e.type, e.memoizedProps)), t && (t = en)) {
      if (jl(e)) throw uc(), Error(l(418));
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
  function wl(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  var Rm = V.ReactCurrentBatchConfig;
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
        var O = A.deletions;
        O === null ? (A.deletions = [M], A.flags |= 16) : O.push(M);
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
    function c(A, M, O) {
      return A.index = O, e ? (O = A.alternate, O !== null ? (O = O.index, O < M ? (A.flags |= 2, M) : O) : (A.flags |= 2, M)) : (A.flags |= 1048576, M);
    }
    function m(A) {
      return e && A.alternate === null && (A.flags |= 2), A;
    }
    function g(A, M, O, se) {
      return M === null || M.tag !== 6 ? (M = po(O, A.mode, se), M.return = A, M) : (M = o(M, O), M.return = A, M);
    }
    function C(A, M, O, se) {
      var Ce = O.type;
      return Ce === $ ? Z(A, M, O.props.children, se, O.key) : M !== null && (M.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === ce && cc(Ce) === M.type) ? (se = o(M, O.props), se.ref = Is(A, M, O), se.return = A, se) : (se = fa(O.type, O.key, O.props, null, A.mode, se), se.ref = Is(A, M, O), se.return = A, se);
    }
    function I(A, M, O, se) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== O.containerInfo || M.stateNode.implementation !== O.implementation ? (M = vo(O, A.mode, se), M.return = A, M) : (M = o(M, O.children || []), M.return = A, M);
    }
    function Z(A, M, O, se, Ce) {
      return M === null || M.tag !== 7 ? (M = Ti(O, A.mode, se, Ce), M.return = A, M) : (M = o(M, O), M.return = A, M);
    }
    function ee(A, M, O) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return M = po("" + M, A.mode, O), M.return = A, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case B:
            return O = fa(M.type, M.key, M.props, null, A.mode, O), O.ref = Is(A, null, M), O.return = A, O;
          case F:
            return M = vo(M, A.mode, O), M.return = A, M;
          case ce:
            var se = M._init;
            return ee(A, se(M._payload), O);
        }
        if (Xe(M) || ae(M)) return M = Ti(M, A.mode, O, null), M.return = A, M;
        Kr(A, M);
      }
      return null;
    }
    function Q(A, M, O, se) {
      var Ce = M !== null ? M.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number") return Ce !== null ? null : g(A, M, "" + O, se);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case B:
            return O.key === Ce ? C(A, M, O, se) : null;
          case F:
            return O.key === Ce ? I(A, M, O, se) : null;
          case ce:
            return Ce = O._init, Q(
              A,
              M,
              Ce(O._payload),
              se
            );
        }
        if (Xe(O) || ae(O)) return Ce !== null ? null : Z(A, M, O, se, null);
        Kr(A, O);
      }
      return null;
    }
    function fe(A, M, O, se, Ce) {
      if (typeof se == "string" && se !== "" || typeof se == "number") return A = A.get(O) || null, g(M, A, "" + se, Ce);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case B:
            return A = A.get(se.key === null ? O : se.key) || null, C(M, A, se, Ce);
          case F:
            return A = A.get(se.key === null ? O : se.key) || null, I(M, A, se, Ce);
          case ce:
            var be = se._init;
            return fe(A, M, O, be(se._payload), Ce);
        }
        if (Xe(se) || ae(se)) return A = A.get(O) || null, Z(M, A, se, Ce, null);
        Kr(M, se);
      }
      return null;
    }
    function Se(A, M, O, se) {
      for (var Ce = null, be = null, Pe = M, Oe = M = 0, Nt = null; Pe !== null && Oe < O.length; Oe++) {
        Pe.index > Oe ? (Nt = Pe, Pe = null) : Nt = Pe.sibling;
        var Qe = Q(A, Pe, O[Oe], se);
        if (Qe === null) {
          Pe === null && (Pe = Nt);
          break;
        }
        e && Pe && Qe.alternate === null && t(A, Pe), M = c(Qe, M, Oe), be === null ? Ce = Qe : be.sibling = Qe, be = Qe, Pe = Nt;
      }
      if (Oe === O.length) return n(A, Pe), ot && gi(A, Oe), Ce;
      if (Pe === null) {
        for (; Oe < O.length; Oe++) Pe = ee(A, O[Oe], se), Pe !== null && (M = c(Pe, M, Oe), be === null ? Ce = Pe : be.sibling = Pe, be = Pe);
        return ot && gi(A, Oe), Ce;
      }
      for (Pe = r(A, Pe); Oe < O.length; Oe++) Nt = fe(Pe, A, Oe, O[Oe], se), Nt !== null && (e && Nt.alternate !== null && Pe.delete(Nt.key === null ? Oe : Nt.key), M = c(Nt, M, Oe), be === null ? Ce = Nt : be.sibling = Nt, be = Nt);
      return e && Pe.forEach(function(oi) {
        return t(A, oi);
      }), ot && gi(A, Oe), Ce;
    }
    function Ee(A, M, O, se) {
      var Ce = ae(O);
      if (typeof Ce != "function") throw Error(l(150));
      if (O = Ce.call(O), O == null) throw Error(l(151));
      for (var be = Ce = null, Pe = M, Oe = M = 0, Nt = null, Qe = O.next(); Pe !== null && !Qe.done; Oe++, Qe = O.next()) {
        Pe.index > Oe ? (Nt = Pe, Pe = null) : Nt = Pe.sibling;
        var oi = Q(A, Pe, Qe.value, se);
        if (oi === null) {
          Pe === null && (Pe = Nt);
          break;
        }
        e && Pe && oi.alternate === null && t(A, Pe), M = c(oi, M, Oe), be === null ? Ce = oi : be.sibling = oi, be = oi, Pe = Nt;
      }
      if (Qe.done) return n(
        A,
        Pe
      ), ot && gi(A, Oe), Ce;
      if (Pe === null) {
        for (; !Qe.done; Oe++, Qe = O.next()) Qe = ee(A, Qe.value, se), Qe !== null && (M = c(Qe, M, Oe), be === null ? Ce = Qe : be.sibling = Qe, be = Qe);
        return ot && gi(A, Oe), Ce;
      }
      for (Pe = r(A, Pe); !Qe.done; Oe++, Qe = O.next()) Qe = fe(Pe, A, Oe, Qe.value, se), Qe !== null && (e && Qe.alternate !== null && Pe.delete(Qe.key === null ? Oe : Qe.key), M = c(Qe, M, Oe), be === null ? Ce = Qe : be.sibling = Qe, be = Qe);
      return e && Pe.forEach(function(fp) {
        return t(A, fp);
      }), ot && gi(A, Oe), Ce;
    }
    function kt(A, M, O, se) {
      if (typeof O == "object" && O !== null && O.type === $ && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case B:
            e: {
              for (var Ce = O.key, be = M; be !== null; ) {
                if (be.key === Ce) {
                  if (Ce = O.type, Ce === $) {
                    if (be.tag === 7) {
                      n(A, be.sibling), M = o(be, O.props.children), M.return = A, A = M;
                      break e;
                    }
                  } else if (be.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === ce && cc(Ce) === be.type) {
                    n(A, be.sibling), M = o(be, O.props), M.ref = Is(A, be, O), M.return = A, A = M;
                    break e;
                  }
                  n(A, be);
                  break;
                } else t(A, be);
                be = be.sibling;
              }
              O.type === $ ? (M = Ti(O.props.children, A.mode, se, O.key), M.return = A, A = M) : (se = fa(O.type, O.key, O.props, null, A.mode, se), se.ref = Is(A, M, O), se.return = A, A = se);
            }
            return m(A);
          case F:
            e: {
              for (be = O.key; M !== null; ) {
                if (M.key === be) if (M.tag === 4 && M.stateNode.containerInfo === O.containerInfo && M.stateNode.implementation === O.implementation) {
                  n(A, M.sibling), M = o(M, O.children || []), M.return = A, A = M;
                  break e;
                } else {
                  n(A, M);
                  break;
                }
                else t(A, M);
                M = M.sibling;
              }
              M = vo(O, A.mode, se), M.return = A, A = M;
            }
            return m(A);
          case ce:
            return be = O._init, kt(A, M, be(O._payload), se);
        }
        if (Xe(O)) return Se(A, M, O, se);
        if (ae(O)) return Ee(A, M, O, se);
        Kr(A, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, M !== null && M.tag === 6 ? (n(A, M.sibling), M = o(M, O), M.return = A, A = M) : (n(A, M), M = po(O, A.mode, se), M.return = A, A = M), m(A)) : n(A, M);
    }
    return kt;
  }
  var Yi = dc(!0), hc = dc(!1), Ur = Xn(null), Hr = null, Qi = null, El = null;
  function Nl() {
    El = Qi = Hr = null;
  }
  function Cl(e) {
    var t = Ur.current;
    lt(Ur), e._currentValue = t;
  }
  function Tl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ji(e, t) {
    Hr = e, El = Qi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Wt = !0), e.firstContext = null);
  }
  function ln(e) {
    var t = e._currentValue;
    if (El !== e) if (e = { context: e, memoizedValue: t, next: null }, Qi === null) {
      if (Hr === null) throw Error(l(308));
      Qi = e, Hr.dependencies = { lanes: 0, firstContext: e };
    } else Qi = Qi.next = e;
    return t;
  }
  var xi = null;
  function Ml(e) {
    xi === null ? xi = [e] : xi.push(e);
  }
  function fc(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Ml(t)) : (n.next = o.next, o.next = n), t.interleaved = n, On(e, r);
  }
  function On(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var ei = !1;
  function _l(e) {
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
    if (r = r.shared, (We & 2) !== 0) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, On(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, Ml(r)) : (t.next = o.next, o.next = t), r.interleaved = t, On(e, n);
  }
  function Gr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ka(e, n);
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
      var C = g, I = C.next;
      C.next = null, m === null ? c = I : m.next = I, m = C;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, g = Z.lastBaseUpdate, g !== m && (g === null ? Z.firstBaseUpdate = I : g.next = I, Z.lastBaseUpdate = C));
    }
    if (c !== null) {
      var ee = o.baseState;
      m = 0, Z = I = C = null, g = c;
      do {
        var Q = g.lane, fe = g.eventTime;
        if ((r & Q) === Q) {
          Z !== null && (Z = Z.next = {
            eventTime: fe,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var Se = e, Ee = g;
            switch (Q = t, fe = n, Ee.tag) {
              case 1:
                if (Se = Ee.payload, typeof Se == "function") {
                  ee = Se.call(fe, ee, Q);
                  break e;
                }
                ee = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = Ee.payload, Q = typeof Se == "function" ? Se.call(fe, ee, Q) : Se, Q == null) break e;
                ee = ne({}, ee, Q);
                break e;
              case 2:
                ei = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, Q = o.effects, Q === null ? o.effects = [g] : Q.push(g));
        } else fe = { eventTime: fe, lane: Q, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, Z === null ? (I = Z = fe, C = ee) : Z = Z.next = fe, m |= Q;
        if (g = g.next, g === null) {
          if (g = o.shared.pending, g === null) break;
          Q = g, g = Q.next, Q.next = null, o.lastBaseUpdate = Q, o.shared.pending = null;
        }
      } while (!0);
      if (Z === null && (C = ee), o.baseState = C, o.firstBaseUpdate = I, o.lastBaseUpdate = Z, t = o.shared.interleaved, t !== null) {
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
  function bl(e, t) {
    switch (it(zs, t), it(Ds, e), it(wn, Fs), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : It(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = It(t, e);
    }
    lt(wn), it(wn, t);
  }
  function Xi() {
    lt(wn), lt(Ds), lt(zs);
  }
  function kc(e) {
    ji(zs.current);
    var t = ji(wn.current), n = It(t, e.type);
    t !== n && (it(Ds, e), it(wn, n));
  }
  function Pl(e) {
    Ds.current === e && (lt(wn), lt(Ds));
  }
  var ht = Xn(0);
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
  var Al = [];
  function Ll() {
    for (var e = 0; e < Al.length; e++) Al[e]._workInProgressVersionPrimary = null;
    Al.length = 0;
  }
  var Qr = V.ReactCurrentDispatcher, Rl = V.ReactCurrentBatchConfig, Si = 0, ft = null, xt = null, wt = null, Jr = !1, Bs = !1, Vs = 0, Om = 0;
  function Rt() {
    throw Error(l(321));
  }
  function Ol(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!mn(e[n], t[n])) return !1;
    return !0;
  }
  function $l(e, t, n, r, o, c) {
    if (Si = c, ft = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qr.current = e === null || e.memoizedState === null ? Dm : zm, e = n(r, o), Bs) {
      c = 0;
      do {
        if (Bs = !1, Vs = 0, 25 <= c) throw Error(l(301));
        c += 1, wt = xt = null, t.updateQueue = null, Qr.current = Bm, e = n(r, o);
      } while (Bs);
    }
    if (Qr.current = qr, t = xt !== null && xt.next !== null, Si = 0, wt = xt = ft = null, Jr = !1, t) throw Error(l(300));
    return e;
  }
  function Il() {
    var e = Vs !== 0;
    return Vs = 0, e;
  }
  function En() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return wt === null ? ft.memoizedState = wt = e : wt = wt.next = e, wt;
  }
  function on() {
    if (xt === null) {
      var e = ft.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xt.next;
    var t = wt === null ? ft.memoizedState : wt.next;
    if (t !== null) wt = t, xt = e;
    else {
      if (e === null) throw Error(l(310));
      xt = e, e = { memoizedState: xt.memoizedState, baseState: xt.baseState, baseQueue: xt.baseQueue, queue: xt.queue, next: null }, wt === null ? ft.memoizedState = wt = e : wt = wt.next = e;
    }
    return wt;
  }
  function Ks(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Fl(e) {
    var t = on(), n = t.queue;
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
      var g = m = null, C = null, I = c;
      do {
        var Z = I.lane;
        if ((Si & Z) === Z) C !== null && (C = C.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), r = I.hasEagerState ? I.eagerState : e(r, I.action);
        else {
          var ee = {
            lane: Z,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          C === null ? (g = C = ee, m = r) : C = C.next = ee, ft.lanes |= Z, wi |= Z;
        }
        I = I.next;
      } while (I !== null && I !== c);
      C === null ? m = r : C.next = g, mn(r, t.memoizedState) || (Wt = !0), t.memoizedState = r, t.baseState = m, t.baseQueue = C, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        c = o.lane, ft.lanes |= c, wi |= c, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Dl(e) {
    var t = on(), n = t.queue;
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
    var n = ft, r = on(), o = t(), c = !mn(r.memoizedState, o);
    if (c && (r.memoizedState = o, Wt = !0), r = r.queue, zl(Sc.bind(null, n, r, e), [e]), r.getSnapshot !== t || c || wt !== null && wt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Us(9, jc.bind(null, n, r, o, t), void 0, null), Et === null) throw Error(l(349));
      (Si & 30) !== 0 || xc(n, t, o);
    }
    return o;
  }
  function xc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ft.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ft.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ks, lastRenderedState: e }, t.queue = e, e = e.dispatch = Fm.bind(null, ft, e), [t.memoizedState, e];
  }
  function Us(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ft.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ft.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Cc() {
    return on().memoizedState;
  }
  function Xr(e, t, n, r) {
    var o = En();
    ft.flags |= e, o.memoizedState = Us(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Zr(e, t, n, r) {
    var o = on();
    r = r === void 0 ? null : r;
    var c = void 0;
    if (xt !== null) {
      var m = xt.memoizedState;
      if (c = m.destroy, r !== null && Ol(r, m.deps)) {
        o.memoizedState = Us(t, n, c, r);
        return;
      }
    }
    ft.flags |= e, o.memoizedState = Us(1 | t, n, c, r);
  }
  function Tc(e, t) {
    return Xr(8390656, 8, e, t);
  }
  function zl(e, t) {
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
  function Bl() {
  }
  function Ac(e, t) {
    var n = on();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ol(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Lc(e, t) {
    var n = on();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ol(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Rc(e, t, n) {
    return (Si & 21) === 0 ? (e.baseState && (e.baseState = !1, Wt = !0), e.memoizedState = n) : (mn(n, t) || (n = cu(), ft.lanes |= n, wi |= n, e.baseState = !0), t);
  }
  function $m(e, t) {
    var n = qe;
    qe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Rl.transition;
    Rl.transition = {};
    try {
      e(!1), t();
    } finally {
      qe = n, Rl.transition = r;
    }
  }
  function Oc() {
    return on().memoizedState;
  }
  function Im(e, t, n) {
    var r = ri(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $c(e)) Ic(t, n);
    else if (n = fc(e, t, n, r), n !== null) {
      var o = Bt();
      gn(n, e, r, o), Fc(n, t, r);
    }
  }
  function Fm(e, t, n) {
    var r = ri(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if ($c(e)) Ic(t, o);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
        var m = t.lastRenderedState, g = c(m, n);
        if (o.hasEagerState = !0, o.eagerState = g, mn(g, m)) {
          var C = t.interleaved;
          C === null ? (o.next = o, Ml(t)) : (o.next = C.next, C.next = o), t.interleaved = o;
          return;
        }
      } catch {
      }
      n = fc(e, t, o, r), n !== null && (o = Bt(), gn(n, e, r, o), Fc(n, t, r));
    }
  }
  function $c(e) {
    var t = e.alternate;
    return e === ft || t !== null && t === ft;
  }
  function Ic(e, t) {
    Bs = Jr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Fc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ka(e, n);
    }
  }
  var qr = { readContext: ln, useCallback: Rt, useContext: Rt, useEffect: Rt, useImperativeHandle: Rt, useInsertionEffect: Rt, useLayoutEffect: Rt, useMemo: Rt, useReducer: Rt, useRef: Rt, useState: Rt, useDebugValue: Rt, useDeferredValue: Rt, useTransition: Rt, useMutableSource: Rt, useSyncExternalStore: Rt, useId: Rt, unstable_isNewReconciler: !1 }, Dm = { readContext: ln, useCallback: function(e, t) {
    return En().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ln, useEffect: Tc, useImperativeHandle: function(e, t, n) {
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Im.bind(null, ft, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = En();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Nc, useDebugValue: Bl, useDeferredValue: function(e) {
    return En().memoizedState = e;
  }, useTransition: function() {
    var e = Nc(!1), t = e[0];
    return e = $m.bind(null, e[1]), En().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ft, o = En();
    if (ot) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), Et === null) throw Error(l(349));
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
    var e = En(), t = Et.identifierPrefix;
    if (ot) {
      var n = Rn, r = Ln;
      n = (r & ~(1 << 32 - Mt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Vs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Om++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, zm = {
    readContext: ln,
    useCallback: Ac,
    useContext: ln,
    useEffect: zl,
    useImperativeHandle: Pc,
    useInsertionEffect: Mc,
    useLayoutEffect: _c,
    useMemo: Lc,
    useReducer: Fl,
    useRef: Cc,
    useState: function() {
      return Fl(Ks);
    },
    useDebugValue: Bl,
    useDeferredValue: function(e) {
      var t = on();
      return Rc(t, xt.memoizedState, e);
    },
    useTransition: function() {
      var e = Fl(Ks)[0], t = on().memoizedState;
      return [e, t];
    },
    useMutableSource: yc,
    useSyncExternalStore: gc,
    useId: Oc,
    unstable_isNewReconciler: !1
  }, Bm = { readContext: ln, useCallback: Ac, useContext: ln, useEffect: zl, useImperativeHandle: Pc, useInsertionEffect: Mc, useLayoutEffect: _c, useMemo: Lc, useReducer: Dl, useRef: Cc, useState: function() {
    return Dl(Ks);
  }, useDebugValue: Bl, useDeferredValue: function(e) {
    var t = on();
    return xt === null ? t.memoizedState = e : Rc(t, xt.memoizedState, e);
  }, useTransition: function() {
    var e = Dl(Ks)[0], t = on().memoizedState;
    return [e, t];
  }, useMutableSource: yc, useSyncExternalStore: gc, useId: Oc, unstable_isNewReconciler: !1 };
  function vn(e, t) {
    if (e && e.defaultProps) {
      t = ne({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Vl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ea = { isMounted: function(e) {
    return (e = e._reactInternals) ? bn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Bt(), o = ri(e), c = $n(r, o);
    c.payload = t, n != null && (c.callback = n), t = ti(e, c, o), t !== null && (gn(t, e, o, r), Gr(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Bt(), o = ri(e), c = $n(r, o);
    c.tag = 1, c.payload = t, n != null && (c.callback = n), t = ti(e, c, o), t !== null && (gn(t, e, o, r), Gr(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Bt(), r = ri(e), o = $n(n, r);
    o.tag = 2, t != null && (o.callback = t), t = ti(e, o, r), t !== null && (gn(t, e, r, n), Gr(t, e, r));
  } };
  function Dc(e, t, n, r, o, c, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, m) : t.prototype && t.prototype.isPureReactComponent ? !bs(n, r) || !bs(o, c) : !0;
  }
  function zc(e, t, n) {
    var r = !1, o = Zn, c = t.contextType;
    return typeof c == "object" && c !== null ? c = ln(c) : (o = Gt(t) ? ki : Lt.current, r = t.contextTypes, c = (r = r != null) ? Ui(e, o) : Zn), t = new t(n, c), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ea, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = c), t;
  }
  function Bc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ea.enqueueReplaceState(t, t.state, null);
  }
  function Kl(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, _l(e);
    var c = t.contextType;
    typeof c == "object" && c !== null ? o.context = ln(c) : (c = Gt(t) ? ki : Lt.current, o.context = Ui(e, c)), o.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (Vl(e, t, c, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ea.enqueueReplaceState(o, o.state, null), Wr(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Zi(e, t) {
    try {
      var n = "", r = t;
      do
        n += Te(r), r = r.return;
      while (r);
      var o = n;
    } catch (c) {
      o = `
Error generating stack: ` + c.message + `
` + c.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Ul(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Hl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Vm = typeof WeakMap == "function" ? WeakMap : Map;
  function Vc(e, t, n) {
    n = $n(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      la || (la = !0, ao = r), Hl(e, t);
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
        Hl(e, t);
      };
    }
    var c = e.stateNode;
    return c !== null && typeof c.componentDidCatch == "function" && (n.callback = function() {
      Hl(e, t), typeof r != "function" && (ii === null ? ii = /* @__PURE__ */ new Set([this]) : ii.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), n;
  }
  function Uc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Vm();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = np.bind(null, e, t, n), t.then(e, e));
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
  var Km = V.ReactCurrentOwner, Wt = !1;
  function zt(e, t, n, r) {
    t.child = e === null ? hc(t, null, n, r) : Yi(t, e.child, n, r);
  }
  function Wc(e, t, n, r, o) {
    n = n.render;
    var c = t.ref;
    return Ji(t, o), r = $l(e, t, n, r, c, o), n = Il(), e !== null && !Wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, In(e, t, o)) : (ot && n && gl(t), t.flags |= 1, zt(e, t, r, o), t.child);
  }
  function Yc(e, t, n, r, o) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !mo(c) && c.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = c, Qc(e, t, c, r, o)) : (e = fa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
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
    return Gl(e, t, n, r, o);
  }
  function Jc(e, t, n) {
    var r = t.pendingProps, o = r.children, c = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, it(es, tn), tn |= n;
    else {
      if ((n & 1073741824) === 0) return e = c !== null ? c.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, it(es, tn), tn |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = c !== null ? c.baseLanes : n, it(es, tn), tn |= r;
    }
    else c !== null ? (r = c.baseLanes | n, t.memoizedState = null) : r = n, it(es, tn), tn |= r;
    return zt(e, t, o, n), t.child;
  }
  function Xc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Gl(e, t, n, r, o) {
    var c = Gt(n) ? ki : Lt.current;
    return c = Ui(t, c), Ji(t, o), n = $l(e, t, n, r, c, o), r = Il(), e !== null && !Wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, In(e, t, o)) : (ot && r && gl(t), t.flags |= 1, zt(e, t, n, o), t.child);
  }
  function Zc(e, t, n, r, o) {
    if (Gt(n)) {
      var c = !0;
      Fr(t);
    } else c = !1;
    if (Ji(t, o), t.stateNode === null) na(e, t), zc(t, n, r), Kl(t, n, r, o), r = !0;
    else if (e === null) {
      var m = t.stateNode, g = t.memoizedProps;
      m.props = g;
      var C = m.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = ln(I) : (I = Gt(n) ? ki : Lt.current, I = Ui(t, I));
      var Z = n.getDerivedStateFromProps, ee = typeof Z == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      ee || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (g !== r || C !== I) && Bc(t, m, r, I), ei = !1;
      var Q = t.memoizedState;
      m.state = Q, Wr(t, r, m, o), C = t.memoizedState, g !== r || Q !== C || Ht.current || ei ? (typeof Z == "function" && (Vl(t, n, Z, r), C = t.memoizedState), (g = ei || Dc(t, n, g, r, Q, C, I)) ? (ee || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = C), m.props = r, m.state = C, m.context = I, r = g) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      m = t.stateNode, mc(e, t), g = t.memoizedProps, I = t.type === t.elementType ? g : vn(t.type, g), m.props = I, ee = t.pendingProps, Q = m.context, C = n.contextType, typeof C == "object" && C !== null ? C = ln(C) : (C = Gt(n) ? ki : Lt.current, C = Ui(t, C));
      var fe = n.getDerivedStateFromProps;
      (Z = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (g !== ee || Q !== C) && Bc(t, m, r, C), ei = !1, Q = t.memoizedState, m.state = Q, Wr(t, r, m, o);
      var Se = t.memoizedState;
      g !== ee || Q !== Se || Ht.current || ei ? (typeof fe == "function" && (Vl(t, n, fe, r), Se = t.memoizedState), (I = ei || Dc(t, n, I, r, Q, Se, C) || !1) ? (Z || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(r, Se, C), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(r, Se, C)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || g === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = Se), m.props = r, m.state = Se, m.context = C, r = I) : (typeof m.componentDidUpdate != "function" || g === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Wl(e, t, n, r, c, o);
  }
  function Wl(e, t, n, r, o, c) {
    Xc(e, t);
    var m = (t.flags & 128) !== 0;
    if (!r && !m) return o && ic(t, n, !1), In(e, t, c);
    r = t.stateNode, Km.current = t;
    var g = m && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && m ? (t.child = Yi(t, e.child, null, c), t.child = Yi(t, null, g, c)) : zt(e, t, g, c), t.memoizedState = r.state, o && ic(t, n, !0), t.child;
  }
  function qc(e) {
    var t = e.stateNode;
    t.pendingContext ? tc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tc(e, t.context, !1), bl(e, t.containerInfo);
  }
  function ed(e, t, n, r, o) {
    return Wi(), wl(o), t.flags |= 256, zt(e, t, n, r), t.child;
  }
  var Yl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ql(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function td(e, t, n) {
    var r = t.pendingProps, o = ht.current, c = !1, m = (t.flags & 128) !== 0, g;
    if ((g = m) || (g = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), g ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), it(ht, o & 1), e === null)
      return Sl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = r.children, e = r.fallback, c ? (r = t.mode, c = t.child, m = { mode: "hidden", children: m }, (r & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = m) : c = ma(m, r, 0, null), e = Ti(e, r, n, null), c.return = t, e.return = t, c.sibling = e, t.child = c, t.child.memoizedState = Ql(n), t.memoizedState = Yl, e) : Jl(t, m));
    if (o = e.memoizedState, o !== null && (g = o.dehydrated, g !== null)) return Um(e, t, m, r, g, o, n);
    if (c) {
      c = r.fallback, m = t.mode, o = e.child, g = o.sibling;
      var C = { mode: "hidden", children: r.children };
      return (m & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = C, t.deletions = null) : (r = li(o, C), r.subtreeFlags = o.subtreeFlags & 14680064), g !== null ? c = li(g, c) : (c = Ti(c, m, n, null), c.flags |= 2), c.return = t, r.return = t, r.sibling = c, t.child = r, r = c, c = t.child, m = e.child.memoizedState, m = m === null ? Ql(n) : { baseLanes: m.baseLanes | n, cachePool: null, transitions: m.transitions }, c.memoizedState = m, c.childLanes = e.childLanes & ~n, t.memoizedState = Yl, r;
    }
    return c = e.child, e = c.sibling, r = li(c, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Jl(e, t) {
    return t = ma({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ta(e, t, n, r) {
    return r !== null && wl(r), Yi(t, e.child, null, n), e = Jl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Um(e, t, n, r, o, c, m) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ul(Error(l(422))), ta(e, t, m, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (c = r.fallback, o = t.mode, r = ma({ mode: "visible", children: r.children }, o, 0, null), c = Ti(c, o, m, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, (t.mode & 1) !== 0 && Yi(t, e.child, null, m), t.child.memoizedState = Ql(m), t.memoizedState = Yl, c);
    if ((t.mode & 1) === 0) return ta(e, t, m, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r) var g = r.dgst;
      return r = g, c = Error(l(419)), r = Ul(c, r, void 0), ta(e, t, m, r);
    }
    if (g = (m & e.childLanes) !== 0, Wt || g) {
      if (r = Et, r !== null) {
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
      return fo(), r = Ul(Error(l(421))), ta(e, t, m, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ip.bind(null, e), o._reactRetry = t, null) : (e = c.treeContext, en = Jn(o.nextSibling), qt = t, ot = !0, pn = null, e !== null && (rn[an++] = Ln, rn[an++] = Rn, rn[an++] = yi, Ln = e.id, Rn = e.overflow, yi = t), t = Jl(t, r.children), t.flags |= 4096, t);
  }
  function nd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Tl(e.return, t, n);
  }
  function Xl(e, t, n, r, o) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = r, c.tail = n, c.tailMode = o);
  }
  function id(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, c = r.tail;
    if (zt(e, t, r.children, n), r = ht.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
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
    if (it(ht, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Yr(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Xl(t, !1, o, n, c);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Yr(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Xl(t, !0, n, null, c);
        break;
      case "together":
        Xl(t, !1, null, null, void 0);
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
  function Hm(e, t, n) {
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
        bl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        it(Ur, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (it(ht, ht.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? td(e, t, n) : (it(ht, ht.current & 1), e = In(e, t, n), e !== null ? e.sibling : null);
        it(ht, ht.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return id(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), it(ht, ht.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Jc(e, t, n);
    }
    return In(e, t, n);
  }
  var sd, Zl, rd, ad;
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
  }, Zl = function() {
  }, rd = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, ji(wn.current);
      var c = null;
      switch (n) {
        case "input":
          o = Ne(e, o), r = Ne(e, r), c = [];
          break;
        case "select":
          o = ne({}, o, { value: void 0 }), r = ne({}, r, { value: void 0 }), c = [];
          break;
        case "textarea":
          o = yt(e, o), r = yt(e, r), c = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Or);
      }
      he(n, r);
      var m;
      n = null;
      for (I in o) if (!r.hasOwnProperty(I) && o.hasOwnProperty(I) && o[I] != null) if (I === "style") {
        var g = o[I];
        for (m in g) g.hasOwnProperty(m) && (n || (n = {}), n[m] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (d.hasOwnProperty(I) ? c || (c = []) : (c = c || []).push(I, null));
      for (I in r) {
        var C = r[I];
        if (g = o?.[I], r.hasOwnProperty(I) && C !== g && (C != null || g != null)) if (I === "style") if (g) {
          for (m in g) !g.hasOwnProperty(m) || C && C.hasOwnProperty(m) || (n || (n = {}), n[m] = "");
          for (m in C) C.hasOwnProperty(m) && g[m] !== C[m] && (n || (n = {}), n[m] = C[m]);
        } else n || (c || (c = []), c.push(
          I,
          n
        )), n = C;
        else I === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, g = g ? g.__html : void 0, C != null && g !== C && (c = c || []).push(I, C)) : I === "children" ? typeof C != "string" && typeof C != "number" || (c = c || []).push(I, "" + C) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (d.hasOwnProperty(I) ? (C != null && I === "onScroll" && at("scroll", e), c || g === C || (c = [])) : (c = c || []).push(I, C));
      }
      n && (c = c || []).push("style", n);
      var I = c;
      (t.updateQueue = I) && (t.flags |= 4);
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
  function Gm(e, t, n) {
    var r = t.pendingProps;
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
        return Ot(t), null;
      case 1:
        return Gt(t.type) && Ir(), Ot(t), null;
      case 3:
        return r = t.stateNode, Xi(), lt(Ht), lt(Lt), Ll(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, pn !== null && (uo(pn), pn = null))), Zl(e, t), Ot(t), null;
      case 5:
        Pl(t);
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
                Le(r, c), at("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!c.multiple }, at("invalid", r);
                break;
              case "textarea":
                Ze(r, c), at("invalid", r);
            }
            he(n, c), o = null;
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
                Me(r), nt(r, c, !0);
                break;
              case "textarea":
                Me(r), et(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (r.onclick = Or);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            m = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = pt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = m.createElement(n, { is: r.is }) : (e = m.createElement(n), n === "select" && (m = e, r.multiple ? m.multiple = !0 : r.size && (m.size = r.size))) : e = m.createElementNS(e, n), e[Sn] = t, e[Os] = r, sd(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = Re(n, r), n) {
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
                  Le(e, r), o = Ne(e, r), at("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, o = ne({}, r, { value: void 0 }), at("invalid", e);
                  break;
                case "textarea":
                  Ze(e, r), o = yt(e, r), at("invalid", e);
                  break;
                default:
                  o = r;
              }
              he(n, o), g = o;
              for (c in g) if (g.hasOwnProperty(c)) {
                var C = g[c];
                c === "style" ? $e(e, C) : c === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Kt(e, C)) : c === "children" ? typeof C == "string" ? (n !== "textarea" || C !== "") && D(e, C) : typeof C == "number" && D(e, "" + C) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (d.hasOwnProperty(c) ? C != null && c === "onScroll" && at("scroll", e) : C != null && U(e, c, C, m));
              }
              switch (n) {
                case "input":
                  Me(e), nt(e, r, !1);
                  break;
                case "textarea":
                  Me(e), et(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + W(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, c = r.value, c != null ? st(e, !!r.multiple, c, !1) : r.defaultValue != null && st(
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
        if (lt(ht), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ot && en !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) uc(), Wi(), t.flags |= 98560, c = !1;
          else if (c = Vr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(l(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(l(317));
              c[Sn] = t;
            } else Wi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ot(t), c = !1;
          } else pn !== null && (uo(pn), pn = null), c = !0;
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ht.current & 1) !== 0 ? jt === 0 && (jt = 3) : fo())), t.updateQueue !== null && (t.flags |= 4), Ot(t), null);
      case 4:
        return Xi(), Zl(e, t), e === null && Ls(t.stateNode.containerInfo), Ot(t), null;
      case 10:
        return Cl(t.type._context), Ot(t), null;
      case 17:
        return Gt(t.type) && Ir(), Ot(t), null;
      case 19:
        if (lt(ht), c = t.memoizedState, c === null) return Ot(t), null;
        if (r = (t.flags & 128) !== 0, m = c.rendering, m === null) if (r) Hs(c, !1);
        else {
          if (jt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (m = Yr(e), m !== null) {
              for (t.flags |= 128, Hs(c, !1), r = m.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) c = n, e = r, c.flags &= 14680066, m = c.alternate, m === null ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = m.childLanes, c.lanes = m.lanes, c.child = m.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = m.memoizedProps, c.memoizedState = m.memoizedState, c.updateQueue = m.updateQueue, c.type = m.type, e = m.dependencies, c.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return it(ht, ht.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          c.tail !== null && ct() > ts && (t.flags |= 128, r = !0, Hs(c, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Yr(m), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hs(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !ot) return Ot(t), null;
          } else 2 * ct() - c.renderingStartTime > ts && n !== 1073741824 && (t.flags |= 128, r = !0, Hs(c, !1), t.lanes = 4194304);
          c.isBackwards ? (m.sibling = t.child, t.child = m) : (n = c.last, n !== null ? n.sibling = m : t.child = m, c.last = m);
        }
        return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = ct(), t.sibling = null, n = ht.current, it(ht, r ? n & 1 | 2 : n & 1), t) : (Ot(t), null);
      case 22:
      case 23:
        return ho(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (tn & 1073741824) !== 0 && (Ot(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ot(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Wm(e, t) {
    switch (xl(t), t.tag) {
      case 1:
        return Gt(t.type) && Ir(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Xi(), lt(Ht), lt(Lt), Ll(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Pl(t), null;
      case 13:
        if (lt(ht), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          Wi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return lt(ht), null;
      case 4:
        return Xi(), null;
      case 10:
        return Cl(t.type._context), null;
      case 22:
      case 23:
        return ho(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ia = !1, $t = !1, Ym = typeof WeakSet == "function" ? WeakSet : Set, ye = null;
  function qi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      mt(e, t, r);
    }
    else n.current = null;
  }
  function ql(e, t, n) {
    try {
      n();
    } catch (r) {
      mt(e, t, r);
    }
  }
  var ld = !1;
  function Qm(e, t) {
    if (dl = wr, e = Du(), il(e)) {
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
          var m = 0, g = -1, C = -1, I = 0, Z = 0, ee = e, Q = null;
          t: for (; ; ) {
            for (var fe; ee !== n || o !== 0 && ee.nodeType !== 3 || (g = m + o), ee !== c || r !== 0 && ee.nodeType !== 3 || (C = m + r), ee.nodeType === 3 && (m += ee.nodeValue.length), (fe = ee.firstChild) !== null; )
              Q = ee, ee = fe;
            for (; ; ) {
              if (ee === e) break t;
              if (Q === n && ++I === o && (g = m), Q === c && ++Z === r && (C = m), (fe = ee.nextSibling) !== null) break;
              ee = Q, Q = ee.parentNode;
            }
            ee = fe;
          }
          n = g === -1 || C === -1 ? null : { start: g, end: C };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (hl = { focusedElem: e, selectionRange: n }, wr = !1, ye = t; ye !== null; ) if (t = ye, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ye = e;
    else for (; ye !== null; ) {
      t = ye;
      try {
        var Se = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Se !== null) {
              var Ee = Se.memoizedProps, kt = Se.memoizedState, A = t.stateNode, M = A.getSnapshotBeforeUpdate(t.elementType === t.type ? Ee : vn(t.type, Ee), kt);
              A.__reactInternalSnapshotBeforeUpdate = M;
            }
            break;
          case 3:
            var O = t.stateNode.containerInfo;
            O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch (se) {
        mt(t, t.return, se);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ye = e;
        break;
      }
      ye = t.return;
    }
    return Se = ld, ld = !1, Se;
  }
  function Gs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var c = o.destroy;
          o.destroy = void 0, c !== void 0 && ql(t, n, c);
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
  function eo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function od(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, od(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Sn], delete t[Os], delete t[vl], delete t[Pm], delete t[Am])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function to(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Or));
    else if (r !== 4 && (e = e.child, e !== null)) for (to(e, t, n), e = e.sibling; e !== null; ) to(e, t, n), e = e.sibling;
  }
  function no(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (no(e, t, n), e = e.sibling; e !== null; ) no(e, t, n), e = e.sibling;
  }
  var _t = null, kn = !1;
  function ni(e, t, n) {
    for (n = n.child; n !== null; ) dd(e, t, n), n = n.sibling;
  }
  function dd(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
      Dt.onCommitFiberUnmount(dt, n);
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
        _t !== null && (kn ? (e = _t, n = n.stateNode, e.nodeType === 8 ? pl(e.parentNode, n) : e.nodeType === 1 && pl(e, n), Es(e)) : pl(_t, n.stateNode));
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
            c = c.tag, m !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && ql(n, t, m), o = o.next;
          } while (o !== r);
        }
        ni(e, t, n);
        break;
      case 1:
        if (!$t && (qi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (g) {
          mt(n, t, g);
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
      n === null && (n = e.stateNode = new Ym()), t.forEach(function(r) {
        var o = sp.bind(null, e, r);
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
        var C = o.alternate;
        C !== null && (C.return = null), o.return = null;
      } catch (I) {
        mt(o, t, I);
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
          } catch (Ee) {
            mt(e, e.return, Ee);
          }
          try {
            Gs(5, e, e.return);
          } catch (Ee) {
            mt(e, e.return, Ee);
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
            D(o, "");
          } catch (Ee) {
            mt(e, e.return, Ee);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var c = e.memoizedProps, m = n !== null ? n.memoizedProps : c, g = e.type, C = e.updateQueue;
          if (e.updateQueue = null, C !== null) try {
            g === "input" && c.type === "radio" && c.name != null && _e(o, c), Re(g, m);
            var I = Re(g, c);
            for (m = 0; m < C.length; m += 2) {
              var Z = C[m], ee = C[m + 1];
              Z === "style" ? $e(o, ee) : Z === "dangerouslySetInnerHTML" ? Kt(o, ee) : Z === "children" ? D(o, ee) : U(o, Z, ee, I);
            }
            switch (g) {
              case "input":
                Fe(o, c);
                break;
              case "textarea":
                ze(o, c);
                break;
              case "select":
                var Q = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!c.multiple;
                var fe = c.value;
                fe != null ? st(o, !!c.multiple, fe, !1) : Q !== !!c.multiple && (c.defaultValue != null ? st(
                  o,
                  !!c.multiple,
                  c.defaultValue,
                  !0
                ) : st(o, !!c.multiple, c.multiple ? [] : "", !1));
            }
            o[Os] = c;
          } catch (Ee) {
            mt(e, e.return, Ee);
          }
        }
        break;
      case 6:
        if (yn(t, e), Nn(e), r & 4) {
          if (e.stateNode === null) throw Error(l(162));
          o = e.stateNode, c = e.memoizedProps;
          try {
            o.nodeValue = c;
          } catch (Ee) {
            mt(e, e.return, Ee);
          }
        }
        break;
      case 3:
        if (yn(t, e), Nn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Es(t.containerInfo);
        } catch (Ee) {
          mt(e, e.return, Ee);
        }
        break;
      case 4:
        yn(t, e), Nn(e);
        break;
      case 13:
        yn(t, e), Nn(e), o = e.child, o.flags & 8192 && (c = o.memoizedState !== null, o.stateNode.isHidden = c, !c || o.alternate !== null && o.alternate.memoizedState !== null || (ro = ct())), r & 4 && hd(e);
        break;
      case 22:
        if (Z = n !== null && n.memoizedState !== null, e.mode & 1 ? ($t = (I = $t) || Z, yn(t, e), $t = I) : yn(t, e), Nn(e), r & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !Z && (e.mode & 1) !== 0) for (ye = e, Z = e.child; Z !== null; ) {
            for (ee = ye = Z; ye !== null; ) {
              switch (Q = ye, fe = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gs(4, Q, Q.return);
                  break;
                case 1:
                  qi(Q, Q.return);
                  var Se = Q.stateNode;
                  if (typeof Se.componentWillUnmount == "function") {
                    r = Q, n = Q.return;
                    try {
                      t = r, Se.props = t.memoizedProps, Se.state = t.memoizedState, Se.componentWillUnmount();
                    } catch (Ee) {
                      mt(r, n, Ee);
                    }
                  }
                  break;
                case 5:
                  qi(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    vd(ee);
                    continue;
                  }
              }
              fe !== null ? (fe.return = Q, ye = fe) : vd(ee);
            }
            Z = Z.sibling;
          }
          e: for (Z = null, ee = e; ; ) {
            if (ee.tag === 5) {
              if (Z === null) {
                Z = ee;
                try {
                  o = ee.stateNode, I ? (c = o.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (g = ee.stateNode, C = ee.memoizedProps.style, m = C != null && C.hasOwnProperty("display") ? C.display : null, g.style.display = re("display", m));
                } catch (Ee) {
                  mt(e, e.return, Ee);
                }
              }
            } else if (ee.tag === 6) {
              if (Z === null) try {
                ee.stateNode.nodeValue = I ? "" : ee.memoizedProps;
              } catch (Ee) {
                mt(e, e.return, Ee);
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
            r.flags & 32 && (D(o, ""), r.flags &= -33);
            var c = cd(e);
            no(e, c, o);
            break;
          case 3:
          case 4:
            var m = r.stateNode.containerInfo, g = cd(e);
            to(e, g, m);
            break;
          default:
            throw Error(l(161));
        }
      } catch (C) {
        mt(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Jm(e, t, n) {
    ye = e, md(e);
  }
  function md(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ye !== null; ) {
      var o = ye, c = o.child;
      if (o.tag === 22 && r) {
        var m = o.memoizedState !== null || ia;
        if (!m) {
          var g = o.alternate, C = g !== null && g.memoizedState !== null || $t;
          g = ia;
          var I = $t;
          if (ia = m, ($t = C) && !I) for (ye = o; ye !== null; ) m = ye, C = m.child, m.tag === 22 && m.memoizedState !== null ? kd(o) : C !== null ? (C.return = m, ye = C) : kd(o);
          for (; c !== null; ) ye = c, md(c), c = c.sibling;
          ye = o, ia = g, $t = I;
        }
        pd(e);
      } else (o.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = o, ye = c) : pd(e);
    }
  }
  function pd(e) {
    for (; ye !== null; ) {
      var t = ye;
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
                var C = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    C.autoFocus && n.focus();
                    break;
                  case "img":
                    C.src && (n.src = C.src);
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
                var I = t.alternate;
                if (I !== null) {
                  var Z = I.memoizedState;
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
          $t || t.flags & 512 && eo(t);
        } catch (Q) {
          mt(t, t.return, Q);
        }
      }
      if (t === e) {
        ye = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, ye = n;
        break;
      }
      ye = t.return;
    }
  }
  function vd(e) {
    for (; ye !== null; ) {
      var t = ye;
      if (t === e) {
        ye = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ye = n;
        break;
      }
      ye = t.return;
    }
  }
  function kd(e) {
    for (; ye !== null; ) {
      var t = ye;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              sa(4, t);
            } catch (C) {
              mt(t, n, C);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (C) {
                mt(t, o, C);
              }
            }
            var c = t.return;
            try {
              eo(t);
            } catch (C) {
              mt(t, c, C);
            }
            break;
          case 5:
            var m = t.return;
            try {
              eo(t);
            } catch (C) {
              mt(t, m, C);
            }
        }
      } catch (C) {
        mt(t, t.return, C);
      }
      if (t === e) {
        ye = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        g.return = t.return, ye = g;
        break;
      }
      ye = t.return;
    }
  }
  var Xm = Math.ceil, ra = V.ReactCurrentDispatcher, io = V.ReactCurrentOwner, un = V.ReactCurrentBatchConfig, We = 0, Et = null, gt = null, bt = 0, tn = 0, es = Xn(0), jt = 0, Ws = null, wi = 0, aa = 0, so = 0, Ys = null, Yt = null, ro = 0, ts = 1 / 0, Fn = null, la = !1, ao = null, ii = null, oa = !1, si = null, ua = 0, Qs = 0, lo = null, ca = -1, da = 0;
  function Bt() {
    return (We & 6) !== 0 ? ct() : ca !== -1 ? ca : ca = ct();
  }
  function ri(e) {
    return (e.mode & 1) === 0 ? 1 : (We & 2) !== 0 && bt !== 0 ? bt & -bt : Rm.transition !== null ? (da === 0 && (da = cu()), da) : (e = qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : gu(e.type)), e);
  }
  function gn(e, t, n, r) {
    if (50 < Qs) throw Qs = 0, lo = null, Error(l(185));
    gs(e, n, r), ((We & 2) === 0 || e !== Et) && (e === Et && ((We & 2) === 0 && (aa |= n), jt === 4 && ai(e, bt)), Qt(e, r), n === 1 && We === 0 && (t.mode & 1) === 0 && (ts = ct() + 500, Dr && qn()));
  }
  function Qt(e, t) {
    var n = e.callbackNode;
    Rf(e, t);
    var r = xr(e, e === Et ? bt : 0);
    if (r === 0) n !== null && vr(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && vr(n), t === 1) e.tag === 0 ? Lm(gd.bind(null, e)) : sc(gd.bind(null, e)), _m(function() {
        (We & 6) === 0 && qn();
      }), n = null;
      else {
        switch (du(r)) {
          case 1:
            n = jn;
            break;
          case 4:
            n = R;
            break;
          case 16:
            n = pe;
            break;
          case 536870912:
            n = Xt;
            break;
          default:
            n = pe;
        }
        n = Td(n, yd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function yd(e, t) {
    if (ca = -1, da = 0, (We & 6) !== 0) throw Error(l(327));
    var n = e.callbackNode;
    if (ns() && e.callbackNode !== n) return null;
    var r = xr(e, e === Et ? bt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ha(e, r);
    else {
      t = r;
      var o = We;
      We |= 2;
      var c = jd();
      (Et !== e || bt !== t) && (Fn = null, ts = ct() + 500, Ni(e, t));
      do
        try {
          ep();
          break;
        } catch (g) {
          xd(e, g);
        }
      while (!0);
      Nl(), ra.current = c, We = o, gt !== null ? t = 0 : (Et = null, bt = 0, t = jt);
    }
    if (t !== 0) {
      if (t === 2 && (o = Ba(e), o !== 0 && (r = o, t = oo(e, o))), t === 1) throw n = Ws, Ni(e, 0), ai(e, r), Qt(e, ct()), n;
      if (t === 6) ai(e, r);
      else {
        if (o = e.current.alternate, (r & 30) === 0 && !Zm(o) && (t = ha(e, r), t === 2 && (c = Ba(e), c !== 0 && (r = c, t = oo(e, c))), t === 1)) throw n = Ws, Ni(e, 0), ai(e, r), Qt(e, ct()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Ci(e, Yt, Fn);
            break;
          case 3:
            if (ai(e, r), (r & 130023424) === r && (t = ro + 500 - ct(), 10 < t)) {
              if (xr(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                Bt(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = ml(Ci.bind(null, e, Yt, Fn), t);
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
            if (r = o, r = ct() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Xm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ml(Ci.bind(null, e, Yt, Fn), r);
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
    return Qt(e, ct()), e.callbackNode === n ? yd.bind(null, e) : null;
  }
  function oo(e, t) {
    var n = Ys;
    return e.current.memoizedState.isDehydrated && (Ni(e, t).flags |= 256), e = ha(e, t), e !== 2 && (t = Yt, Yt = n, t !== null && uo(t)), e;
  }
  function uo(e) {
    Yt === null ? Yt = e : Yt.push.apply(Yt, e);
  }
  function Zm(e) {
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
    for (t &= ~so, t &= ~aa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Mt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function gd(e) {
    if ((We & 6) !== 0) throw Error(l(327));
    ns();
    var t = xr(e, 0);
    if ((t & 1) === 0) return Qt(e, ct()), null;
    var n = ha(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ba(e);
      r !== 0 && (t = r, n = oo(e, r));
    }
    if (n === 1) throw n = Ws, Ni(e, 0), ai(e, t), Qt(e, ct()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ci(e, Yt, Fn), Qt(e, ct()), null;
  }
  function co(e, t) {
    var n = We;
    We |= 1;
    try {
      return e(t);
    } finally {
      We = n, We === 0 && (ts = ct() + 500, Dr && qn());
    }
  }
  function Ei(e) {
    si !== null && si.tag === 0 && (We & 6) === 0 && ns();
    var t = We;
    We |= 1;
    var n = un.transition, r = qe;
    try {
      if (un.transition = null, qe = 1, e) return e();
    } finally {
      qe = r, un.transition = n, We = t, (We & 6) === 0 && qn();
    }
  }
  function ho() {
    tn = es.current, lt(es);
  }
  function Ni(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Mm(n)), gt !== null) for (n = gt.return; n !== null; ) {
      var r = n;
      switch (xl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ir();
          break;
        case 3:
          Xi(), lt(Ht), lt(Lt), Ll();
          break;
        case 5:
          Pl(r);
          break;
        case 4:
          Xi();
          break;
        case 13:
          lt(ht);
          break;
        case 19:
          lt(ht);
          break;
        case 10:
          Cl(r.type._context);
          break;
        case 22:
        case 23:
          ho();
      }
      n = n.return;
    }
    if (Et = e, gt = e = li(e.current, null), bt = tn = t, jt = 0, Ws = null, so = aa = wi = 0, Yt = Ys = null, xi !== null) {
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
        if (Nl(), Qr.current = qr, Jr) {
          for (var r = ft.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          Jr = !1;
        }
        if (Si = 0, wt = xt = ft = null, Bs = !1, Vs = 0, io.current = null, n === null || n.return === null) {
          jt = 1, Ws = t, gt = null;
          break;
        }
        e: {
          var c = e, m = n.return, g = n, C = t;
          if (t = bt, g.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var I = C, Z = g, ee = Z.tag;
            if ((Z.mode & 1) === 0 && (ee === 0 || ee === 11 || ee === 15)) {
              var Q = Z.alternate;
              Q ? (Z.updateQueue = Q.updateQueue, Z.memoizedState = Q.memoizedState, Z.lanes = Q.lanes) : (Z.updateQueue = null, Z.memoizedState = null);
            }
            var fe = Hc(m);
            if (fe !== null) {
              fe.flags &= -257, Gc(fe, m, g, c, t), fe.mode & 1 && Uc(c, I, t), t = fe, C = I;
              var Se = t.updateQueue;
              if (Se === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(C), t.updateQueue = Ee;
              } else Se.add(C);
              break e;
            } else {
              if ((t & 1) === 0) {
                Uc(c, I, t), fo();
                break e;
              }
              C = Error(l(426));
            }
          } else if (ot && g.mode & 1) {
            var kt = Hc(m);
            if (kt !== null) {
              (kt.flags & 65536) === 0 && (kt.flags |= 256), Gc(kt, m, g, c, t), wl(Zi(C, g));
              break e;
            }
          }
          c = C = Zi(C, g), jt !== 4 && (jt = 2), Ys === null ? Ys = [c] : Ys.push(c), c = m;
          do {
            switch (c.tag) {
              case 3:
                c.flags |= 65536, t &= -t, c.lanes |= t;
                var A = Vc(c, C, t);
                pc(c, A);
                break e;
              case 1:
                g = C;
                var M = c.type, O = c.stateNode;
                if ((c.flags & 128) === 0 && (typeof M.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (ii === null || !ii.has(O)))) {
                  c.flags |= 65536, t &= -t, c.lanes |= t;
                  var se = Kc(c, g, t);
                  pc(c, se);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        wd(n);
      } catch (Ce) {
        t = Ce, gt === n && n !== null && (gt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function jd() {
    var e = ra.current;
    return ra.current = qr, e === null ? qr : e;
  }
  function fo() {
    (jt === 0 || jt === 3 || jt === 2) && (jt = 4), Et === null || (wi & 268435455) === 0 && (aa & 268435455) === 0 || ai(Et, bt);
  }
  function ha(e, t) {
    var n = We;
    We |= 2;
    var r = jd();
    (Et !== e || bt !== t) && (Fn = null, Ni(e, t));
    do
      try {
        qm();
        break;
      } catch (o) {
        xd(e, o);
      }
    while (!0);
    if (Nl(), We = n, ra.current = r, gt !== null) throw Error(l(261));
    return Et = null, bt = 0, jt;
  }
  function qm() {
    for (; gt !== null; ) Sd(gt);
  }
  function ep() {
    for (; gt !== null && !kr(); ) Sd(gt);
  }
  function Sd(e) {
    var t = Cd(e.alternate, e, tn);
    e.memoizedProps = e.pendingProps, t === null ? wd(e) : gt = t, io.current = null;
  }
  function wd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Gm(n, t, tn), n !== null) {
          gt = n;
          return;
        }
      } else {
        if (n = Wm(n, t), n !== null) {
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
    var r = qe, o = un.transition;
    try {
      un.transition = null, qe = 1, tp(e, t, n, r);
    } finally {
      un.transition = o, qe = r;
    }
    return null;
  }
  function tp(e, t, n, r) {
    do
      ns();
    while (si !== null);
    if ((We & 6) !== 0) throw Error(l(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var c = n.lanes | n.childLanes;
    if (Of(e, c), e === Et && (gt = Et = null, bt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || oa || (oa = !0, Td(pe, function() {
      return ns(), null;
    })), c = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || c) {
      c = un.transition, un.transition = null;
      var m = qe;
      qe = 1;
      var g = We;
      We |= 4, io.current = null, Qm(e, n), fd(n, e), jm(hl), wr = !!dl, hl = dl = null, e.current = n, Jm(n), za(), We = g, qe = m, un.transition = c;
    } else e.current = n;
    if (oa && (oa = !1, si = e, ua = o), c = e.pendingLanes, c === 0 && (ii = null), ks(n.stateNode), Qt(e, ct()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (la) throw la = !1, e = ao, ao = null, e;
    return (ua & 1) !== 0 && e.tag !== 0 && ns(), c = e.pendingLanes, (c & 1) !== 0 ? e === lo ? Qs++ : (Qs = 0, lo = e) : Qs = 0, qn(), null;
  }
  function ns() {
    if (si !== null) {
      var e = du(ua), t = un.transition, n = qe;
      try {
        if (un.transition = null, qe = 16 > e ? 16 : e, si === null) var r = !1;
        else {
          if (e = si, si = null, ua = 0, (We & 6) !== 0) throw Error(l(331));
          var o = We;
          for (We |= 4, ye = e.current; ye !== null; ) {
            var c = ye, m = c.child;
            if ((ye.flags & 16) !== 0) {
              var g = c.deletions;
              if (g !== null) {
                for (var C = 0; C < g.length; C++) {
                  var I = g[C];
                  for (ye = I; ye !== null; ) {
                    var Z = ye;
                    switch (Z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gs(8, Z, c);
                    }
                    var ee = Z.child;
                    if (ee !== null) ee.return = Z, ye = ee;
                    else for (; ye !== null; ) {
                      Z = ye;
                      var Q = Z.sibling, fe = Z.return;
                      if (od(Z), Z === I) {
                        ye = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = fe, ye = Q;
                        break;
                      }
                      ye = fe;
                    }
                  }
                }
                var Se = c.alternate;
                if (Se !== null) {
                  var Ee = Se.child;
                  if (Ee !== null) {
                    Se.child = null;
                    do {
                      var kt = Ee.sibling;
                      Ee.sibling = null, Ee = kt;
                    } while (Ee !== null);
                  }
                }
                ye = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && m !== null) m.return = c, ye = m;
            else e: for (; ye !== null; ) {
              if (c = ye, (c.flags & 2048) !== 0) switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  Gs(9, c, c.return);
              }
              var A = c.sibling;
              if (A !== null) {
                A.return = c.return, ye = A;
                break e;
              }
              ye = c.return;
            }
          }
          var M = e.current;
          for (ye = M; ye !== null; ) {
            m = ye;
            var O = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && O !== null) O.return = m, ye = O;
            else e: for (m = M; ye !== null; ) {
              if (g = ye, (g.flags & 2048) !== 0) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sa(9, g);
                }
              } catch (Ce) {
                mt(g, g.return, Ce);
              }
              if (g === m) {
                ye = null;
                break e;
              }
              var se = g.sibling;
              if (se !== null) {
                se.return = g.return, ye = se;
                break e;
              }
              ye = g.return;
            }
          }
          if (We = o, qn(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
            Dt.onPostCommitFiberRoot(dt, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        qe = n, un.transition = t;
      }
    }
    return !1;
  }
  function Ed(e, t, n) {
    t = Zi(n, t), t = Vc(e, t, 1), e = ti(e, t, 1), t = Bt(), e !== null && (gs(e, 1, t), Qt(e, t));
  }
  function mt(e, t, n) {
    if (e.tag === 3) Ed(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ed(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ii === null || !ii.has(r))) {
          e = Zi(n, e), e = Kc(t, e, 1), t = ti(t, e, 1), e = Bt(), t !== null && (gs(t, 1, e), Qt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function np(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Bt(), e.pingedLanes |= e.suspendedLanes & n, Et === e && (bt & n) === n && (jt === 4 || jt === 3 && (bt & 130023424) === bt && 500 > ct() - ro ? Ni(e, 0) : so |= n), Qt(e, t);
  }
  function Nd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = gr, gr <<= 1, (gr & 130023424) === 0 && (gr = 4194304)));
    var n = Bt();
    e = On(e, t), e !== null && (gs(e, t, n), Qt(e, n));
  }
  function ip(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Nd(e, n);
  }
  function sp(e, t) {
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
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Wt = !1, Hm(e, t, n);
      Wt = (e.flags & 131072) !== 0;
    }
    else Wt = !1, ot && (t.flags & 1048576) !== 0 && rc(t, Br, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        na(e, t), e = t.pendingProps;
        var o = Ui(t, Lt.current);
        Ji(t, n), o = $l(null, t, r, e, o, n);
        var c = Il();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Gt(r) ? (c = !0, Fr(t)) : c = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, _l(t), o.updater = ea, t.stateNode = o, o._reactInternals = t, Kl(t, r, e, n), t = Wl(null, t, r, !0, c, n)) : (t.tag = 0, ot && c && gl(t), zt(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (na(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = ap(r), e = vn(r, e), o) {
            case 0:
              t = Gl(null, t, r, e, n);
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
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vn(r, o), Gl(e, t, r, o, n);
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
            zt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return kc(t), e === null && Sl(t), r = t.type, o = t.pendingProps, c = e !== null ? e.memoizedProps : null, m = o.children, fl(r, o) ? m = null : c !== null && fl(r, c) && (t.flags |= 32), Xc(e, t), zt(e, t, m, n), t.child;
      case 6:
        return e === null && Sl(t), null;
      case 13:
        return td(e, t, n);
      case 4:
        return bl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Yi(t, null, r, n) : zt(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vn(r, o), Wc(e, t, r, o, n);
      case 7:
        return zt(e, t, t.pendingProps, n), t.child;
      case 8:
        return zt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return zt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, c = t.memoizedProps, m = o.value, it(Ur, r._currentValue), r._currentValue = m, c !== null) if (mn(c.value, m)) {
            if (c.children === o.children && !Ht.current) {
              t = In(e, t, n);
              break e;
            }
          } else for (c = t.child, c !== null && (c.return = t); c !== null; ) {
            var g = c.dependencies;
            if (g !== null) {
              m = c.child;
              for (var C = g.firstContext; C !== null; ) {
                if (C.context === r) {
                  if (c.tag === 1) {
                    C = $n(-1, n & -n), C.tag = 2;
                    var I = c.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var Z = I.pending;
                      Z === null ? C.next = C : (C.next = Z.next, Z.next = C), I.pending = C;
                    }
                  }
                  c.lanes |= n, C = c.alternate, C !== null && (C.lanes |= n), Tl(
                    c.return,
                    n,
                    t
                  ), g.lanes |= n;
                  break;
                }
                C = C.next;
              }
            } else if (c.tag === 10) m = c.type === t.type ? null : c.child;
            else if (c.tag === 18) {
              if (m = c.return, m === null) throw Error(l(341));
              m.lanes |= n, g = m.alternate, g !== null && (g.lanes |= n), Tl(m, n, t), m = c.sibling;
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
          zt(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, Ji(t, n), o = ln(o), r = r(o), t.flags |= 1, zt(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = vn(r, t.pendingProps), o = vn(r.type, o), Yc(e, t, r, o, n);
      case 15:
        return Qc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vn(r, o), na(e, t), t.tag = 1, Gt(r) ? (e = !0, Fr(t)) : e = !1, Ji(t, n), zc(t, r, o), Kl(t, r, o, n), Wl(null, t, r, !0, e, n);
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
  function rp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function cn(e, t, n, r) {
    return new rp(e, t, n, r);
  }
  function mo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ap(e) {
    if (typeof e == "function") return mo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ae) return 11;
      if (e === H) return 14;
    }
    return 2;
  }
  function li(e, t) {
    var n = e.alternate;
    return n === null ? (n = cn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function fa(e, t, n, r, o, c) {
    var m = 2;
    if (r = e, typeof e == "function") mo(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case $:
        return Ti(n.children, o, c, t);
      case L:
        m = 8, o |= 8;
        break;
      case ie:
        return e = cn(12, n, t, o | 2), e.elementType = ie, e.lanes = c, e;
      case X:
        return e = cn(13, n, t, o), e.elementType = X, e.lanes = c, e;
      case me:
        return e = cn(19, n, t, o), e.elementType = me, e.lanes = c, e;
      case ue:
        return ma(n, o, c, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case J:
            m = 10;
            break e;
          case je:
            m = 9;
            break e;
          case Ae:
            m = 11;
            break e;
          case H:
            m = 14;
            break e;
          case ce:
            m = 16, r = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = cn(m, n, t, o), t.elementType = e, t.type = r, t.lanes = c, t;
  }
  function Ti(e, t, n, r) {
    return e = cn(7, e, r, t), e.lanes = n, e;
  }
  function ma(e, t, n, r) {
    return e = cn(22, e, r, t), e.elementType = ue, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function po(e, t, n) {
    return e = cn(6, e, null, t), e.lanes = n, e;
  }
  function vo(e, t, n) {
    return t = cn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function lp(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Va(0), this.expirationTimes = Va(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Va(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function ko(e, t, n, r, o, c, m, g, C) {
    return e = new lp(e, t, n, g, C), t === 1 ? (t = 1, c === !0 && (t |= 8)) : t = 0, c = cn(3, null, null, t), e.current = c, c.stateNode = e, c.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _l(c), e;
  }
  function op(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: F, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
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
  function _d(e, t, n, r, o, c, m, g, C) {
    return e = ko(n, r, !0, e, o, c, m, g, C), e.context = Md(null), n = e.current, r = Bt(), o = ri(n), c = $n(r, o), c.callback = t ?? null, ti(n, c, o), e.current.lanes = o, gs(e, o, r), Qt(e, r), e;
  }
  function pa(e, t, n, r) {
    var o = t.current, c = Bt(), m = ri(o);
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
  function yo(e, t) {
    bd(e, t), (e = e.alternate) && bd(e, t);
  }
  function up() {
    return null;
  }
  var Pd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function go(e) {
    this._internalRoot = e;
  }
  ka.prototype.render = go.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    pa(e, t, null, null);
  }, ka.prototype.unmount = go.prototype.unmount = function() {
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
  function xo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ya(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ad() {
  }
  function cp(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var c = r;
        r = function() {
          var I = va(m);
          c.call(I);
        };
      }
      var m = _d(t, r, e, 0, null, !1, !1, "", Ad);
      return e._reactRootContainer = m, e[Pn] = m.current, Ls(e.nodeType === 8 ? e.parentNode : e), Ei(), m;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var I = va(C);
        g.call(I);
      };
    }
    var C = ko(e, 0, !1, null, null, !1, !1, "", Ad);
    return e._reactRootContainer = C, e[Pn] = C.current, Ls(e.nodeType === 8 ? e.parentNode : e), Ei(function() {
      pa(t, C, n, r);
    }), C;
  }
  function ga(e, t, n, r, o) {
    var c = n._reactRootContainer;
    if (c) {
      var m = c;
      if (typeof o == "function") {
        var g = o;
        o = function() {
          var C = va(m);
          g.call(C);
        };
      }
      pa(t, m, e, o);
    } else m = cp(n, t, e, o, r);
    return va(m);
  }
  hu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ys(t.pendingLanes);
          n !== 0 && (Ka(t, n | 1), Qt(t, ct()), (We & 6) === 0 && (ts = ct() + 500, qn()));
        }
        break;
      case 13:
        Ei(function() {
          var r = On(e, 1);
          if (r !== null) {
            var o = Bt();
            gn(r, e, 1, o);
          }
        }), yo(e, 1);
    }
  }, Ua = function(e) {
    if (e.tag === 13) {
      var t = On(e, 134217728);
      if (t !== null) {
        var n = Bt();
        gn(t, e, 134217728, n);
      }
      yo(e, 134217728);
    }
  }, fu = function(e) {
    if (e.tag === 13) {
      var t = ri(e), n = On(e, t);
      if (n !== null) {
        var r = Bt();
        gn(n, e, t, r);
      }
      yo(e, t);
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
  }, dn = function(e, t, n) {
    switch (t) {
      case "input":
        if (Fe(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = $r(r);
              if (!o) throw Error(l(90));
              le(r), Fe(r, o);
            }
          }
        }
        break;
      case "textarea":
        ze(e, n);
        break;
      case "select":
        t = n.value, t != null && st(e, !!n.multiple, t, !1);
    }
  }, dr = co, ms = Ei;
  var dp = { usingClientEntryPoint: !1, Events: [$s, Vi, $r, hn, _n, co] }, Js = { findFiberByHostInstance: vi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hp = { bundleType: Js.bundleType, version: Js.version, rendererPackageName: Js.rendererPackageName, rendererConfig: Js.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: V.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = mr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Js.findFiberByHostInstance || up, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xa.isDisabled && xa.supportsFiber) try {
      dt = xa.inject(hp), Dt = xa;
    } catch {
    }
  }
  return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp, Jt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xo(t)) throw Error(l(200));
    return op(e, t, null, n);
  }, Jt.createRoot = function(e, t) {
    if (!xo(e)) throw Error(l(299));
    var n = !1, r = "", o = Pd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ko(e, 1, !1, null, null, n, !1, r, o), e[Pn] = t.current, Ls(e.nodeType === 8 ? e.parentNode : e), new go(t);
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
    if (!xo(e)) throw Error(l(405));
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
  }, Jt.unstable_batchedUpdates = co, Jt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ya(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return ga(e, t, n, !1, r);
  }, Jt.version = "18.3.1-next-f1338f8080-20240426", Jt;
}
var zd;
function jp() {
  if (zd) return wo.exports;
  zd = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (i) {
        console.error(i);
      }
  }
  return s(), wo.exports = xp(), wo.exports;
}
var Bd;
function Sp() {
  if (Bd) return ja;
  Bd = 1;
  var s = jp();
  return ja.createRoot = s.createRoot, ja.hydrateRoot = s.hydrateRoot, ja;
}
var wp = Sp();
const Ep = (() => {
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
  }, T = 26, b = 72, w = 30, E = 54, z = 34, P = 11, U = (T + b) / 2, V = w + (u.length - 1) * z + 30, B = (K) => b + K * E, F = (K) => K === 0 ? U : B(K) - E / 2, $ = (K) => w + K * z;
  function L(K, W, Y) {
    const ve = i.indexOf(s[K][0]) + Number(Y.slice(-1)) - 1, Me = ve % i.length, le = l[Me] + 12 * Math.floor(ve / i.length), ke = K + W - le;
    return i[Me] + (ke < 0 ? "♭" : "♯").repeat(Math.abs(ke));
  }
  function ie(K) {
    return [...K.base, ...K.add].sort((W, Y) => W[0] - Y[0]);
  }
  function J(K, W, Y) {
    const ve = W + (Y ? 1 : 0), Me = f[ve % f.length], le = Math.min(...Me.map(([Fe]) => Fe)), ke = Math.max(...Me.map(([, Fe]) => Fe));
    let _e = (K - d % 12 + 12) % 12 - (Y ? 8 : 5) + 12 * Math.floor(ve / f.length);
    return le + _e < 0 && (_e += 12), ke + _e > h.pentatonic && (_e -= 12), {
      strings: Me.map((Fe) => Fe.map((nt) => nt + _e)),
      start: le + _e,
      end: ke + _e
    };
  }
  function je(K, W, Y) {
    const ve = Y[W], Me = (K + ve - d % 12 + 12) % 12, le = d + Me - ve, ke = u.map((Ne, Le) => {
      const _e = W + (u.length - 1 - Le) * 3;
      return [_e, _e + 1, _e + 2].map((Fe) => {
        const nt = Math.floor(Fe / Y.length), He = Y[Fe % Y.length];
        return le + He + 12 * nt - Ne;
      });
    });
    return {
      strings: ke,
      start: Math.min(...ke.map((Ne) => Ne[0])),
      end: Math.max(...ke.map((Ne) => Ne.at(-1)))
    };
  }
  function Ae(K, W) {
    const Y = [], ve = Math.ceil(-K.end / 12) * 12;
    for (let le = ve; K.start + le <= W; le += 12) {
      const ke = K.strings.map((Le) => Le.map((_e) => _e + le).filter((_e) => _e >= 0 && _e <= W)), Ne = ke.flat();
      Y.push({
        strings: ke,
        start: Math.min(...Ne),
        end: Math.max(...Ne),
        partial: K.start + le < 0 || K.end + le > W
      });
    }
    const Me = Y.filter((le) => !le.partial);
    return Me.length ? Me : Y;
  }
  function X(K) {
    return ie(K).length === p;
  }
  function me(K, W, Y) {
    const ve = X(W);
    K.querySelector('[value="3nps"]').disabled = !ve, K.value = ve ? Y ?? "3nps" : "pentatonic";
  }
  function H(K, W, Y, ve, Me) {
    const le = ie(W).map(([ke]) => ke);
    return ve.map((ke) => {
      const Ne = ke - 1, Le = Y === "3nps" ? je(K, Ne, le) : J(K, Ne, W.base === y), _e = Me === void 0 ? [Le] : Ae(Le, Me);
      return { number: ke, positions: _e };
    });
  }
  function ce(K, W) {
    const Y = K.getBoundingClientRect(), ve = K.querySelectorAll(W);
    let Me = 1 / 0;
    ve.forEach((le) => {
      const ke = le.getBoundingClientRect();
      let Ne = 0;
      ke.left < Y.left ? Ne = ke.left - Y.left - 8 : ke.right > Y.right && (Ne = ke.right - Y.right + 8), Math.abs(Ne) < Math.abs(Me) && (Me = Ne);
    }), Number.isFinite(Me) && (K.scrollLeft += Me);
  }
  function ue(K, W = !1) {
    const Y = K === "3nps" ? p : f.length;
    return Array.from({ length: Y }, (ve, Me) => {
      const le = Me + 1;
      return '<label class="box-toggle" data-box="' + le + '"><input type="checkbox" value="' + le + '"' + (W && Me === 0 ? " checked" : "") + "> Boksi " + le + "</label>";
    }).join("");
  }
  function q(K, W) {
    const Y = ie(W), ve = new Map(Y.map(([le, ke]) => [le, L(K, le, ke)])), Me = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return Y.flatMap(([le, ke]) => Me.flatMap(({ suffix: Ne, base: Le }) => {
      const _e = Le.map(([Fe]) => ve.get((le + Fe) % 12));
      return _e.every(Boolean) ? {
        root: (K + le) % 12,
        degree: Number(String(ke).replace(/\D/g, "")),
        name: _e[0] + Ne,
        notes: _e,
        base: Le,
        add: []
      } : [];
    }));
  }
  function ae(K, W) {
    const Y = K.base.map(([le]) => (K.root + le) % 12), ve = u.map((le) => {
      const ke = [];
      for (let Ne = 0; Ne <= W; Ne++) {
        const Le = (le + Ne) % 12;
        Y.includes(Le) && ke.push({ fret: Ne, pitch: Le });
      }
      return ke;
    }), Me = [];
    for (let le = 0; le <= ve.length - 3; le++)
      for (const ke of ve[le])
        for (const Ne of ve[le + 1])
          if (ke.pitch !== Ne.pitch)
            for (const Le of ve[le + 2]) {
              if (Le.pitch === ke.pitch || Le.pitch === Ne.pitch) continue;
              const _e = [ke.fret, Ne.fret, Le.fret], Fe = Math.min(..._e), nt = Math.max(..._e);
              if (nt - Fe > 3) continue;
              const He = Array(u.length).fill(null);
              He.splice(le, 3, ..._e), Me.push({ strings: He, low: Fe, high: nt });
            }
    return Me.sort((le, ke) => le.high - ke.high || le.low - ke.low);
  }
  const ne = {
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
  }, N = [
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
  function j(K, W) {
    const Y = ne[K + ":" + W];
    if (Y) return { frets: Y, barre: null };
    let ve = null;
    return N.forEach(({ string: Me, openPC: le, shapes: ke }) => {
      const Ne = ke[W];
      if (!Ne) return;
      let Le = (K - le + 12) % 12;
      if (Le + Math.min(...Ne.filter((nt) => nt !== null)) < 0 && (Le += 12), ve && ve.fret <= Le) return;
      const _e = Ne.map((nt) => nt === null ? null : Le + nt), Fe = Le > 0 && Ne.at(-1) === 0 ? { fret: Le, from: Me, to: Ne.length - 1 } : null;
      ve = { fret: Le, frets: _e, barre: Fe };
    }), ve && { frets: ve.frets, barre: ve.barre };
  }
  function te(K, { frets: W, barre: Y }, ve) {
    const _e = [...u].reverse(), Fe = W.filter((ze) => ze > 0), He = !Fe.length || Math.max(...Fe) <= 4 && (W.includes(0) || Math.min(...Fe) === 1) ? 1 : Math.min(...Fe), Xe = (ze) => 24 + ze * 14, st = (ze) => 30 + (ze - He) * 18 + 18 / 2, yt = 102;
    let Ze = '<svg class="chord-svg" viewBox="0 0 108 ' + (yt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + ve + "-ote paksusta kielestä ohueen: " + W.map((ze) => ze ?? "x").join(" ") + '">';
    for (let ze = 0; ze <= 4; ze++)
      Ze += '<line class="' + (ze === 0 && He === 1 ? "nut" : "fret") + '" x1="' + Xe(0) + '" y1="' + (30 + ze * 18) + '" x2="' + Xe(5) + '" y2="' + (30 + ze * 18) + '"/>';
    return W.forEach((ze, et) => {
      Ze += '<line class="string" x1="' + Xe(et) + '" y1="30" x2="' + Xe(et) + '" y2="' + yt + '"/>';
    }), He > 1 && (Ze += '<text class="fret-label" x="15" y="' + (st(He) + 4) + '">' + He + "</text>"), Y && (Ze += '<rect class="barre" x="' + (Xe(Y.from) - 6.5) + '" y="' + (st(Y.fret) - 6.5) + '" width="' + ((Y.to - Y.from) * 14 + 13) + '" height="13" rx="6.5"/>'), W.forEach((ze, et) => {
      if (ze === null) {
        Ze += '<text class="marker" x="' + Xe(et) + '" y="22">×</text>';
        return;
      }
      const pt = (_e[et] + ze) % 12 === K;
      if (ze === 0) {
        Ze += '<circle class="open' + (pt ? " root-open" : "") + '" cx="' + Xe(et) + '" cy="18" r="4.5"/>';
        return;
      }
      Y && ze === Y.fret && et >= Y.from && et <= Y.to && !pt || (Ze += '<circle class="' + (pt ? "root" : "tone") + '" cx="' + Xe(et) + '" cy="' + st(ze) + '" r="6.5"/>');
    }), Ze + "</svg>";
  }
  function de(K, W) {
    const Y = new URLSearchParams(location.search), ve = s.indexOf(Y.get("toonikka")), Me = Y.get("asteikko");
    return {
      rootPC: ve === -1 ? K : ve,
      scaleId: Object.hasOwn(x, Me) ? Me : W
    };
  }
  function Te(K, W, Y) {
    return K + "?" + new URLSearchParams({ toonikka: s[W], asteikko: Y });
  }
  function G(K, W, Y, {
    boxes: ve = [],
    onlyBoxNotes: Me = !1,
    automatic: le = !0,
    focusDegree: ke = "",
    grip: Ne = null,
    barre: Le = null,
    label: _e = s[K] + " " + W.name,
    notes: Fe = null,
    targets: nt = !1,
    muteFret: He = null
  } = {}) {
    const Xe = B(Y), st = Xe + 48, yt = st + 28, Ze = w - 14, ze = $(u.length - 1) + 14, et = ze - Ze, pt = le ? 680 : Math.ceil(yt * 0.64), It = ve.flatMap((xe) => xe.positions), At = {};
    W.base.forEach(([xe, he]) => At[(K + xe) % 12] = { deg: he, added: !1 }), W.add.forEach(([xe, he]) => At[(K + xe) % 12] = { deg: he, added: !0 });
    const Kt = u.map((xe, he) => !!Ne && Ne[he] === null), D = !!Ne && He !== null, oe = S.filter((xe, he) => Kt[he]).reverse(), ge = _e + ". " + Y + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (oe.length ? " Soittamatta jäävät kielet: " + oe.join(", ") + "." : "");
    let re = '<svg viewBox="0 0 ' + yt + " " + V + '" style="min-width:' + pt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (nt ? "group" : "img") + '" aria-label="' + ge + '">';
    re += '<rect x="' + T + '" y="' + Ze + '" width="' + (b - T) + '" height="' + et + '" rx="6" fill="#2a2338"/>', re += '<rect x="' + b + '" y="' + Ze + '" width="' + (Xe - b) + '" height="' + et + '" fill="#231a12"/>', re += '<rect x="' + Xe + '" y="' + Ze + '" width="' + (yt - Xe - 4) + '" height="' + et + '" rx="8" fill="#32251e"/>';
    for (let xe = 1; xe <= Y; xe++)
      re += '<line x1="' + B(xe) + '" y1="' + Ze + '" x2="' + B(xe) + '" y2="' + ze + '" stroke="#6f5b47" stroke-width="2"/>';
    re += '<rect x="' + (b - 3) + '" y="' + Ze + '" width="6" height="' + et + '" rx="2" fill="#d8cbb6"/>', re += '<rect x="' + (st - 11) + '" y="' + (Ze + 3) + '" width="22" height="' + (et - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', re += '<rect x="' + (st - 4) + '" y="' + (Ze + 7) + '" width="3" height="' + (et - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const $e = (Ze + ze) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((xe) => xe <= Y).forEach((xe) => re += '<circle cx="' + F(xe) + '" cy="' + $e + '" r="5.5" fill="#7a6550"/>');
    for (let xe = 12; xe <= Y; xe += 12)
      re += '<circle cx="' + F(xe) + '" cy="' + ($e - z) + '" r="5.5" fill="#7a6550"/>', re += '<circle cx="' + F(xe) + '" cy="' + ($e + z) + '" r="5.5" fill="#7a6550"/>';
    re += '<text x="' + U + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', re += '<text x="' + b + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', re += '<text x="' + st + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let xe = 1; xe <= Y; xe++)
      re += '<text x="' + F(xe) + '" y="' + (V - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + xe + "</text>";
    if (ve.forEach(({ number: xe, positions: he }) => {
      he.forEach((Re) => {
        const Be = Re.partial ? "box-highlight box-partial" : "box-highlight";
        re += '<g class="' + Be + '" data-box="' + xe + '" aria-hidden="true">';
        const ut = Re.strings.find((Ct) => Ct.length), dn = (F(ut[0]) + F(ut.at(-1))) / 2;
        re += '<text class="box-number" x="' + dn + '" y="12">' + xe + "</text>", Re.strings.forEach((Ct, Ft) => {
          if (!Ct.length) return;
          const Mn = F(Ct[0]) - 16, hn = F(Ct.at(-1)) - F(Ct[0]) + 32;
          re += '<rect class="box-band" x="' + Mn + '" y="' + ($(Ft) - 14) + '" width="' + hn + '" height="28" rx="14"/>';
        }), re += "</g>";
      });
    }), u.forEach((xe, he) => {
      const Re = 1 + he * 0.45, Be = $(he), ut = Kt[he] && !D;
      ut ? re += '<text class="muted-mark" x="' + U + '" y="' + (Be + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : Kt[he] && He === 0 || (re += '<line x1="' + (T + 4) + '" y1="' + Be + '" x2="' + (b - 4) + '" y2="' + Be + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), re += "<g" + (ut ? ' opacity=".35"' : "") + ">", re += '<line x1="' + b + '" y1="' + Be + '" x2="' + (st + 5) + '" y2="' + Be + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', re += '<circle cx="' + (st + 5) + '" cy="' + Be + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', re += "</g>", re += '<text x="13" y="' + (Be + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + k[he] + "</text>";
    }), Ne && Le && Le.fret >= 1 && Le.fret <= Y) {
      const xe = $(Le.from), he = $(Le.to), Re = Math.min(xe, he) - 6, Be = Math.max(xe, he) + 6;
      re += '<rect class="barre-indicator" x="' + (F(Le.fret) - 7) + '" y="' + Re + '" width="14" height="' + (Be - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return nt && (re += '<g class="fret-targets">', u.forEach((xe, he) => {
      for (let Re = 0; Re <= Y; Re++) {
        const Be = Re ? S[he] + "-kieli, " + Re + ". nauha" : "vapaa " + S[he] + "-kieli", ut = Re ? E : b - T - 6;
        re += '<rect class="fret-target" role="button" tabindex="0" data-string="' + he + '" data-fret="' + Re + '" data-midi="' + (xe + Re) + '" aria-label="' + Be + '" x="' + (F(Re) - ut / 2) + '" y="' + ($(he) - z / 2) + '" width="' + ut + '" height="' + z + '" fill="transparent"/>';
      }
    }), re += "</g>"), (Fe ?? []).forEach(({ string: xe, fret: he, label: Re, kind: Be }) => {
      re += '<g class="octave-note octave-' + Be + '">', re += '<circle cx="' + F(he) + '" cy="' + $(xe) + '" r="' + P + '"/>', re += '<text x="' + F(he) + '" y="' + ($(xe) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", re += "</g>";
    }), Ne && (re += '<g class="grip-notes">'), (Fe ? [] : u).forEach((xe, he) => {
      for (let Re = 0; Re <= Y; Re++) {
        const Be = (xe + Re) % 12;
        if (!(Be in At) || Ne && Ne[he] !== Re || Me && !It.some(({ strings: hn }) => {
          const _n = hn[he];
          return _n.length > 0 && Re >= _n[0] && Re <= _n.at(-1);
        })) continue;
        const ut = At[Be], dn = ut.deg === "1", Ct = ut.added ? "#f0a13c" : dn ? "#4b2fd6" : "#6d4aff", Ft = ut.added ? "#1a1430" : "#fff";
        ut.deg === ke && (re += '<circle class="focus-note" cx="' + F(Re) + '" cy="' + $(he) + '" r="14.5"/>');
        const Mn = Ne ? ' data-string="' + (he + 1) + '" data-fret="' + Re + '" data-degree="' + ut.deg + '"' : "";
        re += "<circle" + Mn + ' cx="' + F(Re) + '" cy="' + $(he) + '" r="' + P + '" fill="' + Ct + '" stroke="' + (dn ? "#fff" : "#1a1430") + '" stroke-width="' + (dn ? 2.5 : 1) + '"/>', re += '<text x="' + F(Re) + '" y="' + ($(he) + 3.5) + '" font-size="' + (ut.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Ft + '" text-anchor="middle">' + ut.deg + "</text>";
      }
    }), Ne && (re += "</g>"), D && Kt.forEach((xe, he) => {
      if (!xe) return;
      const Re = F(He), Be = $(he);
      re += '<g class="muted-mark grip-mute" data-string="' + (he + 1) + '" data-fret="' + He + '">', re += '<circle cx="' + Re + '" cy="' + Be + '" r="9" fill="' + (He === 0 ? "#2a2338" : "#231a12") + '"/>', re += '<text x="' + Re + '" y="' + (Be + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', re += "</g>";
    }), re += "</svg>", re;
  }
  return {
    CHROM: s,
    OPEN_PITCHES: u,
    PENT_MAJ: y,
    SCALES: x,
    noteName: L,
    scaleNotes: ie,
    scaleTriads: q,
    triadGrips: ae,
    chordGrip: j,
    renderChordDiagram: te,
    selectionFromURL: de,
    selectionHref: Te,
    renderBoard: G,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: X,
    syncBoxSystem: me,
    fingeringBoxes: H,
    boxOptions: ue,
    revealPositions: ce
  };
})();
globalThis.MusicMapFretboard = Ep;
function Co(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function Np(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function Cp(s) {
  const i = Np(s), l = Math.round(i), u = (i - l) * 100;
  return { midi: l, cents: u };
}
const Ue = globalThis.MusicMapFretboard, Ye = (s) => (s % 12 + 12) % 12, Tp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Mp = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ie = (s, i = !1, l = !1) => (i ? Mp : Tp)[Ye(s)] + (l ? Math.floor(s / 12) - 1 : ""), di = (s) => Ue.CHROM[Ye(s)], ir = (s, i, l) => Ue.noteName(Ye(s), i, l);
function _p(s, i) {
  const l = Math.floor(s / 12) - 1;
  return i[0] === "B" && Ye(s) < 2 ? l - 1 : i[0] === "C" && Ye(s) > 9 ? l + 1 : l;
}
const sn = ["ohut E", "B", "G", "D", "A", "paksu E"], iu = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Dh = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], bp = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], bi = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, Ke = (s, i) => ({ string: s, fret: i, midi: Ue.OPEN_PITCHES[s] + i });
function hs(s, i, l) {
  return [...s].sort((u, d) => u - d).flatMap((u) => Array.from({ length: Math.max(0, l - i + 1) }, (d, h) => Ke(u, i + h)));
}
const Je = (s) => `${s.string}:${s.fret}`, _i = {
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
  const l = Vd[i] ?? Vd.E, u = Ye(s - l.root);
  return l.frets.flatMap((d, h) => d === null ? [] : [Ke(h, d + u)]);
}
const Ca = {
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
}, Ia = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, ui = (s, i, l, u) => typeof s == "number" && Number.isFinite(s) ? Math.max(i, Math.min(l, s)) : u, Cn = (s, i, l) => i.includes(s) ? s : l;
function La(s) {
  const i = { ...Ca };
  i.mode = Cn(s.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], i.mode), i.strings = Array.isArray(s.strings) ? [...new Set(s.strings.filter((l) => Number.isInteger(l) && l >= 0 && l <= 5))].sort((l, u) => l - u) : i.strings, i.strings.length || (i.strings = [...Ca.strings]), i.min = Math.round(ui(s.min, 0, 24, i.min)), i.max = Math.round(ui(s.max, i.min, 24, Math.max(i.min, i.max)));
  for (const l of ["accidentals", "flats", "weak", "advance", "reference"]) typeof s[l] == "boolean" && (i[l] = s[l]);
  return i.check = Cn(s.check, ["class", "pitch"], i.check), i.input = Cn(s.input, ["mic", "board"], i.input), i.rounds = [0, 10, 20].includes(s.rounds) ? s.rounds : i.rounds, i.root = Math.round(ui(s.root, 0, 11, i.root)), i.scale = typeof s.scale == "string" && Object.hasOwn(Ue.SCALES, s.scale) ? s.scale : i.scale, i.box = Math.round(ui(s.box, 0, 5, i.box)), i.order = Cn(s.order, ["random", "up", "down"], i.order), i.chord = Cn(s.chord, ["maj", "min", "dom7"], i.chord), i.chordTone = Cn(s.chordTone, ["build", "random", "1", "3", "5", "7"], i.chordTone), i.chord !== "dom7" && i.chordTone === "7" && (i.chordTone = "build"), i.shape = Cn(s.shape, ["C", "A", "G", "E", "D"], i.shape), i.intervals = Array.isArray(s.intervals) ? [...new Set(s.intervals.filter((l) => Number.isInteger(l) && l >= 1 && l <= 12))].sort((l, u) => l - u) : i.intervals, i.intervals.length || (i.intervals = [...Ca.intervals]), i.direction = Cn(s.direction, ["up", "down", "both"], i.direction), i.hints = Cn(s.hints, ["off", "always", "fade"], i.hints), i.activity = Cn(s.activity, ["play", "degree"], i.activity), i.minRms = ui(s.minRms, 1e-3, 0.15, i.minRms), i.clarity = ui(s.clarity, 0.85, 0.99, i.clarity), i.stability = ui(s.stability, 120, 800, i.stability), i.cents = ui(s.cents, 10, 45, i.cents), i.device = typeof s.device == "string" ? s.device.slice(0, 256) : "", i;
}
function Pp(s, i) {
  const l = new URLSearchParams(s), u = { ...i };
  for (const [d, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    l.has(d) && Object.assign(u, { [h]: l.get(d) });
  for (const [d, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    l.has(d) && (u[h] = Number(l.get(d)));
  l.has("kielet") && (u.strings = l.get("kielet").split(",").map((d) => Number(d) - 1)), l.has("intervallit") && (u.intervals = l.get("intervallit").split(",").map(Number));
  for (const [d, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    l.has(d) && (u[h] = l.get(d) === "1");
  if (l.has("toonikka")) {
    const d = l.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], f = Math.max(Ue.CHROM.indexOf(h), p.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    f >= 0 && (u.root = f);
  }
  return La(u);
}
function Ap(s) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: s.mode,
    toonikka: Ue.CHROM[s.root],
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
const Pi = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, zn = (s) => s.mode === "scale" && s.order !== "random", Vh = (s) => ["note", "degree"].includes(Pi(s)) ? "class" : zn(s) ? "pitch" : s.check, Sa = (s) => Pi(s) === "mic", Kd = "musiikin-kartta:harjoittelu", Kh = 3, zo = () => ({ version: Kh, settings: { ...Ca }, stats: {}, recent: [], sessions: [] }), Uh = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, xn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function Lp(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((i) => xn(s[i])) && s.correct <= s.attempts && (s.errors === void 0 || xn(s.errors)) && (s.ema === void 0 || xn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || xn(s.emaMs));
}
function Rp(s) {
  return !!s && typeof s.id == "string" && xn(s.count) && xn(s.first) && s.first <= s.count && xn(s.ms) && xn(s.at) && (s.solo === void 0 || xn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || xn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function Ud(s) {
  if (!s) return zo();
  const i = JSON.parse(s);
  if (!i || ![1, 2, 3].includes(i.version) || !i.stats || typeof i.stats != "object" || Array.isArray(i.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(i.stats).some((p) => !Lp(p))) throw new Error("Virheellisiä tilastoja");
  if (i.recent !== void 0 && (!Array.isArray(i.recent) || i.recent.some((p) => !p || typeof p.id != "string" || !xn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (i.sessions !== void 0 && (!Array.isArray(i.sessions) || i.sessions.some((p) => !Rp(p)))) throw new Error("Virheellisiä kierroksia");
  const l = i.version < 3, u = La(i.settings ?? {}), d = l && i.settings?.hints !== "always" && i.settings?.hints !== "off";
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
const Hd = 2500, Op = 8e3, Gd = 0.3, rr = (s) => s.ema ?? s.correct / s.attempts, ar = (s) => s.emaMs ?? s.totalMs / s.attempts;
function su(s) {
  if (!s?.attempts) return null;
  const i = Math.max(0, Math.min(1, 1 - (ar(s) - Hd) / (Op - Hd)));
  return rr(s) * 0.65 + i * 0.35;
}
function $p(s) {
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
const Ip = 4e3, Yd = 12, Fp = 1500;
function Dp(s, i) {
  const l = s.left + s.stickyLeft, u = s.right;
  let d = 0;
  if (i.left < l ? d = i.left - l - Yd : i.right > u && (d = i.right - u + Yd), d === 0) return null;
  const h = Math.max(0, Math.min(s.maxScroll, s.scrollLeft + d));
  return Math.abs(h - s.scrollLeft) < 1 ? null : h;
}
function zp(s, i) {
  return i.right <= s.left + s.stickyLeft || i.left >= s.right;
}
function Hh(s, i, l, { stickySelector: u, enabled: d = !0, playback: h } = {}) {
  const p = _.useRef(0), f = _.useRef(!1), k = _.useRef(""), S = _.useRef(0), v = _.useRef(h);
  _.useEffect(() => {
    const y = s.current;
    if (!y || !d) return;
    const x = () => {
      p.current = Date.now() + Ip;
    }, T = () => {
      f.current = !0, x();
    }, b = () => {
      f.current && (f.current = !1, x());
    }, w = (E) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(E.key) && x();
    };
    return y.addEventListener("pointerdown", T, { passive: !0 }), y.addEventListener("touchstart", T, { passive: !0 }), y.addEventListener("wheel", x, { passive: !0 }), y.addEventListener("keydown", w), window.addEventListener("pointerup", b, { passive: !0 }), window.addEventListener("pointercancel", b, { passive: !0 }), window.addEventListener("touchend", b, { passive: !0 }), window.addEventListener("touchcancel", b, { passive: !0 }), () => {
      y.removeEventListener("pointerdown", T), y.removeEventListener("touchstart", T), y.removeEventListener("wheel", x), y.removeEventListener("keydown", w), window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), window.removeEventListener("touchend", b), window.removeEventListener("touchcancel", b);
    };
  }, [s, d]), _.useLayoutEffect(() => {
    const y = h !== void 0 && !!h && h !== v.current;
    v.current = h, y && !f.current && (p.current = 0);
  }, [h]), _.useLayoutEffect(() => {
    h === void 0 && k.current === "" && l !== "" && Date.now() - S.current > Fp && !f.current && (p.current = 0), k.current !== "" && l === "" && (S.current = Date.now()), k.current = l;
    const y = s.current;
    if (!y || !d || !l || f.current || Date.now() < p.current) return;
    const x = y.querySelector(i);
    if (!x) return;
    const T = y.getBoundingClientRect(), b = x.getBoundingClientRect(), w = u ? y.querySelector(u) : null, E = w && getComputedStyle(w).position === "sticky" ? w.getBoundingClientRect().width : 0, z = {
      left: T.left,
      right: T.left + y.clientWidth,
      scrollLeft: y.scrollLeft,
      maxScroll: y.scrollWidth - y.clientWidth,
      stickyLeft: E
    }, P = Dp(z, b);
    if (P === null) return;
    const V = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || zp(z, b);
    typeof y.scrollTo == "function" ? y.scrollTo({ left: P, behavior: V ? "auto" : "smooth" }) : y.scrollLeft = P;
  }, [s, i, l, u, d, h]);
}
const Bp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Vp = ["e", "B", "G", "D", "A", "E"];
function Gh({ string: s }) {
  return /* @__PURE__ */ a.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ a.jsxs("span", { children: [
      s + 1,
      " · ",
      /* @__PURE__ */ a.jsx("strong", { children: Vp[s] })
    ] }),
    s === 0 ? /* @__PURE__ */ a.jsx("small", { children: "ohuin" }) : s === 5 ? /* @__PURE__ */ a.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Wh = (s) => ({ "--string-thickness": 1.25 + s * 0.45 + "px" }), Kp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Yh({ min: s, max: i }) {
  return /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
    /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: i - s + 1 }, (l, u) => {
      const d = s + u;
      return /* @__PURE__ */ a.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Bp.has(d) ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function hi({ area: s, marks: i = [], mutedStrings: l = [], disabled: u = !1, onAnswer: d, caption: h = "Otelauta", follow: p = "hints", playback: f }) {
  const k = { "--cols": s.max - s.min + 1 }, { strings: S, min: v, max: y } = s, [x, T] = _.useState({ string: Math.min(...S), fret: v }), b = _.useRef(null), w = new Map(i.map((B) => [Je(B), B])), E = i.map((B) => `${Je(B)}${B.kind}`).join(",");
  _.useEffect(() => {
    if (p !== "hints") return;
    const B = b.current, F = B?.querySelector(".target, .anchor");
    B && F && (B.scrollLeft += F.getBoundingClientRect().left - B.getBoundingClientRect().left - B.clientWidth / 2 + F.clientWidth / 2);
  }, [E, p]), _.useEffect(() => {
    p === "playing" && b.current && (b.current.scrollLeft = 0);
  }, [p, v, y]);
  const z = i.find((B) => B.kind === "playing");
  Hh(b, ".playing", z ? Je(z) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: f });
  const [P, U] = _.useState({ left: !1, right: !1 });
  _.useEffect(() => {
    const B = b.current;
    if (!B) return;
    const F = () => {
      const L = B.scrollLeft > 2, ie = B.scrollLeft + B.clientWidth < B.scrollWidth - 2;
      U((J) => J.left === L && J.right === ie ? J : { left: L, right: ie });
    };
    F(), B.addEventListener("scroll", F, { passive: !0 });
    const $ = typeof ResizeObserver > "u" ? null : new ResizeObserver(F);
    return $?.observe(B), () => {
      B.removeEventListener("scroll", F), $?.disconnect();
    };
  }, [E, v, y]);
  const V = S.includes(x.string) && x.fret >= v && x.fret <= y ? x : { string: Math.min(...S), fret: v };
  return /* @__PURE__ */ a.jsxs("div", { className: "fret-wrap" + (P.left ? " more-left" : "") + (P.right ? " more-right" : ""), children: [
    (P.left || P.right) && /* @__PURE__ */ a.jsxs("p", { className: "fret-scroll-hint", children: [
      P.left && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      P.left && P.right ? "molemmilla puolilla" : P.right ? "oikealla" : "vasemmalla",
      P.right && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ a.jsx("div", { ref: b, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board", style: k, children: [
      /* @__PURE__ */ a.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ a.jsx(Yh, { min: v, max: y }),
      /* @__PURE__ */ a.jsx("tbody", { children: Ue.OPEN_PITCHES.map((B, F) => /* @__PURE__ */ a.jsxs("tr", { className: S.includes(F) ? "" : "unused", style: Wh(F), children: [
        /* @__PURE__ */ a.jsxs("th", { scope: "row", "aria-label": `${F + 1}. kieli: ${sn[F]}${l.includes(F) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ a.jsx(Gh, { string: F }),
          l.includes(F) && /* @__PURE__ */ a.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        hs([F], v, y).map(($) => {
          const L = w.get(Je($)), ie = `${sn[F]}-kieli, ${bi($.fret)}`;
          return /* @__PURE__ */ a.jsx("td", { className: `${$.fret === 0 ? "open-fret " : ""}${L ? L.kind === "answer" ? "target" : L.kind : ""}`, children: /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "data-string": F,
              "data-fret": $.fret,
              tabIndex: V.string === F && V.fret === $.fret ? 0 : -1,
              onFocus: () => T($),
              onKeyDown: (J) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(J.key)) return;
                J.preventDefault();
                const je = [...S].sort((H, ce) => H - ce), Ae = je.indexOf(F), X = J.key === "ArrowUp" ? je[Math.max(0, Ae - 1)] : J.key === "ArrowDown" ? je[Math.min(je.length - 1, Ae + 1)] : F, me = J.key === "Home" ? v : J.key === "End" ? y : Math.max(v, Math.min(y, $.fret + (J.key === "ArrowRight" ? 1 : J.key === "ArrowLeft" ? -1 : 0)));
                J.currentTarget.closest("table")?.querySelector(`button[data-string="${X}"][data-fret="${me}"]`)?.focus();
              },
              disabled: u || !S.includes(F),
              "aria-label": ie + (L ? `, ${Kp[L.kind]}${L.label ? " " + L.label : ""}` : ""),
              onClick: () => d?.($),
              children: L ? /* @__PURE__ */ a.jsx("span", { className: "dot", children: L.label || "●" }) : null
            }
          ) }, $.fret);
        })
      ] }, F)) })
    ] }) })
  ] });
}
function Up({ area: s, stats: i, input: l, check: u, flats: d }) {
  const { strings: h, min: p, max: f } = s, k = `${l}:${u}:solo:notes:`;
  return /* @__PURE__ */ a.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board mastery", style: { "--cols": f - p + 1 }, children: [
    /* @__PURE__ */ a.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ a.jsx(Yh, { min: p, max: f }),
    /* @__PURE__ */ a.jsx("tbody", { children: Ue.OPEN_PITCHES.map((S, v) => /* @__PURE__ */ a.jsxs("tr", { className: h.includes(v) ? "" : "unused", style: Wh(v), children: [
      /* @__PURE__ */ a.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${sn[v]}`, children: /* @__PURE__ */ a.jsx(Gh, { string: v }) }),
      hs([v], p, f).map((y) => {
        const x = Object.hasOwn(i, k + Je(y)) ? i[k + Je(y)] : void 0, T = su(x), b = T === null ? "unseen" : x.attempts < 3 ? "few" : T >= 0.8 ? "strong" : T >= 0.5 ? "growing" : "weak", w = `${sn[v]}-kieli, ${bi(y.fret)}, ${Ie(y.midi, d)}`, E = x ? `${Math.round(T * 100)} %, ${x.correct}/${x.attempts} heti oikein, viime aikoina ${Math.round(rr(x) * 100)} % ja ${(ar(x) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ a.jsxs("td", { className: `${y.fret === 0 ? "open-fret " : ""}${b}`, title: `${w}: ${E}`, children: [
          /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: T === null ? "·" : x.attempts < 3 ? "?" : Math.round(T * 100) }),
          /* @__PURE__ */ a.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            E
          ] })
        ] }, y.fret);
      })
    ] }, v)) })
  ] }) });
}
const Hp = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", Fa = (s) => s.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[s.scale]) : _i[s.mode === "caged" ? "maj" : s.chord].tones, Qh = (s) => Ue.fingeringBoxes(s.root, Ue.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
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
function Gp(s) {
  const i = Ai(s);
  return i.fixed ? { ...i, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, i.min - 1), max: Math.min(24, i.max + 1) } : i;
}
function or(s) {
  const i = Ai(s), l = hs(i.strings, i.min, i.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return l.filter((h) => s.accidentals || ![1, 3, 6, 8, 10].includes(Ye(h.midi)));
  if (s.mode === "caged") {
    const h = new Set(Bh(s.root, s.shape).map(Je));
    return l.filter((p) => h.has(Je(p)));
  }
  if (s.mode === "interval") return l;
  const u = l.filter((h) => Fa(s).some(([p]) => Ye(h.midi - s.root) === p));
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
function Wp(s) {
  const i = Fa(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? i : i.filter(([, l]) => l.endsWith(s.chordTone));
}
function Bo(s) {
  const i = or(s), l = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!i.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : l}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${l}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${l}`;
  const u = Wp(s).filter(([d]) => !i.some((h) => Ye(h.midi - s.root) === d));
  return u.length ? `Valitulta alueelta puuttuu soinnun ${u.map(([, d]) => d + ". aste").join(" ja ")}. ${l}` : s.mode === "interval" && !Jh(s, i).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : zn(s) && new Set(i.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${l}` : null;
}
function Yp(s, i) {
  const l = [...new Map([...i].sort((u, d) => u.midi - d.midi || u.string - d.string).map((u) => [u.midi, u])).values()];
  return s.order === "down" ? l.reverse() : l;
}
function Xh(s) {
  return zn(s) ? new Set(or(s).map((i) => i.midi)).size : s.rounds;
}
function Qp(s, i) {
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
function Jp(s, i, l = {}, u, d = Math.random) {
  const h = Bo(s);
  if (h) throw new Error(h);
  const p = Vh(s), f = Pi(s), k = p === "pitch", S = ($) => s.weak ? $p(l[Uh({ input: f, check: p, hint: !1, item: $ })]) : 1, v = ($) => is($, $.map(() => 1), d), y = or(s), x = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const $ = Mi(y, (J) => !!u && Je(J) === Je(u.position)), L = is($, $.map((J) => S(`notes:${Je(J)}`)), d), ie = Ie(L.midi, s.flats, k);
    return {
      ...x,
      position: L,
      midi: L.midi,
      name: ie,
      item: `notes:${Je(L)}`,
      prompt: `Etsi ${ie} ${iu[L.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const $ = (je) => `ear-note:${Ye(je.midi)}${s.reference ? ":ref" : ""}`, L = Mi(y, (je) => !!u && Ye(je.midi) === Ye(u.midi)), ie = is(L, L.map((je) => S($(je))), d), J = s.reference ? 57 + 12 * Math.round((ie.midi - 57) / 12) : void 0;
    return {
      ...x,
      position: ie,
      midi: ie.midi,
      name: Ie(ie.midi, s.flats),
      item: $(ie),
      choices: "note",
      reference: J,
      sound: J === void 0 ? [ie.midi] : [J, ie.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const $ = Mi(y, (ie) => !!u && ie.midi === u.midi), L = is($, $.map((ie) => S(`repeat:${ie.midi}`)), d);
    return {
      ...x,
      position: L,
      midi: L.midi,
      name: Ie(L.midi, s.flats, !0),
      item: `repeat:${L.midi}`,
      sound: [L.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const $ = Mi(Jh(s, y), (J) => u?.interval === J.iv && u?.direction === J.direction), L = is($, $.map((J) => S(`interval:${J.iv}:${J.direction}`)), d), ie = v(Mi(L.pairs, (J) => u?.reference === J.reference.midi));
    return {
      ...x,
      position: ie.target,
      midi: ie.target.midi,
      name: Ie(ie.target.midi, s.flats, !0),
      item: `interval:${L.iv}:${L.direction}`,
      interval: L.iv,
      direction: L.direction,
      reference: ie.reference.midi,
      sound: [ie.reference.midi, ie.target.midi],
      prompt: `Kuulet ${L.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ie(ie.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const T = Fa(s);
  let b, w = 0;
  if (zn(s)) {
    const $ = Yp(s, y);
    w = $.length, b = $[i % $.length];
  } else {
    const $ = T.filter(([J]) => y.some((je) => Ye(je.midi - s.root) === J)), L = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [T[i % T.length]] : T.filter(([, J]) => J.endsWith(s.chordTone)) : Mi($, ([J]) => u?.interval === J), [ie] = is(L, L.map(([J]) => S(Qd(s, J))), d);
    b = v(Mi(y.filter((J) => Ye(J.midi - s.root) === ie), (J) => !!u && Je(J) === Je(u.position)));
  }
  const E = Ye(b.midi - s.root), z = T.find(([$]) => $ === E)[1], P = ir(s.root, E, z), U = k ? P + _p(b.midi, P) : P, V = s.mode === "scale" ? `${di(s.root)}-${Ue.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${di(s.root)}-duurisointu, ${s.shape}-muoto` : zh(s.root, s.chord), B = s.mode !== "caged" && s.activity === "degree", F = B ? `${V}: mikä aste on ${P}?` : w ? `${V} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${i % w + 1}/${w}: ${z}. aste (${U}).` : `${V}: etsi ${z}. aste${k ? ` (${U})` : ""}.`;
  return {
    ...x,
    position: b,
    midi: b.midi,
    name: U,
    item: Qd(s, E),
    prompt: F,
    degree: z,
    interval: E,
    choices: B ? "degree" : "position"
  };
}
function Vo(s, i, l) {
  return Number.isInteger(i) && (l === "class" ? Ye(s) === Ye(i) : s === i);
}
function Zh(s, i, l) {
  return Vo(i.midi, l.midi, i.check) ? s.mode === "notes" ? l.string === i.position.string : Hp(s) ? or(s).some((u) => Je(u) === Je(l)) : !0 : !1;
}
function Xp(s, i) {
  const l = Ai(s);
  return hs(l.strings, l.min, l.max).filter((u) => Zh(s, i, u));
}
const Pt = (s, i, l) => ({ ...s, label: i, kind: l }), Zp = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function qp(s, i, l) {
  if (l <= 0) return { marks: [], text: "" };
  const u = l >= 2, d = Ai(s), h = hs(d.strings, d.min, d.max), p = Xp(s, i);
  if (s.mode === "notes") {
    if (u) return { marks: p.map((z) => Pt(z, i.name, "answer")), text: `${i.name} on ${Dh[i.position.string]}: ${bi(i.position.fret)}.` };
    const w = h.find((z) => z.string === i.position.string), E = Ie(w.midi, s.flats);
    return {
      marks: [Pt(w, E, "anchor")],
      text: `Apupiste: ${bp[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${E}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return u ? { marks: [Pt(i.position, i.name, "answer")], text: `Sävel on ${i.name}.` } : { marks: [Pt(i.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${sn[i.position.string]}-kieli, ${bi(i.position.fret)}.` };
  if (s.mode === "repeat")
    return u ? { marks: p.map((w) => Pt(w, Ie(w.midi, s.flats, i.check === "pitch"), "answer")), text: `Sävel on ${i.name}.` } : { marks: [], text: `Sävel löytyy ${iu[i.position.string]}.` };
  if (s.mode === "interval") {
    const w = Ie(i.reference, s.flats, !0), E = h.filter((z) => z.midi === i.reference).map((z) => Pt(z, w, "anchor"));
    return u ? {
      marks: [...E, ...p.map((z) => Pt(z, Ie(z.midi, s.flats, !0), "answer"))],
      text: `${Zp(sr[i.interval])} ${i.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${i.name}.`
    } : { marks: E, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${i.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const f = or(s), k = Fa(s), S = (w) => k.find(([E]) => E === Ye(w.midi - s.root))?.[1] ?? "", v = ir(s.root, i.interval, i.degree), y = f.filter((w) => Ye(w.midi - s.root) === 0), x = (w) => p.some((E) => Je(E) === Je(w)), T = `${i.degree}. aste on ${v}.`;
  if (s.mode === "caged")
    return u ? { marks: f.map((w) => Pt(w, S(w), x(w) ? "answer" : "shape")), text: T } : { marks: f.map((w) => Pt(w, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${i.degree}. aste?` };
  const b = s.mode === "scale" ? "asteikon" : "soinnun";
  if (i.choices === "degree") {
    const w = f.filter((E) => Ye(E.midi) === Ye(i.midi));
    return u ? { marks: [...(i.interval === 0 ? [] : y).map((E) => Pt(E, "1", "anchor")), ...w.map((E) => Pt(E, i.degree, "answer"))], text: `${v} on ${i.degree}. aste.` } : i.interval === 0 ? { marks: w.map((E) => Pt(E, v, "shape")), text: `Katso ${b} nimeä: mikä on sen perussävel?` } : {
      marks: [...y.map((E) => Pt(E, "1", "anchor")), ...w.map((E) => Pt(E, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return u ? { marks: [...y.filter((w) => !x(w)).map((w) => Pt(w, "1", "anchor")), ...p.map((w) => Pt(w, i.degree, "answer"))], text: T } : i.interval === 0 ? { marks: [], text: `1. aste on ${b} perussävel ${di(s.root)}.` } : { marks: y.map((w) => Pt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${i.degree}. aste on ${i.interval} puoliaskelta perussävelen yläpuolella.` };
}
class ev {
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
      this.question = Jp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Qp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
      item: f && this.settings.mode === "notes" ? `notes:${Je(f)}` : h.item,
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
    return f ? k.position = Je(f) : this.settings.mode === "notes" && (k.position = Je(h.position)), this.results.push(k), this.record(k), this.phase = "feedback", "correct";
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
function Vt({ label: s, children: i }) {
  const l = _.useId();
  return /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ a.jsx("label", { htmlFor: l, children: s }),
    _.cloneElement(i, { id: l })
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
  return `${Ia[s.hints].title} · ${d} · ${zn(s) ? `yksi läpisoitto, ${l} säveltä` : l ? `${l} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function Zd({ s, change: i, locked: l, problem: u }) {
  const d = _.useId(), h = (v, y) => i({ ...s, [v]: y }), p = Ai(s), f = Pi(s) === "note" || Pi(s) === "degree", k = ["scale", "chord", "caged"].includes(s.mode), S = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "settings", disabled: l, children: [
    /* @__PURE__ */ a.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Vt, { label: "Harjoitus", children: /* @__PURE__ */ a.jsx("select", { value: s.mode, onChange: (v) => h("mode", v.target.value), children: Uo.map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y }, v)) }) }),
      /* @__PURE__ */ a.jsx("p", { className: "mode-note", children: Uo.find(([v]) => v === s.mode)[2] })
    ] }),
    k && /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Vt, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ a.jsx("select", { value: s.root, onChange: (v) => h("root", Number(v.target.value)), children: Ue.CHROM.map((v, y) => /* @__PURE__ */ a.jsx("option", { value: y, children: v }, v)) }) }),
      s.mode === "scale" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Vt, { label: "Asteikko", children: /* @__PURE__ */ a.jsx("select", { value: s.scale, onChange: (v) => h("scale", v.target.value), children: Object.entries(Ue.SCALES).map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(Vt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ a.jsxs("select", { value: s.box, onChange: (v) => h("box", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ a.jsx(Vt, { label: "Sävelten järjestys", children: /* @__PURE__ */ a.jsxs("select", { value: s.order, onChange: (v) => h("order", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ a.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ a.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      s.mode === "chord" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Vt, { label: "Sointutyyppi", children: /* @__PURE__ */ a.jsx("select", { value: s.chord, onChange: (v) => h("chord", v.target.value), children: Object.entries(_i).map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(Vt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ a.jsxs("select", { value: s.chordTone, onChange: (v) => h("chordTone", v.target.value), children: [
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
      s.mode === "caged" ? /* @__PURE__ */ a.jsx(Vt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ a.jsx("select", { value: s.shape, onChange: (v) => h("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ a.jsx(Vt, { label: "Tehtävä", children: /* @__PURE__ */ a.jsxs("select", { value: s.activity, onChange: (v) => h("activity", v.target.value), children: [
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
      /* @__PURE__ */ a.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ a.jsx(Vt, { label: "Intervallin suunta", children: /* @__PURE__ */ a.jsxs("select", { value: s.direction, onChange: (v) => h("direction", v.target.value), children: [
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
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Ia[v] }))
      }
    ),
    f ? /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ a.jsx(Jd, { legend: "Vastaustapa", name: `${d}-input`, value: s.input, onChange: (v) => h("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ a.jsx(Vt, { label: "Kierroksen pituus", children: /* @__PURE__ */ a.jsxs("select", { value: s.rounds, disabled: zn(s), onChange: (v) => h("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !f && /* @__PURE__ */ a.jsx(Vt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ a.jsxs("select", { value: zn(s) ? "pitch" : s.check, disabled: zn(s), onChange: (v) => h("check", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ a.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ a.jsx(Vt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ a.jsxs("select", { value: String(s.flats), onChange: (v) => h("flats", v.target.value === "true"), children: [
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
          /* @__PURE__ */ a.jsx(Vt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: "0", max: "24", value: s.min, onChange: (v) => h("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ a.jsx(Vt, { label: "Viimeinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: s.min, max: "24", value: s.max, onChange: (v) => h("max", Number(v.target.value)) }) })
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
function tv(s) {
  return s && Object.hasOwn(qd, s) ? qd[s] : null;
}
const nv = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opettele sävelten sijainnit ja harjoittele musiikkikorvaa lyhyillä peleillä.", example: "Sävelten etsintä · Riffikaiku · Ensikeikka" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function iv({ onSelect: s }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ a.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ a.jsx("div", { className: "learning-grid", children: nv.map((i) => /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => s(i.id), children: [
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
function sv({ onBack: s, onNotes: i }) {
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
const rv = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Ho = 100, qh = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function ru(s) {
  if (s === null || s.trim() === "") return Ho;
  const i = Number(s);
  return Number.isFinite(i) ? Math.round(Math.min(100, Math.max(0, i))) : Ho;
}
function av() {
  try {
    return ru(localStorage.getItem(qh));
  } catch {
    return Ho;
  }
}
function lv(s) {
  try {
    localStorage.setItem(qh, String(ru(String(s))));
  } catch {
  }
}
function To(s, i, l = !0) {
  return l ? rv[s] * ru(String(i)) / 100 : 0;
}
function ef(s = () => new Audio()) {
  try {
    const i = s();
    return i.volume = 0.5, Math.abs(i.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const tf = 0.12, ov = 2e3, nf = 3, eh = 1e-3, uv = tf, th = 1500, cv = 4e3;
function sf(s) {
  return s.readyState >= nf && !s.seeking;
}
function rf(s) {
  return s.every(sf);
}
function dv(s) {
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
function hv(s, i, l, u = {
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
        for (const T of s) for (const b of h) T.removeEventListener(b, v);
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
function fv(s, i = !1) {
  return i ? !0 : s.atLoopBoundary || s.drift <= tf || s.seeking || s.readyState < nf ? !1 : s.msSinceLastFix >= ov;
}
const mv = 1.5, pv = 0.4, vv = 0.5;
let Go = null, kv = null;
function yv(s) {
  return Go !== null ? Go : (kv ??= ef()) ? 0 : pv;
}
class af {
  constructor(i = yv()) {
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
    if (!fv({
      drift: f,
      atLoopBoundary: k,
      seeking: l.seeking,
      readyState: l.readyState,
      msSinceLastFix: S === void 0 ? 1 / 0 : d - S
    }, u)) return !1;
    const v = !i.paused;
    !u && v && S !== void 0 && (this.latency = Math.min(mv, Math.max(0, this.latency - vv * p)), Go = this.latency);
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
function gv(s = globalThis.navigator) {
  return s ? /iPhone|iPad|iPod/.test(s.userAgent) || s.platform === "MacIntel" && s.maxTouchPoints > 1 : !1;
}
function xv(s = gv(), i = () => ef()) {
  return s ? "webaudio" : i() ? "element" : "webaudio";
}
function jv(s = globalThis.navigator) {
  const i = s?.audioSession;
  i && i.type !== "playback" && (i.type = "playback");
}
const Sv = () => {
  const s = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!s) throw new Error("Web Audio API puuttuu");
  return new s();
};
class wv {
  constructor(i = Sv, l = globalThis.navigator) {
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
        jv(this.nav);
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
const Ev = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Nv = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function nh(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const i = Math.floor(s);
  return String(Math.floor(i / 60)) + ":" + String(i % 60).padStart(2, "0");
}
function lf() {
  const s = _.useRef(null), i = _.useRef(null), [l, u] = _.useState(!1), [d, h] = _.useState(!1), [p, f] = _.useState(!1), [k, S] = _.useState(0), [v, y] = _.useState(0), [x, T] = _.useState(""), b = _.useRef(new af());
  function w(V = !1) {
    const B = s.current, F = i.current;
    !B || !F || !Number.isFinite(B.currentTime) || b.current.align(B, F, V);
  }
  function E() {
    s.current?.pause(), i.current?.pause(), u(!1);
  }
  async function z() {
    const V = s.current, B = i.current;
    if (!(!V || !B)) {
      if (l) {
        E();
        return;
      }
      T(""), B.muted = !d, B.volume = 0.55, V.volume = 0.75, w(!0);
      try {
        await Promise.all(d ? [V.play(), B.play()] : [V.play()]), w(), u(!0);
      } catch {
        E(), T("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function P(V) {
    const B = s.current, F = i.current;
    if (!(!B || !F || !Number.isFinite(V))) {
      B.currentTime = V;
      try {
        F.currentTime = V;
      } catch {
      }
      S(V);
    }
  }
  function U(V) {
    const B = s.current, F = i.current;
    if (h(V), !!F) {
      if (F.muted = !V, !V) {
        F.pause();
        return;
      }
      !B || !l || (w(!0), F.play().catch(() => T("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return _.useEffect(() => {
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
        src: Ev,
        loop: p,
        onLoadedMetadata: (V) => y(V.currentTarget.duration),
        onTimeUpdate: (V) => {
          S(V.currentTarget.currentTime), V.currentTarget.paused || w();
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
        src: Nv,
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
const Cv = 4e3;
class ih extends Error {
  name = "MicSetupError";
}
async function Tv(s, i) {
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
          S = setTimeout(() => y(new ih("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Cv);
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
async function Mv() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((i) => i.kind === "audioinput" && i.deviceId) : [];
}
var Mo, sh;
function _v() {
  if (sh) return Mo;
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
  return Mo = s, s.prototype.fromComplexArray = function(l, u) {
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
        const E = S[k];
        this._singleTransform2(f, E, h);
      }
    else
      for (f = 0, k = 0; f < u; f += p, k++) {
        const E = S[k];
        this._singleTransform4(f, E, h);
      }
    var v = this._inv ? -1 : 1, y = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = u / h << 1;
      var x = p >>> 2;
      for (f = 0; f < u; f += p)
        for (var T = f + x, b = f, w = 0; b < T; b += 2, w += h) {
          const E = b, z = E + x, P = z + x, U = P + x, V = l[E], B = l[E + 1], F = l[z], $ = l[z + 1], L = l[P], ie = l[P + 1], J = l[U], je = l[U + 1], Ae = V, X = B, me = y[w], H = v * y[w + 1], ce = F * me - $ * H, ue = F * H + $ * me, q = y[2 * w], ae = v * y[2 * w + 1], ne = L * q - ie * ae, N = L * ae + ie * q, j = y[3 * w], te = v * y[3 * w + 1], de = J * j - je * te, Te = J * te + je * j, G = Ae + ne, K = X + N, W = Ae - ne, Y = X - N, ve = ce + de, Me = ue + Te, le = v * (ce - de), ke = v * (ue - Te), Ne = G + ve, Le = K + Me, _e = G - ve, Fe = K - Me, nt = W + ke, He = Y - le, Xe = W - ke, st = Y + le;
          l[E] = Ne, l[E + 1] = Le, l[z] = nt, l[z + 1] = He, l[P] = _e, l[P + 1] = Fe, l[U] = Xe, l[U + 1] = st;
        }
    }
  }, s.prototype._singleTransform2 = function(l, u, d) {
    const h = this._out, p = this._data, f = p[u], k = p[u + 1], S = p[u + d], v = p[u + d + 1], y = f + S, x = k + v, T = f - S, b = k - v;
    h[l] = y, h[l + 1] = x, h[l + 2] = T, h[l + 3] = b;
  }, s.prototype._singleTransform4 = function(l, u, d) {
    const h = this._out, p = this._data, f = this._inv ? -1 : 1, k = d * 2, S = d * 3, v = p[u], y = p[u + 1], x = p[u + d], T = p[u + d + 1], b = p[u + k], w = p[u + k + 1], E = p[u + S], z = p[u + S + 1], P = v + b, U = y + w, V = v - b, B = y - w, F = x + E, $ = T + z, L = f * (x - E), ie = f * (T - z), J = P + F, je = U + $, Ae = V + ie, X = B - L, me = P - F, H = U - $, ce = V - ie, ue = B + L;
    h[l] = J, h[l + 1] = je, h[l + 2] = Ae, h[l + 3] = X, h[l + 4] = me, h[l + 5] = H, h[l + 6] = ce, h[l + 7] = ue;
  }, s.prototype._realTransform4 = function() {
    var l = this._out, u = this._csize, d = this._width, h = 1 << d, p = u / h << 1, f, k, S = this._bitrev;
    if (p === 4)
      for (f = 0, k = 0; f < u; f += p, k++) {
        const xe = S[k];
        this._singleRealTransform2(f, xe >>> 1, h >>> 1);
      }
    else
      for (f = 0, k = 0; f < u; f += p, k++) {
        const xe = S[k];
        this._singleRealTransform4(f, xe >>> 1, h >>> 1);
      }
    var v = this._inv ? -1 : 1, y = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = u / h << 1;
      var x = p >>> 1, T = x >>> 1, b = T >>> 1;
      for (f = 0; f < u; f += p)
        for (var w = 0, E = 0; w <= b; w += 2, E += h) {
          var z = f + w, P = z + T, U = P + T, V = U + T, B = l[z], F = l[z + 1], $ = l[P], L = l[P + 1], ie = l[U], J = l[U + 1], je = l[V], Ae = l[V + 1], X = B, me = F, H = y[E], ce = v * y[E + 1], ue = $ * H - L * ce, q = $ * ce + L * H, ae = y[2 * E], ne = v * y[2 * E + 1], N = ie * ae - J * ne, j = ie * ne + J * ae, te = y[3 * E], de = v * y[3 * E + 1], Te = je * te - Ae * de, G = je * de + Ae * te, K = X + N, W = me + j, Y = X - N, ve = me - j, Me = ue + Te, le = q + G, ke = v * (ue - Te), Ne = v * (q - G), Le = K + Me, _e = W + le, Fe = Y + Ne, nt = ve - ke;
          if (l[z] = Le, l[z + 1] = _e, l[P] = Fe, l[P + 1] = nt, w === 0) {
            var He = K - Me, Xe = W - le;
            l[U] = He, l[U + 1] = Xe;
            continue;
          }
          if (w !== b) {
            var st = Y, yt = -ve, Ze = K, ze = -W, et = -v * Ne, pt = -v * ke, It = -v * le, At = -v * Me, Kt = st + et, D = yt + pt, oe = Ze + At, ge = ze - It, re = f + T - w, $e = f + x - w;
            l[re] = Kt, l[re + 1] = D, l[$e] = oe, l[$e + 1] = ge;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(l, u, d) {
    const h = this._out, p = this._data, f = p[u], k = p[u + d], S = f + k, v = f - k;
    h[l] = S, h[l + 1] = 0, h[l + 2] = v, h[l + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(l, u, d) {
    const h = this._out, p = this._data, f = this._inv ? -1 : 1, k = d * 2, S = d * 3, v = p[u], y = p[u + d], x = p[u + k], T = p[u + S], b = v + x, w = v - x, E = y + T, z = f * (y - T), P = b + E, U = w, V = -z, B = b - E, F = w, $ = z;
    h[l] = P, h[l + 1] = 0, h[l + 2] = U, h[l + 3] = V, h[l + 4] = B, h[l + 5] = 0, h[l + 6] = F, h[l + 7] = $;
  }, Mo;
}
var bv = _v();
const Pv = /* @__PURE__ */ mp(bv);
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
    this._inputLength = i, this._fft = new Pv(Rv(2 * i)), this._bufferSupplier = l, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function Av(s) {
  const i = [];
  let l = !1, u = -1 / 0, d = -1;
  for (let h = 1; h < s.length - 1; h++)
    s[h - 1] <= 0 && s[h] > 0 ? (l = !0, d = h, u = s[h]) : s[h - 1] > 0 && s[h] <= 0 ? (l = !1, d !== -1 && i.push(d)) : l && s[h] > u && (u = s[h], d = h);
  return i;
}
function Lv(s, i) {
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
    const u = Av(this._nsdfBuffer);
    if (u.length === 0)
      return [0, 0];
    const d = Math.max(...u.map((k) => this._nsdfBuffer[k])), h = u.find(
      (k) => this._nsdfBuffer[k] >= this._clarityThreshold * d
    ), [p, f] = Lv(
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
function Rv(s) {
  return s--, s |= s >> 1, s |= s >> 2, s |= s >> 4, s |= s >> 8, s |= s >> 16, s++, s;
}
function Ov(s) {
  const i = s * 0.17;
  let l = 2048;
  for (; l < i && l < 32768; ) l *= 2;
  return l;
}
const $v = 0.05, Iv = 1.5;
class Fv {
  constructor(i, l = {}) {
    this.mic = i, this.opts = l;
    const u = i.context, d = Ov(u.sampleRate), h = Math.max(1, Math.min(2, i.channelCount ?? 1));
    h > 1 && typeof u.createChannelSplitter == "function" && (this.splitter = u.createChannelSplitter(h), i.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const f = u.createAnalyser();
      f.fftSize = d, f.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(f, p) : i.source.connect(f), this.analysers.push(f), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(u.sampleRate * $v))), this.detector = er.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Dv();
  onset = new zv();
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
    } = this.opts, v = this.analysers.map(($, L) => ($.getFloatTimeDomainData(this.buffers[L]), rh(this.buffers[L], this.buffers[L].length - this.shortLength))), y = v.indexOf(Math.max(...v));
    y !== this.channel && v[y] > (v[this.channel] ?? 0) * Iv && (this.channel = y);
    const x = this.buffers[this.channel], T = v[this.channel], b = Bv(x, x.length - this.shortLength), w = { rms: T, peak: b, channel: this.channel, levels: v }, E = T < u, z = this.onset.feed(T, i, u);
    if (E && rh(x, 0) < u) {
      this.gate.feed(null, i, d, !0, !1), k?.({ ...w, status: "silent" });
      return;
    }
    const [P, U] = this.detector.findPitch(x, this.mic.context.sampleRate);
    if (!isFinite(P) || U < l) {
      this.gate.feed(null, i, d, E, z), k?.({ ...w, status: E ? "silent" : "unclear", clarity: isFinite(U) ? U : 0 });
      return;
    }
    if (P < p || P > f) {
      this.gate.feed(null, i, d, E, z), k?.({ ...w, status: "out-of-range", frequency: P, clarity: U });
      return;
    }
    const { midi: V, cents: B } = Cp(P);
    if (Math.abs(B) > h) {
      this.gate.feed(null, i, d, E, z), k?.({ ...w, status: "off-pitch", frequency: P, clarity: U, midi: V, cents: B });
      return;
    }
    k?.({ ...w, status: "pitch", frequency: P, clarity: U, midi: V, cents: B });
    const F = this.gate.feed(V, i, d, E, z);
    F !== null && S?.({ midi: V, frequency: P, cents: B, clarity: U, timestamp: i, heldMs: F.heldMs });
  }
}
class Dv {
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
class zv {
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
function Bv(s, i = 0) {
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
function Vv() {
  const s = ss;
  ss = void 0, s?.close().catch(() => {
  });
}
const uf = (s) => s instanceof Error ? s.name : "";
function Kv(s) {
  const i = uf(s);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(i) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : i === "NotFoundError" || i === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : i === "NotReadableError" || i === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : i === "MicSetupError" ? s.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Uv {
  constructor(i = (l) => Tv(l, of)) {
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
      this.loop = new Fv(h, { ...l });
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
function Hv(s) {
  const i = [...s].sort((u, d) => u - d), l = i[Math.min(i.length - 1, Math.floor(i.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, l * 3)), noise: l, loud: l > 0.04 };
}
async function _o(s) {
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
function Da(s) {
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
    if (await _o(d), u !== this.token) return !1;
    const h = d.createGain();
    h.connect(d.destination), this.master = h;
    const p = Array.from({ length: 12 }, (S, v) => 1 / (v + 1) ** 1.3), f = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return i.forEach((S, v) => {
      const y = d.createOscillator(), x = d.createGain(), T = d.currentTime + 0.05 + v * 0.8;
      f ? y.setPeriodicWave(f) : y.type = "triangle", y.frequency.value = Co(S), x.gain.setValueAtTime(0, T), x.gain.linearRampToValueAtTime(0.22, T + 0.012), x.gain.exponentialRampToValueAtTime(1e-3, T + 0.7), y.connect(x), x.connect(h), y.start(T), y.stop(T + 0.72), l && this.noteTimers.push(setTimeout(() => {
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
    if (await _o(p), h !== this.token) return !1;
    const f = 60 / Math.max(40, Math.min(140, l)), k = p.createGain();
    k.connect(p.destination), this.master = k;
    const S = Array.from({ length: 12 }, (b, w) => 1 / (w + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...S.map(() => 0)]),
      new Float32Array([0, ...S])
    ), y = p.currentTime + 0.05;
    let x = 0;
    return i.forEach((b, w) => {
      if (!Number.isFinite(b.beat) || b.beat < 0 || !Number.isFinite(b.duration) || b.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const E = y + b.beat * f, z = b.duration * f, P = E + Math.max(0.08, z * 0.94), U = p.createOscillator(), V = p.createGain();
      v ? U.setPeriodicWave(v) : U.type = "triangle", U.frequency.value = Co(b.midi), V.gain.setValueAtTime(0, E), V.gain.linearRampToValueAtTime(0.22, E + 0.012), V.gain.exponentialRampToValueAtTime(1e-3, P - 0.01), U.connect(V), V.connect(k), U.start(E), U.stop(P), u && this.noteTimers.push(setTimeout(() => {
        h === this.token && u(w);
      }, 50 + b.beat * f * 1e3));
      const B = i[w + 1]?.beat ?? 1 / 0;
      d && B > b.beat + b.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && d();
      }, 50 + b.beat * f * 1e3 + z * 1e3)), x = Math.max(x, b.beat + b.duration);
    }), !await new Promise((b) => {
      this.settle = b, this.timer = setTimeout(() => b(!0), 50 + x * f * 1e3 + 150);
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
    if (await _o(h), d !== this.token) return !1;
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const f = Array.from({ length: 12 }, (w, E) => 1 / (E + 1) ** 1.3), k = h.createPeriodicWave?.(new Float32Array([0, ...f.map(() => 0)]), new Float32Array([0, ...f]));
    let S = 60 / Math.max(40, Math.min(140, u));
    this.adjustLoopTempo = (w) => {
      d === this.token && Number.isFinite(w) && (S = 60 / Math.max(40, Math.min(140, w)));
    };
    const v = 1.6;
    let y = h.currentTime + 0.05, x = 0;
    const T = [], b = () => {
      if (d === this.token) {
        if (y < h.currentTime - 0.02) {
          const w = Math.ceil((h.currentTime - y) / S);
          y += w * S, x = (x + w) % i.length, T.length = 0;
        }
        for (; y < h.currentTime + v; ) {
          const w = i[x], E = x, z = y, P = h.createOscillator(), U = h.createGain();
          k ? P.setPeriodicWave(k) : P.type = "triangle", P.frequency.value = Co(w), U.gain.setValueAtTime(0, z), U.gain.linearRampToValueAtTime(0.22, z + 0.012), U.gain.exponentialRampToValueAtTime(1e-3, z + S * 0.975), P.connect(U), U.connect(p), P.start(z), P.stop(z + S * 0.985), T.push({ at: z, index: E }), y += S, x = (x + 1) % i.length;
        }
        for (; T.length && T[0].at <= h.currentTime + 0.01; ) {
          const w = T.shift();
          l?.(w.index);
        }
      }
    };
    return b(), this.loopTick = setInterval(b, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
function fi(s, i) {
  let l = 0;
  const u = i.map(([d, h, p]) => {
    const k = { position: d === null || h === null ? null : Ke(d, h), beat: l, duration: p };
    return l += p, k;
  });
  return { label: s, events: u, beats: l };
}
function bo(s, ...i) {
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
]), Gv = fi("C · Jatko", [
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
]), Wv = fi("Oma lisä: B ratkeaa C:hen", [
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
]), Yv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [lh, oh],
    whole: bo("Melodia · A + B + C", lh, oh, Gv),
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
    whole: bo("Ukko Nooa · A + B", uh, ch),
    bonus: Wv,
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
    whole: bo("Siirtymämelodia · A + B", dh, hh),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Qv(s) {
  return s.events.filter((i) => i.position !== null).map((i) => ({ midi: i.position.midi, beat: i.beat, duration: i.duration }));
}
const fh = ["e", "B", "G", "D", "A", "E"];
function au({ pieceId: s, stage: i, onBeforePlay: l, stopHandleRef: u }) {
  const d = Yv[s], [h, p] = _.useState(i === "fingering" ? "a" : "whole"), [f, k] = _.useState(d.tempo), [S, v] = _.useState(!1), [y, x] = _.useState(!1), [T, b] = _.useState(i !== "memory"), [w, E] = _.useState(!1), [z, P] = _.useState(null), [U, V] = _.useState(""), B = _.useRef(new ur()), F = _.useRef(0);
  function $() {
    F.current++, B.current.stop(), E(!1), P(null);
  }
  _.useEffect(() => {
    u && (u.current = $);
    const j = () => {
      document.hidden && $();
    };
    return document.addEventListener("visibilitychange", j), () => {
      document.removeEventListener("visibilitychange", j), F.current++, B.current.stop(), u && (u.current = null);
    };
  }, [u]);
  const L = i === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], ie = L.find((j) => j.id === h) ?? L[0], J = ie.clip, je = Qv(J), Ae = z === null ? null : je[z]?.beat ?? null, X = Ae === null ? null : J.events.find((j) => j.beat === Ae)?.position ?? null, me = _.useRef(null);
  Hh(me, ".melody-playing", w && Ae !== null ? String(Ae) : "", { enabled: S && y, playback: w });
  const H = J.beats / 4, ce = [...new Map(J.events.filter((j) => j.position).map((j) => [Je(j.position), j.position])).values()], ue = ce.map((j) => j.fret), q = ce.filter((j) => T || X?.string === j.string && X.fret === j.fret).map((j) => ({
    ...j,
    label: Ie(j.midi),
    kind: X?.string === j.string && X.fret === j.fret ? "playing" : Ye(j.midi) === d.tonic ? "answer" : "shape"
  })), ae = {
    strings: [...new Set(ce.map((j) => j.string))],
    min: Math.min(...ue),
    max: Math.max(...ue),
    fixed: "box"
  };
  async function ne() {
    if (w) {
      $();
      return;
    }
    l?.();
    const j = ++F.current;
    B.current.stop(), E(!0), P(null), V("");
    try {
      await B.current.playTimed(je, f, (te) => {
        j === F.current && P(te);
      }, () => {
        j === F.current && P(null);
      });
    } catch (te) {
      j === F.current && V(Da(te));
    } finally {
      j === F.current && (E(!1), P(null));
    }
  }
  function N(j) {
    $(), V(""), p(j);
  }
  return /* @__PURE__ */ a.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ a.jsxs("details", { onToggle: (j) => {
    const te = j.currentTarget.open;
    v(te), te || $();
  }, children: [
    /* @__PURE__ */ a.jsx("summary", { children: i === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    S && /* @__PURE__ */ a.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: i === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ a.jsx("h4", { children: d.title }),
      /* @__PURE__ */ a.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        H.toString().replace(".", ","),
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
      i !== "memory" && /* @__PURE__ */ a.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: L.map((j) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": ie.id === j.id,
          onClick: () => N(j.id),
          children: j.name
        },
        j.id
      )) }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": w, onClick: () => {
          ne();
        }, children: w ? "■ Pysäytä melodia" : i === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ a.jsx("select", { value: f, onChange: (j) => {
            $(), k(Number(j.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((j, te) => j - te).filter((j, te, de) => de.indexOf(j) === te).map((j) => /* @__PURE__ */ a.jsxs("option", { value: j, children: [
            j,
            " BPM"
          ] }, j)) })
        ] }),
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": y, onClick: () => x((j) => !j), children: y ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      U && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: U }),
      /* @__PURE__ */ a.jsx("p", { className: "melody-now", "aria-live": "polite", children: w && z !== null ? `Nyt soi ${Ie(je[z].midi)} · ${fh[X.string]}-kieli, ${X.fret}. nauha` : w ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ a.jsx(hi, { area: ae, marks: q, disabled: !0, follow: "playing", playback: w, caption: `${d.title}, ${ie.name}` }),
        /* @__PURE__ */ a.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T,
              onClick: () => b((j) => !j),
              children: T ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      y && /* @__PURE__ */ a.jsxs("div", { ref: me, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ a.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${ie.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kieli" }),
            J.events.map((j, te) => /* @__PURE__ */ a.jsxs("th", { scope: "col", className: j.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ a.jsx("span", { className: "melody-bar", children: j.beat % 4 === 0 ? `T${Math.floor(j.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ a.jsx("span", { className: "melody-duration", children: j.duration === 1 ? "♩" : `${j.duration} iskua` })
            ] }, te))
          ] }) }),
          /* @__PURE__ */ a.jsx("tbody", { children: fh.map((j, te) => /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("th", { scope: "row", children: j }),
            J.events.map((de, Te) => {
              const G = de.position?.string === te, K = G && Ae === de.beat;
              return /* @__PURE__ */ a.jsx(
                "td",
                {
                  className: `${de.beat % 4 === 0 ? "bar-start " : ""}${K ? "melody-playing " : ""}${G && Ye(de.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": G ? `${j}-kieli, ${de.position.fret}. nauha, ${Ie(de.position.midi)}` : void 0,
                  children: G ? de.position.fret : "—"
                },
                Te
              );
            })
          ] }, te)) })
        ] }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: d.note }),
      d.source && /* @__PURE__ */ a.jsx("p", { className: "melody-source", children: /* @__PURE__ */ a.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Wo = Ue.fingeringBoxes(9, Ue.SCALES.mp, "pentatonic", [1, 2]), df = [...new Map(Wo.flatMap((s) => s.positions[0].strings.flatMap((i, l) => i.map((u) => {
  const d = Ke(l, u);
  return [Je(d), d];
})))).values()].sort((s, i) => s.midi - i.midi || i.string - s.string), Ra = [5, 4, 3, 2, 1, 0].flatMap((s) => df.filter((i) => i.string === s).sort((i, l) => i.fret - l.fret)), Yo = [
  ...Ra,
  ...Ra.slice(1, -1).reverse()
], Jv = [...Yo, Ra[0]], mh = new Set(
  Wo[0].positions[0].strings.flatMap((s, i) => s.map((l) => {
    const u = Ke(i, l);
    return Je(u);
  })).filter((s) => Wo[1].positions[0].strings.flatMap((i, l) => i.map((u) => Je(Ke(l, u)))).includes(s))
), Xv = [
  Ke(5, 5),
  Ke(5, 8),
  Ke(5, 10),
  Ke(4, 7),
  Ke(4, 10),
  Ke(3, 7),
  Ke(3, 10),
  Ke(3, 7),
  Ke(4, 10),
  Ke(4, 7),
  Ke(5, 10),
  Ke(5, 8),
  Ke(5, 5)
], hf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", ff = "musiikin-kartta:skaalapolku:bridge-tempo:v1", Po = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], ph = (s) => Ye(s) === 9;
function vh() {
  try {
    const s = Number(localStorage.getItem(hf));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function Zv() {
  try {
    const s = Number(localStorage.getItem(ff));
    return Number.isInteger(s) && s >= 40 && s <= 140 && s % 5 === 0 ? s : 75;
  } catch {
    return 75;
  }
}
function qv({ onBack: s, onPosition: i }) {
  const [l, u] = _.useState(vh), [d, h] = _.useState(vh), [p, f] = _.useState(!1), [k, S] = _.useState("roots"), [v, y] = _.useState(Zv), [x, T] = _.useState(null), [b, w] = _.useState(null), [E, z] = _.useState(""), P = _.useRef(new ur()), U = _.useRef(0), V = _.useRef(null), B = b === null ? null : Yo[b];
  function F() {
    V.current?.(), U.current++, P.current.stop(), T(null), w(null);
  }
  _.useEffect(() => {
    const X = () => {
      document.hidden && (U.current++, P.current.stop(), T(null), w(null));
    };
    return document.addEventListener("visibilitychange", X), () => {
      document.removeEventListener("visibilitychange", X), U.current++, P.current.stop();
    };
  }, []);
  async function $(X) {
    V.current?.();
    const me = ++U.current;
    P.current.stop(), w(null), z(""), T(X);
    try {
      X === "transition" ? await P.current.play(Xv.map((H) => H.midi)) : X === "once" ? await P.current.play(Jv.map((H) => H.midi)) : await P.current.loop(Yo.map((H) => H.midi), (H) => {
        me === U.current && w(H);
      }, v);
    } catch (H) {
      me === U.current && z(Da(H));
    } finally {
      me === U.current && (T(null), w(null));
    }
  }
  function L(X) {
    const me = Math.max(40, Math.min(140, X));
    y(me), P.current.setLoopTempo(me);
    try {
      localStorage.setItem(ff, String(me));
    } catch {
    }
  }
  function ie(X) {
    X > l || (F(), h(X), f(!1), S("roots"));
  }
  function J() {
    F();
    const X = Math.min(4, d + 1);
    if (h(X), f(!1), S("roots"), X > l) {
      u(X);
      try {
        localStorage.setItem(hf, String(X));
      } catch {
      }
    }
  }
  const je = (X, me) => d < 2 || d === 2 && p && mh.has(me) || d === 3 && (k === "all" || k === "roots" && ph(X)), Ae = df.filter((X) => je(X.midi, Je(X))).map((X) => ({
    ...X,
    label: d < 2 || d === 2 && p || d === 3 && k === "all" ? Ie(X.midi) : "A",
    kind: d < 2 && B?.string === X.string && B?.fret === X.fret ? "playing" : ph(X.midi) ? "answer" : mh.has(Je(X)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ a.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      F(), s();
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
        F(), i(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
        F(), i(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => ie(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: Po.map((X, me) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: me === d ? "journey-step current" : "journey-step",
        "aria-current": me === d ? "step" : void 0,
        disabled: me > l,
        onClick: () => ie(me),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: me > l ? "🔒" : me < l ? "✓" : me + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: X.title })
        ]
      },
      X.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: Po[d].title }),
        /* @__PURE__ */ a.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: Po[d].detail }),
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
              Ra.length,
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
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => L(v - 5), children: "− 5" }),
          /* @__PURE__ */ a.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => L(v + 5), children: "+ 5" }),
          /* @__PURE__ */ a.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "whole",
              onClick: () => x === "whole" ? F() : void $("whole"),
              children: x === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "once",
              onClick: () => x === "once" ? F() : void $("once"),
              children: x === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "transition",
              onClick: () => x === "transition" ? F() : void $("transition"),
              children: x === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": p, onClick: () => f((X) => !X), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ie(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((X) => /* @__PURE__ */ a.jsxs("label", { children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: X.value,
                  checked: k === X.value,
                  onChange: () => S(X.value)
                }
              ),
              /* @__PURE__ */ a.jsx("span", { children: X.name })
            ] }, X.value))
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => x === "once" ? F() : void $("once"), children: x === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => x === "transition" ? F() : void $("transition"), children: x === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: x === "whole" ? B && d < 2 ? `Nyt soi ${Ie(B.midi, !1, !0)} · ${sn[B.string]}-kieli, nauha ${B.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : x === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : x === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        E && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: E }),
        /* @__PURE__ */ a.jsx(
          hi,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: x,
            marks: Ae,
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
            onBeforePlay: F,
            stopHandleRef: V
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ a.jsx(lf, {}),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: J, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ a.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ie(2), children: "Kertaa muistiharjoitus" }),
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
const tr = "musiikin-kartta:skaalapolku:v1", Ta = "musiikin-kartta:skaalapolku:position-2:v1", Ao = "musiikin-kartta:skaalapolku:position-3:v1", Ma = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Oa = "musiikin-kartta:skaalapolku:active-position:v1", mf = "musiikin-kartta:skaalapolku:tempo:v1", ls = 75, Qo = 40, Jo = 140;
function ek() {
  try {
    const s = localStorage.getItem(mf);
    if (s === null) return ls;
    const i = Number(s);
    return Number.isInteger(i) && i >= Qo && i <= Jo && i % 5 === 0 ? i : ls;
  } catch {
    return ls;
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
];
function Tn(s = tr) {
  try {
    const i = Number(localStorage.getItem(s));
    return Number.isInteger(i) ? Math.max(0, Math.min(4, i)) : 0;
  } catch {
    return 0;
  }
}
function Ro() {
  try {
    const s = localStorage.getItem(Oa);
    return s === "3" && Tn(Ma) === 4 ? 3 : Tn(tr) === 4 && (s === "2" || s === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function tk() {
  try {
    return Tn(Ta) === 4 && localStorage.getItem(Oa) === "bridge";
  } catch {
    return !1;
  }
}
function nk({ onBack: s }) {
  const [i, l] = _.useState(Ro), [u, d] = _.useState(tk), [h, p] = _.useState(() => ({
    1: Tn(tr),
    2: Tn(Ta),
    3: Tn(Ao)
  })), [f, k] = _.useState(() => Tn(Ro() === 3 ? Ao : Ro() === 2 ? Ta : tr)), S = h[i], [v, y] = _.useState(!1), [x, T] = _.useState("roots"), [b, w] = _.useState(ek), [E, z] = _.useState(null), [P, U] = _.useState(null), [V, B] = _.useState(""), F = _.useRef(new ur()), $ = _.useRef(0), L = _.useRef(null);
  function ie(G) {
    const K = Math.max(Qo, Math.min(Jo, G));
    w(K), F.current.setLoopTempo(K);
    try {
      localStorage.setItem(mf, String(K));
    } catch {
    }
  }
  function J() {
    L.current?.(), $.current++, F.current.stop(), z(null), U(null);
  }
  _.useEffect(() => {
    const G = () => {
      document.hidden && ($.current++, F.current.stop(), z(null), U(null));
    };
    return document.addEventListener("visibilitychange", G), () => {
      document.removeEventListener("visibilitychange", G), $.current++, F.current.stop();
    };
  }, []);
  const je = Ue.fingeringBoxes(9, Ue.SCALES.mp, "pentatonic", [i])[0].positions[0], Ae = je.strings.flatMap((G, K) => G.map((W) => Ke(K, W))).sort((G, K) => G.midi - K.midi || K.string - G.string), X = [...Ae, ...Ae.slice(1, -1).reverse()], me = P === null ? null : X[P], H = i === 1 ? [69, 72, 69, 67, 64, 67, 69] : i === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], ce = je.start, ue = je.end, q = (G) => Ye(G) === 9, ae = (G) => f < 2 ? !0 : f === 2 ? v && q(G) : x === "scale" || x === "roots" && q(G), ne = Ae.filter((G) => ae(G.midi)).map((G) => ({
    ...G,
    label: f < 2 || f === 3 && x === "scale" ? Ie(G.midi) : "A",
    kind: f < 2 && me?.string === G.string && me.fret === G.fret ? "playing" : q(G.midi) ? "answer" : "shape"
  }));
  async function N(G) {
    L.current?.();
    const K = ++$.current;
    F.current.stop(), U(null), B(""), z(G);
    try {
      G === "phrase" ? await F.current.play(H) : await F.current.loop(X.map((W) => W.midi), (W) => {
        K === $.current && U(W);
      }, f === 2 ? b : ls);
    } catch (W) {
      K === $.current && B(Da(W));
    } finally {
      K === $.current && (z(null), U(null));
    }
  }
  function j() {
    J();
    const G = Math.min(4, f + 1);
    if (k(G), y(!1), T("roots"), G > S) {
      p((W) => ({ ...W, [i]: G }));
      const K = i === 1 ? tr : i === 2 ? Ta : Ao;
      try {
        localStorage.setItem(K, String(G));
      } catch {
      }
    }
  }
  function te(G) {
    G > S || (J(), k(G), y(!1), T("roots"));
  }
  function de(G) {
    if (!(G === 2 && h[1] < 4) && !(G === 3 && Tn(Ma) < 4)) {
      J(), d(!1), l(G), k(h[G]), y(!1), T("roots"), B("");
      try {
        localStorage.setItem(Oa, String(G));
      } catch {
      }
    }
  }
  function Te() {
    if (!(h[2] < 4)) {
      J(), d(!0), y(!1), B("");
      try {
        localStorage.setItem(Oa, "bridge");
      } catch {
      }
    }
  }
  return u ? /* @__PURE__ */ a.jsx(qv, { onBack: s, onPosition: de }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      J(), s();
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
      ce,
      "–",
      ue,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": i === 1, onClick: () => de(1), children: "Positio 1" }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": i === 2,
          disabled: h[1] < 4,
          onClick: () => de(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          disabled: h[2] < 4,
          onClick: Te,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": i === 3,
          disabled: Tn(Ma) < 4,
          onClick: () => de(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": `Position ${i} harjoitukset`, children: Lo.map((G, K) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: K === f ? "journey-step current" : "journey-step",
        "aria-current": K === f ? "step" : void 0,
        disabled: K > S,
        onClick: () => te(K),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: K > S ? "🔒" : K < S ? "✓" : K + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: K === 4 ? `Positio ${i} harjoiteltu` : G.title })
        ]
      },
      G.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: f === 4 ? `Positio ${i} harjoiteltu` : Lo[f].title }),
        /* @__PURE__ */ a.jsx("span", { children: f === 4 ? "Valmis" : `Harjoitus ${f + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: Lo[f].detail }),
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
              disabled: b <= Qo,
              onClick: () => ie(b - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ a.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            b,
            " BPM"
          ] }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: b >= Jo,
              onClick: () => ie(b + 5),
              children: "+ 5"
            }
          ),
          b !== ls && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => ie(ls),
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
              "aria-pressed": E === "loop",
              onClick: () => E === "loop" ? J() : void N("loop"),
              children: E === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          i !== 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => E === "phrase" ? J() : void N("phrase"), children: E === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        f !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: E === "loop" ? me && f < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Ie(me.midi, !1, !0)} · ${sn[me.string]}-kieli, nauha ${me.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        V && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: V }),
        f >= 1 && f <= 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          f === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": v, onClick: () => y((G) => !G), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => te(1), children: "← Palaa edelliseen opetukseen" })
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
              N("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ a.jsx(hi, { area: { strings: [0, 1, 2, 3, 4, 5], min: ce, max: ue, fixed: "box" }, marks: ne, disabled: !0, follow: "playing", playback: E, caption: `A-mollipentatoninen, positio ${i}` }),
          /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
            f < 2 ? "Vihreällä merkitty A on pohjasävel." : f === 3 ? kh.find((G) => G.value === x).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        f === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(hi, { area: { strings: [0, 1, 2, 3, 4, 5], min: ce, max: ue, fixed: "box" }, marks: ne, disabled: !0, follow: "playing", playback: E, caption: `Position ${i} sävelet` }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        i === 1 && (f === 1 || f === 2) && /* @__PURE__ */ a.jsx(
          au,
          {
            pieceId: "wayfaring",
            stage: f === 1 ? "fingering" : "memory",
            onBeforePlay: J,
            stopHandleRef: L
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
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => te(2), children: "Kertaa muistiharjoitus" }),
        i === 1 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => de(2), children: "Siirry positioon 2 →" }) : i === 2 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: Te, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => de(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        h[1] < 4 ? "🔒 Positio 2" : h[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        h[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Tn(Ma) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const ik = ["ionian", "aeolian"], rs = {
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
      Ke(4, 3),
      Ke(4, 5),
      Ke(3, 2),
      Ke(3, 3),
      Ke(3, 5),
      Ke(2, 2),
      Ke(2, 4),
      Ke(2, 5)
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
      Ke(5, 5),
      Ke(5, 7),
      Ke(5, 8),
      Ke(4, 5),
      Ke(4, 7),
      Ke(4, 8),
      Ke(3, 5),
      Ke(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, pf = (s) => "musiikin-kartta:moodipolku:" + s + ":v1", vf = "musiikin-kartta:moodipolku:active:v1", sk = (s) => {
  const i = rs[s].positions;
  return [...i, ...i.slice(1, -1).reverse()];
}, rk = (s) => [...sk(s), rs[s].positions[0]], yh = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function _a(s) {
  try {
    const i = Number(localStorage.getItem(pf(s)));
    return Number.isInteger(i) ? Math.max(0, Math.min(5, i)) : 0;
  } catch {
    return 0;
  }
}
function gh() {
  try {
    return localStorage.getItem(vf) === "aeolian" && _a("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function ak({ onBack: s }) {
  const [i, l] = _.useState(gh), [u, d] = _.useState(() => ({
    ionian: _a("ionian"),
    aeolian: _a("aeolian")
  })), [h, p] = _.useState(() => _a(gh())), [f, k] = _.useState(null), [S, v] = _.useState(null), [y, x] = _.useState(!1), [T, b] = _.useState("roots"), [w, E] = _.useState(""), [z, P] = _.useState(null), [U, V] = _.useState(null), B = _.useRef(new ur()), F = _.useRef(0), $ = _.useRef(null), L = rs[i], ie = rk(i), J = f === "scale" && S !== null ? ie[S] : null;
  function je() {
    $.current?.(), F.current++, B.current.stop(), k(null), v(null);
  }
  _.useEffect(() => {
    const j = () => {
      document.hidden && (F.current++, B.current.stop(), k(null), v(null));
    };
    return document.addEventListener("visibilitychange", j), () => {
      document.removeEventListener("visibilitychange", j), F.current++, B.current.stop();
    };
  }, []);
  async function Ae(j, te, de = !1) {
    $.current?.();
    const Te = ++F.current;
    B.current.stop(), v(null), E(""), k(j);
    try {
      const G = de ? await B.current.loop(te, void 0, 75) : await B.current.play(te, (K) => {
        Te === F.current && j === "scale" && v(K);
      });
      return Te === F.current && G;
    } catch (G) {
      return Te === F.current && E(Da(G)), !1;
    } finally {
      Te === F.current && (k(null), v(null));
    }
  }
  function X(j) {
    j > u[i] || (je(), p(j), P(null), V(null), x(!1), b("roots"), E(""));
  }
  function me() {
    je();
    const j = Math.min(5, h + 1);
    if (p(j), P(null), V(null), x(!1), b("roots"), j > u[i]) {
      d((te) => ({ ...te, [i]: j }));
      try {
        localStorage.setItem(pf(i), String(j));
      } catch {
      }
    }
  }
  function H(j) {
    if (!(j === "aeolian" && u.ionian < 5)) {
      je(), l(j), p(u[j]), P(null), V(null), x(!1), b("roots"), E("");
      try {
        localStorage.setItem(vf, j);
      } catch {
      }
    }
  }
  async function ce() {
    je(), V(null), P(null);
    const j = Math.random() < 0.5 ? "ionian" : "aeolian";
    await Ae("comparison", rs[j].phrase) && P(j);
  }
  const ue = (j) => Ye(j) === L.tonic, q = L.positions.filter((j) => h < 2 ? !0 : h === 2 ? y && ue(j.midi) : h === 4 ? T === "all" || T === "roots" && ue(j.midi) : !1).map((j) => ({
    ...j,
    label: h === 2 || h === 4 && T === "roots" ? L.tonicName : Ie(j.midi),
    kind: J?.string === j.string && J.fret === j.fret ? "playing" : ue(j.midi) ? "answer" : "shape"
  })), ae = [...new Set(L.positions.map((j) => j.string))], ne = Math.min(...L.positions.map((j) => j.fret)), N = Math.max(...L.positions.map((j) => j.fret));
  return /* @__PURE__ */ a.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      je(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ a.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      ik.indexOf(i) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ a.jsxs("h2", { id: "mode-path-title", children: [
      L.title,
      " · ",
      L.alias
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: L.explanation }),
    /* @__PURE__ */ a.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ a.jsx("strong", { children: L.noteNames }),
      " · Pohjasävel ",
      L.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": i === "ionian", onClick: () => H("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": i === "aeolian",
          disabled: u.ionian < 5,
          onClick: () => H("aeolian"),
          children: [
            "2. A-aiolinen ",
            u.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ a.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      yh.map((j, te) => /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: h === te ? "journey-step current" : "journey-step",
          "aria-current": h === te ? "step" : void 0,
          disabled: te > u[i],
          onClick: () => X(te),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: te > u[i] ? "🔒" : te < u[i] ? "✓" : te + 1 }),
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
          onClick: () => X(5),
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
          L.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          L.contrast
        ] })
      ] }),
      h === 1 && /* @__PURE__ */ a.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      h === 2 && /* @__PURE__ */ a.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        L.tonicName,
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
                ce();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          z !== null && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            Ae("comparison", rs[z].phrase);
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
          L.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          L.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          L.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([j, te]) => /* @__PURE__ */ a.jsxs("label", { children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: j,
                checked: T === j,
                onChange: () => b(j)
              }
            ),
            /* @__PURE__ */ a.jsx("span", { children: te })
          ] }, j))
        ] })
      ] }),
      h === 2 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => x((j) => !j), children: y ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      h < 3 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": f === "scale",
          onClick: () => f === "scale" ? je() : void Ae("scale", ie.map((j) => j.midi)),
          children: f === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      h === 4 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": f === "accompaniment",
          onClick: () => f === "accompaniment" ? je() : void Ae("accompaniment", L.accompaniment, !0),
          children: f === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      h < 2 && f === "scale" && J && /* @__PURE__ */ a.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Ie(J.midi, !1, !0),
        " · ",
        sn[J.string],
        "-kieli, nauha ",
        J.fret,
        "."
      ] }),
      h !== 3 && h !== 5 && /* @__PURE__ */ a.jsx(
        hi,
        {
          area: { strings: ae, min: ne, max: N, fixed: "box" },
          marks: q,
          follow: "playing",
          playback: f,
          disabled: !0,
          caption: L.title + " – yhden oktaavin sormitus"
        }
      ),
      i === "ionian" && (h === 1 || h === 2) && /* @__PURE__ */ a.jsx(
        au,
        {
          pieceId: "nooa",
          stage: h === 1 ? "fingering" : "memory",
          onBeforePlay: je,
          stopHandleRef: $
        },
        `nooa:${h}`
      ),
      w && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: w }),
      h < 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ a.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: me, children: h === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      h === 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsxs("h3", { children: [
          L.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ a.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => X(2), children: "Kertaa muistiharjoitus" }),
        i === "ionian" && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => H("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        i === "aeolian" && /* @__PURE__ */ a.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function lk({ onBack: s }) {
  const [i, l] = _.useState(null);
  return i === "pentatonic" ? /* @__PURE__ */ a.jsx(nk, { onBack: () => l(null) }) : i === "modes" ? /* @__PURE__ */ a.jsx(ak, { onBack: () => l(null) }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
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
function ok({ onBack: s }) {
  const [i, l] = _.useState(0), [u, d] = _.useState([]), [h, p] = _.useState(!1), [f, k] = _.useState(""), [S, v] = _.useState(0), y = i >= Zs.length, x = Zs[Math.min(i, Zs.length - 1)], T = hs(wa.strings, wa.min, wa.max).filter((B) => Ye(B.midi) === x), b = T.filter((B) => !u.includes(Je(B))), w = b.length === 0 && !y, E = !w && h ? b[0] : void 0, z = [
    ...T.filter((B) => u.includes(Je(B))).map((B) => ({ ...B, kind: "answer", label: Ie(B.midi) })),
    ...E ? [{ ...E, kind: "anchor", label: "?" }] : []
  ];
  function P(B) {
    if (y || w) return;
    const F = Je(B);
    if (Ye(B.midi) !== x) {
      v((ie) => ie + 1), k(`Valitsit sävelen ${Ie(B.midi)}. Etsi ${Ie(x)}.`);
      return;
    }
    if (u.includes(F)) {
      k("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const $ = [...u, F];
    d($), p(!1);
    const L = T.length - $.length;
    k(L ? `Oikein! ${Ie(x)} löytyi ${sn[B.string]}-kieleltä (${bi(B.fret)}). Vielä ${L}.` : `Löysit kaikki ${T.length} ${Ie(x)}-säveltä tällä alueella.`);
  }
  function U() {
    w && (l((B) => B + 1), d([]), p(!1), k(""));
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
          Ie(x),
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
        Ie(x),
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
          disabled: w,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "p",
        {
          className: w ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: f
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        !w && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => p((B) => !B),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        w && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: U, children: i === Zs.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" })
      ] })
    ] }) })
  ] });
}
const uk = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Oo = ["C", "G", "D", "Em"], xh = ["C", "G", "D", "Em", "Am", "E", "A"], ck = { min: 0, max: 3, fixed: "" };
function jh(s) {
  const i = [...s];
  for (let l = i.length - 1; l > 0; l--) {
    const u = Math.floor(Math.random() * (l + 1));
    [i[l], i[u]] = [i[u], i[l]];
  }
  return i;
}
function dk({ onBack: s }) {
  const [i, l] = _.useState(4), [u, d] = _.useState(() => jh(Oo)), [h, p] = _.useState(0), [f, k] = _.useState(null), [S, v] = _.useState([]), [y, x] = _.useState(0), T = h >= u.length, b = uk[u[Math.min(h, u.length - 1)]], w = i === 4 ? Oo : xh, E = b.frets.flatMap(($, L) => $ === null ? [] : [L]), z = b.frets.flatMap(($, L) => $ === null ? [L] : []), P = { ...ck, strings: E }, U = b.frets.flatMap(($, L) => $ === null ? [] : [{
    ...Ke(L, $),
    kind: $ === 0 ? "anchor" : "shape",
    label: $ === 0 ? "○" : "●"
  }]);
  function V($ = i) {
    l($), d(jh($ === 4 ? Oo : xh)), p(0), k(null), v([]), x(0);
  }
  function B($) {
    f || T || S.includes($) || ($ === b.name ? k($) : (v((L) => [...L, $]), x((L) => L + 1)));
  }
  function F() {
    f && (p(($) => $ + 1), k(null), v([]));
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
      /* @__PURE__ */ a.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map(($) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: f === $ ? "right" : S.includes($) ? "wrong" : "",
          disabled: !!f || S.includes($),
          "aria-pressed": f === $,
          onClick: () => B($),
          children: $
        },
        $
      )) }),
      /* @__PURE__ */ a.jsx(
        "p",
        {
          className: f ? "feedback good" : S.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: f ? `Oikein! Tämä on ${b.name}-sointu.` : S.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      f && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: F, children: h === u.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
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
], hk = [
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
  acoustic: hk,
  normal: fk
}, mk = "normal", Xo = "yksi-sointu-kaksi-askelta", lu = {
  acoustic: Xo + "-akustinen",
  normal: Xo + "-normaali"
}, yf = (s) => s === Xo || Object.values(lu).includes(s ?? "");
function pk(s) {
  const i = Object.entries(lu).find(([, l]) => l === s);
  return i ? i[0] : null;
}
const vk = (s) => lu[s], Sh = (s) => {
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
function kk(s) {
  return fs[s].flatMap((i, l) => i.bars.flatMap((u, d) => {
    const h = lr(l, d, s), p = { section: i, sectionIndex: l, barIndex: d, part: "first", chord: u.first, time: h };
    if (!u.second) return [p];
    const f = ou(l, s) / 2;
    return [p, { ...p, part: "second", chord: u.second, time: h + f }];
  }));
}
function yk(s, i = "acoustic", l = !1) {
  const u = fs[i], d = uu(s, i), h = d.section.bars[d.barIndex], p = d.beat >= 3 && h.second ? "second" : "first", f = kk(i), k = f.findIndex((T) => T.sectionIndex === d.sectionIndex && T.barIndex === d.barIndex && T.part === p), v = [
    ...f.slice(k + 1).map((T) => ({ ...T, wrapped: !1 })),
    ...l ? f.slice(0, k + 1).map((T) => ({ ...T, wrapped: !0 })) : []
  ].find((T) => T.chord !== d.chord) ?? null;
  let y = null;
  const x = d.sectionIndex === u.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!x || l)) {
    const T = x ? 0 : d.sectionIndex + 1, b = u[T], w = b.bars[0].first;
    y = {
      section: b,
      sectionIndex: T,
      firstChord: w,
      wrapped: x,
      continues: w === (h.second ?? h.first)
    };
  }
  return { nextChord: v, nextSection: y };
}
function gk(s) {
  const i = s.filter((f) => f.lyrics?.length), l = (f) => 1 + (f.lyrics?.length ?? 0), u = i.reduce((f, k) => f + l(k), 0);
  let d = 0, h = 1 / 0, p = 0;
  for (let f = 0; f <= i.length; f++) {
    const k = Math.abs(u - 2 * p);
    (k < h || k === h && p >= u - p) && (d = f, h = k), f < i.length && (p += l(i[f]));
  }
  return [i.slice(0, d), i.slice(d)];
}
const Zo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], gf = "musiikin-kartta:kappale-sointuvihjeet:v1", ba = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, wh = {
  showChords: !0,
  level: 0,
  fadeOrder: ba
};
function Ea(s, i) {
  return !i.showChords || i.level >= i.fadeOrder[s];
}
function Eh(s) {
  if (!s) return { ...wh, fadeOrder: { ...ba } };
  try {
    const i = JSON.parse(s);
    if (!i || typeof i != "object") throw new Error("Invalid settings");
    const l = i, u = l.level, d = { ...ba }, h = l.fadeOrder;
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
    return { ...wh, fadeOrder: { ...ba } };
  }
}
function xk() {
  try {
    return Eh(localStorage.getItem(gf));
  } catch {
    return Eh(null);
  }
}
const jk = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Sk(s) {
  const i = jk.exec(s.trim());
  if (!i) return s;
  const [, l, , u = "", d = ""] = i;
  return l + "5" + u + d;
}
const wk = (s, i) => i === "power" ? Sk(s) : s, Ek = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Nk = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Ck({ version: s, position: i, loop: l = !1, onSeek: u }) {
  const [d, h] = _.useState(xk), [p, f] = _.useState(null), [k, S] = _.useState(!1), [v, y] = _.useState("full"), x = (H) => wk(H, v), T = fs[s], b = uu(i, s), { section: w, sectionIndex: E, barIndex: z, beat: P, chord: U } = b, V = P >= 3 && w.bars[z].second ? "second" : "first", B = (H, ce, ue) => `${s}:${H}:${ce}:${ue}`, F = (H, ce) => B(w.id, H, ce), $ = F(z, V), L = Ea(U, d), ie = L && p === $, J = (H, ce, ue) => !Ea(H, d) || p === F(ce, ue), je = d.showChords && d.level === 0, Ae = Zo.filter((H) => Ea(H, d)).length, { nextSection: X } = yk(i, s, l), me = !!X && Ea(X.firstChord, d);
  return _.useEffect(() => {
    f(null);
  }, [$]), _.useEffect(() => {
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
            onChange: (H) => {
              h((ce) => ({ ...ce, showChords: H.target.checked })), f(null);
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
            onChange: (H) => S(H.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([H, ce]) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: H,
              checked: v === H,
              onChange: () => y(H)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: ce })
        ] }, H))
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (H) => {
              const ce = Number(H.target.value);
              h((ue) => ({ ...ue, level: ce })), f(null);
            },
            children: Ek.map((H) => /* @__PURE__ */ a.jsx("option", { value: H.value, children: H.label }, H.value))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Ae === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Ae}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ a.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ a.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ a.jsx("div", { className: "song-fade-order", children: Zo.map((H) => /* @__PURE__ */ a.jsxs("label", { children: [
        H,
        /* @__PURE__ */ a.jsx(
          "select",
          {
            "aria-label": H + ": piilotusvaihe",
            value: d.fadeOrder[H],
            onChange: (ce) => {
              const ue = Number(ce.target.value);
              h((q) => ({ ...q, fadeOrder: { ...q.fadeOrder, [H]: ue } })), f(null);
            },
            children: Nk.map((ce) => /* @__PURE__ */ a.jsx("option", { value: ce.value, children: ce.label }, ce.value))
          }
        )
      ] }, H)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ a.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (H) => {
              const ce = T.find((ue) => ue.id === H.target.value);
              ce && u(ce.start);
            },
            children: T.map((H) => /* @__PURE__ */ a.jsxs("option", { value: H.id, children: [
              Sh(H.start),
              " · ",
              H.title
            ] }, H.id))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ a.jsxs("p", { className: "song-current-chord", children: [
          L && !ie ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ a.jsx("strong", { children: L && !ie ? "?" : x(U) }),
          /* @__PURE__ */ a.jsxs("span", { children: [
            w.title,
            ", tahti ",
            z + 1,
            ", isku ",
            P,
            "/4"
          ] }),
          L && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => f(ie ? null : $),
              children: ie ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        X && /* @__PURE__ */ a.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ a.jsx("strong", { children: me ? "?" : x(X.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((H, ce) => {
      const ue = ce === z, q = ue && (P < 3 || !H.second), ae = ue && P >= 3 && !!H.second, ne = J(H.first, ce, "first"), N = H.second ? J(H.second, ce, "second") : !1, j = (ne ? x(H.first) : "sointu piilossa") + (H.second ? " " + (N ? x(H.second) : "sointu piilossa") : "") + (je && H.passingBass ? " (basson kulku " + H.passingBass + ")" : "") + (je && H.possibleChord ? " (" + x(H.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (ue ? " active" : ""),
          "aria-pressed": ue,
          "aria-label": "Tahti " + (ce + 1) + ": " + j + ". Siirry kohtaan " + Sh(lr(E, ce, s)),
          onClick: () => u(lr(E, ce, s)),
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ce + 1
            ] }),
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ a.jsx("strong", { className: q && ne ? "now" : "", children: ne ? x(H.first) : "?" }),
              H.second && /* @__PURE__ */ a.jsx("strong", { className: ae && N ? "now" : "", children: N ? x(H.second) : "?" })
            ] }),
            je && H.passingBass && /* @__PURE__ */ a.jsxs("small", { children: [
              "Basso: (",
              H.passingBass,
              "), isku 4"
            ] }),
            je && H.possibleChord && /* @__PURE__ */ a.jsxs("small", { children: [
              "Mahdollinen (",
              x(H.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ce
      );
    }) }),
    k ? /* @__PURE__ */ a.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ a.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ a.jsx("div", { className: "song-all-lyrics-grid", children: gk(T).map((H, ce) => /* @__PURE__ */ a.jsx("div", { className: "song-lyrics-column", children: H.map((ue) => /* @__PURE__ */ a.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ a.jsx("h5", { children: ue.title }),
        ue.lyrics?.map((q, ae) => /* @__PURE__ */ a.jsx("p", { children: q }, ae))
      ] }, ue.id)) }, ce)) }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ a.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ a.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((H, ce) => /* @__PURE__ */ a.jsx("p", { children: H }, ce))
    ] }),
    je && w.note && /* @__PURE__ */ a.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const $a = 7, Tk = { name: "bluesasteikko", base: Ue.SCALES.mp.base, add: [[6, "♭5"]] }, $o = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: Ue.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: Tk,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: Ue.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function Mk(s) {
  return Ue.scaleNotes(s).map(([i, l]) => Ue.noteName($a, i, l));
}
const xf = (s) => s === "pentatonic" ? 5 : 7;
function _k(s, i, l) {
  const u = i.filter((f) => f >= 1 && f <= xf(s.system)), d = Ue.fingeringBoxes($a, s.scale, s.system, u, l);
  if (s.id !== "blues") return d;
  const h = s.scale.add.map(([f]) => ($a + f) % 12), p = (f, k) => k >= 0 && k <= l && h.includes((Ue.OPEN_PITCHES[f] + k) % 12);
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
function bk({ open: s }) {
  const [i, l] = _.useState("mp"), [u, d] = _.useState({ pentatonic: [], "3nps": [] }), [h, p] = _.useState(!1), [f, k] = _.useState(!1), S = _.useRef(null), v = $o.find((E) => E.id === i) ?? $o[0], y = u[v.system], x = _k(v, y, Nh), T = x.some((E) => E.positions.length > 0), b = Ue.renderBoard($a, v.scale, Nh, {
    automatic: !0,
    boxes: x,
    onlyBoxNotes: T && h,
    label: v.title + (y.length ? ", " + y.map((E) => "boksi " + E).join(", ") : "")
  });
  _.useEffect(() => {
    const E = S.current;
    !E || !s || x.length === 1 && Ue.revealPositions(E, ".box-highlight");
  }, [b, s]);
  function w(E, z) {
    d((P) => ({ ...P, [v.system]: z ? [...P[v.system], E].sort((U, V) => U - V) : P[v.system].filter((U) => U !== E) }));
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ a.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ a.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ a.jsx("select", { value: i, onChange: (E) => l(E.target.value), children: $o.map((E) => /* @__PURE__ */ a.jsx("option", { value: E.id, children: E.title }, E.id)) })
    ] }) }),
    /* @__PURE__ */ a.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ a.jsx("strong", { children: v.title }),
      /* @__PURE__ */ a.jsx("span", { children: Mk(v.scale).join(" · ") })
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
        dangerouslySetInnerHTML: { __html: b }
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
      /* @__PURE__ */ a.jsx("summary", { onClick: (E) => {
        E.preventDefault(), k((z) => !z);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ a.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ a.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: xf(v.system) }, (E, z) => z + 1).map((E) => /* @__PURE__ */ a.jsxs("label", { className: "box-toggle", "data-box": E, children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            value: E,
            checked: y.includes(E),
            onChange: (z) => w(E, z.target.checked)
          }
        ),
        " Boksi ",
        E
      ] }, v.system + E)) }),
      /* @__PURE__ */ a.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: T && h,
            disabled: !T,
            onChange: (E) => p(E.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: T ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
const St = ["backing", "guitar", "vocals"], Pk = 0.05, Ak = 5e-3;
function Lk(s) {
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
const ci = 1152, Rk = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320], Ok = [44100, 48e3, 32e3];
function Pa(s) {
  let i = 0;
  for (s.length >= 10 && s[0] === 73 && s[1] === 68 && s[2] === 51 && (i = 10 + ((s[6] & 127) << 21 | (s[7] & 127) << 14 | (s[8] & 127) << 7 | s[9] & 127) + (s[5] & 16 ? 10 : 0)); i + 4 <= s.length && !(s[i] === 255 && (s[i + 1] & 224) === 224); ) i++;
  const l = [];
  let u = 0, d = 0, h = i;
  for (; h + 4 <= s.length && s[h] === 255 && (s[h + 1] & 224) === 224; ) {
    const T = s[h + 1], b = s[h + 2], w = s[h + 3];
    if ((T >> 3 & 3) !== 3 || (T >> 1 & 3) !== 1) throw new Error("MP3: vain MPEG-1 Layer III on tuettu");
    const E = Rk[b >> 4 & 15] * 1e3, z = Ok[b >> 2 & 3];
    if (!E || !z) throw new Error(`MP3: virheellinen kehysotsake kohdassa ${h}`);
    const P = Math.floor(144 * E / z) + (b >> 1 & 1);
    if (h + P > s.length) break;
    if (!u)
      u = z, d = (w >> 6 & 3) === 3 ? 1 : 2;
    else if (z !== u) throw new Error("MP3: näytetaajuus vaihtuu kesken tiedoston");
    l.push(h), h += P;
  }
  if (!l.length) throw new Error("MP3: kehyksiä ei löytynyt");
  let p = 0, f = 0, k = 0;
  const S = l[0] + 4 + (d === 1 ? 17 : 32), v = String.fromCharCode(...s.subarray(S, S + 4));
  if (v === "Xing" || v === "Info") {
    k = 1;
    const T = s[S + 7], b = S + 8 + (T & 1 ? 4 : 0) + (T & 2 ? 4 : 0) + (T & 4 ? 100 : 0) + (T & 8 ? 4 : 0), w = s.subarray(b, b + 4);
    if (b + 24 <= l[1] && w.length === 4 && [...w].every((E) => E >= 32 && E < 127)) {
      const E = b + 21;
      p = s[E] << 4 | s[E + 1] >> 4, f = (s[E + 1] & 15) << 8 | s[E + 2];
    }
  }
  const y = Uint32Array.from(l.slice(k)), x = Math.max(0, y.length * ci - p - f);
  return { sampleRate: u, channels: d, frameOffsets: y, dataEnd: h, delay: p, padding: f, length: x };
}
const jf = 2, $k = 1;
function Io(s, i, l, u = 0) {
  const d = i + s.delay, h = d + l, p = s.frameOffsets.length, f = Math.max(0, Math.floor(d / ci) - jf), k = Math.min(p, Math.ceil(h / ci) + $k + Math.ceil(u / ci));
  return { firstFrame: f, endFrame: k, skip: d - f * ci + u };
}
const Ik = [[100, 160], [1e3, 1060], [3e3, 3060]], nr = 2048, Dn = (jf + 1) * ci;
function Sf(s) {
  if (s.length < Dn + nr) return !1;
  let i = 0;
  for (let l = Dn; l < Dn + nr; l++) i += s[l] * s[l];
  return i >= 1e-6;
}
function Fk(s, i, l, u, d = 1700) {
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
function Fo(s, i, l) {
  const u = l.endFrame < i.frameOffsets.length ? i.frameOffsets[l.endFrame] : i.dataEnd;
  return s.slice(i.frameOffsets[l.firstFrame], u);
}
function Dk(s, i) {
  let l;
  try {
    l = Pa(s);
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
function zk(s) {
  return s.length < 10 ? null : (s[0] === 73 && s[1] === 68 && s[2] === 51 ? 10 + ((s[6] & 127) << 21 | (s[7] & 127) << 14 | (s[8] & 127) << 7 | s[9] & 127) + (s[5] & 16 ? 10 : 0) : 0) + 5 * 1441;
}
class Bk {
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
const Ch = 16, Vk = 0.8;
function Kk(s, i) {
  if (s.done) return !0;
  const l = s.layout;
  if (!l || i <= 0) return !1;
  const u = l.frameOffsets[0], d = (s.total - u) / i, h = u + d * Ch + 4 * (l.frameOffsets[1] - u);
  if (s.received < h) return !1;
  const p = s.rate();
  if (p === null) return !1;
  const f = s.total - Vk * p * Math.max(0, i - Ch);
  return s.received >= f;
}
const Uk = 10, Th = 4, Hk = 6, Gk = 400, Wk = 256, Yk = 480;
class Mh extends Error {
}
class _h extends Error {
}
const wf = (s, i) => i ? wf(i, s % i) : s, bh = (s, i) => i < s.frameOffsets.length ? s.frameOffsets[i] : s.dataEnd;
class Na {
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
          const b = await this.fetchImpl(i[T], { signal: u.signal });
          if (!b.ok) throw new Error(`${T}: HTTP ${b.status}`);
          const w = new Uint8Array(await b.arrayBuffer());
          return this.record("ladattu", { track: T, bytes: w.byteLength, kesto: Math.round(this.now() - h) }), w;
        }));
        if (!d()) return "peruttu";
        St.forEach((T, b) => {
          p[T] = { bytes: x[b], layout: Pa(x[b]) };
        }), this.setState("puretaan");
      }
      if (new Set(St.map((x) => p[x].layout.sampleRate)).size !== 1) throw new Error("Raitojen näytetaajuudet eroavat");
      const k = p.backing.layout.sampleRate, S = Math.max(...St.map((x) => p[x].layout.channels));
      (k !== this.rate || S !== this.channels) && (this.slots = []), this.rate = k, this.channels = S;
      const v = this.grid;
      if (v > Yk) throw new _h(`Äänikontekstin näytetaajuus ${this.context.sampleRate} Hz ei sovi ${k} Hz:n raitojen näytetarkkaan paloitukseen`);
      if (this.length = Math.floor(Math.min(...St.map((x) => p[x].layout.length)) / v) * v, this.data = p, this.gen++, k !== this.context.sampleRate && this.record("naytetaajuus-ero", { mp3: k, konteksti: this.context.sampleRate, ruudukko: v }), this.decoderDelay === null && await this.calibrate(p, d), !d()) return "peruttu";
      const y = await this.obtain(0);
      if (!d()) return "peruttu";
      if (!y) throw new Error("Puskurialtaassa ei ole tilaa");
      if (this.streams.length) {
        for (; !this.streams.every((x) => Kk(x, this.duration)); ) {
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
    }, Gk), this.pump(), !0;
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
    typeof u.setTargetAtTime == "function" ? u.setTargetAtTime(l, this.context.currentTime, Ak) : u.value = l;
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
    const h = Io(d.layout, l, u, this.decoderDelay ?? 0);
    await d.ready?.(bh(d.layout, h.endFrame));
    const p = await this.decoder().decodeAudioData(Fo(d.bytes, d.layout, h).buffer);
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
        return this.record("ladattu", { track: f, bytes: T.byteLength, kesto: Math.round(this.now() - u), virta: !1 }), [f, { bytes: T, layout: Pa(T) }];
      }
      const v = new Bk(S, this.now);
      h.push(v), v.run(k.body).then(() => {
        v.done && this.record("ladattu", { track: f, bytes: S, kesto: Math.round((v.doneAt ?? this.now()) - u), virta: !0 });
      }), await v.waitForBytes(10);
      const y = Math.min(S, zk(v.bytes.subarray(0, v.received)) ?? S);
      await v.waitForBytes(y), this.record("ensitavut", { track: f, kesto: Math.round((v.firstByteAt ?? this.now()) - u) });
      let x = Dk(v.bytes.subarray(0, Math.max(y, v.received)), S);
      if (x || (this.record("virta-ei-ennustetta", { track: f }), await v.waitForBytes(S), x = Pa(v.bytes)), v.useLayout(x), v.error) throw v.error;
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
      const f = i[p].layout.frameOffsets.length, k = Ik.filter(([, S]) => f > S + 2);
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
      const y = await u.decodeAudioData(Fo(S, v, { firstFrame: f, endFrame: k }).buffer);
      if (!l()) return;
      if (!Sf(y.getChannelData(0))) {
        d.push(`${p}@${f}: hiljainen`);
        continue;
      }
      const x = await u.decodeAudioData(S.slice(0, v.frameOffsets[k]).buffer);
      if (!l()) return;
      const T = Fk(x.getChannelData(0), y.getChannelData(0), v, f);
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
    return Math.floor(Math.round(Uk * this.rate) / i) * i;
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
      const f = this.decoder(), S = St.map((y) => Io(l[y].layout, d, h, this.decoderDelay ?? 0)).map((y, x) => bh(l[St[x]].layout, y.endFrame));
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
        const { bytes: x, layout: T } = l[y], b = Io(T, d, h, this.decoderDelay ?? 0), w = await f.decodeAudioData(Fo(x, T, b).buffer);
        return { track: y, buffer: w, plan: b };
      }));
      if (i.filling = !1, u !== this.gen)
        return i.gen = -1, null;
      for (const { track: y, buffer: x, plan: T } of v) {
        const b = i.buffers[y];
        for (let w = 0; w < b.numberOfChannels; w++) {
          const E = x.getChannelData(Math.min(w, x.numberOfChannels - 1)).subarray(T.skip, T.skip + h);
          b.copyToChannel(E, w, 0), E.length < h && (b.copyToChannel(new Float32Array(h - E.length), w, E.length), this.record("pala-lyhyt", { track: y, start: d, puuttuu: h - E.length }));
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
        if (!i || i.ending || i.nextFrame !== null && i.nextFrame / this.context.sampleRate - this.context.currentTime >= Hk) return;
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
    const d = this.context.sampleRate, h = u - l.start, p = l.length - h, f = Math.ceil((this.context.currentTime + Pk) * d);
    let k = i.nextFrame ?? f;
    i.nextFrame !== null && i.nextFrame < Math.ceil(this.context.currentTime * d) + Wk && (this.record("alivuoto", { myohassa: Math.round((this.context.currentTime * d - i.nextFrame) / d * 1e3) }), k = f);
    const S = k / d, v = Math.round(p * d / this.rate), y = St.map((T) => {
      const b = this.context.createBufferSource();
      return b.buffer = l.buffers[T], b.connect(this.inputs[T]), b.start(S, h / this.rate), b.stop((k + v) / d), b;
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
const Qk = 250, Jk = 1e3, Ef = 0.5, Xk = 2e3;
class Zk {
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
  status(i = Qk) {
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
async function qk(s, i = Xk) {
  try {
    return s.state === "closed" ? { ok: !1, reason: "konteksti suljettu" } : (typeof s.suspend == "function" && s.state === "running" && await Ph(s.suspend(), i, "suspend"), s.state === "closed" ? { ok: !1, reason: "konteksti suljettu" } : (await Ph(s.resume(), i, "resume"), s.state !== "running" ? { ok: !1, reason: `tila ${s.state}` } : { ok: !0 }));
  } catch (l) {
    const u = l instanceof DOMException || l instanceof Error ? l.name : "", d = l instanceof Error ? l.message : String(l);
    return { ok: !1, reason: u && u !== "Error" ? `${u}: ${d}` : d };
  }
}
async function ey(s, {
  ms: i = 300,
  now: l = () => performance.now(),
  wait: u = (d) => new Promise((h) => setTimeout(h, d))
} = {}) {
  const d = s(), h = l();
  await u(i);
  const p = (s() - d) * 1e3, f = l() - h;
  return p >= Ef * Math.max(i, f);
}
const ty = 2e3, Do = { visible: !1, text: "", percent: null, announce: "" };
function ny(s) {
  return s.complete ? 100 : s.total ? Math.min(99, Math.floor(s.received / s.total * 100)) : null;
}
class iy {
  sawIncomplete = !1;
  doneUntil = 0;
  announcedStart = !1;
  update(i, l, u) {
    if (!i || l === "tyhja" || l === "virhe")
      return this.reset(), Do;
    if (!i.complete) {
      this.doneUntil = 0;
      const d = ny(i);
      if (d === null && l === "ladataan") return Do;
      this.sawIncomplete = !0;
      const h = this.announcedStart ? "" : "Kappaleen lataus jatkuu taustalla.";
      return this.announcedStart = !0, d === null ? { visible: !0, text: "Ladataan kappaletta…", percent: null, announce: h } : { visible: !0, text: `Ladattu ${d} %`, percent: d, announce: h };
    }
    return this.sawIncomplete ? (this.sawIncomplete = !1, this.doneUntil = u + ty, { visible: !0, text: "Ladattu 100 %", percent: 100, announce: "Kappale ladattu." }) : u < this.doneUntil ? { visible: !0, text: "Ladattu 100 %", percent: 100, announce: "" } : Do;
  }
  reset() {
    this.sawIncomplete = !1, this.doneUntil = 0, this.announcedStart = !1;
  }
}
const sy = { visible: !1, text: "", percent: null, announce: "" }, ry = 1e3;
function ay({ read: s, state: i }) {
  const l = _.useRef(new iy()), [u, d] = _.useState(sy), h = _.useRef(s);
  h.current = s, _.useEffect(() => {
    const f = setInterval(() => {
      const k = h.current(), S = l.current.update(k?.status ?? null, k?.state ?? "tyhja", performance.now());
      d((v) => v.visible === S.visible && v.text === S.text && v.percent === S.percent && (S.announce === "" || v.announce === S.announce) && (S.visible || v.announce === "") ? v : { ...S, announce: S.visible ? S.announce || v.announce : "" });
    }, ry);
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
const ly = _.memo(ay, (s, i) => s.state === i.state), cr = typeof location < "u" ? new URLSearchParams(location.search) : new URLSearchParams(), oy = cr.get("soitin") === "vanha", nn = !oy, uy = nn && (cr.has("valjas") || typeof navigator < "u" && navigator.webdriver === !0), cy = Number(cr.get("naytetaajuus")) || 48e3, dy = nn && cr.get("lataus") !== "koko", Ah = nn && cr.get("diag") === "1";
function hy() {
  const s = new URL(location.href);
  return s.searchParams.set("soitin", "vanha"), s.pathname + s.search + s.hash;
}
function fy(s) {
  const i = s.events, l = i.find((f) => f.kind === "lataus-alku")?.ms;
  if (l === void 0) return "Ei latausta vielä.";
  const u = [`ladattu ${Math.round(s.downloadProgress * 100)} %${s.waiting ? ", odottaa latausta" : ""}`], d = i.find((f) => f.kind === "pala"), h = i.find((f) => f.kind === "soitto");
  for (const f of i)
    !["ensitavut", "kalibroitu", "alku-valmis", "valmis", "ladattu", "virhe", "odottaa-latausta", "alivuoto"].includes(f.kind) && f !== d && f !== h || u.push(`${String(f.ms - l).padStart(6)} ms ${f.kind}${f.track ? " " + f.track : ""}${typeof f.kesto == "number" && f.kind === "pala" ? ` (purku ${f.kesto} ms)` : ""}`);
  const p = typeof performance < "u" && performance.getEntriesByType ? performance.getEntriesByType("resource") : [];
  for (const f of p.filter((k) => /\.mp3(\?|$)/.test(k.name)).slice(-6))
    u.push(`${f.name.split("/").pop()}: ${f.nextHopProtocol || "?"} ${Math.round(f.transferSize / 1024)} kt, vastaus ${Math.round(f.responseStart - f.startTime)} ms, kesto ${Math.round(f.duration)} ms`);
  return u.join(`
`);
}
let Nf = null;
function my() {
  return pk(new URLSearchParams(location.search).get("kappale")) ?? Nf ?? mk;
}
function py(s) {
  Nf = s;
  const i = new URL(location.href);
  yf(i.searchParams.get("kappale")) && (i.searchParams.set("kappale", vk(s)), history.replaceState(history.state, "", i.pathname + i.search + i.hash));
}
const vy = {
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
function ky({ onBack: s }) {
  const i = _.useRef(null), l = _.useRef(null), u = _.useRef(null), d = _.useRef(0), h = _.useRef(new af()), p = _.useRef(null), f = _.useRef(null), k = _.useRef(0), S = _.useRef(new Zk()), v = _.useRef(!1), y = _.useRef(!1), [x, T] = _.useState(""), [b, w] = _.useState(!1), [E, z] = _.useState("tyhja"), [P, U] = _.useState(!1), [V, B] = _.useState("");
  _.useEffect(() => {
    if (!Ah) return;
    const D = setInterval(() => {
      const oe = f.current?.player;
      oe instanceof Na && B(fy(oe));
    }, 500);
    return () => clearInterval(D);
  }, []);
  const [F, $] = _.useState(my), L = vy[F], [ie, J] = _.useState(!1), [je, Ae] = _.useState(!0), [X, me] = _.useState(!0), [H, ce] = _.useState(!1), [ue, q] = _.useState(!1), [ae, ne] = _.useState(!1), [N, j] = _.useState(av), [te] = _.useState(() => xv()), de = _.useRef(null), [Te, G] = _.useState(""), [K, W] = _.useState(0), [Y, ve] = _.useState(0), [Me, le] = _.useState("");
  function ke(D = !1, oe, ge) {
    const re = i.current;
    if (re)
      for (const $e of [l.current, u.current])
        $e && (!oe || $e === oe) && h.current.align(re, $e, D, void 0, ge);
  }
  function Ne() {
    return [
      ["backing", i.current, !0],
      ["guitar", l.current, je],
      ["vocals", u.current, X]
    ];
  }
  function Le(D = N, oe) {
    if (nn) {
      const ge = f.current?.player;
      if (ge) for (const [re, , $e] of Ne()) ge.setLevel(re, To(re, D, oe?.[re] ?? $e));
      return;
    }
    for (const [ge, re, $e] of Ne()) {
      if (!re) continue;
      const xe = To(ge, D, oe?.[ge] ?? $e);
      if (te === "webaudio" && de.current?.routed(re))
        de.current.setLevel(re, xe);
      else
        try {
          re.volume = To(ge, D);
        } catch {
        }
    }
  }
  function _e(D) {
    j(D), lv(D), Le(D);
  }
  function Fe() {
    if (nn) {
      const D = f.current?.player;
      D?.playing && W(D.pause());
    }
    d.current++, i.current?.pause(), l.current?.pause(), u.current?.pause(), J(!1);
  }
  function nt(D) {
    if (D !== F) {
      nn && (k.current++, f.current?.player.release()), p.current = null, Fe();
      for (const oe of [i.current, l.current, u.current])
        if (oe)
          try {
            oe.currentTime = 0;
          } catch {
          }
      W(0), ve(0), le(""), $(D), py(D);
    }
  }
  function He(D) {
    if (nn) {
      const re = f.current?.player, $e = Math.max(0, Math.min(D, Y > 0 ? Y : D));
      W($e), re?.state === "valmis" ? re.seek($e) : p.current = $e;
      return;
    }
    const oe = i.current;
    if (!oe || !Number.isFinite(D)) return;
    const ge = Math.max(0, Math.min(D, Number.isFinite(oe.duration) ? oe.duration : D));
    p.current = ge, W(ge), Rh(oe, ge);
  }
  function Xe(D) {
    const oe = p.current;
    if (oe === null || D !== i.current || D.seeking) return;
    const ge = Number.isFinite(D.duration) ? Math.min(oe, D.duration) : oe;
    if (ge !== oe && (p.current = ge, W(ge)), Math.abs(D.currentTime - ge) < Lh) return;
    const re = D.seekable;
    for (let $e = 0; $e < re.length; $e++)
      if (re.start($e) <= ge && ge <= re.end($e)) {
        Rh(D, ge);
        return;
      }
  }
  function st(D) {
    if (D !== i.current) return;
    const oe = p.current;
    if (oe === null)
      W(D.currentTime);
    else if (D.readyState >= 1 && !D.seeking && Math.abs(D.currentTime - oe) < Lh) {
      p.current = null, ke(!0);
      return;
    }
    D.paused || ke();
  }
  function yt() {
    if (f.current) return f.current;
    try {
      const D = Lk({ sampleRate: cy }), oe = new Na(D, { progressive: dy });
      return oe.onStateChange = z, oe.onWaitingChange = U, oe.onError = (ge) => {
        J(!1), W(oe.position()), le(`Toisto keskeytyi (${ge}). Paina Soita uudelleen.`);
      }, oe.onEnded = () => {
        J(!1), W(oe.duration);
      }, D.onstatechange = () => {
        D.state !== "running" && oe.playing && (W(oe.pause()), J(!1));
      }, S.current.reset(), v.current = !1, f.current = { context: D, player: oe }, uy && (window.__kappaleD1 = { context: D, player: oe }), f.current;
    } catch (D) {
      return le("Web Audio ei ole käytettävissä tässä selaimessa. " + (D instanceof Error ? D.message : "")), w(!0), null;
    }
  }
  function Ze() {
    k.current++, f.current?.player.dispose(), f.current?.context.close().catch(() => {
    }), f.current = null, S.current.reset(), v.current = !1, delete window.__kappaleD1;
  }
  async function ze(D, oe) {
    y.current = !0, T("Palautetaan ääntä…");
    try {
      const ge = await qk(D), re = ge.ok && await ey(() => D.currentTime);
      if (oe !== k.current) return !1;
      if (S.current.reset(), re)
        return v.current = !1, !0;
      if (ge.reason?.startsWith("NotAllowedError"))
        return le("Ääni ei käynnistynyt. Paina Soita uudelleen."), !1;
      const $e = f.current?.player.position() ?? 0;
      return Ze(), p.current = $e, W($e), z("tyhja"), le("Ääntä ei saatu palautettua. Paina Soita, niin soitin käynnistetään uudelleen samasta kohdasta."), !1;
    } finally {
      y.current = !1, T("");
    }
  }
  async function et() {
    if (y.current) return;
    const D = yt();
    if (!D) return;
    const { context: oe, player: ge } = D;
    if (ie) {
      W(ge.pause()), J(!1);
      return;
    }
    if (ge.state === "ladataan" || ge.state === "puretaan") {
      k.current++, ge.cancel();
      return;
    }
    const re = oe.state === "running" ? Promise.resolve() : oe.resume();
    le(""), w(!1);
    const $e = ++k.current;
    if (ge.state !== "valmis") {
      const he = await ge.load({ backing: L.backing, guitar: L.guitar, vocals: L.vocals });
      if ($e !== k.current) return;
      if (he === "virhe") {
        const Re = ge instanceof Na ? ge.errorKind : "lataus", Be = Re === "kalibrointi" || Re === "naytetaajuus";
        le(Be ? `Soitin ei voi purkaa kappaleen ääntä tässä selaimessa (${ge.error}).` : "Kappaleen lataus epäonnistui. Tarkista yhteys ja paina Soita uudelleen."), w(Be);
        return;
      }
      if (he !== "valmis") return;
      ve(ge.duration);
    }
    try {
      await re;
    } catch {
    }
    if ($e !== k.current) return;
    if (oe.state !== "running") {
      le(`Ääni ei käynnistynyt (Web Audio: ${oe.state}). Paina Soita uudelleen.`);
      return;
    }
    if ((v.current || S.current.status() === "stalled") && (!await ze(oe, $e) || $e !== k.current))
      return;
    Le(), ge.setLoop(H), p.current !== null && (ge.seek(p.current), p.current = null);
    let xe = ge.position();
    if (xe >= ge.duration - 0.05 && (xe = 0), !ge.play(xe)) {
      le("Toisto epäonnistui. Paina Soita uudelleen.");
      return;
    }
    W(xe), J(!0);
  }
  async function pt() {
    if (nn) {
      await et();
      return;
    }
    const D = i.current, oe = l.current, ge = u.current;
    if (!D || !oe || !ge) return;
    if (ie) {
      Fe();
      return;
    }
    le("");
    const re = p.current ?? D.currentTime;
    if (Number.isFinite(D.duration) && re >= D.duration - 0.05 && He(0), Xe(D), te === "webaudio") {
      const he = de.current ??= new wv(), Re = he.unlock() && [D, oe, ge].map((Be) => he.route(Be)).every(Boolean);
      G(Re ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + he.lastError);
    }
    Le(), oe.muted = !je, ge.muted = !X, ke(!0, void 0, uv);
    const $e = ++d.current;
    je || oe.pause(), X || ge.pause();
    const xe = [D, ...je ? [oe] : [], ...X ? [ge] : []];
    if (!rf(xe)) {
      dv(xe);
      const he = await hv(xe, cv, () => $e !== d.current);
      if (he === "ohitettu" || $e !== d.current) return;
      if (he === "virhe") {
        Fe(), le("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
    }
    try {
      if (h.current.hold(performance.now() + th), await Promise.all(xe.map((he) => he.play())), $e !== d.current) return;
      if (h.current.hold(performance.now() + th), ke(), J(!0), te === "webaudio" && de.current?.routed(D)) {
        const he = de.current;
        setTimeout(() => {
          $e === d.current && he.state !== "running" && le(`Ääni ei käynnistynyt (Web Audio: ${he.state}). Pysäytä ja soita uudelleen.${he.lastError ? " " + he.lastError : ""}`);
        }, 800);
      }
    } catch {
      if ($e !== d.current) return;
      Fe(), le("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function It(D, oe, ge) {
    if (!D) return;
    if (D.muted = !oe, !oe) {
      D.pause();
      return;
    }
    !i.current || !ie || (ke(!0, D), D.play().catch(() => le(ge + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function At(D) {
    Ae(D), Le(N, { guitar: D }), It(l.current, D, "Kitararaita");
  }
  function Kt(D) {
    me(D), Le(N, { vocals: D }), It(u.current, D, "Lauluraita");
  }
  return _.useEffect(() => {
    const D = () => {
      document.hidden && Fe();
    };
    return document.addEventListener("visibilitychange", D), () => {
      document.removeEventListener("visibilitychange", D), d.current++, i.current?.pause(), l.current?.pause(), u.current?.pause(), de.current?.close(), Ze();
    };
  }, []), _.useEffect(() => {
    if (!nn) return;
    const D = S.current, oe = () => D.reset();
    document.addEventListener("visibilitychange", oe);
    const ge = setInterval(() => {
      const re = f.current;
      if (!re || document.hidden || re.context.state !== "running" || y.current) {
        D.reset();
        return;
      }
      D.sample(re.context.currentTime, performance.now()), !(!re.player.playing || D.status(Jk) !== "stalled") && (v.current = !0, W(re.player.pause()), J(!1), le("Ääni pysähtyi (esimerkiksi näytön lukituksen jälkeen). Paina Soita jatkaaksesi samasta kohdasta."));
    }, 250);
    return () => {
      clearInterval(ge), document.removeEventListener("visibilitychange", oe);
    };
  }, []), _.useEffect(() => {
    Le();
  }, [F]), _.useEffect(() => {
    f.current?.player.setLoop(H);
  }, [H]), _.useEffect(() => {
    if (!nn || !ie) return;
    let D = 0, oe = "", ge = 0;
    const re = () => {
      const $e = f.current?.player;
      if ($e?.playing) {
        const xe = $e.audiblePosition(), he = uu(xe, F), Re = `${he.sectionIndex}:${he.barIndex}:${he.beat}`, Be = performance.now();
        (Re !== oe || Be - ge > 250) && (oe = Re, ge = Be, W(xe));
      }
      D = requestAnimationFrame(re);
    };
    return D = requestAnimationFrame(re), () => cancelAnimationFrame(D);
  }, [ie, F]), /* @__PURE__ */ a.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
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
          value: F,
          onChange: (D) => nt(D.target.value),
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
          L.label,
          " · ",
          L.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          pt();
        }, children: ie ? "■ Tauko" : E === "ladataan" || E === "puretaan" ? "■ Peruuta lataus" : "▶ Soita kappale" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: Y > 0 ? Y : 1,
            step: 0.1,
            value: Math.min(K, Y > 0 ? Y : 1),
            disabled: Y <= 0,
            onChange: (D) => He(Number(D.target.value))
          }
        ),
        /* @__PURE__ */ a.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Oh(K),
          " / ",
          Oh(Y)
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: je,
              onChange: (D) => At(D.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: X,
              onChange: (D) => Kt(D.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: H,
              onChange: (D) => ce(D.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "song-volume", "data-volume-mode": te, children: [
          /* @__PURE__ */ a.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ a.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            N > 0 && /* @__PURE__ */ a.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            N > 50 && /* @__PURE__ */ a.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: N,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": N + " %",
              onChange: (D) => _e(Number(D.target.value))
            }
          ),
          /* @__PURE__ */ a.jsxs("output", { "aria-hidden": "true", children: [
            N,
            " %"
          ] })
        ] })
      ] }),
      Te && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: Te }),
      /* @__PURE__ */ a.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ a.jsxs("a", { href: L.download, download: L.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ a.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ a.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          L.label,
          ", koko kappale · ",
          L.downloadSize
        ] })
      ] }),
      Me && /* @__PURE__ */ a.jsxs("p", { className: "backing-error", role: "alert", children: [
        Me,
        b && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          " ",
          /* @__PURE__ */ a.jsx("a", { href: hy(), children: "Käytä vanhaa soitinta" }),
          "."
        ] })
      ] }),
      x && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: x }),
      nn && P && /* @__PURE__ */ a.jsx("p", { className: "tools-note song-load-wait", role: "status", children: "Ladataan valittua kohtaa…" }),
      nn && /* @__PURE__ */ a.jsx(ly, { state: E, read: () => {
        const D = f.current?.player;
        return D instanceof Na ? { status: D.downloadStatus, state: D.state } : null;
      } }),
      Ah && /* @__PURE__ */ a.jsx("pre", { className: "tools-note", style: { whiteSpace: "pre-wrap", fontSize: "0.75rem" }, children: V }),
      !nn && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: i,
            src: L.backing,
            preload: "metadata",
            loop: H,
            onLoadedMetadata: (D) => {
              D.currentTarget === i.current && (ve(D.currentTarget.duration), Xe(D.currentTarget));
            },
            onProgress: (D) => Xe(D.currentTarget),
            onCanPlay: (D) => Xe(D.currentTarget),
            onTimeUpdate: (D) => st(D.currentTarget),
            onEnded: (D) => {
              D.currentTarget !== i.current || D.currentTarget.loop || (p.current = null, l.current?.pause(), u.current?.pause(), J(!1), W(D.currentTarget.duration));
            },
            onPause: (D) => {
              D.currentTarget === i.current && J(!1);
            },
            onError: () => le(L.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
          },
          F + "-backing"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: l,
            src: L.guitar,
            preload: "metadata",
            muted: !je,
            loop: H,
            onLoadedMetadata: () => {
              i.current?.paused && ke(!0);
            },
            onError: () => le(L.label + ": kitararaita puuttuu tai ei lataudu.")
          },
          F + "-guitar"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: u,
            src: L.vocals,
            preload: "metadata",
            muted: !X,
            loop: H,
            onLoadedMetadata: () => {
              i.current?.paused && ke(!0);
            },
            onError: () => le(L.label + ": lauluraita puuttuu tai ei lataudu.")
          },
          F + "-vocals"
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-chart-collapse", open: ue, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (D) => {
        D.preventDefault(), q((oe) => !oe);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ a.jsx(Ck, { version: F, position: K, loop: H, onSeek: He })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-scales-collapse", open: ae, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (D) => {
        D.preventDefault(), ne((oe) => !oe);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ a.jsx(bk, { open: ae })
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
}, Aa = (s, i = 1) => s.toFixed(i).replace(".", ",").replace("-", "−"), Cf = (s) => {
  const i = Math.round(s);
  return (i > 0 ? "+" : i < 0 ? "−" : "±") + Math.abs(i);
}, eu = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function yy(s, i, l, u) {
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
function Tf({ frame: s, threshold: i }) {
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
      "aria-valuetext": `${Aa(Math.max(-60, u), 0)} desibeliä${l >= i ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meter-fill", style: { width: `${ah(l) * 100}%` } }),
        /* @__PURE__ */ a.jsx("div", { className: "meter-threshold", style: { left: `${ah(i) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function gy({ mic: s, frame: i, heard: l, s: u, now: d }) {
  const h = cf(s.phase, i), p = l && d - l.at < 1500 ? l : null, f = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${Ie(p.midi, u.flats, !0)} · ${Cf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : qo[h];
  return /* @__PURE__ */ a.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ a.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: f }),
    s.phase === "on" && /* @__PURE__ */ a.jsx(Tf, { frame: i, threshold: u.minRms })
  ] });
}
function xy({ mic: s, frame: i, heard: l, accepted: u, now: d, s: h, change: p, devices: f, locked: k, calibrating: S, calibration: v, onTest: y, onStop: x, onCalibrate: T }) {
  const b = _.useId(), w = cf(s.phase, i), E = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", z = s.phase === "on", P = l && d - l.at < 1500 ? l : null, U = P && (w === "pitch" || w === "untuned"), V = z && (i?.peak ?? 0) >= 0.98, B = s.phase === "error" ? [] : yy(w, h, s.info, V), F = !h.device || f.some((L) => L.deviceId === h.device), $ = (L, ie) => p({ ...h, [L]: ie });
  return /* @__PURE__ */ a.jsxs("section", { className: "mic-panel", "aria-labelledby": `${b}-title`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ a.jsx("h2", { id: `${b}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ a.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : qo[w],
      w === "pitch" && P ? ` ${Ie(P.midi, h.flats, !0)}.` : ""
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
          /* @__PURE__ */ a.jsx(Tf, { frame: i, threshold: h.minRms }),
          /* @__PURE__ */ a.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Aa(Math.max(-60, ds(i?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ a.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: P ? Ie(P.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-frequency", children: P ? `${Aa(P.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-cents", children: P ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          Cf(P.cents),
          " senttiä",
          /* @__PURE__ */ a.jsx("span", { className: `cents ${P.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ a.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, P.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-clarity", children: P ? `${Math.round(P.clarity * 100)} %` : i?.clarity !== void 0 && w === "noise" ? `${Math.round(i.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    z && u && d - u.timestamp < 4e3 && /* @__PURE__ */ a.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ie(u.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    B.length > 0 && z && /* @__PURE__ */ a.jsx("ul", { className: "mic-advice", children: B.map((L) => /* @__PURE__ */ a.jsx("li", { children: L }, L)) }),
    s.phase === "error" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
      E ? /* @__PURE__ */ a.jsx("button", { type: "button", onClick: x, children: "Lopeta testi" }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: h.input === "mic" && s.phase !== "on" ? "primary" : "", disabled: k, onClick: y, children: "Testaa mikrofoni" }),
      E && z && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: S, onClick: T, children: S ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    k && s.purpose !== "test" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", disabled: k, children: [
        /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsx("label", { htmlFor: `${b}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ a.jsxs("select", { id: `${b}-device`, value: h.device, onChange: (L) => $("device", L.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !F && /* @__PURE__ */ a.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              f.map((L, ie) => /* @__PURE__ */ a.jsx("option", { value: L.deviceId, children: L.label || `Äänitulo ${ie + 1}` }, L.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-rms`, children: [
              "Äänikynnys · ",
              Aa(ds(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (L) => $("minRms", Number(L.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (L) => $("clarity", Number(L.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (L) => $("stability", Number(L.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (L) => $("cents", Number(L.target.value)) })
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
const jy = (s) => s.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[s.scale]) : _i[s.mode === "caged" ? "maj" : s.chord].tones, $h = (s, i) => jy(s).find(([l]) => l === i)?.[1], Mf = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", Sy = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function wy(s, i) {
  return i.choices === "note" ? "Valitse sävelnimi." : i.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Ey(s, i, l, u, d) {
  return i.choices === "degree" ? `Oikein! ${ir(s.root, i.interval, i.degree)} on ${i.degree}. aste.` : Mf(s) ? `Oikein! ${i.degree}. aste on ${ir(s.root, i.interval, i.degree)}.` : s.mode === "interval" ? `Oikein! ${Ie(i.reference, s.flats, !0)} → ${i.name} on ${sr[i.interval]} ${Sy(i)}.` : s.mode === "notes" ? l === "board" && d ? `Oikein! ${Ie(d.midi, s.flats)} on ${Dh[d.string]}: ${bi(d.fret)}.` : `Oikein! Soitit sävelen ${Ie(u, s.flats, !0)}.` : `Oikein! Sävel oli ${i.name}.`;
}
function Ny(s, i, l, u, d) {
  if (l === "note") return `Ei ${Ie(u, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (l === "degree") return `Ei ${$h(s, u) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = Ye(d.midi) === Ye(i.midi);
  if (s.mode === "notes")
    return d.string !== i.position.string ? `Tuo on ${sn[d.string]}-kieli. Etsi sävel ${iu[i.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${i.name}.` : `Tuo on ${Ie(d.midi, s.flats)}. Etsi ${i.name}.`;
  if (Mf(s)) {
    const p = Ye(d.midi - s.root), f = $h(s, p), k = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return f ? h && i.check === "pitch" && d.midi !== i.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${i.name}.` : h ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${i.degree}. aste sen sisältä.` : `Tuo on ${ir(s.root, p, f)} eli ${f}. aste. Etsi ${i.degree}. aste.` : `Tuo on ${Ie(d.midi, s.flats)}, joka ei kuulu ${k}. Etsi ${i.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ie(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Cy(s, i, l) {
  const u = Ie(l, s.flats, !0);
  return Ye(l) === Ye(i.midi) ? `Kuulin sävelen ${u}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${u}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function _f(s, i = !1) {
  const l = s.split(":"), u = (p) => Number(l[p]), d = (...p) => p.every((f) => Number.isInteger(u(f))), h = (p, f) => sn[p] ? `${sn[p]}-kieli, ${bi(f)}` : null;
  switch (l[0]) {
    case "notes":
      return d(1, 2) ? h(u(1), u(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Ie(u(1), i)}${l[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return l.length === 2 && d(1) ? `Kuule ja toista: ${Ie(u(1), i, !0)}` : d(1, 2) && h(u(1), u(2)) ? `Kuule ja toista: ${h(u(1), u(2))}` : null;
    case "interval":
      return d(1) && sr[u(1)] ? `${sr[u(1)]} ${l[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = l[2];
      if (!d(1, 3) || !_i[p]) return null;
      const f = _i[p].tones.find(([k]) => k === u(3))?.[1];
      return f ? `${zh(u(1), p)}: ${f}. aste${l[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ue.SCALES[l[2]];
      if (!d(1) || !p) return null;
      const f = `${di(u(1))}-${p.name}`;
      if (l.length === 5 && d(3)) {
        const k = Ue.scaleNotes(p).find(([S]) => S === u(3))?.[1];
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
const tu = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", Ty = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function My(s) {
  const i = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${as(s.mode)}${s.hints ? ` · ${Ia[s.hints].title}` : ""} · ${i} · keskimäärin ${tu(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function _y({ store: s, s: i, locked: l, changed: u }) {
  const [d, h] = _.useState(""), p = _.useRef(null), { recent: f, sessions: k, stats: S } = s.data, v = Pi(i), y = Vh(i), x = [...new Set(f.map((P) => P.mode))].map((P) => {
    const U = f.filter((V) => V.mode === P);
    return { mode: P, ...Ko(U), last: Math.max(...U.map((V) => V.at)) };
  }).sort((P, U) => U.last - P.last), T = Ih(S).filter((P) => !P.guided && P.mode === i.mode && P.input === v && P.check === y && P.stat.attempts >= 3).map((P) => ({ ...P, score: su(P.stat), text: _f(P.item, i.flats) })).filter((P) => P.text && P.score < 0.8).sort((P, U) => P.score - U.score).slice(0, 5), b = Ih(S).reduce((P, U) => P + U.stat.attempts, 0);
  function w() {
    const P = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), U = URL.createObjectURL(P), V = document.createElement("a");
    V.href = U, V.download = "musiikin-kartta-harjoittelu.json", V.click(), setTimeout(() => URL.revokeObjectURL(U), 1e3);
  }
  async function E(P) {
    if (P)
      try {
        const U = await P.text();
        if (b && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
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
    b === 0 ? /* @__PURE__ */ a.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        b,
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
    ] }) : /* @__PURE__ */ a.jsx("p", { children: b ? `Harjoituksessa ${as(i.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        Ty[i.input],
        ") ja tarkistuksella (",
        i.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ a.jsx(Up, { area: { strings: i.strings, min: i.min, max: i.max, fixed: "" }, stats: S, input: i.input, check: i.check, flats: i.flats })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      k.length ? /* @__PURE__ */ a.jsx("ul", { children: k.slice(-10).reverse().map((P) => /* @__PURE__ */ a.jsx("li", { children: My(P) }, P.id)) }) : /* @__PURE__ */ a.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ a.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: l, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ a.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (P) => {
          E(P.target.files?.[0]);
        } }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: l || !b, onClick: z, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ a.jsx("p", { role: "status", children: d })
    ] }),
    s.warning && /* @__PURE__ */ a.jsx("p", { role: "status", className: "error", children: s.warning })
  ] });
}
function by() {
  try {
    return new Wd(localStorage);
  } catch {
    return new Wd();
  }
}
const Fh = (s) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents }), Py = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", Ay = [0, 2, 4, 5, 7, 9, 11];
function Ly(s) {
  return s.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : s.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : s.mode === "chord" ? s.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : s.mode === "scale" ? ["mp", "majp"].includes(s.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Ry() {
  const [s] = _.useState(by), [i, l] = _.useState(() => Pp(location.search, s.data.settings)), [, u] = _.useReducer((R) => R + 1, 0), d = _.useRef(null), h = _.useRef(new Uv()), p = _.useRef(new ur()), f = _.useRef(0), k = _.useRef(), S = _.useRef(), v = _.useRef(null), y = _.useRef(0), x = _.useRef(null), T = _.useRef(i);
  T.current = i;
  const [b, w] = _.useState({ phase: "off", purpose: "none" }), E = _.useRef(b), z = (R) => {
    E.current = R, w(R);
  }, [P, U] = _.useState(null), [V, B] = _.useState(null), [F, $] = _.useState(null), [L, ie] = _.useState(0), [J, je] = _.useState([]), [Ae, X] = _.useState(!1), [me, H] = _.useState(!1), [ce, ue] = _.useState(""), [q, ae] = _.useState("info"), [ne, N] = _.useState(""), [j, te] = _.useState(0), [de, Te] = _.useState([]), [G, K] = _.useState([]), [W, Y] = _.useState(null), [ve, Me] = _.useState(!1), [le, ke] = _.useState(""), [Ne, Le] = _.useState(""), [_e, Fe] = _.useState(() => {
    const R = new URLSearchParams(location.search);
    return R.has("tila") || R.has("vanha") ? "legacy" : yf(R.get("kappale")) ? "songs" : tv(R.get("polku"));
  }), [nt, He] = _.useState(() => {
    const R = new URLSearchParams(location.search);
    return R.get("polku") === "otelauta" && R.get("harjoitus") === "savelten-etsinta";
  });
  function Xe() {
    const R = new URL(location.href);
    R.searchParams.set("polku", "otelauta"), R.searchParams.set("harjoitus", "savelten-etsinta"), history.replaceState(history.state, "", R.pathname + R.search + R.hash), He(!0);
  }
  function st() {
    const R = new URL(location.href);
    R.searchParams.set("polku", "otelauta"), R.searchParams.delete("harjoitus"), history.replaceState(history.state, "", R.pathname + R.search + R.hash), He(!1);
  }
  function yt() {
    Fe(null), He(!1);
    const R = new URL(location.href);
    R.searchParams.delete("polku"), R.searchParams.delete("harjoitus"), history.replaceState(history.state, "", R.pathname + R.search + R.hash);
  }
  const Ze = () => {
    Mv().then(je).catch(() => {
    });
  };
  function ze() {
    clearTimeout(S.current), v.current = null, Me(!1);
  }
  function et() {
    U(null), B(null), $(null);
  }
  function pt() {
    h.current.stop(), ze(), z({ phase: "off", purpose: "none" }), et();
  }
  async function It(R) {
    if (h.current.active && E.current.phase === "on")
      return ze(), z({ ...E.current, purpose: R }), h.current.rearm(), !0;
    z({ phase: "requesting", purpose: R }), et();
    try {
      const pe = await h.current.start(T.current.device, {
        ...Fh(T.current),
        onFrame: (Ge) => oe.current.frame(Ge),
        onStableNote: (Ge) => oe.current.stable(Ge)
      }, () => oe.current.lost());
      return pe ? (z({ phase: "on", purpose: R, info: pe }), Ze(), !0) : !1;
    } catch (pe) {
      return z({ phase: "error", purpose: "none", error: Kv(pe) }), !1;
    }
  }
  function At(R) {
    v.current?.push(R.rms);
    const pe = performance.now();
    pe - y.current < 66 || (y.current = pe, U(R), ie(pe), R.midi !== void 0 && R.frequency !== void 0 && B({ midi: R.midi, frequency: R.frequency, cents: R.cents ?? 0, clarity: R.clarity ?? 0, tuned: R.status === "pitch", at: pe }));
  }
  function Kt(R) {
    E.current.purpose === "test" ? $(R) : E.current.purpose === "round" && Ft(R.midi, "mic", void 0, R.heldMs);
  }
  function D() {
    const R = E.current.purpose === "round";
    ze(), et(), z({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const pe = d.current;
    R && pe && ["active", "feedback", "paused"].includes(pe.phase) && (he(), H(!1), pe.pause(), N("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), u());
  }
  const oe = _.useRef({ frame: At, stable: Kt, lost: D });
  oe.current = { frame: At, stable: Kt, lost: D };
  function ge(R) {
    const pe = La(R), Ge = pe.device !== T.current.device;
    T.current = pe, l(pe), s.settings(pe), N(""), h.current.active && (Ge && E.current.purpose === "test" ? (pt(), It("test")) : h.current.setOptions(Fh(pe)));
  }
  function re(R) {
    Le(""), d.current = null, He(!1), Fe(R);
  }
  function $e() {
    ke(""), It("test");
  }
  function xe() {
    E.current.phase !== "on" || E.current.purpose !== "test" || (ze(), v.current = [], Me(!0), ke("Mitataan taustakohinaa kolme sekuntia. Älä soita."), S.current = setTimeout(() => {
      const R = v.current ?? [];
      if (ze(), R.length < 10) {
        ke("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: pe, noise: Ge, loud: Xt } = Hv(R);
      ge({ ...T.current, minRms: pe }), ke(`Taustakohina on ${Math.round(ds(Ge))} dB ja äänikynnys nyt ${Math.round(ds(pe))} dB. ${Xt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function he() {
    f.current++, clearTimeout(k.current), p.current.stop();
  }
  function Re(R, pe) {
    if (!R.results.length) return;
    const Ge = Ko(R.results);
    s.session({
      id: R.id,
      mode: R.settings.mode,
      count: Ge.count,
      first: Ge.first,
      ms: Ge.ms,
      solo: Ge.solo,
      soloFirst: Ge.soloFirst,
      hints: R.settings.hints,
      at: Date.now(),
      complete: pe
    });
  }
  async function Be(R) {
    if (!R.question?.sound.length || R.phase !== "active") return;
    he();
    const pe = f.current;
    R.pause(), h.current.pause(), H(!0), ae("info"), ue("Kuuntele…"), u();
    try {
      await p.current.play(R.question.sound);
    } catch {
      pe === f.current && N("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    pe !== f.current || d.current !== R || (R.resume(), h.current.resume(), H(!1), ue(""), u());
  }
  async function ut(R) {
    Te([]), K([]), Y(null), N(""), te(R.hintLevel), h.current.rearm(), ae("info"), ue(""), u(), R.question?.sound.length && await Be(R);
  }
  async function dn() {
    const R = T.current, pe = Bo(R);
    if (pe) {
      N(pe);
      return;
    }
    he();
    const Ge = f.current;
    if (N(""), ke(""), Le(""), Sa(R)) {
      X(!0);
      const dt = await It("round");
      if (Ge !== f.current) return;
      if (X(!1), !dt) {
        N("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else E.current.phase !== "off" && pt();
    const Xt = new ev(R, () => s.data.stats, (dt) => s.record(dt));
    try {
      Xt.start();
    } catch (dt) {
      E.current.purpose === "round" && pt(), N(dt instanceof Error ? dt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Xt, requestAnimationFrame(() => x.current?.scrollIntoView({ block: "start", behavior: "auto" })), await ut(Xt);
  }
  function Ct() {
    he(), X(!1), pt();
  }
  function Ft(R, pe, Ge, Xt = 0) {
    const dt = d.current, Dt = dt?.question;
    if (!dt || !Dt || dt.phase !== "active") return;
    const ks = dt.answer(R, pe, Ge, Xt);
    if (ks !== "ignored") {
      if (ks === "candidate")
        Y(R), ae("bad"), ue(Cy(dt.settings, Dt, R));
      else if (ks === "wrong")
        Ge ? Te((Mt) => [...Mt, Ge]) : K((Mt) => [...Mt, R]), ae("bad"), ue(Ny(dt.settings, Dt, pe, R, Ge));
      else if (Y(null), ae("good"), ue(Ey(dt.settings, Dt, pe, R, Ge)), Re(dt, !1), dt.settings.advance) {
        const Mt = f.current;
        k.current = setTimeout(() => {
          Mt === f.current && Mn();
        }, pe === "mic" ? 1800 : 1400);
      }
      u();
    }
  }
  async function Mn() {
    const R = d.current;
    if (!(!R || R.phase !== "feedback")) {
      he();
      try {
        R.next();
      } catch (pe) {
        hn(!1), N(pe instanceof Error ? pe.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (R.phase === "done") {
        hn(!0);
        return;
      }
      await ut(R);
    }
  }
  function hn(R = !1) {
    he(), H(!1), X(!1), (E.current.purpose === "round" || E.current.phase === "requesting") && pt();
    const pe = d.current;
    pe && (pe.stop(), Re(pe, R)), Y(null), te(0), Te([]), K([]), N(""), Le(R ? "complete" : "stopped"), ae("info"), ue(""), u();
  }
  function _n() {
    const R = d.current;
    if (!R || !["active", "feedback", "paused"].includes(R.phase)) return;
    he(), H(!1), R.pause();
    const pe = E.current.purpose === "round";
    pe && pt(), ae("info"), ue(`Harjoitus on tauolla.${pe ? " Mikrofoni on suljettu." : ""}`), u();
  }
  async function dr() {
    const R = d.current;
    if (!R || R.phase !== "paused" || me) return;
    he();
    const pe = f.current;
    if (N(""), Sa(R.settings)) {
      X(!0);
      const Ge = await It("round");
      if (pe !== f.current) return;
      if (X(!1), !Ge) {
        N("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    R.resume(), ae("info"), ue(""), u(), R.phase === "active" && (h.current.rearm(), R.question?.sound.length && await Be(R));
  }
  function ms(R) {
    const pe = d.current;
    !pe || pe.phase !== "active" || (pe.useHint(R), te(R), u());
  }
  const mi = _.useRef({ hidden: () => {
  }, restored: () => {
  } });
  mi.current = {
    hidden: () => {
      const R = d.current;
      R && ["active", "feedback"].includes(R.phase) || me ? _n() : E.current.phase !== "off" && E.current.phase !== "error" && (he(), X(!1), pt());
    },
    restored: () => {
      X(!1), H(!1), z({ phase: "off", purpose: "none" }), et(), u();
    }
  }, _.useEffect(() => {
    Ze();
    const R = () => Ze();
    navigator.mediaDevices?.addEventListener?.("devicechange", R);
    const pe = () => {
      f.current++, clearTimeout(k.current), clearTimeout(S.current), h.current.stop(), p.current.stop(), Vv(), d.current?.pause();
    }, Ge = () => {
      document.hidden && mi.current.hidden();
    }, Xt = (dt) => {
      dt.persisted && mi.current.restored();
    };
    return document.addEventListener("visibilitychange", Ge), window.addEventListener("pagehide", pe), window.addEventListener("pageshow", Xt), () => {
      pe(), navigator.mediaDevices?.removeEventListener?.("devicechange", R), document.removeEventListener("visibilitychange", Ge), window.removeEventListener("pagehide", pe), window.removeEventListener("pageshow", Xt);
    };
  }, []);
  const Li = _.useRef(null), pi = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${me}`;
  _.useEffect(() => {
    const R = d.current, pe = x.current, Ge = document.activeElement;
    !R || !pe || !(Ge === document.body || pe.contains(Ge)) || (R.phase === "feedback" ? Li.current?.focus({ preventScroll: !0 }) : R.phase === "active" && !me && (Ge === document.body || Ge === Li.current) && pe.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [pi]);
  const Ve = d.current, tt = !!Ve && ["active", "paused", "feedback"].includes(Ve.phase), rt = tt ? Ve.settings : i, vt = tt ? Ve.question : void 0, Ut = !!vt && !!Ve?.answered, fn = tt && Ve.phase === "paused" && !me && !Ut, Bn = tt && Ve.phase === "active" && !me, ps = tt ? null : Bo(i), vs = tt || Ae, hr = Ai(rt), bn = Gp(rt), Vn = vt && !Ut ? j : 0, Ri = vt ? qp(rt, vt, Ut ? 2 : Vn) : { marks: [], text: "" }, fr = [...new Map([...Ri.marks, ...Ut ? [] : de.map((R) => ({ ...R, label: Ie(R.midi, rt.flats), kind: "wrong" }))].map((R) => [Je(R), R])).values()], mr = tt && Sa(rt), pr = !!vt && !fn && (vt.choices === "position" || fr.length > 0), Tt = Ve ? Ko(Ve.results) : null, vr = !Ve || rt.hints !== "fade" ? "" : Ve.index <= 3 ? " · vastaus näkyy" : Ve.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", kr = Ve && !tt ? Ve.results.filter((R) => R.errors > 0 || R.hint) : [], [za, ct] = Ly(rt), Kn = /* @__PURE__ */ a.jsxs("div", { className: "intro", children: [
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
  return !tt && _e === null ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    /* @__PURE__ */ a.jsx(iv, { onSelect: re })
  ] }) : !tt && _e === "scales" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    /* @__PURE__ */ a.jsx(lk, { onBack: yt })
  ] }) : !tt && _e === "ear" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    nt ? /* @__PURE__ */ a.jsx(ok, { onBack: st }) : /* @__PURE__ */ a.jsx(sv, { onBack: yt, onNotes: Xe })
  ] }) : !tt && _e === "chords" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    /* @__PURE__ */ a.jsx(dk, { onBack: yt })
  ] }) : !tt && _e === "songs" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    /* @__PURE__ */ a.jsx(ky, { onBack: yt })
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    jn,
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsxs("a", { href: za, children: [
      "Lue tämän harjoituksen teoria: ",
      ct,
      " →"
    ] }) }),
    _e !== "legacy" && /* @__PURE__ */ a.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
        tt && hn(), yt();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ a.jsx("h2", { children: _e === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ a.jsx("p", { children: _e === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    tt ? /* @__PURE__ */ a.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ a.jsx("strong", { children: as(rt.mode) }),
      " · ",
      Xd(rt)
    ] }) : _e === "legacy" ? /* @__PURE__ */ a.jsx(Zd, { s: i, change: ge, locked: vs, problem: ps }) : /* @__PURE__ */ a.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ a.jsx(Zd, { s: i, change: ge, locked: vs, problem: ps })
    ] }),
    !tt && (_e === "legacy" || Sa(i)) && /* @__PURE__ */ a.jsx(
      xy,
      {
        mic: b,
        frame: P,
        heard: V,
        accepted: F,
        now: L,
        s: i,
        change: ge,
        devices: J,
        locked: Ae,
        calibrating: ve,
        calibration: le,
        onTest: $e,
        onStop: pt,
        onCalibrate: xe
      }
    ),
    /* @__PURE__ */ a.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: x, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h2", { id: "session-title", children: as(rt.mode) }),
        /* @__PURE__ */ a.jsx("span", { "data-testid": "round-status", children: tt ? `Kysymys ${Ve.index}${Ve.total ? " / " + Ve.total : " · vapaa harjoittelu"} · ${Ia[rt.hints].title}${vr}${Ve.phase === "paused" && !me ? " · tauolla" : ""}` : Ne === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !tt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        Ve && Ve.results.length > 0 && Tt ? /* @__PURE__ */ a.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ a.jsx("h3", { children: Ne === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
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
              /* @__PURE__ */ a.jsx("dd", { children: Py(Tt.ms / Tt.count) })
            ] })
          ] }),
          Tt.solo === 0 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          kr.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ a.jsx("ul", { children: [...new Set(kr.map((R) => _f(R.item, i.flats)).filter(Boolean))].slice(0, 6).map((R) => /* @__PURE__ */ a.jsx("li", { children: R }, R)) })
          ] })
        ] }) : /* @__PURE__ */ a.jsx("p", { className: "question idle", children: Xd(i) }),
        /* @__PURE__ */ a.jsx("div", { className: "action-row", children: Ae ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: Ct, children: "Peru" })
        ] }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !!ps, onClick: () => {
          dn();
        }, children: Ve?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Ve && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      tt && vt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: fn ? "Harjoitus on tauolla." : vt.prompt }),
        /* @__PURE__ */ a.jsx("p", { className: "how", "data-testid": "instruction", children: fn ? "Kysymys palaa näkyviin, kun jatkat." : me ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : wy(rt, vt) }),
        Ve.hintLevel > 0 && !Ut && /* @__PURE__ */ a.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: rt.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        mr && /* @__PURE__ */ a.jsx(gy, { mic: b, frame: P, heard: V, s: rt, now: L }),
        vt.choices === "note" && !fn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (rt.accidentals ? Array.from({ length: 12 }, (R, pe) => pe) : Ay).map((R) => /* @__PURE__ */ a.jsx("button", { type: "button", className: G.includes(R) ? "wrong" : Ut && R === vt.midi % 12 ? "right" : "", disabled: !Bn || G.includes(R), onClick: () => Ft(R, "note"), children: Ie(R, rt.flats) }, R)) }),
        vt.choices === "degree" && !fn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (rt.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[rt.scale]) : _i[rt.chord].tones).map(([R, pe]) => /* @__PURE__ */ a.jsx("button", { type: "button", className: G.includes(R) ? "wrong" : Ut && R === vt.interval ? "right" : "", disabled: !Bn || G.includes(R), onClick: () => Ft(R, "degree"), children: pe }, R)) }),
        pr && /* @__PURE__ */ a.jsx(
          hi,
          {
            area: bn,
            marks: fr,
            disabled: !Bn || vt.choices !== "position" || rt.input === "mic",
            onAnswer: (R) => Ft(R.midi, "board", R),
            caption: hr.fixed === "shape" ? `${rt.shape}-muodon alue` : hr.fixed === "box" ? `Boksin ${rt.box} alue` : "Otelauta"
          }
        ),
        !Ut && !fn && Vn > 0 && Ri.text && /* @__PURE__ */ a.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: Ri.text }),
        /* @__PURE__ */ a.jsx("p", { className: `feedback ${q}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ce }),
        W !== null && Ve.phase === "active" && /* @__PURE__ */ a.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            Ve.confirmWrong(), Y(null), ue("Kirjattu virheeksi. Etsi sävel uudelleen."), u();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ a.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        ne && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: ne }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          Ve.phase === "feedback" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", ref: Li, onClick: () => {
            Mn();
          }, children: Ve.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Ve.phase === "active" && !Ut && !me && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            Vn === 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ms(Math.max(1, Ve.hintLevel)), children: Ve.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Vn === 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ms(2), children: "Näytä vastaus" }),
            Vn > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => te(0), children: "Piilota vihje" })
          ] }),
          vt.sound.length > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: !Bn, onClick: () => {
            Be(Ve);
          }, children: "Kuuntele uudelleen" }),
          Ve.phase === "paused" && !me ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: Ae, onClick: () => {
            dr();
          }, children: Ae ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: _n, children: "Tauko" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => hn(), children: "Lopeta harjoitus" })
        ] }),
        Ve.phase === "feedback" && rt.advance && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "tally", children: Tt?.count ? `Vastattu ${Tt.count} · itsenäisesti heti oikein ${Tt.soloFirst}/${Tt.solo}${Tt.guided ? ` · vihjeen kanssa ${Tt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !tt && ne && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: ne })
    ] }),
    !tt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { className: "link-row", children: [
        i.mode === "scale" && /* @__PURE__ */ a.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ue.CHROM[i.root])}&asteikko=${i.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ a.jsx("a", { href: Ap(i), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ a.jsx(_y, { store: s, s: i, locked: vs, changed: () => {
        const R = La(s.data.settings);
        T.current = R, l(R), u();
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
wp.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ a.jsx(Ry, {}));
//# sourceMappingURL=app.js.map
