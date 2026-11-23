function pp(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var jl = { exports: {} }, Xs = {}, Sl = { exports: {} }, De = {};
var Pd;
function vp() {
  if (Pd) return De;
  Pd = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), f = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), y = Symbol.iterator;
  function j(E) {
    return E === null || typeof E != "object" ? null : (E = y && E[y] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var T = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, w = {};
  function N(E, x, ne) {
    this.props = E, this.context = x, this.refs = w, this.updater = ne || T;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(E, x) {
    if (typeof E != "object" && typeof E != "function" && E != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, E, x, "setState");
  }, N.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function F() {
  }
  F.prototype = N.prototype;
  function _(E, x, ne) {
    this.props = E, this.context = x, this.refs = w, this.updater = ne || T;
  }
  var K = _.prototype = new F();
  K.constructor = _, b(K, N.prototype), K.isPureReactComponent = !0;
  var B = Array.isArray, V = Object.prototype.hasOwnProperty, D = { current: null }, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(E, x, ne) {
    var fe, de = {}, H = null, U = null;
    if (x != null) for (fe in x.ref !== void 0 && (U = x.ref), x.key !== void 0 && (H = "" + x.key), x) V.call(x, fe) && !$.hasOwnProperty(fe) && (de[fe] = x[fe]);
    var J = arguments.length - 2;
    if (J === 1) de.children = ne;
    else if (1 < J) {
      for (var X = Array(J), me = 0; me < J; me++) X[me] = arguments[me + 2];
      de.children = X;
    }
    if (E && E.defaultProps) for (fe in J = E.defaultProps, J) de[fe] === void 0 && (de[fe] = J[fe]);
    return { $$typeof: s, type: E, key: H, ref: U, props: de, _owner: D.current };
  }
  function se(E, x) {
    return { $$typeof: s, type: E.type, key: x, ref: E.ref, props: E.props, _owner: E._owner };
  }
  function ee(E) {
    return typeof E == "object" && E !== null && E.$$typeof === s;
  }
  function Ee(E) {
    var x = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(ne) {
      return x[ne];
    });
  }
  var Te = /\/+/g;
  function Z(E, x) {
    return typeof E == "object" && E !== null && E.key != null ? Ee("" + E.key) : x.toString(36);
  }
  function ce(E, x, ne, fe, de) {
    var H = typeof E;
    (H === "undefined" || H === "boolean") && (E = null);
    var U = !1;
    if (E === null) U = !0;
    else switch (H) {
      case "string":
      case "number":
        U = !0;
        break;
      case "object":
        switch (E.$$typeof) {
          case s:
          case i:
            U = !0;
        }
    }
    if (U) return U = E, de = de(U), E = fe === "" ? "." + Z(U, 0) : fe, B(de) ? (ne = "", E != null && (ne = E.replace(Te, "$&/") + "/"), ce(de, x, ne, "", function(me) {
      return me;
    })) : de != null && (ee(de) && (de = se(de, ne + (!de.key || U && U.key === de.key ? "" : ("" + de.key).replace(Te, "$&/") + "/") + E)), x.push(de)), 1;
    if (U = 0, fe = fe === "" ? "." : fe + ":", B(E)) for (var J = 0; J < E.length; J++) {
      H = E[J];
      var X = fe + Z(H, J);
      U += ce(H, x, ne, X, de);
    }
    else if (X = j(E), typeof X == "function") for (E = X.call(E), J = 0; !(H = E.next()).done; ) H = H.value, X = fe + Z(H, J++), U += ce(H, x, ne, X, de);
    else if (H === "object") throw x = String(E), Error("Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead.");
    return U;
  }
  function G(E, x, ne) {
    if (E == null) return E;
    var fe = [], de = 0;
    return ce(E, fe, "", "", function(H) {
      return x.call(ne, H, de++);
    }), fe;
  }
  function oe(E) {
    if (E._status === -1) {
      var x = E._result;
      x = x(), x.then(function(ne) {
        (E._status === 0 || E._status === -1) && (E._status = 1, E._result = ne);
      }, function(ne) {
        (E._status === 0 || E._status === -1) && (E._status = 2, E._result = ne);
      }), E._status === -1 && (E._status = 0, E._result = x);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var re = { current: null }, Y = { transition: null }, ae = { ReactCurrentDispatcher: re, ReactCurrentBatchConfig: Y, ReactCurrentOwner: D };
  function te() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return De.Children = { map: G, forEach: function(E, x, ne) {
    G(E, function() {
      x.apply(this, arguments);
    }, ne);
  }, count: function(E) {
    var x = 0;
    return G(E, function() {
      x++;
    }), x;
  }, toArray: function(E) {
    return G(E, function(x) {
      return x;
    }) || [];
  }, only: function(E) {
    if (!ee(E)) throw Error("React.Children.only expected to receive a single React element child.");
    return E;
  } }, De.Component = N, De.Fragment = o, De.Profiler = d, De.PureComponent = _, De.StrictMode = u, De.Suspense = k, De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, De.act = te, De.cloneElement = function(E, x, ne) {
    if (E == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
    var fe = b({}, E.props), de = E.key, H = E.ref, U = E._owner;
    if (x != null) {
      if (x.ref !== void 0 && (H = x.ref, U = D.current), x.key !== void 0 && (de = "" + x.key), E.type && E.type.defaultProps) var J = E.type.defaultProps;
      for (X in x) V.call(x, X) && !$.hasOwnProperty(X) && (fe[X] = x[X] === void 0 && J !== void 0 ? J[X] : x[X]);
    }
    var X = arguments.length - 2;
    if (X === 1) fe.children = ne;
    else if (1 < X) {
      J = Array(X);
      for (var me = 0; me < X; me++) J[me] = arguments[me + 2];
      fe.children = J;
    }
    return { $$typeof: s, type: E.type, key: de, ref: H, props: fe, _owner: U };
  }, De.createContext = function(E) {
    return E = { $$typeof: p, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, E.Provider = { $$typeof: h, _context: E }, E.Consumer = E;
  }, De.createElement = O, De.createFactory = function(E) {
    var x = O.bind(null, E);
    return x.type = E, x;
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(E) {
    return { $$typeof: f, render: E };
  }, De.isValidElement = ee, De.lazy = function(E) {
    return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: oe };
  }, De.memo = function(E, x) {
    return { $$typeof: S, type: E, compare: x === void 0 ? null : x };
  }, De.startTransition = function(E) {
    var x = Y.transition;
    Y.transition = {};
    try {
      E();
    } finally {
      Y.transition = x;
    }
  }, De.unstable_act = te, De.useCallback = function(E, x) {
    return re.current.useCallback(E, x);
  }, De.useContext = function(E) {
    return re.current.useContext(E);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(E) {
    return re.current.useDeferredValue(E);
  }, De.useEffect = function(E, x) {
    return re.current.useEffect(E, x);
  }, De.useId = function() {
    return re.current.useId();
  }, De.useImperativeHandle = function(E, x, ne) {
    return re.current.useImperativeHandle(E, x, ne);
  }, De.useInsertionEffect = function(E, x) {
    return re.current.useInsertionEffect(E, x);
  }, De.useLayoutEffect = function(E, x) {
    return re.current.useLayoutEffect(E, x);
  }, De.useMemo = function(E, x) {
    return re.current.useMemo(E, x);
  }, De.useReducer = function(E, x, ne) {
    return re.current.useReducer(E, x, ne);
  }, De.useRef = function(E) {
    return re.current.useRef(E);
  }, De.useState = function(E) {
    return re.current.useState(E);
  }, De.useSyncExternalStore = function(E, x, ne) {
    return re.current.useSyncExternalStore(E, x, ne);
  }, De.useTransition = function() {
    return re.current.useTransition();
  }, De.version = "18.3.1", De;
}
var Ld;
function tu() {
  return Ld || (Ld = 1, Sl.exports = vp()), Sl.exports;
}
var Rd;
function kp() {
  if (Rd) return Xs;
  Rd = 1;
  var s = tu(), i = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(f, k, S) {
    var v, y = {}, j = null, T = null;
    S !== void 0 && (j = "" + S), k.key !== void 0 && (j = "" + k.key), k.ref !== void 0 && (T = k.ref);
    for (v in k) u.call(k, v) && !h.hasOwnProperty(v) && (y[v] = k[v]);
    if (f && f.defaultProps) for (v in k = f.defaultProps, k) y[v] === void 0 && (y[v] = k[v]);
    return { $$typeof: i, type: f, key: j, ref: T, props: y, _owner: d.current };
  }
  return Xs.Fragment = o, Xs.jsx = p, Xs.jsxs = p, Xs;
}
var Od;
function yp() {
  return Od || (Od = 1, jl.exports = kp()), jl.exports;
}
var a = yp(), A = tu(), Sa = {}, wl = { exports: {} }, Wt = {}, El = { exports: {} }, Nl = {};
var $d;
function gp() {
  return $d || ($d = 1, (function(s) {
    function i(Y, ae) {
      var te = Y.length;
      Y.push(ae);
      e: for (; 0 < te; ) {
        var E = te - 1 >>> 1, x = Y[E];
        if (0 < d(x, ae)) Y[E] = ae, Y[te] = x, te = E;
        else break e;
      }
    }
    function o(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function u(Y) {
      if (Y.length === 0) return null;
      var ae = Y[0], te = Y.pop();
      if (te !== ae) {
        Y[0] = te;
        e: for (var E = 0, x = Y.length, ne = x >>> 1; E < ne; ) {
          var fe = 2 * (E + 1) - 1, de = Y[fe], H = fe + 1, U = Y[H];
          if (0 > d(de, te)) H < x && 0 > d(U, de) ? (Y[E] = U, Y[H] = te, E = H) : (Y[E] = de, Y[fe] = te, E = fe);
          else if (H < x && 0 > d(U, te)) Y[E] = U, Y[H] = te, E = H;
          else break e;
        }
      }
      return ae;
    }
    function d(Y, ae) {
      var te = Y.sortIndex - ae.sortIndex;
      return te !== 0 ? te : Y.id - ae.id;
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
    var k = [], S = [], v = 1, y = null, j = 3, T = !1, b = !1, w = !1, N = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function K(Y) {
      for (var ae = o(S); ae !== null; ) {
        if (ae.callback === null) u(S);
        else if (ae.startTime <= Y) u(S), ae.sortIndex = ae.expirationTime, i(k, ae);
        else break;
        ae = o(S);
      }
    }
    function B(Y) {
      if (w = !1, K(Y), !b) if (o(k) !== null) b = !0, oe(V);
      else {
        var ae = o(S);
        ae !== null && re(B, ae.startTime - Y);
      }
    }
    function V(Y, ae) {
      b = !1, w && (w = !1, F(O), O = -1), T = !0;
      var te = j;
      try {
        for (K(ae), y = o(k); y !== null && (!(y.expirationTime > ae) || Y && !Ee()); ) {
          var E = y.callback;
          if (typeof E == "function") {
            y.callback = null, j = y.priorityLevel;
            var x = E(y.expirationTime <= ae);
            ae = s.unstable_now(), typeof x == "function" ? y.callback = x : y === o(k) && u(k), K(ae);
          } else u(k);
          y = o(k);
        }
        if (y !== null) var ne = !0;
        else {
          var fe = o(S);
          fe !== null && re(B, fe.startTime - ae), ne = !1;
        }
        return ne;
      } finally {
        y = null, j = te, T = !1;
      }
    }
    var D = !1, $ = null, O = -1, se = 5, ee = -1;
    function Ee() {
      return !(s.unstable_now() - ee < se);
    }
    function Te() {
      if ($ !== null) {
        var Y = s.unstable_now();
        ee = Y;
        var ae = !0;
        try {
          ae = $(!0, Y);
        } finally {
          ae ? Z() : (D = !1, $ = null);
        }
      } else D = !1;
    }
    var Z;
    if (typeof _ == "function") Z = function() {
      _(Te);
    };
    else if (typeof MessageChannel < "u") {
      var ce = new MessageChannel(), G = ce.port2;
      ce.port1.onmessage = Te, Z = function() {
        G.postMessage(null);
      };
    } else Z = function() {
      N(Te, 0);
    };
    function oe(Y) {
      $ = Y, D || (D = !0, Z());
    }
    function re(Y, ae) {
      O = N(function() {
        Y(s.unstable_now());
      }, ae);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, s.unstable_continueExecution = function() {
      b || T || (b = !0, oe(V));
    }, s.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, s.unstable_getFirstCallbackNode = function() {
      return o(k);
    }, s.unstable_next = function(Y) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = j;
      }
      var te = j;
      j = ae;
      try {
        return Y();
      } finally {
        j = te;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(Y, ae) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var te = j;
      j = Y;
      try {
        return ae();
      } finally {
        j = te;
      }
    }, s.unstable_scheduleCallback = function(Y, ae, te) {
      var E = s.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? E + te : E) : te = E, Y) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3;
      }
      return x = te + x, Y = { id: v++, callback: ae, priorityLevel: Y, startTime: te, expirationTime: x, sortIndex: -1 }, te > E ? (Y.sortIndex = te, i(S, Y), o(k) === null && Y === o(S) && (w ? (F(O), O = -1) : w = !0, re(B, te - E))) : (Y.sortIndex = x, i(k, Y), b || T || (b = !0, oe(V))), Y;
    }, s.unstable_shouldYield = Ee, s.unstable_wrapCallback = function(Y) {
      var ae = j;
      return function() {
        var te = j;
        j = ae;
        try {
          return Y.apply(this, arguments);
        } finally {
          j = te;
        }
      };
    };
  })(Nl)), Nl;
}
var Fd;
function xp() {
  return Fd || (Fd = 1, El.exports = gp()), El.exports;
}
var Id;
function jp() {
  if (Id) return Wt;
  Id = 1;
  var s = tu(), i = xp();
  function o(e) {
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
  function j(e) {
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
  function w(e, t, n, r, l, c, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = m;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    N[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    N[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    N[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    N[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    N[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    N[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    N[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    N[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    N[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var F = /[\-:]([a-z])/g;
  function _(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      F,
      _
    );
    N[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(F, _);
    N[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(F, _);
    N[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function K(e, t, n, r) {
    var l = N.hasOwnProperty(t) ? N[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, l, r) && (n = null), r || l === null ? j(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var B = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = /* @__PURE__ */ Symbol.for("react.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), $ = /* @__PURE__ */ Symbol.for("react.fragment"), O = /* @__PURE__ */ Symbol.for("react.strict_mode"), se = /* @__PURE__ */ Symbol.for("react.profiler"), ee = /* @__PURE__ */ Symbol.for("react.provider"), Ee = /* @__PURE__ */ Symbol.for("react.context"), Te = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), ce = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = Y && e[Y] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var te = Object.assign, E;
  function x(e) {
    if (E === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      E = t && t[1] || "";
    }
    return `
` + E + e;
  }
  var ne = !1;
  function fe(e, t) {
    if (!e || ne) return "";
    ne = !0;
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
        for (var l = I.stack.split(`
`), c = r.stack.split(`
`), m = l.length - 1, g = c.length - 1; 1 <= m && 0 <= g && l[m] !== c[g]; ) g--;
        for (; 1 <= m && 0 <= g; m--, g--) if (l[m] !== c[g]) {
          if (m !== 1 || g !== 1)
            do
              if (m--, g--, 0 > g || l[m] !== c[g]) {
                var C = `
` + l[m].replace(" at new ", " at ");
                return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
              }
            while (1 <= m && 0 <= g);
          break;
        }
      }
    } finally {
      ne = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? x(e) : "";
  }
  function de(e) {
    switch (e.tag) {
      case 5:
        return x(e.type);
      case 16:
        return x("Lazy");
      case 13:
        return x("Suspense");
      case 19:
        return x("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = fe(e.type, !1), e;
      case 11:
        return e = fe(e.type.render, !1), e;
      case 1:
        return e = fe(e.type, !0), e;
      default:
        return "";
    }
  }
  function H(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case D:
        return "Portal";
      case se:
        return "Profiler";
      case O:
        return "StrictMode";
      case Z:
        return "Suspense";
      case ce:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ee:
        return (e.displayName || "Context") + ".Consumer";
      case ee:
        return (e._context.displayName || "Context") + ".Provider";
      case Te:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case G:
        return t = e.displayName || null, t !== null ? t : H(e.type) || "Memo";
      case oe:
        t = e._payload, e = e._init;
        try {
          return H(e(t));
        } catch {
        }
    }
    return null;
  }
  function U(e) {
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
        return H(t);
      case 8:
        return t === O ? "StrictMode" : "Mode";
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
  function J(e) {
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
  function X(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function me(e) {
    var t = X(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, c = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
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
    e._valueTracker || (e._valueTracker = me(e));
  }
  function ye(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = X(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ge(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ne(e, t) {
    var n = t.checked;
    return te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function $e(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = J(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function be(e, t) {
    t = t.checked, t != null && K(e, "checked", t, !1);
  }
  function Ve(e, t) {
    be(e, t);
    var n = J(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Je(e, t.type, n) : t.hasOwnProperty("defaultValue") && Je(e, t.type, J(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function et(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Je(e, t, n) {
    (t !== "number" || ge(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var tt = Array.isArray;
  function z(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + J(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function le(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ue(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (tt(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: J(n) };
  }
  function je(e, t) {
    var n = J(t.value), r = J(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Ce(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ue(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function He(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ue(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var mt, Et = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (mt = mt || document.createElement("div"), mt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  var Ot = {
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
  }, gn = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ot).forEach(function(e) {
    gn.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Ot[t] = Ot[e];
    });
  });
  function _e(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ot.hasOwnProperty(e) && Ot[e] ? ("" + t).trim() : t + "px";
  }
  function ln(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = _e(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Le = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Re(e, t) {
    if (t) {
      if (Le[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Ie(e, t) {
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
  var Ze = null;
  function ut(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var un = null, Nt = null, $t = null;
  function Tn(e) {
    if (e = $s(e)) {
      if (typeof un != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = Fr(t), un(e.stateNode, e.type, t));
    }
  }
  function cn(e) {
    Nt ? $t ? $t.push(e) : $t = [e] : Nt = e;
  }
  function Mn() {
    if (Nt) {
      var e = Nt, t = $t;
      if ($t = Nt = null, Tn(e), t) for (e = 0; e < t.length; e++) Tn(t[e]);
    }
  }
  function hr(e, t) {
    return e(t);
  }
  function ms() {
  }
  var mi = !1;
  function Li(e, t, n) {
    if (mi) return e(t, n);
    mi = !0;
    try {
      return hr(e, t, n);
    } finally {
      mi = !1, (Nt !== null || $t !== null) && (ms(), Mn());
    }
  }
  function pi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Fr(n);
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
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var ze = !1;
  if (f) try {
    var nt = {};
    Object.defineProperty(nt, "passive", { get: function() {
      ze = !0;
    } }), window.addEventListener("test", nt, nt), window.removeEventListener("test", nt, nt);
  } catch {
    ze = !1;
  }
  function st(e, t, n, r, l, c, m, g, C) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var vt = !1, Bt = null, dn = !1, Bn = null, ps = { onError: function(e) {
    vt = !0, Bt = e;
  } };
  function vs(e, t, n, r, l, c, m, g, C) {
    vt = !1, Bt = null, st.apply(ps, arguments);
  }
  function fr(e, t, n, r, l, c, m, g, C) {
    if (vs.apply(this, arguments), vt) {
      if (vt) {
        var I = Bt;
        vt = !1, Bt = null;
      } else throw Error(o(198));
      dn || (dn = !0, Bn = I);
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
    if (bn(e) !== e) throw Error(o(188));
  }
  function mr(e) {
    var t = e.alternate;
    if (!t) {
      if (t = bn(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var c = l.alternate;
      if (c === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === c.child) {
        for (c = l.child; c; ) {
          if (c === n) return Ri(l), e;
          if (c === r) return Ri(l), t;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) n = l, r = c;
      else {
        for (var m = !1, g = l.child; g; ) {
          if (g === n) {
            m = !0, n = l, r = c;
            break;
          }
          if (g === r) {
            m = !0, r = l, n = c;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = c.child; g; ) {
            if (g === n) {
              m = !0, n = c, r = l;
              break;
            }
            if (g === r) {
              m = !0, r = c, n = l;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function pr(e) {
    return e = mr(e), e !== null ? vr(e) : null;
  }
  function vr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = vr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ct = i.unstable_scheduleCallback, kr = i.unstable_cancelCallback, yr = i.unstable_shouldYield, za = i.unstable_requestPaint, ct = i.unstable_now, Kn = i.unstable_getCurrentPriorityLevel, xn = i.unstable_ImmediatePriority, L = i.unstable_UserBlockingPriority, pe = i.unstable_NormalPriority, Ge = i.unstable_LowPriority, Yt = i.unstable_IdlePriority, dt = null, Ft = null;
  function ks(e) {
    if (Ft && typeof Ft.onCommitFiberRoot == "function") try {
      Ft.onCommitFiberRoot(dt, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Tt = Math.clz32 ? Math.clz32 : Lf, Af = Math.log, Pf = Math.LN2;
  function Lf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Af(e) / Pf | 0) | 0;
  }
  var gr = 64, xr = 4194304;
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
  function jr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, c = e.pingedLanes, m = n & 268435455;
    if (m !== 0) {
      var g = m & ~l;
      g !== 0 ? r = ys(g) : (c &= m, c !== 0 && (r = ys(c)));
    } else m = n & ~l, m !== 0 ? r = ys(m) : c !== 0 && (r = ys(c));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, c = t & -t, l >= c || l === 16 && (c & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Tt(t), l = 1 << n, r |= e[n], t &= ~l;
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
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
      var m = 31 - Tt(c), g = 1 << m, C = l[m];
      C === -1 ? ((g & n) === 0 || (g & r) !== 0) && (l[m] = Rf(g, t)) : C <= t && (e.expiredLanes |= g), c &= ~g;
    }
  }
  function Ba(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function uu() {
    var e = gr;
    return gr <<= 1, (gr & 4194240) === 0 && (gr = 64), e;
  }
  function Va(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function gs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Tt(t), e[t] = n;
  }
  function $f(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Tt(n), c = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~c;
    }
  }
  function Ka(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Tt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var qe = 0;
  function cu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var du, Ua, hu, fu, mu, Ha = !1, Sr = [], Un = null, Hn = null, Gn = null, xs = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Wn = [], Ff = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function pu(e, t) {
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
  function Ss(e, t, n, r, l, c) {
    return e === null || e.nativeEvent !== c ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: c, targetContainers: [l] }, t !== null && (t = $s(t), t !== null && Ua(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function If(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Un = Ss(Un, e, t, n, r, l), !0;
      case "dragenter":
        return Hn = Ss(Hn, e, t, n, r, l), !0;
      case "mouseover":
        return Gn = Ss(Gn, e, t, n, r, l), !0;
      case "pointerover":
        var c = l.pointerId;
        return xs.set(c, Ss(xs.get(c) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return c = l.pointerId, js.set(c, Ss(js.get(c) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function vu(e) {
    var t = vi(e.target);
    if (t !== null) {
      var n = bn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Vn(n), t !== null) {
            e.blockedOn = t, mu(e.priority, function() {
              hu(n);
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
  function wr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Wa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ze = r, n.target.dispatchEvent(r), Ze = null;
      } else return t = $s(n), t !== null && Ua(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ku(e, t, n) {
    wr(e) && n.delete(t);
  }
  function Df() {
    Ha = !1, Un !== null && wr(Un) && (Un = null), Hn !== null && wr(Hn) && (Hn = null), Gn !== null && wr(Gn) && (Gn = null), xs.forEach(ku), js.forEach(ku);
  }
  function ws(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ha || (Ha = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Df)));
  }
  function Es(e) {
    function t(l) {
      return ws(l, e);
    }
    if (0 < Sr.length) {
      ws(Sr[0], e);
      for (var n = 1; n < Sr.length; n++) {
        var r = Sr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Un !== null && ws(Un, e), Hn !== null && ws(Hn, e), Gn !== null && ws(Gn, e), xs.forEach(t), js.forEach(t), n = 0; n < Wn.length; n++) r = Wn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Wn.length && (n = Wn[0], n.blockedOn === null); ) vu(n), n.blockedOn === null && Wn.shift();
  }
  var Oi = B.ReactCurrentBatchConfig, Er = !0;
  function zf(e, t, n, r) {
    var l = qe, c = Oi.transition;
    Oi.transition = null;
    try {
      qe = 1, Ga(e, t, n, r);
    } finally {
      qe = l, Oi.transition = c;
    }
  }
  function Bf(e, t, n, r) {
    var l = qe, c = Oi.transition;
    Oi.transition = null;
    try {
      qe = 4, Ga(e, t, n, r);
    } finally {
      qe = l, Oi.transition = c;
    }
  }
  function Ga(e, t, n, r) {
    if (Er) {
      var l = Wa(e, t, n, r);
      if (l === null) co(e, t, r, Nr, n), pu(e, r);
      else if (If(l, e, t, n, r)) r.stopPropagation();
      else if (pu(e, r), t & 4 && -1 < Ff.indexOf(e)) {
        for (; l !== null; ) {
          var c = $s(l);
          if (c !== null && du(c), c = Wa(e, t, n, r), c === null && co(e, t, r, Nr, n), c === l) break;
          l = c;
        }
        l !== null && r.stopPropagation();
      } else co(e, t, r, null, n);
    }
  }
  var Nr = null;
  function Wa(e, t, n, r) {
    if (Nr = null, e = ut(r), e = vi(e), e !== null) if (t = bn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Vn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Nr = e, null;
  }
  function yu(e) {
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
          case xn:
            return 1;
          case L:
            return 4;
          case pe:
          case Ge:
            return 16;
          case Yt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Qn = null, Qa = null, Cr = null;
  function gu() {
    if (Cr) return Cr;
    var e, t = Qa, n = t.length, r, l = "value" in Qn ? Qn.value : Qn.textContent, c = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var m = n - e;
    for (r = 1; r <= m && t[n - r] === l[c - r]; r++) ;
    return Cr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Tr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mr() {
    return !0;
  }
  function xu() {
    return !1;
  }
  function Jt(e) {
    function t(n, r, l, c, m) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = c, this.target = m, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(c) : c[g]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Mr : xu, this.isPropagationStopped = xu, this;
    }
    return te(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Mr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Mr);
    }, persist: function() {
    }, isPersistent: Mr }), t;
  }
  var $i = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ya = Jt($i), Ns = te({}, $i, { view: 0, detail: 0 }), Vf = Jt(Ns), Ja, Xa, Cs, br = te({}, Ns, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Cs && (Cs && e.type === "mousemove" ? (Ja = e.screenX - Cs.screenX, Xa = e.screenY - Cs.screenY) : Xa = Ja = 0, Cs = e), Ja);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Xa;
  } }), ju = Jt(br), Kf = te({}, br, { dataTransfer: 0 }), Uf = Jt(Kf), Hf = te({}, Ns, { relatedTarget: 0 }), Za = Jt(Hf), Gf = te({}, $i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wf = Jt(Gf), Qf = te({}, $i, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Yf = Jt(Qf), Jf = te({}, $i, { data: 0 }), Su = Jt(Jf), Xf = {
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
  function qa() {
    return em;
  }
  var tm = te({}, Ns, { key: function(e) {
    if (e.key) {
      var t = Xf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qa, charCode: function(e) {
    return e.type === "keypress" ? Tr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), nm = Jt(tm), im = te({}, br, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wu = Jt(im), sm = te({}, Ns, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qa }), rm = Jt(sm), am = te({}, $i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), om = Jt(am), lm = te({}, br, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), um = Jt(lm), cm = [9, 13, 27, 32], eo = f && "CompositionEvent" in window, Ts = null;
  f && "documentMode" in document && (Ts = document.documentMode);
  var dm = f && "TextEvent" in window && !Ts, Eu = f && (!eo || Ts && 8 < Ts && 11 >= Ts), Nu = " ", Cu = !1;
  function Tu(e, t) {
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
  function Mu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Fi = !1;
  function hm(e, t) {
    switch (e) {
      case "compositionend":
        return Mu(t);
      case "keypress":
        return t.which !== 32 ? null : (Cu = !0, Nu);
      case "textInput":
        return e = t.data, e === Nu && Cu ? null : e;
      default:
        return null;
    }
  }
  function fm(e, t) {
    if (Fi) return e === "compositionend" || !eo && Tu(e, t) ? (e = gu(), Cr = Qa = Qn = null, Fi = !1, e) : null;
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
        return Eu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var mm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function bu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!mm[e.type] : t === "textarea";
  }
  function _u(e, t, n, r) {
    cn(r), t = Rr(t, "onChange"), 0 < t.length && (n = new Ya("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Ms = null, bs = null;
  function pm(e) {
    Qu(e, 0);
  }
  function _r(e) {
    var t = Vi(e);
    if (ye(t)) return e;
  }
  function vm(e, t) {
    if (e === "change") return t;
  }
  var Au = !1;
  if (f) {
    var to;
    if (f) {
      var no = "oninput" in document;
      if (!no) {
        var Pu = document.createElement("div");
        Pu.setAttribute("oninput", "return;"), no = typeof Pu.oninput == "function";
      }
      to = no;
    } else to = !1;
    Au = to && (!document.documentMode || 9 < document.documentMode);
  }
  function Lu() {
    Ms && (Ms.detachEvent("onpropertychange", Ru), bs = Ms = null);
  }
  function Ru(e) {
    if (e.propertyName === "value" && _r(bs)) {
      var t = [];
      _u(t, bs, e, ut(e)), Li(pm, t);
    }
  }
  function km(e, t, n) {
    e === "focusin" ? (Lu(), Ms = t, bs = n, Ms.attachEvent("onpropertychange", Ru)) : e === "focusout" && Lu();
  }
  function ym(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return _r(bs);
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
  var hn = typeof Object.is == "function" ? Object.is : jm;
  function _s(e, t) {
    if (hn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!k.call(t, l) || !hn(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ou(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $u(e, t) {
    var n = Ou(e);
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
      n = Ou(n);
    }
  }
  function Fu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Iu() {
    for (var e = window, t = ge(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ge(e.document);
    }
    return t;
  }
  function io(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Sm(e) {
    var t = Iu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Fu(n.ownerDocument.documentElement, n)) {
      if (r !== null && io(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, c = Math.min(r.start, l);
          r = r.end === void 0 ? c : Math.min(r.end, l), !e.extend && c > r && (l = r, r = c, c = l), l = $u(n, c);
          var m = $u(
            n,
            r
          );
          l && m && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), c > r ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var wm = f && "documentMode" in document && 11 >= document.documentMode, Ii = null, so = null, As = null, ro = !1;
  function Du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ro || Ii == null || Ii !== ge(r) || (r = Ii, "selectionStart" in r && io(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), As && _s(As, r) || (As = r, r = Rr(so, "onSelect"), 0 < r.length && (t = new Ya("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ii)));
  }
  function Ar(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Di = { animationend: Ar("Animation", "AnimationEnd"), animationiteration: Ar("Animation", "AnimationIteration"), animationstart: Ar("Animation", "AnimationStart"), transitionend: Ar("Transition", "TransitionEnd") }, ao = {}, zu = {};
  f && (zu = document.createElement("div").style, "AnimationEvent" in window || (delete Di.animationend.animation, delete Di.animationiteration.animation, delete Di.animationstart.animation), "TransitionEvent" in window || delete Di.transitionend.transition);
  function Pr(e) {
    if (ao[e]) return ao[e];
    if (!Di[e]) return e;
    var t = Di[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in zu) return ao[e] = t[n];
    return e;
  }
  var Bu = Pr("animationend"), Vu = Pr("animationiteration"), Ku = Pr("animationstart"), Uu = Pr("transitionend"), Hu = /* @__PURE__ */ new Map(), Gu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Yn(e, t) {
    Hu.set(e, t), h(t, [e]);
  }
  for (var oo = 0; oo < Gu.length; oo++) {
    var lo = Gu[oo], Em = lo.toLowerCase(), Nm = lo[0].toUpperCase() + lo.slice(1);
    Yn(Em, "on" + Nm);
  }
  Yn(Bu, "onAnimationEnd"), Yn(Vu, "onAnimationIteration"), Yn(Ku, "onAnimationStart"), Yn("dblclick", "onDoubleClick"), Yn("focusin", "onFocus"), Yn("focusout", "onBlur"), Yn(Uu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));
  function Wu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, fr(r, t, void 0, e), e.currentTarget = null;
  }
  function Qu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var c = void 0;
        if (t) for (var m = r.length - 1; 0 <= m; m--) {
          var g = r[m], C = g.instance, I = g.currentTarget;
          if (g = g.listener, C !== c && l.isPropagationStopped()) break e;
          Wu(l, g, I), c = C;
        }
        else for (m = 0; m < r.length; m++) {
          if (g = r[m], C = g.instance, I = g.currentTarget, g = g.listener, C !== c && l.isPropagationStopped()) break e;
          Wu(l, g, I), c = C;
        }
      }
    }
    if (dn) throw e = Bn, dn = !1, Bn = null, e;
  }
  function rt(e, t) {
    var n = t[ko];
    n === void 0 && (n = t[ko] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Yu(t, e, 2, !1), n.add(r));
  }
  function uo(e, t, n) {
    var r = 0;
    t && (r |= 4), Yu(n, e, r, t);
  }
  var Lr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ls(e) {
    if (!e[Lr]) {
      e[Lr] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (Cm.has(n) || uo(n, !1, e), uo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Lr] || (t[Lr] = !0, uo("selectionchange", !1, t));
    }
  }
  function Yu(e, t, n, r) {
    switch (yu(t)) {
      case 1:
        var l = zf;
        break;
      case 4:
        l = Bf;
        break;
      default:
        l = Ga;
    }
    n = l.bind(null, t, n, e), l = void 0, !ze || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function co(e, t, n, r, l) {
    var c = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var m = r.tag;
      if (m === 3 || m === 4) {
        var g = r.stateNode.containerInfo;
        if (g === l || g.nodeType === 8 && g.parentNode === l) break;
        if (m === 4) for (m = r.return; m !== null; ) {
          var C = m.tag;
          if ((C === 3 || C === 4) && (C = m.stateNode.containerInfo, C === l || C.nodeType === 8 && C.parentNode === l)) return;
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
      var I = c, Q = ut(n), q = [];
      e: {
        var W = Hu.get(e);
        if (W !== void 0) {
          var he = Ya, ke = e;
          switch (e) {
            case "keypress":
              if (Tr(n) === 0) break e;
            case "keydown":
            case "keyup":
              he = nm;
              break;
            case "focusin":
              ke = "focus", he = Za;
              break;
            case "focusout":
              ke = "blur", he = Za;
              break;
            case "beforeblur":
            case "afterblur":
              he = Za;
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
              he = ju;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = Uf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = rm;
              break;
            case Bu:
            case Vu:
            case Ku:
              he = Wf;
              break;
            case Uu:
              he = om;
              break;
            case "scroll":
              he = Vf;
              break;
            case "wheel":
              he = um;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = Yf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = wu;
          }
          var Se = (t & 4) !== 0, kt = !Se && e === "scroll", P = Se ? W !== null ? W + "Capture" : null : W;
          Se = [];
          for (var M = I, R; M !== null; ) {
            R = M;
            var ie = R.stateNode;
            if (R.tag === 5 && ie !== null && (R = ie, P !== null && (ie = pi(M, P), ie != null && Se.push(Rs(M, ie, R)))), kt) break;
            M = M.return;
          }
          0 < Se.length && (W = new he(W, ke, null, n, Q), q.push({ event: W, listeners: Se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (W = e === "mouseover" || e === "pointerover", he = e === "mouseout" || e === "pointerout", W && n !== Ze && (ke = n.relatedTarget || n.fromElement) && (vi(ke) || ke[_n])) break e;
          if ((he || W) && (W = Q.window === Q ? Q : (W = Q.ownerDocument) ? W.defaultView || W.parentWindow : window, he ? (ke = n.relatedTarget || n.toElement, he = I, ke = ke ? vi(ke) : null, ke !== null && (kt = bn(ke), ke !== kt || ke.tag !== 5 && ke.tag !== 6) && (ke = null)) : (he = null, ke = I), he !== ke)) {
            if (Se = ju, ie = "onMouseLeave", P = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (Se = wu, ie = "onPointerLeave", P = "onPointerEnter", M = "pointer"), kt = he == null ? W : Vi(he), R = ke == null ? W : Vi(ke), W = new Se(ie, M + "leave", he, n, Q), W.target = kt, W.relatedTarget = R, ie = null, vi(Q) === I && (Se = new Se(P, M + "enter", ke, n, Q), Se.target = R, Se.relatedTarget = kt, ie = Se), kt = ie, he && ke) t: {
              for (Se = he, P = ke, M = 0, R = Se; R; R = zi(R)) M++;
              for (R = 0, ie = P; ie; ie = zi(ie)) R++;
              for (; 0 < M - R; ) Se = zi(Se), M--;
              for (; 0 < R - M; ) P = zi(P), R--;
              for (; M--; ) {
                if (Se === P || P !== null && Se === P.alternate) break t;
                Se = zi(Se), P = zi(P);
              }
              Se = null;
            }
            else Se = null;
            he !== null && Ju(q, W, he, Se, !1), ke !== null && kt !== null && Ju(q, kt, ke, Se, !0);
          }
        }
        e: {
          if (W = I ? Vi(I) : window, he = W.nodeName && W.nodeName.toLowerCase(), he === "select" || he === "input" && W.type === "file") var we = vm;
          else if (bu(W)) if (Au) we = xm;
          else {
            we = ym;
            var Ae = km;
          }
          else (he = W.nodeName) && he.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (we = gm);
          if (we && (we = we(e, I))) {
            _u(q, we, n, Q);
            break e;
          }
          Ae && Ae(e, W, I), e === "focusout" && (Ae = W._wrapperState) && Ae.controlled && W.type === "number" && Je(W, "number", W.value);
        }
        switch (Ae = I ? Vi(I) : window, e) {
          case "focusin":
            (bu(Ae) || Ae.contentEditable === "true") && (Ii = Ae, so = I, As = null);
            break;
          case "focusout":
            As = so = Ii = null;
            break;
          case "mousedown":
            ro = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ro = !1, Du(q, n, Q);
            break;
          case "selectionchange":
            if (wm) break;
          case "keydown":
          case "keyup":
            Du(q, n, Q);
        }
        var Pe;
        if (eo) e: {
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
        else Fi ? Tu(e, n) && (Oe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Oe = "onCompositionStart");
        Oe && (Eu && n.locale !== "ko" && (Fi || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && Fi && (Pe = gu()) : (Qn = Q, Qa = "value" in Qn ? Qn.value : Qn.textContent, Fi = !0)), Ae = Rr(I, Oe), 0 < Ae.length && (Oe = new Su(Oe, e, null, n, Q), q.push({ event: Oe, listeners: Ae }), Pe ? Oe.data = Pe : (Pe = Mu(n), Pe !== null && (Oe.data = Pe)))), (Pe = dm ? hm(e, n) : fm(e, n)) && (I = Rr(I, "onBeforeInput"), 0 < I.length && (Q = new Su("onBeforeInput", "beforeinput", null, n, Q), q.push({ event: Q, listeners: I }), Q.data = Pe));
      }
      Qu(q, t);
    });
  }
  function Rs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Rr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, c = l.stateNode;
      l.tag === 5 && c !== null && (l = c, c = pi(e, n), c != null && r.unshift(Rs(e, c, l)), c = pi(e, t), c != null && r.push(Rs(e, c, l))), e = e.return;
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
  function Ju(e, t, n, r, l) {
    for (var c = t._reactName, m = []; n !== null && n !== r; ) {
      var g = n, C = g.alternate, I = g.stateNode;
      if (C !== null && C === r) break;
      g.tag === 5 && I !== null && (g = I, l ? (C = pi(n, c), C != null && m.unshift(Rs(n, C, g))) : l || (C = pi(n, c), C != null && m.push(Rs(n, C, g)))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Tm = /\r\n?/g, Mm = /\u0000|\uFFFD/g;
  function Xu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Tm, `
`).replace(Mm, "");
  }
  function Or(e, t, n) {
    if (t = Xu(t), Xu(e) !== t && n) throw Error(o(425));
  }
  function $r() {
  }
  var ho = null, fo = null;
  function mo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var po = typeof setTimeout == "function" ? setTimeout : void 0, bm = typeof clearTimeout == "function" ? clearTimeout : void 0, Zu = typeof Promise == "function" ? Promise : void 0, _m = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zu < "u" ? function(e) {
    return Zu.resolve(null).then(e).catch(Am);
  } : po;
  function Am(e) {
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
          e.removeChild(l), Es(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
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
  function qu(e) {
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
  var Bi = Math.random().toString(36).slice(2), jn = "__reactFiber$" + Bi, Os = "__reactProps$" + Bi, _n = "__reactContainer$" + Bi, ko = "__reactEvents$" + Bi, Pm = "__reactListeners$" + Bi, Lm = "__reactHandles$" + Bi;
  function vi(e) {
    var t = e[jn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[_n] || n[jn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = qu(e); e !== null; ) {
          if (n = e[jn]) return n;
          e = qu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function $s(e) {
    return e = e[jn] || e[_n], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Vi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Fr(e) {
    return e[Os] || null;
  }
  var yo = [], Ki = -1;
  function Xn(e) {
    return { current: e };
  }
  function at(e) {
    0 > Ki || (e.current = yo[Ki], yo[Ki] = null, Ki--);
  }
  function it(e, t) {
    Ki++, yo[Ki] = e.current, e.current = t;
  }
  var Zn = {}, At = Xn(Zn), Vt = Xn(!1), ki = Zn;
  function Ui(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Zn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, c;
    for (c in n) l[c] = t[c];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Kt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ir() {
    at(Vt), at(At);
  }
  function ec(e, t, n) {
    if (At.current !== Zn) throw Error(o(168));
    it(At, t), it(Vt, n);
  }
  function tc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(o(108, U(e) || "Unknown", l));
    return te({}, n, r);
  }
  function Dr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zn, ki = At.current, it(At, e), it(Vt, Vt.current), !0;
  }
  function nc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n ? (e = tc(e, t, ki), r.__reactInternalMemoizedMergedChildContext = e, at(Vt), at(At), it(At, e)) : at(Vt), it(Vt, n);
  }
  var An = null, zr = !1, go = !1;
  function ic(e) {
    An === null ? An = [e] : An.push(e);
  }
  function Rm(e) {
    zr = !0, ic(e);
  }
  function qn() {
    if (!go && An !== null) {
      go = !0;
      var e = 0, t = qe;
      try {
        var n = An;
        for (qe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        An = null, zr = !1;
      } catch (l) {
        throw An !== null && (An = An.slice(e + 1)), Ct(xn, qn), l;
      } finally {
        qe = t, go = !1;
      }
    }
    return null;
  }
  var Hi = [], Gi = 0, Br = null, Vr = 0, tn = [], nn = 0, yi = null, Pn = 1, Ln = "";
  function gi(e, t) {
    Hi[Gi++] = Vr, Hi[Gi++] = Br, Br = e, Vr = t;
  }
  function sc(e, t, n) {
    tn[nn++] = Pn, tn[nn++] = Ln, tn[nn++] = yi, yi = e;
    var r = Pn;
    e = Ln;
    var l = 32 - Tt(r) - 1;
    r &= ~(1 << l), n += 1;
    var c = 32 - Tt(t) + l;
    if (30 < c) {
      var m = l - l % 5;
      c = (r & (1 << m) - 1).toString(32), r >>= m, l -= m, Pn = 1 << 32 - Tt(t) + l | n << l | r, Ln = c + e;
    } else Pn = 1 << c | n << l | r, Ln = e;
  }
  function xo(e) {
    e.return !== null && (gi(e, 1), sc(e, 1, 0));
  }
  function jo(e) {
    for (; e === Br; ) Br = Hi[--Gi], Hi[Gi] = null, Vr = Hi[--Gi], Hi[Gi] = null;
    for (; e === yi; ) yi = tn[--nn], tn[nn] = null, Ln = tn[--nn], tn[nn] = null, Pn = tn[--nn], tn[nn] = null;
  }
  var Xt = null, Zt = null, lt = !1, fn = null;
  function rc(e, t) {
    var n = on(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ac(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xt = e, Zt = Jn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xt = e, Zt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = yi !== null ? { id: Pn, overflow: Ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = on(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xt = e, Zt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function So(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function wo(e) {
    if (lt) {
      var t = Zt;
      if (t) {
        var n = t;
        if (!ac(e, t)) {
          if (So(e)) throw Error(o(418));
          t = Jn(n.nextSibling);
          var r = Xt;
          t && ac(e, t) ? rc(r, n) : (e.flags = e.flags & -4097 | 2, lt = !1, Xt = e);
        }
      } else {
        if (So(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, lt = !1, Xt = e;
      }
    }
  }
  function oc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Xt = e;
  }
  function Kr(e) {
    if (e !== Xt) return !1;
    if (!lt) return oc(e), lt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !mo(e.type, e.memoizedProps)), t && (t = Zt)) {
      if (So(e)) throw lc(), Error(o(418));
      for (; t; ) rc(e, t), t = Jn(t.nextSibling);
    }
    if (oc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Zt = Jn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Zt = null;
      }
    } else Zt = Xt ? Jn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function lc() {
    for (var e = Zt; e; ) e = Jn(e.nextSibling);
  }
  function Wi() {
    Zt = Xt = null, lt = !1;
  }
  function Eo(e) {
    fn === null ? fn = [e] : fn.push(e);
  }
  var Om = B.ReactCurrentBatchConfig;
  function Fs(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var l = r, c = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c ? t.ref : (t = function(m) {
          var g = l.refs;
          m === null ? delete g[c] : g[c] = m;
        }, t._stringRef = c, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Ur(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function uc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function cc(e) {
    function t(P, M) {
      if (e) {
        var R = P.deletions;
        R === null ? (P.deletions = [M], P.flags |= 16) : R.push(M);
      }
    }
    function n(P, M) {
      if (!e) return null;
      for (; M !== null; ) t(P, M), M = M.sibling;
      return null;
    }
    function r(P, M) {
      for (P = /* @__PURE__ */ new Map(); M !== null; ) M.key !== null ? P.set(M.key, M) : P.set(M.index, M), M = M.sibling;
      return P;
    }
    function l(P, M) {
      return P = oi(P, M), P.index = 0, P.sibling = null, P;
    }
    function c(P, M, R) {
      return P.index = R, e ? (R = P.alternate, R !== null ? (R = R.index, R < M ? (P.flags |= 2, M) : R) : (P.flags |= 2, M)) : (P.flags |= 1048576, M);
    }
    function m(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function g(P, M, R, ie) {
      return M === null || M.tag !== 6 ? (M = pl(R, P.mode, ie), M.return = P, M) : (M = l(M, R), M.return = P, M);
    }
    function C(P, M, R, ie) {
      var we = R.type;
      return we === $ ? Q(P, M, R.props.children, ie, R.key) : M !== null && (M.elementType === we || typeof we == "object" && we !== null && we.$$typeof === oe && uc(we) === M.type) ? (ie = l(M, R.props), ie.ref = Fs(P, M, R), ie.return = P, ie) : (ie = ma(R.type, R.key, R.props, null, P.mode, ie), ie.ref = Fs(P, M, R), ie.return = P, ie);
    }
    function I(P, M, R, ie) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== R.containerInfo || M.stateNode.implementation !== R.implementation ? (M = vl(R, P.mode, ie), M.return = P, M) : (M = l(M, R.children || []), M.return = P, M);
    }
    function Q(P, M, R, ie, we) {
      return M === null || M.tag !== 7 ? (M = Ti(R, P.mode, ie, we), M.return = P, M) : (M = l(M, R), M.return = P, M);
    }
    function q(P, M, R) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return M = pl("" + M, P.mode, R), M.return = P, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case V:
            return R = ma(M.type, M.key, M.props, null, P.mode, R), R.ref = Fs(P, null, M), R.return = P, R;
          case D:
            return M = vl(M, P.mode, R), M.return = P, M;
          case oe:
            var ie = M._init;
            return q(P, ie(M._payload), R);
        }
        if (tt(M) || ae(M)) return M = Ti(M, P.mode, R, null), M.return = P, M;
        Ur(P, M);
      }
      return null;
    }
    function W(P, M, R, ie) {
      var we = M !== null ? M.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return we !== null ? null : g(P, M, "" + R, ie);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case V:
            return R.key === we ? C(P, M, R, ie) : null;
          case D:
            return R.key === we ? I(P, M, R, ie) : null;
          case oe:
            return we = R._init, W(
              P,
              M,
              we(R._payload),
              ie
            );
        }
        if (tt(R) || ae(R)) return we !== null ? null : Q(P, M, R, ie, null);
        Ur(P, R);
      }
      return null;
    }
    function he(P, M, R, ie, we) {
      if (typeof ie == "string" && ie !== "" || typeof ie == "number") return P = P.get(R) || null, g(M, P, "" + ie, we);
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case V:
            return P = P.get(ie.key === null ? R : ie.key) || null, C(M, P, ie, we);
          case D:
            return P = P.get(ie.key === null ? R : ie.key) || null, I(M, P, ie, we);
          case oe:
            var Ae = ie._init;
            return he(P, M, R, Ae(ie._payload), we);
        }
        if (tt(ie) || ae(ie)) return P = P.get(R) || null, Q(M, P, ie, we, null);
        Ur(M, ie);
      }
      return null;
    }
    function ke(P, M, R, ie) {
      for (var we = null, Ae = null, Pe = M, Oe = M = 0, wt = null; Pe !== null && Oe < R.length; Oe++) {
        Pe.index > Oe ? (wt = Pe, Pe = null) : wt = Pe.sibling;
        var Ye = W(P, Pe, R[Oe], ie);
        if (Ye === null) {
          Pe === null && (Pe = wt);
          break;
        }
        e && Pe && Ye.alternate === null && t(P, Pe), M = c(Ye, M, Oe), Ae === null ? we = Ye : Ae.sibling = Ye, Ae = Ye, Pe = wt;
      }
      if (Oe === R.length) return n(P, Pe), lt && gi(P, Oe), we;
      if (Pe === null) {
        for (; Oe < R.length; Oe++) Pe = q(P, R[Oe], ie), Pe !== null && (M = c(Pe, M, Oe), Ae === null ? we = Pe : Ae.sibling = Pe, Ae = Pe);
        return lt && gi(P, Oe), we;
      }
      for (Pe = r(P, Pe); Oe < R.length; Oe++) wt = he(Pe, P, Oe, R[Oe], ie), wt !== null && (e && wt.alternate !== null && Pe.delete(wt.key === null ? Oe : wt.key), M = c(wt, M, Oe), Ae === null ? we = wt : Ae.sibling = wt, Ae = wt);
      return e && Pe.forEach(function(li) {
        return t(P, li);
      }), lt && gi(P, Oe), we;
    }
    function Se(P, M, R, ie) {
      var we = ae(R);
      if (typeof we != "function") throw Error(o(150));
      if (R = we.call(R), R == null) throw Error(o(151));
      for (var Ae = we = null, Pe = M, Oe = M = 0, wt = null, Ye = R.next(); Pe !== null && !Ye.done; Oe++, Ye = R.next()) {
        Pe.index > Oe ? (wt = Pe, Pe = null) : wt = Pe.sibling;
        var li = W(P, Pe, Ye.value, ie);
        if (li === null) {
          Pe === null && (Pe = wt);
          break;
        }
        e && Pe && li.alternate === null && t(P, Pe), M = c(li, M, Oe), Ae === null ? we = li : Ae.sibling = li, Ae = li, Pe = wt;
      }
      if (Ye.done) return n(
        P,
        Pe
      ), lt && gi(P, Oe), we;
      if (Pe === null) {
        for (; !Ye.done; Oe++, Ye = R.next()) Ye = q(P, Ye.value, ie), Ye !== null && (M = c(Ye, M, Oe), Ae === null ? we = Ye : Ae.sibling = Ye, Ae = Ye);
        return lt && gi(P, Oe), we;
      }
      for (Pe = r(P, Pe); !Ye.done; Oe++, Ye = R.next()) Ye = he(Pe, P, Oe, Ye.value, ie), Ye !== null && (e && Ye.alternate !== null && Pe.delete(Ye.key === null ? Oe : Ye.key), M = c(Ye, M, Oe), Ae === null ? we = Ye : Ae.sibling = Ye, Ae = Ye);
      return e && Pe.forEach(function(mp) {
        return t(P, mp);
      }), lt && gi(P, Oe), we;
    }
    function kt(P, M, R, ie) {
      if (typeof R == "object" && R !== null && R.type === $ && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case V:
            e: {
              for (var we = R.key, Ae = M; Ae !== null; ) {
                if (Ae.key === we) {
                  if (we = R.type, we === $) {
                    if (Ae.tag === 7) {
                      n(P, Ae.sibling), M = l(Ae, R.props.children), M.return = P, P = M;
                      break e;
                    }
                  } else if (Ae.elementType === we || typeof we == "object" && we !== null && we.$$typeof === oe && uc(we) === Ae.type) {
                    n(P, Ae.sibling), M = l(Ae, R.props), M.ref = Fs(P, Ae, R), M.return = P, P = M;
                    break e;
                  }
                  n(P, Ae);
                  break;
                } else t(P, Ae);
                Ae = Ae.sibling;
              }
              R.type === $ ? (M = Ti(R.props.children, P.mode, ie, R.key), M.return = P, P = M) : (ie = ma(R.type, R.key, R.props, null, P.mode, ie), ie.ref = Fs(P, M, R), ie.return = P, P = ie);
            }
            return m(P);
          case D:
            e: {
              for (Ae = R.key; M !== null; ) {
                if (M.key === Ae) if (M.tag === 4 && M.stateNode.containerInfo === R.containerInfo && M.stateNode.implementation === R.implementation) {
                  n(P, M.sibling), M = l(M, R.children || []), M.return = P, P = M;
                  break e;
                } else {
                  n(P, M);
                  break;
                }
                else t(P, M);
                M = M.sibling;
              }
              M = vl(R, P.mode, ie), M.return = P, P = M;
            }
            return m(P);
          case oe:
            return Ae = R._init, kt(P, M, Ae(R._payload), ie);
        }
        if (tt(R)) return ke(P, M, R, ie);
        if (ae(R)) return Se(P, M, R, ie);
        Ur(P, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, M !== null && M.tag === 6 ? (n(P, M.sibling), M = l(M, R), M.return = P, P = M) : (n(P, M), M = pl(R, P.mode, ie), M.return = P, P = M), m(P)) : n(P, M);
    }
    return kt;
  }
  var Qi = cc(!0), dc = cc(!1), Hr = Xn(null), Gr = null, Yi = null, No = null;
  function Co() {
    No = Yi = Gr = null;
  }
  function To(e) {
    var t = Hr.current;
    at(Hr), e._currentValue = t;
  }
  function Mo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ji(e, t) {
    Gr = e, No = Yi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ut = !0), e.firstContext = null);
  }
  function sn(e) {
    var t = e._currentValue;
    if (No !== e) if (e = { context: e, memoizedValue: t, next: null }, Yi === null) {
      if (Gr === null) throw Error(o(308));
      Yi = e, Gr.dependencies = { lanes: 0, firstContext: e };
    } else Yi = Yi.next = e;
    return t;
  }
  var xi = null;
  function bo(e) {
    xi === null ? xi = [e] : xi.push(e);
  }
  function hc(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, bo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Rn(e, r);
  }
  function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var ei = !1;
  function _o(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function fc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function On(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ti(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (We & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Rn(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, bo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Rn(e, n);
  }
  function Wr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ka(e, n);
    }
  }
  function mc(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          c === null ? l = c = m : c = c.next = m, n = n.next;
        } while (n !== null);
        c === null ? l = c = t : c = c.next = t;
      } else l = c = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: c, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Qr(e, t, n, r) {
    var l = e.updateQueue;
    ei = !1;
    var c = l.firstBaseUpdate, m = l.lastBaseUpdate, g = l.shared.pending;
    if (g !== null) {
      l.shared.pending = null;
      var C = g, I = C.next;
      C.next = null, m === null ? c = I : m.next = I, m = C;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, g = Q.lastBaseUpdate, g !== m && (g === null ? Q.firstBaseUpdate = I : g.next = I, Q.lastBaseUpdate = C));
    }
    if (c !== null) {
      var q = l.baseState;
      m = 0, Q = I = C = null, g = c;
      do {
        var W = g.lane, he = g.eventTime;
        if ((r & W) === W) {
          Q !== null && (Q = Q.next = {
            eventTime: he,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var ke = e, Se = g;
            switch (W = t, he = n, Se.tag) {
              case 1:
                if (ke = Se.payload, typeof ke == "function") {
                  q = ke.call(he, q, W);
                  break e;
                }
                q = ke;
                break e;
              case 3:
                ke.flags = ke.flags & -65537 | 128;
              case 0:
                if (ke = Se.payload, W = typeof ke == "function" ? ke.call(he, q, W) : ke, W == null) break e;
                q = te({}, q, W);
                break e;
              case 2:
                ei = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, W = l.effects, W === null ? l.effects = [g] : W.push(g));
        } else he = { eventTime: he, lane: W, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, Q === null ? (I = Q = he, C = q) : Q = Q.next = he, m |= W;
        if (g = g.next, g === null) {
          if (g = l.shared.pending, g === null) break;
          W = g, g = W.next, W.next = null, l.lastBaseUpdate = W, l.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (C = q), l.baseState = C, l.firstBaseUpdate = I, l.lastBaseUpdate = Q, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          m |= l.lane, l = l.next;
        while (l !== t);
      } else c === null && (l.shared.lanes = 0);
      wi |= m, e.lanes = m, e.memoizedState = q;
    }
  }
  function pc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(o(191, l));
        l.call(r);
      }
    }
  }
  var Is = {}, Sn = Xn(Is), Ds = Xn(Is), zs = Xn(Is);
  function ji(e) {
    if (e === Is) throw Error(o(174));
    return e;
  }
  function Ao(e, t) {
    switch (it(zs, t), it(Ds, e), it(Sn, Is), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : He(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = He(t, e);
    }
    at(Sn), it(Sn, t);
  }
  function Xi() {
    at(Sn), at(Ds), at(zs);
  }
  function vc(e) {
    ji(zs.current);
    var t = ji(Sn.current), n = He(t, e.type);
    t !== n && (it(Ds, e), it(Sn, n));
  }
  function Po(e) {
    Ds.current === e && (at(Sn), at(Ds));
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
  var Lo = [];
  function Ro() {
    for (var e = 0; e < Lo.length; e++) Lo[e]._workInProgressVersionPrimary = null;
    Lo.length = 0;
  }
  var Jr = B.ReactCurrentDispatcher, Oo = B.ReactCurrentBatchConfig, Si = 0, ft = null, gt = null, jt = null, Xr = !1, Bs = !1, Vs = 0, $m = 0;
  function Pt() {
    throw Error(o(321));
  }
  function $o(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!hn(e[n], t[n])) return !1;
    return !0;
  }
  function Fo(e, t, n, r, l, c) {
    if (Si = c, ft = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jr.current = e === null || e.memoizedState === null ? zm : Bm, e = n(r, l), Bs) {
      c = 0;
      do {
        if (Bs = !1, Vs = 0, 25 <= c) throw Error(o(301));
        c += 1, jt = gt = null, t.updateQueue = null, Jr.current = Vm, e = n(r, l);
      } while (Bs);
    }
    if (Jr.current = ea, t = gt !== null && gt.next !== null, Si = 0, jt = gt = ft = null, Xr = !1, t) throw Error(o(300));
    return e;
  }
  function Io() {
    var e = Vs !== 0;
    return Vs = 0, e;
  }
  function wn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return jt === null ? ft.memoizedState = jt = e : jt = jt.next = e, jt;
  }
  function rn() {
    if (gt === null) {
      var e = ft.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = gt.next;
    var t = jt === null ? ft.memoizedState : jt.next;
    if (t !== null) jt = t, gt = e;
    else {
      if (e === null) throw Error(o(310));
      gt = e, e = { memoizedState: gt.memoizedState, baseState: gt.baseState, baseQueue: gt.baseQueue, queue: gt.queue, next: null }, jt === null ? ft.memoizedState = jt = e : jt = jt.next = e;
    }
    return jt;
  }
  function Ks(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Do(e) {
    var t = rn(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = gt, l = r.baseQueue, c = n.pending;
    if (c !== null) {
      if (l !== null) {
        var m = l.next;
        l.next = c.next, c.next = m;
      }
      r.baseQueue = l = c, n.pending = null;
    }
    if (l !== null) {
      c = l.next, r = r.baseState;
      var g = m = null, C = null, I = c;
      do {
        var Q = I.lane;
        if ((Si & Q) === Q) C !== null && (C = C.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), r = I.hasEagerState ? I.eagerState : e(r, I.action);
        else {
          var q = {
            lane: Q,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          C === null ? (g = C = q, m = r) : C = C.next = q, ft.lanes |= Q, wi |= Q;
        }
        I = I.next;
      } while (I !== null && I !== c);
      C === null ? m = r : C.next = g, hn(r, t.memoizedState) || (Ut = !0), t.memoizedState = r, t.baseState = m, t.baseQueue = C, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        c = l.lane, ft.lanes |= c, wi |= c, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function zo(e) {
    var t = rn(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, c = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var m = l = l.next;
      do
        c = e(c, m.action), m = m.next;
      while (m !== l);
      hn(c, t.memoizedState) || (Ut = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, r];
  }
  function kc() {
  }
  function yc(e, t) {
    var n = ft, r = rn(), l = t(), c = !hn(r.memoizedState, l);
    if (c && (r.memoizedState = l, Ut = !0), r = r.queue, Bo(jc.bind(null, n, r, e), [e]), r.getSnapshot !== t || c || jt !== null && jt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Us(9, xc.bind(null, n, r, l, t), void 0, null), St === null) throw Error(o(349));
      (Si & 30) !== 0 || gc(n, t, l);
    }
    return l;
  }
  function gc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ft.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ft.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function xc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Sc(t) && wc(e);
  }
  function jc(e, t, n) {
    return n(function() {
      Sc(t) && wc(e);
    });
  }
  function Sc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !hn(e, n);
    } catch {
      return !0;
    }
  }
  function wc(e) {
    var t = Rn(e, 1);
    t !== null && kn(t, e, 1, -1);
  }
  function Ec(e) {
    var t = wn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ks, lastRenderedState: e }, t.queue = e, e = e.dispatch = Dm.bind(null, ft, e), [t.memoizedState, e];
  }
  function Us(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ft.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ft.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Nc() {
    return rn().memoizedState;
  }
  function Zr(e, t, n, r) {
    var l = wn();
    ft.flags |= e, l.memoizedState = Us(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function qr(e, t, n, r) {
    var l = rn();
    r = r === void 0 ? null : r;
    var c = void 0;
    if (gt !== null) {
      var m = gt.memoizedState;
      if (c = m.destroy, r !== null && $o(r, m.deps)) {
        l.memoizedState = Us(t, n, c, r);
        return;
      }
    }
    ft.flags |= e, l.memoizedState = Us(1 | t, n, c, r);
  }
  function Cc(e, t) {
    return Zr(8390656, 8, e, t);
  }
  function Bo(e, t) {
    return qr(2048, 8, e, t);
  }
  function Tc(e, t) {
    return qr(4, 2, e, t);
  }
  function Mc(e, t) {
    return qr(4, 4, e, t);
  }
  function bc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function _c(e, t, n) {
    return n = n != null ? n.concat([e]) : null, qr(4, 4, bc.bind(null, t, e), n);
  }
  function Vo() {
  }
  function Ac(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Pc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Lc(e, t, n) {
    return (Si & 21) === 0 ? (e.baseState && (e.baseState = !1, Ut = !0), e.memoizedState = n) : (hn(n, t) || (n = uu(), ft.lanes |= n, wi |= n, e.baseState = !0), t);
  }
  function Fm(e, t) {
    var n = qe;
    qe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Oo.transition;
    Oo.transition = {};
    try {
      e(!1), t();
    } finally {
      qe = n, Oo.transition = r;
    }
  }
  function Rc() {
    return rn().memoizedState;
  }
  function Im(e, t, n) {
    var r = ri(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Oc(e)) $c(t, n);
    else if (n = hc(e, t, n, r), n !== null) {
      var l = Dt();
      kn(n, e, r, l), Fc(n, t, r);
    }
  }
  function Dm(e, t, n) {
    var r = ri(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Oc(e)) $c(t, l);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
        var m = t.lastRenderedState, g = c(m, n);
        if (l.hasEagerState = !0, l.eagerState = g, hn(g, m)) {
          var C = t.interleaved;
          C === null ? (l.next = l, bo(t)) : (l.next = C.next, C.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = hc(e, t, l, r), n !== null && (l = Dt(), kn(n, e, r, l), Fc(n, t, r));
    }
  }
  function Oc(e) {
    var t = e.alternate;
    return e === ft || t !== null && t === ft;
  }
  function $c(e, t) {
    Bs = Xr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Fc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ka(e, n);
    }
  }
  var ea = { readContext: sn, useCallback: Pt, useContext: Pt, useEffect: Pt, useImperativeHandle: Pt, useInsertionEffect: Pt, useLayoutEffect: Pt, useMemo: Pt, useReducer: Pt, useRef: Pt, useState: Pt, useDebugValue: Pt, useDeferredValue: Pt, useTransition: Pt, useMutableSource: Pt, useSyncExternalStore: Pt, useId: Pt, unstable_isNewReconciler: !1 }, zm = { readContext: sn, useCallback: function(e, t) {
    return wn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: sn, useEffect: Cc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Zr(
      4194308,
      4,
      bc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Zr(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Zr(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = wn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = wn();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Im.bind(null, ft, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = wn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ec, useDebugValue: Vo, useDeferredValue: function(e) {
    return wn().memoizedState = e;
  }, useTransition: function() {
    var e = Ec(!1), t = e[0];
    return e = Fm.bind(null, e[1]), wn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ft, l = wn();
    if (lt) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), St === null) throw Error(o(349));
      (Si & 30) !== 0 || gc(r, t, n);
    }
    l.memoizedState = n;
    var c = { value: n, getSnapshot: t };
    return l.queue = c, Cc(jc.bind(
      null,
      r,
      c,
      e
    ), [e]), r.flags |= 2048, Us(9, xc.bind(null, r, c, n, t), void 0, null), n;
  }, useId: function() {
    var e = wn(), t = St.identifierPrefix;
    if (lt) {
      var n = Ln, r = Pn;
      n = (r & ~(1 << 32 - Tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Vs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = $m++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Bm = {
    readContext: sn,
    useCallback: Ac,
    useContext: sn,
    useEffect: Bo,
    useImperativeHandle: _c,
    useInsertionEffect: Tc,
    useLayoutEffect: Mc,
    useMemo: Pc,
    useReducer: Do,
    useRef: Nc,
    useState: function() {
      return Do(Ks);
    },
    useDebugValue: Vo,
    useDeferredValue: function(e) {
      var t = rn();
      return Lc(t, gt.memoizedState, e);
    },
    useTransition: function() {
      var e = Do(Ks)[0], t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: kc,
    useSyncExternalStore: yc,
    useId: Rc,
    unstable_isNewReconciler: !1
  }, Vm = { readContext: sn, useCallback: Ac, useContext: sn, useEffect: Bo, useImperativeHandle: _c, useInsertionEffect: Tc, useLayoutEffect: Mc, useMemo: Pc, useReducer: zo, useRef: Nc, useState: function() {
    return zo(Ks);
  }, useDebugValue: Vo, useDeferredValue: function(e) {
    var t = rn();
    return gt === null ? t.memoizedState = e : Lc(t, gt.memoizedState, e);
  }, useTransition: function() {
    var e = zo(Ks)[0], t = rn().memoizedState;
    return [e, t];
  }, useMutableSource: kc, useSyncExternalStore: yc, useId: Rc, unstable_isNewReconciler: !1 };
  function mn(e, t) {
    if (e && e.defaultProps) {
      t = te({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ko(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ta = { isMounted: function(e) {
    return (e = e._reactInternals) ? bn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Dt(), l = ri(e), c = On(r, l);
    c.payload = t, n != null && (c.callback = n), t = ti(e, c, l), t !== null && (kn(t, e, l, r), Wr(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Dt(), l = ri(e), c = On(r, l);
    c.tag = 1, c.payload = t, n != null && (c.callback = n), t = ti(e, c, l), t !== null && (kn(t, e, l, r), Wr(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Dt(), r = ri(e), l = On(n, r);
    l.tag = 2, t != null && (l.callback = t), t = ti(e, l, r), t !== null && (kn(t, e, r, n), Wr(t, e, r));
  } };
  function Ic(e, t, n, r, l, c, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, m) : t.prototype && t.prototype.isPureReactComponent ? !_s(n, r) || !_s(l, c) : !0;
  }
  function Dc(e, t, n) {
    var r = !1, l = Zn, c = t.contextType;
    return typeof c == "object" && c !== null ? c = sn(c) : (l = Kt(t) ? ki : At.current, r = t.contextTypes, c = (r = r != null) ? Ui(e, l) : Zn), t = new t(n, c), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ta, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = c), t;
  }
  function zc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ta.enqueueReplaceState(t, t.state, null);
  }
  function Uo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, _o(e);
    var c = t.contextType;
    typeof c == "object" && c !== null ? l.context = sn(c) : (c = Kt(t) ? ki : At.current, l.context = Ui(e, c)), l.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (Ko(e, t, c, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ta.enqueueReplaceState(l, l.state, null), Qr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Zi(e, t) {
    try {
      var n = "", r = t;
      do
        n += de(r), r = r.return;
      while (r);
      var l = n;
    } catch (c) {
      l = `
Error generating stack: ` + c.message + `
` + c.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Ho(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Go(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Km = typeof WeakMap == "function" ? WeakMap : Map;
  function Bc(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      la || (la = !0, ol = r), Go(e, t);
    }, n;
  }
  function Vc(e, t, n) {
    n = On(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Go(e, t);
      };
    }
    var c = e.stateNode;
    return c !== null && typeof c.componentDidCatch == "function" && (n.callback = function() {
      Go(e, t), typeof r != "function" && (ii === null ? ii = /* @__PURE__ */ new Set([this]) : ii.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), n;
  }
  function Kc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Km();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = ip.bind(null, e, t, n), t.then(e, e));
  }
  function Uc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Hc(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, ti(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Um = B.ReactCurrentOwner, Ut = !1;
  function It(e, t, n, r) {
    t.child = e === null ? dc(t, null, n, r) : Qi(t, e.child, n, r);
  }
  function Gc(e, t, n, r, l) {
    n = n.render;
    var c = t.ref;
    return Ji(t, l), r = Fo(e, t, n, r, c, l), n = Io(), e !== null && !Ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (lt && n && xo(t), t.flags |= 1, It(e, t, r, l), t.child);
  }
  function Wc(e, t, n, r, l) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !ml(c) && c.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = c, Qc(e, t, c, r, l)) : (e = ma(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, (e.lanes & l) === 0) {
      var m = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : _s, n(m, r) && e.ref === t.ref) return $n(e, t, l);
    }
    return t.flags |= 1, e = oi(c, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Qc(e, t, n, r, l) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (_s(c, r) && e.ref === t.ref) if (Ut = !1, t.pendingProps = r = c, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ut = !0);
      else return t.lanes = e.lanes, $n(e, t, l);
    }
    return Wo(e, t, n, r, l);
  }
  function Yc(e, t, n) {
    var r = t.pendingProps, l = r.children, c = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, it(es, qt), qt |= n;
    else {
      if ((n & 1073741824) === 0) return e = c !== null ? c.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, it(es, qt), qt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = c !== null ? c.baseLanes : n, it(es, qt), qt |= r;
    }
    else c !== null ? (r = c.baseLanes | n, t.memoizedState = null) : r = n, it(es, qt), qt |= r;
    return It(e, t, l, n), t.child;
  }
  function Jc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Wo(e, t, n, r, l) {
    var c = Kt(n) ? ki : At.current;
    return c = Ui(t, c), Ji(t, l), n = Fo(e, t, n, r, c, l), r = Io(), e !== null && !Ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (lt && r && xo(t), t.flags |= 1, It(e, t, n, l), t.child);
  }
  function Xc(e, t, n, r, l) {
    if (Kt(n)) {
      var c = !0;
      Dr(t);
    } else c = !1;
    if (Ji(t, l), t.stateNode === null) ia(e, t), Dc(t, n, r), Uo(t, n, r, l), r = !0;
    else if (e === null) {
      var m = t.stateNode, g = t.memoizedProps;
      m.props = g;
      var C = m.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = sn(I) : (I = Kt(n) ? ki : At.current, I = Ui(t, I));
      var Q = n.getDerivedStateFromProps, q = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (g !== r || C !== I) && zc(t, m, r, I), ei = !1;
      var W = t.memoizedState;
      m.state = W, Qr(t, r, m, l), C = t.memoizedState, g !== r || W !== C || Vt.current || ei ? (typeof Q == "function" && (Ko(t, n, Q, r), C = t.memoizedState), (g = ei || Ic(t, n, g, r, W, C, I)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = C), m.props = r, m.state = C, m.context = I, r = g) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      m = t.stateNode, fc(e, t), g = t.memoizedProps, I = t.type === t.elementType ? g : mn(t.type, g), m.props = I, q = t.pendingProps, W = m.context, C = n.contextType, typeof C == "object" && C !== null ? C = sn(C) : (C = Kt(n) ? ki : At.current, C = Ui(t, C));
      var he = n.getDerivedStateFromProps;
      (Q = typeof he == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (g !== q || W !== C) && zc(t, m, r, C), ei = !1, W = t.memoizedState, m.state = W, Qr(t, r, m, l);
      var ke = t.memoizedState;
      g !== q || W !== ke || Vt.current || ei ? (typeof he == "function" && (Ko(t, n, he, r), ke = t.memoizedState), (I = ei || Ic(t, n, I, r, W, ke, C) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(r, ke, C), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(r, ke, C)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || g === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = ke), m.props = r, m.state = ke, m.context = C, r = I) : (typeof m.componentDidUpdate != "function" || g === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Qo(e, t, n, r, c, l);
  }
  function Qo(e, t, n, r, l, c) {
    Jc(e, t);
    var m = (t.flags & 128) !== 0;
    if (!r && !m) return l && nc(t, n, !1), $n(e, t, c);
    r = t.stateNode, Um.current = t;
    var g = m && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && m ? (t.child = Qi(t, e.child, null, c), t.child = Qi(t, null, g, c)) : It(e, t, g, c), t.memoizedState = r.state, l && nc(t, n, !0), t.child;
  }
  function Zc(e) {
    var t = e.stateNode;
    t.pendingContext ? ec(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ec(e, t.context, !1), Ao(e, t.containerInfo);
  }
  function qc(e, t, n, r, l) {
    return Wi(), Eo(l), t.flags |= 256, It(e, t, n, r), t.child;
  }
  var Yo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ed(e, t, n) {
    var r = t.pendingProps, l = ht.current, c = !1, m = (t.flags & 128) !== 0, g;
    if ((g = m) || (g = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), g ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), it(ht, l & 1), e === null)
      return wo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = r.children, e = r.fallback, c ? (r = t.mode, c = t.child, m = { mode: "hidden", children: m }, (r & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = m) : c = pa(m, r, 0, null), e = Ti(e, r, n, null), c.return = t, e.return = t, c.sibling = e, t.child = c, t.child.memoizedState = Jo(n), t.memoizedState = Yo, e) : Xo(t, m));
    if (l = e.memoizedState, l !== null && (g = l.dehydrated, g !== null)) return Hm(e, t, m, r, g, l, n);
    if (c) {
      c = r.fallback, m = t.mode, l = e.child, g = l.sibling;
      var C = { mode: "hidden", children: r.children };
      return (m & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = C, t.deletions = null) : (r = oi(l, C), r.subtreeFlags = l.subtreeFlags & 14680064), g !== null ? c = oi(g, c) : (c = Ti(c, m, n, null), c.flags |= 2), c.return = t, r.return = t, r.sibling = c, t.child = r, r = c, c = t.child, m = e.child.memoizedState, m = m === null ? Jo(n) : { baseLanes: m.baseLanes | n, cachePool: null, transitions: m.transitions }, c.memoizedState = m, c.childLanes = e.childLanes & ~n, t.memoizedState = Yo, r;
    }
    return c = e.child, e = c.sibling, r = oi(c, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Xo(e, t) {
    return t = pa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function na(e, t, n, r) {
    return r !== null && Eo(r), Qi(t, e.child, null, n), e = Xo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Hm(e, t, n, r, l, c, m) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ho(Error(o(422))), na(e, t, m, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (c = r.fallback, l = t.mode, r = pa({ mode: "visible", children: r.children }, l, 0, null), c = Ti(c, l, m, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, (t.mode & 1) !== 0 && Qi(t, e.child, null, m), t.child.memoizedState = Jo(m), t.memoizedState = Yo, c);
    if ((t.mode & 1) === 0) return na(e, t, m, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var g = r.dgst;
      return r = g, c = Error(o(419)), r = Ho(c, r, void 0), na(e, t, m, r);
    }
    if (g = (m & e.childLanes) !== 0, Ut || g) {
      if (r = St, r !== null) {
        switch (m & -m) {
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
        l = (l & (r.suspendedLanes | m)) !== 0 ? 0 : l, l !== 0 && l !== c.retryLane && (c.retryLane = l, Rn(e, l), kn(r, e, l, -1));
      }
      return fl(), r = Ho(Error(o(421))), na(e, t, m, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sp.bind(null, e), l._reactRetry = t, null) : (e = c.treeContext, Zt = Jn(l.nextSibling), Xt = t, lt = !0, fn = null, e !== null && (tn[nn++] = Pn, tn[nn++] = Ln, tn[nn++] = yi, Pn = e.id, Ln = e.overflow, yi = t), t = Xo(t, r.children), t.flags |= 4096, t);
  }
  function td(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Mo(e.return, t, n);
  }
  function Zo(e, t, n, r, l) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = r, c.tail = n, c.tailMode = l);
  }
  function nd(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, c = r.tail;
    if (It(e, t, r.children, n), r = ht.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && td(e, n, t);
        else if (e.tag === 19) td(e, n, t);
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
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Yr(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Zo(t, !1, l, n, c);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Yr(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Zo(t, !0, n, null, c);
        break;
      case "together":
        Zo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ia(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function $n(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), wi |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = oi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = oi(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Gm(e, t, n) {
    switch (t.tag) {
      case 3:
        Zc(t), Wi();
        break;
      case 5:
        vc(t);
        break;
      case 1:
        Kt(t.type) && Dr(t);
        break;
      case 4:
        Ao(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        it(Hr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (it(ht, ht.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ed(e, t, n) : (it(ht, ht.current & 1), e = $n(e, t, n), e !== null ? e.sibling : null);
        it(ht, ht.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return nd(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), it(ht, ht.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Yc(e, t, n);
    }
    return $n(e, t, n);
  }
  var id, qo, sd, rd;
  id = function(e, t) {
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
  }, qo = function() {
  }, sd = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, ji(Sn.current);
      var c = null;
      switch (n) {
        case "input":
          l = Ne(e, l), r = Ne(e, r), c = [];
          break;
        case "select":
          l = te({}, l, { value: void 0 }), r = te({}, r, { value: void 0 }), c = [];
          break;
        case "textarea":
          l = le(e, l), r = le(e, r), c = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
      }
      Re(n, r);
      var m;
      n = null;
      for (I in l) if (!r.hasOwnProperty(I) && l.hasOwnProperty(I) && l[I] != null) if (I === "style") {
        var g = l[I];
        for (m in g) g.hasOwnProperty(m) && (n || (n = {}), n[m] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (d.hasOwnProperty(I) ? c || (c = []) : (c = c || []).push(I, null));
      for (I in r) {
        var C = r[I];
        if (g = l?.[I], r.hasOwnProperty(I) && C !== g && (C != null || g != null)) if (I === "style") if (g) {
          for (m in g) !g.hasOwnProperty(m) || C && C.hasOwnProperty(m) || (n || (n = {}), n[m] = "");
          for (m in C) C.hasOwnProperty(m) && g[m] !== C[m] && (n || (n = {}), n[m] = C[m]);
        } else n || (c || (c = []), c.push(
          I,
          n
        )), n = C;
        else I === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, g = g ? g.__html : void 0, C != null && g !== C && (c = c || []).push(I, C)) : I === "children" ? typeof C != "string" && typeof C != "number" || (c = c || []).push(I, "" + C) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (d.hasOwnProperty(I) ? (C != null && I === "onScroll" && rt("scroll", e), c || g === C || (c = [])) : (c = c || []).push(I, C));
      }
      n && (c = c || []).push("style", n);
      var I = c;
      (t.updateQueue = I) && (t.flags |= 4);
    }
  }, rd = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Hs(e, t) {
    if (!lt) switch (e.tailMode) {
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
  function Lt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Wm(e, t, n) {
    var r = t.pendingProps;
    switch (jo(t), t.tag) {
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
        return Lt(t), null;
      case 1:
        return Kt(t.type) && Ir(), Lt(t), null;
      case 3:
        return r = t.stateNode, Xi(), at(Vt), at(At), Ro(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Kr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fn !== null && (cl(fn), fn = null))), qo(e, t), Lt(t), null;
      case 5:
        Po(t);
        var l = ji(zs.current);
        if (n = t.type, e !== null && t.stateNode != null) sd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return Lt(t), null;
          }
          if (e = ji(Sn.current), Kr(t)) {
            r = t.stateNode, n = t.type;
            var c = t.memoizedProps;
            switch (r[jn] = t, r[Os] = c, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                rt("cancel", r), rt("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                rt("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ps.length; l++) rt(Ps[l], r);
                break;
              case "source":
                rt("error", r);
                break;
              case "img":
              case "image":
              case "link":
                rt(
                  "error",
                  r
                ), rt("load", r);
                break;
              case "details":
                rt("toggle", r);
                break;
              case "input":
                $e(r, c), rt("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!c.multiple }, rt("invalid", r);
                break;
              case "textarea":
                ue(r, c), rt("invalid", r);
            }
            Re(n, c), l = null;
            for (var m in c) if (c.hasOwnProperty(m)) {
              var g = c[m];
              m === "children" ? typeof g == "string" ? r.textContent !== g && (c.suppressHydrationWarning !== !0 && Or(r.textContent, g, e), l = ["children", g]) : typeof g == "number" && r.textContent !== "" + g && (c.suppressHydrationWarning !== !0 && Or(
                r.textContent,
                g,
                e
              ), l = ["children", "" + g]) : d.hasOwnProperty(m) && g != null && m === "onScroll" && rt("scroll", r);
            }
            switch (n) {
              case "input":
                Me(r), et(r, c, !0);
                break;
              case "textarea":
                Me(r), Ce(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (r.onclick = $r);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            m = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ue(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = m.createElement(n, { is: r.is }) : (e = m.createElement(n), n === "select" && (m = e, r.multiple ? m.multiple = !0 : r.size && (m.size = r.size))) : e = m.createElementNS(e, n), e[jn] = t, e[Os] = r, id(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = Ie(n, r), n) {
                case "dialog":
                  rt("cancel", e), rt("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  rt("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Ps.length; l++) rt(Ps[l], e);
                  l = r;
                  break;
                case "source":
                  rt("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  rt(
                    "error",
                    e
                  ), rt("load", e), l = r;
                  break;
                case "details":
                  rt("toggle", e), l = r;
                  break;
                case "input":
                  $e(e, r), l = Ne(e, r), rt("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = te({}, r, { value: void 0 }), rt("invalid", e);
                  break;
                case "textarea":
                  ue(e, r), l = le(e, r), rt("invalid", e);
                  break;
                default:
                  l = r;
              }
              Re(n, l), g = l;
              for (c in g) if (g.hasOwnProperty(c)) {
                var C = g[c];
                c === "style" ? ln(e, C) : c === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Et(e, C)) : c === "children" ? typeof C == "string" ? (n !== "textarea" || C !== "") && Qt(e, C) : typeof C == "number" && Qt(e, "" + C) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (d.hasOwnProperty(c) ? C != null && c === "onScroll" && rt("scroll", e) : C != null && K(e, c, C, m));
              }
              switch (n) {
                case "input":
                  Me(e), et(e, r, !1);
                  break;
                case "textarea":
                  Me(e), Ce(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + J(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, c = r.value, c != null ? z(e, !!r.multiple, c, !1) : r.defaultValue != null && z(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
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
        return Lt(t), null;
      case 6:
        if (e && t.stateNode != null) rd(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (n = ji(zs.current), ji(Sn.current), Kr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[jn] = t, (c = r.nodeValue !== n) && (e = Xt, e !== null)) switch (e.tag) {
              case 3:
                Or(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Or(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            c && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[jn] = t, t.stateNode = r;
        }
        return Lt(t), null;
      case 13:
        if (at(ht), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (lt && Zt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) lc(), Wi(), t.flags |= 98560, c = !1;
          else if (c = Kr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(o(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(o(317));
              c[jn] = t;
            } else Wi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Lt(t), c = !1;
          } else fn !== null && (cl(fn), fn = null), c = !0;
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ht.current & 1) !== 0 ? xt === 0 && (xt = 3) : fl())), t.updateQueue !== null && (t.flags |= 4), Lt(t), null);
      case 4:
        return Xi(), qo(e, t), e === null && Ls(t.stateNode.containerInfo), Lt(t), null;
      case 10:
        return To(t.type._context), Lt(t), null;
      case 17:
        return Kt(t.type) && Ir(), Lt(t), null;
      case 19:
        if (at(ht), c = t.memoizedState, c === null) return Lt(t), null;
        if (r = (t.flags & 128) !== 0, m = c.rendering, m === null) if (r) Hs(c, !1);
        else {
          if (xt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
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
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hs(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !lt) return Lt(t), null;
          } else 2 * ct() - c.renderingStartTime > ts && n !== 1073741824 && (t.flags |= 128, r = !0, Hs(c, !1), t.lanes = 4194304);
          c.isBackwards ? (m.sibling = t.child, t.child = m) : (n = c.last, n !== null ? n.sibling = m : t.child = m, c.last = m);
        }
        return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = ct(), t.sibling = null, n = ht.current, it(ht, r ? n & 1 | 2 : n & 1), t) : (Lt(t), null);
      case 22:
      case 23:
        return hl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (qt & 1073741824) !== 0 && (Lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Lt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Qm(e, t) {
    switch (jo(t), t.tag) {
      case 1:
        return Kt(t.type) && Ir(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Xi(), at(Vt), at(At), Ro(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Po(t), null;
      case 13:
        if (at(ht), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Wi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return at(ht), null;
      case 4:
        return Xi(), null;
      case 10:
        return To(t.type._context), null;
      case 22:
      case 23:
        return hl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var sa = !1, Rt = !1, Ym = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function qi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      pt(e, t, r);
    }
    else n.current = null;
  }
  function el(e, t, n) {
    try {
      n();
    } catch (r) {
      pt(e, t, r);
    }
  }
  var ad = !1;
  function Jm(e, t) {
    if (ho = Er, e = Iu(), io(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, c = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, c.nodeType;
          } catch {
            n = null;
            break e;
          }
          var m = 0, g = -1, C = -1, I = 0, Q = 0, q = e, W = null;
          t: for (; ; ) {
            for (var he; q !== n || l !== 0 && q.nodeType !== 3 || (g = m + l), q !== c || r !== 0 && q.nodeType !== 3 || (C = m + r), q.nodeType === 3 && (m += q.nodeValue.length), (he = q.firstChild) !== null; )
              W = q, q = he;
            for (; ; ) {
              if (q === e) break t;
              if (W === n && ++I === l && (g = m), W === c && ++Q === r && (C = m), (he = q.nextSibling) !== null) break;
              q = W, W = q.parentNode;
            }
            q = he;
          }
          n = g === -1 || C === -1 ? null : { start: g, end: C };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (fo = { focusedElem: e, selectionRange: n }, Er = !1, ve = t; ve !== null; ) if (t = ve, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ve = e;
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
              var Se = ke.memoizedProps, kt = ke.memoizedState, P = t.stateNode, M = P.getSnapshotBeforeUpdate(t.elementType === t.type ? Se : mn(t.type, Se), kt);
              P.__reactInternalSnapshotBeforeUpdate = M;
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
            throw Error(o(163));
        }
      } catch (ie) {
        pt(t, t.return, ie);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ve = e;
        break;
      }
      ve = t.return;
    }
    return ke = ad, ad = !1, ke;
  }
  function Gs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var c = l.destroy;
          l.destroy = void 0, c !== void 0 && el(t, n, c);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ra(e, t) {
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
  function tl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function od(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, od(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jn], delete t[Os], delete t[ko], delete t[Pm], delete t[Lm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ld(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ud(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ld(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function nl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && (e = e.child, e !== null)) for (nl(e, t, n), e = e.sibling; e !== null; ) nl(e, t, n), e = e.sibling;
  }
  function il(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (il(e, t, n), e = e.sibling; e !== null; ) il(e, t, n), e = e.sibling;
  }
  var Mt = null, pn = !1;
  function ni(e, t, n) {
    for (n = n.child; n !== null; ) cd(e, t, n), n = n.sibling;
  }
  function cd(e, t, n) {
    if (Ft && typeof Ft.onCommitFiberUnmount == "function") try {
      Ft.onCommitFiberUnmount(dt, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Rt || qi(n, t);
      case 6:
        var r = Mt, l = pn;
        Mt = null, ni(e, t, n), Mt = r, pn = l, Mt !== null && (pn ? (e = Mt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Mt.removeChild(n.stateNode));
        break;
      case 18:
        Mt !== null && (pn ? (e = Mt, n = n.stateNode, e.nodeType === 8 ? vo(e.parentNode, n) : e.nodeType === 1 && vo(e, n), Es(e)) : vo(Mt, n.stateNode));
        break;
      case 4:
        r = Mt, l = pn, Mt = n.stateNode.containerInfo, pn = !0, ni(e, t, n), Mt = r, pn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Rt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var c = l, m = c.destroy;
            c = c.tag, m !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && el(n, t, m), l = l.next;
          } while (l !== r);
        }
        ni(e, t, n);
        break;
      case 1:
        if (!Rt && (qi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (g) {
          pt(n, t, g);
        }
        ni(e, t, n);
        break;
      case 21:
        ni(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Rt = (r = Rt) || n.memoizedState !== null, ni(e, t, n), Rt = r) : ni(e, t, n);
        break;
      default:
        ni(e, t, n);
    }
  }
  function dd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ym()), t.forEach(function(r) {
        var l = rp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function vn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var c = e, m = t, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 5:
              Mt = g.stateNode, pn = !1;
              break e;
            case 3:
              Mt = g.stateNode.containerInfo, pn = !0;
              break e;
            case 4:
              Mt = g.stateNode.containerInfo, pn = !0;
              break e;
          }
          g = g.return;
        }
        if (Mt === null) throw Error(o(160));
        cd(c, m, l), Mt = null, pn = !1;
        var C = l.alternate;
        C !== null && (C.return = null), l.return = null;
      } catch (I) {
        pt(l, t, I);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) hd(t, e), t = t.sibling;
  }
  function hd(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (vn(t, e), En(e), r & 4) {
          try {
            Gs(3, e, e.return), ra(3, e);
          } catch (Se) {
            pt(e, e.return, Se);
          }
          try {
            Gs(5, e, e.return);
          } catch (Se) {
            pt(e, e.return, Se);
          }
        }
        break;
      case 1:
        vn(t, e), En(e), r & 512 && n !== null && qi(n, n.return);
        break;
      case 5:
        if (vn(t, e), En(e), r & 512 && n !== null && qi(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Qt(l, "");
          } catch (Se) {
            pt(e, e.return, Se);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var c = e.memoizedProps, m = n !== null ? n.memoizedProps : c, g = e.type, C = e.updateQueue;
          if (e.updateQueue = null, C !== null) try {
            g === "input" && c.type === "radio" && c.name != null && be(l, c), Ie(g, m);
            var I = Ie(g, c);
            for (m = 0; m < C.length; m += 2) {
              var Q = C[m], q = C[m + 1];
              Q === "style" ? ln(l, q) : Q === "dangerouslySetInnerHTML" ? Et(l, q) : Q === "children" ? Qt(l, q) : K(l, Q, q, I);
            }
            switch (g) {
              case "input":
                Ve(l, c);
                break;
              case "textarea":
                je(l, c);
                break;
              case "select":
                var W = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!c.multiple;
                var he = c.value;
                he != null ? z(l, !!c.multiple, he, !1) : W !== !!c.multiple && (c.defaultValue != null ? z(
                  l,
                  !!c.multiple,
                  c.defaultValue,
                  !0
                ) : z(l, !!c.multiple, c.multiple ? [] : "", !1));
            }
            l[Os] = c;
          } catch (Se) {
            pt(e, e.return, Se);
          }
        }
        break;
      case 6:
        if (vn(t, e), En(e), r & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, c = e.memoizedProps;
          try {
            l.nodeValue = c;
          } catch (Se) {
            pt(e, e.return, Se);
          }
        }
        break;
      case 3:
        if (vn(t, e), En(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Es(t.containerInfo);
        } catch (Se) {
          pt(e, e.return, Se);
        }
        break;
      case 4:
        vn(t, e), En(e);
        break;
      case 13:
        vn(t, e), En(e), l = e.child, l.flags & 8192 && (c = l.memoizedState !== null, l.stateNode.isHidden = c, !c || l.alternate !== null && l.alternate.memoizedState !== null || (al = ct())), r & 4 && dd(e);
        break;
      case 22:
        if (Q = n !== null && n.memoizedState !== null, e.mode & 1 ? (Rt = (I = Rt) || Q, vn(t, e), Rt = I) : vn(t, e), En(e), r & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !Q && (e.mode & 1) !== 0) for (ve = e, Q = e.child; Q !== null; ) {
            for (q = ve = Q; ve !== null; ) {
              switch (W = ve, he = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gs(4, W, W.return);
                  break;
                case 1:
                  qi(W, W.return);
                  var ke = W.stateNode;
                  if (typeof ke.componentWillUnmount == "function") {
                    r = W, n = W.return;
                    try {
                      t = r, ke.props = t.memoizedProps, ke.state = t.memoizedState, ke.componentWillUnmount();
                    } catch (Se) {
                      pt(r, n, Se);
                    }
                  }
                  break;
                case 5:
                  qi(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    pd(q);
                    continue;
                  }
              }
              he !== null ? (he.return = W, ve = he) : pd(q);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, q = e; ; ) {
            if (q.tag === 5) {
              if (Q === null) {
                Q = q;
                try {
                  l = q.stateNode, I ? (c = l.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (g = q.stateNode, C = q.memoizedProps.style, m = C != null && C.hasOwnProperty("display") ? C.display : null, g.style.display = _e("display", m));
                } catch (Se) {
                  pt(e, e.return, Se);
                }
              }
            } else if (q.tag === 6) {
              if (Q === null) try {
                q.stateNode.nodeValue = I ? "" : q.memoizedProps;
              } catch (Se) {
                pt(e, e.return, Se);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === e) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === e) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === e) break e;
              Q === q && (Q = null), q = q.return;
            }
            Q === q && (Q = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        vn(t, e), En(e), r & 4 && dd(e);
        break;
      case 21:
        break;
      default:
        vn(
          t,
          e
        ), En(e);
    }
  }
  function En(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ld(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Qt(l, ""), r.flags &= -33);
            var c = ud(e);
            il(e, c, l);
            break;
          case 3:
          case 4:
            var m = r.stateNode.containerInfo, g = ud(e);
            nl(e, g, m);
            break;
          default:
            throw Error(o(161));
        }
      } catch (C) {
        pt(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xm(e, t, n) {
    ve = e, fd(e);
  }
  function fd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ve !== null; ) {
      var l = ve, c = l.child;
      if (l.tag === 22 && r) {
        var m = l.memoizedState !== null || sa;
        if (!m) {
          var g = l.alternate, C = g !== null && g.memoizedState !== null || Rt;
          g = sa;
          var I = Rt;
          if (sa = m, (Rt = C) && !I) for (ve = l; ve !== null; ) m = ve, C = m.child, m.tag === 22 && m.memoizedState !== null ? vd(l) : C !== null ? (C.return = m, ve = C) : vd(l);
          for (; c !== null; ) ve = c, fd(c), c = c.sibling;
          ve = l, sa = g, Rt = I;
        }
        md(e);
      } else (l.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = l, ve = c) : md(e);
    }
  }
  function md(e) {
    for (; ve !== null; ) {
      var t = ve;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Rt || ra(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Rt) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : mn(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var c = t.updateQueue;
              c !== null && pc(t, c, r);
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
                pc(t, m, n);
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
                  var Q = I.memoizedState;
                  if (Q !== null) {
                    var q = Q.dehydrated;
                    q !== null && Es(q);
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
          Rt || t.flags & 512 && tl(t);
        } catch (W) {
          pt(t, t.return, W);
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
  function pd(e) {
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
  function vd(e) {
    for (; ve !== null; ) {
      var t = ve;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ra(4, t);
            } catch (C) {
              pt(t, n, C);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (C) {
                pt(t, l, C);
              }
            }
            var c = t.return;
            try {
              tl(t);
            } catch (C) {
              pt(t, c, C);
            }
            break;
          case 5:
            var m = t.return;
            try {
              tl(t);
            } catch (C) {
              pt(t, m, C);
            }
        }
      } catch (C) {
        pt(t, t.return, C);
      }
      if (t === e) {
        ve = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        g.return = t.return, ve = g;
        break;
      }
      ve = t.return;
    }
  }
  var Zm = Math.ceil, aa = B.ReactCurrentDispatcher, sl = B.ReactCurrentOwner, an = B.ReactCurrentBatchConfig, We = 0, St = null, yt = null, bt = 0, qt = 0, es = Xn(0), xt = 0, Ws = null, wi = 0, oa = 0, rl = 0, Qs = null, Ht = null, al = 0, ts = 1 / 0, Fn = null, la = !1, ol = null, ii = null, ua = !1, si = null, ca = 0, Ys = 0, ll = null, da = -1, ha = 0;
  function Dt() {
    return (We & 6) !== 0 ? ct() : da !== -1 ? da : da = ct();
  }
  function ri(e) {
    return (e.mode & 1) === 0 ? 1 : (We & 2) !== 0 && bt !== 0 ? bt & -bt : Om.transition !== null ? (ha === 0 && (ha = uu()), ha) : (e = qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yu(e.type)), e);
  }
  function kn(e, t, n, r) {
    if (50 < Ys) throw Ys = 0, ll = null, Error(o(185));
    gs(e, n, r), ((We & 2) === 0 || e !== St) && (e === St && ((We & 2) === 0 && (oa |= n), xt === 4 && ai(e, bt)), Gt(e, r), n === 1 && We === 0 && (t.mode & 1) === 0 && (ts = ct() + 500, zr && qn()));
  }
  function Gt(e, t) {
    var n = e.callbackNode;
    Of(e, t);
    var r = jr(e, e === St ? bt : 0);
    if (r === 0) n !== null && kr(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && kr(n), t === 1) e.tag === 0 ? Rm(yd.bind(null, e)) : ic(yd.bind(null, e)), _m(function() {
        (We & 6) === 0 && qn();
      }), n = null;
      else {
        switch (cu(r)) {
          case 1:
            n = xn;
            break;
          case 4:
            n = L;
            break;
          case 16:
            n = pe;
            break;
          case 536870912:
            n = Yt;
            break;
          default:
            n = pe;
        }
        n = Cd(n, kd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function kd(e, t) {
    if (da = -1, ha = 0, (We & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (ns() && e.callbackNode !== n) return null;
    var r = jr(e, e === St ? bt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = fa(e, r);
    else {
      t = r;
      var l = We;
      We |= 2;
      var c = xd();
      (St !== e || bt !== t) && (Fn = null, ts = ct() + 500, Ni(e, t));
      do
        try {
          tp();
          break;
        } catch (g) {
          gd(e, g);
        }
      while (!0);
      Co(), aa.current = c, We = l, yt !== null ? t = 0 : (St = null, bt = 0, t = xt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ba(e), l !== 0 && (r = l, t = ul(e, l))), t === 1) throw n = Ws, Ni(e, 0), ai(e, r), Gt(e, ct()), n;
      if (t === 6) ai(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !qm(l) && (t = fa(e, r), t === 2 && (c = Ba(e), c !== 0 && (r = c, t = ul(e, c))), t === 1)) throw n = Ws, Ni(e, 0), ai(e, r), Gt(e, ct()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Ci(e, Ht, Fn);
            break;
          case 3:
            if (ai(e, r), (r & 130023424) === r && (t = al + 500 - ct(), 10 < t)) {
              if (jr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Dt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = po(Ci.bind(null, e, Ht, Fn), t);
              break;
            }
            Ci(e, Ht, Fn);
            break;
          case 4:
            if (ai(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var m = 31 - Tt(r);
              c = 1 << m, m = t[m], m > l && (l = m), r &= ~c;
            }
            if (r = l, r = ct() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = po(Ci.bind(null, e, Ht, Fn), r);
              break;
            }
            Ci(e, Ht, Fn);
            break;
          case 5:
            Ci(e, Ht, Fn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Gt(e, ct()), e.callbackNode === n ? kd.bind(null, e) : null;
  }
  function ul(e, t) {
    var n = Qs;
    return e.current.memoizedState.isDehydrated && (Ni(e, t).flags |= 256), e = fa(e, t), e !== 2 && (t = Ht, Ht = n, t !== null && cl(t)), e;
  }
  function cl(e) {
    Ht === null ? Ht = e : Ht.push.apply(Ht, e);
  }
  function qm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], c = l.getSnapshot;
          l = l.value;
          try {
            if (!hn(c(), l)) return !1;
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
    for (t &= ~rl, t &= ~oa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Tt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function yd(e) {
    if ((We & 6) !== 0) throw Error(o(327));
    ns();
    var t = jr(e, 0);
    if ((t & 1) === 0) return Gt(e, ct()), null;
    var n = fa(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ba(e);
      r !== 0 && (t = r, n = ul(e, r));
    }
    if (n === 1) throw n = Ws, Ni(e, 0), ai(e, t), Gt(e, ct()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ci(e, Ht, Fn), Gt(e, ct()), null;
  }
  function dl(e, t) {
    var n = We;
    We |= 1;
    try {
      return e(t);
    } finally {
      We = n, We === 0 && (ts = ct() + 500, zr && qn());
    }
  }
  function Ei(e) {
    si !== null && si.tag === 0 && (We & 6) === 0 && ns();
    var t = We;
    We |= 1;
    var n = an.transition, r = qe;
    try {
      if (an.transition = null, qe = 1, e) return e();
    } finally {
      qe = r, an.transition = n, We = t, (We & 6) === 0 && qn();
    }
  }
  function hl() {
    qt = es.current, at(es);
  }
  function Ni(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, bm(n)), yt !== null) for (n = yt.return; n !== null; ) {
      var r = n;
      switch (jo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ir();
          break;
        case 3:
          Xi(), at(Vt), at(At), Ro();
          break;
        case 5:
          Po(r);
          break;
        case 4:
          Xi();
          break;
        case 13:
          at(ht);
          break;
        case 19:
          at(ht);
          break;
        case 10:
          To(r.type._context);
          break;
        case 22:
        case 23:
          hl();
      }
      n = n.return;
    }
    if (St = e, yt = e = oi(e.current, null), bt = qt = t, xt = 0, Ws = null, rl = oa = wi = 0, Ht = Qs = null, xi !== null) {
      for (t = 0; t < xi.length; t++) if (n = xi[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, c = n.pending;
        if (c !== null) {
          var m = c.next;
          c.next = l, r.next = m;
        }
        n.pending = r;
      }
      xi = null;
    }
    return e;
  }
  function gd(e, t) {
    do {
      var n = yt;
      try {
        if (Co(), Jr.current = ea, Xr) {
          for (var r = ft.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Xr = !1;
        }
        if (Si = 0, jt = gt = ft = null, Bs = !1, Vs = 0, sl.current = null, n === null || n.return === null) {
          xt = 1, Ws = t, yt = null;
          break;
        }
        e: {
          var c = e, m = n.return, g = n, C = t;
          if (t = bt, g.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var I = C, Q = g, q = Q.tag;
            if ((Q.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var W = Q.alternate;
              W ? (Q.updateQueue = W.updateQueue, Q.memoizedState = W.memoizedState, Q.lanes = W.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var he = Uc(m);
            if (he !== null) {
              he.flags &= -257, Hc(he, m, g, c, t), he.mode & 1 && Kc(c, I, t), t = he, C = I;
              var ke = t.updateQueue;
              if (ke === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(C), t.updateQueue = Se;
              } else ke.add(C);
              break e;
            } else {
              if ((t & 1) === 0) {
                Kc(c, I, t), fl();
                break e;
              }
              C = Error(o(426));
            }
          } else if (lt && g.mode & 1) {
            var kt = Uc(m);
            if (kt !== null) {
              (kt.flags & 65536) === 0 && (kt.flags |= 256), Hc(kt, m, g, c, t), Eo(Zi(C, g));
              break e;
            }
          }
          c = C = Zi(C, g), xt !== 4 && (xt = 2), Qs === null ? Qs = [c] : Qs.push(c), c = m;
          do {
            switch (c.tag) {
              case 3:
                c.flags |= 65536, t &= -t, c.lanes |= t;
                var P = Bc(c, C, t);
                mc(c, P);
                break e;
              case 1:
                g = C;
                var M = c.type, R = c.stateNode;
                if ((c.flags & 128) === 0 && (typeof M.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (ii === null || !ii.has(R)))) {
                  c.flags |= 65536, t &= -t, c.lanes |= t;
                  var ie = Vc(c, g, t);
                  mc(c, ie);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Sd(n);
      } catch (we) {
        t = we, yt === n && n !== null && (yt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function xd() {
    var e = aa.current;
    return aa.current = ea, e === null ? ea : e;
  }
  function fl() {
    (xt === 0 || xt === 3 || xt === 2) && (xt = 4), St === null || (wi & 268435455) === 0 && (oa & 268435455) === 0 || ai(St, bt);
  }
  function fa(e, t) {
    var n = We;
    We |= 2;
    var r = xd();
    (St !== e || bt !== t) && (Fn = null, Ni(e, t));
    do
      try {
        ep();
        break;
      } catch (l) {
        gd(e, l);
      }
    while (!0);
    if (Co(), We = n, aa.current = r, yt !== null) throw Error(o(261));
    return St = null, bt = 0, xt;
  }
  function ep() {
    for (; yt !== null; ) jd(yt);
  }
  function tp() {
    for (; yt !== null && !yr(); ) jd(yt);
  }
  function jd(e) {
    var t = Nd(e.alternate, e, qt);
    e.memoizedProps = e.pendingProps, t === null ? Sd(e) : yt = t, sl.current = null;
  }
  function Sd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Wm(n, t, qt), n !== null) {
          yt = n;
          return;
        }
      } else {
        if (n = Qm(n, t), n !== null) {
          n.flags &= 32767, yt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          xt = 6, yt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        yt = t;
        return;
      }
      yt = t = e;
    } while (t !== null);
    xt === 0 && (xt = 5);
  }
  function Ci(e, t, n) {
    var r = qe, l = an.transition;
    try {
      an.transition = null, qe = 1, np(e, t, n, r);
    } finally {
      an.transition = l, qe = r;
    }
    return null;
  }
  function np(e, t, n, r) {
    do
      ns();
    while (si !== null);
    if ((We & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var c = n.lanes | n.childLanes;
    if ($f(e, c), e === St && (yt = St = null, bt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ua || (ua = !0, Cd(pe, function() {
      return ns(), null;
    })), c = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || c) {
      c = an.transition, an.transition = null;
      var m = qe;
      qe = 1;
      var g = We;
      We |= 4, sl.current = null, Jm(e, n), hd(n, e), Sm(fo), Er = !!ho, fo = ho = null, e.current = n, Xm(n), za(), We = g, qe = m, an.transition = c;
    } else e.current = n;
    if (ua && (ua = !1, si = e, ca = l), c = e.pendingLanes, c === 0 && (ii = null), ks(n.stateNode), Gt(e, ct()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (la) throw la = !1, e = ol, ol = null, e;
    return (ca & 1) !== 0 && e.tag !== 0 && ns(), c = e.pendingLanes, (c & 1) !== 0 ? e === ll ? Ys++ : (Ys = 0, ll = e) : Ys = 0, qn(), null;
  }
  function ns() {
    if (si !== null) {
      var e = cu(ca), t = an.transition, n = qe;
      try {
        if (an.transition = null, qe = 16 > e ? 16 : e, si === null) var r = !1;
        else {
          if (e = si, si = null, ca = 0, (We & 6) !== 0) throw Error(o(331));
          var l = We;
          for (We |= 4, ve = e.current; ve !== null; ) {
            var c = ve, m = c.child;
            if ((ve.flags & 16) !== 0) {
              var g = c.deletions;
              if (g !== null) {
                for (var C = 0; C < g.length; C++) {
                  var I = g[C];
                  for (ve = I; ve !== null; ) {
                    var Q = ve;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gs(8, Q, c);
                    }
                    var q = Q.child;
                    if (q !== null) q.return = Q, ve = q;
                    else for (; ve !== null; ) {
                      Q = ve;
                      var W = Q.sibling, he = Q.return;
                      if (od(Q), Q === I) {
                        ve = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = he, ve = W;
                        break;
                      }
                      ve = he;
                    }
                  }
                }
                var ke = c.alternate;
                if (ke !== null) {
                  var Se = ke.child;
                  if (Se !== null) {
                    ke.child = null;
                    do {
                      var kt = Se.sibling;
                      Se.sibling = null, Se = kt;
                    } while (Se !== null);
                  }
                }
                ve = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && m !== null) m.return = c, ve = m;
            else e: for (; ve !== null; ) {
              if (c = ve, (c.flags & 2048) !== 0) switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  Gs(9, c, c.return);
              }
              var P = c.sibling;
              if (P !== null) {
                P.return = c.return, ve = P;
                break e;
              }
              ve = c.return;
            }
          }
          var M = e.current;
          for (ve = M; ve !== null; ) {
            m = ve;
            var R = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && R !== null) R.return = m, ve = R;
            else e: for (m = M; ve !== null; ) {
              if (g = ve, (g.flags & 2048) !== 0) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ra(9, g);
                }
              } catch (we) {
                pt(g, g.return, we);
              }
              if (g === m) {
                ve = null;
                break e;
              }
              var ie = g.sibling;
              if (ie !== null) {
                ie.return = g.return, ve = ie;
                break e;
              }
              ve = g.return;
            }
          }
          if (We = l, qn(), Ft && typeof Ft.onPostCommitFiberRoot == "function") try {
            Ft.onPostCommitFiberRoot(dt, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        qe = n, an.transition = t;
      }
    }
    return !1;
  }
  function wd(e, t, n) {
    t = Zi(n, t), t = Bc(e, t, 1), e = ti(e, t, 1), t = Dt(), e !== null && (gs(e, 1, t), Gt(e, t));
  }
  function pt(e, t, n) {
    if (e.tag === 3) wd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        wd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ii === null || !ii.has(r))) {
          e = Zi(n, e), e = Vc(t, e, 1), t = ti(t, e, 1), e = Dt(), t !== null && (gs(t, 1, e), Gt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function ip(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Dt(), e.pingedLanes |= e.suspendedLanes & n, St === e && (bt & n) === n && (xt === 4 || xt === 3 && (bt & 130023424) === bt && 500 > ct() - al ? Ni(e, 0) : rl |= n), Gt(e, t);
  }
  function Ed(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = xr, xr <<= 1, (xr & 130023424) === 0 && (xr = 4194304)));
    var n = Dt();
    e = Rn(e, t), e !== null && (gs(e, t, n), Gt(e, n));
  }
  function sp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ed(e, n);
  }
  function rp(e, t) {
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
        throw Error(o(314));
    }
    r !== null && r.delete(t), Ed(e, n);
  }
  var Nd;
  Nd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Vt.current) Ut = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ut = !1, Gm(e, t, n);
      Ut = (e.flags & 131072) !== 0;
    }
    else Ut = !1, lt && (t.flags & 1048576) !== 0 && sc(t, Vr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ia(e, t), e = t.pendingProps;
        var l = Ui(t, At.current);
        Ji(t, n), l = Fo(null, t, r, e, l, n);
        var c = Io();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Kt(r) ? (c = !0, Dr(t)) : c = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, _o(t), l.updater = ta, t.stateNode = l, l._reactInternals = t, Uo(t, r, e, n), t = Qo(null, t, r, !0, c, n)) : (t.tag = 0, lt && c && xo(t), It(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ia(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = op(r), e = mn(r, e), l) {
            case 0:
              t = Wo(null, t, r, e, n);
              break e;
            case 1:
              t = Xc(null, t, r, e, n);
              break e;
            case 11:
              t = Gc(null, t, r, e, n);
              break e;
            case 14:
              t = Wc(null, t, r, mn(r.type, e), n);
              break e;
          }
          throw Error(o(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : mn(r, l), Wo(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : mn(r, l), Xc(e, t, r, l, n);
      case 3:
        e: {
          if (Zc(t), e === null) throw Error(o(387));
          r = t.pendingProps, c = t.memoizedState, l = c.element, fc(e, t), Qr(t, r, null, n);
          var m = t.memoizedState;
          if (r = m.element, c.isDehydrated) if (c = { element: r, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
            l = Zi(Error(o(423)), t), t = qc(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Zi(Error(o(424)), t), t = qc(e, t, r, n, l);
            break e;
          } else for (Zt = Jn(t.stateNode.containerInfo.firstChild), Xt = t, lt = !0, fn = null, n = dc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Wi(), r === l) {
              t = $n(e, t, n);
              break e;
            }
            It(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return vc(t), e === null && wo(t), r = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, m = l.children, mo(r, l) ? m = null : c !== null && mo(r, c) && (t.flags |= 32), Jc(e, t), It(e, t, m, n), t.child;
      case 6:
        return e === null && wo(t), null;
      case 13:
        return ed(e, t, n);
      case 4:
        return Ao(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Qi(t, null, r, n) : It(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : mn(r, l), Gc(e, t, r, l, n);
      case 7:
        return It(e, t, t.pendingProps, n), t.child;
      case 8:
        return It(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return It(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, c = t.memoizedProps, m = l.value, it(Hr, r._currentValue), r._currentValue = m, c !== null) if (hn(c.value, m)) {
            if (c.children === l.children && !Vt.current) {
              t = $n(e, t, n);
              break e;
            }
          } else for (c = t.child, c !== null && (c.return = t); c !== null; ) {
            var g = c.dependencies;
            if (g !== null) {
              m = c.child;
              for (var C = g.firstContext; C !== null; ) {
                if (C.context === r) {
                  if (c.tag === 1) {
                    C = On(-1, n & -n), C.tag = 2;
                    var I = c.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var Q = I.pending;
                      Q === null ? C.next = C : (C.next = Q.next, Q.next = C), I.pending = C;
                    }
                  }
                  c.lanes |= n, C = c.alternate, C !== null && (C.lanes |= n), Mo(
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
              if (m = c.return, m === null) throw Error(o(341));
              m.lanes |= n, g = m.alternate, g !== null && (g.lanes |= n), Mo(m, n, t), m = c.sibling;
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
          It(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Ji(t, n), l = sn(l), r = r(l), t.flags |= 1, It(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = mn(r, t.pendingProps), l = mn(r.type, l), Wc(e, t, r, l, n);
      case 15:
        return Qc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : mn(r, l), ia(e, t), t.tag = 1, Kt(r) ? (e = !0, Dr(t)) : e = !1, Ji(t, n), Dc(t, r, l), Uo(t, r, l, n), Qo(null, t, r, !0, e, n);
      case 19:
        return nd(e, t, n);
      case 22:
        return Yc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Cd(e, t) {
    return Ct(e, t);
  }
  function ap(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function on(e, t, n, r) {
    return new ap(e, t, n, r);
  }
  function ml(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function op(e) {
    if (typeof e == "function") return ml(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Te) return 11;
      if (e === G) return 14;
    }
    return 2;
  }
  function oi(e, t) {
    var n = e.alternate;
    return n === null ? (n = on(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ma(e, t, n, r, l, c) {
    var m = 2;
    if (r = e, typeof e == "function") ml(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case $:
        return Ti(n.children, l, c, t);
      case O:
        m = 8, l |= 8;
        break;
      case se:
        return e = on(12, n, t, l | 2), e.elementType = se, e.lanes = c, e;
      case Z:
        return e = on(13, n, t, l), e.elementType = Z, e.lanes = c, e;
      case ce:
        return e = on(19, n, t, l), e.elementType = ce, e.lanes = c, e;
      case re:
        return pa(n, l, c, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ee:
            m = 10;
            break e;
          case Ee:
            m = 9;
            break e;
          case Te:
            m = 11;
            break e;
          case G:
            m = 14;
            break e;
          case oe:
            m = 16, r = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = on(m, n, t, l), t.elementType = e, t.type = r, t.lanes = c, t;
  }
  function Ti(e, t, n, r) {
    return e = on(7, e, r, t), e.lanes = n, e;
  }
  function pa(e, t, n, r) {
    return e = on(22, e, r, t), e.elementType = re, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function pl(e, t, n) {
    return e = on(6, e, null, t), e.lanes = n, e;
  }
  function vl(e, t, n) {
    return t = on(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function lp(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Va(0), this.expirationTimes = Va(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Va(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function kl(e, t, n, r, l, c, m, g, C) {
    return e = new lp(e, t, n, g, C), t === 1 ? (t = 1, c === !0 && (t |= 8)) : t = 0, c = on(3, null, null, t), e.current = c, c.stateNode = e, c.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _o(c), e;
  }
  function up(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Td(e) {
    if (!e) return Zn;
    e = e._reactInternals;
    e: {
      if (bn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Kt(t.type)) {
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
      if (Kt(n)) return tc(e, n, t);
    }
    return t;
  }
  function Md(e, t, n, r, l, c, m, g, C) {
    return e = kl(n, r, !0, e, l, c, m, g, C), e.context = Td(null), n = e.current, r = Dt(), l = ri(n), c = On(r, l), c.callback = t ?? null, ti(n, c, l), e.current.lanes = l, gs(e, l, r), Gt(e, r), e;
  }
  function va(e, t, n, r) {
    var l = t.current, c = Dt(), m = ri(l);
    return n = Td(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(c, m), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ti(l, t, m), e !== null && (kn(e, l, m, c), Wr(e, l, m)), m;
  }
  function ka(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function bd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function yl(e, t) {
    bd(e, t), (e = e.alternate) && bd(e, t);
  }
  function cp() {
    return null;
  }
  var _d = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function gl(e) {
    this._internalRoot = e;
  }
  ya.prototype.render = gl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    va(e, t, null, null);
  }, ya.prototype.unmount = gl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ei(function() {
        va(null, e, null, null);
      }), t[_n] = null;
    }
  };
  function ya(e) {
    this._internalRoot = e;
  }
  ya.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = fu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++) ;
      Wn.splice(n, 0, e), n === 0 && vu(e);
    }
  };
  function xl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ga(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ad() {
  }
  function dp(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var c = r;
        r = function() {
          var I = ka(m);
          c.call(I);
        };
      }
      var m = Md(t, r, e, 0, null, !1, !1, "", Ad);
      return e._reactRootContainer = m, e[_n] = m.current, Ls(e.nodeType === 8 ? e.parentNode : e), Ei(), m;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var I = ka(C);
        g.call(I);
      };
    }
    var C = kl(e, 0, !1, null, null, !1, !1, "", Ad);
    return e._reactRootContainer = C, e[_n] = C.current, Ls(e.nodeType === 8 ? e.parentNode : e), Ei(function() {
      va(t, C, n, r);
    }), C;
  }
  function xa(e, t, n, r, l) {
    var c = n._reactRootContainer;
    if (c) {
      var m = c;
      if (typeof l == "function") {
        var g = l;
        l = function() {
          var C = ka(m);
          g.call(C);
        };
      }
      va(t, m, e, l);
    } else m = dp(n, t, e, l, r);
    return ka(m);
  }
  du = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ys(t.pendingLanes);
          n !== 0 && (Ka(t, n | 1), Gt(t, ct()), (We & 6) === 0 && (ts = ct() + 500, qn()));
        }
        break;
      case 13:
        Ei(function() {
          var r = Rn(e, 1);
          if (r !== null) {
            var l = Dt();
            kn(r, e, 1, l);
          }
        }), yl(e, 1);
    }
  }, Ua = function(e) {
    if (e.tag === 13) {
      var t = Rn(e, 134217728);
      if (t !== null) {
        var n = Dt();
        kn(t, e, 134217728, n);
      }
      yl(e, 134217728);
    }
  }, hu = function(e) {
    if (e.tag === 13) {
      var t = ri(e), n = Rn(e, t);
      if (n !== null) {
        var r = Dt();
        kn(n, e, t, r);
      }
      yl(e, t);
    }
  }, fu = function() {
    return qe;
  }, mu = function(e, t) {
    var n = qe;
    try {
      return qe = e, t();
    } finally {
      qe = n;
    }
  }, un = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ve(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Fr(r);
              if (!l) throw Error(o(90));
              ye(r), Ve(r, l);
            }
          }
        }
        break;
      case "textarea":
        je(e, n);
        break;
      case "select":
        t = n.value, t != null && z(e, !!n.multiple, t, !1);
    }
  }, hr = dl, ms = Ei;
  var hp = { usingClientEntryPoint: !1, Events: [$s, Vi, Fr, cn, Mn, dl] }, Js = { findFiberByHostInstance: vi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, fp = { bundleType: Js.bundleType, version: Js.version, rendererPackageName: Js.rendererPackageName, rendererConfig: Js.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: B.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = pr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Js.findFiberByHostInstance || cp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ja = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ja.isDisabled && ja.supportsFiber) try {
      dt = ja.inject(fp), Ft = ja;
    } catch {
    }
  }
  return Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hp, Wt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xl(t)) throw Error(o(200));
    return up(e, t, null, n);
  }, Wt.createRoot = function(e, t) {
    if (!xl(e)) throw Error(o(299));
    var n = !1, r = "", l = _d;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = kl(e, 1, !1, null, null, n, !1, r, l), e[_n] = t.current, Ls(e.nodeType === 8 ? e.parentNode : e), new gl(t);
  }, Wt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = pr(t), e = e === null ? null : e.stateNode, e;
  }, Wt.flushSync = function(e) {
    return Ei(e);
  }, Wt.hydrate = function(e, t, n) {
    if (!ga(t)) throw Error(o(200));
    return xa(null, e, t, !0, n);
  }, Wt.hydrateRoot = function(e, t, n) {
    if (!xl(e)) throw Error(o(405));
    var r = n != null && n.hydratedSources || null, l = !1, c = "", m = _d;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), t = Md(t, null, e, 1, n ?? null, l, !1, c, m), e[_n] = t.current, Ls(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ya(t);
  }, Wt.render = function(e, t, n) {
    if (!ga(t)) throw Error(o(200));
    return xa(null, e, t, !1, n);
  }, Wt.unmountComponentAtNode = function(e) {
    if (!ga(e)) throw Error(o(40));
    return e._reactRootContainer ? (Ei(function() {
      xa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[_n] = null;
      });
    }), !0) : !1;
  }, Wt.unstable_batchedUpdates = dl, Wt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ga(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return xa(e, t, n, !1, r);
  }, Wt.version = "18.3.1-next-f1338f8080-20240426", Wt;
}
var Dd;
function Sp() {
  if (Dd) return wl.exports;
  Dd = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (i) {
        console.error(i);
      }
  }
  return s(), wl.exports = jp(), wl.exports;
}
var zd;
function wp() {
  if (zd) return Sa;
  zd = 1;
  var s = Sp();
  return Sa.createRoot = s.createRoot, Sa.hydrateRoot = s.hydrateRoot, Sa;
}
var Ep = wp();
const Np = (() => {
  const s = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], i = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], u = [64, 59, 55, 50, 45, 40], d = u.at(-1), h = { pentatonic: 15, "3nps": 17 }, p = 7, f = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], k = ["e", "B", "G", "D", "A", "E"], S = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], y = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], j = {
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
  }, T = 26, b = 72, w = 30, N = 54, F = 34, _ = 11, K = (T + b) / 2, B = w + (u.length - 1) * F + 30, V = (U) => b + U * N, D = (U) => U === 0 ? K : V(U) - N / 2, $ = (U) => w + U * F;
  function O(U, J, X) {
    const me = i.indexOf(s[U][0]) + Number(X.slice(-1)) - 1, Me = me % i.length, ye = o[Me] + 12 * Math.floor(me / i.length), ge = U + J - ye;
    return i[Me] + (ge < 0 ? "♭" : "♯").repeat(Math.abs(ge));
  }
  function se(U) {
    return [...U.base, ...U.add].sort((J, X) => J[0] - X[0]);
  }
  function ee(U, J, X) {
    const me = J + (X ? 1 : 0), Me = f[me % f.length], ye = Math.min(...Me.map(([Ve]) => Ve)), ge = Math.max(...Me.map(([, Ve]) => Ve));
    let be = (U - d % 12 + 12) % 12 - (X ? 8 : 5) + 12 * Math.floor(me / f.length);
    return ye + be < 0 && (be += 12), ge + be > h.pentatonic && (be -= 12), {
      strings: Me.map((Ve) => Ve.map((et) => et + be)),
      start: ye + be,
      end: ge + be
    };
  }
  function Ee(U, J, X) {
    const me = X[J], Me = (U + me - d % 12 + 12) % 12, ye = d + Me - me, ge = u.map((Ne, $e) => {
      const be = J + (u.length - 1 - $e) * 3;
      return [be, be + 1, be + 2].map((Ve) => {
        const et = Math.floor(Ve / X.length), Je = X[Ve % X.length];
        return ye + Je + 12 * et - Ne;
      });
    });
    return {
      strings: ge,
      start: Math.min(...ge.map((Ne) => Ne[0])),
      end: Math.max(...ge.map((Ne) => Ne.at(-1)))
    };
  }
  function Te(U, J) {
    const X = [], me = Math.ceil(-U.end / 12) * 12;
    for (let ye = me; U.start + ye <= J; ye += 12) {
      const ge = U.strings.map(($e) => $e.map((be) => be + ye).filter((be) => be >= 0 && be <= J)), Ne = ge.flat();
      X.push({
        strings: ge,
        start: Math.min(...Ne),
        end: Math.max(...Ne),
        partial: U.start + ye < 0 || U.end + ye > J
      });
    }
    const Me = X.filter((ye) => !ye.partial);
    return Me.length ? Me : X;
  }
  function Z(U) {
    return se(U).length === p;
  }
  function ce(U, J, X) {
    const me = Z(J);
    U.querySelector('[value="3nps"]').disabled = !me, U.value = me ? X ?? "3nps" : "pentatonic";
  }
  function G(U, J, X, me, Me) {
    const ye = se(J).map(([ge]) => ge);
    return me.map((ge) => {
      const Ne = ge - 1, $e = X === "3nps" ? Ee(U, Ne, ye) : ee(U, Ne, J.base === y), be = Me === void 0 ? [$e] : Te($e, Me);
      return { number: ge, positions: be };
    });
  }
  function oe(U, J) {
    const X = U.getBoundingClientRect(), me = U.querySelectorAll(J);
    let Me = 1 / 0;
    me.forEach((ye) => {
      const ge = ye.getBoundingClientRect();
      let Ne = 0;
      ge.left < X.left ? Ne = ge.left - X.left - 8 : ge.right > X.right && (Ne = ge.right - X.right + 8), Math.abs(Ne) < Math.abs(Me) && (Me = Ne);
    }), Number.isFinite(Me) && (U.scrollLeft += Me);
  }
  function re(U, J = !1) {
    const X = U === "3nps" ? p : f.length;
    return Array.from({ length: X }, (me, Me) => {
      const ye = Me + 1;
      return '<label class="box-toggle" data-box="' + ye + '"><input type="checkbox" value="' + ye + '"' + (J && Me === 0 ? " checked" : "") + "> Boksi " + ye + "</label>";
    }).join("");
  }
  function Y(U, J) {
    const X = se(J), me = new Map(X.map(([ye, ge]) => [ye, O(U, ye, ge)])), Me = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return X.flatMap(([ye, ge]) => Me.flatMap(({ suffix: Ne, base: $e }) => {
      const be = $e.map(([Ve]) => me.get((ye + Ve) % 12));
      return be.every(Boolean) ? {
        root: (U + ye) % 12,
        degree: Number(String(ge).replace(/\D/g, "")),
        name: be[0] + Ne,
        notes: be,
        base: $e,
        add: []
      } : [];
    }));
  }
  function ae(U, J) {
    const X = U.base.map(([ye]) => (U.root + ye) % 12), me = u.map((ye) => {
      const ge = [];
      for (let Ne = 0; Ne <= J; Ne++) {
        const $e = (ye + Ne) % 12;
        X.includes($e) && ge.push({ fret: Ne, pitch: $e });
      }
      return ge;
    }), Me = [];
    for (let ye = 0; ye <= me.length - 3; ye++)
      for (const ge of me[ye])
        for (const Ne of me[ye + 1])
          if (ge.pitch !== Ne.pitch)
            for (const $e of me[ye + 2]) {
              if ($e.pitch === ge.pitch || $e.pitch === Ne.pitch) continue;
              const be = [ge.fret, Ne.fret, $e.fret], Ve = Math.min(...be), et = Math.max(...be);
              if (et - Ve > 3) continue;
              const Je = Array(u.length).fill(null);
              Je.splice(ye, 3, ...be), Me.push({ strings: Je, low: Ve, high: et });
            }
    return Me.sort((ye, ge) => ye.high - ge.high || ye.low - ge.low);
  }
  const te = {
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
  }, E = [
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
  function x(U, J) {
    const X = te[U + ":" + J];
    if (X) return { frets: X, barre: null };
    let me = null;
    return E.forEach(({ string: Me, openPC: ye, shapes: ge }) => {
      const Ne = ge[J];
      if (!Ne) return;
      let $e = (U - ye + 12) % 12;
      if ($e + Math.min(...Ne.filter((et) => et !== null)) < 0 && ($e += 12), me && me.fret <= $e) return;
      const be = Ne.map((et) => et === null ? null : $e + et), Ve = $e > 0 && Ne.at(-1) === 0 ? { fret: $e, from: Me, to: Ne.length - 1 } : null;
      me = { fret: $e, frets: be, barre: Ve };
    }), me && { frets: me.frets, barre: me.barre };
  }
  function ne(U, { frets: J, barre: X }, me) {
    const be = [...u].reverse(), Ve = J.filter((je) => je > 0), Je = !Ve.length || Math.max(...Ve) <= 4 && (J.includes(0) || Math.min(...Ve) === 1) ? 1 : Math.min(...Ve), tt = (je) => 24 + je * 14, z = (je) => 30 + (je - Je) * 18 + 18 / 2, le = 102;
    let ue = '<svg class="chord-svg" viewBox="0 0 108 ' + (le + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + me + "-ote paksusta kielestä ohueen: " + J.map((je) => je ?? "x").join(" ") + '">';
    for (let je = 0; je <= 4; je++)
      ue += '<line class="' + (je === 0 && Je === 1 ? "nut" : "fret") + '" x1="' + tt(0) + '" y1="' + (30 + je * 18) + '" x2="' + tt(5) + '" y2="' + (30 + je * 18) + '"/>';
    return J.forEach((je, Ce) => {
      ue += '<line class="string" x1="' + tt(Ce) + '" y1="30" x2="' + tt(Ce) + '" y2="' + le + '"/>';
    }), Je > 1 && (ue += '<text class="fret-label" x="15" y="' + (z(Je) + 4) + '">' + Je + "</text>"), X && (ue += '<rect class="barre" x="' + (tt(X.from) - 6.5) + '" y="' + (z(X.fret) - 6.5) + '" width="' + ((X.to - X.from) * 14 + 13) + '" height="13" rx="6.5"/>'), J.forEach((je, Ce) => {
      if (je === null) {
        ue += '<text class="marker" x="' + tt(Ce) + '" y="22">×</text>';
        return;
      }
      const Ue = (be[Ce] + je) % 12 === U;
      if (je === 0) {
        ue += '<circle class="open' + (Ue ? " root-open" : "") + '" cx="' + tt(Ce) + '" cy="18" r="4.5"/>';
        return;
      }
      X && je === X.fret && Ce >= X.from && Ce <= X.to && !Ue || (ue += '<circle class="' + (Ue ? "root" : "tone") + '" cx="' + tt(Ce) + '" cy="' + z(je) + '" r="6.5"/>');
    }), ue + "</svg>";
  }
  function fe(U, J) {
    const X = new URLSearchParams(location.search), me = s.indexOf(X.get("toonikka")), Me = X.get("asteikko");
    return {
      rootPC: me === -1 ? U : me,
      scaleId: Object.hasOwn(j, Me) ? Me : J
    };
  }
  function de(U, J, X) {
    return U + "?" + new URLSearchParams({ toonikka: s[J], asteikko: X });
  }
  function H(U, J, X, {
    boxes: me = [],
    onlyBoxNotes: Me = !1,
    automatic: ye = !0,
    focusDegree: ge = "",
    grip: Ne = null,
    barre: $e = null,
    label: be = s[U] + " " + J.name,
    notes: Ve = null,
    targets: et = !1,
    muteFret: Je = null
  } = {}) {
    const tt = V(X), z = tt + 48, le = z + 28, ue = w - 14, je = $(u.length - 1) + 14, Ce = je - ue, Ue = ye ? 680 : Math.ceil(le * 0.64), He = me.flatMap((Le) => Le.positions), mt = {};
    J.base.forEach(([Le, Re]) => mt[(U + Le) % 12] = { deg: Re, added: !1 }), J.add.forEach(([Le, Re]) => mt[(U + Le) % 12] = { deg: Re, added: !0 });
    const Et = u.map((Le, Re) => !!Ne && Ne[Re] === null), Qt = !!Ne && Je !== null, Ot = S.filter((Le, Re) => Et[Re]).reverse(), gn = be + ". " + X + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Ot.length ? " Soittamatta jäävät kielet: " + Ot.join(", ") + "." : "");
    let _e = '<svg viewBox="0 0 ' + le + " " + B + '" style="min-width:' + Ue + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (et ? "group" : "img") + '" aria-label="' + gn + '">';
    _e += '<rect x="' + T + '" y="' + ue + '" width="' + (b - T) + '" height="' + Ce + '" rx="6" fill="#2a2338"/>', _e += '<rect x="' + b + '" y="' + ue + '" width="' + (tt - b) + '" height="' + Ce + '" fill="#231a12"/>', _e += '<rect x="' + tt + '" y="' + ue + '" width="' + (le - tt - 4) + '" height="' + Ce + '" rx="8" fill="#32251e"/>';
    for (let Le = 1; Le <= X; Le++)
      _e += '<line x1="' + V(Le) + '" y1="' + ue + '" x2="' + V(Le) + '" y2="' + je + '" stroke="#6f5b47" stroke-width="2"/>';
    _e += '<rect x="' + (b - 3) + '" y="' + ue + '" width="6" height="' + Ce + '" rx="2" fill="#d8cbb6"/>', _e += '<rect x="' + (z - 11) + '" y="' + (ue + 3) + '" width="22" height="' + (Ce - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', _e += '<rect x="' + (z - 4) + '" y="' + (ue + 7) + '" width="3" height="' + (Ce - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const ln = (ue + je) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Le) => Le <= X).forEach((Le) => _e += '<circle cx="' + D(Le) + '" cy="' + ln + '" r="5.5" fill="#7a6550"/>');
    for (let Le = 12; Le <= X; Le += 12)
      _e += '<circle cx="' + D(Le) + '" cy="' + (ln - F) + '" r="5.5" fill="#7a6550"/>', _e += '<circle cx="' + D(Le) + '" cy="' + (ln + F) + '" r="5.5" fill="#7a6550"/>';
    _e += '<text x="' + K + '" y="' + (B - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', _e += '<text x="' + b + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', _e += '<text x="' + z + '" y="' + (B - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Le = 1; Le <= X; Le++)
      _e += '<text x="' + D(Le) + '" y="' + (B - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Le + "</text>";
    if (me.forEach(({ number: Le, positions: Re }) => {
      Re.forEach((Ie) => {
        const Ze = Ie.partial ? "box-highlight box-partial" : "box-highlight";
        _e += '<g class="' + Ze + '" data-box="' + Le + '" aria-hidden="true">';
        const ut = Ie.strings.find((Nt) => Nt.length), un = (D(ut[0]) + D(ut.at(-1))) / 2;
        _e += '<text class="box-number" x="' + un + '" y="12">' + Le + "</text>", Ie.strings.forEach((Nt, $t) => {
          if (!Nt.length) return;
          const Tn = D(Nt[0]) - 16, cn = D(Nt.at(-1)) - D(Nt[0]) + 32;
          _e += '<rect class="box-band" x="' + Tn + '" y="' + ($($t) - 14) + '" width="' + cn + '" height="28" rx="14"/>';
        }), _e += "</g>";
      });
    }), u.forEach((Le, Re) => {
      const Ie = 1 + Re * 0.45, Ze = $(Re), ut = Et[Re] && !Qt;
      ut ? _e += '<text class="muted-mark" x="' + K + '" y="' + (Ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : Et[Re] && Je === 0 || (_e += '<line x1="' + (T + 4) + '" y1="' + Ze + '" x2="' + (b - 4) + '" y2="' + Ze + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), _e += "<g" + (ut ? ' opacity=".35"' : "") + ">", _e += '<line x1="' + b + '" y1="' + Ze + '" x2="' + (z + 5) + '" y2="' + Ze + '" stroke="#b9b9c4" stroke-width="' + Ie.toFixed(2) + '"/>', _e += '<circle cx="' + (z + 5) + '" cy="' + Ze + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', _e += "</g>", _e += '<text x="13" y="' + (Ze + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + k[Re] + "</text>";
    }), Ne && $e && $e.fret >= 1 && $e.fret <= X) {
      const Le = $($e.from), Re = $($e.to), Ie = Math.min(Le, Re) - 6, Ze = Math.max(Le, Re) + 6;
      _e += '<rect class="barre-indicator" x="' + (D($e.fret) - 7) + '" y="' + Ie + '" width="14" height="' + (Ze - Ie) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return et && (_e += '<g class="fret-targets">', u.forEach((Le, Re) => {
      for (let Ie = 0; Ie <= X; Ie++) {
        const Ze = Ie ? S[Re] + "-kieli, " + Ie + ". nauha" : "vapaa " + S[Re] + "-kieli", ut = Ie ? N : b - T - 6;
        _e += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Re + '" data-fret="' + Ie + '" data-midi="' + (Le + Ie) + '" aria-label="' + Ze + '" x="' + (D(Ie) - ut / 2) + '" y="' + ($(Re) - F / 2) + '" width="' + ut + '" height="' + F + '" fill="transparent"/>';
      }
    }), _e += "</g>"), (Ve ?? []).forEach(({ string: Le, fret: Re, label: Ie, kind: Ze }) => {
      _e += '<g class="octave-note octave-' + Ze + '">', _e += '<circle cx="' + D(Re) + '" cy="' + $(Le) + '" r="' + _ + '"/>', _e += '<text x="' + D(Re) + '" y="' + ($(Le) + 3.5) + '" font-size="' + (Ie.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Ie + "</text>", _e += "</g>";
    }), Ne && (_e += '<g class="grip-notes">'), (Ve ? [] : u).forEach((Le, Re) => {
      for (let Ie = 0; Ie <= X; Ie++) {
        const Ze = (Le + Ie) % 12;
        if (!(Ze in mt) || Ne && Ne[Re] !== Ie || Me && !He.some(({ strings: cn }) => {
          const Mn = cn[Re];
          return Mn.length > 0 && Ie >= Mn[0] && Ie <= Mn.at(-1);
        })) continue;
        const ut = mt[Ze], un = ut.deg === "1", Nt = ut.added ? "#f0a13c" : un ? "#4b2fd6" : "#6d4aff", $t = ut.added ? "#1a1430" : "#fff";
        ut.deg === ge && (_e += '<circle class="focus-note" cx="' + D(Ie) + '" cy="' + $(Re) + '" r="14.5"/>');
        const Tn = Ne ? ' data-string="' + (Re + 1) + '" data-fret="' + Ie + '" data-degree="' + ut.deg + '"' : "";
        _e += "<circle" + Tn + ' cx="' + D(Ie) + '" cy="' + $(Re) + '" r="' + _ + '" fill="' + Nt + '" stroke="' + (un ? "#fff" : "#1a1430") + '" stroke-width="' + (un ? 2.5 : 1) + '"/>', _e += '<text x="' + D(Ie) + '" y="' + ($(Re) + 3.5) + '" font-size="' + (ut.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + $t + '" text-anchor="middle">' + ut.deg + "</text>";
      }
    }), Ne && (_e += "</g>"), Qt && Et.forEach((Le, Re) => {
      if (!Le) return;
      const Ie = D(Je), Ze = $(Re);
      _e += '<g class="muted-mark grip-mute" data-string="' + (Re + 1) + '" data-fret="' + Je + '">', _e += '<circle cx="' + Ie + '" cy="' + Ze + '" r="9" fill="' + (Je === 0 ? "#2a2338" : "#231a12") + '"/>', _e += '<text x="' + Ie + '" y="' + (Ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', _e += "</g>";
    }), _e += "</svg>", _e;
  }
  return {
    CHROM: s,
    OPEN_PITCHES: u,
    PENT_MAJ: y,
    SCALES: j,
    noteName: O,
    scaleNotes: se,
    scaleTriads: Y,
    triadGrips: ae,
    chordGrip: x,
    renderChordDiagram: ne,
    selectionFromURL: fe,
    selectionHref: de,
    renderBoard: H,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: Z,
    syncBoxSystem: ce,
    fingeringBoxes: G,
    boxOptions: re,
    revealPositions: oe
  };
})();
globalThis.MusicMapFretboard = Np;
function Cl(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function Cp(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function Tp(s) {
  const i = Cp(s), o = Math.round(i), u = (i - o) * 100;
  return { midi: o, cents: u };
}
const Ke = globalThis.MusicMapFretboard, Qe = (s) => (s % 12 + 12) % 12, Mp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], bp = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Fe = (s, i = !1, o = !1) => (i ? bp : Mp)[Qe(s)] + (o ? Math.floor(s / 12) - 1 : ""), di = (s) => Ke.CHROM[Qe(s)], sr = (s, i, o) => Ke.noteName(Qe(s), i, o);
function _p(s, i) {
  const o = Math.floor(s / 12) - 1;
  return i[0] === "B" && Qe(s) < 2 ? o - 1 : i[0] === "C" && Qe(s) > 9 ? o + 1 : o;
}
const en = ["ohut E", "B", "G", "D", "A", "paksu E"], nu = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Fh = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], Ap = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], _i = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, Be = (s, i) => ({ string: s, fret: i, midi: Ke.OPEN_PITCHES[s] + i });
function hs(s, i, o) {
  return [...s].sort((u, d) => u - d).flatMap((u) => Array.from({ length: Math.max(0, o - i + 1) }, (d, h) => Be(u, i + h)));
}
const Xe = (s) => `${s.string}:${s.fret}`, bi = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Ih = (s, i) => i === "maj" ? `${di(s)}-duurisointu` : i === "min" ? `${di(s)}-mollisointu` : `${di(s)}7-sointu`, rr = [
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
], Bd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Dh(s, i) {
  const o = Bd[i] ?? Bd.E, u = Qe(s - o.root);
  return o.frets.flatMap((d, h) => d === null ? [] : [Be(h, d + u)]);
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
}, Fa = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, ui = (s, i, o, u) => typeof s == "number" && Number.isFinite(s) ? Math.max(i, Math.min(o, s)) : u, Nn = (s, i, o) => i.includes(s) ? s : o;
function La(s) {
  const i = { ...Ca };
  i.mode = Nn(s.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], i.mode), i.strings = Array.isArray(s.strings) ? [...new Set(s.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, u) => o - u) : i.strings, i.strings.length || (i.strings = [...Ca.strings]), i.min = Math.round(ui(s.min, 0, 24, i.min)), i.max = Math.round(ui(s.max, i.min, 24, Math.max(i.min, i.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof s[o] == "boolean" && (i[o] = s[o]);
  return i.check = Nn(s.check, ["class", "pitch"], i.check), i.input = Nn(s.input, ["mic", "board"], i.input), i.rounds = [0, 10, 20].includes(s.rounds) ? s.rounds : i.rounds, i.root = Math.round(ui(s.root, 0, 11, i.root)), i.scale = typeof s.scale == "string" && Object.hasOwn(Ke.SCALES, s.scale) ? s.scale : i.scale, i.box = Math.round(ui(s.box, 0, 5, i.box)), i.order = Nn(s.order, ["random", "up", "down"], i.order), i.chord = Nn(s.chord, ["maj", "min", "dom7"], i.chord), i.chordTone = Nn(s.chordTone, ["build", "random", "1", "3", "5", "7"], i.chordTone), i.chord !== "dom7" && i.chordTone === "7" && (i.chordTone = "build"), i.shape = Nn(s.shape, ["C", "A", "G", "E", "D"], i.shape), i.intervals = Array.isArray(s.intervals) ? [...new Set(s.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, u) => o - u) : i.intervals, i.intervals.length || (i.intervals = [...Ca.intervals]), i.direction = Nn(s.direction, ["up", "down", "both"], i.direction), i.hints = Nn(s.hints, ["off", "always", "fade"], i.hints), i.activity = Nn(s.activity, ["play", "degree"], i.activity), i.minRms = ui(s.minRms, 1e-3, 0.15, i.minRms), i.clarity = ui(s.clarity, 0.85, 0.99, i.clarity), i.stability = ui(s.stability, 120, 800, i.stability), i.cents = ui(s.cents, 10, 45, i.cents), i.device = typeof s.device == "string" ? s.device.slice(0, 256) : "", i;
}
function Pp(s, i) {
  const o = new URLSearchParams(s), u = { ...i };
  for (const [d, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(d) && Object.assign(u, { [h]: o.get(d) });
  for (const [d, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(d) && (u[h] = Number(o.get(d)));
  o.has("kielet") && (u.strings = o.get("kielet").split(",").map((d) => Number(d) - 1)), o.has("intervallit") && (u.intervals = o.get("intervallit").split(",").map(Number));
  for (const [d, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(d) && (u[h] = o.get(d) === "1");
  if (o.has("toonikka")) {
    const d = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], f = Math.max(Ke.CHROM.indexOf(h), p.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    f >= 0 && (u.root = f);
  }
  return La(u);
}
function Lp(s) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: s.mode,
    toonikka: Ke.CHROM[s.root],
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
const Ai = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, zn = (s) => s.mode === "scale" && s.order !== "random", zh = (s) => ["note", "degree"].includes(Ai(s)) ? "class" : zn(s) ? "pitch" : s.check, wa = (s) => Ai(s) === "mic", Vd = "musiikin-kartta:harjoittelu", Bh = 3, Dl = () => ({ version: Bh, settings: { ...Ca }, stats: {}, recent: [], sessions: [] }), Vh = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, yn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function Rp(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((i) => yn(s[i])) && s.correct <= s.attempts && (s.errors === void 0 || yn(s.errors)) && (s.ema === void 0 || yn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || yn(s.emaMs));
}
function Op(s) {
  return !!s && typeof s.id == "string" && yn(s.count) && yn(s.first) && s.first <= s.count && yn(s.ms) && yn(s.at) && (s.solo === void 0 || yn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || yn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function Kd(s) {
  if (!s) return Dl();
  const i = JSON.parse(s);
  if (!i || ![1, 2, 3].includes(i.version) || !i.stats || typeof i.stats != "object" || Array.isArray(i.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(i.stats).some((p) => !Rp(p))) throw new Error("Virheellisiä tilastoja");
  if (i.recent !== void 0 && (!Array.isArray(i.recent) || i.recent.some((p) => !p || typeof p.id != "string" || !yn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (i.sessions !== void 0 && (!Array.isArray(i.sessions) || i.sessions.some((p) => !Op(p)))) throw new Error("Virheellisiä kierroksia");
  const o = i.version < 3, u = La(i.settings ?? {}), d = o && i.settings?.hints !== "always" && i.settings?.hints !== "off";
  d && (u.hints = "off");
  const h = {
    version: Bh,
    settings: u,
    stats: Object.fromEntries(Object.entries(i.stats).map(([p, f]) => [p, { ...f, errors: f.errors ?? 0 }])),
    recent: (i.recent ?? []).slice(-500),
    sessions: (i.sessions ?? []).slice(-200)
  };
  return (d || i.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const Ud = 2500, $p = 8e3, Hd = 0.3, ar = (s) => s.ema ?? s.correct / s.attempts, or = (s) => s.emaMs ?? s.totalMs / s.attempts;
function iu(s) {
  if (!s?.attempts) return null;
  const i = Math.max(0, Math.min(1, 1 - (or(s) - Ud) / ($p - Ud)));
  return ar(s) * 0.65 + i * 0.35;
}
function Fp(s) {
  return !s || s.attempts < 3 ? 3 : 0.25 + (1 - iu(s)) * 3;
}
class Gd {
  constructor(i) {
    this.storage = i;
    try {
      this.data = Kd(i?.getItem(Vd) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = Dl();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Vd, JSON.stringify(this.data)), this.warning = "";
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
    const o = Vh(i), u = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(i.first), h = {
      attempts: u.attempts + 1,
      correct: u.correct + d,
      errors: u.errors + i.errors,
      totalMs: u.totalMs + i.ms,
      lastSeen: i.at,
      ema: u.attempts ? ar(u) + Hd * (d - ar(u)) : d,
      emaMs: u.attempts ? or(u) + Hd * (i.ms - or(u)) : i.ms
    };
    Object.defineProperty(this.data.stats, o, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, i].slice(-500), this.save();
  }
  session(i) {
    this.data.sessions = [...this.data.sessions.filter((o) => o.id !== i.id), i].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(i) {
    if (!i.trim()) throw new Error("Tyhjä tiedosto");
    const o = Kd(i);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...Dl(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Ip = 4e3, Wd = 12, Dp = 1500;
function zp(s, i) {
  const o = s.left + s.stickyLeft, u = s.right;
  let d = 0;
  if (i.left < o ? d = i.left - o - Wd : i.right > u && (d = i.right - u + Wd), d === 0) return null;
  const h = Math.max(0, Math.min(s.maxScroll, s.scrollLeft + d));
  return Math.abs(h - s.scrollLeft) < 1 ? null : h;
}
function Bp(s, i) {
  return i.right <= s.left + s.stickyLeft || i.left >= s.right;
}
function Kh(s, i, o, { stickySelector: u, enabled: d = !0, playback: h } = {}) {
  const p = A.useRef(0), f = A.useRef(!1), k = A.useRef(""), S = A.useRef(0), v = A.useRef(h);
  A.useEffect(() => {
    const y = s.current;
    if (!y || !d) return;
    const j = () => {
      p.current = Date.now() + Ip;
    }, T = () => {
      f.current = !0, j();
    }, b = () => {
      f.current && (f.current = !1, j());
    }, w = (N) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(N.key) && j();
    };
    return y.addEventListener("pointerdown", T, { passive: !0 }), y.addEventListener("touchstart", T, { passive: !0 }), y.addEventListener("wheel", j, { passive: !0 }), y.addEventListener("keydown", w), window.addEventListener("pointerup", b, { passive: !0 }), window.addEventListener("pointercancel", b, { passive: !0 }), window.addEventListener("touchend", b, { passive: !0 }), window.addEventListener("touchcancel", b, { passive: !0 }), () => {
      y.removeEventListener("pointerdown", T), y.removeEventListener("touchstart", T), y.removeEventListener("wheel", j), y.removeEventListener("keydown", w), window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), window.removeEventListener("touchend", b), window.removeEventListener("touchcancel", b);
    };
  }, [s, d]), A.useLayoutEffect(() => {
    const y = h !== void 0 && !!h && h !== v.current;
    v.current = h, y && !f.current && (p.current = 0);
  }, [h]), A.useLayoutEffect(() => {
    h === void 0 && k.current === "" && o !== "" && Date.now() - S.current > Dp && !f.current && (p.current = 0), k.current !== "" && o === "" && (S.current = Date.now()), k.current = o;
    const y = s.current;
    if (!y || !d || !o || f.current || Date.now() < p.current) return;
    const j = y.querySelector(i);
    if (!j) return;
    const T = y.getBoundingClientRect(), b = j.getBoundingClientRect(), w = u ? y.querySelector(u) : null, N = w && getComputedStyle(w).position === "sticky" ? w.getBoundingClientRect().width : 0, F = {
      left: T.left,
      right: T.left + y.clientWidth,
      scrollLeft: y.scrollLeft,
      maxScroll: y.scrollWidth - y.clientWidth,
      stickyLeft: N
    }, _ = zp(F, b);
    if (_ === null) return;
    const B = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Bp(F, b);
    typeof y.scrollTo == "function" ? y.scrollTo({ left: _, behavior: B ? "auto" : "smooth" }) : y.scrollLeft = _;
  }, [s, i, o, u, d, h]);
}
const Vp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Kp = ["e", "B", "G", "D", "A", "E"];
function Uh({ string: s }) {
  return /* @__PURE__ */ a.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ a.jsxs("span", { children: [
      s + 1,
      " · ",
      /* @__PURE__ */ a.jsx("strong", { children: Kp[s] })
    ] }),
    s === 0 ? /* @__PURE__ */ a.jsx("small", { children: "ohuin" }) : s === 5 ? /* @__PURE__ */ a.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Hh = (s) => ({ "--string-thickness": 1.25 + s * 0.45 + "px" }), Up = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Gh({ min: s, max: i }) {
  return /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
    /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: i - s + 1 }, (o, u) => {
      const d = s + u;
      return /* @__PURE__ */ a.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Vp.has(d) ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function hi({ area: s, marks: i = [], mutedStrings: o = [], disabled: u = !1, onAnswer: d, caption: h = "Otelauta", follow: p = "hints", playback: f }) {
  const k = { "--cols": s.max - s.min + 1 }, { strings: S, min: v, max: y } = s, [j, T] = A.useState({ string: Math.min(...S), fret: v }), b = A.useRef(null), w = new Map(i.map((V) => [Xe(V), V])), N = i.map((V) => `${Xe(V)}${V.kind}`).join(",");
  A.useEffect(() => {
    if (p !== "hints") return;
    const V = b.current, D = V?.querySelector(".target, .anchor");
    V && D && (V.scrollLeft += D.getBoundingClientRect().left - V.getBoundingClientRect().left - V.clientWidth / 2 + D.clientWidth / 2);
  }, [N, p]), A.useEffect(() => {
    p === "playing" && b.current && (b.current.scrollLeft = 0);
  }, [p, v, y]);
  const F = i.find((V) => V.kind === "playing");
  Kh(b, ".playing", F ? Xe(F) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: f });
  const [_, K] = A.useState({ left: !1, right: !1 });
  A.useEffect(() => {
    const V = b.current;
    if (!V) return;
    const D = () => {
      const O = V.scrollLeft > 2, se = V.scrollLeft + V.clientWidth < V.scrollWidth - 2;
      K((ee) => ee.left === O && ee.right === se ? ee : { left: O, right: se });
    };
    D(), V.addEventListener("scroll", D, { passive: !0 });
    const $ = typeof ResizeObserver > "u" ? null : new ResizeObserver(D);
    return $?.observe(V), () => {
      V.removeEventListener("scroll", D), $?.disconnect();
    };
  }, [N, v, y]);
  const B = S.includes(j.string) && j.fret >= v && j.fret <= y ? j : { string: Math.min(...S), fret: v };
  return /* @__PURE__ */ a.jsxs("div", { className: "fret-wrap" + (_.left ? " more-left" : "") + (_.right ? " more-right" : ""), children: [
    (_.left || _.right) && /* @__PURE__ */ a.jsxs("p", { className: "fret-scroll-hint", children: [
      _.left && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      _.left && _.right ? "molemmilla puolilla" : _.right ? "oikealla" : "vasemmalla",
      _.right && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ a.jsx("div", { ref: b, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board", style: k, children: [
      /* @__PURE__ */ a.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ a.jsx(Gh, { min: v, max: y }),
      /* @__PURE__ */ a.jsx("tbody", { children: Ke.OPEN_PITCHES.map((V, D) => /* @__PURE__ */ a.jsxs("tr", { className: S.includes(D) ? "" : "unused", style: Hh(D), children: [
        /* @__PURE__ */ a.jsxs("th", { scope: "row", "aria-label": `${D + 1}. kieli: ${en[D]}${o.includes(D) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ a.jsx(Uh, { string: D }),
          o.includes(D) && /* @__PURE__ */ a.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        hs([D], v, y).map(($) => {
          const O = w.get(Xe($)), se = `${en[D]}-kieli, ${_i($.fret)}`;
          return /* @__PURE__ */ a.jsx("td", { className: `${$.fret === 0 ? "open-fret " : ""}${O ? O.kind === "answer" ? "target" : O.kind : ""}`, children: /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "data-string": D,
              "data-fret": $.fret,
              tabIndex: B.string === D && B.fret === $.fret ? 0 : -1,
              onFocus: () => T($),
              onKeyDown: (ee) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(ee.key)) return;
                ee.preventDefault();
                const Ee = [...S].sort((G, oe) => G - oe), Te = Ee.indexOf(D), Z = ee.key === "ArrowUp" ? Ee[Math.max(0, Te - 1)] : ee.key === "ArrowDown" ? Ee[Math.min(Ee.length - 1, Te + 1)] : D, ce = ee.key === "Home" ? v : ee.key === "End" ? y : Math.max(v, Math.min(y, $.fret + (ee.key === "ArrowRight" ? 1 : ee.key === "ArrowLeft" ? -1 : 0)));
                ee.currentTarget.closest("table")?.querySelector(`button[data-string="${Z}"][data-fret="${ce}"]`)?.focus();
              },
              disabled: u || !S.includes(D),
              "aria-label": se + (O ? `, ${Up[O.kind]}${O.label ? " " + O.label : ""}` : ""),
              onClick: () => d?.($),
              children: O ? /* @__PURE__ */ a.jsx("span", { className: "dot", children: O.label || "●" }) : null
            }
          ) }, $.fret);
        })
      ] }, D)) })
    ] }) })
  ] });
}
function Hp({ area: s, stats: i, input: o, check: u, flats: d }) {
  const { strings: h, min: p, max: f } = s, k = `${o}:${u}:solo:notes:`;
  return /* @__PURE__ */ a.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board mastery", style: { "--cols": f - p + 1 }, children: [
    /* @__PURE__ */ a.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ a.jsx(Gh, { min: p, max: f }),
    /* @__PURE__ */ a.jsx("tbody", { children: Ke.OPEN_PITCHES.map((S, v) => /* @__PURE__ */ a.jsxs("tr", { className: h.includes(v) ? "" : "unused", style: Hh(v), children: [
      /* @__PURE__ */ a.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${en[v]}`, children: /* @__PURE__ */ a.jsx(Uh, { string: v }) }),
      hs([v], p, f).map((y) => {
        const j = Object.hasOwn(i, k + Xe(y)) ? i[k + Xe(y)] : void 0, T = iu(j), b = T === null ? "unseen" : j.attempts < 3 ? "few" : T >= 0.8 ? "strong" : T >= 0.5 ? "growing" : "weak", w = `${en[v]}-kieli, ${_i(y.fret)}, ${Fe(y.midi, d)}`, N = j ? `${Math.round(T * 100)} %, ${j.correct}/${j.attempts} heti oikein, viime aikoina ${Math.round(ar(j) * 100)} % ja ${(or(j) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ a.jsxs("td", { className: `${y.fret === 0 ? "open-fret " : ""}${b}`, title: `${w}: ${N}`, children: [
          /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: T === null ? "·" : j.attempts < 3 ? "?" : Math.round(T * 100) }),
          /* @__PURE__ */ a.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            N
          ] })
        ] }, y.fret);
      })
    ] }, v)) })
  ] }) });
}
const Gp = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", Ia = (s) => s.mode === "scale" ? Ke.scaleNotes(Ke.SCALES[s.scale]) : bi[s.mode === "caged" ? "maj" : s.chord].tones, Wh = (s) => Ke.fingeringBoxes(s.root, Ke.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
function Pi(s) {
  if (s.mode === "caged") {
    const i = Dh(s.root, s.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...i), max: Math.max(...i), fixed: "shape" };
  }
  if (s.mode === "scale" && s.box) {
    const i = Wh(s);
    return { strings: s.strings, min: i.start, max: i.end, fixed: "box" };
  }
  return { strings: s.strings, min: s.min, max: s.max, fixed: "" };
}
function Wp(s) {
  const i = Pi(s);
  return i.fixed ? { ...i, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, i.min - 1), max: Math.min(24, i.max + 1) } : i;
}
function cr(s) {
  const i = Pi(s), o = hs(i.strings, i.min, i.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return o.filter((h) => s.accidentals || ![1, 3, 6, 8, 10].includes(Qe(h.midi)));
  if (s.mode === "caged") {
    const h = new Set(Dh(s.root, s.shape).map(Xe));
    return o.filter((p) => h.has(Xe(p)));
  }
  if (s.mode === "interval") return o;
  const u = o.filter((h) => Ia(s).some(([p]) => Qe(h.midi - s.root) === p));
  if (s.mode !== "scale" || !s.box) return u;
  const d = Wh(s);
  return u.filter((h) => {
    const p = d.strings[h.string];
    return p.length > 0 && h.fret >= p[0] && h.fret <= p.at(-1);
  });
}
function Qh(s, i) {
  return (s.direction === "both" ? ["up", "down"] : [s.direction]).flatMap((u) => s.intervals.map((d) => ({
    iv: d,
    direction: u,
    pairs: i.flatMap((h) => i.filter((p) => p.midi === h.midi + (u === "down" ? -d : d)).map((p) => ({ reference: h, target: p })))
  }))).filter((u) => u.pairs.length);
}
function Qp(s) {
  const i = Ia(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? i : i.filter(([, o]) => o.endsWith(s.chordTone));
}
function zl(s) {
  const i = cr(s), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!i.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const u = Qp(s).filter(([d]) => !i.some((h) => Qe(h.midi - s.root) === d));
  return u.length ? `Valitulta alueelta puuttuu soinnun ${u.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : s.mode === "interval" && !Qh(s, i).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : zn(s) && new Set(i.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function Yp(s, i) {
  const o = [...new Map([...i].sort((u, d) => u.midi - d.midi || u.string - d.string).map((u) => [u.midi, u])).values()];
  return s.order === "down" ? o.reverse() : o;
}
function Yh(s) {
  return zn(s) ? new Set(cr(s).map((i) => i.midi)).size : s.rounds;
}
function Jp(s, i) {
  return s.hints === "always" ? 2 : s.hints === "fade" ? i <= 3 ? 2 : i <= 6 ? 1 : 0 : 0;
}
function is(s, i, o = Math.random) {
  if (!s.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const u = i.reduce((p, f) => p + f, 0), d = Math.min(0.999999999, Math.max(0, o()));
  if (!(u > 0)) return s[Math.floor(d * s.length)];
  let h = d * u;
  for (let p = 0; p < s.length; p++)
    if (h -= i[p], h < 0) return s[p];
  return s.at(-1);
}
const Qd = (s, i) => s.mode === "caged" ? `caged:${s.root}:${s.shape}:${i}` : s.mode === "chord" ? `chord:${s.root}:${s.chord}:${i}:${s.activity}` : `scale:${s.root}:${s.scale}:${i}:${s.activity}`;
function Mi(s, i) {
  const o = s.filter((u) => !i(u));
  return o.length ? o : s;
}
function Xp(s, i, o = {}, u, d = Math.random) {
  const h = zl(s);
  if (h) throw new Error(h);
  const p = zh(s), f = Ai(s), k = p === "pitch", S = ($) => s.weak ? Fp(o[Vh({ input: f, check: p, hint: !1, item: $ })]) : 1, v = ($) => is($, $.map(() => 1), d), y = cr(s), j = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const $ = Mi(y, (ee) => !!u && Xe(ee) === Xe(u.position)), O = is($, $.map((ee) => S(`notes:${Xe(ee)}`)), d), se = Fe(O.midi, s.flats, k);
    return {
      ...j,
      position: O,
      midi: O.midi,
      name: se,
      item: `notes:${Xe(O)}`,
      prompt: `Etsi ${se} ${nu[O.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const $ = (Ee) => `ear-note:${Qe(Ee.midi)}${s.reference ? ":ref" : ""}`, O = Mi(y, (Ee) => !!u && Qe(Ee.midi) === Qe(u.midi)), se = is(O, O.map((Ee) => S($(Ee))), d), ee = s.reference ? 57 + 12 * Math.round((se.midi - 57) / 12) : void 0;
    return {
      ...j,
      position: se,
      midi: se.midi,
      name: Fe(se.midi, s.flats),
      item: $(se),
      choices: "note",
      reference: ee,
      sound: ee === void 0 ? [se.midi] : [ee, se.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const $ = Mi(y, (se) => !!u && se.midi === u.midi), O = is($, $.map((se) => S(`repeat:${se.midi}`)), d);
    return {
      ...j,
      position: O,
      midi: O.midi,
      name: Fe(O.midi, s.flats, !0),
      item: `repeat:${O.midi}`,
      sound: [O.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const $ = Mi(Qh(s, y), (ee) => u?.interval === ee.iv && u?.direction === ee.direction), O = is($, $.map((ee) => S(`interval:${ee.iv}:${ee.direction}`)), d), se = v(Mi(O.pairs, (ee) => u?.reference === ee.reference.midi));
    return {
      ...j,
      position: se.target,
      midi: se.target.midi,
      name: Fe(se.target.midi, s.flats, !0),
      item: `interval:${O.iv}:${O.direction}`,
      interval: O.iv,
      direction: O.direction,
      reference: se.reference.midi,
      sound: [se.reference.midi, se.target.midi],
      prompt: `Kuulet ${O.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Fe(se.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const T = Ia(s);
  let b, w = 0;
  if (zn(s)) {
    const $ = Yp(s, y);
    w = $.length, b = $[i % $.length];
  } else {
    const $ = T.filter(([ee]) => y.some((Ee) => Qe(Ee.midi - s.root) === ee)), O = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [T[i % T.length]] : T.filter(([, ee]) => ee.endsWith(s.chordTone)) : Mi($, ([ee]) => u?.interval === ee), [se] = is(O, O.map(([ee]) => S(Qd(s, ee))), d);
    b = v(Mi(y.filter((ee) => Qe(ee.midi - s.root) === se), (ee) => !!u && Xe(ee) === Xe(u.position)));
  }
  const N = Qe(b.midi - s.root), F = T.find(([$]) => $ === N)[1], _ = sr(s.root, N, F), K = k ? _ + _p(b.midi, _) : _, B = s.mode === "scale" ? `${di(s.root)}-${Ke.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${di(s.root)}-duurisointu, ${s.shape}-muoto` : Ih(s.root, s.chord), V = s.mode !== "caged" && s.activity === "degree", D = V ? `${B}: mikä aste on ${_}?` : w ? `${B} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${i % w + 1}/${w}: ${F}. aste (${K}).` : `${B}: etsi ${F}. aste${k ? ` (${K})` : ""}.`;
  return {
    ...j,
    position: b,
    midi: b.midi,
    name: K,
    item: Qd(s, N),
    prompt: D,
    degree: F,
    interval: N,
    choices: V ? "degree" : "position"
  };
}
function Bl(s, i, o) {
  return Number.isInteger(i) && (o === "class" ? Qe(s) === Qe(i) : s === i);
}
function Jh(s, i, o) {
  return Bl(i.midi, o.midi, i.check) ? s.mode === "notes" ? o.string === i.position.string : Gp(s) ? cr(s).some((u) => Xe(u) === Xe(o)) : !0 : !1;
}
function Zp(s, i) {
  const o = Pi(s);
  return hs(o.strings, o.min, o.max).filter((u) => Jh(s, i, u));
}
const _t = (s, i, o) => ({ ...s, label: i, kind: o }), qp = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function ev(s, i, o) {
  if (o <= 0) return { marks: [], text: "" };
  const u = o >= 2, d = Pi(s), h = hs(d.strings, d.min, d.max), p = Zp(s, i);
  if (s.mode === "notes") {
    if (u) return { marks: p.map((F) => _t(F, i.name, "answer")), text: `${i.name} on ${Fh[i.position.string]}: ${_i(i.position.fret)}.` };
    const w = h.find((F) => F.string === i.position.string), N = Fe(w.midi, s.flats);
    return {
      marks: [_t(w, N, "anchor")],
      text: `Apupiste: ${Ap[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${N}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return u ? { marks: [_t(i.position, i.name, "answer")], text: `Sävel on ${i.name}.` } : { marks: [_t(i.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${en[i.position.string]}-kieli, ${_i(i.position.fret)}.` };
  if (s.mode === "repeat")
    return u ? { marks: p.map((w) => _t(w, Fe(w.midi, s.flats, i.check === "pitch"), "answer")), text: `Sävel on ${i.name}.` } : { marks: [], text: `Sävel löytyy ${nu[i.position.string]}.` };
  if (s.mode === "interval") {
    const w = Fe(i.reference, s.flats, !0), N = h.filter((F) => F.midi === i.reference).map((F) => _t(F, w, "anchor"));
    return u ? {
      marks: [...N, ...p.map((F) => _t(F, Fe(F.midi, s.flats, !0), "answer"))],
      text: `${qp(rr[i.interval])} ${i.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${i.name}.`
    } : { marks: N, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${i.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const f = cr(s), k = Ia(s), S = (w) => k.find(([N]) => N === Qe(w.midi - s.root))?.[1] ?? "", v = sr(s.root, i.interval, i.degree), y = f.filter((w) => Qe(w.midi - s.root) === 0), j = (w) => p.some((N) => Xe(N) === Xe(w)), T = `${i.degree}. aste on ${v}.`;
  if (s.mode === "caged")
    return u ? { marks: f.map((w) => _t(w, S(w), j(w) ? "answer" : "shape")), text: T } : { marks: f.map((w) => _t(w, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${i.degree}. aste?` };
  const b = s.mode === "scale" ? "asteikon" : "soinnun";
  if (i.choices === "degree") {
    const w = f.filter((N) => Qe(N.midi) === Qe(i.midi));
    return u ? { marks: [...(i.interval === 0 ? [] : y).map((N) => _t(N, "1", "anchor")), ...w.map((N) => _t(N, i.degree, "answer"))], text: `${v} on ${i.degree}. aste.` } : i.interval === 0 ? { marks: w.map((N) => _t(N, v, "shape")), text: `Katso ${b} nimeä: mikä on sen perussävel?` } : {
      marks: [...y.map((N) => _t(N, "1", "anchor")), ...w.map((N) => _t(N, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return u ? { marks: [...y.filter((w) => !j(w)).map((w) => _t(w, "1", "anchor")), ...p.map((w) => _t(w, i.degree, "answer"))], text: T } : i.interval === 0 ? { marks: [], text: `1. aste on ${b} perussävel ${di(s.root)}.` } : { marks: y.map((w) => _t(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${i.degree}. aste on ${i.interval} puoliaskelta perussävelen yläpuolella.` };
}
class tv {
  constructor(i, o, u, d = () => performance.now(), h = Math.random) {
    this.settings = i, this.stats = o, this.record = u, this.now = d, this.random = h, this.total = Yh(i);
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
  answer(i, o, u, d = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const h = this.question;
    if (!(o === "degree" ? i === h.interval : o === "note" ? Bl(h.midi, i, "class") : o === "board" ? !!u && Jh(this.settings, h, u) : Bl(h.midi, i, h.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const f = o === "board" ? u : void 0, k = {
      id: `${this.id}:${this.index}`,
      item: f && this.settings.mode === "notes" ? `notes:${Xe(f)}` : h.item,
      mode: this.settings.mode,
      input: o,
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
    return f ? k.position = Xe(f) : this.settings.mode === "notes" && (k.position = Xe(h.position)), this.results.push(k), this.record(k), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Vl(s) {
  const i = s.filter((o) => !o.hint);
  return {
    count: s.length,
    first: s.filter((o) => o.first).length,
    solo: i.length,
    soloFirst: i.filter((o) => o.first).length,
    guided: s.length - i.length,
    ms: s.reduce((o, u) => o + u.ms, 0)
  };
}
const Kl = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], as = (s) => Kl.find(([i]) => i === s)?.[1] ?? s;
function zt({ label: s, children: i }) {
  const o = A.useId();
  return /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ a.jsx("label", { htmlFor: o, children: s }),
    A.cloneElement(i, { id: o })
  ] });
}
function Yd({ legend: s, name: i, value: o, options: u, onChange: d, disabled: h }) {
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ a.jsx("legend", { children: s }),
    /* @__PURE__ */ a.jsx("div", { className: "choice-row", children: u.map((p) => /* @__PURE__ */ a.jsxs("label", { className: p.value === o ? "selected" : "", children: [
      /* @__PURE__ */ a.jsx("input", { type: "radio", name: i, value: p.value, checked: p.value === o, onChange: () => d(p.value) }),
      /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("strong", { children: p.title }),
        /* @__PURE__ */ a.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Jd(s) {
  const i = Pi(s), o = Yh(s), u = Ai(s), d = u === "mic" ? "soita kitaralla" : u === "board" ? "vastaa otelaudalta" : u === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = i.fixed === "shape" ? `${s.shape}-muoto, nauhat ${i.min}–${i.max}` : i.fixed === "box" ? `boksi ${s.box}, nauhat ${i.min}–${i.max}` : `nauhat ${i.min}–${i.max}`, p = i.strings.length === 6 ? "" : ` · kielet ${i.strings.map((f) => f + 1).join(", ")}`;
  return `${Fa[s.hints].title} · ${d} · ${zn(s) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function Xd({ s, change: i, locked: o, problem: u }) {
  const d = A.useId(), h = (v, y) => i({ ...s, [v]: y }), p = Pi(s), f = Ai(s) === "note" || Ai(s) === "degree", k = ["scale", "chord", "caged"].includes(s.mode), S = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ a.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(zt, { label: "Harjoitus", children: /* @__PURE__ */ a.jsx("select", { value: s.mode, onChange: (v) => h("mode", v.target.value), children: Kl.map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y }, v)) }) }),
      /* @__PURE__ */ a.jsx("p", { className: "mode-note", children: Kl.find(([v]) => v === s.mode)[2] })
    ] }),
    k && /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(zt, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ a.jsx("select", { value: s.root, onChange: (v) => h("root", Number(v.target.value)), children: Ke.CHROM.map((v, y) => /* @__PURE__ */ a.jsx("option", { value: y, children: v }, v)) }) }),
      s.mode === "scale" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(zt, { label: "Asteikko", children: /* @__PURE__ */ a.jsx("select", { value: s.scale, onChange: (v) => h("scale", v.target.value), children: Object.entries(Ke.SCALES).map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(zt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ a.jsxs("select", { value: s.box, onChange: (v) => h("box", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ a.jsx(zt, { label: "Sävelten järjestys", children: /* @__PURE__ */ a.jsxs("select", { value: s.order, onChange: (v) => h("order", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ a.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ a.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      s.mode === "chord" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(zt, { label: "Sointutyyppi", children: /* @__PURE__ */ a.jsx("select", { value: s.chord, onChange: (v) => h("chord", v.target.value), children: Object.entries(bi).map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(zt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ a.jsxs("select", { value: s.chordTone, onChange: (v) => h("chordTone", v.target.value), children: [
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
      s.mode === "caged" ? /* @__PURE__ */ a.jsx(zt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ a.jsx("select", { value: s.shape, onChange: (v) => h("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ a.jsx(zt, { label: "Tehtävä", children: /* @__PURE__ */ a.jsxs("select", { value: s.activity, onChange: (v) => h("activity", v.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ a.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    s.mode === "interval" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ a.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.intervals.includes(v), onChange: (y) => h("intervals", y.target.checked ? [...s.intervals, v] : s.intervals.filter((j) => j !== v)) }),
        rr[v]
      ] }, v)) }),
      /* @__PURE__ */ a.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ a.jsx(zt, { label: "Intervallin suunta", children: /* @__PURE__ */ a.jsxs("select", { value: s.direction, onChange: (v) => h("direction", v.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ a.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ a.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ a.jsx(
      Yd,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: s.hints,
        onChange: (v) => h("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Fa[v] }))
      }
    ),
    f ? /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ a.jsx(Yd, { legend: "Vastaustapa", name: `${d}-input`, value: s.input, onChange: (v) => h("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ a.jsx(zt, { label: "Kierroksen pituus", children: /* @__PURE__ */ a.jsxs("select", { value: s.rounds, disabled: zn(s), onChange: (v) => h("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !f && /* @__PURE__ */ a.jsx(zt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ a.jsxs("select", { value: zn(s) ? "pitch" : s.check, disabled: zn(s), onChange: (v) => h("check", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ a.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ a.jsx(zt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ a.jsxs("select", { value: String(s.flats), onChange: (v) => h("flats", v.target.value === "true"), children: [
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
          /* @__PURE__ */ a.jsx(zt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: "0", max: "24", value: s.min, onChange: (v) => h("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ a.jsx(zt, { label: "Viimeinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: s.min, max: "24", value: s.max, onChange: (v) => h("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ a.jsx("div", { className: "check-row", children: en.map((v, y) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.strings.includes(y), onChange: (j) => h("strings", j.target.checked ? [...s.strings, y] : s.strings.filter((T) => T !== y)) }),
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
const Zd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function nv(s) {
  return s && Object.hasOwn(Zd, s) ? Zd[s] : null;
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
const av = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Ul = 100, Xh = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function su(s) {
  if (s === null || s.trim() === "") return Ul;
  const i = Number(s);
  return Number.isFinite(i) ? Math.round(Math.min(100, Math.max(0, i))) : Ul;
}
function ov() {
  try {
    return su(localStorage.getItem(Xh));
  } catch {
    return Ul;
  }
}
function lv(s) {
  try {
    localStorage.setItem(Xh, String(su(String(s))));
  } catch {
  }
}
function Tl(s, i, o = !0) {
  return o ? av[s] * su(String(i)) / 100 : 0;
}
function Zh(s = () => new Audio()) {
  try {
    const i = s();
    return i.volume = 0.5, Math.abs(i.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const qh = 0.12, uv = 2e3, ef = 3, qd = 1e-3, cv = qh, eh = 1500, dv = 4e3;
function tf(s) {
  return s.readyState >= ef && !s.seeking;
}
function nf(s) {
  return s.every(tf);
}
function hv(s) {
  let i = 0;
  for (const o of s)
    if (!tf(o))
      try {
        const u = o.play();
        o.pause(), u && typeof u.catch == "function" && u.catch(() => {
        }), i++;
      } catch {
      }
  return i;
}
function fv(s, i, o, u = {
  set: (d, h) => setTimeout(d, h),
  clear: (d) => clearTimeout(d)
}) {
  return new Promise((d) => {
    const h = ["loadeddata", "canplay", "canplaythrough", "seeked", "error"];
    let p = !1, f = null;
    const k = u.set(() => S("aikakatkaisu"), i);
    function S(j) {
      if (!p) {
        p = !0, u.clear(k), f !== null && u.clear(f);
        for (const T of s) for (const b of h) T.removeEventListener(b, v);
        d(j);
      }
    }
    function v() {
      o() ? S("ohitettu") : s.some((j) => j.error) ? S("virhe") : nf(s) && S("valmis");
    }
    const y = () => {
      v(), p || (f = u.set(y, 50));
    };
    for (const j of s) for (const T of h) j.addEventListener(T, v);
    v(), p || (f = u.set(y, 50));
  });
}
function mv(s, i = !1) {
  return i ? !0 : s.atLoopBoundary || s.drift <= qh || s.seeking || s.readyState < ef ? !1 : s.msSinceLastFix >= uv;
}
const pv = 1.5, vv = 0.4, kv = 0.5;
let Hl = null, yv = null;
function gv(s) {
  return Hl !== null ? Hl : (yv ??= Zh()) ? 0 : vv;
}
class sf {
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
  align(i, o, u = !1, d = performance.now(), h = qd) {
    if (o.readyState < 1 || i.readyState < 1 || !u && (o.paused || i.paused) || !u && d < this.holdUntil) return !1;
    const p = o.currentTime - i.currentTime, f = Math.abs(p), k = i.loop && Number.isFinite(i.duration) && Math.abs(f - i.duration) < 0.35, S = this.lastFix.get(o);
    if (!mv({
      drift: f,
      atLoopBoundary: k,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: S === void 0 ? 1 / 0 : d - S
    }, u)) return !1;
    const v = !i.paused;
    !u && v && S !== void 0 && (this.latency = Math.min(pv, Math.max(0, this.latency - kv * p)), Hl = this.latency);
    let y = i.currentTime + (v ? this.latency : 0);
    if (Number.isFinite(o.duration) && (y = Math.min(y, Math.max(0, o.duration - 0.05))), Math.abs(o.currentTime - y) < Math.max(h, qd)) return !1;
    try {
      o.currentTime = y;
    } catch {
      return !1;
    }
    return v ? this.lastFix.set(o, d) : this.lastFix.delete(o), !0;
  }
}
function xv(s = globalThis.navigator) {
  return s ? /iPhone|iPad|iPod/.test(s.userAgent) || s.platform === "MacIntel" && s.maxTouchPoints > 1 : !1;
}
function jv(s = xv(), i = () => Zh()) {
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
  constructor(i = wv, o = globalThis.navigator) {
    this.create = i, this.nav = o;
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
      const o = this.context.createMediaElementSource(i), u = this.context.createGain();
      return o.connect(u), u.connect(this.context.destination), this.gains.set(i, u), !0;
    } catch (o) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(o), !1;
    }
  }
  routed(i) {
    return !!i && this.gains.has(i);
  }
  setLevel(i, o) {
    const u = this.gains.get(i);
    u && (u.gain.value = o);
  }
  /** Raidan nykyinen GainNode-taso tai null, jos raitaa ei ole kytketty. */
  level(i) {
    const o = i ? this.gains.get(i) : void 0;
    return o ? o.gain.value : null;
  }
  close() {
    const i = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), i?.close().catch(() => {
    });
  }
}
const Nv = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Cv = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function th(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const i = Math.floor(s);
  return String(Math.floor(i / 60)) + ":" + String(i % 60).padStart(2, "0");
}
function rf() {
  const s = A.useRef(null), i = A.useRef(null), [o, u] = A.useState(!1), [d, h] = A.useState(!1), [p, f] = A.useState(!1), [k, S] = A.useState(0), [v, y] = A.useState(0), [j, T] = A.useState(""), b = A.useRef(new sf());
  function w(B = !1) {
    const V = s.current, D = i.current;
    !V || !D || !Number.isFinite(V.currentTime) || b.current.align(V, D, B);
  }
  function N() {
    s.current?.pause(), i.current?.pause(), u(!1);
  }
  async function F() {
    const B = s.current, V = i.current;
    if (!(!B || !V)) {
      if (o) {
        N();
        return;
      }
      T(""), V.muted = !d, V.volume = 0.55, B.volume = 0.75, w(!0);
      try {
        await Promise.all(d ? [B.play(), V.play()] : [B.play()]), w(), u(!0);
      } catch {
        N(), T("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function _(B) {
    const V = s.current, D = i.current;
    if (!(!V || !D || !Number.isFinite(B))) {
      V.currentTime = B;
      try {
        D.currentTime = B;
      } catch {
      }
      S(B);
    }
  }
  function K(B) {
    const V = s.current, D = i.current;
    if (h(B), !!D) {
      if (D.muted = !B, !B) {
        D.pause();
        return;
      }
      !V || !o || (w(!0), D.play().catch(() => T("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return A.useEffect(() => {
    const B = () => {
      document.hidden && (s.current?.pause(), i.current?.pause(), u(!1));
    };
    return document.addEventListener("visibilitychange", B), () => {
      document.removeEventListener("visibilitychange", B), s.current?.pause(), i.current?.pause();
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
              onChange: (B) => K(B.target.checked)
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
              onChange: (B) => f(B.target.checked)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ a.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        F();
      }, children: o ? "■ Tauko" : "▶ Soita" }),
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
          onChange: (B) => _(Number(B.target.value))
        }
      ),
      /* @__PURE__ */ a.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        th(k),
        " / ",
        th(v)
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: Nv,
        loop: p,
        onLoadedMetadata: (B) => y(B.currentTarget.duration),
        onTimeUpdate: (B) => {
          S(B.currentTarget.currentTime), B.currentTarget.paused || w();
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
          const B = s.current, V = i.current;
          B?.duration && V?.duration && Math.abs(B.duration - V.duration) > 0.15 && T("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => T("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    j && /* @__PURE__ */ a.jsx("p", { className: "backing-error", role: "alert", children: j }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Tv = 4e3;
class nh extends Error {
  name = "MicSetupError";
}
async function Mv(s, i) {
  if (!navigator.mediaDevices?.getUserMedia) throw new nh("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const o = {
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
  }, u = await navigator.mediaDevices.getUserMedia(o);
  let d;
  try {
    if (d = i ? i() : new AudioContext(), d.state !== "running") {
      let S;
      await Promise.race([
        d.resume(),
        new Promise((v, y) => {
          S = setTimeout(() => y(new nh("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Tv);
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
async function bv() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((i) => i.kind === "audioinput" && i.deviceId) : [];
}
var Ml, ih;
function _v() {
  if (ih) return Ml;
  ih = 1;
  function s(i) {
    if (this.size = i | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = i << 1;
    for (var o = new Array(this.size * 2), u = 0; u < o.length; u += 2) {
      const S = Math.PI * u / this.size;
      o[u] = Math.cos(S), o[u + 1] = -Math.sin(S);
    }
    this.table = o;
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
  return Ml = s, s.prototype.fromComplexArray = function(o, u) {
    for (var d = u || new Array(o.length >>> 1), h = 0; h < o.length; h += 2)
      d[h >>> 1] = o[h];
    return d;
  }, s.prototype.createComplexArray = function() {
    const o = new Array(this._csize);
    for (var u = 0; u < o.length; u++)
      o[u] = 0;
    return o;
  }, s.prototype.toComplexArray = function(o, u) {
    for (var d = u || this.createComplexArray(), h = 0; h < d.length; h += 2)
      d[h] = o[h >>> 1], d[h + 1] = 0;
    return d;
  }, s.prototype.completeSpectrum = function(o) {
    for (var u = this._csize, d = u >>> 1, h = 2; h < d; h += 2)
      o[u - h] = o[h], o[u - h + 1] = -o[h + 1];
  }, s.prototype.transform = function(o, u) {
    if (o === u)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = u, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, s.prototype.realTransform = function(o, u) {
    if (o === u)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = u, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, s.prototype.inverseTransform = function(o, u) {
    if (o === u)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = u, this._inv = 1, this._transform4();
    for (var d = 0; d < o.length; d++)
      o[d] /= this.size;
    this._out = null, this._data = null;
  }, s.prototype._transform4 = function() {
    var o = this._out, u = this._csize, d = this._width, h = 1 << d, p = u / h << 1, f, k, S = this._bitrev;
    if (p === 4)
      for (f = 0, k = 0; f < u; f += p, k++) {
        const N = S[k];
        this._singleTransform2(f, N, h);
      }
    else
      for (f = 0, k = 0; f < u; f += p, k++) {
        const N = S[k];
        this._singleTransform4(f, N, h);
      }
    var v = this._inv ? -1 : 1, y = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = u / h << 1;
      var j = p >>> 2;
      for (f = 0; f < u; f += p)
        for (var T = f + j, b = f, w = 0; b < T; b += 2, w += h) {
          const N = b, F = N + j, _ = F + j, K = _ + j, B = o[N], V = o[N + 1], D = o[F], $ = o[F + 1], O = o[_], se = o[_ + 1], ee = o[K], Ee = o[K + 1], Te = B, Z = V, ce = y[w], G = v * y[w + 1], oe = D * ce - $ * G, re = D * G + $ * ce, Y = y[2 * w], ae = v * y[2 * w + 1], te = O * Y - se * ae, E = O * ae + se * Y, x = y[3 * w], ne = v * y[3 * w + 1], fe = ee * x - Ee * ne, de = ee * ne + Ee * x, H = Te + te, U = Z + E, J = Te - te, X = Z - E, me = oe + fe, Me = re + de, ye = v * (oe - fe), ge = v * (re - de), Ne = H + me, $e = U + Me, be = H - me, Ve = U - Me, et = J + ge, Je = X - ye, tt = J - ge, z = X + ye;
          o[N] = Ne, o[N + 1] = $e, o[F] = et, o[F + 1] = Je, o[_] = be, o[_ + 1] = Ve, o[K] = tt, o[K + 1] = z;
        }
    }
  }, s.prototype._singleTransform2 = function(o, u, d) {
    const h = this._out, p = this._data, f = p[u], k = p[u + 1], S = p[u + d], v = p[u + d + 1], y = f + S, j = k + v, T = f - S, b = k - v;
    h[o] = y, h[o + 1] = j, h[o + 2] = T, h[o + 3] = b;
  }, s.prototype._singleTransform4 = function(o, u, d) {
    const h = this._out, p = this._data, f = this._inv ? -1 : 1, k = d * 2, S = d * 3, v = p[u], y = p[u + 1], j = p[u + d], T = p[u + d + 1], b = p[u + k], w = p[u + k + 1], N = p[u + S], F = p[u + S + 1], _ = v + b, K = y + w, B = v - b, V = y - w, D = j + N, $ = T + F, O = f * (j - N), se = f * (T - F), ee = _ + D, Ee = K + $, Te = B + se, Z = V - O, ce = _ - D, G = K - $, oe = B - se, re = V + O;
    h[o] = ee, h[o + 1] = Ee, h[o + 2] = Te, h[o + 3] = Z, h[o + 4] = ce, h[o + 5] = G, h[o + 6] = oe, h[o + 7] = re;
  }, s.prototype._realTransform4 = function() {
    var o = this._out, u = this._csize, d = this._width, h = 1 << d, p = u / h << 1, f, k, S = this._bitrev;
    if (p === 4)
      for (f = 0, k = 0; f < u; f += p, k++) {
        const Le = S[k];
        this._singleRealTransform2(f, Le >>> 1, h >>> 1);
      }
    else
      for (f = 0, k = 0; f < u; f += p, k++) {
        const Le = S[k];
        this._singleRealTransform4(f, Le >>> 1, h >>> 1);
      }
    var v = this._inv ? -1 : 1, y = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = u / h << 1;
      var j = p >>> 1, T = j >>> 1, b = T >>> 1;
      for (f = 0; f < u; f += p)
        for (var w = 0, N = 0; w <= b; w += 2, N += h) {
          var F = f + w, _ = F + T, K = _ + T, B = K + T, V = o[F], D = o[F + 1], $ = o[_], O = o[_ + 1], se = o[K], ee = o[K + 1], Ee = o[B], Te = o[B + 1], Z = V, ce = D, G = y[N], oe = v * y[N + 1], re = $ * G - O * oe, Y = $ * oe + O * G, ae = y[2 * N], te = v * y[2 * N + 1], E = se * ae - ee * te, x = se * te + ee * ae, ne = y[3 * N], fe = v * y[3 * N + 1], de = Ee * ne - Te * fe, H = Ee * fe + Te * ne, U = Z + E, J = ce + x, X = Z - E, me = ce - x, Me = re + de, ye = Y + H, ge = v * (re - de), Ne = v * (Y - H), $e = U + Me, be = J + ye, Ve = X + Ne, et = me - ge;
          if (o[F] = $e, o[F + 1] = be, o[_] = Ve, o[_ + 1] = et, w === 0) {
            var Je = U - Me, tt = J - ye;
            o[K] = Je, o[K + 1] = tt;
            continue;
          }
          if (w !== b) {
            var z = X, le = -me, ue = U, je = -J, Ce = -v * Ne, Ue = -v * ge, He = -v * ye, mt = -v * Me, Et = z + Ce, Qt = le + Ue, Ot = ue + mt, gn = je - He, _e = f + T - w, ln = f + j - w;
            o[_e] = Et, o[_e + 1] = Qt, o[ln] = Ot, o[ln + 1] = gn;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(o, u, d) {
    const h = this._out, p = this._data, f = p[u], k = p[u + d], S = f + k, v = f - k;
    h[o] = S, h[o + 1] = 0, h[o + 2] = v, h[o + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(o, u, d) {
    const h = this._out, p = this._data, f = this._inv ? -1 : 1, k = d * 2, S = d * 3, v = p[u], y = p[u + d], j = p[u + k], T = p[u + S], b = v + j, w = v - j, N = y + T, F = f * (y - T), _ = b + N, K = w, B = -F, V = b - N, D = w, $ = F;
    h[o] = _, h[o + 1] = 0, h[o + 2] = K, h[o + 3] = B, h[o + 4] = V, h[o + 5] = 0, h[o + 6] = D, h[o + 7] = $;
  }, Ml;
}
var Av = _v();
const Pv = /* @__PURE__ */ pp(Av);
class er {
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
    return new er(
      i,
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
  static forFloat64Array(i) {
    return new er(
      i,
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
  static forNumberArray(i) {
    return new er(i, (o) => Array(o));
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
  constructor(i, o) {
    if (i < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = i, this._fft = new Pv(Ov(2 * i)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(i, o = this._bufferSupplier(i.length)) {
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
      o[d] = this._inverseBuffer[2 * d];
    return o;
  }
}
function Lv(s) {
  const i = [];
  let o = !1, u = -1 / 0, d = -1;
  for (let h = 1; h < s.length - 1; h++)
    s[h - 1] <= 0 && s[h] > 0 ? (o = !0, d = h, u = s[h]) : s[h - 1] > 0 && s[h] <= 0 ? (o = !1, d !== -1 && i.push(d)) : o && s[h] > u && (u = s[h], d = h);
  return i;
}
function Rv(s, i) {
  const [o, u, d] = [s - 1, s, s + 1], [h, p, f] = [i[o], i[u], i[d]], k = h / 2 - p + f / 2, S = -(h / 2) * (u + d) + p * (o + d) - f / 2 * (o + u), v = h * u * d / 2 - p * o * d + f * o * u / 2, y = -S / (2 * k), j = k * y * y + S * y + v;
  return [y, j];
}
class tr {
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
    return new tr(i, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(i) {
    return new tr(i, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(i) {
    return new tr(i, (o) => Array(o));
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
  constructor(i, o) {
    this._autocorrelator = new er(i, o), this._nsdfBuffer = o(i);
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
  findPitch(i, o) {
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
    return [o / p, Math.min(f, 1)];
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
    let o = 0;
    for (let u = 0; u < i.length; u++)
      o += i[u] ** 2;
    return Math.sqrt(o / i.length) < this._minVolumeAbsolute;
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
    let o = 2 * this._nsdfBuffer[0], u;
    for (u = 0; u < this._nsdfBuffer.length && o > 0; u++)
      this._nsdfBuffer[u] = 2 * this._nsdfBuffer[u] / o, o -= i[u] ** 2 + i[i.length - u - 1] ** 2;
    for (; u < this._nsdfBuffer.length; u++)
      this._nsdfBuffer[u] = 0;
  }
}
function Ov(s) {
  return s--, s |= s >> 1, s |= s >> 2, s |= s >> 4, s |= s >> 8, s |= s >> 16, s++, s;
}
function $v(s) {
  const i = s * 0.17;
  let o = 2048;
  for (; o < i && o < 32768; ) o *= 2;
  return o;
}
const Fv = 0.05, Iv = 1.5;
class Dv {
  constructor(i, o = {}) {
    this.mic = i, this.opts = o;
    const u = i.context, d = $v(u.sampleRate), h = Math.max(1, Math.min(2, i.channelCount ?? 1));
    h > 1 && typeof u.createChannelSplitter == "function" && (this.splitter = u.createChannelSplitter(h), i.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const f = u.createAnalyser();
      f.fftSize = d, f.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(f, p) : i.source.connect(f), this.analysers.push(f), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(u.sampleRate * Fv))), this.detector = tr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
      minClarity: o = 0.9,
      minRms: u = 0.01,
      stabilityMs: d = 240,
      centsTolerance: h = 35,
      minFreq: p = 70,
      maxFreq: f = 1450,
      onFrame: k,
      onStableNote: S
    } = this.opts, v = this.analysers.map(($, O) => ($.getFloatTimeDomainData(this.buffers[O]), sh(this.buffers[O], this.buffers[O].length - this.shortLength))), y = v.indexOf(Math.max(...v));
    y !== this.channel && v[y] > (v[this.channel] ?? 0) * Iv && (this.channel = y);
    const j = this.buffers[this.channel], T = v[this.channel], b = Vv(j, j.length - this.shortLength), w = { rms: T, peak: b, channel: this.channel, levels: v }, N = T < u, F = this.onset.feed(T, i, u);
    if (N && sh(j, 0) < u) {
      this.gate.feed(null, i, d, !0, !1), k?.({ ...w, status: "silent" });
      return;
    }
    const [_, K] = this.detector.findPitch(j, this.mic.context.sampleRate);
    if (!isFinite(_) || K < o) {
      this.gate.feed(null, i, d, N, F), k?.({ ...w, status: N ? "silent" : "unclear", clarity: isFinite(K) ? K : 0 });
      return;
    }
    if (_ < p || _ > f) {
      this.gate.feed(null, i, d, N, F), k?.({ ...w, status: "out-of-range", frequency: _, clarity: K });
      return;
    }
    const { midi: B, cents: V } = Tp(_);
    if (Math.abs(V) > h) {
      this.gate.feed(null, i, d, N, F), k?.({ ...w, status: "off-pitch", frequency: _, clarity: K, midi: B, cents: V });
      return;
    }
    k?.({ ...w, status: "pitch", frequency: _, clarity: K, midi: B, cents: V });
    const D = this.gate.feed(B, i, d, N, F);
    D !== null && S?.({ midi: B, frequency: _, cents: V, clarity: K, timestamp: i, heldMs: D.heldMs });
  }
}
class zv {
  constructor(i = 120, o = 80) {
    this.releaseMs = i, this.gapMs = o;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(i, o, u, d, h) {
    if (d ? (this.quietSince ??= o, o - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), i === null)
      return this.current && o - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== i) && (this.current = { midi: i, since: o, seen: o }), this.current.seen = o;
    const p = o - this.current.since;
    return p < u ? null : (this.armed = !1, this.current = null, { midi: i, heldMs: p });
  }
}
class Bv {
  constructor(i = 2, o = 300, u = 150) {
    this.ratio = i, this.windowMs = o, this.refractoryMs = u;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(i, o, u) {
    if (o - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: o, rms: i }], !1;
    for (; this.history.length && o - this.history[0].time > this.windowMs; ) this.history.shift();
    const d = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : i;
    return this.history.push({ time: o, rms: i }), i < u * 1.5 || i < d * this.ratio ? !1 : (this.lastOnset = o, this.history = [{ time: o, rms: i }], !0);
  }
}
function sh(s, i = 0) {
  const o = Math.max(0, i);
  let u = 0;
  for (let d = o; d < s.length; d++) u += s[d] * s[d];
  return Math.sqrt(u / Math.max(1, s.length - o));
}
function Vv(s, i = 0) {
  let o = 0;
  for (let u = Math.max(0, i); u < s.length; u++) {
    const d = Math.abs(s[u]);
    d > o && (o = d);
  }
  return o;
}
const ds = (s) => s > 0 ? Math.max(-90, 20 * Math.log10(s)) : -90;
let ss;
function af() {
  return (!ss || ss.state === "closed") && (ss = new AudioContext()), ss;
}
function Kv() {
  const s = ss;
  ss = void 0, s?.close().catch(() => {
  });
}
const of = (s) => s instanceof Error ? s.name : "";
function Uv(s) {
  const i = of(s);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(i) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : i === "NotFoundError" || i === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : i === "NotReadableError" || i === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : i === "MicSetupError" ? s.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Hv {
  constructor(i = (o) => Mv(o, af)) {
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
  async start(i, o, u) {
    this.stop();
    const d = this.generation;
    let h, p = !1;
    try {
      h = await this.opener(i || void 0);
    } catch (f) {
      if (!i || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(of(f))) throw f;
      h = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new Dv(h, { ...o });
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
function lf(s, i) {
  return s !== "on" ? s : !i || i.status === "silent" ? "silent" : i.status === "pitch" ? "pitch" : i.status === "off-pitch" ? "untuned" : "noise";
}
const rh = (s) => Math.max(0, Math.min(1, (ds(s) + 60) / 60));
function Gv(s) {
  const i = [...s].sort((u, d) => u - d), o = i[Math.min(i.length - 1, Math.floor(i.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, o * 3)), noise: o, loud: o > 0.04 };
}
async function bl(s) {
  const i = () => s.state === "running";
  if (i()) return;
  let o;
  try {
    await Promise.race([
      s.resume(),
      new Promise((u, d) => {
        o = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    o !== void 0 && clearTimeout(o);
  }
  if (!i()) throw new Error("reference-audio-not-running");
}
function Da(s) {
  const i = s instanceof Error ? s.message : "";
  return i === "reference-audio-resume-timeout" || i === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : s instanceof Error && s.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class dr {
  constructor(i = af) {
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
  async play(i, o) {
    this.stop();
    const u = this.token, d = this.provide();
    if (await bl(d), u !== this.token) return !1;
    const h = d.createGain();
    h.connect(d.destination), this.master = h;
    const p = Array.from({ length: 12 }, (S, v) => 1 / (v + 1) ** 1.3), f = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return i.forEach((S, v) => {
      const y = d.createOscillator(), j = d.createGain(), T = d.currentTime + 0.05 + v * 0.8;
      f ? y.setPeriodicWave(f) : y.type = "triangle", y.frequency.value = Cl(S), j.gain.setValueAtTime(0, T), j.gain.linearRampToValueAtTime(0.22, T + 0.012), j.gain.exponentialRampToValueAtTime(1e-3, T + 0.7), y.connect(j), j.connect(h), y.start(T), y.stop(T + 0.72), o && this.noteTimers.push(setTimeout(() => {
        u === this.token && o(v);
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
  async playTimed(i, o, u, d) {
    if (this.stop(), !i.length) return !1;
    const h = this.token, p = this.provide();
    if (await bl(p), h !== this.token) return !1;
    const f = 60 / Math.max(40, Math.min(140, o)), k = p.createGain();
    k.connect(p.destination), this.master = k;
    const S = Array.from({ length: 12 }, (b, w) => 1 / (w + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...S.map(() => 0)]),
      new Float32Array([0, ...S])
    ), y = p.currentTime + 0.05;
    let j = 0;
    return i.forEach((b, w) => {
      if (!Number.isFinite(b.beat) || b.beat < 0 || !Number.isFinite(b.duration) || b.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const N = y + b.beat * f, F = b.duration * f, _ = N + Math.max(0.08, F * 0.94), K = p.createOscillator(), B = p.createGain();
      v ? K.setPeriodicWave(v) : K.type = "triangle", K.frequency.value = Cl(b.midi), B.gain.setValueAtTime(0, N), B.gain.linearRampToValueAtTime(0.22, N + 0.012), B.gain.exponentialRampToValueAtTime(1e-3, _ - 0.01), K.connect(B), B.connect(k), K.start(N), K.stop(_), u && this.noteTimers.push(setTimeout(() => {
        h === this.token && u(w);
      }, 50 + b.beat * f * 1e3));
      const V = i[w + 1]?.beat ?? 1 / 0;
      d && V > b.beat + b.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && d();
      }, 50 + b.beat * f * 1e3 + F * 1e3)), j = Math.max(j, b.beat + b.duration);
    }), !await new Promise((b) => {
      this.settle = b, this.timer = setTimeout(() => b(!0), 50 + j * f * 1e3 + 150);
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
  async loop(i, o, u = 75) {
    if (this.stop(), !i.length) return !1;
    const d = this.token, h = this.provide();
    if (await bl(h), d !== this.token) return !1;
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const f = Array.from({ length: 12 }, (w, N) => 1 / (N + 1) ** 1.3), k = h.createPeriodicWave?.(new Float32Array([0, ...f.map(() => 0)]), new Float32Array([0, ...f]));
    let S = 60 / Math.max(40, Math.min(140, u));
    this.adjustLoopTempo = (w) => {
      d === this.token && Number.isFinite(w) && (S = 60 / Math.max(40, Math.min(140, w)));
    };
    const v = 1.6;
    let y = h.currentTime + 0.05, j = 0;
    const T = [], b = () => {
      if (d === this.token) {
        if (y < h.currentTime - 0.02) {
          const w = Math.ceil((h.currentTime - y) / S);
          y += w * S, j = (j + w) % i.length, T.length = 0;
        }
        for (; y < h.currentTime + v; ) {
          const w = i[j], N = j, F = y, _ = h.createOscillator(), K = h.createGain();
          k ? _.setPeriodicWave(k) : _.type = "triangle", _.frequency.value = Cl(w), K.gain.setValueAtTime(0, F), K.gain.linearRampToValueAtTime(0.22, F + 0.012), K.gain.exponentialRampToValueAtTime(1e-3, F + S * 0.975), _.connect(K), K.connect(p), _.start(F), _.stop(F + S * 0.985), T.push({ at: F, index: N }), y += S, j = (j + 1) % i.length;
        }
        for (; T.length && T[0].at <= h.currentTime + 0.01; ) {
          const w = T.shift();
          o?.(w.index);
        }
      }
    };
    return b(), this.loopTick = setInterval(b, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
function fi(s, i) {
  let o = 0;
  const u = i.map(([d, h, p]) => {
    const k = { position: d === null || h === null ? null : Be(d, h), beat: o, duration: p };
    return o += p, k;
  });
  return { label: s, events: u, beats: o };
}
function _l(s, ...i) {
  let o = 0;
  const u = i.flatMap((d) => {
    const h = d.events.map((p) => ({ ...p, beat: p.beat + o }));
    return o += d.beats, h;
  });
  return { label: s, events: u, beats: o };
}
const ah = fi("A · Melodian alku", [
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
]), lh = fi("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), uh = fi("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), Qv = fi("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), ch = fi("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), dh = fi("B · Palaa takaisin", [
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
    fragments: [ah, oh],
    whole: _l("Melodia · A + B + C", ah, oh, Wv),
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
    fragments: [lh, uh],
    whole: _l("Ukko Nooa · A + B", lh, uh),
    bonus: Qv,
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
    fragments: [ch, dh],
    whole: _l("Siirtymämelodia · A + B", ch, dh),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Jv(s) {
  return s.events.filter((i) => i.position !== null).map((i) => ({ midi: i.position.midi, beat: i.beat, duration: i.duration }));
}
const hh = ["e", "B", "G", "D", "A", "E"];
function ru({ pieceId: s, stage: i, onBeforePlay: o, stopHandleRef: u }) {
  const d = Yv[s], [h, p] = A.useState(i === "fingering" ? "a" : "whole"), [f, k] = A.useState(d.tempo), [S, v] = A.useState(!1), [y, j] = A.useState(!1), [T, b] = A.useState(i !== "memory"), [w, N] = A.useState(!1), [F, _] = A.useState(null), [K, B] = A.useState(""), V = A.useRef(new dr()), D = A.useRef(0);
  function $() {
    D.current++, V.current.stop(), N(!1), _(null);
  }
  A.useEffect(() => {
    u && (u.current = $);
    const x = () => {
      document.hidden && $();
    };
    return document.addEventListener("visibilitychange", x), () => {
      document.removeEventListener("visibilitychange", x), D.current++, V.current.stop(), u && (u.current = null);
    };
  }, [u]);
  const O = i === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], se = O.find((x) => x.id === h) ?? O[0], ee = se.clip, Ee = Jv(ee), Te = F === null ? null : Ee[F]?.beat ?? null, Z = Te === null ? null : ee.events.find((x) => x.beat === Te)?.position ?? null, ce = A.useRef(null);
  Kh(ce, ".melody-playing", w && Te !== null ? String(Te) : "", { enabled: S && y, playback: w });
  const G = ee.beats / 4, oe = [...new Map(ee.events.filter((x) => x.position).map((x) => [Xe(x.position), x.position])).values()], re = oe.map((x) => x.fret), Y = oe.filter((x) => T || Z?.string === x.string && Z.fret === x.fret).map((x) => ({
    ...x,
    label: Fe(x.midi),
    kind: Z?.string === x.string && Z.fret === x.fret ? "playing" : Qe(x.midi) === d.tonic ? "answer" : "shape"
  })), ae = {
    strings: [...new Set(oe.map((x) => x.string))],
    min: Math.min(...re),
    max: Math.max(...re),
    fixed: "box"
  };
  async function te() {
    if (w) {
      $();
      return;
    }
    o?.();
    const x = ++D.current;
    V.current.stop(), N(!0), _(null), B("");
    try {
      await V.current.playTimed(Ee, f, (ne) => {
        x === D.current && _(ne);
      }, () => {
        x === D.current && _(null);
      });
    } catch (ne) {
      x === D.current && B(Da(ne));
    } finally {
      x === D.current && (N(!1), _(null));
    }
  }
  function E(x) {
    $(), B(""), p(x);
  }
  return /* @__PURE__ */ a.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ a.jsxs("details", { onToggle: (x) => {
    const ne = x.currentTarget.open;
    v(ne), ne || $();
  }, children: [
    /* @__PURE__ */ a.jsx("summary", { children: i === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    S && /* @__PURE__ */ a.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: i === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ a.jsx("h4", { children: d.title }),
      /* @__PURE__ */ a.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        G.toString().replace(".", ","),
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
      i !== "memory" && /* @__PURE__ */ a.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: O.map((x) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": se.id === x.id,
          onClick: () => E(x.id),
          children: x.name
        },
        x.id
      )) }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": w, onClick: () => {
          te();
        }, children: w ? "■ Pysäytä melodia" : i === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ a.jsx("select", { value: f, onChange: (x) => {
            $(), k(Number(x.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((x, ne) => x - ne).filter((x, ne, fe) => fe.indexOf(x) === ne).map((x) => /* @__PURE__ */ a.jsxs("option", { value: x, children: [
            x,
            " BPM"
          ] }, x)) })
        ] }),
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": y, onClick: () => j((x) => !x), children: y ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      K && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: K }),
      /* @__PURE__ */ a.jsx("p", { className: "melody-now", "aria-live": "polite", children: w && F !== null ? `Nyt soi ${Fe(Ee[F].midi)} · ${hh[Z.string]}-kieli, ${Z.fret}. nauha` : w ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ a.jsx(hi, { area: ae, marks: Y, disabled: !0, follow: "playing", playback: w, caption: `${d.title}, ${se.name}` }),
        /* @__PURE__ */ a.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T,
              onClick: () => b((x) => !x),
              children: T ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      y && /* @__PURE__ */ a.jsxs("div", { ref: ce, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ a.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${se.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kieli" }),
            ee.events.map((x, ne) => /* @__PURE__ */ a.jsxs("th", { scope: "col", className: x.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ a.jsx("span", { className: "melody-bar", children: x.beat % 4 === 0 ? `T${Math.floor(x.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ a.jsx("span", { className: "melody-duration", children: x.duration === 1 ? "♩" : `${x.duration} iskua` })
            ] }, ne))
          ] }) }),
          /* @__PURE__ */ a.jsx("tbody", { children: hh.map((x, ne) => /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("th", { scope: "row", children: x }),
            ee.events.map((fe, de) => {
              const H = fe.position?.string === ne, U = H && Te === fe.beat;
              return /* @__PURE__ */ a.jsx(
                "td",
                {
                  className: `${fe.beat % 4 === 0 ? "bar-start " : ""}${U ? "melody-playing " : ""}${H && Qe(fe.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": H ? `${x}-kieli, ${fe.position.fret}. nauha, ${Fe(fe.position.midi)}` : void 0,
                  children: H ? fe.position.fret : "—"
                },
                de
              );
            })
          ] }, ne)) })
        ] }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: d.note }),
      d.source && /* @__PURE__ */ a.jsx("p", { className: "melody-source", children: /* @__PURE__ */ a.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Gl = Ke.fingeringBoxes(9, Ke.SCALES.mp, "pentatonic", [1, 2]), uf = [...new Map(Gl.flatMap((s) => s.positions[0].strings.flatMap((i, o) => i.map((u) => {
  const d = Be(o, u);
  return [Xe(d), d];
})))).values()].sort((s, i) => s.midi - i.midi || i.string - s.string), Ra = [5, 4, 3, 2, 1, 0].flatMap((s) => uf.filter((i) => i.string === s).sort((i, o) => i.fret - o.fret)), Wl = [
  ...Ra,
  ...Ra.slice(1, -1).reverse()
], Xv = [...Wl, Ra[0]], fh = new Set(
  Gl[0].positions[0].strings.flatMap((s, i) => s.map((o) => {
    const u = Be(i, o);
    return Xe(u);
  })).filter((s) => Gl[1].positions[0].strings.flatMap((i, o) => i.map((u) => Xe(Be(o, u)))).includes(s))
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
], cf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", df = "musiikin-kartta:skaalapolku:bridge-tempo:v1", Al = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], mh = (s) => Qe(s) === 9;
function ph() {
  try {
    const s = Number(localStorage.getItem(cf));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function qv() {
  try {
    const s = Number(localStorage.getItem(df));
    return Number.isInteger(s) && s >= 40 && s <= 140 && s % 5 === 0 ? s : 75;
  } catch {
    return 75;
  }
}
function ek({ onBack: s, onPosition: i }) {
  const [o, u] = A.useState(ph), [d, h] = A.useState(ph), [p, f] = A.useState(!1), [k, S] = A.useState("roots"), [v, y] = A.useState(qv), [j, T] = A.useState(null), [b, w] = A.useState(null), [N, F] = A.useState(""), _ = A.useRef(new dr()), K = A.useRef(0), B = A.useRef(null), V = b === null ? null : Wl[b];
  function D() {
    B.current?.(), K.current++, _.current.stop(), T(null), w(null);
  }
  A.useEffect(() => {
    const Z = () => {
      document.hidden && (K.current++, _.current.stop(), T(null), w(null));
    };
    return document.addEventListener("visibilitychange", Z), () => {
      document.removeEventListener("visibilitychange", Z), K.current++, _.current.stop();
    };
  }, []);
  async function $(Z) {
    B.current?.();
    const ce = ++K.current;
    _.current.stop(), w(null), F(""), T(Z);
    try {
      Z === "transition" ? await _.current.play(Zv.map((G) => G.midi)) : Z === "once" ? await _.current.play(Xv.map((G) => G.midi)) : await _.current.loop(Wl.map((G) => G.midi), (G) => {
        ce === K.current && w(G);
      }, v);
    } catch (G) {
      ce === K.current && F(Da(G));
    } finally {
      ce === K.current && (T(null), w(null));
    }
  }
  function O(Z) {
    const ce = Math.max(40, Math.min(140, Z));
    y(ce), _.current.setLoopTempo(ce);
    try {
      localStorage.setItem(df, String(ce));
    } catch {
    }
  }
  function se(Z) {
    Z > o || (D(), h(Z), f(!1), S("roots"));
  }
  function ee() {
    D();
    const Z = Math.min(4, d + 1);
    if (h(Z), f(!1), S("roots"), Z > o) {
      u(Z);
      try {
        localStorage.setItem(cf, String(Z));
      } catch {
      }
    }
  }
  const Ee = (Z, ce) => d < 2 || d === 2 && p && fh.has(ce) || d === 3 && (k === "all" || k === "roots" && mh(Z)), Te = uf.filter((Z) => Ee(Z.midi, Xe(Z))).map((Z) => ({
    ...Z,
    label: d < 2 || d === 2 && p || d === 3 && k === "all" ? Fe(Z.midi) : "A",
    kind: d < 2 && V?.string === Z.string && V?.fret === Z.fret ? "playing" : mh(Z.midi) ? "answer" : fh.has(Xe(Z)) ? "anchor" : "shape"
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
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => se(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: Al.map((Z, ce) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: ce === d ? "journey-step current" : "journey-step",
        "aria-current": ce === d ? "step" : void 0,
        disabled: ce > o,
        onClick: () => se(ce),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: ce > o ? "🔒" : ce < o ? "✓" : ce + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: Z.title })
        ]
      },
      Z.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: Al[d].title }),
        /* @__PURE__ */ a.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: Al[d].detail }),
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
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => O(v - 5), children: "− 5" }),
          /* @__PURE__ */ a.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => O(v + 5), children: "+ 5" }),
          /* @__PURE__ */ a.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": j === "whole",
              onClick: () => j === "whole" ? D() : void $("whole"),
              children: j === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": j === "once",
              onClick: () => j === "once" ? D() : void $("once"),
              children: j === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": j === "transition",
              onClick: () => j === "transition" ? D() : void $("transition"),
              children: j === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": p, onClick: () => f((Z) => !Z), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => se(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((Z) => /* @__PURE__ */ a.jsxs("label", { children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: Z.value,
                  checked: k === Z.value,
                  onChange: () => S(Z.value)
                }
              ),
              /* @__PURE__ */ a.jsx("span", { children: Z.name })
            ] }, Z.value))
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => j === "once" ? D() : void $("once"), children: j === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => j === "transition" ? D() : void $("transition"), children: j === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: j === "whole" ? V && d < 2 ? `Nyt soi ${Fe(V.midi, !1, !0)} · ${en[V.string]}-kieli, nauha ${V.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : j === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : j === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        N && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: N }),
        /* @__PURE__ */ a.jsx(
          hi,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: j,
            marks: Te,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? k === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : k === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ a.jsx(
          ru,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: D,
            stopHandleRef: B
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ a.jsx(rf, {}),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: ee, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ a.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => se(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => i(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => i(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => i(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsx("p", { children: o === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const nr = "musiikin-kartta:skaalapolku:v1", Ta = "musiikin-kartta:skaalapolku:position-2:v1", Pl = "musiikin-kartta:skaalapolku:position-3:v1", Ma = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Oa = "musiikin-kartta:skaalapolku:active-position:v1", hf = "musiikin-kartta:skaalapolku:tempo:v1", os = 75, Ql = 40, Yl = 140;
function tk() {
  try {
    const s = localStorage.getItem(hf);
    if (s === null) return os;
    const i = Number(s);
    return Number.isInteger(i) && i >= Ql && i <= Yl && i % 5 === 0 ? i : os;
  } catch {
    return os;
  }
}
const Ll = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], vh = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Cn(s = nr) {
  try {
    const i = Number(localStorage.getItem(s));
    return Number.isInteger(i) ? Math.max(0, Math.min(4, i)) : 0;
  } catch {
    return 0;
  }
}
function Rl() {
  try {
    const s = localStorage.getItem(Oa);
    return s === "3" && Cn(Ma) === 4 ? 3 : Cn(nr) === 4 && (s === "2" || s === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function nk() {
  try {
    return Cn(Ta) === 4 && localStorage.getItem(Oa) === "bridge";
  } catch {
    return !1;
  }
}
function ik({ onBack: s }) {
  const [i, o] = A.useState(Rl), [u, d] = A.useState(nk), [h, p] = A.useState(() => ({
    1: Cn(nr),
    2: Cn(Ta),
    3: Cn(Pl)
  })), [f, k] = A.useState(() => Cn(Rl() === 3 ? Pl : Rl() === 2 ? Ta : nr)), S = h[i], [v, y] = A.useState(!1), [j, T] = A.useState("roots"), [b, w] = A.useState(tk), [N, F] = A.useState(null), [_, K] = A.useState(null), [B, V] = A.useState(""), D = A.useRef(new dr()), $ = A.useRef(0), O = A.useRef(null);
  function se(H) {
    const U = Math.max(Ql, Math.min(Yl, H));
    w(U), D.current.setLoopTempo(U);
    try {
      localStorage.setItem(hf, String(U));
    } catch {
    }
  }
  function ee() {
    O.current?.(), $.current++, D.current.stop(), F(null), K(null);
  }
  A.useEffect(() => {
    const H = () => {
      document.hidden && ($.current++, D.current.stop(), F(null), K(null));
    };
    return document.addEventListener("visibilitychange", H), () => {
      document.removeEventListener("visibilitychange", H), $.current++, D.current.stop();
    };
  }, []);
  const Ee = Ke.fingeringBoxes(9, Ke.SCALES.mp, "pentatonic", [i])[0].positions[0], Te = Ee.strings.flatMap((H, U) => H.map((J) => Be(U, J))).sort((H, U) => H.midi - U.midi || U.string - H.string), Z = [...Te, ...Te.slice(1, -1).reverse()], ce = _ === null ? null : Z[_], G = i === 1 ? [69, 72, 69, 67, 64, 67, 69] : i === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], oe = Ee.start, re = Ee.end, Y = (H) => Qe(H) === 9, ae = (H) => f < 2 ? !0 : f === 2 ? v && Y(H) : j === "scale" || j === "roots" && Y(H), te = Te.filter((H) => ae(H.midi)).map((H) => ({
    ...H,
    label: f < 2 || f === 3 && j === "scale" ? Fe(H.midi) : "A",
    kind: f < 2 && ce?.string === H.string && ce.fret === H.fret ? "playing" : Y(H.midi) ? "answer" : "shape"
  }));
  async function E(H) {
    O.current?.();
    const U = ++$.current;
    D.current.stop(), K(null), V(""), F(H);
    try {
      H === "phrase" ? await D.current.play(G) : await D.current.loop(Z.map((J) => J.midi), (J) => {
        U === $.current && K(J);
      }, f === 2 ? b : os);
    } catch (J) {
      U === $.current && V(Da(J));
    } finally {
      U === $.current && (F(null), K(null));
    }
  }
  function x() {
    ee();
    const H = Math.min(4, f + 1);
    if (k(H), y(!1), T("roots"), H > S) {
      p((J) => ({ ...J, [i]: H }));
      const U = i === 1 ? nr : i === 2 ? Ta : Pl;
      try {
        localStorage.setItem(U, String(H));
      } catch {
      }
    }
  }
  function ne(H) {
    H > S || (ee(), k(H), y(!1), T("roots"));
  }
  function fe(H) {
    if (!(H === 2 && h[1] < 4) && !(H === 3 && Cn(Ma) < 4)) {
      ee(), d(!1), o(H), k(h[H]), y(!1), T("roots"), V("");
      try {
        localStorage.setItem(Oa, String(H));
      } catch {
      }
    }
  }
  function de() {
    if (!(h[2] < 4)) {
      ee(), d(!0), y(!1), V("");
      try {
        localStorage.setItem(Oa, "bridge");
      } catch {
      }
    }
  }
  return u ? /* @__PURE__ */ a.jsx(ek, { onBack: s, onPosition: fe }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ee(), s();
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
      oe,
      "–",
      re,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": i === 1, onClick: () => fe(1), children: "Positio 1" }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": i === 2,
          disabled: h[1] < 4,
          onClick: () => fe(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          disabled: h[2] < 4,
          onClick: de,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": i === 3,
          disabled: Cn(Ma) < 4,
          onClick: () => fe(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": `Position ${i} harjoitukset`, children: Ll.map((H, U) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: U === f ? "journey-step current" : "journey-step",
        "aria-current": U === f ? "step" : void 0,
        disabled: U > S,
        onClick: () => ne(U),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: U > S ? "🔒" : U < S ? "✓" : U + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: U === 4 ? `Positio ${i} harjoiteltu` : H.title })
        ]
      },
      H.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: f === 4 ? `Positio ${i} harjoiteltu` : Ll[f].title }),
        /* @__PURE__ */ a.jsx("span", { children: f === 4 ? "Valmis" : `Harjoitus ${f + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: Ll[f].detail }),
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
              disabled: b <= Ql,
              onClick: () => se(b - 5),
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
              disabled: b >= Yl,
              onClick: () => se(b + 5),
              children: "+ 5"
            }
          ),
          b !== os && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => se(os),
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
              "aria-pressed": N === "loop",
              onClick: () => N === "loop" ? ee() : void E("loop"),
              children: N === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          i !== 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => N === "phrase" ? ee() : void E("phrase"), children: N === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        f !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: N === "loop" ? ce && f < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Fe(ce.midi, !1, !0)} · ${en[ce.string]}-kieli, nauha ${ce.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        B && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: B }),
        f >= 1 && f <= 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          f === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": v, onClick: () => y((H) => !H), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ne(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          f === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              vh.map((H) => /* @__PURE__ */ a.jsxs("label", { children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: H.value,
                    checked: j === H.value,
                    onChange: () => T(H.value)
                  }
                ),
                /* @__PURE__ */ a.jsx("span", { children: H.label })
              ] }, H.value))
            ] }),
            i !== 1 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
              E("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ a.jsx(hi, { area: { strings: [0, 1, 2, 3, 4, 5], min: oe, max: re, fixed: "box" }, marks: te, disabled: !0, follow: "playing", playback: N, caption: `A-mollipentatoninen, positio ${i}` }),
          /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
            f < 2 ? "Vihreällä merkitty A on pohjasävel." : f === 3 ? vh.find((H) => H.value === j).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        f === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(hi, { area: { strings: [0, 1, 2, 3, 4, 5], min: oe, max: re, fixed: "box" }, marks: te, disabled: !0, follow: "playing", playback: N, caption: `Position ${i} sävelet` }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        i === 1 && (f === 1 || f === 2) && /* @__PURE__ */ a.jsx(
          ru,
          {
            pieceId: "wayfaring",
            stage: f === 1 ? "fingering" : "memory",
            onBeforePlay: ee,
            stopHandleRef: O
          },
          `wayfaring:${f}`
        ),
        f === 3 && /* @__PURE__ */ a.jsx(rf, {}, i),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: f === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : f === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : f === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: x, children: f === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsx("h3", { children: i === 1 ? "Valmis seuraavaan positioon" : i === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ a.jsx("p", { children: i === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : i === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ne(2), children: "Kertaa muistiharjoitus" }),
        i === 1 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => fe(2), children: "Siirry positioon 2 →" }) : i === 2 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: de, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => fe(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        h[1] < 4 ? "🔒 Positio 2" : h[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        h[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Cn(Ma) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
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
}, ff = (s) => "musiikin-kartta:moodipolku:" + s + ":v1", mf = "musiikin-kartta:moodipolku:active:v1", rk = (s) => {
  const i = rs[s].positions;
  return [...i, ...i.slice(1, -1).reverse()];
}, ak = (s) => [...rk(s), rs[s].positions[0]], kh = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function ba(s) {
  try {
    const i = Number(localStorage.getItem(ff(s)));
    return Number.isInteger(i) ? Math.max(0, Math.min(5, i)) : 0;
  } catch {
    return 0;
  }
}
function yh() {
  try {
    return localStorage.getItem(mf) === "aeolian" && ba("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function ok({ onBack: s }) {
  const [i, o] = A.useState(yh), [u, d] = A.useState(() => ({
    ionian: ba("ionian"),
    aeolian: ba("aeolian")
  })), [h, p] = A.useState(() => ba(yh())), [f, k] = A.useState(null), [S, v] = A.useState(null), [y, j] = A.useState(!1), [T, b] = A.useState("roots"), [w, N] = A.useState(""), [F, _] = A.useState(null), [K, B] = A.useState(null), V = A.useRef(new dr()), D = A.useRef(0), $ = A.useRef(null), O = rs[i], se = ak(i), ee = f === "scale" && S !== null ? se[S] : null;
  function Ee() {
    $.current?.(), D.current++, V.current.stop(), k(null), v(null);
  }
  A.useEffect(() => {
    const x = () => {
      document.hidden && (D.current++, V.current.stop(), k(null), v(null));
    };
    return document.addEventListener("visibilitychange", x), () => {
      document.removeEventListener("visibilitychange", x), D.current++, V.current.stop();
    };
  }, []);
  async function Te(x, ne, fe = !1) {
    $.current?.();
    const de = ++D.current;
    V.current.stop(), v(null), N(""), k(x);
    try {
      const H = fe ? await V.current.loop(ne, void 0, 75) : await V.current.play(ne, (U) => {
        de === D.current && x === "scale" && v(U);
      });
      return de === D.current && H;
    } catch (H) {
      return de === D.current && N(Da(H)), !1;
    } finally {
      de === D.current && (k(null), v(null));
    }
  }
  function Z(x) {
    x > u[i] || (Ee(), p(x), _(null), B(null), j(!1), b("roots"), N(""));
  }
  function ce() {
    Ee();
    const x = Math.min(5, h + 1);
    if (p(x), _(null), B(null), j(!1), b("roots"), x > u[i]) {
      d((ne) => ({ ...ne, [i]: x }));
      try {
        localStorage.setItem(ff(i), String(x));
      } catch {
      }
    }
  }
  function G(x) {
    if (!(x === "aeolian" && u.ionian < 5)) {
      Ee(), o(x), p(u[x]), _(null), B(null), j(!1), b("roots"), N("");
      try {
        localStorage.setItem(mf, x);
      } catch {
      }
    }
  }
  async function oe() {
    Ee(), B(null), _(null);
    const x = Math.random() < 0.5 ? "ionian" : "aeolian";
    await Te("comparison", rs[x].phrase) && _(x);
  }
  const re = (x) => Qe(x) === O.tonic, Y = O.positions.filter((x) => h < 2 ? !0 : h === 2 ? y && re(x.midi) : h === 4 ? T === "all" || T === "roots" && re(x.midi) : !1).map((x) => ({
    ...x,
    label: h === 2 || h === 4 && T === "roots" ? O.tonicName : Fe(x.midi),
    kind: ee?.string === x.string && ee.fret === x.fret ? "playing" : re(x.midi) ? "answer" : "shape"
  })), ae = [...new Set(O.positions.map((x) => x.string))], te = Math.min(...O.positions.map((x) => x.fret)), E = Math.max(...O.positions.map((x) => x.fret));
  return /* @__PURE__ */ a.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      Ee(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ a.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      sk.indexOf(i) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ a.jsxs("h2", { id: "mode-path-title", children: [
      O.title,
      " · ",
      O.alias
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: O.explanation }),
    /* @__PURE__ */ a.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ a.jsx("strong", { children: O.noteNames }),
      " · Pohjasävel ",
      O.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": i === "ionian", onClick: () => G("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": i === "aeolian",
          disabled: u.ionian < 5,
          onClick: () => G("aeolian"),
          children: [
            "2. A-aiolinen ",
            u.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ a.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      kh.map((x, ne) => /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: h === ne ? "journey-step current" : "journey-step",
          "aria-current": h === ne ? "step" : void 0,
          disabled: ne > u[i],
          onClick: () => Z(ne),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: ne > u[i] ? "🔒" : ne < u[i] ? "✓" : ne + 1 }),
            /* @__PURE__ */ a.jsx("span", { children: x })
          ]
        },
        x
      )),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: h === 5 ? "journey-step current" : "journey-step",
          disabled: u[i] < 5,
          "aria-current": h === 5 ? "step" : void 0,
          onClick: () => Z(5),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: u[i] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ a.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "mode-lesson-title", children: h === 5 ? "Moodi harjoiteltu" : kh[h] }),
        /* @__PURE__ */ a.jsx("span", { children: h === 5 ? "Valmis" : "Harjoitus " + (h + 1) + " / 5" })
      ] }),
      h === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          O.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          O.contrast
        ] })
      ] }),
      h === 1 && /* @__PURE__ */ a.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      h === 2 && /* @__PURE__ */ a.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        O.tonicName,
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
                oe();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          F !== null && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            Te("comparison", rs[F].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        F !== null && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                disabled: K !== null || f !== null,
                onClick: () => B("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                disabled: K !== null || f !== null,
                onClick: () => B("aeolian"),
                children: "A"
              }
            )
          ] }),
          K !== null && /* @__PURE__ */ a.jsxs("p", { role: "status", children: [
            K === F ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            rs[F].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      h === 4 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Soita ",
          O.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          O.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          O.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([x, ne]) => /* @__PURE__ */ a.jsxs("label", { children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: x,
                checked: T === x,
                onChange: () => b(x)
              }
            ),
            /* @__PURE__ */ a.jsx("span", { children: ne })
          ] }, x))
        ] })
      ] }),
      h === 2 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => j((x) => !x), children: y ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      h < 3 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": f === "scale",
          onClick: () => f === "scale" ? Ee() : void Te("scale", se.map((x) => x.midi)),
          children: f === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      h === 4 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": f === "accompaniment",
          onClick: () => f === "accompaniment" ? Ee() : void Te("accompaniment", O.accompaniment, !0),
          children: f === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      h < 2 && f === "scale" && ee && /* @__PURE__ */ a.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Fe(ee.midi, !1, !0),
        " · ",
        en[ee.string],
        "-kieli, nauha ",
        ee.fret,
        "."
      ] }),
      h !== 3 && h !== 5 && /* @__PURE__ */ a.jsx(
        hi,
        {
          area: { strings: ae, min: te, max: E, fixed: "box" },
          marks: Y,
          follow: "playing",
          playback: f,
          disabled: !0,
          caption: O.title + " – yhden oktaavin sormitus"
        }
      ),
      i === "ionian" && (h === 1 || h === 2) && /* @__PURE__ */ a.jsx(
        ru,
        {
          pieceId: "nooa",
          stage: h === 1 ? "fingering" : "memory",
          onBeforePlay: Ee,
          stopHandleRef: $
        },
        `nooa:${h}`
      ),
      w && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: w }),
      h < 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ a.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: ce, children: h === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      h === 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsxs("h3", { children: [
          O.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ a.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => Z(2), children: "Kertaa muistiharjoitus" }),
        i === "ionian" && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => G("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        i === "aeolian" && /* @__PURE__ */ a.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function lk({ onBack: s }) {
  const [i, o] = A.useState(null);
  return i === "pentatonic" ? /* @__PURE__ */ a.jsx(ik, { onBack: () => o(null) }) : i === "modes" ? /* @__PURE__ */ a.jsx(ok, { onBack: () => o(null) }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT" }),
    /* @__PURE__ */ a.jsx("h2", { id: "scale-tracks-title", children: "Mitä haluat opetella?" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen." }),
    /* @__PURE__ */ a.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("pentatonic"), children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Pentatoniset" }),
          /* @__PURE__ */ a.jsx("span", { children: "A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi." }),
          /* @__PURE__ */ a.jsx("small", { children: "Jatka nykyistä harjoittelua" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("modes"), children: [
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
const Zs = [0, 2, 4, 5, 7, 9, 11], Ea = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function uk({ onBack: s }) {
  const [i, o] = A.useState(0), [u, d] = A.useState([]), [h, p] = A.useState(!1), [f, k] = A.useState(""), [S, v] = A.useState(0), y = i >= Zs.length, j = Zs[Math.min(i, Zs.length - 1)], T = hs(Ea.strings, Ea.min, Ea.max).filter((V) => Qe(V.midi) === j), b = T.filter((V) => !u.includes(Xe(V))), w = b.length === 0 && !y, N = !w && h ? b[0] : void 0, F = [
    ...T.filter((V) => u.includes(Xe(V))).map((V) => ({ ...V, kind: "answer", label: Fe(V.midi) })),
    ...N ? [{ ...N, kind: "anchor", label: "?" }] : []
  ];
  function _(V) {
    if (y || w) return;
    const D = Xe(V);
    if (Qe(V.midi) !== j) {
      v((se) => se + 1), k(`Valitsit sävelen ${Fe(V.midi)}. Etsi ${Fe(j)}.`);
      return;
    }
    if (u.includes(D)) {
      k("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const $ = [...u, D];
    d($), p(!1);
    const O = T.length - $.length;
    k(O ? `Oikein! ${Fe(j)} löytyi ${en[V.string]}-kieleltä (${_i(V.fret)}). Vielä ${O}.` : `Löysit kaikki ${T.length} ${Fe(j)}-säveltä tällä alueella.`);
  }
  function K() {
    w && (o((V) => V + 1), d([]), p(!1), k(""));
  }
  function B() {
    o(0), d([]), p(!1), k(""), v(0);
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
      /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: B, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsxs("h3", { children: [
          "Etsi kaikki ",
          Fe(j),
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
        Fe(j),
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
          area: Ea,
          marks: F,
          onAnswer: _,
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
            onClick: () => p((V) => !V),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        w && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: K, children: i === Zs.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" })
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
}, Ol = ["C", "G", "D", "Em"], gh = ["C", "G", "D", "Em", "Am", "E", "A"], dk = { min: 0, max: 3, fixed: "" };
function xh(s) {
  const i = [...s];
  for (let o = i.length - 1; o > 0; o--) {
    const u = Math.floor(Math.random() * (o + 1));
    [i[o], i[u]] = [i[u], i[o]];
  }
  return i;
}
function hk({ onBack: s }) {
  const [i, o] = A.useState(4), [u, d] = A.useState(() => xh(Ol)), [h, p] = A.useState(0), [f, k] = A.useState(null), [S, v] = A.useState([]), [y, j] = A.useState(0), T = h >= u.length, b = ck[u[Math.min(h, u.length - 1)]], w = i === 4 ? Ol : gh, N = b.frets.flatMap(($, O) => $ === null ? [] : [O]), F = b.frets.flatMap(($, O) => $ === null ? [O] : []), _ = { ...dk, strings: N }, K = b.frets.flatMap(($, O) => $ === null ? [] : [{
    ...Be(O, $),
    kind: $ === 0 ? "anchor" : "shape",
    label: $ === 0 ? "○" : "●"
  }]);
  function B($ = i) {
    o($), d(xh($ === 4 ? Ol : gh)), p(0), k(null), v([]), j(0);
  }
  function V($) {
    f || T || S.includes($) || ($ === b.name ? k($) : (v((O) => [...O, $]), j((O) => O + 1)));
  }
  function D() {
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
            onChange: () => B(4)
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
            onChange: () => B(7)
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
      /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => B(), children: "Harjoittele uudelleen" }) })
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
          area: _,
          marks: K,
          mutedStrings: F,
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
          onClick: () => V($),
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
      f && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: D, children: h === u.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const xe = (s, i) => ({ first: s, ...i ? { second: i } : {} }), ls = () => [
  xe("Gm", "F"),
  xe("Gm"),
  xe("B♭", "F"),
  xe("Gm"),
  xe("Gm", "F"),
  xe("Gm"),
  xe("E♭", "F"),
  xe("Gm")
], us = () => [
  xe("B♭", "F"),
  xe("Gm", "Dm"),
  xe("E♭", "F"),
  xe("Gm", "Dm")
], cs = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], pf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], fk = [
  { id: "intro", title: "Intro", start: 0, bars: [xe("Gm", "F"), xe("Gm"), xe("B♭", "F"), xe("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ls(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...us(), xe("E♭"), { ...xe("E♭"), passingBass: "F" }],
    lyrics: cs,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [xe("Gm", "F"), xe("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: ls(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...us(), xe("E♭"), xe("F")],
    lyrics: cs
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [xe("Gm"), xe("Dm"), xe("F"), xe("C"), xe("Gm"), xe("Dm"), xe("E♭"), xe("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: ls(),
    lyrics: pf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...us(), xe("E♭", "F"), xe("Gm")],
    lyrics: cs
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      xe("E♭", "F"),
      { ...xe("Gm"), possibleChord: "Dm" },
      xe("E♭", "F"),
      xe("Gm", "F"),
      { ...xe("Gm"), possibleChord: "Dm" },
      xe("Gm", "F"),
      xe("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], mk = [
  { id: "intro", title: "Intro", start: 0, bars: [xe("Gm", "F"), xe("Gm"), xe("B♭", "F"), xe("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ls(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...us(), xe("E♭"), xe("E♭")],
    lyrics: cs
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: ls(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...us(), xe("E♭"), xe("F")],
    lyrics: cs
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [xe("Gm"), xe("Dm"), xe("F"), xe("C"), xe("Gm"), xe("Dm"), xe("E♭"), xe("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: ls(),
    lyrics: pf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...us(), xe("B♭", "F"), xe("Gm"), xe("E♭", "F"), xe("Gm")],
    lyrics: cs
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [xe("E♭", "F"), xe("Gm", "F"), xe("E♭", "F"), xe("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], fs = {
  acoustic: fk,
  normal: mk
}, pk = "normal", Jl = "yksi-sointu-kaksi-askelta", au = {
  acoustic: Jl + "-akustinen",
  normal: Jl + "-normaali"
}, vf = (s) => s === Jl || Object.values(au).includes(s ?? "");
function vk(s) {
  const i = Object.entries(au).find(([, o]) => o === s);
  return i ? i[0] : null;
}
const kk = (s) => au[s], jh = (s) => {
  const i = Math.max(0, Math.floor(Number.isFinite(s) ? s : 0));
  return `${Math.floor(i / 60)}:${String(i % 60).padStart(2, "0")}`;
};
function ou(s, i = "acoustic") {
  const o = fs[i], u = o[s], d = o[s + 1];
  return d ? (d.start - u.start) / u.bars.length : 240 / 69;
}
function lu(s, i = "acoustic") {
  const o = fs[i], u = Math.max(0, Number.isFinite(s) ? s : 0);
  let d = 0;
  for (let y = 1; y < o.length && !(u < o[y].start); y++)
    d = y;
  const h = o[d];
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
function lr(s, i, o = "acoustic") {
  return fs[o][s].start + ou(s, o) * i;
}
function yk(s) {
  return fs[s].flatMap((i, o) => i.bars.flatMap((u, d) => {
    const h = lr(o, d, s), p = { section: i, sectionIndex: o, barIndex: d, part: "first", chord: u.first, time: h };
    if (!u.second) return [p];
    const f = ou(o, s) / 2;
    return [p, { ...p, part: "second", chord: u.second, time: h + f }];
  }));
}
function gk(s, i = "acoustic", o = !1) {
  const u = fs[i], d = lu(s, i), h = d.section.bars[d.barIndex], p = d.beat >= 3 && h.second ? "second" : "first", f = yk(i), k = f.findIndex((T) => T.sectionIndex === d.sectionIndex && T.barIndex === d.barIndex && T.part === p), v = [
    ...f.slice(k + 1).map((T) => ({ ...T, wrapped: !1 })),
    ...o ? f.slice(0, k + 1).map((T) => ({ ...T, wrapped: !0 })) : []
  ].find((T) => T.chord !== d.chord) ?? null;
  let y = null;
  const j = d.sectionIndex === u.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!j || o)) {
    const T = j ? 0 : d.sectionIndex + 1, b = u[T], w = b.bars[0].first;
    y = {
      section: b,
      sectionIndex: T,
      firstChord: w,
      wrapped: j,
      continues: w === (h.second ?? h.first)
    };
  }
  return { nextChord: v, nextSection: y };
}
function xk(s) {
  const i = s.filter((f) => f.lyrics?.length), o = (f) => 1 + (f.lyrics?.length ?? 0), u = i.reduce((f, k) => f + o(k), 0);
  let d = 0, h = 1 / 0, p = 0;
  for (let f = 0; f <= i.length; f++) {
    const k = Math.abs(u - 2 * p);
    (k < h || k === h && p >= u - p) && (d = f, h = k), f < i.length && (p += o(i[f]));
  }
  return [i.slice(0, d), i.slice(d)];
}
const Xl = ["Gm", "F", "B♭", "E♭", "Dm", "C"], kf = "musiikin-kartta:kappale-sointuvihjeet:v1", _a = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Sh = {
  showChords: !0,
  level: 0,
  fadeOrder: _a
};
function Na(s, i) {
  return !i.showChords || i.level >= i.fadeOrder[s];
}
function wh(s) {
  if (!s) return { ...Sh, fadeOrder: { ..._a } };
  try {
    const i = JSON.parse(s);
    if (!i || typeof i != "object") throw new Error("Invalid settings");
    const o = i, u = o.level, d = { ..._a }, h = o.fadeOrder;
    if (h && typeof h == "object") {
      const p = h;
      for (const f of Xl)
        [1, 2, 3, 4].includes(p[f]) && (d[f] = p[f]);
    }
    return {
      showChords: typeof o.showChords == "boolean" ? o.showChords : !0,
      level: typeof u == "number" && [0, 1, 2, 3, 4].includes(u) ? u : 0,
      fadeOrder: d
    };
  } catch {
    return { ...Sh, fadeOrder: { ..._a } };
  }
}
function jk() {
  try {
    return wh(localStorage.getItem(kf));
  } catch {
    return wh(null);
  }
}
const Sk = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function wk(s) {
  const i = Sk.exec(s.trim());
  if (!i) return s;
  const [, o, , u = "", d = ""] = i;
  return o + "5" + u + d;
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
function Tk({ version: s, position: i, loop: o = !1, onSeek: u }) {
  const [d, h] = A.useState(jk), [p, f] = A.useState(null), [k, S] = A.useState(!1), [v, y] = A.useState("full"), j = (G) => Ek(G, v), T = fs[s], b = lu(i, s), { section: w, sectionIndex: N, barIndex: F, beat: _, chord: K } = b, B = _ >= 3 && w.bars[F].second ? "second" : "first", V = (G, oe, re) => `${s}:${G}:${oe}:${re}`, D = (G, oe) => V(w.id, G, oe), $ = D(F, B), O = Na(K, d), se = O && p === $, ee = (G, oe, re) => !Na(G, d) || p === D(oe, re), Ee = d.showChords && d.level === 0, Te = Xl.filter((G) => Na(G, d)).length, { nextSection: Z } = gk(i, s, o), ce = !!Z && Na(Z.firstChord, d);
  return A.useEffect(() => {
    f(null);
  }, [$]), A.useEffect(() => {
    try {
      localStorage.setItem(kf, JSON.stringify(d));
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
            onChange: (G) => {
              h((oe) => ({ ...oe, showChords: G.target.checked })), f(null);
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
            onChange: (G) => S(G.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([G, oe]) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: G,
              checked: v === G,
              onChange: () => y(G)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: oe })
        ] }, G))
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (G) => {
              const oe = Number(G.target.value);
              h((re) => ({ ...re, level: oe })), f(null);
            },
            children: Nk.map((G) => /* @__PURE__ */ a.jsx("option", { value: G.value, children: G.label }, G.value))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Te === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Te}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ a.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ a.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ a.jsx("div", { className: "song-fade-order", children: Xl.map((G) => /* @__PURE__ */ a.jsxs("label", { children: [
        G,
        /* @__PURE__ */ a.jsx(
          "select",
          {
            "aria-label": G + ": piilotusvaihe",
            value: d.fadeOrder[G],
            onChange: (oe) => {
              const re = Number(oe.target.value);
              h((Y) => ({ ...Y, fadeOrder: { ...Y.fadeOrder, [G]: re } })), f(null);
            },
            children: Ck.map((oe) => /* @__PURE__ */ a.jsx("option", { value: oe.value, children: oe.label }, oe.value))
          }
        )
      ] }, G)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ a.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (G) => {
              const oe = T.find((re) => re.id === G.target.value);
              oe && u(oe.start);
            },
            children: T.map((G) => /* @__PURE__ */ a.jsxs("option", { value: G.id, children: [
              jh(G.start),
              " · ",
              G.title
            ] }, G.id))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ a.jsxs("p", { className: "song-current-chord", children: [
          O && !se ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ a.jsx("strong", { children: O && !se ? "?" : j(K) }),
          /* @__PURE__ */ a.jsxs("span", { children: [
            w.title,
            ", tahti ",
            F + 1,
            ", isku ",
            _,
            "/4"
          ] }),
          O && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => f(se ? null : $),
              children: se ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        Z && /* @__PURE__ */ a.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ a.jsx("strong", { children: ce ? "?" : j(Z.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((G, oe) => {
      const re = oe === F, Y = re && (_ < 3 || !G.second), ae = re && _ >= 3 && !!G.second, te = ee(G.first, oe, "first"), E = G.second ? ee(G.second, oe, "second") : !1, x = (te ? j(G.first) : "sointu piilossa") + (G.second ? " " + (E ? j(G.second) : "sointu piilossa") : "") + (Ee && G.passingBass ? " (basson kulku " + G.passingBass + ")" : "") + (Ee && G.possibleChord ? " (" + j(G.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (re ? " active" : ""),
          "aria-pressed": re,
          "aria-label": "Tahti " + (oe + 1) + ": " + x + ". Siirry kohtaan " + jh(lr(N, oe, s)),
          onClick: () => u(lr(N, oe, s)),
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              oe + 1
            ] }),
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ a.jsx("strong", { className: Y && te ? "now" : "", children: te ? j(G.first) : "?" }),
              G.second && /* @__PURE__ */ a.jsx("strong", { className: ae && E ? "now" : "", children: E ? j(G.second) : "?" })
            ] }),
            Ee && G.passingBass && /* @__PURE__ */ a.jsxs("small", { children: [
              "Basso: (",
              G.passingBass,
              "), isku 4"
            ] }),
            Ee && G.possibleChord && /* @__PURE__ */ a.jsxs("small", { children: [
              "Mahdollinen (",
              j(G.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        oe
      );
    }) }),
    k ? /* @__PURE__ */ a.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ a.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ a.jsx("div", { className: "song-all-lyrics-grid", children: xk(T).map((G, oe) => /* @__PURE__ */ a.jsx("div", { className: "song-lyrics-column", children: G.map((re) => /* @__PURE__ */ a.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ a.jsx("h5", { children: re.title }),
        re.lyrics?.map((Y, ae) => /* @__PURE__ */ a.jsx("p", { children: Y }, ae))
      ] }, re.id)) }, oe)) }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ a.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ a.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((G, oe) => /* @__PURE__ */ a.jsx("p", { children: G }, oe))
    ] }),
    Ee && w.note && /* @__PURE__ */ a.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const $a = 7, Mk = { name: "bluesasteikko", base: Ke.SCALES.mp.base, add: [[6, "♭5"]] }, $l = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: Ke.SCALES.mp,
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
    scale: Ke.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function bk(s) {
  return Ke.scaleNotes(s).map(([i, o]) => Ke.noteName($a, i, o));
}
const yf = (s) => s === "pentatonic" ? 5 : 7;
function _k(s, i, o) {
  const u = i.filter((f) => f >= 1 && f <= yf(s.system)), d = Ke.fingeringBoxes($a, s.scale, s.system, u, o);
  if (s.id !== "blues") return d;
  const h = s.scale.add.map(([f]) => ($a + f) % 12), p = (f, k) => k >= 0 && k <= o && h.includes((Ke.OPEN_PITCHES[f] + k) % 12);
  return d.map((f) => ({ ...f, positions: f.positions.map((k) => {
    const S = k.strings.map((y, j) => {
      if (!y.length) return y;
      const T = y[y.length - 1];
      return p(j, T + 1) ? [...y.slice(0, -1), T + 1] : y;
    }), v = S.flat();
    return { ...k, strings: S, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const Eh = 17;
function Ak({ open: s }) {
  const [i, o] = A.useState("mp"), [u, d] = A.useState({ pentatonic: [], "3nps": [] }), [h, p] = A.useState(!1), [f, k] = A.useState(!1), S = A.useRef(null), v = $l.find((N) => N.id === i) ?? $l[0], y = u[v.system], j = _k(v, y, Eh), T = j.some((N) => N.positions.length > 0), b = Ke.renderBoard($a, v.scale, Eh, {
    automatic: !0,
    boxes: j,
    onlyBoxNotes: T && h,
    label: v.title + (y.length ? ", " + y.map((N) => "boksi " + N).join(", ") : "")
  });
  A.useEffect(() => {
    const N = S.current;
    !N || !s || j.length === 1 && Ke.revealPositions(N, ".box-highlight");
  }, [b, s]);
  function w(N, F) {
    d((_) => ({ ..._, [v.system]: F ? [..._[v.system], N].sort((K, B) => K - B) : _[v.system].filter((K) => K !== N) }));
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ a.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ a.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ a.jsx("select", { value: i, onChange: (N) => o(N.target.value), children: $l.map((N) => /* @__PURE__ */ a.jsx("option", { value: N.id, children: N.title }, N.id)) })
    ] }) }),
    /* @__PURE__ */ a.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ a.jsx("strong", { children: v.title }),
      /* @__PURE__ */ a.jsx("span", { children: bk(v.scale).join(" · ") })
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
      /* @__PURE__ */ a.jsx("summary", { onClick: (N) => {
        N.preventDefault(), k((F) => !F);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ a.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ a.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: yf(v.system) }, (N, F) => F + 1).map((N) => /* @__PURE__ */ a.jsxs("label", { className: "box-toggle", "data-box": N, children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            value: N,
            checked: y.includes(N),
            onChange: (F) => w(N, F.target.checked)
          }
        ),
        " Boksi ",
        N
      ] }, v.system + N)) }),
      /* @__PURE__ */ a.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: T && h,
            disabled: !T,
            onChange: (N) => p(N.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: T ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
const ot = ["backing", "guitar", "vocals"], gf = 0.05, xf = 5e-3;
class Pk {
  constructor(i, o = {}) {
    this.context = i, this.fetchImpl = o.fetch ?? ((h, p) => fetch(h, p)), this.now = o.now ?? (() => performance.now());
    const u = {}, d = {};
    for (const h of ot)
      u[h] = i.createGain(), d[h] = i.createGain(), u[h].connect(d[h]), d[h].connect(i.destination);
    this.inputs = u, this.levels = d;
  }
  context;
  state = "tyhja";
  error = "";
  events = [];
  /** Kutsutaan, kun kappale soi loppuun ilman looppia. */
  onEnded;
  onStateChange;
  /** Mittausta varten: raitakohtaiset tulot ennen tasoa (lähteet kytkeytyvät näihin). */
  inputs;
  levels;
  buffers = {};
  sources = null;
  when = 0;
  offset = 0;
  looping = !1;
  /** Loop on ollut päällä tämän soiton aikana, joten kohta lasketaan loopin pituuden jakojäännöksenä. */
  wrapped = !1;
  loadToken = 0;
  controller = null;
  fetchImpl;
  now;
  record(i, o = {}) {
    this.events.push({ kind: i, ms: Math.round(this.now()), ...o }), this.events.length > 500 && this.events.shift();
  }
  setState(i) {
    this.state !== i && (this.state = i, this.onStateChange?.(i));
  }
  /** Raitojen yhteinen pituus (lyhimmän raidan kesto). 0, jos puskureita ei ole. */
  get duration() {
    const i = ot.map((o) => this.buffers[o]?.duration ?? 0);
    return i.every((o) => o > 0) ? Math.min(...i) : 0;
  }
  get playing() {
    return this.sources !== null;
  }
  /** Puskurien todellinen koko tavuina (näytteet × kanavat × 4). */
  get bufferBytes() {
    return ot.reduce((i, o) => {
      const u = this.buffers[o];
      return i + (u ? u.length * u.numberOfChannels * 4 : 0);
    }, 0);
  }
  /**
   * Lataa ja purkaa yhden version kolme raitaa. Edellisen version puskurit ja lähteet vapautetaan ensin.
   * Purku tehdään raita kerrallaan, jotta purun aikainen huippumuisti pysyy pienempänä.
   */
  async load(i) {
    this.release();
    const o = ++this.loadToken, u = new AbortController();
    this.controller = u;
    const d = () => o === this.loadToken;
    this.error = "", this.setState("ladataan");
    const h = this.now();
    this.record("lataus-alku");
    try {
      const p = await Promise.all(ot.map(async (k) => {
        const S = await this.fetchImpl(i[k], { signal: u.signal });
        if (!S.ok) throw new Error(`${k}: HTTP ${S.status}`);
        const v = await S.arrayBuffer();
        return this.record("ladattu", { track: k, bytes: v.byteLength, kesto: Math.round(this.now() - h) }), v;
      }));
      if (!d()) return "peruttu";
      this.setState("puretaan");
      const f = {};
      for (const [k, S] of ot.entries()) {
        const v = this.now();
        this.record("purku-alku", { track: S });
        const y = await this.context.decodeAudioData(p[k]);
        if (!d()) return "peruttu";
        f[S] = y, this.record("purettu", {
          track: S,
          kesto: Math.round(this.now() - v),
          length: y.length,
          channels: y.numberOfChannels,
          sampleRate: y.sampleRate,
          bytes: y.length * y.numberOfChannels * 4
        });
      }
      return this.buffers = f, this.controller = null, this.record("valmis", { kesto: Math.round(this.now() - h), bytes: this.bufferBytes, duration: this.duration }), this.setState("valmis"), "valmis";
    } catch (p) {
      return d() ? (this.controller = null, this.buffers = {}, this.error = p instanceof Error ? p.message : String(p), this.record("virhe", { message: this.error }), this.setState("virhe"), "virhe") : "peruttu";
    }
  }
  /** Peruu kesken olevan latauksen tai purun. Valmiit puskurit säilyvät. */
  cancel() {
    this.state !== "ladataan" && this.state !== "puretaan" || (this.loadToken++, this.controller?.abort(), this.controller = null, this.record("peruttu"), this.setState("tyhja"));
  }
  /** Pysäyttää toiston ja vapauttaa puskurit (versionvaihto, soittimesta poistuminen). */
  release() {
    this.cancel(), this.stopSources();
    const i = this.duration > 0;
    this.buffers = {}, this.offset = 0, i && this.record("vapautettu"), this.state !== "tyhja" && this.setState("tyhja");
  }
  /** Vapauttaa kaiken, myös raitojen tasosolmut. */
  dispose() {
    this.release();
    for (const i of ot)
      this.inputs[i].disconnect(), this.levels[i].disconnect();
  }
  /**
   * Soittaa kaikki raidat kohdasta at samalla ajoitushetkellä. Edelliset lähteet pysäytetään.
   * Palauttaa false, jos puskureita ei ole.
   */
  play(i = this.offset) {
    const o = this.duration;
    if (this.state !== "valmis" || o <= 0) return !1;
    this.stopSources();
    const u = Math.max(0, Math.min(i, o - 1e-3)), d = this.context.currentTime + gf, h = ot.map((p) => {
      const f = this.context.createBufferSource();
      return f.buffer = this.buffers[p], f.loop = this.looping, f.loopStart = 0, f.loopEnd = o, f.connect(this.inputs[p]), f.start(d, u), f;
    });
    return h[0].onended = () => {
      this.sources === h && (this.sources = null, this.offset = o, this.record("loppu"), this.onEnded?.());
    }, this.sources = h, this.when = d, this.offset = u, this.wrapped = this.looping, this.record("soitto", { when: d, offset: u, contextTime: this.context.currentTime }), !0;
  }
  /** Pysäyttää ja palauttaa kohdan, josta jatko alkaa. */
  pause() {
    const i = this.position();
    return this.sources && this.record("tauko", { at: i }), this.stopSources(), this.offset = i, i;
  }
  /** Kelaa kohtaan at. Soiva kappale jatkuu uudesta kohdasta, pysäytetty aloittaa siitä. */
  seek(i) {
    this.sources ? this.play(i) : this.offset = Math.max(0, Math.min(i, Math.max(0, this.duration - 1e-3))), this.record("kelaus", { at: i });
  }
  /** Loop kaikille raidoille yhtä aikaa: sama alku (0) ja loppu (yhteinen pituus). */
  setLoop(i) {
    this.looping = i, i && (this.wrapped = !0);
    for (const o of this.sources ?? []) o.loop = i;
  }
  /** Raidan taso (äänenvoimakkuus × tasapaino, 0 kun raita on pois). Soitto ei katkea. */
  setLevel(i, o) {
    const u = this.levels[i].gain;
    typeof u.setTargetAtTime == "function" ? u.setTargetAtTime(o, this.context.currentTime, xf) : u.value = o;
  }
  level(i) {
    return this.levels[i].gain.value;
  }
  /** Aikajanan kohta kontekstin kellon hetkellä c (renderöinnin aika). */
  position(i = this.context.currentTime) {
    if (!this.sources) return this.offset;
    const o = this.duration, u = Math.max(0, i - this.when), d = this.offset + u;
    return o <= 0 ? d : this.wrapped ? d % o : Math.min(d, o);
  }
  /**
   * Kuuluva kohta nyt. AudioContext.currentTime on renderöinnin aika, ei kaiuttimen: getOutputTimestamp kertoo,
   * mikä kontekstin hetki on parhaillaan ulostulossa. Ilman sitä vähennetään ilmoitetut viiveet.
   */
  audiblePosition(i = this.now()) {
    const o = this.context.getOutputTimestamp?.();
    let u;
    return o && typeof o.contextTime == "number" && typeof o.performanceTime == "number" && o.contextTime > 0 ? u = o.contextTime + (i - o.performanceTime) / 1e3 : u = this.context.currentTime - (this.context.outputLatency ?? 0) - (this.context.baseLatency ?? 0), this.position(Math.min(u, this.context.currentTime));
  }
  stopSources() {
    const i = this.sources;
    this.sources = null;
    for (const o of i ?? []) {
      o.onended = null;
      try {
        o.stop();
      } catch {
      }
      o.disconnect();
    }
  }
}
function Lk(s) {
  const i = globalThis.navigator?.audioSession;
  i && i.type !== "playback" && (i.type = "playback");
  const o = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!o) throw new Error("Web Audio API puuttuu");
  if (s)
    try {
      return new o(s);
    } catch {
    }
  return new o();
}
const ci = 1152, Rk = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320], Ok = [44100, 48e3, 32e3];
function Aa(s) {
  let i = 0;
  for (s.length >= 10 && s[0] === 73 && s[1] === 68 && s[2] === 51 && (i = 10 + ((s[6] & 127) << 21 | (s[7] & 127) << 14 | (s[8] & 127) << 7 | s[9] & 127) + (s[5] & 16 ? 10 : 0)); i + 4 <= s.length && !(s[i] === 255 && (s[i + 1] & 224) === 224); ) i++;
  const o = [];
  let u = 0, d = 0, h = i;
  for (; h + 4 <= s.length && s[h] === 255 && (s[h + 1] & 224) === 224; ) {
    const T = s[h + 1], b = s[h + 2], w = s[h + 3];
    if ((T >> 3 & 3) !== 3 || (T >> 1 & 3) !== 1) throw new Error("MP3: vain MPEG-1 Layer III on tuettu");
    const N = Rk[b >> 4 & 15] * 1e3, F = Ok[b >> 2 & 3];
    if (!N || !F) throw new Error(`MP3: virheellinen kehysotsake kohdassa ${h}`);
    const _ = Math.floor(144 * N / F) + (b >> 1 & 1);
    if (h + _ > s.length) break;
    if (!u)
      u = F, d = (w >> 6 & 3) === 3 ? 1 : 2;
    else if (F !== u) throw new Error("MP3: näytetaajuus vaihtuu kesken tiedoston");
    o.push(h), h += _;
  }
  if (!o.length) throw new Error("MP3: kehyksiä ei löytynyt");
  let p = 0, f = 0, k = 0;
  const S = o[0] + 4 + (d === 1 ? 17 : 32), v = String.fromCharCode(...s.subarray(S, S + 4));
  if (v === "Xing" || v === "Info") {
    k = 1;
    const T = s[S + 7], b = S + 8 + (T & 1 ? 4 : 0) + (T & 2 ? 4 : 0) + (T & 4 ? 100 : 0) + (T & 8 ? 4 : 0), w = s.subarray(b, b + 4);
    if (b + 24 <= o[1] && w.length === 4 && [...w].every((N) => N >= 32 && N < 127)) {
      const N = b + 21;
      p = s[N] << 4 | s[N + 1] >> 4, f = (s[N + 1] & 15) << 8 | s[N + 2];
    }
  }
  const y = Uint32Array.from(o.slice(k)), j = Math.max(0, y.length * ci - p - f);
  return { sampleRate: u, channels: d, frameOffsets: y, dataEnd: h, delay: p, padding: f, length: j };
}
const jf = 2, $k = 1;
function Fl(s, i, o, u = 0) {
  const d = i + s.delay, h = d + o, p = s.frameOffsets.length, f = Math.max(0, Math.floor(d / ci) - jf), k = Math.min(p, Math.ceil(h / ci) + $k + Math.ceil(u / ci));
  return { firstFrame: f, endFrame: k, skip: d - f * ci + u };
}
const Fk = [[100, 160], [1e3, 1060], [3e3, 3060]], ir = 2048, Dn = (jf + 1) * ci;
function Sf(s) {
  if (s.length < Dn + ir) return !1;
  let i = 0;
  for (let o = Dn; o < Dn + ir; o++) i += s[o] * s[o];
  return i >= 1e-6;
}
function Ik(s, i, o, u, d = 1700) {
  if (!Sf(i)) return null;
  const h = u * ci - o.delay;
  let p = null, f = 1 / 0;
  for (let S = 0; S <= d; S++) {
    const v = h - S;
    if (v + Dn < 0 || v + Dn + ir > s.length) continue;
    let y = 0;
    for (let j = Dn; j < Dn + ir && y < f; j += 8) y = Math.max(y, Math.abs(i[j] - s[v + j]));
    y < f && (f = y, p = S);
  }
  if (p === null) return null;
  let k = 0;
  for (let S = Dn; S < Dn + ir; S++) k = Math.max(k, Math.abs(i[S] - s[h - p + S]));
  return k <= 1e-4 ? p : null;
}
function Il(s, i, o) {
  const u = o.endFrame < i.frameOffsets.length ? i.frameOffsets[o.endFrame] : i.dataEnd;
  return s.slice(i.frameOffsets[o.firstFrame], u);
}
function Dk(s, i) {
  let o;
  try {
    o = Aa(s);
  } catch {
    return null;
  }
  const u = o.frameOffsets;
  if (u.length < 3) return null;
  const d = u[0], h = u[1] - d;
  for (let k = 2; k < u.length; k++) if (u[k] - u[k - 1] !== h) return null;
  const p = Math.floor((i - d) / h);
  if (p < u.length || d + p * h !== i) return null;
  const f = new Uint32Array(p);
  for (let k = 0; k < p; k++) f[k] = d + k * h;
  return { ...o, frameOffsets: f, dataEnd: i, length: Math.max(0, p * ci - o.delay - o.padding) };
}
function zk(s) {
  return s.length < 10 ? null : (s[0] === 73 && s[1] === 68 && s[2] === 51 ? 10 + ((s[6] & 127) << 21 | (s[7] & 127) << 14 | (s[8] & 127) << 7 | s[9] & 127) + (s[5] & 16 ? 10 : 0) : 0) + 5 * 1441;
}
class Bk {
  constructor(i, o) {
    this.total = i, this.now = o, this.bytes = new Uint8Array(i);
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
    const o = i.getReader();
    try {
      for (; ; ) {
        const { value: u, done: d } = await o.read();
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
        o.releaseLock();
      } catch {
      }
    }
  }
  /** Ennustettu rakenne käyttöön: tarkistetaan jo saapuneet ja jatkossa saapuvat kehysotsakkeet. */
  useLayout(i) {
    this.layout = i;
    const o = i.frameOffsets[0];
    this.headerKey = this.bytes[o + 1] << 8 | this.bytes[o + 2] & 254, this.verify();
  }
  verify() {
    const i = this.layout;
    if (!i || this.error) return;
    const o = i.frameOffsets;
    for (; this.verified < o.length && o[this.verified] + 4 <= this.received; ) {
      const u = o[this.verified], d = this.bytes[u + 1] << 8 | this.bytes[u + 2] & 254;
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
      for (const o of this.waiters.splice(0)) o.reject(i);
    }
  }
  notify() {
    const i = this.waiters.filter((o) => this.done || this.received >= o.need);
    this.waiters = this.waiters.filter((o) => !i.includes(o));
    for (const o of i) o.resolve();
  }
  /** Valmis, kun tavut [0, end) ovat saapuneet (ja ennustetun rakenteen kehysotsakkeet tarkistettu niiltä osin). */
  waitForBytes(i) {
    return this.error ? Promise.reject(this.error) : this.done || this.received >= i ? Promise.resolve() : new Promise((o, u) => this.waiters.push({ need: i, resolve: o, reject: u }));
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
const Nh = 16, Vk = 0.8;
function Kk(s, i) {
  if (s.done) return !0;
  const o = s.layout;
  if (!o || i <= 0) return !1;
  const u = o.frameOffsets[0], d = (s.total - u) / i, h = u + d * Nh + 4 * (o.frameOffsets[1] - u);
  if (s.received < h) return !1;
  const p = s.rate();
  if (p === null) return !1;
  const f = s.total - Vk * p * Math.max(0, i - Nh);
  return s.received >= f;
}
const Uk = 10, Ch = 4, Hk = 6, Gk = 400, Wk = 256, Qk = 480;
class Th extends Error {
}
class Mh extends Error {
}
const wf = (s, i) => i ? wf(i, s % i) : s, bh = (s, i) => i < s.frameOffsets.length ? s.frameOffsets[i] : s.dataEnd;
class qs {
  constructor(i, o = {}) {
    this.context = i, this.fetchImpl = o.fetch ?? ((h, p) => fetch(h, p)), this.now = o.now ?? (() => performance.now()), this.setIntervalImpl = o.setInterval ?? ((h, p) => setInterval(h, p)), this.clearIntervalImpl = o.clearInterval ?? ((h) => clearInterval(h)), this.decoderFor = o.decoderFor, this.progressive = o.progressive ?? !1, this.sleep = o.sleep ?? ((h) => new Promise((p) => setTimeout(p, h)));
    const u = {}, d = {};
    for (const h of ot)
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
  record(i, o = {}) {
    this.events.push({ kind: i, ms: Math.round(this.now()), ...o }), this.events.length > 500 && this.events.shift();
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
    return this.slots.reduce((i, o) => i + ot.reduce((u, d) => {
      const h = o.buffers[d];
      return u + h.length * h.numberOfChannels * 4;
    }, 0), 0);
  }
  /** Ladatut pakatut MP3-tavut. */
  get compressedBytes() {
    return this.data ? ot.reduce((i, o) => i + this.data[o].bytes.byteLength, 0) : 0;
  }
  /** Lataa yhden version kolme MP3:a ja purkaa ensimmäisen palan valmiiksi. Edellinen versio vapautetaan ensin. */
  async load(i) {
    this.release();
    const o = ++this.loadToken, u = new AbortController();
    this.controller = u;
    const d = () => o === this.loadToken;
    this.error = "", this.errorKind = null, this.setState("ladataan");
    const h = this.now();
    this.record("lataus-alku");
    try {
      const p = {};
      if (this.progressive) {
        const j = await this.loadProgressive(i, u, h);
        if (!d()) return "peruttu";
        Object.assign(p, j);
      } else {
        const j = await Promise.all(ot.map(async (T) => {
          const b = await this.fetchImpl(i[T], { signal: u.signal });
          if (!b.ok) throw new Error(`${T}: HTTP ${b.status}`);
          const w = new Uint8Array(await b.arrayBuffer());
          return this.record("ladattu", { track: T, bytes: w.byteLength, kesto: Math.round(this.now() - h) }), w;
        }));
        if (!d()) return "peruttu";
        ot.forEach((T, b) => {
          p[T] = { bytes: j[b], layout: Aa(j[b]) };
        }), this.setState("puretaan");
      }
      if (new Set(ot.map((j) => p[j].layout.sampleRate)).size !== 1) throw new Error("Raitojen näytetaajuudet eroavat");
      const k = p.backing.layout.sampleRate, S = Math.max(...ot.map((j) => p[j].layout.channels));
      (k !== this.rate || S !== this.channels) && (this.slots = []), this.rate = k, this.channels = S;
      const v = this.grid;
      if (v > Qk) throw new Mh(`Äänikontekstin näytetaajuus ${this.context.sampleRate} Hz ei sovi ${k} Hz:n raitojen näytetarkkaan paloitukseen`);
      if (this.length = Math.floor(Math.min(...ot.map((j) => p[j].layout.length)) / v) * v, this.data = p, this.gen++, k !== this.context.sampleRate && this.record("naytetaajuus-ero", { mp3: k, konteksti: this.context.sampleRate, ruudukko: v }), this.decoderDelay === null && await this.calibrate(p, d), !d()) return "peruttu";
      const y = await this.obtain(0);
      if (!d()) return "peruttu";
      if (!y) throw new Error("Puskurialtaassa ei ole tilaa");
      if (this.streams.length) {
        for (; !this.streams.every((j) => Kk(j, this.duration)); ) {
          const j = this.streams.find((T) => T.error);
          if (j) throw j.error;
          if (await this.sleep(100), !d()) return "peruttu";
        }
        this.record("alku-valmis", { tavut: this.streams.map((j) => j.received), kesto: Math.round(this.now() - h) });
      }
      return this.controller = null, this.record("valmis", {
        kesto: Math.round(this.now() - h),
        bytes: this.bufferBytes,
        compressed: this.compressedBytes,
        duration: this.duration,
        sampleRate: k
      }), this.setState("valmis"), "valmis";
    } catch (p) {
      return d() ? (this.controller = null, this.abortStreams(), this.data = null, this.length = 0, this.error = p instanceof Error ? p.message : String(p), this.errorKind = p instanceof Th ? "kalibrointi" : p instanceof Mh ? "naytetaajuus" : "lataus", this.record("virhe", { message: this.error, laji: this.errorKind }), this.setState("virhe"), "virhe") : "peruttu";
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
    for (const o of this.slots)
      o.ready = !1, o.gen = -1;
    i && this.record("vapautettu"), this.state !== "tyhja" && this.setState("tyhja");
  }
  /** Vapauttaa kaiken, myös altaan ja raitojen tasosolmut. AudioContextin sulkee omistaja. */
  dispose() {
    this.release(), this.slots = [];
    for (const i of ot)
      this.inputs[i].disconnect(), this.levels[i].disconnect();
  }
  /**
   * Soittaa kaikki raidat kohdasta at. Jos kohdan pala on valmiina, ääni alkaa START_LEAD_SECONDS:n päästä,
   * muuten heti kun pala on purettu. Palauttaa false, jos kappaletta ei ole ladattu.
   */
  play(i = this.offset) {
    if (this.state !== "valmis" || this.length <= 0) return !1;
    this.stopSession();
    const o = this.grid, u = Math.max(0, Math.min(Math.round(i * this.rate / o) * o, this.length - o));
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
    const o = this.session;
    if (!o) return;
    if (i) {
      o.ending = !1, this.pump();
      return;
    }
    const u = this.context.currentTime * this.context.sampleRate, d = o.items.findIndex((h, p) => p > 0 && h.timelineStart === 0 && h.frame > u);
    if (d > 0) {
      const h = o.items.splice(d);
      for (const p of h) this.stopItem(p);
      o.nextFrame = h[0].frame, o.nextTimeline = this.length;
    }
  }
  /** Raidan taso (äänenvoimakkuus × tasapaino, 0 kun raita on pois). Soitto ei katkea. */
  setLevel(i, o) {
    const u = this.levels[i].gain;
    typeof u.setTargetAtTime == "function" ? u.setTargetAtTime(o, this.context.currentTime, xf) : u.value = o;
  }
  level(i) {
    return this.levels[i].gain.value;
  }
  /** Aikajanan kohta kontekstin kellon hetkellä contextTime: se pala, jonka ajastettu alku on viimeksi ohitettu. */
  position(i = this.context.currentTime) {
    const o = this.session;
    if (!o || !o.items.length) return this.offset;
    const u = i * this.context.sampleRate;
    let d = o.items[0];
    for (const p of o.items)
      if (p.frame <= u) d = p;
      else break;
    if (u <= d.frame) return d.timelineStart / this.rate;
    const h = Math.min((u - d.frame) * this.rate / this.context.sampleRate, d.length);
    return Math.min(d.timelineStart + h, this.length) / this.rate;
  }
  /** Kuuluva kohta nyt (kuten D1): getOutputTimestamp, tai kontekstin kello miinus ilmoitetut viiveet. */
  audiblePosition(i = this.now()) {
    const o = this.context.getOutputTimestamp?.();
    let u;
    return o && typeof o.contextTime == "number" && typeof o.performanceTime == "number" && o.contextTime > 0 ? u = o.contextTime + (i - o.performanceTime) / 1e3 : u = this.context.currentTime - (this.context.outputLatency ?? 0) - (this.context.baseLatency ?? 0), this.position(Math.min(u, this.context.currentTime));
  }
  /** Purkaa aikajanan näytteet [start, start + length) uusiin taulukoihin (testejä ja tarkistuksia varten, ei altaaseen). */
  async readRange(i, o, u) {
    const d = this.data?.[i];
    if (!d) throw new Error("Kappaletta ei ole ladattu");
    const h = Fl(d.layout, o, u, this.decoderDelay ?? 0);
    await d.ready?.(bh(d.layout, h.endFrame));
    const p = await this.decoder().decodeAudioData(Il(d.bytes, d.layout, h).buffer);
    return Array.from({ length: p.numberOfChannels }, (f, k) => p.getChannelData(k).slice(h.skip, h.skip + u));
  }
  /**
   * KOKEILU (ensilataus): käynnistää raitojen virtalatauksen ja palauttaa rakenteen heti, kun alkutavut riittävät
   * ennustukseen. Jos ennustus ei ole varma (tai virtaa ei ole), raita ladataan kokonaan ennen jäsennystä.
   */
  async loadProgressive(i, o, u) {
    const d = new AbortController();
    this.streamController = d, o.signal.addEventListener("abort", () => d.abort(), { once: !0 });
    const h = [];
    this.streams = h;
    const p = await Promise.all(ot.map(async (f) => {
      const k = await this.fetchImpl(i[f], { signal: d.signal });
      if (!k.ok) throw new Error(`${f}: HTTP ${k.status}`);
      const S = Number(k.headers.get("Content-Length"));
      if (!k.body || !Number.isSafeInteger(S) || S <= 0) {
        const T = new Uint8Array(await k.arrayBuffer());
        return this.record("ladattu", { track: f, bytes: T.byteLength, kesto: Math.round(this.now() - u), virta: !1 }), [f, { bytes: T, layout: Aa(T) }];
      }
      const v = new Bk(S, this.now);
      h.push(v), v.run(k.body).then(() => {
        v.done && this.record("ladattu", { track: f, bytes: S, kesto: Math.round((v.doneAt ?? this.now()) - u), virta: !0 });
      }), await v.waitForBytes(10);
      const y = Math.min(S, zk(v.bytes.subarray(0, v.received)) ?? S);
      await v.waitForBytes(y), this.record("ensitavut", { track: f, kesto: Math.round((v.firstByteAt ?? this.now()) - u) });
      let j = Dk(v.bytes.subarray(0, Math.max(y, v.received)), S);
      if (j || (this.record("virta-ei-ennustetta", { track: f }), await v.waitForBytes(S), j = Aa(v.bytes)), v.useLayout(j), v.error) throw v.error;
      return [f, { bytes: v.bytes, layout: j, ready: (T) => v.waitForBytes(T), has: (T) => v.has(T) }];
    }));
    return Object.fromEntries(p);
  }
  abortStreams() {
    this.streamController?.abort(), this.streamController = null, this.streams = [];
  }
  setWaiting(i) {
    this.waiting !== i && (this.waiting = i, this.record(i ? "odottaa-latausta" : "lataus-ehti"), this.onWaitingChange?.(i));
  }
  /** Ladattu osuus (0…1) virtalatauksessa; 1, kun kaikki on ladattu tai virtaa ei käytetä. */
  get downloadProgress() {
    if (!this.streams.length) return this.data ? 1 : 0;
    const i = this.streams.reduce((o, u) => o + u.total, 0);
    return this.streams.reduce((o, u) => o + u.received, 0) / i;
  }
  /**
   * Mittaa kerran, miten selaimen dekooderi kohdistaa raakakehysten purun aikajanaan (Apple 0, Chromiumin FFmpeg 529
   * näytettä). Kokeillaan ikkunoita ja raitoja, kunnes löytyy ääntä ja bittitarkka vastaavuus. Jos ei löydy, lataus
   * päättyy hallittuun virheeseen eikä viivettä arvata (väärä arvo siirtäisi koko kappaleen).
   */
  async calibrate(i, o) {
    const u = this.decoder(), d = [], h = [];
    for (const p of ot) {
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
      if (await i[p].ready?.(v.frameOffsets[k]), !o()) return;
      const y = await u.decodeAudioData(Il(S, v, { firstFrame: f, endFrame: k }).buffer);
      if (!o()) return;
      if (!Sf(y.getChannelData(0))) {
        d.push(`${p}@${f}: hiljainen`);
        continue;
      }
      const j = await u.decodeAudioData(S.slice(0, v.frameOffsets[k]).buffer);
      if (!o()) return;
      const T = Ik(j.getChannelData(0), y.getChannelData(0), v, f);
      if (T !== null) {
        this.decoderDelay = T, this.record("kalibroitu", { track: p, kehys: f, dekooderiviive: T });
        return;
      }
      d.push(`${p}@${f}: ei bittitarkkaa vastaavuutta`);
    }
    throw this.record("kalibrointi-epaonnistui", { yritykset: d }), new Th("Selaimen MP3-purkua ei voitu kohdistaa aikajanaan");
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
    const i = this.slots.filter((u) => u.users === 0 && !u.filling), o = i.find((u) => !u.ready || u.gen !== this.gen);
    if (o) return o;
    if (i.length && this.slots.length >= Ch) return i.reduce((u, d) => u.used <= d.used ? u : d);
    if (this.slots.length < Ch) {
      const u = {};
      for (const h of ot) u[h] = this.context.createBuffer(this.channels, this.segmentLength, this.rate);
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
    const o = this.gen, u = this.slots.find((S) => S.ready && S.gen === o && i >= S.start && i < S.start + S.length);
    if (u)
      return u.used = ++this.useCounter, Promise.resolve(u);
    const d = this.pending.find((S) => S.gen === o && i >= S.start && i < S.start + S.length);
    if (d) return d.promise;
    const h = this.data, p = this.freeSlot();
    if (!p || !h) return Promise.resolve(null);
    const f = Math.min(this.segmentLength, this.length - i), k = { gen: o, start: i, length: f, promise: Promise.resolve(null) };
    return k.promise = this.fill(p, h, o, i, f).finally(() => {
      this.pending = this.pending.filter((S) => S !== k);
    }), this.pending.push(k), k.promise;
  }
  async fill(i, o, u, d, h) {
    Object.assign(i, { gen: u, start: d, length: h, ready: !1, filling: !0 });
    const p = this.now();
    try {
      const f = this.decoder(), S = ot.map((y) => Fl(o[y].layout, d, h, this.decoderDelay ?? 0)).map((y, j) => bh(o[ot[j]].layout, y.endFrame));
      if (ot.some((y, j) => o[y].has && !o[y].has(S[j]))) {
        this.session && this.setWaiting(!0);
        try {
          await Promise.all(ot.map((y, j) => o[y].ready?.(S[j])));
        } catch (y) {
          if (u !== this.gen)
            return i.filling = !1, i.gen = -1, null;
          throw y;
        }
        this.session && this.setWaiting(!1);
      }
      const v = await Promise.all(ot.map(async (y) => {
        const { bytes: j, layout: T } = o[y], b = Fl(T, d, h, this.decoderDelay ?? 0), w = await f.decodeAudioData(Il(j, T, b).buffer);
        return { track: y, buffer: w, plan: b };
      }));
      if (i.filling = !1, u !== this.gen)
        return i.gen = -1, null;
      for (const { track: y, buffer: j, plan: T } of v) {
        const b = i.buffers[y];
        for (let w = 0; w < b.numberOfChannels; w++) {
          const N = j.getChannelData(Math.min(w, j.numberOfChannels - 1)).subarray(T.skip, T.skip + h);
          b.copyToChannel(N, w, 0), N.length < h && (b.copyToChannel(new Float32Array(h - N.length), w, N.length), this.record("pala-lyhyt", { track: y, start: d, puuttuu: h - N.length }));
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
        let o = i.nextTimeline;
        if (o >= this.length) {
          if (!this.looping) {
            i.ending = !0, this.obtain(0).catch(() => this.record("alku-esipurku-virhe"));
            return;
          }
          o = 0;
        }
        const u = await this.obtain(o);
        if (this.session !== i) return;
        if (!u) {
          this.record("allas-taynna");
          return;
        }
        if (o === 0 && i.nextTimeline >= this.length && !this.looping) {
          i.ending = !0;
          return;
        }
        this.schedule(i, u, o);
      }
    } catch (i) {
      this.fail(i);
    } finally {
      this.pumping = !1, this.pumpQueued && (this.pumpQueued = !1, this.pump());
    }
  }
  schedule(i, o, u) {
    const d = this.context.sampleRate, h = u - o.start, p = o.length - h, f = Math.ceil((this.context.currentTime + gf) * d);
    let k = i.nextFrame ?? f;
    i.nextFrame !== null && i.nextFrame < Math.ceil(this.context.currentTime * d) + Wk && (this.record("alivuoto", { myohassa: Math.round((this.context.currentTime * d - i.nextFrame) / d * 1e3) }), k = f);
    const S = k / d, v = Math.round(p * d / this.rate), y = ot.map((T) => {
      const b = this.context.createBufferSource();
      return b.buffer = o.buffers[T], b.connect(this.inputs[T]), b.start(S, h / this.rate), b.stop((k + v) / d), b;
    }), j = { slot: o, frame: k, timelineStart: u, length: p, sources: y, done: !1 };
    o.users++, y[0].onended = () => this.finished(i, j), i.items.push(j), i.items.length === 1 ? this.record("soitto", { when: S, offset: u / this.rate, contextTime: this.context.currentTime }) : this.record("pala-ajastettu", { when: S, offset: u / this.rate, pituus: p / this.rate }), i.nextFrame = k + v, i.nextTimeline = u + p;
  }
  stopItem(i) {
    if (!i.done) {
      i.done = !0, i.slot.users = Math.max(0, i.slot.users - 1);
      for (const o of i.sources) {
        o.onended = null;
        try {
          o.stop();
        } catch {
        }
        o.disconnect();
      }
    }
  }
  finished(i, o) {
    if (o.done) return;
    o.done = !0, o.slot.users = Math.max(0, o.slot.users - 1);
    for (const d of o.sources)
      d.onended = null, d.disconnect();
    if (this.session !== i) return;
    const u = i.items.indexOf(o);
    if (u > 0 && i.items.splice(0, u), i.ending && i.items[i.items.length - 1] === o) {
      this.stopSession(), this.offset = this.duration, this.record("loppu"), this.onEnded?.();
      return;
    }
    this.pump();
  }
  stopSession() {
    const i = this.session;
    this.session = null, this.setWaiting(!1), this.timer !== null && (this.clearIntervalImpl(this.timer), this.timer = null);
    for (const o of i?.items ?? []) this.stopItem(o);
  }
  fail(i) {
    this.stopSession(), this.error = i instanceof Error ? i.message : String(i), this.record("virhe", { message: this.error }), this.setState("virhe"), this.onError?.(this.error);
  }
}
const Ef = typeof location < "u" ? new URLSearchParams(location.search).get("soitin") : null, ur = Ef === "d2", In = Ef === "d1" || ur, Yk = typeof location < "u" && Number(new URLSearchParams(location.search).get("naytetaajuus")) || 48e3, Nf = typeof location < "u" ? new URLSearchParams(location.search) : new URLSearchParams(), Jk = ur && Nf.get("lataus") !== "koko", _h = ur && Nf.get("diag") === "1";
function Xk(s) {
  const i = s.events, o = i.find((f) => f.kind === "lataus-alku")?.ms;
  if (o === void 0) return "Ei latausta vielä.";
  const u = [`ladattu ${Math.round(s.downloadProgress * 100)} %${s.waiting ? ", odottaa latausta" : ""}`], d = i.find((f) => f.kind === "pala"), h = i.find((f) => f.kind === "soitto");
  for (const f of i)
    !["ensitavut", "kalibroitu", "alku-valmis", "valmis", "ladattu", "virhe", "odottaa-latausta", "alivuoto"].includes(f.kind) && f !== d && f !== h || u.push(`${String(f.ms - o).padStart(6)} ms ${f.kind}${f.track ? " " + f.track : ""}${typeof f.kesto == "number" && f.kind === "pala" ? ` (purku ${f.kesto} ms)` : ""}`);
  const p = typeof performance < "u" && performance.getEntriesByType ? performance.getEntriesByType("resource") : [];
  for (const f of p.filter((k) => /\.mp3(\?|$)/.test(k.name)).slice(-6))
    u.push(`${f.name.split("/").pop()}: ${f.nextHopProtocol || "?"} ${Math.round(f.transferSize / 1024)} kt, vastaus ${Math.round(f.responseStart - f.startTime)} ms, kesto ${Math.round(f.duration)} ms`);
  return u.join(`
`);
}
let Cf = null;
function Zk() {
  return vk(new URLSearchParams(location.search).get("kappale")) ?? Cf ?? pk;
}
function qk(s) {
  Cf = s;
  const i = new URL(location.href);
  vf(i.searchParams.get("kappale")) && (i.searchParams.set("kappale", kk(s)), history.replaceState(history.state, "", i.pathname + i.search + i.hash));
}
const ey = {
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
}, Ah = 1e-3;
function Ph(s, i) {
  try {
    s.currentTime = i;
  } catch {
  }
}
function Lh(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const i = Math.floor(s);
  return String(Math.floor(i / 60)) + ":" + String(i % 60).padStart(2, "0");
}
function ty({ onBack: s }) {
  const i = A.useRef(null), o = A.useRef(null), u = A.useRef(null), d = A.useRef(0), h = A.useRef(new sf()), p = A.useRef(null), f = A.useRef(null), k = A.useRef(0), [S, v] = A.useState("tyhja"), [y, j] = A.useState(!1), [T, b] = A.useState("");
  A.useEffect(() => {
    if (!_h) return;
    const z = setInterval(() => {
      const le = f.current?.player;
      le instanceof qs && b(Xk(le));
    }, 500);
    return () => clearInterval(z);
  }, []);
  const [w, N] = A.useState(Zk), F = ey[w], [_, K] = A.useState(!1), [B, V] = A.useState(!0), [D, $] = A.useState(!0), [O, se] = A.useState(!1), [ee, Ee] = A.useState(!1), [Te, Z] = A.useState(!1), [ce, G] = A.useState(ov), [oe] = A.useState(() => jv()), re = A.useRef(null), [Y, ae] = A.useState(""), [te, E] = A.useState(0), [x, ne] = A.useState(0), [fe, de] = A.useState("");
  function H(z = !1, le, ue) {
    const je = i.current;
    if (je)
      for (const Ce of [o.current, u.current])
        Ce && (!le || Ce === le) && h.current.align(je, Ce, z, void 0, ue);
  }
  function U() {
    return [
      ["backing", i.current, !0],
      ["guitar", o.current, B],
      ["vocals", u.current, D]
    ];
  }
  function J(z = ce, le) {
    if (In) {
      const ue = f.current?.player;
      if (ue) for (const [je, , Ce] of U()) ue.setLevel(je, Tl(je, z, le?.[je] ?? Ce));
      return;
    }
    for (const [ue, je, Ce] of U()) {
      if (!je) continue;
      const Ue = Tl(ue, z, le?.[ue] ?? Ce);
      if (oe === "webaudio" && re.current?.routed(je))
        re.current.setLevel(je, Ue);
      else
        try {
          je.volume = Tl(ue, z);
        } catch {
        }
    }
  }
  function X(z) {
    G(z), lv(z), J(z);
  }
  function me() {
    if (In) {
      const z = f.current?.player;
      z?.playing && E(z.pause());
    }
    d.current++, i.current?.pause(), o.current?.pause(), u.current?.pause(), K(!1);
  }
  function Me(z) {
    if (z !== w) {
      In && (k.current++, f.current?.player.release()), p.current = null, me();
      for (const le of [i.current, o.current, u.current])
        if (le)
          try {
            le.currentTime = 0;
          } catch {
          }
      E(0), ne(0), de(""), N(z), qk(z);
    }
  }
  function ye(z) {
    if (In) {
      const je = f.current?.player, Ce = Math.max(0, Math.min(z, x > 0 ? x : z));
      E(Ce), je?.state === "valmis" ? je.seek(Ce) : p.current = Ce;
      return;
    }
    const le = i.current;
    if (!le || !Number.isFinite(z)) return;
    const ue = Math.max(0, Math.min(z, Number.isFinite(le.duration) ? le.duration : z));
    p.current = ue, E(ue), Ph(le, ue);
  }
  function ge(z) {
    const le = p.current;
    if (le === null || z !== i.current || z.seeking) return;
    const ue = Number.isFinite(z.duration) ? Math.min(le, z.duration) : le;
    if (ue !== le && (p.current = ue, E(ue)), Math.abs(z.currentTime - ue) < Ah) return;
    const je = z.seekable;
    for (let Ce = 0; Ce < je.length; Ce++)
      if (je.start(Ce) <= ue && ue <= je.end(Ce)) {
        Ph(z, ue);
        return;
      }
  }
  function Ne(z) {
    if (z !== i.current) return;
    const le = p.current;
    if (le === null)
      E(z.currentTime);
    else if (z.readyState >= 1 && !z.seeking && Math.abs(z.currentTime - le) < Ah) {
      p.current = null, H(!0);
      return;
    }
    z.paused || H();
  }
  function $e() {
    if (f.current) return f.current;
    try {
      const z = Lk(ur ? { sampleRate: Yk } : void 0), le = ur ? new qs(z, { progressive: Jk }) : new Pk(z);
      return le.onStateChange = v, le instanceof qs && (le.onWaitingChange = j), le instanceof qs && (le.onError = (ue) => {
        K(!1), E(le.position()), de(`Toisto keskeytyi (${ue}). Paina Soita uudelleen.`);
      }), le.onEnded = () => {
        K(!1), E(le.duration);
      }, z.onstatechange = () => {
        z.state !== "running" && le.playing && (E(le.pause()), K(!1));
      }, f.current = { context: z, player: le }, window.__kappaleD1 = { context: z, player: le }, f.current;
    } catch (z) {
      return de("Web Audio ei ole käytettävissä tässä selaimessa. " + (z instanceof Error ? z.message : "")), null;
    }
  }
  async function be() {
    const z = $e();
    if (!z) return;
    const { context: le, player: ue } = z;
    if (_) {
      E(ue.pause()), K(!1);
      return;
    }
    if (ue.state === "ladataan" || ue.state === "puretaan") {
      k.current++, ue.cancel();
      return;
    }
    const je = le.state === "running" ? Promise.resolve() : le.resume();
    de("");
    const Ce = ++k.current;
    if (ue.state !== "valmis") {
      const He = await ue.load({ backing: F.backing, guitar: F.guitar, vocals: F.vocals });
      if (Ce !== k.current) return;
      if (He === "virhe") {
        const mt = ue instanceof qs ? ue.errorKind : "lataus";
        de(mt === "kalibrointi" || mt === "naytetaajuus" ? `Kokeilusoitin ei voi soittaa tässä selaimessa (${ue.error}). Käytä tavallista soitinta.` : "Kappaleen lataus epäonnistui. Tarkista yhteys ja paina Soita uudelleen.");
        return;
      }
      if (He !== "valmis") return;
      ne(ue.duration);
    }
    try {
      await je;
    } catch {
    }
    if (Ce !== k.current) return;
    if (le.state !== "running") {
      de(`Ääni ei käynnistynyt (Web Audio: ${le.state}). Paina Soita uudelleen.`);
      return;
    }
    J(), ue.setLoop(O), p.current !== null && (ue.seek(p.current), p.current = null);
    let Ue = ue.position();
    if (Ue >= ue.duration - 0.05 && (Ue = 0), !ue.play(Ue)) {
      de("Toisto epäonnistui. Paina Soita uudelleen.");
      return;
    }
    E(Ue), K(!0);
  }
  async function Ve() {
    if (In) {
      await be();
      return;
    }
    const z = i.current, le = o.current, ue = u.current;
    if (!z || !le || !ue) return;
    if (_) {
      me();
      return;
    }
    de("");
    const je = p.current ?? z.currentTime;
    if (Number.isFinite(z.duration) && je >= z.duration - 0.05 && ye(0), ge(z), oe === "webaudio") {
      const He = re.current ??= new Ev(), mt = He.unlock() && [z, le, ue].map((Et) => He.route(Et)).every(Boolean);
      ae(mt ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + He.lastError);
    }
    J(), le.muted = !B, ue.muted = !D, H(!0, void 0, cv);
    const Ce = ++d.current;
    B || le.pause(), D || ue.pause();
    const Ue = [z, ...B ? [le] : [], ...D ? [ue] : []];
    if (!nf(Ue)) {
      hv(Ue);
      const He = await fv(Ue, dv, () => Ce !== d.current);
      if (He === "ohitettu" || Ce !== d.current) return;
      if (He === "virhe") {
        me(), de("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
    }
    try {
      if (h.current.hold(performance.now() + eh), await Promise.all(Ue.map((He) => He.play())), Ce !== d.current) return;
      if (h.current.hold(performance.now() + eh), H(), K(!0), oe === "webaudio" && re.current?.routed(z)) {
        const He = re.current;
        setTimeout(() => {
          Ce === d.current && He.state !== "running" && de(`Ääni ei käynnistynyt (Web Audio: ${He.state}). Pysäytä ja soita uudelleen.${He.lastError ? " " + He.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (Ce !== d.current) return;
      me(), de("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function et(z, le, ue) {
    if (!z) return;
    if (z.muted = !le, !le) {
      z.pause();
      return;
    }
    !i.current || !_ || (H(!0, z), z.play().catch(() => de(ue + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function Je(z) {
    V(z), J(ce, { guitar: z }), et(o.current, z, "Kitararaita");
  }
  function tt(z) {
    $(z), J(ce, { vocals: z }), et(u.current, z, "Lauluraita");
  }
  return A.useEffect(() => {
    const z = () => {
      document.hidden && me();
    };
    return document.addEventListener("visibilitychange", z), () => {
      document.removeEventListener("visibilitychange", z), d.current++, i.current?.pause(), o.current?.pause(), u.current?.pause(), re.current?.close(), k.current++, f.current?.player.dispose(), f.current?.context.close().catch(() => {
      }), f.current = null, delete window.__kappaleD1;
    };
  }, []), A.useEffect(() => {
    J();
  }, [w]), A.useEffect(() => {
    f.current?.player.setLoop(O);
  }, [O]), A.useEffect(() => {
    if (!In || !_) return;
    let z = 0, le = "", ue = 0;
    const je = () => {
      const Ce = f.current?.player;
      if (Ce?.playing) {
        const Ue = Ce.audiblePosition(), He = lu(Ue, w), mt = `${He.sectionIndex}:${He.barIndex}:${He.beat}`, Et = performance.now();
        (mt !== le || Et - ue > 250) && (le = mt, ue = Et, E(Ue));
      }
      z = requestAnimationFrame(je);
    };
    return z = requestAnimationFrame(je), () => cancelAnimationFrame(z);
  }, [_, w]), /* @__PURE__ */ a.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
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
          value: w,
          onChange: (z) => Me(z.target.value),
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
          F.label,
          " · ",
          F.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          Ve();
        }, children: _ ? "■ Tauko" : S === "ladataan" || S === "puretaan" ? "■ Peruuta lataus" : "▶ Soita kappale" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: x > 0 ? x : 1,
            step: 0.1,
            value: Math.min(te, x > 0 ? x : 1),
            disabled: x <= 0,
            onChange: (z) => ye(Number(z.target.value))
          }
        ),
        /* @__PURE__ */ a.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Lh(te),
          " / ",
          Lh(x)
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: B,
              onChange: (z) => Je(z.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: D,
              onChange: (z) => tt(z.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: O,
              onChange: (z) => se(z.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "song-volume", "data-volume-mode": oe, children: [
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
              onChange: (z) => X(Number(z.target.value))
            }
          ),
          /* @__PURE__ */ a.jsxs("output", { "aria-hidden": "true", children: [
            ce,
            " %"
          ] })
        ] })
      ] }),
      Y && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: Y }),
      /* @__PURE__ */ a.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ a.jsxs("a", { href: F.download, download: F.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ a.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ a.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          F.label,
          ", koko kappale · ",
          F.downloadSize
        ] })
      ] }),
      fe && /* @__PURE__ */ a.jsx("p", { className: "backing-error", role: "alert", children: fe }),
      In && (S === "ladataan" || S === "puretaan") && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: S === "ladataan" ? "Ladataan kappaleen raitoja…" : "Valmistellaan raitoja soittoa varten…" }),
      In && y && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: "Ladataan kappaletta tähän kohtaan…" }),
      _h && /* @__PURE__ */ a.jsx("pre", { className: "tools-note", style: { whiteSpace: "pre-wrap", fontSize: "0.75rem" }, children: T }),
      !In && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: i,
            src: F.backing,
            preload: "metadata",
            loop: O,
            onLoadedMetadata: (z) => {
              z.currentTarget === i.current && (ne(z.currentTarget.duration), ge(z.currentTarget));
            },
            onProgress: (z) => ge(z.currentTarget),
            onCanPlay: (z) => ge(z.currentTarget),
            onTimeUpdate: (z) => Ne(z.currentTarget),
            onEnded: (z) => {
              z.currentTarget !== i.current || z.currentTarget.loop || (p.current = null, o.current?.pause(), u.current?.pause(), K(!1), E(z.currentTarget.duration));
            },
            onPause: (z) => {
              z.currentTarget === i.current && K(!1);
            },
            onError: () => de(F.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
          },
          w + "-backing"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: o,
            src: F.guitar,
            preload: "metadata",
            muted: !B,
            loop: O,
            onLoadedMetadata: () => {
              i.current?.paused && H(!0);
            },
            onError: () => de(F.label + ": kitararaita puuttuu tai ei lataudu.")
          },
          w + "-guitar"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: u,
            src: F.vocals,
            preload: "metadata",
            muted: !D,
            loop: O,
            onLoadedMetadata: () => {
              i.current?.paused && H(!0);
            },
            onError: () => de(F.label + ": lauluraita puuttuu tai ei lataudu.")
          },
          w + "-vocals"
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-chart-collapse", open: ee, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (z) => {
        z.preventDefault(), Ee((le) => !le);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ a.jsx(Tk, { version: w, position: te, loop: O, onSeek: ye })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-scales-collapse", open: Te, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (z) => {
        z.preventDefault(), Z((le) => !le);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ a.jsx(Ak, { open: Te })
    ] })
  ] });
}
const Zl = {
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
}, ql = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function ny(s, i, o, u) {
  if (u) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (s) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${ql(o)}. Vaihda laite Mikrofonin asetuksista.`,
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
  const o = s?.rms ?? 0, u = ds(o), d = (s?.peak ?? 0) >= 0.98 ? "clip" : o >= i ? "over" : "under";
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, u)),
      "aria-valuetext": `${Pa(Math.max(-60, u), 0)} desibeliä${o >= i ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meter-fill", style: { width: `${rh(o) * 100}%` } }),
        /* @__PURE__ */ a.jsx("div", { className: "meter-threshold", style: { left: `${rh(i) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function iy({ mic: s, frame: i, heard: o, s: u, now: d }) {
  const h = lf(s.phase, i), p = o && d - o.at < 1500 ? o : null, f = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${Fe(p.midi, u.flats, !0)} · ${Tf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : Zl[h];
  return /* @__PURE__ */ a.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ a.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: f }),
    s.phase === "on" && /* @__PURE__ */ a.jsx(Mf, { frame: i, threshold: u.minRms })
  ] });
}
function sy({ mic: s, frame: i, heard: o, accepted: u, now: d, s: h, change: p, devices: f, locked: k, calibrating: S, calibration: v, onTest: y, onStop: j, onCalibrate: T }) {
  const b = A.useId(), w = lf(s.phase, i), N = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", F = s.phase === "on", _ = o && d - o.at < 1500 ? o : null, K = _ && (w === "pitch" || w === "untuned"), B = F && (i?.peak ?? 0) >= 0.98, V = s.phase === "error" ? [] : ny(w, h, s.info, B), D = !h.device || f.some((O) => O.deviceId === h.device), $ = (O, se) => p({ ...h, [O]: se });
  return /* @__PURE__ */ a.jsxs("section", { className: "mic-panel", "aria-labelledby": `${b}-title`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ a.jsx("h2", { id: `${b}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ a.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : Zl[w],
      w === "pitch" && _ ? ` ${Fe(_.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: s.phase === "on" ? `Mikrofoni kuuntelee: ${ql(s.info)}.` : s.phase === "error" ? s.error : Zl[s.phase] }),
    s.phase === "off" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    F && /* @__PURE__ */ a.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ a.jsxs("dd", { "data-testid": "mic-device", children: [
          ql(s.info),
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
      /* @__PURE__ */ a.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ a.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: _ ? Fe(_.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-frequency", children: _ ? `${Pa(_.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-cents", children: _ ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          Tf(_.cents),
          " senttiä",
          /* @__PURE__ */ a.jsx("span", { className: `cents ${_.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ a.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, _.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-clarity", children: _ ? `${Math.round(_.clarity * 100)} %` : i?.clarity !== void 0 && w === "noise" ? `${Math.round(i.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    F && u && d - u.timestamp < 4e3 && /* @__PURE__ */ a.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Fe(u.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    V.length > 0 && F && /* @__PURE__ */ a.jsx("ul", { className: "mic-advice", children: V.map((O) => /* @__PURE__ */ a.jsx("li", { children: O }, O)) }),
    s.phase === "error" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
      N ? /* @__PURE__ */ a.jsx("button", { type: "button", onClick: j, children: "Lopeta testi" }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: h.input === "mic" && s.phase !== "on" ? "primary" : "", disabled: k, onClick: y, children: "Testaa mikrofoni" }),
      N && F && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: S, onClick: T, children: S ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    k && s.purpose !== "test" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", disabled: k, children: [
        /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsx("label", { htmlFor: `${b}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ a.jsxs("select", { id: `${b}-device`, value: h.device, onChange: (O) => $("device", O.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !D && /* @__PURE__ */ a.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              f.map((O, se) => /* @__PURE__ */ a.jsx("option", { value: O.deviceId, children: O.label || `Äänitulo ${se + 1}` }, O.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-rms`, children: [
              "Äänikynnys · ",
              Pa(ds(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (O) => $("minRms", Number(O.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (O) => $("clarity", Number(O.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (O) => $("stability", Number(O.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (O) => $("cents", Number(O.target.value)) })
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
const ry = (s) => s.mode === "scale" ? Ke.scaleNotes(Ke.SCALES[s.scale]) : bi[s.mode === "caged" ? "maj" : s.chord].tones, Rh = (s, i) => ry(s).find(([o]) => o === i)?.[1], bf = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", ay = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function oy(s, i) {
  return i.choices === "note" ? "Valitse sävelnimi." : i.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function ly(s, i, o, u, d) {
  return i.choices === "degree" ? `Oikein! ${sr(s.root, i.interval, i.degree)} on ${i.degree}. aste.` : bf(s) ? `Oikein! ${i.degree}. aste on ${sr(s.root, i.interval, i.degree)}.` : s.mode === "interval" ? `Oikein! ${Fe(i.reference, s.flats, !0)} → ${i.name} on ${rr[i.interval]} ${ay(i)}.` : s.mode === "notes" ? o === "board" && d ? `Oikein! ${Fe(d.midi, s.flats)} on ${Fh[d.string]}: ${_i(d.fret)}.` : `Oikein! Soitit sävelen ${Fe(u, s.flats, !0)}.` : `Oikein! Sävel oli ${i.name}.`;
}
function uy(s, i, o, u, d) {
  if (o === "note") return `Ei ${Fe(u, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${Rh(s, u) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = Qe(d.midi) === Qe(i.midi);
  if (s.mode === "notes")
    return d.string !== i.position.string ? `Tuo on ${en[d.string]}-kieli. Etsi sävel ${nu[i.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${i.name}.` : `Tuo on ${Fe(d.midi, s.flats)}. Etsi ${i.name}.`;
  if (bf(s)) {
    const p = Qe(d.midi - s.root), f = Rh(s, p), k = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return f ? h && i.check === "pitch" && d.midi !== i.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${i.name}.` : h ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${i.degree}. aste sen sisältä.` : `Tuo on ${sr(s.root, p, f)} eli ${f}. aste. Etsi ${i.degree}. aste.` : `Tuo on ${Fe(d.midi, s.flats)}, joka ei kuulu ${k}. Etsi ${i.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Fe(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function cy(s, i, o) {
  const u = Fe(o, s.flats, !0);
  return Qe(o) === Qe(i.midi) ? `Kuulin sävelen ${u}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${u}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function _f(s, i = !1) {
  const o = s.split(":"), u = (p) => Number(o[p]), d = (...p) => p.every((f) => Number.isInteger(u(f))), h = (p, f) => en[p] ? `${en[p]}-kieli, ${_i(f)}` : null;
  switch (o[0]) {
    case "notes":
      return d(1, 2) ? h(u(1), u(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Fe(u(1), i)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && d(1) ? `Kuule ja toista: ${Fe(u(1), i, !0)}` : d(1, 2) && h(u(1), u(2)) ? `Kuule ja toista: ${h(u(1), u(2))}` : null;
    case "interval":
      return d(1) && rr[u(1)] ? `${rr[u(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!d(1, 3) || !bi[p]) return null;
      const f = bi[p].tones.find(([k]) => k === u(3))?.[1];
      return f ? `${Ih(u(1), p)}: ${f}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ke.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const f = `${di(u(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const k = Ke.scaleNotes(p).find(([S]) => S === u(3))?.[1];
        return k ? `${f}: ${k}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && h(u(3), u(4)) ? `${f}: ${h(u(3), u(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${di(u(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && d(3)) {
        const f = bi.maj.tones.find(([k]) => k === u(3))?.[1];
        return f ? `${p}: ${f}. aste` : null;
      }
      return d(3, 4) && h(u(3), u(4)) ? `${p}: ${h(u(3), u(4))}` : null;
    }
    default:
      return null;
  }
}
function Oh(s) {
  return Object.entries(s).flatMap(([i, o]) => {
    const [u, d, h, ...p] = i.split(":");
    return !p.length || !["solo", "guided"].includes(h) ? [] : [{ key: i, input: u, check: d, guided: h === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const eu = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", dy = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function hy(s) {
  const i = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${as(s.mode)}${s.hints ? ` · ${Fa[s.hints].title}` : ""} · ${i} · keskimäärin ${eu(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function fy({ store: s, s: i, locked: o, changed: u }) {
  const [d, h] = A.useState(""), p = A.useRef(null), { recent: f, sessions: k, stats: S } = s.data, v = Ai(i), y = zh(i), j = [...new Set(f.map((_) => _.mode))].map((_) => {
    const K = f.filter((B) => B.mode === _);
    return { mode: _, ...Vl(K), last: Math.max(...K.map((B) => B.at)) };
  }).sort((_, K) => K.last - _.last), T = Oh(S).filter((_) => !_.guided && _.mode === i.mode && _.input === v && _.check === y && _.stat.attempts >= 3).map((_) => ({ ..._, score: iu(_.stat), text: _f(_.item, i.flats) })).filter((_) => _.text && _.score < 0.8).sort((_, K) => _.score - K.score).slice(0, 5), b = Oh(S).reduce((_, K) => _ + K.stat.attempts, 0);
  function w() {
    const _ = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), K = URL.createObjectURL(_), B = document.createElement("a");
    B.href = K, B.download = "musiikin-kartta-harjoittelu.json", B.click(), setTimeout(() => URL.revokeObjectURL(K), 1e3);
  }
  async function N(_) {
    if (_)
      try {
        const K = await _.text();
        if (b && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        s.restore(K), h("Varmuuskopio palautettu."), u();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function F() {
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
        /* @__PURE__ */ a.jsx("tbody", { children: j.map((_) => /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { scope: "row", children: as(_.mode) }),
          /* @__PURE__ */ a.jsx("td", { children: _.count }),
          /* @__PURE__ */ a.jsx("td", { children: _.solo ? `${_.soloFirst}/${_.solo} · ${Math.round(_.soloFirst / _.solo * 100)} %` : "–" }),
          /* @__PURE__ */ a.jsx("td", { children: _.guided }),
          /* @__PURE__ */ a.jsx("td", { children: eu(_.ms / _.count) })
        ] }, _.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi" }),
    T.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        as(i.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ a.jsx("ul", { children: T.map((_) => /* @__PURE__ */ a.jsxs("li", { children: [
        _.text,
        " · viime aikoina ",
        Math.round(ar(_.stat) * 100),
        " % heti oikein · ",
        eu(or(_.stat))
      ] }, _.key)) })
    ] }) : /* @__PURE__ */ a.jsx("p", { children: b ? `Harjoituksessa ${as(i.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        dy[i.input],
        ") ja tarkistuksella (",
        i.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ a.jsx(Hp, { area: { strings: i.strings, min: i.min, max: i.max, fixed: "" }, stats: S, input: i.input, check: i.check, flats: i.flats })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      k.length ? /* @__PURE__ */ a.jsx("ul", { children: k.slice(-10).reverse().map((_) => /* @__PURE__ */ a.jsx("li", { children: hy(_) }, _.id)) }) : /* @__PURE__ */ a.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ a.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ a.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (_) => {
          N(_.target.files?.[0]);
        } }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: o || !b, onClick: F, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ a.jsx("p", { role: "status", children: d })
    ] }),
    s.warning && /* @__PURE__ */ a.jsx("p", { role: "status", className: "error", children: s.warning })
  ] });
}
function my() {
  try {
    return new Gd(localStorage);
  } catch {
    return new Gd();
  }
}
const $h = (s) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents }), py = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", vy = [0, 2, 4, 5, 7, 9, 11];
function ky(s) {
  return s.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : s.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : s.mode === "chord" ? s.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : s.mode === "scale" ? ["mp", "majp"].includes(s.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function yy() {
  const [s] = A.useState(my), [i, o] = A.useState(() => Pp(location.search, s.data.settings)), [, u] = A.useReducer((L) => L + 1, 0), d = A.useRef(null), h = A.useRef(new Hv()), p = A.useRef(new dr()), f = A.useRef(0), k = A.useRef(), S = A.useRef(), v = A.useRef(null), y = A.useRef(0), j = A.useRef(null), T = A.useRef(i);
  T.current = i;
  const [b, w] = A.useState({ phase: "off", purpose: "none" }), N = A.useRef(b), F = (L) => {
    N.current = L, w(L);
  }, [_, K] = A.useState(null), [B, V] = A.useState(null), [D, $] = A.useState(null), [O, se] = A.useState(0), [ee, Ee] = A.useState([]), [Te, Z] = A.useState(!1), [ce, G] = A.useState(!1), [oe, re] = A.useState(""), [Y, ae] = A.useState("info"), [te, E] = A.useState(""), [x, ne] = A.useState(0), [fe, de] = A.useState([]), [H, U] = A.useState([]), [J, X] = A.useState(null), [me, Me] = A.useState(!1), [ye, ge] = A.useState(""), [Ne, $e] = A.useState(""), [be, Ve] = A.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : vf(L.get("kappale")) ? "songs" : nv(L.get("polku"));
  }), [et, Je] = A.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.get("polku") === "otelauta" && L.get("harjoitus") === "savelten-etsinta";
  });
  function tt() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.set("harjoitus", "savelten-etsinta"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), Je(!0);
  }
  function z() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), Je(!1);
  }
  function le() {
    Ve(null), Je(!1);
    const L = new URL(location.href);
    L.searchParams.delete("polku"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash);
  }
  const ue = () => {
    bv().then(Ee).catch(() => {
    });
  };
  function je() {
    clearTimeout(S.current), v.current = null, Me(!1);
  }
  function Ce() {
    K(null), V(null), $(null);
  }
  function Ue() {
    h.current.stop(), je(), F({ phase: "off", purpose: "none" }), Ce();
  }
  async function He(L) {
    if (h.current.active && N.current.phase === "on")
      return je(), F({ ...N.current, purpose: L }), h.current.rearm(), !0;
    F({ phase: "requesting", purpose: L }), Ce();
    try {
      const pe = await h.current.start(T.current.device, {
        ...$h(T.current),
        onFrame: (Ge) => Ot.current.frame(Ge),
        onStableNote: (Ge) => Ot.current.stable(Ge)
      }, () => Ot.current.lost());
      return pe ? (F({ phase: "on", purpose: L, info: pe }), ue(), !0) : !1;
    } catch (pe) {
      return F({ phase: "error", purpose: "none", error: Uv(pe) }), !1;
    }
  }
  function mt(L) {
    v.current?.push(L.rms);
    const pe = performance.now();
    pe - y.current < 66 || (y.current = pe, K(L), se(pe), L.midi !== void 0 && L.frequency !== void 0 && V({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: pe }));
  }
  function Et(L) {
    N.current.purpose === "test" ? $(L) : N.current.purpose === "round" && $t(L.midi, "mic", void 0, L.heldMs);
  }
  function Qt() {
    const L = N.current.purpose === "round";
    je(), Ce(), F({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const pe = d.current;
    L && pe && ["active", "feedback", "paused"].includes(pe.phase) && (Re(), G(!1), pe.pause(), E("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), u());
  }
  const Ot = A.useRef({ frame: mt, stable: Et, lost: Qt });
  Ot.current = { frame: mt, stable: Et, lost: Qt };
  function gn(L) {
    const pe = La(L), Ge = pe.device !== T.current.device;
    T.current = pe, o(pe), s.settings(pe), E(""), h.current.active && (Ge && N.current.purpose === "test" ? (Ue(), He("test")) : h.current.setOptions($h(pe)));
  }
  function _e(L) {
    $e(""), d.current = null, Je(!1), Ve(L);
  }
  function ln() {
    ge(""), He("test");
  }
  function Le() {
    N.current.phase !== "on" || N.current.purpose !== "test" || (je(), v.current = [], Me(!0), ge("Mitataan taustakohinaa kolme sekuntia. Älä soita."), S.current = setTimeout(() => {
      const L = v.current ?? [];
      if (je(), L.length < 10) {
        ge("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: pe, noise: Ge, loud: Yt } = Gv(L);
      gn({ ...T.current, minRms: pe }), ge(`Taustakohina on ${Math.round(ds(Ge))} dB ja äänikynnys nyt ${Math.round(ds(pe))} dB. ${Yt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Re() {
    f.current++, clearTimeout(k.current), p.current.stop();
  }
  function Ie(L, pe) {
    if (!L.results.length) return;
    const Ge = Vl(L.results);
    s.session({
      id: L.id,
      mode: L.settings.mode,
      count: Ge.count,
      first: Ge.first,
      ms: Ge.ms,
      solo: Ge.solo,
      soloFirst: Ge.soloFirst,
      hints: L.settings.hints,
      at: Date.now(),
      complete: pe
    });
  }
  async function Ze(L) {
    if (!L.question?.sound.length || L.phase !== "active") return;
    Re();
    const pe = f.current;
    L.pause(), h.current.pause(), G(!0), ae("info"), re("Kuuntele…"), u();
    try {
      await p.current.play(L.question.sound);
    } catch {
      pe === f.current && E("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    pe !== f.current || d.current !== L || (L.resume(), h.current.resume(), G(!1), re(""), u());
  }
  async function ut(L) {
    de([]), U([]), X(null), E(""), ne(L.hintLevel), h.current.rearm(), ae("info"), re(""), u(), L.question?.sound.length && await Ze(L);
  }
  async function un() {
    const L = T.current, pe = zl(L);
    if (pe) {
      E(pe);
      return;
    }
    Re();
    const Ge = f.current;
    if (E(""), ge(""), $e(""), wa(L)) {
      Z(!0);
      const dt = await He("round");
      if (Ge !== f.current) return;
      if (Z(!1), !dt) {
        E("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else N.current.phase !== "off" && Ue();
    const Yt = new tv(L, () => s.data.stats, (dt) => s.record(dt));
    try {
      Yt.start();
    } catch (dt) {
      N.current.purpose === "round" && Ue(), E(dt instanceof Error ? dt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Yt, requestAnimationFrame(() => j.current?.scrollIntoView({ block: "start", behavior: "auto" })), await ut(Yt);
  }
  function Nt() {
    Re(), Z(!1), Ue();
  }
  function $t(L, pe, Ge, Yt = 0) {
    const dt = d.current, Ft = dt?.question;
    if (!dt || !Ft || dt.phase !== "active") return;
    const ks = dt.answer(L, pe, Ge, Yt);
    if (ks !== "ignored") {
      if (ks === "candidate")
        X(L), ae("bad"), re(cy(dt.settings, Ft, L));
      else if (ks === "wrong")
        Ge ? de((Tt) => [...Tt, Ge]) : U((Tt) => [...Tt, L]), ae("bad"), re(uy(dt.settings, Ft, pe, L, Ge));
      else if (X(null), ae("good"), re(ly(dt.settings, Ft, pe, L, Ge)), Ie(dt, !1), dt.settings.advance) {
        const Tt = f.current;
        k.current = setTimeout(() => {
          Tt === f.current && Tn();
        }, pe === "mic" ? 1800 : 1400);
      }
      u();
    }
  }
  async function Tn() {
    const L = d.current;
    if (!(!L || L.phase !== "feedback")) {
      Re();
      try {
        L.next();
      } catch (pe) {
        cn(!1), E(pe instanceof Error ? pe.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (L.phase === "done") {
        cn(!0);
        return;
      }
      await ut(L);
    }
  }
  function cn(L = !1) {
    Re(), G(!1), Z(!1), (N.current.purpose === "round" || N.current.phase === "requesting") && Ue();
    const pe = d.current;
    pe && (pe.stop(), Ie(pe, L)), X(null), ne(0), de([]), U([]), E(""), $e(L ? "complete" : "stopped"), ae("info"), re(""), u();
  }
  function Mn() {
    const L = d.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    Re(), G(!1), L.pause();
    const pe = N.current.purpose === "round";
    pe && Ue(), ae("info"), re(`Harjoitus on tauolla.${pe ? " Mikrofoni on suljettu." : ""}`), u();
  }
  async function hr() {
    const L = d.current;
    if (!L || L.phase !== "paused" || ce) return;
    Re();
    const pe = f.current;
    if (E(""), wa(L.settings)) {
      Z(!0);
      const Ge = await He("round");
      if (pe !== f.current) return;
      if (Z(!1), !Ge) {
        E("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), ae("info"), re(""), u(), L.phase === "active" && (h.current.rearm(), L.question?.sound.length && await Ze(L));
  }
  function ms(L) {
    const pe = d.current;
    !pe || pe.phase !== "active" || (pe.useHint(L), ne(L), u());
  }
  const mi = A.useRef({ hidden: () => {
  }, restored: () => {
  } });
  mi.current = {
    hidden: () => {
      const L = d.current;
      L && ["active", "feedback"].includes(L.phase) || ce ? Mn() : N.current.phase !== "off" && N.current.phase !== "error" && (Re(), Z(!1), Ue());
    },
    restored: () => {
      Z(!1), G(!1), F({ phase: "off", purpose: "none" }), Ce(), u();
    }
  }, A.useEffect(() => {
    ue();
    const L = () => ue();
    navigator.mediaDevices?.addEventListener?.("devicechange", L);
    const pe = () => {
      f.current++, clearTimeout(k.current), clearTimeout(S.current), h.current.stop(), p.current.stop(), Kv(), d.current?.pause();
    }, Ge = () => {
      document.hidden && mi.current.hidden();
    }, Yt = (dt) => {
      dt.persisted && mi.current.restored();
    };
    return document.addEventListener("visibilitychange", Ge), window.addEventListener("pagehide", pe), window.addEventListener("pageshow", Yt), () => {
      pe(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", Ge), window.removeEventListener("pagehide", pe), window.removeEventListener("pageshow", Yt);
    };
  }, []);
  const Li = A.useRef(null), pi = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${ce}`;
  A.useEffect(() => {
    const L = d.current, pe = j.current, Ge = document.activeElement;
    !L || !pe || !(Ge === document.body || pe.contains(Ge)) || (L.phase === "feedback" ? Li.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !ce && (Ge === document.body || Ge === Li.current) && pe.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [pi]);
  const ze = d.current, nt = !!ze && ["active", "paused", "feedback"].includes(ze.phase), st = nt ? ze.settings : i, vt = nt ? ze.question : void 0, Bt = !!vt && !!ze?.answered, dn = nt && ze.phase === "paused" && !ce && !Bt, Bn = nt && ze.phase === "active" && !ce, ps = nt ? null : zl(i), vs = nt || Te, fr = Pi(st), bn = Wp(st), Vn = vt && !Bt ? x : 0, Ri = vt ? ev(st, vt, Bt ? 2 : Vn) : { marks: [], text: "" }, mr = [...new Map([...Ri.marks, ...Bt ? [] : fe.map((L) => ({ ...L, label: Fe(L.midi, st.flats), kind: "wrong" }))].map((L) => [Xe(L), L])).values()], pr = nt && wa(st), vr = !!vt && !dn && (vt.choices === "position" || mr.length > 0), Ct = ze ? Vl(ze.results) : null, kr = !ze || st.hints !== "fade" ? "" : ze.index <= 3 ? " · vastaus näkyy" : ze.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", yr = ze && !nt ? ze.results.filter((L) => L.errors > 0 || L.hint) : [], [za, ct] = ky(st), Kn = /* @__PURE__ */ a.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ a.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ a.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), xn = s.data.notice === "hints-default" && /* @__PURE__ */ a.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
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
  return !nt && be === null ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    xn,
    /* @__PURE__ */ a.jsx(sv, { onSelect: _e })
  ] }) : !nt && be === "scales" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    xn,
    /* @__PURE__ */ a.jsx(lk, { onBack: le })
  ] }) : !nt && be === "ear" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    xn,
    et ? /* @__PURE__ */ a.jsx(uk, { onBack: z }) : /* @__PURE__ */ a.jsx(rv, { onBack: le, onNotes: tt })
  ] }) : !nt && be === "chords" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    xn,
    /* @__PURE__ */ a.jsx(hk, { onBack: le })
  ] }) : !nt && be === "songs" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    xn,
    /* @__PURE__ */ a.jsx(ty, { onBack: le })
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Kn,
    xn,
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsxs("a", { href: za, children: [
      "Lue tämän harjoituksen teoria: ",
      ct,
      " →"
    ] }) }),
    be !== "legacy" && /* @__PURE__ */ a.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
        nt && cn(), le();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ a.jsx("h2", { children: be === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ a.jsx("p", { children: be === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    nt ? /* @__PURE__ */ a.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ a.jsx("strong", { children: as(st.mode) }),
      " · ",
      Jd(st)
    ] }) : be === "legacy" ? /* @__PURE__ */ a.jsx(Xd, { s: i, change: gn, locked: vs, problem: ps }) : /* @__PURE__ */ a.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ a.jsx(Xd, { s: i, change: gn, locked: vs, problem: ps })
    ] }),
    !nt && (be === "legacy" || wa(i)) && /* @__PURE__ */ a.jsx(
      sy,
      {
        mic: b,
        frame: _,
        heard: B,
        accepted: D,
        now: O,
        s: i,
        change: gn,
        devices: ee,
        locked: Te,
        calibrating: me,
        calibration: ye,
        onTest: ln,
        onStop: Ue,
        onCalibrate: Le
      }
    ),
    /* @__PURE__ */ a.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: j, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h2", { id: "session-title", children: as(st.mode) }),
        /* @__PURE__ */ a.jsx("span", { "data-testid": "round-status", children: nt ? `Kysymys ${ze.index}${ze.total ? " / " + ze.total : " · vapaa harjoittelu"} · ${Fa[st.hints].title}${kr}${ze.phase === "paused" && !ce ? " · tauolla" : ""}` : Ne === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !nt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        ze && ze.results.length > 0 && Ct ? /* @__PURE__ */ a.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ a.jsx("h3", { children: Ne === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ a.jsxs("dl", { children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-solo", children: Ct.solo ? `${Ct.soloFirst} / ${Ct.solo}` : "–" })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-guided", children: Ct.guided })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ a.jsx("dd", { children: py(Ct.ms / Ct.count) })
            ] })
          ] }),
          Ct.solo === 0 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          yr.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ a.jsx("ul", { children: [...new Set(yr.map((L) => _f(L.item, i.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ a.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ a.jsx("p", { className: "question idle", children: Jd(i) }),
        /* @__PURE__ */ a.jsx("div", { className: "action-row", children: Te ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: Nt, children: "Peru" })
        ] }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !!ps, onClick: () => {
          un();
        }, children: ze?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !ze && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      nt && vt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: dn ? "Harjoitus on tauolla." : vt.prompt }),
        /* @__PURE__ */ a.jsx("p", { className: "how", "data-testid": "instruction", children: dn ? "Kysymys palaa näkyviin, kun jatkat." : ce ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : oy(st, vt) }),
        ze.hintLevel > 0 && !Bt && /* @__PURE__ */ a.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: st.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        pr && /* @__PURE__ */ a.jsx(iy, { mic: b, frame: _, heard: B, s: st, now: O }),
        vt.choices === "note" && !dn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (st.accidentals ? Array.from({ length: 12 }, (L, pe) => pe) : vy).map((L) => /* @__PURE__ */ a.jsx("button", { type: "button", className: H.includes(L) ? "wrong" : Bt && L === vt.midi % 12 ? "right" : "", disabled: !Bn || H.includes(L), onClick: () => $t(L, "note"), children: Fe(L, st.flats) }, L)) }),
        vt.choices === "degree" && !dn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (st.mode === "scale" ? Ke.scaleNotes(Ke.SCALES[st.scale]) : bi[st.chord].tones).map(([L, pe]) => /* @__PURE__ */ a.jsx("button", { type: "button", className: H.includes(L) ? "wrong" : Bt && L === vt.interval ? "right" : "", disabled: !Bn || H.includes(L), onClick: () => $t(L, "degree"), children: pe }, L)) }),
        vr && /* @__PURE__ */ a.jsx(
          hi,
          {
            area: bn,
            marks: mr,
            disabled: !Bn || vt.choices !== "position" || st.input === "mic",
            onAnswer: (L) => $t(L.midi, "board", L),
            caption: fr.fixed === "shape" ? `${st.shape}-muodon alue` : fr.fixed === "box" ? `Boksin ${st.box} alue` : "Otelauta"
          }
        ),
        !Bt && !dn && Vn > 0 && Ri.text && /* @__PURE__ */ a.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: Ri.text }),
        /* @__PURE__ */ a.jsx("p", { className: `feedback ${Y}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: oe }),
        J !== null && ze.phase === "active" && /* @__PURE__ */ a.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            ze.confirmWrong(), X(null), re("Kirjattu virheeksi. Etsi sävel uudelleen."), u();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ a.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        te && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: te }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          ze.phase === "feedback" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", ref: Li, onClick: () => {
            Tn();
          }, children: ze.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          ze.phase === "active" && !Bt && !ce && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            Vn === 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ms(Math.max(1, ze.hintLevel)), children: ze.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Vn === 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ms(2), children: "Näytä vastaus" }),
            Vn > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ne(0), children: "Piilota vihje" })
          ] }),
          vt.sound.length > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: !Bn, onClick: () => {
            Ze(ze);
          }, children: "Kuuntele uudelleen" }),
          ze.phase === "paused" && !ce ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: Te, onClick: () => {
            hr();
          }, children: Te ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: Mn, children: "Tauko" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => cn(), children: "Lopeta harjoitus" })
        ] }),
        ze.phase === "feedback" && st.advance && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "tally", children: Ct?.count ? `Vastattu ${Ct.count} · itsenäisesti heti oikein ${Ct.soloFirst}/${Ct.solo}${Ct.guided ? ` · vihjeen kanssa ${Ct.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !nt && te && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: te })
    ] }),
    !nt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { className: "link-row", children: [
        i.mode === "scale" && /* @__PURE__ */ a.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ke.CHROM[i.root])}&asteikko=${i.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ a.jsx("a", { href: Lp(i), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ a.jsx(fy, { store: s, s: i, locked: vs, changed: () => {
        const L = La(s.data.settings);
        T.current = L, o(L), u();
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
Ep.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ a.jsx(yy, {}));
//# sourceMappingURL=app.js.map
